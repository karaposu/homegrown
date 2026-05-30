# What This Project Is — A Plain-Language Summary

*Written from what the files actually do, not from what the documentation claims.*

## The one-sentence version

This is a **thinking machine made out of instructions, not software**. It's a set of carefully written "recipes" that tell an AI assistant how to think through a hard question — step by step, in a disciplined way — and it keeps a detailed journal of every question it has ever worked on.

## The most surprising thing about it

There is essentially **no traditional code here**. Out of ~2,700 files, all but a handful are plain text documents (markdown). There are only three small setup scripts. Normally a software project is mostly code with some documentation on the side; this project is the reverse — it is almost entirely written instructions, and those instructions *are* the product.

The reason: this project runs on an AI assistant (like Claude). Instead of writing computer code that a machine executes, the author writes detailed, structured English instructions that the AI reads and follows. So the "program" is prose, and the "running" of it is the AI carefully working through that prose. Think of it like the difference between a player piano (mechanical code) and a recipe book handed to a very capable chef (this project).

## What it actually does

The heart of the project is a small set of **"thinking disciplines"** — each one is a recipe for a specific mental move:

- **Surfacing** — pulls the relevant material out of a big pile (a codebase, a body of writing, a set of options) and tags each piece by how relevant it is. *("What should I even be looking at?")*
- **Sense-making** — takes something vague or confusing and clarifies it through several rounds until the real question is clear. *("What are we actually asking?")*
- **Decompose** — breaks a big tangled problem into smaller, cleaner pieces and figures out which piece to tackle first. *("How do I cut this into manageable parts?")*
- **Innovate** — generates genuinely new ideas using seven different idea-generating tricks (combining things, inverting assumptions, borrowing from other fields, and so on), then stress-tests each idea. *("What are the possible answers?")*
- **Critique** — puts the candidate ideas on trial: argues against each one, argues for it, and delivers a verdict — keep it, refine it, or kill it. *("Which answers actually hold up?")*

On their own, these are individual tools. The project then **chains them together into a loop** so the AI can take a question all the way from "confused" to "answered":

- **MVL** — the short version of the loop for clear, simple questions: make sense of it → generate ideas → critique them.
- **MVLw** — the long version for messy, complex questions: first surface the relevant material and break the problem down, *then* run the short loop.

If the question isn't fully answered after one pass, the loop tightens its focus and goes around again. When the answer is solid, a wrap-up routine writes a clean final document and files everything away.

There are also support routines for housekeeping: one that **spawns a follow-up question** as a "child" of the current one (keeping related work organized in a tree), one that **packages up a finished investigation** into a readable conclusion, and one that **diagnoses why an earlier attempt gave a weak answer** so the recipes themselves can be improved.

## How it's actually being used (the evidence)

The project keeps two big folders that tell the real story:

- **`docs/`** holds the project's own rulebook and north-star — the stable definitions of what the system is, how the thinking disciplines should behave, and the long-term goal it's aiming at. These are the *inputs* the AI consults.
- **`devdocs/`** holds the *outputs* — and this is enormous (over 2,500 files). Every time the author runs the thinking loop on a question, it creates a dated folder containing the original question, a progress log, the final answer, and the full reasoning trail. Folders are stamped like `2026-05-23_09-30__navigation_survey_report`.

In other words, **the author has been using this system on itself, over and over, to think about how to improve the system.** The journal goes back through dozens of investigations. A handful of those findings have been "materialized" — turned into concrete additions to the rulebook. This is a self-improving loop: the tool is used to refine the tool.

## Who would use this, and why

The audience is essentially **the author and other AI-power-users who want rigorous, repeatable thinking** rather than off-the-cuff answers. Someone facing a genuinely hard, fuzzy problem could hand it to this system and get back not just an answer, but a documented trail showing how the answer was reached, what alternatives were rejected, and what's still uncertain. It's aimed at people who care as much about the *quality and traceability of the reasoning* as about the conclusion.

The setup scripts (`install_for_claude.sh`, `install_for_codex.sh`) confirm this is meant to be shared: they download the recipes into a user's AI assistant so anyone can invoke them as commands like `/MVL`, `/innovate`, or `/critique`.

## What's clearly working vs. half-built vs. set aside

**Working and actively used:**
- The five thinking disciplines and the MVL / MVLw loops — these are installed by the setup script and have produced hundreds of documented results.
- The wrap-up, follow-up-question, and failure-diagnosis routines.
- The investigation journal — heavily used, right up to the current date.

**In progress / not yet settled:**
- **Navigation / "routeman"** — a tool meant to lay out *all* the possible next moves after finishing a question (so you can choose where to go next). An older version was retired and a newer one is still being shaped; it's only partly wired in.
- The relationship between findings and the official rulebook is still maturing — only a few findings have been formally folded back into canon.

**Explicitly set aside (not deleted, but parked):**
- **MVL+** — an alternative long-loop that does a more exhaustive (and more expensive) exploration up front. It sits in a "non-active" folder, apparently superseded by the lighter-weight MVLw.
- **Meta-loop** — an ambitious layer that would let the AI chain many investigations together while a human picks the direction at each step. Also parked as "non-active" — the idea exists and is described, but it hasn't stabilized into something used day-to-day.
- A `comprehend`, `reflect`, and `contracts` set of tools also sit in the non-active folder.

## The honest bottom line

This is a **research project about how to think well, built as a library of instructions for an AI**, plus a large and growing logbook of the author using those instructions on real questions — including questions about the project itself. The core thinking tools are real and exercised heavily. The more ambitious orchestration ideas (chaining many investigations, fully mapping next-moves) are designed but still on the workbench. It is less a "finished app" and more a **living, self-refining method** — closer to a disciplined notebook-and-method than to a conventional piece of software.
