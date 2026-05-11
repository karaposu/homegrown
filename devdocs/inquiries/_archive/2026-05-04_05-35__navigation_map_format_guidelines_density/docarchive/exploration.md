# Exploration: Navigation Map Format And Guidelines Density

## Mode and Entry Point

- **Mode:** Artifact exploration.
- **Entry point:** Signal-first.
- **Primary artifact:** `devdocs/navigation/next_load_bearing_after_navigation_warmup.md`.
- **Comparison contract:** `homegrown/navigation/references/navigation.md`.

The starting signal is the user's complaint that the first route reads like dense inline text and would be clearer as a structured direction/goal record. A second signal is the question of whether Guidelines are useful enough to justify their output cost on every route.

## Exploration Cycles

### Cycle 1: Scan Current Output Format

**Scanned:** the current Navigation map route records and the Navigation reference format.

**Found:**

- The actual file has line breaks and required fields.
- Each route header still packs too much into one line: confidence symbol, type, route title, priority, and status.
- The route title often does double duty as both direction and goal.
- The body fields are present but visually similar, so a reader must parse every line to locate the route's purpose, state, blocker, or action implication.
- Guidelines are long enough that they dominate many route records.

**Signals detected:**

- **Readability signal:** semantically complete route records still impose high visual parsing cost.
- **Header density signal:** the title line has too many concepts.
- **Goal ambiguity signal:** the reader cannot immediately distinguish direction name from goal name.
- **Guideline dominance signal:** Guidelines sometimes consume more space than the route state itself.

**Resolution decision:** zoom in on the route record shape.

**Probe:** compared the current compact header shape with the user's proposed card-like shape.

**Frontier state:** stable for current output shape; open for alternative format design.

**Confidence update:** confirmed that the issue is format/scanability, not missing route fields.

### Cycle 2: Probe Guidelines As Information

**Scanned:** Guidelines in the first several route records.

**Found:**

- Guidelines are useful when the user is close to acting on a route.
- Guidelines preserve reasoning that would otherwise be lost, especially for risky routes.
- Guidelines are less useful for low/deferred routes where the main need is preserving existence and state.
- Full guidelines on every route reduce the number of routes that can fit comfortably in one output.
- If Guidelines are removed completely, route records become more compact but less actionable and less safe for later materialization.

**Signals detected:**

- **Adaptive-depth signal:** Guidelines are not equally valuable on every route.
- **Route-count tradeoff signal:** mandatory 3-6 guidelines across every route competes with complete enumeration.
- **Actionability signal:** at least one guideline or "next check" is useful when a route is open, high-risk, or likely to be selected.

**Resolution decision:** zoom out to locate the right boundary.

**Probe:** compared three possible approaches: keep all Guidelines, remove all Guidelines, or make Guidelines adaptive.

**Frontier state:** stable. The adaptive option is the promising region.

**Confidence update:** confirmed that Guidelines should not be deleted, but mandatory full Guidelines should be relaxed.

### Cycle 3: Jump Scan Against Prior Finding

**Scanned:** `devdocs/inquiries/2026-05-03_23-33__navigation_output_usefulness_review/finding.md`.

**Found:**

- The prior finding says the Navigation output is useful as a route-space snapshot.
- It says the main missing lifecycle layer is provenance, selection state, and route-state reconciliation.
- It also says the route-map contract appears viable and should not be redesigned wholesale.
- The current user complaint does not contradict that finding. It refines the presentation layer and output-budget policy.

**Signals detected:**

- **No wholesale redesign signal:** keep the route-map contract, but improve the display contract.
- **Lifecycle compatibility signal:** a more readable format can incorporate provenance and selection-state fields later.
- **Output-budget signal:** adaptive Guidelines aligns with route-state lifecycle because details can be expanded after selection.

**Resolution decision:** stop exploration.

**Frontier state:** stable and bounded.

**Confidence update:** high confidence that the next decision should refine formatting and guideline density, not discard Navigation maps.

## Convergence Check

- **Frontier stability:** met. The relevant regions are current format, route fields, Guidelines, and prior contract.
- **Declining discovery rate:** met. Later scans refined the same signal rather than finding new problem classes.
- **Bounded gaps:** met. Remaining work is design choice, not missing artifact discovery.
- **Jump scan:** completed against the prior Navigation output usefulness finding.

## Structural Map

### Territory Overview

The territory has three main regions:

1. **Route record structure:** all semantic fields exist, but the display shape is dense.
2. **Guidelines policy:** useful but too expensive when mandatory at full depth for every route.
3. **Continuation contract:** prior route-map contract remains valid and should be refined, not replaced.

### Inventory

**Confirmed:**

- The route-map output is semantically complete.
- The current display is harder to scan than it needs to be.
- The user's proposed direction/goal separation is structurally valid.
- Guidelines have value but should be depth-controlled.

**Scanned:**

- Full guidelines on every route.
- No guidelines at all.
- Adaptive guidelines.

**Confirmed absent:**

- No evidence that the route-map contract itself is wrong.
- No evidence that blocked routes or route-state fields should be removed.

### Signal Log

- **Header density:** probed and confirmed.
- **Direction/goal ambiguity:** probed and confirmed.
- **Guideline dominance:** probed and confirmed.
- **Adaptive detail:** probed and promising.

### Confidence Map

- **Confirmed:** readability issue, field completeness, guideline tradeoff.
- **Scanned:** exact future format variants.
- **Inferred:** adaptive Guidelines will enable broader direction coverage without losing actionability.
- **Unknown:** whether a two-line card format is enough after several real Navigation maps.

### Frontier State

The frontier is no longer "does Navigation produce enough route data?" It is "what is the best route-record presentation contract so humans can scan many routes without losing enough detail to act later?"

## Recommendations For Next Disciplines

- Sensemaking should distinguish semantic completeness from readable presentation.
- Decomposition should separate route identity, route state, reasoning, guidance, and continuation memory.
- Innovation should generate a revised route card format and adaptive guideline policy.
- Critique should test whether adaptive Guidelines weakens route actionability too much.

## Telemetry

- **Mode fit:** artifact exploration.
- **Cycles run:** 3.
- **Signals probed:** 4.
- **Convergence:** met.
- **Residual unknowns:** exact best visual format and threshold for guideline expansion.

Overall: PROCEED.
