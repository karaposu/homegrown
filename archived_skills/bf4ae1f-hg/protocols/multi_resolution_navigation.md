> **Loading note.** This file is loaded by a human, Navigation, MVL/MVL+, materialization work, meta-loop work, or a future runner when a Navigation map needs child maps across multiple resolution levels. Read it in full before executing MULTI_RESOLUTION_NAVIGATION. This protocol governs route-frontier preservation, child-map expansion, `_frontier.md` run state, and resume state. It does not choose the final route.

---

# MULTI_RESOLUTION_NAVIGATION - Frontier-Preserving Navigation Expansion Protocol

MULTI_RESOLUTION_NAVIGATION is the operational protocol for expanding a Navigation map across multiple resolution levels without losing route-space coverage.

Plain-language alias: **multi-resolution Navigation**.

Navigation sees possible directions. Multi-resolution Navigation lets a route map zoom into selected route regions while preserving the full expansion frontier.

This protocol is protocol-first. It can be executed manually now and can guide a future runner later. It is not a runner implementation.

---

## Breadth Invariant

Breadth is desired at the discovery layer.

When many meaningful directions exist, Navigation should expose them. A large route frontier is not a defect by itself.

The actual risk is untracked expansion execution:

```text
many route candidates exist
  -> child maps are created without a frontier ledger
  -> unexpanded candidates disappear
  -> output becomes unreadable
  -> later sessions cannot resume coverage
```

Therefore:

```text
Budget controls current-run child-map materialization.
Budget does not control whether a route exists.
```

Unrun does not mean rejected.

Out-of-policy does not mean nonexistent.

Scheduled first does not mean finally selected.

---

## Purpose

Use MULTI_RESOLUTION_NAVIGATION to:

- preserve complete route-frontier visibility while expanding Navigation across levels;
- separate route discovery from child-map execution;
- support explicit exhaustive traversal when full expansion is desired;
- support budgeted traversal when only a current-run batch should be materialized;
- preserve pending candidates for later continuation;
- prevent scheduling order from becoming hidden route selection;
- produce a readable `_frontier.md` run summary that a future warm-up can read without opening every child map.

---

## Non-Goals

MULTI_RESOLUTION_NAVIGATION does not:

- decide which route the project should pursue;
- replace Navigation's route enumeration discipline;
- replace MVL, MVL+, materialization, outcome review, loop diagnose, or reflect;
- create a runner, CLI parser, or automation implementation in v1;
- hide route candidates because they were not expanded in the current run;
- treat a scheduling policy as final selection;
- edit `.codex` files.

---

## When To Use

Use this protocol when:

- a parent Navigation map has routes whose internal subspace needs deeper mapping;
- a project-level Navigation map is too coarse for action but useful as a top-level frontier;
- several route regions need child Navigation maps;
- the user wants broad route coverage without manually coordinating every child map;
- a future runner needs a contract for depth, batch execution, output paths, and resume state.

Do not use this protocol when:

- one ordinary Navigation map is enough;
- the task is to choose the best route rather than enumerate route space;
- the selected route should be materialized into files; use `homegrown/protocols/artifact_materialization.md`;
- a prior result has already been used and needs after-use review; use `homegrown/protocols/outcome_review.md`;
- the failure is about which discipline went wrong; use `homegrown/protocols/loop_diagnose.md`.

---

## Source Authority

Accepted source authorities:

- explicit user request;
- completed `finding.md`;
- parent Navigation map;
- Navigation warm-up current-state brief;
- branch result;
- outcome-review route;
- materialization trace follow-up;
- future runner invocation that names its source.

The source must identify why multi-resolution expansion is needed.

Do not use this protocol as a broad permission slip. Preserve the source path, source section, route card, or quoted user request that authorizes the run.

---

## Vocabulary

### Parent Map

The Navigation map being expanded.

### Parent Route

The route card inside the parent map whose internal route space may need a child map.

### Expansion Frontier

The full set of parent routes or sub-routes discovered as possible child-map candidates at the current resolution.

The frontier is about route existence.

### Frontier Ledger

The durable control sidecar that records every expansion candidate, its status, and why it was or was not expanded.

The ledger is what prevents budgeted traversal from erasing coverage.

Canonical file:

```text
_frontier.md
```

In v1, `_frontier.md` carries both control state and a readable run summary. Do not create a separate summary file unless real use shows `_frontier.md` has become too dense.

### Coverage Mode

The mode that controls how much of the frontier is expanded in this run.

Canonical values:

```text
exhaustive
budgeted
sampled
```

### Batch Size

The number of already-discovered candidates to materialize in the current run when `coverage_mode: budgeted`.

Canonical field:

```text
batch_size
```

Alternative explicit field:

```text
max_batch_expansions
```

Legacy normalization: if older notes or prompts say `max_expansions`, normalize it to `batch_size` and record that it means current-run child-map materialization count only.

### Expansion Policy

The rule that determines which candidates are eligible for child-map expansion in this run.

Expansion policy controls eligibility, not visibility.

### Scheduling Policy

The rule that orders eligible candidates for the current run.

Scheduling policy controls order, not final route choice.

## Input Contract

Normalize the request into these fields before creating child maps:

```yaml
source_authority: user_request | finding | navigation_map | warmup_brief | branch | outcome_review | materialization_trace | runner | other
source_path: path-or-conversation-anchor
source_anchor: section-route-card-quoted-phrase-or-summary
parent_map_path: path-or-to_be_created
navigation_goal: what route space this expansion should expose
depth: integer >= 1
coverage_mode: exhaustive | budgeted | sampled
batch_size: integer-or-none
expansion_policy: all_eligible | expansion_needed | user_selected | high_priority | blocked_high | coverage_thin | custom
scheduling_policy: user_order | high_priority_first | blocked_high_first | coverage_thin_first | oldest_pending_first | custom
output_root: devdocs/navigation/<run-id>/ or other explicit folder
frontier_path: output_root/_frontier.md
resume_from: none-or-frontier-ledger-path
selection_boundary: no_final_selection
validation_plan:
  - manual review, structural check, or command
trace_path: output_root/run_trace.md
```

Required defaults:

```yaml
coverage_mode: budgeted
selection_boundary: no_final_selection
frontier_path: output_root/_frontier.md
```

If `coverage_mode: budgeted`, `batch_size` is required.

If `coverage_mode: exhaustive`, `batch_size` must be absent or ignored with an explicit note.

If `coverage_mode: sampled`, the run must state that it intentionally sacrifices full coverage.

---

## Output Contract

A multi-resolution Navigation run should produce:

```text
output_root/
  navigation.md               # copied, linked, or created parent map
  _frontier.md                # control ledger, readable run summary, and resume state
  run_trace.md                # source, mode, validation, deviations, outcome
  children/
    <route-id>/
      navigation.md           # child map for expanded route
```

Do not create child folders for pending, blocked, deferred, or out-of-policy candidates. Those candidates remain rows in `_frontier.md`.

Do not rely on child map files alone. A reader must be able to understand the run state from `_frontier.md`.

---

## Frontier Candidate Record

Every discovered expansion candidate must have a record.

Minimum record:

```yaml
candidate_id:
parent_map:
parent_route:
route_type:
priority:
status:
expansion_reason:
eligibility:
eligibility_reason:
scheduling_reason:
child_map_path:
blocked_by:
continuation_note:
```

Allowed statuses:

```text
queued
scheduled
expanded
pending
deferred_by_budget
out_of_policy
blocked
skipped_with_reason
stale
superseded
```

Status meanings:

- `queued`: candidate is eligible and waiting.
- `scheduled`: candidate is selected for the current expansion batch.
- `expanded`: child map was created.
- `pending`: candidate remains runnable later.
- `deferred_by_budget`: candidate was not expanded because the current batch ended.
- `out_of_policy`: candidate exists but is not eligible under this run's expansion policy.
- `blocked`: candidate needs a gate, artifact, or evidence before expansion.
- `skipped_with_reason`: candidate was deliberately not expanded for a named reason.
- `stale`: candidate may no longer reflect current state.
- `superseded`: candidate was replaced by another route or child map.

---

## Procedure

### Step 1 - Verify Source Authority

Confirm the run has an authorized source.

Record:

```text
source_authority
source_path
source_anchor
navigation_goal
```

If source authority is vague, stop before creating child maps.

### Step 2 - Establish Or Read Parent Map

If `parent_map_path` exists, read it.

If the parent map does not exist and the source authorizes creating it, run Navigation first and save the parent map under `output_root/navigation.md`.

Do not continue to child expansion until a parent map exists.

### Step 3 - Enumerate The Full Expansion Frontier

Scan the parent map for all routes that may need child maps.

Record every candidate in `_frontier.md` before applying the current-run batch.

Candidate reasons may include:

```text
dense route region
high-priority route
blocked route with complex gate
coverage-thin route
uncertain route
user-selected route
route with many unlocks
```

Do not hide candidates because they are low priority, blocked, outside the current policy, or not scheduled in this run.

### Step 4 - Apply Expansion Policy

Mark each candidate as eligible, out-of-policy, blocked, or skipped-with-reason.

Expansion policy changes eligibility only. It must not remove candidates from the frontier ledger.

### Step 5 - Select Coverage Mode

Use one of:

```text
exhaustive
budgeted
sampled
```

`exhaustive`: expand all eligible candidates up to `depth`.

`budgeted`: schedule and expand `batch_size` eligible candidates in this run.

`sampled`: expand a representative subset and state that full coverage is not claimed.

### Step 6 - Schedule Current Batch

For `budgeted` mode, order eligible candidates by `scheduling_policy`.

Mark scheduled candidates as `scheduled`.

Mark eligible but unscheduled candidates as `deferred_by_budget` or `pending`.

Scheduling order must include a reason. It must not be described as final selection.

### Step 7 - Create Child Maps

For each scheduled or exhaustive candidate, create a child Navigation map.

Each child map must include a header:

```yaml
parent_map:
parent_route:
source_authority:
child_scope:
resolution_depth:
coverage_mode:
selection_boundary: no_final_selection
```

The child map should remain a Navigation map: it enumerates routes inside the child scope. It does not select the final route.

### Step 8 - Update Frontier Ledger

After each child map is created, update the candidate status:

```text
scheduled -> expanded
```

Record `child_map_path`.

If a child map cannot be created, record:

```text
status: blocked or skipped_with_reason
status_reason: concrete reason
```

### Step 9 - Update Frontier Summary

Update `_frontier.md`.

It must include readable sections for:

- source authority and parent map;
- coverage mode, depth, expansion policy, scheduling policy, and batch size if used;
- expanded candidates and child map paths;
- pending candidates;
- deferred-by-budget candidates;
- blocked candidates;
- out-of-policy candidates;
- skipped candidates with reasons;
- resume instruction;
- explicit no-final-selection note.

Minimum section shape:

```text
## Role
## Source
## Settings
## Run Summary
## Candidate Ledger
## Expanded Children
## Pending / Deferred Candidates
## Blocked / Out Of Policy
## Resume Note
```

### Step 10 - Write Run Trace

Write `run_trace.md`.

Minimum fields:

```yaml
source:
  authority:
  path:
  anchor:
settings:
  depth:
  coverage_mode:
  batch_size:
  expansion_policy:
  scheduling_policy:
outputs:
  navigation_map:
  frontier:
  child_maps:
validation:
  - command_or_manual_check:
    result:
    limitation:
deviations:
  - deviation-or-none
outcome: PASS | PARTIAL | FAIL
follow_up_review_gate:
```

### Step 11 - Handoff Or Resume

If pending candidates remain, `_frontier.md` should give a concrete continuation instruction:

```text
Resume from: output_root/_frontier.md
Recommended next mode: budgeted | exhaustive
Recommended next batch_size: N
```

Do not force immediate continuation. The point is to make continuation possible without reconstructing context.

---

## Validation

Before completing a run, check:

- Does the frontier ledger record every discovered expansion candidate?
- Are unexpanded candidates still visible?
- Are out-of-policy candidates visible with reasons?
- Does `batch_size` apply only to current-run child-map materialization?
- Does `_frontier.md` distinguish scheduled, expanded, pending, blocked, out-of-policy, and skipped candidates?
- Does the run state `selection_boundary: no_final_selection`?
- Can a future session resume from the output without reading every child map?

If an automated structural checker exists, run it. If no checker exists, record manual validation directly.

---

## Failure Modes

### Hidden Coverage Cap

A budget field causes routes after the batch to disappear.

Correction: enumerate the full frontier first and mark unscheduled candidates as pending or deferred-by-budget.

### Hidden Selection

Scheduled or expanded routes are described as chosen final routes.

Correction: replace final-selection language with scheduling language and preserve the no-final-selection boundary.

### Silent Policy Filtering

Expansion policy removes candidates from the artifact.

Correction: record non-eligible candidates as out-of-policy with reasons.

### Child-Map Sprawl

Many child maps are created but `_frontier.md` does not explain the route tree.

Correction: update `_frontier.md` before considering the run complete.

### Stale Frontier

A pending frontier is resumed after project state changed, but no stale check is recorded.

Correction: mark affected candidates as stale or revalidate the parent map before continuing.

### Sampling Confused With Coverage

Sampled mode is presented as if it covered the full route space.

Correction: label sampled mode as coverage-sacrificing and route to budgeted or exhaustive mode when full coverage matters.

### Runner Prematurely Materialized

The protocol is turned into automation before one or two manual or protocol-guided runs prove the contract.

Correction: keep v1 protocol-first; materialize a runner only after useful `_frontier.md` artifacts exist.

---

## Short Version

Before expanding Navigation across levels, answer:

```text
What source authorizes this?
What parent map is being expanded?
What is the full expansion frontier?
Which candidates are eligible?
Which coverage mode is being used?
If budgeted, what is the batch_size?
Why were these candidates scheduled now?
Where are pending candidates recorded?
Where is `_frontier.md`?
How can a future session resume?
```

Then expand only within that contract.
