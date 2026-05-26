# Decomposition: A/B Test Task Pair Design for /explore vs /surfacing Comparison

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-22_11-35__test_pair_design_explore_vs_surfacing_comparison/_branch.md`

Plus additional instructions: read priors. Apply 7-step decomposition. Property (v) NOT firing expected. N: 5-7 pieces.

The whole to be decomposed: **Innovation's deliverable** = 12 paste-ready prompts (5 Group A + 5 Group B + 2 CTRL) + per-prompt annotation + pair-selection guidance + warming-protocol artifact + discrimination-criterion / run-plan artifact.

---

## Step 1 — Perceive Coupling Topology

### Elements

- **E1** — Group A test prompts (5 artifact-bounded, harness-internal, size-comparable; from seeds GA-1, GA-2, GA-3 + 2 derived)
- **E2** — Group B test prompts (5 possibility-mode, harness-internal, size-comparable; from seeds GB-1, GB-2, GB-5 + 2 derived)
- **E3** — CTRL pair (2 prompts; 1 artifact-mode-shape + 1 possibility-mode-shape; expected LOW discrim)
- **E4** — Per-prompt annotation (12 rows × {axis stress + predicted discrim strength + approximate size})
- **E5** — Pair-selection guidance (2 picks: best 2-of-5 in Group A; best 2-of-5 in Group B)
- **E6** — Warming-protocol artifact (the 6 files in committed order per SD6, formatted as paste-ready user instruction)
- **E7** — Discrimination-criterion + stochasticity + run-plan artifact (DC1+DC2+DC3 + run policy + noise/signal thresholds + commit-first protocol + two-step verification per SD4 + SD5 + SD11)
- **E8** — Caveat structure (confound risk + commit-first protocol per SD7 + SD10) — folded into E7 since closely related

### Coupling

- E1, E2 — weak coupling (different modes; shared constraints: harness-internal, size-comparable, paste-ready)
- E1, E2 ↔ E3 — weak coupling (CTRLs are anti-discrim shapes; need size-awareness only)
- E1, E2, E3 → E4 — moderate (annotation reads prompt-body)
- E1, E2 → E5 — moderate (pair-selection needs the 5-per-group set)
- E4 → E5 — moderate (pair-selection uses annotation discrim-strength field)
- E6 — independent (relies on SD6 only)
- E7 — independent (relies on SD4, SD5, SD11)

### Coupling diagram

```
PHASE A (parallel):
  [E1 Group A 5] [E2 Group B 5] [E6 Warming] [E7 Criterion+RunPlan]
       │              │
       └──────┬───────┘
              ▼
  PHASE B:
  [E3 CTRL pair]   ← size-aware of E1, E2
       │
       ▼
  [E1+E2+E3]
       │
       ▼
  PHASE C:
  [E4 Annotation]
       │
       ▼
  PHASE D:
  [E5 Pair-selection guidance]
```

---

## Step 2 — Detect Boundaries Top-Down

| Piece | Elements | Why this boundary |
|---|---|---|
| **P1** | E1 — 5 Group A test prompts | Mode-specific (artifact-bounded); shared design constraints; low coupling to other modes |
| **P2** | E2 — 5 Group B test prompts | Mode-specific (possibility-mode); shared design constraints; low coupling to other modes |
| **P3** | E3 — 2 CTRL prompts | Opposite design intent (anti-discrim); low coupling to test prompts beyond size |
| **P4** | E4 — annotation layer (12 rows) | Different work type (analytic, not generative); operates ON prompts |
| **P5** | E5 — pair-selection guidance | Different work type (synthesis across group); operates ON annotations |
| **P6** | E6 — warming protocol artifact | Different domain (procedure, not content); independent of P1-P5 |
| **P7** | E7 + E8 — criterion + run-plan + caveats artifact | Different domain (methodology, not content); independent of P1-P5 |

7 pieces.

---

## Step 3 — Validate Boundaries Bottom-Up

### Atoms

| Atom set | Group | Piece |
|---|---|---|
| Each of 5 Group A prompt-bodies | a-1 through a-5 | P1 ✓ |
| Each of 5 Group B prompt-bodies | b-1 through b-5 | P2 ✓ |
| Each of 2 CTRL prompt-bodies | c-a, c-b | P3 ✓ |
| Each annotation row (12 × {axis + discrim + size}) | n-1 through n-12 | P4 ✓ |
| Each pair-selection pick (1 per group) | ps-a, ps-b | P5 ✓ |
| Each warming file reference (6 files) | w-1 through w-6 | P6 ✓ |
| Criterion fields (DC1, DC2, DC3) + run-plan + stochasticity + commit-first + two-step | mp-1 through mp-7 | P7 ✓ |

All atoms group naturally into their piece. No atoms straddle boundaries.

### Confidence

| Boundary | Confidence |
|---|---|
| P1 (Group A) | HIGH |
| P2 (Group B) | HIGH |
| P3 (CTRL) | HIGH |
| P4 (annotation) | HIGH |
| P5 (pair-selection) | HIGH |
| P6 (warming) | HIGH |
| P7 (criterion/run-plan) | HIGH |

Top-down and bottom-up agree on all 7 boundaries.

---

## Step 4 — Express as Question Tree

### P1 — Group A 5 prompts

**Question:** What 5 specific paste-ready prompt bodies (artifact-bounded, harness-internal, size-comparable ~5-10 items per territory) best stress the A1/A2/A4 operational-difference axes — using seeds GA-1 (cross-discipline coupling), GA-2 (failure-mode patterns), GA-3 (asymmetric-failure mentions) + 2 derived candidates?

**Verification criteria:**
- [ ] 5 prompts produced
- [ ] All artifact-bounded (territory contains concrete pre-existing items)
- [ ] All harness-internal (target `cognitive_harness/` or `docs/`)
- [ ] Size-comparable (territory yields ~5-10 items to surface)
- [ ] Each prompt's territory paths are paste-ready (no placeholders to fill)
- [ ] Each prompt is self-contained (interpretable without external inquiry-context)
- [ ] R9 anti-patterns avoided (no trivial enum; no pure narrative; no single-item-focus; no too-small; no too-vague; no one-passage-answer)
- [ ] Each prompt has explicit axis-stress signature (A1/A2/A4) per Sensemaking SD3

### P2 — Group B 5 prompts

**Question:** What 5 specific paste-ready prompt bodies (possibility-mode, harness-internal, size-comparable) best stress the A1/A2/A5 operational-difference axes — using seeds GB-1 (missing disciplines), GB-2 (multi-head failure modes), GB-5 (anti-patterns) + 2 derived candidates?

**Verification criteria:**
- [ ] 5 prompts produced
- [ ] All possibility-mode (territory is conceptual; candidates must be generated)
- [ ] All harness-internal (target the harness's own conceptual space)
- [ ] Size-comparable (territory yields ~5-10 candidates to surface)
- [ ] Each prompt's purpose-bias is explicit (the relevance criterion for candidates)
- [ ] Each prompt is self-contained
- [ ] R9 anti-patterns avoided
- [ ] Each prompt has explicit axis-stress signature (A1/A2/A5)

### P3 — CTRL pair (2 prompts)

**Question:** What 2 paste-ready prompt bodies (1 artifact-mode shape, 1 possibility-mode shape) anchor the noise floor by being structurally LOW-discrimination — likely producing the SAME finding under both /MVL+ and /MVL2+?

**Verification criteria:**
- [ ] 2 prompts produced
- [ ] 1 maps to artifact-mode territory (Group A analog; e.g., trivial enumeration shape)
- [ ] 1 maps to possibility-mode territory (Group B analog; e.g., pure-narrative shape)
- [ ] Each prompt is harness-internal (evaluable by user)
- [ ] Size-comparable to test prompts in respective groups
- [ ] Each prompt's "expected LOW discrim" reasoning stated explicitly
- [ ] Each prompt deliberately includes ≥1 R9 anti-pattern (CTRLs are the inverse of test prompts)

### P4 — Annotation layer (per-prompt)

**Question:** For each of the 12 prompts, what is the axis-stress signature (A1/A2/A4 for tests; explicit "none/anti-pattern" for CTRLs), the predicted discrimination strength (HIGH / MEDIUM-HIGH / MEDIUM / LOW), and the approximate size (territory item count)?

**Verification criteria:**
- [ ] 12 annotation rows (one per prompt)
- [ ] Each row: prompt-id + axis stress + predicted discrim strength + approximate size
- [ ] Size estimates use consistent units (item count or item-count-range)
- [ ] Test-prompt rows show HIGH or MEDIUM-HIGH discrim
- [ ] CTRL rows explicitly show LOW discrim + reason
- [ ] No missing rows; no extra rows

### P5 — Pair-selection guidance

**Question:** For each of Groups A and B, which 2-of-5 pair has the SHARPEST predicted discrimination signal — i.e., the user's run-budget-optimization recommendation if they only want to run a subset?

**Verification criteria:**
- [ ] 2 pair recommendations (1 for Group A, 1 for Group B)
- [ ] Each recommendation: 2 prompt-ids + why-they're-sharpest reasoning
- [ ] Reasoning cites P4 annotations (axis-stress profile + discrim strength)
- [ ] Total recommended-run subset = 2 + 2 + 2 CTRL = 6 prompts (vs 12 if running everything)
- [ ] Recommendation states budget trade-off (6 prompts vs 12 prompts)

### P6 — Warming protocol artifact

**Question:** What is the exact paste-ready warming-session protocol the user runs in the parent session before forking?

**Verification criteria:**
- [ ] 6 files listed per SD6 (explore.md + surfacing.md + MVL+ SKILL.md + MVL2+ SKILL.md + docs/desc.md + docs/discipline_taxonomy.md)
- [ ] Paths are absolute (or unambiguously project-relative)
- [ ] Reading order is specified
- [ ] An optional framing/intent statement is included (one-liner explaining what each warming read achieves)
- [ ] The protocol indicates when to fork (after the 6 reads)

### P7 — Discrimination criterion + stochasticity + run-plan + caveats artifact

**Question:** What is the exact paste-ready text the user keeps in hand (notes file or pinned doc) capturing the discrimination criterion, stochasticity policy, run plan, signal/noise thresholds, CTRL-pair role, commit-first protocol, and confound caveats?

**Verification criteria:**
- [ ] DC1 (per-item precision) + DC2 (trade-off depth) + DC3 (coverage robustness) defined with one-sentence rubrics
- [ ] Aggregate rule stated (per-criterion + holistic)
- [ ] Run policy: one run per fork-task
- [ ] Noise floor (~5-10% per-item divergence) and signal threshold (>20% per-item OR substantially-different aggregate verdict) stated
- [ ] CTRL-pair role (negative control; anchors noise floor empirically) stated
- [ ] Commit-first protocol stated (criterion frozen BEFORE runs)
- [ ] Two-step verification stated: (a) run all 4 test tasks + 2 CTRL; (b) per-criterion + aggregate comparison; (c) signal threshold check; (d) CTRL noise-floor check
- [ ] Confound caveats: harness-internal bias acknowledged; surfacing-authorship bias acknowledged

---

## Step 5 — Map Interfaces

| # | Source | Target | Flow | Direction |
|---|---|---|---|---|
| **HCR1** | P1 (Group A) | P4 (annotation) | Each Group A prompt-body → annotation reads it to extract axis-stress + estimate size + predict discrim | one-way |
| **HCR2** | P2 (Group B) | P4 (annotation) | Each Group B prompt-body → annotation reads it | one-way |
| **HCR3** | P3 (CTRL pair) | P4 (annotation) | Each CTRL prompt-body → annotation reads it (with expected-LOW-discrim marking) | one-way |
| **HCR4** | P1 (Group A) | P5 (pair selection) | 5 Group A prompts + their annotations → 2-of-5 pick | one-way (many-to-one) |
| **HCR5** | P2 (Group B) | P5 (pair selection) | 5 Group B prompts + their annotations → 2-of-5 pick | one-way (many-to-one) |
| **HCR6** | P4 (annotations) | P5 (pair selection) | Per-prompt discrim-strength values → ranking input | one-way |
| **HCR7** | All pieces P1-P7 | CONCLUDE | Compilation into finding.md per the inquiry's finding template | one-way (aggregation) |

### Assumptions-not-data check (Refinement note from §5)

Hidden-coupling probes:

| Assumption | Source | Target | Captured? | Hidden coupling risk |
|---|---|---|---|---|
| Prompts can be machine-readable enough to extract axis-stress | P1, P2 → P4 | P4 reads prompt body | YES — P4 verification requires explicit axis-stress in each prompt | Mitigated |
| CTRL size matches test-prompt size | P1, P2 → P3 | P3 needs size contract | YES — both P1/P2 and P3 verification criteria require size-comparable | Mitigated |
| Annotation discrim-strength values are calibrated consistently across rows | P4 internal | P5 reads them | PARTIAL — P4 verification requires consistent units; consistency across prompt-types could drift | Flagged as soft risk |
| Warming protocol order doesn't affect prompts' interpretability | P6 internal | parent-session warming → fork → prompts | YES — independence asserted (warming primes; prompts are self-contained) | Mitigated |
| Commit-first protocol is followed by user | P7 → user behavior | user reads criterion before running | OUTSIDE Innovation's scope | Acknowledged; deliverable lays out protocol but user-compliance is downstream |

No hidden-coupling failure mode active. One soft risk (annotation consistency) flagged for Critique.

---

## Step 6 — Order by Dependency

```
PHASE A (parallel):
  P1 — Group A 5 prompts            (independent; relies on SD3 advancing seeds)
  P2 — Group B 5 prompts            (independent)
  P6 — Warming-protocol artifact    (independent; SD6 input only)
  P7 — Criterion + run-plan artifact (independent; SD4 + SD5 + SD11 input)
                              │
                              ▼
PHASE B:
  P3 — CTRL pair                    (after size contract from P1+P2 stabilizes;
                                     can also be drafted in parallel if size is pre-committed)
                              │
                              ▼
PHASE C:
  P4 — Annotation layer             (after P1, P2, P3 produce prompts)
                              │
                              ▼
PHASE D:
  P5 — Pair-selection guidance      (after P4 produces annotations)
```

No circular dependencies. P1, P2, P6, P7 can be drafted truly in parallel; P3 has a soft dependency on size contract from P1+P2 (could be drafted in parallel if Innovation commits to a size up front like "~5-10 items per territory").

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions (always run)

| Dimension | Result | Evidence |
|---|---|---|
| **Independence** | PASS | Each piece's question is answerable using only its inputs + interfaces; no cross-piece reads beyond interfaces; P6 and P7 have NO cross-piece dependencies |
| **Completeness** | PASS | All 8 elements (E1-E8) mapped to pieces P1-P7; no aspect of Innovation's deliverable falls through gaps |
| **Reassembly** | PASS | Pieces + HCR1-HCR7 reconstruct the full deliverable: 12 prompts + annotations + pair guidance + warming + criterion/run-plan artifacts → CONCLUDE compilation |

### Determination-mechanism piece check (Refinement note from §7)

Load-bearing concept: "pair-selection ranking" depends on runtime determination — "which prompt has highest predicted discrim within its group."

- Is there a piece addressing HOW the determination is made? **YES — P5** (uses P4 annotations + axis-stress reasoning).
- Determination mechanism specified: rank by predicted discrim strength + axis-stress alignment with the strongest spec divergences.

**PASS.**

### Full evaluation (7 dimensions)

| Dimension | Result | Reasoning |
|---|---|---|
| Independence | PASS | As above |
| Completeness | PASS | As above |
| Reassembly | PASS | As above |
| Tractability | PASS | Each piece has 4-8 verification criteria; each is a focused Innovation pass at the per-piece Seed → Generate → Test cycle |
| Interface clarity | PASS | 7 HCRs explicit with source / target / flow type / direction; assumptions-not-data check applied; 1 soft risk flagged for Critique |
| Balance | PASS | P1 and P2 are equal-weight substantive generation; P3 is ~40% of P1's work (2 prompts vs 5); P4 is light per-row work; P5 is light synthesis; P6 and P7 are formatting (lightest). No piece dominates 80% of complexity. |
| Confidence | PASS | Top-down and bottom-up agree on all 7 boundaries |

### Failure modes

| Failure mode | Status | Evidence |
|---|---|---|
| Premature decomposition | NOT OBSERVED | Sensemaking produced 12 SDs first; decomposition operates on stable substrate |
| Wrong boundaries | NOT OBSERVED | Cuts at low-coupling regions (between modes; tests-vs-CTRL; content-vs-annotation; content-vs-metadata) |
| Hidden coupling | NOT OBSERVED | Assumptions-not-data check applied; one soft risk flagged (annotation consistency) for Critique |
| Missing pieces | NOT OBSERVED | All 8 elements mapped; determination-mechanism check passes |
| Over-decomposition | NOT OBSERVED | 7 pieces appropriate for deliverable; individual prompts not split further (they're atoms) |
| Ignoring dependencies | NOT OBSERVED | 4-phase order specified; parallel-when-independent identified |
| Imbalanced | NOT OBSERVED | Balance check above: no 80% piece |

All 7 failure modes AVOIDED.

---

## Self-Assessment Verdict

**PROCEED to Innovation with 7-piece Q-tree (P1-P7) + 7 HCRs.**

Innovation will:
- Execute per-piece Seed → Generate → Test at P1, P2, P3 (substantive generation)
- Execute lighter synthesis at P4, P5 (analytical work over P1-P3's outputs)
- Execute formatting at P6, P7 (transforming SD6 / SD4+SD5+SD11 into deliverable text)
- Apply CONTRARIAN-RETHINK Inversion-candidate at P5 — "what if NO pair within a group is meaningfully sharper than the others?" — test + adjudicate honestly
- At Innovation's assembly check, verify the 12 prompts + 2 CTRL + protocols form a methodologically-coherent test design

Property (v) NOT firing at any piece confirmed.
