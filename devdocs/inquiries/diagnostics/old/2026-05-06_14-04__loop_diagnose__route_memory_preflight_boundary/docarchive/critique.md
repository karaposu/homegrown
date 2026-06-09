# Critique: Loop Diagnose - Route Memory Preflight Boundary

## User Input

Evaluate prevention candidates for the correction chain:

- prior inquiry: `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary`
- corrected inquiry: `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation`

Human correction: the "cheap Route-Memory Preflight plus full Route Memory Review" model still felt messy and needed reevaluation from why it was not clean.

## Phase 0 - Dimensions With Weights

| Dimension | Weight | Success Criteria |
| --- | --- | --- |
| Mechanism Fit | Critical | Directly prevents status classification from being named as a separate always-run operation. |
| Operation Hygiene | Critical | Reduces operation proliferation rather than adding another ritual. |
| Preservation Of Correct Prior Parts | Critical | Keeps dependency-triggered review and mandatory `route_memory_review.md` when full review runs. |
| User Alignment | High | Treats "messy" as a real boundary signal without making user discomfort proof by itself. |
| Stage Coverage | High | Addresses premature stabilization, Critique weighting, human perspective, and Innovation weighting. |
| Actionability | High | Can be expressed as small gates or checklist lines. |
| Evidence Discipline | High | Does not overclaim from one correction chain or treat the corrected inquiry as ground truth. |
| Simplicity | Medium | Adds only enough process to prevent the failure. |

Dimension validation:

- These dimensions come from Sensemaking's fixed variables and eliminated options.
- If a candidate passes these dimensions, it should prevent the observed failure without undoing the good parts of the prior answer.
- No separate implementation-placement dimension is included because exact source edits are outside this diagnostic.

## Phase 1 - Fitness Landscape

### Viable Region

Candidates are viable if they:

- distinguish status fields from operations;
- prevent new always-run named routines unless justified;
- force Critique to attack operation proliferation;
- treat user messiness as a diagnostic signal;
- preserve Route Memory Review's trigger and artifact rule;
- remain small enough to avoid becoming a new process layer.

### Dead Region

Candidates are dead if they:

- ban a word instead of checking operation boundaries;
- formalize Route-Memory Preflight as a separate routine from current evidence;
- rewrite core MVL+ broadly from one case;
- weaken the full-review artifact rule;
- treat "feels messy" as sufficient proof without artifact evidence.

### Boundary Region

Candidates are boundary-region if they help but need scope constraints to avoid becoming subjective or bureaucratic.

### Unexplored Region

Exact source placement remains unexplored. Possible surfaces include MVL+ peripheral rules, `loop_diagnose.md`, Sensemaking guidance, Critique guidance, or Navigation-specific docs. That decision should be made in a later materialization pass.

## Phase 2 - Candidate Evaluation

### P1 - Operation Boundary Naming Gate

Rule: before stabilizing a named step, ask whether it is a status/field, section, routine, or artifact-producing operation.

**Prosecution:**
This could become another generic checkbox. If every naming decision requires ceremony, the fix reproduces the same process proliferation it warns against.

**Defense:**
The gate is targeted at new named steps, not ordinary prose. It directly catches the prior failure: "Route-Memory Preflight" sounded like a routine even though the corrected model needed only `route_memory_status`.

**Collision:**
Defense wins if the gate is scoped to proposed named workflow steps or protocol concepts, not every phrase. The output must be a one-line classification, not a separate artifact.

**Position:** Viable with scope constraint.

**Verdict:** SURVIVE.

Constructive output:

- Keep P1.
- Scope it to new named workflow steps, protocol concepts, or always-run checks.
- Require a compact answer: field/section/routine/artifact-producing operation.

### P2 - Status Classification vs Review Gate

Rule: distinguish whether a proposal only records state or performs reconciliation/disposition of old evidence.

**Prosecution:**
This may overlap with P1 and add duplicate process.

**Defense:**
It covers a different axis. P1 asks what kind of named thing this is. P2 asks what the thing does to state and authority. The prior failure needed both: it named the cheap thing as a routine and blurred classification with review.

**Collision:**
Defense wins. P2 is the most directly portable lesson from the correction chain.

**Position:** Viable.

**Verdict:** SURVIVE.

Constructive output:

- Keep P2.
- Use especially for historical memory, context safety, prior-state evidence, and route-memory handling.

### P3 - Operation-Proliferation Critique Guard

Rule: when a candidate adds a named always-run step, Critique must ask whether it could be a field, status, or section inside an existing operation.

**Prosecution:**
This could bias Critique against legitimate new routines. Some checks really need ownership and validation.

**Defense:**
The rule does not kill new routines. It shifts burden of proof: if a routine is truly needed, define why it has clearer ownership or lower risk than absorption. The prior Critique lacked this adversarial pressure.

**Collision:**
Defense wins with the burden-of-proof wording. The guard improves Critique without banning routines.

**Position:** Viable.

**Verdict:** SURVIVE.

Constructive output:

- Keep P3.
- Add explicit survival condition: separate routine must prove clearer ownership, validation, or safety than absorption.

### P4 - User-Felt-Messiness Anchor

Rule: when the user says "messy," "not clean," "smells," or similar, Sensemaking must classify the mess type and test a counter-interpretation.

**Prosecution:**
This can become subjective. The user may dislike something for preference reasons, or because the explanation was unclear rather than because the architecture is wrong.

**Defense:**
The rule treats user discomfort as a signal, not a verdict. In this correction chain, that signal exposed a real operation boundary problem. The evidence constraint prevents pure subjectivity.

**Collision:**
Both sides are valid. The candidate survives only if it requires artifact/evidence follow-up and does not conclude from feeling alone.

**Position:** Boundary but useful.

**Verdict:** SURVIVE WITH EVIDENCE CONSTRAINT.

Constructive output:

- Keep P4 as a Sensemaking trigger.
- Require it to name the possible mess type and test against artifacts, workflow, or counter-interpretation.

### Candidate E - Preflight Word Ban

**Prosecution:**
It overfits to one word and could block legitimate uses.

**Defense:**
It would have prevented this exact failure.

**Collision:**
Prosecution wins. The problem is operation-boundary ambiguity, not the word itself.

**Position:** Dead.

**Verdict:** KILL.

Seed extracted:

- Use a naming gate instead of a vocabulary ban.

### Candidate F - Formalize Route-Memory Preflight As Separate Routine

**Prosecution:**
It doubles down on the corrected failure. The current evidence says the cheap part should be status classification inside existing intake.

**Defense:**
If route-memory classification later becomes complex, a separate routine might become useful.

**Collision:**
Prosecution wins for now. Defense becomes a future revival condition, not current action.

**Position:** Dead now; deferred possibility.

**Verdict:** KILL / DEFER.

Seed extracted:

- Revisit only if route-memory status classification becomes too complex for Freshness Preflight after real usage.

### Candidate G - Broad MVL+ Anti-Proliferation Rewrite

**Prosecution:**
One correction chain is insufficient for broad core MVL+ changes. It risks overfitting and slowing all loops.

**Defense:**
Operation proliferation is a real pattern risk in Homegrown.

**Collision:**
Prosecution wins for current action. Defense supports monitoring and accumulating more LOOP_DIAGNOSE examples.

**Position:** Dead for current pass; monitoring seed.

**Verdict:** KILL / DEFER.

Seed extracted:

- After several diagnostic findings show the same pattern, revisit broader MVL+ guidance.

## Phase 3.5 - Assembly Check

### Assembly Candidate

```text
P1 Operation Boundary Naming Gate
+ P2 Status Classification vs Review Gate
+ P3 Operation-Proliferation Critique Guard
+ P4 User-Felt-Messiness Anchor with evidence constraint
```

**Prosecution:**
The package itself is four gates. That could be too much overhead for a narrow correction.

**Defense:**
The gates are not meant to run on every decision. They trigger only when the same risk appears: new named workflow step, historical-memory/context-safety handling, named always-run routine, or user "messy" signal. They are small checks, not new artifacts or disciplines.

**Collision:**
Defense wins if the final finding states trigger conditions clearly and defers exact source placement. The package is actionable but should not be installed as a heavy new process.

**Verdict:** SURVIVE ASSEMBLED, with trigger constraints.

Ranked survivors:

1. P2 - Status Classification vs Review Gate.
2. P1 - Operation Boundary Naming Gate.
3. P3 - Operation-Proliferation Critique Guard.
4. P4 - User-Felt-Messiness Anchor with evidence constraint.

## Coverage Map

| Region | Coverage | Result |
| --- | --- | --- |
| Core classification/review mechanism | Covered by P2 | SURVIVES |
| Naming boundary | Covered by P1 | SURVIVES |
| Critique dimension weakness | Covered by P3 | SURVIVES |
| Human/user perspective weakness | Covered by P4 | SURVIVES WITH CONSTRAINT |
| Overfit word ban | Covered by Candidate E | KILL |
| Separate Route-Memory Preflight routine | Covered by Candidate F | KILL / DEFER |
| Broad MVL+ rewrite | Covered by Candidate G | KILL / DEFER |
| Exact source placement | Not covered | Defer |

No major viable prevention region remains unexplored for this diagnostic.

## Signal

TERMINATE with ranked survivors.

The original diagnostic question is answered. The prior loop likely missed that its replacement label created an operation boundary. The maintenance answer is narrow: add gates for classification-vs-review, operation naming, operation-proliferation critique, and evidence-backed user messiness.

## Convergence Telemetry

- Dimension coverage: COMPLETE for this diagnostic.
- Adversarial strength: STRONG. The main survivor package was prosecuted on the risk that it becomes process proliferation.
- Landscape stability: STABLE. Candidates converge on the same scoped gate package.
- Clean SURVIVE exists: YES, P2 and P1.
- Failure modes observed:
  - Wrong dimensions: avoided by making Operation Hygiene critical.
  - Rubber-stamping: avoided by killing/defering three candidates.
  - Nitpicking: avoided by preserving the package despite overhead concerns.
  - Self-reference collapse: reduced by grounding in user correction and comparative inquiry artifacts.
- Output: PROCEED.
