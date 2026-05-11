# Decomposition: Artifact Materialization Protocol Shape

## Input

Sensemaking stabilized the protocol as a tiered lifecycle controller: one shared materialization contract, compact/standard/full execution modes, and escalation rules that preserve accountability while reducing overhead for low-risk artifacts.

## 1. Coupling Map

### Cluster A: Protocol Boundary

- purpose,
- when to use,
- relationship to MVL/MVL+ and CONCLUDE,
- non-goals.

This cluster defines what the protocol is and what it is not. It is strongly coupled to adoption and correctness because boundary drift would make the protocol either too broad or unsafe.

### Cluster B: Input Contract and Mode Selection

- source authority,
- artifact type,
- target path/write-set,
- contract,
- validation plan,
- risk class,
- mode selection.

This is the protocol's decision core. It determines whether compact, standard, or full mode is allowed.

### Cluster C: Lifecycle Modes

- compact mode,
- standard mode,
- full mode,
- required artifacts per mode,
- allowed compression.

This cluster defines how much process is required for each risk level.

### Cluster D: Escalation Rules

- behavior impact,
- existing loaded protocol/skill edits,
- broad write-set,
- unclear validation,
- Medium/High risk found in compact risk scan,
- need to change architecture or target files during implementation.

This cluster prevents compact mode from becoming a loophole.

### Cluster E: Implementation Rules

- stay inside write-set,
- no unrelated refactors,
- do not overwrite user/parallel edits,
- amend plan before expanding scope,
- stop on architecture change.

This cluster governs the actual edit phase.

### Cluster F: Validation and Outcome

- validation commands,
- manual review reasons,
- PASS/PARTIAL/FAIL,
- unresolved gaps,
- capability-evidence rule.

This cluster decides whether the artifact can be trusted or only recorded as an attempted materialization.

### Cluster G: Trace and Retrospective Hook

- trace fields,
- output location,
- changed files,
- deviations,
- follow-up review gate,
- retrospective learning questions.

This cluster connects implementation back into Homegrown's learning system.

## 2. Boundaries

### Boundary 1: Protocol Boundary vs Lifecycle Details

Boundary section should state role and non-goals. Lifecycle details should state procedure. Keeping them separate prevents every procedural detail from becoming a philosophical claim.

### Boundary 2: Input Contract vs Mode Selection

Input contract collects facts. Mode selection uses those facts. They are coupled but separable.

### Boundary 3: Compact Mode vs Standard Mode

Compact mode collapses files into one trace. Standard mode uses separate files. The boundary is document representation, not accountability.

### Boundary 4: Standard Mode vs Full Mode

Full mode is standard mode plus stricter gates. The boundary is risk severity and behavior impact.

### Boundary 5: Validation vs Retrospective Learning

Validation checks the artifact now. Retrospective learning checks later whether the artifact actually helped.

## 3. Bottom-Up Validation

### Atoms

- source authority,
- artifact target,
- write-set,
- contract,
- risk scan,
- plan,
- critic pressure,
- implementation,
- validation result,
- trace,
- retrospective trigger.

### Validation

The clusters align with the atoms. No atom is orphaned. The only potential hidden coupling is between risk class and validation availability: weak validation can raise risk. This should be explicitly stated in mode-selection rules.

## 4. Question Tree

### Q1. What is the protocol's purpose and boundary?

Verification criteria:

- States that materialization turns accepted decisions into concrete artifacts.
- States that it does not decide whether a finding is true.
- States that it does not replace MVL/MVL+, CONCLUDE, branch experiments, or artifact-specific implementation docs.

### Q2. When should the protocol be used?

Verification criteria:

- Use after a finding proposes an artifact.
- Use when user explicitly asks to materialize.
- Use when protocol/experiment needs a concrete artifact.
- Do not use for ordinary reasoning-only inquiries.

### Q3. What input contract is required?

Verification criteria:

- Requires source authority.
- Requires artifact type.
- Requires target path/write-set.
- Requires artifact contract/success criteria.
- Requires validation plan or manual-review reason.
- Requires risk class and selected mode.

### Q4. How should risk class be determined?

Verification criteria:

- Considers behavior impact.
- Considers existing file vs new file.
- Considers loaded protocol/skill/tooling impact.
- Considers write-set breadth.
- Considers reversibility.
- Considers validation availability.
- Includes examples but does not rely only on file type.

### Q5. What are the lifecycle modes?

Verification criteria:

- Compact mode is one-file or inline lifecycle for low-risk artifacts.
- Standard mode creates separate desc, plan, critic, repaired plan if needed, validation, and trace.
- Full mode adds stricter risk gates and retrospective review gate.
- Every mode preserves source, scope, contract, validation, and trace.

### Q6. When must the run escalate?

Verification criteria:

- Compact escalates if risk scan finds Medium/High risk.
- Compact escalates if editing loaded skills/protocols/tooling.
- Compact escalates if validation is unclear for a non-trivial artifact.
- Any mode pauses if implementation needs an undeclared write-set.
- Any mode pauses if architecture changes.

### Q7. What should validation record?

Verification criteria:

- Commands run.
- Manual review reason if no automated check exists.
- Failures and fixes.
- Remaining gaps.
- Outcome: PASS, PARTIAL, or FAIL.
- Whether the artifact can count as capability evidence.

### Q8. What should trace include?

Verification criteria:

- Source authority.
- Mode selected and why.
- Paths to desc/plan/critic/repaired plan when present.
- Files changed.
- Validation results.
- Deviations from plan.
- Outcome.
- Follow-up review gate.

## 5. Interface Map

| Source | Target | What Flows | Direction |
|---|---|---|---|
| MVL/MVL+ finding or user request | Input contract | source authority, proposed artifact, rationale | one-way |
| Input contract | Mode selection | artifact type, write-set, contract, validation, risk facts | one-way |
| Mode selection | Lifecycle mode | compact/standard/full decision | one-way |
| Lifecycle mode | Implementation | approved plan and write-set | one-way |
| Implementation | Validation | changed files, artifact behavior, deviations | one-way |
| Validation | Trace | results, failures, gaps, outcome | one-way |
| Trace | Retrospective learning | evidence for later review and protocol improvement | one-way |
| Escalation rules | Mode selection / implementation | force stronger mode or pause | bidirectional control signal |

## 6. Dependency Order

1. Define purpose and non-goals.
2. Define input contract.
3. Define risk-class criteria.
4. Define mode-selection table.
5. Define compact mode.
6. Define standard mode.
7. Define full mode.
8. Define escalation and pause rules.
9. Define implementation rules.
10. Define validation outcomes.
11. Define trace schema.
12. Define retrospective hook.

## 7. Self-Evaluation

| Dimension | Result | Notes |
|---|---|---|
| Independence | Pass | Boundary, input contract, risk selection, modes, validation, and trace can be reasoned about separately. |
| Completeness | Pass | Covers include/exclude, minimal path, escalation, validation, and trace. |
| Reassembly | Pass | Pieces reconstruct the intended protocol. |
| Tractability | Pass | Each section is small enough to draft in a single protocol file. |
| Interface clarity | Pass | Source -> mode -> implementation -> validation -> trace flow is explicit. |
| Balance | Pass | No single section absorbs the whole protocol; lifecycle modes are the largest but coherent. |
| Confidence | Pass | Boundaries match Sensemaking and prior finding. |

## Decomposition Verdict

Proceed to Innovation. The most important design object is the mode-selection table plus compact-mode template. If those are wrong, the protocol will either become bureaucracy or a loophole.
