## User Input

`devdocs/inquiries/2026-05-30_09-07__routelister_boundary_use_protocol_vs_section/_branch.md` (prior output: surfacing.md; workspace — boundary-by-role [walkthrough §9/Scenario 3] + routeman's fusion [§1.2/§1.5] + the diagnosis [01-11] + the split/Gap-C [08-14] + the self-contained-disciplines adjudicator + the real cognitive_harness/ layout). Is boundary-use a composition not an identity? What went wrong in routeman + how is the new plan different? Protocol or section?

---

# Structural Sensemaking — Routelister-as-Boundary: Composition, Routeman's Failure, Protocol-vs-Section

## SV1 — Baseline Understanding

Initial read: the user's plan ("routelister discipline, then utilize it later as a boundary discipline") is correct — with one precise reframe that resolves the confusion. routelister is the *discipline* (perception, intrinsic). The boundary-role is a *usage* — a loop-aware caller invokes routelister and wraps loop-control machinery around it. The walkthrough already says exactly this ("by role, not part of routelister's identity"). And the reason this won't repeat routeman's failure is that routeman *fused* the two capabilities into one identity (and put the orchestration machinery inside the discipline), whereas the new plan *composes* them across layers. So the loop-boundary things should be a *protocol* (orchestration that uses routelister), not a *section* inside routelister — because disciplines are self-contained individuals, and a completed cycle is just one kind of territory (so routelister needs nothing special). The work: confirm the composition reframe, sharpen "fusion vs composition," and decide protocol-vs-section against the self-contained principle (which re-tests the prior finding's "loop-role section in routelister").

---

## Phase 1 — Cognitive Anchor Extraction

**Constraints:**
- C1 — **The boundary-role is a usage, not an identity.** The walkthrough states routelister fills the forward-Boundary slot "by role … not part of routelister's identity"; "the loop answers a question; routelister says what to do next … by composition role."
- C2 — **routeman's identity *was* its loop-position.** §1.5: "routeman is a boundary discipline — operates between cognitive cycles." §1.2: "the boundary cognitive operation that consumes the artifacts of a completed cognitive cycle." The loop-position is welded into the identity.
- C3 — **routeman put orchestration *inside* the discipline.** Cross-cycle revisitation + autonomy classification are enumeration *components* (§2.1); `_route.md` is cross-cycle memory (§5.8) — all inside the discipline spec.
- C4 — **Disciplines are self-contained individuals** (project principle): discipline runtime spec files must not contain outbound pointers to other folders. **Protocols live at `cognitive_harness/protocols/`**; the repo cleanly separates disciplines (top-level dirs + `references/`), protocols (`protocols/`), and runners (`MVL/`, `MVLw/`).
- C5 — **A completed cycle is just one kind of territory** (walkthrough §3.4 / Scenario 3): routelister's existing "territory + goal" contract already covers it; it needs no special loop-input handling.

**Key Insights:**
- K1 — **"routelister, then use as a boundary" is correct — as a *composition*, not a second identity.** routelister stays the intrinsic concept-listing discipline; the boundary-role is realized by *calling* it from the loop-aware layer. The verb is **IS-USED-AT a boundary**, not **IS a boundary**. (This is the precise reframe of the user's "utilize it later as a boundary discipline.")
- K2 — **routeman's defect was FUSION, not "having both capabilities."** routeman welded concept-listing and the boundary-position into ONE identity (C2) *and* put the loop-control orchestration inside the discipline (C3). The result (01-11) = loop-relative identity: the concept-lister couldn't exist except as a between-cycles thing. The error was never "a thing that both lists concepts and serves a boundary" — it was *fusing them so they couldn't be separated*.
- K3 — **The new plan is structurally different: COMPOSITION across layers.** routelister (pure discipline) + a loop-aware caller (protocol/meta-loop) that uses it + the loop-control machinery in that caller. The two capabilities still both exist — but *composed* (separable, layered), not *fused* (welded, inseparable). **So the user is NOT repeating routeman's mistake: routeman fused; the new plan composes.** This is the answer to "we already tried that — what went wrong?"
- K4 — **The loop-boundary machinery is ORCHESTRATION, and orchestration belongs in a PROTOCOL.** Menu-composition (with loop-control moves), REVISIT, cross-cycle memory, autonomy classification, selection — these are the loop-aware layer's job (08-14: the meta-loop). Putting them in routelister's spec would (a) repeat routeman's "orchestration-inside-discipline" error and (b) violate the self-contained principle (C4). → **PROTOCOL** (a boundary-orchestration protocol at `cognitive_harness/protocols/`, or the meta-loop itself), which *uses* routelister.
- K5 — **routelister needs NO operational loop-role section.** Because a completed cycle is just territory (C5), routelister's existing contract already handles boundary input. A "loop-role section" that explained how routelister feeds the meta-loop's selection would be an *outbound pointer* (to the loop/meta-loop) — violating self-containment (C4). At most routelister carries a **descriptive, self-contained note** ("a completed cycle's artifacts are a valid territory; routelister is commonly composed at the forward boundary") — the kind of "where it fits" line that names no operational dependency. The *operational* loop-role contract lives in the protocol (the caller's knowledge).
- K6 — **This REFINES the prior finding's Gap C.** 08-14 proposed "a loop-role **section** in routelister's spec." Re-tested against the self-contained principle: the loop-role *contract* should be owned by the **protocol** (the caller), with routelister carrying at most a self-contained descriptive note. The dependency direction is **protocol → discipline**, never discipline → protocol. (Gap C's *intent* — document the loop-role — stands; its *location* moves from the discipline to the protocol.)
- K7 — **The clarity model is three layers.** (1) **Discipline** = routelister (what it IS: perception, intrinsic, any territory). (2) **Usage** = the boundary-role (HOW it's used: a composition). (3) **Orchestration** = the boundary protocol / meta-loop (the loop-control machinery that WRAPS the call). routeman collapsed all three into one artifact + one identity; the fix keeps them three.

**Structural Points:**
- S1 — Three artifact homes, matching the real layout (C4): the *discipline* → `cognitive_harness/routelister/references/routelister.md`; the *orchestration* → `cognitive_harness/protocols/` (or the meta-loop); the *usage* is not an artifact at all — it's the act of the protocol calling the discipline.
- S2 — The dependency arrow points one way: protocol → discipline. routelister never references the loop; the protocol references routelister.

**Foundational Principles:**
- P1 — A discipline is a self-contained individual: it documents what it IS + a self-contained input contract, never the orchestration that uses it. [self-contained principle]
- P2 — Capabilities coexist safely by *composition across layers*, never by *fusion into one identity*. [the routeman lesson]

**Meaning-Nodes:**
- M1 — *boundary = usage/composition, not identity*; M2 — *fusion (routeman) vs composition (new plan)*; M3 — *orchestration → protocol; perception → discipline*; M4 — *protocol→discipline dependency direction*; M5 — *the three-layer clarity model*.

### SV2 — Anchor-Informed Understanding

"routelister, then use it as a boundary" is correct as a *composition*: routelister is the intrinsic discipline; the boundary-role is a usage realized by a loop-aware caller. routeman failed not because it had both capabilities but because it *fused* them into one identity (and put orchestration inside the discipline) — the new plan *composes* them across layers, so it doesn't repeat the failure. The loop-boundary machinery is orchestration and belongs in a *protocol* that uses routelister; routelister needs no operational loop-role section (a completed cycle is just territory; a section would violate self-containment) — refining the prior finding's Gap C from "section in routelister" to "owned by the protocol."

*Meta-Inspection (H4 concept names): "fusion vs composition," "orchestration vs perception," "usage vs identity" — real structural distinctions? Yes: fusion/composition is verified by routeman's identity-welding (§1.5) vs the new layered plan; orchestration/perception is verified by the loop-control machinery vs concept-listing; usage/identity is verified by the walkthrough's "by role, not identity." (H8 self-reference): this refines my own chain's prior finding (08-14 Gap C) — tested in Phase 3 Ambiguity 5.*

---

## Phase 2 — Perspective Checking

**Technical / Logical:** the repo already instantiates the discipline/protocol/runner separation (C4) — disciplines have no knowledge of the runners that call them (surfacing doesn't import MVLw). A boundary protocol using routelister is the *same pattern* the runners already use to call the disciplines. So "protocol that uses routelister" isn't a new architectural shape — it's the existing one. New anchor → **K8: the boundary-orchestration-as-protocol is the project's existing protocol→discipline pattern; the section alternative would be the anomaly.**

**Human / User:** the user's confusion is "we already tried routelister-as-boundary in routeman — what went wrong?" The clarity they need is the *fusion-vs-composition* distinction: routeman and the new plan are NOT the same attempt. routeman = "a discipline that IS a boundary" (fused); new plan = "a discipline that CAN BE USED at a boundary" (composed). Naming this difference is what dissolves the confusion. New anchor → **K9: the user's relief comes from seeing they're not repeating routeman — the architecture is structurally different (compose, don't fuse).**

**Strategic / Long-term:** keeping routelister a pure individual lets it be reused in *non-boundary* contexts (any territory, any goal) — exactly the standalone value the redesign bought. If the loop-boundary machinery were a section inside routelister, every non-boundary use would carry dead loop-weight, and the discipline would re-acquire loop-relativity over time. The protocol split protects the discipline's reusability.

**Risk / Failure (repeating routeman):** the concrete failure to avoid is *re-fusing* — putting the loop-control machinery (or an operational loop-role contract) into routelister's spec "for convenience." That re-imports the orchestration-inside-discipline half of routeman's defect (C3). The guard: the self-contained principle (C4) + the dependency direction (protocol→discipline).

**Resource / Feasibility:** the protocol path reuses an existing home (`cognitive_harness/protocols/`) and an existing pattern (runners-call-disciplines). The section path would require routelister to know about the loop — more spec complexity + the re-coupling debt. Feasibility favors protocol.

**Definitional / Internal Consistency:** does "protocol, not section" contradict 08-14's Gap C ("loop-role section in routelister")? It *refines* it. Check the consistency carefully: Gap C's *purpose* was "document the loop-role (what routelister consumes from a completed cycle; how its output feeds selection)." That purpose is preserved — but its *location* moves to the protocol, because (a) the consume-side is just "territory" (C5, so routelister needs nothing), and (b) the feed-selection-side is the *caller's* knowledge, not the callee's. So Gap C isn't contradicted; its location is corrected. New anchor → **K10: Gap C's intent (document the loop-role) survives; its location (discipline→protocol) is refined — the consume-side collapses into "territory," the feed-side belongs to the caller.**

**Definitional / Frame-exit Completeness (light):** the inquiry inherits multi-value terms ("boundary," "protocol," "loop-role"). Existence Enumeration of "the loop-boundary things" project-wide: (i) the loop-control move-types + machinery (08-14: meta-loop); (ii) cross-cycle memory (meta-loop `_meta_state.md`); (iii) the call-routelister-on-the-completed-cycle step (the boundary moment); (iv) selection (meta-loop). All of (i)–(iv) are protocol/meta-loop-layer; none is a routelister section. Role assessment: each is load-bearing in the protocol layer; relocating any into routelister re-couples. → confirms PROTOCOL. New anchor → **K11: every "loop-boundary thing" enumerated lands in the protocol/meta-loop layer; none is intrinsically a discipline concern.**

**Phase / Calibration-State:** is "protocol" premature given the meta-loop is itself early/parked (08-14)? No — the decision is *where the things live*, independent of maturity. Early on, the "protocol" may be thin (even just the runner calling routelister + a human triaging); it matures into the meta-loop. But it's a protocol-layer artifact from day one; it never starts as a routelister section. New anchor → **K12: the protocol can start thin and mature; it's protocol-layer regardless of maturity — never a discipline section.**

**Self-Reference (H8 / failure mode #6):** I'm refining my own chain's prior finding (08-14 Gap C) and evaluating routelister/routeman (the chain's own work). Risk: protective self-consistency (defending 08-14 as-is) OR over-correcting to look rigorous. Guard: the refinement rests on an *external* principle (disciplines-are-self-contained — project-wide, predates 08-14) + the *real repo layout* (disciplines vs protocols/, just observed) + routeman's *literal* spec (orchestration-inside-discipline). And it's *adversarial* to the prior finding (it changes Gap C's location), not protective. Check passed.

### SV3 — Multi-Perspective Understanding

The boundary-orchestration-as-protocol is the project's *existing* protocol→discipline pattern (the runners already call disciplines this way); the section alternative would be the anomaly and would re-acquire loop-relativity. The user's confusion dissolves at the fusion-vs-composition distinction: routeman fused (a discipline that IS a boundary); the new plan composes (a discipline that CAN BE USED at a boundary). Every "loop-boundary thing" enumerated lands in the protocol/meta-loop layer; none is a discipline concern. This refines (doesn't contradict) 08-14 Gap C: the loop-role's *intent* survives, its *location* moves from a routelister section to the protocol, because the consume-side is just "territory" and the feed-side is the caller's knowledge.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity 1 — Is boundary-use a composition/usage, or a second identity routelister acquires? (OT1)

**Strongest counter-interpretation:** "If routelister is *the thing you run at the boundary*, then being-a-boundary-tool IS part of what it is — that's an identity, not just a usage."

**Why the counter fails (structural grounds):** identity is what a thing IS independent of how it's used; usage is one application among many. routelister runs on *any* territory with *any* goal (its intrinsic contract) — the boundary case is one territory-type (a completed cycle) among many (codebases, docs, raw text). A property that holds only in one application is a *usage*, not an *identity*. And the walkthrough states it directly: "by role … not part of routelister's identity." If boundary-use were identity, routelister couldn't run on a non-cycle territory — but it can. **Confidence:** HIGH. **Resolution:** boundary = a usage/composition (the caller invokes routelister at the boundary); routelister's identity stays intrinsic. The user's plan is correct, with this reframe.

### Ambiguity 2 — Did routeman fail because it *had both roles*, or because it *fused them into one identity*? (OT2 — the crux)

**Strongest counter-interpretation:** "The lesson of routeman is 'don't make one thing do two jobs' — so the new plan (routelister also serving as a boundary) is the same mistake again."

**Why the counter fails (structural grounds):** the diagnosis (01-11) names the defect as loop-*relative identity* — not "two jobs." Structurally, two capabilities can coexist two ways: **fused** (welded into one identity, inseparable — routeman: its concept-listing was *defined relative to* a completed cycle, §1.2/§1.5, so you couldn't have the lister without the loop) or **composed** (layered, separable — routelister runs standalone, and a caller adds the boundary use). The new plan is composition: routelister's identity is loop-free; the boundary-role is an external caller's use. The capabilities both still exist — but separably. So "don't make one thing do two jobs" mis-locates the defect; the defect was the *welding*, not the *duality*. The new plan does not weld → it does not repeat the failure. **Confidence:** HIGH. **Resolution:** routeman's defect was FUSION (welding two roles into one identity + orchestration inside the discipline); the new plan COMPOSES across layers; it is structurally different and safe. "a discipline that IS a boundary" (routeman) → "a discipline that CAN BE USED at a boundary" (new plan).

### Ambiguity 3 — Should the loop-boundary things be a protocol or a section? (OT3)

**Strongest counter-interpretation:** "A thin loop-role section *inside* routelister keeps the contract next to the discipline it concerns — co-location aids the reader; a separate protocol scatters the knowledge."

**Why the counter fails (structural grounds):** the loop-boundary things are *orchestration* (menu-composition with loop-control moves, REVISIT, cross-cycle memory, autonomy, selection) — and orchestration that lives inside a discipline is precisely routeman's §2.1/§5.8 error (C3), which produced the loop-relative defect. Moreover, the self-contained principle (C4) forbids a discipline spec from pointing outward; an operational loop-role section would name the loop/meta-loop = an outbound pointer. Co-location is a *presentation* preference; it cannot override the *structural* requirement that orchestration not live in the individual. And the repo already separates the layers (disciplines vs `protocols/`), so the protocol home exists and the pattern (protocol→discipline) is established. **Confidence:** HIGH. **Resolution:** **PROTOCOL** — the loop-boundary orchestration is a protocol-layer artifact (a boundary protocol at `cognitive_harness/protocols/`, or the meta-loop) that *uses* routelister; not a section inside routelister.

### Ambiguity 4 — Does routelister need *any* loop-role section, and does this refine 08-14 Gap C? (OT3 / Gap-C re-test)

**Strongest counter-interpretation:** "08-14 explicitly proposed a loop-role section in routelister; overturning it needs strong grounds — maybe the section should stay."

**Why the counter fails (structural grounds):** two structural facts shrink the section to nothing-or-descriptive. (a) A completed cycle is *just territory* (C5) — so the *consume-side* of the loop-role needs no special section; routelister's existing "territory + goal" contract covers it. (b) The *feed-side* ("how routelister's output feeds selection") is the *caller's* knowledge — selection is the meta-loop's (08-14), so documenting "how my output feeds selection" inside routelister is an outbound pointer (C4 violation). What remains for routelister is at most a *descriptive, self-contained* note ("a completed cycle is a valid territory; routelister is commonly composed at the forward boundary") — naming no operational dependency, like a "where it fits" line. So Gap C's *intent* (document the loop-role) is preserved, but its *location* moves to the protocol. **Confidence:** HIGH. **Resolution:** routelister needs no *operational* loop-role section (at most a self-contained descriptive note); the loop-role contract is owned by the protocol. This **REFINES** 08-14 Gap C: intent preserved, location moved discipline→protocol.

### Ambiguity 5 — Self-reference: am I refining 08-14 Gap C on real grounds, or just to look rigorous / protect the chain? (H8)

**Counter:** "you wrote 08-14; changing its Gap C could be either motivated rigor-signaling or motivated self-consistency."

**Why it fails:** the refinement rests on grounds *external* to 08-14 and to this chain's vocabulary — the project-wide disciplines-are-self-contained principle (predates 08-14), the *observed* repo layout (disciplines vs `protocols/`), and routeman's *literal* spec text (orchestration inside the discipline). And the move is *adversarial to the prior finding* (it relocates Gap C), not protective; a self-protective analysis would leave Gap C unchanged. The refinement also makes a *falsifiable* claim (a loop-role section would be an outbound pointer) that can be checked against the principle. **Confidence:** HIGH. **Resolution:** externally grounded; a genuine refinement, not self-reference drift.

### Ambiguity 6 — "Protocol" = the meta-loop, or a dedicated boundary protocol? (scope clarification)

**Resolution:** the load-bearing answer is *protocol-layer, not discipline-section* — that decides the user's question. *Which* protocol (the meta-loop itself, which 08-14 already gives selection + cross-cycle memory; or a thin dedicated boundary-orchestration protocol that the meta-loop invokes) is a downstream structural detail. Most likely the meta-loop owns it (it already owns selection + the menu-composition Gap A + REVISIT Gap B), with the "boundary moment" being the meta-loop's call to routelister. **Confidence:** HIGH on protocol-vs-section; the which-protocol identity is a flagged sub-question, not load-bearing here.

### SV4 — Disambiguated Understanding

All six ambiguities resolve HIGH. Boundary-use is a composition/usage, not a second identity (routelister runs on any territory; boundary is one application). routeman's defect was *fusion* (welding two roles into one identity + orchestration inside the discipline), not "having two roles"; the new plan *composes* across layers and is structurally different — so it doesn't repeat the failure. The loop-boundary things are orchestration → a *protocol* that uses routelister, not a section in routelister (orchestration-inside-discipline is routeman's error; the self-contained principle forbids the outbound pointer). routelister needs no operational loop-role section (a completed cycle is just territory; the feed-side is the caller's knowledge) — at most a self-contained descriptive note; this refines 08-14 Gap C (intent preserved, location moved to the protocol). "Protocol" is most likely the meta-loop; the exact protocol identity is a downstream detail.

---

## Phase 4 — Degrees-of-Freedom Reduction

**Fixed:**
- Boundary-role = a usage/composition (a loop-aware caller invokes routelister), NOT a second identity. routelister's identity stays intrinsic.
- routeman's defect = FUSION (loop-position in identity + orchestration inside the discipline); the new plan = COMPOSITION across layers (pure discipline + external caller). Different architecture → no repeat.
- The loop-boundary machinery = orchestration → a PROTOCOL (protocol-layer artifact that uses routelister), at `cognitive_harness/protocols/` or the meta-loop.
- routelister gets NO operational loop-role section — at most a self-contained descriptive "where it fits / completed-cycle-is-territory" note.
- Dependency direction: protocol → discipline, always.
- 08-14 Gap C REFINED: loop-role intent preserved, location moved discipline→protocol.
- The three-layer clarity model: discipline (perception) / usage (boundary composition) / orchestration (protocol).

**Eliminated:**
- "boundary-use is a second identity" — KILLED (it's a usage; routelister runs on any territory).
- "routeman failed because it had two roles" — KILLED (it failed by fusing them; composition is safe).
- "a loop-role section inside routelister" (operational) — KILLED (orchestration-inside-discipline = routeman's error; outbound-pointer = self-containment violation).
- "the loop-boundary machinery belongs in the discipline" — KILLED (it's orchestration = protocol-layer).

**Remaining viable (downstream; out of scope):**
- The exact protocol identity (the meta-loop vs a dedicated thin boundary protocol) — a downstream structural detail.
- Authoring the boundary protocol + routelister's optional self-contained note — structural.

### SV5 — Constrained Understanding

The solution collapses to a clean three-layer architecture: routelister = the intrinsic discipline (perception); the boundary-role = a usage (a loop-aware caller composes it); the loop-control machinery = orchestration in a *protocol* that uses routelister. routeman's mistake was *fusing* these into one identity-bearing artifact; the new plan *composes* them, so it is structurally safe. The loop-boundary things are a protocol, not a section — and routelister carries at most a self-contained descriptive note, refining the prior finding's Gap C (location discipline→protocol).

---

## Phase 5 — Conceptual Stabilization

*Accommodation check: the perspectives converged on the three-layer model + protocol-over-section; no perspective forced repeated revision. The one steelman that could destabilize — "co-location favors a section" — resolved cleanly (presentation can't override the structural orchestration-not-in-individual requirement). Stable; no model-misfit.*

### SV6 — Stabilized Model — Routelister Is the Discipline; the Boundary Is a Usage; the Orchestration Is a Protocol

**Yes — your plan is right, and you are *not* repeating routeman. Here is the clean model that resolves the confusion.**

**There are three distinct layers, and the whole point is to keep them distinct:**

1. **The discipline — routelister.** *What it IS.* A standalone, intrinsic perception discipline: point it at any territory with any goal, get back concepts-as-typed-routes. It does not know about loops. Home: `cognitive_harness/routelister/references/routelister.md`.

2. **The usage — the boundary-role.** *How it's used.* "Use routelister as a boundary discipline" means: a loop-aware caller *invokes* routelister at the moment between cognitive cycles, handing it the just-finished cycle as its territory. This is a **composition role**, not a second identity — the walkthrough already says routelister fills the boundary slot "by role … not part of its identity." The boundary-role is an *act of calling*, not an artifact.

3. **The orchestration — a protocol.** *The loop machinery that wraps the call.* Composing the full next-move menu (adding the loop-control moves), REVISIT, cross-cycle memory, autonomy classification, selection — all of this is the loop-aware layer's work (the meta-loop, per the prior finding). Home: `cognitive_harness/protocols/` (or the meta-loop spec).

**OT1 — "have routelister, then use it as a boundary — correct?"** **Yes, correct** — read "use it as a boundary" as *compose it* (call it from the loop layer), not *make it a boundary* (extend its identity). routelister stays the pure discipline; the boundary is one of its applications.

**OT2 — "we already tried that in routeman — what went wrong?"** **You did not try the same thing.** routeman **fused** the two capabilities into one identity: its very definition was "the boundary discipline that operates between cognitive cycles" (the loop-position was *in its identity*), and it carried the loop-control orchestration *inside the discipline spec* (cross-cycle revisitation, autonomy classification, the `_route.md` memory). So its concept-listing couldn't exist except as a between-cycles thing — that is the loop-*relative identity* the diagnosis named as the defect. The new plan **composes** instead: routelister's identity is loop-free, and a separate caller adds the boundary use. The capabilities both still exist — but *separably*, in layers, not *welded* into one identity.

The one-line version: **routeman was "a discipline that *is* a boundary"; the new plan is "a discipline that *can be used* at a boundary."** The mistake was never *having both* concept-listing and boundary-serving — it was *fusing them so they couldn't be pulled apart*. Composition pulls them apart. That's why you're not repeating routeman.

**OT3 — "protocol or section?"** **Protocol.** The loop-boundary things are *orchestration*, and orchestration belongs in a protocol that *uses* routelister — for two reinforcing reasons:
- *The routeman lesson:* putting orchestration inside the discipline is exactly what routeman did (§2.1/§5.8) and is half of the defect. Don't repeat it.
- *The self-contained principle:* a discipline spec is a self-contained individual and must not point outward; an operational "loop-role section" would have to name the loop/meta-loop — an outbound pointer that breaks self-containment. The repo already separates the layers (`protocols/` vs the discipline dirs), and the protocol→discipline call is the same pattern the runners already use.

And routelister needs **no operational loop-role section at all** — because a completed cycle is *just one kind of territory*, its existing "territory + goal" contract already handles boundary input, and "how my output feeds selection" is the *caller's* knowledge, not the discipline's. At most routelister carries a **self-contained descriptive note** ("a completed cycle's artifacts are a valid territory; routelister is commonly composed at the forward boundary") — a "where it fits" line that names no dependency.

This **refines the prior finding's Gap C**: that finding said "a loop-role *section* in routelister." The *intent* (document the loop-role) is right and preserved; the *location* moves — the loop-role contract belongs in the **protocol** (the caller), not as a section in the discipline (the callee). The dependency arrow is **protocol → discipline**, never the reverse.

**The mental-model fix for the confusion:** you were conflating three things that routeman had also conflated — *what routelister is* (discipline), *how it's used* (boundary composition), and *the machinery around that use* (protocol). routeman collapsed all three into one identity-bearing artifact, and that collapse was the bug. Keep them as three, with the dependency pointing only downward (protocol uses discipline), and the architecture is clean.

**How SV6 differs from SV1:** SV1 sketched "composition, not identity; protocol, not section." SV6 *proves* the boundary-is-a-usage reframe (a property holding only in one application is a usage), sharpens the routeman diagnosis into the *fusion-vs-composition* distinction (with the "IS a boundary → CAN BE USED at a boundary" formulation that dissolves the user's confusion), decides protocol-over-section on two independent grounds (the routeman lesson + the self-contained principle, both external), shows routelister needs no operational section because a completed cycle is just territory, and *refines* 08-14 Gap C (location discipline→protocol) — all with the three-layer clarity model as the takeaway.

---

## Saturation / Telemetry

- **Perspective saturation:** saturating — technical/user/strategic/risk/definitional all converged on the three-layer model + protocol-over-section; the co-location steelman was the only destabilizer and it resolved.
- **Ambiguity resolution ratio:** 6/6 HIGH; 0 OPEN (the which-protocol identity flagged as a downstream sub-question, not an open ambiguity on the load-bearing axis).
- **SV delta:** large (SV1 "composition not identity; protocol not section" → SV6 the proven usage-reframe + the fusion-vs-composition diagnosis + the two-ground protocol verdict + the no-operational-section result + the Gap-C refinement + the three-layer model).
- **Anchor diversity:** multi-type (Constraints C1–C5, Insights K1–K12, Structural S1–S2, Principles P1–P2, Meaning-nodes M1–M5) across perspectives.
- **Failure modes checked:** Status Quo Bias (didn't reflexively preserve 08-14 Gap C — refined it on external grounds); Clean Resolution Trap (the "co-location favors a section" + "two roles = the routeman mistake" easy reads were tested on structural grounds and failed); Premature Stabilization (the load-bearing concepts — usage/identity, fusion/composition, orchestration/perception — each ambiguity-tested); Perspective Blindness (the uncomfortable "you're repeating routeman" + "overturning your own finding" reads checked); **Self-Reference — guarded** (the Gap-C refinement rests on the external self-contained principle + the observed layout + routeman's literal spec, and is adversarial to the prior finding, not protective); Phase/Calibration (the meta-loop's immaturity checked — doesn't change protocol-vs-section).

**Handoff to Decomposition:** structure to partition — (1) OT1 the usage-not-identity reframe; (2) OT2 the fusion-vs-composition diagnosis (the "what went wrong + how the new plan differs"); (3) OT3 the protocol-over-section verdict (+ the two grounds); (4) the no-operational-section result + the Gap-C refinement; (5) the three-layer clarity model; (6) synthesis + Inherited Commitments re-test. Candidate sub-questions for /decompose.
