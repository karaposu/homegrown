---
status: active
refines: devdocs/inquiries/2026-04-28_10-28__artifact_generation_readiness/finding.md
---
# Finding: Artifact Materialization Protocol Shape

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-04-28_10-28__artifact_generation_readiness/finding.md`

**Revision trigger:** The prior finding selected Artifact Materialization as the missing bridge. The user then added that their proven implementation lifecycle is task description -> implementation plan -> dynamic critic -> plan repair -> implementation, and asked how the operational protocol should include or exclude parts of that lifecycle.

**What's preserved:** Artifact Materialization remains post-CONCLUDE. It still converts accepted decisions into bounded, validated, traceable artifacts. Skills still should not freely write arbitrary artifacts.

**What's changed:** The protocol should not use one fixed lifecycle depth for every artifact. It should choose compact, standard, or full mode based on risk.

**What's new:** Minimal artifacts get a first-class compact mode. Compact mode is smaller in document weight, but it still preserves source authority, write-set, contract, risk scan, validation, and trace.

**Migration:** The next implementation should create `homegrown/protocols/artifact_materialization.md` as a tiered lifecycle controller, not as a generic synthesis protocol and not as a full build system.

## Question

What should the operational `homegrown/protocols/artifact_materialization.md` protocol include and exclude, and how can it support a smaller lifecycle for minimal artifacts without wasting compute or time?

The goal is to produce a practical protocol boundary: required sections, excluded responsibilities, risk tiers, minimal-path rules, gates for escalation to the full task-desc -> task-plan -> dynamic critic -> repair -> implement -> validate -> trace lifecycle, and guidance for when small artifacts can safely use a compressed flow.

## Finding Summary

- `artifact_materialization.md` should be a **tiered lifecycle controller**. Its core job is to choose the right amount of process for a concrete artifact.
- The protocol should have one universal input contract: source authority, artifact type, target path or write-set, artifact contract, validation plan, risk facts, and selected mode.
- The protocol should define three modes: Compact, Standard, and Full.
- Compact mode is allowed for low-risk standalone artifacts. It should use one `materialization_trace.md` with inline brief, tiny plan, risk scan, implementation notes, validation note, outcome, and follow-up.
- Standard mode is for medium-risk artifacts. It should use separate task description, implementation plan, dynamic critic prompt, critic output, repaired plan if needed, implementation, validation, and trace.
- Full mode is for high-risk artifacts. It should use Standard mode plus stricter gates: no unresolved High risks, explicit Medium-risk acceptance, stronger validation, retrospective review gate, and branch-experiment recommendation for core behavior changes.
- Minimal artifacts can use a smaller lifecycle. The compression must reduce document count and depth, not remove accountability.
- The protocol should not include artifact-specific build recipes, ARC-specific core logic, branch experiment mechanics for every artifact, truth-validation of findings, or permission for skills to bypass write scope.

## Finding

The operational protocol should be strict about invariants and flexible about document weight.

The invariant part is the materialization contract. Every artifact run must identify why it is authorized, what it is allowed to change, what success means, how it will be checked, and what happened. Those fields are non-negotiable because they prevent the old failure mode: a finding says something should exist, then the agent directly edits files without a stable bridge between decision and implementation.

The flexible part is how much process is required. A standalone low-risk Markdown document should not need the same seven-file lifecycle as an ARC execution adapter or a runner change. If the protocol requires full task-desc, full plan, dynamic critic prompt, critic output, repaired plan, validation, and trace for every tiny artifact, it will waste compute and time. The user will eventually bypass it.

The solution is not to weaken materialization. The solution is to make lifecycle depth risk-scaled.

### 1. Protocol Purpose

`artifact_materialization.md` should say:

> Artifact Materialization turns an authorized decision into concrete files under a declared contract, bounded write-set, validation plan, and trace.

It should also state what it does not do. It does not decide whether a finding is true. It does not replace MVL/MVL+, which produces understanding and decisions. It does not replace CONCLUDE, which produces `finding.md`. It does not replace branch experiments, which compare candidate changes against baselines. It does not replace artifact-specific implementation planning.

### 2. Universal Input Contract

Every materialization run should begin with these fields:

- **Source authority:** finding path, user request, or protocol/experiment that authorizes the artifact.
- **Artifact type:** protocol, skill, reference doc, config, code, test, trace schema, harness adapter, documentation, or other.
- **Target path/write-set:** exact files or directories that may be created or edited.
- **Artifact contract:** what the artifact must contain or do.
- **Validation plan:** tests, checks, manual review, or reason automated validation is unavailable.
- **Risk facts:** behavior impact, existing-vs-new file, loaded protocol/skill/tooling impact, write-set breadth, reversibility, validation clarity.
- **Selected mode:** Compact, Standard, or Full, with one sentence explaining why.

If these fields cannot be filled, the run should not implement. It should first clarify the task.

### 3. Mode Selection

The protocol should choose mode by risk, not by artifact size or file type alone.

| Mode | Use When | Required Records | Cannot Use When |
|---|---|---|---|
| Compact | New low-risk standalone artifact, narrow write-set, easy review, no behavior change | One `materialization_trace.md` with inline brief, tiny plan, risk scan, validation, outcome | Existing loaded protocols/skills/tooling touched; behavior changes; validation unclear |
| Standard | Medium-risk artifact, existing doc/protocol/skill edit, test, config, stub, non-core adapter | `desc.md`, `step_by_step_impl_plan.md`, `dynamic_critic_prompt.md`, `critic.md`, revised plan if needed, validation, trace | Runner, schema, discipline fundamentals, core behavior, or ARC execution/scoring changes |
| Full | High-risk artifact, runner/tooling/schema/core discipline changes, ARC execution/scoring paths | Standard records plus strict risk gates and retrospective review gate | Any unresolved High risk |

This table is the protocol's center. Without it, minimal artifacts either waste effort or become unsafe shortcuts.

### 4. Compact Mode

Compact mode is not "skip the lifecycle." It is "represent the lifecycle in one file."

Compact mode should write a `materialization_trace.md` with these sections:

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

This mode is appropriate for low-risk standalone artifacts such as a new concept note, a new draft protocol that is not yet wired into a runner, a trace schema sketch, or a non-executed config example.

Compact mode must escalate if the risk scan finds Medium/High risk, if the write-set expands, if validation becomes unclear, or if implementation discovers that the artifact affects behavior.

### 5. Standard Mode

Standard mode is the normal implementation path for medium-risk artifacts. It preserves the proven AlignStack-style lifecycle in separate records:

```text
desc.md
step_by_step_impl_plan.md
dynamic_critic_prompt.md
critic.md
step_by_step_impl_plan_revised.md   [when critic changes the plan]
materialization_trace.md
```

Standard mode should be used when editing existing protocols or skills, adding tests, adding configs used by tooling, or creating stubs that future tools may depend on.

Dynamic critic is mandatory in Standard mode because medium-risk artifacts have enough interaction surface that generic review is not enough. The critic should be tailored to the artifact type, affected concepts, and likely failure modes.

### 6. Full Mode

Full mode is for high-risk materialization. It uses Standard mode plus stricter gates:

- no unresolved High critic risks before implementation,
- explicit acceptance for any Medium risks that remain,
- stronger validation,
- retrospective review gate,
- branch experiment recommendation when the artifact changes core behavior.

Full mode should be used for runner behavior, shared tooling, discipline fundamentals, schemas used across inquiries, and ARC execution/scoring artifacts.

ARC belongs here by default when the artifact predicts outputs, runs solvers, scores tasks, or changes execution traces. ARC can be a strong test case, but it should not define the general protocol.

### 7. Escalation Rules

Escalation is what prevents Compact mode from becoming a loophole.

Any mode must pause or escalate when:

- the implementation needs files outside the declared write-set,
- the artifact changes behavior rather than only adding standalone text,
- validation is unclear for a non-trivial artifact,
- the risk scan finds Medium or High risk,
- the change touches existing loaded protocols, skills, runners, or tooling,
- the plan discovers an architectural change,
- user or parallel edits create uncertainty about safe modification.

Escalation should happen before implementation continues. The protocol should not allow silent write-set expansion.

### 8. Validation and Outcomes

Every run ends with one of three outcomes:

- **PASS:** artifact satisfies the declared contract and checks/review passed.
- **PARTIAL:** artifact exists, but validation is incomplete, failed in a non-blocking way, or depends on deferred review.
- **FAIL:** artifact does not satisfy the contract or cannot be safely used.

Only PASS, or an explicitly limited PARTIAL, can be used as evidence that Homegrown materialized an artifact successfully.

### 9. Trace and Retrospective Hook

Every mode should produce a trace. The trace is the bridge back into Homegrown's learning system.

The trace should record:

- source authority,
- mode selected and why,
- artifact records created,
- files changed,
- validation commands and results,
- deviations from plan,
- outcome,
- follow-up review gate.

After the artifact has been used, retrospective review should ask whether the artifact solved the original problem, whether the plan missed important implementation realities, whether the dynamic critic caught the right risks, and whether validation predicted downstream behavior.

## Next Actions

### MUST

- **What:** Create `homegrown/protocols/artifact_materialization.md` using the tiered lifecycle design.
  **Who:** Homegrown protocol layer.
  **Gate:** Before using Homegrown to claim artifact-generation capability.
  **Why:** This gives the repo a controlled bridge from findings to files without making low-risk work too heavy.

- **What:** Put the mode-selection table near the top of the protocol.
  **Who:** `artifact_materialization.md`.
  **Gate:** Before defining the detailed mode procedures.
  **Why:** Mode selection is the load-bearing decision. It prevents both over-bureaucracy and unsafe shortcuts.

- **What:** Define Compact mode as one-file materialization, not direct edit mode.
  **Who:** `artifact_materialization.md`.
  **Gate:** Before the first low-risk artifact materialization.
  **Why:** This allows speed without losing source, scope, risk, validation, and trace.

- **What:** Define escalation rules explicitly.
  **Who:** `artifact_materialization.md`.
  **Gate:** Before allowing Compact mode.
  **Why:** Escalation prevents "small artifact" from becoming a loophole for risky changes.

### COULD

- **What:** Add subtype templates later for common artifacts such as protocol edits, skill edits, ARC harness adapters, and trace schemas.
  **Who:** Future protocol refinement.
  **Gate:** After at least 3 materialization traces show repeated artifact patterns.
  **Why:** Templates will be better once based on observed runs rather than guessed upfront.

- **What:** Add automation for creating materialization folders and trace skeletons.
  **Who:** Future tooling layer.
  **Gate:** After manual v1 has been used enough to stabilize file names and required fields.
  **Why:** Automation should encode proven process, not premature assumptions.

### DEFERRED

- **What:** Branch experiment as mandatory for every artifact.
  **Gate:** Reopen only for Full-mode core behavior changes.
  **Why (if revived):** Branch experiments are valuable for high-risk self-modification, but too heavy for ordinary materialization.

- **What:** ARC-specific protocol core.
  **Gate:** Reopen only if multiple ARC materializations show repeated needs that the general protocol cannot express.
  **Why (if revived):** ARC may need subtype guidance, but the base protocol should remain general.

- **What:** Full dynamic critic file for every Compact-mode artifact.
  **Gate:** Reopen only if compact traces repeatedly miss risks that an inline risk scan should have caught.
  **Why (if revived):** Separate critic files improve rigor, but mandatory use for trivial artifacts creates avoidable overhead.

## Reasoning

One-size full lifecycle was killed as the default because it would waste compute and time on small artifacts. The full lifecycle is still preserved as Full mode for high-risk work.

Free compact mode was killed because it reintroduces unsafe direct editing. Compact mode survives only when it preserves lifecycle functions inline.

The three-mode protocol survived because it matches the actual risk landscape. Low-risk, medium-risk, and high-risk materializations have different process needs.

The two-mode protocol was refined because it lacks a natural middle path. Medium-risk work is common: existing protocol edits, skill edits, tests, configs, and stubs are too risky for Compact mode but too frequent for Full mode.

Artifact-type templates were deferred because they are useful later but premature now. Early materialization traces should reveal which templates are actually needed.

Branch experiment integration was deferred because branch experiments are too heavy for all artifacts. Full mode should point to branch experiments when core behavior changes, but the materialization protocol should not require them universally.

ARC-first protocol design was refined. ARC is a strong downstream use case, especially for execution and scoring artifacts, but it should be handled as a high-risk artifact type within the general protocol.

Mode selection as the protocol center survived because it directly solves the user's concern: minimal artifacts can be smaller without making materialization unsafe.

## Open Questions

### Monitoring

- After 3 materialization runs, review whether Compact/Standard/Full boundaries are correct.
- After the first Compact-mode failure, check whether the inline risk scan missed an escalation trigger.
- After the first ARC materialization, check whether ARC needs a subtype template.

### Blocked

- Strong automated validation is blocked until structural checks or artifact-specific validators exist.

### Refinement Triggers

- Reopen mode selection if two consecutive materialization traces are escalated after starting in the wrong mode.
- Reopen Compact-mode depth if two Compact traces produce PARTIAL or FAIL because risk was underestimated.
- Reopen subtype templates when at least 3 traces share the same artifact type and repeated fields.
