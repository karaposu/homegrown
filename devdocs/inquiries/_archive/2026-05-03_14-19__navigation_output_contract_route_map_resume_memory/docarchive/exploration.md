# Exploration: Navigation Output Contract, Route Map, And Resume Memory

## Mode And Entry Point

- **Mode:** artifact exploration.
- **Entry point:** signal-first. The user provided concrete expectations for Navigation output and asked whether the current Navigation discipline already supports them.

## Cycle 1 - Scan Current Navigation Contract

### Scanned

- `homegrown/navigation/SKILL.md`
- `homegrown/navigation/references/navigation.md`
- `homegrown/navigation/warmup/navigator-warmup1.md`
- `homegrown/navigation/warmup/navigator-warmup2.md`
- `homegrown/navigation/warmup/navigator-warmup3.md`
- existing `devdocs` navigation files search

### Found

The current Navigation discipline defines Navigation as a boundary discipline that enumerates all possible next directions after a completed cognitive cycle or current project state.

The current output is a Markdown navigation map with:

- grouped sections: Content, Process, Context;
- navigation items with type, direction, confidence, WHY, and guidelines;
- an Excluded section for considered but structurally inapplicable types;
- telemetry that checks type coverage, category balance, guideline depth, excluded reasoning, and failure modes.

The reference defines a reachability check before type assignment. A gate has:

- blocked region;
- condition;
- current state: open or closed.

The taxonomy includes `UNBLOCK` as a context-directed type.

### Signals Detected

- **Strong support for structured list of directions:** yes, Navigation already outputs a list-like map with typed items and reasoning.
- **Strong support for comprehensive enumeration intent:** yes, the discipline explicitly says full enumeration and warns against premature filtering.
- **Partial support for blocked paths:** gates and `UNBLOCK` exist, but blocked routes are not required as first-class map items with route status.
- **Partial support for route purpose:** every item has `WHY`, which can serve as purpose, but there is no explicit `Purpose` field.
- **Partial support for movement information:** the map shows next directions and guidelines, but it does not explicitly record movement state such as current location, target state, dependency path, route status, or what unlocks after a gate opens.
- **Weak support for resume memory:** Navigation saves Markdown outputs, but warm-up does not yet explicitly search prior `navigation.md` or `devdocs/navigation/*.md` files as continuation sources.
- **Spec inconsistency:** `homegrown/navigation/SKILL.md` says 15-type taxonomy, while `references/navigation.md` defines 16 types after absorbing `DIAGNOSE`.

### Resolution Decision

Zoom in on gaps because the broad contract mostly exists. The important question is whether the existing map is sufficient for the user's stronger route-map model.

### Frontier State

Core contract is mapped. Remaining frontier: exact refinements needed to make route maps durable continuation memory.

### Confidence Map

- Structured directions: confirmed.
- All possible directions: confirmed as intent, medium as enforcement.
- Blocked paths: scanned/partial.
- Route purpose: scanned/partial.
- Movement information: scanned/weak.
- Navigation-map resume memory: scanned/weak.

## Cycle 2 - Probe User Requirements Against Current Spec

### Requirement: "list of directions in structured way"

Status: supported.

Evidence:

- Navigation item structure: Direction + WHY + Guidelines.
- Output format groups items under Content, Process, Context.

Gap:

- The item does not have stable fields useful for machine/continuation reading, such as `Route Status`, `Purpose`, `Blocks/Blocked By`, or `Movement`.

### Requirement: "movement information"

Status: partially supported.

Evidence:

- Direction says what to pursue.
- WHY explains evidence.
- Guidelines explain how to approach.
- Reachability check identifies gates.

Gap:

- No explicit movement model:

```text
Current state -> route -> target state
Blocked by -> unlocks -> downstream routes
```

### Requirement: "list all possible routes"

Status: supported as principle, not fully enforced as route contract.

Evidence:

- Navigation defines itself as complete enumeration.
- Failure modes include premature filtering, recency bias, action bias, and scope fixation.
- Excluded section requires considered/rejected types.

Gap:

- The map is taxonomy-comprehensive, but not necessarily dependency-graph-comprehensive. It checks all types, not all reachable/blocked route relationships.

### Requirement: "blocked paths should be listed"

Status: partially supported.

Evidence:

- `UNBLOCK` exists.
- Reachability check says a blocked otherwise-promising direction must include the gate condition as part of WHY.

Gap:

- A blocked direction can be folded into an `UNBLOCK` item instead of appearing as its own blocked route.
- No explicit `Route Status: open | blocked | deferred | active | done`.

### Requirement: "reason why we want to discover that route / route purpose"

Status: mostly supported but label is indirect.

Evidence:

- Direction-level WHY provides route rationale.

Gap:

- `WHY` may explain evidence, not purpose. The user wants route purpose, which is more like "what this route would serve or unlock."

### Requirement: "saved navigation map as Markdown supports continuing later"

Status: potential exists, but not contracted.

Evidence:

- Navigation saves `navigation.md` in an inquiry folder when input is a folder path.
- Otherwise it saves under `devdocs/navigation/<suitable-name>.md`.

Gap:

- Warm-up v1/v2/v3 do not explicitly read previous navigation maps.
- Navigation outputs do not have a required `Route Status` or `Selected / Pursued / Not pursued` field that later warm-up can use to know where the project went.
- No canonical search rule for `navigation.md` files across inquiries.

## Cycle 3 - Jump Scan: Prior Navigation Artifacts

### Scanned

Search for navigation map artifacts in `devdocs`.

### Found

Only `devdocs/archive/deprecated/navigation.md` was found by the simple path scan. This suggests Navigation maps are not yet a routinely produced durable artifact in this repo.

### Signal

The user's idea is not merely a formatting improvement. It would create a new durable memory artifact type: Navigation maps as continuation records.

### Resolution Decision

Enough territory is mapped. Proceed to final structural map.

## Convergence Check

- **Frontier stability:** yes. The existing contract and the gap set are clear.
- **Declining discovery rate:** yes. Later scans refined known gaps rather than discovering a new region.
- **Bounded gaps:** yes. The remaining work is local refinement to Navigation output and warm-up source rules.

## Structural Map

### Territory Overview

Current Navigation already has the skeleton of the user's desired route map:

- list of typed directions;
- full enumeration principle;
- WHY and guidelines;
- blocked dependency concept through gates and `UNBLOCK`;
- Markdown output.

It does not yet have the stronger continuation-memory contract:

- explicit route purpose;
- explicit route status;
- explicit movement/dependency fields;
- blocked routes as first-class map items;
- warm-up reading previous navigation maps.

### Inventory

- `homegrown/navigation/SKILL.md`: instructs the discipline to produce a Navigation map, but says 15 types.
- `homegrown/navigation/references/navigation.md`: defines Navigation, output format, 16-type taxonomy, reachability gates, and failure modes.
- `homegrown/navigation/warmup/navigator-warmup1.md`: reads project state and current frontier, but does not mention previous navigation maps.
- `homegrown/navigation/warmup/navigator-warmup2.md`: builds project-direction architecture, but does not use Navigation maps as movement records.
- `homegrown/navigation/warmup/navigator-warmup3.md`: traces movement, but is not yet wired to prior Navigation maps.

### Signal Log

- Output contract exists: probed, confirmed.
- Comprehensive enumeration exists: probed, confirmed as intent.
- Blocked paths exist: probed, partial.
- Movement information exists: probed, weak.
- Route purpose exists: probed, partial through WHY.
- Previous maps as resume memory: probed, weak but promising.
- 15/16 taxonomy mismatch: probed, confirmed.

### Confidence Map

- Current discipline supports a route-map foundation: high confidence.
- Current discipline fully satisfies the user's stronger route-map contract: low confidence.
- Small refinements can close the gap: high confidence.
- Previous Navigation maps should become warm-up sources: high confidence.

### Frontier State

Ready for sensemaking. The main open decision is how much to patch now: output format only, warm-up reading only, or both.

### Gaps And Recommendations

- Add explicit route fields to the Navigation output format:
  - `Purpose`
  - `Movement`
  - `Status`
  - `Blocked by`
  - `Unlocks`
  - `Continuation note`
- Require blocked routes to appear in the main map, not only as excluded or hidden behind `UNBLOCK`.
- Update warm-up v1/v2/v3 to read prior `navigation.md` and `devdocs/navigation/*.md` outputs as current-frontier/movement sources.
- Fix the 15/16 taxonomy mismatch in `homegrown/navigation/SKILL.md`.
