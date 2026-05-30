---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: Should Routelister Gain Do-Nothing / Low-Priority-Delay / High-Priority-Delay Engagement-Types? (Bloat Check)

## Question

**routelister** is a thinking discipline (still in design; spec not yet authored) that looks at any body of material and lists the *concepts* in it as *typed routes* — directions you could take toward a goal. Each route carries a three-axis type-signature: **grain** (project-wide or one manifestation), **kind** (teleological = advances the goal / epistemic = sharpens the understanding it rests on), and **engagement-type** (a verb for *how* to engage the concept — one of nine: DEEPEN, DEVELOP, PURSUE-SEED, INVESTIGATE-FRONTIER, REFINE, REFRAME, DIAGNOSE, TEST, CONSOLIDATE).

Reading the routelister walkthrough, the user asked whether the **engagement-type** axis should gain three more types:

1. a **do-nothing / don't-engage** type ("engagement-types that don't do anything");
2. a **low-priority delay** ("not important; can be neglected");
3. a **high-priority delay** ("important, but deferred until the surrounding concepts are more defined — what our next moves should keep in mind, unlike the low-priority one which doesn't matter and can be neglected").

The user gave a concrete motivation — *"if we have many routes and some are not important, these three might be useful"* — and two cautions: *"maybe these belong to the meta-loop, which makes the decision,"* and *"be careful — this might be bloat."* The goal: a careful per-item add / don't-add verdict that diagnoses the *category* (are these engagement-types at all?), names the *owning layer*, and actively tests the bloat hypothesis rather than rubber-stamping the addition — and, critically, does not just reject the idea but shows where the real need behind it is met.

## Finding Summary

- **The verdict is NO — don't add any of the three to routelister — and the user's bloat instinct is correct.** But the underlying need is real and is already served, so this is "no new types," not "no, your idea is wrong."

- **They fail the category test.** An engagement-type is a verb for *how to engage a concept*, and every one of the nine fits under a *kind* (it either advances the goal or sharpens understanding). The three proposals can't be placed under either kind — deferring, neglecting, or doing-nothing with a route neither advances the goal nor sharpens understanding. They describe a *disposition toward a route* (act / defer / neglect / drop), which is a different category from *how to engage the concept inside the route*.

- **Each one, decomposed, is either already covered or belongs to another layer:**
  - **do-nothing** — not a route-type. A concept that does nothing toward the goal isn't a route at all; it belongs in routelister's existing **Excluded section** (which records rejected candidates *with reasons*). A valid route you choose not to act on is just the meta-loop *not selecting* it — already implicit in routelister's "enumerate, don't select" stance.
  - **low-priority delay** — already covered. "Not important" is **Priority = LOW**, and routelister already tags every route with an attributive **Priority/Confidence** and even headlines the high-priority count. A new type would duplicate that field.
  - **high-priority delay** — splits four ways, none a new type: the importance is **Priority = HIGH**; the within-concept maturity is **Confidence / depth-signal**; the "until peripherals are defined" is a cross-concept *dependency* that routelister explicitly does not build; and the "defer it and keep it in mind for next moves" is a *selection* decision — the meta-loop's.

- **Not even a separate "disposition" axis.** The natural fallback — "fine, not engagement-types, but add a 4th axis (act/defer/neglect/drop)" — was tested and rejected: a disposition is a recommendation about what to *do*, which is soft selection. routelister is "not a selector"; a disposition axis would re-couple the perception layer to selection and re-import the very defect the routelister redesign removed.

- **The real triage need is already met.** routelister *annotates* (Priority, Confidence, depth-signal, and the Excluded section for non-routes); the meta-loop *decides* (defer the important-but-unripe, neglect the unimportant, drop the irrelevant, keep the rest in mind). This is the same perception→selection split the prior loop-harmony finding established — and the user's own hint ("maybe these belong to the meta-loop, which makes the decision") is exactly right.

- **A bonus connection:** the user's "high-priority delay — keep it in mind for next moves" is the concrete motivating case for the prior finding's **Gap B** — the meta-loop's deferred-but-watched state (its cross-cycle revisit/state-tracking), which is fed by routelister's Priority = HIGH annotation but lives in the meta-loop, not in routelister.

- **The only thing to actually change is documentation** — state that routelister's attributive Priority/Confidence is the perception-side input the meta-loop's triage reads. That belongs in routelister's loop-role section (the prior finding's Gap C), and it adds no new type.

## Finding

### Why we are asking this

routelister's design is settled across a long inquiry chain; the walkthrough is the document the structural spec will be authored from. While reading it, the user noticed that the engagement-type axis has exactly nine verbs and wondered whether it's missing some — specifically, ways to express "don't bother with this route," "this one's low-priority, skip it," and "this one matters but isn't ready yet." The worry is twofold: these might genuinely be missing, or they might be *bloat* — and, as the user themselves suspected, they might really belong to a different part of the system (the meta-loop, which makes decisions). This finding adjudicates that, carefully.

### The category test: what an engagement-type actually is

The cleanest way to decide whether something is an engagement-type is to check it against the axis's own structure. The engagement-type axis is *partitioned by kind*: every verb sits under either **teleological** (engaging the concept advances the goal) or **epistemic** (engaging the concept sharpens the understanding the goal rests on). DEEPEN and DEVELOP advance the goal; DIAGNOSE and REFINE sharpen understanding; and so on for all nine. The axis is, in effect, closed under "operations performed on a concept's content."

Now apply that test to the three proposals. Under which kind does "defer this route" fall? Deferring a route does not advance the goal, and it does not sharpen any understanding — it is *orthogonal* to the teleological/epistemic split. The same is true of "neglect this" and "do nothing with this." A value that cannot be placed under the axis's own partition is not a member of that axis. So the three are not engagement-types; they are a different category — a *disposition toward a route as a unit* (act it / defer it / neglect it / drop it), rather than a way of engaging the concept inside it.

This category test is itself a useful by-product: it's a reusable membership predicate for any future proposed engagement-type. If a candidate can't be placed under teleological or epistemic, it isn't one.

### What each proposal actually is

Rejecting them as engagement-types isn't enough; the careful answer traces what each one *is* and where it's handled.

**"do-nothing / don't-engage."** This isn't a route-type at all. A concept earns its place as a route only if engaging it advances or sharpens the goal. A concept where engaging does nothing toward the goal is, by definition, *not a route* — and routelister already has a home for it: the **Excluded section** of its output, which lists "notable candidate-concepts that were considered and rejected, with reasons — never silently dropped." That preserves exactly the information a "do-nothing route" would carry (this concept exists, here's why we're not pursuing it), without pretending it's a route. And for a concept that genuinely *is* a route but isn't worth acting on right now, "do-nothing" is simply the meta-loop *not selecting* it — which is already implicit in routelister's defining stance of enumerating all directions and choosing none.

**"low-priority delay."** This is already covered. "Not important / can be neglected" is just **Priority = LOW**, and routelister's design already gives every route an attributive **Priority/Confidence** tag (described in the walkthrough as "description, not choice") and even surfaces the high-priority count in the route-map's header. The "delay/neglect" half — the decision to actually skip it — is the meta-loop's. So a "low-priority-delay" engagement-type would do nothing but duplicate an existing field while miscategorizing the axis.

**"high-priority delay (until peripherals are more defined)."** This one feels the most substantive, so it deserves the closest look. It decomposes into four parts, and not one of them is a missing engagement-type:

- the *importance* is **Priority = HIGH** — an existing field;
- the *within-concept maturity* ("how ripe is this route itself") is already carried by **Confidence** and the **depth-signal** (which records whether a concept has been drilled and whether it has an unresolved divergence);
- the *cross-concept readiness* ("can't engage X until concept Y is defined") is an **inter-concept dependency** — and routelister explicitly does *not* build a dependency graph between concepts (the prior loop-harmony finding classified this as the dropped "Blocked-By" state);
- and the *"defer it and keep it in mind for next moves"* is a **scheduling / selection** decision — the meta-loop's job, by the architecture's founding rule that navigation perceives while the meta-loop chooses.

So "high-priority delay" isn't one missing type; it's a bundle of things that are either already perceived by routelister (importance, maturity) or belong to other layers (the excluded dependency graph; the meta-loop's deferral decision).

### Why not even a separate "disposition" axis

The strongest version of "add it somewhere" is: *don't* put them on the engagement-type axis (that would muddy it), but give routelister a **fourth axis** — a *disposition* (act / defer / neglect / drop) attached to each route. This is worth taking seriously, and it still fails — for a deeper reason than the category test.

A disposition is a *recommendation about what to do with a route*. That is a (soft) selection. routelister's identity is explicitly "not a selector," and the architecture's load-bearing rule is "Navigation sees; it does not choose" — the perception layer perceives, and the meta-loop (the loop-aware layer) decides. A disposition axis would make routelister emit choices, re-coupling perception to selection — which is exactly the loop-relativity defect the routelister redesign was built to remove. The *input* to a disposition (how salient is this route?) is legitimately routelister's, and it already exists as Priority/Confidence. The disposition *itself* is the meta-loop's. So the fourth-axis idea doesn't rescue the proposal; it just relocates it to where it already belongs.

### The real need is valid — and already served

None of this dismisses the user's actual concern. "We have many routes and some are not important" is a genuine *triage* problem, and a good system has to solve it. It already does, through a clean division of labor:

- **routelister annotates.** It tags each route's salience (**Priority**) and how well-formed it is (**Confidence**, **depth-signal**), routes non-routes into the **Excluded section** with reasons, and headlines the **high-priority count** in the map header.
- **the meta-loop decides.** Reading those annotations, it triages: defer the important-but-unripe, neglect the low-priority, drop the irrelevant, keep the important ones in mind for the next move.

This is the same *annotate → schedule* split as the prior loop-harmony finding's perception→selection boundary — reached here from an entirely independent direction (a proposed *vocabulary extension* rather than a *capability gap*), which is good corroboration that the boundary is the right one.

And there's a concrete payoff for the prior finding. The user's "high-priority delay — keep it in mind for next moves" is precisely the motivating case for that finding's **Gap B**: the meta-loop's *deferred-but-watched* state, tracked in its cross-cycle memory (the revisit/state-tracking operation that finding flagged as unspecified). routelister's Priority = HIGH annotation feeds it; the "keep in mind" state lives in the meta-loop. So this inquiry doesn't just reject three types — it pins down a real example of a gap the meta-loop spec still needs to fill.

### The one thing to actually change

Nothing should be added to routelister's types or axes. The single worthwhile follow-up is *documentation*: make explicit (in routelister's still-to-be-authored loop-role section — the prior finding's Gap C) that routelister's attributive Priority/Confidence is the perception-side signal the meta-loop's triage reads. That clarifies how the existing pieces connect; it does not extend the discipline.

## Inherited Commitments Re-test

This inquiry's `_branch.md` declared a Synthesis Trigger — its verdict turns on re-testing commitments from prior outputs. Each is re-tested below.

- **Commitment:** route-type = grain × kind × engagement-type, where the engagement-type axis is the nine concept-engagement verbs (the seven loop-control move-types were dropped).
  - **Source:** `devdocs/inquiries/2026-05-29_18-17__routelister_route_type_schema_reconciliation/finding.md`.
  - **Re-test status:** RE-TESTED.
  - **Evidence:** the category test ("an engagement-type must be partitionable by *kind*") operationalizes this commitment; the three proposals fail it (they can't be placed under teleological or epistemic), confirming the axis is the *how-to-engage verb* axis and not a disposition/priority axis.

- **Commitment:** "Navigation sees; it does not choose" — selection, priority-decisions, and scheduling belong to the meta-loop; loop-relative route-state (including the Blocked-By/dependency state) was dropped from routelister.
  - **Source:** `devdocs/inquiries/2026-05-30_08-14__routeman_loop_harmony_gaps_vs_routelister/finding.md`.
  - **Re-test status:** RE-TESTED — confirmed and reinforced.
  - **Evidence:** the whole verdict rests on this boundary (disposition = selection = meta-loop; the no-fourth-axis kill). "delay until peripherals defined" is the dropped Blocked-By / excluded inter-concept dependency; "keep it in mind" is the meta-loop's deferred-watched state (that finding's Gap B). The inquiry confirms the boundary from a second, independent direction and supplies a concrete motivating case for Gap B.

- **Commitment:** routelister is "not a selector" but tags an attributive Priority/Confidence; it is "not an inter-concept dependency-graph builder"; it has an Excluded section and a Map Header that carries the high-priority count.
  - **Source:** `docs/walkthrough.md` §4 and §6.1.
  - **Re-test status:** RE-TESTED (artifact-grounded).
  - **Evidence:** all verified present in the design — the attributive Priority/Confidence (§6.1 Attribution group), the Excluded section (§6.1), the Map Header high-priority count (§6.1), and the "not a selector" / "not a dependency-graph builder" exclusions (§4). It follows that "low-priority" duplicates the existing Priority field, "do-nothing" is the existing Excluded section, and the dependency part is explicitly out of scope.

All three priors re-tested with cited evidence; none inherited without re-test.

## Next Actions

### MUST

*(none — the verdict is "don't add"; no change to routelister's types or axes is required.)*

### COULD

- **What:** In routelister's loop-role section, state that the attributive Priority/Confidence is the perception-side input the meta-loop's triage reads (routelister annotates salience; the meta-loop decides defer/neglect/drop/keep-in-mind).
  - **Who:** the routelister structural spec (to be authored at `cognitive_harness/routelister/`).
  - **Gate:** condition-bound — when the routelister spec's loop-role section (the prior finding's Gap C) is authored.
  - **Why:** documents how the existing pieces connect, so a future reader doesn't re-propose priority/delay as routelister types; closes part of Gap C without extending the discipline.
  - **Depends-on:** the prior finding's Gap C (routelister loop-role section). This COULD is GATED — it lands inside that section when it's written.

### DEFERRED

- **What:** Specify the meta-loop's *deferred-but-watched* state (the "keep it in mind for next moves" state) as part of the meta-loop's cross-cycle revisit/state-tracking.
  - **Gate:** condition-bound — when the meta-loop spec's revisit operation (the prior finding's Gap B) is authored.
  - **Why (if revived):** the user's "high-priority delay" is the concrete motivating case for this state; specifying it gives the meta-loop a place to hold "important but not yet actionable" routes, fed by routelister's Priority = HIGH.

## Reasoning

The verdict survived a full adversarial pass in which the prosecution argued *for* adding the types (steelmanning the user's proposal), and each pro-addition case was rejected on structural grounds:

- **"They are engagement-types — an engagement-type is just what the route tells you to do, and do/defer/drop are things to do."** Rejected: the axis is partitioned by *kind*, and deferring a route can't be placed under teleological or epistemic (it neither advances the goal nor sharpens understanding). A value unplaceable in the axis's own partition is not a member of the axis.

- **"Make it a separate fourth 'disposition' axis instead."** Rejected: a disposition is a recommendation about what to do — a soft selection. A disposition axis would re-couple routelister's perception to selection, re-importing the loop-relativity defect the redesign removed. The disposition's *input* (salience) already exists as Priority; the disposition *itself* is the meta-loop's.

- **"Low-importance should be a first-class, visible type, not a buried attribute."** Rejected: routelister already surfaces priority first-class — the Map Header carries the high-priority count and every record carries Priority. The visibility need is a presentation property of an existing field, already met; it is not evidence for a new type.

- **"The triage need isn't fully served by the existing fields."** Mostly rejected — salience (Priority), maturity (Confidence/depth-signal), and exclusion (the Excluded section) are all already there — but one part *landed* and became a refinement: the "keep it in mind / deferred-but-watched" state is real, and it lives in the meta-loop's cross-cycle memory (the prior finding's Gap B), fed by routelister's Priority = HIGH. So the need is served, but by a meta-loop state, not by a routelister type.

- **"If there's a real need, add a real new dimension, not just documentation."** Rejected: adding a dimension re-imports the category error and the re-coupling; the capability the user wants (triage) already exists across routelister-perception and meta-loop-selection. What's missing is only the *statement* of the handoff, so documentation is the correct minimal change — and adding a dimension would be exactly the bloat the user warned against.

What survived and assembled: routelister *annotates* (Priority/Confidence/depth-signal + the Excluded section + the Map Header), the meta-loop *decides* (defer/neglect/drop/keep-in-mind), and the three proposals are dispositions the meta-loop makes from routelister's annotations — plus one excluded inter-concept dependency. The emergent value is that this reaches the same perception→selection boundary as the prior loop-harmony finding from an independent direction, and pins down a motivating case for that finding's Gap B.

A note on the central risk for this kind of inquiry: rejecting a user's proposal could easily be status-quo bias — defending the settled nine-verb design because it exists. That risk was explicitly audited. The rejection rests on grounds that predate this inquiry and are external to the design's self-justification: the definition of an engagement-type (partitionable by kind), the perception/selection boundary, and the *already-existing* Priority/Confidence, Excluded, and Map Header fields (verified directly against the walkthrough). And the verdict does not stop at "no" — it affirms the user's need is real, shows exactly where it's already served, and connects the strongest part of the proposal ("high-priority delay") to a concrete gap in the meta-loop. That is the opposite of a protective dismissal.

## Open Questions

### Blocked

- The documentation follow-up (the COULD) is blocked until routelister's structural spec — specifically its loop-role section (the prior finding's Gap C) — is authored. The sentence is specified here; only its placement waits.

### Refinement Triggers

- If a future proposed engagement-type *can* be placed under a *kind* (teleological or epistemic) yet still feels like a disposition/priority, the category test re-opens (it would mean the test's "partitionable by kind" predicate is necessary but not sufficient, and a sharper predicate is needed).
- If the meta-loop's triage turns out to need per-route data that only routelister can produce *and that isn't captured by Priority/Confidence/depth-signal*, the "the need is already served" conclusion re-opens for that data.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
first of all reread docs/walkthrough.md fully 

(note: it is intesresting but maybe these belong to meta loop or sth, whichi makes the decision. 
and one another thing is, why we dont have a engagement-types dont do anything? or low priorty delay , hihg priorty delay (e.g it is sth importnat, it is delayed till peripharals are more defined. and in this situtaion it differs from low priorty delay bc high priority delay is what our next moves should keep in mind while low priority one doesnt matter and can be neglected ) ? for example  if we have many routes and some are not importnat , these 3 engagement might useful.    )

what do you think about this part? we should have this or not ? be careful? this might be a bloat. So lets dive deep into this
```

</details>
