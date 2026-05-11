---
status: active
refines: devdocs/inquiries/2026-05-03_14-19__navigation_output_contract_route_map_resume_memory/finding.md
impacted_by: devdocs/inquiries/2026-05-03_23-33__navigation_output_usefulness_review/finding.md
---
# Finding: Navigation Map Format And Guidelines Density

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-03_14-19__navigation_output_contract_route_map_resume_memory/finding.md`

**Revision trigger:** User noticed that `devdocs/navigation/next_load_bearing_after_navigation_warmup.md` is semantically complete but hard to scan. The first route reads like dense inline text instead of a readable direction record.

**What's preserved:** Navigation maps should remain comprehensive route-space snapshots. Required route fields such as Purpose, Movement, Status, Blocked by, Unlocks, WHY, and Continuation note should stay.

**What's changed:** The current one-line route header should not remain the canonical format. It packs direction, type, priority, and status into one visual unit.

**What's new:** Navigation should use route-card formatting with explicit Direction/Goal/Type/Status fields, and Guidelines should become adaptive rather than mandatory full-depth on every route.

**Migration:** Patch Navigation output guidance before relying on future Navigation maps as easy-to-scan continuation memory.

## Question

Should Navigation map route records be reformatted into a more readable direction/goal card shape, and should Guidelines remain mandatory on every route or become adaptive to allow more direction coverage?

The goal is to decide how Navigation maps should look so they stay readable, preserve route completeness, and avoid spending too much output budget on advice before a route is selected.

## Finding Summary

- The user's objection is correct. The current route format has the right fields, but the visual hierarchy is weak. It makes a human parse too much from one dense header and a long block of similarly weighted fields.

- The fix is not to remove route-state fields. Purpose, Movement, Status, Blocked by, Unlocks, WHY, and Continuation note are still load-bearing for continuation memory.

- The route header should become a route card. It should separate route name, goal, type, priority, status, and blocker into predictable fields.

- Add a short `Goal` field. `Purpose` explains why the route matters; `Goal` names the target state in a compact phrase.

- Guidelines are useful, but full Guidelines should not be mandatory on every route. Mandatory full Guidelines compete with Navigation's main job: comprehensive route enumeration.

- Guidelines should become adaptive. Use `none`, `compact`, `full`, or `expand-on-selection` depending on priority, risk, blocker complexity, and whether the route is selected.

- Navigation telemetry should split route coverage from guidance depth. A map can be complete even if low/deferred routes have compact or no Guidelines, as long as route-state fields and continuation notes are present.

## Finding

The current Navigation output has a presentation problem, not a route-contract problem.

The route map in `devdocs/navigation/next_load_bearing_after_navigation_warmup.md` includes the right information. Each route has Purpose, Movement, Status, Blocked by, Unlocks, WHY, Guidelines, and Continuation note. That is why the prior review at `devdocs/inquiries/2026-05-03_23-33__navigation_output_usefulness_review/finding.md` concluded the map is useful as continuation memory.

But usefulness as stored memory is not the same as readability during a live session.

The current format starts routes like this:

```text
■ DEVELOP: Materialize the post-v3 Navigation continuation handoff [HIGH] [active]
```

That single line carries too many roles. It contains confidence, type, direction, priority, and status. Then the following fields are all presented with similar visual weight. The result is readable if the user slows down, but not good for scanning many routes.

Navigation needs a reader-first route hierarchy:

1. route identity;
2. route state;
3. route meaning;
4. route evidence;
5. route guidance;
6. continuation memory.

The better default shape is a route card:

```text
### Route 1: Materialize post-v3 Navigation continuation handoff

Goal: durable continuation memory after warm-up
Type: DEVELOP
Priority: HIGH
Status: active
Blocked by: none

Purpose: make Navigation warm-up usable as durable session memory instead of a one-off summary.
Movement: warm-up files lack handoff rule -> warm-up routine with README/index and post-v3 prior-map overlay.
Unlocks: reliable prior-map reading; cleaner Navigation sessions; later Navigation Observer report contract.
Why this route exists: latest canonical finding says prior Navigation maps should be reconciled after warm-up v3.

Guidance mode: compact
Guidance:
- Add warm-up README/index because future agents need visible run-order and session-boundary rules.
- Keep prior-map overlay small because a full extra warm-up stage is deferred until repeated evidence demands it.

Continuation note: nearest closure route for Navigation warm-up continuity; revisit after first real post-v3 handoff use.
```

This format is longer vertically, but it is easier to scan because each concept has a stable place.

The new `Goal` field is important. `Purpose` and `Goal` are not the same thing. `Goal` is the short destination label. `Purpose` explains what the route would serve, reveal, or unlock.

For example:

```text
Goal: durable continuation memory after warm-up
Purpose: make Navigation warm-up usable as durable session memory instead of a one-off summary.
```

This makes the route easier to compare against other routes. A user can scan goals before reading all purposes.

Guidelines should stay in Navigation, but they should become adaptive.

The current Navigation reference asks for 3-6 independently reasoned guidelines per route. That made sense when the main risk was bare route names with no actionability. Now the real risk is different: full Guidelines on every route can make maps too large and can crowd out route coverage.

Navigation's first job is to enumerate the route space. If advice consumes so much space that fewer routes are listed, Navigation starts losing its main value.

The better rule is:

```text
Guidance mode:
- none: allowed for low/deferred routes when WHY and Continuation note are enough.
- compact: 1-2 critical pointers.
- full: 3-5 pointers with reasons.
- expand-on-selection: defer full guidance until the user or selector chooses the route.
```

Default guidance allocation:

```text
HIGH, risky, blocked, or near-action routes -> compact or full
MEDIUM open/deferred routes -> compact
LOW/deferred routes -> none or compact
Selected route -> full or expanded
```

This preserves actionability without letting advice dominate every route.

The telemetry should change too. The old metric:

```text
Guideline depth: COMPLETE
```

is too blunt if guidance becomes adaptive. It should be split:

```text
Route coverage: COMPLETE / FLAG / THIN
Guidance allocation: COMPLETE / FLAG / THIN
Guidance modes used: none N, compact N, full N, expand-on-selection N
```

This distinction matters because a route map can have excellent route coverage and intentionally compact guidance. That should not be treated as a failure.

For large maps, an optional route index can help:

```text
| # | Direction | Goal | Type | Priority | Status | Blocked by |
|---|---|---|---|---|---|---|
| 1 | Materialize post-v3 handoff | Durable continuation memory | DEVELOP | HIGH | active | none |
```

The index should not be mandatory for every map. It is useful when the map has many routes or when the user asks for a compact overview first.

So the conclusion is:

```text
Default Navigation output = route cards + adaptive guidance + updated telemetry
Large Navigation output = optional index + route cards
Selected route = expanded full guidance
```

This keeps Navigation as Navigation. It does not turn the map into a task plan, and it does not make Navigation choose a route. It simply makes the route space easier to see.

## Next Actions

### MUST

- **What:** Patch `homegrown/navigation/references/navigation.md` so the canonical route format is a route card with explicit Goal, Type, Priority, Status, and Blocked by fields.
  **Who:** Navigation reference document.
  **Gate:** Before producing another Navigation map expected to be used as continuation memory.
  **Why:** Makes Navigation output readable without weakening the route-state contract.

- **What:** Add adaptive Guidelines policy to Navigation reference guidance.
  **Who:** Navigation reference document.
  **Gate:** Same patch as route-card formatting.
  **Why:** Prevents full Guidelines from crowding out route coverage while preserving actionability where it matters.

- **What:** Update Navigation telemetry to split route coverage from guidance allocation.
  **Who:** Navigation reference document.
  **Gate:** Same patch as adaptive Guidelines.
  **Why:** Prevents intentionally compact guidance from being falsely judged as thin output.

### COULD

- **What:** Add an optional Route Index section for large maps.
  **Who:** Navigation reference document.
  **Gate:** When a map has more than 10 routes or when the user asks for a compact scan layer.
  **Why:** Lets the user see route space before reading detailed cards.

- **What:** Reformat `devdocs/navigation/next_load_bearing_after_navigation_warmup.md` as a test artifact.
  **Who:** Materialization or manual spec trial.
  **Gate:** After the Navigation reference is patched.
  **Why:** Provides a concrete before/after example for future Navigation output.

### DEFERRED

- **What:** Build rendered UI cards or a route graph view.
  **Gate:** Revive only after Markdown route cards have been used in several real Navigation maps and still fail scanability.
  **Why (if revived):** A UI may eventually help, but Markdown format should be fixed first.

## Reasoning

The current dense one-line route header was killed as the canonical format. Its defense is compactness. Its prosecution is stronger: it makes the user parse too much from one line and hides the distinction between route direction, type, priority, and status.

Removing Guidelines entirely was killed as the default. Its defense is that it would allow more routes and avoid premature advice. Its prosecution is stronger: it weakens actionability and removes useful safety checks for materialization or follow-up.

Mandatory 3-6 Guidelines on every route was killed. Its defense is consistency and rich actionability. Its prosecution is stronger: it spends too much output budget on advice before the route is selected, especially for low/deferred routes.

The route-card format survived because it preserves all route-state fields while making the output more readable.

Adaptive Guidelines survived because it protects both priorities: complete route enumeration and enough actionability for routes that are high-value, risky, blocked, near-action, or selected.

The optional route index was refined. It is useful for large maps, but it should not be mandatory because it duplicates route data and adds overhead for smaller maps.

The telemetry split survived because the quality check must match the new contract. If guidance depth is adaptive, telemetry must evaluate route coverage and guidance allocation separately.

## Open Questions

### Monitoring

After three Navigation maps use route-card formatting, check whether the user still finds the maps hard to scan.

After three Navigation maps use adaptive Guidelines, check whether selected routes still need additional guidance before materialization.

### Refinement Triggers

If route cards become too long for maps with more than 10 routes, make Route Index mandatory for large maps.

If selected-route materialization repeatedly needs missing guidance, raise the default guidance mode for HIGH/open routes from compact to full.

If compact guidance causes future agents to miss risk warnings, require full guidance for blocked and risky routes.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 


in devdocs/navigation/next_load_bearing_after_navigation_warmup.md

there are some issues i noticed

first one is 

■ DEVELOP: Materialize the post-v3 Navigation continuation handoff [HIGH] [active] Purpose: make Navigation warm-up usable as durable session memory instead of a one-off summary. Movement: warm-up files exist but lack handoff rule -> warm-up routine with README/index and post-v3 prior-map overlay. Status: active Blocked by: none Unlocks: reliable prior-map reading, cleaner Navigation sessions, later Navigation Observer report contract. WHY: the latest canonical finding says prior Navigation maps should be reconciled after warm-up v3, and the current warm-up folder lacks the visible handoff rule. Guidelines:


like text is not formatted in readable way, it should be like this imo

1. a name for direction, a name for goal
Develop tag
Purpose:
Movement:
Status:
blocked by:
....


this is a lot more readable. what do you think ? 

and guidelines are useful ? maybe removing them will enable us more direction outputs? or not?
```

</details>
