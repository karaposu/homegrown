# Innovation — Multi-head aggregation protocol for routeman (Q2)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_10-00__multi_head_aggregation_routeman/_branch.md`

## Phase 1 — Seed + Methodology-Mode Consideration

### Seed

8 pieces inherited from Decomposition (P1 inheritance, P2 dedup + provenance, P3 per-Family rules + dispatch + disagreement, P4 telemetry roll-up, P5 schema-unification + aggregation_scope + Q14 distinction, P6 hierarchical composition, P7 L0/L1+/L2+ phase progression, P8 location + R1 coherence) plus the SV6 stabilized model from Sensemaking (singleton-internal degenerate-at-L0 design with structural extensibility hooks for N>1 and Q14).

This is **Production-task mode** — the seed IS the piece-list; Innovation generates per-piece text.

### Inherited methodology mode

**Standard default** — 8 pieces; balanced 4G+3F; elaborate the committed direction; produce confident ship-ready output. Text signals in framing: "design the aggregation protocol" + "produce a design with components and trade-offs + explicit phase-progression cut" + the SKILL.md-authorable criterion from the Goal section.

### Alternative mode considered

**Generator-weighted exploration** — maximize novel-candidate breadth. What follows: surfacing already enumerated 52 alternative items across 10 regions; Sensemaking already converged 5 ambiguities. Generator-weighted exploration at the per-piece level would produce mostly already-killed candidates (e.g., I-R1-02 content-hash dedup KILLed by A1; I-R6-01 N=1-only KILLed by I-R6-02 dominance). The candidate space was thoroughly explored upstream; Innovation's job here is per-piece elaboration with intervention-shape Inversion at property-(v) pieces, not breadth re-exploration.

### Decision

**Default — Standard default mode.** Innovation proceeds with the inherited mode and runs mechanisms per piece accordingly.

---

## Phase 2 — Generate (Per-Piece Mechanism Application)

### P1 — Architectural pre-conditions + inheritance

**Meta-decision classification:** properties (a) relationship-label (REFINES the priors) + (b) framing-semantic (P1 is the foundational frame the rest of the design operates under).

**Mechanisms applied:**

- **Combination (Generator):** combine the 9 inherited invariants (singleton + file-mediated + isolated + enumerate-all + observe-only + single-Route-Map-per-invocation + Q5 protocol + Q6 contracts + 24-00 schema + 18-58 sub-route schema + 24-40 phase progression + 14-39 EF-1) into one foundational "Architectural Invariant Block" that all other pieces reference verbatim.
- **Lens Shifting (Framer):** under the lens "what if any one invariant were violated?" — the design coheres only when ALL invariants hold simultaneously. Singleton + file-mediated is the most load-bearing pair; violating singleton converts Q2 into multi-routeman-coordination (a different design problem entirely). The lens confirms invariants as PRE-conditions, not negotiables.
- **Piece-level Inversion (per Meta-Decision-Piece rule):** "What if the inheritance from priors were INVERTED — Q2 introduces ITS OWN architectural commitments rather than inheriting?" Counterfactual: a routeman that re-invents file-system protocol, schema, etc. Result: massive duplication; drift risk; spec-coherence failure with all 12 priors. KILLed.

**Principal candidate (P1-Cand-1):** P1 documents 9 inherited invariants + 5 inheritance commitments as one block; explicit cross-references to source priors per invariant; flows as pre-condition to all other pieces.

**Inversion-candidate (P1-Inv-1):** Q2 re-invents architectural commitments. KILLed.

**5-test:**
- Novelty: LOW (documentation-of-existing patterns).
- Scrutiny: PASS (Frame-exit Completeness check in Sensemaking already verified inheritance completeness).
- Fertility: HIGH (P1 is foundational for all other pieces).
- Actionability: HIGH (SKILL.md author writes the inheritance section directly).
- Mechanism independence: PASS (Combination + Lens Shifting independently converge on the foundational-block framing).

**Disposition:** ACTIONABLE.

### P2 — Dedup-surface + provenance schema field

**Meta-decision classification:** property (d) evaluation-criterion (the 3-tuple IS the criterion by which "same candidate" is judged).

**Mechanisms applied:**

- **Domain Transfer (Generator; deliberately-different field):** database compound-key uniqueness constraints — compound key defines row identity; ON CONFLICT clause handles duplicates. Adapted to Q2: 3-tuple is the compound key; aggregated Route Map's per-Route entry is the row; merge logic is the ON CONFLICT.
- **Domain Transfer (Generator; native-source per Source-domain selection guard):** computing-native — content-addressable storage (Git's SHA-based deduplication) uses content-derived hashes as identity-keys. Q2's Question_fingerprint normalization echoes this pattern: cycle-content-derived hash, session-identity-blind.
- **Constraint Manipulation ADD (Framer):** "assume Question_fingerprint is deterministic across workers" → 3-tuple uniqueness is guaranteed; dedup operation is structurally clean.
- **Constraint Manipulation REMOVE (Framer):** "what if there's NO dedup at all?" → REMOVE-direction output: a "no-dedup mode" where workers' contributions kept in per-worker namespaces (analogous to git remote-tracking branches before merge). Useful at L2+ when LLM-judgment-dedup may want to inspect both pre-merge. Recorded explicitly per both-direction-mandatory refinement.
- **Piece-level Inversion (per Meta-Decision-Piece rule):** "What if dedup-surface used WHOLE candidate content hash instead of structural 3-tuple?" → A1 in Sensemaking already established the counter fails on semantic equivalence (e.g., "should we DEEPEN the X branch" vs "deepen X branch please"). KILLed.

**Principal candidate (P2-Cand-1):** dedup-surface = `(movement_type, parent_route_id, Question_fingerprint)` with Question_fingerprint = normalized hash (lowercase + whitespace-collapse + punctuation-strip); provenance field = `provenance_workers: List[str]` per Route; degenerate at N=1 as 1-element list; optional `dedup_evidence: dict` per Route records merged-fields when dedup occurs.

**Inversion-candidate (P2-Inv-1):** content-hash dedup. KILLed.

**REMOVE-direction candidate (P2-REMOVE-1):** no-dedup mode at L2+. DEFERRED with revival trigger: L2+ when LLM-judgment-dedup is being designed.

**5-test on P2-Cand-1:**
- Novelty: MED (3-tuple structural definition is novel within routeman; pattern is computing-domain-native).
- Scrutiny: PASS (A1 resolved at HIGH).
- Fertility: HIGH (dedup-surface feeds P3 + P5 + P6).
- Actionability: HIGH.
- Mechanism independence: PASS (Domain Transfer database + Domain Transfer computing-native + Constraint Manipulation ADD all converge on structural 3-tuple).

**Disposition:** ACTIONABLE.

### P3 — Per-Movement-Family rules + per-discipline dispatch + disagreement-detection

**Meta-decision classification:** property (d) evaluation-criterion (per-Family rules are the criterion for priority allocation).

**Mechanisms applied:**

- **Absence Recognition patch-level (Generator):** what's missing from the current rule set? Candidates that don't fit any Movement Family (e.g., hybrid candidates spanning Progression + Re-orientation). Mitigation: 24-01-30's longitudinal observation revival trigger covers taxonomy extension; Q2 inherits the 16-type taxonomy as-is.
- **Absence Recognition redesign-level (Generator):** "if designed from scratch, what would the rule set look like?" → a unified per-Family rule typology (3 rule-types) that maps deeper structural posture (depth-vs-breadth) of each Family. Already present in proposed standard candidate; the redesign check confirms the typology IS the natural structure.
- **Absence Recognition bidirectional check (already-present-in-different-form):** is the project already doing per-Family aggregation in a less articulated way? 02-00's per-route-type-split is an emission policy; per-Family aggregation rules extend that pattern to a different layer (aggregation, not emission). Not a duplication — a structural inheritance.
- **Domain Transfer (Generator; deliberately-different field):** voting systems / consensus algorithms — quorum-based agreement is the obvious computing-native source for vote-counting. Adapted: per-Family rules with structural per-Family quorum (Progression = simple plurality with confidence-weight; Re-orientation = no-quorum / diversity-preserving; Coordination = pre-condition gate + plurality after gate).
- **Lens Shifting (Framer):** under the lens "what if disagreement is the SIGNAL, not the noise?" — disagreement-detection becomes a positive diagnostic feature for the LAYER-2 audit at 06-00 (calibration-divergence detection) and for /loop_diagnose, not just a meta-signal to ignore.
- **Piece-level Inversion (per Meta-Decision-Piece rule):** "What if per-Family rules were INVERTED to be UNIFORM across Families?" → A2 in Sensemaking already established that per-Family variation is STRUCTURAL (depth-vs-breadth posture), not borrowed. KILLed.

**Principal candidate (P3-Cand-1):** three rule-types:
- **Progression-Aggregation:** vote-count weighted by per-worker D1 confidence sum.
- **Re-orientation-Aggregation:** diversity-preserving — minimal dedup (only exact 3-tuple matches); per-worker rendering retained.
- **Coordination-Aggregation:** per-type pre-condition check (e.g., REVISIT ≥3 prior cycles inherited from 02-00) + per-Family default (vote-count similar to Progression).

Per-discipline dispatch inherits 24-01 + 06-00 patterns. Disagreement-detection emits INFO via per-worker telemetry sub-block on partial-key conflict (identical parent_route_id + Question_fingerprint but different movement_type). L0 threshold = every conflict; L2+ threshold tuning hooked.

**Inversion-candidate (P3-Inv-1):** uniform aggregation rule across Families. KILLed.

**5-test on P3-Cand-1:**
- Novelty: MED (per-Family typology is novel within routeman; pattern is computing-native voting).
- Scrutiny: PASS (A2 resolved at HIGH).
- Fertility: HIGH (per-Family rules feed P4 + P6).
- Actionability: HIGH.
- Mechanism independence: PASS (Absence Recognition + Domain Transfer voting + Lens Shifting all converge on per-Family rule-typology).

**Disposition:** ACTIONABLE.

### P4 — Telemetry roll-up + worker_telemetry

**Meta-decision classification:** property (d) evaluation-criterion (5-tier worst-case-wins is the criterion for aggregate verdict).

**Mechanisms applied:**

- **Extrapolation (Generator):** in 5 years with N≥5 workers and many disciplines, the per-worker sub-block could become unwieldy. Future-state: "telemetry digest" L2+ extension that summarizes the per-worker sub-block when N exceeds threshold (e.g., N>10). Below threshold, verbatim preservation; above threshold, both verbatim AND digest. DEFERRED at L0.
- **Lens Shifting (Framer):** under the lens "what does human Selector need vs what does audit need?" — Selector reads headline + dives into sub-block on demand; audit always reads sub-block. The hybrid headline + sub-block split is the right answer for both consumption modes.
- **Constraint Manipulation ADD (Framer):** "verdict roll-up MUST be order-independent" → enforces monotonic worst-case-wins; determinism invariant per FF-Q2-S3 satisfied.
- **Constraint Manipulation REMOVE (Framer):** "what if the headline were OPTIONAL (just the sub-block)?" → loses the at-a-glance read for Selector; rejected.
- **Piece-level Inversion (per Meta-Decision-Piece rule):** "What if telemetry were AGGREGATED INTO A SINGLE COUNTER instead of preserving per-worker verbatim?" → loses information for audit + debugging; the 06-00 audit's per-mode dispatch reads per-worker telemetry; collapsing it breaks audit. KILLed.

**Principal candidate (P4-Cand-1):** per-worker telemetry preserved verbatim in `worker_telemetry: List[dict]` sub-block (one dict per worker; reads at-source via Q5 protocol + Q6 contracts); aggregate verdict = 5-tier worst-case-wins (any ERROR → ERROR; any FLAG → FLAG; INFO + PROCEED → PROCEED unless ERROR/FLAG); INFO additive to sub-block (does not override headline). Empty aggregation case (all N produced no candidates) emits empty Route Map with aggregate INFO + note.

**Inversion-candidate (P4-Inv-1):** single-counter aggregation. KILLed.

**Extrapolation candidate (P4-Extrap-1):** L2+ telemetry-digest extension at N>10 threshold. DEFERRED with revival trigger: N>10 per-invocation worker count.

**5-test on P4-Cand-1:**
- Novelty: LOW (5-tier vocabulary inherits 06-00; worst-case-wins is conventional).
- Scrutiny: PASS.
- Fertility: HIGH (telemetry feeds Selector + audit + downstream consumers).
- Actionability: HIGH.
- Mechanism independence: PASS (Lens Shifting + Constraint Manipulation ADD + Extrapolation all support hybrid headline + sub-block).

**Disposition:** ACTIONABLE.

### P5 — Schema-unification + aggregation_scope + Q14 distinction (PROPERTY (v) PIECE)

**Meta-decision classification:** properties (b) framing-semantic (Q14 scope distinction is a bridge-not-commitment frame) + (e) intervention-shape commitment (ADD-CONTENT — adding new schema fields).

**Mechanisms applied:**

- **Combination (Generator):** combine 24-00's `meta_reasoning_revision_history` field + Q2's `provenance_workers` field → a unified provenance-and-history structure where the same Route's record carries BOTH within-worker recalibration history AND across-worker dedup provenance.
- **Absence Recognition redesign-level (Generator):** "if designed from scratch, what's missing?" → `aggregation_meta` carries `worker_count` but could also carry derived fields like `dedup_count` (how many dedups happened) and `disagreement_count` (how many disagreements detected). These are derivable from other fields, but adding as denormalized fields aids audit read. DEFERRED at L0; promote at L1+ if audit shows derived-field reads are slow.
- **Absence Recognition bidirectional check (already-present-in-different-form):** is the project already doing scope distinction in a less articulated way? Q5 + Q6 implicitly carry per-invocation scope (single inquiry folder). Q14 will introduce cross-invocation scope. The `aggregation_scope` field makes the implicit explicit — first-class parametric value vs implicit-by-context.
- **Constraint Manipulation ADD (Framer):** "schema extensions MUST be backward-compatible with 24-00 + 18-58's existing fields" → forces additive-only changes; no renames; no semantic changes to existing fields.
- **Constraint Manipulation REMOVE (Framer):** "what if we removed the aggregation_scope field entirely?" → loses the Q14 bridge; Q14's eventual design would need a breaking schema change. REJECTED.

**Intervention-shape-axis Inversion (per Intervention-Shape-Axis Inversion Rule; property v fires):**

Current shape commitment: **ADD-CONTENT** (additive schema fields).

Alternative shape #1: **REORGANIZE-WITHOUT-ADDING** (restructure existing schema fields to accommodate aggregation without new fields). What follows: repurpose `meta_reasoning_revision_history` to ALSO carry provenance and aggregation_meta; semantic-overload of existing fields; breaks single-responsibility; complicates downstream readers (must distinguish within-worker vs cross-worker history reads). KILLed via 5-test (scrutiny survival FAIL — semantic-overload risk is high).

Alternative shape #2: **ADD-DIMENSION** (add a new evaluation dimension to existing schema's evaluation framework). What follows: instead of adding fields per Route, add a new "aggregation dimension" to existing route-card evaluation; the dimension scores Routes on aggregation properties without adding fields. Less expressive; loses structural commitments (e.g., aggregation_scope can't be expressed as a dimension). KILLed via 5-test (actionability FAIL — structural commitments lost).

**ADD-CONTENT survives as the only viable intervention shape.**

**Principal candidate (P5-Cand-1):** unified schema list — `provenance_workers: List[str]` per Route; `aggregation_meta: dict` top-level (degenerate at N=1 as `{worker_count: 1}`); `worker_telemetry: List[dict]` per-Route-Map; `dedup_evidence: dict` per Route (optional); `aggregation_scope: enum` with values `invocation` (L0 default) + `cross_invocation` (reserved for Q14). aggregation_scope documented as **bridge-not-commitment**. Q14 scope distinction explicitly documented: "Q2 = per-invocation cross-worker aggregation; Q14 = per-future-design cross-invocation aggregation; same hook, potentially different rules at the `cross_invocation` value." Schema-extension compatibility check inherited from R1 drift-coordination meta-process.

**Intervention-shape-axis Inversion-candidate (P5-Inv-Shape-1):** REORGANIZE-WITHOUT-ADDING. KILLed.

**Intervention-shape-axis Inversion-candidate (P5-Inv-Shape-2):** ADD-DIMENSION. KILLed.

**5-test on P5-Cand-1:**
- Novelty: MED (schema-extension pattern matches 24-00 + Q6; novel pieces are aggregation_scope hook + Q14 documentation).
- Scrutiny: PASS (A3 resolved at HIGH on parametric hook; LOW-confidence-claim downgraded to bridge-not-commitment).
- Fertility: HIGH (schema is the contract P2/P3/P4/P6 write to).
- Actionability: HIGH.
- Mechanism independence: PASS (Combination + Absence Recognition + Constraint Manipulation ADD + intervention-shape Inversion all support ADD-CONTENT).

**Disposition:** ACTIONABLE.

### P6 — Hierarchical Route Map composition (two-axis aggregation)

**Meta-decision classification:** property (d) evaluation-criterion (two-axis composition rule is the criterion for hierarchical aggregation).

**Mechanisms applied:**

- **Combination (Generator):** combine Q2's multi-worker frame + 18-58's staged-mapping frame → two-axis composition rule.
- **Domain Transfer (Generator; deliberately-different field — mathematics):** matrix algebra / tensor products — two-axis composition is structurally a tensor product where aggregation rules compose along both axes independently. Per-axis rule operates on each axis without coupling.
- **Lens Shifting (Framer):** under the lens "what if hierarchical depth GROWS at L2+ beyond stage-2?" — the two-axis rule extends to N-axis composition; the per-axis rule structure remains independent. Future-proof.
- **Piece-level Inversion (per Meta-Decision-Piece rule):** "What if the two axes WERE NOT orthogonal — what if cross-worker width depended on sub-route depth?" → Sensemaking KI7 established orthogonality structurally; coupling would create per-cell rules (cross-worker × sub-route grid) that fail to generalize. KILLed.

**Principal candidate (P6-Cand-1):** two-axis composition (cross-worker width × stage-2 sub-route depth); sub-route dedup keyed by parent_route_id (sub-routes from different workers with same parent → eligible for dedup; sub-routes with different parents → preserved as distinct); per-Movement-Family rules apply at both layers; hybrid choice — top-level cross-worker dedup + per-worker sub-route trees preserved when meta-reasoning differs substantially; meta-reasoning field aggregation per 24-00's `meta_reasoning_revision_history`.

**Inversion-candidate (P6-Inv-1):** non-orthogonal coupled axes. KILLed.

**5-test on P6-Cand-1:**
- Novelty: MED (two-axis composition is novel within routeman; matrix-algebra source for cross-domain pattern).
- Scrutiny: PASS.
- Fertility: HIGH (composes P2 + P3 across two axes).
- Actionability: HIGH.
- Mechanism independence: PASS (Combination + Domain Transfer matrix + Lens Shifting all support orthogonal two-axis).

**Disposition:** ACTIONABLE.

### P7 — L0/L1+/L2+ phase progression activation table

**Meta-decision classification:** property (b) framing-semantic (the phase-progression frame the rest of the design operates under).

**Mechanisms applied:**

- **Combination (Generator):** combine 24-40's L0/L1+/L2+ progression + Q2's per-aspect activation rules → per-tier per-aspect activation table.
- **Lens Shifting (Framer):** under the lens "what is the runtime determination for each activation trigger?" — folder-presence-based detection at L1+; runner-supplied list as override; calibration at L2+ depends on per-worker N reaching threshold. The lens makes the determination mechanism explicit per the Determination-mechanism piece check requirement.
- **Piece-level Inversion (per Meta-Decision-Piece rule):** "What if phase progression were INVERTED — start with full N>1 design at L0, degrade to N=1 only when single-worker detected?" → premature; multi-head hasn't shipped; degenerate-clean N=1 is structurally simpler starting point per Sensemaking KI4 + A4. KILLed.

**Principal candidate (P7-Cand-1):** explicit per-tier activation table:
- **L0:** N=1 degenerate + schema extensions present (all fields with degenerate values: `provenance_workers=[single]`, `aggregation_meta={worker_count: 1}`, `worker_telemetry=[single_block]`, `aggregation_scope=invocation`) + per-Movement-Family rules in degenerate form (1-worker = no dedup needed; 1-worker = no priority contention; 1-worker = no disagreement possible) + telemetry roll-up rule (single-tier verdict = sole verdict).
- **L1+:** N>1 activation trigger = folder-presence-based detection (multiple completed worker inquiry folders within scan scope; `_state.md` Status COMPLETE + verdict-line per Q5) OR runner-supplied worker list (override option); dedup activation; provenance list expansion (`provenance_workers` becomes multi-element); disagreement-detection INFO emission begins firing.
- **L2+:** per-worker priority calibration (calibrated per-worker D1 weighting); LLM-judgment-dedup fallback (Stage-2 from 24-01's pattern, activated when deterministic dedup proves insufficient); disagreement-detection threshold tuning (when to escalate cross-worker disagreement to ERROR vs FLAG); cross-invocation extension (`aggregation_scope = cross_invocation` activation if Q14 has shipped).

Activation triggers per tier are time-bound / condition-bound / observable. Determination-mechanism explicit for each trigger.

**Inversion-candidate (P7-Inv-1):** N>1-first progression with N=1 degradation. KILLed.

**5-test on P7-Cand-1:**
- Novelty: LOW (phase-progression pattern inherits 24-40 + Q3/Q4/Q5/Q6/02-00).
- Scrutiny: PASS.
- Fertility: HIGH (activation table wraps every other piece).
- Actionability: HIGH.
- Mechanism independence: PASS (Combination + Lens Shifting + project-wide pattern all support L0/L1+/L2+ progression).

**Disposition:** ACTIONABLE.

### P8 — SKILL.md location + R1 spec-coherence (PROPERTY (v) PIECE)

**Meta-decision classification:** properties (c) lesson-vocabulary (R1 drift-coordination meta-process inheritance) + (e) intervention-shape commitment (ADD-CONTENT to routeman SKILL.md).

**Mechanisms applied:**

- **Combination (Generator):** combine Q6's validation-layer-in-routeman-SKILL.md location + Q2's protocol-content → unified location in routeman SKILL.md as parallel additional sections.
- **Lens Shifting (Framer):** under the lens "what if Q2's protocol were a SEPARATE file?" — separates concerns but adds file-coordination overhead; Q5/Q6 already live in 2 places (Q5 protocol file + Q6 contract sections in Q5 file + Q6 validation layer in routeman SKILL.md); adding Q2 as 3rd file complicates coherence. The lens favors co-location for single-consumer scope.
- **Constraint Manipulation ADD (Framer):** "Q2's protocol sections MUST coexist with Q6's validation layer in routeman SKILL.md" → forces co-location.
- **Constraint Manipulation REMOVE (Framer):** "what if R1 drift-coordination meta-process were not inherited?" → drift risk between routeman SKILL.md + 24-00/18-58 schemas reopens. REJECTED.

**Intervention-shape-axis Inversion (per Intervention-Shape-Axis Inversion Rule; property v fires):**

Current shape commitment: **ADD-CONTENT** (additive sections to routeman SKILL.md).

Alternative shape #1: **REORGANIZE-WITHOUT-ADDING** (restructure routeman SKILL.md to accommodate Q2 without new top-level sections). What follows: fold Q2 content into existing routeman SKILL.md sections (e.g., merge with Q6 validation-layer section). Loses structural distinction between validation (input-side from worker artifacts) and aggregation (output-side producing Route Map); two different concerns get conflated; downstream readers cannot navigate cleanly. KILLed via 5-test (scrutiny survival FAIL).

Alternative shape #2: **ADD-CONTENT to a SEPARATE file** (e.g., `cognitive_harness/protocols/aggregation_protocol.md`). What follows: clean separation of concerns but introduces file-coordination overhead; Q2's spec-coherence with Q5/Q6 becomes a 3-file problem. The Q6 KILL-with-seed (separate validation protocol revival if scope grows beyond routeman) provides a precedent revival path: KILL-with-seed for separate Q2 protocol file at L1+ if single-consumer scope expands. KILLed-with-seed via 5-test (actionability passes but co-location is more parsimonious at L0).

**ADD-CONTENT in routeman SKILL.md survives as the L0 intervention shape.**

**Principal candidate (P8-Cand-1):** Q2's protocol sections live as ADDITIONAL SECTIONS in `routeman` SKILL.md (matches Q6's validation-layer location decision; single-consumer scope at first ship). R1 drift-coordination from Q6 inherited and extended: when routeman SKILL.md's aggregation rules change, schema-extension fields in route-card spec (currently implicit in 24-00 + 18-58) must be coordinated in the same commit. Cross-references to all 12 inherited priors.

**Intervention-shape-axis Inversion-candidate (P8-Inv-Shape-1):** REORGANIZE-WITHOUT-ADDING. KILLed.

**Intervention-shape-axis Inversion-candidate (P8-Inv-Shape-2):** Separate-file ADD-CONTENT. KILLed-with-seed (revival trigger: single-consumer scope expansion).

**5-test on P8-Cand-1:**
- Novelty: LOW (matches Q6 location pattern).
- Scrutiny: PASS.
- Fertility: HIGH (location commitment unblocks SKILL.md authoring).
- Actionability: HIGH.
- Mechanism independence: PASS (Combination + Lens Shifting + Constraint Manipulation ADD + intervention-shape Inversion all support ADD-CONTENT in routeman SKILL.md).

**Disposition:** ACTIONABLE.

---

## Inherited Frame Audit

**Step (i) — Seed-level central assumption:** "Q2 ships at L0 as a degenerate N=1 case with structural extensibility hooks for N>1 and Q14" (from Sensemaking SV6 stabilized model).

**Step (ii) — Piece-level commitments:**
- P1: inheritance from 12 priors (relationship-label REFINES).
- P2: dedup-surface 3-tuple as evaluation-criterion.
- P3: per-Movement-Family rule typology as evaluation-criterion.
- P4: 5-tier worst-case-wins as evaluation-criterion.
- P5: ADD-CONTENT intervention shape + Q14 bridge-not-commitment framing-semantic.
- P6: orthogonal two-axis composition as evaluation-criterion.
- P7: L0/L1+/L2+ phase progression framing-semantic.
- P8: ADD-CONTENT intervention shape + R1 drift-coordination lesson-vocabulary.

**Step (iii) — Challenge scan:**

- Seed-level central assumption challenged by P7-Inv-1 (N>1-first progression with N=1 degradation). Explicit challenge: "what if phase progression were inverted." Direct inverse. KILLed via 5-test but explicit challenge present in candidate set. ✓
- P1 commitment challenged by P1-Inv-1 (Q2 re-invents architectural commitments). ✓
- P2 commitment challenged by P2-Inv-1 (content-hash dedup) + P2-REMOVE-1 (no-dedup mode). ✓
- P3 commitment challenged by P3-Inv-1 (uniform aggregation across Families). ✓
- P4 commitment challenged by P4-Inv-1 (single-counter aggregation). ✓
- P5 intervention-shape commitment challenged by P5-Inv-Shape-1 (REORGANIZE) + P5-Inv-Shape-2 (ADD-DIMENSION). Framing-semantic Q14 bridge-not-commitment challenged by A3's same-mechanism counter-interpretation already tested at LOW confidence — explicit challenge in Sensemaking; absorbed as constraint on the candidate. ✓
- P6 commitment challenged by P6-Inv-1 (non-orthogonal coupled axes). ✓
- P7 commitment challenged by P7-Inv-1 (already counted above). ✓
- P8 intervention-shape commitment challenged by P8-Inv-Shape-1 (REORGANIZE) + P8-Inv-Shape-2 (separate-file). R1 lesson-vocabulary challenged by Constraint-Manipulation-REMOVE "what if R1 not inherited" (rejected). ✓

**Step (iv) — Firing condition:** ALL assumptions/commitments have explicit challenges in the candidate set. **Audit does NOT fire.** Proceed to Phase 3 Test.

---

## Phase 3 — Test (Assembly Check)

### Individual candidate testing

8 principal candidates (P1-Cand-1 through P8-Cand-1) + 2 deferred candidates (P2-REMOVE-1 no-dedup mode + P4-Extrap-1 telemetry-digest) + 1 KILLed-with-seed (P8-Inv-Shape-2 separate-file Q2 protocol). All ACTIONABLE candidates passed 5-test; all KILLed candidates failed at scrutiny survival or actionability per per-piece tests above.

### Assembly check

The 8 ACTIONABLE candidates assemble into a complete Q2 aggregation protocol:

**Architecture (P1) → Operation (P2 + P3 + P4 + P6) → Schema (P5) → Phase activation (P7) → Location (P8).**

**Emergent properties of the assembly:**

1. **Activation-not-rewrite for multi-head transition.** The L0 design ships with degenerate behavior + schema extensions present + extensibility hooks → multi-head transition at L1+ is activation of dormant code paths, NOT rewrite of L0 structures. Emerges only from the combination of P5 (schema extensions present at L0) + P7 (per-tier activation) + P2 (degenerate-clean dedup at N=1). No individual piece alone provides this property.

2. **Bridge-not-commitment for Q14.** The aggregation_scope hook (P5) reserves the slot for Q14 cross-invocation aggregation WITHOUT committing to same-mechanism. Q14's eventual design can override the `cross_invocation` value's rules without breaking L0. Emerges from P5 + the explicit framing-semantic in the principal candidate; no individual piece alone provides this.

3. **80%-documentation / 20%-novel pattern matches Q5 + Q6.** The pattern across Q5 (07-30) + Q6 (09-00) + Q2 (10-00) is consistent — most content documents existing patterns + small novel commitments at structural inflection points. Aggregation rules inherit 02-00; per-discipline dispatch inherits 24-01 + 06-00; phase progression inherits 24-40; schema inherits 24-00 + 18-58; location matches Q6. Novel pieces: 3-tuple dedup-surface (P2); per-Movement-Family rule typology (P3); aggregation_scope hook (P5); R1 extension to cross-worker schema coordination (P8).

4. **R1 drift-coordination scope extension.** Q6's R1 meta-process (discipline-spec heading text changes → coordinated commit) extends naturally to Q2's cross-worker schema field additions: when 24-00 or 18-58's schemas change, routeman SKILL.md's aggregation schema-extension fields must be reviewed for compatibility. Emerges from P8 + the inherited Q6 R1 pattern.

### Axis coverage check

The candidate space varies along multiple orthogonal axes:

| Axis | Variants |
|---|---|
| Aggregation mechanism | deterministic 3-tuple (P2-Cand-1) vs content-hash (P2-Inv-1 KILLed) vs LLM-judgment (DEFERRED L2+) |
| Provenance representation | list field (P2-Cand-1) vs separate ledger (KILLed via dominance) vs both (KILLed) |
| Telemetry shape | per-worker sub-block + roll-up headline (P4-Cand-1) vs single counter (P4-Inv-1 KILLed) |
| Schema extension | ADD-CONTENT (P5-Cand-1) vs REORGANIZE-WITHOUT-ADDING (P5-Inv-Shape-1 KILLed) vs ADD-DIMENSION (P5-Inv-Shape-2 KILLed) |
| Phase progression direction | N=1-first (P7-Cand-1) vs N>1-first (P7-Inv-1 KILLed) |
| Location | in routeman SKILL.md (P8-Cand-1) vs separate file (P8-Inv-Shape-2 KILLed-with-seed) vs REORGANIZE (P8-Inv-Shape-1 KILLed) |
| Aggregation scope | invocation (L0) vs cross_invocation (reserved for Q14) |
| Per-Family rule shape | typology (P3-Cand-1) vs uniform (P3-Inv-1 KILLed) |
| Hierarchy axis coupling | orthogonal (P6-Cand-1) vs coupled (P6-Inv-1 KILLed) |

All 9 axes have at least one variant. PASS.

### Per-piece mechanism-trace check

Each piece's mechanism log shows active mechanism work on its cell values:

- P1: [Combination, Lens-Shifting, Inversion:content] — meta-decision (a + b); compliance satisfied.
- P2: [Domain-Transfer-database, Domain-Transfer-computing-native-hash, Constraint-Manipulation-ADD, Constraint-Manipulation-REMOVE, Inversion:content] — meta-decision (d); compliance satisfied.
- P3: [Absence-Recognition-patch, Absence-Recognition-redesign, Absence-Recognition-already-present, Domain-Transfer-voting, Lens-Shifting, Inversion:content] — meta-decision (d); compliance satisfied.
- P4: [Extrapolation, Lens-Shifting, Constraint-Manipulation-ADD, Constraint-Manipulation-REMOVE, Inversion:content] — meta-decision (d); compliance satisfied.
- P5: [Combination, Absence-Recognition-redesign, Absence-Recognition-already-present, Constraint-Manipulation-ADD, Constraint-Manipulation-REMOVE, Inversion:intervention-shape] — meta-decision (b + e); compliance satisfied (intervention-shape axis Inversion fired with 2 alternative shapes named).
- P6: [Combination, Domain-Transfer-matrix, Lens-Shifting, Inversion:content] — meta-decision (d); compliance satisfied.
- P7: [Combination, Lens-Shifting, Inversion:content] — meta-decision (b); compliance satisfied.
- P8: [Combination, Lens-Shifting, Constraint-Manipulation-ADD, Constraint-Manipulation-REMOVE, Inversion:intervention-shape] — meta-decision (c + e); compliance satisfied (intervention-shape axis Inversion fired with 2 alternative shapes named).

### Shared-input detection (Mechanism Independence test)

Many mechanisms converged via shared inheritance from 12 priors. Is this convergence INDEPENDENT or SPURIOUS?

- The 12 priors are established structural foundation (architecture + schema + emission policy + protocols + contracts + phase progression).
- The convergence on the L0 design from multiple mechanisms reflects multi-source agreement on structurally-grounded patterns, not tautological inheritance.
- Independent grounds: Domain Transfer (database compound-key + matrix tensor product + voting consensus systems) + Constraint Manipulation (additive-only schema; spec-coherence) + Combination (specific pattern combinations between Q5/Q6 location + Q2 protocol-content) + intervention-shape Inversion (per piece's alternative direction challenged).
- Conclusion: convergence is INDEPENDENT. Multiple mechanisms operating on different grounds (database patterns, matrix algebra, voting systems, intervention-shape vocabulary, native-computing-domain hash patterns) all support the L0 design.

---

## Mechanism Coverage Telemetry

- **Generators applied:** 4/4 (Combination, Absence Recognition, Domain Transfer, Extrapolation).
- **Framers applied:** 3/3 (Lens Shifting, Constraint Manipulation, Inversion).
- **Convergence:** YES — multiple mechanisms converge on each piece's principal candidate. E.g., Domain Transfer (database compound-key) + Domain Transfer (computing-native hash) + Constraint Manipulation ADD all support 3-tuple dedup; Combination + Domain Transfer matrix + Lens Shifting all support orthogonal two-axis composition.
- **Survivors tested:** 8/8 principal candidates + 2 deferred candidates + 1 KILLed-with-seed = 11 candidates tested via 5-test cycle.
- **Failure modes observed:** none (Premature Evaluation not triggered — generation preceded testing; Single-Mechanism Trap not triggered — minimum 3 mechanisms per piece; Early Frame Lock not triggered — Inversion applied per piece; Innovation Without Grounding not triggered — every generation followed by 5-test; Mechanism Exhaustion not triggered — convergence achieved; Survival Bias not triggered — Inversion-candidate generation forced via Piece-Level Inversion Rule).

### Production-task additional telemetry

**Per-piece mechanism log:** see "Per-piece mechanism-trace check" above (8 piece logs with mechanism types per piece).

**Per-piece axis-distribution log:**

- P1: [Combination:content, Lens-Shifting:content, Inversion:content] — meta-decision (a + b); axes: content only (not property (v)).
- P2: [Domain-Transfer-database:content, Domain-Transfer-computing-native-hash:content, Constraint-Manipulation-ADD:content, Constraint-Manipulation-REMOVE:content, Inversion:content] — meta-decision (d); axes: content only.
- P3: [Absence-Recognition-patch:content, Absence-Recognition-redesign:content, Absence-Recognition-already-present:content, Domain-Transfer-voting:content, Lens-Shifting:content, Inversion:content] — meta-decision (d); axes: content only.
- P4: [Extrapolation:content, Lens-Shifting:content, Constraint-Manipulation-ADD:content, Constraint-Manipulation-REMOVE:content, Inversion:content] — meta-decision (d); axes: content only.
- **P5:** [Combination:content, Absence-Recognition-redesign:content, Absence-Recognition-already-present:content, Constraint-Manipulation-ADD:content, Constraint-Manipulation-REMOVE:content, **Inversion:intervention-shape**] — meta-decision (b + e); axes: content + intervention-shape (property v compliance satisfied).
- P6: [Combination:content, Domain-Transfer-matrix:content, Lens-Shifting:content, Inversion:content] — meta-decision (d); axes: content only.
- P7: [Combination:content, Lens-Shifting:content, Inversion:content] — meta-decision (b); axes: content only.
- **P8:** [Combination:content, Lens-Shifting:content, Constraint-Manipulation-ADD:content, Constraint-Manipulation-REMOVE:content, **Inversion:intervention-shape**] — meta-decision (c + e); axes: content + intervention-shape (property v compliance satisfied).

**Meta-decision-piece classification:**

- P1: meta-decision (relationship-label REFINES + framing-semantic foundation).
- P2: meta-decision (evaluation-criterion).
- P3: meta-decision (evaluation-criterion).
- P4: meta-decision (evaluation-criterion).
- P5: meta-decision (framing-semantic + intervention-shape commitment — property v fires).
- P6: meta-decision (evaluation-criterion).
- P7: meta-decision (framing-semantic).
- P8: meta-decision (lesson-vocabulary + intervention-shape commitment — property v fires).

All 8 pieces classified as meta-decision; 2 fire property (v) (P5, P8).

**Piece-level Inversion compliance:**

- P1: satisfied.
- P2: satisfied.
- P3: satisfied.
- P4: satisfied.
- P5: satisfied (intervention-shape axis Inversion fired with 2 alternative shapes — REORGANIZE-WITHOUT-ADDING + ADD-DIMENSION — both tested and KILLed).
- P6: satisfied.
- P7: satisfied.
- P8: satisfied (intervention-shape axis Inversion fired with 2 alternative shapes — REORGANIZE-WITHOUT-ADDING + separate-file ADD-CONTENT — REORGANIZE KILLed; separate-file KILLed-with-seed for revival at L1+).

No violations; no FLAG conditions; no RE-RUN conditions.

**Overall: PROCEED**
