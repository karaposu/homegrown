# Intro to the Codebase — How Homegrown Is Put Together

This is an architecture walkthrough, not a feature tour. The goal: get a new engineer from "I cloned the repo" to "I can read any file and know what it's for."

## 1. The first surprise: there is almost no executable code

Open the repo and you will look for `src/`, a `package.json`, a `Cargo.toml`, an entry point. You will not find them. The repo is overwhelmingly markdown. Two shell installers, a couple of helper scripts, and otherwise: prose specifications.

That is the architecture. The "program" that runs here is an LLM agent (Claude Code, Codex, Cursor). The "code" is the set of structured prompts that tell the agent how to think. When a user types `/MVL+ "should we keep decomposition in the pipeline?"`, the agent loads a markdown file (`cognitive_harness/MVL+/SKILL.md`), follows its instructions, and produces files on disk. The agent is the runtime; the markdown is the program.

Once that frame clicks, the rest of the layout makes sense. Treat each `SKILL.md` like a function body, each `references/<name>.md` like a library it imports, each `protocols/*.md` like a subroutine, and each `_state.md` like a struct that persists between invocations.

## 2. The four top-level abstractions

Everything in `cognitive_harness/` (the implementation root) is one of four things:

**Disciplines.** Atomic cognitive operations. Each one transforms input into a specific kind of output: `sense-making` turns ambiguity into structured understanding, `innovate` generates candidate ideas, `td-critique` evaluates them, `explore` maps unknown territory, `decompose` partitions complexity into a question tree, `comprehend` builds predictive models of opaque artifacts, `reflect` reviews a completed run, `navigation` enumerates possible next moves. Each lives in its own folder with the shape:

```
<discipline-name>/
  SKILL.md                    ← runtime spec (the "header"): name, description, steps
  references/<name>.md        ← framework reference (the "implementation depth")
  warmup/                     ← optional, e.g. navigation has prep procedures
```

The `SKILL.md` is short and procedural. It always begins with a **Step 0 — Mandatory pre-read** that forces the agent to load the reference file before doing anything else. The reference file is where the actual framework lives: failure modes, sub-procedures, vocabulary, telemetry definitions. This split keeps the slash-command surface small while letting the discipline's full machinery be deep.

**Loop runners.** Orchestrators that chain disciplines into pipelines. There are three:

- `MVL/SKILL.md` — the SIC loop: Sensemaking → Innovation → Critique.
- `MVL+/SKILL.md` — the extended ESDIC loop: Exploration → Sensemaking → Decomposition → Innovation → Critique.
- `meta-loop/SKILL.md` — a traversal engine that runs `MVL+` and `navigation` in repeated cycles, with the human selecting moves between iterations.

Runners do not contain the disciplines' logic. They sequence disciplines, manage on-disk state, and decide when to stop. A runner that needs to know how to make sense of something does not reimplement sensemaking — it `Skill`-invokes the `sense-making` discipline.

**Protocols.** Shared subroutines that runners load on demand. They live in `cognitive_harness/protocols/`:

```
conclude.md                    ← compile finished pipeline into finding.md
branch_inquiry.md              ← create a child inquiry under an existing parent
loop_diagnose.md               ← diagnose a failing loop run
outcome_review.md              ← evaluate whether outcomes met intent
spec_governance.md             ← rules for editing discipline specs themselves
artifact_materialization.md
multi_resolution_navigation.md
navigation_context_intake.md
resume.md
```

Protocols are **loaded, not pre-imported**. Each begins with a "Loading note" that says: *read this file in full before executing it*. The runner's `SKILL.md` says, in effect, "when you hit step N, load `protocols/conclude.md` and follow it." This keeps the runner spec small and lets protocols evolve independently.

**Contracts.** Shared vocabulary, not executable. `cognitive_harness/contracts/alignment_control.md` defines the record shape and field names that other protocols and disciplines use when they need to talk about alignment. A contract is something you reference; it never runs.

## 3. How a single invocation flows end-to-end

Walk through `/MVL+ "is decomposition pulling its weight?"` from first keystroke to final artifact:

1. **The runner loads.** The agent loads `cognitive_harness/MVL+/SKILL.md`. The skill's frontmatter (`name: MVL+`, `description: ...`) is what registered `/MVL+` as a slash command on install.

2. **An inquiry folder is created.** Under `devdocs/inquiries/<YYYY-MM-DD_HH-MM__slug>/`, the runner writes two files:
   - `_branch.md` — the question, the goal, a scope check.
   - `_state.md` — pipeline declaration, progress checkboxes, iteration count, status, next discipline, history.

   This folder is the inquiry's entire on-disk life. Everything else attaches to it.

3. **Disciplines run sequentially.** For each step (E, S, D, I, C), the runner:
   - Invokes the discipline via `Skill(skill: "explore", args: ".../_branch.md")`. The discipline loads its own `SKILL.md`, which forces it to pre-read its `references/<name>.md`, then executes.
   - The discipline writes its canonical output (`exploration.md`, `sensemaking.md`, etc.) into the inquiry folder.
   - A structural check verifies required sections exist.
   - The runner updates `_state.md` (check off the completed discipline, set the next one).
   - Only then does the next discipline begin.

   There is an explicit invariant called the **Discipline Workspace Invariant** that bans the obvious shortcuts: don't run disciplines in parallel, don't pre-write later outputs, don't write multiple discipline files in one edit. Each discipline runs in its own focused workspace because each one needs to react to the *committed* output of the previous one, not an in-flight draft.

4. **Iteration complete → CONCLUDE.** When all five discipline files exist, the runner asks: *is the original question answered?* If yes, it loads `cognitive_harness/protocols/conclude.md` in full and follows it. CONCLUDE reads every discipline output plus `_branch.md`, compiles them into a single argumentative `finding.md` (per a precise template with style rules), moves the discipline outputs into a `docarchive/` subfolder, sets `_state.md` status to COMPLETE, and prints a brief pointer in the conversation. If the question is *not* answered, the runner resets the checkboxes, increments iteration, and runs the pipeline again with a narrower focus.

5. **The folder is now permanent.** A completed inquiry folder contains `_branch.md`, `_state.md`, `finding.md`, and `docarchive/` with the discipline intermediates. Any future session — any model, any AI — can read `_state.md` and know exactly what happened, what is next, and how to resume.

`devdocs/inquiries/` already holds ~65 such folders. That directory is the project's accumulated thinking.

## 4. The state machine lives on the filesystem

There is no database, no runtime process, no in-memory state across sessions. **The filesystem is the state machine.** `_state.md` is the source of truth — pipeline declaration, progress, iteration, status, next-discipline, history, relationships to other inquiries.

Resume is `/MVL+ <inquiry_path>/`. The runner reads `_state.md`, sees where the pipeline stopped, loads the next discipline's spec, and continues. A new Claude session, a different agent, or the user a week later all resume identically because the durable state is on disk in plain markdown.

This is the architectural payoff of the "markdown-as-program" choice. Anything the agent might need to remember has to be written down, which means every step is reviewable, diff-able, version-controllable, and portable across models.

## 5. Two parallel hierarchies: implementation and theory

The repo has a second top-level folder that mirrors the first:

```
cognitive_harness/    ← runtime specs (what gets installed and executed)
thinking_disciplines/ ← the theoretical case (why these disciplines, alignment theory, MVL design)
```

`cognitive_harness/` is the implementation — what the installer ships to `~/.claude/skills/`. `thinking_disciplines/` is the conceptual frame: `minimum_viable_loop.md` argues what "ignition" means and what would close the manual loop into a self-running one; `alignment_theory.md` lays out the six-layer alignment chain; `anatomy_of_disciplines.md` describes what a discipline IS as a concept.

These two trees are deliberately separated. Discipline runtime specs do not point into the theory folder, and the theory folder does not pretend to be runnable. The discipline is meant to stand on its own as an executable unit; the theory exists so a human can reason about *why* the discipline is shaped the way it is.

Around these two are:

- `docs/` — design notes that don't belong to a single discipline (autonomy ladder, thinking-space dynamics, consciousness north star, discipline taxonomy, design history per discipline under `docs/discipline_design_history/for_<discipline>.md`).
- `devdocs/` — operational workspace: `inquiries/` holds every run, `archaeology/` (this file's home) holds project-level overview docs, plus `materializations/`, `sensemaking/`, `navigation/`, `traces/`, working notes.
- `archived_skills/` — superseded specs kept for history.

## 6. The install path: how skills become slash commands

`install_for_claude.sh` and `install_for_codex.sh` are the bridges from the repo to the user's agent. The Claude installer:

1. Creates `~/.claude/skills/`.
2. For each discipline in a hardcoded list (`sense-making`, `innovate`, `td-critique`, `explore`, `decompose`, `comprehend`, `reflect`, `navigation`), downloads `SKILL.md` and the matching `references/<name>.md` to `~/.claude/skills/<skill>/`.
3. Does the same for the three loop runners (`MVL`, `MVL+`, `meta-loop`) — which have no `references/` subdir.
4. Also installs supporting protocols.

Each `SKILL.md` has frontmatter (`name`, `description`) — that frontmatter is the contract with Claude Code's plugin format. Claude registers the directory as a skill, the `name` becomes the slash command, the `description` lets Claude decide when to suggest it.

The script is idempotent. Re-running it updates everything in place. Codex installs similarly to `~/.codex/skills/`; Cursor is a manual copy.

## 7. The architectural pattern, named

If you want a single name for the pattern: **filesystem-driven cognition with late-bound subroutines.**

- *Filesystem-driven* — state, code, and history all live in plain markdown files in deterministic paths. There is no daemon, no in-memory cache, no implicit context.
- *Cognition* — the unit of work is not a function call but an LLM-mediated cognitive step (sense, generate, critique).
- *Late-bound subroutines* — protocols, references, and even discipline specs are loaded on demand at runtime, not pre-imported. The `Skill` invocation and the "load this file in full before executing" preamble are the binding mechanism. This keeps any single spec small and lets the system evolve without coordinated updates.

A consequence worth naming: **every step the system takes must be writable down.** If a fact only exists in the agent's transient context, it dies at the end of the session. That forcing function shapes everything — the heavy `_state.md`, the per-discipline output files, the CONCLUDE protocol's careful template, the rule that disciplines run in isolation and commit between handoffs.

## 8. What is messy or in transition

Honest notes on what does not line up cleanly:

- **A rename in flight.** The git status shows a wholesale move of `homegrown/` → `cognitive_harness/`. The README and the install scripts still point at `github.com/karaposu/homegrown/main`. Until the rename propagates to the install URLs, the project speaks two names: "Homegrown" (the project, the brand, the install URL) and "cognitive_harness" (the implementation folder). The mapping is one-to-one but the inconsistency is visible.
- **Multiple README drafts.** `README.md`, `README copy.md`, `README2.md` coexist; `README copy 2.md` was just deleted. The canonical README is in flux.
- **`/wayfinding` is referenced but not present.** The README lists it under boundary disciplines; the codebase has only `navigation/`. The README itself flags wayfinding as superseded by navigation, but the list entry remains. Expect documentation drift.
- **Stale reference files.** Several disciplines have `references/<name>_old.md`, `references/<name> copy.md` alongside the canonical reference. The redesign of `explore` and `sense-making` is visibly in progress.
- **The full loop does not yet run autonomously.** The README and `thinking_disciplines/minimum_viable_loop.md` are explicit about this. What exists today is *disciplines a human drives*. The pipeline is sequential markdown choreography; the runner does not yet self-evaluate quality between disciplines (it checks file existence, not telemetry). The project frames itself as building toward ignition, not having achieved it.
- **`meta-loop` is v1.** Its own spec calls itself "not autonomous multi-head execution yet — V1 is sequential and human-selected." It is a scaffold for the eventual self-running loop, not the thing itself.

## 9. One-paragraph recap

Homegrown is a thinking engine built as a collection of markdown-defined LLM skills. `cognitive_harness/` contains disciplines (atomic cognitive operations like sensemaking, innovation, critique), loop runners (`MVL`, `MVL+`, `meta-loop`) that sequence them, protocols (shared subroutines loaded on demand), and contracts (shared vocabulary). Each discipline is a folder with a runtime `SKILL.md` and a deeper `references/<name>.md`. Each run becomes an inquiry folder under `devdocs/inquiries/` containing `_branch.md`, `_state.md`, per-discipline outputs, and a final `finding.md` produced by the `conclude.md` protocol. State lives on the filesystem; the agent is the runtime; the markdown is the program. A parallel `thinking_disciplines/` tree holds the theoretical case for why the disciplines are shaped the way they are. The system is observably mid-transition (folder rename, redesigning references, in-flux READMEs) and openly aspirational about its endpoint — a self-running cognitive loop — while shipping useful per-discipline tooling today.
