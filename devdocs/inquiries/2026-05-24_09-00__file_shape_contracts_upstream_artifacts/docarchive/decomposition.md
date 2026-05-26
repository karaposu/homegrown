## User Input

(See `_branch.md` Source Input for the full verbatim user input.)

# Decomposition — File-Shape Contracts

Per the 7-step Structural Decomposition process.

## Step 1 — Perceive Coupling Topology

Whole: a protocol-extension (additional sections in Q5's `inquiry_filesystem_protocol.md`) + a validation layer in routeman SKILL.md, committing 5 per-discipline + 2 inquiry-level contracts at section-level minimum-shape granularity, with validation-without-enforcement at L0 + backward-compat for older content + L1/L2+ extension hooks.

### Element inventory

- E1 — **sensemaking.md contract spec** (section requirements + verdict-line + `## User Input`).
- E2 — **innovation.md contract spec**.
- E3 — **critique.md contract spec**.
- E4 — **decomposition.md contract spec** (with /decompose verdict-line backward-compat).
- E5 — **surfacing.md contract spec**.
- E6 — **`_state.md` contract spec** (unified inquiry-level).
- E7 — **`_branch.md` contract spec** (unified inquiry-level).
- E8 — **Validation layer procedural design** (parser + per-discipline dispatch + 3-tier emitter).
- E9 — **Validation layer location commitment** (routeman SKILL.md as a new section; protocol file cross-references).
- E10 — **Enforcement-strength commitment for L0** (validation-without-enforcement).
- E11 — **/decompose verdict-line gap handling** (backward-compat at L0 + L1+ COULD to add verdict line for uniformity).
- E12 — **Backward-compat handling** for older inquiry-folder content (no breaking changes; older content without atomic-write or verdict-lines is scanned with relaxed rules).
- E13 — **L1/L2+ extension hooks** (coordinated per-discipline SKILL.md edits; validation strength promotion; per-runner inquiry-level contract refinement if needed).
- E14 — **Protocol file structure** (where the new sections sit relative to Q5's existing sections).
- E15 — **Cross-references** (the new contracts cross-reference 06-00 audit's per-mode dispatch + 01-00 adaptive guidance's Stage 1 reads).

### Coupling map

| Element | Coupling | Cluster |
|---|---|---|
| E1-E5 per-discipline contracts | Each is internally cohesive; couple to each other only via shared conventions (verdict line; `## User Input`); couple strongly to E15 (cross-references to audit + adaptive-guidance reads) | **CLUSTER 1: Per-discipline contracts** |
| E6-E7 inquiry-level contracts | Internally cohesive; couple to each other (both inquiry-level); couple to runners (templates) | **CLUSTER 2: Inquiry-level contracts** |
| E8-E9 validation layer | Internally cohesive; couple to E1-E7 (validates against them); couple to E10 (enforcement strength constrains layer behavior) | **CLUSTER 3: Validation infrastructure** |
| E10 enforcement strength | Couples to E8 (constrains validation behavior); couples to E11 (decompose handling depends on strength); cross-cutting | **CLUSTER 4: Phase + enforcement decisions** |
| E11 /decompose handling | Couples to E4 (decomposition.md contract) + E10 (enforcement strength) | **CLUSTER 4** |
| E12 Backward-compat | Cross-cutting; affects all contracts + validation layer | **Cross-cutting** |
| E13 L1/L2+ hooks | Cross-cutting; each piece has hooks | **Cross-cutting** |
| E14 Protocol file structure | Strongly coupled to E1-E7 (where they sit) + E9 (where the validation layer lives) | **CLUSTER 5: Artifact organization** |
| E15 Cross-references | Cross-cutting; each contract carries them | **Cross-cutting** |

### Clusters

- **Cluster 1: Per-discipline contracts** (E1-E5).
- **Cluster 2: Inquiry-level contracts** (E6, E7).
- **Cluster 3: Validation infrastructure** (E8, E9).
- **Cluster 4: Phase + enforcement decisions** (E10, E11).
- **Cluster 5: Artifact organization** (E14).
- **Cross-cutting:** E12, E13, E15.

Major boundaries: between Cluster 1 (per-discipline content) and Cluster 2 (inquiry-level content); between Cluster 1/2 (the contracts) and Cluster 3 (the validation layer that consumes them); between Cluster 4 (decisions about strength/scope) and Cluster 3 (operational design).

## Step 2 — Detect Boundaries (Top-Down)

Clean cuts:
- Cluster 1 (per-discipline contracts) vs Cluster 2 (inquiry-level contracts): different scopes; per-discipline content varies; inquiry-level shared.
- Cluster 1+2 (contracts) vs Cluster 3 (validation layer): the validation reads the contracts; designed independently.
- Cluster 3 (operational layer) vs Cluster 4 (strength + phase decisions): the layer's CODE is one design; its enforcement BEHAVIOR is another decision.
- Cluster 5 (artifact organization) vs all: which sections go where; structural concern decided after content settled.

## Step 3 — Validate Boundaries (Bottom-Up)

Atoms:
- "sensemaking.md MUST contain SV6" → Cluster 1 (E1). ✓
- "`_state.md` MUST have Status field" → Cluster 2 (E6). ✓
- "Validation parser reads markdown headings" → Cluster 3 (E8). ✓
- "Validation-without-enforcement at L0" → Cluster 4 (E10). ✓
- "decomposition.md verdict-line OPTIONAL with backward-compat" → Cluster 1 (E4) + Cluster 4 (E10/E11). ✓ (cross-cluster but consistent with the coupling map's E11 ↔ E4 + E10 coupling)
- "New protocol sections appended to Q5's protocol file" → Cluster 5 (E14). ✓

No atoms misclustered. Boundary confidence: HIGH.

## Step 4 — Question Tree

Six pieces:

### Piece P1 — Per-discipline contracts (Cluster 1; E1-E5)

**Question:** What are the section-level minimum-shape contracts for each of the 5 worker discipline output files (sensemaking.md, innovation.md, critique.md, decomposition.md, surfacing.md)? Each contract specifies REQUIRED sections + verdict-line position + optional sections + cross-references to consumer reads.

**Verification criteria:**

- [ ] One contract per discipline (5 contracts).
- [ ] Each contract specifies REQUIRED sections derived from discipline reference file.
- [ ] Each contract specifies verdict-line position (with /decompose backward-compat exception per E11).
- [ ] Each contract specifies `## User Input` convention.
- [ ] Each contract cross-references consumer reads (audit + adaptive-guidance).
- [ ] Section-level granularity (not fine-grained content patterns except where consumers require).
- [ ] Survives prosecution against "contracts are too strict" + "contracts are too loose."

**Includes:** E1, E2, E3, E4, E5.

### Piece P2 — Inquiry-level contracts (Cluster 2; E6, E7)

**Question:** What are the contracts for `_state.md` and `_branch.md`? Required fields; unified across runners with per-runner value variation.

**Verification criteria:**

- [ ] `_state.md` contract: required fields (Flow-type, Pipeline, Progress, Iteration, Status, Next Discipline) + optional (Relationships, History).
- [ ] `_branch.md` contract: required fields (Question, Goal) + optional (Source Input, Scope Check, Layer Commitment, Synthesis Trigger).
- [ ] Unified across runners; per-runner value variation.
- [ ] Audit's `_state.md` Status field reads supported.

**Includes:** E6, E7.

### Piece P3 — Validation layer procedural design (Cluster 3; E8, E9)

**Question:** What does the validation layer's procedure look like? Where does it live? How does it dispatch per-discipline?

**Verification criteria:**

- [ ] Validation layer section in routeman SKILL.md (location).
- [ ] Parser → dispatch table (per discipline) → emitter sequence.
- [ ] Parser uses existing markdown parsing primitives (no new infrastructure).
- [ ] Dispatch table reuses 01-00's per-movement-type pattern.
- [ ] Emitter feeds verdicts into audit's `_audit.md` log via Q5's 3-tier vocabulary.
- [ ] Runs at scan time within routeman invocation.
- [ ] Survives prosecution against "parser is brittle" + "validation duplicates audit reads."

**Includes:** E8, E9.

### Piece P4 — Enforcement strength commitment + /decompose handling (Cluster 4; E10, E11)

**Question:** What is the L0 enforcement strength? How does /decompose's verdict-line gap get handled at L0?

**Verification criteria:**

- [ ] L0 commits validation-without-enforcement (non-conformance → INFO/warn; halt only on parser failures).
- [ ] L1+ extension hook: per-discipline SKILL.md edits to commit contracts.
- [ ] L2+ extension hook: enforcement strength can promote from warn to halt.
- [ ] /decompose verdict-line at L0: backward-compat (absent verdict-line → PROCEED with NOTE per RESUME §2 + Q5 pattern).
- [ ] /decompose at L1+: COULD action to add verdict line for uniformity with other 4 disciplines.

**Includes:** E10, E11.

### Piece P5 — Backward-compat + protocol file structure (Cluster 5 + cross-cutting E12, E14)

**Question:** How does the design handle older inquiry-folder content that pre-dates Q5's atomic-write + this inquiry's contracts? Where do the new sections sit in Q5's protocol file?

**Verification criteria:**

- [ ] Older content (pre-Q5 atomic-write commitment) continues to work without modification — no breaking changes.
- [ ] Per-discipline contract sections sit in Q5's protocol file after the Cluster-1 documentation sections (Filename patterns + section structures); the validation-layer section sits before the Failure Modes section.
- [ ] Cross-references explicit: each contract section cross-references the corresponding discipline reference + the audit/adaptive-guidance reads.

**Includes:** E12, E14, E15.

### Piece P6 — L1/L2+ extension hooks documentation (cross-cutting E13)

**Question:** What are the documented extension hooks for L1/L2+ phase progression?

**Verification criteria:**

- [ ] L1 hook: per-discipline SKILL.md edits to commit contracts on the discipline side.
- [ ] L2+ hook: enforcement strength promotion (warn → halt).
- [ ] L2+ hook: per-runner inquiry-level contract refinement (if value-variation drift causes issues).
- [ ] Each hook has a documented trigger.

**Includes:** E13.

## Step 5 — Interfaces

| From → To | Type | Flow |
|---|---|---|
| P1 (per-discipline contracts) → P3 (validation layer) | content | Validation layer dispatches per discipline; reads contract specs |
| P2 (inquiry-level contracts) → P3 | content | Same; validation handles inquiry-level files too |
| P4 (enforcement strength) → P3 | parameter | Strength determines whether validation halts or warns on non-conformance |
| P4 (decompose handling) → P1 (specifically E4 decomposition.md contract) | content | The contract for decomposition.md inherits the verdict-line backward-compat per P4 |
| P5 (protocol file structure) → P1 + P2 + P3 | organizational | The protocol file structure determines section placement |
| P1, P2, P3 → P6 (L1/L2+ hooks) | extension | Each piece has its own hooks documented in P6 |
| P1 → consumer cross-references | content | Contracts cite audit (06-00) + adaptive-guidance (01-00) reads |

Hidden coupling check (assumptions-not-data):
- P1 assumes the discipline reference files won't change in breaking ways. **Verified:** contracts are minimum-shape; non-breaking additions to discipline outputs don't affect.
- P3 assumes Q5's 3-tier failure handling works for non-conformance failures. **Verified:** Q5's pattern is general (INFO/ERROR/ERROR); extension to contract non-conformance is natural.
- P4's L0 commitment assumes the project stays at L0 for some time. **Verified:** project is at L0 per `docs/autonomy_level.md` (initial); progression is documented but not imminent.

No critical hidden coupling.

## Step 6 — Dependency Order

```
P1 (per-discipline contracts) ──┐
P2 (inquiry-level contracts) ───┤
                                ├──→ P3 (validation layer)
P4 (enforcement strength + decompose) ──→ P3
                                ↓
                          P5 (protocol file structure)
                                ↓
                          P6 (L1/L2+ hooks)
```

### Waves

- **Wave 1 (independent):** P1, P2, P4.
- **Wave 2 (depends on Wave 1):** P3.
- **Wave 3 (aggregates):** P5.
- **Wave 4 (cross-cutting):** P6.

Innovation order: P1 → P2 → P4 → P3 → P5 → P6.

## Step 7 — Self-Evaluate

### Minimum evaluation

| Dimension | Result |
|---|---|
| Independence | PASS. Each piece's question answerable independently with explicit interfaces. |
| Completeness | PASS. All 5 sub-aspects from `_branch.md` covered (per-discipline contracts = P1; inquiry-level = P2; validation layer = P3; enforcement strength + decompose = P4; phase progression = P6; backward-compat + protocol structure = P5). |
| Reassembly | PASS. Assembling P1-P6 produces: 5 per-discipline contracts + 2 inquiry-level contracts + validation layer + enforcement commitment + protocol-file expansion + L1/L2+ hooks = the complete protocol extension. |

Determination-mechanism piece check:
- "Validation layer detects non-conformance at scan time" — runtime determination = P3's procedural design (parser + dispatch + emitter); P3 specifies. PASS.
- "Routeman knows what to validate against per discipline" — runtime determination = P3 dispatch table reads contracts from P1; P3 + P1 specify. PASS.
- "Validation layer knows enforcement strength" — runtime determination = P4 commits strength; P3 reads it as parameter. PASS.

All runtime determinations in Q-tree.

### Full evaluation

| Dimension | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS — pieces are small; P1 is 5 mini-contracts |
| Interface clarity | PASS — 7 interfaces enumerated |
| Balance | MOSTLY PASS — P1 is largest (5 sub-pieces) but each sub-piece is small |
| Confidence | PASS — top-down + bottom-up agree |

### Failure-mode check

- Premature decomposition: ruled out — Sensemaking clarified.
- Wrong boundaries: ruled out — coupling-valley cuts.
- Hidden coupling: assumptions-not-data check ran; no critical issues.
- Missing pieces: 5 sub-aspects + backward-compat + extensions all covered.
- Over-decomposition: 6 pieces (smaller than the 7+5 elements would suggest because aggregation cluster).
- Ignoring dependencies: 4-wave order produced.
- Imbalanced decomposition: P1 has 5 sub-pieces but they're each small.

No failure mode triggers.

---

## Final Deliverable

### Coupling Map

5 clusters + 3 cross-cutting:
- C1 Per-discipline contracts (E1-E5).
- C2 Inquiry-level contracts (E6, E7).
- C3 Validation infrastructure (E8, E9).
- C4 Phase + enforcement decisions (E10, E11).
- C5 Artifact organization (E14).
- Cross-cutting: E12 (backward-compat), E13 (L1/L2+ hooks), E15 (cross-references).

### Question Tree

| Piece | Question | Cluster |
|---|---|---|
| P1 | Per-discipline contracts (5 specs) | C1 |
| P2 | Inquiry-level contracts (_state, _branch) | C2 |
| P3 | Validation layer procedural design + location | C3 |
| P4 | Enforcement strength + /decompose handling | C4 |
| P5 | Backward-compat + protocol file structure + cross-references | C5 + cross-cutting |
| P6 | L1/L2+ extension hooks documentation | Cross-cutting |

### Interface Map

7 interfaces (Step 5).

### Dependency Order

4 waves: (P1, P2, P4) → P3 → P5 → P6.

### Self-Evaluation

7/7 PASS; Determination-mechanism PASS; failure-mode check clean.

---

## Telemetry

- Pieces: 6.
- Cross-cutting: 3 (E12, E13, E15).
- Dependency depth: 4 waves.
- Self-eval: 7/7 PASS.

**Overall: PROCEED.**
