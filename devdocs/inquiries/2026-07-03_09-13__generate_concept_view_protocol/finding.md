---
status: active
model: claude-fable-5
effort: max
refines: devdocs/inquiries/2026-07-03_00-53__four_unconsidered_memory_paradigms_assessed/finding.md
---
# Finding: The Generate-Concept-View Protocol — Views Everywhere, Writes Nowhere (the Read Half, Selected)

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-07-03_00-53__four_unconsidered_memory_paradigms_assessed/finding.md`
**Revision trigger:** the user's two reactions to that finding's F6 and F4 sections — both pushing the same move: replace writes with derived reads.
**What's preserved:** the F7 and F8 assessments untouched (the write half); the E1–E4 criteria; the seam asymmetry; the store's death and its scale-trigger.
**What's changed:** **F6 amended** — epoch-lines are retired UNBUILT (the per-inquiry summaries already exist; only a read instruction was missing). **F4 amended** — views upgrade from a reading pattern to a repeatable GENERATOR with optional dated snapshots.
**What's new:** the Generate-Concept-View protocol's build-ready design (one protocol, two modes), and the precise statement of what got selected (the read half) and what didn't (the write half).
**Migration:** none until the build (one word away); no view exists yet.

## Question

From `_branch.md`, two coupled reactions: **(I1)** *"We already have Finding Summary sections which can serve exactly this purpose — we just need a custom instruction so the AI reads inquiry folders with a regex extracting only the Finding Summary section."* **(I2)** *"Per-thing registries aren't feasible — history should stay as history; tracking each thing is a huge burden. Since our atomic operation is the traverse loop, the view can be produced by reading the relevant inquiry folders and generating it — and that view would itself be a traverse-loop output. We should create this: a generate-concept-view protocol."*

## Finding Summary

- **Your two reactions are one design move, and it holds: replace writes with derived reads.** Both were verified against the corpus by live measurement, both amend the prior finding's assessments, and both land in ONE artifact: a small protocol with two modes.

- **The digest needs no new writing — you were right, and it goes one step further than you claimed.** 387 of 403 findings already carry `## Finding Summary`; the last-15 digest measures just **204 lines** — one comfortable read. And the counting surface needs no file either: counting inquiry FOLDERS is the count. Epoch-lines are retired unbuilt.

- **One warning from the live test: "just a regex" must be THE TESTED regex.** The obvious extraction pattern mis-fires (`^## [^F]` skips "## Finding" because it also starts with F — the first trial captured whole finding bodies). The working pattern is `sed -n '/^## Finding Summary/,/^## Finding$/p'`, and the protocol ships it verbatim.

- **The concept-view protocol: one procedure, two modes.** *Concept-mode:* given a topic, grep-discover the relevant findings (measured: "routelister" → 67 hits, "traversal memory" → 15), extract summaries for ALL hits, deep-read the top ~5, tag superseded findings, order the excerpts as a story (first seen → decisions → outcomes → open ends), and emit a dated view. *Project-mode:* no topic given → the last-15 digest (your I1, as the degenerate case of the same recipe).

- **Views get a constitution so they can't rot:** every view is **dated** (a snapshot, never claiming currency), **pointing** (every excerpt carries its source path), **regenerable** (staleness is cured by regenerating a NEW file — views are never edited), and **subordinate with teeth** (views are never citable sources and the protocol never searches `devdocs/views/` for material — cite the pointed finding). This is the honest carve-out to the no-copy law: a declared snapshot cannot drift silently.

- **Critique's material catch: the supersession tagging was wrong-directioned as first drafted.** `refines:`/`supersedes:` frontmatter lives in the NEW finding pointing at the OLD — so tagging an old excerpt as superseded requires an INVERSE lookup across the whole corpus (the superseding finding may not even mention the concept). The corrected walk: one cheap whole-corpus frontmatter grep → a target-map → tag any hit that appears as a target.

- **The assembly-ceiling is honest, and your traverse intuition is the deep path:** the protocol's own act is supersession-aware ASSEMBLY (it displays recorded judgments, never makes new ones). For a synthesis-grade view — contradiction resolution, current-state claims — **run a traverse on the assembled view as its territory**: the assembly IS the territory prep.

- **The class: a protocol with a skill face.** The substance lives at `protocols/generate_concept_view.md` (it's a procedure, not a discipline); a thin `/concept-view` wrapper **ships with the build** — because critique showed the "add a wrapper later if unused" valve was unobservable (nobody notices non-reach; the S2 lesson).

- **What this selects, precisely:** *the READ half of the traversal-memory design is now selected by construction — views everywhere, generated on demand, no maintained read-artifacts. The WRITE half — the record itself (the act-line `chose · because → destination`, the warm-time meant-line, the append-only constitution) — remains your open choice from the four-assessments map.*

- **The build is one word away (≤30 min):** the protocol file + the wrapper + `mkdir devdocs/views/`, then three staged first runs — smoke (the project digest), stress (a "routelister" view: 67 hits exercise every cap and the corrected walk), first real use (a "traversal memory" view — the warming-material for your write-half decision, honestly labeled same-mind).

## Finding

### 1. Context

The four-assessments finding offered F6 (epoch-lines) and F4 (threads) as write-flavored answers to two read-needs. Your reactions caught both leaning further toward writing than necessary: the per-inquiry distilled layer already exists (every finding's summary section), and per-thing threads as maintained things are a burden nobody should carry — history should stay as history, and views should be generated when wanted. This inquiry verified both claims against the corpus, unified them into one protocol, and hardened the design under critique.

### 2. Why one protocol with two modes

A project digest and a concept view feel like two tools, but look at what each does: find the relevant inquiry folders, pull out only the small trustworthy part of each, arrange the parts, emit something readable. The ONLY difference is the discovery step — a concept filters by topic; the digest filters by recency. So the digest is the same recipe with the concept left blank: **project-mode**. One file to build, one recipe to remember. (The third home candidate — a standing always-on instruction — was killed: most sessions don't need the digest, and a permanent instruction taxes every session for a sometimes-need.)

### 3. The mechanism, step by step (what the protocol file will say)

A view needs four things done in order, and each step earned a correction or a guard this inquiry:

1. **DISCOVER.** Concept-mode: grep the concept (plus obvious variants) across `finding.md` files, rank hits by density and recency. Project-mode: list the newest N inquiry folders (default 15 — measured to yield a ~204-line read; when a prior project-view exists, its own filename date is the natural "since" marker — state read off artifacts is not state). **Never search `devdocs/views/`** — views are not sources.
2. **GATHER.** For every hit, extract the Finding Summary with the tested pattern (`sed -n '/^## Finding Summary/,/^## Finding$/p'`); the 16 early findings without the section get title + date + pointer. The top ~5 hits also get targeted body excerpts.
3. **TAG SUPERSESSION (the corrected walk).** One whole-corpus grep of `refines:`/`supersedes:`/`corrects:` frontmatter builds the map of which findings target which; any hit that appears as a TARGET gets tagged `[superseded by <the refiner's path>]`. This displays judgments past inquiries already recorded — it never makes new ones.
4. **CURATE — mandatory reading.** An uncurated dump is not a view. Read what was gathered; order it (first seen → decisions → outcomes → open ends; project-mode by date); apply the size policy — the view stays **≤300 lines**: the top-k keep summaries up to ~25 lines each ("…more at source" beyond that), the tail compresses to one line per finding, and superseded findings drop to the one-line tier first (their content lives in their supersessors).
5. **EMIT.** Header (ASSEMBLY-GRADE self-label · snapshot date · mode · hit-count · coverage bound · "regenerate for current") → the tagged, ordered excerpts, each with its source path and date → the concept's route-map rows and ✓ states where maps exist (displayed, never modified) → open ends → footer (the exact generation command). Home: `devdocs/views/<concept-slug>/view_<date>.md`; regeneration adds a NEW file; the folder keeps old snapshots as history.

### 4. The constitution — why a saved view doesn't break the no-copy law

The duplication anti-pattern's real target is silent drift: a copy that gets trusted while its source moves on. A view under the four conditions cannot drift silently — its date declares its horizon, its pointers lead to the truth, staleness is cured by regeneration (never by editing), and the never-cite/never-search rules keep it out of the sources' seat operationally, not just declaratively. The sweep-map already lives by exactly these rules; this extends the same constitution to views.

### 5. The ceiling and the deep path

What assembly cannot do: resolve contradictions the frontmatter never recorded, make current-state claims, or adversarially test its own story. Those are loop-work. So the protocol's output labels itself assembly-grade, and the deep path is exactly your intuition: **for a synthesis-grade view, run a traverse on the assembly** — the view is the territory prep, and the traverse's finding is the synthesis.

### 6. The class, the wrapper, and the staging

The generator is a procedure (grep → extract → tag → curate → emit), not a discipline — no enumerate-vs-decide identity to guard — so its substance belongs in `protocols/`. But critique applied the S2 lesson at full strength: un-named machinery goes un-reached-for and *nobody observes the non-reach*; so the thin `/concept-view` skill wrapper ships WITH the build rather than waiting on an unobservable trigger. Build (on your word, ≤30 min): the protocol file + the wrapper + `mkdir devdocs/views/`. Then the three first runs, each with a different job: **smoke** = the project digest; **stress** = a "routelister" view (67 hits — the caps and the corrected walk get exercised where they can actually fail); **first real use** = a "traversal memory" view (your write-half decision's warming-material, labeled same-mind — the stress run carries the test burden).

## Inherited Commitments Re-test

The `_branch.md` declared a Synthesis Trigger over two priors. The re-tests ran at critique; inherited here with evidence:

- **Commitment:** the four-assessments finding's F6 assessment (epoch-lines riding CONCLUDE; three gains: read-surface, warm-up, count; memory-iff-read) and F4 assessment (views-not-stores; the store at its scale-trigger).
  - **Source:** `devdocs/inquiries/2026-07-03_00-53__four_unconsidered_memory_paradigms_assessed/finding.md`.
  - **Re-test status:** RE-TESTED — **commitment confirmed but frame revised** (this finding IS the revision, user-initiated). **Evidence:** all three F6 gains verified to survive with ZERO writes — read-surface → project-mode (measured 204 lines); warm-up → the same read, honestly split (*available on demand today; warming-integrated when warming practices* — the assessment's own conditionality carried, not shed); count → the folder listing (no artifact at all). F4's views verified UPGRADED, not contradicted: the generator makes the reading pattern repeatable; the snapshots make it shareable; the store stays dead on the user's stronger grounds, its scale-trigger unchanged.

- **Commitment:** the June-22 finding's duplication anti-pattern (never copy what lives in the territory) and history-as-territory.
  - **Source:** `devdocs/inquiries/2026-06-22_13-58__traversal_memory_shape_and_done_marks/finding.md`.
  - **Re-test status:** RE-TESTED — commitment confirmed, with one earned carve-out. **Evidence:** the anti-pattern's MECHANISM (silent drift → trusted copies) was prosecuted against saved views directly; the four conditions block the mechanism (dated horizon; per-excerpt pointers; regenerate-never-edit; never-cite/never-search teeth added under critique when the subordination condition was found merely declarative). **Declared snapshots comply; undated or edited-in-place views would violate.** No-trace compliance verified separately: views derive from findings and maps (territory content), display ✓ states without modifying, and synthesize no choice-records — the pre-registration window is untouched.

## Next Actions

### MUST

*(None — the design is the deliverable; the build waits on your word by the standing convention.)*

### COULD

- **What:** **The build** — `protocols/generate_concept_view.md` + the `/concept-view` wrapper + `mkdir devdocs/views/`.
  **Who:** the AI, ≤30 minutes (transcription of §3–§6; the walk's direction is the part memory would get wrong — build from this finding).
  **Gate:** condition-bound — your word.
  **Why:** every gain waits on one small file.

- **What:** **The three first runs** (smoke digest → routelister stress → traversal-memory use; stress-found fixes land in the protocol before the use-run).
  **Who:** the AI, same or next session.
  **Gate:** condition-bound — after the build.
  **Why:** proven where it can fail; useful where it's wanted.
  **Depends-on:** COULD item "The build". GATED.

### DEFERRED

- **What:** the warming-doctrine pointer (*"first read: the project digest"*).
  **Gate:** condition-bound — warming built (the roadmap's Clean Eyes item).
  **Why (if revived):** resolves the warm-up gain's conditional half (on-demand → integrated).

## Reasoning

**Why one protocol beat three homes:** the digest is the concept-view's degenerate case — housing it as project-mode unified the shared mechanism, killed the standing-instruction (attention tax), and left the warming-clause as a deferred pointer rather than dormant machinery.

**Why assembly + handoff beat both always-assembly and always-synthesis:** naive assembly at 67 hits presents dead claims as live (the always-synthesis steelman partially stood); full synthesis prices the view out of use. The middle is principled because the corpus's frontmatter already CONTAINS supersession judgments — displaying them is free honesty; making new ones is loop-work, handed to traverse.

**Significant kills and corrections:** the standing instruction (taxes every session); pointer-only views (fail the readable-in-place purpose); the hit-set-scoped supersession grep (wrong direction — the pass's material catch); the unobservable wrapper valve (the S2 lesson: ship it); the uncapped excerpt (the 94-line outlier busts the arithmetic — per-excerpt ~25-line cap); "warm-up served" as first worded (inherits F6's conditionality — split into on-demand-now / integrated-later).

**Layer honesty (the proportionality call):** meaning was settled and structure sketched to build-grade in ONE pass — a one-page procedure doesn't earn the sweeper's three-layer chain; the sketch is build-input, and the file is authored at the build, on your word.

## Open Questions

### Monitoring
- Does the stress run (67 hits) hold the ≤300-line cap and tag supersession correctly? (Fixes route to the protocol before the use-run.)
- Do views actually get read (the memory-iff-read test, now on views)?

### Blocked
- The warming-integration — blocked on warming being built, by design.

### Refinement Triggers
- If ad-hoc greps keep landing in `devdocs/views/` despite the never-search rule → consider a filename or directory convention that common search tools skip (e.g., a leading underscore) — a build-time tweak, not a redesign.
- If the k≈5 / N=15 placeholders feel wrong in the first runs → revise in the protocol file (they were declared placeholders).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
u said [the F6 'what you gain' excerpt] but i think we already have finding summary sections which can be used for exact this purpose, we just need an custom instruction so that AI will read inquiry folders with regex to read only Finding Summary section.

u said [the F4 'what F4 says' excerpt] but codebase is complex, recoming to a topic usually requires multiple updates to the base of that inquiry, which is not feasible at all bc many many things can be changed, history should stay as history. keeping track of each thing individually is hugee burden, since our atomic operation is traverse loop this can be done by reading relevant inquiry folders and generating a view yes but this view would also be a traverse loop output, maybe we should create this. a generate concept view protocol that can be used for this purpose. I think this is really good idea.
```

</details>
