---
status: active
impacts:
  - homegrown/navigation/warmup/
  - homegrown/protocols/navigation_context_intake.md
refines:
  - devdocs/inquiries/2026-05-03_13-07__navigation_warmup_v1_v2_v3_sufficiency/finding.md
  - devdocs/inquiries/2026-05-03_22-23__navigation_prior_map_read_after_warmup_v3/finding.md
---
# Finding: Sync Idle Navigator Recent Developments

## Changes from Prior

**Prior paths:**

- `devdocs/inquiries/2026-05-03_13-07__navigation_warmup_v1_v2_v3_sufficiency/finding.md`
- `devdocs/inquiries/2026-05-03_22-23__navigation_prior_map_read_after_warmup_v3/finding.md`

**Revision trigger:** The user noticed a practical stale-session problem. One AI session was warmed up and produced a Navigation map, then another session continued changing Homegrown. The idle Navigator session cannot know about those new files unless it is refreshed.

**What's preserved:** Warm-up remains once per session. Navigation still consumes warmed context and enumerates routes; it does not perform context intake itself.

**What's changed:** The warm-up system needs an explicit incremental refresh path after project state changes. The current v1/v2/v3 routine handles baseline warm-up, but not the cheap "what changed since then?" case.

**What's new:** Add a lightweight Navigator refresh/sync operation that produces a sync brief for an idle Navigator session before Navigation runs again.

**Migration:** Do not create a full `navigator-warmup4.md` by default. Start with a small `navigator-refresh.md` support routine or equivalent wrapper rule, then promote only after real use proves the shape.

## Question

How should Homegrown sync an idle, previously warmed Navigator session with recent project developments so Navigation sees new directions without rerunning the full warm-up routine?

The goal is to identify what is still missing from Navigation implementation, decide whether the missing piece is fresh context load logic, and define a practical sync shape that can be used now while scaling later.

## Finding Summary

- The user's diagnosis is correct: Navigation is still missing an explicit stale-session refresh operation.

- This should not be another heavy warm-up stage by default. It should be a small delta sync that runs after a session has gone stale and before Navigation is asked for a new map.

- The refresh should produce a **sync brief**: a compact, source-anchored update that an idle Navigator session can read before answering.

- The sync brief should include the freshness anchor, read set, recent authoritative changes, changed files, stale or superseded assumptions, Navigation impact, missing context, and a handoff prompt.

- Full v1/v2/v3 warm-up remains the fallback when there is no usable anchor, the context boundary changed globally, or the delta scan finds unresolved conflicts.

- `homegrown/protocols/multi_resolution_navigation.md` and `_frontier.md` do not solve this problem. They preserve child-map expansion state, not whole-session context freshness.

- The likely next implementation is `homegrown/navigation/warmup/navigator-refresh.md`, plus a later patch to `homegrown/protocols/navigation_context_intake.md` so it routes baseline warm-up to v1/v2/v3 and stale-session sync to the refresh routine.

## Finding

### 1. The Missing Piece Is Incremental Freshness

The Navigation system now has a reasonable baseline shape:

```text
v1: source-of-truth orientation and current frontier
v2: project-direction architecture
v3: movement traces
post-v3 overlay: prior Navigation-map reconciliation
Navigation: route map
```

That sequence handles a cold or newly warmed session.

It does not fully handle an idle session. A session can be warmed correctly at 13:00, then become stale at 15:00 after another session creates new findings, edits protocols, materializes files, or changes Navigation map contracts.

If the stale session is then asked "what is next?", it will answer from a past project state. The answer may look coherent while missing the newest load-bearing route.

The missing operation is therefore:

```text
old warmed context + recent project movement -> refreshed Navigation context
```

That is not Navigation itself. It is context freshness work before Navigation.

### 2. Refresh Is Not Full Warm-Up

Rerunning v1/v2/v3 every time a session may be stale would work, but it is too heavy.

The user is trying to reduce Navigation burden, not add a repeated archaeology tax. Most stale-session cases have a small delta: a few new inquiry findings, a changed protocol file, a new materialization trace, or a corrected assumption.

The normal flow should be:

```text
baseline warm-up exists
  -> project changed
  -> run refresh from a freshness anchor
  -> produce sync brief
  -> Navigation consumes refreshed context
```

Full warm-up should remain the fallback when the refresh cannot trust its baseline.

Fallback triggers:

- no prior warm-up output or Navigation map exists;
- the user changed the project, source set, or goal boundary;
- recent sources conflict and cannot be resolved cheaply;
- the refresh finds that the prior warm-up was already thin or wrong;
- Navigation previously failed because important context was missing.

### 3. The Sync Brief Is The Practical Artifact

The refresh operation should produce a sync brief.

A sync brief is a short durable artifact or pasteable handoff that tells the idle Navigator session what changed and how that changes Navigation.

Minimum fields:

```markdown
# Navigator Sync Brief: <name>

## Freshness Anchor
## Read Set
## Recent Authoritative Changes
## Changed Operational Files
## New Navigation-Relevant Artifacts
## Stale Or Superseded Assumptions
## Open Gates And Blockers
## Navigation Impact
## Missing Context And Confidence Limits
## Handoff Prompt
```

This solves the actual session problem. The user can return to the idle Navigator and say:

```text
Read this sync brief first. Then update your current Navigation map or produce a new one from the refreshed context.
```

The brief should be source-anchored. It should name what was read and why. It should also name what was not read. That prevents "I am synced" from becoming false confidence.

### 4. What Refresh Should Read

The refresh should read changes since a freshness anchor.

Accepted anchors:

- last `devdocs/archaeology/project_summary.md`;
- last current-state brief under `devdocs/navigation_context/`;
- last `devdocs/navigation/*.md` map;
- explicit user-provided timestamp or file path;
- a materialization trace or finding that changed the project state.

Default read set for Homegrown:

- recent relevant `devdocs/inquiries/*/finding.md`;
- recent `devdocs/navigation/*.md`;
- changed files under `homegrown/navigation/`;
- changed files under `homegrown/protocols/` and `homegrown/contracts/` when they affect Navigation;
- recent `devdocs/materializations/*/materialization_trace.md`;
- recent outcome review files when present;
- `git status --short` as a supporting clue, not as the only source of truth.

Archives and `docarchive/` should stay out by default. Read them only when a recent finding says critique kills, discipline failures, or intermediate outputs are needed to understand the change.

### 5. Placement Should Stay Near Navigation Warm-Up

The best first location is:

```text
homegrown/navigation/warmup/navigator-refresh.md
```

This is better than putting refresh under `homegrown/protocols/navigation/`, because that would create a second Navigation namespace.

It is also better than making it a core Navigation discipline. Refresh prepares context; Navigation enumerates route space.

`homegrown/protocols/navigation_context_intake.md` can later become the small controller:

```text
Cold session or global boundary change -> run v1/v2/v3.
Previously warmed but stale session -> run navigator-refresh.
Navigation request with fresh context -> run Navigation.
```

The wrapper should not duplicate refresh details. It should preserve triggers, handoff, and failure modes.

### 6. How To Sync The Idle Session Right Now

The manual version can work before a formal command exists.

In the active session, produce a sync brief that includes:

- new findings since the idle session warmed up;
- files changed since then;
- protocol decisions that supersede the old Navigation map;
- open gates and blockers created by the new work;
- what the idle Navigator should treat as stale;
- what prompt it should answer next.

Then give that sync brief to the idle session before asking it "what next?"

The idle session should not rely on its old warmed memory alone. It should first incorporate the sync brief, then either update its prior Navigation map or produce a new Navigation map.

## Next Actions

### MUST

- **What:** Create a lightweight `navigator-refresh.md` support routine.
  **Who:** `homegrown/navigation/warmup/`.
  **Gate:** Before relying on idle warmed Navigator sessions after new Homegrown changes.
  **Why:** Gives stale sessions a cheap and source-anchored refresh path instead of forcing full warm-up or stale answers.

- **What:** Define the Navigator sync brief template.
  **Who:** `navigator-refresh.md` or the first manual sync artifact.
  **Gate:** Same patch as the refresh routine.
  **Why:** Makes sync portable across sessions and prevents informal context dumping.

- **What:** Add freshness anchor fields to warm-up or refresh outputs.
  **Who:** Warm-up routine and refresh routine.
  **Gate:** Before the second real refresh use.
  **Why:** Refresh needs to know what baseline it is updating.

- **What:** Patch `navigation_context_intake.md` only after the refresh routine exists.
  **Who:** `homegrown/protocols/navigation_context_intake.md`.
  **Gate:** After `navigator-refresh.md` has stable target path and first template.
  **Why:** The wrapper should route stale-session cases without becoming another detailed procedure.

### COULD

- **What:** Save refresh outputs under `devdocs/navigation_context/<run-id>/sync_brief.md`.
  **Who:** Refresh routine.
  **Gate:** On the first real refresh where the brief affects a Navigation run.
  **Why:** Creates evidence for future outcome review and avoids losing the sync state in chat.

- **What:** Add a short warm-up README that lists baseline warm-up, post-v3 prior-map overlay, refresh, and Navigation handoff.
  **Who:** `homegrown/navigation/warmup/README.md`.
  **Gate:** Before expecting other sessions to run the routine without user explanation.
  **Why:** Makes the session lifecycle visible.

### DEFERRED

- **What:** Background session observer or automatic file watcher.
  **Gate:** Revive only after at least three manual refreshes show repeated, stable read-set and invalidation rules.
  **Why (if revived):** Automation can reduce burden later, but it is too much before the refresh artifact proves itself.

- **What:** Full `navigator-warmup4.md`.
  **Gate:** Revive only if two real sessions show that refresh needs broad trace generation beyond a compact sync brief.
  **Why (if revived):** A true v4 may become useful if route-memory and freshness reconciliation grow beyond a small handoff.

## Reasoning

Full warm-up on every stale check was killed. It solves freshness, but it repeats orientation and architecture work even when only a small delta changed.

Navigation-internal refresh was killed. It is convenient, but it collapses context intake into route enumeration and makes failures harder to diagnose.

Using `_frontier.md` as the sync mechanism was killed. `_frontier.md` belongs to multi-resolution Navigation expansion. It records child-map candidates, statuses, and resume state for one Navigation run. It is not a global project freshness file.

Automated background sync was killed for now. It may become valuable later, but it needs session identity, file watching, source authority rules, and invalidation semantics that the project has not tested manually yet.

The lightweight Navigator refresh routine survived. It directly solves the user's stale-session problem while preserving the existing boundary: warm-up prepares context, Navigation maps routes, materialization writes files, and outcome review checks after use.

Patching `navigation_context_intake.md` survived with refinement. The wrapper should route to refresh when stale, but it should not define the full refresh procedure itself. Otherwise it recreates duplicate authority with the warm-up folder.

The sync brief survived as the practical artifact. It is small enough to use now and structured enough for future automation.

## Open Questions

### Monitoring

After the first sync brief is used by an idle Navigator session, check whether the resulting Navigation output included the recent changes without requiring the user to manually restate them.

### Blocked

The exact sync brief schema is blocked until the first `navigator-refresh.md` draft or first manual sync brief is created.

### Refinement Triggers

Create automation only if at least three manual refreshes repeat the same read-set and stale-assumption rules.

Promote refresh into a heavier warm-up stage only if two real refreshes are too thin and miss important Navigation-changing context.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 
okay so what is left to finish implementing navigation? I am thinking we are missing a fresh context load logic. 

for example i have another ai session which was warmed up. and created one navgiation output. but it was idle while we were working on all these things.. now i can go back and ask it what is next but it doesnt know all these newly created files, which means new direction ... 

so question is how to sync navigator session with recent developments?
```

</details>

