# Branch: ADD-MULTI-AXIS-REQUIREMENT — Understanding-First Deep Dive

## Question

What is ADD-MULTI-AXIS-REQUIREMENT (the preserved research frontier per the 2026-05-19 00-00 strict revival trigger inquiry at `devdocs/inquiries/2026-05-19_00-00__add_multi_axis_requirement_design_and_promotion_gate/finding.md`) — its substance, its operational mechanism, its current status, its asymmetry with the Inherited Frame Audit (A1), the semantics of its strict revival trigger, the reliability assumption underlying its BLOCKER-downgrade verdict, and how it relates to the live /innovate machinery — at a depth sufficient to know what understanding gaps remain BEFORE considering any structural commit to `cognitive_harness/innovate/references/innovate.md`?

## Goal

Produce a finding.md that ARTICULATES UNDERSTANDING, not commits structural changes:

- **Operational substance.** Restate ADD-MULTI-AXIS-REQUIREMENT in plain language: what does the candidate rule SAY, what does it CONSTRAIN, what would it CHANGE in /innovate's runtime behavior if promoted? Make the substance grippable by a reader new to the project.
- **Place in the preserved-frontier landscape.** Name where ADD-MULTI-AXIS sits relative to other preserved frontiers + already-committed live rules. What is it adjacent to? What does it consolidate? What does it NOT cover?
- **The asymmetry with A1 (Inherited Frame Audit) per 00-00 reasoning.** Why is A1 a "capability gap" but ADD-MULTI-AXIS a "structural consolidation"? Articulate this distinction at a depth that lets a future inquiry apply the same diagnostic to other candidate frontiers.
- **Strict revival trigger semantics.** Unpack the trigger's components: "3+ future T4 cases at meta-decision pieces firing properties iv/v where single-axis specification proves insufficient on wrong-axis-Inversion failures (not Inversion-absence failures)." What counts as a T4 case? What counts as wrong-axis-Inversion vs Inversion-absence? What's the operational test for "single-axis specification proves insufficient"? Why N=3 (not N=2 or N=5)?
- **The loop-back reliability assumption.** 00-00's BLOCKER-downgrade rests on the existing axis-coverage check at /innovate Phase 3 Test Assembly reliably firing and triggering re-run of Phase 2 Generate. What does "reliably" mean here — empirically observed reliability vs spec-mandated reliability? What are the failure modes of the loop-back mechanism? How would a future inquiry detect that the loop-back is being skipped in practice?
- **Live-spec relationship map.** ADD-MULTI-AXIS is referenced explicitly at /innovate spec line 540 (within the Inherited Frame Audit's preserved-frontier note). It is also adjacent to: the Intervention-Shape-Axis Inversion refinement note at Phase 2 Generate (Q3-extension covering intervention-shape axis only); the Inversion mechanism's multi-axis system-level check at line 170 (depth-axis + existence-axis + identity-axis); the axis-coverage check at Phase 3 Test (refinement note); the Inherited Frame Audit's Step (ii) 4+1 property criterion. Map how each interacts with (or doesn't cover) the territory ADD-MULTI-AXIS would unify.
- **Understanding gaps surfaced.** What questions about ADD-MULTI-AXIS REMAIN OPEN after this inquiry's work? These become explicit Open Questions / Research Frontiers in the finding.

The finding should NOT produce spec edit text or commitment to /innovate. If understanding surfaces a recommendation to commit (e.g., the strict trigger has actually fired and was missed), that is recorded as a Next Action MUST for a follow-up inquiry to adjudicate the commit — not done here.

## Scope Check

Question covers goal. The question is bounded to UNDERSTANDING (substance, mechanism, status, asymmetry, trigger semantics, reliability, relationships). Structural-commit work is explicitly out of scope per the user's framing ("expanding our understanding rather than directly focusing on what to edit").

Specific-vs-pattern check: the question targets ADD-MULTI-AXIS specifically. The understanding produced may generalize to other preserved-frontier candidates (the A1-vs-consolidation asymmetry framework, the strict-trigger semantics, the loop-back reliability question) — these are pattern-level lessons surfaced incidentally; the inquiry focuses on the specific frontier first.

## Layer Commitment

**Primary layer: MEANING.** The user's explicit instruction "expanding our understanding rather than directly focusing on what to edit" declares the meaning layer. The inquiry adjudicates WHAT ADD-MULTI-AXIS IS as a cognitive operation in /innovate's space — what concept it captures, what its essence is, how it relates to neighboring concepts (per-axis rules; axis-coverage check; Inherited Frame Audit), and what would have to be settled at the meaning layer BEFORE structural or process work could begin.

**Other layers out of scope (this run):**
- **STRUCTURAL** — what /innovate spec text would commit ADD-MULTI-AXIS, where, with what wording. Deferred until meaning is settled; if this inquiry's understanding produces a clear case for promotion, a follow-up STRUCTURAL inquiry handles spec edits.
- **PROCESS** — what procedure /innovate would run differently when applying ADD-MULTI-AXIS at runtime. Partial overlap with meaning (understanding what ADD-MULTI-AXIS does requires knowing the operation) but the inquiry focuses on conceptual understanding, not procedural specification.

**Sequential plan if multi-layer is needed downstream.** If this inquiry concludes understanding is sufficient + a structural commit is warranted by surfaced evidence (e.g., the strict trigger has fired and was missed; or the loop-back is empirically unreliable; or a new gap is identified), open a STRUCTURAL follow-up inquiry to adjudicate spec edits per the 4-alternative-analysis framework. The Layer-3 §9 self-application would fire there, not here.

## Synthesis Trigger

This inquiry synthesizes multiple priors:

- `devdocs/inquiries/2026-05-19_00-00__add_multi_axis_requirement_design_and_promotion_gate/finding.md` — the canonical 00-00 ADD-MULTI-AXIS adjudication; commits Path C (Hybrid commit-path); commits strict revival trigger; commits BLOCKER-downgrade verdict; commits N=1-strict cumulative count correction.
- `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_produced_addtest_when_repair_correct/finding.md` — Pair 7 originating diagnostic; source of the ADD-MULTI-AXIS-REQUIREMENT name + the original strict T4-specific revival trigger language.
- `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_multivalue_edgecase_probe/finding.md` — Pair 12 diagnostic; adjacent evidence (axis-non-determination) but T1-not-T4; clarifies the wrong-axis-Inversion vs Inversion-absence distinction.
- `devdocs/inquiries/2026-05-18_22-00__innovate_improvement_synthesis_from_recent_diagnostics/finding.md` — 22-00 synthesis; the source of the "N=2 cumulative" framing that 00-00 corrected to N=1 strict; useful for understanding why the silent-widening happened and what it cost.
- `cognitive_harness/innovate/references/innovate.md` — current live /innovate spec at calibration state post-A+B+C+05-00+06-00. Contains: line 170 multi-axis system-level check at Inversion mechanism; lines 399-414 Intervention-Shape-Axis Inversion (Q3-extension); line 540 explicit ADD-MULTI-AXIS-REQUIREMENT preserved-frontier reference within Inherited Frame Audit; the axis-coverage check refinement note at Phase 3 Test.
- `devdocs/inquiries/2026-05-19_02-00__innovate_spec_edit_subinquiry_a_inherited_frame_audit/finding.md` — Sub-Inquiry A's Inherited Frame Audit commit; live in the spec post-A. A's role as a CAPABILITY-GAP-fix is the comparison baseline 00-00 used to argue ADD-MULTI-AXIS is structurally asymmetric.

CONCLUDE's Inherited Commitments Re-test required. Plan the inquiry's discipline work (especially Sensemaking — at the meaning layer — and Critique) to actually test what each prior commits and how this inquiry's understanding relates.

## Diagnostic Constraints

- **Hard scope:** understanding-first. No structural commits in this finding. No Property (v) firing (no /innovate spec edits in this inquiry's deliverable; documentation seed type).
- **Calibration discipline:** preserve the strict-reading commitment from 00-00. Do not silently widen the revival trigger; do not advance the cumulative count from N=1 by counting this inquiry's understanding work.
- **Layer-3 §9 self-application:** TRIVIALLY SATISFIED — Property (v) does NOT fire (documentation seed; no direct /innovate spec edits in deliverable). Count stays N=4 RECORDED OVERRIDES.

## Relationships

- **CONTINUES FROM:** `devdocs/inquiries/2026-05-19_00-00__add_multi_axis_requirement_design_and_promotion_gate/finding.md` — this inquiry inherits 00-00's strict revival trigger, BLOCKER-downgrade verdict, and characterization commitments; this inquiry expands understanding without re-litigating 00-00's verdicts.
- **RELATED:** Pair 7 finding (the origin); Pair 12 finding (adjacent evidence); 22-00 synthesis (the silent-widening source); current /innovate spec (the live machinery); 02-00 Sub-Inquiry A (A1 the asymmetry-comparison baseline); 06-00 Q4 deep dive (the most recent preserved-frontier-related work for pattern-comparison purposes).
- **POTENTIAL DOWNSTREAM:** if understanding surfaces a clear promotion case, a future STRUCTURAL inquiry may be opened to commit spec edits. Not part of THIS inquiry.
