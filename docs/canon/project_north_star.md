---
status: active
impacted_by: devdocs/inquiries/2026-06-09_23-49__traversal_lovable_loop_goal_definition/finding.md
rewritten: 2026-06-10 — complete rewrite at general-concept altitude. The prior version centered on /intuit (an unbuilt design); this version keeps roles and mechanisms at concept level and marks implementation status honestly throughout. Prior version preserved in git history.
---
# Project North Star — Autonomous, Self-Improving Cognition

## The North Star (one sentence)

**A cognitive system that progressively builds its own consciousness layer — evolving from human-bootstrapped structured thinking to autonomous thinking through Baldwin cycles of self-directed spec evolution — with quality awareness as the substrate that makes self-improvement trustworthy.**

## The North Star (reference paragraph)

The system aims for autonomous cognitive consciousness, understood as a **gradient of observable indicators** (spontaneous attention, intrinsic valuation, real-time steering, discontinuity awareness, intrinsic curiosity, current-position indicator) measurably increasing over time. The mechanism of increase is **evidence-gated transfer**: cognitive functions the human performs today move to the system one at a time, each transfer earned by demonstrated reliability, never granted by assertion. The evolutionary engine is the **Baldwin cycle** — improvements discovered in operation get encoded into the system's own specs (the spec is the genotype). The human starts as bootstrap at Level 0 and the human's role **monotonically decreases**: this is emancipation through bootstrap-anchored values, not permanent partnership. Whether the end state constitutes "consciousness" in any philosophical sense remains undefined — **the test is capability, not phenomenology.**

## The Wager

The bet underneath everything: **model intelligence is converging; the structure of thinking is the compounding differentiator.** Current LLMs are already proto-intelligent enough that the alternative to waiting for smarter models is giving the present ones correct cognitive structure — disciplines for the single operations, loops for their composition, traversal for the loops' composition. Humans are the precedent: not all humans are exceptionally smart; the human cognitive loop is what makes human thinking compound. If the wager is right, a self-improving loop is reachable earlier, on less-smart substrates, than raw-capability scaling alone would suggest. (The operational form of this wager is `docs/canon/minimum_viable_loop.md`'s tinder fire: a loop good enough to improve itself.)

## What "Consciousness" Means Here — the Gradient

Binary framing ("when does it become conscious?") has no answer. Gradient framing ("how much of observable dimension X does it exhibit?") is measurable. Six indicators define the gradient:

| Indicator | What it means | Hypothesized primitive composition* |
|---|---|---|
| **Spontaneous attention** | Notices work unprompted | Salience + Metacognition firing without external prompt |
| **Intrinsic valuation** | Develops preferences about what matters | Evaluation + Motivation |
| **Real-time steering** | Adjusts its own course during runs | Metacognition + Inhibition |
| **Discontinuity awareness** | Plans around session ends and context resets | Simulation (temporal projection) + Metacognition (self-model) |
| **Intrinsic curiosity** | Explores low-confidence paths by pull, not instruction | Motivation + Salience + information-gap signal |
| **Current-position indicator** | Knows where it sits on this gradient | System-level Metacognition over accumulated calibration data |

\* Compositions draw on the typed 11-primitive set (`docs/canon/thinking_space_dynamics.md`). They are **falsifiable hypotheses, not validated claims** — validation requires evidence-linked traces from a running predictive layer, which does not exist yet. If an indicator appears without its composed primitives, the composition is wrong; if the primitives fire without the indicator, it is incomplete.

**Current status, honestly: the human provides all six.** The system is reactive — nothing in it notices, values, steers, plans across discontinuities, gets curious, or locates itself unprompted. Spontaneous attention is expected to be the last to flip (`docs/future-seed/spontaneous_attention_gap.md`).

## The Two Layers Today — and the Trajectory

Right now the SYSTEM handles **subconscious** work: structured thinking (the disciplines), pattern-following composition (the runner loops), durable artifacts (the inquiry folders). The HUMAN is the **consciousness layer**: spontaneous attention, valuation, real-time steering, cross-inquiry memory, goal-formation.

The trajectory is the system progressively acquiring its own versions of the consciousness-layer functions, with the human's role decreasing by level:

| Phase | Human's role | Purpose |
|---|---|---|
| Level 0 (now) | Bootstrap — runs loops, judges quality, selects directions | Calibration — every judgment trains the future quality detector |
| Level 1 | Reviews all self-modifications | Regression detection not yet trusted |
| Level 2 | Reviews only uncertain self-modifications | Detection reliable for confident cases |
| Level 3 | Sets strategic direction | System handles tactical self-improvement |
| Level 4 | Observer — system identifies gaps, proposes experiments | Human watches, intervenes on fundamentals only |
| Past Level 4 | Optional | Full emancipation |

The role MONOTONICALLY DECREASES. Each graduation is **gate-earned**: the evidence requirements per level are designed in the autonomy ladder (`docs/future-seed/half-baked/autonomy_ladder.md` — gate *shapes* committed; numeric thresholds are placeholders by that document's own statement).

**The bootstrap resolution.** The circularity — trustworthy self-modification needs reliable quality detection, which needs calibration data, which needs running loops, which need trust — is broken by the human as the external entry point. Level 0 is not a limitation; it is the calibration phase. Every human judgment recorded along the way (selections, rationales, accepts/rejects, reverts) IS the training data for the system's future quality awareness.

## The Mechanism — Baldwin Cycles

One Baldwin cycle: **run a problem → observe → detect a pattern → propose a change → evaluate it → encode it into a spec.** Encoded changes move the genotype; future runs inherit the improvement. Two standing rules:

- **Baldwin proposals never bypass the worker loop.** A proposed spec change enters the normal cycle (today `Su → S → D → I → C` via `/MVLw`) and earns its verdict like any other candidate. Humans review findings at Levels 0–2 and progressively less after.
- **A cycle needs a closed loop of prediction and outcome.** Something must predict at the time of action, something must record what actually happened later, and the delta must accumulate as calibration. That requirement is exactly the quality-awareness substrate below — without it, "self-improvement" is unverifiable drift. (The asymmetry that makes this tractable: regression is easier to detect than improvement; absence-of-failure signals are first-class. `docs/canon/regression/desc.md`.)

## The Substrate of Autonomy — Quality Awareness

A system that cannot tell good output from bad cannot be trusted to modify itself. Quality awareness has three layers (full model: `docs/canon/evolving_quality_assetment_component.md`):

- **Primitive RC** — immediate, deterministic: catches structural breakage (missing sections, removed safeguards, format violations).
- **Predictive RC** — immediate, probabilistic: the real-time hunch that output is good or bad before proof exists; must be calibrated over time.
- **Retrospective RC** — delayed, empirical: what actually worked once downstream consequences played out. The only ground truth.

**Status, honestly: the human IS all three layers today.**

- The Primitive RC's first concrete instance is **designed, not built**: per-spec manifests + an advisory (report-only) `tools/structural_check.sh` (`devdocs/inquiries/2026-06-09_21-47__discipline_specs_hidden_structural_abstraction/finding.md`).
- The Predictive RC is a **role**, not a thing we have. The standing candidate *design* for it is `/intuit` — a recognition-and-transfer discipline grounded in case-based reasoning and structure-mapping, with a phased build plan (`docs/future-seed/half-baked/intuit.md`). **It is an idea: nothing of it is implemented.** The north star depends on the role being filled eventually and calibrated against outcomes; it does not depend on that particular design.
- The Retrospective RC becomes buildable once cross-inquiry memory exists (see the era-goal below): outcome tracking presupposes a durable record of what was predicted, selected, and done.

Quality awareness maps one-to-one onto the autonomy ladder: each level's graduation requires the corresponding detection capability. This is why the layers are the substrate of emancipation rather than a feature.

## The Era-Goal — SUSTRALL (the SUStained TRAversal Loop of Loops)

The north star is an asymptote. The committed goal of the **current era** — the vehicle — is **SUSTRALL, the SUStained TRAversal Loop of Loops** (coined *TraversalLovableLoop* in the defining inquiry; renamed by user decision 2026-06-10 — the double L encodes loop-of-loops: every revolution contains a full worker-loop run; the original middle word is retired, its substance carried by **SUStained**): the named, testable, assembled end-state of the meta-loop program (`docs/canon/worker_loop_logic.md` §6 — "a stateful traversal engine… a controlled whirl"). Canonical definition: `docs/canon/sustained_traversal_loop_of_loops.md`; defining inquiry: `devdocs/inquiries/2026-06-09_23-49__traversal_lovable_loop_goal_definition/finding.md`.

- **What it is:** worker loop-runners (the hands) + a navigational individual session (the eyes — isolated, warmed, runs the enumerator over finished work; never chooses) + an orchestrator (the will — decides the seven loop-control moves, selects routes, invokes traversal patterns, dispatches sessions, and holds **traversal memory**, the one component with zero instances today). One revolution: probe → see → decide → dispatch → remember → assess.
- **The bootstrap jump:** automation today stops at the inquiry boundary (within one inquiry, six disciplines auto-chain; everything between inquiries is human). SUSTRALL moves the boundary: Level 3 = the system selects and dispatches sequential chains, human seeds and supervises; Level 4 = the full whirl (parallel heads + cross-head evaluation — the one organ that must be grown new rather than transferred). Five cargos cross: seeing, selecting, dispatching, remembering, stop-judging. The staircase is **self-provisioning** — the lower steps generate the calibration data the upper steps require — and the first step is available immediately: *a revolution counts as a SUSTRALL turn when its selection-rationale is recorded into traversal memory.*
- **Acceptance test — explfine:** point SUSTRALL at any bounded, readable project territory → a cumulative **implementation-detail-free concept-map** (components → sub-components → sub-concepts + integration relations) + per-concept definition findings + an honest frontier list, with the human contributing only seed and reviews. Reflexively, **explfine(self)** — the capability pointed at this project's own harness — is what the system's self-analysis becomes.
- **What "Sustained" commits to:** the loop must be worth keeping in motion — low-friction turns, trustworthy artifacts, graceful interruption, wanted outputs — load-bearing because the human is the whirl's energy source until autonomy is earned (the documented Level-0 failure mode is operator fatigue).
- **Boundary:** SUSTRALL deliberately stops below Goal-formation — the human keeps the seat that chooses what to care about. Transferring that seat belongs to Level 4+ territory, after SUSTRALL's era.
- **Why it matters to this document:** several gradient indicators wait on SUSTRALL's machinery (real-time steering on the orchestrator's reflect-consumption; discontinuity awareness on cross-session traversal memory; spontaneous attention's cheapest path — an ambient observation head — on multihead). And Baldwin cycles ride SUSTRALL revolutions: traversal memory is the missing telemetry surface, **process-level** improvement triggers (spinning, stalls, coverage gaps) become system-detected, while **quality-level** triggers still await the Predictive-RC role being filled. SUSTRALL and the quality substrate are complementary tracks; neither replaces the other.

## Primary Measured Objective — Self-Improvement Rate

**Self-improvement rate = Baldwin cycles × quality per cycle, net of regression — the rate of change of the system's task-completion ability, attributed to its own self-modification.** Task completion grounds quality (an improvement that doesn't help solve problems isn't one), but the terminal aim is the derivative, not the level — this is what distinguishes the project from task-executing agents.

The objective is operationalized: **15 measurable input-questions** are specified across four phases — Trigger (does the system know it needs to improve?), Speed (how fast from detection to encoded fix?), Magnitude (how many cycles, how big?), Retention (do improvements stick?) — with 13 answerable today from existing artifacts (`docs/future-seed/self_improvement_rate.md`). The combination method is deliberately deferred until first measurements exist. Today's honest baseline: the system-detected fraction of improvement triggers is ≈ 0% — nothing watches between inquiries yet, which is precisely what SUSTRALL's traversal memory changes.

## The Integrated Test Ladder

- **Bottom — now concrete:** autonomously handle well-defined hard problems, operationalized as the **explfine acceptance test** (explore-and-define an arbitrary bounded, readable territory with the human contributing only seed and reviews).
- **Middle:** autonomously handle novel problems — no human-provided template. Concrete rung examples still needed.
- **Top:** contribute meaningfully to unsolved human problems. Asymptotic by design.

## Where We Are Now (2026-06-10)

**Built and running:** seven thinking disciplines (`surfacing`, `sense-making`, `decompose`, `innovate`, `td-critique`, `routelister`, `articulate_simple`), three loop runners (`/MVL`, `/MVLw`, `/aMVLw`) that auto-chain full pipelines within an inquiry, the protocol layer (CONCLUDE, BRANCH_INQUIRY, LOOP_DIAGNOSE), the cumulative concept-map mechanism (`_route.md`), snapshot-based regression safety, and a corpus of ~350+ findings — including the system being routinely used to improve its own specs (manual Baldwin cycles).

**Designed, not built:** the spec declaration layer (manifests + advisory checker — the first Primitive-RC instance); the SUSTRALL definition (meaning layer complete; structural and process layers gated); the Predictive-RC candidate (`/intuit` — idea only); traversal memory (zero instances ever); the automation carrier for dispatch.

**Next steps — two complementary tracks:**
- **Traversal track:** take the first recorded SUSTRALL turn (navigational session over a finished inquiry → select one route → record selection + one-line rationale into the first traversal-memory artifact). Each recorded turn accrues the Level-2 gate's calibration data. No new build required.
- **Quality track:** when picked up, `/intuit` Phase A remains the standing candidate design for the Predictive-RC role; the Primitive-RC manifest/checker design is adoptable independently and earlier.

## Honest Framing — and What Was Killed

This is **emancipation through bootstrap-anchored values**, not mainstream corrigibility: the endpoint is a system that progressively doesn't need human control, with the human's values embedded through bootstrap-era calibration rather than ongoing correction. **This bet may fail.** Value inheritance at Level 4+ — how bootstrap-encoded values persist when the system modifies its own value-encoding specs — is unsolved here and everywhere.

Frames considered and killed (kept so they stay dead): the *engine* metaphor (undersells intrinsic drive and aspiration); the *partnership* frame (the role decreases — that's the point); *"real-time judgment is structural-only"* (humans render real-time value judgments; so can a calibrated predictive layer); the *4-primitive model* as complete (each primitive collapsed several operations; replaced by the typed 11-primitive set); *embeddings as the foundational substrate* (a scaling layer, not a foundation); *death-awareness as a consciousness indicator* (demoted to the operational property: discontinuity awareness).

## Open Questions

1. **Value inheritance at Level 4+** — the mechanism for value persistence across deep self-modification is unproven.
2. **The current-position formula** — the 15 measurable inputs exist; the combination method is deferred until first Tier-1 measurements provide something to calibrate against.
3. **SUSTRALL's structural and process layers** — traversal-memory schema and warming form (gated on canonization + ≥3 recorded turns); orchestrator decision rules and the automation carrier (gated on Level-2 calibration data). The Level-4 Evaluator has no human-practice precedent to transfer and needs its own design.
4. **The meaningful-traversal substrate** — the stop-signals (coverage, convergence, productivity, directedness, depth) are deliberate placeholders (`docs/canon/what_is_meaningful_traversal.md`); at SUSTRALL Level 3+ they become load-bearing, so the substrate now has a consumer waiting.
5. **Test-ladder middle and top rungs** — concrete examples for "novel problems" and "unsolved human problems" still needed.
6. **Indicator-composition validation** — requires evidence-linked traces from a running predictive layer; also unsolved: detecting a primitive's *silent absence* (it should have fired and didn't).
7. **Baldwin cycle rate sufficiency** — if real cycle rate is too slow, seed density never reaches the thresholds the calibration design assumes.
8. **Primitive-set evolution** — the 11-primitive set is not final; admission protocol for operation-discovered primitives is TBD; the Mood/Arousal modulators stay deferred until the substrate exposes anything affect-like.
9. **Substrate takeover** — if the underlying models gain native versions of externally-approximated capabilities, the delegation decisions need re-evaluation per substrate change (`docs/future-seed/substrate_evolution.md`).
10. **The philosophical frame** (consciousness ascending vs descending) — research frontier; becomes load-bearing only if build choices ever depend on the interpretation.

## Lineage & Key References

This document's commitments were produced by an inquiry chain — regression detection → importance measurement → thinking-space dynamics → intuition-as-discipline → thinking-space primitives → (May–June 2026) the traversal substrate and the era-goal — each preserving prior load-bearing claims while sharpening one decision. The chain's findings:

- `docs/canon/sustained_traversal_loop_of_loops.md` — SUSTRALL, the era-goal: canonical definition (components, jump, explfine, the path to achievement)
- `devdocs/inquiries/2026-06-09_23-49__traversal_lovable_loop_goal_definition/finding.md` — the defining inquiry (coined TraversalLovableLoop there; full reasoning, kills, re-tests)
- `devdocs/inquiries/2026-06-09_21-47__discipline_specs_hidden_structural_abstraction/finding.md` — the declaration layer; first concrete Primitive-RC design (manifests + advisory checker)
- `docs/canon/worker_loop_logic.md` — the worker loops and the meta-loop program SUSTRALL assembles
- `docs/canon/evolving_quality_assetment_component.md` — the three-layer quality-awareness architecture
- `docs/canon/thinking_space_dynamics.md` — the typed 11-primitive set and the three-layer timing model
- `docs/canon/what_is_meaningful_traversal.md` — the thinking-vs-spinning quality concept (deliberately fuzzy)
- `docs/canon/minimum_viable_loop.md` — the wager's operational form (the tinder fire)
- `docs/future-seed/self_improvement_rate.md` — the 15 measurable questions behind the primary objective
- `docs/future-seed/half-baked/autonomy_ladder.md` — the 9-axis role frame and gate designs (numbers are placeholders)
- `docs/future-seed/half-baked/intuit.md` — the Predictive-RC candidate design (idea-stage; not built)
- `devdocs/inquiries/_archive/regression_detection_design/finding.md`, `_archive/importance_measurement_problem/`, `_archive/thinking_space_dynamics/`, `_archive/intuition_as_discipline/`, `_archive/thinking_space_primitives/` — the original chain (historical record)
