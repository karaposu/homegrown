# Decomposition: Comparative Evaluation — surfacing_spec.md vs current explore.md

## User Input

(/MVL+ branch + exploration + sensemaking)

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_09-02__comparative_evaluation_surfacing_vs_current_explore_for_mvl_robustness/_branch.md`

Plus additional instructions: read priors. Apply 7-step decomposition. Property (v) NOT firing expected. N: 4-6 pieces.

The whole to be decomposed: **the comparative evaluation deliverable** = 10 per-criterion verdicts + aggregate + trade-off + confidence + bias-mitigation probes.

---

## Step 1 — Perceive Coupling Topology

### Elements

- E1: Per-criterion verdict for C1 (disciplines-self-contained; CRITICAL)
- E2: Per-criterion verdict for C2 (typed primitive set; HIGH)
- E3: Per-criterion verdict for C3 (RC architecture; HIGH)
- E4: Per-criterion verdict for C4 (asymmetric-failure principle; CRITICAL)
- E5: Per-criterion verdict for C5 (consciousness substrate; HIGH)
- E6: Per-criterion verdict for C6 (multi-head forward-compat; MEDIUM)
- E7: Per-criterion verdict for C7 (regression-pattern coverage; HIGH)
- E8: Per-criterion verdict for C8 (cross-session resume; CRITICAL)
- E9: Per-criterion verdict for C9 (output efficiency; HIGH)
- E10: Per-criterion verdict for C10 (operational maturity; MEDIUM)
- E11: Aggregate verdict (weighted)
- E12: Trade-off acknowledgment
- E13: Confidence calibration
- E14: Bias-mitigation probes (questions for Critique)

### Coupling

Per-criterion verdicts cluster by criticality tier (CRITICAL / HIGH / MEDIUM) — each tier weighs differently in the aggregate. Aggregate depends on per-criterion verdicts; trade-off + confidence depend on aggregate + bias-residual. Bias probes are pre-staged at Innovation; executed at Critique.

```
[CLUSTER A: CRITICAL verdicts]    [CLUSTER B: HIGH verdicts]    [CLUSTER C: MEDIUM verdicts]
  E1, E4, E8                        E2, E3, E5, E7, E9            E6, E10
                │                       │                              │
                └───────────────────────┴──────────────────────────────┘
                                        ▼
                         [CLUSTER D: AGGREGATE]
                              E11
                                ↓ (with bias-residual from E14)
                         [CLUSTER E: TRADE-OFF + CONFIDENCE]
                              E12, E13
                                ↑
                         [CLUSTER F: BIAS PROBES]
                              E14
```

---

## Step 2 — Detect Boundaries Top-Down

| Piece | Cluster | Elements |
|---|---|---|
| **P1** | A | E1, E4, E8 — 3 CRITICAL criteria verdicts (C1 disciplines-self-contained; C4 asymmetric-failure; C8 cross-session resume) |
| **P2** | B | E2, E3, E5, E7, E9 — 5 HIGH criteria verdicts (C2 typed primitive set; C3 RC architecture; C5 consciousness substrate; C7 regression-pattern coverage; C9 output efficiency) |
| **P3** | C | E6, E10 — 2 MEDIUM criteria verdicts (C6 multi-head forward-compat; C10 operational maturity) |
| **P4** | D | E11 — Aggregate verdict (weighted by criticality per SD3) |
| **P5** | E | E12, E13 — Trade-off acknowledgment + confidence calibration |
| **P6** | F | E14 — Bias-mitigation probes (pre-staged at Innovation; questions Critique will run) |

6 pieces.

---

## Step 3 — Validate Boundaries Bottom-Up

### Atom-level

- A1-A3: 3 CRITICAL verdicts → P1 ✓
- A4-A8: 5 HIGH verdicts → P2 ✓
- A9-A10: 2 MEDIUM verdicts → P3 ✓
- A11: aggregate → P4 ✓
- A12-A13: trade-off + confidence → P5 ✓
- A14: bias probes → P6 ✓

All atoms group naturally.

### Confidence

| Boundary | Confidence |
|---|---|
| P1 (CRITICAL tier) | HIGH |
| P2 (HIGH tier) | HIGH |
| P3 (MEDIUM tier) | HIGH |
| P4 (aggregate) | HIGH |
| P5 (trade-off + confidence) | HIGH |
| P6 (bias probes) | HIGH |

---

## Step 4 — Express as Question Tree

### P1 — CRITICAL criteria verdicts

**Question:** For each of C1, C4, C8, which spec wins (A surfacing / B current /explore / TIE / BOTH WEAK)? With justification citing spec text + the end-goal-doc source.

**Verification criteria:**
- [ ] C1 verdict + spec-text evidence + auto-memory `feedback_disciplines_self_contained.md` citation
- [ ] C4 verdict + spec-text evidence + user-correction citation + `docs/regression/desc.md` Pattern 4 citation
- [ ] C8 verdict + spec-text evidence + `docs/runtime_environment/folder_based.md` + `docs/autonomy_ladder.md` citation

### P2 — HIGH criteria verdicts

**Question:** For each of C2, C3, C5, C7, C9, which spec wins? With justification.

**Verification criteria:**
- [ ] C2 verdict + spec-text evidence + `docs/thinking_space_dynamics.md` citation
- [ ] C3 verdict + spec-text evidence + `docs/evolving_quality_assetment_component.md` citation
- [ ] C5 verdict + spec-text evidence + `docs/desc.md` consciousness-gradient citation
- [ ] C7 verdict + spec-text evidence + `docs/regression/desc.md` 23-symptom catalog citation
- [ ] C9 verdict + spec-text evidence + user-correction citation

### P3 — MEDIUM criteria verdicts

**Question:** For each of C6, C10, which spec wins? With justification.

**Verification criteria:**
- [ ] C6 verdict + spec-text evidence + `docs/autonomy_ladder.md` citation
- [ ] C10 verdict + deployment-history evidence

### P4 — Aggregate verdict

**Question:** Given the per-criterion verdicts (P1-P3), what is the aggregate verdict weighted by criticality?

**Verification criteria:**
- [ ] CRITICAL tier tally: A-wins / B-wins / ties
- [ ] HIGH tier tally
- [ ] MEDIUM tier tally
- [ ] Aggregate verdict statement (A / B / TRADE-OFF)
- [ ] Aggregate cites SD3's weighted-aggregate rule

### P5 — Trade-off acknowledgment + confidence calibration

**Question:** What dimensions does the losing spec (per aggregate) still win on, and what's the verdict confidence given bias-residual?

**Verification criteria:**
- [ ] Trade-off section listing the dimensions where the aggregate-losing spec is stronger
- [ ] Confidence verdict (HIGH / MEDIUM-HIGH / MEDIUM / etc.) per SD8 calibration rule
- [ ] Refinement triggers identifying when the verdict could re-open

### P6 — Bias-mitigation probes (for Critique)

**Question:** What probes will Critique run to test the verdict's robustness against authorship bias + status-quo bias + convention-following bias?

**Verification criteria:**
- [ ] Authorship-bias probe: stated as a Critique-stage question + operational test
- [ ] Status-quo bias probe: stated similarly
- [ ] Convention-following bias probe: stated similarly
- [ ] Each probe has a clear pass/fail criterion

---

## Step 5 — Map Interfaces

| # | Source | Target | Flow | Direction |
|---|---|---|---|---|
| **HCR1** | P1 (CRITICAL verdicts) | P4 (aggregate) | CRITICAL tally feeds aggregate weighting (highest weight) | one-way |
| **HCR2** | P2 (HIGH verdicts) | P4 | HIGH tally feeds aggregate (middle weight) | one-way |
| **HCR3** | P3 (MEDIUM verdicts) | P4 | MEDIUM tally feeds aggregate (lowest weight; informational) | one-way |
| **HCR4** | P4 (aggregate) | P5 (trade-off + confidence) | Aggregate verdict shapes the trade-off render + confidence rule | one-way |
| **HCR5** | P6 (bias probes) | P5 (confidence) | Bias-residual after probes downgrades confidence | one-way |
| **HCR6** | P1+P2+P3 (per-criterion verdicts) | P5 (trade-off) | Trade-off lists dimensions where the aggregate-loser is stronger; needs per-criterion data | many-to-one |

6 HCRs.

---

## Step 6 — Order by Dependency

```
PHASE A (parallel): P1 + P2 + P3 (per-criterion verdicts; independent)
                              │
                              ▼
PHASE B:                P6 (bias probes; pre-staged)
                              │ 
                              ▼
PHASE C:                P4 (aggregate)
                              │
                              ▼
PHASE D:                P5 (trade-off + confidence)
```

No circular dependencies.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions

- **Independence:** PASS. Each piece independent through HCRs.
- **Completeness:** PASS. 10 criteria covered (P1+P2+P3) + aggregate (P4) + trade-off+confidence (P5) + bias probes (P6).
- **Reassembly:** PASS. Pieces + HCRs reconstruct the comparative evaluation deliverable.

### Determination-mechanism check

Runtime determinations:
- Per-criterion verdict shape (A/B/TIE/BOTH WEAK) → handled at P1-P3
- Aggregate-rule determination (weighted by criticality) → handled at P4
- Confidence-rule determination (bias-residual) → handled at P5
- Bias-probe pass/fail → handled at P6

All addressed. **PASS.**

### Full evaluation (7 dimensions)

| Dim | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS — each piece has 3-7 verification criteria |
| Interface clarity | PASS — 6 HCRs with direction + content |
| Balance | PASS — pieces roughly balanced |
| Confidence | PASS — top-down + bottom-up agree |

### Failure modes

| Failure | Result |
|---|---|
| Premature decomposition | PASS (Sensemaking thorough) |
| Wrong boundaries | PASS |
| Hidden coupling | PASS |
| Missing pieces | PASS |
| Over-decomposition | PASS (6 pieces; not over-fragmented) |
| Ignoring dependencies | PASS (4-phase order) |
| Imbalanced | PASS |

All 7 failure modes AVOIDED.

---

## Self-Assessment Verdict

**PROCEED to Innovation with 6-piece Q-tree (P1-P6) + 6 HCRs.**

Innovation will produce the actual per-criterion verdicts (P1-P3) + the aggregate (P4) + the trade-off + confidence (P5) + the bias probes pre-staged for Critique (P6). Property (v) NOT firing at any piece confirmed.
