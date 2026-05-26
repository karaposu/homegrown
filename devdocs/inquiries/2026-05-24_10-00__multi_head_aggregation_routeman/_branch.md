# Branch: Multi-head aggregation protocol for routeman (Q2 dive-deep)

## Question

- **Subject** — routeman's multi-worker aggregation protocol under the corrected isolated-session + file-scanning architecture.
- **Action** — design (a from-scratch design problem; no current mechanism exists).
- **Level** — discipline-level (routeman SKILL.md authoring concern) with protocol-level interactions (the file-system protocol Q5 just resolved + the file-shape contracts Q6 just resolved + the LAYER-2 audit Q4 + the adaptive-guidance Q3 mechanisms all read into the aggregation surface).
- **Observation targets** — preserve each clause as a separate aspect (per LOOP_DIAGNOSE MC2):
  1. **Dedup criterion across workers** — when N inquiry folders each carry candidate next-moves, which candidates count as "the same" across workers and which as distinct? What surface (movement type + parent-route identifier + Question + Source-anchor) defines identity?
  2. **Per-worker provenance preservation** — how is "which worker produced this candidate" attached to each Route in the aggregated Route Map (a schema field per Route; a separate provenance ledger; both)?
  3. **Telemetry aggregation** — how are per-worker telemetry signals (PROCEED/FLAG/RE-RUN verdict lines per discipline per worker; per-worker structural-check pass/fail; per-worker convergence telemetry) rolled up into the singleton Route Map's Telemetry block?
  4. **Priority allocation under contention** — when multiple workers contribute candidates of the same Movement Type, what determines which Route ranks higher (per-worker confidence label per 02-00; per-worker source-anchor strength; vote-count across workers; first-come; deterministic by candidate-id)?
  5. **Hierarchical Route Map interaction (FF-3 from 18-58 staged-mapping)** — multi-head + staged-mapping together produce a structure that is both N-worker-wide AND sub-routed-deep per parent route; how do these two orthogonal dimensions compose in the aggregated Route Map?
  6. **First-ship vs deferred design choice** — the acceptable shipping alternative named in Q2's body is "ship N=1 worker per invocation; document N>1 aggregation as revision when multi-head workers materialize." Is that the right phase-progression cut, or should the aggregation mechanism ship at first-write with a single-worker degenerate case?
  7. **Scope distinction from Q14 (cross-inquiry aggregation across invocations)** — Q2 is per-invocation multi-worker aggregation; Q14 is multi-invocation aggregation across time. The design must avoid conflating them while preserving extensibility from Q2 toward Q14.
- **Deliverable shape** — design with components and trade-offs, plus an explicit phase-progression cut (what ships at L0 / what hooks open at L1+ / what defers to L2+ when multi-head materializes).

Under the corrected isolated-session + file-scanning architecture (per `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` and Q5 at `devdocs/inquiries/2026-05-24_07-30__file_system_protocol_workers_routeman_runners/finding.md`), and inheriting the routeman-output schema commitments from 24-00 + the staged-mapping additions from 18-58 + the per-route-type emission policy from 02-00 + the file-shape contracts from 09-00: design the aggregation protocol routeman uses when it scans across N parallel worker inquiry folders to produce ONE Route Map per invocation — covering dedup, per-worker provenance, telemetry aggregation, Priority allocation under contention, the interaction with the hierarchical (staged) Route Map structure, the first-ship-vs-deferred phase-progression cut, and the scope distinction from Q14 cross-invocation aggregation.

## Goal

- **Criterion** — actionability + phase-fit + identity-preservation. The design must be SKILL.md-authorable directly (no further design rounds needed for the aggregation surface); fit the project's current L0 phase (no premature multi-head infrastructure when multi-head hasn't shipped); preserve routeman's identity (singleton main navigator, file-mediated, enumerate-all, observe-only).
- **Use case** — the routeman SKILL.md author can encode the aggregation behavior directly. The current-ship behavior under N=1 worker per invocation is fully specified; the N>1 path is specified to whatever extent the project's current state justifies (with explicit hooks for L1+/L2+ rather than blanket deferral).
- **Desired outcome** — Q2's Tier-1 gating closed for SKILL.md authoring; the design that ships at L0 has a clean extensibility path to N>1; the per-worker provenance + telemetry + priority + dedup decisions are anchored in mechanism rather than convention.
- **What would fail** — (a) a vague "routeman aggregates across workers" without specifying dedup/priority/provenance/telemetry shape; (b) a heavy multi-head infrastructure that requires multi-head to ship before it can be tested (premature); (c) blanket deferral to "when multi-head ships" without specifying which schema fields and protocol hooks must exist at L0 so the N>1 path doesn't require breaking changes; (d) a design that conflates Q2 (per-invocation multi-worker) with Q14 (multi-invocation cross-time) and over-couples the two.

## Source Input

```text
Q2 — dive deep
```

The user's input is the slash-command invocation `/MVLw "Q2 — dive deep"` against the frontier-questions finding at `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md`. Q2 in that finding is the multi-head aggregation question (full content at line 191+). The dive-deep verb signals the full /MVLw pipeline at full depth on Q2, matching the pattern used for Q4 (06-00), Q5 (07-30), and Q6 (09-00) dive-deeps in the same sequence.

## Scope Check

Question covers goal. The question enumerates 7 sub-aspects (dedup; provenance; telemetry; priority; hierarchical interaction; first-ship-vs-deferred; Q14 scope distinction) and the deliverable shape (design with trade-offs + explicit phase-progression cut). The goal names 4 criteria (actionability; phase-fit; identity-preservation; extensibility hooks at L0 for L1+/L2+). Each sub-aspect maps to one or more goal criteria. The hierarchical-Route-Map interaction (sub-aspect 5) was added because 18-58's FF-3 was explicitly named in the frontier-questions finding's "Question 2 (multi-head aggregation) — INTERACTION ADDED" note (line 60); preserving it as a distinct observation target prevents the design from silently dropping it. The Q14 scope distinction (sub-aspect 7) was added because Q14 (cross-inquiry aggregation across invocations) is explicitly named as a "related but different" frontier in the finding's Q14 body and at Q2's "what it gates" paragraph — preserving the scope-distinction-as-design-output prevents silent coupling.

Specific-vs-pattern check: the question targets the BROADER PATTERN of multi-worker aggregation, not specific examples (no observed multi-worker invocations exist yet — multi-head hasn't shipped). The design must be pattern-level. Reading is unambiguous.

## Synthesis Trigger

This inquiry consolidates commitments from 12 priors:

- `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` — Q2's original framing + Tier I substantive re-statement + the candidate resolution path + the "ship N=1 with extensibility hooks" alternative.
- `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` — the cycle-consumer / sibling-navigator / prescriptive-residual layered identity; EF-1 commitment to enumeration-first preserving multi-head; the 17-attribute route-card schema; singleton-main-navigator architecture.
- `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` — isolated-session + file-scanning architecture; multi-head realized at the WORKER level (N parallel worker sessions writing to N inquiry folders); routeman as singleton scanning across all.
- `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` — Point 1 hybrid two-stage staged route mapping with selective-runtime trigger; FF-3 (hierarchical Route Map consumption) explicitly named as living within Q2's scope; the meta-reasoning field + 18-attribute sub-routes.
- `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` — `_navig.md` + `routeman.md` schemas (per-inquiry vs project-scope hybrid placement); persistent + in-place evolution + append lifecycle; the two-tier boundary with `branch_inquiry.md`.
- `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` — L0/L1/L2+ phase progression via `docs/autonomy_level.md`; 3-tier failure handling (INFO/ERROR/ERROR); transition history.
- `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md` — per-movement-type chain pattern; per-Route confidence labels; Stage 1 deterministic + Stage 2 LLM-judgment-within-constraints pattern; cycle-output-absent graceful fallback.
- `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md` — Movement Family primary axis (Progression / Re-orientation / Coordination, 6/5/5) + 6 secondary attributes per type; the per-type coordinate table preserving all 16 types.
- `devdocs/inquiries/2026-05-24_02-00__investigate_frontier_revisit_emission_policy/finding.md` — Option 13 (Hybrid) confidence-graduated emission + per-route-type-split; D1 confidence labels (LOW/MED/HIGH at per-discipline-N 20/30); per-discipline-N source deferred with first-ship LOW fallback; downstream-decides-via-metadata pattern; two-epoch framing.
- `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md` — protocol file at `cognitive_harness/protocols/layer2_audit.md`; runner-invoked at routeman invocation-end (L1+); per-mode dispatch table pattern; substrate consumption; 5-tier verdict format (PROCEED / FLAG / RE-RUN / INFO / ERROR); spec-coherence check against routeman SKILL.md.
- `devdocs/inquiries/2026-05-24_07-30__file_system_protocol_workers_routeman_runners/finding.md` — folder topology (workers write to `devdocs/inquiries/<YYYY-MM-DD_HH-MM__slug>/`; branches at `[parent]/branches/[branch_id]/`); atomic-write convention (POSIX rename); verdict-line two-part write-completeness check; scan-detection (full scan at L0; mtime-filtered at L2+); routeman's completion-emission as `_navig.md` + `routeman.md` + `routeman_status: COMPLETE` field; partial-failure handling = detection-only via 3-tier vocabulary.
- `devdocs/inquiries/2026-05-24_09-00__file_shape_contracts_upstream_artifacts/finding.md` — 5 per-discipline contracts + 2 inquiry-level contracts as sections in the Q5 protocol file; section-level minimum-shape granularity; validation layer in routeman SKILL.md (parser + per-discipline dispatch + 3-tier emitter); validation-without-enforcement at L0; R1 drift-coordination meta-process.

Each of these priors carries commitments that this inquiry will inherit. CONCLUDE will require the finding to include an `## Inherited Commitments Re-test` section per `cognitive_harness/protocols/conclude.md` Synthesis re-test enforcement. The Sensemaking discipline must do the re-testing during its workspace, not just record the inheritance; Critique must adversarially test whether the aggregation design coheres with each prior's commitments.
