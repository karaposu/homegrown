## User Input

(See `_branch.md` Source Input for the full verbatim user input.)

# Sensemaking — File-Shape Contracts

## SV1 — Baseline Understanding

Routeman reads upstream worker outputs (sensemaking.md, innovation.md, critique.md, decomposition.md, surfacing.md, plus `_state.md` + `_branch.md`). What's INSIDE each file is currently established by convention (each discipline spec commits its own output structure) but not by explicit per-discipline file-shape contracts that routeman or the audit can validate against. Q5 settled the file-system surrounding the files; Q6 settles the contents of the files themselves.

Naive reading: design 5 per-discipline contracts + 2 inquiry-level contracts + a validation layer = 7 design pieces. The Surfacing output suggests deeper coupling: the audit (06-00) and adaptive-guidance (01-00) already read specific structural elements from these files (SURVIVE/REFINE/KILL verdicts in `critique.md`; Constraints/Key-Insights in `sensemaking.md`; etc.) — so the contracts are de-facto constrained by these existing reads. Q6's job is partly to make the existing reads' assumptions EXPLICIT, partly to add a validation layer that detects non-conformance.

## Phase 1 — Cognitive Anchor Extraction

### Constraints

- **C1 — Q5's commitments are fixed inheritance.** Filename patterns, atomic-write, verdict-line as completeness signal, 3-tier failure handling. This inquiry's contracts live INSIDE the files Q5's protocol governs.
- **C2 — The audit's per-mode dispatch table (06-00) reads specific file structural elements** that must be preserved by the contracts: `_state.md` Status field; `routeman.md` Guidance Pointers; `_navig.md` Stage-1 drop-with-reason log; `docs/autonomy_level.md` `transition_history`. Backward compat constraint.
- **C3 — The adaptive-guidance mechanism (01-00) reads specific elements** from cycle outputs: `critique.md` SURVIVE/REFINE/KILL verdicts; `sensemaking.md` Constraints + Key-Insights; meta-reasoning field. Backward compat constraint.
- **C4 — Discipline-spec writing conventions are stable** (per the 5 active discipline references). Each discipline already commits the structure of its output (SV1-SV6 for sensemaking; mechanism applications for innovation; phases for critique; 7-step output for decompose; Trace + Summary + Telemetry for surfacing). The contracts must NOT break what disciplines currently produce.
- **C5 — Older inquiry-folder content must continue to work.** Per FF-S6 from Surfacing: inquiries from before this contract's commitment may lack certain conventions (verdict line; atomic-write); backward-compat handling is mandatory.
- **C6 — File-mediated architecture (16-31) constraint inherits unchanged.** Validation operates on file content read via scan; no in-context callbacks.
- **C7 — No new infrastructure at L0** (project has no schedulers, no validators-as-services; the validation layer must be implementable as a section in routeman SKILL.md using existing parsing primitives).
- **C8 — /decompose has no verdict line in its spec** (per FF-S1 from Surfacing). The contract for `decomposition.md` either accepts this gap with backward-compat OR proposes adding a verdict line.
- **C9 — Multi-discipline coordination cost is real** (per the candidate resolution path naming "two to three weeks of scope"). Validation-without-enforcement at first ship is the lighter path; coordinated upstream-spec edits are deferred.

### Key Insights

- **KI1 — The contracts are mostly RE-DERIVABLE from existing discipline specs** (per FF-S5 from Surfacing). Each discipline's reference file (`cognitive_harness/<discipline>/references/<discipline>.md`) already enumerates what the output contains. The contract for each file is largely a re-statement + a verdict-line commitment + a `## User Input` section commitment, with backward-compat clauses. **The design is again ~80% documentation of existing conventions + ~20% novel** (the validation layer; the verdict-line gap-fix for /decompose).
- **KI2 — The audit + adaptive-guidance pre-existing reads ARE the contracts.** Per items #13-14 from Surfacing, both consumers already read specific structural elements from the files. Those reads ARE the implicit contracts that this inquiry makes explicit. **The contracts are not invented from scratch — they're surfaced from the existing consumer reads.**
- **KI3 — Validation-without-enforcement is the natural L0 commitment.** Per FF-S4 + C9, the candidate resolution path names both options; the lighter option (routeman SKILL.md commits the contracts + validation; per-discipline SKILL.md edits deferred) is feasible at L0 + extension-hooks to coordinated edits at L1/L2+.
- **KI4 — The validation layer is structurally a parser + checker + emitter.** Parser reads the file (markdown + optional YAML frontmatter); checker compares against the per-discipline contract; emitter writes per-tier verdict (INFO / ERROR / ERROR per 24-40 inheritance) into the audit's `_audit.md` log file from 06-00 OR routeman's `_navig.md`. This composes with both Q5's failure handling AND 06-00's audit.
- **KI5 — /decompose's verdict-line gap is a real but minor concern.** Per FF-S1, the spec doesn't currently emit verdict lines in the same Telemetry format. Two paths: (a) add a verdict line to the /decompose spec (small per-discipline edit; out of scope for this inquiry but commit as a COULD); (b) accept the gap and backward-compat — `decomposition.md` falls under the "no verdict line" branch of the two-part write-completeness check (canonical filename + Q5 backward-compat treats absence as PROCEED with NOTE). Either path is structurally viable.
- **KI6 — The contracts are MINIMUM SHAPE, not MAXIMUM SHAPE.** A contract specifying "MUST contain section X" + "MUST end with verdict line" doesn't preclude richer content. This keeps the contracts compatible with discipline-spec evolution (additions don't break the contract; only removals would).
- **KI7 — `## User Input` section is a near-universal convention** (per item #27 from Surfacing). Each discipline's SKILL.md instructs the worker to record the user's input at the top. The contracts should commit this convention.

### Structural Points

- **SP-S1 — Two contract scopes:** per-discipline (per worker output file) and inquiry-level (`_state.md`, `_branch.md` shared across all disciplines).
- **SP-S2 — Three contract layers per file:** (a) frontmatter (optional YAML; varies); (b) required sections (per-discipline structural elements); (c) terminal marker (verdict line position for disciplines that emit one). Plus convention-level (`## User Input` section at top; existing).
- **SP-S3 — Validation layer is a unified parser** that dispatches per-discipline contract rules (cf. 24-01's per-movement-type dispatch table pattern).
- **SP-S4 — Validation runs at scan time** within routeman's invocation, NOT at write time (write-time validation would belong to each worker, not routeman; out of scope).
- **SP-S5 — Validation outputs feed into the audit's failure-mode framework** via the 3-tier vocabulary. Per Q5: INFO (absent file); ERROR (malformed). Q6 adds a third trigger: ERROR (contract non-conformance — e.g., missing required section).
- **SP-S6 — Two-axis enforcement:** discipline-side (workers commit to producing conformant files via per-discipline SKILL.md edits) and routeman-side (routeman validates + reports). The L0 commitment can be routeman-side only (validation-without-enforcement); discipline-side edits become L1+ COULDs.

### Foundational Principles

- **FP1 — Document, don't invent.** Per the project's pattern (Q5 80%-documentation; 24-00 adopted multi_resolution_navigation; 24-40 adopted autonomy_ladder values): re-statement of existing conventions is the first-line work; novel design only where genuinely missing.
- **FP2 — Backward-compat is non-negotiable.** Older inquiry-folder content must continue to work. New inquiries benefit from the validation; old inquiries are scanned with relaxed rules.
- **FP3 — Phase-fit at L0.** First ship is routeman-side validation + the contracts committed in protocol/SKILL.md (no upstream spec edits required). Discipline-side coordinated edits are L1/L2+ extensions.
- **FP4 — Inherit Q5's vocabulary + composition.** The validation layer extends Q5's 3-tier failure handling rather than introducing a new vocabulary; the contracts compose with Q5's atomic-write + verdict-line.
- **FP5 — Minimum-shape contracts, not maximum-shape.** Each contract specifies MUST-haves (the parts consumers rely on) without precluding richer content. Discipline-spec evolution stays unblocked.

### Meaning-Nodes

- **MN1 — "File-shape contract"** = the minimum structural specification a file MUST meet for downstream consumers (routeman, audit) to rely on it. Distinct from the discipline's full output spec (which is the maximum / canonical shape).
- **MN2 — "File-validation layer"** = the routeman-side parser + checker + emitter that runs at scan time, validates files against their per-discipline contracts, and emits per-tier verdicts.
- **MN3 — "Enforcement strength"** = the project's commitment to making non-conforming files cause halts vs warnings. Stronger = halt; weaker = warning. Q5 inherited 24-40's pattern (ERROR halts); Q6 can adopt either strength.
- **MN4 — "Validation-without-enforcement"** = the L0-phase-fit option where routeman validates + reports + does NOT halt the pipeline. Older non-conforming content continues to work; new content benefits from awareness.

## SV2 — Anchor-Informed Understanding

The design is ~80% derivation from existing conventions + ~20% genuinely novel work. The novel pieces:

1. **The per-discipline file-shape contracts** as explicit minimum-shape specifications (re-derived from the discipline references + the audit's + adaptive-guidance's existing reads).
2. **The validation layer** in routeman's SKILL.md (a parser + per-discipline dispatch + 3-tier emitter).
3. **The enforcement-strength commitment** for first ship: validation-without-enforcement.
4. **The /decompose verdict-line gap handling** — backward-compat for first ship + a discipline-spec-edit COULD to add the verdict line in alignment with the other 4.

Everything else (the specific section/structure requirements per discipline; the inquiry-level `_state.md` + `_branch.md` requirements; the 3-tier failure handling; the file-mediated architecture) is documenting / re-using.

## Phase 2 — Perspective Checking

### Technical / Logical perspective

Technically, the validation layer is `validate(file_path, discipline_type) → (verdict_tier, evidence_record)`. The function is pure with respect to inputs. Per-discipline contracts are typed schemas; the validator dispatches per discipline_type, applies the schema check, emits verdict.

Schema language: minimum sections (e.g., for sensemaking.md: MUST have a section heading matching `SV6` or `SV1-SV6 stabilized model`; SHOULD have a Telemetry section with verdict line). Backward-compat clauses: missing optional sections → NOTE; missing required sections → ERROR-tier with halt-or-warn per enforcement strength.

### Human / User perspective

The user (current human Selector at L0/L1) gets clearer routeman + audit output when validation runs. Non-conformant files surface as INFO/ERROR rather than silently degrading routeman's reconstruction. Debugging is easier.

The user does NOT see the validation directly unless something is non-conformant. PROCEED is silent (per Q5's pattern); INFO/ERROR surface.

### Strategic / Long-term perspective

The contracts make the implicit consumer-reliance explicit. Future SKILL.md authors editing discipline specs know which sections + structures are load-bearing (the audit + adaptive-guidance + routeman all depend on them). This raises the bar for discipline-spec edits, which is healthy for project coherence.

Long-term, as new disciplines emerge or existing ones evolve, the contracts evolve with them. The validation layer's per-discipline dispatch table is extensible.

### Risk / Failure perspective

- **R1 — Contracts too strict:** validation reports too many non-conformances; user fatigue; ignore signal. Mitigation: minimum-shape contracts (only MUST-haves); validation-without-enforcement at L0 (warnings, not halts).
- **R2 — Contracts too loose:** misses genuine non-conformances; routeman's scan silently degrades. Mitigation: cover the structural elements audit + adaptive-guidance already read.
- **R3 — Contract drift:** disciplines evolve their output structure; contracts get stale. Mitigation: contracts are minimum-shape (additions don't break); annual / triggered audit of contract conformance to current disciplines.
- **R4 — Validation layer bugs:** the parser misreads a conformant file as non-conformant. Mitigation: test against empirical inquiry-folder content; treat parser failures themselves as ERROR-tier (halt; not a silent miss).
- **R5 — Decompose's verdict-line gap creates inconsistency:** if 4 of 5 disciplines have verdict lines and 1 doesn't, the validation layer needs special-case logic. Mitigation: backward-compat clause for /decompose (treats absent verdict line as PROCEED); discipline-spec-edit COULD adds the verdict line later for uniformity.

### Resource / Feasibility perspective

Authoring cost: per-discipline contracts (5 × small spec section each ≈ 30-50 lines per contract = ~200-300 lines total) + inquiry-level contracts (2 × ~30 lines) + validation layer section in routeman SKILL.md (~50-100 lines) = comparable to Q5's resolution scope. Feasible at L0.

The per-discipline SKILL.md edits (committing the contracts on the discipline side) are downstream COULDs — 5 small edits each. Not required for first ship.

### Ethical / Systemic perspective

The contracts make the project's implicit reliance explicit, which improves auditability + reduces surprise behavior. Long-term project coherence wins; per-discipline-author burden is small (the contracts derive from what disciplines already produce).

### Definitional / Internal Consistency perspective

Check:
- Does the contract framing contradict any established commitment? **No.** Q5 commits filename + atomic-write + verdict-line completeness; this inquiry commits CONTENT shape; cleanly composed.
- Does the validation layer violate routeman's enumerate-all identity? **No** — validation is observe-only on worker outputs; doesn't gate routeman's enumeration of routes.
- Does adding the validation layer violate the isolated-session + file-scanning architecture? **No** — validation reads files, exactly like routeman + audit do.

### Definitional / Frame-exit Completeness perspective

**Gating predicate check:** does the inquiry's commitments include terms inherited from prior findings used across ≥2 distinct values/levels WITHIN this inquiry's own committed structures?

- **"Contract"** — used as one referent (the per-discipline + inquiry-level contracts). Multi-instance (5 per-discipline + 2 inquiry-level) but each instance is the same conceptual entity. Does NOT fire (not "distinct values/levels" in the gating sense).
- **"File"** — used as one referent (the markdown files routeman + audit read). Not multi-valued. Does NOT fire.
- **"Validation"** — used at one referent (the validation layer's run-time behavior). Does NOT fire.
- **"Enforcement"** — used at TWO levels: validation-without-enforcement (L0; warnings only) vs coordinated-spec-edits (L1+; per-discipline commitments). **Multi-value WITHIN this inquiry's commitments.** Gating fires on this term.

**Apply Frame-exit Completeness to "Enforcement":**

1. **Existence Enumeration:** project-wide, "enforcement" can refer to: (a) routeman-side validation (warnings/halts at scan time); (b) discipline-side commitment (worker SKILL.md committing the contract); (c) runner-side detection (runner checks for non-conformance at routeman-invocation-end); (d) human-side review (code review catches non-conforming discipline edits); (e) hypothetical CI-side automated check (project has no CI for this).
2. **Role Assessment:** the design's frame includes (a) and (b) explicitly (validation-without-enforcement vs coordinated-spec-edits). (c) is referenced as a Q5-precedent (runner can detect orphan `.tmp` files); analogously, runner could detect contract non-conformance. (d) is implicit (code review is the human enforcement mechanism). (e) is out of scope (no project CI). All in-scope referents are addressed.
3. **Verdict Rigor:** the "validation-without-enforcement vs coordinated-spec-edits" framing is a clean operational distinction. No clean-resolution issue.
4. **Residual / Coverage Justification:** is there an enforcement concern not captured? Runner-side detection (c) is mentioned but not committed as a separate piece — it can be absorbed into the validation layer's scope (the runner reads `_audit.md`'s ERROR verdicts and surfaces them to the user; this is what Q5 already committed for the audit). No residual.

Frame-exit perspective: enforcement has 2 in-scope axes + 2 referenced contexts + 1 out-of-scope (no CI). The framing is coherent.

### Phase / Calibration-State perspective

**Phase / Calibration-State perspective check:** does this rule depend on calibration the current project state has?

**YES** — the enforcement strength choice depends on the project's autonomy level. At L0, validation-without-enforcement is phase-fit (per-discipline-spec edits are coordination cost). At L1, the project can begin adopting per-discipline SKILL.md edits incrementally. At L2+, validation can promote from warnings to halts (stricter enforcement) if the project's invocation rate makes silent degradation unacceptable.

The Phase / Calibration-State perspective fires. Applied:
- **At L0:** ship validation-without-enforcement; per-discipline contracts live in the protocol artifact; routeman SKILL.md commits the validation layer; no upstream spec edits.
- **At L1:** per-discipline SKILL.md edits can begin (5 disciplines × small commitment); the runner can surface validation warnings more prominently.
- **At L2+:** validation can promote from warnings to halts on persistent non-conformance; automated checks against contract compliance become viable.

## SV3 — Multi-Perspective Understanding

Eight perspectives converge: the design is a protocol-extension (additional sections in the same `inquiry_filesystem_protocol.md` file from Q5, OR a separate `cognitive_harness/protocols/file_shape_contracts.md` file — Decomposition will adjudicate) + a validation layer section in routeman's SKILL.md + 5 per-discipline contract specs + 2 inquiry-level contract specs + 1 enforcement-strength commitment. ~80% documentation of existing conventions + ~20% novel work.

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Where do the contracts live?

**Vague term:** "the contracts" — do they live in the existing Q5 protocol file (added sections to `inquiry_filesystem_protocol.md`)? A new protocol file? In each worker discipline's SKILL.md? In routeman's SKILL.md?

**Strongest counter-interpretation:** each worker discipline's SKILL.md is the natural home — each discipline owns its output. The contract per discipline lives at the source of truth.

**Why the counter-interpretation fails (structural grounds):** if contracts live ONLY in discipline SKILL.md files, the multi-discipline-coordination cost is the full upfront cost (5 discipline-spec edits + each future discipline needs the same). At L0 with no validation infrastructure to enforce the contracts, the discipline-side commitment isn't worth the upfront cost. The validation-without-enforcement option (KI3 + FP3) commits the contracts in routeman SKILL.md / a protocol file FIRST; per-discipline edits are L1+ COULDs.

**Confidence:** HIGH that the L0 commitment is protocol-file + routeman SKILL.md, with per-discipline SKILL.md edits as L1+ COULDs.

**Resolution:** the contracts live in the existing `cognitive_harness/protocols/inquiry_filesystem_protocol.md` (from Q5) as ADDITIONAL sections — one section per discipline contract + one for the inquiry-level contracts + one for the validation layer. The protocol artifact already exists conceptually (Q5 commits its authoring); Q6's contracts become additional sections in the same artifact. The single-protocol-file location keeps related concerns together; future per-discipline SKILL.md edits can cross-reference the protocol's contract sections.

**What is now fixed?** Contracts in Q5's protocol file (additional sections).

**What is no longer allowed?** Spreading the contracts across 5+ worker SKILL.md files at first ship.

**What now depends on this choice?** The protocol file's authoring (a COULD inherited from Q5; this inquiry expands the protocol's content + section count).

**What changed in the conceptual model?** The protocol file from Q5 grows from ~7 sub-aspect sections to ~7 + 8 contract sections + 1 validation-layer section = ~16 sections. Still a single coherent artifact.

### Ambiguity 2: Enforcement strength at first ship

**Vague term:** "enforcement strength" — validation-without-enforcement (L0) vs coordinated-spec-edits (full enforcement) at first ship?

**Strongest counter-interpretation:** coordinated-spec-edits at first ship makes the contracts strong from day one; users and consumers benefit from the consistency immediately.

**Why the counter-interpretation fails (structural grounds):** the coordination cost (5 worker SKILL.md edits + the validation layer + the protocol expansion) is large for first ship. The candidate resolution path explicitly names "two to three weeks of scope" for the full coordinated route. Validation-without-enforcement at L0 ships the validation infrastructure + the contracts; per-discipline edits become L1+ COULDs that propagate incrementally as the project matures. The L0 commitment is phase-fit; the L1+ progression is documented.

**Confidence:** HIGH that validation-without-enforcement is the L0 commitment.

**Resolution:** validation-without-enforcement at L0. Routeman + audit validate files against contracts at scan time; non-conformance surfaces as INFO (missing optional section) or warnings; halts only on parser failures (per Q5's existing ERROR semantics). Per-discipline SKILL.md edits to commit the contracts on the discipline side are L1/L2+ COULDs.

**What is now fixed?** Validation-without-enforcement at L0; coordinated edits as L1+ extensions.

**What is no longer allowed?** Requiring per-discipline SKILL.md edits at first ship.

**What now depends on this choice?** The validation layer's failure-tier mapping (most non-conformances → INFO at L0; ERROR only for parser failures).

### Ambiguity 3: /decompose's verdict-line gap handling

**Vague term:** "the gap" — accept it with backward-compat OR propose adding a verdict line to /decompose's spec?

**Strongest counter-interpretation:** propose adding the verdict line. Uniformity across all 5 disciplines simplifies the validation layer (no special-case logic for /decompose).

**Why the counter-interpretation fails (structural grounds):** the counter-interpretation has merit but is in tension with FP3 (phase-fit at L0; no upstream spec edits required at first ship). Both paths are viable. Compromise: ship backward-compat handling for first ship (validation layer treats /decompose's absent verdict line as PROCEED with NOTE, per Q5 + RESUME §2's existing backward-compat pattern) + commit a COULD action to add the verdict line to /decompose's spec for uniformity in a future small edit.

**Confidence:** MEDIUM-HIGH on the compromise; both paths are individually viable.

**Resolution:** backward-compat handling at first ship (validation layer treats /decompose's absent verdict line as PROCEED with NOTE); add `/decompose verdict-line addition` as a COULD action for L1+ uniformity. The gap is documented + handled; the discipline-spec edit is incremental future work.

**What is now fixed?** Backward-compat handling at L0; verdict-line addition as L1+ COULD.

**What is no longer allowed?** Requiring /decompose's spec edit before this inquiry's design ships.

**What now depends on this choice?** The decomposition.md contract specifies "verdict-line OPTIONAL with backward-compat" rather than "verdict-line REQUIRED."

### Ambiguity 4: What's the right minimum-shape granularity?

**Vague term:** "minimum-shape contracts" — at what granularity do the contracts specify required structure? Section-level (must have section X)? Sub-section-level? Content-pattern-level (must contain `**Overall: PROCEED**` somewhere)?

**Strongest counter-interpretation:** contract at the finest granularity (content patterns: must contain specific regex matches) for strongest validation.

**Why the counter-interpretation fails (structural grounds):** fine-grained content patterns are brittle — discipline-spec evolution that's structurally equivalent but textually different breaks the validation. Section-level granularity (must have a top-level or major-level heading containing specific text patterns) is robust to text variations + still catches major non-conformance.

**Confidence:** HIGH that section-level granularity is right; specific content-pattern checks only where consumers explicitly require them (e.g., the verdict line pattern from RESUME §2).

**Resolution:** contracts specify required SECTIONS (markdown headings) for each discipline. Specific content patterns are only required where consumers explicitly read them (verdict line; some specific anchor types). Optional sections may also be enumerated as SHOULD-haves for documentation purposes.

**What is now fixed?** Section-level granularity for contracts; content-pattern requirements only at explicit consumer reads.

**What is no longer allowed?** Fine-grained content-pattern validation as the default; over-specification.

### Ambiguity 5: Inquiry-level vs per-discipline scope boundary

**Vague term:** the contract for `_state.md` — is this per-runner (MVL vs MVLw vs future runners) or unified?

**Strongest counter-interpretation:** per-runner contracts (one for classic MVL flow-type; one for extended; one for extended-surfacing). Each runner's `_state.md` template has slightly different content (Progress checkboxes count varies; Pipeline string varies).

**Why the counter-interpretation fails (structural grounds):** the unified `_state.md` contract specifies the COMMON required fields (Flow-type, Pipeline, Progress, Iteration, Status, Next Discipline) and allows the values to vary per runner. The runner-specific aspects are values, not structure. Unified contract; per-runner values fill it.

**Confidence:** HIGH that unified `_state.md` contract is right.

**Resolution:** unified inquiry-level contracts. `_state.md` has one contract listing Flow-type + Pipeline + Progress + Iteration + Status + Next Discipline + (optional) Relationships + History. Per-runner values fill these fields per the runner's template.

*Refinement note — Load-bearing concept test (applies at this Phase 3):*

Test load-bearing concepts:

- **"File-shape contract"** — domain-property-vs-external-default: project-specific term, not an external default. The contract concept is anchored in the audit + adaptive-guidance's existing reads. PASS.
- **"Per-discipline"** vs **"inquiry-level"** — proxy-vs-structural: real structural distinction (per-discipline files vary by discipline; inquiry-level files don't). PASS.
- **"Validation layer"** — coined-term + user-language alignment: the candidate resolution path uses "file-validation layer" verbatim. PASS.
- **"Validation-without-enforcement"** — structural-reference + user-language alignment: the Q6 source uses this verbatim. PASS.
- **"Minimum-shape contract"** — coined-term: this inquiry coins the term; alternatives could be "required-shape" or "loose contract." Minimum-shape is the clearest because it explicitly contrasts with maximum-shape (full discipline spec). PASS.

All load-bearing concepts pass.

*Refinement note — Specific-vs-pattern recognition cue (applies at this Phase 3):*

The inquiry's anchors are built from a specific population (5 active worker disciplines + 2 inquiry-level files + Q5 protocol foundation + audit + adaptive-guidance). The wider pattern: any cross-discipline-coordination protocol would face the same design surface. The current scope is routeman-current-state-specific; generalization is research frontier. Scope honest.

## SV4 — Clarified Understanding

After ambiguity collapse:

- **Contracts live in Q5's existing protocol file** (additional sections).
- **Enforcement strength at L0 = validation-without-enforcement;** L1+ = per-discipline SKILL.md commitments.
- **/decompose's verdict-line gap = backward-compat at L0 + COULD for L1+ verdict-line addition.**
- **Contract granularity = section-level** with specific content-patterns only at explicit consumer reads.
- **Inquiry-level contracts = unified** (one for `_state.md`; one for `_branch.md`).

Remaining live design choices:

- The exact contract specifications per discipline (the SECTIONS each MUST have).
- The validation layer's exact procedural design (parser + dispatch + emitter sequence).
- The mapping of contract non-conformance types to failure tiers (INFO / ERROR).

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

- Contracts in `cognitive_harness/protocols/inquiry_filesystem_protocol.md` (additional sections from Q5).
- Enforcement strength at L0 = validation-without-enforcement; L1+ = coordinated.
- /decompose backward-compat at L0 + COULD for L1+ verdict-line addition.
- Section-level contract granularity (specific content patterns only at explicit consumer reads).
- Unified inquiry-level contracts (one `_state.md`; one `_branch.md`).
- Validation layer in routeman's SKILL.md as a section (parser + dispatch + emitter).
- Validation runs at scan time; outputs feed audit's `_audit.md` via Q5's 3-tier vocabulary.
- Backward-compat for older inquiry-folder content (no breaking changes).
- File-mediated architecture preserved (no in-context callbacks).

### Eliminated

- Contracts in worker SKILL.md as primary location at first ship.
- Coordinated upstream-spec edits at first ship.
- Fine-grained content-pattern validation as default.
- Per-runner inquiry-level contracts.
- Halt-on-most-non-conformances enforcement at L0.

### Remaining variables

- Per-discipline contract section specifications (exact section names + MUST/SHOULD).
- Validation layer's procedural detail (parser library; markdown parsing approach; how to detect section headings).
- L2+ promotion criteria (when does validation strengthen from warn to halt).

## SV5 — Constrained Understanding

The design space is narrow; the 4 main decisions are made. The remaining live choices are operational details for Decomposition + Innovation to commit per piece.

Critique dimensions:
- Contracts honor existing consumer reads (audit + adaptive-guidance).
- Validation layer composes with Q5 + 06-00.
- Backward-compat for older content.
- Phase-fit at L0; L2+ extension hooks.
- Multi-discipline coordination cost minimized at first ship.

## Phase 5 — Conceptual Stabilization

### Conceptual model

The file-shape contracts are a **set of minimum-shape specifications** for each upstream worker-produced inquiry artifact (5 per-discipline + 2 inquiry-level = 7 contracts), committed in additional sections of `cognitive_harness/protocols/inquiry_filesystem_protocol.md` (Q5's protocol artifact), enforced via a **validation layer in routeman's SKILL.md** (parser + per-discipline dispatch + 3-tier emitter inheriting Q5's failure handling), with **validation-without-enforcement at L0** (warnings + INFO surfaces; halts only on parser failures) and **L1/L2+ extension hooks** for coordinated upstream spec edits + stricter enforcement.

The contracts are **derived from existing conventions** (each discipline already commits its output structure; the audit + adaptive-guidance already read specific elements) plus **a small novel piece** (the validation layer itself + /decompose's verdict-line gap handling). ~80% documentation + ~20% novel, same as Q5's pattern.

### Saturation indicators

- **Perspective saturation:** 9 perspectives produced shifts in SV2 + SV3 + SV4. Saturation REACHED.
- **Ambiguity resolution:** 5 ambiguities resolved (4 HIGH + 1 MEDIUM-HIGH).
- **SV delta:** large — from "7 design pieces" to "constrained design with 4 fixed decisions + operational details."
- **Anchor diversity:** anchors from 5 types; diverse.

### Accommodation trigger check

No model misfit; perspectives integrated cleanly. NOT fired.

### Meta-Inspection cross-reference

Hooks checked; none fire re-stabilization.

## SV6 — Stabilized Model

The file-shape contracts design is a **protocol-extension** to Q5's `inquiry_filesystem_protocol.md` with:

- **5 per-discipline contracts** (sensemaking.md, innovation.md, critique.md, decomposition.md, surfacing.md) — section-level minimum-shape; verdict-line REQUIRED for 4 (with backward-compat) + OPTIONAL for /decompose (with backward-compat); `## User Input` section convention; per-discipline structural requirements derived from existing reference files + audit + adaptive-guidance reads.
- **2 inquiry-level contracts** (`_state.md` unified across runners; `_branch.md` unified across runners) — required fields enumerated; per-runner values fill them.
- **1 validation layer** in routeman's SKILL.md — parser + per-discipline dispatch + 3-tier emitter; runs at scan time; outputs feed audit's `_audit.md` via Q5's failure handling.
- **1 enforcement-strength commitment** at L0 — validation-without-enforcement (warnings + INFO surfaces; halts only on parser failures); L1/L2+ extension hooks for coordinated upstream spec edits + stricter enforcement.
- **Backward-compat handling** for older inquiry-folder content + /decompose's verdict-line gap.

### Difference from SV1

SV1 saw 7 design pieces of unclear depth. SV6 sees 4 fixed decisions + 4 live pieces (contract specifications + validation layer detail + L2+ promotion criteria) + the 80%-documentation/20%-novel framing inherited from Q5.

---

## Telemetry

- **Perspectives applied:** 9.
- **Anchor types:** 5 (C, KI, SP-S, FP, MN). Anchor count: 30 (9C + 7KI + 6SP-S + 5FP + 4MN — note one MN nominally cross with FP).
- **Ambiguities identified:** 5; resolved with HIGH: 4 + MEDIUM-HIGH: 1.
- **SV delta:** large.
- **Failure modes checked:** all 6 (Status Quo, Premature Stabilization, Anchor Dominance, Perspective Blindness, Clean Resolution Trap, Self-Reference Blindness). None triggered.
- **Meta-Inspection hooks:** 9 checked; none fire re-stabilization.

**Overall: PROCEED.**
