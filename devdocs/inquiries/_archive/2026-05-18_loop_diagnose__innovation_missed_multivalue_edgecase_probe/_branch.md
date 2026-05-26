# Branch: Loop Diagnose — Innovation Missed Multi-Value Edge-Case Probe at Schema-Commitment Piece

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/` (whose Innovation produced a `type:` frontmatter field as single-valued with closed enum `decision | spec-modification | recommendation | loop-diagnose` and a HALT-and-ask rule when missing), the human follow-up directive that triggered the rethink (asking "should `type:` handle findings that genuinely span multiple types — and if so, should the schema be multi-valued, primary-plus-secondary, or some other shape?"), and the corrected inquiry at `devdocs/inquiries/2026-05-17_01-09__finding_type_field_multi_value_consideration/` (which re-considered the schema decision under the edge-case probe and verdicted on whether multi-type findings exist as a real phenomenon and what schema shape follows) — **what did the Innovation discipline in the weak prior fail to do that it did not surface "what if a finding genuinely spans multiple types — does the single-valued enum schema break?" (or any equivalent edge-case-probe on its own committed schema) as a candidate, focusing strictly on Innovation's own responsibility surface per `cognitive_harness/innovate/references/innovate.md` and excluding what other disciplines should have done**?

## Goal

A diagnostic finding that identifies, with evidence from inquiry `10-50`'s archived `innovation.md` and the contrast with inquiry `01-09`'s edge-case probe and corrected schema verdict, Innovation's specific shortcoming(s) on this T1 correction chain. The output must be evidence-backed failure hypotheses scoped strictly to Innovation's defined responsibility per the `/innovate` reference. The output should:

(a) Identify why Innovation in `10-50` committed `type:` as single-valued with closed enum without surfacing edge cases where findings genuinely span multiple types. The expected diagnostic surface is the schema-commitment piece in `10-50`'s archived `innovation.md` — what mechanisms were applied at that piece, whether any of them probed edge cases against the proposed schema, and whether the 5-test cycle's Scrutiny-survival test (which canonically tests "what would break this?") fired on the schema's coverage.

(b) **Distinguish from the prior diagnostics in the series.** This is the fourth diagnostic in a 2026-05-18 series:
- The first 2026-05-18 diagnostic addressed **Pair #5** (T2 frame-reshape; Gap-1 territory): piece-level Inversion absence at relationship-label meta-decision piece.
- The second 2026-05-18 diagnostic addressed **Pair #7** (T4 intervention-shape correction; Gap-2 piece-level): Inversion-on-wrong-axis at property-(v) intervention-shape-commitment pieces.
- The third 2026-05-18 diagnostic addressed **Pair #8** (T4 methodology directive META; Gap-2 seed-level): seed-time methodology-mode-alternative-absence.
- This (the fourth) addresses **Pair #12** (T1 generative-content; edge-case probe sub-type): edge-case-probe absence at schema-commitment pieces. **The T-tag and gap-territory are structurally distinct from the prior three.** The prior 19-pair gap-analysis (`devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md`) named Gap-1 (T2) and Gap-2 (T4) as the two structural gaps; T1 was NOT named as a gap territory in that analysis. This case probes whether T1's "edge-case probe" sub-type is genuinely covered by `/innovate`'s existing mechanism vocabulary or whether there is a previously-uncharacterized gap.

(c) Distinguish Innovation's responsibility from Sensemaking's, Critique's, Decomposition's, and Exploration's. Other-discipline observations (whether sensemaking surfaced multi-type as an ambiguity; whether critique's adversarial test probed the schema's edge coverage; whether decomposition produced the schema piece in a form that didn't invite edge-probing) are observable in evidence but explicitly out-of-scope.

(d) Produce maintenance candidates ONLY when the diagnostic isolates a specific Innovation-side shortcoming with enough evidence to justify a future spec change. Honor the calibration discipline established in the prior three diagnostics: single-instance evidence supports refinement candidates, NOT pattern-naming at top-level failure-mode rank.

(e) Compose with the prior three 2026-05-18 diagnostics' refinement-set v3. The prior diagnostics' refinement-set v3 (8 effective pieces forming a three-layer vertical architecture: seed-time methodology-mode rule + piece-time generic Inversion rule + piece-time intervention-shape-axis Inversion rule + supporting vocabulary at §8.A/§8.B + telemetry extensions) operates on Inversion-at-meta-pieces and methodology-mode-at-seed-time. This T1 case may compose differently: edge-case-probe is a distinct mechanism axis from Inversion. The composition pattern (vertical-layering / integrated-extension / parallel-territory / something-else) is itself a load-bearing question for this diagnostic.

The user will use this finding (composed with the prior three) as input for a future redesign of `/innovate`. This inquiry is the fourth diagnostic step, not the redesign step.

## Scope Check

Question covers goal. The question asks for an Innovation-scoped diagnostic on this specific T1-edge-case-probe correction chain; the goal asks for evidence-backed failure hypotheses, distinction from the prior three diagnostics, attribution sharpness against other disciplines, and gated maintenance candidates that compose with the prior refinement-set v3.

**Specific-vs-pattern check:** the user's question is specific to one correction chain (Pair #12 of the 19-pair dataset). Per the calibration discipline established in the prior diagnostics, pattern claims require multi-case support. The phenomenon ("Innovation produces a schema-commitment without probing edge cases against the committed schema") is observable in this case; whether the pattern recurs across other T1 sub-types or other schema-commitment pieces is preserved as research frontier. T1 has 6 instances in the 19-pair dataset (Pairs #1, #2, #9, #10, #11, #12); only this one is being diagnosed here.

**Hard scope constraint:** Innovation-only. Same as the prior three diagnostics. Other-discipline failures named-and-excluded.

**Self-reference check:** same self-reference risk as prior diagnostics; same external-grounding sources (user's correction in `01-09`'s _branch.md; artifact contrast between `10-50`'s and `01-09`'s saved Innovation outputs; canonical `/innovate` reference; prior three 2026-05-18 diagnostics' independent evidence bases). The recursive self-application question (does this diagnostic's own Innovation run apply edge-case probing to its own piece-generation?) is in-scope to address but not load-bearing for the failure diagnosis.

**T-tag distinction:** Pair #12 is tagged T1 in the gap-analysis dataset, not T2 or T4. The prior three diagnostics addressed sub-types of Gap-1 (T2) and Gap-2 (T4). T1 territory was not named as a gap by the gap-analysis. This diagnostic probes whether T1's "edge-case probe" sub-type reveals a previously-uncharacterized gap (or whether it's covered by existing mechanisms with an application-level failure).

## Correction Chain

- **Prior path (weak; SAME as Pair #8's weak prior):** `devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/` — among its 8 load-bearing commitments, one piece committed `type:` frontmatter as single-valued with closed enum `decision | spec-modification | recommendation | loop-diagnose` plus a HALT-and-ask rule when missing. The artifact's 5-test cycle on this piece presumably did not surface multi-type findings as a real edge case.

- **Corrected path:** `devdocs/inquiries/2026-05-17_01-09__finding_type_field_multi_value_consideration/` — re-considered the schema decision under the edge-case probe. The corrected inquiry's `_branch.md` Layer Commitment declares **meaning** as the primary layer: the load-bearing question is "what is a finding type-wise — does a finding inherently have ONE type, or can it genuinely span types?" The schema (structural) and CONCLUDE behavior (process) follow from the meaning verdict.

- **Human directive (verbatim, from `01-09`'s `_branch.md` Question):**
  ```text
  Should the type: frontmatter key proposed in [10-50] (currently single-valued with enum ...) handle findings that genuinely span multiple types — and if so, should the schema be multi-valued (list form), primary-plus-secondary, or some other shape?
  ```

- **Optional context:**
  - The user has invoked LOOP_DIAGNOSE explicitly. Scope strictly to Innovation per user's framing.
  - This case is Pair #12 in `2026-05-17_22-51__innovation_improvement_pair_detection/finding.md`'s 19-pair dataset, tagged "T1 generative-content; edge-case probe."
  - The prior 19-pair gap-analysis named Gap-1 (T2 framer-suite under-elaboration) and Gap-2 (T4 procedural-meta absence) as the two structural gaps. T1 territory was NOT named as a gap. This diagnostic probes whether T1 has a structurally distinct sub-gap or whether the case is an application-level failure within existing-mechanism coverage.
  - **Structural distinction from prior three diagnostics:** the prior three addressed Inversion-related failures at Gap-1/Gap-2 territories. This case may be Inversion-related (edge-case probe is a near-relative of Inversion) OR it may need a distinct mechanism (Scrutiny-survival as a generator-style edge-case probe; an absence-recognition-style mechanism on the schema's coverage).

## Required Reads

Per LOOP_DIAGNOSE protocol Step 2, read for both `10-50` and `01-09`:
- `_branch.md`, `_state.md`, `finding.md`
- `docarchive/exploration.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md` — **innovation.md is load-bearing for this diagnostic; specifically the schema-commitment piece's mechanism log + 5-test cycle**

For the criterion of "what Innovation should do":
- `cognitive_harness/innovate/SKILL.md`
- `cognitive_harness/innovate/references/innovate.md`

For composition with prior diagnostics:
- `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/finding.md` (Pair #5 diagnostic; produced refinement-set v1)
- `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_produced_addtest_when_repair_correct/finding.md` (Pair #7 diagnostic; produced refinement-set v2)
- `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_contrarian_rethink_methodology_mode/finding.md` (Pair #8 diagnostic; produced refinement-set v3)
- `devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md` (19-pair gap-analysis; Gap-1 + Gap-2 named; T1 unaddressed as a gap)

## Diagnostic Constraints

- Treat the human follow-up directive as evidence, not noise.
- Treat the corrected inquiry's verdict (regardless of whether it commits to single-value with collapse-rule or multi-value schema) as comparative evidence about what edge-case probing surfaces, NOT as ground truth for what `10-50`'s Innovation should have produced.
- Prefer evidence-backed hypotheses over exact root-cause claims.
- Allow `mixed` or `unknown` attribution when evidence does not isolate Innovation's specific role.
- **Hard scope constraint: do NOT produce maintenance candidates for Sensemaking, Critique, Decomposition, or Exploration.** Other-discipline failures named-out-of-scope.
- Apply the existing `/innovate` reference's vocabulary throughout: mechanisms by name, tests by name, failure modes by name. Specifically: probe whether Scrutiny-survival's "what would break this?" test was applied at the schema-commitment piece, and whether Constraint Manipulation / Inversion / Absence Recognition was applied to the schema's single-value constraint.
- **Honor the relationship to the prior three diagnostics.** The prior three diagnostics' rules operate at meta-decision pieces (Pair #5 Q3) + property-(v) pieces (Pair #7 Q3-extension) + seed time (Pair #8 §9). Does the schema-commitment piece in `10-50` fit any of those scopes — i.e., does the existing composed v3 already catch this case (and Innovation simply didn't satisfy v3's rules)? Or does this case fall in a structurally distinct scope that v3 doesn't reach?
- Honor the calibration discipline (per the prior three 2026-05-18 diagnostics): single-instance evidence supports refinement candidates, not top-level failure-mode pattern-naming.
- **T-tag territory difference:** the prior three diagnostics addressed Gap-1/Gap-2 sub-types; this is T1. The prior gap-analysis did NOT name a T1 gap. Whether this case reveals an unnamed T1 sub-gap (and what its shape is) is a structurally load-bearing question. The diagnostic should explicitly probe: is "edge-case probe" within existing-mechanism coverage with application failure, OR is it a distinct mechanism axis not covered by Combination / Absence Recognition / Domain Transfer / Extrapolation / Lens Shifting / Constraint Manipulation / Inversion?

## Relationships

- **DIAGNOSES:** `devdocs/inquiries/2026-05-16_10-50__finding_md_format_redesign/` (weak prior whose Innovation committed `type:` as single-valued with closed enum without surfacing the multi-type edge case).
- **COMPARES WITH:** `devdocs/inquiries/2026-05-17_01-09__finding_type_field_multi_value_consideration/` (corrected inquiry that probed the multi-type edge case under explicit meaning-layer commitment).
- **RELATED:** `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/finding.md` (first 2026-05-18 diagnostic; Pair #5 Gap-1 T2; composition base).
- **RELATED:** `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_produced_addtest_when_repair_correct/finding.md` (second 2026-05-18 diagnostic; Pair #7 Gap-2 piece-level T4; composition base).
- **RELATED:** `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_contrarian_rethink_methodology_mode/finding.md` (third 2026-05-18 diagnostic; Pair #8 Gap-2 seed-level T4; composition base; same weak prior `10-50`).
- **RELATED:** `devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md` (19-pair gap-analysis; this case is Pair #12 tagged T1 edge-case-probe).
- **RELATED:** `cognitive_harness/innovate/references/innovate.md` (criterion artifact).
