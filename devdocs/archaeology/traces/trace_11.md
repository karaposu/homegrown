# Trace 11: Navigation Type Assignment Routing

## Entry Point

The trace starts when the `navigation` skill is invoked with an inquiry folder, raw text, or a file path.

## Execution Path

The skill loads `references/navigation.md`, reads available context, then assigns signals to a taxonomy of next-direction types. Inquiry folders provide richer inputs: critique verdicts, telemetry, frontier questions, `_branch.md`, and optional `reflection.md`. The output is grouped into content, process, and context directions, each with confidence and guidelines.

## Resource Management

The generated navigation map is saved as `navigation.md` beside file or folder input, or under `devdocs/navigation/` for raw input.

## Error Path

If input context is thin, the skill still produces a thinner map. There is no hard failure rule for missing critique output unless the assistant cannot read the input at all.

## Performance Characteristics

Cost scales with the amount of context read and the number of navigation items generated.

## Observable Effects

The user sees a navigation map with included and excluded direction types, confidence markers, and telemetry about the navigation run.

## Why This Design

Navigation is intentionally an enumeration step, not a decision step. It surfaces all plausible next moves without choosing one global path.

## What feels incomplete

### The issue explanation
The skill description mentions a 15-type taxonomy while the reference describes 16 types.

### An ELI15
The cover says there are 15 menu items, but the menu inside lists 16.

### Impact of it to the codebase and overall logic
Users and assistants may disagree on expected type coverage and telemetry counts.

### Robust Fixes / Best Practices
Update the wrapper and reference to the same taxonomy count and include a generated type list.

### Architectural Fix if it exists
Store the taxonomy in one canonical manifest consumed by the wrapper and reference text. This is probably overkill unless taxonomy changes often.

### Speculative defence
The 16th type appears to have been added later, and the wrapper text was not updated.

### Is this
This is documentation drift inside executable instructions.

## What feels vulnerable

### The issue explanation
Human-judgment types are allowed when evidence supports them, but evidence thresholds are prose-based.

### An ELI15
Some map labels need judgment, and the skill does not give a ruler for how much proof is enough.

### Impact of it to the codebase and overall logic
Different runs can include or exclude strategic directions inconsistently.

### Robust Fixes / Best Practices
Define minimum evidence rules for human-judgment types.

### Architectural Fix if it exists
Add a scoring rubric with evidence fields per navigation item. This is useful for consistency, but may make maps too heavy.

### Speculative defence
Navigation is meant to expose possibilities, so some judgment flexibility is valuable.

### Is this
This is a repeatability risk.

## What feels like bad design

### The issue explanation
The output path rule says save in the same folder as `navigation.md`, which can overwrite an existing map.

### An ELI15
Every new map may be written on the same sheet of paper.

### Impact of it to the codebase and overall logic
Repeated navigation runs can lose earlier branch maps.

### Robust Fixes / Best Practices
Use numbered or timestamped navigation files, or preserve the previous map before overwriting.

### Architectural Fix if it exists
Make boundary artifacts append-only with an index. This is helpful for auditability but heavier than the current skill system.

### Speculative defence
The latest navigation map may be intended as the current view of next directions.

### Is this
This is an artifact lifecycle issue.
