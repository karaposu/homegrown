# Decomposition — Multi-head aggregation protocol for routeman (Q2)

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-24_10-00__multi_head_aggregation_routeman/_branch.md`

## Prerequisites

Sensemaking (sensemaking.md) clarified the whole: a singleton-routeman INTERNAL aggregation operation that ships at L0 as a degenerate N=1 case with structural extensibility hooks for N>1 and Q14, anchored in 12 inherited priors with 4 layered commitments (COMMIT-1 through COMMIT-4) and 5 resolved ambiguities. Decomposition proceeds on this clarified whole.

---

## Step 1 — Coupling Map (Perceive Coupling Topology)

### Elements identified

From sensemaking's stabilized model (SV6), 15 design elements compose the Q2 protocol:

| ID | Element |
|---|---|
| E1 | Dedup-surface rule (3-tuple definition + Question_fingerprint normalization) |
| E2 | Per-Movement-Family aggregation rules (3 rule-types: Progression / Re-orientation / Coordination) |
| E3 | Per-discipline dispatch (inheriting 24-01's per-movement-type chain + 06-00's per-mode dispatch) |
| E4 | Per-worker provenance schema field (`provenance_workers: List[str]`) |
| E5 | Telemetry aggregation rule (5-tier verdict roll-up + per-worker sub-block) |
| E6 | Schema extensions for top-level Route Map (`aggregation_meta: dict`, `worker_telemetry: List[dict]`) |
| E7 | aggregation_scope parametric hook (`invocation` / `cross_invocation`) |
| E8 | Disagreement-detection rule (INFO emission via per-worker telemetry sub-block on partial-key conflict) |
| E9 | L0/L1+/L2+ phase progression activation table |
| E10 | Hierarchical Route Map composition (top-level + sub-route aggregation; FF-3 from 18-58) |
| E11 | Q5/Q6 protocol inheritance (file-system reads + file-shape contracts) |
| E12 | 24-00 schema inheritance (route-card 17/18-attribute commitments + `meta_reasoning_revision_history`) |
| E13 | SKILL.md authoring location (where Q2's protocol sections live) |
| E14 | Spec-coherence meta-process (R1 drift-coordination from Q6) |
| E15 | Q14 scope distinction documentation |

### Coupling assessment (pairwise change-propagation)

- **(E1, E4):** STRONG. Dedup-surface rule defines the identity-key whose matches populate the `provenance_workers` list. Change dedup-rule → change provenance shape.
- **(E1, E10):** STRONG. Dedup applies at both top-level and sub-route layers; sub-route dedup keyed by parent-route identifier requires dedup-surface to handle parent_route_id in both null (top-level) and populated (sub-route) cases.
- **(E2, E3):** STRONG. Per-Movement-Family rules dispatch via per-discipline reads — the rule for Progression reads `critique.md` SURVIVE markers + `sensemaking.md` Key-Insights anchors; Re-orientation rule reads different sections. Change per-Family rule → change per-discipline dispatch.
- **(E2, E8):** STRONG. Disagreement-detection is triggered by per-Family rules when partial-key matches conflict on movement_type. Change per-Family rule → change disagreement-detection trigger.
- **(E5, E6):** STRONG. The telemetry roll-up output IS the `worker_telemetry` field shape. Change roll-up rule → change schema field.
- **(E7, E15):** STRONG. aggregation_scope IS the schema-level realization of the Q14 scope distinction. Change scope hook → change Q14 documentation.
- **(E1, E2):** MODERATE. Dedup output feeds per-Family rule input (which Routes per Family after dedup), but the two rules are independently expressible.
- **(E4, E6):** MODERATE. Both are schema extensions; coupled via the umbrella `Route Map schema` concept but each adds a distinct field.
- **(E10, E2):** MODERATE. Hierarchical composition applies per-Family rules at sub-route layer; per-Family rule is reusable across layers.
- **(E9, ALL):** MODERATE. Phase progression specifies WHEN each rule activates; coupling is via activation-table cross-references, not via rule content.
- **(E11, E12, E13, E14):** WEAK among themselves and with E1-E10. These are CROSS-CUTTING inheritance + meta-process concerns that touch all design elements but have no content-coupling to any single one.
- **(E15, E1-E6):** WEAK. Q14 scope is just one parametric value (`cross_invocation`) at the scope hook; no content-coupling with the per-invocation aggregation rules.

### Coupling map (clusters + cross-cutting layer)

**Cluster A — Aggregation Identity + Provenance Schema**
- E1 (dedup-surface), E4 (provenance_workers field), part of E10 (hierarchical dedup keyed by parent-route identifier).
- Bound by the shared concept of "what counts as the same candidate across workers" + "how is that captured per Route."

**Cluster B — Aggregation Rule Logic**
- E2 (per-Movement-Family rules), E3 (per-discipline dispatch), E8 (disagreement-detection).
- Bound by the shared concept of "how rules dispatch per Family across per-discipline reads + what they emit on conflict."

**Cluster C — Telemetry Aggregation**
- E5 (telemetry roll-up), part of E6 (`worker_telemetry` field).
- Bound by the shared concept of "how per-worker telemetry signals roll up into the singleton Route Map's Telemetry block."

**Cluster D — Schema Extensions + Scope Hook**
- E4 (provenance_workers), E6 (aggregation_meta + worker_telemetry), E7 (aggregation_scope), E15 (Q14 scope documentation).
- Bound by the shared concept of "what new schema fields the Route Map carries to support L1+/L2+ + Q14."

**Cluster E — Hierarchical Composition**
- E10 (hierarchical Route Map composition; FF-3 from 18-58).
- Bound by the shared concept of "how aggregation composes across two axes — cross-worker width × stage-2 sub-route depth."

**Cluster F — Phase Progression**
- E9 (L0/L1+/L2+ activation table).
- Bound by the shared concept of "when each rule activates across project phases."

**Cluster G — Artifact Location + Coherence**
- E13 (SKILL.md authoring location), E14 (R1 drift-coordination spec-coherence).
- Bound by the shared concept of "where the protocol lives and how it stays coherent with neighbor specs."

**Cross-cutting Inheritance Layer**
- E11 (Q5/Q6 protocol inheritance), E12 (24-00 schema inheritance).
- Touches all clusters; provides architectural and schema substrate without content-coupling to any single cluster.

Note: E4 appears in both Cluster A (as provenance-identity) and Cluster D (as schema-field). This is intentional — E4 is the bridge between the dedup operation's output and the schema's structural commitment. The decomposition assigns ownership to Cluster A (dedup-operation owns the field's semantics) with a reference in Cluster D (schema collects the field name).

### Major boundaries (valleys of low coupling)

- **Boundary A-B:** between aggregation-output-SHAPE (Cluster A) and aggregation-rule-OPERATIONS (Cluster B). Interface: dedup output → rule input.
- **Boundary B-C:** between rule-output-on-Routes (Cluster B) and rule-output-on-Telemetry (Cluster C). Interface: disagreement signal → telemetry emission.
- **Boundary A/B/C-D:** between content-producers (A/B/C) and schema-contract (D). Interface: producers write to schema field names; schema field names are the contract.
- **Boundary A/B/C/D-E:** between flat-aggregation (A/B/C/D) and hierarchical-composition (E). Interface: dedup + rules + schema applied at both layers; E composes.
- **Boundary content-F:** between WHAT activates (content clusters) and WHEN it activates (Cluster F). Interface: per-tier activation table cross-references all content clusters.
- **Boundary design-G:** between the design (all content clusters) and the artifact-location (Cluster G). Interface: location commitment + coherence requirement.

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, 8 natural cut points emerge as candidate pieces:

| Piece | Cluster | Candidate boundary |
|---|---|---|
| P1 | Inheritance Layer | Architectural pre-conditions + protocol/schema inheritance from priors |
| P2 | Cluster A | Dedup-surface rule + provenance schema field |
| P3 | Cluster B | Per-Movement-Family aggregation rules + per-discipline dispatch + disagreement-detection |
| P4 | Cluster C | Telemetry aggregation rule (5-tier roll-up + worker_telemetry sub-block) |
| P5 | Cluster D | Schema-unification (aggregation_meta + worker_telemetry + aggregation_scope) + Q14 scope distinction documentation |
| P6 | Cluster E | Hierarchical Route Map composition (top-level + sub-route aggregation across two axes) |
| P7 | Cluster F | L0/L1+/L2+ phase progression activation table |
| P8 | Cluster G | SKILL.md authoring location + R1 spec-coherence with neighbors |

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

### Atomic (irreducible) elements

- **Atom: `provenance_workers: List[str]` field** — a single schema-field commitment. Belongs to P2 (defined by dedup operation's semantics; the field's NAME is also referenced by P5's schema-unification). Boundary correctly distinguishes ownership (P2) from collection (P5).
- **Atom: Question_fingerprint normalization rule (lowercase + whitespace-collapse + punctuation-strip)** — a single deterministic computation. Belongs to P2 (subcomponent of dedup-surface rule). Not split across boundaries.
- **Atom: 5-tier verdict worst-case-wins rule (any ERROR → ERROR; any FLAG → FLAG; else PROCEED)** — a single monotonic order-independent rule. Belongs to P4 (subcomponent of telemetry roll-up). Not split.
- **Atom: Per-Movement-Family rule-typology (Progression vote-count; Re-orientation diversity-preserving; Coordination per-type pre-condition + default)** — three rule-types as one taxonomy. Belongs to P3 (subcomponent of rule logic). Not split.
- **Atom: aggregation_scope field with values `invocation` / `cross_invocation`** — a single schema field with parametric values. Belongs to P5 (subcomponent of schema extensions). Not split.
- **Atom: Sub-route dedup-key parent_route_id matching rule** — a single rule for sub-route-layer dedup. Belongs to P6 (subcomponent of hierarchical composition) but also references P2 (the dedup-surface rule itself). Interface needed.
- **Atom: L0/L1+/L2+ activation rows per element** — multiple rows, one per element (P2/P3/P4/P5/P6). Belongs to P7 (phase progression). Each row cross-references its element. Interfaces needed.
- **Atom: R1 drift-coordination meta-process from Q6** — a single inherited meta-process. Belongs to P8 (artifact location + coherence). Not split.

### Boundary alignment check

- P1 atom-cluster: architectural pre-conditions + inheritance items. Aligns with Cluster A's boundary as a foundational pre-condition layer. ✓
- P2 atom-cluster: dedup-surface 3-tuple + Question_fingerprint normalization + provenance_workers field. Aligns with Cluster A. ✓
- P3 atom-cluster: per-Family rule-typology + per-discipline dispatch + disagreement-detection rule. Aligns with Cluster B. ✓
- P4 atom-cluster: telemetry roll-up rule + worker_telemetry sub-block schema. Aligns with Cluster C. ✓ (note: worker_telemetry field is OWNED by P4 (operation defines field) and referenced in P5's schema-unification).
- P5 atom-cluster: schema-unification (collecting all field names) + aggregation_scope + Q14 scope distinction documentation. Aligns with Cluster D. ✓
- P6 atom-cluster: hierarchical composition rule (two-axis: cross-worker width × sub-route depth) + sub-route dedup-key matching. Aligns with Cluster E. ✓
- P7 atom-cluster: per-tier activation rows referencing all content pieces. Aligns with Cluster F. ✓
- P8 atom-cluster: location commitment + R1 drift-coordination requirement. Aligns with Cluster G. ✓

### Confidence

Top-down and bottom-up agree on all 8 piece boundaries. **HIGH confidence.** No splitting or merging required.

---

## Step 4 — Question Tree (Express as Questions with Verification Criteria)

### P1 — Architectural pre-conditions + protocol/schema inheritance

**Question:** What architectural pre-conditions and protocol/schema inheritances does Q2's aggregation operation rest on?

**Verification criteria:**
- [ ] Singleton main navigator invariant explicitly preserved (from 14-39 + 16-31).
- [ ] File-mediated only input contract preserved (from 16-31 + Q5).
- [ ] Isolated session preserved (from 16-31).
- [ ] Enumerate-all + observe-only identity invariants preserved (from 02-00 + 06-00).
- [ ] Q5 protocol inheritance documented (folder topology + atomic-write + verdict-line check + scan-detection).
- [ ] Q6 contract inheritance documented (5 per-discipline contracts + 2 inquiry-level contracts + validation layer).
- [ ] 24-00 schema inheritance documented (route-card 17/18-attribute commitments + `meta_reasoning_revision_history` + hybrid placement).
- [ ] Single Route Map per invocation commitment preserved (corrected Q2 framing).

### P2 — Dedup-surface rule + provenance schema field

**Question:** What is the dedup-surface rule used to identify cross-worker candidate equivalence, and what schema field captures per-worker provenance?

**Verification criteria:**
- [ ] Dedup-surface defined as 3-tuple: `(movement_type, parent_route_id, Question_fingerprint)`.
- [ ] Question_fingerprint normalization rule defined: lowercase + whitespace-collapse + punctuation-strip + hash.
- [ ] parent_route_id handles both null (top-level Route) and populated (sub-route) cases.
- [ ] Dedup output: provenance_workers per Route = list of worker_inquiry_paths whose contributions matched the 3-tuple.
- [ ] Schema field `provenance_workers: List[str]` defined on Route; degenerate at N=1 as 1-element list.
- [ ] Optional `dedup_evidence: dict` field per Route (records the matched fields when dedup occurs; absent at N=1; useful for audit).
- [ ] False-positive mitigation: merged Route preserves both workers' `meta_reasoning` fields per `meta_reasoning_revision_history`; substantial divergence recorded in `dedup_evidence`.

### P3 — Per-Movement-Family aggregation rules + per-discipline dispatch + disagreement-detection

**Question:** What is the per-Movement-Family aggregation rule typology, how does it dispatch across per-discipline reads, and how does it emit disagreement signals?

**Verification criteria:**
- [ ] Three rule-types defined:
  - [ ] **Progression-Aggregation:** vote-count weighted by per-worker D1 confidence sum.
  - [ ] **Re-orientation-Aggregation:** diversity-preserving; minimal dedup (only exact 3-tuple matches); per-worker rendering retained.
  - [ ] **Coordination-Aggregation:** per-type pre-condition check (e.g., REVISIT ≥3 prior cycles inherited from 02-00) + per-Family default.
- [ ] Per-discipline dispatch reads inherit 24-01 + 06-00 patterns (per-movement-type chain from Stage 1 of 24-01; per-mode dispatch table from 06-00).
- [ ] Disagreement-detection rule defined: triggers when workers conflict on movement_type for identical (parent_route_id, Question_fingerprint) partial-key match.
- [ ] Disagreement-detection emits INFO via the per-worker telemetry sub-block (NOT via ERROR; NOT via gating any Route).
- [ ] L0 threshold = every conflict; L2+ threshold tuning hooked.
- [ ] Identity-preservation-override: priority is informational; no Route is gated.

### P4 — Telemetry aggregation rule (5-tier roll-up + worker_telemetry sub-block)

**Question:** How are per-worker telemetry signals (per-discipline verdict lines, structural-check pass/fail, convergence telemetry) aggregated into the singleton Route Map's Telemetry block?

**Verification criteria:**
- [ ] Per-worker telemetry preserved verbatim in a `worker_telemetry: List[dict]` sub-block (one dict per worker; reads at-source from per-worker artifacts via Q5 protocol + Q6 contracts).
- [ ] Aggregate verdict roll-up rule: 5-tier worst-case-wins (any ERROR → ERROR; any FLAG → FLAG; else PROCEED); INFO additive (does not override headline; surfaces in sub-block).
- [ ] Roll-up rule proven monotonic and order-independent (determinism invariant per FF-Q2-S3).
- [ ] Disagreement-detection INFO emissions surface in the per-worker telemetry sub-block; do NOT escalate the aggregate verdict.
- [ ] Empty aggregation case (all N workers produced no candidates) emits empty Route Map with aggregate verdict INFO + note "no candidates from any worker."

### P5 — Schema-unification + aggregation_scope parametric hook + Q14 scope distinction documentation

**Question:** What schema extensions does the Route Map carry to support N>1 aggregation + the Q14 cross-invocation bridge, and what scope distinction is documented?

**Verification criteria:**
- [ ] All new schema fields enumerated in one place:
  - [ ] `provenance_workers: List[str]` (per Route; owned by P2; collected here).
  - [ ] `aggregation_meta: dict` (top-level Route Map; degenerate at N=1 as `{worker_count: 1}`).
  - [ ] `worker_telemetry: List[dict]` (per-Route-Map; owned by P4; collected here).
  - [ ] `dedup_evidence: dict` (per Route; optional; owned by P2; collected here).
  - [ ] `aggregation_scope: enum` with values `invocation` (L0 default) and `cross_invocation` (reserved for Q14).
- [ ] aggregation_scope documented as **bridge-not-commitment** — does NOT claim Q2's mechanism = Q14's mechanism.
- [ ] Q14 scope distinction explicitly documented: "Q2 = per-invocation cross-worker aggregation; Q14 = per-future-design cross-invocation aggregation; same hook, potentially different rules at the `cross_invocation` value."
- [ ] Schema-extension compatibility check: new fields coexist with 24-00's `meta_reasoning_revision_history` and 18-58's 17/18-attribute commitments without breaking changes (Q12 frontier obligation: Q12's eventual design must accommodate Q2's first-mover additions).

### P6 — Hierarchical Route Map composition (two-axis aggregation)

**Question:** How does the aggregation operation compose across two orthogonal axes — cross-worker width (N parallel workers contributing) and stage-2 sub-route depth (per-parent-route expansion from 18-58)?

**Verification criteria:**
- [ ] Two-axis composition rule defined: aggregation applies independently at top-level layer AND at sub-route layer.
- [ ] Sub-route dedup keyed by parent_route_id (sub-routes from different workers with the same parent Route → eligible for dedup; sub-routes with different parents → preserved as distinct).
- [ ] Per-Movement-Family rules apply at both layers (Progression-Aggregation at top-level → vote-count; Progression-Aggregation at sub-route → vote-count within the parent-route's sub-route set).
- [ ] Hybrid choice committed: top-level cross-worker dedup + per-worker sub-route trees preserved when sub-routes' meta-reasoning fields differ substantially.
- [ ] Meta-reasoning field aggregation rule defined: when same Route appears in multiple workers with substantively different meta-reasoning, both are preserved in `meta_reasoning_revision_history` per 24-00's schema.

### P7 — L0/L1+/L2+ phase progression activation table

**Question:** What is the per-tier activation table specifying when each aggregation rule and schema field becomes operational across project autonomy phases?

**Verification criteria:**
- [ ] L0 row: N=1 degenerate + schema extensions present (all fields with degenerate values) + per-Movement-Family rules in degenerate form (1-worker = no dedup needed; 1-worker = no priority contention; 1-worker = no disagreement possible) + telemetry roll-up rule (single-tier verdict = sole verdict) + aggregation_scope = `invocation`.
- [ ] L1+ row: N>1 activation trigger = folder-presence-based detection (multiple completed worker inquiry folders within scan scope) OR runner-supplied worker list (override option); dedup activation; provenance list expansion (`provenance_workers` becomes multi-element); disagreement-detection INFO emission begins firing.
- [ ] L2+ row: per-worker priority calibration (calibrated per-worker D1 weighting); LLM-judgment-dedup fallback (Stage-2 from 24-01's pattern, activated when deterministic dedup proves insufficient); disagreement-detection threshold tuning (when to escalate cross-worker disagreement to ERROR vs FLAG); cross-invocation extension (`aggregation_scope = cross_invocation` activation if Q14 has shipped).
- [ ] Activation triggers per tier are time-bound / condition-bound / observable (no "eventually" / "when appropriate" / "as needed").
- [ ] Determination-mechanism explicit: HOW each activation trigger fires is specified (e.g., folder-presence detection algorithm; runner-supplied list format).

### P8 — SKILL.md authoring location + R1 spec-coherence meta-process

**Question:** Where do Q2's protocol sections live in the codebase, and how do they stay coherent with neighboring specs (Q5 protocol file + Q6 contracts + 24-00 schema + 18-58 schema)?

**Verification criteria:**
- [ ] Location committed: Q2's protocol sections live as ADDITIONAL SECTIONS in `routeman` SKILL.md (single-consumer scope matches Q6's validation-layer location decision; Q5 protocol file remains the file-system-protocol home; Q6 contract sections live in Q5 file).
- [ ] R1 drift-coordination from Q6 inherited and extended: when routeman SKILL.md's aggregation rules change, the schema-extension fields in the route-card spec (currently implicit in 24-00 + 18-58) must be coordinated in the same commit.
- [ ] Cross-references to Q5 protocol file (for file-system reads); Q6 contract sections (for per-discipline contract conformance); 24-00 schema (for `_navig.md` / `routeman.md` structure); 18-58 schema (for 17/18-attribute commitments); 02-00 emission policy (for per-Route-Type-split inheritance); 24-01 + 06-00 (for per-mode dispatch pattern); 14-39 (for singleton-main-navigator commitment); 24-40 (for L0/L1+/L2+ progression + 3-tier failure handling).
- [ ] Spec-coherence check committed: whenever 24-00's schema or 18-58's 17/18-attribute commitments change, Q2's schema-extensions section must be reviewed for compatibility.

---

## Step 5 — Interface Map

For each connected piece pair, what flows and in which direction.

| From | To | What flows | Direction | Type |
|---|---|---|---|---|
| P1 | P2/P3/P4/P5/P6/P7/P8 | Architectural pre-conditions (singleton, file-mediated, isolated, enumerate-all, observe-only); inheritance from Q5/Q6/24-00/18-58 | one-way | prerequisite |
| P2 | P3 | Dedup output: which candidates are deduped vs distinct (the post-dedup candidate set that per-Family rules dispatch over) | one-way | data |
| P2 | P5 | `provenance_workers` field name + semantics (P5's schema-unification collects the field) | one-way | contract |
| P2 | P6 | Dedup-surface rule + parent_route_id handling (P6 applies the rule at sub-route layer with parent_route_id matching) | one-way | rule |
| P3 | P4 | Disagreement signals on partial-key matches (P4 surfaces these as INFO in per-worker telemetry sub-block) | one-way | signal |
| P3 | P5 | Per-Route-Type rules implied schema needs (e.g., `vote_count` derived field; `confidence_sum` derived field — may be denormalized or computed-on-read) | one-way | contract |
| P3 | P6 | Per-Movement-Family rules apply at both layers (sub-route layer reuses the rule typology) | one-way | rule |
| P4 | P5 | `worker_telemetry` field shape + aggregate verdict field shape (P5's schema-unification collects the fields) | one-way | contract |
| P5 | P2/P3/P4/P6 | Schema field NAMES are the contract these pieces write to (forms a back-edge from schema-unification to writers) | one-way | contract |
| P6 | P5 | `sub_routes` field per top-level Route + hierarchical structure shape (P5 includes the sub-route schema) | one-way | contract |
| P7 | P1/P2/P3/P4/P5/P6 | Per-tier activation rows reference what each element does at L0/L1+/L2+ | one-way | activation-rule |
| P8 | ALL | Location commitment (where the protocol lives) + spec-coherence requirement (when to update neighbor specs) | one-way | meta-constraint |

### Hidden-coupling check (assumptions-not-data per Step 5 refinement)

- **P2's dedup assumes P3's per-Movement-Family rules will respect the dedup output's `provenance_workers` shape.** This is explicit in the interface (P2 → P3 data flow), so not hidden.
- **P3's per-Movement-Family rules assume the worker artifacts conform to Q6's per-discipline contracts.** Explicit through P1's inheritance documentation (Q6 contract inheritance is a P1 verification criterion).
- **P4's telemetry roll-up assumes the verdict-line two-part write-completeness check from Q5 has succeeded for each worker.** Explicit through P1's Q5 inheritance.
- **P5's schema assumes 24-00's existing fields don't conflict with the new field names.** Spec-coherence check in P8 covers this; documented as Q12 frontier obligation in P5's criteria.
- **P6's hierarchical composition assumes 18-58's 18-attribute sub-route schema is the basis for sub-route Routes.** Explicit through P1's 18-58 inheritance.
- **P7's activation triggers assume `docs/autonomy_level.md` is read per 24-40's 3-tier failure handling.** Explicit through P1's 24-40 inheritance (added to P1 criteria below if not already).

No hidden coupling detected. All assumptions surface as explicit interface flows.

---

## Step 6 — Dependency Order

### Dependencies derived from interfaces

- **P1 (architectural pre-conditions + inheritance)** has NO dependencies. Foundational. Wave 1.
- **P2 (dedup + provenance)** depends on P1's inheritance (Q5/Q6 reads + 24-00 schema). Wave 2.
- **P3 (per-Family rules + dispatch + disagreement)** depends on P1's inheritance (Q6 contracts; 24-01 + 06-00 patterns) + P2's dedup output (post-dedup candidate set). But P3 can be DESIGNED in parallel with P2 if the dedup output's INTERFACE is defined at P2's start. Wave 2 (with P2's interface as pre-condition contract).
- **P4 (telemetry roll-up + worker_telemetry)** depends on P1's inheritance (Q5 verdict-line + 06-00 5-tier vocabulary) + P3's disagreement signals (INFO emission shape). Wave 2 (with P3's INFO-emission interface as pre-condition contract).
- **P6 (hierarchical composition)** depends on P2 (dedup rule applied at sub-route layer) + P3 (per-Family rules applied at sub-route layer) + P1 (18-58 inheritance). Wave 2 (parallel with P2/P3/P4 once their interfaces are defined).
- **P5 (schema-unification + aggregation_scope + Q14 distinction)** depends on P2 (provenance_workers field), P3 (vote_count / confidence_sum derived fields), P4 (worker_telemetry + aggregate verdict fields), P6 (sub_routes hierarchical structure). Wave 3.
- **P7 (phase progression)** depends on P2/P3/P4/P5/P6 (must know what each element does to specify when it activates). Wave 4.
- **P8 (location + coherence)** depends on knowing the protocol's complete content (P1-P7) to commit to the location and coherence requirements. Wave 5.

### Wave ordering

```
Wave 1: P1 (architectural pre-conditions + inheritance — foundational)
       │
       ▼
Wave 2: P2 (dedup + provenance)
        P3 (per-Family rules + dispatch + disagreement)
        P4 (telemetry roll-up + worker_telemetry)
        P6 (hierarchical composition)
        — all parallel; each consumes P1 + each other's interface contracts
       │
       ▼
Wave 3: P5 (schema-unification + aggregation_scope + Q14 distinction)
        — depends on field shapes from P2/P3/P4/P6
       │
       ▼
Wave 4: P7 (L0/L1+/L2+ phase progression activation table)
        — depends on knowing what P2/P3/P4/P5/P6 do to specify when
       │
       ▼
Wave 5: P8 (location + R1 coherence)
        — depends on knowing the protocol's content
```

No circular dependencies detected. Within Wave 2, all four pieces can be designed in parallel by exchanging interface contracts up-front.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

| Dimension | Check | Result |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS.** Each piece's question is answerable from its inputs (P1's inheritance + sibling interface contracts) without reading sibling pieces' internal logic. Within Wave 2, the four pieces depend only on each other's INTERFACE contracts (defined up-front), not internal logic. |
| **Completeness** | Do the pieces cover the whole? | **PASS.** All 7 _branch.md sub-aspects mapped: SA1 dedup → P2; SA2 provenance → P2 + P5; SA3 telemetry → P4; SA4 priority → P3; SA5 hierarchical → P6; SA6 first-ship-vs-deferred → P7; SA7 Q14 scope distinction → P5. All 4 sensemaking commitments mapped: COMMIT-1 singleton → P1; COMMIT-2 dedup → P2; COMMIT-3 per-Family rules → P3; COMMIT-4 schema + scope hook → P5. No gap. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS.** Given P1's pre-conditions + P2's dedup-output + P3's rule-output + P4's telemetry-roll-up + P5's unified schema + P6's hierarchical composition + P7's per-tier activation + P8's location commitment, the result is a complete Q2 aggregation protocol that lives in `routeman` SKILL.md (per P8 location), conforms to all inherited invariants (per P1), ships degenerate-clean at N=1 (per P7 L0 row), and activates multi-worker behavior at L1+/L2+ (per P7 L1+/L2+ rows). |

### Determination-mechanism piece check (per Step 7 refinement)

The Q-tree includes load-bearing concepts whose use depends on runtime determination:

- **"Multi-head trigger predicate" (when does routeman scan multiple worker folders?):** Runtime determination at L1+. Addressed by P7's L1+ row criteria (folder-presence-based detection OR runner-supplied worker list). Determination mechanism specified. ✓
- **"Per-worker priority calibration" (when does per-worker D1 confidence get calibrated weight?):** Runtime determination at L2+. Addressed by P7's L2+ row criteria. Determination mechanism deferred to L2+ activation. ✓ (deferral is explicit, not implicit).
- **"Disagreement-detection threshold" (when does disagreement escalate to ERROR vs FLAG?):** Runtime determination at L2+. Addressed by P7's L2+ row criteria. Deferred. ✓
- **"aggregation_scope value selection" (when does scope = `cross_invocation`?):** Runtime determination at L2+ (only if Q14 has shipped). Addressed by P7's L2+ row criteria. Deferred. ✓

All load-bearing runtime determinations have an addressing piece. **PASS.**

### Full 7-dimension evaluation

| Dimension | Result |
|---|---|
| Independence | PASS (per above) |
| Completeness | PASS (per above) |
| Reassembly | PASS (per above) |
| **Tractability** | PASS. Each piece is a single focused design decision tractable in one Innovation pass. P3 is the largest (3 rule-types) but still tractable in one pass. |
| **Interface clarity** | PASS. All cross-piece flows explicit in Step 5's interface map (12 interfaces enumerated, with type — data / contract / rule / signal / prerequisite / activation-rule / meta-constraint). No hidden assumptions (hidden-coupling check in Step 5 surfaces no hidden dependencies). |
| **Balance** | PASS with note. P3 (3 rule-types) and P5 (schema-unification across multiple fields) are slightly larger than P2/P4/P6 (single rule each). P1, P7, P8 are smaller (documentation-and-coherence pieces). The imbalance is structural — rule-typology pieces are intrinsically larger than single-rule pieces. Not severe enough to require further decomposition. |
| **Confidence** | HIGH. Top-down clustering (8 clusters from coupling map) and bottom-up atom-grouping align on all 8 piece boundaries. Step 3 validation passed with no disagreements. |

### Failure-mode check

- **Premature Decomposition:** No. Sensemaking clarified the whole (SV6 stabilized model + 4 layered commitments). Coupling map built on that clarification. ✓
- **Wrong Boundaries:** No. Cuts placed at low-coupling regions (between aggregation-output-SHAPE and aggregation-rule-OPERATIONS; between content-producers and schema-contract; between WHAT and WHEN). ✓
- **Hidden Coupling:** No. Assumptions-not-data check in Step 5 surfaced all inter-piece assumptions as explicit interfaces. ✓
- **Missing Pieces:** No. Completeness check covers all 7 sub-aspects + 4 commitments. Determination-mechanism piece check covers all 4 runtime determinations. ✓
- **Over-Decomposition:** No. 8 pieces for a 7-sub-aspect inquiry is appropriate (the +1 is the inheritance layer P1, which deserves its own piece because it's load-bearing for all other pieces). Each piece is tractable in one Innovation pass. ✓
- **Ignoring Dependencies:** No. 5-wave ordering explicit; within-wave parallelism explicit; no circular dependencies. ✓
- **Imbalanced Decomposition:** Mild imbalance (P3, P5 slightly larger than others) — structurally appropriate, not a failure. ✓

---

## Final Deliverable

### 1. Coupling Map

7 clusters (A Aggregation Identity + Provenance Schema; B Aggregation Rule Logic; C Telemetry Aggregation; D Schema Extensions + Scope Hook; E Hierarchical Composition; F Phase Progression; G Artifact Location + Coherence) + 1 cross-cutting Inheritance Layer (Q5/Q6/24-00/18-58/02-00/24-01/06-00/24-40/14-39 inheritances).

### 2. Question Tree

8 pieces — P1 (inheritance), P2 (dedup + provenance), P3 (per-Family rules + dispatch + disagreement), P4 (telemetry roll-up), P5 (schema unification + scope hook + Q14 distinction), P6 (hierarchical composition), P7 (phase progression), P8 (location + coherence). Each with question + verification criteria (above).

### 3. Interface Map

12 interfaces enumerated in Step 5 with type (data / contract / rule / signal / prerequisite / activation-rule / meta-constraint) and direction (all one-way except P5 ↔ writers contract is back-edge). No hidden coupling.

### 4. Dependency Order

5 waves: Wave 1 P1; Wave 2 (P2 ∥ P3 ∥ P4 ∥ P6); Wave 3 P5; Wave 4 P7; Wave 5 P8. Within-wave parallelism with interface contracts exchanged up-front.

### 5. Self-Evaluation

- Minimum 3 dimensions: Independence ✓, Completeness ✓, Reassembly ✓.
- Determination-mechanism piece check: PASS (4 runtime determinations all addressed by P7 with deferral explicit where applicable).
- Full 7 dimensions: all PASS (one mild structural imbalance note on P3/P5 size, not a failure).
- Failure-mode check: 7/7 clean.

**Overall: PROCEED**
