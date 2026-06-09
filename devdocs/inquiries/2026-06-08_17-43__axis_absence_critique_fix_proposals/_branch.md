# Branch: axis_absence_critique_fix_proposals

## Question

The question spans these load-bearing aspects (all preserved):

- **Subject** — The "Axis Absence at the Failure's Actual Plane" failure type identified as #2 in `devdocs/top_7_common_critique_failures.md`, in the context of the `/td-critique` discipline at `cognitive_harness/td-critique/`.
- **Action** — diagnose (understand the underlying issue / mechanism) THEN design (propose concrete fixes).
- **Level** — discipline-level (modifications to `cognitive_harness/td-critique/SKILL.md` and `references/td-critique.md`).
- **Observation targets** (preserved separately per the multi-clause rule):
  1. The underlying issue of Axis Absence — what makes it different from "Wrong Dimensions" and "Dimension Blindness" already in the spec; why current Phase 0 doesn't catch it; what the deeper construction-problem subtype is.
  2. AT LEAST THREE solution proposals, drawn from across the surgical / significant-rewrite / additional-section continuum.
  3. Plus/minuses of each proposal (trade-off analysis).
- **Deliverable shape** — design with N≥3 alternative proposals and explicit per-proposal trade-off analysis, ranked or organized for the user to choose among.

**The question.** What is the underlying mechanism of the "Axis Absence at the Failure's Actual Plane" critique failure (distinct from existing "Wrong Dimensions" / "Dimension Blindness"), and what are at least 3 distinct solution proposals — spanning surgical edits, additional sections, and significant rewrites of `cognitive_harness/td-critique/references/td-critique.md` — that would fix it, with explicit plus/minus trade-off analysis per proposal?

## Goal

- **Criterion** — proposals must be (a) actionable as edits to specific sections of the td-critique spec, (b) grounded in the 9 corpus instances from `top_7_common_critique_failures.md` §2 (so each proposal can be tested against the corpus retroactively), (c) honestly different in scope (surgical / additional / significant — not three variations of the same surgical edit), (d) trade-off-honest (real minuses named, not strawman).
- **Use case** — the user will pick one or more proposals to implement; the proposals become input to a structural-layer inquiry on td-critique amendments.
- **Desired outcome** — a clear understanding of the underlying mechanism plus a small menu of fixes with explicit trade-offs, so the user can decide between minimal-risk surgical patches vs. larger architectural restructuring.
- **What would fail** — three proposals that are all "add another dimension to the list" (no scope variance); proposals that don't ground against the 9 corpus instances (so we can't test if they'd actually catch the failures); proposals with only-positives plus/minus analysis (sycophantic / no real trade-off); proposals that conflate Axis Absence with the existing Wrong Dimensions / Dimension Blindness failure modes (collapsing the very distinction this inquiry is about).

## Source Input

```text
lets dive deep into Axis Absence at the Failure's Actual     │ 9         │ Extends "Wrong dimensions" with deeper                │
  │     │ Plane                                    │           │ construction-problem subtype       and understand the underlying issue and what surgical, or significant rewrites or additional sections might fix this issue, and what are plus minuses of each solution, at least give me 3 solution proposal

but first start by reading cognitive_harness/td-critique fully
```

## Scope Check

Question covers goal. The question explicitly asks for the underlying mechanism PLUS at least 3 proposals with trade-offs; the goal's "use case" + "what would fail" specs match.

Specific-vs-pattern check: the user pointed at a SPECIFIC failure (Axis Absence) but the proposals are about the BROADER spec mechanism (Phase 0 dimension construction; the structure of the failure-modes section; the prosecution depth check). This is correctly scoped — we're fixing the spec to address the specific failure pattern, but the fix lives in the spec's general mechanism.

## Layer Commitment

This is a meta-question on the `/td-critique` discipline spec (a framework artifact). The user's deliverable shape is "surgical, or significant rewrites or additional sections" — operating on the spec's STRUCTURE.

**Primary layer: STRUCTURAL.** The deliverable is concrete edits to spec sections, dimension lists, and process phases. The user asked for proposals at the section/edit level.

**Foundational meaning-layer work declared but not the deliverable.** Understanding the underlying mechanism of Axis Absence (what IS the concept; how does it differ from existing failure modes) is preparatory: it grounds the structural proposals but is not the primary commitment. The structural proposals themselves carry meaning-layer implications (each proposal restructures the spec around a different conception of what dimension-construction IS), but the user wants to CHOOSE among the conceptions via concrete structural variants.

**Other layers considered + out of scope:**
- **Process** — out of scope. Implementing the structural changes will involve process-layer choices (when in Phase 0 does the new check fire? what triggers re-runs?), but process design is downstream of picking a structural proposal. A follow-up process-layer inquiry should run once one of the 3 proposals is selected.

## Synthesis Trigger

This inquiry consumes the following prior outputs:

- `devdocs/100_critique_correction_chain_analysis.md` — the 48-pair corpus analysis with per-pair "what critique missed" diagnoses. Carries commitments about which pairs fall under which failure type and the specific blindspot mechanism per pair.
- `devdocs/top_7_common_critique_failures.md` §2 (Axis Absence) — identifies 9 corpus instances under this failure type, names the construction-problem-vs-detection-problem distinction, sketches a corrective (axis-completeness probe + self-defeating-dimension check). Carries commitments about Axis Absence's identity and the proposed corrective.
- `cognitive_harness/td-critique/references/td-critique.md` — the existing discipline spec. Carries commitments about Phase 0 dimension construction, the 6 default dimensions, the project-specific risk dimension check, the 7 failure modes (specifically Wrong Dimensions #1 and Dimension Blindness #4), and the multi-axis prosecution depth check at Phase 2.
- `cognitive_harness/td-critique/SKILL.md` — the discipline invocation spec. Less load-bearing for proposal content but defines the SKILL's reference-load contract.

CONCLUDE will require an `## Inherited Commitments Re-test` section. Specifically, each proposal must be tested against (a) the 9 corpus instances, (b) the existing failure-mode definitions of Wrong Dimensions and Dimension Blindness (to verify Axis Absence is genuinely distinct, not a re-labeling), (c) the Phase 0 dimension-construction step's existing project-specific risk check (to verify proposals compose with rather than duplicate that check), and (d) the Phase 2 multi-axis prosecution depth check (same concern: compose-not-duplicate).
