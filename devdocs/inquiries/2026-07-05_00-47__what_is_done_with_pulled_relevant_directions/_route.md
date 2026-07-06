# Concept-Map Index — What Is Done With Pulled Relevant Directions

<!-- routelister persistent cross-run index (§5.1). Within-concept concept-map ONLY — no process/control-flow state. Load-modify-save across runs: enrich-not-dump; stale-flag-not-delete; idempotent at fixpoint. -->

- **Concept-space:** onward directions after the "what is done with a pulled direction / how is it memory" answer.
- **Entry:** fresh (first index for this concept-space)
- **Last run:** 2026-07-05 — answer landed: READ ≠ MEMORY (the read spends, the writes constitute); the missing piece = the mark-done write-back; the index is under-built on two independent axes (delivery-read = push, state-write = mark-done).

## Route-Identities

| id | Concept-identity | Engagement | Priority | Confidence | Essentiality | Status | ✓ |
|---|---|---|---|---|---|---|---|
| R1 | Spec the mark-done write-back (the missing state-write) | DEVELOP | HIGH | HIGH | core | live · prerequisite for R4 | ☐ |
| R2 | Spec the downstream "offer" step (absorb / inform / mark-done) | DEVELOP | HIGH | MED | core | live · composes with R1 | ☐ |
| R3 | Update the ODI doc — payoff + mark-done as second write | REFINE | MED | HIGH | supporting | live · fold into prior finding's re-frame | ☐ |
| R4 | Reconcile the two axes (delivery-read + state-write) over the shared index | CONSOLIDATE | MED | MED | supporting | live · depends R1 + prior push route | ☐ |
| R5 | Observe stale already-done accumulation without mark-done | TEST | LOW | MED | peripheral | live · gated on volume | ☐ |

## Dependency Notes (within-concept)

- **The `core` spine:** R1 (mark-done write-back) + R2 (the offer step); R1 is one of R2's three options, so they compose rather than sequence.
- **R4 depends on** R1 + the prior ODI-evaluation inquiry's push route (it reconciles both axes).
- **R3 folds into** the prior ODI-evaluation finding's "re-frame the ODI doc" recommendation (one doc edit, not two).
- **Cross-inquiry link:** the delivery-read axis (push) lives in `devdocs/inquiries/2026-07-05_00-21__open_directions_index_solution_quality_evaluation/_route.md` (its R2). This inquiry adds the state-write axis (mark-done). Together they are the index's reads/writes.
- **Excluded (not routes):** re-grade the whole ODI; re-open the matching mechanism / naming / 19-10 correction (all settled).

## Cross-Run Ledger

- 2026-07-05: index created from the "what is done with a pulled direction" inquiry. 5 route-identities, 2 `core`. None taken yet (all ☐).
