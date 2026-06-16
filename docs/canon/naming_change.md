---
status: active
---
# Naming Change — `/traverse` Is an MVL Worker Loop with a Custom Name

**In one line:** `/traverse` is not a new kind of loop. It is the existing articulated-surfacing-routed **MVL worker loop** (formerly `/aMVLwr`), given a custom, human-readable name instead of the stacked-affix acronym. The name changed; the loop did not.

## What the MVL loop is (the thing being named)

The worker loop runners are the project's **hands** — each runs one inquiry to one `finding.md` by chaining the thinking disciplines in a fixed pipeline (see `docs/canon/worker_loop_logic.md`). They are all members of one family built on the **MVL primitive** — the SIC core (Sensemaking → Innovation → Critique), optionally extended with upstream disciplines and an exhaust step. A runner's **identity** is its pipeline plus its `flow-type`; its **name** is just the command you type to invoke it.

The family — each member is a worker loop, and the `flow-type` (not the name) is its real identity:

| Command | Pipeline | flow-type |
|---|---|---|
| `/MVL` | S → I → C | `classic` |
| `/MVLw` | Su → S → D → I → C | `extended-surfacing` |
| `/aMVLw` | A → Su → S → D → I → C | `articulated-surfacing` |
| **`/traverse`** (was `/aMVLwr`) | A → Su → S → D → I → C → R | `articulated-surfacing-routed` |

(A = Articulate-Simple · Su = Surfacing · S = Sensemaking · D = Decomposition · I = Innovation · C = Critique · R = Routelister exhaust.)

## What changed, and what did not

**Changed:** the command name only — `/aMVLwr` → `/traverse`.

**Unchanged:** the pipeline (A → Su → S → D → I → C → R), the seven disciplines it runs, the CONCLUDE step, the persistent `_route.md` index, and the `flow-type` (`articulated-surfacing-routed`). Because the flow-type is unchanged, `/traverse` resumes any in-flight `/aMVLwr` inquiry exactly as before — the resume mechanism keys on the flow-type, never on the name.

The old scheme encoded the pipeline *in the name*: `MVL` (the Minimum Viable Loop) + `w` (surfacing variant) + an `a` prefix (articulated) + an `r` suffix (routelister) = `aMVLwr`. That made the name a composition-stack — precise, but cryptic and hard to type or say. The custom name drops the stack and names the loop for **what it is** rather than **which stages it runs**.

## Why "traverse" specifically

"Traverse" is the project's most load-bearing word, so the custom name is canon-aligned rather than arbitrary:

- The project's whole activity is **thinking-space traversal** (`docs/canon/The_Traversal_Thesis.md`): every answer is a path walked through a space of representations.
- **One worker-loop run is one traversal** — a single directed pass from question to finding. Naming the runner `traverse` names exactly what one run does.
- The era-goal **SUSTRALL** (SUStained TRAversal Loop of Loops, `docs/canon/sustained_traversal_loop_of_loops.md`) embeds the same root. The worker loop is the *unit* SUSTRALL sustains: SUSTRALL is the sustained loop of traversals; each `/traverse` is one traversal.
- It composes with the rest of the vocabulary instead of colliding. Canon already calls the meta-loop a *controlled whirl*; "traverse" lives one layer below it (the unit), so the two words name two different layers without overlap — **the whirl is the sustained loop of traverses.**

## The principle this records

A worker loop's **command name is a label, not its identity.** A runner may carry a custom, human-chosen name as long as it remains a worker-loop member (a fixed-pipeline runner that takes one inquiry to a finding) and its `flow-type` continues to mark which pipeline it is. Renaming is a name-only change: it never alters the pipeline, the disciplines, the artifacts, or the resume behavior. `/traverse` is the first runner to take a custom name; the affix-named members (`/MVL`, `/MVLw`, `/aMVLw`) are unchanged and coexist with it.

## Transition state

During the transition both names install and both resolve to the same loop — `/aMVLwr` is kept as a deprecated alias. Existing inquiries created under `/aMVLwr` carry `flow-type: articulated-surfacing-routed` and are fully resumable by `/traverse`. Retiring the `/aMVLwr` alias is a later cleanup, not required for `/traverse` to work.

## References (canon)

- `docs/canon/worker_loop_logic.md` — what a worker loop runner is; the family and its shared machinery
- `docs/canon/sustained_traversal_loop_of_loops.md` — SUSTRALL, the loop of loops the worker loops are the units of
- `docs/canon/The_Traversal_Thesis.md` — thinking-space traversal as the project's central operation
- `docs/canon/thinking_disciplines/list_of_disciplines.md` — the disciplines the pipeline chains
