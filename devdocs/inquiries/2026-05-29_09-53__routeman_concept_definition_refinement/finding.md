---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: Refining the Concept Definition for Routeman

## Question

(from `_branch.md`) Refine the concept definition (gloss) for **routeman** — the prior inquiry settled "**a thing in the territory engageable as a direction toward the goal**." The user asks to enhance it for two cases that gloss handles poorly: a **fuzzy goal** (you can't tell whether a concept helps), and **abstract-but-necessary concepts** (an LLM enumerating routes skips them for being too abstract). The user proposes: *"concept = a thing in the territory engageable as a direction, towards a relevant goal, OR towards better or refined definition of things"* — and asks whether this makes sense and whether a better definition exists.

**Goal:** the best concept definition that admits abstract-but-necessary concepts and handles fuzzy goals WITHOUT re-opening the over-generalization the prior goal-bias was introduced to prevent — to feed the eventual spec rewrite. (Meaning layer; the spec wording itself is deferred.)

## Finding Summary

- **Yes, the user's instinct is right — with one bound added and one structural refinement.** The enhancement that's correct: a route's value has **two axes**, and the prior gloss saw only one.
  - **Teleological** — acting on the concept *advances the goal* (the prior gloss's "toward the goal").
  - **Epistemic** — engaging/clarifying the concept *sharpens the understanding the goal rests on* (the user's "toward refined definition"), *including a fuzzy goal itself*.

- **These are not two separate endpoints — they are the direct and indirect paths to the same goal.** That framing is what keeps the epistemic axis from over-generalizing: it stays **goal-relative** ("the understanding *the goal* rests on"), not free-floating ("definition of things"). The user's wording carried the right insight but left the bound open; tightening "definition of things" → "the understanding the goal rests on" is the fix.

- **The single epistemic axis handles BOTH of the user's concerns, because they are the same underlying case** — *teleological value unclear, epistemic value high*:
  - *Fuzzy goal:* when the goal isn't crisp you can't judge whether a concept advances it, but you can judge whether engaging it sharpens the goal/understanding; "including a fuzzy goal itself" makes *refining the goal* a legitimate route.
  - *Abstract-but-necessary concepts:* these are exactly the low-obvious-teleological / high-epistemic ones; the epistemic axis admits them.

- **The user's deeper worry — that an LLM will SKIP abstract concepts — is real, and is best handled by a paired "anti-skip" rule, not by stuffing more into the definition.** Routeman already has an inclusion principle (its asymmetric-failure rule: "missing a possible move is worse than including a marginal one; lean to inclusion"). But that rule fires on candidates *already surfaced*, while the skip happens earlier — the "toward the goal" framing biases the LLM to never surface the abstract candidate. So the fix has two parts in two registers:
  - **The gloss (declarative):** *concept = a thing in the territory worth drawing in as a route, whose engagement either advances the goal or sharpens the understanding the goal rests on (including a fuzzy goal itself).*
  - **A paired anti-skip rule (imperative):** *do not skip a thing for being too abstract; the abstract ones are often the most load-bearing.*
  
  The anti-skip rule reads naturally as an extension of routeman's existing asymmetric-failure principle. WHERE each part physically lives in the spec (in the gloss, in the asymmetric-failure section, or both) is a structural-layer decision, deferred.

- **The epistemic axis does NOT collapse routeman into /sense-making or /comprehend.** Refining a definition/understanding is what those disciplines DO. But routeman doesn't *do* the refining — it *enumerates* "you could refine X" as a prescriptive route (using its existing movement types REFINE / REFRAME / DIAGNOSE). Performing the refinement is the downstream discipline's job, invoked only if that route is taken. Propose, don't execute — the prior inquiry's load-bearing "as routes" boundary holds on the epistemic axis exactly as on the teleological one.

- **The bound is real but soft — a judgment, not a crisp filter — and that's fine.** "Does the goal genuinely depend on understanding this concept?" is a judgment call (e.g., for the goal "improve routeman's identity," clarifying "UI color" does NOT sharpen what the goal rests on, so it's excluded; clarifying "what a route is" does). Routeman's lean-to-inclusion handles the uncertain middle. This matches how routeman already makes judgment-based, inclusion-biased enumeration decisions.

- **Net:** the user's enhancement is validated and improved. The epistemic axis is the right addition; "definition of things" is tightened to "the understanding the goal rests on"; the abstractness-license becomes a paired enumeration rule. The 09-23 goal-bias is preserved and extended (the epistemic axis is its *indirect path*, not its abandonment).

## Finding

### Why we are even discussing this

Two prior inquiries established that routeman should be re-identified around the **concept** as its unit ("identify concepts in a territory engageable as directions toward a goal, framed as typed prescriptive routes"). The closing gloss for "concept" was "a thing in the territory engageable as a direction toward the goal." The user now reports that this gloss is too strict in two situations and proposes broadening it. This inquiry evaluates that, at the meaning layer (what counts as a concept), leaving the spec wording for later.

### 1. The missing axis: a route's value is teleological OR epistemic

The prior gloss bounded "concept" by one test: does engaging it advance the goal? That is the *teleological* axis. The user's insight is that there is a second axis of value: does engaging/clarifying the concept *sharpen the understanding* — the *epistemic* axis. Some concepts have low obvious teleological value (they don't visibly advance the goal) but high epistemic value (the goal depends on getting them right). A foundational definition is the classic case: it rarely "advances the goal" directly, but the goal rests on it. A teleological-only gloss filters these out; the epistemic axis admits them.

Crucially, the two axes are not two unrelated endpoints — they are the **direct and indirect paths to the same goal**. A teleological route advances the goal directly; an epistemic route advances it indirectly by sharpening the understanding the goal depends on. Seeing them this way is what keeps the epistemic axis disciplined (see §2).

### 2. Bounding the epistemic axis so it doesn't over-generalize

The whole reason the prior inquiry introduced a goal-bias was to stop "concept" from meaning "any noun." The user's wording — "toward better or refined definition of *things*" — risks undoing that, because almost anything can be said to refine *some* understanding. If unbounded, the map fills with noise.

The fix is to keep the epistemic clause **goal-relative**: a concept qualifies if clarifying it sharpens the understanding **the goal rests on** — not "things" in general. This requires a load-bearing dependency between the concept and the goal's foundations. It is a *soft* bound (a judgment, not a crisp gate): the enumerator judges whether the goal genuinely depends on the concept, and routeman's existing lean-to-inclusion handles the uncertain middle. That is exactly how routeman already operates (judgment-based enumeration with an inclusion bias), so the bound is consistent with the discipline, not a new mechanism. The result discriminates (a clearly-irrelevant concept's clarification does not qualify) while admitting the abstract-but-foundational ones.

### 3. Fuzzy goals and abstract concepts are the same case

The user raised these as two concerns, but they are one. Both are situations where **teleological value is unclear but epistemic value is high**:
- When the *goal is fuzzy*, you cannot judge whether a concept advances it — but you can judge whether engaging it sharpens the goal or the surrounding understanding. So under a fuzzy goal, the epistemic axis becomes the primary discriminator, and the most valuable routes are the ones that *sharpen the goal itself*. "Including a fuzzy goal itself" in the definition makes refining the goal a first-class route.
- An *abstract-but-necessary concept* is, by definition, one whose teleological contribution is non-obvious but whose epistemic contribution (the goal rests on it) is high.

So the epistemic axis is a single addition that covers both — not two patches.

### 4. The anti-skip rule: designing the definition around how an LLM behaves

The user's stated reason for the enhancement is behavioral: an LLM enumerating routes will *skip* abstract concepts unless the definition explicitly protects them. This is an instance of a principle already in routeman's design history — designing the discipline around known LLM operational limits (here: the LLM's bias to drop abstract or non-obvious items).

Routeman already has an inclusion principle: its asymmetric-failure rule says missing a possible move is worse than including a marginal one, so lean toward inclusion. One might think that already prevents the skip. It does not fully, because that rule operates on candidates *already in view*, whereas the skip happens earlier — the gloss's "toward the goal" framing biases the LLM to never even surface the abstract candidate. So the protection needs to act at two points, in two registers:
- The **gloss** (declarative) puts the epistemic/abstract concepts *in frame* by naming the epistemic axis.
- A **paired anti-skip rule** (imperative) actively forbids dropping them: "do not skip a thing for being too abstract; the abstract ones are often the most load-bearing."

The anti-skip rule reads as an extension of routeman's asymmetric-failure principle (abstractness specifically is not a skip-reason). Whether it physically lives in the gloss, in the asymmetric-failure section, or both, is a structural placement decision and is deferred — the meaning-layer conclusion is only that the definition must *license* abstract/epistemic concepts because the LLM will not supply that license itself.

### 5. Why this doesn't turn routeman into sense-making or comprehend

"Refine the understanding/definition of things" is, on its face, what /sense-making does (turn ambiguity into stable meaning) and what /comprehend does (build a predictive model). So does the epistemic axis make routeman do their job? No. Routeman *enumerates* "you could refine X" as a prescriptive route — it points at the move; it does not make the move. The actual refining is done by whatever discipline you invoke if you take that route. This is the same propose-don't-execute boundary the prior inquiry established for the teleological axis ("routeman lists routes, it doesn't take them"); it holds identically for the epistemic axis. And routeman already has the movement types for it — REFINE ("improve precision of an existing artifact or claim"), REFRAME, DIAGNOSE — so an admitted epistemic concept becomes a route of one of those types. The gloss broadening is an *admission* change (letting the abstract concept in); the existing taxonomy *classifies* it once admitted. The two are complementary.

## Inherited Commitments Re-test

This inquiry declared a Synthesis Trigger consuming two priors. Each inherited commitment is re-tested.

| Commitment (and source) | Re-test status | Evidence |
|---|---|---|
| **The goal-bias provides the discrimination that bounds "concept" against over-generalization** — the prior concept-as-route finding (`devdocs/inquiries/2026-05-29_09-23__routeman_concept_as_route_identity/finding.md`) | **RE-TESTED → PRESERVED + EXTENDED** | The goal-bias still bounds; the epistemic axis is its *indirect path* (goal-relative: "the understanding the goal rests on"), not its abandonment. The three-element jointness (concept + route-framing + goal-bias) survives; the goal-bias element now spans two sub-paths (direct/teleological + indirect/epistemic). The over-generalization the prior inquiry closed stays closed, because the epistemic clause is goal-relative, not free-floating. |
| **Routeman's movement-type taxonomy (REFINE / REFRAME / DIAGNOSE)** — `cognitive_harness/routeman/references/routeman.md` §2.2 | **RE-TESTED → CONSISTENT (and load-bearing for this answer)** | The admitted epistemic concepts become routes of these existing types. The gloss broadening (admission) complements the taxonomy (classification); no new movement type is needed. |
| **Routeman's asymmetric-failure principle (lean to inclusion; missing a move is worse)** — `cognitive_harness/routeman/references/routeman.md` §4.4 | **RE-TESTED → the natural home of the anti-skip rule** | The anti-skip rule extends §4.4 (abstractness-specifically-not-a-skip-reason). §4.4 alone is necessary but insufficient (it acts post-surfacing); the gloss + the explicit rule together close the gap. §4.4 also handles the soft bound's residual uncertainty. |

## Next Actions

### MUST

(none — meaning-layer understanding; no action forced. The user has been sequencing "fix later.")

### COULD

- **COULD-1 — Carry this refined definition into the structural-layer rewrite (the same rewrite the prior inquiry's COULD-1 named).**
  - **What:** when rewriting routeman's identity, use the two-axis gloss + the paired anti-skip rule; decide their placement (gloss vs the asymmetric-failure section vs both).
  - **Who:** the user / the rewrite inquiry.
  - **Gate:** condition-bound — when the identity rewrite is undertaken.
  - **Why:** this inquiry settled the meaning; the rewrite is where it lands. The placement question is the one open structural decision.

- **COULD-2 — Decide where the anti-skip license lives.**
  - **What:** choose gloss vs asymmetric-failure-section vs both for "abstractness is not grounds to exclude."
  - **Who:** the rewrite inquiry.
  - **Gate:** condition-bound — during COULD-1.
  - **Why:** innovation surfaced that the license reads naturally as a §4.4 extension (imperative register), while the gloss carries the two-axis+bound (declarative). The split is a meaning-layer result; the physical placement is the structural call.
  - **Depends-on:** COULD-1. This COULD is GATED — it is part of the rewrite.

### DEFERRED

(none.)

## Reasoning

The understanding was reached by generating candidate definitions and testing them, with deliberate foils so the answer was chosen, not assumed.

- **SURVIVED (the verdict):** the goal-relative two-axis gloss + the paired anti-skip rule. It survived the hardest prosecution — the over-generalization objection in its strongest form ("for any concept you can claim it's goal-relevant, so the bound admits everything"). The defense: the bound requires a load-bearing dependency (the goal genuinely rests on the concept), which a clearly-irrelevant concept fails; it is a soft judgment, not a crisp gate, with lean-to-inclusion handling the uncertain middle — exactly how routeman already enumerates. Two refinements were applied: characterize the bound as a soft goal-relative judgment (not airtight); flag the gloss-vs-rule placement as a deferred structural call.

- **REFINED — the user's literal wording** ("toward better/refined definition of things"): the insight is right, but "of things" is unbounded and would re-open over-generalization. Its failure proves the **goal-relative bound is load-bearing**. Tightened to "the understanding the goal rests on."

- **SUPERSEDED — the goal-only revert** (keep the prior teleological-only gloss): too strict; it skips the abstract-but-necessary concepts the user reported. Its failure proves the **epistemic axis is load-bearing**. (Testing this "change nothing" option was the guard against only keeping comfortable conclusions.)

- **The two-register result (gloss + paired rule)** emerged from noticing that the abstractness-license is *imperative* content (an instruction to the enumerator) while the two-axis definition is *declarative* — so they want different registers and likely different homes. This both serves the user's anti-skip concern better than a single sentence and partially answers the placement question the prior inquiry left open.

A note on rigor: because this used thinking disciplines to refine another discipline's definition, the load-bearing non-collapse distinction (routeman enumerates refine-routes vs /sense-making executes refinement) was anchored in the disciplines' operation definitions, not in the evaluating disciplines' vocabulary.

## Open Questions

### Refinement Triggers

- **If the structural rewrite finds the soft goal-relative bound is too soft in practice** (enumerations still over-generalize on the epistemic axis), the bound may need a sharper operational test (e.g., "name the specific goal-foundation the concept's clarification serves") — a process-layer addition, not a meaning change.
- **If, after the rewrite, an LLM still skips abstract concepts** despite the paired anti-skip rule, the rule's placement or wording needs strengthening (evidence that the gloss-level license alone is insufficient and it must live in the asymmetric-failure section).

### Research Frontiers

- **The epistemic/teleological two-axis distinction may generalize beyond routeman.** Other disciplines that enumerate or prioritize (and any future "what's worth attending to" operation) may have the same two value-axes. Out of scope here; flagged.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
"a thing in the territory engageable as a direction toward the goal."
lets refine this even further. 

what if the goal is fuzzy? and we dont really understand if a concept will be helpful for us or not?

i think abive definition is good but it needs to be enhanced.. 

concept= a thing in the territory engageable as a direction, towards a relevant goal, or towards better or refined  definition of things

because sth concepts are too abstract but they are absolutely needed and hihglighting the  definition aspect is important so LLM who will list routes wont skip them due to being too abstract.

what do you think? maybe we can have even better definition ?
```

</details>
