---
status: active
model: claude-opus-4-8[1m]
effort: max
refines: devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md
---
# Finding: Routelister's Route-Typology Logic

## Changes from Prior

**Prior path:** devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md

Background, since the two discipline names matter throughout:

- **routeman** was an earlier "navigation" discipline — a thinking tool that, after a cycle of work, names the possible next moves. It drew those moves from a **fixed list of 16 movement-types** (DEEPEN, REFINE, WIDEN, TERMINATE, REVISIT, …) that it inherited, unchanged, from an even older spec (canonical "/navigation"). routeman is being replaced because its identity was tangled up with the loop it ran inside.
- **routelister** is the from-scratch replacement: a standalone, domain-agnostic discipline that looks at any body of material (a "territory") and lists the **concepts** in it as typed routes — directions you could take toward a goal. Its routes are not drawn from a fixed list; they are *perceived* in whatever territory it is given.
- **The prior finding** (dated 2026-05-24 01:30, on "route taxonomy categorization") took routeman's fixed 16-type list and **organized** it: it grouped the 16 into three named families (Progression / Re-orientation / Coordination) and tagged each type with six attributes (direction, intent, autonomy-readiness-tier, auto-class, scope, has-sub-actions). That is a *categorization of a fixed, closed list*.

**Revision trigger:** stronger framing — the project has since settled what routelister IS, and the user asked directly whether routelister should keep that prior categorization logic, refine it, or extend it.

**What's preserved:** two things, and only at the meta level. (1) The **shape** of the prior scheme — "one primary type-axis plus a few secondary attributes" — carries over as the shape of routelister's own route-typing. (2) The **method** — "surface the typing from what the discipline already implies; don't invent it" — carries over.

**What's changed:** everything else. The prior's specific content (the 16 types, the three families, the six attributes) does **not** transfer to routelister. All six attributes are tied to roles routelister does not have (being inside a loop, choosing which move to emit), so they have nothing to attach to.

**What's new:** routelister types its routes **at the moment it emits them** (not in a separate organizing pass over a finished list), along its **own** dimensions — derived from routelister's settled identity rather than from routeman's list.

**Migration:** routeman's categorization is not discarded or wrong. It is *recovered as a special case* — what routelister's general route-typing produces when the "territory" it is handed happens to be a fixed, frozen list (which is exactly routeman's situation). So nothing in the prior finding is lost; it becomes one instance of a more general logic.

## Question

From the inquiry's framing (`_branch.md`): re-examine the prior route-taxonomy-categorization finding and decide, **for routelister with the project's current understanding**, whether routelister should keep that logic or change it. Three options were kept separate:

1. **SAME** — does the prior logic transfer to routelister as-is? (Does routelister have, or inherit, a fixed list of route-types that a "primary-axis-plus-attributes" categorization would organize the same way?)
2. **REFINE** — or does the logic need adjusting: the meta-shape mostly holds, but the specific content (the axis and attributes) changes to routelister's own?
3. **EXTEND** — or does routelister need something the prior logic doesn't provide at all, because its routes are perceived from an open territory rather than drawn from a fixed inherited list — so "categorize a fixed list" is the wrong frame and a different route-typing logic is needed?

**Goal:** a clear SAME / REFINE / EXTEND verdict, with the precise content of any change, grounded in routelister's settled identity and an honest re-test of the prior finding (neither parroting it nor reflexively dismissing it). The verdict feeds routelister's eventual specification — specifically, how routelister types and organizes its routes.

## Finding Summary

- **The verdict is EXTEND, not SAME.** routelister should not keep the prior categorization logic. It generalizes route-typing beyond the narrow case that logic solved. (A "REFINE" reading was seriously tested and is correct only about the small part that carries over — it is the wrong headline for the change as a whole.)

- **Why not SAME: routelister has no fixed list to categorize.** The prior logic's whole job was to organize routeman's *fixed, closed, inherited* list of 16 move-types. routelister has no such list — it perceives concepts in an open territory and lists each as a route. The thing the prior logic operated on simply isn't there.

- **Why the prior content can't transfer: the six attributes encode roles routelister doesn't have.** Each of routeman's six attributes assumes routeman's situation — being inside a loop (direction, scope, intent), being governed by a meta-loop autonomy schedule (autonomy-readiness-tier), or *choosing which move to emit* (auto-class: auto-emit vs flag-a-human). routelister is not inside a loop and does not choose among routes — it lists them all. With those roles absent, the attributes have nothing to attach to, so they drop.

- **What routelister does instead: it types each route at the moment of emission, along its own dimensions.** Where routeman sorted a finished list in a separate pass, routelister characterizes each route *as it perceives and lists it* (this follows from what routelister is — a perceive-and-list discipline). Its dimensions are its own: **kind** — teleological (the route advances the goal) vs epistemic (the route sharpens the understanding the goal rests on); **grain** — project-space (one concept among many in the territory) vs concept-space (one variation of a single concept); and **abstractness is no bar** (abstract concepts still count as routes).

- **routeman's categorization is the special case — recovered, not wasted.** A fixed, pre-listed set of move-types is just a "territory" that happens to be frozen. So routeman's "categorize a fixed list" is what routelister's general route-typing produces when the territory it is handed is a frozen list. (This is the same shape as a sibling finding on routelister's input, where routeman's narrow "completed-cycle state" turned out to be one special case of routelister's general "territory.")

- **What genuinely carries over (the only continuity):** the prior's **shape** — a primary type-axis plus secondary attributes — is reusable as the shape of routelister's route-typing (kind as the primary axis; grain and abstractness as attributes). And the prior's **method** — derive the typing from what the discipline already implies, don't invent it — applies directly (routelister's dimensions are derived from already-settled findings, not coined here).

- **One distinction prevents a common confusion.** routelister's dimensions (kind, grain, abstractness) ARE a small fixed set — but they are a fixed set of *axes*, not a fixed set of *routes*. routeman's taxonomy fixed the *members* (the 16 types you pick from); routelister fixes only the *axes* along which its open, perceived routes are characterized. "Fixed axes" is not "fixed taxonomy."

## Finding

### Why this question came up

The project is rebuilding its navigation capability. The old discipline, routeman, had its identity entangled with the loop it ran inside, and the fix was to build a clean, standalone replacement, routelister, defined by what it intrinsically is. Before writing routelister's specification, the author is re-walking the old routeman inquiries one at a time and re-deciding each for routelister. This inquiry is that re-walk applied to one specific earlier result: the **route-taxonomy-categorization** finding, which had organized routeman's fixed 16-type list into families and attributes. The user's question was direct: should routelister keep that same logic, refine it, or extend it?

### The headline: EXTEND, not SAME, and not merely REFINE

The verdict is that routelister should **extend** — that is, generalize — the route-typing logic well beyond what the prior finding did. It should not keep it the same, and calling the change a mere "refinement" would understate it.

The reason "EXTEND" rather than "REFINE" is worth stating carefully, because a thoughtful objection pushes for "REFINE." That objection says: the prior finding's scheme is "a primary axis plus attributes," routelister keeps that shape and just swaps in its own axis and attributes, and swapping the contents of a preserved structure is a refinement. The objection is right about one thing — the *shape* is preserved — but wrong about what "the logic" refers to. The prior finding's logic was not just an output shape; it was a whole operation: *take a fixed inherited list of types, surface the grouping already implicit in it, name the families, attach attributes.* For routelister, the premise of that operation (a fixed list exists), the object it works on (a closed list becomes an open territory), the moment the typing happens (a separate organizing pass becomes typing-at-emission), and all of its specific content (every one of the six attributes) change. When the premise, the object, the operation, and one hundred percent of the content all change, and only the abstract shape and the method survive, that is a generalization of the logic — an extension — not a tweak within it. "Refine" correctly describes the small surviving part; it is the wrong word for the whole.

### Why routelister can't keep the logic the same

The prior logic's entire purpose was to **organize a fixed, closed, inherited list**. routeman did not invent its 16 move-types; it received them, unchanged, from the older canonical /navigation spec. The categorization then grouped those 16 into three families and tagged each with attributes. The premise underneath all of it is: *a fixed list of route-types exists, and our job is to organize it.*

routelister has no such list. It perceives concepts in an open territory — a project, a codebase, a body of writing, a passage of text — and lists each as a route. The routes are produced by perceiving what is actually in the territory; they are not selected from a standing enumeration. So the premise the prior logic rests on is simply absent for routelister. There is no fixed list to categorize. That alone rules out "SAME."

### Why the prior content can't transfer

It might seem that even without the fixed list, routelister could still reuse routeman's six attributes (direction, intent, autonomy-readiness-tier, auto-class, scope, has-sub-actions). It cannot, and the reason is structural: every one of those attributes encodes a role that routeman had and routelister does not.

*Direction* (forward / backward / sideways) and *scope* (within-thread / cross-cycle / cross-branch) are defined relative to a loop cycle — but routelister is not inside a loop. *Intent* (exploration / refinement / closure …) is the intent of a next-move-after-a-cycle — again a loop notion. *Autonomy-readiness-tier* comes from the meta-loop's autonomy schedule (when a move becomes safe to emit automatically) — routelister is not governed by that schedule. *Auto-class* records whether routeman should auto-emit a move or flag it for a human to choose — but routelister does not choose among routes at all; it lists them all without selecting. *Has-sub-actions* was specific to one routeman type (REVISIT).

So the attributes don't merely need re-tuning for routelister — their *grounding* is gone. An attribute that answers "should this move be auto-emitted or sent to a human?" has nothing to say in a discipline that emits every route and selects none. The content drops because the roles it describes are absent.

A tempting near-miss is worth naming: routeman's *intent* attribute (exploration, refinement, closure) looks a little like routelister's notion of a route's *kind*. But the resemblance is only in the words. routeman's *intent* is the aim of a loop-move; routelister's *kind* is a route's relationship to the goal, with no loop involved. They share vocabulary, not structure, so even the closest attribute does not actually carry over — routelister's kind is re-derived on a different, non-loop footing.

### What routelister does instead

routelister types each route **at the moment it emits it**, not in a separate organizing pass afterward. This follows directly from what routelister is: a discipline that perceives a concept and lists it as a route in one act. There is no finished inventory sitting around to be sorted later — the route does not exist until it is perceived-and-emitted, and it carries its type as it comes.

The dimensions it types along are its own, and each is inherited from an already-settled piece of the routelister design (so they are derived, not invented here):

- **Kind** — is the route *teleological* (it advances the goal) or *epistemic* (it sharpens the understanding the goal rests on)? This distinction is the core of the earlier concept-definition finding (dated 2026-05-29 09:53).
- **Grain** — is the route a *project-space* route (one concept among many across the whole territory) or a *concept-space* route (one variation or divergence of a single concept)? This is routelister's two-movement structure from the ontology finding (dated 2026-05-29 11:43).
- **Abstractness is no bar** — an abstract concept can still be a route; abstractness does not disqualify it.

### routeman's categorization is the special case

The relationship between the two disciplines' route-typing is not "unrelated, replace one with the other." It is general-and-special. A fixed, pre-listed set of move-types is simply a *frozen territory*. If you hand routelister's general operation — "perceive the concepts in this territory and type each route as you list it" — a territory that happens to be "the 16 canonical move-types as a frozen list," you get exactly routeman's situation: a fixed set of route-types to characterize. routeman's categorization is what the general logic produces in that one special case.

This is the same shape found in a sibling re-walk finding on routelister's input contract (dated 2026-05-29 16:41), where routeman's narrow "completed-cycle state" turned out to be one special case of routelister's general "territory." Route-typing generalizes the same way the input did. The practical effect is reassuring: routeman's categorization work is recovered, not thrown away — it is the frozen-list instance of routelister's broader route-typing.

### What genuinely carries over

Two things survive the move from routeman to routelister, and only two — both at the meta level:

- **The shape.** The prior scheme's form — "a primary type-axis plus a few secondary attributes" — is reusable as the shape of routelister's route-typing: kind is the primary axis, with grain and abstractness as attributes. The form transfers even though none of routeman's specific content does.
- **The method.** The prior finding's discipline of *surfacing* the categorization from what already exists, rather than imposing one, applies directly. routelister's dimensions are derived from already-settled findings (the concept-definition finding for kind; the ontology finding for grain), exactly as the prior finding derived routeman's families from routeman's own implicit structure.

Crediting these two survivors is what makes the verdict "extend *with continuity*" rather than a clean break. routelister is not starting its route-typing from nothing; it is generalizing a logic whose shape and method it keeps.

### One distinction that prevents a confusion

It is easy to object that routelister *does* have a fixed taxonomy after all — kind, grain, and abstractness are a small, closed, enumerable set. The distinction that resolves this: routelister's fixed set is a set of **axes** (the dimensions a route is characterized along), not a set of **routes** (the things being characterized). routeman's taxonomy fixed the *members* — the 16 types were the very things you picked from. routelister fixes only the *axes*; its routes (the members) remain open and territory-derived. "Has fixed axes" is not "has a fixed taxonomy of routes," and conflating the two is what would wrongly drag routelister back toward the prior logic.

## Inherited Commitments Re-test

This inquiry rolled up several prior outputs (it declared a Synthesis Trigger), so each inherited commitment is re-tested below rather than absorbed — and, given the verdict, each is checked in *both* directions: not parroted, but also not reflexively discarded.

- **Commitment:** the hybrid categorization shape — one primary type-axis plus secondary attributes.
  - **Source:** devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md
  - **Re-test status:** RE-TESTED — SURVIVES.
  - **Evidence:** carries over as the shape of routelister's route-typing (kind as the primary axis; grain and abstractness as attributes). The shape is content-independent, so it transfers even though routeman's specific axis and attributes do not.

- **Commitment:** the method of *surfacing* the categorization from existing implicit structure, not inventing it (derived-from-priors, not a free choice).
  - **Source:** devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md
  - **Re-test status:** RE-TESTED — SURVIVES + APPLIES.
  - **Evidence:** routelister's dimensions are derived from already-settled findings — kind from the concept-definition finding (09-53), grain from the ontology finding (11-43) — exactly as the prior finding derived routeman's families from routeman's own implicit structure.

- **Commitment:** the specific content — the 16 move-types, the three Movement Families (Progression / Re-orientation / Coordination), and the six attributes (direction, intent, autonomy-readiness-tier, auto-class, scope, has-sub-actions).
  - **Source:** devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md
  - **Re-test status:** RE-TESTED — DOES NOT TRANSFER.
  - **Evidence:** re-tested attribute by attribute, not dismissed wholesale. Each attribute encodes a loop, meta-loop, or selection role that routelister does not have (it is not loop-bound and does not choose among routes). The closest near-miss, *intent*, shares vocabulary with routelister's *kind* but not structure. So the content drops.

- **Commitment:** the 16-type set is preserved as a fixed, closed list (inherited verbatim from canonical /navigation).
  - **Source:** devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md + cognitive_harness/navigation/references/navigation.md
  - **Re-test status:** RE-TESTED — REPLACED (for routelister) by an open, territory-derived route-set.
  - **Evidence:** the closed list is recovered as the frozen-territory special case of routelister's general route-typing; it still stands for routeman, but routelister's routes are open.

- **Commitment:** routelister's settled identity — intrinsic, domain-agnostic, perceive-and-list (not generate-from-nothing), not loop-bound, lists routes without selecting among them.
  - **Source:** devdocs/inquiries/2026-05-29_12-44__routelister_definition_consolidated_rerun/finding.md
  - **Re-test status:** RE-TESTED — CONSISTENT.
  - **Evidence:** typing-at-emission follows from perceive-and-list; the not-loop-bound and no-selection parts of the identity are exactly what strip the six routeman attributes of their grounding.

- **Commitment:** the route kinds (teleological vs epistemic) and the two movements / grain (project-space vs concept-space).
  - **Source:** devdocs/inquiries/2026-05-29_09-53__routeman_concept_definition_refinement/finding.md + devdocs/inquiries/2026-05-29_11-43__routelister_concept_ontology_traversal/finding.md
  - **Re-test status:** RE-TESTED — these ARE routelister's typing dimensions.
  - **Evidence:** kind and grain are precisely the dimensions routelister types its routes along; they replace routeman's loop-grounded attributes on a non-loop footing.

- **Commitment:** the general/special generalization shape (routeman's narrow case is one instance of routelister's general operation).
  - **Source:** devdocs/inquiries/2026-05-29_16-41__routelister_input_contract/finding.md
  - **Re-test status:** RE-TESTED — same shape applies here.
  - **Evidence:** just as routeman's "completed-cycle state" was a special case of routelister's "territory," routeman's "categorize a fixed list" is a special case of routelister's "type open, territory-derived routes."

## Next Actions

### MUST

- **What:** when routelister's specification is authored, write its route-typing as a **per-route type-signature assigned at emission** — kind (teleological / epistemic) as the primary axis, with grain (project-space / concept-space) and abstractness as attributes — and explicitly state that routelister has *fixed axes but an open route-set* (not a fixed taxonomy of routes).
  - **Who:** the routelister specification-authoring pass (the deferred structural step this re-walk is preparing for).
  - **Gate:** condition-bound — when the routelister spec is written (after the prior-inquiry re-walk completes).
  - **Why:** it gives the spec a settled route-typing grounded in routelister's identity, and pre-empts the "doesn't routelister just reuse routeman's 16-type categorization?" confusion.

### COULD

- **What:** state explicitly in the spec that routeman's Movement-Family categorization is recovered as the special case "territory = a frozen list of move-types," so the continuity from routeman is visible to anyone migrating.
  - **Who:** the routelister specification-authoring pass.
  - **Gate:** condition-bound — when the spec's route-typing section is drafted.
  - **Why:** makes the generalization legible and reassures that routeman's categorization work is not discarded.
  - **Depends-on:** MUST item "write the route-typing section." This COULD is GATED — do not act until the MUST resolves.

### DEFERRED

- **What:** design the **runtime route-classification mechanism** — how routelister, at emission, computes each route's kind and grain.
  - **Gate:** condition-bound — taken up in the process-level routelister design pass (after the meaning-level re-walk and the structural spec).
  - **Why (if revived):** it completes the operational picture; this finding fixes the *dimensions* a route is typed along but intentionally leaves *how the type is computed* to that later pass (parallel to the deferred axis-selection mechanism in the input-contract finding).

## Reasoning

The verdict (EXTEND with continuity) was reached by stating it as a candidate, generating sharp counter-arguments ("foils") against each part, and testing whether each survived. The full field considered:

- **"Keep the prior logic the same (SAME)."** Rejected. The prior logic categorizes a fixed, closed, inherited list; routelister has no such list. The premise is absent, so the logic cannot apply unchanged.

- **"This is a refinement, not an extension (REFINE as the headline)."** This was the strongest objection and is partly right — the shape and method do survive, which is genuinely a refinement-level continuity. It fails as the *headline* because "the logic" of the prior finding is the whole operation (premise, object, organizing pass, content), and all of that changes; only the meta-shape and method survive. A change of that magnitude is a generalization, so REFINE was demoted to describing the surviving part, and EXTEND is the headline.

- **"routelister has a fixed taxonomy after all — kind × grain × abstractness."** Refined, not accepted. That is a fixed set of *axes*, not a fixed set of *routes*. routeman's taxonomy fixed the members; routelister fixes only the axes, while its routes stay open. The distinction is now carried in the verdict.

- **"At least one attribute transfers (e.g., intent ≈ kind)."** Killed. *Intent* is a loop-move's aim; *kind* is a route's relation to the goal, with no loop. The resemblance is lexical, not structural, so even the closest attribute does not transfer.

- **"routelister types in a post-hoc pass, like routeman."** Killed. A separate organizing pass presupposes a standing list to organize; routelister has none — its routes are typed as they are perceived and emitted.

- **"routeman and routelister route-typing are simply unrelated."** Killed. Feeding routelister's general operation a frozen-list territory reproduces routeman's categorization exactly — a genuine general/special relationship, the same one a sibling finding established for routelister's input.

- **"Nothing transfers at all."** Killed as an over-correction. The shape and the method genuinely carry; crediting them is what makes the verdict honest about the continuity rather than performing a clean break.

A note on method, since this inquiry evaluated the project's own prior work: the judgments were checked against *external* reference points rather than the project's own vocabulary — the six attributes' loop and selection groundings are verifiable against the meta-loop autonomy ladder and the canonical /navigation spec; the general/special relationship rests on a logical containment (a frozen list is one kind of territory); and the parallel to the input-contract finding is an independently-reasoned prior. This guards against a self-evaluation that merely ratifies itself.

## Open Questions

### Blocked

- The exact spec wording of routelister's route-typing section cannot be finalized until the specification itself is authored. This finding fixes the *content* of the route-typing logic; the *spec text* is a downstream structural task (see the MUST item).

### Refinement Triggers

- If, when the spec is authored, routelister's two movements turn out to need a typing dimension beyond kind / grain / abstractness, the dimension set re-opens. Observable trigger: a route appears whose meaningful type is not captured by those three axes.
- If a future re-run or implementation finds a routeman attribute that *does* have a genuine (non-loop) grounding in routelister, the content-drop verdict re-opens for that attribute. Observable trigger: an attribute from the prior six is shown to attach to a real routelister role.

### Research Frontiers

- Whether the "type-at-emission along fixed axes, over an open member-set" pattern generalizes to other disciplines' typing needs (the prior finding raised a similar generalization frontier for its hybrid categorization). No known path yet; revisit if a second discipline needs analogous route/output typing.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
check this devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization and finding.md there

and tell me routelister still should same logic? or we need to refine or extend it?
```

</details>
