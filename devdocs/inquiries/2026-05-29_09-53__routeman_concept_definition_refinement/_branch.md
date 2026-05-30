# Branch: Routeman Concept Definition Refinement

## Question

Refine the concept definition (gloss) for **routeman** — the prior inquiry settled "**a thing in the territory engageable as a direction toward the goal**"; this inquiry enhances it (subject: the concept gloss / what counts as a concept-route-target; action: **refine** a definition + **understand** the failure cases that motivate the refinement; level: **discipline**, **meaning layer**). The observation targets, preserved separately:

- **(OT1 — fuzzy goal)** What if the goal is **fuzzy**, and we can't tell whether a concept will be helpful? The "toward the goal" clause gives weak discrimination when the goal isn't crisp — how should the definition handle this?
- **(OT2 — abstract-but-necessary concepts / the anti-skip rationale)** Some concepts are **too abstract** to obviously serve the goal, yet are **absolutely needed**. The definition must keep an LLM (which enumerates the routes) from **skipping** them for being too abstract — the user wants the **definition aspect highlighted** precisely so these aren't dropped.
- **(OT3 — evaluate the proposed enhancement, and seek a better one)** Evaluate the user's proposed definition: *"concept = a thing in the territory engageable as a direction, towards a relevant goal, OR towards better or refined definition of things."* Is the added **"or towards better/refined definition of things"** clause right? Can we produce an **even better** definition?

**Deliverable shape:** a refined concept definition (with reasoning) that handles fuzzy goals and protects abstract-but-necessary concepts, validated against the over-generalization risk — the user's proposal confirmed, refined, or bettered.

## Goal

- **Criterion** — a precise concept definition that (a) admits abstract-but-necessary concepts (no false-negative skips), (b) handles fuzzy goals, (c) WITHOUT re-opening the over-generalization problem the prior inquiry's goal-bias was introduced to prevent; grounded against the prior finding + routeman's existing movement-type taxonomy (REFINE / REFRAME / DIAGNOSE / WIDEN).
- **Use case** — feeds the eventual spec rewrite (the gloss for "concept" in routeman's identity).
- **Desired outcome** — the best available concept definition: the user's proposal validated/refined, or a better formulation.
- **What would fail** — (a) broadening so far that "concept" becomes "any noun" again (re-opening over-generalization — the exact failure the prior goal-bias prevented); (b) staying so strict that abstract concepts get skipped (the failure the user is reporting); (c) ignoring the LLM-skip rationale (the WHY behind the request); (d) drifting into spec-wording / structural placement (out of scope).

## Source Input

```text
"a thing in the territory engageable as a direction toward the goal."
lets refine this even further. 

what if the goal is fuzzy? and we dont really understand if a concept will be helpful for us or not?

i think abive definition is good but it needs to be enhanced.. 

concept= a thing in the territory engageable as a direction, towards a relevant goal, or towards better or refined  definition of things

because sth concepts are too abstract but they are absolutely needed and hihglighting the  definition aspect is important so LLM who will list routes wont skip them due to being too abstract.

what do you think? maybe we can have even better definition ?
```

## Scope Check

Question covers goal: **YES** — refining the definition to handle fuzzy-goal + abstract-skip covers the goal of a better gloss to feed the rewrite.

Specific-vs-pattern: the user proposes a SPECIFIC definition. Per default, this inquiry evaluates the **broader pattern** — "what is the best concept definition that handles fuzzy goals and protects abstract concepts without over-generalizing?" — with the **user's proposal as the leading candidate**. Validating it requires testing the broadening against the over-generalization risk and against alternatives. Both the specific proposal (OT3) and the broader question are in scope.

## Layer Commitment

Primary layer: **MEANING.** The inquiry adjudicates what a "concept" IS for routeman — the definition/essence of the route-target, and what kinds of "direction" qualify (goal-advancing vs definition/understanding-refining). The user is refining a definition; that is meaning-layer.

Other-layer alternatives considered and explicitly OUT OF SCOPE:
- **Structural** (exact gloss wording in the spec; where it sits; whether the anti-skip rule lives in the gloss or in routeman's enumerate-all guidance) — out of scope; later.
- **Process** (how routeman's enumeration step applies the definition; how the movement-type taxonomy classifies an admitted abstract concept) — out of scope; later.

Sequential plan: **Meaning now** (what's the best definition?) → **Structural** (where/how to word it in the spec + where the anti-skip rule belongs) → **Process** (enumeration application). The structural placement question (does "no-skip-for-abstractness" belong in the concept gloss or in routeman's asymmetric-failure/enumerate-all rule?) is FLAGGED here but resolved later.

The primary layer is **not ambiguous** — the user is refining a definition — so the pipeline proceeds without a user gate.

## Synthesis Trigger

This inquiry consumes a prior inquiry output and inherits its commitments. Per CONCLUDE, the finding must include an `## Inherited Commitments Re-test` section re-testing each (not parroting).

Priors being inherited:

- `devdocs/inquiries/2026-05-29_09-23__routeman_concept_as_route_identity/finding.md` — the immediate prior. Commits: the three-element jointness (concept + route-framing + **goal-bias**); the goal-bias is what **bounds "concept" against over-generalization**; the gloss "a thing in the territory engageable as a direction toward the goal." **Central inherited claim to re-test: that the goal-bias provides the discrimination — does the user's broadening ("or towards refined definition") preserve that discrimination, or re-open the over-generalization the prior inquiry closed?**
- `cognitive_harness/routeman/references/routeman.md` (§2.2 movement-type taxonomy) — commits the existing types REFINE / REFRAME / DIAGNOSE / WIDEN. **Bears on whether "toward refined definition of things" is a NEW clause the gloss needs, or is already expressible as a REFINE/REFRAME-typed route** (i.e., is the gloss the admission gate, and is broadening it what lets an abstract concept through so it CAN become a REFINE route?).
