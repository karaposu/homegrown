# Architecture Introduction

This repository is not organized like a conventional software product. There is no application server, UI layer, database layer, or library API. The main implementation is a set of Markdown-based AI skills plus shell installers that copy those skills into Codex or Claude Code.

For onboarding, treat the `homegrown/` directory as the source tree. The rest of the repository is mostly notes, archived inquiry output, or draft explanatory material.

## System Shape

The core architecture is an instruction-as-code workflow pack. Each skill is a small executable contract for an AI assistant:

- `homegrown/<skill>/SKILL.md` is the entry point the assistant loads.
- `homegrown/<skill>/references/*.md` is the detailed discipline implementation.
- `homegrown/protocols/*.md` contains shared procedures used by loop runners.
- `devdocs/inquiries/<name>/` is the runtime storage area created by the skills.

The assistant is the execution engine. The repository supplies the procedures, file formats, and persistence conventions that guide the assistant's behavior.

## Main Data Flow Paths

### Installation Flow

The installation flow starts in either `install_for_codex.sh` or `install_for_claude.sh`.

For Codex, `install_for_codex.sh` first decides whether it is running from a local checkout or from a remote `curl | bash` invocation. If `homegrown/` exists next to the script, it installs from the local files. If not, it downloads each skill and reference file from GitHub into a temporary `homegrown/` tree.

After source detection, the script chooses a target:

- `--repo` installs into `.codex/skills/`.
- `--user` installs into `~/.codex/skills/`.

It then copies each skill into `<target>/<skill>/SKILL.md`, copies reference files into `<target>/<skill>/references/`, and copies shared protocols into `<target>/protocols/`. Codex installation also wraps the homegrown metadata into strict YAML frontmatter and rewrites protocol paths inside `MVL` and `MVL+` so installed loop runners point at the installed protocol directory.

For Claude, `install_for_claude.sh` is simpler. It always downloads from GitHub into `~/.claude/skills/`, downloads references beside their skills, and rewrites protocol paths for `MVL` and `MVL+` while streaming downloaded content through `sed`.

### Individual Skill Flow

Most individual skills follow the same shape:

1. Load `SKILL.md`.
2. Require a mandatory pre-read of the skill's `references/*.md` file.
3. Consume the user's input, which may be raw text, a file, a folder, or an image path.
4. Execute the discipline-specific process from the reference file.
5. Save a Markdown artifact either near the input or under a `devdocs/<discipline>/` folder.
6. Usually record the original user input at the top of the output.

This creates a consistent two-level abstraction: `SKILL.md` is the adapter and dispatch wrapper, while `references/*.md` is the actual discipline specification.

### Classic Inquiry Flow: MVL

`homegrown/MVL/SKILL.md` is the classic loop runner. For a new question, it creates `devdocs/inquiries/<slug>/`, then writes two control files:

- `_branch.md` stores the question, goal, and scope check.
- `_state.md` stores pipeline progress, iteration number, status, next discipline, relationships, and history.

The classic pipeline is fixed: sense-making, innovation, critique.

The loop runner then calls the discipline skills in order. Each discipline writes one output file into the inquiry folder: `sensemaking.md`, `innovation.md`, and `critique.md`. After each step, the runner updates `_state.md` and continues to the next discipline.

When all three outputs exist, the runner reads the critique output and decides whether the original question is answered. If yes, it loads `homegrown/protocols/conclude.md`, compiles a final `finding.md`, archives the discipline outputs into `docarchive/`, and marks `_state.md` complete. If no, it updates `_state.md` for another iteration and starts again with a narrower focus.

### Extended Inquiry Flow: MVL+

`homegrown/MVL+/SKILL.md` uses the same folder and state model as `MVL`, but its pipeline has five steps:

1. exploration
2. sense-making
3. decomposition
4. innovation
5. critique

Its `_state.md` includes `Flow-type: extended`, which lets later protocols distinguish extended inquiries from classic ones. Completion again routes through `conclude.md`, but the final finding is compiled from five discipline outputs instead of three.

### Resume And Conclude Flow

`homegrown/protocols/resume.md` defines a more telemetry-aware resume protocol. It detects the pipeline from `_state.md`, reads completed discipline outputs in order, looks for `**Overall: PROCEED**`, `**Overall: FLAG**`, or `**Overall: RE-RUN**`, then updates routing state. This protocol is more explicit than the inline resume sections in `MVL` and `MVL+`, and looks like a newer or future-facing shared implementation.

`homegrown/protocols/conclude.md` is the shared finalization path. It detects classic versus extended pipelines from `_state.md`, reads the expected discipline outputs, writes a self-contained `finding.md`, archives discipline outputs to `docarchive/`, updates `_state.md`, and prints a concise completion pointer.

## Main Abstractions

The main abstraction is the thinking discipline. A discipline is a repeatable cognitive operation with a stable input shape, a process, an output artifact, and quality checks. Examples are exploration, sense-making, decomposition, comprehension, innovation, critique, reflection, and navigation.

The next abstraction is the skill wrapper. A wrapper adapts a discipline to the assistant's skill system. It declares metadata, instructs the assistant to load the detailed reference file, defines input handling, and specifies where outputs should be saved.

The inquiry folder is the runtime object. It acts like a file-backed job record: `_branch.md` is the problem definition, `_state.md` is the control plane, discipline outputs are intermediate artifacts, `finding.md` is the final result, and `docarchive/` stores completed intermediate files.

The loop runner is the orchestrator. `MVL` and `MVL+` do not implement discipline logic themselves; they select a fixed pipeline, call the discipline skills, maintain state, and decide whether to conclude or iterate.

The protocol is a shared procedure used by loop runners. `conclude.md` is actively referenced by both loop runners. `resume.md` exists as a shared routing design, but the runners still contain their own inline resume instructions too.

Telemetry/verdict lines are an emerging control abstraction. Some skills produce quality summaries such as `PROCEED`, `FLAG`, and `RE-RUN`; `resume.md` is designed to route based on those lines.

## Top-Level Design Patterns

The dominant pattern is a file-backed pipeline. Work moves through named stages, each stage writes a Markdown artifact, and later stages read earlier artifacts. There is no in-memory service boundary or database; Markdown files are the persistence layer.

The second pattern is orchestrator plus worker. `MVL` and `MVL+` orchestrate. Individual discipline skills are workers. Shared protocols provide common finalization and, increasingly, resume behavior.

The third pattern is adapter plus reference implementation. Each `SKILL.md` is a thin adapter around a longer reference file. This keeps invocation instructions short while keeping the detailed methodology reusable and inspectable.

The architecture is not MVC, event-driven, layered application architecture, or a CLI command framework in the normal sense. It is closer to a plugin pack for AI agents with a persistent artifact model.

## Design Inconsistencies And Transition Points

The architecture is coherent at the concept level, but several parts are in transition.

The loop runners call `tools/structural_check.sh`, but no `tools/` directory is present in the current working tree. That means the documented structural validation step is not locally executable as written.

There is duplication between inline runner behavior and shared protocols. `MVL` and `MVL+` contain their own resume logic, while `homegrown/protocols/resume.md` defines a more centralized resume protocol. That suggests the system is moving from inline orchestration toward shared protocol modules but has not fully migrated.

The GitHub workflow is for publishing a Python package, but the repository does not expose a visible Python package configuration. That workflow does not match the current implementation shape.

There are several historical or draft areas (`thinking_disciplines/`, `enes/`, `src/book/`, `devdocs/archive/`, and old inquiry folders) that describe or record the system, but the active runtime source is much narrower: the installers plus `homegrown/`.

Overall, the codebase is best understood as a Markdown-native agent workflow system. Its design centers on explicit process documents, file-backed state, and repeatable pipelines rather than conventional software modules.
