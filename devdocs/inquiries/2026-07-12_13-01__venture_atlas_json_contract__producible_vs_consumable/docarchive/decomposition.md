# Decomposition — the contract answer's piece-set

## User Input

devdocs/inquiries/2026-07-12_13-01__venture_atlas_json_contract__producible_vs_consumable/ — read sensemaking.md (SV6 + C1–C4 + the 6 decision slots) + _branch.md. Lean; perceive the ANSWER's pieces (P1 producible inventory / P2 consumable requirements / P3 the schema draft w/ D1–D6 / P4 transform clauses); granularity checks as given.

---

## Step 1 — Coupling map (coarse)

Elements: the field catalog + parse rules + coverage numbers · the layering (v1 slice vs wider space) · the requirements line · the demo-derivables + loader shim · the schema object (envelope/nodes/edges/groups) · the D1–D6 decisions · the real example instances · the transform clauses · the guess-validation rows · the honesty counters.

Coupling: field-catalog ↔ parse-rules: STRONG (each field IS its rule) → one piece. Layering ↔ catalog: STRONG (C1 shapes its presentation). Requirements-line ↔ loader-shim: STRONG (the shim exists exactly where requirements and demo-specifics diverge). Schema-object ↔ D1–D6: STRONG (the decisions ARE the schema's open slots). Examples ↔ schema: STRONG (instances of it). Transform-clauses ↔ schema: MODERATE one-way (clauses implement the schema's promises; direction of ISO↔ms fixed by D3's landing). Honesty-counters ↔ envelope: STRONG (D5 content). Guess-validation: WEAK to all (a cross-cutting verification row → rides the finding, not a piece). Valleys: between inventory and requirements (different sources); between both inventories and the schema (evidence vs object); between the object's shape and the producer's obligations (different consumers).

## Step 2 — Boundaries (top-down)

Four pieces: **P1 producible inventory** · **P2 consumable requirements** · **P3 the schema draft (D1–D6 resolved)** · **P4 transform + parse-rule clauses**.

## Step 3 — Validate (bottom-up)

Atoms: per-field rules+numbers (→P1); the wider-space name-list (→P1, layered); the requirements five (→P2); the derivables four + shim (→P2); envelope/node/edge/group shapes + names (→P3); the six D-slots (→P3); the two real instances (→P3); clamp/formats/filter/prettify/union-find/counters-as-clauses (→P4); the four guess-rows (→ finding rider, outside the tree — correctly); honesty counters as CONTENT (→P3's envelope via D5; their computation → P4 clause). No atom split; no boundary groups independents. **Agreement — high confidence.**

## Step 4 — Question tree

- **P1 — The producible inventory:** *What can inquiry folders yield as JSON — fully for the v1 slice, name-only for the wider space?*
  Verify: [ ] every v1 field has source-file + parse-rule + coverage number + edge-case note; [ ] the probe catches (clamp, two stamp formats, include-filter, target duality) appear as catalog rows; [ ] the wider space (routelister rows, `_route` identities, seeds, frontmatter, event series, docarchive lists) is named with one-line "producible-but-v2+" markers; [ ] layered per C1.
- **P2 — The consumable requirements:** *What must ANY input for this (editable) visualizer contain, and what is demo-specific?*
  Verify: [ ] the requirements line stated (id-addressable nodes · title · createdAt + lastWorkedAt · renderable body · edges); [ ] the demo-derivables listed (epoch-ms · containment · root/module/sub kinds · pos · single NODES object) each with its derivation route; [ ] the loader-shim concept specified (~20 lines: ISO→ms, group→parent/children, counts) as the bridge; [ ] the reference-not-constraint status (standing correction) stated.
- **P3 — The schema draft:** *What is THE interface object — envelope, nodes, edges, optional groups — with D1–D6 decided and field names fixed?*
  Verify: [ ] all four parts drafted with field names + types; [ ] each of D1–D6 resolved WITH its constraint trail (Innovation proposes options; Critique ranks/settles); [ ] groups optional and parent never required (correction honored); [ ] open enums + version field (v2 additive per C1); [ ] instantiated with the two already-parsed real folders; [ ] the honesty counters present in the envelope (D5).
- **P4 — The transform + parse-rule clauses:** *What MUST the future adapter do to emit valid instances?*
  Verify: [ ] each clause stated testably (include-filter regex · both stamp patterns · the midnight clamp · prettify+truncate as VIEW-side or adapter-side per P3's landing · union-find over resolved CONTINUES-FROM only · target-duality handling · honesty-counter computation); [ ] direction of the timestamp transform matches D3's landing; [ ] explicitly NOT the adapter build — clauses only.

## Step 5 — Interface map

| From → To | What flows | Direction |
|---|---|---|
| Sensemaking C1 → P1 | the layering rule | one-way |
| Sensemaking C2 → P2, P3 | the authority order (record → schema → shim → component); the shape family (flat+typed+optional-groups) | one-way |
| Sensemaking C3 → P1/P2/P3 | one-object discipline (inventories justify, never rival, the schema) | one-way |
| P1 + P2 → P3 | the two justifying inventories (producible facts; requirements line) | one-way |
| P3 → P4 | the landed D-picks (esp. D3 stamp form; D5 counter set; D4 group shape) that fix the clauses' direction | one-way |
| Probe catches (surfacing) → P1 rows + P4 clauses | same facts, two roles (catalog entries; producer obligations) | one-way, dual-consumer |

Assumptions check: P2 assumes the component stays editable (stated, standing correction); P3 assumes both inventories are complete at draft time (they precede it in order); P4 assumes P3's picks are final within this dive (stated: P4 finalizes after P3). No hidden coupling found.

## Step 6 — Dependency order

**P1 → P2 → P3 → P4** (P1/P2 could run parallel — different sources — but lean sequential kept: P2's requirements line reads sharper against P1's catalog). Critique then ranks P3's options and re-checks P4's clauses against the picks.

## Step 7 — Self-evaluation (minimum 3)

| Dimension | Verdict |
|---|---|
| Independence | PASS — each question answerable from sensemaking + stated interfaces |
| Completeness | PASS — the deliverable's parts map: fundamental understanding (P1+P2), schema draft + examples (P3), the adapter's contract half (P4); guess-validation homed as a finding rider; nothing else in _branch.md's Goal is unowned |
| Reassembly | PASS — P1+P2 justify P3; P3+P4 = the complete contract (object + obligations); with the finding's guess-row, _branch.md's Question (both sides + guesses) is fully answered. Determination-mechanism check: P4's direction-dependency is provided BY P3's D3 — no presupposed determination |

No failure modes observed (lean count proportionate; P3 largest but bounded — a schema draft with six slots). **PROCEED.** Next: Innovation drafts per-slot options + the schema; Critique ranks and settles.
