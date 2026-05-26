# Branch: Comparative Evaluation — surfacing_spec.md vs current explore.md for MVL Loop Robustness

## Question

Comparing the **drafted surfacing spec** (`devdocs/inquiries/2026-05-22_07-31__structural_surfacing_spec_text_production/docarchive/surfacing_spec.md`) and the **current `/explore` runtime spec** (`cognitive_harness/explore/references/explore.md`), which one is more in line with the project's end goals (per `docs/desc.md`, `docs/thinking_space_dynamics.md`, `docs/autonomy_ladder.md`, `docs/evolving_quality_assetment_component.md`) and would more effectively make MVL loops more robust + reliable + less prone to errors when used as the upstream discipline?

## Goal

A comparative verdict the user can use to decide:
1. **Which spec to deploy** as the upstream discipline in MVL loops going forward — keep current `/explore`, replace with surfacing, run both in parallel (per-inquiry-discretion), or do something else.
2. **Why** — specifically grounded in the project's end-goal documents + the MVL-loop robustness criteria + the regression catalog at `docs/regression/desc.md`.
3. **What the trade-offs are** if either spec has dimensions where it's stronger vs the other (so the verdict acknowledges where neither dominates).
4. **What conditions might shift the verdict** (refinement triggers — e.g., if certain operational evidence emerges, the verdict re-opens).

The deliverable is a Finding with: a one-sentence verdict + the comparative analysis along committed dimensions + acknowledged biases (the surfacing spec was drafted in this session; the current /explore is established) + the trade-off map + the refinement triggers.

## Scope Check

**Question covers goal.** The 4 goal sub-asks all derive from the question's framing (which is better; why; trade-offs; refinement triggers).

**Specific-vs-pattern check.** The question targets the SPECIFIC two artifacts. The broader pattern — how to evaluate competing discipline specs against project end-goals in general — could emerge but is not the foreground. Specific commitment is the focus.

**Scope NOT widened to:**

- Re-deriving either spec's MEANING-layer commitments (settled in prior findings for surfacing; settled in `docs/discipline_design_history/for_explore.md` + prior inquiries for /explore).
- Designing a hybrid combining both — would be a separate STRUCTURAL inquiry if the verdict warrants it.
- The rename / coexist / migration decision — downstream of this verdict, user-discretion.
- The SKILL.md wrapper, install script, or deployment mechanics — operational, post-verdict.

## Bias Acknowledgment

This inquiry has TWO self-reference risks the disciplines must explicitly mitigate:

- **Risk A: I drafted surfacing_spec.md in the previous /MVL+ inquiry.** Comparing it to another artifact carries authorship bias (favoring my own work). The Critique discipline's "Self-Reference Collapse" failure mode is directly relevant.

- **Risk B: The current /explore.md is established + committed by prior project work.** The user's prior decisions to apply or not-apply changes are precedent; comparing against an established spec carries status-quo-bias risk.

**Mitigation:** Sensemaking will commit external-grounding evaluation criteria drawn from the project's end-goal documents (`docs/desc.md`, `docs/thinking_space_dynamics.md`, `docs/autonomy_ladder.md`, `docs/evolving_quality_assetment_component.md`, `docs/regression/desc.md`, `docs/desc.md`'s consciousness-gradient indicators) — NOT invented criteria. Critique will adversarially test the verdict + explicitly probe whether the verdict would survive if authored by a different agent or evaluated against a different baseline.

## Diagnostic Constraints

- **Read both specs in full** at the inquiry's start. Exploration must read both `surfacing_spec.md` and `cognitive_harness/explore/references/explore.md` end-to-end to map their actual content (not summaries).

- **Use external grounding for evaluation criteria.** Criteria must come from project end-goal documents, not from either spec being evaluated (which would be circular). Specifically: pull criteria from `docs/desc.md` (consciousness-gradient indicators + Baldwin-cycle + self-improvement rate), `docs/thinking_space_dynamics.md` (three-layer quality awareness), `docs/autonomy_ladder.md` (meta-loop autonomy ladder), `docs/evolving_quality_assetment_component.md` (Predictive RC + Retrospective RC), `docs/regression/desc.md` (23-symptom catalog), `docs/desc.md` (autonomous consciousness goal).

- **Decompose "MVL loop robustness" into testable sub-dimensions.** "Robust + reliable + less prone to errors" is multi-dimensional. Decomposition should partition this into specific testable claims (e.g., "the upstream discipline produces a well-defined hand-off to downstream so downstream can't operate on incomplete inputs" is one sub-dimension; "the upstream discipline self-signals coverage gaps so downstream knows what's missing" is another).

- **Compare on dimensions, not on totality.** Each dimension yields a verdict (A wins / B wins / tie / both fail). Aggregate verdict emerges from the dimension-by-dimension comparison.

- **Render the aggregate verdict honestly.** If one spec dominates on most dimensions, name it. If the trade-offs are dimension-specific (A wins on X; B wins on Y), report that and let the user decide based on which dimension matters most for their inquiry.

- **Probe the self-reference + status-quo biases explicitly at Critique.** Critique must ask: "Would this verdict survive if a different agent (with no authorship attachment) evaluated the same artifacts against the same criteria?" + "Would this verdict survive if the current /explore had a different deployment history (e.g., not yet deployed in any inquiry)?"

- **Anti-coupling vigilance.** Don't let surfacing's vocabulary biases (workspace / artifact / Trace / Summary) tilt the comparison; let explore's vocabulary biases (labels-vs-anchors / scan-signal-probe / confidence-tagged map) tilt either. Compare at the operation level, not the vocabulary level.

## Relationships

- **EVALUATES (the two artifacts being compared):**
  - `devdocs/inquiries/2026-05-22_07-31__structural_surfacing_spec_text_production/docarchive/surfacing_spec.md` — Surfacing spec (drafted this session)
  - `cognitive_harness/explore/references/explore.md` — Current /explore runtime spec (established)

- **CONTINUES FROM (prior inquiry chain providing context, not synthesis inputs):**
  - `devdocs/inquiries/2026-05-22_01-25__meaning_surfacing_pure_discipline_clean_design/finding.md` — surfacing's pure-design MEANING.
  - `devdocs/inquiries/2026-05-22_02-13__meaning_surfacing_output_correction_traverse_load_vs_inventory/finding.md` — surfacing's output-correction MEANING.
  - `devdocs/inquiries/2026-05-22_07-31__structural_surfacing_spec_text_production/finding.md` — surfacing's STRUCTURAL spec text production.

- **RELATED (project end-goal documents serving as external-grounding evaluation criteria):**
  - `docs/desc.md` — autonomous consciousness goal + Baldwin cycle + self-improvement rate + consciousness-gradient indicators
  - `docs/thinking_space_dynamics.md` — three-layer quality awareness + typed primitive set
  - `docs/autonomy_ladder.md` — meta-loop autonomy ladder
  - `docs/evolving_quality_assetment_component.md` — Predictive RC + Retrospective RC architecture
  - `docs/regression/desc.md` — 23-symptom regression catalog + 5-pattern diagnostics
  - `docs/discipline_design_history/for_explore.md` — institutional memory of /explore's evolution
  - `docs/discipline_taxonomy.md` — 4-category taxonomy

- **POTENTIAL DOWNSTREAM:**
  - User-discretion: deploy / rename / coexist / migrate decision.
  - Possible hybrid-design STRUCTURAL inquiry if the verdict surfaces a hybrid as preferred.
  - Possible PROCESS inquiry on operationalizing whichever spec wins (e.g., the 6 inline PROCESS commitments in surfacing if it wins; or operational refinements for /explore if it wins).
