## User Input

`devdocs/inquiries/2026-05-30_09-07__routelister_boundary_use_protocol_vs_section/_branch.md` (prior outputs: surfacing.md, sensemaking.md, decomposition.md [P1 usage / P2 fusion-diagnosis / P3 protocol-verdict / P4 no-section+Gap-C / P5 clarity-model]; workspace in context). Produce the constructive output — the usage reframe, the fusion-vs-composition diagnosis, the protocol verdict, the Gap-C refinement, the three-layer clarity model — + foils. STRUCTURAL-layer (protocol-vs-section), on settled meaning grounding.

---

# Structural Innovation — Routelister-as-Boundary: Articulation, Clarity Model & Foils

## Phase 1 — Seed (+ Methodology-Mode Consideration)

**Seed (type: Question + Signal):** the user is "a bit confused" and asks three things — is boundary-use a composition (Q1), what went wrong in routeman (Q2), protocol or section (Q3). Sensemaking settled: usage-not-identity; fusion-vs-composition; protocol-over-section; Gap-C refined. Produce the clarity-producing articulation + the three-layer model + the foils Critique adjudicates.

**Methodology-Mode Consideration:**
- **(a) Inherited mode:** *Standard default* — articulate the committed verdict + the clarity model. The user's goal is clarity, so articulation quality is the deliverable.
- **(b) Alternative named:** *Contrarian-rethink (Framer-weighted)* — challenge the verdict (maybe it IS a second identity; maybe a section is right).
- **(c) What follows under the alternative:** a Framer-heavy run would foreground the "you're repeating routeman" / "section is fine" challenges — useful as foils but it under-produces the clarity model the user needs.
- **(d) Decision: DEFAULT + piece-level Inversion at the meta-decision pieces (P1/P2/P3/P4).** Surface the strongest counter-frames as foils (F1–F4) and test them; the verdict's clarity-value depends on the rejections being right.

**Meta-decision-piece classification:** P1 meta-decision (commits the usage-not-identity frame); P2 meta-decision (commits the fusion-vs-composition relationship/frame); P3 meta-decision (commits the protocol verdict + criteria); P4 meta-decision (commits a `refines:` relationship to 08-14 Gap C); P5 content-production-leaning (the synthesis model) but carries the re-test.

---

## Phase 2 — Generate (per piece)

### P1 — Boundary = usage/composition, not identity (OT1)
**Principal (Lens Shifting + Absence Recognition):** lens — view routelister by *what holds across all its uses* vs *what holds in one use*; identity is the invariant, usage is the per-application. The boundary case (a completed cycle) is one territory-type among many → boundary-serving is a usage. Absence: there is no property routelister gains *as identity* by being used at a boundary — it runs the same operation on the cycle-as-territory.
**Piece-level Inversion (usage/identity axis):** *Assumption:* "boundary = a usage." *Reversal:* "boundary-serving is part of what routelister IS." *Test:* if identity, routelister couldn't run on a non-cycle territory — but it runs on any territory; a property true in only one application is a usage, not an identity. **Rejected** (Foil **F1** = "boundary is a 2nd identity").

### P2 — Fusion vs composition (OT2 — the confusion-dissolver)
**Principal (Domain Transfer + Combination):** *Source (computing-native):* coupling vs cohesion / separation-of-concerns — two functions can be *coupled into one module* (inseparable) or *composed via an interface* (separable). routeman *coupled* concept-listing and boundary-serving into one identity (loop-position IN identity §1.5 + orchestration INSIDE the discipline §2.1/§5.8); the new plan *composes* them (pure discipline + caller). The crystallizing line: **routeman = "a discipline that IS a boundary"; the new plan = "a discipline that CAN BE USED at a boundary."** The error was the coupling/welding, not the duality.
**Piece-level Inversion (the "did we already try this" axis):** *Assumption:* "the new plan differs from routeman." *Reversal:* "it's the same attempt — two roles in play again = the same mistake." *Test:* the diagnosis (01-11) names the defect as loop-*relative identity* (the welding), not "two roles"; composition keeps the roles separable, so the defect doesn't recur. **Rejected** (Foil **F2** = "you're repeating routeman").

### P3 — Protocol over section (OT3)
**Principal (Absence Recognition redesign + Constraint Manipulation):** the loop-boundary machinery is *orchestration*; the absence is a *home* for it that isn't the discipline. Two grounds: (1) *the routeman lesson* — orchestration-inside-discipline (§2.1/§5.8) is half the defect; (2) *the self-contained principle* — an operational loop-role section names the loop = an outbound pointer = self-containment violation. *Constraint:* the repo already has `cognitive_harness/protocols/` + the protocol→discipline call pattern (the runners). → **PROTOCOL** that uses routelister.
**Piece-level Inversion (intervention-shape axis — property (v): commits "orchestration→protocol, not section"):** *Shape assumption:* the loop-boundary things go in a **separate protocol artifact** (ADD-CONTENT at `protocols/`). *Alternative shape:* **a section inside routelister** (ADD-CONTENT in the discipline spec). *What follows if section:* re-couples the discipline to the loop (re-imports routeman's orchestration-inside-discipline error + the outbound pointer). **Both tested → protocol selected; section killed** (Foil **F3** = "a thin co-located section is fine").

### P4 — No operational section + the Gap-C refinement (OT3 / re-test)
**Principal (Combination + Lens Shifting):** routelister needs *no operational loop-role section* — the consume-side is just "territory" (existing contract), the feed-selection side is the *caller's* knowledge. At most a **self-contained descriptive note** ("a completed cycle is a valid territory; commonly composed at the forward boundary"). Relationship to prior work: **`refines:` 08-14 Gap C** — intent (document the loop-role) preserved; location moved discipline→protocol.
**Piece-level Inversion (relationship axis — property (i): commits a `refines:` to Gap C):** *Assumption:* the relationship to Gap C is **REFINES** (keep the intent, move the location). *Reversal/alternatives:* **PRESERVES** (Gap C's section stays as-is) or **CORRECTS** (Gap C was wrong to document the loop-role at all). *Test:* PRESERVES fails (a section is an outbound pointer); CORRECTS overshoots (documenting the loop-role IS valuable — just in the protocol). So REFINES is right. **Rejected alternatives** (Foil **F4** = "keep Gap-C's routelister section as-is").

### P5 — The three-layer clarity model (synthesis)
**Principal (Combination):** the model that resolves the confusion —

| Layer | What | Where it lives | routeman's error |
|---|---|---|---|
| **Discipline** | routelister — perception; lists concepts-as-routes on *any* territory | `cognitive_harness/routelister/references/routelister.md` | welded the loop into its identity |
| **Usage** | the boundary-role — a loop-aware caller invokes routelister at the between-cycles moment | (not an artifact — an act of calling) | treated the usage as the identity |
| **Orchestration** | the loop-control machinery — menu-composition, REVISIT, cross-cycle memory, autonomy, selection | `cognitive_harness/protocols/` (or the meta-loop) | put orchestration inside the discipline |

The fix: keep the three layers distinct, with the dependency pointing only downward (protocol → discipline). routeman collapsed all three into one identity-bearing artifact — that collapse was the bug.

---

## Inherited Frame Audit (between Phase 2 and Phase 3)

- **Seed-level central assumption:** "boundary-use is a safe composition (not a repeat of routeman); protocol not section." **Challenged?** YES — F2 ("you're repeating routeman") + F3 ("section is fine") + F1 ("it's a 2nd identity") + F4 ("keep Gap-C section") explicitly oppose and are tested. ✅
- **P1** challenged by F1; **P2** by F2; **P3** by F3; **P4** by F4. ✅

**Every load-bearing assumption has an explicit challenge. Audit does NOT fire. Proceed to Phase 3.**

---

## Phase 3 — Test (5-test cycle on survivors)

| Output | Novelty | Scrutiny survival | Fertility | Actionability | Mech. independence | Disposition |
|---|---|---|---|---|---|---|
| **Usage-not-identity** (P1) | Med | Survives F1 (routelister runs on any territory) | High — frees routelister for non-boundary reuse | High — clarifies "utilize as boundary" = compose | Yes — Lens + Absence | **ACTIONABLE** |
| **Fusion-vs-composition + the IS→CAN-BE-USED line** (P2) | High — reframes "what went wrong" precisely | Survives F2 (defect = welding, not duality) | High — the reusable lesson (compose, don't fuse) | High — directly dissolves the confusion | Yes — Domain-Transfer + the 01-11 diagnosis | **ACTIONABLE** |
| **Protocol over section** (P3) | Med-High | Survives F3 (orchestration-in-discipline = routeman's error; self-contained violation) | High — guards the discipline's reusability long-term | High — names the artifact home (`protocols/`) | Yes — Absence-redesign + Constraint + the routeman lesson | **ACTIONABLE** |
| **No-section + Gap-C refinement** (P4) | Med | Survives F4 (PRESERVES = outbound pointer; CORRECTS overshoots) | Med-High — corrects the prior finding's location | High — `refines:` 08-14 Gap C, location discipline→protocol | Yes — Combination + Lens | **ACTIONABLE** (the routelister descriptive note is DEFERRED to spec authoring) |
| **Three-layer clarity model** (P5) | Med | Survives — each layer grounded; the collapse-was-the-bug framing holds | High — the takeaway that resolves the confusion | High — a model the user can hold | Yes — Combination of P1+P3 | **ACTIONABLE** |

**Artifact-grounding (6th test — fires: claims about repo structure + routeman's spec):** verified — `cognitive_harness/protocols/` exists (branch_inquiry/conclude/loop_diagnose) and disciplines are top-level dirs (just listed); routeman §1.5 ("boundary discipline — operates between cognitive cycles") + §2.1/§5.8 (orchestration inside the discipline); walkthrough §9/Scenario-3 ("by role, not identity"); §3.4 (completed cycle = territory). **All claims consistent. No re-flag.**

**Axis coverage check:** the candidate space varies along (1) the *layer* axis (discipline/usage/orchestration), (2) the *artifact-shape* axis (protocol vs section vs self-contained-note), (3) the *relationship-to-prior* axis (refines vs preserves vs corrects, via P4's foils). Three orthogonal axes, each with ≥1 variant. **Coverage complete.**

## Assembly Check

The survivors assemble into the **three-layer model**, and its emergent value is that it answers all three of the user's questions *at once*: OT1 (boundary = the *usage* layer), OT2 (routeman collapsed the three layers into one identity = fusion; the new plan keeps them separate = composition), OT3 (the orchestration layer is a *protocol*, the discipline layer is routelister, and they connect by a downward dependency). The single most clarifying artifact is the model table (P5) paired with the one-line dissolver (P2: "IS a boundary → CAN BE USED at a boundary"). The finding should lead with the three-layer model and use the routeman-collapse as the contrast that makes it click.

---

## Mechanism Coverage (Telemetry)

- **Generators:** 3/4 (Absence Recognition, Combination, Domain Transfer; Extrapolation not needed).
- **Framers:** 3/3 (Lens Shifting, Constraint Manipulation, Inversion at P1/P2/P3/P4).
- **Convergence:** YES — Domain-Transfer (coupling/cohesion) + the 01-11 diagnosis converge on **fusion-vs-composition**; Absence-redesign + Constraint + the self-contained principle converge on **protocol-over-section**.
- **Survivors tested:** 5/5; foils F1–F4 generated, tested, all rejected.
- **Per-piece mechanism log:** `P1: [Lens, Absence, Inversion:usage/identity]`; `P2: [Domain-Transfer, Combination, Inversion:repeat-axis]`; `P3: [Absence:redesign, Constraint, Inversion:intervention-shape]`; `P4: [Combination, Lens, Inversion:relationship]`; `P5: [Combination]`.
- **Meta-decision-piece classification:** P1/P2/P3/P4 meta-decision; P5 content-production (synthesis).
- **Piece-level Inversion compliance:** P1 satisfied; P2 satisfied; P3 satisfied (intervention-shape axis: protocol vs section); P4 satisfied (relationship axis: refines vs preserves vs corrects). All compliant.
- **Failure modes observed:** none. (Survival Bias guarded — the uncomfortable foils F2 "you're repeating routeman" + F4 "keep your own prior finding as-is" were generated and tested, not skipped; both rejected on structural grounds.)
- **Overall: PROCEED.**

**Handoff to Critique:** adjudicate — (P1) usage-not-identity [F1]; (P2) fusion-vs-composition, is the new plan really different [F2]; (P3) protocol-over-section [F3]; (P4) the Gap-C refinement [F4]; (P5) the clarity model; render verdicts + complete the `## Inherited Commitments Re-test`.
