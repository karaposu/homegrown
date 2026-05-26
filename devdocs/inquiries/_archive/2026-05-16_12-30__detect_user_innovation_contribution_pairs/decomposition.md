# Decomposition: Detect User-Innovation-Contribution Pairs

## User Input

`_branch.md` + sensemaking.md (VALID-IFF criterion + 7-category taxonomy + 3-tier evidence + initial tagging of 19 pairs) + exploration.md (19 candidate pairs with evidence excerpts).

LIGHT decomposition — 3–4 pieces.

---

## Step 1 — Coupling Topology

### The whole

Produce the deliverable: a validated list of user-innovation-contribution pairs, ready to serve as the evidence base for a future `/innovate` improvement inquiry. The list must carry, per pair: paths, evidence excerpt, evidence tier (STRONG/MEDIUM/WEAK), taxonomy tag(s) (T1–T7), and one-line characterization. Plus distribution summaries and a downstream-handoff note.

### Elements

1. **E1** — The 19 pair-records (raw output from Exploration).
2. **E2** — The VALID-IFF criterion (committed by Sensemaking).
3. **E3** — The 7-category taxonomy T1–T7 (committed by Sensemaking).
4. **E4** — The 3-tier evidence system STRONG/MEDIUM/WEAK (committed by Sensemaking).
5. **E5** — Initial tagging of the 19 pairs (committed by Sensemaking — provisional).
6. **E6** — Per-pair Source Input deep-read verification (only partially done in Exploration; some pairs were "scanned" not "confirmed").
7. **E7** — Tier-distribution + tag-distribution summaries.
8. **E8** — Downstream-handoff note (which categories are sparse and most-leverage for `/innovate` improvement).

### Coupling between elements

| Pair of elements | Coupling | Why |
|---|---|---|
| E1 ↔ E2 | STRONG | Criterion applies row-wise to E1; can't evaluate one without the other |
| E1 ↔ E3, E4, E5 | STRONG | Same reason — taxonomy + tiers + tagging operate row-wise |
| E2 ↔ E3, E4 | MODERATE | Criterion can fail a row before tagging/tiering is needed; logical pipeline |
| E5 ↔ E6 | STRONG | Initial tagging is provisional; verification reads Source Input directly to confirm or revise the tag |
| E1+E5+E6 (composite) ↔ E7 | MODERATE | Distributions aggregate the row-level outputs |
| E1+E5 ↔ E8 | WEAK | Handoff note draws on tag distribution but adds new content (sparseness analysis, downstream-question seed) |
| E2, E3, E4 internal | WEAK | These commitments are independent of each other from Sensemaking |

### Coupling map (visual)

```
           ┌────────────────────────────────────────────────┐
           │  STRONG cluster — row-wise validation cluster  │
           │                                                │
           │   E1 (rows) ─── E5 (tags) ─── E6 (verification)│
           │      │             │              │            │
           │      └── E2 ──────┴────── E3, E4 ┘            │
           │       (criterion)        (taxonomy + tiers)    │
           └────────────────────────────────────────────────┘
                                │
                          WEAK boundary
                                │
           ┌────────────────────────────────────────────────┐
           │  WEAK cluster — aggregate / handoff cluster    │
           │                                                │
           │   E7 (distributions)     E8 (handoff)          │
           └────────────────────────────────────────────────┘
```

Two clusters separated by a clean boundary. Within the validation cluster the work is dense row-wise; the aggregate cluster reads the validated rows and produces summary content.

### Boundaries (low-coupling regions)

- **B1** — Between row-level validation (E1, E2, E5, E6) and aggregate output (E7, E8). The validated rows are the interface.
- **B2** — Between the pair list (E1+E5 finalized) and the downstream-handoff note (E8). The note refers to the list's tag distribution but adds new analytical content.

---

## Step 2 — Detect Boundaries (Top-Down)

Cut at B1 (between row-level and aggregate). The validation cluster is one coherent piece — the criterion, the tier confirmation, the tagging all happen per row. The aggregate cluster splits at B2 — distributions are mechanical; the handoff note adds judgment.

Candidate cut: **3 pieces**:
- P1 — Row-level validation (criterion + tier-confirm + tag-finalize over the 19 rows)
- P2 — Aggregate distributions (mechanical: count by tier × tag)
- P3 — Downstream-handoff note (sparse-category leverage analysis)

Alternative cut: **4 pieces** by splitting P1 further: P1a criterion-application + P1b tier-confirm + P1c tag-finalize. But these three sub-pieces share the same per-row workflow — splitting introduces overhead without independence. Reject as Over-Decomposition.

**Committed cut: 3 pieces.**

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Atoms

- **A1** — A single pair-record (path + path + evidence + tier + tag + characterization).
- **A2** — A single Source-Input read (verifying a row's evidence-tier and tag).
- **A3** — A count operation (e.g., "T4 has N pairs").
- **A4** — A leverage-comment ("T2/T5/T7 are sparse and high-leverage").

### Atom-to-piece check

- A1 + A2 → P1 (row-level validation). Same workflow per row. ✓
- A3 → P2 (aggregate distributions). Mechanical counting. ✓
- A4 → P3 (handoff note). Analytical, draws on A3 outputs. ✓

No atom split across pieces; no atoms grouped that should be separate. **Boundaries confirmed.**

---

## Step 4 — Express as Question Tree

### P1 — How should each of the 19 candidate pairs be validated, tagged, and tiered?

Verification criteria:
- [ ] For each of the 19 rows: pair criterion (VALID-IFF predicate) applied; verdict VALID or INVALID stated.
- [ ] For each VALID row: evidence tier confirmed (STRONG/MEDIUM/WEAK) by reading the Follow-up's Source Input or Changes from Prior section directly (not just relying on Exploration's preliminary tier).
- [ ] For each VALID row: taxonomy tag(s) (T1–T7) assigned, with the diagnostic question explicitly answered for each tag.
- [ ] For each VALID row: one-line characterization rewritten in light of confirmed evidence.
- [ ] For each INVALID row: reason for invalidation stated (which clause of the VALID-IFF predicate fails).
- [ ] Output: a polished pair list ready for the finding's main payload.

### P2 — What does the tier × tag distribution look like across the validated pairs?

Verification criteria:
- [ ] Tier distribution: count of STRONG / MEDIUM / WEAK across validated pairs.
- [ ] Tag distribution: count of T1 / T2 / T3 / T4 / T5 / T6 / T7 across validated pairs (with multi-tag rows counted once per tag).
- [ ] Tier × tag matrix (optional but useful): 3 × 7 matrix.
- [ ] Verification that the validated count is ≥ 10 (user's quota).

### P3 — Which taxonomy categories carry the most downstream-analysis leverage for the future `/innovate` improvement inquiry?

Verification criteria:
- [ ] Identify the sparsest categories (lowest counts after validation).
- [ ] State, per sparse category, why scarcity in the corpus is structurally meaningful (the move is rare; the discipline is unlikely to generate it natively).
- [ ] Identify the densest categories.
- [ ] State, per dense category, what their density means (frequent user-intervention pattern; high-volume opportunity for the discipline to learn).
- [ ] Output: a 5–8 line downstream-handoff note that the future inquiry's branching prompt can directly cite.

---

## Step 5 — Map Interfaces

### Interface I1 — Sensemaking → P1

- **Source:** sensemaking.md (committed: VALID-IFF predicate + 7-category taxonomy + 3-tier system + initial tagging)
- **Target:** P1
- **What flows:** the criterion (Boolean predicate), the taxonomy definitions (T1–T7 with diagnostic questions), the tier definitions, the initial tagging (treated as provisional input, NOT as final output).
- **Direction:** one-way (Sensemaking → P1)
- **Assumption check:** P1 assumes the initial tagging is a starting point for verification, not a final commitment. The "provisional" status is explicit in Sensemaking's SV5. ✓ No hidden assumption.

### Interface I2 — Exploration → P1

- **Source:** exploration.md (19 pair-records with evidence excerpts + paths)
- **Target:** P1
- **What flows:** the 19 candidate pair-records.
- **Direction:** one-way.
- **Assumption check:** P1 assumes the paths are correct and the Follow-up files exist + are readable. ✓ Verified in Exploration.

### Interface I3 — P1 → P2

- **Source:** P1 (validated pair list with finalized tier + tag per row)
- **Target:** P2 (distributions)
- **What flows:** the validated row set — only the rows that SURVIVE the criterion are aggregated.
- **Direction:** one-way.
- **Assumption check:** P2 assumes the survivor set is the "validated" set, not the raw 19. ✓ Explicit in the criterion's name (VALID-IFF).

### Interface I4 — P1 → P3

- **Source:** P1
- **Target:** P3 (handoff note)
- **What flows:** the validated rows + their tag assignments — P3 needs to count and analyze by tag.
- **Direction:** one-way.
- **Assumption check:** P3 assumes the validated rows are stable (P1 has converged). ✓ Sequential ordering enforces this.

### Interface I5 — P2 → P3

- **Source:** P2 (distributions)
- **Target:** P3
- **What flows:** the tag-distribution counts (P3 uses these to identify sparse / dense categories).
- **Direction:** one-way.
- **Assumption check:** P3 assumes the counts in P2 are correct and use the same set as P3's inputs. ✓ Both flow from P1's output.

### Assumptions-not-data check

- P1 ↔ P2: P2 trusts P1's "validated" set. If P1 changes its mind mid-flight (e.g., re-tier a row), P2 must re-run. Sequential ordering prevents this issue.
- P1 ↔ P3: same trust pattern.
- P3 ↔ P2: P3 uses P2's counts as fact. If P3 disagrees with a count, that signals a P2 error, not a P3 problem.

**No hidden coupling identified.**

---

## Step 6 — Dependency Order

```
   Sensemaking + Exploration (inputs)
              │
              ▼
            ┌────┐
            │ P1 │  (row-level validation — must come first)
            └─┬──┘
              │
        ┌─────┴─────┐
        ▼           ▼
      ┌────┐     ┌────┐
      │ P2 │ ─── │ P3 │   (P3 depends on both P1 and P2)
      └────┘     └────┘
```

- **P1 first** — produces validated rows.
- **P2 second** — aggregates distributions from P1's output.
- **P3 third** — synthesizes handoff note from P1's rows + P2's counts.

P2 and P3 cannot be parallel because P3 reads P2's counts.

**Execution order: P1 → P2 → P3.**

---

## Step 7 — Self-Evaluation (Full — 7 dimensions, despite light decomposition)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | P1 ✓ (uses Sensemaking + Exploration as input, produces validated list). P2 ✓ (consumes P1's output via explicit interface). P3 ✓ (consumes P1 + P2 outputs). **PASS** |
| **Completeness** | Do the pieces cover the whole? | The whole is "validated pair list + supporting summaries for the future inquiry." P1 produces the list, P2 produces the distributions, P3 produces the handoff note. CONCLUDE compiles the finding. **PASS** |
| **Reassembly** | Pieces + interfaces = whole? | Given validated rows (P1) + distributions (P2) + handoff note (P3), CONCLUDE assembles finding.md. The finding's structure: pair list (P1) + distribution summary (P2) + handoff note (P3) + standard finding boilerplate. Reconstruction is complete. **PASS** |
| **Tractability** | Is each piece small enough for a single focused pass? | P1 — 19 rows × verification per row; large but mechanical with the predicate. ~30–60 min focused pass. P2 — counting; ~5 min. P3 — analytical, ~10 min. **PASS** |
| **Interface clarity** | Are all cross-piece flows explicit? | 5 interfaces mapped (I1–I5), all with assumption-check. **PASS** |
| **Balance** | Is complexity proportional? | P1 carries ~80% of the work. This is HONEST imbalance — the row-level validation IS the load-bearing operation; P2/P3 are mechanical/analytical follow-ups. Splitting P1 further would over-decompose. **PASS WITH NOTE** (imbalance is intrinsic to the problem, not a decomposition error). |
| **Confidence** | Top-down + bottom-up agree? | Steps 2 and 3 agreed on the 3-piece cut. **PASS** |

### Determination-mechanism piece check

Load-bearing concept whose use depends on a runtime determination? The VALID-IFF predicate IS the determination mechanism. P1's verification criteria explicitly include "criterion applied; verdict VALID/INVALID stated." The mechanism is included as part of P1. **PASS.**

### Failure-mode check

| Mode | Risk | Status |
|---|---|---|
| Premature Decomposition | Decomposing before Sensemaking clarified | Sensemaking complete; criterion + taxonomy + tiers all committed | ✓ Avoided |
| Wrong Boundaries | Cutting through high-coupling regions | Cut at low-coupling boundary B1 (between row-level and aggregate); within-cluster work stays together | ✓ Avoided |
| Hidden Coupling | Pieces share unstated assumptions | Interface map + Assumptions-not-data check applied; all assumptions verified | ✓ Avoided |
| Missing Pieces | Whole not covered | Reassembly check passed; standard finding boilerplate handled by CONCLUDE | ✓ Avoided |
| Over-Decomposition | Too-small pieces | 3 pieces is the floor for this problem (couldn't justify going lower without re-merging P2 into P3, but they're independently testable). | ✓ Avoided |
| Ignoring Dependencies | Wrong order | Order P1 → P2 → P3 enforced | ✓ Avoided |
| Imbalanced Decomposition | One piece dominates | P1 holds 80%; flagged as intrinsic (not artifact of bad cut) | ⚠ Noted but accepted |

---

## Final Deliverable Summary

### Coupling Map
Two clusters: **row-level validation** (E1+E2+E3+E4+E5+E6, STRONG coupling internally) and **aggregate handoff** (E7+E8, weak coupling internally and to the validation cluster).

### Question Tree (3 pieces)
- **P1** — How should each of the 19 candidate pairs be validated, tagged, and tiered? (Heavy lift; ~80% of Innovation work)
- **P2** — What does the tier × tag distribution look like across validated pairs?
- **P3** — Which taxonomy categories carry the most downstream-analysis leverage?

### Interface Map
5 interfaces: I1 Sensemaking→P1, I2 Exploration→P1, I3 P1→P2, I4 P1→P3, I5 P2→P3. All one-way. All assumptions explicit.

### Dependency Order
P1 → P2 → P3 (strict sequential; no parallel opportunity given P3 needs P2).

### Self-Evaluation
7/7 dimensions PASS (Balance flagged as intrinsic imbalance — accepted).

### Failure-modes
6/7 avoided cleanly; Imbalanced flagged but accepted (P1's dominance is structural, not decomposition error).

---

## Self-Assessment

**PROCEED.**

Decomposition is genuinely light (3 pieces) and matches the data-producing nature of the inquiry. Innovation can produce P1's validated list + P2's distributions + P3's handoff note in sequence. Critique can test each piece independently (criterion-application audit on P1; counting audit on P2; leverage-claim audit on P3). Ready for Innovation.

---

## Telemetry

- **Pieces:** 3 (P1 row-level validation / P2 distributions / P3 handoff note)
- **Interfaces:** 5
- **Self-evaluation dimensions:** 7 (full, despite light decomposition)
- **Pass rate:** 7/7 (Balance with note)
- **Failure-modes checked:** 7
- **Failure-modes avoided:** 6 clean + 1 intrinsic-imbalance-accepted
- **Determination-mechanism check:** PASS
- **Coupling-map clusters:** 2
