---
status: active
model: claude-opus-4-8
effort: unknown
impacted_by: devdocs/inquiries/2026-07-07_17-51__seed_extraction_is_generative_crossing_refinement/finding.md
---

> **Later refinement (2026-07-07):** the design-sketch's front step below (§4: *"surface candidate developments"*) is **corrected and specified** by the 17-51 finding (`devdocs/inquiries/2026-07-07_17-51__seed_extraction_is_generative_crossing_refinement/finding.md`): "surface" is a draw-from verb, but the step is **generative** — the candidates are not present in the source; they are made by **the crossing** (source claim × project anchor → one-to-many project-directed hypothesis-germs, via transfer/extrapolate/combine moves). The spec-build should read the front step as **GENERATE (the crossing)**, then anchor → gate (+ source-support) → grade → type → record as sketched. All other steps stand. (The 17-51 finding also adds a naming wrinkle to the open generator-vs-harvester decision: "generator" now half-fits the generative front end; "harvester" fits the whole.)

# Finding: Reframe the paper-harvest toward seeds — and define what a "seed" is

## Question

This project runs a **paper-harvest**: it reads academic papers one at a time and asks, for each, whether the paper delivers something to our **cognitive harness** — the set of thinking-disciplines (surfacing, sensemaking, critique, and so on) this project builds. Until now the harvest's headline question has been *"is this a breakthrough?"*, judged by a strict **import test** (a paper delivers something only if it NAMES a thing the harness does but never put into words, OR RESOLVES a genuine confusion; otherwise it merely confirms or decorates).

The user stepped back from the individual paper-dives and proposed a change of direction, in five parts:
1. **A critique:** using papers to search for *breakthroughs* is not useful.
2. **A reframe:** the goal should instead be to search papers for interesting developments and **seeds**.
3. **A constraint:** those seeds should relate to the concepts of our own project.
4. **A definitional ask:** define what a "seed" actually is.
5. **A build ask:** create a protocol called `seed_generator`.

This inquiry adjudicates the reframe, defines "seed," and designs the protocol in principle. It is deliberately **Meaning-first**: it settles what a seed *is* and whether the reframe is *right*, and sketches the protocol — but it does not write the protocol's full specification, because a specification built on an un-adjudicated reframe and an undefined term would be premature. The full spec is the sequenced next step, and this finding sets it up.

One stance governed the whole inquiry: **honesty in both directions.** Because this grades the user's own idea, the risk is two-sided — rubber-stamping the proposal to be agreeable, or reflexively defending the existing method. The inquiry did neither; where the proposal is right it says so plainly, and where it overstates it says that too.

## Finding Summary

- **The reframe is right, with one correction.** The user correctly diagnosed that the harvest's success-measure was mis-set: framed as "find breakthroughs," the recent run (papers 16–20) looks like a long failure, yet it was steadily producing **seeds** (papers 17 and 19 planted real ones), frame-confirmations, and useful contrasts. The value has been landing in seeds, not breakthroughs. **But** "searching for breakthroughs is useless" overshoots: it confuses the breakthrough *verdict* (usually "no") with the breakthrough *test* (the strict bar that makes a seed **credible**). The test is not the wrong goal — it is the right **quality-gate**. So: reframe the **goal** (from breakthrough-hunting to seed-harvesting) while **keeping the gate**.

- **A seed, defined.** A seed is an **under-developed idea, extracted from studying a source, anchored to a specific harness concept, that would change a future design decision if developed** — a germ whose payoff is real but deferred. Four properties: it is an *output* (a yield of study, not a starting-trigger), it is *anchored* to one of our concepts, it is *gated* (it must connect to something the harness doesn't already own), and its payoff is *deferred* (unlike a full import, which pays off now).

- **Seeds come in two grades.** LIVE (it clearly changes a future decision → **act on it**) and NASCENT (it is interesting and anchored and *might* matter later → **record and watch it**). The two grades are what let the harvest capture the user's "interesting developments" without flooding itself with pleasant-but-empty notes: the gate moves from *capture* to *act* — nascent seeds are captured and watched, but must mature to live before anything is built on them. Every nascent seed must carry a **maturation-trigger** (a specific condition under which it gets re-examined), or it becomes a dumping-ground.

- **"Seed" is already an overloaded word here — this matters.** Two existing disciplines already use "seed" to mean an *input*: the innovation discipline's seed is the trigger it generates *from*, and the paradigm-sweeper's "seed-block" is a launch-point for a downstream run. The harvest's seed is the opposite — an *output* germ. The new protocol produces the output kind. This is why the name `seed_generator` is slightly misleading (it reads like it makes the input kind); **seed_harvester** is recommended, though the name is the user's call.

- **The protocol is a formalization, not an invention.** The machinery to extract seeds already exists, scattered: the harvest's own "breakthrough-or-seed" fork, the route-lister that records onward directions, the "changes-a-future-decision" test, and an existing `docs/future-seed/` folder. `seed_generator` **consolidates** these into one named protocol, **reframes** the success-measure, and **keeps** the gate. It is real design work built on present-but-scattered parts.

- **The deepest point: the harvest was never failing — its scorecard was.** Read through the "breakthrough" lens, the recent dives look disappointing. Read through the "seed" lens, they were productive the whole time. The user's dissatisfaction correctly sensed a mismatch — but the mismatch was in the *measure*, not the *work*. (Honesty correction: breakthroughs were not useless or absent — the harvest found two real ones early. They are simply the rare top of the ladder, not the reliable middle. Re-center the scorecard on the reliable middle without pretending the peak never happened.)

## Finding

### Why this inquiry exists

The harvest is as much a calibration exercise as a reading exercise: it repeatedly tests whether a strict bar can tell "this teaches us something" from "this merely agrees with us." After a run of dives that mostly returned "not a breakthrough," the natural question is whether the *bar* is the problem or the *goal* is. The user proposed it's the goal. Adjudicating that — and, if it's right, defining the replacement and designing its tooling — is what this inquiry does.

### 1. The reframe: right, with one correction

**The true part, credited fully.** Look at what the harvest actually produced recently. The genuine imports were early. The recent stretch (papers 16 through 20) produced two real seeds (paper 17's and paper 19's, both for an un-built quality component), several frame-confirmations, several useful contrasts — and zero breakthroughs. If success is defined as "find a breakthrough," that stretch reads as failure. It wasn't failure; it was a different, quieter kind of yield. **The user is right that the success-measure mis-describes the work.**

**The overstated part, and the correction.** "Searching for breakthroughs is not useful" treats the breakthrough test as the *point* of the exercise. But the test isn't the point — it's the *filter*. Its job is to make a seed credible: paper 20's candidate seed was examined against the test and *collapsed* (it turned out the harness already owned the idea), while papers 17's and 19's *survived* it. Without that filter, the harvest would manufacture agreeable-sounding "seeds" to look productive — which is exactly the failure mode the whole method is built to prevent. So the test stays.

**The synthesis.** Change the **goal** (from hunting breakthroughs to harvesting seeds) and keep the **gate** (the import test becomes the seed-quality filter). "Breakthrough" is not discarded — it is demoted from *the objective* to *the top of a ladder*: a breakthrough is simply a seed that has already grown all the way into a new frame or practice.

### 2. What a seed is (the definition)

A **seed** is an under-developed idea, extracted from studying a source, anchored to a specific harness concept, that would change a future design decision if developed. It has four defining properties:

- **It is an output, not an input.** It is the *yield* of studying something — distinct from the two existing "seed" senses in this project, which are *inputs* (the innovation discipline's trigger, the paradigm-sweeper's launch-block). Getting this straight is the whole reason the definition is needed: the word already means two other things here.
- **It is anchored to a harness concept** — a specific canon frame, an un-built component, or an open design question. This is exactly the user's "seeds should relate to our concepts" constraint, made into a *requirement* rather than a hope: a seed that can't name its anchor isn't a seed.
- **It is gated.** It must connect to something the harness does not already own (the same test that governed the old breakthrough verdict, kept intact).
- **Its payoff is deferred.** This is what separates a seed from a full *import*. An import pays off now — it names or resolves something today. A seed pays off after development — it needs growing. Deferred payoff is the seed's signature.

**Two grades.** The user asked to capture "interesting developments and understanding," which is a looser net than "changes a decision." Rather than loosen the gate to fit that, the definition splits into two grades:

- **LIVE** — it clearly changes a future design decision the harness hasn't made yet. Action: **act** (develop it). Papers 17 and 19 planted live seeds.
- **NASCENT** — it is interesting, anchored, and might mature into a live seed, but doesn't clearly change a decision yet. Action: **record and watch**. (Paper 20 produced one of these — a single-data-point hypothesis worth watching.)

The two grades let the harvest capture interesting-but-not-yet-decisive material *without* dropping the gate. The gate simply moves from *capture* to *act*: nascent seeds are captured and watched; the gate applies before anything is built. **Crucial refinement:** every nascent seed must carry a **maturation-trigger** — a specific, checkable condition under which it gets re-examined for promotion to live (for example, "revisit if a Diagnosis discipline is scoped," or "revisit after three more fresh-territory papers"). Without a trigger, the nascent grade becomes a junk drawer and re-introduces, through the back door, the very flood the gate exists to prevent.

**Where the seed sits.** On the harvest's verdict-ladder, from strongest to weakest: breakthrough (a seed already grown into a new frame) > import (changes a decision now) > **live seed** (would change a future decision) > **nascent seed** (interesting, anchored, might mature) > confirming-plus (strengthens a frame we own) > mirror (illuminates by contrast) > confirming-nothing (decorative). The seed is the **germinal middle** — and it is the reliable middle the reframe re-centers on.

**Distinct, but family-linked.** Is a harvest-seed just an innovation-trigger that happened to come from a paper? No — they differ in direction (output yield vs input fuel), in testedness (a harvest-seed has passed a gate; an innovation-trigger can be a raw "maybe"), and in anchoring (a harvest-seed names its concept; a trigger floats free). But they are lifecycle-linked: when someone later develops a recorded harvest-seed, that seed *becomes* the innovation-trigger of the development run. Same object, later stage — the same handoff the paradigm-sweeper already makes into the innovation discipline. The resemblance is real and explained, not a reason to collapse the two.

### 3. A taxonomy of seeds (by what developing them requires)

Seeds are usefully typed by the **development-action** they imply — because that is what actually changes what you'd do next. Generalizing from the two seeds the harvest has produced (paper 17 = "measure this un-built component's accuracy as two separable things"; paper 19 = "compute this un-built component from a cheap proxy"), five kinds emerge, which cluster naturally into three families:

- **CREATE family — the BUILD-seed:** a component or discipline that isn't in the architecture yet should be built. Anchor: an architectural absence. (Example: "a Diagnosis discipline should exist.")
- **COMPLETE family — the MECHANISM-seed:** an already-named-but-un-built component needs its inner workings filled in. Anchor: that un-built component. Two flavors observed: *measure* (paper 17) and *compute* (paper 19).
- **MODIFY family — three lighter kinds** that change something already owned: the **FRAME-seed** (a new lens on an existing concept), the **REFINE-seed** (sharpen an existing spec's wording), and the **CONNECT-seed** (draw a link between two owned concepts).

The three MODIFY kinds are closer to each other than the CREATE and COMPLETE kinds are to anything — a point worth keeping honest rather than pretending all five are equally spaced. Whether MODIFY's three are top-level kinds or sub-flavors of one "modify" kind is a grain question for the full-spec dive to settle. (The measure/compute pair was deliberately kept as sub-flavors of MECHANISM rather than promoted to top-level kinds, applying the project's own anti-proliferation discipline — differentiate only where the finer category changes an action — to this taxonomy itself.)

Each kind is crossed with the two grades: a seed is, e.g., a *live mechanism-seed* (paper 17) or a *nascent frame-seed* (paper 20). The kind says *what development-action*; the grade says *act or watch*.

### 4. The protocol, in principle (a design-sketch, not the spec)

`seed_generator` (recommended name: **seed_harvester**) borrows four structural precedents from the existing paradigm-sweeper discipline, which already solves a close-cousin problem:

- **Enumerate, never select** — it lists candidate seeds from a source; it never picks which to develop. That choice belongs to the human or the between-inquiry layer. This keeps it a discipline, not a decision-maker.
- **A capped, divergence-pinning record** — each seed is a short structured record, not an essay: enough to develop from, not the development itself.
- **The anchoring guard** — every seed must name its harness anchor; a candidate that can't is dropped. This makes "relate to our concepts" a required field, not advice.
- **A persistent cross-run index** — a `_seed.md` file (sibling to the existing `_route.md` and `_sweep.md`) that accumulates seeds across runs and never silently loses them.

A sketch of the **seed-record** and the **steps**:

```
seed:
  id · kind (build|mechanism|frame|refine|connect) · anchor (REQUIRED — the harness concept)
  grade (live|nascent) · action (what to do to develop it) · gate (what un-owned thing it connects to)
  maturation-trigger (REQUIRED for nascent) · source · confidence
```

Steps, in principle: receive a source (a paper, a concept, or the harness's own open questions) → surface candidate developments → anchor each to a concept (drop what can't anchor) → gate each (drop what the harness already owns) → grade each (live or nascent) → type each (kind + development-action) → record to the seed-record and the persistent index → enumerate, never select. The gate is the built-in honesty-check, applied in both directions (don't manufacture seeds; don't wave off real ones).

This is deliberately a sketch. The full section-by-section, step-by-step specification is the sequenced follow-on, now well-set-up because the reframe is settled and the term is defined.

### 5. The status, honestly

`seed_generator` is a **formalization with a reframe** — not a brand-new invention (the extracting machinery already exists, scattered across the harvest fork, the route-lister, the change-a-decision test, and the `docs/future-seed/` folder), and not a mere rename (it flips the success-measure, consolidates four scattered parts, and adds the two-grade definition and the taxonomy). Naming it accurately matters because the temptation, given the ask to "create a protocol," is to over-claim novelty; the honest description is consolidation-plus-reframe, which is real and useful work without being a from-scratch creation.

## Next Actions

### MUST

- **What:** Build the full `seed_generator`/`seed_harvester` specification (its sections, exact steps, record schema, and telemetry), consuming this finding's design-sketch and the three refinements (taxonomy grain, nascent maturation-trigger, honest emergent).
  - **Who:** a follow-on Structural+Process design dive (a `/traverse` or spec-build).
  - **Gate:** condition-bound — after the naming decision below resolves.
  - **Why:** this is the "create a protocol" ask; this inquiry delivered the meaning-layer and a sketch, and the spec is where the protocol actually becomes runnable.

- **What:** Decide the protocol's name — `seed_generator` (as proposed) vs `seed_harvester` (recommended, because "generator" collides with the two existing input-senses of "seed," and harvesting is literally what it does) vs `seed_prospector` / `seed_extractor`.
  - **Who:** the user.
  - **Gate:** before the full-spec build starts (the spec inherits the name).
  - **Why:** the name is load-bearing for the spec and is a genuine preference, not a technical fact.

### COULD

- **What:** Record the method-shift (harvest success = seed-yield, not breakthrough-count; gate retained) as a short note in the harvest's method documentation and/or a memory entry.
  - **Who:** the CONCLUDE memory-evaluation / a canon touch.
  - **Gate:** observable — when the reframe has guided one or more further dives without needing revision.
  - **Why:** a change to the harvest's success-measure affects every future dive; recording it once beats re-deriving it.
  - **Depends-on:** MUST item "the full-spec build" only loosely — this note is adoption-ready independently. OVERRIDE: the method-shift is usable now (it reframes how papers 21–22 are read) even before the spec exists.

- **What:** Run the remaining harvest papers (21, 22) under the reframe — scored on seed-yield with the two grades and the gate retained — as the first practical test of the new frame.
  - **Who:** the harvest (further `/traverse` dives).
  - **Gate:** condition-bound — when the harvest resumes.
  - **Why:** the reframe should be tested in practice; these dives are the first seed-scored runs.

### DEFERRED

- **What:** Design the exact promotion mechanism from nascent to live (what re-examines a nascent seed's maturation-trigger, and when).
  - **Gate:** condition-bound — fold into the full-spec build if it fits; otherwise revive when the first nascent seeds accumulate enough to need managing.
  - **Why (if revived):** prevents the nascent grade from silently growing into an unmanaged backlog.

## Reasoning

**Why this shape over the alternatives.** Two inversions were run at full strength and both were defeated, which is what gives the verdict its confidence:

- *"Drop the gate — it's the obstacle to capturing more."* Defeated, but productively. The gate is what separates a real seed from an agreeable-sounding one; dropping it would flood the harvest with empty notes. The inversion's *valid* worry — don't lose interesting-but-not-yet-decisive material — is answered not by dropping the gate but by adding the nascent grade. So the two-grade design is, precisely, what the inversion's pressure correctly produced.
- *"A harvest-seed is just an innovation-trigger from a paper — don't multiply concepts."* Defeated on direction, testedness, and anchoring, with the family resemblance explained by the lifecycle link (a harvest-seed later becomes an innovation-trigger). Distinct kind, related by handoff.

**Two file-checks changed the finding** (evidence it wasn't a rubber-stamp). First, the claim that the seed-machinery already exists scattered was checked against the filesystem — the `docs/future-seed/` folder does exist, with ten files including an open-directions index, which *strengthened* the "formalization, not invention" verdict. Second, the emergent claim "the harvest was always a seed-generator; breakthrough-hunting was the wrong lens" was checked against the record — and had to be *corrected*: the harvest found two real breakthroughs early (a generative one and a regulative one). So breakthrough-hunting was not pure error. The honest version re-centers the scorecard on the reliable middle (seeds) without pretending the rare peak (breakthroughs) never happened. This correction is the honesty-guard biting *against* the user's overstatement — the same discipline that elsewhere credits the user's true point.

**What was refined, not killed.** The taxonomy was pruned (the measure/compute pair collapsed to sub-flavors rather than becoming two top-level kinds) and its uneven grain flagged (the three "modify" kinds cluster) — applying the project's own anti-proliferation rule to its own output. The nascent grade gained a required maturation-trigger. None of these changed the core; each sharpened it.

## Open Questions

### Blocked

- **The full protocol specification** cannot be finalized until the name is chosen (the spec inherits it) — a small block, resolved by the MUST naming decision.

### Refinement Triggers

- **If the reframe fails in practice** — if running papers 21–22 as seed-harvests produces mostly nascent seeds that never mature, or if the two-grade scoring proves hard to apply consistently — revisit whether the nascent grade earns its keep, or whether the gate should sit at capture after all.
- **If "seed" overload causes confusion downstream** — if readers keep conflating the output-seed with the two input-senses despite the definition, that is the trigger to commit to the `seed_harvester` rename rather than merely recommending it.

### Monitoring

- **Whether the taxonomy's five kinds hold up** as more seeds accumulate — observable once the harvest has produced, say, ten or more seeds across kinds. If real seeds keep failing to fit, the taxonomy needs a revision; if the "modify" cluster never gets used, it can collapse to sub-flavors.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i think using academical papers for searching breakthroughs is not useful, i think our goal should have been searching them for interesting development and understanding seeds , and these seeds should be related to the concepts of our target project,  i think it would be really interesting to define what is a seed too, and create a protocol as  seed_generator, lets dive deep into this idea.
```

</details>
