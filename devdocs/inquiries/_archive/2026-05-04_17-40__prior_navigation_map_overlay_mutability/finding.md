---
status: active
impacts:
  - homegrown/navigation/warmup/navigator-prior-map-overlay.md
  - homegrown/protocols/navigation_context_intake.md
corrected_by:
  - devdocs/inquiries/2026-05-04_17-49__navigation_warmup_readme_necessity/finding.md
refined_by:
  - devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity/finding.md
---
# Finding: Prior Navigation Map Overlay Mutability

## Question

Should the post-v3 prior Navigation map overlay update the status of old routes inside old `devdocs/navigation/*.md` files every time Navigation runs, or should it preserve old maps as historical snapshots and record current interpretation somewhere else?

The goal is to prevent Navigation memory from becoming stale or misleading without turning old route maps into mutable state that future sessions must keep repairing.

## Finding Summary

- Prior Navigation maps should be treated as immutable historical snapshots by default.

- The post-v3 overlay should **read** prior `devdocs/navigation/*.md` maps and classify their routes against current warm-up context.

- Later refinement: the overlay should produce a route-memory reconciliation result. Saving that result as `prior_map_overlay.md` is useful for durable handoff, but should not be mandatory for small same-session use.

- It should not edit old Navigation map files to update route status.

- Navigation should consume the latest warm-up outputs plus the prior-map overlay result when route memory matters.

- The overlay should not run before every Navigation invocation. It is for cold project-level warm-up after v1/v2/v3, or explicit route-memory reconciliation.

- Current route state should live in the newest Navigation map, sync brief, prior-map overlay, or `_frontier.md` when the context is multi-resolution expansion. Old maps remain evidence.

- Later correction: `homegrown/navigation/warmup/README.md` is not needed as a run-order file. Run-order and conditional routing belong in `homegrown/protocols/navigation_context_intake.md`.

## Finding

### 1. Old Navigation Maps Are Snapshots

A Navigation map records what the route space looked like when the map was produced.

If old maps are edited later, they stop being reliable evidence. A future reader cannot tell whether a route was originally open, later completed, or silently rewritten.

That is dangerous because Navigation maps are meant to support continuation memory. Continuation memory needs history, not just latest state.

The stable rule is:

```text
old navigation.md = historical route snapshot
prior-map overlay result = current interpretation of old route memory
new navigation.md = current route map
```

### 2. Reconciliation Is Not Mutation

The phrase "classify old routes as open, active, blocked, done, stale, superseded, or unknown" should mean:

```text
read old route
compare it to current warm-up context
write current classification into the overlay
leave the old route file unchanged
```

It should not mean:

```text
open old navigation.md
rewrite Status fields
save old navigation.md as if it were current
```

The first preserves evidence. The second creates mutable state drift.

### 3. The Overlay Should Not Run Before Every Navigation

Running overlay every time Navigation runs would turn warm-up into a maintenance tax.

The better trigger is narrower:

- run after cold project-level warm-up v1/v2/v3 when prior maps exist;
- run when a prior map is important to the current Navigation question;
- run when a stale session needs route-memory reconciliation and `navigator-refresh.md` is not enough;
- skip for bounded local Navigation inputs;
- skip when no prior maps exist or the user accepts thin context.

This keeps route memory available without making every Navigation run responsible for historical repair.

### 4. Current State Has Multiple Homes

Not all current route state belongs in the same file.

Use this authority split:

```text
latest ordinary Navigation map
  = current route-space enumeration for one question

prior-map overlay result
  = current interpretation of prior route maps during warm-up

saved prior_map_overlay.md
  = durable storage form of the overlay result when handoff requires it

navigator-refresh sync brief
  = current deltas for a stale warmed session

_frontier.md
  = child-map expansion state for one multi-resolution Navigation run

old navigation.md
  = historical snapshot
```

This avoids a single mutable "truth file" while still giving future sessions a way to recover current state.

## Next Actions

### MUST

- **What:** Patch `navigator-prior-map-overlay.md` to state explicitly that it is read-only over prior maps and that saving `prior_map_overlay.md` is an output mode, not a requirement.
  **Who:** Navigation warm-up routine.
  **Gate:** Before relying on the overlay in a real warmed Navigation session.
  **Why:** Prevents old route maps from becoming mutable state.

- **What:** Patch `navigation_context_intake.md` routing language so overlay is not implied before every Navigation invocation.
  **Who:** Context router.
  **Gate:** Same patch.
  **Why:** Keeps overlay as a cold warm-up / route-memory reconciliation step, not a per-run tax.

### COULD

- **What:** Add a "latest route memory" pointer later.
  **Who:** Future Navigation index or warm-up README.
  **Gate:** Only after at least two overlays exist and discovery becomes hard.
  **Why:** A pointer may help users find the newest overlay without editing old maps.

### DEFERRED

- **What:** Auto-update prior route statuses in old maps.
  **Gate:** Revive only if immutable overlays repeatedly fail and the user explicitly wants mutable route ledgers.
  **Why (if revived):** Direct status updates are simpler to read in one file, but they destroy snapshot semantics and create edit burden.

## Reasoning

The old-map mutation option was killed. It seems attractive because each route card would always show latest state, but it creates historical ambiguity, repeated update obligations, and conflict risk when multiple sessions interpret route status differently.

The read-only overlay survived. It preserves prior maps as evidence and writes current interpretation into a new overlay result. The later refinement is that this result may be inline for small same-session use or saved as `prior_map_overlay.md` when durable handoff matters.

The "run overlay every time" option was refined. It is too expensive and too broad as a default. It survives only as a triggered operation when route-memory reconciliation matters.

The final model is:

```text
preserve old maps
read old maps after warm-up when relevant
produce an overlay result
save it only when durable handoff is useful
Navigation consumes overlay as context
new Navigation output carries current route map
```

This keeps Navigation memory useful without turning the project into a status-update bookkeeping system.

## Open Questions

### Monitoring

After the first real prior-map overlay is used, check whether Navigation could use it without rereading every old map.

After two overlays exist, check whether users can find the latest overlay easily enough or whether a small index/pointer is needed.

### Blocked

No runner or automation should be created until the manual overlay pattern proves useful once.

### Refinement Triggers

Reopen the mutability decision only if immutable overlays produce repeated confusion that cannot be fixed by clearer overlay paths, indexes, or handoff prompts.

## Source Input

```text
$MVL+

u said This file is the actual post-v3 step. It says to read prior devdocs/navigation/*.md maps after v1/v2/v3, then classify old routes as still
  open, active, blocked, done, stale, superseded, or unknown.

so evertime naviagtion will run it will update status of old routes? hmm. i am not in fan of editing old files. But it might be the way.  lets think about this harder...
```
