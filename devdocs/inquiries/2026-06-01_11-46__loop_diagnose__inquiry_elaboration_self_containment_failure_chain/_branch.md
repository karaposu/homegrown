# Branch: Loop Diagnose — IE self-containment failure chain (01-17 + 01-37 → 09-54 correction)

## Question

Given the weak prior inquiries at `devdocs/inquiries/2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/` (the scope finding, which produced a 7-border NOT-list *attributed to named neighbor disciplines*) and `devdocs/inquiries/2026-06-01_01-37__inquiry_elaboration_structural_design/` (the structural finding, which produced Components phrased as *"tailored; does not invoke the neighbor discipline"*), the human correction (the user objecting that IE shouldn't know about other disciplines — naming them in the spec violates self-containment), the later improved inquiry at `devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/` (which adopted an output-organized self-contained design naming no other discipline anywhere), and the user's NEW hypothesis-pointing correction in *this* run (surfacing should have pulled examples specifically about the discipline-creation process), **what did the 01-17 + 01-37 loops likely miss, why did they miss it, and which discipline / stage / framing step is the load-bearing failure surface — and what maintenance candidates follow, particularly any that touch surfacing's behavior when an inquiry concerns discipline creation?**

## Goal

A diagnostic finding that produces:
- evidence-backed **failure hypotheses** for the 01-17 + 01-37 chain (each with affected stage, shortcoming type, evidence from prior + correction + corrected, confidence, why-not-stronger, maintenance candidate, evaluation gate);
- a compact **failure attribution summary** table;
- **maintenance candidates** scoped narrowly (no broad protocol rewrites at N=1 chain), with explicit evaluation gates and risk classes — specifically including the user's surfacing-side hypothesis (a discipline-creation-process examples check during surfacing) as one candidate;
- a **diagnostic verdict** of ACTIONABLE / PARTIAL / INCONCLUSIVE per the LOOP_DIAGNOSE Step 4 rubric;
- the failure surface located precisely (e.g., is it surfacing, sensemaking, critique, framing, or cross-stage), not collapsed into "discipline X failed" without evidence that isolates it.

The diagnostic should **avoid**: (a) treating the 09-54 correction as ground truth (it is comparative evidence, not truth); (b) over-confident attribution to one discipline when the failure is mixed across stages; (c) proposing broad fundamentals rewrites at this N=1 chain; (d) skipping the per-stage evidence walk and jumping straight to a conclusion.

## Source Input

```text
what went wrong with devdocs/inquiries/2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/finding.md and devdocs/inquiries/2026-06-01_01-37__inquiry_elaboration_structural_design/finding.md 

? because in  
devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/finding.md

verdict was different and many things like talking about other disciplines in IE was wrong.. 


i would expect this kind of mistake to not happen, it should have been surfaced in surfacing i guess, and surfacing should have check examples especially regarding discipline creation processs... 


use cognitive_harness/protocols/loop_diagnose.md
```

## Correction Chain

- **Prior path A:** `devdocs/inquiries/2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/` — produced the scope finding with a 7-border NOT-list attributed to neighbor disciplines (each border tagged `→ /sense-making`, `→ /decompose`, `→ /surfacing`, `→ /innovate`, `→ /td-critique`, `→ runner+branch_inquiry`).
- **Prior path B:** `devdocs/inquiries/2026-06-01_01-37__inquiry_elaboration_structural_design/` — produced the structural finding with Components phrased "tailored; does not invoke the neighbor discipline" (literally naming "the neighbor discipline" in the discipline's own spec text), plus a LAYER-2 "wrapper-fusion (becomes mini-runner)" guard that also referenced the neighbor concepts implicitly.
- **Corrected path:** `devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/` — adopted an output-organized, fully self-contained design naming no discipline anywhere; generalized the self-containment violation broader than the user's quoted phrase; renamed `why_makes_sense` → `rephrase_in_project_goal`; dropped+re-homed reference-authority.
- **Human correction (the spark):**
  ```text
  each marked "does not invoke the neighbor discipline" ?
  wait what? IE shouldnt know about other disciplines...it is just is to elaborate with context and multilayered understanding.
  ```
- **Human correction (this run — the diagnostic hypothesis):**
  ```text
  i would expect this kind of mistake to not happen, it should have been surfaced in surfacing i guess, and surfacing should have check examples especially regarding discipline creation process...
  ```
- **Optional context:** the project's `feedback_disciplines_self_contained` memory was in effect for both prior runs ("spec files must not contain outbound pointers; disciplines are individuals"); the routelister spec (`cognitive_harness/routelister/references/routelister.md` §1.3–§1.4) is the existing exemplar of an intrinsically-grounded NOT-list and explicit self-containment statement. Both pieces of evidence were *available* in the project but the prior runs did not pull them in as load-bearing constraints.

## Required Reads

For both prior inquiry folders and the corrected inquiry, read `_branch.md`, `_state.md`, `finding.md`, and the discipline outputs in `docarchive/` (the per-stage evidence). Specifically:
- Read `01-17/finding.md` + its `docarchive/{surfacing, sensemaking, decomposition, innovation, critique}.md` to locate where in the 01-17 pipeline self-containment failed (which discipline's output first carried the neighbor-naming, and which downstream disciplines failed to catch it).
- Read `01-37/finding.md` + its `docarchive/*` likewise, with attention to whether 01-37 inherited the 01-17 failure or generated its own.
- Read `09-54/finding.md` + its `docarchive/*` to see what the correction did differently (the Region-C find pulling the routelister fix-model + the K1/K4 generalization).
- Cross-reference: routelister spec §1.3–1.4 (the exemplar); project memory `feedback_disciplines_self_contained` (the rule).

## Diagnostic Constraints

- Treat the human correction (both the spark and the surfacing-side hypothesis) as evidence, not noise.
- Treat the 09-54 corrected inquiry as comparative evidence, not ground truth.
- Prefer evidence-backed hypotheses over exact root-cause claims; allow mixed / cross-stage attribution when the evidence is mixed.
- Produce maintenance candidates only when the diagnosis gives evidence to justify them; each must have a specific evaluation gate.
- Specifically test the user's surfacing-side hypothesis (surfacing should check examples regarding the discipline-creation process) as one candidate; do not adopt it just because the user named it — adopt only if the evidence walk supports it.
- N=1 chain — keep maintenance candidates narrow; defer protocol-promotion until N≥2 chains support a pattern.

## Layer Commitment

**Primary layer: PROCESS** — this inquiry diagnoses how the prior runs' pipelines *executed* (which stage produced what, which check fired or didn't, where the evidence is), and proposes process-level maintenance candidates (e.g., a surfacing behavior at discipline-creation time; a critique gate).

Out of scope for this diagnostic:
- **Meaning** — IE's identity is settled (22-30); not re-litigated.
- **Structural** — IE's spec shape is settled (09-54, refined by 11-27); not re-litigated. The structural verdict serves as comparative evidence only.

## Relationships

- DIAGNOSES: `devdocs/inquiries/2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/` (weak prior A)
- DIAGNOSES: `devdocs/inquiries/2026-06-01_01-37__inquiry_elaboration_structural_design/` (weak prior B)
- COMPARES WITH: `devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/` (later corrected inquiry)
- RELATED: `devdocs/inquiries/2026-06-01_11-27__inquiry_elaboration_structure_with_recent_context/` (further refinement after the correction; not a diagnostic input but confirms the corrected frame is stable)

## Synthesis Trigger

This inquiry consumes (and re-tests as evidence, not as inheritance-of-verdicts) the three findings in the correction chain, plus the routelister exemplar and the self-containment project memory. CONCLUDE will enforce an Inherited-Commitments-Re-test section:

- `2026-06-01_01-17/finding.md` — the weak prior A; will be evaluated as a failure case, not absorbed.
- `2026-06-01_01-37/finding.md` — the weak prior B; will be evaluated as a failure case (and as evidence of inherited error from A or as an independent error).
- `2026-06-01_09-54/finding.md` — the comparative evidence; commitments treated as the corrected baseline (not as ground truth — adversarially tested where they bear on the diagnostic claim).
- `cognitive_harness/routelister/references/routelister.md` — the exemplar of how a self-contained NOT-list reads; artifact-grounded evidence the prior runs could have consulted but didn't.
- project memory `feedback_disciplines_self_contained` — the rule the priors violated and the corrected inquiry honored.
