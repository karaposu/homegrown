# Exploration: Rapid Fundamentals Improvement Focus

## User Input

`devdocs/inquiries/2026-04-27_21-14__rapid_fundamentals_improvement_focus/_branch.md`

## 1. Mode and Entry Point

- **Mode:** Mixed artifact + possibility exploration.
- **Entry point:** Signal-first. The user asks for the biggest current focus for rapid fundamentals improvement, not a general roadmap.

Artifacts scanned:

- Current source layout under `homegrown/`.
- Recent findings:
  - `devdocs/inquiries/2026-04-27_20-26__navigation_mvl_integration/finding.md`
  - `devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/finding.md`
- Prior archived findings:
  - `devdocs/inquiries/_archive/comparative_mvl_loop_diagnosis/finding.md`
  - `devdocs/inquiries/_archive/autonomous_continuous_self_maintenance_levels/finding.md`
  - `devdocs/inquiries/_archive/continuous_loop_priorities/finding.md`
  - `devdocs/inquiries/_archive/next_implementation_priority/finding.md`
- Strategic summaries:
  - `devdocs/sensemaking/what_this_project_needs_most.md`
  - `devdocs/scientific_summary.md`
  - `enes/what_is_meaningful_traversal.md`

## 2. Exploration Cycles

### Cycle 1: Current State Scan

#### Scan

Current Homegrown source includes:

- Core thinking disciplines: `explore`, `sense-making`, `decompose`, `comprehend`, `innovate`, `td-critique`.
- Boundary disciplines: `reflect`, `navigation`.
- Loop runners: `MVL`, `MVL+`.
- New runner concept/source: `meta-loop`.
- Shared protocols: `conclude`, `resume`, `unknown`.

Recent work also added:

- timestamped inquiry folders in Homegrown MVL/MVL+ source;
- `meta-loop/SKILL.md`;
- install script support for `meta-loop`;
- clarified Navigation as boundary perception, not selection.

#### Signals Detected

1. **Architecture is advancing quickly.** New concepts and runner scaffolds are appearing fast.
2. **Evidence systems lag behind architecture.** There is still no visible `devdocs/self_maintenance.md` ledger.
3. **Validation tooling is incomplete.** MVL+ still references `tools/structural_check.sh`, but that script is missing locally.
4. **Correction chains are already happening.** The user repeatedly runs MVL+, critiques the finding, and reruns with corrective guidance.

#### Resolution Decision

Zoom in on prior findings that directly discuss self-maintenance and loop diagnosis.

#### Probe

`autonomous_continuous_self_maintenance_levels` says Homegrown is Level 0.5 and should move to Level 1 by adding a self-maintenance ledger with trigger, diagnosis, evidence, proposed change, evaluation plan, and retain/revert/refine closure.

`comparative_mvl_loop_diagnosis` says the most useful first Level 1 mechanism is comparative diagnosis over correction chains: bad finding -> user correction -> improved finding.

#### Frontier State

The near-term gap is not "lack of ideas." It is lack of a durable evidence loop that turns user correction into improvements to the fundamentals.

#### Confidence Map Update

- Current architecture inventory: confirmed.
- Missing maintenance ledger: scanned, likely confirmed by source inventory.
- Correction-chain diagnosis as candidate focus: confirmed prior recommendation.

### Cycle 2: Prior Priority Findings

#### Scan

`what_this_project_needs_most` argued for consolidation followed by external validation. Its main warning was self-reference blindness: Homegrown has been developed mostly by using Homegrown on itself.

`continuous_loop_priorities` later refined that scope: if the goal is validating the orchestrated continuous loop, then build the loop before external validation of the whole claim. It proposed a roadmap: consolidate, conditional Navigation, continuous-loop runner, meaningful traversal, synthetic test.

`next_implementation_priority` argued for `/intuit` Phase A as the critical path to the long-term autonomy/Baldwin cycle architecture.

#### Signals Detected

1. **There are several valid priority frames.**
   - Scientific credibility -> external validation.
   - Orchestration -> meta-loop/continuous-loop runner.
   - Long-term autonomy -> `/intuit`.
   - Self-maintenance -> loop diagnosis + ledger.

2. **The user's wording narrows the frame.** They ask for rapid fundamentals improvement, not long-term autonomy or external credibility.

3. **Fundamentals are the discipline/protocol specs themselves.** Improving them quickly requires feedback about where they failed.

4. **Correction chains are the richest current feedback.** They directly compare an unsatisfactory loop output against user correction and a better later output.

#### Resolution Decision

Probe whether the biggest focus should be meta-loop, `/intuit`, external validation, or correction-chain self-maintenance.

#### Probe

- Meta-loop is now scaffolded, but it depends on strong fundamentals. If the underlying disciplines produce weak findings, a runner will only traverse weakly faster.
- `/intuit` may be strategically important, but it is a new capability. It does not immediately improve existing fundamentals unless paired with outcome calibration.
- External validation is critical for scientific credibility, but it is broader than fundamentals improvement and can reveal failures without automatically converting them into spec improvements.
- Correction-chain diagnosis directly targets fundamentals. It asks: what failed in Sensemaking, Innovation, Critique, CONCLUDE, framing, context elicitation, or orchestration?

#### Frontier State

The candidate with the highest fit to "rapid fundamentals improvement" is correction-chain learning plus a maintenance ledger.

#### Confidence Map Update

- Correction-chain learning: confirmed strong fit.
- External validation: important but second-order for this exact wording.
- Meta-loop: useful later, not biggest current focus.
- `/intuit`: strategic, but not the fastest way to improve current fundamentals.

### Cycle 3: Scientific Weakness and Evidence Territory

#### Scan

`devdocs/scientific_summary.md` says the project is conceptually strong but empirically weak. It lacks controlled comparisons, reliability across domains, predictive validity of telemetry, evidence that failure modes are detected consistently, and evidence that the loop converges better than ad hoc reasoning.

It also notes the concrete gap that `tools/structural_check.sh` is missing even though the protocols reference it.

#### Signals Detected

1. **Evidence is the shared bottleneck.** Scientific validation, self-maintenance, and autonomy all require better evidence records.
2. **The fastest evidence source is already local.** User corrections and improved reruns are happening now.
3. **Structural check absence is a concrete low-level defect.** It prevents the protocol from enforcing even its current structural contract.
4. **Telemetry standardization remains relevant but not sufficient.** Standard outputs help, but the more valuable evidence is whether corrections reveal repeated discipline failures.

#### Resolution Decision

Differentiate "quick hygiene" from "biggest focus."

#### Probe

Implementing or removing `tools/structural_check.sh` is important hygiene. But it only checks structure, not reasoning quality. It should be part of the focus, but not the focus itself.

The bigger focus is an evidence flywheel:

```text
correction chain
-> loop diagnosis
-> maintenance ledger entry
-> small fundamentals patch
-> evaluation gate
-> retain / revert / refine
```

#### Frontier State

The highest-leverage target is now stable: build the evidence-to-fundamentals improvement loop.

#### Confidence Map Update

- Evidence flywheel as biggest focus: confirmed.
- Structural check as supporting action: confirmed.
- More architecture as biggest focus: downgraded.

### Jump Scan: Opposite Direction

#### Scan

Deliberately checked the opposite possibility: "the biggest current focus should be meta-loop, because it can traverse and improve the whole system."

#### Result

The meta-loop is promising, but without a reliable evidence loop it risks becoming faster movement through under-calibrated artifacts. It should consume maintenance evidence later; it should not be the main focus before correction-chain learning exists.

#### Confidence

Meta-loop remains important, but it is not the biggest current focus for rapid fundamentals improvement.

## 3. Territory Overview

Major priority regions:

1. **Correction-chain learning / loop diagnosis.** Directly learns from bad-to-better MVL runs.
2. **Self-maintenance ledger.** Converts diagnoses into tracked improvement proposals with closure.
3. **Validation tooling.** Structural check and telemetry consistency support the evidence loop.
4. **Meta-loop / Navigation.** Useful traversal layer, but depends on fundamentals quality.
5. **External validation.** Critical for credibility, but broader than immediate fundamentals improvement.
6. **`/intuit`.** Strategic for long-term autonomy, but not the fastest current fundamentals lever.

## 4. Inventory

### Current High-Leverage Assets

- Many completed inquiry folders.
- Recent correction chains where the user challenged a prior finding and reran MVL+.
- `comparative_mvl_loop_diagnosis` already defines a candidate protocol shape.
- `autonomous_continuous_self_maintenance_levels` already defines Level 1 ledger requirements.
- `homegrown/meta-loop` now exists as a traversal runner source, but remains v1/sequential-human-selected.

### Current Missing Pieces

- No confirmed `devdocs/self_maintenance.md` ledger in the root file list scanned.
- No implemented `loop-diagnose` protocol under `homegrown/protocols/`.
- No visible `tools/structural_check.sh`.
- No standard workflow that turns user correction into a maintenance entry.
- No retain/revert/refine closure for fundamentals changes.

## 5. Signal Log

| Signal | Source | Probed? | Confidence | Meaning |
|---|---|---:|---:|---|
| Homegrown is Level 0.5, not Level 1 self-maintenance | `autonomous_continuous_self_maintenance_levels` | Yes | Confirmed | Missing ledger and closure loop. |
| Correction chain is strongest learning signal | `comparative_mvl_loop_diagnosis` | Yes | Confirmed | Bad -> corrected -> improved chains expose failures. |
| Scientific weakness is lack of empirical validation | `scientific_summary.md` | Yes | Confirmed | Evidence is the bottleneck. |
| Meta-loop is traversal, not quality engine | recent meta-loop finding | Yes | Confirmed | It should consume evidence, not replace it. |
| `/intuit` is critical path for long-term autonomy | `next_implementation_priority` | Yes | Scanned | Strategic, but not fastest current fundamentals lever. |
| Structural check missing | protocol runs + scientific summary | Yes | Confirmed | Supporting defect in validation/tooling. |

## 6. Confidence Map

- **Confirmed:** The fastest fundamentals improvement requires learning from real failures.
- **Confirmed:** Correction chains are already available and high-signal.
- **Confirmed:** Level 1 self-maintenance requires a ledger with closure.
- **Scanned:** External validation is vital, but it is not the first answer to this narrower question.
- **Scanned:** Meta-loop and `/intuit` are important, but both need calibrated fundamentals/evidence.
- **Unknown:** Exact first set of correction chains to diagnose.
- **Unknown:** Whether `loop-diagnose` should be a protocol file immediately or a devdocs template first.

## 7. Frontier State

Exploration has converged enough for sensemaking.

The main unresolved design choice is not "what matters?" It is sequencing:

- Should the project first create `loop-diagnose`, the ledger, or the structural check tool?
- Should correction-chain learning be manual first or immediately codified as `homegrown/protocols/loop_diagnose.md`?

## 8. Gaps and Recommendations

Recommendations for Sensemaking:

- Treat the biggest focus as an **evidence-to-fundamentals improvement loop**.
- Do not let the answer become "build meta-loop" or "build `/intuit`" by recency or strategic glamour.
- Include structural check and telemetry as support actions, not the central focus.
- Make the focus concrete enough to start this week: diagnose 3 correction chains, create maintenance ledger, patch only one or two fundamentals from evidence.

