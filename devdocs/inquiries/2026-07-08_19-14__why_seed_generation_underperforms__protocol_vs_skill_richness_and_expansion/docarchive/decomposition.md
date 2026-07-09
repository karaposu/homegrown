## User Input

devdocs/inquiries/2026-07-08_19-14__why_seed_generation_underperforms__protocol_vs_skill_richness_and_expansion/_branch.md — (DIAGNOSIS-and-DESIGN dive, Decomposition = organize the stabilized 2×2 diagnosis into a buildable diagnosis-and-design finding; do NOT re-open the causal model. Whole = diagnosis + hypothesis-adjudication + 07-20 re-test + shaped fix (2 steps + open form), application user-gated. Candidate pieces P1-P8 + the load-bearing cut P1-P3│P4-P6 + the design-preference-contaminates-diagnosis risk. Full spec in _state 19-28 / the branch.)

---

# Decomposition — the diagnosis-and-design deliverable

## 1. Coupling Map

**Whole:** "a diagnosis-and-design finding — WHY seed-generation under-produced from the spider source (the 2×2 causal model, evidenced), the two-tier verdict on the four hypotheses, the necessary-but-insufficient relation to the 07-20 diagnosis, and the shaped fix (two confirmed steps + a form recommendation), application deferred to user approval."

**Two high-coupling clusters, weakly coupled to each other:**
- **CLUSTER A — THE DIAGNOSIS (P1-P3):** the causal read. P1 (the 2×2 + mechanism + evidence), P2 (the hypothesis adjudication — which is *reading the evidence*), P3 (the 07-20 re-test — also reading the evidence). These three are tightly coupled: they are ONE evidence-interpretation, sliced by audience (the model / the user's four threads / the prior diagnosis). Change the 2×2 and all three move.
- **CLUSTER B — THE DESIGN (P4-P6):** the forward build. P4 (the two fix-steps), P5 (the form), P6 (expansion-generability). Coupled: they all specify the fix.

**The valley between them (the load-bearing cut A│B):** the diagnosis is settled by evidence and the design consumes it **read-only**. Low crossing traffic — the design reads "the cause is anchor-axis + claim-expansion" and builds two steps for it; it does not feed back into the causal read.

**Internal boundary inside Cluster B (the second cut P4│P5):** the two STEPS follow deductively from the settled cause (fix the two axes); the FORM (protocol/skill/step) is an open packaging choice. Low coupling — you can specify the steps fully without choosing the form.

**★ THE ONE HIDDEN-COUPLING RISK (Failure Mode #3):** design-preference leaking UP into the diagnosis — wanting a shiny `generate_seeds` skill (a P5 preference) inflating H3 or the causal weight (a P1/P2 claim). This is the exact error the diagnosis indicts (a plausible story not checked against artifacts). **Controlled two ways:** (i) the A│B cut makes the diagnosis logically prior and read-only; (ii) anti-design-contamination is an explicit P7 gate item, and the single-pass rich-dive datum (SP5) is the standing refutation kept in P2.

## 2. Question Tree (pieces as questions + verification)

**P1 — THE DIAGNOSIS [carry from Sensemaking].** Why did the thin dive under-generate — what is the causal model? Verification: [ ] the 2×2 (claim-richness × anchor-canon-grounding) stated with the seed-bearing-quadrant evidence; [ ] anchor-axis-composition named as proximate self-witnessed cause + claim-expansion as co-cause, their interaction stated (both necessary); [ ] mechanical evidence cited to docarchive lines (thin 69/108 cold machinery axis→1; rich canon-model axis→7 single-pass; word-count inversion); [ ] proximate-vs-root layered (root = §6 under-specifies the anchor side).

**P2 — THE HYPOTHESIS ADJUDICATION.** What is the verdict on the user's four hypotheses? Verification: [ ] two-tier structure explicit (CAUSE-tier H1+H4 / FORM-tier H2+H3); [ ] H1 CONFIRMED-sharpened (canon traversal-model files → the anchor axis, not "core files" generically); [ ] H4 CONFIRMED-with-twist (a.md was user-authored → the expansion-generability question); [ ] H2 PARTIAL/non-causal (rich fixed it in-form); [ ] ★H3 stacking-UNDERCUT with the single-pass evidence stated honestly; [ ] no form-hypothesis presented as a confirmed cause.

**P3 — THE 07-20 INHERITED-COMMITMENT RE-TEST.** How does this diagnosis relate to the prior one-seed diagnosis? Verification: [ ] states the coverage-table fix was APPLIED + USED (the thin dive's 108-cell table) + still-1-seed → NECESSARY-BUT-INSUFFICIENT; [ ] the distinct mechanism named (claim-DENSITY vs anchor-SOURCING); [ ] the 07-20 fix explicitly NOT undone (additive to the same file); [ ] covers the Synthesis Trigger's three priors (07-20 finding · the protocol's coverage-is-enough commitment · the two dives' anchor-axis claim).

**P4 — THE FIX: THE TWO CONFIRMED STEPS [★Innovation designs concretely].** What are the two steps, specified enough to apply? Verification: [ ] STEP 1 (canon-ground the anchor axis) — names WHICH canon traversal-model files become anchor columns + how the axis is built + machinery-is-one-column; [ ] STEP 2 (expand thin sources) — specifies the expansion mechanism (thin source → fuller claims) + its provenance guard (expansion must not fabricate source-support — the honesty floor); [ ] each step written as applicable text (protocol-rule wording or procedure), not a gesture.

**P5 — THE FIX FORM [Innovation shapes + recommends; user decides].** What form should deliver the two steps? Verification: [ ] three forms with trade-offs (A protocol-edits to seed_harvester.md / B standalone generate_seeds skill / C single added step); [ ] a recommendation with reason; [ ] the recommendation does NOT rest on H3-stacking (undercut) — it rests on hosting/cost/reuse; [ ] form explicitly left as the user's open call (posterior to the steps).

**P6 — EXPANSION-GENERABILITY [the central open uncertainty].** Can the machinery expand a thin source WITHOUT the human? Verification: [ ] the question stated (a.md was user-authored — is expansion self-generable?); [ ] ≥1 candidate expansion-mechanism sketched (e.g., an LLM enrichment pass over established domain-knowledge, gated by provenance); [ ] the fabrication/honesty-floor risk named (expanded claims must stay source-supported, not invented); [ ] honest verdict on solved-vs-frontier.

**P7 — THE GATE [Critique].** Does the diagnosis hold and is the fix sound? Verification: [ ] the 2×2 prosecuted (is it really two axes? over-fit to one comparison?); [ ] the two fix-steps prosecuted (sound, or over-fit to the spider case?); [ ] H3-undercut re-tested (was the single-pass rich dive a fluke or real?); [ ] expansion-generability prosecuted (real mechanism or hand-waving?); [ ] ★anti-design-contamination applied (the skill not inflated; H3 kept honest); [ ] the guard BOTH ways (don't rubber-stamp the user's four hypotheses; don't over-deflate a genuine fix); [ ] a second-harvest backstop ("what does the diagnosis miss?").

**P8 — RECORD [CONCLUDE].** Verification: [ ] finding self-contained + readable (diagnosis → adjudication → re-test → shaped fix); [ ] Next Actions with the fix drafted ready-to-apply, APPLICATION user-gated (07-20 precedent); [ ] `## Inherited Commitments Re-test` section present (Synthesis Trigger requires it); [ ] a `## Seeds` section if the diagnosis yields a gated seed (e.g., the 2×2 as a reusable generation-richness frame) else explicit-empty; [ ] onward pointers (apply-the-fix dive · the expansion-generability frontier).

## 3. Interface Map

| Source → Target | What flows | Direction |
|---|---|---|
| P1 → P2 | the 2×2 + the causes (the evidence-read the verdicts rest on) | one-way |
| P1 → P3 | the mechanical facts (that the thin dive used the coverage table yet missed) | one-way |
| **P1-P3 → P4** | **the settled CAUSE (anchor-axis + claim-expansion) — the read-only spec the steps target** | **one-way (THE load-bearing cut; design consumes diagnosis)** |
| P4 → P5 | the two steps (what the form must host) | one-way |
| P4 → P6 | step 2 (expansion) — whose generability P6 probes | one-way |
| P1-P6 → P7 | all claims + steps, for prosecution | one-way |
| P7 → P8 | survivors + verdicts + the backstop answer | one-way |

**Assumptions-not-data check (Failure Mode #3 corrective):** P4 assumes P1-P3 arrive SETTLED (the design does not re-litigate the cause) — so the anti-contamination guard lives at P7, not presupposed. P5 assumes P4's steps are fully specified BEFORE form is chosen (form-is-downstream). P8 assumes P7 ran the both-ways guard + backstop. All stated → no hidden coupling beyond the named design-preference risk, which the A│B cut + P7c control.

## 4. Dependency Order

**P1 → P2 → P3 → P4 → {P5 ∥ P6} → P7 → P8.**
- P1 first (the causal model everything reads).
- P2, P3 after P1 (both interpret P1's evidence; orderable either way, P2 before P3 for readability).
- P4 after P1-P3 (the steps target the settled cause).
- P5 ∥ P6 after P4 (form and expansion-generability both consume the steps; independent of each other — form can be chosen without solving generability, and vice versa).
- P7 gates P4-P6 (and re-checks P1-P3 under the anti-contamination lens).
- P8 last.
No circular dependencies. The one back-edge that would be illegal (P5-preference → P1/P2) is precisely the hidden-coupling risk, forbidden by the cut.

## 5. Self-Evaluation

| Dimension | Verdict |
|---|---|
| **Independence** | PASS — P1-P3 (diagnosis) answerable from evidence alone; P4 from the settled cause; P5/P6 from the steps; P7 gates; P8 records. |
| **Completeness** | PASS — diagnosis (P1) + four-thread adjudication (P2) + prior-diagnosis re-test (P3) + fix-steps (P4) + form (P5) + the open uncertainty (P6) + gate (P7) + record (P8) covers the whole diagnosis-and-design ask; the two-part branch structure (diagnose + shape-the-fix) maps to A│B. |
| **Reassembly** | PASS — P1-P3 (why) + P4-P6 (the fix) + P7 (gated) + P8 (recorded) = a complete finding with application user-gated. |
| **Determination-mechanism check** | PASS — the load-bearing runtime determination (is design-preference contaminating the diagnosis?) is NOT presupposed clean: it is an explicit gate item (P7c) with its interface (the A│B cut) named. |
| **Balance** | PASS (with note) — P4 (the two fix-steps) + P1 (the diagnosis) are the heaviest (each ~25%); P4 is Innovation's main generative work (design the actual fix text). Not imbalanced-in-the-bad-sense: the heavy pieces are the intended centers (the causal model + the concrete fix). |
| **Interface clarity** | PASS — the load-bearing cut (P1-P3│P4-P6) and the design-preference-contamination risk (P5→P1 back-edge, forbidden) are both explicit; the second cut (P4│P5, steps-before-form) is named. |

**Self-eval: PASS ×3 minimum + determination-check + balance + interface-clarity.** The hidden-coupling risk (design-preference → diagnosis) is named and controlled by the A│B read-only cut + the explicit P7c anti-contamination gate item + the standing single-pass refutation kept in P2. No accommodation needed (the structure inherits Sensemaking's stable 2×2 unchanged). Next: Innovation (design the two fix-steps concretely + shape the three form-options with a recommendation + sketch an expansion-generability mechanism — the fix's actual substance).
