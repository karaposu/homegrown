---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: Routelister — What to Define Next (Output Contract + Cross-Run Behavior)

## Question

What still needs defining for routelister — concentrated on its **output** and its **behavior across multiple runs** — answered through the user's five questions, the headline being whether a "root" run should read prior concept-targeted runs to enrich itself, and whether that is defined.

Background, for an outside reader:
- **routelister** is a thinking discipline (replacing the older "routeman") that looks at a body of material ("a territory") and lists the **concepts** in it as **typed prescriptive routes** — directions you could take toward a goal.
- It has **two run modes** (its "two axes"): a **root / project-space (breadth)** run that lists the *concept-identities* across the whole territory; and a **concept-targeted / concept-space (depth)** run that takes one concept and lists *its* manifestations (and their divergences) as routes.
- **routeman**, the predecessor, had machinery for re-running and carrying state across invocations (its `_route.md` file). The question is whether routelister's version of that is defined — especially the user's proposed behavior: a root run that *finds and reads* prior concept-targeted runs to produce better results.

The five sub-questions: (OT1) is the concept-listing logic defined well enough? (OT2) is the root-run output clear? (OT3) does output differ between a root run and a concept-targeted run? (OT4) what happens on two sequential root runs? (OT5) across root → target-A → target-B → root, should the second root run read the prior concept-target runs to enrich itself — and is that defined?

**Goal:** honest per-question verdicts (not "defined" where only the meaning-level is settled), a prioritized list of what to define next, and a designed answer for the cross-run-enrichment behavior with its dependencies and guards.

## Finding Summary

- **Direct answers to the five questions:**
  - **OT3 (does output differ by mode?) — YES, and it's DEFINED.** A root run lists *concept-identities* (breadth, compact); a concept-targeted run lists *one identity's manifestations + divergences* (depth). This is routelister's "grain" axis, already settled. The best-defined of the five.
  - **OT1 (is concept-listing defined well enough?) — PARTIAL.** *What* it lists is defined (concept-identities as typed routes). *How* it lists is not: the enumeration mechanism, the "when is a breadth run done" scoping, and above all **identity-individuation** (how it decides two artifacts are the same concept vs different ones) are undefined.
  - **OT2 (is the root-run output clear?) — PARTIAL.** What you get back is clear *in kind* — a compact list of the project's concept-identities, each a typed prescriptive route. What it looks like *in form* — the route-record fields, the saved-file format — is not yet authored.
  - **OT4 (two sequential root runs?) — currently UNDEFINED; the principled answer is "idempotent at a fixpoint."** A re-run on the same territory + goal should converge to the same map; reading the prior run refines/speeds it but doesn't make it drift.
  - **OT5 (does a root run read prior concept-target runs to enrich itself? is it defined?) — NOT DEFINED. But the behavior is sound, and it *should* be defined.** It is, however, the **capstone** — it depends on things that must come first.

- **OT4 and OT5 are the same missing thing at two scopes** — routelister has no defined **cross-run memory model**. OT4 is "does a run read its *own* prior output?" OT5 is "does a run read *other* runs' outputs?" One model answers both.

- **routeman does not already define the user's behavior.** routeman's re-run machinery is *same-map re-invocation* — re-running one inquiry's map and extending it, via a per-folder state file. The user wants *cross-target aggregation* — a breadth run discovering and reading *separate* depth runs. Different shape. And routeman's mechanism is built on its "REVISIT" move — one of the loop-control types a sibling finding showed don't transfer to routelister. So routeman's machinery is a *partial template to re-derive*, not a ready definition.

- **The designed cross-run model (the answer to OT5):** a small routelister-workspace **index** (each concept-identity → a pointer to the depth run that drilled it) plus three operations — **read-prior** (scan for the run's own prior output and, for a root run, prior depth runs), **integrate** (match each enumerated identity against prior depth runs and attach a compact *depth-signal* to its route), **persist** (save this run's output and register it in the index). The user's exact trace works: after root → A → B, the second root run reads the index and produces a *smarter* breadth map — same identities, but A's and B's routes now carry signals like "A: drilled — has an unresolved README-vs-implementation divergence (an epistemic route is available)." Same identities, enriched; no manifestation dump.

- **Two governing principles, definable now:** **idempotency-at-fixpoint** (re-runs converge, reading prior refines-not-drifts) and **enrich-not-dump** (a run reading other runs attaches compact depth-*signals* to identity-routes; it never dumps a concept's manifestations into the breadth map — which would re-create the overload routelister's design avoids).

- **One boundary guard (load-bearing):** the index must stay **within-concept** — each identity points to *its own* depth run, and carries signals about *itself*. It must never become a graph of relations *between* concepts ("A depends on B") — that inter-concept dependency graph is explicitly excluded by routelister's identity. The cross-run model is a lookup table, not a relationship graph.

- **What to do next, in dependency order (the headline answer to "what should be handled next"):** **identity-individuation → enumeration & breadth-scoping → the output-artifact schema → the cross-run memory model.** Individuation is the linchpin — it gates both the concept-listing HOW (OT1) and the cross-run matching (OT5), and it is therefore the single highest-leverage next inquiry, because routelister's whole *cumulative* value (depth runs permanently enriching future breadth runs) is unlocked by it.

## Finding

### Orientation

routelister's *meaning* — what it is, its two axes, how a route is typed — has been settled across the recent inquiries. The user is now asking the natural follow-on: is its *output* and its *behavior across runs* defined, and what should be built next? The honest pattern across all five questions is **"meaning settled, mechanism-and-form open"** — and the questions converge on one missing piece (a cross-run memory model) and one linchpin prerequisite (identity-individuation).

### The five questions, answered

**OT3 — output differs by mode, and it's defined.** This is the firmest answer. A root (project-space) run and a concept-targeted (concept-space) run differ in *grain*: the root run lists the territory's *concept-identities* (one route per concept, kept compact — it does not list every artifact of every concept); the concept-targeted run takes one identity and lists *its manifestations* and their divergences as routes. This grain distinction is already part of routelister's definition. So: yes, the output differs, and the difference is specified.

**OT1 — concept-listing logic is defined in meaning, not in mechanism.** *What* routelister lists is well-defined: the concept-identities engageable as routes toward a goal, each typed. But *how* it lists is not. Three mechanisms are missing: the enumeration procedure (how it actually sweeps a territory and surfaces identities); the breadth-scoping/stopping rule (when is a root run "done," and how is overload avoided beyond a soft goal-bias); and — the big one — **identity-individuation** (how routelister decides two artifacts are manifestations of the *same* concept versus *different* concepts). Individuation has been the chain's one acknowledged open component all along; it is what makes "concept-listing" only partially defined.

**OT2 — the root-run output is clear in kind, not in form.** If you run routelister at the root, you will get back a compact list of the project's concept-identities, each framed as a typed prescriptive route. That much is clear and describable. What is *not* authored is the artifact's *form* — the exact fields of a route record, and the format of the saved file. (routeman's record schema exists, but parts of it are tied to the cognitive loop and need re-deriving before routelister can reuse them.) So "is it clear what the output will be?" — yes in content-type, not yet in record/file schema.

**OT4 — two sequential root runs: idempotent at a fixpoint.** This is currently undefined, but the principled answer is clear. On an unchanged territory and goal, a second root run should converge to the same map as the first — re-running adds nothing new. If routelister reads its own prior output, that should *refine* (catch a missed identity, sharpen individuation) but converge to the same fixpoint, not drift run-to-run. (If the territory itself changed between runs, the map updates — but that's because the input changed, not instability.) This needs to be decided and encoded; the right decision is idempotency-at-fixpoint.

**OT5 — the cross-run enrichment: sound, but not defined, and the capstone.** The user's proposed behavior — a root run finds the prior concept-target runs, reads their outputs, and uses them to produce a better breadth map — is the right design, and it is **not defined** anywhere yet. Two clarifications matter. First, routeman does *not* already cover it: routeman's re-run machinery re-invokes and extends *one inquiry's own map* (via a per-folder state file), whereas the user wants a breadth run to discover and absorb *separate* depth runs — a different shape — and routeman's mechanism is built on its "REVISIT" move, which is one of the loop-bound types that don't carry over to a standalone routelister. Second, OT5 is the most *downstream* item: to "read concept-A's prior run and integrate it," the root run must recognize that the identity it just enumerated as "A" is the same A the prior run drilled — and that recognition *is* identity-individuation, which is undefined. So OT5 is sound and worth defining, but it sits at the end of a dependency chain, not the front.

### OT4 and OT5 are one missing thing: a cross-run memory model

The cleanest way to see OT4 and OT5 is that they are the same question at two scopes: *does a run read prior runs' outputs, and how does it fold them in?* OT4 reads the run's own prior (same target); OT5 reads other targets' runs (different targets). Both are served by one **cross-run memory model**, parameterized by what it reads. routelister doesn't have this model yet — that is the real gap behind both questions.

### The designed cross-run model

The model is deliberately minimal — the lightest thing that lets depth runs feed breadth runs:

- **An index** kept in routelister's workspace: each concept-identity maps to a pointer to the depth run(s) that drilled it (and a compact note of what they found).
- **Three operations per run.** *read-prior:* on invocation, scan the index — for a root run, find prior concept-target depth runs; for a re-run, find the run's own prior output. *integrate:* for each enumerated concept-identity, match it (via individuation) against the index; if a prior depth run exists, attach a compact **depth-signal** to that identity's route; for a self-re-run, reconcile against the prior map (idempotency). *persist:* save this run's output and register it in the index so future runs can find it.

This is routeman's read-prior / recalibrate / add-new pattern, **generalized** (from a per-folder same-map state to a cross-target index) and **stripped** of the loop-control parts.

**The user's trace, worked:** *root #1* lists the project's identities (index empty of depth → a plain breadth map) and registers itself; *target-A* drills A (manifestations + divergences) and registers "A drilled, unresolved divergence"; *target-B* drills B and registers "B drilled, clean"; *root #2* lists the identities, reads the index, and attaches depth-signals to A's and B's routes — "A: drilled; unresolved README-vs-implementation divergence → epistemic route available"; "B: drilled; clean." The result is a *smarter* breadth map than root #1 — the *same* identities, *enriched* with depth knowledge, still compact. And it is idempotent at the fixpoint: had A and B not run, root #2 would equal root #1. This is precisely the behavior the user described.

### The two governing principles, and the one boundary guard

Two principles can be fixed now, ahead of building the mechanism:
- **Idempotency-at-fixpoint** — runs on unchanged input converge; reading prior runs refines and accelerates but never causes drift. This is what makes a stateful, cross-run-reading discipline safe rather than chaotic.
- **Enrich-not-dump** — a run that reads other runs attaches compact depth-*signals* to identity-level routes; it never dumps a concept's manifestations into a breadth map. This is what lets enrichment coexist with the breadth run's compactness (the breadth map stays one-route-per-identity; it just gets smarter about which identities have depth and what that depth found — like a wiki index page that shows which topics have detailed sub-pages, with a one-line summary, not the full sub-page).

And one boundary guard is load-bearing: the index must stay **within-concept**. Each identity points to *its own* depth run and carries signals about *itself*. The index must never grow into a graph of relations *between* concepts ("A depends on B") — routelister's identity explicitly excludes that inter-concept dependency graph. The cross-run model is a lookup table keyed by identity, not a relationship graph; keeping it so is what keeps the cross-run behavior inside routelister's identity.

### What should be handled next (the dependency-ordered roadmap)

The five questions resolve into a clear order of remaining work, gated by dependencies:

1. **Identity-individuation** (process) — *the linchpin, and the highest-leverage next inquiry.* How routelister decides two artifacts are the same concept vs different. It gates the concept-listing mechanism (OT1) and the cross-run matching (OT5). Routelister's *cumulative* value — the whole point of OT5 — is unlocked by it.
2. **Enumeration & breadth-scoping** (process) — how routelister sweeps a territory to surface identities, and when a root run is "done" (overload-avoidance). Builds on individuation.
3. **The output-artifact schema** (structural) — the route record (the grain × kind × engagement-type signature as fields) + the saved-file format, re-deriving routeman's schema through the loop-bound test. Answers OT2's "form."
4. **The cross-run memory model** (process + structural) — the index + read-prior/integrate/persist, with the discovery/storage mechanism, governed by idempotency-at-fixpoint + enrich-not-dump + the within-concept guard. This is where OT4 and OT5 live. It depends on (1) and (3), which is why the user's headline behavior is the capstone, not the next step.

A note on routeman: its re-run machinery is a *same-map, REVISIT-built partial template*. Re-derive it (generalize to a cross-target index; strip the loop-control parts) rather than carrying it — the same per-component loop-bound discipline a sibling finding established for every piece of routeman machinery routelister carries.

## Inherited Commitments Re-test

This inquiry consumes the routelister chain + routeman's re-invocation machinery; per CONCLUDE each inherited commitment is re-tested.

- **Commitment:** routelister's two traversal axes (project-space breadth / concept-space depth); the breadth run stays compact; **identity-individuation is the deferred open component.**
  - **Source:** `devdocs/inquiries/2026-05-29_11-43__routelister_concept_ontology_traversal/finding.md`
  - **Re-test status:** **RE-TESTED → CONFIRMED + ELEVATED.**
  - **Evidence:** the two axes answer OT3 (output differs by grain); the compactness commitment becomes the *enrich-not-dump* guard; and individuation is elevated from "an open component" to the **linchpin** that gates the concept-listing HOW (OT1) and the cross-run matching (OT5) — i.e., the gate on routelister's cumulative value.

- **Commitment:** the consolidated definition; identity-individuation = the one open component.
  - **Source:** `devdocs/inquiries/2026-05-29_12-44__routelister_definition_consolidated_rerun/finding.md`
  - **Re-test status:** **RE-TESTED → individuation still open, now sequenced #1.**
  - **Evidence:** the handle-next DAG places individuation first; the cross-run model cannot be built without it.

- **Commitment:** the route-type (grain × kind × engagement-type); the **per-component loop-bound test** for carried machinery; the NOT-list excludes inter-concept relational/dependency graphs.
  - **Source:** `devdocs/inquiries/2026-05-29_18-17__routelister_route_type_schema_reconciliation/finding.md`
  - **Re-test status:** **RE-TESTED → applied twice.**
  - **Evidence:** the loop-bound test shows routeman's re-invocation machinery (REVISIT-built) doesn't transfer wholesale — re-derive it; and the NOT-list is the **within-concept boundary guard** for the cross-run index (identity→own-depth, never inter-concept edges).

- **Commitment:** the root run = project-space breadth → concept-identities as routes; Shape-H (`/comprehend → routelister`) is optional depth-enrichment.
  - **Source:** `devdocs/inquiries/2026-05-29_14-58__routelister_project_root_operation_meaning/finding.md`
  - **Re-test status:** **RE-TESTED → CONFIRMED; the cross-run model is its cross-run analog.**
  - **Evidence:** OT2's root-run output is exactly this (clear in kind); the cross-run model is the cross-run version of Shape-H's depth-enrichment (a prior depth *run* enriches a future breadth route, vs inline).

- **Commitment:** routeman's re-invocation (§3.5), idempotency (§3.6), and `_route.md` invocation-state file (§5.8).
  - **Source:** `cognitive_harness/routeman/references/routeman.md`
  - **Re-test status:** **RE-TESTED → a same-map, REVISIT-built partial template; re-derived, not carried.**
  - **Evidence:** routeman's model is per-folder same-map re-invocation, not the cross-target aggregation OT5 needs; its mechanism uses REVISIT (loop-control, doesn't transfer). Re-derived: generalize to a cross-target index, strip the loop-control, and extend within-invocation idempotency to idempotency-at-fixpoint across invocations.

## Next Actions

### MUST

- **What:** open the **identity-individuation** inquiry — how routelister decides two artifacts are the same concept-identity vs different concepts.
  - **Who:** the user / a process `/MVLw`.
  - **Gate:** condition-bound — it is the #1 prerequisite; do it before the cross-run model and before the concept-listing mechanism is finalized.
  - **Why:** it is the linchpin gating OT1's HOW and OT5's matching, and it unlocks routelister's cumulative value (depth feeding breadth). The single highest-leverage next step.

- **What:** when the cross-run behavior is specified, encode the two governing principles (**idempotency-at-fixpoint**, **enrich-not-dump**) and the **within-concept index guard** (identity→own-depth + within-identity signals only; never inter-concept edges).
  - **Who:** the cross-run-model design pass.
  - **Gate:** condition-bound — when the cross-run model is authored (after individuation + the output-schema).
  - **Why:** the principles make the stateful model safe (converge, don't drift; enrich, don't overload); the guard keeps it inside routelister's identity (a lookup index, not a forbidden inter-concept graph).

### COULD

- **What:** author the **output-artifact schema** (route record + saved-file format), re-deriving routeman's schema through the loop-bound test.
  - **Who:** the structural spec pass.
  - **Gate:** condition-bound — alongside the structural spec; before the cross-run model (which reads/writes this artifact).
  - **Why:** answers OT2's "form"; the cross-run model needs a defined artifact to read and register.
  - **Depends-on:** MUST item "identity-individuation" is not strictly required for the schema, but the cross-run model that consumes the schema is — so schema can proceed in parallel with individuation.

- **What:** define the **enumeration & breadth-scoping** mechanism (how a root run sweeps a territory; when it is "done").
  - **Who:** the process spec pass.
  - **Gate:** condition-bound — with/after individuation.
  - **Why:** completes OT1's "how"; bounds the breadth run against overload.

### DEFERRED

- **What:** design the **cross-run memory model** itself (the index + read-prior/integrate/persist + the discovery/storage mechanism) — the capstone that delivers the user's OT5 behavior.
  - **Gate:** condition-bound — after identity-individuation (MUST) and the output-schema (COULD) are settled; its acceptance test is the user's root → A → B → root trace.
  - **Why (if revived):** it is what makes routelister cumulative; it is deferred only because it is gated on its prerequisites, not because it is low-value (it is high-value).

## Reasoning

The answers were reached by stating each verdict and the cross-run design as candidates and testing the strongest objections:

- **"OT5 is basically defined — routeman has re-invocation + a state file."** Rejected. routeman's machinery is *same-map* re-invocation (one inquiry's evolving map), not the *cross-target aggregation* the user wants (a breadth run absorbing separate depth runs); and it is built on the REVISIT move, a loop-control type that doesn't transfer to a standalone routelister. So routeman is a partial template to re-derive, not a definition.

- **"The cross-run index is the forbidden inter-concept dependency graph."** This was the sharpest objection. Rejected with a guard: the index maps each identity to *its own* depth run and carries signals about *itself* — the within-concept containment routelister already permits — and must never encode relations *between* concepts. With that guard explicit, the model stays inside routelister's identity. (The guard is now a required part of the design.)

- **"This is over-engineering — make routelister stateless and re-enumerate each time."** Rejected as stated, but its pressure toward minimalism was kept. Statelessness forfeits the cumulative value (depth runs feeding breadth runs) and would regress below even routeman; but the model must be the *lightest* thing that composes the axes — a lookup index + three operations + two guards, not a database or a graph or a re-imported loop engine.

- **"Build OT5 first — it's what the user wants."** Rejected. The "integrate" step requires matching a concept across runs, which *is* identity-individuation; you cannot build the cross-run model on an undefined individuation. The dependency order is forced, not preferential.

- **"Saying OT5 is 'not defined' manufactures a gap."** Rejected. The user described the *requirement* clearly; a discipline behavior is *defined* when its *mechanism* is specified, and OT5's mechanism depends on individuation + a schema + a discovery mechanism, none authored. Naming that honestly produces a design and a roadmap, not make-work.

A note on method, since this inquiry designs routelister using the project's own concepts: every load-bearing judgment is anchored externally — in routeman's actual re-invocation sections, in routelister's NOT-list (the inter-concept-graph exclusion), in the breadth-compactness commitment, and in the project's stated navigation endgoal — and the verdict *gates* the work (individuation first) rather than inflating it, which is the guard against a self-serving design.

## Open Questions

### Blocked

- The cross-run memory model (OT5's mechanism) is blocked until identity-individuation is defined and the output-artifact schema is authored. Its acceptance test is fixed (the user's root → A → B → root trace), but it cannot be built before its prerequisites.

### Research Frontiers

- **Identity-individuation** — the linchpin mechanism (same-identity vs different-concept). Its own inquiry; routelister's cumulative value depends on it.
- **The discovery/storage mechanism** for the cross-run index (where routelister runs live; how a root run finds prior depth runs) — a runner-composition + storage question, surfaced here, to be settled with the cross-run model.

### Refinement Triggers

- If individuation proves undecidable in general, the cross-run model needs a fallback (e.g., operator-declared identities), which would feed back into both the concept-listing logic and the cross-run matching.
- If, in practice, a root run's depth-signals tempt the design toward recording how concepts relate (A→B), the within-concept guard has been breached and the index design re-opens (it must remain a per-identity lookup, not a relationship graph).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
okay what are things that should be handled next in terms of defining better for routelister?

some questions for you

does concept listing logic defined good enough?
is it clear what the output will be , if run without target as a root?
does output differes per root run or concept targeted  run ?
what happens if we run 2 times sequentually in root?
what happens if we run 1 time as a root, then 1 time with targeting concept A and one time with targeting concetp B and then again 1 tine as a root ? (let me tell you what should happen, if concept target runs exists and we run from root, root run should go find these concept targeted runs and read their routelister.md files , and this will expand it's knowledge so it can producse better results, but question is this behaviour is defined or not ?)
```

</details>
