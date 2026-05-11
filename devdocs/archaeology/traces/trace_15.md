# Trace 15: File-Backed State and Progress Tracking

## Entry Point

The mechanism starts when a loop runner creates `_state.md` for a new inquiry.

## Execution Path

`_state.md` stores pipeline type, progress checkboxes, iteration number, status, next discipline, relationships, and history. Runners read it to resume. Protocols read it to detect classic or extended pipelines. `conclude.md` updates it to complete. `resume.md` updates it after routing decisions.

## Resource Management

The state file stays in the inquiry root for the entire inquiry lifecycle. It is edited in place and acts as the main coordination artifact across sessions.

## Error Path

Missing or malformed `_state.md` breaks shared protocols. The fallback is manual repair or halt.

## Performance Characteristics

File-backed state is cheap to read and write. It does not require services or dependencies.

## Observable Effects

Users can inspect `_state.md` directly to see current progress and history.

## Why This Design

Markdown state makes the loop portable across assistant sessions and understandable to humans.

## What feels incomplete

### The issue explanation
State is free-form Markdown rather than structured data.

### An ELI15
The checklist is readable, but a machine has to guess exactly where each answer is written.

### Impact of it to the codebase and overall logic
Small formatting changes can confuse resume or conclusion logic.

### Robust Fixes / Best Practices
Put machine-critical state in YAML or JSON while keeping human notes in Markdown.

### Architectural Fix if it exists
Use a two-part file: frontmatter for state, Markdown body for history and notes. This is a good fit and not overkill.

### Speculative defence
Plain Markdown keeps state easy to edit during early protocol design.

### Is this
This is a structured-state gap.

## What feels vulnerable

### The issue explanation
Concurrent edits by multiple assistants or humans are not handled.

### An ELI15
Two people can write on the same checklist at once and overwrite each other.

### Impact of it to the codebase and overall logic
Parallel runs can corrupt progress or history.

### Robust Fixes / Best Practices
Use file locks, append-only logs, or branch-specific state files for parallel work.

### Architectural Fix if it exists
Adopt event-sourced inquiry state: append events, derive current state. This is overkill for one-user workflows but ideal for multi-agent execution.

### Speculative defence
The current project appears optimized for one assistant and one human at a time.

### Is this
This is a concurrency risk.

## What feels like bad design

### The issue explanation
The same file mixes control state and historical narrative.

### An ELI15
The checklist and diary are on the same page.

### Impact of it to the codebase and overall logic
Machine routing and human history can interfere with each other's formatting.

### Robust Fixes / Best Practices
Separate current control state from append-only history.

### Architectural Fix if it exists
Use `_state.yml` for control state and `_history.md` for narrative. This is simple enough that it is probably not overkill.

### Speculative defence
One Markdown file is easier for humans to open and understand.

### Is this
This is a design simplicity tradeoff.
