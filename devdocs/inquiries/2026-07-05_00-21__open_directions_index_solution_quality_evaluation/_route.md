# Concept-Map Index — Open-Directions Index (traversal-memory implementation)

<!-- routelister persistent cross-run index (§5.1). Within-concept concept-map ONLY — no process/control-flow state. Load-modify-save across runs: enrich-not-dump; stale-flag-not-delete; idempotent at fixpoint. -->

- **Concept-space:** onward directions for the Open-Directions Index (ODI) / traversal-memory implementation, after the "how good is it really" evaluation.
- **Entry:** fresh (first index for this concept-space)
- **Last run:** 2026-07-05 — evaluation of the ODI (verdict: GOOD FOUNDATION, MIS-PACKAGED; index = the load-bearing substrate; pull + push = two reads over it).

## Route-Identities

| id | Concept-identity | Engagement | Priority | Confidence | Essentiality | Status | ✓ |
|---|---|---|---|---|---|---|---|
| R1 | Re-frame the ODI doc around the index-as-substrate (pull + push as two reads) | REFINE | HIGH | HIGH | core | live | ☐ |
| R2 | Spec the push read — a watcher over the index (the active/steering read) | DEVELOP | HIGH | MED | core | live · depends R3 | ☐ |
| R3 | Spec the index v1 — the store of open Directions (F4 substrate) | DEVELOP | HIGH | MED | core | live · prerequisite | ☐ |
| R4 | Add the scaling composition to the index (F6 distilled cascade + Priority/Essentiality pruning) | DEVELOP | MED | MED | supporting | live · gated on volume | ☐ |
| R5 | Reconcile the index with the committed memory design (F2+F3+F5) + the travel-log | CONSOLIDATE | MED | MED | supporting | live · gated by 10-37 travel-log gate | ☐ |
| R6 | Measure the pull harvest rate empirically (the E2 passive-read risk) | TEST | LOW | MED | peripheral | live · depends R3 + accrued turns | ☐ |

## Dependency Notes (within-concept)

- **R3 is the prerequisite** — the store both reads are built on. R1 (re-frame the doc) can proceed in parallel (documentation). R2 (push) and R4 (scaling) and R6 (harvest measurement) all depend on R3 existing.
- **The `core` spine:** R3 (index) → R1 (doc matches) + R2 (push = the higher-value read).
- **Excluded from this concept-space (not routes):** drop-the-ODI-entirely (killed — push is built on the index); re-open the 19-10 correction or the naming (settled); re-grade the ODI (converged).

## Cross-Run Ledger

- 2026-07-05: index created from the ODI-evaluation inquiry. 6 route-identities, 3 `core`. None taken yet (all ☐).
