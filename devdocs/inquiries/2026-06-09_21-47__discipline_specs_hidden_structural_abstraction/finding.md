---
status: active
model: claude-fable-5[1m]
effort: max
---
# Finding: The Spec Corpus Is Pregnant — With a Declaration Layer, Not a Rewrite

## Question

From `_branch.md`: when you inspect the disciplines in this project, can their spec files be formatted or structured significantly better? The user's analogy: in software engineering, entangled code signals "code is pregnant" — a hidden abstraction (a class, a dataclass) that, once implemented, makes everything clean. This project's "code" is skill prompt files, but the same hidden organisation logic might exist. Candidate directions the user named: spreading a spec across files; extracting the common meta-patterns into a common template; bundling logic that is spread within a spec (without compacting — regression risk judged too high); plus important directions not yet thought of. The instruction: dive deep.

**Goal:** a deep analysis naming the hidden abstractions, with content-preserving reorganization candidates and per-candidate regression-risk classification. An answer fails if its mechanism is compaction, or if it stays restricted to the three named directions.

**Layer commitment:** STRUCTURAL only — what the spec artifacts look like. No meaning changes (what a discipline IS), no process changes (what steps it runs).

## Finding Summary

- **Verdict: yes — the corpus is pregnant, and the baby is already half-born.** The three newest discipline specs (`surfacing`, `routelister`, `articulate_simple`) independently converged on one elaborate section anatomy that the four older specs predate. The corpus also contains measurable drift wherever shared patterns were copied by hand. The hidden abstraction is real; most of it already exists in exemplar form.

- **The hidden abstraction is not a rewrite — it is a missing declaration layer.** Four independent analysis mechanisms converged on the same conclusion: the corpus does not need its content reorganized so much as it needs its existing structure **named, indexed, declared, and checked**. The working name for the assembled design is the *Declared-Form Architecture*: "the corpus gets a type system without a compiler."

- **Seven latent abstractions were identified and cataloged**, each at a different maturity: (1) a Discipline Spec Schema (the section anatomy the newest specs instantiate); (2) a trait library (~8 recurring standard blocks — loading notes, verdict vocabularies, failure-mode frameworks — currently drifting); (3) a runner common core (three runners carry near-duplicate blocks with real divergence); (4) within-spec bundling targets (scattered rule fragments, worst in `innovate`); (5) a lifecycle layout (live spec vs old versions vs development-history docs); (6) a machine-readable manifest per spec — the missing input for the `tools/structural_check.sh` script that all three runners already call but which has never existed; (7) a corpus entry-point/index.

- **The top-ranked surviving design set (all content-preserving, almost all runtime-invisible):** a traits registry with drift repair; a single `SPEC_STANDARD.md` entry point carrying the schema and a conformance matrix; a per-spec manifest with an advisory (never blocking) checker; a runner "single-source conformance-diff" (canonical copy of the shared runner blocks that the three inline copies are checked against — instead of extracting them); archive homes for old spec versions; and a bundling pass for `innovate` following the procedure the project already used successfully on `td-critique` today.

- **One principle from the adversarial testing deserves permanent memory: undeclared drift is harm; declared deviation is design.** The evidence: `devdocs/editing_discpinlines.md` records that a previous attempt to standardize the self-assessment verdict block was reverted by the user for `sense-making` because its "indicators, not gates" framing is deliberate. Any canonicalization mechanism must therefore carry a deviation status (`deliberate` vs `unintended`), and the sense-making verdict case is pre-marked deliberate.

- **Three things were explicitly rejected or gated:** splitting runtime discipline specs across multiple files (violates the corpus's single-context loading contract; deferred behind a build/check-tooling trigger); extracting the runners' shared blocks into a runtime-loaded shared file (the only candidate that changes what executing runners load — gated behind checker maturity and a snapshot-compatibility dry-run); and any big-bang adoption (each piece adopts independently, organically, per the project's own conventions).

- **The user's three named directions all resolved, but two resolved differently than guessed.** "Spreading the spec across files" → correct for archives and shared runner text, wrong (for now) for runtime discipline specs. "Common template" → correct, but as a thin descriptive schema + conformance declarations, not a normative form-to-fill. "Bundling spread logic" → correct as-is, with the project's own placement convention and today's `td-critique` relocation as the procedural template.

## Finding

### 1. Why this inquiry exists

The project's cognitive harness is a corpus of LLM-executable markdown: seven active discipline specs (each a ~40-line `SKILL.md` entry point plus a 330–750-line reference spec), three loop runners, three protocols, one small registry (`cognitive_harness/cognitive_fixes/`), plus convention documents scattered under `docs/`. The user — who maintains all of it through inquiries like this one — asked whether these files hide a significant organizational abstraction, the way entangled code hides a missing class. The constraint that shapes everything: **no compaction**. Content must be preserved verbatim-in-meaning; only its organization may change, because the specs are regression-sensitive prompts whose every clause was earned through observed failures.

### 2. The verdict and its evidence

The corpus is pregnant. Three independent lines of evidence:

**Two structural generations.** The four older reference specs (`sense-making`, `decompose`, `innovate`, `td-critique`) are essay-shaped prose that accreted *refinement notes* (the project's name for bolted-on rules) over time — `innovate` alone carries 15 notes and 9 override-record patterns across 752 lines. The three newest specs (`surfacing`, `routelister`, `articulate_simple`) share a strikingly regular anatomy: an Identity section with a verb-meaning, a NOT-list, and a vocabulary table; a Components section; a Process Model; a Quality section with a two-layer failure-mode framework and an "asymmetric-failure principle"; an Output section with an artifact schema and telemetry; and an execution block opening with a "NOW SOLID INSTRUCTIONS" divider. Independent convergence on one elaborate shape is how a real underlying form announces itself.

**Measured drift where patterns were hand-copied.** The self-assessment verdict block exists in three different styles across the corpus and is absent from two specs. The "NOW SOLID INSTRUCTIONS" divider is absent from exactly the two specs (`innovate`, `td-critique`) where it would help most. The three runners (`MVL`, `MVLw`, `aMVLw`) carry near-duplicate operational blocks — Workspace Invariant, Transition Protocol, iteration handling, resume logic — with real divergence: `MVL` lacks the timestamp policy and history-append rule the other two gained. A standardization worklist (`devdocs/editing_discpinlines.md`) was started and went stale; its file paths now point at directories that no longer exist. Drift of this kind is the empirical signature of shared structure that has no declared source.

**A reserved consumer that was never built.** All three runners call `bash tools/structural_check.sh <output> <discipline>` — and `tools/` does not exist. Every inquiry (including this one) records "manual check" in its place. The call-site's contract — given an output file and a discipline name, verify the discipline's required structure — presupposes exactly the per-discipline structural declaration this inquiry found missing. The hidden abstraction has had a customer waiting at the counter the whole time.

### 3. The seven latent abstractions (the catalog)

1. **The Discipline Spec Schema.** The section anatomy described above, currently instantiated by 3 of 7 specs. It exists as convergent practice; it is not named anywhere, no spec declares conformance or deviation, and nothing can check it.
2. **The trait library.** Roughly eight recurring standard blocks — the Loading-note preamble, the Step-0 pre-read contract, the SKILL.md entry-point shape, the NOW SOLID divider, the verdict vocabulary, the override-record pattern (`<rule>-marked-inapplicable: <reason>`), the asymmetric-failure principle, the two-layer failure-mode framework — each appearing in several specs with wording variance and accidental absences. These are the "fields" of the latent dataclass.
3. **The runner common core.** The duplicated runner blocks. Notably, the corpus already has a proven sharing mechanism for exactly this kind of text: runners load protocols (`conclude.md`, `branch_inquiry.md`) by path at runtime.
4. **Within-spec bundling targets.** Logic spread inside single specs — worst in `innovate`, whose refinement notes cross-reference each other through hand-written prose pointers. The project's own conventions (the placement convention at `docs/canon/thinking_disciplines/anatomy/discipline_rule_placement.md` and the lifting recipes at `.../step_refinement.md`) define exactly the content-preserving consolidation moves needed.
5. **The lifecycle layout.** Three coexisting, undeclared conventions for "not live anymore": `old_*` files inside `references/`, the `non-active/` folder, and `archived_skills/`. Plus development-history docs with no defined home.
6. **The per-spec manifest.** A machine-readable sidecar (sections present, traits instantiated/deviating, output-file contract) — not loaded at runtime, but greppable. This is the missing input for the ghost checker and for the spec-edit regression checks the project's regression catalog (`docs/canon/regression/desc.md`, "Type 5: spec symptoms") already plans.
7. **The corpus entry point.** No file currently answers "what specs exist, what conventions govern them, where do I look first." The five convention docs are themselves un-indexed.

### 4. The constraint envelope every candidate had to satisfy

- **Content preservation** — bundling means changing an item's address, never its text; relocation-with-cross-reference is the legal move (the project performed exactly this on `td-critique` today: eight failure modes relocated per-phase, "substance preserved 100%").
- **The single-context loading contract** — every reference spec is read in full into one context; candidates were classified **runtime-invisible** (don't change any byte an executing LLM loads — always eligible) vs **runtime-visible** (change loaded bytes or their order — eligible only with a proven carrier or an explicit gate). One honest correction from adversarial testing: *moving text within a loaded file changes byte order and is therefore runtime-visible-lite* — acceptable precisely because the project's committed text-organization framework says locality improves LLM consumption, and today's `td-critique` relocation is the working precedent.
- **Looseness** — any template is suggested-not-required with licensed deviation (the corpus's anatomy doc demands uniqueness; the `cognitive_fixes/_template.md` shows the established loose-template style).
- **Organic adoption** — conformance happens when a spec is next touched; no forced migration (the corpus's own convention for convention-rollout).
- **Culture-fit** — no build step, no symlinks (snapshot machinery forbids them), reuse of proven mechanisms (registry folder, convention doc, load-by-path, plain files).

### 5. The surviving design set

Ranked by the critique's fitness landscape. Every item is reversible by a single commit.

**5.1 The traits registry with drift repair** *(runtime-invisible; highest immediate value).* Create `cognitive_harness/traits/` on the proven `cognitive_fixes` shape: an index README with staging gates and kill conditions, one file per trait holding the canonical wording, an instantiation table (which spec carries it, in which variant), and a deviation log. The instantiation status vocabulary is the load-bearing detail: `instantiated / drifted-unintended / deviation-declared-deliberate / not-applicable`. Phase 1 is the drift-repair worklist regenerated from current reality (superseding the stale `editing_discpinlines.md`): the missing verdict blocks in `decompose`, the missing NOW SOLID dividers, `MVL`'s missing timestamp policy — each a bounded additive edit. The sense-making verdict block is pre-marked `deviation-declared-deliberate` per the recorded user revert; repairing it requires a user decision, not a worklist tick. Verdict styles are recorded as recognized variants in round one — no forced unification of the compound-verdict style (`articulate_simple`) with the `Overall:` style.

**5.2 The single entry point: `cognitive_harness/SPEC_STANDARD.md`** *(runtime-invisible).* One artifact merging three candidates that were killed as separates (a schema doc, a corpus index, a style-guide assembly — three new meta-docs would have worsened the disease they cure). Contents: the corpus map (what exists, where); the Discipline Spec Schema v1 stated once and thin — section anatomy plus per-section element-classes, explicitly **descriptive of current best practice, not normative**; a conformance matrix (which of the 7 specs carries which sections — honest about the two generations); a schema-version convention (`schema: v1` declared per adopting spec); and pointers — never copies — to the five governing convention docs and the traits registry.

**5.3 The per-spec manifest + advisory checker** *(runtime-invisible now; the strategic unlock).* A small sidecar per discipline (greppable markdown or YAML; not loaded by Step 0) declaring: sections present, trait instantiation statuses, and the discipline's *output-file contract* (which sections a `sensemaking.md` etc. must contain — exactly what the runners' ghost checker call needs). Useful with no tooling at all as a human-scannable conformance card. The checker, when written, is **advisory — report-only, never blocking** — which respects the corpus's explicit deferral of mechanical enforcement (`step_refinement.md`: "No mechanical enforcement… stays deferred") while serving the regression catalog's planned spec-symptom checks (shorter-than-before, missing sections, removed safeguards). Worked example tested in critique: an edit deletes `innovate`'s "Survival Bias" section → manifest section-list vs spec headings mismatch → reported.

**5.4 The runner single-source conformance-diff** *(near-invisible; resolves the corpus's worst duplication without touching runtime behavior).* Instead of extracting the runners' shared blocks into a runtime-loaded file, write the canonical version of the shared blocks ONCE as a reference document (e.g., `protocols/runner_core.md`, loaded by humans and checkers, not by runners), add stable block headings to the three runners (~6 lines), and check the three inline copies against the canonical source — by tooling later, by a documented one-line `diff` command now. Drift becomes mechanically visible; what executing runners load does not change by a byte. This also generalizes: checking declared sources against inline copies is the same mechanism the traits registry uses — one concept covers runner blocks, loading notes, and verdict vocabulary.

**5.5 Schema-version field** *(rider).* `schema: v1` in adopting specs' frontmatter or footer — three lines that turn the loose-template stance from a vibe into a mechanism (deviation is *from a named version*, and future tightenings become v2 instead of edits-in-place).

**5.6 Lifecycle/archive layout** *(runtime-invisible housekeeping).* `references/` holds only the live runtime spec. Old versions move to `cognitive_harness/<discipline>/archive/` (outside `references/`, so the runtime folder stays single-purpose; plain `git mv`; verified nothing loads `old_*` at runtime). Development-history docs get a declared devdocs home. One convention replaces three implicit ones.

**5.7 The bundling pass for `innovate`** *(runtime-visible-order; precedented).* Apply the placement convention and the Form-2→Form-1 lifting recipes to the worst spread case: map `innovate`'s 15 refinement notes and their prose cross-reference web; give each rule its canonical home with one-line cross-reference stubs at old surfaces; follow the exact procedure shape of today's `td-critique` relocation (per-move verbatim statement, cross-reference resolution check, single-commit revert). One spec at a time; never a corpus-wide sweep.

**5.8 Adoption order.** Runtime-invisible declarations first (registry, entry point, manifests), conformance-diff next, order-changing bundling after, and the one genuinely runtime-visible move (extraction) last and gated. The visibility classification test is operational: *does the change alter any byte — including order — that an executing LLM loads? then it is runtime-visible and needs a gate.*

### 6. The unifying principle

Every survivor instantiates one idea: **declare and verify; don't rewrite.** The corpus's structure mostly exists — what's missing is its name (schema), its source of truth (traits, runner core), its declaration (manifests, conformance matrix), and its check (advisory diffs). This is the markdown equivalent of the user's dataclass intuition: the dataclass is the schema + manifest; the linter is the advisory checker; and just as introducing a dataclass doesn't rewrite business logic, none of it compacts or rewrites a single earned clause.

### 7. What was rejected or gated, and why

- **Splitting runtime discipline specs across files — deferred.** Every reference spec's loading contract demands full single-context loads; canon commits the runtime spec to one path; the snapshot recipe and installers assume the current layout; and the project has no build step to recompose parts. Revival trigger: if check/compile tooling ever ships and runs routinely (advisory checker in actual use for one month or more), revisit.
- **Runner-core extraction (runtime-loaded shared file) — gated, not killed.** It is the only true deduplication, and the protocol load-by-path carrier is proven. But it changes what every runner run loads, adds a partial-load surface to the most critical artifacts, and requires lockstep installer + snapshot-recipe updates. Gate: adopt after the manifest/advisory checker has run for one month catching runner drift via the conformance-diff AND one snapshot cycle has dry-run the new file in its rewrite list — or earlier if a fourth runner is added or the shared blocks change twice within one month.
- **Three separate meta-docs (schema doc + index + style guide) — killed as separates;** survives only as the single merged entry point. A corpus suffering from scattered convention docs must not cure itself by scattering three more.
- **Repair-without-source-of-truth — killed on evidence.** The stale `editing_discpinlines.md` worklist IS this strategy's recorded failure: drift was repaired once, then re-drifted, and the worklist itself rotted. Repair rides the registry or it repeats history.
- **Cross-spec dedup-by-pointer (replacing per-spec text with references) — dead region.** Even ignoring the no-compaction constraint, it breaks per-spec self-containedness under the single-context contract. The binding constraint was never compaction; it is what the executing LLM has in context.
- **Big-bang adoption of the whole architecture — killed.** Each piece adopts independently, organically, on-touch — per the corpus's own rollout convention.
- **Do-nothing ("accreted notes are growth rings; tidiness destroys history") — killed as a conclusion, absorbed as a posture.** The drift evidence is real harm; but the surviving designs are all overlay-style — they add structure around existing text rather than rewriting history.

## Next Actions

### MUST

None. The analysis and design set is the deliverable; adoption decisions belong to the user (consistent with the inquiry's propose-only scope).

OULD 1 — The traits registry + drift repair
  
  Plain version: Several standard text blocks (the verdict block, the Loading note, the NOW SOLID divider…) are copy-pasted
  across specs with no master copy, so the copies went out of sync. Create cognitive_harness/traits/ — one small file per
  block holding the official wording + a table of which spec has it, which variant, and whether a difference is accidental or
  deliberate. Then fix only the accidental gaps (paste the block into decompose, add the missing dividers, give MVL the
  timestamp policy).

  When: anytime; it's the highest-value zero-risk item.

  Sample_scenario_past: In May you decided every spec should end with **Overall: PROCEED/FLAG/RE-RUN**. You made a to-do list
  (editing_discpinlines.md), applied it to innovate, got pulled elsewhere. Today the list's paths point at folders that no
  longer exist, decompose still has no verdict block, and articulate_simple — written later, with no master copy to consult —
  invented a different verdict system. Result: 3 styles, 2 absences, dead list, and nobody decided any of it.

  Sample_scenario_after: You want to tweak the verdict block's FLAG wording. You open traits/verdict_block.md, edit the
  canonical text, and read the table: four specs say instantiated → update those four; sense-making says
  deviation-declared-deliberate → skip it without re-thinking why. Ten minutes, no archaeology. A month later you write a new
  discipline — you copy the block from the trait file and add one row to its table.

  ---
  COULD 2 — SPEC_STANDARD.md (the front door)
  
  Plain version: One document that answers "what specs exist, what shape is a spec supposed to have, who conforms to it, and
  where are the rules?" It contains the corpus map, the schema (a short description of the section anatomy your three newest
  specs already share — not a form you must fill), a conformance table, and links to the five scattered convention docs.

  When: anytime; no dependencies.

  Sample_scenario_past: This very inquiry: to answer "how should specs be organized," the session had to find five convention
  docs scattered across two doc trees, plus reverse-engineer the unnamed schema by comparing routelister.md against
  innovate.md. A cold session doesn't even know those five docs exist — nothing links them.

  Sample_scenario_after: You get an idea for a new discipline, /verify-claims. You open SPEC_STANDARD.md: the map shows what
  exists, schema v1 lists the usual sections (Identity with NOT-list, Components, Process, Quality, Output, execution block),
  the matrix shows routelister as a clean example, links take you to the placement rules. You author against it in one
  sitting and add one row to the matrix. Every future structure question starts at one file instead of five.

  ---
  COULD 3 — Per-spec manifests (ID cards)
  
  Plain version: A tiny sidecar file per discipline (~20 lines, never loaded at runtime) declaring three things: which schema
  sections this spec has, which traits it carries (with status), and what its output file must contain (e.g., "a critique.md
  must have: dimensions, landscape, verdicts, coverage map, signal, telemetry"). Start with one pilot (td-critique).

  When: after/alongside SPEC_STANDARD, so the fields match the declared schema.

  Sample_scenario_past: Every pipeline run hits step 4: "run tools/structural_check.sh… unavailable → manually check the
  required structure." Manual means the AI re-derives "what's a complete sensemaking.md?" from memory, differently each
  session, then writes "PASS" into _state.md. There is no written baseline to check against — which is also why a deleted
  section in a spec would go unnoticed.

  Sample_scenario_after: td-critique/manifest.md lists the six required output sections. The runner's manual check becomes
  mechanical: compare the saved file's headings to the manifest. Same check, every session, any AI. And when an edit
  accidentally drops a section from the spec itself, comparing spec to manifest flags it the same day.

  ---
  COULD 4 — The advisory checker (finally write structural_check.sh)
  
  Plain version: Write the small script all three runners have been calling for months even though it doesn't exist. Mode 1:
  check a discipline's OUTPUT file against the manifest's output contract (the runners' existing call). Mode 2: check SPEC
  files against their manifests (catches "section deleted / safeguard removed" regressions). It only prints warnings — it
  never blocks anything, which keeps it compatible with your "no mechanical enforcement yet" rule.

  When: after ≥2 manifests exist (hard dependency).

  Sample_scenario_past: Three runner specs contain bash tools/structural_check.sh [output] [discipline]. One hundred percent
  of inquiries ever run have logged "script unavailable — manual check." The check exists as ritual text. Separately: if a
  future cleanup deleted innovate.md's "Survival Bias" section, nothing would notice until a run mysteriously degraded weeks
  later.

  Sample_scenario_after: Mid-pipeline, after innovation.md saves, the runner actually executes the script: [PASS] seed… 
  [PASS] mechanisms… [FAIL] telemetry: 'Overall:' line missing — fixed before critique starts. Monthly, you run mode 2 across
  the corpus: "innovate.md: manifest lists 'Survival Bias', spec doesn't have it" — a regression caught the day it was
  introduced.

  ---
  COULD 5 — Runner conformance-diff (master copy, runners unchanged)
  
  Plain version: The three runners (MVL/MVLw/aMVLw) carry near-identical big blocks (Workspace Invariant, Transition
  Protocol, resume logic…) that have already drifted. Instead of risky surgery: write those blocks ONCE in
  protocols/runner_core.md as a reference (runners don't load it), add ~6 stable headings to the runners so the blocks are
  diffable, and document the one-line diff command. What runners load at runtime doesn't change by a byte.

  When: anytime.

  Sample_scenario_past: You added the timestamp policy ("fresh date per History entry") to MVLw, and aMVLw inherited it at
  authoring. MVL never got it. Nothing compares the three files, so the gap sat invisible for weeks — MVL inquiries still
  collapse their history timelines today. Every runner improvement silently depends on you remembering to hand-copy it twice.

  Sample_scenario_after: You improve the Transition Protocol in MVLw and update the master copy. Next diff run prints: "MVL
  §Transition Protocol differs from canonical; aMVLw matches." You propagate it (or record "deliberate variant" if MVL should
  stay simpler). Drift can still happen — it just can't happen silently anymore.

  ---
  COULD 6 — Lifecycle moves (archive the old_* files)
  
  Plain version: Right now references/ folders contain BOTH the live spec and its previous version (old_td-critique.md next
  to td-critique.md). Move old versions to cognitive_harness/<discipline>/archive/ so references/ contains exactly one thing:
  what runtime loads. Also write down, in SPEC_STANDARD, where dev-history docs live.

  When: anytime; one git mv commit.

  Sample_scenario_past: A cold session is told "read the td-critique reference." It lists the folder, sees two
  similarly-named files, and reads the old one (or both, wasting half its context). The project currently expresses "this is
  old" three different ways — old_ prefix, non-active/, archived_skills/ — and none of them is written down anywhere.

  Sample_scenario_after: references/ = one live file per discipline, always. Your compare-old-vs-new habit survives
  unchanged: diff archive/old_td-critique.md references/td-critique.md. "Which file is the real one?" stops being a question
  anyone (human or AI) has to answer.

  ---
  COULD 7 — Bundle innovate (the overgrown spec)

  Plain version: innovate.md is your most overgrown spec — 752 lines, 15 refinement notes, 9 override patterns, all wired
  together by prose pointers ("see the X note at Phase Y, forthcoming"). Apply the exact move that worked on td-critique
  today: give each rule ONE home at the phase where it fires, leave one-line pointers behind, move text verbatim, one spec
  per commit.

  When: when you're ready for the first order-changing move; this changes the order an executing LLM reads things in
  (deliberately — locality is the point, per your committed 17-04/18-30 framework).

  Sample_scenario_past: Executing /innovate means navigating the Inherited Frame Audit section, which refers to three
  "forthcoming refinement notes" that now exist elsewhere in the same file, while Phase 2 hosts five stacked notes whose
  relationships exist only as prose. Adding note #16 requires first understanding the pointer web — every addition is harder
  than the previous one.

  Sample_scenario_after: Like td-critique now reads: each phase carries its own rules under italic markers, a thin index
  table up top, every cross-reference resolving to one canonical home. Reading Phase 2 shows everything that fires at Phase
  2, adjacent. Adding note #16 = write it at its phase, add one index row.

  ---
  DEFERRED 1 — Runner-core extraction (the real dedup, parked)
  
  Plain version: The end-state version of COULD 5: runners actually load the shared file at runtime and the three copies get
  deleted. Parked because it's the one move that changes what executing runners load.

  Gate: checker catching runner drift for ≥1 month AND one snapshot cycle dry-runs the new file — or earlier if a 4th runner
  appears or shared blocks change twice in a month.

  Sample_scenario_past (the risk if done today): You extract the blocks, but install_for_claude.sh isn't updated to ship
  runner_core.md → everyone who installs gets runners that HALT at the transition step. Or a bf4ae1f-style snapshot's rewrite
  list misses the new path → your A/B regression comparison silently tests the wrong version.

  Sample_scenario_after (when the gate fires): The canonical file has been proven correct by a month of diff checks; the
  snapshot recipe has dry-run it. Extraction is then mechanical: delete three copies, add one load line each. A future 4th
  runner is ~100 lines instead of ~400.

  ---
  DEFERRED 2 — The codification ritual

  Plain version: Borrowed from how legislatures handle laws: amendments accrete, then a periodic codification consolidates
  them without changing legal meaning. Same here: a named, recurring cleanup pass (the COULD-7 procedure, made routine) that
  fires on a threshold instead of on pain.

  Gate: any spec exceeds 15 refinement notes, or any single phase accumulates 5.

  Sample_scenario_past: Cleanups currently happen only when pain peaks — td-critique's relocation happened because a
  seven-inquiry failure series forced attention to it. Between crises, specs accrete without limit.

  Sample_scenario_after: innovate hits note #16 → the trigger fires → a routine, templated consolidation pass runs as a small
  inquiry. No spec ever drifts more than one threshold past tidy, and "cleanup" stops being an emergency genre.

  ---
  DEFERRED 3 — Build-step compilation

  Plain version: True multi-file specs (edit quality.md, process.md separately; a script compiles them into the single
  runtime file). Parked: you have no build tooling or habit, and canon currently commits to one runtime file edited directly.

  Gate: check/compile tooling in routine use for ≥1 month.

  Sample_scenario_past (the risk if done today): You edit sense-making/parts/quality.md and forget to compile (no habit
  exists) — runtime keeps executing the stale version for weeks. Or a cold session edits the compiled file directly and the
  next compile silently erases its work.

  Sample_scenario_after (if ever revived): The advisory checker already runs routinely, so "compiled output matches parts" is
  just one more automatic report line. Maintainers edit small focused files; the runtime contract (one full file in context)
  never changes.

  ---
  DEFERRED 4 — Empirical validation

  Plain version: Everything above claims "this organization makes LLM execution better." That claim is currently theory +
  precedent, not measured. After a spec adopts a new organization, compare real runs before vs after.

  Gate: ≥5–10 real invocations on a reorganized spec.

  Sample_scenario_past: The 17-04 framework committed "locality helps LLM attention" based on reasoning and analogies to
  API-docs conventions — honest about having zero run data. If the theory is wrong, the corpus is being reorganized for
  nothing.

  Sample_scenario_after: innovate gets bundled (COULD 7). The next 5–10 /innovate runs are compared against earlier runs —
  telemetry completeness, note-compliance, missed rules. Data confirms → continue the rollout with evidence. Data contradicts
  → one-commit revert, and the framework's claims get honestly re-scoped.

### COULD

- **What:** Create `cognitive_harness/traits/` (registry on the `cognitive_fixes` shape) and run drift-repair Phase 1 (additive fixes for the unintended absences; sense-making verdict block excluded as deliberate).
  **Who:** a small materialization run, or hand edits.
  **Gate:** observable — whenever the user wants the highest-value invisible fix; each repair edit is Tier-1-sized.
  **Why:** fixes the robustness pain at its source and creates the source of truth that prevents re-drift (the recorded failure mode of repair-only).

- **What:** Write `cognitive_harness/SPEC_STANDARD.md` (entry point: corpus map + thin descriptive schema v1 + conformance matrix + pointers).
  **Who:** one authoring session.
  **Gate:** observable — any time; no dependencies.
  **Why:** names the half-born schema, indexes the scattered conventions, and gives future structural inquiries one reference surface instead of five.

- **What:** Add per-spec manifests (sections + trait statuses + output-file contract), starting with one pilot discipline (suggested: `td-critique`, freshest structure).
  **Who:** one authoring session per spec (~15–30 lines each).
  **Gate:** condition-bound — after or alongside SPEC_STANDARD so manifest fields match the declared schema.
  **Why:** the conformance card is immediately scannable, and it is the missing input for the ghost `tools/structural_check.sh` and the regression catalog's spec-symptom checks.

- **What:** Write the advisory checker (`tools/structural_check.sh`): mode 1 checks discipline OUTPUT files against the manifest's output contract (the runners' existing call site); mode 2 checks SPEC files against their manifests (Type-5 symptoms). Report-only.
  **Who:** small script.
  **Gate:** condition-bound — after ≥2 manifests exist.
  **Depends-on:** COULD item "per-spec manifests". This COULD is GATED — do not act until manifests exist.
  **Why:** turns every runner's currently-dead checker call into a live advisory signal without violating the enforcement-deferral convention.

- **What:** Establish the runner single-source conformance-diff: author `protocols/runner_core.md` (canonical text of the shared blocks, marked as reference-not-loaded), add stable block headings to the three runners, document the diff command.
  **Who:** one authoring session.
  **Gate:** observable — any time; ~6 heading lines are the only runner-file change.
  **Why:** makes the corpus's worst silent drift (three-way runner divergence) mechanically visible at near-zero runtime risk.

- **What:** Lifecycle moves — `git mv` `old_*` reference files to `cognitive_harness/<discipline>/archive/`; declare the dev-history doc naming rule inside SPEC_STANDARD.
  **Who:** one commit.
  **Gate:** observable — any time.
  **Why:** one declared convention replaces three implicit ones; `references/` becomes runtime-only.

- **What:** Bundle `innovate`'s spread logic per the placement convention, using the 2026-06-09 `td-critique` relocation as the procedural template (one spec; per-move verbatim statements; single-commit revert).
  **Who:** one focused editing session, ideally as its own small inquiry.
  **Gate:** condition-bound — when the user is ready for the first order-changing (runtime-visible-lite) move; `innovate` is the highest-spread target.
  **Why:** the spec most at risk of becoming unmaintainable (15 notes, prose pointer web) gets the same locality improvement `td-critique` received today.

### DEFERRED

- **What:** Runner-core extraction into a runtime-loaded shared protocol file.
  **Gate:** revival trigger — (advisory checker in routine use ≥1 month catching runner drift AND one snapshot cycle dry-runs the new file) OR a 4th runner is added OR shared blocks change twice within one month.
  **Why (if revived):** true deduplication; the conformance-diff will have proven the canonical source and the gate will have proven the carrier.

- **What:** The codification ritual (named, recurring, content-preserving consolidation pass per spec — the legislative-codification transfer).
  **Gate:** revival trigger — any spec exceeds 15 refinement notes, or any phase crosses the committed cluster-trigger (5 notes at one phase).
  **Why (if revived):** converts bundling from an event into a maintenance rhythm.

- **What:** Build-step compilation of modular spec sources into single runtime artifacts.
  **Gate:** revival trigger — check/compile tooling in routine use ≥1 month.
  **Why (if revived):** would lift the single-file constraint honestly; until tooling exists it contradicts culture and canon.

- **What:** Empirical validation that the recommended organizations improve actual LLM execution (carried forward unchanged from the 2026-06-09_17-04 framework finding).
  **Gate:** condition-bound — ≥5–10 real invocations on a spec after it adopts a new organization.
  **Why (if revived):** the LLM-consumption claims remain theoretical + precedent-grounded; this closes the loop.

## Reasoning

**Why "declaration layer" beat "reorganization."** Four mechanisms reached it independently: inverting the seed ("the organization is adequate; the ACCESS is missing"), absence-recognition's bidirectional check ("the project already HAS the template, the rule-type, the registry, the sharing mechanism — what's absent is naming and indexing"), the native domain transfer (schema + validator + linter-config), and the dual-consumer lens (runtime wants inline copies; maintenance wants one source; only a declared-source-plus-check serves both). The convergence was tested for shared-input spuriousness — the four arguments rest on different grounds, one of them on a challenge to the inquiry's own premise.

**Why the runner answer flipped from extraction to conformance-diff.** The decomposition stage had framed extraction (via the proven protocol load-by-path mechanism) as THE runner move. A piece-level inversion generated the alternative — keep runtime untouched, declare the source, check the copies — and under critique's high burden for runtime-visible changes, extraction failed to clear the bar *now*: nearly all of its value arrives runtime-invisibly via the diff, while its failure surface (the three most load-bearing files in the system, plus installer and snapshot coupling) is maximal. Extraction survives as the gated end-state, with explicit event triggers so "later" cannot silently become "never."

**Why the registry survived its own precedent's stall.** The strongest prosecution against the traits registry was its own precedent: `cognitive_fixes/` has held exactly one entry since 2026-05-23. The defense that held: the stall is the staging gates working (nothing new qualified; the kill-conditions exist for honest retirement), and the registry design carries those same gates — so the zombie-infrastructure risk is bounded by an already-tested mechanism, not by optimism.

**Why "drift is harm" had to be refined.** The frame-premise prosecution surfaced a recorded counter-instance: the user's deliberate revert of the sense-making verdict-vocabulary standardization ("indicators, not gates" is intentional). A canonicalization mechanism that cannot represent deliberate deviation would repeat that mistake at scale. The refinement — undeclared drift is harm; declared deviation is design — is now structural: it lives in the registry's status vocabulary, and sense-making's case is pre-marked.

**Significant kills.** Three separate meta-documents (cured by merger — a corpus suffering from scattered conventions must not cure itself by scattering more); repair-without-source-of-truth (its failure is already recorded in the stale worklist's dead paths); dedup-by-pointer (breaks single-context self-containedness — the analysis showed no-compaction was never the binding constraint; the loading contract is); big-bang adoption (contradicts the corpus's own organic-rollout convention); do-nothing/growth-rings (lost to the drift evidence, but its overlay-only posture shaped every survivor). Trivial kills: graph-shaped organizations and 4+-coordinate tables (already in the committed avoid-list of the 17-04 framework).

**Self-reference handling.** This inquiry used the disciplines to evaluate the disciplines' own files. The verdicts were therefore anchored outside the discipline logic wherever they mattered: verbatim quotes from the governing convention docs (the enforcement-deferral clause; the user-revert record), empirical file evidence (mtimes, absent `tools/`, stale paths, three-way runner diffs, the same-day `td-critique` relocation), and cross-domain precedents (JSON-Schema/linter, legislative codification, publishing house style). The critique's mechanism-independence status is `validated` on those anchors, not on internal agreement.

**Relationship to committed priors.** This finding adds a layer ABOVE — and composes with — five settled commitments it deliberately did not re-litigate: the content-type → pattern framework (`devdocs/inquiries/2026-06-09_17-04__discipline_spec_text_organization_patterns_catalog/finding.md`), the per-phase placement carve-out (`devdocs/inquiries/2026-06-09_18-30__per_phase_placement_failure_modes_with_distinguishing_header/finding.md`), the placement convention, the Step Refinement shape, and the distillation doctrine. Those govern text WITHIN a spec; this finding governs the corpus AROUND the specs: files, shared sources, declarations, checks.

## Open Questions

### Monitoring

- **Does the traits registry move, or stall like its precedent?** Observable: entries and instantiation-table updates within the next ~10 spec-touching inquiries. If it stalls with drift still occurring, the registry shape is wrong for traits (not just unlucky).
- **Do manifests stay true?** Observable at each spec edit: manifest updated in the same commit or not. Persistent desync = adopt the same-commit rule (staged constraint) or kill the manifest.
- **Does `innovate`'s bundling repeat `td-critique`'s success?** Observable after the move: cross-references resolve, no behavior regression in the next ≥3 innovate runs.

### Blocked

- **Empirical LLM-consumption validation** — blocked until a spec adopts a new organization and accumulates ≥5–10 real invocations (inherited from the 17-04 finding, unchanged).

### Research Frontiers

- **A rigorous content-type taxonomy** across the corpus (carried from 17-04; this finding adds corpus-level artifact types — spec/runner/protocol/registry/manifest — to the eventual taxonomy's scope).
- **Schema for non-discipline artifacts.** Runners and protocols share some traits with discipline specs but have their own implicit anatomies (path contract → steps → failure modes). Whether they deserve their own schema v1 or a variant is unexplored.

### Refinement Triggers

- **If the advisory checker runs routinely for a month**, the deferred build-step and extraction candidates re-open (their gates are defined above).
- **If any spec crosses 15 refinement notes or any phase crosses the 5-note cluster-trigger**, the codification ritual re-opens.
- **If a future inquiry needs a 6th content-type or a new trait**, extend the registry/schema rather than forcing fits (the schema is versioned for exactly this).

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
when you inspect the disciplines in thsi project. do you think they can be formatted or structured significantly better and tidy way? usually in swe when i see code files with such entangled logics etc, i understand that "code is pregnant"  which means there is a hidden abstraction or class or dataclass logic.. if implemented it makes everything clean. But in this project we dont have code, we have skill propmt files. Yet i still think it might have some significant organisation logic hidden in it. 

spreading the spec different files, maybe parts of it 
each spec has common meta patterns , which can be used to create a common template like thing
some logic is spread in a spec that can be bundled and made more robust (i dont want to compact them due to regression risk is too high )
and some other new and really important ways that i cant think of...

i want you to dive deep into this .
```

</details>
