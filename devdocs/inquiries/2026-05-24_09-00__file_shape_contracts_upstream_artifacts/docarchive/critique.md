## User Input

(See `_branch.md` Source Input for the full verbatim user input.)

# Critique — File-Shape Contracts

Adversarial. Phases 0 → 4.

## Phase 0 — Dimension Construction

### Default dimensions

| Dimension | Asks | Weight |
|---|---|---|
| **D1 Correctness** | Do contracts correctly specify what consumers (audit + adaptive-guidance) need? | **CRITICAL** |
| **D2 Coherence** | Does design compose with Q5 + architecture inheritances + discipline-spec conventions? | **CRITICAL** |
| **D3 Feasibility at L0** | Ship at L0 without per-discipline-spec edits? | HIGH |
| **D4 Completeness** | Does design cover all 5 sub-aspects + the 5 active disciplines + the 2 inquiry-level files? | HIGH |
| **D5 Robustness** | Survive edge cases (older content; non-conforming disciplines; parser failures; discipline-spec drift)? | HIGH |
| **D6 Elegance** | Simplest sufficient design? Over-specification a defect? | MEDIUM |

### Project-specific risk dimensions

| Dimension | Asks | Weight |
|---|---|---|
| **D7 Consumer-reliance preservation** | Do contracts maintain the audit + adaptive-guidance + routeman reads from 06-00 + 01-00 + Q5? | **CRITICAL** |
| **D8 Backward-compat with older content** | Pre-Q5 content continues to work? | HIGH |
| **D9 Multi-discipline coordination cost minimized at L0** | First ship requires no upstream-spec edits? | HIGH |
| **D10 /decompose handling structural soundness** | Verdict-line backward-compat doesn't create silent fragility? | HIGH |
| **D11 Discipline-spec evolution accommodated** | Contracts are minimum-shape; non-breaking additions don't break? | MEDIUM |
| **D12 Document-over-design ratio** | The 80%-documentation/20%-novel framing is honest? | MEDIUM |

### Burden of proof

Stakes: MEDIUM-HIGH (the contracts affect every routeman invocation + every audit invocation + every adaptive-guidance Stage 1 invocation). Burden: assembly demonstrates viability on D1, D2, D7 (CRITICAL); REFINE if non-critical fail; KILL only on CRITICAL fail.

## Phase 1 — Landscape Construction

Viable region: contracts honor consumer reads; backward-compat preserved; no upstream-spec edits at L0; validation layer composes with Q5 + 06-00.

Dead region: contracts that break audit reads; contracts that force upstream-spec edits; contracts that break backward-compat with older content.

Boundary region: contracts that are slightly over-or-under specified; validation that's slightly too strict/loose.

## Phase 2 — Adversarial Evaluation

### Candidate 1: A-Cand-Assembly (P1a-e + P2 + P3 + P4 + P5 + P6 survivors)

#### Prosecution

- **Killer objection 1 (D6 / D12):** "The contracts are 80% documentation but the contracts THEMSELVES exist as net-new artifact content. Is this NET ADDITION worth the cost when the discipline specs already describe what each output contains?"
  - **Worst outcome:** the contracts get read once and forgotten; consumers continue to read the discipline specs directly; the contracts become stale documentation.
- **Killer objection 2 (D5 / D11):** "Section-level granularity assumes section headings match specific text patterns. If a discipline-spec editor changes section heading text (e.g., 'SV1' → 'First Sense Version'), the contract breaks silently."
  - **Worst outcome:** contract drift; validation reports false-non-conformance.
- **Killer objection 3 (D10):** "/decompose's verdict-line backward-compat at L0 means decomposition.md outputs ALWAYS pass write-completeness check regardless of whether the file is actually complete. The backward-compat IS the fragility."
  - **Worst outcome:** /decompose silently fails self-assessment; no signal to user.
- **Killer objection 4 (D3 / D9):** "Validation-without-enforcement at L0 means non-conformant files generate warnings but the pipeline continues. The audit + adaptive-guidance still read the non-conformant content and produce degraded outputs. Validation-without-enforcement is half-measure."
  - **Worst outcome:** user sees warnings; ignores them; downstream outputs degraded; design provides false sense of safety.
- **Killer objection 5 (D7):** "The audit's per-mode dispatch (06-00) reads specific structural elements. The contracts here document section-level requirements. Are the contracts STRONG ENOUGH to support the audit's content-pattern reads (e.g., verdict-line regex)?"
  - **Worst outcome:** contracts pass; audit's regex match fails; mismatch causes audit to misread.

#### Defense

- **Defense vs objection 1 (net-addition value):** the contracts serve THREE purposes the discipline specs alone don't: (a) canonical single-location reference for ALL consumer-reads (consumers don't have to navigate 5+ discipline specs to know what they can rely on); (b) explicit minimum-shape (discipline specs document MAXIMUM shape; contracts document the consumer-load-bearing minimum); (c) validation-layer substrate (without contracts, the validation layer would have no canonical rules to dispatch against). The net-addition is justified.
- **Defense vs objection 2 (section-heading drift):** the contracts specify "section heading containing 'SV1' OR 'Sense Version 1'" — multiple acceptable patterns. Discipline-spec editors who change section heading text would need to either match an acceptable pattern OR coordinate with this protocol. The protocol's existence as a single canonical location makes this coordination point visible. The risk is reduced (not eliminated) by the multi-pattern specification.
- **Defense vs objection 3 (/decompose backward-compat = fragility):** the backward-compat treats absent verdict line as PROCEED with NOTE — the NOTE surfaces in routeman + audit output. Users DO see signal that /decompose's completeness is being inferred rather than confirmed. The backward-compat is honest about the inference; the L1+ COULD action commits the actual fix (verdict line addition). The path from L0 (inferred) to L1 (confirmed) is documented.
- **Defense vs objection 4 (validation-without-enforcement is half-measure):** the alternative (halt-on-non-conformance) BREAKS BACKWARD-COMPAT with older content (D8 CRITICAL would FAIL). Validation-without-enforcement is the phase-fit option that ships the validation INFRASTRUCTURE + the contracts at L0; enforcement strengthening (L2+ promotion criterion) is the path forward. The "half-measure" framing misreads it as a permanent commitment; it's a staged commitment.
- **Defense vs objection 5 (contracts strong enough for content-pattern reads):** the contracts ARE explicit about content-pattern requirements where consumers need them. Per P1c (critique.md contract): "Per-candidate verdict markers — content patterns like 'SURVIVE' / 'REFINE' / 'KILL' per candidate (consumer reads from 24-01's Stage 1)." Verdict line is content-pattern requirement (per P1a-e). The contracts blend section-level (default) with content-pattern (where consumers explicitly read) granularity per Sensemaking Ambiguity 4 resolution. Strong enough.

#### Collision

- **Objection 1 vs defense:** defense holds. Net-addition serves 3 purposes the discipline specs don't.
- **Objection 2 vs defense:** defense holds with caveat — multi-pattern matching reduces but doesn't eliminate drift risk. **Add refinement R1: explicit coordination protocol — when a discipline spec changes section heading text, the protocol's contract section MUST be updated in the same commit.**
- **Objection 3 vs defense:** defense holds — NOTE surfaces signal + L1+ COULD path documented.
- **Objection 4 vs defense:** defense holds — validation-without-enforcement is phase-fit + staged, not permanent.
- **Objection 5 vs defense:** defense holds — contracts blend granularities correctly.

#### Position on landscape

Assembly passes CRITICAL (D1, D2, D7). HIGH: D3 ✓, D4 ✓, D5 with R1 refinement, D8 ✓, D9 ✓, D10 ✓, D11 ✓. MEDIUM: D6 ✓, D12 ✓.

**Verdict: REFINE → SURVIVE after R1.**

Refinement:
- **R1: Add a coordination protocol — when a discipline spec changes section heading text, the protocol's contract section MUST be updated in the same commit. Document this as a meta-process commitment in the protocol file's Cross-References section.**

After R1, assembly is **SURVIVE**.

### Candidate 2: A4-Cand-2 (coordinated upstream spec edits at first ship — Inverted enforcement strength)

#### Prosecution

- "Strong contracts from day one are better than staged."

#### Defense

- "Two-to-three weeks of multi-discipline coordination at first ship for a project at L0 is not phase-fit. The L1+ extension hook is the natural progression."

#### Collision

- Defense holds. L0 phase-fit demands validation-without-enforcement.

#### Position

**KILL with seed.** Seed: A4-Cand-2 is the L1+ extension path (per-discipline SKILL.md edits to commit contracts on the discipline side).

### Candidate 3: A3-Cand-2 (separate `cognitive_harness/protocols/file_validation.md` protocol — Inverted validation location)

#### Prosecution

- "Separating the validation layer from routeman's SKILL.md cleanly separates concerns."

#### Defense

- "The validation layer is specifically routeman's scan-time behavior; it's not a cross-cutting concern that warrants its own protocol artifact. The contracts (cross-cutting) live in the protocol file; the validation behavior (routeman-specific) lives in routeman's SKILL.md."

#### Collision

- Defense holds. Validation behavior is routeman-internal; contracts are cross-cutting.

#### Position

**KILL with seed.** Seed: revival if the validation layer grows beyond routeman scope (e.g., if other consumers also need to validate the same contracts; not currently anticipated).

## Phase 3 — Verdict + Constructive Output

| Candidate | Verdict | Constructive output |
|---|---|---|
| **Assembly (refined with R1)** | **SURVIVE** | Ship the design with R1 coordination protocol |
| A4-Cand-2 coordinated upstream edits at first ship | KILL with seed | Seed: L1+ extension path |
| A3-Cand-2 separate validation protocol | KILL with seed | Seed: revival if validation grows beyond routeman scope |
| A5-Cand-2 interleave protocol structure | KILL | Heavier restructuring; unnecessary |
| A4-Cand-3 halt-on-all-non-conformance at L0 | KILL | Breaks backward-compat |
| A3-Cand-3 embed validation in each consumer | KILL | Code duplication |

### Refinements

- **R1:** add a coordination protocol — when a discipline spec changes section heading text, the protocol's contract section MUST be updated in the same commit. Document as a meta-process commitment in the protocol file's Cross-References section.

### Refined survivor (final design)

The file-shape contracts protocol-extension (additions to Q5's `cognitive_harness/protocols/inquiry_filesystem_protocol.md` + routeman SKILL.md validation-layer section):

- **5 per-discipline contracts** (sensemaking.md, innovation.md, critique.md, decomposition.md, surfacing.md) — section-level minimum-shape with content-pattern requirements where consumers explicitly read.
- **2 inquiry-level contracts** (`_state.md`, `_branch.md`) — required fields enumerated; unified across runners.
- **Validation layer** in routeman SKILL.md — parser + per-discipline dispatch + 3-tier emitter feeding audit's `_audit.md`.
- **Enforcement strength at L0** — validation-without-enforcement (non-conformance → INFO/warn; halt only on parser failures).
- **/decompose verdict-line at L0** — backward-compat (absent → PROCEED with NOTE); L1+ COULD adds verdict line.
- **Backward-compat for older content** — pre-Q5 content scanned with relaxed rules; no breaking changes.
- **Coordination meta-process (R1)** — discipline-spec section-heading changes require protocol contract update in the same commit; documented in Cross-References section.
- **L1/L2+ extension hooks** documented (per-discipline SKILL.md edits; enforcement promotion criterion; validation parser specialization; per-runner inquiry-level refinement).

## Phase 3.5 — Assembly Check (refined)

| Dimension | Score | Notes |
|---|---|---|
| D1 Correctness | HIGH | Contracts specify what consumers read |
| D2 Coherence | HIGH | Composes with Q5 + 06-00 + 01-00 + architecture |
| D3 Feasibility at L0 | HIGH | No upstream-spec edits required |
| D4 Completeness | HIGH | All 5 sub-aspects + 5 disciplines + 2 inquiry-level covered |
| D5 Robustness | HIGH (after R1) | Drift coordination explicit; backward-compat + 3-tier failure |
| D6 Elegance | HIGH | 80%-documentation/20%-novel; minimum-shape; no over-specification |
| D7 Consumer-reliance preservation | HIGH | Audit + adaptive-guidance reads preserved in contracts |
| D8 Backward-compat | HIGH | Older content + /decompose handled |
| D9 Multi-discipline coordination cost | HIGH | Zero upstream-spec edits at L0 |
| D10 /decompose handling | HIGH | NOTE surfaces signal; L1+ COULD path documented |
| D11 Discipline-spec evolution accommodated | HIGH (after R1) | Multi-pattern matching + coordination protocol |
| D12 Document-over-design ratio | HIGH | Honest framing |

**All dimensions HIGH after R1.**

### Emergent properties

- **Composes cleanly with Q5:** contracts live in same protocol file; validation layer reuses Q5's 3-tier failure handling.
- **Audit + adaptive-guidance compatibility preserved:** contracts derived from + cite their existing reads.
- **Phase-fit at L0:** zero upstream-spec edits required; L1+ extension hooks documented.
- **Backward-compat:** older content + /decompose handled with relaxed rules + NOTE signaling.
- **Drift-aware (after R1):** coordination meta-process protects against discipline-spec drift.

## Phase 4 — Coverage + Convergence

### Accumulator

- Evaluation log: assembly + 5 alternative candidates against 12 dimensions.
- Kill record: A4-Cand-2, A3-Cand-2 (both KILL with seed); A5-Cand-2, A4-Cand-3, A3-Cand-3 (KILL).
- Refinement: R1 (drift coordination meta-process).
- Coverage map: 12/12 dimensions HIGH after R1.
- Convergence: TERMINATE.

### Coverage assessment

All pieces' option spaces fully explored. ROUTEMAN-OUTPUT scope-out preserved (Q5 inheritance). All sub-aspects covered.

### Convergence criteria

- At least one SURVIVE on CRITICAL dimensions: YES.
- No unexplored region: YES.

**TERMINATE.**

## Convergence Telemetry

- Dimensions: 12 (6 default + 6 project-specific).
- Adversarial: STRONG (5 killer objections; 5 defense responses; 1 refinement committed).
- Landscape stability: STABLE.
- Clean SURVIVE: YES.
- Failure modes: none triggered.

**Overall: PROCEED.**
