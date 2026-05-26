# Branch: ADD-MULTI-AXIS-REQUIREMENT — Design + Promotion Gate Investigation

## Question

The 22-00 synthesis (`devdocs/inquiries/2026-05-18_22-00__innovate_improvement_synthesis_from_recent_diagnostics/finding.md`) flagged Pair 7's preserved research frontier **ADD-MULTI-AXIS-REQUIREMENT** as the UNIFYING META-RULE for CORE 2 (Multi-Scope / Multi-Axis Mechanism Application), at N=2 cumulative evidence (Pair 7 + Pair 12), with heuristic promotion threshold ~3+ cases. **What is ADD-MULTI-AXIS-REQUIREMENT operationally — what would the rule commit as spec text? How does it relate to the already-proposed per-axis rules (Pair 7's Q3-extension at intervention-shape axis; Pair 2's W2 multi-axis depth-check; Pair 1's V1 per-row mechanism trace; the existing axis-coverage check at Assembly)? What's the promotion gate from N=2 to N=3+? And — critically — is ADD-MULTI-AXIS a BLOCKER for CORE 2 implementation in the way A1 was a blocker for CORE 1, or can CORE 2 proceed in stages with the per-axis rules first and ADD-MULTI-AXIS following?**

## Goal

Resolve the CORE 2 BLOCKER status of ADD-MULTI-AXIS by producing:

(a) **Operational characterization** of ADD-MULTI-AXIS-REQUIREMENT — what cognitive operation it commits (the meta-rule on top of the per-axis rules); what spec-text shape it would have; what its predicate / orchestration / override pattern looks like analogous to A1's 5-component shape.

(b) **Relationship map** with the per-axis rules already in composed v3: Q3-extension (intervention-shape axis at property-(v) pieces); W2 (multi-axis depth-check on Inversion); V1 (per-row mechanism-trace at Assembly); axis-coverage check refinement (the existing /innovate spec text at Phase 3 Test). Does ADD-MULTI-AXIS SUBSUME these (they fold into it) or ORCHESTRATE them (it invokes them) or COMPLEMENT them (it operates at a different scope)?

(c) **CORE 2 staged implementation plan WITH and WITHOUT ADD-MULTI-AXIS promoted.** What does the redesign inquiry commit if ADD-MULTI-AXIS is NOT yet promoted (just the per-axis rules B1-B4 + Q3-extension + W2 + W3 + V1 + V4 + W1-Pair4)? What does it commit if ADD-MULTI-AXIS IS promoted (the meta-rule + the per-axis rules under it)? Is the per-axis-only set operationally sufficient for most CORE 2 cases?

(d) **Promotion gate specification.** What triggers N=2 → N=3 → promotion? The 22-00 synthesis said "one more case at a meta-decision piece with multi-axis-failure" — is that the right gate, or is there a stronger design-level gate (e.g., the operational characterization + integration map are ready; commit when 3rd case arrives)? The A1 precedent shows that a frontier can be promoted to ACTIONABLE-AS-BRANCH-INQUIRY at N=3 and then DESIGNED in a branch experiment; ADD-MULTI-AXIS could follow the same path at N=3.

(e) **Honest BLOCKER status.** Is ADD-MULTI-AXIS a true blocker for CORE 2 (analogous to A1's role for CORE 1) OR is CORE 2 implementable in stages where the per-axis rules cover most cases and ADD-MULTI-AXIS is the eventual unifying refinement (not a structural prerequisite)?

The output should distinguish ADD-MULTI-AXIS's role from A1's role:
- A1 was a NEW operation at a NEW location (phase-boundary meta-trigger) not covered by existing rules. Without A1, CORE 1's defense-in-depth at the candidate-set-aggregate scope was absent entirely.
- ADD-MULTI-AXIS's territory MIGHT already be PARTIALLY covered by the per-axis rules (Q3-extension + W2 cover specific axes). The unifying meta-rule consolidates them.

If CORE 2's territory IS substantially covered by per-axis rules, ADD-MULTI-AXIS is a STRUCTURAL CONSOLIDATION not a BLOCKING capability gap. If it's NOT substantially covered, ADD-MULTI-AXIS plays an A1-analogous role and needs a similar branch experiment.

## Scope Check

Question covers goal. The question asks for operational characterization + relationship map + staged implementation plan + promotion gate + honest BLOCKER status assessment. The goal explicitly distinguishes ADD-MULTI-AXIS's potential role (true blocker vs structural consolidation) and asks for evidence-based adjudication.

**Specific-vs-pattern check:** the question is grounded in 2 specific cases (Pair 7 + Pair 12) but the underlying question is about a SPEC-LEVEL META-RULE. The output should generalize beyond the 2 cases — the operational characterization should specify what ADD-MULTI-AXIS does for ANY multi-axis meta-decision piece, not just the 2 observed.

**Hard scope constraint:** all design work operates on /innovate reference. Cross-discipline complementarity (with /sense-making's axis-of-anchor identification; with /td-critique's axis-coverage testing) acknowledged but not duplicated.

**Composition concern:** ADD-MULTI-AXIS's design must coexist with A1 (already designed at 23-00). A1 fires between Phase 2 Generate and Phase 3 Test as a candidate-set-aggregate meta-trigger; ADD-MULTI-AXIS would fire per-piece. Their relationship must be explicit.

## Layer Commitment

**Primary layer: STRUCTURAL.** ADD-MULTI-AXIS-REQUIREMENT is a new spec sub-section (or extension to existing Q3 / Q3-extension rules) in /innovate reference. This inquiry decides:
- WHERE in /innovate reference ADD-MULTI-AXIS lives (likely an extension to Q3-extension, OR a new sub-section parallel to A1, OR a refinement to the existing axis-coverage check at Assembly)
- WHAT SPEC TEXT it commits (predicate; orchestration; relationship with per-axis rules)
- WHICH RELATIONSHIP with the per-axis rules (subsume / orchestrate / complement)

**Sequential plan:**
1. **STRUCTURAL layer (this inquiry):** characterize ADD-MULTI-AXIS operationally + commit relationship with per-axis rules + specify promotion gate + assess CORE 2 BLOCKER status.
2. **PROCESS layer (follow-on if needed):** procedural integration details after STRUCTURAL is committed.
3. **MEANING layer (largely settled):** ADD-MULTI-AXIS's cognitive operation — "require Inversion on ALL load-bearing axes at multi-axis meta-decision pieces" — is settled by Pair 7's original proposal + Pair 12's confirmation of axis-non-determination. Not re-litigated here.

**Other layers explicitly out of scope:**
- MEANING — settled (would re-litigate if challenged).
- PROCESS (procedural workflow beyond spec text) — deferred to follow-on if needed.

## Synthesis Trigger

This inquiry consolidates 5 prior outputs:

- `devdocs/inquiries/2026-05-18_22-00__innovate_improvement_synthesis_from_recent_diagnostics/finding.md` — the synthesis flagging ADD-MULTI-AXIS as CORE 2's unifying meta-rule + frontier promotion call 2.
- `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_produced_addtest_when_repair_correct/finding.md` — Pair 7: original ADD-MULTI-AXIS-REQUIREMENT preservation as research frontier; intervention-shape-axis as the first cumulative case; Q3-extension as the specific per-axis rule.
- `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_multivalue_edgecase_probe/finding.md` — Pair 12: 2nd cumulative case (cardinality / reading-commitment axis at schema-commitment pieces); Strategy E no-extension composition pattern.
- `devdocs/inquiries/2026-05-18_16-30__loop_diagnose__innovate_propagated_inherited_mechanism_claim/finding.md` — Pair 2: W2 multi-axis depth-check refinement (an adjacent per-axis rule); W3 shared-input detection.
- `devdocs/inquiries/2026-05-18_23-00__inherited_frame_audit_branch_experiment_design/finding.md` — A1's design provides the PROCEDURAL TEMPLATE for a branch-experiment frontier promotion; A1 also explicitly integrates with ADD-MULTI-AXIS ("invokes when promoted").

Each prior carries commitments. CONCLUDE's Inherited Commitments Re-test section is required.

## Diagnostic Constraints

- **Hard scope:** all design operates on /innovate reference. No spec edits proposed for other disciplines.
- **Calibration discipline (parsimony):** ADD-MULTI-AXIS is one rule. NOT a broad rewrite; bounded extension.
- **T1-T5 framework:** ADD-MULTI-AXIS must pass T1-T5 per 01-30.
- **A1 coexistence:** ADD-MULTI-AXIS must not contradict A1's design (A1 invokes ADD-MULTI-AXIS "when promoted"; the relationship must be honored).
- **Cumulative-evidence discipline:** the inquiry should NOT promote ADD-MULTI-AXIS from this design work alone (single-design-event ≠ cumulative-evidence). Promotion gate remains evidence-driven; this inquiry produces the DESIGN that can be committed WHEN cumulative evidence reaches threshold.
- **Honest BLOCKER status:** if ADD-MULTI-AXIS turns out NOT to be a BLOCKER for CORE 2 (per-axis rules cover most cases), the finding should explicitly say so. If it IS a BLOCKER, the finding should match A1's deliverable shape.

## Relationships

- **CONTINUES FROM:** `devdocs/inquiries/2026-05-18_22-00__innovate_improvement_synthesis_from_recent_diagnostics/finding.md` (the synthesis's frontier promotion call 2).
- **DESIGNS:** ADD-MULTI-AXIS-REQUIREMENT (preserved research frontier originally proposed in `devdocs/inquiries/2026-05-18_loop_diagnose__innovation_produced_addtest_when_repair_correct/finding.md`).
- **MUST INTEGRATE WITH:** per-axis rules in composed v3 (Q3-extension; W2; V1; axis-coverage check) + A1's design (`devdocs/inquiries/2026-05-18_23-00__inherited_frame_audit_branch_experiment_design/finding.md`).
- **MUST PASS:** `devdocs/inquiries/2026-05-18_01-30__loop_diagnose__innovate_metaops_boundary_leak/finding.md`'s T1-T5 discipline-boundary framework.
- **PARALLEL TO:** A1's 23-00 branch experiment (A1 for CORE 1; this inquiry for CORE 2).
- **DOWNSTREAM:** the /innovate redesign inquiry that commits A1 + ADD-MULTI-AXIS (if promoted) + the per-axis rules + the other candidates → consolidated spec edit.
- **RELATED:** `cognitive_harness/innovate/references/innovate.md` (criterion artifact).
