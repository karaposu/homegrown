# Decomposition — Safety Substrate Measurement-Aware Design Problem

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_06-48__safety_substrate_measurement_aware_design/_branch.md

Input: sensemaking.md (co-design framing + 3-roles substrate + 6 components + 4 consumers + 3 paths α/β/γ + 4 commitments + 9 inherited-commitment re-test outcomes) + exploration.md.

Whole to decompose: the measurement-aware design problem. Sensemaking flagged candidate axes (per-path / per-component / per-consumer / per-commitment / per-re-test / meta-decision). Determine primary axis; commit question-tree (5-7 pieces).
```

---

## Whole to decompose

**The measurement-aware design problem:** which of the three viable design paths (α point-to-point / β mediated event log / γ hybrid) should be committed for the safety substrate, given Sensemaking's four structural commitments (contract clarity / consumer mapping / construction ordering / State-1 compatibility) and the substrate's 3-role decomposition (input-defining / infrastructure / operations)?

The deliverable Critique produces: a winning path + its concrete operational form + Inherited Commitments Re-test compiled. Innovation's role: elaborate each path with concrete per-component contracts + per-consumer dependencies + cost + commitment satisfaction. Decomposition partitions the elaboration work.

---

## Step 1 — Coupling Topology

### Element inventory (atoms)

- **3 design paths:** α (point-to-point) / β (mediated event log) / γ (hybrid).
- **6 substrate components** (3-roles decomposition): catalog (input-defining); snapshot (infrastructure); canary, annotation, pre-edit, structural-check (operations).
- **4 measurement consumers:** Q1b, Q4a, Q4b, Q4c.
- **4 structural commitments:** contract clarity / consumer mapping / construction ordering / State-1 compatibility.
- **2 inherited cross-cutting commitments:** substrate-honest naming + reliability acknowledgment + evolution constraint.
- **3 structural-check decision-tree branches:** ≥0.85 (Path A locked-in) / 0.65-0.85 (Path B built) / <0.65 (Hybrid B+C built).
- **9 inherited commitment re-test outcomes** from Sensemaking: 1 superseded / 2 revised / 4 survives / 1 corrected / 1 inherited-without-re-test.

### Coupling-propagation test

**Per-path coupling:**
- Within a path (α, β, or γ): tight coupling between the path's choice + per-component output contracts + per-consumer dependencies + cost profile + commitment-satisfaction. A path's elaboration produces a coherent design specification.
- Between paths: low coupling (alternatives; no data flow between them).

**Per-component coupling:**
- Within a component: tight coupling between the component's identity + its output contract (path-conditional) + its consumers.
- Between components: MODERATE coupling (the 5 interactions i1-i5 from exploration; especially canary→snapshot, pre-edit→catalog, structural-check↔Q4c).

**Per-consumer coupling:**
- Within a consumer (Q4a, Q4b, etc.): tight coupling between the Q's measurement target + its substrate dependency + its expected output form.
- Between consumers: low coupling (different Qs use different substrate subsets).

**Per-commitment coupling:**
- Within a commitment: HIGH coupling — one commitment (e.g., contract clarity) touches all paths, all components, all consumers. The work spans the decision space.
- Between commitments: low coupling (commitments are orthogonal evaluation axes).

**The natural primary cut is PER-PATH** because:
- It groups tightly coupled atoms (a path's elaboration is internally coherent).
- It separates loosely coupled alternatives (paths don't interact).
- It mirrors the prior structural-check inquiry's per-path cut, which produced a clean handoff to Critique.

Per-component and per-consumer become TRANSVERSE within each path-piece (each path's elaboration covers all components and all consumers, with path-specific output contracts).

Per-commitment becomes EVALUATION CRITERIA applied across paths (Critique uses them; not separate pieces).

Per-re-test work was done by Sensemaking; the outcomes flow to CONCLUDE via the finding's Inherited Commitments Re-test section.

### Coupling map (visual)

```
Sensemaking commits:
  3 viable design paths (α/β/γ)
  6 substrate components (3 roles)
  4 measurement consumers
  4 commitments + inherited cross-cutting
  3 State-1 branches
  9 inherited re-test outcomes
              │
              │ each path independently elaborate-able
              ▼
   ┌──────────┬──────────┬──────────┐
   │ P1 PATH  │ P2 PATH  │ P3 PATH  │
   │ α POINT- │ β MEDI-  │ γ HYBRID │
   │ TO-POINT │ ATED LOG │          │
   │          │          │          │
   │ each piece: full elaboration   │
   │ + per-component contracts      │
   │ + per-consumer dependencies    │
   │ + cost profile                 │
   │ + commitment satisfaction      │
   └─────┬────┴─────┬────┴─────┬────┘
         │          │          │
         ▼          ▼          ▼
   ┌─────────────────────────────────┐
   │ P4 CONSTRUCTION ORDERING        │
   │  Measurement-value-prioritized  │
   │  build order (mostly path-      │
   │  independent; uses path costs)  │
   └─────┬───────────────────────────┘
         │
   ┌─────▼───────────────────────────┐
   │ P5 STATE-1 BRANCH SPECIFICATION │
   │  Per-branch component-6 outputs │
   │  Compatible with Q4c regardless │
   │  of branch outcome              │
   └─────┬───────────────────────────┘
         │
   ┌─────▼───────────────────────────┐
   │ P6 META-DECISION SYNTHESIS      │
   │  Comparison tableau (3 paths    │
   │  × 4 commitments + cross-cut)   │
   │  Path recommendation handoff    │
   │  to Critique                    │
   └─────────────────────────────────┘

Transverse (within each P1-P3):
  - 6 substrate components' output contracts (path-specific)
  - 4 measurement consumers' dependencies (path-specific)
  - 4 commitments' satisfaction profile
  - Inherited cross-cutting (substrate-honest + reliability + evolution)
```

### Major clusters and boundaries

**Clusters (high coupling within):**
- A. Path α elaboration: point-to-point contracts + per-component-per-consumer mapping.
- B. Path β elaboration: event-log schema + per-component event shape + per-consumer filter.
- C. Path γ elaboration: hybrid composition + which components push vs which are point-to-point.
- D. Construction ordering: build-sequence + cost-prioritization.
- E. State-1 specification: per-branch component-6 outputs.
- F. Meta-decision: comparison + recommendation.

**Boundaries (low coupling between):**
1. Path α / β / γ — alternative designs; no inter-piece data flow.
2. Per-path elaborations / construction ordering — ordering uses path costs as inputs but doesn't change them.
3. Construction ordering / State-1 specification — State-1 is decision-tree-conditional; mostly orthogonal to general ordering.
4. All elaborations / meta-decision — meta-decision aggregates; no reverse flow.

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map: 6 pieces emerge naturally.

**Initial piece set (top-down):**
- P1. Path α — Point-to-point output contracts
- P2. Path β — Mediated event log
- P3. Path γ — Hybrid composition
- P4. Construction ordering
- P5. State-1 branch specification
- P6. Meta-decision synthesis

---

## Step 3 — Validate Boundaries (Bottom-Up)

Bottom-up: do the atoms cluster naturally into 6 pieces?

| Atom | Maps to piece |
|---|---|
| Path α's per-component point-to-point contracts | P1 |
| Path α's per-consumer point-to-point dependencies | P1 |
| Path α's cost profile (low integration cost; per-pair design overhead) | P1 |
| Path β's event-log schema (timestamp / component / event-type / target / severity / details) | P2 |
| Path β's per-component event-shape | P2 |
| Path β's per-consumer log-filter logic | P2 |
| Path β's cost profile (centralized schema; coupling via log format) | P2 |
| Path γ's hybrid composition rule (which components push to log; which are point-to-point) | P3 |
| Path γ's per-component-or-consumer routing | P3 |
| Path γ's cost profile (composition complexity) | P3 |
| Measurement-value ranking of the 6 components (which has highest value for what Q?) | P4 |
| Build order (which component first; gating on what evidence) | P4 |
| Per-branch component-6 output specification (Path A LLM-self-check / Path B universal-sentinel script / Hybrid B+C script+protocol) | P5 |
| Q4c consumption interface per State-1 branch | P5 |
| Comparison tableau across 3 paths × 4 commitments | P6 |
| Path recommendation + handoff packet for Critique | P6 |

All atoms cluster cleanly into the 6 pieces. **Bottom-up confirms.**

**Determination-mechanism check** (per Step 7 refinement): the choice among α/β/γ is a runtime determination (Critique selects the winning path; the user can override). P6 (meta-decision synthesis) is the explicit determination piece — it produces the comparison tableau that Critique consumes to make the runtime determination. **Check passes.**

**Confidence:** HIGH. Top-down (per-path + ordering + State-1 + synthesis) and bottom-up (atoms cluster into 6 groups) agree.

---

## Step 4 — Question Tree

### P1 — Path α: Point-to-point output contracts

**Question:** What is the concrete operational form of Path α — point-to-point output contracts where each substrate component emits a per-consumer output, with sparse mapping (one component → one or more consumers; no central log)?

**Verification criteria:**
- [ ] Specifies per-component output contracts: catalog 1 → Q1b/Q4a-Pattern-5/Q4c-Type-5; snapshot 2 → canary; canary 3 → Q4a; annotation 4 → Q4b; pre-edit 5 → Q4c; structural-check 6 → Q4c (conditional on State 1). Each contract states: format (prose vs structured), content fields, emission timing (push event vs pull artifact), consumer expectations.
- [ ] Names the contract's data shape minimally (e.g., canary contract: `[reference_path, current_path, qualitative_gap_statement, comparable_verdict]`). Schema-form not required at L0; prose form acceptable.
- [ ] Cost profile: per-pair design effort (~6 contracts × ~minutes each); ongoing maintenance ~zero for contracts that don't change.
- [ ] Commitment satisfaction:
  - Contract clarity: PASS (each contract is named per-pair).
  - Consumer mapping: PASS (one consumer per contract, mostly).
  - Construction ordering: passes through to P4.
  - State-1 compatibility: PASS-with-P5 (the structural-check contract is conditional; specified in P5).
- [ ] Substrate-honest naming preserved per inherited commitment.
- [ ] Reliability acknowledgment: per-component reliability noted where applicable (probabilistic mechanisms named).
- [ ] Evolution constraint: prose-form contracts at L0; schema-form upgrade path noted (not built now).

### P2 — Path β: Mediated event log

**Question:** What is the concrete operational form of Path β — all substrate components write to a unified event log; measurement consumers filter the log by their lens?

**Verification criteria:**
- [ ] Specifies the event-log file location (e.g., `devdocs/safety_event_log.md` or similar) + append-only convention.
- [ ] Defines the event-log schema. Suggested fields: `timestamp`, `component` (which substrate component emitted), `event_type` (e.g., `canary_re_run`, `pre_edit_warning`, `structural_check_verdict`, `spec_edit_annotation`), `target` (e.g., inquiry path, spec file, discipline output), `severity` (LOW / MEDIUM / HIGH / CRITICAL per regression catalog tags), `details` (free-form prose or structured per event-type).
- [ ] Per-component event-shape specifications (how each component writes to the log).
- [ ] Per-consumer filter logic (e.g., Q4a filters for `event_type == canary_re_run`; Q4b filters for `event_type == spec_edit_annotation`; Q4c filters for `event_type IN (pre_edit_warning, structural_check_verdict)`).
- [ ] Cost profile: schema design upfront (~hours); per-component event-emission wiring (~hours per component); ongoing maintenance ~zero for schema unless event_types proliferate.
- [ ] Commitment satisfaction:
  - Contract clarity: PASS (the log schema is the contract; consumers read the schema not per-pair contracts).
  - Consumer mapping: PASS (consumers map via log filters, not per-pair).
  - Construction ordering: passes through to P4.
  - State-1 compatibility: PASS-with-P5 (structural-check writes `structural_check_verdict` events; Q4c filters; per-branch verdict shape specified in P5).
- [ ] Substrate-honest: the log captures push events; pull artifacts (snapshot mechanism) are NOT logged but referenced by event records.
- [ ] Reliability acknowledgment: applies to any log-emitting component with probabilistic mechanism.
- [ ] Evolution constraint: prose `details` field at L0 evolves to structured per-event-type fields when warranted.

### P3 — Path γ: Hybrid composition

**Question:** What is the concrete operational form of Path γ — hybrid composition with point-to-point for high-cardinality flows AND event log for cross-component coordination?

**Verification criteria:**
- [ ] Specifies the COMPOSITION RULE: which components push to the log (low-cardinality cross-component events) vs which are point-to-point (high-cardinality per-consumer flows).
- [ ] Candidate composition: high-cardinality point-to-point → canary→Q4a, pre-edit→Q4c, snapshot→canary (internal); low-cardinality event log → catalog-update events, structural-check decision-tree-branch changes, annotation-convention adoptions, canary-baseline establishment events.
- [ ] Cost profile: design overhead (both point-to-point contracts AND log schema); medium-high effort to specify the split rule clearly.
- [ ] Commitment satisfaction:
  - Contract clarity: PASS (per-pair contracts + log schema; both named).
  - Consumer mapping: PASS (consumers know which mechanism they use per dependency).
  - Construction ordering: passes through to P4.
  - State-1 compatibility: PASS-with-P5 (structural-check is event-log; Q4c filters).
- [ ] Substrate-honest: each mechanism's mechanism named accurately.
- [ ] Reliability acknowledgment: applies where applicable.
- [ ] Evolution constraint: composition rule itself evolves as new cross-component patterns emerge.

### P4 — Construction ordering

**Question:** Given the measurement-value-prioritized construction principle (commitment 3), in what order should the 6 substrate components be built, and what evidence triggers each next step?

**Verification criteria:**
- [ ] Ranks the 6 components by (a) measurement value (how many Qs depend on this component; how high-value those Qs are); (b) build cost; (c) prerequisite dependencies (canary requires snapshot; structural-check requires the prior inquiry's State-1 outcome).
- [ ] Commits a build sequence with evidence-gates per transition. E.g., suggested: catalog (already specified; no build) → snapshot (already operational; expand snapshot count when triggered) → annotation convention (low cost; enables Q4b structured) → canary (medium cost; first canary per discipline; enables Q4a full) → pre-edit check (medium cost; enables Q4c partial) → structural-check (decision-tree-conditional per P5).
- [ ] Mostly path-independent: the components are the same set across α/β/γ; only their output contracts differ. The build sequence is structural.
- [ ] Each transition: time-bound / condition-bound / observable trigger per spec_governance gate-specificity rule.

### P5 — State-1 branch specification

**Question:** For each of the structural-check decision tree's three State-1 branches (≥0.85 / 0.65–0.85 / <0.65), what is the specific output that component 6 emits to Q4c, and how does each path (α/β/γ) carry that output?

**Verification criteria:**
- [ ] Specifies component 6's output per branch:
  - **≥0.85 (Path A locked-in):** component 6's "output" is the LLM-self-check's `_state.md` record (Structural check: [PASS]...). Q4c reads `_state.md`.
  - **0.65-0.85 (Path B built):** component 6 emits the bash script's `[PASS]` or `[FAIL: missing-elements]` output. Q4c reads the script's exit + stdout.
  - **<0.65 (Hybrid B+C built):** component 6 emits both the script output AND the protocol-driven LLM-self-check output. Q4c reads both.
- [ ] Specifies how each design path (α/β/γ) carries the State-1 output:
  - Path α: point-to-point — component 6 → Q4c directly per branch's mechanism.
  - Path β: log-mediated — component 6 writes `structural_check_verdict` events to the log; Q4c filters.
  - Path γ: hybrid — same as β (structural-check is treated as event-log-mediated under γ).
- [ ] Q4c's interface per branch is consistent across paths in terms of WHAT it reads, even if WHERE differs.

### P6 — Meta-decision synthesis

**Question:** Given the three path elaborations (P1, P2, P3), the construction ordering (P4), and the State-1 branch specification (P5), how do the three paths compare against the 4 structural commitments + inherited cross-cutting (substrate-honest + reliability ack + evolution), and what handoff packet does Critique need to pick the winner?

**Verification criteria:**
- [ ] Produces a 3×4 (or 3×7 with cross-cutting) comparison tableau: rows = paths α/β/γ; columns = commitments + cross-cutting. Each cell: PASS / PARTIAL / FAIL and reasoning.
- [ ] Identifies pareto-dominated paths (if any).
- [ ] Names trade-offs explicit: where each path's advantage comes at another path's expense.
- [ ] Identifies emergent hybrids worth Critique evaluating (e.g., γ is already a hybrid; α+canary-log might be another).
- [ ] Highlights how the choice interacts with the construction ordering (P4) and State-1 specs (P5).
- [ ] Prepares input for Critique's Phase 0: which dimensions Critique should construct; which prosecution-scenarios are most load-bearing per path.

---

## Step 5 — Interface Map

| # | Source | Target | What flows | Direction | Notes |
|---|---|---|---|---|---|
| I1 | Sensemaking SV6 | P1, P2, P3, P4, P5, P6 | 4 commitments + 6 components + 4 consumers + 9 re-test outcomes | one-way | All pieces read sensemaking. |
| I2 | Exploration (output contracts + interactions + empirical state) | P1, P2, P3, P4 | Substrate data: which contracts plausible; which interactions to preserve; what's operational vs not | one-way | Each path-piece + ordering uses exploration's enumeration. |
| I3 | Structural-check finding decision tree | P5 | Per-branch component-6 outcomes | one-way | P5 specifies how the design carries each branch's output to Q4c. |
| I4 | P1, P2, P3 | P4 | Per-path cost profiles | one-way | P4's ordering uses per-path costs as inputs. |
| I5 | P1, P2, P3, P4, P5 | P6 | Concrete elaborations + ordering + State-1 specs | one-way | P6 aggregates for synthesis. |
| I6 | P6 | Critique (next discipline) | Comparison tableau + path recommendation + Critique handoff packet | one-way | P6 is Critique's Phase 0 + Phase 1 raw material. |

**Hidden coupling check (assumptions-not-data):**

- *P1, P2, P3 each assume* the 6-component identity is fixed (per sensemaking). Captured.
- *P1 specifically assumes* per-pair contracts can be specified without coupling (sparse mapping). Reasonable per sensemaking's "sparse" finding. Captured.
- *P2 specifically assumes* the event-log file location is reachable from all components (a single file all components can write to). Reasonable for a markdown-based system. Captured.
- *P3 specifically assumes* the composition rule can be cleanly stated (which components push to log; which are point-to-point). The rule itself is a design choice; specifying it concretely is part of P3. Captured.
- *P4 assumes* measurement-value can be ranked. The ranking is a heuristic — depends on how the user/project weights different Qs. Captured for Innovation to commit a specific ranking.
- *P5 assumes* the structural-check decision-tree's 3 branches remain stable (no new branches introduced). Inherited from prior inquiry; reasonable. Captured.
- *P6 assumes* Critique will apply the 4 commitments + inherited cross-cutting as dimensions. Reasonable per Critique's Phase 0 design. Captured.

All 7 assumptions surfaced; either verified (captured) or surfaced for Innovation to commit.

---

## Step 6 — Dependency Order

```
Tier 1 (parallel; no internal dependencies):
  ● P1. Path α (point-to-point) — full elaboration
  ● P2. Path β (mediated event log) — full elaboration
  ● P3. Path γ (hybrid) — full elaboration
  ● P5. State-1 branch specification (mostly path-orthogonal — specifies per-branch component-6 output regardless of path)

Tier 2 (depends on Tier 1):
  ● P4. Construction ordering (uses per-path cost profiles from P1-P3)

Tier 3 (depends on Tier 1+2):
  ● P6. Meta-decision synthesis (aggregates P1-P5)
```

**Reasoning:**
- *Tier 1:* path elaborations and State-1 spec can run in parallel. Each path is independent of the others; State-1 is mostly orthogonal to path choice (it specifies what each branch's component-6 emits regardless of path's transport mechanism).
- *Tier 2:* construction ordering needs per-path cost profiles to inform the build order — depends on P1-P3.
- *Tier 3:* meta-decision aggregates everything below for Critique.

**No circular dependencies.**

**Parallel work opportunities for Innovation:** P1, P2, P3, P5 in parallel.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Each piece workable in isolation? | **PASS.** P1, P2, P3 are alternative path elaborations (no inter-piece data flow). P5 mostly orthogonal. P4 has defined T1 dependency. P6 aggregates. |
| **Completeness** | Pieces cover the whole? | **PASS.** 3 paths × elaboration + ordering + State-1 + synthesis covers the decision-making problem. Inherited Commitments Re-test work flows from Sensemaking through CONCLUDE. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS.** Given each path's elaboration + ordering + State-1 + meta-decision tableau, Critique can apply commitments as dimensions and select a winning path with reasoning. |

### Full 7 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| Independence | (see above) | PASS |
| Completeness | (see above) | PASS |
| Reassembly | (see above) | PASS |
| **Tractability** | Each piece single focused pass? | **PASS.** Each path-piece specifies a single design alternative; P4/P5/P6 each have a focused scope. |
| **Interface clarity** | All cross-piece flows explicit? Hidden dependencies surfaced? | **PASS.** 6 interfaces enumerated; 7 assumptions captured. |
| **Balance** | Complexity proportional? | **PASS-WITH-NOTE.** P1-P3 are heaviest (full path elaborations with per-component contracts + per-consumer mappings + cost + commitments). P5 is medium. P4 is light-medium. P6 is integrative. Slight imbalance toward path-pieces but proportional to the problem's nature. |
| **Confidence** | Top-down + bottom-up agree? | **PASS (HIGH).** Both passes produce same 6-piece structure. |

### Failure mode check

- **Premature Decomposition:** NO — sensemaking clarified first.
- **Wrong Boundaries:** NO — per-path cut groups tightly coupled per-path atoms.
- **Hidden Coupling:** NO — 7 assumptions captured via assumptions-not-data check.
- **Missing Pieces:** NO — determination-mechanism check passed (P6 is the meta-decision); Inherited Commitments Re-test compiled in CONCLUDE from Sensemaking's outcomes.
- **Over-Decomposition:** NO — 6 pieces right-sized for the 3-path + ordering + State-1 + synthesis problem.
- **Ignoring Dependencies:** NO — 3-tier dependency order explicit.
- **Imbalanced Decomposition:** NO — proportional.

---

## Self-Assessment

**Overall: PROCEED** (all 7 dimensions PASS; all 7 failure modes clean; coupling map + 6-piece question tree + 6 interfaces with assumptions check + 3-tier dependency order + reassembly verified).

**Handoff to Innovation:**

- **P1 Path α (point-to-point):** generate per-component contract specs (6 contracts) + per-consumer dependency map.
- **P2 Path β (mediated event log):** generate the event-log schema + per-component event shape + per-consumer filter logic.
- **P3 Path γ (hybrid):** generate the composition rule + per-component routing.
- **P4 Construction ordering:** generate the build sequence with evidence-gated transitions.
- **P5 State-1 branch specification:** generate per-branch component-6 outputs + per-path carry mechanism.
- **P6 Meta-decision synthesis:** generate the comparison tableau + dominance/trade-off analysis + Critique handoff packet.

Innovation should apply mechanisms WHERE THEY'RE RELEVANT (this is elaboration, not pure ideation). Combination/Domain-Transfer for schema design; Absence Recognition for catching omitted contracts; Constraint Manipulation for the composition rule in γ; Lens Shifting for the synthesis perspective.

**Handoff to Critique:**

The 6-piece structure + the 4 structural commitments + inherited cross-cutting + Sensemaking's 9 re-test outcomes give Critique scaffolding for Phase 0 (commitments as dimensions) → Phase 1 (landscape with paths positioned per commitment-satisfaction) → Phase 2 (adversarial per path with prosecution emphasizing the hidden assumptions surfaced here) → Phase 3 (SURVIVE/REFINE/KILL per path) → Phase 3.5 (assembly check on hybrids) → Phase 4 (coverage + convergence; signal TERMINATE with ranked survivors).
