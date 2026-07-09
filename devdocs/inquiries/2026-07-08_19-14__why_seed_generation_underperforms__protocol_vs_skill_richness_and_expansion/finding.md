---
status: active
model: claude-opus-4-8
effort: high
---
# Finding: Why seed-generation under-produced from the spider source — protocol vs skill, richness, and expansion

## Question

The project has a **seed-harvester** — a protocol (`cognitive_harness/protocols/seed_harvester.md`) that rides on top of a thinking-dive to extract *seeds* (small, gated, deferred-payoff idea-germs of the form "maybe our X could be Y") from a source. It kept under-producing. A controlled near-comparison put the problem in sharp relief: the **same** spider-web source idea yielded **1 seed** in one dive (`devdocs/inquiries/2026-07-08_13-46__SEED_HARVEST__paper_29_spider_web_thinking_space_traversal/`, the "thin" dive) and **7 seeds** in a re-harvest (`devdocs/inquiries/2026-07-08_15-46__SEED_HARVEST__spider_web_traversal_RICH_source_canon_grounded/`, the "rich" dive).

The user asked for a deep dive that (a) inspects both dives *including their archived discipline outputs* to understand mechanically why the thin dive missed the seeds the rich one found, and (b) evaluates four design hypotheses for fixing seed-generation:

- **H1** — seeding needs an extra surfacing of the project's *core files* so they sit in fresh context during generation.
- **H2** — being a *protocol* (composed onto a dive) rather than a standalone *skill* is itself limiting.
- **H3** — seed-generation should become its own skill built as *multiple surfacings + decompose + multiple innovations stacked* to force idea-coverage.
- **H4** — seed-generation needs an *expanding logic*: take something simple (a bare source idea) and enrich it into a fuller version, then look for seeds in the enriched material.

**Goal:** a diagnosis-and-design finding — the causal model of the miss, the verdict on the four hypotheses, and a shaped, applicable fix, with the fix's *form* (skill vs protocol-edit vs added-step) left open until the evidence settles it. The application of the fix is deferred to the user's approval.

## Finding Summary

- **The miss was structural, not effort.** The word counts only *rule out effort*: the thin dive's archived outputs total **13,651 words** → 1 seed, the rich dive's **10,343 words** → 7. More words, fewer seeds, so length is not the lever. The diagnosis itself rests on *reading* both dives' actual work (their anchor axes, cold-cell counts, and self-quotes), not on the counts.

- **The win is in quality, not only count — and it lands where the 2×2 predicts.** Reading the actual seed content: the rich dive's ceiling is genuinely higher (its centerpiece is *import-shaped* — the strongest grade — reorganizing the canon analogy family; the thin dive's machinery grid structurally could not reach it), and its middle tier is thicker (3–4 solid mechanism-seeds vs 1). It is *not* a uniform rout — two of the rich seven are honestly thin, and the thin dive's single seed is a respectable middle-tier one. The quality gap is specifically at the *ceiling* the canon-anchored axis reaches.

- **The diagnosis is a 2×2.** A seed is a *crossing* of a **claim** (something the source says) against an **anchor** (a project concept the claim might bear on). Two independent axes govern the crossing: how **rich** the claims are, and whether the anchors are drawn from the **project's canon model** or merely from the harness machinery. Seeds strike in only one quadrant: **rich claims × canon anchors**.

- **The thin dive sat in the empty quadrant.** Its anchor axis was nine *harness-machinery* facets (the disciplines, the gate, the index, the route-map plumbing) — its own notes say "no anchor outside the traversal machinery was surfaced." 69 of its 108 crossing-cells went cold → 1 seed. The rich dive moved **both** axes at once (richer claims from a fuller source write-up, and canon-model anchors from actually reading the project's canon files) → 7 seeds, in a **single** generation pass.

- **The root cause is operator-salience bias.** Whoever runs a harvest is *operating the harness*, so the machinery fills their working context and machinery-anchors feel like the obvious anchors. The fix works precisely by **forcing the canon model into fresh context** to counteract that pull — which is why it must be an active surfacing step, not a passive reminder.

- **The four hypotheses split two-and-two.** The two that name a **cause** are confirmed: **H1** (surface core files — sharpened to *the canon-model files become the anchor axis*) and **H4** (expand the source). The two that name a **form** do not: **H2** (protocol-vs-skill) is not the cause — the rich dive fixed everything while staying a protocol; and **H3** (stacking multiple passes) is **undercut** — the rich dive got 7 seeds with a *single* generation pass, so pass-multiplication was not the lever.

- **The fix is one move, not two.** The two confirmed steps (canon-ground the anchors + expand the source) turn out to be a single **guided-expansion** operation: surface the canon model the source bears on, then interrogate the source against each canon facet ("what does this phenomenon say about *shape-definition*? about *memory*?"). The anchor axis supplies the very questions that make the expansion project-directed.

- **Recommended form: edit the protocol now; keep the skill in reserve.** Deliver the fix as ~12–15 lines of edits to `seed_harvester.md` (Form A). Build a standalone `generate_seeds` skill (Form B) only if the guided-expansion step later proves too heavy for a protocol row — a real but currently unproven need.

- **One open frontier.** The machine can clearly do *project-directed* expansion (the thin dive already enumerated established facts about spiders; canon-anchors just aim that ability). Whether it can reach the *deepest* source-insights a human contributed by hand is untested — a question the fix's first live trial will answer.

## Finding

### Why this inquiry exists

The project builds "thinking dives" — structured multi-step reasoning passes over a source (a paper, a metaphor, an idea). Layered on top is a *seed-harvester*: a protocol that, as the dive runs, looks for **seeds** — small, anchored, gated idea-germs worth remembering for later, phrased as "maybe our X could be Y." Seeds are not finished ideas; they are deferred bets. The harvester's job is to generate them richly and then gate them so only real ones survive.

The harvester was under-producing — few seeds, and not always the best ones. The user then ran a natural experiment: the same spider-web idea, harvested twice, gave 1 seed the first time and 7 the second. That 1-vs-7 gap, from a *single fixed source*, is a near-controlled datum: whatever differed between the two dives is the lever on seed-generation. This inquiry reads both dives' internal work (not just their conclusions) to find that lever, and then uses it to design a fix.

A prior inquiry (`devdocs/inquiries/2026-07-08_07-20__one_seed_per_dive_diagnosis_protocol_or_execution/`) had already diagnosed a *different* symptom — every dive landing exactly one seed — and applied a fix (a "coverage table" that forces the dive to attempt many claim-crossings rather than settling for one). That fix is relevant here and is re-tested below, but the symptom is different: this inquiry is about the **richness and quantity** of generation, not the one-per-dive count.

### The core finding: a 2×2 of claim-richness × anchor-grounding

The mechanism becomes clear once you see what a seed actually *is*: a **crossing** of a **claim** against an **anchor**.

- A **claim** is something the source asserts or implies — for the spider, "a web transmits prey vibrations to a waiting spider," "a spider wraps prey to immobilize it," and so on.
- An **anchor** is a project concept the claim might illuminate — some part of *our* system that the claim could be a lesson for.

A seed is born when a claim genuinely says something about an anchor ("maybe our retrieval could work like vibration-localization"). The harvester lays claims along one axis and anchors along another, forming a grid of candidate crossings, and checks each cell for a live seed.

Two independent properties of that grid decide how many seeds it can yield:

1. **Claim-richness** — how much the source has been drawn out. A bare 14-word metaphor offers few, generic claims (web = external structure, web = trap). A fully elaborated write-up of the same phenomenon offers many, specific claims (capture-order matters; the spider defines the prey's shape by wrapping; borders are set by confidence).

2. **Anchor-grounding** — where the anchors come from. They can be drawn from the **harness machinery** (the plumbing that runs dives — the disciplines, the gate, the seed-index, the route-map) or from the **project's canon model** (the actual ideas the project is about — how a "traversal" of a thinking-space works, what a "meaningful" traversal is, the designed-but-unbuilt capabilities like memory and multi-head reasoning).

Cross these two axes and you get four quadrants. Seeds strike in **exactly one**: rich claims crossed against canon-model anchors. The other three are barren — generic claims produce only shallow crossings wherever they land, and canon-poor (machinery) anchors produce only "this reminds me of our plumbing" echoes however rich the claims.

### The two dives, mapped onto the 2×2

**The thin dive sat in the empty (generic-claim × machinery-anchor) quadrant.** Reading its archived work: its anchor axis was nine harness-machinery facets — the sweep step, the relevance-attribution step, the pipeline, the route-map, the gate, the index, and so on. Its own notes state plainly that "no anchor outside the traversal machinery was surfaced." Of its 108 grid-cells, 69 went cold (no plausible crossing). Result: 1 seed. Notably, the thin dive *did* expand its claims somewhat — it enumerated roughly twelve spider behaviors from general knowledge — so a shortage of claims was not its only problem. Its anchors were the binding constraint.

**The rich dive moved both axes.** Its claims were richer (the source had been elaborated into a much fuller account — some ~1,688 words versus the original handful). And crucially, its anchor axis was built from the **canon model**: eleven columns each tied to a real canon file describing how traversal works, with the machinery reduced to a single column. Its own notes contrast the two: "the thin dive's columns were harness *artifacts*; these are traversal *dynamics*," and "none [of the seven seeds] reachable from the thin dive's [machinery-only] axis." Result: 7 seeds — and, importantly, from a **single** generation pass, not from stacking many passes.

**Both axis-moves were necessary and they interact.** A rich source crossed against machinery anchors still yields only plumbing-echoes; generic claims crossed against canon anchors still go cold. You need both corners of the seed-bearing quadrant populated. One caution, stated honestly: this "both are necessary" conclusion is **inferred from the model**, not directly observed — we have two dives that each moved both axes together, not a clean four-cell experiment. The fix's first live trial is also the model's test (see Open Questions).

### The gap is quality, not only count

The 1-vs-7 figure is a count, and a count alone could mean the rich dive merely padded. Reading the actual seed *content* of both dives shows it did not — and shows exactly *where* the quality gap sits, which turns out to be precisely where the 2×2 predicts.

The rich dive's seven seeds are not uniform; they form a clear quality gradient:

- **Top tier — one seed the thin dive could not have reached.** The rich dive's centerpiece (its "shape-definition" seed) is *import-shaped* — the strongest grade in this system, reserved for a seed that names a true-but-unnamed structural fact. It adds a third member to the project's canon analogy-family (a "shape-definition" mode of traversal beside the two the canon already names). Crucially, this seed is *anchored in the canon analogy-family file* — a concept that was **never a column** in the thin dive's machinery-only grid. The thin dive could not have produced it; it had no cell for it.
- **Strong / solid middle — thicker than the thin dive's.** A second seed supplies a whole candidate signal-family for the project's *named-open* "what is meaningful traversal?" question; three more are concrete mechanisms filling *named-unbuilt* gaps in the project's roadmap (its multi-head, memory, and warming components). That is three-to-four solid mechanism-seeds against the thin dive's one.
- **Thin tail — honestly flagged.** Two of the seven are genuinely thin: one was sized *down* from an over-claimed "big seed" (its strong form killed as a category error), the other later re-scoped to "answers two of eight sub-questions." Pretending the rich yield was seven uniformly-strong seeds would inflate the gap.

And the thin dive's single seed (a topology-based retrieval mechanism) is **respectable** — a real, checkable, medium-confidence idea, roughly the quality of the rich dive's *middle* tier. It is not a weak seed; the thin dive's axis simply could not reach the *top* tier.

So the honest quality story is not "7 good beats 1 bad." It is: **canon-grounding raised the ceiling** (it reached an import-shaped, frame-level seed the machinery axis was structurally blind to) **and thickened the middle** (three-to-four solid mechanism-seeds versus one). The single place the rich dive decisively out-classes the thin dive on quality is exactly the place the 2×2 says it should be — the crossings that need a canon-model anchor to exist at all.

### The root cause: operator-salience bias

The 2×2 says *what* differed (the anchor axis). The deeper question is *why* the thin dive chose machinery anchors when nothing forced it to. The answer is a bias in the operator's attention: **whoever runs a harvest is operating the harness itself**, so the machinery is what fills their working context, and machinery-concepts feel like the natural anchors. Reading "thinking-space traversal" while running the traversal machinery, the obvious-seeming anchors are the machinery's own parts.

This matters for the fix's *shape*. Because the cause is a salience pull, the corrective cannot be a gentle reminder ("consider canon anchors too") — a reminder loses to what is already filling context. It must be an **active step that surfaces the canon model fresh**, physically putting those concepts into context so they can compete. The fix forces the canon model into view against the machinery's default salience.

### Verdict on the four hypotheses

The four hypotheses are not co-equal. Two name a **cause**; two name a **form**.

- **H1 (surface core files) — CONFIRMED, sharpened.** The user's instinct was right, and the mechanism is now precise: it is not "core files in fresh context" generically, it is that **the canon-model files become the anchor axis** of the crossing grid. That is exactly the axis the rich dive grounded and the thin dive did not.

- **H4 (expanding logic) — CONFIRMED, with a twist.** Expansion mattered — but with a wrinkle that opens the one real uncertainty: the rich dive's expansion was **authored by the user** (the ~1,688-word write-up was hand-written). So the confirmed fact is "expansion helps"; the open question is "can the machine expand a thin source itself?" (addressed below and in Open Questions).

- **H2 (protocol-vs-skill is limiting) — PARTIAL, not the cause.** The rich dive fixed everything *while remaining a protocol*. So the protocol form is not what held generation back; form matters only as a container for the real fix.

- **H3 (stack multiple passes for coverage) — UNDERCUT.** This is the one hypothesis the evidence actively pushes against. The rich dive reached 7 seeds with a **single** generation pass. Pass-multiplication was not the lever; anchor-composition was. Stacking might add a little at the margin, but it is not what separates 1 from 7 — and it should not be sold as the fix. (Guarding against a natural temptation: a powerful new "stacked" skill *sounds* impressive, but the evidence does not support building generation around stacking.)

### Relationship to the prior diagnosis: necessary but insufficient

The prior "one-seed-per-dive" fix (the coverage table that forces many claim-crossing attempts) was **applied and used** — the thin dive ran a full 108-cell table — and it *still* produced 1 seed. This tells us two things cleanly:

- The coverage-table fix governs **claim-density** (how many crossings you attempt). The thin dive satisfied it.
- **Anchor-sourcing** (where the anchors come from) is a **distinct, additional** gap that the coverage table never addressed. A big grid with the wrong anchor axis is still barren.

So the prior fix is a **prerequisite, not a competitor** — it is not undone, and this fix is additive to the same file. The prior diagnosis's implicit assumption that "a coverage table plus anchor-grounding is enough for rich generation" is **found invalid** for richness: the table was present and richness still failed, because the anchor *sourcing* was wrong.

### The fix: one guided-expansion move

The two confirmed steps — canon-ground the anchors, and expand the source — look like two separate additions, but the assembly reveals they are **one operation**. Here is the key observation: the thin dive already expanded its claims (its twelve spider behaviors) and still got 1 seed, so "expand the source generically" is not the missing piece. What the rich dive's expansion did differently was aim the elaboration at the *project's* concerns — it re-framed the spider as a model of *defining a shape by converging on it*, because the anchors it cared about were about traversal and definition.

That unifies the two steps: **surface the canon model the source bears on, then interrogate the source against each canon facet** — "what does spider-predation say about shape-definition? about the retrieval signal? about memory?" The anchor axis is not merely where claims land; it supplies the **questions** that generate project-directed claims in the first place. Expansion guided by canon anchors automatically lands in the seed-bearing quadrant.

Concretely, the fix is a small set of edits to `seed_harvester.md`:

1. **Repair the vague anchor instruction.** The protocol currently says surfacing "brings the project anchors into view" — unspecified, which is what let the machinery stand in. Repair it to: *build the anchor axis from the canon model the source bears on, surfaced fresh at dive start; the harness machinery is one column, never the whole axis.* (The "canon model the source bears on" phrasing generalizes the rule — a traversal-metaphor draws on the traversal-model files; a memory paper would draw on the memory canon instead. It is not hard-wired to one file set.)

2. **Add a named failure mode** — "machinery-only anchor axis": when the anchor columns are all plumbing and more than half the grid goes cold, rebuild the axis from the canon model. This is the enforcement surface; the repaired instruction alone would repeat the prior diagnosis's lesson that *text without an enforcement hook does not change behavior*.

3. **Add the guided-expansion pre-pass** for thin sources: when a source is too sparse to yield multiple distinct claims, interrogate it against each canon anchor to generate project-directed claims — with two guards. A **provenance guard**: every expanded claim must carry honest support (either established, checkable knowledge of the phenomenon, or an explicit "this is my elaboration" marker) — never fabricated behavior. And a **source-worth containment**: expand *toward* the canon anchors, and if no genuinely source-supported crossing emerges, the source is simply thin — stop, do not manufacture. (Without this containment, expansion becomes a machine for inflating any source into false richness.)

4. **A one-line note** recording operator-salience as the reason the fresh canon-surfacing must be an active step.

### Recommended form: edit the protocol now, hold the skill in reserve

Three forms could carry this fix: **(A)** edits to the existing protocol, **(B)** a new standalone `generate_seeds` skill, **(C)** a single added step. The recommendation is **Form A now, Form B deferred**:

- **Form A now**, because it is the cheapest change (~12–15 lines), consistent with how the prior fix was applied to the same file, and — decisively — the rich dive proved the cause is fixable *inside the protocol form*. This rests on evidence and cost, not on preferring the familiar.

- **Form B (the skill) deferred, not dismissed.** The user's skill idea has a real justification, but on **hosting/reuse** grounds, not on the stacking rationale (which the single-pass rich dive undercut). If the guided-expansion step later proves to need machinery heavier than a protocol row can carry — its own multi-step interrogation, its own reference doc, standalone reuse — then a skill becomes the right home. That is a genuine future option with a concrete trigger, simply not justified *yet*.

This resizes the user's proposal rather than accepting or rejecting it: the skill *form* stays live; only its *stacking* motivation is set aside.

### Expansion-generability: partly solved, partly open

The twist in H4 — that the rich expansion was human-authored — raises the fix's one real uncertainty: can the machine expand a thin source *itself*? The guided-expansion design answers this **partly**:

- **The solved part.** The mechanism is anchor-guided interrogation, and the thin dive already demonstrated the machine can enumerate a phenomenon's established facts. Canon-anchors simply aim that ability at the project. So project-*directed* expansion is within reach, contained by the provenance guard.

- **The open part.** The human write-up contained genuinely deep insights (capture-order matters; the spider defines a shape leg-first then fills it in; borders are set by confidence and left deliberately undecided). Whether mechanical interrogation reaches *those*, or only shallower project-directed claims, is untested. This is a frontier the fix's first live trial will probe, not something to claim as solved.

## Seeds

One seed passed the gate this dive. (This was a diagnosis dive, not a harvest, but the diagnosis yielded one gated frame-seed.)

- **Seed `diag-S1` — the anchor-axis-breadth principle may generalize beyond seed-generation.**
  - **Hypothesis:** maybe *any* generation step in the harness under-produces when its crossing/anchor axis is drawn from what is *salient* rather than from the *canon model the work bears on* — not just the seed-harvester, but the idea-generation discipline (`/innovate`) and the drawing-into-attention discipline (`/surfacing`) too.
  - **Type:** inspiration / frame.
  - **Anchor:** the generation disciplines generally (`/innovate`, `/surfacing`).
  - **Source + support:** this diagnosis — the 2×2 mechanism is stated for the seed-harvester, but nothing in it is specific to seeds; the operator-salience root is a general attention bias, not a harvester quirk.
  - **Door:** novelty (the principle is not stated project-wide) and deferred-payoff (it pays off later, when another generation step is examined for under-production).
  - **Grade:** NASCENT.
  - **Maturation trigger:** the next time a generation discipline appears to under-produce, or a deliberate audit of `/innovate`'s anchor-breadth is run.

*(Why only this one: the 2×2 itself is not a seed here — it pays off **now**, as the fix. Only its generalization to other disciplines is a deferred bet, so exactly one seed is recorded. It is also appended to the global seed index `devdocs/seeds/_seed.md`.)*

## Inherited Commitments Re-test

The inquiry's brief declared a Synthesis Trigger over three inherited commitments. Each is re-tested:

- **Commitment:** the prior "one-seed" fix-package (the coverage table + anchor-grounding rules) resolves the seed-generation shortfall.
  - **Source:** `devdocs/inquiries/2026-07-08_07-20__one_seed_per_dive_diagnosis_protocol_or_execution/finding.md` + its applied edits to `seed_harvester.md`.
  - **Re-test status:** **RE-TESTED — commitment confirmed but frame revised.** The coverage-table fix holds for what it targets (claim-density) and is not undone. But it governs a *different* dimension than richness: the thin dive used the full coverage table and still produced 1 seed. The frame revision is that "one-seed" and "under-rich" are two symptoms with two mechanisms; the prior fix is a **prerequisite** here, necessary but insufficient.
  - **Evidence:** the thin dive's archived innovation output ran a full 108-cell coverage table (the prior fix, in use) yet its anchor axis was machinery-only → 1 seed.

- **Commitment (implicit):** a coverage table plus anchor-grounding is *enough* for rich generation.
  - **Source:** the design assumption embedded in `seed_harvester.md`'s generation section.
  - **Re-test status:** **RE-TESTED — commitment found INVALID (for richness).** The table was present and richness still failed, because the anchor axis was sourced from the machinery, not the canon model. Anchor *sourcing* is a distinct requirement the commitment did not capture. This finding's fix adds that requirement.
  - **Evidence:** the same 108-cell-table-yet-1-seed datum; the rich dive's 7 seeds from a canon-grounded axis with no change to the table mechanism.

- **Commitment:** the two dives' own claim that the anchor axis was the differentiator.
  - **Source:** both dives' archived surfacing/innovation outputs.
  - **Re-test status:** **RE-TESTED — commitment confirmed but sized.** Verified against both docarchives (the machinery-axis vs canon-axis contrast is stated in each dive's own words). Sized: the anchor axis is the *proximate, self-witnessed* cause, but claim-expansion co-varied and is a genuine co-cause — the honest position is "both axes, interacting," with the relative weight left as a model inference pending the live trial.
  - **Evidence:** the thin dive's "no anchor outside the traversal machinery was surfaced"; the rich dive's "none reachable from the thin dive's axis."

## Next Actions

### MUST

- **Apply the fix to `seed_harvester.md` (Form A).**
  - **What:** make the four edits described in "The fix" above — repair the §6 anchor instruction to canon-ground the axis ("the canon model the source bears on, surfaced fresh; machinery is one column"); add the §9 "machinery-only anchor axis" failure mode; add the §6 guided-expansion pre-pass with the provenance guard and the source-worth containment; add the operator-salience note.
  - **Who:** a follow-on editing pass over `cognitive_harness/protocols/seed_harvester.md`.
  - **Gate:** **user-gated** — draft the edits ready-to-apply and get the user's approval before writing, following the precedent set by the prior (07-20) diagnosis's fix-application.
  - **Why:** encodes both confirmed causes as one guided-expansion move with enforcement surfaces, so future harvests build canon-grounded anchor axes by default rather than defaulting to machinery.

### COULD

- **Record the nascent seed in the global index.**
  - **What:** append `diag-S1` (the anchor-axis-breadth generalization) to `devdocs/seeds/_seed.md`.
  - **Who:** a one-line index append.
  - **Gate:** observable — do it alongside publishing this finding.
  - **Why:** makes the generalization findable when another generation discipline is later examined.

### DEFERRED

- **Build the standalone `generate_seeds` skill (Form B).**
  - **What:** re-home the guided-expansion + canon-surfacing + gate as a standalone skill with its own reference.
  - **Gate:** revival trigger — the guided-expansion pre-pass, once applied under Form A, *repeatedly* needs more than one interrogation pass or its own reference to work (i.e., outgrows a protocol row), observed over the first live trial plus subsequent harvests.
  - **Why (if revived):** gives expansion + canon-grounding first-class homes and standalone reuse — justified on hosting/reuse grounds, once the need is demonstrated.

- **Audit `/innovate` and `/surfacing` for the same anchor-breadth gap** (the `diag-S1` seed's development).
  - **Gate:** revival trigger — a generation discipline appears to under-produce, or a deliberate anchor-breadth audit is scheduled.
  - **Why (if revived):** tests whether the operator-salience/anchor-breadth mechanism is a project-wide generation principle, not a seed-harvester quirk.

## Reasoning

The diagnosis was reached by reading both dives' *archived internal outputs*, not their summaries — the word-count inversion (13,651 → 1 vs 10,343 → 7) was the datum that ruled out effort and forced a structural explanation. The gate on the diagnosis (the Critique step) prosecuted every load-bearing claim; seven candidates survived, four with material refinements, none killed. The bite was in the refinements, not in demolition — the candidates entered evidence-grounded, so the gate's work was sharpening and honest-labeling.

- **The 2×2 (the diagnosis) — survived, refined.** The strongest objection: it is a model fit to one source (two dives) that co-varied on both axes, so "both necessary" is an untested counterfactual. Held because it is the best fit and self-witnessed in both dives' own words; refined by labeling "both necessary" as model-inferred, and by extracting a falsifiable prediction (canon-anchors crossed against thin generic claims should yield well under 7 — the live trial tests it).

- **The guided-expansion unification — survived, refined.** The objection: it is elegant and its main support is that *this very inquiry* used guided expansion (self-referential). Held because it also rests on a non-circular fact — the thin dive's generic expansion got 1 seed, independently showing generic expansion is not the lever. Refined to a design *hypothesis* whose confirmation waits on the live trial, with the residual (deep human insights may not be mechanically reachable) kept prominent so the elegance does not oversell it.

- **Canon-grounding the anchors (fix step 1) — survived, refined.** The objection: over-fit to a traversal-metaphor; a psychology paper bears on different canon. Refined by generalizing the rule to "the canon model *the source bears on*," so the fix is not hard-wired to the traversal files.

- **Expanding thin sources (fix step 2) — survived, refined.** The objection: expansion is a manufacturing engine — you can inflate anything into more words. Refined by adding the source-worth containment (expand toward canon anchors; if nothing source-supported emerges, stop) on top of the provenance guard.

- **H3-undercut — survived.** The objection: maybe stacking would have added seeds beyond 7. Held: the claim is only that stacking is not the *primary* lever for the 1-vs-7 gap, which the single-pass rich dive settles; the honest caveat (stacking may add at the margin) is kept.

- **The form recommendation — survived.** The objection: deferring the skill is status-quo bias. Held after testing: the deferral rests on the rich dive's in-form proof plus cost plus the undercut stacking rationale — not on protecting the existing form; and the skill is deferred with a concrete revival trigger, not killed.

- **Expansion-generability ("partly solved") — survived.** The objection: "partly solved" is a forecast, not a result. Held as an honestly-labeled split — the project-direction half argued from a real fact (the thin dive's enumeration), the depth half flagged open.

- **The backstop found the root.** Asking "what does the diagnosis miss?" surfaced operator-salience bias as the layer beneath "the protocol under-specifies the anchors" — the *why* behind the machinery default — which in turn explains why the corrective must be an active surfacing step.

The guard ran both ways throughout: against inflation (H3 kept undercut; the elegant unification not over-graded; the skill not adopted on enthusiasm) and against deflation (the fix is real and applicable; the skill resized rather than dismissed).

## Open Questions

### Monitoring

- **The 2×2's falsifiable prediction.** When the fix is trialed, a thin source given canon-grounded anchors but only generic (un-expanded) claims should yield well under 7 seeds. If it yields ~7, then claim-expansion was not necessary and the model is anchor-only — observable at the first live trial.

### Research Frontiers

- **Expansion depth.** Can anchor-guided interrogation reach the deepest source-insights (the kind the human write-up contributed — capture-order, define-then-fill, confidence-set borders), or only shallower project-directed claims? No known path but the live trial; requires running a fresh thin source through the fixed protocol and comparing the machine's expansion against a human elaboration of the same source.

### Refinement Triggers

- **The form decision (Form A now) re-opens** on one specific, named condition: the guided-expansion pre-pass, in practice, *repeatedly needs more than a single interrogation pass or its own reference doc* to work. That is the blocking feature — if it is neutralized (expansion stays a light single pass), Form A stands; if it fails (expansion needs multi-pass machinery), Form B (the skill) revives. Not "if circumstances change" — specifically on expansion outgrowing a protocol row.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
okay now lets get back to our previous issue of seed protocol failing to generating things in quantiy and quality both, i want you to dive deep into this by inspecting both devdocs/inquiries/2026-07-08_15-46__SEED_HARVEST__spider_web_traversal_RICH_source_canon_grounded and devdocs/inquiries/2026-07-08_13-46__SEED_HARVEST__paper_29_spider_web_thinking_space_traversal inspect them both with their docarchive files as well and then understand why our seed protocol missed so great seeds from spider related source. my suspicion is seeding requires an extra surfacing of core files of the project so they are in fresh context of LLM, and current seed protocol is too limited and not rich and since it is a protocol and not standalone skill we are having this problem. maybe generate_seeds can be a skill? multiple surfacing and decompose and multiple innovations stacked to actaully generate idea coverage? and also as far as i understand seed generation needs some expanding logic which can take sth simple and expand it into it's enriched version and look for seeds there, this was also missing with spieder web source. lets dive deep in
```

</details>
