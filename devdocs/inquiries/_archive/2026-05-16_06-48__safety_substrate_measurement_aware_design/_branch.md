# Branch: Safety Substrate — Measurement-Aware Design

## Question
What is the measurement-aware design of the safety substrate — the integrated specification of (a) regression-symptom catalog, (b) stability preservation via git / snapshot mechanism, (c) canary reference runs, (d) Change Log machinery in spec files, (e) pre-edit git check, and (f) the LLM-self-check / structural-check decision tree from the structural-check inquiry — such that Q4a (slow-drift detection), Q4b (reverted vs superseded fraction), and Q4c (per-edit spec-symptom check) from the self-improvement-rate inquiry are FIRST-CLASS consumers of substrate outputs rather than ad-hoc downstream measurements?

## Goal
A committed design that:
1. **Identifies the substrate's measurement-output contract.** Each substrate component is designed to emit OUTPUTS that the measurement questions can consume directly. The substrate isn't built in isolation and then measurements are bolted on — substrate outputs and measurement-input requirements are co-designed.
2. **Names the data-shape interfaces** between substrate components and measurement consumers. E.g., the canary reference-run mechanism emits a per-run drift-score that Q4a's slow-drift-detection question consumes; the snapshot mechanism emits revert-vs-supersede classifications that Q4b consumes; the regression-symptom catalog + pre-edit git check emit per-edit symptom-fire counts that Q4c consumes.
3. **Resolves ordering and dependency questions.** Which substrate components must ship before which measurements become Tier 1 (today-readable)? The self-improvement-rate finding put Q4a in Tier 2 (when-canary-ships) and Q4b/Q4c in Tier 1; this inquiry should verify or revise the tier assignments given the substrate's design.
4. **Surfaces redundancies.** Some substrate components might overlap with each other (e.g., Type 5 spec-symptoms vs Change Log sections); the measurement-aware view reveals which redundancies are clarifying vs wasteful.
5. **Connects to the structural-check decision tree.** The just-completed structural-check inquiry's State 0 (Hybrid A+D-with-decision-tree) commits an adversarial-test as a future Next Action. The safety substrate's measurement-aware design should anticipate how Q4c interacts with whichever subsequent state the test outcome maps to.

A good answer enables: an immediate follow-up materialization run that builds the substrate components in the correct order with measurement-output contracts respected — no re-deliberation about what the substrate emits and what the measurements consume.

## Scope Check
**Question covers goal.** The five goal items are all addressed by the question's "measurement-aware design" framing.

**Specific-vs-pattern check.** The user said "the measurement-aware design of the safety substrate." This is a SPECIFIC design problem for a specific substrate, but its conclusion (the measurement-output-contract principle) generalizes to other substrate-and-measurement pairs in the project (e.g., Predictive RC's `/intuit` outputs feeding self-improvement-rate's Q3a per-cycle quality and Q3c transfer cascade rate). Note as side observation; scope stays specific to safety substrate + Q4a/b/c.

## Layer Commitment

**Primary layer: STRUCTURAL.**

The user is asking what the safety substrate's INTEGRATED SPEC should look like such that measurement-Qs are first-class consumers. This is structural — the layer that adjudicates what the spec's sections, organization, and data interfaces ARE.

**A meaning sub-component is acknowledged in scope:** what does "measurement-aware design" mean as a design principle? Sensemaking will need to anchor this. But the deliverable is structural (the spec's shape).

**Process-layer concerns explicitly out of scope:** how each substrate component RUNS (the canary's re-run schedule; the pre-edit git check's hook integration; etc.). Those are materialization-time concerns; this inquiry produces the integrated spec, not the execution procedures.

**Other-layer alternatives considered + explicitly out of scope:**
- *Meaning standalone:* "what should the safety substrate BE?" — already answered in the parent project-identity finding (4 sub-substrates + their roles). Re-asking is redundant.
- *Process:* "how do the substrate components run?" — deferred to a follow-up materialization inquiry.

## Synthesis Trigger

This inquiry consolidates THREE prior inquiry findings into a single integrated design:

- `devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/finding.md` — commits the safety substrate as Section 5's load-bearing risk + Family II/III milestone in Section 3.3 of the self-maintenance arc. **Commitments inherited:** the safety substrate has two arms (regression detection symptom-catalog + stability preservation via git snapshots) plus three named-but-unbuilt components (canary reference runs, Change Log sections, pre-edit git check). Family II/III calibration-state.
- `devdocs/inquiries/2026-05-16_00-07__self_improvement_rate_measurable_questions/finding.md` — commits Q4a, Q4b, Q4c as the three retention-phase measurable questions of the self-improvement-rate framework. **Commitments inherited:** Q4a slow-drift detection (Tier 2 when-canary-ships; Tier 1 manual today); Q4b reverted vs superseded fraction (Tier 1); Q4c per-edit spec-symptom check (Tier 1 manual; could be automated). Plus each question's scope tag, modality tag, and direct-vs-absence-of-failure tag.
- `devdocs/inquiries/2026-05-16_06-12__structural_check_tool_remove_or_keep/finding.md` — commits the Hybrid A+D-with-decision-tree as the recommended primary path for the structural-check mechanism, plus the adversarial-test commitment + the substrate-honest mechanism-naming principle. **Commitments inherited:** the structural-check decision tree (State 0 → State 1 conditional on adversarial-test outcome); the four runtime-spec edits being applied; the substrate-honest principle for mechanism naming; the gate-preservation requirement (fix-and-re-save on FAIL).

CONCLUDE will require this finding to include an `## Inherited Commitments Re-test` section enumerating each inherited commitment and either RE-TESTING it with cited evidence OR explicitly flagging it as INHERITED-WITHOUT-RE-TEST with a reason. The inquiry's discipline work (especially Sensemaking and Critique) must do the re-testing, not just record the inheritance.

Specifically:
- Sensemaking: re-test the safety-substrate-component definitions against the just-introduced measurement-aware-design framing. Does the parent finding's substrate decomposition (regression-detection arm + stability-preservation arm + 3 named-but-unbuilt components) survive when viewed through the measurement-consumer lens, or does it need re-cutting?
- Sensemaking: re-test Q4a/Q4b/Q4c's calibration-state tiers against the substrate's design. Does Q4c's "could be automated when structural_check ships" claim hold given the structural-check inquiry's decision tree? Does Q4b's "Tier 1 today" claim hold given the git-diff analysis it implicitly assumes?
- Critique: re-test the structural-check decision tree's State 1 mappings against the safety substrate's measurement-output contracts. If catch-rate falls in the middle band (0.65–0.85) and Path B is built, does Path B's universal-section script emit signals Q4c can consume directly?

## Source Territory

- The three prior findings listed in the Synthesis Trigger above (read each in full).
- `enes/regression/desc.md` — the 23-symptom catalog across 5 types + 5 diagnostic patterns + the canary-test design + the detection timeline (earliest spec → during experience → after output → downstream pipeline → across-sessions slow drift).
- `enes/stability_preservation_via_git.md` — the snapshot mechanism (git archive → rename → side-by-side install) + 3 layers of isolation + snapshot hygiene rules.
- `enes/evolving_quality_assetment_component.md` — the three-layer quality-awareness architecture (Primitive RC + Predictive RC + Retrospective RC); Primitive RC is the layer the safety substrate inhabits.
- `enes/loop_desing_ideas/loop_design_2.md` — design-history notes about the structural check as a gate.
- The four runtime-spec edit targets: `homegrown/MVL/SKILL.md` lines 23/159 + `homegrown/MVL+/SKILL.md` lines 26/197 (these are being edited per the structural-check inquiry's State 0; this inquiry should treat them as in-flight).
- The existing safety-substrate artifacts on disk: `archived_skills/` (operational snapshot directory with at least two prior snapshots present); `homegrown/protocols/loop_diagnose.md` (existing diagnostic protocol — relates to regression detection).

## Frame to surpass

The current state's framing treats the safety substrate as a COLLECTION of independent components (each Family II or III milestone in the parent finding's decomposition; each named-but-unbuilt item separately). Measurements (Q4a/Q4b/Q4c) are described as TIER 1 or TIER 2 based on substrate-component readiness, but the relationship is one-way (substrate → measurement).

The measurement-aware design INVERTS this: the substrate is designed such that the measurement-output contracts are PRIMARY DESIGN OUTPUTS, not afterthought consumers. Substrate components emit specifically-shaped signals; measurement questions consume those signals directly. The substrate isn't just "useful for safety"; it's specifically "useful for catching the failure modes that Q4a/Q4b/Q4c are trying to observe."

The inquiry must produce a design that surpasses the "independent components" frame — not by collapsing them into one component, but by naming their measurement-output contracts and verifying those contracts feed the measurement consumers cleanly.
