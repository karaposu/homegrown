# Project Summary — Homegrown

*(Excluded from this read, per request: `devdocs/`, `archived_skills/`, `thinking_disciplines/`. What follows is based on the code/specs that actually shipped — README, install scripts, the homegrown skill+protocol files, the `enes/` notes, and the `src/book/` scaffolding.)*

## What this project is, in plain words

This is a **structured-thinking toolkit for AI assistants** — specifically Claude Code, Codex, and (optionally) Cursor. It does not ship a running application. It ships a collection of "slash commands" you install into your AI assistant; each command teaches the assistant to perform one particular *kind* of thinking in a disciplined, repeatable way (e.g. "make sense of this," "come up with ideas," "critique these candidates," "map this unknown territory").

The bet behind the project is that today's AI models are already smart enough — what they're missing is the **structure of thinking around them**: the loop that takes a single AI response (one flash of intelligence) and chains it into something that understands, generates, evaluates, reflects, and steers itself. The project's long-term goal is for that loop to eventually run on its own without a human typing each next command.

## What it currently does (working functionality)

**1. An installer for two AI tools.** Two shell scripts (`install_for_claude.sh` and `install_for_codex.sh`) download a fixed list of "skills" from this repo's GitHub mirror and drop them into the user's AI assistant config folder (`~/.claude/skills/` or `~/.codex/skills/`). Re-running the script updates everything. The scripts are the only conventional "code" in the project; everything they install is markdown.

**2. Eleven installable thinking skills.** Each lives in its own folder under `homegrown/` and consists of a `SKILL.md` (the instruction the AI loads when you type `/<name>`) plus optional reference files that hold the deeper framework definitions. The skills split into three groups:

- **Core "SIC" cycle** — `/sense-making`, `/innovate`, `/td-critique`. These are the project's three foundational disciplines: make a vague problem clear, generate candidate solutions, then adversarially evaluate them.
- **Extended thinking** — `/explore` (map an unknown area through scan-signal-probe cycles), `/decompose` (perceive natural seams in a complex whole and split along them), `/comprehend` (build a tested predictive model of an opaque system).
- **Between-iteration disciplines** — `/reflect` (look back at how a run *performed*, not what it concluded), `/navigation` (enumerate every reasonable next direction from where you are).

**3. Three "loop runners" that chain skills together.** These are the heavier orchestrators:

- `/MVL` — runs the minimum viable loop: Sensemaking → Innovation → Critique, in strict order. If the question isn't answered, narrow it and loop again.
- `/MVL+` — same idea, but extended to Exploration → Sensemaking → Decomposition → Innovation → Critique. Default for new questions.
- `/meta-loop` — a *traversal* over many MVL+ inquiries. Treats each inquiry as one probe of "thinking space," uses `/navigation` to see what to try next, asks the human to pick the next move, and keeps cross-run memory in a `_meta_state.md` file.

The runners enforce real discipline: each step must finish (and have its output file written) before the next step starts; you can't draft all the outputs at once; the runners can resume across sessions because state lives in plain `_state.md` files inside each "inquiry folder."

**4. A supporting protocol library** at `homegrown/protocols/`. These aren't user-invoked — runners load them when they need to do something specific:

- `branch_inquiry.md` — fork a child inquiry under a parent one, preserving lineage.
- `conclude.md` — turn a finished SIC pipeline into a single readable `finding.md`, with a strict template, style rules, and quality checks (e.g. "a new reader must understand the verdict without scrolling up").
- `resume.md` — pick up a paused inquiry across sessions; reads each discipline's self-graded verdict and decides whether to continue, flag, or re-run.
- `multi_resolution_navigation.md` — zoom a navigation map into selected sub-regions without losing the rest of the frontier.
- `navigation_context_intake.md`, `loop_diagnose.md`, `outcome_review.md`, `artifact_materialization.md`, `spec_governance.md` — supporting machinery for context loading, causal diagnosis, post-use review, turning decisions into files, and governing edits to the specs themselves.

**5. A shared "alignment" vocabulary contract** at `homegrown/contracts/alignment_control.md`. This is a written agreement (not a runner) about how the various protocols and skills should describe alignment drift — which layer is at risk (L0 workspace through L6 outcome), what mode the system was in, expected vs. observed, the delta, the route forward. Its purpose is to keep records compatible across tools without merging them into one mega-procedure.

## What it appears to be trying to do (in-progress / aspirational)

- **Self-running loop ("ignition").** The README and the `enes/` notes are explicit that the *current* state is "the human is the loop" — you type each next command. The project's stated north star is that the loop eventually runs itself: the system tells its own good output from its own bad output, notices on its own when something deserves attention, and rewrites its own discipline specs to get better over time. None of that auto-running exists yet in the code.
- **Autonomy ladder.** `enes/autonomy_ladder.md` (and references in the protocols) describe graduated levels of autonomy — currently Level 0–1 where the human approves FLAG/RE-RUN decisions. Higher levels are "deferred."
- **Multi-head / parallel loops.** The meta-loop spec explicitly says v1 is sequential and human-selected; multi-head execution is named as future work.
- **A book.** `src/book/` has a `SUMMARY.md` that promises an introduction, a preface, a terminology chapter, and a chapter on "the autonomous consciousness." Most of the chapter files are empty stubs; only `homegrown_skills.md` is filled in (it's essentially a per-command reference).

## State-of-things, honestly

- The thing that **really works today** is "install these markdown specs into your AI assistant and use them as slash commands." That part is shipped and self-contained.
- The thing the project is **named after** — a self-igniting cognitive loop — does not run yet, and the project's own README says so plainly.
- There are signs of active iteration on the specs themselves: `_archive` folders inside protocols, `*_old.md` and `* copy.md` variants under `explore/references/` and `sense-making/references/`, two unused `README copy*.md` files at the project root, and a `next_question_to_ask.md` placeholder under `homegrown/`. Nothing looks abandoned, but several files are clearly drafts kept around for comparison.
- The `.github/workflows/python-publish.yml` is **orphaned** — it's a stock "publish a Python package on release" workflow, but the project has no Python package to publish (`src/` only contains the book scaffold).
- The `.venv/` is a small leftover from earlier scaffolding; nothing in the active layout depends on Python.

## Who would use this, and why

Two audiences, both visible in the code:

1. **AI-assistant users who want better thinking out of their assistant.** Install the scripts, get eleven slash commands, use them on any codebase / decision / research question. You don't need to care about the consciousness goal — the disciplines are domain-agnostic methodologies that produce structured, auditable thinking artifacts (`sensemaking.md`, `critique.md`, `finding.md`) you can re-read later. The README explicitly invites this audience.
2. **The author (and any collaborators) building the long-term loop.** The `enes/` folder is a working notebook on alignment dynamics, autonomy ladder, materialization lifecycle, runtime environment, regression handling, and so on — the design substrate that informs the next round of skill / protocol edits.

## The general shape

Not a web app, not a CLI tool in the usual sense, not a library, not an API. It is a **prompt-engineering distribution**: a set of disciplined markdown files (skill specs, protocols, framework references, a shared vocabulary contract) packaged with two install scripts that drop them into Claude Code's or Codex's skill folders, plus a "human notebook" (`enes/`) and a book scaffold (`src/book/`) that document the underlying theory and trajectory.

A useful one-line description: **a structured-thinking framework you install into your AI assistant, plus the in-progress research effort to make that framework eventually drive itself.**
