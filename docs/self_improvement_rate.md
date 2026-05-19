---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Self-Improvement Rate — Conceptual Clarification and Measurable Questions

## Question

**The question** *(from `_branch.md`, this inquiry's framing file)*: What is *self-improvement rate* as a measurable property of a self-improving cognitive system — what it means, what it includes, what it excludes — and what is a list of approximately 15 proximately-but-consistently measurable questions that, taken together, could form the basis of a calculation method for self-improvement rate?

**The goal:** a two-part deliverable — (1) conceptual clarification of what self-improvement rate IS, with explicit boundaries against neighbor concepts (task-completion rate, capability growth, learning rate, etc.); and (2) a list of approximately 15 measurable questions that each are proximately measurable (observable today or with modest investment), consistently measurable (yield comparable answers across measurement events), and collectively span the conceptual dimensions surfaced in part 1.

**Explicitly out of scope (per user statement):** the calculation method itself — how to combine the questions' answers into a single rate value or rate curve. The user stated: *"that method is later, first we should understand the self-improvement rate, what it means, what it includes and what it not include."* This finding produces the inputs the future calculation-method inquiry will consume.

The inquiry exists because the prior inquiry (`devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/finding.md`) named self-improvement rate as the project's primary measured objective — *"Baldwin cycles × quality per cycle, where task completion is the grounding signal, and the terminal aim is the rate at which the system's ability to complete tasks IMPROVES"* (per `docs/desc.md`). The concept was named but not operationalized; this inquiry operationalizes it.

---

## Finding Summary

- **Self-improvement rate is the rate of change of the system's task-completion ability over time, attributed to the system's own self-modification.** Operationally it is measured as *Baldwin cycles × quality per cycle, net of regression, gated on calibration maturity, with meaningful traversal as upstream substrate.* It is a composite property — not reducible to a single scalar without committing weighting that this finding leaves out of scope.

- **The measurement framework has a primary anchor + three operational sub-frames + a four-phase cross-cycle structure + three nested scopes + a transverse modality + an absence-of-failure first-class family + calibration-state stratification.** Together they form the conceptual model the ~15 questions operationalize.

- **The four cross-cycle measurement phases** the ~15 questions span are: **Trigger** (when does the system know it needs to improve?), **Speed** (how fast does improvement happen once triggered?), **Magnitude** (how big is each improvement?), and **Retention** (does the improvement stay?). The user's two seed questions — fix latency and convergence efficiency — both live in the Speed phase; the broader question list covers the other three phases as well.

- **Six neighbor concepts are explicitly bounded out:** task-completion rate (the level, not the derivative), capability growth from substrate updates (different attribution), quality improvement from variance reduction (different attribution), ML learning rate (operates on weights not specs), per-inquiry convergence speed (within-inquiry not cross-inquiry), and inquiry rate (necessary substrate but not the signal). Each boundary survives structural-grounds testing at HIGH confidence.

- **Absence-of-failure signals are PRIMARY, not fallback.** Per the source texts' "failure modes are clearer than the success metric" principle (`docs/what_is_meaningful_traversal.md`) and the regression-detection-is-easier-than-improvement-detection asymmetry (`docs/evolving_quality_assetment_component.md`), three of the 15 questions use absence-of-failure measurements (anchored to the symptom catalog at `docs/regression/desc.md`) as first-class observations alongside direct measurements.

- **The 15 questions split into two interpretation tiers by calibration state.** **Tier 1 (13 questions, answerable today)** uses observable artifacts that already exist (the `_state.md` history sections, git history of spec files, the regression symptom catalog, the inquiry-folder structure). **Tier 2 (2 questions, answerable when mature)** requires accumulated data (cross-discipline cascade observations; canary infrastructure for slow-drift detection). The split is structural: it tells a future calculation-method inquiry which inputs are currently readable and which require waiting.

- **The user's two seed questions are anchored at Q2a (detection-to-correction latency) and Q2b (convergence efficiency).** Both are in Speed phase. The remaining 13 questions extend coverage across the other three phases plus the substrate and harness-scope dimensions.

- **Zero questions were killed; ten were refined with specification-clarity fixes.** The refinements sharpen *how* each question is operationally measured (e.g., what counts as an "attempt"; how "same section" is determined for the reverted-vs-superseded distinction; how confounding measurement windows are reported). After refinement, all 15 questions clear the proximately-and-consistently-measurable bar.

---

## Finding

### Why we're discussing this

The Homegrown project commits to **self-improvement rate** as its primary measured objective. The source statement (`docs/desc.md`): *"Self-improvement rate: Baldwin cycles × quality per cycle. Task completion is the grounding signal for quality — a self-improvement that doesn't help the system solve problems isn't improvement. But the terminal aim isn't task completion alone; it's the rate at which the system's ability to complete tasks IMPROVES. This distinguishes this system from task-executing agents."*

The commitment is concrete at the formula level. But to TRACK self-improvement rate — to know whether the project's central bet (structure-of-thinking matters at the margin) is paying off — the formula needs operationalization. That means a list of *measurable questions* whose answers, when combined, would yield the rate's value or trajectory.

The user's request was for that list — explicitly leaving the *combination method* (how to weight and aggregate the answers) out of scope for a later inquiry. The user gave two seed questions (fix latency + convergence efficiency) as starting examples. The inquiry's job was: understand the concept clearly enough that ~15 measurable questions could be specified and collectively span what the concept covers.

The work below has two halves. The first half is the **conceptual clarification** — what self-improvement rate is, what it includes, what it excludes. The second half is the **measurable-question list** — 15 questions, each operationally specified, organized in two tiers by calibration state.

### Part 1 — What self-improvement rate IS

#### 1.1 The primary anchor

**Self-improvement rate is the rate of change of the system's task-completion ability over time, attributed to the system's own self-modification.**

This anchor has four load-bearing elements:

1. **Rate of change, not level.** The metric is a derivative, not an absolute. A system that completes many tasks but doesn't get better at completing more (or harder) tasks has zero self-improvement rate. The level is task-completion rate; the rate of change is self-improvement rate.

2. **Task-completion ability, not just task-completion count.** "Ability" includes the *class of tasks the system can handle*, not just how many it has handled. A system that newly becomes capable of solving a harder problem class has improved even if its absolute task-count is unchanged.

3. **Over time.** Measurement is project-scope and cross-inquiry, not within any single MVL+ run. Self-improvement rate observes many cycles, not one cycle.

4. **Attributed to the system's own self-modification.** Capability can grow from sources other than self-improvement — the underlying LLM substrate can update (Claude 5.x), a human can edit specs directly. Self-improvement rate tracks *only* growth attributable to the system's own self-modification, observable through the harness's own Baldwin cycle (the closed loop of predict → observe → calibrate → encode that the project commits to as its self-improvement mechanism).

#### 1.2 The three operational sub-frames

The primary anchor decomposes into three operational sub-frames, each subordinate to the anchor but each load-bearing in measurement:

- **Composite formula.** Per `docs/desc.md`: *Baldwin cycles × quality per cycle.* Two factors, multiplied. The measurement system preserves both factors separately — the count of cycles AND the per-cycle quality — rather than pre-aggregating to a scalar. (Pre-aggregating commits weighting that this finding leaves out of scope.)

- **Net posture.** Per `docs/regression/desc.md`: *"Below this threshold, the self-improvement loop becomes a self-degradation loop."* Net improvement = gross improvement minus regression. The measurement system observes both directions — improvements that landed AND improvements that got reverted or that caused regression. A system that "improves" but compounds small regressions is net-degrading.

- **Substrate precondition.** Per `docs/what_is_meaningful_traversal.md`: *"'Improvement' presupposes a metric for traversal quality. If meaningful traversal isn't operationalized, the self-improvement loop has nothing to optimize against."* Cycles that don't traverse meaningfully (cycles that spin: repeat themselves, paraphrase priors, drift off topic) don't contribute to self-improvement. The substrate is acknowledged fuzzy in the source text; the measurement system uses placeholder signals for now.

#### 1.3 The four cross-cycle measurement phases

The ~15 measurable questions are organized by the cross-cycle phase they observe. A self-improvement event has four phases, observed across many cycles:

- **Trigger** — *when does the system know it needs to improve?* What detects the need? Was it system-signaled or human-flagged? Does the system prioritize HIGH-severity needs over LOW? When the system reports no need, is that supported by symptom-absence evidence or is it untested self-confidence?

- **Speed** — *how fast does improvement happen once triggered?* The user's two seed questions both live here: how long does it take from the moment an issue is detected to the moment a spec change is encoded (latency)? How many attempts does it take when the first attempt fails (convergence efficiency)? What does the cycle cost (token budget, calendar duration, human effort)?

- **Magnitude** — *how big is each improvement?* The composite formula's two factors live here: cycle count (how many encoded improvements in a period) and per-cycle quality (numeric for mechanistic disciplines like Comprehend / Exploration / Decomposition; judgment-derived for meaning-producing disciplines like Sensemaking / Innovation). Plus calibration coverage (how many of the 11 disciplines have reached the N≥30 inquiry threshold for calibrated improvement claims) and cross-discipline transfer (do improvements in upstream disciplines cascade to downstream consumers).

- **Retention** — *does the improvement stay?* What fraction of encoded improvements get reverted (regression) versus superseded (improvement-evolution)? Is the slow-drift pattern firing? Per the regression catalog at `docs/regression/desc.md`, the four Type-5 spec-symptoms (shorter-than-before / missing-sections / weakened-language / removed-safeguards) catch regression at the spec-edit layer before any output is produced.

The Baldwin cycle, separately, has *six within-cycle phases* (run problem → observe → detect pattern → propose change → evaluate → encode into spec). Those six are orthogonal to the four cross-cycle measurement phases. The Baldwin cycle's six tell us what happens *inside* one cycle; the four cross-cycle phases tell us how to *measure* many cycles AS A RATE.

#### 1.4 Three nested measurement scopes

"Self" in "self-improvement" has three nested resolutions, each scoping a different measurement target:

- **Discipline-level self.** Each of the 11 disciplines (`/sense-making`, `/innovate`, `/td-critique`, `/explore`, `/decompose`, `/comprehend`, `/reflect`, `/navigation`, `/MVL`, `/MVL+`, `/meta-loop`) can be improved independently. Its calibration maturity (N≥30 invocations) is per-discipline; its per-cycle quality is per-discipline.

- **Corpus-level self.** Improvements in one discipline can cascade to downstream consumers (e.g., a `/sense-making` improvement that produces sharper anchors helps `/innovate` consume those anchors more usefully). The corpus-level scope observes these cross-discipline effects.

- **Harness-level self.** The improvement mechanism itself can improve — meta-level self-improvement. When the disciplines responsible for self-improvement (e.g., `cognitive_harness/protocols/loop_diagnose.md`, `cognitive_harness/protocols/outcome_review.md`, the not-yet-shipped `/intuit` discipline) get refined, the system's *capacity to improve itself* grows.

The three scopes are nested: discipline-level events accumulate to corpus-level effects; the harness-level scope observes whether object-level measurements themselves trend over time.

#### 1.5 A transverse modality (mechanistic vs meaning-producing)

The 11 disciplines split into two type-families per `docs/regression/desc.md`:

- **Mechanistic disciplines** (Comprehend, Exploration, Decomposition): quality is numerically measurable — predictive accuracy, coverage completeness, structural correctness.
- **Meaning-producing disciplines** (Sensemaking, Innovation, td-critique partially): quality is judgment-based — depth of understanding, significance of insight, novelty of ideas.

This asymmetry is *transverse* — it applies WITHIN each measurable question rather than as a separate dimension. A latency question is the same regardless of discipline type; the answer's *modality* differs (numeric latency works for both). A per-cycle quality question is the same; the answer's *modality* differs (numeric delta for mechanistic; categorical judgment for meaning-producing).

#### 1.6 Absence-of-failure as a primary measurement family

Per `docs/what_is_meaningful_traversal.md`: *"The failure modes are clearer than the success metric. We can identify when a traversal isn't meaningful more easily than we can define when it is. That's true for many quality concepts and may be permanent."*

This principle elevates **absence-of-failure** measurements to first-class status (not fallback). For meaning-producing disciplines especially, direct measurement of improvement reduces to reviewer judgment with no reliable numeric anchor; absence-of-failure measurements — anchored to the 23-symptom regression catalog at `docs/regression/desc.md` — are more reliably observable than presence-of-improvement.

Three of the 15 questions use absence-of-failure as their primary measurement: Q1b (absence-of-need claim verification), Q4a (slow-drift absence), Q4c (per-edit spec-symptom absence). They have equal status to the direct measurements; calling them "fallbacks" would mis-rank them.

#### 1.7 Calibration-state stratification

Some measurements are observable today with existing artifacts. Others require sustained data accumulation before they yield meaningful answers. The 15 questions split into two tiers:

- **Tier 1 (today-readable, 13 questions):** observable now via `_state.md` history sections, git history of spec files, the regression symptom catalog, and the inquiry-folder structure. Today's values may be coarse (e.g., today the "system-detected need" fraction is approximately 0% because the quality-awareness substrate isn't operational yet), but the measurements are answerable.

- **Tier 2 (when-mature-readable, 2 questions):** require accumulated data before they're meaningfully answerable. Q3c (cross-discipline transfer rate) needs N post-improvement inquiries to observe cascades; Q4a (slow-drift detection in full canary form) needs canary infrastructure shipped + canary reference runs accumulated.

The two-tier split is the calibration-state stratification sensemaking committed to. It also tells a future calculation-method inquiry which inputs are currently weighable.

#### 1.8 What self-improvement rate EXCLUDES (six neighbor concepts)

Six neighbor concepts overlap with self-improvement rate in some respect but are structurally distinct. Each boundary survives structural-grounds testing at HIGH confidence.

- **Task-completion rate.** How many problems the system solves per unit time. *Overlap:* task completion is the grounding signal for self-improvement quality (per `desc.md`). *Difference:* task-completion rate is the level; self-improvement rate is the derivative. A steady-state system has high task-completion rate and zero self-improvement rate.

- **Capability growth from substrate updates.** Increase in problem-classes the system can handle, attributable to LLM substrate updates (Claude version changes, multi-modal substrate, AGI-level substrate). *Overlap:* both produce observable capability gain. *Difference:* attribution — the harness didn't modify itself; the substrate did. Per the substrate-takeover scenario in `docs/thinking_space_dynamics.md`, this is explicitly separated from self-improvement rate.

- **Quality improvement from variance reduction.** Better outputs on a fixed task class, attributable to lower output variance (a substrate update reduced randomness) or stochastic luck. *Overlap:* both look like "outputs got better." *Difference:* attribution — only quality improvement traceable to spec refinement (a Baldwin-cycle outcome) is self-improvement.

- **ML learning rate.** Gradient descent step size; how fast weights update per training iteration. *Overlap:* the Baldwin cycle is structurally analogous (predict → observe → update). *Difference:* the harness doesn't train weights. The LLM substrate is fixed during operation. The Baldwin cycle operates on spec files, not on weights — different layer of the stack.

- **Per-inquiry convergence speed.** How fast a single `/MVL+` run reaches a finding (the convergence telemetry each discipline reports). *Overlap:* internal to discipline runs. *Difference:* per-inquiry convergence is within-inquiry telemetry; self-improvement rate is cross-inquiry across many runs over time.

- **Inquiry rate.** How many `/MVL+` runs the project completes per unit time. *Overlap:* a necessary substrate (no inquiries = no Baldwin cycles = no self-improvement). *Difference:* the count of inquiries says nothing about whether any of them produced improvements. Inquiry rate is the floor; self-improvement rate is the signal above the floor.

### Part 2 — The 15 measurable questions

The 15 questions are organized by piece (per the decomposition: P1 Trigger / P2 Speed / P3 Magnitude / P4 Retention / P5 Substrate / P6 Harness-scope) and tagged by calibration tier (Tier 1 today-readable / Tier 2 when-mature).

Each question is stated in its critique-refined form — the refinements sharpen operational specification rather than changing the question's intent.

#### P1 — Trigger phase (3 questions; all Tier 1)

**Q1a — Self-detection vs human-flagged ratio.** Over the past N completed Baldwin cycles, what fraction were triggered by **system-detected need** (an event recorded in the harness's `_state.md` history or `loop_diagnose` output WITHOUT a corresponding human-flag in the inquiry's `_branch.md` Source Input section), versus **human-flagged need** (an event explicitly raised by a person in `_branch.md` Source Input or in a correction message), versus **user-initiated investigation** (an open question without an issue flag)?
- *Scope:* harness-level. *Modality:* transverse. *Calibration-state:* today (today's value ≈ 0% system-detected).
- *Type:* direct measurement.

**Q1b — Absence-of-need claim verification.** When any reviewer (the user at Level 0; the system at L4+) reports that no improvement is currently needed for discipline X or for the corpus, is the report supported by an explicit symptom-absence check across the 5 regression-symptom types from `docs/regression/desc.md` — (i) output symptoms (no thin frontier, no flat progression); (ii) experience symptoms (no déjà vu, no can't-act); (iii) pipeline symptoms (no downstream rejection); (iv) error symptoms (no internal contradiction); (v) spec symptoms (no removed safeguards) — or is it untested self-confidence?
- *Scope:* discipline-level and corpus-level. *Modality:* transverse. *Calibration-state:* today.
- *Type:* absence-of-failure.

**Q1c — Bidirectional severity-triage.** Among triggered improvement events in the past N inquiries: (i) does the system act on HIGH-severity needs within an observed latency budget for that severity class, AND (ii) does the system correctly DEFER or NOT-ACT on LOW-severity needs (avoiding premature self-modification on issues that don't warrant the change cost)? Severity tags inherit from the regression catalog (LOW / MEDIUM / HIGH / CRITICAL). The per-severity latency budget is itself a measurement output (the question reports observed latencies per severity class rather than validating against a presupposed budget).
- *Scope:* harness-level. *Modality:* transverse. *Calibration-state:* today.
- *Type:* direct measurement (two-direction).

#### P2 — Speed phase (3 questions; all Tier 1)

**Q2a — Detection-to-correction latency.** *(User seed 1.)* What is the median elapsed duration (in inquiry-cycles or calendar time) between an issue's first observable surfacing in the harness — recorded as either a `_state.md` history entry flagging a problem, a `/td-critique` KILL/REFINE verdict on a discipline's output, or a human correction logged in an inquiry's `_branch.md` Source Input — and the moment the corresponding spec change is encoded into the relevant discipline's spec file? Report the median plus the distribution across Baldwin-cycle phase-segments (detection-to-diagnosis, diagnosis-to-proposal, proposal-to-evaluation, evaluation-to-encoding latencies) to identify the bottleneck phase.

*Clarification (critique refinement):* the issue surfaced in inquiry X; the spec change was encoded in inquiry Y where Y is either a later inquiry, OR the same inquiry if and only if the encoded change persisted past that inquiry's conclude phase (encoded changes that get reverted before conclude don't count). This excludes per-inquiry convergence (which is a within-inquiry telemetry concept, not self-improvement rate).
- *Scope:* discipline-level (the spec being changed); harness-level (aggregate). *Modality:* transverse. *Calibration-state:* today.
- *Type:* direct measurement.

**Q2b — Convergence efficiency.** *(User seed 2.)* When an improvement attempt fails (the proposed spec change either doesn't address the issue OR causes a regression and is reverted), how many subsequent attempts are required before a successful improvement is encoded? Report the distribution: median, max, and the *abandonment rate* — the fraction of correction chains that terminate in "gave up" rather than "success."

*Clarification (critique refinement):* an attempt is one correction-chain entry per `cognitive_harness/protocols/loop_diagnose.md`'s correction-chain schema. Each entry is terminated either by SUCCESS (a subsequent chain entry within N inquiries references this improvement as effective) or by ABANDONMENT (no further chain entries within N inquiries; the issue is left unaddressed). N is reported as a parameter of the measurement (suggested default N=10 inquiries).
- *Scope:* discipline-level + harness-level. *Modality:* transverse. *Calibration-state:* today.
- *Type:* direct measurement.

**Q2c — Cost per encoded improvement.** What is the average cost per encoded improvement, measured as: (i) context-budget consumed (token count for the inquiry that produced the improvement); (ii) calendar duration (from issue surfacing to encoded change); (iii) human-effort hours — reported as a range (low / median / high estimate) with the estimation method noted (e.g., self-report after the inquiry; reviewer-estimate based on inquiry-folder content; calendar-allocation log)? The range is acceptable; pretending to a single number is not.
- *Scope:* discipline-level + harness-level. *Modality:* transverse. *Calibration-state:* today.
- *Type:* direct measurement.

#### P3 — Magnitude phase (4 questions; 3 Tier 1, 1 Tier 2)

**Q3a — Cycle count × per-cycle quality.** Over a calendar window (e.g., the past N=30 days or N=20 completed inquiries), how many Baldwin cycles produced encoded spec changes? Report the count alongside a per-cycle quality assessment, split by discipline-type:
- *Mechanistic disciplines* (Comprehend, Exploration, Decomposition): numeric quality measure — delta in coverage / predictive-accuracy / structural-correctness for the discipline after the spec change.
- *Meaning-producing disciplines* (Sensemaking, Innovation, td-critique): judgment-derived categorical — Major / Moderate / Minor / Negligible improvement, with reviewer grounds stated.

*Clarification (critique refinement):* for the meaning-producing modality, the same reviewer applies the same diagnostic categories across the measurement window. The categories anchor to the regression catalog's symptom-severity tags (CRITICAL / HIGH / MEDIUM / LOW) to maintain consistency. If reviewers rotate, the measurement reports inter-reviewer agreement explicitly.
- *Scope:* harness-level + discipline-level. *Modality:* both (transverse split explicit). *Calibration-state:* today (partial — meaning-producing requires reviewer).
- *Type:* direct measurement.

**Q3b — Disciplines at N≥30 calibration.** What fraction of the 11 disciplines have reached the N≥30 invocation threshold required for calibrated improvement claims (per `docs/thinking_space_dynamics.md`)? Report the fraction separately for mechanistic disciplines and meaning-producing disciplines; report the per-discipline N as well.

*Clarification (critique refinement):* N is counted as discipline-invocations (the number of times the discipline's spec was executed by the loop runner with a saved output artifact), not inquiries-completed. So a `/sense-making` invoked in 20 distinct `/MVL+` inquiries contributes N=20.
- *Scope:* discipline-level + corpus-level. *Modality:* both. *Calibration-state:* today.
- *Type:* direct measurement.

**Q3c — Cross-discipline transfer rate.** When discipline X is improved (a spec change is encoded), do downstream disciplines that consume X's outputs — e.g., `/innovate` consumes `/sense-making`'s anchor set; `/td-critique` consumes `/innovate`'s candidates; `/conclude` consumes all discipline outputs — show observable improvement (in their per-cycle quality measurements per Q3a) on subsequent runs that use the improved X? Report the cascade rate: improvements that produced downstream effects vs improvements that did not.
- *Scope:* corpus-level. *Modality:* transverse. *Calibration-state:* **Tier 2 (when-mature)** — requires N post-improvement inquiries to observe cascades.
- *Type:* direct measurement.

**Q3d — Attribution-stratified magnitude.** Of the magnitude observed in per-cycle quality (Q3a) across the past N inquiries, what fraction is attributable to: (i) **system-encoded spec changes** (the harness's own self-modification, audit-trailable through the Baldwin cycle's encode-into-spec phase); (ii) **substrate updates** (LLM version changes, observable from substrate version logs); (iii) **human-authored spec edits at Level 0 bootstrap** (the user editing specs directly, observable via git author / commit-message)?

*Clarification (critique refinement):* for measurement windows where multiple attribution sources changed (e.g., substrate updated AND a spec edit was encoded), report the overlap explicitly: *"in window W, both substrate change S and spec edit E occurred; observable quality delta is X; attribution is shared."* Do not force single attribution; the shared-attribution report is itself useful evidence about confounding-frequency.
- *Scope:* harness-level. *Modality:* transverse. *Calibration-state:* today.
- *Type:* direct measurement (with attribution sub-classification).

#### P4 — Retention phase (3 questions; 2 Tier 1, 1 Tier 2 in full form)

**Q4a — Slow-drift detection frequency.** Across the harness's spec files, does the slow-drift symptom-pattern (Pattern 5 from `docs/regression/desc.md`: *"no single-session symptoms, but across sessions: runs that used to surprise no longer do; frontier questions get repetitive; canary problem re-runs produce thinner output than the reference"*) fire? Report: (i) the canary reference runs maintained per discipline (count); (ii) the frequency of slow-drift detection events when canary problems are re-run (events per N re-runs); (iii) where canary infrastructure isn't yet shipped, the manual qualitative drift-detection events the user has flagged.
- *Scope:* discipline-level + corpus-level. *Modality:* transverse. *Calibration-state:* **Tier 2 in full form (when canary ships); Tier 1 in manual form today.**
- *Type:* absence-of-failure.

**Q4b — Reverted vs superseded fraction.** Of the spec changes encoded in the past N inquiries, what fraction were either (i) **reverted** (entirely removed by a later edit) or (ii) **superseded** (replaced by different content addressing the same section)? Distinguish:
- *Reverted-as-regression:* the prior edit was undone because it caused observable quality decline.
- *Superseded-by-better:* the prior edit was replaced by a structurally-improved version (the original goal is still served, by a different mechanism).
A high reverted-as-regression fraction signals self-degradation; a high superseded-by-better fraction signals healthy iteration.

*Clarification (critique refinement):* "same section" is determined by EITHER (a) the section heading + position in the spec file matching across the diff, OR (b) the new edit's commit message or `_state.md` history explicitly referencing the prior edit (e.g., "supersedes prior edit X"). If neither holds, classify as REVERTED + ADDED rather than SUPERSEDED.
- *Scope:* discipline-level + corpus-level. *Modality:* transverse. *Calibration-state:* today.
- *Type:* direct measurement (with sub-distinction).

**Q4c — Per-edit spec-symptom check.** For each discipline spec edit in the past N inquiries, does the edit trigger any Type 5 spec-symptoms from `docs/regression/desc.md`:
- *Shorter-than-before:* net deletion in line count (could be redundancy removal OR load-bearing-content removal).
- *Missing sections:* a section referenced by the spec's Change Log no longer exists.
- *Weakened language:* "MUST" replaced with "should"; structural safeguards softened.
- *Removed safeguards:* failure modes removed; adversarial requirements softened; telemetry sections deleted.

Report per-edit symptom-fire count; edits with multiple symptoms firing are high-risk for regression.
- *Scope:* discipline-level. *Modality:* transverse. *Calibration-state:* today.
- *Type:* absence-of-failure.

#### P5 — Substrate / meaningful-traversal (1 question; Tier 1 with placeholder caveat)

**Q5a — Meaningful-vs-spinning ratio with placeholder signals.** For each completed inquiry in the past N runs, are the cycles in that inquiry classified as **meaningful traversal** versus **spinning**, based on the 5 placeholder signals from `docs/what_is_meaningful_traversal.md`:
- *Coverage:* did each iteration explore territory the previous iterations didn't?
- *Convergence:* did the open-question count shrink across iterations?
- *Productivity:* did each iteration produce new structural material rather than restating prior outputs?
- *Directedness:* did the new questions opened by each iteration topically connect to the original `_branch.md` question?
- *Depth:* did the loop probe specific anchors deeply at some point?

Report the meaningful-vs-spinning ratio across the corpus, with the explicit caveat that these signals are placeholders pending `devdocs/spec/meaningful_traversal.md`.
- *Scope:* harness-level. *Modality:* transverse. *Calibration-state:* today with placeholder caveat (precision improves when substrate ships).
- *Type:* substrate measurement (gates other questions' cycle-count validity).

#### P6 — Harness-scope / recursive improvement (1 question; Tier 1 for meta-edit count, Tier 2 for trend)

**Q6a — Meta-level improvement of the mechanism.** Over the past N inquiries, has the **improvement mechanism itself** been improved? Observable as: (i) **meta-level spec edits** — count of edits to the disciplines and protocols responsible for self-improvement, specifically `cognitive_harness/protocols/loop_diagnose.md`, `cognitive_harness/protocols/outcome_review.md`, `cognitive_harness/protocols/spec_governance.md`, and once shipped `cognitive_harness/intuit/SKILL.md` and `cognitive_harness/intuit/references/intuit.md`; AND (ii) **post-meta-edit object-level trend** — after each meta-level edit, do the object-level measurements (Q1a self-detection ratio, Q2a latency, Q2b convergence efficiency, Q3a per-cycle quality, Q4a slow-drift frequency) show observable improvement trend? Report meta-edit count alongside observable object-level effect.
- *Scope:* harness-level. *Modality:* transverse. *Calibration-state:* **Tier 1 for meta-edit count; Tier 2 for object-level trend (requires sustained post-meta-edit data).**
- *Type:* direct measurement at the meta-level.

### Part 2 summary table

| # | Question | Phase | Scope | Calibration tier |
|---|---|---|---|---|
| Q1a | Self-detection vs human-flagged ratio | Trigger | harness | Tier 1 |
| Q1b | Absence-of-need claim verification | Trigger | discipline + corpus | Tier 1 |
| Q1c | Bidirectional severity-triage | Trigger | harness | Tier 1 |
| **Q2a** | **Detection-to-correction latency** *(user seed 1)* | Speed | discipline + harness | Tier 1 |
| **Q2b** | **Convergence efficiency** *(user seed 2)* | Speed | discipline + harness | Tier 1 |
| Q2c | Cost per encoded improvement | Speed | discipline + harness | Tier 1 |
| Q3a | Cycle count × per-cycle quality | Magnitude | harness + discipline | Tier 1 (partial) |
| Q3b | Disciplines at N≥30 calibration | Magnitude | discipline + corpus | Tier 1 |
| Q3c | Cross-discipline transfer rate | Magnitude | corpus | Tier 2 |
| Q3d | Attribution-stratified magnitude | Magnitude | harness | Tier 1 |
| Q4a | Slow-drift detection frequency | Retention | discipline + corpus | Tier 2 (full); Tier 1 (manual) |
| Q4b | Reverted vs superseded fraction | Retention | discipline + corpus | Tier 1 |
| Q4c | Per-edit spec-symptom check | Retention | discipline | Tier 1 |
| Q5a | Meaningful-vs-spinning with placeholder signals | Substrate | harness | Tier 1 (placeholder) |
| Q6a | Meta-level improvement of the mechanism | Harness-scope | harness | Tier 1 (count); Tier 2 (trend) |

**13 questions in Tier 1 (today-readable); 2-3 in Tier 2 (when-mature in full form).** Total: 15.

---

## Next Actions

### MUST

- **What:** Use the 15 questions as the input set for a future calculation-method inquiry. The future inquiry will ask: given these 15 measurable inputs, how should they be combined into a self-improvement rate value (or rate trajectory)? What are the appropriate weights, and how does the calculation handle Tier 1 vs Tier 2 stratification (e.g., does Tier 2's "not-yet-readable" status mean it contributes zero to today's calculation, or does it mean today's calculation is incomplete pending Tier 2 maturity)?
  - **Who:** a future `/MVL+` inquiry on self-improvement rate calculation-method design.
  - **Gate:** condition-bound — when the project is ready to commit a calculation method (probably after the first round of Tier 1 measurements has been collected so the calculation can be tested against real data rather than designed in the abstract).
  - **Why:** without the calculation method, the 15 measurable inputs are observable but the *rate* itself isn't quantified. The user explicitly named the calculation as a follow-up; this is the queued next-action.

### COULD

- **What:** Begin Tier 1 measurement immediately — collect baseline values for the 13 today-readable questions. Today's values are baseline (e.g., Q1a's system-detected fraction is ≈ 0%); future measurements observe whether the values move.
  - **Who:** the user, in normal use of the harness, with periodic measurement events (perhaps every N inquiries).
  - **Gate:** observable — anytime the user wants to begin tracking.
  - **Why:** the Tier 1 measurements are answerable today. Beginning now produces baseline data; later measurements observe whether the baseline moves over time, which IS the self-improvement rate's signal.
  - **Depends-on:** none — Tier 1 is by definition answerable today.

- **What:** Build the canary reference run infrastructure required for Q4a's full form (one saved-good `finding.md` per discipline; periodic re-runs of canary problems; qualitative comparison to detect drift).
  - **Who:** a future small materialization run (per the prior inquiry's finding's Family II materialization).
  - **Gate:** condition-bound — when the user is ready to invest in regression-detection infrastructure (named as load-bearing in the prior inquiry).
  - **Why:** Q4a is currently Tier 2 in full form because canary infrastructure doesn't exist. Building it promotes Q4a to Tier 1 and operationalizes the load-bearing safety substrate.
  - **Depends-on:** none structurally (the snapshot mechanism at `archived_skills/` is already operational); just requires the canary protocol commitment.

- **What:** Specify the inquiry-counting unit for N in Q3b and Q2b more precisely, with one-time documentation in `docs/` so future measurements use the same counting convention.
  - **Who:** a small documentation materialization.
  - **Gate:** observable — once the first Q3b measurement is taken and the inter-reviewer agreement reveals counting drift.
  - **Why:** the critique refinement specified "discipline-invocations" for Q3b's N and "correction-chain entries" for Q2b's attempt. Documenting these conventions prevents drift across measurement events.

### DEFERRED

- **What:** Operationalize the meaningful-traversal substrate per `docs/what_is_meaningful_traversal.md` — promote it from placeholder signals (Q5a's current form) to a written spec at `devdocs/spec/meaningful_traversal.md`.
  - **Gate:** condition-bound — when ≥3 sequential chains exist with movement traces showing observable convergence/spinning patterns (per the prior inquiry's finding's same deferral).
  - **Why if revived:** Q5a's full form requires this substrate. Until it ships, Q5a uses placeholder signals; precision is lower than possible.

- **What:** Build automated `tools/structural_check.sh` to support Q4c automation (the per-edit spec-symptom check currently requires manual inspection of git diffs).
  - **Gate:** condition-bound — when the user wants Q4c automated rather than manual.
  - **Why if revived:** Q4c is Tier 1 today via manual inspection. Automation reduces the per-edit measurement cost and increases consistency.

- **What:** Address the substrate-takeover scenario in the measurement framework. If the LLM substrate gains native support for primitives Homegrown currently approximates externally (e.g., native intuition-similarity via better retrieval), some of the 15 questions' answers change discontinuously.
  - **Gate:** condition-bound — when a substrate release announcement names native primitive support.
  - **Why if revived:** the current measurement framework is for the current substrate; a substrate-takeover would fork the framework.

---

## Reasoning

### Why these 11 evaluation dimensions over alternatives

Critique extracted 11 evaluation dimensions from sensemaking's conceptual model + user-stated bars + project-specific risk axes. The dimensions are: traceability (CRITICAL), proximate measurability, consistent measurability, frame-regression resistance (project-specific risk), specification clarity (all HIGH), absence-of-failure first-class (MEDIUM-HIGH, project-specific risk), modality handling, scope clarity, calibration-state honesty, non-redundancy, coverage contribution (MEDIUM).

Cross-checked against sensemaking's 8 perspectives — every perspective has at least one dimension representing it. No dimension blindness on the sensemaking axis. The project-specific risk dimensions (frame-regression resistance D4 + absence-of-failure first-class D9) explicitly address the two structurally most-load-bearing concerns from the source texts.

### Why the four-phase cross-cycle structure over the Baldwin cycle's six within-cycle phases

The two structures operate at different levels and are orthogonal, not competing.

The Baldwin cycle's six phases (run problem → observe → detect pattern → propose change → evaluate → encode into spec) describe what happens TEMPORALLY INSIDE one cycle. The four-phase trigger / speed / magnitude / retention structure describes how to MEASURE many cycles AS A RATE — it observes properties ACROSS cycles, not within them.

The user's seed questions (latency + convergence efficiency) are both cross-cycle questions, not within-cycle questions. Latency observes the duration from issue-surfacing to spec-encoding (multiple cycles potentially). Convergence efficiency observes attempts-per-success (multiple cycles by definition — each attempt is a cycle).

Sensemaking committed the four-phase structure at HIGH confidence after testing it against the strongest counter (the Baldwin-cycle-six-phase-counter); both survived at their respective levels. Decomposition built on this commitment.

### Why absence-of-failure is PRIMARY, not fallback

The source texts are explicit: regression detection is structurally easier than improvement detection. For meaning-producing disciplines, direct measurement of improvement reduces to reviewer judgment with no reliable numeric anchor; absence-of-failure measurements (anchored to the 23-symptom regression catalog) ARE the more reliable signal.

Treating absence-of-failure as a fallback would relegate three of the 15 questions (Q1b, Q4a, Q4c) to secondary status — contradicting sensemaking SV6's commitment. The questions are kept at first-class status, with explicit symptom-catalog references in each one's wording.

### Why ten of fifteen candidates were REFINED, not SURVIVED-directly

The 10 REFINEs are all *specification-clarity fixes* — operational definitions, boundary clarifications (e.g., cross-inquiry vs within-inquiry for Q2a), unit definitions (e.g., "attempt" for Q2b; N-counting for Q3b), reviewer-consistency mechanisms (e.g., Q3a's same-reviewer-same-categories), confounding-window handling (Q3d's overlap reporting), section-identity rules (Q4b's same-section determination).

None of the REFINEs change the question's intent; all sharpen *how* the question is operationally measured. Without the refinements, the questions clear the proximate-measurability bar but fail the consistent-measurability bar (different reviewers / different measurement events would diverge).

The 5 direct SURVIVE-with-caveat candidates (Q3c, Q4a, Q4c, Q5a, Q6a) either already had appropriate caveats from Innovation (when-mature; placeholder; partial-instrument) or are operationally simple enough (Q4c) that no refinement was needed.

### Why no candidates were KILLed

All 15 candidates passed D1 (the CRITICAL traceability dimension). Each traces to the primary anchor either directly (Q3d attribution is the boundary against capability-growth-from-substrate; Q3a is the canonical formula) or via the operational decomposition (Q1a-c address the trigger phase; Q2a-c address speed; etc.) or via the substrate (Q5a) or harness-scope (Q6a).

No candidate accidentally collapsed into a neighbor concept once refinements were applied (Q2a's cross-inquiry clarification was the key here — without it, Q2a could have collapsed into per-inquiry convergence). The frame-regression resistance dimension D4 was the active filter; all 15 survive it after refinement.

### Why the calculation method is out of scope

The user explicitly out-of-scoped it: *"that method is later, first we should understand the self improvement rate, what it means, what it includes and what it not include."*

Producing a calculation method now would commit weighting decisions (how much does cycle count matter vs per-cycle quality? how is Tier 2's not-yet-readable status handled?) that should be made when the first round of Tier 1 measurements has been collected. Designing the calculation in the abstract risks committing to weights that won't survive real data. The current finding produces the inputs the future calculation-method inquiry will consume — a clean problem statement for that future inquiry.

---

## Open Questions

### Monitoring

- **Will Q1a's system-detected fraction ever begin to rise?** Today the value is approximately 0% (the harness has no operational quality-awareness layer). The rate at which the value rises is the autonomy-graduation arc's direct signal. Observable across measurement events once Tier 1 measurements begin.

- **Will the Tier 2 questions become Tier 1 over time?** Q3c (cross-discipline transfer) and Q4a (slow-drift in full form) require sustained data or shipped infrastructure. Tracking which Tier 2 questions become readable (and when) is itself useful information.

- **Will reviewer-consistency hold for the meaning-producing-modality questions?** Q3a's per-cycle quality for meaning-producing disciplines depends on reviewer-consistency. If multiple reviewers diverge significantly, the measurement loses signal. Observable once multiple reviews are taken.

### Blocked

- **The calculation method itself** — explicitly out of scope here, queued for a future inquiry.

- **The numeric thresholds for "acceptable rate"** — what value of self-improvement rate counts as healthy vs degenerating? The source texts don't commit thresholds; thresholds are downstream of the calculation method + accumulated data.

### Research Frontiers

- **Meaningful-traversal substrate operationalization.** Q5a uses placeholder signals; the full operationalization is a deferred buildout per `docs/what_is_meaningful_traversal.md`.

- **Substrate-takeover effect on rate measurement.** The current framework is for the current substrate. If the LLM substrate gains native primitive support, the rate's components fork.

- **Self-improvement rate at L5+ autonomy.** The autonomy ladder's boundary level (per `docs/desc.md` + `docs/autonomy_ladder.md`) involves autonomous goal-formation that today's measurement framework doesn't cover. The current 15 questions span L0–L4.

- **Multi-deployment comparison.** Self-improvement rate is measured for ONE Homegrown deployment. Cross-deployment comparison (across different users running Homegrown on different domains) is not in scope today; future inquiry.

### Refinement Triggers

- **The N parameter defaults** (Q2b's N=10 inquiries; Q3a's N=30 days or 20 inquiries; Q3b's N≥30 from `thinking_space_dynamics.md`) are placeholders. Re-open once first measurements have been taken and the right N is empirically tunable.

- **The "same reviewer" assumption** in Q3a. If practical operation reveals that single-reviewer measurements drift or that reviewer rotation is necessary, the question's wording re-opens to incorporate inter-reviewer agreement reporting more centrally.

- **The Tier 1 / Tier 2 split.** Some questions could move between tiers as infrastructure ships (Q4a) or as data accumulates (Q3c, Q6a's trend form). The split is empirical and re-opens as the project's state changes.

---

## Source Input

<details>
<summary>Raw user input for this inquiry</summary>

```text
/MVL+
self-improvement rate is interesting term.
how would you come up with a design that can be proximately but consistantly measurable for self-improvement rate?


system with self improvement claim

 how long does it need to wait after error is catched to apply fixes
 how much cycles self improvement requires, (fix, did not worked, another path and another till finally it is correct)
 ...


these are just ideas, and i am interested in finding these measurable question list, at list around 15, to come up with a self improvement rate calculation method, but that method is later, first we should understand the self improvement rate , what it means , what it inclides and what it not include
```

</details>
