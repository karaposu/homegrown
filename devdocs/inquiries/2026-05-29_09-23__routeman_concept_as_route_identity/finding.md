---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: What Routeman Should Do — Concept-as-Route Identity

## Question

(from `_branch.md`) Before fixing routeman's identity (the discipline at `cognitive_harness/routeman/`, which the prior diagnosis found defines itself by its loop-position rather than by its operation), increase understanding of **what routeman should do**. Evaluate the user's proposed framing: that routeman should **identify concepts and list them as routes** — with "concept" chosen because it is "meta enough" and "has coverage." The user accepts the existing output type (the Route Map) as roughly good, so the subject is routeman's *unit/operation*, not its output schema. Three observation targets: does "identify concepts" make sense as the operation; does "list them as routes" preserve routeman's identity or collapse it into descriptive concept-listing; and is "concept" the right term.

**Goal:** a grounded understanding-verdict (validate / refine / replace) to drive the eventual identity fix — contrasted against the neighbor disciplines (`/comprehend`, `/surfacing`) and consistent with the prior diagnosis.

## Finding Summary

- **Yes, it makes sense — and it is stronger than "makes sense": "concept-as-route" is the intrinsic identity that resolves the problem the prior diagnosis found.** The prior diagnosis (`devdocs/inquiries/2026-05-29_01-11__routeman_current_problem_diagnosis/finding.md`) found routeman's identity is *relational* — it defines itself by where it sits in the loop and what feeds it ("consumes the artifacts of a completed cognitive cycle"). Defining routeman by the **concepts in a territory** it works on, rather than by a prior cycle's outputs, is *intrinsic* — concepts exist in any territory (a project, a codebase, an inquiry), so this is exactly the standalone, operation-defined identity the diagnosis called for.

- **The verdict, stated as what routeman should do:** *Routeman should identify the concepts in a territory that can be engaged as directions toward a goal, and frame each as a typed, prescriptive route — enumerating all such concepts (leaning to inclusion), without selecting which to take.*

- **Three things must travel together; each is load-bearing.** The understanding's core result is that the proposal works only as a *triple*, and the inquiry proved each element necessary by showing that an identity dropping it fails:
  - **Concept** (the unit) — gives the meta-ness and coverage the user wanted; this is what makes routeman work on *any* territory (domain-agnostic, standalone). Drop the others and keep only "identify concepts" → routeman collapses into a concept-lister (see next bullet).
  - **Route-framing** ("as routes") — the prescriptive packaging: each concept becomes a *typed direction toward the goal, with reachability and guidance*. **This is the non-negotiable line** that keeps routeman distinct from its neighbors. A bare "list of concepts" is descriptive and belongs to `/comprehend` or `/surfacing`, not routeman.
  - **Goal-bias** — routeman doesn't enumerate *all* concepts, only those engageable as directions toward the goal. This is what stops "concept" from over-generalizing into uselessness (everything-is-a-concept → no help).

- **"Concept" is the right term — meta-enough and with coverage — but only when bounded.** On its own the word is too broad (a failure in itself: coverage without discrimination). The goal-bias and the route-framing supply the discrimination "concept" alone lacks. So the eventual identity statement must bind the three together and likely give "concept" a tight gloss — *"a thing in the territory that could be engaged as a direction toward the goal."* (Exact wording is a later, structural-layer decision.)

- **The collapse risk is real but precisely located, and the user already guarded against it.** "Identify concepts" alone IS the territory of `/comprehend` (which builds a predictive *model* of how an artifact works — descriptive) and `/surfacing` (which draws *items* tagged by relevance — descriptive). What keeps routeman separate is the operation, not the raw material: the same concept can be modeled (comprehend), relevance-tagged (surfacing), or framed as a route (routeman). The user's own phrase "list them **as routes**" is exactly the safeguard — the prescriptive framing. This also refines, rather than contradicts, the earlier 19-00 inquiry's warning that "concepts aren't next-moves."

- **The movement-type taxonomy and the Route Map schema survive — confirming the change is unit-level, not output-level.** The 16 movement types (DEEPEN / DEVELOP / INVESTIGATE / …) become the per-route "how to engage this concept" attribute rather than the primary unit. Routeman's route schema (`cognitive_harness/routeman/references/routeman.md` §5.4) already pairs a **Direction** (the concept/target) with a **Movement Type** (the verb), so the proposal *promotes* the already-present Direction field to the identity's primary unit. This honors the user's "output type is good" premise.

- **What this finding does NOT do:** it does not rewrite the spec (the user explicitly sequenced "fix later"). It settles what routeman should do (meaning layer); the rewrite is a separate structural-layer inquiry that this understanding feeds.

## Finding

### Why we are even discussing this

A prior inquiry diagnosed routeman's current problem: its spec defines the discipline by its position in the reasoning loop ("the boundary operation that consumes the artifacts of a completed cognitive cycle") rather than by the cognitive operation itself. The diagnosis called this *identity-relational* and contrasted it with a matured discipline, sense-making, whose identity is *intrinsic* (defined purely by its operation, with no mention of where it runs). The user accepted that diagnosis and asked the natural next question: before fixing it, what *should* routeman do? They proposed an answer — routeman identifies concepts and lists them as routes — and asked whether it makes sense.

This inquiry evaluated that proposal at the meaning layer (what routeman IS), deliberately leaving the spec rewrite for later.

### 1. The proposal is the cure to the diagnosed disease

The diagnosis named the disease: routeman's identity is tied to a prior cycle's outputs, so it reads as something you can only run after a loop. The proposal's unit — the **concept** — is the cure, because a concept is intrinsic to *any* territory. "Identify the concepts in a territory" presupposes nothing about a prior cycle; it works at a project root, in a codebase, or after a reasoning cycle equally. So the shift from "next move from a completed cycle" (relational) to "concept in a territory" (intrinsic) is precisely the re-identification the diagnosis pointed toward. The proposal is not merely compatible with the diagnosis — it is its positive resolution.

There is also a subtle reason concept-first is more standalone than the current move-first framing. "Enumerate the next *moves*" is verb-first, and a "next move" quietly presupposes a trajectory you are already moving along — i.e., prior work to continue. "Identify the *concepts* worth engaging" is noun-first and presupposes no prior movement; it works whether or not anything came before. Noun-first is the more context-independent framing.

### 2. The load-bearing line: "as routes" keeps routeman from collapsing into its neighbors

The strongest objection to the proposal is that "identify concepts" is what other disciplines already do. This objection is correct about the *raw material* and wrong about the *operation* — and the distinction is the whole point.

The same concept can be the input to three different disciplines, each doing a different thing with it:
- **`/surfacing`** draws concepts (items) from a territory and tags each by **relevance** to a purpose — "does this bear on the question?" This is descriptive.
- **`/comprehend`** builds concepts into a **predictive model** of how an artifact works — "given input X, the output is Y because Z." This is descriptive (it predicts behavior).
- **`/routeman`** frames each concept as a **route** — "here is a thing you could move on next, of this kind, reachable under these conditions, and here's what to attend to if you do." This is prescriptive (it proposes directions).

So routeman is distinguished not by touching concepts but by what it does to them: it turns them into typed, prescriptive directions toward a goal, without choosing among them. The phrase "list them **as routes**" carries that entire prescriptive operation. Drop it — reduce routeman to "identify concepts" — and routeman becomes a concept-lister, which is `/surfacing` or `/comprehend`, not routeman. This is why the route-framing is the non-negotiable element.

This refines the earlier 19-00 inquiry (`devdocs/inquiries/2026-05-28_19-00__routeman_project_root_operation_meaning/finding.md`), which had warned that "concepts/features/directions are NOT next-moves — that's `/comprehend`'s territory." That warning was right about a *descriptive concept-model* (which is indeed `/comprehend`). It did not have the "as routes" framing available, and it predated the later finding that established routeman as a standalone discipline. With both, the synthesis is clean: **concepts are routeman's input-targets; concepts-as-routes are its prescriptive output.** The 19-00 warning is satisfied by the proposal's wording, not violated by it.

### 3. Why "concept" is the right word — and why it needs a boundary

The user's two justifications for "concept" both hold. It is **meta-enough**: it abstracts over features, ideas, questions, components, topics, and directions, so it doesn't smuggle in the loop-context that "next move" does. And it has **coverage**: anything in a territory worth engaging can be called a concept.

But meta-ness and coverage are also the term's risk. If *everything* is a concept, the word gives no guidance on what to enumerate — that is over-generalization, a failure in its own right. What rescues it is the other two elements of the triple: routeman doesn't identify all concepts, only those **engageable as directions toward the goal**. The goal provides the bias; the route-framing provides the actionable edge. So "concept" is the correct unit term *inside the triple*, and the eventual identity statement should bind it with a short gloss so a future reader doesn't read "concept" as "any noun." Designing that exact gloss is a structural-layer task and is out of scope here.

### 4. What stays the same

Because the user accepts the Route Map output as good, it matters that this re-identification doesn't disturb it. It doesn't. Routeman's route schema already records a **Direction** (the human-readable route title — effectively the concept being pointed at) alongside a **Movement Type** (the verb — DEEPEN, DEVELOP, INVESTIGATE, …). The proposal promotes the Direction (concept) to the identity's primary unit and demotes the Movement Type to a per-route attribute ("how to engage this concept"). The 16-type taxonomy survives in that role; the schema is unchanged. The change is to what routeman's *unit of work* IS, not to what it *outputs*.

### 5. How the inquiry proved the three elements are each necessary

Rather than assert the three-element structure, the inquiry tested identity statements that each drop one element, and each failed in a distinct, structural way:
- An identity that keeps only "identify concepts" (drops the route-framing) collapses into descriptive concept-listing — the `/comprehend` / `/surfacing` territory.
- An identity that says "list all concepts as routes" (drops the goal-bias) over-generalizes — no discrimination about what to enumerate.
- An identity that keeps the current "next moves" (concept demoted, move-first) stays subtly relational — it presupposes prior work to move on.

Each failure isolates one element as load-bearing. Together they confirm that concept + route-framing + goal-bias must travel as a unit — which is the inquiry's central structural result.

## Inherited Commitments Re-test

This inquiry declared a Synthesis Trigger consuming three priors. Each inherited commitment is re-tested.

| Commitment (and source) | Re-test status | Evidence |
|---|---|---|
| **Routeman's identity should be intrinsic, not relational** — the prior diagnosis (`devdocs/inquiries/2026-05-29_01-11__routeman_current_problem_diagnosis/finding.md`) | **RE-TESTED → AFFIRMED + FULFILLED** | "Concept in a territory" is intrinsic (territory + goal exist in any context); it is the positive form of the diagnosed fix. This inquiry produces the cure the diagnosis named. |
| **Routeman is standalone + domain-agnostic** — the standalone-identity inquiry (`devdocs/inquiries/2026-05-28_20-35__routeman_identity_standalone_discipline_redo/finding.md`) | **RE-TESTED → CONSISTENT** | "Concept" is domain-agnostic and territory-independent; the concept-as-route identity is the standalone-compatible unit, directly serving this commitment. |
| **"Concepts/features/directions are NOT next-moves; that's /comprehend's territory"** — the project-root inquiry (`devdocs/inquiries/2026-05-28_19-00__routeman_project_root_operation_meaning/finding.md`) | **RE-TESTED → REFINED (not re-violated)** | Correct about a descriptive concept-*model* (that is `/comprehend`). Refined: a *prescriptive* concept-*as-route* is routeman. The distinguishing element is the "as routes" framing, which 19-00 lacked and which the later standalone overturn enabled. The warning is honored by treating route-framing as load-bearing. |

## Next Actions

### MUST

(none — the user explicitly sequenced "fix later." This inquiry's deliverable is the meaning-layer understanding; no action is forced.)

### COULD

- **COULD-1 — Open the structural-layer inquiry that rewrites routeman's identity using this verdict.**
  - **What:** a `/MVLw` inquiry that rewrites `cognitive_harness/routeman/references/routeman.md` §1.1–§1.5 so the identity is "identify the concepts in a territory engageable as directions toward a goal, and frame each as a typed, prescriptive route, enumerating all without selecting" — moving the loop-role to a runner-owned context note (the structural fix the prior diagnosis flagged), demoting the 16-type taxonomy to a per-route attribute, and giving "concept" a tight gloss.
  - **Who:** the user.
  - **Gate:** condition-bound — when the user is ready to act on the fix the diagnosis + this understanding set up.
  - **Why:** this finding settles WHAT routeman should do; the rewrite is the next layer down. The understanding is sharp enough to aim it (the identity statement + the three load-bearing elements + the gloss need are all specified).

- **COULD-2 — Decide the gloss term for "concept" during the rewrite.**
  - **What:** choose how to bound "concept" in the spec so it doesn't read as "any noun" (e.g., the inline gloss "a thing in the territory engageable as a direction toward the goal").
  - **Who:** the user / the rewrite inquiry.
  - **Gate:** condition-bound — during COULD-1.
  - **Why:** the inquiry found "concept" is right but over-broad unbounded; the gloss is the boundary.
  - **Depends-on:** COULD-1. This COULD is GATED — it is part of the rewrite, not a standalone action.

### DEFERRED

(none.)

## Reasoning

The understanding emerged from generating candidate identity statements and testing them, plus deliberate foils so the answer was chosen rather than assumed.

- **SURVIVED (the verdict):** the merged concept-as-route identity. It survived prosecution on the collapse axis (does it stay distinct from `/comprehend`?) because the discriminator is grounded in the disciplines' documented output-types — `/comprehend` outputs a predictive *model* answering "how does this work?"; routeman outputs a *route map* answering "what could you do next toward the goal?" — not in any shared vocabulary. Two refinements were applied: state the "engageable toward the goal" gloss inline (closing a specification gap about which concepts qualify), and make the enumerate-all / lean-to-inclusion character explicit (so "concept worth engaging" isn't read as premature filtering, which would violate routeman's enumerate-everything principle).

- **KILLED — concept-only (drop the route-framing):** "routeman identifies the concepts in a territory relevant to a goal." Collapses into descriptive concept-listing (`/surfacing` / `/comprehend`). Its failure is what proves the route-framing is load-bearing.

- **KILLED — goal-less (drop the goal-bias):** "routeman lists all the concepts in a territory as routes." Over-generalizes — no discrimination about what to enumerate. Its failure proves the goal-bias is load-bearing.

- **SUPERSEDED — move-first (the current shipping identity):** "enumerate the next moves from a state toward a goal." Not wrong, but verb-first quietly presupposes prior work to continue (the relational flavor the diagnosis flagged); concept-first is the more standalone framing. It is the thing being improved upon.

- **FOLDED — "from a state toward a goal":** a near-miss candidate that re-imported the relational word "state" (the diagnosed defect); fixed by using "territory."

A note on rigor: because this used thinking disciplines to evaluate another discipline's identity, the load-bearing distinction (routeman vs `/comprehend` vs `/surfacing`) was anchored in the disciplines' documented output-types and the project's discipline taxonomy — external, checkable references — rather than in the evaluating disciplines' own concepts, to avoid a self-confirming answer.

## Open Questions

### Refinement Triggers

- **If the structural rewrite (COULD-1) finds that "concept" cannot be glossed tightly enough to prevent the over-generalization reading,** the unit term may need replacing (candidates: "engageable", "direction-target", "thing-worth-routing") — the *structure* (a goal-bounded, route-framed unit) would survive even if the word "concept" doesn't.
- **If a later inquiry shows the movement-type taxonomy resists demotion to a per-route attribute** (e.g., some movement types only make sense at the cycle-boundary, not as ways-to-engage-a-concept), the "taxonomy survives unchanged" conclusion needs revisiting — though this is a structural/process-layer concern, not a meaning-layer one.

### Research Frontiers

- **Does the "concept-as-route" framing generalize to the other boundary discipline?** The backward-boundary slot (`/reflect`, currently non-active) might have an analogous "identity by operation, not loop-position" question. Out of scope here; flagged for whenever `/reflect` is revived.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
u said The sense-making contrast names the gap precisely: sense-making is identity-intrinsic (defines itself purely by the cognitive
  operation); routeman is identity-relational (defines itself by where it sits in the loop and what feeds it). Routeman's machinery is
  otherwise mature — it's specifically the identity that's immature.


we need to fix this but first lets increase our understanding about what routeman should do, 

we already know the output type , i think it is more or less good.  

routeman should identify  concepts and list them as routes.  concept is a good term bc it is meta enoguh and it has coverage. 

does this makes sense?
```

</details>
