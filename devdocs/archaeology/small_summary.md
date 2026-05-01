# Small Project Summary

This project is a pack of reusable AI-assistant skills for structured thinking work. It is not a normal software app with a screen, server, database, or API. Its main working parts are Markdown-based skill definitions, longer reference specifications, and shell scripts that install those skills into Codex or Claude Code.

In plain terms, the project tries to make an AI assistant think through difficult questions in named, repeatable steps instead of giving one quick answer. It asks the assistant to map an unknown area, clarify what a question really means, split complex problems into parts, generate ideas, evaluate those ideas, reflect on the process, and decide what direction could come next.

## What It Currently Does

The active skill source lives in `homegrown/`. It defines several individual thinking skills:

- `explore` maps unfamiliar territory before trying to explain it.
- `sense-making` turns vague or ambiguous input into a clearer working understanding.
- `decompose` breaks a complex whole into smaller questions with explicit relationships.
- `comprehend` builds and tests a working model of an artifact, such as code, a system, or a document.
- `innovate` generates possible ideas or approaches using several deliberate idea-making methods.
- `td-critique` evaluates candidates and labels them as surviving, needing refinement, or rejected.
- `reflect` reviews how a completed thinking run performed, focusing on the process rather than the answer.
- `navigation` lists possible next directions after a completed run.

The project also defines larger workflows:

- `MVL` runs a three-step loop: sense-making, innovation, then critique.
- `MVL+` runs a five-step loop: exploration, sense-making, decomposition, innovation, then critique.
- `meta-loop` is a higher-level workflow that uses `MVL+` and navigation repeatedly, while keeping a separate state file for the larger traversal.

These workflows are designed to create saved inquiry folders under `devdocs/inquiries/`. They write files such as `_branch.md`, `_state.md`, discipline outputs like `sensemaking.md` or `critique.md`, and eventually a final `finding.md`.

The installer scripts are the conventional executable code:

- `install_for_codex.sh` installs the skills into Codex format, either inside the current repository or at the user level. It can install from the local `homegrown/` folder or download files from GitHub when run remotely.
- `install_for_claude.sh` downloads the same skills into `~/.claude/skills` for Claude Code.

## What Looks In Progress Or Unfinished

Several pieces look unfinished or in transition:

- The loop runners refer to `tools/structural_check.sh`, but no `tools` directory or script is present in the current working tree. That means the advertised structural-check step would fail as-is.
- A GitHub workflow exists for publishing a Python package, but there is no visible Python package setup such as `pyproject.toml`, `setup.py`, or Python source code. This looks like leftover or future packaging infrastructure.
- The generated `.codex/skills/` copies are present but untracked, and many generated `SKILL.md` files contain duplicated metadata blocks. The Codex installer appears to wrap files as if the source metadata were unfenced, while several source skill files already use YAML-style metadata.
- `navigation` describes itself in one place as using a 15-type taxonomy, while its reference file defines a 16-type taxonomy. That suggests the navigation skill is being revised.
- A `resume` protocol exists, but the current loop runners still contain their own resume behavior rather than clearly delegating to that protocol.
- `homegrown/protocols/unknown.md` appears to be an older or partial version of the conclusion flow and is not installed by the current installers.

## Who Would Use This

This is for people using Codex or Claude Code who want an AI assistant to handle complex thinking tasks in a more visible and repeatable way. Likely users are developers, researchers, product builders, or planners working on questions that are too large, ambiguous, or important for a single-shot answer.

It is most useful when the user wants durable artifacts: saved reasoning, state files, final findings, and a trail of how the answer was reached. It is probably too heavy for small everyday questions.

## General Shape

The project is best described as an AI skill pack plus a research/workflow archive. The working core is the `homegrown/` skill library and the two installer scripts. The `.codex/skills/` directory appears to be a generated local install of those skills. The `devdocs/`, `enes/`, `thinking_disciplines/`, and `src/book/` areas are mostly notes, inquiry outputs, and explanatory material rather than executable software.

Overall, the project has a coherent usable core, but it is not a polished application or package. It is an active, evolving set of AI workflow definitions with some migration artifacts, missing support scripts, and packaging leftovers still visible.
