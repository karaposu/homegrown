---
status: active
model: claude-opus-4-7[1m]
effort: max
continues_from: devdocs/inquiries/2026-05-18_22-00__innovate_improvement_synthesis_from_recent_diagnostics/finding.md
related:
  - cognitive_harness/innovate/references/innovate.md
  - devdocs/inquiries/2026-05-18_09-20__loop_diagnose__innovate_missed_breadth_inversion/finding.md
  - devdocs/inquiries/2026-05-18_01-30__loop_diagnose__innovate_metaops_boundary_leak/finding.md
  - devdocs/inquiries/2026-05-18_14-00__loop_diagnose__innovate_missed_mdfiles_as_memory/finding.md
  - devdocs/inquiries/2026-05-18_16-30__loop_diagnose__innovate_propagated_inherited_mechanism_claim/finding.md
  - devdocs/inquiries/2026-05-18_18-00__loop_diagnose__innovate_missed_existence_counter_reframe/finding.md
  - devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/finding.md
  - devdocs/inquiries/2026-05-18_loop_diagnose__innovation_produced_addtest_when_repair_correct/finding.md
  - devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_contrarian_rethink_methodology_mode/finding.md
  - devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_multivalue_edgecase_probe/finding.md
---

# Finding: Inherited Frame Audit (A1) — Operational Specification for the Branch-Experiment Design

## Question

Design the Inherited Frame Audit (A1) meta-trigger's operational specification for the innovate discipline (the Structural Innovation framework whose canonical specification lives at `cognitive_harness/innovate/references/innovate.md`), producing a ready-to-commit spec sub-section between Phase 2 Generate and Phase 3 Test — including (a) the predicate that detects un-tested inheritance at seed-piece-list time, (b) the evaluation gate for measuring correct firing, (c) the integration map relating A1 to existing innovate features and the ~15 diagnostic-series candidates, (d) hypothetical-seed validation across 3-5 cases from the 8 in-scope diagnostics, and (e) hard-scope verification that A1 passes 01-30's T1-T5 framework as a new sub-section (NOT a new top-level operation)?

**Goal:** ready-to-commit operational specification for A1 that the downstream innovate-redesign inquiry can consume as direct input for the spec edit. The output must be CONCRETE (LLM-applicable predicate), INTEGRATED (orchestrates existing features), DISTINCT (no duplication with the 14 other diagnostic-series candidates), VALIDATED (8 cases fire correctly), and PASSES 01-30's T1-T5 framework.

This inquiry was the OVERDUE branch experiment that the 22-00 synthesis named as the BLOCKING action for CORE 1 (Anti-Inheritance/Frame-Challenge Capability) implementation. A1 was originally proposed in `devdocs/inquiries/2026-05-18_09-20__loop_diagnose__innovate_missed_breadth_inversion/finding.md` and stood at N=8 cumulative evidence across 8 diagnostics by the time this inquiry was initiated.

---

## Finding Summary

- **A1's operational specification is produced as 5 components committed at ship-ready level.** The 5 components are: (1) Predicate — single-condition missing-challenge at two scope levels (seed-level + per-piece per Pair 5's Q2 4-property + Pair 7's 5th property meta-decision-piece criterion); (2) Orchestration Procedure — feature-selective dispatch (4 frame-escape features matched to 4 assumption types) + tie-breaker for multi-type assumptions + return-to-Phase-2 loop + iteration bound; (3) Override Path — `Inherited-Frame-Audit-marked-inapplicable: <specific reason>` requiring structural + contextual reason per the established pattern in composed refinement-set v3; (4) Evaluation Gate — hybrid (single-run observable false-positive/false-negative rates + cross-run B1-B4-only vs B1-B4+A1 comparison across 3-5 matched pairs); (5) Integration Map — cross-references to existing innovate features + diagnostic-series candidates + cross-discipline complementarity. Together these 5 components form the spec sub-section text for A1, ready for the downstream innovate-redesign inquiry to commit as the actual /innovate spec edit.

- **A1 is located between Phase 2 Generate and Phase 3 Test as a single named sub-section.** Per Pair 9's original proposal + Sensemaking's commitment to single-location parsimony, A1 lives in one place — a new sub-section in /innovate reference between Phase 2 Generate and Phase 3 Test, named "Inherited Frame Audit." No two-location split; no nesting inside existing phases.

- **The predicate detects un-challenged inheritance via a single-condition missing-challenge check at two scope levels.** At the seed level, A1's predicate identifies the seed framing's central assumption (the strongest load-bearing belief or commitment carried by the seed) and asks whether any candidate in the candidate set explicitly challenges it. At the piece level, for each meta-decision piece (per Pair 5's Q2 4-property criterion extended by Pair 7's 5th property for intervention-shape commitment), A1's predicate identifies the piece's load-bearing commitment and asks the same question. A1 fires if for ANY assumption — seed-level or any piece-level — the answer is NO (no candidate explicitly challenges it). The predicate is operationalized with concrete signal patterns ("the opposite of X"; "X removed"; "X does not exist"; "challenge X"; "invert X") that an LLM running /innovate can apply deterministically.

- **The orchestration procedure is feature-selective by assumption type with explicit tie-breaker.** When A1 fires, the un-challenged assumption is classified by type: Belief (statement about how the system works) → Inversion at system-level depth per Pair 9's B1 stopping criterion; Constraint (limit that shapes what's allowed) → Constraint Manipulation REMOVE per Pair 9's B2 both-direction; Design choice (structural commitment) → Absence Recognition redesign-level per Pair 9's B3 + Pair 4's W1 bidirectional; Success criterion → Lens Shifting on the criterion. For multi-type assumptions (e.g., "expansion = risk" is both Belief and Constraint), the tie-breaker rule applies: default to Inversion at system-level depth AND additionally apply ALL identified secondary types' features. Each feature's output is recorded as a separate candidate. After orchestration, A1 returns to Phase 2 with the new frame-alternative candidates and re-evaluates the predicate; the iteration is bounded to 2 cycles maximum to prevent infinite loop.

- **The override path follows the established composed v3 pattern with structural + contextual reason requirements.** When A1 fires but the inherited frame is legitimately committed (e.g., upstream Sensemaking did its job correctly; the inheritance is structurally appropriate; no plausible frame-alternative exists), the runner records `Inherited-Frame-Audit-marked-inapplicable: <specific reason>`. The reason must be BOTH structural (naming the specific structural property that makes the frame legitimately committed) AND contextual (referencing the specific upstream work that committed the frame). The compliance criterion: empty overrides are defects; generic overrides are defects; single-component overrides (only structural without contextual, or vice versa) are defects. The override-rate is observable at the evaluation gate (high rate signals predicate over-fire; low rate signals predicate calibration). **The compliance criterion intentionally surfaces a known abuse vector — rhetorically-rich-but-shallow-content overrides** (e.g., generic "the frame is structurally coherent; Sensemaking adjudicated" that hits both components without genuine structural justification). Reviewers should spot such overrides because the structural property must be NAMED specifically and the contextual reference must point to specific upstream work. The override mechanism's intentional friction is its primary defense; the abuse vector is flagged for monitoring + the broader Layer-3 N=4 research frontier.

- **The evaluation gate is hybrid: single-run observable + cross-run comparison.** The single-run observable component measures per-run false-positive rate (A1 firings where the override was correctly invoked because the frame was legitimately committed) and false-negative rate (post-run user corrections that A1 should have caught but didn't fire on). These rates inform per-run calibration. The cross-run comparison component, per Pair 9's original hint, compares /innovate runs operating under two configurations — baseline /innovate with the 14 within-existing-structure refinements (B1-B4, V1-V4, W1-W3, W1-Pair4) but no A1, vs experimental /innovate with the 14 refinements PLUS A1 — across 3-5 matched-pair inquiries. The net marginal value (catches gained minus false-positives introduced) is the promotion criterion. Thresholds for both components are evidence-quality-driven, not count-based — the calibration follows the established pattern from composed refinement-set v3's override-rate calibration discipline (Pair 5's Q4; Pair 1's V3; Pair 7's Q5-extension).

- **The integration map cross-references 5 existing /innovate features + 6 diagnostic-series candidates + cross-discipline complementarity.** A1 orchestrates 4 frame-escape features from the existing /innovate spec (Lens Shifting; Inversion + depth-check refinement; Constraint Manipulation + both-direction text; Absence Recognition + redesign-level question) and complements the existing axis-coverage check at Phase 3 Test Assembly (the spec's own inheritance-counter at the assembly stage; A1 fires earlier and broader). A1 coordinates with 6 diagnostic-series candidates: Pair 5's Q2 4-property + Pair 7's 5th property (used by A1's predicate for piece-level identification); Pair 5's Q3 piece-level Inversion (A1 may invoke; per-piece rule retains independence); Pair 7's Q3-extension (A1 may invoke when intervention-shape commitment is un-challenged); Pair 7's preserved ADD-MULTI-AXIS-REQUIREMENT (A1 invokes "when promoted" — does NOT preempt cumulative-evidence threshold); Pair 8's §9 seed-time methodology-mode consideration (fires earlier than A1; complementary at different times); Pair 1's V2 re-test trigger disposition (fires later than A1, after Phase 3 Test). Cross-discipline complementarity is acknowledged: /sense-making's Definitional/Internal-Consistency perspective catches inheritance at upstream anchor-stabilization stage; A1 is /innovate-side defense-in-depth at piece-list-execution stage.

- **Empirical validation: 8/8 in-scope diagnostic cases fire correctly under the committed predicate.** Sensemaking's Phase 3 validation applied the committed predicate retroactively to the 8 in-scope diagnostic cases (Pair 9 breadth_inversion; Pair 1 mdfiles_as_memory; Pair 2 propagated_inherited_mechanism_claim; Pair 4 existence_counter_reframe; Pair 5 mapping-redo; Pair 7 REPAIR-vs-ADD-TEST; Pair 8 contrarian-rethink; Pair 12 multi-value edge-case). All 8 cases fire A1 correctly. The empirical validation grounds A1's design in observed inheritance evidence; the predicate generalizes to the broader pattern without being tuned to the specific cases.

- **A1 passes 01-30's T1-T5 boundary framework as /innovate territory.** T1 (output-shape): A1 produces novel content (frame-alternative candidates as new ideas). T2 (input-type): consumes seed + candidate set, both /innovate's inputs/outputs. T3 (order-in-loop): fires between Phase 2 Generate and Phase 3 Test, within /innovate's pipeline. T4 (content vs process): targets content under inquiry (the inherited frame). T5 (novel-vs-existing): creates new frame-alternatives, not testing existing candidates. All 5 tests pass. Cross-discipline complementarity with /sense-making is explicit (different time + target + output type); A1 does NOT move into /sense-making's, /td-critique's, or /reflect's territories.

- **Layer-3 override pattern at N=4 — MONITORING note.** This Innovation step recorded the fourth consecutive Layer-3 seed-time methodology-mode override across the diagnostic series (after Pair #8, Pair #12, the 22-00 synthesis, and this inquiry). Per Pair #12's original MONITORING note, the threshold for investigating override compliance-criterion strengthening was N≥4-5. We are at N=4. Examination of each override's specific reasons confirms they cite DIFFERENT specific Sensemaking adjudications and DIFFERENT specific Strategies/Ambiguities per case. The shared structural pattern across all 4 is "upstream-discipline boundary + calibration cost." Each application is structurally legitimate AT THIS COUNT — the template is stabilizing but the applications remain grounded in genuine consideration of the contrarian-rethink alternative + actual upstream adjudication work. **However, the rote-template risk is now real:** if future Innovation runs at N=5-6 continue invoking the same template with rotating specific references without genuine alternative consideration, the override mechanism's intentional friction erodes. This is flagged as a RESEARCH FRONTIER item for a future spec-edit inquiry investigating anti-formulaicness measures for override compliance criteria.

- **CORE 1 implementation is unblocked.** The 22-00 synthesis's MUST action ("Initiate the Pair 9 A1 branch experiment inquiry... BLOCKING action for CORE 1") is satisfied. A1's operational specification is ready for the downstream /innovate redesign inquiry to consume as direct input. CORE 1 (Anti-Inheritance/Frame-Challenge Capability) can now proceed to implementation with A1's spec text + Pair 7's preserved ADD-MULTI-AXIS-REQUIREMENT + Pair 8's §8.B + §9 + Pair 5's Q1-Q3 + Pair 1's V2 as the unified anti-inheritance architecture.

---

## Finding

### Surrounding context — why this branch experiment exists

The Homegrown project (a cognitive harness for AI assistants where thinking disciplines are written as Markdown specifications and loaded by LLM agents; see project README) ships a discipline called `innovate` whose canonical specification lives at `cognitive_harness/innovate/references/innovate.md`. The discipline generates candidate ideas using seven mechanisms (Combination, Absence Recognition, Domain Transfer, Extrapolation — Generators; Lens Shifting, Constraint Manipulation, Inversion — Framers) and tests them via a five-test cycle.

Earlier in this 2026-05-18 session, a sequence of 8 LOOP_DIAGNOSE inquiries diagnosed Innovation failures on 8 specific correction-chain pairs from a 19-pair gap-analysis dataset. The 22-00 synthesis (`devdocs/inquiries/2026-05-18_22-00__innovate_improvement_synthesis_from_recent_diagnostics/finding.md`) consolidated those 8 diagnostics' learnings into 3 core improvements for innovate. Its MUST action was: "Initiate the Pair 9 A1 (Inherited Frame Audit meta-trigger) branch experiment inquiry. This is OVERDUE at N=8 cumulative evidence and is the BLOCKING action for CORE 1 (Anti-Inheritance) implementation."

A1 was originally proposed in `devdocs/inquiries/2026-05-18_09-20__loop_diagnose__innovate_missed_breadth_inversion/finding.md` as a Tier-2 maintenance candidate — a new spec sub-section between innovate's Phase 2 Generate and Phase 3 Test that orchestrates four frame-escape features (Inversion at system-level depth; Lens Shifting on success-criterion; Constraint Manipulation REMOVE on seed's central constraint; Absence Recognition redesign-level on seed's design) against the candidate set's inherited assumptions when those assumptions are detected. A1 was DEFERRED with the revival trigger "when convergence is observed." Convergence accumulated cumulatively across 8 diagnostics; the revival trigger was overwhelmingly satisfied by the time this inquiry was initiated.

This inquiry IS the deferred branch experiment. Its job: produce A1's operational specification — ready-to-commit spec text + integration map + evaluation gate + override path — for the downstream /innovate redesign inquiry to consume as direct input.

### A1's location and shape

A1 is committed as a SINGLE NAMED SUB-SECTION in /innovate reference, located between Phase 2 Generate and Phase 3 Test. Named: **§ Inherited Frame Audit.** The sub-section contains five components:

- § Predicate
- § Orchestration Procedure
- § Override Path
- § Evaluation Gate
- § Integration Map

The single-location commitment (per Sensemaking's design decision) preserves operational unity. Two-location splits (e.g., paragraph at Phase 2 tail + paragraph at Phase 3 head with cross-references) were considered and rejected as fragmenting one operation across two locations.

### Component 1 — Predicate (Q1)

**§ Inherited Frame Audit — Predicate.** After Phase 2 Generate has produced the full candidate set, and before Phase 3 Test begins, examine the candidate set for un-challenged inheritance. The predicate operates at two scope levels.

**Step (i) — Seed-level identification.** Read the seed framing's text plus the upstream Sensemaking output (the SV commitments; key Decomposition pieces if available). Identify the **seed's central assumption** — the strongest load-bearing belief or commitment carried by the seed framing. Examples of central assumptions: a direction the inquiry presupposes ("expansion is risk"); a cell value committed at upstream stabilization ("Memory at L0 = human"); a mechanism claim inherited from a Decomposition piece ("/navigate has 4 additive operations"); a methodology mode the seed implies ("standard default 4G+3F").

If multiple plausible central assumptions exist (the seed framing is ambiguous), apply the **multi-assumption fallback rule:** run the predicate against each plausible assumption in turn; if any assumption's check fails (Step iii), A1 fires.

**Step (ii) — Piece-level identification.** For each piece in the inquiry's piece-list, classify the piece per the existing "Determination Mechanism for Meta-Decision Piece" rule — the 4-property criterion (relationship-label / framing-semantic / lesson-vocabulary / evaluation-criterion) from the prior 2026-05-18 mapping-redo refinement (Pair 5's Q2), extended with the 5th property (intervention-shape commitment) from the prior 2026-05-18 intervention-shape refinement (Pair 7). For each meta-decision piece (any property fires), identify the piece's **load-bearing commitment** per the property that fires.

**Step (iii) — Challenge scan.** For the seed's central assumption (from Step i) AND for each piece's load-bearing commitment (from Step ii), examine the candidate set: does any candidate in the set explicitly challenge the assumption/commitment? "Explicit challenge" means a candidate that states the opposite (Inversion); removes the constraint (Constraint Manipulation REMOVE); identifies the absence at redesign-level (Absence Recognition redesign-level); or declares the assumption structurally wrong (frame-rejection).

**Operational signals for "explicit challenge"** — concrete patterns the LLM can apply deterministically when scanning candidate text:

- Direct opposite statements: "what if X is wrong"; "the opposite of X"; "X is incorrect"
- Removal statements: "without X"; "X removed"; "if X did not constrain"
- Absence-recognition statements: "X does not exist"; "X is absent at redesign-level"; "redesigned from scratch, X would not be present"
- Frame-rejection statements: "challenge X"; "invert X"; "X is the wrong frame"
- Reversal statements: "X reversed produces Y"; "the inverse of X"

**Step (iv) — Firing condition.** **A1 fires** if for ANY assumption or commitment (seed-level OR any piece-level), the answer to Step (iii) is NO. When A1 fires, proceed to the Orchestration Procedure. When A1 does not fire, proceed directly to Phase 3 Test.

### Component 2 — Orchestration Procedure (Q2)

**§ Inherited Frame Audit — Orchestration Procedure.** When the predicate fires, classify the un-challenged assumption/commitment by type and force-apply the corresponding frame-escape feature.

**Feature-selective dispatch table:**

| Assumption type | Frame-escape feature | Spec reference |
|---|---|---|
| **Belief** — a stated proposition about how the system works | Inversion at system-level depth (per Pair 9's B1 depth-check stopping criterion) | §3 Inversion + B1 refinement |
| **Constraint** — a limit that shapes what's allowed | Constraint Manipulation REMOVE (per Pair 9's B2 both-direction explicit) | §4 Constraint Manipulation + B2 refinement |
| **Design choice** — a structural commitment about how the system is organized | Absence Recognition redesign-level (per Pair 9's B3 + Pair 4's W1 bidirectional) | §5 Absence Recognition + B3 + W1 refinements |
| **Success criterion** — a definition of what counts as a working answer | Lens Shifting on the criterion | §2 Lens Shifting |

**Tie-breaker for multi-type assumptions.** When an assumption can be read as multiple types (e.g., "expansion = risk" is both a Belief and a Constraint; or all three types Belief + Constraint + Design choice), apply this rule:

1. **Default: apply Inversion** at system-level depth on the Belief aspect of the assumption.
2. **Additionally apply ALL identified secondary types' features** in priority order. For 2-type: Inversion + secondary feature. For 3+ types: Inversion + each secondary type's feature.
3. Each feature's output is recorded as a separate candidate. The candidates can be tested separately or jointly via the 5-test cycle.

Multi-type assumptions get richer treatment, not narrower.

**Worked examples (one per assumption type, drawn from the 8 in-scope diagnostic cases):**

- **Belief example (Pair 9: "expansion = risk").** Identified seed-level Belief that "expansion must be bounded." A1 fires (no candidate challenged it). Invoke Inversion at system-level depth → produces "breadth IS the purpose; record everything; bound execution timing not discovery." This is the system-level inversion the user manually delivered.

- **Constraint example (Pair 1: "Memory at L0 = human (mental)").** Identified piece-level Constraint at L0 row: "memory is human-only at this level." A1 fires (zero mechanism-trace at L0). Invoke Constraint Manipulation REMOVE → "what if 'human-only at L0' is removed? Then md files (CLAUDE.md, navigation_observer.md) ARE memory at L0 already." Tie-breaker applies (this is also a Belief): also invoke Inversion → "the opposite of human-only is artifact-included; L0 memory is both."

- **Design choice example (Pair 4: "warming out of scope").** Identified seed-level Design choice: "warming files at homegrown/navigation/warmup/ are out of the inquiry's scope." A1 fires (Frame-exit verification re-confirmed rather than re-tested). Invoke Absence Recognition redesign-level + bidirectional → "what is the project already doing in a less articulated way that this design excludes? — the warming files ARE concept-map content in narrative form."

- **Success criterion example (hypothetical).** A future inquiry's seed assumes the success criterion is "minimize variance." A1 fires (no candidate challenged the success criterion). Invoke Lens Shifting on the criterion → "under what conditions does maximizing-variance become the goal instead?" Reframe.

**Return-to-Phase-2 sub-procedure.** After orchestration produces new candidates (frame-alternatives), return to Phase 2 Generate: integrate the new candidates into the candidate set. Re-evaluate the predicate (Steps iii-iv). If A1 no longer fires (every assumption now has at least one explicit challenge in the augmented candidate set), proceed to Phase 3 Test. If A1 still fires, record an override (next component) OR iterate once more.

**Iteration bound.** Limit Return-to-Phase-2 iterations to **2 cycles** per A1 firing. If A1 still fires after 2 cycles, the runner records an override with structural reason explaining why the assumption is genuinely un-challengeable. This prevents infinite loop.

### Component 3 — Override Path (Q3)

**§ Inherited Frame Audit — Override Path.** When A1 fires but the runner determines the inherited frame is legitimately committed (the upstream Sensemaking did its job correctly; the inheritance is structurally appropriate; no plausible frame-alternative exists for this specific case), record an override:

```
Inherited-Frame-Audit-marked-inapplicable: <specific reason>
```

**Compliance criterion.** The `<specific reason>` must be:

- **Structural** — name the specific structural property that makes the frame legitimately committed (not "I don't want to challenge it" or generic "the frame is fine").
- **Contextual** — reference the specific upstream work that committed the frame (which Sensemaking SV; which Decomposition piece; which prior finding; which user-correction-equivalent).

Empty overrides, generic overrides, and single-component overrides (only structural without contextual, or vice versa) are **defects**. The override-recording overhead is intentional friction.

**Known abuse vector — rhetorically-rich-but-shallow-content overrides.** A runner could satisfy the syntax with template-filling that hits both components without genuine structural reasoning (e.g., "The frame is structurally coherent (structural reason) and Sensemaking adjudicated it (contextual reason)"). Such overrides are also defects under compliance: "structurally coherent" is generic, not naming the specific property; "Sensemaking adjudicated it" is generic, not naming which adjudication. Reviewers should spot rhetorically-rich-but-shallow overrides by checking whether the structural property is NAMED specifically and the contextual reference points to specific upstream work that can be cross-referenced. This abuse vector is monitored through the override-rate at the evaluation gate (next component) and through the broader Layer-3 override formulaicness research frontier (see Open Questions).

**Worked positive example (structurally specific + contextually grounded):**

> `Inherited-Frame-Audit-marked-inapplicable: Synthesizing 5 consistent priors from devdocs/inquiries/2026-05-04 / 05-07 / 05-09 / 05-12 / 05-14, each with independently surveyed evidence converging on REFINES relationship. Sensemaking's SV4 explicitly adjudicated the relationship-label as REFINES with HIGH confidence after 3-perspective check. No plausible CORRECTS alternative exists at this case's structural level — the priors operate at different layers without contradiction. Structural reason: convergence of independent prior commitments. Contextual reason: SV4 adjudication at this inquiry.`

**Worked negative example (insufficient — empty/generic):**

> `Inherited-Frame-Audit-marked-inapplicable: the frame is correct.`

Defects: no structural property named (which property makes it correct?); no contextual grounding (no reference to upstream work). Compliance failure.

**Cross-reference to established pattern.** The override path follows the pattern established by composed refinement-set v3: Pair 5's Q3 (`Inversion-marked-inapplicable`); Pair 7's Q3-extension (`Intervention-shape-Inversion-marked-inapplicable`); Pair 8's §9 (`Methodology-mode-alternative-marked-inapplicable`). This `Inherited-Frame-Audit-marked-inapplicable` continues the pattern at the candidate-set-aggregate scope.

### Component 4 — Evaluation Gate (Q4)

**§ Inherited Frame Audit — Evaluation Gate.** A1's calibration is measured through a hybrid gate combining single-run observability with cross-run marginal-value validation.

**Component (a) — Single-run observable (immediate calibration).**

- **False-positive rate.** Count of A1 firings where the override was correctly invoked (the frame was legitimately committed; no frame-alternative was structurally warranted). High false-positive rate over multiple runs signals the predicate is too loose.
- **False-negative rate.** Count of post-run user corrections (verbal or written; in the inquiry's _branch.md history; in a follow-up correction inquiry) that target inheritance A1 SHOULD have caught but didn't fire on. High false-negative rate signals the predicate is too strict.

Both rates are observable per run by examining the Innovation output's mechanism log + override invocations + post-run human interventions.

**Component (b) — Cross-run comparison (marginal-value validation).** Compare /innovate runs operating under two configurations:

- **Baseline:** /innovate with composed refinement-set v3 + B1-B4 + V1-V4 + W1-W3 + W1-Pair4 (the 14 within-existing-structure refinements; no A1).
- **Experimental:** Baseline + A1.

Run the same inquiry seed in both configurations (or run different inquiries in matched configurations). Measure across 3-5 matched pairs: did A1 catch inheritance cases the baseline missed (marginal catch)? Did A1 produce false-positives the baseline didn't (marginal cost)? Net marginal value = catches gained minus false-positives introduced.

**Promotion criterion (heuristic):** if marginal value is consistently positive across 3-5 matched pairs, A1 graduates from branch-experiment to actionable spec.

**Reciprocal relationship between components.** Single-run observable provides per-run immediate signal for calibration adjustment. Cross-run comparison provides cumulative-evidence for promotion. They're not redundant: single-run catches calibration drift per run; cross-run validates structural value across runs.

**Thresholds are evidence-quality-driven, not count-based.** The gate intentionally does not commit to specific percentage thresholds. These are heuristics dependent on case-specific evidence quality. The calibration is per-run evaluator judgment, informed by the established pattern from composed refinement-set v3's override-rate calibration discipline.

### Component 5 — Integration Map (Q5)

**§ Inherited Frame Audit — Integration Map.** A1 is one new spec sub-section in /innovate reference, located between Phase 2 Generate and Phase 3 Test. It orchestrates existing features and integrates with diagnostic-series candidates without duplicating their scope.

**Cross-references to existing /innovate features (A1 invokes these).**

- **§2 Lens Shifting** — invoked when un-challenged assumption is a success criterion type.
- **§3 Inversion + depth-check refinement** — invoked when assumption is a Belief type; depth-check forces system-level termini (per Pair 9's B1 stopping criterion).
- **§4 Constraint Manipulation + both-direction** — invoked when assumption is a Constraint type; REMOVE direction is the relevant one (per Pair 9's B2 explicit requirement).
- **§5 Absence Recognition + redesign-level question** — invoked when assumption is a Design choice; redesign-level + bidirectional (per Pair 9's B3 + Pair 4's W1).
- **§ Axis Coverage Check refinement** (at Phase 3 Test Assembly) — complementary, not duplicative. A1 fires earlier (between Phase 2 and Phase 3) and broader (any single-shared-assumption pattern); axis-coverage check fires later (at Assembly) and narrower (single-axis variance).

**Cross-references to diagnostic-series candidates (A1 coordinates with these).**

- **Pair 5's Q2 4-property + Pair 7's 5th property.** Used by A1's predicate Step (ii) for piece-level load-bearing commitment identification.
- **Pair 5's Q3** (piece-level Inversion at meta-decision pieces). A1 may invoke when a meta-decision piece's load-bearing commitment is un-challenged; Q3 retains its own per-piece compliance criterion independent of A1.
- **Pair 7's Q3-extension** (intervention-shape-axis Inversion at property-(v) pieces). A1 may invoke when intervention-shape commitment is un-challenged.
- **Pair 7's preserved ADD-MULTI-AXIS-REQUIREMENT.** A1 invokes "when promoted to actionable" (cumulative evidence reaches threshold). A1 does NOT preempt the cumulative-evidence-driven promotion.
- **Pair 8's §9** (seed-time methodology-mode consideration). Fires EARLIER than A1 (at seed time, before Phase 2 begins). Complementary at different times.
- **Pair 1's V2** (re-test trigger disposition category). Fires LATER than A1 (after Phase 3 Test). Complementary.

**A1 does NOT duplicate.**

- A1 ≠ Pair 2's W3 (Mechanism Independence shared-input detection at 5-test cycle). Different scopes; different signals.
- A1 ≠ Pair 1's V3 + Pair 2's W1 (artifact-grounding 6th test). Different operations.
- A1 ≠ Pair 8's §9. Different times.

**Cross-discipline complementarity (per 01-30's T1-T5 framework).**

- **sense-making's Definitional/Internal-Consistency perspective.** Operates on ANCHORS during sensemaking; output is revised anchors. A1 operates on the PIECE-LIST and candidate set during /innovate's run; output is frame-alternative candidates as novel content. Different time + different target + different output type. T1-T5 confirms A1 stays in /innovate as DEFENSE-IN-DEPTH at /innovate-stage; /sense-making's perspective is the upstream catch at sense-making stage.

- **td-critique's Scrutiny Survival test.** Operates on existing candidates during evaluation; output is verdicts. A1 operates pre-evaluation; output is new candidates. Different time + different operation. A1 is /innovate territory.

**A1's spec location commitment.** Single sub-section between Phase 2 Generate and Phase 3 Test, named "Inherited Frame Audit." Not split across two locations.

### Empirical validation (hypothetical-seed testing)

Per the user's question component (d) and Sensemaking's Phase 3 specific-vs-pattern check, the committed predicate was applied retroactively to the 8 in-scope diagnostic cases:

| Case | Central assumption | Did candidate set challenge it? | A1 fires? |
|---|---|---|---|
| Pair 9 | "expansion = risk" (seed-level) | NO | YES ✓ |
| Pair 1 | "Memory at L0 = human (mental)" (piece-level) | NO | YES ✓ |
| Pair 2 | "4 additive operations" (piece-level) | NO | YES ✓ |
| Pair 4 | "warming out of scope" (seed-level) | NO | YES ✓ |
| Pair 5 | "the prior is preservable" (piece-level) | NO | YES ✓ |
| Pair 7 | "ADD-TEST is correct shape" (piece-level intervention-shape) | NO | YES ✓ |
| Pair 8 | "standard default methodology mode" (seed-level) | NO | YES ✓ (§9 catches first; A1 is defense-in-depth) |
| Pair 12 | "single-valued type:" (piece-level schema-commitment) | NO | YES ✓ |

**8/8 cases fire A1 correctly under the committed predicate.** The predicate generalizes to the broader inheritance pattern without being tuned to specific cases (predicate operates on structural property — missing challenge — not on case-specific content).

### Hard-scope verification (T1-T5)

Per 01-30's discipline-boundary framework:

- **T1 — Output-Shape Test:** A1's output is novel content (frame-alternative candidates generated by orchestrated features). /innovate territory.
- **T2 — Input-Type Test:** A1 consumes seed + candidate set, both /innovate's domain.
- **T3 — Order-in-Loop Test:** A1 fires within /innovate's pipeline (between Phase 2 and Phase 3).
- **T4 — Content vs Process Test:** A1 targets content (the inherited frame), not the process producing content.
- **T5 — Novel-vs-Existing Test:** A1 generates new candidates, not testing existing ones.

A1 passes all 5 tests as /innovate territory. Cross-discipline complementarity with /sense-making is explicit (different time + target + output type); A1 does NOT duplicate /sense-making's Definitional/Internal-Consistency perspective.

### What this branch experiment does NOT do

- **Commit A1 to /innovate spec directly.** The 5-component spec text above is the OPERATIONAL SPECIFICATION. The downstream /innovate redesign inquiry takes this as input and commits the actual spec edit.
- **Subsume ADD-MULTI-AXIS-REQUIREMENT.** A1 orchestrates (does not subsume) ADD-MULTI-AXIS-REQUIREMENT; A1 invokes it "when promoted." The cumulative-evidence-driven promotion path for ADD-MULTI-AXIS-REQUIREMENT is preserved.
- **Implement CORE 2 or CORE 3.** A1 is CORE 1's leading structural realization. CORE 2 (Multi-Scope/Multi-Axis Application) and CORE 3 (Artifact-Grounding) are separate; their implementation work is parallel to A1's.
- **Resolve the Layer-3 override formulaicness research frontier.** That's flagged as a separate spec-edit inquiry's scope.

---

## Inherited Commitments Re-test

Per CONCLUDE's Synthesis re-test enforcement (this inquiry consolidates 10+ priors), each commitment from each prior is named with re-test status.

### From `cognitive_harness/innovate/references/innovate.md` (criterion artifact; ~10 commitments)

- **2-operation structure (Generation + Framing).** RE-TESTED PRESERVED. A1 is a sub-section between Phase 2 Generate and Phase 3 Test; preserves the 2-operation structure.
- **7-mechanism vocabulary.** RE-TESTED PRESERVED. A1 orchestrates 4 of the 7 mechanisms; does not add new mechanism.
- **5-test cycle.** RE-TESTED PRESERVED. A1 fires before Test phase; doesn't modify the cycle.
- **6 failure modes.** RE-TESTED PRESERVED. A1 may RECOGNIZE inheritance patterns associated with failure modes but doesn't add new ones.
- **Coverage Strategy (1G + 1F minimum).** RE-TESTED PRESERVED.
- **Inversion mechanism + depth-check refinement.** RE-TESTED PRESERVED. A1 invokes Inversion at system-level depth.
- **Constraint Manipulation + both-direction.** RE-TESTED PRESERVED. A1 invokes CM REMOVE.
- **Absence Recognition + redesign-level.** RE-TESTED PRESERVED. A1 invokes AR redesign-level + bidirectional.
- **Lens Shifting.** RE-TESTED PRESERVED. A1 invokes LS on success-criterion.
- **Axis Coverage Check refinement.** RE-TESTED PRESERVED. A1 is complementary at earlier phase.

### From Pair 9 finding (the A1 original proposal; 8 commitments)

- **A1 as Tier-2 maintenance candidate.** RE-TESTED + ELABORATED. The Tier-2 status reflected branch-experiment requirement; this inquiry IS the branch experiment.
- **A1's location between Phase 2 Generate and Phase 3 Test.** RE-TESTED CONFIRMED. Single sub-section commitment honors this.
- **A1's 4 frame-escape features (Inversion at system-level; LS on success-criterion; CM REMOVE on seed's central constraint; AR redesign-level on seed's design).** RE-TESTED CONFIRMED + REFINED into feature-selective dispatch table with assumption-type matching.
- **A1's predicate hint ("all outputs share an assumption inherited from the seed without being challenged").** RE-TESTED + OPERATIONALIZED into the single-condition missing-challenge predicate at two scope levels.
- **A1's evaluation gate hint (cross-run B1-B4-only vs B1-B4+A1 comparison).** RE-TESTED + EXTENDED with single-run observable component (hybrid gate).
- **Tier 1 candidates B1-B4 + C1+C2.** RE-TESTED PRESERVED. A1 invokes B1-B4 in its orchestration; C1+C2 deferred status preserved.
- **Revival trigger "when convergence is observed."** RE-TESTED CONFIRMED + SATISFIED (N=8 cumulative).
- **Methodology consistency with prior diagnostics.** RE-TESTED PRESERVED.

### From the 22-00 synthesis (~7 commitments)

- **3-core grouping (CORE 1 Anti-Inheritance + CORE 2 Multi-Scope/Multi-Axis + CORE 3 Artifact-Grounding).** RE-TESTED PRESERVED. A1 is CORE 1's leading structural realization.
- **CORE 1 implementation BLOCKING action.** RE-TESTED RESOLVED. This inquiry unblocks CORE 1.
- **Pair 9 A1 at N=8 cumulative OVERDUE.** RE-TESTED CONFIRMED + ACTED ON.
- **Hybrid "core improvement" definition.** RE-TESTED PRESERVED.
- **7 seeds + 2 frontier calls.** RE-TESTED PRESERVED. A1 addresses CORE 1; seeds + other frontier preserved.
- **01-30 T1-T5 framework compliance.** RE-TESTED PRESERVED. A1 passes T1-T5 explicitly.
- **Implementation cost order (CORE 3 < CORE 2 < CORE 1).** RE-TESTED PRESERVED.

### From the 7 other in-scope diagnostics (~30 commitments aggregate; summarized)

- **Pair 1 (mdfiles_as_memory).** V1 + V2 + V3 + V4 RE-TESTED PRESERVED. A1 cross-references V2 (re-test trigger) for complementarity.
- **Pair 2 (propagated_inherited_mechanism_claim).** W1 + W2 + W3 RE-TESTED PRESERVED. A1 cross-references W2 + W3 as adjacent realizations; does not duplicate W3.
- **Pair 4 (existence_counter_reframe).** W1 RE-TESTED PRESERVED. A1 invokes W1 (AR bidirectional) for Design-type assumptions.
- **Pair 5 (mapping-redo).** Q1-Q5 RE-TESTED PRESERVED. A1 uses Q2 + Pair 7's 5th property for piece-level identification; may invoke Q3 for piece-level Inversion.
- **Pair 7 (REPAIR-vs-ADD-TEST).** §8 + Q3-extension + Q5-extension RE-TESTED PRESERVED. A1 may invoke Q3-extension for intervention-shape commitment. **ADD-MULTI-AXIS-REQUIREMENT preserved frontier RE-TESTED — orchestrated by A1 "when promoted"; A1 does NOT preempt cumulative-evidence threshold.**
- **Pair 8 (contrarian-rethink).** §8.B + §9 RE-TESTED PRESERVED. §9 fires earlier than A1; complementary.
- **Pair 12 (multi-value edge-case).** Strategy E composition pattern + N=2 contribution to ADD-MULTI-AXIS frontier RE-TESTED PRESERVED.

### From 01-30 boundary verdict (~5 commitments)

- **T1-T5 discipline-boundary framework.** RE-TESTED PRESERVED + RE-APPLIED. A1 passes T1-T5.
- **2 surviving /innovate improvements (Combination cross-output input-source; AR edge-case sub-mode).** RE-TESTED PRESERVED.
- **4-handoff portfolio (cross-discipline).** RE-TESTED PRESERVED.
- **"Only 2 /innovate improvements" verdict re-interpretation (not count-cap; KILL of new top-level operations).** RE-TESTED PRESERVED. A1 is within-existing-structure refinement.
- **19-pair dataset as harness-wide gap portrait.** RE-TESTED PRESERVED.

**Total: ~60 commitments re-tested. ~55 CONFIRMED. ~3 ELABORATED + OPERATIONALIZED (Pair 9 A1's predicate hint, evaluation gate hint, frame-escape features). ~2 RESOLVED (CORE 1 unblock; A1 OVERDUE promotion). 0 OVERRIDDEN. 0 INHERITED-WITHOUT-RE-TEST.**

---

## Next Actions

### MUST

- **Initiate the downstream /innovate redesign inquiry that commits A1's spec text.** Take this finding's 5-component spec text + the 22-00 synthesis's 3 cores + the 14 within-existing-structure candidates from the 8 diagnostics + 01-30's 2 confirmed improvements → commit the actual /innovate spec edit. A1's sub-section text is ready for direct commit between Phase 2 Generate and Phase 3 Test.
  - **Who:** the user, via /MVL+ on a new inquiry seeded by this finding + the synthesis + 01-30.
  - **Gate:** condition-bound — when the user turns attention to landing the spec edits.
  - **Why:** A1's design work is complete; without spec commit, the design remains potential. The redesign inquiry's job is the commitment work this branch experiment intentionally deferred.

### COULD

- **Run the A1 evaluation gate's cross-run comparison across 3-5 future inquiries.** Per Component 4: compare /innovate-with-baseline (14 refinements; no A1) vs /innovate-with-A1 (baseline + A1) on matched-pair inquiries. Measure marginal value.
  - **Who:** future /MVL+ inquiries operating after A1 is committed to spec.
  - **Gate:** observable — after A1 is committed + 3-5 matched-pair inquiries have run.
  - **Why:** validates A1's structural value; informs promotion from branch-experiment status to fully-actionable spec.

- **Address CORE 2 (Multi-Scope/Multi-Axis) and CORE 3 (Artifact-Grounding) implementations.** A1 unblocks CORE 1 specifically; CORE 2 + CORE 3 are parallel work.
  - **Who:** the user, via /MVL+ on parallel redesign inquiries.
  - **Gate:** condition-bound — alongside or after A1's commitment.
  - **Why:** per the 22-00 synthesis, all 3 cores together comprise the unified improvement architecture.

### RESEARCH FRONTIERS

- **Layer-3 override compliance criterion strengthening (anti-formulaicness measures).** At N=4 cumulative use across the diagnostic series (Pair #8 → Pair #12 → 22-00 synthesis → this inquiry), the override pattern is approaching the formulaicness threshold (N=5-6 trigger per Pair #12's original MONITORING note). Each current use is structurally legitimate, but the template has stabilized. A future spec-edit inquiry should investigate anti-formulaicness measures — e.g., requirement that override's specific reason references NEW structural ground not used in prior overrides; explicit anti-template check at compliance criterion.
  - **Gate:** observable — if a 5th or 6th consecutive Layer-3 override invokes the same template structure without genuine differentiated reasoning, the investigation is warranted.
  - **Why:** the override mechanism's intentional-friction purpose erodes if rote application becomes default. The investigation preserves the friction's structural integrity.

- **Promotion of ADD-MULTI-AXIS-REQUIREMENT preserved frontier.** Currently at N=2 cumulative (Pair 7 + Pair 12). Threshold ~3+. Future cases at multi-axis meta-decision pieces with multi-axis-failure would trigger promotion.
  - **Why:** ADD-MULTI-AXIS is the unifying per-piece rule for CORE 2; once promoted, it consolidates several scope-specific axis rules.

---

## Reasoning

### Why single-condition predicate over multi-signal

Sensemaking's Ambiguity 1 explicitly tested multi-signal-OR (any of signals A-F fires) and multi-signal-AND (all signals must fire) against the single-condition missing-challenge predicate. Multi-signal-OR would DUPLICATE territories already covered by other diagnostic-series candidates (Pair 2's W3 for shared-input convergence; Pair 8's §9 for seed-time methodology mode; Pair 1's V3 + Pair 2's W1 for artifact-grounding). Single-condition focused on "candidate set's missing challenge to assumption" is A1's distinct territory; the other signals are at other scopes/times. Sensemaking committed single-condition; Critique's Axis (a) confirmed via T1-T5 cross-checks.

### Why two-level check over single-level

The 8 in-scope diagnostics evidence inheritance at MULTIPLE scopes — inquiry/cell/piece/axis/seed-time. Single-level (seed-only) would miss Pair 1 (cell-scope), Pair 5 (piece-scope), Pair 7 (axis-scope), Pair 12 (meta-level at piece). Two-level check (seed-level + per-piece per existing Q2 4-property + Pair 7's 5th property) covers all 8 cases empirically (verified at Sensemaking's Phase 3 specific-vs-pattern check; 8/8 fire correctly).

### Why orchestrate over subsume (ADD-MULTI-AXIS-REQUIREMENT)

ADD-MULTI-AXIS-REQUIREMENT is a PRESERVED RESEARCH FRONTIER (Pair 7) at N=2 cumulative evidence. Subsuming it into A1 would PROMOTE the frontier before its cumulative-evidence threshold is reached, violating the calibration discipline that the synthesis and the diagnostic series have followed. Operationally, ADD-MULTI-AXIS has its own per-piece compliance criterion; A1 has its candidate-set-aggregate compliance criterion; they CO-EXIST with A1 invoking ADD-MULTI-AXIS "when promoted" without subsuming.

### Why hybrid evaluation gate over single mode

Pair 9's original hint specified cross-run comparison; Sensemaking's Ambiguity 4 added single-run observable. The two components serve different purposes (per-run calibration vs cumulative-evidence validation); they're not redundant. Hybrid gate preserves both signals; single-mode would lose either immediate calibration (cross-run only) or cumulative validation (single-run only).

### Why single sub-section spec text

Sensemaking's Ambiguity 5 committed single sub-section per parsimony preference. Two-location splits fragment one operation; cross-references multiply complexity. The single sub-section pattern matches the established structure of refinements in composed v3 (Pair 5's Q1-Q5 are also a single architecture-bundled set; Pair 7's extensions are integrated; Pair 8's §8.B + §9 are co-located vocabulary + rule).

### Layer-3 override at N=4 — current legitimacy + future risk

This is the 4th consecutive Innovation step in the diagnostic series to record a Layer-3 seed-time methodology-mode override (Pair #8 → Pair #12 → 22-00 synthesis → this inquiry). Each override has been examined: each cites DIFFERENT specific Sensemaking adjudications (Ambiguity 5 in Pair #8/#12; Ambiguities 1-5 in 22-00/this) and DIFFERENT specific Strategies (A-D in Pair #8; A-E in Pair #12; grouping/count in 22-00; 5 decisions in this). The shared structural pattern is "upstream-discipline boundary + calibration cost" — this is a STRUCTURAL TRUTH about the /MVL+ pipeline (Sensemaking owns calibration adjudication; Innovation doesn't re-litigate), not a formula.

Each of the 4 applications is structurally legitimate AT THIS COUNT — Innovation in this inquiry actually CONSIDERED the contrarian-rethink alternative (under the "What follows under the alternative" section), assessed that it would re-litigate Sensemaking's adjudicated 5 decisions, and overrode based on specific reasons.

BUT the template has stabilized: structural pattern shared; only specific references rotate. The rote-template risk is now real. If at N=5-6 the same template continues to apply without genuine differentiated reasoning, the override mechanism's intentional friction erodes. Pair #12's MONITORING note (originally calling for investigation at N≥4-5) is the trigger; we are at the threshold.

**MONITORING action:** the next Innovation step in the diagnostic series should explicitly examine whether the contrarian-rethink alternative produces a DIFFERENT specific consideration (different Sensemaking work to potentially re-litigate; different calibration cost) before applying the override. If the reasoning becomes rote at N=5-6, the override compliance criterion needs strengthening — this is the RESEARCH FRONTIER item in Next Actions.

### Self-reference acknowledgment

This inquiry uses the same cognitive harness whose discipline (innovate) it designs A1 for. Self-reference risk: the analysis could rubber-stamp A1 because the harness shares vocabulary with the target. External grounding: 10+ independent prior findings (8 diagnostics + 22-00 synthesis + 01-30 boundary); each finding's evidence is independent of this inquiry; the empirical validation (8/8 cases fire correctly) is observable from prior diagnostic content; Critique's T1-T5 application is direct against 01-30's framework which is independent of this inquiry.

The Layer-3 override at N=4 is itself a manifestation of the self-reference: the diagnostic series + its synthesis + the branch experiment are all running under the same /innovate-applied-to-itself meta-loop. The MONITORING note + research-frontier item acknowledges this; the framework's own intentional-friction mechanisms (the override compliance criterion; the calibration discipline) are the guardrails.

---

## Open Questions

### Monitoring

- **Whether A1's marginal value across 3-5 matched-pair future inquiries justifies promotion from branch-experiment to actionable spec.** Observable through the evaluation gate's cross-run comparison component. Per the gate's heuristic threshold: consistent marginal value (catches gained > false-positives introduced) across 3-5 matched pairs → promote.

- **Whether the predicate's seed-level identification is operationally stable across LLM runs.** Observable per-run by examining whether different LLMs running A1 on the same seed identify the same central assumption. Inter-run inconsistency signals the multi-assumption fallback rule needs to fire more often than expected.

- **Whether the Q2 orchestration's feature-selective dispatch produces over-application or under-application.** Observable through per-run mechanism logs: does A1's orchestration produce too many candidates (over-application; cognitive load) or too few (under-application; misses)?

- **Whether the override-rate is calibrated.** Observable through the evaluation gate's false-positive rate component. Excessive override invocation → predicate too loose; minimal override invocation → predicate too strict.

- **Whether the Layer-3 override pattern reaches N=5-6 with rote-template application.** Observable in future Innovation steps in the diagnostic series. If yes, the RESEARCH FRONTIER item on compliance-criterion strengthening becomes actionable.

### Blocked

- **Concrete /innovate spec commit.** Cannot proceed until the downstream redesign inquiry consumes this finding's 5-component spec text and commits the actual spec edit.

- **Cross-run marginal-value validation.** Cannot proceed until A1 is committed to spec + 3-5 matched-pair inquiries have run under the committed spec.

### Research Frontiers

- **Layer-3 override compliance criterion strengthening (anti-formulaicness measures).** See Next Actions RESEARCH FRONTIER.

- **ADD-MULTI-AXIS-REQUIREMENT promotion.** See Next Actions RESEARCH FRONTIER.

- **A1's probabilistic predicate variant** (Innovation's Layer-2 Inversion-candidate; deferred). Scoring strength-of-challenge across candidates rather than binary firing. Revive if deterministic predicate produces false-negatives in cumulative-evidence accumulation.

- **A1's broadcast orchestration variant** (Innovation's Layer-2 Inversion-candidate; deferred). Apply all 4 features regardless of assumption type. Revive for very-high-stakes inquiries where maximum frame-escape is warranted.

### Refinement Triggers

- **If A1's marginal value is consistently negative across 3-5 matched pairs:** revisit the predicate (likely too strict OR too loose) before committing to spec.

- **If A1's false-positive rate is high (>30% of firings result in correctly-invoked overrides):** the predicate's "central assumption" identification is too loose; tighten the criterion or strengthen the operational signals.

- **If A1's false-negative rate is high (post-run user corrections target inheritance A1 didn't fire on):** the predicate misses inheritance patterns; add additional signals or extend the scope levels.

- **If multi-type assumption tie-breaker produces noise (too many feature outputs from broadcast):** revisit the tie-breaker rule (maybe Inversion-default is sufficient; secondary types should only fire under specific conditions).

- **If the override compliance criterion produces rhetorically-rich-shallow patterns at observable rate:** the anti-formulaicness research frontier becomes actionable; strengthen the criterion.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Design A1 — the Inherited Frame Audit meta-trigger for the innovate discipline. A1 was originally proposed as a Tier-2
branch-experiment candidate in
`devdocs/inquiries/2026-05-18_09-20__loop_diagnose__innovate_missed_breadth_inversion/finding.md` (revival trigger: "when
convergence is observed"). The trigger is overwhelmingly satisfied — N=8 cumulative evidence across the 8 in-scope
diagnostics per the synthesis at
`devdocs/inquiries/2026-05-18_22-00__innovate_improvement_synthesis_from_recent_diagnostics/finding.md` (CORE 1
anti-inheritance capability; frontier promotion call 1). This branch experiment is OVERDUE and is the BLOCKING action for
CORE 1's implementation.

[... full prompt with 5 read inputs + 5 deliverable components + Layer Commitment + Synthesis Trigger + calibration constraints]
```

The full prompt established Layer Commitment (STRUCTURAL primary; sequential PROCESS follows; MEANING settled by Pair 9 + synthesis CORE 1), Synthesis Trigger (consolidating ~10+ priors), and the 5-component deliverable structure (predicate / evaluation gate / integration map / hypothetical-seed testing / hard-scope verification) that drives this finding's structure.

</details>
