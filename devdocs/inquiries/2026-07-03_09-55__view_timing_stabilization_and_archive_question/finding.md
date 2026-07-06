---
status: active
model: claude-fable-5
effort: max
refines: devdocs/inquiries/2026-07-03_09-13__generate_concept_view_protocol/finding.md
---
# Finding: The View Lifecycle — Stabilization Ceremonies, and Why Views Never Move Anything

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-07-03_09-13__generate_concept_view_protocol/finding.md`
**Revision trigger:** the user's lifecycle questions — when views are generated, what one view targets, and whether generating a view should archive the past inquiries (with their own info-loss worry attached).
**What's preserved:** everything the protocol committed — the two modes, the constitution, the mechanism, the home, the build staging.
**What's new:** the lifecycle doctrine — the two-tier stabilization ceremony, the one-concept targeting rule, the freedom-first timing line, the never-moves clause, and the archive question's full adjudication.
**Migration:** none — the doctrine's ~6 clauses land WITH the protocol's build (one file, one edit).

## Question

From `_branch.md`: *"Generating a view should be something we do when we're done executing a sequence of inquiries and reach a final verdict — when the topic stabilizes (inquiries entangle multiple concepts, but maybe only one should be targeted per view). Then we run the generate-view protocol with traverse: it reads all the past, creates the view document — and then puts all the past ones into archive? But would that cause us to lose information and important details…? Or maybe views should belong to another folder — we don't touch the inquiries folder's stability, and views go in a views folder, so things don't get tangled up?"*

## Finding Summary

- **Your folder instinct is confirmed — it is already the shipped design.** Views live in `devdocs/views/`, inquiries in `devdocs/inquiries/`, and the protocol never searches views for sources. The trees can't tangle in either direction.

- **The archive question splits into two questions, and they have different answers.** *Does archiving lose information here?* No — measured: this house's archive (`devdocs/inquiries/_archive/`, **265 inquiries strong**) sits INSIDE the searched tree; archived findings still come back from every grep, every digest, every discovery run. Archiving here is shelving within the library, not removal. *Should VIEW-GENERATION do the archiving?* **No** — two independent killers: (1) a move breaks paths, so the stabilization view's own excerpt-pointers would be wrong at birth and the supersession-tagging would silently stop matching moved findings; (2) an inquiry may only move when ALL its concepts are done, and inquiries entangle **~8–10 concepts each** (measured) — deciding "all done" per inquiry is exactly the per-thing bookkeeping you rejected two days ago. (The 265 precedent corroborates: they were moved era-bulk when a whole period turned — never per-topic.) **Resolution: decoupled.** Views never move, rename, or archive anything; era-bulk archiving stays available as its own deliberate act.

- **Your worry was the right instinct pointed at the wrong risk:** content survives a move — links don't.

- **The stabilization ceremony, two tiers.** *Light close (the default):* say **"stabilize \<concept\>"** → the view regenerates with the declaration in its header (`Stabilized: by user declaration, <date>`). One step, minutes; reopening costs nothing. *Full consolidation (earned):* **"stabilize \<concept\> with consolidation"** → assembly → **a traverse over the assembly** → the **consolidation finding** (living in `inquiries/` as history, superseding what it consolidates) → the view regenerates, now headed by the consolidation and auto-tagging the superseded findings. Your "run the view protocol with traverse" is exactly this tier.

- **The tier-diagnostic is free:** the light close's own first step (the assembly) already counts superseded findings and surfaces contradictions — *run the light close first, and let its assembly tell you whether consolidation is earned.* You still decide.

- **One concept per view** — inquiries entangle many concepts (measured ~8–10), so one inquiry legitimately appears in MANY concepts' views; each view reads one thread. That's the design working, not duplication (views point, they never own).

- **Timing is freedom-first:** on-demand generation is unchanged — generate whenever wanted; stabilization is the canonical OCCASION (where generating is most valuable), never a gate. You are the stabilization judge today; the derivable signals (a view exists · refinement gone quiet · the newest map's routes all closed) are named as future candidates only.

- **The growth answer, honestly:** nothing bounds the live inquiries folder continuously, and nothing needs to — grep, the digest, and folder-listing are count-insensitive. **The folder stops feeling tangled the day you stop ENTERING through it** — when "what's the state of X?" is answered by opening `views/X` instead of scrolling `inquiries/`, the 151 folders become the library's stacks, not its lobby.

## Finding

### 1. Context

The concept-view protocol was designed hours ago (two modes; assembly-grade; dated regenerable snapshots in `devdocs/views/`). Your questions add its missing LIFECYCLE: when views happen, what they target, and what becomes of the inquiries they read. The archive thread carried a real tension — your proposal to archive-on-view sat next to your own "history should stay as history" law — and this inquiry measured its way to the answer instead of arguing tastes.

### 2. The archive answer, from the ground up

A view needs the past to stay reachable — every excerpt points at a finding's path. So first: what does "archive" actually do in this house? Measured: `devdocs/inquiries/_archive/` holds **265 inquiries** (April–May chains, moved wholesale when that era ended), and a live test confirmed the discovery grep reaches INTO the archive — it is a subdirectory of the searched tree. **Archiving here never lost anything.** Your info-loss worry, pointed precisely: a move loses no CONTENT — it breaks LINKS (paths in view excerpts, in `refines:` frontmatter, in cross-map references).

That gives the coupling question its answer. Should generating a view move the inquiries it read? No — two independent killers, either sufficient alone:

1. **The self-defeating pairing.** The stabilization view is generated with pointers to `devdocs/inquiries/X/…`; the move then relocates X — every pointer in the just-created view is wrong at birth, and the supersession-tagging (which matches recorded paths against actual paths) silently stops working for everything that moved. The ceremony would break its own artifact.
2. **The unit-mismatch.** Views target ONE concept; inquiries entangle ~8–10 (measured on two recent ones). An inquiry may only move when ALL its concepts are settled — and tracking that per-inquiry is exactly the per-thing bookkeeping you refused when you rejected the registry-store.

And the corroboration: the 265 precedents were era-bulk moves — a deliberate storage act when a whole period turned. The house has never archived per-topic; the practiced model is already the decoupled one.

**The doctrine line (landing in the protocol's constitution):** *"Generation is read-only over `devdocs/inquiries/`: no output of this protocol moves, renames, or archives any inquiry. Archiving, if ever, is a separate deliberate storage act (era-bulk, as practiced) — never a side effect of views."* One robustness rider for any future era-bulk move: the supersession walk matches by path OR basename (folders keep their names when moved), and the views affected simply regenerate — regeneration IS the pointer-migration (views are regenerable by design); old textual references stay historical, basename-recoverable.

### 3. The stabilization ceremony — two tiers, existing machinery only

When you declare a topic stabilized, something should mark it and something should make the topic maximally readable. Both needs are met by machinery that already exists, at two depths:

**The light close (default).** Invocation: **"stabilize \<concept\>"**. One step: regenerate the concept-view; its header carries `Stabilized: by user declaration, <date>`. Minutes. Reopening costs nothing — new findings simply arrive, and a newer view supersedes. Two rules keep the state readable across snapshots (critique's catch): **the newest view's header is the current state — older headers are history**; and when a topic that once said "stabilized" regenerates without it, the generator derives a note (*"previously stabilized \<date\>; reopened by \<finding\>"*) — no state kept; the folder's own files carry it.

**The full consolidation (earned).** Invocation: **"stabilize \<concept\> with consolidation"**. The two steps: run the protocol (assembly), then a **traverse over the assembly** — the shipped synthesis handoff — producing the **consolidation finding**: the topic's synthesis, living in `devdocs/inquiries/` as history, carrying `refines:`/`supersedes:` frontmatter over the findings it consolidates. Then regenerate the view — it now opens with the consolidation's summary, and the supersession walk auto-tags the pre-consolidation findings from the new frontmatter. **The dividend:** every future view of that concept is more honest automatically; the ceremony feeds the machinery.

**Which tier?** The light close's own assembly is the diagnostic: it already counts superseded findings and surfaces contradictions in the hit-set. Run the light close first; if its assembly shows contested history — heavy supersession, open contradictions — or a live decision rests on the topic, or you simply want the synthesis, escalate. You decide; the evidence is generated by the step you were already taking.

**One guard clarified (critique):** the SUBORDINATE condition protects the **truth-location**, never the reading-order. Reading the view first is the design — that is what views are FOR. Citing the view instead of the finding is the violation. After a full consolidation, the truth-node is the consolidation FINDING (in `inquiries/`, part of history); the view heads with its summary and points at it.

### 4. One concept per view

An inquiry is a braid; a view is one strand pulled straight. The measured entanglement (~8–10 load-bearing concepts per recent inquiry) means a "view of an inquiry" would be an incoherent read, while one inquiry appearing in eight concepts' views is the system working — each view orders ITS thread (first seen → decisions → outcomes → open ends), and all of them point at the same shared history without owning any of it. The sweeper's probe-0 ("whose practice, doing what?") is the precedent: one practice per sweep; one concept per view.

### 5. Timing — freedom first

*On-demand generation is unchanged — generate whenever wanted. Stabilization is the canonical OCCASION (where generating is most valuable, because the consolidation exists to head it), never a gate.* The stabilization judge today is your declaration — consistent with the fuzziness boundary (no formula). The derivable signals are named as future candidates only: a view exists for the concept; refinement has gone quiet (no new finding refines the topic's newest for a while); the topic's newest route-map shows every route ✓ or stale.

### 6. The growth question, answered honestly

Nothing bounds the live inquiries folder continuously — and nothing needs to. The three operations that touch it at scale are count-insensitive: grep-discovery (measured across 403 findings without strain), the last-N digest (reads 15 folders regardless of the total), and folder-listing (the count surface). The tangled FEELING is real, and its answer is not moving history — it is changing your entry point: **when "what's the state of X?" is answered by opening `views/X` instead of scrolling `inquiries/`, the folders become the library's stacks, not its lobby.** And when the current era someday turns — the way the April era did — era-bulk archiving remains available as its own deliberate act, with the riders of §2.

## Inherited Commitments Re-test

The `_branch.md` declared a Synthesis Trigger over two priors. The re-tests ran at critique; inherited with evidence:

- **Commitment:** the 09-13 protocol design (two modes; assembly + traverse handoff; the constitution incl. SUBORDINATE; home `devdocs/views/`; regenerate-never-edit; the build one word away).
  - **Source:** `devdocs/inquiries/2026-07-03_09-13__generate_concept_view_protocol/finding.md`.
  - **Re-test status:** RE-TESTED — commitment confirmed; the doctrine EXTENDS without contradiction. **Evidence:** the timing line was prosecuted for gate-creep and reworded freedom-first (on-demand leads; the occasion never gates); the ceremony was prosecuted against SUBORDINATE and survived with the clarifier (truth-location vs reading-order — reading views first is the design; the consolidation FINDING is the truth-node); the ceremony's two tiers map exactly onto the shipped assembly/synthesis split (no new machinery — only occasions, names, and two header rules).

- **Commitment:** "history should stay as history" + the duplication anti-pattern's mechanism (from the read-half lineage).
  - **Source:** `devdocs/inquiries/2026-07-03_00-53__four_unconsidered_memory_paradigms_assessed/finding.md` (and the June-22 ground beneath it).
  - **Re-test status:** RE-TESTED — commitment confirmed and APPLIED as the adjudication's own law. **Evidence:** the archive-coupled proposal was tested at its best (the 265-precedent steelman) and killed on two independent grounds with the precedent itself re-read as corroboration FOR decoupling (era-bulk, never per-topic); the unit-mismatch ground is the user's own rejected-burden argument returning as a killer; history moves only as a deliberate storage act, never as a view side-effect.

## Next Actions

### MUST

*(None — the doctrine is design; its clauses land with the protocol's build, already gated on your word.)*

### COULD

- **What:** The protocol build, doctrine-enriched — the 09-13 build with this finding's ~6 clauses joining the transcription (never-moves · the stabilization section with tiers, invocations, the newest-header rule, the reopened-note, and the tier-diagnostic · one-concept · the basename rider with honest bounds).
  **Who:** the AI, same ≤30 minutes (the clauses are ~15 lines).
  **Gate:** condition-bound — your word (`[∥]` the 09-13 map's R1).
  **Why:** the protocol ships lifecycle-complete; no follow-up patch.

- **What:** The first stabilization ceremony — a light close on the first topic you declare.
  **Who:** you declare; the AI runs the close.
  **Gate:** condition-bound — your declaration (never forced to test the machinery).
  **Why:** doctrine proven on a real topic; reopening shown cheap.
  **Depends-on:** COULD item "The protocol build". GATED.

### DEFERRED

- **What:** era-bulk archiving of the current era.
  **Gate:** condition-bound — a period genuinely turning (as April's did).
  **Why (if revived):** the practiced deliberate act, with the walk's basename-matching and a views-regeneration pass as the migration.

- **What:** signal-based stabilization detection.
  **Gate:** condition-bound — the fuzziness boundary's own maturation (a consumer + evidence).
  **Why (if revived):** the three named candidates are derivable and stateless.

## Reasoning

**Why decoupled won over your archive proposal — argued at the proposal's best:** the steelman ("265 archived inquiries prove bulk archiving works; grep finds everything; coupling gives the folder a natural lifecycle") was given the full floor and failed on the merits: the 265 prove the DECOUPLED model (they moved era-bulk, never per-topic); grep-reachability is not referential integrity (the coupling breaks the new view's own pointers at its own ceremony); and the lifecycle it promises requires per-inquiry all-concepts-done bookkeeping — the burden you already refused. Its true kernel — unbounded growth — was extracted and answered separately rather than buried.

**Why two tiers instead of one ceremony:** the mandatory-traverse version was killed by its own weight (most topics don't earn a synthesis run); the tier split keeps the full path for topics that do, and the assembly-as-diagnostic makes the choice evidence-based without bookkeeping. The tiers add NO machinery — they are the protocol's own two depths (assembly / traverse handoff) wearing lifecycle names.

**Significant kills:** archive-on-view (two killers + corroboration); the mandatory-traverse ceremony (weight); the "consolidate" invocation (collides with routelister's CONSOLIDATE verb — replaced by your own word, "stabilize"); continuous folder-bounding (a non-problem operationally); gate-flavored timing language (reordered freedom-first); the stabilized-header ambiguity across snapshots (closed by the newest-header rule + the derived reopened-note).

## Open Questions

### Monitoring
- Does the first light close's reopened-note fire correctly when a stabilized topic reopens?
- Does the tier-diagnostic's supersession-count actually predict which topics feel consolidation-worthy?

### Blocked
- Everything landing — blocked on the protocol build (your word), by design.

### Refinement Triggers
- If a stabilized topic reopens within days repeatedly → the stabilization judgment is firing early; revisit what "done executing a sequence" means for you (a doctrine note, not a formula).
- If era-bulk ever runs → execute the migration pass (regenerate affected views) and verify the walk's basename-matching before trusting post-move tags.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i think generating a view should be sth we do when we are done executing sequence of inquiries and have a final reach regarding what is the verdict and when the topic (there might be multiple entangled concepts/topics in one inquiry, but only one of them should be targeted for view maybe)
stabilizes, we can run generate view protocol with traverse and it will go read all past , create view document, and then put all past ones into archieve?

but would this cause us lose information we generated and lose some important details....

or maybe views shuold belong to another folder? we dont touch inquiries folder's stability and views are put in views folder. this way things dont get tangled up?
```

</details>
