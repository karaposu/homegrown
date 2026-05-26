# Decomposition: Rename td-critique

## User Input

Inquiry `_branch.md`. Input: sensemaking.md (3 core commits + 5 finalists + 6 pre-sketched pieces) + exploration.md. Test sensemaking's 6-piece pre-sketch vs alternatives (per-candidate / by-phase / coarse merge). Determination-mechanism check (recommendation depends on user's choice).

---

## Step 1 — Coupling Topology

### Work-elements

| # | Element |
|---|---|
| E1 | Name criteria specification (dimensions + weights) |
| E2 | Finalist short-list curation (candidates to evaluate) |
| E3 | Per-finalist evaluation (apply criteria; reasoning per candidate) |
| E4 | Recommendation packet (user-facing ranked top-3 + user-decision framing) |
| E5 | Migration plan (concrete file list + procedure) |
| E6 | Optional residual (memory-hygiene note — enes/→docs/) |

### Pairwise coupling

| Pair | Coupling | Reasoning |
|---|---|---|
| E1 ↔ E2 | Weak | Criteria don't dictate which candidates exist; candidates don't change criteria. |
| E1 ↔ E3 | **Strong** | Evaluation IS criteria-applied-to-candidates. |
| E1 ↔ E4 | Moderate | Recommendation cites criteria. |
| E1 ↔ E5 | Weak | Migration plan is execution-shape; criterion-independent. |
| E1 ↔ E6 | Weak | Memory hygiene is independent. |
| E2 ↔ E3 | **Strong** | Evaluation needs the finalist set. |
| E2 ↔ E4 | Moderate | Recommendation operates on finalists. |
| E2 ↔ E5 | Weak | Migration is post-decision; finalist-independent in plan-shape. |
| E3 ↔ E4 | **Strong** | Recommendation distills evaluation. |
| E3 ↔ E5 | Weak | |
| E4 ↔ E5 | Weak | Migration is downstream in execution but independent in design content. |
| E5 ↔ E6 | Weak | |

### Clusters and valleys

```
HIGH-COUPLING CLUSTERS
  Cluster α: {E1, E2, E3, E4}  ─ the evaluation chain (criteria → finalists → evaluation → recommendation)
  Cluster β: {E5}              ─ migration plan; independent
  Cluster γ: {E6}              ─ memory hygiene; optional residual

LOW-COUPLING VALLEYS
  α | β                         ─ design content vs execution plan
  α/β | γ                       ─ inquiry-scope vs adjacent observation
  E1 | E2 (within α)            ─ both upstream of E3; qualitatively different inputs
  E3 | E4 (within α)            ─ evaluation outputs vs distilled recommendation
```

### Tested alternative cuts

| Alternate | Rationale | Verdict |
|---|---|---|
| Per-candidate (5 pieces, one per finalist) | Explicit per-candidate work | REJECTED — duplicates the evaluation procedure 5 times; no home for criteria, recommendation, or migration |
| By-phase-of-work (criteria→generate→test→recommend→migrate) | Natural phases | REJECTED — duplicates discipline-loop structure (Innovation does generate; Critique does test); piece-level shouldn't replicate |
| Coarse merge (E1+E3+E4 = "the evaluation") | Save pieces | REJECTED — loses evaluative independence; Critique can't separately assess criteria vs evaluation vs recommendation |

**Chosen cut:** 6 pieces matching Sensemaking's pre-sketch — Option A within cluster α (E1/E2/E3/E4 separate) + β + γ.

---

## Step 2 — Boundaries Top-Down

5 cuts → 6 pieces:

- B1: E1 | E2 (criteria vs finalists) — weak coupling; qualitatively different inputs to evaluation
- B2: (E1+E2) | E3 (inputs vs evaluation) — strong coupling-of-purpose; clean cut
- B3: E3 | E4 (evaluation vs recommendation) — distillation step
- B4: (E1+E2+E3+E4) | E5 (design vs migration) — design content vs execution plan
- B5: (cluster α + β) | E6 (load-bearing vs adjacent) — clean

---

## Step 3 — Boundaries Bottom-Up (Validation)

### Atoms

| Atom | Belongs to |
|---|---|
| a1 — list criteria dimensions | P1 |
| a2 — assign weights per dimension | P1 |
| a3 — enumerate finalists | P2 |
| a4 — score adjudicate against criteria | P3 |
| a5 — score critique-no-prefix against criteria | P3 |
| a6 — score vet against criteria | P3 |
| a7 — score assess against criteria | P3 |
| a8 — score sift against criteria | P3 |
| a9 — rank finalists | P4 |
| a10 — articulate top-3 reasoning | P4 |
| a11 — articulate user-decision question | P4 |
| a12 — list files needing update | P5 |
| a13 — specify rename commands | P5 |
| a14 — memory-hygiene side-observation | P6 |

### Cohesion check

| Piece | Atoms | Internal cohesion |
|---|---|---|
| P1 | a1, a2 | Both about criteria specification |
| P2 | a3 | Single artifact — finalist list |
| P3 | a4–a8 | All per-finalist score+reason entries; same shape |
| P4 | a9, a10, a11 | All recommendation-shaped (rank + reason + user-decision) |
| P5 | a12, a13 | Both about migration mechanics |
| P6 | a14 | Single side-observation |

Atoms map cleanly; no spanning. **Confidence: HIGH** — top-down and bottom-up agree.

---

## Step 4 — Question Tree

### P1 — Name Criteria Specification

**Question:** What dimensions does a winning name need to score on, and at what weights?

**Verification criteria:**
- [ ] All sensemaking-committed dimensions enumerated (operation-fit, bare-verb-form-fit, baggage-avoidance, intelligibility, migration-cost, no-collision-with-spec-internal-terms)
- [ ] Weight per dimension stated (CRITICAL / HIGH / MEDIUM / LOW)
- [ ] Success-criterion per dimension (what "passing" looks like)
- [ ] Source citation: each dimension traced to a sensemaking commit or exploration finding

### P2 — Finalist Short-List

**Question:** What candidate names advance to per-finalist evaluation?

**Verification criteria:**
- [ ] Sensemaking finalists carried forward: `adjudicate`, `critique` (prefix-dropped), `vet`, `assess`, `sift`
- [ ] Innovation-emergent additions surfaced if applicable (e.g., a strong domain-transfer hit not yet on the list)
- [ ] Disqualified candidates listed with one-line rejection rationale (`evaluate`, `validate`, `verify`, `review`, `judge`, `td-X`, hyphenated compounds without justification)
- [ ] Cut-off justified (why these N, not more, not fewer)

### P3 — Per-Finalist Evaluation

**Question:** For each finalist, how does it score against each criterion?

**Verification criteria:**
- [ ] Score table: rows = finalists, columns = criteria; each cell scored PASS / PARTIAL / FAIL with one-line reason
- [ ] Per-finalist reasoning paragraph (the WHY behind the score profile)
- [ ] Tension flags noted (criterion where finalist scores weakly with explicit explanation)
- [ ] Light prosecution+defense thinking per finalist (Critique will adversarially test downstream; Innovation can pre-stage the argument)

### P4 — Recommendation Packet (User-Facing)

**Question:** What is the ranked recommendation for the user, with the reasoning they need to adjudicate?

**Verification criteria:**
- [ ] Top-3 ranked list (primary + 2 alternatives)
- [ ] Per-rank entry: name + one-line operation-fit summary + tradeoff vs siblings in the rank
- [ ] Migration impact note per rank (LOW for low-churn options like critique-no-prefix; LOW-MED for verb-replacement options)
- [ ] User-decision question explicit (this inquiry produces a ranked list; the user adjudicates)
- [ ] Reasoning sketch: why this ranking over alternatives

### P5 — Migration Plan

**Question:** What concrete files need updating, and what is the procedure?

**Verification criteria:**
- [ ] File list categorized:
  - Tier 1 (folder + registry): `cognitive_harness/td-critique/` → `cognitive_harness/<new>/`, `~/.claude/skills/td-critique/` → `~/.claude/skills/<new>/`
  - Tier 2 (runtime spec references): the 5 known files in `cognitive_harness/MVL/`, `cognitive_harness/MVL+/`, `cognitive_harness/sense-making/`, `cognitive_harness/innovate/`, `cognitive_harness/decompose/`
  - Tier 3 (docs/ theory references): ~10-15 files under `cognitive_harness/docs/discipline_taxonomy.md`, `docs/intuit.md`, etc.
  - Tier 4 (frozen inquiry artifacts): ~230+ files under `devdocs/inquiries/`; LEAVE FROZEN as historical record
- [ ] Procedure: bash commands (mv folder + cp/mv registry + project-wide grep+replace for Tier 2/3)
- [ ] Migration ordering: spec files first (so cannon loop references are consistent), then docs
- [ ] Reversibility note: how to undo if the rename is mis-applied
- [ ] User-input dependency: commands parameterize on the user's chosen name (placeholder `<new>` in commands)

### P6 — Optional Residual

**Question:** What adjacent observations should the finding surface that are NOT load-bearing for the rename?

**Verification criteria:**
- [ ] Memory-hygiene note: user's auto-memory entry "Discipline design-history location" points at `enes/` but the folder is now at `docs/`. Stale; update when convenient.
- [ ] Mark explicitly as OPTIONAL / SIDE-OBSERVATION (don't expand inquiry scope)
- [ ] No action proposed beyond surfacing — the user decides whether to update the memory entry

---

## Step 5 — Interface Map

| From | To | What flows | Direction | Notes |
|---|---|---|---|---|
| P1 → P3 | Criteria + weights | data (precondition) | one-way | P3 cannot score without criteria fixed |
| P2 → P3 | Finalist set | data (precondition) | one-way | P3's rows are P2's items |
| P3 → P4 | Per-finalist scores + reasoning | data | one-way | P4 ranks from P3's scoring |
| P4 → P5 | (Conditional) the user's chosen name parameterizes commands | data, conditional on user | one-way | Migration commands use `<new>` placeholder; user-resolution determines value |
| All pieces → CONCLUDE | Inputs aggregate into finding.md | aggregation | one-way | CONCLUDE composes the finding |

### Assumptions-not-data check

| Piece | Assumption | Explicit? |
|---|---|---|
| P3 | Criteria are stable post-P1 (no late additions during scoring) | ✓ via precondition |
| P4 | Evaluation is complete; ranking is defensible | ✓ via precondition |
| P5 | User will adjudicate; commands accept user's choice as parameter | ✓ via explicit user-input dependency |
| P5 | Frozen inquiry artifacts (Tier 4) DON'T need updating | ✓ explicit in verification criteria |
| P6 | Inquiry scope doesn't expand into memory cleanup | ✓ marked OPTIONAL |

No hidden assumptions.

---

## Step 6 — Dependency Order

### For Innovation phase (elaboration)

```
P1 ─┐
P2 ─┼─→ P3 ─→ P4
P5 ─┘ (independent of P1-P4 in content; uses placeholder)
P6 (independent)
```

P1, P2, P5, P6 can be elaborated in parallel. P3 depends on P1+P2. P4 depends on P3.

### For Critique phase (testing)

All pieces can be tested independently; P4 is the load-bearing recommendation that gets the most adversarial pressure.

### For CONCLUDE (finding compilation)

- P1 + P2 + P3 + P4 compose the main argument body
- P5 becomes Next Actions
- P6 becomes a side-observation in Open Questions

No circular dependencies.

---

## Step 7 — Self-Evaluate (Full 7 Dimensions)

| Dimension | Status | Notes |
|---|---|---|
| **Independence** | PASS | Each piece's question is answerable using only declared interfaces |
| **Completeness** | PASS | Criteria (P1) + finalists (P2) + evaluation (P3) + recommendation (P4) + migration (P5) + residual (P6) cover the whole rename-design problem |
| **Reassembly** | PASS | P1-P4 produce analytical answer; P5 enables execution; P6 surfaces adjacent info; together: user has ranked list + adjudication path + execution plan |
| **Tractability** | PASS | P1 ~10 lines; P2 ~10 lines; P3 ~30-50 lines (bulk work); P4 ~15-20 lines; P5 ~15 lines; P6 ~3-5 lines |
| **Interface clarity** | PASS | All interfaces one-way; assumptions explicit |
| **Balance** | PASS | P3 is largest (the bulk evaluation) but not 80% of work; others roughly proportional |
| **Confidence** | PASS | Top-down + bottom-up boundaries agree |

### Determination-Mechanism Check

Load-bearing concept with runtime determination: **the user's chosen name**. Determined at user-adjudication time after reading the finding. P4 explicitly addresses this — produces a ranked list, doesn't unilaterally decide; P5's commands parameterize on the chosen name. ✓

### Failure-Mode Self-Check

| Mode | Status |
|---|---|
| 1. Premature Decomposition | ✗ avoided — Sensemaking fully clarified before this step |
| 2. Wrong Boundaries | ✗ avoided — cuts at low-coupling points; alternatives tested |
| 3. Hidden Coupling | ✗ avoided — assumptions-not-data check applied |
| 4. Missing Pieces | ✗ avoided — determination mechanism (P4 user-adjudication) explicit |
| 5. Over-Decomposition | ✗ avoided — 6 pieces; each non-trivial |
| 6. Ignoring Dependencies | ✗ avoided — execution order specified |
| 7. Imbalanced Decomposition | ✗ avoided — P3 is largest by design but balanced overall |

### Self-Assessment

**PROCEED.** 6 well-bounded pieces, clean interfaces, dependency order specified, all 7 self-evaluation dimensions PASS. Ready for Innovation to produce concrete content per piece (criteria table; finalist list; evaluation scores+reasoning; ranked recommendation; migration commands).
