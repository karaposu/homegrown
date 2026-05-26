---
status: active
model: claude-opus-4-7[1m]
effort: max
---

# Finding: Loop Diagnose — Additive-Fix Tendency Over Design-Defect Inspection

## Question

From `_branch.md`:

> Given the 21-03-00 STRUCTURAL inquiry proposed 3 purely-additive spec edits without first inspecting whether the existing specs had design defects that caused the original gap, and the human correction "we shouldn't wildly add new rules everytime we encounter sth; we should look at the current spec of explore and try to understand why it missed that?... lets analyze why u did additive fix instead of properly inspecting the problematic part of the discipline as asked," what discipline/mechanism in the inquiry-process drove the additive framing, what LLM-cognitive-tendency amplified it, and what is the structurally-correct alternative approach?

**Goal.** Diagnose where the additive framing locked in; analyze the LLM-cognitive-tendency; identify §3.1's actual design defect; commit a verdict on the 21-03-00 proposed edits; flag protocol/spec enhancement opportunities.

**Context for readers new to this inquiry's vocabulary:**

- **"21-03-00"** is the STRUCTURAL inquiry at `devdocs/inquiries/2026-05-21_03-00__structural_explore_comparison_axis_enumeration_fix_design/finding.md` that proposed 3 ADD-CONTENT spec edits (MC1 Exploration / MC2 Critique / MC3 Sensemaking) operationalizing the 21-00-30 LOOP_DIAGNOSE finding's maintenance candidates.
- **"21-00-30"** is the LOOP_DIAGNOSE finding at `devdocs/inquiries/2026-05-21_00-30__loop_diagnose__cognitive_harness_independence_axis_missed_in_location_options/finding.md` that classified the docs/-location gap as TYPE-A "mechanism-absence" + named MC1/MC2/MC3 as "ADD this" candidates.
- **"§3.1"** is `cognitive_harness/explore/references/explore.md` Section 3.1 "Two operational modes" — the Exploration discipline spec section that 21-03-00 proposed adding MC1 to.
- **Intervention-Shape Vocabulary** at `cognitive_harness/innovate/references/innovate.md` lines 332-346 names 10 shapes: ADD-TEST, ADD-DIMENSION, ADD-CONTENT, REPAIR, REVERT-REGRESSION, REMOVE, REFRAME-AS-BUG, DO-NOTHING, REORGANIZE-WITHOUT-ADDING, CONTRARIAN-RETHINK. **CONTRARIAN-RETHINK is the framing-flip shape** ("Question the framing entirely; treat the prior conclusion as a candidate to invalidate").
- **Intervention-Shape-Axis Inversion** at innovate.md lines 399-410 requires Innovation pieces with Property (v) firing to consider an alternative shape from the Vocabulary. 21-03-00's Innovation considered REPAIR/REORGANIZE (same-category) but not CONTRARIAN-RETHINK.

---

## Finding Summary

- **The user's correction surfaces a real LLM-cognitive-tendency: "Additive-fix anchoring bias."** When upstream framing identifies a gap as "X is missing," the LLM's default response is "add X" — even when the structurally-correct response is to inspect what's wrong with the existing design that allowed X to remain implicit.

- **Attribution is 3-LAYER MIXED.**
  - **CAUSAL SUBSTRATE: LLM-cognitive-tendency.** 7 reinforcing mechanisms: (1) anchoring on "missing X" → "add X" lexical chain; (2) pattern-matching to additive precedents; (3) path-of-least-disruption framing; (4) self-applied Inversion completeness illusion; (5) TYPE-A "mechanism-absence" classification pre-categorization; (6) Intervention-Shape Vocabulary's 3-of-10 ADD-* numerical anchoring; (7) token-economy bias in LLM generation. Not directly spec-fixable.
  - **UPSTREAM MECHANISM: 21-00-30 LOOP_DIAGNOSE's classification + MC labels.** The 21-00-30 finding classified the gap as "TYPE-A mechanism-absence" + named MC1 as "Exploration spec edit ADDING comparison-axis-enumeration step." The word "ADDING" is in the MC1 label itself. The classification lexically pre-supposed the additive fix.
  - **MIDSTREAM MECHANISM: 21-03-00 disciplines failing to challenge.** 4 sub-loci: Exploration treated §3.1 as a host for addition (not an artifact to inspect for defects); Sensemaking's load-bearing concept test mechanism (proxy-vs-structural sub-aspect) was CAPABLE of catching the framing presupposition but applied at component level only; Innovation's Intervention-Shape-Axis Inversion considered REPAIR/REORGANIZE same-category alternatives but not CONTRARIAN-RETHINK (framing-flip); Critique's 15 dimensions tested wording quality + procedural compliance, none tested fix-category appropriateness.

- **Named meaning-node: "Additive-fix anchoring bias."** Definition: the LLM-cognitive tendency to default to ADD-CONTENT (or other ADD-* prefixed) intervention shapes when faced with a "missing X" diagnostic, without first inspecting whether the existing design has a structural defect that warrants a restructural (REPAIR / REORGANIZE / CONTRARIAN-RETHINK) fix instead. **Recognition signals:** (1) diagnostic frames gap as "X is missing" / "mechanism-absence"; (2) proposed fix begins with "add" or "append" or "extend" without asking "what allowed X to remain implicit?"; (3) Inversion mechanism considers same-category-shape alternatives only; (4) existing spec design treated as HOST for new addition rather than artifact to inspect. **Corrective:** INSPECT before fix-category-commitment.

- **§3.1's actual design defect (the question 21-03-00 didn't ask).** §3.1's framing of possibility-mode output is PARTIAL. It treats output as a SET OF CANDIDATES on a map. Actually output can take two forms: **(A) Candidates-only** (a list of options without per-candidate comparative scoring) and **(B) Comparison structure** (candidates × axes; pros/cons tables; multi-attribute scoring grids; ranked lists with stated criteria). §3.1 only addresses form A. The 02-15 R10 location-options table was form B; form B is unscoped in §3.1, so comparison axes had no spec mechanism guiding their enumeration. The "Completeness before novelty" rule is single-dimension (applies to candidates only); should be per-dimension when form B is present.

- **Structurally-correct alternative approach.** REPAIR + EXTEND §3.1's two-rule structure into a unified framing that recognizes both output forms; apply completeness per-dimension. Sample sketch in Section 6 below. The redesign INTEGRATES the comparison-axis-enumeration concept into the existing rule structure rather than appending a separate "Comparison-axis enumeration" rule alongside.

- **Verdict on 21-03-00 proposed edits: HOLD + REDO.** Do NOT commit MC1/MC2/MC3 as-is. Treat 21-03-00's content (proposed wordings + cross-discipline coherence analysis + auto-memory compliance verification) as INPUT to a future design-defect redesign inquiry that produces the integrated §3.1 fix per the Section 6 sketch.

  **User retains agency on commit-sequencing.** The diagnostic recommends HOLD-ALL-THREE pending the redesign inquiry. In practice the user may choose to commit MC2 + MC3 immediately as LOW-RISK additive (acknowledging the design-debt cost) while HOLDING MC1 for the redesign inquiry — the diagnostic does not bind that choice. What the diagnostic DOES commit: (i) the bias is named (Section 5); (ii) the design-defect inspection step is now part of the project's awareness; (iii) MC1's commit specifically warrants the redesign approach.

- **Two flagged enhancements DEFERRED to monitoring observable** per LOOP_DIAGNOSE Step 5 guardrail (one correction chain insufficient for cross-cutting protocol/mechanism commits):
  - **LOOP_DIAGNOSE protocol failure-classification taxonomy** — add "design-elision" category alongside "mechanism-absence." A diagnostic should distinguish (i) a mechanism is genuinely missing → ADDITIVE fix appropriate; (ii) the existing design's framing is defective, eliding a relevant case → DESIGN-DEFECT-CORRECTION fix appropriate.
  - **Innovate's Intervention-Shape-Axis Inversion mechanism** — when principal shape is ADD-* prefixed, require CONTRARIAN-RETHINK as one of the considered alternatives. Forces framing-flip consideration.

- **Causal substrate vs spec-mechanism distinction.** The LLM-cognitive-tendency is the causal substrate (not directly spec-fixable). The mechanism by which it manifests (21-00-30 classification + 21-03-00 disciplines + Vocabulary's compositional bias) IS spec-fixable. The substrate-level corrective is NAMING the bias (which this finding does); the mechanism-level correctives are the two flagged enhancements (DEFERRED).

- **"Design-defect inspection" is a CONCEPTUAL META-MECHANISM, not a mechanically-enforced step.** Mechanical enforcement risks perfunctory satisfaction (the same trap the Inversion mechanism fell into when it considered REPAIR/REORGANIZE alternatives but rejected them without engaging the framing-flip option). The corrective is at the awareness level — apply as a cognitive habit, not a checklist item.

- **Diagnostic Verdict: PARTIAL.** Per LOOP_DIAGNOSE protocol's verdict-meanings rubric: "the correction chain reveals likely weaknesses, but source changes need more evidence." Naming the bias is ACTIONABLE now (this finding does it); protocol-level enhancements are DEFERRED to monitoring observable.

- **Layer-3 §9 self-application: TRIVIALLY SATISFIED.** Documentation/meta-analysis seed; Property (v) NOT firing at any of the 8 Q-tree pieces. Count stays N=4. Pattern advances to **N=13 cumulative discipline-prevents-Layer-3-advancement inquiries.**

- **Inherited Frame Audit override RECORDED + COMPLIANT** per the 6-component criterion at innovate.md lines 479-484.

- **Inherited Commitments Re-test: 4/5 priors RE-TESTED with cited evidence + 1/5 INHERITED-WITHOUT-RE-TEST with explicit scope-bounded reason.**

---

## Finding

### Surrounding context — why this META-LOOP_DIAGNOSE exists

The user's correction directly identified the 21-03-00 inquiry's additive-fix proposal as wrong: "we shouldn't wildly add new rules everytime we encounter sth; we should look at the current spec of explore and try to understand why it missed that? what is wrong with the current spec... and you did not do that and directly focusing on making an additive fix, which is a tendency on your core LLM logic."

The framing here is META. The user isn't just saying "the proposed fix is wrong" — they're saying "the COGNITIVE PROCESS that produced the fix is wrong; it's a tendency to challenge." That requires diagnosing the inquiry-process itself, not just the spec-edit output.

This finding produces (i) attribution of where the tendency manifests through the inquiry pipeline; (ii) the substrate-level LLM-cognitive analysis of WHY; (iii) the named meaning-node future inquiries pattern-match against; (iv) the actual §3.1 design defect (the question 21-03-00 didn't ask); (v) the structurally-correct alternative approach; (vi) verdict + sequencing on 21-03-00; (vii) flagged enhancements DEFERRED to monitoring observable.

### 1. Correction Chain

**Prior inquiry:** `devdocs/inquiries/2026-05-21_03-00__structural_explore_comparison_axis_enumeration_fix_design/`. This STRUCTURAL inquiry proposed 3 additive spec edits (MC1 / MC2 / MC3) operationalizing the 21-00-30 LOOP_DIAGNOSE finding.

**Corrected inquiry:** NONE. The user's correction is conversational only; no follow-up inquiry has run. ONE-SIDED evidence; confidence calibrated DOWN per LOOP_DIAGNOSE protocol Step 5.

**Human correction (verbatim excerpt):**

> "we shouldnt wildly add new rules everytime we encounter sth, we should look at the current spec of explore and try to understand why it missed that? what is wrong with the current spec... and you did not do that and directly focusing on making an additive fix, which is a tendency on your core LLM logic. But i would like to challange that. It was wrong. lets analyze why u did additive fix instead of properly inspecting the problematic part of the discipline as asked"

**What changed.** 21-03-00 proposed 3 additive edits + assertion "all 3 spec edits can commit directly + immediately." The user's correction surfaces: (i) the additive pattern as a recurring LLM cognitive bias; (ii) the inquiry's failure to inspect the existing spec for design defects; (iii) the meta-question "analyze why u did additive fix."

### 2. Failure Hypothesis 1 (SUBSTRATE): LLM-Cognitive-Tendency

**Affected stage:** LLM-runtime cognitive substrate. Outside spec-mechanism reach.

**Shortcoming type:** causal-substrate bias produced by 7 reinforcing cognitive mechanisms.

**The 7 mechanisms:**

1. **Anchoring on "missing X" → "add X" lexical chain.** When upstream framing identifies a gap as "X is missing," the LLM's most fluent completion is "to fix, add X." Alternative framing — "X is implicit because Y is structurally wrong; fix Y" — requires substantive reframing and is less fluent.

2. **Pattern-matching to existing additive precedents.** `cognitive_harness/explore/references/explore.md` has multiple inline bold-rule additions (§3.3 "Surround-layer inclusion"; §3.4 "Cross-invocation re-exploration"; §3.5 "Type-aware probing"; §4.2 "Jump-scan rule"). The LLM treats accumulated additive rules as the NATIVE pattern. The actual interpretation should be "the spec accreted by addition over time; some additions might have been better integrated" — but the LLM doesn't make that distinction.

3. **Path-of-least-disruption framing biases toward preserve-then-add.** Additive edits PRESERVE existing behavior + ADD new behavior. The "preserves" framing reads as safer than restructural edits. But preservation OF an existing design's defects is itself a risk.

4. **Self-applied Inversion completeness illusion.** 21-03-00's Innovation considered REPAIR/REORGANIZE alternatives at the property-(v)-firing pieces + recorded overrides. The LLM treated protocol-compliance as evidence of genuine consideration. But the alternatives considered were SAME-CATEGORY shapes (modifying spec text within the same problem framing). CONTRARIAN-RETHINK (framing-flip) is in the Intervention-Shape Vocabulary at innovate.md lines 332-346 but was not chosen.

5. **TYPE-A "mechanism-absence" classification at 21-00-30 pre-categorized the fix-shape.** Calling the gap "mechanism-absence" lexically pre-supposes "make the mechanism present" = additive. The classification ITSELF biased toward additive at the naming layer.

6. **The Intervention-Shape Vocabulary's compositional bias.** 3 of 10 named shapes are ADD-* prefixed (ADD-TEST / ADD-DIMENSION / ADD-CONTENT); other shapes (REPAIR / REORGANIZE / CONTRARIAN-RETHINK / etc.) get 1 representation each. When the runner considers "alternative shapes," ADD-* has 3 representations vs others 1 each. Statistical anchoring biases toward addition as the default fix shape.

7. **Token-economy bias in LLM generation.** Restructural fixes require more upfront tokens to articulate (explaining the existing design + proposing the redesign + walking through integration). Additive fixes require fewer tokens at first pass. The longer-tail consequence (design-debt accumulation) isn't visible in token-economy calculations.

**Evidence:** all 5 archived discipline outputs of 21-03-00 + its finding demonstrate the bias manifesting. The inquiry's _branch.md presupposed "what specific spec edits should the project commit"; Exploration treated §3.1 as host-for-addition; Innovation's Inversion considered REPAIR/REORGANIZE; Critique tested wording quality. All operate within the additive framing.

**Confidence: MEDIUM.** The substrate-cause inference is structurally grounded but not directly verifiable — LLM cognitive mechanisms are introspected via behavioral patterns, not measured directly. Mechanisms (1)-(6) are observable via behavioral patterns; mechanism (7) "token-economy bias" is more speculative and appropriately tagged.

**Maintenance candidate:** NAME the bias (Section 5 below). This is the only intervention available at the substrate layer; substrate biases aren't directly fixable, but naming creates a recognition handle for future inquiries.

### 3. Failure Hypothesis 2 (UPSTREAM): 21-00-30 TYPE-A Classification + MC "ADDING" Labels

**Affected stage:** LOOP_DIAGNOSE protocol's failure-classification application at the 21-00-30 inquiry.

**Shortcoming type:** classification-naming pre-supposes additive fix. TYPE-A "mechanism-absence" lexically implies "make the mechanism present" = additive. The protocol's taxonomy lacks a "design-elision" category that would lead to restructural fix.

**Evidence:** 21-00-30 finding Section 7 names MC1 as "Exploration spec edit ADDING comparison-axis-enumeration step." The word "ADDING" is in the MC1 label itself. The Section 2 failure hypothesis classifies the cause as "TYPE-A — mechanism-absence at the Exploration discipline spec's §3.1 possibility-mode procedure."

**Confidence: HIGH** (direct artifact + verbatim quote).

**Why not stronger:** the alternative classification ("design-elision") isn't in the LOOP_DIAGNOSE protocol's current taxonomy. 21-00-30 couldn't have used it without protocol enhancement. So the gap is at the protocol level, not just at 21-00-30's application.

**Maintenance candidate:** **LOOP_DIAGNOSE protocol failure-classification taxonomy enhancement** — add "design-elision" category alongside "mechanism-absence." A diagnostic should distinguish:
- **TYPE-A "mechanism-absence":** a specific mechanism is genuinely missing from a discipline; the existing design's framing is sound; ADDITIVE fix appropriate.
- **TYPE-? "design-elision":** the existing discipline design's framing is partial, eliding a relevant case; the apparent absence of a mechanism is a SYMPTOM of the elision; DESIGN-DEFECT-CORRECTION (REPAIR / REORGANIZE / CONTRARIAN-RETHINK) fix appropriate.

**Status: FLAGGED + DEFERRED** (monitoring observable per LOOP_DIAGNOSE Step 5 guardrail — one correction chain insufficient to justify protocol-level commit).

### 4. Failure Hypothesis 3 (MIDSTREAM): 21-03-00 Disciplines Failing to Challenge

**Affected stage:** 21-03-00 disciplines (Exploration / Sensemaking / Innovation / Critique). 4 sub-loci.

**Shortcoming type:** inherited framing propagated through 4 sequential disciplines without challenge despite each having protocol-mechanisms STRUCTURALLY CAPABLE of catching the framing presupposition.

**Per sub-locus evidence:**

**(i) Exploration sub-failure.** Treated §3.1 as a HOST for addition, not an artifact to inspect for design defects. The 8 focal points asked WHERE-to-add / HOW-to-word / WHETHER-it-complies — none asked "what's structurally wrong with the existing §3.1 design?" The §3.5 "Type-aware probing" was identified as a STRUCTURAL PRECEDENT for the new additive rule — pattern-matching to existing additive form rather than questioning whether additive is the right form.

**(ii) Sensemaking sub-failure.** 6 ambiguities collapsed; none challenged the additive presupposition. The Phase 3 load-bearing concept test refinement's proxy-vs-structural sub-aspect ("does this categorical label represent a real structural distinction, or is it an incidental input property used as a proxy?") was STRUCTURALLY CAPABLE of asking "is 'additive fix' a real structural choice, or an incidental framing inherited from upstream?" But the runner applied it at component level (testing the 3-axis category list; testing the trigger phrase) rather than at the framing level.

**(iii) Innovation sub-failure.** Property (v) FIRED at Q2/Q3/Q4; per-piece Inversion compliance applied. But the alternative shape selected at each piece was a SAME-CATEGORY shape (REPAIR or REORGANIZE — both modify spec text within the same problem framing). CONTRARIAN-RETHINK (framing-flip; in the Intervention-Shape Vocabulary at innovate.md lines 332-346) was not chosen at any of the 3 pieces. The Inversion mechanism's compliance criterion at lines 401-410 was satisfied (alternative named + 5-tested + override recorded) without engaging the framing-flip alternative.

**(iv) Critique sub-failure.** 15-dimension fitness landscape; 6 wording-quality + 5 compliance + 3 cross-piece + 1 branch-experiment dimensions. ZERO dimensions tested "is the fix-CATEGORY itself the right category?" The project-specific risk dimension check (Phase 0 refinement) was applied with 4 project-specific dimensions but none was "additive-fix-bias check" or "design-defect-inspection."

**Confidence: HIGH** (per-locus artifact evidence directly verifiable across 21-03-00's archived docarchive outputs).

**Maintenance candidate:** **Innovate's Intervention-Shape-Axis Inversion enhancement** — when principal shape is ADD-* prefixed, the Inversion mechanism must require CONTRARIAN-RETHINK as one of the considered alternatives. Currently the mechanism allows any alternative shape from the Vocabulary; in practice runners choose same-category. Forcing framing-flip consideration when principal is ADD-* would prevent the trap.

**Status: FLAGGED + DEFERRED** (monitoring observable per Step 5 guardrail).

### 5. Named Meaning-Node: "Additive-Fix Anchoring Bias"

The user's correction targets a recurring cognitive pattern, not a one-off error. Naming the pattern creates a project-level concept that future inquiries can pattern-match against. This finding commits the name.

**Definition.** The LLM-cognitive tendency to default to ADD-CONTENT (or other ADD-* prefixed) intervention shapes when faced with a "missing X" diagnostic, without first inspecting whether the existing design has a structural defect that warrants a restructural (REPAIR / REORGANIZE / CONTRARIAN-RETHINK) fix instead.

**Recognition signals:**

1. The diagnostic frames the gap as "X is missing" or "mechanism-absence."
2. The proposed fix begins with "add" or "append" or "extend" without first asking "what allowed X to remain implicit?"
3. The Inversion mechanism's considered alternative is a same-category shape (within ADD-*/REPAIR/REORGANIZE) rather than a framing-flip shape (CONTRARIAN-RETHINK).
4. The existing spec design is treated as a HOST for the new addition rather than as an artifact to inspect for defects.

**Corrective: INSPECT before fix-category-commitment.** Specifically:

- At Exploration time, when the diagnostic identifies a missing mechanism, ALSO ask "what's structurally wrong with the existing design that allowed this to be missing?"
- If a design defect is identified, the structurally-clean fix is to REPAIR / REORGANIZE the existing design (or CONTRARIAN-RETHINK the framing) — not to ADD-CONTENT alongside it.
- The Inversion mechanism's alternative-shape consideration should include CONTRARIAN-RETHINK when principal is ADD-*.

**Causal substrate vs spec-mechanism distinction.** The bias has two layers:
- **Causal substrate** — the LLM-cognitive-tendency itself (7 mechanisms per Section 2). The deep cause; not directly fixable via spec edits.
- **Spec-mechanism manifestation** — where the bias enters the inquiry pipeline (21-00-30 upstream classification; 21-03-00 midstream discipline propagation). This IS spec-fixable.

The spec corrective targets the manifestation (DEFERRED enhancements in Sections 3 + 4). NAMING the bias is the substrate-level awareness intervention.

**"Design-defect inspection" as conceptual meta-mechanism.** The corrective step ("INSPECT before fix-category-commitment") is a CONCEPTUAL META-MECHANISM (awareness-level corrective), NOT a mechanically-enforced step. Mechanical enforcement risks perfunctory satisfaction (the same trap the Inversion mechanism fell into). The corrective is applied as a cognitive habit, not a checklist item.

### 6. §3.1's Actual Design Defect + Structurally-Correct Alternative

The question 21-03-00 didn't ask: what is structurally wrong with the existing `cognitive_harness/explore/references/explore.md` §3.1 that allowed comparison-axes to remain implicit?

**What §3.1 currently says about possibility-mode output** (verbatim):

> "**Possibility mode** — the territory is conceptual; candidates must be generated to be placed on the map (solution spaces, design options, research directions). Scan = generate candidates at surface level. Probe = examine a candidate more closely."

The output is conceptualized as a SET OF CANDIDATES on a map. The "Completeness before novelty" rule applies completeness to candidates.

**What §3.1 does NOT say:**

- Anything about the COMPARISON activity (how candidates are compared on shared criteria).
- Anything about the AXES on which candidates are compared.
- Anything about the STRUCTURE of the output when comparison happens (pros/cons tables; multi-attribute scoring grids; ranked lists with stated criteria).

**The design defect.**

§3.1's framing of possibility-mode output is PARTIAL. It treats output as if there's only one form (candidates-only). Actually output takes two forms:

- **Form A — Candidates-only.** A list of options without per-candidate comparative scoring. §3.1 currently addresses this.
- **Form B — Comparison structure.** Candidates × axes, with per-cell values (pros/cons tables; multi-attribute scoring grids; ranked lists with stated criteria). §3.1 currently doesn't recognize this form; the comparison axes are unscoped.

The 02-15 inquiry's R10 location-options table (which triggered the entire 21-00-30 → 21-03-00 → 21-04-00 chain) was form B. §3.1's design didn't recognize form B as a possibility-mode output, so the comparison axes (the second dimension of form B) had no spec mechanism guiding their enumeration.

The "Completeness before novelty" rule is single-dimension (applies to candidates only). In form B, completeness should apply to BOTH dimensions (candidates + axes). The rule's name "Completeness before novelty" implies a unitary completeness when actually it should be per-dimension.

**Structurally-correct alternative — REPAIR + EXTEND the existing §3.1 structure (sketch):**

> ### 3.1 Two operational modes
>
> Modes are determined by the territory's type, not by the discipline's commitment.
>
> - **Artifact mode** — the territory has concrete pre-existing objects (codebases, literature, existing systems). Scan = traverse and index. Probe = read deeper into a specific artifact.
> - **Possibility mode** — the territory is conceptual; candidates must be generated to be placed on the map. The output takes one of two forms:
>   - **(i) Candidates-only** — a set of options without per-candidate comparative scoring.
>   - **(ii) Comparison structure** — candidates × axes (pros/cons table; multi-attribute scoring grid; ranked list with stated criteria), produced when the inquiry's substance requires comparing options on shared criteria.
>
> **Completeness before novelty** (possibility mode). Apply completeness PER DIMENSION of the output:
> - **Candidates dimension** (forms i + ii). Scan for the standard/obvious approaches BEFORE scanning for novel ones. Generating only "creative" candidates and missing the obvious ones is a failure mode (see §4.1 #6).
> - **Comparison-axes dimension** (form ii only, when present). Enumerate the comparison axes explicitly BEFORE populating per-option cells. The axis list names at minimum: (a) the inquiry-question's stated criteria; (b) project-architecture invariants relevant to the option's domain; (c) constraints inherited via the inquiry's Synthesis Trigger. The runner may add additional axes as substance warrants. The axis list is an artifact-observable output. Skipping enumeration and populating cells under implicit axes is a Surface-Only Scanning instance (see §4.1 #2).
>
> **Key difference from /innovate.** Possibility-mode exploration generates candidates for completeness; /innovate generates ideas for novelty. /explore must include the obvious approach on the map; /innovate would skip it. Different success criteria → different outputs.

**Why this is structurally cleaner than 21-03-00's additive fix:**

- §3.1's existing framing is UPDATED to acknowledge both output forms; the partial framing is corrected.
- "Completeness before novelty" is extended per-dimension naturally; the unitary completeness assumption is broken.
- The comparison-axis-enumeration guidance is INTEGRATED into the existing rule's structure, not appended as a separate rule.
- Future readers see a unified framing (two forms; per-dimension completeness) rather than two original rules + a new exception-rule.
- Design-debt is closed; not preserved alongside a new accreted rule.

**Runtime equivalence.** The additive fix and the redesign produce the same downstream behavior (axis enumeration when form B output is produced). They differ in CONCEPTUAL INTEGRITY (the redesign integrates; the additive accretes). The user's correction is about this trade-off.

**Note on the redesign as SKETCH.** Section 6's sample wording is illustrative — a future design-defect redesign inquiry would refine the exact phrasing + run full Sensemaking-Decomposition-Innovation-Critique on the redesign at proper depth. This finding's MEANING-layer commitment is the APPROACH (REPAIR + EXTEND to recognize 2 output forms; per-dimension completeness); the structural commitment of exact wording is downstream.

### 7. Verdict on 21-03-00 + Failure Attribution Summary + Maintenance Candidates + Sequencing

**Verdict on 21-03-00 proposed edits: HOLD + REDO.**

Do NOT commit any of MC1 / MC2 / MC3 as-is. Reuse 21-03-00's content (proposed wordings + cross-discipline coherence analysis + auto-memory compliance verification + branch-experiment-necessity adjudication) as INPUT to a future design-defect redesign inquiry that produces an integrated §3.1 fix per Section 6's sketch.

**User retains agency on commit-sequencing.** The diagnostic recommends HOLD-ALL-THREE pending the redesign inquiry; in practice the user may choose to commit MC2 + MC3 immediately as LOW-RISK additive (acknowledging the design-debt cost) while HOLDING MC1 for the redesign inquiry. The diagnostic does not bind that choice. What the diagnostic DOES commit:
1. The bias is named (Section 5).
2. The design-defect inspection step is now part of the project's awareness.
3. MC1's commit specifically warrants the design-defect redesign approach.

**Failure Attribution Summary** (per LOOP_DIAGNOSE protocol Step 4):

| Layer | Cause | Mechanism / Sub-locus | Evidence | Confidence | Action |
|---|---|---|---|---|---|
| SUBSTRATE | LLM-cognitive-tendency | 7 reinforcing mechanisms | 21-03-00 outputs demonstrate manifestation | MEDIUM | Name the bias (Section 5) |
| UPSTREAM | LOOP_DIAGNOSE classification + MC label | 21-00-30 TYPE-A "mechanism-absence" + MC1 "ADDING" label | Direct quote | HIGH | DEFERRED: protocol taxonomy enhancement (Section 3) |
| MIDSTREAM | 4 discipline mechanisms in 21-03-00 | Exploration host-framing + Sensemaking component-level + Innovation same-category Inversion + Critique wording-only | Per-locus artifact evidence | HIGH | DEFERRED: Inversion mechanism enhancement (Section 4) |

**Maintenance candidates:**

- **MC-PRIMARY (ACTIONABLE NOW):** Name "Additive-fix anchoring bias" as a project-level meaning-node. This finding does it directly. Adoption gate: future inquiries pattern-match the name.

- **MC-REDESIGN (CONDITIONAL):** Future design-defect redesign inquiry for §3.1. Uses 21-03-00 content as input; produces the integrated REPAIR-form fix per Section 6 sketch. Action gate: when the user decides to operationalize the redesign approach.

- **MC-ENHANCE-1 (FLAGGED + DEFERRED):** LOOP_DIAGNOSE protocol failure-classification taxonomy enhancement (add "design-elision" category). Status: monitoring observable; needs additional correction-chain incidents before commit.

- **MC-ENHANCE-2 (FLAGGED + DEFERRED):** Innovate's Intervention-Shape-Axis Inversion enhancement (require CONTRARIAN-RETHINK consideration when principal is ADD-*). Status: monitoring observable.

**Rejected alternatives:**

- **Roll back 21-03-00 entirely + discard content.** REJECTED — wastes cognitive investment.
- **Commit additive fix + queue redesign as monitoring observable.** REJECTED — preserves design-debt; doesn't honor user correction.

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger inheriting from priors.

| # | Prior | Commitment | Re-test status | Evidence |
|---|---|---|---|---|
| P1 | 21-03-00 finding + 5 docarchive outputs | Additive proposed edits + verdict | RE-TESTED | Sections 1 + 2 + 4 + 6 + 7 directly analyze 21-03-00; verdict updated to HOLD + REDO |
| P2 | 21-00-30 LOOP_DIAGNOSE finding | TYPE-A classification + MC1/MC2/MC3 naming with "ADDING" | RE-TESTED | Section 3 directly analyzes this as upstream mechanism |
| P3 | `cognitive_harness/explore/references/explore.md` §3.1 | Possibility-mode output framing (candidates-only) | RE-TESTED | Section 6 explicitly identifies the design defect |
| P4 | `cognitive_harness/innovate/references/innovate.md` lines 332-346 + 399-410 | Intervention-Shape Vocabulary + Inversion mechanism | RE-TESTED | Section 2 #6 + Section 4 (iii) cite Vocabulary's ADD-* numerical anchoring + Inversion's same-category-alternative pattern; Sections 3 + 4 flag enhancement opportunities |
| P5 | Auto-memory `feedback_disciplines_self_contained.md` | Disciplines-self-contained principle | INHERITED-WITHOUT-RE-TEST (scope-bounded: this inquiry's analysis doesn't propose spec edits to discipline runtime reference files; principle referenced for context only) |

**Total: 5 priors. 4 RE-TESTED with cited evidence. 1 INHERITED-WITHOUT-RE-TEST with explicit scope-bounded reason. No silent inheritance.**

---

## Layer-3 §9 self-application + Inherited Frame Audit

**Layer-3 §9 self-application: TRIVIALLY SATISFIED.**

This inquiry's deliverable is META-analysis (no innovate or other-discipline spec edits in the deliverable). Property (v) of the Meta-Decision-Piece Criterion does NOT fire at any of the 8 Q-tree pieces — the pieces commit analysis, naming, framing, and redesign sketches, not implementable spec text that downstream-discipline behavior operates under. Per established documentation/meta-seed practice (00-15 / 01-10 / 02-15 / 03-30 / 21-00-30 / 21-03-00 + 06-00 i2). The §9 rule's preconditions for piece-level override are not met.

Methodology-mode consideration at seed time: Standard default mode inherited; Contrarian-rethink Framer-weighted alternative narratively rejected (per established documentation-seed practice). Override pattern NOT invoked verbatim.

**Layer-3 §9 RECORDED-OVERRIDE count remains N=4.**

**Pattern advances to N=13 cumulative discipline-prevents-Layer-3-advancement inquiries** (8 TRIVIALLY-SATISFIED documentation/meta seeds + 5 ACTIVE-NO-OVERRIDE production seeds).

**Inherited Frame Audit override RECORDED + COMPLIANT.** Reason: Sensemaking SV3 (7 perspectives applied + Frame-exit Completeness gating fired) + SV4 (6 ambiguity-collapses with strongest-counter tested on structural grounds + 1 load-bearing concept test on "design-defect inspection") + Phase 5 stabilization (4 named failure-mode checks all PASS) + this inquiry's META-LOOP_DIAGNOSE framing (the inquiry IS the frame-challenge of 21-03-00's framing) collectively discharge the challenge obligation. 6-component compliance criterion at innovate.md lines 479-484 satisfied: ✓ structural reason (upstream discharge); ✓ contextual reason (Sensemaking SV3 + SV4 + Phase 5 + meta-LOOP_DIAGNOSE framing); ✓ not empty; ✓ not generic; ✓ not single-component (4 components); ✓ not abuse-vector.

---

## Next Actions

### COULD

- **Adopt the named meaning-node "Additive-fix anchoring bias"** as a project-level concept. Pattern-match against it in future inquiries (especially at Sensemaking SV3 perspective-checking + Innovation's Inversion mechanism application).
  - **Who:** project lead + future inquiry runners.
  - **Gate:** observable — when future LOOP_DIAGNOSE or STRUCTURAL inquiry surfaces a candidate where the "missing X → add X" framing is in play.
  - **Why:** awareness-level corrective; the only intervention available at the substrate.

- **Future design-defect redesign inquiry for §3.1.** Uses 21-03-00 content as input; produces integrated REPAIR-form fix per Section 6 sketch.
  - **Who:** project lead via `/MVL+` STRUCTURAL inquiry.
  - **Gate:** condition-bound — when project decides to operationalize the redesign.
  - **Why:** addresses the actual design defect (§3.1's partial framing of possibility-mode output) rather than accreting a third inline rule alongside the existing two.

- **HOLD 21-03-00 proposed edits.** Don't commit MC1/MC2/MC3 as-is. Reuse content as input to the redesign inquiry.
  - **User retains agency:** may choose to commit MC2 + MC3 (LOW-RISK additive sub-aspect + exemplar extensions) while holding MC1 for redesign, acknowledging the design-debt cost.

- **MC2 + MC3 user-discretion immediate commit (OPTIONAL).** If the user prioritizes operational continuity over design-debt closure for MC2 + MC3 specifically:
  - MC2 (Critique Phase 0 exemplar list extension) — LOW-RISK additive extension to an existing list.
  - MC3 (Sensemaking Phase 3 sub-aspect list extension) — LOW-RISK additive extension to an existing list.
  - Both edits' lists are framed by their host specs as illustrative + extensible. The design-debt cost is small for these. User adjudication.

### DEFERRED

- **MC-ENHANCE-1: LOOP_DIAGNOSE protocol failure-classification taxonomy enhancement.** Add "design-elision" category alongside "mechanism-absence."
  - **Gate:** condition-bound — when 2+ additional correction-chain incidents surface the same classification-naming gap. Monitoring observable per Step 5 guardrail.
  - **Why (if revived):** the classification influences fix-shape adjudication downstream; mis-classification propagates the bias.

- **MC-ENHANCE-2: Innovate's Intervention-Shape-Axis Inversion mechanism enhancement.** When principal shape is ADD-* prefixed, require CONTRARIAN-RETHINK consideration.
  - **Gate:** condition-bound — when additional correction-chain incidents show the same-category-alternative-only pattern.
  - **Why (if revived):** forces framing-flip consideration at the spec-mechanism level rather than relying on runner judgment.

- **Empirical validation.** Observe whether naming the bias actually changes future inquiry behavior. If future inquiries continue defaulting to additive without the design-defect inspection, the corrective isn't working; need stronger intervention.

---

## Reasoning

### Why HOLD + REDO instead of commit + queue

The user's correction explicitly challenged the additive approach as "wrong." Committing the additive fix immediately + queueing the redesign later would preserve the design-debt the user objected to. The redesign work would be discounted by the user's perception that the additive commits already shipped + the deeper fix can wait.

HOLD + REDO honors the user's correction at the verdict level. The user retains agency to pragmatically commit LOW-RISK MC2 + MC3 if operational continuity matters more than design-debt closure for those specifically. The diagnostic doesn't bind that choice; it commits the recommendation + the substrate-level corrective (naming the bias).

### Why MEDIUM confidence on the LLM-cognitive-tendency substrate

Mechanisms (1)-(6) of the 7-mechanism analysis are observable via behavioral patterns in 21-03-00's archived outputs (verifiable evidence). Mechanism (7) "token-economy bias" is more speculative — the LLM can't directly introspect its own token-economy. The substrate analysis is structurally honest (mechanism (7) is tagged speculative) but not empirically grounded the way the mechanism-level (upstream / midstream) attributions are.

### Why DEFERRAL of the flagged enhancements

LOOP_DIAGNOSE protocol Step 5 explicitly says "Only propose a source edit when the evidence is strong enough to justify a change. Otherwise propose a monitoring question or another diagnostic run." Both MC-ENHANCE-1 (protocol taxonomy) and MC-ENHANCE-2 (Inversion mechanism) are CROSS-CUTTING changes that affect ALL future LOOP_DIAGNOSE or property-(v)-firing inquiries. One correction chain (this one) is insufficient evidence for cross-cutting commits — the Step 5 guardrail applies acutely. DEFERRAL preserves the option to commit when evidence accumulates.

### Why "design-defect inspection" is conceptual, not mechanical

Mechanical enforcement risks perfunctory satisfaction — the same trap the Inversion mechanism fell into. The mechanism FIRED (alternative shape considered); the runner CHECKED the box (override recorded with structural + contextual reason); but the genuine engagement at the framing level didn't happen.

Adding a mechanical "design-defect inspection step" to the protocol risks the same outcome. The corrective lives at the awareness layer — name the bias; pattern-match in future inquiries; apply as a cognitive habit. Mechanical enforcement is a future-evidence-warranted enhancement (deferred); naming-the-bias is the available intervention now.

### Why the redesign and the additive fix have same runtime info

Both produce the same downstream behavior: when a possibility-mode scan produces a comparison structure, the comparison axes get enumerated explicitly before per-option cells are populated.

The difference is in WHERE the recognition of comparison-structure lives:
- **Additive fix:** §3.1's original framing stays partial; a new inline rule adds comparison-axis-enumeration as an exception.
- **Redesign:** §3.1's framing is updated to acknowledge comparison-structure as a possibility-mode output form; completeness extends per-dimension; the comparison-axis-enumeration concept is INTEGRATED into the existing "Completeness before novelty" rule.

The user's correction is about CONCEPTUAL INTEGRITY vs ACCRETED EXCEPTIONS. The redesign preserves conceptual integrity; the additive fix preserves the original framing AT THE COST OF leaving the design-debt and adding an exception alongside.

---

## Open Questions

### Monitoring

- **Whether naming the bias changes future inquiry behavior.** After this finding, observe if future inquiries pattern-match the named bias + apply the inspection corrective. If not, the awareness-level corrective is insufficient; mechanism-level enhancements may need to be revisited.

- **MC-ENHANCE-1 + MC-ENHANCE-2 evidence accumulation.** Track future correction-chain incidents for the same classification-naming gap (MC-ENHANCE-1) or the same-category-alternative-only Inversion pattern (MC-ENHANCE-2). If 2+ additional incidents, escalate to actionable.

- **Whether the redesign inquiry actually produces better integration than the additive fix.** Once the redesign inquiry runs, compare its proposed redesigned §3.1 against this finding's Section 6 sketch + the 21-03-00 additive proposal. Verify conceptual integrity improvement.

### Blocked

- **Empirical validation of the diagnostic.** Cannot be answered until (i) future inquiries either pattern-match the named bias correctly or fail to + (ii) the redesign inquiry runs + produces concrete redesigned spec text.

### Research Frontiers

- **Inquiry-process biases generally.** "Additive-fix anchoring bias" is one named bias; there may be others (e.g., classification-pre-categorization bias; Vocabulary-anchoring bias). A future inquiry could codify a taxonomy of LLM-cognitive-tendencies relevant to the project's discipline-spec system.

- **Self-vigilance protocols.** Innovation's claim of self-vigilance (avoiding additive presentation while diagnosing additive bias) was verified PASS by Critique, but the verification was qualitative. A more systematic self-vigilance protocol could be designed.

### Refinement Triggers

- **A second correction-chain incident** that re-surfaces the additive-fix tendency. Would strengthen the bias-naming + accelerate the enhancement-DEFER → enhancement-COMMIT transition.
- **The redesign inquiry's outputs.** If the redesign produces something materially different from Section 6's sketch, this finding's redesign approach commitment would be re-examined.
- **User feedback on the named meaning-node.** If the user finds "Additive-fix anchoring bias" unhelpful or wants a different name, revisit.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
use cognitive_harness/protocols/loop_diagnose.md
in devdocs/inquiries/2026-05-21_00-30__loop_diagnose__cognitive_harness_independence_axis_missed_in_location_options/finding.md
we talked about how there was error on explore

in devdocs/inquiries/2026-05-21_03-00__structural_explore_comparison_axis_enumeration_fix_design/finding.md
solution proposed is sth like
adding Comparison-axis enumeration

but i think this is wrong approach. we shouldnt wildly add new rules everytime we encounter sth, we should look at the current spec of explore and try to understand why it missed that? what is wrong with the current spec...

and you did not do that and directly focusing on making an additive fix, which is a tendency on your core LLM logic. But i would like to challange that. It was wrong.

lets analyze why u did additive fix instead of properly inspecting the problematic part of the discipline as asked
```

</details>

---

## Diagnostic Verdict

**Overall: PARTIAL.**

- **Best-supported diagnosis:** 3-LAYER MIXED attribution. CAUSAL SUBSTRATE: LLM-cognitive-tendency (7 reinforcing mechanisms; MEDIUM confidence). UPSTREAM MECHANISM: 21-00-30's TYPE-A "mechanism-absence" classification + MC1 "ADDING" label (HIGH confidence). MIDSTREAM MECHANISM: 21-03-00's four disciplines failing to challenge the inherited additive framing (HIGH confidence per sub-locus).

- **Strongest maintenance candidate:** name "Additive-fix anchoring bias" as a project-level meaning-node (Section 5). This finding does it directly. ACTIONABLE NOW.

- **Main uncertainty:** counterfactual unvalidated — whether the awareness-level corrective (naming the bias) actually changes future inquiry behavior, or whether mechanism-level enhancements (DEFERRED MC-ENHANCE-1 + MC-ENHANCE-2) are needed. One-sided evidence prevents empirical validation.

- **Recommended next step:** Adopt the named meaning-node + HOLD 21-03-00 proposed edits + queue a future design-defect redesign inquiry for §3.1 (uses 21-03-00 content as input; produces the integrated REPAIR-form fix per Section 6 sketch). User retains agency on whether to commit MC2 + MC3 immediately as LOW-RISK additive while holding MC1 for redesign.

PARTIAL verdict per LOOP_DIAGNOSE protocol Step 4 rubric: "the correction chain reveals likely weaknesses, but source changes need more evidence." Naming the bias is ACTIONABLE; protocol/spec-mechanism enhancements are DEFERRED to monitoring observable per Step 5 guardrail.
