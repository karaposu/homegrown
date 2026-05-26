# Decomposition — Sensemaking Spec Capability Comparison

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_00-35__sensemaking_spec_capability_comparison/_branch.md
```

Sensemaking stabilized the question: capability is a 6-dimensional vector; the draft wins 3, ties 2, loses 1; three viable verdicts (V1/V2/V3) exist. Decomposition's job: partition the remaining work (per-addition capability analysis + cost + strategy synthesis) into independently workable pieces so Innovation can generate verdict candidates and Critique can evaluate them.

---

## Step 1 — Perceive Coupling Topology

### Elements of the whole

The whole is "the structural delta from `sensemaking.md` (live) to `sensemaking_problem.md` (draft) and its implications for promote/archive/merge." The delta has 11 distinct elements (from exploration.md):

| Element | Cluster (preliminary) |
|---|---|
| E1. Firing schedule (subsection "How the meta-question fires at runtime") | SUBSTANTIVE-RUNTIME |
| E2. Pattern A/B/C taxonomy (Meta-Inspection opening) | SUBSTANTIVE-RUNTIME |
| E3. Phase-section cross-references (6 italic inserts at post-SV2/SV3/SV4/SV6 + Accommodation note) | SUBSTANTIVE-RUNTIME |
| E4. Scope clause (Meta-Inspection final subsection) | SPEC-META |
| E5. Self-applicability subsection | SPEC-META |
| E6. Step 5 conformance note | SPEC-META |
| E7. Hooks list extensibility procedure | SPEC-META |
| E8. Inspection-hooks table reformulation (richer calibration column) | TWEAK |
| E9. Meta-question alternative formulations (2 added) | TWEAK |
| E10. Accommodation frontier flag (parenthetical addition to Phase 5 refinement) | TWEAK |
| E11. Example domain update (system-design → metaloop) + Phase 3 wording tweak | TWEAK (trivial) |

Plus the orthogonal dimensions that govern the synthesis:
- D1. Total cost (line count + context consumption)
- D2. Promotion strategy (the terminal action question)

### Coupling assessment (pairwise: if I change A, does B need to change?)

**Within SUBSTANTIVE-RUNTIME cluster:**
- E1 ↔ E2: low coupling. The firing schedule and the Pattern taxonomy address different practitioner risks (when-to-fire vs. mechanism-conflation). If E1's design changes, E2's content does not.
- E1 ↔ E3: moderate coupling. The Phase cross-references *implement* the firing schedule's phase-end firing mode at the phase-level. If E1's firing schedule changes per-phase mapping, E3's cross-refs would need to update.
- E2 ↔ E3: low coupling. Pattern taxonomy and cross-refs are independent; the cross-refs do not depend on the taxonomy.

**Within SPEC-META cluster:**
- E4 ↔ E5: low. Scope clause and Self-applicability address different aspects.
- E4 ↔ E6: low. Scope is about applicability; Step 5 conformance is about governance.
- E4 ↔ E7: low. Scope is current-applicability; extensibility is future-growth.
- E5 ↔ E6, E5 ↔ E7, E6 ↔ E7: all low.

**Cross-cluster (SUBSTANTIVE-RUNTIME ↔ SPEC-META):**
- E1 ↔ E4–E7: low. Firing schedule operation is independent of scope clauses, self-applicability commentary, governance notes, or extensibility procedure.
- E2 ↔ E4: moderate. Pattern A/B/C taxonomy and Scope clause both deal with applicability boundaries; they may share boundary-claims. If the Pattern taxonomy changes its claims about Pattern B/C, the Scope's "applies WITHIN Sensemaking" claim could need updating.
- E3 ↔ E5: low.

**Tweaks (E8–E11) coupling to everything:** weak to none. The tweaks are local content enhancements. E10 (Accommodation frontier flag) is a forward-projection enhancement; cosmetically related to spec-evolution but operationally independent.

### Coupling map

```
        ┌────────────────────────────────┐
        │   SUBSTANTIVE-RUNTIME (C1)     │
        │                                │
        │   ┌────┐                       │
        │   │ E1 │── moderate ── ┌────┐  │
        │   │FS  │               │ E3 │  │
        │   └────┘               │ Px │  │
        │      ╲                 └────┘  │
        │      low                       │
        │      ╲                         │
        │   ┌────┐                       │
        │   │ E2 │── low ── E3           │
        │   │PAT │                       │
        │   └────┘                       │
        └────────│───────────────────────┘
                 │ low (one moderate edge: E2↔E4)
                 │
        ┌────────│───────────────────────┐
        │   SPEC-META (C2)               │
        │   E4   E5   E6   E7            │
        │   all pairwise: low            │
        └────────────────────────────────┘

   Tweaks (C3): E8 E9 E10 E11 — each weakly attached to its
   structural neighbor; no inter-tweak coupling.

   Cost (D1) and Strategy (D2): cross-cutting; consume from
   all elements; do not feed back.
```

### Coarse coupling map

Two high-coupling-internal clusters (C1: SUBSTANTIVE-RUNTIME with one moderate internal edge E1↔E3; C2: SPEC-META, flat internal topology). One small cluster of TWEAKS (C3). Two cross-cutting dimensions: Cost (D1) and Strategy (D2).

Boundaries identified:
- **B1 (primary):** between C1 and C2 — weakest cross-cluster coupling (low across all element pairs except E2↔E4 which is moderate).
- **B2:** between C1∪C2 and C3 — TWEAKS are smaller-scale than cluster elements.
- **B3:** between elements (C1, C2, C3) and the cross-cutting dimensions (D1, D2) — D1/D2 consume from elements but elements do not consume from D1/D2.

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, the natural boundaries are:

**Cut 1 — Substantive vs. Spec-Meta (B1).** Cross-cluster coupling is uniformly low (one moderate edge E2↔E4 is the only exception, manageable as a noted shared assumption rather than a forced merge).

**Cut 2 — Cluster elements vs. Tweaks (B2).** Tweaks (E8–E11) have weak coupling to everything else; they form a residual cluster.

**Cut 3 — Elements vs. Synthesis dimensions (B3).** Cost (D1) and Strategy (D2) consume from elements; they are downstream pieces, not parts of the element clusters.

**Internal sub-boundaries within C1 (sub-cuts):**
- E1 (firing schedule), E2 (Pattern A/B/C), E3 (Phase cross-refs) — three sub-pieces, mutually low-coupled except for the moderate E1↔E3 edge. The moderate edge implies E1 and E3 should be assessed *together* if their coordination is in question; otherwise they're independently assessable.

**Internal sub-boundaries within C2:** E4, E5, E6, E7 are pairwise low-coupled — four independent sub-pieces.

### Initial partition (candidates for pieces)

- P_E1: firing schedule
- P_E2: Pattern A/B/C taxonomy
- P_E3: Phase cross-references
- P_E4: Scope clause
- P_E5: Self-applicability subsection
- P_E6: Step 5 conformance note
- P_E7: Hooks extensibility procedure
- P_TWEAKS: bundled E8–E11
- P_COST: total cost dimension
- P_STRATEGY: promotion strategy synthesis

10 pieces. Possibly over-decomposed; bottom-up validation will check.

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Irreducible atoms

The atoms are the elements themselves — each is one distinct addition in the draft, indivisible without losing identity:

- **A_E1** — the "How the meta-question fires at runtime" subsection (~12 lines, 3 firing modes, per-phase hook map). Atomic — splitting it loses the phase-end-vs-practitioner-vs-end-of-Sensemaking distinction.
- **A_E2** — the Pattern A/B/C opening paragraph + bulleted definitions of A, B, C. Atomic — splitting it loses the three-way distinction.
- **A_E3** — 6 italic cross-reference inserts at post-SV2 / post-SV3 / post-SV4 / SV6 close / two Phase 3 refinement notes. Each cross-ref is an atom; together they form an atom-group (the bidirectional-findability claim depends on the group, not on any single insert).
- **A_E4–A_E7** — each is a single subsection (~5–15 lines). Atomic.
- **A_E8** — the inspection-hooks table reformulation. Atomic (replacing the calibration column).
- **A_E9–A_E11** — small content additions; atomic at the line level.

### Bottom-up grouping check

Do the atoms group into the same clusters that top-down identified?

- A_E1, A_E2, A_E3 → SUBSTANTIVE-RUNTIME (C1) ✓ matches top-down
- A_E4, A_E5, A_E6, A_E7 → SPEC-META (C2) ✓ matches top-down
- A_E8, A_E9, A_E10, A_E11 → TWEAKS (C3) ✓ matches top-down

**Does the top-down cut split atoms?** No — each atom lives in exactly one cluster.

**Are atoms grouped together that should be independent?** Check the TWEAKS bundle:
- A_E8 (hooks table reformulation) is moderately tied to E1 and E3 (the reformulation adds revival paths that mention 14-00 deferred checks; cross-referenced from the firing schedule). Hmm — should A_E8 move to C1?
- Decision: A_E8 is structurally a *reformulation* of an existing element (the hooks table existed in live), not a new addition. Its capability contribution is small compared to A_E1/A_E2/A_E3. Keep as TWEAK with a note that it's moderately coupled to C1.

### Confidence assessment

- C1 internal partition (P_E1, P_E2, P_E3): top-down and bottom-up agree. **High confidence.**
- C2 internal partition (P_E4 through P_E7): top-down and bottom-up agree. **High confidence.**
- C3 (P_TWEAKS): top-down and bottom-up agree on inclusion; A_E8's coupling-to-C1 is noted but doesn't force reassignment. **Medium confidence.**
- B1 (C1/C2 boundary): one moderate cross-cluster edge (E2↔E4); manageable. **High confidence.**

---

## Step 4 — Express as Question Tree

Each piece becomes a purposeful question with verification criteria.

### Q1 — What capability does the firing schedule (E1) add to /sense-making?

**Verification criteria:**
- [ ] Identify the runtime cognitive operation the firing schedule enables (the operation a practitioner LLM performs *because* the schedule is loaded).
- [ ] State how this operation differs from a practitioner running with the live spec (which contains the meta-question and hooks but no firing instruction).
- [ ] State whether the operation is strictly additive (no operation in the live spec is lost).
- [ ] Identify the most-likely failure mode of the firing schedule (over-rigidification, wrong hook-to-phase mapping, etc.) and whether the schedule has internal mitigations.

### Q2 — What capability does the Pattern A/B/C taxonomy (E2) add?

**Verification criteria:**
- [ ] Identify the specific mis-application risk in the live spec that Pattern A/B/C addresses.
- [ ] State how the taxonomy distinguishes the three patterns operationally (not just terminologically).
- [ ] State whether the distinction is structurally sound (i.e., the three patterns ARE three patterns, not a forced split of a single phenomenon).
- [ ] Identify edge cases (e.g., Self-Reference Blindness bridging A and B) and check that the taxonomy handles them.

### Q3 — What capability do the Phase-section cross-references (E3) add?

**Verification criteria:**
- [ ] Identify the discoverability gap in the live spec (refinement notes don't announce themselves as Meta-Inspection instances).
- [ ] State how each cross-reference closes this gap (per-phase mapping accuracy).
- [ ] Verify that the cross-references are accurate (Meta-Inspection instances are correctly identified).
- [ ] State the practitioner workflow shift: do cross-refs help an LLM find Meta-Inspection from where it applies?

### Q4 — What capability does the Scope clause (E4) add?

**Verification criteria:**
- [ ] Identify the cross-discipline-extrapolation risk the Scope clause prevents.
- [ ] State whether the "Research Frontier" marker on cross-discipline analogues is load-bearing or descriptive.
- [ ] State the cost (line count + context) vs the prevention value.

### Q5 — What capability does the Self-applicability subsection (E5) add?

**Verification criteria:**
- [ ] State what the subsection asserts (the meta-question applies to Sensemaking itself).
- [ ] State whether this is an operational instruction or meta-commentary.
- [ ] Identify whether the subsection enables any new practitioner operation.

### Q6 — What capability does the Step 5 conformance note (E6) add?

**Verification criteria:**
- [ ] State what the note asserts (governance: the new behavior bypasses Step 5 at N=1).
- [ ] Identify whether the assertion is internally consistent with the firing schedule (the schedule IS a runtime-cognitive instruction; the note says "not runtime-cognition-level new check" — tension noted in Sensemaking).
- [ ] State the value of governance metadata for spec maintainers vs runtime practitioners.

### Q7 — What capability does the Hooks list extensibility procedure (E7) add?

**Verification criteria:**
- [ ] Identify the growth path the procedure prescribes (sub-aspect vs. new hook).
- [ ] State the quantitative claim (sub-linear growth) and whether it's structurally sound.
- [ ] Identify when this capability becomes load-bearing (next time a new check is proposed).

### Q8 — What do the tweaks (E8–E11) add?

**Verification criteria:**
- [ ] List each tweak and classify as substantive / cosmetic / trivial.
- [ ] State whether any tweak materially affects the per-element verdicts in Q1–Q7.
- [ ] State whether the tweaks bundle into a coherent residual or are uncorrelated.

### Q9 — What is the total cost of the additions?

**Verification criteria:**
- [ ] Compute line cost (delta in spec line count): known, 64 lines (16% growth).
- [ ] Estimate context cost (additional tokens for each LLM load of the spec).
- [ ] Estimate cognitive-load cost (additional content for a practitioner LLM to hold in working context during a run).
- [ ] State whether cost is acceptable given the project's typical session profile.

### Q10 — What promotion strategy fits the user's context?

**Verification criteria:**
- [ ] Enumerate candidate strategies (subset selection of additions). At minimum: full-promote (all additions), substantive-only (E1+E2+E3), full-promote-minus-conformance, no-promote.
- [ ] Score each candidate against capability gain (sum of Q1–Q7 verdicts) vs. cost (Q9).
- [ ] Identify the user-context variables that move the optimal strategy (time horizon, context budget, spec-evolution cadence).
- [ ] Pick a default and name the conditions under which the alternative wins.

### Independence check

Each question is answerable without reading sibling questions (except via defined interfaces — Q10 consumes from Q1–Q9; Q1–Q9 do not consume from each other beyond the shared assumption set in Step 5 below).

---

## Step 5 — Map Interfaces

| Source piece | Target piece | What flows | Direction |
|---|---|---|---|
| Q1 (firing schedule capability) | Q10 (strategy) | "capability description + failure-mode note" | one-way |
| Q2 (Pattern A/B/C capability) | Q10 | capability description | one-way |
| Q3 (Phase cross-refs capability) | Q10 | capability description | one-way |
| Q4 (Scope clause capability) | Q10 | capability description | one-way |
| Q5 (Self-applicability capability) | Q10 | capability description | one-way |
| Q6 (Step 5 conformance capability) | Q10 | capability description + internal-tension flag | one-way |
| Q7 (Hooks extensibility capability) | Q10 | capability description | one-way |
| Q8 (tweaks) | Q10 | bundled tweak description | one-way |
| Q9 (cost) | Q10 | cost number + budget context | one-way |
| Q1 | Q3 | per-phase firing-mode map | one-way (E1 ↔ E3 moderate coupling — E3 implements E1's phase-end mode at phase-section level) |
| Q2 | Q4 | applicability-boundary claims | one-way (E2 ↔ E4 moderate coupling — Pattern taxonomy's claims about Pattern B/C inform Scope's "applies WITHIN Sensemaking" assertion) |

### Assumptions-not-data check (refinement)

Hidden coupling hides in assumptions. Pieces share the following unstated expectations:

- **Shared assumption SA1:** "Capability" means the 6-dimensional vector defined in Sensemaking (operations / failure modes / explicitness / mis-application resistance / evolvability / cost). If any piece redefines capability, all interfaces to Q10 break.
- **Shared assumption SA2:** "Cost" is measured in line count + context-token count + practitioner cognitive load. If Q9 uses a different cost metric (e.g., spec-maintenance cost), incompatibility with Q1–Q8's capability/cost trade-off framing.
- **Shared assumption SA3:** Capability and cost are commensurable (can be weighed against each other in Q10). If they're not (e.g., capability is qualitative, cost is quantitative), Q10's synthesis is ill-defined.
- **Shared assumption SA4:** "Promotion" is a file-or-section operation under git control, reversible. If promotion requires cross-system coordination (e.g., it changes deployed behavior in production), the strategy candidates must account for deployment cost.

These shared assumptions are **made explicit as interface preconditions**. Innovation and Critique must operate under these or flag their abandonment.

---

## Step 6 — Order by Dependency

```
Phase 1 (parallel — can be worked on simultaneously):
  Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9
  
Phase 2 (sequential — requires Phase 1 complete):
  Q10
```

No circular dependencies. The shared assumptions (SA1–SA4) are preconditions, not pieces — they're agreed before Phase 1 begins (Sensemaking already established them).

The moderate-coupling edges (E1↔E3 / E2↔E4) introduce soft ordering preferences within Phase 1: Q1 should be answered with Q3's data in mind, and Q2 with Q4's data in mind. In practice, this means a brief coordination check between Q1↔Q3 and Q2↔Q4 before committing each piece's verdict. No strict ordering required.

---

## Step 7 — Self-Evaluate

### Minimum evaluation (3 dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each Q1–Q9 is answerable without reading siblings. Q10 is the integrator. | PASS — each piece has its own atom and its own question. Shared assumptions are interface preconditions, not piece-internal references. |
| **Completeness** | Pieces cover all structural differences identified in exploration.md. | PASS — Q1–Q3 cover the 3 substantive additions; Q4–Q7 cover the 4 spec-meta additions; Q8 covers tweaks; Q9 covers cost (the only dimension where draft loses); Q10 synthesizes. |
| **Reassembly** | Answers Q1–Q9 → input to Q10 → strategy verdict → answers the original branch question. | PASS — Q10's strategy verdict IS the user-facing answer to "should I promote / archive / merge?" |

**All three minimum dimensions PASS.**

### Determination-mechanism piece check (refinement)

Does the Q-tree include a load-bearing concept whose use depends on a runtime determination?

Q10 determines the strategy ("V1 / V2 / V3 / other"). The runtime determination is "given Q1–Q9 outputs and user context, which strategy?" The Q-tree includes:
- Q1–Q9: input pieces
- Q10: synthesizer
- **HOW Q10 determines: deferred to Innovation (generate candidates) + Critique (evaluate)**

Q10 names the synthesizer; the HOW lives in the downstream disciplines. This is intentional — Decomposition partitions the question; Innovation+Critique answer the synthesis. **Not a Missing Piece.**

### Full evaluation (4 additional dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Tractability** | Each piece is a single focused pass. | PASS — Q1–Q9 are per-addition assessments (small); Q10 is a comparison/scoring exercise. |
| **Interface clarity** | All cross-piece flows explicit. | PASS — interfaces named in Step 5; assumptions-not-data check applied; SA1–SA4 surfaced. |
| **Balance** | Complexity roughly proportional. | PARTIAL — Q1 (firing schedule) is the largest single piece by content volume; Q10 is the largest by integration burden. Q4–Q7 are smallest (spec-meta subsections are short). Imbalance is acceptable because Q1's outsized role mirrors its outsized capability contribution per Sensemaking. |
| **Confidence** | Top-down/bottom-up agree. | PASS — agreement on all cluster boundaries; minor A_E8 placement noted but doesn't change the partition. |

**All seven dimensions PASS or PARTIAL (Balance is partial but acceptable).**

---

## Final Deliverable

### Coupling Map

- **C1 (SUBSTANTIVE-RUNTIME)** — Firing schedule (E1), Pattern A/B/C (E2), Phase cross-refs (E3). One moderate internal edge: E1↔E3.
- **C2 (SPEC-META)** — Scope (E4), Self-applicability (E5), Step 5 conformance (E6), Hooks extensibility (E7). Flat internal topology.
- **C3 (TWEAKS)** — Hooks-table reformulation (E8), Meta-question alt formulations (E9), Accommodation frontier flag (E10), Example-domain + Phase 3 wording (E11). Weakly coupled, residual.
- **Cross-cutting dimensions** — Cost (D1, → Q9), Strategy (D2, → Q10). Consume from C1∪C2∪C3; do not feed back.

**Boundaries:** B1 (C1/C2 — primary cut, one moderate cross-edge E2↔E4), B2 (clusters / tweaks), B3 (elements / synthesis dimensions).

### Question Tree

```
The Whole: "Is the draft more capable than the live, and what should the user do?"
├── Q1 — Firing schedule capability (E1) — [4 verif criteria]
├── Q2 — Pattern A/B/C capability (E2) — [4 verif criteria]
├── Q3 — Phase cross-refs capability (E3) — [4 verif criteria]
├── Q4 — Scope clause capability (E4) — [3 verif criteria]
├── Q5 — Self-applicability capability (E5) — [3 verif criteria]
├── Q6 — Step 5 conformance capability (E6) — [3 verif criteria]
├── Q7 — Hooks extensibility capability (E7) — [3 verif criteria]
├── Q8 — Tweaks capability (E8–E11) — [3 verif criteria]
├── Q9 — Total cost — [4 verif criteria]
└── Q10 — Promotion strategy synthesis — [4 verif criteria]
```

### Interface Map

| Edge | Flow type | Direction | Cardinality |
|---|---|---|---|
| Q1 → Q10 | capability description + failure-mode note | one-way | 1 |
| Q2 → Q10 | capability description | one-way | 1 |
| Q3 → Q10 | capability description | one-way | 1 |
| Q4 → Q10 | capability description | one-way | 1 |
| Q5 → Q10 | capability description | one-way | 1 |
| Q6 → Q10 | capability description + internal-tension flag | one-way | 1 |
| Q7 → Q10 | capability description | one-way | 1 |
| Q8 → Q10 | bundled tweak description | one-way | 1 |
| Q9 → Q10 | cost number + budget context | one-way | 1 |
| Q1 ↔ Q3 (soft) | per-phase firing-mode map (coordination check) | bidirectional | 1 |
| Q2 ↔ Q4 (soft) | applicability-boundary claims (coordination check) | bidirectional | 1 |

**Shared interface preconditions (SA1–SA4 from Step 5):**
- SA1: "Capability" = 6-dim vector from Sensemaking
- SA2: "Cost" = lines + tokens + cognitive load
- SA3: Capability and cost are commensurable in Q10
- SA4: "Promotion" is git-reversible file/section operation

### Dependency Order

```
Phase 1 (parallel): Q1 — Q2 — Q3 — Q4 — Q5 — Q6 — Q7 — Q8 — Q9
                    └── soft coordination edges: Q1↔Q3, Q2↔Q4 ──┘

Phase 2 (sequential, after Phase 1): Q10
```

### Self-Evaluation

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PARTIAL (acceptable) |
| Confidence | PASS |

**Decomposition is committed.** Innovation can proceed with Q1–Q9 in parallel (or pre-collapse since Sensemaking already produced much of Q1–Q3's content), then synthesize Q10 by enumerating verdict candidates. Critique can then evaluate Q10's candidates against the survival criteria.
