# Trace 2: Inquiry Lifecycle in MVL and MVL+

## Entry Point

The lifecycle starts when a user invokes `MVL` or `MVL+` with a new question or description.

## Execution Path

The runner restates the question, creates `devdocs/inquiries/<slugified_name>/`, writes `_branch.md`, writes `_state.md`, then immediately starts its fixed pipeline. `MVL` runs sense-making, innovation, and critique. `MVL+` runs exploration, sense-making, decomposition, innovation, and critique.

Each discipline writes its canonical output file into the inquiry folder. The runner checks progress, updates `_state.md`, and moves to the next discipline. When all required files exist, the runner reads critique, decides whether the question is answered, and either invokes `conclude.md` or starts another iteration with a narrower focus.

## Resource Management

The inquiry folder is the lifecycle container. `_branch.md` and `_state.md` remain at the root. Discipline files remain there during active work and move to `docarchive/` on conclusion. `finding.md` is the durable final artifact.

## Error Path

The runners specify fallback behavior for discipline loading: use the skill tool first, then fall back to reading command files, then halt if neither works. They also call `tools/structural_check.sh`, but that tool is not present in the current working tree.

## Performance Characteristics

Runtime cost is dominated by the assistant executing long Markdown procedures, not by code. Filesystem operations are small and local.

## Observable Effects

Users see a new inquiry folder, progress state changes, discipline outputs, and eventually `finding.md` plus `docarchive/`.

## Why This Design

The lifecycle makes long-running thinking work resumable. Instead of relying on conversation memory, the state and artifacts live in files.

## What feels incomplete

### The issue explanation
The runner describes creation and updates but does not provide executable code that guarantees those writes happen correctly.

### An ELI15
The recipe says exactly what to write in the notebook, but the cook still writes it by hand.

### Impact of it to the codebase and overall logic
Behavior depends on the assistant following instructions accurately. State drift is possible if a run is interrupted or manually edited.

### Robust Fixes / Best Practices
Add a small helper that creates inquiry folders and updates `_state.md` deterministically.

### Architectural Fix if it exists
Introduce a real inquiry state machine with validation around transitions. This may be overkill for a skill pack, but useful if many agents will share the same inquiry folders.

### Speculative defence
The project intentionally uses human-readable Markdown as the execution surface, so hand-editable state is part of the design.

### Is this
This is an implementation gap caused by instruction-native architecture.

## What feels vulnerable

### The issue explanation
The lifecycle relies on file existence to infer completion.

### An ELI15
If a page exists in the folder, the system assumes the homework was done, even if the page is blank or wrong.

### Impact of it to the codebase and overall logic
Partial, stale, or malformed discipline outputs can incorrectly advance the pipeline.

### Robust Fixes / Best Practices
Validate required sections, timestamps, and output verdicts before marking a step complete.

### Architectural Fix if it exists
Use structured metadata per artifact and make state transitions depend on metadata validation. This is not overkill if the loop is expected to run unattended.

### Speculative defence
The loop currently assumes a human is nearby and can notice bad artifacts.

### Is this
This is a reliability risk.

## What feels like bad design

### The issue explanation
Classic and extended runners duplicate large sections of lifecycle logic.

### An ELI15
Two instruction manuals have many of the same pages copied into both; fixing one page means remembering to fix the other too.

### Impact of it to the codebase and overall logic
Changes to resume, checkpointing, or conclusion behavior can drift between `MVL` and `MVL+`.

### Robust Fixes / Best Practices
Centralize shared runner behavior in protocols and keep runner files focused on pipeline shape.

### Architectural Fix if it exists
Create a declarative pipeline manifest consumed by one runner protocol. This is a good architectural direction, but may be heavier than the current two-runner system needs.

### Speculative defence
Duplication likely kept the two runner files self-contained and easier to install as standalone skills.

### Is this
This is transitional duplication, not fatal design.
