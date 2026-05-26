---
status: active
model: claude-opus-4-7[1m]
effort: max
related:
  - cognitive_harness/innovate/references/innovate.md
  - devdocs/inquiries/2026-05-18_22-00__innovate_improvement_synthesis_from_recent_diagnostics/finding.md
  - devdocs/inquiries/2026-05-18_23-00__inherited_frame_audit_branch_experiment_design/finding.md
  - devdocs/inquiries/2026-05-19_00-00__add_multi_axis_requirement_design_and_promotion_gate/finding.md
  - devdocs/inquiries/2026-05-18_09-20__loop_diagnose__innovate_missed_breadth_inversion/finding.md
  - devdocs/inquiries/2026-05-18_14-00__loop_diagnose__innovate_missed_mdfiles_as_memory/finding.md
  - devdocs/inquiries/2026-05-18_16-30__loop_diagnose__innovate_propagated_inherited_mechanism_claim/finding.md
  - devdocs/inquiries/2026-05-18_18-00__loop_diagnose__innovate_missed_existence_counter_reframe/finding.md
  - devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/finding.md
  - devdocs/inquiries/2026-05-18_loop_diagnose__innovation_produced_addtest_when_repair_correct/finding.md
  - devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_contrarian_rethink_methodology_mode/finding.md
  - devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_multivalue_edgecase_probe/finding.md
---

# Finding: Innovate Spec Audit — Committed vs Pending vs Current Structure

## Question

From `_branch.md`:

Audit the current `/innovate` spec at `cognitive_harness/innovate/references/innovate.md` against the 8 LOOP_DIAGNOSE diagnostics' refinement candidates plus A1's ready-to-commit spec sub-section from the 23-00 inquiry (`devdocs/inquiries/2026-05-18_23-00__inherited_frame_audit_branch_experiment_design/finding.md`) and the Path C commitments from the 19-00 inquiry (`devdocs/inquiries/2026-05-19_00-00__add_multi_axis_requirement_design_and_promotion_gate/finding.md`) — producing a concrete inventory of (a) which refinement candidates are already committed in the spec, (b) which remain pending, and (c) the current spec's overall section structure.

**Goal:** Produce a stable audit document that the downstream /innovate redesign inquiry can consume as input. The downstream redesign inquiry needs to know, before designing spec-edit integration, exactly what the current spec already contains so it doesn't re-commit existing content, miss pending candidates, or violate the spec's current structure.

---

## Finding Summary

**TLDR for the redesign inquiry's `_branch.md` Synthesis Trigger section** (copy-pasteable as a bullet list):

- /innovate spec is at approximately a **pre-composed-v3 state**; ~10% of the 8-LOOP_DIAGNOSE-diagnostic-series candidates committed (qualitative estimate).
- Redesign POSITIVE scope: per-axis-rule mesh (Pair 9 B1-B4 + Pair 1 V1+V3+V4 + Pair 2 W2+W3 + Pair 4 W1 + Pair 5 Q1-Q5 + Pair 7 Q-extensions + Pair 8 §8.B + §9 + V2 4th category) + A1's 5 components from 23-00. ~26 distinct commits.
- Redesign NEGATIVE scope: ADD-MULTI-AXIS-REQUIREMENT (deferred per 19-00 Path C); Layer-3 §9 compliance-criterion strengthening (research frontier); Strategy E formalization (procedural not spec); already-committed items (B1 depth-check at lines 155-167; Pair 7 axis-coverage check at line 308).
- Conventions: DROP §-numbering in spec body; use existing refinement-note + sub-section conventions; preserve traceability via commit messages + `docs/discipline_design_history/for_innovate.md`.
- A1 positioned as new sub-section "### Inherited Frame Audit" between Phase 2 Generate and Phase 3 Test (descriptive title).
- Layer-3 §9 commit timing: STANDARD compliance criterion (specific reason required); trigger-driven strengthening (no preemptive); N=5 TRIGGER predicted to fire during redesign's Innovation step.
- Optional staging: redesign could decompose into 2-3 sub-inquiries (sub-inquiry A: A1; sub-inquiry B: piece-level rules + §8 + §9; sub-inquiry C: mechanism refinement notes). Suggestion, not pre-commit.

**Full narrative:**

- **The /innovate spec at `cognitive_harness/innovate/references/innovate.md` is 442 lines** with descriptive heading conventions (`## Top-level`; `### Sub-sections`; *Refinement note* + bold paragraph titles for inline rules). **No §-numbered sections exist in the spec.** The synthesis at 22-00 + Pair 7 + Pair 8 reference §8 (Intervention-Shape Vocabulary) and §9 (seed-time methodology-mode consideration rule) as internal-only diagnostic-series scaffolding for proposed-but-not-committed structure. The spec has NOT been propagated with the composed-v3 commits.

- **Status tally across ~30 candidates** (8 LOOP_DIAGNOSE diagnostics + A1's 5 components from 23-00 + 19-00's Path C scope): 2 COMMITTED (Pair 9 B1 Inversion depth-check at lines 155-167; Pair 7 axis-coverage check at line 308 — verified via verbatim match) + 1 PARTIAL-COMMITTED (Pair 9 B4 axis-coverage check explicit invocation — composite at line 308) + 3 PARTIAL (Pair 9 B3 AR redesign-level question present but not MANDATORY; Pair 1 V2 3-of-4 disposition categories; Pair 4 W1 AR bidirectional in spirit) + 1 PARTIAL with conditional dependency (Pair 5 Q5 Telemetry section exists; specific content depends on Pair 5 Q2-Q3 commit) + 23 PENDING (most candidates including all of A1's 5 components; all of Pair 5 Q1-Q5; all of Pair 7's Q1-Q4; Pair 8 §8.B + §9; Pair 1 V1+V3+V4; Pair 2 W2+W3; Pair 9 B2) + 1 DEFERRED (ADD-MULTI-AXIS-REQUIREMENT per 19-00 Path C). Approximately 10% of candidates committed — a qualitative estimate; precise quantitative coverage cannot be assigned without finer per-candidate weighting.

- **6 meaning-layer commitments adjudicating the redesign's framing.** (1) Per-PARTIAL adjudication: B3 + V2 + W1-Pair4 UPGRADE; Q5-Pair5 UPGRADE-CONDITIONAL (fires if Pair 5 Q2-Q3 commit); B4/Pair 7 LEAVE. (2) Composed-v3 reconciliation: redesign POSITIVE scope ~26 items; NEGATIVE scope = ADD-MULTI-AXIS + Layer-3 strengthening + Strategy E + already-committed. (3) §-numbering convention: DROP in spec body; preserve via commit messages + design-history file. (4) Layer-3 §9 commit timing: STANDARD compliance criterion; trigger-driven strengthening (no preemptive); N=5 TRIGGER expected during redesign. (5) A1 positioning: "### Inherited Frame Audit" between Phase 2 Generate and Phase 3 Test (descriptive title, not phase-numbered; the sub-section's opening sentence states "fires after Phase 2 Generate completes; precedes Phase 3 Test" to disambiguate). (6) This audit's Layer-3 self-application: TRIVIALLY SATISFIED (Property (v) doesn't fire; documentation seed prevents Layer-3 advancement; count stays at N=4).

- **5 drift observations** about the current spec state, surfaced for the redesign's awareness: (Drift 1) Combination's scope-fidelity caveat at lines 126-128 doesn't trace to the 8 in-scope diagnostics — likely earlier inquiry origin; redesign leaves alone. (Drift 2) Output disposition categories at lines 296-300 partially absorb V2 territory (DEFERRED-with-revival-trigger subsumes some operational meaning); V2's "Re-test trigger" 4th category is structurally distinct (re-running test vs revisiting candidate) and warrants the upgrade per Commitment 1. (Drift 3) No §-numbered sections in spec — "§8, §9" are internal-only diagnostic-series labels; motivates Commitment 3. (Drift 4) Layer-3 §9 override pattern applied 4× against a rule NOT formally in the spec — informs Commitment 4 + Prediction 2. (Drift 5) Strategy E is procedural insight at LOOP_DIAGNOSE-protocol level, NOT /innovate spec content; stays out of redesign scope. The audit prioritized drifts material to the redesign's scope; additional minor drifts (cross-section terminology consistency, etc.) may exist but are within the redesign inquiry's own exploration scope to surface if relevant.

- **2 predictions for the downstream redesign inquiry.** (Prediction 1 — Staging suggestion) the redesign's ~26 commit items could decompose into 2-3 sub-inquiries: sub-inquiry A (A1 + Inherited Frame Audit cross-references); sub-inquiry B (piece-level rules + §8 + §9 derivatives); sub-inquiry C (mechanism-specific refinement notes + telemetry). Suggestion, not pre-commitment; the redesign's user retains autonomy on shape. (Prediction 2 — Layer-3 N=5 TRIGGER) **IF** the redesign's Innovation step fires Property (v) (Production-task seed; direct /innovate spec edits — expected) **AND** an override is needed (uncertain — depends on whether the redesign re-litigates Sensemaking-adjudicated decisions OR encounters methodology-mode-alternative considerations), **THEN** the recorded override is the 5th consecutive (Pair 8 → Pair 12 → 22-00 → A1 23-00 → redesign), reaching the N=5 TRIGGER threshold per Pair 12's note. Predicted, not guaranteed. The redesign's CONCLUDE step should observe the Layer-3 status either way; a subsequent inquiry investigates compliance-criterion strengthening when (and only when) the trigger fires.

- **Layer-3 self-application of /innovate's §9 — TRIVIALLY SATISFIED.** This audit's Innovation step did NOT advance the Layer-3 override count. The count REMAINS at N=4 (MONITORING threshold reached at A1's 23-00 inquiry); does NOT advance to N=5 (TRIGGER). Same favorable structural outcome as the 19-00 inquiry — documentation-seed inquiries structurally prevent Layer-3 advancement. Per Q4 Prediction 2, the trigger is expected to fire from the downstream redesign inquiry, which is a Production-task.

- **Emergent assembly innovation:** the audit's deliverable shape — factual inventory (Q1) + drift observations (Q3) + meaning-layer commitments (Q2) + forward predictions (Q4) + compact handoff package (Q5) — generalizes as a **reusable audit template for future spec-state assessments of other disciplines.** Flagged as Research Frontiers item.

---

## Finding

### Context — why the audit was needed and what it produces

The diagnostic series (8 LOOP_DIAGNOSE inquiries on the `/innovate` spec at `cognitive_harness/innovate/references/innovate.md` — the Structural Innovation discipline) produced approximately 21 refinement candidates by canonical name, plus A1's 5 components from the 23-00 branch-experiment design inquiry (`devdocs/inquiries/2026-05-18_23-00__inherited_frame_audit_branch_experiment_design/finding.md`) and Path C commitments from the 19-00 ADD-MULTI-AXIS adjudication inquiry (`devdocs/inquiries/2026-05-19_00-00__add_multi_axis_requirement_design_and_promotion_gate/finding.md`). The synthesis at 22-00 (`devdocs/inquiries/2026-05-18_22-00__innovate_improvement_synthesis_from_recent_diagnostics/finding.md`) grouped these into 3 core improvements + 7 seeds + 2 frontier-promotion calls.

The 19-00 inquiry recommended an audit precede the downstream /innovate redesign inquiry — to determine which candidates are already committed (the spec may have absorbed some piecemeal); which remain pending; and what the spec's current section structure is. Without the audit, the redesign inquiry would have to discover the spec's current state during its own exploration step — more expensive, more error-prone, and structurally redundant since the discovery work is largely deterministic.

This audit produces a concrete inventory + 6 meaning-layer commitments + 5 drift observations + 2 predictions + a compact handoff package suitable for the redesign's `_branch.md` Synthesis Trigger input.

### 1. Current /innovate spec state vs diagnostic-series candidates

**Current spec section structure** (442 lines):

```
# Structural Innovation — A Thinking Discipline
## What Innovation Is
## Intuition and Direction
  ### Intuition and Mechanisms Are Complementary
  ### Practical Implication
## The Seed (7 seed types)
## The Seven Mechanisms
  ### 1. Lens Shifting
  ### 2. Combination
    — Scope-fidelity caveat (inline)
    — Anti-pattern caution (inline)
  ### 3. Inversion
    — Refinement note: Depth check (system-level stopping criterion)
  ### 4. Constraint Manipulation
  ### 5. Absence Recognition (includes redesign-level question as last bullet)
  ### 6. Domain Transfer
  ### 7. Extrapolation
## The Process
  ### Phase 1: Seed
  ### Phase 2: Generate
  ### Phase 3: Test
    — Refinement note: Output disposition categories (ACTIONABLE / DEFERRED-with-revival-trigger / RESEARCH FRONTIER)
    — Assembly check
    — Refinement note: Axis coverage check
  ### Iteration
## Coverage Strategy
## Failure Modes (6 modes)
## Summary
## Mechanism Coverage (Telemetry)
```

The spec uses descriptive heading names (`## Top-level`, `### Sub-sections`) and `*Refinement note*` (italics) + bold paragraph titles for inline rules. **No §-numbered sections exist anywhere in the spec.** The synthesis's references to "§8" and "§9" are internal-only diagnostic-series scaffolding for proposed-but-not-committed sections, not labels in the spec body.

**Per-candidate status table** (across ~30 distinct candidates):

| Candidate | Source | Status | Spec location |
|---|---|---|---|
| B1 — Inversion depth-check stopping criterion | Pair 9 | **COMMITTED** | lines 155-167 (Depth check refinement note at Inversion mechanism; critique-softened from "MUST" to "consider inverting again") |
| B2 — CM both-direction explicit | Pair 9 | **PENDING** | — |
| B3 — AR redesign-level explicit | Pair 9 | **PARTIAL** | line 200 (the redesign-level question is the last AR bullet; "BOTH levels MANDATORY per invocation or flag" framing absent) |
| B4 — Axis Coverage Check explicit invocation | Pair 9 | **PARTIAL-COMMITTED** | line 308 (composite with Pair 7's axis-coverage check refinement; "explicitly identify the candidate-space axes" wording present) |
| V1 — per-row mechanism-trace at Assembly | Pair 1 | **PENDING** | — |
| V2 — Re-test trigger disposition category | Pair 1 | **PARTIAL** | lines 296-300 (3 of 4 disposition categories present; DEFERRED-with-revival-trigger subsumes some V2 territory operationally). **Note on the structural distinction:** DEFERRED-with-revival-trigger frames "revisit a deferred candidate when conditions change"; V2's Re-test trigger frames "re-run the same test under new conditions." These are operationally distinct — the former preserves a candidate for later, the latter reruns evaluation — so V2's 4th category is not duplicative with the existing 3. |
| V3 — Artifact-grounding 6th conditional test | Pair 1 | **PENDING** | — |
| V4 — Domain Transfer source-domain guard | Pair 1 | **PENDING** | — |
| W1-Pair2 — V3 refined wording + N=2 evidence | Pair 2 | **PENDING** | — (depends on V3; PENDING) |
| W2 — Inversion multi-axis depth-check | Pair 2 | **PENDING** | — |
| W3 — Mechanism Independence shared-input-detection | Pair 2 | **PENDING** | — |
| W1-Pair4 — AR bidirectional redesign-level | Pair 4 | **PARTIAL** | line 200 (bidirectional in spirit; explicit "examples-not-list" framing absent) |
| Q1-Pair5 — Definitional clarification at Inversion | Pair 5 | **PENDING** | — |
| Q2-Pair5 — Meta-decision-piece criterion | Pair 5 | **PENDING** | — |
| Q3-Pair5 — Piece-level Inversion rule | Pair 5 | **PENDING** | — |
| Q4-Pair5 — Failure-mode prevention refinements | Pair 5 | **PENDING** | — |
| Q5-Pair5 — Telemetry extension | Pair 5 | **PARTIAL** | line 427 (Mechanism Coverage Telemetry section exists; specific mechanism-by-piece content absent) |
| Q1-Pair7 — §8 Intervention-Shape Vocabulary | Pair 7 | **PENDING** | — |
| Q2-Pair7 — Q2 fifth property | Pair 7 | **PENDING** | — (depends on Pair 5 Q2; PENDING) |
| Q3-Pair7 — Q3 axis-of-Inversion specification | Pair 7 | **PENDING** | — (depends on Pair 5 Q3; PENDING) |
| Q4-Pair7 — Q5 axis-distribution telemetry | Pair 7 | **PENDING** | — |
| Axis-coverage check refinement | Pair 7 | **COMMITTED** | line 308 (verbatim match for "Single-axis candidate sets often arise from a frame inherited from upstream pipeline stages; the axis-coverage check counters that bias") |
| ADD-MULTI-AXIS-REQUIREMENT | Pair 7 | **DEFERRED** | — (per 19-00 Path C; preserved frontier with strict T4 + wrong-axis-Inversion revival trigger) |
| §8.B — Methodology-Mode Vocabulary | Pair 8 | **PENDING** | — |
| §9 — Seed-time methodology-mode consideration | Pair 8 | **PENDING** | — (grep verification: searches for "methodology-mode", "methodology", and "mode" specifically related to /innovate's seed-time rule returned no hits — §9 confirmed PENDING; the override pattern `Methodology-mode-alternative-marked-inapplicable` is internal-only convention) |
| A1.predicate | A1 / 23-00 | **PENDING** | — |
| A1.orchestration | A1 / 23-00 | **PENDING** | — |
| A1.override | A1 / 23-00 | **PENDING** | — |
| A1.evaluation_gate | A1 / 23-00 | **PENDING** | — |
| A1.integration_map | A1 / 23-00 | **PENDING** | — |

**Status tally:** 2 COMMITTED + 1 PARTIAL-COMMITTED + 4 PARTIAL (B3; V2; W1-Pair4; Q5-Pair5) + 23 PENDING + 1 DEFERRED. **Approximately 10% of candidates committed** — this is a QUALITATIVE estimate; the percentage compares "committed-or-partial" to "total candidate count" at coarse granularity. Precise quantitative coverage cannot be assigned without finer per-candidate weighting (e.g., a partial commit at the right spec location may be more functionally complete than a pending commit elsewhere). The qualitative reading is: the /innovate spec is at approximately a pre-composed-v3 state; the diagnostic-series candidates have NOT been propagated in any cumulative way.

### 2. Six meaning-layer commitments + self-application verification

**Commitment 1 — Per-PARTIAL adjudication.** PARTIAL is a workspace shorthand from the status table; it is NOT a single-decision category. The 5 PARTIAL candidates have structurally distinct operational meanings and warrant per-candidate adjudication:

| Candidate | Adjudication | Reasoning |
|---|---|---|
| B3 (AR redesign-level question present, not MANDATORY) | **UPGRADE** | The original Pair 9 finding observed AR was applied only at patch-level by default. Explicit "BOTH levels MANDATORY per invocation, or explicit flag" framing addresses the failure pattern; load-bearing. |
| V2 (3 of 4 disposition categories) | **UPGRADE** | Re-test trigger as a 4th category is structurally distinct from DEFERRED-with-revival-trigger (re-running test vs revisiting candidate); the exact wording for the new category is deferred to the redesign's sensemaking step. |
| W1-Pair4 (AR bidirectional in spirit) | **UPGRADE** | Explicit "examples-not-list" + bidirectional framing addresses the over-anchoring bias Pair 4 surfaced. |
| Q5-Pair5 (Telemetry section exists; specific content PENDING) | **UPGRADE-CONDITIONAL** | The Q5 axis-distribution telemetry depends on whether Pair 5 Q2-Q3 piece-level rules are committed. Path C commits Q2-Q3; therefore Q5 upgrade fires. If hypothetically Q2-Q3 were NOT committed, Q5 upgrade wouldn't fire. |
| B4 / Pair 7 axis-coverage check (composite at line 308) | **LEAVE** | The current committed text adequately captures both candidates' substance. No upgrade needed. |

**Commitment 2 — Composed-v3 reconciliation: the redesign's commit scope.** Inherits Commitment 1's PARTIAL upgrade decisions. Operationalizes 19-00's Path C into a concrete commit-list:

POSITIVE scope (the downstream /innovate redesign inquiry commits):
- §8 (Pair 7 Q1) → Intervention-Shape Vocabulary, integrated as Phase 2 Generate refinement note.
- §8.B (Pair 8 Q1) → Methodology-Mode Vocabulary extension of §8.
- §9 (Pair 8 Q2) → Methodology-Mode Consideration rule, integrated as Phase 1 Seed refinement note.
- Pair 5 Q1-Q5 (5 pieces: Q1 Inversion definitional clarification; Q2 meta-decision-piece criterion; Q3 piece-level Inversion rule; Q4 failure-mode prevention; Q5 telemetry).
- Pair 7's extensions (Q2-Pair7 fifth property modifies Pair 5 Q2; Q3-Pair7 modifies Pair 5 Q3 — the "Q3-extension"; Q4-Pair7 modifies Pair 5 Q5).
- A1's 5 components from 23-00 (predicate + orchestration + override + evaluation gate + integration map), positioned per Commitment 5.
- Per-axis candidates outside v3: B2 (PENDING; CM both-direction); B3 (PARTIAL → UPGRADE per Commitment 1); V1 (PENDING; per-row mechanism-trace); V3+W1-Pair2 (PENDING; 6th conditional test co-published); V4 (PENDING; Domain Transfer source-domain guard); W2 (PENDING; Inversion multi-axis depth-check); W3 (PENDING; Mechanism Independence shared-input-detection); W1-Pair4 (PARTIAL → UPGRADE per Commitment 1).
- V2 (PARTIAL → UPGRADE per Commitment 1; 4th disposition category).

Total POSITIVE scope: approximately 26 distinct items.

NEGATIVE scope (the redesign inquiry explicitly does NOT commit):
- ADD-MULTI-AXIS-REQUIREMENT — deferred per 19-00 Path C; preserved frontier with strict T4 + wrong-axis-Inversion revival trigger.
- Layer-3 §9 compliance-criterion strengthening — research frontier per Pair 12's note; commit when N=5 TRIGGER drives empirical investigation (see Commitment 4).
- Strategy E formalization — procedural insight at the inquiry-protocol level, not /innovate spec content (see Drift 5).
- Already-committed items (B1 depth-check; Pair 7 axis-coverage check) — no edit needed.

**Commitment 3 — §-numbering convention.** DROP §-numbering in the /innovate spec body. The spec uses descriptive heading names + refinement-note conventions; introducing §8, §9 labels would create style inconsistency with the rest of the spec (cross-reference Drift 3 below). Cross-finding traceability is PRESERVED via:
- Commit messages on the redesign's spec edits (e.g., "Adds Intervention-Shape Vocabulary refinement note at Phase 2 Generate (implements Pair 7's §8 from diagnostic series)").
- Design-history file at `docs/discipline_design_history/for_innovate.md` (per the canonical-protocol-location convention), recording the §-label-to-spec-location mapping. **Action:** if this file does not yet exist, the redesign inquiry creates it at first commit; the audit's Next Actions section flags this.

Spec-body integration uses existing patterns: §8 + §8.B → refinement note "Intervention-Shape Vocabulary" at Phase 2 Generate; §9 → refinement note "Methodology-Mode Consideration" at Phase 1 Seed; Pair 5 Q2 + Q3 → new sub-sections "Meta-Decision-Piece Criterion" + "Piece-Level Inversion Rule" at Phase 2 Generate.

**Commitment 4 — Layer-3 §9 commit timing.** §9 is committed with the STANDARD compliance criterion ("specific reason required; not empty"; matches the pattern applied at Pair 8, Pair 12, 22-00 synthesis, A1 23-00 inquiry). The compliance-criterion strengthening (currently flagged as research frontier per Pair 12's note) is NOT committed preemptively — calibration discipline forbids speculative design without empirical justification (cross-reference Drift 4).

When §9 enters the spec at commit time, the existing 4 override records become "in-spec at N=4 MONITORING." The redesign inquiry's Innovation step will likely fire Property (v) and record the 5th consecutive override (the N=5 TRIGGER threshold per Pair 12's note); a subsequent inquiry investigates compliance-criterion strengthening with empirical grounding (cross-reference Prediction 2 in section 4 below).

This commit-timing decision is **structurally important**: short-circuiting the trigger via preemptive strengthening would undermine the trigger mechanism's design — the trigger exists specifically to drive empirically-grounded strengthening when formulaicness becomes observable. Letting the trigger fire preserves the mechanism's integrity.

**Commitment 5 — A1 positioning.** A1's spec sub-section is committed as a new heading **"### Inherited Frame Audit"** between "### Phase 2: Generate" and "### Phase 3: Test" in the /innovate spec body. The title is descriptive (not phase-numbered); the alternative "### Phase 2.5: Inherited Frame Audit" was rejected because half-numbered phases break the spec's integer-numbering convention.

**Disambiguation of position:** the heading alone could be misread as part of Phase 2 or part of Phase 3. To disambiguate, the sub-section's opening sentence states explicitly: "Fires after Phase 2 Generate completes; precedes Phase 3 Test." The combination of heading position (between the two phase headings in the file) + the opening-sentence framing makes the boundary location unambiguous to careful readers. The 5 components from 23-00 (predicate + orchestration + override + evaluation gate + integration map) compose the sub-section's body.

This positioning matches A1's 23-00 design intent (operation at phase boundary, not within either phase) while preserving the spec's existing heading conventions.

**Commitment 6 — Audit's Layer-3 self-application: TRIVIALLY SATISFIED.** Property (v) does NOT fire at any of Q1-Q5 in this inquiry's Innovation step. Verification per piece:
- Q1: documents the spec's current state — no spec edit.
- Q2: commits decisions about a DIFFERENT inquiry's commit-scope (the redesign) — no spec edit in this inquiry.
- Q3: documents drift observations — no spec edit.
- Q4: documents forward predictions — no spec edit.
- Q5: compact summary for the redesign's input — no spec edit.

The Layer-3 override count REMAINS AT N=4 (MONITORING) for this inquiry. The N=5 TRIGGER threshold is NOT reached by this audit. Matches the favorable structural outcome of the 19-00 inquiry — documentation-seed inquiries structurally prevent Layer-3 advancement.

### 3. Five drift observations

**These are OBSERVATIONS about the current /innovate spec state, not action items.** They document items the audit surfaced that the redesign inquiry should be aware of but doesn't have to fix as primary work. Items requiring action are in section 2 (the audit's commitments) and in Next Actions below.

**Drift 1 — Combination's scope-fidelity caveat doesn't trace to the 8 in-scope diagnostics.** The Combination mechanism (lines 117-141) contains a "Scope-fidelity caveat" (lines 126-128) and an "Anti-pattern caution" (line 137) addressing scope misalignment when generic-scope inquiries draw from current context. Neither piece traces to any of the 8 in-scope LOOP_DIAGNOSE findings. The wording style suggests an earlier pre-diagnostic-series inquiry. This is stable existing content; the redesign should leave it alone but be aware it exists when committing new mechanism-specific refinement notes (to avoid wording conflicts).

**Drift 2 — Output disposition categories partially absorb Pair 1's V2.** Phase 3 Test's "Output disposition categories" refinement note (lines 294-302) lists three categories: ACTIONABLE; DEFERRED-with-revival-trigger; RESEARCH FRONTIER. Pair 1's V2 proposed "Re-test trigger" as a 4th category. The current DEFERRED-with-revival-trigger subsumes some of V2's operational territory, but the structural distinction (revisit deferred candidate vs rerun the test) makes V2's category genuinely distinct — the redesign will (per Commitment 1) UPGRADE V2 to a 4th explicit category.

**Drift 3 — Spec has NO §-numbered sections; "§8, §9" are internal-only.** The synthesis at 22-00 and the Pair 7 + Pair 8 diagnostics reference "§8 Intervention-Shape Vocabulary" and "§9 seed-time methodology-mode consideration rule" as if they exist in the spec. The spec uses descriptive heading names; no § anywhere. This observation directly motivates Commitment 3 (DROP §-numbering in the spec body; preserve traceability via commit messages + design-history file).

**Drift 4 — Layer-3 §9 override pattern applied 4× against a rule NOT in the spec.** The override pattern `Methodology-mode-alternative-marked-inapplicable: <reason>` has been recorded at Pair 8, Pair 12, the 22-00 synthesis, and A1's 23-00 inquiry. The rule the overrides reference (§9) is not in the /innovate spec — it's an internal diagnostic-series convention. When §9 is committed in the redesign inquiry, the override count enters the spec at N=4 MONITORING. This observation directly informs Commitment 4 (Layer-3 commit timing) AND Prediction 2 (N=5 TRIGGER fires during redesign).

**Drift 5 — Strategy E is procedural insight, not spec text.** Pair 12's diagnostic produced Strategy E — the "no-extension" composition pattern where a LOOP_DIAGNOSE inquiry contributes value via validation + cumulative-evidence + composition-pattern-naming rather than spec edits. Strategy E operates at the inquiry-protocol level (a LOOP_DIAGNOSE methodology insight), NOT at the /innovate spec level. The redesign should NOT commit Strategy E to /innovate spec — category error. It belongs in the LOOP_DIAGNOSE protocol or inquiry-design documentation if anywhere.

**Acknowledgment of drift-completeness limits:** the audit prioritized drift observations material to the redesign's scope. Additional minor drifts may exist (cross-section terminology consistency; undocumented decisions like the Phase 3 5-test count; etc.) that the redesign inquiry's own exploration step would surface if relevant.

### 4. Two predictions for the downstream redesign inquiry

**These are PREDICTIONS — conditional forecasts, not guarantees.** Each prediction is grounded in this audit's reasoning + the redesign inquiry's expected trajectory, but actual outcomes depend on the redesign's own discipline decisions.

**Prediction 1 — Staging suggestion: the redesign could decompose into 2-3 sub-inquiries.** The redesign's commit scope (per Commitment 2) is approximately 26 items + A1's 5 components. A single /MVL+ inquiry could commit all 30+ items in one pass, but its Decomposition + Innovation steps would be substantial. An alternative is to stage the redesign into 2-3 sub-inquiries:

- **Sub-inquiry A** — A1 + Inherited Frame Audit cross-references (commits the A1 sub-section + adjusts any existing spec text that should reference Inherited Frame Audit).
- **Sub-inquiry B** — Piece-level rules + §8 + §9 derivatives (commits Pair 5 Q1-Q5 + Pair 7's extensions + §8/§8.B Intervention-Shape Vocabulary + §9 Methodology-Mode Consideration).
- **Sub-inquiry C** — Mechanism-specific refinement notes + telemetry (commits B2, B3-upgrade, V1, V3+W1-Pair2, V4, W2, W3, W1-Pair4-upgrade, V2-upgrade, Q5-axis-distribution-extension).

**Caveat:** this is a SUGGESTION, not a pre-commitment. The redesign inquiry's own framing decides whether to stage or commit in one pass.

**Prediction 2 — Layer-3 N=5 TRIGGER fires during the redesign's Innovation step.** Stated as a conditional:

**IF** (a) the redesign's Innovation step produces direct /innovate spec edits (Production-task seed; **expected** — this IS the redesign's primary task) **AND** (b) an override is needed in the redesign's Innovation step (**uncertain** — depends on whether the redesign re-litigates a Sensemaking-adjudicated decision OR encounters a methodology-mode-alternative consideration)

**THEN** the recorded override is the 5th consecutive (Pair 8 → Pair 12 → 22-00 → A1 23-00 → redesign = 5), reaching the N=5 TRIGGER threshold per Pair 12's note for explicit follow-on investigation of override compliance-criterion strengthening.

**Predicted, not guaranteed.** Condition (b) is genuinely uncertain — if the redesign's Innovation step does NOT need an override, the count stays at N=4. The redesign's CONCLUDE step should observe + flag the Layer-3 status either way; a subsequent inquiry investigates compliance-criterion strengthening when (and only when) the trigger fires.

---

## Inherited Commitments Re-test

This audit synthesized ~12 priors. Each prior's commitments are RE-TESTED via the status table (Q1) + commitment adjudications (Q2). The re-test outcome is essentially the audit's primary deliverable.

**Prior 1: /innovate spec at `cognitive_harness/innovate/references/innovate.md`** (criterion artifact).
- **Commitment:** the spec defines /innovate at its current state (7 mechanisms; 3-phase process; 6 failure modes; refinement notes).
- **Source:** the file itself.
- **Re-test status:** RE-TESTED.
- **Evidence:** the audit's Q1 mapped the spec's section structure at sub-level resolution; ~10% of diagnostic-series candidates committed; rest pending. The spec stands as the criterion artifact.

**Prior 2: 22-00 synthesis** (`devdocs/inquiries/2026-05-18_22-00__innovate_improvement_synthesis_from_recent_diagnostics/finding.md`).
- **Commitment:** the 8 diagnostics produce 3 cores + 7 seeds + 2 frontier-promotion calls; composed-v3 has 8 effective pieces; the redesign inquiry will commit the candidates.
- **Re-test status:** RE-TESTED with refinement.
- **Evidence:** the audit verified composed-v3 is INTERNAL to the diagnostic series — NOT propagated to the spec. The synthesis's "§8, §9" references are internal-only. The 2 frontier-promotion calls are now resolved (A1 via 23-00; ADD-MULTI-AXIS via 19-00).

**Prior 3: 23-00 A1 design** (`devdocs/inquiries/2026-05-18_23-00__inherited_frame_audit_branch_experiment_design/finding.md`).
- **Commitment:** A1's 5 components (predicate + orchestration + override + evaluation gate + integration map) are ready for commit; positioned between Phase 2 and Phase 3.
- **Re-test status:** RE-TESTED + CONFIRMED.
- **Evidence:** the audit's Q1 verified A1's 5 components are all PENDING in current spec. Commitment 5 commits the positioning as "### Inherited Frame Audit" between Phase 2 Generate and Phase 3 Test.

**Prior 4: 19-00 ADD-MULTI-AXIS adjudication** (`devdocs/inquiries/2026-05-19_00-00__add_multi_axis_requirement_design_and_promotion_gate/finding.md`).
- **Commitment:** Path C — commit per-axis-rule mesh; defer ADD-MULTI-AXIS with strict T4 + wrong-axis-Inversion revival trigger.
- **Re-test status:** RE-TESTED + CONFIRMED.
- **Evidence:** the audit's Commitment 2 operationalizes Path C into a concrete commit-list (~26 items POSITIVE; ADD-MULTI-AXIS NEGATIVE). Path C is committed.

**Prior 5: Pair 9 (`2026-05-18_09-20`)** — B1, B2, B3, B4 candidates.
- **Re-test status:** RE-TESTED.
- **Evidence:** B1 COMMITTED at lines 155-167 (critique-softened); B2 PENDING; B3 PARTIAL (UPGRADE per Commitment 1); B4 PARTIAL-COMMITTED at line 308 (composite with Pair 7).

**Prior 6: Pair 1 (`2026-05-18_14-00`)** — V1, V2, V3, V4 candidates.
- **Re-test status:** RE-TESTED.
- **Evidence:** V1 PENDING; V2 PARTIAL (UPGRADE per Commitment 1); V3 PENDING; V4 PENDING.

**Prior 7: Pair 2 (`2026-05-18_16-30`)** — W1-Pair2, W2, W3 candidates.
- **Re-test status:** RE-TESTED.
- **Evidence:** W1-Pair2 PENDING (depends on V3); W2 PENDING; W3 PENDING.

**Prior 8: Pair 4 (`2026-05-18_18-00`)** — W1-Pair4 candidate.
- **Re-test status:** RE-TESTED.
- **Evidence:** W1-Pair4 PARTIAL (UPGRADE per Commitment 1).

**Prior 9: Pair 5** (`2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo`) — Q1-Q5 candidates.
- **Re-test status:** RE-TESTED.
- **Evidence:** All Q1-Q5 PENDING (Q5 PARTIAL by Telemetry section presence but specific content PENDING).

**Prior 10: Pair 7** (`2026-05-18_loop_diagnose__innovation_produced_addtest_when_repair_correct`) — §8 + Q-extensions + ADD-MULTI-AXIS + axis-coverage check.
- **Re-test status:** RE-TESTED.
- **Evidence:** Q1-Pair7 (§8 vocabulary) PENDING; Q2-Q4 PENDING; ADD-MULTI-AXIS DEFERRED per 19-00; axis-coverage check refinement COMMITTED at line 308.

**Prior 11: Pair 8** (`2026-05-18_loop_diagnose__innovation_missed_contrarian_rethink_methodology_mode`) — §8.B + §9 candidates.
- **Re-test status:** RE-TESTED.
- **Evidence:** §8.B PENDING; §9 PENDING (verified via broader-grep — no methodology-mode rule content in spec).

**Prior 12: Pair 12** (`2026-05-18_loop_diagnose__innovation_missed_multivalue_edgecase_probe`) — Strategy E + 0 candidates.
- **Re-test status:** RE-TESTED.
- **Evidence:** Strategy E is procedural insight (Drift 5); 0 spec candidates contributed (no candidate to commit).

**Summary:** 12 priors. All RE-TESTED. 0 INHERITED-WITHOUT-RE-TEST. The audit's primary work IS the re-test.

---

## Next Actions

### MUST

- **What:** Initiate the downstream /innovate redesign inquiry committing the ~26 items per Commitment 2's POSITIVE scope.
- **Who:** The user via a new /MVL+ inquiry; the inquiry's `_branch.md` Synthesis Trigger section can use the TLDR bullet list at the top of this finding as compact input.
- **Gate:** Authorization-bound (user starts the inquiry when ready). The 22-00 synthesis surgical update from 19-00 should be applied first (already done) so the redesign reads the corrected synthesis.
- **Why:** CORE 1 + CORE 2 implementation in the /innovate spec is unblocked by this audit's inventory + commitments. The redesign is the actor that commits the spec edits.

- **What:** Create the design-history file at `docs/discipline_design_history/for_innovate.md` if it does not yet exist; record the §-label-to-spec-location mapping (Pair 7's §8 → Intervention-Shape Vocabulary refinement note at Phase 2 Generate; Pair 8's §9 → Methodology-Mode Consideration refinement note at Phase 1 Seed; etc.) as part of the redesign's commit work.
- **Who:** The downstream /innovate redesign inquiry at first commit.
- **Gate:** Condition-bound — at the redesign inquiry's CONCLUDE step.
- **Why:** Preserves cross-finding traceability for the §-numbering drop (per Commitment 3). Without this file, future readers of the synthesis at 22-00 won't have a place to look up §-label-to-spec-location mappings.

### COULD

- **What:** Stage the redesign as 2-3 sub-inquiries per Prediction 1 (sub-inquiry A: A1; sub-inquiry B: piece-level rules + §8 + §9; sub-inquiry C: mechanism refinement notes + telemetry).
- **Who:** The user's framing decision at redesign-inquiry creation time.
- **Gate:** Condition-bound — at redesign-inquiry framing.
- **Why:** Staging preserves tractability + lets each sub-inquiry's Layer-3 self-application be assessed independently. Single-pass preserves coherence of cross-references. Either is structurally valid.
- **Depends-on:** MUST item "downstream /innovate redesign inquiry." This COULD is GATED — the staging decision is made when the redesign starts.

- **What:** When the Layer-3 N=5 TRIGGER fires (per Prediction 2; conditional on the redesign's Innovation step recording the 5th consecutive override), initiate a follow-on inquiry investigating override compliance-criterion strengthening.
- **Who:** A future spec-evolution inquiry triggered by the redesign's CONCLUDE flagging the N=5 status.
- **Gate:** Observable — fires when the redesign records an override that brings the consecutive-override count to 5.
- **Why:** Pair 12's note specifies N=5 as the threshold for explicit follow-on investigation. The strengthening would address the formulaicness risk in the override compliance criterion.
- **Depends-on:** MUST item "downstream /innovate redesign inquiry" AND the conditional firing of the override. OVERRIDE: COULD is genuinely conditional; cannot be acted on until the trigger fires.

### DEFERRED

- **What:** Promote ADD-MULTI-AXIS-REQUIREMENT to ACTIONABLE (commit spec sub-section text).
- **Gate:** Condition-bound — per 19-00 Path C's strict revival trigger (3+ future T4 cases at meta-decision pieces firing properties iv/v where single-axis specification proves insufficient on wrong-axis-Inversion failures; optionally observed loop-back-skip pattern at axis-coverage check).
- **Why (if revived):** Promotion would consolidate the per-axis-rule mesh under a single meta-rule at generation-time. Inherits this audit's status table + 19-00's Path C as input.

- **What:** Audit other discipline specs (sense-making, decompose, td-critique, navigation) using the same template as this audit.
- **Gate:** Observable — when other disciplines accumulate diagnostic-series commitments that haven't been audited, OR when the user decides to proactively audit them.
- **Why (if revived):** The audit template surfaced here (factual inventory + commitments + drift + predictions + handoff package) generalizes; flagging the reusable pattern as a Research Frontier item.

---

## Reasoning

### Why an audit was the right intermediate step

The user asked: "is the path to update /innovate clear?" The answer was: the meaning-layer is clear (A1 ready; per-axis rules enumerated; Path C committed; CORE 3 has a user-decision-point), but two execution-layer gaps remained — (1) what's already in spec vs pending; (2) how candidates map to current structure. Without these gaps closed, the redesign inquiry would do duplicate discovery work. An audit cleanly closes both gaps; the redesign then has concrete inputs.

The alternative (skip audit; let redesign discover the spec state in its own exploration) is structurally valid but more expensive — the redesign would do audit work as part of its own exploration step, mixing factual inventory with design work and increasing the redesign's complexity.

### Why per-PARTIAL adjudication was necessary

The status table classified 5 candidates as PARTIAL. Without per-candidate adjudication, the redesign would face a category-level question ("upgrade PARTIAL? leave PARTIAL?") that has different correct answers per candidate. The audit's per-PARTIAL adjudication (Commitment 1) avoids this — each candidate's upgrade/leave decision is structurally grounded.

### Why §-numbering drop was structurally correct

Counter-argument considered: preserve §-numbering in spec for cross-reference traceability. Rejected because (1) the spec has no §-numbered sections anywhere; introducing § would create style inconsistency; (2) traceability is preserved via commit messages + design-history file without polluting the spec body. The structural integrity of the spec's heading conventions wins.

### Why Layer-3 trigger-driven was structurally correct

Counter-argument considered: preemptively strengthen the override compliance criterion before §9 commits. Rejected because (1) preemptive strengthening is speculative — Pair 12's research-frontier note recommends investigating, not committing; (2) the trigger mechanism's DESIGN is to fire when empirical evidence justifies investigation. Short-circuiting the trigger means the strengthening happens without empirical justification. Letting the trigger fire preserves the mechanism's empirical integrity.

### Why this audit doesn't advance Layer-3

Per Commitment 6: the audit's Innovation step articulates documentation (status table; commitments; drift; predictions; compact summary); none of Q1-Q5 propose direct /innovate spec edits. Property (v) doesn't fire. No override needed. Layer-3 count stays at N=4. Same favorable structural outcome as the 19-00 inquiry — documentation-seed inquiries structurally prevent Layer-3 advancement.

The N=5 TRIGGER is expected to fire from the downstream redesign inquiry (per Prediction 2), which IS a Production-task. The audit + 19-00 together represent 2 consecutive inquiries that did NOT advance the count despite the project's overall trajectory.

### Critique survivors and refinements

All 5 Q-pieces + Assembly SURVIVED critique on structural grounds. 7+1 wording-level REFINEs were flagged and incorporated into this finding:
- Q1 V2 PARTIAL clarifying note (in section 1 status table).
- Q1 §9 broader-grep verification (in section 1 status table for §9 row).
- Q2 V2 UPGRADE exact-wording-deferred (in Commitment 1 V2 row).
- Q2 design-history-file Next-Actions item (added to Next Actions MUST).
- Q2 A1 positioning opening-sentence framing (in Commitment 5).
- Q3 additional-minor-drifts closing note (in section 3 "Acknowledgment").
- Q4 Prediction 2 lead with conditional (in section 4 "IF...AND...THEN").
- Q5 TLDR bullet list at top of Finding Summary.

No KILLs. No structural rework.

---

## Open Questions

### Monitoring

- **Layer-3 §9 override count.** Currently N=4. The redesign inquiry's Innovation step is observable for whether it advances to N=5 (per Prediction 2). If it does, the COULD action (compliance-criterion strengthening) promotes to MUST.

- **Loop-back mechanism reliability** (inherited monitoring from 19-00). If empirical evidence shows the axis-coverage check at Phase 3 Test Assembly being skipped (loop-back not firing reliably), the 19-00 ADD-MULTI-AXIS revival trigger's optional secondary condition activates.

### Research Frontiers

- **Audit-template-as-reusable-pattern.** The audit's deliverable shape — factual inventory + commitments + drift + predictions + handoff package — generalizes as a template for future spec-state assessments of other discipline specs (sense-making, decompose, td-critique, navigation). A future inquiry could formalize this template as part of the LOOP_DIAGNOSE protocol or as a stand-alone audit protocol.

- **Override compliance-criterion strengthening** (per Pair 12's note; carried forward). Investigate whether the override pattern's compliance criterion ("specific reason required; not empty") should be strengthened (e.g., require non-template reasoning per case; require reference to NEW structural ground not used in prior overrides) before the count reaches N=5-6 with rote application erodes the intentional-friction purpose. Investigation activates when N=5 trigger fires.

### Refinement Triggers

- **If the redesign inquiry's exploration step surfaces additional drift observations the audit missed**, the audit's Q3 list can be supplemented in this finding's Open Questions section. The audit's Acknowledgment-of-drift-completeness-limits in section 3 anticipates this.

- **If the redesign inquiry encounters a candidate that should be in POSITIVE scope but isn't enumerated in Commitment 2**, the redesign should surface the discrepancy + decide explicitly whether to add it or document the omission. The audit's status table is the canonical list; deviations should be conscious.

- **If a 9th LOOP_DIAGNOSE diagnostic emerges before the redesign launches**, the audit's scope might need refresh — a new diagnostic's candidates could enter PENDING and need to be added to Commitment 2's POSITIVE scope.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
read current cognitive_harness/innovate/references/innovate.md against the
   8 diagnostics' candidates → list what's committed, what's pending, what the spec's current structure is
```

</details>
