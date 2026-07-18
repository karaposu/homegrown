# Branch: seed-generation three tiers — crossing vs innovate+decompose vs traverse

## Source Input

The user's raw request, preserved verbatim (also in `articulate_simple.md`'s `## User Input`):

```text
u said 

It is bounded the other way. "Always run a full traverse for any thin source" is overkill for a moderately-thin source, where a depth-directive on the existing steps suffices (the harvester already contains the crossing). So the traverse-as-enricher is the radically-thin path, not the universal one.

but i would argue running at least innovate and decompose  is really acceptable bc a seed must be inspected and viewed from diff angles perspectives with reference to it's similarity to the project.  

maybe there are 3 ways seed generation can work 

no traverse no innovation, 
 with  innovation and decompose 
with traverse 

lets dive deep into this,
```

## Articulation Reference

- **File:** `articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** A1
- **Verdict:** MED-FLAG
- **Flagged conditions:** (1) the item partly CORRECTS the just-committed 23-49 finding (which folded the middle tier) → non-sycophancy both-ways guard load-bearing; (2) a conceptual subtlety — the harvest ALREADY contains Decomposition + Innovation (seed_harvester §6), so the tiers can't be defined naively as "add these disciplines."

## Question

**(A1)** *Literal:* "I'd argue running at least innovate and decompose is really acceptable because a seed must be inspected and viewed from different angles/perspectives with reference to its similarity to the project. Maybe there are 3 ways seed generation can work: no-traverse-no-innovation / with-innovation-and-decompose / with-traverse. Let's dive deep."

The statement carries these kinds of ask (MQ1, preserved as ambiguities, not resolved):
- **validate** the 3-tier proposal (confirm it's right), OR
- **adjudicate** the tier-count (is it 3, or 2, or a continuous spectrum?), OR
- **design** the tiers (each tier's machinery + trigger + boundary), OR
- **correct** the prior 23-49 finding (which folded the middle "lightweight hybrid" tier).

Plausible action-endpoints (MQ3): establish a principled tier-taxonomy · correct the prior fold · specify the per-tier trigger.

## Goal

**Deliverable shape (Deconstruct):** a design decision + conceptual model — the enrichment-tier taxonomy (each tier's machinery + trigger + boundary), plus its relation to the 23-49 finding (validate / refine / correct). Likely lands as a finding that `refines:` 23-49. Kinds: conceptual analysis + a protocol-model grounded in what each discipline adds + possibly a staged edit-shape. Bounds: the *machinery-depth* axis of seed generation, source/crossing side.

**Motivations a good answer may serve (MultiDepth WHY-axis, preserved as ambiguities):**
- **fidelity** — a seed genuinely needs multi-angle viewing against the project, so the design must actually provide it;
- **correctness-of-the-prior** — the 23-49 two-tier fold may have been too aggressive and dropped a real option;
- **operational-economy** — a usable decision-rule for how much machinery to spend per source (neither over- nor under-invest).

**Context the answer needs (MQ2, preserved as ambiguities):**
- `verdict:` the 23-49 finding + `seed_harvester.md` §6 (the harvest already rides Su→S→D→I→C) + the 16-41 finding (the aspect-walk / source-indexed engagement) + the `/traverse` spec + the innovate & decompose specs.
- `kinds:` which "innovation"/"decompose" — the harvest's OWN disciplines (already present) or a SEPARATE enrichment pre-pass? What does "no innovation" mean when the harvest's crossing IS an Innovation-stage act?
- `stance:` settle-the-protocol-tiers (edit the protocol) vs clarify-the-conceptual-space (map it without committing to exactly three).

**Explicit exclusions (MQ4 — extrinsic, settled context):** NOT re-opening the crossing-mechanism (source×target crossing = §2) · NOT re-opening the provenance floor · NOT building/implementing any tier as code (establish the MODEL).

## Considered Articulations

- **Item A1 — the three-tier seed-generation question:**
  1. **Adjudicate-the-count:** determine whether enrichment has *exactly three* tiers or collapses/extends — grounded in what each discipline adds and in the fact that the harvest ALREADY runs Su→S→D→I→C (so "no innovation" and "innovate + decompose" must be defined against that baseline).
  2. **Design-and-correct:** specify the three-tier model (machinery + trigger + boundary per tier) and use it to correct the 23-49 fold of the middle tier.
  3. **Claim-test:** test the user's core claim — a seed must be inspected from multiple angles (which innovate + decompose supply) — against the existing pipeline, and decide whether that inspection is already present, a genuinely missing middle, or covered by the single crossing.
  4. **Refine-the-prior:** refine 23-49 by replacing its binary (depth-directive vs full traverse) with the tier model where it holds, re-grounding the tiers on a principled axis (which disciplines / structured-multi-angle vs generative-iterative / what they operate on).
  5. **Conceptual-clarification:** map the space of seed-generation depths — what each of the three concretely means given the harvest is itself a traverse containing those disciplines — without necessarily committing to exactly three.

## Scope Check

**Question covers goal:** YES. The question (adjudicate/design/correct the tier model) covers the goal (a tier taxonomy + triggers + relation to 23-49). IN-scope (Deconstruct bounds): the machinery-depth axis of seed generation on the source/crossing side. OUT-of-scope (MQ4): the crossing-mechanism, the provenance floor, and code-implementation of any tier.

**Specific-vs-pattern check:** the user names three specific tiers, but the intent is the BROADER pattern — the principled model of enrichment depths — with the three named tiers as the motivating proposal to test/refine. Address the broader pattern (does enrichment have a principled tier structure, and what is it?), using the three named tiers as the anchor candidates. Not scoped to only-these-three-labels.

## Layer Commitment

**Primary layer: PROCESS.** The question is about what STEPS / machinery seed generation runs at different source-depths (the crossing alone / + decompose + innovate / + a full traverse) — a procedure-and-mechanism question, not a naming (Meaning) or a spec-shape (Structural) one.

- **Meaning** (what enrichment IS) — out of scope: settled in 23-49 (enrichment = the harvester's own crossing run at enrichment-time). This dive takes that as given and asks how much machinery the crossing warrants.
- **Structural** (the protocol's section shape) — deferred: if the tier model lands, its expression as protocol edits is a follow-on (like the 23-49 → draft-corrections step), not this dive's primary work.

## Synthesis Trigger

This inquiry re-tests / refines commitments from prior outputs — the `## Inherited Commitments Re-test` section is required at CONCLUDE.

- `devdocs/inquiries/2026-07-09_23-49__enrichment_mechanism_similarity_crossing_and_traverse_loop_as_enricher/finding.md` — **the primary prior.** Commits to: enrichment = the harvester's own crossing; a **thinness-graded architecture** with the middle "lightweight hybrid (c)" **folded into "augmented-d with a heavier Sensemaking" (parsimony)**; the traverse-as-enricher is the radically-thin path, not universal. THIS is the fold the user is challenging.
- `devdocs/inquiries/2026-07-09_16-41__advanced_seed_gen_source_expansion_enrichment/finding.md` — commits to: the aspect-walk (decompose the phenomenon into aspects) as source-indexed engagement; the source contributes structure. Relevant because "decompose" in the user's middle tier may BE the aspect-walk.
- `cognitive_harness/protocols/seed_harvester.md` §6 — commits to: the harvest's GENERATE step rides Surfacing→Sensemaking→**Decomposition→Innovation→Critique**. Relevant because the harvest ALREADY contains decompose + innovate — the load-bearing fact the tier model must be defined against.
