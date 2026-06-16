---
status: active
source: devdocs/inquiries/2026-06-10_12-25__gradient_descent_dynamics_vs_thinking_space_traversal/finding.md (as corrected by devdocs/inquiries/2026-06-10_13-06__reasoning_as_pre_step_evaluation_gradient_objection/finding.md)
---
# The Algorithm Family of Thinking-Space Traversal

**What this document settles:** which optimization family the project's traversal loop actually belongs to, what that membership licenses (tool and vocabulary imports), and what it forbids (theorem transfer). It exists so other canon documents can reference the family classification without re-deriving it.

## The verdict (one sentence)

**Thinking-space traversal is derivative-free, estimate-guided search on a non-stationary landscape under expensive, noisy evaluation, run by a self-modifying optimizer that rebuilds its fitness function per problem** — the evolutionary / Bayesian-optimization / bandit family, NOT gradient descent.

The teaching form, one breath: *"It's population-based, black-box search over an unmapped, shifting space — expensive noisy evaluations, no gradients, a fitness function rebuilt per problem, and an optimizer that edits itself between runs."*

## Why gradient descent specifically fails (the assumption table)

| Gradient descent assumes | The loop actually has | Verdict |
|---|---|---|
| A scalar, differentiable objective | A goal plus five deliberately-fuzzy quality signals (`docs/canon/what_is_meaningful_traversal.md`) — a shifting multi-objective | **fails** |
| A gradient oracle (exact local slope of the objective, before stepping) | **Estimates before — fallible, uncalibrated; verification after.** Pre-step direction exists in two forms — a proposal-prior (routelister's typed, scored routes) and reasoned lookahead ("X makes sense because of logic" — surrogate value-estimation). A prior proposes and an estimate guesses; a gradient differentiates the true objective. True evaluation arrives only after execution (run the probe, then critique judges it) | **fails** — but see the spectrum below: the estimates are the family's own equipment |
| Cheap, low-noise evaluations | Tens of minutes per full evaluation, judged by an LLM (noisy) — the conditions Bayesian optimization and bandit methods were built for | **fails** |
| A stationary landscape | Findings rewrite the territory; the map is built by traversing it (explfine's defining property) | **fails** — an online / non-stationary setting |
| Continuous vector steps | Discrete, structured, semantic moves (routes, disciplines, the closed seven-move loop-control vocabulary) | **fails** — combinatorial / structured search |

## The spectrum (replaces any binary framing)

Methods differ by **how much pre-step directional information they have, and how trustworthy it is**:

| Band | Pre-step directional information | Example methods |
|---|---|---|
| 1 | Exact derivatives of the true objective | gradient descent, backpropagation |
| 2 | Sample-estimated pseudo-gradients | SPSA, evolution strategies |
| 3 | **Learned value/surrogate estimates over discrete candidates** | Bayesian optimization (surrogate + acquisition), MCTS value networks, chess evaluation functions — **this loop's primary band** (with band-2-flavored moments when neighboring estimates are explicitly compared) |
| 4 | None (blind variation) | pure random search |

**The pre-step evaluation clarification** (the most common objection, answered): "the system can reason that action X makes sense BEFORE taking it — isn't that a gradient?" Pre-step evaluation is a *genus*; computing exact derivatives is one *species* of it. Chess engines evaluate millions of positions before moving and are not gradient methods — they are search-plus-evaluation. Reasoned evaluation is the OTHER species: a **fallible estimate from a learned model of goodness**, needing post-hoc verification because the model of goodness is not the true objective. Same JOB (cheap direction-choice before expensive commitment), different INSTRUMENT (estimate, not derivative) — the job-match is why the optimization family fits; the instrument-difference is why gradient descent doesn't. (Note the engines also demonstrate the second key distinction: their evaluators were *trained* by gradient descent, but *running* the engine is not gradient descent — **built-by is not runs-as**.)

**The levels (where gradients actually live):** *training-time* — literal gradient descent carved the model's path bias (`docs/canon/The_Traversal_Thesis.md`); *inference-time* — the network executes the trained function; no objective is being descended while answering; *traversal-layer* — no differentiable objective exists: finding-quality has no backpropagation path into route-choice. Beneath the Traversal Thesis's grain-1 (the token-path within a call) sits **grain-0**: the substrate's continuous similarity-geometry, where the path-bias layers physically act and where the intuition-similarity primitive lives (`docs/canon/thinking_space_dynamics.md`). Grain-0 is an inferred level, not an instrumented one.

## The correspondence map (graded)

Legend: **holds** (mechanism corresponds) · **partial** (loose correspondence) · **teaching** (metaphor only) · **(vocabulary)** (a name-transfer organizing existing practice).

| Optimization concept | Traversal counterpart | Grade |
|---|---|---|
| Step size / learning rate | Inquiry scope / route grain (too big = shallow sweep; too small = spinning) | holds |
| Trust-region methods | Adaptive scope on expectation-vs-result agreement | partial |
| Early stopping / patience | Stop-judgment + budget caps; dry-spell counters | holds |
| Restarts | The different-approach loop-control move (a restart with a new framing) | holds |
| Local minimum | The stuck or comfortable inquiry; the over-polished loop (self-space) | holds |
| Saddle / plateau | The stalled-ambiguity state sense-making's collapses break | partial |
| Annealing / schedules | The pipeline's built-in cooling (articulation hot → critique cold) | partial |
| Momentum | Continuation chains; the standing concept-map | teaching |
| **Surrogate models / value functions** | **Reasoned pre-step assessment** — discipline-internal lookahead and route-judgment; real, fallible, currently uncalibrated (the Predictive quality layer in embryo; the Selector agreement-gate is its calibration program; the outcome slot its verification record) | holds |
| Overfitting | **Spec-overfit** — tuning discipline specs to cataloged past failures (countermeasure: the held-out practice) | holds |
| Exploration–exploitation | Widen-vs-deepen (problem-space); climb-vs-polish (self-space — the Allocation Rule) | holds (vocabulary) |
| Batch vs stochastic evaluation | Full-territory surfacing vs sampled probes | partial |
| Convexity | Task classes where greedy suffices (predicted no-help class for the loop) | partial |
| Population | Multihead (the L4 parallel worker sessions) | holds |
| Mutation / variation operators | The innovate discipline's structured mechanism-variations — operator-based, never raw noise | holds |
| Crossover | The merge move; branch-and-synthesize patterns | partial |
| Selection pressure | Critique verdicts ("verdicts ARE the selection pressure") | holds |
| Elitism | Findings and canon as the kept-survivor archive | holds |
| Fitness function | **Per-problem construction** — critique derives evaluation dimensions from each problem (the loop's distinctive feature; cousins exist, e.g. task-conditioned objectives) | holds |
| Warm start | The navigation session's warming protocol (the corpus independently chose the same word) | holds |
| Curriculum | explfine's staged resolution | partial |
| Hyperparameters (with defaults) | Canon's placeholder numbers — "committed shape, placeholder values," each graduating when its recorded data exists | holds (vocabulary) |
| Landscape ruggedness | What decomposition's coupling map measures (coupling-dense problems defeat greedy approaches — supports decompose-before-innovate ordering) | partial (most speculative) |

## What the membership licenses (the imports)

Six imports, each landing in a planned artifact: a **restart budget** (an input to the stop-judgment specification, placeholder now, estimated later from recorded restart-vs-persist statistics); a **diversity-preservation requirement** (the future Evaluator's design must not promote-best-and-kill-rest); the **overfitting guard** (a held-out practice for spec-tuning, activating at the first observation-data-justified spec revision); **schedule/annealing vocabulary** (recorded for the orchestrator's future process-layer — explicitly not yet policy); **exploration–exploitation naming** (for the committed widen-vs-deepen and climb-vs-polish policies); and the **hyperparameter-with-default naming** for the placeholder-numbers practice. Each import carries a mis-set failure mode in its source analysis; none adds a loop-control move (the seven-move vocabulary stays closed).

## What the membership forbids (the no-import rule)

Broken assumptions ⇒ no theorem transfer: **no convergence guarantees** (no stationary scalar objective), **no quantitative learning-rate/schedule theory**, **no gradient mechanics as imported machinery** (momentum survives only as teaching), **no convexity analysis**. Vocabulary and heuristics transfer; theorems never. This restraint is also why the deliberate fuzziness of `docs/canon/what_is_meaningful_traversal.md` is correct: multi-objective, non-stationary problems lack clean scalar objectives in the optimization literature too — the fuzziness is a property of the problem class.

## The classification's own falsifier

If a **validated** scalar objective ever exists — a reward model demonstrated to reliably rank finding quality against human judgment (the Retrospective-quality-layer milestone) — gradient-family tools partially re-enter and this classification revises. Verdict counts and signal scores do NOT qualify; the bar is validation, not numerification.

## Canon cross-references

`docs/canon/The_Traversal_Thesis.md` (path bias; the two-grain mechanism this family classification wraps) · `docs/canon/sustained_traversal_loop_of_loops.md` (the loop the classification describes) · `docs/canon/what_is_meaningful_traversal.md` (the stop-signals; externally supported by this doc's no-import rule) · `docs/canon/thinking_space_dynamics.md` (the substrate; grain-0).
