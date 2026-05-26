# Decomposition: Contrarian Rethink — finding.md Format Redesign

## User Input

Inquiry `_branch.md`. Input: sensemaking.md (3 commits — 6 CONFIRMS + 1 REFINES + 0 CORRECTS + 0 SUPERSEDED per-commit verdicts; finding relationship REFINES; pre-sketched 4-5 pieces with P3/P4 noted as potentially mergeable). Test the cut: should P3 (disposition) and P4 (recommendation) merge?

---

## Step 1 — Coupling Topology

### Work-elements

| # | Element |
|---|---|
| E1 | Inherited Commitments Re-test (per-commit C1-C8 verdicts with evidence) — REQUIRED BY CONCLUDE |
| E2 | Diff-based edit-spec refinement (C3 alternate format content) |
| E3 | Contrarian-designs disposition (per-design A-H verdicts with empirical evidence) |
| E4 | Recommendation packet (prior + C-refinement; honest framing) |
| E5 | Adjacent observations (Lens-Shifting inheritance; future-phase Refinement Triggers; cross-refs) |

### Pairwise coupling

| Pair | Coupling | Reasoning |
|---|---|---|
| E1 ↔ E2 | Moderate | C3 verdict in E1 cites the diff-based spec from E2 |
| E1 ↔ E3 | **Strong** | E3 disposition is per-design aggregation of E1's per-commit evidence |
| E1 ↔ E4 | **Strong** | Recommendation built from verdicts |
| E2 ↔ E3 | Weak | |
| E2 ↔ E4 | Moderate | Recommendation cites diff-based as the adopted refinement |
| **E3 ↔ E4** | **Strong** | Same content from two angles (disposition = WHY each verdict; recommendation = WHICH survives) |
| E5 ↔ others | Weak | Independent context |

### Coupling map

```
HIGH-COUPLING CLUSTER
  α: {E1, E3, E4}  ─ the verdict cluster (re-test + disposition + recommendation)
    Within α: E3+E4 are tightly coupled (same content, two angles); merge.

INDEPENDENT
  β: {E2}          ─ refinement content (small but critical)
  γ: {E5}          ─ adjacent observations
```

### Tested alternative cuts

- Keep 5 pieces (E3 + E4 separate): REJECTED — they overlap in content; merging reduces fragmentation.
- Merge E1 + E3 into one re-test/disposition piece: REJECTED — E1 is commit-axis (C1-C8); E3 is design-axis (A-H); same evidence but different aggregations. Reassembly preserves clarity.

**Chosen cut: 4 pieces** (merge E3 + E4 into "Contrarian-designs disposition + recommendation").

---

## Step 2 — Boundaries Top-Down

- **B1: E1 | (E3+E4)** — commit-axis verdicts vs design-axis disposition+recommendation. Clean cut (different aggregations of same evidence base).
- **B2: E2 | (E1, E3+E4)** — refinement spec content vs verdict/disposition pieces.
- **B3: (E1+E2+E3+E4) | E5** — load-bearing vs adjacent.

3 cuts → 4 pieces.

---

## Step 3 — Bottom-Up (Atoms)

| Atom | Belongs to |
|---|---|
| a1-a8 per-commit verdicts (C1 through C8) with evidence | P1 |
| a9 diff-based edit-spec schema (alternate format) | P2 |
| a10 example diff-based block | P2 |
| a11 when-to-use-diff vs when-to-use-field-based | P2 |
| a12 per-design disposition (A-H verdicts with evidence) | P3 |
| a13 recommendation: prior + Design C adopted | P3 |
| a14 honest framing of contrarian-re-run outcome | P3 |
| a15 Lens-Shifting condition-table inheritance | P4 |
| a16 future-phase pivots as Refinement Triggers | P4 |
| a17 cross-refs list | P4 |

Atoms map cleanly. Confidence: HIGH.

---

## Step 4 — Question Tree

### P1 — Inherited Commitments Re-test (LOAD-BEARING per CONCLUDE)

**Question:** For each of the prior's 8 commitments (C1-C8), what is the per-commit verdict with evidence?

**Verification criteria:**
- [ ] All 8 commitments enumerated with prior's verbatim statement
- [ ] Per-commit verdict: CONFIRMS / REFINES / CORRECTS / SUPERSEDED (one of these)
- [ ] Per-commit evidence cited (corpus rate, cross-domain analog, substrate-honesty check, or specific argument)
- [ ] If REFINES: the specific refinement described (with pointer to P2 for C3)
- [ ] If CORRECTS/SUPERSEDED: the replacement described (none in this case)
- [ ] Total aggregation: 6 CONFIRMS + 1 REFINES + 0 CORRECTS + 0 SUPERSEDED

### P2 — Diff-based Edit-Spec Refinement (Design C content)

**Question:** What is the diff-based edit-spec alternate format, when is it preferred over the field-based sub-form, and how do both coexist?

**Verification criteria:**
- [ ] Markdown rendering pattern: unified-diff inside fenced code-block with surrounding YAML/markdown metadata
- [ ] Required surrounding metadata: `target_path:` + optional `target_anchor:` + `rationale:` (one-line) + `reversibility:` (one-line)
- [ ] When to use diff-based: line-level text edits where line numbers are known + `git apply`-validatable preferred
- [ ] When to use field-based: add-new-file / restructure / multi-file / unknown line numbers / extensive prose changes
- [ ] Example diff-based block (fully filled)
- [ ] Coexistence: both forms permitted within Spec-modification type; structural-check accepts either
- [ ] Composability with prior's P3 sub-form: both forms can appear in the same finding when different edits warrant different formats

### P3 — Contrarian-designs Disposition + Recommendation

**Question:** For each of the 8 contrarian designs (A-H), what was its verdict and why, and what is the recommendation to the user?

**Verification criteria:**
- [ ] All 8 designs listed with verdict (REFINES-adopted / EMPIRICALLY-REFUTED / SUBSTRATE-FAIL / REJECTED-COMPLEXITY / DEFERRED-FUTURE-PHASE)
- [ ] Per-design evidence cited:
  - A Minimalist: rejected — doesn't address F2 without sub-form
  - B Convention-by-Example: empirically refuted by corpus 96% failure rate
  - C Diff-based: REFINES-adopted as alternate format
  - D MD+YAML companion: substrate/maintenance fail
  - E Frontmatter-only: doesn't fit mixed reading
  - F Knowledge graph: substrate-honest fail (no graph infra)
  - G ADR-style: empirically refuted by corpus's 22+ non-canonical sections
  - H Title-prefix: rejected — CONCLUDE complexity without saving frontmatter
- [ ] Recommendation: prior + Design C as adopted refinement; explicit primary
- [ ] Honest framing: "contrarian re-run largely validates the prior; one genuine refinement adopted"
- [ ] Note D/E/F deferred as future-phase pivots (Refinement Triggers)

### P4 — Adjacent Observations

**Question:** What adjacent context worth surfacing in the finding without expanding inquiry scope?

**Verification criteria:**
- [ ] Lens-Shifting condition-table inheritance: prior's conditional-correctness made explicit; current calibration (50 findings, mixed reading) is the target state
- [ ] Future-phase pivots as Refinement Triggers: condition-bound triggers for re-opening E (YAML-only) or F (graph) if calibration shifts (LLM-only consumption + machine-queryability needed + 500+ findings)
- [ ] Cross-refs list: prior finding `2026-05-16_10-50`; 50-finding corpus; cross-domain analogs (ADR, Conventional Commits)
- [ ] Self-applicability note: THIS finding is type=spec-modification (or decision) under the prior's taxonomy — proves the prior's typed-variant approach by self-applying cleanly

---

## Step 5 — Interface Map

| From | To | What flows | Direction |
|---|---|---|---|
| P2 → P1 | The C3 verdict in P1 cites the diff-based spec from P2 | dependency | one-way |
| P1 → P3 | Per-commit verdicts inform per-design disposition (aggregation) | data | one-way |
| P2 → P3 | Diff-based is the one adopted refinement; recommendation cites it | data | one-way |
| P3 → P4 | Recommendation may reference adjacent observations | reference | bidirectional weak |

### Assumptions-not-data check

| Piece | Assumption | Explicit? |
|---|---|---|
| P1 | Prior's commitments list (C1-C8) is authoritative | ✓ verified from _branch.md Synthesis Trigger |
| P1 | Per-commit verdicts use observable evidence (not preference) | ✓ via verification criteria |
| P2 | Unified-diff format is a valid alternate (Domain-Transfer) | ✓ documented in exploration |
| P3 | Empirical evidence supports verdicts | ✓ via corpus rates from exploration |
| P4 | Future-phase pivots are real conditions | ✓ via Lens-Shifting in exploration |

No hidden coupling.

---

## Step 6 — Dependency Order

### For Innovation phase

```
P2 (diff-based spec) → P1 (per-commit verdicts cite P2 for C3) → P3 (disposition + recommendation cites P1+P2)
P4 (adjacent) — independent; can elaborate in parallel
```

**Order:** P2 → P1 → P3 → P4 (P4 parallel with any).

### For Critique phase

All pieces tested against the prior's 8 commits + the 5 user-named failure classes + substrate-honesty.

### For finding-compilation (CONCLUDE)

- P1 → `## Inherited Commitments Re-test` section (REQUIRED by CONCLUDE)
- P2 → embedded in P1's C3 verdict + referenced from P3's recommendation
- P3 → main Finding-body content
- P4 → Open Questions + cross-references

---

## Step 7 — Self-Evaluate (Full 7 Dimensions)

| Dimension | Status | Notes |
|---|---|---|
| **Independence** | PASS | Each piece's question is answerable using declared interfaces |
| **Completeness** | PASS | Re-test (P1) + Refinement spec (P2) + Disposition+Recommendation (P3) + Adjacent (P4) cover the whole contrarian-re-run finding |
| **Reassembly** | PASS | All 4 pieces compose into a REFINES-type finding per CONCLUDE template |
| **Tractability** | PASS | P1 8 verdicts × ~5 lines = ~40 lines; P2 ~15 lines; P3 ~30-40 lines; P4 ~10-15 lines |
| **Interface clarity** | PASS | 4 interfaces explicit; assumptions cited |
| **Balance** | PASS | P1 is largest (load-bearing per CONCLUDE) but proportional; P2 small but critical; P3 medium; P4 small |
| **Confidence** | PASS | Top-down + bottom-up boundaries agree |

### Determination-Mechanism Check

Load-bearing concept: **per-commit verdict** is determined by evidence (corpus rate, cross-domain, substrate-honesty). P1's verification criteria EXPLICITLY require evidence-citation per verdict — not assertion. ✓

### Failure-Mode Self-Check

| Mode | Status |
|---|---|
| 1. Premature Decomposition | ✗ avoided — Sensemaking fully clarified before this step |
| 2. Wrong Boundaries | ✗ avoided — alternates tested; chose 4 pieces (E3+E4 merge) over 5-piece pre-sketch |
| 3. Hidden Coupling | ✗ avoided — assumptions explicit |
| 4. Missing Pieces | ✗ avoided — Inherited Commitments Re-test (P1) covers CONCLUDE's enforcement; determination-mechanism per verdict explicit |
| 5. Over-Decomposition | ✗ avoided — 4 pieces; each non-trivial |
| 6. Ignoring Dependencies | ✗ avoided — execution order P2 → P1 → P3 → P4 specified |
| 7. Imbalanced Decomposition | ✗ avoided — proportional; P1 is justifiably largest (8 verdicts) |

### Self-Assessment

**PROCEED.** 4 well-bounded pieces; clean interfaces; dependency order specified; all 7 dimensions PASS. Ready for Innovation to produce concrete per-piece content (per-commit verdicts with evidence; diff-based spec; disposition + recommendation; adjacent observations).
