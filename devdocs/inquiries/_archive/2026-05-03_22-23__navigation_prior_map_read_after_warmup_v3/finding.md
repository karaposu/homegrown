---
status: active
refines: devdocs/inquiries/2026-05-03_14-19__navigation_output_contract_route_map_resume_memory/finding.md
---
# Finding: Navigation Prior Map Read After Warm-Up v3

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-03_14-19__navigation_output_contract_route_map_resume_memory/finding.md`

**Revision trigger:** The prior finding said Navigation warm-up should read prior Navigation maps, but it did not decide which warm-up stage should do that reading.

**What's preserved:** Prior Navigation maps are still valuable continuation memory. They should be read before a new Navigation run when available.

**What's changed:** Prior Navigation maps should not be read deeply by `navigator-warmup1.md`.

**What's new:** Prior Navigation maps should be read after `navigator-warmup3.md` as a lightweight continuation overlay or handoff step.

**Migration:** Do not patch v1/v2/v3 to all read prior maps. Add a visible post-v3 handoff rule first. Promote that rule to a small command only if real use proves README/wrapper guidance is too weak.

## Question

Should prior Navigation maps be read by warm-up v1/v2/v3 themselves, or should they be read after v3 as a separate continuation-memory step before Navigation runs?

The goal is to decide where prior `navigation.md` and `devdocs/navigation/*.md` reading belongs so Navigation warm-up stays clean, avoids premature anchoring, and still gives Navigation access to movement-space memory.

## Finding Summary

- The user's instinct is right: prior Navigation-map reading should happen after `navigator-warmup3.md`, not inside `navigator-warmup1.md`.

- `navigator-warmup1.md` should remain source-grounded orientation and current-frontier reading. Prior Navigation maps are derived route snapshots, not canonical source-of-truth artifacts.

- `navigator-warmup2.md` should remain project-direction architecture. Old route maps can confuse "where the project is actually going" with "what an earlier Navigation run listed as possible."

- `navigator-warmup3.md` should remain movement trace generation. It creates the evidence needed to judge old routes, but it should not also become the route-memory reducer.

- The missing operation is a small post-v3 continuation overlay: read prior Navigation maps, compare them against v1/v2/v3 outputs, classify route states, preserve useful continuation notes, and produce a short handoff brief for Navigation.

- Do not call this `navigator-warmup4.md` yet. A full fourth warm-up command is deferred until a real Navigation warm-up run shows that a README/wrapper rule is too easy to miss or too underspecified.

## Finding

Prior Navigation maps should be read after `navigator-warmup3.md`.

The reason is not just convenience. Prior Navigation maps are a different kind of artifact from findings, protocols, contracts, and source files. A finding records an accepted conclusion for an inquiry. A Navigation map records a route-space snapshot: open routes, blocked routes, deferred routes, and continuation notes from a previous moment.

Route-space snapshots can be useful, but they can also be stale. They need to be interpreted against the current project state before they influence the next Navigation run.

That makes `navigator-warmup1.md` the wrong place for deep prior-map reading. v1's job is to establish a plain project summary and current frontier from first-party source-of-truth artifacts. If v1 reads old route maps deeply, old possible routes can anchor the session before the project has been re-grounded.

`navigator-warmup2.md` is also too early. v2 explains the project-direction architecture: the end goal, intermediate goals, attempts, positioning, abstractions, and movement path. Prior Navigation maps can inform later route memory, but they should not drive the architecture read.

`navigator-warmup3.md` is adjacent to the right operation, but should not absorb it. v3's job is movement traces: how ideas, decisions, artifacts, protocols, branches, implementations, or corrections moved over time. Those traces are exactly the evidence needed to judge whether old routes are still live, blocked, stale, or superseded. But if v3 also reduces old Navigation maps, v3 becomes too broad.

The clean sequence is:

```text
v1: source-of-truth orientation and current frontier
v2: project-direction architecture
v3: movement traces
post-v3 overlay: prior Navigation-map reconciliation
Navigation: new route map
```

The post-v3 overlay should be small. It should not become a heavy fourth archaeology command by default.

The overlay's job is:

```text
Read prior navigation.md files and devdocs/navigation/*.md.
Compare prior routes against v1/v2/v3 outputs.
Classify routes as open, active, blocked, done, stale, superseded, or unknown.
Preserve useful Continuation note material.
Produce a short continuation brief for Navigation.
Treat old maps as evidence, not authority.
```

This gives Navigation the memory it needs without letting old route maps distort the initial warm-up.

The practical next shape should be a visible handoff rule in the warm-up folder, likely in `homegrown/navigation/warmup/README.md` or the tiny `navigation_context_intake.md` wrapper if that wrapper is kept. If that proves too weak in practice, create a small `navigator-handoff.md` command. A full `navigator-warmup4.md` should wait.

## Next Actions

### MUST

- **What:** Add a visible post-v3 continuation-memory rule to the warm-up routine.
  **Who:** `homegrown/navigation/warmup/README.md` or the transitional `homegrown/protocols/navigation_context_intake.md` wrapper.
  **Gate:** Before expecting warm-up to preserve prior Navigation-map memory.
  **Why:** Future agents need to know that prior maps are read after v3, not during v1.

- **What:** The post-v3 rule must say prior Navigation maps are evidence, not authority.
  **Who:** Same warm-up handoff location.
  **Gate:** Same patch as the post-v3 rule.
  **Why:** Old route maps can be stale or superseded.

- **What:** The post-v3 rule must define the continuation brief fields.
  **Who:** Same warm-up handoff location.
  **Gate:** Same patch as the post-v3 rule.
  **Why:** Navigation needs a compact handoff, not raw old maps.

### COULD

- **What:** Create a small `navigator-handoff.md` command.
  **Who:** `homegrown/navigation/warmup/`.
  **Gate:** After one real warm-up session if README/wrapper guidance is missed or produces inconsistent handoffs.
  **Why:** A command would make the overlay easier to execute consistently.

### DEFERRED

- **What:** Create a full `navigator-warmup4.md`.
  **Gate:** Revive only after at least two real Navigation warm-up sessions show the post-v3 overlay needs substantial logic beyond a short handoff rule.
  **Why (if revived):** A real v4 may become useful if route-map accumulation creates enough complexity to justify a dedicated stage.

## Reasoning

Putting prior-map reading in v1 was killed. The strongest defense is that v1 is the broad source read, so it could include prior maps. That fails because prior Navigation maps are not ordinary source-of-truth artifacts. They are derived route snapshots that need freshness judgment. v1 does not yet have enough current-state evidence to do that judgment safely.

Putting prior-map reading in v2 was killed. v2 is closer to direction than v1, but it still lacks v3's movement traces. It should explain the project's direction architecture, not let old route possibilities shape that architecture.

Putting prior-map reading inside v3 was refined. v3 is the closest existing stage because it works with movement over time. But v3's main job is trace generation. Route-memory reconciliation should use v3 output, not become v3's hidden second job.

Letting Navigation read prior maps directly was killed. Navigation should consume prepared context and map routes. If Navigation also reconciles old maps, it mixes context preparation with route generation.

Creating a full `navigator-warmup4.md` was deferred. A dedicated command may eventually be right, but it is too heavy before one real Navigation warm-up test. The project should start with a visible post-v3 handoff rule.

The post-v3 continuation overlay survived because it preserves all important constraints. It keeps v1/v2/v3 clean, gives Navigation continuation memory, controls staleness, and does not add a heavy stage before evidence demands one.

## Open Questions

### Monitoring

After the first real Navigation warm-up run, check whether the post-v3 handoff rule was actually followed and whether Navigation used the continuation brief correctly.

### Refinement Triggers

Create `navigator-handoff.md` if README/wrapper guidance is missed in one real Navigation warm-up run.

Create `navigator-warmup4.md` only if at least two real Navigation warm-up sessions show the overlay needs substantial logic beyond a short handoff.

Re-open this decision if prior Navigation maps begin accumulating faster than v3 traces can explain them.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 
 Not done yet: warm-up v1/v2/v3 explicitly reading prior navigation.md / devdocs/navigation/*.md

yes but i think this reading shouldnt be about v1, it should be after v3  what do you think ?
```

Additional pasted MVL skill text omitted from this section because it was runner context, not part of the substantive design question.

</details>
