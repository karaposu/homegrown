# Innovation: Feedback Family Organization Options

## User Input

Find a clearer organization for `reflect`, `outcome_review`, and `loop_diagnose`, which all appear to be feedback mechanisms. Avoid adding complexity prematurely.

## Seed

The user sees a shared pattern and worries that naming another mechanism will make Homegrown harder to comprehend. The system needs a simpler conceptual organization before creating more protocols.

## Mechanism Outputs

### 1. Lens Shifting

Generic variation:

- Stop viewing these as tools. View them as feedback boundaries.

Focused variation:

- Each mode answers "what just happened compared with what should have happened?" at a different boundary: stage, loop, use, correction chain.

Contrarian variation:

- The right simplification may add one parent concept while reducing three mental categories.

Test:

- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: high.
- Mechanism independence: appears through combination, absence recognition, and domain transfer.

Candidate:

- C1: Feedback boundaries model.

### 2. Combination

Generic variation:

- Combine reflect's process observation, outcome review's actual-use record, and loop diagnose's attribution discipline.

Focused variation:

- A shared feedback record can carry:
  - expected;
  - observed;
  - delta;
  - evidence;
  - attribution;
  - route.

Contrarian variation:

- Combine all feedback records into one index, but keep local mode outputs separate.

Test:

- Novelty: high locally.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: high.
- Mechanism independence: high.

Candidate:

- C2: Shared feedback contract plus mode-specific outputs.

### 3. Inversion

Generic variation:

- Instead of asking "which tool handles feedback?", ask "which feedback event happened?"

Focused variation:

- The user does not choose reflect/outcome/diagnose. The user or protocol identifies boundary and depth:
  - process feedback;
  - use feedback;
  - causal diagnosis.

Contrarian variation:

- Do not add `outcome_review` first. Add `feedback.md` first, then create `outcome_review` as a mode.

Test:

- Novelty: medium-high.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: high.
- Mechanism independence: strong.

Candidate:

- C3: Build feedback parent before outcome_review child.

### 4. Constraint Manipulation

Generic variation:

- Add constraint: every feedback mechanism must declare its observed object, trigger, required evidence, and route.

Focused variation:

- Add constraint: no feedback mode may claim root cause unless its evidence isolates root cause.

Contrarian variation:

- Add constraint: no automatic escalation to loop diagnose unless correction-chain evidence or repeated uncertain attribution exists.

Test:

- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: high.
- Mechanism independence: strong.

Candidate:

- C4: Feedback mode contract.

### 5. Absence Recognition

Generic variation:

- Missing thing: a feedback taxonomy that tells the user which feedback mode applies.

Focused variation:

- Missing thing: an escalation ladder from cheap feedback to deep diagnosis.

Contrarian variation:

- Missing thing: a "confirmation/no-op" feedback record. If feedback only records failures, the system learns a biased view of itself.

Test:

- Novelty: high locally.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: high.
- Mechanism independence: high.

Candidate:

- C5: Feedback escalation ladder with confirmation records.

### 6. Domain Transfer

Generic variation:

- From software reliability: logs, metrics, incidents, postmortems, and root-cause analyses are related but not identical. They share observability vocabulary while retaining different procedures.

Focused variation:

- From medicine: screening, follow-up, outcome assessment, and differential diagnosis are all feedback, but a screening test is not a diagnosis and a diagnosis is not routine follow-up.

Contrarian variation:

- From science: observation notebooks, experiment results, and failure analysis share evidence discipline but are not one method.

Test:

- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: medium-high.
- Mechanism independence: high.

Candidate:

- C6: Observability-style feedback family.

### 7. Extrapolation

Generic variation:

- If Homegrown keeps adding feedback-like mechanisms without a parent model, the user will increasingly ask "isn't this the same thing?"

Focused variation:

- If Homegrown defines feedback family now, future additions can be classified as modes instead of new concepts.

Contrarian variation:

- If Homegrown over-unifies too early, mode procedures will become generic and weak, causing the same kind of collapse as "reflect does everything."

Test:

- Novelty: medium.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: high.
- Mechanism independence: high.

Candidate:

- C7: Unify vocabulary, not execution.

## Candidate Set for Critique

### Candidate A - Keep Reflect, Outcome Review, and Loop Diagnose Fully Separate

Each mechanism keeps its own file, vocabulary, records, and routing.

### Candidate B - Merge Everything Into Reflect

Reflect becomes the general learning/feedback tool and handles process reflection, after-use outcome review, and diagnostic failure analysis.

### Candidate C - Create One Generic Feedback Command

Replace or subsume all three with a single broad feedback mechanism that handles all feedback cases.

### Candidate D - Create A Feedback Family Contract With Specialized Modes

Define feedback as the parent operation and keep checkpoint, reflect, outcome_review, and loop_diagnose as modes with shared fields and explicit escalation.

### Candidate E - Create `feedback.md` First, Then `outcome_review.md`

Materialization sequence: first define the parent feedback protocol/concept, then build outcome_review as the use-feedback mode under that parent.

## Assembly Check

Strongest assembly:

```text
homegrown/protocols/feedback.md
  defines the shared feedback kernel and mode table

homegrown/protocols/outcome_review.md
  implements use-feedback mode using the kernel

reflect
  remains process-feedback mode and later references feedback.md

loop_diagnose
  remains causal diagnostic escalation and later references feedback.md
```

This assembly reduces complexity more than creating outcome_review alone because it gives the user one parent mental model before adding the new child mode.

## Innovation Telemetry

- Generators applied: 4/4.
- Framers applied: 3/3.
- Convergence: YES. Multiple mechanisms converge on shared vocabulary with specialized execution.
- Survivors tested: 7/7.
- Failure modes observed: no single-mechanism trap; no early frame lock; no innovation without grounding.
- Overall: PROCEED.
