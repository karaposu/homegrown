# Exploration — Self-Improvement Rate (Conceptual Territory + Measurable Dimensions)

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_00-07__self_improvement_rate_measurable_questions/_branch.md

Save output as `exploration.md` in the same inquiry folder.

Mode: blended.
- Artifact mode: read the load-bearing source files listed in the _branch.md's Source Territory.
- Possibility mode: the territory of "underlying dimensions of self-improvement rate" is conceptual. The user gave two seed dimensions (fix latency, convergence efficiency); the exploration must surface the OTHER underlying dimensions.

Entry point: signal-first. Probe the user's two seeds against the source texts AND scan for other dimensions.

Cross-reference with the neighbor concepts the _branch.md flagged: task-completion rate, capability growth, quality improvement, learning rate, convergence speed. Map the conceptual boundaries.
```

---

## Territory Overview

**Mode.** Blended.
- *Artifact mode:* what do the project's load-bearing texts commit to regarding self-improvement rate?
- *Possibility mode:* what are the underlying dimensions a ~15-question operationalization should span?

**Entry point.** Signal-first. Two user-seed dimensions probed; other dimensions surfaced by completeness-first scan of the source texts.

**Regions.** Four regions, each mapping a distinct aspect of the territory:

| Region | What it covers | Resolution |
|---|---|---|
| **A. What self-improvement rate IS (project commitments)** | The canonical definition from `enes/desc.md` + how the Baldwin cycle operationalizes it + the three-layer quality-awareness substrate | high — texts are explicit |
| **B. What self-improvement rate INCLUDES** | The phenomena the concept covers (cycle count, per-cycle quality, net improvement, calibration maturity, etc.) | high |
| **C. What self-improvement rate EXCLUDES (boundary against neighbors)** | Neighbor concepts and how they differ (task-completion rate, capability growth, quality improvement, learning rate, convergence speed, inquiry rate) | medium-high |
| **D. Measurable dimensions** | The underlying axes that a ~15-question operationalization will span | medium (possibility mode; some dimensions are clear, others speculative) |

---

## Inventory

### Region A — What self-improvement rate IS (project commitments)

**A1. The canonical formula.** *Source:* `enes/desc.md` "Primary Measured Objective." Direct quote: *"Self-improvement rate: Baldwin cycles × quality per cycle. Task completion is the grounding signal for quality — a self-improvement that doesn't help the system solve problems isn't improvement. But the terminal aim isn't task completion alone; it's the rate at which the system's ability to complete tasks IMPROVES. This distinguishes this system from task-executing agents."* **Confidence:** confirmed. The project commits to a COMPOSITE metric: count × quality, with task completion as a grounding signal but not the target.

**A2. The Baldwin cycle as the unit.** *Source:* `enes/desc.md` "The Evolutionary Mechanism." A Baldwin cycle is six phases: *run problem → observe → detect pattern → propose change → evaluate → encode into spec.* Self-improvement rate counts these cycles weighted by per-cycle quality. Each cycle has a substrate: Predictive RC at T0 + Retrospective RC at T2+ + the delta becomes calibration data + consistent miscalibration patterns become seeds. **Confidence:** confirmed.

**A3. The three-layer quality awareness as enabling substrate.** *Source:* `enes/evolving_quality_assetment_component.md`. The Baldwin cycle cannot close until both Predictive RC and Retrospective RC exist as **system capabilities** (not human-provided). Today the human is all three layers. **Implication for measurement:** at Level 0, self-improvement rate is human-paced; only post-/intuit and post-Retrospective-RC-maturity does the rate become a property of the system itself.

**A4. The regression-vs-improvement asymmetry.** *Source:* `enes/evolving_quality_assetment_component.md` ("at the core right now we are concerned most about Regression Detection. Regression can be measured more easily compare to improvement") and `enes/regression/desc.md` ("Below this threshold, the self-improvement loop becomes a self-degradation loop"). **Improvement detection is structurally harder than regression detection.** The net rate (improvement minus regression) matters more than the gross. **Confidence:** confirmed at the spec level.

**A5. The discipline-type asymmetry.** *Source:* `enes/regression/desc.md` distinguishes *mechanistic disciplines* (Comprehend, Exploration, Decomposition — quality is measurable: predictive accuracy, coverage, structure) from *meaning-producing disciplines* (Sensemaking, Innovation — quality is judgment-only). Self-improvement rate's measurability is itself asymmetric across the discipline space. **Confidence:** confirmed.

**A6. The meaningful-traversal substrate as a precondition.** *Source:* `enes/what_is_meaningful_traversal.md` §3 ("Self-improvement... presupposes a metric for traversal quality. If meaningful traversal isn't operationalized, the self-improvement loop has nothing to optimize against"). Self-improvement rate is downstream of distinguishing *thinking* from *spinning*. **Confidence:** confirmed but the substrate itself is acknowledged-fuzzy.

**A7. The "failure modes are clearer than success metric" principle.** *Source:* `enes/what_is_meaningful_traversal.md` ("the failure modes are clearer than the success metric. We can identify when a traversal isn't meaningful... more easily than we can define when it is. That's true for many quality concepts and may be permanent"). **Implication for the ~15 questions:** they should probably include questions about ABSENCE-of-failure (no regression detected, no spinning detected, no mode-collapse) as a proxy for presence-of-improvement, since the absence is more reliably observable.

### Region B — What self-improvement rate INCLUDES

Surfaced from the source texts plus completeness scan:

**B1. Cycle count.** How many Baldwin cycles have completed in a given period? Per `desc.md`'s formula, the count is one of two factors.

**B2. Per-cycle quality.** How much capability was gained per cycle? The other factor in `desc.md`'s formula. **Sub-issue:** quality is itself judgment-based for meaning-producing disciplines, measurement-based for mechanistic disciplines.

**B3. Task-completion-ability delta.** The DERIVATIVE of capability-to-complete-tasks over time. Per `desc.md`: "the rate at which the system's ability to complete tasks IMPROVES." Not task-completion-rate itself; its rate of change.

**B4. Quality-awareness layer maturation.** Improvements to the three RC layers themselves are self-improvements. The system's ability to *detect its own quality* growing is a self-improvement, even if no specific output got better. Per `enes/evolving_quality_assetment_component.md`.

**B5. Regression-rate offset.** Net improvement = gross improvement − regression. Per `enes/regression/desc.md`: "below this threshold, the self-improvement loop becomes a self-degradation loop." A measurement system that doesn't subtract regression overstates self-improvement.

**B6. Calibration depth per discipline.** Per `enes/thinking_space_dynamics.md`: seed-generation activates at N ≥ 30 per discipline. Disciplines below threshold can't contribute calibrated improvements. **Calibration maturity is a precondition for measurable self-improvement on a given discipline.**

**B7. Cross-discipline transfer.** When an improvement to one discipline (e.g., /intuit's predicate vocabulary) cascades into improvements at downstream consumers (e.g., /innovate's seed quality), the improvement amplifies. Not yet operational; named in `desc.md`'s Open Questions.

**B8. Retention / durability of improvements.** Does an improvement *stay* after subsequent cycles, or get reverted by drift? Per the "evaluation drift" failure mode in `homegrown/td-critique/references/td-critique.md` and "slow drift" symptom-type 5 in `enes/regression/desc.md`.

**B9. Detection-to-correction latency.** *User-given seed dimension 1.* Time between observation of "this needs to improve" and the encoded spec change. Has structural sub-parts: detection-speed, diagnosis-speed, proposal-speed, evaluation-speed, encoding-speed (the 6 Baldwin-cycle phases each have a duration).

**B10. Convergence efficiency.** *User-given seed dimension 2.* How many attempts per successful improvement? A correction chain (weak prior output → human correction → improved later output, per `homegrown/protocols/loop_diagnose.md`) is one attempt; how many such chains terminate in successful improvement vs in giving up?

### Region C — What self-improvement rate EXCLUDES (neighbor concepts)

Boundary work: each neighbor concept overlaps with self-improvement rate in some respect but is structurally distinct.

**C1. Task-completion rate.** How many problems the system solves per unit time. *Overlap:* task completion is the GROUNDING SIGNAL for self-improvement quality (per `desc.md`). *Difference:* self-improvement rate is the DERIVATIVE of task-completion ability, not the level. A system can have high task-completion rate without improving (steady state) or improve without raising task-completion rate (gaining ability for harder tasks not yet attempted).

**C2. Capability growth.** Increase in the kinds of problems the system can handle. *Overlap:* the TARGET of self-improvement rate is capability growth. *Difference:* capability can grow from sources other than self-improvement — substrate-takeover (per `enes/thinking_space_dynamics.md` §2.4), human-authored spec edits, acquisition of new disciplines. Self-improvement rate tracks capability growth *attributable to the system's own self-modification.*

**C3. Quality improvement.** Better output on a fixed task class. *Overlap:* when quality improvement is due to spec refinement (a Baldwin-cycle outcome), it IS a self-improvement. *Difference:* quality can improve through variance reduction (the same spec produces less-variable output as the LLM substrate updates) or through stochastic luck (a one-off good run). Neither is self-improvement.

**C4. Learning rate (ML sense).** Gradient descent step size; weights update per training iteration. *Overlap:* the metaphorical Baldwin cycle has analogous structure (predict → observe → update). *Difference:* the harness doesn't train weights; the LLM substrate is fixed during operation. "Learning rate" in the ML sense is not a property of the harness at all. Self-improvement rate is structurally analogous but operates at the SPEC level, not the weight level.

**C5. Convergence speed (per-inquiry).** How fast a single `/MVL+` run reaches a finding. *Overlap:* internal to discipline runs; appears as telemetry in each discipline's self-assessment. *Difference:* convergence speed is a PER-RUN metric (inside one inquiry); self-improvement rate is a CROSS-RUN metric (across many inquiries over time).

**C6. Inquiry rate.** How many `/MVL+` runs the project completes per unit time. *Overlap:* a necessary substrate (no inquiries = no Baldwin cycles, no calibration data, no self-improvement). *Difference:* the count of inquiries says nothing about whether any of them produced improvements. Inquiry rate is the floor; self-improvement rate is the signal above the floor.

**C7. Throughput / efficiency.** How fast the system answers any given question. *Difference:* self-improvement rate is about the system getting better at the SAME inputs over time, not getting faster.

### Region D — Measurable dimensions (the axes the ~15 questions will span)

Surfaced via completeness-first scan: obvious dimensions first, novel ones after. Each dimension is a CANDIDATE — Sensemaking will collapse redundancies and Decomposition will commit the final question tree.

**Obvious (high confidence, named in source texts or user-given):**

- **D-1. Cycle count.** How many Baldwin cycles in a period. *(per B1)*
- **D-2. Per-cycle quality.** Capability gained per cycle. *(per B2)*
- **D-3. Detection-to-correction latency.** Time from observed need to encoded fix. *(user seed 1, per B9)*
- **D-4. Convergence efficiency.** Attempts per successful improvement. *(user seed 2, per B10)*
- **D-5. Regression-rate offset.** Net improvement = gross improvement − regression. *(per B5)*
- **D-6. Calibration maturity coverage.** What fraction of disciplines have reached N≥30? *(per B6)*
- **D-7. Discipline-type coverage.** Is self-improvement happening across mechanistic + meaning-producing disciplines, or skewed? *(per A5)*
- **D-8. Retention / durability.** Do improvements stick across subsequent cycles? *(per B8)*

**Novel (medium confidence, surfaced by completeness scan):**

- **D-9. Self-detection vs human-flagged ratio.** What fraction of improvements were *system-detected* vs *human-flagged*? This dimension graduates across the autonomy ladder; at L0 the ratio is 0, at L4+ the ratio approaches 1.
- **D-10. Severity-triage capability.** Does the system prioritize HIGH-severity issues over LOW-severity ones? Per the regression symptom catalog's severity field (LOW / MEDIUM / HIGH / CRITICAL).
- **D-11. Meaningful-vs-spinning ratio.** What fraction of cycles produce actual improvement vs cycle without forward movement? Substrate for B6's calibration maturity and a precondition for D-1 / D-2.
- **D-12. Cross-discipline transfer rate.** Do improvements in one discipline cascade to consumers downstream? *(per B7)*
- **D-13. Cost per improvement.** Context budget, time, or human effort expended per successful spec change. Resource-efficiency dimension; tracks whether self-improvement is scaling sublinearly.
- **D-14. Recursive improvement.** Can the system improve its own improvement mechanism (e.g., refining /intuit's own spec)? Meta-level dimension; harder to measure but structurally distinct from object-level improvement.
- **D-15. Absence-of-failure signal.** Per the "failure modes are clearer than success metric" principle (A7): how rarely do the named failure modes fire? Sub-dimensions: regression-absence, spinning-absence, drift-absence, mode-collapse-absence.

**Contrarian / candidate (low confidence, worth surfacing for Innovation):**

- **D-16-candidate. Asymmetric-quality reporting.** For meaning-producing disciplines (Sensemaking, Innovation), self-improvement is reported as judgment-pattern across human reviews ("does the human's surprise rate increase or decrease over time?"). For mechanistic disciplines, as numeric-pattern across runs ("does Comprehend's predictive accuracy trend up?"). This is one dimension with TWO measurement modalities, not two dimensions.
- **D-17-candidate. Improvement-velocity-by-autonomy-level.** Self-improvement rate is plausibly different at each autonomy level (L0 human-paced; L4+ system-paced). A measurement system might track rate per level rather than rate aggregate.

15 named dimensions (D-1 through D-15), plus 2 contrarian/candidate that may be redundant with named ones.

---

## Signal Log

Signals detected during scans, with disposition.

| Signal type | Signal | Disposition | Reasoning |
|---|---|---|---|
| **Density** | The desc.md formula "Baldwin cycles × quality per cycle" is a COMPOSITE metric, not a single rate. | **Probed.** | Load-bearing for the conceptual clarification — explains why self-improvement rate isn't a single number. |
| **Tension** | Improvement detection is structurally harder than regression detection (per evolving_quality_assetment_component.md). Yet the rate is *improvement*, not *anti-regression*. | **Probed.** | The asymmetry forces the measurement design to lean on net-rate (improvement − regression) rather than gross-rate. |
| **Tension** | Discipline-type asymmetry: mechanistic disciplines have measurable quality, meaning-producing don't. Yet self-improvement rate must cover both. | **Probed.** | This forces dimension D-16 (asymmetric-quality reporting) or splits D-2/D-7. Sensemaking will decide. |
| **Novelty** | "Failure modes are clearer than success metric" (what_is_meaningful_traversal.md). | **Probed.** | This is a powerful design principle — D-15 (absence-of-failure) belongs in the dimension list because failure-absence is more reliably observable than presence-of-improvement. |
| **Relevance** | The user provided two seed dimensions (latency + convergence efficiency). Are these the most-load-bearing, or just the easiest-to-name? | **Probed (deferred for Sensemaking).** | They are clearly two specific dimensions of a wider pattern — latency is the "per-step duration" question; convergence efficiency is the "attempts per success" question. Both are present but not exhaustive. |
| **Relevance** | "Self-improvement rate" appears in `enes/desc.md` and is cross-referenced in `enes/autonomy_ladder.md` + the just-prior finding. It is NOT a discipline-level term; it is a project-level objective. | **Probed.** | Measurement happens at project-scope, not per-inquiry. Implication for the ~15 questions: they observe across many inquiries / over time periods, not within a single MVL+ run. |
| **Absence** | No source text defines a numeric threshold for "this rate is acceptable." The substrate-takeover scenario hints at it (substrate change could invalidate prior thresholds), but no calibrated numeric is committed. | **Probed; confirmed-absent at the threshold level.** | The user explicitly out-of-scoped the calculation method; the absence of thresholds is consistent. Measurements can be qualitative or rank-ordered without thresholds. |
| **Absence** | No source text addresses *recursive self-improvement* (improving the improvement mechanism itself). | **Probed; surfaced as D-14.** | The texts focus on object-level improvement; D-14 is a structural dimension that the texts don't explicitly cover but that the concept logically includes. |
| **Tension** | The user's two seed dimensions (latency + convergence efficiency) are both about the SPEED of improvement once it starts. Neither addresses (a) the trigger (when does the system know to improve?), (b) the magnitude (how big is each improvement?), or (c) the retention (does it stay improved?). | **Probed; flagged for Sensemaking.** | The dimension list must span all four phases: trigger → speed → magnitude → retention. The user's seeds cover the speed phase only. |
| **Adjacency** | "Meaningful traversal" (what_is_meaningful_traversal.md) is a substrate concept for self-improvement rate, not the same concept. The two interlock: meaningful traversal distinguishes useful cycles from spinning; self-improvement rate counts only the useful cycles. | **Surfaced as adjacency note.** | Sensemaking should treat meaningful-traversal as upstream substrate, not as a sibling concept. |

---

## Confidence Map

| Region / sub-region | Level | Evidence basis |
|---|---|---|
| **A. What self-improvement rate IS** | **confirmed** | All assertions traced to `enes/desc.md`, `enes/evolving_quality_assetment_component.md`, `enes/regression/desc.md`, `enes/thinking_space_dynamics.md`, or `enes/what_is_meaningful_traversal.md` with direct quotes or explicit cross-references. |
| **B. What self-improvement rate INCLUDES** | **confirmed (B1–B6)** + **scanned (B7–B10)** | B1–B6 are explicit in source texts. B7 (cross-discipline transfer) and B8 (retention) are inferred from adjacent texts (drift failure modes, slow-drift symptom). B9–B10 are the user-given seeds, present but not yet refined. |
| **C. What self-improvement rate EXCLUDES** | **confirmed (C1–C6)** | All neighbor concepts have clear boundary statements relative to self-improvement rate; mostly via the project's own definitional commitments (task completion = grounding signal; substrate change = different mechanism; etc.). |
| **D-1 through D-8 (obvious dimensions)** | **confirmed** | Each traces to a Region A or B item; user-given seeds covered as D-3 and D-4. |
| **D-9 through D-15 (novel dimensions)** | **scanned** | Each is structurally implied by source-text claims but not explicitly named as a dimension in the texts. Sensemaking should validate. |
| **D-16, D-17 (contrarian candidates)** | **inferred** | Plausible but possibly redundant with named dimensions; needs Sensemaking and Decomposition to commit. |
| **Confirmed-absent regions** | | |
| — Numeric thresholds for "acceptable rate" | **confirmed-absent** | No source text commits a threshold; out of scope per user instruction. |
| — Calculation method / formula for combining dimensions | **confirmed-absent (out of scope)** | Explicitly deferred by user ("that method is later"). |
| — Self-improvement rate at L5+ | **confirmed-absent (research frontier)** | The autonomy ladder's boundary is acknowledged as asymptotic; self-improvement rate at the boundary requires concepts not yet committed (autonomous goal-formation). |
| — Substrate-takeover scenario's effect on rate measurement | **confirmed-absent (hedge)** | Acknowledged in `enes/thinking_space_dynamics.md` §2.4 as a discontinuity; not covered by current rate definition. |
| — Self-improvement rate for ML-substrate-changes (e.g., Claude version updates) | **confirmed-absent** | Per C2: substrate-driven capability growth is explicitly NOT self-improvement rate. |

---

## Frontier State

**Status: stable.**

Justifications per spec §4.2 convergence criteria:

1. **Frontier stability** — the four regions are bounded. Region A is canonical-text-grounded; Region B is enumerated from explicit + inferred inclusions; Region C is a complete boundary against the neighbor concepts the _branch.md named (and no other neighbors surfaced); Region D is enumerated at 15 + 2-candidate dimensions covering the obvious and novel territory.

2. **Declining discovery rate** — the last passes (reading the prior finding, scanning for novel dimensions D-9 through D-15) refined existing regions rather than opening new ones. Further reading would diminish.

3. **Bounded gaps** — remaining unknowns (numeric thresholds; calculation method; rate at L5+) are explicitly out of scope OR are downstream of operational data that doesn't exist yet. Gaps are between explored regions, not beyond them.

4. **Jump-scan performed** — jumped from `desc.md`'s formula into `evolving_quality_assetment_component.md`'s regression-vs-improvement distinction (surfaced A4 asymmetry) into `what_is_meaningful_traversal.md`'s "failure-modes-clearer-than-success-metric" principle (surfaced A7 + D-15). The jumps revealed structurally novel content (the asymmetry; the absence-of-failure design pattern) that the seed dimensions alone didn't suggest.

---

## Gaps and Recommendations

Frontier questions handed to downstream disciplines.

### To Sensemaking (next discipline)

- **The dominant cognitive anchor for "self-improvement rate."** Is the concept best framed as (a) *the rate of change of task-completion-ability* (the `desc.md` target), (b) *Baldwin cycles × quality per cycle* (the `desc.md` formula), (c) *net rate (improvement minus regression)* (the `regression/desc.md` framing), or (d) *the system's ability to traverse thinking space productively over time* (the meaningful-traversal-substrate framing)? The four are not contradictory but they prioritize different load-bearing claims. Sensemaking should pick the primary anchor and order the others underneath.

- **The four-phase structure flagged in the signal log.** The user's seed dimensions cover only the SPEED phase (latency + convergence efficiency). The full conceptual structure plausibly has four phases: **trigger** (when does the system know to improve?) → **speed** (how fast does improvement happen once triggered?) → **magnitude** (how big is each improvement?) → **retention** (does the improvement stay?). The ~15 measurable questions should span all four phases. Sensemaking should validate this four-phase decomposition or replace it.

- **The discipline-type asymmetry.** Mechanistic vs meaning-producing disciplines have structurally different measurability. Is this one dimension with two modalities (D-16), or two separate dimensions (split D-2 / D-7), or a transverse property of every dimension? Sensemaking should commit.

- **The "failure-modes-clearer-than-success-metric" design principle.** Does this make D-15 (absence-of-failure signals) a *primary* dimension or a *fallback* dimension? The principle is load-bearing (per `what_is_meaningful_traversal.md`); Sensemaking should commit how it ranks against the obvious dimensions (D-1 through D-8).

### To Decomposition

- **Natural seams of the dimension list.** Where does the 15-dimension set partition? Candidate seams: (a) by Baldwin-cycle phase (trigger / speed / magnitude / retention); (b) by measurability tier (numeric for mechanistic / judgment for meaning-producing / structural for layer maturation); (c) by source (user-given seeds vs source-text-derived vs novel inferences); (d) by aggregation level (per-cycle / per-discipline / system-wide).

### To Innovation

- **The redundancy collapse + alternative groupings.** The 15-dimension list has likely redundancies (D-9 and D-14 both touch system-vs-human attribution; D-11 and D-15 both touch failure-absence). Innovation should generate alternative groupings + collapse redundancies + possibly produce missing dimensions in regions the obvious + novel scan didn't reach.

- **Wording of the measurable questions.** The dimensions are abstract. The ~15 questions must be PROXIMATELY measurable — concrete enough to be answered with current or near-current observability, not gated on Family III calibration infrastructure. Innovation should produce candidate question wordings per dimension + test for proximate measurability.

### To Critique

- **Coverage check on the ~15 questions.** Do the questions span all four conceptual phases (if Sensemaking commits the four-phase structure)? Do they handle both discipline-type modalities? Do they include absence-of-failure signals? Critique should evaluate each question against the dimension it operationalizes + against the proximately-measurable + consistently-measurable criteria.

### Deferred signals (handed forward; not for exploration)

- The **numeric thresholds** for what counts as "improving" — out of scope per user.
- The **calculation method** — explicitly out of scope per user.
- The **substrate-takeover scenario's effect** — research frontier; capture in Open Questions.
- The **rate measurement at L5+ autonomy** — research frontier.

---

## Telemetry

- **Mode:** blended (artifact + possibility)
- **Entry point:** signal-first (user-given two seed dimensions)
- **Cycles run:** 2 (first scan: 4 named source files + the prior finding; second scan + jump-scan: 2 additional source files + completeness scan for novel dimensions)
- **Candidates generated (possibility mode):** 15 named dimensions (D-1 through D-15) + 2 contrarian candidates
- **Signals detected:** 9 — Probed: 8; Surfaced-as-adjacency: 1
- **Resolution progression evidence:** coarse scan of source texts (regional structure surfaced) → fine scan for dimensions (D-1 through D-15) → jump-scan into the regression-vs-improvement asymmetry + the failure-modes-clearer principle
- **Frontier state:** stable
- **Discovery rate:** decreasing (last reads refined existing regions; no new regions surfaced)
- **Convergence criteria status:** frontier-stability ✓; declining-discovery ✓; bounded-gaps ✓
- **Jump-scan performed:** YES (from desc.md formula → evolving_quality_assetment_component.md's asymmetry → what_is_meaningful_traversal.md's failure-modes principle)
- **Failure modes checked:**
  - Premature depth: avoided — coarse scan completed before deep probing.
  - Surface-only scanning: avoided — probed deep on A1 (formula), A4 (asymmetry), A7 (failure-modes principle).
  - False confidence: mitigated by jump-scan.
  - Premature termination: three criteria explicitly checked.
  - Re-exploration: no — each source file read once (some loaded from prior pipeline's context).
  - Completeness bias in possibility mode: mitigated — surfaced obvious dimensions D-1 through D-8 BEFORE novel dimensions D-9 through D-15.
  - Open→closed drift: annotations stayed at labeling level; relational meaning deferred to Sensemaking.
  - Silent boundary-discovery: N/A — _branch.md explicitly enumerated Source Territory.
  - Negative-space silent drop: confirmed-absent regions appear explicitly in the confidence map.
  - Inadequate per-item content depth: D2 default maintained; D3 used where adjacency was load-bearing.
- **Per-item depth:** D2 default; D3 where source-text adjacency matters (Regions A and B).

---

## Self-Assessment

**Overall: PROCEED** (regions mapped at confirmed level for A and C, mostly-confirmed for B, scanned for novel dimensions in D; 15 candidate dimensions enumerated + 2 contrarian candidates; confirmed-absent regions explicit; jump-scan revealed structurally novel content; frontier handed off with typed questions for each downstream discipline).
