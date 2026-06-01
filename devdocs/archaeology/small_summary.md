# What This Project Is — A Plain-Language Summary

*Written by reading the actual files (the skill definitions, install scripts, and work-archive), not by trusting what the documentation claims. Regenerated fresh from the code as it currently stands.*

---

## The one-sentence version

This project, called **Homegrown**, is a kit of **reusable "thinking recipes" written for an AI assistant**. It is not a normal program made of code a computer runs — it's a collection of carefully-written instruction documents that teach an AI coding assistant (Claude Code, or OpenAI's Codex) how to reason through hard problems in a structured, repeatable way, and to leave a written paper trail every time it does.

## The most important thing to understand first

Look inside this project and you'll see thousands of `.py` (Python) files. It can look like a big piece of software. **It isn't.** Nearly all those Python files live in a folder called `.venv` — a box of off-the-shelf parts (downloaded helper libraries) that the project deliberately excludes from itself and doesn't actually use.

The *real* project is **written almost entirely in plain Markdown documents** (formatted text, like detailed notes). There is essentially **no traditional program code here** — just two small installer scripts and a large library of written instructions. The "source code" of this project is *prose written to be read by an AI.*

So think of Homegrown less like an app and more like **a set of detailed playbooks** you hand to a very capable assistant — plus a large folder holding every piece of work the assistant has produced while using those playbooks.

---

## What it actually is

Homegrown packages a set of **"disciplines"** — each one a single, well-defined *kind of thinking* — that an AI can be told to perform on demand. You trigger them by typing a slash-command (like `/sense-making` or `/innovate`) into your AI assistant. The two installer scripts copy these instruction files into the assistant's "skills" folder so it can find them.

The disciplines that are fully written and ready:

| Discipline | What it does, in plain terms |
|---|---|
| **Surfacing** | Goes through a big pile of material (a codebase, a set of documents, a range of options) and pulls out the parts that actually matter, labeling each by how relevant it is. |
| **Sense-making** | Takes a vague, confusing question and pins it down into something clear and stable — sorting out what's certain, what's a judgment call, and what's genuinely still unknown. |
| **Decomposition** | Breaks a big tangled problem into smaller pieces that can each be worked on separately, cutting at the natural "seams" where the pieces are least connected. |
| **Innovation** | Generates fresh ideas on purpose, using seven specific idea-sparking techniques (flip an assumption, borrow a solution from another field, push a trend to its extreme, etc.) rather than just free-associating. |
| **Critique** | Stress-tests the ideas like a courtroom — one side argues each idea will fail, the other argues it will work — then rules each one **keep**, **fix**, or **kill**. |
| **Routelister** | Sweeps a body of work and lists every direction you *could* take from here, each tagged with what kind of move it is. It lists; it never picks. |
| **Routeman** | Looks at the current state of a piece of work and enumerates the possible *next moves* toward a goal, with guidance on each — again, without choosing for you. |

A recurring design rule runs through all of them: **separate generating options from choosing among them.** That's why "list the directions" (Routelister) and "decide the move" are kept as different jobs, and why "come up with ideas" (Innovation) is strictly separated from "judge the ideas" (Critique).

These disciplines **chain together into "loops"** — assembly lines of thinking. The two ready-to-use loops:

- **`/MVL`** ("Minimum Viable Loop"): Sense-making → Innovation → Critique. The core pass that turns a fuzzy question into tested conclusions.
- **`/MVLw`**: the same loop with **Surfacing** and **Decomposition** added at the front, for when you first have to dig the relevant material out of a large body of stuff and break it down.

## What it currently does (the working parts)

1. **It installs into an AI assistant.** Two small setup scripts (one for Claude Code, one for OpenAI Codex) copy the instruction documents into the right place so the new commands appear. The advertised way to install is a single copy-paste line.

2. **It runs structured reasoning sessions that document themselves.** When you invoke a loop, the AI works through each discipline in order and — crucially — **writes down its work at every step.** Each run creates its own dated folder containing one document per thinking-step, a `_branch.md` (the question and what a good answer looks like), a `_state.md` (a progress tracker), and a final `finding.md` (the conclusion, written so a newcomer can follow it).

3. **It enforces house rules** (the project calls them "the law"): write everything down, one question per session, always record where a conclusion came from, be honest about whether a question is actually resolved, and keep idea-generation separate from idea-judging.

4. **It can be paused and resumed by any AI session**, because all the state lives in plain text files — a half-finished run can be picked up later from where it stopped.

5. **It has clearly been used heavily — mostly on itself.** The repository holds **53 active reasoning-session folders and more than 300 completed "findings" in total** (this accumulated record is the bulk of the project — over 2,600 files). The striking part: most of these sessions are the system **thinking about its own design** — questions like "what exactly is the Routelister discipline?" or "is this loop getting stuck repeating itself?". The author has been using the tool to design the tool, with the newest sessions dated the very day this summary was generated. That's strong evidence the core genuinely works and is in active daily use.

6. **It includes a "reasoning first-aid kit."** A side collection called *cognitive fixes* catalogs specific, recurring ways AI reasoning tends to go wrong (e.g., taking a vague instruction too literally) and documents a named patch for each — kept deliberately provisional until a pattern proves itself across several cases.

## What it appears to be trying to become (the ambition)

The project's own writing aims far beyond a handy set of commands. The README states the end-goal in striking terms: **a self-improving, increasingly autonomous "cognitive operating system"** that, over time, needs less and less human steering. The pieces sketched but not yet built include:

- **A self-improvement loop.** The system would make a real-time guess about the quality of its own work, later check whether that work actually panned out, and use the gap to revise its own instructions. A discipline for the "guess" step (`/intuit`) is fully described but **not yet built**.
- **An "autonomy ladder."** A planned progression where the human gradually hands off roles (doing the work, deciding what to do next, judging the results) to the system.
- **Running several reasoning streams at once and merging them** — multiple thinking "heads" exploring in parallel, with a coordinator combining the best results.
- **Turning conclusions into actual changes.** Today the system produces findings that *recommend* changes; a planned step would carry those through to actually editing files under controlled, traceable conditions.

These are written up as direction and theory, not working features.

## Honest assessment of the project's state

This is a **living, single-author research project in active flux** — not a finished, polished product. The evidence:

- **The documentation describes an *older* version of the system than the one that exists.** The README presents a lineup of disciplines (with names like *explore, comprehend, reflect, navigation, meta-loop*) as the shipped product — yet **every one of those has since been moved into a "non-active" / retired area.** Meanwhile the three disciplines that *are* now active and central (Surfacing, Routelister, Routeman) **aren't mentioned in the README's lineup at all.** The system was clearly refactored recently — for example, an old "navigation" discipline was split into the new "Routelister" (list directions) and "Routeman" (enumerate next moves) — and the headline docs haven't caught up.

- **The published installers look broken right now.** Both setup scripts try to download a `navigation` discipline and a `resume` helper file that **no longer exist** in the project. Because the scripts stop on the first failed download, a fresh install using the advertised copy-paste command would likely **fail partway through** (unless the publicly-hosted copy differs from what's in the repository). The scripts also *skip* installing `routeman`, even though it's fully written. In short, the installer and the actual contents have drifted apart.

- **The README's own "where to read more" list is stale.** Every one of the half-dozen documents it points you to has been moved or renamed — none are at the paths given. (The whole theory folder appears to have been renamed from `enes/` to `docs/`, and the pointers were never updated.)

- **Lots of half-cleared clutter.** Many `_old`, `copy`, `deprecated`, and `archived` versions of files; two README files plus a scratch `a.md`; an "archived skills" folder. This is the normal mess of something one person is continuously rebuilding — not abandonment, but not tidy either.

- **Three parallel copies of the foundational rulebook.** The core concepts ("the canon") exist in three sibling folders (`canon`, `mixed`, `unevaluable`) — apparently an experiment in rewriting the same ideas at different levels of rigor. It isn't obvious which copy is authoritative.

- **A vestigial "this was almost a Python package" past.** There's leftover machinery suggesting the project once aimed to be published as a Python software package (an automated publishing workflow, references to a package named `homegrown` version 0.0.2, that large folder of Python libraries). But there is **no actual program code to publish** — that workflow has nothing to build. The project plainly **pivoted** from "be a Python tool" to "be a set of AI instruction documents," and the old scaffolding was never removed.

None of this reads as abandoned — the 300-plus dated work-sessions, the newest from today, show it's in active use right now. It's simply **early-stage and self-hosted**, carrying the rough edges you'd expect from a tool whose main (and likely only) user is also its sole author.

## Who would use this, and why

- **The author themselves**, first and foremost. The evidence points to one person building a personal "system for thinking carefully," and using it to keep refining that very system. It's a workshop the builder lives in.
- **Power users of AI coding assistants** who are tired of getting different-quality results from ad-hoc prompting and want **repeatable, inspectable reasoning** instead. The appeal is consistency (the same disciplined steps every time) and a **paper trail** (you can read exactly how the AI reached a conclusion, and revisit it later).
- **Anyone interested in "structured AI reasoning" as a craft** — the project is as much a body of ideas about *how thinking should be organized* as it is a piece of software.

The core bet: ordinary AI chat is brilliant but forgetful and improvised — the reasoning happens once and vanishes. Homegrown wagers that thinking should instead be **named, repeatable, and written down**, so it can be trusted, traced, and improved over time.

## The general shape of it

It is **not** a website, a phone app, a conventional command-line tool, or a code library. The most accurate label:

> **A "skill pack" — a library of reusable instruction-documents for AI assistants — plus an extensive, dated archive of the reasoning work it has produced, much of it about its own design.**

It's distributed as a small installer you run once, after which the new abilities show up as slash-commands inside your AI assistant. The vast majority of the repository isn't the tool itself — it's the **accumulated record of the tool thinking**, session after session.
