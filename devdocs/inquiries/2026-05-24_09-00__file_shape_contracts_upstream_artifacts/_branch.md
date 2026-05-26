# Branch: File-shape contracts on upstream worker-produced inquiry artifacts (Q6 dive-deep)

## Question

- **Subject** — the file-shape contracts routeman implicitly requires on upstream worker-produced inquiry artifacts (`sensemaking.md`, `innovation.md`, `critique.md`, `decomposition.md`, `surfacing.md`, plus inquiry-level `_state.md` Status markers and `_branch.md` essentials). Q5 (resolved at `devdocs/inquiries/2026-05-24_07-30__file_system_protocol_workers_routeman_runners/finding.md`) settled the file-system protocol surrounding these files (where they live, how completeness is signaled, atomic-write convention, scan detection, partial-failure handling); Q6 settles the contents-of-file contracts (what frontmatter, section structures, terminal-state markers each file MUST or SHOULD have for routeman + the audit to read it reliably).
- **Action** — design (audit + commit the contracts).
- **Level** — cross-discipline coordination + protocol-layer (per-discipline file-shape contract sections + a file-validation layer in routeman's SKILL.md). The level decision (committed in `cognitive_harness/protocols/inquiry_filesystem_protocol.md` as additional sections OR in each worker discipline's SKILL.md OR in routeman's SKILL.md) is part of the design.
- **Observation targets** — FIVE separable sub-aspects:
  1. **Per-discipline file-shape contract** for each worker output: `sensemaking.md`, `innovation.md`, `critique.md`, `decomposition.md`, `surfacing.md`. Each contract specifies required frontmatter (if any), required sections, terminal-state markers (the verdict line position), and optional content patterns.
  2. **Inquiry-level file-shape contract** for `_state.md` (Status field, Flow-type, Pipeline, Next Discipline; CONCLUDE-driven completeness conventions) and `_branch.md` (Question, Goal, optional Layer Commitment + Synthesis Trigger per the runners' templates).
  3. **File-validation layer** — where it lives (routeman SKILL.md vs separate protocol section), what it does at runtime (parse + check per-discipline contract; emit verdict per failure tier), what it emits (a validation report in `_navig.md` or `_audit.md`), how it composes with Q5's atomic-write + completeness checks.
  4. **Enforcement strength** — coordinated upstream-spec edits (per-discipline SKILL.md sections committing the contracts) OR validation-without-enforcement (routeman validates + reports + doesn't halt; older content continues to work; per-discipline edits deferred). The candidate resolution path names both options as acceptable.
  5. **Phase progression** — L0 ship vs L1/L2+ extensions; how the contracts evolve as the project's autonomy advances; backward-compat handling for older inquiry-folder content that pre-dates the contracts.
- **Deliverable shape** — design memo + concrete per-discipline contract specifications + a file-validation layer design + an enforcement-strength commitment for first ship + L0/L1/L2+ phase progression. Sufficient for SKILL.md authoring (routeman's validation layer + per-discipline SKILL.md edits) to inherit without re-running this inquiry. Per the Q6 candidate resolution path: "audit and commit file-shape contracts across the upstream pipeline's inquiry-folder artifacts that routeman scans" + "a file-validation layer in routeman's SKILL.md that detects non-conformant files during scan and flags rather than silently degrading."

The question: produce the file-shape contracts design covering all 5 sub-aspects, **building on** Q5's file-system protocol commitments (filename patterns + atomic-write + verdict-line completeness check + 3-tier failure handling) and **acknowledging** the audit's pre-existing implicit reliance on per-discipline file shapes (per the audit's per-mode dispatch table at `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md`).

## Goal

- **Criterion** — actionable per-discipline contracts SKILL.md authoring can adopt verbatim; addresses all 5 sub-aspects; preserves the file-mediated architecture; preserves routeman's enumerate-all identity; preserves the existing discipline-spec writing conventions (no breaking changes to what disciplines already produce); phase-fit at L0 (current state — no per-discipline-spec edits required at first ship if validation-without-enforcement is chosen); commits an enforcement-strength choice rather than punting.
- **Use case** — routeman SKILL.md authoring inherits the file-validation layer commitment; the audit at 06-00 can sharpen its per-mode dispatch table with explicit contract references; each worker discipline SKILL.md (sense-making, innovate, td-critique, decompose, surfacing) gets a downstream COULD action to commit the file-shape contract (or accepts validation-without-enforcement and the contract lives in routeman's SKILL.md only). Q6 in the frontier-questions finding graduates from "PARTIALLY ANSWERED (Q5 protocol's schema does NOT resolve Q6's upstream-artifact contracts; those remain open)" to "RESOLVED-WITH-DESIGN" (matching the resolution status of Q1, Q3, Q4, Q5, Q10).
- **Desired outcome** — Q6's per-discipline upstream-artifact contracts settled with concrete specifications + a validation layer design + an enforcement-strength commitment; routeman's read-side is no longer "held together by convention" (per the Q6 gating text) but by explicit contracts; the audit's reliance on per-discipline file shapes is no longer implicit.
- **What would fail** — a design that re-litigates Q5's file-system protocol commitments (re-doing settled work); a design that requires upstream-discipline-spec edits at first ship without acknowledging the multi-discipline coordination cost; a design that defers all per-discipline contracts as "future work" without committing them in this inquiry; a design that violates 16-31's file-mediated architecture; a design that breaks backward-compat with existing inquiry-folder content (old inquiries written before Q5's atomic-write commitment must continue to work).

## Source Input

Preserved verbatim for downstream-discipline transcription audit:

```text
Question 6 — What file-shape constraints does routeman implicitly require on upstream worker-produced inquiry artifacts?
[Partial-adjacency note applied 2026-05-24 per devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md: the persistence inquiry brought multi_resolution_navigation.md's frontier-candidate-record schema as the base shape for ROUTEMAN'S OWN _navig.md file. This is adjacent to but DOES NOT resolve Q6 — Q6 targets UPSTREAM cycle-artifact file shapes (sensemaking.md, innovation.md, critique.md, _state.md Status markers) that routeman reads during its scan; the protocol's schema is for routeman's own output file. Q6's Tier-1 status is unchanged. The persistence inquiry's new FF-2 (routeman-specific schema extensions to the frontier-candidate-record) is tracked as new Question 12 below.]

[Tier I substantive re-statement applied 2026-05-23 per correction notice above. The original question asked about in-context cycle-output data shapes; under the corrected isolated-session architecture, the constraints are on FILE shapes — frontmatter conventions, filename patterns, section structures inside inquiry-folder artifacts written by workers. Pre-correction reading preserved below.]

Routeman scans worker-produced inquiry-folder artifacts to reconstruct cycle outcomes. The upstream disciplines (/sense-making, /innovate, /td-critique, /reflect) have output specifications, but no explicit FILE-shape contracts that routeman could rely on when scanning. Routeman's identity sentence names "the cycle's artifacts" as input (post-correction wording); the artifact-shape constraints — what frontmatter routeman expects; what filename patterns it recognizes; what section structures it parses from each discipline's output file — are unspecified.

Why this is a frontier. No current answer: no formal file-shape contracts exist in upstream discipline specs. Gating: routeman's scanning operation depends on the files being shape-conformant; without contracts, the first non-conformant file silently degrades routeman's reconstruction (for example, a critique.md without explicit SURVIVE/REFINE/KILL verdict markers; a sensemaking.md without identifiable anchor sections; a worker writing without _state.md Status: COMPLETE — which intersects FF-3 write-completeness signaling). Net-new: the design memo specifies the input contract at a high level without enumerating file-shape constraints.

What it gates. The SKILL.md's file-scanning convention specification + coordinated commitments in upstream discipline specs (frontmatter conventions, section structures, terminal-state signaling). Without commitment, the cycle-consumer contract is held together by convention rather than enforcement; routeman's parsers may misread non-conformant files.

Hardness. Breadth high (affects all upstream disciplines + the worker-pipeline writers; foundational for routeman's file-read integrity). Depth high (no formal file-shape contracts in upstream specs today). Articulation high (the assumption was inherited silently; most agents assume the cycle's file output is well-shaped without checking).

Candidate resolution path. A new /MVL2+ inquiry framed as "audit and commit file-shape contracts across the upstream pipeline's inquiry-folder artifacts that routeman scans." This is a multi-discipline coordination inquiry of substantial scope (two to three weeks). Likely deliverable: per-discipline file-shape contract (frontmatter; section names; terminal-state markers) + a file-validation layer in routeman's SKILL.md that detects non-conformant files during scan and flags rather than silently degrading. An acceptable alternative for shipping: a documented file-validation layer in routeman's SKILL.md without coordinated upstream-spec edits (validation-without-enforcement).

Pre-correction reading (preserved for traceability):

Original question framing: "What shape constraints does routeman implicitly require on upstream cycle outputs?" — under the assumption that cycle outputs were passed in-context. The substance survives (an unspecified shape contract is a frontier); the object shifts from in-context data shapes to file shapes. Most of the original question's content carries forward with this object-shift; the file-shape framing makes the specific shape-axes (frontmatter, section structure, filename, terminal-state) concrete.

Tier 2 — Watch-list-during-SKILL.md (four questions)
Each Tier 2 question can ship in the SKILL.md as a documented placeholder or default policy without making a silent commitment. Track them as explicit open-question notes in the SKILL.md so they remain visible during future revisions and are surfaced for the structural-layer follow-up.

lets dive deep into this one now 

go
```

## Scope Check

**Question covers goal.** The question addresses all 5 sub-aspects; the goal requires per-discipline contracts + validation layer + enforcement-strength commitment + phase progression. Coverage complete.

**Specific-vs-pattern check:** the question addresses Q6 specifically (file-shape contracts for routeman's upstream artifacts). The 5 active worker disciplines are enumerated. Generalization to future worker disciplines (e.g., if /reflect becomes active) is preserved as research frontier; the design's pattern (per-discipline contract + validation layer) generalizes but the specific contracts are routeman-current-state-specific.

**Transcription-audit fail-safe (Step 3.5).** Scanning Source Input for clause-joiners:

- "and" appears in multiple structural junctures: "(frontmatter conventions, section structures, terminal-state signaling)" — preserved as observation target 1 (per-discipline contract components); "audit and commit file-shape contracts" — both verbs (audit + commit) carried into the action; "validation-without-enforcement" alternative + "coordinated upstream-spec edits" — preserved as observation target 4 (enforcement strength).
- "for example" lists three specific concerns: critique.md without SURVIVE/REFINE/KILL markers; sensemaking.md without identifiable anchor sections; worker writing without `_state.md` Status: COMPLETE. All three preserved in the per-discipline contracts (observation target 1) + the inquiry-level contract (observation target 2).
- "dive deep into this one now" — full pipeline at depth, commit options.
- The Tier 2 paragraph that appears at the end of the input is a remnant from the frontier-questions finding's structure (the Tier 2 section header that follows Q6 in the source file) — not part of the user's specific Q6 ask. Acknowledged but not load-bearing for this inquiry's scope.

All load-bearing clauses survive transcription; no drops detected.

## Layer Commitment

This inquiry primarily operates at the **STRUCTURAL** layer — the deliverable is concrete file-shape contract specifications (what each file's spec looks like; what sections, what frontmatter, what terminal markers). The PROCESS layer (the validation layer's runtime steps) and the MEANING layer (what a "file-shape contract" IS conceptually) are downstream consequences.

Other-layer alternatives explicitly out of scope for THIS run:

- **MEANING layer** — what IS a "file-shape contract" as a project concept? The term has established meaning per Q5's design + the audit's per-mode dispatch; no redefinition needed.
- **PROCESS layer** — what STEPS does the validation layer run? Downstream; once the contracts are committed, the validation procedure is straightforward (parse each file; check against its contract; emit per-tier verdict).

If the primary layer can't be picked, the inquiry STOPS. STRUCTURAL is unambiguously primary here — the user's "dive deep" framing on file-shape constraints is about what the contracts SAY, not what they MEAN or what STEPS the validator runs.

## Synthesis Trigger

This inquiry consumes multiple prior outputs and inherits their commitments. CONCLUDE will require an `## Inherited Commitments Re-test` section:

- `devdocs/inquiries/2026-05-24_07-30__file_system_protocol_workers_routeman_runners/finding.md` (Q5 resolution) — commits the file-system protocol that surrounds the file-shape contracts: filename patterns, atomic-write, verdict-line as completeness signal, 3-tier failure handling, scan detection, scope economy. **This inquiry layers on top of Q5; Q5's commitments are inherited verbatim.**
- `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` (frontier-questions finding) — defines Q6; commits the candidate resolution path including the validation-without-enforcement acceptable alternative.
- `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` (architecture correction) — commits isolated-session + file-scanning architecture; the validation layer operates within this architecture.
- `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` (routeman design memo) — commits routeman's 3-layer identity + cycle-consumer process position; the file-shape contracts formalize what routeman consumes.
- `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md` (LAYER-2 audit) — the audit's per-mode dispatch table already commits implicit file-shape reliance (Calibration-Drift reads `_navig.md`; A1+A3 substrate reads `routeman.md` Guidance Pointers; etc.). The contracts this inquiry commits MUST support the audit's existing reads.
- `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md` (adaptive guidance) — commits Stage 1 reads of `critique.md` (SURVIVE / REFINE / KILL verdicts) + `sensemaking.md` (Key-Insights / Constraints) + meta-reasoning field. The contracts must support these reads.
- `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` (autonomy register) — the 3-tier failure handling pattern this inquiry's validation layer inherits.
- `cognitive_harness/sense-making/SKILL.md` + `cognitive_harness/sense-making/references/sensemaking.md` — the canonical source for sensemaking.md's existing structure (SV1-SV6, 5 phases, Telemetry section with verdict line).
- `cognitive_harness/innovate/SKILL.md` + reference — same for `innovation.md` (Seed + Generate per mechanism + Test outputs + Mechanism Coverage Telemetry with verdict line).
- `cognitive_harness/td-critique/SKILL.md` + reference — same for `critique.md` (Phase 0-4 + per-candidate SURVIVE/REFINE/KILL verdicts + Convergence Telemetry with verdict line).
- `cognitive_harness/decompose/SKILL.md` + reference — same for `decomposition.md` (7-step output: Coupling Map / Question Tree / Interface Map / Dependency Order / Self-Evaluation). NOTE: /decompose's spec doesn't commit a verdict line in the same way — this gap may need addressing in the contract.
- `cognitive_harness/surfacing/SKILL.md` + reference — same for `surfacing.md` (Traversal Trace + State Summary + Telemetry with verdict line).
- `cognitive_harness/protocols/conclude.md` — commits `_state.md` Status: COMPLETE semantics; `finding.md` template structure (frontmatter, Question, Finding Summary, Finding, Inherited Commitments Re-test, Next Actions, Reasoning, Open Questions, Source Input).
- `cognitive_harness/protocols/branch_inquiry.md` — commits `_branch.md` structure for branch inquiries; the inquiry-level contracts include this.
- `cognitive_harness/MVLw/SKILL.md` + `cognitive_harness/MVL/SKILL.md` — the runners commit `_state.md` + `_branch.md` initial structures for root inquiries.

Plan: Sensemaking will extract the contract structure's anchors per discipline. Decomposition will partition into per-discipline contract pieces + validation-layer piece + enforcement-strength piece. Innovation will generate options per piece. Critique will adjudicate. CONCLUDE compiles the design with the Inherited Commitments Re-test enumerating each prior + each discipline spec.
