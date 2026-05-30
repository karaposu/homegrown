---
status: active
model: claude-opus-4-8[1m]
effort: max
refines: devdocs/inquiries/2026-05-29_12-44__routelister_definition_consolidated_rerun/finding.md
---
# Finding: What a Typed Routelister Route Is — Reconciling Movement-Type vs Kind/Grain

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-29_12-44__routelister_definition_consolidated_rerun/finding.md` (the consolidated, canonical routelister definition).

Background, since several names recur:
- **routeman** — the earlier "navigation" discipline (now being replaced) that, after a cognitive cycle, lists the possible next moves, drawing them from a fixed **16-type movement taxonomy** (DEEPEN, REFINE, WIDEN, TERMINATE, REVISIT, …).
- **routelister** — its standalone replacement: looks at any body of material ("a territory") and lists the **concepts** in it as **typed prescriptive routes** (directions toward a goal). It is *not* bound to a cognitive loop.
- **The loop** — the project's five-step thinking cycle (Surfacing → Sensemaking → Decomposition → Innovation → Critique). routeman lived inside it; routelister deliberately does not.

**Revision trigger:** an audit of the routelister chain found that **how a route is typed** was specified two incompatible ways. `12-44` (and `10-25`) defined a route as *Direction + Movement-Type + reachability + guidance* and said to **carry routeman's 16-type movement taxonomy** as "mature machinery." But `17-08` (route typology) concluded routelister types routes along **its own axes — kind (teleological/epistemic) × grain (project-space/concept-space)** — and that routeman's 16 types "don't transfer." This finding reconciles the two.

**What's preserved (from `12-44`):** the whole consolidated definition stands — intrinsic identity, concept-identity unit, the two traversal axes, enumerate-not-execute, the topology framing. Only the *route-type element* is sharpened.

**What's changed:** `12-44`'s coarse "route = Direction + Movement-Type + …" is sharpened into a precise **type-signature**: a route's type is `Route(grain, kind, engagement-type)` — and the "Movement-Type" it carries is **not the full 16**; it is a 9-verb subset.

**What's new:** the *reconciliation* itself — the demonstration that the apparent contradiction is a **conflation**, the **partition** of routeman's 16 types into 9 that transfer and 7 that don't (by a stated test), the **axis structure** (grain ⟂ kind → engagement-type), and a **generalized correction** to the "carry routeman's machinery" rule.

**Corrections to other priors (detailed in the re-test section):** this finding rules `17-08`'s claim "the 16 types don't transfer" an **over-reach** (9 of them do), and rules `10-25`'s "routeman's machinery is mature — carry it" **too coarse** (parts of the machinery carry the same loop-relativity defect as the identity).

## Question

The one place the routelister chain was internally self-contradictory: **what is a routelister route's type, concretely?** Does a route carry a **Movement-Type** from routeman's 16-type taxonomy (per `12-44`/`10-25`), or is it typed by **kind/grain** (per `17-08`), or both — and if both, how do they relate? The inquiry had to: pinpoint whether this is a real contradiction or a conflation (OT1); say what a route's type actually is (OT2); determine which of the 16 types transfer and by what test (OT3); resolve how movement-type, kind, and grain relate (OT4); and decide what this implies for the "carry routeman's machinery" rule (OT5).

**Goal:** a single, internally-consistent answer that *dissolves* the contradiction (shows where each prior was right and where it erred), grounded in routeman's actual taxonomy and route schema — because the structural spec cannot be authored until "what is a typed route" is settled.

## Finding Summary

- **It is a conflation, not a contradiction — and it dissolves cleanly.** The two priors made true claims about *different objects* and then each over-generalized. `17-08` examined routeman's **categorization** (the way the 16 types are grouped into three "Movement Families," organized by the type's *loop-posture*) and rightly found that grouping doesn't transfer — then over-reached to "the 16 types don't transfer." `12-44`/`10-25` rightly kept a **movement-type element** in the route record — then over-stated it as "carry all 16." Neither actually denied what the other asserted; the conflict was two over-reaches across a gap nobody had distinguished.

- **A route's type has three axes: `Route(grain, kind, engagement-type)`.** **grain** (project-space vs concept-space) is the route's *scale* — one concept among many, or one manifestation of a single concept; it is independent of the others. **kind** (teleological vs epistemic) is the route's *value* — does engaging it advance the goal, or sharpen the understanding the goal rests on. **engagement-type** is the *how* — the specific verb (deepen, refine, test, …), and it is **nested under kind** (each kind has its own verb-set), not a competing axis.

- **Only 9 of routeman's 16 types transfer — by a clean test.** A movement-type transfers to a standalone routelister **iff its verb takes a concept as its object** (you can "refine / deepen / test / diagnose / reconcile *concept X*"). The other 7 act on the *inquiry-process* itself ("terminate *the line*," "re-run *the operation*," "merge *branches*," "revisit *a prior verdict*," "unblock *a gate*," "widen *scope*," "different approach to *the question*") — and a standalone routelister has no inquiry-process, so they fall away. This is a grammar test (does the verb take a concept as a direct object?), not a matter of taste.
  - **Transfer (the engagement-types, 9):** DEEPEN, DEVELOP, PURSUE-SEED, INVESTIGATE-FRONTIER (teleological); REFINE, REFRAME, DIAGNOSE, TEST, CONSOLIDATE (epistemic).
  - **Don't transfer (loop-control, 7):** TERMINATE, RE-RUN-DEEPER, WIDEN, DIFFERENT-APPROACH, REVISIT, UNBLOCK, MERGE.

- **The transfer-cut crosses routeman's three families — which is the proof that the priors conflated two things.** The families group by *loop-posture* (advancing / adjusting / coordinating the inquiry); the transfer-test groups by *concept-vs-process*. They are different cuts of the same 16, so "the family-categorization doesn't transfer" and "9 individual types do transfer" are both true and not in conflict.

- **Abstractness is not a type axis — it is an admission rule.** `17-08` listed abstractness as a typing dimension; it is really the anti-skip rule from `09-53` ("don't skip a concept for being too abstract"), which governs *whether* a concept is enumerated, not *how* a route is typed. (Minor correction.)

- **The generalized lesson: "carry routeman's mature machinery" is too coarse — loop-bound-test each component.** The defect the project found in routeman was *loop-relativity*. It turns out that defect lives not only in routeman's identity but in parts of its **machinery** too: ~7 of the 16 types, and several route-record fields (the reachability values done/stale/superseded, Blocked-By, Unlocks) all presuppose the cognitive cycle. So "carry the machinery wholesale" must become **"carry each machinery component after a loop-bound test; re-derive or drop the loop-bound parts."** This is the standing procedure for the parts of routeman still to be carried (reachability, guidance, autonomy fields).

- **Status: the meaning is settled; specific structural choices remain.** What a typed route IS (the three axes + the 9-verb partition) is settled and unblocks the spec. Three items are explicitly deferred to the structural-authoring pass: naming the 9-verb axis ("engagement-type" recommended, to avoid reusing "movement-type" ambiguously); whether the epistemic verb-set needs a native manifestation-divergence verb (RECONCILE / CHOOSE-BETWEEN) beyond CONSOLIDATE; and re-deriving the loop-relative route-record fields.

## Finding

### Why this came up

An audit of the routelister design chain (definition, ontology, input contract, route typology) found one genuine self-contradiction: the chain specified **how a route is typed** two incompatible ways. That matters because you cannot author the discipline's specification — which must say what a "route record" contains — until "what is a typed route" is settled. So this inquiry is the reconciliation, run deliberately deep, and grounded in routeman's *actual* 16-type taxonomy (its §2.2) and route schema (its §5.4) rather than in any prior finding's recollection of them.

### It is a conflation, not a contradiction

The first and most important result is that the two priors do not actually contradict each other — they talk past each other about different objects.

`17-08`'s real subject was routeman's **categorization** — a separate earlier piece of work (`24 01-30`) that grouped the 16 types into three "Movement Families" and tagged them with attributes, all organized around each type's *posture toward the cognitive cycle* (is it advancing the inquiry, adjusting it, or coordinating across its branches?). `17-08` correctly found that this *loop-posture grouping* does not transfer to a discipline that has no loop. But it then generalized that result to "the 16 types themselves don't transfer" — which is a different and stronger claim.

`12-44` and `10-25`, meanwhile, kept a **Movement-Type field** in the route record and said to carry routeman's taxonomy as "mature machinery." That claim — *a route has a movement-type element* — is true and survives. But they over-stated it as "carry all 16," without noticing that some of the 16 are loop-bound.

So there is no single proposition that one finding asserts and the other denies. "The loop-posture grouping doesn't transfer" and "a route has a movement-type element" are both true. The *appearance* of contradiction is two over-reaches — `17-08`'s "...therefore none of the types transfer" and `12-44`'s "...so carry all of them" — sitting on either side of a distinction nobody had drawn: the distinction between *the grouping* and *the individual types*.

### What a route's type actually is

A routelister route's type is a signature on three axes — `Route(grain, kind, engagement-type)`:

- **grain** — *project-space* (this route is one concept-identity among many across the territory) or *concept-space* (this route is one manifestation of a single concept). This is the route's resolution, and it is independent of the other two axes (a route has a grain whatever its value or verb).
- **kind** — *teleological* (engaging the concept advances the goal directly) or *epistemic* (engaging it sharpens the understanding the goal rests on — including clarifying a fuzzy goal). This is the route's value, established back in `09-53`.
- **engagement-type** — the specific verb describing *how* to engage the concept (deepen it, refine it, test it…). This is **nested under kind**, not parallel to it: each kind has its own verb-set. So engagement-type is a refinement *within* a kind, carrying information kind alone doesn't (which downstream discipline a route would invoke if taken).

Concretely, the verb-sets are:
- **teleological →** DEEPEN, DEVELOP, PURSUE-SEED, INVESTIGATE-FRONTIER.
- **epistemic →** REFINE, REFRAME, DIAGNOSE, TEST, CONSOLIDATE.

These nine verbs are the **transferable subset of routeman's 16 types** (below). And — importantly — this whole structure is *fixed axes over an open set of routes*: the axes (grain, kind, the 9-verb vocabulary) are a small fixed scheme, but the routes themselves are open and drawn fresh from each territory. That is exactly the "fixed axes, open members" frame `17-08` itself established; the reconciliation simply recognizes that the engagement-verbs are a *third* fixed axis, alongside the two `17-08` named.

### Which of the 16 types transfer, and the test that decides it

routeman's 16 types are *heterogeneous*. Reading their actual definitions, each type's verb has an **object** — and the object is one of two very different things:

- a **concept or artifact in the territory** ("REFINE *an existing artifact or claim*"; "DEVELOP *an idea*"; "TEST *a claim or artifact*"); or
- the **inquiry-process itself** ("TERMINATE *the current line*"; "RE-RUN *the prior cognitive operation*"; "MERGE *parallel branches*"; "REVISIT *a prior cycle's verdict*").

The test for transfer is therefore a grammar test: **does the verb take a concept as its direct object?** If yes, it transfers (a standalone routelister can apply it to a concept in any territory). If the verb's object is the inquiry-process, it does not transfer — a standalone routelister has no cycle, no threads, no branches, no prior-verdicts for it to act on.

- **Transfer (9 — concept-engagement):** DEEPEN, DEVELOP, PURSUE-SEED, INVESTIGATE-FRONTIER, REFINE, REFRAME, DIAGNOSE, TEST, CONSOLIDATE. (Three — REFINE, DEVELOP, TEST — take a concept object cleanly. The other six are re-derived: their definitions use loop-flavored *example phrasing* like "the current line," but their verb still takes a *concept* as object — you can deepen, diagnose, or consolidate a concept. The loop-flavored words are the example source, not the grammatical object.)
- **Don't transfer (7 — loop-control):** TERMINATE, RE-RUN-DEEPER, WIDEN, DIFFERENT-APPROACH, REVISIT, UNBLOCK, MERGE. (Each acts on the inquiry-process: you terminate a line, re-run an operation, widen scope, change method on the question, revisit a verdict, unblock a gate, merge branches. Substituting "concept X" produces nonsense — "merge concept X," "terminate concept X" — which is the test failing them.)

The honest residue: those six re-derived types are a *judgment* (does the verb's object generalize to a concept?), not a mechanical gate — but it is a judgment with a clear test and only four genuinely borderline cases, handled by the discipline's standing lean-to-inclusion.

The decisive structural fact: **this transfer-cut crosses routeman's three families.** The Progression family loses only TERMINATE (5 of 6 transfer); the Re-orientation family keeps only REFRAME and DIAGNOSE (2 of 5); the Coordination family keeps only TEST and CONSOLIDATE (2 of 5). Because the families are organized by loop-posture and the transfer-test is organized by concept-vs-process, the two cuts are different axes on the same 16 types. That is the proof that "the family-grouping doesn't transfer" (true) and "9 individual types transfer" (true) are not in conflict — exactly the conflation diagnosed above.

### Abstractness is an admission rule, not a type axis

`17-08` listed abstractness as a typing "dimension." It is better understood as the anti-skip rule from `09-53`: "do not skip a concept for being too abstract; the abstract ones are often the most load-bearing." That rule governs *whether a concept is enumerated at all* — an admission decision made before typing — not *how* an admitted route is typed. So it is removed from the type-signature and kept as an enumeration/admission rule. (A small correction, but it keeps the type-signature clean: three axes, not three-plus-a-flag.)

### The generalized lesson: loop-bound-test the machinery, don't carry it wholesale

`10-25` (following the original diagnosis) split routeman cleanly: its *identity* carried the loop-relativity defect (re-derive it), but its *machinery* was mature (carry it). This reconciliation shows that split is too coarse. The defect is *loop-relativity*, and loop-relativity contaminates parts of the machinery too: roughly seven of the sixteen movement-types, and several fields of the route record (the reachability values "done / stale / superseded," the "Blocked-By" field, the "Unlocks" field) all only make sense relative to a running cycle and its route-graph.

So "carry routeman's mature machinery" must become: **carry each machinery component after applying the loop-bound test — keep the concept-engagement parts, re-derive or drop the loop-bound parts.** This is not a one-off fix for the taxonomy; it is the standing procedure for every piece of routeman machinery routelister still has to carry (the reachability vocabulary, the guidance modes, the autonomy classification all await the same test). It is the most reusable result of this inquiry.

### What is settled, and what is not

What a typed route *is* — the three axes and the nine-verb partition — is settled at the meaning layer and unblocks the spec. Three items are explicitly left to the structural-authoring pass, so the spec author is not misled that the route record is fully designed: (1) the **name** for the 9-verb axis (recommended: "engagement-type," reserving "movement-type" for routeman's loop-laden 16, to avoid the ambiguity that helped cause this contradiction); (2) whether the epistemic verb-set needs a **native manifestation-divergence verb** (RECONCILE / CHOOSE-BETWEEN) richer than CONSOLIDATE, for the README-vs-implementation kind of route; (3) **re-deriving the loop-relative route-record fields** (reachability values, Blocked-By, Unlocks) per the loop-bound test.

## Inherited Commitments Re-test

This inquiry reconciles conflicting prior outputs; per CONCLUDE each inherited commitment is re-tested, not absorbed.

- **Commitment:** routelister types routes along kind (teleological/epistemic) × grain (project/concept-space) × abstractness; "routeman's 16 types are loop-moves that don't transfer"; "fixed axes over an open route-set."
  - **Source:** `devdocs/inquiries/2026-05-29_17-08__routelister_route_typology_logic/finding.md`
  - **Re-test status:** **SPLIT — kind/grain CONFIRMED; "16 don't transfer" CORRECTED (over-reach); "fixed axes / open members" CONFIRMED and EXTENDED.**
  - **Evidence:** kind and grain are two of the three axes. But 9 of the 16 types *do* transfer (the object-substitution test), as the third axis (engagement-type) — so "none transfer" is an over-reach, traceable to conflating the loop-posture *categorization* (which `17-08` examined and rightly rejected) with the *individual types*. The "fixed axes, open members" frame is confirmed and is precisely what accommodates the engagement-verbs as a third fixed axis — the frame `17-08` itself supplied would have absorbed the verbs.

- **Commitment:** a route = Direction + Movement-Type + reachability + guidance; carry routeman's machinery.
  - **Source:** `devdocs/inquiries/2026-05-29_12-44__routelister_definition_consolidated_rerun/finding.md`
  - **Re-test status:** **SPLIT — "a movement-type element exists" CONFIRMED; "carry [all 16]" CORRECTED.**
  - **Evidence:** the element is real (it is the engagement-type axis), but it is the 9-verb subset, renamed; the carry is per-component, not wholesale.

- **Commitment:** routeman's identity is the defect (re-derive); its machinery is mature (carry it).
  - **Source:** `devdocs/inquiries/2026-05-29_10-25__routelister_discipline_definition/finding.md`
  - **Re-test status:** **CORRECTED — too coarse.**
  - **Evidence:** loop-relativity (the actual defect) contaminates ≥2 machinery components (≥7 of the 16 types; the route-record's reachability/Blocked-By/Unlocks fields). The clean identity/machinery split mislocates the defect; the defect axis is loop-relativity wherever it appears, so the carry must be loop-bound-tested per component.

- **Commitment:** epistemic concepts are classified by the existing movement types REFINE / REFRAME / DIAGNOSE.
  - **Source:** `devdocs/inquiries/2026-05-29_09-53__routeman_concept_definition_refinement/finding.md`
  - **Re-test status:** **CONFIRMED and load-bearing.**
  - **Evidence:** this is why engagement-type must be a *typed* field (it is already in active use as a classifier), and it is the evidence that kind partitions the verbs (epistemic kind → the "sharpen" verbs).

- **Commitment:** manifestation-divergence (README-vs-implementation, deprecated-vs-active) is surfaced as an epistemic "reconcile" route.
  - **Source:** `devdocs/inquiries/2026-05-29_11-43__routelister_concept_ontology_traversal/finding.md`
  - **Re-test status:** **CONFIRMED — maps to CONSOLIDATE; raises a flag.**
  - **Evidence:** "reconcile" ≈ CONSOLIDATE (an epistemic engagement-type). Whether a more specific native verb is warranted is flagged as a structural-layer question (item N2 above).

- **Commitment:** routeman's actual 16-type taxonomy (§2.2) and per-route schema (§5.4).
  - **Source:** `cognitive_harness/routeman/references/routeman.md`
  - **Re-test status:** **RE-TESTED as ground truth.**
  - **Evidence:** the partition (object-substitution) and the machinery-contamination claim are read off the literal definitions and the literal route-record fields, not from memory — the anchor that keeps the reconciliation from being a self-confirming exercise on the priors' own vocabulary.

## Next Actions

### MUST

- **What:** when routelister's structural spec is authored, define a route's type as the three-axis signature — **grain** (project-space / concept-space), **kind** (teleological / epistemic), and **engagement-type** (the 9-verb concept-engagement subset, nested under kind) — and explicitly exclude the 7 loop-control types; keep abstractness as an admission rule, not a type field.
  - **Who:** the routelister structural-authoring pass.
  - **Gate:** condition-bound — when the spec's route-record section is written.
  - **Why:** this is the settled answer to "what is a typed route"; it unblocks the spec and removes the chain's one self-contradiction.

- **What:** apply the **loop-bound test per component** to every remaining piece of routeman machinery being carried (the reachability value-set, the guidance modes, the autonomy classification) — keep the concept-engagement parts, re-derive or drop the loop-bound parts.
  - **Who:** the structural-authoring pass.
  - **Gate:** condition-bound — when each routeman machinery component is carried into routelister's spec.
  - **Why:** the generalized lesson; without it, the same loop-relativity contamination found in the taxonomy will silently ride along in the other carried components.

### COULD

- **What:** name routelister's HOW-axis **"engagement-type,"** reserving "movement-type" for routeman's 16, so the multi-referent ambiguity that helped cause this contradiction cannot recur.
  - **Who:** the structural-authoring pass.
  - **Gate:** condition-bound — during the route-record naming.
  - **Why:** prevents a future reader from carrying all 16 because the term implied them.
  - **Depends-on:** MUST item "define the three-axis signature." This COULD is GATED — settle the axes first.

### DEFERRED

- **What:** decide whether the epistemic verb-set needs a native manifestation-divergence verb (RECONCILE / CHOOSE-BETWEEN) beyond CONSOLIDATE.
  - **Gate:** condition-bound — when the concept-space (depth) traversal's output is specified, where manifestation-divergence routes are emitted.
  - **Why (if revived):** CONSOLIDATE may be too generic for "the README disagrees with the implementation — reconcile or choose"; a dedicated verb may carry the routing information better.

## Reasoning

The verdict was reached by stating the reconciliation as a candidate, generating the strongest objections, and testing each:

- **"It is a genuine contradiction; pick a winner."** Rejected. No single proposition is asserted by one prior and denied by the other about the same object — `17-08`'s object was the loop-posture categorization, `12-44`'s was the existence of a movement-type element; both claims are true. The conflict was two over-reaches across an undistinguished gap.

- **"The 9/7 partition is cherry-picked."** This was the sharpest objection and it fails on the test's own terms. The test (does the verb take a *concept* as its direct object?) is the project's pre-existing loop-relativity diagnosis applied at the type level, plus an external grammar (transitivity) grounding — and it rejects the objection's own counter-examples: "re-run *concept X*" fails because re-run's object is the operation, not X; "widen *consideration of concept X*" fails because widen's object is scope, not X. The test excludes the loop-control types by grammar, not by preference; the borderline judgments are named, not hidden.

- **"This is motivated reasoning — 4.8 reconciling to make its own `17-08` right."** Rejected, and this was the load-bearing self-reference check. A face-saving reconciliation would *preserve* each prior's operative claim; this one *overturns* both — it rules `17-08`'s headline route-type claim ("the 16 don't transfer") an over-reach and `10-25`'s "carry the machinery" too coarse. Overturning this session's own prior on its load-bearing point, against the comfort of vindicating it, is the evidence the self-reference is guarded; and the partition rests on routeman's literal definitions plus external grammar, not on either prior's framing.

- **"It's really one axis, or three orthogonal axes, or movement-type is just prose."** Refined, not accepted whole. Kind and grain are two independent axes; engagement-type is *nested under kind* (each kind has its verb-set), and it is *typed* (not prose) because it is already used as a classifier and it carries routing information kind alone does not. So: two independent axes plus one nested, typed refinement — not over-engineered, none redundant.

- **"The machinery is uniformly mature; the taxonomy is a one-off exception."** Rejected — at least two distinct machinery components carry loop-relativity (the types and the route-record fields), so it is a pattern, which is what justifies the standing per-component test.

A note on method, since this inquiry reconciles the project's own prior findings: every load-bearing judgment is anchored outside the priors — in routeman's *literal* §2.2 definitions and §5.4 schema, and in an external grammar (verb transitivity) — and the reconciliation's willingness to rule both priors wrong on their operative claims is the structural guard against a self-confirming result.

## Open Questions

### Blocked

- The concrete route-record field schema (which fields, which enums, how the three axes are rendered) is blocked until the structural-authoring pass — this finding settles the *axes* (meaning), not the *record layout* (structure).

### Refinement Triggers

- If, when the spec is authored, one of the four re-derived borderline types (DEEPEN, PURSUE-SEED, INVESTIGATE-FRONTIER, or — most likely — CONSOLIDATE) proves not to apply cleanly to a real concept in a real territory, that type's transfer re-opens. Observable trigger: a routelister run where the type cannot be attached to any concept-route without reference to a cognitive cycle.
- If applying the per-component loop-bound test to the reachability value-set or guidance modes reveals a component that is *neither* cleanly loop-bound *nor* cleanly concept-relative, the binary loop-bound test needs a third category. Observable trigger: a machinery component that resists the keep/re-derive partition.

### Research Frontiers

- Whether the loop-bound test generalizes as a project-wide method for carrying machinery between any two disciplines (not just routeman → routelister). Flagged; out of scope here.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
u mentioned [the route's type-schema is specified two incompatible ways across the chain — 10-25/12-44 carry routeman's 16-type movement taxonomy; 17-08 types by kind/grain and says the 16 don't transfer; you cannot author the spec until "what is a typed route, concretely" is settled]

lets dive deep into this
```

</details>
