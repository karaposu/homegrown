# Decomposition — routeman_per_route_schema_refinement

## User Input

```text
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-27_13-23__routeman_per_route_schema_refinement/_branch.md

Decomposition purpose: partition per-field adjudication work + final-schema-commitment work into pieces Innovation can operate on independently. Natural partition seams: 2 KEEP verdicts settled (need only MUST-amendment piece) + 2 REFINE fields each carrying 2 options (Innovation evaluates) + 1 integration piece producing concrete schema delta. Output is a DELTA against prior finding's MUST list. Out of scope: re-litigating α/β/γ/δ; redesigning beyond 4 fields. Save to decomposition.md.
```

---

## Step 1 — Perceive Coupling Topology

### Elements identified

From Sensemaking SV6 + the 5 candidate schema-states + the 4 per-field verdicts:

| ID | Element | What it adjudicates |
|---|---|---|
| **E1** | Movement amendment | Reverse the prior finding's MUST "Cut per-Route `Movement` field" row; specify how Movement re-enters the schema with what content axis (already settled by Sensemaking Ambiguity 1 — current-state-to-target-state transition). Mostly mechanical. |
| **E2** | Unlocks amendment | Reverse the prior finding's MUST "Cut per-Route `Unlocks` field" row; specify Unlocks's content axis (graduated-beneficiary relationships, broader than blocking-chain). Mostly mechanical. |
| **E3** | Purpose refinement decision | Choose between 3a (cut entirely) vs 3b (tighten to "1 short noun-phrase functional role-name only") vs a possible 3rd hybrid option Innovation might propose. Carries content-axis spec implications: if cut, the functional-consequence content lives in WHY+why_important; if tightened, the functional role-name lives in Purpose explicitly. |
| **E4** | Continuation Note refinement decision | Choose between 4a (cut entirely) vs 4b (tighten to "forward-warmup-memory only + optional"). If cut, forward-warmup memory recovered from `_route.md`'s History/Last-Invocation sections. If tightened-optional, axis-variance is fixed by spec-tightening + the field can be empty when not relevant. |
| **E5** | Integration into amended MUST delta list | Consumes E1-E4 outputs; produces the concrete delta-against-prior-finding's-MUST-list. Spec-edit-actionable output. |
| **E6** | Coupling check between Purpose and Continuation Note refinement outcomes | If both are CUT (state A), the per-route schema is minimal; if both are TIGHTENED (state D), schema preserves both with tighter specs; cross-coupling: if Purpose is cut and Continuation Note is tightened to "warmup memory only," does any functional-consequence content lose its home? Test this dependency. |
| **E7** | Out-of-scope guardrail | Verify each piece does not drift into α/β/γ/δ re-litigation or out beyond the 4 fields. Cross-cutting check, not a piece-to-do but a piece-to-guard. |

### Coupling matrix (pairwise propagation: "if I change A, does B need to change?")

|   | E1 | E2 | E3 | E4 | E5 | E6 |
|---|---|---|---|---|---|---|
| **E1** Movement amendment | — | n/a (parallel) | weak (no content-axis overlap) | weak | strong (E5 consumes) | n/a |
| **E2** Unlocks amendment | n/a | — | weak | weak | strong (E5 consumes) | n/a |
| **E3** Purpose refinement | weak | weak | — | **STRONG** (if Purpose is cut, Continuation Note may need to absorb functional content axis OR functional content disappears entirely; if Purpose is tightened, Continuation Note's tightening-spec stands on its own) | strong (E5 consumes) | strong (E6 IS the test) |
| **E4** Continuation Note refinement | weak | weak | strong | — | strong | strong |
| **E5** Integration | strong (incoming) | strong (incoming) | strong (incoming) | strong (incoming) | — | n/a |
| **E6** Cross-coupling check | n/a | n/a | strong | strong | n/a | — |

### Coupling clusters

- **Cluster I — KEEP amendments (E1 + E2).** Movement and Unlocks are decided. The pieces are nearly mechanical specifications of "reverse this row in the MUST list + supply spec text." They share a pattern but don't share content. Genuinely parallel; mostly independent.

- **Cluster II — REFINE adjudication with coupling (E3 + E4 + E6).** Purpose and Continuation Note refinement options are not independent — they share the schema's residual content surface. E6 is the test that catches the dependency.

- **Cluster III — Integration (E5).** Consumes all four (E1-E4) plus E6's coupling-test verdict.

### Coupling map

```
                    ┌─────────────────────────────┐
                    │ E7 — Out-of-scope guardrail │
                    │  (cross-cutting check;       │
                    │   verify each piece is       │
                    │   field-level only)          │
                    └──────────────┬──────────────┘
                                   │  applied to all pieces
                                   ▼
        ┌───────────────────────────────────────────────────┐
        │   Tier 0 (parallel)                               │
        │                                                   │
        │   ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  │
        │   │   E1   │  │   E2   │  │   E3   │←→│   E4   │  │
        │   │Movement│  │Unlocks │  │Purpose │  │ Cont.  │  │
        │   │amend't │  │amend't │  │ refine │  │ Note   │  │
        │   │  KEEP  │  │  KEEP  │  │ REFINE │  │ refine │  │
        │   └────┬───┘  └────┬───┘  └───┬────┘  └───┬────┘  │
        │        │           │          │           │       │
        │        │           │          ▼           │       │
        │        │           │     ┌────────┐       │       │
        │        │           │     │   E6   │       │       │
        │        │           │     │ couple │       │       │
        │        │           │     │ check  │       │       │
        │        │           │     └───┬────┘       │       │
        │        │           │         │            │       │
        └────────┼───────────┼─────────┼────────────┼───────┘
                 │           │         │            │
                 ▼           ▼         ▼            ▼
              ┌──────────────────────────────────────────┐
              │   Tier 1                                 │
              │   ┌────────────────────────────────┐     │
              │   │   E5 — Integration             │     │
              │   │   (consumes E1-E4 outputs +    │     │
              │   │    E6 verdict; produces        │     │
              │   │    amendment-delta against     │     │
              │   │    prior MUST list)            │     │
              │   └────────────────────────────────┘     │
              └──────────────────────────────────────────┘
```

---

## Step 2 — Detect Boundaries (Top-Down)

Natural cut points from the coupling topology:

1. **Between KEEP amendments (E1, E2) and REFINE adjudications (E3, E4).** KEEP amendments are mechanical; REFINE adjudications need option evaluation. Different cognitive tasks; cut here.
2. **Between per-field REFINE adjudications (E3, E4) and the coupling test (E6).** Each REFINE piece can output an option-preference; the coupling test consumes both preferences and checks whether they cohere. Cut here.
3. **Between Tier 0 (all 5 per-field/coupling pieces) and Tier 1 (E5 integration).** Tier 0 produces verdicts/preferences; Tier 1 consumes and produces the concrete amendment-delta. Cut here.
4. **E7 (guardrail) cross-cuts but is not a piece.** It's a check applied at each piece's output, not a piece in the sense of "produces an answer." Notably out of the question-tree.

### Initial boundary set (top-down)

- **P1** — Movement amendment (mechanical KEEP)
- **P2** — Unlocks amendment (mechanical KEEP)
- **P3** — Purpose refinement (evaluate 3a/3b/3c/possible hybrid)
- **P4** — Continuation Note refinement (evaluate 4a/4b/4c/possible hybrid)
- **P5** — Cross-coupling check between P3 + P4 outputs
- **P6** — Integration into amendment-delta

Six pieces total (E7 absorbed into the guardrail-discipline applied to each piece).

---

## Step 3 — Validate Boundaries (Bottom-Up Sanity Check)

Identify obvious irreducible atoms and check they cluster into the top-down pieces:

| Atom | Description | Falls naturally into |
|---|---|---|
| A1 | "Reverse the 'Cut Movement' row in the prior finding's MUST list" | P1 ✓ |
| A2 | "Specify Movement's content axis (current-state-to-target-state transition) in the amendment" | P1 ✓ |
| A3 | "Reverse the 'Cut Unlocks' row in the prior finding's MUST list" | P2 ✓ |
| A4 | "Specify Unlocks's content axis (graduated-beneficiary, broader than blocking-chain) in the amendment" | P2 ✓ |
| A5 | "Generate Purpose-cut option spec (3a)" | P3 ✓ |
| A6 | "Generate Purpose-tighten option spec (3b)" | P3 ✓ |
| A7 | "Test 3a vs 3b against the 4 redundancy types + user's stated cross-group claim" | P3 ✓ |
| A8 | "Generate Continuation Note-cut option spec (4a)" | P4 ✓ |
| A9 | "Generate Continuation Note-tighten+optional option spec (4b)" | P4 ✓ |
| A10 | "Test 4a vs 4b against axis-variance + bloat-cost + user's stated objection" | P4 ✓ |
| A11 | "Test cross-coupling: do Purpose-cut + Cont.Note-cut leave functional-consequence content homeless?" | P5 ✓ |
| A12 | "Compose the amendment-delta-list as concrete spec-edit rows" | P6 ✓ |
| A13 | "Verify the amended schema is internally coherent" | P6 ✓ |

All 13 atoms cluster cleanly into P1-P6. No atom split across pieces. No atom orphaned.

**Bottom-up vs top-down agreement: HIGH confidence.** Same 6-piece partition emerges from both directions.

---

## Step 4 — Express as Question Tree

### Q-tree

**P1 — How does Movement re-enter the schema and which prior-finding-MUST-row reverses?**

- **Verification criteria:**
  - [ ] Movement's content axis is restated per Sensemaking Ambiguity 1 (current-state-to-target-state transition; FROM-state that Direction-as-verb + Goal-as-target-state-label cannot reconstruct).
  - [ ] The prior finding's MUST row "Cut per-Route `Movement` field" is explicitly named for reversal.
  - [ ] The action verb for the amendment is named (RESTORE / RE-ADD / KEEP).
- **Stopping criterion:** The amendment row text is spec-edit-actionable.

**P2 — How does Unlocks re-enter the schema and which prior-finding-MUST-row reverses?**

- **Verification criteria:**
  - [ ] Unlocks's content axis is restated per Sensemaking Ambiguity 2 (graduated-beneficiary relationships, broader than Status+BlockedBy forward-chain).
  - [ ] The prior finding's MUST row "Cut per-Route `Unlocks` field" is explicitly named for reversal.
  - [ ] The action verb for the amendment is named.
- **Stopping criterion:** The amendment row text is spec-edit-actionable.

**P3 — Which Purpose refinement option survives evaluation?**

- **Verification criteria:**
  - [ ] Each option (3a cut; 3b tighten; possible 3c hybrid Innovation proposes) is stated with its concrete spec implication.
  - [ ] Each option is tested against the cross-group redundancy claim (Goal + WHY + why_important union coverage).
  - [ ] The user's specific framing ("we already have goal, why and why important") is engaged on its terms.
  - [ ] A preferred option is selected with structural reasoning.
- **Stopping criterion:** One option selected as the principal commitment with stated trade-offs.

**P4 — Which Continuation Note refinement option survives evaluation?**

- **Verification criteria:**
  - [ ] Each option (4a cut; 4b tighten+optional; possible 4c hybrid) is stated with its concrete spec implication.
  - [ ] Each option is tested against the axis-variance evidence + the bloat-cost evidence.
  - [ ] The user's specific framing ("shouldnt have ... will bloat the md file") is engaged on its terms.
  - [ ] A preferred option is selected with structural reasoning.
- **Stopping criterion:** One option selected as the principal commitment with stated trade-offs.

**P5 — Does the combination of P3's verdict + P4's verdict leave any functional-content axis homeless?**

- **Verification criteria:**
  - [ ] If both verdicts are CUT (Purpose 3a + Cont.Note 4a, schema-state A in Sensemaking), test: where does functional-consequence content live? In WHY+why_important? In Goal? Or homeless?
  - [ ] If P3 = cut + P4 = tighten OR vice versa, test the asymmetric case.
  - [ ] If both = tighten (schema-state D), test: is the schema now more tightly-spec'd than user wanted? Is the user-objection therefore over-met (preserves both fields, addresses their objections via spec tightening)?
  - [ ] If a homelessness is found, route back to P3 or P4 for refinement.
- **Stopping criterion:** Coupling test produces a PASS verdict (no homelessness) OR routes refinement back to P3/P4.

**P6 — What is the concrete amendment-delta to append to the prior finding's MUST list?**

- **Verification criteria:**
  - [ ] The amendment is a DELTA, not a replacement. It names specific rows in the prior finding's MUST table to REVERSE / REVISE.
  - [ ] Each amendment row uses the prior finding's table format (Delta / Where / Action columns).
  - [ ] The amended schema is internally coherent (field count + per-field spec are consistent; no orphan group headers).
  - [ ] The selected verdicts from P3 + P4 are incorporated.
  - [ ] The output is spec-edit-actionable (the user could apply the amendments to `cognitive_harness/routeman/references/routeman.md` directly).
- **Stopping criterion:** Concrete amendment-delta produced + schema-coherence verified.

---

### Pieces by candidate schema-state

For Innovation to map decisions to the 5 schema-states Sensemaking surfaced:

| Schema state | P3 verdict | P4 verdict | P5 verdict | P6 amendment delta |
|---|---|---|---|---|
| **A** (Movement KEEP, Unlocks KEEP, Purpose CUT, Cont.Note CUT) | 3a | 4a | Test for functional-homelessness | Cuts Purpose row + Cuts Cont.Note row + Restores Movement + Restores Unlocks |
| **B** (Movement KEEP, Unlocks KEEP, Purpose CUT, Cont.Note TIGHTEN+optional) | 3a | 4b | Test asymmetric case | Cuts Purpose + Tightens Cont.Note + Restores M+U |
| **C** (M KEEP, U KEEP, Purpose TIGHTEN, Cont.Note CUT) | 3b | 4a | Test asymmetric case | Tightens Purpose + Cuts Cont.Note + Restores M+U |
| **D** (M KEEP, U KEEP, Purpose TIGHTEN, Cont.Note TIGHTEN+optional) | 3b | 4b | Test tightening-coherence | Tightens both + Restores M+U |
| **E** (no change to Purpose or Cont.Note) | 3c | 4c | Defaults to prior shape; less-engaged with user-objection | Restores M+U only |

Innovation will operate on this matrix.

---

## Step 5 — Map Interfaces

| Source | Target | Flow content | Type | Direction |
|---|---|---|---|---|
| **P1** (Movement) | **P6** | Movement amendment row + content-axis spec | spec text | one-way |
| **P2** (Unlocks) | **P6** | Unlocks amendment row + content-axis spec | spec text | one-way |
| **P3** (Purpose) | **P5** | Purpose verdict (3a/3b/3c) + spec implication | verdict + spec | one-way |
| **P3** | **P6** | Purpose verdict + amendment row text | verdict + spec text | one-way |
| **P4** (Cont.Note) | **P5** | Continuation Note verdict (4a/4b/4c) + spec implication | verdict + spec | one-way |
| **P4** | **P6** | Continuation Note verdict + amendment row text | verdict + spec text | one-way |
| **P5** (coupling) | **P3** | Coupling-failure feedback (if homelessness detected, refine P3) | feedback | feedback loop |
| **P5** | **P4** | Coupling-failure feedback (if homelessness detected, refine P4) | feedback | feedback loop |
| **P5** | **P6** | Coupling verdict (PASS or REFINED) + verdicts from P3/P4 in final form | verdict | one-way |
| **P6** (integration) | (final inquiry output) | Concrete amendment-delta-list against prior finding's MUST + amended schema description | final commitment | one-way |

### Assumptions-not-data check (refinement note)

For each interface:

- **P1/P2 → P6:** P6 assumes P1/P2 produce amendment text in the prior finding's table format. Captured by P1/P2 verification criteria.
- **P3 → P5:** P5 assumes P3 produces a single preferred option (not multiple unresolved). Captured by P3 stopping criterion.
- **P4 → P5:** P5 assumes P4 produces a single preferred option. Captured by P4 stopping criterion.
- **P5 → P3/P4 (feedback):** When coupling fails, P3 or P4 must be re-runnable with the coupling-failure signal as input. Captured by the feedback loop arrows.
- **P5 → P6:** P6 assumes P5 produces a clean PASS verdict (no unresolved homelessness). Captured by P5 stopping criterion.

**Hidden assumption check:** does P6 assume the amendment delta is small enough to be a one-pass spec edit? Yes — P6's verification "spec-edit-actionable" implies a delta size compatible with the user applying it without further design. If P3/P4/P5 force a larger restructuring (e.g., P3 cuts Purpose AND P4 cuts Cont.Note AND P5 reveals functional-content homelessness, which requires creating a new field), the amendment delta grows. P6 verification should re-check at runtime.

No further hidden assumptions detected.

---

## Step 6 — Order by Dependency

### Tier 0 (parallel)

- **P1** (Movement amendment) — independent
- **P2** (Unlocks amendment) — independent
- **P3** (Purpose refinement) — independent of P1/P2; couples with P4 via P5
- **P4** (Continuation Note refinement) — independent of P1/P2; couples with P3 via P5

**Recommended parallel execution:** P1, P2, P3, P4 in Tier 0.

### Tier 1

- **P5** (cross-coupling check) — depends on P3 + P4 outputs.

### Tier 2

- **P6** (integration) — depends on P1, P2, P5 (P5 carries P3+P4's final-form verdicts; P1/P2 supply the KEEP amendments directly).

### Dependency graph

```
Tier 0:  [P1] [P2] [P3] [P4]    (parallel)
                    │   │
                    ▼   ▼
Tier 1:           ┌──────┐
                  │  P5  │◀── refinement loop ─────┐
                  └──┬───┘                          │
                     │                              │
                     ▼  (or back to P3/P4 if fail)──┘
                  ┌──────┐
                  │ Tier │
                  └──┬───┘
                     │
                  ┌──┴───────┬───────┐
                  │          │       │
                  ▼          ▼       ▼
Tier 2:        (P1) →  P6  ← (P2)
               (P5 verdict) ↑
                            │
                          (integration)
                            ▼
                       Final commitment
```

No circular dependencies. Refinement loop between P5 and P3/P4 is bounded by P5's stopping criterion (PASS or REFINED).

### Parallel-vs-serial verdict

Innovation can work on P1-P4 in parallel, then P5, then P6.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions

| Dimension | Check | Verdict | Reasoning |
|---|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS** (with bounded feedback) | P1/P2 fully independent (KEEP amendments are mechanical). P3/P4 independent of P1/P2; P3/P4 couple via P5 with explicit feedback loop (acknowledged, not hidden). P6 sits at the bottom of the dependency graph and integrates upstream outputs. |
| **Completeness** | Do the pieces cover the whole? | **PASS** | All 4 contested fields addressed (P1 Movement; P2 Unlocks; P3 Purpose; P4 Cont.Note). Coupling addressed by P5. Integration addressed by P6. Out-of-scope guardrail (E7) absorbed as cross-cutting discipline. The 5 candidate schema-states from Sensemaking are mapped to P3 × P4 verdict combinations. No part of the inquiry's scope is unaddressed. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS** | Given each piece's verification criteria met + interfaces honored, the result is a concrete amendment-delta against the prior finding's MUST list, ready for spec materialization. Reassembly: 6 pieces + 10 interfaces, executed in dependency order, produces the final commitment (amendment-delta + amended schema description). |

### Full evaluation (7 dimensions)

| Dimension | Verdict | Notes |
|---|---|---|
| Independence | PASS | (above) |
| Completeness | PASS | (above) |
| Reassembly | PASS | (above) |
| **Tractability** | PASS | P1/P2 are very small (~1 amendment-row each). P3/P4 are medium (evaluate 2-3 options each + structural reasoning). P5 small (coupling test). P6 small-to-medium (compose delta + coherence check). |
| **Interface clarity** | PASS | 10 interfaces explicitly mapped; assumptions-not-data check applied; one bounded feedback loop acknowledged. |
| **Balance** | PASS-WITH-FLAG | P1/P2 are smaller than P3/P4. The asymmetry reflects the underlying problem-shape (KEEP verdicts are settled; REFINE territory has option-evaluation work). Flag: don't pad P1/P2 just for balance — they're rightly small. |
| **Confidence** | HIGH | Top-down (coupling clusters) and bottom-up (atom-clustering) agree. |

### Determination-mechanism piece check (refinement note)

The Q-tree includes load-bearing concepts whose use depends on runtime determination: P5 (coupling check) determines whether refinement loop fires; P6 verification "spec-edit-actionable" depends on runtime size-check of the cumulative delta.

P5's determination mechanism is named: test for functional-content homelessness given P3+P4 verdicts. P6's determination mechanism is named: schema-coherence verification + delta-size check. Both runtime checks are embedded in the verification criteria — Reassembly check passes.

### Failure-mode review

- **Premature Decomposition:** No. Sensemaking ran and produced clear per-field verdicts before partitioning.
- **Wrong Boundaries:** No. Coupling clusters give natural seams; top-down and bottom-up agree.
- **Hidden Coupling:** No. P3↔P4 coupling is explicit and routed through P5; feedback loop acknowledged in interface map.
- **Missing Pieces:** No. Determination-mechanism check passes via P5 and P6 verification criteria.
- **Over-Decomposition:** No. 6 pieces for an inquiry-scope of 4 contested fields + coupling + integration feels right-sized.
- **Ignoring Dependencies:** No. Explicit tier order; P3↔P4 feedback noted.
- **Imbalanced Decomposition:** PASS-WITH-FLAG. P1/P2 smaller than P3/P4 by design; not pathological.

---

## Summary

**The schema-refinement work partitions into 6 pieces along the per-field × coupling × integration seams.**

- **Tier 0 (parallel):** P1 (Movement KEEP amendment), P2 (Unlocks KEEP amendment), P3 (Purpose refinement option-evaluation), P4 (Continuation Note refinement option-evaluation).
- **Tier 1:** P5 (cross-coupling check between P3 + P4 outputs; bounded feedback loop to P3/P4 if homelessness detected).
- **Tier 2:** P6 (integration into concrete amendment-delta against prior finding's MUST list + amended schema description).

**Innovation's input space:** 5 candidate schema-states (A-E) mapped to P3 × P4 verdict combinations; per-piece variations within P3 and P4 (Purpose 3a/3b/3c, Continuation Note 4a/4b/4c).

**Critique's adversarial test surface:** each piece's output adversarially tested; the final committed amendment-delta adversarially tested against (a) the user's specific objections being addressed, (b) the prior finding's broader commitments NOT being re-litigated, (c) the amended schema being internally coherent.

**Verdict: PROCEED** — partition is sound; pieces are independent (with one bounded acknowledged feedback loop); interfaces explicit; dependency order clear; self-evaluation passes 7/7 (with one Balance flag); no failure modes triggered.
