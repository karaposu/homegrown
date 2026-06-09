# Decomposition: Meta-Question Taxonomy / Categories

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-05_10-03__meta_question_taxonomy_categories/_branch.md`

Upstream input: `sensemaking.md` — 11 SV6 commitments.

The 11 commitments to decompose:

| # | Commitment | Confidence |
|---|---|---|
| **SV6-1** | 2 axes: target-of-perception + substrate-mode | HIGH |
| **SV6-2** | 3 primary types: Structural / Relational / Interpretive | HIGH |
| **SV6-3** | 2 substrate modes: pre-context / post-context | HIGH |
| **SV6-4** | 6-cell grid (3 populated + 3 empty) | HIGH |
| **SV6-5** | Existing MQ mapping: MQ1=Structural/pre; MQ2=Relational/pre; MQ3=Interpretive/pre | HIGH |
| **SV6-6** | 2 post-context cognitive operations: Validate / Refine | HIGH |
| **SV6-7** | Bounded-extensibility rule (b) refinement: generalize per-category | MED-HIGH |
| **SV6-8** | Variant-(a) tension surfaced for user choice | HIGH |
| **SV6-9** | Fuzziness resolved at 3 dimensions | HIGH |
| **SV6-10** | 5 inherited commitments compatible; variant-(a) only friction | HIGH |
| **SV6-11** | Structural amendments + per-pass placement OUT OF SCOPE per Layer Commitment | HIGH (scope) |

---

## Step 1 — Perceive Coupling Topology

### Pairwise coupling assessment

| Pair | Coupling | Why |
|---|---|---|
| **SV6-1 ↔ SV6-2** | **STRONG** | Axis A (target-of-perception) names the 3 primary types; can't have one without the other. |
| **SV6-1 ↔ SV6-3** | **STRONG** | Axis B (substrate-mode) names the 2 substrate modes; same coupling. |
| **SV6-2 ↔ SV6-3** | **MODERATE** | Primary types and substrate modes are orthogonal axes; structurally distinct but together define the grid. |
| **SV6-1/2/3 ↔ SV6-4** | **STRONG (downstream)** | 6-cell grid is the direct consequence of the 2 axes × their values. |
| **SV6-3 ↔ SV6-6** | **STRONG (downstream)** | Post-context cognitive operations only exist in the post-context mode; SV6-6 depends on SV6-3. |
| **SV6-4 ↔ SV6-6** | **STRONG** | Post-context operations fill the post-context cells of the grid. |
| **SV6-1/2/3/4/6 ↔ SV6-5** | **STRONG (downstream)** | MQ mapping uses the taxonomy structure to classify MQ1/MQ2/MQ3. |
| **SV6-1/2/3 ↔ SV6-7** | **STRONG (downstream)** | Rule (b) refinement uses the primary types to define per-category authoring guidance. |
| **SV6-1/2/3/5 ↔ SV6-9** | **STRONG (downstream)** | Fuzziness resolution depends on the taxonomy + mapping. |
| **SV6-3/6 ↔ SV6-8** | **STRONG** | Variant-(a) tension is about post-context types (cells 4-6) and operations (Validate/Refine) being or not being in pass-2. |
| **SV6-5/7 ↔ SV6-10** | **STRONG** | Inherited commitment compatibility statuses reference the mapping (MQ2 absorbs prior commitments) + rule refinement (rule (b) status). |
| **SV6-8 ↔ SV6-10** | **STRONG** | Variant-(a) tension IS one of the inherited-commitment statuses in SV6-10's list. |
| **SV6-11 ↔ SV6-8/10** | **MODERATE** | Scope decision (structural amendments OOS) constrains how the variant-(a) tension and commitment statuses are presented (enumeration only, not authoring). |
| **SV6-11 ↔ all others** | **WEAK** | Scope decision is a meta-commitment; weakly coupled to substance. |

### Coupling map (visual summary)

```
                ┌──────────────────────────────────────────────────────┐
                │  CLUSTER 1 — TAXONOMY STRUCTURE                      │
                │                                                      │
                │   SV6-1 ━━━━━ SV6-2 ──── SV6-3                       │   ━━━ = STRONG
                │     ┃           ┃          ┃                          │   ─── = MODERATE
                │     ┃           ╲          ┃                          │
                │     ┃            ╲         ┃                          │
                │     ┃             ▼        ▼                          │
                │     ┃           SV6-4 ━━━━ SV6-6                      │
                │     ┗━━━━━━━━━━━━━━━━━━━━━━━┛                          │
                │                                                      │
                │   (2 axes + 3 primary types + 2 modes +              │
                │    6-cell grid + 2 post-context operations)          │
                └──────────────────────────────────────────────────────┘
                       │   │   │   │
                       ▼   ▼   ▼   ▼   (one-way downstream)
                ┌──────────────────────────────────────────────────────┐
                │  CLUSTER 2 — MAPPING + APPLICATIONS                  │
                │                                                      │
                │   SV6-5 ──── SV6-7 ──── SV6-9                         │
                │                                                      │
                │   (existing MQ mapping + rule (b) refinement +        │
                │    fuzziness resolution at 3 dimensions)             │
                └──────────────────────────────────────────────────────┘
                       │            │
                       ▼            ▼   (moderate-downstream)
                ┌──────────────────────────────────────────────────────┐
                │  CLUSTER 3 — BOUNDARIES                              │
                │                                                      │
                │   SV6-8 ━━━━ SV6-10 ──── SV6-11                       │
                │   (variant-a tension + commitment compatibility +     │
                │    structural amendments OOS)                        │
                └──────────────────────────────────────────────────────┘
                       ▲
                       │ (direct from P1 via SV6-3+6 → SV6-8)
                       └─────── from P1's post-context cells/operations
```

### Major clusters identified

- **CLUSTER 1 — Taxonomy Structure:** SV6-1 + SV6-2 + SV6-3 + SV6-4 + SV6-6. The 2 axes + 3 primary types + 2 substrate modes + 6-cell grid + 2 post-context cognitive operations. Together: the structural shape of the taxonomy.

- **CLUSTER 2 — Mapping + Applications:** SV6-5 + SV6-7 + SV6-9. The taxonomy's applications — how existing MQs map, how the bounded-extensibility rule refines per-category, how the user's "fuzziness" concern resolves.

- **CLUSTER 3 — Boundaries:** SV6-8 + SV6-10 + SV6-11. The boundary commitments — variant-(a) tension surfaced for user choice + inherited commitment compatibility verified + structural amendments OOS scope decision.

### Major boundaries (low-coupling valleys)

- **Cluster 1 ↔ Cluster 2** — moderate one-way boundary (taxonomy structure → applications); cleanest cut point
- **Cluster 2 ↔ Cluster 3** — moderate one-way boundary (applications inform commitment statuses)
- **Cluster 1 ↔ Cluster 3** — direct path via SV6-3+6 → SV6-8 (post-context cells/operations drive variant-(a) tension)

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, 3 pieces at cluster boundaries. Same Foundation → Applications → Boundaries pattern as prior task-define inquiries.

Could 2 pieces work? Collapsing Cluster 1 (taxonomy structure) into Cluster 2 (mapping + applications) would mix the structural shape with how it's USED. Two cognitive scopes; better to separate.

Could 4 pieces work? Splitting Cluster 1 into axes-only vs grid-+-operations would break tight coupling (SV6-1+2+3 are an integrated naming system).

**Boundary set: 3 pieces.**

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms

| Atom | Substantive claim |
|---|---|
| a1 | Axis A = target-of-perception |
| a2 | Axis B = substrate-mode |
| a3 | Type "Structural" — perceives intrinsic property |
| a4 | Type "Relational" — perceives task-to-project relation |
| a5 | Type "Interpretive" — perceives task-to-user-intent |
| a6 | Mode "pre-context" — answerable from task statement + LLM cognition alone |
| a7 | Mode "post-context" — requires surfaced material |
| a8 | 6-cell grid (3 types × 2 modes) |
| a9 | 3 cells currently populated, 3 empty |
| a10 | Post-context operation "Validate" — check prior perception |
| a11 | Post-context operation "Refine" — sharpen prior perception |
| a12 | Cognitive operation per cell (classify/perceive-need/infer-intent for pre-context; Validate/Refine for post-context) |
| a13 | MQ1 → Structural/pre-context (classify scope-axis) |
| a14 | MQ2 → Relational/pre-context (perceive-need + preparation substrate) |
| a15 | MQ3 → Interpretive/pre-context (infer-intent) |
| a16 | Clean mapping (no boundary cases among base 3) |
| a17 | Rule (b) refinement: generalize "constrain Rephrase" → "constrain some downstream operation" |
| a18 | Per-type rule (b) details (Structural → MultiScope; Relational → /surfacing; Interpretive → Rephrase; post-context → pass-2 ops) |
| a19 | Rule (a) + (c) preserved unchanged |
| a20 | Fuzziness dimension 1: category coverage (taxonomy IS the meaning) |
| a21 | Fuzziness dimension 2: MQ heterogeneity (structurally correct, not defect) |
| a22 | Fuzziness dimension 3: extension authoring (per-type guidance) |
| a23 | Variant-(a) tension surfaced (Rephrase-only-in-pass-2 vs post-context MQs) |
| a24 | Two resolutions: (a) extend variant-a; (b) treat post-context as research frontier |
| a25 | Inquiry doesn't decide; user chooses |
| a26 | 5 inherited commitments status: 14-14 PRESERVED; 21-12 PRESERVED; 21-58 PRESERVED; variant-a TENSION; §2.3 (a)+(c) PRESERVED, (b) REFINED |
| a27 | Structural amendments OOS per Layer Commitment |
| a28 | Per-pass placement OOS per Layer Commitment |
| a29 | Downstream sequence preview (meaning → structural) |

29 atoms total.

### Grouping check

| Cluster | Atoms naturally grouped |
|---|---|
| **CLUSTER 1 (Taxonomy Structure)** | a1, a2 (axes) + a3, a4, a5 (primary types) + a6, a7 (substrate modes) + a8, a9 (grid) + a10, a11 (post-context operations) + a12 (cognitive operations per cell). All 12 atoms describe the structural shape. ✓ |
| **CLUSTER 2 (Mapping + Applications)** | a13, a14, a15, a16 (MQ mapping) + a17, a18, a19 (rule (b) refinement) + a20, a21, a22 (fuzziness 3 dimensions). All 10 atoms describe how the taxonomy is applied. ✓ |
| **CLUSTER 3 (Boundaries)** | a23, a24, a25 (variant-a tension) + a26 (commitment compatibility status) + a27, a28, a29 (scope decisions + downstream preview). All 7 atoms describe boundary commitments. ✓ |

**Bottom-up matches top-down.** All 29 atoms group cleanly; no atoms split across clusters; no atoms wrongly grouped.

**Confidence: HIGH.**

---

## Step 4 — Express as Question Tree

### P1 — Taxonomy Structure Bundle

**Question:** What is the structural shape of the meta-question taxonomy — what axes distinguish meta-questions, what types result, what substrate modes apply, and how do the axes combine into a grid with per-cell cognitive operations?

**Verification criteria:**
- [ ] V1.1 — 2 axes named (target-of-perception + substrate-mode) with definitions
- [ ] V1.2 — 3 primary types named (Structural / Relational / Interpretive) with structural definitions (what each perceives)
- [ ] V1.3 — 2 substrate modes named (pre-context / post-context) with structural definitions
- [ ] V1.4 — 6-cell grid stated (3 × 2); current population status (3 cells populated, 3 empty)
- [ ] V1.5 — 2 post-context cognitive operations named (Validate / Refine) with structural definitions
- [ ] V1.6 — Per-cell cognitive operation specified (classify/perceive-need/infer-intent for pre-context; Validate/Refine for post-context)

**Independence check:** Can this piece be worked on without P2/P3? YES — taxonomy structure is foundational; doesn't require knowing how existing MQs map or what commitments are inherited.

### P2 — Mapping + Applications Bundle

**Question:** How does the taxonomy apply — how do the 3 existing base MQs map into it, how does the bounded-extensibility rule refine per-category, and how does the taxonomy resolve the user's "fuzziness" critique?

**Verification criteria:**
- [ ] V2.1 — Existing MQ mapping committed (MQ1=Structural/pre; MQ2=Relational/pre; MQ3=Interpretive/pre) with reasoning per MQ
- [ ] V2.2 — Clean mapping verified (no boundary cases among base 3)
- [ ] V2.3 — Rule (b) refinement committed (generalize "constrain Rephrase" → "constrain some downstream operation"; per-type details for Structural/Relational/Interpretive/post-context)
- [ ] V2.4 — Rules (a) and (c) preserved unchanged
- [ ] V2.5 — Fuzziness resolution at 3 dimensions committed (category coverage; MQ heterogeneity as feature-not-defect; extension authoring per-type)
- [ ] V2.6 — Internal consistency check: mapping + rule refinement + fuzziness resolution all cohere under the P1 taxonomy structure

**Independence check:** Can this piece be worked on without P1/P3? PARTIAL — needs P1's taxonomy structure as input (mapping is mapping-INTO-the-taxonomy; rule refinement uses the typed categories); doesn't need P3.

### P3 — Boundaries Bundle

**Question:** What boundary commitments does the taxonomy carry — what tension exists with prior commitments (specifically variant-(a) from 2026-06-05_00-11), how do the 5 inherited commitments fare, and what work is explicitly out of scope?

**Verification criteria:**
- [ ] V3.1 — Variant-(a) tension surfaced explicitly (Rephrase-only-in-pass-2 vs post-context MQs); two resolutions named (extend variant-a OR research frontier); user-decision framing committed
- [ ] V3.2 — Inherited commitment compatibility committed for all 5 priors (14-14 / 21-12 / 21-58 / variant-a / §2.3) with status (PRESERVED / REFINED / TENSION)
- [ ] V3.3 — Structural amendments OOS named per Layer Commitment (downstream of taxonomy settlement)
- [ ] V3.4 — Per-pass placement OOS named per Layer Commitment (downstream of taxonomy + variant-a decision)
- [ ] V3.5 — Downstream sequence preview offered (meaning-layer follow-up on placement → structural-layer amendments; user-scheduled)

**Independence check:** Can this piece be worked on without P1/P2? NO — variant-(a) tension is about post-context types (from P1); commitment compatibility uses the taxonomy mapping (from P2). Linear dependency.

---

## Step 5 — Map Interfaces

| # | Source | Target | What flows | Direction | Assumptions checked |
|---|---|---|---|---|---|
| **I1** | P1 (taxonomy structure) | P2 (mapping) | The typed taxonomy as ground for MQ classification | one-way | P2 assumes 3 primary types + 2 substrate modes exist; verified by P1. |
| **I2** | P1 (3 primary types) | P2 (rule (b) refinement) | The typed categories as ground for per-category authoring guidance | one-way | P2's V2.3 assumes types distinguish downstream consumers; verified by P1's V1.2. |
| **I3** | P1 (post-context cells + operations) | P3 (variant-a tension) | The structural existence of post-context types as basis for the variant-a tension | one-way | P3's V3.1 assumes post-context types are structurally distinct; verified by P1's V1.5+V1.6. |
| **I4** | P2 (mapping + rule refinement) | P3 (commitment compatibility status) | MQ mapping informs which commitments are absorbed; rule refinement determines §2.3's status | one-way | P3's V3.2 assumes mapping is clean (no boundary cases) + rule refinement is committed; verified by P2's V2.1+V2.3. |

### Assumptions-not-data check

- **P1 ↔ P2 hidden assumptions:** P2 assumes the taxonomy is operation-agnostic at the type level (per Ambiguity 2 resolution at sensemaking). Verified.
- **P1 ↔ P3 hidden assumptions:** P3 assumes post-context types are conceptually-real-but-currently-empty (per Ambiguity 4 resolution). Verified.
- **P2 ↔ P3 hidden assumptions:** P3 assumes rule (b) refinement is the ONLY rule change (rules a + c preserved). Verified.

**No hidden coupling.**

---

## Step 6 — Order by Dependency

```
┌──────────────────────────────────────┐
│  P1 (taxonomy structure)             │  ← FIRST: foundational
│   2 axes + 3 types + 2 modes         │
│   + 6-cell grid + 2 post-context ops │
└──────────────────────────────────────┘
                │
                ▼ (I1 + I2)
┌──────────────────────────────────────┐
│  P2 (mapping + applications)         │  ← SECOND: applies P1's taxonomy
│   MQ mapping + rule (b) refinement   │
│   + fuzziness resolution             │
└──────────────────────────────────────┘
                │
                ▼ (I4)
┌──────────────────────────────────────┐
│  P3 (boundaries)                     │  ← LAST: depends on P1 + P2
│   variant-a tension + commitment     │
│   compatibility + OOS scope          │
└──────────────────────────────────────┘
            ▲
            │ (I3 — direct path from P1's post-context structure)
            └────── from P1's V1.5+V1.6
```

### Dependency order

1. **P1 (taxonomy structure)** — independent; foundational
2. **P2 (mapping + applications)** — depends on P1
3. **P3 (boundaries)** — depends on P1 + P2 (linear chain)

### Parallel work opportunities

Within P1: axes, types, modes, grid, operations can be articulated in parallel after the cluster's structure is established.

Within P2: MQ mapping, rule (b) refinement, fuzziness resolution are 3 independent enumerations.

Within P3: variant-a tension, commitment status table, OOS scope are 3 independent commitments.

### Circular dependency check

None. Linear chain P1 → P2 → P3.

---

## Step 7 — Self-Evaluate

### Minimum evaluation (3 dimensions)

| Dimension | Check | Pass/Fail | Note |
|---|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS** | P1 standalone (foundational). P2 needs P1. P3 needs P1+P2. Linear. |
| **Completeness** | Do the pieces cover the whole (all 11 SV6 commitments)? | **PASS** | All 11 covered: P1 covers SV6-1+2+3+4+6 (5); P2 covers SV6-5+7+9 (3); P3 covers SV6-8+10+11 (3). Sum = 11. ✓ |
| **Reassembly** | Pieces + interfaces reconstruct the SV6 model? | **PASS** | P1 + P2 + P3 + interfaces I1-I4 = full SV6 model. Given taxonomy + mapping + boundaries → meta-question taxonomy commitment is reconstructed. |

### Full evaluation (7 dimensions)

| Dimension | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS (each piece is one focused commitment-bundle) |
| Interface clarity | PASS (4 interfaces explicit; assumptions verified) |
| Balance | **PARTIAL** (P1 = 12 atoms / 41%; P2 = 10 / 34%; P3 = 7 / 24%; P1 weightiest because it carries the substantive taxonomy structure; not over-decomposable since axes+types+modes+grid+operations are tightly coupled) |
| Confidence | **PASS (HIGH)** (top-down + bottom-up AGREE on all boundaries) |

**Self-evaluation: PASS (3/3 minimum + 6/7 full with 1 acceptable PARTIAL).**

### Determination-mechanism piece check

Are there load-bearing concepts whose use depends on RUNTIME DETERMINATIONS?
- "Structural / Relational / Interpretive" — meaning-layer commitments, not runtime predicates. N/A.
- "Pre-context / post-context" — meaning-layer commitments, not runtime predicates. N/A.
- "Validate / Refine" — cognitive operations, applicable at runtime within Task-Define but specified at meaning-layer here. N/A.
- "Variant-(a) tension resolution" — explicitly user-decision; not a runtime determination. N/A.

No runtime determinations in scope. **Determination-mechanism check: PASS via Layer Commitment scope.**

---

## Final Deliverable

### 1. Coupling Map (summary)

Three clusters at the natural Foundation → Applications → Boundaries pattern:
- **Cluster 1 — Taxonomy Structure:** SV6-1+2+3+4+6 (STRONG internal)
- **Cluster 2 — Mapping + Applications:** SV6-5+7+9 (MODERATE internal; sister-application claims)
- **Cluster 3 — Boundaries:** SV6-8+10+11 (MODERATE internal; sister-boundary claims)

Boundaries at cluster edges; one-way flow between clusters.

### 2. Question Tree

| Piece | Question | Verification criteria count |
|---|---|---|
| **P1** | What is the structural shape of the taxonomy (axes, types, modes, grid, operations)? | 6 |
| **P2** | How does the taxonomy apply (MQ mapping, rule (b) refinement, fuzziness resolution)? | 6 |
| **P3** | What boundary commitments does the taxonomy carry (variant-(a) tension, commitment compatibility, OOS scope)? | 5 |

Total verification criteria: 17 (6+6+5).

### 3. Interface Map

| # | Flow | Type |
|---|---|---|
| **I1** | P1 taxonomy structure → P2 mapping | one-way; assumptions verified |
| **I2** | P1 3 primary types → P2 rule (b) per-category refinement | one-way; assumptions verified |
| **I3** | P1 post-context cells/operations → P3 variant-(a) tension | one-way; assumptions verified |
| **I4** | P2 mapping + rule refinement → P3 commitment compatibility status | one-way; assumptions verified |

All 4 interfaces explicit; no hidden coupling.

### 4. Dependency Order

P1 → P2 → P3. Linear chain. No circular dependencies. Within-piece sub-commitments parallel-able.

### 5. Self-Evaluation

| Dimension | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PARTIAL (acceptable — P1 carries taxonomy structure; not over-decomposable) |
| Confidence | PASS (HIGH; top-down ↔ bottom-up AGREE) |

**Determination-mechanism check:** PASS via Layer Commitment scope.

**Overall: PROCEED to Innovation.** 3 pieces; 4 interfaces; linear dependency order; min eval 3/3 PASS; full eval 6/7 with 1 acceptable PARTIAL.

---

## Pattern Note

This decomposition arrives at **3 pieces** matching the recurring **Foundation → Applications → Boundaries** pattern seen across recent task-define inquiries (21-12, 21-58, 17-46, 2026-06-05_00-11). The pattern is stable for meaning-layer settlements that synthesize from multiple priors: Foundation contains the principal substance, Applications contains how the substance is used, Boundary contains scope/tension/inheritance commitments.
