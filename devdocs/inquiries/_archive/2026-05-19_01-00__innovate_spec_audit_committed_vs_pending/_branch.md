# Branch: Innovate Spec Audit — Committed vs Pending vs Current Structure

## Question

Audit the current /innovate spec at `cognitive_harness/innovate/references/innovate.md` against the 8 LOOP_DIAGNOSE diagnostics' refinement candidates plus A1's ready-to-commit spec sub-section from the 23-00 inquiry and the Path C commitments from the 19-00 inquiry — producing a concrete inventory of (a) which refinement candidates are already committed in the spec, (b) which remain pending, and (c) the current spec's overall section structure.

## Goal

Produce a stable audit document that the downstream /innovate redesign inquiry can consume as input. The downstream redesign inquiry needs to know, before designing spec-edit integration, exactly what the current spec already contains so it doesn't re-commit existing content, miss pending candidates, or violate the spec's current structure. A good answer includes:

- A per-candidate status table covering every refinement candidate named in the 8 in-scope diagnostic findings + A1's 5 components from 23-00 + the per-axis-rule mesh enumerated in 19-00's Path C positive scope. Each candidate gets: COMMITTED (with citation to spec location), PARTIAL (with what's in / what's missing), or PENDING (with description).
- A map of the current /innovate spec's section structure (headings, sub-sections, named features) at sufficient resolution that the redesign inquiry knows where each pending candidate would land if committed.
- A flag of any structural drift / surprises observed in the current spec (rules that exist in the spec but don't trace to any of the 8 diagnostics' candidates; rules that were committed in piecemeal fashion without coordinated naming).

## Scope Check

Question covers goal. The question asks for a per-candidate status inventory + current spec structure + (implicitly) drift observations; the goal makes the inventory's downstream consumption explicit (input to the redesign inquiry). No widening needed.

**Specific-vs-pattern check:** the audit operates on SPECIFIC candidates (the named refinement candidates from 8 diagnostics) — this is intentional and correctly scoped. Generalizing to "any future candidates" would over-scope. The audit's downstream consumer (the redesign inquiry) will use this list specifically.

**Hard scope constraint:** the audit READS the /innovate spec; it does NOT edit it. No spec-text generation in this inquiry — that's the downstream redesign inquiry's role. Property (v) check at piece level should confirm no spec edits proposed here.

**Audit-vs-design distinction:** this inquiry produces a DESCRIPTIVE artifact (committed vs pending vs structure). It does NOT decide WHERE pending candidates should land (that's design work — redesign inquiry's scope). Decomposition should not produce design-the-redesign Q-pieces.

## Synthesis Trigger

This inquiry consolidates ~12 prior outputs:

- `cognitive_harness/innovate/references/innovate.md` — the criterion artifact whose current state is being audited.
- `devdocs/inquiries/2026-05-18_22-00__innovate_improvement_synthesis_from_recent_diagnostics/finding.md` — the synthesis that consolidated the 8 diagnostics into 3 cores + named the candidates; provides the candidate-grouping framework.
- `devdocs/inquiries/2026-05-18_23-00__inherited_frame_audit_branch_experiment_design/finding.md` — A1's ready-to-commit spec sub-section (5 components: predicate + orchestration + override + evaluation gate + integration map). Counts as a "pending" addition to the spec.
- `devdocs/inquiries/2026-05-19_00-00__add_multi_axis_requirement_design_and_promotion_gate/finding.md` — Path C commitments (positive scope: per-axis rules; negative scope: ADD-MULTI-AXIS deferred). Defines which candidates the redesign inquiry should commit.
- `devdocs/inquiries/2026-05-18_09-20__loop_diagnose__innovate_missed_breadth_inversion/finding.md` — Pair 9 (B1-B4 sub-mode requirements; A1 original proposal).
- `devdocs/inquiries/2026-05-18_14-00__loop_diagnose__innovate_missed_mdfiles_as_memory/finding.md` — Pair 1 (V1, V2, V3, V4 candidates).
- `devdocs/inquiries/2026-05-18_16-30__loop_diagnose__innovate_propagated_inherited_mechanism_claim/finding.md` — Pair 2 (W1, W2, W3 candidates).
- `devdocs/inquiries/2026-05-18_18-00__loop_diagnose__innovate_missed_existence_counter_reframe/finding.md` — Pair 4 (W1 AR bidirectional).
- `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/finding.md` — Pair 5 (Q1, Q2, Q3 candidates).
- `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_produced_addtest_when_repair_correct/finding.md` — Pair 7 (§8 + Q2 fifth property + Q3-extension + Q5-extension + ADD-MULTI-AXIS preserved frontier + the axis-coverage check refinement that was ALREADY committed to /innovate per the synthesis).
- `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_contrarian_rethink_methodology_mode/finding.md` — Pair 8 (§8.B + §9 candidates).
- `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_multivalue_edgecase_probe/finding.md` — Pair 12 (Strategy E no-extension; conditional candidates).

Each prior carries refinement candidates as commitments. CONCLUDE's Inherited Commitments Re-test section will be required — each candidate's commitment status (committed / partial / pending) is the re-test result.

## Relationships

- **CONTINUES FROM:** `devdocs/inquiries/2026-05-19_00-00__add_multi_axis_requirement_design_and_promotion_gate/finding.md` — the 19-00 finding's recommendation that an audit precede the downstream redesign inquiry; the audit's outputs become the redesign inquiry's input.
- **AUDITS:** `cognitive_harness/innovate/references/innovate.md` — the criterion artifact.
- **DOWNSTREAM:** the /innovate redesign inquiry that consumes this audit's outputs + A1's spec text + per-axis rules' content → commits the actual /innovate spec edit.
- **RELATED:** `devdocs/inquiries/2026-05-18_22-00__innovate_improvement_synthesis_from_recent_diagnostics/finding.md` (candidate-grouping framework); A1's 23-00 finding; 8 LOOP_DIAGNOSE findings.
