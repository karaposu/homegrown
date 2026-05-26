# Innovation: Materialization Record Layout Options

## User Input

The user asked whether materialization trace information should live in task description or task plan documents, since those artifacts already exist before artifact creation.

## Seed

Need a record layout that avoids unnecessary file overhead while preserving plan-vs-actual learning.

Valuation signal: reduce ceremony without destroying evidence.

## Mechanism Generation

### 1. Lens Shifting

- Generic: View records by file count: fewer files are better.
- Focused: View records by time-of-truth: pre-implementation prediction and post-implementation evidence are different roles.
- Contrarian: View the plan as a testable hypothesis. If the result is written into the hypothesis, the experiment is corrupted.

Survivor: organize by semantic role and time-of-truth, not only by file count.

### 2. Combination

- Generic: Combine desc and plan for minimal artifacts.
- Focused: Combine Compact-mode desc/plan/risk/trace into one `materialization_record.md` with explicit pre/post sections.
- Contrarian: Combine Standard/Full trace only by references: trace links to desc/plan/critic rather than duplicating them.

Survivor: Compact combined record; Standard/Full separate trace with references.

### 3. Inversion

- Generic: Instead of "trace is another file," assume "trace is a role."
- Focused: Instead of "plan contains trace," say "plan contains trace expectations."
- Contrarian: Instead of "append results to plan," say "append-only record after implementation begins."

Survivor: trace is semantic role; file layout depends on mode.

### 4. Constraint Manipulation

- Generic: Add constraint: never overwrite pre-implementation record with post-hoc evidence.
- Focused: Add constraint: Compact mode one-file record must have Pre-Implementation and Post-Implementation sections.
- Contrarian: Add constraint: Standard/Full trace should not duplicate all desc/plan content, only reference paths and record deltas.

Survivor: append-only, non-duplicative record design.

### 5. Absence Recognition

- Generic: Missing: planned-vs-actual section.
- Focused: Missing: `Trace Expectations` section in plan.
- Contrarian: Missing: naming distinction between compact combined record and standard post-only trace.

Survivor: add `Trace Expectations` to plan and use compact `materialization_record.md`.

### 6. Domain Transfer

- Generic: From experiments: hypothesis and results are separated.
- Focused: From PRs: plan is proposal, merge/check output is result.
- Contrarian: From lab notebooks: one notebook can include hypothesis and result, but entries must be chronological and append-only.

Survivor: Standard/Full use separate proposal/result; Compact uses lab-notebook style combined record.

### 7. Extrapolation

- Generic: If trace is always separate, low-risk materialization may feel too heavy.
- Focused: If trace lives in plan, retrospective review will lose plan quality signal.
- Contrarian: If compact combined records accumulate, they can later reveal whether separate trace is needed even for low-risk artifacts.

Survivor: hybrid design with monitoring.

## Candidate Options

### A. Put Everything in `desc.md`

Description: `desc.md` contains problem, scope, plan summary, implementation results, validation, and outcome.

Test:

- Novelty: low.
- Scrutiny survival: low. Overloads the discovery artifact.
- Fertility: low.
- Actionability: high short-term.
- Mechanism independence: low.

Verdict candidate: KILL.

### B. Put Actual Trace in `step_by_step_impl_plan.md`

Description: Append changed files, validation results, deviations, and outcome to the plan.

Test:

- Novelty: low.
- Scrutiny survival: medium-low. Better than desc, but weakens plan-vs-actual learning.
- Fertility: medium.
- Actionability: high.
- Mechanism independence: medium-low.

Verdict candidate: REFINE. Plan can include expected trace fields, not actual trace ownership.

### C. Separate Trace for Every Mode

Description: Always create `materialization_trace.md`.

Test:

- Novelty: low.
- Scrutiny survival: medium. Clean semantics, but unnecessary overhead for tiny artifacts.
- Fertility: medium-high.
- Actionability: medium.
- Mechanism independence: medium.

Verdict candidate: REFINE. Use for Standard/Full, not mandatory for Compact.

### D. Compact `materialization_record.md`, Standard/Full `materialization_trace.md`

Description: Compact mode uses one combined record with pre/post sections. Standard/Full keep post-only trace separate.

Test:

- Novelty: medium.
- Scrutiny survival: high.
- Fertility: high.
- Actionability: high.
- Mechanism independence: high.

Verdict candidate: SURVIVE.

### E. One Name Everywhere: `materialization_record.md`

Description: Use `materialization_record.md` for all modes, with Standard/Full record referencing desc/plan/critic and holding actual results.

Test:

- Novelty: medium.
- Scrutiny survival: medium-high. Consistent naming, but loses the useful precision of "trace" for post-only Standard/Full.
- Fertility: medium-high.
- Actionability: high.
- Mechanism independence: medium.

Verdict candidate: REFINE.

### F. Plan With `Trace Expectations`

Description: Add planned trace fields to `step_by_step_impl_plan.md`: intended changed files, planned validation, expected outputs, expected follow-up gate.

Test:

- Novelty: low-medium.
- Scrutiny survival: high if actual results go elsewhere.
- Fertility: high.
- Actionability: high.
- Mechanism independence: high.

Verdict candidate: SURVIVE as part of D.

### G. Append-Only Combined File for All Modes

Description: Use one large chronological record for every materialization: pre-contract, plan, critic, implementation, validation, outcome.

Test:

- Novelty: medium.
- Scrutiny survival: medium. Works like a lab notebook, but weakens separate artifact roles and makes dynamic critic awkward for larger work.
- Fertility: medium.
- Actionability: medium.
- Mechanism independence: medium.

Verdict candidate: KILL for Standard/Full; keep seed for Compact.

## Assembly Check

Best assembly:

1. Keep semantic ownership:
   - `desc.md` = intent and artifact contract.
   - `step_by_step_impl_plan.md` = expected execution and `Trace Expectations`.
   - `critic.md` = predicted risks.
   - `materialization_trace.md` = actual execution evidence for Standard/Full.
   - retrospective review = delayed outcome learning.
2. For Compact mode, use one combined `materialization_record.md` with:
   - Pre-Implementation Contract,
   - Tiny Plan,
   - Risk Scan,
   - Post-Implementation Trace,
   - Outcome,
   - Follow-up.
3. For Standard/Full, keep `materialization_trace.md` separate and reference:
   - desc path,
   - plan path,
   - critic path,
   - revised plan path if present.
4. Add a `Trace Expectations` section to the standard plan template:
   - expected files changed,
   - planned validation commands,
   - expected evidence/output,
   - expected follow-up gate.
5. Do not duplicate entire desc/plan inside the trace. Record the delta:
   - actual files changed,
   - commands/results,
   - deviations,
   - outcome,
   - follow-up.

## Candidate Templates

### Standard Plan Addition

```markdown
### Trace Expectations

- Expected files changed:
- Planned validation commands:
- Expected validation evidence:
- Expected follow-up gate:
```

### Compact Record Shape

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

## Innovation Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: yes. Multiple mechanisms converge on semantic ownership plus Compact combined record.
- Survivors tested: 7 / 7.
- Failure modes observed: plan/result collapse, desc overload, over-filed compact mode.
- Overall: PROCEED.
