---
status: active
model: claude-opus-4-8[1m]
effort: max
---
# Finding: The Meaning-Gaps Population Mechanism — The Gaps Are the Reasons Behind a Route's Confidence

## Question

This resolves the one open piece that was keeping route **R1** of the consolidation finding (`devdocs/inquiries/2026-06-16_17-11__meaning_gaps_field_and_vitality_consolidated/finding.md`) at MED confidence: **how does routelister actually generate the meaning-gaps when it writes a route?** It also picks up an item the `2026-06-16_16-10` finding explicitly DEFERRED — "design the population mechanism... gated on when the field is adopted" — which adoption (R1) now trips.

Background a fresh reader needs. The **meaning-gaps field** lists, on a route that builds or aggregates (DEVELOP / CONSOLIDATE), the target concept's under-understood facets, each tagged a low/mid/high **vitality**; its design and container are settled. The **routelister** discipline writes each route through a **sweep → individuate → frame** process, where the *frame* step writes the route's fields — including a per-route **Confidence** rating (how well-formed the target is). The open question is the *authoring procedure*: a field with a format but no procedure for filling it is a passive slot, not a working capability. This is a **Process-layer** question (the steps routelister runs), not a re-opening of what the field IS or where it lives.

## Finding Summary

- **The mechanism is not a new pass — it extends routelister's existing framing step.** routelister already perceives the target concept when it frames a DEVELOP/CONSOLIDATE route; the gaps are a *by-product* of that perception, transcribed and rated, not separately generated.

- **The precise grounding (the load-bearing point): the meaning-gaps are the *itemized reasons* a route's Confidence rating is less than full.** Framing already assigns a Confidence to every route — a judgment of how well-formed the target is. To rate Confidence below "full," routelister must already perceive *why* the target isn't fully understood. Those reasons **are** the gaps. So the mechanism is anchored to a field routelister already writes, which is what makes it both a genuine *transcription* (not smuggled generation) and an *operative* procedure (not "notice stuff and write it down").

- **Generate and rate in one glance.** As each gap is perceived, routelister applies the three vitality booleans (from the `2026-06-16_16-38` rubric) in the same act — perceive → rate → write `- <gap> — [low|mid|high] — <why>`. This is correct because that rubric was *designed* to be glance-decidable; a separate rating pass would over-formalize a first-pass field.

- **Depth is first-pass, bounded from above.** The field is a prompt, not a contract (low-confidence by design), so the mechanism must NOT run a full `/decompose` — that would produce a high-confidence list misrepresenting the field, and re-perceive what framing already saw. `16-10`'s "mini-decompose" is honored only as "perceive the target's facets at framing depth." The systematic version *is* `/decompose`, downstream, which the field explicitly defers to — complementary, not competing.

- **It degrades gracefully, per route.** Emit the rated gap list (default) → if routelister can't confidently name gaps (low Confidence in the target), emit just the bare "meaning-unready" flag (the lighter form) → if it can't assess the target at all, emit nothing. This per-route ladder reuses the *same* Confidence judgment that produces the gaps.

- **Two different quality guards, kept distinct.** The per-route degradation above is one thing. "Are the first-pass lists *consistently* wrong across many routes, so the feature should be dropped?" is a separate, global, calibration-gated monitor (the efficacy question inherited from `16-38`) — not the per-route guard.

- **This makes the feature operative — it takes R1 from MED to HIGH.** With the authoring procedure anchored to the Confidence field, the spec can describe a capability, not a passive slot.

## Finding

### The mechanism: extend framing, don't add a pass

When routelister frames a DEVELOP or CONSOLIDATE route, it must already perceive the target concept — you cannot write a route's Movement, WHY, and (especially) its Confidence rating without perceiving how well-understood the target is. The meaning-gaps are a **by-product of that same first-pass perception**. The mechanism names the under-understood facets routelister already notices and rates each — it does not run a separate analysis. The useful intuition is a **compiler emitting warnings** as a by-product of the parse it already runs, rather than a second pass. (Use that only for the *timing* intuition — unlike a compiler's complete syntax tree, routelister's perception is first-pass, not complete, which is exactly why the field is low-confidence.)

### The grounding that makes it real: the gaps are the reasons behind Confidence

The phrase "transcribe what framing perceives" is too vague to be a spec on its own — it needs an anchor, or it collapses back into undefined generation. The anchor is routelister's existing **Confidence** field.

Framing assigns every route a Confidence — a judgment of the target's formed-ness. A DEVELOP route over a concept that is only partly understood gets a lower Confidence. To make that judgment, routelister has *already* perceived **why** the target isn't fully formed — which aspects are unclear, unspecified, or under-developed. **Those reasons are exactly the meaning-gaps.** So the operative procedure is:

> When framing a DEVELOP/CONSOLIDATE route, after assigning the route's Confidence, if the Confidence is less than full, **itemize the facets that account for the shortfall** — each is a meaning-gap — and rate each with the three vitality booleans in the same glance. Emit them as the `Meaning-gaps:` block. If you cannot confidently name even one such facet, emit the bare "meaning-unready" flag instead; if you cannot assess the target at all, emit nothing.

This anchoring does four things at once. It makes "transcription" *true* (framing genuinely already makes this judgment — the Confidence field is the proof). It gives the gaps a **usefulness floor** (they are the reasons for the Confidence, not random facets — relevant by construction). It makes the degradation fallback **sound** (it keys off the same Confidence judgment, not a foreign signal). And it makes the procedure **operative** — a routelister run can follow it, which is what R1 needed.

It is also identity-clean: the gaps explain a field routelister already writes, and a rated gap list is simply a **structured, multi-item version of routelister's existing within-concept depth-signal**. The mechanism adds no new step to the discipline — only a new *output* to the existing frame step.

### Generate and rate in one glance

There is no separate rating pass. As routelister perceives a gap, it applies the three vitality booleans (impact / likelihood / deferability) in the same act, because the `16-38` rubric was built to be glance-decidable from exactly this first-pass perception. Splitting perception and rating into two passes would re-read each gap and impose a deliberation the first-pass, low-confidence field does not want. A snap rating is acceptable here by the rubric's own design ("a first-pass, possibly-wrong rating is acceptable").

### Why first-pass, and why not a dedicated decompose

The strongest objection is that framing's perception is incidental and a dedicated mini-`/decompose` would find gaps more systematically. It would — and that is the wrong artifact. A systematic list claims a confidence the field explicitly disowns (it is "a prompt, not a contract"), it adds a sub-routine to maintain, and it re-perceives what framing already saw. The systematic version already exists as the project's `/decompose` discipline, *downstream*, and `16-10` makes the field "refinable by a full `/decompose`." So the by-product list and a `/decompose` are **complementary at different confidence levels**, not competitors: the field is the cheap first-pass *prompt* to the meta-loop; `/decompose` is the expensive high-confidence *resolution*.

The per-run worry — that incidental perception is biased toward whatever framing happened to notice — is real per run, and is answered across runs: routelister re-perceives on each re-run (perception governs), so as a target gets deepened, the next framing surfaces new gaps and closes resolved ones. Completeness accrues over the loop, which is all a first-pass prompt needs; anything genuinely not first-pass-perceptible is what `/decompose` is for.

### The fallback, and the two quality guards

The per-route fallback is a short degradation ladder keyed to routelister's Confidence in the target: a full rated gap list when it can name the reasons; the bare "meaning-unready" flag when the target is too opaque to name them confidently; nothing when it cannot assess the target at all. Because the gaps *are* the Confidence-reasons, this ladder reuses one judgment rather than introducing a new reliability measure.

This per-route guard must not be confused with the **global** one. "Across many routes, are the first-pass gap-lists consistently wrong — so should the feature be dropped to its lighter flag-only form?" is a separate, empirical, calibration-gated question: the same efficacy quarantine inherited from `16-38`. It needs usage data the project does not have yet; it is a monitor, not part of the per-route mechanism.

## Next Actions

### MUST

- **What:** Write the population mechanism into the routelister spec — at the frame step (§3.3), with a note in the route-record schema (§5.2): the meaning-gaps are the itemized reasons a DEVELOP/CONSOLIDATE route's Confidence is less than full, named and rated in one glance, first-pass only, with the per-route degradation fallback.
  **Who:** the routelister-spec edit — `cognitive_harness/routelister/references/routelister.md`.
  **Gate:** condition-bound — at the consolidation's R1 (writing the feature to spec); this finding supplies the authoring procedure R1 was missing.
  **Why:** it is what makes the feature operative (a capability, not a passive slot) — it takes the consolidation's R1 from MED to HIGH.

### DEFERRED

- **What:** Monitor whether the first-pass gap-lists are consistently useful across many routes; if consistently noise, drop the feature to its bare-flag form globally.
  **Gate:** observable — once the feature is in use across several routes (needs usage data the project lacks now). **Why (if revived):** the global efficacy guard (distinct from the per-route fallback); the inherited `16-38` quarantine.

- **What:** Consider whether routelister's by-product outputs (meaning-gaps, depth-signal, Frontier, Excluded) form one coherent "perception-exhaust" layer worth naming.
  **Gate:** research frontier — only if a unification proves worthwhile. **Why (if revived):** a possible simplification; out of scope for adopting the feature.

## Reasoning

**Why extend-framing over a dedicated pass.** A dedicated mini-`/decompose` would produce a *higher-confidence, more systematic* list — which is the wrong artifact for a field that is first-pass by design, adds a sub-routine, and re-perceives what framing already saw. `16-10`'s deferred "mini-decompose" pointed the right way (perceive the target's sub-parts) but mis-located the work: that perception already happens in framing, so the mechanism is a reuse, which also keeps it at the right (first-pass) confidence and at zero marginal cost.

**What critique changed (the load-bearing refinement).** The first draft said "transcribe what framing perceives," which a hard prosecution showed was under-specified — writing a route's Movement/WHY does *not* obviously require perceiving its internal gaps, so "transcribe" risked being smuggled generation. The fix, which survived: anchor the gaps to the **Confidence field**. Framing *always* assigns Confidence, and assigning it below "full" *requires* perceiving why the target isn't fully formed — so the gaps are the itemized reasons for that Confidence. This single grounding makes the mechanism a genuine transcription, gives it a usefulness floor, makes the Confidence-keyed fallback sound rather than a category-error, and makes the procedure operative for R1.

**Significant rejections.** A dedicated mini-`/decompose` pass — killed (wrong confidence + weight + re-perception). A two-pass generate-then-rate — killed (the `16-38` rubric is glance-decidable; one pass is correct). "Transcribe what you perceive" with no anchor — refined (anchored to Confidence) rather than shipped vague. The compiler-warnings analogy as a load-bearing claim — scoped down to a timing intuition only (the perception is first-pass, not a complete parse).

## Open Questions

### Blocked

- **Are the first-pass gap-lists actually useful in practice (not just relevant)?** The Confidence-grounding gives a structural floor (the gaps are the Confidence-reasons), but whether they help the meta-loop is empirical and unobservable until the feature is in use across routes — the inherited `16-38` efficacy quarantine.

### Research Frontiers

- **Routelister's "perception-exhaust" layer** (see DEFERRED) — whether the by-product outputs unify; no known need yet.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
- The population mechanism is the high-vitality, not-deferable one — still open. That is what keeps R1 at MED.
lets dive deeep into this one
```

</details>
