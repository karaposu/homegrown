# Trace 5: Individual Discipline Input-to-Artifact Transformation

## Entry Point

The trace starts when a user invokes an individual discipline skill such as `sense-making`, `explore`, `decompose`, `comprehend`, `innovate`, `td-critique`, `reflect`, or `navigation`.

## Execution Path

The skill wrapper requires a mandatory pre-read of its `references/*.md` file. It then consumes the user's input, runs the reference-defined process, and saves a Markdown output. Most skills save near the input if the input is a file path, otherwise under a discipline-specific `devdocs/` folder. Several skills record `## User Input` at the top of the output.

## Resource Management

The output is a Markdown file. There is no shared database, object store, or cache. The input is reread each run, and the generated artifact is the persisted result.

## Error Path

The wrappers mostly do not specify detailed recovery for bad paths or incomplete input. The assistant is expected to read what exists and either continue with caveats or fail visibly.

## Performance Characteristics

Runtime depends on assistant reasoning and the amount of input consumed. Filesystem work is small.

## Observable Effects

The user sees a structured Markdown file and, for some skills, the same output printed in the conversation.

## Why This Design

The design makes each thinking discipline independently runnable while keeping the full methodology in a reference file that can be reused by loop runners.

## What feels incomplete

### The issue explanation
Output naming is described generally as `<suitable-name>` but not mechanically derived.

### An ELI15
The skill says "save it with a good name" but does not give a name generator.

### Impact of it to the codebase and overall logic
Two runs can choose inconsistent names, making later automation harder.

### Robust Fixes / Best Practices
Define deterministic slug rules and output naming rules per skill.

### Architectural Fix if it exists
Introduce a shared artifact writer that chooses names, records input source, and avoids collisions. This is useful if artifacts become inputs to automation; otherwise it may be overkill.

### Speculative defence
Human-readable naming may have been preferred because these files are meant to be browsed manually.

### Is this
This is an automation-readiness gap.

## What feels vulnerable

### The issue explanation
The discipline result depends on the assistant actually loading and following the reference file.

### An ELI15
The rules are in a second booklet, and the worker must remember to open it before doing the job.

### Impact of it to the codebase and overall logic
Skipping or partially loading references can produce shallow outputs that still look like official artifacts.

### Robust Fixes / Best Practices
Add visible reference-load confirmation in outputs and require a short evidence section showing which reference process was followed.

### Architectural Fix if it exists
Build a runner that loads the wrapper and reference automatically, then validates output sections. This is probably not overkill for shared team use.

### Speculative defence
The mandatory pre-read instruction is explicit and repeated, which may be sufficient for human-supervised use.

### Is this
This is a process-compliance risk.

## What feels like bad design

### The issue explanation
The wrappers define behavior, persistence, and conversation printing in prose rather than executable code.

### An ELI15
The program is more like a checklist than a machine.

### Impact of it to the codebase and overall logic
Consistency relies on assistant obedience rather than enforced program behavior.

### Robust Fixes / Best Practices
Use small helper scripts for repeated artifact operations while keeping methodology in Markdown.

### Architectural Fix if it exists
Separate "discipline spec" from "artifact runtime" by introducing a minimal execution harness. This is a strong architecture if the project aims for reliability, but maybe too much for personal prompt workflows.

### Speculative defence
Markdown-native execution keeps the system portable across assistant products.

### Is this
This is the central tradeoff of the codebase.
