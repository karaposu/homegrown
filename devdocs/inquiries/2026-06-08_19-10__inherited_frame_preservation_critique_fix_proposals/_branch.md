# Branch: inherited_frame_preservation_critique_fix_proposals

## Question

The question spans these load-bearing aspects (all preserved):

- **Subject** — The "Inherited-Frame Preservation" failure type identified as #1 in `devdocs/top_7_common_critique_failures.md`, in the context of the cross-spec critique-evaluation mechanism (which lives partly in `cognitive_harness/td-critique/references/td-critique.md` and partly in `cognitive_harness/protocols/conclude.md`'s "Inherited Commitments Re-test" pattern).
- **Action** — diagnose (understand the underlying mechanism with structural precision) THEN design (propose concrete fixes spanning surgical / additional / significant scope tiers).
- **Level** — spec-level edits to `td-critique.md` and/or `conclude.md`, plus possibly `_branch.md`'s Layer Commitment section template.
- **Observation targets** (preserved separately per the multi-clause rule):
  1. The underlying mechanism of Inherited-Frame Preservation — what makes it different from the existing "Wrong Dimensions" and "Dimension Blindness" failure modes; the structural relationship to the just-completed Axis Absence finding (Meta-A "Frame-bounded blindness" cluster sibling); the precise role of CONCLUDE's "Inherited Commitments Re-test" pattern AS the failure surface (the re-test is structured for preservation-verification, not commitment-testing).
  2. AT LEAST THREE structurally-distinct solution proposals spanning surgical / additional / significant scope tiers (matching the codebase's existing edit-shape precedents).
  3. Plus/minuses of each proposal (trade-off analysis honoring the 5 trade-off axes that worked for the Axis Absence inquiry + any new axes specific to Inherited-Frame Preservation, such as cross-spec edit complexity).
- **Deliverable shape** — design with N≥3 alternative proposals + explicit per-proposal trade-off analysis + compositional notes (which proposals compose vs. which are redundant).

**The question.** What is the underlying structural mechanism of "Inherited-Frame Preservation" (specifically: how does CONCLUDE's "Inherited Commitments Re-test" pattern produce preservation-verification rather than commitment-testing; how does the Layer Commitment construct contribute to frame-inheritance; how is Inherited-Frame Preservation distinct from but related to the just-articulated Axis Absence failure mode), and what are at least 3 structurally-distinct solution proposals — spanning surgical edits, additional sections/entries, and significant rewrites of `td-critique.md` and/or `conclude.md` — that would fix it, with explicit plus/minus trade-off analysis per proposal?

## Goal

- **Criterion** — proposals must be (a) actionable as concrete edits to specific spec sections in `td-critique.md` and/or `conclude.md` (and/or `_branch.md` template), (b) grounded against the 7 corpus instances from `top_7_common_critique_failures.md` §1 (each pair retroactively tested per proposal), (c) honestly different in structural scope (refinement-note pattern vs. new failure-mode entry vs. organizing-pattern restructure), (d) trade-off-honest (real minuses named, not strawman), (e) compatible with the just-completed Axis Absence proposals (which committed to a specific tier-shape vocabulary).
- **Use case** — the user will pick one or more proposals to implement; they may also choose to compose with the Axis Absence proposals (e.g., adopt both fixes together in one spec-edit pass).
- **Desired outcome** — a clear understanding of the cross-spec mechanism + a small menu of fixes with explicit trade-offs, so the user can decide between minimal-risk surgical patches vs. larger architectural restructuring at one or both specs.
- **What would fail** — three proposals that are all "add another dimension to td-critique.md" (no scope variance, no cross-spec exploration); proposals that don't ground against the 7 corpus instances; proposals that collapse Inherited-Frame Preservation into Axis Absence (the two are sibling failures in the Meta-A cluster but operate at different levels — Axis Absence is dimension-space-construction; Inherited-Frame Preservation is cross-inquiry frame-inheritance); proposals with only-positives plus/minus analysis.

## Source Input

```text
## 1. Inherited-Frame Preservation

**Definition.** Critique tests claims *within* the inherited frame but never tests the frame itself. The dimension list is constructed FROM the frame — so it can only evaluate things the frame considers evaluable. Claims about the frame's own premises are treated as commitments-to-preserve rather than candidates-to-test.

**Mechanism.** A prior inquiry establishes a frame (e.g., "Meta-question is one operation"; "routeman's machinery is mature, carry it"; "dispatch is the right concept"; "the cumulative IE design accretions are load-bearing"). Subsequent critique inherits the frame as part of "Inherited Commitments Re-test" and verifies preservation. The frame's own load-bearing premises are never re-questioned — when a later inquiry finds the frame premise was wrong, critique had no dimension that could have caught it.

**Corpus instances.**
- **21-58** (dispatch-as-frame): tested coherence within the dispatch-substrate framing without asking whether the runner actually has a /surfacing-or-not decision to make. **"Dispatch" was the wrong technical term entirely; the right concept was "preparation substrate."**
- **00-11 ← 10-03** (MQ-as-atomic-category): tested whether variant (a) preserved commitments without testing whether "Meta-question" was a structurally coherent atomic category. It wasn't — it instantiates 3 distinct types.
- **15-28 ← 15-39** (cumulative IE accretions): tested cumulative design's internal coherence without asking whether each accreted commitment was still pulling its weight. The from-scratch successor dropped most of them as "architectural accretions, not capabilities."
- **24-00 ← 00-51 / 24-00 ← 12-30** (heavy-machinery preserved as inheritance): treated multi_resolution_navigation.md vocabulary as authoritative baseline rather than a candidate needing semantic re-test. Result: dead-inheritance contamination (4 vectors).
- **20-08 ← 22-30** (definition of "discipline" hidden assumption): "one operation per discipline" inherited without checking against the existing discipline set — `/sense-making` itself composes two operations (Comprehending + Stabilizing).
- **01-30 ← 17-08** (loop-bound attributes treated as content-independent): evaluated taxonomy entirely within routeman's loop-bound frame; every attribute lost grounding outside that frame.
- **19-00 ← 20-35** (loop-compatibility-bias narrowing): six identity anchors read through loop-context filter; canon line 109 governing all disciplines never brought into the test.

**Why current critique doesn't catch it.** The "Inherited Commitments Re-test" mechanism (per CONCLUDE protocol) is structured as preservation-verification — it tests whether candidates honor inherited commitments, not whether the commitments themselves are still valid. The Layer Commitment construct also tends to inherit the upstream layer's premises rather than test them.

**Corrective.** Add a **Frame-Test dimension**: per inquiry, explicitly name 2-3 load-bearing premises the frame is resting on, then dedicate at least one prosecution to "what if THIS PREMISE is wrong?" — independently of testing the candidate. If the frame can't be named, that's itself a signal (the frame is invisible to the prosecutor).  

lets dive deep into this one,
```

## Scope Check

Question covers goal. The Question explicitly asks for mechanism understanding + ≥3 tier-distinct proposals + plus/minuses + compositional notes; the Goal's use-case + what-would-fail specs match.

Specific-vs-pattern check: the user references SPECIFIC failure type #1 with 7 SPECIFIC corpus instances, but the structural fix is about the BROADER cross-inquiry frame-inheritance mechanism (CONCLUDE's Inherited Commitments Re-test + Layer Commitment construct + critique's dimension-list construction). This is correctly scoped — proposals address the broader mechanism, with the 7 corpus instances serving as retroactive test ground truth.

## Layer Commitment

This is a meta-question on critique-spec-and-protocol-spec edits (framework artifacts). Following the same primary-layer commitment as the just-completed Axis Absence inquiry (which the user accepted as the working pattern), this inquiry commits to STRUCTURAL primary with meaning foundational.

**Primary layer: STRUCTURAL.** The deliverable is concrete edits to spec sections (in `td-critique.md` and/or `conclude.md` and/or `_branch.md` template). The user asked for proposals at the section/edit level.

**Foundational meaning-layer work declared but not the deliverable.** Understanding the cross-spec mechanism (specifically the precondition-violation-like structural relationship between Inherited-Frame Preservation and the existing CONCLUDE re-test pattern; how it sits in the Meta-A cluster with Axis Absence) is preparatory: it grounds the structural proposals but is not the primary commitment.

**Other layers considered + out of scope:**
- **Process** — out of scope. Implementing the structural changes will involve process-layer choices (when the Frame-Test prosecution fires in a real `/td-critique` invocation; how the practitioner enumerates the 2-3 load-bearing frame premises). Process design is downstream of picking a structural proposal. A follow-up process-layer inquiry should run once one of the proposals is selected, paralleling the Axis Absence inquiry's deferred process-layer COULD.

## Synthesis Trigger

This inquiry consumes the following prior outputs:

- `devdocs/100_critique_correction_chain_analysis.md` — the 48-pair corpus analysis with per-pair "what critique missed" diagnoses. Carries commitments about which pairs fall under which failure type, including the 7 Inherited-Frame Preservation pairs and their specific blindspot mechanisms.
- `devdocs/top_7_common_critique_failures.md` §1 (Inherited-Frame Preservation) — names the 7 corpus instances, sketches the Frame-Test dimension corrective, identifies CONCLUDE's re-test pattern as preservation-verification (not commitment-testing), and identifies Inherited-Frame Preservation as part of the Meta-A "Frame-bounded blindness" cluster (with #2 Axis Absence and #7 Cross-Sibling Critique Silo).
- `cognitive_harness/td-critique/references/td-critique.md` — the existing critique discipline spec. Carries commitments about Phase 0 Dimension Construction, the 6 default dimensions, the project-specific risk dimension check refinement note, the 7 failure modes (specifically Wrong Dimensions #1 and Dimension Blindness #4), the Phase 2 multi-axis prosecution depth check refinement note, and the adversarial prosecution-defense-collision structure that any Frame-Test dimension would operate within.
- `cognitive_harness/protocols/conclude.md` — the per-inquiry compilation protocol carrying the "Inherited Commitments Re-test" enforcement that fires on Synthesis Trigger declarations OR on `refines:`/`supersedes:`/`corrects:` frontmatter with N≥3 inherited commitments. The protocol's preservation-verification framing IS the failure mechanism per top_7 §1. This is potentially the primary structural target for proposals.
- `cognitive_harness/td-critique/SKILL.md` — the discipline invocation spec. Less load-bearing for proposal content but defines the SKILL's reference-load contract; if any proposal renames or extends failure modes, this list needs updating.
- `devdocs/inquiries/2026-06-08_17-43__axis_absence_critique_fix_proposals/finding.md` — the just-completed sibling-failure inquiry's finding. Carries commitments about the 3 structurally-distinct edit tiers (surgical = refinement-note / additional = new failure-mode entry / significant = hook-table restructure) with codebase precedents; the precondition-violation structural pattern (which may apply to Inherited-Frame Preservation as well, in a different precondition-violation relationship); the tier-ladder-with-substrate-and-picker architecture; the Phase 0 Axis-completeness probe specific drafted text (which may interact with this inquiry's proposals if both fixes land at Phase 0).

CONCLUDE will require an `## Inherited Commitments Re-test` section. Specifically, each proposal must be tested against (a) the 7 corpus instances, (b) the existing failure-mode definitions of Wrong Dimensions and Dimension Blindness (to verify Inherited-Frame Preservation is genuinely distinct, not a re-labeling), (c) the just-articulated Axis Absence proposals (to verify cross-failure compatibility — e.g., if Tier 1 of this inquiry also lands at Phase 0, does it compose with Axis Absence's Phase 0 probe, or do the two conflict?), (d) CONCLUDE's existing "Inherited Commitments Re-test" enforcement (any proposal that changes this enforcement must explicitly state the migration path for existing inquiries that already declared Synthesis Triggers), and (e) the Layer Commitment construct in `_branch.md` template (which top_7 §1 names as contributing to the failure — any proposal that touches Layer Commitment must specify the change).

**Important cross-failure note for re-test:** The just-completed Axis Absence finding declared the precondition-violation relationship Axis-Absence-fires-when-Dimension-Blindness's-prevention-silently-fails. By analogy, Inherited-Frame Preservation might have a similar precondition-violation relationship to one of the existing failure modes (most likely #5 False Convergence or #6 Evaluation Drift). Sensemaking should test this analogy carefully — it might hold structurally, or it might NOT hold and Inherited-Frame Preservation might have a DIFFERENT structural relationship (e.g., a cross-inquiry rather than within-inquiry pattern). The Axis Absence inquiry's precondition-violation framing should not be inherited uncritically.
