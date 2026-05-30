# Branch: Routelister Route-Type-Schema Reconciliation (movement-type vs kind/grain)

## Question

Reconcile the one place the routelister chain is internally self-contradictory: **what is a routelister route's TYPE, concretely?** Two prior findings disagree — `10-25` (definition keystone) and `12-44` (consolidated definition) define a route as *Direction + Movement-Type + reachability + guidance* and explicitly **carry routeman's closed 16-type movement taxonomy** (DEEPEN, REFINE, WIDEN, TERMINATE, REVISIT, …) as "mature machinery"; while `17-08` (route typology) concluded routelister types each route **at emission along its own axes — kind (teleological/epistemic) × grain (project-space/concept-space) × abstractness — and that routeman's 16 move-types are loop next-moves that "don't transfer"** (routelister has no fixed move-taxonomy). (Subject: routelister's route-type schema; action: **diagnose the contradiction + reconcile into one settled answer**; level: **discipline / meaning layer**; deliverable: a reconciled route-type definition with a per-commitment re-test of the conflicting priors.) Observation targets, preserved separately:

- **(OT1 — locus)** Is this a genuine contradiction, or a *conflation*? Pinpoint the exact locus: did `17-08` reject the **24 01-30 Movement-Family CATEGORIZATION** (organized by loop-posture) while `10-25`/`12-44` carried the **16 TYPES themselves** — i.e., two different cuts of the same taxonomy that were never distinguished?
- **(OT2 — the answer)** What IS a routelister route's type, concretely? Does a route carry a Movement-Type, a kind/grain signature, or **both**, and if both, **how do they relate** (compete / compose / nest)?
- **(OT3 — the partition)** Which of routeman's 16 movement-types transfer to a standalone, intrinsic, not-loop-bound routelister, and **by what test**? (Candidate test: concept-engagement types [how to engage a concept — REFINE/DEVELOP/TEST/…] transfer; loop-control types [moves on the cognitive process/cycle/threads — TERMINATE/REVISIT/MERGE/UNBLOCK/…] do not. Does this test hold against the actual §2.2 definitions, and does the cut align with or cross the 3 families?)
- **(OT4 — axis relationship)** Are movement-type, kind, and grain orthogonal axes of one signature, or does kind partition/determine movement-type (and is movement-type even needed as a TYPED field vs guidance prose)? Is abstractness a type-axis or an admission rule?
- **(OT5 — trust-partition implication)** Does this force a refinement to `10-25`'s trust-partition ("routeman's identity is the defect; its machinery is mature — carry it wholesale")? If the movement-type taxonomy (and reachability value-set, blocking fields) carry residual *loop-relativity*, then the loop-bound defect lives in parts of the **machinery** too, not only the identity — meaning "carry the machinery" must be applied per-component with a loop-bound test, not wholesale.

**Deliverable shape:** a settled, internally-consistent answer to "what is a typed routelister route" — the route-type signature (which axes, how related), the transfer-partition of the 16 types (with its test), and the trust-partition refinement — grounded in routeman's actual §2.2 taxonomy + §5.4 schema and a per-commitment re-test of the conflicting priors. Spec-unblocking.

## Goal

- **Criterion** — a single, internally-consistent route-type definition that *dissolves* the contradiction (shows how both priors were partly right and where each erred), grounded in the real taxonomy/schema, not asserted.
- **Use case** — unblocks routelister's structural spec (you cannot author "the route record" until "what is a typed route" is settled); also corrects the chain's one genuine self-contradiction before it propagates into the spec.
- **Desired outcome** — clarity on (a) the route-type signature and its axes; (b) exactly which of the 16 types carry and why; (c) whether movement-type is a typed field or prose; (d) what this means for "carry the machinery."
- **What would fail** — (a) picking one prior over the other by fiat without diagnosing WHY they diverged; (b) a "both are right, no change" rubber-stamp that doesn't actually specify the route-type; (c) motivated reconciliation that bends the evidence to make `17-08` (this session's own work) "right"; (d) drifting into the route-record field layout (structural) or runtime type-assignment (process) before the meaning is settled.

## Source Input

```text
u mentioned

 The route's type-schema is specified two incompatible ways across the chain — and never reconciled (most important; blocking)
 ...
  - 10-25 and 12-44 define a route as Direction + Movement-Type + reachability + guidance, and explicitly carry routeman's 16-type movement taxonomy (DEEPEN, REFINE, WIDEN, …) as "mature machinery."
  - 17-08 (route typology) concluded routelister types each route at emission along its own axes — kind (teleological/epistemic) × grain (project/concept-space) × abstractness — and that routeman's 16 types are loop next-moves that don't transfer (routelister "has no fixed move-taxonomy").
  ... A charitable reading is that 17-08 only rejected the categorization scheme (the Movement-Family grouping), not the 16 types themselves — but 17-08's own language ("loop-moves, roles routelister doesn't have, all attributes drop") cuts against the 16-type taxonomy carrying intact. You cannot author the spec until "what is a typed route, concretely" is settled — this is the one place the chain is actually self-contradictory, not just incomplete.

lets dive deep into this
```

## Scope Check

Question covers goal: **YES** — the locus diagnosis (OT1) + the reconciled type definition (OT2) + the transfer-partition (OT3) + the axis-relationship (OT4) + the trust-partition implication (OT5) cover the goal of a settled, spec-unblocking route-type answer.

Specific-vs-pattern: the question points at a SPECIFIC contradiction (movement-type vs kind/grain across named findings). It addresses that specific reconciliation; the broader pattern it touches — "carry routeman's machinery" must be loop-bound-tested per component — is surfaced as OT5 (a generalization the specific case forces). Both in scope; the specific contradiction is the anchor.

Transcription-audit note: the source is a quoted analysis + "lets dive deep into this." The load-bearing clauses preserved as separate observation targets: the two-position contradiction (OT1/OT2), the charitable "only-the-categorization-was-rejected" reading (OT1 explicitly tests it), the "16-type taxonomy carrying intact" tension (OT3), and the spec-blocking framing (Goal use-case). No clause dropped.

## Layer Commitment

Primary layer: **MEANING.** The contradiction is conceptual — what a route's *type* IS for routelister (is the movement-type taxonomy part of routelister's identity, which part, and how do kind/grain/movement-type relate as concepts). Settling that is upstream of any field layout or runtime step.

Other-layer alternatives considered and explicitly OUT OF SCOPE for this run:
- **Structural** (the concrete route-record field schema — which fields, groups, enums; re-deriving routeman's 5-group §5.4 schema + reachability value-set for routelister) — out of scope; downstream of settling the type's meaning. This run decides the AXES, not the record layout.
- **Process** (how routelister computes/assigns a route's type at emission; the classification mechanism) — out of scope; later (and adjacent to the deferred identity-individuation mechanism).

Sequential plan: **Meaning now** (the route-type's axes + the transfer-partition) → **Structural** (the route-record schema, re-deriving the loop-contaminated fields) → **Process** (runtime type-assignment). This order because the record schema is empty until the typing axes and the transfer-partition are settled.

The primary layer is **not ambiguous** (the contradiction is about what typing IS, = meaning), so the pipeline proceeds without a user gate.

## Synthesis Trigger

This inquiry reconciles ≥2 conflicting prior outputs into one settled answer; per CONCLUDE the finding MUST include an `## Inherited Commitments Re-test` that re-tests each conflicting commitment (with cited evidence), not parrot them. The Sensemaking + Critique work must do the re-testing.

Priors being synthesized / reconciled:

- `devdocs/inquiries/2026-05-29_17-08__routelister_route_typology_logic/finding.md` — **conflicting prior A.** Commits: routelister types at emission along kind (teleological/epistemic) × grain (project/concept-space) × abstractness; routeman's 16 types are "loop next-moves" that "don't transfer"; "fixed axes, open route-set." **CRITICAL re-test: did it reject the 24 01-30 CATEGORIZATION or the 16 TYPES — and is "don't transfer" true for the concept-engagement subset?**
- `devdocs/inquiries/2026-05-29_12-44__routelister_definition_consolidated_rerun/finding.md` — **conflicting prior B.** Commits: route = Direction + Movement-Type + reachability + guidance; carry routeman's re-tested machinery. **CRITICAL re-test: is the carried "Movement-Type" the full 16 or a subset?**
- `devdocs/inquiries/2026-05-29_10-25__routelister_discipline_definition/finding.md` — **the trust-partition source.** Commits: routeman's identity is the defect (re-derive); its machinery is mature (carry, incl. the 16-type taxonomy); fresh-vs-in-place. **CRITICAL re-test (OT5): is the machinery uniformly clean, or is the movement-type taxonomy partly loop-contaminated machinery?**
- `devdocs/inquiries/2026-05-29_09-53__routeman_concept_definition_refinement/finding.md` — commits: teleological/epistemic kind; epistemic concepts CLASSIFIED by existing movement types REFINE/REFRAME/DIAGNOSE (already uses the types as classifiers — evidence the movement-type axis is load-bearing).
- `devdocs/inquiries/2026-05-29_11-43__routelister_concept_ontology_traversal/finding.md` — commits: project/concept-space grain; manifestation-divergence as an epistemic route ("reconcile" — maps onto CONSOLIDATE).
- `devdocs/inquiries/2026-05-24_01-30__route_taxonomy_categorization/finding.md` — the Movement-Family categorization (Progression/Re-orientation/Coordination) + 6 attributes, organized by loop-posture; what `17-08` actually examined.
- `cognitive_harness/routeman/references/routeman.md` §2.2 (the actual 16 types + definitions + families) + §5.4 (the per-route 5-group schema) — the ground truth the reconciliation is tested against.
