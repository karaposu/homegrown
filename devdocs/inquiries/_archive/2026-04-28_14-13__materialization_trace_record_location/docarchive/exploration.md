# Exploration: Materialization Trace Record Location

## Mode and Entry Point

- Mode: mixed artifact and possibility exploration.
- Entry point: signal-first. The user noticed that `task-plan` or `task-desc` already exist before artifact creation and asked whether they can hold trace information instead of creating a separate trace file.

## Cycle 1: Existing Record Roles Scan

### Scan

Scanned:

- `task-desc.md`
- `task-plan.md`
- `critic-d.md`
- `enes/materialization_lifecycle.md`
- `devdocs/inquiries/2026-04-28_13-22__artifact_materialization_protocol_shape/finding.md`

### Found

Current role separation:

- `desc.md` describes the problem, value, success criteria, scope boundaries, and priority.
- `step_by_step_impl_plan.md` predicts how implementation should happen.
- `dynamic_critic_prompt.md` defines a tailored critic.
- `critic.md` records risks against the plan.
- revised plan records plan repair before implementation.
- `materialization_trace.md` records what actually happened after implementation.

### Signals

- `desc.md` and `step_by_step_impl_plan.md` are prospective records. They exist before implementation.
- Trace fields are retrospective records. They exist after implementation and validation.
- The user is right that these artifacts overlap around source, scope, validation, and expected outputs.
- The possible design question is not "can the plan contain any trace fields?" but "which fields are predictions and which are evidence?"

### Resolution Decision

Probe the prospective/retrospective boundary.

### Frontier State

Existing roles mapped. Boundary needs sensemaking.

### Confidence Update

High confidence that storing execution results inside an originally prospective plan risks confusing "expected" with "actual" unless the record is clearly split.

## Cycle 2: Prospective vs Retrospective Probe

### Probe

Mapped trace fields by time of truth.

### Found

Fields known before implementation:

- source authority,
- selected mode and why,
- intended artifact records,
- target write-set,
- planned validation commands,
- expected follow-up gate.

Fields known only after implementation:

- actual files changed,
- actual validation commands and results,
- deviations from plan,
- final outcome,
- actual follow-up needs.

Fields refined during implementation:

- validation gaps,
- partial failures,
- discovered risk,
- implementation notes.

### Signals

- Task plan can hold expected trace fields, especially write-set, planned validation, and intended outputs.
- Task description can hold source authority, artifact contract, success criteria, and scope.
- Neither should be the only place for actual execution evidence unless the file is explicitly a combined record with pre/post sections.

### Resolution Decision

Scan possible storage layouts.

### Frontier State

Temporal boundary is clear. Need layout options.

### Confidence Update

Confirmed: the problem is mutable record semantics, not file count alone.

## Cycle 3: Layout Options Scan

### Scan

Generated possible record layouts.

### Found

Option A: Separate trace file for every mode.

- Pros: clean plan-vs-actual boundary.
- Cons: extra file even for tiny artifacts.

Option B: Store trace in `step_by_step_impl_plan.md`.

- Pros: fewer files; plan and result are close.
- Cons: plan becomes mutable evidence; plan-vs-actual comparison becomes harder.

Option C: Store trace in `desc.md`.

- Pros: one file can contain intent and outcome.
- Cons: desc stops being a lightweight discovery artifact and becomes too overloaded.

Option D: Use `materialization_record.md` as a combined file for Compact mode only.

- Pros: low overhead; clear pre/post sections; preserves evidence.
- Cons: needs naming clarity because "trace" normally means post-only.

Option E: Standard/Full keep separate trace, Compact combines inline brief/plan/trace.

- Pros: best fit with prior tiered protocol.
- Cons: protocol must specify immutable/append-only semantics clearly.

### Signals

- The best distinction may be mode-dependent:
  - Compact: one combined materialization record.
  - Standard/Full: separate desc/plan/critic/trace files.
- "Trace" as a word may be slightly misleading for compact mode because the file also contains pre-implementation brief/plan. `materialization_record.md` may be a better name for compact mode.

### Resolution Decision

Jump scan: inspect risks of merging records.

### Frontier State

Layout space mapped.

### Confidence Update

Medium-high confidence that hybrid layout is strongest.

## Jump Scan: Record-Merging Risks

### Scan

Mapped what can go wrong if task plan or task description holds actual trace data.

### Found

Risks:

- Plan mutation can erase the original prediction, making plan quality impossible to evaluate later.
- Appending results to `desc.md` overloads a simple discovery artifact.
- Later agents may read outcome fields as planned fields or planned fields as actual results.
- Dynamic critic cannot accurately judge a plan if the plan already contains post-hoc edits.
- Retrospective review needs plan-vs-actual delta; this is weaker if the plan is overwritten.

### Signal

If any merge is allowed, it must be append-only and sectioned:

- Pre-Implementation Contract
- Planned Work
- Post-Implementation Trace
- Retrospective Hook

## Convergence Assessment

- Frontier stability: yes. Major roles and layout options are mapped.
- Declining discovery rate: yes. Later scans refined record ownership rather than finding new regions.
- Bounded gaps: yes. Remaining decisions are evaluative: naming and mode-specific storage rules.

## Structural Map

### Territory Overview

| Region | Status | Notes |
|---|---|---|
| Task description role | Confirmed | Prospective intent and contract. |
| Task plan role | Confirmed | Prospective implementation prediction and validation plan. |
| Critic role | Confirmed | Pre-implementation pressure against the plan. |
| Trace role | Confirmed | Post-implementation evidence and outcome. |
| Compact merge option | Scanned/probed | Viable if append-only and clearly sectioned. |
| Standard/Full merge option | Scanned/probed | Risky because plan-vs-actual comparison matters more. |

### Inventory

Record fields by owner:

- `desc.md`: problem, value, success criteria, scope, source authority, artifact contract.
- `step_by_step_impl_plan.md`: intended write-set, step outputs, planned validation, rollback/repair path.
- `critic.md`: predicted risks and mitigations.
- trace/record: actual changed files, actual validation, deviations, outcome, follow-up.

### Signal Log

- Strong signal: pre-implementation files should not be overwritten with post-hoc evidence.
- Strong signal: compact mode can combine records if it uses explicit pre/post sections.
- Strong signal: Standard/Full should keep trace separate because it enables plan-vs-actual learning.

### Confidence Map

| Claim | Confidence |
|---|---|
| `desc.md` should not be the trace owner | high |
| `step_by_step_impl_plan.md` should not be overwritten with actual trace | high |
| plan can contain planned trace fields | confirmed |
| compact mode can use a combined record | high |
| Standard/Full should keep separate trace | high |

## Gaps and Recommendations for Sensemaking

Sensemaking should collapse the core ambiguity: whether "same file" means "same semantic role." Likely answer: task desc and task plan should hold planned/expected materialization information; the actual trace should remain separate for Standard/Full, while Compact can use one combined `materialization_record.md` with clear pre/post sections.
