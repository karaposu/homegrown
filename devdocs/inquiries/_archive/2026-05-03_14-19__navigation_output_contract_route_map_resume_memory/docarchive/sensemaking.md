# Sensemaking: Navigation Output Contract, Route Map, And Resume Memory

## User Input

The user asks whether current Navigation already has a known contract for output. The desired output is a structured list of all possible routes/directions, including movement information, blocked paths, what checks unblock other paths, route purpose, and durable Markdown maps that warm-up can reuse to continue from prior state.

## SV1 - Baseline Understanding

Current Navigation probably supports a structured list of next directions, but the user's desired "route map" is stronger than the current "navigation item" format.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Navigation must enumerate, not select.
- The list must be comprehensive.
- Blocked paths must remain visible, not disappear.
- Each route should explain why it is worth exploring.
- Route purpose may be fuzzy but should be present.
- Saved Markdown Navigation maps should help future sessions continue from where work left off.
- Warm-up should be able to read previous Navigation outputs as state evidence.

### Key Insights

- The current Navigation discipline already has a strong foundation: typed directions, WHY, guidelines, confidence, categories, excluded types, telemetry, and reachability gates.
- The current output is not yet a full route graph. It lacks explicit route status, movement fields, blocked-by/unlocks fields, and continuation notes.
- `WHY` is not identical to route purpose. WHY explains evidence; purpose explains what the route would serve or unlock.
- Prior Navigation maps can become durable memory only if their format records route state and later warm-up reads them.
- The current spec has a taxonomy inconsistency: the skill file says 15 types while the reference defines 16 types.

### Structural Points

- Navigation item = direction + WHY + guidelines.
- Route = direction + purpose + movement + status + dependencies + continuation metadata.
- Blocked route = still a route, with `Status: blocked` and an associated `UNBLOCK` route/check.
- Navigation map as Markdown = possible continuation artifact.
- Warm-up = mechanism that can rehydrate prior navigation maps into session context.

### Foundational Principles

- A comprehensive map includes routes that cannot be taken yet.
- A blocked route should not be excluded simply because it is blocked.
- Resume memory requires durable state, not just one-time advice.
- A Navigation map should avoid becoming a plan: it can show movement and dependencies without selecting or scheduling.

### Meaning-Nodes

- Route map.
- Movement information.
- Route purpose.
- Blocked route.
- Unlock check.
- Continuation memory.
- Navigation-map archive.

## SV2 - Anchor-Informed Understanding

The user's model is not a rejection of the current Navigation discipline. It is a refinement: Navigation should evolve from "typed next-direction list" into "typed route map." The current discipline already supports many pieces but should add route-level fields and warm-up reuse rules.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

The current format is structurally regular but not stateful enough. A later warm-up can read `navigation.md`, but without route status or continuation notes it cannot reliably tell which routes were selected, blocked, abandoned, or still open.

New anchor: route maps need continuation fields, not only recommendation fields.

### Human / User Perspective

The user wants to offload remembering "where we were, where we went, and what is blocked." A mere list of possible directions helps choose, but it does not carry enough state into the next session.

New anchor: the output must reduce future context-steering burden.

### Strategic / Long-Term Perspective

If Navigation maps become durable artifacts, Homegrown can build memory over movement space. Warm-up can read them as frontier evidence, making Navigation less dependent on the user's memory.

New anchor: previous navigation maps should become first-class warm-up sources.

### Risk / Failure Perspective

If blocked routes are excluded, the system may forget important paths. If all routes are listed without status, the map becomes noisy. If movement fields become planning fields, Navigation may start selecting or scheduling, which is outside its role.

New anchor: route status should expose reachability without turning Navigation into planning.

### Resource / Feasibility Perspective

Adding a few fields to the Markdown output is cheap. Adding a full route graph engine is premature.

New anchor: start with Markdown route fields, not new infrastructure.

### Definitional / Consistency Perspective

Navigation is defined as full enumeration of possible next directions. The user's blocked-path requirement fits that definition: blocked directions are still possible directions, just not immediately reachable.

New anchor: blocked routes belong in the main map, not only in Excluded.

## SV3 - Multi-Perspective Understanding

The current discipline supports the core of Navigation but not the stronger route-map contract. The desired improvement should preserve Navigation's non-selection role while adding reachability and continuation information.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Does current Navigation already support the user's desired output?

**Strongest counter-interpretation:** Yes. It already has a navigation map, full enumeration, WHY, guidelines, gates, and `UNBLOCK`.

**Why the counter-interpretation fails (structural grounds):** Those mechanisms do not require explicit route status, purpose, movement, blocked-by/unlocks relationships, or continuation notes. A later session cannot reliably reconstruct route state from WHY/guidelines alone.

**Confidence:** HIGH.

**Resolution:** Current Navigation partially supports the desired output but needs a route-map refinement.

**What is now fixed?** The existing discipline should be refined, not replaced.

**What is no longer allowed?** Claiming the current contract fully satisfies durable route-map memory.

**What now depends on this choice?** Whether to patch Navigation output format and warm-up reads.

**What changed in the conceptual model?** Navigation item and route are separated.

### Ambiguity: Should blocked paths be listed?

**Strongest counter-interpretation:** No. Blocked paths should appear as `UNBLOCK` items only; listing blocked routes clutters the map.

**Why the counter-interpretation fails (structural grounds):** `UNBLOCK` captures the dependency resolution action, but not necessarily the blocked destination's own purpose. If the blocked route is not listed, Navigation loses why the unblocking matters and what becomes reachable afterward.

**Confidence:** HIGH.

**Resolution:** Blocked routes should remain in the main map with `Status: blocked`, plus a linked `UNBLOCK` item/check.

**What is now fixed?** Blocked is a route status, not an exclusion reason.

**What is no longer allowed?** Hiding a route only because it is blocked.

**What now depends on this choice?** The output format and reachability rules.

**What changed in the conceptual model?** The map becomes reachability-aware.

### Ambiguity: Are previous Navigation maps useful for session continuation?

**Strongest counter-interpretation:** Not necessarily. Findings and current-frontier summaries may be enough.

**Why the counter-interpretation fails (structural grounds):** Findings record conclusions; Navigation maps record possible directions, including options not chosen and blocked paths. That is different state. Warm-up needs both conclusions and movement-space memory.

**Confidence:** HIGH.

**Resolution:** Previous Navigation maps should be read by warm-up when available.

**What is now fixed?** Navigation maps become valid warm-up evidence.

**What is no longer allowed?** Treating navigation.md as disposable output.

**What now depends on this choice?** Warm-up v1/v2/v3 read rules and Navigation output fields.

**What changed in the conceptual model?** Navigation maps become durable continuation artifacts.

### Ambiguity: Does adding movement information turn Navigation into planning?

**Strongest counter-interpretation:** Yes. Movement and dependencies sound like planning, which Navigation is not.

**Why the counter-interpretation fails (structural grounds):** Movement can be descriptive rather than prescriptive. A route can state current state, target state, and gates without selecting sequence, owner, or schedule.

**Confidence:** MEDIUM-HIGH.

**Resolution:** Add movement fields, but explicitly prohibit selection/scheduling.

**What is now fixed?** Movement information is allowed as map structure.

**What is no longer allowed?** Navigation output deciding the route automatically.

**What now depends on this choice?** Output contract wording.

**What changed in the conceptual model?** Navigation becomes route-aware but not plan-authoring.

## SV4 - Clarified Understanding

The current Navigation discipline has the right philosophical and structural base. It should be refined into a route-map contract by adding explicit route fields and by making prior Navigation maps part of warm-up evidence.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed

- Keep Navigation as an enumeration discipline.
- Add explicit route purpose.
- Add explicit movement fields.
- Add explicit route status.
- List blocked routes in the main map.
- Link blocked routes to `UNBLOCK` checks.
- Make saved navigation maps reusable by warm-up.
- Fix 15/16 taxonomy mismatch.

### Eliminated

- Replacing Navigation discipline.
- Treating WHY as sufficient for purpose in all cases.
- Treating blocked routes as excluded.
- Treating saved Navigation maps as disposable.
- Building a complex route graph engine now.

### Viable Paths

1. Patch Navigation output contract.
2. Patch warm-up v1/v2/v3 to read previous Navigation maps.
3. Later add status update conventions if route maps start accumulating.

## SV5 - Constrained Understanding

The minimal good route-map item should be:

```text
[confidence] [TYPE]: [route title] [status]
  Purpose: what this route would serve or unlock
  Movement: current state -> target state
  WHY: evidence that makes the route worth considering
  Blocked by: gate or none
  Unlocks: downstream routes or unknown
  Guidelines:
  - pointer -> why
  Continuation note: what future warm-up should remember
```

## Phase 5 - Conceptual Stabilization

The route-map concept strengthens Navigation without changing its identity. Navigation still does not choose. It maps all routes, including blocked ones, and makes their purposes, movement, and dependencies visible. Warm-up then reads prior maps to understand what was open, blocked, selected, abandoned, or still relevant.

## SV6 - Stabilized Model

Current Navigation supports the foundation:

- structured Navigation map;
- full enumeration principle;
- direction-level WHY;
- per-guideline WHY;
- `UNBLOCK`;
- reachability/gates;
- Markdown output.

It does not yet fully support the user's route-map/continuation-memory contract.

The needed refinement is small but important:

1. Add `Purpose`, `Movement`, `Status`, `Blocked by`, `Unlocks`, and `Continuation note` fields to each navigation item.
2. Require blocked routes to appear in the main map with `Status: blocked`.
3. Keep `UNBLOCK` as the route/check that opens blocked paths.
4. Make prior Navigation maps first-class warm-up sources.
5. Fix the 15/16 taxonomy mismatch.

## Saturation Telemetry

- **Perspective saturation:** high. Multiple perspectives converged on route-map refinement rather than replacement.
- **Ambiguity resolution ratio:** 4/4 major ambiguities resolved.
- **SV delta:** high. SV1 asked whether support exists; SV6 distinguishes foundation support from full route-map support.
- **Anchor diversity:** good. Anchors came from user needs, current spec, durable memory, reachability, and role boundaries.
