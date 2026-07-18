"""venture-atlas/1 — the official schema for the Venture Atlas data contract.

Settled 2026-07-12 (gate-verified) in:
    devdocs/inquiries/2026-07-12_13-01__venture_atlas_json_contract__producible_vs_consumable/finding.md
which refines the node-choice finding of 2026-07-11 (folders as substrate; grouping
OPTIONAL — the demo's module tier is example-code structure, not a requirement).

The JSON this models is emitted by the adapter (`inquiries2visualisationsJSONmaker.py`,
implementing the finding's 12 producer clauses) and consumed by the visualizer through
a thin loader shim (ISO->ms, optional group->containment, synthetic root/group tiles).

Conventions carried by this module:
  * JSON keys are camelCase; Python attributes are snake_case (alias generator).
    Serialize with:  atlas.model_dump_json(by_alias=True, exclude_none=True)
  * Timestamps are OFFSET-LESS local ISO-8601 strings (no timezone was ever recorded
    in the folder names); tz-aware datetimes are rejected.
  * `kind`, `status` and edge `type` are OPEN enums: known values are documented in
    the frozensets below, unknown values pass validation (the 3->6 edge-type lesson:
    the corpus can grow vocabulary; the schema must not break when it does).
  * The envelope's counts/anomalies are HONESTY COUNTERS — computed, never estimated;
    the model enforces counts == reality at validation time (producer clause 10).

Validate an emitted file:
    python3 docs/visualisation/schema.py path/to/data.json
"""

from __future__ import annotations

import sys
from datetime import datetime
from typing import List, Literal, Optional

from pydantic import BaseModel, ConfigDict, Field, field_validator, model_validator
from pydantic.alias_generators import to_camel

SCHEMA_VERSION = "venture-atlas/1"

# Open-enum documentation (NOT closed sets — see module docstring).
KNOWN_NODE_KINDS = frozenset({"inquiry"})  # v2 candidates: "canon", "seed"
KNOWN_STATUSES = frozenset({"complete", "active", "superseded"})
KNOWN_EDGE_TYPES = frozenset(
    {
        "continues-from",     # 180 lines in the corpus at settlement time
        "related",            # 487
        "superseded-by",      # 1
        "synthesizes-from",   # 17 (incl. terse "SYNTHESIZES" spellings, normalized)
        "grounds-in",         # 9
        "branch-of",          # 6
    }
)

INQUIRY_ID_PATTERN = r"^\d{4}-\d{2}-\d{2}_\d{2}-\d{2}__.+"


class _Base(BaseModel):
    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=True,
        extra="forbid",
    )


def _naive(value: datetime, where: str) -> datetime:
    if value.tzinfo is not None:
        raise ValueError(
            f"{where}: timestamps are offset-less local ISO-8601 (no tz was ever recorded)"
        )
    return value


class Source(_Base):
    """Where the snapshot came from."""

    root: str = "devdocs/inquiries"
    commit: Optional[str] = None  # `git rev-parse --short HEAD`; dropped silently outside git


class Counts(_Base):
    """Computed from the emitted arrays — never estimated (clause 10)."""

    nodes: int
    edges: int
    groups: int  # 0 when grouping was off
    bodies: int  # nodes whose body file existed
    route_rows: int = 0       # all parsed route-table rows (route-layer; 0 pre-route-layer)
    open_route_rows: int = 0  # the unticked subset — the open-work field's size


class Anomalies(_Base):
    """The honesty counters: what the parse skipped, patched, or could not resolve."""

    date_only_stamps: int = 0        # May-era `- YYYY-MM-DD` History lines (midnight-truncated)
    clamped_last_worked: int = 0     # nodes where max(stamps) < createdAt (clause 3 fired)
    unresolved_edge_targets: int = 0 # edges carrying targetRaw instead of a folder id
    missing_bodies: int = 0          # folders with neither finding.md nor _branch.md
    skipped_dirs: List[str] = Field(default_factory=list)  # non-matching dirs under root
    unparsed_route_tables: int = 0   # routelister.md files found but with no parseable
                                     # Direction-header table (records-only / pre-convention
                                     # formats) — the route-layer's no-silent-drops counter


class Body(_Base):
    """A node's markdown body. `repo_path` is PROVENANCE and always present;
    `text` (inline mode) or `href` (path mode) is the render source."""

    repo_path: str
    file: Literal["finding.md", "_branch.md"]
    size_bytes: int = Field(alias="bytes", ge=0)
    text: Optional[str] = None  # inline mode
    href: Optional[str] = None  # path mode: app-relative URL, e.g. "bodies/<id>.md"


class OpenRoute(_Base):
    """One row of an inquiry's route-map table (`routelister.md` Route Index).

    Header-driven parse over a NON-uniform corpus (the gate's format probe measured
    it: 10 header variants; an old 6-column format has no Essentiality and no tick
    column). Missing columns stay None — the UI renders them as an em-dash, never
    invents values. `ticked` is the consumer-filled done/explored mark (✓ or ◐)."""

    ordinal: Optional[str] = None          # "R1" / "1" — as written in the table
    direction: str                         # the self-explanatory noun phrase (verbatim)
    engagement_type: Optional[str] = None  # open vocabulary (DEVELOP / TEST / ...)
    priority: Optional[str] = None         # attributive, as written (HIGH / MED / ...)
    essentiality: Optional[str] = None     # core / supporting / peripheral (33% of files predate it)
    ticked: bool = False                   # ✓ or ◐ present; ☐/empty = open


class Node(_Base):
    """One inquiry folder = one traverse's record (canon-verbatim)."""

    id: str
    kind: str = "inquiry"  # open enum; see KNOWN_NODE_KINDS
    slug: str
    title: str
    status: str  # open enum; see KNOWN_STATUSES (lowercased by the producer)
    flow_type: Optional[str] = None
    created_at: datetime
    last_worked_at: datetime  # clamped: max(created_at, History stamps) — clause 3
    events: List[datetime] = Field(default_factory=list)  # raw History stamps, day-grain era kept honest
    group: Optional[str] = None  # OPTIONAL — no node ever requires a parent
    body: Optional[Body] = None  # None only when counted in anomalies.missing_bodies
    open_routes: Optional[List[OpenRoute]] = None  # route-layer: this inquiry's route-map
    # rows (root routelister.md, else docarchive/); None = no file or no parseable table
    # (the latter counted in anomalies.unparsed_route_tables)

    @field_validator("created_at", "last_worked_at")
    @classmethod
    def _naive_stamps(cls, v: datetime) -> datetime:
        return _naive(v, "Node timestamps")

    @field_validator("events")
    @classmethod
    def _naive_events(cls, v: List[datetime]) -> List[datetime]:
        return [_naive(e, "Node.events") for e in v]

    @model_validator(mode="after")
    def _invariants(self) -> "Node":
        if self.kind == "inquiry":
            import re

            if not re.match(INQUIRY_ID_PATTERN, self.id):
                raise ValueError(f"inquiry node id does not match folder pattern: {self.id!r}")
        if self.last_worked_at < self.created_at:
            raise ValueError(
                f"{self.id}: lastWorkedAt precedes createdAt — the clause-3 clamp was not applied"
            )
        return self


class Edge(_Base):
    """A Relationships line. Exactly one of `target` (a folder id) or `target_raw`
    (a file path or prose reference — data, not an error) is set (clause 5)."""

    type: str  # open enum; see KNOWN_EDGE_TYPES
    source: str
    target: Optional[str] = None
    target_raw: Optional[str] = None
    note: Optional[str] = None  # the parenthetical annotation, kept FULL (clause 6)

    @model_validator(mode="after")
    def _exactly_one_target(self) -> "Edge":
        if (self.target is None) == (self.target_raw is None):
            raise ValueError(
                f"edge from {self.source!r}: exactly one of target/targetRaw must be set"
            )
        return self


class Group(_Base):
    """A venture-shaped chain component (union-find over resolved continues-from edges).
    Present only when grouping was requested; membership implies nothing is required."""

    id: str
    label: str
    members: List[str]
    root: str  # the earliest member (chronological id order)


class VentureAtlas(_Base):
    """The envelope — one atomic snapshot of the record layer."""

    schema_version: Literal["venture-atlas/1"] = Field(
        default=SCHEMA_VERSION, alias="schema"
    )
    generated_at: datetime
    source: Source
    counts: Counts
    anomalies: Anomalies
    nodes: List[Node]
    edges: List[Edge]
    groups: Optional[List[Group]] = None  # absent entirely when grouping is off

    @field_validator("generated_at")
    @classmethod
    def _naive_generated(cls, v: datetime) -> datetime:
        return _naive(v, "generatedAt")

    @model_validator(mode="after")
    def _honesty_and_integrity(self) -> "VentureAtlas":
        node_ids = {n.id for n in self.nodes}
        if len(node_ids) != len(self.nodes):
            raise ValueError("duplicate node ids")

        # Clause 10: counts are computed, never estimated.
        actual_groups = len(self.groups) if self.groups else 0
        actual_bodies = sum(1 for n in self.nodes if n.body is not None)
        actual_route_rows = sum(len(n.open_routes) for n in self.nodes if n.open_routes is not None)
        actual_open_rows = sum(
            1 for n in self.nodes for r in (n.open_routes or []) if not r.ticked
        )
        expect = {
            "counts.nodes": (self.counts.nodes, len(self.nodes)),
            "counts.edges": (self.counts.edges, len(self.edges)),
            "counts.groups": (self.counts.groups, actual_groups),
            "counts.bodies": (self.counts.bodies, actual_bodies),
            "counts.routeRows": (self.counts.route_rows, actual_route_rows),
            "counts.openRouteRows": (self.counts.open_route_rows, actual_open_rows),
        }
        wrong = {k: v for k, v in expect.items() if v[0] != v[1]}
        if wrong:
            raise ValueError(f"envelope counts diverge from reality: {wrong}")

        if self.anomalies.missing_bodies != len(self.nodes) - actual_bodies:
            raise ValueError("anomalies.missingBodies diverges from nodes without bodies")

        unresolved = sum(1 for e in self.edges if e.target_raw is not None)
        if self.anomalies.unresolved_edge_targets != unresolved:
            raise ValueError("anomalies.unresolvedEdgeTargets diverges from edges with targetRaw")

        # Referential integrity.
        for e in self.edges:
            if e.source not in node_ids:
                raise ValueError(f"edge source not a node: {e.source!r}")
            if e.target is not None and e.target not in node_ids:
                raise ValueError(f"resolved edge target not a node: {e.target!r}")

        group_ids = {g.id for g in self.groups} if self.groups else set()
        if self.groups:
            if len(group_ids) != len(self.groups):
                raise ValueError("duplicate group ids")
            for g in self.groups:
                missing = [m for m in g.members if m not in node_ids]
                if missing:
                    raise ValueError(f"group {g.id}: members not nodes: {missing[:3]}")
                if g.root not in g.members:
                    raise ValueError(f"group {g.id}: root not among members")
        for n in self.nodes:
            if n.group is not None:
                if not self.groups:
                    raise ValueError(f"{n.id}: carries a group id but no groups[] present")
                if n.group not in group_ids:
                    raise ValueError(f"{n.id}: unknown group {n.group!r}")
        return self


__all__ = [
    "SCHEMA_VERSION",
    "KNOWN_NODE_KINDS",
    "KNOWN_STATUSES",
    "KNOWN_EDGE_TYPES",
    "Source",
    "Counts",
    "Anomalies",
    "Body",
    "OpenRoute",
    "Node",
    "Edge",
    "Group",
    "VentureAtlas",
]


def _main(argv: List[str]) -> int:
    if len(argv) != 1:
        print("usage: python3 schema.py <data.json>   # validate an emitted snapshot")
        return 2
    raw = open(argv[0], encoding="utf-8").read()
    atlas = VentureAtlas.model_validate_json(raw)
    c, a = atlas.counts, atlas.anomalies
    print(f"OK  {atlas.schema_version}  generated {atlas.generated_at}")
    print(
        f"    nodes={c.nodes} edges={c.edges} groups={c.groups} bodies={c.bodies} "
        f"routeRows={c.route_rows} (open={c.open_route_rows})"
    )
    print(
        f"    anomalies: dateOnly={a.date_only_stamps} clamped={a.clamped_last_worked} "
        f"unresolved={a.unresolved_edge_targets} missingBodies={a.missing_bodies} "
        f"skippedDirs={len(a.skipped_dirs)} unparsedRouteTables={a.unparsed_route_tables}"
    )
    return 0


if __name__ == "__main__":
    sys.exit(_main(sys.argv[1:]))
