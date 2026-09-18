---
status: active
model: claude-fable-5-1 (articulation through critique) / claude-opus-5[1m] (routelister exhaust and this finding)
effort: max
---
# Finding: Is the RouteLister source-provenance proposal a regression or an improvement — and what does it require?

## Question

The user handed over a task brief, `rl.md` (an untracked file at the repo root, pasted from another agent session that ran on another machine), and asked: *"lets dive deep what this requires and what it means in terms of existance of routelister and are these regressions or improvements?"*

Some context so the question makes sense to a reader who has not seen the brief. **RouteLister** is one of the project's thinking disciplines (`cognitive_harness/routelister/`). Given a body of material (a project, a document set, or a finished inquiry's artifacts — called the *territory*) and a *goal*, it lists the concepts in that material as typed directions one could take — *routes* — without choosing among them. It writes two files: a per-run route-map (`routelister.md`) and a persistent index of the concepts it has seen (`_route.md`). The brief observed that when RouteLister consumes material that exists only in the surrounding conversation — a user's correction, a clarification — its saved maps cite that material with labels like "Conversation — the user's recipient correction", which prove something was consulted but give a later reader no way back to what was actually said. It asked for a small refinement so that a reader who never saw the conversation can recover a route's basis, and it listed seven required behaviours (labelled A through G), a list of things that must not change, and seven validation scenarios.

**The goal of this inquiry** (from `_branch.md`): an analytical assessment — not an implementation and not a plan — with three parts: what the proposal demands at the spec, run, and ecosystem levels; what it means for RouteLister's existence (its essence, viability, boundary, and reason for being); and a verdict, behaviour by behaviour, of regression versus improvement — possibly closing in a recommendation. Out of scope: making the change, the other project's documents the brief mentions, and inventing the example material the brief cites (which is not on this machine).

## Finding Summary

- **The proposal is an improvement, and a sized one.** Every one of the seven behaviours improves RouteLister under stated guards. Its value is modest on a corpus like this project's, where most routes rest on files, and large wherever RouteLister runs on conversation — the brief's own case.

- **It is an addition, not the "strengthening of an existing mechanism" the brief describes.** RouteLister's spec contains no source-reference vocabulary at all (a search for excerpt, quote, cite, provenance, transcript, paraphrase, verbatim, and source returns nothing). The pointers the brief points at — Guidance pointers with their `(bc …)` reasons — justify *advice*, not evidence. The change creates the mechanism. It also restores a role the record once had: the very first route-record schema (May 30) defined the WHY field as "territory-evidence"; a June rewrite turned WHY into a line of sight to the goal and the evidence role was lost.

- **RouteLister's identity is sharpened, not changed.** The line to hold is *basis in, engagement out*: where a route was perceived from is something only the perceiving run can record (the same argument that gave RouteLister its own state file), while what was later chosen or done with a route belongs to the logs. Recording a route's basis is the enumerator's own act; recording engagement would turn it into the recorder the design history fought to keep it from being.

- **The strongest case for the change is inside the spec, not in the brief.** The spec says routes are perceived from the territory and never invented, yet permits routes whose perceived object is unrecoverable. It designs the map for a cold reader (the June-21 format finding: "you were that cold reader"), yet permits content only the writer can decode. The proposal closes both gaps.

- **There is exactly one way the change makes RouteLister worse:** demanding citation precision without putting the never-invent rule first. An author asked for exact pointers will produce plausible ones. So the honesty clause must govern: precision beyond a bare file path, and any quotation, require the source in view during the run; conversation material is citable only as a short excerpt or as an honest "not recovered".

- **The two output files need different treatment.** The route-map is regenerated per run, so per-map source labels are safe. The index accumulates across runs where route identity is not stable, so it must never hold a bare label or a second registry of sources — only, where needed, a reference on a concept's own row, with a guarantee that every basis stays reachable.

- **The brief's diagnosis holds here, at modest scale.** Of this project's 128 route-maps, 14 maps (18 lines) attribute a route's content to something the user said; 50 maps (163 lines) carry a different mark — "at his word", "user-gated" — which is a gate on the route, not its basis. Two quoted user phrases exist only in their maps and nowhere else in their inquiry folders: the "only copy" case is real.

- **Recommendation:** implement, at the user's word, in this order — write one map by hand under the proposed convention first, then word the spec from what held, with the honesty clause leading, the index rule written as a reachability guarantee, and basis content kept subordinate to the prescription. The change cannot repair old maps, and a route whose original passage is gone can only say so.

## Finding

### Why we are discussing this

The brief arrived from outside this repo and asked for a change to a discipline whose whole design history is a fight to keep it an *enumerator* — a thing that lists directions — and not a *recorder* or a *chooser*. "Record where each route came from" sounds, on its face, like a recorder's job. The user's question was therefore not "is better citation nice?" but "does this change what RouteLister is, and is each piece of it a step forward or back?" Answering that required reading the brief, the spec, the canon that says who reads RouteLister's maps, the design findings that fixed its boundaries, and the project's own 128 maps to see how sources are cited in practice today.

### 1. What the proposal requires

**At the spec level — introduce a convention that does not exist.** The change adds one backward-facing kind of content to a record whose every field points forward (what to do, what it lands, why the goal gains). Concretely, in `cognitive_harness/routelister/references/routelister.md`:

- one sentence in the output section stating that the map is written for a reader who did not see the run — phrased as a property of the artifact, never as a reference to any consumer, runner, or protocol (the spec forbids outward references);
- one trailing **basis** entry per material reliance — up to three lines each, a ceiling not a floor — for every route that materially relies on an instruction, correction, observation, definition, or premise. "Materially" means that removing the source would change the route's move, its landing state, its reasoning, or its inclusion. The entry uses the grammar the record already has for its Touches field (an item plus a load-bearing qualifier in parentheses) and carries either a **pointer** (a file path with a section; a URL with a section; a location inside the artifact's own `## User Input` section or the inquiry's `_branch.md`) — usually one line — or, where no durable original exists, a **proportionate excerpt** (the speaker or the kind of source, the relevant sentence, and enough surrounding context to interpret it — never the conversation). The three-line ceiling is what keeps an excerpt interpretable without letting it grow into a transcript;
- a **role clause** on each basis line saying what the source supports ("establishes the audience", "corrects the earlier reading"), in the same parenthetical shape the Guidance pointers already use;
- one of three **marks** on every attribution — quotation, paraphrase, or not-recovered with a reason — so that a source's words are never confused with the author's reading of them, and an assistant's summary is never presented as the user's statement. An attribution without a mark is non-compliant;
- an **as-of** date or version only when the route's claim is about what a source said at a particular time, not merely that it exists;
- a **governing honesty clause** placed beside the spec's existing "perceive by enumerating; do not invent" rule: never invent links, identifiers, timestamps, transcript locations, quotations, or claims of having inspected a source; precision beyond a bare path and any quotation require the source in view during this run; a bare path may be cited from knowledge only if it resolves;
- one new operational failure mode — a material reliance with neither a usable pointer nor a preserved excerpt — whose corrective is to keep the route, mark the limitation, and raise the map's verdict to FLAG; plus one telemetry count of pointer, excerpt, and not-recovered lines;
- per-map **labels** so several routes can share one reference, regenerated with the map;
- in the index file `_route.md`, no source content by default; a "found-in" **reference** (a location, never a label) on a concept's own row — permitted always, required when the concept's basis is no longer reachable through a map named in the index's invocation log (for instance after the concept was split or the map re-authored); references whose target no longer resolves are flagged stale, not deleted, as the index already does for concepts;
- a layout guard: basis content never leads a record; the prescription stays first;
- a forward-only rule: no existing map is rewritten; a reader may backfill a *reference* on an old map by hand, never a reconstructed quotation.

**At the run level — one entry of up to three lines per material reliance, and often none.** A route whose basis is already a file path in its Touches field needs no separate basis line. The artifact's `## User Input` section is never copied again. On this project's corpus, where every one of the 128 maps already cites file paths and 72 of them cite sections, most routes would add nothing. The cost band is the one measured for the last record change (the June-21 format finding): dense routes grew by roughly a quarter, short routes not at all.

**At the ecosystem level — a byte copy and nothing else.** The installed skill at `~/.claude/skills/routelister/` is byte-identical to the canonical copy, so installing is a copy. The `/traverse` runner's contract (it passes the inquiry's artifacts as territory and quotes the goal), the CONCLUDE protocol, and the routelog recorder are untouched. Other projects that run RouteLister inherit the rule at their next run. Old maps stay as they are.

### 2. What it means for RouteLister's existence

**Its essence is unchanged; what it shows changes.** RouteLister remains the discipline that sweeps a territory, individuates the goal-relevant concepts, and casts each as a typed prescriptive route without choosing among them. After the change, each route also carries where it was perceived from.

**The line that keeps it an enumerator: basis in, engagement out.** The design history draws one boundary again and again — "one enumerator, two controllers"; "log your choices, not the territory"; the map is redrawn each survey while the journey is kept in a log. Applied at the level of a single route record, that boundary separates two kinds of recording. A route's *basis* — the passage or file it was perceived from — exists only at perception time, in the perceiving run; no later component can produce it, and on a standalone run no other component is present at all. This is exactly the argument the May-30 finding used to give RouteLister its own state file: a cumulative, standalone discipline must own what only it can write. A route's *engagement* — whether it was chosen, what was done, what came of it — is produced afterwards by whoever acts, and the routelog recorder already owns it. The proposal stays entirely on the basis side. A provenance rule that drifted into who-did-what-when would be the regression; this one does not.

**The reader the change serves is the reader RouteLister was built for.** The canon describes "a fresh, context-isolated session … running the enumerator (routelister) over a finished cycle" — the navigational session it calls "the eyes"; it says the meta-layer "reads the loop's artifacts … not its cognitive internals"; and the harness stage lens says the route-map "is consumed after the inquiry concludes, by whatever picks the next step". A map that cannot be checked by someone who was not in the room fails the reader it was designed for.

**The spec's own two gaps are the strongest justification.** First, the spec says routelisting "perceives by enumerating … it does not invent items the territory does not contain", and calls a manifestation "one artifact-level appearance of a concept" — yet a map may carry a route whose appearance no reader can find. That is a claim of perception with no perceivable object. Second, the record was redesigned in June explicitly for a cold reader, yet it permits content only its writer can decode. The brief named the symptom from outside; the spec already contained the reason.

**An external precedent confirms the shape.** The May-30 output-schema finding modelled the index on a library authority file — "a registry of Works, each linking to its own Manifestations". Library authority records carry, per heading, a note of the sources consulted and what was found in them, and a separate note for sources consulted where nothing was found. Attaching a source reference to a concept's own row, and recording an honest negative result, is inside the model the design chose.

**Viability holds under three guards.** Bloat is bounded by materiality and by the rule that recoverable material is never copied. Fabrication is bounded by the honesty clause leading. The index is bounded by the reachability wording and the ban on a second registry. The one existential risk is wording: a clause that names a caller (breaking the spec's self-containment) or a source database growing in the index.

### 3. Regression or improvement, behaviour by behaviour

The yardstick used, extracted from the spec and the audits, is two-sided. A change is a **regression** if it trips an identity boundary (a stored route-to-route relation; a reference to a runner or process; consumer or process state in the index; a new meaning for Priority, Confidence, or Essentiality), breaks a design guarantee (index compactness; idempotency on re-run; the ceiling-not-floor rule for record length; the consumer-filled done-mark), or induces dishonesty. It is an **improvement** only if it also improves what a reader can recover.

| Behaviour from the brief | Verdict | The guard that keeps it an improvement |
|---|---|---|
| A — specific references | improvement | pointer forms are whatever the territory itself provides (a Slack permalink in a Slack-fed project, a `_branch.md` line here); precision beyond a bare path requires the source in view this run |
| B — preserve an excerpt when no usable pointer exists | improvement — the "only copy" case is real in this repo | the relevant sentence, the speaker or source kind, and enough context to interpret it, within a three-line ceiling; never the conversation; never a passage already recoverable by path |
| C — say what the source supports | improvement, in a shape the record already has | the parenthetical qualifier grammar of Touches and Guidance; never a statement about another route |
| D — keep the source's words apart from the author's reading | improvement | quotation, paraphrase, or not-recovered mark on every attribution; "the source said X" never becomes "X is true" |
| E — handle changing sources | improvement as a criterion | an as-of mark only when the route's claim is about the source's state at the time; a regression if it became version tracking |
| F — honesty when provenance is unavailable | improvement, and the load-bearing one | must be the governing clause; a precision-first version is the one regression path; routes are kept and marked, never discarded |
| G — reuse references across the map and the index | improvement in the map; needs refinement in the index | per-map labels regenerated with the map; in the index a reference on the concept's own row, never a bare label, never a second registry, with a reachability guarantee |
| **Aggregate** | **improvement, sized** | modest on an artifact-fed corpus (14 of 128 maps here), large for conversation-fed runs (the brief's case); a regression only under precision-first wording, an index registry, Confidence used as a verification score, or retroactive repair |

Two comparisons behind the sizing. Compared with the brief's framing ("a traceability gap in RouteLister's outputs"), this project's maps show the gap is concentrated: 18 basis-style attributions in 14 maps out of 128, against file-path citations in all 128. Compared with the other conversation-style mark found in the corpus — "at his word" and "user-gated", 163 lines in 50 maps — the basis gap is the smaller phenomenon; those gating marks are a different question (see Open Questions).

### 4. Two corrections to the brief

**The mechanism it asks to strengthen does not exist.** The brief says "RouteLister already requires reasons for Guidance pointers. Integrate this requirement with that existing mechanism", and "Strengthen the existing source-pointer mechanism". The spec has no source-pointer mechanism by that or any name. Guidance pointers are prescriptive — what to do next — and their reasons justify the advice. The evidence-shaped field the record once had (WHY as "territory-evidence") was repurposed in June. The change is therefore an addition that restores a displaced role, not a strengthening. The brief's diagnosis is right; its description of the fix's size is not.

**Its example is not available here, and its diagnosis is confirmed anyway.** The brief points at two output files and an installed skill under a `/Users/nsstorm/` home and a `model_evaluation` project, neither of which exists on this machine. Nothing in this finding relies on that example. The same phenomenon was found independently in this project's own maps, including two cases where the only surviving copy of a user's words is the map itself.

### 5. The recommendation and its guards

Implement — at the user's word, which has not yet been given (the message that opened this inquiry ends "Say the word and I'll draft"). In this order:

1. Write one route-map by hand under the proposed convention, on a conversation-fed territory if one is available, and count its pointer, excerpt, and not-recovered lines. This follows the project's own rule for instrument changes, recorded in the July-2 route-map audit: "test it first inside a live sweep before wording any spec text".
2. Word the spec from what held in that map, with the honesty clause first.
3. Describe the change honestly: substantively an addition (a new kind of content), formally a refinement (one entry-type of up to three lines under the spec's existing text-convention rule, plus marks, one sentence, one failure mode) — never "zero new fields".
4. Keep the index wording a reachability guarantee, not a registry.
5. Copy to the installed skill and write the report the brief asks for (what changed, where the requirement lives, how a future map differs, how it was checked, what limitation remains), walking its seven scenarios against local analogues rather than its unavailable example. One local analogue for each: a path-cited route (any map); a goal named in `_branch.md`; an "at his word" gate; several routes gated on one correction; the July-8 spider-web harvest map, whose route about the analogy family cites `docs/canon/thinking_space_traversal_analogies.md` (edited July 13) and the seed index `devdocs/seeds/_seed.md` (edited July 19) — a claim about documents that changed after the map; a paraphrase-only attribution; a re-run on an active territory.

The July-2 audit left a pending four-part touch-up to the same spec file (an "appears also on" pointer, a sentence protecting consumer notes in the done-column, a records-lean clause, a worked example for the WHY field). If both are wanted, one coordinated edit is the standing convention.

### 6. What the change cannot fix

The change is forward-only. Existing maps keep their labels; a reader may add a reference to an old map by hand, but nobody may reconstruct what the user said. Where a conversation turn was never preserved, the most a future map can do is say "original not recovered" and why. This is not a weakness of the proposal; it is the limitation the brief itself names, and inventing the missing material would be the worse outcome.

## Next Actions

### MUST
- **What:** Write one route-map by hand under the proposed convention (basis lines, marks, role clauses, the not-recovered form) and count its line kinds.
  - **Who:** the user, or this session at the user's word; a conversation-fed territory preferred.
  - **Gate:** condition-bound — the user authorises the draft.
  - **Why:** the convention's dialect is seen before it is codified; the spec text then fits what held. Skipping this is how a wording error becomes the one regression path.
- **What:** Draft the spec change in `cognitive_harness/routelister/references/routelister.md` (plus one line in `SKILL.md`), honesty clause first, index rule as a reachability guarantee, basis content subordinate; copy to `~/.claude/skills/routelister/`; write the brief's requested report with the seven scenarios walked against local analogues.
  - **Who:** this session at the user's word; the user reviews.
  - **Gate:** condition-bound — the dry-run map exists.
  - **Why:** a spec under which a later reader can recover what a route rests on, or read an honest "not recovered"; the installed copy stays identical to canonical.

### COULD
- **What:** A blind re-read — hand a convention-written map to a session that never saw its run, and to the user, and ask per route what the source is, what it says, what it supports, and which part is interpretation.
  - **Who:** a fresh session and the user.
  - **Gate:** condition-bound — a convention-written map exists.
  - **Why:** the acceptance question answered by someone outside the run rather than by the author.
  - **Depends-on:** MUST item "write one map under the convention". This COULD is GATED — do not act until the MUST resolves.
- **What:** Make conversation material pointable at the runner level — have `/traverse` persist mid-pipeline user turns beside `_branch.md` (the original ask is already on disk; later corrections are not).
  - **Who:** the traverse runner (`cognitive_harness/traverse/SKILL.md`), not the RouteLister spec.
  - **Gate:** observable — the first traverse run whose route-map carries a not-recovered basis line.
  - **Why:** in traverse runs the excerpt clause becomes rare and the pointer clause covers corrections too; the requirement's footprint shrinks where the harness runs most.
  - **Depends-on:** MUST item "draft the spec change". OVERRIDE: this COULD is adoption-ready independent of the spec change. Reason: persisting user turns beside `_branch.md` has standalone value for any reader of an inquiry folder and never enters the RouteLister spec.
- **What:** Investigate the gating marks — "at his word", "user-gated", 163 lines in 50 maps — and decide whether they are legitimate Guidance pointers with reasons or a disposition decision the spec's exclusion list forbids.
  - **Who:** a separate inquiry on RouteLister.
  - **Gate:** condition-bound — when the next route-map audit runs, or earlier at the user's word.
  - **Why:** the census that sized this finding's verdict split off a second phenomenon it did not adjudicate; settling it protects the sizing from being misread.
- **What:** Consolidate the harness's provenance postures — surfacing's content-free artifact, the disciplines' verbatim `## User Input`, the seed harvester's required source-support, CONCLUDE's cited evidence, and RouteLister's basis line — into one stated convention (pointer where a durable original exists; excerpt where none does; marks; never invent).
  - **Who:** a harness-level note, not a shared protocol (each discipline's spec must stay self-contained).
  - **Gate:** condition-bound — after the RouteLister change has been used on at least three maps.
  - **Why:** RouteLister is currently the only artifact-writing discipline with no provenance rule; the rules should agree across the harness.
- **What:** Give the reader principle ("a map is written for a reader who did not see the run") a docs home — the walkthrough's output section in `docs/walkthrough.md` or a canon line beside the navigational-session passage.
  - **Who:** the user (docs and canon writes are theirs).
  - **Gate:** condition-bound — at the user's word, after the spec change lands.
  - **Why:** the principle readable where the design is narrated, not only in the spec; canon body must stay self-contained (no inquiry-folder references).
- **What:** Run the seed harvester's gate over the three germs this dive threw off (record-wide seen/said/concluded marking; the gating-marks question; the sourced-route ratio) and record any that pass in this finding and in `devdocs/seeds/_seed.md`.
  - **Who:** this session or the user.
  - **Gate:** condition-bound — at the user's word (this was not a harvest dive; the seeds section is optional).
  - **Why:** cross-inquiry reuse of by-products; expect at most one live seed, since two of the three are already routes.
- **What:** One short memory line for cross-session findability (the memory index is already over its size limit; detail belongs in a topic file).
  - **Who:** this session.
  - **Gate:** condition-bound — at the user's word.
  - **Why:** a later session finds this verdict without re-deriving it.

### DEFERRED
- **What:** A per-map sourced-route ratio (pointer / excerpt / not-recovered shares) reported in telemetry and counted by the venture-atlas converter beside its honesty counters.
  - **Gate:** observable — the next atlas-converter change, or the next route-map audit, once maps carry basis lines.
  - **Why (if revived):** provenance becomes a descriptive number a later monitor or Selector can read; paired with the honesty clause and the blind re-read so it cannot be gamed by boilerplate citations.
- **What:** Record-wide marking of what was seen in the territory, said by someone, and concluded by the author — across every prose field of the record, not only citations.
  - **Gate:** condition-bound — after the citation convention has been used on at least ten maps and its dialect has settled.
  - **Why (if revived):** the analysis found the record's underlying defect is unmarked speech acts, of which citations are the costliest case; widening would generalise the fix, at a real risk of turning the map into a transcript of the author's cognition — which is why it was cut from this change.
- **What:** A consumer-side place to contest a route's basis ("this quote is misattributed") — most naturally an append-only row in the routelog recorder, which RouteLister never reads.
  - **Gate:** observable — the first contested basis on a convention-written map.
  - **Why (if revived):** a contested basis has a home without rewriting the map.

## Reasoning

### What was killed, and why

- **Give provenance to the routelog recorder or to traversal memory instead of RouteLister.** Killed at sensemaking. The recorder writes after enumeration and never knows what a route was perceived from; only the perceiving run holds that, and on standalone runs nothing else is present. The argument is the same one that gave RouteLister its own state file in the May-30 two-output-files finding.
- **Treat the change as a tweak to Guidance reasons.** Killed by a search of the spec: no source vocabulary exists; Guidance reasons justify advice; a reason clause cannot carry what source, which passage, what it says, what it supports, and which part is interpretation without becoming a citation.
- **Point at the transcript instead of copying an excerpt** (the "copies rot" doctrine from the June-22 traversal-memory finding). Killed by a substance test: the phrases "big big problem" (July-8 spider-web harvest map) and "dont make changes yet" (July-8 warm-pass map) appear nowhere in their inquiry folders except the maps. The copies-rot argument presumes a durable original; a conversation turn in this harness has none, and session logs are tool-local files no canon consumer reads. Where an original does exist, the pointer rule already applies.
- **A shared source cited by several routes is an inter-concept dependency edge.** Killed: what is stored is route-to-source; a route-to-route relation is never a value. Two routes already cite the same file in their Touches fields without the spec calling that an edge.
- **Fold a provenance limitation into the Confidence rating.** Killed: Confidence rates how well the target concept is understood; recoverability rates the record. They vary independently (a canonical concept cited from memory; a half-formed concept perfectly sourced), and the brief forbids the fusion explicitly.
- **A global source registry inside `_route.md`.** Killed at critique as the one place a regression is easy: a second registry keyed by label, growing without a stale mechanism, is the side door through which shared-source coupling would be stored, and bare labels dangle because route identity is not stable across runs (the June-22 third-file finding). What survives: a reference on a concept's own row, required only when reachability through the invocation log breaks.
- **Scope the rule to user corrections only** (the brief's motivating example). Killed: the corpus shows four shapes of label — interpretive attributions, gating quotes, user valuations, and finding-internal labels like "critique C2" — plus the changing-document case; a correction-only rule would leave pointer precision untouched.
- **Any added content is bloat; only removals improve RouteLister.** Killed by the June-21 measurement that structured content raised readability at bounded cost and the July-2 audit's finding that the added fields "earned their keep"; leanness belongs to the index, clarity to the records.
- **Re-run old territories to regenerate old maps under the new rule.** Killed: the missing turns are gone; a re-run re-perceives only the files and would either carry the same limitation or invite invention, which the brief forbids.
- **Cite only what this run read, in its unscoped form.** Refined, not killed: an author who knows a canonical path from earlier sessions would otherwise have to mark it "not recovered", reducing recovery. Scoped to precision beyond a path and to quotations.
- **Restore the evidence role by rewriting the WHY field to carry evidence again.** Killed: the June WHY rewrite removed evidence from WHY because WHY had become a cramped local justification; putting evidence back re-crams it, and evidence is not a line of sight to the goal. What survives: WHY may point at a basis line instead of restating it.
- **Mark seen / said / concluded across the whole record as part of this change.** Killed for scope and for the risk of turning the field of directions into a dossier; kept as a deferred seed.
- **Include a route only if its basis is recoverable.** Killed twice: the brief says not to discard useful routes, and the spec's own asymmetry principle says losing a route is the worse failure. Routes are kept and marked.
- **Two frame-level counter-readings were tested and failed.** "Provenance belongs upstream in the runner, so RouteLister should carry no basis content" — the runner is absent on standalone runs and the spec cannot rely on a caller; the runner-side capture survives as a complement, not a replacement. "The change is a regression because a map full of evidence reads as a case file, not a field of directions" — answered by the layout guard; the record already carries reasoning and meaning-gaps without reading as a dossier.

### What survived, and why it held

- **Basis in, engagement out** held under prosecution because it is the project's own line (map versus log; log your choices, not the territory) applied one level down, and because an external vocabulary — the W3C provenance model's distinction between what an entity *was derived from* and the *activity* that generated it — draws the same line.
- **The spec's two internal gaps** held because they are quoted from the spec itself, not imported from the brief.
- **The census split** held after the strongest objection ("at his word" *is* a basis): a gate is a disposition toward a route, filed under Guidance or excluded by the spec's disposition row; it is not what the route's content was perceived from.
- **The excerpt clause** held, and was strengthened, by the only-copy test above.
- **The changing-source criterion** held by a local case: the July-8 harvest map's claim about the analogy family's state now refers to a document edited five days later.
- **The reachability wording for the index** held as the refinement of the registry idea: the index's invocation log already names each run and its mode, so a map is reachable by run; a reference on a concept's row is needed only when that path breaks.
- **The two-sided yardstick** held because a change that preserves every boundary and recovers nothing is pure cost graded as improvement; recovery is measurable by a blind re-read and by the telemetry count.

### Contradictions reconciled

- **Three provenance postures in the harness looked contradictory** — surfacing's artifact carries no item content; the disciplines copy the raw user input verbatim; traversal memory records choices with pointers and never copies. They reconcile on one determination: copy only what has no durable original; point at everything else. The brief's behaviours A and B are the two sides of that rule.
- **The brief's mechanism claim versus the spec.** The warm articulation pass flagged this as a resolvable content conflict at the start of the pipeline (the brief names a mechanism the spec does not contain; the brief's evidence is not on this machine) and re-anchored the inquiry onto this repo's own spec and corpus. The conflict was carried through as a correction, not a blocker.
- **"27 of 128 maps" versus "14 of 128".** The first count, made during surfacing, mixed gating marks with basis attributions. The innovation pass split them by a recount; the critique accepted the split. The finding uses the split figures throughout.

## Open Questions

### Monitoring
- Adoption of the convention, and the count of pointer / excerpt / not-recovered lines per map, at the next route-map audit — observable after the first ten maps written under the rule.
- Whether the same model family that authors maps also reads them blind reproduces the user's recovery verdict — observable at the first blind re-read.

### Blocked
- The blind re-read cannot run until a convention-written map exists.
- The sourced-route ratio cannot be computed until maps carry basis lines.

### Research Frontiers
- Whether the whole route record needs seen / said / concluded marks, beyond citations.
- Whether the gating marks ("at his word", "user-gated") are Guidance or a disposition decision the spec excludes.
- Whether this project should ever maintain an accessible transcript location, which would make transcript pointers legal here (the heavy form of making conversation material pointable).
- Where a reader contests a basis.

### Refinement Triggers
- **The sizing verdict ("modest here, large for conversation-fed runs") re-opens** if a census of a conversation-fed corpus (for instance a project whose RouteLister runs are orchestrator-fed) shows basis-style attributions in fewer than one map in ten. The blocking feature is the absence of such a census; a single conversation-fed corpus count neutralises it.
- **The identity verdict ("sharpened, not changed") re-opens** if the drafted wording cannot state the pointer forms without naming a caller, runner, or protocol — that is, if the spec's self-containment rule (section 1.4) cannot be held. The blocking feature is that wording; the dry-run map is where it is tested.
- **The excerpt clause's "only copy" justification re-opens** if the project adopts an accessible transcript location or the runner persists mid-pipeline turns — at which point excerpts should shrink to the standalone case only.
- **The index rule re-opens** if a re-individuation (a concept split or merged across runs) is observed to break reachability through the invocation log in practice — the first such observation should be recorded on the affected `_route.md`.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

The ask, verbatim (the final line of a message whose earlier part quoted back the assistant's own reading of `rl.md`; the full quoted context is preserved in `_branch.md`'s Source Input section):

```text
lets dive deep what this requires and what it means in terms of existance of routelister and are these regressions or improvements?
```

</details>
