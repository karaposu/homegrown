# Trace 16: Reference Pre-Read Mechanism

## Entry Point

The mechanism starts at Step 0 in most individual `SKILL.md` files.

## Execution Path

The wrapper instructs the assistant to read `references/<discipline>.md` in full before proceeding. The wrapper then delegates the actual process to sections inside that reference file and tells the assistant to consult failure-mode sections during execution.

## Resource Management

Reference files live beside the skill under `references/`. Installers copy those files into the target skill folder.

## Error Path

If the reference file is absent or not loaded, the wrapper says not to proceed, but enforcement depends on the assistant following the instruction.

## Performance Characteristics

Loading references increases context size and reading time. It reduces duplicated content inside wrappers.

## Observable Effects

Outputs should reflect detailed framework concepts from the reference file, not just the short wrapper instructions.

## Why This Design

The design keeps skill entry points concise while preserving rich methodology in separate reference files.

## What feels incomplete

### The issue explanation
There is no objective proof in outputs that the reference was read.

### An ELI15
The worker promises to read the manual, but no one asks for a receipt.

### Impact of it to the codebase and overall logic
Skipped references can produce outputs that miss the intended mechanism.

### Robust Fixes / Best Practices
Require each output to include a short "reference process applied" checklist.

### Architectural Fix if it exists
Build a skill runner that loads references automatically before passing execution to the assistant. This is not overkill if the system is used beyond one environment.

### Speculative defence
Assistant skill systems often handle file loading through instructions rather than code, so this may be the most portable approach.

### Is this
This is a compliance verification gap.

## What feels vulnerable

### The issue explanation
Reference files are long and can compete with task context.

### An ELI15
The manual is detailed enough that it can crowd out the actual problem on the desk.

### Impact of it to the codebase and overall logic
Large references may reduce available context for complex inputs.

### Robust Fixes / Best Practices
Split references into mandatory core and optional deep sections, or summarize stable parts into checklists.

### Architectural Fix if it exists
Use progressive reference loading with section-level retrieval. This is useful for large-scale use, but may be overkill for current file sizes.

### Speculative defence
The project values full-depth discipline execution, so loading the whole reference is intentional.

### Is this
This is a context-budget risk.

## What feels like bad design

### The issue explanation
Important execution requirements are split across wrapper and reference files.

### An ELI15
Part of the recipe is on the recipe card, and part is in the cookbook chapter.

### Impact of it to the codebase and overall logic
Maintainers must update both files carefully when a discipline changes.

### Robust Fixes / Best Practices
Keep wrappers purely about invocation and put all process requirements in references, or generate wrappers from references.

### Architectural Fix if it exists
Adopt a single-source skill schema with generated adapter files. This is clean but likely overkill until wrappers drift more.

### Speculative defence
The split is easy for humans to browse and mirrors how Codex/Claude skills are typically packaged.

### Is this
This is a maintainability tradeoff.
