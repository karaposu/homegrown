# Decomposition — The Outcome Substrate Cluster

## User Input

`/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-17_22-12__endgame_elephant_missing_piece/_branch.md`

Context: Decomposition phase. Read `_branch.md`, `exploration.md`, `sensemaking.md`. Sensemaking stabilized on "the outcome substrate" as the dominant elephant. The substrate is a *cluster*: external grounding source + outcome attribution + outcome aggregation + materialization-as-precondition + human-bridge-role. Decompose into independent pieces with interfaces and dependency ordering. Determine: does this cluster have a TRUE single leverage center, or is the elephant irreducibly multi-part?

---

## Step 1 — Perceive Coupling Topology

### Elements within the outcome substrate

After consuming sensemaking's output, the substrate decomposes into ten elements:

| ID | Element | Description |
|---|---|---|
| E1 | External grounding source | The *what* of calibration — the domain whose outcomes are scorable (math? code? prediction markets? cross-AI consensus?) |
| E2 | Domain wiring | *How* a discipline's output is converted into the form the grounding source consumes (input contract; finding-to-benchmark adapter) |
| E3 | Scoring function | *What counts as correct* in the grounding domain (binary pass/fail? gradient? probability calibration?) |
| E4 | Outcome capture | *How* the score returns to the system (storage format, latency handling) |
| E5 | Outcome attribution | *Which* spec edit / discipline-run / prompt-version caused this observed outcome |
| E6 | Outcome aggregation | *How* many outcomes turn into a calibration signal (N≥30 statistics; confidence intervals) |
| E7 | Materialization-as-precondition | Findings must turn into traceable spec changes for attribution to have anchors — wired via the existing `artifact_materialization.md` protocol |
| E8 | Human-bridge role | The human's transition from "the calibrator" at L0 to "absent" at L4+; phase-by-phase role design |
| E9 | Calibration anchor selection | *How* the project chooses E1 in a non-arbitrary way (this is the meta-step; the algorithm that picks the domain) |
| E10 | Calibration signal → spec edit | *How* an aggregated signal becomes a candidate spec change (Retrospective RC's actual output mechanism) |

### Pairwise coupling assessment

For each load-bearing pair, ask: "If I change A, does B need to change?"

| Pair | Coupling | Reasoning |
|---|---|---|
| E1 ↔ E3 | **STRONG** | The grounding source and its scoring function are inseparable. Picking math means scoring proofs; picking code means scoring execution outcomes. Change the source → must redesign scoring. |
| E1 ↔ E2 | **STRONG** | The wiring is source-specific. Math domain has a different input contract than code-execution. |
| E1 ↔ E9 | **STRONG** | The selection algorithm produces E1 as its output. Designing E9 *is* designing how E1 is chosen. |
| E2 ↔ E3 | **MODERATE** | The wiring needs to know the score type but not how it's produced. Score *format* is shared. |
| E4 ↔ E5 | **STRONG** | Capturing the outcome WITHOUT attribution loses the cause-of-outcome signal. Effectively one operation: capture-with-attribution. |
| E5 ↔ E7 | **STRONG** | Attribution to spec edits requires materialization to have produced traceable edits. Without materialization, attribution has nothing to attribute to. |
| E6 ↔ E4 | **MODERATE** | Aggregation depends on captures being clean; format coupling. |
| E6 ↔ E5 | **MODERATE** | Aggregation depends on attribution being clean; can statistically tolerate some attribution noise. |
| E10 ↔ E6 | **STRONG** | The signal-to-spec-edit step consumes aggregated outcomes; same conceptual operation, different stage. |
| E10 ↔ E7 | **MODERATE** | Edits feed back into next-cycle materialization. Loop-closure dependency. |
| E8 ↔ {everything} | **WEAK-DIFFUSE** | The human-bridge role couples temporally (across autonomy phases) to all other elements, but at any single time point the coupling is light. Different shape from the others. |

### Cluster identification

Three coupling peaks and one orthogonal-temporal layer emerge:

```
                ┌──────────────────────────────────┐
                │ Peak 1 — GROUNDING SOURCE        │
                │ E1, E2, E3, E9                   │
                │ "What do we calibrate against?"  │
                └─────────────┬────────────────────┘
                              │ (scored outcomes — Boundary B1)
                              ▼
                ┌──────────────────────────────────┐
                │ Peak 2 — OUTCOME CAPTURE         │
                │ E4, E5, E7                       │
                │ "How does scoring come back      │
                │  attributable?"                  │
                └─────────────┬────────────────────┘
                              │ (attributed records — Boundary B2)
                              ▼
                ┌──────────────────────────────────┐
                │ Peak 3 — CALIBRATION SIGNAL      │
                │ E6, E10                          │
                │ "How does signal become          │
                │  a spec edit?"                   │
                └──────────────────────────────────┘

   ──────────────  E8 — HUMAN BRIDGE (orthogonal-temporal) ──────────────
          spans all three peaks across autonomy phases
```

### Valleys (low-coupling regions = natural boundaries)

- **B1** between Peak 1 and Peak 2: what crosses is a *scored outcome record*. Single-point boundary at the score-emission step.
- **B2** between Peak 2 and Peak 3: what crosses is an *attributed outcome record*. Single-point boundary at the records-storage step.
- **B3** between Peaks 1-3 and the Human-Bridge layer (E8): the bridge couples *temporally* across phases, not *structurally* to specific peaks. Cleaner to treat E8 as a meta-piece that overlays the others.

---

## Step 2 — Detect Boundaries (Top-Down)

From the coupling map, four pieces emerge:

- **P1 — Grounding Source** (E1, E2, E3, E9): the *what-do-we-calibrate-against* piece.
- **P2 — Outcome Capture & Attribution** (E4, E5, E7): the *how-do-outcomes-return-attributable* piece.
- **P3 — Calibration Signal & Spec Refinement** (E6, E10): the *how-does-signal-become-spec-edit* piece.
- **P4 — Human-Bridge Design** (E8): the orthogonal-temporal piece spanning autonomy phases.

Boundary characteristics:

| Boundary | Type | Crossing traffic | Clarity |
|---|---|---|---|
| B1 (P1 → P2) | single-point | scored outcome records | clear |
| B2 (P2 → P3) | single-point | attributed records | clear |
| B3 (P4 ↔ all) | diffuse-temporal | role definitions per phase | clear at phase boundaries, diffuse between |

---

## Step 3 — Validate Boundaries (Bottom-Up Check)

Identify atoms (clearly indivisible elements) and check they group with the top-down clusters.

| Atom | Description | Should belong to |
|---|---|---|
| A1 | "Math problem from a benchmark dataset" | P1 ✓ |
| A2 | "Score returned by automatic proof-verifier" | P1 ✓ |
| A3 | "Adapter that converts a /MVL+ finding into a benchmark-domain prompt" | P1 ✓ |
| A4 | "Record: 'inquiry X led to spec edit Y, which produced outcome Z on benchmark B at time T2'" | P2 ✓ |
| A5 | "Attribution: this score is best-explained by the spec edit made on date D, controlling for prompt-hash and model-version" | P2 ✓ |
| A6 | "Storage decision: outcome records live in `devdocs/outcomes/<inquiry_id>/`" | P2 ✓ |
| A7 | "Aggregation: 30 records say spec edit Y improved score on B by 0.05 ± 0.02" | P3 ✓ |
| A8 | "Spec edit proposal: 'add step Q to discipline R, based on aggregated signal'" | P3 ✓ |
| A9 | "Selection algorithm: choose calibration domain based on (criterion-set, domain-availability, scoring-objectivity)" | P1 ✓ |
| A10 | "Per-phase role: at L1, human reviews every proposal; at L3, system auto-applies above confidence threshold" | P4 ✓ |
| A11 | "Reversibility: if external anchor's signal produces drift, re-route to human review for 30 days" | P4 ✓ |

All atoms group cleanly with their top-down piece. **HIGH CONFIDENCE on the four-piece partition.**

One judgment call worth flagging: A9 (selection algorithm). It could be its own piece ("how does the project choose its calibration anchor?") rather than a sub-component of P1. The reading "P1 includes selection" is supported because selection produces E1 as its output, tightly coupling them. The reading "selection is separate" is supported because selection happens once project-wide while wiring happens per discipline. I've kept it in P1 to preserve cluster coherence; this is the candidate for recursive decomposition (DV2) if P1 turns out to be tractability-imbalanced.

---

## Step 4 — Express as Question Tree

### Q1 — Piece P1 — Grounding Source

> **What external domain should serve as Homegrown's calibration anchor, and how do discipline outputs get scored against it?**

Verification criteria:
- [ ] At least one specific calibration domain identified with structural justification (e.g., math proofs, code execution outcomes, prediction-market resolution, scientific replication, multi-AI cross-comparison, longitudinal user-decision quality).
- [ ] The selection algorithm specified: how/why this domain, not arbitrary — including how additional domains might be added later.
- [ ] A scoring function defined: for an arbitrary discipline output (e.g., a finding from `/MVL+`), what number/category does the domain produce?
- [ ] Wiring contract defined: which inputs from a finding does the domain consume, and what's the output shape?
- [ ] Failure mode named: what does the system do when a discipline's output doesn't map onto the grounding domain (out-of-distribution)?

### Q2 — Piece P2 — Outcome Capture & Attribution

> **How does the system capture scored outcomes from the grounding domain and attribute each outcome to the specific spec edit / discipline run that produced it?**

Verification criteria:
- [ ] Outcome record schema defined: minimum fields include `inquiry_id`, `discipline_run_id`, `spec_version`, `prompt_hash`, `finding_id`, `outcome_score`, `outcome_timestamp`.
- [ ] Attribution path from outcome → cause specified, including how multiple-edit interference is handled (controlled-experiment regime? observational with confounder controls? both?).
- [ ] Storage location decided (per-inquiry folder? separate outcomes database? git-tracked? external store?).
- [ ] Latency handled: the T0/T2+ asymmetry — outcomes arrive later than findings; outcome records must be appendable to past inquiries.
- [ ] Materialization precondition explicit: outcome records reference materialized changes, so materialization (per `artifact_materialization.md`) must be wired before P2 produces meaningful records.

### Q3 — Piece P3 — Calibration Signal & Spec Refinement

> **How does the system aggregate many attributed outcomes into a calibration signal, and how does that signal become a proposed spec edit?**

Verification criteria:
- [ ] Aggregation method specified: the N≥30 per-discipline threshold; statistical model (mean shift? Bayesian update?); confidence intervals.
- [ ] Calibration delta metric defined: what counts as "Predictive RC was right" vs "wrong" given a Retrospective outcome?
- [ ] Spec-edit proposal generator: from "consistent miscalibration on dimension X," produce a candidate spec change to dimension X.
- [ ] Proposal review path specified per autonomy level (L0: human reviews all; L3: auto-apply above confidence threshold; etc.).
- [ ] Loop closure verified: edits feed back into next-cycle materialization → outcomes → calibration. No dead-ends.

### Q4 — Piece P4 — Human-Bridge Design

> **How does the human's role transition over the autonomy ladder from "the calibrator" at L0 to "absent" at L4+, and what handoff to the external calibration anchor occurs along the way?**

Verification criteria:
- [ ] Per-level role specification: at each L0-L4+, what is the human's relationship to the calibration anchor?
- [ ] Bridge mechanism specified: how do the human's labels at L0 train / seed / handoff to the external anchor's signal? Is the human's role to *select the anchor* (P1's selection)? To *validate the wiring*? To *audit attributions*? To *vet spec proposals*?
- [ ] Phase-out criteria: what calibration evidence (volume, agreement rate, drift detection) justifies reducing the human's role at each transition?
- [ ] Reversibility: if the external anchor produces drift, can the human re-enter the loop? Is there a watchdog mechanism?
- [ ] Eliminate "implicit human" risks: at L3+, what protects against the human's preferences leaking in through other channels (prompt design, default-spec authoring, choice-of-grounding-domain)?

---

## Step 5 — Map Interfaces

With the **assumptions-not-data check** applied per Step 5 refinement.

### Interface I1: P1 → P2

| Field | Value |
|---|---|
| **What flows** | Scored outcome records — minimum `(finding_id, score, score_metadata)` per finding evaluated |
| **Direction** | One-way (P1 produces, P2 consumes) |
| **Type** | Data + dependency |
| **Assumptions P2 makes about P1** | (a) Scores are comparable across runs (calibrated scoring function over time); (b) the score's units are stable; (c) outcomes arrive within a bounded latency window so P2 doesn't accumulate orphan records; (d) the score's domain-of-validity is declared per outcome (so P2 knows when not to attribute). |
| **Hidden-coupling risk** | If P1 ever changes its scoring function (e.g., switches from binary pass/fail to gradient score), P2's attribution math breaks even though no data field changed. The scoring function's STABILITY is a hidden coupling. |

### Interface I2: P2 → P3

| Field | Value |
|---|---|
| **What flows** | Attributed outcome records — `(finding_id, spec_version, prompt_hash, model_version, score, timestamp, attribution_chain)` |
| **Direction** | One-way |
| **Type** | Data + prerequisite |
| **Assumptions P3 makes about P2** | (a) Attribution is reliable — the spec edit caused the outcome, not coincidence; (b) records are timestamped consistently across `inquiry_id`s; (c) attribution_chain handles multi-edit interference; (d) attribution noise is unbiased (random error, not systematic). |
| **Hidden-coupling risk** | If P2's attribution method has systematic bias (e.g., always attributing improvement to the most-recent edit), P3 will calibrate to the bias, not to truth. The lack-of-bias assumption is unstated. |

### Interface I3: P3 → P2 (loop-back)

| Field | Value |
|---|---|
| **What flows** | New spec versions resulting from P3's spec-edit proposals being applied. These change the substrate's future behavior. |
| **Direction** | One-way (P3 proposes, materialization applies, P2 ingests as new spec version going forward) |
| **Type** | Dependency |
| **Assumptions** | Spec changes are versioned with a stable identifier; old outcomes remain attributable to old spec versions (immutability of attribution targets). |
| **Hidden-coupling risk** | Spec versioning bridges multiple disciplines. If discipline A's spec change indirectly affects discipline B's prompt context, attribution becomes cross-discipline. |

### Interface I4: P3 → Materialization (external)

| Field | Value |
|---|---|
| **What flows** | Spec-edit proposals to actual changed spec files |
| **Direction** | One-way (P3 produces, `artifact_materialization.md` consumes) |
| **Type** | Dependency |
| **Assumptions** | Materialization protocol handles risk-class gating; proposals are auditable; reversal path exists if the proposal turns out to harm calibration. |
| **Hidden-coupling risk** | Materialization is currently *not wired as default post-finding*; this is itself a Family II gap. Until materialization is default-wired, P3 outputs have nowhere to go. |

### Interface I5: P4 ↔ {P1, P2, P3}

| Field | Value |
|---|---|
| **What flows** | Role definitions at each autonomy level (P4 → others); phase-transition evidence (others → P4) |
| **Direction** | Bidirectional |
| **Type** | Decision + assumption |
| **Assumptions** | (a) Phase transitions are evidence-gated, not time-gated; (b) the human's "review" remains substantive across phases (doesn't degrade into rubber-stamping); (c) if any piece's calibration evidence is thin, P4 keeps the human active longer. |
| **Hidden-coupling risk** | If P4's role definitions are vague at L1-L2 transitions, the human's "review" can degrade into tacit rubber-stamping without anyone noticing — the calibration signal then becomes contaminated by the human's implicit acceptance rather than independent judgment. The substantive-vs-rubber-stamp distinction is the hidden coupling. |

---

## Step 6 — Order by Dependency

**Linear chain (with parallel for P4):**

```
[Materialization wiring]
       │ (external precondition, Family II)
       ▼
   P1 ──────► P2 ──────► P3
                              │
                              ▼
                       [back to materialization → P2 next cycle]

   P4 (parallel) ←──────────────────►  designs phases over autonomy ladder
                                       informs all three peaks
```

**Dependency order with rationale:**

1. **Materialization wiring** (external — Family II in README2) — *must be done first* as the precondition for P2's traceable spec edits. Without it, P2 has no anchor points for attribution.

2. **P1 — Grounding Source** — *the elephant's leverage point*. Must be designed before P2 because P2's record schema depends on what P1 emits. The selection algorithm + the chosen domain + the scoring function must all settle before P2 can be specified.

3. **P2 — Outcome Capture & Attribution** — depends on P1 (record format) and on materialization (attribution anchors).

4. **P3 — Calibration Signal & Spec Refinement** — depends on P2 (record availability).

5. **P4 — Human-Bridge Design** — **parallel** to P1/P2/P3. Conceptual design can happen alongside the substrate's build. P4 *needs to inform* the others' role design but doesn't *depend on* their existence.

**No circular dependencies.** The loop-back interface I3 is between *runs*, not within a single build; it doesn't induce a circular build order.

---

## Step 7 — Self-Evaluation

### Minimum 3 dimensions (always run)

| Dimension | Check | Verdict |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | **PASS** — P1 can be designed without P2's machinery (you can specify a calibration domain abstractly). P2 can be specified given P1's scoring contract. P3 can be specified given P2's record schema. P4 overlays the others and is independent. |
| **Completeness** | Do pieces cover the whole "outcome substrate"? | **PASS** — substrate elements E1-E10 map onto the four pieces (E1-E3, E9 → P1; E4, E5, E7 → P2; E6, E10 → P3; E8 → P4). Materialization (E7's external precondition) is handled in dependency ordering rather than as a piece. |
| **Reassembly** | Pieces + interfaces = whole? | **PASS** — given P1 produces scored outcomes, P2 captures+attributes, P3 aggregates+proposes, P4 governs phase transitions, and materialization closes the loop back — the Baldwin cycle's outcome substrate is reconstructed. |

### Full 7 dimensions

| Dimension | Check | Verdict |
|---|---|---|
| Independence | (as above) | PASS |
| Completeness | (as above) | PASS |
| Reassembly | (as above) | PASS |
| **Tractability** | Each piece small enough for a single focused pass? | **MIXED — P1 may need DV2.** P1 contains four sub-questions (domain selection, scoring function, wiring, selection algorithm). The other pieces are each tractable in one focused pass. P1's tractability gap is acceptable at this level (it IS the elephant's leverage center) but signals DV2 if execution exposes it. |
| **Interface clarity** | All cross-piece flows explicit? No hidden dependencies? | **PASS** — 5 interfaces fully specified with directions, types, *and* hidden-coupling risks named (scoring-function stability for I1; attribution-bias for I2; spec-versioning for I3; materialization-wiring for I4; substantive-vs-rubber-stamp for I5). |
| **Balance** | Is complexity proportional? | **PARTIAL — P1 is the heaviest by design.** P1 carries the highest leverage; balancing would obscure the lever. Acceptable because sensemaking already identified P1's leverage center; the imbalance reflects the underlying structure, not a decomposition flaw. |
| **Confidence** | Top-down + bottom-up agreement? | **PASS** — atoms grouped cleanly with the top-down map. Only judgment call: whether "selection algorithm" (E9) belongs in P1 or as a separate piece. Both readings work; chose to keep in P1 to preserve cluster coherence and flagged as DV2 candidate. |

### Determination-mechanism piece check (Step 7 refinement)

The Q-tree includes "the grounding domain" as a load-bearing concept whose use depends on runtime determination — *which domain calibrates THIS discipline at THIS phase*. The Q-tree explicitly includes P1's verification criterion #2 ("the selection algorithm specified") which addresses the determination mechanism. **PASS.**

### Failure-mode checks

- **Premature decomposition?** Sensemaking completed before decomposition; the whole was understood. ✓ Avoided.
- **Wrong boundaries?** Interfaces are single-point (I1, I2, I3, I4) or temporal-orthogonal (I5). Low traffic across boundaries. ✓ Avoided.
- **Hidden coupling?** Five hidden-coupling risks named in the interface map. Not avoided — *surfaced* (which is the corrective).
- **Missing pieces?** Completeness passes; materialization handled as external precondition rather than missed. Determination-mechanism check passes. ✓ Avoided.
- **Over-decomposition?** Four pieces for a complex substrate. P1 may need DV2 but four at this level is right-sized. ✓ Avoided.
- **Ignoring dependencies?** Explicit order: P1 → P2 → P3; P4 parallel; materialization as upstream precondition. ✓ Avoided.
- **Imbalanced decomposition?** P1 is heaviest, acknowledged as the lever. Acceptable per sensemaking's leverage finding. ✓ Acknowledged, not avoided.

---

## Answer to the user-question-shaped subquestion

The input asks: *does this cluster have a TRUE single leverage center, or is the elephant irreducibly multi-part?*

**Verdict: the cluster has a TRUE single leverage center at P1 (the Grounding Source).**

Rationale:
- Without P1, P2 has nothing to capture, P3 has nothing to aggregate, P4 has nothing to handoff to.
- P1 is upstream of every other piece's *usefulness*. The others are real but downstream.
- The dependency order places P1 immediately after materialization wiring and before everything else inside the substrate.
- The leverage concentration matches sensemaking's verdict: the calibration anchor is the elephant.

**Within P1, the hottest sub-point is the *selection algorithm* (E9 / A9 / verification criterion #2 of Q1):** *how does the project pick its calibration domain in a non-arbitrary way?* This is the meta-question that gates everything below. A poorly-chosen domain produces a calibrated machine pointing at the wrong target.

So:
- At the level of the user's question ("what's the elephant?"): **the Grounding Source (P1)** — i.e., the external calibration anchor and its scoring function.
- At the level of one finer (P1's leverage center): **the selection algorithm** for choosing the anchor.

The elephant is reducible to a single piece, but the piece itself is rich enough that pinning the leverage to its hottest sub-point is useful for downstream work.

---

## Open hand-offs to Innovation and Critique

**For Innovation:**
- Generate candidate calibration domains across the seven mechanisms (lens shifting, combination, inversion, constraint manipulation, absence recognition, domain transfer, extrapolation).
- Specifically: what are the obvious calibration domains the project would consider first? What are the non-obvious ones? Are there novel combinations (multi-domain, weighted-ensemble)?
- Generate candidate selection algorithms for choosing among domains.

**For Critique:**
- Test the verdict "P1 is the leverage center" against the strongest counter-arguments. The most dangerous counter is: P1 is unsolvable because no external grounding domain genuinely tests *cognitive harness* outputs (markdown findings about how to think). If this counter holds on structural grounds, the elephant's "solution" is no-solution, which changes the verdict.
- Evaluate candidate calibration domains generated by Innovation against fitness dimensions: scoring-objectivity, attribution-tractability, signal-density-vs-time, generalizability across disciplines, and the *bet-falsifiability* dimension (does this domain let "structure-of-thinking" be tested?).
- Verdict on whether the elephant should be answered at the P1 level or at the selection-algorithm level (single piece vs. its hottest sub-point).
