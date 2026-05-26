# Decomposition — routeman implementation frontier questions

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-23_15-20__routeman_implementation_frontier_questions/_branch.md`

## Whole being decomposed

The work of converting 23 surfaced candidate frontier questions (from `surfacing.md`) into a final list of exactly 10 questions with per-question metadata and tier assignments, by applying the 8 operational constraints stabilized in `sensemaking.md` SV6 (3-condition frontier test, 3-dimension hardness, 6-gating-type spread, 12-region axis spread, 2-candidate consolidation cap, already-flagged elevation rule, not-yet-shipped accommodation rule, 2-tier presentation).

---

## Step 1 — Coupling Topology

### Element inventory

| Element | Description |
|---|---|
| e1 | The 23-candidate pool (input from surfacing) |
| e2 | 3-condition frontier test (the eligibility filter — no-current-answer + gating + net-new) |
| e3 | Already-flagged elevation rule (Q22 NOT eligible; Q18 ELIGIBLE; Q10 borderline — per sensemaking verdicts) |
| e4 | Not-yet-shipped accommodation rule (Q4 valid; Q21 valid) |
| e5 | 2-candidate consolidation rule (Q12⊂Q9 confirmed; Q14⊂Q13 confirmed) |
| e6 | 3-dimension hardness test (breadth + depth + articulation; ≥2 of 3 required) |
| e7 | 6-gating-type taxonomy + ≥4-type spread requirement |
| e8 | 12-region axis spread requirement (≥6 of 12) |
| e9 | 2-tier presentation (Tier 1 must-resolve + Tier 2 watch-list) |
| e10 | Per-question 5-field metadata (text + why-frontier + what-it-gates + hardness-tags + resolution-path) |
| e11 | The final 10-question list (deliverable) |

### Coupling perception (pairwise propagation)

**Cluster A — Eligibility filter** {e2, e3, e4}: all three apply to the 23 candidates to determine which are eligible for selection. Sequentially applied; tightly coupled because each candidate must pass all three filters.

**Cluster B — Consolidation** {e5}: applied to the eligible candidates to merge overlapping ones. Operates on Cluster A's output.

**Cluster C — Ranking + spread** {e6, e7, e8}: applied to the eligible-and-consolidated candidates to rank by hardness AND check axis-spread + gating-type-spread. The three rules interact — top-hardness ranking may need to be perturbed to satisfy spread requirements.

**Cluster D — Presentation** {e9}: applied to the selected 10 to organize into tiers.

**Cluster E — Annotation** {e10}: per-question metadata applied to the 10.

**Cluster F — Output** {e11}: the deliverable.

### Inter-cluster coupling

| From → To | Coupling | Direction | Why |
|---|---|---|---|
| e1 → A | strong | one-way | Filter operates on the pool |
| A → B | strong | one-way | Consolidation operates on eligible-filtered candidates |
| A + B → C | strong | one-way (joint) | Ranking + spread operate on the post-filter, post-consolidation candidate set |
| C → D | strong | one-way | Selection of 10 is the input to tier-assignment |
| D → E | medium | one-way | Annotation needs tier assignment to set the per-question metadata's tier field |
| E → e11 | strong | one-way | Deliverable IS the annotated, tiered 10 |

This is a near-linear pipeline with one synchronization point (Cluster C consumes both A and B outputs jointly).

### Coarse coupling map (peaks and valleys)

**Peaks:** Cluster A (filter), Cluster C (rank + spread), Cluster D (tier), Cluster E (metadata).
**Valley between A and B:** weak — consolidation operates on a different aspect (overlap detection) than the filter (eligibility).
**Valley between C and D:** the "select 10" output is the natural seam — the work that produces the 10 differs from the work that organizes them.
**Valley between D and E:** weak — metadata could be written before tier assignment, but the metadata's tier field would be unset.

---

## Step 2 — Boundaries Top-Down

From the coupling map, the natural cut points yield 6 pieces:

- **P1 — Apply the eligibility filter.** Filter the 23 candidates through the 3-condition test + already-flagged elevation rule + not-yet-shipped accommodation rule.
- **P2 — Consolidate overlapping candidates.** Apply the 2-candidate consolidation rule (Q12⊂Q9, Q14⊂Q13 confirmed by sensemaking).
- **P3 — Rank by hardness + check spread.** Apply the 3-dimension hardness test to remaining candidates; verify axis-spread + gating-type-spread.
- **P4 — Select exactly 10.** From the ranked + spread-checked candidates, pick exactly 10.
- **P5 — Assign tiers.** Assign each of the 10 to Tier 1 (must-resolve) or Tier 2 (watch-list).
- **P6 — Write per-question metadata.** For each of the 10, populate the 5-field metadata structure.

---

## Step 3 — Validate Bottom-Up

### Atoms

| Atom | Description | Goes to |
|---|---|---|
| a1-a23 | The 23 surfaced candidates | input to P1 |
| a24 | Per-candidate eligibility verdict (eligible / not-eligible / borderline) | output of P1 |
| a25 | Consolidation pairs (Q12⊂Q9; Q14⊂Q13 + any new) | output of P2 |
| a26 | Per-candidate hardness tags (which of 3 sub-dimensions apply) | output of P3 |
| a27 | Region coverage check + gating-type coverage check | output of P3 |
| a28 | Final 10-question identity list | output of P4 |
| a29 | Per-question tier assignment | output of P5 |
| a30-a39 | Per-question 5-field metadata (one per question) | output of P6 |

All atoms map to exactly one piece. Top-down and bottom-up agree. HIGH confidence.

---

## Step 4 — Question Tree

### P1 — Apply the eligibility filter

**Question:** Of the 23 surfaced candidates, which pass the 3-condition frontier test (no-current-answer + gating + net-new), the already-flagged elevation rule (Q22 NOT eligible per sensemaking; Q18 ELIGIBLE per sensemaking; Q10 borderline — adjudicate), and the not-yet-shipped accommodation rule (Q4 + Q21 confirmed valid)?

**Verification criteria:**
- [ ] Each of the 23 candidates has a recorded eligibility verdict (eligible / not-eligible / borderline-adjudicated).
- [ ] Verdicts on already-flagged candidates respect sensemaking's specific verdicts (Q22 NOT eligible; Q18 ELIGIBLE; Q10 borderline — explicitly adjudicated).
- [ ] Q4 (multi-head handoff) and Q21 (pre-maturity emission) recorded as eligible per accommodation rule.
- [ ] Non-eligible verdicts cite which of the 3 conditions the candidate fails.

### P2 — Consolidate overlapping candidates

**Question:** Among the eligible candidates from P1, which qualify for the 2-candidate consolidation rule (tight overlap on gating type + region + operational target), and what are the merged-question texts?

**Verification criteria:**
- [ ] Q12 (pointer WHY anchor) merged into Q9 (F-prescr generation mechanism) per sensemaking verdict.
- [ ] Q14 (L2-A threshold calibration) merged into Q13 (LAYER-2 audit cadence + runner) per sensemaking verdict.
- [ ] Any other tight overlaps among eligible candidates evaluated for merge; verdicts recorded.
- [ ] Each merged question explicitly enumerates the sub-aspects of its constituent candidates.
- [ ] No 3+ candidate merges (cap honored).

### P3 — Rank by hardness + check spread

**Question:** Among the eligible-and-consolidated candidates, which are top-hard by the 3-dimension hardness test, and does the top-N set satisfy axis-spread (≥6 of 12 regions) + gating-type spread (≥4 of 6 types)?

**Verification criteria:**
- [ ] Each eligible-consolidated candidate has hardness sub-dimensions tagged (breadth / depth / articulation).
- [ ] Candidates with only 1 sub-dimension tagged are marked as "trivially-hard" (defect; demote).
- [ ] Candidates are ranked by hardness (2-of-3 minimum; 3-of-3 highest-priority).
- [ ] Region coverage of the top candidates is computed (how many of 12 regions).
- [ ] Gating-type coverage of the top candidates is computed (how many of 6 types).
- [ ] If top-10 set fails axis-spread or gating-type-spread, ranking is adjusted (promote a lower-hardness candidate to satisfy spread).

### P4 — Select exactly 10

**Question:** From the ranked candidates (P3 output), which exactly 10 are selected for the deliverable, given the spread + hardness + cap constraints?

**Verification criteria:**
- [ ] Exactly 10 selected (not 9, not 11).
- [ ] Spread satisfied (≥6 regions + ≥4 gating types).
- [ ] Any candidate demoted from top-10 to "watch list outside the 10" has a recorded reason (lower hardness; better candidate displaced it; spread-balancing).
- [ ] Any candidate elevated despite lower hardness has a recorded reason (spread-balancing; gating-type-coverage).

### P5 — Assign tiers

**Question:** For each of the 10 selected questions, is it Tier 1 (must-resolve-before-SKILL.md, 5-7 questions target) or Tier 2 (watch-list-during-SKILL.md, 3-5 questions target)?

**Verification criteria:**
- [ ] Each of the 10 has a tier (1 or 2).
- [ ] Tier 1 contains 5-7 questions; Tier 2 contains 3-5.
- [ ] Total = 10.
- [ ] Each tier assignment cites the criterion ("silent implementation choice would result if unresolved" → Tier 1; "trackable as an open-question note in the SKILL.md" → Tier 2).

### P6 — Write per-question metadata

**Question:** For each of the 10 questions, what is the 5-field metadata (question text + why-frontier + what-it-gates + hardness-tags + candidate-resolution-path)?

**Verification criteria:**
- [ ] Each of the 10 has all 5 metadata fields populated.
- [ ] **Question text** is a precise, well-formed question (not a sketch).
- [ ] **Why-frontier** explicitly cites the 3-condition test (no-current-answer + gating + net-new) with per-condition reasoning.
- [ ] **What-it-gates** specifies the implementation choice that depends on the answer (a specific structural-layer commitment, runtime-layer commitment, or invariant).
- [ ] **Hardness-tags** specify which of the 3 sub-dimensions apply (breadth / depth / articulation).
- [ ] **Candidate-resolution-path** specifies an inquiry-shape OR calibration-period OR empirical-test OR "open research with no current path" — not vague.

---

## Step 5 — Interface Map

### Cross-piece flows

| From | To | What flows | Type | Direction |
|---|---|---|---|---|
| input (surfacing) | P1 | the 23 candidate items + their region/relevance tags | data | one-way |
| P1 | P2 | eligible candidates (subset of 23) with verdicts | data | one-way |
| P1 | P3 | eligible candidates (alternative consumer; consolidation may happen in parallel with hardness tagging) | data | one-way |
| P2 | P3 | consolidation pairs + merged-question texts | data | one-way |
| P3 | P4 | ranked + spread-checked candidate list with hardness tags | data | one-way |
| P4 | P5 | the 10 selected question identifiers | data | one-way |
| P5 | P6 | the 10 with tier assignments | data | one-way |
| P6 | output | the 10 with full metadata | data | one-way |

### Assumptions-not-data check

- **P1 assumes:** sensemaking's specific verdicts on Q22 (NOT eligible), Q18 (ELIGIBLE), Q4/Q21 (valid via accommodation rule) are correct. If sensemaking misjudged, P1's filter mis-classifies.
  - **Mitigation:** Critique re-tests the sensemaking verdicts adversarially.
- **P3 assumes:** the 3-dimension hardness test produces consistent verdicts across reviewers. The tagging is judgment-dependent.
  - **Mitigation:** Critique tests inter-reviewer consistency by adversarial probing.
- **P3 assumes:** the 12-region coverage map from surfacing is a complete enumeration. If a 13th region exists, P3 might select 10 candidates that cluster wrong.
  - **Mitigation:** unlikely to matter (the 12 regions were derived from a deliberate sweep), but Critique can probe.
- **P5 assumes:** the Tier 1 / Tier 2 distinction (silent-choice-if-unresolved vs trackable-as-note) is operationally clear. Sensemaking flagged this as a potential over-elaboration risk (Flag-1).
  - **Mitigation:** Critique tests whether the tier distinction adds signal or noise.

### Hidden coupling check

No hidden coupling. The work is linear; each piece's output is the next piece's input. The only synchronization is at P3 (consumes both P1 and P2 outputs).

---

## Step 6 — Dependency Order

### Dependency graph

```
input (23 candidates from surfacing)
            │
            v
           P1 — Apply eligibility filter
            │
       ┌────┴────┐
       v         v
      P2        P3 — Rank + check spread
       │         ^
       └────────>┘
                 │
                 v
                P4 — Select exactly 10
                 │
                 v
                P5 — Assign tiers
                 │
                 v
                P6 — Write metadata
                 │
                 v
            10-question deliverable
```

### Tiered ordering

- **Tier 0:** P1 (depends only on the surfacing output).
- **Tier 1:** P2 (depends on P1).
- **Tier 2:** P3 (depends on P1 + P2).
- **Tier 3:** P4 (depends on P3).
- **Tier 4:** P5 (depends on P4).
- **Tier 5:** P6 (depends on P5).

### Parallelism opportunities

P2 (consolidation) and the hardness-tagging portion of P3 can proceed concurrently from P1's output — both consume the same eligible-candidate list. But P3's ranking step requires P2's output (consolidated candidates ranked, not individual ones). For simplicity, treat as linear.

### Circular dependency check

No circular dependencies.

---

## Step 7 — Self-Evaluate

### Minimum 3-dimension check

| Dimension | Verdict | Notes |
|---|---|---|
| **Independence** | PASS | Each piece is answerable given its declared inputs. |
| **Completeness** | PASS | P1-P6 cover filtering, consolidation, ranking, selection, tier, metadata. The deliverable assembly is folded into P6's output (no separate P7 needed). |
| **Reassembly** | PASS | Given P1-P6 outputs + interfaces → 10-question deliverable with metadata + tiers reconstructed. |

### Determination-mechanism piece check (per refinement note)

The Q-tree references load-bearing concepts whose use depends on runtime determination:
- "3-condition test" — runtime: applied per-candidate in P1.
- "3-dimension hardness test" — runtime: applied per-candidate in P3.
- "Tier 1 vs Tier 2" — runtime: applied per-selected-question in P5.

For each, is there a piece addressing the determination mechanism?
- 3-condition test: P1 IS the determination piece. PASS.
- 3-dimension hardness: P3 IS the determination piece. PASS.
- Tier assignment: P5 IS the determination piece. PASS.

All three load-bearing concepts have determination-mechanism pieces.

### Full 7-dimension check

| Dimension | Verdict | Notes |
|---|---|---|
| Independence | PASS | |
| Completeness | PASS | |
| Reassembly | PASS | |
| **Tractability** | PASS | Each piece small enough for single-pass work. P6 is largest (10 questions × 5 fields) but each field is small. |
| **Interface clarity** | PASS | 8 cross-piece flows, all explicit; 4 assumption sets with mitigations. |
| **Balance** | PASS | P6 is heavier than P1-P5 individually but the per-question work is small. |
| **Confidence** | HIGH | Top-down and bottom-up agree; atoms map cleanly to pieces. |

### Failure mode quick check

- **Premature Decomposition** — sensemaking is upstream + complete. NOT triggered.
- **Wrong Boundaries** — cuts at low-coupling valleys. NOT triggered.
- **Hidden Coupling** — Assumptions-not-data check applied; 4 assumption sets named. NOT triggered.
- **Missing Pieces** — Reassembly + determination-mechanism check both pass. NOT triggered.
- **Over-Decomposition** — 6 pieces for a moderate work; each is a coherent sub-problem. NOT triggered.
- **Ignoring Dependencies** — 5-tier linear order specified. NOT triggered.
- **Imbalanced Decomposition** — P6 is heavier but the per-question work is small. NOT triggered.

---

## Final Deliverable Summary

### 1. Coupling Map

11 elements → 6 clusters → 6 final pieces. Near-linear pipeline with one synchronization (Cluster C consumes both A and B outputs).

### 2. Question Tree (6 pieces)

- **P1 — Apply eligibility filter:** which candidates pass the 3-condition test + elevation rule + accommodation rule?
- **P2 — Consolidate overlapping candidates:** which candidates merge (2-cap with sub-aspect enumeration)?
- **P3 — Rank by hardness + check spread:** which candidates are top-hard, and does the top-set satisfy axis-spread + gating-type-spread?
- **P4 — Select exactly 10:** which 10 from the ranked + spread-checked set?
- **P5 — Assign tiers:** which of the 10 are Tier 1 must-resolve vs Tier 2 watch-list?
- **P6 — Write per-question metadata:** the 5-field metadata for each of the 10.

### 3. Interface Map

8 cross-piece flows (all `data` type, one-way); 4 assumption sets with mitigations.

### 4. Dependency Order

Linear: `P1 → P2 → P3 → P4 → P5 → P6` (with P2/P3 having a synchronization seam — P3 needs both P1 and P2 outputs).

### 5. Self-Evaluation

- **Minimum 3 dimensions:** PASS / PASS / PASS.
- **Full 7 dimensions:** PASS on all 7; HIGH confidence.
- **No failure modes triggered.**

**Decomposition verdict: PROCEED.** The 6-piece partition is ready for Innovation to execute each piece's work and produce the 10-question deliverable.
