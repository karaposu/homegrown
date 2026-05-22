# What This Project Is — read from the code, not the docs

## In one sentence

This project isn't software you run. It's **a pack of instructions for AI coding assistants** (Claude Code and OpenAI's Codex command-line tool) that teaches them how to walk through a hard problem in a slow, deliberate, multi-stage way — and leaves behind a paper trail of every step.

## What you actually get when you install it

Installation is one shell command. It copies a set of Markdown files into a folder that your AI assistant reads from on startup. After that, your assistant gains a list of new commands you can invoke by typing a slash and a name. The ones you'd type include:

- `/MVL` — the smallest pipeline
- `/MVL+` and `/MVL2+` — longer pipelines
- `/meta-loop` — an outer orchestrator that strings many runs together
- `/sense-making`, `/innovate`, `/td-critique`, `/explore`, `/surfacing`, `/decompose`, `/comprehend`, `/reflect`, `/navigation` — individual "thinking moves" that can be invoked on their own

Each name corresponds to a long, careful instruction document the AI is forced to load and follow before it answers you.

## The thing it's really about — the pipelines

The simplest pipeline, `/MVL`, looks like this. You type something like `/MVL "should we rewrite the authentication code?"` and the assistant:

1. **Makes sense of the problem** — restates it clearly, surfaces hidden ambiguities, locks down what "answered" would even mean.
2. **Innovates** — produces a deliberate spread of candidate ideas using seven specific techniques (combination, inversion, taking ideas from other domains, etc.) rather than just whatever comes to mind first.
3. **Critiques** — runs each candidate through a kind of mock-trial (prosecution / defense / collision with the others) and labels each one SURVIVE, REFINE, or KILL.
4. If nothing solid survived, it loops back to step 1 with a narrower question.

Each stage's full output is saved as a separate file in a timestamped folder, and a final `finding.md` is compiled when the loop reaches an answer.

The longer pipelines (`/MVL+`, `/MVL2+`) add two earlier stages — exploring an unfamiliar territory and breaking the problem into pieces — before the original three. `/MVL2+` is a recent variant that pulls items from a defined territory instead of open-ended exploring.

`/meta-loop` is one level above that: it runs `/MVL+`, then asks "given that finding, what are all the possible next directions?" via `/navigation`, presents the human with the map, the human picks, and the loop runs again. It keeps a memory file across runs so it can pick up where it left off.

## How runs are stored

Every inquiry creates a folder named with a date-time stamp and a short slug, like `2026-05-22_14-30__should-we-rewrite-auth/`. Inside:

- `_branch.md` — the question and what a good answer would let the user do
- `_state.md` — which stage is done, how many iterations have run, history
- one file per stage (`sensemaking.md`, `innovation.md`, `critique.md`, etc.)
- `finding.md` — the final compiled answer once the run completes
- `docarchive/` — where the stage files get moved when the run is done

You can also "branch" a new inquiry off an existing one, keeping a chain of which question came from which earlier answer.

## What's clearly working

- The two install scripts (one for Claude Code, one for Codex) are complete and look well-tested. They handle URL quirks, frontmatter differences between the two tools, and the difference between skills that have reference files and skills that don't.
- The core pipelines `/MVL` and `/MVL+` and their nine sub-disciplines are all fully specified.
- The "glue" protocols (`branch_inquiry`, `conclude`, `resume`) are written out in detail and reference each other consistently.

## What's newer or half-built

- `/MVL2+` and `/surfacing` are recent additions (still showing up as untracked files in the project at the time of reading).
- `/meta-loop` openly labels itself "v1" — it only supports the human picking one direction at a time. The spec mentions a future multi-head / parallel-branch mode that isn't built yet.
- An "alignment control" document exists that defines vocabulary for noticing when an AI's work drifts from what was asked. It explicitly defers most of its implementation ("don't build numerical scoring until 30+ real records exist; don't build a multi-agent runtime yet") — so right now it's an agreement on words, not a working mechanism.
- A small checker script (`tools/structural_check.sh`) is referenced by the pipelines, but they tolerate it being absent, which suggests it isn't always there.

## Who would use this, and why

Someone who:

- works with an AI assistant on complicated, open-ended questions — research, system design, strategy, writing — not just "fix this bug";
- has noticed that the AI's default mode is to jump straight to an answer without first checking what the question really is, without challenging its own ideas, and without noticing what it's still missing;
- wants a way to *force* the AI through a slower, structured sequence of moves and end up with a folder of evidence rather than just a chat log.

The author appears to be building this for their own use first. There's a place where the system records observations about its own bad runs, and a habit (visible in the specs) of running the same thinking pipeline on the system's own design to refine it further. In other words: a thinking framework that uses itself on itself.

## The shape of it, in one line

A **command-line skill pack for AI assistants** that turns "ask the chatbot" into "walk a question through a multi-stage reasoning pipeline that leaves an auditable folder of evidence behind."
