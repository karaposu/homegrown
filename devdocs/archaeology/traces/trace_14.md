# Trace 14: Resume Malformed-State and Non-Proceed Recovery

## Entry Point

The trace starts when `resume.md` inspects an inquiry folder and encounters malformed state, inconsistent files, missing verdicts, `FLAG`, or `RE-RUN`.

## Execution Path

If `_state.md` is missing or malformed, resume halts and asks the user to specify or repair the pipeline. If later pipeline outputs exist while earlier ones are missing, resume halts with state inconsistency. If a discipline output has no standardized verdict, resume treats it as `PROCEED` with a note. If a verdict is `FLAG`, it presents options to rerun or override. If a verdict is `RE-RUN`, it recommends rerun and waits for confirmation.

## Resource Management

Recovery decisions update `_state.md` history and next discipline only after routing is clear. The protocol does not delete or rewrite discipline outputs during recovery.

## Error Path

Hard structural errors halt. Soft compatibility issues proceed with notes. Quality problems gate on user decision.

## Performance Characteristics

Recovery logic is text scanning and state editing. It is low-cost but can block on user input.

## Observable Effects

Users see a status message describing the failure or quality concern, followed by a next action or wait state.

## Why This Design

The protocol separates mechanical corruption from quality signals. Corruption halts; quality signals route through human judgment.

## What feels incomplete

### The issue explanation
There is no defined repair procedure for malformed `_state.md` beyond halting.

### An ELI15
If the checklist is damaged, the system tells you it is damaged but does not help rewrite it.

### Impact of it to the codebase and overall logic
Manual state repair becomes a recurring burden if state files drift.

### Robust Fixes / Best Practices
Provide a state reconstruction procedure from existing artifact files and `_branch.md`.

### Architectural Fix if it exists
Use a structured state schema and a repair command that regenerates `_state.md` from artifacts. This is useful and not overkill for a file-backed workflow.

### Speculative defence
Manual halt is safer than guessing wrong state transitions.

### Is this
This is a recoverability gap.

## What feels vulnerable

### The issue explanation
Missing verdicts default to `PROCEED`.

### An ELI15
If a report has no grade, the system gives it a passing grade so old reports still work.

### Impact of it to the codebase and overall logic
Thin or noncompliant outputs can move forward silently.

### Robust Fixes / Best Practices
Default missing verdicts to `FLAG` for new runs and only allow `PROCEED` compatibility for artifacts marked as legacy.

### Architectural Fix if it exists
Store artifact version metadata and apply version-specific routing rules. This is a clean fix if old artifacts matter.

### Speculative defence
The compatibility default avoids breaking existing inquiry archives.

### Is this
This is a backward-compatibility tradeoff.

## What feels like bad design

### The issue explanation
Recovery for `FLAG` and `RE-RUN` depends on interactive user choice.

### An ELI15
The system stops at a warning light and waits for a person to wave it through.

### Impact of it to the codebase and overall logic
Automated or long-running operation stops at the first quality concern.

### Robust Fixes / Best Practices
Define default recovery policies for unattended contexts.

### Architectural Fix if it exists
Introduce an autonomy policy layer configured per inquiry. This is overkill for strictly human-driven use but necessary for autonomous operation.

### Speculative defence
The current project values human oversight and treats failures as learning data.

### Is this
This is an intentional but limiting design choice.
