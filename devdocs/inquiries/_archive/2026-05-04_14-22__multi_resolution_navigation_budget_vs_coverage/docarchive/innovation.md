# Innovation: Multi-Resolution Navigation Budget Vs Coverage

## User Input

```text
Did the prior multi-resolution Navigation runner finding overstate the risk of many expansions, and should `max_expansions` be treated as a resumable batch/frontier control rather than a limit that reduces Navigation coverage?
```

## Seed

The seed is a correction:

```text
Breadth is not bad. Broad route discovery is the purpose of Navigation.
The runner needs controls that preserve breadth while making execution resumable.
```

Valuation signal: this matters because Navigation is intended to reduce the user's burden of mentally carrying project route space. A budget design that loses unrun routes would quietly recreate that burden.

## Mechanism 1: Lens Shifting

### Generic

Frame the runner as a compute limiter.

Result: `max_expansions` limits generated child maps.

Test: fails scrutiny if it hides unexpanded candidates.

### Focused

Frame the runner as a frontier manager.

Result: first enumerate all expansion candidates, then mark some as expanded and some as pending.

Test: survives. It preserves coverage and controls execution.

### Contrarian

Frame the runner as a map publisher, not a run executor.

Result: its main artifact is the frontier/composition, and child maps are optional attachments.

Test: fertile. It points toward a protocol where readability is first-class, not an afterthought.

## Mechanism 2: Combination

### Generic

Combine Navigation route cards with a queue.

Result: every expandable route becomes a queue item with status.

Test: survives. It directly solves unrun-path preservation.

### Focused

Combine `coverage_mode` with `batch_size`.

Result:

```text
coverage_mode: exhaustive | budgeted
batch_size: only applies to budgeted mode
```

Test: survives. It avoids forcing all runs through artificial narrowing.

### Contrarian

Combine child maps with a debt register.

Result: every unexpanded candidate is stored as "coverage debt."

Test: refined. "Debt" may sound negative even when deferral is intentional. Use `pending frontier` instead.

## Mechanism 3: Inversion

### Generic

Invert "limit expansions to avoid too many directions."

Result: "record all directions first; limit only materialization."

Test: survives strongly.

### Focused

Invert "top N means best N."

Result: "top N means next N under scheduling policy."

Test: survives. It keeps top-N operational rather than judgmental.

### Contrarian

Invert "unrun paths are less important."

Result: unrun paths may be the most important because they represent unknown subspace.

Test: survives as a warning. Pending paths need a continuation note and reason, not just a name.

## Mechanism 4: Constraint Manipulation

### Generic

Add the constraint: no candidate may disappear silently.

Result: every candidate needs a status and reason.

Test: survives. This is a strong protocol invariant.

### Focused

Add the constraint: `batch_size` cannot apply until frontier enumeration is complete.

Result: the runner cannot use budget as an excuse for partial discovery.

Test: survives. It preserves Navigation's coverage boundary.

### Contrarian

Remove the budget constraint entirely.

Result: explicit exhaustive mode.

Test: survives with guardrails. It should be allowed, but must write trace and composition.

## Mechanism 5: Absence Recognition

### Generic

Absent artifact: a frontier ledger.

Result: create `frontier.md`.

Test: survives strongly.

### Focused

Absent status: "not expanded yet."

Result: candidate statuses should include `pending` and `deferred_by_budget`.

Test: survives. Without these, unrun paths become ambiguous.

### Contrarian

Absent mode: "I knowingly accept output volume."

Result: add explicit `exhaustive` mode.

Test: survives. It respects the user's desire for full exploration.

## Mechanism 6: Domain Transfer

### Generic

Transfer from job queues.

Result: route expansions are queued jobs with statuses.

Test: survives. Queue semantics fit batch and resume behavior.

### Focused

Transfer from graph traversal.

Result: `depth` is traversal depth; frontier is the set of nodes discovered but not fully expanded.

Test: survives. It clarifies why depth alone does not manage sibling count.

### Contrarian

Transfer from search indexes.

Result: an item can be discovered and indexed without being opened/read deeply.

Test: survives. This supports broad discovery without immediate child-map generation.

## Mechanism 7: Extrapolation

### Generic

If Navigation usage grows, route maps will accumulate across sessions.

Result: pending frontier state becomes more important over time.

Test: survives. Continuation memory is central.

### Focused

If multi-resolution maps are run repeatedly, old unexpanded routes will matter later.

Result: runner should support `continue` or `resume_from`.

Test: survives.

### Contrarian

If exhaustive mode is normalized too early, outputs may become unreadable and future warm-up may avoid them.

Result: exhaustive mode should be explicit, not the default.

Test: survives. This is a guardrail, not an argument against exhaustive mode.

## Candidate Tests

### Candidate A: Hard `max_expansions` Cap

Description: run only N expansions total and ignore the rest.

- Novelty: low.
- Scrutiny survival: fails. It violates Navigation coverage.
- Fertility: low.
- Actionability: simple but harmful.
- Mechanism independence: weak.

Verdict: kill.

### Candidate B: Batch-Size Budget With Persistent Frontier

Description: enumerate all candidates, expand N in this run, preserve the rest as pending.

- Novelty: moderate in this context.
- Scrutiny survival: survives.
- Fertility: high.
- Actionability: high.
- Mechanism independence: strong; generated by lens shift, combination, inversion, absence recognition, and domain transfer.

Verdict: strong survivor.

### Candidate C: Explicit Exhaustive Mode

Description: run all eligible expansions up to depth when the user wants full coverage.

- Novelty: low.
- Scrutiny survival: survives with composition/trace guardrails.
- Fertility: medium.
- Actionability: high.
- Mechanism independence: moderate.

Verdict: survivor.

### Candidate D: Sampled Mode

Description: run representative expansions only.

- Novelty: low.
- Scrutiny survival: fails as a default because it sacrifices coverage.
- Fertility: medium in research contexts.
- Actionability: medium.
- Mechanism independence: weak.

Verdict: refine. Allow only if explicitly requested and labeled coverage-sacrificing.

### Candidate E: AI Top-N As Final Route Selection

Description: AI picks the best N paths and effectively discards the rest.

- Novelty: low.
- Scrutiny survival: fails. It violates no-selection and coverage preservation.
- Fertility: low.
- Actionability: dangerous.
- Mechanism independence: weak.

Verdict: kill.

### Candidate F: AI Top-N As Scheduling Policy

Description: AI picks the next N expansions to run under a declared policy while preserving the remaining frontier.

- Novelty: moderate.
- Scrutiny survival: survives.
- Fertility: high.
- Actionability: high.
- Mechanism independence: strong.

Verdict: survivor.

### Candidate G: Coverage Ledger / Frontier Artifact

Description: write a durable artifact that records every candidate and status.

- Novelty: moderate in Homegrown's context.
- Scrutiny survival: survives strongly.
- Fertility: high.
- Actionability: high.
- Mechanism independence: strong.

Verdict: strongest survivor.

## Assembly Check

The strongest assembly is:

```text
frontier-first multi-resolution Navigation
  + explicit coverage_mode
  + batch_size for budgeted mode
  + scheduling_policy for ordering
  + persistent candidate statuses
  + composition output
  + resume/continue
  + no_final_selection boundary
```

This assembly produces something stronger than any single candidate:

- broad route discovery remains intact;
- large runs can be split across batches;
- exhaustive traversal is still available;
- unrun paths remain visible;
- AI can help order work without choosing the final route;
- future sessions can continue from the map instead of reconstructing it.

## Proposed Protocol Semantics

### Inputs

```text
source:
depth:
coverage_mode: exhaustive | budgeted | sampled
batch_size: <number, only for budgeted mode>
expansion_policy: all_eligible | expansion_needed | user_selected | high_priority | blocked_high | coverage_thin
scheduling_policy: user_order | high_priority_first | blocked_high_first | coverage_thin_first | oldest_pending_first
output_root:
resume_from:
selection_boundary: no_final_selection
```

### Outputs

```text
frontier.md
composition.md
run_trace.md
children/<route-id>/navigation.md
pending.md or Pending section inside frontier.md
```

### Candidate Statuses

```text
queued
expanded
pending
deferred_by_budget
out_of_policy
blocked
skipped_with_reason
```

### Critical Rule

```text
Every discovered expansion candidate must be recorded.
Budget changes execution timing, not existence.
```

## Telemetry

Generators applied: 4 / 4.

Framers applied: 3 / 3.

Convergence: YES. Five mechanisms converge on the same core innovation: a persistent frontier ledger plus batch/exhaustive modes.

Survivors tested: 7 / 7.

Failure modes observed: none.

Overall: PROCEED.
