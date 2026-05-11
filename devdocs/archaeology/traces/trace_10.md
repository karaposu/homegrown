# Trace 10: Telemetry-Aware Resume Routing

## Entry Point

The trace starts when `homegrown/protocols/resume.md` is loaded for an inquiry folder.

## Execution Path

The protocol inspects `_state.md` to detect the pipeline. It then walks expected discipline outputs in order. For existing outputs, it scans for the last standardized verdict line: `PROCEED`, `FLAG`, or `RE-RUN`. If an output is missing, that discipline becomes next to run. If all completed outputs proceed, routing advances. If a discipline flags or requests rerun, routing stops and asks the user to decide.

## Resource Management

`_state.md` is updated with checked progress, next discipline, and history entries. Existing discipline files are read but not moved.

## Error Path

Malformed or missing `_state.md` halts. Missing verdict lines are treated as backward-compatible `PROCEED` with a note. Ambiguous verdicts use the last occurrence.

## Performance Characteristics

The protocol reads text files in pipeline order and performs line-pattern matching. It is cheap compared with running a discipline.

## Observable Effects

The user sees a concise routing summary and, depending on verdicts, either a next discipline, pipeline-complete signal, or a wait for user decision.

## Why This Design

The protocol separates routing from quality judgment. Disciplines judge themselves; resume only reads their declared verdicts.

## What feels incomplete

### The issue explanation
Not all discipline specs visibly emit standardized `Overall` verdict lines.

### An ELI15
The router looks for traffic lights, but some roads may not have traffic lights installed yet.

### Impact of it to the codebase and overall logic
Backward-compatible `PROCEED` can hide thin or older outputs.

### Robust Fixes / Best Practices
Standardize telemetry sections across all discipline references and validate during structural checks.

### Architectural Fix if it exists
Use machine-readable verdict metadata at the end of every artifact. This is not overkill if automated resume is a core goal.

### Speculative defence
Backward compatibility lets older inquiry folders keep working during migration.

### Is this
This is a migration completeness issue.

## What feels vulnerable

### The issue explanation
Verdict detection is text-pattern based and can match examples or quoted text.

### An ELI15
The router searches for words on the page; it may not know whether the words are instructions or the actual answer.

### Impact of it to the codebase and overall logic
Resume can route incorrectly if a discipline output contains multiple example verdicts.

### Robust Fixes / Best Practices
Put verdicts in a fixed metadata block, such as YAML frontmatter or a final fenced block.

### Architectural Fix if it exists
Adopt a structured artifact schema for all discipline outputs. This is a strong architectural fix but requires migration of existing artifacts.

### Speculative defence
The protocol mitigates ambiguity by using the last occurrence, which is pragmatic for prose artifacts.

### Is this
This is a parsing fragility.

## What feels like bad design

### The issue explanation
Routing can require user decisions for `FLAG` and `RE-RUN`, but the protocol does not define an autonomous fallback.

### An ELI15
If the route has a warning sign, the driver must stop and wait for a human.

### Impact of it to the codebase and overall logic
The loop cannot fully automate through quality problems.

### Robust Fixes / Best Practices
Define autonomy levels and deterministic default behavior for unattended runs.

### Architectural Fix if it exists
Add policy-driven routing: level 0 waits, level 1 suggests, level 2 auto-reruns under thresholds. This may be overkill unless autonomous operation is a near-term goal.

### Speculative defence
The protocol explicitly says current scope keeps the user in the loop, which is safer for early design.

### Is this
This is an intentional autonomy boundary.
