# Sensemaking: Artifact Materialization Protocol Shape

## User Input

The user invoked MVL+ and asked how `homegrown/protocols/artifact_materialization.md` should be designed: what it should include, what it should not include, and whether minimal artifacts can use a smaller lifecycle so the protocol does not waste compute or time.

## SV1 - Baseline Understanding

Initial interpretation: the protocol should operationalize the materialization lifecycle from `enes/materialization_lifecycle.md`, but it should support a lighter path for low-risk artifacts. The key problem is avoiding two bad extremes: full ceremony for every tiny artifact, or unsafe direct file edits with no contract.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- The protocol must live under `homegrown/protocols/`.
- It must preserve the boundary between MVL/MVL+ findings and implementation artifacts.
- It should reuse the proven task-desc -> task-plan -> dynamic critic -> repair -> implement flow.
- It must not make tiny artifacts so expensive that the user bypasses the protocol.
- It must not let "minimal" mean unscoped or unvalidated.
- It must accommodate artifacts beyond ARC.
- It must be usable before all automation exists.

### Key Insights

- The lifecycle can be variable-depth without being variable-principle.
- Compact mode should compress separate documents into one trace, not delete source, scope, contract, risk scan, validation, or outcome.
- Dynamic critic is a function, not necessarily a file. For low-risk artifacts it can be a lightweight inline risk scan.
- Risk class should be determined by blast radius, write-set, and behavior impact, not just artifact type.
- The protocol should decide "which materialization path is allowed," not "whether the original finding is correct."

### Structural Points

- MVL/MVL+ produces a finding.
- Artifact Materialization receives a source finding/request and produces changed files plus a trace.
- The lifecycle has reusable sub-functions: task description, implementation plan, dynamic critic, plan repair, implementation, validation, trace, retrospective hook.
- Minimal artifacts still need a source, write-set, contract, validation note, and trace.
- Medium/high artifacts need separate files and stronger review.

### Foundational Principles

- Materialization is an implementation lifecycle, not a cognitive discipline.
- Artifacts are not capability evidence until validated.
- Write-scope control is non-negotiable.
- Plan criticism belongs before implementation, not after.
- Compression should reduce overhead only where risk is low.

### Meaning-Nodes

- Materialization.
- Lifecycle.
- Compact mode.
- Risk tier.
- Source authority.
- Write-set.
- Dynamic critic.
- Trace.
- Escalation.

## SV2 - Anchor-Informed Understanding

The question is not "full lifecycle or small lifecycle." The real structure is "same invariants, different depth." The protocol should have one materialization contract and multiple execution modes. Low-risk work can use compact mode; medium-risk work uses standard mode; high-risk work uses full mode.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

The protocol must be deterministic enough that another agent can follow it. That means it needs concrete fields, risk classification rules, escalation triggers, output file expectations, and validation outcomes.

New anchor: the protocol needs a mode-selection algorithm, not only prose advice.

### Human / User Perspective

The user is trying to turn a breakthrough into forward motion. If the protocol forces a 7-file lifecycle for every minor doc or trace stub, it will feel like bureaucracy. If it is too loose, it repeats the original problem.

New anchor: compact mode is not optional polish; it is required for adoption.

### Strategic / Long-Term Perspective

The protocol is part of the self-improvement substrate. Later loop diagnosis, retrospective review, and branch experiments need traces that explain why a file changed and what happened.

New anchor: every mode must leave enough evidence for future learning.

### Risk / Failure Perspective

The most dangerous failure is "small artifact" becoming a loophole. A change that looks small can affect a core protocol or loaded skill. The protocol must escalate based on behavior impact.

New anchor: low-risk is not "small edit"; low-risk is "low blast radius and easy validation."

### Resource / Feasibility Perspective

The protocol can be manual v1. It does not need scripts, automation, or validators at the start. It only needs a clear lifecycle and trace shape. Automation can emerge from repeated traces.

New anchor: v1 should be a procedural Markdown protocol, not a tool implementation.

### Definitional / Consistency Perspective

Calling this "artifact materialization" is consistent with the prior finding because it does not replace CONCLUDE. It consumes concluded decisions and produces artifacts.

New anchor: the protocol should explicitly state its non-goals to prevent boundary drift.

## SV3 - Multi-Perspective Understanding

The model shifted from "make a protocol from the lifecycle" to "make a mode-selecting protocol." The important design object is not the full lifecycle alone; it is the decision table that chooses compact, standard, or full materialization while preserving the same invariants.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Does compact mode weaken the lifecycle?

**Strongest counter-interpretation:** Yes. If compact mode skips task-desc, task-plan, and dynamic critic files, it breaks the proven lifecycle and reintroduces ad hoc implementation.

**Why the counter-interpretation fails (structural grounds):** The proven lifecycle is valuable because of functions: clarify intent, plan implementation, criticize plan, repair risk, implement, validate, trace. Those functions can be represented inline for low-risk work. The risk appears only if the functions disappear.

**Confidence:** HIGH.

**Resolution:** Compact mode is allowed only when it preserves all lifecycle functions in smaller form.

**What is now fixed?** Compact mode reduces document count and depth, not source authority, write-set, risk scan, validation, or trace.

**What is no longer allowed?** "Minimal artifact" cannot mean "just edit the file."

**What now depends on this choice?** The protocol must define compact-mode required fields.

**What changed in the conceptual model?** Lifecycle steps become functional gates rather than always separate files.

### Ambiguity: Should dynamic critic always be a separate file?

**Strongest counter-interpretation:** Yes. If dynamic critic is not a separate file, the protocol loses the proven strength of custom criticism.

**Why the counter-interpretation fails (structural grounds):** The need scales with risk. For a new standalone low-risk doc, a separate critic prompt can cost more than the artifact and add little. For behavior-changing code, protocol edits, or runner changes, separate dynamic critic files are necessary because the failure space is wider.

**Confidence:** HIGH.

**Resolution:** Dynamic critic is mandatory as a function. It is inline for compact mode and a separate prompt/output for standard/full modes.

**What is now fixed?** The protocol must distinguish risk scan from full dynamic critic.

**What is no longer allowed?** Requiring full dynamic critic files for every trivial artifact.

**What now depends on this choice?** Risk-tier rules must say when inline critic is no longer enough.

**What changed in the conceptual model?** Critique is treated as scalable pressure, not fixed paperwork.

### Ambiguity: What makes an artifact low-risk?

**Strongest counter-interpretation:** Artifact type alone determines risk. Markdown docs are low-risk; code is high-risk.

**Why the counter-interpretation fails (structural grounds):** A Markdown protocol can change runner behavior if it is loaded by a skill, while a code file can be a dead stub with no runtime effect. Risk comes from blast radius, write-set, behavior impact, and validation availability.

**Confidence:** HIGH.

**Resolution:** Risk class is determined by behavior impact, write-set scope, reversibility, and validation path.

**What is now fixed?** The protocol needs risk criteria, not only examples.

**What is no longer allowed?** Treating all Markdown artifacts as low-risk.

**What now depends on this choice?** Escalation triggers and mode selection.

**What changed in the conceptual model?** The unit of risk is not file extension; it is system effect.

### Ambiguity: Should the protocol include implementation details for every artifact type?

**Strongest counter-interpretation:** Yes. A complete materialization protocol should tell the agent how to create code, tests, configs, protocols, harness adapters, and trace schemas.

**Why the counter-interpretation fails (structural grounds):** Detailed artifact-specific instructions would turn the protocol into a fragile build manual. The protocol's stable role is lifecycle governance; artifact-specific details belong in the task plan, skill docs, codebase conventions, or future subtype templates.

**Confidence:** HIGH.

**Resolution:** The protocol should define lifecycle, contracts, modes, gates, and traces. It should not embed detailed recipes for every artifact type.

**What is now fixed?** Artifact-specific implementation belongs downstream in the plan.

**What is no longer allowed?** `artifact_materialization.md` becoming a giant universal implementation manual.

**What now depends on this choice?** Protocol length, maintainability, and adoption.

**What changed in the conceptual model?** The protocol is a controller, not a cookbook.

## SV4 - Clarified Understanding

The protocol should include purpose, input contract, mode selection, compact/standard/full lifecycles, escalation triggers, implementation rules, validation outcomes, trace schema, retrospective hook, and non-goals. It should not include artifact-specific build recipes, ARC-specific logic, truth-validation of findings, branch experiment mechanics, or permission for skills to bypass write-set controls.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- Use one protocol with three lifecycle modes.
- Preserve materialization invariants in every mode.
- Let compact mode use one trace file with inline brief/plan/risk scan.
- Require separate task-desc/plan/dynamic critic files for medium/high work.
- Escalate from compact to standard/full when risk scan finds behavior impact, unclear validation, existing protocol/skill edits, broad write-set, or Medium/High risk.

### Eliminated

- One-size-fits-all full lifecycle.
- Direct file edits with no trace.
- Artifact type as the only risk criterion.
- Generic critic for behavior-changing work.
- ARC-specific protocol core.
- Full branch experiment as mandatory for every materialization.

### Viable Paths

1. Compact mode for low-risk artifacts.
2. Standard mode for medium-risk artifacts.
3. Full mode for high-risk artifacts.
4. Later subtype templates for common artifact classes after real traces accumulate.

## SV5 - Constrained Understanding

The protocol should be a tiered lifecycle controller. Its main job is to select the right amount of ceremony for the artifact's risk. The central rule is: every materialization run must leave a source, scope, contract, validation statement, and outcome trace. Everything else scales with risk.

## SV6 - Stabilized Model

`homegrown/protocols/artifact_materialization.md` should be a small operational protocol with a tiered lifecycle:

- **Compact mode:** one-file lifecycle for low-risk, standalone, easily reviewed artifacts. It includes inline brief, tiny plan, inline risk scan, implementation notes, validation/manual review note, and trace.
- **Standard mode:** separate task description, implementation plan, dynamic critic, repaired plan, implementation, validation, and trace for medium-risk artifacts.
- **Full mode:** standard mode plus stricter gates, no unresolved High risks, explicit Medium-risk acceptance, stronger validation, and retrospective review gate for high-risk artifacts.

The protocol should be strict about invariants but flexible about document weight. This differs from SV1 by making "minimal artifacts" a first-class mode rather than an exception or shortcut.

## Saturation Indicators

- Perspective saturation: high. Technical, human, strategic, risk, feasibility, and definitional perspectives converged.
- Ambiguity resolution ratio: 4 major ambiguities resolved / 4 identified.
- SV delta: significant. The model shifted from "adapt lifecycle" to "mode-selecting lifecycle controller."
- Anchor diversity: high.

**Overall: PROCEED**
