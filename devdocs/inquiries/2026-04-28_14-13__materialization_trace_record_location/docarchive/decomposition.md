# Decomposition: Materialization Record Ownership

## Input

Sensemaking stabilized the record model: `desc.md` owns intent and contract, `step_by_step_impl_plan.md` owns expected implementation, `critic.md` owns predicted risk, and trace/record owns actual execution evidence. Compact mode may combine roles in one file only with explicit pre/post boundaries.

## 1. Coupling Map

### Cluster A: Intent / Contract

- problem statement,
- value,
- success criteria,
- scope boundary,
- source authority,
- artifact contract.

This cluster belongs in `desc.md` for Standard/Full and in the pre-implementation section of a Compact combined record.

### Cluster B: Planned Execution

- intended write-set,
- steps,
- expected outputs,
- planned validation,
- rollback or repair path,
- hardness/safety per step.

This cluster belongs in `step_by_step_impl_plan.md` for Standard/Full and in Tiny Plan for Compact.

### Cluster C: Predicted Risk

- risk items,
- severity,
- mitigations,
- affected areas,
- plan repair requirements.

This cluster belongs in `critic.md` for Standard/Full and in Risk Scan for Compact.

### Cluster D: Actual Execution Evidence

- actual files changed,
- actual validation commands,
- actual validation results,
- deviations from plan,
- discovered gaps,
- final outcome.

This cluster belongs in `materialization_trace.md` for Standard/Full and in Post-Implementation Trace for Compact.

### Cluster E: Retrospective Learning Hook

- did artifact solve the problem,
- did plan predict reality,
- did critic catch risks,
- did validation predict downstream behavior,
- future review gate.

This cluster belongs in trace/record as a deferred review pointer, then later in a retrospective review artifact.

## 2. Boundaries

### Boundary 1: Intent vs Plan

`desc.md` states what problem the artifact solves. `step_by_step_impl_plan.md` states how implementation should happen.

### Boundary 2: Plan vs Trace

Plan predicts. Trace records. This boundary is load-bearing because retrospective learning depends on plan-vs-actual delta.

### Boundary 3: Critic vs Trace

Critic predicts failure modes before implementation. Trace records whether those risks materialized or whether new risks appeared.

### Boundary 4: Trace vs Retrospective

Trace records immediate execution evidence. Retrospective review happens after the artifact has been used.

### Boundary 5: File Separation vs Role Separation

Standard/Full should separate files. Compact may merge files, but it must not merge roles.

## 3. Bottom-Up Validation

### Atoms

- source authority,
- problem/value,
- success criteria,
- planned write-set,
- planned steps,
- predicted risk,
- actual changed files,
- actual validation result,
- deviation,
- outcome,
- follow-up review gate.

### Validation

The atoms group naturally into pre-implementation, implementation-risk, post-implementation, and delayed-retrospective clusters. The only viable merge is Compact mode because the artifact is low-risk and the combined file can keep the clusters as sections.

## 4. Question Tree

### Q1. What belongs in `desc.md`?

Verification criteria:

- Includes problem/value/success/scope.
- May include source authority and artifact contract.
- Does not include actual changed files or validation results.

### Q2. What belongs in `step_by_step_impl_plan.md`?

Verification criteria:

- Includes planned write-set.
- Includes expected outputs.
- Includes planned validation.
- Includes rollback/repair assumptions.
- Does not become the sole actual execution trace.

### Q3. What belongs in `critic.md`?

Verification criteria:

- Includes predicted risks and mitigations.
- Identifies plan repairs before implementation.
- Does not replace post-implementation validation.

### Q4. What belongs in `materialization_trace.md`?

Verification criteria:

- Includes actual changed files.
- Includes actual validation commands and results.
- Includes deviations from plan.
- Includes outcome.
- Includes follow-up review gate.

### Q5. What should Compact mode do?

Verification criteria:

- Uses one combined record.
- Separates Pre-Implementation Contract from Post-Implementation Trace.
- Preserves tiny plan and risk scan.
- Is append-only after implementation starts.

### Q6. What should Standard/Full do?

Verification criteria:

- Keeps actual trace separate.
- References desc/plan/critic/revised plan by path.
- Preserves plan-vs-actual comparison.

## 5. Interface Map

| Source | Target | What Flows | Direction |
|---|---|---|---|
| `desc.md` | `step_by_step_impl_plan.md` | problem, success criteria, scope, contract | one-way |
| `step_by_step_impl_plan.md` | `dynamic_critic_prompt.md` / `critic.md` | planned changes and risk surface | one-way |
| `critic.md` | revised plan | risk mitigations and required plan repairs | one-way |
| revised plan | implementation | approved steps and write-set | one-way |
| implementation | trace | actual changes, commands, deviations | one-way |
| trace | retrospective review | evidence for plan/critic/validation quality | one-way |
| compact record sections | later sections | pre-contract and tiny plan feed post-trace | one-way, append-only |

## 6. Dependency Order

1. Create `desc.md` or Compact pre-implementation contract.
2. Create `step_by_step_impl_plan.md` or Compact tiny plan.
3. Run critic or Compact risk scan.
4. Repair plan if needed.
5. Implement.
6. Write actual trace section.
7. Validate and set outcome.
8. Record follow-up review gate.
9. Later retrospective review uses all prior records.

## 7. Self-Evaluation

| Dimension | Result | Notes |
|---|---|---|
| Independence | Pass | Each record has a distinct semantic role. |
| Completeness | Pass | Intent, plan, risk, actual execution, outcome, and future review are covered. |
| Reassembly | Pass | The records reconstruct the full materialization lifecycle. |
| Tractability | Pass | The model is simple enough for protocol wording. |
| Interface clarity | Pass | Plan-vs-actual flow is explicit. |
| Balance | Pass | Compact mode reduces files without eliminating roles. |
| Confidence | Pass | Boundaries align with existing task-desc/task-plan/critic-d lifecycle. |

## Decomposition Verdict

Proceed to Innovation. The main design choice is whether to name the Compact combined file `materialization_record.md` and Standard/Full post-only file `materialization_trace.md`, or use one name with explicit section semantics.
