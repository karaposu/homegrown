"""inquiries2visualisationsJSONmaker — the venture-atlas/1 adapter.

Reads the inquiry folders (exactly three sources per folder: the folder name,
`_state.md`, and `finding.md`/`_branch.md`) and emits one static JSON conforming
to the official schema (`docs/visualisation/schema.py`). Every snapshot is
validated against the schema before it is written — an invalid file cannot be
emitted.

This implements the 12 producer clauses of:
    devdocs/inquiries/2026-07-12_13-01__venture_atlas_json_contract__producible_vs_consumable/finding.md  §4

Usage:
    python3 docs/visualisation/inquiries2visualisationsJSONmaker.py                # inline (default) -> ./data.json
    python3 docs/visualisation/inquiries2visualisationsJSONmaker.py --path         # bodies copied to <out-dir>/bodies/
    python3 docs/visualisation/inquiries2visualisationsJSONmaker.py --no-groups    # omit chain groups entirely
    python3 docs/visualisation/inquiries2visualisationsJSONmaker.py --root devdocs/inquiries --out public/data.json

No server, no LLM, no upkeep: re-run to regenerate. Every rendered word has a real author.
"""

from __future__ import annotations

import argparse
import re
import shutil
import subprocess
import sys
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Tuple

sys.path.insert(0, str(Path(__file__).resolve().parent))
from schema import (  # noqa: E402
    Anomalies,
    Body,
    Counts,
    Edge,
    Group,
    Node,
    OpenRoute,
    Source,
    VentureAtlas,
)

# Clause 1 — the include filter.
DIR_RE = re.compile(r"^(\d{4})-(\d{2})-(\d{2})_(\d{2})-(\d{2})__(.+)$")

# Clause 2 — both History stamp patterns (full, then date-only May-era).
STAMP_FULL_RE = re.compile(r"^- (\d{4}-\d{2}-\d{2})_(\d{2})-(\d{2})[:\s]", re.M)
STAMP_DATE_RE = re.compile(r"^- (\d{4}-\d{2}-\d{2})[:\s]", re.M)

# Clause 4 — the six known Relationships line-types (+ terse spellings normalized);
# unknown ALL-CAPS line-types pass through verbatim, lowercased/hyphenated.
REL_LINE_RE = re.compile(r"^\s*-\s+([A-Z][A-Z_ ]+?)\s*:\s*(.+)$")
TYPE_MAP = {
    "CONTINUES FROM": "continues-from",
    "RELATED": "related",
    "SUPERSEDED BY": "superseded-by",
    "SYNTHESIZES FROM": "synthesizes-from",
    "SYNTHESIZES": "synthesizes-from",  # terse spelling in 3 old folders
    "GROUNDS IN": "grounds-in",
    "BRANCH_OF": "branch-of",
    "BRANCH OF": "branch-of",
}
FOLDER_ID_RE = re.compile(r"(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}__[A-Za-z0-9_\-]+)")
NOTE_RE = re.compile(r"\((.*)\)\s*$", re.S)

SECTION_RE = {
    "status": re.compile(r"^## Status\s*\n+\s*(\S+)", re.M),
    "flow": re.compile(r"^## Flow-type\s*\n+\s*(\S+)", re.M),
    "relationships": re.compile(r"^## Relationships\s*\n(.*?)(?=^## |\Z)", re.M | re.S),
}

# --- The route layer (gate-approved 2026-07-12; format probe first, per
#     devdocs/inquiries/2026-07-12_16-41__atlas_usefulness_for_the_foreseer__now_ventures_holistic/finding.md §3).
# The corpus is NOT uniform (probe: 111 files, 10 header variants; an old 6-column
# format has grain/kind and neither Essentiality nor a tick column; ~23 files are
# records-only with no table at all). So: header-DRIVEN column mapping, root +
# docarchive/ sweep, and files without a parseable table counted — never dropped
# silently — in anomalies.unparsedRouteTables.
ROUTE_FILE_CANDIDATES = ("routelister.md", "docarchive/routelister.md")  # root wins
ROUTE_HEADER_ALIASES = {
    "#": "ordinal",
    "r#": "ordinal",
    "no": "ordinal",
    "no.": "ordinal",
    "direction": "direction",
    "engagement-type": "engagement_type",
    "engagement": "engagement_type",
    "engage": "engagement_type",
    "type": "engagement_type",
    "priority": "priority",
    "essentiality": "essentiality",
    "✓": "ticked",
    "done/explored": "ticked",
}
TICK_RE = re.compile(r"[✓◐]")  # ◐ = partially consumed — counted as ticked (the
                               # surfacing probe's own convention); ☐/empty = open
_TABLE_SEP_RE = re.compile(r"^\s*\|?[\s:\-|]+\|?\s*$")


def _split_table_row(line: str) -> List[str]:
    cells = line.strip().strip("|").split("|")
    return [c.strip() for c in cells]


def parse_route_table(text: str) -> Optional[List[OpenRoute]]:
    """First markdown table whose header carries a Direction column -> OpenRoute rows.
    Returns None when no such table exists (the caller counts it)."""
    lines = text.splitlines()
    for i, line in enumerate(lines):
        if "|" not in line or "direction" not in line.lower():
            continue
        header = [h.lower() for h in _split_table_row(line)]
        if "direction" not in header:
            continue
        colmap = {idx: ROUTE_HEADER_ALIASES[h] for idx, h in enumerate(header) if h in ROUTE_HEADER_ALIASES}
        if "direction" not in colmap.values():
            continue
        rows: List[OpenRoute] = []
        j = i + 1
        if j < len(lines) and _TABLE_SEP_RE.match(lines[j]):
            j += 1
        while j < len(lines) and lines[j].lstrip().startswith("|"):
            cells = _split_table_row(lines[j])
            j += 1
            fields: Dict[str, str] = {}
            for idx, cell in enumerate(cells):
                key = colmap.get(idx)
                if key and cell:
                    fields[key] = cell
            direction = fields.get("direction", "")
            if not direction or set(direction) <= {"-", ":", " "}:
                continue  # separator noise / empty rows
            rows.append(
                OpenRoute(
                    ordinal=fields.get("ordinal"),
                    direction=direction,
                    engagement_type=fields.get("engagement_type"),
                    priority=fields.get("priority"),
                    essentiality=fields.get("essentiality"),
                    ticked=bool(TICK_RE.search(fields.get("ticked", ""))),
                )
            )
        return rows  # the Route Index is the file's first Direction-header table
    return None


def parse_routes(folder: Path) -> Tuple[Optional[List[OpenRoute]], bool]:
    """(rows, unparsed_flag) for one inquiry folder. rows is None when the folder has
    no route-map at all OR the file had no parseable table; the flag distinguishes:
    it is True only in the found-but-unparseable case."""
    for cand in ROUTE_FILE_CANDIDATES:
        p = folder / cand
        if p.exists():
            rows = parse_route_table(p.read_text(encoding="utf-8", errors="ignore"))
            return (rows, rows is None)
    return None, False


def prettify(slug: str) -> str:
    """Clause 7 — display title from the slug (chip truncation stays in the view)."""
    return slug.replace("__", " — ").replace("_", " ")


def parse_stamps(state_text: str) -> Tuple[List[datetime], int]:
    """Clause 2 — all History stamps; date-only lines truncate to midnight (counted)."""
    full = {
        m.start(): datetime.fromisoformat(f"{m.group(1)}T{m.group(2)}:{m.group(3)}:00")
        for m in STAMP_FULL_RE.finditer(state_text)
    }
    date_only = 0
    events: List[datetime] = list(full.values())
    for m in STAMP_DATE_RE.finditer(state_text):
        if m.start() in full:  # the full pattern already claimed this line
            continue
        events.append(datetime.fromisoformat(f"{m.group(1)}T00:00:00"))
        date_only += 1
    return sorted(events), date_only


def parse_edges(source_id: str, state_text: str, folder_ids: set) -> Tuple[List[Edge], int]:
    """Clauses 4–6 — Relationships lines only; six-type map + verbatim pass-through;
    target duality (folder id vs raw text); notes kept full."""
    block = SECTION_RE["relationships"].search(state_text)
    if not block:
        return [], 0
    edges: List[Edge] = []
    unresolved = 0
    for line in block.group(1).splitlines():
        lm = REL_LINE_RE.match(line)
        if not lm:
            continue
        raw_type, rest = lm.group(1).strip(), lm.group(2).strip()
        etype = TYPE_MAP.get(raw_type)
        if etype is None:
            if raw_type in ("ROOT_INQUIRY", "BRANCH_SET"):  # index-style lines, not concept edges
                continue
            etype = raw_type.lower().replace("_", "-").replace(" ", "-")  # open enum, verbatim
        note_m = NOTE_RE.search(rest)
        note = note_m.group(1).strip() if note_m else None
        targets = [t for t in dict.fromkeys(FOLDER_ID_RE.findall(rest)) if t != source_id]
        resolved = [t for t in targets if t in folder_ids]
        raw_remainder = NOTE_RE.sub("", rest).strip().rstrip(":").strip()
        if resolved:
            for t in resolved:
                edges.append(Edge(type=etype, source=source_id, target=t, note=note))
            for t in targets:
                if t not in folder_ids:  # a named-but-missing folder (e.g. renamed)
                    edges.append(Edge(type=etype, source=source_id, target_raw=t, note=note))
                    unresolved += 1
        else:
            target_raw = targets[0] if targets else (raw_remainder or "(unspecified)")
            edges.append(Edge(type=etype, source=source_id, target_raw=target_raw, note=note))
            unresolved += 1
    return edges, unresolved


def build_groups(node_ids: List[str], edges: List[Edge]) -> Tuple[List[Group], Dict[str, str]]:
    """Clause 8 — union-find over RESOLVED continues-from edges only; components of
    size >= 2 become groups; standalones carry no group field at all."""
    parent = {i: i for i in node_ids}

    def find(x: str) -> str:
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    for e in edges:
        if e.type == "continues-from" and e.target is not None:
            ra, rb = find(e.source), find(e.target)
            if ra != rb:
                parent[ra] = rb

    comps: Dict[str, List[str]] = {}
    for i in node_ids:
        comps.setdefault(find(i), []).append(i)

    groups: List[Group] = []
    member_of: Dict[str, str] = {}
    for members in comps.values():
        if len(members) < 2:
            continue
        members.sort()  # chronological — the id embeds the stamp
        root = members[0]
        gid = f"g:{root[:16]}"  # the root's date_time prefix
        m = DIR_RE.match(root)
        label = f"{prettify(m.group(6)) if m else root} ×{len(members)}"
        groups.append(Group(id=gid, label=label, members=members, root=root))
        for mem in members:
            member_of[mem] = gid
    groups.sort(key=lambda g: (-len(g.members), g.root))
    return groups, member_of


def git_commit(repo_root: Path) -> Optional[str]:
    try:
        out = subprocess.run(
            ["git", "rev-parse", "--short", "HEAD"],
            cwd=repo_root, capture_output=True, text=True, timeout=5,
        )
        return out.stdout.strip() or None if out.returncode == 0 else None
    except Exception:
        return None  # dropped silently outside git — counted nowhere, per the contract


def main() -> int:
    ap = argparse.ArgumentParser(description="Emit a venture-atlas/1 snapshot from the inquiry folders.")
    ap.add_argument("--root", default="devdocs/inquiries", help="inquiries root (default: devdocs/inquiries)")
    ap.add_argument("--out", default="data.json", help="output JSON path (default: ./data.json)")
    mode = ap.add_mutually_exclusive_group()
    mode.add_argument("--inline", action="store_true", help="embed body text in the JSON (DEFAULT)")
    mode.add_argument("--path", action="store_true", help="copy bodies to <out-dir>/bodies/ and set body.href")
    ap.add_argument("--no-groups", action="store_true", help="omit chain groups entirely")
    ap.add_argument("--compact", action="store_true", help="no indentation (smaller file)")
    args = ap.parse_args()

    root = Path(args.root)
    if not root.is_dir():
        print(f"error: not a directory: {root}", file=sys.stderr)
        return 1
    out_path = Path(args.out)
    inline = not args.path  # inline is the default (the settled D1)

    # Clause 1 — enumerate + filter.
    skipped: List[str] = []
    folders: List[Path] = []
    for child in sorted(root.iterdir()):
        if not child.is_dir():
            continue
        if DIR_RE.match(child.name):
            folders.append(child)
        else:
            skipped.append(child.name)
    folder_ids = {f.name for f in folders}

    bodies_dir = out_path.parent / "bodies"
    if not inline:
        bodies_dir.mkdir(parents=True, exist_ok=True)

    nodes: List[Node] = []
    all_edges: List[Edge] = []
    date_only_total = clamped = missing_bodies = unresolved_total = 0
    unparsed_route_tables = 0

    for folder in folders:
        fid = folder.name
        m = DIR_RE.match(fid)
        assert m
        created = datetime.fromisoformat(f"{m.group(1)}-{m.group(2)}-{m.group(3)}T{m.group(4)}:{m.group(5)}:00")
        slug = m.group(6)

        state_path = folder / "_state.md"
        state_text = state_path.read_text(encoding="utf-8", errors="ignore") if state_path.exists() else ""

        status_m = SECTION_RE["status"].search(state_text)
        status = (status_m.group(1) if status_m else "unknown").lower()  # clause 12
        flow_m = SECTION_RE["flow"].search(state_text)
        flow_type = flow_m.group(1) if flow_m else None

        events, date_only = parse_stamps(state_text)
        date_only_total += date_only
        last = max(events) if events else created
        if last < created:  # clause 3 — the midnight-truncation clamp
            last = created
            clamped += 1

        edges, unresolved = parse_edges(fid, state_text, folder_ids)
        all_edges.extend(edges)
        unresolved_total += unresolved

        # Clause 9 — body: finding.md, else _branch.md (ACTIVE fallback), else counted missing.
        body: Optional[Body] = None
        for candidate in ("finding.md", "_branch.md"):
            p = folder / candidate
            if p.exists():
                text = p.read_text(encoding="utf-8", errors="ignore")
                body = Body(
                    repo_path=f"{root.as_posix()}/{fid}/{candidate}",
                    file=candidate,  # type: ignore[arg-type]
                    size_bytes=len(text.encode("utf-8")),
                    text=text if inline else None,
                    href=None if inline else f"bodies/{fid}.md",
                )
                if not inline:
                    shutil.copyfile(p, bodies_dir / f"{fid}.md")
                break
        if body is None:
            missing_bodies += 1

        open_routes, unparsed = parse_routes(folder)
        if unparsed:
            unparsed_route_tables += 1

        nodes.append(
            Node(
                id=fid, slug=slug, title=prettify(slug), status=status,
                flow_type=flow_type, created_at=created, last_worked_at=last,
                events=events, body=body, open_routes=open_routes,
            )
        )

    groups: Optional[List[Group]] = None
    if not args.no_groups:
        groups, member_of = build_groups([n.id for n in nodes], all_edges)
        for n in nodes:
            n.group = member_of.get(n.id)

    atlas = VentureAtlas(
        generated_at=datetime.now().replace(microsecond=0),
        source=Source(root=root.as_posix(), commit=git_commit(Path.cwd())),
        counts=Counts(
            nodes=len(nodes), edges=len(all_edges),
            groups=len(groups) if groups else 0,
            bodies=sum(1 for n in nodes if n.body is not None),
            route_rows=sum(len(n.open_routes) for n in nodes if n.open_routes is not None),
            open_route_rows=sum(
                1 for n in nodes for r in (n.open_routes or []) if not r.ticked
            ),
        ),
        anomalies=Anomalies(
            date_only_stamps=date_only_total, clamped_last_worked=clamped,
            unresolved_edge_targets=unresolved_total, missing_bodies=missing_bodies,
            skipped_dirs=skipped, unparsed_route_tables=unparsed_route_tables,
        ),
        nodes=nodes, edges=all_edges, groups=groups,
    )  # <- schema validation happens HERE; an invalid snapshot never reaches disk

    out_path.parent.mkdir(parents=True, exist_ok=True)
    payload = atlas.model_dump_json(by_alias=True, exclude_none=True, indent=None if args.compact else 1)
    out_path.write_text(payload, encoding="utf-8")

    c, a = atlas.counts, atlas.anomalies
    mb = out_path.stat().st_size / 1_000_000
    print(f"wrote {out_path}  ({mb:.1f} MB, {'inline' if inline else 'path'} mode)")
    print(f"  nodes={c.nodes} edges={c.edges} groups={c.groups} bodies={c.bodies} "
          f"routeRows={c.route_rows} (open={c.open_route_rows})")
    print(f"  anomalies: dateOnly={a.date_only_stamps} clamped={a.clamped_last_worked} "
          f"unresolved={a.unresolved_edge_targets} missingBodies={a.missing_bodies} "
          f"skippedDirs={a.skipped_dirs} unparsedRouteTables={a.unparsed_route_tables}")
    if mb > 15:
        print("  NOTE: file exceeds ~15 MB — the settled flip-trigger; consider --path mode.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
