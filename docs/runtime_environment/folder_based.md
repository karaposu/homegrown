# Folder-Based Inquiry System

A convention where the folder structure IS the thinking structure. Folders are inquiries (questions being investigated). Files are discipline outputs and inquiry state. The file system is the lineage tree and the resume mechanism — all in one.

> **The file system is isomorphic to the thinking structure.** If the thinking is a tree, the files are a tree. If an inquiry is active, its state file says so. If it concluded, its state file says so. Navigation is `cd` and `ls`. Traceability is folder hierarchy.

---

## Core Principle

Each question worth investigating becomes an inquiry. Each inquiry has a folder. The folder is created when the inquiry starts (by `/MVL`, `/MVL+`, or `BRANCH_INQUIRY`), filled by the thinking disciplines as the inquiry runs, and concluded by `CONCLUDE` once the question is answered.

The folder system makes inquiries physical — persistent, navigable, traceable, and resumable across sessions and across AI sessions.

---

## Where Inquiries Live

```
devdocs/
  inquiries/                              ← all inquiries (root + branch)
    YYYY-MM-DD_HH-MM__slug/               ← a root inquiry folder
      _branch.md                          ← inquiry identity
      _state.md                           ← current state + history
      exploration.md                      ← discipline output (E-S-D-I-C pipeline)
      sensemaking.md
      decomposition.md
      innovation.md
      critique.md
      finding.md                          ← compiled answer (written by CONCLUDE)
      docarchive/                         ← discipline outputs archived by CONCLUDE
        exploration.md
        sensemaking.md
        decomposition.md
        innovation.md
        critique.md
      branches/                           ← optional: child inquiries (BRANCH_INQUIRY)
        <child_slug>/
          _branch.md
          _state.md
          ...
  sensemaking/                            ← standalone /sense-making one-offs
  exploration/                            ← standalone /explore one-offs
  innovation/                             ← standalone /innovate one-offs
  decomposition/                          ← standalone /decompose one-offs
  critique/                               ← standalone /td-critique one-offs
```

**Root inquiries** are created by `/MVL` or `/MVL+` as `devdocs/inquiries/<YYYY-MM-DD_HH-MM__slug>/`. The slug is timestamp-prefixed for chronological ordering.

**Branch inquiries** are children of an existing inquiry, created by the `BRANCH_INQUIRY` protocol at `cognitive_harness/protocols/branch_inquiry.md`. They live under their parent at `<parent>/branches/<child_slug>/`. Nested branching is allowed — a branch can itself have a `branches/` subfolder.

**Standalone discipline runs** (one-off `/sense-making`, `/innovate`, `/explore`, `/decompose`, `/td-critique` without a loop) save into the discipline's own `devdocs/<discipline>/` folder. They are not part of the inquiry tree.

---

## The Inquiry File Inventory

Every inquiry folder — root or branch — uses the same two metadata files at the same lifecycle stages.

### Required at creation

#### `_branch.md` — Inquiry Identity

Created by: the runner (`/MVL`, `/MVL+`, or `BRANCH_INQUIRY`) at inquiry start. Written ONCE. Rarely modified.

Defines what this inquiry IS — the question, what a good answer looks like, scope, and relationships to other inquiries.

Template (for a `/MVL+` extended-pipeline root inquiry):

```markdown
# Branch: [name]

## Question
[The question, stated clearly in one sentence.]

## Goal
[What would a good answer look like? What would the user be able to DO with the answer?]

## Scope Check
[Does the question, if answered perfectly, cover everything the goal asks for?
Specific-vs-pattern check: if examples are named, does the inquiry address just those
examples or the broader pattern?]

## Relationships                          [optional]
- CONTINUES FROM: <inquiry_path> (context)
- SUPERSEDED BY: <inquiry_path> (reason)
- DIAGNOSES: <inquiry_path> (for loop_diagnose)
- COMPARES WITH: <inquiry_path>
- RELATED: <inquiry_path> (connection)
```

For branch inquiries, `BRANCH_INQUIRY` adds additional fields (`branch_from`, `branch_source`, etc.) — see `cognitive_harness/protocols/branch_inquiry.md`.

For correction-chain diagnostic inquiries, `LOOP_DIAGNOSE` adds a `## Correction Chain` section recording prior path, corrected path, and the raw human correction — see `cognitive_harness/protocols/loop_diagnose.md`.

#### `_state.md` — Current State + History

Created by: the runner at inquiry start. Updated through the inquiry's life by the runner (NOT by disciplines — disciplines write their own canonical file; the runner updates state).

Tracks: pipeline configuration, progress, iteration count, current status, next discipline, and a chronological history log.

Template (for `/MVL+` extended pipeline):

```markdown
# State: [name]

## Flow-type
extended                                      [or "classic" for /MVL]

## Pipeline
E → S → D → I → C (always)                    [or "S → I → C" for /MVL]

## Progress
- [ ] Exploration                             [omit for classic]
- [ ] Sensemaking
- [ ] Decomposition                           [omit for classic]
- [ ] Innovation
- [ ] Critique

## Iteration
1

## Status
ACTIVE                                        [or COMPLETE after CONCLUDE]

## Next Discipline
Exploration                                   [name of the next discipline; "—" when COMPLETE]

## Relationships                              [optional; mirrors _branch.md when applicable]

## History
- YYYY-MM-DD: Created. Question: [one-line summary]
- YYYY-MM-DD: [discipline] complete. [brief telemetry]
- ...
```

The `_state.md` is the **handoff document**. Any AI session or human reads it and knows: what is this inquiry's status, what happened so far, and what to do next. This is the file that makes multi-session work possible.

### Produced by the pipeline

The `/MVL+` extended pipeline produces five discipline outputs, in order:

| File | Discipline | Skill name |
|---|---|---|
| `exploration.md` | Exploration | `/explore` |
| `sensemaking.md` | Sensemaking | `/sense-making` |
| `decomposition.md` | Decomposition | `/decompose` |
| `innovation.md` | Innovation | `/innovate` |
| `critique.md` | Critique | `/td-critique` |

The classic `/MVL` pipeline produces three:

| File | Discipline | Skill name |
|---|---|---|
| `sensemaking.md` | Sensemaking | `/sense-making` |
| `innovation.md` | Innovation | `/innovate` |
| `critique.md` | Critique | `/td-critique` |

Each discipline writes its canonical output file directly in the inquiry root. The runner verifies the file exists (and runs a structural check if `tools/structural_check.sh` is available) before advancing to the next discipline.

### Multi-iteration handling

Iterations do NOT create iteration subfolders. They reuse the same canonical file names — each iteration overwrites the prior outputs. The iteration trail is captured in `_state.md` History entries.

If a record of prior-iteration content is needed, archive it explicitly (e.g., copy `sensemaking.md` to `docarchive/iteration_1__sensemaking.md`) before the next iteration runs — but this is opt-in capture, not the default.

### Written by CONCLUDE

When the runner decides the question is answered, `CONCLUDE` (`cognitive_harness/protocols/conclude.md`) produces:

| Action | Outcome |
|---|---|
| Compile `finding.md` | Single argumentative document combining the discipline outputs into the inquiry's answer, with reasoning, alternatives considered, and next actions |
| Create `docarchive/` | Subfolder for discipline outputs; the five (or three) discipline files move into it |
| Update `_state.md` | Status → COMPLETE; Next Discipline → "—"; append a History entry summarizing the iteration |

After CONCLUDE, the inquiry folder root contains: `_branch.md`, `_state.md`, `finding.md`, and `docarchive/`. The discipline outputs live in `docarchive/`. Branch subfolders (if any) live alongside under `branches/`.

---

## Branch Inquiries (Sub-Inquiries via BRANCH_INQUIRY)

When a finding raises a new question worth investigating in its own right, the user invokes `BRANCH_INQUIRY` to create a child inquiry. The child:

- Lives at `<parent>/branches/<child_slug>/` (one level deeper than the parent).
- Has its own `_branch.md` and `_state.md` — created by `BRANCH_INQUIRY` at the time of creation.
- Records its parent in `_branch.md` (`branch_from: <parent_path>`) and its source anchor (which specific bullet, section, or line in the parent's `finding.md` motivated the branch).
- Runs its own `/MVL` or `/MVL+` pipeline; CONCLUDEs to its own `finding.md`.
- Nested branching is allowed — a branch can have `<branch>/branches/<grandchild>/`.

The parent maintains an index file `_branches.md` listing its children. The index is informational; child completion is authoritative in the child's `_state.md`.

See `cognitive_harness/protocols/branch_inquiry.md` for the full BRANCH_INQUIRY protocol (input contract, validation, source anchor normalization, parent index update).

---

## Naming Conventions

| Pattern | Meaning |
|---|---|
| `_` prefix (`_branch.md`, `_state.md`, `_branches.md`) | Meta-file — about the inquiry itself, not discipline content |
| No prefix (`exploration.md`, `sensemaking.md`, `decomposition.md`, `innovation.md`, `critique.md`) | Discipline output — canonical name per discipline |
| `finding.md` | CONCLUDE output — the compiled answer |
| `docarchive/` | Discipline outputs after CONCLUDE archives them |
| `branches/<child_slug>/` | Child inquiries created by BRANCH_INQUIRY |

Root inquiry slugs use `YYYY-MM-DD_HH-MM__slugified_name` (creation-time timestamp + lowercased name with underscores). Branch slugs are derived from the child question; no timestamp prefix required.

---

## How the Disciplines Map to File Operations

### `/MVL+` or `/MVL` creates the folder

`/MVL+` (or `/MVL` for the classic pipeline) on a new question creates `devdocs/inquiries/<YYYY-MM-DD_HH-MM__slug>/`, writes `_branch.md` and `_state.md`, and begins the pipeline.

### Each discipline writes its canonical file

The runner invokes disciplines via the Skill tool (`/explore`, `/sense-making`, `/decompose`, `/innovate`, `/td-critique`). Each discipline reads `_branch.md` and prior discipline outputs, executes its full process (loading its `references/` spec at Step 0), and writes its canonical output (`exploration.md`, etc.) directly in the inquiry root.

### Runner updates `_state.md` between disciplines

After each discipline completes, the runner:
- Marks the discipline checked in `## Progress`.
- Updates `## Next Discipline`.
- Appends a `## History` entry summarizing the discipline's output.
- Runs a structural check on the output if available; records the result in History.

### `BRANCH_INQUIRY` creates child folders

When a child inquiry is needed, `BRANCH_INQUIRY` creates `<parent>/branches/<child_slug>/` with its own state files. The parent's `_branches.md` index is updated.

### `CONCLUDE` compiles + archives

When the runner decides the question is answered, `CONCLUDE` compiles `finding.md`, archives discipline outputs to `docarchive/`, and marks the inquiry COMPLETE.

---

## Traceability

The folder hierarchy provides traceability primitives:

| Trace direction | How | What you learn |
|---|---|---|
| **Inquiry → Parent** (up) | Read `_branch.md`'s `branch_from` field | "This inquiry branched from `<parent_path>`" |
| **Inquiry → Children** (down) | List `branches/` subfolders or read `_branches.md` index | "These are the questions branched from this inquiry" |
| **Current state** | Read `_state.md` | Status, progress, next discipline, history |
| **Inquiry identity** | Read `_branch.md` | Question, goal, scope, relationships |
| **Answer** | Read `finding.md` | The compiled verdict |
| **Discipline reasoning** | Read `docarchive/<discipline>.md` | The discipline's full output that fed into the finding |
| **Inquiry tree shape** | `tree devdocs/inquiries/<inquiry>/` | Full inquiry + branches structure at a glance |

---

## Starting an Inquiry

### As a root inquiry: `/MVL+ "<question>"` (or `/MVL`)

The runner:
1. Creates `devdocs/inquiries/<YYYY-MM-DD_HH-MM__slug>/`.
2. Writes `_branch.md` with the question, goal, and scope check.
3. Writes `_state.md` with Flow-type, Pipeline, Progress, Iteration=1, Status=ACTIVE, Next Discipline=first discipline.
4. Begins the pipeline immediately (no user pause between disciplines).

### As a branch from an existing inquiry: invoke BRANCH_INQUIRY

The runner:
1. Validates parent path, source anchor, child question (per `branch_inquiry.md`).
2. Creates `<parent>/branches/<child_slug>/`.
3. Writes the child's `_branch.md` with `branch_from`, `branch_source`, question, goal.
4. Writes the child's `_state.md`.
5. Updates the parent's `_branches.md` index.
6. Returns the child inquiry path to the runner, which continues with `/MVL` or `/MVL+` normally.

---

## Resuming an Inquiry

`/MVL+ <inquiry_path>/` (or `/MVL <inquiry_path>/`):

1. Reads `_state.md`.
2. Verifies Flow-type matches the runner (extended ↔ `/MVL+`; classic ↔ `/MVL`).
3. Determines where the pipeline left off by checking which discipline output files exist.
4. Continues from the first incomplete discipline.

Any AI session, any human reader, can pick up an inquiry from its `_state.md` alone. This is what makes cross-session work feasible.

---

## Rules

1. **Every inquiry folder has `_branch.md` and `_state.md`.** No exceptions. A folder without `_branch.md` is unidentifiable. A folder without `_state.md` is invisible to the resume mechanism.

2. **`_branch.md` is written once at creation.** It defines what the inquiry IS. If the question changes fundamentally, that's a new inquiry (or a branch), not a modified `_branch.md`.

3. **`_state.md` is updated through the inquiry's life.** It always reflects current state. The History section accumulates a chronological log of what happened. The Next Discipline field always tells the next session what to do.

4. **Completed inquiries are never deleted.** When a question is answered, CONCLUDE marks Status=COMPLETE and archives discipline outputs. The folder remains as the inquiry's record. Information loss = deleting folders.

5. **Superseded inquiries are kept with a relationship label.** When a later inquiry corrects or supersedes an earlier one, the earlier inquiry's `_branch.md` (or `_state.md`) Relationships section records `SUPERSEDED BY: <later_inquiry_path>`. The earlier finding stands as historical record.

6. **Subfolders mean further decomposition (via BRANCH_INQUIRY), not organization.** A `branches/` subfolder under an inquiry means specific child questions were branched. Don't create subfolders for organizational convenience — that breaks the isomorphism between tree structure and inquiry structure.

7. **Disciplines write canonical files; do not invent file names.** A discipline output must use its canonical name (`exploration.md`, etc.) at the inquiry root. Resume and CONCLUDE depend on the canonical names.

8. **Iterations overwrite, not append.** A second iteration of the pipeline overwrites the prior `sensemaking.md`, etc. The iteration trail lives in `_state.md` History, not in iteration subfolders. If you need the prior-iteration record, opt in by archiving it before the overwrite.

9. **CONCLUDE is invoked by the runner, not by disciplines.** No discipline writes `finding.md`. No discipline moves files into `docarchive/`. Those operations belong to CONCLUDE.

---

## Example: A Completed `/MVL+` Inquiry

```
devdocs/inquiries/2026-05-11_14-00__loop_diagnose__why_disciplines_missed_convergence/
├── _branch.md                  ← inquiry identity (question, goal, scope, correction chain, relationships)
├── _state.md                   ← Status: COMPLETE; History: entries spanning creation through CONCLUDE
├── finding.md                  ← the compiled answer
└── docarchive/
    ├── exploration.md
    ├── sensemaking.md
    ├── decomposition.md
    ├── innovation.md
    └── critique.md
```

A new reader opens `_branch.md` to learn the question, then `finding.md` to learn the answer. If they want the reasoning trail, they read `docarchive/` files. If they want to resume or branch, they read `_state.md`.

---

This convention is what makes the project's thinking work persistent, resumable, and inspectable — without specialized tooling. `mkdir`, a text editor, and `tree` are enough.
