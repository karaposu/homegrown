# Innovation: Viable ARC Paths for Homegrown

## User Input

The user asked whether the current Homegrown codebase is good for the ARC-AGI competition, after describing ARC's exact-grid, novel-task, two-trial competition format.

## Seed

Homegrown is not a direct ARC solver, but ARC may be a strong empirical testbed for Homegrown's thesis if paired with an executable solver engine.

Valuation signal: choose a path that creates measurable ARC progress without confusing Markdown reasoning with exact grid-solving.

## Mechanism Generation

### 1. Lens Shifting

- Generic: Reframe Homegrown from "solver" to "solver coach."
- Focused: Reframe ARC from "competition to enter now" to "benchmark harness for self-improving reasoning loops."
- Contrarian: Reframe ARC as a negative test: if Homegrown cannot improve an ARC solver over time, the self-improvement claim lacks grounding.

Survivor: ARC as empirical harness, not immediate leaderboard target.

### 2. Combination

- Generic: Combine ARC program search with Homegrown failure diagnosis.
- Focused: Combine a grid DSL, exact verifier, and MVL+ postmortems into a solver-improvement loop.
- Contrarian: Combine human-written primitives with LLM-generated hypotheses, but never let LLM output bypass exact verification.

Survivor: two-layer architecture: executable solver + Homegrown diagnostic/meta-learning layer.

### 3. Inversion

- Generic: Instead of asking Homegrown to solve ARC tasks, ask ARC tasks to grade Homegrown's reasoning improvements.
- Focused: Instead of generating final grids directly, generate candidate transformation programs and let code verify them.
- Contrarian: Do not let natural-language reasoning touch final answers at all; use it only to propose solver changes after failures.

Survivor: verification-first architecture where Homegrown proposes, code disposes.

### 4. Constraint Manipulation

- Generic: Add the constraint "every claim must be executable or measured."
- Focused: Add the constraint "no competition submission until local evaluation is automated and baseline score exists."
- Contrarian: Remove the leaderboard goal for the first phase; require only reproducible improvement over a fixed evaluation subset.

Survivor: staged local benchmark before leaderboard attempt.

### 5. Absence Recognition

- Generic: Missing: ARC engine.
- Focused: Missing: structured solver traces that Homegrown can read.
- Contrarian: Missing: a way for Homegrown to fail fast when its analogy is irrelevant to a task.

Survivor: build trace-emitting ARC harness first, then use Homegrown on traces.

### 6. Domain Transfer

- Generic: Transfer from theorem proving: generate candidate programs, verify against examples, rank survivors.
- Focused: Transfer from property-based testing: every transformation primitive has examples and invariants.
- Contrarian: Transfer from compiler design: treat ARC solution hypotheses as an intermediate representation compiled to executable transforms.

Survivor: DSL + verifier + search is the right technical center.

### 7. Extrapolation

- Generic: If Homegrown keeps accumulating ARC failure findings, it can form a transformation/failure corpus.
- Focused: With enough solved/failed tasks, `/intuit`-style structural retrieval could suggest which primitive family to try.
- Contrarian: If this stays Markdown-only, it will accumulate impressive explanations with no score movement.

Survivor: corpus-driven failure learning only after executable baseline exists.

## Candidate Paths

### A. Current Homegrown Directly Solves ARC Tasks

Description: Run MVL+ on each task and ask the assistant to produce the output grid.

Test:

- Novelty: low.
- Scrutiny survival: low. It violates automation, exactness, and rerun constraints.
- Fertility: low-medium for manual learning, low for competition.
- Actionability: low for leaderboard.
- Mechanism independence: low.

Verdict candidate for Critique: KILL.

### B. Human-Assisted ARC Reasoning Workbench

Description: Use Homegrown to reason through ARC tasks manually while a human encodes outputs or primitives.

Test:

- Novelty: low.
- Scrutiny survival: medium. Useful for learning, not competition submission.
- Fertility: medium.
- Actionability: medium.
- Mechanism independence: medium.

Verdict candidate for Critique: REFINE.

### C. Minimal Executable ARC Harness

Description: Build a small Python package or notebook module for ARC JSON loading, grid representation, exact verification, simple primitives, baseline search, and submission writing.

Test:

- Novelty: low, but necessary.
- Scrutiny survival: high. It addresses the primary current absence.
- Fertility: high. Every later idea depends on it.
- Actionability: high.
- Mechanism independence: high. Produced by absence recognition, domain transfer, decomposition, and constraint manipulation.

Verdict candidate for Critique: SURVIVE.

### D. Trace-Emitting Solver + Homegrown Diagnosis

Description: Extend the harness so each failed task emits a compact trace: task ID, train pairs, object summaries, candidates tried, failure reason, and uncertainty. Run MVL+/loop_diagnose over batches of traces to propose solver changes.

Test:

- Novelty: medium.
- Scrutiny survival: high. It uses Homegrown where it is strongest: diagnosis and methodology improvement.
- Fertility: high. Creates a feedback loop and corpus.
- Actionability: high after C exists.
- Mechanism independence: high.

Verdict candidate for Critique: SURVIVE.

### E. ARC Task Abstraction Corpus for `/intuit`

Description: Store solved and failed ARC tasks as relational abstractions so `/intuit` can retrieve structurally similar cases and suggest likely primitive families.

Test:

- Novelty: medium-high.
- Scrutiny survival: medium. It needs data and disciplined abstraction format.
- Fertility: high.
- Actionability: medium after C and D exist.
- Mechanism independence: medium-high.

Verdict candidate for Critique: REFINE / DEFER until trace corpus exists.

### F. Competition-Ready ARC Solver Track

Description: Build toward Kaggle/rerun readiness: runtime profiling, validation scoring, two-trial ranker, notebook packaging, and fixed experiment tracking.

Test:

- Novelty: low.
- Scrutiny survival: high, but premature before a baseline solver exists.
- Fertility: medium-high.
- Actionability: medium after C-D.
- Mechanism independence: medium.

Verdict candidate for Critique: DEFER until local baseline exists.

### G. ARC as Homegrown Thesis Benchmark

Description: Treat ARC as a measured validation track for the claim that structured loops improve reasoning systems. Metric: solver score and failure distribution improve after Homegrown-diagnosed changes.

Test:

- Novelty: medium.
- Scrutiny survival: high if measured honestly.
- Fertility: high. Connects Homegrown's self-improvement goal to objective performance.
- Actionability: medium-high.
- Mechanism independence: high.

Verdict candidate for Critique: SURVIVE as framing.

## Assembly Check

The strongest architecture is staged:

1. Build a minimal executable ARC harness.
2. Add primitive transforms and exact train-pair verification.
3. Emit structured traces for every unsolved task.
4. Use Homegrown to diagnose trace batches and propose solver improvements.
5. Build an ARC abstraction/failure corpus only after there are enough traces.
6. Add competition packaging only after local score improves over a fixed baseline.

This preserves the boundary: code produces grids; Homegrown improves the code and reasoning process.

## Suggested Milestones

### Milestone 0: Baseline Harness

- Load ARC JSON.
- Validate submission format.
- Score against known training/evaluation solution files.
- Implement trivial baselines: identity, crop-to-bounding-box, color map, constant fill, simple geometric transforms.

### Milestone 1: Primitive DSL

- Add object extraction.
- Add color/shape/geometric primitives.
- Add composition of 1-2 primitive steps.
- Record every candidate and exact-match result.

### Milestone 2: Homegrown Diagnostic Loop

- For unsolved tasks, generate trace artifacts.
- Run MVL+ over failure batches.
- Convert findings into new primitives/search changes.
- Measure before/after score.

### Milestone 3: Abstraction Corpus

- Convert solved/failed tasks into relational abstractions.
- Use `/intuit` or a simplified retrieval protocol to suggest primitive families.
- Validate whether retrieval improves search efficiency or score.

### Milestone 4: Competition Track

- Add two-attempt ranking.
- Add runtime profiling.
- Add Kaggle notebook/submission generation.
- Submit only after local validation shows nontrivial improvement.

## Innovation Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: yes. Six mechanisms converge on "executable ARC harness first, Homegrown diagnosis second."
- Survivors tested: 7 / 7.
- Failure modes observed: none.
- Overall: PROCEED.
