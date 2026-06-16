---
name: routelog
description: Records which enumerated routes have been engaged (run / parked) and what each produced — the route-engagement recorder that sits around route-running. `routelog start <route-ref>` opens an append-only engagement row in the inquiry's `_route_engagements.md` BEFORE work begins and hands the session the route's work-contract; `routelog done` closes the row with an artifact pointer + one-line outcome and stamps a ↗ manifestation pointer into `_route.md`; `routelog park` records a deciding-against; `routelog list` prints the per-inquiry table or the derived project-wide overview. Records and points — it NEVER chooses a route, launches a run, judges a finding, or mutates a route-map. Use after running, or deciding against, a route from a `/routelister` route-map — especially routes run informally in a plain session where nothing else tracks them.
---

# /routelog — Route-Engagement Recorder

`/routelister` lists the routes a body of work offers; nothing records which of those routes you actually *engaged* (ran, or parked) and what came of each — and much of that engaging happens in plain sessions where no tool is watching. routelog is the small recorder that closes that gap. It writes an append-only run-log per inquiry, points at what each engagement produced, and is the executable form of a single recorded SUSTRALL turn (choice + reason + outcome + goal, by construction).

routelog is governed by three pillars — every behavior derives from one of them, and a proposed behavior that roots in none does not belong here:

- **P1 — Single-decider.** routelog *records and points; it never decides.* Decision-authority stays single (you, later the Selector). It never chooses the next route, never launches a run, never reads a finding to judge or rank it.
- **P2 — Source-of-truth integrity.** Append-only; never mutate originals; the run-log lives locally (per-inquiry) and any project-wide view is *derived*, never a maintained second copy. (A write-ahead log + event-sourcing design: the start row is written before the work; the current state of a route is the last row that mentions it.)
- **P3 — Mechanize-or-it-won't-happen.** The closing step happens only if a tool does it. The `start` row is written *immediately*; a stale-engagement sweep runs every invocation; `done` works even without a prior `start`. The recorder is forgiving by design — but it does not assume failure; the normal `start`→`done` path is equally first-class.

## Additional Input/Instructions

$ARGUMENTS

---

## The interface — four commands

```
routelog start <route-ref>                         open an engagement (write the in-flight row, hand over the work-contract)
routelog done  [<route-ref>] [<artifacts>] [<outcome>]   close it (reason-code + artifact pointer + one-line outcome; stamp ↗)
routelog park  <route-ref> "<why>"                 record a deciding-against
routelog list  [<inquiry> | open | done | all]     print the engagement table (read-only)
```

`<route-ref>` is an **ordinal** (e.g. `7`, the 7th route in the map) or a **name-fragment** (e.g. `row schema`, matching a route whose Direction contains it). On ambiguity, **list the candidates and ask — never guess** (a mis-bound mark corrupts the log).

Everything below is the *how* behind those four. It is not additional surface.

## What routelog touches

| File | Access | Role |
|---|---|---|
| `<inquiry>/_route_engagements.md` | **writes** (append-only; sole author) | the run-log source of truth for this inquiry's routes |
| `<inquiry>/_route.md` | **stamps ↗ only** (best-effort) | a manifestation pointer to what an engagement produced — never a status word |
| `<inquiry>/routelister.md` or `<inquiry>/docarchive/routelister.md` | **reads only** | resolves `<route-ref>` to a specific route + its guidance text |

**Determining the target inquiry.** If the input gives an inquiry folder or a route-map path, use it. Otherwise infer the inquiry in focus (the one whose route-map is being acted on; else the current working directory). If it is still unclear, ask. The route-map is `routelister.md` at the inquiry root (active inquiry) or `docarchive/routelister.md` (after CONCLUDE archived it).

---

## `routelog start <route-ref>`

1. **Resolve** the target inquiry + its route-map; resolve `<route-ref>` to one route (ask on ambiguity).
2. **Run the stale-engagement sweep** (see *Standing behaviors*).
3. **Window guard (first-in-project only).** Glob the project for any existing `_route_engagements.md`. If **none** is found, this row will be the project's first-ever traversal record — which is irreversible for pre-registration purposes. Surface the consequence and ask before proceeding:
   > *"This creates this project's first traversal record. If this project does pre-registered indicator measurement, the pre-registration file must exist FIRST (its timestamp is the proof — impossible to honestly back-date once this record exists). Proceed?"*
   Proceed only on explicit confirmation; abort otherwise. (Where no pre-registration program is intended, the user simply confirms and proceeds; where one is, they abort and write the pre-registration file first.)
4. **Write the in-flight row** to `_route_engagements.md` immediately (create the file with its header if absent — see *The engagement record*). Capture: timestamp (UTC), the route (ordinal + name), `event: start`, `status: in-flight`, a one-line **why** (prompt for it if not supplied), and the **goal** the engagement serves (from the route / inquiry). Writing this row before the work is the crash-recoverable record.
5. **Hand over the work-contract** — print the route's full Direction + guidance text from the map, plus a paste-able runner command when a runner fits (e.g. `/aMVLwr "<the route restated as a question>"`).
6. **Print the close-out line** to paste later: `routelog done <route-ref> "<artifacts>" "<outcome>"`.

## `routelog done [<route-ref>] [<artifacts>] [<outcome>]`

1. **Resolve** the target inquiry + `<route-ref>`. If no in-flight row exists for it, **degraded mode**: create the row retroactively (covers a forgotten `start` and purely informal work) — still first-class.
2. **Append a close event:** `event: done`, `status: closed`, a **reason-code** (default `done`; see the closed set below), an **artifact pointer** (the produced folder/file path — capture it automatically when discernible, else accept the arg or a coded no-artifact reason), and a one-line **outcome**.
3. **Stamp the ↗ pointer** into `_route.md` (best-effort): find the concept entry the route belongs to and append a manifestation pointer — `↗ engaged → <artifact-pointer> (<one-line outcome>)`. If `_route.md` is absent or no clean match is found, **skip with a note** — the `_route_engagements.md` row is the record of record. **Never** write a status/process word into `_route.md`; only the ↗ pointer is legal there.
4. **Run the stale-engagement sweep.**

## `routelog park <route-ref> "<why>"`

Append a close event: `event: park`, `status: closed`, `reason: parked`, `outcome:` the `<why>` ("looked at it, not now, because…"). No artifact. This is the pen for the *parked* (deciding-against) state — the route is recorded as considered-and-set-aside, not lost.

## `routelog list [<inquiry> | open | done | all]`

Read-only. Writes nothing.

- **no argument** → glob every `_route_engagements.md` in the project, assemble, and print the **derived project-wide overview** (grouped by inquiry; surface in-flight/open rows first). This is computed on demand, never a maintained second file.
- **`<inquiry>`** (a folder) → print that inquiry's table.
- **`open` / `done` / `all`** → the current inquiry's rows, filtered by state.

---

## Standing behaviors (every `start` / `done` / `park`)

- **Stale-engagement sweep.** Scan the target inquiry's `_route_engagements.md` for routes whose current state is `in-flight` from an earlier session. Report them — *"2 open engagement(s): … — close them?"* — and offer to close (as `done` or `abandoned`). Detect, offer, never auto-close.
- **Route resolution.** Match `<route-ref>` against the route-map by ordinal or name-fragment; on more than one match, list candidates and ask.
- **Append-only / event-sourcing.** Never edit or delete a prior row. A **reopen** is a *new* appended row (`event: reopen`, `status: in-flight`), never an edit. The current state of a route is the last row that mentions it.

---

## The engagement record — `_route_engagements.md`

A living, append-only file at the **inquiry root**, beside `_route.md` / `_state.md` / `_branch.md`. Never archived. Discoverable project-wide by its exact name. routelog is its sole author. New file template:

```markdown
# Route Engagements — <inquiry name>

> Run-log for this inquiry's routes. Append-only; routelog-owned. The source of truth for
> WHAT was engaged and what came of it — not a record of decisions about what to run next
> (that is the Selector's queue), and not process state for `_route.md`. Current state of a
> route = the last row that mentions it.

| timestamp (UTC) | route | event | status | reason | artifacts | outcome | source |
|---|---|---|---|---|---|---|---|
```

Field rules:

- **route** — `<ordinal> · <short route name>`. The **name is the key** (it survives route-map regeneration); the ordinal is a convenience.
- **event** — `start` / `done` / `park` / `reopen`.
- **status** — the route's state *after* this event: `in-flight` / `closed`.
- **reason** — a **closed set** (never free text — a free-text escape lets every close say "did it" and the "what came of it" value evaporates): `done` · `parked` · `superseded` · `no-artifact-by-nature` · `abandoned`. Use `—` for `start` / `reopen`.
- **artifacts** — path(s) the engagement produced, or `—`.
- **outcome** — one line on what it produced, or `—`.
- **source** — for a **cross-inquiry** route (listed in inquiry X, run here as inquiry Y), a **name-keyed** back-reference: `from: <inquiry X> · <route name>`. `—` when the route was listed in this same inquiry. The row always lives **where the work ran**.

Worked example:

```markdown
| 2026-06-13T14:02Z | 7 · DEVELOP the row schema   | start | in-flight | —    | —                          | —                              | — |
| 2026-06-13T15:20Z | 7 · DEVELOP the row schema   | done  | closed    | done | devdocs/inquiries/…-schema/ | 8-column event table settled   | — |
| 2026-06-13T15:21Z | 3 · REFRAME the value curve  | park  | closed    | parked | —                        | not now — depends on the demo  | — |
```

---

## Scope fence — what routelog must NEVER do

Each entry is a corollary of a pillar (so a future maintainer can test a proposed behavior by asking *which pillar forbids or permits this?*).

**From P1 (single-decider):**
- Never **choose** which route runs next — that is yours / the Selector's.
- Never **launch** a run — routelog records *around* a run; it does not fire one (the work-contract is printed text).
- Never **read a finding to judge or rank it** — it may capture a pointer and a session-supplied one-line outcome; it must never form an evaluative opinion that could feed route-selection. *Point, don't judge.*
- Never become the **Selector's forward-intent working-queue** (the project-level "what should we run next" list).

**From P2 (integrity):**
- Never **mutate the route-map** (`routelister.md` is archived and regenerated; a mark there would vanish).
- Never write **status/process words into `_route.md`** (its spec forbids process state; only the ↗ manifestation pointer is legal).
- Never maintain a **central done-file** as a second source of truth (the project overview is *derived* by `routelog list`).

**"Decide," defined.** routelog *may* set mechanical defaults — a timestamp, the status implied by the verb invoked — because those feed nothing. It must never produce anything that feeds *route-selection*. The dividing line: *does this output influence which route gets run, or how it is ranked?*

---

## Honest limits

- **A tool lowers the habit's cost; it cannot replace the habit.** If routelog falls out of use, the log rots like any wall of dead tickets. The sweep and the degraded `done` are mitigations, not denials.
- **The ↗ stamp is best-effort.** When the concept match into `_route.md` is uncertain, skip it and note it — the engagement row is authoritative.

## Not in v1 (deferred behind named gates)

- **The Selector's forward-intent working-queue** (the project-level "to-run" list a future automated Dispatcher fires from) — gate: the Dispatcher becomes real. routelog must not pre-empt it.
- **Runner auto-marking.** A future `/aMVLwr` may append the completion mark itself at CONCLUDE — but only if no routelog row already exists for that route (single-writer-per-route; routelog's row is authoritative). routelog v1 only needs to not conflict.
- **Project-level-route homing** (engagements against a project-wide Navigator sweep's routes) — gate: the project-level routelister becomes real.
- **Parallel-writer concurrency** — gate: the Dispatcher fires routes in parallel.
- **Free-text / unlinked engagements** (work on a route no map contains) — gate: such cases become common.
