# Branch: docs/ folder per-file heterogeneity structural tidying

## Question

**Subject** — the `docs/` folder at `/Users/ns/Desktop/projects/native/docs/`, specifically the per-file heterogeneity problem where individual files contain mixtures of canon + legacy + sketch + seed material interleaved within a single file.

**Action** — design a structural approach for tidying `docs/` that handles within-file heterogeneity at the organizational level.

**Level** — project-corpus level (the `docs/` folder as a whole organizing scheme) AND per-file level (how a single file's internal heterogeneity is exposed to readers) — preserve BOTH levels.

**Observation targets** (preserve as separate items):
1. Protection of new AI sessions from absorbing stale info as if it were current — the *context-poison* problem.
2. Preservation of legacy / sketch / half-correct material as future-usable seeds — no destructive cleaning.
3. Handling of per-file-fraction heterogeneity — one file can be 60% canon + 30% legacy + 10% seed.
4. Files that cannot be truth-evaluated at all (e.g., `docs/consciousness.md` is a 6-line philosophical seed) — sorting cannot depend on per-paragraph truth-evaluation.
5. Implementation without LLM batch-rewriting every file.
6. Extension or replacement of the inherited 2-axis taxonomy (5-status × 11-subject) which works for whole-file sorting but not per-file fractions.

**Deliverable shape** — a structural design: a folder + annotation + reading-protocol scheme — with named components, an explicit mechanism for each of the 6 observation targets, and trade-offs against alternatives.

Stated:
How should the `docs/` folder be structurally tidied so that within-file heterogeneity (a single file containing interleaved canon + legacy + sketch + seed material) is exposed to new AI sessions in a way that (a) protects them from context-poison, (b) preserves the legacy/sketch material as future-usable project memory, (c) handles per-file fractions without requiring truth-evaluation of individually unevaluable files, (d) is implementable without LLM batch-rewriting every file, AND (e) extends or replaces the inherited 5-status × 11-subject whole-file taxonomy?

## Goal

**Criterion** — a structural design is "good" when it (a) names a concrete mechanism for each of the 6 observation targets, (b) handles within-file heterogeneity not just inter-file sorting, (c) survives the `consciousness.md` case (a file that cannot be truth-evaluated), (d) doesn't require batch-rewriting, and (e) extends/replaces the inherited taxonomy with an explicit before-and-after mapping.

**Use case** — the user will use the design to begin a tidying pass on `docs/`: either applying it manually to some files, or deciding it is the right design before committing to the work.

**Desired outcome** — `docs/` becomes a corpus where a new AI session can quickly distinguish CURRENT TRUTH from HISTORICAL TRACE from FUTURE SEED, even when those three categories are mixed within one file, without that distinction requiring the new session to evaluate each paragraph itself.

**What would fail** —
- (a) Answers that just propose a smarter folder hierarchy (purely inter-file, ignores per-file heterogeneity).
- (b) Designs that require an LLM pass to rewrite every file (excluded by constraint).
- (c) Designs that require pre-classifying unevaluable files like `consciousness.md` (excluded by constraint).
- (d) Designs that propose a sweeping deletion of "legacy" material (excluded by the "preserve as seeds" requirement).
- (e) Designs that just restate the inherited 5-status × 11-subject taxonomy without addressing the per-file-fraction issue.

## Source Input

```text
what u suggested as
Axis A — Status (how authoritative is this file)
[full table]
Axis B — Subject (what the file is ABOUT)
[full table]
is really useful, but it doestn consider there are many half correct half legacy info containing files there.

everytime a new session reads these docs folder , it will have some context poison due to legacy, deprecated, irrelevant, concepts...

but also cleaning everything so only current state and up to date info stays is bad too, bc all these other info there are still meaningful and can be used in the future or can be a seed.

we need a way to tidy  all of these docs folder,

we can use LLM to go check each document and compile certain cannon knowledge maybe, but this will break many docs documents . for example docs/consciousness.md cant be evaluated as true or false or legacy...

we need innovative way structuring this folder and files maybe
```

## Scope Check

Question covers goal. Both ask about a structural design handling within-file heterogeneity, session-poison protection, and seed-preservation simultaneously.

Specific-vs-pattern: the user names `docs/consciousness.md` as ONE example of an unevaluable file; the design must address the BROADER PATTERN (any file that cannot be cleanly truth-evaluated), not just `consciousness.md` specifically. Default applies (broader pattern).

## Layer Commitment

Primary layer: **Structural** — what the `docs/` folder's organization LOOKS LIKE (folder hierarchy, annotation schema, file-level markers, reader-protocol) is the artifact the question is asking to restructure. The user accepts that `docs/` exists and contains a mixture of file types; they want a different organizational shape.

Other layers explicitly out of scope for THIS run:
- **Meaning** — what `docs/` IS as a project concept (a memory archive? a publication area? a curated reference?) — DEFERRED. The user has implicitly settled this: `docs/` is the project's accumulated knowledge including both current truth and historical traces. A meaning-layer inquiry could revisit if the structural design forces the meaning question.
- **Process** — what curation workflow runs over time (who decides when canon material is added, when legacy material is moved, how the per-file fractions get updated) — DEFERRED. Once the structure is settled, a process-layer inquiry can specify the maintenance workflow.

Sequential plan: this inquiry settles structural. If the resulting design forces meaning or process decisions, those become follow-up inquiries.

## Inherited Frame (informational, not a Synthesis Trigger)

The prior conversation produced a 2-axis taxonomy for `docs/`:
- **Axis A — Status:** CANON / THEORY / DESIGN / SKETCH / ARCHIVE
- **Axis B — Subject:** vision / substrate / disciplines / loops / protocols / runtime / autonomy / traversal / rule-mgmt / frontiers / history

This taxonomy is load-bearing for whole-file sorting and the user found it useful. The user's pushback is that it does NOT handle per-file heterogeneity (a file that is 60% canon + 30% legacy + 10% seed gets assigned one status cell, losing the within-file structure). This inquiry must extend or replace the taxonomy for the per-file case while preserving its whole-file utility.

Not a Synthesis Trigger per the strict definition (no 2+ prior `finding.md` outputs being consolidated) — the inherited frame is mid-conversation work, not a published finding. But the frame is a real prior commitment the inquiry inherits and the design must consciously extend it.
