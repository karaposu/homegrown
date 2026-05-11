# Exploration: Loop Diagnose - Aggregate Naming and Boundary Drift

## Mode and Entry Point

**Mode:** Hybrid — primarily artifact exploration of the 5 inquiry findings already in context for vocabulary evidence; secondarily possibility exploration of the four candidate weakness axes named in the diagnostic_goal.

**Entry point:** Signal-first — the diagnostic_goal explicitly names four candidate weakness axes (framing, Sensemaking vocabulary selection, Conclude wording, lack of user-language validation) which are the initial signals to probe.

## Cycle 1 — Coarse Scan of Vocabulary Events Across the Chain

Scanning the 5 inquiry findings (primary chain prior + corrected; 3 supporting context folders) for naming and boundary events.

**Vocabulary timeline:**

1. `prior_map_overlay` / `prior_map_overlay.md` — chain origin (`2026-05-04_17-56`); the artifact name proposed by the user-input scenario, adopted by the loop.
2. `prior route reconciliation` — chain origin Reasoning section; adjacent abstraction.
3. `Route Memory Review` — chain origin's corrected (`2026-05-05_18-30`'s prior); replaced `prior_map_overlay`.
4. `Route-Memory Preflight` — primary corrected's user input phrasing; loop committed to it; later rejected.
5. `route-memory status classification` — primary corrected (`2026-05-05_18-30`); replaced `Route-Memory Preflight`.
6. `route_memory_status` (statuses: `none_detected`, `not_relevant`, `review_needed`, `review_consumed`, `thin_skipped`) — primary corrected; new vocabulary set.
7. `PastNavigationMemoryFile` — supporting context (`2026-05-05_20-02`); coined by loop, not user-derived.
8. `source-present` / `past_navigation_memory_file: present` — supporting context (`2026-05-05_20-02`); coined by loop.
9. `PastNavigationMemoryFile Index` — supporting context (`2026-05-06_07-06`); user-suggested term `Index` combined with loop-coined `PastNavigationMemoryFile`.
10. `PastNavigationMemoryFile Discovery Search` — supporting context (`2026-05-06_10-21`); replaced the Index in response to user pushback.
11. `past_navigation_memory_candidates.md` — supporting context (`2026-05-06_10-21`); run-local report term.

**Signals detected:**

- **[Density]** Multiple rename events across consecutive chains — at least 4 distinct rename events in 5 chains.
- **[Tension]** Some names get replaced (overlay, preflight, index); others are kept (PastNavigationMemoryFile, route_memory_review).
- **[Absence]** No prior loop ever DEFENDED its name choice in a finding. No Sensemaking output explicitly justifies the chosen vocabulary against alternatives.
- **[Novelty]** Naming churn happens while the underlying findings are otherwise robust (every chain produces an actionable verdict; only the vocabulary keeps drifting).
- **[Relevance]** User pushback signals four specific names: `prior_map_overlay`, `Route-Memory Preflight`, `source`, `PastNavigationMemoryFile`. All four arose from different stages of the corpus.

**Resolution decision:** zoom in on the rename events to identify origin stage.

**Frontier state:** advancing (6 vocabulary events identified, more attribution work needed).

## Cycle 2 — Probe Rename Events to Identify Origin Stage

Probing each rename event to determine where the name was coined and which stage failed to challenge it.

**Event 1: `prior_map_overlay` → `Route Memory Review` (chain origin's corrected).**

- Origin: user-input scenario in chain origin's Source Input ("`navigator-prior-map-overlay.md` reads old maps and writes a new file ... `prior_map_overlay.md`"). The user echoed the existing artifact name; the chain origin loop adopted it without challenge.
- Where caught: chain origin's corrected (`2026-05-05_18-30`) Reasoning section: "the weaker part is framing this as a 'prior-map overlay' or 'route reconciliation.' Those names make the operation sound like bookkeeping."
- The chain origin's Sensemaking and Critique did NOT catch the framing problem. The corrected loop did, because the corrected loop's framing was different.

**Event 2: `Route-Memory Preflight` → `route-memory status classification` (primary corrected).**

- Origin: primary corrected's user input ("every Navigation run should do a cheap Route-Memory Preflight"). The user coined this term; the loop adopted it via the chain origin's corrected.
- Where caught: primary corrected's finding (`2026-05-05_18-30`) Section 1: "The phrase 'cheap Route-Memory Preflight' sounds like a new named operation. If it is always run, Navigation starts to feel like it has a mandatory side ritual."
- The chain origin's corrected adopted the term without questioning. Sensemaking did not test "if always run, what does this term mean operationally?"

**Event 3: `PastNavigationMemoryFile` (introduced; never renamed).**

- Origin: supporting context (`2026-05-05_20-02`) finding. NOT user-derived. Loop-coined term.
- Where mentioned: appears extensively across all subsequent findings without explicit defense or alternative consideration.
- User pushback noted in the human correction: "`PastNavigationMemoryFile` ... were not understandable enough."
- The loop coined this name and committed to it; no Sensemaking output justifies the term.

**Event 4: `source-present` (introduced via supporting context).**

- Origin: supporting context (`2026-05-05_20-02`) finding using `source-present` as a status qualifier ("if a `PastNavigationMemoryFile` is source-present").
- User pushback: human correction notes `"source"` as one of the unclear names.
- The term was committed without justification or alternative.

**Event 5: `PastNavigationMemoryFile Index` → `PastNavigationMemoryFile Discovery Search` (supporting context).**

- Origin: user-suggested `Index` term combined with loop-coined `PastNavigationMemoryFile` (supporting context `2026-05-06_07-06`). Index was the load-bearing concept rejected by the next correction.
- Where caught: supporting context (`2026-05-06_10-21`) finding: "a maintained global index creates a second mutable truth source ... silent index drift is hard to see at the point where Navigation consumes memory."
- The Index loop did not challenge whether maintained-index was the right operational mechanism. Critique did not surface the duplicate-state risk.

**Resolution decision:** zoom in on each candidate weakness axis from the diagnostic_goal.

**Frontier state:** advancing.

**Confidence map:**
- Vocabulary timeline: confirmed
- Rename event attribution: confirmed (5 events traced)
- Stage attribution per event: scanned (need axis-level probe)

## Cycle 3 — Probe Sensemaking Vocabulary Selection Axis

Looking at SV2-SV3 / Conceptual Stabilization outputs across the chain.

**Direct evidence:**

- Chain origin's corrected (chain 1's corrected): the finding has a "Terms Used Here" section explicitly defining `Old Navigation map`, `Old route memory`, `Route Memory Review`, `Inline Route Memory Review`, `Saved Route Memory Review`, `Durable handoff`. This is GOOD practice — vocabulary commitment with context-bound definitions.

- Primary corrected (`2026-05-05_18-30`): NO "Terms Used Here" section. Statuses are introduced inline (`none_detected`, `not_relevant`, etc.). Definitions appear at point of use.

- Supporting context (`2026-05-05_20-02`): NO "Terms Used Here" section. `PastNavigationMemoryFile` is introduced without definition until §2 ("`PastNavigationMemoryFile` includes: prior `devdocs/navigation/*.md` maps; `navigation.md` inside an inquiry folder; ...").

- Supporting context (`2026-05-06_07-06`): NO "Terms Used Here" section. `PastNavigationMemoryFile Index` introduced and used without prior definition.

- Supporting context (`2026-05-06_10-21`): NO "Terms Used Here" section. `PastNavigationMemoryFile Discovery Search` introduced via Reasoning.

**Pattern:** Chain 1's "Terms Used Here" was NOT carried forward consistently. Sensemaking vocabulary selection happened in 5/5 chains, but vocabulary justification appeared in only 1/5.

**Inference:** The Sensemaking discipline does not have an explicit "vocabulary commitment must be justified" step. Names get committed because they appeared in the user input or the loop's natural prose, not because they survived a vocabulary-selection challenge.

**Confidence:** MEDIUM-HIGH that Sensemaking vocabulary selection lacks a justify-or-defend step.

**Frontier state:** advancing.

## Cycle 4 — Probe Conclude Wording Axis

Looking at finding-template amplification across the chain.

**Direct evidence:**

- Chain 1's corrected finding amplified `Route Memory Review` consistently throughout (Question, Finding Summary, all sections). This was the GOOD case where vocabulary was justified.

- Chain origin's corrected via primary corrected: `Route-Memory Preflight` was amplified throughout the Question and Finding sections before being re-evaluated and rejected.

- Supporting context (`2026-05-05_20-02`): `PastNavigationMemoryFile` amplified via `Finding Summary`, `Finding §2`, `Finding §3`, `Open Questions`, etc. — used 14+ times in the finding without justification.

- Supporting context (`2026-05-06_07-06`): `PastNavigationMemoryFile Index` amplified via Finding template. Used as the artifact name throughout.

- Supporting context (`2026-05-06_10-21`): `PastNavigationMemoryFile Discovery Search` amplified via the same template structure.

**Pattern:** CONCLUDE / finding-template stage AMPLIFIES whatever names came from upstream Sensemaking. The template does not have a vocabulary-validation step before amplification.

**Inference:** Conclude wording is an amplification surface, not a coining surface. The amplification is the multiplier — once committed, names propagate widely. But the CHOICE of name happens upstream at Sensemaking (or Framing).

**Confidence:** MEDIUM that Conclude wording amplifies but does not cause vocabulary issues.

**Frontier state:** advancing.

## Cycle 5 — Probe Lack of User-Language Validation Axis

Looking at user input vs. loop output across the chain for vocabulary alignment.

**Direct evidence per chain:**

- Chain origin user input: used `prior_map_overlay.md`, `prior_map_overlay`, `prior_map_overlay_homegrown` — user-supplied vocabulary. Loop adopted without challenge.

- Chain 1 corrected user input: introduced `Route-Memory Preflight` — user-supplied. Loop adopted without challenge until a SECOND correction.

- Primary corrected user input: pushed back with "feels messy ... not clean enough" — metacognitive, not vocabulary-specific.

- Supporting context user input (`2026-05-05_20-02`): "since we are early stage and desperate for breakthroughs ... maybe we should always run full review?" — no vocabulary directive. Loop coined `PastNavigationMemoryFile` autonomously.

- Supporting context user input (`2026-05-06_07-06`): "so maybe we should keep record of all navigation related file creations so we will have PastNavigationMemoryFile index?" — user-coined `Index`; loop combined with own `PastNavigationMemoryFile` to produce `PastNavigationMemoryFile Index`.

- Supporting context user input (`2026-05-06_10-21`): "we know the file names afterall, at least regex searchable way we know" — user explicitly proposed `search` as the operational mechanism; loop renamed to `Discovery Search`.

**Pattern (asymmetry):** When the user supplied a name, the loop adopted it (sometimes without challenge). When the loop coined a name autonomously, no validation against user-language occurred. The corrected loops fixed the issue ONLY because the user provided the validation in subsequent input.

**Pattern (push direction):** User-language validation is a passive process — it happens through external correction, not through internal loop discipline. The prior loops in each chain had no built-in mechanism to ask "would the user say it this way?"

**Inference:** Lack of user-language validation is the cross-cutting absence. Every chain that coined a name autonomously lacked validation against user vocabulary. The corrected chains succeeded because user input contained the missing validation.

**Confidence:** HIGH that lack of user-language validation is a real cross-cutting gap.

**Frontier state:** advancing.

## Cycle 6 — Probe Framing Axis

Looking at `_branch.md` files for whether framing inherits names without challenge.

**Direct evidence:**

- Chain origin `_branch.md`: "Is writing a separate `prior_map_overlay.md` file after Navigation warm-up the best solution for old route-memory reconciliation?" — frames around the existing artifact name without questioning whether `prior_map_overlay` is the right term.

- Primary corrected `_branch.md`: "Is the earlier answer ... clean and correct: every Navigation run performs a cheap Route-Memory Preflight ...?" — uses `Route-Memory Preflight` in the question without questioning the term.

- Supporting context `_branch.md` (`2026-05-05_20-02`): not directly read; would inherit `PastNavigationMemoryFile` once introduced.

- Supporting context `_branch.md` (`2026-05-06_07-06`): the `_branch.md` is similar — frames around `PastNavigationMemoryFile index` from the user input.

**Pattern:** Framing stage (the `_branch.md` writing step) inherits names from prior context (user input, prior finding). The framing stage does NOT include an explicit "is this name right?" check.

**Inference:** Framing axis is a real inheritance surface. But the framing stage is upstream of Sensemaking — names INHERITED at framing are committed at Sensemaking. So the framing axis is necessary-but-not-sufficient: a framing-only fix without Sensemaking discipline change would not catch loop-coined names.

**Confidence:** MEDIUM that framing inheritance contributes; the primary axis is downstream at Sensemaking.

**Frontier state:** advancing.

## Cycle 7 — Cross-Stage Attribution Analysis

Synthesizing across cycles 3-6:

**Where rename events were caught:**
- Event 1 (`prior_map_overlay`): caught at chain 1's corrected loop (NEW Sensemaking + Reasoning combined catch).
- Event 2 (`Route-Memory Preflight`): caught at primary corrected loop (NEW Sensemaking).
- Event 3 (`PastNavigationMemoryFile`): NOT caught by any loop; user pushback (chain 7 input) is the catch.
- Event 4 (`source-present`): NOT caught by any loop; user pushback (chain 7 input) is the catch.
- Event 5 (`Index` → `Search`): caught at chain 1's prior loop (`2026-05-06_10-21`, Sensemaking + Reasoning catch).

**Where catches happened:** Either at the corrected loop's Sensemaking + Reasoning OR at user pushback. Never at the prior loop's Critique.

**Why the prior loops missed:** They had no built-in mechanism to challenge their own coined names. Critique evaluated candidates but did not evaluate vocabulary commitment.

**Asymmetry:** When the user supplied a name in the input, the loop adopted it (the loop respects user vocabulary). When the loop coined a name, no validation. The asymmetry is structural — there's a user-vocabulary-respect pattern that does NOT extend to loop-coined names.

**Confidence:** MEDIUM-HIGH on the structural asymmetry as a unifying explanation.

**Frontier state:** stabilizing.

## Cycle 8 — Possibility Scan: Candidate Weakness Axes Comparison

Possibility-mode comparison of the four axes named in the diagnostic_goal:

| Axis | Where it operates | Evidence weight | Sub-mechanism observable? |
|---|---|---|---|
| Framing | `_branch.md` inheritance from user input | MEDIUM | Yes — chain origin and primary corrected `_branch.md` files inherit names without questioning |
| Sensemaking vocabulary selection | SV2-SV3 / Phase 5 Conceptual Stabilization commitment | HIGH | Yes — only chain 1 had "Terms Used Here"; 4/5 chains committed names without justification |
| Conclude wording | finding-template amplification | MEDIUM | Yes — every finding amplifies committed names without re-validating; but amplification is downstream of coining |
| Lack of user-language validation | absent across all stages | HIGH | Yes — observable as ABSENCE; corrected loops succeeded only because user provided external validation |

**Axis dependency analysis:**

- (1) Framing and (2) Sensemaking are sequentially coupled — Framing inherits, Sensemaking commits.
- (3) Conclude wording is downstream of (2) — amplifies what (2) committed.
- (4) Lack of user-language validation is ORTHOGONAL — it's an absent step that should plug into all three other axes.

**Cleanest explanatory framing:** the primary failure is (4) — absent user-language validation step. (2) is the most observable manifestation. (1) and (3) are inheritance/amplification surfaces that propagate the absence.

**Confidence:** MEDIUM-HIGH that the four axes are not independent; (4) is the cross-cutting absence that explains the pattern across (1), (2), (3).

**Frontier state:** stable.

## Cycle 9 — Affected Stages Detail

Mapping the cross-cutting failure into stage-specific manifestations:

- **Stage A — Sensemaking vocabulary commitment without user-language validation (HIGH).** SV2-SV3 / Phase 5 Conceptual Stabilization output commits to a name without testing whether the name matches user-language. Chain 1's "Terms Used Here" was a partial mitigation (definitions provided), but did not include user-language validation.

- **Stage B — Framing inheritance of unvalidated names (MEDIUM).** `_branch.md` writing step inherits names from prior context (user input or prior finding) without questioning whether the inherited name is appropriate. The framing stage hands a pre-named question to Sensemaking.

- **Stage C — Conclude amplification of unvalidated names (MEDIUM).** Finding-template structure amplifies committed names without a vocabulary-validation step before amplification. CONCLUDE is the multiplier, not the source.

- **Stage D — Cross-cutting absence of explicit user-language validation step (HIGH).** No discipline (Exploration, Sensemaking, Decomposition, Innovation, Critique) has a built-in step that asks "would the user say it this way?" or "does this name match the user's language?" The absence is observable across all 5 chains' artifacts.

**Confidence map:**
- A and D: HIGH evidence
- B: MEDIUM evidence (inheritance is real but secondary)
- C: MEDIUM evidence (amplification is real but secondary)

**Frontier state:** stable.

## Cycle 10 — Cross-Chain Pattern Observations

Tracking patterns across the LOOP_DIAGNOSE corpus (chains 1-7):

**P1 family (Sensemaking concept-stabilization shortcomings):**
- Chain 1: M1 (terminology)
- Chain 2: N2 (terminology)
- Chain 3: O1 (Foundational Principles)
- Chain 4: R1 (Phase 2 Perspective)
- Chain 5: S1 (proxy-vs-structural at trigger-classifier-rule)
- Chain 6: T1 (discoverability check at Phase 5)
- **Chain 7: U1 candidate (vocabulary-selection sub-type at Phase 5 / Conceptual Stabilization output)**

P1 family extends to a SIXTH layer-sub-type: vocabulary-selection at Phase 5. M6-refinement-S2 (chain 6 promotion) covers Phase 5 broadly; chain 7's evidence may sub-type within that surface.

**P3 family (Critique prosecution-depth shortcomings):**
- Chain 3: O3 (user-perspective)
- Chain 5: S2 (failure-case)
- Chain 6: specification-gap (subsumed under TP3)
- TP3 promoted at chain 6 covers these as sub-types.
- **Chain 7: vocabulary-naturalness sub-type may extend P3 to a 4th sub-type, IF the failure is attributed to Critique missing vocabulary prosecution.** Aggregate-diagnostic confidence constraint applies — single-chain evidence for Critique-specific attribution is weak.

**P11 family (Decomposition completeness):**
- Chain 6: T2 (single-chain caveat)
- **Chain 7: no clear extension; aggregate-diagnostic does not isolate a Decomposition-specific failure.**

**P12 family (NEW; vocabulary-validation as its own family):**
- Chain 7: cross-cutting lack of user-language validation
- This may be a NEW family at 1 chain. Single-chain evidence triggers monitoring tier, not cross-cutting promotion.

**M6 effectiveness check #4:**
- M6 cumulative refinement count: currently 3 (M6-refinement-S, M6-refinement-C, M6-refinement-S2 from chain 6)
- Does M6 (with all three refinements) catch chain 7's vocabulary-validation gap? M6's "name-and-test" pattern technically covers naming, but the test sub-rule does not include user-language validation specifically.
- A 4th M6 refinement may be needed: M6-refinement-U adding user-language validation to M6's test sub-rule.
- IF a 4th refinement is promoted, M6 cumulative refinement count reaches 4 — consolidation review trigger fires.

**TP3 effectiveness check #1:**
- TP3 was promoted at chain 6. Does TP3 fire correctly against chain 7's Critique?
- Chain 7's Critique (yet to run) has the opportunity to apply TP3's relevance-check (consider depth-axes: user-perspective, failure-case, specification-gap, plus future sub-types).
- Vocabulary-naturalness is a candidate fourth sub-type of TP3.

**Confidence map:**
- P1 extension (6th layer-sub-type): MEDIUM-HIGH
- P3 extension (vocabulary sub-type): MEDIUM-LOW (aggregate-diagnostic constraint)
- P11 extension: LOW (no Decomposition-specific failure observable)
- P12 NEW family: MEDIUM at 1 chain
- M6 4th refinement potential: MEDIUM (consolidation-trigger pressure)
- TP3 effectiveness: TBD (chain 7's own Critique is the test)

**Frontier state:** stable.

## Cycle 11 — Aggregate-Diagnostic Confidence Calibration

The diagnostic_constraint says: "keep confidence lower unless evidence isolates a specific prior-loop failure."

**Per-prior-loop isolation analysis:**

- Chain origin (prior `prior_map_overlay`): the `prior_map_overlay` term was inherited from user input. The chain origin's loop adopted without challenge. This is technically not the loop's coinage. However, the loop committed to it without challenge — this is observable as a Sensemaking gap.
- Primary corrected's prior (chain origin's corrected): adopted `Route-Memory Preflight` from user input without challenge. Same Sensemaking gap.
- Supporting context (`2026-05-05_20-02`): coined `PastNavigationMemoryFile` and `source-present` autonomously. Stronger Sensemaking vocabulary-coining gap.
- Supporting context (`2026-05-06_07-06`): coined `PastNavigationMemoryFile Index` (combining user-suggested `Index` with loop-coined `PastNavigationMemoryFile`). Mixed coining.
- Supporting context (`2026-05-06_10-21`): renamed to `Discovery Search` in response to user input. Caught the issue but only via user-supplied correction.

**Strongest single-prior-loop isolation:**

- Supporting context (`2026-05-05_20-02`) coined `PastNavigationMemoryFile` autonomously WITHOUT validation; the term was then propagated through chains 4 and 5 before any pushback. This is the cleanest single-loop isolation of the gap (loop coined → loop committed → loop did not validate).
- HIGH confidence that this loop missed a vocabulary-validation step.
- MEDIUM confidence that the failure was specifically at Sensemaking (could be Sensemaking + Conclude + framing combined; the corpus does not isolate the stage cleanly).

**Aggregate claim confidence:**

- HIGH confidence: at least one prior loop coined names without user-language validation, and the absence of user-language validation is observable across multiple chains.
- MEDIUM confidence: the gap is primarily at Sensemaking vocabulary selection (vs framing or Conclude).
- LOW confidence: any specific sub-mechanism within Sensemaking (which Phase, which sub-step) is responsible.

**Frontier state:** stable.

## Cycle 12 — Maintenance Candidate Possibilities

Generating candidate maintenance actions (still possibility-mode; will be assessed in Innovation/Critique):

**U1 — Sensemaking user-language validation check.** Add a Phase 5 / Conceptual Stabilization output sanity check: for each load-bearing concept name committed in SV6, verify either (a) the name appeared in user input, OR (b) the name's match-with-user-language has been explicitly justified. If neither, flag and propose alternatives. This is the strongest candidate.

**U2 — Framing name-question check in `_branch.md`.** When `_branch.md` inherits a name from user input or prior context, mark it as "not yet validated" until Sensemaking Phase 5 validates. Adds explicit framing-stage step.

**U3 — Conclude name-validation check.** CONCLUDE re-checks coined names against user input before committing in `finding.md`. If a name appears in 5+ places in the finding but never in user input, prompt for justification or alternative.

**U4 — Cross-cutting user-language validation rule (M6-refinement-U).** Apply user-language validation at Sensemaking + Conclude + Innovation labelling stages. This would extend M6's test sub-rule to include user-language validation. Pushes M6 cumulative refinement count to 4 — consolidation review trigger fires.

**U5 — Mark prior finding corrected (T7 sister rule).** Update prior loops' findings with Status notes acknowledging the vocabulary-drift correction.

**U6 — Continue monitoring.** Extend M8+N8+O8+R8+S8+T8 monitoring with chain-7 tracking dimensions: vocabulary-validation effectiveness, M6 cumulative refinement count post-chain-7, TP3 effectiveness against vocabulary sub-type.

**U7 — TP3 refinement (if vocabulary-naturalness becomes a 4th sub-type).** Extend TP3 to include vocabulary-naturalness as a depth-axis. Mechanically respects TP3's "future sub-types may emerge" caveat.

**U8 — M6-refinement-U candidate.** Add user-language validation as a sub-rule of M6's test layer.

**Q-RF Reinforcement (Research Frontier, NOT a candidate; fifth specific instance).** The user's pushback "either sounded like the wrong operation or were not understandable enough" is metacognitive — they sensed names were off without articulating why. This is a fifth Q-RF instance: vocabulary-naturalness awareness, after metacognitive (chain 3), calibration (chain 4), proxy-vs-structural (chain 5), operational-discovery-gap (chain 6).

**Confidence on candidates:**
- U1: MEDIUM-HIGH (clear gap; specific mechanism)
- U2: MEDIUM (framing inheritance is real but secondary)
- U3: MEDIUM (CONCLUDE is amplification, not coining)
- U4 / U8: MEDIUM (M6 refinement; pushes consolidation trigger)
- U5: HIGH (trivial cost)
- U6: HIGH (always-on baseline)
- U7: MEDIUM-LOW (TP3 single-chain extension)
- Q-RF: Research Frontier framing maintained.

**Frontier state:** stable.

## Cycle 13 — Q-RF Check (Fifth Specific Instance)

The user's aggregate pushback ("either sounded like the wrong operation or were not understandable enough") is metacognitive — the user knew the names were wrong but could not articulate exactly why each was wrong. This pattern matches Q-RF (Quality-Awareness Gap):

**Q-RF instances catalog (across LOOP_DIAGNOSE corpus):**
- Chain 3: metacognitive awareness ("this feels wrong but I can't articulate why")
- Chain 4: calibration-awareness (phase / calibration state)
- Chain 5: proxy-vs-structural-awareness (trigger-classifier proxy distinction)
- Chain 6: operational-discovery-gap awareness (load-bearing concept depended on runtime determination)
- **Chain 7: vocabulary-naturalness awareness (names "sounded like the wrong operation" or "were not understandable enough")**

Q-RF is at FIVE specific instances across chains 3-7. The pattern continues to reinforce Q-RF as a real Research Frontier — the underlying capability gap (Quality-Awareness as distinct from object-level reasoning) manifests in different specific forms each chain. Q-RF stays as Research Frontier; NOT a per-chain candidate.

**Confidence:** HIGH that this is a fifth specific instance of Q-RF.

**Frontier state:** stable.

## Cycle 14 — Jump Scan: Operations vs Names

Deliberate scan in a different direction: what if the issue is NOT primarily naming, but operational-shape instability that MANIFESTS as naming churn?

**Direct evidence:**

- Each rename event was paired with an OPERATION rethink:
  - `prior_map_overlay` → `Route Memory Review` rename was accompanied by reframing the operation from "bookkeeping artifact" to "memory review operation."
  - `Route-Memory Preflight` → `route-memory status classification` rename was accompanied by reframing the operation from "separate routine" to "classification inside existing intake."
  - `PastNavigationMemoryFile Index` → `PastNavigationMemoryFile Discovery Search` rename was accompanied by reframing the operation from "maintained registry" to "search contract."

- Each new name encoded a different operational mechanism. The names drifted because the OPERATIONS drifted.

**Inference:** The diagnostic question's framing ("naming and boundary drift") is correct in observing both phenomena together. Naming was a SYMPTOM; operational instability was the cause. The loops did not commit to a stable operation BEFORE naming it.

**Implications for candidates:**

- U1 (Sensemaking user-language validation check) addresses naming directly.
- A deeper candidate may be: Sensemaking operation-shape commitment check (at Phase 4 / Functional Stabilization, before Phase 5 / Conceptual Stabilization names the operation). Does the loop commit to a stable operation before assigning a name?
- This is U9: **Sensemaking operation-shape stability check.** Verify that operational shape is stable across 2+ inquiry frames before naming the operation. Otherwise the name is provisional and will drift.

**Confidence:** MEDIUM that operational instability is the root; vocabulary is the visible symptom.

**Caveat:** This is jump-scan evidence, not primary chain evidence. The primary chain evidence supports vocabulary-validation directly; operational-shape stability is a deeper-layer hypothesis.

**Frontier state:** Stable.

## Cycle 15 — Convergence Check

**Frontier stability:** STABLE. Major regions mapped:
- Vocabulary timeline (mapped)
- Rename event attribution (5 events, each traced to origin stage)
- Four candidate axes (mapped with weights)
- Cross-chain extension (P1, P3, P11, P12, M6, TP3 effects)
- Q-RF 5th instance (mapped)
- Jump-scan: operational-shape instability hypothesis (mapped)

**Discovery rate:** DECLINING. Cycle 14 was the last meaningful new region; Cycle 15 produced no new structure.

**Bounded gaps:** YES. Remaining unknowns:
- Exactly how much vocabulary issues vs operational-shape issues contribute (Sensemaking will resolve)
- Whether the Sensemaking gap is at Phase 4 (Functional) or Phase 5 (Conceptual) — Decomposition will resolve
- Whether U1 alone is sufficient or U1+U9 combined is needed — Innovation/Critique will resolve

**CONVERGED.** Proceeding to deliverable.

## Final Deliverable — The Structural Map

### 1. Territory Overview

The territory is the 5-chain corpus of correction events around route-memory operation naming and boundary drift. Major regions explored:
- **Vocabulary timeline (11 vocabulary events).**
- **Rename event attribution (5 events).**
- **Four candidate weakness axes (framing, Sensemaking vocabulary selection, Conclude wording, lack of user-language validation).**
- **Cross-chain pattern extensions (P1, P3, P11, P12, M6 refinement potential, TP3 effectiveness check).**
- **Aggregate-diagnostic confidence calibration.**
- **Maintenance candidate space (8+ candidates plus Q-RF).**
- **Operational-shape instability hypothesis (jump-scan finding).**

Resolution: chain-level granularity (5 inquiry findings + 11 vocabulary events). Each rename event probed at finding-content depth.

### 2. Inventory

**Vocabulary events (11):**

1. `prior_map_overlay` (chain origin; user-input adopted)
2. `prior route reconciliation` (chain origin; abstraction)
3. `Route Memory Review` (chain origin's corrected; replaces 1+2)
4. `Route-Memory Preflight` (primary corrected's user input; loop-adopted)
5. `route-memory status classification` (primary corrected; replaces 4)
6. `route_memory_status` + 5 status values (primary corrected; new vocabulary set)
7. `PastNavigationMemoryFile` (supporting context `2026-05-05_20-02`; loop-coined)
8. `source-present` / `past_navigation_memory_file: present` (supporting context `2026-05-05_20-02`; loop-coined)
9. `PastNavigationMemoryFile Index` (supporting context `2026-05-06_07-06`; user-suggested + loop-coined hybrid)
10. `PastNavigationMemoryFile Discovery Search` (supporting context `2026-05-06_10-21`; replaces 9)
11. `past_navigation_memory_candidates.md` (supporting context `2026-05-06_10-21`; run-local report)

**Rename events (5):** Events 1→3, 4→5, no-rename-but-pushback for 7+8, 9→10.

**Primary shortcomings (4):**
- A: Sensemaking vocabulary commitment without user-language validation (HIGH)
- B: Framing inheritance of unvalidated names (MEDIUM)
- C: Conclude amplification of unvalidated names (MEDIUM)
- D: Cross-cutting absence of explicit user-language validation step (HIGH; spans A+B+C)

**Maintenance candidate space (8 candidates + Q-RF):**
- U1: Sensemaking user-language validation check at Phase 5 (MEDIUM-HIGH)
- U2: Framing name-question check in `_branch.md` (MEDIUM)
- U3: Conclude name-validation check (MEDIUM)
- U4 / U8: M6-refinement-U (MEDIUM)
- U5: Mark prior finding corrected (HIGH; trivial)
- U6: Continue monitoring (HIGH; always-on)
- U7: TP3 refinement for vocabulary sub-type (MEDIUM-LOW)
- U9: Sensemaking operation-shape stability check at Phase 4 (MEDIUM; jump-scan finding)
- Q-RF Reinforcement (5th specific instance: vocabulary-naturalness; Research Frontier)

### 3. Signal Log

Signals detected during exploration:

- **[Density] Multiple rename events** — probed in Cycles 1-2.
- **[Tension] Some names replaced, others kept** — addressed via Cycle 2 attribution.
- **[Absence] No prior loop defended its name choice** — probed in Cycles 3-4 (Sensemaking + Conclude axes).
- **[Novelty] Naming churn alongside otherwise-robust findings** — addressed via Cycle 7 cross-stage analysis.
- **[Relevance] User pushback on 4 specific names** — probed in Cycle 5 (user-language validation axis).
- **[Asymmetry] User-supplied names adopted, loop-coined names unvalidated** — probed in Cycle 7.
- **[Cross-chain] P1 extends to 6th layer; P12 candidate at 1 chain** — addressed in Cycle 10.
- **[Q-RF] Fifth specific instance** — addressed in Cycle 13.
- **[Jump-scan] Operational-shape instability behind vocabulary** — probed in Cycle 14.

All signals probed or deliberately deferred (Q-RF stays Research Frontier; operational-shape framing acknowledged as deeper hypothesis without commitment).

### 4. Confidence Map

| Region | Confidence |
|---|---|
| Vocabulary timeline | Confirmed |
| Rename event attribution (5 events) | Confirmed |
| Stage attribution per event | Scanned |
| Sensemaking vocabulary commitment gap (Stage A) | Confirmed |
| Framing inheritance gap (Stage B) | Scanned |
| Conclude amplification gap (Stage C) | Scanned |
| User-language validation absence (Stage D) | Confirmed |
| Stage isolation within Sensemaking (Phase 4 vs Phase 5) | Inferred |
| P1 extension to 6th layer-sub-type | Confirmed |
| P3 extension to 4th sub-type | Inferred |
| P12 NEW family at 1 chain | Confirmed |
| M6 4th refinement candidate | Inferred |
| TP3 effectiveness against vocabulary sub-type | Unknown (chain 7's own Critique is the test) |
| Q-RF 5th instance | Confirmed |
| Operational-shape instability | Inferred |
| Maintenance candidate selection | Scanned |

**Confirmed absences:**
- No prior loop in the corpus has a "Terms Used Here" section comparable to chain 1's, except chain 1 itself.
- No prior loop's Critique evaluates vocabulary commitment as a dimension.
- No prior loop's Sensemaking has a user-language validation step.

### 5. Frontier State

The frontier between known and unknown is STABLE at finding-content resolution. Sensemaking and Decomposition can operate on the produced map. Remaining unknowns are appropriately deferred to downstream disciplines.

### 6. Gaps and Recommendations

**Bounded gaps for downstream disciplines:**

- **For Sensemaking:** which Sensemaking phase (Phase 4 / Functional Stabilization vs Phase 5 / Conceptual Stabilization) is the primary failure surface for vocabulary commitment? The exploration suggests Phase 5 but does not isolate.
- **For Decomposition:** how should the maintenance candidate space be partitioned — by stage (A/B/C/D) or by mechanism (validation/inheritance/amplification)?
- **For Innovation:** are U1 and U9 redundant or complementary? Should U1+U9 combined be a single candidate or two?
- **For Critique:** does TP3 fire against chain 7's vocabulary sub-type? If yes, vocabulary-naturalness becomes TP3's 4th sub-type.

**Cross-chain promotion implications:**

- M6 cumulative refinement count: currently 3. If M6-refinement-U promoted at chain 7, count reaches 4 → M6 consolidation review trigger fires.
- TP3 effectiveness check #1: chain 7's Critique is the first opportunity to test TP3.
- P1 extends to 6 chains × 6 layer-sub-types — strongest cross-chain claim continues to grow.
- P12 NEW family: if confirmed, a vocabulary-validation family joins the catalog at 1 chain (single-chain caveat applies).

**Aggregate-diagnostic verdict (preliminary):**

The aggregate-diagnostic constraint ("keep confidence lower unless evidence isolates a specific prior-loop failure") is satisfied by treating supporting context (`2026-05-05_20-02`) as the cleanest single-loop isolation. The verdict is likely ACTIONABLE-PARTIAL with explicit aggregate-diagnostic confidence caveats throughout.

CONCLUDE is NOT ruled out by exploration (remaining cycles will resolve the four-axis weighting). Proceed to Sensemaking.
