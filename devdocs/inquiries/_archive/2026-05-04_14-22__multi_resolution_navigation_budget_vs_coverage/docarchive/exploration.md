# Exploration: Multi-Resolution Navigation Budget Vs Coverage

## Mode And Entry Point

Mode: possibility exploration with artifact support.

Entry point: signal-first.

The signal is the user's objection to the prior finding: uncovering many directions is not inherently a problem; broad discovery is the purpose of Navigation. The exploration therefore probes whether the previous `depth + max_expansions` framing accidentally converted an execution budget into a coverage limit.

## Cycle 1: Probe The Prior Finding

### Scan

Scanned the prior multi-resolution Navigation runner finding and the immediate user challenge.

The prior finding said:

```text
depth controls vertical traversal
max_expansions controls horizontal budget
expansion_policy controls which routes are eligible for child maps
```

It also described a depth-only runner as unsafe because breadth can grow quickly.

### Signals

- Signal 1: "The problem is breadth" is imprecise.
- Signal 2: `max_expansions` can be read as a hard cap on coverage.
- Signal 3: Navigation's own discipline contract requires full enumeration, including blocked, low-priority, and deferred routes.
- Signal 4: The user accepts top-N expansion only if unrun directions remain runnable later.

### Resolution Decision

Zoom in on the meaning of "budget."

The problem is not that many directions exist. The problem is uncontrolled execution if every direction is expanded immediately without a frontier ledger, output composition, or resume rule.

### Probe

There are two different operations that were conflated:

```text
coverage enumeration = discover and record the route space
expansion execution = generate child maps for some or all expandable routes
```

The former should be broad. The latter may need batching.

### Frontier State

Advancing. The map now distinguishes discovery volume from execution volume.

### Confidence Update

- Confirmed: the prior finding's concern about uncontrolled file creation is valid.
- Confirmed: the prior wording can be misleading if it implies fewer directions should be discovered.
- Scanned: alternative budget semantics.
- Unknown: exact command syntax for future implementation.

## Cycle 2: Explore Budget Semantics

### Scan

Scanned possible meanings of `max_expansions`:

1. Hard total cap.
2. Batch size.
3. Scheduling limit for one run.
4. Sampling limit.
5. User-selected set only.
6. Exhaustive mode disabled unless explicitly requested.

### Signals

- Hard total cap conflicts with Navigation coverage.
- Batch size preserves coverage if a pending queue exists.
- Scheduling top N is acceptable only if it is not final route selection.
- Sampling is dangerous unless explicitly requested because it reduces coverage by design.
- Exhaustive mode is valid when the user wants all expansions and accepts the output cost.

### Resolution Decision

Zoom in on the runner state needed to preserve unrun paths.

### Probe

A safe runner needs a complete expansion frontier before it runs child maps:

```text
frontier.md
  all expandable route candidates
  each candidate's parent route
  eligibility reason
  scheduling score or ordering reason
  status: queued | expanded | pending | deferred_by_budget | out_of_policy | blocked | skipped
```

Then a batch can run without erasing what did not run:

```text
run batch
  expand first N queued candidates
  write child maps
  update frontier statuses
  write composition
  preserve pending candidates
```

### Frontier State

Advancing. The missing concept is not just `max_expansions`; it is a persistent frontier/queue artifact.

### Confidence Update

- Confirmed: `max_expansions` as a permanent cap should be killed.
- Confirmed: `max_expansions` as batch size can survive.
- Confirmed: unrun directions must be recorded.
- Inferred: the term should probably be renamed to `batch_size` or `max_batch_expansions`.

## Cycle 3: Jump Scan In Opposite Direction

### Scan

Checked the opposite design: no budget, only `depth`.

### Signals

- This maximizes coverage and matches the user's desire to uncover directions.
- It can be useful for small maps or when the user explicitly wants exhaustive traversal.
- It still has practical risks: unreadable outputs, large artifact count, expensive execution, and hard continuation if composition is weak.

### Resolution Decision

Zoom out. The question is not "budget or no budget." The correct split is mode selection:

```text
coverage_mode: exhaustive | budgeted | sampled
```

### Probe

Mode meanings:

- `exhaustive`: run all eligible expansions up to depth; no hidden cap.
- `budgeted`: enumerate all eligible expansions, run a batch, preserve the rest as pending.
- `sampled`: run only a representative subset; valid only when the user explicitly asks for sampling because it intentionally sacrifices coverage.

### Frontier State

Stable. The major design regions are known: exhaustive traversal, budgeted traversal, and sampled traversal.

### Confidence Update

- Confirmed: exhaustive traversal should exist.
- Confirmed: budgeted traversal should preserve pending paths.
- Confirmed absent: a hidden hard cap is not acceptable.

## Structural Map

### Territory Overview

The territory has five major regions:

1. Coverage discovery.
2. Expansion execution.
3. Scheduling.
4. Persistence and resume.
5. Composition and readability.

### Inventory

#### Coverage Discovery

Navigation should identify all meaningful expandable routes at the current resolution. This is where breadth is desirable.

#### Expansion Execution

Child maps are generated only after a route is selected for expansion by mode and schedule. This is where execution may be bounded.

#### Scheduling

The runner may order queued expansions by policy:

```text
user_selected
high_priority_first
blocked_high_first
coverage_thin_first
oldest_pending_first
all_eligible
```

Scheduling is not final selection. It only chooses what gets expanded in the current run.

#### Persistence And Resume

Unrun expansions need durable statuses:

```text
queued
expanded
pending
deferred_by_budget
out_of_policy
blocked
skipped_with_reason
```

#### Composition

The runner needs a readable composition artifact showing:

```text
what was covered
what was expanded
what remains pending
what was blocked
what was out of policy
what should be resumed next
```

### Signal Log

- Probed: prior "breadth risk" wording.
- Probed: hard cap versus batch budget.
- Probed: exhaustive traversal as opposite design.
- Deferred: exact CLI syntax.
- Deferred: whether Navigation route cards need explicit `Expansion` fields before the runner protocol.

### Confidence Map

- Confirmed: breadth itself is not the problem.
- Confirmed: depth-only traversal without queue/composition remains unsafe for large maps.
- Confirmed: a permanent `max_expansions` cap would weaken Navigation.
- Confirmed: a batch-size budget preserves Navigation if the frontier is fully recorded.
- Scanned: scheduling policies.
- Scanned: output artifacts.
- Inferred: rename `max_expansions` to reduce confusion.
- Unknown: exact implementation surface.

### Frontier State

Frontier stable at protocol-design resolution.

Remaining gaps are bounded: exact command names and file layouts can be decided in a materialization protocol later.

## Exploration Conclusion

The previous finding needs refinement, not reversal.

The unsafe part is not "many directions." Many directions are exactly what multi-resolution Navigation is trying to expose.

The unsafe part is expanding many directions without:

- recording the complete expansion frontier;
- distinguishing batch scheduling from final route selection;
- preserving unrun candidates;
- writing a readable composition artifact;
- supporting resume.

So `max_expansions` should not be a coverage limit. It should become a batch/tranche execution control, preferably renamed to `batch_size` or `max_batch_expansions`.
