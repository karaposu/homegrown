# Decomposition — Discipline-spec apparent-bloat reasons

## User Input

```
Validate the partition pointed at by sensemaking (per-pattern verdicts under shared principles).
Don't redo it. Don't over-decompose. Stop when each piece is tractable.
```

---

## Step 1 — Perceive Coupling Topology

### Elements in the stable problem (post-sensemaking)

- **Pattern-1 verdict piece** — load-bearing on A1+A2; compress A3
- **Pattern-2 verdict piece** — load-bearing on B1+B3; address B2 (drop / anchor list / compress)
- **Pattern-3 verdict piece** — correctly placed per convention; typographic demotion preserving canonical step placement
- **Shared principles** (audience-separation operationalized as runtime moment; execution-hugging as working assumption; phase-fit) — fixed by sensemaking
- **Shared reference** — `enes/discipline_rule_placement.md` (placement convention)

### Coupling assessment

| Pair | Coupling | Reason |
|---|---|---|
| P1 ↔ P2 | Weak | Both apply audience-separation, but to different placements (loading vs. failure-mode); refactor candidates don't depend on each other |
| P1 ↔ P3 | Very weak | Different principles (audience-separation vs. execution-hugging); independent refactors |
| P2 ↔ P3 | Very weak | Same as above |
| All ↔ Principles | Read-only | Each piece consumes the principles as evaluation dimensions; principles don't change between pieces |
| All ↔ Placement convention | Read-only | Each piece must not violate it; no piece edits it |

### Coupling map

```
                  ┌──────────────────────────┐
                  │  Shared (read-only):     │
                  │  - Principles (3)        │
                  │  - Placement convention  │
                  └──────────┬───────────────┘
                             │
            ┌────────────────┼────────────────┐
            │                │                │
            ▼                ▼                ▼
       ┌──────────┐    ┌──────────┐    ┌──────────┐
       │ Piece 1  │    │ Piece 2  │    │ Piece 3  │
       │ (P1)     │    │ (P2)     │    │ (P3)     │
       └──────────┘    └──────────┘    └──────────┘

   Cross-piece coupling: weak (different placements, different defenses)
   Each piece consumes the shared layer; pieces don't consume each other
```

---

## Step 2 — Detect Boundaries (Top-Down)

Three natural cut points, one per pattern. The shared principles + placement convention form a fourth region but are read-only and not a workable piece — they're the surrounding context that all three pieces draw on.

Boundary integrity check: each candidate piece is internally cohesive (one pattern, one verdict path, one refactor candidate set) and externally independent (no cross-piece flow required).

---

## Step 3 — Validate Boundaries (Bottom-Up)

Atomic refactor options cluster naturally per pattern:

- **Pattern 1 atoms:** "compress A3 to one-line pointer"; "compress A3 to a markdown anchor"; "drop A3 entirely (rejected by sensemaking — A3's audience is real)"
- **Pattern 2 atoms:** "drop B2 entirely"; "B2 → anchor list (names + heading-links to body)"; "B2 → compressed count + names only"
- **Pattern 3 atoms:** "italic 'Refinement note:' prefix"; "smaller heading level (#### vs ###)"; "indented block"; "callout-style box"

The atoms partition cleanly per pattern. No atom is split across pieces; no atom belongs to two pieces. Bottom-up agrees with top-down. **Confidence: HIGH** on all three boundaries.

---

## Step 4 — Express as Question Tree

### Question 1: Pattern 1 refactor

**Q:** What concrete spec edit compresses A3 (the SKILL.md mid-execution failure-mode footer) while preserving its audience function (re-anchoring failure-mode recognition for the mid-execution LLM)?

**Verification criteria:**
- [ ] Edit reduces the footer's footprint (line count or word count) measurably
- [ ] Edit preserves a pointer to the failure-modes section of `references/X.md`
- [ ] Edit doesn't break the Step-0-to-footer audience separation (i.e., still serves the mid-exec audience, not just the load-time audience)
- [ ] Edit applies uniformly across all `SKILL.md` files that have this footer (or names which it doesn't apply to and why)

### Question 2: Pattern 2 refactor

**Q:** What concrete spec edit addresses B2 (the summary tables at the end of `references/X.md`) — drop, replace with anchor list, or compress?

**Verification criteria:**
- [ ] Edit either removes B2 or replaces it with a form that adds value beyond B1's body headings
- [ ] Edit preserves B1 (canonical body content) and B3 (SKILL.md mid-exec footer) — both confirmed load-bearing
- [ ] If B2 is kept in any form, the maintenance-backstop function is replaced by something less drift-prone (e.g., the heading itself, an automated check, or a reduced anchor list)
- [ ] Edit is applied uniformly across the disciplines that have B2 summary tables

### Question 3: Pattern 3 typographic refactor

**Q:** What typographic convention visually demotes bolted-on sub-rules relative to the spine of a numbered process step, while preserving canonical-step placement (the execution-hugging working assumption)?

**Verification criteria:**
- [ ] Convention applies uniformly across all bolted-on subsections in the corpus (sensemaking Phase 3, explore Probe, decompose Step 7, td-critique Phase 0+2, innovate Phase 3)
- [ ] Convention does NOT relocate the subsection (canonical placement preserved)
- [ ] A reader can distinguish spine from refinement at-a-glance with the convention applied (readability test)
- [ ] Convention can be added to `enes/discipline_rule_placement.md` as a formatting addendum without re-opening the placement rules themselves

---

## Step 5 — Map Interfaces

### Cross-piece flows

| From | To | What flows | Direction |
|---|---|---|---|
| (none) | Q1 | (no upstream from peer pieces) | — |
| (none) | Q2 | (no upstream from peer pieces) | — |
| (none) | Q3 | (no upstream from peer pieces) | — |

### Shared-context flows (read-only)

| From | To | What flows | Direction |
|---|---|---|---|
| Sensemaking principles (audience-separation) | Q1, Q2 | Evaluation dimension for refactor candidates | One-way (read) |
| Sensemaking principles (execution-hugging) | Q3 | Evaluation dimension; constrains refactor type to typographic-only | One-way (read) |
| Sensemaking principles (phase-fit) | Q1, Q2, Q3 | Conservative-default reasoning for each verdict | One-way (read) |
| `enes/discipline_rule_placement.md` | Q1, Q2, Q3 | Placement-convention compliance check | One-way (read) |

**Interface clarity check:** every piece's external dependencies are read-only and explicit. No hidden coupling — each piece's verdict depends only on the named principles + the convention, not on the other pieces' verdicts.

### Diff between piece interfaces

Q1 and Q2 share the audience-separation interface; Q3 has its own (execution-hugging). This is structurally meaningful: Q1+Q2's refactor proposals are evaluated against "does each placement still serve a distinct runtime-moment?"; Q3's proposals are evaluated against "does the typographic change preserve canonical-step placement?" Different evaluation dimensions = different pieces.

---

## Step 6 — Order by Dependency

### Order

All three pieces are **independent** and can be addressed in **any order or in parallel**. There is no dependency chain among them.

### Dependency direction

```
   Sensemaking principles ── (read-only) ──> Q1
                          ── (read-only) ──> Q2
                          ── (read-only) ──> Q3

   Q1 ── (none) ──> Q2
   Q2 ── (none) ──> Q3
   Q1 ── (none) ──> Q3
```

### Implications for innovation

Innovation can generate refactor proposals for Q1, Q2, Q3 in parallel without sequencing constraints. Critique can evaluate each verdict independently. The deliverable is three verdicts, not a sequence.

---

## Step 7 — Self-Evaluate

### Minimum (3 dimensions)

| Dimension | Check | Pass? |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | YES — each piece's question and verification criteria are self-contained; no piece consumes another piece's output |
| **Completeness** | Do the pieces cover the whole? | YES — three patterns, three pieces; no aspect of the original question falls between pieces |
| **Reassembly** | Pieces + interfaces → original problem solved? | YES — combining the three verdicts (each with refactor candidate or "keep as-is" rationale) IS the deliverable from `_branch.md` |

### Determination-mechanism piece check

The principles (audience-separation, execution-hugging, phase-fit) are load-bearing concepts. Their applicability per-pattern was determined and fixed in sensemaking SV6:

- audience-separation → P1, P2 (with operationalization "audience = runtime moment")
- execution-hugging → P3 (working assumption, conservative default)
- phase-fit → P1, P2, P3 (caveat: revisit at maturity)

These determinations are not runtime variables that innovation or critique need to recompute; they are fixed inputs from sensemaking. Therefore the Q-tree does **not** need a separate determination-mechanism piece. The mechanism is "read sensemaking SV6"; that's a read-only flow on the interface map, not a piece.

If innovation generates a refactor proposal that doesn't fit any principle, critique handles that case in the standard adversarial flow (the principles ARE the dimensions); no decomposition gap exists.

### Full evaluation (7 dimensions)

| Dimension | Check |
|---|---|
| Independence | YES (above) |
| Completeness | YES (above) |
| Reassembly | YES (above) |
| **Tractability** | YES — each piece is one refactor question with bounded atomic options; tractable in a single focused pass |
| **Interface clarity** | YES — all cross-piece coupling is read-only and named; no hidden state |
| **Balance** | YES — each piece is roughly equal scope (one refactor candidate set per pattern) |
| **Confidence** | HIGH — top-down (3 patterns) and bottom-up (atomic options cluster per pattern) agree |

### Stopping criterion check

Per the decompose spec, stop when any of: tractable / atomic / over-decomposed / directly verifiable.

- Each piece is **tractable** in one focused pass (Q1: pick a compression form for A3; Q2: pick B2's fate; Q3: pick a typographic convention).
- Atoms within each piece (specific refactor options) cluster naturally; further decomposition would split a single design choice into sub-choices, which would be over-decomposition.

**Stop here.** Three pieces is the right granularity.

---

## Final Deliverable

### Coupling Map

The three patterns form three independent regions, all sharing a read-only dependency on sensemaking's three principles + the placement convention. Cross-pattern coupling is weak (different placements, different defenses, different refactor candidates). Bottom-up atomic refactor options cluster cleanly per pattern.

### Question Tree

```
Discipline-spec apparent-bloat reasons (root)
│
├── Q1: What concrete spec edit compresses A3 while preserving its mid-exec audience?
│       Verification: 4 criteria (compression, pointer-preservation, audience-distinct,
│       uniform application)
│
├── Q2: What concrete spec edit addresses B2 — drop, anchor list, or compress?
│       Verification: 4 criteria (added-value-beyond-B1, B1+B3-preservation,
│       backstop-replacement, uniform application)
│
└── Q3: What typographic convention demotes bolted-on subsections while preserving
        canonical-step placement?
        Verification: 4 criteria (uniform application, no-relocation, readability,
        addendum-compatible-with-convention)
```

### Interface Map

| Source | Target | Flow type | Direction |
|---|---|---|---|
| Sensemaking principles | Q1, Q2 | Audience-separation as evaluation dimension | Read-only |
| Sensemaking principles | Q3 | Execution-hugging as constraint | Read-only |
| Sensemaking principles | Q1, Q2, Q3 | Phase-fit as conservative-default rule | Read-only |
| Placement convention | Q1, Q2, Q3 | Compliance constraint | Read-only |

No flows between Q1, Q2, Q3.

### Dependency Order

All three pieces parallel-independent. No ordering required for innovation or critique.

### Self-Evaluation Summary

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PASS |
| Confidence | HIGH |

**Determination-mechanism piece check:** PASS (no separate piece needed; principles are fixed inputs from sensemaking).

### Decomposition Verdict

Three pieces, parallel-independent, each tractable. The decomposition is small but appropriate to the problem's actual structure — the three patterns ARE three independent refactor questions sharing read-only context. Forcing more pieces would over-decompose; forcing fewer would conflate distinct refactor surfaces.
