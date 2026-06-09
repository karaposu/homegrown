# Decomposition: Task-Define MQ2 — Dispatch-Substrate vs Preparation-Substrate

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-06-04_21-58__task_define_dispatch_vs_preparation_substrate/_branch.md`

Upstream input: `sensemaking.md` — 8 SV6 commitments closing all 8 surfacing frontier flags + additional perception/action split status.

The 8 commitments to decompose:

| # | Commitment | Closes flag | Confidence |
|---|---|---|---|
| **SV6-1** | Always-invoke premise = ACCEPTED (/surfacing always invoked) | F1 | MED-HIGH |
| **SV6-2** | Corrected concept name = "preparation substrate" | F2 / F8 | HIGH |
| **SV6-3** | Substance from 21-12 finding = SURVIVES UNCHANGED (function-name-independent) | F5 | HIGH |
| **SV6-4** | Mode 6 detection rule = SURVIVES with cosmetic rename | F3 | HIGH |
| **SV6-5** | Perception/action split = SURVIVES with action target shifted to formulation | additional | HIGH |
| **SV6-6** | Lightweight-stance interpretation = concept-level only; substance unchanged | F6 | MED-HIGH |
| **SV6-7** | Cascading corrections = 7 targets (6 MUSTs + 1 COULD) | F4 / F7 | HIGH |
| **SV6-8** | Structural-amendment authoring = OUT OF SCOPE per Layer Commitment | derived from F7 | HIGH (scope) |

---

## Step 1 — Perceive Coupling Topology

For each pair of commitments, ask: "If I change one, does the other need to change?"

### Pairwise coupling assessment

| Pair | Coupling | Why |
|---|---|---|
| **SV6-1 ↔ SV6-2** | **STRONG (one-way)** | Concept correction is downstream of premise acceptance. Without acceptance, no rename. SV6-1 → SV6-2. |
| **SV6-1 ↔ SV6-3** | **MODERATE (one-way)** | Substance survival is verified by demonstrating function-name-independence under accepted premise. SV6-1 → SV6-3. |
| **SV6-1 ↔ SV6-4** | **MODERATE (one-way)** | Mode 6 survival depends on rule's name-independence verified under premise. SV6-1 → SV6-4. |
| **SV6-1 ↔ SV6-5** | **MODERATE (one-way)** | Split survival depends on action target being meaningful under preparation framing. SV6-1 → SV6-5. |
| **SV6-2 ↔ SV6-3** | **WEAK** | Substance survival independent of which name is selected (preparation vs input vs framing all preserve substance). |
| **SV6-2 ↔ SV6-4** | **STRONG (one-way)** | Mode 6 rename follows directly from concept rename (concept name → rule name update). SV6-2 → SV6-4 (cosmetic). |
| **SV6-2 ↔ SV6-5** | **WEAK** | Split survival is concept-name-independent in mechanism. |
| **SV6-3 ↔ SV6-4** | **MODERATE** | Both survive together; both depend on name-independence claim. Sibling-survival claims. |
| **SV6-3 ↔ SV6-5** | **MODERATE** | Both survive together as function-name-independent claims. |
| **SV6-3 ↔ SV6-6** | **STRONG** | SV6-6's "substance unchanged" is the same claim as SV6-3, restated from interpretation angle. |
| **SV6-4 ↔ SV6-5** | **MODERATE** | Both are survival-with-modification claims (rule cosmetic-renamed; split action-target-shifted). |
| **SV6-3/4/5/6 ↔ SV6-7** | **MODERATE-DOWNSTREAM (one-way)** | Corrections enumerate what changes once concept + substance + rule + split commitments are settled. → SV6-7 downstream. |
| **SV6-7 ↔ SV6-8** | **STRONG** | Scope decision constrains corrections enumeration to "identify only, not author." |
| **SV6-1/2 ↔ SV6-7** | **STRONG (one-way)** | Cascading corrections derive directly from concept rename (SV6-2) which derives from premise (SV6-1). Linear chain. |

### Coupling map (visual summary)

```
                ┌──────────────────────────────────┐
                │  CLUSTER 1 — PREMISE-AND-CONCEPT │
                │                                  │
                │   SV6-1 ━━━━━ SV6-2              │   ━━━ = STRONG
                │   (premise)   (concept name)     │   ─── = MODERATE
                └──────────────────────────────────┘
                       │  │  │  │
                       ▼  ▼  ▼  ▼   (moderate; survival under accepted premise)
                ┌──────────────────────────────────┐
                │  CLUSTER 2 — SURVIVAL BUNDLE     │
                │                                  │
                │   SV6-3 ━━━━━ SV6-6              │   (substance survives ≡ lightweight=concept-only)
                │     │   ╲   ╱   │                │
                │     │    ╲ ╱    │                │
                │     │    ╱ ╲    │                │
                │     │   ╱   ╲   │                │
                │   SV6-4 ───── SV6-5              │   (rule survives; split survives)
                │   (mode 6     (perception/        │
                │    rule)       action split)     │
                └──────────────────────────────────┘
                       │                │
                       └────────┬───────┘
                                ▼  (moderate-downstream)
                ┌──────────────────────────────────┐
                │  CLUSTER 3 — CORRECTIONS BUNDLE  │
                │                                  │
                │   SV6-7 ━━━━━ SV6-8              │
                │   (cascading  (scope decision    │
                │    corrections out-of-scope)     │
                │    enum)                         │
                └──────────────────────────────────┘
```

### Major clusters identified

- **CLUSTER 1 — Premise-and-Concept Bundle:** SV6-1 + SV6-2. The structural acceptance of always-invoke + the corrected concept name. Tightly coupled (one-way); foundation for all else.
- **CLUSTER 2 — Survival Bundle:** SV6-3 + SV6-4 + SV6-5 + SV6-6. Four "survives under concept correction" commitments: substance survives + mode 6 rule survives + split survives + interpretation is concept-only. All express function-name-independence.
- **CLUSTER 3 — Corrections Bundle:** SV6-7 + SV6-8. Cascading corrections enumeration + out-of-scope scope decision.

### Major boundaries (low-coupling valleys)

- **Cluster 1 ↔ Cluster 2** — moderate boundary (one-way: premise+concept enables survival verification); cleanest cut point in topology
- **Cluster 2 ↔ Cluster 3** — moderate boundary (one-way: survival commitments inform what corrections look like)
- **Cluster 1 ↔ Cluster 3** — moderate boundary (one-way: concept rename directly triggers spec + finding renames)

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, 3 pieces at cluster boundaries.

Could 2 pieces work? Collapsing Cluster 1 (premise + concept) into Cluster 2 (survivals) would mix the foundation (premise acceptance + concept rename) with the survival verifications — two cognitive scopes mixed. Better to separate.

Could 4 pieces work? Splitting Cluster 2 by survivor-type (substance/rule/split) would break the function-name-independence claim's unity (all three are sister-claims of the same principle). Wrong-boundary risk.

Could Cluster 3 split into corrections (SV6-7) vs scope (SV6-8) as two pieces? They share the boundary-decision theme. Over-decomposition risk; both are short and cohesive.

**Boundary set: 3 pieces** at Cluster 1 / Cluster 2 / Cluster 3.

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atoms

| Atom | Substantive claim |
|---|---|
| a1 | Always-invoke premise acceptance (premise structurally defensible per /surfacing spec + lightweight-stance) |
| a2 | Precise-meaning-of-dispatch argument (routing/decision; if no decision, no dispatch) |
| a3 | "Preparation substrate" naming with 3 justifications (function-aligned + user-language-aligned + lightweight-connoted) |
| a4 | Alternative concept names rejected (input substrate / framing substrate / pre-shape / lightweight-priors) |
| a5 | Substance verdict element preserves under preparation framing (perceived context-need) |
| a6 | Substance kinds element preserves (input-formulation guidance for /surfacing) |
| a7 | Substance stance element preserves (relational framing for /surfacing) |
| a8 | Substance hypothetical-relational mode preserves (substrate-compliance vehicle) |
| a9 | Mode 6 rule structural content (binary detection on verdict + kind content) preserves |
| a10 | Mode 6 rule cosmetic rename to "MQ2-answer-missing-preparation-info" |
| a11 | Perception/action split architectural invariant preserved |
| a12 | Action target shifts from invocation-decision to input-formulation |
| a13 | Runner-mediated alignment mechanism preserved (re-grounded as input-formulation) |
| a14 | Lightweight-stance interpretation = concept-only (substance shape unchanged) |
| a15 | Cascading correction at §2.4 spec (RENAME + revise "decide whether to invoke" wording) |
| a16 | Cascading correction at §4.2 mode 6 (RENAME + reword amendment text) |
| a17 | Cascading correction at explanatory doc (REPAIR "dispatch substrate" passage) |
| a18 | Cascading correction at 21-12 reframe finding §4 table (REPAIR gating language + supersedes note) |
| a19 | Cascading correction at 14-14 mode 6 finding amendment text (REPAIR terminology) |
| a20 | Cascading correction at 15-39 original meaning-layer finding (SUPERSEDES note for concept introduction) |
| a21 | Cascading correction at 17-02 MQ2 verification finding (UPDATE terminology, light - COULD) |
| a22 | Structural-amendment authoring OUT OF SCOPE per Layer Commitment (enumerate only) |

22 atoms total.

### Grouping check

| Cluster | Atoms naturally grouped |
|---|---|
| **CLUSTER 1 (Premise-and-Concept Bundle)** | a1, a2 (SV6-1) + a3, a4 (SV6-2). All 4 atoms about premise acceptance + concept naming. ✓ |
| **CLUSTER 2 (Survival Bundle)** | a5, a6, a7, a8 (SV6-3) + a9, a10 (SV6-4) + a11, a12, a13 (SV6-5) + a14 (SV6-6). All 10 atoms describe survival of substance/rule/split under the concept correction. ✓ |
| **CLUSTER 3 (Corrections Bundle)** | a15-a21 (SV6-7) + a22 (SV6-8). All 8 atoms describe cascading corrections + scope. ✓ |

**Bottom-up matches top-down.** All 22 atoms group cleanly into the 3 clusters; no atoms split across clusters; no atoms wrongly grouped.

**Confidence:** HIGH (top-down + bottom-up AGREE on all 3 boundaries).

---

## Step 4 — Express as Question Tree

### P1 — Premise-and-Concept Bundle

**Question:** Is the user's "always-invoke" premise structurally accepted, and what is the corrected substrate-role concept name for MQ2's answer (with justification across function-alignment + user-language-alignment + lightweight-connotation)?

**Verification criteria:**
- [ ] V1.1 — premise acceptance named (ACCEPTED) with structural defensibility reasoning (/surfacing's lightweight design + always-invoke's consistency + user's runner-architecture knowledge)
- [ ] V1.2 — concept name committed ("preparation substrate") with three-axis justification (function-aligned + user-language-aligned + lightweight-connoted)
- [ ] V1.3 — alternative names rejected explicitly (input substrate / framing substrate / pre-shape input / lightweight-priors) with reasoning
- [ ] V1.4 — internal consistency check: premise acceptance and concept name cohere (always-invoke implies no dispatch → concept must be non-routing)

**Independence check:** Can this piece be worked on without P2/P3? YES — premise acceptance + concept naming is foundational; doesn't require survival commitments or corrections to be named first.

### P2 — Survival Bundle

**Question:** Under the accepted premise + corrected concept, do the existing structural commitments (substance from 21-12 finding; mode 6 detection rule; perception/action split) survive, and what survival modifications apply (cosmetic rename for mode 6; action-target shift for split; unchanged for substance)?

**Verification criteria:**
- [ ] V2.1 — substance survival verified element-by-element (verdict + kinds + stance + hypothetical-relational mode all preserve under preparation framing; substance is function-name-independent)
- [ ] V2.2 — mode 6 rule survival verified (structural content unchanged; cosmetic rename to "MQ2-answer-missing-preparation-info")
- [ ] V2.3 — perception/action split survival verified (split architectural invariant preserved; action target shifts from invocation-decision to input-formulation)
- [ ] V2.4 — lightweight-stance interpretation committed (concept-level only; substance shape unchanged; user's "lightweight way" applies to CONCEPT not SUBSTANCE)
- [ ] V2.5 — internal consistency check: all four survival commitments cohere under the function-name-independence principle

**Independence check:** Can this piece be worked on without P1/P3? PARTIAL — needs P1's premise acceptance + concept name as input (survival is survival UNDER the concept correction). Doesn't need P3.

### P3 — Corrections Bundle

**Question:** What cascading corrections are needed across spec sections + explanatory doc + 4 prior findings, and what is their severity (MUST/COULD) — all flagged as enumeration-only per Layer Commitment (structural-amendment authoring out of scope)?

**Verification criteria:**
- [ ] V3.1 — 7 correction targets named explicitly with intervention shape (RENAME / REPAIR / SUPERSEDES note / UPDATE terminology) and target file path
- [ ] V3.2 — severity classification committed for each target (6 MUSTs + 1 COULD)
- [ ] V3.3 — scope decision stated (structural-amendment authoring OUT OF SCOPE per Layer Commitment; enumeration only)
- [ ] V3.4 — internal consistency check: corrections derive from P1's concept rename + P2's survival modifications (mode 6 rename derived from concept rename; gating-language correction derived from split's action-target shift)

**Independence check:** Can this piece be worked on without P1/P2? NO — corrections are downstream of both concept rename (P1) and survival commitments (P2). Linear dependency.

---

## Step 5 — Map Interfaces

| # | Source | Target | What flows | Direction | Assumptions checked |
|---|---|---|---|---|---|
| **I1** | P1 (premise acceptance) | P2 (survival verifications) | The accepted always-invoke premise as ground for substance/rule/split survival reasoning | one-way | P2 assumes premise acceptance enables function-name-independence claims. Verified: under always-invoke, substance/rule/split don't depend on dispatch-naming. |
| **I2** | P1 (concept name) | P2 (mode 6 rename) | The "preparation substrate" name → SV6-4's cosmetic rename to "MQ2-answer-missing-preparation-info" | one-way | P2 assumes concept rename propagates to rule name. Verified: mode 6 rule's name was "missing-dispatch-info"; renaming concept renames the rule. |
| **I3** | P1 (concept name + premise) | P3 (corrections enumeration) | The concept rename triggers spec + finding renames; the premise acceptance enables the corrections to be coherent | one-way | P3 assumes concept rename produces concrete correction targets. Verified: each correction target either renames "dispatch" → "preparation" or revises wording assuming always-invoke. |
| **I4** | P2 (survival commitments) | P3 (corrections shape) | Survival commitments determine correction shape (cosmetic vs substantive) — substance survives → 21-12 substance-text unchanged; gating language doesn't survive → 21-12 §4 table REPAIR | one-way | P3 assumes survival commitments distinguish which prior text survives vs needs correction. Verified: substance text in 21-12 stays; gating-language table in 21-12 §4 changes. |
| **I5** | P3 (SV6-8 scope) | P3 (SV6-7 corrections) | The out-of-scope scope decision constrains corrections to enumeration (not authoring) | one-way (internal to P3) | Corrections-enumeration assumes Layer Commitment scope. Verified: meaning-layer inquiry; structural-amendment authoring is downstream. |

### Assumptions-not-data check (per Step 5 refinement note)

Hidden coupling check: do pieces share assumptions not captured as data flows?

- **P1 ↔ P2 hidden assumptions:** P2 assumes the user-language-alignment of "preparation" extends to all survival commitments — the corrected concept name doesn't introduce new structural requirements. Verified: "preparation" is a noun phrase change; it doesn't change what's being preserved. Explicit via I1.
- **P1 ↔ P3 hidden assumptions:** P3 assumes the 7 correction targets are exhaustive (no additional cascading corrections lurking). Verified at sensemaking Ambiguity 7; counter-argument (only spec needs correction) tested and rejected. Explicit via I3.
- **P2 ↔ P3 hidden assumptions:** P3 assumes survival commitments map cleanly to correction-shape decisions (cosmetic renames where surviving; substantive corrections where not). Verified: mode 6 rule survives → §4.2 RENAME (cosmetic); gating language doesn't survive → 21-12 §4 REPAIR (substantive). Explicit via I4.

**No hidden coupling detected.** All interfaces explicit; all assumptions surfaced and verified.

---

## Step 6 — Order by Dependency

```
┌──────────────────────────────────┐
│  P1 (premise + concept)          │  ← FIRST: foundational
│   premise acceptance +           │
│   concept name committed         │
└──────────────────────────────────┘
                │
                ▼ (I1 + I2)
┌──────────────────────────────────┐
│  P2 (survival commitments)       │  ← SECOND: depends on P1
│   substance + rule + split       │
│   + lightweight interpretation   │
└──────────────────────────────────┘
                │
                │ (I4)
                ▼
┌──────────────────────────────────────────────────────────┐
│  P3 (corrections + scope)                                │  ← LAST: depends on P1 + P2
│   7 cascading correction targets                         │
│   + structural-amendment authoring OUT OF SCOPE          │
└──────────────────────────────────────────────────────────┘
            ▲                                  
            │ (I3 — direct path from P1)       
            └────────────── from P1 (concept rename → correction targets)
```

### Dependency order (linear)

1. **P1 (premise + concept)** — independent; foundational
2. **P2 (survival commitments)** — depends on P1 (survivals under accepted concept correction)
3. **P3 (corrections + scope)** — depends on P1 (concept rename triggers cascading) + P2 (survival commitments determine correction shape)

### Parallel work opportunities

Within P2: the four sub-commitments (SV6-3 substance, SV6-4 mode 6, SV6-5 split, SV6-6 lightweight interpretation) are sister-claims; verification of each is parallel-able. Same for P3's 7 correction targets — independent enumerations.

### Circular dependency check

None. All flows one-way: P1 → P2 → P3. No piece depends on its downstream.

---

## Step 7 — Self-Evaluate

### Minimum evaluation (3 dimensions — always run)

| Dimension | Check | Pass/Fail | Note |
|---|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS** | P1 foundational (standalone). P2 needs P1 (survival is survival UNDER concept correction). P3 needs P1+P2 (linear chain). Each piece internally coherent. |
| **Completeness** | Do the pieces cover the whole (all 8 SV6 commitments)? | **PASS** | All 8 covered: P1 covers SV6-1+SV6-2; P2 covers SV6-3+SV6-4+SV6-5+SV6-6; P3 covers SV6-7+SV6-8. No commitment falls through gaps. |
| **Reassembly** | Pieces + interfaces reconstruct the SV6 model? | **PASS** | P1 + P2 + P3 + interfaces I1-I5 = the full SV6 model. Given P1's premise+concept settled + P2's survivals verified + P3's corrections enumerated → the meaning-layer correction is reconstructed. |

### Full evaluation (7 dimensions)

| Dimension | Check | Pass/Fail | Note |
|---|---|---|---|
| **Independence** | (as above) | **PASS** | |
| **Completeness** | (as above) | **PASS** | |
| **Reassembly** | (as above) | **PASS** | |
| **Tractability** | Is each piece small enough for a single focused pass? | **PASS** | P1: 4 atoms (foundational claims). P2: 10 atoms (sister survival claims; parallel-able internally). P3: 8 atoms (enumeration + scope). Each piece is one focused articulation. |
| **Interface clarity** | Are all cross-piece flows explicit? No hidden dependencies? | **PASS** | 5 interfaces I1-I5 named with assumptions; assumptions-not-data check confirmed no hidden coupling. |
| **Balance** | Is complexity roughly proportional across pieces? | **PARTIAL** | P1: 4 atoms (18%). P2: 10 atoms (45%). P3: 8 atoms (37%). P2 is largest because the survival cluster IS the substantive content carrying forward from the concept correction. Acceptable — not an over-decomposition candidate (the 4 sister-survival claims are STRONGLY coupled via the function-name-independence principle). |
| **Confidence** | Do top-down and bottom-up agree on boundaries? | **PASS (HIGH)** | All 22 atoms group into the 3 clusters identified top-down; no splits or wrong-grouping. |

**Self-evaluation: PASS (3/3 minimum + 6/7 full with 1 acceptable PARTIAL on Balance).**

### Determination-mechanism piece check (per Step 7 refinement note)

The Q-tree commits the always-invoke premise, the "preparation substrate" concept name, the substance + rule + split survival, and the corrections enumeration. Are there load-bearing concepts whose use depends on a RUNTIME DETERMINATION?

- **"always-invoke"** — structural premise (compile-time architectural property), not runtime determination. N/A.
- **"preparation substrate"** — name, not runtime concept. N/A.
- **"substance survives"** — structural verification claim, not runtime predicate. N/A.
- **"perception/action split survives with action target shifted"** — architectural claim, not runtime check. N/A.

No load-bearing concepts whose use depends on runtime determination. Determination-mechanism check **N/A**; this is meaning-layer work where runtime determinations are out-of-scope per Layer Commitment (process-layer inherited).

---

## Final Deliverable

### 1. Coupling Map (summary)

Three clusters identified:
- **Cluster 1 — Premise-and-Concept Bundle:** SV6-1 + SV6-2 (STRONG internal; one-way upstream)
- **Cluster 2 — Survival Bundle:** SV6-3 + SV6-4 + SV6-5 + SV6-6 (STRONG-MODERATE internal; sister-survival claims via function-name-independence)
- **Cluster 3 — Corrections Bundle:** SV6-7 + SV6-8 (STRONG internal; scope constrains enumeration)

Boundaries at cluster edges; moderate (one-way) flow between clusters.

### 2. Question Tree

| Piece | Question | Verification criteria count |
|---|---|---|
| **P1** | Is the always-invoke premise accepted, and what is the corrected concept name with three-axis justification? | 4 |
| **P2** | Under accepted premise + corrected concept, do substance / mode 6 rule / perception-action split survive, and how does lightweight-stance interpret? | 5 |
| **P3** | What 7 cascading corrections are needed across spec + doc + 4 prior findings, with severity classification — all enumeration-only per Layer Commitment? | 4 |

Total verification criteria: 13 (4 + 5 + 4).

### 3. Interface Map

| # | Flow | Type |
|---|---|---|
| **I1** | P1 premise acceptance → P2 survival verifications | one-way; assumptions verified |
| **I2** | P1 concept name → P2 mode 6 rename | one-way; assumptions verified |
| **I3** | P1 concept + premise → P3 corrections enumeration | one-way; assumptions verified |
| **I4** | P2 survival commitments → P3 correction shape decisions | one-way; assumptions verified |
| **I5** | P3 scope decision → P3 corrections enumeration | one-way (internal to P3); assumptions verified |

All 5 interfaces explicit; no hidden coupling.

### 4. Dependency Order

P1 → P2 → P3. Linear chain with internal parallelism within each piece. No circular dependencies. No genuinely-parallel-able pieces at the inter-piece level.

### 5. Self-Evaluation

| Dimension | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PARTIAL (acceptable — P2 carries substantive concentration; not over-decomposable) |
| Confidence | PASS (HIGH; top-down + bottom-up agree on all boundaries) |

**Determination-mechanism check:** N/A (no runtime determinations in scope; meaning-layer inquiry per Layer Commitment).

**Overall: PROCEED to Innovation.** 3 pieces; 5 interfaces; linear dependency order; minimum self-evaluation clean; full self-evaluation 6/7 with 1 acceptable PARTIAL.

---

## Pattern Note

This decomposition arrives at **3 pieces**, matching the just-completed 21-12 MQ2 reframe inquiry's 3-piece pattern. The 3-piece pattern reflects this inquiry's structurally-similar content scope: meaning-layer correction + multiple parallel survival-claims + bounded cascading corrections. The pattern aligns with the recurring "meaning-layer settlement + relations + scope/followup" shape that has emerged across multiple recent task-define inquiries.
