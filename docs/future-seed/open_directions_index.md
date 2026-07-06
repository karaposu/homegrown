# Open-Directions Index — A Shared List of Set-Aside Directions, Surfaced When They Become Relevant

*Status: future-seed, provisional. Not canon. A named design for one slice of traversal memory, distilled from the fork-recall inquiry chain. The full index schema is gated until real recorded turns accumulate (see Open Questions).*

---

## Core Claim

Every traverse (one thinking-session working through a problem) ends by listing the directions the work could go next. Some of those directions get acted on; the rest are **set aside** — still **open**: written down as promising, but not yet taken. Today the project sets these open directions down and never looks at them again. They are *written but never read*.

The **Open-Directions Index** closes that gap: one shared list of the still-open directions, kept current and consulted by a small two-part habit.

1. **File** — when a traverse ends, its set-aside directions are added to the shared list.
2. **Look-Up** — when the next traverse starts, it queries the list by its current topic and surfaces the open directions relevant to what it's now working on.

The result: a direction one session set aside comes back to a later session **exactly when that later session is working on something it relates to** — not at random, and not lost.

---

## The Problem It Addresses

A single traverse, deep in one problem, routinely notices *other* things worth doing — a related question, a follow-up, a better approach for something adjacent. These aren't what the traverse is doing right now, so it sets them aside. That act is a **real, expensive judgment**: it took being deep in the problem to even see that the other direction was worth pursuing.

And then that judgment evaporates. The set-aside direction sits in a finished traverse's records, and nothing ever brings it back. The only ways it returns today are (a) someone happens to remember it, or (b) someone re-derives it from scratch — both unreliable, and (b) re-pays the expensive cost of noticing it.

So the project has a **write-only memory** for onward directions. It records "here is something worth doing later" hundreds of times over, and never opens the record. It is a meticulous to-do list nobody reads back.

---

## How It Works

### The two moments

The mechanism splits cleanly into two moments that happen at different times. Only one of them does any matching.

**1. End of a traverse — File (no matching).** The end-of-traverse routing step already lists the onward directions, each with a short, self-explanatory **Direction** label (e.g. *"spec the shared index of directions"*). The directions not acted on are the open ones; their labels are appended to the shared index — a running pile of "promising directions nobody has picked up yet." This is just filing: cheap, append-only, no comparison.

**2. Start of the next traverse — Look-Up (the matching).** The new traverse knows its topic — where it is heading. It queries the index: *"which open Direction labels relate to what I'm working on now?"* The relevant ones surface; the rest stay quiet.

### What matches against what

The match is **one heading against a list of many labels** — not list-against-list. You do not take the new traverse's whole set of routes and cross-check it against a past traverse's whole set. You take *where the new traverse is heading* (its single current focus) and look that up against the accumulated pile of past Direction labels. That keeps the operation targeted and cheap: a query, not an N×M scan.

Matching is by **topic / relevance**, read straight off the Direction labels. It needs no stored condition, no trigger, no foreknowledge of when the direction would become relevant — just the plain judgment "does this open direction relate to what I'm doing now?", which a warm session can make by reading the label.

### A concrete walkthrough

- **Traverse A** (last week) ends. The routing step lists 6 directions; 2 are acted on, 4 are left open. Their labels go into the index — e.g. *"consolidate into the controller/travel-log design,"* *"test matching at scale."*
- **Traverse B** (today) starts on *"I'm designing the travel-log schema."* It queries the index with that heading. *"Consolidate into the controller/travel-log design"* (from A) lights up; the unrelated ones stay quiet.
- A direction A set aside surfaces in B, precisely when B needs it.

### A secondary, optional use

At filing time, a newly-added direction can also be checked against the index to avoid **double-filing** the same direction twice, and to **link** related directions across traverses. This is housekeeping, not the main use — the value is in the Look-Up.

---

## Why It Helps

- **It stops the project from losing good ideas it deliberately saved.** The expensive act — noticing that a direction is worth pursuing — is paid once. Filing and Look-Up are cheap. So the value of that noticing is preserved and reused, instead of evaporating or being re-derived.

- **It surfaces directions at the right time, not at random.** Matching by the current heading means you are never dumped with the whole pile. When you sit down to a topic, the open directions about *that* topic surface and the rest stay silent. The relevance filter is what turns a useless heap into a useful, well-timed nudge.

- **It lets separate sessions build on each other.** Sessions don't share a memory; the index is the bridge. A later session picks up exactly the unfinished threads an earlier one pointed at, instead of starting cold and re-treading covered ground.

- **It makes setting a direction aside safe, which improves the *current* session too.** If you trust that a set-aside direction will come back when it's relevant, you can leave it and stay focused — rather than derailing to chase it or holding it in your head. So the benefit is not only for future sessions; it sharpens the one you're in.

**The honest bound:** this pays most on the **non-obvious, cross-context** directions — the ones a future session would *not* re-notice on its own, because it isn't in the context that made them visible. For directions a later session would independently re-derive anyway, Look-Up saves little. The value concentrates exactly where a warm session saw something a cold one wouldn't.

---

## How This Helps Solve the Traversal Memory Problem

**The problem, stated plainly.** The project is made of many separate thinking-sessions that do not share a memory. For it to steer itself over time — decide what to work on next, build on past work, and avoid going in circles — it needs a **traversal memory**: a written, cross-session record of where thinking has been, what it chose to do, why, and how that turned out. In the project's own framing this is the steering layer's core organ, and it is the one piece with *zero instances today* — right now a human holds all of it in their head.

The Open-Directions Index is a concrete, buildable slice of that organ. Specifically:

- **It is the cheapest possible on-ramp, because the data already exists.** The end-of-traverse routing step already writes onward directions every single traverse — a write-only stream of exactly the kind of record traversal memory wants. The Index generates no new data; it adds the *read*. Building the organ that has zero instances today can start by simply opening a record the project is already keeping.

- **It moves "which past directions matter now" out of the human's head into an artifact.** The project's own maturation path names this move — *remembering shifts from the user's head to traversal-memory artifacts*. The Index is precisely that shift for the option-memory slice: the human no longer has to personally remember every promising thread they set aside; the list holds them and surfaces them by relevance.

- **It feeds the steering layer pre-filtered options.** When the between-inquiry layer (today, a human deciding what to do next) chooses the next move, the Index hands it the open directions relevant to the current focus — instead of the human scanning everything from memory. This makes steering cheaper and lets the navigation layer stay simpler.

- **It turns set-aside directions into telemetry.** Because the index records what got set aside, what got revived, and what stayed open forever, it becomes measurable data about the traversal itself — revival rates, how long directions sit, which get picked up. Traversal memory is the project's missing measurement surface; the Open-Directions Index is one concrete instance of it.

**What it is, and is not.** Traversal memory has two faces. One is the **selection record** — what the project *chose* to do, why, and the outcome (a "travel-log" of the road taken). The other is **option memory** — the promising directions *not* taken but worth keeping. The Open-Directions Index is that second face. It complements the selection record; it does not replace it. The full organ needs both: a memory of the roads taken *and* a memory of the roads noticed-but-not-yet-taken. The Index is the sibling that keeps the second from being thrown away.

---

## What It Deliberately Does NOT Do

- **It adds no field to the routing step.** The end-of-traverse router stays a pure list of directions. A "come-back-when" or "blocked-by" condition is tracking state, and tracking state belongs in the separate steering/tracking layer, never on the pure list. (This was settled deliberately; re-adding such a field would walk back that decision.)

- **It does not assume you know when to return.** Most open directions carry no known trigger — the normal case is simply "a promising topic, set aside." That is why matching is by topic, not by a stored condition. For the rare direction that genuinely is blocked on a specific thing, that condition already has a home in the tracking layer (a finding's deferred-item gate), and a small secondary "did the blocker clear?" check can cover it — as the exception, not the mechanism.

- **It does not decide what to do next.** The Index *surfaces* relevant open directions; the choice of which to act on remains the steering layer's. It enumerates and delivers; it does not select.

---

## Open Questions

- **Does topic-matching hold at scale?** Look-Up is a judgment made by reading Direction labels. With hundreds of open directions in the index, plain reading may degrade and need grouping, tags, or a coarser first cut. Watch this as the index grows; revisit if match quality visibly drops.

- **The index's exact schema and home.** What each entry stores (label, source traverse, priority, timestamp), where the shared list lives, and who writes it (the loop, while warm) are not yet fixed. This is gated: the full schema waits until a handful of real traversal-turns have been recorded, so it is designed against real entries rather than guessed.

- **Its relationship to the travel-log.** The selection record (roads taken) and this option memory (roads noticed) are two faces of one organ. Whether they share one artifact or sit as two linked files is open, and settles alongside the travel-log's own schema.

---

*Provenance: distilled from the fork-recall inquiry chain (the between-loops recall work), whose finding corrected an earlier "match by a stored come-back-when condition" design into the topic-matched Look-Up described here.*
