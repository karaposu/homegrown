# Innovation: Loop Diagnose - Route Memory Preflight Boundary

## User Input

Use `homegrown/protocols/loop_diagnose.md` to diagnose why the prior inquiry:

- `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary`

was corrected by:

- `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation`

The human correction said the answer still felt messy and asked to reevaluate why the "cheap Route-Memory Preflight plus full Route Memory Review" model did not feel clean. The diagnostic goal is to identify what the prior loop missed about naming, operation boundaries, and status classification versus full review.

## Seed

The prior loop fixed one bad boundary but created a new one. It turned a cheap route-memory status classification into a named always-run "Route-Memory Preflight."

Valuation: this matters because Homegrown can become harder to run if every status check becomes a named routine. Explicitness should not mean operation proliferation.

## Mechanism 1 - Lens Shifting

### Generic Variation

Evaluate proposed protocol steps by operation weight, not by whether they improve safety.

Output: a mandatory check can be a field; it does not have to become a routine.

### Focused Variation

Evaluate Route-Memory Preflight as a state-classification label.

Output: use `route_memory_status` during Freshness Preflight; reserve Route Memory Review for reconciliation.

### Contrarian Variation

Evaluate every named preflight as dangerous until proven necessary.

Output: too strong as a general rule, but useful as a critique stance for always-run steps.

## Mechanism 2 - Combination

### Generic Variation

Combine "explicitness" with "operation hygiene."

Output:

```text
status fields make checks explicit
artifacts make operations explicit
```

### Focused Variation

Combine Navigation Freshness Preflight with route-memory status.

Output: Navigation's existing preflight gains `route_memory_status` rather than creating Route-Memory Preflight as a sibling.

### Contrarian Variation

Combine all context checks into a single giant preflight.

Output: this avoids many routines but risks making Freshness Preflight too broad. The better lesson is not "everything goes into one blob"; it is "cheap status checks can live in intake when they only classify safety state."

## Mechanism 3 - Inversion

### Generic Variation

Invert "if it matters, name a routine."

Output: if it matters but is cheap state, name the field and keep it inside an existing routine.

### Focused Variation

Invert "Route-Memory Preflight triggers Route Memory Review."

Output: `route_memory_status = review_needed` triggers Route Memory Review. The status value, not the preflight name, is the interface.

### Contrarian Variation

Invert "preflight is cheap, so it is harmless."

Output: cheap steps are not harmless when they create new vocabulary, docs, telemetry, and invocation expectations.

## Mechanism 4 - Constraint Manipulation

### Generic Variation

Add constraint: no new always-run named step unless it owns a distinct operation and output.

Output: classification-only work must default to an existing intake/check surface.

### Focused Variation

Add constraint: any use of "preflight," "review," "audit," or "check" must state whether it is a field, a section, a routine, or an artifact-producing operation.

Output: prevents operation-boundary ambiguity.

### Contrarian Variation

Remove constraint: allow every safety concern to become a routine.

Output: produces traceability but creates process sprawl. Killed as a default.

## Mechanism 5 - Absence Recognition

### Generic Variation

Missing thing: an Operation Boundary Naming Gate.

Output: before stabilizing a named step, ask whether the name implies a separate operation.

### Focused Variation

Missing thing: a Status Classification vs Review Gate.

Output: ask whether the proposed thing merely classifies state or performs reconciliation/disposition.

### Contrarian Variation

Missing thing: a "messiness escalation" rule.

Output: if the user says a model feels messy, force Sensemaking to identify whether the mess is naming, boundary, trigger, ownership, or output contract.

## Mechanism 6 - Domain Transfer

### Generic Variation

Transfer from software types: not every property gets its own object.

Output: `route_memory_status` is a property of Navigation context intake, not necessarily a new object/routine.

### Focused Variation

Transfer from HTTP middleware: a request can pass through middleware that sets headers; not every header-setting action is a separate service.

Output: Freshness Preflight can set route-memory status; Route Memory Review is a service only when deeper resolution is needed.

### Contrarian Variation

Transfer from compliance auditing: every check gets a formal audit trail.

Output: too heavy for status-only checks, but appropriate for full Route Memory Review because it changes current route-memory authority.

## Mechanism 7 - Extrapolation

### Generic Variation

If Homegrown keeps naming every safety check as a protocol, future users will spend more time routing between routines than doing the work.

Output: add anti-proliferation critique for always-run named steps.

### Focused Variation

If Navigation later has freshness, route memory, source authority, thin context, and outcome review all as separate preflights, the command becomes hard to execute.

Output: consolidate cheap context-state classification into a compact intake record.

### Contrarian Variation

If status checks are too hidden, users may not trust skipped reviews.

Output: the status must be visible in `navigation.md` or a context-preparation record. Do not hide it merely because it is not a routine.

## Candidate Set And Testing

### Candidate A - Operation Boundary Naming Gate

Rule:

Before stabilizing a new named step such as "preflight," "review," "audit," or "check," answer:

1. Is this a field/status, a section, a routine, or an artifact-producing operation?
2. Does the name imply an invokable routine?
3. Does the thing own a distinct trigger, procedure, validation, and output?
4. If not, should it live inside an existing intake/preflight instead?

Tests:

- Novelty: MEDIUM. It makes an implicit naming risk explicit.
- Scrutiny survival: HIGH. It directly addresses the prior failure mechanism.
- Fertility: HIGH. It can apply to future protocol naming decisions.
- Actionability: HIGH. It is checklist-sized.
- Mechanism independence: HIGH. Produced by lens shifting, absence recognition, constraint manipulation, and extrapolation.

Verdict: SURVIVES.

### Candidate B - Status Classification vs Review Gate

Rule:

When a proposal handles old memory or context safety, distinguish:

```text
classification = records a status
review/reconciliation = changes current interpretation or disposition
```

If it only classifies, keep it in existing intake and record a compact status. If it reviews/reconciles, define trigger and artifact output.

Tests:

- Novelty: MEDIUM.
- Scrutiny survival: HIGH. It captures the exact corrected boundary.
- Fertility: HIGH. It applies to route memory, freshness, outcome review, and similar context-state handling.
- Actionability: HIGH.
- Mechanism independence: HIGH. Produced by combination, inversion, absence recognition, and domain transfer.

Verdict: SURVIVES.

### Candidate C - Operation-Proliferation Critique Guard

Rule:

For any candidate that adds a new always-run named step, Critique must include an operation-proliferation dimension:

- Does this need to be a separate routine?
- Can it be a status field inside an existing routine?
- Does naming it separately create a new maintenance surface?
- Does the user experience become less natural?

Tests:

- Novelty: MEDIUM.
- Scrutiny survival: HIGH. The prior Critique did not weight this strongly enough; corrected Critique did.
- Fertility: MEDIUM-HIGH. It prevents future protocol sprawl.
- Actionability: MEDIUM-HIGH. It likely belongs in critique guidance or an MVL+ peripheral rule.
- Mechanism independence: HIGH. Produced by extrapolation, lens shifting, and constraint manipulation.

Verdict: SURVIVES.

### Candidate D - User-Felt-Messiness Anchor

Rule:

When the user says an answer "feels messy," Sensemaking must first classify the mess:

- naming smell;
- operation boundary smell;
- trigger smell;
- ownership smell;
- output/artifact smell;
- user-workflow smell.

Tests:

- Novelty: MEDIUM.
- Scrutiny survival: MEDIUM-HIGH. It addresses the specific human-perspective miss, but can become too subjective if used without artifact evidence.
- Fertility: HIGH. It turns vague user discomfort into diagnosable structure.
- Actionability: HIGH.
- Mechanism independence: MEDIUM. Produced by absence recognition and human-perspective extrapolation.

Verdict: SURVIVES WITH EVIDENCE CONSTRAINT.

Constraint:

Do not accept "feels messy" as proof by itself. Use it as a signal to inspect boundaries and evidence.

### Candidate E - Preflight Word Ban

Rule:

Do not use the word "preflight" except for the existing Navigation Freshness Preflight.

Tests:

- Novelty: LOW.
- Scrutiny survival: LOW-MEDIUM. It prevents the observed failure, but overfits to one term and may block legitimate future preflights.
- Fertility: LOW.
- Actionability: HIGH but brittle.
- Mechanism independence: LOW.

Verdict: KILL.

Seed extracted:

Need a naming gate, not a vocabulary ban.

### Candidate F - Make Route-Memory Preflight A Real Separate Routine

Rule:

Accept the prior model and formalize Route-Memory Preflight as its own routine.

Tests:

- Novelty: LOW.
- Scrutiny survival: LOW. It doubles down on the user's side-ritual concern.
- Fertility: MEDIUM only if route-memory handling later becomes very complex.
- Actionability: MEDIUM.
- Mechanism independence: LOW.

Verdict: KILL FOR NOW.

Seed extracted:

Could be revived only if route-memory classification grows too complex for Freshness Preflight, but current evidence points the other way.

### Candidate G - Broad MVL+ Anti-Proliferation Rewrite

Rule:

Rewrite MVL+ to police all operation proliferation generally.

Tests:

- Novelty: LOW-MEDIUM.
- Scrutiny survival: LOW for this evidence base. One correction chain does not justify broad core rewrite.
- Fertility: MEDIUM.
- Actionability: LOW without source placement.
- Mechanism independence: LOW-MEDIUM.

Verdict: KILL / DEFER.

Seed extracted:

Collect more LOOP_DIAGNOSE cases before broad fundamentals changes.

## Assembly Check

The strongest prevention assembly is:

```text
Operation Boundary Naming Gate
  + Status Classification vs Review Gate
  + Operation-Proliferation Critique Guard
  + User-Felt-Messiness Anchor
```

Emergent value:

- Candidate A prevents names from creating accidental routines.
- Candidate B protects the specific classification/review boundary.
- Candidate C makes Critique attack the failure mode that passed before.
- Candidate D ensures user discomfort opens boundary analysis instead of being treated as a request for better wording.

This assembly is scoped. It does not require a broad MVL+ rewrite and does not ban the word "preflight."

## Proposed Prevention Package

### P1 - Operation Boundary Naming Gate

Use when a loop proposes or stabilizes a new named step.

Gate question:

```text
Is this a status/field inside an existing routine, or a separate operation with its own trigger, procedure, validation, and output?
```

Pass condition:

- If status/field: integrate into existing routine and avoid standalone routine language.
- If operation: define trigger, owner, validation, and output.

### P2 - Classification vs Review Gate

Use when a proposal handles historical memory, context safety, or prior-state evidence.

Gate question:

```text
Does this only classify state, or does it reconcile/dispose/interpret old evidence?
```

Pass condition:

- Classification: record compact status in intake/telemetry.
- Review/reconciliation: define operation and artifact output.

### P3 - Operation-Proliferation Critique Guard

Use in Critique when a candidate adds a named always-run step.

Required adversarial test:

```text
Could this be a field, status, or section inside an existing operation instead of a new routine?
```

Pass condition:

- Candidate survives only if separate routine has clearer ownership or lower risk than absorption.

### P4 - User-Felt-Messiness Anchor

Use in Sensemaking when the user says "messy," "not clean," "smells," or similar.

Gate question:

```text
What kind of mess is this: name, boundary, trigger, ownership, output, user workflow, or evidence?
```

Pass condition:

- Sensemaking must state the likely mess type and test at least one counter-interpretation.

## Non-Survivors / Guardrails

- Do not ban "preflight" as a word.
- Do not formalize Route-Memory Preflight as a separate routine from this evidence.
- Do not rewrite core MVL+ from one correction chain.
- Do not weaken full Route Memory Review or its mandatory artifact rule.
- Do not treat "feels messy" as proof without artifact comparison.

## Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: YES. Six mechanisms converge on small gates around naming, classification/review, and operation proliferation.
- Survivors tested: 7 / 7.
- Failure modes observed: none severe. Survival bias checked by testing the attractive but overfit "preflight word ban" and the broad rewrite.
- Overall: PROCEED.
