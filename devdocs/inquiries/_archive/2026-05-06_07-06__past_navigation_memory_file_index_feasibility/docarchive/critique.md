# Critique: PastNavigationMemoryFile Index Feasibility

## User Input

Should Homegrown keep a record of all Navigation-related file creations so there is a `PastNavigationMemoryFile` index? Is this easier, and is it feasible?

## Dimensions With Weights

### 1. Scope Correctness - 20%

Pass means the candidate indexes files that may contain past Navigation memory, not every Navigation-adjacent artifact.

### 2. Authority Separation - 25%

Pass means the candidate cannot be mistaken for current route truth. Route Memory Review must remain the current interpretation authority.

### 3. Discovery Usefulness - 15%

Pass means Navigation intake and Route Memory Review can find candidate memory files more easily than by ad hoc scanning.

### 4. Feasibility And Update Ownership - 20%

Pass means the candidate has a credible creation-time update path and does not depend on casual manual memory.

### 5. Robustness Against Staleness - 15%

Pass means stale or missing index entries can be detected, repaired, or safely bypassed.

### 6. Rollout Coherence - 5%

Pass means the candidate can fit current Homegrown docs without pretending that all Navigation route-memory policy patches already exist.

Critical dimensions:

- Authority Separation.
- Feasibility And Update Ownership.
- Robustness Against Staleness.

## Fitness Landscape

### Viable Region

Candidates that:

- index only `PastNavigationMemoryFile` candidates;
- keep current route interpretation out of the index;
- update at artifact creation time;
- provide active-tree scan/backfill fallback;
- can start as Markdown before runner automation exists.

### Dead Region

Candidates that:

- index every Navigation-related file regardless of memory content;
- store carry-forward / retire / ignore route decisions as index truth;
- require the index to be complete before Navigation can proceed;
- depend only on manual recollection without refresh.

### Boundary Region

Candidates that help one part of the problem but not the whole:

- scan-only fallback;
- per-file metadata only;
- consumed-source lists inside `route_memory_review.md`;
- append-only event log without readable current index.

### Unexplored Region

- Future tooling to generate or repair the index automatically.
- Front-matter metadata standard for all future route-memory files.
- Whether `Review Refs` should be kept in v1 or deferred.

These are not needed to answer the current feasibility question.

## Candidate Verdicts

### Candidate A - No Index, Scan Each Time

Prosecution:

The candidate fails the user's core ease concern. It leaves every Navigation run dependent on remembering path patterns and naming conventions. It also gets worse as `route_memory_review.md`, `_frontier.md`, child maps, and sync briefs accumulate.

Defense:

It avoids stale index risk and requires no new artifact.

Collision:

The defense is real, but it solves staleness by giving up discoverability. That is acceptable as a fallback, not as the main design.

Verdict: KILL as default.

Constructive seed:

Keep active-tree scan as validation/backfill, not as the only discovery mechanism.

### Candidate B - Global PastNavigationMemoryFile Index

Prosecution:

A global index can become false authority. If it says nothing about a file, a runner may infer no file exists. If it stores review-looking fields, a runner may treat it as current truth.

Defense:

It directly answers the user's concern. It gives Homegrown an explicit durable artifact for route-memory discovery, and current active backfill is cheap.

Collision:

The candidate survives if narrowed. It dies if broad or authoritative.

Verdict: REFINE.

Refinement:

Make it a non-authoritative discovery registry at:

```text
devdocs/navigation_context/past_navigation_memory_file_index.md
```

Include role, entry criteria, update rules, validation/backfill, and a minimal table. Do not include current route-disposition fields.

### Candidate C - Append-Only Creation Event Log

Prosecution:

It is harder to scan than an index and adds event-log ceremony before enough data exists to justify it. A reader asking "what memory files exist?" would still need to derive current rows.

Defense:

It is strong for auditability and avoids mutating a table.

Collision:

The audit benefit is real but premature. The current problem is discovery, not historical event reconstruction.

Verdict: KILL for v1, DEFER as future replacement if table mutation becomes confusing.

Constructive seed:

If the simple index starts accumulating too many update notes, split into an append-only event log plus generated current index.

### Candidate D - Per-File Metadata Only

Prosecution:

It does not give Navigation one place to look. Existing files lack the metadata. A runner still has to scan broadly before it knows what exists.

Defense:

It is excellent for refresh and backfill because metadata lives with the file itself.

Collision:

It is support infrastructure, not the main answer.

Verdict: REFINE.

Refinement:

Use per-file metadata later as a scan/backfill accelerator. Do not make it a prerequisite for the initial index.

### Candidate E - Hybrid Registry Plus Scan Refresh

Prosecution:

It introduces one more artifact and requires multiple creators to remember registration. If the role note is weak, it can still drift into authority.

Defense:

It combines the strengths of the other candidates: explicit discovery, creation-time registration, and safe fallback when the index may be stale.

Collision:

The prosecution is answered by narrow scope, anti-authority wording, update-failure behavior, and scan/backfill. The defense survives all critical dimensions.

Verdict: SURVIVE.

Conditions:

- Name it `PastNavigationMemoryFile Index`.
- Store it under `devdocs/navigation_context/`.
- Register only files that may contain past Navigation memory.
- Add entries at artifact creation time.
- Exclude archives by default.
- Treat the index as incomplete unless confidence is established.
- Route Memory Review still reads the files and writes current interpretation.

### Candidate F - Route Memory Review Consumed-Set Only

Prosecution:

It only records what a review already read. It cannot help find candidate files before review.

Defense:

It is important for review auditability and should exist inside `route_memory_review.md`.

Collision:

It is necessary but insufficient. It belongs to Route Memory Review output, not index replacement.

Verdict: KILL as index replacement; PRESERVE as review-file requirement.

Constructive seed:

Every `route_memory_review.md` should include `Sources Read` and may cite index entries consumed.

## Assembly Check

The surviving assembly is:

```text
PastNavigationMemoryFile Index
  -> candidate discovery

active-tree scan/backfill
  -> stale-index safety

Route Memory Review
  -> current interpretation

Navigation
  -> current route map
```

Assembly verdict: SURVIVE.

Refinements required before implementation:

- Use "candidate" language throughout.
- Do not say "all Navigation-related file creations."
- Do not add current route status fields.
- Make index update failure non-destructive.
- Add a validation/backfill section.
- Make initial backfill small and explicit.

## Coverage Map

Evaluated:

- no-index scan;
- global index;
- append-only event log;
- per-file metadata;
- hybrid index plus scan refresh;
- review consumed-set only.

Unexplored but not blocking:

- automated index generator;
- front-matter convention for all future files;
- append-only event log after real usage.

Coverage judgment:

Sufficient for the current question. The viable region is stable and a clean survivor exists.

## Signal

TERMINATE with ranked survivor:

1. SURVIVE: Hybrid `PastNavigationMemoryFile Index` as non-authoritative discovery registry plus scan/backfill fallback.
2. PRESERVE AS SUPPORT: active-tree scan fallback.
3. PRESERVE AS SUPPORT: `Sources Read` inside Route Memory Review.
4. DEFER: per-file metadata convention and append-only event log.
5. KILL: broad index of every Navigation-related file creation.
6. KILL: route-disposition fields in the index.

## Convergence Telemetry

Dimension coverage: complete. All critical dimensions were evaluated.

Adversarial strength: STRONG. The strongest objections were stale-index false confidence and duplicate authority.

Landscape stability: STABLE. All mechanisms and candidates converge on the same boundary: discovery registry survives; authority drift dies.

Clean SURVIVE exists: yes, Candidate E / assembly survivor.

Failure modes observed: none. No rubber-stamping; multiple candidates were killed or refined.

Overall: PROCEED.
