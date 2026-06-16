---
status: active
model: claude-opus-4-8[1m]
effort: unknown
refines: devdocs/inquiries/2026-06-16_16-38__meaning_gap_vitality_axes_and_meta_booleans/finding.md
---
# Finding: The Meaning-Readiness Gauge — Consolidating the Meaning-Gaps Field + Its Vitality Rubric

## Changes from Prior

This finding **consolidates two priors** into one account of a single feature:

- `devdocs/inquiries/2026-06-16_16-10__meaning_layer_improvements_route_field/finding.md` — the **meaning-gaps field**.
- `devdocs/inquiries/2026-06-16_16-38__meaning_gap_vitality_axes_and_meta_booleans/finding.md` — the **vitality rubric** (this is the one named in `refines:`, since it already transitively refines `16-10`).

**Revision trigger:** Consolidation request — the user asked for one place that holds the whole feature, so a future reader or spec-writer doesn't have to walk the chain.
**What's preserved:** everything both findings committed to — nothing is overturned. The field's shape and the rubric's procedure are carried intact.
**What's changed:** nothing in the priors is invalidated; the two are *joined*. The only frame that shifted (already, in `16-38`) is restated here: the rubric's glance-decidability is *conditional* on its usage-note traveling with it.
**What's new:** the **explicit join** that neither prior states — *the field uses the rubric to decide each gap's vitality* — and the framing of that join as a **uses-edge, not ownership** (the rubric is a general instrument the field consumes).
**Migration:** the two findings remain as the detailed records; this is the unified account to read first and to carry toward canon/spec.

## Question

Two prior findings, in a chain about the project's route-system, described two halves of one feature. Background a fresh reader needs:

- **routelister** is a discipline that turns a finished piece of work into a map of **routes** — typed onward directions ("deepen this," "build that," "consolidate these").
- A **meta-loop** is the orchestration layer (a person, for now) that reads the route-map and chooses what to do next.
- The first prior added a **meaning-gaps field**: on routes that *build* (DEVELOP) or *aggregate* (CONSOLIDATE), the route can list the parts of its target concept that aren't yet well-enough understood to build on — and rate how much each matters.
- The second prior answered *how* that rating is decided.

**The consolidation question (from `_branch.md`):** merge these two findings into one coherent account of the single feature — the field plus its rating procedure — without flattening the load-bearing nuances, and without re-opening either's settled verdicts. The live openness was the output's *form* (a unified finding vs a canon doc vs a spec) and whether the two genuinely belong together.

## Finding Summary

- **The two findings are one feature, joined by a nesting relationship.** The field says *what to list and how much each gap matters*; the rubric says *how that "how much" is decided*. The rubric is the decision sub-procedure for the field's per-gap rating. They nest — this is a *join*, not a staple.

- **The unified feature is a route's readiness checklist with triage tiers** — informally, *a soft, triage-rated Definition-of-Ready*. On DEVELOP and CONSOLIDATE routes, it lists the target's under-understood **facets** (gaps) and tags each with a **vitality** of low / mid / high.

- **The join is a *uses*-relationship, not ownership.** The vitality rubric is the project's *general* severity logic (risk = impact × likelihood), re-pointed at a gap. The field **uses** that general rubric to rate its gaps; it does not own it or make it field-specific. The rubric stays independently reusable.

- **The field layer (what to list).** The gaps are descriptive **facets of the one target concept** ("the data-model aspect is underspecified"), **never sub-concept-identities** to route to separately. Each gap's vitality is a **per-gap** signal, distinct from the route's **per-route** Priority. The whole field is a **soft Definition-of-Ready**: it feeds the meta-loop's *develop-now-vs-deepen-first* choice and **never gates or decides**.

- **The rubric layer (how each gap is rated).** Vitality = the **risk of building on a wrong/unresolved understanding of the gap = impact × likelihood**, reusing the project's own severity vocabulary. Two axes — **Impact-if-wrong** (would the build come out wrong?) and **Likelihood-of-wrong** (is the gap genuinely ambiguous?) — plus a **deferability low-cap** (can you safely stub it?). Three glance yes/no questions; an impact-gates / likelihood-escalates / deferability-caps mapping.

- **The rubric stays lightweight only because a short usage-note travels with it** (this is load-bearing, not a caveat): the frame is *risk of building wrong*, not importance; impact's sub-signals are *weighed, not computed*; a *first-pass, possibly-wrong* rating is acceptable. Keep it to the three questions.

- **All four inherited commitments were re-tested, not just restated** (see the dedicated section). Three survive untouched; one — glance-decidability — survives *with a revised frame* (it is now explicitly conditional on the usage-note).

- **What the consolidation ADDS** (its reason to exist over a cross-reference): the explicit *uses* join. The field prior introduced a vitality without knowing how it's decided; the rubric prior supplied the decision without restating the field. Only the joined account says *the field uses the rubric to rate its gaps*.

## Finding

### Why this is one feature, told in two steps

This chain produced the field and the rubric in sequence, and it is tempting to read them as two separate ideas. They are not. The field needed *some* way to rate its gaps but did not say how; the rubric is a way to rate a gap's vitality but, on its own, has nothing to rate. Each is incomplete without the other. The honest picture is **one feature discovered in two steps** — and the consolidation's job is to state the relationship between them that neither finding states on its own.

That relationship is a **containment with a uses-edge**: a route carries a field; the field lists gaps; each gap has a vitality; the vitality is **decided by a rubric the field uses**. Read top to bottom: *field → gaps → vitality → rubric*.

### A name for the whole

Informally, the unified feature is **a soft, triage-rated Definition-of-Ready** for a route — a readiness checklist where each item (a meaning-gap) carries a triage tier (its vitality). "Triage" is the right intuition: a fast sort of items by how urgently each needs attention, with a "can wait" tier. (One can call the whole a "meaning-readiness gauge," but prefer the checklist framing — and note that the rubric *rates how urgent a gap is to resolve*; it does not "measure" a gap as if the gap were a thing. The gaps stay descriptive — see the re-test below.)

### The field layer — what to list

The first prior settled the container. Carried intact:

- **Scope: DEVELOP and CONSOLIDATE routes.** These are the route-types that *consume* meaning-readiness — you can't cleanly build or aggregate an under-understood thing. The meaning-*building* route-types (DEEPEN, INVESTIGATE-FRONTIER) *create* readiness, so a "deepen first" field on them would be circular. (PURSUE-SEED is a plausible later extension.)

- **The items are gaps, not identities.** This is the load-bearing constraint and it is *carried, not softened*. The items are descriptive **facets of the one target concept** — "the X aspect is unclear," "the Y interaction is unspecified." They are **not** a list of separate sub-concepts that are, or will become, their own routes. routelister's identity forbids a field whose value is "a different concept-identity," and forbids recording that one concept depends on another; descriptive facets of the single target stay *within* that one concept, which is allowed. When a gap is later deepened, the follow-through is handled by **re-running the route-map** (the gap gets marked closed), never by the field growing edges to other routes.

- **Vitality is per-gap; Priority is per-route.** The route already carries a Priority (how salient the whole route is). Vitality is finer: of *this target's* gaps, which matter most. The finer grain is what lets the meta-loop deepen the high-vitality gaps first and accept the low ones — prioritized, partial readiness rather than all-or-nothing.

- **It is a soft Definition-of-Ready.** The field *describes* the gaps and how vital each is; the meta-loop *decides* whether and what to deepen. It is a checklist the meta-loop consults, never a gate it must pass. A hard gate would make routelister *decide*, which it must not.

### The rubric layer — how each gap's vitality is decided

The second prior answered the field's open question — *how is low/mid/high decided?* — and the answer is **the project's own severity logic, re-pointed at a gap**, not a new invention. This is why the join is a *uses*-edge: the rubric below is general; the field is one consumer of it.

Vitality is the **risk of building on a wrong or unresolved understanding of the gap**, and risk, domain-agnostically, is **impact × likelihood**:

- **Axis 1 — Impact-if-wrong.** *If this gap stays unresolved or you guess it wrong, would the build come out structurally wrong or need significant rework?* (This is the Structural Critique discipline's existing purpose-fitness test, re-pointed from a defect to a gap.) Its sub-signals — how much resolving the gap constrains other parts, and how costly a wrong build is to undo — are **weighed, not computed**: you sense whether the build leans on this gap, you do not trace a dependency graph.

- **Axis 2 — Likelihood-of-wrong.** *Are there multiple genuinely-different plausible readings of this gap, or one obvious one?* (This is the Structural Articulation discipline's ambiguity signal.) Many readings → likely to misread.

- **Deferability — a low-cap, not a third axis.** *Can you safely stub or placeholder this gap and resolve it after building?* A clear YES caps vitality at **low**, regardless of the axes. The word **"safely"** is load-bearing: if a wrong stub would silently corrupt the build, the gap is *not* safely stubbable, so the cap does not fire.

**Three glance yes/no questions** (impact; likelihood; deferability), composed by an **impact-gates / likelihood-escalates / deferability-caps** mapping: LOW if impact is NO *or* deferability is YES; MID if impact is YES but the reading is clear; HIGH if impact is YES *and* the gap is genuinely ambiguous (and not deferable). All eight combinations are covered.

**The usage-note that keeps it lightweight (load-bearing, carried in full):** the rubric stays glance-decidable *only if* it is used with three understandings — (i) the frame is *risk of building wrong*, not importance (this is what makes likelihood belong rather than look like foreign difficulty); (ii) impact's sub-signals are *weighed, not computed*; (iii) a *first-pass, low-confidence, possibly-wrong* rating is acceptable (a mis-rating only nudges the meta-loop; it does not gate). And keep it to the **three questions** — promoting the sub-signals into their own questions turns a glance into a checklist and the feature stops being worth its cost.

### The join — and why it is a *uses*-edge, not ownership

The rubric is the project's general severity vocabulary re-pointed; it can rate *any* gap, and in principle any risk. So presenting it "inside" the field must not imply the field *owns* it. The accurate relationship is: **the meaning-gaps field uses a general triage rubric to decide each gap's vitality.** Two consequences, both worth stating in the spec when this is written up: the rubric should be **presented as general** (it rates a gap; this field is one consumer), and it may eventually live as **its own reusable sub-spec** that the field references, once a second consumer appears.

Vitality is therefore stated **once**: its *role* (a per-gap attribute, distinct from Priority) belongs to the field layer; *how its value is decided* belongs to the rubric layer. The two layers meet only at that one slot — which is exactly why they nest cleanly and why there is no contradiction to reconcile, only a join to make explicit.

## Inherited Commitments Re-test

This finding consolidates two priors (Synthesis Trigger). Each commitment was pressed against the merge, not restated.

- **Commitment: the gaps are descriptive facets, NOT sub-concept-identities (the "gaps-not-identities" reframe).**
  - **Source:** `16-10` finding, §2.
  - **Re-test status: RE-TESTED — commitment confirmed.** **Evidence:** placing the rubric beside the field could tempt reading gaps as buildable sub-things, but the rubric rates a *gap's* vitality where the impact question asks about *the build's* correctness — nothing in it converts a gap into an identity or an inter-concept edge. The reframe survives untouched.

- **Commitment: the field is a soft Definition-of-Ready that feeds the meta-loop's choice and never gates.**
  - **Source:** `16-10` finding, §2–§3.
  - **Re-test status: RE-TESTED — commitment confirmed.** **Evidence:** the rubric "decides" a vitality value, which could read as a gate, but `16-38` is explicit that a rating "only nudges the meta-loop; it does not gate." The rubric is a perception aid feeding a choice — which *is* the soft Definition-of-Ready.

- **Commitment: vitality is per-gap and distinct from the route's per-route Priority.**
  - **Source:** `16-10` finding, §4.
  - **Re-test status: RE-TESTED — commitment confirmed.** **Evidence:** the rubric never references Priority; it rates a gap's risk. Vitality stays per-gap, Priority stays per-route. Placing them in one account did not blur them (they are stated at different layers).

- **Commitment: the rubric's glance-decidability holds only if the usage-note travels with it.**
  - **Source:** `16-38` finding, Inherited Commitments Re-test (where it was itself a "confirmed but frame revised" outcome).
  - **Re-test status: RE-TESTED — commitment confirmed, frame preserved-and-restated.** **Evidence:** the live consolidation risk is that a "clean" merged account drops the usage-note as a caveat. The structural fact from `16-38` stands: without "sub-signals weighed-not-computed" and "a first-pass answer is acceptable," a conscientious rater over-analyzes and the lightness breaks. So this finding carries the usage-note as **load-bearing prose** (in the rubric layer above), and the glance-decidability claim is stated as *conditional* on it — not flattened to an unconditional "it's lightweight."

*Pattern-note: three confirmed-untouched, one confirmed-with-frame-restated. The merge did not silently absorb the inheritance — the one conditional frame (glance-decidability) is explicitly carried as conditional, and the "different-notions-of-vitality" counter was tested structurally (both priors mean the same quantity by "vitality": the risk of building wrong = how vital the gap is to close before building), which is what makes the nest genuine rather than forced.*

## Next Actions

### MUST

- **What:** Write the unified feature into its spec home as ONE unit — the meaning-gaps field (scope, gaps-not-identities, per-gap vitality distinct from Priority, soft Definition-of-Ready) plus its nested vitality rubric (two axes, deferability cap, three booleans, mapping, the usage-note, the ≤3-question bound). **Container settled** (see the resolved container item below): store it as a labeled `Meaning-gaps:` sub-block inside the existing **Guidance field** (`- <gap> — [low|mid|high] — <why>`), **not** a dedicated schema field. **Authoring mechanism settled** by `devdocs/inquiries/2026-06-16_18-44__meaning_gaps_population_mechanism/finding.md`: routelister produces the gaps as a by-product of the **frame step** — *the gaps are the itemized reasons a route's Confidence rating is less than full* — named and rated in one glance, first-pass only (no `/decompose`), with a per-route fallback (full rated list → bare "meaning-unready" flag → nothing).
  **Who:** a routelister / route-system spec edit — `cognitive_harness/routelister/references/routelister.md` (§3.3 frame + §5.2 Guidance) + a short promotion-rule note.
  **Gate:** condition-bound — at the next route-system spec edit. **The feature's design is now complete** (container + authoring mechanism both settled), so this MUST can proceed end-to-end.
  **Why:** until it lands in the spec the meta-loop consults, this is an account, not a capability.

### COULD

- **What:** Distill the chain (the `2026-06-12` → `2026-06-14` → `16-10` → `16-38` → this consolidation findings) into a single self-contained canon document on the meaning-readiness feature.
  **Who:** a canon-writing pass. **Gate:** condition-bound — when the chain is deemed stable enough to distill. **Why:** makes the feature usable without walking the inquiry trail. (Canon body must be self-contained — distilled prose, no `devdocs/inquiries` references in it.)
  **Depends-on:** MUST item "write the feature to spec." This COULD is GATED — do not act until the MUST resolves (the canon should distill the settled spec, not a moving target).

- **What:** Document the vitality rubric as its own reusable sub-spec that the field references (the uses-not-owns consequence).
  **Who:** a spec edit. **Gate:** condition-bound — when a *second* consumer of the rubric appears. **Why:** preserves the rubric's reusability without premature indirection.
  **Depends-on:** MUST item "write the feature to spec." OVERRIDE: adoption-ready independent of the MUST only if a second consumer already exists; otherwise GATED. Reason: with one consumer, the rubric lives inside the field's spec text; splitting it out early adds indirection for no gain.

- **What:** ~~Decide the container — a dedicated route-record field vs structured Guidance text.~~ **RESOLVED** by `devdocs/inquiries/2026-06-16_17-45__container_choice_field_vs_guidance_text/finding.md`: **structured Guidance text** — a labeled `Meaning-gaps:` sub-block (`- <gap> — [low|mid|high] — <why>`), **not** a dedicated field. Promote to a typed field only when a consumer needs *reliable structured or cross-route-aggregate extraction* (a deterministic / non-LLM parser, or a heavy cross-route aggregator) — an LLM meta-loop reading per-route prose never fires this, so text may be permanent. The inline `[vitality]` tag is load-bearing (human-readable + regex-extractable + keeps a later field-migration cheap); the convention must be documented in the spec (re-read each run = durability).
  **Who:** folds into the MUST (write the feature to spec). **Gate:** **resolved** — apply at spec-write time. **Why:** avoid premature schema growth; the parsimony call is grounded in routelister's compactness (it would flip for a parser-first schema).

### DEFERRED

- **What:** Develop the opportunity/unlock dual of vitality (a gap's vitality read as the *upside* of deepening rather than the *downside* of skipping).
  **Gate:** observable — if the meta-loop ever needs to rank gaps by what deepening unlocks rather than what skipping risks. **Why (if revived):** an upside-ordering surface; the risk framing already covers the present need.

- **What:** Mine accumulated vitality ratings across runs as calibration data (which gap-types reliably run high).
  **Gate:** research frontier — only as a separate multi-phase effort, if rating history accumulates enough to be worth mining. **Why (if revived):** could tune the rubric from its own history; excluded now because it would violate the lightweight constraint.

## Reasoning

**Why consolidate at all (vs leaving two cross-referenced findings).** The decisive point is that the single account *adds* something neither finding contains: the explicit statement that *the field uses the rubric to rate its gaps*. The field prior introduced a per-gap vitality but did not know how it is decided; the rubric prior supplied the decision procedure but did not restate the field it serves. A reader following the cross-reference reconstructs the join in their head; the consolidation states it. That, plus the single-source-of-truth the user asked for, is the consolidation's reason to exist — a pure summary would not have earned it.

**Why a nest, and why a *uses*-edge.** The strongest objection was that the rubric is a *general* severity tool, so nesting it "under" a specific field over-couples it. This is right about the generality and wrong about the coupling: the relationship is *uses*, not *owns*. The rubric is the project's severity vocabulary re-pointed; the field is one consumer. Stating it that way preserves both the nest (the field really does decide its gaps' vitality with this rubric) and the rubric's reusability (it is presented as general, and flagged for its own sub-spec later). The competing "keep them two findings" reading survives only at the *spec* level (the rubric may be its own section) — which is exactly what the reusable-sub-spec Next-Action preserves.

**Why "checklist / Definition-of-Ready" over "gauge."** "Gauge" is evocative but tempts a reading where a gap is *measured* — which brushes against the gaps-not-identities commitment (a measured thing sounds like an entity). The descriptive framing ("a soft, triage-rated Definition-of-Ready"; "rate how urgent a gap is to resolve") keeps the gap a description, not a thing. "Gauge" is kept only as loose metaphor.

**Significant rejections (carried from the priors, re-confirmed here):** items as sub-concept-identities (violates routelister's no-other-identity-as-a-field-value rule); a hard Definition-of-Ready gate (makes routelister decide); promoting the rubric's sub-signals into their own questions (breaks the lightweight bound); a weighted/continuous vitality score (the priors chose boolean-form). None re-opened.

## Open Questions

### Blocked

- **Does the feature work in practice — do two raters converge on a gap's vitality, and does the meta-loop actually consume low/mid/high as a develop-vs-deepen signal?** This is inherited from the rubric prior and remains unobservable until the meta-loop has a live consumer of vitality. The feature is justified by its design and its reuse of proven vocabulary; its real-world behavior is unverified. (This is the *feature's* open question, not the consolidation's — the consolidation itself is sound on the merge.)

### Research Frontiers

- **Vitality ratings as accumulated calibration data** (see DEFERRED) — no known lightweight path; deliberately out of scope.

### Refinement Triggers

- **If the rubric ever grows past three questions**, re-test the worth-it judgment — the feature earns its cost only at the three-question size.
- **If a genuinely high-impact gap is ever mis-capped to low by deferability**, re-examine the "safely" wording.
- **When a second consumer of the vitality rubric appears**, split it into its own reusable sub-spec (the uses-not-owns consequence).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i wan you to consolidate devdocs/inquiries/2026-06-16_16-10__meaning_layer_improvements_route_field/finding.md and devdocs/inquiries/2026-06-16_16-38__meaning_gap_vitality_axes_and_meta_booleans/finding.md into new inquiry, use full loop
```

</details>
