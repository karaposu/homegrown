---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: Routelister — Defining a Fresh Discipline to Replace Routeman

## Question

(from `_branch.md`) The user proposes, instead of patching routeman, to create a new thinking discipline from scratch — **routelister** — using the clean-slate name to escape routeman's design baggage and catch its design mistakes. The task: **what IS routelister (OT1), what is it NOT (OT2), what is expected of it as a discipline (OT3)**, and — load-bearing — **does creating it under a new name actually let us catch routeman's mistakes (a structural rename), or is it cosmetic (OT4)?** The user is explicit that "we can't trust routeman's design fully," so the prior routeman work must be re-tested, not inherited.

**Goal:** a first-principles definition of routelister (IS / IS-NOT / expected) that captures the corrected understanding from the recent inquiries WITHOUT routeman's diagnosed defect, with each inherited commitment re-tested — to base routelister's spec on; plus a verdict on whether the from-scratch rename is justified. (Meaning layer; authoring the spec is deferred.)

## Finding Summary

- **The single most important correction up front: "can't trust routeman fully" is *calibrated*, not blanket.** The earlier diagnosis (`devdocs/inquiries/2026-05-29_01-11__routeman_current_problem_diagnosis/finding.md`) already localized routeman's defect to its **identity sections** and found its **machinery mature**. So the distrust splits cleanly: **distrust routeman's *identity* (re-derive it clean); re-test-and-carry routeman's *machinery*; trust-but-re-test the recent corrected findings.** "From scratch" therefore means **identity-from-scratch, NOT machinery-from-scratch.** Discarding routeman's machinery would be over-rejection — it would throw away mature work and re-litigate the corrective inquiries.

- **What routelister IS (OT1):** a standalone, domain-agnostic thinking discipline whose operation is — *identify the concepts in a territory that can be engaged as directions toward a goal, and list each as a typed, prescriptive route — enumerating all such concepts (leaning to inclusion), without selecting which to take.* Its unit is the **route** (a concept framed as a typed prescriptive direction: a Direction[=the concept] + a Movement Type[=how to engage it] + reachability + guidance). Its concept-target is "a thing in the territory worth drawing in as a route, whose engagement either advances the goal or sharpens the understanding the goal rests on (including a fuzzy goal itself)." **Its identity is defined by this operation — it carries no loop-position.** (The name fits: routelister *lists routes*.)

- **What routelister is NOT (OT2):** (a) **NOT loop-bound** — it does not require a completed cognitive cycle and is not defined by its position between cycles (this is the explicit exclusion of routeman's diagnosed mistake; routelister runs on any territory). (b) **NOT a selector** — it enumerates, never picks. (c) **NOT an executor** — it lists "refine X" / "develop Y" as routes; performing them is downstream disciplines' work. (d) **NOT a model-builder (`/comprehend`) or relevance-tagger (`/surfacing`)** — it frames concepts as prescriptive directions, not as a descriptive model or a relevance-ranked inventory. (e) **NOT generating-from-nothing** — routes are drawn from the territory's concepts, not invented beyond it. (f) **NOT the goal-setter** — the goal is received (even if fuzzy).

- **What is expected of it as a discipline (OT3):** the full discipline anatomy from the project's canon — a **spec** with Definition/Philosophy (the operation + the NOT-list), Structural Components (its own — concept-identification, route-framing/typing via the carried movement-type taxonomy, the two-axis concept-admission test, adaptive guidance), Process Model, Failure Modes, Coverage Strategy; and an **output** with a Transform (the Route Map of typed routes), Progression, Telemetry, and Frontier. Plus the four universal properties every discipline has (telemetry, frontier-awareness, failure-modes, self-application) and standalone + domain-agnostic per canon. It fills the project's forward-Boundary slot **by role** (a runner-owned composition fact — where it's typically called), **not as part of its identity**.

- **Is the from-scratch rename structural or cosmetic (OT4)? Structural — *conditionally*.** It is worth doing if and only if three conditions hold:
  1. **Re-derive** routelister's identity from the corrected findings (concept-as-route + the two-axis concept definition), NOT copy routeman's spec. (Absent this it's cosmetic — the loop-relational defect rides along under a new label.)
  2. **Carry routeman's sound machinery after re-testing it** — the 16-type movement taxonomy, the asymmetric-failure / enumerate-all principle, the Route Map output schema, the typed-reachability + adaptive-guidance mechanisms (the diagnosis found these mature). NOT reinvent them. (Absent this it over-rejects — losing mature work + the corrective inquiries' gains.)
  3. **Supersede + archive routeman** to `non-active/` (the precedent: when routeman was created, `/navigation` was archived). NOT let the two coexist. (Absent this the rename ADDS baggage — two specs for one operation — the very thing it was meant to escape.)

- **Honest balance (the part not to oversell):** routelister is **the same cognitive operation as routeman** (route enumeration toward a goal) — with a corrected *intrinsic* identity and the recent unit/definition refinements folded in. It is **not a new capability.** So the choice between "create routelister fresh" and "rewrite routeman in place" is a choice of *spec-hygiene method*, not of cognitive content — **both reach the same corrected discipline.** Fresh-routelister's only real advantages are (i) no residual loop-language to half-patch and (ii) the new name escaping retrieval of old "routeman" framings. Its cost is the discipline to carry the machinery + archive the old. **Fresh is therefore NOT strictly superior to patching routeman in place; the choice is the user's, and either is structural as long as condition (1) holds.** Use the rename-as-design-act move sparingly and always with supersession, or it becomes a baggage generator.

## Finding

### Why we are even discussing this

Four prior inquiries this session worked on routeman: a diagnosis (its identity is loop-relational), then the corrected identity (concept-as-route), then the concept definition (goal-relative two-axis + anti-skip). All three pointed toward a spec rewrite. The user now proposes a different route to the same end: rather than patch routeman, build a fresh discipline — routelister — so the new name forces a clean design and helps catch routeman's mistakes. This inquiry defines routelister (IS / IS-NOT / expected) and judges whether the fresh-discipline move is genuinely better than patching.

### 1. The calibrated trust-partition — the key that unlocks everything

"We can't trust routeman's design fully" sounds like it licenses throwing routeman out and starting blank. It does not — and reading it that way would be a mistake the inquiry had to actively prevent. The earlier diagnosis already did the precise work of locating routeman's defect: it is in the **identity sections** (which bake routeman's loop-role in as a precondition), and the diagnosis explicitly found routeman's **machinery mature** ("its components, process, quality, and output are well-developed; specifically the identity is immature").

So the trust-partition is:
- **Distrust the identity** → re-derive it clean from the corrected understanding.
- **Re-test-and-carry the machinery** → the movement-type taxonomy, the enumerate-all/asymmetric-failure principle, the Route Map output, the typed-reachability and adaptive-guidance mechanisms. These were never the problem.
- **Trust-but-re-test the recent findings** → concept-as-route and the two-axis concept definition are the corrected understanding; re-confirm them under the new name.

This is why "from scratch" means **identity-from-scratch, not machinery-from-scratch.** Routelister is not a blank-slate reinvention; it is the corrected identity expressed cleanly, plus the mature machinery carried forward, plus routeman retired.

### 2. Routelister's identity (IS) and exclusions (IS-NOT)

The IS and IS-NOT are re-derived from the corrected findings, not copied from routeman. The IS (above) is intrinsic: it names the operation (identify concepts as typed prescriptive routes toward a goal) without any reference to a loop, a cycle, or a position. That intrinsic framing is exactly what the diagnosis prescribed and what routeman's spec failed to do.

The IS-NOT does double duty: it carries forward the sound exclusions that genuinely define the operation's edges (not a selector; not an executor; not a model-builder or relevance-tagger; not generating-from-nothing; not the goal-setter) AND it adds the one exclusion that is the whole reason for the exercise — **not loop-bound.** Routelister explicitly does not require a completed cognitive cycle and is not defined by sitting between cycles. The boundary *role* (routelister is typically run at cycle edges to steer) remains true, but it lives in the runner/composition layer, not in routelister's identity — the precise correction the diagnosis demanded.

### 3. What's expected of it as a discipline

The project's canon (`docs/canon/thinking_disciplines/anatomy_of_disciplines.md`) defines what every discipline must have, and explicitly notes that "unique disciplines are expected to have unique form" — so routelister is licensed to diverge from routeman's exact shape. Routelister must have the spec anatomy (definition + structural components + process model + failure modes + coverage strategy) and the output anatomy (its Transform = the Route Map, plus progression, telemetry, frontier), the four universal properties (telemetry, frontier, failure-modes, self-application), and standalone/domain-agnostic status. Its forward-Boundary placement is a role it plays in the loop architecture, owned by the runners — not a clause in its identity.

### 4. The rename verdict, honestly

The deepest question was whether "fresh discipline" is real improvement or dressed-up relabeling. The answer is that the rename is **structural only under three conditions** (re-derive the identity, carry the re-tested machinery, supersede+archive routeman), and that — crucially — **it is not strictly better than simply rewriting routeman in place.** Both paths reach the identical end state: one corrected, intrinsic-identity discipline with routeman's mature machinery. Routelister-fresh wins only on two narrow margins: a clean spec has no defective sentences to half-edit (no residual loop-language), and a new name isn't pulled back toward old framings when an agent retrieves "routeman." Against those, patching-in-place avoids managing a rename and an archival. So the user's instinct is sound — the fresh name is a legitimate, slightly-cleaner spec-hygiene method — but the value is the *forced clean re-derivation + the supersession*, not the label itself. If the rename is done without re-deriving (just copy + relabel), it is cosmetic and pointless; if done without superseding routeman, it actively adds baggage.

This is the **second** time the project has used this "rename-as-design-act" move (routeman was itself `/navigation` renamed to escape *its* corpus baggage). That makes this inquiry the N≥2 validation the original routeman design memo flagged: the methodology generalizes, *with the caution* that it must be used sparingly and always with supersession — otherwise the corpus fills with abandoned discipline names and the move becomes a baggage generator rather than a baggage remover.

## Inherited Commitments Re-test

This inquiry declared a Synthesis Trigger and was explicitly told to re-test, not inherit. Per CONCLUDE, each commitment is re-tested.

| Commitment (and source) | Re-test status | Evidence |
|---|---|---|
| **Routeman's identity is loop-relational and should be intrinsic** — diagnosis (`devdocs/inquiries/2026-05-29_01-11__routeman_current_problem_diagnosis/finding.md`) | **RE-TESTED → the trust-partition source** | This is what calibrates "from scratch": the diagnosis localized the defect to identity (not machinery), so routelister re-derives the identity and carries the machinery. Load-bearing for the whole finding. |
| **The corrected identity = concept-as-route** — `devdocs/inquiries/2026-05-29_09-23__routeman_concept_as_route_identity/finding.md` | **RE-TESTED → carried as routelister's IS** | Re-derived as routelister's operation; re-confirmed intrinsic and standalone-compatible. |
| **The concept definition = goal-relative two-axis + anti-skip** — `devdocs/inquiries/2026-05-29_09-53__routeman_concept_definition_refinement/finding.md` | **RE-TESTED → carried as routelister's concept-target** | Folded into routelister's IS as the concept gloss. |
| **The routeman SPEC** (`cognitive_harness/routeman/references/routeman.md`) — verb-meaning, NOT-list, 16-type taxonomy, asymmetric-failure, Route Map output, mechanisms | **RE-TESTED per-part** | Identity sections (the loop-relational §1.2/§1.4/§1.5) **DROPPED** (the defect). Machinery (16-type taxonomy, asymmetric-failure/enumerate-all, Route Map output, typed-reachability + adaptive-guidance) **CARRY after re-test** (the diagnosis found it mature). Generic verb-meaning **carried**. This per-part treatment is what makes the move structural rather than cosmetic OR over-rejecting. |
| **Rename-as-design-act is structural-not-cosmetic** — old routeman design memo (`cognitive_harness/routeman/references/old_routeman.md`) | **RE-TESTED → structural CONDITIONALLY (2nd application)** | Confirmed it generalizes to a 2nd discipline-rename, under the 3 conditions, with the added caution: use sparingly + always supersede, or it generates baggage. Feeds the methodology's N≥2 promotion. |

## Next Actions

### MUST

(none — meaning-layer definition; no action forced. The user is choosing the path.)

### COULD

- **COULD-1 — Author routelister's spec (the structural follow-on), or equivalently rewrite routeman in place.**
  - **What:** write `cognitive_harness/routelister/` (SKILL.md + reference) from this IS / IS-NOT / expected, re-deriving the identity and carrying routeman's re-tested machinery — OR, if the user prefers, rewrite routeman's identity sections in place to the same effect.
  - **Who:** the user / a follow-on structural `/MVLw`.
  - **Gate:** condition-bound — when the user decides between fresh-routelister and patch-routeman.
  - **Why:** this finding settled the identity (the meaning); the spec is the next layer. Either path reaches the same corrected discipline.

- **COULD-2 — If fresh-routelister is chosen, supersede + archive routeman.**
  - **What:** move `cognitive_harness/routeman/` to `cognitive_harness/non-active/`, update the discipline taxonomy's forward-Boundary slot + the runner/install references from routeman to routelister.
  - **Who:** the user / the structural follow-on.
  - **Gate:** condition-bound — after routelister's spec is authored.
  - **Why:** condition (3) of the structural-rename verdict — coexistence doubles baggage. (The /navigation→non-active precedent.)
  - **Depends-on:** COULD-1. This COULD is GATED — only fires if the fresh-routelister path is taken (not needed for the in-place-rewrite path).

### DEFERRED

(none.)

## Reasoning

- **SURVIVED (the verdict):** the routelister definition package (IS / IS-NOT / expected) + the conditional rename verdict. It survived the hardest prosecution — that the rename is just relabeling — because the verdict does not claim fresh is superior; it preserves "patch routeman in place" as an equal path and locates the rename's value precisely (forced clean re-derivation + supersession, under three conditions). Two refinements were applied: (1) acknowledge routelister folds in the recent refinements (concept-as-route, two-axis, anti-skip) rather than being literally identical-minus-a-defect; (2) state explicitly that fresh is not strictly superior to in-place rewrite.

- **KILLED — blank-slate reinvent-all** (discard routeman's machinery, redesign everything): over-rejection. The diagnosis already proved the machinery sound; reinventing it would lose mature work and re-litigate the corrective inquiries. Its failure proves the carry-machinery condition is load-bearing.

- **KILLED — coexist** (routelister + routeman both live): baggage-doubling — two specs for one operation, the exact thing the rename is meant to escape. Its failure proves the supersede+archive condition is load-bearing.

- **PRESERVED as an equal baseline — patch routeman in place:** not killed. It reaches the same corrected discipline; keeping it on the table is what makes the rename verdict honest rather than a rubber-stamp of "fresh is better."

A note on rigor: defining a discipline using disciplines risks a self-confirming answer, so the load-bearing judgments (machinery-vs-identity split; structural-vs-cosmetic) were anchored in external references — the diagnosis's localization of routeman's defect, the project's discipline-anatomy canon, and the `/navigation`→`non-active` archival precedent — not in the evaluating disciplines' vocabulary.

## Open Questions

### Refinement Triggers

- **If routelister's spec is authored and a later inquiry still reads it as loop-bound,** the intrinsic-identity re-derivation was incomplete — revisit the IS-NOT's loop-exclusion wording.
- **If carrying routeman's machinery surfaces a part that turns out to depend on the loop-relational identity** (i.e., not as cleanly separable as the diagnosis implied), the trust-partition needs refinement for that part.

### Research Frontiers

- **Rename-as-design-act, now at N=2, is a candidate for promotion to a named project methodology** — but with the caution this inquiry added (use sparingly + always supersede). A future inquiry could formalize when the move is warranted vs when in-place rewrite is the right call.
- **The name "routelister" carries a mild risk** that "lister" reads as descriptive (inviting collapse toward `/surfacing`); the eventual spec must keep the prescriptive route-framing explicit. (Structural/wording; flagged.)

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i am thinking of this, 

instead of patching routeman, we can create routelister discipline from scratch, this way the design can be better. 

and we dont need baggage of routeman design mistakes... 


so now, the task is this. 
routelister discipline is what ? and what not? what is expected of it as discipline , 

i know we already have many defined points of routeman but creating it with different name gives us a chance to catch our own mistakes. So we cant trust routeman design fully.
```

</details>
