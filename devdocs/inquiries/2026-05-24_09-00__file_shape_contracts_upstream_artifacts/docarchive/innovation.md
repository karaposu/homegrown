## User Input

(See `_branch.md` Source Input for the full verbatim user input.)

# Innovation — File-Shape Contracts

Per the 7 mechanisms; production-task mode (piece-list seed); per-piece Inversions.

## Phase 1 — Seed

### Methodology-Mode Consideration

- **Inherited mode:** Standard default (4G+3F balanced).
- **Alternative:** Contrarian-rethink — re-litigate Decomposition's piece partition? Already validated; alternative rejected.
- **Decision:** Standard mode.

## Phase 2 — Generate (per piece)

### P1 — Per-discipline contracts (5 sub-pieces)

Apply mechanisms compactly per discipline since the pattern repeats. The core insight from Sensemaking: contracts are derived from discipline reference files + audit reads + adaptive-guidance reads.

#### Sub-piece P1a — sensemaking.md contract

- **Combination + Documentation:** combine the discipline reference's existing 5-phase output structure + audit reads (Calibration-Drift doesn't read sensemaking directly; adaptive-guidance Stage 1 reads Constraints + Key-Insights) + verdict-line + `## User Input` convention.

**Contract for `sensemaking.md`:**

```
REQUIRED sections (MUST):
- "## User Input" (recording user's input verbatim, near top per discipline-spec convention)
- A section heading containing "SV1" (Baseline Understanding) OR "Sense Version 1"
- A section heading containing "SV6" (Stabilized Model) OR "Final Sense Version" OR "Sense Version 6"
- A section heading "## Phase 1" OR "### Phase 1" (Cognitive Anchor Extraction) — anchor for Constraints + Key-Insights structures
- A section heading "## Telemetry" near end
- A verdict-line `**Overall: PROCEED**` / `**Overall: FLAG**` / `**Overall: RE-RUN**` within Telemetry section

SHOULD sections (recommended, not validated as MUST):
- Phase 1 through Phase 5 headings
- SV2 through SV5 between Phase headings
- Saturation indicators / refinement notes

Cross-references:
- adaptive-guidance Stage 1 (24-01) reads Phase 1 Constraints + Key-Insights
- audit (06-00) Calibration-Drift does NOT read sensemaking directly
```

#### Sub-piece P1b — innovation.md contract

```
REQUIRED sections (MUST):
- "## User Input" (top)
- A section heading containing "Mechanism Coverage Telemetry" near end
- A verdict-line `**Overall: PROCEED**` / `FLAG` / `RE-RUN` within Mechanism Coverage Telemetry

SHOULD sections:
- Phase 1 (Seed) / Phase 2 (Generate) / Phase 3 (Test) headings
- Per-mechanism subsections (Combination, Inversion, etc.)
- 5-test cycle outputs per candidate

Cross-references:
- adaptive-guidance (24-01) does NOT read innovation directly
- audit (06-00) does NOT read innovation directly
```

#### Sub-piece P1c — critique.md contract

```
REQUIRED sections (MUST):
- "## User Input" (top)
- A section heading containing "Phase 3" (Verdict + Constructive Output) OR equivalent
- Per-candidate verdict markers — content patterns like "SURVIVE" / "REFINE" / "KILL" per candidate (consumer reads from 24-01's Stage 1)
- A section heading containing "Convergence Telemetry" near end
- A verdict-line `**Overall: PROCEED**` / `FLAG` / `RE-RUN` within Convergence Telemetry

SHOULD sections:
- Phase 0 (Dimension Construction) / Phase 1 (Landscape) / Phase 2 (Adversarial) / Phase 4 (Coverage)
- Phase 3.5 (Assembly Check)

Cross-references:
- adaptive-guidance Stage 1 (24-01) reads SURVIVE/REFINE/KILL verdicts (the per-candidate markers MUST be present)
- audit (06-00) does NOT read critique directly
```

#### Sub-piece P1d — decomposition.md contract (with verdict-line backward-compat per P4)

```
REQUIRED sections (MUST):
- "## User Input" (top)
- A section heading "## Final Deliverable" OR "Question Tree" (the 7-step output)
- A section heading containing "Self-Evaluate" OR "Self-Evaluation"

SHOULD sections:
- 7-step output: Coupling Map, Question Tree, Interface Map, Dependency Order, Self-Evaluation
- Telemetry section

VERDICT-LINE: OPTIONAL with backward-compat (per Sensemaking Ambiguity 3 resolution).
- If present: `**Overall: PROCEED**` / `FLAG` / `RE-RUN`
- If absent: treat as PROCEED with NOTE per RESUME §2 backward-compat
- L1+ COULD: add verdict line to /decompose's spec for uniformity

Cross-references:
- No direct consumer reads from /decompose output currently
- audit + adaptive-guidance do NOT read decomposition.md
```

#### Sub-piece P1e — surfacing.md contract

```
REQUIRED sections (MUST):
- "## User Input" (top)
- A section heading "## Traversal Trace" or "## State Summary"
- A section heading "## Telemetry" near end
- A verdict-line `**Overall: PROCEED**` / `FLAG` / `RE-RUN` within Telemetry

SHOULD sections:
- Mode + Entry Point + Reception
- Traversal Trace + State Summary + Telemetry
- Frontier flags

Cross-references:
- No direct consumer reads from /surfacing output currently
- audit + adaptive-guidance do NOT read surfacing.md directly
```

#### Piece-Level Inversion compliance (P1)

- **Property check:** P1 is Property (v) intervention-shape — commits ADD-CONTENT (new contracts).
- **Inversion-candidate:** REORGANIZE-WITHOUT-ADDING — document existing conventions in the protocol but don't commit them as contracts (no validation; pure reference). Inverted shape. Under this, the contracts wouldn't have enforcement; they'd be documentation-only.
- **Both candidates testable** (P1's committed contracts vs the REORGANIZE alternative).
- **Compliance: SATISFIED.**

### P2 — Inquiry-level contracts (E6, E7)

**Contract for `_state.md`:**

```
REQUIRED fields (MUST be present in markdown body or section headers):
- "## Flow-type" with value (classic | extended | extended-surfacing | other-future)
- "## Pipeline" with value (S → I → C | E → S → D → I → C | Su → S → D → I → C | other)
- "## Progress" with at least one progress checkbox
- "## Iteration" with integer
- "## Status" with value (ACTIVE | COMPLETE | possible future: BLOCKED | PAUSED)
- "## Next Discipline" with value (discipline name or "—")

SHOULD fields:
- "## Relationships" (optional; per inquiry's relationships)
- "## History" (optional; append-only log)

Cross-references:
- audit (06-00) reads Status field for inquiry-level completion
- routeman reads Flow-type to determine pipeline expectations
```

**Contract for `_branch.md`:**

```
REQUIRED sections (MUST):
- "## Question" with content
- "## Goal" with content

SHOULD sections:
- "## Source Input" (recommended; preserves verbatim user input for transcription audit)
- "## Scope Check" (recommended; per the runners' templates)
- "## Layer Commitment" (REQUIRED when the question targets a discipline / protocol / framework artifact for from-scratch redefinition per spec_governance Layer Commitment rule)
- "## Synthesis Trigger" (REQUIRED when the inquiry consolidates ≥2 prior outputs per spec_governance Synthesis Trigger rule)

Cross-references:
- routeman reads Question + Goal for inquiry-context
- audit reads neither directly
- spec_governance.md rules determine when Layer Commitment + Synthesis Trigger become REQUIRED
```

#### Piece-Level Inversion compliance (P2)

- **Property check:** P2 is Property (v) intervention-shape (ADD-CONTENT for inquiry-level contracts).
- **Inversion-candidate:** unified-across-runners vs per-runner contracts (the Sensemaking Ambiguity 5 alternative). Already adjudicated — unified wins. Compliance: SATISFIED.

### P4 — Enforcement strength + /decompose handling (E10, E11)

#### Mechanisms applied (compact)

- **Combination:** Q5's 3-tier failure handling + Sensemaking's "validation-without-enforcement at L0" resolution → L0 commitment is validation runs + reports + halts only on parser failures.
- **Inversion:** "validation must halt on non-conformance" → "validation can warn-only at L0." Sensemaking's resolution already inverted; reaffirmed.
- **Absence Recognition:** what's missing — a documented promotion criterion for L2+ (when does warn promote to halt?). Add: "promote to halt when 5+ consecutive routeman invocations have surfaced non-conformance warnings AND the project has reached L2+ on autonomy register."

#### Candidate options

- **A4-Cand-1 — Validation-without-enforcement at L0; per-discipline edits as L1+ COULDs; promotion criterion documented for L2+.** Standard.
- **A4-Cand-2 — Coordinated upstream-spec edits at first ship.** Too high coordination cost for L0; rejected.
- **A4-Cand-3 — Halt-on-all-non-conformance at L0.** Too strict; breaks backward-compat; rejected.

**A4-Cand-1 survives** with full coverage (L0 + L1 + L2+ progression).

For /decompose:
- **A4-Cand-1-D1 — Backward-compat at L0 + L1+ COULD to add verdict line.** Standard.
- **A4-Cand-1-D2 — Add verdict line at L0 (require /decompose spec edit).** Conflicts with FP3 phase-fit.
- **A4-Cand-1-D3 — Keep /decompose without verdict line indefinitely.** Inconsistency; loses uniformity benefit.

**A4-Cand-1-D1 survives.**

#### Piece-Level Inversion compliance (P4)

- **Property check:** Property (i) relationship-label commits enforcement strength structure.
- **Inversion-candidate:** halt-on-all-non-conformance (A4-Cand-3); tested in critique earlier; rejected.
- **Compliance: SATISFIED.**

### P3 — Validation layer (E8, E9)

#### Mechanisms applied

- **Combination:** Q5's per-mode dispatch pattern (from 24-01) + parser primitives + 3-tier emitter from 24-40 → unified parser + dispatch + emitter design.
- **Lens Shifting:** under "code-style" lens — the validation is a function `validate(file, type) → verdict`. Under "spec-style" lens — the validation is a per-discipline procedural description in the protocol.
- **Inversion:** "validation lives in routeman SKILL.md" → "validation lives in a separate `cognitive_harness/protocols/file_validation.md` protocol." Separate-file option. **The Inverted candidate.**
- **Absence Recognition:** what's missing — a "validator emits validation report" specification. Bidirectional: present — the audit's per-mode dispatch is already a validation-report-emitter pattern.
- **Domain Transfer:** schema validation libraries (JSON Schema; OpenAPI). Pattern transfers to markdown-section validation.
- **Extrapolation:** as disciplines accumulate, the dispatch table grows; per-discipline contract additions are local extensions.

#### Candidate options

- **A3-Cand-1 — Validation layer section in routeman SKILL.md + dispatch references protocol's contract sections.** Co-located with routeman's other behaviors; minimum new artifacts.
- **A3-Cand-2 — Validation layer as separate `cognitive_harness/protocols/file_validation.md` protocol.** Separate concerns; more artifacts; pattern follows existing protocol convention.
- **A3-Cand-3 — Validation layer embedded in each consumer (routeman + audit each does own validation).** Code duplication.

A3-Cand-1 wins on minimum-artifact-set + co-location with routeman's behavior. A3-Cand-2 was the Inverted candidate; tested + rejected (validation layer is specifically about routeman's scan-time behavior; not a cross-cutting concern that warrants its own protocol artifact; the contracts themselves live in Q5's protocol file, but the consumer-side validation is routeman-side).

#### Piece-Level Inversion compliance (P3)

- **Property check:** Property (v) intervention-shape (ADD-CONTENT vs separate-file).
- **Inversion-candidate:** A3-Cand-2 separate protocol file. Tested.
- **Compliance: SATISFIED.**

### P5 — Backward-compat + protocol file structure (E12, E14, E15)

#### Mechanisms applied

- **Combination:** Q5's protocol file structure + the contract sections + the validation layer cross-references → coherent expanded artifact.
- **Lens — "additive":** the new sections are added to Q5's existing structure; existing readers don't need to re-learn.
- **Absence Recognition:** what's missing — explicit cross-references between the new contract sections and the existing Q5 sections (e.g., the per-discipline contracts reference Q5's filename patterns + verdict-line convention).

#### Candidate options

- **A5-Cand-1 — Append contract sections to Q5's protocol file after existing sections; validation layer in routeman SKILL.md.** Standard; minimum disruption.
- **A5-Cand-2 — Interleave contract sections with Q5's existing sections by topic.** Heavier restructuring of Q5's existing file.

A5-Cand-1 wins (preserves Q5's structure; appends new sections cleanly).

For backward-compat:
- **A5-Cand-1-B1 — Validation layer treats absent/unconvention older content as PROCEED with NOTE (Q5 backward-compat extension).** Standard; no breaking changes.
- **A5-Cand-1-B2 — Migration mode where older content is upgraded via runner pass.** Over-engineering at L0.

A5-Cand-1-B1 wins.

#### Piece-Level Inversion compliance (P5)

- **Property check:** Property (i) relationship-label (commits artifact organization).
- **Inversion-candidate:** A5-Cand-2 interleaving; tested.
- **Compliance: SATISFIED.**

### P6 — L1/L2+ extension hooks (E13)

Documented hooks per piece:
- **L1 hook for P1:** per-discipline SKILL.md edits to commit contracts on discipline side (5 small edits).
- **L1 hook for P4:** decompose verdict-line addition (small edit).
- **L2+ hook for P4:** enforcement strength promotion from warn to halt (criterion: 5+ consecutive non-conformance warnings + L2+ autonomy).
- **L2+ hook for P3:** validation layer's per-discipline parser specialization (today: section heading regex; L2+: more sophisticated parsing).
- **L2+ hook for P2:** per-runner inquiry-level contract refinement if value-variation drift causes issues (not currently anticipated).

#### Piece-Level Inversion compliance (P6)

- **Property check:** Property (i) relationship-label (commits extension structure).
- **Inversion-candidate:** no-extension-hooks (lock the design at L0 forever) — tested; rejected as anti-progression.
- **Compliance: SATISFIED.**

## Phase 3 — Test

### P1 per-discipline contracts

| Sub-piece | Disposition | Reason |
|---|---|---|
| **P1a sensemaking.md** | **ACTIONABLE** | Section requirements derived from discipline reference + adaptive-guidance Stage 1 reads; backward-compat preserved |
| **P1b innovation.md** | **ACTIONABLE** | Same pattern; no current consumer reads beyond verdict-line |
| **P1c critique.md** | **ACTIONABLE** | Required per-candidate SURVIVE/REFINE/KILL markers per adaptive-guidance Stage 1 reads |
| **P1d decomposition.md** | **ACTIONABLE-WITH-BACKWARD-COMPAT** | Verdict-line OPTIONAL with backward-compat per P4 |
| **P1e surfacing.md** | **ACTIONABLE** | Section requirements from /surfacing reference; verdict-line per Telemetry |

All 5 ACTIONABLE.

### P2 inquiry-level contracts

| Piece | Disposition | Reason |
|---|---|---|
| **`_state.md`** | **ACTIONABLE** | Required fields cover audit's Status read + routeman's Flow-type/Pipeline read |
| **`_branch.md`** | **ACTIONABLE** | Required Question + Goal; SHOULD fields per runners' templates; spec_governance Layer Commitment + Synthesis Trigger cross-references preserved |

### P4 enforcement strength + /decompose

| Piece | Disposition | Reason |
|---|---|---|
| **A4-Cand-1** (validation-without-enforcement at L0 + L1+ progression) | **ACTIONABLE** | Phase-fit; documented progression |
| **A4-Cand-1-D1** (/decompose backward-compat at L0 + L1+ COULD) | **ACTIONABLE** | Honors FP3 phase-fit |

### P3 validation layer

| Candidate | Disposition | Reason |
|---|---|---|
| **A3-Cand-1** (in routeman SKILL.md) | **ACTIONABLE** | Co-located with routeman behavior; minimum new artifacts |
| A3-Cand-2 separate protocol file | KILL with seed (revival if validation grows beyond routeman scope) | Over-separation at L0 |
| A3-Cand-3 embed in each consumer | KILL | Code duplication |

### P5 backward-compat + structure

| Candidate | Disposition |
|---|---|
| **A5-Cand-1 (append + B1 backward-compat)** | **ACTIONABLE** |
| A5-Cand-2 interleave | KILL |
| A5-Cand-1-B2 migration mode | KILL (over-engineering) |

### P6 L1/L2+ hooks

All 5 documented hooks: ACTIONABLE.

## Phase 3.5 — Assembly Check

The assembly: 5 per-discipline contracts (P1a-e) + 2 inquiry-level contracts (P2) + validation layer in routeman SKILL.md (P3) + validation-without-enforcement + /decompose backward-compat (P4) + protocol-file-append + backward-compat handling (P5) + 5 extension hooks (P6) = coherent protocol-extension design.

### Emergent properties

- **No new infrastructure**: validation uses existing markdown parsing primitives; contracts live in Q5's protocol file; no new daemons / schedulers.
- **Backward-compatible**: older inquiry-folder content scanned with relaxed rules; no breaking changes.
- **Forward-compatible**: L1/L2+ extension hooks enable progressive enforcement strengthening + per-discipline-side commitments.
- **Consumer-aligned**: contracts derived from audit + adaptive-guidance existing reads; no surprise non-conformance from consumer perspective.

### Axis coverage check

Axes covered:
- Per-discipline axis: 5 contracts.
- Inquiry-level axis: 2 contracts.
- Validation infrastructure axis: 1 layer design.
- Phase progression axis: L0/L1/L2+ hooks.
- Architecture axis: composes with Q5; no architecture violation.

All axes covered.

### Mechanism Independence

Survivors emerged from Combination + Documentation (re-derivation from existing artifacts) + Inversion (alternatives tested) + Constraint Manipulation + Domain Transfer (schema validation pattern). Multi-mechanism convergence; no spurious-from-shared-input.

## Phase 4 — Disposition

| Piece | Survivor | Disposition |
|---|---|---|
| P1a sensemaking.md | required sections + verdict line + User Input | ACTIONABLE |
| P1b innovation.md | required sections + verdict line + User Input | ACTIONABLE |
| P1c critique.md | required sections + per-candidate markers + verdict line | ACTIONABLE |
| P1d decomposition.md | required sections + verdict OPTIONAL with backward-compat | ACTIONABLE-WITH-BACKWARD-COMPAT |
| P1e surfacing.md | required sections + verdict line + User Input | ACTIONABLE |
| P2 `_state.md` | required fields | ACTIONABLE |
| P2 `_branch.md` | required Question + Goal + SHOULD fields | ACTIONABLE |
| P3 validation layer | A3-Cand-1 in routeman SKILL.md | ACTIONABLE |
| P4 enforcement | A4-Cand-1 validation-without-enforcement at L0 | ACTIONABLE |
| P4 /decompose | A4-Cand-1-D1 backward-compat + L1+ COULD | ACTIONABLE |
| P5 structure | A5-Cand-1 append + B1 backward-compat | ACTIONABLE |
| P6 hooks | 5 documented extension hooks | ACTIONABLE |

### Research frontiers

- A3-Cand-2 (validation as separate protocol) preserved as KILL-with-seed (revival if validation grows beyond routeman scope).
- A4-Cand-2 (coordinated upstream spec edits at first ship) preserved as L1+ progression path.

## Production-task telemetry

### Per-piece mechanism log

| Piece | Mechanisms | Axis |
|---|---|---|
| P1 | Combination + Documentation + Lens + Absence + Domain Transfer (schema validation) + Extrapolation | content + intervention-shape (P1 REORGANIZE-without-adding Inverted alternative tested) |
| P2 | Combination + Lens | content |
| P3 | Combination + Lens + Inversion + Absence + Domain Transfer + Extrapolation | content + intervention-shape (A3-Cand-2 separate-file Inverted) |
| P4 | Combination + Inversion + Absence | content (multiple enforcement levels) |
| P5 | Combination + Lens + Absence | content + intervention-shape (A5-Cand-2 interleave Inverted) |
| P6 | Combination + Extrapolation | content |

### Piece-Level Inversion compliance

All 6 pieces' compliances satisfied (per-piece Inversion explicit).

## Mechanism Coverage Telemetry

- Generators: 4/4 (Combination, Absence, Domain Transfer, Extrapolation).
- Framers: 3/3 (Lens, Constraint, Inversion).
- Convergence: YES — multiple mechanisms converge per piece.
- Survivors tested: 12 (5 P1 sub-pieces + 2 P2 + P3 + 2 P4 sub-pieces + P5 + P6 hooks).
- Failure modes: none triggered.
- Inherited Frame Audit: did not fire (no central assumption challenged — the design's framing is the natural extension of Q5; no Inverted-frame candidate emerged from the audit).

**Overall: PROCEED** (4G+3F; convergence; 12 survivors; no failure modes; all piece-level Inversions satisfied).
