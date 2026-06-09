# Decomposition: Articulate_simple Invocation-Focus Miss Diagnosis

## User Input

The input is the inquiry's `_branch.md` + Surfacing's 106-item output + Sensemaking's SV6 verdict. The whole-to-decompose is the FINDING-LEVEL pieces a diagnostic finding must answer to satisfy the question "what caused this miss?"

---

## Step 1 — Perceive Coupling Topology

### Elements of the whole (diagnostic-finding deliverables)

- E1 — PRIMARY cause classification (concept gap at meaning layer; deferral missing from typed-axis vocabulary)
- E2 — MOST-AFFECTED operation identification (MQ4 boundary-axis; binary in-vs-out conflates exclusion with deferral)
- E3 — RULED-OUT contributory factor (Itemize keep-together bias is NOT load-bearing — count = 2 wouldn't fix the miss)
- E4 — CAPABILITY question (can the discipline produce the missed reading via LLM judgment alone? NO — SPEC GAP, not tuning)
- E5 — FIX RECOMMENDATION (primary = widen MQ4 to three states; optional secondary = MQ1 temporal-scope sub-axis)
- E6 — PRESERVATION constraints (lightweight stance + asymmetric-failure + NOT-list rule 1 + 2-shape + per-invocation scope all preserved by the fix)
- E7 — CONCEPT-NAME validation ("deferral" — project-adjacent at other layers; new at discipline level)
- E8 — GENERALIZABILITY claim (deliverable-asymmetry signal recurs; not one-off miss)

### Coupling map

| Pair | Coupling | Reason |
|---|---|---|
| E1 ↔ E2 | STRONG | Cause classification identifies which operation manifests it |
| E1 ↔ E4 | STRONG | Cause classification implies whether spec change is needed |
| E2 ↔ E5 | STRONG | Fix locus IS the most-affected operation |
| E4 ↔ E5 | STRONG | Spec gap → fix is at spec level |
| E5 ↔ E6 | STRONG | Fix shape must preserve named commitments |
| E5 ↔ E7 | MODERATE | Concept name ("deferred") becomes the new state-name in MQ4's widened answer space |
| E3 → all others | WEAK | Itemize ruled-out is diagnostic disambiguation; independent |
| E7 → others | WEAK | Concept-name validation is independent observation |
| E8 → others | WEAK | Generalizability is independent observation |

### Coupling clusters identified

- **Cluster A (Cause + Manifestation + Spec-Gap Status)** — E1, E2, E4; tight coupling (the cause classification, where it manifests, and whether it's a spec gap form one inseparable diagnostic core)
- **Cluster B (Fix + Preservation)** — E5, E6; tightly coupled (fix shape must preserve commitments)
- **Cluster C (Diagnostic Disambiguations)** — E3, E7, E8; independent observations (Itemize-ruled-out, concept-name-validation, generalizability)
- **Cross-cluster coupling**: A ↔ B (cluster A's spec-gap verdict drives cluster B's fix recommendation); A ↔ C (E1 names the concept that E7 validates)

### Coupling valleys (boundary candidates)

- Valley 1: Cluster A ↔ Cluster B — the cause/manifestation is distinct from the fix; the boundary is at "what is it" vs "what to do"
- Valley 2: Cluster C ↔ Cluster A+B — diagnostic disambiguations are independent of the primary diagnostic core
- Valley 3: Within Cluster A — E1 (cause) is the framing piece; E2 (where) and E4 (spec-gap) are derivations from E1; the boundaries are coherent
- Valley 4: Within Cluster B — E5 (what to do) and E6 (what to preserve) are distinct ask-axes; the boundary is coherent

---

## Step 2 — Detect Boundaries (Top-Down)

### Initial boundary set (8 principal pieces)

- **Q1.1** — What is the PRIMARY cause?
- **Q1.2** — Where in the spec does the gap manifest (which operation)?
- **Q1.3** — What is RULED OUT as load-bearing cause?
- **Q1.4** — CAN the discipline produce the missed reading via LLM judgment alone?
- **Q1.5** — What is the fix recommendation?
- **Q1.6** — What discipline commitments are PRESERVED by the fix?
- **Q1.7** — Is "deferral" a real concept or loop-coined?
- **Q1.8** — Is the concept gap GENERALIZABLE or one-off?

Boundary count: 8 leaves. No sub-decomposition needed — each piece is tractable in a single focused pass.

---

## Step 3 — Validate Boundaries (Bottom-Up)

### Irreducible atoms

- **Concept gap** (atomic verdict)
- **Meaning-layer attribution** (atomic verdict)
- **MQ4 binary in-vs-out semantic** (atomic mechanism description)
- **Itemize keep-together bias** (atomic mechanism description)
- **Count = 2 doesn't fix it** (atomic mechanism description)
- **Spec gap vs tuning distinction** (atomic verdict)
- **Three-state MQ4 widening** (atomic fix description)
- **Optional MQ1 sub-axis** (atomic fix description)
- **Lightweight stance preservation** (atomic constraint)
- **Asymmetric-failure preservation** (atomic constraint)
- **NOT-list rule 1 preservation** (atomic constraint)
- **2-shape principle preservation** (atomic constraint)
- **Per-invocation scope preservation** (atomic constraint)
- **DEFERRED Next-Actions** (project-adjacent vocab; atomic reference)
- **DEFERRED-revival Innovation disposition** (project-adjacent vocab; atomic reference)
- **Cascade B two-pass form** (project-adjacent vocab; atomic reference)
- **Deliverable-asymmetry signal recurs** (atomic generalizability claim)

### Bottom-up grouping check

- {concept gap, meaning-layer attribution} → Q1.1 ✓
- {MQ4 binary semantic} → Q1.2 ✓
- {Itemize keep-together bias, count = 2 doesn't fix it} → Q1.3 ✓
- {spec gap vs tuning distinction} → Q1.4 ✓
- {three-state MQ4 widening, MQ1 sub-axis} → Q1.5 ✓
- {five preservation atoms} → Q1.6 ✓
- {project-adjacent vocab atoms} → Q1.7 ✓
- {deliverable-asymmetry signal recurs} → Q1.8 ✓

### Top-down + bottom-up agreement

**HIGH confidence.** Top-down 8 pieces AGREE with bottom-up grouping. No atoms split across boundaries; no atoms grouped that should be separated.

---

## Step 4 — Express as Question Tree

### Q1 — What caused the articulate_simple miss on devdocs/for_future/2.md?

#### Q1.1 — What is the PRIMARY cause?

**Verification criteria:**
- [ ] Cause classification stated: CONCEPT GAP at the MEANING layer
- [ ] Specific concept missing named: "deferral / implied-future-invocation / temporal scope"
- [ ] Discipline element where the gap lives named: the discipline's typed-axis vocabulary (MQ1 verdict / MQ2 context-need / MQ3 intent / MQ4 boundary / MultiDepth WHY) does NOT include "temporal scope" or "deferral"
- [ ] Adjacency to existing concepts named: MQ4 "boundary-axis" is the structurally-nearest existing concept (both "boundary" and "deferral" sit on the in-vs-out axis), but they differ — boundary implies permanence, deferral implies future-turn

#### Q1.2 — Where in the spec does the gap manifest (most-affected operation)?

**Verification criteria:**
- [ ] Most-affected operation named: MQ4 (boundary-axis)
- [ ] Specific mechanism described: MQ4's binary in-vs-out semantic ("what is the user explicitly excluding?" → in-scope OR excluded) conflates "permanent exclusion" with "deferral to future turn"
- [ ] Evidence from the articulation run cited: MQ4 surfaced "other-disciplines exclusion" framed as may-be-intentional-vs-unintentional; neither reading captured "deferred"
- [ ] Secondary affected operation noted: MQ1 verdict-axis surfaced "report-count" but framed as IN-THIS-RUN count (not across-invocations); not load-bearing here but related
- [ ] Other operations untouched named: MQ2 / MQ3 / MQA / Deconstruct / MultiDepth / Rephrase don't host the gap; Rephrase is downstream so it can't span what upstream didn't surface

#### Q1.3 — What is RULED OUT as load-bearing cause?

**Verification criteria:**
- [ ] Itemize keep-together bias explicitly RULED OUT as load-bearing
- [ ] Reason articulated: even if Itemize had emitted count = 2 (two items: decompose-item + innovate-item), the result would be "two items IN ONE invocation" not "this INVOCATION is one of two SEQUENTIAL INVOCATIONS"
- [ ] Categorical distinction made: "multi-item-within-one-invocation" ≠ "this-invocation-is-one-of-multiple-implied-invocations"
- [ ] Honesty note: Itemize bias may be A contributing factor in some related cases, but NOT the load-bearing cause here; concept-gap is deeper

#### Q1.4 — CAN the discipline produce the missed reading via LLM judgment alone?

**Verification criteria:**
- [ ] Answer: NO (spec gap, not tuning issue)
- [ ] Mechanism reasoning: even a perfectly-judging LLM running the current spec collapses "deferral" into either "in scope" or "excluded" because the spec doesn't grant a third state
- [ ] Edge-by-edge analysis: Edge 2 (intrinsic-vs-extrinsic exclusion routing) is closest but routes to MQ3+MQA or MQ4 — doesn't surface "deferred"; Edge 4 (2-shape determination) could host "deferred" as identified-ambiguity but MQ4's hosting semantic flattens it
- [ ] Implication: better LLM judgment alone cannot fix; SPEC CHANGE needed at meaning layer
- [ ] Asymmetric-failure principle limitation acknowledged: the principle is a META-RULE at LLM-judgment edges but it cannot override a MISSING CATEGORY — it can only nudge within existing categories

#### Q1.5 — What is the fix recommendation?

**Verification criteria:**
- [ ] PRIMARY fix: widen MQ4 answer state space from binary (in-scope / excluded) to three states (in-scope / excluded / deferred)
- [ ] Three-state taxonomy defined: in-scope = will-be-addressed-in-this-invocation; excluded = permanently-out-of-scope; deferred = mentioned-but-not-this-turn / implied-future-invocation
- [ ] OPTIONAL secondary fix: MQ1 temporal-scope sub-axis (verdict-axis sub-question for across-invocations vs this-invocation framing); NOT load-bearing for this specific miss; for future-related misses
- [ ] Rejected fix alternatives noted: new MQ5 axis (over-extension); pure sub-axis under MQ1 (misses MQ4's conflater role)
- [ ] Fix is at MEANING layer (introducing concept) anchored in STRUCTURAL refinement (widening MQ4's answer state space)
- [ ] Spec-location pointed: meaning-layer doc + distilled discipline doc both need the deferral concept added to MQ4's typed-axis description

#### Q1.6 — What discipline commitments are PRESERVED by the fix?

**Verification criteria:**
- [ ] Lightweight stance PRESERVED: the three-state widening is a typed-axis answer-state addition (declarative description), not enforcement code; one paragraph per operation criterion not violated
- [ ] Asymmetric-failure principle PRESERVED + extends: under perceived deliverable-asymmetry signal, prefer surfacing "deferred" over collapsing to in-or-out (this extends the principle's per-edge directions but stays consistent with the meta-rule)
- [ ] NOT-list rule 1 (no adjudication) PRESERVED: identification of "deferred" is identification (the discipline emits "this might be deferred"), not adjudication (the discipline doesn't decide whether it IS deferred)
- [ ] 2-shape principle PRESERVED at content level: each MQ answer is still identified-ambiguities-list OR explicit-empty; the three-state widening is at PER-IDENTIFIED-AMBIGUITY STATE classifier level (each ambiguity item gets a state tag), not a replacement of 2-shape
- [ ] Per-invocation discipline scope PRESERVED: identification of cross-invocation signals is per-invocation work (LLM perceives signal in THIS statement; discipline emits in THIS bundle); acting on cross-invocation intent is OUT of scope by design (runner-side)

#### Q1.7 — Is "deferral" a real concept or loop-coined neologism?

**Verification criteria:**
- [ ] Test predicate: proxy-vs-structural; discoverability; user-language alignment
- [ ] Proxy-vs-structural: deferral as proposed is a structural distinction (a state of "mentioned-but-not-this-turn" distinct from "in-scope-this-turn" and "permanently-excluded"); NOT a proxy
- [ ] Discoverability: project-adjacent vocabulary exists — `DEFERRED` as Next-Actions category in findings; `DEFERRED-revival` as Innovation candidate disposition; Cascade B "two-pass form" (different referent — post-context refinement); the TERM is in project vocabulary at OTHER layers
- [ ] User-language alignment: user's `2.md` doesn't say "defer" but the mental model (sequential / focused-on-this-now / future-run) fits the deferral semantic
- [ ] Verdict: "deferral" is a NEW discipline-level concept introduced by this diagnosis; project-adjacent vocabulary supports it; NOT a loop-coined neologism
- [ ] Confidence: MED-HIGH (project-discoverable adjacent vocab; new at this discipline level)

#### Q1.8 — Is the concept gap GENERALIZABLE or one-off?

**Verification criteria:**
- [ ] Verdict: GENERALIZABLE
- [ ] Pattern identified: the asymmetry signal (N questions vs M deliverables) is a structural pattern that recurs whenever a user mentions multiple subjects but specifies one explicit deliverable target
- [ ] Triggering shape: anywhere a user says "do X, and also Y" while specifying only ONE explicit target, the same gap applies
- [ ] Counter-test addressed: counter-claim "one-off" refuted on structural grounds (the signal-shape is general, not specific to this request)
- [ ] Implication: fixing the gap at MQ4 (widen to three states) addresses not just this miss but a class of future misses
- [ ] Confidence: HIGH

### No further sub-decomposition needed

Each piece is tractable in a single focused pass. No sub-pieces would improve clarity. Stopping criterion: tractable + directly verifiable.

---

## Step 5 — Map Interfaces

### Inter-piece flows

| Source | Target | Flows | Direction | Type |
|---|---|---|---|---|
| Q1.1 | Q1.2 | Cause classification → identifies which operation manifests it | one-way | dependency |
| Q1.1 | Q1.4 | Cause classification (concept gap) → implies spec gap status | one-way | dependency |
| Q1.1 | Q1.7 | Cause names the concept ("deferral") → Q1.7 validates the concept | one-way | data |
| Q1.2 | Q1.5 | Most-affected operation → fix locus | one-way | dependency |
| Q1.4 | Q1.5 | Spec gap status → fix is at spec level (vs tuning) | one-way | dependency |
| Q1.7 | Q1.5 | Concept name ("deferred") → becomes the new state name in MQ4 | one-way | data |
| Q1.5 | Q1.6 | Fix shape → must preserve named commitments | one-way | dependency |
| (none) | Q1.3 | Independent — diagnostic disambiguation | — | — |
| (none) | Q1.8 | Independent — generalizability observation | — | — |

### Assumptions-not-data check

- Q1.1 assumes the discipline's typed-axis vocabulary is enumerable and that the absence of "deferral / temporal scope" is observable. **Captured** by listing the 5 typed axes explicitly.
- Q1.2 assumes MQ4's semantic ("what is the user explicitly excluding?") binds answer states to in-vs-out only. **Captured** by referencing the spec text.
- Q1.3 assumes "two items in one invocation" and "this invocation is one of multiple implied invocations" are categorically distinct concepts. **Captured** by Sensemaking's Ambiguity 4 resolution.
- Q1.4 assumes asymmetric-failure principle's authority bound: it nudges within categories, doesn't create them. **Captured** by SP6.
- Q1.5 assumes the three-state widening preserves 2-shape at content level (per-ambiguity state classifier ≠ 2-shape replacement). **Captured** in Q1.6 verification criterion.
- Q1.7 assumes "DEFERRED" elsewhere in the project (Next-Actions, Innovation disposition) is sufficient project-adjacent vocab. **Captured** by Frame-exit Completeness analysis.
- Q1.8 assumes the deliverable-asymmetry signal generalizes across statement shapes. **Captured** but flagged for piece-level test.

No hidden coupling identified. Assumptions are explicit.

---

## Step 6 — Order by Dependency

### Phase 1 — Independent / parallel

- **Q1.3** — Itemize ruled-out (independent diagnostic disambiguation)
- **Q1.7** — "Deferral" concept-name validation (independent observation)
- **Q1.8** — Generalizability claim (independent observation)

### Phase 2 — Depends on Phase 1 / foundational pieces

- **Q1.1** — Primary cause classification (the framing piece; informs Q1.2 + Q1.4 + Q1.5)
- **Q1.2** — Most-affected operation (depends on Q1.1's cause classification to identify where it manifests)
- **Q1.4** — Spec gap vs tuning (depends on Q1.1's classification to derive the spec-gap status)

### Phase 3 — Depends on Phase 2

- **Q1.5** — Fix recommendation (depends on Q1.2 fix-locus + Q1.4 spec-gap status + Q1.7 concept-name)

### Phase 4 — Depends on Phase 3

- **Q1.6** — Preservation constraints (depends on Q1.5 fix shape to verify what it preserves)

### No circular dependencies

All dependencies flow Phase 1 → Phase 2 → Phase 3 → Phase 4. No cycles.

---

## Step 7 — Self-Evaluate

### Minimum 3 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS** — Each piece's question is answerable independently; cross-piece dependencies are through defined interfaces |
| **Completeness** | Do the pieces cover the whole? | **PASS** — Q1.1-Q1.8 cover cause classification + manifestation + ruled-out + spec-gap status + fix + preservation + concept-name validation + generalizability = complete diagnostic-finding output |
| **Reassembly** | Pieces + interfaces = whole? | **PASS** — Given all 8 leaves answered + 7 interfaces satisfied, the diagnostic finding assembles into a coherent answer to "what caused this miss?" |

### Full 7 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| **Tractability** | Each piece small enough for single focused pass? | **PASS** — Each of the 8 pieces is tractable |
| **Interface clarity** | Cross-piece flows explicit; no hidden coupling? | **PASS** — 7 interfaces explicit; assumptions captured |
| **Balance** | Complexity roughly proportional? | **PASS** — Q1.5 + Q1.6 are slightly heavier (fix + preservation) but balanced overall |
| **Confidence** | Top-down + bottom-up agree? | **HIGH** — agree on 8 pieces; no atoms split |

### Determination-mechanism piece check

Does the Q-tree address HOW the diagnostic conclusions are determined?

- **Q1.1**: by what mechanism do we identify "concept gap" as cause? Verification criterion includes the structural test ("does LLM judgment alone fix it? NO → spec gap → concept gap"). **PASS.**
- **Q1.2**: by what mechanism do we identify MQ4 as most-affected? Verification criterion includes evidence from the articulation run (MQ4 surfaced "other-disciplines exclusion" framed binary). **PASS.**
- **Q1.4**: by what mechanism do we determine spec-gap-vs-tuning? Verification criterion includes edge-by-edge analysis (Edges 2 + 4 closest; both still flatten without a hosting category). **PASS.**
- **Q1.7**: by what mechanism do we test concept-name validity? Verification criterion includes proxy-vs-structural test + discoverability test + user-language alignment. **PASS.**
- **Q1.8**: by what mechanism do we claim generalizability? Verification criterion includes pattern identification (asymmetry signal recurs) + counter-test addressed. **PASS.**

Determination mechanisms addressed.

### Failure mode check

1. **Premature Decomposition**: Sensemaking settled the whole first; not premature. ✓
2. **Wrong Boundaries**: cuts at low-coupling valleys (cause vs fix vs disambiguations vs concept-validation). ✓
3. **Hidden Coupling**: assumptions-not-data check completed; no hidden state. ✓
4. **Missing Pieces**: completeness check covers full diagnostic output; Determination-mechanism check passes. ✓
5. **Over-Decomposition**: 8 pieces appropriate for the diagnostic complexity. ✓
6. **Ignoring Dependencies**: 4-phase order articulated; no cycles. ✓
7. **Imbalanced Decomposition**: Q1.5 + Q1.6 slightly heavier but acceptable. ✓

All 7 failure modes NOT observed.

---

## Deliverable Summary

### 1. Coupling Map
- 3 top-level clusters (A = Cause + Manifestation + Spec-Gap Status; B = Fix + Preservation; C = Disambiguations + Concept-Name + Generalizability)
- 7 inter-piece interfaces explicit

### 2. Question Tree
- 1 root (Q1) → 8 principal pieces (Q1.1-Q1.8); no sub-decomposition needed
- Total: 8 leaves with verification criteria

### 3. Interface Map
- 7 inter-piece interfaces (data + dependency types)
- 3 pieces independent (Q1.3, Q1.7, Q1.8)

### 4. Dependency Order
- 4 phases: Phase 1 (Q1.3, Q1.7, Q1.8 parallel) → Phase 2 (Q1.1, Q1.2, Q1.4) → Phase 3 (Q1.5) → Phase 4 (Q1.6)
- No circular dependencies

### 5. Self-Evaluation
- Min 3 dimensions: ALL PASS (Independence, Completeness, Reassembly)
- Full 7 dimensions: ALL PASS (+ Tractability, Interface clarity, Balance, HIGH Confidence)
- Determination-mechanism check: PASS
- 7 failure modes: NOT observed

---

## Forward Signals to Innovation

1. **Q1.1, Q1.2, Q1.4 form the diagnostic CORE** — concept gap at meaning layer, manifested at MQ4 (binary semantic), and unresolvable via LLM judgment alone (spec gap). Innovation tests this core diagnostic verdict.
2. **Q1.3 (Itemize ruled out) is a load-bearing rejection** — Innovation should test the counter ("Itemize IS the cause") via Inversion.
3. **Q1.5 + Q1.6 form the FIX recommendation cluster** — three-state MQ4 widening + commitment preservation. Innovation should test the fix shape rigorously.
4. **Q1.7 concept-name validation** — Innovation should test alternative concept names ("deferral" vs "implied future" vs "pending invocation" vs "temporal scope") to ensure "deferral" is the right naming.
5. **Q1.8 generalizability** — Innovation should test the counter ("the gap is specific to this miss, not generalizable").
6. **Meta-decision pieces likely**: Q1.1 (cause classification — frame-semantic), Q1.5 (fix recommendation — intervention-shape commitment), Q1.7 (concept-name — lesson-vocabulary). These should get piece-level Inversion per Innovation's rules.
7. **Methodology mode = Standard default** (the seed is a diagnostic question with settled verdict from Sensemaking; Innovation should elaborate the committed direction with appropriate Inversion at meta-decision pieces).
8. **Production-task mode** — Innovation produces text per piece elaborating the diagnostic finding.
