# Worker Loop Logic

A loop runner is the operational substrate that turns a set of thinking disciplines into a system. This file describes what a loop runner is, why it's the right shape for the operational layer, what design choices every loop runner makes, what the currently-active worker loop runners (`/MVL` classic + `/MVLw` extended) look like, and how the meta-loop sits one level above them.

---

## 1. Why a Loop Is the Right Operational Component

Thinking disciplines (`/sense-making`, `/innovate`, `/td-critique`, `/surfacing`, `/decompose`, etc.) are tools. Each performs *one* cognitive transform — a different one per discipline: `/sense-making` turns ambiguity into structured understanding; `/innovate` turns a problem into candidate ideas; `/td-critique` turns candidates into verdicts; `/surfacing` turns a bounded territory into relevance-tagged items; `/decompose` turns a complex whole into tractable pieces with interfaces. Used individually, they're useful. Used in **composition**, they compound.

The loop is what makes composition possible:

- **Sequencing.** A discipline's output feeds the next discipline's input. The loop runner enforces the order so the information flow is one-directional and predictable.
- **Traversal step.** Each loop run is one step through thinking space; the meta-loop one level above sequences many such steps across inquiries (see Section 6). The operative iteration is at the meta-loop layer, not inside an individual loop run. The runners also support within-inquiry iteration (narrow-focus re-run if a single pass doesn't answer the question) as a backstop.
- **State.** The loop maintains durable state (`_state.md`, discipline output files) so an inquiry persists across sessions and across AI sessions. The folder IS the inquiry.
- **Composition.** Disciplines compose into loops; loops compose into traversals across many inquiries. Errors don't compound because each step is gated by the next — bad sensemaking surfaces as bad innovation candidates that critique kills before they ship.
- **Self-improvement substrate.** Because the disciplines are themselves things the loop can be applied to, the loop is the substrate for the system improving itself. A SIC loop applied to a failing discipline's spec produces a refined spec that the next run uses.

Without the loop, disciplines stay as one-shot tools and improvement is linear per discipline. With the loop, improvements compound: better sensemaking produces better innovation input, which produces sharper critique, which provides better feedback to the next sensemaking. The loop is the engine; the disciplines are what it runs.

---

## 2. What a Loop Runner Is (and Is Not)

A loop runner is **operational plumbing for iterative thinking.** It is *not* a thinking discipline — it does not transform understanding, produce ideas, or evaluate anything. It connects the disciplines into an iterative process.

Every loop runner addresses three concerns:

- **Sequencing** — what runs in what order
- **Steering** — what to do next at iteration boundaries
- **State** — how to resume across sessions

The architecture separates three roles:

- **Disciplines** do the thinking. Each transforms inputs into outputs at full depth via its own command (`/sense-making`, `/innovate`, `/td-critique`, `/surfacing`, `/decompose`).
- **The loop runner** does the plumbing. Sequences disciplines, tracks state, manages folders, decides which discipline to run next.
- **The steering component** does the wayfinding. Worker loops use implicit narrowing for within-inquiry steering. For across-inquiry steering at the meta-loop layer, `/routeman` is the active discipline — it enumerates possible next moves from the current state with movement-type tags and per-route guidance, without itself selecting which move to take.

---

## 3. The Currently-Active Worker Loop Runners

Two worker loop runners are shipped in `cognitive_harness/`:

### `/MVL` — The Classic Loop

**Pipeline:** Sensemaking → Innovation → Critique.

**Positioning:** SIC is the architectural primitive. Every cognitive task is a SIC loop applied to a different question. Use `/MVL` for simple well-defined problems when speed matters.

If S→I→C is the primitive, then:
- The pipeline is always the same — no classification or selection needed.
- The runner's job is plumbing, not problem-typing.
- The interesting variable is **the question**, not the pipeline.

### `/MVLw` — The Extended Loop (Surfacing variant)

**Pipeline:** Surfacing → Sensemaking → Decomposition → Innovation → Critique.

**Positioning:** Default for new inquiries. Use `/MVLw` when the territory needs surfacing or the problem has internal structure worth partitioning before innovation.

The structural rationale: the first phase of any non-trivial inquiry needs richer scaffolding than sensemaking alone provides. The territory must be surfaced (relevance-tagged items drawn from a bounded scope) before sensemaking can anchor meaning in it. Complexity must be partitioned (decomposition) before innovation operates against the whole. Without those upstream steps, sensemaking risks anchoring on superficial features and innovation operates on an unpartitioned whole.

### What each added discipline contributes

**Surfacing (Su).** Draws relevance-tagged items from a bounded territory into the inquiry's present attention. Produces: a workspace (items read with per-item relevance tags) + a thin artifact (traversal trace + state summary, no item content). Output saved as `surfacing.md`. Surfacing produces the relevance-tagged field that sensemaking then reduces.

**Decomposition (D).** Partitions the now-stable problem into independently coherent pieces with explicit interfaces. Produces: a coupling map, boundary set, question-tree of sub-problems, dependency order. Output saved as `decomposition.md`. Decomposition surfaces internal structure so innovation can operate on tractable pieces.

### Why this order: Su → S → D → I → C

Each step prepares the input for the next:

- **Su before S** — surfacing draws the relevance-tagged field; sensemaking reduces it. Reverse the order and sensemaking has nothing to reduce *from*.
- **S before D** — decomposition needs a stable problem model to partition. Decomposing an ambiguous whole produces arbitrary boundaries.
- **D before I** — innovation works better on tractable pieces than on the unpartitioned whole.
- **I before C** — you can't critique what doesn't exist.

The first three (Su → S → D) form the first phase — strict sequence, no shortcuts. The last two (I → C) operate on the prepared problem.

---

## 4. Shared Operational Machinery

Both `/MVL` and `/MVLw` use the same operational shape. They differ in pipeline length and the upstream-discipline addition; everything else carries over.

### Three lifecycles

1. **NEW** — input is a question. The runner creates the inquiry folder (`devdocs/inquiries/<YYYY-MM-DD_HH-MM__slug>/`), writes `_branch.md` (question + goal + scope check + optional Layer Commitment / Synthesis Trigger sections for `/MVLw`) and `_state.md` (flow-type + pipeline + progress + iteration + status + next discipline), and begins the pipeline immediately.
2. **RESUME** — input is an existing folder path. The runner reads `_state.md`, verifies `flow-type` matches (`classic` for `/MVL`; `extended-surfacing` for `/MVLw`), determines where the pipeline left off by checking which discipline output files exist, and continues from the first incomplete discipline.
3. **ITERATION COMPLETE** — all discipline files for the current iteration exist. The runner evaluates whether the question is answered. YES → load CONCLUDE protocol and compile `finding.md`. NO → narrow the focus, increment iteration, reset progress, run another pipeline pass.

The `flow-type` field is a guardrail: it prevents `/MVL` from resuming an `extended-surfacing` inquiry and vice versa.

### Discipline transition protocol

Between disciplines, both runners follow this protocol:

```
1. Display checkpoint (telemetry from previous discipline + structural check result)
2. Load the discipline spec via Skill tool
   ├─ Skill succeeds → execute the loaded spec
   ├─ Skill fails → fall back to Read on the discipline's command file
   └─ Read also fails → HALT and tell the user how to run manually
3. Execute the spec at full depth; discipline saves output to inquiry folder
4. Run structural check on the saved output
   └─ If FAIL → fix the missing sections, re-save, re-run check
5. Update _state.md (check off discipline, set next)
6. Continue immediately to next discipline
```

two things matter:

- **Skill-tool-with-Read-fallback.** Disciplines are not executed from memory. The runner freshly loads each discipline's spec on every transition. If a discipline's spec evolves between sessions, the loop runner uses the current version.
- **HALT-with-manual-fallback.** If both Skill and Read fail, the runner does NOT improvise. It halts and tells the user how to run the discipline manually.


### Finding compilation (CONCLUDE protocol)

When the runner decides the question is answered, the CONCLUDE protocol (`cognitive_harness/protocols/conclude.md`) compiles a `finding.md` reading from the discipline outputs + `_branch.md`. For `/MVL`, that's 4 source files (`_branch.md` + `sensemaking.md` + `innovation.md` + `critique.md`). For `/MVLw`, that's 6 (`_branch.md` + `surfacing.md` + `sensemaking.md` + `decomposition.md` + `innovation.md` + `critique.md`).

The finding follows a fixed template (Question → Finding Summary → Finding → Next Actions → Reasoning → Open Questions) with style rules (hedging specificity, cross-reference format, gate specificity). The finding is self-contained — a reader who has not seen the discipline outputs can understand the inquiry's question, the answer, the alternatives considered, and the open frontiers from the finding alone.

After CONCLUDE, the discipline output files move into `docarchive/`. The inquiry folder root contains `_branch.md`, `_state.md`, `finding.md`, and `docarchive/`.

### Cross-session resume

Either runner invoked on an existing inquiry folder reads `_state.md`, sees where the pipeline stopped, loads the next discipline's spec via Skill tool, and continues. Any session, any AI.

Three pieces make this work:
1. `_state.md` as source of truth — pipeline, progress checkboxes, iteration count, next discipline, history, flow-type.
2. File-existence cross-check — discipline output files match the progress checkboxes; if inconsistent, the runner flags it.
3. Skill-tool spec loading — even in a cold session, the Skill tool loads the discipline spec fresh.

The principle: **state lives in files, not in conversation context.** A session crash, a new AI instance, a context-window reset — none of these lose the inquiry. The folder is the truth.

### Improvement-observation mechanism

After ITERATION-COMPLETE, both runners optionally prompt the user for an observation about the run. If the user provides one, it's appended to `devdocs/improvement_observations.md` with date, problem, and iteration count. If skipped, nothing happens.

This is system-improving-system. When patterns emerge across multiple observations, the user can run a loop on the improvement-observations file itself — a SIC (or extended) loop on the system's own feedback. The same primitive that runs the cognitive loop evaluates and improves the loop.

### Within-inquiry iteration (backstop)

When a pipeline completes and the question isn't yet answered, the runner narrows the focus and re-runs. The refinement is **narrowing**, not pivoting: if the question contains hidden sub-questions, the next iteration picks the one most-load-bearing for the goal and runs the pipeline on just that. Other sub-questions surface as related inquiries or DEFERRED items in the eventual finding.

Termination is implicit: when the ITERATION-COMPLETE check evaluates "is the question answered?" as YES, the loop terminates. No max-iteration cap, no convergence telemetry across iterations.

---

## 5. The Eight Design Dimensions

Every loop runner makes a choice on each of these dimensions.

| # | Dimension | What it asks | `/MVL` | `/MVLw` |
|---|---|---|---|---|
| 1 | Drive Mode | Does the human type each discipline command, or does the runner chain them? | Auto-chained | Auto-chained |
| 2 | State Tracking | How does the runner know where it is in the pipeline? | Structured `_state.md` + file-existence cross-check | Same + `flow-type` field as guardrail |
| 3 | Steering | What decides what comes next at iteration boundaries? | Implicit narrowing | Implicit narrowing |
| 4 | Iteration File Management | What happens to an iteration's output files when iteration N+1 runs? | Overwrite during iteration; archive to `docarchive/` on terminate | Same (5 files archived instead of 3) |
| 5 | Pipeline Flexibility | Is the discipline sequence fixed or variable? | Fixed (S → I → C) | Fixed (Su → S → D → I → C) |
| 6 | Branch Parallelism | When decomposition produces sub-problems, do they run sequentially, in parallel, or both? | No decomposition | Decompose discipline runs; same pipeline applied to whole (not per-branch sub-pipelines) |
| 7 | Synthesis | When an inquiry terminates, what does it produce? | Folder-local `finding.md` (CONCLUDE) | Same (6 source files instead of 4) |
| 8 | Cross-Inquiry Learning | Does anything carry from one completed inquiry to the next? | None within the worker layer | None within the worker layer |

The structural identity: both runners are auto-chained fixed-pipeline loop runners with structured state and implicit narrowing. They differ in (a) pipeline length, (b) the upstream discipline (none vs `/surfacing`), and (c) the flow-type binding (`classic` vs `extended-surfacing`). Cross-inquiry learning is the meta-loop layer's responsibility, not the worker loop's.

---

## 6. The Meta-Loop — One Level Above

A worker loop (`/MVL`, `/MVLw`) solves ONE inquiry — one question, one answer. The **meta-loop** is the layer above: it traverses ACROSS inquiries, deciding which inquiry to run next, which prior finding to revisit, when to branch, when to merge, when to stop traversing.

The clean phrase: **the meta-loop is a stateful traversal engine for thinking space.**

A more intuitive phrase: **the meta-loop is a controlled whirl through the project's inquiry artifacts.** It consumes findings, navigation/routeman maps, reflections, corrections, and open questions, then moves through them. `/routeman` gives it sight. The worker loops give it hands. `_meta_state.md` gives it memory. Meaningful traversal tells it whether it is thinking or just spinning.

### Input: seed plus context

The meta-loop's input is **seed plus context**.

The **seed** is the thing that starts movement. It can be a user question, a completed `finding.md`, a folder of related inquiries, a routeman map, a correction chain, a process failure, or a project-level goal.

The **context** is the artifact terrain around that seed: prior findings, branch relationships, open questions, reflection outputs, old routeman maps, correction history, and relevant project docs.

A meta-loop is artifact-native. It starts from existing work, not only from a fresh prompt.

### Movement vocabulary

The meta-loop turns artifacts into movement:

- **Forward** — turn a frontier question into a new worker-loop inquiry.
- **Backward** — revisit an older finding when new evidence changes the conditions under which that finding survived.
- **Sideways** — try a different frame or approach.
- **Down** — deepen one survivor.
- **Up** — consolidate multiple findings into a higher-level model.
- **Branch** — launch multiple worker-loop heads from one routeman map.
- **Merge** — compare and integrate branch outputs.
- **Stop** — when the current traversal has enough coverage, convergence, depth, directedness, and productivity for the goal at hand.

### What "thinking space" means here

"Thinking space" is not a fixed map that can be fully discovered. Every worker-loop run creates artifacts. Those artifacts create new questions, contradictions, possible revisits, and possible branches. The space changes as the meta-loop moves.

The target is **bounded meaningful traversal**: explore the region around a seed enough to answer the goal, expose important branches, repair earlier mistakes, or decide that more movement is not worth the cost.

### Operational shape

```
seed + context
-> create/update _meta_state.md
-> run a worker loop (/MVL or /MVLw)
-> run /routeman on the result
-> select one next move
-> run next worker loop
-> update _meta_state.md
-> stop or continue
```

Every worker loop run produces artifacts the meta-loop consumes. The folder convention (`_branch.md`, `_state.md`, `finding.md`, `docarchive/`, `branches/`) is designed so the artifacts are durable and the meta-loop reads them.

---

## 7. Design Principles

- **Separation of concerns.** Disciplines / runner / steering = three roles. Each has a clear job. Composition rather than monolith.
- **Human in the loop.** Every step is visible and overridable. The human can interrupt, redirect, or kill at any point. Auto-chain means "don't make me type each command," not "unattended."
- **State persistence.** `_state.md` captures everything needed to resume. Any AI, any time, can pick up an inquiry mid-loop. No special tooling required.
- **Folder-as-structure.** The file system IS the thinking structure. Folders are inquiries; files are discipline outputs; subfolders are branches. No database, no UI — just markdown.
- **Discipline independence.** Each discipline runs via its own command at full depth. The runner doesn't compress, simplify, or short-circuit the disciplines — it just sequences them.

---

## 8. Strict Rules

- **Always the full pipeline.** Every question gets the full loop. No shortcuts. No variable pipelines.
- **Each step saves to the inquiry folder.** Discipline commands point at the folder; output saves alongside.
- **`_state.md` is the source of truth.** Progress, iteration count, history, next discipline, flow-type.
- **If the question isn't answered, narrow and loop again.** The answer-quality check is the cap; no max-iteration cap.
- **The human can redirect at any point.** Auto-chained does not mean unattended.
- **Failures are data.** When the loop produces a bad answer, the where/why feeds back to discipline-spec improvement via the improvement-observations mechanism.
- **Never execute a discipline from memory alone.** The Skill-then-Read protocol prevents drift between what the AI thinks the spec says and what the spec actually says.
- **Each inquiry stays bound to its starting runner.** `flow-type` in `_state.md` prevents `/MVL` from resuming an `extended-surfacing` inquiry and vice versa.
