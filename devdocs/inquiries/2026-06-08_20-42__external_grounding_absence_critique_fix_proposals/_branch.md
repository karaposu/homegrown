# Branch: external_grounding_absence_critique_fix_proposals

## Question

The question spans these load-bearing aspects (all preserved):

- **Subject** — The "External-Grounding Absence" failure type identified as #4 in `devdocs/top_7_common_critique_failures.md`, in the context of the `/td-critique` discipline at `cognitive_harness/td-critique/`.
- **Action** — diagnose (understand the mechanism with structural precision; specifically: how mechanism-independence becomes illusory when all mechanisms share a structural-argument frame) THEN design (propose concrete fixes).
- **Level** — discipline-level (modifications to `cognitive_harness/td-critique/SKILL.md` and `references/td-critique.md`); POSSIBLY cross-spec (potentially touches `cognitive_harness/innovate/` because mechanism-independence is /innovate's territory; potentially touches `/reflect` because the source mentions "/reflect promotion at N≥3").
- **Observation targets** (preserved separately per the multi-clause rule):
  1. The underlying mechanism of External-Grounding Absence — what makes it different from existing failure modes (closest is #7 Self-Reference Collapse per top_7 §4 but DIFFERENT concern; relationship to the other 6 modes); whether it is precondition-violation (like Axis Absence + IFP) or inverse-companion (like Label-Tested) or a NEW structural relationship (FOUNDATIONAL-ASSUMPTION-VIOLATION about mechanism-independence); sub-mechanisms across 7 corpus instances (one more than priors; includes a "multi-defensible readings; convergence underdetermined" instance with a meta-different shape).
  2. AT LEAST THREE solution proposals at structurally-distinct tiers (surgical / additional / significant) honoring the Axis Absence finding's tier-shape vocabulary AND the Inherited-Frame Preservation finding's single-spec/cross-spec sub-axis AND the Label-Tested finding's Tier 2 intervention-shape sub-axis.
  3. Plus/minuses per proposal (trade-off analysis using the inherited 5-or-6 trade-off axes plus any inquiry-specific axes; CRITICAL inquiry-specific: external-grounding fidelity of the PROPOSAL ITSELF — this inquiry's own proposals must demonstrate the very property they propose to require).
  4. THE META-LOOP: this inquiry is the most self-referentially-fraught of the four, because the failure being investigated questions whether mechanism-independence (the convergence signal used in the prior three Critique sections) is illusory. The prior three sibling findings are themselves potentially vulnerable to this critique. Sensemaking and Critique must explicitly test whether the prior three findings' Critique convergence claims rest on external grounding or only on structural-argument convergence.
- **Deliverable shape** — design with N≥3 alternative proposals + explicit per-proposal trade-off analysis + 4-way compositional analysis with all three prior siblings + META-LOOP analysis of whether prior siblings' Critique convergence claims survive External-Grounding-Absence scrutiny.

**The question.** What is the underlying structural mechanism of "External-Grounding Absence" (specifically: how mechanism-independence becomes illusory when all mechanisms share a structural-argument frame; whether this failure is precondition-violation, inverse-companion, or a NEW foundational-assumption-violation structural relationship; what sub-mechanisms produce the failure across 7 corpus instances; how the "multi-defensible readings; convergence underdetermined" instance relates to the other 6; whether the intervention surface is within-`td-critique.md`-only or cross-spec to `/innovate` or `/reflect`), and what are at least 3 structurally-distinct solution proposals — surgical / additional / significant — for amending `td-critique.md` (and possibly `/innovate` / `/reflect`) that would fix it, with explicit plus/minus trade-off analysis per proposal AND 4-way compositional analysis with the Axis Absence + Inherited-Frame Preservation + Label-Tested proposals, AND a META-LOOP test of whether the prior three siblings' Critique convergence claims survive External-Grounding-Absence scrutiny?

## Goal

- **Criterion** — proposals must be (a) actionable as concrete edits to specific sections of `td-critique.md` (and/or `/innovate` / `/reflect` if cross-spec), (b) grounded against the 7 corpus instances from top_7 §4 (retroactively testable per proposal), (c) honestly different in structural scope (per Axis Absence inherited tier vocabulary), (d) trade-off-honest, (e) compatible with the three just-completed sibling proposals, AND (f) **demonstrate external grounding in their OWN design** — the proposals must not rest on structural-argument convergence alone; they must cite canonical sources, empirical corpus tests, or downstream-consumer behavior.
- **Use case** — the user will pick one or more proposals to implement; may compose with all three prior siblings; the META-LOOP analysis informs whether the prior sibling findings need revision.
- **Desired outcome** — clear mechanism understanding (including how mechanism-independence becomes illusory) + concrete fix menu + 4-way cross-proposal composition map + honest assessment of whether prior siblings need amendment.
- **What would fail** — three proposals all at the same tier; proposals that don't ground against 7 corpus instances; proposals that collapse External-Grounding-Absence into #7 Self-Reference Collapse (the closest existing mode per top_7 §4 but DIFFERENT concern); proposals that themselves rest only on structural-argument convergence (the very failure mode being investigated); META-LOOP analysis that whitewashes the prior siblings' Critique convergence claims rather than honestly testing them.

## Source Input

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

## Scope Check

Question covers goal. The Question explicitly asks for mechanism understanding (including the illusory-mechanism-independence sub-question) + ≥3 tier-distinct proposals + plus/minus + 4-way cross-inquiry composition + META-LOOP analysis of prior siblings. The Goal's use-case + what-would-fail specs match, including the criterion (f) that proposals demonstrate external grounding in their OWN design.

Specific-vs-pattern check: 7 SPECIFIC corpus instances; broader pattern is the structural surface where critique relies on structural-argument convergence as the sole evidence of robustness. Proposals address the broader pattern with the 7 instances as ground truth.

## Layer Commitment

Meta-question on the `/td-critique` discipline spec (POSSIBLY also `/innovate` spec). Following the same primary-layer commitment as the prior three inquiries: STRUCTURAL primary, meaning foundational, process deferred.

**Primary layer: STRUCTURAL.** Deliverable is concrete spec edits.

**Foundational meaning-layer work:** understanding what "external grounding" IS as a category (canonical source text vs empirical artifact vs downstream-consumer behavior — the three sub-types named in the source); understanding when mechanism-independence is illusory vs genuine; understanding the structural difference between External-Grounding-Absence and #7 Self-Reference Collapse.

**Other layers considered:**
- **Process** — partially in scope. The "quarantine mechanism-independence claim" corrective is a runtime process step. Process work is downstream of structural placement but the quarantine-mechanic specification may demand process-layer detail. Sensemaking will adjudicate whether quarantine is structural-only or requires process-layer specification.

## Synthesis Trigger

This inquiry consumes the following prior outputs:

- `devdocs/100_critique_correction_chain_analysis.md` — the 48-pair corpus; the 7 External-Grounding-Absence instances come from this. Including the "multi-defensible readings" instance (22-10 vs 23-15) which has a structurally distinct shape from the other 6.
- `devdocs/top_7_common_critique_failures.md` §4 (External-Grounding Absence) — definition + mechanism + 7 corpus instances + corrective sketch (empirical/canonical anchor + "structurally-grounded only" verdict + mechanism-independence quarantine).
- `cognitive_harness/td-critique/references/td-critique.md` — the existing spec, especially Phase 0 Dimension Construction, Phase 2 Adversarial Evaluation, §4 Failure Modes (especially #7 Self-Reference Collapse which is named as ADJACENT but covers a DIFFERENT concern), Phase 4 Convergence Telemetry (where "N mechanisms converge" claim lives — this is the load-bearing locus for the failure).
- `cognitive_harness/td-critique/SKILL.md` — invocation contract.
- `cognitive_harness/innovate/` — POSSIBLY in scope. /innovate's spec contains the "mechanism independence" concept used by /td-critique as convergence evidence; External-Grounding-Absence's claim that this concept becomes illusory may require cross-spec edits.
- `cognitive_harness/reflect/` — POSSIBLY in scope. The source mentions "/reflect promotion at N≥3" as a self-named project-process meta-observation pattern; if /reflect is a discipline that promotes recurring meta-observations, then this failure may be a /reflect candidate too.
- `devdocs/inquiries/2026-06-08_17-43__axis_absence_critique_fix_proposals/finding.md` — Axis Absence finding; tier-shape vocabulary inherited unchanged; META-LOOP test: does this finding's Critique convergence claim rest on external grounding?
- `devdocs/inquiries/2026-06-08_19-10__inherited_frame_preservation_critique_fix_proposals/finding.md` — Inherited-Frame Preservation finding; cross-spec sub-axis inherited; META-LOOP test: does this finding's Critique convergence claim rest on external grounding?
- `devdocs/inquiries/2026-06-08_20-00__label_tested_substance_untested_critique_fix_proposals/finding.md` — Label-Tested finding; Tier 2 intervention-shape sub-axis inherited; INVERSE-COMPANION-PAIR concept inherited; META-LOOP test: does this finding's Critique convergence claim rest on external grounding?

CONCLUDE will require an `## Inherited Commitments Re-test` section. Each proposal must be tested against (a) 7 corpus instances, (b) existing failure-mode definitions (especially #7 Self-Reference Collapse as ADJACENT-NOT-COLLAPSED — verify distinctness), (c) all three just-articulated sibling proposals (4-way composition check), (d) the tier-shape vocabulary inherited from Axis Absence (use unchanged), AND (e) demonstrate the proposal's OWN external grounding (the meta-loop requirement).

**Important cross-failure note for re-test:** The prior three inquiries established THREE distinct structural relationships (within-spec precondition-violation; cross-spec precondition-violation; inverse-companion-pair). Sensemaking must test whether External-Grounding-Absence has a FOURTH distinct relationship (FOUNDATIONAL-ASSUMPTION-VIOLATION about mechanism-independence) OR fits one of the existing three patterns. Do not collapse onto any of the prior three uncritically.

**Critical META-LOOP note:** This inquiry investigates a failure mode whose existence, if real, makes the prior three Critique sections' "N candidates converged" claims potentially illusory. Sensemaking and Critique must explicitly test the prior siblings' Critique convergence claims for external grounding — if those claims rest only on structural-argument convergence, the finding must honestly report this AND propose remediation for prior siblings (which may require revision findings).

**Important cross-failure overlap note:** Corpus instance 11-23 STANDALONE appears in BOTH the Label-Tested inquiry (sub-mechanism 5 ARTIFACT-TYPE ambiguity) AND this inquiry (canonical artifact-naming pattern not applied). The two diagnoses are different (Label-Tested = artifacts treated as conceptual entities rather than authored deliverables; External-Grounding = canonical naming template existed externally and wasn't applied). Sensemaking should explicitly distinguish the two diagnoses for the same corpus pair and decide whether this is a genuine cross-failure overlap or whether one diagnosis is more load-bearing.
