# Concept-Map Index — Next-Move Selection Belongs to Navigation, Not the Worker Loop

<!-- routelister persistent cross-run index (§5.1). Within-concept concept-map ONLY — no process/control-flow state. Load-modify-save across runs: enrich-not-dump; stale-flag-not-delete; idempotent at fixpoint. -->

- **Concept-space:** onward directions after the correction that next-move-selection belongs to the navigation/orchestrator layer, not the worker loop.
- **Entry:** fresh (first index for this concept-space)
- **Last run:** 2026-07-05 — correction landed: selection = the orchestrator's *decide* step over the eyes' *see*, above the inquiry boundary; the prior "push does steering" was mislocated (see-vs-decide + layer); "push" was a mis-layered eyes-function; feed the index to the eyes, not a worker read.

## Route-Identities

| id | Concept-identity | Engagement | Priority | Confidence | Essentiality | Status | ✓ |
|---|---|---|---|---|---|---|---|
| R1 | Amend the 00-21 finding — correct the "push does steering" prescription | REFINE | HIGH | HIGH | core | TAKEN 2026-07-05 · corrected_by + Correction note + 5 inline flags | ☑ |
| R2 | Spec how the index feeds the navigational session's enumeration (above-boundary) | DEVELOP | HIGH | MED | core | live · the constructive relocation | ☐ |
| R3 | Re-scope the sibling 00-47 finding's push route for consistency | REFINE | MED | MED | supporting | TAKEN 2026-07-05 · impacted_by + 2 layer notes on 00-47 finding.md | ☑ |
| R4 | Reconcile the full layer-split into the ODI/index design | CONSOLIDATE | MED | MED | supporting | live · depends R1 + R2 | ☐ |
| R5 | Decide whether a below-boundary uninvited-enrichment push is worth having | TEST | LOW | MED | peripheral | live · gated on volume + pull-in-use | ☐ |

## Dependency Notes (within-concept)

- **The `core` spine:** R1 (propagate the correction to the corrected finding) + R2 (the constructive relocation — feed the index to the eyes). R4 depends on both landing.
- **Cross-inquiry links:**
  - R1 amends `devdocs/inquiries/2026-07-05_00-21__open_directions_index_solution_quality_evaluation/finding.md` (the corrected finding).
  - R3 amends `devdocs/inquiries/2026-07-05_00-47__what_is_done_with_pulled_relevant_directions/_route.md` (its push route R2/R4 — re-scope "push" away from worker-loop steering).
- **The layer model (the spine of the whole concept-space):** below the inquiry boundary = pull (read) + mark-done (write); above the inquiry boundary = eyes-enumeration → orchestrator selection. Reads flow down, writes flow up; the worker makes no upper-layer decision.
- **Excluded (not routes):** re-grade the ODI / re-open the mark-done or index-verdict (settled, stand); re-design the SUSTRALL layer model (this applies it, doesn't redefine it).

## Cross-Run Ledger

- 2026-07-05: index created from the next-move-selection correction inquiry. 5 route-identities, 2 `core`. None taken yet (all ☐).
- 2026-07-05: **R1 + R3 TAKEN.** Audited the last 4 findings for the mislocation. R1 — 00-21 annotated (`corrected_by:` frontmatter + top Correction note with the re-grade + 5 inline supersession flags). R3 — 00-47 annotated (`impacted_by:` frontmatter + top layer note + §6 layer note + summary flag). Finding of the audit: **19-10 and 18-12 are clean** (18-12 actually gets the steering layer right: "keeps the real judgment 'where should the project go next?' with a person/navigation step, not baked into the loop"). **Also checked the source design doc** `docs/future-seed/open_directions_index.md` — it is layer-CORRECT ("it does not decide what to do next… it does not select"; the index "feeds the steering layer" which then chooses); the mislocation was introduced by the 00-21 *finding*, not the doc. Doc needs no fix. R2/R4/R5 remain live (☐).
