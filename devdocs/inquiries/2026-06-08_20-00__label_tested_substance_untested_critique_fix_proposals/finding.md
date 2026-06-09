---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Label-Tested, Substance-Untested — Critique Fix Proposals

## Question

What is the underlying structural mechanism of "Label-Tested, Substance-Untested" — the third failure type catalogued in `devdocs/top_7_common_critique_failures.md` — and what are at least three structurally-distinct solution proposals (surgical / additional / significant) for amending `cognitive_harness/td-critique/references/td-critique.md` (the Structural Critique discipline spec, the artifact the `/td-critique` discipline reads) that would fix it, with explicit plus/minus trade-off analysis per proposal AND compositional analysis with the proposals from the two just-completed sibling inquiries (Axis Absence at `devdocs/inquiries/2026-06-08_17-43__axis_absence_critique_fix_proposals/finding.md` and Inherited-Frame Preservation at `devdocs/inquiries/2026-06-08_19-10__inherited_frame_preservation_critique_fix_proposals/finding.md`)?

**Goal.** Concrete, retroactively-testable, tier-honest, trade-off-honest, sibling-composable proposals.

---

## Update Note (added 2026-06-09)

**This finding has been updated to comprehensively integrate findings from a NEW SIBLING inquiry chain that was completed AFTER this finding's original publication: the purpose-fitness meta-principle work.**

The purpose-fitness sibling consists of two inquiries:

- **`devdocs/inquiries/2026-06-09_08-14__critique_kill_severity_meta_principle/finding.md`** — the meaning-layer articulation of the PURPOSE-FITNESS meta-principle as the structural property distinguishing a kill-worthy issue from a minor / nitpick issue, expressible task-agnostically.
- **`devdocs/inquiries/2026-06-09_10-13__encode_purpose_fitness_refinement_note_phase0/finding.md`** — the structural-layer follow-up encoding the principle as a Tier 1 Surgical SS refinement note at Phase 0 step 4 (Weight dimensions) of `td-critique.md`, plus mandatory ancillary edits.

**Why this update fires.** The new sibling activates the third entry under this finding's Refinement Triggers (Open Questions §3): *"3-way composition matrix's recommended adoption sequences. Triggers re-open if a 4th sibling inquiry (top_7 failure type #4, #5, #6, or #7) joins the matrix as a 4th dimension; the matrix becomes 4-way and the recommended sequences need re-derivation."* The purpose-fitness sibling is not itself a top_7 failure-type inquiry (it is the meta-principle inquiry that grew out of the nitpicking-creep concern surfaced in this series), but it is structurally a 4th sibling: it engages with `#3 Nitpicking`, it modifies `td-critique.md`, it carries its own Tier-classified spec edit, and it must be incorporated into the composition matrix. The trigger fires.

**Scope of update.** The integration is contained primarily in a NEW §9 (Integration with the purpose-fitness sibling), with propagation to:

- The Finding Summary (3 new bullets at the end, marked as added in update).
- §1's distinctness table (a new row for the purpose-fitness sibling).
- §6's per-scenario picker (one new joint-minimum path).
- §7's composition matrix preamble (a note that the matrix is now 4-way).
- Open Questions / Monitoring (two new items on joint-adoption density at Phase 0 and at #3).
- Open Questions / Refinement Triggers (Trigger #3 marked ACTIVATED).
- Reasoning (a paragraph explaining the update's rationale).

**All original content is preserved unchanged.** The update is ADDITIVE; nothing is rewritten or compacted. Readers consuming the finding cold can read top-to-bottom; readers familiar with the original can read this Update Note + §9 + the propagation points and skim the rest.

---

## Finding Summary

- **The mechanism is a STATED ≠ IMPLEMENTED scope gap inside critique's evaluation:** dimensions' stated scope often includes substance (meaning / content / within-category distinction / unit presupposition), but implementation operationally restricts evaluation to surface attributes (name / shape / classification / structural slot). The dimension passes at the surface; the substance goes unprobed.

- **Structurally, this failure is NOT a precondition-violation pattern** (unlike its two siblings Axis Absence and Inherited-Frame Preservation). It is an **INVERSE-COMPANION-PAIR** with the existing failure mode #3 Nitpicking in `td-critique.md` §4. Both failures are quality-of-evaluation problems at opposite ends of a single detail-density axis: Nitpicking over-tests surface detail at the cost of substance; Label-Tested tests well-named labels confidently while substance goes unprobed. Their empirical signatures are inverse (Nitpicking → many KILLs / no SURVIVEs; Label-Tested → many SURVIVEs / substance unverified).

- **Five sub-mechanisms produce the failure**, each at a distinct evaluation locus: (1) NAME-vs-meaning conflation; (2) WORKED-EXAMPLE treated as illustration not commitment; (3) CATEGORY-bounded test coverage (with two sub-cases: within-category undifferentiation, and candidate-set restriction by inherited taxonomy); (4) UNIT-presupposition not tested; (5) ARTIFACT-TYPE ambiguity (conceptual entity vs authored deliverable).

- **The intervention surface is within `td-critique.md` only** (no cross-spec dimension, unlike Inherited-Frame Preservation). The fix lives at Phase 0 Dimension Construction (stated-scope side of the gap) AND Phase 2 Adversarial Evaluation (implemented-evaluation side of the gap). Sensemaking's existing Load-bearing concept test (a refinement note in Phase 3 of `cognitive_harness/sense-making/references/sensemaking.md`) is a direct cross-discipline precedent — its proxy-vs-structural distinction IS the LABEL-vs-SUBSTANCE distinction at the sensemaking layer. This precedent is cited as MANDATORY external grounding, not as a coupling dependency.

- **Four structurally-distinct fix proposals carry forward.** The tier-shape vocabulary is inherited from the Axis Absence finding unchanged (surgical / additional / significant = three distinct STRUCTURAL EDIT SHAPES; the picker is dimensional navigation, not ranked recommendation):

  - **Tier 1 (Surgical)** — TWO-INSERTION-POINT refinement-note: add a "Substance-vs-Label criteria" sub-step to Phase 0's existing success-criteria refinement note AND extend Phase 2's existing Multi-axis prosecution depth check with a Substance-axis sub-axis. Both insertion points are needed because the STATED ≠ IMPLEMENTED scope gap spans both sides; either insertion alone addresses only half the failure.

  - **Tier 2 (Additional) — TWO SUB-VARIANTS**, both produced (user picks one):
    - **(a) ADD** new entry #10 in §4 "Label-Tested, Substance-Untested" — vocabulary-distinct entry; sequential composition with Axis Absence's added #8 and Inherited-Frame Preservation's added #9.
    - **(b) REPAIR** existing entry #3 Nitpicking to add an inverse-companion failure note — minimum vocabulary growth; makes the INVERSE-COMPANION-PAIR relationship structurally explicit in the spec where Nitpicking already lives.

  - **Tier 3 (Significant)** — CUMULATIVE extension of the hook-table introduced by Axis Absence Tier 3 and extended by Inherited-Frame Preservation Tier 3: adds a 10th hook column "HC10 Substance-vs-Label-tested" and further broadens the meta-question from Inherited-Frame Preservation's "Are the dimension space AND its inherited frame both load-bearing and tested?" to **"Are the dimension space AND its inherited frame AND its evaluation level all load-bearing and tested?"** This Tier 3 is CONDITIONAL — it requires both prior siblings' Tier 3 to be adopted; otherwise the deferred alternative (don't extend; accept fragmentation) applies.

- **Tier 2's two-sub-variant structure is a NEW SUB-AXIS within tiers**, parallel to the single-spec/cross-spec sub-axis established by Inherited-Frame Preservation. Within Tier 2, the intervention-shape sub-axis is ADD-new-entry vs REPAIR-existing-entry. This sub-axis applies because `td-critique.md` §4's organizing pattern accommodates both shapes.

- **A per-scenario picker** chooses among the four variants based on context (existing critique vocabulary tolerance / sibling-adoption status / coupling appetite). A **3-way composition matrix** with the two prior siblings' proposals (this inquiry's 4 variants × Axis Absence's 3 tiers × Inherited-Frame Preservation's 6 variants = 72 cells) provides cross-inquiry navigation; recommended adoption sequences (minimal / mid-cost / cumulative-deep) are highlighted.

- **Two REFINES from Critique are folded into the Tier 1 proposal and the assembly-level guidance.** (Detailed in §5 below.)

- **(Added in update 2026-06-09)** **The purpose-fitness sibling integrates as a 4th member of this series.** The purpose-fitness work establishes a meta-principle for severity calibration in `/td-critique` (a defect is kill-worthy if, left in place, it fatally prevents the candidate from doing what it's supposed to do) and structurally encodes it as a Tier 1 Surgical SS refinement note at Phase 0 step 4 (Weight dimensions). The relationship to this finding is **COMPLEMENTARY-NOT-OVERLAPPING** — both engage with `#3 Nitpicking`, but along DIFFERENT structural axes: the purpose-fitness sibling frames `#2 Rubber-Stamping ↔ #3 Nitpicking` as opposite-direction violations of the SAME severity test; this finding frames `#3 Nitpicking ↔ Label-Tested` as INVERSE-COMPANION-PAIR on the detail-density axis. The two axes are orthogonal; the two pairings stack on `#3` without competing. See §9 for the full integration analysis.

- **(Added in update 2026-06-09)** **`#3 Nitpicking` ends up at the intersection of TWO pairing structures** if both findings' edits ship: the severity axis (paired with `#2` under purpose-fitness) and the detail-density axis (paired with Label-Tested under this finding). Both pairings are structurally valid and coexist as distinct framings of the same failure mode. The `#3` entry would carry multiple additions — one per pairing — when the joint-adoption sequence is followed. Joint nitpicking-creep mitigation is enhanced because the two findings mitigate at two distinct loci (Phase 0 step 4 weighting semantics from purpose-fitness; Phase 0 success-criteria triage from this finding's Tier 1).

- **(Added in update 2026-06-09)** **The composition matrix in §7 has been extended from 3-way to 4-way; recommended adoption sequences are updated.** Joint adoption sequences (MINIMAL / MID-COST / CUMULATIVE-DEEP) are extended to incorporate the purpose-fitness sibling's Tier 1 + mandatory ancillaries (Ancillary A: back-reference at `#2`; Ancillary B: back-reference at `#3`; Ancillary D: back-reference at the Phase 3 constructive-output refinement note — promoted from COULD to MUST by the purpose-fitness structural inquiry's critique frame-premise prosecution). Joint adoption is COMPOSE-NATURAL across all sequences; no edits conflict. The purpose-fitness sibling adds ~30 lines uniformly to each sequence (refinement note + 3 mandatory ancillaries; optional Ancillary C is a 4th ancillary deferred to user discretion).

---

## Finding

This inquiry is the THIRD in a series of deep-dives into the top-7 critique failures, after Axis Absence (failure type #2) and Inherited-Frame Preservation (failure type #1). The series proposes concrete edits to `cognitive_harness/td-critique/references/td-critique.md` — the discipline spec for `/td-critique` (Structural Critique), the discipline that evaluates ideas/plans/outputs adversarially and produces SURVIVE / REFINE / KILL verdicts. The 6 Label-Tested instances come from the 48-pair correction-chain corpus at `devdocs/100_critique_correction_chain_analysis.md`.

### 1. The mechanism — what makes Label-Tested distinct

Label-Tested is the failure where critique's dimensions evaluate **surface attributes** of a candidate (its NAME, top-level SHAPE, CLASSIFICATION, structural SLOT) but never probe the **substance** beneath them (the MEANING the name carries, the CONTENT a worked example commits to, the structurally-distinct sub-cases within a coarse category, what a primary UNIT presupposes). The dimension's STATED scope often nominally includes substance, but the IMPLEMENTATION restricts to surface evaluation. The gap is between stated scope and implemented evaluation. This stated-vs-implemented split is the key structural surface.

**Distinctness from existing modes (confirmed; not collapsed).**

| Existing mode | Distinct because... |
|---|---|
| #3 Nitpicking | INVERSE-COMPANION: Nitpicking = too much surface-detail testing → many KILLs / no SURVIVEs; Label-Tested = too much surface-confidence in well-tested labels → many SURVIVEs / substance unverified. The two failures occupy opposite ends of the same detail-density axis at Phase 2 evaluation. |
| #1 Wrong Dimensions | DIFFERENT GAP: Wrong Dimensions is a MATCH failure (the dimension misaligns with the candidate's claim type); Label-Tested is a LEVEL failure inside a matched dimension (right dimension, wrong evaluation depth). |
| #4 Dimension Blindness | DIFFERENT GAP: Dimension Blindness = dimension MISSING entirely; Label-Tested = dimension PRESENT but restricted to surface. |
| Axis Absence (sibling finding) | DIFFERENT LAYER: Axis Absence is precondition-violation at the within-spec layer (a within-failure-mode axis missing from the spec's enumeration). Label-Tested is at the dimension-evaluation-depth layer. |
| Inherited-Frame Preservation (sibling finding) | DIFFERENT LAYER: Inherited-Frame Preservation is precondition-violation at the cross-spec layer (an upstream discipline's contract not preserved by a downstream consumer). Label-Tested is within `td-critique.md` only. |
| **Purpose-fitness (newer sibling finding; added in update 2026-06-09)** | **DIFFERENT AXIS, OVERLAPPING TARGET:** Purpose-fitness operates at the SEVERITY axis (does the defect block purpose-fulfillment?), pairing `#2 Rubber-Stamping ↔ #3 Nitpicking` as opposite-direction violations of a single severity principle. Label-Tested operates at the DETAIL-DENSITY axis (does prosecution depth match substance?), pairing `#3 Nitpicking ↔ Label-Tested` as inverse-companions. BOTH pairings engage `#3`; both are structurally valid at different layers. The two findings are COMPLEMENTARY-NOT-OVERLAPPING. See §9 for the full integration analysis. |

**The structural relationship — NOT precondition-violation.**

The two prior sibling inquiries both established precondition-violation patterns at different layers (Axis Absence within-spec, Inherited-Frame Preservation cross-spec). The natural hypothesis on entering this inquiry was that Label-Tested would extend that pattern at a third layer. Sensemaking tested this hypothesis structurally and rejected it: Label-Tested is a **NEW structural relationship** — an INVERSE-COMPANION-PAIR with #3 Nitpicking, where both failures fire at the same locus (Phase 2 adversarial evaluation, defense step) with empirically inverse signatures. The two failures together span the detail-density axis at Phase 2; neither alone constitutes a precondition violation.

### 2. The five sub-mechanisms

Each of the 6 corpus instances maps cleanly to one of five sub-mechanisms with a distinct evaluation locus. (Sub-mechanism (3) has two sub-cases that share the same locus — category-bounded test coverage — with different failure shapes.)

**(1) NAME-vs-meaning conflation.** The dimension verifies the NAME of a concept is user-verbatim or category-coherent, but never tests what the name MEANS in practice. *Corpus: 15-39 A8 ← 01-00 — "Itemize" verified as user-verbatim; the LLM-auto-completed meaning "split into distinct atomic items" never interrogated.*

**(2) WORKED EXAMPLE treated as illustration not commitment.** A worked example accompanying a candidate is read as illustrative scaffolding rather than as a load-bearing structural commitment of the candidate's mechanism. The example's content is not stress-tested with the candidate's own mechanism applied to it literally. *Corpus: 21-18 ← 22-44 — the small=fix-bug / big=redesign-OAuth-flow example tested against dual-mode dispatch mechanics, but the underlying claim "spans the scope-axis" never interrogated using the example as the test substrate.*

**(3) CATEGORY-bounded test coverage** (two sub-cases sharing locus).
- **(3a) Within-category undifferentiation.** A coarse category (e.g., "permissive") is tested as a uniform space; structurally-distinct sub-cases within it (UNDETERMINED vs UNCERTAIN — refusal-to-commit vs commitment-with-hedge) are not surfaced. *Corpus: 19-06 ← 20-29.*
- **(3b) Candidate-set restriction by inherited taxonomy.** The candidate set on the table is restricted by an inherited taxonomy assumed valid; the taxonomy itself is never on the candidate list. *Corpus: 18-21 ← 19-06 — critique tested 10 CORE per-item entries against 4 readers, but the question-text itself was never a candidate because the prior taxonomy "MQ produces answer" was taken for granted.*

**(4) UNIT-presupposition not tested.** Critique reads an operation top-down (what it does, what properties it preserves) but never reads bottom-up — what its primary UNIT presupposes about prior trajectory or surrounding context. *Corpus: 09-23 STANDALONE — operation top-down properties preserved (enumerate-all + type + reachability + guidance + no-select), but verb-first form's presupposition of prior trajectory not probed.*

**(5) ARTIFACT-TYPE ambiguity.** Artifacts referenced in a candidate's design are treated as conceptual entities, not as authored deliverables requiring naming and lifecycle parity. *Corpus: 11-23 STANDALONE — one artifact named (`routelister.md`); the other only described as "the identity-set/index state-file." Naming asymmetry undetected because the dimension treated artifacts conceptually.*

The 6 corpus instances cover all 5 loci with sub-mechanism (3) carrying two instances (one per sub-case).

### 3. Tier-shape vocabulary (inherited from Axis Absence; respected unchanged)

The Axis Absence finding §10 fixed the tier-metaphor and the Inherited-Frame Preservation finding §10 added a sub-axis within tiers. Both clarifications carry forward unchanged; this inquiry adds ONE further clarification (a second sub-axis applying to Tier 2 specifically). Restated:

- **Tier 1 / Tier 2 / Tier 3 = STRUCTURAL EDIT SHAPES** (per Axis Absence finding §10). Tier 1 = refinement-note within existing structure; Tier 2 = new top-level structure (new failure-mode entry); Tier 3 = restructure organizing pattern (introduce / extend a hook-table). The tiers are NOT ranked recommendations.

- **Single-spec vs cross-spec = SPEC-COUNT SUB-AXIS within each tier** (per Inherited-Frame Preservation finding §10). Not applicable to this inquiry because Label-Tested is within-`td-critique.md`-only.

- **Tier 2 sub-variant (a) ADD-new-entry vs (b) REPAIR-existing-entry = INTERVENTION-SHAPE SUB-AXIS within Tier 2** (NEW this inquiry). Applies because `td-critique.md` §4's organizing pattern (a numbered list of failure modes, each with a definition + corrective sketch) accommodates both ADD and REPAIR shapes. The two sub-variants achieve the same outcome (the spec recognizes Label-Tested) via different structural moves; user picks one.

These sub-axes are **navigational dimensions inside the tier-ladder, not separate tiers**. The picker (§6 below) is dimensional navigation across tier × sub-variant; it is not a ranked recommendation.

### 4. The four proposals (with corpus retroactive-test, trade-off analysis, sibling composition)

Each proposal includes: mechanism + spec location + sub-mechanism coverage + corpus retroactive test (≥3 of 6) + trade-off analysis on the 5 inherited axes + nitpicking-creep mitigation (CRITICAL given the INVERSE-COMPANION-PAIR relationship with Nitpicking) + external grounding (sensemaking Load-bearing concept test cited as MANDATORY precedent) + composition with both prior siblings.

The 5 trade-off axes (inherited from Axis Absence + Inherited-Frame Preservation; no cross-spec edit complexity axis this inquiry because within-`td-critique.md` only):
1. Prevention leverage (how many sub-mechanisms it catches).
2. Cost (edit footprint to `td-critique.md`).
3. Sub-mechanism coverage (which of the 5 loci it covers).
4. Future-extensibility (capacity to absorb additional sub-mechanisms or new failure modes).
5. **Nitpicking-creep risk (CRITICAL because of the INVERSE-COMPANION-PAIR with #3 Nitpicking — a poorly-bounded substance test could flip critique into the very nitpicking failure mode it neighbours).**

#### Tier 1 (Surgical) — Two-insertion-point unified refinement notes

**Mechanism.** Two surgical refinement notes, both required because the STATED ≠ IMPLEMENTED gap spans both sides.

- **Phase 0 insertion** — add a "Substance-vs-Label success criteria" sub-step to the existing Phase 0 success-criteria refinement note. For each dimension whose stated scope will test load-bearing claims about meaning, content, within-category distinction, or unit presupposition, require at least one substance-level success criterion (not just a surface criterion).

- **Phase 2 insertion** — extend the existing Multi-axis prosecution depth check refinement note. The existing 3 sub-axes (user-perspective / failure-case scenario / specification-gap probe) are joined by a 4th sub-axis: **substance-axis prosecution.** Fires when the dimension's Phase 0 criteria include a substance-level criterion; the prosecution must apply the candidate's own mechanism to the candidate's worked examples and the candidate's primary unit literally, not via intuitive reading.

**Spec location.** Two refinement notes in `td-critique.md`, one each at Phase 0 and Phase 2.

**Sub-mechanism coverage.** All 5 loci. Phase 0 insertion catches (1) NAME-vs-meaning, (3a/b) CATEGORY, (4) UNIT, (5) ARTIFACT-TYPE at dimension-construction time. Phase 2 insertion catches (2) WORKED-EXAMPLE at evaluation time (the literal-application sub-rule is the load-bearing piece for worked examples).

**Corpus retroactive test.** All 6 instances catchable. 15-39 → Phase 0 substance criterion on D5 + Phase 2 literal-application of D12. 21-18 → Phase 2 literal-application to worked example. 18-21 → Phase 0 substance criterion (taxonomy as candidate). 09-23 → Phase 0 substance criterion (UNIT presupposition). 19-06 → Phase 0 substance criterion (within-category distinction). 11-23 → Phase 0 substance criterion (artifact-type parity).

**Trade-off analysis.**
- Prevention leverage: HIGH (catches all 5 loci).
- Cost: LOW (two refinement notes; total edit ≈ 40 lines).
- Sub-mechanism coverage: COMPLETE.
- Future-extensibility: MEDIUM (refinement notes accommodate further sub-axes; not unbounded).
- Nitpicking-creep risk: LOW-MEDIUM, *with REFINE applied* (see below). Without the REFINE, MEDIUM-HIGH because the Phase 0 trigger condition could be over-applied.

**Nitpicking-creep mitigation (per Critique's REFINE-A3).** The Phase 0 insertion's trigger uses a load-bearing-claim-type triage: "Each dimension whose stated scope WILL test load-bearing claims about meaning, content, distinction-within-category, or unit-presupposition must include at least one substance-level success criterion. Dimensions whose claims are purely about surface attributes (e.g., elegance phrased as visual parsimony; consistency phrased as cross-section term agreement) need not include substance criteria." This claim-type triage is the load-bearing nitpicking-creep mitigation at Phase 0 construction time. The Phase 2 sub-axis fires only when a Phase 0 substance criterion exists; the two trigger conditions chain to bound substance-testing to dimensions where substance is genuinely load-bearing.

**External grounding.** Sensemaking's Load-bearing concept test refinement note (in `cognitive_harness/sense-making/references/sensemaking.md` Phase 3) — its proxy-vs-structural sub-aspect IS the LABEL-vs-SUBSTANCE distinction at the sensemaking layer. Cited as MANDATORY cross-discipline precedent; the operational shape is the same (identify the surface attribute; identify the substance; require at least one test of substance).

**Composition with siblings.** COMPOSE-NATURAL with Axis Absence Tier 1 and Inherited-Frame Preservation Tier 1 single-spec. All three Tier 1 proposals add refinement notes; they sit in sequence at Phase 0 (success-criteria refinement) and/or Phase 2 (prosecution depth refinement) without collision. Adopting all three Tier 1s together is the cheapest path to addressing the three failure types.

#### Tier 2 sub-variant (a) — ADD new entry #10 "Label-Tested, Substance-Untested"

**Mechanism.** Add a new top-level failure-mode entry as `td-critique.md` §4 #10 following the existing format (Definition + Detection + Corrective + INVERSE-COMPANION cross-reference to #3 Nitpicking).

**Spec location.** `td-critique.md` §4 (after #9 if Inherited-Frame Preservation's Tier 2 was adopted; otherwise after #8 / after #7). SKILL.md description grows by ~30 chars.

**Sub-mechanism coverage.** All 5 loci named in the Detection sub-section.

**Corpus retroactive test.** All 6 instances catchable; each cited as a Detection example in the entry.

**Trade-off analysis.**
- Prevention leverage: HIGH (mode by name is hard to overlook).
- Cost: LOW-MEDIUM (~25 lines added to §4; SKILL.md description grows ~30 chars).
- Sub-mechanism coverage: COMPLETE.
- Future-extensibility: MEDIUM (entry can absorb additional sub-mechanisms; §4 list grows linearly).
- Nitpicking-creep risk: MEDIUM. Trigger condition included; cross-reference to #3 Nitpicking entry as INVERSE explicitly bounds when each fires.

**Nitpicking-creep mitigation.** The entry's Detection sub-section names the trigger as "the dimension's stated scope includes substance-level claims AND prosecution depth tests only surface attributes" — bounded by claim-type. Cross-reference to #3 Nitpicking entry frames the pair as INVERSE-COMPANION: Nitpicking fires when prosecution is too dense; Label-Tested fires when prosecution is too thin. The pair description bounds each independently.

**External grounding.** Sensemaking Load-bearing concept test cited in the Corrective sub-section.

**Composition with siblings.** Sequential numbering: Axis Absence's added #8 + Inherited-Frame Preservation's added #9 + this #10. The §4 list reaches 10 entries; at this size still readable (concerns become real at ~15+).

#### Tier 2 sub-variant (b) — REPAIR existing entry #3 Nitpicking

**Mechanism.** Modify the existing #3 Nitpicking entry to add an inverse-companion failure note explicitly naming Label-Tested as the dual of Nitpicking and providing Detection + Corrective sub-sections for it as a labelled sub-mode under #3.

**Spec location.** `td-critique.md` §4 #3 Nitpicking; ~30 lines added.

**Sub-mechanism coverage.** All 5 loci named in the inverse-companion note.

**Corpus retroactive test.** All 6 instances catchable.

**Trade-off analysis.**
- Prevention leverage: HIGH.
- Cost: MEDIUM (existing entry length grows from ~30 lines to ~60; sub-mode structure preserves readability).
- Sub-mechanism coverage: COMPLETE.
- Future-extensibility: LOW-MEDIUM (Nitpicking entry becomes a container; future inverse-companion-style failures may need their own pattern).
- Nitpicking-creep risk: LOW. The inverse-companion-pair framing makes the pair explicit in the spec where Nitpicking already lives; the two failure modes are described as each other's bound.

**Vocabulary loss minus (honest trade-off).** Label-Tested becomes a sub-section under #3 Nitpicking rather than a standalone numbered entry. Corpus labeling becomes longhand ("#3 inverse-companion: Label-Tested" rather than "#10 Label-Tested"). This vocabulary loss is the trade for minimum §4 growth and explicit INVERSE-COMPANION-PAIR structure in the spec.

**Nitpicking-creep mitigation.** Same trigger-condition framing as sub-variant (a), but now structurally adjacent in the spec to Nitpicking's own trigger — the pair is described together; each bounds the other.

**External grounding.** Sensemaking Load-bearing concept test cited in the Corrective sub-section.

**Composition with siblings.** Independent of Axis Absence and Inherited-Frame Preservation Tier 2 entries; this sub-variant repairs an EXISTING entry rather than adding a new one. Sibling Tier 2 entries (#8, #9) remain at their numbered positions; §4 reaches 9 entries instead of 10.

#### Tier 3 (Significant) — Cumulative hook-table extension + meta-question broadening

**Mechanism.** Extend the hook-table introduced by Axis Absence Tier 3 (Hooks HC1-HC7) and extended by Inherited-Frame Preservation Tier 3 (HC8-HC9) with a 10th hook column **HC10 Substance-vs-Label-tested**. The hook-table's meta-question further broadens from Inherited-Frame Preservation's "Are the dimension space AND its inherited frame both load-bearing and tested?" to **"Are the dimension space AND its inherited frame AND its evaluation level all load-bearing and tested?"** The hook-table now covers three structural coordinates: dimension space (Axis Absence's contribution), inherited frame (Inherited-Frame Preservation's contribution), and evaluation level (this inquiry's contribution).

**Spec location.** Same hook-table location established by Axis Absence Tier 3 in `td-critique.md` (the assembly check / cumulative hook table); column HC10 added with cross-reference to the entry created by Tier 2.

**Sub-mechanism coverage.** All 5 loci, organized as sub-aspects under HC10.

**Corpus retroactive test.** All 6 instances catchable at HC10.

**Trade-off analysis.**
- Prevention leverage: HIGHEST (meta-question + hook-table covers the failure space comprehensively).
- Cost: HIGH and CUMULATIVE (requires AA-T3 + IFP-T3 already adopted; restructure cost amortized across all three inquiries).
- Sub-mechanism coverage: COMPLETE.
- Future-extensibility: HIGHEST (sub-linear future growth — additional sub-mechanisms add as sub-aspects of existing hooks; new failure modes add as new HC columns).
- Nitpicking-creep risk: LOW (trigger conditions inherit from Tier 1 substance-criteria machinery).

**Honest minuses (per Critique).**
1. **Three-way coupling.** This Tier 3 requires both prior siblings' Tier 3 to be adopted. The deferred alternative (don't extend; accept fragmentation) applies when sibling Tier 3 status is uncertain.
2. **Composability upper limit.** The three-coordinate meta-question approaches the upper limit of a single generative principle. Reading is still possible; the question is structurally honest about what it asks. Flagged for monitoring in Open Questions.
3. **Cumulative cost.** Significant restructure cost stacks on top of the prior two siblings' Tier 3 adoption.

**External grounding.** Cross-discipline precedent: sensemaking's Meta-Inspection cumulative hook-table pattern at `cognitive_harness/sense-making/references/sensemaking.md`. Sensemaking Load-bearing concept test cited as MANDATORY precedent.

**Composition with siblings.** This Tier 3 EXTENDS the prior siblings' Tier 3s by adding a column; it does not collide. Adopting all three Tier 3s produces a hook-table with HC1-HC10 organized under a three-coordinate meta-question; this is the cumulative-deep adoption sequence (recommended only when the user has appetite for full restructure plus the long-term future-extensibility return).

### 5. Two Critique-derived REFINES (folded in)

**REFINE-A3 (folded into Tier 1).** Phase 0 nitpicking-creep mitigation phrasing tightened to use a load-bearing-claim-type triage (quoted in §4 above under Tier 1's Nitpicking-creep mitigation block). The triage distinguishes dimensions whose stated scope WILL test load-bearing substance from those whose claims are purely surface; only the former carry mandatory substance criteria.

**REFINE-Assembly (folded into §3).** The §3 tier-shape vocabulary statement now carries forward both prior siblings' clarifications AND adds the new Tier-2-internal sub-axis clarification, making three clarifications cumulative:

1. Tiers = STRUCTURAL EDIT SHAPES, not ranked recommendations (Axis Absence finding §10).
2. Single-spec vs cross-spec = SPEC-COUNT SUB-AXIS within each tier (Inherited-Frame Preservation finding §10) — N/A this inquiry because within-`td-critique.md` only.
3. Tier 2 ADD vs REPAIR = INTERVENTION-SHAPE SUB-AXIS within Tier 2 — NEW this inquiry; applies because `td-critique.md` §4's organizing pattern accommodates both shapes.

### 6. Comparative table + per-scenario picker

| Variant | Prevention | Cost | Sub-mechanism coverage | Future-extensibility | Nitpicking-creep risk |
|---|---|---|---|---|---|
| Tier 1 unified (Phase 0 + Phase 2) | HIGH | LOW (~40 lines) | COMPLETE (5/5 loci) | MEDIUM | LOW-MEDIUM (with REFINE) |
| Tier 2 sub-variant (a) — ADD #10 | HIGH | LOW-MEDIUM (~25 lines + SKILL.md) | COMPLETE | MEDIUM | MEDIUM |
| Tier 2 sub-variant (b) — REPAIR #3 | HIGH | MEDIUM (~30 lines in existing entry) | COMPLETE | LOW-MEDIUM | LOW |
| Tier 3 cumulative HC10 + 3-coord meta-Q | HIGHEST | HIGH cumulative (requires AA-T3 + IFP-T3) | COMPLETE | HIGHEST | LOW |

**Per-scenario picker:**

- **Minimum-cost path:** Tier 1 unified alone. Catches all 5 loci at both stated and implemented sides of the scope gap. ~40 lines edited; no §4 entry; no SKILL.md change. Pick this if the goal is cheapest end-to-end coverage.

- **Vocabulary-distinct path:** Tier 1 + Tier 2 sub-variant (a). Mode has a name (#10); spec is searchable for "Label-Tested." Pick this if downstream uses of `td-critique.md` benefit from explicit mode-naming. Composes naturally with Axis Absence + Inherited-Frame Preservation sequential Tier 2 entries.

- **Minimum-vocab-growth path:** Tier 1 + Tier 2 sub-variant (b). INVERSE-COMPANION-PAIR is explicit in the spec adjacent to #3 Nitpicking; §4 list does NOT grow to 10 entries. Pick this when §4 length is a concern or when the inverse-companion-pair framing is the load-bearing piece for spec readers.

- **Cumulative-deep path:** Tier 1 + chosen Tier 2 sub-variant + Tier 3 cumulative HC10. ONLY when both prior siblings' Tier 3s have been adopted. Full long-term return on future-extensibility; significant up-front restructure.

- **Comprehensive joint-minimum path (added in update 2026-06-09):** All four siblings' Tier 1 edits jointly + purpose-fitness's mandatory ancillaries (A + B + D). This includes Axis Absence Tier 1 + Inherited-Frame Preservation Tier 1 single-spec + this finding's Tier 1 unified + the purpose-fitness Tier 1 Surgical refinement note at Phase 0 step 4 + Ancillaries A (back-reference at `#2`) + B (back-reference at `#3`) + D (back-reference at the Phase 3 constructive-output refinement note). Optional Ancillary C (cross-reference at line 128's Adversarial structure final sentence) is user-discretion. Pick this for the cheapest joint coverage of all known failure types from the top-7 list §1-3 PLUS the meaning-layer meta-principle of severity (purpose-fitness). Total edit: ~110 lines (this finding's MINIMAL ~80 lines + ~30 lines from the purpose-fitness sibling). See §9.6 for the comprehensive joint-adoption sequence comparison.

- **All other picker paths extend uniformly with purpose-fitness** (added in update 2026-06-09). Each of the original picker paths (Minimum-cost / Vocabulary-distinct / Minimum-vocab-growth / Cumulative-deep) extends naturally by adding the purpose-fitness Tier 1 + Ancillaries A + B + D to each path. The purpose-fitness sibling has no Tier 2 or Tier 3 of its own; the joint addition is uniformly the same across picker paths.

### 7. The 3-way composition matrix with prior siblings

**Update note (2026-06-09):** This section's 3-way matrix is preserved as originally published for reference. The purpose-fitness sibling extends the matrix to 4-way; the comprehensive re-derivation lives in §9.6. For consumers reading top-to-bottom, this §7 describes the 3-way matrix; §9.6 describes the 4-way extension. The 3-way matrix's structure and adoption sequences remain valid as a sub-set of the 4-way; the 4-way adds purpose-fitness as a 4th dimension uniformly across all sequences.

The matrix is this inquiry's 4 variants × Axis Absence's 3 tiers × Inherited-Frame Preservation's 6 variants = **72 cells**. The matrix's value is navigation: not every cell is meaningful, but every adoption combination has a single matrix coordinate where its composition properties are recorded.

**Three recommended adoption sequences:**

- **MINIMAL** — Axis Absence Tier 1 + Inherited-Frame Preservation Tier 1 single-spec + this inquiry Tier 1 unified. Three refinement notes in `td-critique.md`. Catches all known failure types from the top-7 §1-3 at the cheapest cost. Total edit: ~80 lines.

- **MID-COST (vocabulary-distinct)** — MINIMAL + the three Tier 2 entries (#8 Axis Absence + #9 Inherited-Frame Preservation cross-spec + #10 Label-Tested via sub-variant (a)). Each failure has an explicit named entry. `td-critique.md` §4 reaches 10 entries. Total edit: ~155 lines.

- **CUMULATIVE-DEEP** — MID-COST + the three Tier 3s (AA cumulative hook-table + IFP cross-spec column + this inquiry's HC10 + 3-coordinate meta-question). Highest future-extensibility return; highest up-front cost. Total edit: ~280 lines with the most significant restructure.

**Three coupling caveats** the matrix surfaces:

1. **This inquiry's Tier 3 is conditional** on both prior siblings' Tier 3 — adopting only this inquiry's Tier 3 without sibling Tier 3s creates a fragmented hook-table with no precedent column structure.

2. **The Tier 2 sub-variant choice is independent** — if Axis Absence Tier 2 and Inherited-Frame Preservation Tier 2 were both adopted as ADD-new-entry, choosing this inquiry's Tier 2 sub-variant (b) REPAIR breaks the sequential-numbering pattern (§4 would have #8 and #9 added, but Label-Tested would be a sub-mode of #3). This is structurally fine; just flagged.

3. **The Tier 1 unified shape is unique to this inquiry.** Prior siblings' Tier 1s are single-insertion-point; this inquiry's Tier 1 is two-insertion-point because the failure surface (STATED ≠ IMPLEMENTED scope gap) spans both Phase 0 and Phase 2. This is a meaningful asymmetry; not a defect.

### 8. The meta-question evolution across the three inquiries

The series produces an evolving meta-question if the cumulative-deep adoption sequence is followed:

- **Axis Absence** → "Does the dimension space SPAN the failure space?" (one coordinate: dimension space).
- **Inherited-Frame Preservation** → "Are the dimension space AND its inherited frame both load-bearing and tested?" (two coordinates: dimension space, inherited frame).
- **This inquiry** → "Are the dimension space AND its inherited frame AND its evaluation level all load-bearing and tested?" (three coordinates: dimension space, inherited frame, evaluation level).

Three coordinates is approaching the upper limit of a single generative principle that can be applied in one cognitive pass. Future failure modes that broaden this meta-question further may need a different organizing pattern (e.g., the hook-table itself becomes the surface and the meta-question fades to a label).

**Update note (2026-06-09):** The purpose-fitness sibling does NOT extend this meta-question. Purpose-fitness operates at the SEVERITY axis (does the defect block purpose-fulfillment?), which is a different structural axis than the dimension-space-and-frame-and-evaluation-level axes named here. The purpose-fitness sibling's analog of this section's meta-question — *"If this defect were left in place, would the candidate still do what it's supposed to do — sufficiently, not just degraded?"* — operates at a different layer (per-defect severity test rather than per-spec-section dimension/frame/level test). The two meta-questions coexist; they don't compose into a 4-coordinate joint meta-question because they fire at different operational moments. The hook-table from this finding's Tier 3 remains 3-coordinate; the purpose-fitness refinement note operates outside the hook-table.

---

### 9. Integration with the purpose-fitness sibling (added in update, 2026-06-09)

After this finding's original publication on 2026-06-08, a NEW SIBLING inquiry chain on `/td-critique` failure modes was completed on 2026-06-09. This §9 comprehensively integrates the purpose-fitness sibling's commitments, re-derives the composition matrix from §7 (which becomes 4-way), and extends the per-scenario picker from §6. The §9 is the load-bearing structural locus for the update.

#### 9.1 What the purpose-fitness sibling covers

The purpose-fitness work is a two-inquiry chain:

- **Meaning-layer:** `devdocs/inquiries/2026-06-09_08-14__critique_kill_severity_meta_principle/finding.md` — articulates the PURPOSE-FITNESS meta-principle as the structural property distinguishing a kill-worthy issue from a minor / nitpick issue, expressible task-agnostically across diverse evaluation domains (software design / research hypothesis / business strategy / spec-edit critique / legal contract review / scientific paper peer review / educational assessment / security review / ethics review).
- **Structural-layer:** `devdocs/inquiries/2026-06-09_10-13__encode_purpose_fitness_refinement_note_phase0/finding.md` — encodes the principle as a Tier 1 Surgical SS refinement note at Phase 0 step 4 (Weight dimensions) of `td-critique.md`, plus mandatory and optional ancillary edits.

**The meta-principle** (from the meaning-layer finding's §1):

> A defect in a candidate is **kill-worthy** if, left in place, it fatally prevents the candidate from doing what the candidate is supposed to do. A defect is **minor / nitpick** if the candidate still does what it's supposed to do.

The principle is single-axis at the meta-level. Per-task richness (what counts as fulfilling purpose for this specific candidate — reversibility, blast-radius, scope, fixability, evidence-strength, and any domain-specific axes) lives at the per-task calibration layer, not above the meta-principle.

**The 1-question practitioner test** (from the meaning-layer finding's §2):

> *"If this defect were left in place, would the candidate still do what it's supposed to do — sufficiently, not just degraded?"*

YES → not kill-worthy (note as caveat on SURVIVE, or REFINE if a known better in-frame variant exists). NO → kill-worthy. Within kill-worthy, REFINE when the candidate's existing frame can absorb the fix; KILL when the fix requires replacing the candidate's frame entirely.

**Structural commitments preserved by the encoding** (from the meaning-layer finding §§3-8):

- Severity-calibration locus is Phase 0 step 4 (Weight dimensions). Per-task calibration is composite; meta is single-axis.
- The constructive-output requirement on KILL (per `td-critique.md` lines 140-142) IS the structural test of whether a KILL is supported: a kill-worthy defect can be articulated as the specific reason the candidate's frame prevents purpose-fulfillment, and that articulation IS the seed. Inability to extract a seed signals the KILL is unsupported — re-examine before rendering.
- Confidence is orthogonal to severity. Whether `/td-critique` should add an INTERIM verdict for insufficient-evidence cases (analogous to `/innovate`'s DEFERRED disposition) is a deferred structural question for a future inquiry.
- `#2 Rubber-Stamping` and `#3 Nitpicking` are **opposite-direction violations of the same purpose-fitness principle** (`#2` = severe defect under-killed; `#3` = non-severe defect over-killed). Both are mismatches between defect-severity (under the purpose-fitness test) and the verdict rendered. ONE structural test prevents BOTH failure modes.
- When a candidate's purpose is ambiguous (exploratory ideation; research-frontier candidates), `/td-critique` renders a **defer-with-direction verdict** naming the ambiguity and pointing back to upstream purpose-stabilization (e.g., `/sense-making` in the runner being used) rather than silently refusing or applying a modified test.

**The structural-layer encoding** (from the structural-layer finding §§1-3): the spec edit ready to apply consists of one refinement-note insertion and four ancillary edits (three mandatory + one optional + two verified-no-edit confirmations):

| Edit | Spec location | Status | Description |
|---|---|---|---|
| **Refinement note** | `td-critique.md` between line 190 and line 192 (Phase 0 step 4) | MUST | ~24 lines; 5 content blocks (semantics + 1-question test with REFINE/KILL boundary folded in + #2/#3 unification with cross-references folded in + ambiguous-purpose defer-with-direction fallback). |
| **Ancillary A** | `td-critique.md` line 330 (#2's "How to prevent") | MUST | Back-reference to the new Phase 0 refinement note + naming `#2` as opposite-direction violation of `#3`. |
| **Ancillary B** | `td-critique.md` line 338 (#3's "How to prevent") | MUST | Back-reference to the new Phase 0 refinement note + naming `#3` as opposite-direction violation of `#2`; uses the phrase *"nitpicking-creep at construction time"*. |
| **Ancillary D** | `td-critique.md` lines 140-142 (Phase 3 constructive-output refinement note) | MUST (promoted from COULD by purpose-fitness structural inquiry's critique frame-premise prosecution) | Back-reference to the new Phase 0 refinement note + framing constructive-output as the structural test of severity. |
| **Ancillary C** | `td-critique.md` line 128 (Adversarial structure final sentence) | COULD | Cross-reference to the new Phase 0 refinement note + surfacing `#2/#3` unification at the Adversarial structure paragraph. |
| **Ancillary E (negative)** | `td-critique.md` §6 Summary table | VERIFIED-NO-EDIT | No new failure mode added; no new verdict type; no new phase. |
| **Ancillary F (negative)** | `cognitive_harness/td-critique/SKILL.md` | VERIFIED-NO-EDIT | Description granularity doesn't include refinement notes. |

The structural-layer finding's Tier classification per `docs/discipline_edit_tiers.md` is **Tier 1 Surgical SS** (single-spec; refinement-note pattern). The purpose-fitness sibling has no Tier 2 or Tier 3 variants of its own.

#### 9.2 The two-axis analysis — purpose-fitness vs LTSU

Both findings engage with `#3 Nitpicking` but along structurally distinct axes. The two axes are orthogonal:

| Dimension | Purpose-fitness sibling | This finding (LTSU) |
|---|---|---|
| **The axis itself** | Severity axis: does the defect block purpose-fulfillment? | Detail-density axis: does prosecution depth match the substance? |
| **`#3 Nitpicking` pairing** | `#2 Rubber-Stamping ↔ #3 Nitpicking` as opposite-direction violations of the SAME severity test | `#3 Nitpicking ↔ Label-Tested` as INVERSE-COMPANION-PAIR (Nitpicking = over-density; Label-Tested = under-density) |
| **Operational locus** | Phase 0 step 4 (dimension weighting semantics) | Phase 0 (success-criteria construction) + Phase 2 (prosecution depth) |
| **Layer of analysis** | META (what severity STRUCTURALLY IS) | OPERATIONAL (what prosecution DEPTH needs to be) |
| **Edit at `#3` Prevention text** | Back-reference cross-reference framing `#3` as severity-axis opposite of `#2` (Ancillary B) | Tier 2 sub-variant (b) REPAIR adds inverse-companion failure note framing `#3` as detail-density-axis opposite of Label-Tested |
| **Tier classification per `docs/discipline_edit_tiers.md`** | Tier 1 Surgical SS only (no Tier 2 or Tier 3 from this sibling) | Tier 1 unified (two-insertion-point) + Tier 2 sub-variants (a/b) + conditional Tier 3 cumulative |
| **Joint nitpicking-creep mitigation locus** | Phase 0 step 4 (purpose-fitness test) | Phase 0 success-criteria triage + Phase 2 substance-axis sub-axis |
| **Number of corpus instances** | 0 direct (the meaning-layer inquiry was triggered by the conversation around nitpicking-creep, not by corpus instances) | 6 corpus instances (per §§1-2 of this finding) |

**The axes are orthogonal.** A dimension can be correctly identified as critical-weight under purpose-fitness AND still be implemented at surface-only depth under Label-Tested's gap. The two failures are on different layers of the same overall dimension-design problem.

**The pairings stack on `#3 Nitpicking`.** If both findings' edits ship, `#3` carries two structurally distinct pairings simultaneously: the severity-axis pairing (`#2 ↔ #3` under purpose-fitness) and the detail-density-axis pairing (`#3 ↔ Label-Tested` under this finding). Both pairings are structurally valid and not in competition.

#### 9.3 Per-edit composition analysis

How does each purpose-fitness edit land relative to this finding's edits?

| Purpose-fitness edit | Composition with LTSU's edits | Notes |
|---|---|---|
| Purpose-fitness Tier 1 refinement note at Phase 0 step 4 | **COMPOSE-NATURAL** with LTSU Tier 1's Phase 0 success-criteria sub-step | They sit at different positions within Phase 0: purpose-fitness at step 4 (weighting); LTSU at the success-criteria refinement note. No collision. Both add to Phase 0's information density (see §9.4). |
| Purpose-fitness Tier 1 refinement note at Phase 0 step 4 | **COMPOSE-COHERENT** with LTSU Tier 1's Phase 2 substance-axis extension | Different phases; different concerns (semantics at Phase 0 vs depth at Phase 2). |
| Purpose-fitness Ancillary A (back-reference at `#2`) | **COMPOSE-NATURAL** with all LTSU variants | LTSU has no edit at `#2` specifically; Ancillary A stands alone at `#2`. |
| Purpose-fitness Ancillary B (back-reference at `#3`) | **COMPOSE-COHERENT** with LTSU Tier 2 sub-variant (b) REPAIR | Both add content to `#3 Nitpicking`'s Prevention text. If both adopted, `#3` carries two distinct additions (LTSU inverse-companion failure note on detail-density; purpose-fitness opposite-direction-violation back-reference on severity). The two pairings layer; they do not compete. See §9.5. |
| Purpose-fitness Ancillary B (back-reference at `#3`) | **COMPOSE-COHERENT-with-substitution** with LTSU Tier 2 sub-variant (a) ADD-new-entry | If LTSU adopts (a), the `#3` entry is unchanged by LTSU; purpose-fitness Ancillary B is the only addition to `#3`. The `Label-Tested ↔ #3` inverse-companion-pair relationship is encoded in the NEW entry `#10`'s INVERSE-COMPANION cross-reference (per LTSU §4 Tier 2 sub-variant (a) Mechanism), not in `#3` directly. |
| Purpose-fitness Ancillary D (back-reference at Phase 3 constructive-output note) | **COMPOSE-INDEPENDENT** with all LTSU variants | The Phase 3 edit is unrelated to LTSU's Phase 0/Phase 2 focus. Closes the structural gap that the purpose-fitness structural inquiry's critique frame-premise prosecution identified: practitioners reading Phase 3 cold need the back-reference to see the constructive-output as the structural test of severity (not as an isolated operational requirement). |
| Purpose-fitness optional Ancillary C (cross-reference at line 128 Adversarial structure) | **COMPOSE-COHERENT** with LTSU's framing | The Adversarial structure paragraph's existing language *"prevents two of critique's worst failure modes: rubber-stamping... and nitpicking..."* is consistent with both purpose-fitness's severity-axis framing AND LTSU's detail-density-axis framing. The Ancillary C cross-reference points at purpose-fitness only; if LTSU edits should ALSO be surfaced at line 128, that's a separate (and presently un-proposed) ancillary. |

**No edit is in conflict.** Every purpose-fitness edit composes either NATURAL, COHERENT, or INDEPENDENT with every LTSU edit. The two findings are fully joint-adoptable.

#### 9.4 Phase 0 information density post-joint-adoption

If both findings' Tier 1 edits + sibling Tier 1 edits (Axis Absence; Inherited-Frame Preservation) are all adopted, Phase 0 of `td-critique.md` will contain:

1. **Project-specific risk dimension check** (existing — currently at line 178 of the spec).
2. **Frame-premise test** (existing — added by IFP 4a; currently at lines 180-190 of the spec).
3. **Purpose-fitness test** (added by purpose-fitness sibling; ~24 lines at step 4 — Weight dimensions; insertion between line 190 and line 192).
4. **Substance-vs-Label success-criteria** (added by this finding's Tier 1 — appended to the existing Phase 0 success-criteria refinement note structure; precise insertion point depends on the current spec's structure at the time of LTSU Tier 1 adoption).

That is **four refinement notes at Phase 0**. The structural risk is information density — when a practitioner reads Phase 0 in a real `/td-critique` invocation, do four refinement notes feel coherent and necessary, or do they feel like accumulated drift?

Observable: monitor practitioner reception post-joint-adoption. If the four notes feel overloaded, candidate remediations include (a) consolidating two of them under a shared sub-section; (b) tightening one or more notes to reduce per-note length; (c) extracting one or more notes into a separate Phase 0 sub-section. Defer remediation until empirical evidence (≥5 real `/td-critique` invocations using the joint-adopted spec) shows overload. This concern is logged as a new Monitoring item in Open Questions.

#### 9.5 `#3 Nitpicking` entry density post-joint-adoption

The `#3` entry in `td-critique.md` §4 grows depending on which combination of edits is adopted:

| Adoption combination | Result at `#3` | Length estimate |
|---|---|---|
| Neither finding adopted | Original `#3` entry unchanged | ~7 lines (current spec) |
| Purpose-fitness Ancillary B only | One back-reference appended to `#3`'s "How to prevent" | ~9-10 lines |
| LTSU Tier 2 sub-variant (b) REPAIR only | Inverse-companion failure note added to `#3` (sub-mode structure) | ~30-40 lines |
| LTSU Tier 2 sub-variant (a) ADD-new-entry only | `#3` unchanged; Label-Tested goes to new `#10` entry | `#3` ~7 lines; `#10` ~25 lines |
| **Joint: Purpose-fitness Ancillary B + LTSU Tier 2 sub-variant (b)** | TWO additions at `#3`: (1) the inverse-companion failure note from LTSU on detail-density axis; (2) the opposite-direction-violation back-reference from purpose-fitness on severity axis | ~40-50 lines at `#3` |
| **Joint: Purpose-fitness Ancillary B + LTSU Tier 2 sub-variant (a)** | One addition at `#3` (purpose-fitness back-reference); separate `#10` entry for Label-Tested | `#3` ~10 lines; `#10` ~25 lines |

The **joint adoption with LTSU sub-variant (b) REPAIR** produces the highest `#3` density (~40-50 lines). The two additions encode different pairings of `#3` along different axes; they coexist without contradiction. ~50 lines is at the upper-end of acceptable for a §4 entry but still readable. If `#3` exceeds ~50 lines, consider sub-section structuring within the entry (a sub-section for severity-axis pairing; a sub-section for detail-density-axis pairing).

The **joint adoption with LTSU sub-variant (a) ADD-new-entry** is the lighter-density path: `#3` stays at ~10 lines (single back-reference); `#10` carries Label-Tested at ~25 lines. This path is recommended when `#3` length is a concern.

This concern is logged as a new Monitoring item in Open Questions.

#### 9.6 Joint adoption sequences (4-way matrix; updated from §7's 3-way)

The original §7 had three adoption sequences. They are now extended to incorporate the purpose-fitness sibling:

**MINIMAL (joint, all four siblings)** — Axis Absence Tier 1 + Inherited-Frame Preservation Tier 1 single-spec + this finding's Tier 1 unified + purpose-fitness Tier 1 + mandatory Ancillaries A + B + D.

Phase 0 will contain four refinement notes (Project-specific risk + Frame-premise test from IFP + purpose-fitness + LTSU Tier 1 sub-step) plus Phase 2 multi-axis prosecution depth extension (from LTSU Tier 1) plus back-references at `#2` and `#3` (from purpose-fitness ancillaries) plus a back-reference at the Phase 3 constructive-output refinement note (purpose-fitness Ancillary D).

Total edit: **~110 lines** (original MINIMAL ~80 lines + ~30 lines from purpose-fitness sibling). This is the cheapest joint coverage of all known failure types from the top-7 list §§1-3 PLUS the meaning-layer meta-principle of severity.

**MID-COST (joint, vocabulary-distinct)** — MINIMAL + the three Tier 2 entries from this series's siblings (AA `#8` + IFP `#9` + LTSU `#10` via sub-variant (a)).

The purpose-fitness sibling has no Tier 2; its content is encoded entirely in Tier 1 + ancillaries. `td-critique.md` §4 reaches **10 entries** (the same count as original MID-COST). Total edit: **~185 lines** (original MID-COST ~155 lines + ~30 lines from purpose-fitness).

**CUMULATIVE-DEEP (joint, hook-table)** — MID-COST + the three Tier 3 hook-table extensions (AA Tier 3 with HC1-HC7 + IFP Tier 3 with HC8-HC9 + this finding's Tier 3 with HC10).

The purpose-fitness sibling has no Tier 3; the hook-table reaches HC1-HC10 organized under the three-coordinate meta-question (per §8 of this finding). Total edit: **~310 lines** (original CUMULATIVE-DEEP ~280 lines + ~30 lines from purpose-fitness).

**Across all three joint sequences,** the purpose-fitness sibling adds ~30 lines (refinement note + 3 mandatory ancillaries) as a uniform increment. The joint adoption sequences inherit all the per-sequence properties of the original sequences (MINIMAL = cheapest joint coverage; MID-COST = vocabulary-distinct; CUMULATIVE-DEEP = highest future-extensibility) AND add the purpose-fitness severity-meta-principle as a foundational layer.

#### 9.7 Joint nitpicking-creep mitigation

This finding's §4 explicitly named **Nitpicking-creep risk** as a CRITICAL 5th trade-off axis precisely because Label-Tested is `#3`'s inverse-companion on detail-density. The purpose-fitness sibling's encoding ALSO addresses nitpicking-creep — but at a different layer:

- **LTSU mitigation (existing in this finding's §4 Tier 1):** load-bearing-claim-type triage at Phase 0. Only dimensions whose stated scope WILL test load-bearing substance carry mandatory substance criteria; purely-surface dimensions are exempt. The Phase 2 sub-axis fires only when a Phase 0 substance criterion exists. The two trigger conditions chain to bound substance-testing to dimensions where substance is genuinely load-bearing.

- **Purpose-fitness mitigation (new from the sibling):** purpose-fitness test at Phase 0 step 4 (weighting semantics). The test asks "would the candidate still do its job?" — defects that don't block purpose-fulfillment are routed to SURVIVE-with-caveat or REFINE, not KILL. This structurally prevents nitpicking-creep at the verdict-judgment surface, not at the dimension-construction surface.

**Joint mitigation pattern.** Adopting both findings produces nitpicking-creep mitigation at TWO loci covering TWO failure modes simultaneously:

- LTSU's mitigation operates at the **construction stage** (Phase 0 success-criteria triage) addressing the STATED-vs-IMPLEMENTED scope gap (Label-Tested failure).
- Purpose-fitness's mitigation operates at the **verdict-judgment stage** (Phase 0 step 4 weighting semantics applied through Phase 2 collision and Phase 3 verdict rendering) addressing the SEVERITY-vs-VERDICT mismatch (Rubber-Stamping and Nitpicking failures).

The joint mitigation is structurally complementary; neither alone addresses both layers. The joint adoption produces **defense-in-depth against nitpicking-creep** at both the construction stage AND the verdict-judgment stage.

#### 9.8 Updated cross-failure interactions

The cross-failure interactions originally listed in this finding's §1 distinctness table are extended in §1 (a new row was added in this update). For navigation convenience, the full set of cross-failure pairings is also recorded here:

| Failure relationship | Description |
|---|---|
| `#3 Nitpicking ↔ Label-Tested` | INVERSE-COMPANION-PAIR on detail-density axis (original framing from this finding). |
| `#2 Rubber-Stamping ↔ #3 Nitpicking` | **OPPOSITE-DIRECTION-VIOLATION-PAIR on severity axis** (purpose-fitness framing, added by sibling). |
| `Label-Tested ↔ #2 Rubber-Stamping` | INDIRECT relationship via `#3`: both are `#3`'s pair-partners on different axes. No direct pair-relationship; they don't engage each other except through `#3`. |
| Purpose-fitness principle ↔ Substance-vs-Label test | **COMPLEMENTARY at the Phase 0 layer:** purpose-fitness clarifies what weighting MEANS (semantics); LTSU's Substance-vs-Label test clarifies what depth criteria must reach (operationalization). The two are at the meta-vs-operational layers respectively. |

#### 9.9 Forward-integration of purpose-fitness commitments

This finding was originally published BEFORE the purpose-fitness sibling chain. This update FORWARD-INTEGRATES the sibling's commitments — acknowledging them as related-sibling commitments rather than inherited-from-prior commitments. The structural-honest naming is **forward-integration** because the temporal direction is reversed: a later finding's commitments are being integrated into an earlier finding via update.

**Forward-integrated commitments from `devdocs/inquiries/2026-06-09_08-14__critique_kill_severity_meta_principle/finding.md` (meaning-layer):**

1. **Purpose-fitness as meta-principle of severity in `/td-critique`.** Compatibility with this finding: COMPATIBLE — purpose-fitness operates at a different structural axis than Label-Tested; both axes coexist on `#3 Nitpicking`.

2. **Severity is single-axis at meta-level; per-task calibration is composite (reversibility × blast-radius × scope × fixability × evidence-strength × domain-specific axes).** Compatibility with this finding: COMPATIBLE — LTSU's Substance-vs-Label criteria is part of the per-task calibration layer (specifically, the success-criteria refinement note's content); not in conflict with the meta-principle.

3. **Severity-calibration locus is Phase 0 step 4 (Weight dimensions).** Compatibility with this finding: COMPATIBLE — LTSU's Tier 1 attaches at the success-criteria refinement note (also Phase 0, different attachment point); doesn't conflict with the weighting locus.

4. **Constructive-output on KILL is the structural test of severity.** Compatibility with this finding: COMPATIBLE — LTSU doesn't make claims about constructive-output. Forward-compatible.

5. **Confidence is orthogonal to severity (INTERIM verdict deferred).** Compatibility with this finding: COMPATIBLE — LTSU doesn't claim a new verdict type.

6. **`#2 Rubber-Stamping` and `#3 Nitpicking` are opposite-direction violations of the same purpose-fitness principle.** Compatibility with this finding: COMPATIBLE-with-extension — this finding's INVERSE-COMPANION-PAIR framing of `#3 ↔ Label-Tested` does not contradict the purpose-fitness framing of `#2 ↔ #3`; the two pairings are along different axes. See §9.2 for the two-axis analysis.

7. **Defer-with-direction for ambiguous-purpose candidates.** Compatibility with this finding: COMPATIBLE — LTSU's intervention surface is within `td-critique.md`; the defer-with-direction operational fallback applies to all critique invocations including those addressing Label-Tested cases.

**Forward-integrated commitments from `devdocs/inquiries/2026-06-09_10-13__encode_purpose_fitness_refinement_note_phase0/finding.md` (structural-layer):**

1. **The structural encoding is Tier 1 Surgical SS at Phase 0 step 4 plus mandatory Ancillaries A + B + D.** Acknowledged — see §9.3 for the per-edit composition analysis with LTSU's variants.

2. **Phase 0 will have 4 refinement notes post-joint-adoption.** Acknowledged — see §9.4 for information density implications.

3. **`#3 Nitpicking` entry gains back-reference content via Ancillary B.** Acknowledged — see §9.3 for composition with LTSU Tier 2 sub-variants and §9.5 for entry-density implications.

4. **Ancillary D (back-reference at Phase 3 constructive-output refinement note) was PROMOTED from COULD to MUST by the purpose-fitness structural inquiry's critique frame-premise prosecution** because single-locus encoding at Phase 0 alone was insufficient to make the constructive-output's structural-test framing visible to practitioners reading Phase 3 cold. Acknowledged — joint adoption sequences in §9.6 include Ancillary D as MUST.

5. **`/sense-making` naming in the defer-with-direction clause is acceptable per `docs/discipline_edit_tiers.md`'s discipline-individual principle** (discipline NAMES are not internal artifacts; only internal artifacts are off-limits). Acknowledged — this finding's Tier 1 unified Phase 2 substance-axis extension also names `/sense-making`'s Load-bearing concept test as MANDATORY cross-discipline precedent, consistent with the same principle.

#### 9.10 The honest tension — layering, not competing

The purpose-fitness work and this finding both engage with `#3 Nitpicking`. There is a mild tension worth flagging honestly:

- The purpose-fitness pairing is at the META layer (severity-calibration principle).
- This finding's pairing is at the OPERATIONAL layer (prosecution depth).

If both edits are adopted, `#3` gains multiple framings. The framings are STRUCTURALLY DISTINCT (different axes) and DO NOT COMPETE — they layer.

If only one finding's edits are adopted, the OTHER finding's framing remains valid but unencoded. Either is structurally fine. The user's adoption decision is the load-bearing structural choice.

**Why the tension is honest rather than defective.** `#3 Nitpicking` is fundamentally a failure mode that can fire FOR MULTIPLE REASONS (severity mis-calibration; over-density prosecution; substance under-probe). The single-failure-mode encoding in current `td-critique.md` §4 collapses these reasons into one entry. Both findings surface DIFFERENT reasons; the spec being able to carry multiple reason-framings is a feature, not a bug. The joint adoption produces a richer `#3` entry that names BOTH reasons; the partial adoption produces an entry that names ONE reason; the no-adoption preserves the original single-collapsed entry. All three states are structurally coherent.

#### 9.11 What this update does NOT change

For clarity about what's preserved unchanged from the original finding:

- **§1's identification of the 5 sub-mechanisms** of Label-Tested (NAME / WORKED-EXAMPLE / CATEGORY / UNIT / ARTIFACT-TYPE) — UNCHANGED.
- **§1's INVERSE-COMPANION-PAIR framing** of `#3 ↔ Label-Tested` — UNCHANGED.
- **§2's five sub-mechanisms** with corpus-instance assignments — UNCHANGED.
- **§3's tier-shape vocabulary** (the three tiers + sub-axes) — UNCHANGED.
- **§4's four proposals** (Tier 1 unified; Tier 2 sub-variant (a); Tier 2 sub-variant (b); Tier 3 cumulative) — UNCHANGED; remains a 4-variant set.
- **§5's two REFINES** (REFINE-A3 + REFINE-Assembly) — UNCHANGED.
- **§7's 3-way composition matrix's 72-cell structure** — PRESERVED for reference; extended by §9.6 to a 4-way joint-adoption analysis.
- **§8's meta-question evolution trajectory** — UNCHANGED; the purpose-fitness sibling does not extend the meta-question because purpose-fitness operates at a different axis (severity, not dimension-space-and-frame).
- **§1's distinctness table** — EXTENDED by a new row for purpose-fitness sibling (added in update; original rows unchanged).
- **§6's picker paths** — EXTENDED by one new path (Comprehensive joint-minimum path; added in update) and a uniform increment note for existing paths.
- **Inherited Commitments Re-test** — original priors 1-6 UNCHANGED; the purpose-fitness sibling is acknowledged via forward-integration in §9.9 (a structural innovation that handles backward-in-time inheritance without violating the protocol's prior-only Re-test convention).
- **Next Actions (MUST / COULD / DEFERRED)** — original items UNCHANGED.
- **Reasoning (Kills from Innovation; Kills/refines from Critique; Contradictions reconciled)** — original content UNCHANGED.

The update is ADDITIVE; original content is preserved.

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger listing 6 priors. Each commitment those priors carry is enumerated below with re-test status.

### Prior 1 — `devdocs/100_critique_correction_chain_analysis.md` (48-pair corpus)

- **Commitment:** 6 specific corpus instances are diagnosed as "Label-Tested, Substance-Untested" with per-pair "WHAT CRITIQUE MISSED" entries.
- **Source:** the corpus document's per-pair entries for 15-39, 21-18, 18-21, 09-23, 19-06, 11-23.
- **Re-test status:** RE-TESTED.
- **Evidence:** All 6 instances re-mapped to 5 distinct sub-mechanisms in §2 above. Each sub-mechanism's locus (NAME / WORKED-EXAMPLE / CATEGORY / UNIT / ARTIFACT-TYPE) corresponds to a distinct evaluation-restriction shape; the 6 instances populate all 5 loci with sub-mechanism (3) carrying 2 instances. Each proposal in §4 verifies that all 6 instances would be caught.

### Prior 2 — `devdocs/top_7_common_critique_failures.md` §3

- **Commitment 2.1:** Label-Tested is distinct from #3 Nitpicking; closest existing failure mode is Nitpicking BUT INVERSE.
- **Source:** top_7 §3 "Why current critique doesn't catch it."
- **Re-test status:** RE-TESTED.
- **Evidence:** Sensemaking Ambiguity 1 in `sensemaking.md` (now archived) tested the relationship structurally and resolved it as INVERSE-COMPANION-PAIR: same locus (Phase 2 defense), empirically inverse signatures (Nitpicking → many KILLs / no SURVIVEs; Label-Tested → many SURVIVEs / substance unverified). See §1 above.

- **Commitment 2.2:** The Corrective sketch is "add a Substance-vs-Label Test."
- **Source:** top_7 §3 "Corrective."
- **Re-test status:** RE-TESTED.
- **Evidence:** Each proposal in §4 operationalizes the Substance-vs-Label Test in different structural shapes (refinement note pairs / new entry / repair of existing entry / cumulative hook column). The Corrective is structurally instantiated.

### Prior 3 — `cognitive_harness/td-critique/references/td-critique.md`

- **Commitment 3.1:** §4's organizing pattern is a numbered list of failure modes (currently 7).
- **Re-test status:** RE-TESTED.
- **Evidence:** Tier 2 sub-variant (a) ADDs entry #10 (after AA #8, IFP #9). Tier 2 sub-variant (b) REPAIRs existing #3 Nitpicking. Both honor §4's organizing pattern while occupying different intervention shapes.

- **Commitment 3.2:** Phase 0 has a success-criteria refinement note structure; Phase 2 has a Multi-axis prosecution depth check structure.
- **Re-test status:** RE-TESTED.
- **Evidence:** Tier 1's two insertion points sit inside these existing refinement-note structures; the Phase 2 extension adds a 4th sub-axis to the existing 3 sub-axes (user-perspective / failure-case scenario / specification-gap probe).

- **Commitment 3.3:** §3 Nitpicking exists as failure mode #3.
- **Re-test status:** RE-TESTED.
- **Evidence:** §1 above explicitly distinguishes Label-Tested from Nitpicking via INVERSE-COMPANION-PAIR framing; the two failures' empirical signatures are described as duals along the detail-density axis.

### Prior 4 — `cognitive_harness/td-critique/SKILL.md`

- **Commitment:** SKILL.md description summarizes the failure modes; growth to it must be bounded.
- **Re-test status:** RE-TESTED.
- **Evidence:** Tier 2 sub-variant (a)'s edit to SKILL.md is ~30 chars (one new failure-mode name + brief description). Sub-variant (b) requires no SKILL.md edit since it repairs existing #3 Nitpicking. Both options stay within the bounded-growth commitment.

### Prior 5 — `devdocs/inquiries/2026-06-08_17-43__axis_absence_critique_fix_proposals/finding.md` (Axis Absence)

- **Commitment 5.1:** Tier-shape vocabulary (surgical = refinement-note; additional = new failure-mode entry; significant = hook-table restructure with meta-question).
- **Re-test status:** RE-TESTED.
- **Evidence:** §3 above carries the vocabulary forward unchanged. Tier 1 is a refinement-note pair (variant within the refinement-note shape). Tier 2 is a new failure-mode entry (or REPAIR of an existing one — a NEW sub-axis within the additional-tier shape). Tier 3 is a hook-table extension with broadened meta-question. The vocabulary remains coherent.

- **Commitment 5.2:** The 5 trade-off axes (prevention leverage / cost / sub-mechanism coverage / future-extensibility / + one inquiry-specific axis).
- **Re-test status:** RE-TESTED.
- **Evidence:** §4 above uses the same 4 generic axes; the inquiry-specific 5th axis is "nitpicking-creep risk" (rather than Axis Absence's "false-negative risk" or Inherited-Frame Preservation's "cross-spec edit complexity"). The pattern of 4 generic + 1 inquiry-specific is preserved; the inquiry-specific axis is the load-bearing failure-relationship signal (here: INVERSE-COMPANION with Nitpicking).

- **Commitment 5.3:** Tier-metaphor clarification (§10 of Axis Absence finding): tiers are STRUCTURAL EDIT SHAPES, not ranked recommendations.
- **Re-test status:** RE-TESTED.
- **Evidence:** §3 above carries the clarification forward and extends it with a new sub-axis (Tier 2 internal intervention-shape sub-axis). The clarification is preserved AND extended.

- **Commitment 5.4:** Precondition-violation framing applies to Axis Absence at the within-spec layer.
- **Re-test status:** RE-TESTED (against this inquiry's data).
- **Evidence:** Critically, this inquiry tested whether Label-Tested ALSO has a precondition-violation framing (at a third layer). Sensemaking rejected the hypothesis: Label-Tested is a NEW structural relationship (INVERSE-COMPANION-PAIR), not precondition-violation. This DOES NOT contradict Axis Absence's commitment — it adds nuance: precondition-violation is one pattern across failure modes, but not all failure modes are precondition violations. §1 above explicitly cites the cross-failure relationship as inverse-companion rather than precondition-violation.

### Prior 6 — `devdocs/inquiries/2026-06-08_19-10__inherited_frame_preservation_critique_fix_proposals/finding.md` (Inherited-Frame Preservation)

- **Commitment 6.1:** Single-spec vs cross-spec sub-axis within tiers.
- **Re-test status:** RE-TESTED.
- **Evidence:** §3 above carries the sub-axis forward AND explicitly notes it does NOT apply to this inquiry (within-`td-critique.md` only). The sub-axis exists structurally; its applicability is per-inquiry. This is the honest re-test outcome — preserving the construct while flagging non-applicability here.

- **Commitment 6.2:** 6 trade-off axes (5 inherited + cross-spec edit complexity).
- **Re-test status:** RE-TESTED.
- **Evidence:** This inquiry has 5 axes (no cross-spec edit complexity) because the intervention surface is within-`td-critique.md`-only. The 6th axis from Inherited-Frame Preservation would not have load-bearing distinguishing value here. Honest reduction to 5 inherited axes with one inquiry-specific (nitpicking-creep) replacing IFP's cross-spec-edit-complexity.

- **Commitment 6.3:** Meta-question broadening trajectory: from Axis Absence's "Does the dimension space SPAN the failure space?" to Inherited-Frame Preservation's "Are the dimension space AND its inherited frame both load-bearing and tested?"
- **Re-test status:** RE-TESTED.
- **Evidence:** §8 above continues the trajectory: "Are the dimension space AND its inherited frame AND its evaluation level all load-bearing and tested?" The broadening pattern is preserved; the upper-limit concern (3 coordinates may approach a single generative principle's capacity) is named in Open Questions for monitoring.

- **Commitment 6.4:** Tier-metaphor + SS/CS sub-axis clarification carries forward.
- **Re-test status:** RE-TESTED.
- **Evidence:** §3 above carries both forward AND adds a third clarification (Tier 2 internal intervention-shape sub-axis). The clarification pattern is cumulative.

---

## Next Actions

### MUST

- **What:** When implementing this finding's recommendations, apply REFINE-A3's load-bearing-claim-type triage in any Tier 1 Phase 0 edit. The triage distinguishes dimensions whose stated scope WILL test load-bearing substance from purely-surface dimensions; only the former carry mandatory substance criteria.
  - **Who:** the editor of `cognitive_harness/td-critique/references/td-critique.md`.
  - **Gate:** condition-bound — fires at the moment Tier 1's Phase 0 insertion is written into `td-critique.md`.
  - **Why:** without the triage, Tier 1's Phase 0 substance-criteria rule risks flipping critique into Nitpicking (the INVERSE-COMPANION failure mode). The triage is the load-bearing nitpicking-creep mitigation at construction time.

- **What:** When implementing this finding's recommendations, cite sensemaking's Load-bearing concept test (refinement note in `cognitive_harness/sense-making/references/sensemaking.md` Phase 3) as the cross-discipline precedent for substance-vs-label-style mechanisms.
  - **Who:** the editor of `td-critique.md`.
  - **Gate:** condition-bound — fires whenever a Tier 1 / Tier 2 / Tier 3 proposal from this finding is implemented.
  - **Why:** the precedent grounds the substance-vs-label distinction in a cross-discipline pattern already validated in the cognitive_harness. Without the citation, the substance-vs-label distinction reads as ad-hoc rather than as an instance of an existing cross-discipline structural pattern.

### COULD

- **What:** Adopt the MINIMAL sequence — Axis Absence Tier 1 + Inherited-Frame Preservation Tier 1 single-spec + this inquiry's Tier 1 unified — as the first wave of edits. Three refinement notes in `td-critique.md` (Phase 0 success-criteria + Phase 2 multi-axis prosecution depth refinements), total ~80 lines.
  - **Who:** the editor of `td-critique.md`.
  - **Gate:** observable — when prevention-leverage data on the 6-corpus subset shows ≥4 of 6 Label-Tested instances caught by current critique (after Tier 1 adoption).
  - **Why:** cheapest path to addressing top_7 failure modes #1, #2, #3 in a single coordinated edit.

- **What:** Adopt the MID-COST sequence — MINIMAL + the three Tier 2 entries (Axis Absence #8 + Inherited-Frame Preservation #9 + this inquiry's #10 via sub-variant (a)).
  - **Who:** the editor of `td-critique.md`.
  - **Gate:** condition-bound — when explicit mode-naming in `td-critique.md` `§4` becomes load-bearing for downstream uses (e.g., when corpus instances need vocabulary-distinct labelling).
  - **Why:** named failure modes are searchable; categorical labelling becomes precise for future corpus analysis.
  - **Depends-on:** MUST item "REFINE-A3 load-bearing-claim-type triage." This COULD is GATED — adopt the Tier 2 ADD #10 entry only after the Phase 0 triage construct is settled, because the Tier 2 entry's Detection sub-section quotes the triage.

- **What:** When choosing between Tier 2 sub-variant (a) ADD-new-entry and sub-variant (b) REPAIR-existing-#3-entry, pick (a) when sibling Tier 2s are also ADDs (preserves sequential numbering); pick (b) when minimum vocabulary growth is the load-bearing concern OR when making the INVERSE-COMPANION-PAIR relationship structurally explicit in the spec is high-value.
  - **Who:** the editor of `td-critique.md`.
  - **Gate:** condition-bound — fires at Tier 2 implementation decision time.
  - **Why:** the two sub-variants achieve the same outcome via different structural moves; the picker is dimensional navigation, not ranked recommendation.

- **What:** Adopt the CUMULATIVE-DEEP sequence (MID-COST + the three Tier 3s) ONLY when both prior siblings' Tier 3s are also being adopted; otherwise the deferred fragmentation alternative applies.
  - **Who:** the editor of `td-critique.md`.
  - **Gate:** condition-bound — adoption window is when ≥2 sibling Tier 3s are also in adoption pipeline.
  - **Why:** the hook-table's value is cumulative across all three failure modes; adopting only this inquiry's Tier 3 without sibling Tier 3s creates a fragmented hook-table with no precedent column structure.
  - **Depends-on:** MUST item "REFINE-A3 load-bearing-claim-type triage" AND sibling findings' equivalent MUSTs. This COULD is GATED — do not act on Tier 3 cumulative until the substance-criteria triage and sibling tier-3 precedents are settled.

### DEFERRED

- **What:** Don't extend the hook-table; accept fragmentation; revival trigger preserved.
  - **Gate:** condition-bound — revives when either AA-T3 or IFP-T3 status becomes "not adopted, will not be" OR when the three-coordinate meta-question is observed in practice to exceed cognitive parseability.
  - **Why (if revived):** the fragmentation alternative preserves single-coordinate clarity at the cost of cross-failure unification. Revive when the unification cost (composability upper limit) outweighs the unification benefit.

- **What:** A worked-example-operationalization sub-rule beyond Phase 2's "apply candidate's mechanism literally" — e.g., a per-worked-example success criterion that the example survive its own candidate's prosecution mechanism.
  - **Gate:** condition-bound — revives if Tier 1's Phase 2 literal-application sub-rule proves insufficient against new instances of sub-mechanism (2) WORKED-EXAMPLE.
  - **Why (if revived):** sub-mechanism (2) is the most subtle of the five; if Tier 1's literal-application rule under-catches it, a stronger structural rule may be needed.

---

## Reasoning

### Kills from Innovation (4 candidates terminated)

**P1-Inv — Frame Label-Tested as a precondition-violation of #4 Dimension Blindness.** This framing was generated to test parallelism with the prior two siblings. KILLED because Label-Tested is a LEVEL failure inside a present dimension (dimension PRESENT but restricted to surface), not a MISSING-dimension failure. Collapsing into precondition-violation-of-#4 would obscure the INVERSE-COMPANION-PAIR relationship with #3 Nitpicking, which is the load-bearing structural insight. Critique re-affirmed the kill in Phase 2.

**P2-Inv — Consolidate to 2 sub-mechanisms (label-evaluation vs example-illustration).** KILLED because the 6 corpus instances span 5 demonstrably distinct evaluation loci. Compressing to 2 loses 3 distinct loci (CATEGORY, UNIT, ARTIFACT-TYPE) and produces a coverage map that misses 3 of 6 corpus instances. Critique re-affirmed.

**P3-Inv — DO NOTHING; treat Label-Tested as subsumed by future Phase 0 dimension construction guidance.** KILLED because the 6 corpus instances show that even under careful Phase 0 dimension construction, the STATED scope routinely includes substance while IMPLEMENTATION restricts to surface. The gap is at IMPLEMENTATION time, not construction time. Phase 0 construction alone is necessary but not sufficient. Critique re-affirmed.

**P4-Inv — Adopt BOTH Tier 2 sub-variants (ADD #10 AND REPAIR #3).** KILLED because adopting both creates a redundant naming layer (the failure mode would exist both as standalone #10 AND as a sub-mode of #3); the spec becomes harder to parse without proportional gain. The two sub-variants are alternatives at the same structural locus, not complements. Critique re-affirmed (redundant naming dimension).

### Kills/refines from Critique

All 8 primary survivors from Innovation SURVIVED Critique:
- C-A1 (INVERSE-COMPANION-PAIR framing) — SURVIVED HIGH confidence; defense survives prosecution that "inverse companion" is metaphorical; the pairing is empirically testable (kill-rate vs survive-rate signatures) and locus-specific (both at Phase 2 defense).
- C-A2 (5 sub-mechanisms coverage map) — SURVIVED HIGH; 5 loci demonstrably distinct.
- C-A3 (Tier 1 unified) — SURVIVED with REFINE on Phase 0 nitpicking-creep mitigation phrasing (now folded into §4 above).
- C-A4a (Tier 2 sub-variant (a) ADD #10) — SURVIVED HIGH.
- C-A4b (Tier 2 sub-variant (b) REPAIR #3) — SURVIVED MEDIUM-HIGH; vocabulary loss is the honest trade-off.
- C-A5 (Tier 3 cumulative HC10) — SURVIVED MEDIUM; coupling + composability-upper-limit concerns are honest minuses, both flagged for monitoring.
- C-A6 (per-scenario picker) — SURVIVED HIGH.
- C-A7 (3-way composition matrix) — SURVIVED MEDIUM-HIGH; 72-cell complexity is bounded by matrix structure + key adoption sequences highlighted.

**Assembly-level REFINE** (from Critique Phase 3.5): the §3 tier-shape vocabulary now carries forward all three clarifications cumulatively (folded into §3 above).

### Contradictions reconciled across disciplines

**Surfacing's frontier flag F1 (precondition-violation hypothesis test)** anticipated the structural-relationship question. Sensemaking resolved it as INVERSE-COMPANION-PAIR (NOT precondition-violation). Decomposition partitioned around this resolution. Innovation generated proposals respecting the resolution. Critique re-affirmed via prosecution-defense-collision. No discipline contradicted the resolution.

**Surfacing's frontier flag F4 (inverse-companion as 4th proposal direction)** suggested adding a 4th tier-shape. Sensemaking resolved this as a Tier 2 sub-variant rather than a 4th tier (because the inverse-companion intervention shape — REPAIR existing #3 — fits within the additional-tier structural shape). Decomposition expressed P4 as having 2 sub-variants. Innovation produced both. Critique sustained both as SURVIVE.

**Sensemaking's MANDATORY external grounding citation** (sensemaking Load-bearing concept test) addressed the Self-Reference Collapse risk noted in the inquiry's own scope (this inquiry is critique applied to critique-spec design). Critique's D4 + D10 dimensions verified external grounding per candidate; Self-Reference Collapse was MITIGATED (not active).

### Why the update was applied (added 2026-06-09)

This finding was originally published on 2026-06-08. On 2026-06-09 a new sibling inquiry chain on critique severity (the purpose-fitness work) was completed; it grew out of the nitpicking-creep concern raised during conversations about this series's proposals. The purpose-fitness sibling carries spec edits to `td-critique.md` that engage with the same failure mode (`#3 Nitpicking`) that this finding's INVERSE-COMPANION-PAIR framing engages — but along a different structural axis (severity rather than detail-density). Reading the two findings without integration would leave the user with two separately-articulated `#3 Nitpicking` engagements without a clear composition rule.

The update was triggered by the user's question *"is it relevant to devdocs/inquiries/2026-06-08_20-00__label_tested_substance_untested_critique_fix_proposals/finding.md? how?"* about the just-completed purpose-fitness structural-layer finding. The answer (yes; complementary at different axes) implied a structural debt: this finding's §7 had explicitly named a Refinement Trigger that fires when a 4th sibling joins the matrix. The trigger was activated; this update is the responsible-action discharge of that trigger.

The update preserves all original content unchanged. Additions are clearly marked with *"(added in update 2026-06-09)"* where they appear in pre-existing sections. The new §9 (Integration with the purpose-fitness sibling) is the load-bearing locus for the comprehensive integration. The update protocol is structurally honest: forward-integration of a later sibling's commitments into an earlier finding's structural reasoning, without violating the prior-only Inherited Commitments Re-test convention.

---

## Open Questions

### Monitoring

- **Three-coordinate meta-question composability upper limit.** This inquiry's Tier 3 broadens the cumulative hook-table's meta-question to three coordinates (dimension space AND inherited frame AND evaluation level). Three coordinates is approaching the upper limit of a single generative principle. Observable: if a 4th sibling inquiry needs to broaden further, the hook-table may need a different organizing pattern (e.g., the table itself becomes the surface and the meta-question fades to a label).

- **Sub-mechanism (3) sub-case adequacy.** Sub-mechanism (3) has two sub-cases (within-category undifferentiation; candidate-set restriction by inherited taxonomy). Each is supported by one corpus instance. Observable: future corpus instances may surface a third sub-case (e.g., category-axis-orientation failure) that requires expanding (3)'s sub-case enumeration or splitting (3) into two distinct sub-mechanisms.

- **(Added in update 2026-06-09) Phase 0 information density post-joint-adoption.** If both this finding and the purpose-fitness sibling's edits are adopted (along with the prior siblings' Tier 1s), Phase 0 will have FOUR refinement notes (Project-specific risk; Frame-premise test from IFP; Purpose-fitness test from purpose-fitness work; Substance-vs-Label success-criteria from this finding's Tier 1). Observable: if practitioners report Phase 0 feels overloaded after joint adoption (over ≥5 real `/td-critique` invocations using the joint-adopted spec), reconsider whether the four notes need consolidation or whether one of the notes can be tightened. Candidate remediations include (a) consolidating two notes under a shared sub-section; (b) tightening per-note length; (c) extracting one or more notes into a separate Phase 0 sub-section. See §9.4.

- **(Added in update 2026-06-09) `#3 Nitpicking` entry density post-joint-adoption.** If both this finding's Tier 2 sub-variant (b) REPAIR AND the purpose-fitness work's Ancillary B back-reference are adopted, the `#3` entry gets two distinct additions (the inverse-companion failure note from this finding on detail-density axis; the opposite-direction-violation cross-reference from the purpose-fitness work on severity axis). Observable: monitor if the additions feel coherent or accumulated over ≥5 real invocations; tighten phrasing or introduce sub-section structure within `#3` if needed. Alternative path: if `#3` density is a concern, prefer LTSU Tier 2 sub-variant (a) ADD-new-entry (which keeps `#3` light and puts Label-Tested at `#10`) over sub-variant (b) REPAIR. See §9.5 for the density estimates per adoption combination.

- **(Added in update 2026-06-09) Purpose-fitness adoption status.** Observable: whether the user adopts the purpose-fitness sibling's edits, partially or fully. The adoption decision is information about which structural layer (meta or operational) the user values surfacing in the spec. If purpose-fitness is adopted in full (with optional Ancillary C), the `#2/#3` unification is surfaced at FOUR locations (Phase 0 step 4 refinement note body; `#2` Prevention; `#3` Prevention; line 128 Adversarial structure). If only mandatory Ancillaries A+B+D are adopted, the unification is surfaced at THREE locations (Phase 0 step 4; `#2` Prevention; `#3` Prevention).

### Blocked

- **Tier 3 cumulative adoption sequencing.** This inquiry's Tier 3 depends on both prior siblings' Tier 3 adoption status. Cannot resolve adoption sequence until those statuses are settled.

### Research Frontiers

- **Cross-discipline substance-vs-label pattern unification.** Sensemaking's Load-bearing concept test (refinement note in `sensemaking.md` Phase 3) and this inquiry's Substance-vs-Label Test (proposed for `td-critique.md`) are two instances of the same cross-discipline structural pattern. A future inquiry could investigate whether the pattern instances across N disciplines (surfacing, sensemaking, decomposition, innovation, critique, others) and what the unified pattern looks like at the cognitive_harness level rather than per-discipline.

### Refinement Triggers

- **Tier 1's Phase 0 nitpicking-creep mitigation phrasing.** Triggers re-open if (a) a corpus instance shows the triage over-firing (substance criteria required on a dimension whose claims are purely surface) OR under-firing (substance criteria not required on a dimension whose claims are load-bearing substance); OR (b) Tier 2 sub-variant (a)'s Detection sub-section needs to quote a different triage formulation than Tier 1's.

- **Tier 2 sub-variant choice.** Triggers re-open if the sibling Tier 2 entries' actual implementation status changes the sequential-numbering calculus (e.g., one sibling's Tier 2 is deferred or rejected; sequential numbering is no longer load-bearing).

- **3-way composition matrix's recommended adoption sequences.** Triggers re-open if a 4th sibling inquiry (top_7 failure type #4, #5, #6, or #7) joins the matrix as a 4th dimension; the matrix becomes 4-way and the recommended sequences need re-derivation.

  **STATUS UPDATE 2026-06-09: ACTIVATED.** The purpose-fitness sibling chain (`devdocs/inquiries/2026-06-09_08-14__critique_kill_severity_meta_principle/` meaning-layer + `devdocs/inquiries/2026-06-09_10-13__encode_purpose_fitness_refinement_note_phase0/` structural-layer) is the 4th sibling that fired this trigger. The trigger's original framing presupposed the 4th sibling would be one of top_7 failure types #4-#7; in practice, the 4th sibling is the meta-principle inquiry that grew out of the nitpicking-creep concern surfaced in this series. The structural firing condition (4th sibling joins the matrix) is satisfied; the framing-presupposition (top_7 type) is honestly refined. Re-derivation is captured in §9.6.

- **(Added in update 2026-06-09) Purpose-fitness sibling adoption status as compositional dependency.** Triggers re-open if the purpose-fitness sibling's adoption status changes from undecided to (a) fully adopted, (b) partially adopted (e.g., Tier 1 refinement note + some ancillaries but not all), or (c) rejected. Each adoption-status change implies different joint-adoption sequences in §9.6 and different `#3 Nitpicking` entry density implications in §9.5.

- **(Added in update 2026-06-09) Future meta-principle siblings beyond purpose-fitness.** Triggers re-open if a 5th sibling inquiry produces another meta-principle (e.g., a meta-principle for dimensional weighting beyond purpose-fitness; a meta-principle for adversarial-collision balance). The 4-way matrix becomes 5-way; §9 may need further extension. Anticipated possibilities: a meta-principle for cross-discipline calibration consistency (analogous to purpose-fitness's per-task calibration layer but operating cross-discipline rather than per-task); a meta-principle for verdict-shape (whether to introduce INTERIM verdict; what verdict-shapes critique should support). These are research-frontier inquiries; not currently triggered.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
## 3. Label-Tested, Substance-Untested

**Definition.** Critique evaluates the surface attribute (the name, the label, the top-level shape, the structural slot) but never tests the underlying substance (the meaning, the example's content, the differentiation within a category, the unit's presupposition).

**Mechanism.** Dimensions often probe whether a NAME aligns with user language, whether a TOP-LEVEL category is coherent, or whether a CANDIDATE matches a STRUCTURAL slot. The actual substance — what the name means in practice, whether the worked example holds under load-bearing reading, whether the category contains structurally distinct sub-cases — sits beneath the dimension's evaluation surface.

**Corpus instances.**
- **15-39 A8 ← 01-00** (name-vs-meaning conflation): D5 User-language alignment verified the NAME "Itemize" was user-verbatim but never interrogated the LLM-auto-completed MEANING ("split into distinct atomic items"). **The harm evidence was in critique's own artifact** — D12 Recursion-fitness applied Itemize to the Source Input using the LLM's intuitive reading instead of the authored description.
- **21-18 ← 22-44** (worked example treated as illustration): the small=fix-bug / big=redesign-OAuth-flow example was tested against dual-mode dispatch mechanics but not against the underlying claim "spans the scope-axis." The example was the load-bearing structural commitment.
- **18-21 ← 19-06** (question-text never surfaced): critique tested 10 CORE per-item entries against 4 readers — but the question-text itself was never on the candidate list because the prior taxonomy of "MQ produces answer" was taken for granted.
- **09-23 STANDALONE** (verb-vs-noun unit presupposition): critique read operation top-down (what it does) — preserves enumerate-all + type + reachability + guidance + no-select — but didn't read bottom-up (what its primary UNIT presupposes; verb-first quietly presupposes prior trajectory).
- **19-06 ← 20-29** (permissive treated as uniform space): "A-permissive" tested as one category; the structural distinction within it (UNDETERMINED vs UNCERTAIN; refusal-to-commit vs commitment-with-hedge) was not surfaced.
- **11-23 STANDALONE** (artifact-as-conceptual vs artifact-as-authored-deliverable): one artifact named (`routelister.md`), other only described as "the identity-set/index state-file." Naming asymmetry undetected because dimension treated artifacts as conceptual entities, not as deliverables requiring naming parity.

**Why current critique doesn't catch it.** No existing failure mode names this. The closest is "Nitpicking" — but that's the inverse (too much surface detail at the cost of substance). Substance-test failure is the opposite: too much surface confidence in well-tested labels while the load-bearing substance went unprobed.

**Corrective.** Add a **Substance-vs-Label Test**: for each load-bearing claim, identify (a) the LABEL (name, shape, classification, slot) and (b) the SUBSTANCE (meaning, content, distinction-within-category, unit-presupposition). Require at least one dimension explicitly testing substance. For **worked examples specifically**: treat them as load-bearing structural commitments and apply the candidate's mechanism to them literally, not via intuitive reading.

lets dive deep into this one the same way
```

</details>
