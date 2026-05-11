# Exploration: Navigation Frontier Ledger Sidecar Shape

## Mode And Entry Point

Mode: mixed artifact and possibility exploration.

Entry point: signal-first.

The signal is the user's analogy: Homegrown inquiries already use `_branch.md` and `_state.md` as control files. A multi-resolution Navigation run may need a similar ledger/control sidecar so parent maps can track child expansions without relying on a prose map alone.

## Cycle 1: Scan Existing Artifacts And The New Protocol

### Scan

Scanned the current multi-resolution Navigation protocol and the relevant prior finding.

Found current protocol output shape:

```text
output_root/
  parent_navigation.md
  frontier.md
  composition.md
  run_trace.md
  children/<route-id>/navigation.md
```

Found the protocol requirement that every discovered expansion candidate must have a record and that budget controls current-run child-map materialization, not route existence.

### Signals

- Signal 1: `frontier.md` is visible and useful, but it is not explicitly framed as a control sidecar.
- Signal 2: `_state.md` and `_branch.md` work because they separate control metadata from conclusion artifacts.
- Signal 3: A parent Navigation map may need to update status after child maps are created.
- Signal 4: Creating child folders for every discovered candidate would preserve structure but may create too much filesystem overhead.

### Resolution Decision

Zoom in on artifact roles rather than file names.

The core issue is not whether the name is `_navigate.md`. The core issue is whether the ledger is:

- human-facing output;
- machine/control state;
- both in one file;
- parent-child folder index.

### Probe

The Navigation run has at least three different artifacts:

```text
navigation.md      = human route map
composition.md     = human parent-child summary
frontier ledger    = control state for expansion/resume
```

Combining all three makes the artifact too dense. Splitting all state into many files may be too much for v1.

### Frontier State

Advancing. The sidecar idea is plausible, but the exact shape needs more exploration.

### Confidence Map Update

- Confirmed: Navigation needs a durable frontier ledger before budgeted expansion.
- Confirmed: the ledger is closer to `_state.md` than to `navigation.md`.
- Scanned: single visible ledger, hidden sidecar, child folders.
- Unknown: best filename.

## Cycle 2: Explore Possible Ledger Shapes

### Scan

Generated candidate shapes:

1. Keep only `frontier.md`.
2. Rename ledger to `_navigate.md`.
3. Use `_frontier.md` as the control sidecar.
4. Use `_navigation_state.md` as the control sidecar.
5. Use both `_navigation_state.md` and `_frontier.md`.
6. Create child folders for every candidate immediately.
7. Create child folders only when a candidate is expanded.

### Signals

- `frontier.md` is readable but does not visually signal "control state."
- `_navigate.md` is ambiguous because it sounds like a command or verb.
- `_frontier.md` names the exact control object: the expansion frontier.
- `_navigation_state.md` is clear but broader than needed.
- Two sidecars may be too much for v1.
- Immediate child folders for every candidate preserve structure but can create large empty trees.
- Child folders only for expanded candidates keep filesystem growth proportional to real work.

### Resolution Decision

Zoom in on the lightest shape that preserves resume.

### Probe

The minimal load-bearing file can be:

```text
_frontier.md
```

It can contain both:

- run settings;
- candidate ledger.

That avoids splitting state across `_navigation_state.md` and `_frontier.md` before repeated use proves the need.

### Frontier State

Advancing. The strongest v1 shape is a single underscore sidecar plus visible human outputs.

### Confidence Map Update

- Confirmed: `_frontier.md` is a better control-file name than `_navigate.md`.
- Confirmed: child folders should be materialized only for expanded candidates in v1.
- Inferred: parent ledger should be updated after child expansion.

## Cycle 3: Jump Scan - What If The Ledger Is Visible Only?

### Scan

Checked the opposite design: keep only visible `frontier.md` and avoid underscore control files.

### Signals

- Visible-only is simpler.
- It may be easier for a human to read.
- But the role becomes ambiguous: is this a report or the state source of truth?
- Future runner behavior needs a stable source-of-truth file.

### Resolution Decision

Zoom out.

The correct split is visible output plus control sidecar:

```text
navigation.md
composition.md
_frontier.md
```

### Probe

Visible `composition.md` can summarize:

- expanded child maps;
- pending routes;
- blocked routes;
- next resume instruction.

Hidden/control `_frontier.md` can store:

- settings;
- candidate records;
- statuses;
- child paths;
- resume metadata.

This mirrors `_branch.md` / `_state.md` without copying their exact names.

### Frontier State

Stable at current resolution.

### Confidence Map Update

- Confirmed: visible-only ledger is too ambiguous for runner state.
- Confirmed: underscore sidecar is appropriate.
- Confirmed: v1 should avoid empty child folders for every candidate.

## Structural Map

### Territory Overview

The artifact territory has four regions:

1. Human-readable route map.
2. Control/resume state.
3. Child map materialization.
4. Parent-child composition.

### Inventory

#### Human-Readable Route Map

Candidate file:

```text
navigation.md
```

Role: route enumeration. It should remain readable and should not carry every runner-control detail.

#### Control/Resume State

Best candidate file:

```text
_frontier.md
```

Role: authoritative expansion ledger for the run.

Rejected or weaker names:

```text
_navigate.md          # ambiguous; sounds like command/verb
frontier.md           # readable, but not clearly control state
_navigation_state.md  # clear but broader than v1 needs
```

#### Child Map Materialization

Best v1 behavior:

```text
children/<candidate-id>/navigation.md
```

Only create a child folder when the candidate is actually expanded.

Do not create folders for every pending candidate in v1.

#### Parent-Child Composition

Candidate file:

```text
composition.md
```

Role: human-readable summary of expanded, pending, blocked, out-of-policy, and skipped candidates.

### Signal Log

- Probed: `_state.md` / `_branch.md` analogy.
- Probed: `_navigate.md` as possible name.
- Probed: visible-only ledger.
- Probed: child folders for all candidates versus expanded-only.
- Deferred: exact `_frontier.md` table schema.

### Confidence Map

- Confirmed: a control sidecar is useful.
- Confirmed: it should be separate from visible `navigation.md`.
- Confirmed: `_frontier.md` is better than `_navigate.md`.
- Confirmed: parent ledger should update when children are created.
- Confirmed: child folders should be created only for expanded candidates in v1.
- Inferred: child folders can later carry their own `_frontier.md` if the child map is expanded further.
- Unknown: whether repeated use will require splitting `_frontier.md` into `_navigation_state.md` plus `_frontier.md`.

### Frontier State

Stable enough for sensemaking.

Remaining gaps are bounded: exact schema and protocol patch can be decided after the loop concludes.

## Exploration Conclusion

The user's sidecar intuition is strong. Multi-resolution Navigation needs a control file analogous to `_state.md`, because a visible map alone is not enough for budgeted traversal and resume.

The best v1 shape is not `_navigate.md`. Use `_frontier.md`.

The parent should not create child folders for every discovered direction. It should record every candidate in `_frontier.md`, then create child folders only for candidates that are actually expanded.

The efficient v1 structure is:

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

If a child map is later expanded at another resolution, that child folder can get its own `_frontier.md` and `composition.md`.
