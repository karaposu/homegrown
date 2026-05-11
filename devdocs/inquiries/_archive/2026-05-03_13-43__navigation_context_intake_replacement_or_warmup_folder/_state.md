# State: navigation_context_intake_replacement_or_warmup_folder

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
-

## History
- 2026-05-03: Created. Question: Decide whether to remove `navigation_context_intake.md`, rewrite it around warm-up v1/v2/v3, or move warm-up files under `homegrown/protocols/navigation/`.
- 2026-05-03: Exploration complete. Found that the old protocol is too heavy as the main interface but contains useful invariants; strongest placement signal is `homegrown/navigation/warmup/`, not `homegrown/protocols/navigation/`.
- 2026-05-03: Sensemaking complete. Stabilized model: v1/v2/v3 should own detailed warm-up behavior; `navigation_context_intake.md` should become a tiny transitional wrapper; avoid `homegrown/protocols/navigation/`.
- 2026-05-03: Decomposition complete. Split the work into detailed execution routine, protocol invariants, Navigation namespace, shared protocol namespace, and transition/reference migration.
- 2026-05-03: Innovation complete. Survivor assembly: clean v3, move v1/v2/v3 to `homegrown/navigation/warmup/`, add a short index, and shrink `navigation_context_intake.md` into a tiny wrapper.
- 2026-05-03: Critique complete. Killed immediate deletion, unchanged retention, and `homegrown/protocols/navigation/`; survivor is `homegrown/navigation/warmup/` plus tiny wrapper.
- 2026-05-03: Concluded. Do not delete `navigation_context_intake.md` yet; move v1/v2/v3 to `homegrown/navigation/warmup/` after v3 cleanup and shrink the old protocol into a tiny transitional wrapper. Status COMPLETE.
