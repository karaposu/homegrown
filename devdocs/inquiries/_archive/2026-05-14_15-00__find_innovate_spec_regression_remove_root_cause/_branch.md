# Branch: Find the `/innovate` Spec Regression and Remove Root Cause (not add test on top)

## Question

Given that the prior MVL+ inquiry (`devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/finding.md`) diagnosed "loop-stage scope-leakage" as a generic failure mode at `/innovate`'s concrete-text generation step and proposed M1 (a new scope-fidelity-to-framing test added to `/innovate`'s Phase 3) as an ADD-ON check on top of the existing spec — and the user has correctly observed that this diagnostic was at the wrong level of intervention (adding a test rather than finding and removing the bug) — what specific change(s) between the OLDER `/innovate` spec at `/Users/ns/Desktop/projects/native/bf4ae1f-hg/bf4ae1f-innovate/references/innovate.md` (which did NOT exhibit the available-examples bias) and the CURRENT `/innovate` spec at `homegrown/innovate/references/innovate.md` (which produced the over-specified L1 spec text in 2026-05-14_12-45's `innovation.md` lines 161-163) introduced the regression, and what is the REMOVE/REPAIR fix at the spec-text level (not an ADD-TEST fix on top of the broken spec)?

## Goal

A new diagnostic finding that:

(a) **Performs the diff** between the older `/innovate` spec at `bf4ae1f-hg/bf4ae1f-innovate/references/innovate.md` and the current `/innovate` spec at `homegrown/innovate/references/innovate.md`. Identify every change at the level of: added sections, removed sections, reworded sections, restructured tables, modified examples, new failure modes, new refinement notes, etc.

(b) **For each change, evaluate** whether it could have introduced (or contributed to) the available-examples bias that produced the L1 over-specification. Apply structural reasoning: which change(s), if reverted, would have prevented the over-specified L1 spec text from being generated?

(c) **Identifies the load-bearing change(s)** — the specific spec text that is causing the failure. Apply the strengthened diagnostic three-test (claim-truth + level-coherence + external-citation) to each candidate change's causal role.

(d) **Proposes a REMOVE/REPAIR maintenance candidate** at the spec-text level. The candidate is a specific edit to `/innovate`'s current spec — removing the load-bearing problematic text, OR repairing it with corrected text, OR reverting to the older version's phrasing where appropriate. NOT adding a new test or new check on top.

(e) **Corrects the prior finding (2026-05-14_14-00)** at the M1 maintenance candidate dimension. The prior M1 was the WRONG SHAPE of intervention (ADD-TEST on top of broken spec, rather than REMOVE/REPAIR the broken spec itself). The Recursive Demonstration correction in 2026-05-14_14-00 may also need re-examination — if the failure is a regression-bug rather than a generic pattern, the failure-mode naming ("loop-stage scope-leakage") may itself be over-generalized.

(f) **Determines if the failure-mode naming stands or needs revision.** If the diff reveals a specific regression with a clear cause, the pattern-level naming may be premature — the failure may be a one-off regression rather than a generic failure mode that justifies a family-member position. Re-evaluate this against the diff result.

(g) **Honest cost-naming for 7 MVL+ in succession.** Apply the direct-edit-vs-full-loop guideline rigorously per the prior critique's R4 recommendation. Was this iteration the right intervention given the iteration count?

## Scope Check

Question covers goal. The question asks for the diff + root-cause identification + REMOVE/REPAIR fix + correction of prior finding's M1 shape; the goal articulates all of these plus the failure-mode-naming re-evaluation + cost-naming.

**Specific-vs-pattern check.** The user explicitly framed this as a SPECIFIC bug-finding task ("understand what is wrong with current one... detect the bad part of that skill to remove it... compare with old version which did not had such errors"). The user's intent is bug-level investigation, not pattern-level naming. The inquiry is bug-level by user intent; whether the bug instantiates a broader pattern is a downstream question (addressed in goal (f)).

**Self-check on THIS inquiry's referenced artifacts** (per the corrected L1 from 2026-05-14_13-08, even as L1's mechanism is being further reframed):

| Referenced artifact | Declared canon-status | Justification |
|---|---|---|
| Prior finding at 2026-05-14_14-00 (the M1 candidate) | `under-test` for M1 mechanism shape (which is being corrected) | The prior finding's M1 is the test target. |
| The current `/innovate` spec at `homegrown/innovate/references/innovate.md` | `under-test` | The spec that contains the regression. |
| The older `/innovate` spec at `bf4ae1f-hg/bf4ae1f-innovate/references/innovate.md` | `canon-historical` (canon for its time; not current intent) | Used as comparison reference; its older state is the diff baseline. |
| 2026-05-14_12-45's archived `innovation.md` (the L1 over-specification) | `canon` (this is the concrete evidence of the regression's effect) | The output that exhibited the failure. |
| LOOP_DIAGNOSE protocol | `canon` | Authoritative for diagnostic format. |

**Mechanism-level scope check on the inquiry's framing.** The user's framing is: find the bug in the spec and remove/repair, NOT add a test. The inquiry must NOT default to add-on solutions; the maintenance candidate must be a spec-text edit (remove or repair), not a new test or check. If the diff reveals that the regression is genuinely a structural property of the current spec (not isolatable to a specific change), this would be a surprising result and would need explicit justification.

## Relationships

- **CORRECTS:** `devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/finding.md`. The CORRECTS targets the M1 maintenance candidate's shape (ADD-TEST → REMOVE/REPAIR) and may target the failure-mode naming if the diff reveals a regression rather than a generic pattern. Dimensional CORRECTS scope to be determined by the diff result; minimum scope is the M1 candidate's intervention shape.

- **DEPENDS ON PROTOCOL:** `homegrown/protocols/loop_diagnose.md`.

- **RELATED:** `devdocs/inquiries/2026-05-14_13-08__phantom_canon_is_generic_not_project_specific/finding.md`. The L1 text + framing-time canonicalization catch + standing text-level meta-check from that finding likely stand unchanged; this inquiry's CORRECTS is on the more recent 2026-05-14_14-00 finding's M1 shape.

- **RELATED:** `devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md`. Its archived `innovation.md` (specifically lines 161-163 with the over-specified L1 trigger criteria) is the concrete evidence of the regression's effect.

- **RELATED:** `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`. The strengthened diagnostic three-test applies to evaluating each candidate root-cause change.
