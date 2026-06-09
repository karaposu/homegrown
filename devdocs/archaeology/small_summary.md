# What This Project Is — A Plain-Language Summary

*Written 2026-06-09 by reading the project's actual source (everything in `cognitive_harness/`, the install scripts, the settings and workflow files, the shape of the `devdocs/inquiries/` output archive) plus the full `docs/` tree. This replaces any prior version of this file.*

---

## The one-sentence version

This project — called **Homegrown** (the local folder is named "native") — is a hand-built **thinking system for AI assistants**: a library of written playbooks that teach an AI like Claude Code *how to think through hard questions in a disciplined, repeatable way*, wrapped inside a long-term research program whose explicit end goal is a system that can **improve its own thinking with less and less human supervision**.

## The most important thing to understand first

There is almost no conventional software here. The repository contains exactly two small shell scripts (installers), one leftover GitHub workflow template, and a Python virtual environment that contains *zero* lines of project Python code. Everything else — thousands of files — is Markdown prose.

That is not an accident or an unfinished state. **The Markdown IS the source code.** The documents are written to be *executed by an AI assistant*: precise step-by-step procedures, required outputs, quality checks, and named failure modes. The install scripts copy these documents into the AI assistant's "skills" folder (`~/.claude/skills/` for Claude Code, `~/.codex/skills/` for OpenAI Codex), where each becomes a slash-command a user can invoke.

So the right mental model is: **a methodology library plus its own laboratory notebook**, not an app.

---

## What it currently does (working today)

### 1. Seven "thinking disciplines" — single thinking moves

Each discipline formalizes one kind of thinking a person does naturally, written down so an AI performs it consistently every time instead of brilliantly one day and shallowly the next:

| Command | Plain-language job |
|---|---|
| `/surfacing` | Sweep a bounded territory (a codebase, a pile of documents) and pull out everything relevant to a purpose, tagged by how relevant it is. |
| `/sense-making` | Turn a vague, ambiguous question into a stable, clearly-structured understanding, by extracting "anchors," checking multiple perspectives, and explicitly resolving ambiguities. |
| `/decompose` | Look at a big tangled problem, perceive where its natural seams are, and split it into independent pieces with clear connections between them. |
| `/innovate` | Generate genuinely new ideas using seven named mechanisms (combining concepts, inverting assumptions, importing patterns from other fields, etc.), then stress-test what survives. |
| `/td-critique` | Put competing ideas on trial — a prosecution argues against each, a defense argues for it — and rule SURVIVE / REFINE / KILL with reasons. |
| `/articulate_simple` | Before doing anything, spell out what a request *actually asks* — listing every plausible reading instead of silently guessing one. |
| `/routelister` | Look at any body of work and list "here are all the directions you could go next, typed and explained" — without picking one. |

Each discipline saves a Markdown report of what it did, every time. These are real and heavily exercised — the specs have accumulated layers of "refinement notes" born from observed failures.

### 2. Three "loop runners" — assembly lines that chain the disciplines

- **`/MVL`** runs Sensemaking → Innovation → Critique on a question.
- **`/MVLw`** (the workhorse) runs Surfacing → Sensemaking → Decomposition → Innovation → Critique.
- **`/aMVLw`** adds Articulation at the front, so the pipeline works on an explicitly-mapped question instead of a guessed one.

A runner creates a timestamped **inquiry folder**, runs each discipline in order (each saving its output file), tracks progress in a state file, and finishes by compiling a **`finding.md`** — a self-contained plain-language report of the answer, the alternatives considered and rejected, and what's still open. Supporting protocols handle making sub-inquiries that branch off a parent (`branch_inquiry`), wrapping up (`conclude`), and diagnosing why an earlier run produced a bad answer (`loop_diagnose`).

A deliberate design rule makes all of this survivable across sessions: **the folder is the memory**. Any AI session (or human) can open an inquiry folder, read the state file, and continue exactly where things stopped. No database, no app — just files.

### 3. A large, real body of output

`devdocs/inquiries/` holds **100+ inquiry folders and ~357 finished findings** (including branches). Strikingly, most inquiries are the system being pointed *at itself*: "what's wrong with the critique discipline," "how should spec text be organized," "why did this earlier run fail." The system is genuinely being used as its own improvement tool — which is precisely the project's stated strategy.

There is also working machinery for **regression safety**: snapshots of old versions of the skill set (under `archived_skills/`) can be reinstalled side-by-side under prefixed names, so an old version of a discipline can be run against the current one to check whether an "improvement" actually made things worse.

---

## What it's trying to become (the ambition, from the docs)

The `docs/canon/` papers lay out an unusually explicit north star: a **self-improving cognitive system** that gradually builds its own "consciousness layer" — noticing things unprompted, valuing what matters, steering itself in real time — with the human's role **monotonically shrinking** from hands-on operator (now, "Level 0") to optional observer ("Level 4+"). The underlying bet: AI models are converging in raw intelligence, so *the structure of thinking* — methodology — becomes the differentiator; a well-disciplined loop on today's models can outthink an undisciplined call to a smarter one.

Key planned pieces, all designed on paper but **not built**:

- **`/intuit`** — a "hunch" discipline that matches a new problem against the archive of past findings by deep structure (not surface words) and predicts what will work, with its predictions later scored against reality.
- **The meta-loop** — an orchestrator that runs *many* inquiry loops, in parallel "heads," compares them, decides what to pursue next, and eventually picks its own questions. A six-level autonomy ladder for this is specified in detail.
- **Three-layer quality awareness** — automatic checks for "structurally broken," "feels off," and "actually turned out wrong over time," so the system can tell improvement from regression without a human. Today the human is all three layers.
- **A measurable self-improvement rate** — 15 concrete measurement questions are already defined (how fast errors get fixed, how often "improvements" get reverted, etc.); collecting the data hasn't started.
- **A materialization lifecycle** — a governed path from "the system decided something" to "files actually changed," with plans, critics, and validation. Practiced a few times in `devdocs/materializations/`, not yet routine.

There are also "half-baked" seeds for a possible productized future (a multi-agent "alignment mesh" for autonomous software development), which read as early vision documents rather than active work.

---

## Who would use this, and why

Today, realistically: **its author** — a solo developer-researcher using it daily as a thinking amplifier and as the subject of its own research. Anyone else could run one install script and get the slash-commands in their own Claude Code; the disciplines are deliberately domain-agnostic (they work on business questions or design problems as well as code). The output is always *reports and decisions*, not running software.

---

## Honest assessment of the state of things

**Solid and real:** the discipline library, the three runners, the protocols, the folder-based inquiry system, the install scripts, the large self-referential archive of findings, the snapshot/regression recipe. This core has clearly been iterated hard (specs carry dated refinement layers; failed approaches are preserved in `non-active/` and `archived_skills/` rather than deleted — the project's own convention).

**Aspirational / not built:** everything autonomous. There is no `/intuit`, no meta-loop runner (an old draft sits in `non-active/`), no automated quality checks (a `tools/structural_check.sh` script the runners reference **does not exist** — the specs anticipate this with a manual fallback), no measurement collection, no automation of any kind. The human types every command and judges every output. The docs themselves are candid about this — several openly mark concepts as "fuzzy," "placeholder," or "half-baked."

**Vestigial clutter:** a Python-publishing GitHub workflow with no Python package, a populated `.venv` with no project code using it, an out-of-date README alongside the current one, and a `docs/mixed/random_notes.md` scratchpad. None of it affects the working system.

**Overall shape:** a serious, unusually self-aware, pre-product research system — about 7,300 lines of carefully-engineered "executable prose" plus a 3,000-file lab notebook — currently at the "manually-cranked engine that works" stage of a roadmap whose later stages (self-steering, self-measurement, self-modification) exist only as detailed blueprints.
