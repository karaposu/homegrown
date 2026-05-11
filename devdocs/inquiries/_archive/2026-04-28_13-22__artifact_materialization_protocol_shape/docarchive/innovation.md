# Innovation: Artifact Materialization Protocol Designs

## User Input

The user asked how the future `homegrown/protocols/artifact_materialization.md` should be designed: what it should include, what it should not include, and whether minimal artifacts can use a smaller materialization lifecycle to avoid wasting compute or time.

## Seed

The protocol must preserve the strength of the proven task-desc -> task-plan -> dynamic critic -> repair -> implement lifecycle, while making low-risk artifacts cheap enough that the protocol is actually used.

Valuation signal: preserve implementation rigor without turning every artifact into ceremony.

## Mechanism Generation

### 1. Lens Shifting

- Generic: View the protocol as a build process. It needs inputs, stages, outputs, checks, and logs.
- Focused: View the protocol as a border checkpoint between theory and filesystem effects. The critical operations are authorization, scope, risk, validation, and trace.
- Contrarian: View the protocol as adoption design. A protocol that is too heavy for small artifacts will fail even if theoretically correct.

Survivor: protocol as a **risk-scaled border checkpoint**.

### 2. Combination

- Generic: Combine task-desc, task-plan, critic-d, validation, and trace into one lifecycle.
- Focused: Combine one invariant input contract with three execution modes.
- Contrarian: Combine compact mode and trace into a single file, so minimal artifacts still leave evidence.

Survivor: a **one contract, three modes** design.

### 3. Inversion

- Generic: Instead of "all artifacts need full lifecycle," assume "all artifacts need only the smallest lifecycle that preserves invariants."
- Focused: Instead of "dynamic critic creates files," assume "dynamic critic is a pressure function that can be inline or separate depending on risk."
- Contrarian: Instead of "small artifact = low risk," assume "small artifact can be high risk if it edits loaded behavior."

Survivor: mode selection based on blast radius and validation, not artifact size.

### 4. Constraint Manipulation

- Generic: Add constraint: every mode must leave source, write-set, contract, validation, and outcome.
- Focused: Add constraint: compact mode must escalate if it detects Medium/High risk.
- Contrarian: Add constraint: full mode cannot implement until High risks are resolved and Medium risks are explicitly accepted.

Survivor: mandatory escalation and pause rules.

### 5. Absence Recognition

- Generic: Missing: a mode-selection table.
- Focused: Missing: compact-mode template.
- Contrarian: Missing: "do not use" section that prevents materialization from replacing reasoning, conclusion, branch experiments, or artifact-specific design.

Survivor: protocol must include mode-selection table, compact template, and non-goals.

### 6. Domain Transfer

- Generic: Borrow from PR templates: changed files, tests, risk, rollback.
- Focused: Borrow from lab notebooks: hypothesis/source, method, result, interpretation.
- Contrarian: Borrow from CI gates: risk class determines required checks.

Survivor: trace as a small PR/lab report with mode-dependent depth.

### 7. Extrapolation

- Generic: If every artifact uses full lifecycle, the system will become slow and the human will bypass it.
- Focused: If compact mode lacks escalation, the system will hide risky changes under "small artifact."
- Contrarian: If the protocol overfits to ARC now, it will fail as a general self-improvement substrate.

Survivor: general protocol with compact ergonomics and strong escalation.

## Candidate Designs

### A. One-Size Full Lifecycle

Description: Every artifact gets separate `desc.md`, `step_by_step_impl_plan.md`, `dynamic_critic_prompt.md`, `critic.md`, repaired plan, validation, and trace.

Test:

- Novelty: low.
- Scrutiny survival: medium-low. Strong rigor, poor ergonomics.
- Fertility: medium.
- Actionability: low for small artifacts.
- Mechanism independence: low.

Verdict candidate: KILL for v1 default. Keep as high-risk/full mode.

### B. Free Compact Mode

Description: Low-risk artifacts can be created directly with only a short note afterward.

Test:

- Novelty: low.
- Scrutiny survival: low. Reintroduces the original direct-edit problem.
- Fertility: low.
- Actionability: high short-term.
- Mechanism independence: low.

Verdict candidate: KILL.

### C. Three-Mode Protocol

Description: One input contract and three execution modes: compact, standard, full.

Test:

- Novelty: medium.
- Scrutiny survival: high.
- Fertility: high. Applies to docs, protocols, skills, configs, code, tests, ARC artifacts.
- Actionability: high.
- Mechanism independence: high. Multiple mechanisms converged on it.

Verdict candidate: SURVIVE.

### D. Two-Mode Protocol

Description: Minimal mode and full mode only.

Test:

- Novelty: low-medium.
- Scrutiny survival: medium. Simpler, but creates an awkward middle for existing protocol/skill edits.
- Fertility: medium.
- Actionability: medium-high.
- Mechanism independence: medium.

Verdict candidate: REFINE into three modes.

### E. Artifact-Type Templates First

Description: Make separate templates for protocol artifacts, code artifacts, tests, configs, ARC harness adapters, and trace schemas.

Test:

- Novelty: medium.
- Scrutiny survival: medium-low for now. Useful later, but too much upfront design.
- Fertility: high later.
- Actionability: low for v1.
- Mechanism independence: medium.

Verdict candidate: DEFER.

### F. Branch Experiment Integrated Protocol

Description: Every materialization run becomes a branch experiment with baseline, candidate, comparison, and retain/revert decision.

Test:

- Novelty: medium.
- Scrutiny survival: medium-low for v1. Too heavy for low/medium artifacts.
- Fertility: high for high-risk self-modification.
- Actionability: low now.
- Mechanism independence: medium.

Verdict candidate: DEFER except high-risk future path.

### G. ARC-First Materialization Protocol

Description: Design the protocol around ARC harness adapters, solver traces, predictions, and scoring.

Test:

- Novelty: medium.
- Scrutiny survival: medium. Concrete, but overfits the protocol to one downstream use case.
- Fertility: high for ARC, lower globally.
- Actionability: medium.
- Mechanism independence: low-medium.

Verdict candidate: REFINE. ARC should be a standard/full-mode artifact type, not the protocol core.

### H. Mode Selection as the Protocol's Center

Description: Make the first operational step a risk/mode selection table. The chosen mode then determines files, critic depth, validation gates, and trace requirements.

Test:

- Novelty: medium.
- Scrutiny survival: high.
- Fertility: high.
- Actionability: high.
- Mechanism independence: high.

Verdict candidate: SURVIVE as the center of C.

## Assembly Check

The strongest assembly:

1. `artifact_materialization.md` starts with purpose, boundary, and non-goals.
2. It requires a universal input contract:
   - source authority,
   - artifact type,
   - target path/write-set,
   - artifact contract,
   - validation plan,
   - risk facts,
   - selected mode.
3. It uses a mode-selection table:
   - Compact for low-risk standalone artifacts.
   - Standard for medium-risk artifacts or edits to existing important docs.
   - Full for behavior-changing, shared tooling, runner, discipline, schema, or ARC execution/scoring work.
4. Compact mode uses one `materialization_trace.md` with inline:
   - brief,
   - tiny plan,
   - risk scan,
   - implementation notes,
   - validation/manual review note,
   - outcome.
5. Standard mode uses separate:
   - `desc.md`,
   - `step_by_step_impl_plan.md`,
   - `dynamic_critic_prompt.md`,
   - `critic.md`,
   - revised plan if needed,
   - validation,
   - trace.
6. Full mode is standard mode plus:
   - no unresolved High risks,
   - explicit Medium-risk acceptance,
   - stronger validation,
   - retrospective review gate,
   - branch experiment recommendation when the change modifies core behavior.
7. Escalation rules can move any run upward:
   - Medium/High risk appears,
   - write-set expands,
   - validation is unclear,
   - existing loaded protocol/skill/tooling is touched,
   - implementation discovers architecture change.
8. The protocol ends with validation outcomes, trace schema, and retrospective hook.

## Candidate Compact-Mode Trace Skeleton

```markdown
# Materialization Trace: [name]

## Source
- Source finding/request:
- Why materialization is authorized:

## Contract
- Artifact type:
- Target path/write-set:
- Success criteria:
- Risk class: Low
- Mode: Compact

## Inline Brief
- Problem:
- Value:
- Scope boundary:

## Tiny Plan
1. ...

## Risk Scan
- Behavior impact:
- Existing loaded files touched:
- Validation clarity:
- Escalation needed: yes/no

## Implementation Notes
- Files changed:
- Deviations:

## Validation
- Checks/review:
- Result:

## Outcome
PASS / PARTIAL / FAIL

## Follow-up
- Review gate:
```

## Candidate Mode-Selection Table

| Mode | Use When | Required Artifact Records | Cannot Use When |
|---|---|---|---|
| Compact | New low-risk standalone artifact; narrow write-set; easy review | One trace with inline brief/plan/risk/validation | Existing loaded protocols/skills/tooling touched; behavior changes; validation unclear |
| Standard | Medium-risk artifact; existing doc/protocol/skill edit; test/config/stub | Desc, plan, dynamic critic, critic, revised plan if needed, validation, trace | High-risk behavior/schema/runner/core discipline changes |
| Full | High-risk artifact; runner/tooling/schema/core discipline/ARC execution changes | Standard artifacts plus strict risk gates and retrospective review gate | High risks unresolved |

## Innovation Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: yes. Six mechanisms converge on a tiered lifecycle with mode selection at the center.
- Survivors tested: 8 / 8.
- Failure modes observed: one-size ceremony and unsafe compact shortcuts.
- Overall: PROCEED.
