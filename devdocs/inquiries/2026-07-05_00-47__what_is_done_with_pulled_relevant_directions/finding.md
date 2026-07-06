---
status: active
model: claude-opus-4-8[1m]
effort: max
impacted_by: devdocs/inquiries/2026-07-05_05-13__next_move_selection_belongs_to_navigation_not_worker_loop/finding.md
---
# Finding: What Is Done With the Directions Pull Surfaces — and How Is That "Memory"?

> **Layer note (2026-07-05).** This finding's own conclusions — the read-is-not-memory reframe, the mark-done write, the conditional/cross-context benefit, the offer-menu — all stand. One *inherited* cross-reference needs a layer correction: where this finding echoes the prior evaluation's "push" and calls it "an active read over the index" parallel to pull, that mislocates push's layer. Push (uninvited whole-field surfacing) is the **navigational session's** enumeration, above the inquiry boundary — not a worker-loop read. See the flags at the Summary bullet on push and at §6. Corrected in `devdocs/inquiries/2026-07-05_05-13__next_move_selection_belongs_to_navigation_not_worker_loop/finding.md`.

## Question

We have a proposed design, the **Open-Directions Index** (`docs/future-seed/open_directions_index.md`), for giving the thinking loop a memory of the directions it sets aside. Its "Look-Up" step (call it **pull**) works like this: when a new thinking-pass starts on some topic, it queries the accumulated pile of past set-aside directions and surfaces the ones related to that topic.

The user accepted that matching mechanism but pushed on the payoff:

> "but how does this help? what is done with these new relevant directions? if a traverse is running it already has a topic, so we bring old relevant directions okay, but do what with them? it is ambiguous and I don't get the true benefit and how it contributes to traversal memory."

Three real questions: **what is concretely done** with a surfaced direction, **what's the true benefit** (given the pass already has a topic), and **how does any of this count as memory**? The user is skeptical, so the goal was an honest answer — not a defense.

## Finding Summary

- **The confusion is well-founded — it points at a real hole in the design.** The Open-Directions Index doc explains how a direction gets *surfaced* but never says what you *do* with it once it's surfaced. Its walkthrough literally ends at "…surfaces, precisely when B needs it." So the user isn't missing something the doc said; the doc genuinely leaves it unstated.

- **To be fair to the doc, the hole is narrow.** The doc *deliberately* says the Index "does not decide what to do next… it enumerates and delivers; it does not select." Punting the *choice* (act on a direction or not) to the human/steering layer is a legitimate design decision. What's left unstated is the *payoff* — what using a surfaced direction concretely buys you. That's the fair thing to miss.

- **What is concretely done: it's an offer, not an instruction.** Because the pass is already working in the topic's area, a surfaced direction gives it a small menu it can take or decline — (1) **do it now** while it's already in-context, (2) **let it inform** the current finding without doing it, or (3) **mark it done** if the pass handles it. Nothing is forced; the pass takes a direction only if it's cheap and relevant, so surfacing can't derail a focused pass.

- **The true benefit is real but conditional — and the skeptic is right where he's aiming.** The payoff concentrates on **cross-context** directions: something a past pass noticed that the current pass would *not* have re-thought of on its own, now surfaced while the current pass happens to be nearby. On those, you do a valuable related thread cheaply. On directions the current pass would have re-derived anyway, the benefit is genuinely **thin** — which is exactly the case the user's skepticism is pointing at.

- **The key reframe — a read is not memory.** The user is looking for the "memory" inside the pull, and it isn't there, because **pull is a read**. A read helps the current session; it records nothing. What *is* the memory is the **writing**: the accumulating list of set-aside directions, plus a record of which ones got taken. Put plainly: **the read spends the memory; the writes are the memory.** Pull's role in memory is to *activate* the record (make it actually get consulted) — not to *be* the record.

- **The actual missing piece is a "mark-done" write.** The design has one write (append a direction to the list) and one read (pull). It's missing a second write: recording that a direction has been *handled*. Without it, the list only ever grows — a to-do pile that never checks anything off, so pull starts surfacing stale, already-done directions. That mark-done write is what turns the pile into a real memory of what's been done.

- **This is a different gap than the one the previous inquiry found.** A prior evaluation of this same design concluded it needs a **push** (a way to surface aging directions *uninvited*). This inquiry concludes it needs **mark-done** (a way to record what's been handled). Those are different things — one is about *delivery*, one is about *state* — reached from different reasoning. Together they say the index is under-built on two independent sides: how directions reach you, and what the record knows about them. **[Layer note 2026-07-05: "push" as uninvited *delivery* stands — but push is not a worker-loop read parallel to pull. Surfacing aging directions over the whole field is the navigational session's job (above the inquiry boundary), which the orchestrator selects over. See the §6 layer note. mark-done and the read-is-not-memory reframe are unaffected.]**

## Finding

### Why this question exists

The thinking loop notices, on most passes, directions it doesn't take — a related question, a follow-up, a better approach for something adjacent. The Open-Directions Index is a proposal to stop losing those: **File** them to a shared list at the end of a pass, and **Look-Up** (pull) the relevant ones at the start of the next pass. The user granted the look-up mechanism and asked the obvious next question: fine, you surface some old directions — *then what*, and why is that "memory"?

### 1. The confusion is real, and the doc is the reason (but only narrowly)

Read the design doc's own walkthrough and it ends exactly where the user got stuck: *"A direction A set aside surfaces in B, precisely when B needs it."* It stops at "surfaces." It never says what B does next. So this isn't a case of the user skimming past an explanation — the explanation isn't there.

Being fair to the doc, though, the gap is narrow and partly deliberate. The doc explicitly states the Index *"does not decide what to do next… it enumerates and delivers; it does not select."* Handing the *decision* — act on a surfaced direction or not — to the steering layer (today, a human) is a reasonable scoping choice, not an oversight. What the doc leaves genuinely unstated is the **payoff**: what *using* a surfaced direction concretely buys. That is the honest shape of the gap — not "the doc forgot something," but "the doc specifies the mechanism, legitimately punts the choice, and never states the payoff." Missing that is fair.

### 2. What is concretely done: an offer the warm session judges

Here's the concrete operation, which the doc leaves implicit. When pull surfaces a direction, the current pass — which is already warmed up and working in that topic's area — gets a small menu:

- **Do it now (absorb-while-warm).** Fold the surfaced direction into the current work and handle it, cheaply, because you're already in-context on the adjacent material.
- **Let it inform the finding.** Don't do it, but let the current pass note the open thread — "this area still has X parked."
- **Mark it done.** If the pass ends up handling the direction, record that (this is also the write in section 6).

The important property: this is an **offer, not an interrupt**. The pass takes a surfaced direction only when it's cheap and relevant, and otherwise ignores it and keeps its focus. That's what makes "surface a related direction" safe rather than derailing — it can always be declined.

### 3. The true benefit: real, but conditional and concentrated

Now the honest part, which meets the user's skepticism directly.

The benefit is **not universal**. If a surfaced direction is something the current pass would have thought of on its own anyway, pull saved you nothing. The design doc concedes this itself: *"For directions a later session would independently re-derive anyway, Look-Up saves little."* So the skeptic is correct precisely where he's aiming — for the obvious, re-derivable directions, pull is thin.

Where the benefit is **real** is the opposite case: a **cross-context** direction — something a past pass noticed (because it was deep in a different problem) that the current pass would *not* re-notice on its own. When the current pass happens to be working nearby, pull puts that in front of it, and it can do a valuable thread it would otherwise have missed — cheaply, because it's already in the area. And because it's an offer (section 2), the downside is bounded: when the surfaced direction isn't worth it, you decline. So the honest verdict is *"real when it hits, thin when it doesn't, and safe either way"* — not the universal win the doc's tone might suggest, and not the nothing the skeptic suspects.

### 4. The reframe that dissolves the confusion: a read is not memory

This is the heart of the answer. The user is looking for the "memory" *inside* the pull — and it isn't there, but not because the design is worthless. It's because **pull is a read**, and a read is the wrong place to look for memory.

The project's own definition of traversal memory (from the era-goal canon, `docs/canon/sustained_traversal_loop_of_loops.md`) is a record that gets *written*: *"remember — traversal memory is updated (what was visited, selected, why, with what outcome)."* Memory is the **recorded state**. Look-Up updates nothing — it reads the record and helps the current pass; it leaves no trace behind. So:

> **The read spends the memory. The writes are the memory.**

The memory is the **writing** side: the accumulating list of set-aside directions (the "roads noticed"), plus — crucially — a record of which got taken. Pull's contribution to memory is real but it's a *supporting* one: it's what makes the record actually get *consulted*, curing the "we write these down and never look at them" failure the whole design exists to fix. In precise terms, pull **enables** the memory (makes it useful) without **constituting** it (the record itself is the writes).

One honest refinement: a *memory system*, broadly, does include its access paths — so pull is part of the memory *system*. But it's not part of the recorded *content*. When the user asks "how is the look-up memory," the exact answer is: the look-up is how you *use* the memory; it is not the *stored* memory. That's why looking for the payoff inside the read felt unsatisfying — the payoff of the read is helping the current pass; the memory is somewhere else (the writes).

### 5. The actual missing piece: a "mark-done" write

Follow the reframe and the real gap becomes obvious. The design has:

- one **write** — File: append a set-aside direction to the list;
- one **read** — Look-Up (pull).

It is missing a **second write**: recording that a direction has been *handled*. Call it **mark-done**. Without it, the list is append-only — it only ever grows, and it never reflects what's actually been done. Over time it fills with directions that were handled long ago but still sit there listed as open, so pull starts surfacing stale items. That's the original "write-only memory" failure coming back one level up: a meticulous list that never gets reconciled against reality.

Mark-done is what makes the list a genuine *memory of what happened* (which is the canon's definition: visited/selected/outcome) rather than an ever-growing inbox. And it's cheap: the route-listing record the project already produces carries a done-marker column, so the *field* exists — what's missing is the *habit* of writing it. It belongs on the index side (it's a write to the record), not the steering side — the doc's "punt to the steering layer" covers the *choice* to act, but it does not cover the *recording* that something was done. That recording is the real hole.

There's a neat reason the user's two questions felt tangled: **mark-done is the single operation that answers both of them.** It's one of the things you can do with a surfaced direction (section 2's menu), *and* it's the write that makes the index a stateful memory (this section). The operation that sits at the intersection of "what is done?" and "how is it memory?" is exactly the one the doc left out — so both questions pointed at the same missing piece.

### 6. How this relates to the previous evaluation

A prior inquiry evaluated this same design and concluded it needs a **push** — a way to surface aging high-value directions *without being asked*. This inquiry concludes it needs **mark-done**. It's worth being explicit that these are *not* the same recommendation dressed up twice:

- **push** is about *delivery* — how a direction reaches you (invited pull vs uninvited push);
- **mark-done** is about *state* — what the record knows about a direction (still-open vs handled).

> **Layer note (2026-07-05, from the next-move-selection correction, `devdocs/inquiries/2026-07-05_05-13__next_move_selection_belongs_to_navigation_not_worker_loop/finding.md`).** "Push" as *delivery* (uninvited vs invited) stands — but it is **not** "an active read over the index" parallel to pull. Surfacing aging directions over the whole field is the **navigational session's** enumeration (above the inquiry boundary), which the **orchestrator** then selects over — not a second worker-loop read. So read "the index is missing an active read (push)" as *the index should feed the navigational session's enumeration*. The delivery-vs-state distinction, mark-done, and the read-is-not-memory reframe are all unaffected — only push's layer is corrected.

They were reached from different reasoning (push from "pull is a passive read, the store needs an active one"; mark-done from "memory is recorded state, and the read records nothing"). So together they make a coherent larger point about the design: the index (the store of set-aside directions) is a genuinely valuable foundation, but the **reads and writes over it are under-built** — it's missing an active read (push) *and* a state-recording write (mark-done). This finding adds the write side of that picture.

## Next Actions

### MUST
- **What:** Specify the **mark-done write** — when a thinking-pass handles a surfaced or related open direction, record it as done in the index (reusing the existing done-marker field on the route record; recording who/when).
  - **Who:** a design pass on the Open-Directions Index / route-record layer.
  - **Gate:** condition — before the Index is built or promoted from `docs/future-seed/` toward implementation.
  - **Why:** without it the index is append-only and recreates the write-only failure (stale done-directions accumulate); mark-done is what makes it a stateful memory rather than an ever-growing list.

### COULD
- **What:** Specify the **downstream "offer" step** — the absorb-while-warm / inform-the-finding / mark-done menu as an explicit, decline-by-default step at Look-Up.
  - **Who:** a design pass on the Look-Up step.
  - **Gate:** condition — when the Index is picked up for implementation.
  - **Why:** turns pull from "a reminder you may ignore" into a defined read-act(-record) step; makes the payoff operational.
  - **Depends-on:** MUST item "the mark-done write." This COULD is GATED — mark-done is one of the menu's three options, so specify the write first.

- **What:** Update the design doc to state the operational payoff (honestly bounded — conditional/cross-context) and add mark-done as the index's second write.
  - **Who:** a documentation pass on `docs/future-seed/open_directions_index.md`.
  - **Gate:** observable — fold into the prior evaluation's "re-frame the doc around the index" recommendation (one doc edit, not two).
  - **Why:** the doc under-specifies the payoff; closing that keeps it accurate.

### DEFERRED
- **What:** Observe whether stale already-done directions actually accumulate in a real index that lacks mark-done.
  - **Gate:** revival — once an index holds real entries across several passes without mark-done.
  - **Why (if revived):** turns the predicted "never-pruned" risk into an observed one, confirming mark-done's urgency.

## Reasoning

**What was killed, and why:**

- **"The read is the memory-contribution."** Rejected. The read is genuinely *necessary* for the stored memory to be useful (a record nobody reads is the failure the design fights) — but necessary-for-usefulness is not the same as *being* the record. The canon defines memory as recorded state, which the writes produce; the read produces no state. So the read enables the memory without constituting it. The distinction is real, not word-play.

- **"The benefit is universal."** Rejected. On directions the current pass would re-derive anyway, the design doc itself says Look-Up saves little. A benefit that's near-zero on a whole class of cases can't be universal — hence the conditional framing.

- **"Pull is pointless / the user's skepticism is simply right."** Rejected as an over-reach. The skepticism is correct for the obvious, re-derivable case, but there's a real payoff on the cross-context case (doing a valuable thread you'd never have re-noticed, while already in-context, with the downside bounded by being an offer). So the honest position credits the skeptic partly and corrects the generalization.

**The one self-check worth flagging:** because a prior inquiry on this same design concluded "add push" and this one concludes "add mark-done," there was a real risk of pattern-matching — reflexively deciding "the fix is always some read/write the doc omits." That was tested directly: push and mark-done turn out to sit on different axes (delivery vs state) and were reached from different reasoning, so they're independent conclusions, not the same fix twice. The check is what upgraded the finding from "here's another missing piece" to "the index's reads and writes are under-built on two separate sides."

## Open Questions

### Monitoring
- Whether, in a real index without mark-done, pull actually starts surfacing stale already-done directions (the observable that would confirm mark-done's urgency in practice).

### Blocked
- The exact home of mark-done (on the Look-Up step, on the route-listing record, or as a small separate index-housekeeping step) can't be fully pinned down until the index's schema is specified — which the design doc itself gates on real recorded entries accumulating.

### Refinement Triggers
- If the cross-context payoff turns out rare in practice (few surfaced directions are ones the pass wouldn't have re-noticed), pull's value drops toward the thin case and the emphasis should shift further onto the write side (accumulate + mark-done) and onto push.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
u said 

What matches against what
The match is one heading against a list of many labels — not list-against-list. You do not take the new traverse's whole set of routes and cross-check it against a past traverse's whole set. You take where the new traverse is heading (its single current focus) and look that up against the accumulated pile of past Direction labels. That keeps the operation targeted and cheap: a query, not an N×M scan.

Matching is by topic / relevance, read straight off the Direction labels. It needs no stored condition, no trigger, no foreknowledge of when the direction would become relevant — just the plain judgment "does this open direction relate to what I'm doing now?", which a warm session can make by reading the label.

but how does this help? like what is done with this new relevant directions?? bc if a traverse is running it already has a topic, so we bring old relevant directions okay, but do what with them? it is ambigious and i dont get the true benefit and how come it contributes to traversal memory ...
```

</details>
