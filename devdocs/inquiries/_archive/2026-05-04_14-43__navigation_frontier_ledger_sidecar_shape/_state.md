# State: Navigation Frontier Ledger Sidecar Shape

## Flow-type
extended

## Pipeline
E -> S -> D -> I -> C (always)

## Progress
- [x] Exploration
- [x] Sensemaking
- [x] Decomposition
- [x] Innovation
- [x] Critique

## Iteration
1

## Status
COMPLETE

## Next Discipline
—

## Relationships
- REFINES: devdocs/inquiries/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/ (frontier ledger artifact shape)
- RELATED: homegrown/protocols/multi_resolution_navigation.md (protocol may need patch after this finding)

## History
- 2026-05-04: Created. Question: whether the Navigation frontier ledger should be a sidecar/control file like `_state.md` and how parent/child direction folders should work.
- 2026-05-04: Exploration completed. Signal: use a single `_frontier.md` control sidecar plus visible `navigation.md` and `composition.md`; create child folders only when expanded.
- 2026-05-04: Sensemaking completed. Stable model: `_frontier.md` is the control source of truth; pending candidates are rows, expanded candidates get child folders.
- 2026-05-04: Decomposition completed. Boundary: `navigation.md` is visible map, `_frontier.md` is control state, child folders exist only for expanded candidates.
- 2026-05-04: Innovation completed. Survivor: `_frontier.md` plus lazy child folders and visible `composition.md`.
- 2026-05-04: Critique completed. Verdict: `_frontier.md` survives; `_navigate.md` and empty child folders are killed.
- 2026-05-04: Concluded. Answer: use `_frontier.md` as the v1 Navigation control sidecar, and create child folders only for expanded candidates. Status COMPLETE.
