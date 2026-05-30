---
status: active
model: claude-opus-4-8[1m]
effort: max
refines: devdocs/inquiries/2026-05-30_08-14__routeman_loop_harmony_gaps_vs_routelister/finding.md
---
# Finding: Routelister-as-Boundary — Composition (not Identity), Why Routeman Failed, and Protocol (not Section)

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-30_08-14__routeman_loop_harmony_gaps_vs_routelister/finding.md`
**Revision trigger:** stronger framing + the project's "disciplines are self-contained individuals" principle applied to the prior finding's Gap C.
**What's preserved:** the perception/selection split ("Navigation sees; it does not choose"); the meta-loop as the home of the loop-control machinery (menu composition, REVISIT, cross-cycle memory, autonomy, selection).
**What's changed:** the prior finding's **Gap C** said the fix was "a loop-role **section** in routelister's spec." This finding **refines** that: the loop-role contract belongs in the **protocol** (the caller), not as an operational section in the discipline — because disciplines are self-contained individuals and an operational loop-role section would be an outbound pointer. The *intent* of Gap C (document the loop-role) is preserved; its *location* moves discipline→protocol.
**What's new:** the three-layer mental model (discipline / usage / orchestration); the precise "fusion vs composition" diagnosis of routeman; the "re-fusion guard."
**Migration:** when authoring routelister's spec, do **not** add an operational loop-role section; put the loop-role contract in the boundary protocol (most likely the meta-loop). routelister may carry at most a self-contained descriptive note.

## Question

We are building **routelister** — a thinking discipline (spec not yet authored) that lists the concepts in any body of material as typed routes (directions toward a goal). It replaces an older discipline, **routeman**, which tried to be *both* a concept-lister *and* a "boundary discipline" (the thing that runs between cognitive cycles to say "what next?"). After mapping exactly which half of routeman was loop-bound, the user asked three connected questions, plus a meta-goal of clarity:

1. **Is the plan correct** — "have routelister as a standalone discipline, then *utilize it later* as a boundary discipline"?
2. **We already tried that in routeman — what went wrong?** (i.e., if we're going to use a concept-lister as a boundary again, aren't we repeating routeman's mistake?)
3. **Should the loop-boundary-relevant things for routelister be a protocol, or a section** (inside routelister's spec)?

And underneath: *"I have a better understanding but I'm a bit confused — help me make things clear."*

The goal is a decisive, clarity-producing answer: confirm-or-correct the composition plan, explain precisely why routeman failed *at the same combination* and how the new plan differs (so the user can see they are not repeating the mistake), and decide protocol-vs-section on a principled basis.

## Finding Summary

- **There are three distinct layers, and keeping them distinct is the whole point:**
  - **Discipline = routelister.** *What it is* — a pure perception discipline that lists concepts-as-routes on any territory. It does not know about loops. Lives at `cognitive_harness/routelister/`.
  - **Usage = the boundary-role.** *How it's used* — a loop-aware caller invokes routelister at the moment between cycles, handing it the just-finished cycle as its territory. This is a **composition role**, not a second identity. It's an act of calling, not an artifact.
  - **Orchestration = a protocol.** *The loop machinery around the call* — composing the full next-move menu, REVISIT, cross-cycle memory, autonomy classification, selection. Lives at `cognitive_harness/protocols/` (most likely the meta-loop).

- **Q1 — Yes, the plan is correct** — read "use it as a boundary" as *compose it* (call it from the loop layer), not *make it a boundary* (extend its identity). routelister stays the pure discipline; the boundary is one of its applications (a completed cycle is just one kind of territory).

- **Q2 — You are not repeating routeman.** routeman **fused** the two capabilities into one identity: it was *defined as* "the boundary discipline that operates between cycles" (the loop-position was in its identity), and it carried the loop-control orchestration *inside the discipline spec*. That welding is the loop-relative-identity defect the earlier diagnosis named. The new plan **composes** the same two capabilities across layers (pure discipline + external caller), so they stay separable. **The mistake was never "having both" — it was fusing them so they couldn't be pulled apart.** One-liner: *routeman was "a discipline that IS a boundary"; the new plan is "a discipline that CAN BE USED at a boundary."*

- **Q3 — Protocol, not section.** The loop-boundary things are *orchestration*, and orchestration belongs in a protocol that *uses* routelister — for two independent reasons: (a) putting orchestration inside the discipline is exactly half of routeman's defect; (b) a discipline spec is a self-contained individual and must not point outward, so an operational "loop-role section" (which would have to name the loop/meta-loop) breaks self-containment. The repo already separates `protocols/` from disciplines and uses the protocol→discipline call pattern (the runners).

- **routelister needs no operational loop-role section at all** — because a completed cycle is just territory (the existing "territory + goal" contract covers it) and "how my output feeds selection" is the *caller's* knowledge. At most, routelister carries a *self-contained descriptive note* ("a completed cycle is a valid territory; commonly composed at the forward boundary").

- **The re-fusion guard:** composition is safe *because of, and only as long as,* a one-way dependency — **protocol → discipline, never the reverse.** routelister's spec must never contain an outbound pointer to the loop/meta-loop/boundary-protocol. That guard is what makes "we're not repeating routeman" durable, not just true today.

## Finding

### Where the confusion comes from

The confusion is natural, because routeman *also* combined "concept-lister" and "boundary." So the question "we tried that and it broke — why won't it break again?" is exactly the right question to ask. The answer is that there are two completely different ways to combine those capabilities, and routeman picked the bad one. Seeing the difference is what makes everything click.

### The three layers (the model that resolves it)

Think of three separate things, not one:

| Layer | What it is | Where it lives |
|---|---|---|
| **Discipline** | **routelister** — perception. Point it at *any* territory + goal, get concepts-as-typed-routes. It does not know loops exist. | `cognitive_harness/routelister/references/routelister.md` |
| **Usage** | **the boundary-role** — a loop-aware caller invokes routelister at the between-cycles moment, handing it the finished cycle as territory. A *role*, not an identity; an *act of calling*, not an artifact. | (no artifact — it's the protocol calling the discipline) |
| **Orchestration** | **a protocol** — the loop machinery that wraps the call: compose the full next-move menu (add the loop-control moves), REVISIT, cross-cycle memory, autonomy classification, selection. | `cognitive_harness/protocols/` (most likely the meta-loop) |

The dependency points only *downward*: the protocol uses the discipline; the discipline never knows about the protocol. routeman collapsed all three of these into one identity-bearing artifact — and that collapse was the bug.

### Q1 — "routelister, then use it as a boundary" — correct?

**Yes — as a composition.** routelister's *identity* is intrinsic: it runs on any territory with any goal. "Using it as a boundary" means a caller hands it one *particular kind* of territory — the artifacts of a just-finished cycle — and then does loop-things with the result. A property that holds only in that one application is a *usage*, not an *identity*. (The walkthrough already says this: routelister fills the boundary slot "by role … not part of its identity.") So the right way to say the plan is: *routelister is the discipline; being-used-at-a-boundary is one of its uses.*

### Q2 — "We already tried that in routeman — what went wrong?"

This is the heart of it, so here is the precise difference.

Two capabilities (concept-listing and boundary-serving) can be combined two ways:

- **Fusion** — weld them into one identity, so they can't be separated. **This is what routeman did.** Its very definition was "the boundary cognitive operation that consumes the artifacts of a completed cognitive cycle" — the loop-position was *baked into its identity* (spec §1.2/§1.5). And it carried the loop-control orchestration — cross-cycle revisitation, autonomy classification, the cross-cycle `_route.md` memory — *inside the discipline itself* (§2.1/§5.8). The result: its concept-listing couldn't exist except as a between-cycles thing. That is the "loop-relative identity" the earlier diagnosis named as the defect: the discipline could only define itself by pointing at the loop.

- **Composition** — keep them as separate layers connected by a one-way call. **This is the new plan.** routelister's identity is loop-free (it lists concepts on any territory). A separate caller — the protocol/meta-loop — invokes it at the boundary and adds the loop machinery around it. The two capabilities both still exist, but *separably*.

So the mistake was never "a thing that lists concepts AND serves a boundary." The mistake was **fusing** them so you couldn't have one without the other. Composition keeps them apart. That's why the new plan isn't a repeat:

> **routeman was "a discipline that *is* a boundary." The new plan is "a discipline that *can be used* at a boundary."**

The verb changed from *is* to *can-be-used-at* — and that change is the entire fix.

### Q3 — Protocol or section?

**Protocol.** The loop-boundary "things" — composing the next-move menu, REVISIT, cross-cycle memory, autonomy, selection — are *orchestration*. Orchestration belongs in a protocol that *uses* routelister, for two reinforcing reasons:

1. **The routeman lesson.** Putting orchestration inside the discipline is precisely what routeman did (§2.1/§5.8), and it is half of why routeman broke. Don't put it back in.

2. **The self-contained-discipline principle.** In this project, a discipline spec is a self-contained individual — it must not contain outbound pointers to other folders/artifacts. An *operational* "loop-role section" inside routelister would have to reference the loop/meta-loop (to say how routelister's output feeds selection) — that's an outbound pointer, which breaks self-containment. The repo already enforces this separation: disciplines are top-level dirs (`surfacing/`, `decompose/`, …); protocols live in `cognitive_harness/protocols/` (`branch_inquiry.md`, `conclude.md`, `loop_diagnose.md`); and the runners already *call* disciplines without the disciplines knowing about the runners. A boundary protocol using routelister is that same, already-established pattern.

And note: routelister needs **no operational loop-role section at all.** A completed cycle is *just one kind of territory*, so routelister's existing "territory + goal" contract already handles the boundary input — there's nothing special to specify. The other side ("how my output feeds selection") is the *caller's* knowledge, not the discipline's. The most routelister should carry is a *self-contained descriptive note* — a "where it fits" line like "a completed cycle's artifacts are a valid territory; routelister is commonly composed at the forward boundary" — which names no dependency.

This **refines** the earlier finding's Gap C, which had said "a loop-role *section* in routelister." The *intent* (document the loop-role) is right and kept; the *location* moves to the protocol. The dependency arrow is **protocol → discipline**, never the reverse.

### The re-fusion guard

One caution makes the whole thing durable. Composition is safe *only while the dependency stays one-way.* If someone later adds a loop reference into routelister's spec "for convenience" — a pointer to the meta-loop, an operational loop-role section, a piece of cross-cycle memory — the discipline silently *re-fuses* with the loop and you're back to routeman's defect. So the guard is: **routelister's spec must never contain an outbound pointer to the loop, the meta-loop, or the boundary protocol.** Enforced by the self-contained principle, this is what keeps "we're not repeating routeman" true over time, not just today.

## Inherited Commitments Re-test

This finding refines a prior finding and synthesizes several priors (Synthesis Trigger declared); each inherited commitment is re-tested.

- **Commitment:** the perception/selection split ("Navigation sees; it does not choose"); the meta-loop owns the loop-control machinery; **Gap C = "a loop-role section in routelister's spec."**
  - **Source:** `devdocs/inquiries/2026-05-30_08-14__routeman_loop_harmony_gaps_vs_routelister/finding.md`.
  - **Re-test status:** RE-TESTED — split reinforced; **Gap C refined.**
  - **Evidence:** the split is confirmed and extended to the artifact layer (orchestration → protocol; perception → discipline). Gap C's intent (document the loop-role) is preserved, but its location moves discipline→protocol: the consume-side is just "territory," and an operational section documenting the feed-to-selection side would be an outbound pointer that violates the self-contained principle.

- **Commitment:** routeman's defect = loop-relative identity.
  - **Source:** `devdocs/inquiries/2026-05-29_01-11__routeman_current_problem_diagnosis/finding.md`.
  - **Re-test status:** RE-TESTED — confirmed and sharpened.
  - **Evidence:** the defect is the *fusion* — the loop-position welded into the identity (§1.5) plus orchestration placed inside the discipline (§2.1/§5.8). The "you're repeating routeman" reading was tested and killed: composition keeps the roles separable, so the welding doesn't recur.

- **Commitment:** routelister fills the boundary slot "by role … not part of its identity."
  - **Source:** `docs/walkthrough.md` §9 + Scenario 3.
  - **Re-test status:** RE-TESTED — confirmed. The boundary-role is a usage/composition, not a second identity (routelister runs on any territory).

- **Commitment:** routeman is defined as the boundary discipline (loop-position in identity) and carries the loop orchestration inside the discipline.
  - **Source:** `cognitive_harness/routeman/references/routeman.md` §1.2/§1.5/§2.1/§5.8.
  - **Re-test status:** RE-TESTED (artifact-grounded) — verified; this is the concrete evidence of the fusion.

- **Commitment:** disciplines are self-contained individuals (no outbound pointers); protocols live at `cognitive_harness/protocols/`.
  - **Source:** project principle (auto-memory) + the repo layout.
  - **Re-test status:** RE-TESTED (artifact-grounded) — verified: `cognitive_harness/protocols/` exists; disciplines are top-level dirs; the runners call disciplines (protocol→discipline). This is the adjudicator that decides protocol-over-section.

All five priors re-tested with cited evidence; none inherited without re-test.

## Next Actions

### MUST

- **What:** Author the loop-boundary orchestration as a **protocol** (most likely the meta-loop spec; possibly a thin dedicated boundary protocol that the meta-loop invokes) that *uses* routelister — never as a section inside routelister.
  - **Who:** the protocol layer (`cognitive_harness/protocols/` and/or the meta-loop spec).
  - **Gate:** condition-bound — when the boundary orchestration is authored (alongside the prior finding's Gap A "menu composition" and Gap B "REVISIT").
  - **Why:** keeps routelister a self-contained individual; avoids re-committing routeman's orchestration-inside-discipline defect.

- **What:** Enforce the **re-fusion guard** — routelister's spec must contain no outbound pointer to the loop / meta-loop / boundary protocol.
  - **Who:** whoever authors / reviews the routelister spec.
  - **Gate:** observable — at routelister-spec authoring and on every later edit (a review check).
  - **Why:** composition is only safe while the dependency stays one-way (protocol→discipline); the guard prevents silent re-fusion.

### COULD

- **What:** Add a *self-contained descriptive note* to routelister's spec ("a completed cycle's artifacts are a valid territory; routelister is commonly composed at the forward boundary") — naming no dependency.
  - **Who:** the routelister spec.
  - **Gate:** condition-bound — when the routelister spec is authored.
  - **Why:** orients a reader to the boundary use without breaking self-containment. Optional — the existing "territory" contract already covers the behavior.
  - **Depends-on:** MUST item "re-fusion guard." This COULD is GATED — the note must be phrased to satisfy the guard (descriptive, no outbound pointer).

### DEFERRED

- **What:** Decide the exact protocol identity — whether the boundary orchestration is the meta-loop itself or a thin dedicated boundary protocol the meta-loop invokes.
  - **Gate:** condition-bound — when the meta-loop / boundary orchestration is authored.
  - **Why (if revived):** the load-bearing decision (protocol-layer, not discipline-section) is settled; the which-protocol detail only matters once the orchestration is being written.

## Reasoning

The verdict survived an adversarial pass in which the prosecution argued the user *was* repeating routeman and that a section would be fine:

- **"Boundary-serving is part of what routelister IS (a second identity)."** Rejected: routelister runs on any territory; the boundary case is one territory-type. A property holding in only one application is a usage, not an identity — if it were identity, routelister couldn't run on a non-cycle territory, but it can.

- **"You're repeating routeman — combining a concept-lister with a boundary again is the same mistake."** Rejected: the diagnosis names the defect as loop-*relative identity* (the welding), not "two roles." Two capabilities can be fused (routeman) or composed (the new plan); composition keeps them separable, so the defect doesn't recur. This is the crux that resolves the confusion.

- **"A thin co-located loop-role section inside routelister is fine — co-location aids the reader."** Rejected: the loop-boundary things are orchestration, and orchestration-inside-discipline is half of routeman's defect; the self-contained principle forbids the outbound pointer an operational section would need. Co-location is a presentation preference that can't override the structural requirement. The protocol home and the protocol→discipline pattern already exist in the repo.

- **"The earlier finding said a loop-role *section* in routelister — don't overturn it."** Rejected (as a refinement, not a reversal): keeping the section (PRESERVES) is an outbound pointer; dropping the loop-role entirely (CORRECTS) overshoots, since documenting it is valuable. REFINES is right: keep the intent, move the location to the protocol.

What survived and assembled: the three-layer model (discipline / usage / orchestration), the fusion-vs-composition diagnosis with the "IS a boundary → CAN BE USED at a boundary" dissolver, the protocol-over-section verdict on two independent grounds, and the no-operational-section result. One refinement was added during critique: the **re-fusion guard** (the one-way dependency must be enforced, or composition silently decays back into fusion).

A note on self-reference: this finding refines a finding from the same chain (the earlier Gap C). That risk was audited. The refinement rests on grounds external to that finding and to the chain's vocabulary — the project-wide self-contained-disciplines principle (which predates it), the observed repo layout, and routeman's literal spec text — and it is adversarial to the prior finding (it relocates Gap C), not protective. It also makes a falsifiable claim: an operational loop-role section would be an outbound pointer, checkable against the principle.

## Open Questions

### Blocked

- The exact protocol identity (the meta-loop vs a dedicated thin boundary protocol) is blocked until the boundary orchestration is authored. The load-bearing decision (protocol-layer, not discipline-section) is settled; only the sub-choice waits.

### Refinement Triggers

- If, when authoring the boundary protocol, some loop-boundary need turns out to require data that *only* routelister can produce and that *cannot* be expressed as an attribute of a route (Priority/Confidence/depth-signal) or as "territory," the no-operational-section result re-opens for that need — it would be the one case where routelister must expose something loop-shaped, and the self-containment story would need re-examination.
- If a future reviewer finds an outbound loop pointer in routelister's spec, the re-fusion guard has been violated and the discipline's self-containment must be restored before it drifts back toward routeman.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
routelister is just  a concept listing direction.  routeman (which tried to be both concept lister + boundary discipline) is more.

what we want to do is , have routelister discipline and then utilize it later on as boundary discipline ... correct?

but we already kind of tried to do that in routeman, what went wrong?  

should loop boundary relevant things for routelister a protocol? or it should be a section ?

i have a better understanding but at the same time a bit confused. Help me make things more clear.
```

</details>
