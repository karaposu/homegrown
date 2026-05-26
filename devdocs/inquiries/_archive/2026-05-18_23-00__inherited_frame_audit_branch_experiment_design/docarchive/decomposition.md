# Decomposition — Inherited Frame Audit (A1) Branch-Experiment Design

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-18_23-00__inherited_frame_audit_branch_experiment_design/_branch.md`

Inputs read: `_branch.md`; `exploration.md`; `sensemaking.md` (5 design decisions committed at SV6).

The whole to decompose: A1's operational specification — 5 design decisions + override path + integration map. Sensemaking's downstream-notes suggest 5-piece Q-tree; Decomposition validates the coupling topology and produces the Q-tree with verification criteria.

Hard scope: all pieces are diagnostic-finding-articulation (the A1 specification text to be included in this inquiry's finding.md); not direct /innovate spec edits.

---

## Step 1 — Coupling Topology

### Elements identified

| Tag | Element | From Sensemaking SV6 |
|---|---|---|
| α | Predicate text — single-condition missing-challenge at two scope levels | F1 |
| β | Orchestration procedure text — feature-selective invocation of 4 frame-escape features + return-to-Phase-2 loop | F1 + Pair 9's 4 features |
| γ | Override path text — `Inherited-Frame-Audit-marked-inapplicable: <specific reason>` per established pattern | F5 |
| δ | Evaluation gate text — hybrid (single-run observable + cross-run comparison) | F3 |
| ε | Integration map text — cross-references to existing features + diagnostic-series candidates + cross-discipline complementarity | F2 + F6 + F7 |

### Pairwise coupling

| Pair | Coupling | Reason |
|---|---|---|
| α ↔ β | **Strong** | Orchestration fires WHEN predicate fires. β invokes α's output; β's procedure depends on what α detected. |
| α ↔ γ | **Strong** | Override fires WHEN predicate fires AND inheritance is legitimate. γ is the bypass path; γ's compliance criterion depends on α's firing. |
| β ↔ γ | **Strong** | Override is the ALTERNATIVE to orchestration when predicate fires. γ and β are mutually exclusive branches after α fires. |
| δ ↔ α | Moderate | Evaluation gate measures predicate's correct firing (false-positive / false-negative rates). |
| δ ↔ β | Moderate | Evaluation gate measures whether orchestration produces value (cross-run marginal-value comparison). |
| δ ↔ γ | Weak | Evaluation gate cares about γ's invocation rate (over-fire indicator) but not its specific reason. |
| ε ↔ all | Weak reference | Integration map cross-references all internals but doesn't depend on their specific content. |

### Cluster identification

Three clusters:

- **Cluster 1 (operational core):** α + β + γ. Tightly coupled — predicate triggers orchestration OR override. Three pieces of the same operational logic.
- **Cluster 2 (validation):** δ. Evaluation gate; separate operational role.
- **Cluster 3 (positioning):** ε. Integration map; cross-references the others to existing features + diagnostic-series candidates.

Internal coupling within Cluster 1 is strong but the three elements have DIFFERENT content (detection vs orchestration vs override). Each warrants its own piece.

---

## Step 2 — Boundary Detection (Top-Down)

Three boundaries:
- Boundary 1 — within Cluster 1, between α + β + γ (3 pieces of operational core)
- Boundary 2 — between Cluster 1 and δ (operational vs validation)
- Boundary 3 — between Cluster 1+δ and ε (operational vs positioning)

Initial partition: **5 pieces** (3 + 1 + 1) — matches Sensemaking's suggested shape.

**Alternative considered:** Consolidate α + β + γ into one "operational core" piece (3 pieces total). Rejected because each has distinct content with distinct verification criteria; consolidation would mix detection logic with orchestration logic with override logic.

**Alternative considered:** Split β into β1 (feature-selective logic: belief→Inversion, constraint→CM REMOVE, design→AR redesign-level, success-criterion→LS) and β2 (orchestration procedure: return-to-Phase-2 loop, re-evaluation). Rejected because β1 + β2 are operationally one procedure; separating fragments the orchestration semantics.

5-piece shape stands.

---

## Step 3 — Bottom-Up Validation

### Atoms (irreducible content elements)

**For α (predicate text; ~6 atoms):**
- α₁: identify seed's central assumption (operational definition + how to extract it)
- α₂: identify per-piece load-bearing commitment (reference to Q2's 4-property + Pair 7's 5th property)
- α₃: examine candidate set for explicit challenge to seed-level assumption
- α₄: examine candidate set for explicit challenge to each piece-level commitment
- α₅: firing condition: A1 fires if ANY check fails (seed OR any piece)
- α₆: deterministic application criteria (operational signals for "explicit challenge")

**For β (orchestration procedure; ~5 atoms):**
- β₁: feature-selective dispatch (belief→Inversion; constraint→CM REMOVE; design→AR redesign-level; success-criterion→LS)
- β₂: orchestration sub-procedure for Inversion (system-level depth per Pair 9 B1)
- β₃: orchestration sub-procedure for CM REMOVE (both-direction per Pair 9 B2)
- β₄: orchestration sub-procedure for AR redesign-level (Pair 9 B3 + Pair 4 W1 bidirectional)
- β₅: return-to-Phase-2 loop with re-evaluation of predicate

**For γ (override path; ~3 atoms):**
- γ₁: override invocation syntax (`Inherited-Frame-Audit-marked-inapplicable: <specific reason>`)
- γ₂: compliance criterion (specific reason required; empty defects)
- γ₃: worked example (legitimate-frame case)

**For δ (evaluation gate; ~3 atoms):**
- δ₁: single-run observable — false-positive rate + false-negative rate
- δ₂: cross-run comparison — B1-B4-only vs B1-B4+A1 across 3-5 inquiries
- δ₃: promotion threshold — when A1 graduates from branch-experiment to actionable spec

**For ε (integration map; ~5 atoms):**
- ε₁: cross-reference to existing innovate features (Inversion depth-check; CM both-direction; AR redesign-level; axis-coverage check)
- ε₂: cross-reference to diagnostic-series candidates (Pair 5 Q2 + Q3; Pair 7 fifth property + Q3-extension + ADD-MULTI-AXIS preserved frontier; Pair 8 §9)
- ε₃: cross-reference to disposition-layer (Pair 1 V2 re-test trigger)
- ε₄: cross-discipline complementarity (/sense-making's Definitional/Internal-Consistency upstream catch)
- ε₅: location commitment (single sub-section between Phase 2 Generate and Phase 3 Test)

### Grouping check

- Group-α (α₁-α₆) → Q1 (predicate)
- Group-β (β₁-β₅) → Q2 (orchestration)
- Group-γ (γ₁-γ₃) → Q3 (override)
- Group-δ (δ₁-δ₃) → Q4 (evaluation gate)
- Group-ε (ε₁-ε₅) → Q5 (integration map)

Top-down + bottom-up agree on 5 pieces. **Confidence: HIGH.**

---

## Step 4 — Question Tree (5 pieces)

### Q1 — Predicate text

**Question:** What is the operational text for A1's single-condition missing-challenge predicate at two scope levels (seed + per-piece)?

**Verification criteria:**
- [ ] States the predicate as: "After Phase 2 Generate, before Phase 3 Test, examine the candidate set."
- [ ] Step (i): identify seed's central assumption (the strongest load-bearing belief carried by seed framing). Provides operational guidance for extraction (read seed text + upstream Sensemaking SV5 output; identify strongest committed belief).
- [ ] Step (ii): identify each meta-decision piece's load-bearing commitment per Pair 5's Q2 4-property criterion + Pair 7's 5th property. Cross-reference these existing rules.
- [ ] Step (iii): for the seed's central assumption AND for each piece's load-bearing commitment, ask: "Does any candidate in the candidate set explicitly challenge it (state its opposite; remove its constraint; identify its absence; declare it wrong)?"
- [ ] Step (iv): A1 FIRES if for ANY assumption/commitment the answer is NO.
- [ ] Operational signals for "explicit challenge" are concrete enough for an LLM to apply deterministically — examples: text-search for "what if X is wrong"; "the opposite of X"; "X removed"; "X does not exist"; "X is absent"; "challenge X"; "invert X"; etc.
- [ ] Cross-reference to ε's integration map (downstream).

### Q2 — Orchestration procedure text

**Question:** What is the operational text for A1's orchestration procedure when the predicate fires — feature-selective invocation of 4 frame-escape features + return-to-Phase-2 loop?

**Verification criteria:**
- [ ] States: "When the Inherited Frame Audit fires, classify the un-challenged assumption by type and force-apply the corresponding frame-escape feature."
- [ ] Feature-selective dispatch table:
  - Belief-type assumption → Inversion at system-level depth (per Pair 9's B1 depth-check stopping criterion)
  - Constraint-type assumption → Constraint Manipulation REMOVE (per Pair 9's B2 both-direction explicit requirement)
  - Design-type assumption → Absence Recognition redesign-level (per Pair 9's B3 redesign-level explicit + Pair 4's W1 bidirectional)
  - Success-criterion-type assumption → Lens Shifting on the criterion
- [ ] Worked example for each type (one example from the 8 in-scope diagnostics, showing the assumption type + applied feature).
- [ ] Return-to-Phase-2 sub-procedure: after orchestration produces new candidates, re-evaluate predicate; if still fails, override OR iterate.
- [ ] Cross-reference to ε's integration map (which features are invoked).

### Q3 — Override path text

**Question:** What is the operational text for A1's override path — `Inherited-Frame-Audit-marked-inapplicable: <specific reason>` per the established pattern from composed v3?

**Verification criteria:**
- [ ] Override syntax: `Inherited-Frame-Audit-marked-inapplicable: <specific reason>`.
- [ ] Compliance criterion: the reason must be specific (structural / contextual); empty overrides are defects. Established pattern per Pair 5's Q3 (`Inversion-marked-inapplicable`); Pair 7's Q3-extension (`Intervention-shape-Inversion-marked-inapplicable`); Pair 8's §9 (`Methodology-mode-alternative-marked-inapplicable`).
- [ ] Worked positive example: a synthesis of 5 consistent priors where the relationship-label is unambiguously REFINES; A1 fires (no candidate explicitly stated CORRECTS); runner records `Inherited-Frame-Audit-marked-inapplicable: 5 consistent priors converged on REFINES; no plausible CORRECTS candidate; upstream Sensemaking adjudicated.`
- [ ] Worked negative example: empty / non-specific override that would fail compliance.
- [ ] Cross-reference to MONITORING note on Layer-3 override formulaicness (currently at N=3+ if this inquiry records one; needs N≥4-5 investigation).

### Q4 — Evaluation gate text

**Question:** What is the operational text for A1's hybrid evaluation gate — single-run observable + cross-run comparison?

**Verification criteria:**
- [ ] Single-run observable component:
  - **False-positive rate:** count of A1 firings where override was correctly invoked (the frame was legitimately committed). High false-positive rate suggests predicate too loose.
  - **False-negative rate:** count of post-run user corrections that A1 should have caught but didn't fire on. High false-negative rate suggests predicate too strict.
  - **Operational thresholds:** acceptable bands; over-band triggers calibration.
- [ ] Cross-run comparison component:
  - Compare /innovate-with-B1-B4-only baseline against /innovate-with-B1-B4+A1 across 3-5 future inquiries.
  - Measure: did A1 catch inheritance cases that B1-B4 missed? Did A1 introduce false positives that B1-B4 didn't have? Net marginal value.
  - Promotion threshold: consistent marginal value across 3-5 inquiries → promote A1 from branch-experiment to actionable spec.
- [ ] Reciprocal relationship between components: single-run observable provides immediate calibration; cross-run comparison provides marginal-value validation.
- [ ] What single-run thresholds and what % marginal value justifies adoption (heuristic; evidence-quality-driven).

### Q5 — Integration map text

**Question:** What is the operational text for A1's integration map — cross-references to existing features, diagnostic-series candidates, and cross-discipline complementarity?

**Verification criteria:**
- [ ] Cross-reference to existing innovate features A1 orchestrates:
  - §3 Inversion + depth-check refinement (system-level depth)
  - §4 Constraint Manipulation + both-direction text
  - §5 Absence Recognition + redesign-level question
  - §2 Lens Shifting + success-criterion reframing
- [ ] Cross-reference to existing axis-coverage check at Assembly (Phase 3 Test): A1 fires EARLIER (between Phase 2 and Phase 3); axis-coverage check fires LATER (at Assembly). Complementary, not duplicative.
- [ ] Cross-reference to diagnostic-series candidates:
  - Pair 5's Q2 4-property + Pair 7's 5th property (used by A1's piece-level predicate for piece identification)
  - Pair 5's Q3 piece-level Inversion at meta-decision pieces (A1 may invoke; per-piece rule retains independence)
  - Pair 7's Q3-extension intervention-shape-axis (A1 may invoke when intervention-shape commitment is un-challenged)
  - Pair 7's preserved ADD-MULTI-AXIS-REQUIREMENT (A1 invokes "when promoted"; doesn't preempt cumulative-evidence threshold)
  - Pair 8's §9 seed-time methodology-mode consideration (fires earlier than A1; complementary at different times)
  - Pair 1's V2 re-test trigger disposition (fires later than A1, after Phase 3 Test; complementary)
- [ ] Cross-discipline complementarity: /sense-making's Definitional/Internal-Consistency catches inheritance at upstream anchor-stabilization stage; A1 is /innovate-side defense-in-depth at piece-list-execution stage. Different time + target + output type.
- [ ] A1's spec location commitment: single sub-section between Phase 2 Generate and Phase 3 Test, named "Inherited Frame Audit."

---

## Step 5 — Interface Map

| From | To | Flow type | Data | Assumption |
|---|---|---|---|---|
| Q1 | Q2 | Strong dependency | "predicate fires" trigger; identified un-challenged assumption (with type classification) | Q2's feature-selective dispatch consumes assumption type |
| Q1 | Q3 | Strong dependency | "predicate fires" trigger + assumption identification | Q3's override applies WHEN predicate fires |
| Q2 | Q3 | Mutually exclusive | When predicate fires: take Q2 (orchestrate) OR Q3 (override) | Operational fork after Q1 |
| Q1 + Q2 | Q4 | Moderate reference | Q4 measures Q1's predicate firing correctness + Q2's orchestration value | Q4's gate cites Q1/Q2 |
| All | Q5 | Weak reference | Q5 cross-references all others | Q5's integration map points to internals |

### Assumptions-not-data check

**Hidden coupling risks (3 identified):**

- **Risk-1 — Assumption-type classification ambiguity.** Q2's feature-selective dispatch requires classifying the un-challenged assumption as belief/constraint/design/success-criterion. If the classification is ambiguous (an assumption can be read as both belief and constraint), Q2's dispatch becomes non-deterministic. **Mitigation:** Q2's text must include a tie-breaker rule (e.g., "if assumption is multi-type, default to Inversion at system-level depth; supplement with the secondary type's feature").

- **Risk-2 — Override path's specific-reason requirement is interpretable.** Q3's "the reason must be specific" can be applied loosely if the LLM running /innovate generates verbose-but-low-content reasons that satisfy the syntax but not the spirit. **Mitigation:** Q3's text must include the established compliance pattern from composed v3 (Pair 5/7/8 precedents) + the worked example showing "structural reason + contextual reason" depth.

- **Risk-3 — Evaluation gate's thresholds are heuristic, not committed.** Q4's "what % marginal value justifies adoption" is left as heuristic. Future calibration may need explicit thresholds. **Mitigation:** Q4's text frames the thresholds as evidence-quality-driven, not count-based; explicitly notes this is heuristic per the established calibration discipline.

All 3 risks addressable at wording level in the Innovation step.

---

## Step 6 — Dependency Order

```
Phase 1 (parallel; can be drafted independently): Q1, Q3
Phase 2 (depends on Q1's predicate text + Q1's assumption-type classification): Q2, Q4
Phase 3 (depends on Q1+Q2+Q3+Q4): Q5
```

Critical path: 3 phases. Q5 (integration map) is the closing piece since it references all others.

Alternative ordering: all 5 can be drafted in parallel if the verification criteria are tight (each piece's content is well-defined). Innovation step can choose either ordering.

---

## Step 7 — Self-Evaluation

| Dimension | Result |
|---|---|
| Independence | PASS (each piece has distinct content + verification criteria; though Cluster 1's pieces have strong coupling, each is independently answerable given the predicate-trigger interface) |
| Completeness | PASS (5 pieces cover the 5 design decisions + override + integration map committed by Sensemaking SV6) |
| Reassembly | PASS (Q1+Q2+Q3+Q4+Q5 = A1's operational specification in finding.md) |
| Tractability | PASS (each piece's verification criteria can be answered in a single focused pass; longest is Q2 with feature-selective dispatch table + 4 worked examples) |
| Interface clarity | PASS (3 hidden-coupling risks flagged; all addressable at wording level) |
| Balance | PASS (5 pieces; Q2 slightly larger due to feature-selective dispatch but bounded) |
| Confidence | PASS (top-down + bottom-up agree on 5 pieces) |
| Determination-mechanism check | PASS — A1 has a runtime-determination concept (the LLM determines "does any candidate challenge X?"). The Q1 piece IS the determination-mechanism specification. The Q-tree explicitly addresses HOW the runtime check is performed. |

### Reassembly check against the user's question

Mental simulation: given Q1 + Q2 + Q3 + Q4 + Q5 answered with their verification criteria met, does the user's question — "design A1's operational specification with 5 components (predicate, evaluation gate, integration map, hypothetical-seed testing, hard-scope verification)" — get answered?

The user's 5 components from the prompt:
- (a) Predicate → Q1 ✓
- (b) Evaluation gate → Q4 ✓
- (c) Integration map → Q5 ✓
- (d) Hypothetical-seed testing → covered by Sensemaking's Phase 3 empirical validation (8/8 cases fire correctly under committed predicate); referenced in finding's Reasoning section.
- (e) Hard-scope constraint → covered by Sensemaking's Phase 2 Frame-exit Completeness verifying T1-T5 + cross-discipline complementarity; referenced in finding's Reasoning section.

Plus the orchestration procedure (Q2) and override path (Q3) which are part of A1's spec but not separately listed in the user's prompt — both essential for completeness.

**Reassembly: PASS.** The 5 Q-pieces + Sensemaking's empirical validation + T1-T5 verification = complete A1 specification.

### Hard scope constraint verification

| Piece | Content | Proposes /innovate spec edits? |
|---|---|---|
| Q1 (Predicate) | Operational predicate text for A1 | **NO** — produces A1's sub-section text; the actual spec commit is downstream redesign work |
| Q2 (Orchestration) | Procedure text + feature-selective dispatch | **NO** — produces A1's sub-section text |
| Q3 (Override) | Override path text per established pattern | **NO** — produces A1's sub-section text |
| Q4 (Evaluation gate) | Hybrid gate text | **NO** — produces A1's sub-section text |
| Q5 (Integration map) | Cross-references + complementarity statements | **NO** — produces A1's sub-section text |

All 5 pieces are A1's specification text (the diagnostic-finding-articulation). The downstream redesign inquiry commits the spec edit. **Hard scope: PASS.**

---

## Final Deliverable

### Coupling Map

3 clusters: operational core (Q1+Q2+Q3; tightly coupled within), validation (Q4), positioning (Q5). 3 boundaries.

### Question Tree (5 pieces)

- **Q1 — Predicate text:** single-condition missing-challenge at two scope levels (seed + per-piece per Q2's 4-property + Pair 7's 5th property)
- **Q2 — Orchestration procedure text:** feature-selective dispatch (belief→Inversion; constraint→CM REMOVE; design→AR redesign-level; success-criterion→LS) + return-to-Phase-2 loop
- **Q3 — Override path text:** `Inherited-Frame-Audit-marked-inapplicable: <specific reason>` per composed v3's established pattern
- **Q4 — Evaluation gate text:** hybrid (single-run observable false-positive/false-negative rates + cross-run B1-B4-only vs B1-B4+A1 comparison)
- **Q5 — Integration map text:** cross-references to existing features + diagnostic-series candidates + cross-discipline complementarity + location commitment

### Interface Map

Q1 → Q2 (strong; predicate-triggers-orchestration); Q1 → Q3 (strong; predicate-triggers-override-option); Q2 ↔ Q3 (mutually exclusive operational fork); Q4 ↔ Q1+Q2 (moderate reference; gate measures correctness); Q5 → all (weak reference).

3 hidden-coupling risks flagged: assumption-type classification ambiguity; override specific-reason interpretability; evaluation gate threshold heuristicness. All addressable at wording level.

### Dependency Order

Phase 1 (parallel): Q1, Q3. Phase 2 (after Q1): Q2, Q4. Phase 3 (after all): Q5. Critical path 3 phases. Alternative: all 5 in parallel if criteria are tight.

### Self-Evaluation

PASS on all 7 dimensions + determination-mechanism check. HIGH macro confidence. Hard scope constraint: PASS.

---

## Notes for Downstream Disciplines

**For Innovation (next):** Generate concrete final text for Q1-Q5. Per Sensemaking's downstream-notes:
- Layer-3 §9 self-application fires at seed time. Inherited mode standard default (Production-task; ship-ready spec text). Alternative considered contrarian-rethink (would re-litigate Sensemaking's 5 decisions). Decision likely override-with-reason (Sensemaking's Ambiguities adjudicated).
- If override recorded, Layer-3 pattern reaches N=4 → **MONITORING THRESHOLD**; surface explicitly in Innovation output and finding's Reasoning section.
- Per-piece Layer-1 + Layer-2 self-application: each Q1-Q5 piece is diagnostic-finding-articulation; property (v) intervention-shape commitment doesn't fire on /innovate spec text directly (the spec commit is downstream); trivial satisfaction.
- 5-test cycle applied to each piece + to the 5-piece assembly.
- Assembly check: A1's 5-piece spec text composes coherently; ε (integration map) references all internal pieces + external candidates without overlap.

**For Critique (after):** Critique tests the 5 committed pieces. Specific focal points per Sensemaking's downstream-notes:
- Q1 predicate: truly distinct from W3 + §9 + V3+W1 territories? Operationally tractable (2-level check applicable by LLM)?
- Q2 orchestration: feature-selective dispatch logic clear when assumption-type is ambiguous (tie-breaker)?
- Q3 override: intentional-friction sufficient (specific-reason requirement; empty defects)?
- Q4 evaluation gate: hybrid components reciprocal? Thresholds need to be specified or heuristic acceptable?
- Q5 integration map: cross-references accurate? No naming drift? Cross-discipline complementarity correctly distinguished from duplication?
- Layer-3 override at N=4: legitimate or eroding? MONITORING note required in finding.

**For CONCLUDE (final):** Synthesis Trigger fires (~10 priors); Inherited Commitments Re-test section required. The finding compiles the 5-piece A1 specification + Sensemaking's empirical validation + Frame-exit Completeness T1-T5 verification + cross-discipline complementarity acknowledgment + MONITORING note on Layer-3 + downstream pathway (the redesign inquiry that commits actual spec edit).
