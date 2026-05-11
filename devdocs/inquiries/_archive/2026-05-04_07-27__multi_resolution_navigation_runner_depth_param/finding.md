---
status: active
refines: devdocs/inquiries/2026-05-04_07-12__recursive_navigation_coverage/finding.md
corrected_by:
  - devdocs/inquiries/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/finding.md
  - devdocs/inquiries/2026-05-04_16-17__route_expansion_fields_necessity_for_auto_navigation/finding.md
---
# Finding: Multi-Resolution Navigation Runner Depth Param

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-04_07-12__recursive_navigation_coverage/finding.md`

**Revision trigger:** The user accepted the need for multi-resolution Navigation but noticed that manually running child Navigation maps one by one is not feasible. The user proposed a separate loop or runner with a depth parameter.

**What's preserved:** Multi-resolution Navigation is still the right concept. Navigation should map route space at declared resolution levels and stop before final selection.

**What's changed:** The operational problem is now sharper. The system needs an orchestration layer so the user does not manually coordinate every child map.

**What's new:** The best shape is **protocol-first, runner-later**. Start with a protocol that defines bounded traversal; promote to a command or runner after one or two real uses prove the contract.

**Migration:** Do not build a depth-only runner. Later corrections refine this finding: breadth is not the problem, `max_expansions` should become current-run `batch_size` or `max_batch_expansions`, and required route-card Expansion fields should not be added. Use `homegrown/protocols/multi_resolution_navigation.md` and `_frontier.md` for expansion candidates, child-map paths, status, and resume state.

## Question

Should multi-resolution Navigation become a separate loop/runner like MVL with a depth parameter, or is there a better operational shape that avoids manually running Navigation one by one while keeping coverage bounded?

The goal is to decide whether a separate runner is justified, define what a depth parameter should and should not mean, identify the safest minimal implementation path, and clarify how the design avoids both manual infeasibility and uncontrolled recursive expansion.

## Finding Summary

- The user is right that manual child Navigation is not feasible as the long-term operating model.

- A separate operation is needed, but it should not be a peer cognitive loop like MVL. MVL coordinates multiple cognitive disciplines; multi-resolution Navigation repeatedly applies one discipline over a route tree.

- The correct system type is a **traversal runner** or **protocol-backed command**, not a new thinking discipline.

- A `depth` parameter is useful but not sufficient. Depth controls vertical levels, not execution batching, pending candidates, output locality, or resume state.

- The safe control contract was later refined to `depth`, `coverage_mode`, `batch_size` or `max_batch_expansions`, `expansion_policy`, `scheduling_policy`, `output_root`, `resume_from`, and an explicit `selection_boundary: no_final_selection` rule.

- The immediate next artifact should be `homegrown/protocols/multi_resolution_navigation.md`, not an installed runner.

- After one or two protocol-guided runs show that the output reduces user burden, it can become a command such as `/multi-navigation` or a Navigation `--multi` mode.

- Parallel child Navigation should remain deferred until sequential traversal, child-map paths, `_frontier.md`, and run trace behavior are stable.

## Finding

### 1. Manual Multi-Resolution Navigation Will Not Scale

The previous finding established that Navigation needs multiple resolution levels. A top-level map can show major project directions, and child maps can explore dense or important regions.

That idea is correct, but manual execution is not enough.

If every child map requires the user to inspect the parent map, choose one route, run Navigation, name the output, remember lineage, then repeat, the user still carries the coordination burden. That is exactly the burden Navigation is supposed to reduce.

So the user is right: this needs an operational layer.

### 2. The Operation Should Not Be A Full MVL-Like Cognitive Loop

MVL and MVL+ are cognitive loops. They coordinate multiple disciplines: Sensemaking, Innovation, Critique, and in MVL+ also Exploration and Decomposition.

Multi-resolution Navigation is different.

It does not apply multiple cognitive disciplines. It repeatedly applies Navigation across a route tree. It takes a parent route map, finds expansion candidates, produces child route maps, and composes the result.

That means its system type should be:

```text
traversal runner
or
protocol-backed command
```

not:

```text
new cognitive loop primitive
```

Calling it a "loop" in casual language is fine. But architecturally it should not become a peer of MVL.

### 3. Depth Alone Is A Trap

A depth parameter is useful. It says how many levels of child maps the traversal may create.

But depth alone is not enough.

This command is unsafe:

```text
/multi-navigation --depth 2 <source>
```

Later correction: the problem is not breadth itself. Breadth is what Navigation is supposed to reveal.

The problem is untracked child-map materialization. If the parent map has 12 expandable routes and a depth-2 run immediately creates child maps for all of them without `_frontier.md`, statuses, batch semantics, and resume state, the output becomes hard to continue and easy to misread.

The minimum safe control surface is:

```text
depth
coverage_mode
batch_size or max_batch_expansions
expansion_policy
scheduling_policy
output_root
resume_from
selection_boundary: no_final_selection
```

`depth` controls vertical traversal.

`coverage_mode` says whether the run is exhaustive, budgeted, or sampled.

`batch_size` controls how many already-discovered candidates are materialized in this run.

`expansion_policy` controls which routes are eligible for child maps.

`scheduling_policy` orders the next expansion batch without making final route selection.

`output_root` controls where files go.

`resume_from` allows later runs to continue pending candidates from `_frontier.md`.

`selection_boundary: no_final_selection` preserves Navigation's boundary: the runner maps route space but does not choose the final route.

### 4. Protocol-First Is Safer Than Runner-First

Runner behavior is high-risk in Homegrown because it can create many files and shape future decisions.

The safer order is:

```text
multi-resolution Navigation protocol
-> _frontier.md ledger contract
-> one small sequential trial
-> outcome review
-> command/runner wrapper
-> later parallel child maps
```

The protocol should live at:

```text
homegrown/protocols/multi_resolution_navigation.md
```

Its job would be to define the traversal contract before automation.

That protocol should specify:

```text
source authority
input source
depth
coverage_mode
batch_size or max_batch_expansions
expansion_policy
scheduling_policy
child-map header
output layout
_frontier.md ledger and readable run summary
stop rules
trace
selection boundary
```

This gives the future runner something stable to execute.

### 5. The Future Runner Shape Is Still Valid

After the protocol works, a runner or command makes sense.

A good future invocation could look like:

```text
/multi-navigation \
  --depth 2 \
  --batch-size 4 \
  --policy high-priority \
  --scheduling-policy high_priority_first \
  --output devdocs/navigation/<map-id>/ \
  <source>
```

Possible policies:

```text
expansion-needed
user-selected
high-priority
blocked-high
coverage-thin
```

Expected output:

```text
navigation.md
_frontier.md
run_trace.md
children/<route-id>/navigation.md
```

This would reduce manual work without losing control.

### 6. Parallelism Comes Later

Parallel child Navigation is attractive because child maps for independent parent routes can be generated at the same time.

It should not be the first implementation.

Parallelism is safe only after:

- child maps have stable parent route identity;
- child maps write to distinct paths;
- `_frontier.md` records candidate status, child paths, and resume state;
- the runner records why each child was expanded;
- the user can read the final output without opening every file manually.

Before those conditions exist, parallelism multiplies disorder.

## Next Actions

### MUST

- **What:** Do not implement a depth-only runner.
  **Who:** Future Navigation runner/materialization work.
  **Gate:** Before any multi-resolution Navigation command is created.
  **Why:** `depth` alone does not prevent breadth explosion or hidden selection.

- **What:** Use existing route-card fields to derive expansion candidates, then store expansion state in `_frontier.md`.
  **Who:** `homegrown/protocols/multi_resolution_navigation.md` and future runner work.
  **Gate:** Before any protocol or runner tries to create child maps from parent maps.
  **Why:** The runner needs explicit route eligibility evidence, but required route-card Expansion fields create duplicate state and update burden.

- **What:** Create `homegrown/protocols/multi_resolution_navigation.md` before creating an installed runner.
  **Who:** Homegrown protocol layer.
  **Gate:** Before `/multi-navigation`, Navigation `--multi`, or similar command behavior.
  **Why:** Runner behavior should be governed by a contract before it starts producing nested route artifacts.

### COULD

- **What:** Trial the protocol with `depth: 1` or `depth: 2`, `batch_size: 2-4`, and `policy: high-priority`, `blocked-high`, or `user-selected`.
  **Who:** User plus Navigation discipline.
  **Gate:** After the protocol and `_frontier.md` contract exist.
  **Why:** This tests whether the process reduces user burden before automating it.

- **What:** Promote the protocol into a command after one or two successful trials.
  **Who:** Future materialization run.
  **Gate:** After a protocol-guided run produces a useful `_frontier.md` and `run_trace.md`.
  **Why:** A command is justified only when the contract is known to work.

- **What:** Use Navigation `--multi` as the eventual user-facing command surface.
  **Who:** Future runner design.
  **Gate:** After the protocol and runner behavior are stable.
  **Why:** It may be easier for users than introducing another top-level command name.

### DEFERRED

- **What:** Parallel child-map execution.
  **Gate:** Revive after sequential traversal has stable output paths, child-map headers, `_frontier.md`, and run trace behavior.
  **Why (if revived):** It can reduce runtime cost once artifacts are mergeable.

- **What:** Navigation atlas or graph manager.
  **Gate:** Revive after several multi-resolution maps become hard to traverse in Markdown.
  **Why (if revived):** A graph may eventually help with route lineage and stale-state tracking.

- **What:** Treat multi-resolution Navigation as a new MVL-like cognitive primitive.
  **Gate:** Reopen only if future evidence shows traversal over Navigation needs additional cognitive disciplines inside the runner.
  **Why (if revived):** It would justify a stronger loop identity, but current evidence does not.

## Reasoning

Manual-only was killed as the final design. It is safe, but it fails the user's goal because it keeps the coordination burden on the human.

Depth-only runner was killed. It solves part of the problem, but it leaves child-map materialization, pending candidates, and resume state uncontrolled. A depth-2 traversal can still produce too many child maps if execution is not governed by `_frontier.md` and batch semantics.

The full MVL-like peer loop was killed. MVL coordinates multiple cognitive disciplines. Multi-resolution Navigation coordinates repeated Navigation runs. That is a traversal problem, not a new cognitive-loop primitive.

Extending Navigation directly with `--multi` was refined. It may become a good user-facing command surface later, but internally the behavior should be governed by a protocol-backed runner.

The atlas or graph manager was deferred. It is plausible long-term infrastructure, but Markdown route maps plus `_frontier.md` should be tested first.

Protocol-first multi-resolution Navigation survived because it gives the system a safe bridge from the concept to future automation.

Budgeted traversal runner survived as the medium-term endpoint. It directly answers the user's feasibility concern, but only after the protocol and `_frontier.md` make traversal bounded and resumable.

The final assembly survived because it satisfies all major requirements:

```text
reduces manual burden
keeps traversal bounded
preserves Navigation's no-selection boundary
creates readable `_frontier.md` summary
can scale to parallelism later
```

Later correction: "readable composition output" should not imply a required `composition.md` artifact. In v1, `_frontier.md` carries the readable run summary and control ledger.

## Open Questions

### Monitoring

After the first protocol-guided multi-resolution Navigation run, check whether the user had to manually reconstruct parent-child relationships. If yes, the protocol's `_frontier.md` or child-map header contract is insufficient.

After the first two runs, check whether `batch_size` and `expansion_policy` prevented output overload without hiding pending candidates. If not, the default batch policy is too loose.

### Blocked

The runner cannot be safely materialized until the protocol defines how to derive expansion candidates from existing route cards and how `_frontier.md` records child-map output state.

### Refinement Triggers

Create an installed runner or skill wrapper after one or two protocol-guided runs produce useful `_frontier.md` and `run_trace.md` files and reduce manual burden.

Add parallel execution only after sequential traversal creates stable output paths and reliable `_frontier.md` state.

Reopen the "MVL-like loop" framing only if the traversal runner starts needing internal Sensemaking, Innovation, or Critique passes to decide expansion.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

multi resolution navigation can be a seperate loop like MVL ... depth param can be given as input param...

what do you think? other wise we will have to run navigation one by one and it is not feasible.. 

maybe there is better option?
```

The pasted MVL skill text is omitted because it was invocation context, not the substantive design question.

</details>
