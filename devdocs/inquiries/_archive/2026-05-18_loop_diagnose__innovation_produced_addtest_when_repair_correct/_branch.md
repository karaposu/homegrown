# Branch: Loop Diagnose — Innovation Produced ADD-TEST When REPAIR Was the Correct Intervention Shape

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/` (whose Innovation produced **M1: ADD a sixth scope-fidelity-to-framing test to `/innovate`'s Phase 3** as the primary maintenance candidate), the human correction (*"this is not a simple misunderstanding. we want to detect the bad part of that skill to remove it not just add more tests... refocus on homegrown/innovate/references/innovate.md to understand this error. also u can compare with old version which did not had such errors /Users/ns/Desktop/projects/native/bf4ae1f-hg/bf4ae1f-innovate/references/innovate.md and try to understand what change is causing the error"*), and the corrected inquiry at `devdocs/inquiries/2026-05-14_15-00__find_innovate_spec_regression_remove_root_cause/` (which switched the intervention shape from ADD-TEST to REPAIR, performed a diff against an older `/innovate` version, identified the load-bearing problematic spec text, and downgraded the previously-named "loop-stage scope-leakage" failure mode to a descriptive phrase) — **what did the Innovation discipline in the weak prior fail to do that it produced ADD-TEST as the intervention shape when REPAIR was the structurally correct shape, focusing strictly on Innovation's own responsibility surface per `cognitive_harness/innovate/references/innovate.md` and excluding what other disciplines should have done**?

## Goal

A diagnostic finding that identifies, with evidence drawn from inquiry `14-00`'s archived `innovation.md` and the contrast with inquiry `15-00`'s corrected approach, Innovation's specific shortcoming(s) on this correction chain. The output must be evidence-backed failure hypotheses scoped strictly to Innovation's defined responsibility per the `/innovate` reference. The output should:

(a) Identify why Innovation surfaced ADD-TEST as the only intervention-shape candidate and did not surface alternative shapes (REPAIR, REVERT-REGRESSION, REFRAME-AS-BUG, DO-NOTHING, REORGANIZE-WITHOUT-ADDING). The 14-00 Innovation explicitly applied Inversion at the M1 piece (the mechanism log reads "Constraint Manipulation + Absence Recognition + Inversion") — so this is NOT a case of Inversion-absence (the failure-mode of the prior diagnostic at `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/finding.md`). Inversion was applied; the question is on what AXIS the Inversion operated.

(b) Distinguish the structural difference between this case and the prior diagnostic's case (the mapping-redo case, Pair #5 of the 19-pair dataset, tagged T2 frame-reshape). This case is Pair #7 of the same dataset, tagged **T4 methodology directive — intervention-shape correction**. The prior gap-analysis at `devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md` named two structural gaps in `/innovate`: Gap-1 (T2 framer-suite under-elaboration; refined by the prior diagnostic to "Inversion-extension-to-meta-targets is missing") and Gap-2 (T4 procedural-meta absence). This case appears to instantiate Gap-2 cleanly: `/innovate`'s seven mechanisms operate on candidate content; they have no native vocabulary for "intervention-shape alternatives" as a candidate space.

(c) Distinguish Innovation's responsibility from Sensemaking's, Critique's, Decomposition's, and Exploration's — when the evidence suggests a failure that lives elsewhere, flag it as out-of-scope and do not propose Innovation-side fixes for it. Sensemaking's role in determining the failure-mode framing (named-pattern vs descriptive phenomenon; subsequently downgraded by `15-00`); Decomposition's role in the piece-list it produced for `14-00`; Critique's role in not adversarially testing the M1 candidate against alternative intervention shapes — all observable in evidence; all out of scope for this diagnostic.

(d) Produce maintenance candidates ONLY when the diagnostic isolates a specific Innovation-side shortcoming with enough evidence to justify a future spec change. Otherwise note the candidate as monitoring-only or research-frontier.

(e) Honor the relationship to the prior Innovation-gap diagnostic at `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/finding.md`. That finding addressed Gap-1 (refined). Its research-frontier section explicitly preserved Gap-2 (procedural-meta) as a separate inquiry. This case IS that separate inquiry. The two refinement-sets (the prior diagnostic's 5-piece set + whatever this one produces) may compose; the composition is in-scope to note but not in-scope to construct (a separate composition inquiry is the right home for that).

The user will use this finding as input for a future redesign of `/innovate`, composed (potentially) with the prior diagnostic's refinement-set. This inquiry is the diagnostic step for Gap-2, not the redesign step.

## Scope Check

Question covers goal. The question asks for an Innovation-scoped diagnostic on a specific T4 correction chain; the goal asks for evidence-backed failure hypotheses, distinction from the prior T2 diagnostic, attribution sharpness against other disciplines, and gated maintenance candidates.

**Specific-vs-pattern check:** the user's question is specific to one correction chain (Pair #7 of the 19-pair dataset). Per the LOOP_DIAGNOSE protocol's diagnostic constraints, the finding should focus on this specific case's evidence; broader pattern claims about Innovation's intervention-shape behavior require multiple correction chains and are out of scope. If a broader pattern is suggested by this case (e.g., "Innovation systematically defaults to ADD-shape interventions across T4 sub-types"), record it as a monitoring observation or research frontier, not as an actionable claim.

**Specific-vs-pattern (sub-claim):** the user's scope constraint *"only focus on what innovation should do, and not job of other disciplines"* is itself a specific framing instruction (now applied to two diagnostics in succession). Carry through strictly — failures attributable to Sensemaking, Critique, Decomposition, or Exploration get named-and-out-of-scope-flagged, not solved.

**Self-reference check:** this inquiry uses the `/innovate` reference (`cognitive_harness/innovate/references/innovate.md`) as the criterion for what Innovation should do. Same self-reference risk as the prior diagnostic. The prior diagnostic's research-frontier item explicitly preserved Gap-2 as a separate inquiry; this inquiry honors that preservation. External grounding: the user's correction is the independent signal; the contrast between `14-00` (ADD-TEST) and `15-00` (REPAIR + downgrade of "loop-stage scope-leakage") is the artifact-level evidence; the canonical `/innovate` reference is the criterion artifact.

**Self-reference (composition with prior diagnostic):** the prior diagnostic (`2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo`) proposed a 5-piece refinement-set including piece-level Inversion at meta-decision pieces. **Critical detail:** in this case, the prior diagnostic's proposed rule would have FIRED — `14-00`'s M1 piece is a meta-decision piece (it commits to an evaluation-criterion: how downstream Innovation runs will judge scope-fidelity). And the rule's compliance criterion (generate Inversion-candidate AND test) was already SATISFIED — Inversion was applied at the piece. Yet the failure occurred. This is structurally important: it means the prior diagnostic's Gap-1 refinement-set is NECESSARY but NOT SUFFICIENT for catching the T4 failure-shape. The current diagnostic addresses what's missing beyond the prior set.

## Correction Chain

- **Prior path (weak):** `devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/` — Innovation produced **M1 (ADD-TEST shape)**: a sixth scope-fidelity-to-framing test added to `/innovate`'s Phase 3.

- **Corrected path:** `devdocs/inquiries/2026-05-14_15-00__find_innovate_spec_regression_remove_root_cause/` — re-framed intervention as **REPAIR** of `/innovate`'s Combination mechanism (specifically B3 at line 126 of the references file: removing the "project" entry from the "What's already nearby" source list); performed diff against an older `/innovate` version; downgraded "loop-stage scope-leakage" from named-failure-mode to descriptive phrase; retracted the fourth-member family positioning.

- **Human correction (verbatim):**
  ```text
  this is not a simple misunderstanding. we want to detect the bad part of that skill to remove it not just add more tests. and we should not have multiple test all the way. one good test all sufficient. refocus on homegrown/innovate/references/innovate.md to understand this error. also u can compare with old version which did not had such errors /Users/ns/Desktop/projects/native/bf4ae1f-hg/bf4ae1f-innovate/references/innovate.md and try to understand what change is causing the error
  ```

- **Optional context:**
  - The user has invoked LOOP_DIAGNOSE explicitly. Scope strictly to Innovation per the user's framing.
  - This case is tagged Pair #7 in `2026-05-17_22-51__innovation_improvement_pair_detection/finding.md`'s 19-pair dataset, sub-type "intervention-shape correction (REPAIR-not-ADD-TEST)." That gap-analysis named Gap-2 (T4 procedural-meta absence) as the structural cause. This case is expected to instantiate Gap-2.
  - The prior `2026-05-18` diagnostic (the mapping-redo case) addressed Gap-1 (T2 framer-suite under-elaboration); its research-frontier preserved Gap-2 explicitly for a separate inquiry. This is that inquiry.
  - **Notable observation:** `14-00`'s Innovation explicitly applied Inversion at the M1 piece. The mechanism log reads "Constraint Manipulation + Absence Recognition + Inversion (3 mechanisms converge)." This case is NOT Inversion-absence — Inversion was applied. The question is on what AXIS Inversion operated (content vs intervention-shape) and whether `/innovate`'s mechanism vocabulary has a way to surface "intervention-shape alternatives" as a candidate space at all.

## Required Reads

Per LOOP_DIAGNOSE protocol Step 2, read for both `14-00` and `15-00`:

- `_branch.md` (already read for both)
- `_state.md`
- `finding.md` (already partially read for `15-00`)
- `docarchive/exploration.md`
- `docarchive/sensemaking.md`
- `docarchive/decomposition.md`
- `docarchive/innovation.md` — **load-bearing for this diagnostic; read in full** (especially `14-00`'s P2.4a piece — the M1 candidate generation and 5-test cycle)
- `docarchive/critique.md` — read to distinguish innovation's failures from critique's failures, NOT to diagnose critique

For the criterion of "what Innovation should do":

- `cognitive_harness/innovate/SKILL.md`
- `cognitive_harness/innovate/references/innovate.md` (the seven mechanisms, five tests, assembly check, axis-coverage check, failure modes)

For the prior gap-analysis and the prior diagnostic to position this inquiry's contribution:

- `devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md` (already in context; Gap-1 and Gap-2)
- `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/finding.md` (already in context; Gap-1's refinement-set, with Gap-2 preserved as research-frontier)

Do not diagnose from `finding.md` alone — the discipline outputs in `docarchive/` contain Innovation's actual mechanism applications, candidate generation, and self-assessment. The M1 generation piece in `14-00`'s `innovation.md` is the load-bearing artifact.

## Diagnostic Constraints

- Treat the human correction as evidence, not noise.
- Treat the corrected inquiry `15-00`'s Innovation output as comparative evidence (what Innovation produced when given the corrected framing), NOT as ground truth for what `14-00`'s Innovation should have produced exactly. `15-00`'s Innovation operated under a different `_branch.md` framing (REPAIR was explicitly named in the inquiry's seed); the diagnostic is asking what `14-00`'s Innovation could have surfaced under its own framing.
- Prefer evidence-backed hypotheses over exact root-cause claims.
- Allow `mixed` or `unknown` attribution when evidence does not isolate Innovation's specific role.
- Produce maintenance candidates only when the diagnosis gives enough evidence to justify them.
- **Hard scope constraint: do NOT produce maintenance candidates for Sensemaking, Critique, Decomposition, or Exploration even when the evidence is strong.** When the evidence is strong for an other-discipline failure, name it explicitly as "out-of-scope per user's framing" and let a future inquiry pick it up.
- Apply the existing `/innovate` reference's vocabulary throughout: mechanisms by name (Combination, Absence Recognition, Domain Transfer, Extrapolation, Lens Shifting, Constraint Manipulation, Inversion), tests by name (novelty, scrutiny survival, fertility, actionability, mechanism independence), failure modes by name (premature evaluation, single-mechanism trap, early frame lock, innovation without grounding, mechanism exhaustion, survival bias).
- **Honor the relationship to the prior diagnostic.** The prior diagnostic's Q3 rule (piece-level Inversion at meta-decision pieces) would have FIRED in this case (the M1 piece is a meta-decision piece) and its compliance criterion (generate Inversion-candidate + test) would have been SATISFIED (Inversion was applied). The Gap-1 refinement-set is necessary but not sufficient for this T4 case. The current diagnostic should explain WHY the prior set is insufficient and what additional structure is needed.

## Relationships

- **DIAGNOSES:** `devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/` (weak prior inquiry whose Innovation produced the ADD-TEST-shape M1 candidate).
- **COMPARES WITH:** `devdocs/inquiries/2026-05-14_15-00__find_innovate_spec_regression_remove_root_cause/` (corrected inquiry whose Innovation produced the REPAIR-shape candidate under explicit REPAIR framing in its `_branch.md`).
- **CONTINUES FROM (research-frontier follow-up):** `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/finding.md` (the prior diagnostic on Pair #5 / Gap-1; preserved Gap-2 as research-frontier; this inquiry is the Gap-2 follow-up).
- **RELATED:** `devdocs/inquiries/2026-05-17_22-51__innovation_improvement_pair_detection/finding.md` (the 19-pair gap-analysis that named Gap-1 and Gap-2; this case is Pair #7 in that dataset).
- **RELATED:** `cognitive_harness/innovate/references/innovate.md` (the criterion artifact — what Innovation is specified to do).
