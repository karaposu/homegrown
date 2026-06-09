# Decomposition: Articulate_simple Process-Layer Design

## User Input

The input is the inquiry's `_branch.md` + Surfacing's 154-item output + Sensemaking's HYBRID-of-13-section verdict. The whole-to-decompose is the FINDING-LEVEL pieces the inquiry must answer to produce the verdict (not the spec doc's internal structure, which is itself a sub-question).

---

## Step 1 — Perceive Coupling Topology

### Elements of the whole (finding deliverables + supporting sub-questions)

- E1 — Verdict statement (HYBRID-of-13-section process spec at `devdocs/how_articulate_simple_process_should_be.md`)
- E2 — Rationale supporting the verdict (why HYBRID; why Option A; why 04-07-48 STANDS; why 7 edges; etc.)
- E3 — Supporting actions (Next Actions: COULDs + DEFERREDs)
- E4 — Process spec contents (13 sections of the new doc)
- E5 — Inherited commitments re-test (per 11 priors)
- E6 — New commitments / changes (what's NEW relative to current state)
- E7 — Cascade acknowledgments + Open Questions (per 12-22 cascade-acknowledgment pattern)
- E8 — Artifact-shape decision + supporting structure (Option A + how Option A integrates with §9)

### Sub-elements within E4 (process spec contents — 12 sub-pieces matching 13 spec sections; §13 inheritance map merged with E5 cross-reference)

- E4.1 — Identity / Purpose / Scope (§1 of spec)
- E4.2 — Foundational constraints (§2 of spec — §6 + §9 + asymmetric-failure + 04-07-48 inheritance)
- E4.3 — Runtime stages overview + per-stage procedure (§3-§4 of spec — 4 stages; per-operation procedure)
- E4.4 — Deterministic gates (§5 of spec — entry/exit + end-of-invocation)
- E4.5 — LLM-judgment edges (§6 of spec — 7 named; per-edge declarative procedure)
- E4.6 — LAYER 1 mode self-check (§7 of spec — 9 modes; per-mode procedure)
- E4.7 — Confidence assignment (§8 of spec — HIGH/MED/LOW; Primary + Secondary)
- E4.8 — Bundle assembly mechanics (§9 of spec)
- E4.9 — Interfaces (§10 of spec — runner + /surfacing + downstream)
- E4.10 — Recovery mechanisms (§11 of spec — discipline-signal level)
- E4.11 — Relationship boundary (§12 of spec — with meaning-layer + runner-side specs)
- E4.12 — Inheritance map (§13 of spec — 11 priors)

### Coupling map

**Top-level couplings (between E1-E8):**

| Pair | Coupling | Reason |
|---|---|---|
| E1 ↔ E2 | MODERATE | Rationale supports verdict; verdict implies rationale exists |
| E1 ↔ E4 | STRONG | Verdict's content IS E4; verdict declares what E4 specifies |
| E2 ↔ E5 | MODERATE | Rationale draws on inheritance re-test |
| E3 ↔ E8 | MODERATE | Artifact-shape decision drives supporting actions |
| E4 ↔ E6 | MODERATE | New commitments are subsets of spec contents |
| E5 ↔ E6 | WEAK | New commitments emerge after inheritance re-test informs what stands |
| E5 ↔ E7 | MODERATE | Inheritance re-test surfaces cascade-pressure acknowledgment |
| E6 ↔ E7 | MODERATE | New commitments include cascade-era additions → cascade ack |
| All other pairs | WEAK | Mostly independent |

**Within-E4 couplings (between E4.1-E4.12):**

| Pair | Coupling | Reason |
|---|---|---|
| E4.2 → E4.1 | STRONG | Foundational constraints define scope; constraints precede identity statement |
| E4.4 → E4.3 | STRONG | Deterministic gates frame the runtime stages |
| E4.5 → E4.3 | STRONG | LLM-judgment edges fire within stage operations |
| E4.6 → E4.7 | STRONG | LAYER 1 modes feed confidence Primary tally |
| E4.6 → E4.3 | STRONG | LAYER 1 modes apply to specific stages/operations |
| E4.8 → E4.9 | STRONG | Bundle structure IS the interface contract |
| E4.10 → E4.9 | MODERATE | Recovery mechanisms route through runner interface |
| E4.12 → E5 | STRONG (cross-piece) | Inheritance map IS the spec-level record of E5's inheritance re-test |

### Coupling clusters identified

- **Cluster A (Spec contents)** — E4.1-E4.12; high internal coupling (constraints → stages → gates → edges → modes → confidence → bundle → interfaces → recovery → boundary → inheritance)
- **Cluster B (Verdict + Rationale)** — E1, E2; tight verdict-rationale coupling
- **Cluster C (Inheritance + Cascade Ack)** — E5, E6, E7; cumulative cascade pressure trace
- **Cluster D (Artifact-shape + Actions)** — E3, E8; what-to-do downstream from verdict

### Coupling valleys (boundary candidates)

- Valley 1: E1/E2 ↔ E4 (verdict statement vs spec details) — distinct ask; weak coupling once spec exists
- Valley 2: E5 ↔ E6 (inheritance re-test vs new commitments) — distinct ask
- Valley 3: E3 ↔ E8 (supporting actions vs artifact-shape decision) — minimal overlap; both surface in same area
- Valley 4: Inter-E4 sub-pieces — each describable independently with clear interfaces

---

## Step 2 — Detect Boundaries (Top-Down)

### Initial boundary set (8 principal pieces + 12 E4 sub-pieces)

Principal pieces:
- **Q1.1** — What is the verdict?
- **Q1.2** — What is the rationale?
- **Q1.3** — What supporting actions (Next Actions)?
- **Q1.4** — What does the process spec contain? [SUB-DECOMPOSED]
- **Q1.5** — What inherited commitments stand / refine?
- **Q1.6** — What new commitments / changes are introduced?
- **Q1.7** — What cascade acknowledgments + Open Questions?
- **Q1.8** — What is the artifact-shape decision + supporting structure?

E4 sub-pieces:
- **Q1.4.1-Q1.4.12** — mapped to spec sections 1-13 (§13 inheritance map cross-references Q1.5)

Boundary count: 20 leaves (8 principal + 12 sub-pieces).

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Irreducible atoms

- HYBRID-of-13-section verdict (atomic)
- Option A artifact-shape decision (atomic)
- §6 + §9 + 04-07-48 + asymmetric-failure (4 foundational atoms)
- 7 LLM-judgment edges (each atomic)
- 9 LAYER 1 modes (each atomic)
- 4 stage entry/exit gates + end-of-invocation gate (5 atomic gates)
- 5 operations + MQA (each atomic procedure)
- 11 priors (each atomic re-test)
- 3 cascade-era LAYER 1 mode additions (each atomic)
- HYBRID style (declarative + imperative; atomic)
- layered-IA PARTIAL pattern transfer test (atomic)
- Discipline-level vs runner-level distinction (atomic)
- Cumulative cascade pressure acknowledgment (atomic)

### Bottom-up grouping check

- {7 edges, 9 modes, 5 gates, 6 operation procedures, asymmetric-failure, HYBRID style, discipline-level distinction} → spec contents (matches Q1.4 ✓)
- {§6, §9, 04-07-48, asymmetric-failure} → foundational constraints (matches Q1.4.2 ✓)
- {11 priors, cascade refinements re-tests} → inheritance re-test (matches Q1.5 ✓)
- {3 cascade-era LAYER 1 additions, 7 edges naming, HYBRID style, asymmetric-failure elevation, Option A artifact-shape, discipline-level distinction, layered-IA test, cumulative cascade pressure acknowledgment} → new commitments (matches Q1.6 ✓)
- {cumulative cascade pressure, Cascade B deferred, pattern transferability tests, broader pattern Research Frontier} → cascade acknowledgments + Open Questions (matches Q1.7 ✓)
- {Option A, supporting actions, see-also reference} → artifact-shape + supporting actions (matches Q1.3 + Q1.8 ✓)

### Top-down + bottom-up agreement

**HIGH confidence** — top-down and bottom-up AGREE on the 8 principal piece decomposition + 12 Q1.4 sub-pieces.

No atoms are split across boundaries (all atoms fit cleanly within one piece). No boundaries group atoms that are actually independent.

---

## Step 4 — Express as Question Tree

### Q1 — How should the process-layer specification for articulate_simple be designed?

#### Q1.1 — What is the verdict?
- **Verification criteria**:
  - [ ] One-sentence verdict statement (HYBRID-of-13-section process spec at `devdocs/how_articulate_simple_process_should_be.md`)
  - [ ] Style commitment (HYBRID: declarative for LLM-judgment edges + imperative for deterministic gates)
  - [ ] Edge count (7) + mode count (9) named
  - [ ] Foundation commitment (04-07-48 STANDS; cascade extends)
  - [ ] Meta-rule commitment (asymmetric-failure principle at LLM-judgment edges)
  - [ ] Pattern test commitment (layered-IA PARTIAL transfer test)

#### Q1.2 — What is the rationale for the verdict?
- **Verification criteria**:
  - [ ] Why HYBRID over pure imperative (§6 prohibits enforcement code; pure imperative violates)
  - [ ] Why Option A over D / E / B-primary (§9 routes runner-specific to runner specs; Option A is COMPLEMENTARY skeleton; D violates §9; E over-fragments; B-primary leaves discipline-level skeleton absent)
  - [ ] Why 04-07-48 STANDS (3-phase runtime + per-operation firing-format + LAYER 1/LAYER 2 framework preserved; cascade extends without replacing)
  - [ ] Why 7 LLM-judgment edges (§6 names 3 + cascade adds 4 = 7; per §6 explicit "and similar LLM-judgment points" clause)
  - [ ] Why 9 LAYER 1 modes (6 foundational + 3 cascade-era: 2-shape violation, AMBIGUITY-NATURE conflation, multi-source composition drift)
  - [ ] Why asymmetric-failure elevated to META-RULE (cumulative use across 21-52 + 11-40 + 23-18 + foundational; not 2-shape-specific)
  - [ ] Why discipline-level vs runner-level distinction explicit (§9 routes runner-specific; discipline-level skeleton fills the gap)
  - [ ] Why cumulative cascade pressure named honestly (per 12-22 cascade-acknowledgment-at-cumulative-pressure pattern)

#### Q1.3 — What supporting actions (Next Actions)?
- **Verification criteria**:
  - [ ] COULD: create `devdocs/how_articulate_simple_process_should_be.md` per the spec contents (Q1.4)
  - [ ] COULD: add one-line "see also" reference in meaning-layer doc's §9 pointing to the new process spec doc
  - [ ] COULD: apply layered-IA PARTIAL pattern test elements (TOC, sections, per-operation procedures, sub-section divides) at writing time
  - [ ] DEFERRED: Cascade B — two-pass-as-discipline-identity design (from 12-22; remains deferred per cascade-acknowledgment-without-pre-decision)
  - [ ] DEFERRED: broader process-layer-design-for-discipline-explainer-disciplines pattern (Research Frontier; not pre-decided)
  - [ ] DEFERRED-revival: layered-IA-for-spec-docs transferability test result (sample-size 2 after this inquiry; sample-size 3+ for meta-pattern promotion)
  - [ ] DEFERRED-revival: hybrid-declarative-imperative-process-spec pattern transferability (sample-size 1 candidate)

#### Q1.4 — What does the process spec contain? [SUB-DECOMPOSED into Q1.4.1-Q1.4.12]

##### Q1.4.1 — Identity / Purpose / Scope?
- **Verification criteria**:
  - [ ] Statement: this doc IS the process-layer specification for articulate_simple
  - [ ] Statement: complements meaning-layer doc `devdocs/how_articulate_simple_should_be.md` (sibling, not embedded)
  - [ ] Statement: respects §6 (no runtime enforcement code) + §9 (process-layer out of meaning-layer doc)
  - [ ] Statement: DISCIPLINE-LEVEL skeleton; runner-side specs flesh out per-runner mechanisms per §9
  - [ ] Statement: scope = articulate_simple specifically (not broader pattern)

##### Q1.4.2 — Foundational constraints?
- **Verification criteria**:
  - [ ] §6 lightweight stance HARD constraint named + 6 criteria preserved
  - [ ] §9 OUT-OF-SCOPE commitment named (process-layer routed out of meaning-layer doc; runner-side specs hold mechanism)
  - [ ] 04-07-48 inheritance: 3-phase runtime + per-operation firing-format + LAYER 1/LAYER 2 framework PRESERVED
  - [ ] Asymmetric-failure principle META-RULE at LLM-judgment edges (bias toward identified-ambiguities; bias toward keep-together; bias toward FLAG when uncertain)
  - [ ] §1 NOT-list rule 3 ("No adjudication") preserved at process layer

##### Q1.4.3 — Runtime stages overview + per-stage procedure?
- **Verification criteria**:
  - [ ] 4-stage acyclic per-item flow described (Itemize statement-level once → Meta-question + MQA per-item → Deconstruct + MultiDepth per-item independent → Rephrase per-item last)
  - [ ] Per-operation runtime procedure for: Itemize, Meta-question, MQA, Deconstruct, MultiDepth, Rephrase
  - [ ] For each operation: inputs, runtime procedure, outputs, LLM-judgment + deterministic mix
  - [ ] Iteration structure: Stage 1 fires once; Stages 2-4 fire per item N times
  - [ ] No in-invocation iteration (4-stage per-item flow is acyclic)

##### Q1.4.4 — Deterministic gates?
- **Verification criteria**:
  - [ ] Stage 1 entry: invocation starts; statement received
  - [ ] Stage 1 exit: Itemize emitted; per-item iteration begins
  - [ ] Stage 2 entry: per-item; item text received from Itemize
  - [ ] Stage 2 exit: MQA emitted; raw MQ identifications + reconciliation-content available
  - [ ] Stage 3 entry: post-Stage 2; same item
  - [ ] Stage 3 exit: Deconstruct + MultiDepth both emitted
  - [ ] Stage 4 entry: post-Stage 3; same item; multi-source composition formed
  - [ ] Stage 4 exit: Rephrase variant-set emitted; item bundle complete
  - [ ] End-of-invocation gate: bundle assembly + self-assessment run
  - [ ] Style: IMPERATIVE for these gates (control flow)

##### Q1.4.5 — LLM-judgment edges (7)?
- **Verification criteria**:
  - [ ] Edge 1 — Cold-context detection (declarative procedure)
  - [ ] Edge 2 — Intrinsic-vs-extrinsic exclusion-ambiguity routing (declarative procedure)
  - [ ] Edge 3 — MQA reconcile-vs-surface threshold (declarative procedure)
  - [ ] Edge 4 — 2-shape determination — identified-ambiguities-list vs explicit-empty (declarative procedure + asymmetric-failure bias)
  - [ ] Edge 5 — AMBIGUITY-NATURE operationalization — WHY vs WHAT axis (declarative procedure)
  - [ ] Edge 6 — Multi-source composition runtime enforcement for Rephrase (declarative procedure; 4 source-bounds via LLM-judgment)
  - [ ] Edge 7 — Variant count determination — typical 2-6 (declarative procedure + floor=2 hard)
  - [ ] First-use mapping note: "LLM-judgment edge" = §6 "judgment-call edges" + "LLM-judgment points" combined
  - [ ] Style: DECLARATIVE for each edge (LLM-judgment latitude per §6)

##### Q1.4.6 — LAYER 1 mode self-check (9 modes)?
- **Verification criteria**:
  - [ ] Mode 1 — premature Itemize split (foundational from 04-07-48 + doc §7)
  - [ ] Mode 2 — late-detected multi-item case (foundational)
  - [ ] Mode 3 — MQ extension violates bounded-extensibility (foundational)
  - [ ] Mode 4 — per-operation firing missed (foundational)
  - [ ] Mode 5 — MQ2 answer missing preparation content (14-14 mode 6 finding)
  - [ ] Mode 6 — MQ2 identified-ambiguities-list missing kinds-axis or stance-axis (foundational; doc §7)
  - [ ] Mode 7 — [CASCADE-ERA] 2-shape violation (commitment emitted instead of identified-ambiguities at any MQ or MultiDepth; 21-52 + 18-21)
  - [ ] Mode 8 — [CASCADE-ERA] AMBIGUITY-NATURE conflation (WHY at MQ3 OR WHAT at MultiDepth; 23-18)
  - [ ] Mode 9 — [CASCADE-ERA] Rephrase variant-set drifts outside multi-source composition bounds (already in doc §7; re-confirmed; 11-40)
  - [ ] Per-mode procedure: declarative LLM-judgment per mode at end-of-invocation; binary fire/not-fire
  - [ ] Constraint: self-check is LIGHT pass (one LLM judgment per mode; binary result; §6 criterion 4 preserved)

##### Q1.4.7 — Confidence assignment?
- **Verification criteria**:
  - [ ] HIGH/MED/LOW values
  - [ ] Primary discriminator (objective): count LAYER 1 mode boundaries approached from self-check + how close
  - [ ] Secondary discriminator (subjective): per-operation friction LLM perceived
  - [ ] Per-verdict pairings: HIGH-PROCEED / MED-FLAG / LOW-RE-RUN / LOW-PROCEED / HIGH-FLAG
  - [ ] Style: DECLARATIVE (LLM-judgment per 17-46)

##### Q1.4.8 — Bundle assembly mechanics?
- **Verification criteria**:
  - [ ] Per-item bundle contents enumerated: item text + MQ entries (each Q-mandatory + 2-shape answer) + Deconstruct tuple + MultiDepth two outputs + Rephrasings
  - [ ] Statement-level fields: Itemize count + per-item identifiers + self-assessment verdict + confidence
  - [ ] Assembly procedure declarative: each operation's output integrates as it emits
  - [ ] Field naming routed to structural-layer (process-layer specifies WHICH fields exist, not exact names)
  - [ ] Bundle emission interface: serialized structure (JSON/YAML/markdown per structural-layer)
  - [ ] Bundle integrity check: per LAYER 1 mode 4 (per-operation firing missed) — if a field absent, mode fires

##### Q1.4.9 — Interfaces (runner + /surfacing + downstream)?
- **Verification criteria**:
  - [ ] Runner consumer pattern: Itemize count → spawn decision; MQ2 + MQ4 → /surfacing input; verdict + confidence → re-invocation decisions; identified-ambiguities → user verification
  - [ ] /surfacing input contract: purpose + territory + bias (per /surfacing spec)
  - [ ] Downstream loop disciplines consumer pattern: bundle as inherited context; MQ4 exclusions → territory specs; identified-ambiguities → problem framing
  - [ ] User consumer pattern: scannable framing artifact (§6 criterion 6)
  - [ ] Contract preservation: each consumer reads bundle by stable field name; bundle structure is the contract (structural-layer)

##### Q1.4.10 — Recovery mechanisms (discipline-signal level)?
- **Verification criteria**:
  - [ ] Late-split signals enumerated: Deconstruct multi-tuple internal structure; MQ2 multi-axis ambiguity; user verification catch; downstream-discipline catch
  - [ ] Discipline-spec vs runner-spec boundary: discipline describes SIGNALS; runner describes DETECTION MECHANISMS + RE-INVOCATION PROCEDURES per §9
  - [ ] In-articulate_simple re-invocation modes: limited to late-split re-fire + statement-level re-fire (full re-invocation on whole bundle)
  - [ ] No in-invocation iteration (per §3 acyclic flow)
  - [ ] Self-assessment RE-RUN verdict triggers full re-invocation (runner choice; not partial)
  - [ ] OUT OF SCOPE: two-pass-form re-invocation modes (e.g., "context-informed-refinement"; routed to Cascade B's articulate2 design)

##### Q1.4.11 — Relationship boundary (with meaning-layer + runner-side specs)?
- **Verification criteria**:
  - [ ] Process spec is COMPLEMENTARY to meaning-layer doc (not embedded; respects §9)
  - [ ] Process spec is SKELETON; runner-side specs FLESH OUT per-runner specifics (per §9 routing)
  - [ ] Discipline-level vs runner-level distinction made explicit
  - [ ] One-line "see also" reference added in meaning-layer doc's §9

##### Q1.4.12 — Inheritance map?
- **Verification criteria**:
  - [ ] 11 priors enumerated with one-line description per
  - [ ] Foundational vs cascade-era division (sub-headers à la 13-30 §11 pattern)
  - [ ] 04-07-48 STANDS as foundation (named explicitly)
  - [ ] Cascade refinements named (21-52 + 23-18 + 11-40 + 12-22) with what each extends in the process spec
  - [ ] Cross-reference to Q1.5 inheritance re-test for STAND/REFINE verdicts

#### Q1.5 — What inherited commitments stand / refine? [INHERITANCE RE-TEST]
- **Verification criteria** (per 11 priors):
  - [ ] 04-07-48 (foundational process-layer): STANDS — 3-phase runtime + per-operation firing-format + LAYER 1/LAYER 2 framework preserved + extended
  - [ ] 14-14 (mode 6): STANDS — MQ2 missing preparation content detection preserved (now mode 5 in 9-mode set)
  - [ ] 17-46 (confidence rubric): STANDS — HIGH/MED/LOW + Primary + Secondary discriminators preserved
  - [ ] 21-58 (MQ2 dispatch + preparation substrate + always-invoke): STANDS — MQ2 reading by runner for /surfacing dispatch preserved
  - [ ] 21-52 (MQ 2-shape + substrate-bounded chain + cascade-acknowledgment-without-pre-decision): STANDS — 2-shape determination as LLM-judgment edge; cascade-acknowledgment pattern continues
  - [ ] 23-18 (MultiDepth literal + identified-purpose-motivation-ambiguities + AMBIGUITY-NATURE distinction): STANDS — AMBIGUITY-NATURE operationalization as LLM-judgment edge
  - [ ] 11-40 (Rephrase multi-source composition + variant-set + 2-6 count): STANDS — multi-source composition runtime enforcement as LLM-judgment edge; variant count determination as LLM-judgment edge
  - [ ] 12-22 (pre-context phase + §9 refinement + scope-completeness-recasting + cascade-acknowledgment-at-cumulative-pressure): STANDS — §9 OUT-OF-SCOPE routing preserved; cumulative cascade pressure named honestly
  - [ ] 18-21 (three-layer ANCHOR/ENVELOPE/CORE model + empty-as-content principle): STANDS — empty-as-content drives 2-shape determination; three-layer model APPLY-NO to process spec doc (preserve from 13-30)
  - [ ] 13-30 (structural-layer redesign + layered-IA-for-spec-docs pattern): STANDS — meaning-layer doc structural organization preserved; layered-IA pattern APPLIES-PARTIAL to process spec doc (sample-size 2 transfer test)
  - [ ] Meaning-layer doc (current state after 13-30 + 4 cascade rewrites): STANDS as foundation; preserved

#### Q1.6 — What new commitments / changes are introduced?
- **Verification criteria**:
  - [ ] (a) Artifact-shape: Option A — NEW sibling doc `devdocs/how_articulate_simple_process_should_be.md`
  - [ ] (b) 7 LLM-judgment edges named (3 from §6 + 4 from cascade)
  - [ ] (c) 3 cascade-era LAYER 1 modes (2-shape violation + AMBIGUITY-NATURE conflation + multi-source composition drift — third overlaps doc §7)
  - [ ] (d) Asymmetric-failure principle elevated to META-RULE (was 2-shape-specific in 21-52)
  - [ ] (e) HYBRID spec style commitment (declarative for LLM-judgment edges + imperative for deterministic gates)
  - [ ] (f) Discipline-level vs runner-level distinction made explicit (was implicit in §9)
  - [ ] (g) layered-IA PARTIAL pattern transfer test attempted at process spec doc (sample-size 2)
  - [ ] (h) Cumulative cascade pressure acknowledged honestly (6 touches per 12-22 cascade-acknowledgment-at-cumulative-pressure pattern)

#### Q1.7 — What cascade acknowledgments + Open Questions?
- **Verification criteria**:
  - [ ] Cumulative cascade pressure named honestly: 6 touches (21-52 + 23-18 + 11-40 + 12-22 + 13-30 + 04-07-48 foundational)
  - [ ] NEW meta-pattern candidates (sample-size 1):
    - [ ] hybrid-declarative-imperative-process-spec pattern (declarative at LLM-judgment edges + imperative at deterministic gates)
    - [ ] layered-IA-for-spec-docs pattern transferability test result (this inquiry produces sample-size 2 data point)
  - [ ] DEFERREDs:
    - [ ] Cascade B — two-pass-as-discipline-identity design (from 12-22; remains deferred per cascade-acknowledgment-without-pre-decision)
    - [ ] Broader process-layer-design-for-discipline-explainer-disciplines pattern (Research Frontier; not pre-decided)
    - [ ] Transferability tests for cascade-era meta-patterns (each sample-size 1)
  - [ ] Refinement Triggers:
    - [ ] More cascade refinements → process spec update
    - [ ] More inquiry transferability tests → meta-pattern validation
    - [ ] New discipline process-layer specs → process-layer-design pattern emergence

#### Q1.8 — What is the artifact-shape decision + supporting structure?
- **Verification criteria**:
  - [ ] Option A — NEW sibling doc at `devdocs/how_articulate_simple_process_should_be.md`
  - [ ] Rejection reasons enumerated for: Option D (violates §9); Option E (over-fragmented); Option B-primary (complementary not exclusive; runner specs are per-runner-routed per §9)
  - [ ] Supporting structure: doc structure follows layered-IA PARTIAL pattern (which elements apply tested per-section)
  - [ ] Cross-reference: meaning-layer doc's §9 gets one-line "see also" pointer

---

## Step 5 — Map Interfaces

### Inter-piece flows

| Source | Target | Flows | Direction | Type |
|---|---|---|---|---|
| Q1.5 | Q1.2 | Inheritance re-test results inform rationale | one-way | data |
| Q1.4 | Q1.1 | Spec contents enable verdict's "what it contains" claim | one-way | dependency |
| Q1.4 | Q1.6 | Spec contents include new commitments (subset) | one-way | data |
| Q1.8 | Q1.3 | Artifact-shape decision drives supporting actions (create doc, see-also) | one-way | dependency |
| Q1.6 | Q1.7 | New commitments (cascade-era additions) feed cascade acknowledgment | one-way | data |
| Q1.5 | Q1.7 | Inheritance re-test surfaces cascade-pressure acknowledgment | one-way | data |

### Intra-Q1.4 sub-piece flows

| Source | Target | Flows | Direction | Type |
|---|---|---|---|---|
| Q1.4.2 | Q1.4.1 | Foundational constraints define scope statement | one-way | structural |
| Q1.4.4 | Q1.4.3 | Deterministic gates frame the runtime stages | one-way | structural |
| Q1.4.5 | Q1.4.3 | LLM-judgment edges fire within stage operations | one-way | structural |
| Q1.4.6 | Q1.4.7 | LAYER 1 modes feed confidence Primary tally | one-way | data |
| Q1.4.6 | Q1.4.3 | LAYER 1 modes apply to specific stages/operations | one-way | structural |
| Q1.4.8 | Q1.4.9 | Bundle structure IS the interface contract | one-way | dependency |
| Q1.4.10 | Q1.4.9 | Recovery mechanisms route through runner interface | one-way | data |
| Q1.4.12 | Q1.5 | Inheritance map is the spec-level record of E5 re-test | bidirectional | data + reference |

### Assumptions-not-data check

- Q1.4 assumes Q1.4.2 (foundational constraints) precedes Q1.4.3-12 (constraints frame what's allowed). **Captured.**
- Q1.1 assumes the verdict can be stated independently of Q1.4 spec details (verdict names; spec specifies). **Captured.**
- Q1.5 assumes priors are testable against current state. **Captured** (each prior has a STAND/REFINE verdict in Sensemaking).
- Q1.7 assumes cumulative cascade pressure can be named without re-deciding Cascade B. **Captured** per 12-22 cascade-acknowledgment-without-pre-decision pattern.
- Q1.4.5 assumes 7 named edges exhaust the relevant LLM-judgment edges (per §6 "and similar LLM-judgment points" clause). **Captured.**
- Q1.4.6 assumes 9 modes exhaust the LAYER 1 modes at current cascade state. **Captured** — explicit cascade-era extensibility per 04-07-48's framework allowance.
- Q1.4.7 assumes self-check output (Q1.4.6) is available at confidence-assignment time. **Captured** by phase ordering (Q1.4.6 → Q1.4.7).
- Q1.4.9 assumes bundle structure (Q1.4.8) is settled before interface enumeration. **Captured** by phase ordering.
- Q1.4.10 assumes discipline-spec vs runner-spec boundary preserved per §9. **Captured.**

No hidden coupling identified. Assumptions are explicit and routed through interfaces.

---

## Step 6 — Order by Dependency

### Phase 1 — Independent / parallel (start anywhere)

- **Q1.5** — Inherited commitments re-test (independent at top level; informs Q1.2 + Q1.7)
- **Q1.8** — Artifact-shape decision (settled in Sensemaking; independent at top level; drives Q1.3)
- **Q1.4.1** — Identity / Purpose / Scope (independent within Q1.4)
- **Q1.4.2** — Foundational constraints (independent within Q1.4)
- **Q1.4.4** — Deterministic gates (independent within Q1.4)
- **Q1.4.11** — Relationship boundary (independent within Q1.4)
- **Q1.4.12** — Inheritance map (depends only on Q1.5 — concurrent feasible)

### Phase 2 — Depends on Phase 1

- **Q1.4.3** — Runtime stages + per-stage procedure (depends on Q1.4.2 constraints + Q1.4.4 gates)
- **Q1.4.5** — LLM-judgment edges (depends on Q1.4.3 stages defining where edges fire)
- **Q1.4.6** — LAYER 1 mode self-check (depends on Q1.4.3 stages + Q1.4.5 edges — modes detect violations of edge procedures)
- **Q1.4.8** — Bundle assembly (depends on Q1.4.3 + Q1.4.4 + Q1.4.5 + Q1.4.6 — bundle integrates all)
- **Q1.4.10** — Recovery mechanisms (depends on Q1.4.3 + Q1.4.6 — recovery is response to detected misses)
- **Q1.3** — Supporting actions (depends on Q1.8 artifact-shape decision)

### Phase 3 — Depends on Phase 2

- **Q1.4.7** — Confidence assignment (depends on Q1.4.6 self-check modes — Primary tallies from self-check)
- **Q1.4.9** — Interfaces (depends on Q1.4.8 bundle structure + Q1.4.10 recovery)
- **Q1.6** — New commitments (depends on Q1.4 contents — extracts what's NEW)

### Phase 4 — Depends on Phase 3

- **Q1.1** — Verdict (depends on Q1.4 contents being settled — verdict names what spec contains)
- **Q1.2** — Rationale (depends on Q1.5 inheritance re-test + Q1.4 contents — rationale draws on both)
- **Q1.7** — Cascade acknowledgments + Open Questions (depends on Q1.5 + Q1.6 — surfaces cascade pressure + new commitments)

### No circular dependencies

All dependencies flow Phase 1 → Phase 2 → Phase 3 → Phase 4. No cycles.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS** — Each piece's question is answerable without reading sibling pieces (except through defined interfaces). Q1.4 has sub-decomposition but each sub-piece independently answerable. |
| **Completeness** | Do the pieces cover the whole? | **PASS** — Q1.1 verdict + Q1.2 rationale + Q1.3 actions + Q1.4 spec contents + Q1.5 inheritance + Q1.6 new commits + Q1.7 cascade ack + Q1.8 artifact-shape = full finding output. The whole = (verdict + spec contents + inheritance + acknowledgments + actions). |
| **Reassembly** | Can the pieces + interfaces reconstruct the whole? | **PASS** — Given all 20 leaves answered + 14 interfaces satisfied, the finding assembles into a coherent process-layer specification + inquiry conclusion. |

### Full 7 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| **Tractability** | Each piece small enough for single focused pass? | **PASS** — Q1.4 has 12 sub-pieces but each small; principal pieces (Q1.1-Q1.8) each tractable. |
| **Interface clarity** | Cross-piece flows explicit; no hidden dependencies? | **PASS** — 14 interfaces explicit (6 inter-piece + 8 intra-Q1.4); assumptions captured. |
| **Balance** | Complexity roughly proportional? | **PASS** — Q1.4 is naturally larger (it IS the spec contents) but sub-decomposed into 12 balanced sub-pieces; other pieces small. |
| **Confidence** | Top-down + bottom-up agree on boundaries? | **HIGH** — top-down + bottom-up AGREE on 8 principal + 12 Q1.4 sub-pieces; no atoms split across boundaries. |

### Determination-mechanism piece check

The Q-tree includes load-bearing concepts whose use depends on runtime determinations: cold-context detection / intrinsic-vs-extrinsic routing / MQA threshold / 2-shape determination / AMBIGUITY-NATURE / multi-source composition / variant count.

Does Q-tree include a piece addressing HOW each runtime check is performed?

- **Q1.4.5** explicitly addresses LLM-judgment edges with per-edge declarative procedure — the DETERMINATION MECHANISM is articulated as DECLARATIVE PROCEDURE per §6 + asymmetric-failure principle. Each of the 7 edges gets its own procedure entry.
- **Q1.4.6** addresses HOW LAYER 1 mode self-check is performed (per-mode procedure; binary fire/not-fire).
- **Q1.4.7** addresses HOW confidence is assigned (Primary tally from self-check; Secondary friction).

**PASS** — determination mechanisms addressed per piece.

### Failure mode check

1. **Premature Decomposition**: Sensemaking settled the verdict + spec contents + artifact-shape first; not premature. ✓
2. **Wrong Boundaries**: cuts at low-coupling valleys (verdict vs rationale vs supporting actions vs spec contents vs inheritance vs new commits vs cascade ack vs artifact-shape); high-coupling clusters preserved within pieces. ✓
3. **Hidden Coupling**: assumptions-not-data check completed; no hidden state. ✓
4. **Missing Pieces**: completeness check covers full finding output; Determination-mechanism check passes. ✓
5. **Over-Decomposition**: 8 principal + 12 sub-pieces = 20 leaves; reasonable for the complexity (process spec is medium-sized). ✓
6. **Ignoring Dependencies**: 4-phase dependency order articulated; no cycles. ✓
7. **Imbalanced Decomposition**: Q1.4 larger but sub-decomposed; balance acceptable. ✓

All 7 failure modes NOT observed.

---

## Deliverable Summary

### 1. Coupling Map
- 4 top-level clusters (Spec contents A; Verdict+Rationale B; Inheritance+Cascade Ack C; Artifact-shape+Actions D)
- 12 sub-pieces within E4 with internal coupling structure
- 11 inter-piece interfaces explicit

### 2. Question Tree
- 1 root (Q1) → 8 principal pieces (Q1.1-Q1.8)
- Q1.4 sub-decomposed into 12 sub-pieces (Q1.4.1-Q1.4.12)
- Total: 20 leaves with verification criteria

### 3. Interface Map
- 6 inter-piece interfaces (data + dependency types)
- 8 intra-Q1.4 sub-piece interfaces (data + structural types)
- 14 total interfaces; all explicit; no hidden coupling

### 4. Dependency Order
- 4 phases: Phase 1 (parallel: Q1.5, Q1.8, Q1.4.1, Q1.4.2, Q1.4.4, Q1.4.11, Q1.4.12) → Phase 2 (Q1.4.3, Q1.4.5, Q1.4.6, Q1.4.8, Q1.4.10, Q1.3) → Phase 3 (Q1.4.7, Q1.4.9, Q1.6) → Phase 4 (Q1.1, Q1.2, Q1.7)
- No circular dependencies

### 5. Self-Evaluation
- Min 3 dimensions: ALL PASS (Independence, Completeness, Reassembly)
- Full 7 dimensions: ALL PASS (+ Tractability, Interface clarity, Balance, HIGH Confidence)
- Determination-mechanism check: PASS
- 7 failure modes: NOT observed

---

## Forward Signals to Innovation

1. **Q1.1 verdict + Q1.2 rationale** are HIGH-confidence verdict-shape commitments; Innovation tests variation depth-iterated.
2. **Q1.4 spec contents (12 sub-pieces)** are the principal content carriers; Innovation tests per-piece content quality + axis coverage.
3. **Q1.4.5 (7 LLM-judgment edges)** and **Q1.4.6 (9 LAYER 1 modes)** are the cascade-era extension surfaces; Innovation tests whether each edge/mode procedure description is the right one.
4. **Q1.5 inheritance re-test** is the inheritance preservation surface; Innovation should test whether each prior's STAND verdict is supported by structural evidence.
5. **Q1.6 new commitments + Q1.7 cascade acknowledgments** are the change-recognition surfaces; Innovation tests honesty + completeness.
6. **Q1.8 artifact-shape Option A** is settled; Innovation should sanity-test that no Option D/E/B-primary variant survives stronger scrutiny.
7. **HYBRID style + layered-IA PARTIAL transfer + cumulative cascade pressure acknowledgment** are emerging meta-patterns; Innovation tests transferability cautiously (sample-size 1 → DEFERRED-revival).
8. **Production-task mode** since the inquiry produces concrete deliverable (verdict + spec contents + artifact-shape decision + actions); Innovation should apply Standard methodology mode + per-piece work.
