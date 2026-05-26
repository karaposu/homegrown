---
status: active
model: claude-opus-4-7[1m]
effort: max
impacted_by:
  - devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md
  - devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md
  - devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md
  - devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md
  - devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md
  - devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md
---
# Finding: 10 frontier questions to resolve (or consciously defer) before authoring routeman's SKILL.md

> **✅ Resolution log**
>
> **Question 1 (autonomy-level detection) — RESOLVED-WITH-DESIGN 2026-05-24 00:40** by `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md`. The register file (`docs/autonomy_level.md`), the read protocol (with 3-tier failure-handling), and the write protocol (human-only first ship + system-warning hook + L2+ system-set deferred) are designed. See Q1 below for the resolution block + the preserved pre-resolution content.
>
> **Question 3 (adaptive-guidance generation mechanism + WHY-anchor source) — RESOLVED-WITH-DESIGN 2026-05-24 01:00** by `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md`. Two-stage anchor-then-refine mechanism: Stage 1 deterministically identifies WHY-anchors per Route via per-movement-type priority chain with graceful fallback; Stage 2 LLM-judgment refines pointer text + WHY text with file-path citation. Audit substrate (A1+A3) makes three LAYER-2 modes (Prescriptive-Without-Cycle-Context + Rename-Renders-Itself-Cosmetic + filler-meta-reasoning from 18-58) DETECTABLE by construction. See Q3 below for the resolution block + preserved pre-resolution content.
>
> **Question 7 (16-type taxonomy structural completeness) — PARTIALLY-RESOLVED 2026-05-24 01:30** by `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md`. The user re-framed Q7 from completeness (original Tier-2 framing) to categorization+naming, accepting the 16 types as content. The resolution committed a hybrid categorization: **primary axis Movement Family** with 3 action-noun groups (**Progression Moves** 6 types, **Re-orientation Moves** 5 types, **Coordination Moves** 5 types) inherited from design memo's implicit semicolon-separated 6-5-5 grouping; **6 secondary attributes per type** (direction, intent, autonomy_readiness_tier, auto_class, scope, has_sub_actions); per-type coordinate table preserving all 16 types unchanged (REVISIT counts as 1 with `has_sub_actions: true`; TERMINATE in Progression Family as endpoint). The categorization sub-aspect is resolved; the **completeness sub-aspect remains Tier-2 watch-list** per the original Q7 longitudinal-observation disposition (revival trigger: if a real-world next-move appears that doesn't fit any of the 16 types over the next 20-30 inquiries).
>
> **Question 10 (INVESTIGATE FRONTIER + REVISIT emission policy pre-Baldwin-cycle calibration maturity) — RESOLVED-WITH-DESIGN 2026-05-24 02:00** by `devdocs/inquiries/2026-05-24_02-00__investigate_frontier_revisit_emission_policy/finding.md`. The user explicitly invoked "dive deep + list options + pluses/minuses + full capacity"; the full /MVL2+ pipeline ran on the question. The committed policy: **Option 13 (Hybrid) — confidence-graduated emission + per-route-type-split.** INVESTIGATE FRONTIER always emits with a D1 confidence label (LOW/MED/HIGH at per-discipline-N thresholds 20/30 matching the desc.md Baldwin gate); REVISIT emits when ≥3 prior cycles exist (a **natural-availability filter**, distinguished from identity-violating gating because REVISIT's three sub-actions are structurally undefined at zero prior cycles — mechanism-honesty about operands, not policy-judgment about whether to emit). The **per-discipline-N source is deferred** to SKILL.md authoring with a **first-ship LOW-fallback** (all emissions LOW until the source ships; the D1 variance is dormant but the label provides interpretation context). Central reframing: the source-question's **pollution framing was tested via direct read of `docs/desc.md`** and found currently overstated — Baldwin's named seed source is /intuit Phase β+ hunches calibrated against Retrospective RC delta, NOT routeman emissions. **Defensive labeling preserved as zero-cost future-proof insurance** (the per-route confidence field already exists per the design memo). **Downstream-decides-via-metadata** pattern: routeman labels; each consumer (human Selector now; Baldwin / /intuit / system Selector when shipped) applies its own filtering. **Enumerate-all identity preserved** (no movement type gated). Includes the 15-option pros/cons table (the user's explicit deliverable), an 11-row Inherited Commitments Re-test (with test-methodology note), and 7 open follow-ups: per-discipline-N source decision (revival at SKILL.md authoring); Baldwin spec coordination (revival when Baldwin's spec is being written; sequencing clause if Baldwin ships before the source is settled); per-sub-action REVISIT differentiation (observable revival); routeman-self-N as a second confidence axis (blocked on LAYER-2 audit infrastructure = Q4); REVISIT ≥3-prior-cycles threshold calibration (observable revival); generalization to other calibration-sensitive types (research frontier); per-consumer label-utility audit (new follow-up added by Critique; revival when per-discipline-N source ships and labels begin to vary). Emergent insight: **two-epoch framing** — first-ship epoch (fallback active, variance dormant) vs post-source epoch (variance active).
>
> **Question 4 (LAYER-2 audit infrastructure) — RESOLVED-WITH-DESIGN 2026-05-24 06:00** by `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md`. The user invoked /MVLw on Q4's mechanism dive-deep with explicit /reflect exclusion. The full pipeline (Su → S → D → I → C) ran at full depth on the 4 sub-questions (runner, cadence, threshold-calibration, false-depth-substrate). The committed design: **(a) Runner** — new protocol file `cognitive_harness/protocols/layer2_audit.md`, invoked by the runner at routeman invocation-end (L1+) OR by the human (L0 manual invocation supplemented by runner pointer); self-audit + runner-level rejected (conflate concerns); substrate-self-audit-at-consumer-side preserved as L2+ extension hook for system Selector. **(b) Cadence** — two-layer (fixed-interval gating at every routeman invocation-end + per-mode event-triggered firing inside); A1+A3 modes fire per-invocation, Calibration-Drift fires at N≥2 + threshold-window, false-depth fires when stage-2 sub-routes present; PROCEED is silent — mitigates consumer-training pathology per 02:00 precedent. **(c) Threshold calibration** — per-mode multi-dimensional parameter sets with time-window dimension scaling to `docs/autonomy_level.md`'s `current_level` (read via 24-40's 3-tier failure handling); scaling pattern adopts `docs/autonomy_ladder.md` Section 5's per-level evidence-gate pattern; magnitude dimensions per-mode-fixed at first ship, calibratable later; **autonomy register is INDEPENDENT of audit history — structurally mitigates the audit's own LAYER-2 Self-coupling-to-downstream risk** (per /surfacing's framework). **(d) False-depth substrate** — composite majority-vote of 3 components (Stage-1 drop-rate per parent + pairwise meta-reasoning distinctness + secondary-attribute coordinate-uniformity from 01:30's 6-tuple), fires when ≥2 of 3 exceed thresholds; equal-weight defaults (1/3 each, maximum-entropy baseline) + calibration revival trigger at 5+ stage-2 invocations; target ≥80% TP / ≤20% FP; fallback if underperforms = drop substrate (F-Cand-5 KILL-with-seed). **Supporting pieces:** per-mode dispatch table for substrate consumption (inherits 01:00's per-movement-type chain pattern) with spec-coherence check on routeman SKILL.md for Prescriptive-Without-Cycle-Context (distinguishes spec-edit-bypass from genuine failure); parallel `_audit.md` file output (hybrid placement matching 24-00); 5-tier verdict format (PROCEED / FLAG / RE-RUN / INFO / ERROR — extends the design memo's 3-tier with 24-40's INFO/ERROR). **All 5 LAYER-2 modes detectable at first ship** — Q4's substrate gap closed (the 4 supplied by 24-40 + 24-01 + the new majority-vote composite for false-depth). **Architecture preserved:** observe-only; isolated-session + file-scanning; never gates routeman's enumeration; enumerate-all identity preserved (D7 CRITICAL — HIGH in critique). **L0/L1/L2+ phase progression** documented with extension hooks per phase. **2 MUST + 4 COULD + 4 DEFERRED follow-ups** in the resolution finding (MUST: update Q4 here + impact note on design memo; COULD: author `layer2_audit.md` protocol + runner hooks + routeman SKILL.md + calibrate false-depth weights; DEFERRED: audit-of-audit research frontier + cross-discipline generalization + substrate-self-audit as L2+ default + drop-false-depth fallback). See the resolution finding for the full design + 9-prior Inherited Commitments Re-test + 12-dimension critique + assembly's emergent properties.
>
> **Question 5 (file-system protocol between workers, routeman, runners) — RESOLVED-WITH-DESIGN 2026-05-24 07:30** by `devdocs/inquiries/2026-05-24_07-30__file_system_protocol_workers_routeman_runners/finding.md`. The user invoked /MVLw on Q5's worker-write-side dive-deep. The full pipeline ran at full depth on 7 sub-aspects (the user's 5 gated + FF-1 + FF-5 to fully resolve all 16-31 FFs). The committed design: **the protocol ships as a new file at `cognitive_harness/protocols/inquiry_filesystem_protocol.md`**, aspect-organized (one section per sub-aspect + cross-cutting Failure Modes + L2+ Extension Hooks + Cross-References). The content is **~80% documentation of existing project conventions** (folder topology = canonical inquiry-folder paths + branch nesting per branch_inquiry; filename patterns = per-discipline canonical names `sensemaking.md` / `innovation.md` / etc.; section structures = each discipline's existing schema; `_state.md` Status semantics per CONCLUDE) **+ ~20% genuinely-novel commitments** in 3 small pieces. **Novel piece 1 — atomic-write convention (MUST):** workers write `<canonical_name>.tmp` then `mv <canonical_name>.tmp <canonical_name>` (POSIX `rename(2)` atomicity); routeman scanning never sees half-written canonical files; eliminates mid-write read race; no new infrastructure (POSIX primitive); mitigates FF-4 (partial-state read protection). **Novel piece 2 — per-discipline write-completeness as two-part check:** (a) canonical filename exists (via atomic-write) AND (b) verdict-line `**Overall: PROCEED**` / `FLAG` / `RE-RUN` near file end (reuses RESUME §2 pattern); backward-compat per RESUME §2 (absent verdict-line → treat as PROCEED with NOTE); resolves FF-3. **Novel piece 3 — scan detection + scope economy:** L0 = full scan of `devdocs/inquiries/` + branch nesting at each invocation (cheap at L0 corpus ~20-50 folders); L2+ = mtime-filtered scan extension hook (trigger: full-scan time exceeds calibratable threshold, default 5 seconds); marker-based scan preserved as research frontier; resolves FF-1 and FF-5. **Supporting pieces:** routeman's completion-emission = file presence of both `_navig.md` + `routeman.md` (per 24-00 inheritance) + explicit `routeman_status: COMPLETE` field in `_navig.md` frontmatter (additive; consumed by downstream audit at 06-00). Partial-failure handling = detection-only via 3-tier vocabulary (INFO / ERROR / ERROR) inherited from 24-40 (worker crash → atomic-write mitigates + orphan `.tmp` ignored; malformed content → ERROR halt; scan timeout → partial Route Map + INFO + idempotent re-run); recovery is runner/human concern (out of protocol scope). **All 7 sub-aspects covered + all 5 FFs from 16:31 resolved** (FF-1 → scan detection; FF-2 → folder topology section; FF-3 → two-part check; FF-4 → atomic-write + partial-failure handling; FF-5 → scope progression). **ROUTEMAN-OUTPUT inheritance from 24-00 preserved verbatim** (scope-out; no re-litigation). **Architecture preserved:** file-mediated only (per 16-31); no in-context passing; no new infrastructure (no schedulers, no daemons, no locks at L0). **L0/L1/L2+ phase progression** documented with extension hooks per stage. **2 MUST + 5 COULD + 4 DEFERRED follow-ups** in the resolution finding (MUST: update Q5 here + impact note on 06-00 audit re: new `routeman_status` field; COULD: author the protocol file + update worker discipline SKILL.md atomic-write commitments + update runner specs cross-references + routeman SKILL.md commitment + calibrate scan-scope threshold; DEFERRED: L4+ parallel-worker locking + marker-based scan research frontier + runner-mediated atomic-write enforcement fallback + file-presence-only simplification). See the resolution finding for the full design + 12-prior Inherited Commitments Re-test + 12-dimension critique + the 80%-documentation/20%-novel framing.
>
> **Question 6 (file-shape contracts on upstream worker-produced inquiry artifacts) — RESOLVED-WITH-DESIGN 2026-05-24 09:00** by `devdocs/inquiries/2026-05-24_09-00__file_shape_contracts_upstream_artifacts/finding.md`. The user invoked /MVLw on Q6's dive-deep, layering on top of Q5's just-resolved file-system protocol. The full pipeline ran at full depth on 5 sub-aspects (per-discipline contracts; inquiry-level contracts; file-validation layer; enforcement strength; phase progression). The committed design: **contracts live as 8 new sections appended to Q5's protocol file** at `cognitive_harness/protocols/inquiry_filesystem_protocol.md` — 5 per-discipline contract sections (`sensemaking.md`, `innovation.md`, `critique.md`, `decomposition.md`, `surfacing.md`) + 2 inquiry-level contract sections (`_state.md`, `_branch.md`) + 1 validation-layer cross-reference section. **Section-level minimum-shape granularity** (not full schemas): each per-discipline contract names the required sections + the verdict-line (or equivalent terminal-state marker) + the specific consumer reads it supports (adaptive-guidance Stage 1 per 24-01, audit per 06-00, /loop_diagnose pattern reads). The contracts are **~80% documentation of existing discipline-spec conventions** (sensemaking SV1/SV6/Phase 1/Telemetry; innovation Mechanism Coverage Telemetry; critique Phase 3 + per-candidate SURVIVE/REFINE/KILL markers + Convergence Telemetry; decomposition Final Deliverable + Self-Evaluation; surfacing Traversal Trace + Telemetry verdict line; _state.md Flow-type/Pipeline/Progress/Iteration/Status/Next Discipline; _branch.md Question + Goal) **+ ~20% genuinely-novel commitments** in 4 small pieces. **Novel piece 1 — `/decompose` verdict-line backward-compat:** verdict-line OPTIONAL at L0 (decompose currently emits Self-Evaluation in lieu of the standard verdict-line per RESUME §2 pattern); COULD at L1+ for symmetry. **Novel piece 2 — validation layer in `routeman` SKILL.md (not a separate protocol):** parser + per-discipline dispatch table (inherits 06-00 audit + 24-01 adaptive-guidance per-mode dispatch pattern) + 3-tier emitter (INFO / WARN / ERROR — inherits 24-40 vocabulary); single-consumer scope avoids premature generalization. **Novel piece 3 — validation-without-enforcement at L0:** validation emits warnings only, never halts workers or routeman; L1+ progression path opens enforcement options (KILL-with-seed for L1+ revival). **Novel piece 4 — R1 drift-coordination meta-process:** when a discipline spec changes the heading text of a required section, the protocol's corresponding contract section MUST be updated in the same commit; prevents two-file drift without new infrastructure. **Supporting pieces:** consumer reads preserved verbatim (adaptive-guidance Stage 1 WHY-anchor reads; audit per-mode dispatch consumes Stage-1 drop-rate + verdict-line presence + per-candidate markers; /loop_diagnose failure-pattern reads). **All 5 sub-aspects covered.** **Architecture preserved per 16-31 + Q5:** file-mediated only; single-consumer (routeman) at first ship; no new infrastructure at L0 (parser is plain markdown section walk). **L0/L1/L2+ phase progression** documented (L0 = validation-without-enforcement; L1+ = orphan-warning auto-escalation hook + /decompose verdict-line + per-discipline spec edits; L2+ = audit-side contract-conformance check + enforcement-strength calibration). **1 MUST + 5 COULD + 4 DEFERRED follow-ups** in the resolution finding (MUST: update Q6 here; COULD: author the 8 protocol sections + author the validation layer in routeman SKILL.md + per-discipline spec edits at L1+ + `/decompose` verdict-line addition at L1+ + L2+ enforcement-strength calibration; DEFERRED: generalization to non-routeman consumers + per-runner contract refinement + parser specialization beyond markdown section walk + separate validation protocol if scope grows beyond routeman). See the resolution finding for the full design + 14-prior Inherited Commitments Re-test + 12-dimension critique (6 default + 6 project-specific D7-D12) + the R1 drift-coordination refinement.
>
> **Question 2 (multi-head aggregation under file-scanning architecture) — RESOLVED-WITH-DESIGN 2026-05-24 10:00** by `devdocs/inquiries/2026-05-24_10-00__multi_head_aggregation_routeman/finding.md`. The user invoked /MVLw on Q2's dive-deep, continuing the Q4/Q5/Q6 dive-deep sequence. The full pipeline (Su → S → D → I → C) ran at full depth on 7 sub-aspects (dedup criterion across workers; per-worker provenance; telemetry aggregation; priority allocation under contention; hierarchical Route Map interaction with FF-3 from 18-58; first-ship-vs-deferred phase-progression cut; Q14 scope distinction). The committed design: **the protocol ships as 8 new sections in routeman's SKILL.md** (P1 architectural pre-conditions + inheritance from 12 priors; P2 dedup-surface + provenance schema; P3 per-Movement-Family rules + per-discipline dispatch + disagreement-detection; P4 telemetry roll-up + worker_telemetry; P5 schema-unification + aggregation_scope + Q14 distinction; P6 hierarchical Route Map composition; P7 L0/L1+/L2+ phase progression; P8 SKILL.md location + R1 spec-coherence). Location matches Q6's validation-layer precedent (single-consumer scope = routeman). The content is **~80% documentation of existing patterns from 12 priors + ~20% genuinely-novel commitments** in 4 small pieces. **Novel piece 1 — dedup-surface 3-tuple** = `(movement_type, parent_route_id, Question_fingerprint)` with normalized-hash Question_fingerprint (lowercase + whitespace-collapse + punctuation-strip); session-identity-blind and deterministic across workers; per-Route `provenance_workers: List[str]` field captures dedup output (degenerate at N=1 as 1-element list); optional `dedup_evidence: dict` records matched-fields when dedup fires. **Novel piece 2 — per-Movement-Family aggregation rule typology** inheriting 02-00's per-route-type-split + 01-30's Movement Family categorization: **Progression-Aggregation** = vote-count weighted by per-worker D1 confidence sum (deeper-but-narrower posture); **Re-orientation-Aggregation** = diversity-preserving with minimal dedup (broader-and-comparative posture); **Coordination-Aggregation** = per-type pre-condition check + per-Family default (structural pre-conditions like REVISIT's ≥3 prior cycles). Per-discipline dispatch inherits 24-01's per-movement-type chain + 06-00's per-mode dispatch table. **Novel piece 3 — aggregation_scope parametric BRIDGE-NOT-COMMITMENT to Q14:** `aggregation_scope: enum` with values `invocation` (L0 default) and `cross_invocation` (reserved for Q14). The hook reserves the slot for cross-invocation aggregation WITHOUT claiming Q2's mechanism = Q14's mechanism. Q14's eventual design can override the `cross_invocation` value's rules without breaking L0. **Novel piece 4 — disagreement-detection INFO meta-signal:** triggers on partial-key conflicts (identical parent_route_id + Question_fingerprint but different movement_type); emits INFO via the per-worker telemetry sub-block; consumed by 06-00 audit per its per-mode dispatch pattern (calibration-divergence detection at L1+; persistent-disagreement FLAG at L2+); enumerate-all preserved (BOTH conflicting Routes emitted; no gating). **Supporting pieces:** 5 schema extensions (`provenance_workers`, `aggregation_meta`, `worker_telemetry`, `dedup_evidence`, `aggregation_scope`) all present at L0 with degenerate values — multi-head transition at L1+ is ACTIVATION-NOT-REWRITE; telemetry roll-up uses 5-tier worst-case-wins (any ERROR → ERROR; any FLAG → FLAG; else PROCEED) inheriting 06-00's vocabulary; hierarchical Route Map composition is two-axis orthogonal (cross-worker width × stage-2 sub-route depth from 18-58); per-worker telemetry preserved verbatim in sub-block + roll-up headline for hybrid consumption (Selector reads headline; audit reads sub-block). **3 critique-committed refinements integrated:** R1 (top-level vs sub-route classification edge case documentation in P2 — asymmetric-failure principle preserves no-info-loss); R2 (disagreement-detection consumption contract with 06-00 audit in P3); R3 (verdict-line FLAG/RE-RUN handling at L1+ in P7 — contribution INCLUDED per observe-only; aggregation does NOT halt). The three refinements form a unified failure-mode handling architecture under asymmetric-failure + observe-only invariants. **All 7 sub-aspects covered + dedup-vs-identity tension dissolved** (dedup operates on identity-key matches where workers agree; disagreement-detection on partial-key matches where workers disagree — orthogonal operations). **Architecture preserved per 16-31:** singleton main navigator (aggregation is INTERNAL to one routeman invocation); file-mediated only; isolated session; enumerate-all + observe-only identity invariants; no new infrastructure at L0. **L0/L1/L2+ phase progression** documented with explicit per-tier activation rules (L0 = N=1 degenerate + schema extensions present; L1+ = N>1 detection via folder-presence-based check OR runner-supplied list + dedup activation + provenance expansion + disagreement INFO; L2+ = per-worker priority calibration + LLM-judgment-dedup fallback + threshold tuning + Q14 activation if Q14 ships). **1 MUST + 5 COULD + 4 DEFERRED follow-ups** in the resolution finding (MUST: update Q2 here; COULD: author the 8 protocol sections in routeman SKILL.md + author the dedup-surface parser as extension of Q6 validation layer + activate L1+ folder-presence detection + calibrate L2+ thresholds + activate aggregation_scope=cross_invocation when Q14 ships; DEFERRED: no-dedup mode revival at L2+ if deterministic dedup proves unreliable + telemetry-digest extension at N>10 + separate-file Q2 protocol revival at single-consumer-scope expansion + generalization to non-routeman consumers). See the resolution finding for the full design + 12-prior Inherited Commitments Re-test + 12-dimension critique (6 default + 6 project-specific D7-D12) + the 3-refinement unified failure-mode handling architecture.
>
> **Question 9 (/reflect mapping shape) — REMOVED 2026-05-24** because `/reflect` is not canonical at the project's current state; the question presupposes a runtime spec that doesn't exist. The reflect-routeman coupling will resurface when (and if) `/reflect` becomes canonical; a fresh frontier question can be filed at that point. See Q9 below for the removal block + preserved pre-removal content.
>
> **Effective open frontier-question count after these resolutions:** 0 still-open original Tier-1 (Q1 + Q2 + Q3 + Q4 + Q5 + Q6 all resolved) + 0 fully-open original Tier-2 (Q10 RESOLVED 2026-05-24 02:00; Q8 demoted earlier; Q9 REMOVED; Q7 PARTIALLY-RESOLVED with completeness sub-aspect still on watch-list) + 2 new Tier-1 from 24-00 (Q11 promotion threshold, Q12 schema extensions [with `meta_reasoning_revision_history` now actively consumed by 24-01's MS5 + with Q2's first-mover schema additions to be accommodated by Q12's eventual design]) + 3 new Tier-2 from 24-00 (Q13 lifecycle, Q14 cross-inquiry aggregation [now reachable via Q2's `aggregation_scope=cross_invocation` parametric bridge], Q15 `_navig.md` ↔ `_state.md` relationship) = **5 still-open frontier questions** plus 7 fully RESOLVED (Q1, Q2, Q3, Q4, Q5, Q6, Q10) + 1 PARTIALLY-RESOLVED (Q7) + 1 REMOVED (Q9; Q8 was demoted earlier). **All original Tier-1 questions resolved.** The routeman SKILL.md authoring inquiry is no longer blocked by original Tier-1 gating; remaining open questions are 2 new Tier-1 (Q11 + Q12 from 24-00) + 3 new Tier-2 (Q13 + Q14 + Q15 from 24-00) + Q7's completeness sub-aspect on watch-list.
>
> Sub-frontiers from the resolution findings (24-40's FF-1 to FF-6; 24-01's NEW-FF-1 to NEW-FF-4 + FF-7/FF-8 carried-forward; 24-01-30's FF-1 to FF-3) are tracked separately at their sources — they are SKILL.md-authoring-stage flags and follow-up flags, not new Tier-1/Tier-2 questions for this finding's curated list.
>
> **Structural milestone surfaced across 24-01 + 24-01-30:** the LLM-operational-characteristics-as-design-input principle (originated in 18-58) now has N=5 evidence applications (18-58 origination + 24-00 hybrid-naming + 24-40 register-naming + 24-01 pointer-style preservation + 24-01-30 attribute-naming preservation). Promotion to project-canonical principle is solidly justified for an appropriate future inquiry — NOT tracked here as a frontier question (it's a meta-promotion, not a routeman-implementation-gating question).

> **📌 Subsequent additions notice (applied 2026-05-24 00:20; source inquiry: `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`)**
>
> The source inquiry adopted `cognitive_harness/protocols/multi_resolution_navigation.md` as routeman's persistence mechanism, with user-aligned naming (`_navig.md` and `routeman.md` with documented alias to the protocol's `_frontier.md` and `navigation.md`), hybrid placement by invocation scope, the protocol's lifecycle (persistent + in-place evolution + append), and a two-tier boundary with `branch_inquiry.md` (sub-routes use `multi_resolution_navigation`'s child-map convention; route-to-inquiry promotion uses `branch_inquiry.md`). The user's "two invocation modes" were reaffirmed as the staged-mapping adoption's two stages (no new mode design). Per-question impact:
>
> - **Question 5 (file-system protocol between workers, routeman, runners) — PARTIALLY ANSWERED.** The source's adoption-spec sketch §2.2 (naming) and §2.3 (placement) commit specific file names (`_navig.md` and `routeman.md`) and placement rule (per-inquiry for inquiry-scoped invocations; central `devdocs/navigation/<run-id>/` for project-scoped) for routeman's OWN output files. The remaining sub-aspects of Q5 — folder topology that workers write to; filename patterns workers use; write-completeness signaling; routeman's completion-emission shape; partial-failure handling — remain open and are scoped to the SKILL.md authoring inquiry. Q5's gating status is unchanged at Tier-1; what shifted is that the routeman-output side of the protocol is committed, while the worker-write side remains the open frontier.
> - **Question 6 (file-shape constraints on upstream cycle artifacts) — PARTIALLY ANSWERED.** The source's adoption brings the protocol's frontier-candidate-record schema (candidate_id, parent_map, parent_route, route_type, priority, status, expansion_reason, eligibility, eligibility_reason, scheduling_reason, child_map_path, blocked_by, continuation_note) as the base shape for routeman's own persistence file. This is distinct from but adjacent to Q6, which targets UPSTREAM cycle artifacts (what routeman reads from /sense-making, /innovate, /td-critique, /reflect output files). The protocol's schema does NOT resolve Q6's upstream-artifact contracts; those remain open. The source's new FF-2 (routeman-specific schema extensions) is a separate frontier — see new Question 12 below.
> - **Questions 1, 2, 3, 4, 7, 9, 10 are unaffected** by the source's adoption.
> - **Question 8** (already demoted) remains demoted.
>
> **5 new sub-frontiers from the source's adoption are added as Questions 11-15 below** (rather than tracked separately at the source as the previous additions notice did for the 18-58 source). The user explicitly requested adding genuinely-new questions to this finding rather than tracking them only at the source. The "exactly 10" curated commitment is intentionally broken; effective frontier-question count rises to 14 (6 original Tier-1 + 3 original Tier-2 after Question 8's demotion + 5 new = 14).
>
> **Effective frontier-question count after this additions notice:** 6 original Tier-1 (Q1-Q6) + 3 original Tier-2 (Q7, Q9, Q10; Q8 demoted) + 2 new Tier-1 (Q11 promotion threshold, Q12 schema extensions) + 3 new Tier-2 (Q13 lifecycle, Q14 cross-inquiry aggregation, Q15 `_navig.md` ↔ `_state.md` relationship) = **14 frontier questions** plus 1 added Research Frontier (generalization of the `_navig.md` pattern to other disciplines).
>
> For the full structural reasoning + per-proposal recommendations + the adoption spec sketch + the inherited-commitments re-test, consult the source inquiry's finding.

> **📌 Subsequent additions notice (applied 2026-05-23 20:10; source inquiry: `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md`)**
>
> The source inquiry adopted two additions to routeman that interact with several questions in this finding. **The dual adoption: Point 1 = hybrid two-stage staged route mapping with selective-runtime trigger; Point 2 = required length-bounded `why_this_might_be_important` meta-reasoning field placed in the schema's "Reasoning" group.** Each adoption affects specific questions here; the per-question impact:
>
> - **Question 3 (adaptive-guidance generation mechanism) — RESOLUTION PATH SHIFTED.** Point 2's meta-reasoning field may BE the substrate that grounds each Guidance Pointer's WHY anchor. Q3's resolution path now includes "use the meta-reasoning field's content as anchor source" as a primary candidate. The mechanism question's substance survives; the answer-space simplifies if the meta-reasoning field carries cycle-grounded reasoning.
> - **Question 4 (LAYER-2 audit infrastructure) — SCOPE EXTENDED.** Two new identity-eroding failure modes added to the LAYER-2 layer: **false depth** (Point 1's stage-2 failure mode — sub-routes without structural distinction) and **filler meta-reasoning** (Point 2's failure mode — generic language without cycle-content anchors). The audit's operational design is still Q4's responsibility; the source contributes recognition signals.
> - **Question 2 (multi-head aggregation) — INTERACTION ADDED.** Point 1's staging is orthogonal to multi-head (multi-head at worker level; staging at routeman level). The hierarchical Route Map (FF-3 sub-frontier from the source) lives within Q2's scope.
> - **Question 5 (runner-discipline contract) — INTERACTION ADDED.** Point 1's stage-2 invocation adds requirements to the file-system protocol (parent-route identifier input; sub-route file location). FF-1 sub-frontier (staging trigger mechanism) from the source lives within Q5's scope.
> - **Question 6 (cycle-output shape constraints) — INTERACTION ADDED.** Point 1 introduces light schema polymorphism: top-level Routes have 17 attributes (16 + meta-reasoning); sub-routes have 18 (17 + parent-reference). The file-shape contracts must accommodate.
> - **Question 1 (autonomy-level detection)** is unaffected.
> - **Question 7 (taxonomy completeness)** is unaffected.
> - **Question 9 (/reflect mapping shape)** is independent; the source's FF-5 sub-frontier (/reflect coordination on meta-reasoning) is adjacent but not within Q9's specific scope. *[2026-05-24: Q9 has since been REMOVED — `/reflect` is not canonical at the current project state, making the mapping-shape question premature. See Q9 below.]*
> - **Question 10 (pre-maturity emission policy)** is unaffected.
> - **Question 8** (already demoted in the correction) remains demoted.
>
> **5 new sub-frontiers emerge from the source's adoption decisions.** They are tracked in the source finding's Open Questions section, NOT retroactively added here: FF-1 staging trigger mechanism; FF-2 recursion depth; FF-3 hierarchical Route Map consumption; FF-4 meta-reasoning field audit mechanism; FF-5 /reflect coordination on meta-reasoning. The previous "exactly 10" curated commitment of this finding is preserved.
>
> **Effective frontier-question count after the correction + the source:** 6 Tier-1 (unchanged in count; Q2, Q5, Q6 re-stated by the correction; Q3 path shifted by the source; Q4 scope extended by the source) + 3 Tier-2 (Q7, Q9, Q10; Q8 demoted) = **9 frontier questions** plus the source's 5 new sub-frontiers tracked separately.
>
> For the full structural reasoning + per-proposal recommendations + the 4-axis content distinction table + the sequencing recommendation, consult the source inquiry's finding.

> **⚠️ Correction notice (applied 2026-05-23 17:25 in-place; impact source: `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md`)**
>
> The routeman design memo's cycle-consumer process-layer sub-claim was corrected on 2026-05-23: routeman runs in an **isolated session** and **scans worker-produced inquiry-folder artifacts** when prompted (file-system-mediated input contract), rather than receiving in-context cycle output. The consumer relation is preserved structurally; the layer name "cycle-consumer" is preserved. See the correction finding for the full diagnostic + 4-tier downstream-impact list.
>
> **Questions in this finding affected by the correction:**
> - **Question 2 (multi-head handoff) — Tier I substantive re-statement applied.** The original dichotomy "one shared Route Map or N per-head?" was wrong. Under the corrected architecture, multi-head is realized at the WORKER level (N parallel worker sessions writing to N inquiry folders); routeman scans across all of them + produces ONE Route Map per invocation aggregating next-moves across the workers' cycles. Original wording preserved as a "Pre-correction reading" subsection.
> - **Question 5 (runner-discipline contract) — Tier I substantive re-statement applied.** The contract is file-system-protocol (workers write specific filename patterns to specific folders; routeman reads specific folder paths), not in-context invocation.
> - **Question 6 (cycle-output shape constraints) — Tier I substantive re-statement applied.** Constraints are on FILE shapes (frontmatter, filename patterns, section structures), not in-context data shapes.
> - **Question 8 (Continuation Note cross-inquiry persistence) — DEMOTED out of frontier status.** Under file-scanning, routeman naturally scans across inquiry folders; cross-inquiry persistence is automatic (folders persist; routeman's scan provides access). Question 8 no longer qualifies as a frontier. Tier-2 watch-list shrinks from four to three.
> - **Question 1 (autonomy-level detection) — Tier II minor re-statement applied.** Resolution path narrows to a project-level autonomy register FILE that routeman reads during its scan.
> - **Question 3 (adaptive guidance generation) — Tier II minor re-statement applied.** The WHY-anchor source is file content (read from inquiry artifacts), not in-context content.
>
> **Questions NOT affected by the correction:** Question 4 (LAYER-2 audit infrastructure); Question 7 (taxonomy completeness); Question 9 (/reflect mapping shape — Tier III operational revision at substance-unchanged level); Question 10 (pre-maturity emission policy). *[2026-05-24: Q9 has since been REMOVED — `/reflect` non-canonical; see Q9 below for the removal record.]*
>
> **Effective question count after correction:** 6 Tier-1 (unchanged count; Question 2/5/6 re-stated) + 3 Tier-2 (Question 7, 9, 10; Question 8 demoted) = **9 frontier questions** (with the 4 corrected-architecture sub-questions FF-1 through FF-5 from the correction finding now tracked separately there, not retroactively added here).

## Question

(from `_branch.md`)

The user asked: "lets dive deeper of routeman by creating 10 questions that should be resolved before moving into implementation. hard questions, like frontiers." `routeman` is the forward-Boundary cognitive discipline whose MEANING-layer design was just committed in `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`; the inquiry sits one step before implementation, which would be a structural-layer follow-up authoring `cognitive_harness/routeman/SKILL.md`.

The inquiry's job is enumerate-not-design: produce ten hard, frontier-level open questions that gate implementation. The 10 questions are intended for triage — the user reads them and decides per question whether to (a) resolve via another /MVL2+ inquiry, (b) defer with documented risk acceptance, or (c) treat as research frontier tracked but not gating shipping. The deliverable is decision-support, not the decisions themselves.

**Goal.** A curated list of exactly 10 hard, frontier-level, implementation-gating questions, each with metadata (why-it-is-a-frontier, what-it-gates, hardness tagging, and a candidate resolution path), spanning routeman's design axes rather than clustering. The questions must be net-new beyond what the design memo already flagged as deferred or research-frontier.

## Finding Summary

- **The deliverable is exactly ten questions in two tiers.** Six questions are Tier 1 (must-resolve-before-SKILL.md — leaving them open creates silent implementation choices); four are Tier 2 (watch-list-during-SKILL.md — can ship as documented placeholders without silent commitment). Both tiers require attention before SKILL.md authoring; they differ in whether the attention is decision-work or documentation-work.

- **Tier 1 — must-resolve-before-SKILL.md (six questions):** (1) the runtime mechanism by which routeman detects the project's current autonomy level for graduated-autonomy classification; (2) the multi-head handoff protocol (one shared Route Map or N per-head Route Maps under parallel cognitive cycles); (3) the generation mechanism for adaptive guidance pointers and the source-anchor for each pointer's WHY (the load-bearing prescriptive residual that distinguishes routeman from descriptive-labeling siblings); (4) the LAYER-2 identity-erosion audit infrastructure (who runs, at what cadence, with what threshold calibration to the project's invocation rate); (5) the explicit runner-discipline contract (how a runner like /MVL or /MVLw passes cycle output, signals completion, and handles partial failure); (6) the shape constraints routeman implicitly requires on upstream cycle outputs from /sense-making, /innovate, /td-critique, /reflect — currently unenforced and untested.

- **Tier 2 — watch-list-during-SKILL.md (four questions):** (7) empirical completeness of the inherited 16-type movement taxonomy (is it a closed set or growable); (8) cross-inquiry persistence of the per-route Continuation Note attribute — bounded ★★ within one inquiry, harder ★★★ at the cross-inquiry resurrection sub-aspect (the cross-inquiry RESURRECT REVISIT case where a route in inquiry B needs a prior-inquiry's Continuation Note); (9) the specific operational mapping shape from /reflect's process-quality observations to routeman's guidance pointers (direct one-to-one / aggregation / filtering / transformation rule); (10) the emission policy for INVESTIGATE FRONTIER and REVISIT movement-types before the project reaches Baldwin-cycle calibration maturity (N≥30 inquiries per discipline) — currently the intersection of these two endgame mechanisms is unspecified. *[2026-05-24 updates: Q7 PARTIALLY-RESOLVED via categorization inquiry; Q8 demoted earlier; Q9 REMOVED — `/reflect` non-canonical; current active Tier-2 = Q10 only. See top-of-file Resolution log.]*

- **The selection applied eight operational constraints from sensemaking.** A frontier question satisfies three conditions (no current corpus answer; gates implementation; net-new beyond design-memo flags) and is "hard" when meeting two of three sub-dimensions (breadth-of-consequence; depth-of-investigation; articulation-difficulty). The ten span nine of twelve surveyed regions and all six gating types (specification-gap; interface-unspecified; empirical-assumption; capability-dependency; operational-policy; calibration-parameter), satisfying the spread requirements.

- **The selection process screened twenty-three candidate questions originally surfaced.** Nine candidates were filtered out as non-eligible (gating too weak; redundant with design-memo deferrals; trivially hard; or runner-level concerns mis-attributed to the discipline). Two candidate pairs were consolidated (the pointer-WHY anchor sub-question was merged into the adaptive-guidance generation question; the LAYER-2 threshold calibration sub-question was merged into the LAYER-2 audit-infrastructure question). One candidate was demoted as trivially-hard during ranking. Two were dropped at the selection step to honor the ten-cap. Each filter and drop decision is documented with reasoning.

- **The selection deliberately includes questions about not-yet-shipped capabilities.** Multi-head architecture has not shipped; Baldwin-cycle calibration maturity (N≥30 per discipline) has not been reached. Both gate today's SKILL.md authoring because the SKILL.md must accommodate these capabilities when they ship. A silent default committed at authoring time (e.g., "one Route Map per invocation regardless of multi-head") would later be hard to revise. The accommodation-gates-authoring rule was applied per sensemaking's Ambiguity 4 resolution.

- **The selection deliberately excludes already-flagged items from the routeman design memo's deferred-with-path and research-frontier lists unless this inquiry adds substantive new structure.** The primitive composition deferral, the reflect coupling deferral, the cognitive-fixes-style fail-safe deferral, and the non-active archival audit deferral are on-path with revival triggers — re-listing them would dilute the net-newness criterion. The exception is the reflect coupling deferral, where this inquiry elevates the specific operational-mapping-shape sub-question that the deferral didn't name (Tier 2 question 9). The three research frontiers from the design memo (pattern-portability, emergent-vs-declared identity, axes-vs-layers framework) don't gate routeman's implementation; they remain research-only.

- **A minimal boundary statement about the post-routeman selection step is acknowledged outside the ten.** The selection-step ownership question (who picks direction(s) after routeman emits the Route Map) was reclassified as runner-level — it gates `/MVL` and `/MVLw` updates, not routeman's SKILL.md. But the SKILL.md author should commit to a one-line boundary statement at authoring time: "routeman emits the Route Map; selection is an external concern of the runner." This is doc-only and doesn't gate routeman's design.

- **The deliverable is decision-support, not decisions.** For each Tier 1 question, the user has three paths: resolve via a follow-up /MVL2+ inquiry (the per-question resolution path names the inquiry shape); defer with explicit documented risk in the SKILL.md; or — if the user finds the question more deferrable than this inquiry judged — re-classify to Tier 2 and ship with a documented placeholder. For each Tier 2 question, the SKILL.md becomes the artifact that documents the open status with a specific revival trigger.

## Finding

### Surrounding context (why we are even discussing this)

The routeman discipline was designed at MEANING layer earlier today in `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`. That design committed routeman's identity sentence, three load-bearing structural layers (paradigm-instantiation as Navigational; prescriptive-extension via four residuals; cycle-consumer process position), three endgame functions (enumeration-first preserves multi-head; auto-vs-judgment positions L0-L4; corpus-hygiene as candidate-load-bearing pending validation), ten cognitive features, a sixteen-field output schema, twenty-six lineage decisions against canonical /navigation, and a nine-mode failure framework.

The design memo flagged four deferred items with revival triggers and three research frontiers explicitly. Those are "what's already known to be open." The user's request for this inquiry is to surface what's NOT yet known to be open — frontier questions whose unresolved status would create silent implementation choices when the structural-layer follow-up authors `cognitive_harness/routeman/SKILL.md`.

The deliverable is intended as a triage list. The user reads it, decides per question whether to resolve, defer, or accept as research frontier, and then proceeds to SKILL.md authoring with a clear-eyed view of what's settled vs open. Without the list, the SKILL.md author would either make silent commitments at the open points or block on every open point. The list converts implicit gaps into explicit triage items.

### 1. The frontier-question filter

A frontier question for routeman implementation satisfies three conditions, applied per candidate:

- **No-current-answer.** No structural answer exists in the corpus today. The question is not already answered in the design memo, the upstream findings the design memo synthesized, the canonical /navigation spec, or `docs/`.
- **Gating-for-implementation.** The answer materially affects an implementation choice. A structural-layer commitment (a section in the SKILL.md, a field in the output schema, an invariant) or a runtime-layer commitment (a procedure step, a default value, a fallback) depends on it. If unresolved, the SKILL.md author either makes a silent choice or proceeds with documented risk.
- **Net-new.** The question is not already a design-memo deferred-with-path item or a research-frontier item, unless this inquiry adds substantive new structure to the already-flagged item (a specific sub-shape the deferral didn't name; an elevation argument).

A question is "hard" when it meets at least two of three sub-dimensions:

- **Breadth-of-consequence.** An unconsidered choice impacts multiple structural-layer or runtime commitments, not just one.
- **Depth-of-investigation.** Answering requires a follow-up inquiry of substantial scope, not a 10-minute write-up.
- **Articulation-difficulty.** The question itself was non-obvious to formulate; the design memo did not even name it as a deferral.

A question meeting only one sub-dimension is "trivially-hard" and is a defect under the user's framing.

### 2. The ten questions

#### Tier 1 — Must-Resolve-Before-SKILL.md (six questions)

Each question, if left unresolved at SKILL.md authoring time, would result in a silent implementation choice the SKILL.md author did not consciously decide. Each needs either a substantive answer (typically from a follow-up /MVL2+ inquiry) or an explicit conscious-deferral-with-documented-risk before authoring.

---

##### ✅ Question 1 — How does routeman detect the project's current autonomy level at invocation time? — **RESOLVED-WITH-DESIGN 2026-05-24**

> **✅ RESOLUTION (2026-05-24): RESOLVED-WITH-DESIGN by `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md`.**
>
> The resolution-path candidate proposed below ("design the project-level autonomy register file and the discipline-read protocol") was executed in full. The committed design:
>
> - **Register file:** `docs/autonomy_level.md` — project-wide markdown+YAML-frontmatter sidecar with 6 fields (`current_level` enum L0-L5, `ladder` enum default `meta_loop`, `set_at` timestamp, `set_by` enum `human`|`system`, `rationale` string, `transition_history` appended list).
> - **Two-ladders resolution:** the register tracks the META-LOOP ladder per `docs/autonomy_ladder.md` (which already existed as a comprehensive 6-level L0-L5 operational ladder — a major Surfacing discovery). It explicitly does NOT track `docs/desc.md`'s Level 0-4+ human-role trajectory; routeman's auto-vs-judgment partition correlates with `autonomy_ladder.md` Section 5's per-level Selector subset.
> - **Read protocol:** routeman reads `docs/autonomy_level.md` on each invocation as part of its file-scan. 3-tier failure-handling vocabulary (INFO / ERROR / ERROR): absent register → default to L0 + emit informational warning (routeman continues at L0); malformed register → halt + flag; out-of-range value → halt + flag.
> - **Write protocol:** human-edit-only at first ship (L0/L1 phase-calibrated); a system-warning hook capability is defined (system observes evidence-gates per `autonomy_ladder.md` Section 6 and emits warnings but does NOT auto-write); system-SET writes deferred to an L2+ follow-up inquiry when L1→L2 calibration data becomes available (preserved as FF-3 in the resolution finding).
> - **Sidecar-boundary statement:** the register is PROJECT-WIDE in `docs/`, distinct from `_state.md` / `_branch.md` / `_navig.md` / `_meta_state.md` / `navigation_memory.md` / `routeman.md` (all per-inquiry or per-session).
>
> **Consequences for routeman:**
> - Routeman's graduated-autonomy classification feature is now IMPLEMENTABLE.
> - The LAYER-2 Calibration-Drift mode becomes DETECTABLE (the register provides the DECLARED level; `transition_history` is the audit substrate the audit can inspect).
>
> **6 frontier flags from the resolution finding** propagate forward: FF-1 (frontmatter field-names finalization at SKILL.md authoring time); FF-2 (read-convention placement — in routeman SKILL.md vs a new protocol doc `cognitive_harness/protocols/autonomy_register_read.md`); FF-3 (system-set write triggers, deferred to L2+ follow-up); FF-4 (generalization to other autonomy-aware disciplines, research frontier); FF-5 (per-discipline overrides, research frontier); FF-6 (two-ladders reconciliation when they diverge in practice, research frontier).
>
> See the resolution finding for the full design + the inherited-commitments re-test + the derivation note explaining that the design is DERIVED FROM priors (file-scanning architecture per 16-31; LLM-operational-design principle now at N=3 evidence; `autonomy_ladder.md`'s value space).

> *[Tier II minor re-statement applied 2026-05-23 per correction notice above. The question's substance is unchanged; the resolution path narrows to a file-mediated register under the corrected isolated-session + file-scanning architecture.]*

**Pre-resolution content (preserved for traceability):**

The routeman identity sentence references "the project's current autonomy level" as a load-bearing input to the graduated-autonomy classification feature, but the corpus has no mechanism by which a discipline reads the project's autonomy level at runtime. `docs/desc.md` describes the autonomy ladder as a trajectory across five levels without specifying a runtime-readable register, an inference protocol, or an invocation-time parameter.

**Why this is a frontier.** No current answer: the mechanism does not exist. Gating for implementation: the graduated-autonomy classification feature cannot operate without it; the entire auto-vs-judgment split (the second endgame function from the design memo) becomes unimplementable. Net-new: the design memo names "the project's current autonomy level" as a load-bearing input but does not name this gap.

**What it gates.** The SKILL.md must specify how the autonomy level is observed at invocation time. *[Post-correction:]* under the corrected isolated-session + file-scanning architecture, the natural mechanism is a project-level autonomy register **file** that routeman reads during its scan (e.g., `docs/autonomy_level.md` or similar). The "parameter passed by the runner at invocation" option is eliminated by the correction (routeman is not invoked with in-context parameters from a runner; it scans). "Inference from operating context" and "hard-coding L0 with a documented limitation" remain as defer-options.

**Hardness.** Breadth high (affects the auto-vs-judgment feature, the LAYER-2 calibration-drift detection, the second endgame function, and any future feature that depends on autonomy context). Depth high (no mechanism exists today; the design is from scratch — though the corrected architecture narrows the design space to file-read options). Articulation medium.

**Candidate resolution path.** A new /MVL2+ inquiry framed as "design the project-level autonomy register file and the discipline-read protocol." Expected scope: one to two weeks of inquiry work covering the register-file format + location, a read convention for discipline specs, and a write protocol for human-set or system-set updates. *Post-correction, the design is bounded to file-read mechanisms; the in-context-parameter option is off the table.*

---

##### ✅ Question 2 — Under multi-head architecture, how does routeman aggregate next-moves across N parallel worker sessions into a single Route Map? — **RESOLVED-WITH-DESIGN 2026-05-24 10:00**

> **✅ RESOLUTION (2026-05-24 10:00): RESOLVED-WITH-DESIGN by `devdocs/inquiries/2026-05-24_10-00__multi_head_aggregation_routeman/finding.md`.**
>
> The user invoked /MVLw on Q2's dive-deep, continuing the Q4/Q5/Q6 dive-deep sequence. The full pipeline (Su → S → D → I → C) ran at full depth on 7 sub-aspects (dedup criterion across workers; per-worker provenance preservation; telemetry aggregation; priority allocation under contention; hierarchical Route Map interaction with FF-3 from 18-58; first-ship-vs-deferred phase-progression cut; Q14 scope distinction). The committed design:
>
> - **(a) Protocol artifact location.** 8 new sections appended to `routeman` SKILL.md — P1 architectural pre-conditions + inheritance from 12 priors; P2 dedup-surface + provenance schema; P3 per-Movement-Family aggregation rules + per-discipline dispatch + disagreement-detection; P4 telemetry roll-up + worker_telemetry; P5 schema-unification + aggregation_scope + Q14 distinction; P6 hierarchical Route Map composition; P7 L0/L1+/L2+ phase progression activation table; P8 SKILL.md location + R1 spec-coherence. Location matches Q6's validation-layer precedent (single-consumer scope = routeman). Separate-file alternative (`cognitive_harness/protocols/aggregation_protocol.md`) KILLed-with-seed (revival trigger: single-consumer scope expansion beyond routeman).
> - **(b) Dedup-surface 3-tuple (novel piece 1).** `(movement_type, parent_route_id, Question_fingerprint)` with Question_fingerprint = normalized hash (lowercase + whitespace-collapse + punctuation-strip). Session-identity-blind and deterministic across workers because each component derives from cycle content, not session identity. Per-Route `provenance_workers: List[str]` field captures dedup output (degenerate at N=1 as 1-element list `[single_worker_path]`); optional `dedup_evidence: dict` per Route records matched-fields when dedup fires. **Edge case** (R1 from critique): top-level vs sub-route classification divergence (one worker classifies as top-level with parent_route_id=null; another classifies the structurally-equivalent candidate as a sub-route with parent_route_id=populated) → dedup does NOT fire; two Routes emitted separately. Asymmetric-failure principle preserved (over-coverage, not information loss). L2+ revival trigger: if pattern observed ≥3 times, consider per-classification normalization or LLM-judgment-dedup activation.
> - **(c) Per-Movement-Family aggregation rule typology (novel piece 2).** Three rule-types inheriting 02-00's per-route-type-split + 01-30's Movement Family categorization. **Progression-Aggregation** (DEEPEN, REFINE, PURSUE-SEED, INVESTIGATE-FRONTIER, DEVELOP, TERMINATE): vote-count weighted by per-worker D1 confidence sum (deeper-but-narrower posture; convergence = high-signal). **Re-orientation-Aggregation** (RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE): diversity-preserving with minimal dedup (broader-and-comparative posture; distinct REFRAMEs = high-signal worth preserving). **Coordination-Aggregation** (REVISIT, UNBLOCK, MERGE, TEST, CONSOLIDATE): per-type pre-condition check (e.g., REVISIT ≥3 prior cycles inherited from 02-00) + per-Family default. Per-discipline dispatch inherits 24-01's per-movement-type chain pattern (Stage 1 deterministic) + 06-00's per-mode dispatch table.
> - **(d) Schema unification with 5 new fields.** `provenance_workers: List[str]` per Route (owned by P2; collected here); `aggregation_meta: dict` top-level (`{worker_count: N, ...}`; degenerate at N=1); `worker_telemetry: List[dict]` per-Route-Map (per-worker telemetry preserved verbatim); `dedup_evidence: dict` per Route (optional); `aggregation_scope: enum` with values `invocation` (L0 default) and `cross_invocation` (reserved for Q14). All fields ship at L0 with degenerate values — multi-head transition at L1+ is ACTIVATION-NOT-REWRITE; no breaking schema changes required.
> - **(e) aggregation_scope BRIDGE-NOT-COMMITMENT to Q14 (novel piece 3).** The parametric hook reserves the slot for cross-invocation aggregation (Q14) at the `cross_invocation` value WITHOUT claiming Q2's mechanism = Q14's mechanism. The Sensemaking A3 ambiguity collapse explicitly downgraded the same-mechanism claim to LOW confidence; only the parametric-hook commitment is HIGH confidence. Q14's eventual design can override the `cross_invocation` value's rules without breaking L0 behavior.
> - **(f) Telemetry aggregation = hybrid (verbatim sub-block + roll-up headline).** Per-worker telemetry preserved verbatim in `worker_telemetry: List[dict]` sub-block (one dict per worker; reads at-source via Q5 protocol + Q6 contracts). Aggregate verdict roll-up = 5-tier worst-case-wins (any ERROR → ERROR; any FLAG → FLAG; any RE-RUN → RE-RUN; INFO additive; else PROCEED) inheriting 06-00's vocabulary. Roll-up rule is monotonic + order-independent (satisfying determinism invariant FF-Q2-S3 from Surfacing). Hybrid serves two consumption modes: human Selector reads aggregate headline + dives into sub-block on demand; LAYER-2 audit at 06-00 always reads sub-block per its per-mode dispatch pattern.
> - **(g) Hierarchical Route Map composition = two-axis orthogonal.** Cross-worker width (N parallel workers contributing) × stage-2 sub-route depth (parent-route expansion from 18-58). Aggregation rule applies independently at both layers: top-level cross-worker dedup AND sub-route dedup (keyed by parent_route_id matching). Per-Movement-Family rules apply at both layers. Hybrid choice: top-level cross-worker dedup + per-worker sub-route trees preserved when meta-reasoning differs substantially (per 24-00's `meta_reasoning_revision_history`).
> - **(h) Disagreement-detection INFO meta-signal (novel piece 4).** Triggers on cross-worker movement_type conflicts at identical (parent_route_id, Question_fingerprint) partial-key matches. Emits INFO via per-worker telemetry sub-block. **Consumption contract** (R2 from critique): consumed by 06-00 audit per its per-mode dispatch pattern (calibration-divergence detection at L1+; persistent-disagreement FLAG at L2+ when same conflict persists across N consecutive invocations). Enumerate-all preserved: BOTH conflicting Routes emitted; no Route is gated. Dissolves the dedup-vs-identity tension (frontier flag FF-Q2-S6 from Surfacing): dedup operates on identity-key matches (where workers agree); disagreement-detection on partial-key matches (where workers disagree) — orthogonal operations.
>
> **All 7 sub-aspects covered.** Dedup (b); provenance (b + d); telemetry aggregation (f); priority allocation (c — per-Family rules); hierarchical interaction (g); first-ship-vs-deferred (per-tier activation table below); Q14 scope distinction (e).
>
> **3 critique-committed refinements integrated** (R1 + R2 + R3) form a unified failure-mode handling architecture under asymmetric-failure + observe-only invariants:
>
> - **R1** (P2 verification criteria): top-level vs sub-route classification edge case → over-coverage (no information loss). L2+ revival trigger explicit.
> - **R2** (P3 verification criteria): disagreement-detection consumption contract with 06-00 audit explicit. Spec-coherence with 06-00 documented at routeman SKILL.md authoring time per R1 drift-coordination meta-process (from Q6).
> - **R3** (P7 L1+ row verification criteria): worker verdict-line FLAG/RE-RUN handling → contribution INCLUDED per observe-only; status propagated via per-worker telemetry sub-block; aggregate verdict roll-up handles propagation; aggregation does NOT halt; Selector reads sub-block to decide action.
>
> **Architecture preserved per 16-31 + Q5:** singleton main navigator (aggregation is INTERNAL to one routeman invocation, not multi-routeman coordination — KI1 in Sensemaking re-frames "multi-head aggregation" as "multi-worker-cycle aggregation by the singleton routeman"); file-mediated only; isolated session; enumerate-all + observe-only + identity-preservation-override identity invariants (priority is informational, not gating; downstream Selector decides); no new infrastructure at L0.
>
> **L0/L1+/L2+ phase progression documented with explicit per-tier activation:**
>
> - **L0** = N=1 degenerate + schema extensions present with degenerate values (`provenance_workers=[single]`, `aggregation_meta={worker_count: 1}`, `worker_telemetry=[single_block]`, `aggregation_scope=invocation`) + per-Movement-Family rules in degenerate form (1-worker = no dedup needed; 1-worker = no priority contention; 1-worker = no disagreement possible) + telemetry roll-up rule (single-tier verdict = sole verdict).
> - **L1+** = N>1 activation trigger = folder-presence-based detection (multiple completed worker inquiry folders within scan scope; each with `_state.md` Status COMPLETE + verdict-line per Q5's two-part write-completeness check) OR runner-supplied worker list (override option); dedup activation; provenance list expansion; disagreement-detection INFO emission begins firing; R3 verdict-line FLAG/RE-RUN handling applies.
> - **L2+** = per-worker priority calibration (calibrated D1 weighting based on per-worker prior-invocation accuracy); LLM-judgment-dedup fallback (Stage-2 from 24-01); disagreement-detection threshold tuning; cross-invocation extension (`aggregation_scope = cross_invocation` activation if Q14 has shipped).
>
> **The design is ~80% documentation of existing patterns inherited from 12 priors + ~20% genuinely-novel commitments.** The pattern matches Q5 (07-30) and Q6 (09-00) — three consecutive frontier-question resolutions following the same shape. Novel pieces: 3-tuple dedup-surface (b); per-Movement-Family aggregation rule typology (c); aggregation_scope parametric hook (e); disagreement-detection INFO meta-signal (h).
>
> **1 MUST + 5 COULD + 4 DEFERRED follow-ups** in the resolution finding:
>
> - **MUST:** update Q2 here to RESOLVED-WITH-DESIGN (the action this resolution log entry is the result of).
> - **COULD:** author the 8 new sections in `routeman` SKILL.md per P1-P8 verification criteria (with R1+R2+R3 refinements integrated); author the dedup-surface parser (3-tuple extractor + Question_fingerprint normalizer) as extension of Q6 validation layer; activate folder-presence-based N>1 detection at L1+ when autonomy register transitions; calibrate L2+ thresholds (per-worker priority + disagreement threshold + LLM-judgment-dedup activation); activate aggregation_scope=`cross_invocation` when Q14's design ships.
> - **DEFERRED:** P2-REMOVE-1 no-dedup mode at L2+ revival (revival trigger: L2+ AND deterministic dedup proves unreliable for ≥3 edge cases); P4-Extrap-1 telemetry-digest extension at N>10 worker count; P8-Inv-Shape-2 separate-file Q2 protocol at single-consumer-scope expansion; generalization to non-routeman consumers when a second discipline arrives needing the same multi-source-aggregation primitive.
>
> See the resolution finding for the full design + 12-prior Inherited Commitments Re-test + 12-dimension critique (6 default + 6 project-specific D7-D12) + the 3-refinement unified failure-mode handling architecture + assembly emergent properties (activation-not-rewrite multi-head transition; bridge-not-commitment Q14 hook; 80%-doc/20%-novel pattern matches Q5+Q6; R1 drift-coordination scope extension to cross-worker schema; failure-mode handling consistency).

> *[Pre-resolution content (preserved for traceability — historical record of Tier I substantive re-statement + original frontier-question body + pre-correction reading) follows below:]*

> *[Tier I substantive re-statement applied 2026-05-23 per correction notice above. The original dichotomy "one shared Route Map or N per-head?" was wrong; multi-head is realized at the WORKER level (N parallel worker sessions writing to N inquiry folders), not at the routeman level. Routeman remains a singleton main navigator that scans across all parallel worker folders and produces ONE Route Map per invocation. The corrected question targets the aggregation protocol. Pre-correction reading preserved below for traceability.]*

The project's stated end-goal trajectory includes multi-head loops: parallel cognitive cycles consuming enumerations, with each parallel head picking its own next direction (per `project_end_goal_loop_architecture` memory). Under the corrected isolated-session + file-scanning architecture, multi-head is structurally realized as N parallel worker sessions running MVL pipelines and writing to N inquiry folders concurrently. Routeman remains a singleton main navigator that, when prompted, scans across all parallel worker folders and produces ONE Route Map per invocation aggregating next-moves derived from the workers' completed cycles.

**Why this is a frontier.** No current answer: the aggregation protocol (how routeman combines next-moves derived from N concurrent worker folders into a single coherent Route Map) is unspecified. Gating: the SKILL.md must commit to the aggregation shape at authoring time so the singleton-routeman model coexists meaningfully with parallel workers when multi-head ships. Net-new: the design memo's EF-1 commits to enumeration-first preserving multi-head, but doesn't specify the aggregation mechanism.

**What it gates.** The SKILL.md's output schema and aggregation specification. Specifically: when routeman scans N inquiry folders and finds candidates from each, how does it dedupe across workers (the same candidate may appear in multiple workers' frontier-questions)? How are per-worker telemetry signals aggregated into the Route Map's Telemetry block? How does Priority allocation work when multiple workers contribute candidates of the same Movement Type? Are per-worker provenance tags attached to each Route?

**Hardness.** Breadth high (affects output schema, scan-protocol from new FF-1/FF-2, telemetry aggregation, Route provenance). Depth high (multi-head architecture not yet shipped; the design must project forward responsibly while remaining compatible with the corrected isolated-session model). Articulation medium.

**Candidate resolution path.** A new /MVL2+ inquiry framed as "design routeman's multi-worker aggregation protocol under the file-scanning architecture." Key sub-questions: dedup criterion across workers; per-worker provenance preservation; telemetry aggregation; Priority allocation under multi-worker contention. An acceptable alternative for shipping is conscious deferral with a documented assumption ("routeman ships handling N=1 worker per invocation; N>1 aggregation requires revision when multi-head workers materialize") — provided the Route schema is extensible to per-Route worker-provenance tags without breaking changes.

**Pre-correction reading (preserved for traceability):**
> *Original question framing: "Under multi-head architecture, does routeman emit one shared Route Map or N per-head Route Maps?"* — The original dichotomy assumed routeman runs N times (once per head) OR runs once producing a shared map. The corrected architecture eliminates the dichotomy: routeman is the singleton; multi-head lives at the worker level. The aggregation question is what survives at the same gating level.

---

##### ✅ Question 3 — What is the generation mechanism for adaptive guidance pointers, and what anchors each pointer's WHY? — **RESOLVED-WITH-DESIGN 2026-05-24**

> **✅ RESOLUTION (2026-05-24 01:00): RESOLVED-WITH-DESIGN by `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md`.**
>
> The resolution-path candidate proposed below ("design the adaptive-guidance generation mechanism for routeman, including the WHY-anchor source from inquiry-folder file content") was executed in full. The committed design:
>
> - **Mechanism shape:** **two-stage anchor-then-refine** (M6 from the resolution finding's candidate space).
>   - **Stage 1 (deterministic):** for each Route, identifies candidate WHY-anchors from cycle-output files via per-movement-type priority chain. Iterates source files in priority order; emits candidate anchor records `{anchor_text_excerpt, source_path, source_section}`. Falls back gracefully through the chain when sources are absent.
>   - **Stage 2 (LLM-judgment within constraints):** generates pointer text + WHY text from Stage 1's anchors, respecting design memo style (short imperative pointer + conjunctive "bc..." WHY) and per-mode pointer-count budget. Includes explicit ranking-and-drop rule when anchors exceed budget.
>
> - **WHY-anchor source:** **multi-source with per-movement-type priority**. The original 4 candidate sources from this finding's Q3 (critique verdicts; sensemaking anchors; telemetry; /reflect observations) expanded to 5 via 18-58's meta-reasoning field addition. Committed priority chain:
>   - DEEPEN ← critique SURVIVE + sensemaking Key-Insights → meta-reasoning (fallback).
>   - REFINE ← critique REFINE + sensemaking Ambiguity-Collapse → meta-reasoning.
>   - PURSUE-SEED ← critique KILL-with-seed + telemetry → meta-reasoning.
>   - INVESTIGATE-FRONTIER ← sensemaking Constraints + finding Open-Questions → meta-reasoning.
>   - REVISIT ← prior-cycle critique + cross-cycle meta-reasoning.
>   - Other types ← critique + sensemaking → meta-reasoning.
>   - /reflect observations integrated when /reflect ran (additive; not required first ship).
>   - /intuit hunch projection deferred to /intuit Phase β (FF-7 carried forward).
>
> - **Audit substrate:** **A1 (file-path-in-WHY-text) + A3 (drop-with-reason at generation time)**. WHY text contains a parseable file-path-and-section reference in the format `bc <reason> per <source_path> §<source_section>`. Stage 1 enforces that every pointer has a resolvable anchor; if no anchor resolves through the fallback chain, the pointer is dropped-with-reason and the Route's mode degrades to `none` with rationale logged. This makes the LAYER-2 mode DETECTABLE BY CONSTRUCTION rather than checked post-hoc.
>
> - **LAYER-2 mode detectability (the failure-mode test this question demanded):** ONE substrate (A1+A3) covers THREE LAYER-2 modes:
>   - **Prescriptive-Without-Cycle-Context** (from this finding's Q3 framing): detected when WHY text lacks parseable file-path reference OR reference doesn't resolve.
>   - **Rename-Renders-Itself-Cosmetic** (from the design memo): detected when ≥50% of Routes have empty Guidance Pointers OR all WHYs lack A1 citations across 5 consecutive invocations.
>   - **filler-meta-reasoning** (from 18-58): detected when meta-reasoning field consistently fails to anchor downstream Stage 1 (high frequency of "W5 unresolved" drop-reasons across invocations).
>
> - **Mode-selection:** **MS1 (design memo convention, verbatim) + MS5 (per-mode override on multi-recalibration)**. When a Route's `meta_reasoning_revision_history` (per 24-00's schema extensions) shows ≥2 prior recalibrations, override the MS1 selection to `expand-on-selection` (defer guidance to selection moment). The ≥2 threshold is calibratable at SKILL.md authoring.
>
> - **Cycle-output-absent handling:** graceful fallback chain W1 (critique) → W2 (sensemaking) → W5 (meta-reasoning) → `none` mode (with rationale logged). The mechanism doesn't halt; if all anchors fall back to `none`, the Route's mode is `none` and the drop-reason is recorded.
>
> - **Performance commitment:** batch-mode I/O optimization (default for typical inquiry sizes N≥4 Routes; per-Route reading acceptable for very small inquiries). Performance: O(N+M) where N=Routes and M=cycle-output-files.
>
> **Consequences for routeman:**
> - Routeman's prescriptive-extension layer becomes IMPLEMENTABLE.
> - The LAYER-2 Prescriptive-Without-Cycle-Context mode becomes DETECTABLE (and so do Rename-Renders-Itself-Cosmetic + filler-meta-reasoning via the same substrate).
> - The mechanism's correctness is GUARANTEED BY CONSTRUCTION via Stage 1's drop-with-reason enforcement.
>
> **6 frontier flags from the resolution finding** propagate forward: NEW-FF-1 (Stage 1 exact per-movement-type parsing rules at SKILL.md authoring); NEW-FF-2 (Stage 2 LLM template at SKILL.md authoring); NEW-FF-3 (A2 structured substructure + A4 type-coherence check elevation if audit infrastructure demands); NEW-FF-4 (MS3 autonomy-axis + MS2/MS4 + anchor-count-secondary-signal mode-selection extensions); FF-7 (carried forward — /intuit M4 hunch projection when Phase β ships); FF-8 (carried forward — /reflect W4 integration shape when /reflect coupling spec lands).
>
> **Inherited Frame Audit notable finding:** the resolution finding's design is **DERIVED FROM** the LAYER-2 mode's recognition signal (the audit substrate IS the mode's operational form), **CONSTRAINED BY** the design memo's mode-allocation convention (MS1 verbatim) + 16-31's file-scanning architecture (no in-context-pass) + 18-58's meta-reasoning field commitment, and **INFORMED BY** 24-00's persistence model + 24-40's autonomy register. Recording these derivations prevents future inquiries from treating the choices as arbitrary preferences.
>
> See the resolution finding for the full design + the Stage 1 + Stage 2 procedural specifications + the inherited-commitments re-test + the derivation notes.

> *[Tier II minor re-statement applied 2026-05-23 per correction notice above. The question's substance is unchanged; the WHY-anchor source clarifies as file content (read by routeman from inquiry-folder artifacts during its scan), not in-context content.]*

**Pre-resolution content (preserved for traceability):**

The adaptive guidance feature is the load-bearing prescriptive residual that distinguishes routeman from descriptive-labeling sibling disciplines like /surfacing. Canonical /navigation describes the route-card structure including Guidance Mode and Guidance Pointers with per-pointer WHY, but does not specify how the pointers are generated or what anchors the WHY. The design memo names the feature without committing to the mechanism.

**Why this is a frontier.** No current answer. Gating: the load-bearing residual is the discipline's separability anchor; without a mechanism, the prescriptive layer degrades to filler and the LAYER-2 identity-erosion mode named "Prescriptive-Without-Cycle-Context" fires. Net-new: the design memo names the feature without specifying its operational mechanism.

**What it gates.** The SKILL.md's procedural specification for adaptive guidance generation. *[Post-correction:]* under the corrected file-scanning architecture, the WHY-anchor source is file content — specifically, the cycle-output artifacts routeman reads during its scan (critique verdicts written to file; sense-making anchors; telemetry; /reflect observations when present). The mechanism question (how pointers are generated from those file-content anchors) is unchanged; the source is clarified. Without commitment, the spec leaves the mechanism implicit, and the LAYER-2 audit cannot detect failure without an anchored-WHY check.

**Hardness.** Breadth high (every Route's prescriptive content depends on it; failure triggers a Layer-2 mode). Depth high (no mechanism specified; design from scratch). Articulation medium.

**Candidate resolution path.** A new /MVL2+ inquiry framed as "design the adaptive-guidance generation mechanism for routeman, including the WHY-anchor source from inquiry-folder file content." Likely options to evaluate: a cycle-output-derivation rule mapping file-read critique verdicts to DEEPEN/REFINE/PURSUE-SEED guidance pointers (with the cycle-output coming from `critique.md` or equivalent in the worker's inquiry folder); projection from /intuit Phase-β-or-later hunches (which would also be file-mediated); LLM-direct generation reading file content with a structural template; or a hybrid. *Post-correction, all options operate on file-read content; the in-context-pass option is off the table.* The inquiry must commit to one option and test against the LAYER-2 Prescriptive-Without-Cycle-Context failure mode.

---

##### ✅ Question 4 — Who runs the LAYER-2 identity-erosion audits, at what cadence, and how are the thresholds calibrated? — **RESOLVED-WITH-DESIGN 2026-05-24 06:00**

> **✅ RESOLUTION (2026-05-24 06:00): RESOLVED-WITH-DESIGN by `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md`.**
>
> The user invoked /MVLw on Q4's mechanism dive-deep with the explicit constraint that `/reflect` is excluded from runner candidates (/reflect is not actively developed in the project). The full pipeline (Su → S → D → I → C) ran at full depth on the 4 sub-questions (runner, cadence, threshold-calibration, false-depth-substrate) + 2 design-completion pieces (substrate-consumption protocol, verdict output format). The committed design:
>
> - **(a) Runner.** New protocol file at `cognitive_harness/protocols/layer2_audit.md`, invoked by the runner at routeman invocation-end (L1+ auto-invocation) OR by the human (L0 manual invocation supplemented by routeman's runner-output pointer). The self-audit and runner-level alternatives were rejected in critique (conflate audit semantics with routeman's enumeration or with orchestration). The substrate-self-audit-at-consumer-side alternative (no dedicated runner; substrates are self-disclosing in routeman's output; consumers apply the check) was the Inverted-frame candidate from Innovation's Inherited Frame Audit — KILLED with seed: becomes the L2+ extension hook for when the system Selector takes over Route Map reading.
> - **(b) Cadence.** Two-layer shape: fixed-interval gating at every routeman invocation-end (the natural gating point) + per-mode event-triggered firing inside the gating. Per-mode firing rules: A1+A3 modes (Prescriptive-Without-Cycle-Context, Rename-Renders-Itself-Cosmetic, filler-meta-reasoning) fire per-invocation cheaply by reading current `routeman.md`; Calibration-Drift fires when `_navig.md` shows ≥2 invocations AND threshold-window has accumulated; false-depth fires when `routeman.md` contains sub-routes (stage-2 has run). PROCEED is silent (no surfacing); only FLAG/RE-RUN/INFO/ERROR surface to the user — structurally mitigates the consumer-training pathology documented in 02:00's emission-policy finding.
> - **(c) Threshold calibration.** Per-mode multi-dimensional parameter sets. The time-window dimension scales to `docs/autonomy_level.md`'s `current_level` (read at each audit fire); scaling pattern adopts `docs/autonomy_ladder.md` Section 5's per-level evidence-gate pattern (looser at L0 — multi-day windows; tighter at L4+ — sub-day windows). Magnitude dimensions (e.g., the ≥50% threshold for Rename-Renders-Itself-Cosmetic) are per-mode-fixed at first ship and calibratable later. If `docs/autonomy_level.md` is absent, default to L0 thresholds + INFO-tier warning (mirrors 24-40's 3-tier failure handling). **The autonomy register is INDEPENDENT of the audit's own history — this is what structurally mitigates the audit's own LAYER-2 risk of "Self-coupling-to-downstream"** (the failure mode warned about in `cognitive_harness/surfacing/references/surfacing.md` §4.3, where a discipline's calibration depending entirely on its own past verdicts erodes its identity over time).
> - **(d) False-depth substrate (the 5th LAYER-2 mode that lacked a substrate from 24-40 or 24-01).** Composite majority-vote of 3 components: (i) Stage-1 drop-rate per parent (from 24-01's drop-with-reason mechanism — sub-routes that all fell back to the W5 meta-reasoning fallback suggest no genuine anchors); (ii) pairwise meta-reasoning distinctness (from 18-58's `why_this_might_be_important` field — sub-routes with interchangeable meta-reasoning text suggest LLM template-filling); (iii) secondary-attribute coordinate-uniformity (from 01:30's 6-tuple per type — sub-routes sharing the same coordinate AND low distinctness are structurally near-identical). The substrate fires a false-depth FLAG when ≥2 of these 3 components exceed component-specific thresholds (majority vote). First-ship weights = equal (1/3 each, maximum-entropy baseline absent prior calibration data). Calibration revival trigger: after 5+ stage-2 invocations accumulate, retune weights against observed TP/FP rates. Target performance: ≥80% true-positive / ≤20% false-positive (practical-detection criterion per Sensemaking's Ambiguity-4 resolution). Fallback if the substrate underperforms after weight calibration: F-Cand-5 KILL-with-seed (drop the false-depth substrate; document the deferral with revival trigger).
>
> **Supporting design completions (P5 + P6 from Decomposition):**
>
> - **Per-mode substrate consumption protocol** = per-mode dispatch table (one row per LAYER-2 mode) with fields {substrate file, section/field, parsing rule, output, 3-tier failure handling, spec-coherence check where applicable}. Pattern inherits 01:00's per-movement-type priority chain. The spec-coherence check (added during critique as refinement R5) applies to Prescriptive-Without-Cycle-Context specifically — the audit reads routeman SKILL.md to verify the Stage-1 enforcement section still commits A1+A3; the verdict distinguishes spec-edit-with-bypass-expected (INFO-tier) from genuine-failure-with-spec-unchanged (FLAG/RE-RUN-tier). This closes the bypass-vs-genuine-failure ambiguity that prosecution raised in critique.
> - **Verdict format + audit-log file** = parallel `_audit.md` file in the inquiry folder (inquiry-scoped invocations) OR at `devdocs/audits/<run-id>/_audit.md` (project-scoped invocations) — hybrid placement matches 24-00's persistence model. Each verdict record carries: invocation_id, timestamp, mode name, status (5-tier: PROCEED / FLAG / RE-RUN / INFO / ERROR — extends the design memo's 3-tier with 24-40's INFO/ERROR per critique's refinement R6), evidence (file-path citations using A1 format), confidence (LOW at L0 default; scales with autonomy), surfaced_to_user flag, next_trigger. Runner surfaces FLAG/RE-RUN with emphasis; ERROR urgently; INFO gently; PROCEED silently — gives the user calibrated attention signals without churn.
>
> **All 5 LAYER-2 modes are detectable at first ship.** The audit covers Calibration-Drift (via 24-40's transition_history substrate) + Prescriptive-Without-Cycle-Context (via 24-01's A1+A3 + spec-coherence check) + Rename-Renders-Itself-Cosmetic (via 24-01's A1+A3 + sliding window over `_navig.md`) + filler-meta-reasoning (via 24-01's Stage-1 drop-with-reason rate at W5) + false depth (via the new majority-vote composite). Q4's substrate gap is closed at first ship; the composite for false-depth ships with a documented fallback path (F-Cand-5 KILL-with-seed if F-Cand-4 underperforms).
>
> **The audit preserves routeman's architectural commitments.** Observe-only — never modifies Route Map / `_navig.md` / autonomy register; never gates routeman's enumeration (D7 in critique was CRITICAL — HIGH). Inputs all file-mediated; output to a file. Isolated-session + file-scanning architecture committed by 16-31 carries forward unchanged. Self-coupling-to-downstream risk addressed by external grounding (D8 in critique was CRITICAL — HIGH); framework-level self-coupling residual acknowledged with revival trigger.
>
> **L0/L1/L2+ phase progression documented.** L0 = human-attended (the user invokes the protocol manually after each routeman run; runner outputs pointer to where to invoke); L1 = runner auto-invokes the protocol as part of its checkpoint sequence; L2+ = the substrate-self-audit pattern (R-Cand-4 deferred alternative) becomes the default as the system Selector inherits substrate-check behavior. Each phase has an explicit extension hook in the design.
>
> **Next Actions from the resolution finding (2 MUST + 4 COULD + 4 DEFERRED):**
>
> - **MUST:** (1) update Q4 in this finding to RESOLVED-WITH-DESIGN (the action this resolution log entry is the result of); (2) write impact note on the routeman design memo at 14:39 referencing this finding.
> - **COULD:** author the protocol file at `cognitive_harness/protocols/layer2_audit.md`; update /MVL + /MVLw runner specs to invoke the audit at routeman invocation-end; author routeman SKILL.md to commit the audit-output reading and verdict-surfacing behavior; calibrate false-depth weights when 5+ stage-2 invocations accumulate.
> - **DEFERRED:** audit-of-audit (the meta-recursive question — research frontier per element E13's deferral in Decomposition); generalization to other Boundary disciplines (research frontier per Scope Check); substrate-self-audit-at-consumer-side as L2+ default (revival when system Selector ships at L2); drop the false-depth substrate as fallback (revival if F-Cand-4 underperforms after weight calibration).
>
> See the resolution finding for the full design + 9-prior Inherited Commitments Re-test + 12-dimension critique adjudication + per-piece options (P1-P6) + the assembly's emergent properties (L0/L1/L2+ progressive automation, bypass-aware, inheritance-not-reinvention, 5-tier verdict surface).

> *[Partial-progress notice from earlier 2026-05-24 update, preserved for traceability — superseded by the RESOLVED-WITH-DESIGN above:]*
>
> *🟡 PARTIAL PROGRESS (2026-05-24): AUDIT SUBSTRATE supplied for 4 of 5 LAYER-2 modes by `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` + `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md`. The audit MECHANISM (who runs the audit, at what cadence, with what threshold calibration) — Q4's actual question — remained OPEN at that point. Mode-by-mode substrate status was: Auto-vs-Judgment Calibration Drift substrate supplied by 24-40's `transition_history`; Prescriptive-Without-Cycle-Context + Rename-Renders-Itself-Cosmetic + filler-meta-reasoning substrates supplied BY CONSTRUCTION by 24-01's A1+A3 enforcement; false depth had no substrate yet. The mechanism + the false-depth substrate were the gaps that the 2026-05-24 06:00 inquiry closed.*

**Pre-substrate content (preserved for traceability):**

The design memo committed three LAYER-2 identity-eroding failure modes (Rename-Renders-Itself-Cosmetic; Prescriptive-Without-Cycle-Context; Auto-vs-Judgment Calibration Drift) with specific recognition signals, but specified no audit mechanism. The Rename-Renders-Itself-Cosmetic recognition signal uses "across 5 consecutive invocations" as a threshold; that threshold is unspecified for calibration to the project's actual invocation rate (which may be one per day at L0 and many per hour at L4+).

**Why this is a frontier.** No current answer: the audit infrastructure does not exist. Gating: without an audit mechanism, LAYER-2 modes are declared but undetectable at runtime; the discipline's identity erodes silently. Net-new: the design memo did not name the audit infrastructure as a deferral; it implied LAYER-2 modes are operational.

**What it gates.** The SKILL.md's failure-mode section and a separate audit-infrastructure piece (which may belong to a meta-discipline like /reflect, or to a new audit discipline). Without commitment, LAYER-2 modes are documentation-only.

**Hardness.** Breadth high (affects all three Layer-2 modes and the entire identity-eroding half of the failure framework). Depth high (no audit mechanism today; full design needed). Articulation medium.

**Candidate resolution path.** A new /MVL2+ inquiry framed as "design the LAYER-2 audit infrastructure for routeman, generalizable to other Boundary disciplines." Key sub-questions: does /reflect run the audit (extending its process-quality scope to identity-quality)? does the discipline self-audit at invocation end (with the self-coupling-to-downstream risk per /surfacing's framework warning)? does a separate audit discipline need creation? how are thresholds adapted to the project's actual invocation rate?

---

##### ✅ Question 5 — What is the file-system protocol between worker sessions, routeman, and any invoking runner? — **RESOLVED-WITH-DESIGN 2026-05-24 07:30**

> **✅ RESOLUTION (2026-05-24 07:30): RESOLVED-WITH-DESIGN by `devdocs/inquiries/2026-05-24_07-30__file_system_protocol_workers_routeman_runners/finding.md`.**
>
> The user invoked /MVLw on Q5's worker-write-side dive-deep. The full pipeline (Su → S → D → I → C) ran at full depth on 7 sub-aspects (the user's 5 gated — folder topology, filename patterns + section structures, write-completeness signaling, routeman completion-emission shape, partial-failure handling — plus FF-1 scan detection and FF-5 scan-scope economy, added because the candidate resolution path explicitly requires resolving all 5 of 16-31's FFs in the same pass). The committed design:
>
> - **(a) Protocol artifact location.** New file at `cognitive_harness/protocols/inquiry_filesystem_protocol.md` — aspect-organized (one section per sub-aspect plus cross-cutting Failure Modes + L2+ Extension Hooks + Cross-References), following the established pattern of existing protocols (`branch_inquiry.md`, `conclude.md`, `outcome_review.md`, `multi_resolution_navigation.md`). Embedded-in-each-runner alternative rejected (documentation drift across multiple artifacts).
> - **(b) Folder topology (resolves FF-2).** Documents the existing canonical inquiry-folder convention — root inquiries at `devdocs/inquiries/<YYYY-MM-DD_HH-MM__slug>/` (per runners); branch inquiries at `[parent]/branches/[branch_id]/` (per `branch_inquiry.md`); project-scoped routeman invocations additionally write to `devdocs/navigation/<run-id>/` (per 24-00 hybrid placement). Routeman performs full recursive traversal at L0.
> - **(c) Filename patterns + section structures.** Documents the existing per-discipline canonical names (`sensemaking.md`, `innovation.md`, `critique.md`, `decomposition.md`, `surfacing.md`) + inquiry-level files (`_branch.md`, `_state.md`) + post-CONCLUDE structure (`finding.md`, `docarchive/`). Each discipline output ends with a Telemetry section emitting a `**Overall: PROCEED**` / `FLAG` / `RE-RUN` verdict line (per existing discipline-spec commitments, consumed by RESUME §2).
> - **(d) Atomic-write convention (MUST; novel piece 1).** Workers write `<canonical_name>.tmp` then `mv <canonical_name>.tmp <canonical_name>` using POSIX `rename(2)` atomicity. Canonical filename only exists when fully written; routeman never reads half-written files. Worker discipline SKILL.md sections commit the convention per a downstream COULD action; runner can detect orphan `.tmp` files at routeman invocation-end as an optional worker-failure indicator. **Eliminates the read-mid-write race; mitigates FF-4 (partial-state read protection).** No new infrastructure (POSIX primitive only).
> - **(e) Per-discipline write-completeness signal — two-part check (novel piece 2; resolves FF-3).** (i) canonical filename exists (via atomic-write) AND (ii) verdict-line `**Overall: PROCEED**` / `FLAG` / `RE-RUN` near file end (per RESUME §2 pattern). Both must be true. Backward-compat: if verdict-line absent, treat as PROCEED with NOTE (same as RESUME §2's handling). Marker-file alternative (`<name>.done`) rejected — new convention + new failure mode for no benefit beyond reusing the existing RESUME pattern.
> - **(f) Routeman's completion-emission shape.** File presence of both `_navig.md` and `routeman.md` (per 24-00 inheritance via atomic-write) PLUS an explicit `routeman_status: COMPLETE` field in `_navig.md` frontmatter (small additive commitment). Status field consumed by downstream consumers (the LAYER-2 audit at 06-00; future cross-inquiry-aggregation work). File-presence-only alternative preserved as KILL-with-seed (simplification fallback if status field proves never-read in practice).
> - **(g) Scan detection + scan-scope economy (novel piece 3; resolves FF-1 and FF-5).** L0 ships full scan of `devdocs/inquiries/` + branch nesting at each routeman invocation (cheap at L0 corpus ~20-50 folders — well under a second). L2+ extension hook: mtime-filtered scan with calibratable transition trigger (default = full-scan time exceeds 5 seconds). Marker-based scan preserved as research frontier (defensive fallback if mtime proves unreliable on the project's filesystems — unlikely on ext4 / APFS / btrfs / ZFS).
> - **(h) Partial-failure handling — detection-only via 3-tier vocabulary (inherits 24-40).** Worker crash mid-write: atomic-write (d) mitigates; orphan `.tmp` ignored; INFO if canonical missing. Malformed file content: parser fails → ERROR halt + flag. Scan timing out: emit partial Route Map + INFO note + idempotent re-run. **Recovery is OUT of protocol scope** (runner/human concern); the protocol describes file-system states + detection rules only.
>
> **All 7 sub-aspects covered + all 5 FFs from 16-31 resolved.** FF-1 → scan detection (g); FF-2 → folder topology (b); FF-3 → write-completeness signal (e); FF-4 → atomic-write (d) + partial-failure handling (h); FF-5 → scan-scope progression (g).
>
> **ROUTEMAN-OUTPUT inheritance from 24-00 preserved verbatim** (scope-out; no re-litigation): `_navig.md` + `routeman.md` naming, hybrid placement, persistent + in-place evolution + append lifecycle all inherited from 24-00.
>
> **Architecture preserved per 16-31:** file-mediated only (no in-context passing); isolated-session + file-scanning; no new infrastructure at L0 (no schedulers, no daemons, no locks). Multi-head L4+ accommodation: current single-worker-per-inquiry-folder invariant makes within-folder concurrent writes not-yet-possible; parallel-worker locking preserved as L4+ extension hook.
>
> **L0/L1/L2+ phase progression documented.** L0 = full-scan + canonical conventions + atomic-write + verdict-line + 3-tier failure + status field (no new infrastructure). L1 = runner can begin auto-validating atomic-write compliance via orphan `.tmp` detection. L2+ = mtime-filtered scan activates if transition trigger fires. L4+ = parallel-worker locking when multi-head ships.
>
> **The design is ~80% documentation of existing conventions + ~20% genuinely-novel** (atomic-write, verdict-line two-part check, scan-scope progression). The novel pieces are small and use no new infrastructure. The structure makes implicit conventions explicit at one canonical location, preventing documentation drift across runners + worker specs.
>
> **2 MUST + 5 COULD + 4 DEFERRED follow-ups** in the resolution finding:
>
> - **MUST:** (1) update Q5 here to RESOLVED-WITH-DESIGN (the action this resolution log entry is the result of); (2) impact note on the LAYER-2 audit design at 06-00 re: new `routeman_status` field availability in `_navig.md`.
> - **COULD:** author the protocol file at `cognitive_harness/protocols/inquiry_filesystem_protocol.md`; update each worker discipline SKILL.md (`sense-making`, `innovate`, `td-critique`, `decompose`, `surfacing`) to commit the atomic-write convention; update runner specs (/MVL, /MVLw) to cross-reference the protocol; commit routeman SKILL.md's completion-emission shape; calibrate the scan-scope transition threshold (default 5 seconds) when corpus growth produces measurable full-scan time.
> - **DEFERRED:** L4+ parallel-worker locking design (revival when multi-head ships AND multiple workers write to same inquiry folder); marker-based scan research frontier (revival if mtime-filtered fails in practice); runner-mediated atomic-write enforcement fallback (revival if discipline-spec atomic-write commitments drift); file-presence-only completion (revival if `routeman_status` field never-read).
>
> See the resolution finding for the full design + 12-prior Inherited Commitments Re-test + 12-dimension critique (6 default + 6 project-specific D7-D12) + the 80%-documentation/20%-novel framing.

> *[Partial-answer notice from earlier 2026-05-24 update, preserved for traceability — superseded by the RESOLVED-WITH-DESIGN above:]*

> *[Partial answer applied 2026-05-24 per `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`: the ROUTEMAN-OUTPUT side of the protocol is committed — file names `_navig.md` (= protocol's `_frontier.md`) and `routeman.md` (= protocol's `navigation.md`); placement hybrid by invocation scope (per-inquiry-folder when inquiry-scoped; `devdocs/navigation/<run-id>/` when project-scoped). The WORKER-WRITE side (folder topology workers write to; filename patterns workers use; write-completeness signaling; routeman's completion-emission shape; partial-failure handling) remains open; Q5's Tier-1 status is unchanged.]*
>
> *[Tier I substantive re-statement applied 2026-05-23 per correction notice above. The original question framed the contract as "how does the runner pass cycle output to the discipline at invocation"; under the corrected isolated-session architecture, the contract is file-system-protocol (workers write specific filename patterns to specific folders; routeman reads specific folder paths), not in-context invocation. Pre-correction reading preserved below.]*

Under the corrected isolated-session architecture, three roles interact via the file system: (a) **worker sessions** running MVL pipelines and writing inquiry-folder artifacts; (b) **routeman** scanning inquiry folders to read those artifacts and writing the Route Map; (c) **the runner** invoking either workers or routeman at appropriate moments. The discipline-vs-runner boundary is canonical, but the file-system protocol joining them has never been formalized.

**Why this is a frontier.** No current answer: no formal file-system protocol exists. Gating: every routeman invocation across /MVL, /MVLw, and future runners depends on the protocol; every worker pipeline's artifact-writing behavior must conform. Net-new: the runner-discipline boundary was assumed but not specified at the file-system level.

**What it gates.** The SKILL.md's invocation-contract section + corresponding updates to runner specs + worker-pipeline conventions. The protocol must cover: (i) which folders routeman scans (per new frontier sub-question FF-2 in the correction finding's Open Questions); (ii) which filename patterns + section structures workers write (per FF-3 + FF-4); (iii) how workers signal write-completeness (per FF-3); (iv) what shape routeman emits to signal Route-Map completion (a file written? a state update in `_state.md`?); (v) what happens on partial failure (worker crash mid-write; routeman scan timing out; malformed file content). The in-context-passing options from the pre-correction framing are eliminated; the protocol is purely file-system-based.

**Hardness.** Breadth high (every invocation across runners; every worker-pipeline writing). Depth high (canonical does not specify; design needed). Articulation medium.

**Candidate resolution path.** A new /MVL2+ inquiry framed as "design the file-system protocol between worker sessions, routeman, and runners for the corrected isolated-session architecture." Likely deliverable: a protocol specification with folder topology, filename patterns, write-completeness signaling, completion-emission shape, partial-failure handling, plus updated sections in routeman's SKILL.md and in runner + worker specs. The inquiry should also resolve or document the correction finding's FF-1 through FF-5 sub-questions in the same pass.

**Pre-correction reading (preserved for traceability):**
> *Original question framing: "What is the explicit contract between the runner and routeman at invocation time, covering how the runner passes cycle output (one document, multiple references, in-context content, or file paths)..."* — The original framing assumed in-context passing was one option among many. The corrected architecture eliminates in-context passing as an option; the protocol is purely file-system-based. The substance of the question (an explicit contract is needed) survives; the object (the protocol's medium) is now committed.

---

##### ✅ Question 6 — What file-shape constraints does routeman implicitly require on upstream worker-produced inquiry artifacts? — **RESOLVED-WITH-DESIGN 2026-05-24 09:00**

> **✅ RESOLUTION (2026-05-24 09:00): RESOLVED-WITH-DESIGN by `devdocs/inquiries/2026-05-24_09-00__file_shape_contracts_upstream_artifacts/finding.md`.**
>
> The user invoked /MVLw on Q6's dive-deep, layering on top of Q5's just-resolved file-system protocol. The full pipeline (Su → S → D → I → C) ran at full depth on 5 sub-aspects (per-discipline contracts; inquiry-level contracts; file-validation layer; enforcement strength; phase progression). The committed design:
>
> - **(a) Contract artifact location.** 8 new sections appended to Q5's protocol file at `cognitive_harness/protocols/inquiry_filesystem_protocol.md` — 5 per-discipline contract sections + 2 inquiry-level contract sections + 1 validation-layer cross-reference section. Co-locates file-shape contracts with the file-system protocol so consumers see contracts and protocol together at one canonical location. Separate-protocol-file alternative rejected (KILL-with-seed — revival if validation scope grows beyond routeman).
> - **(b) Section-level minimum-shape granularity.** Each per-discipline contract names: the required sections that MUST appear + the verdict-line (or equivalent terminal-state marker) + the specific consumer reads the contract supports (adaptive-guidance Stage 1 per 24-01, audit per 06-00, /loop_diagnose pattern reads). Field-level and full-schema alternatives rejected as premature.
> - **(c) Per-discipline contracts (5).** `sensemaking.md` — SV1, SV6, Phase 1, Telemetry verdict-line, `## User Input` section. `innovation.md` — Mechanism Coverage Telemetry section with verdict-line. `critique.md` — Phase 3, per-candidate SURVIVE/REFINE/KILL markers (consumed by adaptive-guidance Stage 1 per 24-01), Convergence Telemetry. `decomposition.md` — Final Deliverable (Question Tree or equivalent) + Self-Evaluation; verdict-line OPTIONAL at L0 with backward-compat (decomposition currently emits Self-Evaluation in lieu of the standard verdict-line per RESUME §2 pattern). `surfacing.md` — Traversal Trace or State Summary + Telemetry verdict-line.
> - **(d) Inquiry-level contracts (2).** `_state.md` — Flow-type, Pipeline, Progress, Iteration, Status, Next Discipline. `_branch.md` — Question + Goal (preserves the 5-meta-aspect coverage the runners write at inquiry creation per `cognitive_harness/MVLw/SKILL.md`'s template).
> - **(e) Validation layer in `routeman` SKILL.md (novel piece 2; not a separate protocol).** Parser walks markdown sections, dispatches per-discipline via a lookup table (inherits the per-mode dispatch pattern from the LAYER-2 audit at 06-00 and from adaptive-guidance at 24-01), emits via a 3-tier vocabulary (INFO / WARN / ERROR — inherits 24-40). Single-consumer scope avoids premature generalization; a separate validation protocol is KILL-with-seed (revival if validation scope grows beyond routeman).
> - **(f) Validation-without-enforcement at L0 (novel piece 3).** Validation emits warnings only, never halts workers or routeman. L1+ progression path opens enforcement options (a KILL-with-seed for L1+ revival named in the resolution finding). Hard-enforcement-at-first-ship rejected as identity-violating (premature coupling between validation and worker progress).
> - **(g) `/decompose` verdict-line backward-compat (novel piece 1).** Verdict-line OPTIONAL at L0 (decomposition currently emits Self-Evaluation in lieu of the standard verdict-line per RESUME §2 pattern); COULD at L1+ for symmetry with other disciplines. Hard requirement-at-first-ship rejected (would break the existing /decompose).
> - **(h) R1 drift-coordination meta-process (novel piece 4).** When a discipline spec changes the heading text of a required section, the protocol's corresponding contract section MUST be updated in the same commit. Surfaced by the Critique phase's adversarial round as a two-file drift risk (the discipline spec + the protocol contract section); the meta-process closes the drift gap without new infrastructure.
>
> **All 5 sub-aspects covered.** Per-discipline contracts (c); inquiry-level contracts (d); validation layer (e); enforcement strength (f); phase progression (e/f/g aggregated as L0/L1/L2+ hooks).
>
> **Consumer reads preserved verbatim:** adaptive-guidance Stage 1 (per 24-01 — WHY-anchor reads via per-movement-type chain); audit per-mode dispatch (per 06-00 — Stage-1 drop-rate / verdict-line presence / per-candidate markers consumed by the 5 LAYER-2 modes); /loop_diagnose failure-pattern reads. Contracts are designed to be read-rather-than-written by these consumers; routeman is the only producer-side validator at first ship.
>
> **Architecture preserved per 16-31 + Q5:** file-mediated only; isolated-session + file-scanning; no new infrastructure at L0 (parser is plain markdown section walk). Single-consumer scope (routeman) at first ship; broader validation responsibility (audit-side, runner-side) preserved as L1+ progression options.
>
> **L0/L1/L2+ phase progression documented.** L0 = validation-without-enforcement at warnings + verdict-line OPTIONAL for /decompose + section-level minimum-shape. L1+ = orphan-warning auto-escalation hook + /decompose verdict-line COULD + per-discipline spec edits at L1+ to add `## User Input` and any currently-implicit verdict-line emissions. L2+ = audit-side contract-conformance check + enforcement-strength calibration + parser specialization (if section-level proves insufficient).
>
> **The design is ~80% documentation of existing discipline-spec conventions + ~20% genuinely-novel** (verdict-line backward-compat + validation layer + validation-without-enforcement + drift-coordination meta-process). The pattern matches Q5's (the protocol file's body uses the same 80/20 framing). The contracts make implicit cross-file conventions explicit at the same canonical location as Q5's file-system protocol.
>
> **1 MUST + 5 COULD + 4 DEFERRED follow-ups** in the resolution finding:
>
> - **MUST:** update Q6 here to RESOLVED-WITH-DESIGN (the action this resolution log entry is the result of).
> - **COULD:** author the 8 new protocol sections at `cognitive_harness/protocols/inquiry_filesystem_protocol.md`; author the validation layer (parser + per-discipline dispatch table + 3-tier emitter) in `routeman` SKILL.md; per-discipline spec edits at L1+ (e.g., add `## User Input` section to /sense-making's spec; add verdict-line emissions where currently implicit); add the `/decompose` verdict-line at L1+ for symmetry; calibrate L2+ enforcement-strength promotion criteria.
> - **DEFERRED:** generalization to non-routeman consumers (revival if a second consumer arrives needing the same contracts); per-runner contract refinement (revival if multiple runners introduce divergent file conventions); parser specialization beyond markdown section walk (revival if section-level granularity proves insufficient); separate validation protocol (revival if validation scope grows beyond routeman — the KILL-with-seed from Critique).
>
> See the resolution finding for the full design + 14-prior Inherited Commitments Re-test + 12-dimension critique (6 default + 6 project-specific D7-D12) + the R1 drift-coordination refinement.

> *[Pre-resolution content (preserved for traceability — historical record of partial-adjacency note + Tier I substantive re-statement + original frontier-question body) follows below:]*

> *[Partial-adjacency note applied 2026-05-24 per `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`: the persistence inquiry brought `multi_resolution_navigation.md`'s frontier-candidate-record schema as the base shape for ROUTEMAN'S OWN `_navig.md` file. This is adjacent to but DOES NOT resolve Q6 — Q6 targets UPSTREAM cycle-artifact file shapes (`sensemaking.md`, `innovation.md`, `critique.md`, `_state.md` Status markers) that routeman reads during its scan; the protocol's schema is for routeman's own output file. Q6's Tier-1 status is unchanged. The persistence inquiry's new FF-2 (routeman-specific schema extensions to the frontier-candidate-record) is tracked as new Question 12 below.]*
>
> *[Tier I substantive re-statement applied 2026-05-23 per correction notice above. The original question asked about in-context cycle-output data shapes; under the corrected isolated-session architecture, the constraints are on FILE shapes — frontmatter conventions, filename patterns, section structures inside inquiry-folder artifacts written by workers. Pre-correction reading preserved below.]*

Routeman scans worker-produced inquiry-folder artifacts to reconstruct cycle outcomes. The upstream disciplines (/sense-making, /innovate, /td-critique, /reflect) have output specifications, but no explicit FILE-shape contracts that routeman could rely on when scanning. Routeman's identity sentence names "the cycle's artifacts" as input (post-correction wording); the artifact-shape constraints — what frontmatter routeman expects; what filename patterns it recognizes; what section structures it parses from each discipline's output file — are unspecified.

**Why this is a frontier.** No current answer: no formal file-shape contracts exist in upstream discipline specs. Gating: routeman's scanning operation depends on the files being shape-conformant; without contracts, the first non-conformant file silently degrades routeman's reconstruction (for example, a `critique.md` without explicit SURVIVE/REFINE/KILL verdict markers; a `sensemaking.md` without identifiable anchor sections; a worker writing without `_state.md` Status: COMPLETE — which intersects FF-3 write-completeness signaling). Net-new: the design memo specifies the input contract at a high level without enumerating file-shape constraints.

**What it gates.** The SKILL.md's file-scanning convention specification + coordinated commitments in upstream discipline specs (frontmatter conventions, section structures, terminal-state signaling). Without commitment, the cycle-consumer contract is held together by convention rather than enforcement; routeman's parsers may misread non-conformant files.

**Hardness.** Breadth high (affects all upstream disciplines + the worker-pipeline writers; foundational for routeman's file-read integrity). Depth high (no formal file-shape contracts in upstream specs today). Articulation high (the assumption was inherited silently; most agents assume the cycle's file output is well-shaped without checking).

**Candidate resolution path.** A new /MVL2+ inquiry framed as "audit and commit file-shape contracts across the upstream pipeline's inquiry-folder artifacts that routeman scans." This is a multi-discipline coordination inquiry of substantial scope (two to three weeks). Likely deliverable: per-discipline file-shape contract (frontmatter; section names; terminal-state markers) + a file-validation layer in routeman's SKILL.md that detects non-conformant files during scan and flags rather than silently degrading. An acceptable alternative for shipping: a documented file-validation layer in routeman's SKILL.md without coordinated upstream-spec edits (validation-without-enforcement).

**Pre-correction reading (preserved for traceability):**
> *Original question framing: "What shape constraints does routeman implicitly require on upstream cycle outputs?" — under the assumption that cycle outputs were passed in-context.* The substance survives (an unspecified shape contract is a frontier); the object shifts from in-context data shapes to file shapes. Most of the original question's content carries forward with this object-shift; the file-shape framing makes the specific shape-axes (frontmatter, section structure, filename, terminal-state) concrete.

---

#### Tier 2 — Watch-list-during-SKILL.md (four questions)

Each Tier 2 question can ship in the SKILL.md as a documented placeholder or default policy without making a silent commitment. Track them as explicit open-question notes in the SKILL.md so they remain visible during future revisions and are surfaced for the structural-layer follow-up.

---

##### Question 7 — Is the 16-type movement-type taxonomy structurally complete, or should routeman accommodate type emergence? — **PARTIALLY-RESOLVED 2026-05-24** (categorization sub-aspect resolved; completeness sub-aspect remains Tier-2 watch-list)

*The user re-framed Q7 from completeness to categorization+naming in 2026-05-24. The categorization sub-aspect is now resolved by `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md`: a hybrid scheme with primary axis **Movement Family** (3 action-noun groups — Progression Moves 6 types / Re-orientation Moves 5 types / Coordination Moves 5 types, surfaced from the design memo's implicit semicolon-separated 6-5-5 grouping) + 6 secondary attributes per type (direction, intent, autonomy_readiness_tier, auto_class, scope, has_sub_actions); per-type coordinate table preserves all 16 types unchanged (REVISIT counts as 1 with `has_sub_actions: true`; TERMINATE in Progression Family as forward-progression endpoint). The original completeness sub-aspect — whether the 16 are the right set — survives as a Tier-2 watch-list item with the longitudinal-observation revival trigger named in this question's original Candidate Resolution Path below.*

The 16-type taxonomy (DEEPEN, REFINE, PURSUE SEED, INVESTIGATE FRONTIER, DEVELOP, TERMINATE; RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH, DIAGNOSE; REVISIT with sub-actions RESURRECT/INVALIDATE/REVERT, UNBLOCK, MERGE, TEST, CONSOLIDATE) was inherited verbatim from canonical /avigation without empirical completeness testing. The design memo's lineage decision to inherit this taxonomy did not test the completeness assumption.

**Why this is a frontier.** No current answer: completeness was assumed by canonical. Gating: affects the route-card schema's Movement Type field (closed enum versus growable enum) and the Excluded-section feature's handling of structurally-inapplicable types. Net-new: the design memo inherited the assumption silently.

**What it gates.** Whether the SKILL.md's schema commits Movement Type as a fixed enum or a growable enum. Tier 2 because the SKILL.md can ship with the 16 as-is and a note: "completeness untested empirically; file a /MVL2+ inquiry to extend the taxonomy if a real-world next-move falls outside the 16 types."

**Hardness.** Breadth medium (schema and one feature). Depth medium (a corpus survey for new types is the natural method). Articulation high (the assumption was inherited silently; the design memo did not name it as untested).

**Candidate resolution path.** Longitudinal observation. After routeman ships, monitor whether any actual next-move falls outside the 16 types over the next 20-30 inquiries. If yes, file a taxonomy-extension inquiry. If no, calibrate confidence in completeness over time.

---

##### ~~Question 8~~ — DEMOTED 2026-05-23: How does the per-route Continuation Note get loaded by a future agent across sessions and across inquiries?

> **⚠️ This question has been DEMOTED out of frontier status as of 2026-05-23, per the correction inquiry at `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` Tier I demotion.**
>
> **Reasoning:** Under the corrected isolated-session + file-scanning architecture, the cross-inquiry persistence concern that motivated Question 8 is resolved structurally. Routeman in its isolated session naturally scans across inquiry folders when prompted; inquiry folders persist on the filesystem; when a RESURRECT REVISIT sub-action references a route from a prior inquiry, routeman reads the prior inquiry's `finding.md` (or equivalent artifact carrying the Continuation Note) during its scan. The persistence mechanism is the filesystem itself, plus the existing inquiry-folder convention; no new persistence layer is needed.
>
> **What survives as observation (not frontier):** the question's substance — that Continuation Notes need to be accessible across inquiries for RESURRECT REVISIT to operate — is now a structurally-resolved property of the corrected architecture, not a frontier requiring new design. The original question framing (which assumed in-context passing meant cross-inquiry persistence would need new infrastructure) was the wrong frame; under file-scanning, the persistence is automatic.
>
> **Effective frontier-question count after demotion:** Tier 2 watch-list shrinks from 4 to 3 (Question 7 taxonomy completeness; Question 9 /reflect mapping shape; Question 10 pre-maturity emission policy). Total selected questions: 6 Tier-1 + 3 Tier-2 = **9 frontier questions** for SKILL.md authoring. *[Superseded by the top-of-file Resolution log; subsequent updates: Q1 + Q3 RESOLVED-WITH-DESIGN; Q7 PARTIALLY-RESOLVED; Q9 REMOVED. See top of file for current effective count.]*
>
> **Separate prosecution concern noted but not promoted to new frontier:** during the correction inquiry's Critique step, an adversarial prosecution raised "workers may need access to prior-inquiry Continuation Notes during cycle processing." This is a different question from Question 8 (it's about worker architecture, not routeman). It was examined and found to NOT gate routeman's design — workers access whatever they need from the project corpus when invoked, same as they always do. If the concern surfaces empirically as a real issue, it would warrant a separate inquiry; it is not a routeman frontier.
>
> **Reversal trigger:** if a specific cross-inquiry persistence failure case emerges that file-scanning does not address (for example, Continuation Note content needs transformation or filtering across inquiry boundaries that pure file-reading cannot provide), the question may be reinstated as a frontier with the updated framing.

**Pre-demotion content (preserved for traceability — was Tier 2 watch-list under the in-context architecture):**

> *The Continuation Note attribute (per the design memo's route-card schema, field A12: "what a future warm-up should remember about this route") implies a persistence mechanism that the design memo did not specify. Within one inquiry, the markdown file IS the persistence — agents read the inquiry folder. Across inquiries, the persistence question is harder: when a RESURRECT REVISIT sub-action in a later inquiry references a route from an earlier inquiry, who reads the earlier inquiry's Continuation Note?*
>
> *Hardness was borderline ★★/★★★: bounded ★★ on cross-session-within-one-inquiry; ★★★ on cross-inquiry resurrection sub-aspect. The candidate resolution path was defer-with-revival-trigger (3+ cross-inquiry resurrections requiring Continuation Note context).*
>
> *Under the corrected architecture, both readings are resolved: within-inquiry reading is trivially the file; cross-inquiry reading is routeman's natural scan across inquiry folders. The demotion stands.*

---

##### ~~Question 9~~ — REMOVED 2026-05-24: What is the operational mapping shape from /reflect's process-quality observations to routeman's guidance pointers?

> **🗑️ This question has been REMOVED from the frontier-question list as of 2026-05-24.**
>
> **Reasoning:** `/reflect` is not canonical at the project's current state. The question presupposes that `/reflect` has a runtime spec routeman can couple with; without that prerequisite, the mapping-shape question is premature. The reflect-routeman coupling will resurface when (and if) `/reflect` becomes canonical; at that point a fresh frontier question on the mapping shape can be filed with the then-current `/reflect` spec as input.
>
> **What survives:** the design memo's deferred reflect-routeman coupling commitment remains (the deferral itself is independent of this question's status); the SKILL.md authoring inquiry can ship without a reflect-coupling section. If `/reflect` later becomes canonical, the coupling spec is a fresh design problem; this finding's Q9 is not the anchor for that future work.
>
> **Pre-removal content (preserved for traceability):**
>
> > *Canonical /navigation says "R's observations become N's guidelines" without naming the mapping shape. The routeman design memo deferred the reflect-routeman coupling specification to a structural-layer follow-up, but the deferral text said "describe the coupling" without committing to the specific mapping shape — direct one-to-one (each observation becomes a pointer), aggregation (multiple observations summarize into one pointer), filtering (only observations exceeding a threshold), or transformation (a rule converts observation shape to pointer shape).*
> >
> > *Was Tier-2 watch-list. Candidate resolution path: the deferral's revival trigger ("when /reflect's spec is loaded"). Removed because the trigger condition (/reflect spec existence) hasn't materialized; the question is premature.*

---

##### ✅ Question 10 — What is the emission policy for INVESTIGATE FRONTIER and REVISIT movement-types before Baldwin-cycle calibration maturity? — **RESOLVED-WITH-DESIGN 2026-05-24**

> **✅ RESOLUTION (2026-05-24 02:00): RESOLVED-WITH-DESIGN by `devdocs/inquiries/2026-05-24_02-00__investigate_frontier_revisit_emission_policy/finding.md`.**
>
> The user explicitly invoked the full /MVL2+ pipeline at full capacity with "dive deep + list options + pluses/minuses." The candidate resolution path proposed below ("settle the policy at SKILL.md authoring time with a default that ships and is auditable") was upgraded to a dedicated /MVL2+ inquiry, executed in full, and produces the SKILL.md-author-able policy directly. The committed design:
>
> - **Policy = Option 13 (Hybrid): confidence-graduated emission + per-route-type-split.** The two route types are treated asymmetrically because they are structurally asymmetric (auto-vs-judgment class per the design memo's 12/4 partition; Progression-vs-Coordination family per the taxonomy categorization at `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md`).
> - **INVESTIGATE FRONTIER rule:** emit ALWAYS when routeman's enumeration step identifies a frontier signal. Attach a D1 confidence label.
> - **REVISIT rule:** emit when at least 3 prior cycles exist for the relevant scope (a **natural-availability filter** — distinguished from identity-violating gating because REVISIT's three sub-actions RESURRECT/INVALIDATE/REVERT are structurally undefined at zero prior cycles; the filter reflects mechanism-honesty about operands, not policy-judgment about whether to emit). When emitted, attach the same D1 label. Sub-actions inherit REVISIT's policy uniformly at first ship.
> - **D1 confidence scheme:** three levels — LOW (per-discipline N < 20), MED (20 ≤ N < 30), HIGH (N ≥ 30, matching the Baldwin maturity gate in `docs/desc.md`). Thresholds calibratable at SKILL.md authoring.
> - **Per-discipline-N source: deferred** to SKILL.md authoring. **First-ship fallback:** all FRONTIER/REVISIT emissions receive `confidence=LOW`. Graceful degradation — the LOW label provides interpretation context ("this is pre-maturity; treat with appropriate caution") even when variance is dormant.
> - **First-Ship Operational Note (load-bearing for honesty):** under the fallback, the D1 scheme's three-level variance is dormant; every emission carries LOW. Variance activates only when the per-discipline-N source ships. Consumers should re-attend to the field's variance at that transition.
> - **Two-epoch framing (emergent insight):** Epoch 1 (first-ship, fallback active) ships the labeling infrastructure + identity preservation + per-type rules; variance dormant. Epoch 2 (post-source, per-discipline-N source ships) activates label variance; the per-consumer label-utility audit becomes operable.
>
> **Pollution-framing test (central reframing):** the source-question's pollution framing was tested via direct read of `docs/desc.md`. The verbatim text names Baldwin's seed source as "hunch-pattern seeds" — i.e., /intuit Phase β+ hunches calibrated against Retrospective RC delta — NOT routeman emissions. Verdict: HIGH confidence framing is currently overstated; MEDIUM confidence framing is permanently overstated (Baldwin's spec hasn't shipped). The defensive confidence-labeling above is preserved as **zero-cost future-proof insurance**: the per-route confidence field already exists per the design memo, so attaching labels costs nothing; if Baldwin's spec when shipped commits routeman-consumption with a confidence-filter, the labels are already in place.
>
> **Downstream-decides-via-metadata pattern:** routeman emits with labels; each downstream consumer applies its own filtering. Human Selector at L0–L1 (current state) reads confidence as one input to triage judgment. Baldwin (when shipped) consumes per Baldwin's spec, not routeman's. /intuit Phase β+ (when shipped) consumes per /intuit's spec. System Selector at L2+ consumes per the system-Selector spec. Routeman does NOT pre-filter for downstream specifics.
>
> **Enumerate-all identity preserved:** no movement type is gated. Gating-based options (the 15-option pros/cons table in the resolution finding documents this in full) were rejected via the identity test. The REVISIT natural-availability filter is mechanism-honest about operands, not policy-gating.
>
> **15-option pros/cons table (the user's explicit deliverable):** the resolution finding's body contains the full 15-row table with description, pros, cons, verdict, and reason per option. 12 options KILLed or REJECTed; 2 DEFERRED (Option 5 per-sub-action REVISIT split; Option 7 per-discipline-aware policy absorbed into Option 13); Option 13 ADOPTED.
>
> **Consequences for routeman:**
> - The SKILL.md author can encode the policy directly without re-running option evaluation.
> - The pollution-framing test changes the framing of the routeman-Baldwin interaction: it is currently a labeling-and-defensive-insurance interaction, not a gating-prevention interaction.
> - The per-discipline-N source decision becomes a SKILL.md-authoring sub-task with operational candidate sources (extend `_meta_state.md`; introduce `docs/discipline_calibration.md`; inquiry-folder count heuristic).
>
> **7 frontier flags from the resolution finding** propagate forward: per-discipline-N source decision (revival at SKILL.md authoring; time-sensitive); Baldwin spec coordination (revival when Baldwin's spec is being written; with sequencing clause if Baldwin ships before the per-discipline-N source is settled); per-sub-action REVISIT differentiation (observable revival when practice surfaces RESURRECT/INVALIDATE/REVERT asymmetry); routeman-self-N as a second confidence axis (blocked on LAYER-2 audit infrastructure = Q4); REVISIT ≥3-prior-cycles threshold calibration (observable revival); generalization to other calibration-sensitive types (research frontier; e.g., other Coordination Moves like TEST or CONSOLIDATE); per-consumer label-utility audit (new follow-up added by Critique; revival when per-discipline-N source ships and labels begin to vary, mitigating the consumer-training pathology risk).
>
> See the resolution finding for the full design + the 11-row Inherited Commitments Re-test (with test-methodology note) + the 15-option pros/cons table + the two-epoch framing + the First-Ship Operational Note.

**Pre-resolution content (preserved for traceability):**

The Baldwin-cycle's seed-generation maturity gate is documented in `docs/desc.md`: seed-generation activates after the project reaches calibration maturity (N≥30 inquiries per discipline). Routeman's INVESTIGATE FRONTIER and REVISIT movement-types are seed-candidates — they generate next-move proposals that can become Baldwin-cycle seeds. The intersection of these two endgame mechanisms is unspecified: does routeman emit these types pre-maturity (polluting the Baldwin cycle's seed quality), gate them at N≥30 (losing useful next-move types until maturity arrives), or emit them with appropriate confidence labels at low maturity?

**Why this is a frontier.** No current answer: the intersection between Baldwin maturity and routeman's enumeration is not articulated. Gating: per the accommodation rule, the SKILL.md must commit to a policy that works both pre-maturity and post-maturity; a silent default would either over-emit or under-emit. Net-new: the design memo did not articulate this intersection.

**What it gates.** The SKILL.md's behavior for INVESTIGATE FRONTIER and REVISIT types. Tier 2 because the SKILL.md can ship with a default policy (always emit with confidence-LOW pre-maturity; promote to confidence-MED or HIGH as maturity advances) and a note documenting the policy for later review.

**Hardness.** Breadth medium (affects 2 of 16 movement types). Depth medium (a policy choice plus a threshold). Articulation high (the intersection between Baldwin maturity and routeman's enumeration was not articulated).

**Candidate resolution path.** Track in the SKILL.md as policy documentation. Revival trigger: when the project's inquiry count approaches N=30 per discipline (calibration maturity threshold), re-evaluate the policy. An acceptable alternative: settle the policy at SKILL.md authoring time with a default that ships and is auditable. *[2026-05-24 02:00: the "acceptable alternative" path was upgraded to a dedicated /MVL2+ inquiry per the user's "dive deep + full capacity" framing; see resolution above.]*

---

#### Tier 1 additions from the persistence-and-invocation inquiry (added 2026-05-24)

The two questions below were surfaced by `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` and are added here as new Tier-1 frontiers. They post-date the original "exactly 10" curated commitment; the cap is intentionally broken to surface routeman's actual frontier-question landscape after the persistence adoption.

---

##### Question 11 — When should a route be promoted to its own SIC inquiry (`branch_inquiry.md`) vs stay as a sub-route in the route map (`multi_resolution_navigation`'s child-map convention)?

The persistence inquiry adopted a two-tier policy for route expansion: sub-routes within a route map use `multi_resolution_navigation`'s child-map convention (`output_root/children/<route-id>/`); route-to-inquiry promotion uses `branch_inquiry.md` to spawn a child SIC pipeline. The two-tier boundary is committed but the THRESHOLD that determines which tier applies to a given route is open. Without an explicit rule, the SKILL.md author either makes a silent choice (e.g., "always sub-route by default") or proceeds with documented risk.

**Why this is a frontier.** No current answer: the threshold rule does not exist. Gating for implementation: the two-tier policy is incomplete without the threshold; the SKILL.md must commit a rule that says "this is a sub-route" vs "this warrants promotion to an inquiry." Net-new: the persistence inquiry committed the policy but explicitly flagged the threshold as open (FF-1).

**What it gates.** The SKILL.md's procedural specification for the directional-mode invocation. Specifically: when routeman expands sub-routes under a parent, what determines which sub-routes are route-map entries vs which are promoted to their own inquiries? Likely heuristic candidates: route's expected investigation effort exceeds a threshold; route's verdict has independent ship-value; route's investigation requires its own decomposition; route is selected interactively by the user vs auto-emitted by routeman.

**Hardness.** Breadth high (affects every directional-mode invocation; affects the route-map shape; affects how inquiries spawn under the branch_inquiry protocol). Depth medium (the threshold is a heuristic decision; not from-scratch design but a calibration). Articulation medium.

**Candidate resolution path.** Resolution can happen inside the SKILL.md authoring inquiry by committing a default heuristic (e.g., "sub-routes by default; user-trigger or routeman-flagged-high-effort promotes to inquiry") with documented revival trigger ("revise when N routes have been mis-classified at the threshold in practice"). A dedicated /MVL2+ inquiry is overkill unless the heuristic proves operationally wrong.

---

##### Question 12 — What routeman-specific extensions to `multi_resolution_navigation`'s frontier-candidate-record schema are required?

> **🟡 Partial impact notice 2026-05-24 01:00 (source: `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md`):** the `meta_reasoning_revision_history` field listed below as a candidate extension has been **actively consumed** by 24-01's MS5 mode-selection override. When a Route's `meta_reasoning_revision_history` shows ≥2 prior recalibrations, MS5 overrides the standard MS1 mode-allocation to `expand-on-selection` (deferring guidance to the selection moment when the latest context is available). The field's status shifts from "optional FF-2 candidate" to "has a load-bearing operational consumer in the adaptive-guidance mechanism" — SKILL.md authoring's decision on whether to ship the field at first ship is now informed by this concrete use case. The field remains technically optional (when absent, MS5 simply doesn't fire and MS1 applies as default), but shipping without it disables the recalibration-aware mode override. The other candidate extensions (`why_this_might_be_important` versioning; `mode_switch_log`; `routeman_invocation_id`) are unaffected by 24-01.

The persistence inquiry adopted the protocol's frontier-candidate-record schema (candidate_id, parent_map, parent_route, route_type, priority, status, expansion_reason, eligibility, eligibility_reason, scheduling_reason, child_map_path, blocked_by, continuation_note) as the base shape for routeman's own `_navig.md`. The adoption explicitly flagged that routeman-specific extensions are likely needed but did not commit them (FF-2 in the persistence inquiry). Candidate extensions surfaced as scope-setting examples: `why_this_might_be_important` (carrying the per-Route meta-reasoning field from `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md`) with versioning to capture recalibration changes; `meta_reasoning_revision_history` (optional; **now actively consumed by 24-01's MS5 — see notice above**); `mode_switch_log` (records generic vs directional mode origin); `routeman_invocation_id` (for multi-head loop attribution; anticipated by extrapolation).

**Why this is a frontier.** No current answer: the routeman-specific extensions are not committed. Gating for implementation: the SKILL.md's schema specification depends on which extensions are committed; under-specifying loses load-bearing fields (e.g., versioning the meta-reasoning field is required to preserve `2026-05-23_18-58`'s commitment under recalibration). Net-new: the persistence inquiry committed the base schema but explicitly deferred the extensions.

**What it gates.** The SKILL.md's schema specification for `_navig.md`. Specifically: which of the candidate extensions (`why_this_might_be_important` versioning; `meta_reasoning_revision_history`; `mode_switch_log`; `routeman_invocation_id`) are committed; whether additional extensions emerge during SKILL.md authoring; whether the schema accommodates anticipated multi-head writes without breaking changes.

**Hardness.** Breadth high (every persisted Route depends on the schema; recalibration mechanics depend on the versioning fields; multi-head accommodation depends on attribution fields). Depth medium (the candidate extensions are known; the work is committing them + testing the recalibration semantics). Articulation medium.

**Candidate resolution path.** Resolution belongs in the SKILL.md authoring inquiry. The SKILL.md author commits the schema extensions explicitly (with each extension's reason cited to the prior commitment it preserves or the future capability it enables). Acceptable alternative: ship the SKILL.md with the protocol's base schema only and a documented placeholder for routeman-specific extensions, with revival trigger when recalibration in practice surfaces a field that's needed.

---

#### Tier 2 additions from the persistence-and-invocation inquiry (added 2026-05-24)

The three questions below were surfaced by the persistence inquiry as residual frontiers that can ship in the SKILL.md as documented placeholders without making silent commitments.

---

##### Question 13 — What is the lifecycle policy for `_navig.md` (the routeman persistence ledger)?

The persistence inquiry adopted `multi_resolution_navigation.md`'s default lifecycle (persistent across invocations + in-place status evolution + append for new candidates discovered on re-invocation). Alternative lifecycle models exist and may be more appropriate for routeman-specific needs. The persistence inquiry's FF-3 enumerated four initial alternatives: (i) snapshot-per-invocation (each invocation produces a separate snapshot file); (ii) append-only-log without in-place evolution (every status change is a new log entry; readers reconstruct current state from the log); (iii) full revision-history per field (each field carries its own history of changes with timestamps); (iv) the protocol-default (currently adopted). The FF-3 list may not be exhaustive; the SKILL.md authoring inquiry may discover more.

**Why this is a frontier.** No current answer at the policy-discrimination level: the protocol-default was adopted, but the alternatives have not been adversarially tested against routeman's specific needs (e.g., the LAYER-2 audit Q4's requirement for auditability across invocations). Gating: Tier-2 because the SKILL.md can ship with the protocol-default and a documented review trigger; promotion to Tier-1 fires if a routeman-specific need surfaces that the protocol-default cannot satisfy. Net-new: the persistence inquiry's FF-3.

**What it gates.** The SKILL.md's lifecycle commitment for `_navig.md`. Tier 2 because the protocol-default is a defensible placeholder.

**Hardness.** Breadth medium (affects only the `_navig.md` lifecycle, not other artifacts). Depth medium (four alternatives are named; comparison work is bounded). Articulation high (the protocol-default was adopted without testing all alternatives; the question surfaced only because the persistence inquiry's Inherited Frame Audit fired at the lifecycle commitment).

**Candidate resolution path.** Track in the SKILL.md as policy documentation. Revival trigger: when the LAYER-2 audit (Question 4) or another routeman-specific need surfaces a lifecycle requirement the protocol-default cannot satisfy. An acceptable alternative for the SKILL.md authoring inquiry: settle the policy at authoring time with one of the four alternatives committed plus a documented revival trigger.

---

##### Question 14 — How does routeman aggregate across multiple inquiry-scoped `_navig.md` files to produce a project-level Route Map summary?

The persistence inquiry committed hybrid placement: inquiry-scoped invocations write `_navig.md` to the inquiry folder; project-scoped invocations write to `devdocs/navigation/<run-id>/`. A use-case may emerge where routeman is invoked at project-scope and needs to AGGREGATE FROM multiple inquiry-scoped `_navig.md` files (rather than just writing its own project-scoped file). The aggregation mechanism (read across N inquiry folders; merge candidates; dedupe; preserve per-inquiry provenance) is unspecified.

**Why this is a frontier.** No current answer: the aggregation mechanism is undefined. Gating: Tier-2 because aggregation is not needed until a use-case forces it; the central-placement mode handles project-scope from scratch without needing to aggregate from per-inquiry files. Net-new: the persistence inquiry's FF-4.

**What it gates.** The SKILL.md's project-scope behavior. Tier 2 because the SKILL.md can ship with project-scope writing to `devdocs/navigation/<run-id>/` as the only project-scope mode; if aggregation-from-per-inquiry-files is needed later, a follow-up specification is added. The interaction with Question 2 (multi-worker aggregation under the file-scanning architecture) is relevant — both questions are about aggregation but at different scopes (Q2 = multi-worker per invocation; Q14 = multi-inquiry across invocations).

**Hardness.** Breadth medium (affects only the project-scope routeman mode; does not affect inquiry-scope). Depth high (the aggregation requires dedup criteria, provenance preservation, merge semantics — non-trivial). Articulation high (the question's existence was not visible until the hybrid placement was committed; without per-inquiry persistence, there's nothing to aggregate FROM).

**Candidate resolution path.** Defer with revival trigger. Revival trigger: observable — when a project-level Route Map summary is needed across multiple inquiry-scoped `_navig.md` files. If revived, a dedicated /MVL2+ inquiry should design the aggregation protocol with explicit dedup + provenance + merge semantics.

---

##### Question 15 — What is the relationship between `_navig.md` and `_state.md` (inquiry pipeline status) when both live in the same inquiry folder?

The persistence inquiry placed `_navig.md` in inquiry folders for inquiry-scoped routeman invocations. The `_state.md` file (the inquiry pipeline status, written by /MVL or /MVL+ runners) lives in the same folders. Today the two files are PEERS without cross-reference: `_state.md` tracks the inquiry's discipline-pipeline progression; `_navig.md` tracks routeman's invocation status + route map metadata. A use-case may force a richer relationship — for example, `_state.md` needing to know which routeman invocations have occurred (and their outputs), or `_navig.md` needing to know which inquiry pipeline phase the inquiry is currently in for context-aware recalibration.

**Why this is a frontier.** No current answer: the relationship between the two files is "peers that don't cross-reference," which is the lowest-coupling default but may not survive use-cases that emerge. Gating: Tier-2 because the SKILL.md can ship with the peers-without-cross-reference default; promotion to Tier-1 fires when a use-case forces cross-reference. Net-new: the persistence inquiry's FF-5.

**What it gates.** The SKILL.md's behavior when both `_navig.md` and `_state.md` are present in the same inquiry folder. Tier 2 because the peers-without-cross-reference default ships without silent commitment.

**Hardness.** Breadth low (affects only inquiry-scoped routeman mode in folders where /MVL or /MVL+ has also run). Depth medium (the cross-reference design depends on the use-case that forces it; can't be designed in the abstract). Articulation medium (the question surfaced naturally from the placement decision).

**Candidate resolution path.** Defer with revival trigger. Revival trigger: observable — when a use-case forces cross-reference (e.g., `_state.md` needs to know about `_navig.md` for inquiry completion criteria, or routeman's recalibration needs to know the inquiry's current pipeline phase for context-aware re-scoring of routes).

---

### 3. Notes on the questions excluded from the ten

The inquiry's surfacing step generated twenty-three candidate frontier questions; the ten above are the curated result. The thirteen excluded candidates each have documented reasoning.

Nine candidates were ruled non-eligible at the eligibility filter. Three are runner-level concerns (selection-step ownership; incoming-reference cleanup during the /navigation archive migration; /intuit-corpus-limit-seeds input shape — the last of which overlaps with an existing design-memo deferral). Two have weak gating (Navigational-Possibility paradigm composition trigger; identity-layer ordering at runtime — both implicitly handled by the design memo's identity statement without needing explicit commitment). Two are trivially-hard (the Discipline Contract section's content, which is straightforward synthesis work; the EF-3 pattern-portability concrete criterion, which is downstream research with no implementation-gating). One was the rename-as-design-act methodology pattern-portability research frontier itself — research-only, doesn't gate routeman's implementation. One was the telemetry consumer + feedback-loop question — overlaps with the LAYER-2 audit question, which absorbs the calibration sub-aspect.

Two candidate pairs were consolidated. The pointer-WHY-anchor sub-question merged into the adaptive-guidance generation question (Tier 1 question 3) because both target the same operational mechanism. The LAYER-2 threshold calibration merged into the LAYER-2 audit infrastructure question (Tier 1 question 4) because both target the same audit infrastructure decision.

One candidate was demoted as trivially-hard during ranking. The telemetry consumer + feedback-loop question met only one of three hardness sub-dimensions; sensemaking's hardness criterion disqualifies trivially-hard candidates.

Two candidates were dropped during the final selection step to honor the ten-cap, each with a region or gating-type overlap with a retained candidate.

**One additional acknowledgment outside the ten.** The selection-step ownership question (originally surfaced as candidate Q16 — who picks direction(s) after routeman emits the Route Map) was reclassified as runner-level and is not in the ten. The reclassification stands: the selector's identity is genuinely a runner-spec concern, parallel to the runner-level mis-attributions (freshness preflight; stall-signal detection; boundary positioning) that the design memo's lineage decisions explicitly dropped. However, the SKILL.md author should commit to a minimal boundary statement at authoring time: routeman emits the Route Map; selection is an external concern of the runner. This is a one-line acknowledgment, not a resolution of the selector's identity, and is doc-only — it doesn't gate routeman's design.

### 4. How to use this deliverable

The user takes this finding to the structural-layer follow-up (the inquiry that will author `cognitive_harness/routeman/SKILL.md`). For each Tier 1 question, the user decides one of three:

- **Resolve now.** Run the proposed follow-up /MVL2+ inquiry to settle the question. The per-question resolution path describes the inquiry shape.
- **Defer with documented risk.** Make a deliberate choice at SKILL.md authoring time and document the choice plus the risk-of-being-wrong in the SKILL.md. Acceptable when the question's resolution is downstream-bounded (a future inquiry can revise without breaking adopters).
- **Re-classify to Tier 2.** If the user finds a Tier 1 question more deferrable than the inquiry judged, demote it to a documented placeholder.

For each Tier 2 question, the SKILL.md becomes the artifact that documents the open status with the per-question revival trigger. Tier 2 questions don't block authoring; they accompany it.

Both tiers require attention before the SKILL.md ships. They differ in whether the attention takes the form of decision-work (Tier 1) or documentation-work (Tier 2). A Tier 2 question that ships with a silent default (no documentation) violates the inquiry's intent.

## Inherited Commitments Re-test

The `_branch.md` declared a Synthesis Trigger consuming seven prior outputs. Each prior's load-bearing commitment is re-tested or explicitly flagged as inherited-without-re-test.

### Prior 1 — `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`

- **Commitment 1:** routeman's three-layer identity (Navigational paradigm; four prescriptive residuals; cycle-consumer process position).
  - **Re-test status:** INHERITED-WITHOUT-RE-TEST at the identity-correctness level; RE-TESTED at the identity-as-anchor-for-frontier-questions level.
  - **Reason for the split:** the design memo's identity commitment is upstream; this inquiry uses the identity as the anchor against which frontier questions are tested for net-newness and gating. Question 1 (autonomy-level detection) emerges from the identity's reference to "the project's current autonomy level"; Question 6 (cycle-output shape constraints) emerges from the cycle-consumer layer. The identity stands; its consequences for implementation surface as frontiers.

- **Commitment 2:** the design memo's four deferred items (primitive composition; reflect coupling; cognitive-fixes-style fail-safe; non-active archival audit) and three research frontiers (pattern-portability; emergent-vs-declared identity; axes-vs-layers framework).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the elevation rule was applied. Three deferred items remain on-path with their revival triggers; one (reflect coupling) had a substantive new sub-question elevated to Tier 2 (Question 9). Three research frontiers were checked for gating-routeman-implementation; none gate, so all remain research-only.

- **Commitment 3:** the design memo's nine-mode failure framework (six Layer-1 operational; three Layer-2 identity-eroding).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Question 4 (LAYER-2 audit infrastructure) emerges from the framework's commitment to Layer-2 modes without specifying the audit mechanism. The framework stands; its operational gap is surfaced as a frontier.

### Prior 2 — `devdocs/inquiries/_archive/2026-05-14_00-01__verify_navigation_is_configured_explore/finding.md`

- **Commitment:** the four confirmed residuals (adaptive guidance; reachability/gates; REVISIT sub-actions; auto-vs-judgment split) and the three runner-level mis-attributions (freshness preflight; stall-signal trigger detection; boundary positioning).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Question 3 (adaptive-guidance generation mechanism) emerges from the residual's commitment to prescriptive content without a generation mechanism. The reclassification of the selection-step-ownership question to runner-level (excluded from the ten) explicitly applies the same mis-attribution pattern that the verification finding established.

### Prior 3 — `devdocs/inquiries/_archive/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md`

- **Commitment:** the strengthened diagnostic (claim-truth, level-coherence, external-citation; any NO defaults to CORRECTS) and the "lesson-introduces-its-own-trap" meta-pattern.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the diagnostic was applied at sensemaking's ambiguity-collapse step to the elevation rule (whether already-flagged items qualify) and to the inquiry's own central concepts (frontier-question; hardness; tier distinction). The meta-pattern informed the inquiry's caution around the 2-tier presentation (a sensemaking-coined vocabulary tested against its own elevation rule).

### Prior 4 — `devdocs/inquiries/2026-05-23_11-30__navigation_surfacing_territory_dependency_recheck/finding.md`

- **Commitment:** the per-sub-claim diagnostic methodology (composite claims should be diagnosed per sub-claim, not per composite).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the inquiry applied the methodology in the eligibility filter — each candidate's three eligibility conditions were tested separately rather than as a single composite verdict. The Q11 borderline-hardness disclosure (★★ on bounded sub-aspect; ★★★ on cross-inquiry sub-aspect) is an explicit per-sub-claim application.

### Prior 5 — `cognitive_harness/navigation/references/navigation.md`

- **Commitment:** the canonical /navigation spec's content (the inherited route-card schema, the 16-type taxonomy, the R-then-N pairing, the invocation contexts, the telemetry skeleton).
  - **Re-test status:** RE-TESTED at the lineage-inheritance level (the design memo's 14 inherits stand); RE-TESTED at the gap-identification level (Questions 5 and 6 emerge from canonical's silence on the runner-discipline contract and the cycle-output shape).
  - **Evidence:** the inquiry uses canonical /navigation as the structural baseline against which frontier questions are tested. Where canonical leaves a gap (the runner contract; the input shape constraints; the audit infrastructure), the inquiry surfaces the gap as a frontier.

### Prior 6 — `docs/desc.md` (endgame document)

- **Commitment 1:** the five-level autonomy ladder and the multi-head architecture trajectory.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Questions 1 (autonomy-level detection) and 2 (multi-head handoff) emerge from these endgame commitments. The endgame stands; the operational mechanisms for routeman to interact with the endgame are the frontiers.

- **Commitment 2:** the Baldwin-cycle maturity gate (N≥30 inquiries per discipline before seed-generation activates).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** Question 10 (pre-maturity emission policy for INVESTIGATE FRONTIER and REVISIT) emerges from the intersection of this commitment with routeman's enumeration.

### Prior 7 — `docs/discipline_taxonomy.md`

- **Commitment:** the four-category discipline taxonomy and the primitive-profile summary table.
  - **Re-test status:** INHERITED-WITHOUT-RE-TEST.
  - **Reason:** the taxonomy is upstream of this inquiry; its structure was not re-litigated. The inquiry uses the taxonomy as the structural baseline that puts routeman in the forward-Boundary slot.

## Next Actions

### MUST

There are no MUST actions required for this finding's value to be realized. The deliverable IS the ten-question list; downstream consumption is the user's call.

### COULD

- **What:** Resolve any Tier 1 question via a follow-up /MVL2+ inquiry before authoring `cognitive_harness/routeman/SKILL.md`. The six Tier 1 questions have explicit candidate resolution paths.
  - **Who:** the user (chooses which Tier 1 questions to resolve via inquiry vs accept as documented risk).
  - **Gate:** condition-bound — when the structural-layer follow-up is being planned.
  - **Why:** Tier 1 questions create silent implementation choices if left unresolved at authoring time.

- **What:** Author `cognitive_harness/routeman/SKILL.md` with documented placeholders for Tier 2 questions and explicit acceptance-of-risk notes for any Tier 1 questions consciously deferred.
  - **Who:** human author (or a follow-up structural-layer inquiry).
  - **Gate:** condition-bound — after Tier 1 triage is complete.
  - **Why:** the SKILL.md is the implementation artifact; this inquiry's ten questions are inputs to its authoring.
  - **Depends-on:** the Tier 1 triage above. This COULD is GATED — do not act until the user has triaged each Tier 1 question.

- **What:** Include a minimal boundary statement in the SKILL.md acknowledging that the post-routeman selection step is external to routeman ("routeman emits the Route Map; selection is the runner's concern"). This handles the selection-step ownership question (excluded from the ten as runner-level) without resolving the selector's identity.
  - **Who:** the SKILL.md author.
  - **Gate:** condition-bound — at SKILL.md authoring time.
  - **Why:** without the statement, the SKILL.md reader cannot tell where the selector fits relative to routeman; ambiguity at the boundary.
  - **Depends-on:** the SKILL.md authoring COULD above. GATED.

### DEFERRED

- **What:** Track Tier 2 questions over time as the project advances; promote any Tier 2 question to Tier 1 if its trackable-without-silent-commit framing breaks down.
  - **Gate:** observable — when a Tier 2 question's placeholder in the SKILL.md is repeatedly the source of operational confusion or silent choice in practice.
  - **Why (if revived):** Tier 2 status is calibrated to the project's current state; structural shifts (multi-head shipping; Baldwin maturity reaching N=30) may re-position any Tier 2 question.

## Reasoning

This section explains why the deliverable ended where it did.

**Why exactly ten.** The user explicitly asked for ten. The cap is structurally meaningful: it forces prioritization, prevents lazy under-coverage (such as five), and prevents undifferentiated padding (such as fifteen). With twenty-three surfaced candidates and ten slots, the selection ratio of forty-three percent is healthy — under-coverage would have shown as a ratio above seventy percent, dilution as below twenty percent.

**Why the three-condition frontier definition.** The user's "hard, like frontiers" framing is informal; making it operationally testable required a precise filter. The three conditions (no-current-answer; gating-for-implementation; net-new) are the minimum filter that captures the user's intent. Loose interpretations (such as "any open question") would have qualified too many candidates; tight interpretations (such as "no known structural answer anywhere in the corpus including the design memo's flags") would have undershot.

**Why three-dimension hardness.** "Hard" alone is unverifiable. The three sub-dimensions (breadth-of-consequence; depth-of-investigation; articulation-difficulty) operationalize hardness so each question's claim of difficulty is checkable. A question meeting only one sub-dimension is trivially hard — this caught Q20 (telemetry consumer feedback-loop) and Q8 (Discipline Contract content) during ranking.

**Why two tiers, not one ranked list.** A single ranked list orders by hardness; the user must still mentally split the list into urgency categories. Two tiers explicitly mark the urgency split: Tier 1 = silent-choice-if-unresolved, Tier 2 = documentable-as-placeholder. The operational distinction is real, though softer than a hard binary (both tiers require attention before SKILL.md ships).

**Why six Tier 1 plus four Tier 2.** Within sensemaking's 5-7 + 3-5 range. The six Tier 1 questions are those where the SKILL.md cannot ship a documented placeholder without making a silent commitment (autonomy-level detection has no current mechanism — a placeholder would silently default to "the runner passes it" or "Level 0 hard-coded"; multi-head handoff has no protocol — a placeholder would silently default to single-head shape; etc.). The four Tier 2 questions have natural placeholder shapes (taxonomy completeness ships with the 16 as-is; Continuation Note ships as write-only with cross-inquiry deferred; reflect mapping ships with a placeholder section; pre-maturity emission ships with a documented default policy).

**Why nine regions and six gating types in the spread.** Sensemaking required ≥6 of 12 regions and ≥4 of 6 gating types. The ten exceed both criteria: nine regions cover Identity, Endgame fit, Lineage, Features, Attributes, Failure framework, Runtime integration (two questions), Coupling (two questions), and Endgame conditional; all six gating types appear (specification-gap; capability-dependency; interface-unspecified; calibration-parameter; empirical-assumption; operational-policy). The spread reflects routeman's actual structure: a Boundary discipline naturally has many interface frontiers.

**Why the rejected candidates were rejected.** The thirteen excluded candidates each failed one or more of the three frontier conditions, were duplicative (consolidated), or were trivially hard. Section 3 documents the reasoning per candidate. The rejection pattern reveals what doesn't count as a frontier question for this inquiry's purpose: runner-level concerns (the selection-step ownership; the freshness preflight; the stall-signal trigger — though only the first appeared in this inquiry's candidate pool because the latter two were already excluded by the design memo's lineage drops); operationally-important-but-not-gating questions (incoming-reference cleanup during migration); trivially-answerable questions (Discipline Contract content); research-only-no-implementation-gating questions (pattern-portability; emergent-vs-declared identity); and questions whose answer falls cleanly within an already-flagged deferral's revival trigger (cognitive-fixes-style fail-safe).

**Why one elevation was permitted (reflect coupling sub-shape question).** Sensemaking's elevation rule allowed already-flagged items into the ten when this inquiry adds substantive new structure beyond the flagging. The reflect coupling deferral said "describe the coupling" without naming the specific mapping shape; this inquiry's Question 9 names the mapping-shape sub-question (direct one-to-one; aggregation; filtering; transformation) that the deferral did not. This counts as substantive new structure and is the one permitted elevation. *[2026-05-24: Q9 has since been REMOVED — `/reflect` is not canonical at the current project state; the mapping-shape question is premature pending /reflect's canonization. The elevation reasoning above stood at the time of this finding's original commit; it does not survive Q9's removal.]*

**Why two candidate pairs were consolidated.** The two-candidate consolidation cap permitted merging tightly overlapping candidates while preserving sub-aspect visibility. The pointer-WHY-anchor question merged into the adaptive-guidance-generation question because both target the same operational mechanism (the mechanism by which prescriptive content is produced; the anchor source for the WHY is a sub-aspect of that mechanism). The LAYER-2 threshold-calibration question merged into the LAYER-2 audit-infrastructure question because both target the same audit infrastructure decision (the threshold is calibrated within the audit; deciding the audit's existence first determines whether the threshold question is even live).

**Why the selection deliberately includes not-yet-shipped-capability questions.** Multi-head architecture and Baldwin-cycle calibration maturity are project-trajectory commitments. The SKILL.md being authored today must accommodate these commitments at authoring time; silent defaults committed now would later be hard to revise. Sensemaking's Ambiguity 4 resolution committed to the accommodation-gates-authoring rule: capability-dependency questions are valid frontiers when they gate today's authoring choices.

**Why the metadata has five fields.** Each field carries a distinct piece of triage information. The question text alone is insufficient: the user needs to know why-it's-a-frontier (which of the three conditions hold and how — to verify the inquiry's judgment), what-it-gates (the specific implementation choice that depends on the answer — to estimate impact), the hardness tags (which sub-dimensions apply — to estimate investigation scope), and the candidate resolution path (the specific follow-up inquiry shape OR the calibration period OR "open research with no current path" — to know what action the user can take). Fewer fields would underspecify the triage utility.

**Where the inquiry could be wrong.** The strongest prosecution against the deliverable would be that "ten questions with metadata and tier-organization" is over-elaboration for what the user asked. The user's framing was informal; the deliverable is structurally rigorous. The defense — that "before moving into implementation" signals pre-implementation rigor, and that each metadata field carries per-question information the user needs for triage — holds, but the user could reasonably decide the deliverable is heavier than they wanted. If so, the deliverable is still usable: ignore the metadata and the tier organization; read the ten questions as a ranked list.

## Open Questions

### Monitoring

- **Whether the ten questions are actually used during SKILL.md authoring.** Observable when the structural-layer follow-up runs. If the SKILL.md author resolves several Tier 1 questions before authoring, the deliverable served its purpose. If the SKILL.md author ignores the list and authors blind, the deliverable is theatre — the inquiry's framing missed what the user actually wanted.

- **Whether the Tier 1/Tier 2 distinction operates as designed.** Observable when the SKILL.md ships. If Tier 1 questions were all resolved or consciously deferred, and Tier 2 questions all appear as documented placeholders in the SKILL.md, the distinction worked. If the distinction collapsed in practice (Tier 2 questions silently shipped without documentation; Tier 1 questions silently shipped without resolution), the distinction was an over-elaboration.

### Blocked

- **Whether questions 1, 2, 3, 4, 5 are actually resolvable in single follow-up inquiries.** Blocked until each is attempted. The candidate resolution paths estimate scope but haven't been validated.

### Research Frontiers

- **A general theory of discipline frontier-questions.** This inquiry is specific to routeman; the methodology (3-condition filter; 3-dimension hardness; 6-gating-type taxonomy; 2-tier presentation) might be portable to frontier-question identification for other disciplines. Beyond per-inquiry scope; flagged for observation when a second discipline's pre-implementation frontier inquiry is proposed.

- **Generalization of the `_navig.md` per-inquiry persistence pattern to other disciplines** (added 2026-05-24 per `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md`'s FF-strat-pattern). If `_navig.md` becomes a precedent for routeman, future disciplines might want analogous per-discipline persistence files (e.g., per-discipline `_critique.md` or `_innovate.md`). Generalization is a project-wide concern beyond routeman's scope; investigation begins when 2+ disciplines other than routeman are observed wanting analogous files.

### Refinement Triggers

- **If a Tier 1 question's silent-choice-if-unresolved characterization turns out to be wrong** (the SKILL.md author finds the Tier 1 question shipable as a placeholder), demote to Tier 2 and update the rule.

- **If a Tier 2 question's documentable-as-placeholder characterization turns out to be wrong** (the SKILL.md cannot ship a clean placeholder), promote to Tier 1 and update the rule.

- **If a NOT-ELIGIBLE candidate from the surfacing pool turns out to gate implementation in practice** (the SKILL.md author surfaces a frontier the inquiry rejected), file an inquiry update with the missed candidate.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
lets dive deeper of routeman by creating 10 questions that should be resolved before moving into implementation . hard questions, like frontiers
```

</details>
