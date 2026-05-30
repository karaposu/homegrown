# Branch: Should Routelister Have Delay/Priority/Do-Nothing Engagement-Types? (Bloat Check)

## Question

Should routelister's **engagement-type** axis (currently the fixed nine concept-engagement verbs — DEEPEN/DEVELOP/PURSUE-SEED/INVESTIGATE-FRONTIER · REFINE/REFRAME/DIAGNOSE/TEST/CONSOLIDATE) be **extended with three new types** the user proposes — (1) a **do-nothing / don't-engage** type ("engagement-types that don't do anything"), (2) a **low-priority delay** ("not important; can be neglected"), and (3) a **high-priority delay** ("important but deferred until peripherals are more defined — what our next moves should keep in mind, unlike low-priority delay which doesn't matter")?

- **Subject** — routelister's engagement-type vocabulary (one of the three route-type axes: grain × kind × engagement-type), per `docs/walkthrough.md` §3.2.
- **Action** — **decide** (should these three be added or not?) + **diagnose** the category (are they engagement-types at all, or a different kind of thing — priority/disposition/selection?).
- **Level** — discipline (routelister's route-type taxonomy) + cross-cutting into the composition layer (does priority/delay/do-nothing belong to routelister-the-perception-layer or the meta-loop-the-selection-layer?). The user explicitly raises the cross-layer placement: *"maybe these belong to meta loop or sth, which makes the decision."*
- **Observation targets** (preserved separately):
  - **(OT1)** Are the three proposed items actually **engagement-types** (ways of *engaging* a concept-route), or are they a **different category** (priority/disposition/timing/non-engagement)?
  - **(OT2)** For each of the three (do-nothing; low-priority-delay; high-priority-delay): is it **already covered** by routelister's existing design (the attributive Priority/Confidence fields, §4/§6.1), is it a **meta-loop / selection** concern ("Navigation sees, it does not choose"), or is it a **genuine gap** in routelister?
  - **(OT3)** Is adding them **bloat** (the user's explicit worry) — and if there is a legitimate kernel, what is the *minimal* correct form and *which layer* owns it?
  - **(OT0)** Re-test against the just-settled boundary: routelister = perception (enumerate-not-select); selection/priority/scheduling/dependency = meta-loop. Does any of the three belong in routelister without re-coupling perception to selection (the defect `01-11`/`08-14` removed)?
- **Deliverable shape** — a decision (add / don't-add / add-in-different-form) per item, with the category diagnosis, the owning layer, and a bloat verdict; reasoning grounded in the route-type schema + the perception/selection boundary.

## Goal

- **Criterion** — a careful, honest verdict that distinguishes *category* (is it an engagement-type?) from *value* (is the underlying need real?) from *ownership* (which layer). The user asked us to "be careful — this might be bloat," so the answer must actively test the bloat hypothesis, not rubber-stamp the addition.
- **Use case** — decides whether routelister's engagement-type vocabulary stays at nine verbs or grows; resolves the walkthrough §3.2 note before the structural spec (`cognitive_harness/routelister/`) is authored.
- **Desired outcome** — clarity on (a) whether do-nothing/low-delay/high-delay are engagement-types, (b) whether each is already-covered / meta-loop-owned / a real gap, (c) the minimal correct form of any legitimate kernel and its owning layer.
- **What would fail** — (a) adding the three to the engagement-type axis without checking they ARE engagement-types (category error); (b) rejecting them flatly without surfacing the legitimate kernel (the user's "many routes, some not important" scenario is real); (c) importing priority/delay/do-nothing *decisions* into routelister, re-coupling the perception layer to selection (re-importing the `01-11` defect); (d) ignoring that routelister ALREADY has an attributive Priority/Confidence field (§4, §6.1), so "low-priority" may be a duplicate, not a new type.

## Source Input

```text
first of all reread docs/walkthrough.md fully 

(note: it is intesresting but maybe these belong to meta loop or sth, whichi makes the decision. 
and one another thing is, why we dont have a engagement-types dont do anything? or low priorty delay , hihg priorty delay (e.g it is sth importnat, it is delayed till peripharals are more defined. and in this situtaion it differs from low priorty delay bc high priority delay is what our next moves should keep in mind while low priority one doesnt matter and can be neglected ) ? for example  if we have many routes and some are not importnat , these 3 engagement might useful.    )

what do you think about this part? we should have this or not ? be careful? this might be a bloat. So lets dive deep into this
```

## Scope Check

Question covers goal: **YES** — the per-item decision (OT2) + category diagnosis (OT1) + bloat verdict & minimal-form (OT3) + the perception/selection re-test (OT0) cover the goal of a careful add/don't-add verdict with owning layer.

Specific-vs-pattern: the user names three specific proposed types but the underlying pattern is "does a *priority/disposition/timing* axis belong in routelister, and is it an engagement-type?" Both in scope: the three concrete items AND the general question of whether routelister's engagement-type axis should absorb non-engagement (priority/timing) semantics. The general pattern is load-bearing for the bloat verdict.

Transcription-audit note: the input's load-bearing clauses — "maybe these belong to meta loop … which makes the decision" (the cross-layer placement hypothesis — OT0/OT2), "do-nothing" + "low priority delay" + "high priority delay" (the three items — OT1/OT2, each preserved separately), the high-vs-low distinction ("high priority delay is what our next moves should keep in mind while low priority one doesnt matter") (the semantic difference — OT2), "if we have many routes and some are not important, these 3 might be useful" (the legitimate-kernel use case — OT3), "be careful, this might be a bloat" (the bloat hypothesis to actively test — OT3) — all preserved. The "AND one another thing" clause-joiner separates two sub-questions (the meta-loop-placement note AND the three-new-types question); both are preserved as distinct OTs.

## Layer Commitment

Primary layer: **MEANING** — the crux is *what an engagement-type IS* (a way of *engaging* a concept-route) and whether the three proposed items *fit that category* or are a *different kind of thing* (priority / disposition / timing / non-engagement / selection). The decision turns on the conceptual nature of the items, not on spec sections or procedure.

Other-layer alternatives considered and OUT OF SCOPE for this run:
- **Structural** — exactly where any legitimate kernel lands in the spec (the Priority/Confidence attribution field vs a new axis vs a route-status field) — deferred; this run decides *whether* and *which layer*, not the spec section shape.
- **Process** — how routelister would *assign* a priority/readiness annotation during the frame step — deferred; downstream of settling whether it belongs at all.

The primary layer is **not ambiguous** (the question is "are these engagement-types / what are they / should they exist" = meaning), so the pipeline proceeds without a user gate.

## Synthesis Trigger

This inquiry's verdict hinges on re-testing commitments from prior outputs; per CONCLUDE the finding MUST include an `## Inherited Commitments Re-test`.

Priors being synthesized / re-tested:
- `devdocs/inquiries/2026-05-29_18-17__routelister_route_type_schema_reconciliation/finding.md` — the route-type schema (grain × kind × engagement-type); the 9-verb concept-engagement vocabulary; the 7 loop-control types dropped. **Re-test: is the engagement-type axis a "how-to-engage" verb axis, such that priority/timing/do-nothing don't fit it?**
- `devdocs/inquiries/2026-05-30_08-14__routeman_loop_harmony_gaps_vs_routelister/finding.md` — "Navigation sees, it does not choose"; selection + priority + scheduling = meta-loop; loop-relative route-state (incl. Blocked-By / dependency) = dropped from routelister. **Re-test: do do-nothing/low-delay/high-delay fall on the meta-loop (selection) side of the boundary? Is "delay until peripherals defined" the dropped Blocked-By dependency state?**
- `docs/walkthrough.md` §4 (Not a selector; "it *can* tag each route with an attributive Priority/Confidence, which is description, not choice") + §6.1 (the route record's `Priority · Confidence` attribution field) + §4 (Not an inter-concept dependency-graph builder). **Re-test: is "low-priority" already covered by the existing attributive Priority field? Is "high-priority delay" partly the excluded inter-concept dependency graph?**
