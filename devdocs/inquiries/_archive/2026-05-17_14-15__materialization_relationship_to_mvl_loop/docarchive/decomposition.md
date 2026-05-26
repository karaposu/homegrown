# Decomposition — Materialization Relationship to MVL Loop

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-17_14-15__materialization_relationship_to_mvl_loop/_branch.md
```

Sensemaking confirmed the architectural verdict (O2 family — separate-triggerable peer-protocol) and narrowed to a 3-verdict frontier on the boundary-UX sub-question (W1 O3 suggestion / W2 O4 trigger artifact / W3 README-reframe-only). Decomposition partitions the remaining work into independently workable pieces for Innovation and Critique.

---

## Step 1 — Perceive Coupling Topology

### Elements of the whole

| Element | What it is |
|---|---|
| **E1** — W1 profile | O3 suggestion-line exact shape (text, conditional logic, location in CONCLUDE) |
| **E2** — W2 profile | O4 trigger-artifact schema (file path, fields, pre-population rules) + CONCLUDE write logic |
| **E3** — W3 profile | Status-quo-plus-README-reframe (no protocol change; documentation update) |
| **E4** — README reconciliation | Which document gets edited (README2.md) + exact replacement language for the "wire as default" milestone |
| **E5** — Refinement diff | Consolidated edit specs against the affected files |

### Coupling assessment

- **E1, E2, E3** (per-verdict profiles): pairwise low coupling.
- **E4 (README reconciliation):** independent of the verdict choice (README needs reframing under all three verdicts; only the level of detail in the README differs).
- **E5 (refinement diff):** tight to E1/E2/E3 (the chosen verdict determines what gets edited).

---

## Step 2 — Detect Boundaries

**Boundaries:**
- **B1** — between per-verdict profiles (E1, E2, E3) and the cross-cutting README reconciliation (E4).
- **B2** — between profiles + reconciliation and the refinement diff (E5).

### Initial partition

- **P1** — W1 profile (O3 suggestion line)
- **P2** — W2 profile (O4 trigger artifact)
- **P3** — W3 profile (status quo + README reframe only)
- **P4** — README reconciliation (cross-cutting)
- **P5** — Refinement diff (consolidated)

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atoms
- **A_P1** — suggestion-line text + conditional + insertion point in CONCLUDE.
- **A_P2** — trigger-artifact schema + CONCLUDE write logic + path convention.
- **A_P3** — README reframe text (when W3 alone).
- **A_P4** — README reframe text (cross-cutting under all verdicts).
- **A_P5** — per-section edit specs against the affected files.

### Bottom-up grouping
All atoms group cleanly into the 5 pieces. Top-down ↔ bottom-up agree. **High confidence.**

---

## Step 4 — Express as Question Tree

### Q1 — W1 (O3 suggestion line)

**Verification criteria:**
- [ ] Specify the exact suggestion-line text printed by CONCLUDE.
- [ ] Specify the conditional logic (when to print: `type: spec-modification` OR finding's MUST contains Edit-Specifications).
- [ ] Specify the insertion point in CONCLUDE's flow (after the brief summary print; before relationship pointers OR after).

### Q2 — W2 (O4 trigger artifact)

**Verification criteria:**
- [ ] Specify the trigger-artifact file path convention (`<inquiry_path>/materialization_request.md`).
- [ ] Specify the schema (Universal Input Contract fields: source_authority, source_path, source_anchor, request_summary, artifact_type, operation_intent — which are pre-populated, which are left for the materializer).
- [ ] Specify CONCLUDE's write logic (when to write: same condition as W1 or stricter — only when finding's MUST has ≥1 Edit-Specification).
- [ ] Specify the trigger artifact's relationship to `finding.md` (sidecar, referenced from finding's frontmatter, etc.).

### Q3 — W3 (status quo + README reframe only)

**Verification criteria:**
- [ ] Specify what's preserved: zero protocol-side change.
- [ ] Specify the README reframe text (same content as Q4 below; this is W3's only deliverable).

### Q4 — README reconciliation (cross-cutting)

**Verification criteria:**
- [ ] Specify the README2.md location (which paragraph in "What's next" / Family II section).
- [ ] Specify the current text being replaced.
- [ ] Specify the replacement text that reframes "wire as default post-finding step in /MVL+" to align with the artifact's separate-triggerable design.

### Q5 — Refinement diff (consolidated)

**Verification criteria:**
- [ ] For the chosen verdict, produce the concrete edit specs covering: README2.md (reframe — always); CONCLUDE.md (only if W1 or W2); new trigger-artifact handling (only if W2).
- [ ] Verification check for each edit.

---

## Step 5 — Map Interfaces

| Source | Target | Flow | Direction |
|---|---|---|---|
| Q1 → Q5 | suggestion-line spec | one-way (if W1 chosen) |
| Q2 → Q5 | trigger-artifact spec | one-way (if W2 chosen) |
| Q3 → Q5 | minimum spec | one-way (if W3 chosen) |
| Q4 → Q5 | README reframe text | one-way (always) |

### Shared preconditions (from Sensemaking)
- **SA1** — Architectural verdict is O2 family (separate-triggerable, peer-protocols).
- **SA2** — Within O2 family, three boundary-UX options (W1, W2, W3) with default = W1.
- **SA3** — README reframe is needed under all three verdicts.
- **SA4** — `cognitive_harness/protocols/artifact_materialization.md` is not changed by this inquiry; its design stands.

---

## Step 6 — Order by Dependency

```
Phase 1 (parallel): Q1 — Q2 — Q3 — Q4
Phase 2 (sequential): Q5
```

No circular dependencies.

---

## Step 7 — Self-Evaluate

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS — Q1+Q2+Q3+Q4 → Q5 produces "concrete refinement diff" per branch goal |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS — SA1–SA4 explicit |
| Balance | PASS |
| Confidence | PASS |

**All 7 PASS.**

---

## Final Deliverable

### Coupling Map
- C1: Per-verdict profiles (Q1/Q2/Q3) — low pairwise coupling
- C2: Cross-cutting README reconciliation (Q4) — independent
- C3: Refinement diff (Q5) — consumes the chosen verdict + Q4

### Question Tree
```
The Whole: "Concrete refinement diff for materialization↔/MVL+ relationship"
├── Q1 — W1 (O3 suggestion line) profile
├── Q2 — W2 (O4 trigger artifact) profile
├── Q3 — W3 (status quo + README reframe only) profile
├── Q4 — README reconciliation (cross-cutting)
└── Q5 — Refinement diff (consolidated)
```

### Dependency Order
```
Phase 1 (parallel): Q1 — Q2 — Q3 — Q4
Phase 2: Q5
```

### Self-Evaluation
| Dimension | Verdict |
|---|---|
| All 7 | PASS |

**Decomposition committed.**
