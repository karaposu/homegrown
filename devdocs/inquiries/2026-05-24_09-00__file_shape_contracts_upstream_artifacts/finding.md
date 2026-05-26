---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: File-shape contracts on upstream worker-produced inquiry artifacts (Q6 dive-deep)

## Question

(from `_branch.md`)

Routeman (per the design memo at `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md`) consumes upstream worker-produced inquiry-folder artifacts via file-scanning in an isolated session (per the architectural correction at `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md`). The file-system protocol surrounding these artifacts (where they live, how completeness is signaled, atomic-write convention, scan detection, partial-failure handling) was settled by Q5's resolution at `devdocs/inquiries/2026-05-24_07-30__file_system_protocol_workers_routeman_runners/finding.md`. What remained open at Q6 in the routeman frontier-questions finding at `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` is the contents-of-file contracts — what frontmatter, section structures, terminal-state markers each upstream artifact MUST or SHOULD have for routeman + the audit + adaptive-guidance to read it reliably.

The Q6 partial-adjacency note from `devdocs/inquiries/2026-05-24_00-20__routeman_persistence_and_invocation_modes/finding.md` clarified that the persistence inquiry brought the `multi_resolution_navigation.md` frontier-candidate-record schema for ROUTEMAN'S OWN `_navig.md` file — adjacent to but distinct from Q6's target (the UPSTREAM cycle-artifact file shapes that routeman reads during its scan). Q6's Tier-1 status was unchanged.

The user invoked this /MVLw inquiry with the explicit instruction to "dive deep" on Q6. The inquiry covers five sub-aspects: (1) per-discipline file-shape contracts for the 5 worker output files (`sensemaking.md`, `innovation.md`, `critique.md`, `decomposition.md`, `surfacing.md`); (2) inquiry-level file-shape contracts for `_state.md` and `_branch.md`; (3) a file-validation layer (where it lives, what it does at runtime, what it emits); (4) enforcement strength at first ship (validation-without-enforcement vs coordinated upstream-spec edits, per the Q6 candidate resolution path naming both options); (5) phase progression (L0 ship + L1/L2+ extensions + backward-compat handling for older inquiry-folder content).

The deliverable is a design memo + concrete per-discipline contract specifications + a file-validation layer design + an enforcement-strength commitment for first ship, sufficient for SKILL.md authoring (routeman's validation layer + per-discipline SKILL.md edits later) to inherit without re-running this inquiry. Per the Q6 candidate resolution path: "audit and commit file-shape contracts across the upstream pipeline's inquiry-folder artifacts that routeman scans" with the acceptable alternative being "a documented file-validation layer in routeman's SKILL.md without coordinated upstream-spec edits (validation-without-enforcement)."

The goal: actionable per-discipline contracts SKILL.md authoring can adopt verbatim; addresses all 5 sub-aspects; preserves the file-mediated architecture (per 16-31); preserves routeman's enumerate-all identity (audit + validation are observe-only); preserves existing discipline-spec writing conventions (no breaking changes); is feasible at L0 (no per-discipline-spec edits required at first ship if validation-without-enforcement is chosen); commits enforcement-strength choice rather than punting.

## Finding Summary

- **The design adds 8 new sections to `cognitive_harness/protocols/inquiry_filesystem_protocol.md`** (Q5's protocol artifact): 5 per-discipline file-shape contract sections (one per worker discipline output) + 2 inquiry-level contract sections (`_state.md` and `_branch.md`) + 1 file-validation-layer cross-reference section that points to the validation layer in routeman's SKILL.md. The single-protocol-file consolidation (rather than spreading contracts across 5+ worker SKILL.md files at first ship) follows the established project pattern of cross-cutting concerns living at `cognitive_harness/protocols/` and aligns with Q5's existing structure. The protocol artifact from Q5 grows from ~7 sub-aspect sections (atomic-write + filename patterns + scan semantics + failure handling + extensions) to ~7 + 8 contract sections = ~15 sections total — still a single coherent artifact.

- **The validation layer lives as a new section in routeman's SKILL.md** (not in a separate protocol file). The validation layer is specifically routeman's scan-time behavior; the contracts (cross-cutting) live in the protocol file; the validation procedure (routeman-internal) lives in routeman's SKILL.md. The validation layer is a three-step sequence: parser (markdown section-heading detection plus optional YAML frontmatter parsing) + per-discipline dispatch (a dispatch table inheriting the pattern from `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md`'s Stage 1 per-movement-type chain) + 3-tier emitter (INFO / ERROR / ERROR inherited from `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` and reused by Q5). At scan time, for each file routeman reads, the validation layer dispatches to the per-discipline contract check; non-conformance produces a verdict record that feeds the audit's `_audit.md` log (from `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md`) via Q5's failure handling. The separate-protocol alternative was tested in critique and rejected — the validation behavior is routeman-internal; only the contracts it consumes are cross-cutting.

- **Per-discipline contracts are minimum-shape specifications at section-level granularity**, with content-pattern requirements only where consumers explicitly read (verdict line; per-candidate verdict markers in critique.md). Each contract specifies REQUIRED sections + verdict-line position + `## User Input` convention + cross-references to consumer reads. Section-level granularity (matching multiple acceptable heading-text patterns) is robust to discipline-spec editorial variations; fine-grained content-pattern validation was rejected as brittle. Contracts are minimum-shape, not maximum-shape: each contract specifies what consumers RELY on (the load-bearing minimum), without precluding richer content in discipline outputs. This keeps the contracts compatible with discipline-spec evolution (additions don't break the contract; only removals would).

- **The 5 per-discipline contracts inherit from each discipline's reference file plus the audit's and adaptive-guidance's existing reads.** For `sensemaking.md`: required sections include heading containing SV1 + heading containing SV6 + Phase 1 heading (anchor for Constraints + Key-Insights, consumed by adaptive-guidance Stage 1) + Telemetry section with verdict line + `## User Input` section. For `innovation.md`: required sections include Mechanism Coverage Telemetry with verdict line + `## User Input`. For `critique.md`: required sections include Phase 3 (Verdict + Constructive Output) + per-candidate SURVIVE/REFINE/KILL verdict markers (the content patterns adaptive-guidance Stage 1 explicitly reads) + Convergence Telemetry with verdict line + `## User Input`. For `decomposition.md`: required sections include Final Deliverable or Question Tree + Self-Evaluation + `## User Input`; verdict line is OPTIONAL with backward-compat (per Sensemaking's resolution on /decompose's verdict-line gap). For `surfacing.md`: required sections include Traversal Trace or State Summary + Telemetry with verdict line + `## User Input`.

- **Inquiry-level contracts are unified across runners** (one contract for `_state.md`; one for `_branch.md`). `_state.md` requires Flow-type + Pipeline + Progress + Iteration + Status + Next Discipline; SHOULD-have Relationships + History. The audit's per-mode dispatch (Calibration-Drift specifically) consumes the Status field; routeman reads Flow-type and Pipeline. `_branch.md` requires Question + Goal; SHOULD-have Source Input + Scope Check + (conditionally per `cognitive_harness/protocols/spec_governance.md` rules) Layer Commitment + Synthesis Trigger. Per-runner value variation (classic flow-type vs extended-surfacing vs extended) is accommodated by the unified contract structure — the values fill the fields.

- **Enforcement strength at first ship is validation-without-enforcement.** Non-conformance to a contract produces an INFO-tier warning surface or a NOTE; halts only occur on parser failures (e.g., file is not parseable markdown at all). Older inquiry-folder content (pre-Q5 atomic-write commitment) continues to work — backward-compat clauses in the contracts treat absent conventions (no verdict line; no `## User Input` section) as PROCEED with NOTE per RESUME §2's existing pattern. The coordinated-upstream-spec-edits alternative (worker SKILL.md files commit the contracts on the discipline side) was tested in critique and KILLed-with-seed: the seed is the L1+ progression path (per-discipline SKILL.md edits as downstream COULDs as the project matures). At L2+, enforcement can promote from warn to halt — promotion criterion: 5+ consecutive routeman invocations have surfaced non-conformance warnings AND the project has reached L2+ on the autonomy register. The progression is documented; first ship is L0-phase-fit.

- **The /decompose verdict-line gap is handled with backward-compat at L0 + a downstream COULD action.** `cognitive_harness/decompose/SKILL.md` and its reference do not currently commit a verdict line in the same Telemetry format the other 4 disciplines emit. The decomposition.md contract treats absent verdict line as PROCEED with NOTE (per RESUME §2's existing backward-compat pattern + Q5's two-part check). For L1+, a COULD action commits a verdict line to /decompose's spec for uniformity across all 5 disciplines. The L0 backward-compat surfaces NOTE signal in routeman + audit output, so the user is aware /decompose's completeness is being inferred rather than confirmed; the L1+ COULD path makes the inference explicit confirmation.

- **The drift-coordination meta-process protects against discipline-spec drift** (refinement R1 from critique). When a discipline spec changes section heading text (e.g., a future SKILL.md edit renames `## Telemetry` to `## Self-Assessment`), the protocol's contract section MUST be updated in the same commit. This is documented as a meta-process commitment in the protocol's Cross-References section. The contracts already specify multiple acceptable heading-text patterns (e.g., section containing "SV1" OR "Sense Version 1") to reduce drift risk; the coordination protocol catches the cases multi-pattern matching doesn't.

- **All 5 sub-aspects covered; all consumer reads from 06-00 and 01-00 preserved verbatim.** The audit's per-mode dispatch table from 06-00 reads `_state.md` Status field (covered by P2 inquiry-level contract); `routeman.md` Guidance Pointers (covered by Q5's existing contract for routeman's own output; not in scope here); `_navig.md` Stage-1 drop-with-reason log (covered by Q5; not in scope here); `docs/autonomy_level.md` `transition_history` (covered by 24-40; not in scope here). The adaptive-guidance Stage 1 from 01-00 reads `critique.md` SURVIVE/REFINE/KILL verdicts (covered by P1c critique.md contract's per-candidate verdict markers requirement) + `sensemaking.md` Constraints + Key-Insights (covered by P1a sensemaking.md contract's Phase 1 section requirement) + the meta-reasoning field (covered by `routeman.md` schema; not in scope here). No consumer read is broken; all are preserved.

- **The design is ~80% documentation of existing conventions + ~20% genuinely-novel** (same pattern as Q5's resolution at 07-30). The 80% documentation: per-discipline section requirements derive from existing discipline reference files + audit + adaptive-guidance reads; inquiry-level contracts derive from runner templates + CONCLUDE conventions; verdict-line pattern is RESUME §2; 3-tier failure handling is 24-40; protocol-file location is Q5; validation-layer location matches the candidate resolution path; backward-compat patterns are RESUME §2 + Q5. The 20% novel: the validation layer itself (parser + dispatch + emitter sequence as a section in routeman SKILL.md); the /decompose verdict-line gap explicit handling (backward-compat at L0 + L1+ COULD); the drift-coordination meta-process (R1 refinement); the L2+ promotion criterion for enforcement strength.

- **L0/L1/L2+ phase progression documented with extension hooks per piece.** L0 ships: validation-without-enforcement; contracts in Q5's protocol file; routeman SKILL.md validation-layer section; backward-compat for older content. L1: per-discipline SKILL.md edits to commit contracts on the discipline side (5 small edits across the 5 worker disciplines); /decompose verdict-line addition for uniformity. L2+: enforcement strength promotion (warn → halt on persistent non-conformance + L2+ autonomy); validation parser specialization beyond regex; per-runner inquiry-level contract refinement if value-variation drift causes issues (not currently anticipated). Each hook has a documented trigger; first ship locks no autonomy point.

## Inherited Commitments Re-test

The `_branch.md` Synthesis Trigger declared 14 prior outputs (including the 5 worker discipline references + 9 routeman-chain findings + Q5's protocol foundation). Each load-bearing commitment is re-tested below.

### Prior 1 — `devdocs/inquiries/2026-05-24_07-30__file_system_protocol_workers_routeman_runners/finding.md` (Q5)

- **Commitment 1:** filename patterns (canonical per-discipline names: `sensemaking.md`, etc.) + inquiry-level filenames (`_branch.md`, `_state.md`).
  - **Re-test status:** RE-TESTED — INHERITED VERBATIM.
  - **Evidence:** Q6's per-discipline contracts use the same canonical filenames; no modification.
- **Commitment 2:** atomic-write + verdict-line as the two-part write-completeness signal.
  - **Re-test status:** RE-TESTED — INHERITED + EXTENDED.
  - **Evidence:** Q6's contracts use atomic-write for file presence + reuse the verdict-line as required (or optional with backward-compat for /decompose). The completeness signal is unchanged; the contracts specify what content WITHIN the file conforms.
- **Commitment 3:** 3-tier failure handling (INFO / ERROR / ERROR).
  - **Re-test status:** RE-TESTED — INHERITED VERBATIM.
  - **Evidence:** Q6's validation layer uses the same 3-tier vocabulary for non-conformance failures; INFO for absent or backward-compat-handled cases; ERROR for parser failures + non-conformance-with-enforcement at L2+.
- **Commitment 4:** the protocol file at `cognitive_harness/protocols/inquiry_filesystem_protocol.md`.
  - **Re-test status:** RE-TESTED — EXTENDED.
  - **Evidence:** Q6's contracts live as additional sections in the same protocol file; no separate protocol artifact.

### Prior 2 — `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` (frontier-questions finding)

- **Commitment:** Q6 is Tier-1; partial-adjacency from 24-00 (ROUTEMAN-OUTPUT settled; UPSTREAM-ARTIFACT contracts open); candidate resolution path names both validation-without-enforcement + coordinated-upstream-edits as acceptable.
  - **Re-test status:** RE-TESTED — RESOLVED-WITH-DESIGN.
  - **Evidence:** all 5 sub-aspects from the candidate resolution path covered. Validation-without-enforcement at L0 is the committed enforcement strength; coordinated upstream-spec edits become L1+ COULDs. Q6 should be marked RESOLVED-WITH-DESIGN in the frontier-questions finding (CONCLUDE-side cross-doc impact).

### Prior 3 — `devdocs/inquiries/2026-05-23_16-31__routeman_isolated_session_correction/finding.md` (architecture)

- **Commitment:** isolated-session + file-scanning architecture.
  - **Re-test status:** RE-TESTED — PRESERVED.
  - **Evidence:** the validation layer operates within the architecture (reads files via the scan; no in-context callbacks). D2 in critique was CRITICAL — HIGH.

### Prior 4 — `devdocs/inquiries/2026-05-23_14-39__routeman_discipline_design/finding.md` (routeman design memo)

- **Commitment:** routeman's cycle-consumer process layer; consumes worker-produced artifacts.
  - **Re-test status:** RE-TESTED — FORMALIZED.
  - **Evidence:** the contracts formalize what routeman consumes; the design memo's high-level commitment to file-mediated consumption now has explicit content-shape contracts.

### Prior 5 — `devdocs/inquiries/2026-05-24_06-00__layer2_audit_mechanism_design/finding.md` (LAYER-2 audit)

- **Commitment 1:** audit's per-mode dispatch table reads `_state.md` Status field + `routeman.md` content + `_navig.md` log + `docs/autonomy_level.md` `transition_history`.
  - **Re-test status:** RE-TESTED — PRESERVED.
  - **Evidence:** the inquiry-level contract for `_state.md` (P2) commits the Status field as REQUIRED. The audit's other reads target Q5's ROUTEMAN-OUTPUT files (`routeman.md`, `_navig.md`) and 24-40's autonomy register — out of scope for this inquiry but referenced. D7 in critique was CRITICAL — HIGH.
- **Commitment 2:** 3-tier failure handling vocabulary.
  - **Re-test status:** RE-TESTED — REUSED.
  - **Evidence:** the validation layer uses the same vocabulary; verdicts feed the audit's `_audit.md` log via the same pattern.

### Prior 6 — `devdocs/inquiries/2026-05-24_01-00__adaptive_guidance_generation_mechanism/finding.md` (adaptive guidance)

- **Commitment:** Stage 1 reads `critique.md` SURVIVE/REFINE/KILL verdicts + `sensemaking.md` Constraints + Key-Insights + meta-reasoning field; per-movement-type dispatch table pattern.
  - **Re-test status:** RE-TESTED — PRESERVED + PATTERN-INHERITED.
  - **Evidence:** the critique.md contract (P1c) commits per-candidate verdict markers as REQUIRED (the content patterns adaptive-guidance reads). The sensemaking.md contract (P1a) commits the Phase 1 section as REQUIRED (anchor for Constraints + Key-Insights). The meta-reasoning field is in routeman's schema (covered by Q5 + 24-00). The per-movement-type dispatch table pattern is the structural inspiration for this inquiry's per-discipline dispatch in the validation layer. D7 in critique was CRITICAL — HIGH.

### Prior 7 — `devdocs/inquiries/2026-05-24_00-40__autonomy_register_and_discipline_read_protocol/finding.md` (autonomy register)

- **Commitment:** 3-tier failure handling pattern (INFO / ERROR / ERROR) for file reads.
  - **Re-test status:** RE-TESTED — REUSED.
  - **Evidence:** the validation layer's failure handling uses the same vocabulary; INFO for absent / backward-compat-handled cases; ERROR for parser failures or contract non-conformance (at L2+ enforcement).

### Prior 8 — `cognitive_harness/sense-making/SKILL.md` + reference

- **Commitment:** SV1-SV6 + 5 phases + Telemetry section with verdict line; `## User Input` recording.
  - **Re-test status:** RE-TESTED — CONTRACT DERIVED.
  - **Evidence:** sensemaking.md contract specifies REQUIRED sections aligned with the discipline reference (SV1, SV6, Phase 1, Telemetry with verdict line, User Input). No discipline-spec edit required at L0.

### Prior 9 — `cognitive_harness/innovate/SKILL.md` + reference

- **Commitment:** Seed + Generate + Test + Mechanism Coverage Telemetry with verdict line.
  - **Re-test status:** RE-TESTED — CONTRACT DERIVED.
  - **Evidence:** innovation.md contract specifies REQUIRED Mechanism Coverage Telemetry section with verdict line; SHOULD-have per-phase + per-mechanism subsections.

### Prior 10 — `cognitive_harness/td-critique/SKILL.md` + reference

- **Commitment:** Phase 0-4 outputs + per-candidate SURVIVE/REFINE/KILL verdicts + Convergence Telemetry with verdict line.
  - **Re-test status:** RE-TESTED — CONTRACT DERIVED.
  - **Evidence:** critique.md contract specifies REQUIRED Phase 3 (Verdict + Constructive Output) + per-candidate verdict markers (content-pattern requirement for adaptive-guidance Stage 1) + Convergence Telemetry with verdict line.

### Prior 11 — `cognitive_harness/decompose/SKILL.md` + reference

- **Commitment:** 7-step output (Coupling Map / Question Tree / Interface Map / Dependency Order / Self-Evaluation).
  - **Re-test status:** RE-TESTED — CONTRACT DERIVED with GAP HANDLING.
  - **Evidence:** decomposition.md contract specifies REQUIRED Final Deliverable or Question Tree + Self-Evaluation. The verdict-line gap (per Sensemaking FF-S1 + Critique R1) is handled with backward-compat at L0 (absent verdict line → PROCEED with NOTE) + L1+ COULD to add the verdict line to /decompose's spec for uniformity.

### Prior 12 — `cognitive_harness/surfacing/SKILL.md` + reference

- **Commitment:** Traversal Trace + State Summary + Telemetry with verdict line.
  - **Re-test status:** RE-TESTED — CONTRACT DERIVED.
  - **Evidence:** surfacing.md contract specifies REQUIRED Traversal Trace or State Summary + Telemetry with verdict line.

### Prior 13 — `cognitive_harness/protocols/conclude.md` + `branch_inquiry.md` + runner specs

- **Commitment:** `_state.md` template (Flow-type, Pipeline, Progress, Iteration, Status, Next Discipline, Relationships, History); `_branch.md` template (Question, Goal, Source Input, Scope Check, Layer Commitment, Synthesis Trigger); CONCLUDE updates `_state.md` Status: COMPLETE.
  - **Re-test status:** RE-TESTED — CONTRACT DERIVED.
  - **Evidence:** the inquiry-level contracts (P2) specify REQUIRED fields for `_state.md` (Flow-type, Pipeline, Progress, Iteration, Status, Next Discipline) and `_branch.md` (Question, Goal); SHOULD-have fields cover the runners' templates. Unified across runners; per-runner value variation accommodated.

### Prior 14 — `cognitive_harness/protocols/resume.md`

- **Commitment:** verdict-line pattern `**Overall: PROCEED**` / `FLAG` / `RE-RUN`; backward-compat for older outputs that lack the verdict line (treat as PROCEED with NOTE).
  - **Re-test status:** RE-TESTED — INHERITED VERBATIM.
  - **Evidence:** Q6's per-discipline contracts use the same verdict-line pattern; backward-compat handling inherits RESUME §2 directly. /decompose's verdict-line backward-compat is a specific application of this inherited pattern.

## Next Actions

### MUST

- **What:** Update `devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/finding.md` to mark Q6 as RESOLVED-WITH-DESIGN (matching the resolution-status of Q1, Q3, Q4, Q5, Q10), citing this finding. The "PARTIALLY ANSWERED (the persistence inquiry's schema does NOT resolve Q6's upstream-artifact contracts)" notice on Q6 graduates to "RESOLVED-WITH-DESIGN" with the resolution block embedded (analogous to how Q1, Q3, Q4, Q5, Q10 were updated when their resolutions landed).
  - **Who:** CONCLUDE-side cross-doc impact action; the user (or follow-up agent invocation).
  - **Gate:** observable — when this finding is committed.
  - **Why:** the frontier-questions finding is the routeman implementation chain's status spine; readers consult it for current Q-status.

### COULD

- **What:** Author the new sections in `cognitive_harness/protocols/inquiry_filesystem_protocol.md` per this finding's design — 5 per-discipline contract sections + 2 inquiry-level contract sections + 1 file-validation-layer cross-reference section + the drift-coordination meta-process note. Follows the established protocol-file pattern; sections cite consumer reads (audit + adaptive-guidance).
  - **Who:** human author (or a follow-up structural-layer inquiry).
  - **Gate:** condition-bound — when Q5's protocol file is being authored (per Q5's MUST/COULD actions); Q6 additions ship together with Q5's content for clean L0 integration.
  - **Why:** the contracts are the artifact form of the design; without the protocol-file sections, the design has no canonical reference.
  - **Depends-on:** Q5's protocol-file authoring COULD. This COULD is GATED — do not act until the protocol file exists (Q5 commits its creation).

- **What:** Author the validation-layer section in routeman's SKILL.md per this finding's design. The section specifies: parser (markdown section-heading detection + optional YAML frontmatter); per-discipline dispatch table (inheriting 01-00's per-movement-type pattern); 3-tier emitter (INFO / ERROR / ERROR) feeding the audit's `_audit.md` log. Runs at scan time within routeman invocation.
  - **Who:** the routeman SKILL.md authoring inquiry / author.
  - **Gate:** condition-bound — when routeman SKILL.md is being authored (paired with Q5's commitments + Q6's protocol-file sections).
  - **Why:** the validation layer is routeman's runtime behavior; the SKILL.md is the operational artifact.
  - **Depends-on:** the protocol-file authoring COULD above. GATED.

- **What:** Per-discipline SKILL.md edits to commit the contracts on the discipline side (L1+ progression). For each of the 5 worker disciplines (sense-making, innovate, td-critique, decompose, surfacing), add a small section under "Save the output" or equivalent committing to producing files conformant with the protocol's per-discipline contract.
  - **Who:** human author (or per-discipline-spec-edit inquiry).
  - **Gate:** condition-bound — when the project advances to L1 OR when discipline-spec drift creates non-conformance pressure.
  - **Why:** the L1+ enforcement progression requires per-discipline commitment; coordinated edits propagate the contracts to the discipline side.
  - **Depends-on:** the protocol-file authoring COULD above + project at L1+. GATED.

- **What:** Add a verdict line to `cognitive_harness/decompose/SKILL.md` and its reference for uniformity with the other 4 worker disciplines. The decomposition.md output ends with a Telemetry section + verdict line per RESUME §2 pattern.
  - **Who:** human author or follow-up per-discipline-spec-edit inquiry.
  - **Gate:** condition-bound — L1+ when /decompose's spec is being edited for any reason OR when backward-compat NOTE signal becomes operationally annoying.
  - **Why:** uniformity across all 5 disciplines simplifies the validation layer (no /decompose special-case backward-compat); makes /decompose's completeness explicit rather than inferred.

- **What:** Calibrate the L2+ enforcement-strength promotion criterion (5+ consecutive non-conformance warnings + L2+ autonomy) when project reaches L1/L2 and accumulated validation data is available.
  - **Who:** human user / follow-up inquiry.
  - **Gate:** observable — when project crosses L1 → L2 on the autonomy register AND non-conformance warning data has accumulated over 5+ invocations.
  - **Why:** enforcement promotion needs empirical calibration; the L2+ commitment is forward-looking.

### DEFERRED

- **What:** Generalization of the contract pattern to future cross-discipline-coordination protocols (e.g., if /reflect becomes active and needs analogous contracts). The validation-layer + per-discipline-dispatch + 3-tier-emitter pattern is portable.
  - **Gate:** observable — when a second discipline-pair coordination protocol need emerges.
  - **Why (if revived):** if the pattern generalizes, a meta-protocol-design for cross-discipline coordination becomes valuable.

- **What:** Per-runner inquiry-level contract refinement (if value-variation drift causes issues — e.g., a future runner with substantially different `_state.md` structure). Currently the unified contract accommodates all three flow-types (classic, extended, extended-surfacing).
  - **Gate:** observable — when a future runner's `_state.md` structure exceeds the unified contract's accommodation.
  - **Why (if revived):** per-runner contracts add specificity at the cost of unification; only worth doing if forced.

- **What:** Validation-layer code-style specialization beyond regex (e.g., proper markdown AST parsing instead of section-heading regex) at L2+ if regex-based parsing proves brittle.
  - **Gate:** observable — when regex-based parsing exhibits false-non-conformance reports in practice.
  - **Why (if revived):** more sophisticated parsing reduces validation errors but costs implementation complexity; only worth doing if needed.

- **What:** Validation layer as a separate `cognitive_harness/protocols/file_validation.md` protocol (the A3-Cand-2 KILL-with-seed from Innovation/Critique). Revival if validation grows beyond routeman scope (e.g., other consumers also need to validate the same contracts; not currently anticipated).
  - **Gate:** observable — when validation behavior is needed by ≥2 consumers other than routeman.
  - **Why (if revived):** code-reuse + separation-of-concerns at the cost of an additional artifact.

## Reasoning

### Why protocol-file sections, not separate file or per-discipline-SKILL.md?

The contracts are cross-cutting (consumed by routeman + audit + adaptive-guidance + potentially future consumers). Embedding them in each worker discipline's SKILL.md would: (a) force per-discipline-spec edits at first ship (multi-week coordination cost; rejected per FP3 phase-fit); (b) duplicate cross-references across 5+ artifacts (drift risk). A separate `cognitive_harness/protocols/file_validation.md` artifact was tested (A3-Cand-2 Inverted alternative) and KILLed-with-seed: the contracts ARE cross-cutting but the validation BEHAVIOR is routeman-internal; the cleanest split is contracts in Q5's protocol file (cross-cutting concern; already has structural neighbors there) + validation layer in routeman's SKILL.md (routeman-internal behavior). Q5's protocol file growing from ~7 to ~15 sections keeps related concerns together rather than splitting across two files.

### Why section-level granularity, not content-pattern granularity?

Fine-grained content-pattern validation (e.g., "MUST contain regex pattern X") is brittle to discipline-spec editorial variations — a future SKILL.md editor changing section heading text from "Phase 1" to "Step 1 Anchor Extraction" would break the contract silently. Section-level granularity (matching multiple acceptable heading-text patterns like "Phase 1" OR "Step 1 Anchor Extraction") is robust. Content-pattern requirements are reserved for places consumers explicitly read content (the verdict-line pattern from RESUME §2; the per-candidate SURVIVE/REFINE/KILL markers in critique.md that adaptive-guidance Stage 1 reads). The blended granularity (section-level default + content-pattern at consumer reads) is the minimum-sufficient specification.

### Why validation-without-enforcement at L0?

The coordinated-upstream-spec-edits alternative requires per-discipline SKILL.md edits at first ship (5 small edits across the 5 worker disciplines) plus the validation layer plus the protocol-file expansion — the candidate resolution path explicitly names this as "two to three weeks of scope." Validation-without-enforcement at L0 ships the validation infrastructure + the contracts immediately; per-discipline edits become L1+ COULDs that propagate incrementally as the project matures. The "validation is half-measure" prosecution was tested in critique: the response is that validation-without-enforcement is STAGED, not permanent — the L2+ promotion criterion (5+ consecutive non-conformance warnings + L2+ autonomy → warn promotes to halt) is the path to full enforcement when the project's invocation rate makes silent degradation unacceptable. Phase-fit at L0 wins.

### Why backward-compat for /decompose's verdict-line gap?

/decompose's spec doesn't currently emit a verdict line in the same Telemetry format as the other 4 worker disciplines. Two paths were considered: (a) backward-compat at L0 + L1+ COULD to add the verdict line; (b) require the /decompose-spec edit before this design ships (forcing upstream-spec coordination at first ship). Path (a) honors FP3 phase-fit + the validation-without-enforcement enforcement strength; path (b) conflicts with both. Path (a) is the chosen path. The backward-compat surfaces NOTE signal in routeman + audit output so the user is aware /decompose's completeness is inferred rather than confirmed; the L1+ COULD path commits the fix when /decompose's spec is being edited for any reason.

### Why R1 drift-coordination meta-process?

Critique's adversarial evaluation surfaced (objection 2) that section-level contract specifications are vulnerable to discipline-spec editorial drift — a future SKILL.md editor changing heading text could break the contract silently. The multi-acceptable-pattern matching (e.g., "section containing 'SV1' OR 'Sense Version 1'") reduces but doesn't eliminate this risk. R1 adds a meta-process commitment: when a discipline spec changes section heading text, the protocol's contract section MUST be updated in the same commit. This catches the cases multi-pattern matching doesn't. The protocol's existence as a single canonical location makes the coordination point visible.

### Why the design is structurally ~80% documentation?

The 80%-documentation/20%-novel framing inherits directly from Q5's pattern. The contracts derive from existing artifacts: per-discipline section requirements from discipline reference files; inquiry-level contracts from runner templates + CONCLUDE conventions; verdict-line from RESUME §2; 3-tier failure handling from 24-40; protocol-file location from Q5; backward-compat patterns from RESUME §2 + Q5. The 20% novel work: the validation layer's procedural design (parser + dispatch + emitter); the /decompose verdict-line gap handling; the drift-coordination meta-process; the L2+ promotion criterion. The 80/20 framing is honest, not a hedge — most of the design's value is consolidating implicit conventions at one canonical location.

### What could be wrong with this design?

Strongest concerns from critique:

- **Net-addition value question:** if the contracts are 80% documentation, are they worth adding as net-new artifact content? Defense: the contracts serve THREE purposes the discipline specs alone don't (canonical single-location reference for consumer-reads; explicit minimum-shape vs maximum-shape; validation-layer substrate). The net-addition is justified.
- **Section-heading drift risk:** multi-pattern matching reduces but doesn't eliminate the risk that section heading text changes break contracts. The R1 drift-coordination meta-process catches the residual.
- **/decompose backward-compat fragility:** absent verdict line in decomposition.md always passes the write-completeness check at L0 — is this honest? The NOTE surfaces the inference signal; users see it; the L1+ COULD path is the explicit fix. The fragility is staged, not silent.
- **Validation-without-enforcement could be ignored:** users see warnings; ignore them; downstream degraded. Defense: the L2+ promotion criterion makes the path to halt-enforcement explicit when warnings prove insufficient. Validation infrastructure exists; enforcement strengthens with autonomy.

## Open Questions

### Monitoring

- **Whether the contracts catch real non-conformance in practice.** Observable after 5+ routeman invocations under the new validation layer. If validation routinely surfaces non-conformance, the contracts are doing useful work; if it never fires, the contracts may be too loose.

- **Whether discipline-spec editors honor the R1 drift-coordination meta-process.** Observable when a discipline-spec edit changes section heading text. If the protocol's contract section is updated in the same commit, R1 works; if drift accumulates, the coordination protocol needs strengthening (e.g., as a pre-commit hook or a CI check at L2+).

- **Whether validation-without-enforcement's INFO warnings get user attention.** Observable when non-conformance warnings surface and the user response is recorded. If warnings are systematically ignored, the L2+ promotion criterion may need to fire earlier than expected.

- **Whether /decompose's backward-compat NOTE causes operational confusion.** Observable when /decompose runs in inquiries and the NOTE surfaces. If users ask "why is decomposition's completeness inferred?" repeatedly, the L1+ COULD action (add verdict line to /decompose spec) becomes urgent.

### Blocked

- **The protocol-file sections + routeman SKILL.md validation-layer section authoring** — blocked on the protocol-file authoring (Q5's COULDs) + routeman SKILL.md authoring (the broader routeman-implementation chain).

- **Per-discipline SKILL.md edits (L1+ progression)** — blocked until project reaches L1 OR discipline-spec drift creates non-conformance pressure.

- **L2+ enforcement promotion** — blocked until project crosses L1 → L2 AND accumulated validation data justifies promotion.

### Research Frontiers

- **Pattern-portability to future cross-discipline-coordination protocols** (if /reflect becomes active OR a new boundary discipline ships with similar contract needs). Revival when a second instance emerges.

- **Validation-layer separate protocol** (A3-Cand-2 KILL-with-seed). Revival if validation grows beyond routeman scope.

- **Per-runner inquiry-level contract refinement** (if value-variation drift causes issues). Revival when a future runner's `_state.md` structure exceeds unified contract accommodation.

- **More sophisticated parser** (markdown AST instead of regex section-heading detection). Revival if regex parsing exhibits false-non-conformance.

### Refinement Triggers

- **If the contracts produce too many non-conformance warnings in practice** (high false-positive rate), the contracts are too strict — relax MUST-have sections; promote some to SHOULD-have.

- **If discipline-spec drift breaks contracts despite R1 coordination,** strengthen R1 to an enforced check (e.g., pre-commit hook or CI gate at L2+).

- **If /decompose's backward-compat NOTE causes recurring user confusion,** elevate the L1+ COULD to MUST priority for the next /decompose spec edit.

- **If validation-without-enforcement at L0 produces silent downstream degradation,** promote enforcement strength earlier than the L2+ criterion (warn → halt at L1).

- **If a future discipline (new worker discipline; reactivated /reflect) requires a contract,** extend the protocol's per-discipline sections + the validation layer's dispatch table.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

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

</details>
