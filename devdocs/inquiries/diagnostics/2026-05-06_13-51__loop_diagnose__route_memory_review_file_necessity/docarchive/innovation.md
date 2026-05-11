# Innovation: Loop Diagnose - Route Memory Review File Necessity

## User Input

Use `homegrown/protocols/loop_diagnose.md` to diagnose why the prior inquiry:

- `devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity`

was corrected by:

- `devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity`

The human correction rejected "create `route_memory_review.md` only when durable handoff matters" because Homegrown enforces explicitness and creates Markdown artifacts for meaningful operations. The diagnostic goal is to identify what the prior loop missed about explicit-artifact culture and operation output versus storage convenience, including affected stages and prevention candidates.

## Seed

The prior loop found a real artifact-bloat concern but produced the wrong prevention model. It made canonical output optional instead of making operation execution selective.

Valuation: this matters because the same mistake can recur anywhere a loop treats a future-affecting operation artifact as a convenience note.

## Mechanism 1 - Lens Shifting

### Generic Variation

Evaluate artifacts not by "will someone need this later?" but by "did a meaningful operation happen?"

Result: file creation becomes tied to operation execution.

### Focused Variation

For Route Memory Review, use this lens:

```text
If old Navigation memory is reviewed for current Navigation use,
the review result is the operation output.
```

Result: `route_memory_review.md` is mandatory when full review runs.

### Contrarian Variation

Evaluate from a minimalism lens: no file should exist unless the review changes a decision.

Result: this is too narrow. A review can preserve, retire, or block memory; even "no carry-forward" is a decision if old maps were considered.

## Mechanism 2 - Combination

### Generic Variation

Combine explicit-artifact culture with anti-bloat discipline:

```text
explicit operations leave artifacts
anti-bloat controls operation triggers
```

Result: trigger-limited, output-mandatory operation.

### Focused Variation

Combine Route Memory Review categories with a canonical output file:

- carry forward
- retire
- keep blocked
- needs check
- ignore

Result: the file becomes a structured instruction sheet for Navigation.

### Contrarian Variation

Combine inline summary with saved artifact: Navigation may include a short pointer summary, but the authoritative review is the saved file.

Result: preserves readability without hiding state.

## Mechanism 3 - Inversion

### Generic Variation

Prior assumption: avoid artifact bloat by making output optional.

Inversion: avoid artifact bloat by making the operation optional.

Result: bloat control moves to trigger policy.

### Focused Variation

Prior assumption: durable handoff decides whether to save.

Inversion: operation execution decides whether to save; durable handoff only affects how much summary/pointer is needed elsewhere.

Result: same-session load-bearing operations still produce files.

### Contrarian Variation

Invert explicitness: what if invisible state is acceptable?

Result: for non-load-bearing chat reasoning, maybe. For Route Memory Review, no, because Navigation may depend on the classification.

## Mechanism 4 - Constraint Manipulation

### Generic Variation

Add constraint: "Any operation that changes future interpretation must name its canonical output."

Result: loops must classify output before deciding save policy.

### Focused Variation

Add constraint: "If Route Memory Review runs, `route_memory_review.md` must exist in the run folder before Navigation writes the new map."

Result: timing becomes enforceable.

### Contrarian Variation

Remove constraint: "No extra files unless durable handoff."

Result: the model can fit Homegrown explicitness, but risks artifact flood unless paired with trigger rules.

## Mechanism 5 - Absence Recognition

### Generic Variation

Missing thing: an explicit "operation output vs storage convenience" check.

Result: add a diagnostic guard when a loop proposes inline/default/no-file behavior for a meaningful operation.

### Focused Variation

Missing thing: a "bloat control layer" check.

Result: before making a file optional, require the loop to ask whether the operation should be narrowed, skipped, or made conditional.

### Contrarian Variation

Missing thing: a "non-operation artifact prohibition."

Result: to prevent overcorrection, explicitly say not to manufacture `route_memory_review.md` when no full Route Memory Review ran.

## Mechanism 6 - Domain Transfer

### Generic Variation

Transfer from database transactions: if a transaction changes state, it commits a record; if it should not change state, do not run the transaction.

Result: Route Memory Review should commit its artifact after execution.

### Focused Variation

Transfer from compiler pipelines: intermediate representations should exist when later stages depend on them.

Result: `route_memory_review.md` is an intermediate representation between old maps and new Navigation output.

### Contrarian Variation

Transfer from logging: not every log event deserves durable storage.

Result: correct, but Route Memory Review is not a log event. It is a current interpretation used by another operation.

## Mechanism 7 - Extrapolation

### Generic Variation

If Homegrown gains more automation, inline-only operation results become harder to audit and harder to replay.

Result: explicit canonical outputs become more important over time.

### Focused Variation

If Navigation accumulates many historical maps, Route Memory Review without a saved artifact makes stale route resurrection harder to detect.

Result: saved review files become calibration data.

### Contrarian Variation

If every run creates many mandatory files, the tree becomes noisy and harder to scan.

Result: the trigger gate must stay real; mandatory output is only safe when operation execution is selective.

## Survivor Testing

### Candidate A - Operation Output Contract Check

Rule:

Before a loop classifies an artifact as optional, it must answer:

1. Did a meaningful operation happen or is one being proposed?
2. Does the operation affect future interpretation, routing, navigation, or protocol state?
3. If yes, what is the canonical output artifact?
4. If no canonical artifact is written, what proves the operation is disposable and non-load-bearing?

Tests:

- Novelty: MEDIUM. The idea is a precise reframing of existing explicitness norms.
- Scrutiny survival: HIGH. It directly addresses the prior failure mechanism.
- Fertility: HIGH. It applies beyond Route Memory Review to other operational-memory decisions.
- Actionability: HIGH. It can be added as a small peripheral rule/check.
- Mechanism independence: HIGH. Produced by lens shifting, absence recognition, constraint manipulation, and domain transfer.

Verdict: SURVIVES.

### Candidate B - Bloat Control Layer Check

Rule:

When artifact bloat is the objection to a canonical output, first test whether bloat should be controlled by:

- not running the operation;
- narrowing the trigger;
- reducing the artifact structure;
- writing a pointer/summary elsewhere;

before making the operation's canonical output optional.

Tests:

- Novelty: MEDIUM-HIGH. It changes the level where anti-bloat is applied.
- Scrutiny survival: HIGH. It preserves anti-bloat and explicitness.
- Fertility: HIGH. It produces better alternatives than save/adapt binaries.
- Actionability: HIGH. It is a checklist-sized rule.
- Mechanism independence: HIGH. Produced by inversion, combination, constraint manipulation, and extrapolation.

Verdict: SURVIVES.

### Candidate C - Critique Dimension Guard For Operational Memory

Rule:

For artifacts that interpret prior operational memory, Critique must include these as critical dimensions unless explicitly disproven:

- explicitness fit;
- resumability;
- auditability;
- no invisible load-bearing state;
- anti-bloat trigger discipline.

Tests:

- Novelty: MEDIUM. It changes critique weighting rather than adding a new artifact.
- Scrutiny survival: HIGH. The prior and corrected critiques differ exactly on this weighting.
- Fertility: MEDIUM-HIGH. It helps future Route Memory, outcome review, and Navigation-context decisions.
- Actionability: MEDIUM-HIGH. Needs placement in a peripheral rule or discipline-specific prompt.
- Mechanism independence: MEDIUM-HIGH. Produced by absence recognition, constraint manipulation, and extrapolation.

Verdict: SURVIVES.

### Candidate D - Context Intake Pairing Rule

Rule:

When evaluating whether an operation artifact should exist, read both:

- the local active protocol being questioned;
- at least one broader Homegrown artifact-culture protocol or precedent.

Tests:

- Novelty: LOW-MEDIUM. Mostly a context hygiene rule.
- Scrutiny survival: MEDIUM. It would help, but local Navigation policy itself encoded the weak answer.
- Fertility: MEDIUM. Useful for artifact-policy questions.
- Actionability: MEDIUM. Exact placement and trigger need care.
- Mechanism independence: MEDIUM. Produced by absence recognition and domain transfer.

Verdict: REFINE, not primary.

### Candidate E - Mandatory File For Every Navigation Run

Rule:

Every Navigation run writes `route_memory_review.md`.

Tests:

- Novelty: LOW.
- Scrutiny survival: LOW. It overcorrects and creates artifacts for non-operations.
- Fertility: LOW. It creates noise, not better diagnosis.
- Actionability: HIGH but harmful.
- Mechanism independence: LOW.

Verdict: KILL.

### Candidate F - No Source Edit; Rely On Human Correction Memory

Rule:

Do not change prompts or docs; just remember this case.

Tests:

- Novelty: LOW.
- Scrutiny survival: LOW. It fails the user's need for durable explicitness.
- Fertility: LOW.
- Actionability: LOW.
- Mechanism independence: LOW.

Verdict: KILL.

## Assembly Check

The strongest assembly is:

```text
Operation Output Contract Check
  + Bloat Control Layer Check
  + Critique Dimension Guard
  + lightweight Context Intake Pairing Rule
```

Emergent value:

- Candidate A prevents the core misclassification.
- Candidate B preserves anti-bloat without hiding output.
- Candidate C prevents Critique from selecting the old adaptive survivor.
- Candidate D improves evidence intake without pretending extra reading alone fixes the issue.

This assembly is better than any single candidate because the prior failure was stage-spanning.

## Proposed Prevention Package

### P1 - Operation Output Contract Gate

Use whenever a loop proposes inline-only, print-only, optional, adaptive, or no-file output for a meaningful operation.

Gate question:

```text
Is this file optional storage, or is it the canonical output of an operation that affects later work?
```

Pass condition:

- If canonical output: artifact required when operation runs.
- If optional storage: adaptive save policy may be valid.

### P2 - Bloat Control Layer Gate

Use whenever artifact bloat is cited.

Gate question:

```text
Can bloat be controlled by narrowing/skipping the operation before making the output optional?
```

Pass condition:

- State why trigger control is or is not enough.

### P3 - Operational Memory Critique Guard

Use in Critique for artifacts involving old route maps, prior findings, protocol state, outcome records, or similar memory sources.

Required dimensions:

- explicitness fit;
- auditability;
- resumability;
- no invisible load-bearing state;
- anti-bloat trigger discipline.

### P4 - Artifact-Policy Context Pairing

Use when the local protocol under review may itself encode the contested policy.

Minimum context:

- read the local active protocol;
- read one broader Homegrown artifact/record precedent;
- explicitly state when local policy is evidence versus the thing being tested.

## Non-Survivors / Guardrails

- Do not create `route_memory_review.md` for every Navigation run.
- Do not make "explicitness" mean unbounded artifact creation.
- Do not solve this only in CONCLUDE.
- Do not treat corrected inquiry as ground truth without the comparative artifact evidence.
- Do not blame only missing file reads; the failure survived across multiple discipline outputs.

## Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: YES. Six mechanisms converge on trigger-limited, output-mandatory operation artifacts plus a bloat-control-layer check.
- Survivors tested: 6 / 6.
- Failure modes observed: none severe. Main risk checked was survival bias toward comfortable small checklist fixes; countered by preserving the stronger critique guard.
- Overall: PROCEED.
