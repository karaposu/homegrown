# Trace 3: Reflection and Navigation Artifact Lifecycle

## Entry Point

The lifecycle starts when a user invokes `reflect` or `navigation` against an existing inquiry folder or current project context.

## Execution Path

`reflect` expects an inquiry folder or a set of files. It reads `_branch.md`, discipline outputs, and visible human interventions, then produces `reflection.md` in the same folder.

`navigation` accepts an inquiry folder, raw text, or a file path. For inquiry folders it reads discipline outputs, telemetry sections, frontier questions, `_branch.md`, and optional `reflection.md`. It then generates a typed navigation map and saves it as `navigation.md` in the same folder or under `devdocs/navigation/` for raw input.

## Resource Management

Both skills consume existing artifacts rather than creating a new inquiry lifecycle. Their outputs sit beside the inquiry they analyze, so they become boundary artifacts between completed work and possible next work.

## Error Path

The skill files do not define detailed filesystem recovery. If expected inputs are absent, the assistant must infer thin context or fail naturally while reading files.

## Performance Characteristics

Cost scales with the number and size of inquiry artifacts read. There is no indexing layer or cache.

## Observable Effects

The user gets `reflection.md` or `navigation.md` plus conversation output. These files are visible records of process learning or next-direction enumeration.

## Why This Design

Reflection and navigation are not part of the core pipeline. They operate at the boundary after a cycle, so they are modeled as separate skills that read completed artifacts.

## What feels incomplete

### The issue explanation
The lifecycle does not version repeated reflection or navigation runs.

### An ELI15
Running it again can overwrite the old after-action note unless a person saves a copy.

### Impact of it to the codebase and overall logic
Historical process observations or earlier navigation maps can be lost or confused with newer ones.

### Robust Fixes / Best Practices
Use numbered output files or include a timestamped run id in boundary artifacts.

### Architectural Fix if it exists
Add an inquiry artifact registry that records every generated boundary file. This is useful if these outputs become first-class project history; otherwise it may be overkill.

### Speculative defence
The current design likely favors the latest reflection or navigation result over maintaining a full audit trail.

### Is this
This is a traceability gap.

## What feels vulnerable

### The issue explanation
Navigation can run from raw text or project context with thinner evidence, but the output format remains authoritative-looking.

### An ELI15
The map can look polished even when it was drawn from a quick glance.

### Impact of it to the codebase and overall logic
Users may over-trust navigation maps generated without full inquiry evidence.

### Robust Fixes / Best Practices
Make confidence and input completeness explicit at the top of every output.

### Architectural Fix if it exists
Require an evidence manifest for every generated boundary artifact. This is reasonable for serious inquiry tracking but heavy for casual use.

### Speculative defence
The skill includes telemetry and confidence language, so the author likely expected the assistant to surface thinness in prose.

### Is this
This is an evidence-quality risk.

## What feels like bad design

### The issue explanation
Reflection and navigation are separate skills but share the same boundary area after a cycle without a shared lifecycle controller.

### An ELI15
Two different reviewers can write notes after the meeting, but there is no meeting secretary deciding which note comes first.

### Impact of it to the codebase and overall logic
The order of reflection and navigation can vary, even though navigation is designed to benefit from reflection if it exists.

### Robust Fixes / Best Practices
Document a post-cycle boundary workflow or add a combined boundary runner.

### Architectural Fix if it exists
Create a `post-cycle` protocol that runs reflection, then navigation, then records selection. This is probably useful if boundary work becomes routine, but overkill for occasional manual use.

### Speculative defence
Keeping them separate lets users run only the boundary operation they need.

### Is this
This is a coordination weakness.
