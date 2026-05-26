# What This Project Is — read from the code, not the docs

## In one sentence

This project is **not a program you run.** It's a pack of natural-language instructions you install into an AI coding assistant (Claude Code, OpenAI Codex, or Cursor) that changes how the assistant thinks through a hard question — making it slower, more deliberate, and forcing it to leave behind a folder of intermediate notes for every step.

## The shape of the project

If you opened the folder expecting to find software, you'd be confused. There are only two actual programs: a pair of shell installer scripts. Everything else — and it is a *lot* of else — is plain markdown text files.

Those markdown files are the project. They come in two main flavors:

- **"Skills"** — files that the AI assistant reads at the moment a user types a slash-command like `/sense-making` or `/innovate`. Each one tells the AI: "now do this specific kind of thinking, in this specific order, and save the result to a file with this specific name." They aren't documentation about the AI — they're instructions *to* the AI, executed at run time.
- **"Protocols"** — supporting files the skill files load when they need shared behavior (e.g., "how to create a child inquiry under an existing one," "how to write the final summary document").

Installation just downloads these markdown files into a folder the AI assistant already watches for plugins (`~/.claude/skills/` for Claude Code, `~/.codex/skills/` for Codex). Removing the files returns the assistant to its native behavior.

## What it currently does (working functionality)

When installed, the user gets a set of new slash-commands inside their AI coding assistant:

**Single thinking moves** (run one at a time on whatever the user feeds in):

- `/sense-making` — take ambiguous input and produce a structured understanding of it (six progressively-refined "sense versions" of the problem).
- `/innovate` — generate candidate ideas across seven different generation techniques (combining things, inverting things, transferring ideas from other domains, etc.), with deliberate variety (generic / focused / contrarian for each).
- `/td-critique` — evaluate competing candidates adversarially (prosecution + defense + collision) and render verdicts: SURVIVE, REFINE, or KILL.
- `/surfacing` — pull relevant items out of a large body of material (a codebase, a literature corpus, a folder of notes) and tag each item with how relevant it is.
- `/decompose` — perceive where the natural boundaries are in a complex topic and partition it into independently-tractable sub-questions.
- `/routeman` — enumerate every possible next move the user could take from where they are, with each move tagged by type (16 categories) and how reachable it is.

**Pipeline runners** (chain the moves together automatically):

- `/MVL "<question>"` — runs sense-making → innovate → critique as a three-stage pipeline. Creates a timestamped folder under `devdocs/inquiries/`, drops a `_branch.md` (the question + goal) and a `_state.md` (progress tracker), then runs each stage in sequence, saving each stage's output as a markdown file. When all three are done, it decides whether the question is answered. If yes, it consolidates everything into a single `finding.md` and archives the per-stage files. If no, it loops with a narrower focus.
- `/MVLw "<question>"` — same idea but with five stages: surfacing → sense-making → decompose → innovate → critique.

Both runners can be paused and resumed across sessions because all state lives in the markdown files on disk — any AI session can pick up where the last one left off by reading `_state.md`.

The `branch_inquiry` protocol lets a runner spawn a child sub-inquiry under an existing parent inquiry, with explicit lineage tracking (source anchor in the parent, depth limit, parent index update).

That's the working surface. It's small, but each piece is detailed — typical skill specs run 100-400 lines of instructions; protocol specs run 400-700 lines.

## What it appears to be trying to do (partially built, in-progress, or aspirational)

This is where it gets interesting. The shipped skills are the foundation of a much larger ambition that the project is openly mid-build on:

- **Self-improvement loops.** The long-term vision (stated explicitly in the README and design docs) is that the assistant would eventually run these thinking moves on *itself* — noticing patterns in its own past mistakes, refining its own instructions, calibrating its own real-time confidence against later-observed outcomes. None of that closes today. The human still drives every step.

- **A "hunch" layer (`/intuit`).** Designed in detail but not shipped. Would let the assistant predict in real time whether its output is good, then check that prediction against actual downstream usefulness days/weeks later. The gap between predicted and actual would feed back into refining the instructions.

- **An autonomous "navigator."** Designed but not active. After each inquiry, a separate AI session would read the result and enumerate possible next directions automatically, accumulating memory across runs. Currently the user picks the next direction by hand.

- **Discipline-renaming-in-progress.** The original `/navigation` skill has been moved into a folder literally named `deprecated_navigation/` and replaced by a freshly-rebuilt `/routeman` skill. The rename note explains the project deliberately rebuilt rather than renamed-in-place because the old version had accumulated baggage that anchored agent reasoning to outdated framings. This is an active migration — both folders coexist while artifacts still reference the old name.

- **A `non-active/` folder** holds five more skills (`MVL+`, `comprehend`, `deprecated-explore`, `meta-loop`, `reflect`) that aren't installed by the current install scripts. They're either retired, paused, or waiting on something else.

- **A `cognitive_fixes/` folder** holds one documented "fix" for a recurring failure mode, with explicit rules that say: don't promote this folder into a formal protocol until at least 5-10 more applications accumulate. It's a deliberately under-formalized staging area.

- **Safety substrate** (regression detection, structural checks, change-log enforcement on the spec files themselves) is partially built. One snapshot-of-prior-versions folder (`archived_skills/`) exists; the automated checking around it does not.

So the project's current state is best described as: **the foundation is shipped and usable; the self-running parts are designed in detail but not wired up.**

## The most striking thing about the project

The `devdocs/inquiries/` folder contains 19+ subfolders of past inquiries the system has been used to run — and almost every single one of them is the project investigating *itself*. Titles include "navigation surfacing territory dependency recheck," "routeman discipline design," "autonomy register and discipline read protocol," "file shape contracts upstream artifacts," "multi head aggregation routeman." The skill files are being used to redesign the skill files.

This recursion shows up in the code: skills reference past inquiry folders by path; protocols cite specific inquiry findings as the source of specific rules; new failure modes get a folder explaining the methodology used to fix them.

The project is bootstrapping itself.

## Who would use this and why

The user is someone who already uses an AI coding assistant (Claude Code, Codex, Cursor) for nontrivial work and is willing to trade speed for structure. Specifically:

- **Researchers, writers, designers, or strategists** who want the AI to slow down on hard questions, consider alternatives explicitly, leave an audit trail, and produce a single defensible written answer rather than a quick best-guess.
- **People investigating something messy** where the right framing isn't obvious yet — the kind of problem where you'd benefit from being forced through "what is this really asking?" → "what are the options?" → "what kills each option?" before committing to an answer.
- **People building their own AI tooling** who treat this project as a reference implementation for how to structure agent behavior through layered markdown specs with explicit failure modes, telemetry, and inter-spec protocols.

The user gets a folder of evidence (one markdown file per thinking stage) rather than a chat transcript. The folder is durable, re-readable, resumable across sessions, and can be branched into child inquiries.

## In summary

It's a **library of structured-thinking instructions** for AI coding assistants. The instructions are written in plain text, get installed into the assistant's plugin folder, and turn what would otherwise be a freeform conversation into a slower, more disciplined, file-producing reasoning pipeline. The foundation works today; an ambitious self-improvement layer is designed but not yet operational.

It is not a web app, a CLI tool, a library, or an API. It is most accurately called a **prompt library that behaves like a methodology**.
