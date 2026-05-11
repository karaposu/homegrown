# Exploration: Protocol Priority Top 5

## User Input

`devdocs/inquiries/2026-04-28_07-35__protocol_priority_top_5/_branch.md`

## 1. Mode and Entry Point

- **Mode:** Mixed artifact and possibility exploration.
- **Entry point:** Signal-first. The user asked for a ranked top five, and recent findings already contain strong signals about current bottlenecks.

Artifacts scanned:

- `devdocs/scientific_summary.md`
- `enes/desc.md`
- `enes/evolving_quality_assetment_component.md`
- `enes/what_is_meaningful_traversal.md`
- `homegrown/protocols/conclude.md`
- `homegrown/protocols/resume.md`
- `homegrown/protocols/unknown.md`
- `homegrown/meta-loop/SKILL.md`
- `homegrown/navigation/SKILL.md`
- `homegrown/reflect/SKILL.md`
- `devdocs/inquiries/2026-04-27_21-14__rapid_fundamentals_improvement_focus/finding.md`
- `devdocs/inquiries/2026-04-27_21-38__loop_diagnose_git_self_maintenance/finding.md`
- `devdocs/inquiries/2026-04-27_20-26__navigation_mvl_integration/finding.md`
- `devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/finding.md`
- `devdocs/inquiries/2026-04-28_00-25__resume_protocol_usecase/finding.md`

## 2. Exploration Cycles

### Cycle 1 - Current Protocol Inventory

#### Scan

The current explicit protocol files are:

- `homegrown/protocols/conclude.md`
- `homegrown/protocols/resume.md`
- `homegrown/protocols/unknown.md`

`CONCLUDE` is active and loaded by the loop runners at the iteration-complete branch. It turns discipline outputs into `finding.md`, archives intermediate files, and updates `_state.md`.

`RESUME` exists as a standalone telemetry-aware protocol, but the recent Resume inquiry found it is not currently loaded by MVL/MVL+. Its unique future value is trust-gated continuation, but it depends on standardized verdict telemetry.

`unknown.md` appears to be an older inline iteration-complete/finding-writing procedure rather than a coherent current protocol. It should not be treated as a live candidate without cleanup.

#### Signals Detected

1. Active protocol count is low.
2. CONCLUDE is useful but already operational.
3. RESUME is conceptually useful but blocked by telemetry standardization.
4. The protocol folder needs hygiene: active, dormant, and obsolete protocol files are not cleanly separated.

#### Resolution Decision

Do not rank CONCLUDE as a "next protocol" because it already exists and works. Do not rank RESUME high for immediate work because the most recent inquiry showed it is blocked. Explore missing protocols that unlock the current roadmap.

#### Frontier State

Known:

```text
operational now = CONCLUDE
dormant/future = RESUME
unclear/legacy = unknown.md
```

### Cycle 2 - Current Bottleneck Scan

#### Scan

`rapid_fundamentals_improvement_focus` identifies the current bottleneck as evidence conversion: turning observed failures into durable improvements of the fundamentals.

`loop_diagnose_git_self_maintenance` refines that: `loop-diagnose` should not be a new discipline; it should be a diagnostic MVL+ pattern with an input/output protocol. Git branches should hold executable variants, while diagnostic and evaluation findings hold semantic evidence.

`scientific_summary.md` says the project is still mostly a textual protocol system, not yet a validated scientific system. It names missing empirical validation and missing executable enforcement as major weaknesses.

`evolving_quality_assetment_component.md` says quality awareness is the substrate of autonomy. It defines three layers: Primitive Regression Checker, Predictive Regression Checker, and Retrospective RC.

#### Signals Detected

1. The highest current leverage is not another broad cognitive discipline.
2. The system needs protocols that convert failure evidence into maintenance actions.
3. Git branches need a protocol wrapper; git alone does not store semantic evidence.
4. Structural checking and telemetry are missing prerequisites for several future mechanisms.
5. Retrospective outcome tracking is a core missing piece of quality awareness.

#### Probe

Potential protocol candidates from this region:

- `loop_diagnose` protocol/template.
- `maintenance_branch_experiment` protocol.
- `primitive_regression_check` or `structural_integrity_check` protocol.
- `retrospective_outcome_review` protocol.
- `telemetry_verdict_contract` protocol.

#### Frontier State

High-confidence region: self-maintenance and quality-awareness protocols dominate immediate usefulness.

### Cycle 3 - Meta-Loop / Navigation Region

#### Scan

`navigation_mvl_integration` says Navigation should remain a boundary discipline, not a required sixth stage inside MVL+. The next practical step is manual dogfooding or a conditional post-CONCLUDE hook.

`meta_loop_whirl_navigation` defines meta-loop as a stateful traversal engine. Navigation is its eyes, MVL+ is its probe, meta-state is its memory, human selection is v1's selector, and meaningful traversal is the anti-spinning judgment.

`homegrown/meta-loop/SKILL.md` already exists and defines a sequential human-selected v1. It records `_meta_state.md`, visited inquiries, Navigation decisions, open questions, traversal signals, and stop/continue rationale.

`enes/what_is_meaningful_traversal.md` says meaningful traversal is the signal that distinguishes productive thinking from spinning. It matters for termination, cross-head comparison, and self-improvement.

#### Signals Detected

1. Navigation itself already exists as a discipline.
2. The missing protocol is the boundary/selection contract around Navigation: when to run it, how to record selection, and how to learn from outcomes.
3. Meaningful traversal is crucial for future meta-loop autonomy, but still fuzzy and downstream of collecting traces.
4. Meta-loop v1 exists, but it needs evidence from real Navigation maps and human selections.

#### Probe

Potential protocol candidates from this region:

- `navigation_boundary_trigger` protocol.
- `selection_record` protocol.
- `meaningful_traversal_assessment` protocol.
- `meta_loop_trace_review` protocol.

#### Frontier State

Navigation/meta-loop protocols are important, but they depend on earlier data-collection and quality-review protocols if they are to avoid overbuilt autonomy.

### Cycle 4 - Resume / Telemetry Region

#### Scan

The Resume inquiry found:

- Basic resume is already inline in MVL/MVL+.
- Standalone `resume.md` is not loaded.
- Standalone Resume's unique behavior is telemetry-aware routing.
- That behavior is blocked because verdict telemetry is not standardized across all disciplines.

The Navigation and scientific summary findings also point to telemetry as an emerging routing substrate.

#### Signals Detected

1. Telemetry standardization is a cross-cutting prerequisite.
2. Resume should not be immediate runtime integration.
3. A `telemetry_verdict_contract` may be more useful now than Resume itself.
4. Structural checks and verdict checks overlap but should not be collapsed completely: structure enforces artifact shape; verdict telemetry supports routing and quality awareness.

#### Probe

Potential ranking implication:

- The telemetry/structural integrity protocol may outrank Resume because it unlocks Resume, Navigation confidence, Primitive RC, and future quality tracking.

#### Frontier State

Resume is not a top-five next protocol by itself. Its prerequisite probably is.

### Jump Scan - Existing Discipline Specs

#### Scan

`homegrown/navigation/SKILL.md` confirms Navigation is a boundary discipline that enumerates options and explicitly does not select.

`homegrown/reflect/SKILL.md` confirms Reflection examines process, not content, and looks for human interventions, cross-step leaks, step quality, surprises, and answer-goal alignment.

`homegrown/meta-loop/SKILL.md` already contains basic stateful traversal mechanics.

#### Signals Detected

1. Reflection has process-diagnosis material, but current correction-chain learning is better handled by MVL+ diagnostic runs rather than single-run reflection alone.
2. Navigation and meta-loop already have skill-level specs, so the most useful protocols around them are interface protocols: trigger, selection record, traversal assessment.
3. A top-five protocol list should prioritize protocols that create evidence and feedback loops, not protocols that merely name concepts.

## 3. Convergence Assessment

### Frontier Stability

Stable enough. Major regions are protocol inventory, self-maintenance, quality awareness, Navigation/meta-loop, Resume/telemetry, and current scientific validation weakness.

### Declining Discovery Rate

Discovery rate declined after the meta-loop and Resume regions. Later scans repeated the same dependency structure: evidence -> telemetry/quality -> traversal/autonomy.

### Bounded Gaps

Remaining gaps are bounded:

- exact protocol names are open;
- exact schemas are open;
- exact implementation sequence is open;
- the high-level priority shape is clear.

## 4. Structural Map

### Territory Overview

The protocol landscape has four priority bands:

1. **Evidence conversion protocols** - turn failures and corrections into maintenance candidates.
2. **Quality/enforcement protocols** - make artifacts and outputs checkable.
3. **Experiment/evaluation protocols** - test fundamentals changes and close the loop.
4. **Traversal/orchestration protocols** - help meta-loop move productively across inquiries.

### Inventory of Candidate Protocols

| Candidate | Purpose | Current Evidence | Initial Priority Signal |
|---|---|---|---|
| `loop_diagnose` | MVL+ diagnostic pattern for correction chains | Strong from rapid fundamentals + git self-maintenance findings | Very high |
| `maintenance_branch_experiment` | Create/evaluate git-backed fundamentals variants | Strong from user branch-evolution idea and git finding | Very high |
| `primitive_regression_check` / `structural_integrity_check` | Enforce format, safeguards, telemetry presence | Strong from missing structural checker + quality awareness docs | Very high |
| `retrospective_outcome_review` | Decide retain/revert/refine based on later evidence | Strong from quality awareness and self-maintenance loop | High |
| `telemetry_verdict_contract` | Standardize PROCEED/FLAG/RE-RUN and routable output | Strong from Resume blocker and Innovation precedent | High |
| `navigation_boundary_trigger` | Decide when to run Navigation after CONCLUDE | Strong from Navigation integration finding | Medium-high |
| `selection_record` | Record human/meta-loop selected Navigation move and outcome | Strong from meta-loop v1 | Medium-high |
| `meaningful_traversal_assessment` | Judge productivity/stop/continue across multiple MVL+ runs | Strong long-term, fuzzy current spec | Medium |
| `resume_check` | Manual telemetry-aware resume audit | Useful but blocked by telemetry | Medium-low now |
| `reflect_to_memory` | Turn process reflections into memory cells/spec candidates | Useful, but correction chains are stronger current evidence | Medium-low now |
| `protocol_inventory_hygiene` | Mark protocols active/dormant/obsolete | Useful cleanup | Medium-low unless confusion grows |

### Signal Log

| Signal | Source | Probed? | Confidence | Meaning |
|---|---|---:|---:|---|
| Current bottleneck is evidence conversion | Rapid fundamentals finding | Yes | High | Prioritize diagnostic/self-maintenance protocols. |
| `loop-diagnose` should be MVL+ pattern, not discipline | Git self-maintenance finding | Yes | High | Make a lightweight protocol/template. |
| Git is variant substrate, not semantic memory | Git self-maintenance finding | Yes | High | Need branch experiment protocol. |
| Quality awareness is autonomy substrate | `evolving_quality_assetment_component.md` | Yes | High | Need Primitive RC and Retrospective RC protocols. |
| Structural check tool missing | repeated MVL+ runs | Yes | High | Enforcement protocol/tool is urgent. |
| Resume blocked by telemetry | Resume finding | Yes | High | Telemetry contract outranks Resume. |
| Navigation should be boundary-only | Navigation finding and skill | Yes | High | Need trigger/selection protocol, not in-loop discipline. |
| Meaningful traversal needed for meta-loop | enes note and meta-loop skill | Yes | Medium-high | Important but downstream of trace collection. |

### Confidence Map

- **Confirmed:** Loop-diagnose, branch experiment, primitive structural enforcement, and retrospective outcome review are central to the current goals.
- **Confirmed:** Resume itself is not the next high-priority protocol; its telemetry prerequisite is more useful now.
- **Scanned:** Navigation boundary/selection protocols are important but should follow or accompany evidence collection.
- **Scanned:** Meaningful traversal is strategically important but too fuzzy to outrank immediate evidence/quality protocols.
- **Inferred:** Protocol inventory hygiene will become necessary soon, but it is less leverage than protocols that generate learning data.
- **Unknown:** Exact schemas for branch evaluation, retrospective outcome review, and telemetry verdicts.

## 5. Gaps and Recommendations for Sensemaking

- Collapse duplicate candidates: `primitive_regression_check`, `structural_integrity_check`, and `telemetry_verdict_contract` overlap but may deserve one combined protocol or two linked protocols.
- Decide whether `retrospective_outcome_review` should be its own top-five item or part of `maintenance_branch_experiment`.
- Decide whether Navigation's missing piece is one protocol (`navigation_selection`) or two (`boundary_trigger` + `selection_record`).
- Rank by immediate usefulness, not philosophical importance. This likely pushes `loop_diagnose`, branch experiment, and structural/telemetry enforcement above meta-loop traversal protocols.
