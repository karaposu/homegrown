# Critique: ARC-AGI Fit Verdict

## User Input

The user asked whether the current Homegrown codebase is good for the ARC-AGI competition, after describing ARC's exact-grid, novel-task, two-trial competition format.

## Phase 0: Dimensions

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Exact-output viability | 5 | The approach can produce exact grids, not just plausible explanations. |
| Automation / rerun fit | 5 | The approach can run unattended in the competition environment. |
| Generalization potential | 5 | The approach can handle novel tasks via compositional reasoning/search, not memorized templates. |
| Current-codebase truthfulness | 5 | The verdict matches what exists in the repo today. |
| Build feasibility | 4 | The path can start with concrete milestones. |
| Homegrown strategic fit | 4 | The path uses Homegrown's actual strengths rather than forcing it into the wrong layer. |
| Measurement quality | 4 | The path produces scores, traces, or other objective feedback. |
| Overfit resistance | 3 | The path avoids optimizing only for known examples. |

## Phase 1: Fitness Landscape

- Viable region: executable ARC harness with exact verification, structured traces, and Homegrown used as diagnostic/meta-learning layer.
- Boundary region: human-assisted reasoning and ARC abstraction corpus. Useful, but not competition-ready without the engine.
- Dead region: using MVL+ directly as a task solver or treating text reasoning as sufficient.
- Unexplored region: current high-performing external ARC solver techniques. This was not required for the repo-fit question and should be explored before a serious competition push.

## Phase 2-3: Candidate Verdicts

### A. Current Homegrown Directly Solves ARC Tasks

Prosecution: This fails exact-output viability and automation. Homegrown currently emits Markdown artifacts. ARC expects exact grids in a rerun file. A natural-language loop cannot be the final authority because a one-cell mismatch is wrong.

Defense: ARC is about abstraction, and Homegrown is a system for structured abstraction, decomposition, and critique.

Collision: The defense shows conceptual relevance, not competition readiness. The prosecution wins on critical dimensions.

Verdict: KILL.

Constructive seed: Use Homegrown to propose executable transformations or solver improvements, not final outputs.

### B. Human-Assisted ARC Reasoning Workbench

Prosecution: It cannot be submitted as the competition algorithm because the human remains in the loop. It also risks producing polished explanations that do not translate to exact outputs.

Defense: It can help the user learn ARC patterns and design primitives faster.

Collision: Useful as research support, not a competition approach.

Verdict: REFINE.

Constructive output: Keep this as a development/debugging mode only. Do not count it as solver performance.

### C. Minimal Executable ARC Harness

Prosecution: A minimal harness is boring and will score poorly by itself. It does not solve the hard abstraction problem.

Defense: Without it, there is no measurement, no exact verification, no submission path, and no reliable feedback loop.

Collision: The defense wins. This is the prerequisite, not the full solution.

Verdict: SURVIVE.

Constructive output: Build this first if ARC becomes a serious track.

### D. Trace-Emitting Solver + Homegrown Diagnosis

Prosecution: Trace design can become busywork. If traces are too verbose or not tied to score movement, Homegrown will analyze noise.

Defense: This is exactly where Homegrown fits: converting measured failures into solver-maintenance hypotheses.

Collision: The candidate survives if traces are compact and tied to exact solver outcomes.

Verdict: SURVIVE.

Constructive output: Emit task-level traces with candidates tried, exact-match failures, missing primitive guess, search/ranking state, and final outcome.

### E. ARC Task Abstraction Corpus for `/intuit`

Prosecution: Premature before there are solved/failed task traces. A corpus built from hand-written abstractions may overfit to the author's interpretations.

Defense: Structural analogy is central to ARC, and `/intuit` is designed for structural retrieval and projection.

Collision: Strong future candidate, weak immediate candidate.

Verdict: REFINE / DEFER.

Constructive output: Start only after the harness has a real trace corpus. Use outcome-linked abstractions, not pure prose.

### F. Competition-Ready ARC Solver Track

Prosecution: Premature. No baseline solver exists in the repo. Packaging and leaderboard work before local scoring would optimize the wrong thing.

Defense: If the user wants the competition, rerun compatibility and two-trial ranking eventually matter.

Collision: Necessary later, harmful now if it displaces the harness.

Verdict: DEFER.

Constructive output: Reopen after local evaluator, baseline score, and nontrivial primitive/search improvements exist.

### G. ARC as Homegrown Thesis Benchmark

Prosecution: ARC is narrow and may reward domain tricks. It should not be overtreated as proof of general cognition or consciousness.

Defense: ARC gives objective, exact, repeated feedback on novel reasoning tasks. That is valuable for a self-improving loop project.

Collision: Survives as framing with bounded claims.

Verdict: SURVIVE.

Constructive output: Treat ARC as one empirical benchmark track for Homegrown-guided solver improvement, not as the whole project.

## Phase 3.5: Assembly Check

Best surviving assembly:

1. Do not claim the current repo is competition-ready.
2. If pursuing ARC, build a minimal executable ARC harness first.
3. Add a primitive DSL/search/verifier that emits structured traces.
4. Use Homegrown to diagnose failure batches and propose solver improvements.
5. Measure before/after score on fixed local splits.
6. Build `/intuit`-style abstraction retrieval only after real traces exist.
7. Attempt competition packaging only after local validation shows meaningful movement.

This assembly passes the exactness and automation dimensions while preserving Homegrown's role as a meta-layer.

## Coverage Map

| Region | Coverage |
|---|---|
| Current codebase readiness | Covered. Low readiness. |
| Conceptual ARC/Homegrown fit | Covered. Medium-high as benchmark/meta-layer. |
| Required build path | Covered at architecture level. |
| Direct solver strategy details | Covered only as first-stage harness, not full algorithm research. |
| External leaderboard tactics | Deferred. |

## Signal

TERMINATE with ranked survivors:

1. SURVIVE: Minimal executable ARC harness.
2. SURVIVE: Trace-emitting solver plus Homegrown diagnosis.
3. SURVIVE: ARC as bounded empirical benchmark for Homegrown's self-improvement thesis.
4. REFINE: Human-assisted ARC reasoning workbench as development mode only.
5. REFINE / DEFER: ARC abstraction corpus for `/intuit` after traces exist.
6. DEFER: Competition-ready packaging until local baseline and score movement exist.
7. KILL: Current Homegrown directly solving ARC tasks as the competition algorithm.

## Convergence Telemetry

- Dimension coverage: complete for the repo-fit question.
- Adversarial strength: strong. The critique directly attacked the tempting "ARC is abstract reasoning, Homegrown is abstract reasoning, therefore fit" argument.
- Landscape stability: stable.
- Clean survivor exists: yes, executable harness plus Homegrown diagnostic layer.
- Failure modes observed: no rubber-stamping; no nitpicking; no self-reference collapse because exact ARC scoring was used as external grounding.
- Overall: PROCEED.
