# Trace 9: Loop Pipeline Routing

## Entry Point

Routing starts when `MVL` or `MVL+` decides whether its input is a new question or an existing inquiry folder.

## Execution Path

For new input, the runner creates inquiry control files and sets the first discipline in `_state.md`. For resume input, it reads `_state.md` and `_branch.md`, checks existing output files, and starts at the first incomplete discipline.

`MVL` routes through `sense-making -> innovate -> td-critique`. `MVL+` routes through `explore -> sense-making -> decompose -> innovate -> td-critique`. After all outputs exist, the runner evaluates completion and either calls `conclude.md` or resets progress for another iteration.

## Resource Management

Routing state is persisted in `_state.md`; discipline outputs are files in the inquiry folder.

## Error Path

The runners define a halt if the skill spec cannot be loaded through the skill tool or direct read fallback. `MVL+` also halts if asked to resume an inquiry whose state is classic or lacks extended flow type.

## Performance Characteristics

The routing itself is lightweight. Total time is the sum of discipline execution time.

## Observable Effects

The user sees checkpoint messages, output files appear in pipeline order, and `_state.md` changes after each step.

## Why This Design

Fixed routing avoids classification complexity. Every question receives the same full loop for that runner.

## What feels incomplete

### The issue explanation
The runner does not use the shared `resume.md` protocol directly, even though that protocol exists.

### An ELI15
There is a newer map for how to resume, but the drivers still carry their own older directions.

### Impact of it to the codebase and overall logic
Resume behavior can diverge between inline runner instructions and the shared protocol.

### Robust Fixes / Best Practices
Make `MVL` and `MVL+` delegate resume handling to `homegrown/protocols/resume.md`.

### Architectural Fix if it exists
Create one generic loop runner protocol parameterized by pipeline definition. This is probably the right long-term design but may be overkill for only two pipelines.

### Speculative defence
Inline resume instructions keep each installed runner self-contained and easier to understand.

### Is this
This is migration debt.

## What feels vulnerable

### The issue explanation
The first-incomplete-file rule assumes output file presence means valid completion.

### An ELI15
If a checkpoint file exists, the runner assumes the checkpoint was passed.

### Impact of it to the codebase and overall logic
Corrupt or partial outputs can move the pipeline forward incorrectly.

### Robust Fixes / Best Practices
Require structured output validation and self-assessment verdicts for every discipline output.

### Architectural Fix if it exists
Use a state transition function that validates artifacts before updating progress. This is a strong fix if reliability matters.

### Speculative defence
The system is designed for interactive human supervision, so lightweight checks may have been acceptable.

### Is this
This is a state-integrity risk.

## What feels like bad design

### The issue explanation
Completion judgment is embedded in the runner as prose instructions rather than delegated to a separate evaluator.

### An ELI15
The same person driving the process also decides if the destination has been reached.

### Impact of it to the codebase and overall logic
Different assistant runs may decide "answered" inconsistently.

### Robust Fixes / Best Practices
Define an explicit answer-readiness rubric and require evidence from critique and goal match.

### Architectural Fix if it exists
Make completion evaluation a named protocol with required inputs and output verdict. This is useful and not overkill if conclusions are important project decisions.

### Speculative defence
The runner already has access to `_branch.md` and critique, so embedding the decision kept the loop compact.

### Is this
This is a consistency risk.
