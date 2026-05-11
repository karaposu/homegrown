# Exploration: Multi-Resolution Navigation Runner Depth Param

## Mode and Entry Point

Mode: possibility exploration with artifact probes.

Entry point: signal-first. The user supplied the signal: manually running Navigation one child direction at a time is not feasible, so multi-resolution Navigation may need a runner like MVL with a `depth` parameter.

## Exploration Cycles

### Cycle 1: Artifact Scan

Scanned:

- `devdocs/inquiries/2026-05-04_07-12__recursive_navigation_coverage/finding.md`
- `homegrown/navigation/references/navigation.md`
- `homegrown/navigation/SKILL.md`
- `devdocs/navigation/next_load_bearing_after_navigation_warmup.md`
- `homegrown/protocols/artifact_materialization.md` and alignment/outcome references via search signals around runner risk and routing.

Found:

- The previous finding stabilized the concept as multi-resolution Navigation, not automatic recursion.
- Current Navigation is a discipline that produces one route map from one input. It has no parent/child runner orchestration.
- Current Navigation route cards do not yet have `Expansion`, `Expansion reason`, or `Child maps` fields.
- The first real Navigation output was useful but dense and already showed that map lifecycle and stale-state handling matter.
- `artifact_materialization.md` treats runner changes as high-risk or Full-mode work, which means a new runner must not be introduced casually.

Signals detected:

- Manual child-map execution is operationally weak.
- A full recursive runner is behavior-affecting and needs strict bounds.
- The missing layer may be an orchestration protocol rather than a new cognitive discipline.

Resolution decision:

Zoom in on possible operational shapes.

Frontier state:

Advancing. The artifact scan shows the existing discipline boundary and the missing orchestration layer.

Confidence update:

- Confirmed: current Navigation is single-pass.
- Confirmed: manual repetition will not scale.
- Confirmed: runner work is high-risk.
- Unknown: whether the best shape is runner, protocol, or command wrapper.

### Cycle 2: Possibility Scan

Candidate shapes found:

1. **Manual only:** User runs Navigation repeatedly for each route.
2. **Navigation reference patch only:** Add Expansion fields, but no automation.
3. **Protocol wrapper:** A `multi_resolution_navigation.md` protocol coordinates parent map, expansion budget, child maps, and composition.
4. **Separate runner/skill:** A command like `/multi-navigation --depth 2 --max-children 5`.
5. **Navigation mode flag:** Extend Navigation itself with `mode: single | multi`.
6. **Atlas/state manager:** A persistent route graph or map database.
7. **Selector-first approach:** Run top-level Navigation, then evaluate top options before any child maps.

Signals detected:

- Depth alone is not enough. A depth parameter controls levels, but not branch count, expansion criteria, or stop conditions.
- Runner feasibility depends on budget semantics: `depth`, `max_children`, `expansion_policy`, and `composition`.
- The correct first version may be a protocol-backed command, not a bare discipline patch.

Resolution decision:

Probe the "runner like MVL" option because it matches the user's practicality concern.

Frontier state:

Stable at the option level; key unknown is safe control contract.

Confidence update:

- Scanned: seven possible shapes.
- Confirmed absent: no current orchestration artifact.
- Inferred: pure depth parameter is under-specified.

### Cycle 3: Runner Probe

Probed shape:

```text
/multi-navigation --depth 2 --max-children 5 --policy high-and-needed <context>
```

What this would do:

1. Run top-level Navigation.
2. Identify routes with `Expansion: needed` or qualifying signals.
3. Create child Navigation maps up to depth N.
4. Compose parent and child maps into one map-of-maps.
5. Stop before selection.

What it enables:

- Reduces manual execution burden.
- Makes child-map creation repeatable.
- Can later support parallel child maps safely if write sets are disjoint.

What it risks:

- If depth is the only bound, route explosion remains possible.
- If expansion criteria are weak, the runner selects attention implicitly.
- If composition is missing, the runner produces many files without a usable map.
- If output paths are not stable, warm-up cannot resume route state.

Resolution decision:

Runner is plausible, but only after the route-card and child-map contracts exist. It should be protocol-backed and budgeted, not a simple recursive call.

Frontier state:

Stable.

Confidence update:

- Confirmed: runner solves real manual feasibility problem.
- Confirmed: runner is unsafe without expansion budget and composition.
- Scanned: depth parameter semantics.

### Jump Scan: Better Option Than Runner

Scanned alternative:

Start with a **protocol-backed batch mode** before a full runner.

Shape:

```text
multi_resolution_navigation.md protocol
  -> takes source context
  -> runs/requests top map
  -> selects expansion candidates by explicit policy
  -> runs child maps within budget
  -> composes map-of-maps
  -> records selection boundary
```

Potential command later:

```text
/navigation --multi --depth 2 --max-children 4 --policy expansion-needed
```

or:

```text
/nav-map --depth 2 --budget 4 <context>
```

Signal:

This is better than jumping straight to a new MVL-like loop because it isolates the contract first. It also avoids burying recursion inside the existing Navigation skill.

## Convergence Check

Frontier stability: yes. The meaningful options are manual, reference patch, protocol wrapper, runner, mode flag, atlas, or selector-first.

Declining discovery rate: yes. Later probes repeated the same requirements: expansion fields, budget, child-map contract, composition, selection boundary.

Bounded gaps: yes. The remaining open details are command syntax and exact file layout, not the conceptual decision.

## Structural Map

### Territory Overview

The territory has four main regions:

1. **Single-pass Navigation**: current discipline, useful but insufficient for broad coverage.
2. **Multi-resolution orchestration**: missing layer that coordinates parent and child maps.
3. **Runner interface**: possible command or skill that makes orchestration usable.
4. **Composition and lifecycle**: required to make recursive output useful across sessions.

### Inventory

Manual-only:

- Feasible for one child map.
- Not feasible for project-wide coverage.

Reference patch only:

- Necessary but insufficient.
- Adds `Expansion` fields but does not reduce manual burden.

Protocol wrapper:

- Best near-term shape.
- Defines source authority, depth, child budget, expansion policy, output layout, composition, and stop condition.

Separate runner:

- Good medium-term shape after the protocol is tested.
- Should be budgeted and protocol-backed.

Navigation mode flag:

- Possible but risks making Navigation itself too broad.

Atlas/state manager:

- Future option only after maps accumulate.

Selector-first:

- Useful when the user only needs top options, but not enough for comprehensive coverage.

### Signal Log

Probed:

- MVL-like runner with depth parameter.
- Protocol-backed batch mode.
- Depth-only control.

Deferred:

- Exact command name.
- Exact file layout.
- Parallel child-map execution.

### Confidence Map

- Manual-only infeasibility: confirmed.
- Need for explicit orchestration: confirmed.
- Depth-only under-specification: confirmed.
- Protocol-first before runner: high confidence.
- Exact syntax: unknown.
- Parallel execution: deferred.

### Frontier State

Exploration is complete enough for Sensemaking. The central question is no longer whether automation is needed. It is what form of automation is safe enough to carry.

### Gaps and Recommendations

- Gap: route cards do not yet expose expansion fields.
- Gap: no child-map contract exists.
- Gap: no composition artifact exists.
- Recommendation: do not jump directly to a full MVL-like loop.
- Recommendation: create a small protocol-backed multi-resolution Navigation command only after the fields/contract are defined.

## Telemetry

- Cycles run: 3 plus jump scan.
- Coverage: COMPLETE for conceptual runner shapes; THIN for exact command syntax.
- Main failure avoided: treating `depth` as sufficient by itself.
- Residual risk: overbuilding the runner before one protocol-backed trial.
