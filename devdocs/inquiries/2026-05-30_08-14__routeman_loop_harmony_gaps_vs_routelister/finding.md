---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: What Routeman Could Do That Routelister Can't — The Loop-Harmony Gap Inventory

## Question

We are building a "thinking discipline" called **routelister** to replace an older one called **routeman**. Both do *navigation* — they look at a body of work and enumerate the possible next moves (the "routes" you could take). The difference is in their identity:

- **routeman** was built to run *inside a thinking loop* — it lived between cognitive cycles and its job was tangled up with the loop's machinery (deciding when to stop, when to loop again, which prior verdicts to revisit).
- **routelister** is being built as a *standalone individual discipline* — it works on any body of work, regardless of whether a loop is running, and its identity is *intrinsic* (not defined by its position in a loop).

The question: **what could routeman do that routelister can't?** The user's framing — *"with routelister we tried to cover the individual-discipline aspect; with routeman we were focused on running in harmony with the MVL loops"* — sets the hypothesis: the capability difference should be exactly the *loop-harmony* half. The goal is an honest capability delta with each lost capability assigned a new owner, classified as a genuine gap / correctly relocated / correctly dropped, and a verdict on whether the gap is *in routelister* (a discipline deficiency) or at the *system level* (the loop-integration layer that the redesign dropped but didn't fully rehome).

A negative spec on what would fail: concluding "routelister covers everything" (it deliberately doesn't); treating a correctly-relocated function as a routelister gap; or proposing to re-admit loop-control moves into routelister's identity (which would re-import the very defect the redesign removed).

## Finding Summary

- **The capability delta is exactly — and only — the loop-harmony half.** Everything routelister can't do that routeman could is something that *presupposes the loop*. Nothing non-loop was lost. The user's framing is confirmed precisely.

- **Five functions were dropped:** (1) enumerating *loop-control moves* (stop / re-run-deeper / widen / try-a-different-approach / revisit / unblock / merge); (2) *cross-cycle revisitation* (resurrecting, invalidating, or reverting verdicts from earlier cycles); (3) *autonomy classification* (marking which moves a system can take on its own vs. which need a human); (4) *loop-relative route-state* (a route's done/stale/superseded status, what blocks it, what it unblocks); (5) the *loop-position in identity* (routeman was *defined* as the between-cycles discipline).

- **Most of the delta is correctly relocated or correctly dropped, not lost:** the *selection* of which move to take and the *cross-cycle memory store* belong to the **meta-loop** (the loop-aware layer that traverses cognitive cycles); *stopping and looping-again* belong to the **MVL runner** (the per-cycle controller); and the *inter-route dependency graph* ("Unlocks") was correctly dropped because routeman's own specification never owned it.

- **Four functions are genuine gaps — all at the system/composition layer, none inside routelister:**
  - **Gap A (the sharpest): the loop-control-move menu has no producer.** routeman listed loop-control moves *alongside* concept-moves in one unified "what next?" menu. routelister produces only the concept half. The meta-loop's design expects navigation to map the next moves — but navigation now maps only the concept half, so the loop-control half fell out and nothing picks it up.
  - **Gap B: the cross-cycle revisit *operation* is unwritten.** The storage place exists (the meta-loop's cross-cycle memory file); the operation that resurrects/invalidates/reverts prior verdicts is not specified there.
  - **Gap C: routelister's loop-role is undocumented** — how the loop hands it a finished cycle to read, and how its output feeds the meta-loop's selection.
  - **Gap D: the boundary between two memories is undrawn** — routelister's own concept-map (what concepts exist and how deeply each is developed) vs. the meta-loop's cross-cycle traversal memory (which moves were taken, how verdicts evolved).
  - Plus a half-gap: **autonomy classification relocates to the meta-loop's "autonomy ladder," but that ladder is currently parked/half-baked** — the home exists but isn't ready.

- **The keystone fix (Gap A): the meta-loop composes the menu.** The meta-loop — being the loop-aware layer — assembles the full "what next?" menu by reading *both* its own loop-state (which gives it stop / re-run / widen / different-approach) *and* routelister's concept-map index (which gives it the perception-dependent moves like merge — "these two concepts are actually one" — and unblock — "this concept's prerequisite is now done"). routelister itself never enumerates loop-control moves; it stays a pure perception layer. This dissolves the gap *without* re-coupling the discipline to the loop.

- **The meta-verdict: there is no gap *in* routelister.** Shedding the loop-harmony half is not a deficiency — it is the *fix*. The original diagnosis (that routeman's defect was a loop-*relative* identity) is vindicated, and it is independently confirmed by the meta-loop architecture's own founding rule: *"Navigation sees; it does not choose."* The design gaps the user is hunting are real, but they live one layer up — in the meta-loop's specification, in routelister's loop-role documentation, and in the boundary between the two memories — not in the discipline itself.

## Finding

### Why we are asking this

Across a long design effort, routelister was built up as a standalone, intrinsic replacement for routeman. The motivation came from an earlier diagnosis: routeman's core problem was that its *identity* was defined relative to the loop it ran in. Its machinery was mature, but it could only describe what it did by pointing at the loop ("I am the discipline that runs between cognitive cycles"). routelister was designed to fix this — to be a discipline you could point at *any* body of work and get back a list of typed routes, loop or no loop.

That redesign deliberately threw away the loop-bound parts of routeman. The natural worry — and the user's question — is: *did we throw away something we'll regret? And if so, where does it need to live now?* This finding is the honest accounting.

### The capability delta is exactly the loop-presupposing set

The clean result is that the carried/dropped line falls *exactly* on the loop-presupposing line. Walk each dropped capability and ask "does its meaning require a loop?" — and every one says yes:

- The dropped move-types are all *loop-control*: "stop the line of inquiry," "merge two branches," "re-run this deeper" — none of these mean anything outside a loop.
- Revisitation is *cross-cycle* by definition — it reaches back into earlier cycles' verdicts.
- Autonomy classification feeds the loop's *graduated-autonomy* mechanism (how much the system is trusted to do on its own as a project matures).
- Route-state's done/stale/superseded labels are *cycle-relative*; "what blocks this" and "what this unblocks" describe a route-graph that only exists within a running process.
- The loop-position was literally *in routeman's identity*.

Meanwhile, the complement — everything routelister *kept* — is everything that does *not* presuppose a loop: the nine concept-engagement route-types (deepen, develop, refine, reframe, diagnose, test, and so on), the route-map output, the adaptive guidance, the "enumerate everything, don't pre-select" stance. So there is no non-loop capability that routelister lost. The user's hypothesis — routelister covers the individual-discipline aspect; the whole delta is loop-harmony — is confirmed exactly, not approximately.

### Where each lost capability belongs now — the ownership map

The right way to see the redistribution is as a **layered architecture**, the same separation-of-concerns pattern that separates sensors from controllers in any control system:

- **routelister = the perception layer (the sensor).** It enumerates concept-routes and holds the project's concept-map. It perceives; it does not steer.
- **the meta-loop = the control layer (the chooser).** It selects which move to take, remembers across cycles, and — once Gap A is filled — composes the full move menu. This rests on the meta-loop architecture's founding rule, *"Navigation sees; it does not choose,"* which assigns selection and cross-cycle memory to the meta-loop by design.
- **the MVL runner = the scheduler.** It controls a single cycle: decide whether the question is answered (stop), or loop again with a refined focus.

Against that backdrop, here is every dropped function and its disposition:

| What routeman did | Where it belongs now | Status |
|---|---|---|
| Enumerate concept-routes *(kept)* | routelister (perception) | done |
| **Select** the next move | the meta-loop (and the human, in early versions) | correctly relocated |
| **Store** cross-cycle memory | the meta-loop's cross-cycle memory file | store exists |
| **Stop / loop-again** | the MVL runner | correctly relocated |
| Inter-route dependency graph ("Unlocks") | — | correctly dropped (routeman's own spec never owned it) |
| **Enumerate loop-control moves** | the meta-loop should compose them | **Gap A** |
| **Revisit** operation (resurrect/invalidate/revert) | the meta-loop's cross-cycle memory file | **Gap B** |
| routelister's **loop-role** contract | routelister's own spec + the composition | **Gap C** |
| The **two-memories boundary** | cross-cutting (the concept-map vs. the cross-cycle memory) | **Gap D** |
| Autonomy classification | the meta-loop's "autonomy ladder" | relocated but the home is parked |

The first four rows below the kept/relocated/dropped block are the genuine gaps. The last is a half-gap: the relocation target is correct but immature.

### The four genuine gaps, and how each is filled

**Gap A — the loop-control-move menu has no producer.** This is the sharpest and most consequential gap, so it deserves the most care.

Under routeman, when you asked "what should I do next?", you got *one* menu that mixed concept-moves ("deepen concept X," "reframe concept Y") with loop-control moves ("stop here," "widen the scope," "merge these two threads"). That single unified menu was convenient and complete. routelister produces only the concept half. And here is the trap: the meta-loop's design says it *uses navigation as its eyes to map the possible next moves* — it delegates move-mapping to navigation and reserves *choosing* for itself. But navigation (now routelister) maps only concept-moves. So the loop-control half of the menu silently fell out: routelister correctly doesn't produce it (those moves are loop-bound), and the meta-loop's spec doesn't pick it up (it assumed navigation would).

The fix is **not** to put loop-control back into routelister — that would re-couple the discipline to the loop and re-create routeman's defect. The fix is for the **meta-loop to compose the menu**, because the meta-loop is the loop-aware layer. Concretely, the meta-loop assembles the full "what next?" menu by reading two sources:

1. **its own loop-state** — which directly gives it the moves that depend only on where the loop is: stop, re-run-deeper, widen, try-a-different-approach.
2. **routelister's concept-map index** — which it needs for the *perception-dependent* loop-control moves. This is the subtle part the critique surfaced: a *merge* move ("these two threads are actually the same concept") requires *perceiving* that the two concepts are one — and that perception lives in routelister's concept-map, not in the loop-state. Likewise *unblock* ("this concept's prerequisite is now finished") needs the concept-map to know the prerequisite relationship. So the composer is a **reader of the perception layer**, not a re-enumerator of it. routelister stays a pure sensor; the meta-loop reads the sensor plus its own loop-state and assembles the menu.

This keystone is what re-unifies the menu that routeman used to produce alone — but now correctly split across the perception layer (routelister sees) and the control layer (the meta-loop assembles and chooses).

**Gap B — the revisit operation is unwritten.** The cross-cycle memory *file* exists at the meta-loop. What's missing is the *operation*: on a later cycle, the meta-loop may want to *resurrect* a route it killed earlier, *invalidate* one it had accepted, or *revert* a refinement. routeman did this inline because it was loop-bound. It relocates cleanly to the meta-loop's memory, but the resurrect/invalidate/revert operation has to be authored there — it isn't yet.

**Gap C — routelister's loop-role is undocumented.** routeman's identity *encoded* how it plugged into the loop. routelister deliberately doesn't encode that in its identity (that's the whole point), but it still needs a documented *role* — a section in its spec that says: when the loop hands routelister a finished cycle, that finished cycle is just a special case of routelister's normal input (the cycle's output becomes the "territory" to read; the next focus becomes the "goal"), and routelister's output (the concept-route-map) is what the meta-loop then selects from. The critique added one refinement here: the loop-role must state that **the meta-loop supplies the focus/goal** (routelister doesn't pick what to look at next — the meta-loop does), while routelister supplies the reading of the finished cycle as territory. Documenting the *role* is safe; it is not the same as putting loop-relative *identity* back in.

**Gap D — the two-memories boundary is undrawn.** routelister now has its own persistent memory (the concept-map index: what concepts exist in the project and how deeply each is developed). The meta-loop has its own persistent memory (the cross-cycle file: which moves were taken across inquiries, how verdicts evolved). These two memories coexist, and their boundary needs drawing or they'll drift into overlap. The boundary is best drawn *by purpose*: the concept-map answers "what exists and how deep?"; the cross-cycle memory answers "what did we do and how did verdicts change?". They *reference* each other (the meta-loop reads the concept-map to know what's enumerable) but never *duplicate* (the concept-map never stores traversal history; the cross-cycle file never stores the concept-map). Collapsing them into one store is tempting for simplicity but wrong — it would make routelister's memory loop-aware, re-coupling the sensor to the loop.

**The half-gap — autonomy classification.** routeman classified routes by how much autonomy a system should have over them (act automatically vs. flag for a human). That belongs to the meta-loop's selection layer — specifically to the "autonomy ladder," the graduated-autonomy concept. But the autonomy ladder is currently parked in the project's half-baked future-ideas folder. So this relocation is correct in principle but its home isn't ready. It is flagged as immature, not closed.

### The meta-verdict: the gap is not in routelister

The most important conclusion is about *where* the gaps live. There is **no discipline-level gap in routelister**. The fact that routelister can't do routeman's loop-harmony functions is not a deficiency — it is the cure. A routelister that *did* selection, cross-cycle memory, and loop-control would be re-committing the exact defect the redesign removed.

This rests on two independent grounds, which matters because it means the verdict isn't just an internal preference:

1. **The original diagnosis is vindicated.** That diagnosis held that routeman's defect was a *loop-relative identity*. Relocating the loop-harmony functions to the meta-loop and the runner confirms it directly: the loop-role was never the discipline's identity, so removing it from the discipline is correct.

2. **The architecture independently forbids it.** The meta-loop's founding rule — *"Navigation sees; it does not choose"* — assigns selection, cross-cycle memory, and control to the meta-loop and runner *by design*, with navigation as the pure perception layer. A routelister doing loop-harmony would contradict the architecture, not merely the diagnosis.

So the honest answer to the user's question is: routelister can do *none* of routeman's loop-harmony functions — and that is correct. The design gaps you are hunting are real, but they are at the *composition layer*: the redesign correctly *dropped* loop-harmony from routelister but did not fully *relocate* it into the meta-loop's specification. The remaining work is loop-integration spec work — the meta-loop spec (Gaps A and B), routelister's loop-role documentation (Gap C), and the two-memories boundary (Gap D) — plus maturing the parked autonomy ladder. None of it is a routelister redesign.

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger — it rolls up routeman's specification, the routelister design chain, the meta-loop architecture, and the original diagnosis. Each inherited commitment is re-tested below.

- **Commitment:** routeman's loop-harmony capabilities (the 16-type taxonomy including the 7 loop-control types; the between-cycles boundary placement; the cross-cycle-revisitation and autonomy-classification components; the per-cycle route-continuity file).
  - **Source:** `cognitive_harness/routeman/references/routeman.md` (§1.5, §2.1, §2.2, §5.8).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** every capability received an explicit disposition — the 9 concept types transferred to routelister; the 7 loop-control types map to Gap A (the meta-loop composes them) plus the correctly-dropped dependency graph; the boundary placement maps to Gap C; cross-cycle revisitation maps to Gap B and autonomy to the parked ladder; the route-continuity file maps to the meta-loop's cross-cycle memory, with Gap D drawing the boundary. No capability was left unaccounted for.

- **Commitment:** routeman's defect is a loop-relative identity (machinery mature, identity immature).
  - **Source:** `devdocs/inquiries/2026-05-29_01-11__routeman_current_problem_diagnosis/finding.md`.
  - **Re-test status:** RE-TESTED — VINDICATED.
  - **Evidence:** relocating loop-harmony to the meta-loop and runner confirms the loop-role was never the discipline's identity. The opposite reading ("the gap is in routelister; the diagnosis over-narrowed it") was generated as a foil and killed, because the meta-loop architecture independently forbids loop-harmony in the discipline.

- **Commitment:** the 9 concept-engagement route-types transfer to routelister; the 7 loop-control types do not.
  - **Source:** `devdocs/inquiries/2026-05-29_18-17__routelister_route_type_schema_reconciliation/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** confirmed — the 7 loop-control types are exactly Gap A's enumeration set (stop / re-run / widen / different-approach / merge / unblock) plus revisit (Gap B). The per-component "is this loop-bound?" test is the tool that localizes each function to its layer.

- **Commitment:** routelister's concept-map memory is NOT cross-cycle (the revisit machinery was stripped from it).
  - **Source:** `devdocs/inquiries/2026-05-30_06-38__routelister_cross_run_model/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** confirmed — revisit's home is the meta-loop's cross-cycle memory (Gap B); the concept-map vs. cross-cycle-memory line is Gap D, drawn by purpose.

- **Commitment:** the meta-loop selects and owns the cross-cycle memory; "Navigation sees; it does not choose."
  - **Source:** `/Users/ns/.claude/skills/meta-loop/SKILL.md`.
  - **Re-test status:** RE-TESTED — confirmed, with gaps surfaced.
  - **Evidence:** selection and the cross-cycle memory store are indeed owned by the meta-loop. But the meta-loop spec does *not* specify loop-control-move enumeration (Gap A) or the revisit operation (Gap B) — these are required additions the spec currently lacks. The founding rule is the external anchor that kills the "gap is in routelister" foil.

- **Commitment:** graduated autonomy (the auto-act vs. flag-for-human partition) is a real future direction.
  - **Source:** `docs/future-seed/half-baked/autonomy_ladder.md` (parked/half-baked).
  - **Re-test status:** RE-TESTED.
  - **Evidence:** autonomy classification relocates to the autonomy ladder, but the ladder is parked — so the relocation is correct in principle but the home is immature. Flagged, not resolved.

All six priors were re-tested with cited evidence; none was inherited without re-test.

## Next Actions

### MUST

- **What:** Add a "Next-Move Menu Composition" section to the meta-loop spec — the meta-loop composes the full move menu by reading its own loop-state (for stop/re-run/widen/different-approach) and routelister's concept-map index (for the perception-dependent moves merge and unblock). routelister never enumerates loop-control moves.
  - **Who:** the meta-loop spec (`/Users/ns/.claude/skills/meta-loop/SKILL.md` and/or its project-canonical home).
  - **Gate:** condition-bound — when the meta-loop spec is next authored/edited.
  - **Why:** closes Gap A (the sharpest gap); restores the unified next-move menu without re-coupling routelister to the loop; the navigation endgoal (the meta-loop steering via navigation as its eyes) is half-blind at steering moments until this exists.

- **What:** Add a loop-role section to routelister's spec — a finished cycle is a special case of territory+goal (the cycle's output becomes territory; the meta-loop supplies the focus as the goal); routelister's output (the concept-route-map) feeds the meta-loop's selection.
  - **Who:** the routelister spec (to be authored at `cognitive_harness/routelister/`).
  - **Gate:** condition-bound — when the routelister structural spec is authored.
  - **Why:** closes Gap C; documents the role without re-introducing loop-relative identity.

### COULD

- **What:** Specify the revisit operation (resurrect / invalidate / revert prior-cycle verdicts) as an operation on the meta-loop's cross-cycle memory.
  - **Who:** the meta-loop spec.
  - **Gate:** condition-bound — when the meta-loop spec is authored.
  - **Why:** closes Gap B (the store exists; only the operation is missing).
  - **Depends-on:** MUST item "Next-Move Menu Composition." This COULD is GATED — both edit the meta-loop spec; do the menu-composition section first, since revisit is one of the moves the menu must be able to offer.

- **What:** Draw the two-memories boundary explicitly — a short statement in both specs that the concept-map answers "what exists and how deep" while the cross-cycle memory answers "what was done and how verdicts evolved"; they reference but never duplicate.
  - **Who:** the routelister spec and the meta-loop spec.
  - **Gate:** condition-bound — when either spec is authored.
  - **Why:** closes Gap D; prevents the two memories from drifting into overlap.
  - **Depends-on:** MUST item "routelister loop-role section." This COULD is GATED — the boundary statement is cleanest written alongside the loop-role section that introduces routelister's memory in a loop context.

### DEFERRED

- **What:** Wire autonomy classification into the meta-loop's selection layer (the autonomy ladder).
  - **Gate:** condition-bound — when the autonomy ladder is un-parked and matured out of `docs/future-seed/half-baked/`.
  - **Why (if revived):** restores routeman's autonomy-classification capability at its correct home (the loop-aware selection layer), enabling graduated autonomy.

## Reasoning

The finding survived a full adversarial pass. The candidates that were considered and rejected:

- **"routelister also lost a non-loop discipline capability"** (killed). The strongest version pointed at the loss of the *unified menu's ergonomics* — having one place to see all next-moves. But that unification is itself loop-aware (it mixes loop-control with concept-moves), so the "loss" is the *composition*, not a discipline capability. It collapses back into Gap A. Nothing non-loop and discipline-level was lost.

- **"The gaps are phantoms — already covered implicitly"** (killed). The sharpest version: "the meta-loop is loop-aware, so it implicitly knows the loop-control moves; no enumeration gap exists." This fails on the meta-loop spec's own text — the spec *delegates* move-mapping to navigation and reserves only *choosing* for the meta-loop. An implicit, unspecified menu is precisely the homeless gap. For Gaps B/C/D the same pattern held: a storage place is not an operation (B); "obvious" is not a documented contract (C); and two stores with different purposes already coexist and will collide if left unbounded (D).

- **"Re-admit loop-control to routelister so the menu is whole in one place"** (killed). This looks simpler — one menu, one producer. But the loop-control moves are loop-bound, so re-admitting them gives routelister back a loop-relative identity and stops it being a standalone, any-territory discipline. The apparent simplicity is a catastrophe on the load-bearing risk axis (re-coupling the discipline to the loop). This is the single most important thing the finding refuses to do.

- **"Create a separate loop-control-lister discipline"** as Gap A's home (killed). A dedicated discipline to enumerate loop-control moves would itself be loop-bound by identity — re-creating routeman's defect at a new address — and it would need to read the loop-state, which only the meta-loop holds, so it collapses into the meta-loop anyway. The seed extracted from this failure: if loop-control enumeration ever grows complex, it becomes a *sub-module of the meta-loop*, never a standalone discipline.

- **"The gap is in routelister; the discipline is incomplete"** (killed). The strongest objection here doubled as a check on whether the finding was dodging the user's question. It was killed on two independent external grounds (the original diagnosis and the meta-loop's founding rule), and the dodge-worry was answered: the finding names four concrete gaps and tells the user exactly which spec to edit for each — a sharper, more actionable answer than mislabeling routelister "incomplete."

What survived: the ownership map (each function grounded in the architecture, not asserted); the keystone Gap A fix (the meta-loop composes the menu, reading both loop-state and the concept-map index — this absorbed a real refinement, since merge and unblock are perception-dependent and need the concept-map); the re-admission guard (the load-bearing constraint that every fix lands above the sensor); and the meta-verdict (system-level, diagnosis vindicated). The strongest single result is the assembly: the four gaps are not four unrelated holes — they are the *un-written half of the perception/control separation*, and Gap A's menu-composer is the keystone where the perception layer's output and the control layer's loop-knowledge re-assemble into the menu routeman used to produce alone.

A note on self-reference: this inquiry evaluated the project's own routelister design for what it can't do. The verdict ("no discipline-level gap") could have been a motivated defense of in-house work. It is guarded by resting every load-bearing claim on external anchors — routeman's literal spec text, the meta-loop's founding rule, the original diagnosis — and by the fact that the inquiry surfaces four real gaps and a parked half-gap rather than clearing routelister of all fault.

## Open Questions

### Blocked

- The exact wording of Gaps A–D's fixes is blocked until the relevant specs are authored — the meta-loop spec (for the menu-composition section and the revisit operation) and the routelister structural spec (for the loop-role section and the routelister side of the two-memories boundary). The fixes are specified here in enough detail to author; the authoring itself waits on those spec-writing efforts.

### Refinement Triggers

- If, when the meta-loop's menu-composition is authored, a loop-control move is found that depends on *neither* the loop-state *nor* routelister's concept-map index, the perception/control split for that move re-opens (it would mean some third source of next-move information exists that this finding didn't account for).

- If the autonomy ladder is matured and autonomy classification turns out to need *per-route* data that only routelister can produce, the boundary between routelister's output and the meta-loop's selection re-opens for that data (this finding assumes routelister's concept-route-map is sufficient input for autonomy classification; a counter-example would reactivate the question).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
and now lets dive deep into what  routeman could do that routelister cant. i am trying to identify design gaps because with routelister we tried to cover individual discipline aspect of it, with routeman we were focused on running in harmony with MVL loops
```

</details>
