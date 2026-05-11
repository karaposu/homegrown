---
status: active
---
# Finding: Navigation Output Contract, Route Map, And Resume Memory

## Question

Does the current Navigation discipline already support a comprehensive structured route map with movement information, blocked paths, route purposes, and saved Markdown maps that Navigation warm-up can reuse to continue from prior state?

## Finding Summary

- Current Navigation partially supports this. It already has a strong route-map foundation: typed directions, a Markdown Navigation Map, confidence labels, WHY fields, guidelines, reachability gates, `UNBLOCK`, an Excluded section, and telemetry checks.

- Current Navigation does not yet fully support the stronger route-map contract the user described. It lacks explicit fields for route purpose, movement, route status, blocked-by/unlocks, and continuation memory.

- Blocked paths should be listed in the main Navigation map. A blocked route is still part of the movement space. It should have `Status: blocked`, plus a linked `UNBLOCK` route or check that explains what would open it.

- `WHY` and `Purpose` should be separated. `WHY` explains the evidence for a route. `Purpose` explains what the route would serve, reveal, or unlock.

- Movement information is valid inside Navigation if it remains descriptive. Navigation may say `current state -> target state`, but it should not select the route, assign ownership, schedule execution, or become a task plan.

- Saved Markdown Navigation maps can become excellent continuation memory. For that to work, the maps need route-state fields, and Navigation warm-up needs to read previous `navigation.md` files and `devdocs/navigation/*.md` as evidence.

- There is also a small correctness issue: `homegrown/navigation/SKILL.md` says Navigation has a 15-type taxonomy, while `homegrown/navigation/references/navigation.md` defines 16 types after adding `DIAGNOSE`.

## Finding

Current Navigation supports the foundation, but not the full contract.

The existing Navigation discipline is already close to the right shape. It defines Navigation as an enumeration discipline: it maps possible next directions after a completed thinking loop or from a current project state. It outputs a Markdown Navigation Map grouped into Content, Process, and Context sections. Each item has a type, direction, confidence, WHY, and guidelines. The reference also includes reachability gates and an `UNBLOCK` type.

That is enough for a structured list of directions. It is not yet enough for the user's stronger idea: a durable route map that records where movement is possible, where movement is blocked, what each route would serve, and what later sessions should remember.

The main missing distinction is this:

```text
Navigation item = direction + WHY + guidelines
Route = direction + purpose + movement + status + dependencies + continuation memory
```

The current Navigation item can suggest where to go. A route can also tell a future session whether that path was open, blocked, active, stale, done, or worth returning to.

The user is right that blocked paths must be visible. If a blocked path is omitted, the system loses a meaningful part of the movement space. If it is hidden behind only an `UNBLOCK` item, the system may remember the check but forget why the check matters. The better structure is to list the blocked route itself and connect it to the unblock condition.

The Excluded section should not be used for blocked routes. Excluded should mean a route type is structurally inapplicable to the current inquiry. Blocked means the route matters, but cannot be taken until some condition is checked or changed.

A minimal route item should look like this:

```text
[confidence] [TYPE]: [route title] [status]
  Purpose: what this route would serve, reveal, or unlock
  Movement: current state -> target state
  WHY: evidence that makes the route worth considering
  Blocked by: gate, missing evidence, missing artifact, or none
  Unlocks: one or more downstream routes, checks, decisions, or artifacts this route may open; use unknown if unclear
  Guidelines:
  - source or action pointer -> why it matters
  Continuation note: what a future warm-up should remember
```

This does not turn Navigation into planning. The boundary is clear: Navigation maps routes and reachability. It does not choose the route automatically, schedule the route, assign an owner, or implement the route.

Saved Markdown maps are the right continuation artifact. Findings record conclusions. Navigation maps record movement space: open options, blocked options, abandoned options, and routes that were not selected but still matter. Those are different kinds of memory.

Navigation warm-up should therefore read prior Navigation maps as evidence. It should search for previous `navigation.md` files in inquiry folders and for files under `devdocs/navigation/*.md`. It should treat those maps as evidence, not authority, because old route maps can become stale or superseded.

The result should be this loop:

```text
Navigation writes route maps.
Warm-up reads route maps.
Future Navigation starts with remembered route state.
```

That is a strong continuation mechanism. It reduces the burden on the user to remember where the project was, which routes were opened, which were blocked, and why certain follow-ups mattered.

The current contract should therefore be refined, not replaced.

## Next Actions

### MUST

- **What:** Patch `homegrown/navigation/references/navigation.md` so each Navigation map item includes `Purpose`, `Movement`, `Status`, `Blocked by`, `Unlocks`, and `Continuation note`.
  **Who:** Navigation reference document.
  **Gate:** Before relying on Navigation maps as durable continuation memory.
  **Why:** This gives each route enough state for a later session to interpret it without reconstructing the full conversation.

- **What:** Require blocked routes to appear in the main Navigation map with `Status: blocked`.
  **Who:** Navigation reference document.
  **Gate:** Same patch as the route-field update.
  **Why:** This prevents important routes from disappearing simply because they are not immediately reachable.

- **What:** Clarify that the Excluded section is for structurally inapplicable route types, not blocked routes.
  **Who:** Navigation reference document.
  **Gate:** Same patch as the blocked-route update.
  **Why:** This preserves comprehensive route visibility.

- **What:** Patch Navigation warm-up files so they read prior Navigation maps when available.
  **Who:** `homegrown/navigation/warmup/navigator-warmup1.md`, `navigator-warmup2.md`, and `navigator-warmup3.md`.
  **Gate:** Before the first serious Navigation warm-up that is expected to continue from prior movement state.
  **Why:** Warm-up needs route-space memory, not only findings and current artifacts.

- **What:** Fix the 15/16 taxonomy mismatch.
  **Who:** `homegrown/navigation/SKILL.md`.
  **Gate:** Before treating Navigation's type taxonomy as a stable contract.
  **Why:** The skill file and reference should not disagree about the number of Navigation types.

### COULD

- **What:** Add Navigation telemetry checks for route-field completeness, blocked-route representation, and prior-map continuity.
  **Who:** Navigation reference document.
  **Gate:** When route fields are added.
  **Why:** Telemetry makes the new contract checkable instead of merely stylistic.

- **What:** Add a lightweight status vocabulary: `open`, `blocked`, `deferred`, `active`, `done`, `stale`, and `superseded`.
  **Who:** Navigation reference document.
  **Gate:** When the first patched Navigation map is created.
  **Why:** A small vocabulary is enough for continuation memory without needing a route graph engine.

### DEFERRED

- **What:** Build a separate route graph engine.
  **Gate:** Revive only after several real Markdown Navigation maps show recurring dependency-management pain that cannot be handled by fields.
  **Why (if revived):** A graph engine could eventually help with dependency traversal, but it is premature before the Markdown route-map contract is tried.

## Reasoning

The unchanged-current-contract option was killed. Current Navigation has useful structure, but it does not explicitly preserve route status, movement, blocked dependencies, or continuation notes. Without those fields, a future warm-up would have to infer too much from prose.

The route-field option survived. The fields are not decorative. They are the specific information needed to make a Navigation map reusable across sessions: what the route is for, where it moves the project, whether it is reachable, what blocks it, what it unlocks, and what future warm-up should remember.

The blocked-routes-in-main-map option survived. A comprehensive map must include currently unreachable routes. Status labels solve the clutter problem better than omission. `UNBLOCK` should identify the check or condition that opens the path; it should not replace the blocked path itself.

The prior-navigation-maps-as-warm-up-sources option survived. Findings and Navigation maps preserve different kinds of memory. Findings preserve conclusions. Navigation maps preserve possible movement. Warm-up should read both, while treating old Navigation maps as evidence rather than authority.

The route-graph-engine option was deferred. It may eventually become useful, but building it now would add infrastructure before the simpler Markdown route-map contract has been tested.

The taxonomy cleanup survived. It is small, but important. A contract cannot be stable while one file says 15 types and another defines 16.

The main risk is Navigation accidentally becoming planning. The refinement avoids that by making movement descriptive only. Navigation can map routes, gates, and possible transitions. It should not choose the route, assign work, set schedule, or implement the route.

## Open Questions

### Monitoring

After several real Navigation maps are created, check whether the route fields are enough for warm-up to reconstruct current movement state. If warm-up still needs heavy user explanation, the contract is incomplete.

### Refinement Triggers

Re-open the route-map contract if Navigation outputs become too bulky, if blocked routes dominate the map, or if warm-up cannot distinguish stale routes from live routes.

Re-open the route-graph-engine idea only if Markdown maps repeatedly fail to represent route dependencies clearly.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ i have some questions regarding how navigation should work. do we have already known contract regarding navgiation output?  i think it should be list of directions in structured  way which also has movement informations as well. And it should list all possible routes. it should clearly show what should be check to unblock other paths, so this means even blocked path should be listed . it is vital that list if comprehensive. and i guess for each route we can have a reason why we would like to discover that route, what purpose it will serve. so route purposes should be there too, it is okay if they are fuzzy tho


can u check if current navigation disicpline support these?

and one thing, if we have this navigation map (the list) as md, then this is perfect for continuing from where we left yes? nagivagation warmup can search previous navigation files and use them too udnerstand where we were , where we went, what is being done now etc..
```

</details>
