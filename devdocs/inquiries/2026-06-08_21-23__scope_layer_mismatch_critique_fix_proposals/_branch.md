# Branch: scope_layer_mismatch_critique_fix_proposals

## Question

The question spans these load-bearing aspects (all preserved):

- **Subject** — The "Scope/Layer Mismatch in Defensive Mitigation" failure type identified as #5 in `devdocs/top_7_common_critique_failures.md`, in the context of the `/td-critique` discipline at `cognitive_harness/td-critique/`.
- **Action** — diagnose (understand the mechanism with structural precision; specifically: how a defense at scope X neutralizes a concern at scope Y) THEN design (propose concrete fixes).
- **Level** — discipline-level (modifications primarily to `cognitive_harness/td-critique/references/td-critique.md`); cross-spec hypothesis to be tested for `/innovate.md` and `/sense-making/` (Layer Commitment is sensemaking-defined).
- **Observation targets** (preserved separately per the multi-clause rule):
  1. The underlying mechanism of Scope/Layer Mismatch in Defensive Mitigation — what makes it different from existing failure modes (top_7 names "Layer-commitment scope respect dimension" as adjacent but DIFFERENT concern — note: that dimension does NOT currently exist in `td-critique.md` so the "adjacent existing dimension" is aspirational); whether the structural relationship is precondition-violation / cross-spec / inverse-companion-pair / foundational-assumption-violation (4 prior patterns) OR a NEW 5th pattern at SCOPE-DIRECTION-CONSISTENCY level; sub-mechanisms across 5 corpus instances (with cross-failure overlap on 14-39 ← 16-31 already noted in External-Grounding inquiry as sub-mechanism 4); the distinctive LOCUS — Phase 2 ADVERSARIAL EVALUATION DEFENSE step specifically.
  2. AT LEAST THREE solution proposals at structurally-distinct tiers (surgical / additional / significant) honoring the cumulative tier-shape vocabulary from prior 4 inquiries (4 cumulative clarifications: AA §10 tiers-as-edit-shapes + IFP §10 SS/CS sub-axis + Label-Tested §3 ADD/REPAIR sub-axis + External-Grounding 4th clarification both-sub-axes-apply).
  3. Plus/minuses per proposal (trade-off analysis using inherited axes + inquiry-specific axis).
  4. **5-way compositional analysis** with all 4 prior sibling inquiries (this × AA × IFP × Label-Tested × External-Grounding).
  5. **META-LOOP test of prior 4 siblings** including the just-completed External-Grounding-Absence finding's PARTIAL-SURVIVE pattern — extend the META-LOOP test to 4 priors with per-sibling per-sub-type accounting (now 4 × 3 = 12 cells).
  6. **Scope-Match Defense Dimension as a structurally distinct construct** — the corrective uses a TABLE (Defense Scope | Concern Scope per defense invocation), not a refinement note. This is the FIRST inquiry where the Tier 1 surgical proposal has TABLE-based construct shape vs prior siblings' all-prose refinement notes.
- **Deliverable shape** — design with N≥3 alternative proposals + explicit per-proposal trade-off analysis + 5-way compositional analysis with all 4 prior siblings + META-LOOP test of prior 4 siblings (extending External-Grounding-Absence's PARTIAL-SURVIVE pattern).

**The question.** What is the underlying structural mechanism of "Scope/Layer Mismatch in Defensive Mitigation" (specifically: how a defense invocation at scope X neutralizes a concern at scope Y while passing critique; whether this failure is precondition-violation / cross-spec precondition-violation / inverse-companion-pair / foundational-assumption-violation OR a NEW 5th SCOPE-DIRECTION-CONSISTENCY pattern; what sub-mechanisms produce the failure across 5 corpus instances; how the distinctive Phase 2 DEFENSE-step locus distinguishes it from prior siblings; whether the intervention surface is within-`td-critique.md` only or cross-spec to `/sense-making/` where Layer Commitment is defined OR `/innovate.md`), and what are at least 3 structurally-distinct solution proposals — surgical / additional / significant — for amending `td-critique.md` (and possibly `/sense-making/` / `/innovate.md`) that would fix it, with explicit plus/minus trade-off analysis per proposal AND 5-way compositional analysis with the Axis Absence + Inherited-Frame Preservation + Label-Tested + External-Grounding-Absence proposals AND a META-LOOP test of whether the prior 4 siblings' Critique convergence claims rest on external grounding AND have scope-matched defenses?

## Goal

- **Criterion** — proposals must be (a) actionable as concrete edits to specific sections of `td-critique.md` (and/or `/sense-making/` / `/innovate.md` if cross-spec), (b) grounded against the 5 corpus instances from top_7 §5 (retroactively testable per proposal), (c) honestly different in structural scope (per inherited cumulative 4-clarification tier vocabulary), (d) trade-off-honest, (e) compatible with the 4 just-completed sibling proposals, (f) demonstrate external grounding in their OWN design per External-Grounding-Absence's META-LOOP requirement, AND (g) the Tier 1 surgical proposal's TABLE-based construct shape (Defense Scope | Concern Scope) is structurally honored — this is the FIRST inquiry where the surgical proposal uses a table rather than prose refinement notes.
- **Use case** — the user will pick one or more proposals to implement; may compose with all 4 prior siblings; the META-LOOP analysis informs whether prior 4 sibling findings' Critique sections need scope-matched-defense revision.
- **Desired outcome** — clear mechanism understanding (including the Phase 2 DEFENSE-step distinctive locus + TABLE-based corrective construct) + concrete fix menu + 5-way cross-proposal composition map + honest META-LOOP assessment extending External-Grounding-Absence's PARTIAL-SURVIVE pattern to prior 4 siblings (now 4 × 3 = 12 cells).
- **What would fail** — three proposals all at the same tier; proposals that don't ground against 5 corpus instances; proposals that collapse Scope-Mismatch into External-Grounding (the adjacent prior sibling — Scope-Mismatch is at SCOPE-MATCHING level, External-Grounding at EVIDENCE-TYPE level) OR into Layer-Commitment scope respect (which doesn't exist as a dimension in `td-critique.md`); proposals that themselves contain unmatched-scope defenses (the very failure mode being investigated); META-LOOP analysis that whitewashes prior 4 siblings; Tier 1 proposal that ignores the structurally-distinct TABLE construct shape.

## Source Input

```text
## 5. Scope/Layer Mismatch in Defensive Mitigation

**Definition.** Critique invokes a check or mitigation at scope X to defend against a concern at scope Y. The mitigation is locally correct but operates at a different scope/layer than the failure mode it's meant to address.

**Mechanism.** Defense-phase reasoning often pulls a project memory (e.g., "PERMISSION-not-CONSTRAINT," "anti-FETCHING," "Layer Commitment", "structurally testable") and uses it to neutralize a concern. But the project memory was defined at one scope (LLM emission permission, input-reach constraint, meaning-layer scope, intra-spec testability) while the concern lives at another (downstream consumer behavior, emission content, structural-layer drift, persistent across the artifact). The defense passes critique without traversing the scope gap.

**Corpus instances.**
- **20-29 ← 21-52** (scope-mismatch crux K2): PERMISSION-not-CONSTRAINT invoked as mitigation for downstream-bias concern. **PERMISSION operates at LLM-emission scope; downstream-bias operates at consumer scope.** Consumers have no protocol to discount hedged content; the hedge propagates as actionable.
- **22-44 ← 23-18** (substrate-bounded chain transfer): D13 Substrate-compliance assumed satisfied because no fetching occurs. Conflated **input-reach (no fetching) with emission-content (a guess emitted as commitment).** Different scopes of the same constraint.
- **21-12 ← 21-58** (dispatch-frame vs runner-architecture): tested coherence within dispatch frame; never asked whether the runner architecture's actual decision-shape matched the dispatch framing. **No /surfacing-or-not decision exists, so no dispatch happens.**
- **14-39 ← 16-31** (operational shape clause vs user's architecture): "in-context consumption" passed as structural-relation; user's explicit endgame (isolated session + file-system input) operated at architecture scope.
- **20-35 ← 01-11** (procedural-mitigation accepted as substantive): "structurally testable, can be cross-checked" accepted as a defense without examining whether the cross-check actually closes the literal contradiction (§1.2's necessity sentence cannot be cross-checked away).

**Why current critique doesn't catch it.** No current failure mode names scope-mismatch in defense. The existing "Layer-commitment scope respect" dimension probes whether the VERDICT stays at the committed layer — but doesn't probe whether a DEFENSIVE MITIGATION operates at the same scope as the THREAT it mitigates.

**Corrective.** Add a **Scope-Match Defense Dimension**: for each defense invoked during prosecution-defense-collision, explicitly state (a) the defense's scope/layer (where it operates), (b) the concern's scope/layer (where the threatened failure operates), and (c) whether they match. If they don't, the defense is invalid. Use a simple two-column table: Defense Scope | Concern Scope.

---
dive deep into this one now
```

## Scope Check

Question covers goal. The Question explicitly asks for mechanism understanding + ≥3 tier-distinct proposals + plus/minus + 5-way cross-inquiry composition + META-LOOP analysis of prior 4 siblings + TABLE construct shape honored. The Goal's use-case + what-would-fail specs match all 7 criteria including the new (g) TABLE-construct-honored criterion.

Specific-vs-pattern check: 5 SPECIFIC corpus instances; broader pattern is the structural surface where defense invocations operate at different scope than the concern they mitigate. Proposals address the broader pattern with the 5 instances as ground truth.

**Important pre-surfacing finding to confirm during Surfacing:** the "Layer-commitment scope respect" existing dimension referenced in top_7 §5 does NOT exist as a literal dimension in `td-critique.md` (verified via grep). The reference is aspirational. This sharpens Tier 2: there is no clean REPAIR target for an existing "Layer-commitment scope respect dimension"; possible REPAIR target is the existing Multi-axis prosecution depth check refinement note OR ADD only. Surfacing should confirm and explore alternative REPAIR targets.

## Layer Commitment

Meta-question on the `/td-critique` discipline spec (POSSIBLY also `/sense-making/` and `/innovate.md`). Following the same primary-layer commitment as the prior 4 inquiries: STRUCTURAL primary.

**Primary layer: STRUCTURAL.** Deliverable is concrete spec edits.

**Foundational meaning-layer work:** understanding what SCOPE and LAYER mean as categories in this failure type (LLM-emission scope / consumer scope / input-reach scope / emission-content scope / meaning-layer scope / structural-layer scope / intra-spec scope / persistent-across-artifact scope — 8+ scopes named in source); understanding the structural distinction between defense-invocation-scope and concern-scope at the Phase 2 DEFENSE step specifically.

**Other layers considered:**
- **Process** — partially in scope. The Scope-Match Defense Dimension's TABLE construct has runtime-process implications (the table is filled per-defense at Phase 2 runtime). Process work may be needed to specify WHEN the table is filled and HOW it's checked. Sensemaking will adjudicate whether table-construct is structural-only or requires process-layer specification.

## Synthesis Trigger

This inquiry consumes the following prior outputs:

- `devdocs/100_critique_correction_chain_analysis.md` — the 48-pair corpus; the 5 Scope-Mismatch instances come from this. Including cross-failure-overlap on 14-39 ← 16-31 (already diagnosed in External-Grounding inquiry as sub-mechanism 4 user-stated-anchor-not-used) and 20-35 ← 01-11 (with potential connection to External-Grounding sub-mechanism 2 project-wide-canon-not-cross-checked).
- `devdocs/top_7_common_critique_failures.md` §5 (Scope/Layer Mismatch in Defensive Mitigation) — definition + mechanism + 5 corpus instances + corrective sketch (Scope-Match Defense Dimension with two-column table construct).
- `cognitive_harness/td-critique/references/td-critique.md` — the existing spec, especially Phase 2 Adversarial Evaluation (the Defense step is the LOCUS for this failure; the Multi-axis prosecution depth check refinement note may be an adjacent REPAIR target); §3.5 Assembly Check; §4 Failure Modes (especially #7 Self-Reference Collapse and existing modes for distinctness verification).
- `cognitive_harness/td-critique/SKILL.md` — invocation contract.
- `cognitive_harness/sense-making/references/sensemaking.md` — POSSIBLY in scope. Layer Commitment is sensemaking-defined; this inquiry may need to cross-reference sense-making's Layer Commitment definition for the "scope/layer" semantics used in §5 Corrective.
- `cognitive_harness/innovate/` — POSSIBLY in scope. /innovate's mechanism-independence and Artifact-grounding refinement notes may need to be cross-checked for whether any are themselves at risk of scope-mismatch in defense.
- `devdocs/inquiries/2026-06-08_17-43__axis_absence_critique_fix_proposals/finding.md` — Axis Absence finding; tier-shape vocabulary inherited; META-LOOP test target.
- `devdocs/inquiries/2026-06-08_19-10__inherited_frame_preservation_critique_fix_proposals/finding.md` — Inherited-Frame Preservation finding; cross-spec sub-axis inherited; META-LOOP test target.
- `devdocs/inquiries/2026-06-08_20-00__label_tested_substance_untested_critique_fix_proposals/finding.md` — Label-Tested finding; Tier 2 intervention-shape sub-axis inherited; INVERSE-COMPANION-PAIR construct inherited; META-LOOP test target.
- `devdocs/inquiries/2026-06-08_20-42__external_grounding_absence_critique_fix_proposals/finding.md` — External-Grounding-Absence finding; FOUNDATIONAL-ASSUMPTION-VIOLATION construct inherited; 4th cumulative clarification (both-sub-axes-apply) inherited; PARTIAL-SURVIVE META-LOOP pattern inherited and EXTENDED to 4 priors.

CONCLUDE will require an `## Inherited Commitments Re-test` section. Each proposal must be tested against (a) 5 corpus instances, (b) existing failure-mode definitions for distinctness, (c) all 4 just-articulated sibling proposals (5-way composition check), (d) the cumulative 4-clarification tier-shape vocabulary, (e) demonstrate the proposal's OWN external grounding (per External-Grounding META-LOOP requirement), AND (f) demonstrate the proposal's OWN scope-matched defenses (the very property being investigated).

**Important cross-failure note for re-test:** The prior 4 inquiries established 4 distinct structural relationship patterns at 4 different LEVELS of structural critique (completeness / frame / empirical-signature / evidence-epistemology). Sensemaking must test whether Scope-Mismatch has a FIFTH distinct relationship (SCOPE-DIRECTION-CONSISTENCY at the Phase 2 DEFENSE-step level) OR fits one of the existing 4 patterns. Do not collapse onto any of the prior 4 uncritically. The cross-failure-interaction with #4 External-Grounding-Absence is already named in top_7 ("canonical source exists at scope X; critique evaluates at scope Y") — this case fires BOTH #4 and #5 together.

**Critical META-LOOP note (extended from External-Grounding-Absence inquiry):** This inquiry investigates a failure mode whose existence, if real, makes ALL 4 prior siblings' Critique sections potentially vulnerable to scope-mismatched defenses. Sensemaking and Critique must explicitly test whether any defense invocation in any of the 4 prior siblings' Critique sections matched the concern's scope. The META-LOOP test now covers 4 × 3 = 12 cells of per-sibling per-sub-type accounting from External-Grounding PLUS the per-sibling Scope-Match check (4 × 1 = 4 additional cells), total 16 cells.

**Important cross-failure overlap notes:**
- **14-39 ← 16-31** appears in this inquiry AND in External-Grounding-Absence sub-mechanism (4). Different diagnoses: External-Grounding = user-stated anchor not used as constraint test; Scope-Mismatch = "in-context consumption" at SHAPE scope vs user's endgame at ARCHITECTURE scope. Both load-bearing at different layers.
- **20-35 ← 01-11** appears in this inquiry AND POTENTIALLY in External-Grounding-Absence (project-wide canon line 109). Need to verify whether they're the same diagnosis at different layers OR different diagnoses entirely.
- **22-44 ← 23-18** appears in this inquiry. In Label-Tested it appeared as sub-mechanism (2) WORKED-EXAMPLE not interrogated literally. Different diagnoses across siblings.

**Critical structural note: TABLE construct shape.** The corrective in top_7 §5 explicitly specifies a TABLE construct ("Defense Scope | Concern Scope" two-column table per defense invocation). This is STRUCTURALLY DISTINCT from prior 4 siblings' refinement-note constructs. Innovation must produce TABLE-shaped Tier 1 surgical proposal; Decomposition must distinguish table-construct-piece from refinement-note-construct-piece.
