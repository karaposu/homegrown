# Innovation: Sync Idle Navigator Recent Developments

## Seed

An idle Navigator session can be correctly warmed at time A, but become stale by time B after another session creates findings, protocol edits, or materialization traces.

## Mechanism Outputs

### Lens Shifting

Generic: Treat stale context as a cache invalidation problem.

Focused: A Navigator session has a context cache. Refresh should invalidate or update only the parts affected by recent project movement.

Contrarian: Sometimes stale context is useful as a comparison baseline; refresh should say what changed instead of pretending the old context never existed.

### Combination

Generic: Combine warm-up outputs with git/file delta scanning.

Focused: Use the last current-state brief or Navigation map as a sync anchor, then read recent `finding.md`, changed Homegrown files, Navigation maps, materialization traces, and outcome reviews.

Contrarian: Combine human-pasted "what changed" notes with file scanning, because not all important session changes are visible in files.

### Inversion

Generic: Instead of making every session warm itself from scratch, make one session produce a portable sync brief.

Focused: The active session writes a short Navigator sync brief that the idle session reads before Navigation.

Contrarian: The idle Navigator should not be asked "what next?" until it can state what new sources it consumed since its last warm-up.

### Constraint Manipulation

Generic: Add the constraint "refresh must be cheaper than full warm-up."

Focused: The sync operation reads deltas first and escalates to full warm-up only when the anchor is missing, the boundary changed, or conflicts cannot be resolved cheaply.

Contrarian: Add the constraint "refresh must be pasteable into another AI session." This forces the output to be concise and source-anchored.

### Absence Recognition

Generic: The missing artifact is a freshness ledger or sync brief.

Focused: Homegrown has `_state.md`, `_branch.md`, `_frontier.md`, Navigation maps, and warm-up outputs, but not a Navigation session sync artifact.

Contrarian: The absence is not only a file. It is also a trigger rule: when an idle Navigator must refresh before answering.

### Domain Transfer

Generic: Borrow from incremental build systems: track source inputs, compute deltas, rebuild only affected state.

Focused: A Navigator sync can use a "source horizon": what was known at last warm-up, what changed since, and what stale assumptions must be invalidated.

Contrarian: Borrow from incident handoffs: give the next session a short status handoff with read set, changes, open risks, and next decision point.

### Extrapolation

Generic: As Homegrown grows, more sessions will become stale more often.

Focused: Without sync, Navigation maps will increasingly diverge across sessions and the user will become the manual coherence layer again.

Contrarian: If every refresh becomes full archaeology, Navigation loses the speed benefit it is supposed to provide.

## Assembly Candidate

Create a `navigator-refresh.md` support routine under `homegrown/navigation/warmup/`.

The routine should:

- take a freshness anchor;
- read recent changed sources;
- classify deltas by authority and Navigation impact;
- produce a concise sync brief;
- hand the brief to Navigation;
- escalate to full v1/v2/v3 warm-up only when the anchor or context boundary is invalid.

## Innovation Telemetry

Generators applied: 4/4.

Framers applied: 3/3.

Convergence: YES. Multiple mechanisms converge on a delta refresh/sync brief.

Survivors tested: 1/1 assembly candidate tested.

Failure modes observed: none significant. The main risk is overbuilding, controlled by making this a manual support routine first.

Overall: PROCEED.

