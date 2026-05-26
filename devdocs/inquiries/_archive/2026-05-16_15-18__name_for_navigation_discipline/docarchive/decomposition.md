# Decomposition — Name for Navigation Discipline

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_15-18__name_for_navigation_discipline/_branch.md
```

Sensemaking stabilized into a 3-tier verdict frontier (W1 keep `/navigation` / W2 rename to `/directions` / W3 rename to `/next-moves`) under a 7-dimension naming framework with default ranking by structural argument as W2 > W3 > W1. Decomposition's job: partition the remaining verdict-formation work into independently workable pieces for Innovation and Critique.

---

## Step 1 — Perceive Coupling Topology

### Elements of the whole

| Element | What it is |
|---|---|
| **E1–E3** — Per-verdict profiles | Each of W1 / W2 / W3 needs a deeper assessment of its dimension wins/losses + first-step action specification |
| **E4** — Dimension weighting | Which of the 7 dimensions dominate the user's decision context |
| **E5** — Hybrid space | Combinations beyond W1–W3 (e.g., a name that combines structural + user-language strengths) |
| **E6** — Switching-cost detail | What exactly a rename touches (folder + SKILL.md + cross-references + auto-memory) and whether the cost is reversible |
| **E7** — Verdict synthesis | Apply weighting + costs to produce the ranked verdict |
| **E8** — First-step action | Concrete first edit if rename is chosen |

### Coupling assessment

- **E1, E2, E3** (per-verdict profiles): pairwise low coupling. Each verdict's profile can be written independently.
- **E1–E3 ↔ E5** (hybrid space): moderate. Hybrids combine verdicts; the per-verdict profiles inform compatibility.
- **E1–E3 ↔ E6** (switching cost): low. The switching cost is the same for any rename (W2 or W3); only W1 has zero cost. So E6 is independent of which rename.
- **E4 (weighting) ↔ E7 (synthesis)**: tight. Weighting drives synthesis.
- **E5 (hybrids) ↔ E7**: tight. Synthesis operates on hybrids if any survive.
- **E7 ↔ E8**: tight. Action depends on which verdict wins.

### Coupling map

```
   ┌─────────────────────────────────┐
   │  Per-verdict profiles (C1)      │
   │  E1   E2   E3                   │
   │  pairwise low coupling          │
   └────────┬────────────────────────┘
            │ (moderate)
            ▼
   ┌─────────────────────────────────┐
   │  E5 Hybrid space (C2)           │
   └────────┬────────────────────────┘
            │ (tight)
            ▼
   ┌─────────────────────────────────┐
   │  E7 Verdict synthesis (C3)      │◄──── E4 weighting (parameter)
   │                                 │◄──── E6 switching cost (parameter)
   └────────┬────────────────────────┘
            │ (tight)
            ▼
   ┌─────────────────────────────────┐
   │  E8 First-step action (C4)      │
   └─────────────────────────────────┘
```

Two cross-cutting parameters: E4 (dimension weighting) and E6 (switching cost detail). Both feed into E7 without being pieces themselves.

### Coarse coupling map

- **C1 (per-verdict profiles)** — E1 / E2 / E3 with low internal coupling
- **C2 (hybrid space)** — E5
- **C3 (verdict synthesis)** — E7 (consumes from C1, C2, plus parameters E4 and E6)
- **C4 (action specification)** — E8

---

## Step 2 — Detect Boundaries (Top-Down)

**Boundaries:**

- **B1** — between C1 and C2: per-verdict profiles inform hybrids one-way; hybrids don't feed back into profiles.
- **B2** — between C2 and C3: hybrids feed into synthesis; synthesis doesn't feed back.
- **B3** — between C3 and C4: synthesis output (top verdict) determines the action.
- **B4** — E4 (weighting) and E6 (switching cost) cross-cut into C3 as parameters, not pieces.

### Initial partition (candidates for pieces)

- **P1a** — W1 (keep `/navigation`) deeper profile
- **P1b** — W2 (rename to `/directions`) deeper profile
- **P1c** — W3 (rename to `/next-moves`) deeper profile
- **P2** — Hybrid space (combinations beyond W1–W3)
- **P3** — Verdict synthesis (consumes P1 + P2 + weighting + switching cost)
- **P4** — First-step action (consumes P3's top verdict)

6 pieces (3 in C1 + 1 each in C2/C3/C4).

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms

- **A_P1a / A_P1b / A_P1c** — each verdict's atom: a single coherent naming choice with its dimensional profile. Indivisible (can't split "keep `/navigation`" into smaller verdicts).
- **A_P2** — hybrid combinations. Each candidate hybrid is an atom.
- **A_P3** — the ranking output. One atom (the synthesizer's verdict).
- **A_P4** — the first-step action. One atom (a specific edit or set of edits).

### Bottom-up grouping check

- A_P1a–c → C1 ✓
- A_P2 → C2 ✓
- A_P3 → C3 ✓
- A_P4 → C4 ✓

Top-down and bottom-up agree. **High confidence.**

---

## Step 4 — Express as Question Tree

### Q1 — Per-verdict deeper profiles (C1)

#### Q1a — W1 (keep `/navigation`) profile

**Verification criteria:**
- [ ] State why the status-quo defense survives the anti-Status-Quo-Bias test (per Sensemaking Ambiguity 2).
- [ ] State the dimension wins (recognizability + zero switching cost + role-noun alignment).
- [ ] State the dimension losses (precision-to-essence; user-language fit).
- [ ] Name the first-step action if W1 wins (action: none; record the verdict in `cognitive_harness/navigation/SKILL.md` Loading note or design history).

#### Q1b — W2 (rename to `/directions`) profile

**Verification criteria:**
- [ ] State the dimension wins (precision + project-vocab fit + internal consistency).
- [ ] State the dimension losses (user-language fit; small switching cost).
- [ ] Name the first-step action: rename folder `cognitive_harness/navigation/` → `cognitive_harness/directions/`; update SKILL.md inner name; grep+sed cross-references.
- [ ] Identify which files are touched and at what scope.

#### Q1c — W3 (rename to `/next-moves`) profile

**Verification criteria:**
- [ ] State the dimension wins (user-language fit + recognizability + sibling consistency).
- [ ] State the dimension losses (introduces "moves" as new vocab; mild project-vocab cost).
- [ ] Name the first-step action: rename folder to `cognitive_harness/next-moves/`; same scope as Q1b.

### Q2 — Hybrid space (C2)

**Verification criteria:**
- [ ] Generate hybrid candidates beyond W1–W3 by combining dimension wins (e.g., a name that captures both precision AND user-language).
- [ ] Test mechanism-independence: do multiple mechanisms converge on the same hybrid?
- [ ] Identify any name candidate that dominates Tier-A candidates on ≥3 dimensions.

### Q3 — Verdict synthesis (C3)

**Verification criteria:**
- [ ] Apply the dimension weighting (parameter: which dimension does the user prioritize?) to score W1/W2/W3 plus any Q2 hybrids.
- [ ] Apply the switching-cost calculation (parameter: ~30 minutes for any rename; ~zero for keep).
- [ ] Produce the ranked verdict with the default top pick.
- [ ] Name the conditions under which each verdict wins.

### Q4 — First-step action (C4)

**Verification criteria:**
- [ ] For the top verdict, name the EXACT first edit (file paths + content changes).
- [ ] Identify the verification check (what observable confirms the first step landed).
- [ ] Name the second step so the user can chain.

---

## Step 5 — Map Interfaces

| Source | Target | Flow | Direction |
|---|---|---|---|
| Q1a → Q3 | W1 profile (wins/losses) | one-way |
| Q1b → Q3 | W2 profile | one-way |
| Q1c → Q3 | W3 profile | one-way |
| Q1a/b/c → Q2 | per-verdict compatibility for hybrids | one-way |
| Q2 → Q3 | hybrid candidates | one-way |
| Dimension weighting (E4) → Q3 | weighting parameter | cross-cutting |
| Switching cost detail (E6) → Q3 | cost parameter | cross-cutting |
| Q3 → Q4 | top verdict | one-way |

### Assumptions-not-data check (refinement)

Shared preconditions from Sensemaking:
- **SA1** — Candidate set initially = W1, W2, W3 (per Sensemaking SV4)
- **SA2** — 7-dimension naming framework (per Sensemaking SV3 matrix)
- **SA3** — Switching cost is small (~30 minutes for any rename per Sensemaking Resource perspective)
- **SA4** — Project terminology drift (Navigator role vs `/navigation` action) is recoverable via cleanup; not a decisive constraint

If Innovation surfaces a radically new candidate (e.g., name from a domain not yet considered), the Q-tree structure holds but the candidate set in SA1 expands.

---

## Step 6 — Order by Dependency

```
Phase 1 (parallel):
  Q1a — Q1b — Q1c
  
Phase 2 (after Phase 1):
  Q2 (hybrid space — consumes Q1)
  
Phase 3 (after Q2):
  Q3 (verdict synthesis — consumes Q1, Q2, + parameters E4, E6)
  
Phase 4 (after Q3):
  Q4 (first-step action — consumes Q3's top pick)
```

No circular dependencies. Parameters E4 (weighting) and E6 (switching cost detail) are preconditions from Sensemaking; not pieces.

---

## Step 7 — Self-Evaluate

### Minimum evaluation (3 dimensions)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each Q1a/b/c answerable without sibling content; Q2 consumes one-way from Q1; Q3 consumes from Q1+Q2; Q4 from Q3. | PASS |
| **Completeness** | Pieces cover per-verdict assessment + hybrid generation + synthesis + action. | PASS — the chain Q1+Q2 → Q3 → Q4 produces "ranked verdict with named first step" which IS the branch goal. |
| **Reassembly** | Answers compose into branch's verdict. | PASS. |

### Determination-mechanism piece check

Does the Q-tree include a load-bearing concept whose use depends on runtime determination?

Q3's synthesis depends on the dimension-weighting parameter (E4) — a runtime determination the user makes. The Q-tree includes Q3 as the synthesizer; HOW the user determines their priority weighting is the user's choice, not a Q-tree piece. **Not a Missing Piece.**

### Full evaluation (4 additional dimensions)

| Dimension | Verdict |
|---|---|
| Tractability | PASS — each piece is a focused pass |
| Interface clarity | PASS — interfaces named in Step 5; preconditions SA1–SA4 explicit |
| Balance | PASS — pieces are roughly proportional (each is small for a small inquiry) |
| Confidence | PASS — top-down/bottom-up agree |

**All 7 dimensions PASS.**

---

## Final Deliverable

### Coupling Map

- **C1 (Per-verdict profiles)** — W1, W2, W3; pairwise low coupling
- **C2 (Hybrid space)** — Q2; consumes one-way from C1
- **C3 (Verdict synthesis)** — Q3; consumes from C1, C2, parameters E4 + E6
- **C4 (Action specification)** — Q4; consumes from C3

### Question Tree

```
The Whole: "What is a good name for /navigation — with concrete first step?"
├── Q1 — Per-verdict deeper profiles
│   ├── Q1a — W1 (keep /navigation) profile
│   ├── Q1b — W2 (rename to /directions) profile
│   └── Q1c — W3 (rename to /next-moves) profile
├── Q2 — Hybrid space (combinations beyond W1–W3)
├── Q3 — Verdict synthesis (consumes Q1+Q2 + weighting + switching cost)
└── Q4 — First-step action (consumes Q3's top pick)
```

### Interface Map

| Edge | Flow | Direction |
|---|---|---|
| Q1a/b/c → Q2 | compatibility for hybrids | one-way |
| Q1a/b/c → Q3 | per-verdict profiles | one-way |
| Q2 → Q3 | hybrid candidates | one-way |
| E4 weighting → Q3 | parameter | cross-cutting |
| E6 switching cost → Q3 | parameter | cross-cutting |
| Q3 → Q4 | top verdict | one-way |

**Shared interface preconditions (SA1–SA4):**
- SA1: Initial candidate set = W1, W2, W3
- SA2: 7-dimension naming framework
- SA3: Switching cost ~30 min for any rename; ~zero for keep
- SA4: Project terminology drift recoverable via cleanup

### Dependency Order

```
Phase 1 (parallel): Q1a — Q1b — Q1c
Phase 2:            Q2
Phase 3:            Q3
Phase 4:            Q4
```

### Self-Evaluation

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PASS |
| Confidence | PASS |

**Decomposition is committed.** Innovation can proceed with Q1a–c in parallel + Q2 hybrid generation. Critique then evaluates against the 7 dimensions.
