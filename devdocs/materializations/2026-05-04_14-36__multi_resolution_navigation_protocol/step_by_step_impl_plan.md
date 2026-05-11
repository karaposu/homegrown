# Step-By-Step Implementation Plan: Multi-Resolution Navigation Protocol

## Goal

Create `homegrown/protocols/multi_resolution_navigation.md` as a protocol-first artifact with corrected breadth semantics.

## Plan

| Step | Action | Expected Output | Files |
|---|---|---|---|
| 1 | Define protocol contract | Protocol purpose, non-goals, source authority, and vocabulary | `homegrown/protocols/multi_resolution_navigation.md` |
| 2 | Encode corrected invariant | Breadth is desired; untracked execution is the risk | `homegrown/protocols/multi_resolution_navigation.md` |
| 3 | Define input/output records | Input contract, frontier ledger, composition output, trace | `homegrown/protocols/multi_resolution_navigation.md` |
| 4 | Define procedure | Source authority -> frontier -> mode -> batch/exhaustive -> child maps -> composition -> resume | `homegrown/protocols/multi_resolution_navigation.md` |
| 5 | Define failure modes | Hidden selection, hard caps, silent filtering, stale frontier, unreadable composition | `homegrown/protocols/multi_resolution_navigation.md` |
| 6 | Validate manually | Check wording, canonical fields, no `.codex` changes | protocol + git/status/search |
| 7 | Write trace | Record files changed, validation, outcome, follow-up gate | materialization trace |

## Per-Step Details

### Step 1 - Protocol Contract

The file should follow Homegrown protocol style:

- loading note;
- title;
- plain-language purpose;
- non-goals;
- when to use;
- input contract;
- process steps;
- output artifacts;
- failure modes.

### Step 2 - Corrected Invariant

The protocol must say:

```text
Breadth is not the problem.
Untracked expansion execution is the problem.
```

It must not say:

```text
too many directions are bad
```

### Step 3 - Input/Output Records

Use canonical `batch_size` or `max_batch_expansions`.

Use `max_expansions` only in a migration note if needed.

### Step 4 - Procedure

The protocol should be executable by a human before a runner exists.

It should be strict enough that a future runner can implement it later.

### Step 5 - Failure Modes

Failures should include the exact risk the user noticed: budget controls that erase coverage.

### Step 6 - Validation

Run:

```text
rg -n "problem is breadth|too many directions|max_expansions" homegrown/protocols/multi_resolution_navigation.md
git status --short -- homegrown/protocols/multi_resolution_navigation.md .codex
```

Manual review should confirm `max_expansions` is not canonical.

### Step 7 - Trace

Write `materialization_trace.md` after implementation and validation.

## Repair Or Rollback Path

If validation finds misleading breadth wording, patch the protocol before completing.

If the protocol grows into runner implementation or edits Navigation discipline files, stop and reclassify the materialization.
