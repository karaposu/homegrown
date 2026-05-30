## User Input

`devdocs/inquiries/2026-05-30_09-49__loop_control_moves_metaloop_decisions_not_enumerated/_branch.md` (prior output: surfacing.md; workspace — the enumeration frame [Gap A] + the boundary-protocol claim [09-07] + routeman §2.2 [all-as-routes] + the runner-already-decides + the meta-loop-as-controller + the enumerate-vs-decide distinction + per-move). Are the loop-control moves an enumerated menu or the meta-loop's control DECISIONS?

---

# Structural Sensemaking — Loop-Control Moves: Enumerated Menu or Meta-Loop Decisions?

## SV1 — Baseline Understanding

Initial read: the user is right. The loop-control moves (TERMINATE, WIDEN, MERGE, RE-RUN-DEEPER, UNBLOCK, DIFFERENT-APPROACH, REVISIT) are the meta-loop's **control decisions**, not an **enumerated menu**. A concept-route points at *content* — an open field discovered from a territory, which you genuinely enumerate and pick from (routelister's job). A loop-control move is a *control-flow action* — a member of a small *fixed* vocabulary the controller already knows and evaluates against the loop-state. "Enumerate a loop-control menu" is a **routeman holdover**: routeman modeled everything as an enumerated route, so it forced control-flow into route-shape — and Gap A ("the menu is homeless; the meta-loop composes it") inherited that frame. The consequence: Gap A refines (the moves need an owner — yes, the meta-loop — but as *decisions*, not a *menu*), and the separate "boundary protocol" layer largely dissolves into the meta-loop (it was an over-decomposition, which is why "isn't the boundary protocol doing what routelister does?" kept recurring). The work: settle the enumerate-vs-decide nature, test it per-move, steelman the human-menu counter, and follow the consequence to the clean layering — while being honest that I'm refining my own prior finding, not just agreeing.

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints:**
- C1 — **routelister enumerates an OPEN, territory-derived field.** Concepts are unbounded, territory-specific, discovered fresh each run; you don't know what's there until you sweep. Enumeration = perceive-then-list a field you didn't know in advance.
- C2 — **The loop-control set is SMALL, FIXED, and a-priori.** terminate/widen/merge/re-run/unblock/different-approach/revisit is a closed vocabulary that does not grow with the territory. The controller knows it in advance; it doesn't discover it by sweeping anything.
- C3 — **The runner already treats loop-control as control-flow logic, not a menu.** The MVL runner does "is it answered? → CONCLUDE (terminate); else → loop again with refined focus." It evaluates state and commits an action — it never composes/presents a {terminate, loop-again} menu.
- C4 — **routeman modeled EVERYTHING as an enumerated route** (§2.2: 16 types in one taxonomy, "each route's action into one of sixteen named types"). It forced loop-control into route-shape.
- C5 — **The meta-loop is the loop-aware controller** (SELECTS + owns cross-run state; "Navigation sees, it does not choose").

**Key Insights:**
- K1 — **Enumerate and decide are different operations.** *Enumerate* = perceive an open field of options from a territory (you must look to know what's there) → routelister. *Decide* = a controller evaluates a small fixed control vocabulary against the current state and commits → the meta-loop/runner. A concept-route is enumerated (C1); a loop-control move is decided (C2). They are categorically different kinds of thing.
- K2 — **You don't "enumerate" a fixed vocabulary you already know.** The whole point of enumeration is discovery of the unknown (which concepts live here?). The loop-control set is known a priori, so there is nothing to discover — only an action to choose. Calling that "enumeration" is a category error; it's *deliberation over a known set* = a decision process.
- K3 — **"Enumerate a loop-control menu" is a routeman holdover.** Because routeman's identity was "produce the typed map of *all* possible next moves" (C4), it cast loop-control as enumerated routes (TERMINATE became "a route you could take"). When routelister was split off as the concept-enumerator, the assumption "someone must still enumerate the loop-control moves" rode along (Gap A: "the menu is homeless"). But that assumption only ever existed because routeman enumerated everything. Drop the all-as-routes model and there is no menu to compose — only decisions to make.
- K4 — **The runner is the existing proof.** Loop-control is *already* implemented as control-flow logic in the runner (C3), not as a composed menu. So "loop-control is decided, not enumerated" isn't a proposal — it's how the working system already behaves. The enumeration frame was never the actual mechanism; it was a description inherited from routeman's spec.
- K5 — **Per-move, each is a meta-loop decision (some with a perceptual input that's already someone's normal job):**
  - **TERMINATE / WIDEN / RE-RUN-DEEPER / DIFFERENT-APPROACH** — pure control decisions on the loop-state (terminate the line; broaden scope; redo deeper; switch method). The meta-loop's (cross-inquiry grain); the runner's at the per-cycle grain.
  - **MERGE** — *perception* "these two branches are the same concept-line" = routelister's **individuation** (already its job); *decision* "combine the branches" = the meta-loop's. No new enumerator.
  - **UNBLOCK** — *perception* "this gate blocks downstream" = a loop-state fact the meta-loop holds; *decision* "clear it" = the meta-loop's.
  - **REVISIT** — *perception* "re-surface a prior verdict" = the meta-loop's cross-cycle memory; *decision* resurrect/invalidate/revert = the meta-loop's.
  None of the seven needs a separate "boundary-protocol enumerator"; the perceptual inputs that exist are either routelister's existing individuation or the meta-loop's own state.
- K6 — **Two controllers, one enumerator.** Control-flow lives in *controllers*: the **runner** (per-cycle: conclude/iterate) and the **meta-loop** (cross-inquiry: terminate-line/widen/merge/revisit/...). Enumeration lives in *one place*: **routelister** (the concept-field). The loop-control moves belong to the controllers (mostly the meta-loop), never to an enumerator. This is the clean seam.
- K7 — **Gap A refines, it doesn't break.** Gap A's *valid core* — "the loop-control moves need an owner; routelister doesn't provide them" — survives and is correct: the owner is the meta-loop. What refines is the *frame*: not "enumerate/compose a menu" but "the meta-loop's control-decision vocabulary." The "homelessness" was an artifact of the enumeration frame — once you see them as the controller's decisions, they were never homeless; routeman just *published* them as routes.
- K8 — **The "boundary protocol" was an over-decomposition.** If loop-control = meta-loop decisions, the "boundary protocol that produces the complete field" had no unique enumeration job: the concept-field is routelister's, the loop-control is the meta-loop's decisions, the history is the meta-loop's memory. What remains is a thin **junction** — "at cycle-end, call routelister with the finished cycle as territory, then apply control logic" — which is a *step in the meta-loop's process*, not a separate layer. The separate layer dissolves *into* the meta-loop; the work survives there.
- K9 — **This is why the confusion kept recurring.** "Isn't the boundary protocol doing what routelister does?" had a real cause: the boundary protocol was a phantom layer. Once routelister enumerates the concept-field and the meta-loop decides everything loop-relative, there is no third "produces-a-field" thing between them. Removing the phantom dissolves the confusion.

**Structural Points:**
- S1 — Three roles, not four: **enumerator** (routelister — concept-field) / **controllers** (runner per-cycle + meta-loop cross-inquiry — all control decisions) / no separate "boundary enumerator."
- S2 — The boundary is a *junction inside the meta-loop's process* (call routelister, feed cycle-as-territory), not an artifact that enumerates.

**Foundational Principles:**
- P1 — Enumerate the unknown (territory-derived open fields); decide over the known (fixed control vocabularies). The verb must match the thing.
- P2 — Control-flow belongs to controllers; enumeration belongs to the perceiver. Don't make a perceiver/enumerator emit control-flow, and don't model control-flow as an enumerated field.

**Meaning-Nodes:**
- M1 — *enumerate-vs-decide (the nature)*; M2 — *loop-control = control decisions, not routes*; M3 — *the enumeration frame is a routeman holdover*; M4 — *meta-loop = the controller owns them*; M5 — *the boundary-protocol layer dissolves into the meta-loop*.

### SV2 — Anchor-Informed Understanding

The loop-control moves are the meta-loop's control decisions, not an enumerated menu — because enumeration is discovery of an open territory-derived field (routelister's concepts), while loop-control is a small fixed vocabulary a controller evaluates against state (which the runner already does as logic, not a menu). "Compose a loop-control menu" is a routeman holdover from its all-as-routes model. Per move, each is a meta-loop decision (MERGE/UNBLOCK/REVISIT have perceptual inputs that are already routelister's individuation or the meta-loop's own state). Consequently Gap A refines (owner = meta-loop, but as decisions not a menu; the "homelessness" was a frame artifact) and the separate "boundary protocol" dissolves into the meta-loop's boundary step — which is why the "isn't it doing what routelister does?" confusion kept recurring (it was a phantom layer).

*Meta-Inspection (H4 concept names): "enumerate vs decide" — a real structural distinction? Yes: verified by routelister's open territory-field vs the fixed 7-move vocabulary, and by the runner already deciding (not enumerating). (H8 self-reference): I'm refining my own prior Gap A — tested in Phase 3 Ambiguity 6.*

---

## Phase 2 — Perspective Checking

**Technical / Logical:** in any control system, the *sensor* reports an open reading (what's out there) and the *controller* selects from a fixed action-set (the actuator's repertoire). routelister = sensor (open concept-field); the loop-control moves = the controller's fixed action-repertoire. You wouldn't say a thermostat "enumerates a menu of {heat, cool, idle}" — it *decides* among a known repertoire based on the reading. Same here. New anchor → **K10: loop-control is the controller's fixed action-repertoire; "enumerating" a fixed repertoire is a category error — controllers decide over it.**

**Human / User:** the user's discomfort is precise and correct: the loop-control moves "feel like meta-loop decisions." The reason it felt wrong to house them in routelister or a boundary protocol is that those are *perception/enumeration* layers, and control-flow doesn't belong there. Naming the enumerate-vs-decide seam validates the instinct and explains the recurring confusion. New anchor → **K11: the user's instinct tracks the enumerate/decide seam; the confusion was a real symptom of a misplaced (phantom) layer.**

**Strategic / Long-term:** collapsing the phantom boundary-protocol layer makes the endgoal architecture simpler and more robust: one enumerator (routelister, reusable anywhere) + the controllers (runner + meta-loop). Fewer layers, clearer ownership, no "menu-composition" machinery to build. The meta-loop's control vocabulary can also evolve (add a control move) without touching routelister.

**Risk / Failure (over-collapse):** the danger is dissolving a layer that does real work. Does any *work* vanish if the boundary protocol dissolves? No — the work (call routelister at cycle-end; translate cycle→territory; apply control logic) survives *inside the meta-loop*. What dissolves is the *separate-artifact framing* + the *enumerate-a-menu* responsibility (which was never real work — it was a routeman holdover). So this is removing a phantom, not deleting real work. New anchor → **K12: the boundary work survives inside the meta-loop; only the separate-layer framing + the phantom enumeration job are removed.**

**Resource / Feasibility:** decide-not-enumerate is *cheaper* — no menu-composition layer to author; the meta-loop applies a fixed control vocabulary. And it matches the already-built runner. Strongly favors the user's view.

**Definitional / Internal Consistency:** does this contradict 09-07 ("loop-boundary things = a protocol, not a section in routelister")? No — it *refines* it. 09-07's load-bearing claim (loop-boundary orchestration is protocol-layer, not inside the discipline) HOLDS: the meta-loop is protocol-layer. What refines is (a) the protocol is the meta-loop (09-07 already said "likely the meta-loop"), and (b) its job is *decisions*, not *enumerating a loop-control menu* — so 09-07's "the boundary protocol produces the complete field incl. loop-control moves" is corrected: routelister produces the concept-field; the meta-loop decides loop-control. New anchor → **K13: 09-07's protocol-not-section survives; its "boundary protocol enumerates loop-control" is corrected to "the meta-loop decides loop-control"; the separate boundary protocol = the meta-loop's boundary step.**

**Definitional / Frame-exit Completeness (light):** the inquiry inherits multi-value terms ("next-move," "menu," "boundary"). Existence Enumeration of "next-moves" project-wide: (i) concept-routes (routelister — enumerated); (ii) loop-control moves (the meta-loop — decided); (iii) per-cycle conclude/iterate (the runner — decided). Three referents, two kinds (enumerated vs decided), three owners. The "unified next-move menu" (routeman) conflated (i)+(ii) into one enumerated object — the conflation is the holdover. New anchor → **K14: "next-move" is two kinds (enumerated concept-routes + decided control-moves); routeman's "unified menu" conflated them; the clean model keeps them separate by kind and owner.**

**Phase / Calibration-State:** is "decide, don't enumerate" contingent on the meta-loop being mature? No — even with a human as the v1 chooser, the human *decides* over the fixed control vocabulary (presented trivially) while routelister enumerates the concept-field. The seam holds at every maturity. New anchor → **K15: the enumerate/decide seam is maturity-independent; the v1 human is the controller deciding over the fixed vocabulary, not an enumeration layer.**

**Self-Reference (H8 / failure mode #6):** I'm overturning the *frame* of my own prior finding (08-14 Gap A) under user pressure — risk of capitulation OR of over-rigorous self-correction. Guard: the refinement rests on *external/observable* grounds — the runner already decides (C3, predates this), routeman's all-as-routes model is documented (C4, §2.2), and the enumerate/decide distinction is principled (sensor/controller, K10). And I preserve Gap A's *valid core* (the moves need an owner = the meta-loop) rather than discarding the finding wholesale — that's refinement, not capitulation. I also steelman the counter (the human-menu) below rather than just agreeing. Check passed.

### SV3 — Multi-Perspective Understanding

Loop-control is the controller's fixed action-repertoire (sensor/controller pattern); "enumerating" a fixed repertoire is a category error. The user's instinct tracks the real enumerate/decide seam, and the recurring confusion was the symptom of a phantom layer. Collapsing it simplifies the architecture without losing work (the boundary work survives inside the meta-loop; only the separate-layer framing + the phantom enumeration job go). This refines 08-14 Gap A (owner survives, "menu" frame corrected) and 09-07 (protocol-not-section survives, "boundary protocol enumerates loop-control" corrected to "the meta-loop decides it"). "Next-move" is two kinds — enumerated concept-routes + decided control-moves — that routeman's unified menu wrongly conflated.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Are loop-control moves enumerated options or control decisions? (OT1 — the crux)

**Strongest counter-interpretation:** "To choose a loop-control move you must first list the available ones — that listing IS enumeration; so loop-control gets enumerated too, just from loop-state instead of a territory."

**Why the counter fails (structural grounds):** enumeration's defining feature is *discovery of an unknown, open field* — you sweep a territory because you don't know in advance what concepts are there, and the set is unbounded and territory-specific. The loop-control set is *known in advance, closed, and territory-independent* (the same seven moves apply to every loop). "Listing seven things you already know" is not discovery; it's the trivial recall of a fixed repertoire that precedes a *decision*. A thermostat doesn't "enumerate {heat, cool, idle}"; it decides among a known repertoire. The runner proves it: it never lists/presents a {terminate, loop-again} menu — it evaluates state and commits. So the operation on loop-control is *decision over a fixed vocabulary*, categorically distinct from *enumeration of an open field*. **Confidence:** HIGH. **Resolution:** loop-control moves are **control decisions** (a fixed vocabulary evaluated against state), not enumerated options.

### Ambiguity 2 — Who owns them? (OT2)

**Counter-interpretation:** "Maybe a dedicated boundary protocol owns the loop-control logic, separate from the meta-loop."

**Why it fails (structural grounds):** the loop-control decisions require the loop-state (what's blocked, which cycle, is-it-answered, prior verdicts) — and the loop-aware layer that holds that state IS the meta-loop (+ the runner at the per-cycle grain). A "dedicated boundary protocol" separate from the meta-loop would need the same state the meta-loop already has → it would either duplicate the meta-loop or just *be* the meta-loop. There's no state a separate boundary-controller would hold that the meta-loop doesn't. **Confidence:** HIGH. **Resolution:** the **meta-loop** owns the cross-inquiry loop-control decisions (the **runner** owns the per-cycle conclude/iterate); never an enumerator, never a separate boundary-controller.

### Ambiguity 3 — Is "enumerate a loop-control menu" a routeman holdover? (OT1/OT2)

**Counter-interpretation:** "Maybe routeman enumerated loop-control because it genuinely should be enumerated, not as an accident of its model."

**Why it fails (structural grounds):** routeman's *identity* was "produce the typed map of all possible next moves" — its single taxonomy (§2.2) had to assign *every* move a type, so control-flow actions were cast as routes by construction. That's a property of routeman's all-as-routes *model*, not evidence about loop-control's nature. The independent evidence (the runner deciding, not enumerating; the fixed-vocabulary nature) shows loop-control is control-flow. So routeman enumerated it *because its model enumerated everything*, not because enumeration fits control-flow. **Confidence:** HIGH. **Resolution:** yes — the enumeration frame is a routeman holdover; Gap A inherited it.

### Ambiguity 4 — Does the boundary-protocol layer dissolve, and do we lose work? (OT3 — guard against over-collapse)

**Strongest counter-interpretation:** "Dissolving the boundary protocol is over-collapse — it does real work (translating a finished cycle into routelister's input, sequencing the call); deleting the layer loses that."

**Why the counter partially holds and resolves:** the *work* is real (call routelister at cycle-end; translate cycle→territory; then apply control logic). But that work doesn't constitute a *separate layer between routelister and the meta-loop* — it's the meta-loop's *boundary step* (the meta-loop is the caller; it knows the finished cycle and the next focus, so it does the cycle→territory translation as part of invoking routelister). So the layer-as-separate-artifact dissolves *into* the meta-loop; the work survives there. What is actually deleted is only the *phantom enumeration job* ("compose a loop-control menu"), which was never real work. **Confidence:** HIGH. **Resolution:** the separate "boundary protocol" dissolves into the meta-loop's boundary step (the work survives inside the meta-loop); only the phantom enumeration responsibility is removed. Not over-collapse — phantom-removal.

### Ambiguity 5 — Does the human-menu (v1) resurrect an enumeration layer? (the steelman)

**Strongest counter-interpretation:** "When a human is the chooser, they must SEE the loop-control options alongside the concept-routes — so something must enumerate-and-present the loop-control moves; that's an enumeration layer."

**Why the counter fails (structural grounds):** presenting options to a human is the *controller surfacing its decision context*, not a perceiver discovering a field. The meta-loop, deferring to a human, shows "here are the concept-routes [routelister's enumerated field] + here are the control options I'm weighing [my fixed vocabulary]." The control options come from the controller's *known* repertoire (trivially listed — you don't need a discipline to recall seven fixed items), not from sweeping a territory. So the human-menu is the meta-loop's *presentation/UI*, which is part of being the controller — it does not create a separate enumeration layer, and it certainly doesn't put loop-control in routelister or a boundary enumerator. **Confidence:** HIGH. **Resolution:** the human-menu is the controller presenting its decision context; it does not resurrect an enumeration layer.

### Ambiguity 6 — Self-reference: am I capitulating to the user / wrongly overturning my own Gap A? (H8)

**Counter:** "you wrote Gap A (08-14); changing it under user pushback could be capitulation, not analysis."

**Why it fails:** the refinement rests on grounds external to both Gap A and the user's say-so — the runner *already* decides loop-control as control-flow (observable, predates this inquiry), routeman's all-as-routes model is documented in §2.2 (observable), and the enumerate/decide distinction is a principled sensor/controller separation. And it is a *refinement*, not a capitulation: Gap A's valid core (the loop-control moves need an owner, and routelister isn't it) is *preserved and confirmed*; only the routeman-inflected *frame* ("enumerate/compose a menu") is corrected to "the controller's decisions." A capitulation would discard Gap A; this keeps its substance and sharpens its language. **Confidence:** HIGH. **Resolution:** grounded refinement, not capitulation; Gap A's core survives, its frame is corrected.

### SV4 — Disambiguated Understanding

All six ambiguities resolve HIGH. Loop-control moves are the meta-loop's control decisions (a fixed vocabulary evaluated against loop-state), categorically distinct from routelister's enumeration of an open territory-derived concept-field. The owner is the meta-loop (cross-inquiry) + the runner (per-cycle); never an enumerator or a separate boundary-controller. "Enumerate a loop-control menu" is a routeman holdover (its all-as-routes model). The separate "boundary protocol" dissolves into the meta-loop's boundary step — the work (call routelister, cycle→territory) survives inside the meta-loop; only the phantom enumeration job is removed. The human-menu is the controller's presentation, not a resurrected enumeration layer. This refines Gap A (core preserved, frame corrected) and 09-07 (protocol-not-section preserved, "boundary protocol enumerates loop-control" corrected).

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:**
- Loop-control moves = the meta-loop's **control decisions** (fixed vocabulary on loop-state), NOT enumerated options.
- Enumerate (open territory-field → routelister) vs decide (fixed vocabulary → controllers) is the load-bearing seam.
- Owner: **meta-loop** (cross-inquiry loop-control) + **runner** (per-cycle conclude/iterate). Never an enumerator; never a separate boundary-controller.
- "Compose a loop-control menu" = a routeman holdover (all-as-routes); Gap A's frame is corrected.
- The separate "boundary protocol" dissolves into the meta-loop's boundary step; the work survives there; only the phantom enumeration job is removed.
- Per move: TERMINATE/WIDEN/RE-RUN/DIFFERENT-APPROACH = pure meta-loop decisions; MERGE = routelister-individuation (perception) + meta-loop decision; UNBLOCK = meta-loop gate-state + decision; REVISIT = meta-loop memory + decision.
- Clean end-state: **routelister (enumerator) + meta-loop (controller) + runner (per-cycle controller)** — two controllers, one enumerator.

**Eliminated:**
- "loop-control moves are enumerated options / a menu" — KILLED (category error; fixed vocabulary ≠ open field).
- "a boundary protocol enumerates/composes the loop-control menu" — KILLED (phantom job; routeman holdover).
- "a separate boundary-controller owns loop-control" — KILLED (it'd duplicate or be the meta-loop).
- "the human-menu requires an enumeration layer" — KILLED (it's the controller's presentation).

**Remaining viable (downstream; out of scope):**
- The meta-loop's exact control-decision spec (how it evaluates each move against state) — structural/process, deferred.
- Whether the meta-loop's "call routelister at the boundary" step is documented in the meta-loop spec or a thin sub-protocol — a minor downstream placement detail (it is the meta-loop's, either way).

### SV5 — Constrained Understanding

The architecture collapses to **one enumerator + two controllers**: routelister enumerates the open concept-field (loop-blind, reusable); the meta-loop decides all cross-inquiry loop-control moves (terminate/widen/merge/re-run/unblock/different-approach/revisit) from its fixed vocabulary + loop-state, and the runner decides per-cycle conclude/iterate. Loop-control is *decided*, not *enumerated*; "compose a loop-control menu" was a routeman holdover; the separate "boundary protocol" was a phantom that dissolves into the meta-loop's boundary step. Gap A and 09-07 are refined (cores preserved, enumeration framing corrected).

---

## Phase 5 — Conceptual Stabilization

*Accommodation check: the perspectives converged on enumerate-vs-decide + controller-ownership + phantom-layer-removal; no perspective forced repeated revision. The steelmen (human-menu, over-collapse) resolved cleanly (presentation ≠ enumeration; work survives inside the meta-loop). Stable; no model-misfit.*

### SV6 — Stabilized Model — Loop-Control Moves Are the Meta-Loop's Decisions, Not an Enumerated Menu

**You're right — and this is an important cleanup. The loop-control moves are the meta-loop's *control decisions*, not an enumerated menu; "compose a loop-control menu" was a routeman holdover; and the separate "boundary protocol" was a phantom layer that dissolves into the meta-loop. Here is the clean picture.**

**The load-bearing distinction: enumerate vs decide.**
- **Enumerate** = perceive an *open, unknown field* discovered from a territory. You sweep because you don't know in advance what's there; the set is unbounded and territory-specific. *This is what routelister does with concepts.*
- **Decide** = a controller evaluates a *small, fixed, known* action-vocabulary against the current state and commits. You don't discover the vocabulary; you already have it. *This is what a controller does with loop-control.*

A concept-route ("DEEPEN auth") is enumerated — it's content you had to look to find. A loop-control move ("TERMINATE", "WIDEN", "MERGE") is decided — it's a control-flow action from a fixed repertoire (the same seven apply to every loop). Asking who "enumerates the loop-control menu" is like asking a thermostat to "enumerate {heat, cool, idle}" — it doesn't enumerate a known repertoire; it *decides* among it based on the reading.

**The proof it was already this way: the runner.** The MVL runner has always handled loop-control as control-flow *logic* — "is the question answered? → conclude (terminate); else → loop again with refined focus." It never composes or presents a {terminate, loop-again} menu. So "loop-control is decided, not enumerated" isn't a new proposal; it's how the working system already behaves. The "enumerate a menu" framing was a *description inherited from routeman's spec*, not the actual mechanism.

**Why the wrong frame crept in: a routeman holdover.** routeman's identity was "produce the typed map of *all* possible next moves" — its single taxonomy had to give *every* move a type, so it cast control-flow actions (terminate, widen, merge) as "routes" by construction. When we split routelister off as the concept-enumerator, the assumption "someone still has to enumerate the loop-control moves" rode along — that became Gap A's "the menu is homeless; the meta-loop composes it." But that assumption only existed because routeman enumerated *everything*. Drop the all-as-routes model and there's no menu to compose — only decisions to make.

**Where each move lives (per-move):**
- **TERMINATE / WIDEN / RE-RUN-DEEPER / DIFFERENT-APPROACH** — pure control decisions on the loop-state. The meta-loop's (cross-inquiry); the runner's at the per-cycle grain.
- **MERGE** — the *perception* "these two branches are the same concept-line" is **routelister's individuation** (already its everyday job); the *decision* "combine the branches" is the **meta-loop's**.
- **UNBLOCK** — the gate-state is a loop-fact the **meta-loop** holds; clearing it is the **meta-loop's** decision.
- **REVISIT** — the prior verdict lives in the **meta-loop's** cross-cycle memory; resurrect/invalidate/revert is the **meta-loop's** decision.

None of the seven needs a separate "boundary-protocol enumerator." The only perceptual inputs involved are either routelister's existing individuation (for MERGE) or the meta-loop's own state (gates, prior verdicts).

**The clean architecture: one enumerator, two controllers.**
- **routelister** (the enumerator / discipline) — enumerates the open concept-field on any territory. Loop-blind. Reusable anywhere.
- **the meta-loop** (the cross-inquiry controller / protocol) — the single home of all cross-inquiry loop-relative judgment: it calls routelister at the boundary (handing it the finished cycle as territory), reads the concept-field, *decides* the loop-control moves from its fixed vocabulary, selects among concept-routes, triages, owns cross-cycle memory + autonomy.
- **the runner** (the per-cycle controller) — runs one cycle's disciplines; decides per-cycle conclude/iterate.

There is **no separate "boundary protocol"** that "produces a complete field including loop-control moves." That was a phantom layer — which is exactly why "isn't the boundary protocol doing what routelister does?" kept recurring. The boundary is just a *junction inside the meta-loop's process* (call routelister, feed cycle-as-territory, then decide). The work survives there; only the phantom enumeration job is gone.

**What this does to the prior findings (honest re-test):**
- **Gap A (08-14) — refined, not broken.** Its valid core ("the loop-control moves need an owner; routelister doesn't provide them") is *correct and preserved* — the owner is the meta-loop. Its *frame* ("enumerate / compose a menu") is corrected to "the meta-loop's control decisions." The "homelessness" was an artifact of the enumeration frame; seen as the controller's decisions, they were never homeless — routeman just *published* them as routes.
- **09-07 — refined, not broken.** "Loop-boundary things are protocol-layer, not a section in routelister" *holds* (the meta-loop is protocol-layer). What's corrected is "the boundary protocol *enumerates* loop-control moves into the field" → "the meta-loop *decides* loop-control; routelister enumerates only the concept-field." The separate boundary protocol = the meta-loop's boundary step.

**How SV6 differs from SV1:** SV1 sensed "user is right; routeman holdover." SV6 *proves* it via the enumerate-vs-decide distinction (open territory-field vs fixed control vocabulary), the runner-already-decides evidence, and the sensor/controller pattern; settles ownership (meta-loop + runner, never an enumerator); does the per-move decomposition (incl. MERGE = individuation + decision); collapses the phantom boundary-protocol layer *without over-collapse* (the work survives inside the meta-loop); kills the human-menu steelman (presentation ≠ enumeration); and *refines rather than discards* Gap A and 09-07 (cores preserved, enumeration framing corrected) — with the self-reference guard that this rests on external/observable grounds, not user-pressure.

---

## Saturation / Telemetry

- **Perspective saturation:** saturating — technical (sensor/controller), user, strategic, risk (over-collapse), definitional (vs 09-07), frame-exit, phase all converged on enumerate-vs-decide + controller-ownership + phantom-removal.
- **Ambiguity resolution ratio:** 6/6 HIGH; 0 OPEN.
- **SV delta:** large (SV1 "user right, routeman holdover" → SV6 the proven enumerate/decide seam + per-move + the one-enumerator/two-controllers model + the phantom-layer collapse + the Gap-A/09-07 refinements).
- **Anchor diversity:** multi-type (Constraints C1–C5, Insights K1–K15, Structural S1–S2, Principles P1–P2, Meaning-nodes M1–M5) across perspectives.
- **Failure modes checked:** Status Quo Bias (didn't defend Gap A's frame because it's mine — refined it on external grounds; but preserved its valid core, not reflexive agreement either); Clean Resolution Trap (the "listing-is-enumeration," "human-menu-needs-a-layer," and "over-collapse" easy reads were each tested on structural grounds and resolved); Premature Stabilization (the load-bearing concepts — enumerate/decide, the boundary-protocol's reality — each ambiguity-tested; the steelmen generated); Perspective Blindness (the uncomfortable "am I just agreeing with the user / overturning my own finding" checked); **Self-Reference — guarded** (external/observable anchors: the runner, routeman §2.2, the sensor/controller pattern; refinement preserves Gap A's core); Phase/Calibration (the seam is maturity-independent; v1 human is a controller, not an enumerator).

**Handoff to Decomposition:** structure to partition — (1) the enumerate-vs-decide nature (OT1); (2) per-move ownership (OT4); (3) the owner verdict — meta-loop + runner, not an enumerator (OT2); (4) the boundary-protocol dissolution + the work-survives-inside-meta-loop guard (OT3); (5) the clean one-enumerator/two-controllers model (OT0); (6) the Gap-A + 09-07 refinements (synthesis + re-test). Candidate sub-questions for /decompose.
