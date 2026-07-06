# Innovation — What Is Done With Pulled Relevant Directions

## User Input

`_branch.md` + prior outputs. PROPORTIONATE default coverage (explanatory finding, not a design-build). Seed = the 5-piece plan. All 7 mechanisms fire (tested; kills recorded); core-3× at Q4 (the READ≠MEMORY reframe) + Q5 (the mark-done gap); Piece-Level Inversion at Q4 + Q3. Plain language; reframe central; non-sycophancy both ways.

**Methodology-mode:** inherited = Standard-default (explain the committed answer). Alternative considered = Minimum-mechanism (1G+1F). What follows under the alternative: a leaner pass that skips the domain-transfer confirmations — but the reframe (Q4) benefits from multiple independent groundings (it's the load-bearing claim the user is skeptical about), so full-coverage-with-inversions is right. Decision: **default**.

**Inherited Frame Audit:** the seed's central assumption is "pull's *value* is the thing in question." That assumption IS challenged in the candidate set — Q4 says the value question is mis-aimed at the read (the read spends value; the writes hold it). Audit does not fire.

---

## Mechanism Coverage Ledger (7/7)

| # | Mechanism | Yield | Verdict |
|---|---|---|---|
| 1 | Combination | "Look-Up is a read" + "canon memory = recorded state" = pull is a *query over* a store, not the store; "warm session" + "cross-context direction" = the absorb-while-warm payoff | SURVIVES → Q4, Q3 |
| 2 | Absence recognition | ABSENT from the doc: the mark-done write-back (File + Look-Up exist; "mark taken" doesn't). Redesign-level: a memory has read AND write-back-on-use; the ODI has accumulate-write + read, no use-write | SURVIVES → Q5, E2 |
| 3 | Domain transfer | native: a database — a SELECT changes no state; the memory is the rows + their updates. A to-do app — *viewing* a task ≠ the list; *checking it off* (a write) makes the list track reality | SURVIVES → Q4/Q5, E1 |
| 4 | Extrapolation | extend "index accumulates, no mark-done": at N traverses it's a giant pile where many listed directions are already done → the read surfaces stale done items → write-only failure returns as a never-pruned failure | SURVIVES → Q5 (sharpens) |
| 5 | Lens shifting | shift "is pull useful?" → "what LAYER is pull at?" — pull is at the read layer (spends memory); "how is it memory" is answered at the write layer. The question was aimed at the wrong layer | SURVIVES → Q4, E1 |
| 6 | Constraint manipulation | REMOVE "the read must justify itself as memory" → the read is a convenience consumer, and that's fine. ADD "the index must reflect true state (done vs open)" → mark-done becomes mandatory | SURVIVES → Q4/Q5 |
| 7 | Inversion | Q4 "the read IS the memory-contribution" → KILLED (enabling ≠ constituting). Q3 "benefit is universal" → KILLED (re-derivable case is thin) | see Inversions |

---

## Finding-Ready Pieces

### Q1 — Is the confusion a real gap or a comprehension miss? Real gap.
The ODI doc's walkthrough ends at *"A direction A set aside surfaces in B, precisely when B needs it"* — it stops at "surfaces" and never says what B *does*. And §"What It Deliberately Does NOT Do" states plainly: *"It does not decide what to do next… it enumerates and delivers; it does not select."* So the "what is done" is **absent by the doc's own design**, not merely unread. **Validate the user; don't correct them.** They found a hole.

### Q2 — What is concretely done with a surfaced direction? An offer the warm session judges.
Because the session is already in-context on the topic, it gets a small menu — none forced:
- **Absorb-while-warm** — do or incorporate the surfaced direction *now*, cheaply (you're already in the area).
- **Inform the finding** — don't do it, but let the current pass note the open thread.
- **Mark it done** — if the pass addresses it, record that (this is also Q5's write).
It is an **offer, not an interrupt**: the session takes a direction only if it's cheap and relevant, and otherwise keeps its focus. (This is why surfacing a cross-context direction doesn't derail — it's a suggestion the session can decline.)

### Q3 — What's the true benefit? Conditional and concentrated.
Honest split:
- **Real** on **cross-context** directions the session would *not* re-notice on its own — it does a valuable related thread cheaply, while warm. The doc's own honest bound says this: *"this pays most on the non-obvious, cross-context directions… For directions a later session would independently re-derive anyway, Look-Up saves little."*
- **Thin** on directions the session would have re-derived anyway.
So the user's skepticism is **correct where it's aimed** (the obvious case) and **over-reaches only if generalized** to "always pointless." Don't oversell it; don't dismiss it.

### Q4 — How does it contribute to traversal memory? READ ≠ MEMORY. [CENTER]
The confusion comes from looking for the memory-value *inside the read*. It isn't there, because **Look-Up is a read** — it helps the current session and records nothing. Traversal memory, in the project's own canon, is *"what was visited, selected, why, with what outcome"* — recorded **state**. That state is produced by the **writes**: File accumulates the option-record (roads noticed); mark-done records what got taken (roads walked). So:

**The read *spends* the memory; the writes *are* the memory.**

Pull's contribution to memory is therefore **enabling, not constituting** — it makes the accumulated record actually get consulted (curing the "write-only, never read" failure the whole design targets), but the record itself is the writes. Analogy (native domain): in a to-do app, *viewing* a task is not the list; the list plus *checking things off* is what tracks reality. Look-Up is the viewing; File + mark-done are the list.

### Q5 — The gap, and where mark-done belongs.
The design under-specifies two things — the downstream operation (Q2), and, more importantly, the **mark-done write-back**. Without mark-done, the index becomes a *new* write-only failure one level up: a to-do pile that only grows and never records what's been handled, so the read starts surfacing stale, already-done directions. Mark-done is **index-side housekeeping** — the routelister route record already carries a done-column and Priority/Essentiality, so the *field* exists; only the *habit/step* is missing. Crucially, the doc's "punt to the steering layer" covers the **choice** (act on a direction or not) — it does **not** cover the **recording** (marking it taken). That recording is the actual missing piece, and it's what turns the index from an inbox into a stateful memory.

## Piece-Level Inversions

- **Q4 inverted — "the read IS the memory-contribution."** Tested: the read is genuinely *necessary* for the memory to be useful (a write-only store nobody reads is the failure). But necessary-for-usefulness is not identical-to-the-record. The read still records nothing; canon's memory is recorded state, which the writes produce. **KILLED as "the read is the memory"; extracts the enabling-vs-constituting distinction that sharpens Q4.**
- **Q3 inverted — "the benefit is universal."** Tested: fails — on directions the session would re-derive anyway, the doc's own bound says Look-Up saves little. A benefit that's near-zero on a whole class can't be universal. **KILLED; confirms the conditional split.**

## Assembly Check — Emergents

- **E1 · The read/write-layer split is the whole answer** [HIGH; converged by Lens-shifting + Domain-transfer + Combination]. The user's confusion collapses two layers: the *read* that helps the current session, and the *writes* that are the memory. Separating them dissolves the confusion cleanly — "what is done with them" is a read-layer question (you use them now), "how is it memory" is a write-layer question (the record is the writes). This is Q4 stated as the organizing spine.
- **E2 · Mark-done sits exactly at the intersection of the user's two sub-questions** [HIGH; from Absence-recognition]. Mark-done is *both* a thing done with a surfaced direction (Q2's menu) *and* the write that makes the index stateful memory (Q5). So the single most valuable missing step is precisely where the user's "what is done?" and "how is it memory?" meet. That's not a coincidence — it's why the two halves felt tangled: the operation that answers both is the one the doc omitted.
- **E3 · The one-line honest value statement** [MED]. "Pull is a cheap read that activates the option-record on the cross-context cases, and near-nothing on the obvious ones." Credits and bounds pull in a single sentence — the non-sycophantic summary.

## Kills / Bounds
- **KILL** — "the read is the memory-contribution" (Q4 inversion: enabling ≠ constituting).
- **KILL** — "the benefit is universal" (Q3 inversion: the re-derivable case is thin).
- **KILL** — "pull is pointless / the user is right that it does nothing" (Q3: real on cross-context; the skepticism over-reaches if generalized).
- **BOUND** — mark-done's exact home (ODI Look-Up vs routelister vs steering) is a design question; this finding locates it index-side and flags it as the gap, but does not spec it (that's a downstream design inquiry).

**Coverage: 7/7 mechanisms fired; both piece-inversions killed; 3 emergents (E1 read/write-layer split, E2 mark-done-at-the-intersection, E3 one-line value statement). Proportionate to an explanatory finding. Proceed to Critique.**
