# State: routeman_directional_input_read_policy

## Flow-type
extended-surfacing

## Pipeline
Su → S → D → I → C (always)

## Progress
- [x] Surfacing
- [x] Sensemaking
- [x] Decomposition
- [x] Innovation
- [x] Critique
- [x] CONCLUDE

## Iteration
1

## Status
COMPLETE

## Next Discipline
—

## Relationships
- CONTINUES FROM: devdocs/inquiries/2026-05-27_14-03__routeman_simplification_endgoal_compatibility (most recent inquiry; this directional-read-policy question is finer-grained than those follow-ups)
- CONTINUES FROM: devdocs/inquiries/2026-05-27_13-23__routeman_per_route_schema_refinement (per-Route schema content commitments — what would be READ)
- CONTINUES FROM: devdocs/inquiries/2026-05-27_00-51__routeman_output_simplification (file-structure commitments — what FILES would be READ)
- CONTINUES FROM: devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes (re-invocation behavior — load-bearing prior)
- CONTINUES FROM: devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field (directional-mode definition)
- RELATED: cognitive_harness/routeman/references/routeman.md (live spec; read policy would land in §3.2 Reception or §3.5 Re-invocation)

## History
- 2026-05-27 14:49: Created. Question: define routeman's INPUT-READ POLICY when invoked toward a direction — specifically (a) should it read prior `routeman.md` files, and (b) should it read prior `_route.md` files? Each adjudicated separately as tendency/mandatory/optional. Layer Commitment: PROCESS. Synthesis Trigger active (5 prior findings inherited).
- 2026-05-27 14:52: Surfacing complete. 18 items across 7 regions (9 core / 6 sub / 1 side). Key asymmetry surfaced: prior 24-00 implicitly mandated cross-invocation read via protocol resume mechanism but never explicitly graded the policy strength — this inquiry closes that grading gap. Live spec §3.2/§3.5 currently use "optional" language without per-file-type or per-mode distinction. 8 frontier flags emitted (FF-Su1 operational definitions; FF-Su2 one-vs-two questions; FF-Su3 18-58 input-contract interaction; FF-Su4 "keep up to date" disambiguation; FF-Su5 "tendency" novelty; FF-Su6 read-failure handling; FF-Su7 generic-mode consistency; FF-Su8 Parent Route implicit read). Self-assessment: PROCEED. Next: Sensemaking.
- 2026-05-27 15:05: Sensemaking complete. SV1→SV6 with 7 ambiguities collapsed (6 HIGH + 1 MEDIUM-HIGH). Stabilized model: two file-type-specific verdicts under a three-tier operational vocabulary (MANDATORY / MANDATORY-WHEN-AVAILABLE / SHOULD / MAY). Verdicts: routeman.md = MANDATORY-WHEN-AVAILABLE (directional mode structurally requires reading parent's file to acquire parent-route-id + context); _route.md = SHOULD (value-adding for orchestration + Baldwin substrate but not operationally required). Graceful-degrade is the default failure mode (FLAG + proceed without; HALT only on malformed-AND-needed). Policy lands in §3.2 Reception of live spec. The 18-58 stage-2 input contract is unchanged; policy makes implicit operational mechanic explicit. "Keep it up to date" disambiguated as BOTH route-content currency AND invocation-record currency. Generic mode flagged for follow-up (correctly out of scope). 8/8 frontier flags addressed. Accommodation trigger did NOT fire. No failure modes observed. Self-assessment: PROCEED. Next: Decomposition.
- 2026-05-27 15:12: Decomposition complete. 7 pieces along substrate / per-file-policy / clarification / delta / follow-up / deliverable seams. Tier 0: P1 common substrate (vocabulary + failure handling). Tier 1 (parallel): P2 routeman.md prose; P3 _route.md prose; P4 18-58 clarification; P6 generic-mode follow-up scope. Tier 2: P5 spec-edit delta. Tier 3: P7 finding.md integration. 9 interfaces; assumptions-not-data check passed. 12 atomic decisions cluster cleanly into 7 pieces; top-down + bottom-up agree. Self-evaluation 7/7 PASS. No failure modes observed. Self-assessment: PROCEED. Next: Innovation.
- 2026-05-27 15:25: Innovation complete. Production-Task mode STANDARD DEFAULT. 4/7 mechanism coverage (justified for confirmation-shape inquiry; Inversion + Absence Recognition + Extrapolation not needed because Sensemaking adjudicated). 7 pieces produced: P1 substrate (4-tier vocab MANDATORY/MANDATORY-WHEN-AVAILABLE/SHOULD/MAY + graceful-degrade default); P2 routeman.md prose (MANDATORY-WHEN-AVAILABLE with failure handling per state); P3 _route.md prose (SHOULD with orchestration + Baldwin + staleness rationale); P4 18-58 clarification note (operational mechanic for parent-route-id acquisition); P5 6-row spec-edit delta against §3.2 + §3.3 + §3.5; P6 generic-mode follow-up scope statement; P7 finding.md deliverable shape spec. All outputs ACTIONABLE. No meta-decision pieces fire intervention-shape commitments. Inherited Frame Audit did NOT fire. No failure modes observed. Self-assessment: PROCEED. Next: Critique.
- 2026-05-27 15:35: Critique complete. 11 dimensions (5 CRITICAL + 4 HIGH + 2 MEDIUM); 2 project-specific risk dimensions added (D10 cross-mode consistency, D11 canon-precedent alignment). Multi-axis prosecution applied. K13 meta-pattern honored. Verdict: the deliverable SURVIVES (ACTIONABLE) with D7 + D11 + multi-head-concurrency resolvable caveats. Caveats route to CONCLUDE: (1) 4-tier vocabulary noted as project-coined for runtime-behavior policies; (2) project-wide unified spec-runtime vocabulary flagged as Open Question; (3) multi-head concurrent directional invocation on same parent flagged as out-of-scope Open Question. 5/5 convergence criteria met. Signal: TERMINATE. No failure modes observed. Self-assessment: PROCEED. Next: CONCLUDE.
- 2026-05-27 15:45: CONCLUDE complete. finding.md written with all sections (Question + Finding Summary + Finding [why routeman.md MANDATORY-WHEN-AVAILABLE + why _route.md SHOULD + 4-tier vocabulary + graceful-degrade default + 18-58 preservation + multi-head out-of-scope] + Inherited Commitments Re-test against 5 priors + Next Actions [MUST: 6-row spec-edit delta; 2 COULD; 2 DEFERRED] + Reasoning + Open Questions). One-sentence answer: routeman's directional-mode input-read policy is MANDATORY-WHEN-AVAILABLE for routeman.md (operationally required to acquire parent-route-id; HALT only on malformed-AND-needed) and SHOULD for _route.md (value-adding for orchestration + Baldwin substrate; FLAG+proceed on any failure); graceful-degrade is the default; 4-tier project-coined vocabulary (MANDATORY/MANDATORY-WHEN-AVAILABLE/SHOULD/MAY) introduced for runtime-behavior policies; policy lands in §3.2 Reception; 18-58 stage-2 contract unchanged (made implicit explicit). Both currencies enabled (route-content via routeman.md; invocation-record via _route.md). 5 discipline outputs archived to docarchive/. Status: COMPLETE.
