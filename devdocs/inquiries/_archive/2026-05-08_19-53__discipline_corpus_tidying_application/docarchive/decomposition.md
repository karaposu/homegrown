# Decomposition — Discipline-corpus tidying application

## User Input

```
Validate the partition pointed at by sensemaking. Test whether Q7 (REFINES amendment)
collapses into Q1 (spec addendum) or CONCLUDE. Test whether per-discipline plans
(Q2-Q6) are 5 pieces or 1 piece with 5 instances. Don't over-decompose.
```

---

## Step 1 — Perceive Coupling Topology

### Elements (post-sensemaking)

- **Three-Forms framing** (new descriptive content)
- **Phase-fit precision** (new descriptive content)
- **Spec addendum artifact** — file change to `enes/step_refinement.md`
- **Per-discipline plans** — 5 sets of concrete edit instructions
- **REFINES amendment** — relationship metadata (this inquiry → prior inquiry)
- **Shared read-only dependencies:** sense-making's stabilized model (the Three Forms + 4 sub-types + phase-fit precision); prior inquiry's `enes/step_refinement.md` (existing file to amend); prior inquiry's finding; exploration's per-discipline audit; placement convention.

### Coupling assessment

| Pair | Coupling | Reason |
|---|---|---|
| Three-Forms framing ↔ phase-fit precision | Medium | Both add descriptive content to same spec file; share audience (future contributors) and surface (the spec). Naturally co-located in one addendum. |
| Spec addendum ↔ Per-discipline plans | Weak (read-only flow) | Plans REFERENCE the addendum (Form 1/2/3 names + sub-types) but don't co-edit. Pure one-way read flow. |
| Per-discipline plans ↔ each other | Very weak | Each plan is for a different discipline; per-instance lifting work doesn't cross disciplines. |
| REFINES amendment ↔ Spec addendum | Weak | Amendment is metadata about extension; addendum is the extension content. Different surfaces (frontmatter / Changes-from-Prior section vs. spec content). |
| REFINES amendment ↔ Per-discipline plans | None | Amendment captures inquiry-level relationship; plans are independent application work. |

### Coupling map

```
                          ┌──────────────────────────────┐
                          │  Shared read-only:           │
                          │  - Sense-making SV6 model    │
                          │  - enes/step_refinement.md   │
                          │  - Prior inquiry finding     │
                          │  - Exploration audit         │
                          │  - Placement convention      │
                          └──────────┬───────────────────┘
                                     │
              ┌──────────────────────┼──────────────────────┐
              │                      │                      │
              ▼                      ▼                      ▼
        ┌──────────┐          ┌──────────┐          ┌──────────────────┐
        │ Q1:      │ ───── ▶ │ Q2-Q6:   │          │ REFINES amendment│
        │ Spec     │ read    │ Per-disc │          │ (handled by      │
        │ addendum │ only    │ plans (5)│          │  CONCLUDE — not  │
        │          │          │ parallel │          │  a separate Q)   │
        └──────────┘          └──────────┘          └──────────────────┘

   Q1 → Q2-Q6 (read-only flow)
   Q2-Q6 are parallel-independent
   REFINES amendment collapses into CONCLUDE's frontmatter + Changes-from-Prior section
```

### Q7 collapse test

The REFINES amendment is metadata: (a) `refines:` field in the finding's frontmatter; (b) a "Changes from Prior" section in the finding body. Both are handled by CONCLUDE's standard template (per `homegrown/protocols/conclude.md`). Innovation doesn't need to generate "amendment proposals"; CONCLUDE handles it automatically when the conclude step runs with the correct frontmatter input. **Q7 collapses.** Final partition: 6 pieces (Q1 spec addendum + Q2-Q6 per-discipline plans).

### Q2-Q6 split test

Per-discipline plans share STRUCTURE (each tags candidates by Form / sub-type, decides lift/leave/restructure, fixes asymmetries, notes Pattern B) but have different CONTENT (different candidates, different sub-types, different Pattern B states, different verdict potentials in critique). Test against tractability + over-decomposition criteria:

- Tractability: each plan addresses one discipline, 3-6 candidates, structured decisions. Tractable in one focused pass per plan.
- Over-decomposition: would treating them as 1 piece with 5 instances be cleaner? No — innovation would generate 5 per-discipline proposals anyway, and per-discipline visibility (different verdicts possible per plan in critique) is clearer with 5 separate pieces.

**5 separate pieces. Q2-Q6 stand.**

---

## Step 2 — Detect Boundaries (Top-Down)

Two clusters, then six pieces:

**Cluster A (pattern-level):** spec addendum (Q1). One piece.
**Cluster B (per-discipline application):** five plans, one per MVL+ discipline (Q2-Q6).

REFINES amendment (formerly Q7) collapses into CONCLUDE's normal output. Not a piece.

---

## Step 3 — Validate Boundaries (Bottom-Up)

Atomic options cluster naturally per piece:

- **Q1 atoms:** location-of-addendum (after existing two-subtype section in `enes/step_refinement.md` / new file / split); content-form (full Three-Forms section + phase-fit paragraph / minimal acknowledgment / split); Form-3 example to cite (sense-making's structured ambiguity entry template / abstract / multiple).
- **Q2 atoms (explore):** lifts (jump scan; completeness-before-novelty); surgical (Type-Aware Probing visual marker; Coarse Scan in Layered Territories visual marker); borderlines (per-cycle-coverage; resolution-management zoom); Pattern B (verdict line at Convergence Criteria).
- **Q3 atoms (sense-making):** surgical (Load-bearing concept test visual marker; Specific-vs-pattern recognition cue visual marker); lift (Phase / Calibration-State — needs SPLIT recipe; Accommodation trigger — needs PHASE ASSIGNMENT + ANCHOR-LINK decision); borderline (structured ambiguity entry template — leave as Form 3 example); FM asymmetry (Specific-vs-pattern back-reference); Pattern B (verdict line at Saturation Indicators — explicitly the pilot-discipline candidate per prior inquiry's Q3 finding).
- **Q4 atoms (decompose):** surgical (Determination-mechanism piece check visual marker); lift (assumptions-not-data — FM-buried sub-type); borderline (confidence scoring); Pattern B (verdict line at Self-Evaluation, derivable from existing per-dimension PASS/FAIL).
- **Q5 atoms (innovate):** surgical (Output disposition categories; Axis coverage check); lift (Inversion depth check — embedded sub-type); borderline (Mechanism Exhaustion 3-step recovery); Pattern B (already has verdict but `**Overall:**` not `**Verdict:**` — prefix-only update).
- **Q6 atoms (td-critique):** surgical (Project-specific risk dimension check; Multi-axis prosecution depth check); lift (Constructive requirement — has-bold-prefix-but-not-standalone sub-type); borderlines (Burden-of-proof shift; severity-weighted KILL gate); Pattern B (already has verdict but `**Overall:**` not `**Verdict:**`).

Atoms cluster cleanly per piece. Bottom-up agrees with top-down. **Confidence: HIGH** on all six boundaries.

---

## Step 4 — Express as Question Tree

### Question 1 — Spec addendum

**Q:** What concrete artifact shape for the Step Refinement spec addendum (Three-Forms framing + phase-fit precision)?

**Verification criteria:**
- [ ] Names Three Forms with definitions: Form 1 standalone bolted-on subsection; Form 2 scattered with 4 named sub-types (FM-buried, inline bullet, orphan, embedded); Form 3 absorbed into spine template
- [ ] States phase-fit precision: descriptive-only at corpus-machinery; active tidying at per-discipline maintenance
- [ ] Cites the canonical Form-3 example (sense-making's structured ambiguity entry template at Phase 3) for grounding
- [ ] Names the 4 Form-2 sub-types' lifting recipes: extract-from-FM-corrective; split-list-bullet; assign-phase-to-orphan; lift-or-leave-embedded
- [ ] Located in `enes/step_refinement.md` (existing file from prior inquiry) without re-opening the existing two-subtype section — added as new section(s)
- [ ] Respects placement convention; doesn't introduce mechanical enforcement

### Questions 2–6 — Per-discipline tidy plans

For each of explore, sense-making, decompose, innovate, td-critique:

**Q:** What concrete tidy plan for [discipline] addressing (a) catalogued candidates needing visual markers; (b) Form-2 candidates to lift with sub-type tagging + lifting recipe; (c) borderlines to lift / leave / restructure with rationale; (d) FM cross-reference asymmetries to fix; (e) Pattern B (verdict-line) work for the discipline?

**Verification criteria (uniform across Q2-Q6):**
- [ ] Plan tags every candidate from exploration's audit (catalogued + missed + borderline) by Form + sub-type
- [ ] For each candidate: lift / leave-with-rationale / restructure decision named with reasoning
- [ ] FM cross-reference symmetry restored where lifting introduces new asymmetries
- [ ] Pattern B work specified (verdict line text to add; or "already compliant"; or "deferred per scope")
- [ ] Plan is tractable in one focused pass (~30-60 min implementation work)
- [ ] Plan respects descriptive-only at machinery (no linters; no validators); embraces active-tidying at maintenance (concrete edits)

**Per-discipline candidate counts:**
- Q2 (explore): 6 candidates (2 catalogued + 2 missed + 2 borderline)
- Q3 (sense-making): 5 candidates (3 catalogued + 1 missed + 1 borderline as Form-3 example) — **highest accountability** per user's pushback
- Q4 (decompose): 3 candidates (1 catalogued + 1 missed + 1 borderline)
- Q5 (innovate): 4 candidates (2 catalogued + 1 missed + 1 borderline)
- Q6 (td-critique): 5 candidates (2 catalogued + 1 missed + 2 borderline)

---

## Step 5 — Map Interfaces

### Cross-piece flows

| From | To | What flows | Direction | Strength |
|---|---|---|---|---|
| Q1 (spec addendum) | Q2, Q3, Q4, Q5, Q6 | Three Forms names + 4 sub-types + lifting recipes + phase-fit precision (terminology read by per-discipline plans) | Read-only | Strong-content but parallel-safe |
| Q2 ↔ Q3 ↔ Q4 ↔ Q5 ↔ Q6 | (none) | No cross-discipline flows; each plan is independent | — | None |

### Shared-context flows (read-only)

| From | To | What flows |
|---|---|---|
| Sense-making SV6 model | Q1, Q2-Q6 | Three Forms + 4 sub-types + phase-fit precision + per-discipline scopes |
| Exploration's per-discipline audit | Q2-Q6 | Per-discipline candidate lists with Form / sub-type tags |
| Prior inquiry's `enes/step_refinement.md` | Q1 | Existing file structure to extend |
| Prior inquiry's finding (`devdocs/inquiries/2026-05-08_18-56__discipline_corpus_emerging_pattern/finding.md`) | Q1, Q2-Q6 | Two named patterns + descriptive-formalization framing (preserved); Q3 (Pattern B contract proposal) for Pattern B reference |
| Placement convention (`enes/discipline_rule_placement.md`) | Q1, Q2-Q6 | Compliance constraint |

### REFINES amendment placement

Not a piece. Handled by CONCLUDE via:
- `refines:` frontmatter field pointing to `devdocs/inquiries/2026-05-08_18-56__discipline_corpus_emerging_pattern/finding.md`
- "Changes from Prior" section in this inquiry's finding (per CONCLUDE's standard template)

---

## Step 6 — Order by Dependency

### Strict ordering

- **Q1 must logically precede Q2-Q6** OR be drafted concurrently with reconciliation. Per-discipline plans cite Form names + sub-type recipes from Q1.
- **Q2-Q6 are parallel-independent** of each other.

### Practical sequencing options

| Option | Sequence | Notes |
|---|---|---|
| A | Q1 first → Q2-Q6 in parallel | Cleanest; Q1's terminology is fixed before plans use it |
| B | All 6 in parallel with reconciliation | Saves time; risks terminology drift between Q1 and Q2-Q6 |
| C | Q1 + Q3 first (sense-making is most accountable); then remaining Q2/Q4/Q5/Q6 | Validates approach on the most-pushed-back-on plan first |

For innovation: any of A/B/C is valid. Recommend Option A — Q1 first to fix vocabulary, then Q2-Q6 in parallel. Innovation can generate Q1 first then Q2-Q6 in one pass after Q1 is settled.

---

## Step 7 — Self-Evaluate

### Minimum (3 dimensions)

| Dimension | Check | Pass? |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | YES — Q1 fully independent; Q2-Q6 each independent (read-only Q1 dependency named explicitly) |
| **Completeness** | Do the pieces cover the whole? | YES — Q1 covers pattern-level deliverable (spec addendum); Q2-Q6 cover per-discipline application; REFINES amendment handled by CONCLUDE (out of decomposition scope) |
| **Reassembly** | Pieces + interfaces → original problem solved? | YES — combining Q1's addendum + Q2-Q6's plans + CONCLUDE's REFINES handling produces the inquiry's full deliverable per `_branch.md` goal |

### Determination-mechanism piece check

Per the bolted-on rule in decompose.md Step 7: load-bearing concepts (Three Forms; 4 Form-2 sub-types; phase-fit precision; per-discipline candidate lists) were determined and fixed in sense-making SV6 + exploration's audit. These are fixed inputs from earlier phases, not runtime variables.

Pattern B contract status (whether `homegrown/contracts/discipline_output.md` exists) — verifiable via inspection (it doesn't exist yet from the prior inquiry's deferred MUST). Fixed by inspection, not runtime.

Q-tree therefore does **not** need a separate determination-mechanism piece. The mechanism is "read sense-making SV6 + exploration audit"; that's a read-only flow on the interface map (already documented).

### Full evaluation (7 dimensions)

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| **Tractability** | PASS — each piece tractable in single focused pass (~30-60 min for per-discipline plans; ~20-30 min for spec addendum) |
| **Interface clarity** | PASS — Q1→Q2-Q6 read-only flow named; Q2-Q6 mutual independence stated; shared read-only context enumerated |
| **Balance** | PASS (with noted variance) — Q1 is moderate; Q3 is the largest per-discipline (5 candidates + the user-accountability factor); Q4 smallest (3 candidates). Variance is acceptable; not extreme imbalance |
| **Confidence** | HIGH — top-down (pattern-level + per-discipline) and bottom-up (atomic options cluster per piece) agree |

### Stopping criterion check

Per the decompose spec, stop when any of: tractable / atomic / over-decomposed / directly verifiable.

- Each piece is **tractable** in one focused pass.
- Atoms within each piece are concrete artifact-form / per-candidate-decision options. Further decomposition would split a single artifact-shape decision into sub-decisions or split a per-discipline plan into per-candidate sub-plans — over-decomposition.

**Stop here.** Six pieces is the right granularity.

---

## Final Deliverable

### Coupling Map

Two clusters: pattern-level (Q1) and per-discipline application (Q2-Q6, 5 pieces). Q1 → Q2-Q6 read-only flow (terminology). Q2-Q6 mutually independent. All pieces share read-only context from sense-making SV6, exploration audit, prior inquiry finding, placement convention. REFINES amendment collapses into CONCLUDE's normal frontmatter + Changes-from-Prior handling.

### Question Tree

```
Discipline-corpus tidying application (root)
│
├── Q1: What concrete artifact shape for the Step Refinement spec addendum?
│       Verification: 6 criteria (names Three Forms; states phase-fit precision;
│       cites Form-3 example; names 4 sub-type lifting recipes; located in
│       enes/step_refinement.md; respects placement convention)
│
├── Q2: Tidy plan for /explore (6 candidates: 2 surgical + 2 lifts + 2 borderlines)
├── Q3: Tidy plan for /sense-making (5 candidates: 2 surgical + 2 lifts incl.
│        Phase/Calib-State SPLIT and Accommodation trigger PHASE-ASSIGN +
│        1 borderline as Form-3 example; pilot Pattern B candidate)
│        ★ HIGHEST ACCOUNTABILITY per user's prior pushback ★
├── Q4: Tidy plan for /decompose (3 candidates: 1 surgical + 1 lift + 1 borderline)
├── Q5: Tidy plan for /innovate (4 candidates: 2 surgical + 1 lift + 1 borderline +
│        Pattern B prefix update)
└── Q6: Tidy plan for /td-critique (5 candidates: 2 surgical + 1 lift +
        2 borderlines + Pattern B prefix update)
```

### Interface Map

| Source | Target | Flow | Direction | Strength |
|---|---|---|---|---|
| Q1 spec addendum | Q2-Q6 | Three Forms names + sub-types + lifting recipes (terminology) | Read-only | Strong-content but parallel-safe |
| Sense-making SV6 | Q1, Q2-Q6 | Stabilized model | Read-only | — |
| Exploration audit | Q2-Q6 | Per-discipline candidate lists | Read-only | — |
| Prior inquiry finding | Q1, Q2-Q6 | Preserved verdicts + Pattern B contract proposal | Read-only | — |
| Placement convention | Q1, Q2-Q6 | Compliance constraint | Read-only | — |

REFINES amendment: handled by CONCLUDE's frontmatter + Changes-from-Prior section. Not a piece.

### Dependency Order

- Q1 logically precedes Q2-Q6 (terminology fix); Q2-Q6 mutually parallel.
- Recommended: Option A — Q1 first, then Q2-Q6 in parallel.

### Self-Evaluation Summary

| Dimension | Verdict |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PASS (Q3 highest accountability; minor scope variance) |
| Confidence | HIGH |

**Determination-mechanism piece check:** PASS (load-bearing concepts fixed in sense-making + exploration; no separate piece needed).

### Decomposition Verdict

Six pieces, parallel-independent (with one read-only Q1→Q2-Q6 terminology flow). Q3 (sense-making) carries highest accountability per the user's prior pushback. The decomposition is appropriately small — Q7 (REFINES amendment) collapsed into CONCLUDE's normal output; Q2-Q6 stayed as 5 separate pieces because per-discipline visibility supports per-discipline critique verdicts.

Innovation can generate proposals: Q1 first; then Q2-Q6 in any order. Critique evaluates each plan against phase-fit precision, prior-inquiry preservation, user's "brushing teeth" responsiveness (Q3 specifically), feasibility, and corpus coherence.
