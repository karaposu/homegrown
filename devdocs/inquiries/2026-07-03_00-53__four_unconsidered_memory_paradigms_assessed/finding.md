---
status: active
model: claude-fable-5
effort: max
refines: devdocs/inquiries/2026-06-22_13-58__traversal_memory_shape_and_done_marks/finding.md
---
# Finding: The Four Unconsidered Memory Paradigms, Assessed — and the Located Inelegance's Repair

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-06-22_13-58__traversal_memory_shape_and_done_marks/finding.md`
**Revision trigger:** the paradigm sweep exposed the prior's design as one composite among eight families; the user commissioned dives into the four families the prior never considered.
**What's preserved:** the duplication anti-pattern (never copy content that lives in the territory — point at it), now RE-SCOPED as family-general law; the ✓ mark; warming for the rich layer; the thin-record cheapness discipline.
**What's changed:** the thin choice-record's schema is refined under critique — `led-to` was a CONFLATED field (destination + outcome-meaning); the honest act-time record is `chose · because → destination`, with outcome-meaning as a separate, successor-written half. The prior's "log choices, not outcomes" clause is re-scoped as F2-frame-local (detail in the Re-test section).
**What's new:** the four assessments (F4/F6/F7/F8), the seam-coverage comparison, the pure-append composition note, and the first live validation of the sweep→seed→loop pattern.
**Migration:** none until the user selects (route R1 of this inquiry's map); nothing instantiates before the pre-registration file.

## Question

From `_branch.md`: *"[Given the eight-family sweep map] pick the most promising and not-considered four of these, and assess how they might create some elegant solutions to this problem — or they might be a breakthrough in this narrow scope."*

**The four (the filter is near-forced and was confirmed):** considered = F1 (the map's named modal trap) + F2/F3/F5 (the committed composite). Not considered ∧ promising = **F4 entity-threaded registry · F6 distilled ledger cascade · F7 consumer-written memory · F8 bitemporal record.**

**The measuring apparatus (stated, not smuggled):** elegance = E1 fewest moving parts · E2 self-maintaining (rides existing acts; no new habit) · E3 zero-duplication/no-rot · E4 glanceable — applied IN ADDITION to each family's own success criterion (paradigms carry their own definitions of good; the map never ranks). Breakthrough = **exhaust-capture register**: the design dissolves the MARGINAL burden because the cognition was already paid — never "nobody writes anything."

## Finding Summary

- **The headline: F7 (consumer-written memory) is the located inelegance's answer-candidate.** The dissatisfaction you couldn't place has an address: the committed record's `led-to` field is a **conflated field** — it packs a destination (knowable at act-time: the spawned inquiry's path, the commit) together with outcome-meaning (knowable only later, by whoever sees the outcomes). The repair is a **split, not a deletion**: the act-line keeps `chose · because → destination` (the git pointer survives intact); the **meant-line** is written by the successor session at warm-time, when the judgment is already formed — one line, appended, pointing. Two writers, each writing only what they actually know.

- **F7's two-stage adoption:** the schema split is **free today** (a design decision, no build); the meant-line clause **activates with warming** (not a second habit — one clause inside the warming habit's own definition when it starts). Its records are Retrospective-RC-shaped (outcome-aware judgments — the quality substrate's food), and the delta between act-time `because` and warm-time `meant` is Selector-calibration gold.

- **F8 (bitemporal record) yields a free constitution, not a build:** in an append-only file with dated lines, both timestamps already exist (when-learned = the line's date; when-decided = the referenced turn's). F8-light = the file's rules: never overwrite; corrections append and cite what they supersede. **The staleness burden at record grain genuinely dissolves by format** — nothing pretends to be current. The heavy form (dual-timestamp columns, query tooling) waits at a named trigger: calibration-time.

- **F6 (distilled ledger) fills a felt seam at near-zero cost:** epoch-lines — one line per concluded inquiry, lifted from the finding's own one-sentence answer — ride CONCLUDE, which is practiced TODAY. Read-side: newest epoch-lines first (the reading convention that replaces a rewritable header — critique dissolved a real append-only contradiction there). It gives the count-shaped Allocation-Rule trigger its countable surface. Honest conditionality: its MEMORY-status (vs report-status) arrives when warming or the cadence actually reads it.

- **F4 (entity-threaded registry) is honestly NOT-NOW as a store — and free as a view:** the fresh-only ceiling (20/20 threads never re-loaded) stands as direct evidence; the audit's registry deferral stands. What's free: **threads as views** — per-identity reads assembled on demand from records that exist (grep-grade at current volume; sufficient even for the Selector's gate at ~10 turns). The store's trigger is SCALE, not the Selector's arrival.

- **The breakthrough verdicts, honestly:** no family reaches zero-burden. **F7 comes closest** (exhaust-capture: the warm-time judgment is sunk cost; only a line of transcription is added), and **F8-light dissolves record-grain staleness outright** (by format, not vigilance). F6 and F4 are strong accounting, not dissolution.

- **The quarantined composition note (an observed possibility — the selection is yours):** the four honest forms specify ONE small object without conflict — an append-only memory file: F8's constitution governing every line · repaired act-lines (`chose · because → destination`) · F7 meant-lines at warm · F6 epoch-lines at CONCLUDE/cadence (read newest-first) · F4 views derived on demand. Every part droppable independently; each rides a different moment; sequential single-operator practice means no write conflicts (multihead-era concurrency deferred with its era).

- **The pattern validated:** these were the sweep→seed→loop pattern's first live dives — **pin-compliance 4/4** (no dive regressed to the modal reading; each stayed within its seed's pinned commitments), carried with the same-mind ceiling the sweeper's own Validation Debt names.

## Finding

### 1. Context

The paradigm-sweeper's first real invocation mapped the practice of *keeping cross-run traversal memory* into eight families and made the current design's position visible: the June-22 composite is F2 (thin choice-records) + F3 (✓ marks) + F5 (warming) — with the user's standing verdict "not elegant, suboptimal" attached but unlocated. This inquiry dived the four families the composite never drew on, under the anchoring guard (each family generated within its own commitments before any cross-family judgment), with each family judged first by its own criterion.

### 2. Dive F4 — Entity-threaded registry → "Route Threads as Views"

**The need this family answers.** Traversal memory requires persistence — a place the memory can live. That place can be one central store, or distributed across many artifacts, or a mix. And once memory exists, you need a way to ask it questions like *"what happened with route X, across all runs?"* — a per-thing view, not just a per-time view.

**What F4 says.** Keep one thread per THING (per route, per concept), and extend that thread every time the thing is touched. The usual way to do this is a registry: a database, a wiki, one page per entity.

**The design for us: don't build the registry — read as if it existed.** The place already exists: our artifacts. Route X already appears in map rows (with its first-seen date and its ✓ state), in any choice-lines that mention it, and in the pointers those lines carry. So the "thread" for X is not a new file — it is a way of READING: when you want X's history, gather everything that already mentions X and read it in order (first seen → what was selected → what came of it). A thread assembled this way is called a **view**: it is derived on demand and stored nowhere. No new storage artifact is needed.

**What you gain.** Per-route history whenever you want it, with zero writing burden (nothing new is ever written for F4's sake) and zero duplication (a view copies nothing — it reads what exists). When the future Selector needs a route's selection history, this is exactly the read it would do.

**What it costs.** The reading takes assembly effort each time. And a view can only show what records exist — with no choice-records written yet, a thread shows only map rows.

**The honest verdict.** The FULL form of F4 — an actually-maintained registry file — is **not now**: our own measured evidence says so (the routelister audit found all 20 cumulative indexes were written once and never re-loaded — registries we build don't get read back at today's volume). The view-form is free and is enough — even for the Selector's arrival, because the Selector's gate is ~10 recorded turns, and reading 10–100 lines per identity needs no store. The store earns existence only at SCALE: when chains run frequently and cross-map traffic makes assembly painful.

**Scores.** E1 (fewest parts): excellent — zero new parts. E2 (self-maintaining): perfect — no habit. E3 (no duplication): perfect. E4 (glanceable): good at read time. Own criterion (retrievability): served, conditional on traffic existing. **Breakthrough: no** — good accounting, nothing dissolves.

### 3. Dive F6 — Distilled ledger cascade → "Epoch-Lines"

**The need this family answers.** Traversal memory grows. A reader arriving at session start cannot re-read everything that ever happened; they need a short version that is trustworthy. So memory needs a second requirement beyond persistence: a READ-SURFACE — something small you read first, that stands for the whole.

**What F6 says.** Keep the full raw record, but regularly DISTILL it: write compressed summary layers on top, and let readers start from the compressed layer and drill down only when needed. Write rich, read short.

**The design for us: one line per finished inquiry, written at a moment that already exists.** We already distill at one level — every inquiry ends with CONCLUDE compressing six working documents into one finding. F6 adds the missing level ABOVE that: when CONCLUDE finishes, it also appends ONE line to the memory file — the finding's one-sentence answer plus a pointer to it. That is nearly free, because the sentence already exists; the act is copying it over. Later, at the consultation cadence (the "step back every ~5 inquiries" moment), the oldest lines get compressed once more into one or two trajectory-lines. Reading convention: **read the newest summary lines first** — they ARE the short version. (An earlier draft had a "rolling header" that gets rewritten in place; critique killed it — rewriting contradicts the never-overwrite rule of section 5. Summary lines are appended like everything else; "the header" just means "the newest ones, read first.")

**What you gain.** The missing cross-inquiry layer: ten lines that tell a returning reader where the project has been. Faster session warm-up (read the summary lines before anything else). And a counting surface: the Allocation Rule's "consult every ~5 inquiries" trigger never fired because nothing counted inquiries — a file that gains one line per inquiry IS the count.

**What it costs.** The CONCLUDE-time line is nearly free (transcription of an existing sentence). The cadence-time compression is a real act — but it is the cadence's own job description, not a new duty.

**The honest verdict.** Writing is cheap and rides a gate that is ALREADY practiced (CONCLUDE runs at every inquiry today). The open question is reading: summary lines are MEMORY only if some later decision actually reads them — otherwise they are a well-priced report. There are two candidate readers: session warming (designed but not yet practiced — roadmap item 2) and the consultation cadence (semi-practiced — your recurring audits are its living form). So: adopt-cheap now, becomes-memory when either reader practices.

**Scores.** E1: good — one line-type added. E2: strong — rides existing gates. E3: clean — summaries compress and point, they never copy content. E4: excellent — the best glance-surface of the four. Own criterion (glanceability at scale): served by construction. **Breakthrough: no** — but the highest value-per-cost for the human reader.

### 4. Dive F7 — Consumer-written memory → "The Two-Phase Record"

**The need this family answers.** Every memory record needs a WRITER and a WRITING MOMENT. The obvious answer — the one every logbook assumes — is: the person who acts writes, at the moment of acting. But there is a problem with that answer: at the moment of acting, you do not yet know what your action will lead to. Some of what a memory should hold only becomes knowable LATER, to whoever sees the outcomes.

**What F7 says.** Flip the writer: let the NEXT session write the memory of the PREVIOUS turn. The next session is the one that actually knows what the choice turned out to mean. Memory becomes something you write while RECEIVING the past, not while emitting the present.

**Why this matters to us specifically — the located inelegance.** Our committed record is `chose · because · led-to → pointer`, written by the actor at act-time. Look at the last field. **`led-to` is really two different things packed into one:** (a) the DESTINATION — where the work went (the new inquiry's folder, the commit) — which the actor DOES know at act-time; and (b) the OUTCOME-MEANING — what came of it — which the actor CANNOT know yet. A field that demands both at act-time forces either a half-empty record or wishful filling. That is very plausibly the thing that has felt "suboptimal" about the design without being nameable.

**The design: split the record into two halves, each written by the party who actually knows.**

```text
[date, act]   T7: chose <route> · because <one line> → <destination>
[date, warm]  T7 meant: <what it turned out to mean> → <pointer if elsewhere>
```

The first line is written by the actor, at act-time — the choice, the reason, and where the work went. All three are honestly knowable right then (the destination pointer stays: like a git commit, the record points at its product immediately; what the product MEANT emerges later). The second line is written by the next session, at warm-up — because warming already means reading what happened, and by the time you have read it, the judgment "what this turned out to mean" is already formed in your head. Writing it down costs one line of typing over thinking that was already done. Rules that keep it cheap: both halves are capped at ONE line (anything longer belongs in an artifact, and the line points to it); turns left open too long get closed at the consultation cadence with an honest minimal line, so the open-set never grows past one cadence-window.

**What you gain.** The broken field is repaired — no more writing what you cannot know. The memory becomes hindsight-quality by construction: the meant-lines are judgments made AFTER outcomes, which is exactly the food the project's future quality layer (the Retrospective RC) and the Selector's calibration need. And the gap between what you SAID at act-time (`because`) and what it MEANT (`meant`) becomes measurable — a direct signal of how good the reasoning was.

**What it costs.** The meant-line depends on warming being practiced — and warming is designed but not yet practiced (roadmap item 2). The stacking worry ("two unpracticed habits") dissolves on inspection: the meant-line is not a second habit — it is one clause INSIDE the warming habit's definition, activating the day warming does.

**The honest verdict, in two stages.** Stage one is **free today**: adopt the split schema (`chose · because → destination`) — a design decision, no build, no new habit. Stage two activates **with warming**: the successor's meant-line.

**Scores.** E1: good — one file, two line-types. E2: strong once warming exists (rides it; no standalone habit). E3: perfect — meant-lines point, never copy. E4: good — open turns are visible at a glance. Own criterion (hindsight quality): the records ARE hindsight. **Breakthrough: the closest of the four** — the marginal burden shrinks to one line of transcription over thinking that was already paid for.

### 5. Dive F8 — Bitemporal record → "Dated Append Lines"

**The need this family answers.** Memory records can turn out to be WRONG — you decide something, and later you learn better. Something must handle corrections. The usual way is to edit the record — which silently destroys the history of what you believed and when. A memory that gets edited cannot answer "what did we think at the time?", and that question is exactly what calibration and retention-checking need.

**What F8 says.** Keep TWO times for every piece of memory — when it was decided, and when it was learned/corrected — and never overwrite: a correction is a NEW record that names the old one it replaces. The old record stays, visibly superseded. (Databases that do this are called bitemporal; they normally need heavy machinery — two timestamp columns, query tooling.)

**The design for us: the machinery is free if the file is append-only and every line is dated.** In such a file, both times already exist without adding anything: when-learned is simply the date on the line itself; when-decided is the date on the act-line the correction refers to. A correction is one more appended line: `[date] T7 correction: <what changed> (supersedes the 07-03 line)`. Nothing is ever edited. So F8-light is not a build at all — it is the file's RULES, its constitution: never overwrite; corrections cite what they supersede; every line carries its date. After critique, the constitution is total — it governs EVERY line in the file, summary lines included; there are no exception regions where rewriting is allowed.

**What you gain.** Belief-change becomes auditable at zero cost: you can always see what was believed, when it changed, and why. And the anti-rot property the June-22 finding wanted arrives structurally: **no record can go stale, because no record ever claims to be current** — currency is always "the newest line on the topic," and supersession is explicit.

**What it costs.** Nothing, in the light form. The heavy form (explicit dual-timestamp columns and query tooling) would cost real machinery — and is deferred to a named trigger: calibration-time, when the Selector starts computing prediction-vs-outcome deltas and the query patterns would earn their tooling.

**The honest verdict (its steelman clarified it).** "Free" means F8 contributes a **discipline, not machinery** — and that is fine: the project already practices exactly this discipline one level up (findings are never edited; they are refined/superseded by new findings; index entries are stale-flagged, never deleted). F8-light extends the same rule down to the record grain, by constitution rather than by build.

**Scores.** E1, E2, E3: perfect — zero parts, zero habit, zero duplication. E4: neutral. Own criterion (auditability of belief-change): served at line grain. **Breakthrough: a small, real one** — record-grain staleness dissolves by format rather than by vigilance.

### 6. The four side by side (no ranking — the selection is yours)

Each family answers a DIFFERENT requirement of traversal memory, and the requirements are not equally urgent. Two are felt today: the broken `led-to` field (F7's seam — found in the committed schema by this inquiry) and the missing short read-surface (F6's seam — nothing summarizes across inquiries). One is felt at a neighboring level: per-thing retrieval (F4's seam — the cross-map identity need appeared twice in the wild, but per-route threads have never once been re-read). One is ahead of its time: correction lineage (F8's seam — real, and already practiced for findings, but no turn-records exist yet to correct).

| Family | The requirement it answers | How urgent | Cost of its honest form | Adoptable now (nothing instantiates yet) |
|---|---|---|---|---|
| **F7** two-phase record | records need writers who KNOW — split act-knowledge from outcome-knowledge | **felt now** | schema split free; meant-lines activate with warming | the schema split (`chose · because → destination`) |
| **F6** epoch-lines | long memory needs a short, trustworthy read-surface | **felt now** | ~free at CONCLUDE; needs a reader to become memory | the design; lines born with the file |
| **F4** threads-as-views | memory must answer per-THING questions across runs | **adjacent** | zero — a reading pattern, no store | the view-pattern; a real store only at scale |
| **F8** dated append lines | corrections must not erase what was believed | **anticipatory** | zero — file rules, not a build | the constitution, day one |

**The composition note (an observed possibility — not a recommendation; you select):** if you adopted all four, they would not collide — together they describe ONE small file. An append-only memory file where: every line is dated and nothing is ever rewritten (F8's rules govern the whole file); the actor appends `chose · because → destination` at act-time (the repaired record); the next session appends `meant:` lines while warming (F7); CONCLUDE appends one summary line per finished inquiry, and readers read the newest summary lines first (F6); and per-route threads are assembled by reading, never stored (F4). Each part rides a different moment of work that already happens. Every part can be dropped independently — none requires another to function. And notably, **three of the four honest forms cost nothing** (a reading pattern, a file constitution, a schema decision) — which says the old design's felt weight was never its parts, but its unowned seams.

## Inherited Commitments Re-test

The `_branch.md` declared a Synthesis Trigger over two priors. Re-tested (the tests ran at sensemaking and critique; results inherited here with evidence):

- **Commitment:** the sweep-map's family bundles, statuses, and seed-blocks (the dive contract), and its chart note that the current design = F2+F3+F5 composed.
  - **Source:** `devdocs/sweeps/traversal-memory/paradigm_sweep.md`.
  - **Re-test status:** RE-TESTED — commitment confirmed. **Evidence:** all four dives executed within their seed-pins (pin-compliance 4/4 — no dive regressed to a modal reading; e.g., F7 held reception-not-emission, F4 never became a store-pitch under its own inversion). Carried with the ceiling the sweeper's own Validation Debt names: **same mind wrote the pins and ran the dives, hours apart** — positive evidence at same-mind grade; the blind test remains open.

- **Commitment:** the June-22 finding's design laws — "log your choices, not the territory"; the duplication anti-pattern; the thin-record cheapness; the git commit-log analogy.
  - **Source:** `devdocs/inquiries/2026-06-22_13-58__traversal_memory_shape_and_done_marks/finding.md`.
  - **Re-test status:** RE-TESTED — **commitment confirmed but frame revised.** **Evidence:** the commitment splits under the wider chart. (i) The **duplication anti-pattern GENERALIZES** — it binds every family (F4-as-views, F6-as-compressions-with-pointers, F7-meant-lines-with-pointers all comply; nothing copies territory content). (ii) The **cheapness discipline generalizes** (extended verbatim to the meant-line's cap). (iii) The **"log choices" record-content clause was F2-frame-local**, not a law of the practice: F7 legitimately records a JUDGMENT (what the choice meant), F6 a COMPRESSION — neither copies outcomes; the clause's real content was always the anti-pattern. (iv) The **git analogy survives strengthened**: under prosecution, the analogy itself exposed that `led-to` conflated the commit's tree-pointer (act-knowable) with the commit's significance (later-knowable) — the refined act-line keeps the pointer the analogy always meant.

## Next Actions

### MUST

*(None — the ask was assessment; the deliverable is decision-material. The selection is route R1 of this inquiry's map, and it is yours.)*

### COULD

- **What:** Make the selection (a family's form, a subset, or the composition — every part droppable) and commit the memory design.
  **Who:** you (the design decision); the AI records it as the committed design on your word.
  **Gate:** condition-bound — your choice; instantiation additionally behind the pre-registration file (timestamp-physics, unchanged).
  **Why:** the "not elegant" era ends with a shape chosen from honestly-costed options.

- **What:** Tick the four dived families on the sweep-map (annotated, pointing here) — the consumer-mark practice.
  **Who:** the AI, one minute.
  **Gate:** observable — this finding's delivery.
  **Why:** the anchoring guard's display stays true (four dived, four considered-elsewhere).

- **What:** Land the sweeper's v0 → v0.1 revision — its evidence now exists (pins 4/4 same-mind; Validation-Debt item 2 confirmed [heavy demotion as predicted]; the standalone-run checker-gap found at the first invocation).
  **Who:** the AI, one small edit session.
  **Gate:** condition-bound — your go (`[∥]` the structural inquiry's map, R2).
  **Why:** the discipline's first Baldwin cycle, on real evidence.

### DEFERRED

- **What:** the F4 store (a real registry) and the F8 heavy form (dual-timestamp tooling).
  **Gate:** condition-bound — scale (chain-frequency / cross-map traffic) and calibration-time respectively, as named in their assessments.
  **Why (if revived):** each waits for the consumer that earns its machinery.

## Reasoning

**Why F7 leads the assessments without the map ranking anything:** the user's commissioned question was elegance-or-breakthrough, and F7 is the only family whose assessment LOCATED the standing dissatisfaction in the committed schema itself (the conflated field) — a repair-claim, not a preference-claim. It was also the pass's most-prosecuted candidate: the interim repair as first drafted ("drop `led-to`") was OVER-corrected, and critique restored the destination-pointer using the June-22 finding's own git analogy against the draft. The final form is stronger than both the original schema and the first draft.

**Significant kills and refinements:** the four-equal-organs story (killed at sensemaking — the seams are asymmetric: two felt, one adjacent, one anticipatory); "drop led-to" (refined into the split under prosecution); the rolling epoch-header (killed — it contradicted the append-only constitution; replaced by appended epoch-lines read newest-first); "F4 = NOT-UNTIL-THE-SELECTOR" (rejected — views suffice at the Selector-gate's volume; the store's trigger is scale); uncapped meant-lines (capped); anonymous retro-editing (structurally impossible — a later edit needs a named writer and moment, which IS F7); pin-compliance as clean validation (ceiling'd — same-mind).

**The breakthrough question answered honestly:** under the exhaust-capture register, nothing here reaches zero-burden — but F7's marginal cost approaches one transcription line over already-formed judgment, and F8-light dissolves record-grain staleness by format. In this narrow scope, that is what a breakthrough credibly looks like: not magic, but seams owned by the moments that already pay for them.

## Open Questions

### Monitoring
- When the memory file exists and warming practices: do meant-lines actually stay at one line (the cheapness discipline under retro-writing pressure)?
- Does the cadence's fallback-closer fire rarely (healthy) or constantly (warming not practicing — F7's full form starving)?

### Blocked
- Everything instantiating — blocked on the pre-registration file, then your selection (by design).

### Research Frontiers
- The `because`→`meant` delta as a calibration signal (Selector-maturity era; the F8 heavy form's trigger lives here too).

### Refinement Triggers
- If your read of the assessments still doesn't locate the felt inelegance in the conflated field → the diagnosis is wrong and the next dive should target what STILL feels off (name it against the four seams).
- If a fifth seam emerges in practice that none of the eight families addresses → re-run the sweep index-extending (the lazy pair's designed moment).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
our seeds for how traveral memory should be handled

[the sweep-map's 8-family table]

now i want you to pick most promising and not considered 4 of these and asses how they might create some elegant solutions to this problem, or they might be breakthrough in thsi narrow scope
```

</details>
