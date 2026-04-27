# Small Project Summary

This project is a collection of installable AI-assistant skills for structured thinking work. It is not a normal app with a screen, server, API, or command-line program. Its main usable pieces are Markdown skill files and shell installers that copy those skills into Codex or Claude Code.

The active skill set is built around turning open-ended questions into repeatable inquiry workflows. The core workflow creates a folder for each inquiry, tracks progress in state files, asks the assistant to run a sequence of thinking steps, saves each step as Markdown, and eventually turns the results into a final `finding.md`.

## What It Currently Does

The project currently provides individual skills for several kinds of thinking work:

- `sense-making` turns vague or complex input into a clearer understanding.
- `explore` maps an unfamiliar area before trying to interpret it.
- `decompose` breaks a complex whole into smaller, connected questions.
- `comprehend` builds a tested working model of an artifact such as code, a system, or a document.
- `innovate` generates possible ideas or approaches.
- `td-critique` evaluates competing ideas and decides what survives, needs refinement, or should be rejected.
- `reflect` looks back at how a completed thinking run performed.
- `navigation` lists possible next directions after a completed run.

It also provides two loop runners:

- `MVL` runs a fixed three-step loop: sense-making, innovation, then critique.
- `MVL+` runs an extended five-step loop: exploration, sense-making, decomposition, innovation, then critique.

Both loop runners are designed to create `devdocs/inquiries/<name>/` folders, maintain `_branch.md` and `_state.md`, save step outputs, and continue across sessions. Supporting protocols named `resume` and `conclude` describe how to pick up an inquiry later and how to compile a completed run into a final finding.

The installer scripts are the most conventional executable code in the project. `install_for_codex.sh` installs the skills into Codex format, either in the current repository or at the user level. It can use the local `homegrown/` folder or download the same files from GitHub. `install_for_claude.sh` downloads the skills into `~/.claude/skills` for Claude Code.

## What It Appears To Be Trying To Do

The project appears to be building a repeatable "thinking system" for AI-assisted work. Instead of asking an AI one large question and accepting one answer, it pushes the assistant through named disciplines: map the territory, clarify the problem, split it into pieces, generate candidates, test them, record a finding, reflect on the process, and choose what to do next.

It is also trying to make long-running investigations persistent. The inquiry folders, state files, archives, and resume protocol are all aimed at letting a person or assistant return to a question later without starting over.

Some future-facing pieces are visible but not complete. The loop runners refer to a `tools/structural_check.sh` script, but no `tools` directory is present in the current working tree. A GitHub workflow exists for publishing a Python package, but there is no visible package configuration such as `pyproject.toml` or `setup.py`. The book and older notes mention commands such as `elaborate`, `inquiry`, and `wayfinding`, but those are not active skills in the current `homegrown/` source layout.

## Who Would Use This

This is for people using Codex or Claude Code who want reusable AI workflows for complex thinking tasks. Likely users are developers, researchers, product builders, or planners who want the assistant to produce visible intermediate artifacts instead of only a final answer.

It would be most useful when the question is large, ambiguous, or likely to span multiple sessions. It is less useful for simple one-off questions where the overhead of creating inquiry folders and running multiple thinking steps would be too heavy.

## General Shape

The project is best described as an AI skill pack plus a research/workflow archive. Its real source of behavior is the `homegrown/` directory, where each skill has a `SKILL.md` file and, for most skills, a longer reference file. The `devdocs/`, `enes/`, `thinking_disciplines/`, and `src/book/` areas are mostly supporting notes, prior inquiry outputs, or draft explanatory material rather than runnable software.

The current state looks active but unfinished. The active skill files and installers form a coherent usable core, while several surrounding files show migration or cleanup in progress.
