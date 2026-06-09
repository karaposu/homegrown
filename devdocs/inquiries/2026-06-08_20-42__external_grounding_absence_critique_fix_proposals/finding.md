---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: External-Grounding Absence — Critique Fix Proposals

## Question

What is the underlying structural mechanism of "External-Grounding Absence" — the fourth failure type catalogued in `devdocs/top_7_common_critique_failures.md` — and what are at least three structurally-distinct solution proposals (surgical / additional / significant) for amending `cognitive_harness/td-critique/references/td-critique.md` (the Structural Critique discipline spec) AND possibly `cognitive_harness/innovate/references/innovate.md` (where the mechanism-independence concept lives) that would fix it, with explicit plus/minus trade-off analysis per proposal AND four-way compositional analysis with the proposals from the three just-completed sibling inquiries (Axis Absence at `devdocs/inquiries/2026-06-08_17-43__axis_absence_critique_fix_proposals/finding.md`, Inherited-Frame Preservation at `devdocs/inquiries/2026-06-08_19-10__inherited_frame_preservation_critique_fix_proposals/finding.md`, and Label-Tested Substance-Untested at `devdocs/inquiries/2026-06-08_20-00__label_tested_substance_untested_critique_fix_proposals/finding.md`), AND a META-LOOP test of whether the prior three siblings' Critique convergence claims rest on external grounding?

**Goal.** Concrete, retroactively-testable, tier-honest, trade-off-honest, four-way-composable proposals — AND an honest META-LOOP assessment of whether the prior three sibling findings' convergence claims survive External-Grounding-Absence scrutiny. The proposals must demonstrate the very external-grounding property they propose to require (META-LOOP self-applying constraint).

---

## Update Note (added 2026-06-09)

**This finding has been updated to integrate findings from a later inquiry chain on discipline-spec text organization.** The relevant updates affect Tier 2 (ADD/REPAIR sub-variants), Tier 3 (the hook-table dispositions), the variant count, and the meta-question composability concern.

**The triggering inquiries:**

- **`devdocs/inquiries/2026-06-09_17-04__discipline_spec_text_organization_patterns_catalog/finding.md`** — produced a content-type → pattern mapping framework recommending Hybrid overview+detail for enumerated catalogs.
- **`devdocs/inquiries/2026-06-09_18-30__per_phase_placement_failure_modes_with_distinguishing_header/finding.md`** — refined the framework with a new content-type **"phase-affined operational guidance"** for failure modes specifically. The recommended pattern is **per-phase placement** (failure modes inline at the phase where they fire, using the refinement-note prefix pattern) + **thin §4 overview table** + **cross-cutting end-section** for modes without single-phase affinity.

**Why this fires Refinement Trigger #4 from this finding's Open Questions section** (*"4-way composition matrix's recommended adoption sequences. Triggers re-open if a 5th sibling inquiry joins the matrix; the matrix becomes 5-way and the recommended sequences need re-derivation"*). The per-phase-placement framework refinement is not a 5th sibling inquiry per the original framing (it's a meta-pattern inquiry on discipline-spec organization that grew out of the conversation about this and prior siblings' Tier 3 dispositions), but it materially affects this finding's structural commitments and needs integration.

**Scope of update — what changes and what doesn't:**

| Aspect of this finding | Change |
|---|---|
| Tier 1 (Surgical) refinement notes at Phase 0/2/4 | **UNCHANGED.** Refinement notes are positive checks (action), placed per-phase per the EXISTING spec convention. This finding's Tier 1 already follows per-phase placement. |
| Tier 2 (a) ADD #11 entry at §4 | **REFRAMED.** Under per-phase placement, ADD now means: per-phase failure-mode block at Phase 4 (where External-Grounding-Absence fires — Convergence Telemetry) + a row in the thin §4 overview table. The "#11" numbering convention is preserved for cross-spec reference but the entry's primary location is at Phase 4, not at §4. |
| Tier 2 (b) REPAIR #7 Self-Reference Collapse | **REFRAMED.** Under per-phase placement, #7 lives in the **cross-cutting failure modes end-section** (#7 is cross-cutting; not single-phase affined). REPAIR #7 now modifies the cross-cutting block, not a §4 entry. The SCOPE-BROADENING substance is preserved unchanged. |
| Tier 3 ADOPT (4-coord cumulative hook-table) | **DROPPED.** Not applicable. There is no §4 hook-table under per-phase placement; the failure modes are distributed inline at their phases. The composability-upper-limit concern at 4 coordinates becomes structurally moot. |
| Tier 3 REORG (4 mini-tables) | **SUBSUMED.** Per-phase placement IS the structurally-correct organizing pattern that the mini-tables proposal was reaching toward. The "4 mini-tables, one per coordinate" idea becomes "failure modes distributed across phases" — but the abstract coordinates (dimension space / inherited frame / evaluation level / grounding type) don't map cleanly to the discipline's phases. The simpler, structurally-honest answer is per-phase placement using the discipline's actual phase structure as the coordinate. |
| Tier 3 DEFER | **REFRAMED.** Now means "don't apply per-phase placement; keep the current linear §4 structure unchanged." DEFER still preserves the option for users who prefer the current organization. |
| Variant count | **9 → 7.** Tier 1 SS/CS (2) + Tier 2 ADD-SS/CS (2) + Tier 2 REPAIR-SS/CS (2) + Tier 3 DEFER (1) = 7. The two Tier 3 dispositions (ADOPT, REORG) collapse into "apply the per-phase placement framework refinement." |
| §10 Meta-question evolution | **RESOLVED.** The 4-coordinate composability upper limit concern is structurally moot under per-phase placement. Each phase has its own implicit "what failures fire here?" — there is no cumulative multi-coord meta-question to maintain. |
| Composition matrix (§9) | **SIMPLIFIED.** The 4-way matrix's 648 theoretical cells shrink because this inquiry's Tier 3 dispositions collapse to 1. |
| META-LOOP test (§7) | **UNCHANGED.** Per-phase placement doesn't affect the PARTIAL-SURVIVE finding for the prior 3 siblings. |
| Sub-mechanism taxonomy (§2) | **UNCHANGED.** |
| Mechanism-Independence Quarantine Mechanic (§6) | **UNCHANGED.** Quarantine state still fires at Phase 4; per-phase placement reinforces this since Phase 4 is where the Quarantine block lives. |

**Why this is a refinement, not a contradiction.** The original Tier 3 dispositions were correct given the framework available at the time (hook-table organizing pattern as the candidate for restructure). The per-phase-placement framework refinement provides a structurally-cleaner organizing pattern that supersedes the hook-table dispositions for failure-mode content. The original analysis remains valid for its frame; the update supersedes the frame.

**The user's intuition from a prior conversation — that per-phase placement is the correct way for failure modes — was structurally vindicated** (see the triggering inquiry's finding). This update propagates that vindication into this finding's Tier 2 and Tier 3 sections.

The Update Note above is the load-bearing locus for the integration. Specific sections affected are flagged with **"(updated 2026-06-09)"** markers inline where the changes apply.

---

## Update Note 2 — Discipline-purity refit (added 2026-06-09)

**Trigger.** `docs/canon/thinking_disciplines/how_a_discipline_should_be.md` states that a discipline's runtime canonical spec (`cognitive_harness/<discipline>/references/<discipline>.md`) must describe what the discipline IS as a standalone cognitive operation — readable in isolation, without provenance attributions, without cross-discipline citations, without inquiry-architecture scaffolding, without deferred-future references.

**Audit result.** Several of this finding's PER-PHASE-PLACEMENT-ADOPT-scenario recommendations directed the editor of `td-critique.md` to insert content that would violate that canon. The violations and corrections:

| Violation site | What was wrong | Correction |
|---|---|---|
| Tier 1 SS variant description (§4) | Said "**SS variant.** Within-`td-critique.md` only; cites `/innovate`'s Artifact-grounding refinement note (Phase 3 Test, lines 583-589) as cross-discipline precedent." | The spec edit must NOT cite `/innovate` or any other discipline. Cross-discipline reference belongs in the finding's reasoning record, not in the runtime spec. SS variant is "within-`td-critique.md` only" — period. |
| Tier 1 trade-off "META-LOOP self-grounding fidelity" axis (§4) | Said STRONG because the spec edit "cites /innovate Artifact-grounding refinement note as PRIMARY external anchor". | META-LOOP self-grounding is a finding-layer property (does the finding's reasoning demonstrate external grounding?), not a spec-edit property. The axis is preserved as a finding-quality assessment; it does NOT translate into a "cite /innovate inside the spec" instruction. |
| Tier 1 Phase 0 refinement note text (§4) | Final sentence read "this is the load-bearing META-LOOP self-grounding mitigation at Phase 0 construction time." | "META-LOOP self-grounding mitigation" is inquiry-architecture scaffolding language. Strip the final sentence. The operational rule (the triage by claim type + the requirement of ≥1 external-anchor dimension) stays unchanged. |
| Tier 1 "External grounding" provenance block (§4) | Listed `/innovate` Artifact-grounding refinement note + sensemaking Load-bearing concept test + #7 existing language + 7 corpus instances as the proposal's external anchors. | This provenance is finding-reasoning content (it argues for the proposal). It stays as finding content but does NOT translate into citation-attribution sentences inside `td-critique.md`. Re-tagged as finding-layer reasoning. |
| Tier 2 (a) ADD content "Cross-references" line (§4) | Contained "Cross-failure-interaction with #5 Scope-Mismatch (future): canonical source exists at scope X, critique evaluates at scope Y." | "Scope-Mismatch (future)" is a deferred-future-failure-mode reference. The canon strips "references to deferred future versions of this discipline." Drop the line. The remaining cross-references to #1 and #7 (both intra-discipline) stay. |
| Tier 2 sub-sub-variant list (§4 — items 240-243) | Listed "(a) ADD-SS: ADD #11 + cite /innovate Artifact-grounding refinement note" and "(b) REPAIR-SS: REPAIR #7 SCOPE-BROADENING + cite /innovate" | Drop "+ cite /innovate" from the SS variants. SS = "within-`td-critique.md` only"; no `/innovate` citation in the spec. Re-tagged. |
| MUST item — "cite /innovate as PRIMARY external anchor" (Next Actions) | Directed the editor of `td-critique.md` to "cite `/innovate`'s Artifact-grounding refinement note (Phase 3 Test, lines 583-589) as the PRIMARY external anchor". | Reframed: the META-LOOP self-grounding lives at the finding-reasoning layer (this finding's own argument demonstrates external grounding by citing `/innovate` as cross-discipline precedent in its analysis). The spec edit does NOT carry the citation forward. |

**Net effect on PER-PHASE-PLACEMENT-ADOPT scope.** The framework restructure (Layer 1) and the EGA content (Layer 2) remain as previously described, with the violation-site corrections applied. Specifically: (a) the SS variant edit text to `td-critique.md` is pure — no `/innovate` reference; (b) the Phase 0 refinement note's final sentence is dropped; (c) the EGA failure-mode block's "#5 Scope-Mismatch (future)" cross-reference is dropped; (d) the MUST item about `/innovate` citation is reframed as finding-layer obligation, not spec-edit obligation.

**The CS variants drop out of the PER-PHASE-PLACEMENT-ADOPT scope.** User-directive: "we don't care about `/innovate`." CS variants (Tier 1 CS, Tier 2 ADD-CS, Tier 2 REPAIR-CS) and the CROSS-SPEC-DEEP scenario were described as touching `/innovate.md`'s Artifact-grounding refinement note. They are dropped from the active recommendation set for the PER-PHASE-PLACEMENT-ADOPT scenario. The SS variants are sufficient and are pure (no cross-spec citation). The CS variants remain in the document as historical record but are NOT-RECOMMENDED for this adoption path.

**What stays pure and unchanged in the spec edits:**

- Layer 1 framework restructure (relocate 8 existing modes to per-phase blocks; thin §4 overview; cross-cutting end-section) — pure structural reorganization of `td-critique`'s own content.
- Phase 0 operational rule (require ≥1 external-anchor dimension for claims with potential external anchors; exempt internal-consistency claims; claim-type triage) — pure discipline operation. Strip the "META-LOOP self-grounding mitigation" tail sentence.
- Phase 2 5th sub-axis (external-anchor sub-axis joining the existing 4) — pure.
- Phase 4 Mechanism-Independence Quarantine refinement note (verdict adjective, quarantine state, lift criteria) — pure.
- §3.5 Accumulator field (`mechanism_independence_status` with `validated` / `quarantined` values) — pure.
- §4 thin overview row for EGA — pure.
- EGA failure-mode block (definition + recognition + 6 sub-mechanisms + prevention + intra-discipline cross-references to #1, #7) — pure after stripping the "#5 Scope-Mismatch (future)" line.

The MUST items REFINE-A3-SS (claim-type triage) and REFINE-A6 (lift criteria) remain MUST and remain pure — they're operational rules that fold into the Phase 0 and Phase 4 refinement notes' bodies.

---

## Finding Summary

- **The mechanism is a FOUNDATIONAL-ASSUMPTION-VIOLATION about evidence-epistemology:** mechanism-independence as evidence-of-robustness is illusory when all mechanisms share the same structural-argument frame. The violation operates at a different LEVEL of structural critique than the prior three sibling patterns: AA at completeness, IFP at frame, Label-Tested at empirical signature, this inquiry at evidence epistemology.

- **Structurally, this failure is the FOURTH distinct structural relationship pattern** in the series. It is NOT precondition-violation (within or cross-spec) and NOT inverse-companion-pair. It is a **FOUNDATIONAL-ASSUMPTION-VIOLATION** about WHAT COUNTS AS EVIDENCE OF ROBUSTNESS. The 4 patterns operate at 4 different levels of structural critique.

- **Distinct from #7 Self-Reference Collapse — STRUCTURALLY CRISP.** #7 fires when the SUBJECT of critique IS critique itself (special case); #4 (this) fires when ANY critique relies on structural-argument convergence regardless of subject (general case). Different TRIGGERS + different MECHANISMS; can co-fire. Empirically verified via corpus instance 11-23 STANDALONE (which is #4 but not #7 because the subject isn't critique-on-critique).

- **Six sub-mechanisms + one meta-instance** taxonomy: (1) canonical-source-text-not-quoted; (2) project-wide-canon-not-cross-checked (cross-fails with #1 Inherited-Frame Preservation per top_7 cross-failure-interactions); (3) discipline-spec-literal-text-not-quoted; (4) user-stated-anchor-not-used-as-constraint-test; (5) canonical-pattern-template-not-applied (cross-fails with Label-Tested at different layer); (6) candidate-set-internal-disambiguation-impossible-without-external-anchor (the missing-tie-breaker sub-mechanism from 22-10 vs 23-15 — structurally distinct sub-shape); meta-instance 00-51 ← 13-23 (self-named project-process meta-observation, evidence of the failure pattern itself).

- **The intervention surface is PRIMARILY within `td-critique.md`** with a SECONDARY cross-spec option to `/innovate.md` broadening its existing Artifact-grounding refinement note's trigger (the IFP single-spec/cross-spec sub-axis RETURNS here, NOT applicable to Label-Tested which was within-only). `/innovate`'s Artifact-grounding refinement note (Phase 3 Test, lines 583-589) is the DIRECT cross-discipline precedent — `/innovate` already operationalizes External-Grounding at its side; `/td-critique`'s missing mirror is exactly the gap External-Grounding-Absence catches.

- **Four structurally-distinct fix proposals carry forward**, with cumulative respect for tier-shape vocabulary from prior 3 inquiries (AA §10 + IFP §10 + Label-Tested §3) and a NEW 4th clarification: both SS/CS sub-axis AND ADD/REPAIR sub-axis apply together (the FIRST inquiry where both sub-axes apply together producing 2×2=4 Tier 2 sub-sub-variants).

  - **Tier 1 (Surgical)** — 3-insertion-point unified refinement notes: Phase 0 require-≥1-external-anchor-dimension + Phase 2 extend-Multi-axis-prosecution-depth-with-external-anchor-sub-axis + Phase 4 Mechanism-Independence Quarantine state + verdict label. SS variant (within-`td-critique.md` only — pure; no cross-discipline citation in the spec edit) and CS variant (+ `/innovate` trigger broadening). **(Updated 2026-06-09)** Per Update Note 2 (discipline-purity refit), the SS variant carries NO `/innovate` citation in the inserted spec text. The CS variant is NOT-RECOMMENDED per user directive (out of scope: "we don't care about `/innovate`").

  - **Tier 2 (Additional)** — 4 sub-sub-variants, pick ONE: (a) ADD new entry #11 "External-Grounding Absence" in §4 (SS or CS); (b) REPAIR existing #7 Self-Reference Collapse via SCOPE-BROADENING — extending #7's scope from critique-on-critique special case to ANY-critique general case (SS or CS). The (b) REPAIR sub-variant is structurally MORE SUBSTANTIAL than Label-Tested's analogous REPAIR sub-variant (which was note-attachment to #3 Nitpicking) because it broadens the existing failure mode's scope, not just attaches.

  - **Tier 3 (Significant)** — 3 dispositions: ADOPT-4-coord cumulative (NOT RECOMMENDED — composability upper limit definitively crossed per Label-Tested finding §8 warning at 3-coord); **REORGANIZE** (split cumulative hook-table into 4 mini-tables, one per coordinate — recommended Tier 3); DEFERRED with revival trigger.

- **NEW substrate piece: Mechanism-Independence Quarantine Mechanic.** Structural state (accumulator field + verdict adjective "structurally-grounded only — confidence reduced; mechanism-independence claim quarantined until external evidence cites") + minimum process specification (trigger at Phase 4 Convergence Telemetry when NO surviving candidate's evidence cites ≥1 external-anchor sub-type; lift requires explicit re-evaluation providing such evidence; does NOT auto-lift over time). This is the partial-process-layer component the Layer Commitment anticipated. No prior sibling had this piece.

- **META-LOOP test of prior 3 siblings: PARTIAL-SURVIVE.** The honest cell-by-cell per-sibling per-sub-type accounting shows that all 3 prior siblings' Critique-convergence claims rest on:
  - **2 STRONG sub-types** (canonical source text via td-critique.md spec citations + empirical artifact via 9/6/6 corpus instances) ✓
  - **1 PARTIAL sub-type** (cross-discipline precedent used structurally as analogy, not empirically as test result)
  - **1 phase-DEFERRED sub-type** (downstream-consumer behavior, genuinely unobservable until prior siblings' proposals are implemented and observed in actual use)

  This is HONEST PARTIAL-SURVIVE — not whitewash, not strawman. The phase-deferred sub-type IS a genuine gap, but it's a phase-dependent gap (per sensemaking's Phase/Calibration-State perspective), not a failure of prior 3 inquiries' rigor.

- **A per-scenario picker** chooses among the 9 variants based on context (MINIMUM-COST / VOCABULARY-DISTINCT / SCOPE-BROADENING-PREFERRED / CROSS-SPEC-DEEP / CUMULATIVE-DEEP). A **4-way cross-inquiry composition matrix** with the 3 prior siblings' proposals provides cross-inquiry navigation; 5 recommended adoption sequences (MINIMAL ~110 lines / MID-COST-VOCABULARY-DISTINCT ~195 lines / MID-COST-SCOPE-BROADENING ~170 lines / CROSS-SPEC-DEEP +~30 to /innovate / CUMULATIVE-DEEP-REORG ~350 lines).

- **Three REFINES from Critique are folded in.** (Detailed in §5 below.)

- **(Updated 2026-06-09) The per-phase placement framework refinement supersedes Tier 3's hook-table dispositions for this inquiry.** Under per-phase placement (the recommended pattern for failure-mode content), Tier 3 ADOPT (4-coord cumulative hook-table) is NOT APPLICABLE because there's no central §4 hook-table to extend; Tier 3 REORG (4 mini-tables) is SUBSUMED because per-phase placement IS the structurally-correct organizing pattern for failure modes that the mini-tables proposal was reaching toward (the discipline's actual phases serve as the natural coordinates, not abstract dimension-space / inherited-frame / evaluation-level / grounding-type coordinates). Variant count reduces from 9 to 7. The 4-coordinate meta-question composability upper limit concern is structurally moot. See the Update Note above for the full scope of changes.

- **(Updated 2026-06-09) Tier 2 ADD #11 is reframed as a per-phase failure-mode block at Phase 4.** Under per-phase placement, the new failure-mode entry's primary location is at Phase 4 (where Convergence Telemetry runs and where the Mechanism-Independence Quarantine fires) using the refinement-note prefix pattern (`*Failure mode (recognizable at Phase 4 Coverage + Convergence Assessment):*` + `**External-Grounding Absence.**` + body), plus a row in the thin §4 overview table (4 columns: # / Name / Fires at / Inverse-of). Tier 2 (b) REPAIR #7 is reframed similarly: #7 lives in the cross-cutting failure modes end-section, so REPAIR modifies the cross-cutting block. The SS/CS sub-axis and ADD/REPAIR sub-axis still apply (4 sub-sub-variants preserved).

---

## Finding

This inquiry is the FOURTH in a series of deep-dives into the top-7 critique failures, after Axis Absence (failure type #2), Inherited-Frame Preservation (failure type #1), and Label-Tested Substance-Untested (failure type #3). The series proposes concrete edits to `cognitive_harness/td-critique/references/td-critique.md` — the discipline spec for `/td-critique` (Structural Critique), the discipline that evaluates ideas/plans/outputs adversarially and produces SURVIVE / REFINE / KILL verdicts. The 7 External-Grounding-Absence instances come from the 48-pair correction-chain corpus at `devdocs/100_critique_correction_chain_analysis.md`.

This inquiry is structurally distinct from the prior 3 in three important ways:
1. **THE most self-referentially-fraught of the 4 inquiries** — the failure being investigated specifically targets the structural-argument convergence the inquiry's own analysis relies on. The META-LOOP self-applying constraint is critical: proposals must demonstrate the very external-grounding property they propose to require.
2. **FIRST inquiry with BOTH SS/CS sub-axis AND ADD/REPAIR sub-axis applying together** — this produces 4 Tier 2 sub-sub-variants and a NEW 4th cumulative tier-shape clarification.
3. **Includes an integrated META-LOOP analysis piece (P7)** testing whether the prior 3 sibling findings' Critique-convergence claims survive External-Grounding-Absence scrutiny. The honest finding is PARTIAL-SURVIVE.

### 1. The mechanism — what makes External-Grounding-Absence distinct

External-Grounding-Absence is the failure where `/td-critique` evaluates candidates by **internal structural-argument convergence** (multiple critique dimensions converge on the same verdict) WITHOUT testing against **external grounding** (evidence outside the inquiry's reasoning). The corrective requires at least one dimension to demand an external anchor in one of 3 sub-types:

- **(a) Canonical source text** — the literal text of a specific document with quotable content.
- **(b) Empirical artifact** — an observable file / configuration / state / outcome.
- **(c) Downstream-consumer behavior** — verifiable observation of what consumers actually do with the output.

When no external anchor is available, the verdict is flagged "structurally-grounded only" and **Mechanism-Independence Quarantine** state applies (deeper detail in §6 below).

**The structural insight: mechanism-independence becomes illusory when all mechanisms share a structural-argument frame.** `/innovate`'s Phase 3 Test (line 566) treats mechanism-independence as evidence of robustness ("if you reach the same conclusion through a different mechanism, it's robust"). But if all "different mechanisms" share the same structural-argument frame (e.g., all are forms of internal-consistency arguments), they're not actually independent — they're variations of the same mechanism. The convergence is then SPURIOUS, not robust.

**Distinctness from existing failure modes (confirmed; not collapsed):**

| Existing mode | Distinct because... |
|---|---|
| **#7 Self-Reference Collapse** | Different TRIGGERS + different MECHANISMS. #7 fires when SUBJECT of critique is critique itself (critique-on-critique special case); #4 fires when ANY critique relies on structural-argument convergence regardless of subject. Different MECHANISMS: #7's mechanism is CIRCULARITY of self-evaluation; #4's mechanism is EVIDENCE-EPISTEMOLOGY of structural-argument convergence. The two can co-fire (critique-on-critique using only structural-argument convergence triggers BOTH). Empirically verified: corpus 11-23 STANDALONE is #4 but NOT #7 (subject isn't critique-on-critique). |
| **#5 False Convergence** | DIFFERENT CONCERN: #5 is about premature termination (loop converges too early); #4 is about convergence resting on wrong evidence type (structural-argument vs external). Different MECHANISMS. |
| Axis Absence (sibling) | DIFFERENT LEVEL: AA is within-spec precondition-violation at the COMPLETENESS level. #4 is at the EVIDENCE-EPISTEMOLOGY level. |
| Inherited-Frame Preservation (sibling) | DIFFERENT LEVEL: IFP is cross-spec precondition-violation at the FRAME level. |
| Label-Tested Substance-Untested (sibling) | DIFFERENT LEVEL: Label-Tested is inverse-companion-pair at the EMPIRICAL-SIGNATURE level. |

**The four-level structure of failure modes:**

| Pattern | Sibling | Level of structural critique |
|---|---|---|
| Within-spec precondition-violation | Axis Absence | COMPLETENESS (what pieces are missing within a spec) |
| Cross-spec precondition-violation | Inherited-Frame Preservation | FRAME (what upstream contracts are not preserved by downstream consumers) |
| Inverse-companion-pair | Label-Tested Substance-Untested | EMPIRICAL SIGNATURE (kill-rate vs survive-rate inversion at same locus) |
| **Foundational-assumption-violation** | **External-Grounding-Absence (this)** | **EVIDENCE EPISTEMOLOGY (what counts as evidence of robustness)** |

The natural hypothesis on entering this inquiry was that External-Grounding-Absence would extend the precondition-violation pattern at a third layer (a deeper cross-spec). Sensemaking tested this rigorously and rejected it: External-Grounding-Absence is a NEW structural relationship pattern — FOUNDATIONAL-ASSUMPTION-VIOLATION at a DIFFERENT LEVEL of structural critique than the three prior patterns.

### 2. The six sub-mechanisms + one meta-instance

The 7 corpus instances consolidate to 6 sub-mechanisms + 1 meta-instance:

**(1) NAME canonical-source-text-not-quoted.** The dimension tests a candidate's framing without consulting the canonical source text that defines the framing's referent. *Corpus: 15-20 ← 02-00 — Q10's pollution-vs-gating-vs-labels framing tested as a tradeoff space without reading `docs/desc.md`'s actual text (which named Baldwin's seed source as `/intuit` Phase β+ hunches, not routeman emissions).*

**(2) PROJECT-WIDE-CANON not-cross-checked.** The dimension tests within a single spec's vocabulary without cross-checking project-wide canon governing all disciplines. *Corpus: 19-00 ← 20-35 — six "identity anchors" were loop-compatibility-biased readings within routeman's own spec; canon line 109 governing all disciplines never consulted.* (Cross-fails with #1 Inherited-Frame Preservation per top_7 cross-failure-interactions section.)

**(3) DISCIPLINE-SPEC-LITERAL-TEXT not-quoted.** The dimension tests a candidate against a discipline-spec's pattern without reading the spec's literal sentence. *Corpus: 05-30 ← 13-31 — three-axis distinctness props for UNDERSTAND passed without reading the sensemaking spec's literal sentence that already names its first operation's output as "understanding."*

**(4) USER-STATED-ANCHOR not-used-as-constraint-test.** The dimension tests a candidate without using the user's explicit stated anchor as a constraint test. *Corpus: 14-39 ← 16-31 — user's explicit endgame (multi-head + isolated routeman) was named but not used as a constraint test against "in-context consumption" framing.*

**(5) CANONICAL-PATTERN-TEMPLATE not-applied.** The dimension tests a candidate without applying an existing canonical pattern template that the candidate's referent should match. *Corpus: 11-23 STANDALONE — the routeman.md/_route.md naming template existed but wasn't used as an elevate-and-name check on the routelister design.* (Cross-failure overlap with Label-Tested inquiry's sub-mechanism (5) ARTIFACT-TYPE at a different layer; both diagnoses load-bearing.)

**(6) CANDIDATE-SET-INTERNAL-DISAMBIGUATION impossible-without-external-anchor (missing tie-breaker).** The dimension produces multiple defensible verdicts based on weighting choice; no external anchor exists to disambiguate. *Corpus: 22-10 vs 23-15 — same dimensions, same artifacts, opposite verdicts based on weighting choice; two defensible weight-derivations both passed the same dimensions.* This is the STRUCTURALLY DISTINCT sub-mechanism shape — missing tie-breaker rather than missing source — but it's the same failure mode (no external anchor available).

**META-INSTANCE: project-process meta-observation.** *Corpus: 00-51 ← 13-23 — 8 Innovation mechanisms + 13 Critique dimensions converged on cutting Movement and Unlocks via Absence Recognition / derivability framings; NONE tested against the real 2026-05-25 readiness Route Map artifact; **self-named "confidently-wrong-structural-convergence-when-no-empirical-test-applied" as project-process meta-observation, explicitly flagged for /reflect promotion at N≥3** (but /reflect is in `cognitive_harness/non-active/`, so the flag does not currently fire).* This is the META-INSTANCE because the corpus pair SELF-NAMES the failure pattern; it's evidence of the failure pattern itself, not a 7th sub-mechanism.

The 7 corpus instances cover all 6 sub-mechanisms with the meta-instance addressing the project-process pattern.

### 3. Tier-shape vocabulary (4 cumulative clarifications)

The cumulative tier-shape vocabulary now carries FOUR clarifications:

- **(1)** Tier 1 / Tier 2 / Tier 3 = STRUCTURAL EDIT SHAPES, not ranked recommendations (per AA finding §10). Tier 1 = refinement-note; Tier 2 = new top-level structure (new failure-mode entry); Tier 3 = restructure organizing pattern.

- **(2)** Single-spec vs cross-spec = SPEC-COUNT SUB-AXIS within each tier (per IFP finding §10). Applies when the intervention surface spans multiple specs.

- **(3)** Tier 2 sub-variant (a) ADD-new-entry vs (b) REPAIR-existing-entry = INTERVENTION-SHAPE SUB-AXIS within Tier 2 (per Label-Tested finding §3). Applies because `td-critique.md` §4's organizing pattern accommodates both shapes.

- **(4) NEW this inquiry.** Both SS/CS sub-axis AND ADD/REPAIR sub-axis apply TOGETHER. In External-Grounding-Absence, Tier 2 has 2×2 = 4 sub-sub-variants (ADD-SS / ADD-CS / REPAIR-SS / REPAIR-CS) because the intervention surface spans both within-`td-critique.md` operations AND cross-spec broadening of `/innovate`'s Artifact-grounding refinement note. The both-sub-axes-apply case is GENUINELY NEW (prior 3 sibling inquiries had at most one sub-axis applying).

- **(5) NEW from 2026-06-09 framework refinement.** A new content-type **"phase-affined operational guidance"** applies to failure modes. The recommended pattern is **per-phase placement** (failure modes inline at the phase where they fire, using the refinement-note prefix pattern `*Failure mode (recognizable at Phase X):*` + `**Mode name.**` + body) + **thin §4 overview table** (4 columns: # / Name / Fires at / Inverse-of) + **cross-cutting failure modes end-section** for modes without single-phase affinity. This refinement supersedes the prior frame in which Tier 3 dispositions proposed a §4 hook-table restructure; under per-phase placement, the hook-table is replaced by the discipline's existing phase structure as the natural organizing coordinate. See the Update Note above for the full scope of changes; affected sections (§4 Tier 2, §4 Tier 3, §8 picker, §9 matrix, §10 meta-question evolution) carry `(updated 2026-06-09)` markers inline.

These clarifications are **navigational dimensions inside the tier-ladder, not separate tiers**. The picker (§6 below) navigates across tier × sub-variant × SS/CS × disposition.

### 4. The fix proposals (with corpus retroactive-test, trade-off analysis, four-way sibling composition)

Each proposal includes: mechanism + spec location + sub-mechanism coverage + corpus retroactive test (≥4 of 6 sub-mechanisms + meta-instance) + trade-off analysis on the 5 inherited axes + META-LOOP self-grounding fidelity + external grounding (`/innovate` Artifact-grounding refinement note as PRIMARY anchor + sensemaking Load-bearing concept test as cross-discipline precedent + #7 existing language as adjacent-mode precedent + 7 corpus instances as empirical) + composition with the 3 prior siblings.

The 5 trade-off axes (inherited from prior siblings + 1 inquiry-specific):
1. Prevention leverage
2. Cost (edit footprint to `td-critique.md` [+ optionally `/innovate.md`])
3. Sub-mechanism coverage (which of 6 sub-mechanisms covered + meta-instance addressed)
4. Future-extensibility
5. **META-LOOP self-grounding fidelity** (CRITICAL inquiry-specific axis — does THIS proposal demonstrate the very external-grounding property it requires? Replaces Label-Tested's nitpicking-creep-risk axis because the structural relationship to Nitpicking doesn't apply here)

#### Tier 1 (Surgical) — Three-insertion-point unified refinement notes

**Mechanism.** Three surgical refinement notes added to `td-critique.md`, all three required because the STATED ≠ IMPLEMENTED ≠ TERMINATED gap spans Phase 0 (stated dimension scope), Phase 2 (implemented prosecution depth), AND Phase 4 (convergence verdict).

- **Phase 0 insertion** — add a "External-anchor dimension requirement" sub-step (per REFINE-A3-SS below):
> "Each dimension whose stated scope WILL test load-bearing claims with potential external anchors — claims about CANONICAL SOURCE TEXT (a specific document with literal content), an EMPIRICAL ARTIFACT (an observable file / configuration / outcome), or a DOWNSTREAM-CONSUMER BEHAVIOR (verifiable observation of what consumers do) — MUST include at least one dimension demanding the external anchor be checked. Claims purely about internal-consistency (e.g., theorem proofs whose validation is purely deductive) need not include external-anchor dimensions. The triage-by-claim-type prevents requiring external-anchor dimensions on candidates where no external anchor exists."

**(Revised 2026-06-09, discipline-purity)** The final sentence "this is the load-bearing META-LOOP self-grounding mitigation at Phase 0 construction time" has been stripped from the proposed spec edit. "META-LOOP self-grounding mitigation" is inquiry-architecture scaffolding language that belongs in the finding's reasoning, not in the runtime spec. The operational rule (the triage + the requirement) stays unchanged.

- **Phase 2 insertion** — extend the existing Multi-axis prosecution depth check refinement note. The existing sub-axes (user-perspective / failure-case scenario / specification-gap probe / substance-axis) are joined by a 5th sub-axis: **external-anchor sub-axis.** Fires when the dimension's Phase 0 success criteria include an external-anchor criterion; the prosecution MUST quote the canonical source text verbatim / cite the empirical artifact's actual content / test the downstream-consumer behavior. Structural arguments about what the source 'should' say do not satisfy this sub-axis.

**(Revised 2026-06-09, discipline-purity)** The provenance phrase "substance-axis from Label-Tested" (which attributed the substance-axis sub-axis to the inquiry that introduced it) has been stripped. The substance-axis stands on its own as an existing peer sub-axis in `td-critique.md` — inquiry-provenance attribution is dev-history scaffolding that does not belong in the runtime spec.

- **Phase 4 insertion** — introduce Mechanism-Independence Quarantine state + verdict label (per REFINE-A6 below for lift criteria):
> "When the surviving candidates' evidence does NOT include ≥1 of the 3 external-anchor sub-types, the Convergence Telemetry MUST flag the convergence as 'structurally-grounded only — confidence reduced; mechanism-independence claim quarantined until external evidence cites.' The quarantine state lifts ONLY when an explicit re-evaluation by /td-critique provides external-anchor evidence: a canonical source text quote, an empirical artifact test result, or a downstream-consumer behavior observation. The quarantine does NOT auto-lift over time; without explicit re-evaluation providing external evidence, the quarantine state persists."

**Spec location.** Three refinement notes in `td-critique.md`: Phase 0 (after existing project-specific-risk-check refinement), Phase 2 (extending Multi-axis prosecution depth check), Phase 4 (after existing TERMINATE convergence text).

**Sub-mechanism coverage.** All 6 + meta-instance. Phase 0 catches (1) canonical-source-text, (3) discipline-spec-literal-text, (4) user-stated-anchor, (5) canonical-pattern-template, partial (2) project-wide-canon at construction. Phase 2 catches the IMPLEMENTATION side. Phase 4 catches (6) under-determined-convergence (Quarantine fires when convergence is reached without external anchor) + the meta-instance (00-51 ← 13-23 would fire Quarantine because 8 mechanisms + 13 dimensions converged without empirical test of Route Map).

**Corpus retroactive test.** All 6 catchable + meta-instance addressed.

**SS variant.** Within-`td-critique.md` only. The spec edit text is pure — no cross-discipline citation. **(Revised 2026-06-09, discipline-purity)** The earlier wording "cites `/innovate`'s Artifact-grounding refinement note (Phase 3 Test, lines 583-589) as cross-discipline precedent" has been dropped from this spec-edit description. The cross-discipline precedent argument lives at the finding-reasoning layer below (§4 "External grounding" subsection), not in the inserted spec text. Embedding a citation pointer with line numbers inside `td-critique.md` would violate discipline-purity per `docs/canon/thinking_disciplines/how_a_discipline_should_be.md`.

**CS variant.** + `/innovate` Artifact-grounding-trigger broadening: extend `/innovate`'s existing refinement note trigger from "categorical claims about project state" to also include "conceptual claims about failure modes / design decisions / load-bearing premises." ~15 lines added to `/innovate`. The cross-spec sub-axis from IFP RETURNS here.

**Trade-off analysis (per SS / CS):**
- Prevention leverage: HIGH (SS) / HIGHER (CS — touches both disciplines' catch surfaces)
- Cost: LOW (SS ~50 lines) / MEDIUM (CS ~50 + ~15 in /innovate)
- Sub-mechanism coverage: COMPLETE (both)
- Future-extensibility: MEDIUM (refinement notes accommodate further sub-axes)
- META-LOOP self-grounding fidelity: STRONG (the FINDING's own reasoning is externally grounded — the spec edit itself does NOT carry citations). **(Revised 2026-06-09, discipline-purity)** This axis is a finding-quality assessment of THIS DOCUMENT's reasoning, not a property of the inserted spec text. The spec edit text is pure; the external grounding lives in the finding (§4 "External grounding" subsection below).

**External grounding (finding-reasoning layer — NOT spec edit content).** **(Revised 2026-06-09)** The following list is the FINDING's own external grounding for its argument that External-Grounding-Absence is a real failure mode worth catching — it is the reasoning record that this finding's META-LOOP self-grounding rests on. **It is NOT a list of citations to insert into `td-critique.md`.** Per `docs/canon/thinking_disciplines/how_a_discipline_should_be.md`, the runtime spec must be standalone-coherent without cross-discipline citations.

The finding's reasoning rests on: `/innovate` Artifact-grounding refinement note (Phase 3 Test, lines 583-589 — DIRECT cross-discipline precedent showing the same operational pattern at `/innovate`'s side); sensemaking Load-bearing concept test (cross-discipline precedent); `#7` Self-Reference Collapse's existing "external reference points" language (adjacent-mode precedent within `td-critique`); 7 corpus instances (empirical).

**Composition with siblings.** COMPOSE-NATURAL with AA Tier 1 + IFP Tier 1 single-spec + Label-Tested Tier 1 unified. Adopting all 4 Tier 1s together produces 4 refinement-note sets across `td-critique.md` Phase 0/2/4; total ~110 lines.

#### Tier 2 sub-variants — 4 sub-sub-variants (Tier 2 ADD or REPAIR × SS or CS)

**Tier 2 sub-variant (a) — ADD new entry #11 "External-Grounding Absence":**

Adds a new top-level failure-mode entry as `td-critique.md` §4 #11 following the existing format. Sequential numbering with AA #8 + IFP #9 + Label-Tested #10 + this #11. SKILL.md description grows ~30 chars.

```
### 11. External-Grounding Absence

When critique evaluates structural mechanism (internal consistency, candidate coherence, mechanism-independence) without testing against external grounding — a canonical source text, an empirical artifact, or actual downstream-consumer behavior.

**How to recognize:** Multiple mechanisms converge on a verdict; the convergence rests entirely on structural-argument agreement; no candidate's evidence cites any of the 3 external-grounding sub-types.

**Sub-mechanisms (6 + 1 meta-instance):** [enumerated per §2 above]

**How to prevent:** Require ≥1 dimension demanding an external anchor in Phase 0 (per Phase 0 refinement note). When no external anchor is available, flag the verdict as "structurally-grounded only" and apply Mechanism-Independence Quarantine in Phase 4.

**Cross-references:** Related to but distinct from #7 Self-Reference Collapse (different triggers/mechanisms; can co-fire). Cross-failure-interaction with #1 Inherited-Frame Preservation (canon-line case): the frame is preserved because no canonical-source check would refute it.
```

**(Revised 2026-06-09, discipline-purity)** The cross-reference "Cross-failure-interaction with #5 Scope-Mismatch (future)" has been dropped from the proposed spec edit. Per `docs/canon/thinking_disciplines/how_a_discipline_should_be.md`, the runtime spec must NOT carry "references to deferred future versions of this discipline." Cross-failure-interactions name modes that exist in the discipline; not modes that might exist. The remaining cross-references to #1 and #7 are intra-discipline (both modes exist in `td-critique.md`) and stay.

**Tier 2 sub-variant (b) — REPAIR existing #7 Self-Reference Collapse via SCOPE-BROADENING:**

Modify the existing #7 Self-Reference Collapse entry to extend its scope from the special case (critique-on-critique) to the general case (any critique relying on structural-argument convergence). Existing #7 prevention text preserved VERBATIM (backward-compatible); scope is broadened with explicit demarcation between special case and general case.

This sub-variant is structurally MORE SUBSTANTIAL than Label-Tested's analogous REPAIR sub-variant (which was note-attachment to #3 Nitpicking). The SCOPE-BROADENING is a semantic extension of an existing failure mode's scope; the relationship between #4 (general case) and #7 (special case) becomes structurally EXPLICIT in the spec.

**Each sub-variant has SS and CS sub-sub-variants** (4 total):
- (a) ADD-SS: ADD #11 (per-phase block at Phase 4 + thin §4 overview row). **(Revised 2026-06-09)** No `/innovate` citation in the spec edit.
- (a) ADD-CS: ADD #11 + broaden `/innovate` trigger. **(NOT-RECOMMENDED 2026-06-09 per user directive — out of scope.)**
- (b) REPAIR-SS: REPAIR #7 SCOPE-BROADENING in the cross-cutting end-section. **(Revised 2026-06-09)** No `/innovate` citation in the spec edit.
- (b) REPAIR-CS: REPAIR #7 SCOPE-BROADENING + broaden `/innovate` trigger. **(NOT-RECOMMENDED 2026-06-09 per user directive — out of scope.)**

**Trade-off analysis (per sub-sub-variant):**

| Sub-sub-variant | Prevention | Cost | Sub-mech | Future-ext | META-LOOP fidelity |
|---|---|---|---|---|---|
| (a) ADD-SS | HIGH | LOW (~30 lines + SKILL.md) | COMPLETE | MEDIUM | STRONG |
| (a) ADD-CS | HIGHER | MEDIUM (+ /innovate ~15 lines) | COMPLETE | MEDIUM-HIGH | STRONGER |
| (b) REPAIR-SS | HIGH | MEDIUM (~40 lines in #7) | COMPLETE | LOW-MEDIUM (entry grows) | STRONG |
| (b) REPAIR-CS | HIGHER | MEDIUM-HIGH (~40 in #7 + /innovate ~15) | COMPLETE | LOW-MEDIUM | STRONGER |

**External grounding.** Same as Tier 1 + Label-Tested REPAIR sub-variant precedent (analogous shape).

**Composition with siblings.** Sub-variant (a) sequential numbering with prior siblings' added entries; sub-variant (b) is independent of prior siblings' Tier 2 entries (repairs existing #7 which is unchanged in prior siblings).

#### Tier 3 (Significant) — Three dispositions

**(Updated 2026-06-09) The three dispositions below were the load-bearing analysis at the time of original publication, when the frame was "extend the cumulative §4 hook-table." The 2026-06-09 per-phase-placement framework refinement supersedes this frame for failure-mode content. Under per-phase placement, the §4 hook-table that ADOPT and REORG were proposing to restructure does not exist (§4 is thinned to a 4-column overview table only; the failure-mode bodies live inline at their phases). The Tier 3 dispositions therefore collapse:**

- **Tier 3 ADOPT (4-coord cumulative hook-table)** — **NOT APPLICABLE.** There is no §4 hook-table to extend. The composability-upper-limit concern at 4 coordinates becomes structurally moot.
- **Tier 3 REORG (4 mini-tables, one per coordinate)** — **SUBSUMED.** Per-phase placement IS the structurally-correct organizing pattern that REORG was reaching toward. The discipline's actual phases (Phase 0 / Phase 1 / Phase 2 / Phase 3 / Phase 4 / Cross-cutting) serve as the natural coordinates, replacing the abstract dimension-space / inherited-frame / evaluation-level / grounding-type coordinates. The 4-mini-tables structure becomes per-phase placement using the discipline's existing phase structure.
- **Tier 3 DEFER** — **REFRAMED.** Now means "don't apply per-phase placement; keep the current linear §4 list structure unchanged." DEFER preserves the option for users who prefer the current organization without adopting the per-phase-placement framework refinement.

**Net effect on Tier 3:** the three dispositions collapse to one operational disposition (DEFER vs adopt-per-phase-placement-framework). The original Tier 3 analysis is preserved below as historical record of the pre-2026-06-09 frame.

---

**Tier 3 ADOPT — 4-coord cumulative meta-question (NOT RECOMMENDED — superseded by per-phase placement; preserved as historical record):**

Extend the cumulative hook-table from AA Tier 3 + IFP Tier 3 + Label-Tested Tier 3 with HC11 = External-Grounding-Tested. Meta-question broadens to 4 coordinates: "Are the dimension space AND its inherited frame AND its evaluation level AND its grounding type all load-bearing and tested?"

**Honest minus:** composability upper limit DEFINITIVELY crossed. The meta-question becomes a 4-checklist, not a single generative principle. Per Label-Tested finding §8's warning at 3-coord. **NOT RECOMMENDED** but preserved for documentation completeness (could be revived if composability concern proves overstated in practice).

**Tier 3 REORG — REORGANIZE cumulative hook-table into 4 mini-tables (SUPERSEDED by per-phase placement framework refinement 2026-06-09; preserved as historical record):**

Restructure the cumulative hook-table into 4 mini-tables, one per coordinate (dimension space / inherited frame / evaluation level / grounding type). Each mini-table has its own single-coordinate meta-question; the 4 meta-questions are applied in SEQUENCE. PRESERVES cumulative content with a different organizing pattern; 4-coord meta-question is REPLACED by 4 single-coord meta-questions. Composability concern AVOIDED.

**Why superseded:** the abstract coordinates (dimension space / inherited frame / evaluation level / grounding type) don't map cleanly to the discipline's actual phases. The per-phase-placement refinement uses the discipline's existing phase structure (Phase 0 / Phase 2 / Phase 4 / Cross-cutting) as the natural coordinates. Per-phase placement is structurally cleaner because (a) it reuses the existing refinement-note placement convention; (b) it co-locates failure modes with their firing-phase; (c) it doesn't require introducing abstract coordinates that don't appear elsewhere in the spec.

**Trade-off analysis.**
- Prevention leverage: HIGHEST
- Cost: HIGH (cumulative restructure)
- Sub-mechanism coverage: COMPLETE
- Future-extensibility: HIGHEST (each mini-table grows independently)
- META-LOOP self-grounding fidelity: STRONG

**Coupling caveat:** requires all 3 prior siblings' Tier 3 to be adopted (3-way coupling honestly named).

**Tier 3 DEFER — DEFERRED with revival trigger:**

Don't extend the hook-table; accept fragmentation. Revival trigger: a future inquiry (Scope-Mismatch / Pattern Persistence / reorganized #7) surfaces a new organizing pattern, OR user explicitly requests cumulative-deep adoption.

### 5. Three Critique-derived REFINES (folded in)

**REFINE-A3-SS (folded into Tier 1).** Phase 0 trigger condition's claim-type triage tightened to explicitly enumerate the 3 external-anchor sub-types (quoted in §4 above under Tier 1's Phase 0 insertion block). The triage distinguishes load-bearing-claims-with-potential-external-anchors from purely-internal-consistency claims; this is the load-bearing META-LOOP self-grounding mitigation at construction time.

**REFINE-A6 (folded into Tier 1 Phase 4 + §6 Quarantine Mechanic).** Quarantine lift criteria tightened: lift does NOT happen automatically over time; lift requires explicit re-evaluation by `/td-critique` providing external-anchor evidence (quoted in §4 above under Tier 1's Phase 4 insertion block).

**REFINE-Assembly (folded into §3).** The §3 tier-shape vocabulary statement now carries forward all four clarifications cumulatively:

1. Tiers = STRUCTURAL EDIT SHAPES, not ranked recommendations (AA finding §10).
2. Single-spec vs cross-spec = SPEC-COUNT SUB-AXIS within each tier (IFP finding §10).
3. Tier 2 ADD vs REPAIR = INTERVENTION-SHAPE SUB-AXIS within Tier 2 (Label-Tested finding §3).
4. **Both SS/CS AND ADD/REPAIR sub-axes apply TOGETHER (NEW this inquiry)** — applies because the failure surface spans both within-`td-critique.md` operations AND cross-spec broadening of `/innovate`. Produces 2×2 = 4 Tier 2 sub-sub-variants. The both-sub-axes-apply case is GENUINELY NEW (prior 3 sibling inquiries had at most one sub-axis applying).

### 6. Mechanism-Independence Quarantine Mechanic (NEW substrate piece)

The Quarantine mechanic is unique to this inquiry — no prior sibling had this piece. It is the partial-process-layer component the Layer Commitment anticipated.

**Structural specification:**
- **Accumulator field:** added to `td-critique.md` §3.5 Accumulator schema. Field name: `mechanism_independence_status`. Values: `"validated"` or `"quarantined"`. Per-candidate.
- **Verdict label:** when `quarantined`, the candidate's verdict adjective becomes "**structurally-grounded only — confidence reduced; mechanism-independence claim quarantined until external evidence cites.**" This adjective appears in the final SURVIVE / REFINE / KILL verdict line.

**Process specification (minimum):**
- **Trigger:** at Phase 4 Convergence Telemetry. Condition: NO surviving candidate's evidence cites ≥1 of the 3 external-grounding sub-types.
- **Lift (per REFINE-A6):** requires explicit re-evaluation by /td-critique providing external-anchor evidence. Does NOT auto-lift over time.
- **Verdict adjective:** as above.

**Existing accumulator interaction:** APPEND new field; do NOT modify existing fields. Backward-compatible.

**Deeper process work (DEFERRED):** runtime instrumentation, telemetry counters, automatic re-evaluation triggers — out of scope. Minimum-process is what's needed to make the structural state actionable. If practical experience shows more is needed, future inquiry adds it.

### 7. META-LOOP test of prior 3 siblings — PARTIAL-SURVIVE finding

This inquiry's most distinctive contribution: an integrated META-LOOP analysis testing whether the prior 3 sibling findings' Critique-section convergence claims survive External-Grounding-Absence scrutiny.

**Per-sibling per-sub-type accounting (the load-bearing honesty mechanism):**

| Sibling | (a) Canonical-source-text | (b) Empirical-artifact | (c) Downstream-consumer-behavior |
|---|---|---|---|
| **Axis Absence** | STRONG (cited `td-critique.md` spec text + sensemaking Meta-Inspection refinement note) | STRONG (9 corpus instances from `100.md`) | DEFERRED (no implementation observed) |
| **Inherited-Frame Preservation** | STRONG (cited `td-critique.md` + cross-spec refs + sensemaking Load-bearing concept test) | STRONG (corpus instances) | DEFERRED (no implementation observed) |
| **Label-Tested Substance-Untested** | STRONG (cited `td-critique.md` + sensemaking Load-bearing concept test as MANDATORY) | STRONG (6 corpus instances) | DEFERRED (no implementation observed) |

**Caveat on cross-discipline precedent:** Each prior sibling cited a cross-discipline precedent (e.g., sensemaking's Meta-Inspection or Load-bearing concept test) STRUCTURALLY (as pattern analogy) rather than EMPIRICALLY (as observed test outcome). This is partial coverage of sub-type (a) canonical-source-text — strong on td-critique.md spec text citations, partial on cross-discipline citations used structurally.

**Overall META-LOOP verdict: PARTIAL-SURVIVE.**
- **2 sub-types STRONG** (canonical-source-text + empirical-artifact) ✓
- **1 sub-type PARTIAL** (cross-discipline precedent structural-not-empirical)
- **1 sub-type DEFERRED** (downstream-consumer behavior — phase-dependent, unobservable until prior 3 siblings' proposals are implemented and observed in actual use)

**This is honest PARTIAL-SURVIVE — not whitewash, not strawman.** Sensemaking explicitly tested P7-Inv counter-interpretations (full-SURVIVE OR full-FAIL) and KILLED both as dishonest. The phase-deferred sub-type IS a genuine gap, but it's a phase-dependent gap (per sensemaking's Phase/Calibration-State perspective), not a failure of prior 3 inquiries' rigor.

**The META-LOOP-integrated finding IS the inquiry's own META-LOOP self-grounding demonstration.** By honestly reporting the phase-dependent gap in prior 3 siblings via this cross-sibling per-sub-type accounting, this inquiry demonstrates the very external-grounding property it requires of others.

### 8. Comparative table + per-scenario picker

**(Updated 2026-06-09)** Variant count reduces from 9 to 7 under per-phase placement. The two Tier 3 hook-table dispositions (ADOPT, REORG) are removed from the active variant set (NOT APPLICABLE / SUBSUMED per the Update Note above) and the remaining rows are reframed: Tier 2 ADD now means per-phase block at Phase 4 + thin §4 overview row; Tier 2 REPAIR modifies the cross-cutting end-section block where #7 lives. Tier 3 DEFER becomes "don't apply per-phase placement; keep current §4 linear structure."

| Variant | Prevention | Cost | Sub-mech | Future-ext | META-LOOP fidelity |
|---|---|---|---|---|---|
| Tier 1 SS | HIGH | LOW (~50 lines) | COMPLETE | MEDIUM | STRONG |
| Tier 1 CS | HIGHER | MEDIUM (~50 + 15 in /innovate) | COMPLETE | MEDIUM-HIGH | STRONGER |
| Tier 2 (a) ADD-SS (#11 — per-phase block at Phase 4 + §4 overview row) | HIGH | LOW-MEDIUM (~30 + SKILL.md) | COMPLETE | MEDIUM | STRONG |
| Tier 2 (a) ADD-CS (#11 + /innovate) | HIGHER | MEDIUM (~30 + /innovate ~15) | COMPLETE | MEDIUM-HIGH | STRONGER |
| Tier 2 (b) REPAIR-SS (#7 in cross-cutting end-section) | HIGH | MEDIUM (~40 in cross-cutting #7 block) | COMPLETE | LOW-MEDIUM | STRONG |
| Tier 2 (b) REPAIR-CS (#7 + /innovate) | HIGHER | MEDIUM-HIGH (~40 + /innovate) | COMPLETE | LOW-MEDIUM | STRONGER |
| Tier 3 DEFER (don't apply per-phase placement) | NONE-NEW | LOW | NONE-NEW | LOW | N/A |
| ~~Tier 3 ADOPT (4-coord hook-table)~~ | NOT APPLICABLE under per-phase placement | — | — | — | — |
| ~~Tier 3 REORG (4 mini-tables)~~ | SUBSUMED by per-phase placement | — | — | — | — |

**Per-scenario picker (5 scenarios):**

- **MINIMUM-COST:** Tier 1 SS alone. Catches all 6 sub-mechanisms at construction + evaluation + convergence; ~50 lines edited; no §4 entry; no SKILL.md change; no `/innovate` edits.

- **VOCABULARY-DISTINCT:** Tier 1 SS + Tier 2 (a) ADD-SS (#11). Mode has a searchable name in spec; corpus labeling becomes precise.

- **SCOPE-BROADENING-PREFERRED:** Tier 1 SS + Tier 2 (b) REPAIR-SS (#7). Minimum §4 entry-count growth; #4-#7 relationship made structurally explicit in #7 entry via SCOPE-BROADENING.

- **CROSS-SPEC-DEEP:** Add CS variants (Tier 1 CS + Tier 2 ADD-CS or REPAIR-CS). Touches `/innovate` Artifact-grounding-trigger broadening. Highest prevention leverage.

- **~~CUMULATIVE-DEEP~~** — **(REMOVED 2026-06-09)** This scenario was Tier 3 REORG (4 mini-tables hook-table restructure). Under per-phase placement, this scenario is SUBSUMED because per-phase placement IS the structurally-correct organizing pattern that mini-tables was reaching toward. Users seeking the equivalent benefit (cumulative restructure across all 4 siblings' content) should adopt the per-phase-placement framework refinement instead — see the Update Note above. The CUMULATIVE-DEEP-REORG sequence in §9 is similarly affected; see §9's update.

- **(NEW 2026-06-09) PER-PHASE-PLACEMENT-ADOPT:** Apply the per-phase-placement framework refinement to `td-critique.md` §4 — relocate all 8 existing failure modes to per-phase blocks at their respective phases; replace §4 with a thin overview table (4 columns); place #7 in a new cross-cutting end-section. This is a one-time structural restructure that replaces the per-inquiry Tier 3 dispositions; subsequent inquiries (this one + future siblings) add their content as new per-phase blocks rather than as §4 entries. See the triggering inquiry's finding for the full edit recipe.

**Picker is dimensional navigation, not ranked recommendation** (per cumulative tier-metaphor clarifications).

### 9. The 4-way cross-inquiry composition matrix

**(Updated 2026-06-09)** The matrix simplifies substantially under per-phase placement. This inquiry's variant count reduces 9 → 7 (Tier 3 ADOPT and REORG removed; per §8 update). The CUMULATIVE-DEEP-REORG sequence below is SUPERSEDED — its cumulative restructure benefit is provided by per-phase placement natively. The cumulative coupling caveat #1 below is RESOLVED (no 4-coord composability concern under per-phase placement). The remaining sequences (MINIMAL, MID-COST-VOCABULARY-DISTINCT, MID-COST-SCOPE-BROADENING, CROSS-SPEC-DEEP) still apply with their Tier 2 entries reframed as per-phase blocks at Phase 4 (rather than §4 entries) plus their thin overview rows.

The matrix is this inquiry × AA (3 tiers) × IFP (6 variants) × Label-Tested (4 variants) = up to 9 × 3 × 6 × 4 = **648 theoretical cells**. The matrix's value is navigation; not every cell is meaningful, but every adoption combination has a single matrix coordinate where its composition properties are recorded.

**Under per-phase placement, the matrix reduces to 7 × 3 × 6 × 4 = 504 theoretical cells, and composition cost drops because each cell adds content to per-phase blocks rather than cumulating into a multi-coord hook-table.**

**Five recommended adoption sequences:**

- **MINIMAL** (≈110 lines) — AA Tier 1 + IFP Tier 1 SS + Label-Tested Tier 1 unified + this Tier 1 SS. Four refinement-note sets across `td-critique.md` Phase 0/2/4. Cheapest path to addressing top_7 failure modes #1, #2, #3, #4.

- **MID-COST-VOCABULARY-DISTINCT** (≈195 lines) — MINIMAL + AA #8 + IFP #9 + Label-Tested #10 + this #11 (ADD-SS). `td-critique.md` §4 reaches 11 entries.

- **MID-COST-SCOPE-BROADENING** (≈170 lines) — MINIMAL + AA #8 + IFP #9 + Label-Tested #10 + this REPAIR #7 (REPAIR-SS). §4 reaches 10 entries (not 11) because this inquiry's mode is folded into #7 via SCOPE-BROADENING.

- **CROSS-SPEC-DEEP** — MINIMAL or MID-COST + CS variants (touches `/innovate`). +~30 lines to `/innovate`; cross-spec coupling.

- **~~CUMULATIVE-DEEP-REORG~~** — **(SUPERSEDED 2026-06-09)** MID-COST + AA Tier 3 + IFP Tier 3 + Label-Tested Tier 3 + this Tier 3 REORG (4 mini-tables). Significant restructure; ≈350 lines total. SUPERSEDED by **PER-PHASE-PLACEMENT-ADOPT**: relocate the existing 8 §4 entries to per-phase blocks (one-time ~200-line restructure) + add all sibling inquiries' content as per-phase blocks rather than cumulating into a hook-table.

- **(NEW 2026-06-09) PER-PHASE-PLACEMENT-ADOPT** — relocate `td-critique.md` §4's 8 existing failure-mode entries to per-phase blocks (Phase 0: 3 modes; Phase 2: 2 modes; Phase 4: 2 modes; cross-cutting end-section: 1 mode); replace §4 with a thin overview table; add each sibling inquiry's content as a new per-phase block at its firing phase. One-time restructure ~200 lines; subsequent cost ~30 lines per sibling. Maximum future-extensibility; no composability concerns at N+ sibling inquiries.

**Three coupling caveats the matrix surfaces:**

1. **~~This inquiry's Tier 3 ADOPT (4-coord) is NOT RECOMMENDED;~~ REORG is the recommended Tier 3 because 4-coord meta-question crosses composability upper limit.** **(RESOLVED 2026-06-09)** Both Tier 3 dispositions are SUPERSEDED by per-phase placement. The 4-coord meta-question composability concern is structurally moot — per-phase placement removes the multi-coord meta-question entirely.

2. **Cross-failure-overlap on 11-23 STANDALONE** is genuine: same corpus pair appears in both Label-Tested (sub-mechanism 5 ARTIFACT-TYPE) AND this inquiry (sub-mechanism 5 CANONICAL-PATTERN-TEMPLATE). Both diagnoses load-bearing at DIFFERENT LAYERS; not a defect — a structural feature of multi-failure-mode taxonomies.

3. **SS+CS sub-axes AND ADD/REPAIR sub-axes apply together this inquiry** (the FIRST inquiry with both); the picker enumerates the combination explicitly (4 Tier 2 sub-sub-variants).

### 10. The meta-question evolution across the 4 inquiries

The series produces an evolving meta-question if the cumulative-deep adoption sequence is followed:

- **Axis Absence** → "Does the dimension space SPAN the failure space?" (1 coordinate)
- **Inherited-Frame Preservation** → "Are the dimension space AND its inherited frame both load-bearing and tested?" (2 coordinates)
- **Label-Tested** → "Are the dimension space AND its inherited frame AND its evaluation level all load-bearing and tested?" (3 coordinates)
- **External-Grounding-Absence (this)** → "Are the dimension space AND its inherited frame AND its evaluation level AND its grounding type all load-bearing and tested?" (4 coordinates) → **CROSSES composability upper limit**

At 4 coordinates the meta-question becomes a CHECKLIST rather than a single generative principle. This is why this inquiry's Tier 3 has 3 dispositions (ADOPT-NOT-RECOMMENDED / REORG / DEFER) instead of the prior siblings' single-disposition Tier 3. The REORG disposition (split into 4 mini-tables, each with single-coord meta-question) is the recommended Tier 3.

**(Updated 2026-06-09) The composability concern is RESOLVED differently under per-phase placement.** Under the per-phase-placement framework refinement, there is no cumulative multi-coord meta-question at all. Each phase has its own implicit "what failures fire here?" question, applied as the practitioner reads each phase top-to-bottom. The abstract coordinates (dimension space / inherited frame / evaluation level / grounding type) are replaced by the discipline's actual phase structure (Phase 0 / Phase 2 / Phase 4 / Cross-cutting), which already exists in the spec. The "4-coord meta-question crosses composability upper limit" concern becomes structurally moot because there is no multi-coord meta-question to maintain.

**The structural insight:** the prior framework's mini-tables proposal recognized that 4 coordinates can't be unified into one meta-question. The per-phase-placement framework refinement goes one step further: the coordinates don't need to be unified OR split into mini-tables OR have meta-questions at all — they can be DISTRIBUTED to the phase where they naturally fire. This is structurally cleaner because the phase structure already exists in the spec and serves as the natural organizing principle. The "meta-question" becomes implicit: at each phase, "what failure modes recognizable here?" is the question, and the per-phase failure-mode blocks are the answer.

This refinement RESOLVES the Open Questions / Monitoring item *"4-coordinate meta-question composability upper limit confirmed crossed"* (see Open Questions section below — that monitoring item is closed) and the Research Frontier *"Meta-question composability beyond 4 coordinates"* (also resolved — the per-phase structure scales naturally to N coordinates without composability concerns).

---

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger listing 9 priors (`100.md` corpus + `top_7 §4` + `td-critique.md` + SKILL.md + POSSIBLY `/innovate` + POSSIBLY `/reflect` + 3 sibling findings). Each commitment those priors carry is enumerated below with re-test status.

### Prior 1 — `devdocs/100_critique_correction_chain_analysis.md` (48-pair corpus)

- **Commitment:** 7 specific corpus instances are diagnosed as "External-Grounding Absence" with per-pair "WHAT CRITIQUE MISSED" entries, INCLUDING the structurally distinct multi-defensible-readings instance (22-10 vs 23-15) and the self-named project-process meta-observation (00-51 ← 13-23).
- **Re-test status:** RE-TESTED.
- **Evidence:** All 7 instances re-mapped to 6 distinct sub-mechanisms + 1 meta-instance in §2 above. 22-10 vs 23-15 placed as sub-mechanism (6) missing-tie-breaker (structurally distinct sub-shape but same root failure — sensemaking Ambiguity 4). 00-51 ← 13-23 placed as META-INSTANCE (self-named project-process meta-observation; sensemaking Ambiguity I5).

### Prior 2 — `devdocs/top_7_common_critique_failures.md` §4

- **Commitment 2.1:** External-Grounding-Absence is distinct from #7 Self-Reference Collapse (adjacent but different concern).
- **Re-test status:** RE-TESTED. Evidence in §1 above + sensemaking Ambiguity 3: STRUCTURALLY CRISP via different triggers + different mechanisms; can co-fire; corpus 11-23 STANDALONE empirically distinguishes.

- **Commitment 2.2:** Cross-failure-interactions: #1+#4 (canon line 109 case); #4+#5 (Scope-Mismatch).
- **Re-test status:** RE-TESTED. Evidence: §1 above explicitly names both cross-failure-interactions; sub-mechanism (2) project-wide-canon-not-cross-checked corresponds to #1+#4 case.

- **Commitment 2.3:** The corrective sketch — empirical/canonical anchor + "structurally-grounded only" verdict label + mechanism-independence quarantine.
- **Re-test status:** RE-TESTED. Evidence: Tier 1 Phase 0 + Phase 2 + Phase 4 refinement notes operationalize all 3 corrective elements; A6 Quarantine Mechanic structures the quarantine state.

### Prior 3 — `cognitive_harness/td-critique/references/td-critique.md`

- **Commitment 3.1:** §4's organizing pattern is a numbered list of failure modes (currently 7).
- **Re-test status:** RE-TESTED. Tier 2 (a) ADDs entry #11 after AA #8 + IFP #9 + Label-Tested #10. Tier 2 (b) REPAIRs existing #7 via SCOPE-BROADENING (preserves the existing entry while broadening its scope).

- **Commitment 3.2:** Phase 0 / Phase 2 / Phase 4 are the load-bearing loci for the STATED ≠ IMPLEMENTED ≠ TERMINATED gap.
- **Re-test status:** RE-TESTED. Tier 1's three insertion points sit inside these existing structures.

- **Commitment 3.3:** §7 Self-Reference Collapse exists with prevention text naming "external reference points" with 3 sub-types (empirical / cross-discipline / human-judgment).
- **Re-test status:** RE-TESTED. §1 above explicitly distinguishes External-Grounding-Absence from Self-Reference Collapse via different triggers/mechanisms; the corrective DIRECTION (require external grounding) overlaps but the TRIGGER and MECHANISM are distinct. Tier 2 (b) REPAIR sub-variant preserves #7's existing prevention text VERBATIM and broadens scope.

- **Commitment 3.4:** §3.5 Accumulator has existing schema fields.
- **Re-test status:** RE-TESTED. A6 Quarantine Mechanic APPENDS new field (`mechanism_independence_status`); does NOT modify existing fields. Backward-compatible.

### Prior 4 — `cognitive_harness/td-critique/SKILL.md`

- **Commitment:** SKILL.md description summarizes failure modes; growth bounded.
- **Re-test status:** RE-TESTED. Tier 2 (a) ADD-variants grow SKILL.md ~30 chars; sub-variant (b) requires no SKILL.md edit since it repairs existing #7. Bounded growth respected.

### Prior 5 — `cognitive_harness/innovate/` (POSSIBLY cross-spec)

- **Commitment 5.1:** `/innovate` Phase 3 Test contains a Mechanism Independence test (line 566).
- **Re-test status:** RE-TESTED. Sensemaking Ambiguity 1 verified: External-Grounding-Absence REFINES (does NOT contradict) `/innovate`'s Mechanism Independence Test. Different "mechanisms" is the key word; if all mechanisms share a structural-argument frame, they're not actually different mechanisms.

- **Commitment 5.2:** `/innovate` Phase 3 has Artifact-grounding refinement note (lines 583-589) operationalizing External-Grounding at /innovate's side.
- **Re-test status:** RE-TESTED. This is the DIRECT cross-discipline precedent and PRIMARY external anchor for this inquiry. Cited throughout all proposals. CS variants OPTIONALLY broaden /innovate's Artifact-grounding-trigger to cover conceptual claims about failure modes / design decisions / load-bearing premises (current trigger is narrower).

### Prior 6 — `cognitive_harness/reflect/` (POSSIBLY cross-spec)

- **Commitment:** /reflect is referenced in top_7 §4 corpus instance 00-51 as the promotion target for self-named project-process meta-observations at N≥3.
- **Re-test status:** RE-TESTED. Surfacing item 42 + sensemaking K2 verified: /reflect is in `cognitive_harness/non-active/`; CONFIRMED-ABSENT as an ACTIVE cross-spec target. Cross-spec to /reflect is RULED OUT. The corrective for "self-named project-process meta-observation promotion" must live in an active discipline.

### Prior 7 — `devdocs/inquiries/2026-06-08_17-43__axis_absence_critique_fix_proposals/finding.md` (Axis Absence)

- **Commitment 7.1:** Tier-shape vocabulary (Tier 1 / Tier 2 / Tier 3 = STRUCTURAL EDIT SHAPES per §10).
- **Re-test status:** RE-TESTED. Carried forward unchanged as cumulative clarification (1) in §3 above.

- **Commitment 7.2:** META-LOOP coverage of AA's Critique convergence claim.
- **Re-test status:** RE-TESTED in §7 above as part of META-LOOP PARTIAL-SURVIVE accounting. AA = 2 STRONG + 1 PARTIAL + 1 DEFERRED.

### Prior 8 — `devdocs/inquiries/2026-06-08_19-10__inherited_frame_preservation_critique_fix_proposals/finding.md` (Inherited-Frame Preservation)

- **Commitment 8.1:** Single-spec vs cross-spec sub-axis within tiers (§10).
- **Re-test status:** RE-TESTED. Carried forward as cumulative clarification (2). RETURNS in this inquiry (NOT applicable to Label-Tested which was within-only).

- **Commitment 8.2:** META-LOOP coverage of IFP's Critique convergence claim.
- **Re-test status:** RE-TESTED in §7 above. IFP = 2 STRONG + 1 PARTIAL + 1 DEFERRED.

### Prior 9 — `devdocs/inquiries/2026-06-08_20-00__label_tested_substance_untested_critique_fix_proposals/finding.md` (Label-Tested)

- **Commitment 9.1:** Tier 2 ADD/REPAIR sub-axis (§3).
- **Re-test status:** RE-TESTED. Carried forward as cumulative clarification (3). APPLIES in this inquiry (Tier 2 has ADD #11 vs REPAIR #7 sub-variants).

- **Commitment 9.2:** 11-23 STANDALONE diagnosed as sub-mechanism (5) ARTIFACT-TYPE in Label-Tested.
- **Re-test status:** RE-TESTED + reconciled. Sensemaking Ambiguity 5 confirmed: cross-failure-overlap is GENUINE. Label-Tested's diagnosis (artifact-type ambiguity at dimension-evaluation layer) and this inquiry's diagnosis (canonical-pattern-template at external-anchor layer) are both load-bearing at different layers. Both inquiries keep the instance in their sub-mechanism enumerations.

- **Commitment 9.3:** META-LOOP coverage of Label-Tested's Critique convergence claim.
- **Re-test status:** RE-TESTED in §7 above. Label-Tested = 2 STRONG + 1 PARTIAL + 1 DEFERRED.

---

## Next Actions

### MUST

- **What:** When implementing this finding's recommendations, apply REFINE-A3-SS's claim-type triage in any Tier 1 Phase 0 edit. The triage distinguishes load-bearing-claims-with-potential-external-anchors from purely-internal-consistency claims; only the former carry mandatory external-anchor dimensions.
  - **Who:** the editor of `cognitive_harness/td-critique/references/td-critique.md`.
  - **Gate:** condition-bound — fires at the moment Tier 1's Phase 0 insertion is written.
  - **Why:** without the triage, Tier 1's Phase 0 rule risks over-applying (requiring external-anchor dimensions on candidates where no external anchor exists, which is itself a Nitpicking-style failure). The triage is the load-bearing META-LOOP self-grounding mitigation.

- **What:** When implementing this finding's recommendations, apply REFINE-A6's lift criteria specification in the Quarantine Mechanic. Lift does NOT auto-lift over time; lift requires explicit re-evaluation by /td-critique providing external-anchor evidence.
  - **Who:** the editor of `td-critique.md`.
  - **Gate:** condition-bound — fires at Quarantine specification time.
  - **Why:** auto-lift would silently invalidate the Quarantine state's purpose; explicit re-evaluation requirement preserves the structural state's actionability.

- **(Reframed 2026-06-09, discipline-purity) What:** This finding's META-LOOP self-grounding rests on `/innovate`'s Artifact-grounding refinement note (Phase 3 Test, lines 583-589) as the cross-discipline precedent showing the same operational pattern at `/innovate`'s side. **This obligation lives at the finding-reasoning layer, NOT as a spec-edit instruction.** The editor of `td-critique.md` MUST NOT add a citation pointing to `/innovate.md` inside the spec.
  - **Who:** the AUTHOR of this finding (already met — see §4 "External grounding (finding-reasoning layer)" subsection above and the Reasoning section below). The editor of `td-critique.md` has NO obligation under this MUST item beyond keeping the spec edits pure.
  - **Gate:** finding-publication time (already met).
  - **Why:** the cross-discipline precedent grounds the External-Grounding-Absence corrective in an existing cross-discipline pattern already validated, demonstrating the very external-grounding property the inquiry's proposals require. Without this finding-layer grounding, the corrective would read as ad-hoc. With it, the finding survives its own META-LOOP test. **Discipline-purity per `docs/canon/thinking_disciplines/how_a_discipline_should_be.md` prohibits carrying this grounding forward as a citation inside the runtime spec**; the spec edits stand as pure standalone discipline content, and the META-LOOP self-grounding is preserved at the finding level where dev-history scaffolding is appropriate.

  **Original (pre-2026-06-09) wording for record:** "When implementing this finding's recommendations, cite `/innovate`'s Artifact-grounding refinement note (Phase 3 Test, lines 583-589) as the PRIMARY external anchor for this inquiry's proposals... **Who:** the editor of `td-critique.md`." This wording directed a discipline-purity violation; it has been reframed above.

### COULD

- **What:** Adopt the MINIMAL sequence — AA Tier 1 + IFP Tier 1 single-spec + Label-Tested Tier 1 unified + this Tier 1 SS. Four refinement-note sets across `td-critique.md` Phase 0/2/4; total ~110 lines.
  - **Who:** the editor of `td-critique.md`.
  - **Gate:** observable — when prevention-leverage data on the 6 + meta-instance subset shows ≥4 of 6 External-Grounding-Absence instances caught by current critique.
  - **Why:** cheapest path to addressing top_7 failure modes #1, #2, #3, #4.

- **What:** Adopt the MID-COST-VOCABULARY-DISTINCT sequence — MINIMAL + the four Tier 2 sub-variant (a) ADD entries (#8 + #9 + #10 + #11). `td-critique.md` §4 reaches 11 entries.
  - **Who:** the editor of `td-critique.md`.
  - **Gate:** condition-bound — when explicit mode-naming in §4 becomes load-bearing for downstream corpus analysis.
  - **Why:** named failure modes are searchable; categorical labelling becomes precise.
  - **Depends-on:** MUST item "REFINE-A3-SS claim-type triage." This COULD is GATED — adopt the Tier 2 ADD #11 entry only after the Phase 0 triage construct is settled.

- **What:** Adopt the MID-COST-SCOPE-BROADENING sequence (alternative to MID-COST-VOCABULARY-DISTINCT) — MINIMAL + AA #8 + IFP #9 + Label-Tested #10 + this REPAIR #7 (SCOPE-BROADENING). §4 reaches 10 entries (not 11); #4-#7 relationship made structurally explicit in the #7 entry.
  - **Who:** the editor of `td-critique.md`.
  - **Gate:** condition-bound — when minimum §4 entry-count growth is the goal AND when making the #4-#7 structural relationship explicit is high-value.
  - **Why:** preserves §4 length-bounded growth while making the structural cross-mode-relationship visible.

- **What:** Adopt the CROSS-SPEC-DEEP sequence — MINIMAL or MID-COST + CS variants touching `/innovate` Artifact-grounding-trigger broadening.
  - **Who:** the editor of `td-critique.md` AND `/innovate.md`.
  - **Gate:** condition-bound — when both disciplines' catch surfaces are intended to be broadened together.
  - **Why:** highest prevention leverage; honest cross-spec coupling.

- **~~What:** Adopt the CUMULATIVE-DEEP-REORG sequence — MID-COST + AA Tier 3 + IFP Tier 3 + Label-Tested Tier 3 + this Tier 3 REORG (4 mini-tables).~~ **(SUPERSEDED 2026-06-09)** This COULD item is superseded by the per-phase-placement framework refinement (see Update Note above). The CUMULATIVE-DEEP-REORG sequence's "4 mini-tables" mechanism reached structurally toward what per-phase placement provides natively: failure modes distributed to their natural firing locus. The user seeking the equivalent cumulative-deep benefit should adopt the PER-PHASE-PLACEMENT-ADOPT scenario instead — see §9's updated per-scenario picker.

- **(NEW 2026-06-09) What:** Adopt the PER-PHASE-PLACEMENT-ADOPT sequence — relocate all 8 existing `td-critique.md` §4 failure-mode entries to per-phase blocks at their respective phases (Phase 0: #1, #4, #8; Phase 2: #2, #3; Phase 4: #5, #6; cross-cutting end-section: #7); replace §4 with a thin overview table (4 columns: # / Name / Fires at / Inverse-of); add this inquiry's External-Grounding Absence as a new Phase 4 per-phase block + Phase 0 triage refinement note.
  - **Who:** the editor of `td-critique.md`.
  - **Gate:** condition-bound — when the per-phase locality benefit is judged worth the one-time relocation cost.
  - **Why:** highest structural coherence with existing refinement-note pattern; removes the multi-coord meta-question composability concern; subsequent inquiries add to per-phase blocks rather than to §4 directly; preserves catalog scan via thin overview.
  - **Depends-on:** the triggering inquiry's framework refinement (`devdocs/inquiries/2026-06-09_18-30__per_phase_placement_failure_modes_with_distinguishing_header/finding.md`) being adopted as the canonical organizing pattern for `/td-critique` §4.

### DEFERRED

- **~~What:** Adopt Tier 3 ADOPT-4-coord cumulative (NOT RECOMMENDED).~~ **(NOT APPLICABLE 2026-06-09)** This DEFERRED item is closed by the per-phase-placement framework refinement. Under per-phase placement, the 4-coord cumulative hook-table is not the organizing pattern at all — failure modes live at their firing phase. The composability concern this item parked is structurally moot, not deferred.
  - **Why this item was originally deferred (preserved for record):** the documentary completeness option preserved the 4-coord disposition for future evaluation. Per-phase placement supersedes the entire question by changing the organizing pattern.

- **What:** Discard 4-way Composition Matrix (P9-Inv-Deferred).
  - **Gate:** condition-bound — revives if the matrix proves too complex to navigate in practice.
  - **Why (if revived):** preserves the option to fall back to per-inquiry summary presentation without cross-inquiry matrix navigation.

- **What:** A separate-insertion-point variant of Tier 1 (Phase-0-only / Phase-2-only / Phase-4-only sub-tiers).
  - **Gate:** condition-bound — revives if user wants partial Tier 1 adoption (e.g., only Phase 0 insertion).
  - **Why (if revived):** preserves the partial-adoption option; per-insertion-point trade-offs documented.

- **What:** Deeper process work on Quarantine Mechanic (runtime instrumentation; telemetry counters; automatic re-evaluation triggers).
  - **Gate:** condition-bound — revives when practical experience shows minimum-process specification is insufficient.
  - **Why (if revived):** scaled Quarantine mechanic adoption may need richer process specification.

---

## Reasoning

### Kills from Innovation (7 candidates terminated)

**P1-Inv — Collapse External-Grounding into #7 Self-Reference Collapse.** KILLED. Different triggers + mechanisms; can co-fire but not collapse. Corpus 11-23 STANDALONE empirically distinguishes (#4 but NOT #7).

**P2-Inv — Single-axis coverage (either SS/CS XOR ADD/REPAIR).** KILLED. Both sub-axes load-bearing per corpus distribution + sensemaking Ambiguity 2 resolution.

**P3-Inv-as-primary — Separate Tier 1 into 3 insertion-point sub-tiers.** KILLED as primary survivor; preserved as partial-adoption sub-option. Unified is structurally necessary because the STATED ≠ IMPLEMENTED ≠ TERMINATED gap spans all 3 phases.

**P4-Inv — Adopt all 4 Tier 2 sub-sub-variants together.** KILLED. Redundant naming layer (#11 ADD + #7 REPAIR SCOPE-BROADENING would both name the same failure). Per Label-Tested precedent.

**P5-Inv — ADOPT-4-coord Tier 3 as recommended (not NOT-RECOMMENDED).** KILLED as primary survivor; A5-ADOPT preserved as documented NOT-RECOMMENDED. Composability upper limit definitively crossed at 4-coord per Label-Tested finding §8.

**P6-Inv — Pure-structural Quarantine (no process specification).** KILLED. Unactionable without process specification per sensemaking Ambiguity 7.

**P7-Inv — Full-SURVIVE OR full-FAIL META-LOOP verdict.** KILLED both directions. Dishonest — ignores per-sub-type accounting that PARTIAL-SURVIVE captures honestly.

**P8-Inv — Single ranked recommendation.** KILLED. Violates cumulative tier-metaphor clarification (tiers are STRUCTURAL EDIT SHAPES, not ranked).

### Survivors from Critique

All 14 primary survivors from Innovation SURVIVED Critique with the 3 REFINES folded in:
- C-A1 SURVIVED HIGH; FOUNDATIONAL-ASSUMPTION-VIOLATION framing structurally defensible at evidence-epistemology level.
- C-A2 SURVIVED HIGH; 4 cumulative clarifications are dimensional, not checklist.
- C-A3-SS SURVIVED with REFINE on Phase 0 claim-type triage (now folded into §4 above).
- C-A3-CS SURVIVED MEDIUM-HIGH; cross-spec coupling honest minus.
- C-A4a-SS HIGH; C-A4a-CS MEDIUM-HIGH; C-A4b-SS MEDIUM-HIGH (vocabulary loss honest); C-A4b-CS MEDIUM-HIGH.
- C-A5-REORG SURVIVED MEDIUM; coupling + restructure cost honest.
- C-A5-DEFER + C-A5-ADOPT-NOT-RECOMMENDED + C-P9-Inv-Deferred SURVIVED-as-DEFERRED.
- C-A6 SURVIVED with REFINE on lift criteria (now folded into §6).
- C-A7 SURVIVED HIGH; PARTIAL-SURVIVE finding IS the inquiry's META-LOOP self-grounding demonstration.
- C-A8 + C-A9 SURVIVED HIGH / MEDIUM-HIGH.

**Assembly-level REFINE** (from Critique Phase 3.5): the §3 tier-shape vocabulary now carries forward all 4 clarifications cumulatively (folded into §3 + §5).

### Contradictions reconciled across disciplines

- **Surfacing's frontier flag F1** anticipated the structural-relationship question. Sensemaking resolved it as FOUNDATIONAL-ASSUMPTION-VIOLATION (NEW 4th relationship). Decomposition partitioned around the resolution. Innovation generated proposals respecting the resolution. Critique re-affirmed via prosecution-defense-collision.

- **Surfacing's F2** suggested possible cross-spec to `/innovate` AND `/reflect`. Sensemaking resolved: /innovate POSSIBLY cross-spec; /reflect RULED OUT (non-active). The SS/CS sub-axis RETURNS. Decomposition + Innovation produced SS and CS variants per tier.

- **Surfacing's F6** META-LOOP test of prior 3 siblings was tested at multiple disciplines: sensemaking confirmed PARTIAL-SURVIVE; decomposition made it a separate piece (P7); innovation produced the per-sibling per-sub-type accounting; critique tested and KILLED the full-SURVIVE-OR-full-FAIL counter-interpretations.

- **Critique's D10 Self-Reference Collapse mitigation** was elevated to CRITICAL because the inquiry's premise targets the structural-argument convergence its own analysis uses. Mitigation was triple-mechanism: D4 mandatory external grounding + D5 META-LOOP self-grounding fidelity + every K/I/S/P/M anchor externally grounded. The inquiry survives its own scrutiny via these mechanisms.

### (Added 2026-06-09) Update reasoning — why per-phase placement was applied

The per-phase-placement framework refinement (see Update Note at the top of this document and the triggering inquiry's finding at `devdocs/inquiries/2026-06-09_18-30__per_phase_placement_failure_modes_with_distinguishing_header/finding.md`) doesn't invalidate this inquiry's analysis — it reorganizes WHERE the analysis's conclusions get written into the `td-critique.md` spec. The substantive content (the External-Grounding-Absence failure mode, its triage refinement note, its 6 sub-mechanisms + meta-instance, its sub-tier vocabulary, its Mechanism-Independence Quarantine Mechanic, its PARTIAL-SURVIVE META-LOOP test) all survives. What changes is the PLACEMENT discipline: §4 entries → per-phase blocks at firing phase + thin overview row. The composability concern at 4-coord meta-questions that motivated Tier 3 REORG + the DEFER disposition resolves as structurally-moot under per-phase placement.

This update preserves the inquiry's reasoning record (Kills, Survivors, Contradictions) intact and adds change-markers to the affected dispositions (Tier 3 ADOPT/REORG sections, §8 comparative table, §9 per-scenario picker, §10 meta-question evolution, Open Questions composability items, COULD/DEFERRED items). The historical analytical content remains readable; the updates only redirect adoption guidance and close out composability monitoring.

---

## Open Questions

### Monitoring

- **~~4-coordinate meta-question composability upper limit confirmed crossed.~~** **(RESOLVED 2026-06-09 — per-phase placement)** This monitoring item is closed by the per-phase-placement framework refinement (see Update Note above). The composability concern is structurally moot under per-phase placement because there is no multi-coord meta-question to maintain — each phase has its own implicit "what failures fire here?" question. The "future Scope-Mismatch / Pattern Persistence inquiries" referenced will simply add their failure-mode blocks to the appropriate phase, no hook-table coordination needed.

- **The /reflect promotion mechanism is non-active.** The corpus's "/reflect promotion at N≥3" reference (00-51 ← 13-23 meta-instance) points to a deprecated discipline. Observable: if /reflect is reactivated OR if a different active discipline absorbs the project-process-meta-observation promotion mechanism, the meta-instance handling can be updated.

### Blocked

- **Phase-deferred external-grounding sub-type (c) downstream-consumer behavior for prior 3 siblings.** Cannot be observed until prior 3 sibling proposals are implemented in `td-critique.md` AND used in subsequent inquiries. Phase-dependent per sensemaking C17. The META-LOOP PARTIAL-SURVIVE finding correctly tags this as phase-deferred, not failed.

- **~~Tier 3 CUMULATIVE-DEEP-REORG adoption sequencing.~~** **(RESOLVED 2026-06-09 — per-phase placement)** This blocked item is closed by the per-phase-placement framework refinement. Under per-phase placement, there is no CUMULATIVE-DEEP-REORG to coordinate — each sibling inquiry's content lives at its natural phase, independently. Adoption sequencing for per-phase placement is one-time at framework-adoption (relocate existing 8 §4 entries) and then per-inquiry-add-only thereafter.

### Research Frontiers

- **Cross-discipline external-grounding pattern unification.** This inquiry's External-Grounding test in `/td-critique`, `/innovate`'s Artifact-grounding refinement note in `/innovate`, sensemaking's Load-bearing concept test in `/sense-making`, and surfacing's bounded-territory concept in `/surfacing` are 4 instances of the same cross-discipline structural pattern. A future inquiry could investigate whether the pattern can be unified at the cognitive_harness level (rather than per-discipline) and what the unified pattern would look like.

- **~~Meta-question composability beyond 4 coordinates.~~** **(RESOLVED 2026-06-09 — per-phase placement)** This research-frontier item is closed by the per-phase-placement framework refinement. The "fundamental change in organizing pattern needed beyond 5+ coordinates" turned out to BE per-phase placement: the failure modes are distributed to their natural firing phase, removing the multi-coord meta-question entirely. The per-phase structure scales to N coordinates without composability concerns because the phase structure is a property of the discipline (not a property of the failure-mode catalog), so adding more failure modes adds rows to existing phase blocks rather than dimensions to a hook table.

### Refinement Triggers

- **Tier 1's Phase 0 claim-type triage.** Triggers re-open if (a) a corpus instance shows the triage over-firing (external-anchor dimensions required where no external anchor exists) OR under-firing (external-anchor dimensions not required where they should be); OR (b) Tier 2 entry's Detection sub-section needs to quote a different triage formulation.

- **Quarantine Mechanic lift criteria.** Triggers re-open if practical experience shows that the explicit-re-evaluation requirement is too strict (legitimate quarantines persist indefinitely) OR too loose (quarantines lift on insufficient evidence).

- **PARTIAL-SURVIVE META-LOOP verdict for prior 3 siblings.** Triggers re-open if prior 3 sibling proposals are implemented and observed in actual use; the phase-deferred sub-type (c) may then promote to STRONG, changing the verdict to FULL-SURVIVE.

- **The 4-way composition matrix's recommended adoption sequences.** Triggers re-open if a 5th sibling inquiry (top_7 failure type #5, #6, or #7) joins the matrix; the matrix becomes 5-way and the recommended sequences need re-derivation. **(Updated 2026-06-09)** Under per-phase placement, the composition matrix simplifies: each inquiry's content lives at its phase locus and composition is per-phase rather than cross-cutting. A 5th sibling joining the matrix adds rows to phase blocks, not coordinates to a cumulative hook-table — re-derivation cost drops materially.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
4. External-Grounding Absence

**Definition.** Critique evaluates the structural mechanism (internal consistency, candidate coherence, mechanism-independence) but never tests against EXTERNAL grounding — a canonical source text, an empirical artifact, or actual downstream consumer behavior.

**Mechanism.** All Innovation mechanisms produce structural arguments. Critique tests each via prosecution/defense — but if all mechanisms share the same structural-argument frame, **mechanism-independence is illusory** and critique's "N mechanisms converge" provides false confidence. The corrective requires comparing against an artifact OUTSIDE the inquiry's own reasoning.

**Corpus instances.**
- **00-51 ← 13-23** (confidently-wrong-structural-convergence-when-no-empirical-test): 8 Innovation mechanisms + 13 Critique dimensions converged on cutting Movement and Unlocks via Absence Recognition / derivability framings. NONE tested against the real 2026-05-25 readiness Route Map artifact. Both fields were empirically required. **Self-named project-process meta-observation**, flagged for /reflect promotion at N≥3.
- **15-20 ← 02-00** (load-bearing premise not tested against canonical source): Q10's pollution-vs-gating-vs-labels framing tested as a tradeoff space without reading `docs/desc.md`'s actual text — which named Baldwin's seed source as `/intuit` Phase β+ hunches, NOT routeman emissions.
- **19-00 ← 20-35** (canon line 109 not consulted): spec-grounding tested within routeman's own spec; project-wide canon governing all disciplines never cross-checked. Six "identity anchors" were loop-compatibility-biased readings.
- **05-30 ← 13-31** (sensemaking spec literal text not surfaced): three-axis distinctness props for UNDERSTAND passed without reading the sensemaking spec's literal sentence that already names its first operation's output as "understanding."
- **14-39 ← 16-31** (operational-architecture anchor missing): user's explicit endgame (multi-head + isolated routeman) named but not used as a constraint test against "in-context consumption" framing.
- **11-23 STANDALONE** (canonical artifact-naming pattern not applied): the routeman.md/_route.md naming template existed but wasn't used as an elevate-and-name check on the routelister design.
- **22-10 vs 23-15** (multi-defensible readings; convergence underdetermined): same dimensions, same artifacts, opposite verdicts based on weighting choice. Two defensible weight-derivations from the same user query both passed the same dimensions.

**Why current critique doesn't catch it.** None of the current 7 failure modes name "no external anchor." Mechanism-independence is currently treated as evidence of robustness, but when all mechanisms share an analytical frame (no empirical anchor across them), mechanism-independence ≠ ground-truth. "Self-reference collapse" is adjacent but covers a different concern (the candidate references itself as evidence).

**Corrective.** Require at least one dimension that demands an **empirical or canonical anchor**: a real-artifact test, a canonical-source-text quote, or a verifiable downstream-consumer behavior. If no such anchor is available, flag the verdict as "structurally-grounded only" and reduce confidence accordingly. **Mechanism-independence claim should be quarantined** until at least one mechanism rests on external evidence.

now dive deep into this one
```

</details>
