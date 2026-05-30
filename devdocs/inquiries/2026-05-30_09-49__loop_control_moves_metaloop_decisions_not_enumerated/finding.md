---
status: active
model: claude-opus-4-8[1m]
effort: max
refines: devdocs/inquiries/2026-05-30_08-14__routeman_loop_harmony_gaps_vs_routelister/finding.md
---
# Finding: Loop-Control Moves Are the Meta-Loop's DECISIONS, Not an Enumerated Menu

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-30_08-14__routeman_loop_harmony_gaps_vs_routelister/finding.md` (and, secondarily, `devdocs/inquiries/2026-05-30_09-07__routelister_boundary_use_protocol_vs_section/finding.md`).
**Revision trigger:** the user's challenge — "these feel like meta-loop decisions, not boundary-protocol or routelister concerns."
**What's preserved:** the perception/selection split ("Navigation sees; it does not choose"); the loop-control moves need an owner and routelister isn't it; the meta-loop is the loop-aware owner; loop-boundary orchestration is protocol-layer, not a section inside the discipline (09-07).
**What's changed:** the prior framing said the loop-control moves are an **enumerated menu** that "the meta-loop composes" (08-14 Gap A) / that "the boundary protocol produces" (09-07). This finding corrects that: the loop-control moves are **control decisions** the meta-loop *makes*, not a menu anyone *enumerates*. "Enumerate a loop-control menu" was a routeman holdover.
**What's new:** the **enumerate-vs-decide** seam; the collapse of the separate "boundary protocol" into the meta-loop's boundary step (it was a phantom layer); the clean **one-enumerator / two-controllers** architecture.
**Migration:** when authoring the architecture, do **not** build a "boundary protocol that enumerates/composes a loop-control menu." routelister enumerates the concept-field; the meta-loop *decides* the loop-control moves as a controller. The boundary is the meta-loop's step that calls routelister, not a separate layer.

## Question

We've been designing how **routelister** (a concept-listing discipline) gets used at the boundary between cognitive cycles. Across the last few exchanges we assumed the loop-control moves — **TERMINATE** (this inquiry is done), **WIDEN** (broaden the scope), **MERGE** (these two branches are one line), **RE-RUN-DEEPER** (redo the cycle with more depth), **UNBLOCK** (clear a gate), **DIFFERENT-APPROACH**, **REVISIT** (re-evaluate a prior verdict) — get *enumerated as a menu* by something at the boundary (the earlier finding's "Gap A": the meta-loop *composes the loop-control menu*; the later one: the *boundary protocol produces the complete field* including these moves).

The user pushed back: *"I feel like these are actually meta-loop decisions, not relevant to the boundary protocol or routelister… maybe our assumption was wrong. Let's dive deep and find what is cleaner."*

So the question: **are the loop-control moves an enumerated menu (an open field someone lists), or are they the meta-loop's control decisions (a fixed vocabulary a controller evaluates)?** And what does the answer do to the layering — does the separate "boundary protocol" survive? The goal is the cleaner architecture, honestly tested (including the risk of over-collapsing a layer that does real work).

## Finding Summary

- **The user is right: the loop-control moves are the meta-loop's *decisions*, not an *enumerated menu*.** The earlier "enumerate / compose a loop-control menu" framing was a **routeman holdover**.

- **The load-bearing distinction is enumerate vs decide:**
  - **Enumerate** = discover an *open, unknown field* from a territory (you must look to know what's there; the set is unbounded and territory-specific). *This is what routelister does with concepts.*
  - **Decide** = a controller evaluates a *small, fixed, already-known* action-vocabulary against the current state and commits. *This is what a controller does with loop-control* (the same seven moves apply to every loop).

- **The proof it was already this way:** the MVL runner already handles loop-control as control-flow *logic* — "is the question answered? → conclude (terminate); else → loop again." It never composes or presents a {terminate, loop-again} *menu*. So "decided, not enumerated" is how the working system already behaves; the "menu" framing was only ever a description inherited from routeman.

- **Why the wrong frame crept in:** routeman's identity was "produce the typed map of *all* possible next moves," so its single taxonomy cast *every* move — including control-flow — as an enumerated "route." When routelister was split off as the concept-enumerator, the assumption "someone must still enumerate the loop-control moves" rode along. Drop routeman's all-as-routes model and there is no menu to compose — only decisions to make.

- **The clean architecture is one enumerator + two controllers:**
  - **routelister** — the *enumerator*: lists the open concept-field on any territory. Loop-blind, reusable.
  - **the meta-loop** — the *cross-inquiry controller*: decides the loop-control moves (from its fixed vocabulary + the loop-state), selects among concept-routes, owns cross-cycle memory and autonomy, and calls routelister at the boundary.
  - **the runner** — the *per-cycle controller*: decides conclude/iterate within one cycle.

- **The separate "boundary protocol" was a phantom layer** — which is exactly why "isn't the boundary protocol doing what routelister does?" kept recurring. It had no unique job: the concept-field is routelister's, the loop-control is the meta-loop's *decisions*, the history is the meta-loop's *memory*. It dissolves into the meta-loop's *boundary step* (call routelister, feed the finished cycle as territory, then decide). The **work survives** inside the meta-loop; only the phantom *enumeration* job is removed — this is phantom-removal, not over-collapse.

- **Per move:** TERMINATE / WIDEN / RE-RUN-DEEPER / DIFFERENT-APPROACH are pure meta-loop decisions; **MERGE** = routelister's *individuation* (perceiving two branches are the same concept) + the meta-loop's *decision* to merge; **UNBLOCK** = the meta-loop's gate-state + decision; **REVISIT** = the meta-loop's cross-cycle memory + decision. No move needs a separate enumerator.

## Finding

### Why this came up

We'd been treating the loop-control moves as items on a "what next?" menu that something assembles at the boundary. That created a recurring snag: every time we described the "boundary protocol," it sounded like it was *producing a field of next-moves and not choosing* — which is exactly what routelister does. The user noticed the snag and asked the right question: maybe these moves aren't a menu at all; maybe they're decisions the meta-loop makes. Chasing that down cleans up the whole picture.

### The load-bearing distinction: enumerate vs decide

Two genuinely different operations have been getting conflated:

- **Enumerate** means *discover an open, unknown field*. You point routelister at a territory and it sweeps, because you don't know in advance which concepts live there — the set is unbounded and specific to that territory. The output is a field you then pick from. This is perception of content.

- **Decide** means *a controller picks from a small, fixed, already-known repertoire based on the current state*. The loop-control set — terminate, widen, merge, re-run, unblock, different-approach, revisit — is closed and the same for every loop. You don't *discover* "terminate" by sweeping anything; you already know it's always an option, and you *decide* whether to take it.

A concept-route ("DEEPEN the auth module") is enumerated — content you had to look to find. A loop-control move ("TERMINATE") is decided — a control-flow action from a fixed repertoire. Asking who "enumerates the loop-control menu" is like asking a thermostat to "enumerate {heat, cool, idle}": it doesn't enumerate a known repertoire; it *decides* among it based on the reading.

### The proof: the runner already decides

This isn't a new proposal — it's how the working system already behaves. The MVL runner handles loop-control as control-flow logic: *"is the question answered? → conclude (that's TERMINATE); else → loop again with a refined focus (that's RE-RUN / WIDEN / REFRAME)."* It evaluates the state and commits an action. It never builds or presents a menu of {terminate, loop-again} for something to pick from. So loop-control has always been *decided*, not *enumerated*. The "menu" idea was a description we inherited, not the mechanism.

### Where the wrong frame came from: a routeman holdover

routeman's whole identity was "produce the typed map of *all* possible next moves." Its single 16-type taxonomy had to give *every* move a type — so control-flow actions (terminate, widen, merge) were cast as "routes" by construction. That was a property of routeman's *all-as-routes model*, not a fact about loop-control's nature. When we split routelister off to be the concept-enumerator, the leftover assumption "but someone still has to enumerate the loop-control moves" came along for the ride — and became the earlier finding's "Gap A: the loop-control menu is homeless; the meta-loop must compose it." Once you drop the all-as-routes model, there is no menu to compose. There are only decisions to make, and the controller makes them.

### Per move: decision (with, sometimes, a perceptual input that's already someone's job)

- **TERMINATE / WIDEN / RE-RUN-DEEPER / DIFFERENT-APPROACH** — pure control decisions on the loop-state. The meta-loop's (cross-inquiry); the runner's at the per-cycle grain.
- **MERGE** — the *perception* "these two branches are the same concept-line" is **routelister's individuation** (its everyday job — deciding whether two things are the same concept-identity); the *decision* "combine the branches" is the **meta-loop's**.
- **UNBLOCK** — the gate is a loop-state fact the **meta-loop** holds; clearing it is the **meta-loop's** decision.
- **REVISIT** — the prior verdict lives in the **meta-loop's** cross-cycle memory; resurrect/invalidate/revert is the **meta-loop's** decision.

So even the moves with a perceptual component don't need a new enumerator — the only external perception involved is routelister doing its normal individuation, feeding a meta-loop decision.

### The clean architecture: one enumerator, two controllers

| Role | Component | Operation | Loop-aware? |
|---|---|---|---|
| **Enumerator** | **routelister** | enumerates the open concept-field on any territory | no — blind by design (so it's reusable) |
| **Controller (cross-inquiry)** | **the meta-loop** | decides the loop-control moves + selects among concept-routes + owns cross-cycle memory & autonomy; its boundary step calls routelister | yes |
| **Controller (per-cycle)** | **the runner** | decides conclude / iterate within one cycle | yes |

Control-flow lives in *controllers* (the runner and the meta-loop); enumeration lives in *one* place (routelister). The loop-control moves belong to the controllers — never to an enumerator.

### The phantom "boundary protocol"

The reason "isn't the boundary protocol doing what routelister does?" kept recurring is that the separate "boundary protocol" was a *phantom layer*. Once you see that routelister enumerates the concept-field and the meta-loop *decides* everything loop-relative, there is no third "produces-a-field" thing between them. What we had been calling the boundary protocol is just the meta-loop's **boundary step**: at the end of a cycle, the meta-loop calls routelister with the finished cycle as its territory, reads the concept-field, and applies its control logic.

Crucially, this is phantom-*removal*, not over-collapse: the real work — calling routelister at the boundary, translating a finished cycle into routelister's "territory + goal" input — survives inside the meta-loop. Only the job that was never real (compose/enumerate a loop-control menu) is removed. (One small caveat: *if* several different controllers ever need to call routelister at a boundary, the cycle→territory translation could be factored into a thin reusable *adapter* — but that's a helper used by a controller, not a control layer and not an enumerator.)

### How this re-tests the prior findings (honestly)

- **The earlier "Gap A" (08-14) — refined, not broken.** Its valid core — *the loop-control moves need an owner, and routelister isn't it* — is correct and preserved; the owner is the meta-loop. What's corrected is the *frame*: not "enumerate / compose a menu" but "the meta-loop's control decisions." The "homelessness" was an artifact of the enumeration frame; seen as the controller's decisions, the moves were never homeless — routeman just *published* them as routes.

- **The boundary-protocol finding (09-07) — refined, not broken.** Its load-bearing claim — *loop-boundary orchestration is protocol-layer, not a section inside the discipline* — still holds (the meta-loop is protocol-layer). What's corrected is "the boundary protocol *produces the complete field including loop-control moves*" → "routelister enumerates the concept-field; the meta-loop *decides* loop-control." The separate boundary protocol collapses into the meta-loop's boundary step.

## Inherited Commitments Re-test

This finding refines prior findings and synthesizes several priors (Synthesis Trigger declared); each inherited commitment is re-tested.

- **Commitment:** "Gap A" — loop-control move ENUMERATION is homeless; the meta-loop composes the menu by reading its loop-state + routelister's index.
  - **Source:** `devdocs/inquiries/2026-05-30_08-14__routeman_loop_harmony_gaps_vs_routelister/finding.md`.
  - **Re-test status:** RE-TESTED — REFINED.
  - **Evidence:** the core (the moves need an owner = the meta-loop; routelister can't provide them) is preserved and confirmed. The frame is corrected: the moves are the meta-loop's *control decisions* (a fixed vocabulary evaluated against loop-state), not an *enumerated menu*. The runner already decides them as logic (no menu); the "enumerate a menu" language was a routeman holdover. The "homelessness" was a frame artifact.

- **Commitment:** the three-layer model; the boundary protocol *produces the complete next-move field* (incl. loop-control moves); "protocol, not section."
  - **Source:** `devdocs/inquiries/2026-05-30_09-07__routelister_boundary_use_protocol_vs_section/finding.md`.
  - **Re-test status:** RE-TESTED — REFINED.
  - **Evidence:** "protocol-not-section" is preserved (loop-boundary orchestration is protocol-layer = the meta-loop, not inside the discipline). "The boundary protocol enumerates loop-control into the field" is corrected to "routelister enumerates the concept-field; the meta-loop decides loop-control." The separate "boundary protocol" was a phantom; it dissolves into the meta-loop's boundary step (the work survives there).

- **Commitment:** routeman's 16-type taxonomy enumerated all moves (concept + loop-control) as routes.
  - **Source:** `cognitive_harness/routeman/references/routeman.md` §2.2.
  - **Re-test status:** RE-TESTED (artifact-grounded).
  - **Evidence:** confirmed — this all-as-routes model is the source of the enumeration frame; it forced control-flow into route-shape, and the "enumerate a loop-control menu" assumption inherited it.

- **Commitment:** the meta-loop selects + owns cross-run state; "Navigation sees; it does not choose."
  - **Source:** `/Users/ns/.claude/skills/meta-loop/SKILL.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** confirmed — the meta-loop is the loop-aware controller, so the loop-control *decisions* are naturally its (with the runner owning the per-cycle conclude/iterate grain).

All four priors re-tested with cited evidence; none inherited without re-test.

## Next Actions

### MUST

- **What:** Treat the loop-control moves as the meta-loop's control-decision vocabulary — do NOT build a "boundary protocol" (or any layer) that *enumerates / composes a loop-control menu.*
  - **Who:** the meta-loop spec (`cognitive_harness/protocols/` / the meta-loop) + whoever authors the architecture.
  - **Gate:** condition-bound — when the meta-loop / boundary orchestration is authored.
  - **Why:** prevents re-building routeman's all-as-routes mistake one level up; keeps loop-control as control-flow where it belongs.

- **What:** Make the "boundary" the meta-loop's *boundary step* (call routelister with the finished cycle as territory; read the concept-field; decide), not a separate boundary-protocol artifact.
  - **Who:** the meta-loop spec.
  - **Gate:** condition-bound — when the meta-loop is authored.
  - **Why:** removes the phantom layer that caused the recurring "isn't it doing what routelister does?" confusion.

### COULD

- **What:** If multiple controllers ever need loop-boundary calls, factor the cycle→territory translation into a thin reusable *adapter* (a helper, not a control protocol, not an enumerator).
  - **Who:** the protocol layer.
  - **Gate:** condition-bound — only if a second controller that calls routelister at a boundary appears.
  - **Why:** avoids duplicating the cycle→territory translation, without resurrecting the phantom layer.
  - **Depends-on:** MUST item "boundary = the meta-loop's step." OVERRIDE: this COULD is adoption-ready independent of the MUST only *if* a second caller materializes; until then it stays dormant. Reason: it's conditional on a future caller that does not yet exist.

### DEFERRED

- **What:** Specify how the meta-loop *decides* each loop-control move against the loop-state (the control-decision spec).
  - **Gate:** condition-bound — when the meta-loop's control logic is authored.
  - **Why (if revived):** turns "the meta-loop decides loop-control" into concrete, runnable decision rules.

## Reasoning

The verdict survived an adversarial pass in which the prosecution argued loop-control *is* enumerated and that collapsing the layer is over-collapse:

- **"Choosing a loop-control move requires listing the options — listing is enumeration."** Rejected: enumeration is *discovery of an unknown, open field*; the loop-control set is *known, closed, territory-independent*. Recalling seven known items is not discovery — it's deliberation preceding a decision. The runner proves it: it decides conclude/iterate without ever composing a menu.

- **"A dedicated boundary-controller could own loop-control, separate from the meta-loop."** Rejected: loop-control decisions need the loop-state, which the meta-loop (and the runner, per-cycle) already hold. A separate controller would need the same state — so it would duplicate the meta-loop or simply *be* it.

- **"Dissolving the boundary protocol is over-collapse — the cycle→territory translation is real work; and if multiple controllers call routelister, a shared boundary thing is useful."** Mostly rejected, with one refinement kept: the boundary *work* survives inside the meta-loop as its boundary step, so nothing real is lost; the only thing removed is the phantom *enumeration* job. The multi-caller point is real but resolves to a thin reusable *adapter* (a helper), not a control or enumeration layer — so it doesn't resurrect the phantom.

- **"Either the prior findings were wrong (correct them) or they were fine (leave them) — 'refine' is a fudge."** Rejected: the priors' cores are correct and survive (the loop-control moves need an owner = the meta-loop; loop-boundary orchestration is protocol-layer, not in the discipline), but their *framing* ("enumerate a menu") must change. Keeping the correct core while correcting the inherited frame is exactly what "refine" means.

What survived and assembled: the enumerate-vs-decide seam, the per-move ownership, the meta-loop+runner owner verdict, the phantom-layer collapse (with the work preserved inside the meta-loop), and the one-enumerator/two-controllers model. The emergent point is that removing the phantom layer *is* the cleanliness the user was after — and it explains why the confusion kept recurring.

A note on self-reference: this finding refines two findings from the same chain, under user pushback. That risk was audited. The refinement rests on grounds external to those findings and to the user's say-so — the runner already decides loop-control (observable, predates this), routeman's all-as-routes model is documented (§2.2), and the enumerate/decide distinction is a principled sensor/controller separation. And it *preserves the priors' valid cores* rather than discarding them — refinement, not capitulation.

## Open Questions

### Blocked

- The meta-loop's per-move decision spec (how it evaluates terminate/widen/merge/… against the loop-state) is blocked until the meta-loop's control logic is authored. The ownership and nature are settled here; the decision rules are downstream.

### Refinement Triggers

- If a loop-control-style move ever turns out to be genuinely *territory-derived and open* (discovered by sweeping, unbounded, varying per inquiry) rather than a member of a fixed vocabulary, the enumerate-vs-decide classification for that move re-opens — it would belong with enumeration, not decision.
- If a second controller (besides the meta-loop/runner) needs to call routelister at a boundary, revisit the thin-adapter COULD (factor the cycle→territory translation into a shared helper).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
Recall the loop-control moves we enumerated — TERMINATE (this whole inquiry is done), WIDEN (broaden the scope), MERGE (these two branches are really one line), RE-RUN-DEEPER (redo the last cycle with more depth), UNBLOCK (clear the gate

i feel like these are actaully meta-loop decisions and not relevant to boundary protocol or routelister... 

maybe our assumption of these belong to routelister was wrong?  i might be wrong but lets dive deep intensively and try to understand what makes more sense and more clean
```

</details>
