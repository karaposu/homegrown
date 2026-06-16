---
status: active
model: claude-fable-5[1m]
effort: max
impacted_by: devdocs/inquiries/2026-06-10_13-06__reasoning_as_pre_step_evaluation_gradient_objection/finding.md
---
# Finding: Thinking-Space Traversal Is Derivative-Free Optimization — the Graded Map, the Corrected Label, and Six Imports

## Question

From `_branch.md`: is there a correlation between gradient-descent algorithms — local/global minima and so on — and traversing thinking space? The user senses similar dynamics and names three: **the resolution of the step matters, the duration of the traversal matters, genetic-algorithm-like randomization matters…** (the trailing ellipsis inviting more). Dive deep.

**Goal:** the correspondence map with per-pairing validity grades + the overall verdict + concrete harvested imports + the honest disanalogies — failing if it's mapping-poetry without grades and imports, or if it re-derives the already-canonized search-over-priors framing as new.

## Finding Summary

- **Yes — and the correlation is family-membership, not metaphor.** Thinking-space traversal is **derivative-free, non-stationary, expensive-noisy-evaluation, self-modifying optimization with per-problem fitness construction.** That classification is adjudicated on a checkable assumption table, and it generates falsifiable consequences in both directions: which tools transfer (the import list) and which never will (the no-import list).
- **Gradient descent specifically is the wrong cousin.** Its three defining assumptions each fail against committed canon properties: there is no scalar differentiable objective (goals + five deliberately-fuzzy signals form a shifting multi-objective); there is no gradient oracle — pre-step direction comes from a **policy-prior proposal generator** (routelister) and **reasoned lookahead** (surrogate value-estimation), which propose and guess rather than differentiate, with true evaluation arriving only after execution *(clause widened by corrigendum 2026-06-10)*; and the landscape is not stationary (every finding rewrites the territory; the map is built by traversing).
- **Your instinct was right twice.** The genetic-algorithm clause named the correct family half — population ↔ multihead, mutation ↔ the innovate discipline's structured variations, selection ↔ critique verdicts (canon says it verbatim), inheritance ↔ Baldwin encoding, which was *already named from evolutionary theory*. And all three seeds are real machinery: **step resolution** ↔ inquiry scope/route grain (with both-sided failure handling, and trust-region methods as its full development: the resolution ADAPTS on expectation-vs-result agreement); **duration** ↔ budget caps + the productivity signal + early-stopping-shaped stop-judgment; **randomization** ↔ structured, operator-based variation — never raw noise, which makes the GA mapping MORE apt.
- **The strongest evidence the fit is real rather than imposed: the corpus independently invented the family's vocabulary twice.** The navigation session's "warming" IS warm-start initialization (same word, same function, chosen before this analogy existed); "verdicts ARE the selection pressure" was already canon verbatim.
- **The harvest: six imports, each with a landing site and its own mis-set failure mode.** Three change planned artifacts (a restart budget into the stop-judgment spec; a diversity-preservation requirement into the future Evaluator's design brief; the **overfitting** name + a held-out guard into spec-tuning practice — activating at a named trigger: the first spec revision justified by observation data). Two are honest vocabulary (schedule/annealing language — explicitly NOT yet policy; exploration–exploitation as the formal name for widen-vs-deepen and climb-vs-polish). The sixth organizes existing practice: **canon's "committed shape, placeholder values" numbers ARE hyperparameters-with-defaults**, with a named lifecycle — default now, estimated from recorded turns later.
- **The fuzziness doctrine wins.** The resolution of the formalization question is **classification, not formula**: locating the problem family commits no scalar objective and no convergence math — and the optimization literature itself treats multi-objective, non-stationary problems as lacking clean scalar objectives, handing `what_is_meaningful_traversal.md`'s deliberate fuzziness an external justification.
- **The honest boundary:** no convergence theorems, no quantitative schedules, no gradient mechanics transfer — vocabulary and heuristics only. And the classification ships its own falsifier: if a **validated** scalar ever exists (a reward model shown to reliably rank finding quality — the Retrospective-RC milestone), gradient-family tools partially re-enter and this verdict revises.

## Finding

### 1. Where this sits

The Traversal Thesis committed the mechanism (within-call bounding by chosen bias; across-call selection-and-memory) and one optimization import already lives in canon (no-free-lunch; the search-over-priors precedent). This inquiry asks the natural next question: which optimization family does the loop actually belong to — and what does membership buy? The delta discipline applied: nothing already committed is re-derived; the result extends the thesis's frame with a classification, a graded map, and routed imports.

### 2. The verdict, with its evidence

**Thinking-space traversal is derivative-free, non-stationary, expensive-noisy-evaluation, self-modifying optimization with per-problem fitness construction.**

The assumption table (the grading criterion for everything below):

| Gradient descent assumes | The loop actually has | Verdict |
|---|---|---|
| A scalar, differentiable objective | A goal plus five deliberately-fuzzy signals (coverage, convergence, productivity, directedness, depth) — a shifting multi-objective `[canon: what_is_meaningful_traversal.md]` | **fails** |
| A gradient oracle (local slope before stepping) | **Estimates before — fallible, uncalibrated; verification after.** Pre-step directional information exists in TWO forms: a **policy-prior proposal generator** (routelister's typed, scored routes) and **reasoned lookahead** ("X makes sense because of logic" — surrogate value-estimation). A prior proposes and an estimate guesses; a gradient differentiates the true objective. True evaluation still arrives only AFTER execution (run the probe, then critique) `[canon: The_Traversal_Thesis.md claim 3; corrigendum 2026-06-10]` | **fails** (no exact derivative of the true objective exists; the pre-step estimates are band-3 equipment — see the spectrum note below) |
| Cheap, low-noise evaluations | ~28 minutes per full evaluation `[repo-fact: History timestamps]`, judged by an LLM (noisy) | **fails** — this is Bayesian-optimization/bandit territory: methods built FOR expensive, noisy, gradient-free settings |
| A stationary landscape | Findings rewrite the territory; explfine builds the map it navigates `[canon: SUSTRALL]` | **fails** — online/non-stationary setting |
| Continuous vector steps | Discrete, structured, semantic moves (routes, disciplines, the closed 7-move vocabulary) | **fails** — combinatorial/structured search |

Every failed assumption is a failed *gradient-descent* assumption — and a MATCHED assumption of the **derivative-free family** (evolutionary strategies, Bayesian optimization, bandits, simulated annealing), which is built precisely for: no gradients, expensive noisy evaluations, structured moves. One distinctive feature against textbook genetic algorithms (cousins exist — task-conditioned objectives): **the fitness function is constructed per problem** — the critique discipline's Phase 0 derives evaluation dimensions from each problem rather than reusing a fixed fitness. The loop is an optimizer that rebuilds its objective for every goal and (via Baldwin spec-edits) edits its own optimizer.

One teaching note on direction: numeric optimization is the best-mapped *province* of the wider territory of walks-through-solution-spaces; this finding claims shared operating conditions (which is what licenses tool transfer), not a settled subsumption in either direction.

**Spectrum note (corrigendum 2026-06-10).** Early phrasings of this verdict used a binary — "slope-readers vs trial-and-selectors" — which the user's objection correctly broke: it hid the middle bands. The honest scale is a **spectrum of pre-step directional information**: **(1)** exact derivatives of the true objective — gradient descent; **(2)** sample-estimated pseudo-gradients — SPSA, evolution strategies; **(3)** **learned value/surrogate estimates over discrete candidates** — Bayesian optimization, MCTS value networks, chess evaluation functions, **and this loop** (its primary band, with band-2-flavored moments when neighboring estimates are explicitly compared); **(4)** blind variation. *Grain-0 note:* beneath the Traversal Thesis's grain-1 (the token-path within a call) sits the substrate's continuous similarity-geometry — where the path-bias layers physically act and where canon's intuition-similarity primitive lives (`docs/canon/thinking_space_dynamics.md`). Grain-0 is an INFERRED level (the loop has no activation access), and no traversal-layer gradient lifts from it: finding-quality has no backpropagation path into route-choice.

### 3. The graded correspondence map

Legend: **holds** (mechanism corresponds) · **partial** (loose mechanism correspondence) · **teaching** (metaphor only — imports nothing) · **(vocabulary)** (a name-transfer that organizes existing practice). Every row carries a consequence; ornamental pairings were cut by rule.

| Optimization concept | Traversal counterpart | Grade | Consequence |
|---|---|---|---|
| **Step size / learning rate** | **Inquiry scope / route grain** *(seed 1)* — too big = shallow sweeping (caught by the scope-check); too small = spinning (caught by iterate-with-refined-focus + the productivity signal) | **holds** | the seed vindicated; both failure directions already have machinery |
| **Trust-region methods** | Adaptive scope: expand/contract the step's region on expectation-vs-result agreement — the scope-check + refined-focus iteration is a trust-region update in prose | **partial** | seed 1's full development: resolution is not just chosen, it ADAPTS |
| **Early stopping / patience** | **Stop-judgment + budget caps** *(seed 2)*; dry-spell counters are the patience parameter | **holds** | duration vindicated; the stop-judgment spec is the landing site for the restart budget |
| **Restarts (escaping local minima)** | The **different-approach** loop-control move — a restart with a new framing | **holds** | the restart-budget import (below) |
| **Local minimum** | The stuck/comfortable inquiry; at the self-space level, the over-polished loop (the allocation finding's own "local maximum fear") | **holds** | the vocabulary now spans both spaces |
| **Saddle points / plateaus** | The stalled-ambiguity state sensemaking's collapses exist to break | **partial** | locates sensemaking's role in optimization terms |
| **Annealing / schedules** | The articulated pipeline's built-in cooling: articulation preserves openness (hot) → critique kills (cooled) | **partial** | the schedule vocabulary import (gated) |
| **Momentum** | CONTINUES-FROM chains; the standing concept-map | **teaching** | imports nothing; a metaphor for explaining persistence of direction |
| **Overfitting** | **Spec-overfit**: tuning discipline specs to cataloged past failures until they fit history, not cognition — currently UNNAMED in canon, with no regression test | **holds** | the held-out guard import (below); timely — data-driven tuning starts now |
| **Exploration–exploitation** | Widen-vs-deepen (problem-space); climb-vs-polish (self-space — the allocation rule) | **holds (vocabulary)** | the formal name for two committed policies |
| **Batch vs stochastic evaluation** | Full-territory surfacing vs sampled probes | **partial** | names an existing choice surfacing already makes |
| **Convexity** | Task classes where greedy suffices (pure retrieval — the Bias Atlas's predicted no-help class) | **partial** | independently predicts where the loop should NOT help |
| **Population** | **Multihead** (the L4 parallel worker sessions) *(seed 3's family)* | **holds** | the diversity-requirement import (below) |
| **Mutation / variation operators** | The innovate discipline's structured 7-mechanisms × 3-variants — operator-based, labeled, **never raw noise** *(seed 3)* | **holds** | randomization vindicated, with the structured-variation nuance strengthening the GA mapping |
| **Crossover** | The merge move; branch-and-synthesize traversal patterns | **partial** | locates merge in family terms |
| **Selection pressure** | Critique verdicts — *canon verbatim: "verdicts ARE the selection pressure"* | **holds** | independent-convergence evidence (the corpus said it first) |
| **Elitism** | Findings and canon as the kept-survivor archive | **holds** | names the archive's function |
| **Fitness function** | **Per-problem construction** — critique Phase 0 derives dimensions from each problem | **holds** (distinctive) | the loop's non-standard feature, stated |
| **Warm start** | The navigation session's **warming** protocol — *the corpus independently chose the same word* | **holds** | independent-convergence evidence #2 |
| **Surrogate models / value functions** (evaluate candidates on a learned model BEFORE expensive true evaluation — Bayesian optimization's acquisition step; MCTS value networks; chess evaluation functions) | **Reasoned pre-step assessment** — discipline-internal lookahead and route-judgment ("X makes sense because…"); real, fallible, currently uncalibrated *(row added by corrigendum 2026-06-10, prompted by user objection)* | **holds** | the loop's estimates are the Predictive RC in embryo; the Selector agreement-gate is their calibration program; the outcome slot is their verification record — qualifier updates when agreement data exists |
| **Curriculum** | explfine's staged resolution (~10 → 50–100 → ~200 concepts) | **partial** | names the staging's function |
| **Hyperparameters (with defaults)** | **Canon's placeholder numbers** — "committed shape, placeholder values" (≥10 maps; ≥80% agreement; ~5-inquiry cadence; restart budgets) | **holds (vocabulary)** | the hyperparameter reframe: each placeholder has a lifecycle — default now, estimated from recorded turns later |
| **Landscape ruggedness** | What decomposition's coupling map measures — coupling-dense problems defeat greedy approaches | **partial** *(most speculative row)* | retro-validates the pipeline's decompose-before-innovate ordering |

### 4. The six imports (each ≤3 sentences; landing site; mis-set failure mode)

1. **Restart budget** → the stop-judgment v1 spec (an input beside the budget cap): the different-approach move is a budgeted resource — max re-framings per goal, placeholder value now, estimated later from recorded restart-vs-persist statistics in traversal memory. *Mis-set:* too low kills legitimate re-framings; the placeholder errs generous. *(Parameterizes WHEN an existing move fires; adds no move — the closed-vocabulary audit, visible.)*
2. **Diversity-preservation requirement** → the future Evaluator design brief: the Evaluator must include an explicit diversity-preservation policy — best-only promotion collapses a population (genetic-algorithm practice's oldest lesson). The condition's form belongs to that inquiry. *Mis-set:* unconditional diversity keeps garbage heads alive.
3. **The overfitting guard** → spec-tuning practice: name the risk (spec-overfit) and adopt the held-out shape — tasks/inquiries not consulted when revising specs (the canary snapshots and the baseline program's task split are its existing two-thirds). *Activation trigger, named:* the first spec revision justified by observation-stream data. *Mis-set:* a too-strict rule starves tuning of its little data.
4. **Schedule/annealing vocabulary** → the orchestrator's future process-layer, **explicitly not-yet-policy**: "early turns favor widen-type routes, late turns favor deepen/terminate" is recorded as that inquiry's input; today's selection stays human-judged per turn. *Mis-set:* premature schedule-following replaces judgment with ritual.
5. **Exploration–exploitation naming** → the allocation rule and widen-vs-deepen — vocabulary only, flagged as such. *Mis-set:* treating the name as if it imported bandit math (it doesn't, absent the scalar).
6. **Hyperparameter-with-default naming** → the placeholder-numbers practice across SUSTRALL canon, the ladder, and the allocation finding — vocabulary that ORGANIZES: it explains why the practice is methodologically sound and names each value's graduation condition (the relevant recorded data existing). *Mis-set:* mistaking the name for permission to tune values without the data.

### 5. The boundaries

**The teaching sentence (one breath, ML-native):** *"It's population-based, black-box search over an unmapped, shifting space — expensive noisy evaluations, no gradients, a fitness function rebuilt per problem, and an optimizer that edits itself between runs."*

**The no-import list, with its generation rule** (broken assumptions ⇒ no theorem transfer): convergence guarantees (no stationary scalar); quantitative learning-rate/schedule theory; gradient mechanics (momentum survives only as teaching); convexity analysis. Vocabulary and heuristics transfer; theorems never.

**The verification additions** (training-knowledge anchors for the Verification Sheet, joining the two prior findings' lists): derivative-free/black-box optimization as a field; Bayesian optimization and bandits (expensive-noisy-eval methods); simulated annealing; genetic-algorithm canon (population/selection/diversity lessons); online/non-stationary optimization.

**The classification's own falsifier:** if a **validated** scalar objective ever exists — a reward model demonstrated to reliably rank finding quality against human judgment (precisely the Retrospective-RC milestone) — gradient-family tools partially re-enter and this verdict revises. Verdict counts and signal scores do NOT qualify; the bar is validation, not numerification.

## Inherited Commitments Re-test

The `_branch.md` declared a Synthesis Trigger over five priors:

- **Commitment:** the Traversal Thesis's two-grain mechanism and the search-over-priors precedent.
  - **Source:** `docs/canon/The_Traversal_Thesis.md`, claim 3.
  - **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the family classification wraps the committed mechanism without touching it — and the critique's strongest catch (the gradient-row rewrite) RESTS on it: routelister's pre-step directional information is adjudicated as a policy-prior, the thesis's own structure, not a gradient. The classification gives the committed mechanism its family name.

- **Commitment:** bound–select–remember + the no-free-lunch import.
  - **Source:** the metacognition finding (`devdocs/inquiries/2026-06-10_11-47__metacognition_theory_approximation_precision_over_scale/finding.md`).
  - **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the selection verb is the map's evolutionary half (verdicts-as-selection, canon verbatim); the bounding verb's NFL grounding is presupposed, not re-imported; nothing here revises the three-verb mechanism.

- **Commitment:** meaningful traversal is deliberately fuzzy; premature formalization is itself a failure mode.
  - **Source:** `docs/canon/what_is_meaningful_traversal.md`.
  - **Re-test status:** RE-TESTED — commitment confirmed, with new external support. **Evidence:** the formalization endpoint resolved as classification-not-formula — no scalar, no thresholds, no convergence claims entered; and the optimization literature's own treatment of multi-objective non-stationary problems (no clean scalar objectives there either) gives the doctrine a justification it previously asserted from inside. The temperature-telemetry idea was killed on exactly this commitment.

- **Commitment:** the 7 loop-control moves are a CLOSED, decided vocabulary.
  - **Source:** `docs/canon/sustained_traversal_loop_of_loops.md` + the one-enumerator/two-controllers finding.
  - **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the import audit ran item-by-item: every import parameterizes WHEN existing moves fire (restart budgets, schedules) or constrains future designs (diversity) — none adds a move; the restart import carries the audit visibly in its own text.

- **Commitment:** the thinking-space substrate model.
  - **Source:** `docs/canon/thinking_space_dynamics.md`.
  - **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** the non-stationarity row states an honest property OF the committed space (the map is built by traversing — SUSTRALL's own explfine definition), revising nothing.

Pattern-note per the protocol's soft signal: five confirmations — and the frame-pressure again landed inside the inquiry rather than on its inheritance (the user's own headline label was corrected; the map's strongest row was rewritten by its own prosecution; the map's newest row had the inclusion criterion enforced against it).

## Next Actions

### MUST

None. The finding is definitional; its imports are riders on already-planned artifacts.

### COULD

- **What:** Add the five new external anchors to the **Verification Sheet** (the consolidation already proposed in the metacognition finding's Next Actions).
  **Who:** the same one session that builds the Sheet.
  **Gate:** condition-bound — before any canon attachment that cites them.
  **Why:** three findings now share one verification gate; this finding adds its anchors to the existing list rather than minting a new gate.

- **What:** Carry the three content-changing imports as **notes-to-carry** on their landing artifacts: the restart-budget input → noted for the stop-judgment v1 spec; the diversity-preservation requirement → noted for the Evaluator design brief; the held-out guard + its activation trigger → noted for the spec-tuning practice.
  **Who:** whoever authors each artifact (all three are already on `devdocs/next_steps_for_sustrall.md`).
  **Gate:** observable — when each artifact is authored.
  **Why:** the imports' value realizes at authoring time; carrying them as notes prevents re-derivation.

### DEFERRED

- **What:** The schedule heuristic (early-widen / late-deepen) as orchestrator policy.
  **Gate:** revival trigger — the orchestrator decision-rules inquiry (Tier 3 of the SUSTRALL worklist), which derives policy from recorded turns.
  **Why (if revived):** a schedule adopted before recorded-turn data exists would be ritual, not policy — the not-yet-policy mark holds until then.

- **What:** The family-classification sentence as a one-line addition to the (already-gated) Traversal Thesis extension.
  **Gate:** condition-bound — rides the metacognition finding's staged attachment, behind the same verification spot-check.
  **Why (if revived):** the thesis's mechanism gains its family name in canon with zero new gates.

## Reasoning

**Why family-membership beat both "isomorphism" and "just metaphor."** Isomorphism dies on the no-import list (no scalar ⇒ no convergence theorems — a true isomorphism would carry them). "Just metaphor" dies on three structural facts: the assumption table is checkable point-by-point against the loop's mechanics; the classification generates falsifiable consequences in both directions (imports AND prohibitions); and the corpus independently invented the family's vocabulary twice (warming = warm-start; verdicts-as-selection verbatim) — imposed analogies don't get reinvented from the inside.

**The critique's strongest catch — the gradient row rewritten by its own prosecution.** As drafted, "no gradient oracle" was attackable: the system demonstrably produces scored directional information before stepping (routelister). The adjudication: a **prior proposes; a gradient differentiates** — routelister is a policy-prior proposal generator, which is the Traversal Thesis's own committed structure (the AlphaGo shape: policy prior + search + evaluator). The rewritten row is stronger than the original: it explains where direction comes from in a gradient-free system instead of denying direction exists.

**Why the GD label was corrected rather than kept.** Keeping the user's headline label would have made the finding's own assumption table contradict its title — all three of gradient descent's defining assumptions fail against committed canon properties. The correction credits the user's seeds: the GA clause and all three felt dynamics pointed at the right family; gradient descent was the most famous name in the neighborhood.

**Significant kills.** *The temperature telemetry field* — formula creep wearing vocabulary's clothes; killed on the anti-formalization commitment. *The standing reference-card artifact* — no consumer; accretion. *The maximal map* — ornamental rows dilute; the inclusion criterion (grade + justification + consequence per row) was kept and then enforced against the inquiry's own newest row (ruggedness had to state its consequence — the retro-validation of decompose-before-innovate — or be cut).

**Self-reference handling.** The loop classified itself as an optimizer — and the classification's consequences cut against self-flattery: it forbids the project its own convergence claims, ships a falsifier with a deliberately high bar (a validated scalar, not any metric), and grades several of its own pairings as teaching-only or partial. Grounding: the loop's checkable mechanics (what routelister outputs; what runs cost), canon verbatim, and the enforcement of the map's own criterion against its own rows.

## Open Questions

### Monitoring

- **Do the notes-to-carry actually get carried?** Observable: when the stop-judgment spec, the Evaluator brief, and the first data-driven spec revision are authored, do they contain the restart budget, the diversity requirement, and the held-out rule?
- **Does the teaching sentence land with ML-literate outsiders?** Observable: next external explanation of the project.

### Blocked

- **The imports' empirical value** — blocked until the artifacts they land in exist and run.
- **The hyperparameter graduations** — each placeholder's estimation is blocked on its specific recorded data (restart statistics; agreement rates; consultation history).

### Research Frontiers

- **The ruggedness row** (most speculative): whether decomposition's coupling map genuinely functions as a landscape-ruggedness probe — and whether coupling-density could someday PREDICT which problems need the full loop vs a single pass.

### Refinement Triggers

- **A validated scalar appears** (a reward model reliably ranking finding quality — the Retrospective-RC milestone): gradient-family tools partially re-enter; this verdict revises. Verdict counts and signal scores do not qualify.
- **A verification anchor fails** its spot-check: the affected rows/imports re-open (the claims may stand on mechanics; the citations may not).
- **The schedule heuristic's gate opens** (the orchestrator inquiry): the not-yet-policy mark converts to a policy question with recorded-turn data.

## Corrigendum (2026-06-10)

**Trigger:** user objection — "reasoning evaluates actions before taking them: isn't that slope calculation? And LLMs choose by vector-space similarity." **Adjudication:** `devdocs/inquiries/2026-06-10_13-06__reasoning_as_pre_step_evaluation_gradient_objection/finding.md` (verdict: affirmed as modified — the family classification stands; the framing and one row are corrected). **Changes applied, with before-texts:**

1. **Gradient-oracle row** (assumption table) — before: *"Judgment AFTER execution (run the probe, then critique). Pre-step directional information exists — but as a policy-prior proposal generator (routelister's typed, scored routes): a prior proposes; a gradient differentiates. This is the committed search-over-priors structure, not an oracle"* — after: the estimate-clause added ("estimates before — fallible, uncalibrated; verification after") and reasoned lookahead named beside the proposal-prior.
2. **New map row added** — surrogate models / value functions ↔ reasoned pre-step assessment (holds; Predictive-RC-in-embryo consequence). The map previously had no row for this mechanism.
3. **Spectrum + grain-0 note added** (verdict section) — the binary "slope-readers vs trial-and-selectors" phrasing is retired; the four-band spectrum replaces it; grain-0 (the substrate's similarity-geometry) added beneath the thesis's grain-1, marked inferred-not-instrumented.
4. **Summary bullet widened** — before: *"…the directional information that DOES exist pre-step is a policy-prior proposal generator (routelister), which proposes rather than differentiates — exactly the search-over-priors structure already in canon"* — after: reasoned lookahead named beside the prior; "propose and guess rather than differentiate."
5. **Frontmatter** — `impacted_by:` linkage to the adjudication inquiry added.

All changes reversible via the before-texts above. Mechanics outcome-neutral: a future objection that breaks (rather than refines) a verdict uses this same route with "superseded" in the log.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i am thinking if there is a correlation between gradiant descend algorithms, local gloabal minimum etc and traversing thinking space. they have similar dynamics, 

resolution of step matters, duration of traversal matters, genetic algorithm like randomisation matters... 


lets dive deep into this
```

</details>
