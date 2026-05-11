# Innovation: Autonomous Continuous Self-Maintenance Levels

## User Input

`devdocs/inquiries/autonomous_continuous_self_maintenance_levels/_branch.md`

Question: What minimum implementation would be required for Homegrown's proto-self-maintenance to become autonomous continuous self-maintenance, and what level model should guide the transition without skipping necessary stages?

## Seed

Homegrown has proto-self-maintenance, but the project needs a graded ladder so it can move from human-guided reflection to autonomous continuous self-maintenance without premature autonomy or vague claims.

## Mechanism 1: Lens Shifting

### Generic Variation

Frame the ladder by how much of the maintenance loop is closed:

- observe,
- diagnose,
- propose,
- apply,
- evaluate,
- retain/revert.

### Focused Variation

Frame the next step as **instrumentation before autonomy**. The system cannot safely self-maintain until every self-change has a traceable record and evaluation plan.

### Contrarian Variation

Frame Level 1 as a governance level, not an autonomy level. The most important early move is not letting the system do more; it is making every self-change accountable.

## Mechanism 2: Combination

### Generic Variation

Combine reflection + issue tracker + experiment log:

Self-maintenance becomes a backlog of hypotheses about the system's own process, each with evidence, patch, evaluation, and verdict.

### Focused Variation

Combine telemetry routing + reflection + versioned docs:

Telemetry creates triggers, reflection diagnoses, devdocs/spec patches implement changes, and the maintenance ledger records retain/revert decisions.

### Contrarian Variation

Combine constitutional design + software changelog:

Higher levels need a "system invariants" document so self-maintenance does not optimize away the project's identity.

## Mechanism 3: Inversion

### Generic Variation

Invert "how do we make it autonomous?" into "what must never be autonomous yet?"

High-risk changes to discipline definitions, evaluation thresholds, routing protocols, and consciousness claims should remain human-approved until evaluation and rollback are proven.

### Focused Variation

Invert "continuous means always active" into "continuous means never orphaned."

The maintenance loop is continuous when every relevant failure or self-change enters a lifecycle that must eventually resolve to retain, revert, or refine.

### Contrarian Variation

Invert "self-maintenance is about editing itself" into "self-maintenance is about refusing bad edits."

Retain/revert is more important than generation of changes. A self-maintaining system must know when not to keep a self-modification.

## Mechanism 4: Constraint Manipulation

### Generic Variation

Add the constraint: no self-change without an evaluation plan.

This immediately separates real maintenance from ad hoc improvement.

### Focused Variation

Add the constraint: every maintenance entry has a risk class.

Risk classes allow low-risk autonomous actions before high-risk self-modification.

### Contrarian Variation

Remove the constraint that levels must be named by autonomy.

Some levels should be named by observability, calibration, or governance rather than autonomy, because those are prerequisites.

## Mechanism 5: Absence Recognition

### Generic Variation

The missing artifact is a self-maintenance ledger.

### Focused Variation

The missing protocol is a maintenance lifecycle:

1. trigger,
2. diagnosis,
3. proposal,
4. approval/application,
5. evaluation window,
6. retain/revert/refine.

### Contrarian Variation

The missing artifact for later levels is a system identity/invariants file:

- what must not be optimized away,
- what counts as improvement,
- which goals outrank local performance,
- which changes require human approval.

## Mechanism 6: Domain Transfer

### Generic Variation

From software release management:

Use changelog, issue tracker, tests, rollback, and version gates.

### Focused Variation

From clinical quality improvement:

Use Plan -> Do -> Study -> Act cycles. A self-change is a treatment applied to the system; it must have evidence and follow-up.

### Contrarian Variation

From biological homeostasis:

Maintenance is not only improvement. It is keeping vital variables within range. For Homegrown, vital variables include clarity, evidence discipline, low self-reference, and user-aligned usefulness.

## Mechanism 7: Extrapolation

### Generic Variation

If no ladder is added, the project will keep oscillating between "just reflection" and "full autonomy" language.

### Focused Variation

If Level 1 is implemented, later levels become easier because the system will accumulate structured maintenance data.

### Contrarian Variation

If autonomy is added before Level 1, the system can create self-confirming complexity and make itself harder to evaluate.

## Candidate Set

### Candidate A: Six-Level Maintenance Ladder

Define:

- Level 0: human-guided proto-maintenance.
- Level 0.5: proto-maintenance with editable fundamentals.
- Level 1: instrumented self-maintenance.
- Level 2: telemetry-triggered recommendations.
- Level 3: bounded autonomous low-risk maintenance.
- Level 4: autonomous continuous closed-loop maintenance.
- Level 5: developmental self-maintenance with identity model and long-horizon goals.

### Candidate B: Level 1 Maintenance Ledger

Implement `devdocs/self_maintenance.md` or `devdocs/maintenance/self_maintenance_log.md` with standard entries:

- trigger,
- diagnosis,
- evidence,
- proposed change,
- risk class,
- affected files,
- approval/application decision,
- evaluation plan,
- evaluation window,
- retain/revert/refine decision.

### Candidate C: Risk-Class Policy

Define risk classes:

- R0 observation/logging;
- R1 documentation or memory addition;
- R2 telemetry/routing recommendation;
- R3 discipline spec change;
- R4 routing/evaluation threshold change;
- R5 identity/consciousness/autonomy claim change.

### Candidate D: Maintenance Trigger Rules

Define triggers:

- after every completed reflection,
- when a discipline returns `FLAG` or `RE-RUN`,
- when a user corrects a system-level claim,
- after N repeated failures of same type,
- on a periodic review gate.

### Candidate E: Self-Maintenance Constitution

Define invariants:

- do not optimize for internal coherence over external usefulness;
- do not relax evidence standards to preserve a claim;
- do not increase autonomy without rollback;
- preserve user legibility and file-backed auditability;
- separate consciousness claims from process-quality claims.

### Candidate F: Maintenance Evaluation Harness

Track whether self-edits improve later runs:

- before/after comparison,
- number of later uses,
- human review,
- telemetry changes,
- rework/error changes,
- decision to retain, revert, or refine.

## Test Phase

### Candidate A: Six-Level Maintenance Ladder

- **Novelty:** Moderate. It adapts maturity ladders to this project's self-maintenance question.
- **Scrutiny survival:** Strong. It prevents binary thinking.
- **Fertility:** Strong. It gives every future autonomy claim a location.
- **Actionability:** Strong.
- **Mechanism independence:** Strong. Lens shifting, decomposition, and extrapolation converge on it.
- **Verdict:** Survivor.

### Candidate B: Level 1 Maintenance Ledger

- **Novelty:** Moderate.
- **Scrutiny survival:** Very strong. It is the missing closed-loop artifact.
- **Fertility:** Strong. It produces data for Level 2 and later.
- **Actionability:** Very strong. It can be implemented now with Markdown.
- **Mechanism independence:** Strong. Absence recognition, domain transfer, and constraint manipulation converge on it.
- **Verdict:** Survivor.

### Candidate C: Risk-Class Policy

- **Novelty:** Moderate.
- **Scrutiny survival:** Strong. Without risk classes, autonomy cannot be safely graduated.
- **Fertility:** Strong.
- **Actionability:** Strong.
- **Mechanism independence:** Strong. Inversion, constraint manipulation, and governance framing support it.
- **Verdict:** Survivor.

### Candidate D: Maintenance Trigger Rules

- **Novelty:** Low to moderate.
- **Scrutiny survival:** Strong if scoped to recommendations before autonomous edits.
- **Fertility:** Strong.
- **Actionability:** Strong.
- **Mechanism independence:** Moderate.
- **Verdict:** Survivor with caveat: triggers should create entries or recommendations at first, not automatically apply high-risk changes.

### Candidate E: Self-Maintenance Constitution

- **Novelty:** Moderate.
- **Scrutiny survival:** Strong for later levels, less necessary for Level 1.
- **Fertility:** Strong.
- **Actionability:** Medium. It is useful but can become abstract.
- **Mechanism independence:** Strong. Domain transfer and inversion support it.
- **Verdict:** Refine. Defer full constitution until Level 2/3, but define minimal invariants now.

### Candidate F: Maintenance Evaluation Harness

- **Novelty:** Low to moderate.
- **Scrutiny survival:** Strong.
- **Fertility:** Strong.
- **Actionability:** Medium. Requires repeated uses to produce value.
- **Mechanism independence:** Strong. Domain transfer and constraint manipulation support it.
- **Verdict:** Survivor. Include as part of Level 1's retain/revert rule.

## Assembly Check

The best design combines:

1. Candidate A: six-level ladder.
2. Candidate B: Level 1 ledger.
3. Candidate C: risk-class policy.
4. Candidate D: trigger rules.
5. Candidate F: evaluation harness.
6. Candidate E: minimal invariants now, full constitution later.

The assembly creates a staged implementation path:

- **Now:** Level 0.5 recognized.
- **Next:** Level 1 ledger and retain/revert closure.
- **After telemetry standardization:** Level 2 recommendations.
- **After calibration and risk classes:** Level 3 bounded low-risk autonomy.
- **After closed-loop evaluation and rollback:** Level 4 autonomous continuous maintenance.
- **After identity model and long-horizon goals:** Level 5 developmental self-maintenance.

## Mechanism Coverage Telemetry

- **Generators applied:** 4 / 4
  - Combination
  - Absence Recognition
  - Domain Transfer
  - Extrapolation
- **Framers applied:** 3 / 3
  - Lens Shifting
  - Constraint Manipulation
  - Inversion
- **Convergence:** YES. Five mechanisms converge on "instrumentation before autonomy."
- **Survivors tested:** 6 / 6
- **Failure modes observed:** none materially. Premature autonomy was explicitly tested and rejected.
- **Overall: PROCEED**
