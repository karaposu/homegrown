# Trace 13: Discipline Load and Structural-Check Failure Path

## Entry Point

The trace starts inside `MVL` or `MVL+` when the runner is about to execute the next discipline.

## Execution Path

The runner first tries to load the discipline through the assistant's skill mechanism with the inquiry `_branch.md` as input. If that fails, it falls back to reading the discipline command file directly. If direct read also fails, the runner halts and tells the user which discipline command to run manually.

After the discipline writes its output, the runner tries to run `bash tools/structural_check.sh <output> <discipline>`. If failures appear, the runner should fix missing sections and rerun the check before proceeding.

## Resource Management

The loaded discipline output is expected to live in the inquiry folder. Structural check output is not described as persisted; it is used for the next checkpoint.

## Error Path

Skill load failure falls back to file read. Double load failure halts. Structural check failure should trigger output repair. In the current repository, `tools/structural_check.sh` is absent, so the check cannot run as written.

## Performance Characteristics

Load and check work should be cheap relative to discipline execution. Missing check tooling turns a cheap validation step into an immediate operational failure.

## Observable Effects

Users see either normal checkpoint messages, a manual-run halt, or a failed structural check command.

## Why This Design

The fallback protects the loop from assistant skill-loading issues, and structural checks are meant to keep output formats stable.

## What feels incomplete

### The issue explanation
The structural check script referenced by the runners is missing from the working tree.

### An ELI15
The instructions say "use the ruler," but the ruler is not in the toolbox.

### Impact of it to the codebase and overall logic
The pipeline cannot perform the validation step it claims to require.

### Robust Fixes / Best Practices
Add `tools/structural_check.sh` or remove the command and replace it with an available validation protocol.

### Architectural Fix if it exists
Define structural requirements in machine-readable schemas and validate every output against them. This is a strong fix, but heavier than a shell checker.

### Speculative defence
The checker may have existed in a previous layout or local environment and was not migrated with `homegrown/`.

### Is this
This is a broken integration point.

## What feels vulnerable

### The issue explanation
The fallback reads a command file "then execute" but command file paths are not defined in the current `homegrown/` layout for all installed environments.

### An ELI15
If the shortcut fails, the backup directions may point to an old street name.

### Impact of it to the codebase and overall logic
Cold-session recovery may fail even when the skill source exists in a different installed path.

### Robust Fixes / Best Practices
Use installed skill paths consistently and document fallback lookup order.

### Architectural Fix if it exists
Create a skill registry that maps discipline names to installed source paths. This is useful for multi-environment support, but may be overkill for a single assistant.

### Speculative defence
The skills are usually loaded by the assistant platform, so direct file fallback may be rare.

### Is this
This is an environment-portability risk.

## What feels like bad design

### The issue explanation
The runner both orchestrates pipeline order and repairs failed discipline outputs.

### An ELI15
The project manager also edits each worker's report when a checklist fails.

### Impact of it to the codebase and overall logic
Repair rules can blur responsibility between discipline specs and runner behavior.

### Robust Fixes / Best Practices
Let each discipline own its own structural repair protocol, while the runner only blocks or routes.

### Architectural Fix if it exists
Use discipline-specific validators and repair prompts invoked by a generic runner. This is appropriate if structural checks remain central.

### Speculative defence
Centralizing repair in the runner is simpler and ensures progress without sending the user between skills.

### Is this
This is a responsibility-boundary issue.
