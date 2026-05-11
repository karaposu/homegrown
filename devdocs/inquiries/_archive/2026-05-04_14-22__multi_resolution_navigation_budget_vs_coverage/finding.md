---
status: active
refines: devdocs/inquiries/2026-05-04_07-27__multi_resolution_navigation_runner_depth_param/finding.md
corrects: devdocs/inquiries/2026-05-04_07-27__multi_resolution_navigation_runner_depth_param/finding.md
refined_by:
  - devdocs/inquiries/2026-05-04_14-43__navigation_frontier_ledger_sidecar_shape/finding.md
  - devdocs/inquiries/2026-05-04_16-17__route_expansion_fields_necessity_for_auto_navigation/finding.md
---
# Finding: Multi-Resolution Navigation Budget Vs Coverage

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-04_07-27__multi_resolution_navigation_runner_depth_param/finding.md`

**Revision trigger:** The user challenged the prior claim that breadth is the problem in multi-resolution Navigation. The user correctly pointed out that uncovering many directions is the purpose of Navigation, and that a budget should not erase unrun paths.

**What's preserved:** A depth-only runner is still incomplete. Depth controls vertical traversal, but it does not by itself control child-map materialization, output readability, or continuation.

**What's changed:** The risk should not be described as "breadth." Breadth is desirable at the route-discovery layer. The risk is untracked, unresumable expansion execution.

**What's new:** `max_expansions` should not mean a permanent cap on route coverage. It should mean current-run batch size, and the better term is `batch_size` or `max_batch_expansions`.

**Migration:** Future protocol language should replace "max_expansions controls horizontal budget" with "batch size controls how many already-discovered expansion candidates are materialized in this run." Unrun candidates must remain visible and runnable. Later sidecar refinement makes `_frontier.md` the v1 control ledger and readable run summary; do not require a separate `composition.md`.

## Question

Did the prior multi-resolution Navigation runner finding overstate the risk of many expansions, and should `max_expansions` be treated as a resumable batch/frontier control rather than a limit that reduces Navigation coverage?

The goal is to clarify whether many uncovered directions are actually the desired outcome, redefine `max_expansions` and related parameters so they do not erase unrun paths, and specify how the runner should preserve complete coverage while still controlling compute, output size, and continuation.

## Finding Summary

- The user is right: many discovered directions are not a problem for Navigation. They are the point of Navigation.

- The earlier phrase "the problem is breadth" was imprecise. The actual problem is unbounded child-map execution without a durable `_frontier.md` ledger, readable run summary, and resume rule.

- A future multi-resolution Navigation runner should split discovery from execution. Discovery enumerates the full expansion frontier. Execution materializes a batch or all candidates depending on mode.

- `max_expansions` is dangerous if it means "only these routes count." It survives only if it means "expand this many queued candidates in this run."

- The clearer name is `batch_size` or `max_batch_expansions`, because those names make the current-run meaning explicit.

- AI can pick "top N" paths only as a scheduling policy for the next expansion batch. That is not final route selection.

- Unrun paths must remain in a visible pending frontier. They should be runnable later through `resume_from`, `continue`, or an equivalent continuation operation.

- Explicit exhaustive mode should exist. If the user wants full traversal up to a depth and accepts the output cost, the system should support that.

- Sampling can exist only as an explicit coverage-sacrificing mode. It should never be the hidden default.

## Finding

### 1. Breadth Is The Purpose, Not The Failure

Navigation is the discipline that makes possible next directions explicit. A multi-resolution Navigation runner exists because one flat Navigation map cannot expose every sub-route at every resolution.

So the user's challenge is correct. A design that treats many discovered routes as inherently bad would undermine Navigation.

The earlier finding was trying to protect against a real risk, but it named the risk poorly. The risk is not that the system discovers many directions. The risk is that it immediately creates child maps for many directions without `_frontier.md`, readable run state, or continuation state.

The corrected statement is:

```text
Breadth is desirable at the discovery layer.
Control is needed at the execution layer.
```

### 2. Discovery And Execution Must Be Separate

The key design split is:

```text
coverage frontier = all candidates Navigation discovered
execution batch = candidates expanded during this run
selection = later commitment to a route
```

These are different operations.

Coverage frontier is about what exists in the route space. It should be broad and explicit.

Execution batch is about what gets materialized now. It can be bounded for compute, time, and readability.

Selection is about what route the project should pursue. That is not Navigation's job.

If these layers collapse, `max_expansions` becomes hidden selection. The first N routes get child maps and the rest effectively disappear. That is exactly the risk the user noticed.

### 3. `max_expansions` Should Become Batch Size

`max_expansions` is ambiguous.

If it means a permanent total cap, it should be killed. It reduces coverage and makes unexpanded routes second-class or invisible.

If it means current-run batch size, it survives. The runner can enumerate all candidates, expand N of them now, and preserve the rest as pending.

The better field name is:

```text
batch_size
```

or:

```text
max_batch_expansions
```

Those names make the operational meaning harder to misread.

### 4. The Runner Needs A Frontier Ledger

A budgeted runner cannot be safe without a durable frontier ledger.

The ledger should record every discovered expansion candidate, not only the ones expanded in the current run.

Minimum candidate fields:

```text
parent_map
parent_route
candidate_title
expansion_reason
eligibility
status
status_reason
child_map_path
continuation_note
```

Minimum statuses:

```text
queued
expanded
pending
deferred_by_budget
out_of_policy
blocked
skipped_with_reason
```

The important rule is simple:

```text
Every discovered expansion candidate must be recorded.
Budget changes execution timing, not existence.
```

### 5. Top N Is Scheduling, Not Choosing

The user can accept AI picking the top N paths to follow if the design allows unrun paths to be run later. That is a valid interpretation, but the language needs precision.

The AI may choose the next N expansion candidates under a declared scheduling policy.

Examples:

```text
high_priority_first
blocked_high_first
coverage_thin_first
oldest_pending_first
user_order
```

This is not final route selection. It only determines what gets expanded in the current batch.

The `_frontier.md` run summary should avoid words like "chosen" when it means scheduled. Use "scheduled for this batch" or "expanded in this run."

### 6. Exhaustive Mode Should Be Available

Budgeted mode should not be the only mode.

Sometimes the right move is:

```text
run all eligible expansions up to depth 2
```

That is legitimate when the user wants maximum route coverage and accepts the cost.

The protocol should therefore include:

```text
coverage_mode: exhaustive | budgeted | sampled
```

`exhaustive` means all eligible candidates are expanded up to the declared depth.

`budgeted` means all candidates are recorded, but only a batch is expanded now.

`sampled` means the run intentionally sacrifices full coverage. This should be explicit and rare.

### 7. The Correct Control Surface

The corrected minimum control surface is:

```text
source
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

`coverage_mode` says whether traversal is exhaustive, budgeted, or sampled.

`batch_size` controls how many already-discovered candidates are materialized in this run.

`expansion_policy` controls which candidates are eligible for expansion under this run, but non-eligible candidates should be recorded as out-of-policy, not hidden.

`scheduling_policy` orders the next batch.

`output_root` controls where files go.

`resume_from` allows later runs to continue pending candidates.

`selection_boundary: no_final_selection` keeps Navigation from becoming a decision-maker.

Later refinement: route-tree readability should be carried by `_frontier.md` plus child-map headers and `run_trace.md` in v1. A separate `composition.md` artifact is not required unless real use proves `_frontier.md` is too dense.

## Next Actions

### MUST

- **What:** Correct future multi-resolution Navigation protocol wording so breadth is not described as the problem.
  **Who:** Future `homegrown/protocols/multi_resolution_navigation.md` work.
  **Gate:** Before creating the protocol or runner.
  **Why:** Prevents the runner from weakening Navigation's coverage purpose.

- **What:** Use `batch_size` or `max_batch_expansions` instead of ambiguous `max_expansions`.
  **Who:** Future protocol and runner materialization.
  **Gate:** Before any command syntax or file contract is written.
  **Why:** Makes clear that the field controls current-run execution, not route existence.

- **What:** Require a frontier ledger before budgeted child-map expansion.
  **Who:** Future multi-resolution Navigation protocol.
  **Gate:** Before budgeted mode is allowed.
  **Why:** Preserves unrun paths as pending and resumable.

- **What:** Make exhaustive mode explicit.
  **Who:** Future multi-resolution Navigation protocol.
  **Gate:** Before default mode behavior is defined.
  **Why:** Supports the user's valid desire for full coverage when output cost is acceptable.

- **What:** Require `_frontier.md` to distinguish expanded, pending, blocked, out-of-policy, and skipped candidates.
  **Who:** Future runner/protocol.
  **Gate:** Before a run writes more than one child map.
  **Why:** Keeps the result resumable and readable without opening every child file.

### COULD

- **What:** Trial a budgeted run with `batch_size: 2` and verify that pending candidates are easy to continue.
  **Who:** User plus Navigation discipline.
  **Gate:** After the multi-resolution Navigation protocol exists.
  **Why:** Tests whether the queue semantics reduce manual burden.

- **What:** Trial an exhaustive run on a small parent map.
  **Who:** User plus Navigation discipline.
  **Gate:** After the same protocol exists.
  **Why:** Checks whether full traversal is readable when `_frontier.md` is present.

### DEFERRED

- **What:** Implement a full installed `/multi-navigation` runner.
  **Gate:** Revive after one or two protocol-guided runs prove that `_frontier.md` and `run_trace.md` are useful.
  **Why (if revived):** Automation becomes justified after the contract survives real use.

- **What:** Add parallel child-map expansion.
  **Gate:** Revive after sequential budgeted and exhaustive modes produce stable output paths and `_frontier.md` state.
  **Why (if revived):** Parallelism can reduce runtime once the artifact contract is stable.

- **What:** Add sampled mode.
  **Gate:** Revive only when the user explicitly wants representative exploration rather than full coverage.
  **Why (if revived):** Sampling can reduce cost, but it must be labeled as coverage-sacrificing.

## Reasoning

The hard `max_expansions` cap was killed. It is simple, but it violates the critical requirement that Navigation preserve route-space coverage.

The depth-only runner was not revived. Depth is useful, but it only controls vertical traversal. It does not address the number of sibling routes at each level, and it does not provide composition or continuation.

AI top-N as final selection was killed. It narrows the route space and violates Navigation's no-selection boundary.

AI top-N as scheduling survived. It is acceptable for the AI to choose which queued candidates to expand in the next batch if the scheduling policy is explicit and the unrun candidates remain visible.

Explicit exhaustive mode survived. The user is correct that sometimes the goal is to uncover many directions. Exhaustive mode lets the system do that deliberately.

Sampling was refined. It can be useful in a quick reconnaissance context, but it must be explicit because it intentionally gives up full coverage.

The frontier ledger survived strongest. It is the mechanism that lets a budgeted runner preserve comprehensive route discovery while controlling child-map materialization.

The final assembly survived:

```text
frontier-first multi-resolution Navigation
  + coverage_mode
  + batch_size
  + scheduling_policy
  + persistent statuses
  + _frontier.md readable summary
  + resume
  + no_final_selection
```

This assembly reconciles the contradiction from the prior finding. The system can uncover many directions and still avoid unreadable, unresumable output.

## Open Questions

### Monitoring

After the first protocol-guided budgeted run, check whether the user can run the pending candidates later without reconstructing context manually.

After the first exhaustive run, check whether `_frontier.md` lets the user understand the route tree without opening every child map.

### Blocked

Exact command syntax is blocked until `homegrown/protocols/multi_resolution_navigation.md` exists.

Exact file layout was later refined by `devdocs/inquiries/2026-05-04_14-43__navigation_frontier_ledger_sidecar_shape/finding.md`: v1 uses one `_frontier.md` sidecar rather than separate `frontier.md`, `pending.md`, and `composition.md` artifacts.

### Refinement Triggers

Reopen the `batch_size` name if future runs show that users still interpret it as final selection or route importance.

Reopen the frontier ledger design if pending routes become stale or difficult to resume after two real multi-resolution Navigation runs.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

u said 

This command is unsafe:

/multi-navigation --depth 2 <source>
The problem is breadth. If the parent map has 12 expandable routes, depth: 2 can still create too many child maps. If each child has more expandable routes, the artifact count grows quickly.

The minimum safe control surface is:

depth
max_expansions
expansion_policy
output_root
composition_output
no_selection
depth controls vertical traversal.

max_expansions controls horizontal budget.

expansion_policy controls which routes are eligible for child maps.

output_root controls where files go.

composition_output makes the result readable.

no_selection preserves Navigation's boundary: the runner maps route space but does not choose the final route.

lets reconsider it , i dont get why it is a problem that depth will uncover many directions?? it is okay and this is what we want... if you limit it with these other params then we are limiting the navigation no?

i can accept max_expansions, which would mean AI would pick top N paths and follow them. 
but how it is designed should allow running unrun ones too ... 
actually others parms are also okay...
```

</details>
