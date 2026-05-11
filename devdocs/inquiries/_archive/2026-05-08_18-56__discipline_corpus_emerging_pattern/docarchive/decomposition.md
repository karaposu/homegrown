# Decomposition — Discipline-corpus emerging pattern

## User Input

```
Validate the partition pointed at by sensemaking. Don't redo. Don't over-decompose.
Stop when each piece is tractable.
```

---

## Step 1 — Perceive Coupling Topology

### Elements (post-sensemaking)

- **Step Refinement primitive spec** — 4-element shape + two anchor-link subtypes
- **Step Refinement visual marker** — italic-prefix convention (input from prior inquiry's C3.4)
- **Discipline Output Contract spec** — verdict line + structural sections expectation
- **Verdict-line rollout** — closing the gap in 5 disciplines (sense-making, explore, decompose, comprehend, reflect)
- **Shared dependencies (read-only):** placement convention, phase-fit conservatism, prior inquiry's C3.4, resume.md aspiration

### Coupling assessment

| Pair | Coupling | Reason |
|---|---|---|
| Q1 (Step Refinement) ↔ Q2 (Output Contract) | Weak | Different surfaces (rule-level vs. output-level); independent artifacts |
| Q1 ↔ Q3 (Rollout) | Very weak | Q1 is rule-level; Q3 is output-rollout |
| Q2 ↔ Q3 | **Strong** | Q3 is the rollout of the contract Q2 specifies; Q3 cannot proceed without Q2 |
| All ↔ Shared dependencies | Read-only | Each piece consumes the shared layer; pieces don't edit it |

### Coupling map

```
                      ┌──────────────────────────────┐
                      │  Shared (read-only):         │
                      │  - Placement convention      │
                      │  - Phase-fit conservatism    │
                      │  - Prior C3.4 visual marker  │
                      │  - resume.md aspiration      │
                      └─────────┬────────────────────┘
                                │
         ┌──────────────────────┼──────────────────────┐
         │                      │                      │
         ▼                      ▼                      ▼
   ┌──────────┐          ┌──────────┐           ┌──────────┐
   │ Piece 1  │          │ Piece 2  │ ────────▶ │ Piece 3  │
   │ (Q1:     │          │ (Q2:     │  STRONG   │ (Q3:     │
   │  Step    │          │  Output  │   flow    │  Rollout)│
   │  Refine- │          │  Contract│           │          │
   │  ment)   │          │  spec)   │           │          │
   └──────────┘          └──────────┘           └──────────┘

   Cross-piece coupling:
     Q1 ↔ Q2: weak (different surfaces)
     Q1 ↔ Q3: very weak
     Q2 → Q3: strong (rollout depends on contract being specified)
```

---

## Step 2 — Detect Boundaries (Top-Down)

Three natural cut points:
1. **Step Refinement primitive** (one decision space — what's the artifact for the host primitive)
2. **Discipline Output Contract spec** (one decision space — what's the artifact for the contract)
3. **Verdict-line rollout** (one decision space — how to close the 5-discipline gap)

Each is internally cohesive; externally, only Q2→Q3 has a strong flow (Q3 inherits Q2's contract specification).

Boundary integrity check: PASS. Each piece is its own decision space.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Atomic options cluster naturally per piece:

- **Q1 atoms:** glossary entry in `enes/` / placement-convention addendum / new file `enes/step_refinement.md` / inline section in `enes/discipline_taxonomy.md`
- **Q2 atoms:** new file `enes/discipline_output_contract.md` / section in `homegrown/protocols/resume.md` / section in `enes/discipline_taxonomy.md` / addendum to placement convention
- **Q3 atoms:** blanket retroactive (touch all 5 disciplines now) / touch-as-worked-on (close gap incrementally) / hybrid (verdict line immediate; structural sections deferred) / per-discipline trigger conditions

The atoms partition cleanly per piece. No atom belongs to two pieces. Bottom-up agrees with top-down.

**Confidence: HIGH** on all three boundaries.

---

## Step 4 — Express as Question Tree

### Question 1: Step Refinement artifact

**Q:** What concrete artifact (or set of artifacts) describes the Step Refinement primitive — its 4-element shape (name / trigger / action / typed anchor-link), its two subtypes (failure-anchored, coverage-anchored), and its visual marker — for use across the homegrown discipline corpus?

**Verification criteria:**
- [ ] Artifact names the primitive as "Step Refinement"
- [ ] Artifact specifies the 4-element shape with each element defined
- [ ] Artifact names the two subtypes (failure-anchored, coverage-anchored) with concrete examples drawn from the existing corpus
- [ ] Artifact references the prior inquiry's C3.4 italic-prefix visual marker
- [ ] Artifact lives in a file that's discoverable from existing index points (`enes/`, the placement convention, or the discipline taxonomy)
- [ ] Artifact placement respects `enes/discipline_rule_placement.md`'s convention (one canonical home; cross-references at non-canonical surfaces)

### Question 2: Discipline Output Contract artifact

**Q:** What concrete artifact describes the Discipline Output Contract — the verdict line + standardized structural sections expectation — for the disciplines (which produce outputs) and the runners (which consume them, including `homegrown/protocols/resume.md` and `homegrown/protocols/conclude.md`)?

**Verification criteria:**
- [ ] Artifact names the contract as "Discipline Output Contract"
- [ ] Artifact specifies the verdict-line element with explicit allowance for hedging (qualitative disciplines can carry verdict + caveat)
- [ ] Artifact specifies standardized structural sections in a way that doesn't damage discipline-specific structures (e.g., sense-making's SV-progression must remain valid)
- [ ] Artifact lives in a file that's discoverable; aligns with existing `homegrown/protocols/resume.md`'s aspiration
- [ ] Artifact does NOT specify mechanical enforcement (no linters, no validators) — descriptive only per phase-fit

### Question 3: Verdict-line rollout strategy

**Q:** What rollout strategy closes the verdict-line gap in the 5 disciplines currently without verdict lines (sense-making, explore, decompose, comprehend, reflect) — given that the contract from Q2 specifies what the verdict-line should be?

**Verification criteria:**
- [ ] Strategy specifies which of the 5 disciplines get touched, in what order, with what trigger conditions
- [ ] Strategy respects phase-fit (no blanket retroactive forcing if it would damage qualitative self-assessment in disciplines like sense-making)
- [ ] Strategy respects the user's "brushing teeth" framing — descriptive maintenance, not heavy machinery
- [ ] Strategy proposes concrete first-action (which discipline to touch first, with what verdict-line form)
- [ ] Strategy is parallel-independent of Q1 (Step Refinement work)

---

## Step 5 — Map Interfaces

### Cross-piece flows

| From | To | What flows | Direction | Strength |
|---|---|---|---|---|
| (none) | Q1 | (no upstream from peer pieces) | — | — |
| Q2 | Q3 | The Discipline Output Contract specification (verdict-line form, structural sections expectation) | One-way | **Strong** — Q3 cannot specify rollout without knowing what's being rolled out |

### Shared-context flows (read-only)

| From | To | What flows |
|---|---|---|
| Sense-making's stabilized model (SV6) | Q1, Q2, Q3 | Two named patterns + descriptive-only formalization level |
| Placement convention | Q1, Q2 | Compliance constraint; canonical-home placement |
| Prior inquiry's C3.4 | Q1 | Visual-marker convention (italic prefix) |
| `homegrown/protocols/resume.md` | Q2, Q3 | Existing aspirational contract; verdict-line consumer |
| Phase-fit conservatism | Q1, Q2, Q3 | Descriptive-only constraint; no mechanical enforcement |

**Interface clarity check:** all flows named. The Q2→Q3 strong flow is the only cross-piece coupling; otherwise pieces are independent of each other (all coupling is to the shared read-only layer).

---

## Step 6 — Order by Dependency

### Order

- **Q1** is parallel-independent of Q2 and Q3.
- **Q2** must precede **Q3** (Q3's rollout strategy depends on Q2's contract being specified).
- **Q1** can run in parallel with Q2 or sequentially before Q2.

### Concrete sequencing options

| Option | Sequence | Notes |
|---|---|---|
| A | Q1 + Q2 in parallel; then Q3 | Maximum parallelism |
| B | Q1 → Q2 → Q3 | Sequential; simpler but slower |
| C | Q2 → Q3 → Q1 | Front-load contract work; defer Step Refinement primitive |

For innovation/critique: any of A/B/C is valid. Innovation can generate proposals per piece in any order; critique can evaluate per piece independently (with the noted Q2→Q3 dependency).

---

## Step 7 — Self-Evaluate

### Minimum (3 dimensions)

| Dimension | Check | Pass? |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | YES — Q1 fully independent; Q2 independent of Q1 and Q3; Q3 depends on Q2 (acknowledged in interface map; not hidden) |
| **Completeness** | Do the pieces cover the whole? | YES — sense-making's two patterns (covered by Q1 and Q2) + the rollout (Q3) covers all formalization work |
| **Reassembly** | Pieces + interfaces → original problem solved? | YES — combining the three artifacts (Step Refinement spec + Output Contract spec + rollout strategy) produces the deliverable named in `_branch.md` (named patterns + concrete tidying artifacts) |

### Determination-mechanism piece check

Per the bolted-on rule in decompose.md Step 7: load-bearing concepts (Step Refinement primitive name; the two anchor-link subtypes; the formalization level "descriptive only"; the user's #2 collapse decision) were determined and fixed in sense-making SV6. These are fixed inputs from sense-making, not runtime variables that innovation or critique need to recompute.

The Q-tree therefore does **not** need a separate determination-mechanism piece. The mechanism is "read sense-making SV6"; that's a read-only flow on the interface map (already documented above), not a piece.

### Full evaluation (7 dimensions)

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| **Tractability** | PASS — each piece is one decision space, tractable in a single focused pass |
| **Interface clarity** | PASS — only one cross-piece flow (Q2→Q3); read-only shared dependencies all named |
| **Balance** | PASS (with slight imbalance) — Q1 and Q2 are similar scope; Q3 is smaller (rollout strategy is a single decision) |
| **Confidence** | HIGH — top-down (3 pieces) and bottom-up (atomic options cluster per piece) agree |

### Stopping criterion check

Per the decompose spec, stop when any of: tractable / atomic / over-decomposed / directly verifiable.

- Each piece is **tractable** in one focused pass.
- Atoms within each piece are concrete artifact / file / strategy options. Further decomposition would split a single artifact decision into sub-decisions, which would be over-decomposition.

**Stop here.** Three pieces is the right granularity.

---

## Final Deliverable

### Coupling Map

Three pieces. Q1 fully independent. Q2 independent of Q1 but Q3 depends on Q2. All pieces share read-only context (sense-making's SV6, placement convention, phase-fit conservatism, prior inquiry's C3.4, resume.md aspiration).

### Question Tree

```
Discipline-corpus emerging pattern (root)
│
├── Q1: What concrete artifact describes the Step Refinement primitive?
│       Verification: 6 criteria (name / shape / subtypes / visual marker /
│       discoverability / placement compliance)
│
├── Q2: What concrete artifact describes the Discipline Output Contract?
│       Verification: 5 criteria (name / verdict-line form / structural sections /
│       discoverability / no mechanical enforcement)
│
└── Q3: What rollout strategy closes the verdict-line gap in 5 disciplines?
        Verification: 5 criteria (which/when/order / phase-fit / brushing-teeth /
        first-action / parallel-with-Q1)
```

### Interface Map

| Source | Target | Flow | Direction | Strength |
|---|---|---|---|---|
| Q2 (Discipline Output Contract spec) | Q3 (Rollout strategy) | Contract specification (what's being rolled out) | One-way | Strong |
| Sense-making SV6 | Q1, Q2, Q3 | Two named patterns + descriptive-only level | Read-only | — |
| Placement convention | Q1, Q2 | Compliance constraint | Read-only | — |
| Prior inquiry C3.4 | Q1 | Visual-marker convention | Read-only | — |
| resume.md aspiration | Q2, Q3 | Existing contract aspiration | Read-only | — |
| Phase-fit conservatism | All | Descriptive-only constraint | Read-only | — |

No cross-piece flows except Q2→Q3.

### Dependency Order

- Q1: parallel-independent
- Q2 must precede Q3
- Sequencing options: (A) Q1+Q2 parallel, then Q3; (B) sequential Q1→Q2→Q3; (C) Q2→Q3→Q1

### Self-Evaluation Summary

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PASS (slight imbalance — Q3 smaller scope) |
| Confidence | HIGH |

**Determination-mechanism piece check:** PASS (no separate piece needed; load-bearing concepts fixed in sense-making).

### Decomposition Verdict

Three pieces, tightly partitioned. Q1 fully independent (Step Refinement primitive artifact). Q2 independent of Q1 (Discipline Output Contract artifact). Q3 depends on Q2 (verdict-line rollout strategy). Innovation can generate proposals per piece; critique can evaluate per piece with the noted Q2→Q3 dependency.

The decomposition is small and appropriate to the problem's actual structure — sense-making did most of the partitioning by stabilizing to two named patterns; this decomposition formalizes the "rollout" sub-question that Q2 implies and makes the Q2→Q3 dependency explicit.
