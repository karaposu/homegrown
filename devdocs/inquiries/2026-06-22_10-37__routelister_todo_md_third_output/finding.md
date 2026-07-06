---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: Routelister Should Not Emit a `todo.md` — But the Need Behind It Is the Project's Keystone

## Question

**routelister** is the discipline that, at the end of an inquiry, enumerates the "routes" (next-step directions) a piece of work opens. It writes **two files**: `routelister.md` (the per-run route-map — a table of routes plus per-route records) and `_route.md` (a persistent index that accumulates across runs).

Earlier we established that `routelister.md` is **regenerated each run**, so hand-edits to it (like ticking off a `✓` done-column) get wiped. The user's proposal: have routelister emit a **third** file, `todo.md` — just the table part, freely editable without touching `routelister.md` — to **decouple** a mutable working-surface from the regenerated map. The questions: **does this make sense, is it worth it, and how would it serve the project's end-goals** (named in four canon docs, two flagged "highly": the SUSTRALL era-goal and the cross-run cognitive-steering doc)?

## Finding Summary

- **Verdict: NO — routelister should not emit a third `todo.md`. But the instinct behind it is right and important: while trying to fix a `✓`-column annoyance, you re-derived the project's single biggest missing piece.**

- **Why not a routelister output — the architecture forbids it.** The canon commits to **"one enumerator, two controllers": routelister *enumerates*; the runner and the orchestrator *decide and track*.** And "**Navigation sees; it does not choose.**" Tracking what's done/selected is a *controller* job. Making the enumerator emit and own an editable tracking file gives "the eyes" the "will's" organ — the exact role-mixing the architecture exists to prevent.

- **And it wouldn't even work cleanly.** A routelister-emitted `todo.md` hits the *same* regeneration problem as the `✓`-column: regenerated each run → your edits get wiped; *not* regenerated → it goes stale against the new route-field. (It *could* be made to work via a merge that preserves your edits — but that forces routelister to read and preserve your marks, which deepens the role-mixing, and is fragile because "the same route across runs" isn't a stable identity. So the version that works is the wrong design.)

- **What the need actually is — traversal memory, the keystone.** A mutable, cross-run record of *which routes you selected, why, and how they turned out* is exactly what the canon calls **traversal memory** — "the cross-inquiry record of visits, selections, rationales, and outcomes." It has **zero instances today**, it's the system's **#1 named gap** ("nothing watches between inquiries yet"), and it's the **first step of the entire era-goal**: a SUSTRALL "turn" counts the moment its selection-rationale is recorded into traversal memory.

- **The clean way to picture it: the map is redrawn; the log is yours.** `routelister.md` is a **map**, redrawn from the territory each survey. What you want is a **travel log** — where you went, what you chose, what you found. You never write your journey onto the map; you keep a log. (The `✓`-column was always a journey-mark on the map — that's why it kept getting wiped.)

- **What to actually do:** keep routelister a pure two-file enumerator; start a small, **human-owned travel log** (the first traversal-memory artifact) — a running table of `route-id · why-selected · outcome` — which can live right beside the map but is never touched by routelister. That single move scratches your ergonomic itch *and* takes the project's literal first step toward its era-goal.

## Finding

### Why we are even discussing this

You wanted a small, sensible thing: a place to tick routes off that doesn't get wiped when routelister re-runs. The honest answer turned out to be bigger than the question — not because the question was wrong, but because the thing you were reaching for is something the project has been explicitly waiting to build.

### Why a third routelister file is the wrong home

The project's architecture (canon, `sustained_traversal_loop_of_loops.md`) draws a hard line, summarized in one phrase: **"one enumerator, two controllers."** routelister is the **enumerator** — "the eyes." Its whole job is to *see* the field of routes and never to choose or track among them ("Navigation sees; it does not choose"). The *deciding* and *tracking* — which route to take, whether it's done, how it turned out — belong to two **controllers**: the per-cycle runner and the cross-inquiry orchestrator.

A `todo.md` that you tick routes off in is, by definition, *tracking state* — a controller's job. So having routelister emit and own it would hand the enumerator a controller's organ. routelister's own spec even has a named failure mode for exactly this (Process-coupling). It already has its two correctly-typed surfaces: `routelister.md` (the fresh-each-run map) and `_route.md` (the cumulative survey cache). A third, mutable, consumer-edited file doesn't fit either.

### And the decoupling wouldn't actually escape the problem

It's worth being precise here, because the proposal *sounds* like it solves the regeneration issue by moving the editable part into its own file. It doesn't. A file routelister emits is a file routelister re-emits — so on the next run it either overwrites your edits (the wipe) or stops being regenerated (and goes stale against the new routes). Same dead-end, new filename.

You *could* make it work by giving routelister a **merge** step — on re-run, preserve the ticks for routes that still exist, drop the removed ones, add blank rows for new ones (the way a lockfile or a translations file preserves human entries). But that's the wrong fix for two reasons: it makes routelister **read and preserve your tracking marks** (so the enumerator now has to understand the controller's state — the role-mixing gets worse, not better), and it's **fragile** because route identity isn't stable across runs (the spec individuates routes "lean-to-split, incrementally" — a later run can split one route into two), so a merge would mis-attach your ticks. So the version that works is the version that most violates the architecture. That's the real reason to reject it — not that it "can't be built."

### What you actually re-derived

Strip the proposal down and the need is: **a mutable record, persisting across runs, of which routes you selected, why, and how they turned out.** The canon has a name for that exact thing — **traversal memory** — and it is not a minor feature. It is:

- **the orchestrator's organ**, "the cross-inquiry record of visits, selections, rationales, and outcomes";
- **the #1 named gap** — "zero instances at naming time," "nothing watches between inquiries yet" (the system's between-run memory is, today, entirely in your head);
- **the first step of the whole era-goal** — SUSTRALL's "turn-invariant" says a revolution of the big loop *counts* the moment its selection-rationale is recorded into traversal memory. The minimum critical path to the era-goal literally begins with "create the first traversal-memory artifact ever."

So, calibrated honestly: a hand-maintained todo-list is not the whole traversal-memory *system* (that's a larger, deliberately gated build). But it is the **Level-0 seed** of it — and the canon explicitly says that seed is the immediate next step and needs no new infrastructure.

### The picture that makes it click: map vs travel log

> `routelister.md` is a **map** — redrawn from the territory each survey (perception-fresh; the "eyes"). What you want is a **travel log** — where you went, what you chose, what you found (mutable, append-only; the "will"). **You never write your journey onto the map; you keep a log.**

(This is a teaching analogy, not a proof — but it's load-bearing-checked: the same split shows up in software as read-model vs write-model, and as generated-artifact vs source — you never hand-edit compiled output, you keep your edits in source.)

The organs, separated:

| surface | what it is | who owns it | mutability |
|---|---|---|---|
| **`routelister.md`** | the **map** — the field of routes, this survey | routelister (the eyes) | regenerated each run — never hand-edit |
| **`_route.md`** | the map's **survey cache** (cumulative perception) | routelister (the eyes) | routelister-maintained |
| **routelog** | the **done/parked stamps** (the engagement slice) | routelog | append-only |
| **traversal memory** *(to start)* | the **travel log** — selections · rationales · outcomes across runs | the orchestrator (**you**, at Level 0) | append-only, yours |

A note on routelog: it already records done/parked engagement — that's the *done-slice* of what you want. Traversal memory adds the *why-selected* and *outcome*. Whether the first travel-log artifact should **extend routelog** or be a **fresh file** is a real choice, but it's part of the gated schema design (below) — not something to settle now.

### What to actually do (and the clean decoupling you wanted)

Start a small **human-owned travel log** — it can sit right next to `routelister.md`; the point isn't where it lives, it's that **routelister never writes it** (so it's never clobbered):

```
# traversal log — the orchestrator's memory (mine, not routelister's)

| date  | inquiry                 | route                           | why selected               | outcome            |
|-------|-------------------------|---------------------------------|----------------------------|--------------------|
| 06-22 | route_essentiality_tags | R1 — write essentiality to spec  | unblocks the whole feature | done — spec edited |
| 06-22 | why_field_multi_scope   | R1 — line-of-sight WHY to spec   | same coordinated edit      | done — spec edited |
```

One line per turn. Your "editable table" instinct is the right *shape* — it just belongs in the log (yours), seeded by reading the map and referencing route-ids, not emitted by the map. That's the real decoupling: the log *points at* routelister's routes; routelister stays a pure enumerator.

And the long-open `✓`-column question resolves cleanly as a side effect: done-state was never routelister's to author, so the `✓`-column should come out of the route-map. It belongs in the log.

### How it serves the end-goals (why it's worth it)

This is the opposite of busywork — it's the highest-leverage small move available:

- **It is SUSTRALL's literal first turn** (the turn-invariant; the canon-named immediate next step, "no new build required").
- **It unblocks the gated builds:** the project's Retrospective quality-checker "becomes buildable once cross-inquiry memory exists"; Phase-4 multi-inquiry learning needs it; several "consciousness-gradient" indicators (real-time steering, discontinuity awareness) ride on it.
- **It self-provisions the climb:** the rationales you record become the calibration data for a future system Selector (the step that earns the system the right to pick routes itself). The small habit is what makes the later autonomy trustworthy.

## Next Actions

### MUST
- **What:** Start the first traversal-memory artifact — a human-owned travel log (`route-id · why-selected · outcome`, one line per turn), referencing routelister's route-ids; record the turns already taken. It is not a routelister output and routelister never writes it.
  **Who:** you (the orchestrator, at Level 0) — a plain markdown file; no new tooling.
  **Gate:** observable — the next time you select a route to act on, write the line.
  **Why:** scratches the durable-todo need AND takes SUSTRALL's literal first turn (the canon-prescribed, no-new-infrastructure keystone step).

### COULD
- **What:** Remove the `✓` done-column from the routelister spec (§5.1 Route Index + Map Header) — done-state belongs to the controller layer (routelog / the travel log), never on the map.
  **Who:** a routelister-spec edit.
  **Gate:** observable — the next routelister-spec edit (it can ride with the recent batch).
  **Why:** closes the long-open `✓` question and keeps the map a pure projection.
  *(Independent of the MUST — it can be done on its own.)*

### DEFERRED
- **What:** Design the full traversal-memory schema (columns, the route-id reference format, extend-routelog-vs-fresh-file).
  **Gate:** condition-bound — the canon gates this "on canonization + ≥3 recorded turns." Revive once the travel log has accrued a handful of real turns.
  **Why (if revived):** turns the Level-0 habit into the real cross-run memory the orchestrator (and eventually a system Selector) reads and writes.

## Reasoning

**Why this answer over the alternatives:**

- **"Just give the user their editable `todo.md` as a routelister output" (rejected).** It's the tempting "simple feature," but it doesn't durably work (the regeneration wipe) and it mis-trains the architecture (the enumerator acquiring controller-state — actively harmful once multiple worker-heads run in parallel). The user's annoyance is real; the fix is the *right* artifact, which is equally simple to start.

- **"Make it work with a merge that preserves edits" (rejected).** Mechanically possible, but it deepens the role-mixing (routelister must now read and preserve your tracking marks) and is fragile under route re-individuation (route identity isn't stable across runs). The version that works is the version that most violates the architecture.

- **"It's just routelog" (partly true, rejected as the whole answer).** routelog already covers the done/parked *slice*. But the need includes *why-selected* and *outcome* — the richer record that is traversal memory. routelog is a component of the answer, not the whole of it.

- **"Design the full traversal-memory system now" (deferred, not rejected).** The need is the keystone, but the full schema is gated by the canon's own evidence requirement (≥3 recorded turns). This inquiry's job was to locate the need correctly and name the minimal first step; the full design is the next, gated build.

- **What survived:** keep routelister a pure two-file enumerator; start a human-owned travel log (the Level-0 traversal-memory seed); drop the `✓` from the map. It survived adversarial testing — including the strongest steelman (the merge), which forced the honest version of the central claim, and the grandiosity check (the reframe is canon-accurate, calibrated to "seeds the keystone," not "is the keystone"). Every load-bearing claim is anchored in a canon quote, not in the analysis agreeing with itself.

## Open Questions

### Blocked
- **Extend routelog, or a fresh travel-log file?** Cannot be settled until the schema design is un-gated (after ≥3 recorded turns) — both are legitimate Tier-1 shapes; the habit can start today as a plain file regardless.

### Monitoring
- **Will the travel-log habit actually stick?** The canon names operator fatigue as the Level-0 failure mode and "low-friction, wanted outputs" as the bar. If the log feels like overhead rather than something you reach for, that's a signal the shape needs to get lighter — watch the first several turns.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
u mentioned that we shuldnt edit routelister.md file as design. what if when we run routelister discipline , it should output 3 items instead of 2, it should also output todo.md which can be edited freely without touching the routlister.md ? and todo.md should be just the table part not full routelister.md copy ? does this makes sense?  this would help docouple things. but lets dive  deep if this even worht it or not, we should also consider how this would be useful for future endgoals mentioned in docs/canon/minimum_viable_loop.md
docs/canon/project_north_star.md and highly docs/canon/sustained_traversal_loop_of_loops.md and highly docs/canon/towards_cross_run_cognitive_steering_with_isolated_navigation_session.md goals
```

</details>
