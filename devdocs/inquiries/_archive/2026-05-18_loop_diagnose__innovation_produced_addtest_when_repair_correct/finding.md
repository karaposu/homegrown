---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Innovation Produced ADD-TEST When REPAIR Was Correct — Diagnostic of an Axis-of-Inversion Gap at Intervention-Shape-Commitment Pieces

## Question

From `_branch.md`:

> Given the weak prior inquiry at `devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/` (whose Innovation produced **M1: ADD a sixth scope-fidelity-to-framing test to `/innovate`'s Phase 3** as the primary maintenance candidate), the human correction (*"this is not a simple misunderstanding. we want to detect the bad part of that skill to remove it not just add more tests... refocus on homegrown/innovate/references/innovate.md to understand this error. also u can compare with old version which did not had such errors..."*), and the corrected inquiry at `devdocs/inquiries/2026-05-14_15-00__find_innovate_spec_regression_remove_root_cause/` (which switched intervention shape from ADD-TEST to REPAIR, performed a diff against an older `/innovate` version, identified the load-bearing problematic spec text, and downgraded the previously-named "loop-stage scope-leakage" failure mode to a descriptive phrase) — **what did the Innovation discipline in the weak prior fail to do that it produced ADD-TEST as the intervention shape when REPAIR was the structurally correct shape, focusing strictly on Innovation's own responsibility surface per `cognitive_harness/innovate/references/innovate.md` and excluding what other disciplines should have done**?

**Goal:** an evidence-backed Innovation-only diagnostic on this T4 correction chain, distinguishing structurally from the prior 2026-05-18 diagnostic on the T2 mapping-redo case (Gap-1 territory), addressing Gap-2 (T4 procedural-meta absence) of the prior `2026-05-17_22-51` gap-analysis. Output composes with the prior 2026-05-18 refinement-set as input for future `/innovate` redesign.

---

## Finding Summary

- **Where Innovation failed.** At the M1 piece in the weak prior `14-00`'s saved Innovation output (the piece that committed the intervention-shape choice for the maintenance candidate), Innovation applied Inversion at piece-level — satisfying the prior 2026-05-18 diagnostic's Q3 compliance criterion — but the Inversion targeted the **content axis** ("turn the check inward") rather than the **intervention-shape axis** ("what if ADD-TEST is the wrong shape — what would REPAIR or REVERT look like?"). The piece's load-bearing commitment was intervention shape (ADD-TEST); the Inversion was applied to an adjacent content commitment (check direction). Across the entire saved Innovation output, every Inversion application is content-axis; none is intervention-shape-axis. The Q3 compliance criterion as written checks for an Inversion-candidate at piece-level but does not reach axis-level.

- **Why the failure occurred — three layered structural anchors in `/innovate` reference.** Three structural gaps compose to produce the observed failure:
  - **Spec vocabulary level.** `/innovate` reference (the canonical specification at `cognitive_harness/innovate/references/innovate.md`) is uniformly content-axis-oriented. The seven mechanism descriptions, the six failure modes, the Coverage Strategy, and the Mechanism Coverage Telemetry all describe Innovation's operations in content-axis terms. No enumeration of intervention shapes (ADD, REMOVE, REPAIR, REVERT, REFRAME-AS-BUG, etc.) exists. This is the structural form of Gap-2 from the prior gap-analysis at `devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md` (which named Gap-2 as T4 procedural-meta absence).
  - **Prior-rule prescription level.** The prior 2026-05-18 diagnostic's Q3 rule (piece-level Inversion at meta-decision pieces; see `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/finding.md`) has a compliance criterion that is artifact-observable at piece-level: principal candidate + Inversion-candidate paragraph + 5-test cycle on both. The criterion does NOT specify which axis the Inversion targets. When a piece's load-bearing commitment is on a non-content axis (specifically, intervention shape), content-axis Inversion satisfies Q3 vacuously without addressing the load-bearing decision.
  - **Discipline application level.** `/innovate` reference's existing Inversion mechanism (§3) canonically permits Inversion on "any belief related to the seed." A piece's intervention-shape commitment is a belief. Intervention-shape Inversion is therefore within-spec by the existing mechanism definition; the spec just doesn't require considering it. Innovation had the affordance and didn't exercise it; the case shows three mechanisms applied at the M1 piece (Constraint Manipulation + Absence Recognition + Inversion), all on the content axis.

  The three anchors are layered. The spec vocabulary anchor is the root cause (without named axes, mechanisms aren't directed to them). The prior-rule prescription anchor is the mid-cause (without axis-specification, compliance is vacuous). The discipline application anchor is the operational symptom (within-spec latitude exists but is unused).

- **What Innovation should have done.** At the M1 piece, generate an Inversion-candidate at the intervention-shape axis: name the piece's shape commitment (ADD-TEST), state the reversed assumption ("ADD-TEST may be wrong shape"), and identify what follows from the reversal (REPAIR / REVERT / REFRAME-AS-BUG as alternative shapes). Test both the principal (ADD-TEST) and the alternative-shape candidate via the 5-test cycle. The reversed candidate would have surfaced REPAIR as a real contender; the user's correction (which named REPAIR-not-ADD-TEST) would not have been necessary because the discipline's own machinery would have surfaced the alternative.

- **The deliverable: a four-piece extension to the prior 2026-05-18 refinement-set.** This finding produces four concrete spec-edit proposals composing with the prior diagnostic's 5-piece refinement-set via integrated extension. The composed refinement-set v2 has six pieces total (1 new + 5 prior, 3 of which are extended):
  - **Q1 — Intervention-shape vocabulary enumeration (new piece).** Add a new sub-section to `/innovate` reference (proposed location: §"Phase 2 Generate" before the variations-per-mechanism rule, OR a separate top-level Section §8 "Intervention-Shape Vocabulary") enumerating recognized intervention shapes: ADD-TEST, ADD-DIMENSION, ADD-CONTENT, REPAIR, REVERT-REGRESSION, REMOVE, REFRAME-AS-BUG, DO-NOTHING, REORGANIZE-WITHOUT-ADDING, CONTRARIAN-RETHINK. Each shape has a one-line operational description (what spec-text operation it represents) and a one-line cost/risk profile. The vocabulary is extensible with a revival trigger.
  - **Q2 — Q2 fifth-property extension.** Extend the prior 2026-05-18 diagnostic's Q2 four-property meta-decision-piece criterion (currently relationship-label / framing-semantic / lesson-vocabulary / evaluation-criterion) with a fifth property "(v) intervention-shape commitment." The property fires when a piece's principal candidate text contains an explicit shape commitment from Q1's vocabulary AND the shape commitment is load-bearing for downstream pieces (subsequent pieces or downstream-discipline behavior operates under the chosen shape). Includes a worked positive example (the M1 piece in `14-00`'s saved Innovation output fires property v) and a worked negative example (within-ADD-TEST diversification pieces do NOT fire property v), plus a retrospective fallback for judgment-dependent edge cases.
  - **Q3 — Q3 axis-of-inversion specification extension (load-bearing piece).** Extend the prior 2026-05-18 diagnostic's Q3 piece-level Inversion rule with an axis specification: when property (v) fires, the Inversion-candidate paragraph MUST target the intervention-shape axis — naming the piece's shape commitment as the reversed assumption, naming at least one alternative shape from Q1's vocabulary, stating what follows from the alternative. The extension is additive (pieces firing properties i-iv but not v continue under the prior Q3 unchanged). Override path preserves runner discretion: when intervention-shape Inversion is genuinely inapplicable, the runner records `Intervention-shape-Inversion-marked-inapplicable: [specific reason]`. The override-recording overhead is intentional friction.
  - **Q4 — Q5 telemetry axis-distribution extension.** Extend the prior 2026-05-18 diagnostic's Q5 telemetry (per-piece mechanism log) with a per-piece axis annotation. Refine the FLAG condition: when property (v) fires for a piece AND Inversion is logged with axis ≠ intervention-shape (without override), FLAG. Refine RE-RUN: 2+ violations without overrides → RE-RUN.

- **The composed 6-piece refinement-set v2 forms a layered enforcement architecture.** Layer 1: prior Q1 (expansive Inversion reading; unchanged). Layer 2: this Q1 (intervention-shape vocabulary; NEW). Layer 3: prior Q2 + this Q2-extension (five-property meta-decision-piece criterion). Layer 4: prior Q3 + this Q3-extension (piece-level Inversion + axis specification at property-v pieces). Layer 5: prior Q4 (failure-mode prevention refinements; unchanged). Layer 6: prior Q5 + this Q4-extension (telemetry with axis-distribution). The composition produces **two-layer Inversion enforcement**: prior Q3 catches Inversion-absence; this Q3-extension catches Inversion-on-wrong-axis at property-v pieces. Together: at meta-decision pieces, piece-level Inversion is required AND axis-specification is required when the piece commits to an intervention shape.

- **The recursive self-application of the proposed rule on this inquiry's own piece-generation.** This Innovation run applied the proposed Q3-extension rule to each of its own pieces Q1-Q4 (all four fire property v — they commit to intervention shapes: Q1 commits to ADD-NEW-ARTIFACT shape; Q2-Q4 commit to EXTEND-PRIOR-PIECE shape). At each piece, an intervention-shape-axis Inversion-candidate was generated and tested via the 5-test cycle: Q1's Inversion-candidate (EMBED-IN-EXISTING shape — embed vocabulary in existing 7-mechanism descriptions instead of adding a new artifact); Q2's (CREATE-PARALLEL shape — new parallel piece instead of extending prior); Q3's (ADD-MULTI-AXIS-REQUIREMENT shape — require Inversion on all load-bearing axes instead of just intervention-shape); Q4's (DROP-TELEMETRY shape — trust the rule's compliance criterion at artifact level without telemetry support). Critique evaluated all four Inversion-candidates for genuineness; all four pass the test (real cost/benefit trade-offs; not straw-men). The recursive self-application demonstrates the rule has operational practical force on its own application target.

- **Relationship to the prior 2026-05-18 diagnostic and the earlier gap-analysis.** The prior 2026-05-18 diagnostic at `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/finding.md` addressed Gap-1 (T2 framer-suite under-elaboration) via the refinement-set Q1-Q5. Its research-frontier section explicitly preserved Gap-2 (T4 procedural-meta absence) as a separate inquiry. **This finding IS that follow-up.** The composition pattern is integrated extension — this inquiry adds 1 new piece (vocabulary) and extends 3 prior pieces (Q2 fifth property, Q3 axis specification, Q5 telemetry); prior Q1 and Q4 are preserved unchanged. The earlier gap-analysis's Gap-2 territorial claim (procedural-meta moves absent) stands; this case refines Gap-2's specific structure into two layers (vocabulary + prescription).

- **Hard scope constraint maintained throughout.** All four candidates operate exclusively on `/innovate` reference; no candidate proposes changes to sensemaking's, critique's, decomposition's, or exploration's references. Other-discipline failures observable in evidence (sensemaking's pre-naming of the framing-given shape in `14-00`'s seed; critique's lack of adversarial-testing on alternative shapes; decomposition's piece-list shape contributions) were explicitly named as out-of-scope and not transformed into Innovation responsibilities.

- **Honest cost-naming.** This is the second diagnostic in the user's Innovation-gap series (2 of 19 pairs from the prior dataset addressed). Single-case evidence applies to both diagnostics; pattern-confirmation across the broader T2 + T4 territories is preserved as research frontier. Single-instance failure-mode-naming was explicitly avoided per the prior diagnostic's calibration discipline.

---

## Finding

### Surrounding context — why this diagnostic exists

The Homegrown project (a cognitive harness defined by markdown files installed as LLM skills; see project README) ships a discipline called `/innovate` whose canonical specification lives at `cognitive_harness/innovate/references/innovate.md`. The discipline generates candidate ideas using seven mechanisms (four Generators — Combination, Absence Recognition, Domain Transfer, Extrapolation; three Framers — Lens Shifting, Constraint Manipulation, Inversion) and tests them via a five-test cycle.

Earlier this session, a 19-pair gap-analysis (`devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md`) cataloged correction chains where the project's accumulated inquiry history shows the human stepping in with an innovation the discipline didn't produce on its own. That analysis named two structural gaps in `/innovate`: Gap-1 (T2 framer-suite under-elaboration) and Gap-2 (T4 procedural-meta moves absent from `/innovate`'s mechanism vocabulary entirely).

A prior diagnostic (`devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/finding.md`, completed earlier this session) addressed Gap-1 on a specific case (Pair #5 of the 19-pair dataset, the mapping-redo case). Its output was a 5-piece refinement-set for `/innovate` reference. Its research-frontier section explicitly preserved Gap-2 for a separate inquiry.

This inquiry IS that separate inquiry. It addresses Pair #7 of the 19-pair dataset — the canonical Gap-2 case — tagged "T4 methodology directive — intervention-shape correction (REPAIR-not-ADD-TEST)." The user invoked LOOP_DIAGNOSE explicitly and scoped strictly to Innovation. The output is intended as input for a future `/innovate` redesign, composing with the prior 2026-05-18 diagnostic's output.

### The correction chain

Two saved inquiries form the evidence base:

- **The weak prior under diagnosis**, at `devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/`, diagnosed a phenomenon ("loop-stage scope-leakage") at `/innovate`'s concrete-text generation step and proposed **M1: a sixth scope-fidelity-to-framing test added to `/innovate`'s Phase 3** as the primary maintenance candidate.

- **The corrected inquiry**, at `devdocs/inquiries/2026-05-14_15-00__find_innovate_spec_regression_remove_root_cause/`, re-issued with a fundamentally different intervention shape: **REPAIR** of `/innovate`'s Combination mechanism (modifying the existing problematic spec text at line 126 of the references file — the "What's already nearby" source listing "project") rather than ADD-TEST. The corrected inquiry also performed a diff against an older `/innovate` version (the user's regression hypothesis); the diff revealed essentially no semantic-content change, so the cause was longstanding-bias-in-spec-text, not regression. The corrected inquiry additionally downgraded "loop-stage scope-leakage" from a named failure mode to a descriptive phrase only (single-instance evidence is insufficient for pattern-naming) and retracted the fourth-member family positioning.

The human correction that triggered the redo (verbatim from `15-00`'s Source Input section):

> *"this is not a simple misunderstanding. we want to detect the bad part of that skill to remove it not just add more tests. and we should not have multiple test all the way. one good test all sufficient. refocus on homegrown/innovate/references/innovate.md to understand this error. also u can compare with old version which did not had such errors /Users/ns/Desktop/projects/native/bf4ae1f-hg/bf4ae1f-innovate/references/innovate.md and try to understand what change is causing the error"*

The diagnostic's question — what did Innovation in the weak prior fail to do that it produced ADD-TEST when REPAIR was the structurally correct intervention shape — was investigated by reading the weak prior's archived Innovation output (especially the M1 piece's mechanism-application section + 5-test cycle), contrasting with the corrected inquiry's archived Innovation output, and analyzing the `/innovate` reference's mechanism vocabulary for intervention-shape coverage.

### What Innovation produced in the weak prior — the M1 piece

The weak prior's Innovation operated in Production-task mode (same as the mapping-redo case from the prior diagnostic). The seed was a piece-list inherited from sensemaking + decomposition; Innovation's job was to materialize concrete text per piece.

The M1 piece — the piece that committed the intervention-shape choice for the maintenance candidate — is the load-bearing piece. Reading the saved Innovation output:

- The piece's mechanism-application section names three mechanisms: *"Constraint Manipulation (adding a 6th test to innovate's 5-test cycle) + Absence Recognition (the absence of scope-fidelity in the current cycle) + Inversion (turning the check inward at innovate-runtime, on innovate's own output)."*

- All three mechanisms operate on the same intervention shape (ADD-TEST). Constraint Manipulation adds a test; Absence Recognition recognizes a missing check (the response is to ADD the missing check); Inversion turns the check's direction. No mechanism operates on the intervention-shape axis itself.

- The piece's 5-test cycle passes the principal candidate (M1 as a sixth scope-fidelity test). The Scrutiny-survival test's strongest objection is *"adding 6th test adds friction"* — a critique within the ADD-TEST shape, not across shapes. The test does not consider "what if ADD-TEST is the wrong shape entirely?"

- The KILLs section at the end of the artifact lists nine alternatives explicitly killed by Innovation. None is REPAIR, REVERT, REFRAME-AS-BUG, or DO-NOTHING. The killed alternatives are within-ADD variants (M1+M2 hybrid, second meta-check at spec-revision time, etc.) and category-attribution claims. The KILL list confirms that intervention-shape alternatives were not generated and then killed — they were not generated at all.

- The Axis Coverage Check at the bottom of the artifact enumerates four axes (format adherence / prescription level / self-reference style / family-positioning commitment). None is "intervention shape." The Axis Coverage Check passes on its chosen axes; the chosen-axis set doesn't include intervention shape.

- The Mechanism Coverage Telemetry reports 4/4 Generators + 3/3 Framers with full coverage; failure modes observed: NONE. Overall verdict: PROCEED.

Across the entire saved Innovation output of `14-00`, every logged Inversion application is at content axis. None is at intervention-shape axis. The candidate space generated at the M1 piece is single-shape (ADD-TEST) with three variants within that shape.

### What Innovation produced in the corrected inquiry

The corrected inquiry's Innovation operated under a different seed framing. The seed explicitly contained *"REPAIR B3+B4+B5 in `/innovate`'s Combination mechanism (preserve function, add scope-fidelity caveat)"* — the REPAIR shape was pre-named by upstream sensemaking + decomposition, which had absorbed the user's correction.

Innovation in the corrected inquiry produced concrete REPAIR text without itself surfacing alternative shapes. The mechanism-application logs for the REPAIR piece read *"Constraint Manipulation (add scope-fidelity conditional) + Inversion (verify REPAIR doesn't exhibit failure it fixes)"* — Inversion here applies content-axis-style to verify the REPAIR text doesn't have the same bug, not to consider non-REPAIR shapes.

**In both inquiries, Innovation received the intervention shape from upstream framing.** Neither inquiry's Innovation independently generated the shape. The difference between them is which shape the framing handed down (`14-00`: ADD-TEST from sensemaking-as-it-was-then; `15-00`: REPAIR from sensemaking-after-user-correction). Innovation's mechanism applications stayed within the framing-given shape in both cases.

This is observable but partially out-of-scope per the user's framing. The within-scope observation: Innovation's mechanism vocabulary canonically permits intervention-shape Inversion (per `/innovate` §3 Inversion's "any belief related to the seed" framing), so the discipline has affordance to consider alternative shapes even when given an inherited shape; the case shows the discipline doesn't exercise that affordance by default.

### Why the failure occurred — three layered structural anchors

The weak prior's Innovation was compliant with `/innovate`'s specification and with the prior 2026-05-18 diagnostic's Q3 rule. The Coverage Strategy rule (1G + 1F minimum; all 7 ideal per seed) was satisfied. The 5-test cycle was applied. The Assembly Check ran. The Axis Coverage Check passed on the artifact's chosen axes. Mechanism Coverage Telemetry produced PROCEED. The compliance was real at every spec-defined level.

**Most importantly: the prior 2026-05-18 diagnostic's Q3 rule was also satisfied.** Q3 requires piece-level Inversion at meta-decision pieces with a compliance criterion (principal candidate + Inversion-candidate paragraph naming an assumption and reversal + 5-test cycle on both). The M1 piece's mechanism-application section names an Inversion application (turn check inward); the principal candidate (ADD a sixth test) is present; the reversed assumption (the check operates on external content) is stated; the 5-test cycle is run. Q3's compliance criterion is met by every artifact-observable sub-criterion.

**The failure surface is therefore at structural locations the spec — and the prior diagnostic's refinement-set — do not currently address.** Three layered anchors:

**Anchor 1 — Spec vocabulary level (Gap-2 instantiation).** `/innovate` reference is uniformly content-axis-oriented across all 7 mechanism descriptions, 6 failure modes, Coverage Strategy, and Mechanism Coverage Telemetry. Each mechanism's "What it does" sentence and "How to apply" sub-section is content-oriented: Combination connects concepts; Inversion assumes the opposite of a belief; Domain Transfer imports patterns; etc. No section enumerates "intervention shape" as a candidate axis. No section names ADD vs REMOVE vs REPAIR vs REVERT as distinct candidate-types. The vocabulary gap is uniform, not localized to one section. This is the structural form of Gap-2 from the prior gap-analysis at `devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md`.

**Anchor 2 — Prior-rule prescription level (Q3 axis-specification absence).** The prior 2026-05-18 diagnostic's Q3 rule requires piece-level Inversion at meta-decision pieces. The compliance criterion is artifact-observable at piece-level: an Inversion-candidate paragraph exists; it names an assumption; it states a reversal; the 5-test cycle covers both candidates. The criterion does NOT extend to axis-level — it does not check whether the named assumption is on the load-bearing axis of the piece's commitment. When a piece's load-bearing commitment is on a non-content axis (specifically, intervention shape), content-axis Inversion satisfies the criterion vacuously. The compliance is real but the failure-prevention coverage is incomplete.

**Anchor 3 — Discipline application level (within-spec latitude unused).** `/innovate` reference §3 Inversion canonically permits Inversion on "any belief related to the seed." A piece's intervention-shape commitment is a belief by any reading. Intervention-shape Inversion is therefore within-spec by the existing mechanism definition; the spec just doesn't require considering it. Three mechanisms at the M1 piece (Constraint Manipulation + Absence Recognition + Inversion) had the affordance to surface intervention-shape alternatives if applied to the intervention-shape axis; none was. The discipline operated on a content-axis frame by default.

The three anchors are layered. The spec vocabulary anchor is the root cause (without named axes, mechanisms aren't directed to them). The prior-rule prescription anchor is the mid-cause (without axis-specification, compliance is vacuous). The discipline application anchor is the operational symptom (within-spec affordance exists but is unused). Addressing the spec vocabulary alone is necessary-but-not-sufficient (naming the axis doesn't auto-cause mechanism application to it). Addressing the prior-rule prescription alone is necessary-but-not-sufficient (without named vocabulary, prescription has nothing to reference). The discipline application level resolves naturally once the other two are addressed (prescription requires the application; vocabulary enables it).

### The four-piece extension to the prior diagnostic's refinement-set

The diagnostic's primary deliverable composes with the prior 2026-05-18 refinement-set (Q1-Q5) via integrated extension. Four new/extended pieces:

**Q1 — Intervention-shape vocabulary enumeration (new piece in the composed set).**

Add a new sub-section to `/innovate` reference (proposed location: §"Phase 2 Generate" before the variations-per-mechanism rule, OR a separate top-level §8). The sub-section enumerates intervention shapes that Innovation can commit to when producing maintenance candidates. Each shape has a one-line operational description (what spec-text operation it represents) and a one-line cost/risk profile.

Concrete spec text (final, with critique's REFINEs applied):

> **§8 — Intervention-Shape Vocabulary.** When Innovation generates a candidate (especially a maintenance candidate for a spec or a fix for an identified problem), the candidate has an intervention shape — the form of action it proposes. The shape is distinct from the candidate's content. Two candidates with the same content can have different shapes; two candidates with the same shape can have different content. Recognized shapes:
>
> | Shape | Operation on the target | Cost / risk profile |
> |---|---|---|
> | **ADD-TEST** | Append a new test or check that runs alongside existing text | Low risk; no existing behavior changes |
> | **ADD-DIMENSION** | Append a new evaluation dimension to existing evaluation framework | Low risk; expands evaluation surface |
> | **ADD-CONTENT** | Append new content (text, section, sub-section) that isn't a test or dimension | Low-to-medium risk; extends the spec's coverage |
> | **REPAIR** | Modify existing text that causes the failure; **changes semantics** while preserving the function the text was meant to provide | Medium risk; existing behavior changes structurally |
> | **REVERT-REGRESSION** | Roll back current text to a prior version that did not exhibit the failure | Low-to-medium risk (depends on prior version's other properties) |
> | **REMOVE** | Delete the failing text entirely without replacement | Medium risk; the function the text provided is also removed |
> | **REFRAME-AS-BUG** | Reclassify the failure from a generic pattern to a localized bug; fix-and-move-on rather than building defenses | Variable risk |
> | **DO-NOTHING** | Accept the failure as out-of-scope, insufficient evidence to act, or worth-the-cost | No risk; no change |
> | **REORGANIZE-WITHOUT-ADDING** | Restructure existing sections; **preserves semantics** while changing form | Low risk; presentation-only |
> | **CONTRARIAN-RETHINK** | Question the framing entirely; treat the prior conclusion as a candidate to invalidate | High risk if applied to load-bearing prior decisions |
>
> The distinction between **REPAIR** and **REORGANIZE-WITHOUT-ADDING** is semantics-preserving (REORGANIZE preserves; REPAIR changes). The distinction between **ADD-CONTENT** and **ADD-TEST** / **ADD-DIMENSION** is content-type (a failure-mode entry is ADD-CONTENT, not ADD-TEST or ADD-DIMENSION).
>
> **Extensibility.** Add new shapes as evidence accumulates. Revival trigger: when 3+ inquiries surface a maintenance candidate whose shape doesn't fit one of the above, add the new shape with operational description and cost/risk profile.
>
> **Cross-references.** §"Phase 2 Generate" piece-level Inversion rule (Q3 from the 2026-05-18 mapping-redo diagnostic, extended per the 2026-05-18 REPAIR-vs-ADD-TEST diagnostic) requires intervention-shape-axis Inversion when the piece commits to a shape from this vocabulary. §"Determination Mechanism for Meta-Decision Pieces" (Q2, extended) fires property (v) when a piece commits to a named shape from this vocabulary.

**Q2 — Q2 fifth-property extension (modifies the prior diagnostic's Q2 piece).**

Extend the prior 2026-05-18 diagnostic's Q2 four-property meta-decision-piece criterion with a fifth property. The extension is additive: pieces firing properties (i)-(iv) but not (v) continue to be classified as meta-decision pieces; the prior criterion's existing logic is preserved.

Concrete spec text (final, with critique's REFINE applied):

> *Extension to the prior Q2 four-property meta-decision-piece criterion:*
>
> (v) **Intervention-shape commitment property** [NEW]: P's principal candidate text contains an explicit intervention-shape commitment — names a shape from the §8 Intervention-Shape Vocabulary — AND the shape commitment is load-bearing for downstream pieces or downstream-discipline behavior.
>
> Worked positive example: the M1 piece in `devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/docarchive/innovation.md`'s P2.4a section commits to ADD-TEST shape; subsequent pieces (P2.4b M2 deferred + P2.4c L1-vs-M1 distinction + P5 self-reference) all operate under the ADD-TEST shape commitment. → Property (v) fires.
>
> Worked negative example: a piece producing diversified examples for an M1 candidate (spanning algorithm spec / protocol spec / etc.) does NOT fire property (v). The shape was chosen at the M1 piece; this piece elaborates within the chosen shape. → Content-production piece.
>
> **Edge-case retrospective fallback.** For pieces where shape-commitment is judgment-dependent at piece-output time, perform retrospective self-audit. Ask: "did subsequent pieces in the same artifact OR the next-discipline's behavior operate under a shape this piece introduced?" If YES, retrospectively classify property (v) as fired. The retrospective fallback covers both intra-artifact (subsequent pieces) and inter-artifact (next-discipline) downstream signals.

**Q3 — Q3 axis-of-inversion specification extension (modifies the prior diagnostic's Q3 piece; load-bearing).**

Extend the prior 2026-05-18 diagnostic's Q3 piece-level Inversion rule with an axis specification. The extension is additive: pieces firing properties (i)-(iv) but not (v) continue to satisfy Q3 under any axis of Inversion; property-(v) pieces require intervention-shape-axis specifically.

Concrete spec text:

> *Extension to the prior Q3 piece-level Inversion rule. NEW addition — Axis specification when property (v) fires:*
>
> When the piece fires property (v) of the extended meta-decision-piece criterion (intervention-shape commitment per Q2-extended), the Inversion-candidate paragraph required by this rule's compliance criterion MUST target the intervention-shape axis. The "assumption being reversed" must be the piece's intervention-shape commitment (named per §8), not a content-level assumption adjacent to the shape.
>
> Concretely, when the piece commits to shape X (where X is one of the shapes from §8), the Inversion-candidate paragraph must:
> 1. Name X explicitly as the assumption being reversed.
> 2. Name at least one alternative shape Y (also from §8) that the reversal points to.
> 3. State what follows if Y were committed instead of X.
> 4. Test both X and Y via the 5-test cycle.
>
> **Override path.** When the runner determines the framing-given or commitment shape is uniquely correct — no plausible alternative shape exists for this piece's specific case — record `Intervention-shape-Inversion-marked-inapplicable: [specific reason]`. The reason must be specific (not "no alternative comes to mind"). Example: "The piece commits to recording a historical observation; intervention-shape is not the piece's axis." Empty overrides are defects.
>
> **Compliance criterion.** A meta-decision piece firing property (v) satisfies the rule when its `innovation.md` output contains: (a) principal candidate text; (b) Inversion-candidate paragraph naming a shape from §8 as reversed assumption AND naming at least one alternative shape from §8 AND stating what follows; (c) 5-test cycle on both candidates; OR (d) `Intervention-shape-Inversion-marked-inapplicable` override with specific reason.
>
> **Additive nature.** Pieces firing properties (i)-(iv) but NOT (v) continue under the prior Q3 unchanged. Content-axis Inversion satisfies compliance for non-property-(v) pieces.
>
> **Methodological caveat.** This rule introduces new vocabulary (intervention-shape axis; §8 references; override-with-specific-reason). Per the project's "lesson-introduces-its-own-trap" pattern (see `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`), future Innovation runs editing this rule should self-apply: when proposing changes to this rule, apply this rule's intervention-shape-axis Inversion requirement to those proposed changes.

**Q4 — Q5 telemetry axis-distribution extension (modifies the prior diagnostic's Q5 piece).**

Extend the prior 2026-05-18 diagnostic's Q5 telemetry (per-piece mechanism log) with per-piece axis annotation. Refine the FLAG and RE-RUN conditions.

Concrete spec text:

> *Extension to the prior Q5 telemetry:*
>
> **Per-piece axis-distribution log (NEW).** For each meta-decision piece with property (v) firing, the mechanism log gains an `axis` annotation: `<piece-id>: [<mechanism>:<axis>, <mechanism>:<axis>, ...]` where `<axis>` is one of: `content`, `intervention-shape`, `scope`, `direction`, or `other-named-axis`.
>
> **FLAG condition (refined for property-v pieces).** When property (v) fires for a piece AND Inversion is logged at that piece with axis ≠ `intervention-shape` (without `Intervention-shape-Inversion-marked-inapplicable` override), the overall telemetry verdict is FLAG.
>
> **RE-RUN condition (refined).** When 2+ pieces have property (v) firing AND axis-misalignment violations (without overrides), the verdict is RE-RUN.
>
> **Applied retroactively to `14-00`'s case as verification.** The M1 piece's mechanism log under this telemetry would read `[Constraint Manipulation:content, Absence Recognition:content, Inversion:content]`; property (v) classification: fired (M1 commits ADD-TEST); piece-level Inversion compliance: violated (axis = content, not intervention-shape). FLAG fires. The user-correction-equivalent (runner reviewing the FLAG, generating the missing intervention-shape Inversion-candidate before publishing) is the operational form of the original user correction.

### The recursive self-application demonstration

This Innovation run applied the proposed Q3-extension rule to each of its own pieces Q1-Q4. All four pieces fire property (v):

- Q1 commits to ADD-NEW-ARTIFACT shape (a new vocabulary sub-section).
- Q2, Q3, Q4 all commit to EXTEND-PRIOR-PIECE shape (modifying existing prior pieces).

At each piece, an intervention-shape-axis Inversion-candidate was generated:

- Q1's Inversion-candidate: **EMBED-IN-EXISTING** shape — embed intervention-shape vocabulary within the existing 7-mechanism descriptions instead of a new artifact.
- Q2's Inversion-candidate: **CREATE-PARALLEL** shape — new parallel piece (Q-Five) instead of extending the prior Q2.
- Q3's Inversion-candidate: **ADD-MULTI-AXIS-REQUIREMENT** shape — require Inversion on ALL load-bearing axes simultaneously instead of just the intervention-shape axis.
- Q4's Inversion-candidate: **DROP-TELEMETRY** shape — trust the rule's compliance criterion at artifact level without telemetry support.

Critique evaluated each Inversion-candidate for genuineness (real cost/benefit trade-offs vs straw-man). All four passed:

- EMBED-IN-EXISTING has real benefit (no new structural element) and real cost (cross-reference diffusion across 7 mechanism locations).
- CREATE-PARALLEL has real benefit (modularity) and real cost (coordination overhead between two pieces).
- ADD-MULTI-AXIS has real benefit (broader coverage) and real cost (over-application; runner burden).
- DROP-TELEMETRY has real benefit (no telemetry maintenance) and real cost (manual-audit burden).

Each Inversion-candidate could legitimately be chosen by a future inquiry with different priorities. The recursive self-application produces operational evidence that the proposed rule has practical force on its own application target — not ritual compliance.

### What this diagnostic does NOT do

This diagnostic does NOT:

- **Redesign `/innovate`.** It produces evidence-backed candidates for a redesign; the redesign is downstream work. A future inquiry consumes this finding's candidates (composed with the prior 2026-05-18 diagnostic's candidates) and decides what to commit, in what wording.

- **Diagnose other disciplines.** Sensemaking's role in pre-naming the intervention shape in `14-00`'s and `15-00`'s seeds; decomposition's piece-list shape contributions; critique's lack of adversarial-testing on alternative shapes in `14-00` — observable in evidence; out of scope per the user's hard constraint.

- **Generalize the refinement-set to the broader 19-pair dataset.** The other T4 sub-types (contrarian-rethink, specific-failure-mode identification) and the other T2 sub-types beyond Pair #5 are not addressed here. Multi-case validation is preserved as research frontier.

- **Commit any spec edits to `/innovate`.** The candidate text in Q1-Q4 is proposal-form, not committed. The future redesign work decides commitment.

- **Name "intervention-shape monoculture" as a new failure mode.** Single-instance evidence is insufficient for pattern-naming, per the calibration discipline established in the prior diagnostic and explicitly reinforced in `15-00`'s downgrade of "loop-stage scope-leakage."

---

## Next Actions

### MUST

- **What:** Run a downstream inquiry (likely `/MVL+`) that takes the 6-piece composed refinement-set v2 (this inquiry's 4 + the prior 2026-05-18 diagnostic's 5, with this inquiry's extensions applied) as input and decides whether to commit it to `/innovate` reference (in whole, in part, or with what specific wording).
  - **Who:** the user, via `/MVL+` on a new inquiry seeded by both findings.
  - **Gate:** condition-bound — when the user turns attention to redesigning `/innovate`.
  - **Why:** the composed candidate set is potential, not actual. Without a redesign inquiry that decides commitment, both diagnostics' value remains as evidence rather than as working spec changes.

### COULD

- **What:** Apply the composed refinement-set v2 retroactively to a sample of the other 17 pairs in the 19-pair dataset, checking whether the composed set catches the failures across other T2 and T4 sub-types.
  - **Who:** a separate analysis inquiry.
  - **Gate:** condition-bound — when the user wants to test the composed set's generalization.
  - **Why:** establishes whether the composed set is a two-case fix or a pattern-level intervention.
  - **Depends-on:** MUST item "downstream redesign inquiry." OVERRIDE: COULD is adoption-ready independent of the MUST. Reason: the generalization analysis can run on the existing 19-pair dataset without first committing spec changes.

- **What:** Diagnose the remaining T2 and T4 sub-types in the 19-pair dataset (specifically the contrarian-rethink and specific-failure-mode identification T4 sub-types, and the wholesale rejection T2 sub-type beyond Pair #5).
  - **Who:** the user, via new `/MVL+` inquiries.
  - **Gate:** condition-bound — when the user wants to extend the Innovation-gap diagnostic series.
  - **Why:** the user has invoked two diagnostics this session; extending the series produces a more complete refinement-set.

- **What:** Apply the Q3-extension rule (and its methodological caveat about self-application) to a future spec-edit on Q3-extension itself, observing whether the recursive self-application converges or oscillates.
  - **Who:** a future spec-edit inquiry that revisits Q3-extension.
  - **Gate:** observable — when 3+ future cases identify edge cases the Q3-extension doesn't handle cleanly, triggering a revisit.
  - **Why:** validates the methodological caveat's practical force across iterations.

### DEFERRED

- **What:** Q1.Inversion (EMBED-IN-EXISTING shape) — embed intervention-shape vocabulary within the existing 7-mechanism descriptions instead of a dedicated sub-section.
  - **Gate:** observable — revive if Q3-extension's cross-reference structure becomes a maintenance burden in 3+ future cases.
  - **Why (if revived):** avoids a top-level structural addition; enriches existing mechanism descriptions with shape-awareness inline.

- **What:** Q2.Inversion (CREATE-PARALLEL shape) — separate piece for intervention-shape commitment classification, parallel to the prior Q2's four-property criterion.
  - **Gate:** condition-bound — revive if multi-case evidence reveals operational differences between content-axis and intervention-shape commitments warranting separate piece-management.
  - **Why (if revived):** modularity at the cost of coordination overhead.

- **What:** Q4.Inversion (DROP-TELEMETRY shape) — trust Q3-extension's compliance criterion at artifact level without telemetry support.
  - **Gate:** observable — revive if Q3-extended compliance proves manually-auditable across 5+ future cases without significant runner burden.
  - **Why (if revived):** reduces telemetry maintenance burden.

- **What:** Override-rate calibration for the composed set's two override paths (`Inversion-marked-inapplicable` from prior diagnostic; `Intervention-shape-Inversion-marked-inapplicable` from this diagnostic).
  - **Gate:** observable — after 10+ future Production-task-mode runs under the committed composed set; assess override rates; refine FLAG/RE-RUN calibration if needed.
  - **Why (if revived):** distinguishes useful enforcement from noisy FLAG.

### RESEARCH FRONTIERS

- **What:** Q3.Inversion (ADD-MULTI-AXIS-REQUIREMENT shape) — require Inversion on ALL load-bearing axes simultaneously (intervention-shape, content, scope, direction, etc.).
  - **Why:** if single-axis specification proves insufficient across 3+ future cases (Innovation correctly applies intervention-shape Inversion but fails on a different load-bearing axis), revisit multi-axis requirement. Trade-off: broader coverage vs over-application burden.

- **What:** Does the composed refinement-set v2 generalize beyond the two motivating cases (Pair #5 mapping-redo, Pair #7 REPAIR-not-ADD-TEST)? The other 17 pairs in the 19-pair dataset cover diverse T2 and T4 sub-types.
  - **Why:** single-case-per-gap evidence; pattern-confirmation across multiple instances per gap territory required.

- **What:** Composition stability of the composed refinement-set v2 under recursive spec-editing. Per Q3-extension's methodological caveat, future Innovation runs editing the composed set should self-apply.
  - **Why:** whether the self-application converges (the set's rules stabilize over iterations) or oscillates (each iteration introduces new rule-edits that themselves need new rules to catch) is empirically open.

- **What:** Composition with future Gap-2-other-sub-type refinement-sets (e.g., for contrarian-rethink moves or specific-failure-mode-identification moves).
  - **Why:** the current composed set addresses Gap-1 (mapping-redo via Inversion-at-meta-targets) and Gap-2-shape-sub-type (REPAIR-vs-ADD-TEST via intervention-shape-axis Inversion). Other Gap-2 sub-types may require additional structure. Composition with future additions may produce additional emergent properties.

---

## Reasoning

### Why this answer over the alternatives — the Critique adversarial verdicts

The 4-piece extension to the prior refinement-set was the surviving candidate after Critique ran 12 evaluation dimensions (6 default + 5 project-specific including a new composition-coherence dimension + 1 self-reference axis). Multi-axis prosecution depth was applied per the args: specification-gap probe (Q1, Q2); false-positive testing (Q3); recursive-self-application robustness (all 4 + assembly); composition-coherence test (assembly); hard scope constraint (all 4); user-perspective (all 4).

The strongest prosecution arguments and their defenses:

**Prosecution against Q1 (vocabulary).** Specification-gap probe revealed boundary cases: (i) a hypothetical "add a new failure-mode entry" candidate didn't cleanly fit ADD-TEST or ADD-DIMENSION — surfaced the missing ADD-CONTENT shape; (ii) a clarity-rewrite hypothetical sat between REPAIR and REORGANIZE-WITHOUT-ADDING. Defense: vocabulary is explicitly extensible. Refinement applied: added ADD-CONTENT as a 10th shape; clarified REPAIR/REORGANIZE boundary by adding the semantics-preserving distinction to both descriptions.

**Prosecution against Q2 (fifth-property).** The retrospective fallback's scope was unclear for single-piece artifacts (no subsequent pieces in the same artifact to test downstream-operation against). Defense: the fallback extends to next-discipline behavior (Critique, CONCLUDE) for inter-artifact signals. Refinement applied: clarified the fallback's scope to include both intra-artifact and inter-artifact downstream signals.

**Prosecution against Q3 (axis specification — load-bearing).** False-positive testing constructed a hypothetical case where REVERT-REGRESSION is genuinely the only correct shape (confirmed-regression with clean diff). Q3-extended would fire; the override path applies; the override is recorded with a specific structural reason. The override resolved cleanly. Recursive self-application robustness: critique evaluated each of the four Inversion-candidates this Innovation generated (EMBED-IN-EXISTING, CREATE-PARALLEL, ADD-MULTI-AXIS, DROP-TELEMETRY) for genuineness; all four passed (real cost/benefit trade-offs; not straw-men). Q3 SURVIVES clean.

**Prosecution against Q4 (telemetry).** Telemetry bloat objection: per-piece axis log adds ~1 line per property-(v) piece; bounded growth, not bloat. FLAG-noise calibration: preserved as RESEARCH FRONTIER (same as prior diagnostic; not a blocker). Composition coherence with prior Q5: the extension is additive; prior Q5 fields preserved. Q4 SURVIVES clean.

**Assembly Check** verified the composed 6-piece refinement-set v2 forms a coherent layered enforcement architecture with two-layer Inversion enforcement (prior Q3 catches Inversion-absence; this Q3-extension catches Inversion-on-wrong-axis at property-v pieces). Cross-references consistent; no contradictions detected. Hidden-coupling risks from decomposition (3 new + 3 inherited from prior diagnostic) addressed at artifact level.

### Why dimensional refinement, not new failure mode

The Sensemaking discipline considered whether the case required a new top-level failure mode in `/innovate`'s spec (e.g., "intervention-shape monoculture"). The case was tested against existing failure modes: Single-Mechanism Trap describes too-few-mechanisms (not the case here; three mechanisms were applied); Early Frame Lock's existing prevention (apply at least one more mechanism) was satisfied; Survival Bias's existing prevention covers testing-step failure (not the prior-step axis-misalignment failure). None of the existing failure modes catches the case as written.

The case-evidence is single-instance for the axis-misalignment pattern. Per `15-00`'s explicit downgrade of "loop-stage scope-leakage" from named failure mode to descriptive phrase citing single-instance evidence, this diagnostic follows the same calibration discipline: the phenomenon is real (the case demonstrates it); naming it as a failure mode requires multi-case evidence. The composed refinement-set addresses the failure structurally (via Q3-extension's axis specification + Q1's vocabulary) without committing to pattern-naming. Whether axis-misalignment recurs across the other 17 pairs in the dataset is preserved as research frontier.

### Why this case refines the prior 2026-05-18 diagnostic rather than invalidating it

The prior diagnostic's Q3 rule (piece-level Inversion at meta-decision pieces) remains correct for what it catches: piece-level Inversion absence. In `14-00`'s case, Inversion was applied at piece-level; the prior diagnostic's case (mapping-redo) had Inversion absent at piece-level. The two failure patterns are structurally distinct:

- Mapping-redo case (prior diagnostic): Inversion absent at piece-level → prior Q3 catches.
- REPAIR-vs-ADD-TEST case (this diagnostic): Inversion present at piece-level but on wrong axis → prior Q3 passes; this Q3-extension catches.

The composition is additive: both rules apply; both catch different failure shapes. The composed Q3 (prior + extension) requires piece-level Inversion AND axis-specification at property-(v) pieces.

### What was killed by Sensemaking in this iteration

Sensemaking adjudication killed several alternatives via Ambiguities 1-5:

- "Q3 IS sufficient with proper judgment" (Ambiguity 1) — killed by structural argument: judgment isn't artifact-checkable; Q3's compliance criterion is artifact-observable but stops at piece-level.
- "Intervention shape is a proxy / verbal label" (Ambiguity 2) — killed by structural argument: ADD/REPAIR/REVERT have distinct cost profiles, distinct verification paths, distinct downstream-effect profiles.
- "Vocabulary absence alone is the gap" (Ambiguity 3) — killed: naming an axis doesn't auto-cause mechanism application.
- "Prescription absence alone is the gap" (Ambiguity 3) — killed: prescription without vocabulary has nothing to reference.
- "Q2 separate classification axis" (Ambiguity 4) — killed: coordination overhead vs unified meta-decision-piece concept.
- "CREATE-PARALLEL rule structure" (Ambiguity 5) — killed: integration is cleaner than redundancy.

### Contradictions reconciled across the pipeline

The Exploration step's signals included a potential tension: `14-00`'s telemetry reported "failure modes observed: NONE" (PROCEED verdict) yet the case is the demonstration of an Innovation failure. The reconciliation: failure-mode telemetry checks pre-spec'd failure modes; the case represents a failure not in the spec's current failure-mode list. The PROCEED verdict was compliance-real; the failure is at the spec-coverage level, not at the runner-compliance level.

The Sensemaking step's perspectives revealed a tension between "Innovation has no responsibility for intervention-shape generation" (which would absolve Innovation entirely) and "Innovation's existing Inversion mechanism affords intervention-shape application within-spec" (which assigns responsibility). The reconciliation: both are true at different layers. Innovation's RESPONSIBILITY at the spec level is content-axis-only (because the spec doesn't enumerate other axes); Innovation's WITHIN-SPEC LATITUDE includes intervention-shape application (because Inversion's existing definition affords it). The maintenance candidates close the spec-level gap (Q1 + Q3-extension) so that the latitude becomes a requirement.

### Self-reference acknowledgment

This entire inquiry uses the same cognitive harness whose discipline (`/innovate`) the finding's deliverable proposes to refine. The Critique step explicitly applied a self-reference robustness dimension AND a recursive-self-application robustness test. The recursive test specifically evaluated whether the four Inversion-candidates generated by this Innovation run (EMBED-IN-EXISTING, CREATE-PARALLEL, ADD-MULTI-AXIS, DROP-TELEMETRY) are genuine alternatives or straw-men generated to satisfy the rule's compliance criterion. All four passed: each represents a real cost/benefit trade-off that could legitimately be chosen by a future inquiry with different priorities. Operational evidence that the rule's compliance criterion produces non-empty practical force on its application target.

External grounding sources used throughout: (i) the user's correction in `15-00`'s Source Input (independent signal); (ii) the contrast between `14-00`'s and `15-00`'s saved Innovation outputs (artifact-level evidence not produced by this inquiry); (iii) the canonical `/innovate` reference (criterion artifact); (iv) the prior 2026-05-18 diagnostic's separate evidence base (composition partner produced by an independent prior inquiry); (v) future-case hypotheticals (the REVERT-REGRESSION false-positive test constructed in Critique).

---

## Open Questions

### Monitoring

- **Override-rate calibration after composed-set commitment.** When the composed refinement-set v2 is committed to `/innovate` reference, observe the rate of `Inversion-marked-inapplicable` (prior diagnostic's override) and `Intervention-shape-Inversion-marked-inapplicable` (this diagnostic's override) invocation. If overrides are rare (<5% of meta-decision pieces), the rules are doing useful enforcement; if common (>30%), recalibration needed.

- **Whether the "lesson-introduces-its-own-trap" meta-pattern recurs on the composed set's own rules.** Q3-extension's methodological caveat warns that future Innovation runs editing this rule should self-apply. Observe whether the self-application catches problems or whether the rule's vocabulary itself becomes a trap.

- **Whether the multi-case generalization holds.** With two diagnostics in the series (Pair #5 Gap-1 + Pair #7 Gap-2), 17 pairs remain unaddressed. Multi-case validation is needed to establish whether the composed refinement-set v2 catches failures across the broader T2 and T4 sub-types.

### Blocked

- **Concrete spec-edit commitments to `/innovate` reference.** Cannot proceed until a downstream redesign inquiry consumes the composed refinement-set v2 and decides what to commit. The MUST item in Next Actions is the unblocking event.

### Research Frontiers

- **Does the composed refinement-set generalize to the other 17 pairs in the prior gap-analysis dataset?** This finding's evidence base is one correction pair (the REPAIR-vs-ADD-TEST case, Pair #7 in the 19-pair dataset). Combined with the prior 2026-05-18 diagnostic's Pair #5, two pairs are addressed. The other 17 are unaddressed; multi-case validation across them is unverified.

- **Composition with future refinement-sets addressing other Gap-2 sub-types.** The prior gap-analysis named multiple T4 sub-types (intervention-shape correction addressed here; contrarian-rethink directives; specific-failure-mode identification). Other sub-types may require additional rules; composition with this finding's set may produce additional emergent properties.

- **Recursive self-application convergence.** Q3-extension's methodological caveat says future spec-edits to the composed set should self-apply the rule. Whether the self-application converges (the set's rules stabilize over iterations) or oscillates (each iteration introduces new edits that themselves need new rules) is empirically open.

- **Whether the axis-misalignment phenomenon recurs to justify pattern-naming.** Single-case evidence here; if 3+ future cases exhibit the same axis-misalignment pattern, naming it as a failure mode in `/innovate` becomes justified.

### Refinement Triggers

- **If 3+ future cases show Q1's vocabulary missing a shape:** revive the extensibility provision; add the missing shape with operational description and cost/risk profile.

- **If 3+ future cases show Q3-extension's MUST framing produces unacceptable false positives:** revisit soft-rule variants (preserved as RESEARCH FRONTIER alternatives).

- **If the override rate observed under Q3-extension exceeds 30% across 10+ runs:** trigger recalibration of either Q2-extension's property (v) determination or Q3-extension's compliance criterion.

- **If multi-case validation reveals operational differences between content-axis and intervention-shape commitments warranting separate piece-management:** revive Q2.Inversion (CREATE-PARALLEL) — preserved as DEFERRED.

- **If single-axis specification (intervention-shape only) proves insufficient across 3+ future T4 cases (failure on a different load-bearing axis):** revive Q3.Inversion (ADD-MULTI-AXIS-REQUIREMENT) — preserved as RESEARCH FRONTIER.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
use cognitive_harness/protocols/loop_diagnose.md

one innovation fix pair is

`2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch` → `2026-05-14_15-00__find_innovate_spec_regression_remove_root_cause` | T4 methodology directive | intervention-shape correction

 i want you to analyse exactly what when wrong with innovation that it missed this.  but make sure only focus on what innovation should
  do, and not job of other disciplines, this will be used to improve innovation later on but this is not our scope now.
```

</details>
