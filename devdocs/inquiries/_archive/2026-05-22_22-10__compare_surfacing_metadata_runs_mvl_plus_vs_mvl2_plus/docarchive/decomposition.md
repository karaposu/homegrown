# Decomposition — compare surfacing metadata runs (MVL+ vs MVL2+)

## The whole being decomposed

The comparative-verdict deliverable. Sensemaking SV6 committed: verdict V2 (B better) + V4 (different-strengths) supporting; primary criterion = user-question-fidelity per the user's "for given query" anchor; confound = Option γ (shapes explanation, doesn't block); D4 anti-regression = TIE (different valid philosophies); scope = N=1.

Sensemaking named 5 candidate pieces: (i) per-dimension comparison table; (ii) verdict statement; (iii) confound paragraph; (iv) scope-limitation paragraph; (v) V4 different-strengths supporting characterization. Decomposition refines these into independently-coherent pieces with explicit interfaces.

---

## Step 1 — Coupling Topology

### Elements

| Id | Element |
|---|---|
| E1 | Per-dimension comparison table (12 dimensions × 2 inquiries) |
| E2 | Verdict statement (V2 = B better) |
| E3 | Primary-criterion explanation (user-question-fidelity anchored on "for given query") |
| E4 | Secondary-dimensions framing (A's strengths that do NOT overturn the verdict) |
| E5 | Confound paragraph (self-reference dynamic of `/MVL2+`) |
| E6 | Scope-limitation paragraph (N=1; cannot generalize to runner-level claims) |
| E7 | V4 different-strengths supporting characterization |
| E8 | Citations to specific finding sections (evidence pointers — live inside table cells) |
| E9 | LLM-run randomness mention (deferred `ab_stability_test` reference) |
| E10 | D4 (anti-regression) TIE explanation (A and B use different valid philosophies) |

### Pairwise coupling

| Pair | Coupling | Reason |
|---|---|---|
| E1 ↔ E2 | HIGH | The table is the evidence base; the verdict is what the table justifies |
| E1 ↔ E3 | HIGH | Primary criterion sets the dimension WEIGHTING in the table |
| E1 ↔ E8 | HIGH | Citations live inside table cells |
| E1 ↔ E10 | HIGH | D4 TIE is a specific cell in the table |
| E2 ↔ E3 | HIGH | Verdict's "why" IS the primary-criterion explanation |
| E2 ↔ E4 | MODERATE | Secondary dimensions are counterweights that don't overturn the verdict |
| E2 ↔ E5 | HIGH | Confound paragraph is part of the verdict's "why" (explanation layer) |
| E2 ↔ E6 | MODERATE | Scope-limitation is what the verdict DOES NOT claim |
| E2 ↔ E7 | HIGH | V4 supporting characterization IS the verdict's secondary framing |
| E5 ↔ E6 | MODERATE | Both belong to "honest limits" — different limits (confound is structural; scope is statistical-power-like) |
| E5 ↔ E9 | HIGH | Confound + LLM-run randomness are paired honest-limit elements |
| E6 ↔ E9 | HIGH | Scope + run-variance are paired honest-limit elements |

### Clusters

| Cluster | Members | Why grouped |
|---|---|---|
| **CL-VERDICT** | E2, E3, E4, E7 | The user-facing conclusion: verdict + primary reasoning + secondary-dimensions framing + V4 supporting characterization |
| **CL-EVIDENCE** | E1, E8, E10 | The per-dimension supporting structure: table + citations + D4 TIE-cell |
| **CL-LIMITS** | E5, E6, E9 | The honest limits: confound + scope + run-variance — what the verdict does NOT claim |

### Valleys (low coupling between clusters)

- **CL-VERDICT / CL-EVIDENCE:** clean. The verdict reads at the top; evidence supports below. Bounded by interface (the table rolls up to the verdict).
- **CL-VERDICT / CL-LIMITS:** clean. Verdict declares positive claims; limits declare negative claims (what's excluded). Bounded by interface (limits exclude what verdict claims).
- **CL-EVIDENCE / CL-LIMITS:** clean. Evidence is per-dimension positioning; limits are meta-level about the verdict as a whole. Bounded by interface (confound paragraph interprets some per-dimension data, e.g., A's depth on structural-rigor).

---

## Step 2 — Boundaries (Top-Down)

Natural cut points in order of confidence:

1. **CL-VERDICT / CL-EVIDENCE boundary** — verdict statement sits above the evidence table; the table justifies but does not overlap. Clean.
2. **CL-VERDICT / CL-LIMITS boundary** — verdict claims X; limits say "verdict does not claim Y." No overlap; complementary.
3. **CL-EVIDENCE / CL-LIMITS boundary** — confound paragraph references specific dimension cells (e.g., D6 structural rigor) but the bulk of CL-LIMITS is meta-level. Low traffic across the boundary.

---

## Step 3 — Bottom-Up Validation

### Atoms (irreducible elements)

| Atom | What it is | Appears in |
|---|---|---|
| A1 | The verdict string ("B better for given query") | CL-VERDICT (E2) |
| A2 | The primary criterion name ("user-question-fidelity") | CL-VERDICT (E3), CL-EVIDENCE (E1 — table's weighting reference) |
| A3 | The user's "for given query" phrase | CL-VERDICT (E3) |
| A4 | Each dimension D1-D12 | CL-EVIDENCE (E1) |
| A5 | Each citation to a specific finding section | CL-EVIDENCE (E1, E8) |
| A6 | The confound name ("self-reference dynamic of `/MVL2+`") | CL-LIMITS (E5), CL-EVIDENCE (E1 — table cells referencing the confound) |
| A7 | The scope-limitation statement ("N=1; cannot generalize") | CL-LIMITS (E6) |
| A8 | The V4 phrase ("different-strengths-different-jobs") | CL-VERDICT (E7) |
| A9 | The D4 TIE statement | CL-EVIDENCE (E10), CL-VERDICT (E3 — referenced as "both address both failure modes") |

### Atom-cluster alignment

- A1, A3, A8 → CL-VERDICT (correctly grouped).
- A4, A5 → CL-EVIDENCE (correctly grouped).
- A7 → CL-LIMITS (correctly grouped).
- A2 spans CL-VERDICT and CL-EVIDENCE — shared identifier; propagates via interface I1.
- A6 spans CL-LIMITS and CL-EVIDENCE — shared identifier; propagates via interface I3.
- A9 spans CL-EVIDENCE and CL-VERDICT — shared claim; propagates via interface I1.

**Are atoms incorrectly split?** No — shared atoms route through well-defined interfaces.

**Bottom-up + top-down agreement:** HIGH confidence.

---

## Step 4 — Question Tree

The decomposition produces 3 top-level pieces (one per cluster):

### P1 — Verdict + Primary Reasoning (CL-VERDICT root)

**Question:** What is the verdict and its primary reasoning, including the secondary V4 (different-strengths) supporting characterization?

**Verification criteria:**
- [ ] Verdict statement is declared explicitly: **"B (20-35 via `/MVL+`) did a better job for the user's given query than A (16-00 via `/MVL2+`)."**
- [ ] Primary criterion is named: **user-question-fidelity**, anchored to the user's "for given query" phrase.
- [ ] The user's singular "what kind of thing we can add" phrasing is cited as the primary structural ground.
- [ ] Both-failure-modes-addressed TIE is acknowledged (both A and B handle the user's Failure-mode-A signal + Failure-mode-B guard).
- [ ] Secondary-dimensions framing: A's strengths (completeness, process rigor, adversarial-test rigor, inquiry-template compliance) are named explicitly but framed as not overturning the primary verdict.
- [ ] V4 (different-strengths-different-jobs) supporting characterization is included.

### P2 — Per-Dimension Comparison Evidence (CL-EVIDENCE root)

**Question:** What is the dimension-by-dimension comparison evidence, including weights, per-inquiry positioning, citations, and the D4 anti-regression TIE explanation?

**Verification criteria:**
- [ ] Per-dimension table includes the 12 candidate dimensions from exploration (D1-D12) with explicit weight (CRITICAL / HIGH / MEDIUM).
- [ ] Weights match sensemaking SV6's decision: D1 user-question-fidelity = CRITICAL-PRIMARY; D2 completeness = MEDIUM; D3 parsimony = HIGH; D4 anti-regression = CRITICAL (but TIE); D5 user-language alignment = HIGH; D6 structural rigor = MEDIUM; D7 ship-readiness = MEDIUM; D8 future-extension framing = HIGH; D9 confound-acknowledgment = MEDIUM (this is the comparison inquiry's responsibility, not the priors'); D10 frame-preservation = HIGH; D11 adversarial-test rigor = MEDIUM; D12 inquiry-template compliance = MEDIUM.
- [ ] For each dimension, per-inquiry positioning (A vs B) is stated with brief reasoning.
- [ ] Citations to specific finding sections are included for non-trivial cells.
- [ ] D4 (anti-regression) explicitly marked TIE with the different-philosophies note (A's failure-mode rows at §4.2 vs B's reaffirmation at §2.1; both project-consistent).
- [ ] Per-dimension positioning rolls up consistently to the P1 verdict.

### P3 — Honest Limits (CL-LIMITS root)

**Question:** What does the verdict NOT claim, what are its confounds, and what are its scope limitations?

**Verification criteria:**
- [ ] Confound paragraph: `/MVL2+`'s self-reference dynamic explained explicitly. The upstream `/surfacing` discipline IS the discipline being modified, which naturally produces deeper engagement with surfacing's structural elements (NOT-list, vocabulary, failure-mode catalog). This is a different cognitive operation, not a quality difference.
- [ ] Scope-limitation paragraph: N=1 explicitly stated; cannot generalize to "/MVL+ is always better" or "/MVL2+ is always worse" or vice versa. The verdict applies to THIS specific pair.
- [ ] LLM-run randomness mention: the project's deferred `ab_stability_test` protocol (per `devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/`) would be needed to bound LLM run-to-run variance. This is not done; per-run randomness contribution to the divergence is unobserved.
- [ ] What the verdict DOES claim is explicitly distinguished from what it DOES NOT claim.
- [ ] Pedagogical-value secondary reading is named as out-of-scope (the user might LEARN more from A's deeper engagement; but the verdict is on "did a better job for given query," not "would teach me more").

---

## Step 5 — Interface Map

### Assumptions-not-data check

- **P1 → assumes** the verdict (V2 = B better) is committed by sensemaking SV6. **Verified.**
- **P2 → assumes** the dimensions D1-D12 are defined by exploration R2. **Verified.**
- **P3 → assumes** the confound and scope limitations are named by sensemaking (Option γ + N=1). **Verified.**
- **Hidden coupling risk HC1:** the verdict in P1 must MATCH the conclusion P2's weighted table rolls up to. **Resolution:** P2's table must include the dimension WEIGHTS explicitly; otherwise an unweighted reader counting cells would see A winning on more dimensions (A wins D2/D6/D11/D12; B wins D1/D3/D5/D10) and the verdict would look inconsistent with the table. The weighting (D1 critical-primary) makes the roll-up coherent.
- **Hidden coupling risk HC2:** P3's confound paragraph must NOT contradict P1's verdict. The confound shapes the EXPLANATION (why A engaged deeper); it does not flip the verdict. **Resolution:** P3 explicitly states "the confound shapes explanation, not the verdict" — per sensemaking's Option γ commitment.

### Interfaces

| # | Source → Target | What flows | Direction | Type |
|---|---|---|---|---|
| **I1** | P2 → P1 | Weighted per-dimension positioning rolls up to the verdict | one-way | prerequisite (the table's contents justify the verdict; weights determine the roll-up) |
| **I2** | P1 → P3 | The verdict's positive claims define what the limits-section excludes | one-way | contract (limits explicitly say "verdict does not claim X") |
| **I3** | P2 ⇄ P3 | The confound paragraph (P3) interprets specific per-dimension data (P2) — e.g., A's depth on D6 structural rigor is "partly attributable to self-reference dynamic" | bidirectional via shared identifier (A6 confound name) | informational (the table's cell references the confound; the confound paragraph references the cell) |

---

## Step 6 — Dependency Order

```
   [exploration's R2 — 12 candidate dimensions D1-D12]
                      ↓ I1 input
   ┌──────────────────────────────────────┐
   │ P2 — Per-Dimension Comparison Table  │
   │     (with weights + citations +      │
   │      D4 TIE explanation)             │
   └─────────────┬────────────────────────┘
                 │ I1 (roll-up)
                 ↓
   ┌──────────────────────────────────────┐
   │ P1 — Verdict Statement +             │
   │     Primary Reasoning +              │
   │     V4 Supporting Characterization   │
   └─────────────┬────────────────────────┘
                 │ I2 (contract)
                 ↓
   ┌──────────────────────────────────────┐
   │ P3 — Honest Limits                   │
   │     (confound + scope + run-variance)│
   └──────────────────────────────────────┘
                ↑↓ I3 (informational)
                ↑ (back-reference to P2's cells)
```

**Dependency order (linear, no cycles):**

1. **P2** (Per-Dimension Comparison Evidence) — depends on exploration R2's dimensions list; writes first.
2. **P1** (Verdict + Primary Reasoning + V4 Supporting) — depends on P2's roll-up via I1; writes second.
3. **P3** (Honest Limits) — depends on P1's positive claims via I2 (so P3 can say what P1 doesn't); references back to P2 via I3 for confound-interpretation. Writes third.

No circular dependencies. The graph is a DAG.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

| Dimension | Check | Pass? |
|---|---|---|
| **Independence** | Each piece answerable independently with defined interfaces? | P2 needs exploration's D1-D12 input; P1 needs P2's roll-up; P3 needs P1's verdict statement. Each piece is independent within its scope given upstream interface input. PASS. |
| **Completeness** | Pieces cover the whole? | P1+P2+P3 cover: verdict (P1), evidence (P2), and honest limits (P3). The user asked for verdict + reasoning + (implicit) honest treatment. All addressed. The Goal-criterion items (a) declared verdict, (b) explicit dimensions, (c) per-dimension comparison, (d) overall reasoning, (e) confound acknowledgment — all covered. PASS. |
| **Reassembly** | Pieces + interfaces reconstruct the whole? | P2's per-dimension positioning (with weights) → P1 declares the verdict that the weighting justifies → P3 names what the verdict doesn't claim and the confound that shapes the explanation. Together = full comparative deliverable. PASS. |

### Determination-mechanism piece check (refinement note)

The Q-tree includes a load-bearing concept whose use depends on a runtime determination: the verdict (V2) depends on a runtime determination of "better job" via the user-question-fidelity criterion. Does the Q-tree include a piece addressing HOW that determination is made?

**YES** — P1 includes the primary criterion (sensemaking's Ambiguity 1 resolution); P2 includes the weighted dimensions with explicit weights from sensemaking's SV6. Together they specify the determination mechanism: weighted dimensions roll up to a verdict via D1's critical-primary weight. PASS.

### Full 7 dimensions

| Dim | Check | Pass? |
|---|---|---|
| Independence | (above) | PASS |
| Completeness | (above) | PASS |
| Reassembly | (above) | PASS |
| **Tractability** | Each piece small enough for one focused pass? | P1: 1-2 paragraphs (verdict + primary reasoning + V4 supporting). P2: 12-row table with weights + per-cell positioning + citations. P3: 2-3 paragraphs (confound + scope + run-variance). All tractable. PASS. |
| **Interface clarity** | All cross-piece flows explicit; no hidden coupling? | I1, I2, I3 mapped. HC1 (verdict-table alignment via explicit weights) and HC2 (confound-vs-verdict separation) identified and resolved at design time. PASS. |
| **Balance** | Complexity roughly proportional? | P2 is the heaviest (12-row table with citations is naturally larger than verdict statement or limits paragraphs). P1 and P3 are lighter. P2 imbalance is expected — evidence tables are naturally heavier than verdict statements or limit paragraphs. ACCEPTABLE. |
| **Confidence** | Top-down + bottom-up agree on boundaries? | YES — Step 3 confirmed atom grouping matches top-down clusters; shared atoms route via interfaces. HIGH confidence. PASS. |

**7/7 dimensions PASS.**

### Failure-mode check

| Mode | Observed? | Reason |
|---|---|---|
| Premature decomposition | NO | Sensemaking SV6 stabilized the design space before decomposition |
| Wrong boundaries | NO | Verdict / evidence / limits is a natural partition; bottom-up atom grouping confirms |
| Hidden coupling | TWO IDENTIFIED, RESOLVED | HC1 (verdict-table weighting) and HC2 (confound-vs-verdict separation) surfaced and resolved at design time |
| Missing pieces | NO | Determination-mechanism piece check passes (P1 + P2 together specify the verdict's HOW); all goal criteria covered |
| Over-decomposition | NO | Sub-elements (e.g., D4 TIE explanation, V4 supporting characterization) stayed within parent pieces; not artificially split |
| Ignoring dependencies | NO | DAG order P2 → P1 → P3 explicit; no cycles |
| Imbalanced decomposition | SLIGHT, expected | P2 heavier (table is naturally larger); not extreme |

### Self-Assessment Verdict

**PROCEED.**

- Coupling topology perceived; 3 clusters identified; boundaries validated bottom-up with HIGH confidence.
- Question tree has 3 pieces (P1, P2, P3) with explicit verification criteria.
- Interface map has 3 interfaces (I1, I2, I3) with explicit flow + direction + type.
- Dependency order is a DAG; no circular dependencies.
- Self-evaluation passes 7/7 dimensions.
- Two hidden-coupling risks (HC1, HC2) surfaced and resolved at decomposition time.
- Determination-mechanism piece check passes.

**Hand to innovation.** Innovation will generate concrete content for each piece — specifically the verdict text (P1), the populated 12-row table with per-cell positioning + citations + weights (P2), and the confound + scope + run-variance paragraphs (P3). Critique will adversarially test the generated content.
