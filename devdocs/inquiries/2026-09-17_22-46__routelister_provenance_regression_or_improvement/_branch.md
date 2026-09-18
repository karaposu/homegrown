# Branch: routelister_provenance_regression_or_improvement

## Source Input
The user's raw request, preserved verbatim. Also lives in `articulate_simple.md`'s `## User Input` section; both copies are authoritative for transcription audit. (The first part is the assistant's prior assessment of `rl.md`, quoted back as context; the ask is the final line.)

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

## Articulation Reference

- **File:** `devdocs/inquiries/2026-09-17_22-46__routelister_provenance_regression_or_improvement/articulate_simple.md`
- **Itemize count:** 1
- **Per-item identifiers:** Item 1
- **Verdict:** HIGH-PROCEED
- **Flagged conditions (if any):** none (0 LAYER 1 fires; Mode 2 was considered at Deconstruct and did not fire)

## Question

**Literal statement (Item 1):** *"lets dive deep what this requires and what it means in terms of existance of routelister and are these regressions or improvements?"*

The "this" / "these" is the `rl.md` task brief — its diagnosis (RouteLister's saved outputs cite conversation-only sources with labels that preserve consultation but not a usable route back), its seven required behaviours (A. specific references · B. preserve excerpts when no stable pointer exists · C. state the role of each source, folded into the `(bc …)` convention · D. keep source text and interpretation apart · E. changing sources · F. honesty when provenance is missing · G. reuse without drift), its must-not-change list, its seven validation scenarios, and the assistant's proposed fix shape — as quoted in Source Input.

**MQ1 (verdict-axis) — what kind of ask this is** (identified ambiguities, preserved as ambiguities):
- `deliverable-kind`: a deep analytical assessment only / an assessment ending in a recommendation (implement, don't, implement differently) / an assessment that flows into the drafting the prior message offered ("Say the word and I'll draft" — does "lets dive deep" say the word?).
- `referent-of-"this"`: the whole brief / its seven required behaviours / the assistant's proposed fix shape (the "six edits") / all of these.
- `sense-of-"requires"`: spec-level (what must change in the spec text) / run-level (what a RouteLister run must do differently — cost, behaviour, honesty floor) / ecosystem-level (traverse runner, conclude, `_route.md` consumers, installed copies, other projects).
- `sense-of-"existance of routelister"`: identity (does it remain the same discipline — enumerate-without-selecting, concept-identity unit) / viability (does it stay lightweight and runnable) / boundary (does it drift into a provenance tracker — scope creep) / rationale (why RouteLister exists at all as the exhaust step / route-field producer, and whether the proposal touches that reason).
- `verdict-granularity`: one verdict per required behaviour / one aggregate verdict / a mixed verdict with sizing.
- `referent-of-"these"`: the seven behaviours / the six proposed edits / the brief's whole package.

**MQ3 (intent-axis, WHAT) — plausible action-endpoints** (preserved as ambiguities):
- decide-whether-to-implement (go / no-go before any drafting);
- decide-how-to-implement (shape the change so it lands as an improvement, avoiding the regressive parts);
- understand-the-impact (what the change does to outputs, runs, and the index);
- evaluate-the-brief (is its diagnosis and proposal sound — it came from another agent session on another machine);
- guard-the-discipline (check the proposal against RouteLister's identity and NOT-list);
- produce-a-durable-record (a finding the project keeps, not only a chat answer).

**MQA reconciliations:** (1) the *identity-preservation axis* — essence / viability / boundary / rationale — folds MQ1's "existence" readings with MQ3's guard and understand endpoints; (2) the *decision-support axis* — does the regression/improvement verdict gate implementation (aggregate) or shape it (per-behaviour, sized) — folds MQ1's granularity with MQ3's decide-whether / decide-how. Surfaced as irreducible: the requirement level (spec / run / ecosystem) selects the evidence base; and whether the brief's must-not-change list is a hard boundary on any fix or is itself among the things the deep dive may question.

## Goal

**Deconstruct tuple (Item 1):**
- *deliverable:* an analytical assessment (a deep-dive evaluation) — not an implementation, not a plan;
- *kinds:* written analysis with three facets — a requirements inventory (what the proposal demands), an identity analysis (what it means for RouteLister's existence), and a verdict set (regression vs improvement), possibly closing in a recommendation;
- *bounds:* the `rl.md` proposal and its proposed fix shape, evaluated against RouteLister as it exists in this repo (spec + canon rationale + prior run outputs); excludes the model_evaluation project's documents, excludes inventing the unavailable example material, excludes making the change.

**WHY-axis motivations a good answer might serve** (preserved as ambiguities, not chosen):
- protection — avoid degrading a working discipline by accepting an externally-authored brief uncritically;
- decision — be confident enough to say implement / don't / implement differently;
- understanding — grasp the deeper design question: what RouteLister's saved outputs are *for* once the producing conversation is gone, and whether that was ever part of its contract;
- trust-but-verify — check the other session's diagnosis before acting on it;
- generalisation — learn whether source provenance is RouteLister-specific or harness-wide (self-containment, cross-session memory), which changes where a fix belongs;
- cost — know what the change costs per run (record bloat, lightweight-stance erosion) before paying it.

**MQ2 (context-need axis) — what downstream consumers need that the raw input does not carry:**
- *verdict (which context):* the canonical RouteLister spec text — its NOT-list, §1.4 self-containment, §5.2 route-record format (Touches · Guidance pointers with `(bc …)` reasons · Meaning-gaps), §5.3 `_route.md` boundaries, §3.5 cross-run guarantees, §4 failure modes and §4.5 verdicts, §5.4 telemetry; `rl.md` itself; the canon's account of why RouteLister exists (exhaust step, route-field, between-inquiry layer, the movement frame's cartographic acts); actual RouteLister outputs already in this repo (`devdocs/inquiries/*/routelister.md`, `_route.md`) showing how sources are cited in practice today; sibling provenance precedents in the harness (seed_harvester's source-support condition; conclude's evidence rules; surfacing's citation habits); RouteLister's design history (routeman → routelister; why the two-file contract and the NOT-list were adopted).
- *kinds:* spec text (normative) / canon rationale (purpose) / empirical run outputs (practice) / sibling-discipline precedents (analogues) / design history (genealogy).
- *stance:* judge "regression" against the spec-as-written (letter) vs RouteLister's purpose in the canon (spirit) vs observed practice; against RouteLister's own design goals vs harness-wide goals (self-containment, cross-session persistence, the suspicion principle over between-loop supports, the honesty guards); audience = the user deciding whether to implement vs a durable project record.

**MQ4 (boundary-axis) — what would explicitly fail / what is excluded:**
- implementation-for-now — the context block ends "I have not changed anything. Say the word and I'll draft"; whether this ask lifts that gate is open;
- the brief's must-not-change list — no selection/ranking, no sequencing, no dependency graph, no execution tracking, no orchestration state, no new meaning for Priority/Confidence/Essentiality (Confidence stays "formed-ness"); the route-type system, concept-identity unit, sweep-individuate-frame, and two-file contract all stay — open whether this is a hard boundary on any fix or itself evaluable;
- the model_evaluation project's documents — the brief forbids modifying them, and they are not on this machine;
- the missing original messages — the brief forbids inventing them to make the historical output look repaired; the cited example outputs are unavailable here;
- no third required output file — the brief's own boundary on the fix's shape.

## Considered Articulations

- **Item 1 — "lets dive deep what this requires and what it means in terms of existance of routelister and are these regressions or improvements?":**
  1. **Per-behaviour spec audit.** Take each of the brief's seven required behaviours (A–G) and, against the current RouteLister spec text, state what it would change in the spec and in a run, and whether that change is an improvement or a regression measured against RouteLister's own NOT-list and design goals — a sized, per-behaviour verdict.
  2. **Identity analysis.** Assess whether the provenance refinement changes what RouteLister IS — the enumerate-without-selecting essence, the concept-identity unit, the two-file contract — or only how its records are written: an analysis along essence, viability (does it stay lightweight), boundary (does it drift into a provenance subsystem), and rationale (does it touch why RouteLister exists as the exhaust step).
  3. **Aggregate go / no-go.** Evaluate the brief as a whole — its diagnosis of the traceability gap, its proposal, its boundaries, and its validation plan — for soundness, and deliver one aggregate verdict (regression, improvement, or mixed with sizing) as the basis for deciding whether to authorise drafting.
  4. **Fix-shape review.** Evaluate the assistant's proposed fix shape (map-level source register; role clause in the existing `(bc …)` form; quote-vs-paraphrase marking; pointer into User Input; one new LAYER 1 mode; source labels only inside manifestations) for whether it is the smallest coherent change and where it would regress RouteLister — an assessment that shapes the eventual draft rather than gating it.
  5. **Harness-level placement.** Situate the requirement in the harness at large: is source provenance a RouteLister-specific need or a harness-wide need (self-containment, cross-session persistence), and what does the answer imply for whether the change belongs in RouteLister, in the runner, or in a shared protocol — including what else (traverse, conclude, `_route.md` consumers, installed copies) would have to move with it.
  6. **Practice-grounded check.** Test the brief's diagnosis against RouteLister's actual outputs in this repo — how sources are cited in existing `routelister.md` / `_route.md` files — to establish whether the traceability gap is real here, how large it is, and therefore whether the proposed behaviours fix a live problem or add cost for a hypothetical one.

## Scope Check

**IN scope (from Deconstruct bounds):** the `rl.md` proposal (diagnosis, seven behaviours, must-not-change list, validation plan) and the assistant's proposed fix shape, evaluated against RouteLister as it exists in this repo — spec text, canon rationale, and prior run outputs.

**OUT of scope (from MQ4):** making the change (drafting is an onward route unless the user authorises it); modifying the model_evaluation project's documents; inventing the unavailable example messages, links, IDs, or quotations; introducing a third required output file in any proposed shape.

Question covers goal. The three facets of the ask (requirements / existence / verdict) map onto the three kinds in the Deconstruct tuple; nothing in the Goal is unaddressed by the Question.

**Specific-vs-pattern check:** the question points at a specific brief (`rl.md`) and, through it, at one specific example route (MEOS-014). Two readings are plausible: (i) address JUST this brief's proposal as applied to RouteLister; (ii) address the BROADER PATTERN — provenance / self-containment of saved discipline artifacts across the harness. The user's wording scopes to "this" and to "routelister" explicitly, so the inquiry addresses **(i) this brief's proposal to RouteLister as its object**, and carries **(ii) the harness-wide pattern as a lens** (Considered Articulation 5) rather than as the object. This choice is surfaced at creation so the user can widen it.

## Layer Commitment

The question targets a discipline artifact (RouteLister's spec) — not for from-scratch redefinition, but for an evaluation whose central clause ("what it means in terms of existance of routelister") is a question about what the discipline IS. Primary layer declared:

- **Primary: Meaning.** This run adjudicates whether the proposal changes what RouteLister is as a cognitive operation (its essence, boundary, and reason for being), and grades the behaviours as regression or improvement against that.
- **Structural (out of scope for adjudication this run):** what the amended spec would look like — sections, record fields, the source register's shape. The requirements inventory *describes* the structural demands but does not fix the final shape; that is the drafting step, which the user has not authorised.
- **Process (out of scope for adjudication this run):** what steps a run executes to capture provenance and how the seven validation scenarios are run. Described where needed for the cost/viability facet; not decided here.

Sequential plan if the work continues: Meaning (this run) → Structural (the draft, if authorised) → Process (validation against the brief's seven scenarios and re-install).
