# Sensemaking: Materialization Trace Record Location

## User Input

The user asked whether materialization trace information really needs a separate trace file, since task description and task plan documents already exist before artifact creation and might be able to hold the same information.

## SV1 - Baseline Understanding

Initial interpretation: task description and task plan can hold some trace-adjacent information, but they should not own the actual post-implementation trace. The likely answer is hybrid: planned trace fields live in desc/plan; actual trace lives in a separate record for Standard/Full, while Compact mode can combine pre/post sections in one file.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- `desc.md` is created before implementation.
- `step_by_step_impl_plan.md` is created before implementation.
- `critic.md` evaluates the plan before implementation.
- Trace evidence exists after implementation and validation.
- Retrospective learning needs to compare what was planned with what happened.
- Minimal artifacts should not create unnecessary file overhead.
- Standard/Full artifacts need stronger auditability.

### Key Insights

- The key split is not file count; it is **time-of-truth**.
- `desc.md` and `step_by_step_impl_plan.md` can define expected trace fields.
- Actual changed files, validation results, deviations, and outcome are post-facto evidence.
- If the plan is overwritten with actual results, the system loses the ability to evaluate plan quality.
- Compact mode can use one file if it clearly separates pre-implementation and post-implementation sections.

### Structural Points

- `desc.md`: intent and contract.
- `step_by_step_impl_plan.md`: predicted path and expected validation.
- `critic.md`: predicted risks.
- trace/record: actual execution and outcome.
- retrospective review: compares intent, plan, critic, and trace.

### Foundational Principles

- Do not confuse prediction with evidence.
- Do not erase the original plan by rewriting it after implementation.
- Low-risk work can compress representation, but not semantic roles.
- A trace exists to support later learning; it is not merely a log.

### Meaning-Nodes

- Prospective record.
- Retrospective record.
- Plan-vs-actual delta.
- Append-only evidence.
- Compact combined record.
- Standard separate trace.

## SV2 - Anchor-Informed Understanding

The user is right that task plan and task description should carry some materialization information. But they carry the **planned** version. The trace carries the **actual** version. The system needs both to learn whether plans, critics, and validations predicted reality.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

If actual trace data is stored inside `step_by_step_impl_plan.md`, the plan becomes both forecast and result. That weakens causal analysis because later diagnosis cannot easily tell whether a section was present before implementation or added afterward.

New anchor: record mutability must be controlled.

### Human / User Perspective

The user's concern is practical. Extra files feel costly when the artifact is tiny. A good protocol should not insist on a separate file when the artifact is a small, low-risk doc.

New anchor: file count should scale with risk and artifact size.

### Strategic / Long-Term Perspective

Homegrown's learning loop depends on comparing predicted risk with actual outcome. That means the system needs stable artifacts for desc, plan, critic, and trace in non-trivial runs.

New anchor: plan-vs-actual comparison is learning data.

### Risk / Failure Perspective

The danger of merging trace into plan is post-hoc rationalization. The plan can be edited to match what happened, making failures invisible.

New anchor: Standard/Full modes need separate post-implementation trace or append-only semantics strong enough to preserve history.

### Resource / Feasibility Perspective

Compact mode can avoid extra files by using a single `materialization_record.md`. That file can contain both planned and actual sections. This preserves lifecycle function without overhead.

New anchor: combined record is acceptable only if it is designed as a combined record from the start.

### Definitional / Consistency Perspective

Calling a combined compact file `materialization_trace.md` is slightly imprecise because part of it is pre-implementation. `materialization_record.md` may be clearer for Compact mode, while `materialization_trace.md` remains suitable for Standard/Full.

New anchor: naming should reflect semantic role.

## SV3 - Multi-Perspective Understanding

The model shifted from "separate trace vs plan contains trace" to "prospective vs retrospective ownership." The best design is:

- desc owns intent and contract,
- plan owns expected execution,
- critic owns predicted risk,
- trace owns actual execution,
- compact record can combine these only with explicit pre/post boundaries.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Can task plan hold trace information?

**Strongest counter-interpretation:** Yes. The implementation plan already names files, expected outputs, safety, hardness, and validation. Adding actual changed files and validation results there keeps everything in one place.

**Why the counter-interpretation fails (structural grounds):** The plan's job is to predict and constrain implementation before it happens. Actual changed files, validation results, deviations, and outcome are evidence after implementation. If both live in the same unstructured plan file, later review cannot reliably compare plan against actual.

**Confidence:** HIGH.

**Resolution:** Task plan can hold **planned trace fields**, but not be the owner of actual trace evidence in Standard/Full modes.

**What is now fixed?** The plan remains a prospective artifact.

**What is no longer allowed?** Overwriting the plan with post-hoc execution results as the only trace.

**What now depends on this choice?** Retrospective review and loop diagnosis can compare plan against actual.

**What changed in the conceptual model?** Trace is no longer "more plan information"; it is evidence against the plan.

### Ambiguity: Can task description hold trace information?

**Strongest counter-interpretation:** Yes. Task description already has success criteria and scope, so it could append outcome and follow-up.

**Why the counter-interpretation fails (structural grounds):** `desc.md` is intentionally lightweight discovery. If it becomes the place for implementation results, it loses its clean role as problem/value/scope. The more complex artifact already has a plan and trace path.

**Confidence:** HIGH.

**Resolution:** `desc.md` should hold source authority, problem, value, scope, and artifact contract. It should not own actual trace.

**What is now fixed?** `desc.md` remains intent/contract.

**What is no longer allowed?** Turning `desc.md` into a catch-all run log.

**What now depends on this choice?** Task-plan and trace boundaries stay readable.

**What changed in the conceptual model?** Desc is upstream contract, not execution evidence.

### Ambiguity: Can Compact mode use one file?

**Strongest counter-interpretation:** No. If trace must be evidence and plan must be prediction, even Compact mode needs separate files.

**Why the counter-interpretation fails (structural grounds):** For low-risk standalone artifacts, the cost of separate files can exceed the value. The semantic boundary can be preserved inside one combined file if sections are explicit and append-only: pre-implementation contract/plan first, post-implementation trace after.

**Confidence:** HIGH.

**Resolution:** Compact mode can use one combined `materialization_record.md` or `materialization_trace.md`, but it must have clear pre/post sections.

**What is now fixed?** Compact mode may merge files, not roles.

**What is no longer allowed?** One-file compact mode with no pre/post distinction.

**What now depends on this choice?** The compact template should be revised to emphasize combined record semantics.

**What changed in the conceptual model?** Compact mode becomes a combined record, while Standard/Full preserve separate records.

### Ambiguity: Should the separate trace be named trace or record?

**Strongest counter-interpretation:** Always call it trace for consistency.

**Why the counter-interpretation fails (structural grounds):** In Compact mode, the file contains pre-implementation fields as well as post-implementation trace. "Record" better describes the combined artifact. In Standard/Full mode, "trace" is accurate because desc/plan/critic already exist separately.

**Confidence:** MEDIUM.

**Resolution:** Prefer `materialization_record.md` for Compact mode and `materialization_trace.md` for Standard/Full. If the protocol wants one name everywhere, use section headings to make pre/post roles unambiguous.

**What is now fixed?** Naming should not obscure semantic role.

**What is no longer allowed?** Calling a file trace while treating planned and actual fields as interchangeable.

**What now depends on this choice?** Protocol template naming.

**What changed in the conceptual model?** Trace is a subtype of record: all traces are records, but not all records are post-only traces.

## SV4 - Clarified Understanding

Task description and task plan should carry expected materialization information, but they should not become the sole post-implementation trace for Standard/Full work. For Compact mode, a single combined record is acceptable if it has explicit pre-implementation and post-implementation sections.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- `desc.md` owns intent, value, scope, source authority, and artifact contract.
- `step_by_step_impl_plan.md` owns planned write-set, intended steps, expected outputs, planned validation, and rollback/repair assumptions.
- `critic.md` owns predicted risks.
- `materialization_trace.md` owns actual changed files, actual validation results, deviations, outcome, and follow-up for Standard/Full modes.
- Compact mode can use one combined `materialization_record.md`.

### Eliminated

- Storing actual trace only inside overwritten task plan.
- Storing actual trace inside task description.
- Treating planned validation and actual validation as the same field.
- Losing plan-vs-actual delta.

### Viable Paths

1. Standard/Full: separate desc, plan, critic, trace.
2. Compact: combined record with pre/post sections.
3. Plan files include a "Trace Expectations" or "Validation Plan" section, but actual results go to trace.

## SV5 - Constrained Understanding

The record model should be:

```text
desc = why and what
plan = expected how
critic = predicted risk
trace = actual what happened
retrospective = did it matter
```

Compact mode can collapse these into one file only if the file preserves those headings and time boundaries.

## SV6 - Stabilized Model

The trace should remain distinct in semantic role, but not always distinct in file count.

For Standard and Full materialization, keep a separate `materialization_trace.md`. The plan should include planned validation, intended write-set, and expected outputs, but the actual changed files, validation results, deviations, and outcome belong in the trace.

For Compact materialization, use one combined `materialization_record.md` with explicit sections:

- Pre-Implementation Contract,
- Tiny Plan,
- Risk Scan,
- Post-Implementation Trace,
- Outcome,
- Follow-up.

This differs from SV1 by making the answer mode-dependent. The issue is not whether the task plan can hold "trace info" in general; it can hold planned trace expectations. Actual execution evidence needs a separate trace role, either as its own file or as a clearly separated post-section inside a compact combined record.

## Saturation Indicators

- Perspective saturation: high. Technical, human, strategic, risk, feasibility, and naming perspectives converged.
- Ambiguity resolution ratio: 4 major ambiguities resolved / 4 identified.
- SV delta: significant. The model shifted from file ownership to semantic ownership.
- Anchor diversity: high.

**Overall: PROCEED**
