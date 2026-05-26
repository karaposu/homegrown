---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: LAYER-2 audit mechanism design (Q4 dive-deep, /reflect excluded)

## Question

(from `_branch.md`)

The routeman discipline (the renamed `/navigation` cycle-consumer designed at `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`) commits five LAYER-2 identity-eroding failure modes — three from the original design memo (Rename-Renders-Itself-Cosmetic; Prescriptive-Without-Cycle-Context; Auto-vs-Judgment Calibration Drift) and two added by `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` (false depth; filler-meta-reasoning). The audit infrastructure that detects these modes is Question 4 (Q4) in the routeman frontier-questions finding at `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md`.

Two adjacent inquiries supplied substrates for 4 of the 5 modes: `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` (the autonomy register's `transition_history` field is the Calibration-Drift substrate) and `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md` (the A1+A3 enforcement — file-path-and-section citation in WHY text + drop-with-reason at Stage 1 generation time — makes Prescriptive-Without-Cycle-Context, Rename-Renders-Itself-Cosmetic, and filler-meta-reasoning detectable by construction). Q4's substrate is supplied for 4 of 5 modes; the audit MECHANISM (who runs, when, with what thresholds) and the 5th mode's substrate (false depth) remained open. The user invoked this /MVLw inquiry to design the mechanism + the false-depth substrate, with the explicit constraint that `/reflect` is excluded from runner candidates (because /reflect is not actively developed in the project at the moment).

The inquiry's question covers four sub-questions: (1) who runs the audit (excluding /reflect); (2) at what cadence; (3) how thresholds are calibrated to the project's actual invocation rate; (4) what substrate detects the 5th LAYER-2 mode (false depth). The deliverable is a design memo SKILL.md authoring can adopt verbatim, sufficient to graduate Q4 from "AUDIT SUBSTRATE PARTIALLY SUPPLIED (mechanism still open)" to "RESOLVED-WITH-DESIGN" (matching the resolution status of Q1, Q3, Q10).

The goal: ship a design that addresses all four sub-questions, preserves routeman's enumerate-all identity (no gating of routeman's output), preserves the isolated-session + file-scanning architecture committed by the 2026-05-23 16:31 correction, is feasible at L0 (the project's current autonomy level) with documented L2+ extension hooks, and commits options rather than punting to "future work."

## Finding Summary

- **The audit ships as a separate protocol file at `cognitive_harness/protocols/layer2_audit.md`** invoked by the runner (at routeman invocation-end) OR by the human (at L0/L1, manual invocation supplemented by the runner's output pointing to where to invoke). The /reflect candidate is excluded per user direction; the self-audit-by-routeman candidate is rejected because it conflates audit semantics with routeman's enumeration; the substrate-self-audit-at-consumer-side candidate (the Inverted alternative — there is no dedicated runner; substrates are self-disclosing in routeman's output and consumers apply the check) is preserved as the L2+ extension hook for when the system Selector takes over Route Map reading. The separate-protocol choice is structurally analogous to existing project patterns (`loop_diagnose.md`, `outcome_review.md`) — it lives in `cognitive_harness/protocols/` as a shared mechanism, not in routeman's SKILL.md.

- **The audit's cadence has two layers — fixed-interval gating + per-mode event-triggered firing inside the gating.** The gating fires at every routeman invocation-end (the runner's checkpoint is the natural gating point). Inside the gating, each of the five LAYER-2 modes has its own firing rule based on substrate availability: the three modes detectable by Stage-1 A1+A3 enforcement (Prescriptive-Without-Cycle-Context, Rename-Renders-Itself-Cosmetic, filler-meta-reasoning) fire per-invocation cheaply by reading the current `routeman.md` output; Calibration-Drift fires when `_navig.md` shows at least two prior invocations AND the threshold-window has accumulated; false depth fires when `routeman.md` contains sub-routes (i.e., stage-2 of routeman's staged-mapping has run). Per-mode firing avoids the audit-churn / consumer-training pathology documented in `devdocs/inquiries/2026-05-24_02-00__investigate_frontier_revisit_emission_policy/finding.md` (the 2026-05-24 02:00 emission-policy inquiry's two-epoch framing) — only modes with substrate availability and threshold-crossing produce verdicts the user must attend to.

- **Thresholds are per-mode multi-dimensional parameter sets, with the time-window dimension scaling to the project's autonomy level read from `docs/autonomy_level.md` (the autonomy register designed by the 00:40 inquiry).** The scaling adopts `docs/autonomy_ladder.md` Section 5's per-level evidence-gate pattern — at L0 (one inquiry per day), "across 5 consecutive invocations" means a multi-day window; at L4+ (many per hour), the same threshold is a single afternoon. The magnitude dimensions (e.g., the "≥50% of Routes" component of the Rename-Renders-Itself-Cosmetic recognition signal) are per-mode-fixed at first ship and calibratable later. The audit's threshold-table reads `docs/autonomy_level.md`'s `current_level` on each fire and applies the level-keyed window value; if the register is absent, the audit defaults to L0 thresholds and emits an INFO-tier warning (mirrors the autonomy register's own 3-tier failure handling). The threshold values are externally grounded — they come from `docs/autonomy_level.md` and `docs/autonomy_ladder.md`, both INDEPENDENT of the audit's own past verdicts. This is what mitigates the audit's LAYER-2 risk of "self-coupling-to-downstream" (the LAYER-2 mode warned about in `cognitive_harness/surfacing/references/surfacing.md` §4.3): a discipline whose calibration depends ENTIRELY on its own past verdicts erodes its identity over time; the autonomy register breaks that loop at the calibration layer.

- **The false-depth substrate (the one LAYER-2 mode without a substrate from 00:40 or 01:00) is a composite majority-vote of three components.** Component A is the Stage-1 drop-rate per parent — sub-routes whose Stage-1 anchor identification all fell back to the meta-reasoning field (the "W5 unresolved" fallback in 01:00's chain) suggest the sub-routes lack genuine anchors. Component B is pairwise meta-reasoning distinctness — sub-routes whose `why_this_might_be_important` field content is interchangeable (high pairwise text-similarity) suggest the LLM produced template-filling rather than per-sub-route reasoning. Component C is secondary-attribute coordinate-uniformity — sub-routes sharing the same 6-tuple of secondary attributes (`direction`, `intent`, `autonomy_readiness_tier`, `auto_class`, `scope`, `has_sub_actions` per the 01:30 categorization finding) AND having low distinctness are structurally near-identical. The audit fires a false-depth FLAG when at least 2 of these 3 components exceed component-specific thresholds (majority vote). At first ship, the component weights are equal (1/3 each) — a maximum-entropy baseline because there is no prior calibration data; a calibration revival trigger fires after 5+ stage-2-invocations have accumulated to retune weights. The target performance is practical-detection (per the Sensemaking finding's Ambiguity-4 resolution): ≥80% true-positive rate at ≤20% false-positive rate. The composition's fallback if it underperforms in practice is the F-Cand-5 KILL-with-seed: drop the false-depth substrate and document the deferral with a revival trigger.

- **The audit's per-mode read protocol is a dispatch table** — one row per LAYER-2 mode, with fields {substrate file, section/field, parsing rule, output, 3-tier failure handling, spec-coherence check (where applicable)}. The dispatch-table pattern inherits the 01:00 inquiry's per-movement-type priority chain pattern (originally built for adaptive-guidance Stage 1; reused here for the audit's per-mode reads). The 3-tier failure handling (INFO / ERROR / ERROR, mirroring the autonomy register's read protocol) covers absent substrate file (default to "no signal" + INFO warning), malformed substrate (halt audit + ERROR), and out-of-range values (halt audit + ERROR). The spec-coherence check (added during Critique as refinement R5) applies to the Prescriptive-Without-Cycle-Context mode specifically: the audit reads routeman's own SKILL.md to verify the Stage 1 enforcement section still commits A1+A3; if the spec has been edited to disable enforcement, the audit's verdict distinguishes "spec changed; LAYER-2 mode now newly-possible" from "spec unchanged; bypass detected." This addresses the bypass-vs-genuine-failure distinction that prosecution raised in Critique.

- **The verdict output format is structured records in a parallel `_audit.md` file** in the inquiry folder (for inquiry-scoped invocations) OR at `devdocs/audits/<run-id>/_audit.md` (for project-scoped invocations) — hybrid placement matches the persistence model's hybrid placement decided by the 00:20 inquiry. Each verdict record carries: invocation_id (from `_navig.md` or n/a), timestamp, mode name, status (one of PROCEED, FLAG, RE-RUN, INFO, ERROR — a 5-tier format extending the design memo's 3-tier with the autonomy register's INFO/ERROR added per Critique's refinement R6), evidence (file-path citations using the A1 format), confidence (LOW at L0 by default, scaling with autonomy level), surfaced_to_user flag, next_trigger field. The runner reads `_audit.md` at routeman invocation-end and surfaces FLAG / RE-RUN via emphasized output; ERROR via urgent output (user attention required); INFO via gentle output (background notice); PROCEED is silent (no churn). The 5-tier format gives the user calibrated attention signals — no message at PROCEED, gentle at INFO, attention-required at FLAG/RE-RUN, urgent at ERROR.

- **All five LAYER-2 modes are detectable at first ship.** Calibration-Drift consumes 00:40's `transition_history` substrate via the per-mode dispatch table. Prescriptive-Without-Cycle-Context consumes 01:00's A1+A3 substrate plus the spec-coherence check. Rename-Renders-Itself-Cosmetic consumes 01:00's A1+A3 substrate via a sliding window over `_navig.md`. Filler-meta-reasoning consumes 01:00's Stage-1 drop-with-reason log via drop-rate computation. False depth consumes the new composite (drop-rate + meta-reasoning distinctness + coordinate-uniformity). Per-mode detectability is complete; Q4's substrate gap is closed. The design covers all four user sub-questions (runner, cadence, threshold-calibration, false-depth-substrate) plus two design-completion pieces (substrate consumption protocol, verdict output format).

- **The design preserves routeman's enumerate-all identity and isolated-session + file-scanning architecture.** The audit is observe-only — it reads files (`routeman.md`, `_navig.md`, `docs/autonomy_level.md`, routeman SKILL.md) and writes its verdicts to `_audit.md`; it never modifies routeman's outputs and never gates routeman's enumeration. The audit's input contract is purely file-mediated — no in-context parameter passing, no in-session callbacks. Routeman's identity (paradigm-instantiation as Navigational + prescriptive-extension via four residuals + cycle-consumer process position) is unaffected; the audit observes outputs that routeman produces, separately. The architecture commitment from `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` (routeman runs in an isolated session and reads cycle artifacts via file-scanning) carries forward to the audit — the audit also runs in (or as) a session that reads files; the audit does not require routeman's session to be active.

- **The design has documented L0/L1/L2+ phase progression.** At L0 (the project's current autonomy level), the audit protocol exists as a file; the human invokes it manually after routeman runs (the runner's output points to the protocol with a pointer like "to audit this Route Map, invoke /layer2-audit on this folder"); thresholds are loose (multi-day windows; LOW confidence). At L1, the runner can begin auto-invoking the audit protocol as part of its checkpoint sequence (the audit's verdicts start surfacing automatically). At L2+, the substrate-self-audit pattern (the R-Cand-4 alternative deferred in Critique) becomes the default — the system-Selector reads Route Maps and applies the substrate-checks as part of its filtering; the audit's separate-protocol invocation becomes redundant at that stage and may be subsumed into the Selector's logic. This progression is the design's L2+ extension hook; the first-ship commitment is the separate-protocol form.

## Inherited Commitments Re-test

The `_branch.md`'s Synthesis Trigger declared nine prior outputs being synthesized. Each prior's load-bearing commitment is re-tested below.

### Prior 1 — `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` (the routeman design memo)

- **Commitment 1:** the 3 original LAYER-2 modes with recognition signals (Rename-Renders-Itself-Cosmetic; Prescriptive-Without-Cycle-Context; Auto-vs-Judgment Calibration Drift).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the design's per-mode dispatch table (P5) explicitly handles all 3 modes. The recognition signals are consumed verbatim — the design adds substrate-consumption logic + threshold-application, not redefinition of the modes. The audit's verdict for each of these 3 modes uses the design memo's recognition-signal language as the verdict's evidence description.

- **Commitment 2:** the 2-layer failure framework structure (LAYER-1 operational + LAYER-2 identity-eroding).
  - **Re-test status:** RE-TESTED — PRESERVED.
  - **Evidence:** the audit specifically targets LAYER-2 modes (per the design's commitment); LAYER-1 modes are out of scope (they're recoverable via re-invocation per the design memo's own framework). The 2-layer split structure is preserved unchanged.

- **Commitment 3:** routeman's enumerate-all identity (the discipline enumerates the full next-move space; gating violates).
  - **Re-test status:** RE-TESTED — PRESERVED.
  - **Evidence:** D7 in Critique was a CRITICAL dimension; the assembly scored HIGH. The audit is observe-only; never modifies Route Map; never gates routeman's output. The design commits this explicitly: "the audit DOES NOT modify routeman's Route Map, _navig.md, or autonomy register (read-only on inputs except for its own `_audit.md` log). The audit DOES NOT gate routeman's enumeration (observe-only)."

### Prior 2 — `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` (the frontier-questions finding)

- **Commitment 1:** Q4 is Tier-1; the audit infrastructure is open; the candidate resolution path includes "design the LAYER-2 audit infrastructure for routeman, generalizable to other Boundary disciplines."
  - **Re-test status:** RE-TESTED — RESOLVED-WITH-DESIGN.
  - **Evidence:** this inquiry IS the resolution. Q4 should be marked RESOLVED-WITH-DESIGN in the frontier-questions finding (CONCLUDE-side cross-doc impact action listed under Next Actions). The generalization-to-other-Boundary-disciplines aspect is preserved as research frontier (out of scope per `_branch.md`'s Scope Check).

- **Commitment 2:** the substrate-vs-mechanism distinction (substrates supplied for 4 of 5 modes by 24-40 + 24-01; mechanism still open).
  - **Re-test status:** RE-TESTED — PRESERVED.
  - **Evidence:** the inquiry's design explicitly consumes the substrates from 24-40 + 24-01 without redesigning them (per Sensemaking's C4 constraint). The design's substrate-consumption layer (P5) IS the mechanism that completes Q4's open portion.

- **Commitment 3:** the 5-mode total scope (3 from design memo + 2 from 18-58).
  - **Re-test status:** RE-TESTED — PRESERVED.
  - **Evidence:** all 5 modes are addressed in the per-mode dispatch table (P5) and the false-depth-substrate composition (P4). The mode count is unchanged.

### Prior 3 — `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` (the cycle-consumer correction)

- **Commitment:** routeman runs in an isolated session; reads cycle artifacts via file-scanning; no in-context parameter pass.
  - **Re-test status:** RE-TESTED — PRESERVED + APPLIED TO AUDIT.
  - **Evidence:** the audit's design CONSTRAINED BY this architecture — D2 in Critique was a CRITICAL dimension; the assembly scored HIGH. The audit reads its inputs from files only; writes its output to files only; no in-context callbacks. The runner-pass-as-parameter audit option was eliminated by this constraint (per Sensemaking C2). The audit's runner choice (separate protocol invoked by runner OR human) is consistent with the file-mediated architecture.

### Prior 4 — `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` (the staged-mapping + meta-reasoning adoption)

- **Commitment 1:** 2 new LAYER-2 modes (false depth; filler-meta-reasoning).
  - **Re-test status:** RE-TESTED — PRESERVED + EACH ADDRESSED.
  - **Evidence:** false depth gets a substrate composition (P4 — the design's novel contribution beyond the 4 substrates from 24-40 + 24-01). Filler-meta-reasoning gets a substrate consumption (P5 dispatch table — reads Stage 1's drop-with-reason log for W5 fallback rate). Both modes are detectable at first ship.

- **Commitment 2:** the per-Route `why_this_might_be_important` meta-reasoning field (required + length-bounded; placed in Reasoning group of route-card schema).
  - **Re-test status:** RE-TESTED — USED.
  - **Evidence:** the false-depth substrate's Component B (pairwise meta-reasoning distinctness check) operates on this field directly. The field's existence + content is the substrate surface; without it, Component B would not be feasible. The field is now load-bearing for false-depth detection in addition to its original adaptive-guidance role.

- **Commitment 3:** the LLM-operational-characteristics-as-design-input principle (originated at 18-58; named for routeman; pattern-portability deferred pending N≥2).
  - **Re-test status:** RE-TESTED — APPLIED.
  - **Evidence:** the design preserves the user's language ("audit," "mode," "verdict," "substrate") in the verdict format; the 5-tier verdict statuses are user-readable; the file-path citation format in evidence is parsable by humans and tools. The principle's evidence-application count is now extended (was N=5 prior to this inquiry; this inquiry's user-language preservation in verdict format is one more application — preliminary N=6).

### Prior 5 — `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` (the persistence model)

- **Commitment 1:** adoption of `cognitive_harness/protocols/multi_resolution_navigation.md` with user-aligned naming (`_navig.md` and `routeman.md` aliases).
  - **Re-test status:** RE-TESTED — INHERITED.
  - **Evidence:** the audit reads `routeman.md` (per the dispatch table) for current Route Map content; reads `_navig.md` for cross-invocation history. The persistence model's file artifacts are inputs to the audit; the design preserves them unchanged.

- **Commitment 2:** hybrid placement-by-invocation-scope (`_navig.md` and `routeman.md` placed per-inquiry for inquiry-scoped invocations; centrally at `devdocs/navigation/<run-id>/` for project-scoped).
  - **Re-test status:** RE-TESTED — INHERITED AND EXTENDED.
  - **Evidence:** the audit's `_audit.md` output follows the same hybrid placement pattern — per-inquiry for inquiry-scoped audit invocations; centrally at `devdocs/audits/<run-id>/_audit.md` for project-scoped. The placement rule generalizes cleanly.

- **Commitment 3:** the protocol's persistence + recalibration lifecycle.
  - **Re-test status:** INHERITED-WITHOUT-RE-TEST.
  - **Reason:** the audit's lifecycle (append-only verdict records to `_audit.md`) is structurally analogous but doesn't directly use the protocol's recalibration semantics. The audit's records are observations, not candidates needing status evolution. Re-test deferred until the audit is used in practice and lifecycle evolution becomes a concern.

### Prior 6 — `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` (the autonomy register)

- **Commitment 1:** the register at `docs/autonomy_level.md` with `current_level` + `transition_history` fields.
  - **Re-test status:** RE-TESTED — DUAL ROLE (substrate + threshold scaling source).
  - **Evidence:** the register provides the Calibration-Drift substrate (the per-mode dispatch table reads `transition_history` for the audit's evidence) AND the threshold scaling source (the per-autonomy-level threshold table reads `current_level` to determine which scaling factor to apply). The register's pre-commitments are honored unchanged; the audit USES the register in two distinct capacities.

- **Commitment 2:** the 3-tier failure handling (INFO / ERROR / ERROR) for register reads.
  - **Re-test status:** RE-TESTED — REUSED.
  - **Evidence:** the audit's per-mode dispatch table (P5) uses the same 3-tier vocabulary for substrate-read failures. The audit's verdict format (P6) extends the design memo's 3-tier PROCEED/FLAG/RE-RUN with INFO + ERROR tiers, mirroring the register's pattern. The design's reuse of the 3-tier pattern is a coherence point with 24-40.

### Prior 7 — `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md` (the adaptive-guidance mechanism)

- **Commitment 1:** the A1+A3 substrate (file-path-and-section citation in WHY text + drop-with-reason at Stage 1 generation time) makes 3 LAYER-2 modes detectable BY CONSTRUCTION.
  - **Re-test status:** RE-TESTED — CONSUMED.
  - **Evidence:** the audit's per-mode dispatch table for Prescriptive-Without-Cycle-Context, Rename-Renders-Itself-Cosmetic, and filler-meta-reasoning all consume the A1+A3 substrate outputs. The audit's job for these 3 modes is partly "defend the by-construction invariant" (per Sensemaking KI2): the audit checks that the substrate enforcement is still active (via the spec-coherence check on routeman SKILL.md for Prescriptive-Without-Cycle-Context) AND consumes the substrate's signals. The substrate's pre-commitments are honored unchanged.

- **Commitment 2:** the per-movement-type dispatch table pattern (the Stage 1 chain).
  - **Re-test status:** RE-TESTED — PATTERN-INHERITED.
  - **Evidence:** the audit's per-mode dispatch table (P5) explicitly inherits this pattern from 24-01's Stage 1 mapping. Extensibility (per FF-S3 from Surfacing — substrates may accumulate over time) is the load-bearing reason; the pattern's pre-validation at 24-01 carries forward to the audit's structural choice.

### Prior 8 — `cognitive_harness/surfacing/references/surfacing.md` (the LAYER-1/LAYER-2 framework origin)

- **Commitment 1:** the LAYER-1 vs LAYER-2 framework (LAYER-1 operational, recoverable; LAYER-2 identity-eroding, behavioral-audit-needed).
  - **Re-test status:** RE-TESTED — INHERITED.
  - **Evidence:** the audit explicitly targets LAYER-2 modes (per the framework's distinction). LAYER-1 modes are not addressed by this design (they're handled by routeman's normal re-invocation). The framework's split structure is preserved.

- **Commitment 2:** the Self-coupling-to-downstream LAYER-2 mode warning (a discipline's calibration depending ENTIRELY on downstream-output verdicts erodes its identity over time).
  - **Re-test status:** RE-TESTED — APPLIED TO THE AUDIT ITSELF.
  - **Evidence:** the audit's own LAYER-2 vulnerability was flagged in Sensemaking (KI1) and evaluated in Critique (D8 — Self-coupling-to-downstream avoidance — was CRITICAL). The design's mitigation is external grounding: thresholds are read from `docs/autonomy_level.md` and `docs/autonomy_ladder.md`, both INDEPENDENT of the audit's own history; the audit does NOT adjust its own substrates or thresholds based on its own prior verdicts. The framework-level self-coupling residual (the audit's framework and routeman's framework both stem from the design memo + 18-58) is acknowledged as moderate-risk with a revival trigger (framework revisions should trigger substrate re-validation).

### Prior 9 — `cognitive_harness/MVL/SKILL.md` + `cognitive_harness/MVLw/SKILL.md` (the runners)

- **Commitment:** the runner's invocation logic + EXECUTE PIPELINE structure + checkpoint pattern.
  - **Re-test status:** INHERITED-WITHOUT-RE-TEST + EXTENDED.
  - **Reason:** the audit's runner-side invocation hook (the runner invokes the audit protocol at routeman invocation-end) extends the runners' EXECUTE PIPELINE pattern — a new "Phase 7" equivalent that fires the audit. The runners' core commitments are preserved unchanged; the audit's hook is additive. The detailed Update-MVL-and-MVLw-spec work is a future-action (listed under Next Actions COULD).

### Implicit prior — `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md` (the route taxonomy categorization)

- **Commitment:** the 6 secondary attributes per route type (direction, intent, autonomy_readiness_tier, auto_class, scope, has_sub_actions).
  - **Re-test status:** RE-TESTED — USED.
  - **Evidence:** the false-depth substrate's Component C (secondary-attribute coordinate-uniformity check) operates on these 6 secondary attributes. The categorization's pre-commitments are honored; the design USES the coordinate-tuple as a load-bearing substrate input.

### Implicit prior — `devdocs/inquiries/2026-05-24_02-00__investigate_frontier_revisit_emission_policy/finding.md` (the emission policy)

- **Commitment 1:** the two-epoch framing (first-ship epoch: fallback active, variance dormant; post-source epoch: variance active).
  - **Re-test status:** RE-TESTED — PATTERN-INHERITED.
  - **Evidence:** the audit's first-ship state (LOW confidence on all verdicts by default; equal-weight false-depth components; multi-day L0 windows) is its "first-ship epoch" — the labeling infrastructure exists and produces interpretable verdicts even when the variance signal hasn't activated. The audit's "post-source epoch" begins when autonomy advances and threshold scaling activates differently per level. The two-epoch pattern from 24-02 is inherited as a design-architecture principle.

- **Commitment 2:** the consumer-training pathology warning (consumers learning to ignore a flat-signal field; risk if labels never vary).
  - **Re-test status:** RE-TESTED — MITIGATED BY EVENT-TRIGGERED FIRING.
  - **Evidence:** the audit's cadence is per-mode event-triggered (not per-invocation surfacing of all verdicts); PROCEED is silent; only FLAG/RE-RUN/INFO/ERROR surface to the user. This naturally avoids the "always-flat signal → user ignores" pathology because PROCEED verdicts don't surface — the user only sees the audit when it has something to say. The consumer-training pathology mitigation is structurally built in.

## Next Actions

### MUST

- **What:** Update `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` to mark Q4 as RESOLVED-WITH-DESIGN (matching the resolution-status of Q1, Q3, Q10), citing this finding. The "AUDIT SUBSTRATE PARTIALLY SUPPLIED (mechanism still open)" notice on Q4 is updated to "RESOLVED-WITH-DESIGN" with the resolution block embedded (analogous to how Q1 / Q3 / Q10 were updated when their resolutions landed).
  - **Who:** CONCLUDE-side cross-doc impact action; the user (or follow-up agent invocation).
  - **Gate:** observable — when this finding is committed and the user is reviewing the chain's state.
  - **Why:** the frontier-questions finding is the routeman implementation chain's status spine; readers consult it for current Q-status. Q4 is currently labeled PARTIALLY-SUBSTRATE-SUPPLIED; with the mechanism design committed by this finding, Q4 graduates to RESOLVED-WITH-DESIGN.

- **What:** Write impact notes into the routeman design memo (`devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`) referencing this finding's mechanism design. Specifically the LAYER-2 framework section's "the audit MECHANISM is unspecified" implication is now closed; the design memo's reader should know the audit infrastructure now has a committed design.
  - **Who:** CONCLUDE-side cross-doc impact action; the user.
  - **Gate:** observable — when this finding is committed.
  - **Why:** the design memo's LAYER-2 framework is the conceptual anchor; readers should know which inquiry provides the operational design without searching.

### COULD

- **What:** Author the new protocol file `cognitive_harness/protocols/layer2_audit.md` per this finding's mechanism design. The protocol file's structure follows existing protocol patterns (`loop_diagnose.md`, `outcome_review.md`, `multi_resolution_navigation.md`): a Loading note, a Purpose section, a When-to-Use section, an Input Contract, the per-step procedure (read inputs → apply per-mode firing → dispatch substrate reads → compare thresholds → emit verdicts → surface to user via runner), and Failure Modes.
  - **Who:** human author (or a follow-up structural-layer inquiry).
  - **Gate:** condition-bound — when routeman's SKILL.md authoring inquiry begins. The audit protocol can ship slightly before or with routeman's SKILL.md; both ship together for clean L0 integration.
  - **Why:** the design memo is structural; the protocol file is the operational artifact the runner OR human invokes. Without the protocol file, the design cannot ship.
  - **Depends-on:** none — the design memo's content is sufficient to author the protocol file directly.

- **What:** Update the runner specs at `cognitive_harness/MVL/SKILL.md` and `cognitive_harness/MVLw/SKILL.md` to invoke the LAYER-2 audit protocol at routeman invocation-end. The invocation hook is additive to the existing EXECUTE PIPELINE — a new step (or extension of the Checkpoint display) that fires the audit and surfaces verdicts.
  - **Who:** human author.
  - **Gate:** condition-bound — paired with the protocol authoring; ship together.
  - **Why:** without the runner hook, the audit's L1 auto-invocation doesn't trigger; the audit ships as L0-only (human-attended-only) until the runner hook lands. At L0 the protocol can be manually invoked; the runner hook activates the L1 progression.
  - **Depends-on:** the protocol authoring COULD above. This COULD is GATED — do not act until the protocol file exists. The runner cannot invoke a protocol that doesn't exist yet.

- **What:** Author routeman's SKILL.md authoring inquiry following the design assembly — the SKILL.md commits the audit-output reading and verdict-surfacing behavior at routeman invocation-end; references the audit protocol as the source of the audit logic.
  - **Who:** human author (or the routeman SKILL.md authoring inquiry).
  - **Gate:** condition-bound — as part of routeman SKILL.md authoring.
  - **Why:** routeman's SKILL.md must commit to the audit-coupling shape (where in the pipeline the audit fires; how its verdicts surface in routeman's output; what fallback exists if the audit protocol is absent).
  - **Depends-on:** the protocol authoring COULD above. This COULD is GATED — do not act until the protocol file exists. The routeman SKILL.md cannot reference an audit protocol that doesn't exist yet.

- **What:** Calibrate the false-depth substrate's component weights when 5+ stage-2-invocations have accumulated. The first-ship default is equal weights (1/3 each); evidence accumulation enables weight tuning per the practical-detection criterion (≥80% true-positive / ≤20% false-positive).
  - **Who:** human author or follow-up inquiry.
  - **Gate:** observable — when at least 5 stage-2 routeman invocations have produced sub-routes and audit verdicts for false-depth.
  - **Why:** the equal-weight default is the maximum-entropy baseline; calibration improves precision/recall as evidence accumulates.

### DEFERRED

- **What:** Audit-of-audit (the meta-recursive question — should the audit itself be audited for its own LAYER-2 modes?). Per Decomposition's deferral of element E13, this is a research frontier. The audit's own LAYER-2 risk is structurally addressed by external grounding (autonomy register for thresholds); a meta-audit would close any framework-level self-coupling residual.
  - **Gate:** observable — when at least 10 audit verdicts have accumulated AND framework-level self-coupling is observed in practice (audit verdicts cluster suspiciously around the design memo's own assumptions). Until then, the external-grounding mitigation is sufficient.
  - **Why (if revived):** the framework-level self-coupling residual (acknowledged but unmitigated in this design) becomes load-bearing if observed in practice; a meta-audit would close it.

- **What:** Generalize the audit infrastructure design to other Boundary disciplines. The original Q4 candidate resolution path mentioned "generalizable to other Boundary disciplines" — this is preserved as research frontier per `_branch.md`'s Scope Check (the inquiry's scope is routeman-specific; generalization is downstream).
  - **Gate:** observable — when at least one other Boundary discipline (other than routeman) is shipped AND has LAYER-2 modes defined. Currently routeman is the only active Boundary discipline (per the 4-category discipline taxonomy at `docs/discipline_taxonomy.md`); generalization is moot until a second instance exists.
  - **Why (if revived):** the audit's design pattern (separate protocol + per-mode dispatch + per-autonomy-level scaling + 5-tier verdict format) may be portable; a generalized form would reduce per-discipline reinvention.

- **What:** Substrate-self-audit-at-consumer-side pattern (the R-Cand-4 alternative — the system-Selector reads Route Maps and applies substrate-checks as part of its filtering; no separate audit protocol invocation needed).
  - **Gate:** condition-bound — when the system-Selector ships at L2+ (per `docs/autonomy_ladder.md` Section 5 — L2 is "system Selector with context"). The pattern subsumes the audit protocol at that stage; the protocol's invocation becomes optional rather than load-bearing.
  - **Why (if revived):** the L2+ pattern reduces audit infrastructure to its minimum form (no separate runner; substrate-checks integrated into Selector's filtering); the first-ship audit protocol's existence becomes redundant.

- **What:** DROP the false-depth substrate (the F-Cand-5 KILL-with-seed fallback). The first-ship false-depth substrate is the F-Cand-4 composite (majority vote of 3 components with equal weights); if it underperforms in practice (high false-positive rate or low true-positive rate even after weight calibration), the fallback is to drop the substrate entirely and document the deferral.
  - **Gate:** observable — when the false-depth substrate has produced verdicts on 5+ stage-2-invocations AND the practical-detection criterion (≥80% TP / ≤20% FP) is NOT met after at least one weight-calibration attempt.
  - **Why (if revived):** mechanism-honesty (per Sensemaking FP3) — a substrate that doesn't detect what it claims to detect is worse than no substrate (false confidence). The fallback preserves routeman as detectable-on-4-of-5-modes; false-depth becomes deferred-substrate-frontier.

## Reasoning

This section walks through the major decisions, naming what was considered and rejected.

### Why a separate protocol (R-Cand-2), not self-audit (R-Cand-1) or runner-level (R-Cand-6) or no-runner (R-Cand-4)?

R-Cand-1 (self-audit at routeman invocation-end) was rejected because it conflates audit semantics with routeman's enumeration — they're separate concerns. The discipline pattern in this project is to separate concerns architecturally; the design memo treats routeman as one discipline and the audit as a sibling protocol. Self-audit would also make the audit's bypass risk worse (someone editing routeman SKILL.md to disable enforcement would also disable the audit that detects the bypass).

R-Cand-3 (multi-runner by mode — different runners for different LAYER-2 modes) was rejected as over-engineering. The runner is a single architectural commitment; varying it per mode multiplies maintenance.

R-Cand-5 (periodic-batch audit from external poller) was rejected because the project has no scheduler at L0; the design would introduce infrastructure dependency for unclear benefit.

R-Cand-6 (runner-level audit embedded in /MVL + /MVLw) was rejected because it conflates audit with orchestration; the audit logic would need to be replicated across the runners and across future runners; the maintenance cost outweighs the benefit.

R-Cand-4 (substrate-self-audit at consumer side — no dedicated runner; substrates are self-disclosing) was the Inverted-frame candidate from the Inherited Frame Audit. It failed two key dimensions: it doesn't naturally cover false-depth (which requires CROSS-Route pairwise analysis — a "user reads" pattern doesn't naturally do pairwise comparison); and it doesn't detect spec-bypass (the user reading the Route Map can't easily know whether routeman's SKILL.md was edited to disable enforcement). However, R-Cand-4 has structural appeal as the L2+ pattern (when the system-Selector takes over Route Map reading, it naturally inherits substrate-check behavior). The KILL-with-seed verdict preserves R-Cand-4 as the L2+ extension hook; the first-ship runner is R-Cand-2.

R-Cand-2 (separate audit protocol at `cognitive_harness/protocols/layer2_audit.md`) wins on multiple dimensions: it separates concerns cleanly; it follows existing project patterns (`loop_diagnose.md`, `outcome_review.md` precedents); it's invocable by both runner and human (supporting L0 manual invocation + L1 runner auto-invocation); the protocol file is a discrete deliverable SKILL.md authoring can ship; the bypass-detection sub-feature (the spec-coherence check) is straightforward to author.

### Why per-mode firing inside per-invocation gating (C-Cand-4), not uniform cadence (C-Cand-1) or event-triggered-only (C-Cand-3)?

C-Cand-1 (per-invocation gating + per-mode firing) was almost the survivor — it's structurally equivalent to C-Cand-4 but less explicit about per-mode asymmetry. C-Cand-4 makes the per-mode firing rules first-class in the design, which is important because the 5 modes have heterogeneous substrate availability (3 modes detectable cheaply per-invocation; Calibration-Drift requires N≥2 invocations; false depth requires stage-2 present). Uniform cadence would either fire all 5 modes per-invocation (wasted work; Calibration-Drift can't fire usefully at N=1) or fire none per-invocation (missing the cheap detections).

C-Cand-2 (every-N-invocations gating) adds latency for no clear benefit.

C-Cand-3 (purely event-triggered, no fixed-interval gating) loses temporal regularity; the user can't expect when verdicts will arrive.

C-Cand-4's per-mode firing rules are: A1+A3 modes (Prescriptive-Without-Cycle-Context, Rename-Renders-Itself-Cosmetic, filler-meta-reasoning) fire per-invocation cheaply by reading the current `routeman.md`; Calibration-Drift fires when `_navig.md` shows ≥2 invocations AND the threshold-window has accumulated; false depth fires when `routeman.md` contains sub-routes (stage-2 has run).

### Why autonomy-level scaling (T-Cand-3), not invocation-count scaling (T-Cand-3-Inv) or per-mode-per-level cell-by-cell (T-Cand-1)?

T-Cand-1 (cell-by-cell values) is rigid and hard to extend; loses scaling structure.

T-Cand-3-Inv (invocation-count scaling, analogous to Baldwin's N≥30 gate) is genuinely a different axis from autonomy-level scaling — autonomy may advance while per-discipline N stays low, or vice versa. The invocation-count axis is structurally relevant but the per-discipline-N source is itself a deferred decision (Q10's source is deferred to SKILL.md authoring per `devdocs/inquiries/2026-05-24_02-00__investigate_frontier_revisit_emission_policy/finding.md`). Adopting invocation-count scaling NOW would require committing to a per-discipline-N source NOW, which is premature.

T-Cand-3 (per-mode rule + per-autonomy-level scaling adopting `autonomy_ladder.md`'s evidence-gate pattern) wins because: (a) the autonomy register already exists (designed by 24-40); (b) the autonomy ladder's per-level evidence-gates are an established scaling pattern in the project; (c) the audit's external grounding is via the register (independent of audit history) — mitigates the audit's own LAYER-2 self-coupling risk per /surfacing's framework.

A future enhancement (deferred): two-axis scaling combining autonomy-level AND invocation-count when Q10's per-discipline-N source ships. This is preserved as research frontier.

### Why majority-vote composite (F-Cand-4) for false depth, not AND-threshold (F-Cand-2) or OR-threshold (F-Cand-3) or DEFER (F-Cand-5)?

F-Cand-3 (OR-threshold) was rejected for high false-positive rates — any single component firing produces a verdict; legitimate-distinctness sub-routes would frequently false-positive.

F-Cand-2 (AND-threshold) was rejected for high false-negative rates — requiring all three components to exceed thresholds catches only the most extreme false-depth cases; most practical cases would slip through.

F-Cand-1 (triple-weighted composite) and F-Cand-6 (two-stage detector) were deferred as more sophisticated alternatives that may emerge if F-Cand-4 underperforms.

F-Cand-5 (DEFER false-depth substrate entirely; ship the audit covering 4 of 5 modes) was a serious alternative reflecting the FP3 mechanism-honesty principle (don't ship a placeholder substrate). It was rejected for first ship because: (a) the user's "lets dive deep" framing favors committing options over punting; (b) the F-Cand-4 design ships a working substrate with documented equal-weight defaults + calibration revival trigger; (c) the equal-weight default is the maximum-entropy baseline absent prior data, which is structurally defensible rather than arbitrary; (d) F-Cand-5 is preserved as the KILL-with-seed fallback if F-Cand-4 underperforms in practice — the substrate can be dropped and re-deferred at that point.

F-Cand-4 (majority vote of 3 components; equal weights at first ship; calibration revival trigger) wins because it ships a working substrate, is calibratable, has a fallback path, and targets the practical-detection criterion (≥80% TP / ≤20% FP per Sensemaking Ambiguity 4) rather than a perfect-detection criterion (which would be impossible).

### Why per-mode dispatch table (S-Cand-1), not helper functions (S-Cand-2) or unified parser (S-Cand-3)?

S-Cand-2 (per-mode helper functions) was rejected as code-style; less extensible than a table.

S-Cand-3 (unified parser) was rejected for mode-conflation risk; the substrates have genuinely different shapes (transition_history is YAML-structured; A1+A3 outputs are markdown-citation-formatted; drop-rate is numeric).

S-Cand-1 (per-mode dispatch table) wins because: (a) it inherits the 24-01 inquiry's per-movement-type priority chain pattern, which is pre-validated in the project; (b) it's extensible (new modes added as new rows; existing rows unchanged); (c) the table representation makes the per-mode logic auditable (each row's behavior is visible in one place); (d) Critique's R5 refinement (spec-coherence check for Prescriptive-Without-Cycle-Context) is straightforward to add as an additional column for applicable modes.

### Why parallel `_audit.md` (V-Cand-2), not extending `_navig.md` (V-Cand-1)?

V-Cand-1 (extend `_navig.md` with audit-extension fields per Q12) was the alternative that honors the minimum-but-load-bearing-artifact-set principle (per Sensemaking FP1). It was rejected because: (a) it mixes audit concerns with persistence concerns (the same file holds frontier candidates AND audit verdicts; the file's purpose becomes unclear); (b) `_navig.md`'s schema (the protocol's frontier-candidate-record per `multi_resolution_navigation.md`) is centered on Routes-as-candidates, not on audit verdicts; the schema extension would feel forced; (c) V-Cand-2 (parallel `_audit.md` file) cleanly separates the concerns at the cost of one additional file per inquiry.

V-Cand-3 (both: minimal record in `_navig.md` + detailed in `_audit.md`) was rejected for storage overhead without clear benefit.

V-Cand-2 wins for separation of concerns + file responsibility clarity. The parallel file follows the hybrid placement pattern from 24-00 (per-inquiry placement for inquiry-scoped invocations; central placement for project-scoped).

### Why the 5-tier verdict format (PROCEED / FLAG / RE-RUN / INFO / ERROR), not the design memo's 3-tier (PROCEED / FLAG / RE-RUN)?

The design memo's recognition signals + RESUME's verdict pattern use 3-tier (PROCEED / FLAG / RE-RUN). The autonomy register's read protocol uses 3-tier (INFO / ERROR / ERROR) for substrate-read failures. The audit's verdict format combines both: PROCEED/FLAG/RE-RUN for normal verdicts (per the design memo's pattern) + INFO/ERROR for substrate-read failures (per the autonomy register's pattern). The 5-tier format gives the user calibrated attention signals — gentle INFO (background notice) vs PROCEED (silent) vs attention-required FLAG/RE-RUN vs urgent ERROR. Critique's R6 refinement made this 5-tier explicit; without it, the audit's substrate-read failures would have no surface category.

### Why the spec-coherence check (R5 refinement) only for Prescriptive-Without-Cycle-Context?

The other LAYER-2 modes don't have a spec-coherence concern in the same way: Calibration-Drift's recognition signal is "declared-vs-observed divergence" — the spec's content isn't the substrate. Rename-Renders-Itself-Cosmetic's recognition signal is "≥50% empty pointers across 5 invocations" — the spec doesn't enforce this in a directly-bypassable way (someone editing the spec to remove the Guidance-Pointer schema would break far more than this mode's detection). Filler-meta-reasoning's recognition signal is "high W5 drop-reason frequency" — again, the spec's content isn't the bypass target. Prescriptive-Without-Cycle-Context is unique because the A1+A3 enforcement IS a Stage-1 procedure committed in the spec; editing the spec to disable enforcement is a plausible debug move. The spec-coherence check distinguishes "spec edit (expected; INFO-tier)" from "genuine failure with spec unchanged (FLAG-tier or RE-RUN-tier)."

### What could be wrong with this design?

The strongest prosecution against the design (from Critique's adversarial evaluation):

- **Framework-level self-coupling residual:** the audit's framework + the audited's framework both stem from the design memo + 18-58; the audit's INTERPRETATION of substrate signals depends on the audit's own framework, which shares concepts with the audited. The external grounding (autonomy register) mitigates threshold-level self-coupling, but framework-level self-coupling remains. The design acknowledges this as a moderate residual with a revival trigger (framework revisions trigger substrate re-validation); a deeper mitigation (e.g., a separate framework for audit verdicts) is preserved as research frontier.

- **L0 manual-invocation reliability:** at L0, the audit is human-attended (the runner outputs a pointer to the protocol; the human invokes it). If the human forgets, the audit doesn't run. This is acceptable at L0 (the project is single-user; the user's attention is the bottleneck for everything) but degrades the audit's value. L1's runner auto-invocation closes this gap.

- **False-depth substrate's equal-weight baseline could underperform.** Without prior calibration data, equal weights is the maximum-entropy baseline; in practice it may produce too many false-positives or miss too many true-positives. The calibration revival trigger (after 5+ stage-2 invocations) handles this. If the trigger fires negatively (substrate underperforms even after weight tuning), the F-Cand-5 fallback (drop the substrate) is the documented next step.

- **Spec-coherence check's brittleness:** the check reads routeman SKILL.md for a specific Stage-1-enforcement section; if the spec is reorganized (section moved or renamed), the check breaks. The design's mitigation is documenting the canonical section identifier; future spec edits should preserve the identifier or update the audit's protocol.

## Open Questions

### Monitoring

- **Whether the audit's separate-protocol invocation is reliably triggered at L0** — observable when at least 5 routeman invocations have occurred at L0 AND the audit's verdict log shows the corresponding 5 audit records (or the user reports forgetting to invoke). If reliability is low, the design may need an L0 supplementary mechanism (e.g., the runner's output emphasizes the audit-invocation pointer more strongly; the runner refuses to mark itself complete until the user confirms audit invocation).

- **Whether the false-depth substrate's equal-weight defaults produce acceptable practical-detection rates** — observable when 5+ stage-2 routeman invocations have accumulated and the substrate has fired (or failed to fire) on the resulting sub-routes. The calibration revival trigger fires at that point; weights are tuned to the actual TP/FP rates.

- **Whether the spec-coherence check correctly distinguishes spec edits from genuine failures** — observable when a routeman SKILL.md edit occurs AND the audit fires Prescriptive-Without-Cycle-Context. The verdict should include "spec-coherence: edited" annotation; if it doesn't, the spec-coherence check's logic needs refinement.

- **Whether the audit's 5-tier verdict format provides calibrated attention signals in practice** — observable when at least 10 audit verdicts have surfaced and the user reports whether the tier distinction is useful. If the user finds INFO indistinguishable from PROCEED (both ignored), the tier may collapse.

### Blocked

- **The audit protocol file's exact content** — blocked on the protocol-authoring follow-up (Next Actions COULD). This finding commits the design; the protocol file commits the runtime spec.

- **The runner-hook updates to /MVL and /MVLw** — blocked on the runner-update follow-up. Without the runner hook, the audit's L1 auto-invocation doesn't activate; L0 manual invocation works in the meantime.

- **The two-axis threshold scaling (autonomy-level × per-discipline-N)** — blocked until Q10's per-discipline-N source ships (per 02:00 inquiry's deferral). Single-axis (autonomy-level) scaling is sufficient at first ship.

### Research Frontiers

- **Audit-of-audit (meta-recursive concern)** — should the audit itself be audited for its own LAYER-2 modes? Per Decomposition's deferral of element E13, this is preserved as research frontier. Revival trigger: when 10+ audit verdicts have accumulated AND framework-level self-coupling is observed.

- **Generalization to other Boundary disciplines** — the audit's pattern (separate protocol + per-mode dispatch + per-autonomy-level scaling + 5-tier verdict format) may be portable. Revival trigger: when a second Boundary discipline ships with LAYER-2 modes defined.

- **Substrate-self-audit-at-consumer-side as L2+ default** — when the system-Selector ships at L2+, the substrate-self-audit pattern (R-Cand-4) becomes the natural default; the separate audit protocol may become redundant. Revival trigger: L2+ system-Selector ships per `docs/autonomy_ladder.md`.

- **False-depth substrate evolution** — F-Cand-1 (triple-weighted composite) and F-Cand-6 (two-stage detector) are preserved as research-frontier seeds if F-Cand-4-with-equal-weights underperforms after calibration.

### Refinement Triggers

- **If the audit fires excessive verdicts at L0** (the user reports churn / fatigue), the per-mode firing rules' thresholds may need tightening, OR the audit's surfacing tier may need re-classification (some FLAG verdicts → INFO instead). The audit's threshold values are calibratable; the surfacing tier is per-mode-configurable.

- **If the false-depth substrate's calibration revival trigger fires negatively** (substrate underperforms even after weight tuning), the F-Cand-5 DEFER fallback activates — false-depth is dropped from the audit; the design covers 4 of 5 modes; the false-depth question is re-opened as substrate-frontier-open.

- **If the spec-coherence check is brittle** (false-positives on spec reorganization), the check's logic needs refinement — possibly fingerprinting the spec's Stage-1-enforcement BEHAVIOR rather than its TEXT (e.g., by re-running A1+A3 enforcement on a known-input test case).

- **If the substrate-self-audit-at-consumer-side pattern (R-Cand-4) emerges as natural earlier than L2+** (e.g., the user starts running substrate checks themselves manually at L0/L1 without invoking the protocol), the design's L2+ extension hook can be brought forward.

- **If a second Boundary discipline ships with LAYER-2 modes** AND the audit's design pattern is observed to generalize naturally, the research frontier on cross-discipline generalization may be revived earlier.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Question 4 — Who runs the LAYER-2 identity-erosion audits, at what cadence, and how are the thresholds calibrated? — AUDIT SUBSTRATE PARTIALLY SUPPLIED 2026-05-24 (mechanism still open)
🟡 PARTIAL PROGRESS (2026-05-24): AUDIT SUBSTRATE supplied for 4 of 5 LAYER-2 modes by devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md + devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md. The audit MECHANISM (who runs the audit, at what cadence, with what threshold calibration) — Q4's actual question — remains OPEN.

Mode-by-mode substrate status:

Auto-vs-Judgment Calibration Drift (design memo) — substrate supplied by 24-40's transition_history field in docs/autonomy_level.md. The register declares the current level; transition_history provides the per-change audit trace; observed routeman auto-vs-judgment behavior can be compared against the declared level.
Prescriptive-Without-Cycle-Context (design memo) — substrate supplied BY CONSTRUCTION by 24-01's A1+A3 enforcement (file-path-and-section citation in WHY text + drop-with-reason at Stage 1 generation time). Un-anchored pointers are structurally impossible; the mode is detected when WHY text lacks parseable file-path reference or the reference doesn't resolve.
Rename-Renders-Itself-Cosmetic (design memo) — substrate supplied BY CONSTRUCTION by the same A1+A3. Detected when ≥50% of Routes have empty Guidance Pointers OR all WHYs lack A1 citations across 5 consecutive invocations.
filler-meta-reasoning (added by 18-58; LAYER-2 scope extension) — substrate supplied BY CONSTRUCTION by the same A1+A3. Detected when meta-reasoning field content consistently fails to anchor downstream Stage 1 (high frequency of "W5 unresolved" drop-reasons across invocations).
false depth (added by 18-58; LAYER-2 scope extension) — NO substrate yet. Stage-2 sub-routes with only positional distinction (no structural distinction; meta-reasoning fields read interchangeably) are not currently catchable by construction. The substrate question is open for this mode.
What Q4 still needs. The substrate progress makes 4 of 5 LAYER-2 modes operationally detectable, so the audit-infrastructure inquiry can narrow its focus from "design per-mode recognition signals" to "design the mechanism that consumes the substrate." Open sub-questions: who runs the audit (e.g., does /reflect run it as part of its process-quality scope; does the discipline self-audit at invocation end; does a separate audit discipline need creation); at what cadence (per-invocation; periodic; event-triggered); how thresholds (the "across 5 consecutive invocations" type) are calibrated to the project's actual invocation rate (which may be one per day at L0 and many per hour at L4+); and substrate-question-for-false-depth (does Stage 1's drop-rate plus a sub-route-distinctness check suffice, or is a different substrate required).

Q4's Tier-1 status is unchanged — the SKILL.md still cannot ship a complete audit without the mechanism design — but the inquiry's scope is now narrower. Preserved pre-substrate content follows.

lets dive deep, but we dont care about reflect now, since it is not actively developed now
```

</details>
