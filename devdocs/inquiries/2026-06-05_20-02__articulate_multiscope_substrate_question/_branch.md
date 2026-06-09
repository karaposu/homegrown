# Branch: Articulate MultiScope — Substrate Tension + Existence in Articulate_Simple

## Question

**Question framing (covering 5 meta-aspects):**

- **Subject** — the MultiScope operation within articulate (currently described in `devdocs/how_articulate_simple_should_be.md` §2.4 as "renders each item at multiple defensible scales — small-scope + big-scope, with MQ1's scope-axis answer determining what dimension scope varies along")
- **Action** — diagnose (the substrate-context-bleed tension) + decide (whether MultiScope belongs in articulate_simple at all) + characterize (if it stays, what its essence-under-substrate-boundary is)
- **Level** — discipline-level (one operation within articulate); meaning-layer; substrate-touching (interacts with the articulate-substrate-boundary commitment from §1)
- **Observation targets:**
  1. The context-bleed observation — even though articulate's substrate is officially "task statement + LLM internal cognition," if the LLM session has project context loaded already (because the user has been working in the project), that context will implicitly influence MultiScope's interpretation of small-vs-big scope. Is this a structural bug, an acceptable substrate-bleed, or something that can be channeled legitimately?
  2. The "context can be used by MultiScope" possibility — IF the implicit context-bleed is acceptable, can MultiScope explicitly use it to produce useful scope-renderings? Or does this violate the substrate-boundary architectural commitment?
  3. The "without context, MultiScope is guessing" concern — without surfaced project material, MultiScope's small-scope and big-scope renderings are speculative-from-general-knowledge. Are these speculations useful (scope-possibility-space) or harmful (downstream consumers treat speculations as authoritative-this-codebase)?
  4. The "MultiScope shouldn't exist in articulate_simple" possibility — maybe MultiScope only makes sense in the two-pass form (after /surfacing returns project material so concrete scope renderings are possible); maybe articulate_simple should not include it
  5. Alternative essence framings — if MultiScope stays in articulate_simple, what is its essence? "Scope-possibility-space" (acknowledging speculation) vs "concrete rendering" (current framing) vs "hypothetical-relational scope mode" (parallel to MQ2's pattern from 21-12)
  6. The parallel with MQ2's hypothetical-relational mode — MQ2's substance is expressed in hypothetical-relational mode (perceiving type-patterns, not asserting specific project state) to satisfy the substrate boundary. Does MultiScope have an analogous solution?
  7. The downstream-consumer reception — Rephrase reads MultiScope's outputs; loop disciplines consume the scope variants; the user reads the framing. How do they SHOULD interpret MultiScope's outputs given the substrate question?
  8. The harm-cases — under what input + context conditions does MultiScope produce harmful guesses (downstream operations or the user mistreats speculation as concrete)?
  9. The MQ1 dependency — MultiScope reads MQ1's scope-axis answer. Does MQ1 ALSO have the context-bleed problem (since MQ1 perceives intrinsic task properties)? Or is the bleed unique to MultiScope's rendering step?
- **Deliverable shape** — a meaning-layer decision: (1) does MultiScope belong in articulate_simple? (2) if YES, what is its substrate-boundary-compliant essence + case-spectrum? (3) if NO, where does it belong (only in two-pass; in a follow-up to articulate_simple; etc.)?

**Stated question:** Given the substrate boundary (§1 of `how_articulate_simple_should_be.md`) says articulate uses only the task statement + LLM internal cognition, AND given that project context already in the LLM's context will inevitably bleed into MultiScope's small/big-scope rendering, does MultiScope belong in articulate_simple at all? If YES, what is its substrate-boundary-compliant essence and how should it be characterized so its outputs are not treated as authoritative-this-codebase by downstream consumers? If NO, where does it belong (e.g., only in the two-pass form where /surfacing has returned project material)?

## Goal

- **Criterion** — meaning-layer settlement that is principled (grounded in the substrate-boundary commitment from §1 + the lightweight stance + MQ2's hypothetical-relational mode precedent from 21-12), specific (case-spectrum named; harm-cases acknowledged), and honest (acknowledges the context-bleed phenomenon rather than pretending it doesn't happen)
- **Use case** — the user will use this to decide whether to (a) refine §2.4's framing, (b) remove MultiScope from articulate_simple, (c) move MultiScope to articulate-two-pass, or (d) some hybrid resolution
- **Desired outcome** — either (1) MultiScope stays in articulate_simple with a substrate-boundary-compliant essence (e.g., "scope-possibility-space in hypothetical-relational mode" paralleling MQ2), OR (2) MultiScope is removed/moved with structural reasoning, OR (3) a hybrid — MultiScope exists in articulate_simple but with explicit hypothetical framing + downstream-consumer-reception rule
- **What would fail** — pretending context-bleed doesn't happen; over-claiming substrate purity without operational mechanism; over-engineering with heavy alternatives (semantic context-scoping); ignoring the precedent from MQ2's hypothetical-relational solution; treating speculative MultiScope outputs as concrete without acknowledging the speculation

## Source Input

```text
u mentions 2.4 MultiScope
MultiScope renders each item at multiple defensible scales.

At minimum: a small-scope (narrowest defensible) version and a big-scope (widest defensible) version. MQ1's scope-axis answer determines what dimension "scope" varies along for this item.

Why two scales: many task statements are scope-ambiguous. "Improve the auth module" can mean polish-the-existing-internals (small) or redesign-the-whole-flow (big). Both are defensible interpretations; without explicit multi-scoping, the downstream loop disciplines lock onto whichever interpretation happens to feel natural to the LLM at the moment — which may not match the user's intent.

MultiScope makes the scope ambiguity visible. The downstream loop can then either choose (with the user's input if needed) or proceed on both interpretations in parallel.

but i am thinking two things 

first of all in devdocs/how_articulate_simple_should_be.md u mention articulate doesnt go check things in project base, yes this is correct but if it is in LLM's context , it will (even if we dont ask it ) use that project context... 

and multiscope can be used with that? 


otherwise , without any context, multiscoping woudl be just guessing and not useful and even harmful. so multiscoping must be extremly careful. it shouldnt be about guesssing..

or maybe multiscoping shouldnt exits in articulate simple? 


lets dive deep into this
```

## Scope Check

Question covers goal. The question asks (a) the substrate-bleed phenomenon, (b) whether MultiScope can use context, (c) whether speculation is harmful, (d) whether MultiScope belongs in articulate_simple — and the goal asks for meaning-layer settlement with essence + case-spectrum + framing verdict. Aligned.

**Specific-vs-pattern check:** The user's "Improve the auth module" example is illustrative; the inquiry should address the BROADER PATTERN of how MultiScope behaves under context-bleed + without context. Default: address the pattern.

## Layer Commitment

**Primary layer: MEANING.**

The user is questioning what MultiScope IS as a cognitive operation given the substrate boundary, AND whether it belongs in articulate_simple at all. Both are meaning-layer questions about essence + existence. Structural amendments to §2.4 and process-layer changes (when MultiScope fires; how downstream reads it) are downstream of settling whether and what MultiScope is at meaning-layer.

**Other-layer alternatives explicitly out of scope:**

- **Structural** (revising §2.4 wording in `how_articulate_simple_should_be.md`; updating MultiScope's firing-format in spec) — OOS. Downstream of meaning-layer settlement.
- **Process** (when MultiScope fires; how the runner mediates; how Rephrase reads MultiScope's outputs) — OOS. Process behavior is downstream of meaning settled.

**Sequential plan:** If this meaning-layer inquiry settles "stay-with-revised-essence" → structural follow-up revises §2.4. If "move-to-two-pass" → structural follow-up updates both articulate_simple and articulate_two_pass docs. If "drop" → structural follow-up removes MultiScope from the 5-operation list.

## Synthesis Trigger

This inquiry consumes prior inquiry outputs as load-bearing inputs:

- `devdocs/inquiries/2026-06-03_15-39__task_define_discipline_meaning_layer/finding.md` — the foundational meaning-layer settlement; introduced MultiScope as one of 5 operations; committed the substrate boundary (no external project state)
- `devdocs/inquiries/2026-06-04_07-48__task_define_process_layer/finding.md` — MultiScope's process-layer Stage 3b position (parallel with Deconstruct; reads MQ1's scope-axis answer)
- `devdocs/inquiries/2026-06-04_21-12__task_define_mq2_surfacing_alignment_reframe/finding.md` — the hypothetical-relational expression mode for MQ2 (a substrate-compliance solution; precedent for the same problem MultiScope may face)
- `devdocs/inquiries/2026-06-05_10-03__meta_question_taxonomy_categories/finding.md` — MQ1 is the Structural type that feeds MultiScope's scope-axis perception
- `devdocs/inquiries/2026-06-05_19-17__articulate_deconstruct_true_value/finding.md` — Deconstruct's OBJECT vs PROPERTY level distinction; the lightness-as-feature principle; the 4-function characterization
- `devdocs/how_articulate_simple_should_be.md` §1 (substrate boundary) + §2.4 (current MultiScope description) + §1 the example sentences listing inside-substrate vs outside-substrate cases

Each carries commitments about substrate, MultiScope's role, and the lightweight stance that this inquiry must respect or explicitly revise. The finding MUST include an `## Inherited Commitments Re-test` section per CONCLUDE's enforcement.
