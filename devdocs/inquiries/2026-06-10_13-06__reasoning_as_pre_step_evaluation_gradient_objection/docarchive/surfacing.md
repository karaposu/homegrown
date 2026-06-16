# Surfacing — Thin Artifact

## User Input

devdocs/inquiries/2026-06-10_13-06__reasoning_as_pre_step_evaluation_gradient_objection/_branch.md

## Mode + Entry Point

- **Mode:** DUAL — artifact case (the two challenged texts, distinguished word-by-word; the canon priors each objection touches) + possibility case (the mechanism-distinction space: value functions, surrogates, estimated gradients, training-vs-inference — training-knowledge, flagged).
- **Entry point:** signal-first (purpose: adjudicate the two objections; locate the error honestly on whichever side it sits).
- **Territory:** explicit-bounded — the challenged finding + the conversational summary + four Synthesis priors + the named mechanism space. Boundary-discovery: not fired.
- **Prior-workspace:** supplied (the challenged finding written ~40 minutes ago; all priors warm).

## Traversal Trace

| # | Region | Item identifiers | Relevance | Conf | Note |
|---|---|---|---|---|---|
| 1 | R1: the two challenged texts, distinguished | **The finding's actual row:** "Judgment AFTER execution (run the probe, then critique). Pre-step directional information exists — but as a policy-prior proposal generator (routelister's typed, scored routes): a prior proposes; a gradient differentiates." **The chat one-liner:** "Your loop cannot know if a step is good until after it takes it — that single fact disqualifies all gradient machinery." | core | HIGH | They differ materially. The chat line says CANNOT KNOW (false — the system can estimate); the finding already concedes pre-step directional information but models it ONLY as proposal-scoring — it has no row for *reasoned lookahead/value-estimation* ("thinking X makes sense because of logic"), which is a richer pre-step mechanism than route-scoring. Objection (a) lands SQUARELY on the chat line and PARTIALLY on the finding (a missing row, not a wrong verdict) |
| 2 | R2: objection (a)'s mechanism space — what pre-step evaluation IS in optimization terms | **Chess engines** (the killer anchor): minimax + evaluation functions assess millions of positions BEFORE moving — pre-step evaluation par excellence — and nobody classifies them as gradient methods; they are search + heuristic evaluation · **value functions / MCTS value networks + rollouts** (estimate a position's worth; simulate before acting) · **surrogate models in Bayesian optimization** — the derivative-free family's OWN core trick: evaluate candidates on a cheap model BEFORE the expensive true evaluation · **model-based lookahead / world models** (simulate, then act) · **estimated gradients** (finite differences, SPSA, evolution strategies — sample-based pseudo-gradients that blur the binary) · the distinction triple that decides the adjudication: (i) an **ESTIMATE** (fallible output of a learned model of goodness) vs a **DERIVATIVE** (exact local slope of the true objective, computed from its analytic form); (ii) **candidate-evaluation** (scoring discrete proposals) vs **direction-computation** (the steepest vector in a continuous space); (iii) **verification remains post-hoc** — the estimate must still be confirmed by running (the outcome slot exists precisely because estimates can be wrong) | core (training-knowledge; frames) | HIGH (as distinctions) | THE PIVOT: pre-step evaluation does not distinguish gradient descent from the derivative-free family — **the family's own modern core IS pre-step evaluation** (acquisition functions, value networks, rollouts). What distinguishes GD is exact derivatives of the true objective. The user's mechanism moves the loop DEEPER INTO the family, not out of it |
| 3 | R3: objection (b)'s level structure | **Training-time:** literal gradient descent on a literal loss — TRUE, and already canon (the path-bias stack's "post-training preference-shaping"; that is HOW path bias was carved) · **Inference-time:** embeddings, attention similarity, continuous geometry — but the network EXECUTES a learned function when answering; no objective is being descended at answer time (logits are a policy's output, not a loss being minimized) · **Traversal-layer:** route choice, finding quality — the finding's actual subject; no differentiable objective exists there (finding-quality cannot be backpropagated into route-choice) · **Canon agreement:** `thinking_space_dynamics.md` already models the substrate as a shared representation space with an **intuition-similarity primitive** — the user's substrate description AGREES with canon | core | HIGH | The substrate objection is TRUE at its level and the finding's claims live two levels up. The thesis's grain vocabulary (grain-1 token-path, grain-2 revolution-path) lacks the substrate level — **grain-0** — which the user is pointing at. An enrichment, not a contradiction |
| 4 | R4: where the user is RIGHT (the concession inventory) | (i) the chat one-liner OVERSTATED — "cannot know" is false; "cannot verify before, can estimate before — fallibly" is the truth · (ii) the map LACKS the surrogate/value-function row — reasoned pre-step evaluation is a real mechanism with a real family counterpart (a HOLDS row, missing) · (iii) the substrate IS continuous similarity-geometry (canon agrees; grain-0 absent from the level stack) · (iv) the binary framing (slope-readers vs trial-and-selectors) INVITED this objection — a spectrum (how much pre-step information, how trustworthy) is more accurate | core | HIGH | Four genuine concessions, each checkable. The user's "you are missing some underlying logic" is correct twice over: a missing map row and a missing level |
| 5 | R5: where the verdict still stands | (i) **estimate ≠ derivative** (the chess anchor; the distinction triple) · (ii) the system's own pre-step estimates are real but UNCALIBRATED — canon classifies exactly this capability as the unbuilt Predictive RC, and the Selector's agreement-gate is literally the calibration program for route-estimates; the loop's design already treats estimates as needing verification (the outcome slot) · (iii) inference-time similarity is function evaluation, not objective-descent · (iv) the economics are untouched: true evaluation remains post-hoc, expensive (~28 min), noisy — the Bayesian-opt/bandit conditions · (v) decisively: surrogates, value functions, and estimated gradients are all **family-internal equipment** — conceding them does not move the loop toward GD | core | HIGH | The verdict's surviving form: REFINED, not overturned — the family stays; the binary goes |
| 6 | R6: the finding-edit decision space | Options: (1) chat-only correction, no file edit — insufficient (the map genuinely lacks a row; the level stack lacks grain-0) · (2) **targeted refinement of the prior finding**: add the surrogate/value-estimation row (holds); add the grain-0 note; replace binary phrasing with the spectrum; record the objection as the trigger (the corpus's user-correction pattern: declared revision with source) · (3) full re-run of the correspondence inquiry — overkill (one row + one level + one phrasing) | core | MED-HIGH | Option 2 matches the corpus's refinement culture (Changes-from-Prior / impacted_by mechanics); the exact edit set is innovation's to draft |

## State Summary

**Territory echo:** the two challenged texts + four priors + the mechanism-distinction space.

**Purpose echo:** per-objection verdicts; the missing piece named; the family verdict's fate; the concrete finding-edit.

**Coverage map:**
| Region | Coverage | Aggregate relevance |
|---|---|---|
| R1 the two texts distinguished | confirmed (verbatim both) | core |
| R2 objection (a)'s mechanism space | candidate-generated (flagged frames) | core |
| R3 objection (b)'s level structure | confirmed (canon) + flagged frames | core |
| R4 the concession inventory | confirmed (checkable per item) | core |
| R5 the verdict's surviving grounds | confirmed + flagged frames | core |
| R6 the edit decision space | enumerated | core |

**Confirmed-absent:** the correspondence map has NO surrogate/value-function row (verified against the finding's table); the finding does NOT contain "cannot know until after" (chat-only phrasing — though the finding's "Judgment AFTER execution" opener is binary-flavored without the estimate clause); the thesis's grain stack has NO grain-0 (grains 1–2 only); the system's pre-step route-estimates have NO calibration record yet (the Selector gate is the designed program for exactly that).

**Concept-names list (provenance = region):** the two-targets distinction (R1) · the chess anchor (R2) · the distinction triple: estimate-vs-derivative / evaluation-vs-direction / verification-post-hoc (R2) · pre-step evaluation as family-internal equipment (R2) · the three-level stack incl. grain-0 (R3) · the four concessions (R4) · estimates-need-calibration ↔ the unbuilt Predictive RC + the Selector gate (R5) · the spectrum replacement for the binary (R4/R5) · the targeted-refinement option (R6).

**Frontier flags:**
1. The mechanism anchors (chess/minimax, MCTS, surrogates, SPSA/ES) are training-knowledge → Verification Sheet pattern if any reach canon.
2. The finding-edit's exact mechanics (which file gets which edit under which frontmatter field) → decomposition/innovation.

**Workspace-populated:** `{populated: true, populated-at: 2026-06-10_13-11, extent: R1/R3-R6 full content in context; R2 enumerated as flagged frames}`

## Telemetry

- Mode: dual | entry: signal-first | Boundary-discovery: not fired
- Cycles: 2 (challenged-texts + canon pass; mechanism-space generation)
- Items: ~22 (artifact 12 · possibility 9 · decision-space 1); tags: core 22 · sub 0 · side 0
- Workspace-overload: not triggered
- Failure modes checked: Missed-relevance (the finding/chat-line DIFFERENCE was the non-obvious sweep — and it relocates half the objection's force); Surfaced-irrelevance (bounded); Artifact under-specification (verbatim quotes carried); LAYER 2 Interpretive-overstep (the concession inventory and surviving grounds are SURFACED with evidence; adjudication left to sensemaking)

## Self-Assessment

**PROCEED** — both objections have their mechanism spaces on the table; the two challenged texts are distinguished verbatim (half the objection's force lands on a chat-only overstatement); the concession inventory and the surviving grounds are both explicit; the pivot is isolated (pre-step evaluation is the derivative-free family's own equipment); the edit decision space is enumerated.
