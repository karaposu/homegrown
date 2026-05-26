# Decomposition — Innovation Missed CORRECTS on Mapping Redo

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-18_loop_diagnose__innovation_missed_corrects_on_mapping_redo/_branch.md`

Inputs read in order: (1) `_branch.md` — LOOP_DIAGNOSE framing; Innovation-only hard scope; (2) `exploration.md` — territory map and 5 frontier questions for sensemaking; (3) `sensemaking.md` — the SV6 stabilized model (three structural anchors in `/innovate` reference + four maintenance-candidate paths P-Maintenance-A through P-Maintenance-D).

**Whole to decompose.** The diagnostic's downstream work — turning sensemaking's SV6 stabilized model into Innovation-side maintenance candidates that (a) the next discipline (innovation) can commit to as concrete `/innovate` reference text proposals, and (b) the discipline after (critique) can adversarially test for false-positive risk. The four maintenance paths from sensemaking are inputs to be partitioned coherently, not pre-decomposed pieces.

**Hard scope constraint carried through:** all pieces stay within `/innovate` reference's surface; no piece proposes changes to sensemaking's, critique's, decomposition's, or exploration's references. Other-discipline failures named-and-excluded throughout.

---

## Step 1 — Coupling Topology (Coarse Map)

### Elements identified in the whole

Beyond the four maintenance paths sensemaking handed off, two elements surface during decomposition that are NOT already named pieces but ARE required by the spec's refinement notes and by the load-bearing structure:

- **Element-α (definitional clarification).** Sensemaking's structural anchor 1 (the strict-vs-expansive Inversion-application ambiguity in `/innovate` reference §3) is the prerequisite for any "piece-level Inversion required" rule. Until the spec commits to the expansive reading (Inversion applies per piece-internal commitment, not only per seed), the rule is a graft onto an ambiguous foundation.

- **Element-δ (determination mechanism).** The diagnostic's load-bearing concept "meta-decision piece" depends on a runtime determination — Innovation, when executing, must be able to tell when a piece IS a meta-decision piece. Per the spec's Step 7 refinement note (Determination-mechanism piece check), the Q-tree MUST include a piece addressing HOW the determination is performed at runtime.

So the elements being clustered are six, not four:

| Tag | Element | From sensemaking's SV6 / additional |
|---|---|---|
| Element-α | Definitional clarification: commit to expansive Inversion-belief-per-piece reading in `/innovate` §3 | From SV6 anchor 1; not a P-Maintenance path |
| Element-δ | Runtime determination mechanism: how does Innovation identify "meta-decision piece" at runtime | From Step 7 refinement note; not a P-Maintenance path |
| Element-A | Piece-level Inversion application rule | P-Maintenance-A |
| Element-B | Early Frame Lock prevention extended to be mechanism-TYPE-aware | P-Maintenance-B |
| Element-C | Survival Bias prevention extended to cover prior-step never-generate failure | P-Maintenance-C |
| Element-D | Telemetry extension to surface per-piece mechanism distribution | P-Maintenance-D |

### Pairwise coupling assessment

For each pair, the question per `/decompose` reference §"The Core Operation: Coupling Perception": "If I change A, does B need to change?"

| Pair | Coupling | Reason |
|---|---|---|
| **α ↔ A** | **Strong** | α's resolution (commit to expansive reading) is A's precondition. If α commits to strict reading instead, A's rule text changes fundamentally (Inversion would apply at seed only). Without α resolved, A is a graft onto ambiguity. |
| **α ↔ δ** | **Moderate** | δ's runtime mechanism depends on α's reading. If α commits to expansive, δ specifies how to identify "meta-decision piece"; if α commits to strict, δ becomes a different question (how to identify "the seed's meta-decision"). |
| **α ↔ B** | **Moderate** | B's mechanism-TYPE-aware prevention specifically names Inversion. α's reading determines what Inversion's per-piece application looks like, which B's prevention cross-references. |
| **α ↔ C** | **Weak** | C's never-generate prevention is about the candidate-set having only one direction; it doesn't directly depend on α's reading, only on the broader concept. |
| **α ↔ D** | **Weak** | D's telemetry surfaces per-piece mechanism distribution; D's content depends on whether per-piece distribution is a recognized concept (which α establishes), but D's mechanics are largely independent. |
| **δ ↔ A** | **Strong** | A's rule is unenforceable without δ's runtime mechanism. The rule "apply Inversion at meta-decision pieces" requires Innovation to know when a piece IS a meta-decision piece — δ provides that. |
| **δ ↔ B** | **Moderate** | B's prevention rule fires on meta-decision pieces; without δ, the prevention has no runtime trigger. |
| **δ ↔ C** | **Moderate** | C's recognition signal ("candidate set contains only preserve / accept / continue at a meta-decision piece") requires identifying "meta-decision piece" at runtime — δ provides that. |
| **δ ↔ D** | **Moderate** | D's telemetry flag fires when meta-decision pieces receive no Inversion — δ provides the piece-type classification the telemetry observes. |
| **A ↔ B** | **Strong** | Both relate to "Inversion at meta-decision pieces." A is the positive rule (must apply); B is the prevention rule (extending Early Frame Lock to name Inversion). If A is committed, B's content collapses to a cross-reference of A. |
| **A ↔ C** | **Moderate** | C's recognition signal is the OBSERVABLE form of A's failure (when the rule is violated, the candidate set is single-direction). C describes detection; A describes the rule. |
| **A ↔ D** | **Moderate-to-strong** | D's telemetry is A's enforcement-observability layer. Without D, A's rule could be silently violated. Without A, D's telemetry adds visibility for a rule that doesn't exist. |
| **B ↔ C** | **Strong (conceptually) / Weak (text-location)** | Both address the same situation (single-option candidate set at meta-decision piece) viewed from two failure-mode angles. Conceptually tightly coupled; spec-text-location-wise loosely coupled (separate failure-mode sections). |
| **B ↔ D** | **Weak** | Telemetry observability and prevention-rule wording are orthogonal. |
| **C ↔ D** | **Weak** | Same as B↔D. |

### Coupling map summary

Coupling strength heatmap:

```
        α    δ    A    B    C    D
α       —    M    S    M    W    W
δ       M    —    S    M    M    M
A       S    S    —    S    M    M-S
B       M    M    S    —    S/W  W
C       W    M    M    S/W  —    W
D       W    M    M-S  W    W    —
```

**Two high-coupling clusters identified:**
- **Cluster-Core: {α, δ, A}** — all pairs are Strong or Moderate-Strong. The "Inversion at meta-decision pieces" concept-and-rule cluster.
- **Cluster-Propagation: {B, C}** — Strong conceptual coupling at the "failure-mode prevention" level.

**One single-element cluster:**
- **Cluster-Telemetry: {D}** — Moderate coupling with Cluster-Core, Weak coupling with Cluster-Propagation. Orthogonal observability extension.

**Inter-cluster coupling (the natural boundaries):**
- Cluster-Core → Cluster-Propagation: M-S downstream coupling (Propagation cross-references Core).
- Cluster-Core → Cluster-Telemetry: M downstream coupling (Telemetry observes Core).
- Cluster-Propagation ⊥ Cluster-Telemetry: W (orthogonal).

---

## Step 2 — Boundary Detection (Top-Down)

### Initial boundary candidates

From the coupling map, the natural cut-points are:

**Boundary B1** (between Cluster-Core and Cluster-Propagation): cut between A and B. Pieces on Core side: α, δ, A. Pieces on Propagation side: B, C. Crossing strength: M-S (single-direction; Propagation depends on Core's output).

**Boundary B2** (between Cluster-Core and Cluster-Telemetry): cut between A and D. Pieces on Core side: α, δ, A. Pieces on Telemetry side: D. Crossing strength: M-S.

**Boundary B3** (within Cluster-Core): could cut between {α, δ} and A. Pieces on prerequisite side: α, δ. Piece on rule side: A. Crossing strength: S — high. Cutting here splits tightly coupled elements.

**Boundary B4** (within Cluster-Core, alternate): could cut between α and δ. Crossing strength: M. Lower than B3 but still moderate.

### Initial partition

Conservative top-down partition (cut at low-coupling valleys, keep high-coupling clusters intact):

- **P1 = α** (definitional clarification, one element)
- **P2 = δ** (determination mechanism, one element)
- **P3 = A** (piece-level Inversion rule, one element)
- **P4 = B + C** (failure-mode refinements bundled — strong conceptual coupling)
- **P5 = D** (telemetry, one element)

**Why split P1 and P2 despite both being prerequisites for P3?** α and δ answer structurally different questions: α is a definitional-text question (clarify spec wording); δ is a runtime-mechanism question (how does an LLM apply the rule). The crossing strength (M) is moderate, and splitting them allows them to be answered in parallel.

**Why bundle B and C into P4?** Strong conceptual coupling (same situation viewed from two failure-mode angles). Bundling preserves coherence at the spec-text level — the refinement-note in `/innovate` reference's Failure Modes section can address both with one cross-reference structure.

**Why keep D as its own piece?** Weak coupling with B and C; moderate with A. Splitting from B/C respects orthogonality; keeping separate from A respects the spec-text-location boundary (telemetry lives in §"Mechanism Coverage Telemetry," not in §3 Inversion or §"Failure Modes").

Top-down initial partition: 5 pieces.

---

## Step 3 — Bottom-Up Validation

### Irreducible atoms

Working bottom-up from the smallest indivisible elements:

| Atom | Description | Lives in `/innovate` reference at |
|---|---|---|
| At1 | The text of §3 Inversion's "Identify a core assumption or belief related to the seed" sentence — the source of the strict-vs-expansive ambiguity | §3 (Inversion mechanism, "How to apply" sub-section) |
| At2 | The text of §3 Inversion's depth-check refinement note ("Keep inverting until you reach a statement about the SYSTEM") — already supports expansive reading | §3 (refinement note) |
| At3 | The criterion for "what counts as a meta-decision piece" — currently undefined in the spec | (not yet defined; would live in §"Phase 2 Generate" or §3 Inversion) |
| At4 | The new rule text "Innovation must apply Inversion at piece-level when the piece is a meta-decision piece" | (would live in §"Phase 2 Generate" or §3 Inversion as a new refinement note) |
| At5 | §3 Early Frame Lock prevention rule text ("After the first successful output, apply at least one more mechanism") | §"Failure Modes" §3 (Early Frame Lock) |
| At6 | §6 Survival Bias prevention rule text ("Deliberately test the most uncomfortable output with extra care") | §"Failure Modes" §6 (Survival Bias) |
| At7 | §"Mechanism Coverage Telemetry" section's reporting fields | §"Mechanism Coverage (Telemetry)" near the end of the reference |

### Bottom-up grouping

Atoms grouped naturally by spec-text location and content-type:

**Group-1: {At1, At2} — definitional sub-text in §3 Inversion.** Both atoms live in the same spec section; both bear on the strict-vs-expansive reading. At2 ALREADY supports expansive reading; At1 is where the ambiguity lies. The expansive-reading commitment can be made by editing At1's wording or by adding a clarifying note that points to At2.

**Group-2: {At3} — meta-decision piece criterion.** Doesn't exist in the spec yet; would be a new sub-section. Lives near §"Phase 2 Generate" (where mechanism application is described) or at the head of §3 Inversion (where the new piece-level rule lands).

**Group-3: {At4} — new piece-level rule.** Doesn't exist in the spec yet; would be a new refinement note. Co-locates with At3 since the rule depends on the criterion.

**Group-4: {At5, At6} — failure-mode prevention rule texts.** Both atoms live in §"Failure Modes," different sub-sections (§3 and §6). Conceptually similar refinement type (extending prevention to be mechanism-TYPE-aware and never-generate-aware). Spec-text-location is different but adjacent.

**Group-5: {At7} — telemetry reporting fields.** Single atom in its own section.

### Validation against top-down partition

| Top-down piece | Bottom-up group(s) | Agreement |
|---|---|---|
| P1 (α: definitional clarification) | Group-1 (At1 + At2) | YES — bottom-up confirms P1's text-location and content |
| P2 (δ: determination mechanism) | Group-2 (At3) | YES — bottom-up reveals At3 doesn't exist yet, must be drafted |
| P3 (A: piece-level Inversion rule) | Group-3 (At4) | YES — At4 is the new rule text |
| P4 (B + C: failure-mode refinements) | Group-4 (At5 + At6) | YES — both atoms live in §"Failure Modes"; bundling matches |
| P5 (D: telemetry) | Group-5 (At7) | YES — single atom, single piece |

**Are there atoms that the top-down partition splits apart?** At3 (meta-decision criterion) and At4 (piece-level rule) — both proposed to live near each other (or in the same section). The partition assigns them to different pieces (P2 vs P3). Is this a split that creates hidden coupling? **NO** — At3 is a definition (what counts as meta-decision) and At4 is a rule (what to do when meta-decision applies). They co-locate in the spec but are answerable as separate questions. The bottom-up reveals they're CONCEPTUALLY separable even though they SPATIALLY co-locate.

**Are there atoms the top-down groups together that are actually independent?** At5 and At6 (P4 bundle). Are they truly tightly coupled? They're both prevention-rule refinements; both cross-reference the same Core rule (At4). Independent of each other only via the Core. Conclusion: bundling them is justified by the shared Core dependency; they're not independent of each other in practice.

**Confidence:** HIGH for the macro-partition (P1/P2/P3 vs P4 vs P5 — top-down and bottom-up agree). MEDIUM for the P2/P3 split (they co-locate spatially; the conceptual split is correct but the spec-text instantiation might merge them).

---

## Step 4 — Question Tree

### Q1 (P1: definitional clarification)

**Question:** What text edit to `/innovate` reference §3 Inversion commits unambiguously to the expansive Inversion-belief-per-piece reading — such that strict-reading-only ("Inversion applies only to the seed-level core belief") is excluded as a misreading?

**Verification criteria:**
- [ ] A specific text edit to §3 Inversion (or to §"Phase 2 Generate" Identify-belief sub-step) is drafted.
- [ ] The edit explicitly excludes the strict reading as a misreading (or explicitly commits to the expansive reading as canonical).
- [ ] The existing depth-check refinement note's internal-consistency support is referenced.
- [ ] The edit is internally consistent with the rest of §3 Inversion's "How to apply" text and "What it misses" caveat.

### Q2 (P2: determination mechanism)

**Question:** What runtime mechanism does Innovation use to identify "this piece is a meta-decision piece" (vs a content-production piece) — at the level of operational checkability by an LLM running the discipline?

**Verification criteria:**
- [ ] A determination procedure is specified (e.g., observable properties of the piece, a checklist, a heuristic).
- [ ] The procedure is checkable by an LLM running the discipline at execution time (does not require out-of-band classification).
- [ ] At least one positive example (a piece that IS a meta-decision piece — e.g., P4.2 from `12-15`'s innovation.md, the relationship-declaration piece) is named and the procedure applied to it.
- [ ] At least one negative example (a piece that is NOT a meta-decision piece — e.g., P3.2 from `12-15`'s innovation.md, the classification-guidance piece) is named and the procedure applied to it.
- [ ] Edge cases (pieces that are ambiguous; pieces that mix meta-decision and content-production) are either resolved or explicitly flagged as out-of-scope.

### Q3 (P3: piece-level Inversion rule)

**Question:** What is the exact rule text for `/innovate` reference's refinement-note addition that requires Innovation to apply Inversion at piece-level when the piece is a meta-decision piece, given Q1's clarified reading and Q2's determination mechanism?

**Verification criteria:**
- [ ] The rule text is drafted as a refinement note at the appropriate `/innovate` reference section (likely §"Phase 2 Generate" or §3 Inversion).
- [ ] The rule's preconditions reference Q1's reading commitment and Q2's determination mechanism.
- [ ] The rule specifies what counts as compliance: at minimum, an Inversion-candidate is generated AND tested via the 5-test cycle.
- [ ] The rule's scope is bounded to meta-decision pieces (content-production pieces are explicitly excluded).
- [ ] The rule cross-references existing `/innovate` reference text (Coverage Strategy, Inversion mechanism's depth-check refinement, Phase 2 Generate's variations rule).
- [ ] The rule is testable: a future Innovation run can be evaluated as "rule applied" or "rule violated" against the rule's compliance criterion.

### Q4 (P4: failure-mode prevention refinements)

**Question:** What are the refined prevention rules for `/innovate` reference's §3 Early Frame Lock (extended to be mechanism-TYPE-aware) and §6 Survival Bias (extended to cover prior-step never-generate failure), each cross-referencing Q3's piece-level Inversion rule?

**Verification criteria:**
- [ ] §3 Early Frame Lock prevention text is extended: when the decision is at meta-level (relationship-label, framing semantic, lesson vocabulary), Inversion must be among the additional mechanisms applied. The extension cross-references Q3.
- [ ] §6 Survival Bias prevention text is extended: when the candidate set at a meta-decision piece contains only the "preserve / accept / continue" direction without the "reject / invert / discard" direction, the prior-step never-generate failure is operating. Recognition signal specified. The extension cross-references Q3.
- [ ] Both refinements are consistent with Q3's rule text (no contradictions; the prevention rules' recognition signals match Q3's compliance criterion).
- [ ] Existing prevention text is preserved where it applies (the refinement is additive, not replacement).

### Q5 (P5: telemetry extension)

**Question:** What extension to `/innovate` reference's §"Mechanism Coverage Telemetry" section makes per-piece mechanism distribution visible at output time, such that `12-15`'s case (Inversion applied to P3.2 but not to P4.2) would have been observably flagged?

**Verification criteria:**
- [ ] At least one new or refined telemetry field is specified that captures per-piece mechanism distribution.
- [ ] A FLAG condition is defined that matches Q3's rule scope: a meta-decision piece without an Inversion-mechanism applied at piece-level triggers FLAG.
- [ ] The PROCEED / FLAG / RE-RUN routing is specified: meta-decision-piece-without-Inversion → FLAG (not RE-RUN, since the runner can review and either repair the violation or override with rationale).
- [ ] The telemetry extension is consistent with Q3's compliance criterion and Q4's recognition signals (no field-naming drift across the three pieces).
- [ ] Applied retroactively to `12-15`'s case as a verification: would the extended telemetry have flagged the P4.2 piece? Expected: YES (the case is the diagnostic's motivating example).

---

## Step 5 — Interface Map (with Assumptions-Not-Data Check)

| Source piece | Target piece | Flow type | What flows (data) | What flows (assumption) |
|---|---|---|---|---|
| Q1 | Q3 | Prerequisite + data | The reading commitment ("expansive" with specific text) | Q3 assumes Q1 commits definitively, not merely "explored both readings" |
| Q2 | Q3 | Prerequisite + data | The determination procedure (operational specification) | Q3 assumes Q2's procedure is operationally usable by an LLM at runtime (not just describable) |
| Q1 | Q2 | Weak prerequisite | (none direct) | Q2 assumes Q1's reading is expansive (which is the load-bearing assumption Q2 builds on); if Q1 commits to strict, Q2's question changes |
| Q3 | Q4 | Prerequisite + data | The rule text + compliance criterion | Q4 assumes Q3's rule has a clear compliance criterion that Q4 can cross-reference; Q4 assumes the cross-reference structure is consistent with `/innovate` reference's existing cross-reference patterns |
| Q3 | Q5 | Prerequisite + data | The compliance criterion | Q5 assumes Q3 specifies what compliance looks like at observable level; Q5 assumes Q3's rule is testable from telemetry (not requiring sensemaking-level interpretation) |
| Q4 | Q5 | None | (none) | Q4 and Q5 are orthogonal — failure-mode refinements vs telemetry mechanics |
| Q3 → Q4, Q5 | Mutual assumption | (mutual) | (none) | Q4 and Q5 mutually assume they aren't redundant: Q4 names the failure mode (an interpretive label); Q5 surfaces the data (an observable). If Q4 only restates Q5 in failure-mode language, Q4 is duplicative. If Q5 only restates Q4 in data fields, Q5 is duplicative. Both are real if their work doesn't collapse. |

### Hidden coupling check (assumptions-not-data, per §5 refinement)

**Critical assumption surfaced:** Q3's compliance criterion is the single load-bearing interface. If Q3 returns a rule whose compliance is fuzzy ("Innovation should consider Inversion at meta-decision pieces"), then Q4's prevention refinements have nothing concrete to cross-reference and Q5's telemetry has nothing concrete to surface. The maintenance candidates' downstream usability depends on Q3's compliance criterion being **operationally clear** (an LLM can tell whether the rule was applied or not, given only the artifact).

**Hidden coupling risk #1:** Q3 might return a rule that's clear in spec-text but ambiguous in application. The diagnostic should explicitly demand: Q3's compliance criterion must be checkable at innovation.md artifact level (not requiring runtime LLM judgment beyond the artifact).

**Hidden coupling risk #2:** Q4 and Q5 both depend on Q3's "meta-decision piece" classification (via Q2). If Q2's determination mechanism is fuzzy, Q4's recognition signals and Q5's FLAG condition both inherit the fuzziness. The fuzziness propagates across pieces.

**Hidden coupling risk #3:** Q1's clarification could be made in a way that subtly changes the rest of §3 Inversion's existing text (e.g., the "What it misses" caveat about "Inversion is binary — it flips, but the interesting territory is often between the poles"). If Q1's text edit makes the spec internally inconsistent, the downstream pieces inherit a contradictory spec. Q1's verification criterion #4 ("internally consistent with §3 Inversion's existing 'How to apply' and 'What it misses' text") guards against this.

These three assumption-mediated couplings are not visible at the data-flow level but are load-bearing for downstream success. They are recorded here so the next discipline (innovation, then critique) can test for them.

---

## Step 6 — Dependency Order

### Order diagram

```
Q1 (definitional clarification) ──┐
                                  │
                                  ├─► Q3 (piece-level rule) ─┬─► Q4 (failure-mode refinements)
                                  │                          │
Q2 (determination mechanism) ─────┘                          └─► Q5 (telemetry extension)
```

### Phase ordering

**Phase 1 (parallel):** Q1 and Q2 — both prerequisites for Q3; mutually independent at the data level (Q2's question makes sense under either reading; Q1's commitment determines which version of Q2's question is "live"). Parallelizable, but Q2's answer is more useful once Q1 commits to expansive.

**Phase 2 (sequential):** Q3 — depends on Q1 and Q2.

**Phase 3 (parallel):** Q4 and Q5 — both depend on Q3; mutually independent.

**Critical path:** Q1 OR Q2 → Q3 → Q4 OR Q5. The critical path length is 3 phases. The slowest phase (likely Q3, since it's the load-bearing rule with multiple cross-references) dominates the total.

### Cross-phase coordination

- Q1 and Q2 should be answered before Q3 starts; if both Q1 and Q2 are in progress, Q3 should not begin until both interfaces are stable.
- Q4 and Q5 can both start as soon as Q3's compliance criterion is stable; they don't need Q3 to be fully drafted.
- No circular dependencies. No piece blocks its own prerequisite.

---

## Step 7 — Self-Evaluation

### Minimum 3-dimension check

**Independence.** Can each piece be worked on without the others existing?

| Piece | Independent given interfaces? | Notes |
|---|---|---|
| Q1 | YES | Answerable by reading `/innovate` reference §3 Inversion and proposing text edit. No dependency on other pieces. |
| Q2 | YES (with weak Q1 assumption) | Q2's question is "specify the determination mechanism for meta-decision piece"; answerable independently. Implicitly assumes the expansive reading; if Q1 commits to strict, Q2's question changes shape but the determination-mechanism work is still meaningful. |
| Q3 | YES (given Q1 + Q2 interfaces) | Q3 cannot start until Q1 + Q2 are stable, but once they are, Q3 is answerable in a focused pass. |
| Q4 | YES (given Q3 interface) | Failure-mode refinements are answerable in a focused pass once Q3's rule text is stable. |
| Q5 | YES (given Q3 interface) | Telemetry extension is answerable in a focused pass once Q3's compliance criterion is stable. |

PASS.

**Completeness.** Do the pieces cover the whole?

The whole = "Innovation-side maintenance candidates ready for innovation discipline to commit (next) and critique discipline to test (after)." Sensemaking's SV6 named three structural anchors + four maintenance paths, plus the Step 7 refinement note required a determination-mechanism piece.

| SV6 element | Covered by piece |
|---|---|
| Structural anchor 1: definitional ambiguity (strict vs expansive Inversion) | Q1 |
| Structural anchor 2: coverage-rule scope gap (per-seed only, telemetry blind to locus) | Q3 (the per-piece rule) + Q5 (the telemetry visibility) |
| Structural anchor 3: two failure-mode preventions don't catch this case | Q4 (both failure-mode refinements bundled) |
| P-Maintenance-A: piece-level Inversion required on meta-decision pieces | Q3 |
| P-Maintenance-B: Early Frame Lock refinement | Q4 (one half) |
| P-Maintenance-C: Survival Bias refinement | Q4 (other half) |
| P-Maintenance-D: telemetry per-piece visibility | Q5 |
| Step 7 refinement (Determination-mechanism piece check) | Q2 |

Full coverage of sensemaking's stabilized model + the determination-mechanism requirement. PASS.

**Reassembly.** Given all pieces answered, would the whole be solved?

Given:
- Q1 returns: a specific spec-text edit clarifying expansive Inversion-belief-per-piece reading.
- Q2 returns: an operationally-usable determination procedure for meta-decision piece.
- Q3 returns: a rule text with operational compliance criterion.
- Q4 returns: refined Early Frame Lock and Survival Bias prevention rules cross-referencing Q3.
- Q5 returns: telemetry extension with FLAG condition matching Q3.

Together: a coherent set of refinements to `/innovate` reference covering definitional, rule, failure-mode-recognition, and observability dimensions. The future redesign work can evaluate the candidate-set as a whole and decide what to commit. The downstream discipline (innovation, then critique) operates on the assembled candidate-set as its input.

Reassembly test specific to LOOP_DIAGNOSE goal: would the assembled candidate-set, if committed, have caused `12-15`'s Innovation to surface CORRECTS as a candidate at P4.2? Test by mental simulation:
- Q1's clarified reading: `12-15`'s Innovation would know Inversion applies per-piece.
- Q2's determination mechanism: `12-15`'s Innovation would identify P4.2 as a meta-decision piece (it commits a relationship-label).
- Q3's rule: `12-15`'s Innovation would apply Inversion at P4.2, generating "what if the prior is wrong at its level?" — the CORRECTS-candidate.
- Q4's refined preventions: even if Innovation accidentally skipped Q3's rule, the failure-mode recognition (Early Frame Lock mechanism-TYPE check; Survival Bias never-generate signal) would have flagged the omission.
- Q5's telemetry: the telemetry verdict would have FLAGGED `12-15`'s output instead of PROCEEDING.

The assembled candidate-set is structurally adequate to address the original case. PASS.

### Determination-mechanism piece check (per `/decompose` reference §Step 7 refinement)

**Concern:** The Q-tree's load-bearing concept "meta-decision piece" depends on a runtime determination (Innovation must identify it at execution time). The Q-tree MUST include a piece addressing HOW the determination is performed.

**Resolution:** Q2 IS that piece. Its verification criteria explicitly require operational checkability by an LLM at runtime, positive and negative examples, and edge-case handling. The Reassembly check fails (does not reconstruct the whole) without Q2 — a Q3 rule that says "apply Inversion at meta-decision pieces" without specifying how to identify them is unenforceable.

PASS.

### Full 7-dimension check (optional, applied here because the diagnostic is high-stakes downstream-input)

| Dimension | Score | Notes |
|---|---|---|
| Independence | PASS | All pieces answerable in focused passes given interfaces. |
| Completeness | PASS | All SV6 elements + determination-mechanism covered. |
| Reassembly | PASS | Assembled candidates would address `12-15`'s case mentally-simulated. |
| **Tractability** | PASS | Each piece is small enough for one focused pass (Q3 is largest but still tractable as a single spec-text-proposal task). |
| **Interface clarity** | PASS (with assumption-coupling flagged) | All interfaces named; data-flow + assumption-flow both surfaced. Three hidden-coupling risks flagged in Step 5 (Q3's compliance criterion fuzziness; Q2 propagation; Q1's internal-consistency risk). |
| **Balance** | MEDIUM | Q3 is the load-bearing piece (heaviest). Q1 and Q5 are lighter. Q2 and Q4 are medium. Slight imbalance, but the load-bearing piece is appropriately at the center of the dependency tree. |
| **Confidence** | HIGH for macro-partition; MEDIUM for Q2/Q3 split | Top-down (cluster analysis) and bottom-up (atomic-element grouping) agree on the macro-partition. Within Cluster-Core, Q2 (determination) and Q3 (rule) co-locate spatially in the spec but separate cleanly at the conceptual level; this is the lowest-confidence boundary in the partition. |

---

## Final Deliverable

### 1. Coupling Map

Six elements (Element-α through Element-D, plus Element-δ surfaced during decomposition). Three clusters identified:

- **Cluster-Core (high internal coupling):** Element-α (definitional clarification), Element-δ (determination mechanism), Element-A (piece-level Inversion rule).
- **Cluster-Propagation (high internal coupling at concept-level, low at spec-text-location):** Element-B (Early Frame Lock refinement), Element-C (Survival Bias refinement).
- **Cluster-Telemetry (single element):** Element-D (telemetry extension).

Inter-cluster coupling: Core → Propagation M-S (downstream); Core → Telemetry M (downstream); Propagation ⊥ Telemetry W (orthogonal).

### 2. Question Tree (5 pieces)

| # | Piece | Question | Element(s) |
|---|---|---|---|
| Q1 | Definitional clarification | What text edit to `/innovate` §3 Inversion commits to the expansive Inversion-belief-per-piece reading? | Element-α |
| Q2 | Determination mechanism | What runtime mechanism identifies "this piece is a meta-decision piece" operationally? | Element-δ |
| Q3 | Piece-level Inversion rule | What is the exact rule text requiring piece-level Inversion at meta-decision pieces? | Element-A |
| Q4 | Failure-mode prevention refinements | What are the refined Early Frame Lock and Survival Bias prevention rules cross-referencing Q3? | Element-B + Element-C bundled |
| Q5 | Telemetry extension | What telemetry extension surfaces per-piece mechanism distribution and flags violations of Q3? | Element-D |

Each Q has 4-6 verification criteria specified in Step 4 above.

### 3. Interface Map

| From | To | Flow type | Key data | Key assumption |
|---|---|---|---|---|
| Q1 | Q3 | Prerequisite | Reading commitment text | Q1 commits definitively |
| Q2 | Q3 | Prerequisite | Determination procedure | Procedure is operationally usable by LLM |
| Q3 | Q4 | Prerequisite | Rule text + compliance criterion | Compliance criterion is observable at artifact level |
| Q3 | Q5 | Prerequisite | Compliance criterion | Same |
| Q1 ↔ Q2 | (weak prerequisite) | (none data) | (none) | Q2 assumes expansive reading |
| Q4 ↔ Q5 | (none) | (none) | (none) | Q4 and Q5 mutually assume non-redundancy |

Three hidden-coupling risks flagged in Step 5 (assumption-mediated, not visible at data-flow level).

### 4. Dependency Order

```
Phase 1 (parallel):     Q1, Q2
Phase 2 (sequential):   Q3 (requires Q1 + Q2 stable)
Phase 3 (parallel):     Q4, Q5 (both require Q3 stable)
```

Critical path: 3 phases.

### 5. Self-Evaluation

| Dimension | Result |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS (mentally-simulated against `12-15` case) |
| Tractability | PASS |
| Interface clarity | PASS (with 3 assumption-coupling risks flagged for downstream attention) |
| Balance | MEDIUM (Q3 load-bearing-heavy by design) |
| Confidence | HIGH macro; MEDIUM at Q2/Q3 boundary |
| Determination-mechanism piece check | PASS (Q2 explicitly addresses it) |

Hard scope constraint check: all five pieces operate on `/innovate` reference only. No piece proposes changes to other-discipline references. PASS.

---

## Notes for Downstream Disciplines

**For Innovation (next):** Generate concrete candidate text for each of Q1-Q5. Apply the 5-test cycle per `/innovate` reference. The assembly-check is particularly important — the five pieces are designed to compose; the assembly must verify the composition is coherent (no contradictions, no field-naming drift, no fuzziness-propagation per the three hidden-coupling risks).

**For Critique (after):** The three hidden-coupling risks flagged in Step 5 are critique's adversarial-test focal points: (i) is Q3's compliance criterion fuzzy or operationally clear? (ii) does Q2's determination procedure produce stable classifications across pieces, or does fuzziness propagate to Q4 and Q5? (iii) does Q1's text edit preserve §3 Inversion's existing internal consistency? Additional adversarial-test focal points: false-positive risk on Q3's rule (does it fire on cases where REFINES is genuinely correct?) and false-positive risk on Q4's recognition signals (does it over-flag cases where single-direction candidate sets are legitimate?).

**For CONCLUDE (final):** The decomposition's five pieces should appear in the finding's structure as named sub-sections under "Maintenance Candidates" or similar. The hidden-coupling risks and the Q2/Q3 boundary's MEDIUM confidence should both appear in the finding's "Open Questions" or "Refinement Triggers" sections — they are observable conditions that could trigger re-decomposition.
