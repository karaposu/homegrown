# Branch: File-system protocol between worker sessions, routeman, and runners (Q5 dive-deep)

## Question

- **Subject** — the file-system protocol joining three roles (worker sessions writing inquiry-folder artifacts; routeman scanning + reading those artifacts + writing its Route Map; runners — /MVL, /MVLw, future — invoking workers and routeman at appropriate moments). The ROUTEMAN-OUTPUT side is already committed by `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` (file names `_navig.md` + `routeman.md`; hybrid placement by invocation scope). The WORKER-WRITE side + the inter-role choreography remains the open frontier.
- **Action** — design.
- **Level** — protocol-layer artifact (lives at `cognitive_harness/protocols/<name>.md`) cross-cutting workers + routeman + runners; not inside any single discipline. The level decision (separate protocol file vs sections inside multiple SKILL.md files) is part of the design.
- **Observation targets** — SEVEN separable sub-aspects, each requiring its own analysis (the user's gating enumerated 5; 2 more are surfaced via the 16-31 correction finding's open FFs):
  1. **Folder topology** — which folders routeman scans (FF-2 from 16-31). Defaults to `devdocs/inquiries/` + nested branch folders; configurability and project-scoped vs inquiry-scoped routing.
  2. **Filename patterns + section structures workers write** — the canonical file inventory each worker produces in an inquiry folder; the section conventions the audit and routeman can rely on. Adjacent to but distinct from Q6 (file-shape contracts).
  3. **Write-completeness signaling** (FF-3 from 16-31) — how workers signal that an inquiry artifact is write-complete and ready for routeman to scan. `_state.md` Status field? Separate marker file? Atomic-write convention?
  4. **Routeman's completion-emission shape** — when routeman finishes a Route Map, where does the completion signal live? In `_navig.md`'s readable run summary? A status field in `_navig.md`? A state update somewhere else?
  5. **Partial-failure handling** — worker crash mid-write; routeman scan timing out; malformed file content; concurrent writes; race conditions. Incorporates FF-4 (partial-state read protection) from 16-31.
  6. **Scan detection mechanism** (FF-1 from 16-31, implicit in user's gating) — how does routeman detect newly-written files since its last scan? Modification-time / marker-file / explicit-parameter / hybrid?
  7. **Scan-scope economy** (FF-5 from 16-31) — as the inquiry corpus grows (more inquiry folders over time), what bounding mechanism keeps scan-scope economic? Modification-time-since-last-scan? Recent-N-inquiries? Explicit scope-target list?
- **Deliverable shape** — protocol specification with folder topology, filename patterns, write-completeness signaling, completion-emission shape, partial-failure handling, scan detection, and scan-scope economy. Sufficient for SKILL.md authoring + runner-spec updates + worker-pipeline conventions to inherit without re-running this inquiry. Per the Q5 candidate resolution path: "design the file-system protocol between worker sessions, routeman, and runners for the corrected isolated-session architecture."

The question: produce the file-system protocol design covering all 7 sub-aspects, **building on** the ROUTEMAN-OUTPUT commitments from 24-00 (`_navig.md` + `routeman.md` + hybrid placement) and **honoring** the architectural constraints from 16-31 (isolated-session + file-scanning; no in-context parameter pass).

## Goal

- **Criterion** — an actionable protocol specification SKILL.md authoring + runner-spec updates + worker-pipeline conventions can adopt verbatim; addresses all 7 sub-aspects; preserves isolated-session + file-scanning architecture; preserves enumerate-all identity; phase-fit at L0 (current state) with documented L2+ extension hooks; commits options rather than punting to "future work."
- **Use case** — routeman SKILL.md authoring inherits the worker-side protocol (folder paths, filename patterns, completion-detection logic); the runner-spec updates inherit the invocation choreography (when to invoke routeman; how to communicate state across runs); worker-pipeline disciplines (`/sense-making`, `/innovate`, `/td-critique`, `/decompose`, `/surfacing`) inherit the write conventions (where, what filename, how to signal completion). Q5 in the frontier-questions finding graduates from "PARTIALLY ANSWERED (routeman-output side committed; worker-write side remains open)" to "RESOLVED-WITH-DESIGN" (matching the resolution status of Q1, Q3, Q4, Q10).
- **Desired outcome** — Q5's worker-side dimension is settled; the FF-1 through FF-5 sub-frontiers from 16-31 are resolved or explicitly carried forward; the project has a canonical file-system protocol artifact that the audit (Q4's design at 06:00), the persistence model (24-00), the autonomy register (24-40), the adaptive guidance mechanism (24-01), and the cross-inquiry aggregation (Q14) can all reference.
- **What would fail** — a design that re-litigates the ROUTEMAN-OUTPUT side already settled by 24-00 (re-doing committed work); a design that violates 16-31's isolated-session + file-scanning architecture (in-context pass options are off the table); a design that proposes infrastructure not feasible at L0 (e.g., schedulers, message queues, distributed locks — the project has none); a design that defers any of the 7 sub-aspects without committing options; a design that misses the partial-failure handling (FF-4) or the scan-scope economy (FF-5) — both of which the 16-31 correction explicitly flagged.

## Source Input

Preserved verbatim for downstream-discipline transcription audit:

```text
Question 5 — What is the file-system protocol between worker sessions, routeman, and any invoking runner?
[Partial answer applied 2026-05-24 per devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md: the ROUTEMAN-OUTPUT side of the protocol is committed — file names _navig.md (= protocol's _frontier.md) and routeman.md (= protocol's navigation.md); placement hybrid by invocation scope (per-inquiry-folder when inquiry-scoped; devdocs/navigation/<run-id>/ when project-scoped). The WORKER-WRITE side (folder topology workers write to; filename patterns workers use; write-completeness signaling; routeman's completion-emission shape; partial-failure handling) remains open; Q5's Tier-1 status is unchanged.]

[Tier I substantive re-statement applied 2026-05-23 per correction notice above. The original question framed the contract as "how does the runner pass cycle output to the discipline at invocation"; under the corrected isolated-session architecture, the contract is file-system-protocol (workers write specific filename patterns to specific folders; routeman reads specific folder paths), not in-context invocation. Pre-correction reading preserved below.]

Under the corrected isolated-session architecture, three roles interact via the file system: (a) worker sessions running MVL pipelines and writing inquiry-folder artifacts; (b) routeman scanning inquiry folders to read those artifacts and writing the Route Map; (c) the runner invoking either workers or routeman at appropriate moments. The discipline-vs-runner boundary is canonical, but the file-system protocol joining them has never been formalized.

Why this is a frontier. No current answer: no formal file-system protocol exists. Gating: every routeman invocation across /MVL, /MVLw, and future runners depends on the protocol; every worker pipeline's artifact-writing behavior must conform. Net-new: the runner-discipline boundary was assumed but not specified at the file-system level.

What it gates. The SKILL.md's invocation-contract section + corresponding updates to runner specs + worker-pipeline conventions. The protocol must cover: (i) which folders routeman scans (per new frontier sub-question FF-2 in the correction finding's Open Questions); (ii) which filename patterns + section structures workers write (per FF-3 + FF-4); (iii) how workers signal write-completeness (per FF-3); (iv) what shape routeman emits to signal Route-Map completion (a file written? a state update in _state.md?); (v) what happens on partial failure (worker crash mid-write; routeman scan timing out; malformed file content). The in-context-passing options from the pre-correction framing are eliminated; the protocol is purely file-system-based.

Hardness. Breadth high (every invocation across runners; every worker-pipeline writing). Depth high (canonical does not specify; design needed). Articulation medium.

Candidate resolution path. A new /MVL2+ inquiry framed as "design the file-system protocol between worker sessions, routeman, and runners for the corrected isolated-session architecture." Likely deliverable: a protocol specification with folder topology, filename patterns, write-completeness signaling, completion-emission shape, partial-failure handling, plus updated sections in routeman's SKILL.md and in runner + worker specs. The inquiry should also resolve or document the correction finding's FF-1 through FF-5 sub-questions in the same pass.

Pre-correction reading (preserved for traceability):

Original question framing: "What is the explicit contract between the runner and routeman at invocation time, covering how the runner passes cycle output (one document, multiple references, in-context content, or file paths)..." — The original framing assumed in-context passing was one option among many. The corrected architecture eliminates in-context passing as an option; the protocol is purely file-system-based. The substance of the question (an explicit contract is needed) survives; the object (the protocol's medium) is now committed.

dive deep into this one
```

## Scope Check

**Question covers goal.** The question addresses all 7 sub-aspects (the user's 5 gated + FF-1 + FF-5); the goal requires a protocol specification covering all of them. The pre-existing ROUTEMAN-OUTPUT commitment (24-00) is honored as scope-out (not re-litigated).

**Specific-vs-pattern check:** the question addresses Q5 specifically (the file-system protocol for routeman + workers + runners). The candidate resolution path mentions "resolve or document the correction finding's FF-1 through FF-5 sub-questions in the same pass" — the design addresses these specific FFs. Generalization to other discipline-pair protocols is out of scope (preserved as research frontier if applicable).

**Transcription-audit fail-safe (Step 3.5).** Scanning Source Input for clause-joiners:

- "and" appears multiple times throughout, particularly in "the file-system protocol joins workers + routeman + runners" — all three roles preserved as observation-target dependencies.
- "(i) ... (ii) ... (iii) ... (iv) ... (v)" — five enumerated sub-aspects from the user's gating; preserved as observation targets 1-5 above (with FF-1 + FF-5 added as 6 + 7).
- "dive deep into this one" — preserves the user's full-loop framing (run at depth, commit options).
- "Pre-correction reading preserved" — preserves the architectural correction history; informs the design's constraint set.
- "worker pipelines" + "every routeman invocation across /MVL, /MVLw, and future runners" — multi-role scope preserved; the design must work for both runners + future ones.

All load-bearing clauses survive transcription to Question + Goal; no drops detected.

## Layer Commitment

This inquiry is borderline between PROCESS layer (designing the steps each role runs) and STRUCTURAL layer (designing the protocol artifact's spec organization). The primary commitment is **PROCESS** — the question asks for the *operational protocol* governing how the three roles interact via the file system (when each writes, when each reads, how they signal each other). The STRUCTURAL layer (the actual `cognitive_harness/protocols/<name>.md` spec file's section organization) is a downstream consequence: once the process is settled, the artifact's organization follows.

Other-layer alternatives explicitly out of scope for THIS run:

- **MEANING layer** — what IS a "file-system protocol" as a cognitive operation? Out of scope; the term has established meaning in this project (cf. 16-31's isolated-session + file-scanning architecture; 24-00's adoption of multi_resolution_navigation.md).
- **STRUCTURAL layer** — what does the protocol spec file's section organization look like? Downstream; once the PROCESS is committed, the spec file's organization is straightforward (follows the existing protocol patterns at `cognitive_harness/protocols/`).

If the primary layer can't be picked, the inquiry would STOP. PROCESS is unambiguously primary here per the user's "dive deep" framing on the operational sub-questions.

## Synthesis Trigger

This inquiry consumes multiple prior outputs as inputs and inherits their commitments. CONCLUDE will require an `## Inherited Commitments Re-test` section that names each commitment and either re-tests it with cited evidence or explicitly flags it as inherited-without-re-test with a reason:

- `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` — defines routeman's 3-layer identity (paradigm-instantiation Navigational + prescriptive-extension 4 residuals + cycle-consumer process); the discipline-vs-runner boundary that this protocol formalizes.
- `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` — defines Q5 itself; commits the candidate resolution path; lists FF-1 through FF-5 sub-frontiers from 16-31 as the protocol's required coverage.
- `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` — commits the isolated-session + file-scanning architecture that this protocol formalizes; introduces the FF-1 through FF-5 sub-frontiers as the protocol's design surface.
- `devdocs/inquiries/2026-05-23_18-58__routeman_staged_mapping_and_reasoning_field/finding.md` — adds staged-mapping (stage 1 + stage 2) which affects the routeman-output side of the protocol (sub-routes have parent-reference; stage-2 has its own invocation contract); informs partial-failure handling for staged invocations.
- `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` — **commits the ROUTEMAN-OUTPUT side** (file names `_navig.md` + `routeman.md` with documented alias to the protocol's `_frontier.md` + `navigation.md`; hybrid placement by invocation scope; lifecycle = persistent + in-place evolution + append). This inquiry inherits these commitments verbatim and designs the WORKER-WRITE side.
- `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` — commits the 3-tier failure handling vocabulary (INFO / ERROR / ERROR) for file reads; the protocol's partial-failure handling inherits this pattern.
- `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md` — commits the per-movement-type dispatch table pattern (cycle-output files read at Stage 1); informs the file-shape contracts at the read boundary.
- `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md` — the audit consumes file-system reads (per-mode dispatch table); the audit's substrate consumption depends on this protocol's commitments; the file-system protocol must support the audit's read patterns.
- `cognitive_harness/protocols/multi_resolution_navigation.md` — the protocol routeman uses for persistence (24-00's adoption); informs the routeman-output side's existing commitments.
- `cognitive_harness/protocols/branch_inquiry.md` — defines the branch inquiry folder structure; the protocol must work for both root and branch inquiry folders.
- `cognitive_harness/MVL/SKILL.md` and `cognitive_harness/MVLw/SKILL.md` — the runner specs; this inquiry's outputs will be inherited by future runner updates.
- `cognitive_harness/sense-making/SKILL.md` + `cognitive_harness/innovate/SKILL.md` + `cognitive_harness/td-critique/SKILL.md` + `cognitive_harness/decompose/SKILL.md` + `cognitive_harness/surfacing/SKILL.md` — the worker disciplines; each writes its canonical output file (`sensemaking.md`, `innovation.md`, `critique.md`, `decomposition.md`, `surfacing.md`) per the runners' EXECUTE PIPELINE steps; the protocol formalizes their write-output conventions.

Plan: Sensemaking will extract the protocol design's anchors from the inherited architecture + the open sub-aspects. Decomposition will partition the protocol into sub-pieces (folder topology, filename patterns, write-completeness, completion-emission, partial-failure, scan-detection, scan-scope economy). Innovation will generate options per piece via the 7 mechanisms. Critique will adjudicate per dimension. CONCLUDE compiles the protocol spec with the Inherited Commitments Re-test section enumerating each prior's commitments.
