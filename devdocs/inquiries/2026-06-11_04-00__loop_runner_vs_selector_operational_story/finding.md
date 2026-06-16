---
status: active
model: claude-fable-5[1m]
effort: max
impacted_by: devdocs/inquiries/2026-06-11_12-47__navigational_session_queue_dispatcher_possibilities/finding.md
---
# Finding: The Operational Story — a Dumb Runner Fires Loops, a Smart Selector Schedules Them (and the Loop Is a Third Thing)

> **REVISED 2026-06-11** by `devdocs/inquiries/2026-06-11_12-47__navigational_session_queue_dispatcher_possibilities/finding.md` (the Pipeline Architecture), after user corrections. What changed: the **single-Selector** commitment ("the only thing that decides") is revised — semantic judgment now lives in TWO session-kinds (the **Selector**, admission + grooming of a persistent **selections file**; the **Navigator**, recurring isolated root-mode enumeration), and dispatch demotes to **code** (the Runner absorbed into the **Dispatcher**). The single WAKE→…→STOP scheduler **splits into two loops** (grooming / dispatch); RANK + the starvation guard largely dissolve. What survives intact: judgment-gates-a-session (the rule that generated both designs), the no-read bright line + completion pointer, the Loop as the third actor, dedup / N-cap / sync-handoff-async-execution. Read the Pipeline finding as the current architecture; this finding remains the record of the three-actor step that led to it.

## Question

From `_branch.md` (dictated, decoded): the user is re-conceiving the "meta-loop" as primarily an **operational** layer — "the person who fires the Beyblade," whose only job is to *fire* loops and *record that they finished*, never reading the results. A **separate** decision-mechanism (the Selector / orchestrator) picks routes by priority, hands them to the runner (possibly several — loop #1, #2, #5 — at once), and reads the new `_route.md` files the finished loops produce. The hard question: *how does that decision-session know what to run next?* And the explicit ask: **"we need a story I can read and visualize exactly what's going on."**

**Goal:** a visualizable STORY of the operation + the architectural decisions it rests on (runner as code vs session; Selector vs orchestrator; the decision-procedure; the parallel/async model; the naming), faithful to the existing components, honest about the open parts. Failure = an all-taxonomy answer with no narrative; a runner that reads/interprets results; faking the unsolved decision-procedure; tangled names.

## Finding Summary

- **The picture has THREE actors, not two — and naming the third dissolves the confusion.** You were splitting "operational vs decision" (two things), but your own sentences need a third referent: the **Loop** (the actual MVL work) is *not* the **Runner** (the thing that launches it) is *not* the **Selector** (the thing that decides). Once all three are named, every sentence in your sketch lands on exactly one of them, and the "are they the same thing?" questions answer themselves.
- **The Runner is dumb CODE; the Selector is a reasoning SESSION — by one rule: a separate reasoning session is justified only where a judgment is made.** The Runner makes none (fire a loop, detect it finished, write down "done") → it should be **code** (deterministic, cheap, runs many in parallel, needs no context window). A session for the Runner would pay tokens for zero decisions *and* tend to serialize what should run in parallel. The Selector makes the only judgment (what to run next) → it's the **session**.
- **The Runner is "blind" by necessity, and "never read the results" is the bright line that enforces it.** Your instinct ("it shouldn't read the results, just record it's finished") is exactly right, and here's *why*: if the Runner read a finding, it would have to *judge* it (good? re-run?) — and now there are two deciders, which re-splits the authority and re-grows the confusion. So the Runner reads only enough to *detect* completion (a process exit, or a sentinel file the loop drops) and writes a **completion record that is a pointer, not a read**: `loop #X done at T, artifacts at path P`. It never opens finding.md or `_route.md`.
- **The decision-procedure you "didn't know how it works" is an event-loop scheduler.** This is the centerpiece. Map it to something you already know: **the Runner is an executor pool, the Selector is the scheduler-brain, `_route.md` is the ready-queue, a completion record is the wake event.** The Selector cycles: **WAKE** (a loop finished) → **REFRESH** (read the latest `_route.md`) → **FILTER** (drop gated/blocked/duplicate/done routes) → **RANK** (order what's left) → **DISPATCH** (if fewer than N loops are running, hand the top one(s) to the Runner) → **STOP-CHECK** (nothing left and nothing running → halt) → back to **WAKE**.
- **Air-traffic control is the one-image version:** the Selector is the tower — it sequences departures from a queue, clears up to N for takeoff, gets pinged when each lands, and **never flies a plane itself.** (The Runner is the ground crew that actually pushes each plane onto the runway; the loops are the flights.)
- **Parallelism adds exactly two new moves, and one back-pressure knob.** (1) **Dedup** — don't dispatch a route that a loop already in flight is pursuing; this is the *same* "same-concept-or-different?" judgment routelister already makes (individuation), applied against the routes you launched. (2) **Re-rank every wake** — because finishing loops *add* routes, the queue grows while you traverse it, so you always rank against the latest field (this is the project's non-stationary-landscape idea at the operational grain). (3) The **N-in-flight cap** is the back-pressure knob (= the Expedition finding's Mode B + the worklist's concurrency limits).
- **"Synchronous" and "asynchronous" are both right, about different acts:** the *handoff* is synchronous (you hand a route to the Runner and it spawns the loop immediately — the call returns once the loop is *launched*), the *execution* is asynchronous (the loop then runs concurrently; the Selector doesn't wait for it). Fire-and-forget.
- **RANK v1 is deliberately dumb — with one guard.** v1 = highest-Priority goal-advancing unblocked route, ties broken by Confidence, then oldest-first — **plus a starvation guard** so a low-priority-but-necessary route (e.g., one that *unblocks* others) doesn't wait forever: either its priority *ages* upward the longer it waits, or unblocking-routes get a structural bump. Cleverness beyond that (diversity, cost-weighting) is a v2 you learn from real runs, not guess now.
- **It re-confirms the prior architecture, with one naming question for you.** Your "meta-loop = the loop runner" is exactly the Turn Architecture finding's **"carrier"** (the launch plumbing); your "orchestrator/Selector" is its **"Selector"** (it recommended retiring the second name). So the architecture *converges* — only the word **"meta-loop"** collides (that finding gave it to the *cycle*; you give it to the *Runner*). Four options below; **your seat.**
- **Two failure poles bound the whole thing:** if the Selector never fires, you get **stagnation** (the Turn Architecture finding's named failure); if it never stops, you get **explosion** (unbounded fan-out, the field never converges). The Selector exists to live between them.

## Finding

*Context: the project's end goal is a system that traverses a thinking space by itself, running many MVL loops over time (the Expedition / Mode B). The question is the operational architecture of that: what fires the loops, what decides which to fire, and how the decider knows what's next. Below is the story, then the decisions it rests on.*

### 1. The cast (read this first)

| Actor | What it is | Its one job | What it must NEVER do |
|---|---|---|---|
| **The Runner** | dumb **code** (an executor pool) — your "Beyblade-firer" | launch a loop; detect when it finishes; write a one-line "done" pointer | read or interpret the loop's findings/routes; decide anything |
| **The Loop** | an MVL/aMVLw **inquiry** (six disciplines → a finding + new routes) | do the actual thinking-work on one route | — (it's the work, not a controller) |
| **The Selector** | a reasoning **session** — your "orchestrator" | read the field of routes, decide what to run next, hand it to the Runner, watch for completions | run the work itself; launch its own loops without the Runner |

Two supporting props:
- **`_route.md`** — the **ready-queue**: the cumulative list of routes, written and re-written by routelister at the end of each loop, each route tagged with Priority / Confidence / Layer / GATED-on. (This is the field the Selector reads.)
- **The completion record** — a tiny **pointer** the Runner writes when a loop finishes: `{loop-id, route-ref, status: done|failed, finished-at, artifacts-path}`. Five fields, no content. (This is the Selector's wake-up signal.)

### 2. The one-screen diagram

```
                          ┌──────────────────────────────────────────────┐
                          │             THE SELECTOR (a session)          │
                          │            the only thing that DECIDES        │
                          │                                               │
          reads ─────────▶│   WAKE → REFRESH → FILTER → RANK → DISPATCH ──┼──┐
        the field         │     ▲                                  │      │  │ hands a
            │             │     └────────── STOP-CHECK ◀───────────┘      │  │ route
            │             └──────────────────────────────────────────────┘  │ (sync)
            │                            ▲                                    ▼
   ┌────────┴─────────┐         "done #X"│ (wake event)          ┌───────────────────────┐
   │   _route.md      │         a pointer│                       │   THE RUNNER (code)   │
   │ (the ready-queue)│◀──writes routes──┐                       │   an executor pool    │
   │ Priority/Conf/   │                  │                       │  fire + detect-done   │
   │ Layer/GATED tags │                  │                       │  + write the pointer  │
   └──────────────────┘                  │                       │   (never reads)       │
            ▲                            │                        └───────────┬───────────┘
            │ each loop's routelister    │                          spawns ≤ N │ (async)
            │ tail writes new routes     │                                     ▼
            │                   ┌────────┴────────┬─────────────────┬──────────────┐
            └───────────────────│   LOOP #1       │   LOOP #2       │   LOOP #3 …   │
                                │ (MVL inquiry →  │ (running…)      │ (running…)    │
                                │  finding+routes)│                 │              │
                                └─────────────────┴─────────────────┴──────────────┘
```

Read it as **air-traffic control**: the Selector (tower) sequences departures from `_route.md` (the queue), clears up to N for takeoff via the Runner (ground crew), and is pinged ("done #X") when each loop (flight) lands — then it looks at the queue again. The tower never flies a plane.

### 3. The story — one traced run (with an illustrative worked example)

*(The Priorities below are written as integers for legibility; real routes carry routelister's coarser HIGH/MED/LOW. The RANK rule is v1. Both are honest simplifications, flagged.)*

**The setup.** A goal is set ("harden and understand the provenance edge"). The Selector starts cold. The field (`_route.md`, produced by an earlier loop's routelister tail) holds five routes:

- **R1** — DIAGNOSE the coverage concept · Priority 5
- **R2** — TEST the self-improvement claim · Priority 4
- **R3** — DEEPEN the provenance edge · Priority 3
- **R4** — INVESTIGATE-FRONTIER the compare-phase · Priority 2 · **GATED-on(multihead-real)**
- **R5** — REFINE the value-curve wording · Priority 1

The concurrency cap is **N = 3.**

**Wake cycle 1 (cold start).** The Selector REFRESHes (reads the five). It FILTERs: R4 is GATED (multihead isn't real yet) → set aside. It RANKs the rest: R1(5) > R2(4) > R3(3) > R5(1). It DISPATCHes the top three — R1, R2, R3 — by handing each to the Runner (a quick synchronous handoff). The Runner fires three loops; they begin spinning **asynchronously**. Three slots full. The Selector does not wait — it goes idle until pinged.

**A landing.** Loop **R2** finishes first. The Runner — without reading a word of R2's finding — notices the process exited and writes: `done R2, artifacts at .../R2/`. That pointer is the wake event.

**Wake cycle 2.** The Selector WAKEs on "done R2." It REFRESHes `_route.md` — and the field has *grown*, because R2's routelister tail added two routes:

- **R6** — DEEPEN a sub-claim R2 surfaced · Priority 4
- **R7** — TEST the provenance edge's coverage · Priority 3  *(this is really the same concept R3 is already pursuing)*

Now it FILTERs against what's still in flight (R1, R3 running): **R7 is a duplicate of R3's in-flight intent** → dedup drops it (the same "same-concept-or-different?" judgment routelister makes). R4 still GATED. Survivors: R6(4), R5(1). One slot is free (R2 landed, so 2 in flight, cap 3). It RANKs: R6 > R5. It DISPATCHes **R6**. In flight now: R1, R3, R6.

**…and so on.** Each landing wakes the Selector; each wake re-reads the grown field, drops gated/duplicate/done routes, re-ranks, and tops the in-flight set back up to N — until a wake finds **nothing dispatchable and nothing in flight** (or the goal is met), at which point STOP-CHECK halts instead of dispatching. *That* is how it "knows what to run next": it doesn't plan the whole sequence up front — it re-decides, cheaply, every time a loop lands, against the latest field.

**Why this isn't just a `for`-loop.** A `for route in routes` has a *fixed* list and *no* judgment. This has a list that *grows as you traverse it* (loops add routes) and a *judgment* at RANK/FILTER (which to run, what's a duplicate, when to stop). That judgment is the whole reason the Selector is a reasoning session and not a line of code.

### 4. The decisions the story rests on

**4.1 Runner = code, Selector = session.** The rule: *a separate reasoning session is justified only by a judgment it must make.* The Runner makes none → code: deterministic, cheap, parallel-safe, no context window. The Selector makes the only judgment → session. (Even failure-handling is a *judgment* — "retry? skip? escalate?" — so it belongs to the Selector: the Runner just reports `status: failed`, and the Selector decides what to do about it at the next wake.)

**4.2 The Runner's bright line.** It must not *judge*; "never open the artifacts" is the enforceable rule that guarantees it. It may read only enough to *detect* completion (exit code / sentinel file), never content. This is what keeps decision-authority single — the moment the Runner branches on a finding's content, you have two deciders.

**4.3 The scheduler, fully.** WAKE (a completion record appears, or a tick) → REFRESH (read the cumulative `_route.md`) → FILTER (drop GATED/BLOCKED off the ledger; drop duplicates of in-flight intents; drop completed) → RANK (v1: highest Priority among goal-advancing unblocked routes; ties by Confidence; then oldest-first; **plus a starvation guard** — a waiting route's effective priority ages upward, and a route that *unblocks* others gets a bump — so necessary-but-low-priority work isn't starved) → DISPATCH (if fewer than N in flight, hand the top route(s) to the Runner; synchronous handoff, asynchronous execution) → STOP-CHECK (halt only when nothing is dispatchable AND nothing is in flight, or the goal is met) → WAKE.

**4.4 Parallelism.** N loops run concurrently and land at different times; each landing grows `_route.md`. Two moves keep it sane — **dedup-at-dispatch** (against the launched intents of in-flight loops, reusing routelister's individuation) and **re-rank-on-every-wake** (always choose against the latest field). The **N-cap** bounds it.

**4.5 The compare step (placed, not designed).** When two or more landed loops touched the same concept, their findings may overlap or conflict; reconciling them (merge / promote / continue / stop) is the Turn Architecture finding's "single genuinely-new Level-4 judgment." In this story it's an *optional* Selector sub-step between a landing and the re-rank — **slotted here, but its design is deferred** (that finding gates it on parallel work actually becoming real).

### 5. Naming — your seat

The cleanest assignment, so the story reads without collisions: **Runner** (the code executor) · **Selector** (the decision session; retire "orchestrator" as a second name, per the prior finding) · **Loop** (the work). The one genuinely contested word is **"meta-loop"** — the Turn Architecture finding gave it to the *cycle*; you want it for the *Runner*. Four options, you pick:

1. **Re-point "meta-loop" → the Runner** (honor your usage).
2. **Keep "meta-loop" = the cycle; call the executor "the Runner."** *(Recommended — least collision; the word "meta-loop" reads as a loop/cycle, not an executor.)*
3. **Retire "meta-loop"** entirely (it keeps causing collisions).
4. **"meta-loop" = the Selector's own scheduling cycle** (the wake→decide→sleep loop *over* the loops — arguably the most literal "loop of loops").

## Inherited Commitments Re-test

Per the Synthesis Trigger (priors: the Turn Architecture finding; the Expedition finding):

- **Commitment:** launching = plumbing ("the carrier"); choosing = the Selector (a role); mechanism vs policy.
  - **Source:** `devdocs/inquiries/2026-06-10_14-00__metaloop_orchestrator_role_architecture_from_scratch/finding.md` (§1, §3).
  - **Re-test status:** RE-TESTED — confirmed, and independently re-derived. **Evidence:** the user reached the identical split from the Beyblade angle — the Runner IS the carrier (plumbing, no judgment → code), the Selector IS the Selector (policy → session). The code-vs-session verdict is exactly "launching is mechanism; anything can invoke a runner."
- **Commitment:** parallelism decomposes — running = plumbing, deciding-N = the Selector at scale, comparing-N = the one new Level-4 judgment.
  - **Source:** the Turn Architecture finding (§4).
  - **Re-test status:** RE-TESTED — confirmed and made concrete. **Evidence:** running = the Runner's ≤N spawns; deciding-N = the Selector's DISPATCH-up-to-N + dedup; comparing-N = the slotted (deferred) compare sub-step. No contradiction; the abstract claim now has an operational form.
- **Commitment:** "meta-loop" names the turn cycle.
  - **Source:** the Turn Architecture finding (§2).
  - **Re-test status:** RE-TESTED — confirmed but frame revised (NAMING ONLY). **Evidence:** the *architecture* is unchanged; only the *word* is contested — the user wants "meta-loop" for the Runner. The finding does NOT silently re-point it; it hands four options to the user (§5). The cycle itself still exists exactly as that finding described.
- **Commitment:** Mode B — a persistent spine dispatching worker loops; the ledger as a deferral queue; supervised-autonomous.
  - **Source:** `devdocs/inquiries/2026-06-10_14-41__lone_traversal_loop_operational_breakthrough/finding.md`.
  - **Re-test status:** RE-TESTED — confirmed. **Evidence:** the Selector is the persistent spine; the Runner spawns the workers; the FILTER step's GATED/BLOCKED drop reads exactly the ledger; the N-cap is Mode B's concurrency bound. The story is Mode B made operational.

Pattern-note: three confirmed (one re-derived from a fresh angle, one made concrete), one frame-revised at the naming level only and handed to the user — no commitment silently absorbed or overwritten.

## Next Actions

### COULD

- **What:** Pick the "meta-loop" naming option (§5) — or veto and keep your own usage.
  **Who:** the user — one line.
  **Gate:** observable — whenever read.
  **Why:** the story and any future spec read cleaner with one word per actor; everything else stands regardless.

- **What:** Build the Runner as a small piece of **code** — spawn an MVL loop, detect completion (process exit / sentinel file), write the five-field completion record. No reasoning, no result-reading.
  **Who:** one coding session.
  **Gate:** condition-bound — when N>1 (parallel) is actually wanted; today's N=1 manual runs don't need it yet.
  **Why:** it's the only genuinely new build item, and it's small precisely because it's judgment-free.

### DEFERRED

- **What:** Refine the RANK formula beyond v1 (diversity, cost-weighting, exploration bonus).
  **Gate:** revival trigger — after observing real multi-loop runs (the formula is learned from data, per "schemas follow practice").
  **Why (if revived):** v1 (Priority→Confidence→FIFO + starvation guard) is enough to start and not stall; cleverness should be evidence-driven.

- **What:** Design the compare sub-step (merge/promote/continue/stop across parallel findings).
  **Gate:** revival trigger — parallel work becomes real (≥2 loops regularly landing on the same concept; the Turn Architecture finding's multihead gate).
  **Why (if revived):** the one genuinely-new judgment parallelism introduces.

- **What:** Pin the dedup intent-signature (how a candidate route is matched against in-flight launched routes).
  **Gate:** revival trigger — when the Runner/Selector are first built for N>1.
  **Why (if revived):** dedup reuses routelister's individuation, but the exact signature (route-identity key) needs stating once it's coded.

## Reasoning

**Why three actors, not two.** The user's "operational vs decision" split is correct about Runner-vs-Selector, but their own sentences ("the loop runner runs the loop," "the loops produce findings") need a third referent — the Loop is the work, distinct from the Runner that launches it. With only two names, "runner" has to mean both launcher and work, which is the conflation that made the picture murky. Naming the Loop is the move that makes every sentence land.

**Why the Runner is code, and blind.** A reasoning session is only worth its cost where a judgment is made; the Runner makes none, so it's code (and a session would also serialize the parallelism that's the whole point of N>1). And it must be *blind* because reading results would force it to judge them — creating a second decider and re-splitting the authority the inquiry exists to make single. "Never open the artifacts" is the enforceable bright line for "never judge."

**Why the scheduler answers the user's hard question.** "How does it know what to run next?" felt unsolved because it was unnamed; named, it's a standard event-loop scheduler (ready-queue + worker pool + completion callbacks). Every piece already exists: `_route.md` is the queue, routelister's Priority/Confidence is the rank key, the ledger's GATED/BLOCKED is the filter, the Selector's control-flow vocabulary is the overlay. The Selector doesn't plan the whole run; it re-decides cheaply on each landing.

**Significant refinements (critique).** *Blind-by-necessity* → judgment-free-by-necessity with no-read as the enforcing bright line (a read-only-but-non-judging Runner is conceivable, so the precise rule is don't-judge, enforced by don't-read-content). *Dumb RANK v1* → kept dumb but given a **starvation guard** (pure strict-priority would starve a low-priority-but-unblocking route forever — a real operational bug). *The worked example* → flagged illustrative (real Priorities are coarse HIGH/MED/LOW; the integers are for legibility) so it teaches without over-claiming precision.

**Significant kills.** *A two-name model* — killed (forces the Runner/Loop conflation). *A Runner session* — killed (pays for zero judgment; serializes parallelism). *"It decides somehow"* — killed (the scheduler is nameable and every piece exists). *Dropping the N-cap* — killed (explosion). *A clever RANK v1* — killed/deferred (learn the formula from runs). *A fourth metaphor* — killed (Beyblade + ATC + OS-scheduler already cover it).

**Self-reference handling.** The system designed its own operating loop. Guards: it re-tests and largely CONFIRMS the prior findings (not self-flattering novelty); the starvation catch cuts against the design's own appealing simplicity; the compare-phase is left deferred; and the naming is handed to the user rather than self-assigned.

## Open Questions

### Monitoring

- **Does RANK v1 (+ starvation guard) actually avoid stalls and starvation in real runs?** Observable: the first multi-loop runs — does any necessary route wait unboundedly?
- **Does dedup correctly catch in-flight duplicates?** Observable: whether two loops ever do redundant work on the same concept.

### Blocked

- **The compare sub-step's design** — blocked on parallel work becoming real (the multihead gate).
- **The real RANK formula** — blocked on observing enough runs to learn it.

### Refinement Triggers

- **If the user re-points "meta-loop"** — the names re-word accordingly; the architecture is unchanged.
- **If the N-cap or STOP-CHECK proves weak in practice** (fan-out grows unbounded) — the explosion failure pole fired; tighten the cap / stop rule.
- **If a future inquiry designs the compare-phase** — this story's slotted placement (between landing and re-rank) is the starting point.

## Source Input

<details>
<summary>Raw user input for this finding (dictated)</summary>

```text
The main job of Metal Loop is actually blue runner. … imagine a loop runner as [the] person who fires the Beyblade … its only job is to fire (one, two, three) … when they stop, … I guess it shouldn't read the results. It should just record that it is finished. It's like an operational layer for running the loops rather than being semantic … This is what Metaloop is. … maybe just a loop runner code. What's the advantage if it is just code or … a separate session which runs these loops … We have some other decision making mechanism … the selector or the orchestrator selects a [route] … in terms of priority. The selection is sent to the [loop runners], and [the loop runner] runs the loop … kind of … synchron[ous] … it also had [a] 2nd loop … sends it to loop runners, the 3rd, the 5th … these loops are MVL loops and they are producing finding md files and also new routes. … the orchestrator is reading these new route.md files … the question is how it knows what to run next … it is basically [a] decision session … How … should it work? I don't know … We need a story … I can read and … visualize exactly what's going on. lets dive into this
```

</details>
