---
status: active
---
# Finding: ARC-AGI Competition Fit

## Question

Is the Homegrown codebase, as currently built, a good fit for solving the ARC-AGI abstract reasoning competition described by the user?

The goal is to decide whether to aim this codebase at ARC-AGI, what parts are genuinely useful, what parts are missing, and what build path would be required to make it competitive.

## Finding Summary

- The current repository is not a competition-ready ARC-AGI solver. It has no visible ARC JSON loader, grid transform engine, search system, exact verifier, two-trial ranker, evaluation harness, or submission writer.

- The current repository is a good conceptual fit for ARC-AGI's spirit: abstraction, decomposition, analogy, candidate generation, critique, and failure learning. That is not the same as being a good implementation fit for the competition.

- The right architecture is two-layer: an executable ARC engine produces and verifies exact grids; Homegrown acts as the meta-layer that designs, diagnoses, and improves that engine.

- The first serious ARC milestone should be a minimal executable harness: load ARC files, represent grids, run simple transform candidates, verify train pairs exactly, score locally, and write submission JSON.

- Homegrown becomes valuable after the solver emits traces. It can read failed-task batches, diagnose missing primitives or bad search behavior, and propose solver changes that are measured against a fixed validation set.

- Do not use MVL+ directly as the competition algorithm. Natural-language reasoning should never bypass exact verification because ARC gives zero credit for almost-correct grids.

## Finding

The honest answer is: **not as-is, but yes as a scaffold if we build the missing solver layer.**

ARC-AGI requires an algorithm that infers transformations from a few train input/output grids and produces exact output grids for unseen test inputs. The competition mechanics matter. A one-cell mismatch is wrong. The rerun environment expects executable prediction logic, not a reasoning document.

Homegrown, in its current repository shape, is a Markdown-native thinking system. Its active core is a set of AI skills and protocols: Exploration, Sensemaking, Decomposition, Innovation, Critique, Reflection, Navigation, MVL, and MVL+. The repository also contains architecture notes about intuition, quality awareness, and self-improving loops. That is valuable, but it is not an ARC solver.

The key distinction is layer separation.

The **ARC engine** must be executable. It needs JSON loading, grid representation, object extraction, color and geometry primitives, a candidate transformation language, bounded search, exact train-pair verification, output ranking, and submission generation.

The **Homegrown layer** can sit above that engine. It can inspect failures, propose new primitives, critique search strategies, build a corpus of solved and failed task patterns, and guide iterative solver improvement.

This makes ARC a strong benchmark track for Homegrown, but not an immediate leaderboard target. ARC is valuable because it gives objective feedback: either the grid matches or it does not. That makes it useful for testing whether Homegrown-guided changes actually improve a reasoning system. It should not become the whole identity of the project, and it should not be treated as proof of general cognition by itself.

The best path is staged:

1. Build a minimal ARC harness.
2. Add a small primitive transform library.
3. Add bounded candidate search and exact verification.
4. Emit structured traces for failed tasks.
5. Run Homegrown loops over failure batches.
6. Measure whether Homegrown-proposed changes improve local score.
7. Build an abstraction corpus and `/intuit`-style retrieval only after real traces exist.
8. Package for competition only after local validation shows nontrivial movement.

The highest-risk mistake would be using the current loop as a direct task solver: feed one ARC task to MVL+, get a plausible explanation, and trust the produced grid. That is not competition-grade. The loop can propose hypotheses, but executable code must verify them.

## Next Actions

### MUST

- **What:** Do not treat current Homegrown as an ARC competition submission.
  **Who:** Project direction / user decision.
  **Gate:** Applies immediately.
  **Why:** The repo lacks the executable exact-grid machinery ARC requires.

- **What:** If pursuing ARC, build a minimal executable ARC harness first.
  **Who:** New ARC-specific code area, likely separate from `homegrown/`.
  **Gate:** Before any Homegrown-based ARC claims.
  **Why:** Scoring and exact verification are the grounding signal.

- **What:** Keep Homegrown at the meta-layer.
  **Who:** ARC architecture design.
  **Gate:** Every Homegrown-generated ARC hypothesis must become executable code or a measured solver change before it counts.
  **Why:** Prevents polished reasoning from being confused with correct grids.

### COULD

- **What:** Add trace output for every failed task.
  **Who:** ARC harness.
  **Gate:** After baseline candidate search exists.
  **Why:** Gives MVL+ concrete artifacts to diagnose.

- **What:** Build an ARC failure taxonomy.
  **Who:** Homegrown diagnostic layer.
  **Gate:** After at least 20 failed task traces exist.
  **Why:** Turns repeated failures into solver-maintenance candidates.

### DEFERRED

- **What:** Build an ARC abstraction corpus for `/intuit`.
  **Gate:** Reopen after solved/failed task traces exist with measured outcomes.
  **Why (if revived):** Structural retrieval may help suggest transformation families, but abstractions need grounding in real solver results.

- **What:** Package for leaderboard submission.
  **Gate:** Reopen after local evaluation produces a nontrivial score and runtime is under control.
  **Why (if revived):** Competition operations are necessary later, but premature before the solver exists.

## Reasoning

The candidate "current Homegrown directly solves ARC tasks" was killed. It fails exact-output viability and automation. Homegrown currently produces Markdown reasoning artifacts, while ARC requires exact grids in a rerun environment.

The candidate "human-assisted ARC reasoning workbench" was refined. It is useful for learning patterns and designing primitives, but it cannot count as the competition algorithm because the human remains in the loop.

The candidate "minimal executable ARC harness" survived. It is not glamorous, but without it there is no measurement, no verifier, no local score, and no submission path.

The candidate "trace-emitting solver plus Homegrown diagnosis" survived. It uses Homegrown where it is strongest: converting measured failures into structured improvement proposals.

The candidate "ARC abstraction corpus for `/intuit`" was deferred. It is promising, but only after the project has real solved and failed task traces. A hand-written abstraction corpus without measured outcomes risks becoming another prose layer.

The candidate "competition-ready packaging now" was deferred. Packaging matters later, but doing it before a baseline solver would optimize the wrong thing.

The candidate "ARC as Homegrown thesis benchmark" survived with bounded claims. ARC can objectively test whether Homegrown-guided changes improve a solver, but it should not be treated as the whole project or as proof of consciousness.

## Open Questions

### Monitoring

- After the first ARC harness exists, track local score before and after each Homegrown-proposed solver change.

- After 20 failed task traces, check whether failure categories repeat enough to justify a stable taxonomy.

### Blocked

- Whether Homegrown improves ARC performance is blocked until an executable ARC harness exists.

- Whether `/intuit` helps ARC is blocked until there is a measured abstraction corpus.

### Research Frontiers

- What DSL and primitive set best covers ARC transformations without collapsing into memorized templates?

- How should a solver rank two allowed attempts when several train-consistent candidates remain?

### Refinement Triggers

- Reopen the competition-readiness verdict after the repo has a local ARC evaluator, baseline score, trace-emitting search, and at least one measured improvement cycle.
