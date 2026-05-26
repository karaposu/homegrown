# Decomposition — Biggest Next Gain Toward Breakthrough

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_09-04__biggest_next_gain_toward_breakthrough/_branch.md
```

Sensemaking stabilized the question into a 5-candidate verdict frontier (W1 Z3 / W2 Nav L1 alone / W3 Nav L1 + outcome ledger hybrid / W4 materialization wire / W5 /intuit Phase A) with multi-dimensional leverage as the figure of merit. Decomposition's job: partition the remaining work (per-verdict deep assessment + dependency topology + hybrid generation + sequencing + first-step action specification) into independently workable pieces so Innovation can expand the candidate set and Critique can adversarially test.

---

## Step 1 — Perceive Coupling Topology

### Elements of the whole

The whole is "the verdict to deliver to the user: which next move has the biggest leverage, with concrete first-step action." Its elements:

| Element | What it is |
|---|---|
| **E1–E5** — Per-verdict profiles | Each of W1, W2, W3, W4, W5 needs an effort × multi-dim-gain × downstream-unlock assessment |
| **E6** — Dependency topology | Which verdicts gate or enable which; which can be paralleled |
| **E7** — Hybrid space | Combinations beyond W1-W5 (e.g., Z3 paired with Nav L1) |
| **E8** — Sequencing | If multiple verdicts will be done, in what order |
| **E9** — Action specification | Concrete first step (commands, file edits) for the top verdict |
| **E10** — User-decision-factor weighting | How time-horizon / risk-tolerance / effort-budget / phase-preference shift the ranking |

### Coupling assessment

**Within per-verdict profiles (E1–E5):**
- Pairwise low coupling — each verdict's profile is independent of the others. The five can be written in parallel.

**E1–E5 ↔ E6 (dependency topology):**
- Moderate. Each verdict's profile names "what it unlocks" — that's the input to E6. But E6 can be drafted from Sensemaking + Exploration outputs without waiting for E1–E5; the per-verdict profiles add detail later.

**E1–E5 ↔ E7 (hybrid space):**
- Moderate. Hybrids combine verdicts; the per-verdict profiles inform which combinations are compatible.

**E6 ↔ E7:**
- Moderate. Hybrids must respect the dependency topology (can't combine A + B if B presupposes A).

**E7 ↔ E8 (sequencing):**
- Tight. Sequencing operates on either singletons or hybrids; the candidate set must be set before sequencing.

**E8 ↔ E9 (action specification):**
- Tight. Action specification operates on whichever (single-or-hybrid) verdict comes first in the sequence.

**E10 (user-decision factors) cross-cuts everything:**
- E10 ↔ E1–E5: low. The per-verdict profiles are factor-independent.
- E10 ↔ E8: tight. Sequencing depends on the user-decision-factor weights.
- E10 ↔ E9: tight via E8.

### Coupling map

```
            ┌────────────────────────────────────┐
            │  Per-verdict profiles (E1–E5)      │
            │  pairwise low coupling             │
            │                                    │
            │  E1  E2  E3  E4  E5                │
            └────┬──────────────┬───────────────┘
                 │              │
            (low) │      (moderate) E1-E5 inform E7
                 │              │
                 ▼              ▼
           ┌────────────┐  ┌─────────────────┐
           │  E6        │◄─┤  E7             │
           │  Dep.      │  │  Hybrid         │
           │  topology  │  │  combinations   │
           └────────────┘  └─────────────────┘
                                 │
                          (tight)│
                                 ▼
                         ┌─────────────────┐
                         │  E8 Sequencing  │◄──── E10 (user-decision factors)
                         └─────────────────┘
                                 │
                          (tight)│
                                 ▼
                         ┌─────────────────┐
                         │  E9 Action      │
                         │  specification  │
                         └─────────────────┘
```

### Coarse coupling map

- **Cluster C1 — Profile cluster**: E1–E5 (per-verdict assessments). High internal independence; the 5 elements can be worked in parallel.
- **Cluster C2 — Topology cluster**: E6 + E7 (dependency + hybrids). Moderately coupled to C1.
- **Cluster C3 — Synthesis cluster**: E8 + E9 (sequencing + action). Tightly coupled to C2 and to E10.
- **Cross-cutting**: E10 (user-decision factors) governs C3 but not C1 or C2.

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, natural boundaries:

- **B1 (primary)** — between C1 (profile cluster) and C2 (topology cluster). Coupling is moderate but unidirectional (profiles inform topology; topology doesn't feed back into profile content). Clean cut.
- **B2** — between C2 and C3. Hybrids must be enumerated before sequencing operates on them.
- **B3** — between C3 and E10. User-decision factors operate as a weighting layer on sequencing rather than as a piece to build; treat E10 as a cross-cutting parameter rather than a piece.
- **B4 (internal)** — within C1, each per-verdict profile is a separate piece (5 sub-pieces).

### Initial partition (candidates for pieces)

- **P1** — Per-verdict profile cluster (covers E1–E5, with 5 sub-pieces P1a–P1e)
- **P2** — Dependency topology (covers E6)
- **P3** — Hybrid space (covers E7)
- **P4** — Sequencing (covers E8)
- **P5** — Action specification (covers E9)
- **(Parameter, not piece) — User-decision-factor weighting** (covers E10; feeds into P4 and P5)

6 pieces (5 + 1 sub-cluster of 5 internal sub-pieces).

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Irreducible atoms

- **A_P1a** — W1 (Z3) profile atom. Indivisible: a Z3 profile must include the question to run, expected output type, cost estimate.
- **A_P1b** — W2 (Navigator L1 alone) profile atom. Indivisible.
- **A_P1c** — W3 (Navigator L1 + outcome ledger) profile atom. Two sub-builds bundled; W3 is the hybrid itself, indivisible as a candidate.
- **A_P1d** — W4 (materialization wire) profile atom. Indivisible.
- **A_P1e** — W5 (`/intuit` Phase A) profile atom. Indivisible.
- **A_P2** — dependency-edge atoms. Each pairwise edge (e.g., outcome ledger → `/intuit` calibration) is an atom.
- **A_P3** — hybrid-combination atoms. Each candidate hybrid (e.g., Z3 + Nav L1 paired) is an atom.
- **A_P4** — sequence-ordering atoms. Each candidate ordering is an atom.
- **A_P5** — first-step command atoms. Each atom is a concrete command or file edit.

### Bottom-up grouping check

Do the atoms group into the same clusters that top-down identified?

- A_P1a through A_P1e → C1 (Profile cluster) ✓
- A_P2 atoms → C2 ✓
- A_P3 atoms → C2 ✓
- A_P4 atoms → C3 ✓
- A_P5 atoms → C3 ✓

**Does the top-down cut split atoms?** No — each atom lives in exactly one cluster.

**Are atoms grouped that should be independent?** Check W3's atom — it's labeled as a single profile but actually bundles two builds (Nav L1 + outcome ledger). Should it split into two atoms?

- Argument for splitting: each sub-build (Nav L1 wiring; outcome ledger schema) is independently workable.
- Argument for keeping bundled: W3 was the *hybrid* candidate Sensemaking already named; splitting it loses the "hybrid as a verdict" framing the user can pick.

Decision: keep W3 as a single atom at the verdict level (it's a verdict that includes both builds), AND note that P5 (action specification) for W3 must specify two first-steps (one per sub-build).

### Confidence assessment

- C1 internal partition: top-down and bottom-up agree. **High confidence.**
- C2 (P2 + P3): atoms group cleanly. **High confidence.**
- C3 (P4 + P5): atoms group cleanly. **High confidence.**
- B1 (C1/C2 boundary): clean unidirectional cut. **High confidence.**

---

## Step 4 — Express as Question Tree

Each piece becomes a purposeful question with verification criteria.

### Q1 — Per-verdict profile cluster

Five sub-questions, each producing a profile for one verdict.

#### Q1a — What is W1 (Z3) as an actionable verdict?

**Verification criteria:**
- [ ] Specify the question Z3 would run `/MVL+` on (which breakthrough-candidate question — discipline-ordering refinement, Stage-2-loop, or both as a layered sequence).
- [ ] State the expected output type (conceptual reframe? candidate-set narrowing? both?).
- [ ] Estimate cost (cycles of /MVL+ to run; likely 1 full iteration ≈ a long session).
- [ ] Identify what gets unlocked if Z3 produces a reframe (e.g., if discipline-ordering reframe lands, the project's loop itself improves).

#### Q1b — What is W2 (Navigator L1 alone) as an actionable verdict?

**Verification criteria:**
- [ ] Specify the wiring change (where in `/MVL+` does Navigator invocation get added; manual-procedure-first version vs. auto-invoke version).
- [ ] State the immediate gain (specifically: which Layer-1 burden is reduced, and by how much).
- [ ] Estimate cost (small-medium; depends on procedure-first vs. automated).
- [ ] Identify the downstream-unlock factor (≥10 maps + rationales → L1→L2 graduation gate; at current inquiry rate, ~1-2 months).

#### Q1c — What is W3 (Navigator L1 + outcome ledger) as an actionable verdict?

**Verification criteria:**
- [ ] Specify both sub-builds: Navigator wiring AND outcome ledger schema.
- [ ] Specify outcome ledger schema (where it lives — `devdocs/outcome_ledger.md` or per-inquiry `_outcome.md`; what fields it captures — finding ID, expected effect, observed effect, calibration delta).
- [ ] Specify how CONCLUDE writes into the ledger (which step appends; what triggers a write).
- [ ] State the compound gain (Layer-1 burden reduction + Retrospective RC foundation laid).
- [ ] Estimate combined cost (medium; both sub-builds are small-medium).
- [ ] Identify what gets unlocked: when `/intuit` ships, the ledger provides the data Phase D needs to calibrate against.

#### Q1d — What is W4 (materialization wire as `/MVL+` default) as an actionable verdict?

**Verification criteria:**
- [ ] Specify the wiring change in `/MVL+` (where in the ITERATION COMPLETE flow does artifact_materialization get invoked).
- [ ] Specify default behavior (always run materialization for findings that propose changes; opt-out flag for pure-analytical findings).
- [ ] Estimate cost (medium; integration with 8-phase lifecycle is non-trivial).
- [ ] Identify the downstream-unlock: every future finding's prescriptions become traceable file changes.

#### Q1e — What is W5 (`/intuit` Phase A) as an actionable verdict?

**Verification criteria:**
- [ ] Specify Phase A scope: convergent mode only; source-first; 8 primitive cards + corpus-audit admission gate; flat ranked output; CORPUS_MATCH / INSUFFICIENT_INTUITION source types.
- [ ] Estimate cost (large; multi-month build effort).
- [ ] Identify calibration timeline (Phase D maturity at N≥30 per discipline; today: per-discipline near-zero; estimated time-to-maturity ~year+).
- [ ] State the deep unlock: closes the Baldwin cycle's Predictive RC half (Retrospective RC still needed separately via Q1c).

### Q2 — What is the dependency topology among the verdicts?

**Verification criteria:**
- [ ] Identify all pairwise dependency edges (e.g., outcome ledger → `/intuit` calibration data; Nav L1 → L2 graduation; canary regression → safer spec promotion).
- [ ] Mark edges as "hard precondition" (B requires A) vs "soft enabler" (B benefits from A but doesn't require).
- [ ] Identify cycles or contradictions (e.g., Nav L1 doesn't depend on anything; `/intuit` Phase A doesn't depend on Nav L1 but benefits from the ledger Q1c provides).
- [ ] Identify parallel-eligible pairs (verdicts with no mutual dependency).

### Q3 — What is the hybrid space beyond W1–W5?

**Verification criteria:**
- [ ] Identify hybrid candidates by combining W's where dependencies permit (Innovation's job; Decomposition lists the slots).
- [ ] At minimum, surface the obvious candidates:
  - W1 (Z3) + W2 (Nav L1) — small-effort parallel pair
  - W4 (materialization) + W2 (Nav L1) — wire two loop steps in one push
  - W4 + W3 (materialization + Nav L1 + outcome ledger) — three-build push
  - W5 (`/intuit`) + W3 (outcome ledger) — Baldwin cycle's both layers (one ships now, one ships later)
- [ ] Identify the impossible hybrids (those that violate dependencies; e.g., codifying the workshop pattern requires N=2 — incompatible with this iteration).

### Q4 — What is the sequencing if multiple verdicts will be done?

**Verification criteria:**
- [ ] Apply user-decision factors (time horizon, risk tolerance, effort budget, phase preference) to score each ordering.
- [ ] Recommend a default ordering.
- [ ] Identify the sub-orderings under each user-decision factor (e.g., "if effort budget is small: run W1 only; if medium: W3; if larger: W3 followed by W4").

### Q5 — What is the concrete first-step action for the top verdict?

**Verification criteria:**
- [ ] For the recommended verdict (singular or hybrid), produce the first-step concrete command or file edit.
- [ ] Specify the verification check that confirms the first-step landed correctly.
- [ ] State the second step (one step beyond first) so the user can chain.

### Independence check

Each question is answerable without reading sibling questions (with the shared assumption set in Step 5 below as interface preconditions). Q1 sub-questions are mutually independent; Q1 as a whole is upstream of Q2 and Q3; Q4 depends on Q2 and Q3; Q5 depends on Q4.

---

## Step 5 — Map Interfaces

| Source piece | Target piece | What flows | Direction |
|---|---|---|---|
| Q1a → Q3 | hybrid-compatibility info for W1 | one-way |
| Q1b → Q3 | hybrid-compatibility info for W2 | one-way |
| Q1c → Q3 | hybrid-compatibility info for W3 (bundles Nav L1 + outcome ledger) | one-way |
| Q1d → Q3 | hybrid-compatibility info for W4 | one-way |
| Q1e → Q3 | hybrid-compatibility info for W5 | one-way |
| Q1a → Q2 | "what does W1 unlock" → topology nodes | one-way |
| Q1b → Q2 | "what does W2 unlock" → topology nodes | one-way |
| Q1c → Q2 | "what does W3 unlock" → topology nodes | one-way |
| Q1d → Q2 | "what does W4 unlock" → topology nodes | one-way |
| Q1e → Q2 | "what does W5 unlock" → topology nodes | one-way |
| Q2 → Q3 | dependency edges → constrain hybrid compatibility | one-way |
| Q2 → Q4 | dependency edges → constrain sequencing | one-way |
| Q3 → Q4 | hybrid candidates → ordering candidates | one-way |
| User-decision factors → Q4 | weighting parameters | one-way (cross-cutting parameter) |
| Q4 → Q5 | top-ranked verdict → action specification target | one-way |

### Assumptions-not-data check (refinement)

Hidden coupling hides in assumptions. The pieces share the following unstated expectations:

- **Shared assumption SA1** — "Verdicts" means the 5 candidates from Sensemaking (W1–W5). If Innovation generates radically new candidates outside this set, the Q-tree's piece names need updating but the structure holds.
- **Shared assumption SA2** — "Leverage" = (multi-dimensional gain) / effort × unlock-factor, per Sensemaking's Ambiguity 2 resolution. Different leverage formulations would invalidate the comparisons.
- **Shared assumption SA3** — User-decision factors are the four named in Sensemaking SV5: time horizon, risk tolerance, effort budget, phase preference. If the user surfaces additional factors (e.g., "must not change `/MVL+` core behavior"), Q4 needs to re-weight.
- **Shared assumption SA4** — Project is in late-consolidation phase per Sensemaking's Ambiguity 3 resolution. If the user disagrees with this phase claim, the weighting shifts and Q4 needs re-running.

These shared assumptions are made explicit as interface preconditions. Innovation and Critique must operate under these or flag their abandonment.

---

## Step 6 — Order by Dependency

```
Phase 1 (parallel):
  Q1a — Q1b — Q1c — Q1d — Q1e   (five per-verdict profiles)
  Q2   (dependency topology, drafted from Sensemaking + Exploration)

Phase 2 (sequential after Phase 1):
  Q3   (hybrid space — consumes Q1a–e + Q2)

Phase 3 (sequential after Q3):
  Q4   (sequencing — consumes Q3 + user-decision factors)

Phase 4 (sequential after Q4):
  Q5   (action specification — consumes Q4's top pick)
```

No circular dependencies. The shared assumptions SA1–SA4 are preconditions established by Sensemaking and Exploration; they are not pieces in the Q-tree.

In practice for Innovation: Phase 1 may collapse with Phase 2 because Innovation's mechanism set is well-suited to generating both per-verdict deeper profiles AND hybrid combinations in the same generation pass. Decomposition's clean separation is for piece-tracking, not strict execution order.

---

## Step 7 — Self-Evaluate

### Minimum evaluation (3 dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each Q1–Q5 answerable without sibling content (with SA1–SA4 as preconditions). | PASS — Q1 sub-pieces are mutually independent; Q2 drafts from upstream Sensemaking + Exploration; Q3 onward consume from prior. |
| **Completeness** | Pieces cover the verdict-formation question. | PASS — Q1 covers per-verdict assessment; Q2 covers dependency; Q3 covers hybrid expansion; Q4 covers sequencing; Q5 covers action. The chain Q1+Q2 → Q3 → Q4 → Q5 produces "ranked verdict with concrete first-step action" which IS the branch's stated goal. |
| **Reassembly** | Answers Q1–Q5 → branch's ranked verdict with first-step action. | PASS. |

**All three minimum dimensions PASS.**

### Determination-mechanism piece check (refinement)

Does the Q-tree include a load-bearing concept whose use depends on a runtime determination?

Q4 produces a sequencing ranking that depends on user-decision factors (a runtime determination — the user picks their context). Q5 produces a first-step action that depends on which verdict Q4 ranked first. The user's commitment to a verdict is a runtime determination.

The Q-tree includes Q4 and Q5 as the determination-mechanism pieces. HOW the user determines their context is the user's call (not a Q-tree piece). The Q-tree could include an additional piece for "user-context elicitation" — but that would treat the user as a managed subsystem, which they aren't. Treat user-context as a cross-cutting parameter (E10), not a piece. **Not a Missing Piece.**

### Full evaluation (4 additional dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Tractability** | Each piece is a single focused pass. | PASS — Q1 sub-pieces are short; Q2/Q3/Q4 are each a structured evaluation pass; Q5 is a single concrete action lookup. |
| **Interface clarity** | All cross-piece flows explicit. | PASS — interfaces named in Step 5; SA1–SA4 surfaced as interface preconditions. |
| **Balance** | Complexity roughly proportional. | PARTIAL — Q1 is the largest cluster by content volume (5 sub-pieces, each producing a multi-criterion profile). Q3 (hybrid generation) is the heaviest single-pass synthesis. Q5 (action specification) is the smallest. Imbalance is acceptable because Q1's volume mirrors the candidate set size, and Q5's smallness mirrors its role (one concrete action). |
| **Confidence** | Top-down/bottom-up agree. | PASS — both directions identify the same five clusters and the same boundary cuts. |

**All seven dimensions PASS or PARTIAL (Balance is partial but acceptable).**

---

## Final Deliverable

### Coupling Map

- **C1 (Profile cluster)** — Per-verdict profiles for W1–W5; pairwise low coupling among the five sub-pieces.
- **C2 (Topology cluster)** — Dependency topology (Q2) + hybrid space (Q3); moderately coupled within; consumes from C1.
- **C3 (Synthesis cluster)** — Sequencing (Q4) + action specification (Q5); tightly coupled within; consumes from C2; weighted by user-decision factors (cross-cutting parameter E10).

**Boundaries:** B1 (C1/C2 — primary cut, unidirectional), B2 (C2/C3), B3 (C3 / E10 cross-cutting), B4 (within C1, per-verdict sub-pieces independent).

### Question Tree

```
The Whole: "Which next move has biggest leverage, with concrete first-step?"
├── Q1 — Per-verdict profiles (C1)
│   ├── Q1a — W1 (Z3) profile
│   ├── Q1b — W2 (Navigator L1 alone) profile
│   ├── Q1c — W3 (Navigator L1 + outcome ledger hybrid) profile
│   ├── Q1d — W4 (materialization wire) profile
│   └── Q1e — W5 (/intuit Phase A) profile
├── Q2 — Dependency topology (C2)
├── Q3 — Hybrid space (C2) — consumes Q1 + Q2
├── Q4 — Sequencing (C3) — consumes Q3 + user-decision factors
└── Q5 — Action specification (C3) — consumes Q4's top pick
```

### Interface Map

| Edge | Flow type | Direction |
|---|---|---|
| Q1a–e → Q2 | "what each verdict unlocks" — topology input | one-way |
| Q1a–e → Q3 | per-verdict compatibility info — hybrid input | one-way |
| Q2 → Q3 | dependency edges — constrain hybrids | one-way |
| Q2 → Q4 | dependency edges — constrain ordering | one-way |
| Q3 → Q4 | hybrid candidates — ordering input | one-way |
| User-decision factors (E10) → Q4 | weighting parameters | cross-cutting |
| Q4 → Q5 | top-ranked verdict — action target | one-way |

**Shared interface preconditions (SA1–SA4 from Step 5):**
- SA1: "Verdicts" = the 5 candidates from Sensemaking (W1–W5)
- SA2: "Leverage" = (multi-dim gain) / effort × unlock-factor
- SA3: User-decision factors = time horizon / risk tolerance / effort budget / phase preference
- SA4: Project is in late-consolidation phase

### Dependency Order

```
Phase 1 (parallel):  Q1a — Q1b — Q1c — Q1d — Q1e — Q2
Phase 2 (sequential after Phase 1):  Q3
Phase 3 (sequential after Q3):  Q4
Phase 4 (sequential after Q4):  Q5
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

**Decomposition is committed.** Innovation can proceed with Q1a–e in parallel (Phase 1), generating per-verdict deeper profiles and expanding the hybrid space via the 7 mechanisms. Critique can then evaluate the per-verdict survivors and surface-emergent hybrids against the leverage dimensions Sensemaking established.
