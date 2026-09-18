# Structural Articulation (Simple) — routelister provenance: regression or improvement?

## User Input

```text
I've read it in full. Two facts about this machine first: the two example outputs it cites and the installed skill paths are under a /Users/nsstorm/ home and a model_evaluation project, neither of which exists here, so I cannot inspect the concrete case. The installed RouteLister on this machine is byte-identical to the repo's canonical copy, so "edit canonical, then install" is a simple copy.

What the document is. A task brief, apparently pasted from a web agent interface (it ends with "Copy agent link / Report this"), asking for one targeted refinement to RouteLister: make its saved outputs carry enough source provenance that a reader can reconstruct why a route exists without having been in the conversation that produced it.

The problem it identifies. RouteLister accepts "a passage describing a space" as territory, so it routinely consumes conversation-only material: corrections, clarifications, orchestrator refinements. Its outputs then cite that material with labels like "Conversation, the user's recipient correction." Such a label proves something was consulted but preserves neither the wording, nor its location, nor how it supports the route. The interpretation survives; the evidence behind it is lost. The example route (MEOS-014) records the AI's reading that a message was channel-wide rather than for one person, but the correction it rests on is not recoverable. The brief is deliberately measured: the saved User Input already recovers part of the basis, the whole map is not unusable, and this is a traceability gap, not proof of a wrong interpretation.

What it wants. For every material source reference, a later reader should be able to tell what source is meant, which passage or state, what it actually says, what the route uses it to establish, and which part is interpretation. It asks for a small refinement of the existing pointer mechanism, not a provenance subsystem, and no third output file.

The seven required behaviors, mapped onto the spec as it stands:

- Specific references. Permalink or message ID, transcript plus passage, document path plus section, or a pointer into the User Input already saved by the entry file's step 5. Do not re-copy what the artifact already holds.
- Preserve excerpts when no stable pointer exists. Quote the relevant passage with speaker and enough context, proportionately. This is the conversation-only case.
- State the role of each source. "Establishes the audience," "corrects an earlier reading," and so on. The brief wants this folded into the existing Guidance convention where every pointer already carries a (bc …) reason, rather than a parallel field.
- Keep source text and interpretation apart. Label paraphrases as paraphrases; never present an assistant summary as the user's words; say when the original was not recovered. A source proving someone said X does not prove X.
- Changing sources. Capture version, date, or excerpt only when the historical state matters; give the criterion, not full version tracking.
- Honesty when provenance is missing. Never invent links, IDs, timestamps, quotes, or "I inspected this." Keep the route, make the limitation visible, and raise a scoped quality flag. This slots into the existing LAYER 1 failure modes and the PROCEED / FLAG / RE-RUN verdict.
- Reuse without drift. Several routes citing one source should share one recoverable reference by label. Across runs, a label in the concept index must not end up pointing at reassigned content, handled in the spirit of the existing load-modify-save and stale-flag-not-delete rules. Any source detail kept in the index must stay attached to an identity's own manifestations, with no inter-concept edges and no process state.

What must not change. No selection or ranking, no sequencing, no dependency graph, no execution tracking, no orchestration state, and no new meaning for Priority, Confidence, or Essentiality. Confidence keeps meaning formed-ness and must not become a verification score. The route-type system, the concept-identity unit, sweep-individuate-frame, and the two-file contract all stay.

How it wants the change validated. Seven scenarios (a precise document passage, a source already in User Input, a conversation-only correction, several routes sharing one correction, a claim about a document that may later change, a surviving paraphrase only, and a later run updating the map), the single acceptance question about a reader who never saw the conversation, a check that simple routes are not inflated, and an explicit ban on fabricating the missing messages to make the old example look repaired.

My read on the shape of the fix, if you want it implemented: a map-level source register with stable labels, per-route citations that reuse those labels and carry a role clause in the existing (bc …) form, a quote-versus-paraphrase marking rule, a pointer form into User Input, one new LAYER 1 mode for unrecoverable provenance that yields FLAG, and index entries that carry source labels only inside manifestations. That is roughly six edits to the reference file and two to the entry file. The one limitation that will remain is the one the brief already names: when the original passage is gone, the best the map can do is say so.

I have not changed anything. Say the word and I'll draft

lets dive deep what this requires and what it means in terms of existance of routelister and are these regressions or improvements?
```

---

## Substrate (Edge 1 — cold-vs-warm-context detection)

**Warm.** The loaded session context is directly about this statement's domain: `rl.md` (the task brief) was read in full; the canonical RouteLister spec (`cognitive_harness/routelister/SKILL.md` + `references/routelister.md`) was read in full and verified identical to the installed copy; the project canon (`docs/canon/*`) and the whole `cognitive_harness/` tree were read. The pasted preamble is the assistant's own prior assessment of `rl.md`, quoted back as context. Relevance signals are unambiguous, so warm treatment applies; the substrate for Rephrase is the brief, the spec, the canon, and the prior assessment.

**Statement structure note.** The statement is a long context block (the quoted prior assessment, ending "Say the word and I'll draft") followed by one ask-clause. The context block is substrate, not a work item; the ask-clause is the item.

---

## Stage 1 — Itemize

- **count:** 1
- **items:**
  - **Item 1** — *"lets dive deep what this requires and what it means in terms of existance of routelister and are these regressions or improvements?"* (with the quoted prior assessment as its context block)

**Itemize reasoning.** The ask-clause carries three sub-clauses — (a) "what this requires", (b) "what it means in terms of existance of routelister", (c) "are these regressions or improvements?" — joined by "and". They are candidate items, but they are tightly coupled: (c) is a verdict that depends on (a) and (b), and (b) depends on (a). Emitting three per-item bundles would require cross-item interpretation (the verdict cannot be framed without the requirements). Keep-together bias applies: **one item with three facets**. The facets are carried forward as ambiguity dimensions, not as items.

---

## Item 1 — per-item articulation

**Item text:** *"lets dive deep what this requires and what it means in terms of existance of routelister and are these regressions or improvements?"*

### Stage 2 — Meta-questions

#### MQ1 (verdict-axis)

**Question:** What is the user asking for?

**Answer — identified-ambiguities-list:**
- `deliverable-kind`: [a deep analytical assessment only / an assessment that ends in a recommendation (implement, don't, or implement differently) / an assessment that flows into the drafting the prior message offered ("Say the word and I'll draft" — does "lets dive deep" say the word?)]
- `referent-of-"this"`: [the `rl.md` brief as a whole (diagnosis + proposal + boundaries + validation plan) / its seven required behaviors specifically / the assistant's proposed fix shape (the "six edits" list) / all of the above]
- `sense-of-"requires"`: [what must change in the spec text (spec-level requirements) / what a RouteLister run must do differently at runtime — cost, behaviour, honesty floor (run-level requirements) / what else must change around it — the traverse runner, conclude, `_route.md` consumers, installed copies, other projects (ecosystem-level requirements)]
- `sense-of-"existance of routelister"`: [identity — does RouteLister remain the same discipline (enumerate-without-selecting, concept-identity unit) / viability — does it remain lightweight and runnable, or does provenance bloat it / boundary — does it become a different thing (a provenance tracker), i.e. scope creep / rationale — why RouteLister exists at all (its reason for being as the exhaust step / route-field producer) and whether the proposal touches that reason]
- `verdict-granularity`: [one verdict per required behaviour (A–G separately) / one aggregate verdict on the proposal / a mixed verdict with sizing (which parts improve, which regress, how much)]
- `referent-of-"these"`: [the seven behaviours / the six proposed edits / the brief's whole package]

#### MQ2 (context-need axis)

**Question:** What context does the response need that isn't in the statement?

**Answer — identified-ambiguities-list:**
- `verdict` (which context is needed): [the canonical RouteLister spec text — its NOT-list, §1.4 self-containment, §5.2 route-record format (Touches · Guidance pointers with `(bc …)` reasons · Meaning-gaps), §5.3 `_route.md` boundaries, §3.5 cross-run guarantees, §4 failure modes and §4.5 verdicts, §5.4 telemetry / `rl.md` itself (already in context) / the canon's account of why RouteLister exists — the exhaust step, the route-field, the between-inquiry layer, the movement frame's "cartographic acts" / actual RouteLister outputs already in this repo (`devdocs/inquiries/*/routelister.md` and `_route.md`) to see how sources are cited in practice today / sibling provenance precedents in the harness — the seed_harvester's source-support condition, the conclude protocol's evidence rules, the surfacing discipline's citation habits / RouteLister's design history (routeman → routelister; the reasons the two-file contract and the NOT-list were adopted)]
- `kinds` (what kinds of context): [spec text (normative) / canon rationale (purpose) / empirical run outputs (practice) / sibling-discipline precedents (analogues) / design history (genealogy)]
- `stance` (what stance the context is read with): [judge "regression" against the spec-as-written (letter) vs against RouteLister's purpose in the canon (spirit) vs against observed practice (what runs actually do) / judge against RouteLister's own design goals vs against harness-wide goals (self-containment, cross-session persistence, the suspicion principle over between-loop supports, the honesty guards) / audience — the user deciding whether to implement vs a durable project record of the evaluation]

#### MQ3 (intent-axis, WHAT — action-endpoint shape)

**Question:** What is the user trying to accomplish?

**Answer — identified-ambiguities-list:**
- [decide-whether-to-implement — reach a go / no-go on the brief before any drafting]
- [decide-how-to-implement — shape the eventual change so that it lands as an improvement and avoids the regressive parts]
- [understand-the-impact — see what the change does to RouteLister's outputs, runs, and index before committing]
- [evaluate-the-brief — test whether the brief's diagnosis (traceability gap) and its proposal are sound, since it came from another agent session]
- [guard-the-discipline — produce an assessment that checks the proposal against RouteLister's identity and NOT-list, so nothing creeps in]
- [produce-a-durable-record — have this evaluation land as a finding the project keeps, not only as a chat answer]

#### MQ4 (boundary-axis)

**Question:** What is the user explicitly excluding?

**Answer — identified-ambiguities-list** (Edge 2: the exclusion signals live in the pasted context block, which is in-statement, but they restate the brief's constraints from session context; routed to both MQ4 and MQ3/MQA):
- [implementation-for-now — the context block ends "I have not changed anything. Say the word and I'll draft"; whether the ask lifts that gate is open (also carried at MQ1 `deliverable-kind`)]
- [the brief's must-not-change list — no selection/ranking, no sequencing, no dependency graph, no execution tracking, no orchestration state, no new meaning for Priority/Confidence/Essentiality (Confidence stays "formed-ness"), the route-type system / concept-identity unit / sweep-individuate-frame / two-file contract all stay — is this list a hard boundary on any fix, or is it itself among the things the deep dive may question?]
- [the model_evaluation project's documents — the brief forbids modifying them; they are also not on this machine]
- [the missing original messages — the brief forbids inventing them to make the historical output look repaired; the example outputs are unavailable here in any case]
- [no third required output file — the brief's own boundary on the fix's shape]

#### MQA (meta-question alignment)

Three overlaps examined:

1. **MQ1 `sense-of-"existance"` × MQ3 `guard-the-discipline` / `understand-the-impact`** — joint axis identifiable with confidence: **the identity-preservation axis** — whether the proposal changes what RouteLister *is* (essence), how it *runs* (viability), where its *boundary* sits (scope), or *why it exists* (rationale). **Reconcile:** fold MQ3's guard/understand endpoints under this axis; the four readings of "existence" are the sub-dimensions.
2. **MQ1 `verdict-granularity` × MQ3 `decide-whether` / `decide-how`** — joint axis identifiable: **the decision-support axis** — whether the regression/improvement verdict is meant to *gate* implementation (aggregate go/no-go) or to *shape* it (per-behaviour, sized). **Reconcile.**
3. **MQ1 `sense-of-"requires"` × MQ2 `verdict` (which context)** — the requirement level (spec / run / ecosystem) determines which context is needed, but that is a dependency between axes, not one axis. **Surface — irreducible overlap:** the level at which "requires" is read selects the evidence base; the deep dive may have to run all three levels to avoid pre-committing.

MQ4's "must-not-change list as hard boundary vs as questionable" overlaps MQ1's `referent-of-"this"` (is the brief's boundary package part of what is evaluated?). **Surface** — irreducible: evaluating the boundaries is a different act from evaluating the behaviours, and the statement does not say which the user intends.

### Stage 3 — Deconstruct + MultiDepth

#### Deconstruct

- **deliverable:** an analytical assessment (a deep-dive evaluation), not an implementation and not a plan
- **kinds:** written analysis with three facets — a requirements inventory (what the proposal demands), an identity analysis (what it means for RouteLister's existence), and a verdict set (regression vs improvement) — possibly closing in a recommendation
- **bounds:** the `rl.md` proposal and its proposed fix shape, evaluated against RouteLister as it exists in this repo (spec + canon rationale + prior run outputs); excludes the model_evaluation project's documents, excludes inventing the unavailable example material, excludes making the change

**Late-split check:** the tuple has three facets but one deliverable shape (analysis) and one bound; the facets are sections of one assessment, and the verdict facet depends on the other two. No late-split signal. Mode 2 was *considered* here and did not fire.

#### MultiDepth

- **literal-statement:** *"lets dive deep what this requires and what it means in terms of existance of routelister and are these regressions or improvements?"*
- **identified-purpose-motivation-ambiguities (WHY-axis) — identified-ambiguities-list:**
  - [protection motive — avoid degrading a working discipline by accepting an externally-authored brief uncritically]
  - [decision motive — be confident enough to say implement / don't / implement differently]
  - [understanding motive — grasp the deeper design question the brief raises: what RouteLister's saved outputs are *for* once the producing conversation is gone, and whether that was ever part of its contract]
  - [trust-but-verify motive — the brief was written by another agent session on another machine; check its diagnosis before acting on it]
  - [generalisation motive — learn whether source provenance is a RouteLister-specific need or a harness-wide need (self-containment, cross-session memory), which would change where the fix belongs]
  - [cost motive — know what the change costs per run (record bloat, lightweight-stance erosion) before paying it]

### Stage 4 — Rephrase (considered articulations)

Composition sources: Deconstruct deliverable-shape = analytical assessment; identified-ambiguities aggregated from MQ2 + MQ3 + MultiDepth post-MQA (identity-preservation axis; decision-support axis; requirement level; evidence stance; motives); MQ4 NOT-list (no implementation now; no touching the other project's docs; no invented messages; the brief's must-not-change list; no third file); substrate = warm (brief + spec + canon + prior outputs).

Each entry is a reading the discipline considered plausible; none is committed to.

1. **Per-behaviour spec audit.** *"Take each of the brief's seven required behaviours (A–G) and, against the current RouteLister spec text, state what it would change in the spec and in a run, and whether that change is an improvement or a regression measured against RouteLister's own NOT-list and design goals — a sized, per-behaviour verdict."* (spans: requirement level = spec+run; verdict granularity = per-behaviour; stance = letter of the spec)
2. **Identity analysis.** *"Assess whether the provenance refinement changes what RouteLister IS — the enumerate-without-selecting essence, the concept-identity unit, the two-file contract — or only how its records are written: an analysis along essence, viability (does it stay lightweight), boundary (does it drift into a provenance subsystem), and rationale (does it touch why RouteLister exists as the exhaust step)."* (spans: the identity-preservation axis; stance = spirit/canon)
3. **Aggregate go / no-go.** *"Evaluate the brief as a whole — its diagnosis of the traceability gap, its proposal, its boundaries, and its validation plan — for soundness, and deliver one aggregate verdict (regression, improvement, or mixed with sizing) as the basis for deciding whether to authorise drafting."* (spans: decision-support axis = gate; referent = whole brief)
4. **Fix-shape review.** *"Evaluate the assistant's proposed fix shape (map-level source register; role clause in the existing `(bc …)` form; quote-vs-paraphrase marking; pointer into User Input; one new LAYER 1 mode; source labels only inside manifestations) for whether it is the smallest coherent change and where it would regress RouteLister — an assessment that shapes the eventual draft rather than gating it."* (spans: decision-support axis = shape; referent = the six edits)
5. **Harness-level placement.** *"Situate the requirement in the harness at large: is source provenance a RouteLister-specific need or a harness-wide need (self-containment, cross-session persistence), and what does the answer imply for whether the change belongs in RouteLister, in the runner, or in a shared protocol — including what else (traverse, conclude, `_route.md` consumers, installed copies) would have to move with it."* (spans: requirement level = ecosystem; generalisation motive)
6. **Practice-grounded check.** *"Test the brief's diagnosis against RouteLister's actual outputs in this repo — how sources are cited in existing `routelister.md` / `_route.md` files — to establish whether the traceability gap is real here, how large it is, and therefore whether the proposed behaviours fix a live problem or add cost for a hypothetical one."* (spans: stance = practice; trust-but-verify motive; cost motive)

All six preserve the deliverable shape (assessment), include no implementation, use only substrate vocabulary, and avoid the NOT-list. Count is at the floor+ side of the 2–6 range; no seventh dimension was perceived that a variant did not already span.

---

## Statement-level bundle

```
{
  count: 1,
  items: [
    {
      id: "Item 1",
      text: "lets dive deep what this requires and what it means in terms of existance of routelister and are these regressions or improvements?",
      mqs: { mq1: identified-ambiguities-list (6 axes), mq2: identified-ambiguities-list (verdict / kinds / stance), mq3: identified-ambiguities-list (6 endpoints), mq4: identified-ambiguities-list (5 exclusions) },
      mqa: { reconcile: [identity-preservation axis; decision-support axis], surface: [requirement-level × context-need; boundaries-as-hard-vs-questionable] },
      deconstruct: { deliverable: analytical assessment, kinds: requirements inventory + identity analysis + verdict set (+ optional recommendation), bounds: rl.md proposal vs RouteLister-in-this-repo; no implementation; no other-project docs; no invented messages },
      multidepth: { literal-statement: verbatim, purpose-motivation-ambiguities: identified-ambiguities-list (6 motives) },
      considered_articulations: [6]
    }
  ],
  self-assessment: { verdict: HIGH-PROCEED }
}
```

## LAYER 1 self-check (single LIGHT pass)

| Mode | Fire? | Note |
|---|---|---|
| 1 Premature Itemize split | no | count = 1 |
| 2 Late-detected multi-item | no | considered at Deconstruct (three facets, one deliverable, verdict-facet dependent on the others); not fired |
| 3 MQ extension violates bounded-extensibility | no | four canonical axes only |
| 4 Per-operation firing missed | no | all fields present |
| 5 MQ2 missing preparation content | no | verdict / kinds / stance all emitted |
| 6 MQ2 missing kinds- or stance-axis | no | both present |
| 7 2-shape violation | no | every MQ / MultiDepth answer is an identified-ambiguities-list; no commitments |
| 8 AMBIGUITY-NATURE conflation | no | "guard-the-discipline" was emitted at MQ3 as an action-endpoint and its motive twin ("protection motive") at MultiDepth; MQA reconciled the overlap under the identity-preservation axis, per Edge 5 |
| 9 Considered-articulations drift | no | all six within the four composition bounds |

**Fires:** 0. **Friction:** low-to-moderate (a preamble-heavy paste with a compressed three-clause ask; the itemize call and the reading of "existance" needed judgment).

## Self-assessment verdict

**HIGH-PROCEED**

Note for the consumer: the one preserved openness most likely to matter downstream is MQ1 `deliverable-kind` / MQ4 first entry — whether "lets dive deep" authorises drafting the change. The pipeline should treat the deliverable as the assessment and leave drafting as an onward route unless the user says otherwise.
