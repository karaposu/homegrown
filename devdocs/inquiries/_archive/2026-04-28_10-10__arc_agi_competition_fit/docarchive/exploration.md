# Exploration: ARC-AGI Competition Fit

## Mode and Entry Point

- Mode: mixed artifact + possibility exploration.
- Entry point: signal-first. The user supplied a concrete competition description and asked whether the current codebase is a good fit.

The artifact side maps what exists in the repository. The possibility side maps what an ARC-AGI competitor would need.

## Cycle 1: Coarse Repository Scan

### Scan

Scanned the top-level repository layout, `README.md`, `devdocs/archaeology/small_summary.md`, `devdocs/archaeology/intro2codebase.md`, `homegrown/`, `enes/`, `thinking_disciplines/`, and `src/`.

### Found

- `homegrown/` contains Markdown skill definitions and reference specs for thinking disciplines: Exploration, Sensemaking, Decomposition, Innovation, Critique, Reflection, Navigation, MVL, MVL+.
- `enes/` contains architectural notes about autonomous cognition, intuition, quality awareness, and self-improvement.
- `thinking_disciplines/` contains conceptual/reference documents about the disciplines.
- `devdocs/inquiries/` contains saved loop artifacts and findings.
- `src/book/` contains book/documentation Markdown.
- Installer scripts exist for Claude and Codex.

### Signals

- Strong relevance signal: the repo is explicitly about structured reasoning, analogy, decomposition, critique, and self-improving loops.
- Strong absence signal: there is no visible ARC task runner, Kaggle notebook, solver module, Python package, dataset loader, grid transform DSL, or evaluation harness.
- Transition signal: the repo's own docs say the autonomous loop does not run fully yet; the human currently drives the loop.

### Resolution Decision

Zoom in on the gap between ARC-AGI's demands and Homegrown's actual runtime capabilities.

### Frontier State

Repository shape is stable at high level. The missing solver layer is a confirmed absence at the scanned resolution.

### Confidence Update

- Current codebase as methodology system: confirmed.
- Current codebase as ARC solver: confirmed absent at visible source level.

## Cycle 2: ARC-AGI Requirement Scan

### Scan

Mapped the user's dataset description into capability requirements.

### Found

ARC-AGI requires:

- parse JSON task files,
- represent small integer grids up to 30x30,
- infer a transformation from a few train input/output pairs,
- apply it to unseen test inputs,
- produce exact output grids,
- support one or sometimes two test inputs per task,
- produce up to two trials per test input,
- generalize to novel tasks rather than memorize templates,
- run against 240 unseen leaderboard tasks in the rerun environment.

### Signals

- Exactness is load-bearing. A near-miss grid is wrong.
- Search is load-bearing. The solver must consider many candidate transformations and select those consistent with train pairs.
- Programmatic verification is load-bearing. Every candidate can be tested against train pairs before submission.
- Visual/object abstraction is load-bearing. Many ARC tasks depend on objects, symmetries, fills, cropping, counting, color remapping, repetition, and relational transformations.
- Runtime and packaging matter. The competition reruns a notebook; the solver must be executable without human intervention.

### Resolution Decision

Probe where Homegrown aligns with those requirements and where it does not.

### Frontier State

ARC requirement map is stable enough for fit assessment.

### Confidence Update

- ARC requirements from user description: confirmed.
- Specific current-year leaderboard tactics: not explored because the user asked about this repo's fit and supplied the competition frame.

## Cycle 3: Alignment Probe

### Probe

Compared Homegrown's discipline system to ARC solver needs.

### Alignment Found

Homegrown is potentially useful for:

- generating hypotheses about transformations,
- decomposing hard tasks into object/color/geometry/relation questions,
- critiquing candidate strategies,
- designing a solver architecture,
- diagnosing failed solver attempts,
- creating a corpus of task-solution lessons,
- improving the solver through loop-based postmortems.

### Misalignment Found

Homegrown is weak or absent for:

- deterministic grid manipulation,
- exhaustive or bounded program search,
- exact candidate verification,
- fast batch execution over hundreds of tasks,
- learning from solved ARC tasks in a structured object-transform library,
- two-attempt output ranking,
- Kaggle-compatible submission generation,
- automated evaluation on train/evaluation splits.

### Signal

The repo is strongest at meta-reasoning and weakest at object-level ARC execution.

### Resolution Decision

Zoom out to possible use modes: direct solver, human-assisted solver, solver-design framework, and postmortem/diagnostic system.

### Frontier State

The fit landscape has clear regions.

### Confidence Update

- Direct solver readiness: confirmed low.
- Solver-design usefulness: confirmed medium-high.
- Competition competitiveness without major new code: confirmed low.

## Cycle 4: Use-Mode Map

### Scan

Mapped possible ways to use this codebase for ARC.

### Candidates

1. Direct Homegrown-as-solver.
   - Use MVL+/disciplines to solve each ARC task in natural language and emit grids.

2. Human-assisted research notebook.
   - Use Homegrown to reason about tasks, then manually encode transformations.

3. Meta-solver architecture.
   - Build an actual programmatic ARC solver whose search/hypothesis-generation/evaluation architecture is informed by Homegrown disciplines.

4. Failure-diagnosis system.
   - Run solver attempts, archive failures, and use MVL+/loop_diagnose to classify which transformation families or heuristics failed.

5. Training-corpus builder.
   - Convert solved tasks into structured abstractions that `/intuit` or similar mechanisms can retrieve later.

### Signals

- Direct Homegrown-as-solver conflicts with competition automation and exactness.
- Meta-solver architecture and failure diagnosis align with Homegrown's strengths.
- Training-corpus building is plausible but not yet implemented.

### Resolution Decision

Jump scan in a different direction: check whether the repository has hidden executable ARC infrastructure.

### Frontier State

Use-mode landscape stable.

### Confidence Update

Best fit is meta-solver/failure-diagnosis, not direct submission.

## Jump Scan: Executable Infrastructure

### Scan

Searched for Python notebooks, package files, requirements, ARC references, grid/solver language, and competition artifacts.

### Found

- No `.py`, `.ipynb`, `pyproject.toml`, `requirements.txt`, or `package.json` files surfaced in the scanned source areas.
- Text search did not reveal ARC-specific solver work.
- The repository contains a `.venv`, but no visible project Python source using it.

### Signal

There is no hidden solver layer at the scanned depth.

### Confidence Update

Confirmed absent: ARC execution stack in the current repo.

## Convergence Assessment

- Frontier stability: yes. The major territory is mapped.
- Declining discovery rate: yes. Later scans confirmed the same pattern rather than finding new solver modules.
- Bounded gaps: yes. Unknowns remain about possible untracked/local files outside the repo, but inside this repo the relevant gap is bounded.

## Structural Map

### Territory Overview

| Region | What It Contains | ARC Fit |
|---|---|---|
| `homegrown/` | Thinking disciplines and loop runners | Useful as reasoning architecture, not execution solver |
| `enes/` | Autonomous cognition, intuition, quality awareness | Conceptually relevant to abstraction/generalization; not competition code |
| `thinking_disciplines/` | Discipline theory | Useful for designing solver workflow |
| `devdocs/inquiries/` | Prior loop artifacts | Useful as process memory and diagnostic corpus |
| `src/book/` | Documentation | Not solver-relevant |
| executable source | Installer scripts only | Insufficient for ARC submission |

### Inventory of Missing ARC Solver Components

- ARC JSON loader.
- Grid representation and visualization helpers.
- Object segmentation.
- Color and geometry primitives.
- Transformation DSL.
- Candidate generator/search.
- Train-pair verifier.
- Test output generator.
- Two-attempt ranking.
- Evaluation harness.
- Submission writer.
- Runtime/packaging for notebook rerun.
- Corpus of solved task abstractions.
- Failure taxonomy tied to actual ARC attempts.

### Signal Log

- Probed: repo architecture, ARC requirement shape, alignment/misalignment, use modes, hidden executable infrastructure.
- Deferred: current leaderboard-specific techniques and external ARC solver literature.

### Confidence Map

| Claim | Confidence |
|---|---|
| Current repo is not an ARC competition solver | confirmed |
| Current repo can help design and diagnose an ARC solver | confirmed |
| Current repo alone would be competitive | confirmed absent / very unlikely |
| `/intuit`-style structural analogy could be relevant to ARC | inferred |
| Homegrown can become an ARC research harness with significant new code | scanned, plausible |

## Gaps and Recommendations for Next Discipline

Sensemaking should decide the main interpretation of "good for this competition": good as a direct submission system, good as a solver-design methodology, or good as a research scaffold for building an ARC solver.
