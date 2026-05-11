---
status: active
refines: devdocs/inquiries/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/finding.md
impacts: homegrown/protocols/multi_resolution_navigation.md
refined_by:
  - devdocs/inquiries/2026-05-04_16-17__route_expansion_fields_necessity_for_auto_navigation/finding.md
---
# Finding: Navigation Frontier Ledger Sidecar Shape

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/finding.md`

**Revision trigger:** The prior finding said budgeted multi-resolution Navigation needs a frontier ledger. The user then noticed that Homegrown already uses `_state.md` and `_branch.md` as durable control files, and asked whether Navigation needs a similar sidecar such as `_navigate.md`.

**What's preserved:** Budgeted child-map expansion still requires a durable ledger before child maps are created. Unrun routes must remain pending and resumable.

**What's changed:** The ledger should be explicitly treated as an underscore control sidecar, not just a visible `frontier.md` report.

**What's new:** The recommended v1 ledger file is `_frontier.md`, not `_navigate.md`.

**Migration:** Patch `homegrown/protocols/multi_resolution_navigation.md` so the output contract uses `_frontier.md` as the control ledger and creates child folders only when candidates are expanded.

## Question

Should multi-resolution Navigation use a ledger/control sidecar similar to `_state.md` and `_branch.md`—possibly `_navigate.md`—and should parent Navigation runs create child direction folders and update the parent ledger, or is there a lighter better shape?

The goal is to decide the right artifact shape for the Navigation frontier ledger, explain whether it should be an underscore control file, a visible map file, or both, clarify how parent and child direction folders should relate, and avoid creating more structure than the system can carry now.

## Finding Summary

- The user's sidecar intuition is correct. Multi-resolution Navigation needs a control file similar in role to `_state.md`.

- The best v1 name is `_frontier.md`, not `_navigate.md`.

- `_navigate.md` is weak because it sounds like a command or verb. `_frontier.md` names the state the file owns: the expansion frontier.

- `navigation.md` should remain the human-readable route map. It can point to frontier status, but it should not become the ledger source of truth.

- `_frontier.md` should carry both the control ledger and the readable run summary in v1. A separate human summary file is premature.

- Parent Navigation runs should update `_frontier.md` after child maps are created.

- Parent runs should not create child folders for every discovered route. Pending candidates should be rows in `_frontier.md`.

- Child folders should be created lazily, only when a candidate is expanded into an actual child Navigation map.

- The efficient v1 run folder shape is:

```text
devdocs/navigation/<run-id>/
  navigation.md
  _frontier.md
  run_trace.md
  children/
    <candidate-id>/
      navigation.md
```

## Finding

### 1. The Ledger Should Be A Control Sidecar

The analogy to `_state.md` and `_branch.md` is correct.

Those files work because they separate control information from final human-facing artifacts. `_state.md` tracks loop progress. `_branch.md` tracks the source question and goal. Neither is trying to be the final finding.

Multi-resolution Navigation needs the same separation.

The visible Navigation map answers:

```text
What routes exist?
```

The frontier ledger answers:

```text
Which routes can be expanded?
Which were expanded?
Which are pending?
Which are blocked?
Where are the child maps?
How can this run resume?
```

Those are different jobs.

### 2. Use `_frontier.md`, Not `_navigate.md`

`_navigate.md` is close to the right idea because it signals "Navigation control file."

But it is still the wrong v1 name.

`navigate` is a verb. It sounds like a command, not a state object. It does not tell the reader what the file owns.

`_frontier.md` is better because it names the controlled object:

```text
the expansion frontier
```

In this context, the frontier is the set of discovered route candidates that may be expanded into child maps.

The file should include a short role statement at the top so future readers do not need to infer the meaning:

```text
This file is the control ledger for this multi-resolution Navigation run.
It records expansion candidates, statuses, child paths, and resume state.
```

### 3. Do Not Make `navigation.md` The Ledger

The parent `navigation.md` should stay readable.

It can include a short pointer such as:

```text
Expansion state: see `_frontier.md`.
```

It can also include high-level status labels when useful.

But it should not be the source of truth for expansion state.

If `navigation.md` becomes the ledger, the route map becomes too dense. Future automation would also have to parse human prose, which is brittle.

Later route-card refinement strengthens this split: ordinary route cards should not carry required `Expansion`, `Expansion reason`, or `Child maps` fields. `_frontier.md` owns that state.

### 4. Pending Candidates Should Be Rows, Not Folders

The parent should not create child folders for every discovered candidate.

That would make every possibility look like a materialized child map, even when no child map exists yet.

It would also create filesystem clutter before the structure has earned its cost.

Use rows for possibilities:

```text
_frontier.md row = candidate exists
```

Use folders for materialized child maps:

```text
children/<candidate-id>/navigation.md = candidate was expanded
```

This keeps output proportional to actual work.

### 5. Parent Ledger Updates After Child Expansion

When a child map is created, the parent `_frontier.md` should update the candidate record.

Minimum update:

```yaml
status: expanded
child_map_path: children/<candidate-id>/navigation.md
```

If expansion fails, the parent ledger should record the reason:

```yaml
status: blocked
status_reason: concrete blocker
```

or:

```yaml
status: skipped_with_reason
status_reason: concrete reason
```

The parent ledger is what lets later sessions resume without reconstructing what happened.

### 6. Child Maps Can Become Parents Later

This design still supports many-layer branching.

If a child `navigation.md` later needs deeper expansion, that child folder can become a run root:

```text
children/<candidate-id>/
  navigation.md
  _frontier.md
  run_trace.md
  children/
    <grandchild-candidate-id>/
      navigation.md
```

Do not create the child `_frontier.md` until the child map itself is being expanded.

That keeps recursive capability without paying recursive overhead up front.

### 7. The Lightest Good V1 Shape

The best v1 structure is:

```text
devdocs/navigation/<run-id>/
  navigation.md       # visible parent route map
  _frontier.md        # control ledger, readable run summary, and resume state
  run_trace.md        # source, settings, validation, outcome
  children/
    <candidate-id>/
      navigation.md   # child route map, only when expanded
```

This is small enough to use manually.

It is also structured enough for a future runner.

It avoids the two bad extremes:

```text
too little structure -> pending routes disappear
too much structure -> empty folders and many sidecars before use
```

A separate summary file should be extracted only if `_frontier.md` becomes too dense after real use.

## Next Actions

### MUST

- **What:** Patch `homegrown/protocols/multi_resolution_navigation.md` so the output contract uses `_frontier.md` instead of `frontier.md`.
  **Who:** Multi-resolution Navigation protocol materialization.
  **Gate:** Before the first protocol-guided budgeted Navigation expansion.
  **Why:** Makes the ledger's control-source role explicit.

- **What:** Add a rule that child folders are created only when a candidate is expanded.
  **Who:** `homegrown/protocols/multi_resolution_navigation.md`.
  **Gate:** Same patch as the `_frontier.md` rename.
  **Why:** Prevents empty folder sprawl and keeps pending candidates cheap.

- **What:** Add a top-of-file role note for `_frontier.md`.
  **Who:** Future `_frontier.md` template or protocol section.
  **Gate:** Before creating the first `_frontier.md`.
  **Why:** Prevents future readers from confusing the sidecar with a human report.

### COULD

- **What:** Let parent `navigation.md` include a short pointer to `_frontier.md`.
  **Who:** Future Navigation output guidance or multi-resolution protocol.
  **Gate:** When the first multi-resolution run is produced.
  **Why:** Keeps human readers aware that expansion state exists without overloading the route map.

- **What:** Define a compact candidate table schema for `_frontier.md`.
  **Who:** Future protocol materialization or first trial.
  **Gate:** Before running `coverage_mode: budgeted`.
  **Why:** Makes statuses and child paths easy to inspect.

### DEFERRED

- **What:** Split `_frontier.md` into `_navigation_state.md` plus `_frontier.md`.
  **Gate:** Revive only after at least two multi-resolution runs show `_frontier.md` has grown into multiple independent responsibilities.
  **Why (if revived):** Splitting may improve clarity once repeated use proves stable sub-responsibilities.

- **What:** Create a navigation index or map-of-maps.
  **Gate:** Revive after multiple multi-resolution run folders become hard to browse.
  **Why (if revived):** An index may help across runs, but it is not needed for a single run's frontier ledger.

## Reasoning

Visible `frontier.md` was refined. It preserves the frontier concept, but it does not clearly signal control state. The better artifact is `_frontier.md`.

`_navigate.md` was killed. The name is short, but it is a verb and sounds like a command. It does not name the state the file owns.

`_frontier.md` survived. It names the expansion frontier and follows the underscore sidecar convention that Homegrown already uses for control metadata.

`_navigation_state.md` was deferred. It is readable and may become useful later, but it is too broad for v1. It could become a dumping ground before real use proves the split.

Creating child folders for every candidate was killed. It creates structure for possibilities that have not been materialized and makes the filesystem heavier without adding child-map knowledge.

Lazy child-folder creation survived. Candidate ids in `_frontier.md` are enough for pending identity. Physical folders should exist only when a child `navigation.md` exists.

The single-sidecar v1 design survived. One `_frontier.md` is the lightest structure that preserves resume, parent-child lineage, and future runner compatibility.

## Open Questions

### Monitoring

After the first protocol-guided budgeted Navigation expansion, check whether `_frontier.md` was easy to update and readable enough for human review.

After the second multi-resolution run, check whether `_frontier.md` remained coherent or started to mix too many responsibilities.

### Blocked

The exact `_frontier.md` table schema is blocked until the multi-resolution Navigation protocol is patched or a first trial creates a real candidate set.

### Refinement Triggers

Reopen the `_frontier.md` name if future users repeatedly misunderstand "frontier" after reading the file's role statement.

Reopen lazy child-folder creation if a future runner needs stable physical paths for pending candidates and a ledger id is not enough.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 


What: Require a frontier ledger before budgeted child-map expansion. Who: Future multi-resolution Navigation protocol. Gate: Before budgeted mode is allowed. Why: Preserves unrun paths as pending and resumable.


hmm, so u know how we have _state.md file and _branch.md file ? maybe ledger we need for navigation can be also sth similar ? what do you think? _navigate.md maybe? and it can be such that parent creates child directions folders and parent navigate.md is updated with this knowledge.. but maybe this is too much work? maybe there is a more efficient better way?
```

</details>
