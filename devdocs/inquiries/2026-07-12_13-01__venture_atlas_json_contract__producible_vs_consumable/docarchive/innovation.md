# Innovation — the schema draft + the option-field per decision slot

## User Input

devdocs/inquiries/2026-07-12_13-01__venture_atlas_json_contract__producible_vs_consumable/decomposition.md — read with sensemaking.md fully. Production-task mode over P1–P4; generate the principal schema draft + per-slot options D1–D6 with trails; required inversions (carrier-level; a C2-challenger marked as such); Constraint both directions (ADD artifact-CSP; REMOVE single-consumer); Domain transfer w/ native guard; Absence both-levels; Extrapolation at ~1,300 folders. Critique settles. Save with mechanism logs + audit + telemetry.

---

## Seed + methodology mode (Phase 1)

**Seed:** the piece-list P1–P4 — the contract's two inventories, the schema object, the producer clauses.
**Inherited mode:** Standard default, Generator-weighted toward the principal draft ("the deliverable field = the concrete schema draft + options"). **Alternative considered:** Depth-iteration (drive Inversion until the carrier itself is questioned) — what follows: one deep chain (JSON→ndjson→SQLite→"no file at all, parse live in the app") at the cost of slot coverage; rejected as the RUN mode because the slots need breadth, but the chain is EXECUTED as P3's required piece-level inversion below. **Decision: default (with the depth-chain embedded).**

---

## P1 — The producible inventory (content candidates)

**P1-A — The layered catalog (principal).** [Combination: probe values × C1's layering] Two layers: (v1, fully specified) id · slug · title · status · flowType · createdAt · lastWorkedAt (clamped) · events[] · body{repoPath, file, bytes[, text]} · edges (six types, duality, notes) · groups (optional, union-find); (v2+, name-only) routelister route rows (373) · `_route` identities (490) · `_seed.md` records (38) · finding frontmatter (status/model/refines) · docarchive file lists · _branch Question text. *Tests:* survives (every v1 row carries a probe number; the wider layer costs six lines). **Principal.**

**P1-inv — Inversion ("the space is folders-only"):** include canon/seeds in v1's producible catalog since they're parseable too. *Tests:* true-but-staged — their PARSEABILITY belongs to the catalog's v2 layer (already there, name-only); emitting them in v1 contradicts the 10-46 staging without new evidence. **Rejected for v1; strengthens the v2 layer's wording ("parseable today, staged for v2").**

**P1-B — events[] as full stamp array vs count-only.** [Absence, patch-level] The series is tiny (≤10 stamps × 227 nodes ≈ trivial bytes) and enables activity rendering; count-only saves nothing real. *Tests:* survives with array; **option pair carried to Critique (O-events: array vs count).**

## P2 — The consumable requirements (content candidates)

**P2-A — The requirements line (principal).** [Combination] ANY input must provide: id-addressable nodes · a display title · two dates (created, last-worked) · a renderable body per node · edges as id-pairs. Demo-specific (derivable, not required of the data): epoch-ms numbers · root/module/sub kinds · parentId/childIds containment · pos · the single NODES object. **The loader shim (~20 lines):** ISO→`Date.parse` ms · group→parent/children derivation (when a grouped view is on) · counts from array lengths · kind mapping (`inquiry`→sub-ish rendering; `group`→module-ish) — each shim line maps one demo habit onto the truthful data. *Tests:* survives; the shim is the C2 authority-order made concrete. **Principal.**

**P2-chal — Demo-shape mimicry (EXPLICITLY CHALLENGING collapse C2).** [Inversion of the authority order] Emit exactly what the demo eats: nested `NODES` map with `parentId`/`childIds`, ms numbers, baked `pos`, kinds root/module/sub — zero component changes, zero shim. *Tests:* scrutiny — fails on three already-adjudicated grounds, RE-CHECKED here rather than inherited blindly: (a) containment as data hard-codes one grouping — directly violates the user's 2026-07-12 correction (the strongest ground — a user-stated bound, not a taste); (b) ms + baked pos make the file unreadable/undiffable and freeze layout into data; (c) the "zero changes" prize is ~20 lines cheaper than the shim, while the cost is a data file that lies about optionality. Novelty — none (it's the demo's own habit). **Killed again on re-check; the challenge was generated and tested, not suppressed.**

## P3 — The schema draft (the interface object)

### The principal draft [Combination: contract × probes × the sensemaking anchors]

```jsonc
{
  "schema": "venture-atlas/1",                     // version — v2 adds kinds/edge-types, never renames
  "generatedAt": "2026-07-12T13:20:00",            // adapter run stamp
  "source": { "root": "devdocs/inquiries", "commit": "0e642b1" },   // commit optional
  "counts": { "nodes": 227, "edges": 697, "groups": 33, "bodies": 226 },
  "anomalies": {                                    // the honesty counters (D5)
    "dateOnlyStamps": 372, "clampedLastWorked": 0,
    "unresolvedEdgeTargets": 22, "missingBodies": 1,
    "skippedDirs": ["_archive", "diagnostics", "diagnostics_from_other_projects"]
  },
  "nodes": [ /* node records */ ],
  "edges": [ /* edge records */ ],
  "groups": [ /* OPTIONAL — may be absent entirely; no node requires a parent */ ]
}
```

**Node record** (two REAL instances, from surfacing's prototype-parses):

```jsonc
{
  "id": "2026-07-11_10-46__visualizer_node_choice__concepts_vs_inquiry_folders",
  "kind": "inquiry",                                // open enum: inquiry | (v2: canon, seed, …)
  "slug": "visualizer_node_choice__concepts_vs_inquiry_folders",
  "title": "visualizer node choice — concepts vs inquiry folders",   // prettified; raw slug kept
  "status": "complete",                             // complete | active | superseded
  "flowType": "articulated-surfacing-routed",
  "createdAt": "2026-07-11T10:46:00",               // ISO-8601 (D3); loader converts to ms
  "lastWorkedAt": "2026-07-12T12:59:00",            // clamped: max(createdAt, history stamps)
  "events": ["2026-07-11T10:49:00", "…", "2026-07-12T12:59:00"],   // the History series (O-events)
  "group": "g:2026-07-10_15-30",                    // OPTIONAL — chain-component id, absent for standalones under D4-a
  "body": {
    "repoPath": "devdocs/inquiries/2026-07-11_10-46__visualizer_node_choice__concepts_vs_inquiry_folders/finding.md",
    "file": "finding.md",                           // finding.md | _branch.md (ACTIVE fallback)
    "bytes": 20293,
    "text": "…full markdown…"                       // OPTIONAL — present in inline mode (D1)
  }
}
```

```jsonc
{
  "id": "2026-05-23_14-39__routeman_discipline_design",
  "kind": "inquiry",
  "slug": "routeman_discipline_design",
  "title": "routeman discipline design",
  "status": "complete",
  "flowType": "extended-surfacing",
  "createdAt": "2026-05-23T14:39:00",
  "lastWorkedAt": "2026-05-23T14:39:00",            // ← the CLAMP applied (raw stamps were date-only → midnight)
  "events": ["2026-05-23T00:00:00", "…"],           // day-grain era, kept as parsed; precision honest
  "body": { "repoPath": "devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md",
            "file": "finding.md", "bytes": 87516 }
}
```

**Edge record** (real instances):

```jsonc
{ "type": "related",                                // open six-enum: continues-from | related | superseded-by |
  "source": "2026-07-11_10-46__visualizer_node_choice__concepts_vs_inquiry_folders",   //   synthesizes-from | grounds-in | branch-of
  "target": "2026-07-10_15-30__selections_ledger_challenge__central_log_vs_inquiry_folders",
  "targetRaw": null,
  "note": "the folder-native record + derived-on-demand-view adjudication — the same substrate this visualizer would read" }

{ "type": "related",
  "source": "2026-07-11_10-46__visualizer_node_choice__concepts_vs_inquiry_folders",
  "target": null,                                   // ← the duality: not a folder —
  "targetRaw": "devdocs/seeds/_seed.md",            //   a FILE target, kept as data
  "note": "adjacent seeds: p29-S1 structure-propagation retrieval…" }
```

**Group record:** `{ "id": "g:2026-05-23_09-30", "label": "navigation survey report ×23", "members": ["…ids…"], "root": "2026-05-23_09-30__navigation_survey_report" }`

### The decision slots (options + trails; Critique settles)

- **D1 body delivery:** (a) **inline** — `body.text` present for all; one ~8 MB file; atomic snapshot; works where fetch is blocked (see CM-ADD below); diffs noisy. (b) **path** — no `text`; the adapter copies bodies to `public/bodies/<id>.md` (repo-relative fetch breaks vite's root-scoping — copies avoid config); sub-MB data file; lazy detail loads; diffs clean. (c) **both-capable shape, mode = adapter flag** — the schema ALWAYS has `repoPath` (provenance, the user's guess #3) and OPTIONALLY `text`; `--inline` picks per run. Trails: the shape cost of (c) is zero (one optional field); the artifact-CSP scenario REQUIRES inline; the 1,300-folder future (~40 MB inline) favors path locally.
- **D2 file layout:** (a) single `data.json` · (b) `data.json` + `bodies/` sidecar (pairs with D1-b) · (c) per-node JSON files (killed-in-generation: 227 requests, no benefit at this scale — noted).
- **D3 timestamp form:** (a) ISO-8601 strings + loader converts (readable, diff-able, human-debuggable — the sensemaking anchors) · (b) epoch-ms in data (saves the conversion line; unreadable). 
- **D4 group shape:** (a) node-carried `group` + `groups[]` array BOTH (O(1) lookup + labels/membership; ~30 lines of duplication) · (b) `groups[]` only (single source; lookup built client-side) · (c) node-carried only (no labels' home). 
- **D5 envelope:** version + generatedAt + counts + **anomalies (the honesty counters)** as principal; `source.commit` optional-but-cheap (one git call; ties a snapshot to repo state). Contrarian trim (envelope = counts only) generated and tested: fails the no-silent-drops norm — killed.
- **D6 subnode info:** (a) **edges/groups-only** — since ALL nodes ship in one file, per-child {title, lastWorkedAt} is an id-lookup away; zero duplication (the user's guess #4 satisfied by graph structure itself) · (b) nested child summaries per node (duplicates ~450 title strings for zero new information — generated, tested, fails elegance/novelty). 
- **O-events:** (a) full stamp array (tiny; enables activity rendering) · (b) count only.

### P3 piece-level inversions (meta-decision compliance)

- **Carrier inversion (system-level chain):** "one JSON file" → ndjson (streamable; no benefit at 227–1,300 records) → SQLite (query power; breaks browser-native loading + the no-server bound... and the user asked for JSON verbatim) → **"no file at all — parse the folders live in the browser"** (a dev-server plugin reading the repo per request): system-level insight — the FILE is a *snapshot decision*, not a necessity; but the snapshot is what makes the map regenerable, diffable, and artifact-embeddable, and the user's ask is explicitly "emits one static JSON." *Tests:* the chain's survivors are properties, not replacements: streamability irrelevant at scale; live-parse killed by the snapshot virtues + the explicit ask. **JSON file stands — now by argument, not by habit.**
- **Shape inversion:** covered by P2-chal (the C2 challenger) — generated, tested, killed on re-check.

## P4 — The transform/parse-rule clauses (producer obligations)

**P4-A (principal).** [Combination: probe catches → testable clauses] The adapter MUST: (1) include only dirs matching `^20\d{2}-\d{2}-\d{2}_\d{2}-\d{2}__` (count the skipped into `anomalies.skippedDirs`); (2) parse History stamps with BOTH patterns `- YYYY-MM-DD_HH-MM` and `- YYYY-MM-DD` (date-only → midnight; count into `dateOnlyStamps`); (3) apply the clamp `lastWorkedAt = max(createdAt, max(stamps))` (count clamps); (4) parse Relationships lines into the six-type enum, unknown types passed through verbatim (open enum); (5) resolve targets to folder-ids where they match, else keep `targetRaw` (count unresolved); (6) keep edge notes FULL (truncation is the view's job); (7) prettify titles (`__`→" — ", `_`→" ", ~40-char chip truncation stays in the component); (8) union-find groups over RESOLVED continues-from edges only — and emit groups ONLY when the flag asks (grouping optional); (9) body = finding.md, else `_branch.md` (count `missingBodies` when neither); (10) compute all counts/anomalies it reports (no estimated numbers in the envelope). *Tests:* each clause is checkable against a fixture folder; actionability immediate. **Principal.**

**P4-inv — Inversion ("the adapter must normalize"):** emit raw un-normalized lines and let the component parse. *Tests:* fails — moves regex into UI code, breaks the shared-record-API reading (CM-REMOVE), doubles parse implementations. Killed.

## Mechanism evidence (feeding the candidates)

- **DT-native (D3.js/JSON-graph convention):** the `{nodes:[{id,…}], links:[{source,target,…}]}` idiom is the ecosystem's default for exactly this data — adopting `nodes/edges` (edges over links: we carry types) keeps the file legible to any graph tool; the JSON Graph Format spec confirms flat-nodes+edges+metadata as the interoperable shape. Supports the principal draft.
- **DT-different (shipping manifests):** a manifest lists cargo AND declares discrepancies (short-shipped counts) — the honesty-counter envelope mirrors a practice from a domain where silent drops cost money. Supporting illustration only.
- **CM-ADD ("must run as a claude.ai artifact — CSP blocks all fetch"):** a plausible deployment for this user (the component was pasted artifact-style). There, `data.json` can't even be fetched — data must be BUNDLED (inline mode taken to its limit: the JSON imported/embedded at build). Consequence: D1's shape must keep inline legal; the adapter's `--inline` output is exactly what an artifact build embeds. Strengthens D1-c.
- **CM-REMOVE ("single consumer"):** with the component constraint removed, the same JSON serves CLI queries (`jq` over statuses/edges), other views, even future tooling — the file becomes the record layer's shared read-API. Consequence: data-truthful naming matters beyond the map; supports ISO stamps + full notes + honest envelope.
- **Absence, patch-level:** version field · generatedAt · counts · anomalies — all were missing from the user's guess-list; all cheap. Redesign-level, both directions: (missing) a per-folder manifest SHOULD exist if designed for tooling — (already-present) `_state.md` IS it in markdown; the adapter is its compiler, adding nothing to the folders themselves (zero convention changes required — worth saying in the finding).
- **Extrapolation (~1,300 folders, one year):** nodes+edges ≈ 1.5 MB (fine); inline ≈ 40 MB (heavy but loadable locally; artifact-embed impractical at that size); path-mode initial stays sub-2 MB. Consequence: D1-c (both-capable) is the future-proof shape; the DEFAULT flag choice is Critique's.
- **Lens (debugging):** when the map looks wrong, the human reads the JSON — ISO stamps, real slugs, full notes, and anomaly counts make wrongness findable in seconds. Supports D3-a, D5-principal.

## Inherited Frame Audit

Seed's central assumption: sensemaking's C2/C3 frame (one flat data-truthful schema; demo non-binding). Challenge scan: P2-chal explicitly challenges C2 (generated, tested, killed on re-check with the user-bound ground); the carrier inversion challenges the "JSON file" frame itself (system-level chain run; JSON stands by argument); P1-inv challenges the folders-only scope; CM-REMOVE challenges the single-consumer frame. Every load-bearing commitment has an explicit challenger → **the audit does not fire.** Piece-level: P1 (inversion generated) · P2 (P2-chal) · P3 (carrier + shape inversions) · P4 (P4-inv) — all satisfied.

## Assembly check

The survivors compose into **one interface object with six settled-or-rankable slots and a clause-set**: the draft + D1-c's both-capable body + D5's honest envelope + P4's ten clauses = a contract where the SAME schema serves the vite dev map, a claude.ai artifact embed, and bare `jq` queries — three consumers, one file, no migrations at v2 (open enums + version). Emergent beyond the pieces: the adapter is revealed as *`_state.md`'s compiler* — the folders already carry the manifest; nothing about the record layer changes. **RE-TEST TRIGGER check:** no survivor contradicts a committed collapse; C2 re-checked and re-held under its challenger.

## Telemetry

Generators 4/4 (Combination P1-A/P2-A/draft/P4-A · Absence patch+redesign-both-directions · Domain-transfer native+different · Extrapolation 1,300-scale) · Framers 3/3 (Lens debugging/readability · Constraint ADD artifact-CSP + REMOVE single-consumer · Inversion carrier-chain [system-level reached] + P2-chal + P1-inv + P4-inv). Convergence: **YES — 3+ mechanisms land on the both-capable, honest, flat draft** (Combination, DT-native, CM-both, Lens) — from partly external grounds (D3.js convention; CSP mechanics), shared-input check passed. Survivors tested: 21/21 light-cycle. Per-piece log: P1 [Comb, Inv] meta-decision satisfied · P2 [Comb, Inv:P2-chal] satisfied · P3 [Comb, Inv:carrier+shape, DT, CM×2, Lens, Extrap] satisfied · P4 [Comb, Inv] satisfied. Failure modes: none observed (the C2-challenger and carrier-inversion were generated BEFORE testing — no prior-step never-generate; the most uncomfortable candidate [live-parse, no file] was chain-tested, not skipped). **Overall: PROCEED.** Slots to Critique: D1 default flag · D2 · D3 · D4 · D6 · O-events (D5 principal effectively settled by the trim-kill — Critique confirms).
