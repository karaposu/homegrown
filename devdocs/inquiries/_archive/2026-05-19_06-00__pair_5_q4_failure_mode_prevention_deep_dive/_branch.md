# Branch: Deep Dive — Pair 5 Q4 Failure-Mode Prevention Refinements (Early Frame Lock + Survival Bias)

## Question

Should Pair 5 Q4 (two refinements: mechanism-TYPE-aware prevention at Early Frame Lock + prior-step never-generate prevention at Survival Bias) be committed to `cognitive_harness/innovate/references/innovate.md`, committed in modified form, or remain DEFERRED — given that the Piece-Level Inversion Rule + Meta-Decision-Piece Criterion are now LIVE in the spec?

## Goal

Produce a finding.md that:

- **Adjudicates Q4's structural necessity.** Q4 has TWO sub-pieces (Early Frame Lock refinement + Survival Bias refinement). Test each: does the substance add operationally novel content, or is it redundant with the live Piece-Level Inversion Rule?

- **Per sub-piece adjudication:**
  - **Q4a (Early Frame Lock mechanism-TYPE-aware prevention):** the existing Early Frame Lock failure mode rule says "apply at least one more mechanism after first successful output" (count-based). Q4a refines: at meta-decision pieces, the additional mechanism MUST include Inversion specifically (TYPE-based). Is this refinement load-bearing or redundant?
  - **Q4b (Survival Bias prior-step prevention):** the existing Survival Bias rule says "deliberately test the most uncomfortable output" (presupposing the output exists). Q4b refines: at meta-decision pieces with unidirectional candidate sets, the uncomfortable alternative was never generated; apply piece-level Inversion to surface it. Is this refinement load-bearing or redundant?

- **If commit / modified-commit:** produce the exact spec edit text for each sub-piece (modified for current post-A+B+C+05-00 state — no §-numbered references; descriptive cross-references to live rules). Specify insertion location at Failure Modes section.

- **If defer:** explain why; document the alternative (e.g., live Piece-Level Inversion Rule already catches the cases Q4 was designed to catch).

- **Application authority:** PENDING user authorization.

- **Layer-3 §9 self-application record.** Production-task seed (potentially produces direct spec edits). Property (v) may fire. **Fifth consecutive Production-task opportunity** for the trigger; aim for no-override per established pattern.

## Scope Check

Question covers goal. Specific-vs-pattern check: Q4 is two specific sub-pieces; this inquiry adjudicates each individually + aggregate.

## Layer Commitment

**Primary layer: STRUCTURAL.** Decides whether to add refinement notes at two existing Failure Mode sections.

**Other layers out of scope:**
- **MEANING** — Pair 5's Q4 substance is committed at the originating diagnostic; not re-litigated.
- **PROCESS** — procedural workflow deferred.

## Synthesis Trigger

This inquiry synthesizes 6+ priors:

- `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/finding.md` — Pair 5 Q4 original proposal text.
- `cognitive_harness/innovate/references/innovate.md` — Current /innovate spec (post-A+B+C+05-00; ~746 lines; contains Failure Modes section with Early Frame Lock + Survival Bias + Piece-Level Inversion Rule + Meta-Decision-Piece Criterion).
- `devdocs/inquiries/2026-05-19_03-00__innovate_spec_edit_subinquiry_b_piece_level_rules_methodology_mode/finding.md` — Sub-Inquiry B's deferral reasoning for Q4.
- `devdocs/inquiries/2026-05-19_05-00__pair_5_q1_inversion_definitional_clarification_deep_dive/finding.md` — Q1 deep dive established the 4-alternative-analysis pattern + minimum-sufficient calibration discipline; reusable framework.
- `devdocs/inquiries/2026-05-19_02-00__innovate_spec_edit_subinquiry_a_inherited_frame_audit/finding.md` — A1's Inherited Frame Audit at phase-boundary (related to Frame Lock recognition).
- `devdocs/inquiries/2026-05-19_01-00__innovate_spec_audit_committed_vs_pending/finding.md` — Convention origins.

CONCLUDE's Inherited Commitments Re-test required.

## Diagnostic Constraints

- **Hard scope:** Q4 adjudication only (two sub-pieces).
- **Calibration discipline:** apply Q1 deep-dive's framework (4 alternatives: full / mid / lighter / status quo) per sub-piece.
- **Layer-3 §9 self-application:** 5th consecutive opportunity for the trigger. Aim for no-override.

## Relationships

- **CONTINUES FROM:** Q1 deep dive (05-00) — uses same 4-alternative-analysis framework + minimum-sufficient calibration.
- **EDITS (conditionally):** `cognitive_harness/innovate/references/innovate.md` (only if Q4 commits).
- **RELATED:** Pair 5 finding (Q4 origin); A+B+C sub-inquiries; 01-00 audit; 05-00 Q1 deep dive.
