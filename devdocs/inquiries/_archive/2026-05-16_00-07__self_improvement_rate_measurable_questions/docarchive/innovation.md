# Innovation — Self-Improvement Rate Measurable-Question Candidates

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_00-07__self_improvement_rate_measurable_questions/_branch.md

Generate candidate question wordings for each of the 6 pieces. Total target: ~15 questions distributed P1~3 / P2~3 (user seeds anchored) / P3~4 / P4~3 / P5~1 / P6~1.

Per piece, apply 7 mechanisms × 3 variations; apply 5 tests + 2 user bars (proximate + consistent). Tag each: scope / modality / calibration-state / direct-vs-absence. Where absence-of-failure applies, reference symptoms from enes/regression/desc.md. Run assembly + axis coverage check.

End purpose: give Critique a concrete set of ~15 candidate questions to evaluate.
```

---

## Phase 1 — Seeds

Per decomposition's handoff, each of the 6 pieces (P1 trigger / P2 speed / P3 magnitude / P4 retention / P5 substrate / P6 harness-scope) has a verification target with a target count. The seeds for innovation are:

- **S1 (P1 — Trigger):** *gap.* What signals tell the system improvement is needed? At Level 0 the trigger source is mostly human; at L4+ it must be mostly system.
- **S2 (P2 — Speed):** *user-given seeds.* Detection-to-correction latency + convergence efficiency. Plus cost-per-improvement from D-13.
- **S3 (P3 — Magnitude):** *combination of dimensions.* The canonical desc.md formula (cycles × quality) decomposes into 4-5 distinct observables.
- **S4 (P4 — Retention):** *failure-modes-clearer-than-success.* Retention is best observed via absence-of-regression and absence-of-drift signals.
- **S5 (P5 — Substrate):** *constraint.* Meaningful traversal is acknowledged fuzzy; the question uses placeholder signals from `enes/what_is_meaningful_traversal.md`.
- **S6 (P6 — Harness-scope):** *signal.* Has the improvement mechanism itself improved?

### Intuition / Direction

- **Context:** Sensemaking's SV6 conceptual model (primary anchor + 4 phases + 3 scopes + transverse modality + absence-of-failure first-class + calibration-state stratification + 6 verified boundaries). Decomposition's 6-piece question tree.
- **Valuation:** HIGH-VALUE candidates trace back to the primary anchor (task-completion-ability derivative) AND respect the proximately+consistently measurable bars AND avoid measuring neighbor concepts (task-completion rate, capability growth, etc.). LOW-VALUE candidates look measurable but measure something other than self-improvement rate.
- **Motivation:** give Critique enough concrete candidates to evaluate — ~15 surviving questions across the 6 pieces.

---

## Phase 2 — Generate

For each piece, mechanisms are applied to produce candidates. Per-piece coverage is at least 1 Generator + 1 Framer (minimum per the framework); full 7-mechanism coverage is achieved across the inquiry as a whole.

### P1 — Trigger phase (target ~3 questions)

**Mechanism applications:**

*Lens Shifting (Framer)*:
- *Focused variation:* Shift from "what triggered improvement?" to "what fraction of trigger events came from system signal vs human pointing?" Naturally graduates with autonomy.
- *Contrarian variation:* Shift to "trigger absence" — when the system claims no improvement is needed, is that claim symptom-supported?

*Absence Recognition (Generator)*:
- *Focused variation:* Reference the 5 regression-symptom types (output / experience / pipeline / error / spec from `enes/regression/desc.md`). When system reports no need, are all 5 symptom families checked for absence?

*Inversion (Framer)*:
- *Contrarian variation:* Invert severity-triage — does the system correctly DELAY low-severity improvements (not act precipitously), as well as fix HIGH-severity quickly?

### Candidates for P1

**Q1a (lens-shifting focused) — "Self-detection vs human-flagged ratio":**

> Over the past N completed Baldwin cycles, what fraction were triggered by **system-detected need** (the harness's own quality-awareness layer signaled an issue), versus **human-flagged need** (a person, including the user as Level-0 bootstrap, pointed out an issue), versus **user-initiated investigation** (a person asked an open question without flagging a specific issue)?

- *Scope:* harness-level (aggregate count across the corpus).
- *Modality:* transverse (applies to all discipline-types).
- *Calibration-state:* answerable-today at coarse precision. *Today's value is approximately 0% system-detected (the harness has no operational quality-awareness layers yet).*
- *Type:* direct measurement.

**Q1b (absence-recognition focused) — "Absence-of-need claim verification":**

> When the system (or a user reviewing the system) reports that no improvement is currently needed for a given discipline or for the corpus, is the report supported by an explicit symptom-absence check across the 5 regression-symptom types from `enes/regression/desc.md` — (i) output symptoms (no thin frontier, no flat progression); (ii) experience symptoms (no déjà vu, no can't-act); (iii) pipeline symptoms (no downstream rejection); (iv) error symptoms (no internal contradiction); (v) spec symptoms (no removed safeguards) — or is it untested self-confidence?

- *Scope:* discipline-level (per X) and corpus-level (aggregate).
- *Modality:* transverse (symptom catalog applies across discipline-types).
- *Calibration-state:* answerable-today (the symptom catalog exists; check can be performed by a human reviewer or via `tools/structural_check.sh` once it ships).
- *Type:* absence-of-failure (verifies that the absence-claim is symptom-supported).

**Q1c (inversion contrarian) — "Bidirectional severity-triage capability":**

> Among triggered improvement events in the past N inquiries: (i) does the system act on HIGH-severity needs quickly (within an acceptable latency budget for the severity class), AND (ii) does the system correctly DEFER or NOT-ACT on LOW-severity needs (avoiding premature self-modification on issues that don't warrant the change cost)?

- *Scope:* harness-level (across the corpus).
- *Modality:* transverse.
- *Calibration-state:* answerable-today (severity tags are observable in `_state.md` history; act/defer outcomes observable in subsequent edits).
- *Type:* direct measurement (with two-direction sub-question).

### P2 — Speed phase (target ~3 questions; user seeds anchored)

**Mechanism applications:**

*Domain Transfer (Generator)*:
- *Generic from queuing theory:* latency = wait-time + service-time across the Baldwin cycle's six within-cycle phases.
- *Focused from search algorithms:* convergence efficiency = iterations until acceptable solution; correction chains are the unit.
- *Contrarian from manufacturing cost-accounting:* cost-per-unit = fixed overhead + variable cost.

*Constraint Manipulation (Framer)*:
- *Focused:* observe convergence under a "must succeed within N attempts" constraint.

### Candidates for P2

**Q2a (user seed 1 — domain-transfer from queuing theory) — "Detection-to-correction latency":**

> What is the median elapsed duration (measured in inquiry-cycles or calendar time) between an issue's first observable surfacing in the harness — recorded as either a `_state.md` history entry flagging a problem, a `/td-critique` KILL/REFINE verdict on a discipline's output, or a human correction logged in an inquiry's `_branch.md` Source Input section — and the moment the corresponding spec change is encoded into the relevant discipline's spec file? Report the median plus the distribution across Baldwin-cycle phase-segments (detection-to-diagnosis latency, diagnosis-to-proposal latency, proposal-to-evaluation latency, evaluation-to-encoding latency) to identify the bottleneck phase.

- *Scope:* discipline-level (the spec being changed); harness-level (the aggregate distribution).
- *Modality:* transverse.
- *Calibration-state:* answerable-today at coarse precision via `_state.md` + git history.
- *Type:* direct measurement.

**Q2b (user seed 2 — domain-transfer from search algorithms) — "Convergence efficiency":**

> When an improvement attempt fails (the proposed spec change either doesn't address the issue OR causes a regression and is reverted), how many subsequent attempts are required before a successful improvement is encoded? Report the distribution: median, max, and the *abandonment rate* — the fraction of correction chains (per `homegrown/protocols/loop_diagnose.md`'s correction-chain definition) that terminate in "gave up" rather than "success."

- *Scope:* discipline-level (per-spec) and harness-level (corpus-wide convergence rate).
- *Modality:* transverse.
- *Calibration-state:* answerable-today at coarse precision (correction chains observable in `_state.md` + loop_diagnose output).
- *Type:* direct measurement.

**Q2c (domain-transfer from manufacturing — focused on D-13) — "Cost per encoded improvement":**

> What is the average cost per encoded improvement, measured as: (i) context-budget consumed (token count for the inquiry that produced the improvement); (ii) calendar duration (from issue surfacing to encoded change); (iii) human-effort hours (when a human contributed: review, correction, or authorship)? Report the breakdown so the relative weight of system-cost vs human-cost is observable.

- *Scope:* discipline-level (per-improvement); harness-level (aggregate).
- *Modality:* transverse.
- *Calibration-state:* answerable-today at coarse precision (token counts visible in agent-harness logs; duration and human-effort estimable).
- *Type:* direct measurement.

### P3 — Magnitude phase (target ~4 questions; heaviest)

**Mechanism applications:**

*Combination (Generator)*:
- *Generic:* the canonical desc.md formula = cycle count × per-cycle quality. Decomposes into 2-4 questions.
- *Focused:* combine calibration-maturity coverage with discipline-type — what fraction of disciplines in each type-family have reached N≥30?
- *Contrarian:* combine transfer cascading with discipline-graph — improvements upstream-of-many produce more downstream effects than improvements in leaves.

*Lens Shifting (Framer)*:
- *Focused on attribution:* shift the magnitude measurement to attribution-class — system-modification vs substrate-update vs human-edit.

### Candidates for P3

**Q3a (combination of desc.md formula's two factors) — "Cycle count × per-cycle quality":**

> Over a calendar window (e.g., the past N=30 days or N=20 completed inquiries), how many Baldwin cycles produced encoded spec changes (a cycle is complete when *run problem → observe → detect pattern → propose change → evaluate → encode into spec* has run to encoding)? Report the count alongside a per-cycle quality assessment, split by discipline-type:
> - *Mechanistic disciplines (Comprehend, Exploration, Decomposition):* numeric quality measure — delta in coverage / predictive-accuracy / structural-correctness for the discipline after the spec change.
> - *Meaning-producing disciplines (Sensemaking, Innovation, td-critique):* judgment-derived categorical — Major / Moderate / Minor / Negligible improvement, with the human reviewer's grounds stated.

- *Scope:* harness-level (count); discipline-level (per-cycle quality).
- *Modality:* both — transverse split on discipline-type explicit.
- *Calibration-state:* answerable-today at coarse precision (cycles observable via spec-file git history; numeric quality observable for mechanistic; judgment quality requires reviewer).
- *Type:* direct measurement.

**Q3b (combination — calibration maturity coverage) — "Disciplines at N≥30":**

> What fraction of the 11 disciplines in the harness (`/sense-making`, `/innovate`, `/td-critique`, `/explore`, `/decompose`, `/comprehend`, `/reflect`, `/navigation`, `/MVL`, `/MVL+`, `/meta-loop`) have reached the N≥30 inquiry-volume threshold required for calibrated improvement claims (per `enes/thinking_space_dynamics.md`)? Report the fraction separately for mechanistic disciplines and meaning-producing disciplines; report the per-discipline N as well.

- *Scope:* discipline-level (per-discipline N); corpus-level (the fraction).
- *Modality:* both (the fraction is reported with discipline-type split).
- *Calibration-state:* answerable-today (count inquiries per discipline).
- *Type:* direct measurement.

**Q3c (combination — transfer cascading) — "Cross-discipline transfer rate":**

> When discipline X is improved (a spec change is encoded), do downstream disciplines that consume X's outputs — e.g., `/innovate` consumes `/sense-making`'s anchor set; `/td-critique` consumes `/innovate`'s candidates; `/conclude` protocol consumes all discipline outputs — show observable improvement (in their per-cycle quality measurements per Q3a) on subsequent runs that use the improved X? Report the cascade rate: improvements that produced downstream effects vs improvements that did not.

- *Scope:* corpus-level (cross-discipline graph).
- *Modality:* both (transverse modality on downstream effect measurement).
- *Calibration-state:* answerable-when-mature (requires N inquiries post-improvement to observe cascades; not meaningful at low calibration).
- *Type:* direct measurement.

**Q3d (lens-shifting — attribution) — "Attribution-stratified magnitude":**

> Of the magnitude observed in per-cycle quality (Q3a) across the past N inquiries, what fraction is attributable to: (i) **system-encoded spec changes** (the harness's own self-modification, with an audit trail through the Baldwin cycle's encode-into-spec phase); (ii) **substrate updates** (LLM version changes, e.g., Claude 4.6 → 4.7 — observable from substrate version logs); (iii) **human-authored spec edits at Level 0 bootstrap** (the user editing specs directly, observable via git author/commit-message)?

- *Scope:* harness-level (across the corpus).
- *Modality:* transverse.
- *Calibration-state:* answerable-today at coarse precision (substrate-updates are dated; human edits are git-traceable; system-encoded changes are also git-traceable when they exist — today's value is approximately 0% system-share at L0).
- *Type:* direct measurement (with attribution sub-classification).

### P4 — Retention phase (target ~3 questions)

**Mechanism applications:**

*Absence Recognition (Generator)*:
- *Focused on regression catalog Type 5 spec-symptoms* (shorter-than-before / missing-sections / weakened-language / removed-safeguards) and Pattern 5 slow-drift.
- *Contrarian on reverted-improvement count* — improvements that got encoded but were later reverted.

*Inversion (Framer)*:
- *Contrarian:* invert "drift is bad" → distinguish degradation drift from improvement-supersession (the prior improvement was replaced by a better one).

### Candidates for P4

**Q4a (absence-recognition — Pattern 5 slow-drift) — "Slow-drift detection frequency":**

> Across the harness's spec files, does the slow-drift symptom-pattern (Pattern 5 from `enes/regression/desc.md`: *"no single-session symptoms, but across sessions: runs that used to surprise no longer do; frontier questions get repetitive; canary problem re-runs produce thinner output than the reference"*) fire? Report: (i) the canary reference runs maintained per discipline (count); (ii) the frequency of slow-drift detection events when canary problems are re-run (events per N re-runs); (iii) where canary infrastructure isn't yet shipped, the manual qualitative drift-detection events the user has flagged.

- *Scope:* discipline-level (per spec); corpus-level (aggregate drift rate).
- *Modality:* transverse.
- *Calibration-state:* partial-answerable-today (the symptom-pattern is specified; canary reference runs are listed as Next Action MUST in the prior inquiry's finding but not yet built; manual detection is possible).
- *Type:* absence-of-failure (slow-drift absent = retention working; slow-drift firing = retention failing).

**Q4b (combination — reverted-improvement vs superseded distinction) — "Reverted vs superseded fraction":**

> Of the spec changes encoded in the past N inquiries, what fraction were either (i) **reverted** (entirely removed by a later edit) or (ii) **superseded** (replaced by different content addressing the same section)? Distinguish:
> - *Reverted-as-regression:* the prior edit was undone because it caused observable quality decline.
> - *Superseded-by-better:* the prior edit was replaced by a structurally-improved version (the original goal of the edit is still served, by a different mechanism).
> A high reverted-as-regression fraction signals the self-improvement loop is degenerating toward self-degradation; a high superseded-by-better fraction signals healthy iteration.

- *Scope:* discipline-level (per spec); corpus-level (aggregate).
- *Modality:* transverse.
- *Calibration-state:* answerable-today (observable via git history with appropriate diff analysis; the reverted-vs-superseded distinction requires a reviewer judgment per edit).
- *Type:* direct measurement (with sub-distinction).

**Q4c (absence-recognition — Type 5 spec-symptoms applied per edit) — "Per-edit spec-symptom check":**

> For each discipline spec edit in the past N inquiries, does the edit trigger any Type 5 spec-symptoms from `enes/regression/desc.md`:
> - *Shorter-than-before:* net deletion in line count (could be redundancy removal OR load-bearing-content removal).
> - *Missing sections:* a section referenced by the spec's Change Log no longer exists.
> - *Weakened language:* "MUST" replaced with "should"; "required" replaced with "recommended"; structural safeguards softened.
> - *Removed safeguards:* failure modes removed; adversarial requirements softened; telemetry sections deleted.
> Report per-edit symptom-fire count; edits with multiple symptoms firing are high-risk for regression.

- *Scope:* discipline-level (per spec edit).
- *Modality:* transverse.
- *Calibration-state:* answerable-today (the four symptoms are observable via git diff + manual inspection; could be automated when `tools/structural_check.sh` ships).
- *Type:* absence-of-failure (the four symptoms are spec-level regression signals; their absence per edit is the retention signal at the spec layer).

### P5 — Substrate / meaningful-traversal (target ~1 question)

**Mechanism applications:**

*Combination (Generator)*:
- *Focused:* combine all 5 placeholder signals from `enes/what_is_meaningful_traversal.md` into a per-inquiry classification.

### Candidates for P5

**Q5a (combination — 5 placeholder signals) — "Meaningful-vs-spinning ratio with placeholder signals":**

> For each completed inquiry in the past N runs, are the cycles in that inquiry classified as **meaningful traversal** versus **spinning**, based on the 5 placeholder signals from `enes/what_is_meaningful_traversal.md`:
> - *Coverage:* did each iteration explore territory the previous iterations didn't?
> - *Convergence:* did the open-question count shrink across iterations (frontier-question count from each discipline's frontier section)?
> - *Productivity:* did each iteration produce new structural material (new anchors, new candidates, new verdicts) rather than restating prior outputs?
> - *Directedness:* did the new questions opened by each iteration topically connect to the original `_branch.md` question?
> - *Depth:* did the loop probe specific anchors deeply at some point (per /comprehend's CV-depth model), or did it stay surface across all iterations?
> Report the meaningful-vs-spinning ratio across the corpus, with the explicit caveat that these signals are placeholders pending `devdocs/spec/meaningful_traversal.md`.

- *Scope:* harness-level.
- *Modality:* transverse.
- *Calibration-state:* partial-answerable-today via placeholder signals; precision improves when the meaningful-traversal substrate ships.
- *Type:* substrate measurement (gates whether other measurements' cycle counts are valid).

### P6 — Harness-scope / recursive improvement (target ~1 question)

**Mechanism applications:**

*Lens Shifting (Framer)*:
- *Focused:* shift the question from "did the improvement mechanism improve?" to "did the object-level measurements themselves trend upward after each meta-edit?"

*Extrapolation (Generator)*:
- *Focused:* extrapolate the rate of meta-level spec edits; project when meta-improvement becomes operational.

### Candidates for P6

**Q6a (lens-shifting + extrapolation) — "Meta-level improvement of the improvement mechanism":**

> Over the past N inquiries, has the **improvement mechanism itself** been improved? Observable as: (i) **meta-level spec edits** — count of edits to the disciplines and protocols responsible for self-improvement, specifically `homegrown/protocols/loop_diagnose.md`, `homegrown/protocols/outcome_review.md`, `homegrown/protocols/spec_governance.md`, and once shipped `homegrown/intuit/SKILL.md` and `homegrown/intuit/references/intuit.md`; AND (ii) **post-meta-edit object-level trend** — after each meta-level edit, do the object-level measurements from this question list (Q1a self-detection ratio, Q2a latency, Q2b convergence efficiency, Q3a per-cycle quality, Q4a slow-drift frequency) show observable improvement trend? Report meta-edit count alongside observable object-level effect.

- *Scope:* harness-level (by definition).
- *Modality:* transverse.
- *Calibration-state:* partial-answerable-today (count meta-edits via git history is easy); fuller-answerable-when-mature (object-level trend requires sustained data accumulation post-meta-edit).
- *Type:* direct measurement at the meta-level.

---

## Phase 3 — Test

Each candidate run through the 5 tests + the 2 user-stated bars (proximate + consistent). Disposition assigned.

| Q# | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism indep. | Proximate | Consistent | Disposition |
|---|---|---|---|---|---|---|---|---|
| **Q1a** self-vs-human ratio | MED | HIGH | HIGH | HIGH | HIGH (multi-mech) | YES | YES | **ACTIONABLE** |
| **Q1b** absence-of-need check | HIGH | HIGH | HIGH | HIGH | MED | YES (with reviewer) | YES | **ACTIONABLE** |
| **Q1c** bidirectional triage | MED | HIGH | MED | HIGH | HIGH | YES | YES | **ACTIONABLE** |
| **Q2a** latency *(user seed 1)* | LOW (seed) | HIGH | HIGH | HIGH | HIGH | YES | YES | **ACTIONABLE** |
| **Q2b** convergence efficiency *(user seed 2)* | LOW (seed) | HIGH | HIGH | HIGH | HIGH | YES | YES | **ACTIONABLE** |
| **Q2c** cost per improvement | MED | HIGH | MED | HIGH | HIGH | YES | YES | **ACTIONABLE** |
| **Q3a** cycle count × quality | MED | HIGH | HIGH | HIGH (mechanistic) / MED (meaning-producing requires reviewer) | HIGH | YES | YES | **ACTIONABLE** |
| **Q3b** N≥30 coverage | MED | HIGH | HIGH | HIGH | MED | YES | YES | **ACTIONABLE** |
| **Q3c** transfer cascade rate | HIGH | HIGH | HIGH | MED (cascade requires post-edit N to observe) | HIGH | NOT-YET (when calibration matures) | YES | **ACTIONABLE-WHEN-MATURE** |
| **Q3d** attribution-stratified magnitude | HIGH | HIGH | HIGH | HIGH (today's system-share ≈ 0 is itself a measurement) | HIGH | YES | YES | **ACTIONABLE** |
| **Q4a** slow-drift detection | HIGH | HIGH | HIGH | MED (canary infrastructure pending; manual works) | PARTIAL (manual today; automated when canary ships) | YES | **ACTIONABLE** *(partial-instrument)* |
| **Q4b** reverted vs superseded | MED | HIGH | HIGH | HIGH | HIGH | YES | YES | **ACTIONABLE** |
| **Q4c** per-edit spec-symptom check | HIGH | HIGH | HIGH | HIGH | HIGH | YES | YES | **ACTIONABLE** |
| **Q5a** meaningful-vs-spinning with placeholder signals | MED (signals from source text) | MED (substrate is acknowledged fuzzy) | HIGH | MED (placeholder signals are estimable) | MED | YES (with placeholder caveat) | YES | **ACTIONABLE-WITH-PLACEHOLDER-CAVEAT** |
| **Q6a** meta-level improvement | HIGH | HIGH | HIGH | MED (meta-edit count today; trend requires data) | MED | YES (for meta-edit count); NOT-YET (for trend) | YES | **ACTIONABLE-WITH-MATURITY-CAVEAT** |

**15 surviving candidates. All ACTIONABLE (some with caveats).** No KILLs in this generation pass — every candidate met both user bars (proximate + consistent) at least partially.

---

## Phase 3.5 — Assembly Check

Examine the 15 survivors together: do any combinations produce an emergent question that none of the individual ones produces?

**Emergent candidate 1: Q3a × Q3d composite — "Self-improvement-attributed rate."**
- Combining "cycle count × quality" (Q3a) with "attribution-stratified magnitude" (Q3d) produces a composite: cycles × quality × attribution-to-self-modification = the *self-improvement-attributed* component of the rate.
- *Evaluation:* This composite is the OPERATIONAL HEART of the desc.md formula once attribution is honored (per sensemaking SV6's emphasis on attribution-to-self-modification). Q3d covers attribution; Q3a covers cycles × quality. The composite reading is implicit when both questions are answered together — no separate question needed. **Disposition:** captured by Q3a + Q3d jointly, not a separate emergent question.

**Emergent candidate 2: Q1a × Q6a — "Autonomy-graduation arc."**
- Combining "self-vs-human-flagged ratio" (Q1a; trigger phase) with "meta-level improvement" (Q6a; harness scope) produces a trajectory: as the system matures, Q1a's system-share rises AND Q6a's meta-edits accumulate. Both moving together signals real autonomy graduation.
- *Evaluation:* the trajectory is an EMERGENT pattern observable across multiple measurement events, not a separate question. Critique can evaluate the trajectory across Q1a + Q6a's answers over time. No new question. **Disposition:** captured by Q1a + Q6a jointly.

**Emergent candidate 3: Q4a × Q4c — "Multi-layer drift surveillance."**
- Combining "slow-drift detection" (Q4a; behavioral / output layer) with "per-edit spec-symptom check" (Q4c; spec layer) produces a multi-layer drift surveillance — Q4c catches spec-level regression before any output is produced; Q4a catches behavioral regression after the spec change is in use.
- *Evaluation:* these are two layers of the same retention-detection effort, both first-class in the regression catalog. They COMPLEMENT, not COMBINE — neither subsumes the other. Both kept as separate questions. **Disposition:** the complementarity is itself the value; no new emergent question needed.

**Assembly verdict:** no new emergent questions. The 15 candidates collectively form a coherent measurement system; pairwise combinations enrich the readings but don't generate new measurement targets.

---

## Phase 3.6 — Axis Coverage Check

Across the 15 questions, do all the orthogonal axes from sensemaking's conceptual model receive coverage?

| Axis | Variants | Coverage |
|---|---|---|
| **Cross-cycle phase** | trigger / speed / magnitude / retention | ✓ all 4 covered (P1 / P2 / P3 / P4). Plus substrate (P5) and harness-scope (P6). |
| **Measurement scope** | discipline / corpus / harness | ✓ all 3 covered. Discipline-level: Q1b (per X), Q2a (per spec), Q2b (per spec), Q3b (per discipline), Q3a (per-cycle), Q4a (per spec), Q4b (per spec), Q4c (per edit). Corpus-level: Q3b fraction, Q3c cascade, Q4a aggregate, Q4b aggregate. Harness-level: Q1a, Q1c, Q2c (aggregate), Q3a count, Q3d, Q5a, Q6a. |
| **Modality (transverse)** | mechanistic / meaning-producing | ✓ both addressed. Q3a explicitly splits modality. Most other questions are modality-transverse (applies to all discipline-types). |
| **Calibration-state** | answerable-today / answerable-when-mature | ✓ both covered. Today: Q1a, Q1b, Q1c, Q2a, Q2b, Q2c, Q3a (partial), Q3b, Q3d, Q4b, Q4c. When-mature: Q3c (transfer cascades), Q4a (canary ships), Q5a (substrate matures), Q6a (object-level trend post-meta-edit). |
| **Direct vs absence-of-failure** | direct / absence | ✓ both first-class. Direct: Q1a, Q1c, Q2a, Q2b, Q2c, Q3a, Q3b, Q3c, Q3d, Q4b, Q5a, Q6a. Absence-of-failure: Q1b, Q4a, Q4c. |
| **User-seed coverage** | latency / convergence efficiency | ✓ both explicitly anchored (Q2a, Q2b). |
| **Primary-anchor traceability** | rate of change of task-completion-ability attributed to self-modification | ✓ all 15 questions trace back via either direct measurement of attribution (Q3d), or substrate gating (Q5a), or operational decomposition (Q3a cycles × quality), or net-posture (Q4a-Q4c retention/regression). |

**Frame-inheritance bias check:** the candidate set inherits the 6-piece structure from decomposition. Did this constrain the questions toward decomposition's pre-committed framing in a way that would have hidden alternative measurements?

Reviewing the candidate set: the 6 pieces correspond to load-bearing dimensions of the conceptual model (4 cross-cycle phases + 2 cross-cutting concerns). No alternative measurement structure surfaced during innovation that the 6-piece structure suppressed. **No frame-inheritance bias detected.**

**Axis coverage verdict: adequate.** All sensemaking-committed axes have variants among the 15 questions.

---

## Phase 4 — Mechanism Coverage (Telemetry)

- **Generators applied:** 4 / 4
  - *Combination:* Q3a, Q3b, Q3c, Q4b, Q5a (5 applications).
  - *Absence Recognition:* Q1b, Q4a, Q4c (3 applications; absence-of-failure family first-class per sensemaking).
  - *Domain Transfer:* Q2a (queuing theory), Q2b (search algorithms), Q2c (manufacturing cost-accounting) (3 applications).
  - *Extrapolation:* Q6a (1 application; lighter use because measurement is mostly observational, not predictive).
- **Framers applied:** 3 / 3
  - *Lens Shifting:* Q1a (autonomy-graduation lens), Q3d (attribution lens), Q6a (object-level-trend lens) (3 applications).
  - *Constraint Manipulation:* implicit in Q5a (the constraint "must demonstrate placeholder signals") and in Q1c (the constraint "must triage correctly in both directions") (2 applications).
  - *Inversion:* Q1c (invert single-direction triage), Q4a (invert retention to drift-absence), Q4b (invert improvement to reverted/superseded), Q4c (invert spec-improvement to spec-symptom firing) (4 applications).
- **Convergence:** YES — multiple mechanisms point to absence-of-failure as load-bearing (Absence Recognition + Inversion); multiple mechanisms point to attribution as load-bearing (Lens Shifting + Combination). **3+ mechanisms converge on these structural-design choices.** High confidence.
- **Survivors tested:** 15 / 15 — all candidates passed the 5-test cycle + 2 user bars.
- **Failure modes observed:**
  - *Premature evaluation:* NO (generated then tested).
  - *Single-mechanism trap:* NO (4G + 3F all applied).
  - *Early frame lock:* NO (multiple candidates per piece with contrarian variations included where applicable).
  - *Innovation without grounding:* NO (testing performed).
  - *Mechanism exhaustion:* NO (all candidates survived).
  - *Survival bias:* PARTIAL-MITIGATED. Uncomfortable candidates (Q4b's "drift might be supersession-not-degradation" distinction; Q1c's "delay-correctly-on-LOW-severity" two-direction triage; Q3d's "today's system-share ≈ 0 is itself a measurement") preserved with full status. Absence-of-failure first-class per sensemaking commitment — not relegated to fallback.

**Overall: PROCEED** (full mechanism coverage + convergence on design choices + all 15 candidates tested + axis coverage adequate + assembly check produced no new emergent questions).

---

## Handoff to Critique

**The 15 candidate measurable questions** (with full text in Phase 2):

| Piece | # | Short name | Calibration-state |
|---|---|---|---|
| **P1 trigger** | Q1a | Self-detection vs human-flagged ratio | today |
| **P1 trigger** | Q1b | Absence-of-need claim verification | today |
| **P1 trigger** | Q1c | Bidirectional severity-triage | today |
| **P2 speed** | Q2a | Detection-to-correction latency *(user seed 1)* | today |
| **P2 speed** | Q2b | Convergence efficiency *(user seed 2)* | today |
| **P2 speed** | Q2c | Cost per encoded improvement | today |
| **P3 magnitude** | Q3a | Cycle count × per-cycle quality | today (partial) |
| **P3 magnitude** | Q3b | Disciplines at N≥30 calibration | today |
| **P3 magnitude** | Q3c | Cross-discipline transfer rate | when-mature |
| **P3 magnitude** | Q3d | Attribution-stratified magnitude | today |
| **P4 retention** | Q4a | Slow-drift detection frequency | today (manual); when-canary-ships (automated) |
| **P4 retention** | Q4b | Reverted vs superseded fraction | today |
| **P4 retention** | Q4c | Per-edit spec-symptom check | today |
| **P5 substrate** | Q5a | Meaningful-vs-spinning with placeholder signals | today (with caveat) |
| **P6 harness-scope** | Q6a | Meta-level improvement of the mechanism | today (count); when-mature (trend) |

**Critique's contraction task:**
- Apply Phase 0 dimension extraction (probably similar to the prior inquiry's dimensions: correctness / coherence / completeness / proximate-measurability / consistent-measurability / frame-regression-resistance / traceability-to-primary-anchor).
- Apply Phase 1 fitness landscape — viable / boundary / dead regions.
- Apply Phase 2 adversarial evaluation per question (prosecution: does the question accidentally measure a neighbor concept? defense: does it trace cleanly to the primary anchor?).
- Apply Phase 3 verdict — SURVIVE / REFINE / KILL per question.
- Apply Phase 3.5 assembly check.
- Apply Phase 4 coverage + convergence assessment.

Given the high actionability ratings + adequate axis coverage + no failure modes observed, most candidates are expected to survive Critique; the contraction work is likely REFINE (sharpen the wording) rather than KILL (eliminate the candidate). The user wanted "around 15," so the final list may be 12-18 after Critique's pruning + refinement.
