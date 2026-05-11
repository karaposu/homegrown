# Decomposition: ARC-AGI Fit and Build Requirements

## Input

Sensemaking stabilized a two-layer model: ARC needs an object-level exact-grid solver, while Homegrown can serve as a meta-cognitive layer for solver design, failure diagnosis, and iterative improvement.

## 1. Coupling Map

### Cluster A: ARC Engine

Strongly coupled components:

- dataset loader,
- grid representation,
- object segmentation,
- primitive transform library,
- candidate generator/search,
- train-pair verifier,
- test output generator,
- two-attempt ranker,
- submission writer.

These must interoperate tightly because a candidate transformation must parse grids, execute on train inputs, compare exact outputs, then apply to test inputs.

### Cluster B: ARC Knowledge Layer

Moderately coupled components:

- solved-task abstraction records,
- failure taxonomy,
- transformation-family taxonomy,
- examples of object/color/geometry/relation patterns,
- corpus retrieval or `/intuit`-style analogy.

This layer feeds the engine with priors and feeds Homegrown with evidence.

### Cluster C: Homegrown Meta-Layer

Strongly coupled within Homegrown:

- Exploration maps task/solver/failure territory.
- Sensemaking clarifies task structure and solver gaps.
- Decomposition partitions task families and solver capabilities.
- Innovation proposes primitives, searches, and architectural changes.
- Critique evaluates candidates and failure hypotheses.
- Loop diagnosis extracts discipline/solver process lessons.

This layer is already mostly present as Markdown skill infrastructure.

### Cluster D: Competition Operations

Strongly coupled components:

- local validation split,
- runtime limits,
- Kaggle/rerun packaging,
- deterministic submission generation,
- exact scoring,
- experiment tracking.

This cluster determines whether the solver can actually compete.

## 2. Boundaries

### Boundary 1: Meta-reasoning vs exact execution

This is the most important boundary. Homegrown can reason about a transformation; ARC scoring requires executable transformation code.

### Boundary 2: Primitive library vs search policy

Grid/object primitives should be separable from the policy that composes and ranks them. Changing search should not require rewriting primitive semantics.

### Boundary 3: Solver results vs Homegrown diagnosis

The solver should produce structured failure/success artifacts. Homegrown should read them and propose changes, not manually inspect every task forever.

### Boundary 4: ARC-specific code vs reusable cognition infrastructure

ARC-specific object transforms should not leak into core Homegrown discipline definitions. ARC should be a benchmark track, not the identity of the project.

## 3. Bottom-Up Validation

### Atoms

- A grid is an atomic input/output data object.
- A train pair is an atomic verification case.
- A candidate transformation is the atomic hypothesis.
- Exact match on train pairs is the atomic correctness check.
- A failed task is the atomic diagnostic unit.
- A Homegrown inquiry/finding is the atomic meta-learning unit.

### Validation

The top-down clusters align with atoms:

- grid/pair/candidate/exact-match atoms belong in the ARC Engine,
- failed-task/task-family atoms belong in the Knowledge Layer,
- inquiry/finding atoms belong in the Homegrown Meta-Layer,
- notebook/submission/scoring atoms belong in Competition Operations.

No high-coupling atom is split by the proposed boundaries.

## 4. Question Tree

### Q1. What is the minimum executable ARC engine?

Verification criteria:

- JSON challenge and solution files load.
- Grids are represented as typed matrices.
- Candidate transforms can be executed on train and test grids.
- Exact train-pair verifier exists.
- Submission JSON can be generated.

### Q2. What primitive transformations should the solver support first?

Verification criteria:

- Object extraction primitives exist.
- Color mapping primitives exist.
- Crop/pad/resize/translate/reflect/rotate primitives exist.
- Fill/outline/connect/count/repeat primitives exist.
- Primitives are composable and testable.

### Q3. How should candidate search work?

Verification criteria:

- Candidate generation is bounded.
- Candidates are filtered by exact train-pair consistency.
- Search supports simple one-step and multi-step compositions.
- Search records why candidates failed.

### Q4. How should the solver choose two trials?

Verification criteria:

- Ranker estimates candidate plausibility after train verification.
- Two distinct outputs can be emitted when uncertainty remains.
- Duplicate or equivalent attempts are suppressed.
- Ranking is validated on evaluation tasks.

### Q5. How should Homegrown plug into ARC?

Verification criteria:

- Solver emits artifacts Homegrown can read: task summary, candidates tried, failures, uncertainty.
- Homegrown proposes primitive/search/ranking changes, not direct grid cells as final authority.
- Loop outputs are archived with task IDs and measured outcomes.

### Q6. How should failure learning work?

Verification criteria:

- Failed tasks are classified by missing primitive, bad segmentation, search explosion, wrong ranking, or ambiguity.
- Repeated failures become solver-maintenance candidates.
- Changes are evaluated against held-out tasks to avoid overfitting.

### Q7. What is the competition-readiness gate?

Verification criteria:

- Local evaluation pipeline runs end-to-end.
- Baseline score is measured.
- Runtime fits rerun constraints.
- Submission writer passes format validation.
- Improvements are tracked against a fixed validation set.

## 5. Interface Map

| Source | Target | What Flows | Direction |
|---|---|---|---|
| ARC JSON loader | Grid representation | parsed tasks and grids | one-way |
| Grid representation | Primitive transforms | input matrices and object views | one-way |
| Primitive transforms | Candidate search | executable operations | one-way |
| Candidate search | Train verifier | candidate outputs | one-way |
| Train verifier | Ranker | pass/fail, residual ambiguity, candidate metadata | one-way |
| Ranker | Submission writer | selected trial outputs | one-way |
| Solver run | Failure archive | traces, candidate failures, task summaries | one-way |
| Failure archive | Homegrown loop | evidence for diagnosis | one-way |
| Homegrown loop | Solver maintenance | proposed primitives/search/ranking changes | one-way |
| Local evaluator | Competition gate | score, runtime, failure distribution | one-way |

## 6. Dependency Order

1. Build or choose the ARC data/evaluation harness.
2. Implement grid representation and exact verification.
3. Implement a small primitive library.
4. Implement bounded candidate search.
5. Implement ranking and two-attempt output.
6. Add failure trace output.
7. Use Homegrown to diagnose failures and propose solver improvements.
8. Add knowledge/corpus retrieval once enough task traces exist.
9. Package for competition rerun only after local evaluation is credible.

## 7. Self-Evaluation

| Dimension | Result | Notes |
|---|---|---|
| Independence | Pass | ARC engine, knowledge layer, Homegrown meta-layer, and competition operations are separable with clear interfaces. |
| Completeness | Pass | Covers current fit assessment and the main missing pieces for competition readiness. |
| Reassembly | Pass | If all pieces exist and interfaces hold, the repo could become an ARC research/competition system. |
| Tractability | Pass | Each question can become a bounded build or research task. |
| Interface clarity | Pass | The main crossing flows are explicit. |
| Balance | Flag | ARC Engine is much larger than the other pieces; it needs further decomposition during implementation. |
| Confidence | Pass | Boundaries match both repo artifacts and ARC task mechanics. |

## Decomposition Verdict

Proceed to Innovation. The useful innovation space is not "how to use current MVL+ directly on ARC tasks"; it is "what staged architecture best connects Homegrown to a real ARC solver without corrupting either layer."
