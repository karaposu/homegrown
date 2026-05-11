# Trace 6: Conclude Finding Compilation

## Entry Point

The trace starts when `MVL` or `MVL+` decides that the critique output answers the original question and loads `homegrown/protocols/conclude.md`.

## Execution Path

`conclude.md` reads `_state.md` to detect the pipeline. For classic inquiries, it expects `_branch.md`, `sensemaking.md`, `innovation.md`, and `critique.md`. For extended inquiries, it also expects `exploration.md` and `decomposition.md`.

It then compiles a self-contained `finding.md`, archives discipline outputs to `docarchive/`, updates `_state.md` to complete, and prints a concise completion summary.

## Resource Management

The protocol keeps `_branch.md`, `_state.md`, and `finding.md` in the inquiry root. Discipline outputs are moved into `docarchive/`, preserving evidence while keeping the root focused on the final result.

## Error Path

The protocol halts if `_state.md` is missing or malformed, or if expected discipline outputs are missing.

## Performance Characteristics

The expensive part is reading and synthesizing several Markdown artifacts. Filesystem operations are small but include moves into `docarchive/`.

## Observable Effects

The user sees `finding.md`, archived source artifacts, `_state.md` with status complete, and a conversation pointer to the result.

## Why This Design

Conclusion is centralized so both classic and extended loops produce the same final artifact shape.

## What feels incomplete

### The issue explanation
The protocol describes moves and state edits but does not provide executable commands for all cases.

### An ELI15
It says which pages to move into the archive, but a person still has to do the filing correctly.

### Impact of it to the codebase and overall logic
A conclusion run can leave files half-archived or `_state.md` partially updated if interrupted.

### Robust Fixes / Best Practices
Make conclusion idempotent: rerunning it should detect existing `finding.md`, existing archive files, and already-complete state.

### Architectural Fix if it exists
Implement `conclude` as a transaction-like helper with validation before and after file moves. This is worthwhile if conclusion becomes frequent; otherwise it may be overkill.

### Speculative defence
The protocol is meant for an assistant with human supervision, not an unattended batch job.

### Is this
This is an operational reliability gap.

## What feels vulnerable

### The issue explanation
The final finding is produced from prose synthesis, so it can accidentally omit evidence from source artifacts.

### An ELI15
When summarizing a folder of notes, important notes can be left out even if the summary sounds complete.

### Impact of it to the codebase and overall logic
The final artifact can become less faithful than the intermediate artifacts it replaces in the root view.

### Robust Fixes / Best Practices
Require an evidence checklist mapping each major conclusion to source files.

### Architectural Fix if it exists
Use structured section extraction from discipline outputs before synthesis. This may be overkill unless findings are used as durable project decisions.

### Speculative defence
The protocol includes a strong quality test and detailed template, so the author is already trying to control this risk through writing rules.

### Is this
This is a synthesis fidelity risk.

## What feels like bad design

### The issue explanation
`conclude.md` knows about classic, extended, and future generic pipelines.

### An ELI15
The finisher has special rules for today's two race types and a fallback for races that may exist later.

### Impact of it to the codebase and overall logic
Future pipeline changes may require edits to conclusion logic if the generic fallback is not enough.

### Robust Fixes / Best Practices
Make `_state.md` list exact output files and archive behavior so conclusion does not hard-code pipeline names.

### Architectural Fix if it exists
Use pipeline manifests with declared outputs, required inputs, and archive policy. This is a clean design and not overkill if more loop runners are planned.

### Speculative defence
Hard-coding the two current pipelines keeps the protocol understandable.

### Is this
This is a scalability limitation.
