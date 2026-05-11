---
status: active
refines: devdocs/inquiries/2026-04-28_13-22__artifact_materialization_protocol_shape/finding.md
---
# Finding: Materialization Trace Record Location

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-04-28_13-22__artifact_materialization_protocol_shape/finding.md`

**Revision trigger:** The prior finding said every materialization mode should produce a trace. The user then asked whether task description or task plan files could hold that information because they already exist before artifact creation.

**What's preserved:** Every materialization still needs source authority, scope, validation evidence, outcome, and follow-up review. The trace remains the bridge back into Homegrown's learning system.

**What's changed:** Trace should be treated as a semantic role, not always a separate file. Compact mode can use one combined record file if it has explicit pre-implementation and post-implementation sections.

**What's new:** Standard and Full modes should add a `Trace Expectations` section to the implementation plan, but actual execution evidence should live in a separate `materialization_trace.md`.

**Migration:** Update the future `artifact_materialization.md` protocol so Compact mode uses `materialization_record.md`, while Standard/Full use `desc.md`, `step_by_step_impl_plan.md`, `critic.md`, and separate `materialization_trace.md`.

## Question

Should materialization trace information be stored in the existing task description or implementation plan files, or should it remain a distinct post-implementation trace/record artifact?

The goal is to decide where source authority, mode selection, artifact records, changed files, validation results, deviations, outcome, and follow-up review should live. The answer should preserve task-desc and task-plan as pre-implementation artifacts while avoiding unnecessary extra files for minimal artifacts.

## Finding Summary

- The task description and implementation plan should hold **planned** materialization information.
- The task description owns intent: problem, value, scope, success criteria, source authority, and artifact contract.
- The implementation plan owns expected execution: planned write-set, steps, expected outputs, planned validation, rollback/repair assumptions, and `Trace Expectations`.
- The actual trace owns evidence: files changed, validation commands and results, deviations from plan, final outcome, and follow-up review.
- For Standard and Full modes, keep a separate `materialization_trace.md`.
- For Compact mode, use one combined `materialization_record.md` with clear pre-implementation and post-implementation sections.
- Do not overwrite the plan with post-hoc execution results. That destroys plan-vs-actual learning.

## Finding

The short answer is: the task plan can hold trace expectations, but it should not own the actual trace for Standard or Full materialization.

The deeper distinction is **prediction versus evidence**.

`desc.md` is a pre-implementation artifact. It says why the artifact should exist and what success means. It can contain source authority, artifact contract, scope, and success criteria. It should not become a run log.

`step_by_step_impl_plan.md` is also a pre-implementation artifact. It says how the implementation is expected to happen. It should include the intended write-set, expected outputs, planned validation, and rollback or repair assumptions.

The plan should also include:

```markdown
### Trace Expectations

- Expected files changed:
- Planned validation commands:
- Expected validation evidence:
- Expected follow-up gate:
```

That makes the later trace easier to write and easier to compare against the plan.

But actual changed files, actual validation results, deviations, and final outcome should not be stored only by rewriting the plan. If the plan becomes both forecast and result, Homegrown loses the ability to learn whether the plan was accurate. Later loop diagnosis needs the delta between expected and actual.

For **Standard mode** and **Full mode**, keep a separate `materialization_trace.md`. It should reference the existing records instead of duplicating them:

- desc path,
- plan path,
- critic path,
- revised plan path if present,
- files actually changed,
- validation actually run,
- validation results,
- deviations from plan,
- outcome,
- follow-up review gate.

For **Compact mode**, a separate trace file can be unnecessary overhead. In that case, use one combined `materialization_record.md`, but structure it so the semantic roles remain separate:

```markdown
# Materialization Record: [name]

## Pre-Implementation Contract
- Source:
- Artifact type:
- Target/write-set:
- Success criteria:
- Mode rationale:

## Tiny Plan
1. ...

## Risk Scan
- Main risks:
- Escalation needed:

## Post-Implementation Trace
- Files changed:
- Validation commands/results:
- Deviations from plan:

## Outcome
PASS / PARTIAL / FAIL

## Follow-up
- Review gate:
```

This gives us the best of both models. Minimal artifacts do not pay unnecessary file overhead. Non-trivial artifacts preserve clean records for plan-vs-actual learning.

The final ownership model is:

```text
desc = why and what
plan = expected how
critic = predicted risk
trace = actual what happened
retrospective = did it matter
```

Compact mode may merge files, but it must not merge those roles.

## Next Actions

### MUST

- **What:** Add `Trace Expectations` to the Standard/Full implementation plan template.
  **Who:** Future `artifact_materialization.md` protocol.
  **Gate:** Before the first Standard or Full materialization run.
  **Why:** It makes the actual trace easier to compare against the expected implementation.

- **What:** Define Compact mode as `materialization_record.md`, not an overwritten plan.
  **Who:** Future `artifact_materialization.md` protocol.
  **Gate:** Before the first Compact materialization run.
  **Why:** It keeps low-risk work lightweight without losing pre/post boundaries.

- **What:** Keep Standard/Full actual execution evidence in `materialization_trace.md`.
  **Who:** Future `artifact_materialization.md` protocol.
  **Gate:** Before using Standard or Full mode for medium/high-risk artifacts.
  **Why:** Separate actual trace preserves plan-vs-actual learning and retrospective diagnosis.

### COULD

- **What:** Use one name everywhere, such as `materialization_record.md`, if later tooling strongly benefits from a single filename.
  **Who:** Future tooling/protocol refinement.
  **Gate:** Reopen only after manual v1 shows filename inconsistency causing real friction.
  **Why:** One filename may simplify scripts, but it must still preserve pre/post sections.

### DEFERRED

- **What:** Store all actual trace data inside `step_by_step_impl_plan.md`.
  **Gate:** Reopen only if separate trace files repeatedly add overhead without improving retrospective learning.
  **Why (if revived):** It could reduce file count, but current risk is losing clean plan-vs-actual comparison.

## Reasoning

Putting everything in `desc.md` was killed because it overloads the discovery artifact. `desc.md` should stay focused on problem, value, scope, and contract.

Putting actual trace in `step_by_step_impl_plan.md` was refined. The plan is the right place for expected write-set and planned validation, but not for actual execution evidence in Standard/Full modes.

Requiring a separate trace for every mode was refined. It is correct for Standard and Full modes, but unnecessary for Compact mode.

The surviving design is semantic ownership plus mode-dependent file layout. Standard/Full keep separate trace. Compact uses one combined record with explicit pre/post sections.

This preserves the most important learning signal: what the plan predicted versus what implementation actually did.

## Open Questions

### Monitoring

- After 3 materialization runs, check whether `Trace Expectations` made traces easier to write.
- After 3 Compact records, check whether `materialization_record.md` is clear enough or whether Compact should also use separate trace files.

### Refinement Triggers

- Reopen this design if retrospective reviews cannot easily compare plan and actual outcome.
- Reopen naming if agents confuse Compact `materialization_record.md` with Standard/Full `materialization_trace.md`.
