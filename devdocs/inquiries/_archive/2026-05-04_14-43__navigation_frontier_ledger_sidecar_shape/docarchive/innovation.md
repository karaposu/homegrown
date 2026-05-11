# Innovation: Navigation Frontier Ledger Sidecar Shape

## User Input

```text
Should multi-resolution Navigation use a ledger/control sidecar similar to `_state.md` and `_branch.md`—possibly `_navigate.md`—and should parent Navigation runs create child direction folders and update the parent ledger, or is there a lighter better shape?
```

## Seed

The seed is the user's analogy:

```text
Maybe Navigation needs a control file like `_state.md`.
```

Valuation signal: this matters because the frontier ledger is what makes budgeted Navigation safe. If the ledger is too weak, unrun paths disappear. If the ledger is too heavy, Navigation becomes hard to use.

## Mechanism 1: Lens Shifting

### Generic: Ledger As Documentation

File shape:

```text
frontier.md
```

Test: partially survives. It is easy to read but weak as a control-state signal.

### Focused: Ledger As Control Sidecar

File shape:

```text
_frontier.md
```

Test: survives. It matches the actual role: source of truth for the expansion frontier.

### Contrarian: Ledger As Folder Tree

File shape:

```text
children/<candidate-id>/
```

for every candidate.

Test: fails as v1 default. It creates structure before child maps exist.

## Mechanism 2: Combination

### Generic: Combine `_state.md` With Navigation

File shape:

```text
_navigation_state.md
```

Test: survives as a future split, but is too broad for v1.

### Focused: Combine Frontier Queue With Sidecar Pattern

File shape:

```text
_frontier.md
```

Test: survives strongly. It names both the controlled object and the file's hidden/control role.

### Contrarian: Combine Everything Into One Map

File shape:

```text
navigation.md
```

with embedded ledger.

Test: fails. It overloads the human-visible route map.

## Mechanism 3: Inversion

### Generic: Instead Of Folders For Routes, Rows For Routes

Output:

```text
pending candidates are rows in `_frontier.md`
```

Test: survives. It keeps pending candidates cheap.

### Focused: Instead Of Parent Map Updating Itself, Parent Ledger Updates

Output:

```text
parent `_frontier.md` records child paths and statuses
```

Test: survives. It keeps `navigation.md` readable.

### Contrarian: No Sidecar, Only Git/Filesystem

Output:

```text
infer state from child folders
```

Test: fails. It cannot represent pending, blocked, or out-of-policy candidates without folders or missing-state ambiguity.

## Mechanism 4: Constraint Manipulation

### Generic: Add Constraint "No Empty Child Folders"

Output:

```text
child folders only after expansion
```

Test: survives strongly.

### Focused: Add Constraint "One Control Sidecar In V1"

Output:

```text
_frontier.md carries settings + candidate ledger + resume
```

Test: survives. It avoids premature multi-file state.

### Contrarian: Add Constraint "Human Must Edit Ledger By Hand"

Output:

```text
ledger optimized for manual table editing
```

Test: refine. It should remain human-readable, but future-runner compatibility matters too.

## Mechanism 5: Absence Recognition

### Generic: Missing Artifact Role

Missing role:

```text
control state for Navigation expansion
```

Output: underscore sidecar.

Test: survives.

### Focused: Missing Status Carrier

Missing status:

```text
pending without child folder
```

Output: `_frontier.md` status table.

Test: survives.

### Contrarian: Missing Map-Of-Maps

Missing artifact:

```text
navigation_index.md
```

Test: deferred. It may become useful after many run folders exist, but it is not needed for the first ledger shape.

## Mechanism 6: Domain Transfer

### Generic: Transfer From Job Queues

File shape:

```text
_frontier.md = queue table
```

with statuses such as queued, scheduled, expanded, pending, blocked.

Test: survives.

### Focused: Transfer From Build Artifacts

File shape:

```text
source file + generated child artifacts + manifest
```

Here `_frontier.md` is the manifest.

Test: survives. Manifest framing clarifies parent-child paths.

### Contrarian: Transfer From Database Normalization

File shape:

```text
_run.md
_candidates.md
_children.md
_resume.md
```

Test: deferred. It is cleaner for automation but too heavy for v1.

## Mechanism 7: Extrapolation

### Generic: If There Are Many Runs

Need:

```text
consistent run folders
```

Test: survives.

### Focused: If There Are Deep Nested Runs

Need:

```text
each expanded child can later become a run root with its own `_frontier.md`
```

Test: survives.

### Contrarian: If Manual Use Remains Dominant

Need:

```text
composition.md may matter more than `_frontier.md`
```

Test: refines the answer. Keep composition visible, but do not make it the source of truth.

## Candidate Tests

### Candidate A: `frontier.md` Visible Ledger Only

- Novelty: low.
- Scrutiny survival: partial.
- Fertility: medium.
- Actionability: high.
- Mechanism independence: moderate.

Verdict: REFINE.

Reason: keep the frontier concept, but use `_frontier.md` for the control sidecar.

### Candidate B: `_navigate.md`

- Novelty: low.
- Scrutiny survival: weak.
- Fertility: low.
- Actionability: medium.
- Mechanism independence: weak.

Verdict: KILL.

Reason: the name is verb-like and command-like. It does not say what state the file owns.

### Candidate C: `_frontier.md`

- Novelty: moderate in this system.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: high.
- Mechanism independence: strong.

Verdict: SURVIVE.

Reason: it names the controlled object and signals sidecar/control status.

### Candidate D: `_navigation_state.md`

- Novelty: low.
- Scrutiny survival: moderate.
- Fertility: medium.
- Actionability: medium.
- Mechanism independence: moderate.

Verdict: REFINE / DEFER.

Reason: useful if `_frontier.md` later becomes too broad, but too heavy as v1.

### Candidate E: Child Folders For Every Candidate

- Novelty: low.
- Scrutiny survival: weak.
- Fertility: medium.
- Actionability: low for v1.
- Mechanism independence: weak.

Verdict: KILL as default.

Reason: it materializes possibility as filesystem structure too early.

### Candidate F: Lazy Child Folders Only When Expanded

- Novelty: low.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: high.
- Mechanism independence: strong.

Verdict: SURVIVE.

Reason: it keeps pending candidates cheap and child folders meaningful.

### Candidate G: Single Sidecar In V1, Split Later If Needed

- Novelty: low.
- Scrutiny survival: strong.
- Fertility: high.
- Actionability: high.
- Mechanism independence: strong.

Verdict: SURVIVE.

Reason: it balances control with low overhead.

## Assembly Check

The strongest assembly is:

```text
devdocs/navigation/<run-id>/
  navigation.md
  _frontier.md
  composition.md
  run_trace.md
  children/
    <candidate-id>/
      navigation.md
```

With rules:

```text
_frontier.md is the source of truth.
navigation.md remains human-readable.
composition.md summarizes for humans.
children/<candidate-id>/ exists only when expanded.
pending candidates remain rows in `_frontier.md`.
```

This assembly satisfies the user's desire for a `_state.md`-like control file while avoiding the overhead of pre-creating child folders or splitting control state into many files.

## Telemetry

Generators applied: 4 / 4.

Framers applied: 3 / 3.

Convergence: YES. Six mechanisms converge on `_frontier.md` plus lazy child folders.

Survivors tested: 7 / 7.

Failure modes observed: none.

Overall: PROCEED.
