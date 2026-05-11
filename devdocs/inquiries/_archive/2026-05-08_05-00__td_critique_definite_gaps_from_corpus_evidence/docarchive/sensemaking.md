# Sensemaking: TD-Critique Discipline - Definite Gaps From Corpus Evidence

## User Input

devdocs/inquiries/2026-05-08_05-00__td_critique_definite_gaps_from_corpus_evidence/_branch.md

## SV1 — Baseline Understanding

Exploration converged on TWO for-sure-missing rules. Rule A: project-specific risk dimension inclusion check at Phase 0 / Dimension Construction (4-chain corpus convergence; promoted as M6's Critique sub-rule in chain 3). Rule B: multi-axis prosecution depth check at Phase 2 / Adversarial Evaluation, Prosecution sub-section (3-chain corpus convergence; promoted as TP3 in chain 6). Both are corpus-level promoted rules NOT yet in `td-critique.md` spec; their generic versions belong in the spec.

This sensemaking stabilizes rule wording structure, collapses sub-question ambiguities (cross-reference targets, Phase 0 sub-step granularity, Phase 2 sub-section integration), and fixes canonical homes.

## Phase 1 — Cognitive Anchor Extraction

### Constraints

1. **For-sure criterion** — multi-chain convergence preferred; single-chain primary-cause + before/after contrast also passes (per `2026-05-07_20-35`). Both rules have multi-chain evidence (4 and 3 chains).
2. **Generic / meta-discipline language** — uses existing td-critique.md vocabulary (Phase 0 dimension construction, dimension validation, Phase 2 adversarial evaluation, prosecution, defense, collision, fitness landscape, failure modes). NOT project-specific.
3. **Placement convention** from `enes/discipline_rule_placement.md` — step-level scope → canonical home is the process-model phase at which the rule fires. ONE canonical home + one-line cross-references at non-canonical surfaces.
4. **Don't embed the convention itself** in `td-critique.md` (per `2026-05-07_23-27`).
5. **Apply non-ambiguity check** — references to discipline-internal concepts get parenthetical context on first use in finding.
6. **Reject speculative additions** — anything without multi-chain convergence or single-chain primary-cause + before/after contrast.
7. **Self-Reference Collapse defense** — dimensions for THIS analysis extracted from sensemaking output (constraints + foundational principles), not generated from td-critique itself; corpus evidence is external grounding.

### Key Insights

1. **The corpus chains' OWN Critique runs are well-structured.** Each `docarchive/critique.md` averages ~400 lines with 5–6 weighted dimensions, full prosecution + defense + collision per candidate, assembly check, telemetry. The for-sure-missing pieces are NOT about Critique's overall structure — they target specific recurring failure patterns the prior loops' Critique missed.

2. **Both proposed rules correspond to corpus-level promoted rules** (M6's Critique sub-rule from chain 3; TP3 from chain 6). The corpus already validated them via cross-cutting promotion gates (3+ chains threshold met). The for-sure-missing piece is encoding the generic versions in the spec.

3. **The two rules target distinct Critique surfaces.** Rule A fires at Phase 0 / Dimension Construction (the surface where the dimension list is built). Rule B fires at Phase 2 / Adversarial Evaluation, Prosecution sub-section (the surface where prosecution is constructed). Both are step-level scope.

4. **All Critique-side failures across the 7 chains map to either Rule A or Rule B.** Chain 1's mechanism-level redundancy → Rule A; chain 2's culture-fit → Rule A; chain 3's operation-parsimony + user-perspective prosecution → Rule A + Rule B; chain 4's phase-fit → Rule A; chain 5's failure-case prosecution → Rule B; chain 6's specification-gap prosecution → Rule B. No uncovered failures.

5. **td-critique.md's existing 7 failure modes provide cross-reference targets.** Rule A connects to Dimension Blindness (failure mode #4). Rule B connects to Rubber-Stamping (failure mode #2 — when prosecution is too weak). Both cross-references are clean structural fits, unlike sister analyses' weaker fits (where new failure modes were rejected).

6. **No new failure modes needed.** Both new rules are positive-form refinements with clean cross-reference fits to existing failure modes. Sister-analysis precedent of not introducing new failure modes is consistent.

7. **Default dimensions vs. project-specific dimensions distinction.** td-critique.md says default dimensions are "modified per problem" but doesn't explicitly require project-specific risk axis coverage. The 6 default dimensions (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) are content-oriented; "project-specific risk axes" (e.g., duplicate-derivable-state, operation-parsimony) is a distinct mechanism-oriented concept. Rule A makes this distinction explicit.

8. **TD-Critique's existing prosecution prompts vs. depth-axes.** td-critique.md's Phase 2 / Prosecution gives 4 generic prompts ("What's the killer objection? Under what conditions does this fail catastrophically? What assumption, if wrong, destroys the entire approach? What's the worst realistic outcome?") but these don't enumerate depth-axes (user-perspective; failure-case scenario; specification-gap probe). Rule B adds depth-axis enumeration as a structural prosecution check.

### Structural Points

1. **Rule A canonical home granularity.** Phase 0 has 5 sub-steps (read sensemaking → derive dimensions → validate dimensions → weight → define success criteria). Rule A fits at the "validate dimensions" sub-step OR as an additional Phase 0 step ("Verify project-specific risk axis coverage when applicable"). Validate-dimensions sub-step is the cleaner placement (one step gets one extension; no new step inserted).

2. **Rule B canonical home granularity.** Phase 2 has 4 elements (Prosecution, Defense, Collision, Position). Rule B fits within the Prosecution sub-section, extending the existing 4 generic prompts with depth-axis enumeration.

3. **Cross-references:** Rule A → Dimension Blindness (failure mode #4); Rule B → Rubber-Stamping (failure mode #2). Both are structurally strong fits.

4. **Aggregate cost:** ~10–15 lines added to td-critique.md (Rule A ~5–7 lines + cross-reference; Rule B ~5–8 lines + cross-reference). Comparable to sister analyses (decompose.md got 1 rule ~6–10 lines; explore.md / sensemaking.md / innovate.md got 2 rules each ~16–25 lines).

5. **Self-Reference Collapse defense applies to BOTH the meta-analysis (this inquiry) and to td-critique.md's existing failure mode #7.** Encoding the rules in spec form preserves the discipline-spec purity (corpus evidence stays in finding; spec stays runtime-pure).

### Foundational Principles

1. **Multi-chain corpus convergence is the gold standard for for-sure evidence.** Both rules have 4 and 3 chain convergence respectively, well above the 3+ cross-cutting threshold the corpus itself uses.

2. **Single-chain caveats apply to the CHILDREN of the meta-rules**, not to the meta-rules themselves. Rule A's meta-pattern is 4-chain; each individual specific dimension (duplicate-derivable-state, etc.) is single-chain. Rule B's meta-pattern is 3-chain; each individual depth-axis sub-type (user-perspective, failure-case, specification-gap) is single-chain. This is structurally identical to innovate.md's Rule A (axis coverage) — meta-pattern multi-chain; individual axes single-chain.

3. **Discipline-spec purity** — caveats and revival triggers documented in finding only, not in spec. Per `2026-05-07_23-27`.

4. **Generic / meta-discipline language only** — project-specific dimension names (duplicate-derivable-state, operation-parsimony) are illustrative examples, not spec content. The rule's positive form names the requirement (project-specific risk axis); examples ground the abstraction.

5. **Self-Reference Collapse defense** — external grounding via corpus evidence is the structural answer per td-critique.md's failure mode #7 prescription.

### Meaning-Nodes

1. **Project-specific risk dimension** — a dimension in the Phase 0 list that captures a mechanism-level risk specific to the project's documented risk axes. Distinct from the default dimensions (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) which are content-oriented. Central concept for Rule A.

2. **Prosecution depth-axis** — an explicit angle of prosecution beyond dimension-level objections. Examples observed in corpus: user-perspective objection (read source input; address user-stated concerns); failure-case scenario (concrete edge cases); specification-gap probe (load-bearing concept's determination mechanism). Central concept for Rule B.

3. **Dimension list completeness** — the Phase 0 output is complete when it covers all relevant axes for the candidate set, including project-specific risk axes when applicable.

4. **Prosecution depth** — the Phase 2 prosecution is sufficient when it constructs objections at multiple depth-axes when applicable, not just at dimension-level.

5. **Per-inquiry vs. corpus-level scope** — this analysis encodes per-inquiry rules in the spec. Corpus-level cross-cutting promotion events (M6, TP3) are LOOP_DIAGNOSE-protocol-specific tracking; their generic per-inquiry rule shape is what belongs in td-critique.md.

## SV2 — Anchor-Informed Understanding

Anchor extraction confirms TWO consolidated rules:
- Rule A at Phase 0 / Dimension Construction (validate-dimensions sub-step), cross-reference at Dimension Blindness failure mode.
- Rule B at Phase 2 / Adversarial Evaluation, Prosecution sub-section, cross-reference at Rubber-Stamping failure mode.

Both have multi-chain corpus convergence above threshold. Both have clean cross-reference fits with existing failure modes. No new failure modes needed. Caveats in finding only. Cost ~10–15 lines aggregate.

The shift from SV1: rule placement granularity decided (sub-step level for both); cross-reference targets identified; structural fit with existing failure modes confirmed.

## Phase 2 — Perspective Checking

### Technical / Logical Perspective

Both rules are mechanically applicable:
- **Rule A:** the runner at Phase 0 derives dimensions from sensemaking output (existing step), then runs the validate-dimensions sub-step. Within validation, the rule asks: "Does this candidate set involve project artifacts, operations, or state? If yes, does the dimension list include at least one project-specific risk dimension that captures the project's documented risk axes? If no, identify what's missing and add."
- **Rule B:** the runner at Phase 2 constructs prosecution. Within prosecution, the rule asks: "What depth-axes are relevant to this candidate's risk surface? User-perspective (does the candidate fail to address user-stated concerns)? Failure-case (specific edge cases where the candidate's logic fails)? Specification-gap (load-bearing concept's determination mechanism missing)? Construct prosecution at each relevant depth-axis."

NEW ANCHOR: both rules produce observable artifacts in the Critique output (an additional dimension; depth-axis-specific prosecution items). Compliance is checkable.

### Human / User Perspective

The user's "for sure" criterion is satisfied — multi-chain corpus convergence (4 chains for Rule A; 3 chains for Rule B). Both rules close real corpus failure patterns that were promoted at protocol level but never encoded in spec.

The user's framing question is answered: TWO rules, both targeting specific Critique surfaces (Phase 0; Phase 2), both with strong corpus evidence, both with clean placement.

NEW ANCHOR: user-framing question fully answered.

### Strategic / Long-term Perspective

Long-term: encoding the corpus-promoted rules in spec makes their effect PORTABLE beyond LOOP_DIAGNOSE. Future Critique runs (in any context) get the project-specific risk dimension check and the multi-axis prosecution depth check without depending on protocol-level rescue.

NEW ANCHOR: portability beyond LOOP_DIAGNOSE is the long-term value of encoding.

### Risk / Failure Perspective

Risks:
- **Rule A judgment-dependence:** "candidate set involves project artifacts, operations, or state" requires runner judgment. Mitigation: the trigger is observable from the candidate descriptions (do they propose creating/modifying artifacts? do they propose operations?).
- **Rule B over-firing:** prosecution depth-axes might trigger on candidates where they're not relevant. Mitigation: the rule says "construct prosecution at the appropriate depth-axes when applicable" — runner picks relevant axes; not every axis applies to every candidate.
- **Self-Reference Collapse:** this analysis evaluates Critique using Critique. Mitigation: dimensions for this analysis are extracted from sensemaking output (constraints + foundational principles + corpus evidence), not generated from td-critique.md itself. External grounding via 7-chain corpus.

NEW ANCHOR: Self-Reference Collapse mitigated via external corpus grounding.

### Resource / Feasibility Perspective

Implementation cost:
- Rule A: ~5–7 lines at Phase 0 / Dimension Construction (validate-dimensions sub-step) + 1-line cross-reference at Dimension Blindness failure mode.
- Rule B: ~5–8 lines at Phase 2 / Prosecution sub-section + 1-line cross-reference at Rubber-Stamping failure mode.
- Aggregate ~10–15 lines.

NEW ANCHOR: cost bounded; smallest aggregate among sister analyses (vs. sensemaking.md ~20 lines, innovate.md ~16–23 lines, explore.md ~25 lines).

### Definitional / Consistency Perspective

Consistency check against existing td-critique.md:
- Phase 0 / Dimension Construction has 5 sub-steps; Rule A extends the validate-dimensions sub-step. Adding a check ("verify project-specific risk axis coverage when applicable") refines the existing sub-step without contradicting it.
- Phase 2 / Adversarial Evaluation, Prosecution sub-section has 4 generic prompts. Rule B adds depth-axis enumeration alongside the existing prompts. Extension, not replacement.
- Failure mode #4 (Dimension Blindness) currently says "How to recognize: Hard to recognize during critique. Recognized retrospectively when a failure occurs on an axis that critique never considered." Adding cross-reference for project-specific risk axis coverage extends prevention without contradicting recognition.
- Failure mode #2 (Rubber-Stamping) currently addresses prosecution being "too weak." Adding cross-reference for multi-axis prosecution depth extends prevention by naming a specific structural strengthener.

CHECK: does Rule A contradict the existing "default dimensions modified per problem" framing? No — Rule A is a specific check WITHIN the modification process (verify project-specific risk axis coverage). The default dimensions remain default; the check is about extension when applicable.

CHECK: does Rule B contradict the existing 4 prosecution prompts? No — Rule B adds depth-axis enumeration alongside the existing prompts. Both apply.

NEW ANCHOR: rules **extend, don't replace** existing structure. No contradictions.

## SV3 — Multi-Perspective Understanding

Six perspectives reveal:
- **Logical/Technical:** both rules deterministic; observable compliance.
- **Human/User:** user's framing question fully answered.
- **Strategic:** rules portable beyond LOOP_DIAGNOSE via spec encoding.
- **Risk/Failure:** judgment-dependence mitigated by observable triggers; Self-Reference Collapse mitigated by external corpus grounding.
- **Resource/Feasibility:** smallest aggregate cost among sister analyses (~10–15 lines).
- **Definitional/Consistency:** extension-not-replacement; clean fit with existing failure modes.

The shift from SV2: stress-tested across all perspectives; Self-Reference Collapse defense confirmed.

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Should Rule A be at Phase 0 / "validate dimensions" sub-step OR as a new Phase 0 step?

**Strongest counter-interpretation:** add a new Phase 0 step ("Verify project-specific risk axis coverage when applicable") to make the check structurally distinct.

**Why the counter fails (structural grounds):** adding a new Phase 0 step expands the spec's process-model from 5 steps to 6, which is structurally heavy. The check is about COVERAGE within the existing dimension list — that's exactly what "validate dimensions" is for. The existing validate-dimensions sub-step already says: *"Are these the right axes for this problem? Is anything missing?"* Rule A makes "anything missing" specific to project-specific risk axes when applicable. The fit is structurally clean within the existing sub-step.

**Confidence:** HIGH (structural grounds: existing sub-step already covers "missing axes" generically; the rule specializes the check; no need for new step).

**Resolution:** Rule A's canonical home is Phase 0 / Dimension Construction, within the validate-dimensions sub-step.

**What is now fixed?** Rule A placement.
**What is no longer allowed?** Adding a new Phase 0 step from this analysis.
**What now depends on this choice?** Rule A wording integrates with validate-dimensions sub-step.
**What changed in the conceptual model?** Rule A is positioned as a specialization of an existing check, not a new operation.

### Ambiguity 2: Should Rule B be at Phase 2 / Prosecution sub-section OR at Phase 0 / Dimension Construction (as a "validate prosecution coverage" step)?

**Strongest counter-interpretation:** Phase 0. Prosecution depth-axes are about HOW to construct objections; Phase 0 derives the framework that Phase 2 applies. Putting depth-axes in Phase 0 makes them part of the framework upfront.

**Why the counter fails (structural grounds):** Phase 0 is about EXTRACTION (build the framework from sensemaking output). Phase 2 is about EVALUATION (apply prosecution + defense + collision). Depth-axes are an evaluation-time concern, not an extraction-time concern. Each candidate's prosecution is constructed in Phase 2; the depth-axis check belongs there. Putting it in Phase 0 would mix extraction and evaluation operations — a structural inconsistency with td-critique.md's two-operation model (Extraction vs. Evaluation).

**Confidence:** HIGH (structural grounds: td-critique.md explicitly separates Extraction from Evaluation; depth-axes apply to Evaluation).

**Resolution:** Rule B's canonical home is Phase 2 / Adversarial Evaluation, Prosecution sub-section.

**What is now fixed?** Rule B placement.
**What is no longer allowed?** Placing Rule B at Phase 0.
**What now depends on this choice?** Rule B wording integrates with the Prosecution sub-section.
**What changed in the conceptual model?** Rule B is at Evaluation, not at Extraction.

### Ambiguity 3: Should the cross-references be at failure modes (recommended) OR at additional surfaces (e.g., Coverage Strategy)?

**Strongest counter-interpretation:** add cross-references at multiple surfaces (failure modes + Coverage Strategy + Adversarial Structure overview) for maximum discoverability.

**Why the counter fails (structural grounds):** the placement convention prescribes ONE canonical home + ONE-LINE cross-reference at non-canonical surfaces where the rule connects. Multi-surface cross-references would bloat the spec and dilute the convention's effect (the prior `2026-05-07_22-54` finding established the multi-surface duplication concern). Failure modes are the natural cross-reference target because they're the failure-prevention surfaces; the rules' positive forms prevent specific failure modes (Dimension Blindness for Rule A; Rubber-Stamping for Rule B). Cross-references at other surfaces (Coverage Strategy, Adversarial Structure overview) would be either redundant or weakly connected.

**Confidence:** HIGH (placement convention precedent; structural fit with failure modes is clean).

**Resolution:** Rule A cross-reference at Dimension Blindness failure mode (one line). Rule B cross-reference at Rubber-Stamping failure mode (one line). No other cross-references.

**What is now fixed?** Cross-reference targets.
**What is no longer allowed?** Multi-surface cross-references from this analysis.
**What now depends on this choice?** The exact one-line text at each failure mode.
**What changed in the conceptual model?** Rules have minimal cross-reference footprint per the placement convention.

### Ambiguity 4: Should single-chain caveats (each individual dimension example or depth-axis sub-type is single-chain) be documented in the spec or only in finding?

**Strongest counter-interpretation:** document caveats in spec for transparency about evidence shape.

**Why the counter fails (structural grounds):** per the prior `2026-05-07_23-27` decision (Runtime-Purity Principle), maintenance-time concerns (caveats, evidence-strength annotations) live in finding only, not in runtime-loaded artifacts. Same precedent applied across all four sister analyses. The meta-rule has multi-chain evidence; individual examples are illustrative, not load-bearing.

**Confidence:** HIGH (precedent from prior decision + sister analyses).

**Resolution:** caveats in this finding's Refinement Triggers section, NOT in td-critique.md.

**What is now fixed?** Caveat placement.
**What is no longer allowed?** Caveats embedded in spec.
**What now depends on this choice?** Finding's Refinement Triggers section captures: meta-rule has 4-chain (Rule A) and 3-chain (Rule B) evidence; individual examples are single-chain; revival trigger if any meta-rule sub-pattern reaches a structurally distinct 4th sub-type that the rule's wording doesn't accommodate.
**What changed in the conceptual model?** Spec purity preserved.

### Ambiguity 5: Should the Self-Reference Collapse defense be documented inline in the rules' wording or only in the finding?

**Strongest counter-interpretation:** include the defense in the rules' wording so future runners see it.

**Why the counter fails (structural grounds):** Self-Reference Collapse is td-critique.md's existing failure mode #7. The defense (external grounding via corpus evidence) is already addressed in the spec's failure-mode entry: *"bring in external reference points... empirical evidence, cross-discipline evaluation, human judgment."* Adding inline defense in Rule A or Rule B would duplicate the existing failure-mode prescription and embed maintenance-time meta-content in runtime rules.

**Confidence:** HIGH (existing failure mode #7 already prescribes the defense; no new content needed).

**Resolution:** Self-Reference Collapse defense documented in this finding's Reasoning section (as part of the methodology defense), NOT in the rules' wording.

**What is now fixed?** Defense placement.
**What is no longer allowed?** Inline defense in rules' wording.

## SV4 — Clarified Understanding

After ambiguity collapse:
- **TWO for-sure-missing rules.** No more, no fewer.
- **Rule A** at Phase 0 / Dimension Construction, validate-dimensions sub-step; cross-reference at Dimension Blindness failure mode (#4).
- **Rule B** at Phase 2 / Adversarial Evaluation, Prosecution sub-section; cross-reference at Rubber-Stamping failure mode (#2).
- **No new failure modes introduced.**
- **Caveats in finding only, not in spec.**
- **Self-Reference Collapse defense in finding's Reasoning section, leveraging existing failure mode #7.**

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

1. TWO for-sure-missing rules.
2. Rule A canonical home: Phase 0 / Dimension Construction, validate-dimensions sub-step.
3. Rule A cross-reference: at Dimension Blindness failure mode (failure mode #4).
4. Rule B canonical home: Phase 2 / Adversarial Evaluation, Prosecution sub-section.
5. Rule B cross-reference: at Rubber-Stamping failure mode (failure mode #2).
6. No new failure modes.
7. Caveats / revival triggers in finding only.
8. Self-Reference Collapse defense via existing failure mode #7.
9. Speculative additions REJECTED: cross-corpus accumulator extensions, new failure modes, new disposition category, burden-of-proof shift extensions, accumulator field additions, default dimensions list extensions.

### Eliminated

1. Adding a new Phase 0 step.
2. Placing Rule B at Phase 0.
3. Multi-surface cross-references.
4. Inline Self-Reference Collapse defense in rules.
5. Embedding caveats / revival triggers in spec.
6. Adding cross-corpus composition rules.
7. Introducing new failure modes (e.g., Project-Risk-Blindness, Prosecution-Depth-Trap).
8. Adding new verdict dispositions (e.g., DEFERRED at Critique level).
9. Listing project-specific dimension examples in td-critique.md's default dimensions table.

### Remaining

1. Concrete wording for Rule A.
2. Concrete wording for Rule B.
3. Concrete cross-reference text at each failure mode.

## SV5 — Constrained Understanding

The constrained answer:

- **Rule A** = Project-specific risk dimension inclusion check at Phase 0 / Dimension Construction, validate-dimensions sub-step. Verifies the dimension list includes at least one project-specific risk dimension when the candidate set involves project artifacts, operations, or state. Cross-reference at Dimension Blindness failure mode.

- **Rule B** = Multi-axis prosecution depth check at Phase 2 / Adversarial Evaluation, Prosecution sub-section. Constructs prosecution at appropriate depth-axes (user-perspective; failure-case scenario; specification-gap probe) when applicable, in addition to dimension-level objections. Cross-reference at Rubber-Stamping failure mode.

- **Innovation's job:** generate concrete wording for both rules + cross-reference text at each failure mode.

- **Critique's job:** verify against for-sure criterion + corpus evidence; verify generic phrasing; verify placement convention applied; verify discipline-spec purity preserved; verify Self-Reference Collapse defense via external corpus grounding; verify rejection of speculative additions justified.

## Phase 5 — Conceptual Stabilization

### Stable Model

```
For-sure missing from homegrown/td-critique/references/td-critique.md
(the Structural Critique discipline spec; loaded by the MVL+ runner during
Critique execution): TWO rules.

RULE A — Project-specific risk dimension inclusion check
  Where: Phase 0 / Dimension Construction, validate-dimensions sub-step
  Trigger: dimension list is being validated; candidate set involves
           project artifacts, operations, or state
  Action: verify the dimension list includes at least one project-specific
          risk dimension capturing the project's documented risk axes;
          flag if missing
  Failure mode it prevents: Dimension Blindness (failure mode #4) — the
                            dimension list misses a category of risk
  Evidence: 4-chain × 4-dimension cross-cutting convergence (chain 1
            duplicate-derivable-state; chain 2 explicit-culture-fit;
            chain 3 operation-parsimony; chain 4 phase-fit). Promoted
            at chain 3 as M6's Critique sub-rule.
  Cross-reference: at Dimension Blindness failure mode (one line)

RULE B — Multi-axis prosecution depth check
  Where: Phase 2 / Adversarial Evaluation, Prosecution sub-section
  Trigger: prosecution being constructed against a candidate
  Action: in addition to dimension-level objections, construct prosecution
          at the appropriate depth-axes when applicable —
            (a) user-perspective objection (addresses user-stated concerns
                at the level expressed)
            (b) specific failure-case scenario (concrete edge case where
                the candidate's logic might fail)
            (c) specification-gap probe (for candidates with runtime-
                determined behavior, probe whether load-bearing concepts
                have specified determination mechanisms)
          The runner picks the depth-axes most relevant to the candidate's
          risk surface; not every axis applies to every candidate.
  Failure mode it prevents: Rubber-Stamping (failure mode #2) — when
                            prosecution is too weak. Multi-axis depth
                            check is one mechanism that strengthens
                            prosecution.
  Evidence: 3-chain × 3-sub-type cross-cutting convergence (chain 3
            user-perspective; chain 5 failure-case; chain 6 specification-
            gap). Promoted at chain 6 as TP3.
  Cross-reference: at Rubber-Stamping failure mode (one line)

Aggregate: ~10-15 lines added to td-critique.md. Smallest aggregate cost
among sister analyses.
```

### Action Framework

```
Decomposition: partition into pieces (Rule A + Rule B + cross-reference 1
               + cross-reference 2 + speculative-filter documentation +
               verification + Self-Reference Collapse defense).

Innovation: generate concrete wording per piece.

Critique: verify against for-sure criterion + corpus evidence; verify
          generic phrasing; verify placement convention applied; verify
          discipline-spec purity preserved; verify Self-Reference Collapse
          defense via external corpus grounding; verify rejections.
```

## SV6 — Stabilized Model

The Structural Critique discipline spec at `homegrown/td-critique/references/td-critique.md` (the spec loaded by the `/MVL+` runner during the Critique phase of the Extended Cognitive Loop) has TWO for-sure-missing rules per the corpus evidence from the seven LOOP_DIAGNOSE chain findings AND the chain inquiries' `docarchive/critique.md` outputs.

**Rule A — Project-specific risk dimension inclusion check.** When the dimension list is being validated at Phase 0 (Dimension Construction), verify that the list includes at least one project-specific risk dimension capturing the project's documented risk axes — applies when the candidate set involves project artifacts, operations, or state. The default 6 dimensions (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) are content-oriented; project-specific risk dimensions are mechanism-oriented (e.g., across LOOP_DIAGNOSE chains: duplicate-derivable-state, explicit-culture-fit, operation-parsimony, phase-fit). A dimension list that omits project-specific risk axes when applicable is incomplete. Evidence: 4 chains × 4 distinct dimensions converging on the meta-pattern; promoted at chain 3 as M6's Critique sub-rule.

**Rule B — Multi-axis prosecution depth check.** When constructing prosecution against a candidate at Phase 2 (Adversarial Evaluation, Prosecution sub-section), in addition to dimension-level objections, explicitly construct prosecution at the appropriate depth-axes when applicable: (a) user-perspective objection — read the source input (e.g., `_branch.md` Source Input where applicable) and construct at least one objection that addresses a user-stated concern at the level expressed; (b) specific failure-case scenario — for candidates with conditional behavior, construct at least one edge case where the candidate's logic might fail; (c) specification-gap probe — for candidates with runtime-determined behavior, probe whether load-bearing concepts have specified determination mechanisms. The runner picks the depth-axes most relevant to the candidate's risk surface; not every axis applies to every candidate. Prosecution that constructs only dimension-level objections without considering relevant depth-axes is shallow. Evidence: 3 chains × 3 distinct sub-types converging on the meta-pattern; promoted at chain 6 as TP3.

**Placement** per the convention at `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md`:
- Rule A canonical home: Phase 0 / Dimension Construction, validate-dimensions sub-step. Cross-reference: at Dimension Blindness failure mode (failure mode #4) — one-line pointer.
- Rule B canonical home: Phase 2 / Adversarial Evaluation, Prosecution sub-section. Cross-reference: at Rubber-Stamping failure mode (failure mode #2) — one-line pointer.

**Speculative additions explicitly REJECTED** with structural justification:
- **Cross-corpus accumulator extensions / cumulative refinement tracking** — LOOP_DIAGNOSE-protocol-specific; corpus-/protocol-level concerns belong elsewhere.
- **New failure modes** (Project-Risk-Blindness, Prosecution-Depth-Trap) — positive-form rules at process steps are sufficient; existing failure modes (Dimension Blindness, Rubber-Stamping) provide clean cross-reference targets; sister-analysis precedent of not introducing new failure modes.
- **DEFERRED disposition at Critique's verdict layer** — Critique already has SURVIVE / REFINE / KILL with constructive output; the corpus's emergent DEFERRED applies to Innovation's output disposition (covered by innovate.md's Rule B from sister analysis), not to Critique's verdict.
- **Burden-of-proof shift extensions** — corpus uses current shift mechanism (low-stakes vs. high-stakes) and it works.
- **Accumulator field additions** — no corpus evidence of accumulator-level failures.
- **Listing project-specific dimension examples in default dimensions table** — would be project-specific bloat; placement convention prefers canonical home + cross-reference.

**Single-chain caveats** for individual sub-instances within each rule's meta-pattern (each specific dimension or depth-axis sub-type is single-chain; the meta-pattern is multi-chain) documented in this finding's Refinement Triggers section, NOT in `td-critique.md` — discipline-spec purity preserved per the prior `2026-05-07_23-27` decision.

**Self-Reference Collapse defense** — this analysis evaluates Critique's spec using Critique's discipline. The defense, per td-critique.md's existing failure mode #7 prescription, is external grounding: dimensions for this analysis are extracted from the sensemaking output (constraints + foundational principles + corpus evidence), not from td-critique.md itself. The 7-chain corpus is external empirical evidence. The verdict's prosecution genuinely tested objections (judgment-dependence, over-specification, premature codification); the defense survived. Self-Reference Collapse mitigated.

The shift from SV1: rule placement granularity decided (sub-step level for Rule A; sub-section level for Rule B); cross-reference targets identified (Dimension Blindness for A; Rubber-Stamping for B); structural fit with existing failure modes confirmed; Self-Reference Collapse defense grounded. The result is bounded (~10–15 lines aggregate added to td-critique.md — smallest cost among sister analyses), evidence-rich (4-chain + 3-chain corpus convergence), generic, and actionable.
