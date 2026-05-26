# Branch: Did the `/explore` Rewrite Cause the Recent Pattern of Problematic MVL+ Runs?

## Question

Given that (i) the older `/explore` references file at `/Users/ns/Desktop/projects/native/archived_skills/bf4ae1f-hg/bf4ae1f-explore/references/explore.md` (20,851 bytes; narrative-style; pre-rewrite baseline) was in use during a period when MVL+ runs reportedly had fewer mistakes, (ii) the current `/explore` references file at `homegrown/explore/references/explore.md` (42,917 bytes; numbered-section style; rewrite) is what is currently loaded by every MVL+ invocation, (iii) the recent chain of MVL+ inquiries (`2026-05-14_12-45` through `2026-05-14_15-00`) has involved a cascade of revisions and mis-framings that the user has explicitly observed as "problematic," (iv) the diff between these two `/explore` versions is 802 lines, structurally enormous (more than double the size; nearly every line different) — what specific change(s) in the rewrite plausibly caused the pattern of problematic MVL+ runs, what is the REPAIR scope (revert all / revert selectively / surgical edit), and is the user's hypothesis ("we tried to improve explore but maybe it was doing something we couldn't understand and was covering for such mistakes") structurally supported?

## Goal

A diagnostic finding that:

(a) **Documents the diff structurally** — what categories of change were made (added sections; restructured tables; new failure modes; new Step 0 declarations; new depth-level system; new annotation-layer commitments; new "Sources" pointing at project findings; cross-references to other discipline paths; etc.).

(b) **Identifies causal mechanisms** by which each category of change could plausibly produce or amplify MVL+ run problems. Specifically test the hypothesis that the new spec introduces forms of project-anchoring or protocol-overhead that the old spec did not have. Cross-reference each candidate mechanism against the observed problematic-MVL+-run patterns (the `2026-05-14_12-45` over-specification; the cascade of subsequent mis-framings).

(c) **Adjudicates the user's "covering for mistakes" hypothesis.** Was the old spec covering for something, or was it just simpler and less prone to inducing bias? Apply the strengthened diagnostic three-test.

(d) **Proposes a REPAIR scope.** Three candidate shapes: (i) full revert to the old spec; (ii) selective revert of the bias-inducing additions while preserving the useful ones; (iii) surgical edit to specific bias-inducing elements. Recommend the candidate with the strongest evidence base.

(e) **Cross-references with prior chain findings** — specifically the B3 finding from `devdocs/inquiries/2026-05-14_15-00__find_innovate_spec_regression_remove_root_cause/finding.md` (which identified a bias-inducing instruction in `/innovate`'s Combination mechanism). Is there a sister pattern in `/explore`? If yes, the analogous repair shape applies.

(f) **Honest cost-naming for 8 MVL+ in succession on the related topic chain.** The user explicitly overrode my R5 (consider direct-edit before iteration #8) and directed the full pipeline. The cost is real and accumulated. The justification: the user explicitly chose full-loop rigor; my job is to deliver it.

## Scope Check

Question covers goal. Each goal item (a-f) maps to a specific aspect of the question.

**Specific-vs-pattern check.** The user explicitly named the pattern ("problematic MVL+ runs"). They named one specific class of evidence (the chain `2026-05-14_12-45` → `2026-05-14_15-00`) but the question is pattern-level — "did the rewrite cause the pattern?" not just "did it cause this one case?" The inquiry is pattern-level by user intent; the chain is the illustrative evidence.

**Phantom Canon self-check on referenced artifacts** (per the corrected L1 from `2026-05-14_13-08`, applied as standing practice):

| Referenced artifact | Declared canon-status | Justification |
|---|---|---|
| Current `/explore` references at `homegrown/explore/references/explore.md` | `under-test` | The artifact whose causal role is being investigated. |
| Older `/explore` references at `archived_skills/bf4ae1f-hg/bf4ae1f-explore/references/explore.md` | `canon-historical` (canon for its time; baseline for comparison; not current intent) | Used as the diff baseline. |
| Prior chain findings (`2026-05-14_12-45` through `2026-05-14_15-00`) | `canon` for the diagnostic frame they established (entry-point at innovation; B3 in /innovate; L1 PARALLEL); `under-test` for the broader question of whether the chain's problematic pattern reflects a `/explore`-level cause | Two-status: their conclusions stand for what they identified; whether they ALSO had `/explore`-level causes is the new investigation. |
| The exploration outputs from the problematic-MVL+-runs (archived `exploration.md` files in their respective `docarchive/` directories) | `under-test` | These are the concrete evidence of `/explore`-discipline outputs that may exhibit `/explore`-spec-induced bias. |
| LOOP_DIAGNOSE protocol | `canon` | Authoritative for diagnostic format. |
| Strengthened diagnostic (`2026-05-13_12-45`) | `canon` | Authoritative for the CORRECTS-over-REFINES three-test. |

**Mechanism-level scope check.** The user's hypothesis ("covering for mistakes") implies the OLD did something useful that the NEW lost. The inquiry must test BOTH directions:
- Direction 1: did the NEW add something harmful?
- Direction 2: did the NEW remove something protective?

Both are in scope. The diff covers both (what was added; what was removed/restructured).

**8th-MVL+ acknowledgment.** The user explicitly chose the full pipeline at iteration #8 despite my R5 recommendation. The cost is real. The inquiry should aim for high signal-to-cost: identify the load-bearing causal mechanism(s) with minimum overhead; do not over-elaborate.

## Relationships

- **RELATED:** `devdocs/inquiries/2026-05-14_15-00__find_innovate_spec_regression_remove_root_cause/finding.md`. The B3 finding (Combination mechanism's project-listing) is the closest analog — testing whether `/explore` has a sister bias.
- **RELATED:** `devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/finding.md`. The entry-point identification at innovation stands; this inquiry tests whether the entry-point is influenced by upstream `/explore` priming.
- **RELATED:** `devdocs/inquiries/2026-05-14_13-08__phantom_canon_is_generic_not_project_specific/finding.md`. L1's framing-time canonicalization catch stands.
- **RELATED:** `devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md`. The original failure-mode-naming inquiry; its `docarchive/exploration.md` will be examined as concrete evidence.
- **RELATED:** `devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`. The strengthened diagnostic three-test applies.
- **DEPENDS ON PROTOCOL:** `homegrown/protocols/loop_diagnose.md`.
