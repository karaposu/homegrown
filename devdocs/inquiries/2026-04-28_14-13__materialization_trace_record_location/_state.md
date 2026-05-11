# State: Materialization Trace Record Location

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
- CONTINUES FROM: devdocs/inquiries/2026-04-28_13-22__artifact_materialization_protocol_shape (refines where trace/outcome information should live)
- RELATED: enes/materialization_lifecycle.md (conceptual lifecycle source)

## History
- 2026-04-28 14:13: Created. Question: should materialization trace information live in task-desc/task-plan, or remain a distinct post-implementation trace/record artifact?
- 2026-04-28 14:20: Exploration complete. It mapped desc as intent, plan as prediction, critic as pre-implementation pressure, and trace as post-implementation evidence; compact merge remains viable with pre/post sections.
- 2026-04-28 14:20: Structural check not run because `tools/structural_check.sh` is not present in this repo.
- 2026-04-28 14:27: Sensemaking complete. It resolved that desc/plan can hold planned materialization information, but actual trace evidence should stay semantically distinct; Compact mode may use a combined record with pre/post sections.
- 2026-04-28 14:33: Decomposition complete. It assigned record ownership: desc owns intent, plan owns expected execution, critic owns predicted risk, trace/record owns actual execution, and retrospective owns later outcome learning.
- 2026-04-28 14:39: Innovation complete. It selected semantic ownership plus Compact `materialization_record.md`, Standard/Full separate `materialization_trace.md`, and a `Trace Expectations` section in the plan.
- 2026-04-28 14:45: Critique complete. It killed putting actual trace in desc or overwritten plan, and selected semantic ownership with Compact record plus Standard/Full trace.
- 2026-04-28 14:52: CONCLUDE complete. Answer: task plans should hold trace expectations, not actual trace evidence; Compact mode may use a combined materialization record, while Standard/Full should keep a separate trace. Status COMPLETE.
