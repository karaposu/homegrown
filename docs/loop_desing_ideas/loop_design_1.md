# Loop-Runner Design — Notes 1

This document is design-rationale notes for the project's loop runners. It is not a spec. The canonical specs live in `commands/inquiry.md`, `commands/MVL.md`, and `commands/MVL+.md`.

The purpose of this file is to articulate the **design dimensions** every loop runner has to make a choice on, so that the three current runners can be compared, and so that future redesigns have a stable taxonomy to argue against.

---

## What a Loop Runner Is

A loop runner is operational plumbing for iterative thinking. It is **not** a thinking discipline — it doesn't transform understanding, produce ideas, or evaluate anything. It connects the disciplines into an iterative process.

Three concerns every loop runner addresses:

- **Sequencing** — what runs in what order
- **Steering** — what to do between iterations
- **State** — how to resume across sessions

## Design Roles

The architecture separates three roles. Confusing them produces bad designs.

- **Disciplines** do the thinking. Each transforms inputs into outputs at full depth via its own command (`/sense-making`, `/innovate`, `/td-critique`, `/decompose`, etc.).
- **The loop runner** does the plumbing. Sequences disciplines, tracks state, manages folders, decides which discipline to run next.
- **The steering component** does the wayfinding. Between iterations, decides whether to broaden, narrow, shift, terminate, etc.

A new loop runner that collapses these roles (e.g., embeds discipline logic directly into the runner) is doing something different — and probably worse, because the disciplines are designed to run at full depth, not in compressed inline form.

---

## Design Dimensions

Each dimension is a slot every loop runner has to fill. The current three runners (`/MVL`, `/MVL+`, `/inquiry`) make different choices.

### 1. Drive Mode

**The question:** does the human type each discipline command, or does the runner chain them automatically?

**Choices:**
- **Auto-chained** — runner invokes each discipline in sequence; human can interrupt
- **Human-typed-per-step** — human runs each discipline command, returns to the runner between
- **Hybrid** — auto-chain within an iteration, pause only at steering checkpoints

**Tradeoff:** Auto is faster and less error-prone for routine work. Human-typed gives explicit control points and forces engagement at each step (but is slower and creates more places to make mistakes). Hybrid captures both.

| | /MVL | /MVL+ | /inquiry |
|---|---|---|---|
| Choice | Auto-chained | Auto-chained | Human-typed-per-step |

---

### 2. State Tracking Mechanism

**The question:** how does the runner know where it is in the pipeline?

**Choices:**
- **File-existence checks** — `sensemaking.md` exists? then S is done
- **Structured state in a file** — read `_state.md`, parse the progress section
- **Runtime memory** — no persistence; doesn't survive across sessions

**Tradeoff:** File-existence is simple but fragile (renames break it; partial outputs confuse it). Structured state is robust but requires explicit updates. Runtime memory works for single sessions only — no cross-session resume.

| | /MVL | /MVL+ | /inquiry |
|---|---|---|---|
| Choice | Structured + file-existence cross-check | Same | Same |

All three converged on the same choice. `_state.md` is the source of truth; file existence is verified as a sanity check.

---

### 3. Steering / Wayfinding Component

**The question:** between iterations, what decides what comes next?

**Choices:**
- **No explicit steering** — loop until termination condition met; no mid-loop course correction
- **Implicit narrowing** — each iteration narrows focus based on what the previous iteration revealed
- **Inlined wayfinding** — runner runs steering logic directly, produces a move
- **Externalized wayfinding** — runner calls a separate `/wayfinding` command that produces its own saved output
- **Rich move taxonomy** — explicit move set (BROADEN / NARROW / SHIFT / DIAGNOSE / TERMINATE / RECONSIDER) rather than just narrow-or-stop

**Tradeoff:** No steering = simplest, but loops can drift. Implicit narrowing = covers the common case with no overhead. Rich taxonomy = expressive but more to learn. Externalizing wayfinding into its own command preserves auditability (the steering decision becomes a saved file, reviewable later).

| | /MVL | /MVL+ | /inquiry |
|---|---|---|---|
| Choice | Implicit narrowing | Implicit narrowing | Rich move taxonomy, currently inlined |

The "currently inlined" qualifier on `/inquiry` matters: a future revision could externalize wayfinding into `/wayfinding <folder>` so the steering move itself is saved as `wayfinding.md`. The current inlined form works but doesn't leave a separately-auditable record.

---

### 4. Iteration File Management

**The question:** what happens to an iteration's output files when iteration N+1 runs?

**Choices:**
- **Overwrite** — iteration N+1's `sensemaking.md` overwrites N's
- **Per-iteration sub-folders** — `iter_1/`, `iter_2/`, etc.
- **Versioned filenames** — `sensemaking_v1.md`, `sensemaking_v2.md`
- **Archive on termination** — move to `docarchive/` when the finding is written

**Tradeoff:** Overwrite is simple but loses iteration history. Sub-folders preserve everything but multiply the file count. Versioning is a middle ground but clutters listings. Archive-on-termination preserves the final iteration only.

| | /MVL | /MVL+ | /inquiry |
|---|---|---|---|
| Choice | Overwrite during iteration; archive on termination | Same | Overwrite during iteration |

`/MVL` writes a `finding.md` and moves the per-iteration discipline outputs to `docarchive/`. `/inquiry` does not currently archive — its outputs stay in the inquiry folder until the human cleans up. This is a real difference.

---

### 5. Pipeline Flexibility

**The question:** is the discipline sequence fixed at runner-startup, or can it change?

**Choices:**
- **Fixed pipeline** — always runs the same disciplines in the same order
- **Variable by classification** — runner classifies the problem and selects a pipeline
- **Mid-execution flexible** — pipeline can change during the run based on intermediate results

**Tradeoff:** Fixed = predictable, less to learn, matches the claim that "S→I→C is the only primitive." Variable = matches the problem shape to a method. Mid-execution flexible = most powerful but hardest to reason about and hardest to resume cleanly.

| | /MVL | /MVL+ | /inquiry |
|---|---|---|---|
| Choice | Fixed (S → I → C) | Fixed (E → S → D → I → C) | Variable by classification (5 problem types → 6 pipelines) |

`/inquiry` does not yet support clean mid-execution pipeline change — its RECONSIDER wayfinding move flags the need, but the actual pipeline change is human-driven, not runner-managed. This is a known weak point.

---

### 6. Branch Parallelism

**The question:** when decomposition produces sub-branches, do they run sequentially, in parallel, or both?

**Choices:**
- **No decomposition support** — runner doesn't recognize sub-problems; whole inquiry runs as one
- **Sequential branches** — sub-branches run one after the other
- **Parallel branches with coordination** — branches run independently; runner coordinates cross-branch state and merging

**Tradeoff:** No decomposition = can't handle Complex problems whose sub-problems need different treatment. Sequential = simple but slow for independent branches. Parallel = fastest but needs coordination machinery (which branch's output feeds which next step? when do we merge?).

| | /MVL | /MVL+ | /inquiry |
|---|---|---|---|
| Choice | No decomposition | Decompose discipline, but same pipeline applied to whole | Per-branch sub-pipelines, sequential execution |

Only `/inquiry` contemplates different pipelines per sub-problem. None of the three currently support parallel branch execution — the folder structure could support it (each branch gets its own folder), but no runner manages multi-branch coordination.

---

### 7. Synthesis / Deliverable Production

**The question:** when an inquiry terminates, what does it produce?

**Choices:**
- **Folder-local finding** — a `finding.md` written inside the inquiry folder
- **Project-level deliverable** — a feature spec, ADR, or document saved to a project location outside the inquiry folder
- **Underspecified** — "compile everything into a document" with no defined process
- **No deliverable** — just stop the loop; outputs scattered across iteration files

**Tradeoff:** Folder-local = simple but the deliverable is buried in `devdocs/inquiries/`. Project-level = useful for the rest of the project but requires synthesis intelligence (a SYNTHESIZE discipline that compresses the inquiry tree into something coherent). Underspecified = the current minimum viable; works but quality varies.

| | /MVL | /MVL+ | /inquiry |
|---|---|---|---|
| Choice | Folder-local `finding.md`; outputs archived to `docarchive/` | Same | Project-level deliverable via SYNTHESIZE step (currently underspecified) |

A proper synthesis discipline would benefit all three runners but is most load-bearing for `/inquiry` (where the SYNTHESIZE step is currently the weakest part of the spec).

---

### 8. Cross-Inquiry Learning

**The question:** does anything carry from one completed inquiry to the next?

**Choices:**
- **None** — each inquiry starts fresh
- **Persistent lessons store** — a file or directory that accumulates findings; new inquiries read it
- **REFLECT discipline** — an explicit discipline that synthesizes lessons across multiple inquiries

**Tradeoff:** None = simple, no risk of stale lessons polluting new inquiries. Persistent store = lessons compound but require pruning. REFLECT = highest quality cross-inquiry synthesis, most overhead.

| | /MVL | /MVL+ | /inquiry |
|---|---|---|---|
| Choice | None | None | None (REFLECT planned but not built) |

All three converge on "none" today. This is the most-frequently-mentioned future improvement across the runners.

---

## Design Principles

Choices the architecture makes consistently across all three runners. A new runner that violates these is doing something structurally different — possibly intentionally, but the divergence should be explicit.

- **Separation of concerns.** Disciplines / runner / steering = three roles. Each has a clear job. Composition rather than monolith.
- **Human in the loop.** Every step is visible and overridable. The human can interrupt, redirect, or kill at any point. Auto-chain doesn't mean unattended — it means "don't make me type each command."
- **State persistence.** `_state.md` captures everything needed to resume. Any AI, any time, can pick up an inquiry mid-loop. No special tooling required.
- **Folder-as-structure.** The file system IS the thinking structure. Folders are inquiries; files are discipline outputs; subfolders are iterations or branches. No database, no UI — just markdown.
- **Discipline independence.** Each discipline runs via its own command at full depth. The runner doesn't compress, simplify, or short-circuit the disciplines — it just sequences them.

These principles cap the complexity of any single runner and define what a "loop runner" means in this project.

---

## At-a-glance comparison

| Dimension | /MVL | /MVL+ | /inquiry |
|---|---|---|---|
| Drive mode | Auto-chained | Auto-chained | Human-typed-per-step |
| State tracking | Structured + file-existence | Same | Same |
| Steering | Implicit narrowing | Implicit narrowing | Rich move taxonomy (inlined) |
| Iteration files | Overwrite + archive on terminate | Same | Overwrite (no archive) |
| Pipeline flexibility | Fixed (S→I→C) | Fixed (E→S→D→I→C) | Variable by classification |
| Branch parallelism | None | Decompose, same pipeline | Per-branch sub-pipelines, sequential |
| Synthesis | Folder-local `finding.md` | Same | Project-level via SYNTHESIZE |
| Cross-inquiry learning | None | None | None |

---

## Why "Notes 1"

This is the first iteration of explicit loop-runner design thinking. The current three runners accumulated incrementally — `/inquiry` first as a rich orchestrator, then `/MVL` as the "let me just run S→I→C without overhead" simplification, then `/MVL+` as the extended-fixed-pipeline middle ground. This document retroactively articulates the design dimensions they vary on.

Future notes (`loop_design_2.md` and beyond) might:
- Propose unifying the three into one runner with mode flags
- Specify a parallel-branch coordination scheme
- Specify a REFLECT discipline for cross-inquiry learning
- Specify externalized wayfinding as `/wayfinding`

Each of those proposals would benefit from arguing against the dimensions in this document, not from scratch.
