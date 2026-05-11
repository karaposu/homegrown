# Critique: PastNavigationMemoryFile Index Versus Search

## User Input

If Homegrown can find `PastNavigationMemoryFile` candidates by searching known filenames and regex-searchable patterns, does it still need a maintained index?

## Dimensions With Weights

### 1. Discovery Correctness - 25%

Pass means the mechanism reliably finds likely `PastNavigationMemoryFile` candidates without relying on stale manual state.

### 2. Explicitness - 20%

Pass means future users and agents can see what was searched, what was excluded, and why.

### 3. Stale-State Resistance - 25%

Pass means the mechanism does not create a second mutable truth source that can silently drift.

### 4. Operational Feasibility - 15%

Pass means the mechanism is easy to run with current tools and current artifact volume.

### 5. Route Memory Boundary - 15%

Pass means discovery does not become current route interpretation. Route Memory Review must still decide current meaning.

Critical dimensions:

- Discovery Correctness.
- Stale-State Resistance.
- Route Memory Boundary.

## Fitness Landscape

### Viable Region

Designs that:

- derive candidates from the active tree;
- document search patterns and exclusions;
- save a candidate report only when handoff or audit requires it;
- keep current route interpretation in Route Memory Review.

### Dead Region

Designs that:

- maintain a global manual list as v1;
- rely on informal ad hoc search;
- search the whole repository with loose terms and return protocol files as memory candidates;
- treat search results or candidate reports as current route truth.

### Boundary Region

Designs that may become useful later:

- generated global index;
- front-matter marker standard;
- browseable cross-run catalog.

### Unexplored Region

- Exact implementation shell helper.
- Future automation that generates a global index.
- Whether `devdocs/navigation_context/` should store candidate reports or only review artifacts.

These are not needed to answer the current question.

## Candidate Verdicts

### Candidate A - Maintained Global Index

Prosecution:

The maintained index duplicates a result that can be derived from known filenames and paths. It adds writer-update obligations and can silently become incomplete. If future agents trust the index, absence from the index becomes a dangerous false absence.

Defense:

It is easy for a human to browse and matches Homegrown's explicit Markdown habit.

Collision:

The defense is not enough for v1. Browseability is not worth creating duplicate mutable state while search is cheap and reliable enough.

Verdict: KILL as v1 default.

Constructive output:

Revive only if search misses three or more files, artifact naming drifts, external consumers cannot run search, or users repeatedly need a cross-run browseable catalog.

### Candidate B - Ad Hoc Search

Prosecution:

Ad hoc search fails explicitness. It depends on memory and can vary by runner. It already showed a false-positive risk when loose regex matched `homegrown/navigation/references/navigation.md`.

Defense:

It is fast and uses existing tools.

Collision:

The defense keeps the mechanism, but not the ad hoc form.

Verdict: KILL.

Constructive output:

Turn search into a named protocol contract with path scope, patterns, and exclusions.

### Candidate C - PastNavigationMemoryFile Discovery Search Contract

Prosecution:

Search can miss files if future artifacts use unrecognized names. Search can overmatch if the patterns are too broad.

Defense:

The current artifact families have stable protocol-defined names. The search is cheap and derivable from the filesystem. Explicit path scoping controls false positives.

Collision:

The defense survives. The prosecution becomes a requirement to document patterns and add revival triggers.

Verdict: SURVIVE.

Conditions:

- Search active `devdocs/` by default.
- Exclude `docarchive/`, `archive/`, and `_archive/`.
- Do not search `homegrown/` as route memory unless explicitly named by source.
- Return candidates, exclusions, and needs-read items.
- Do not classify current route status.

### Candidate D - Discovery Search Plus Run-Local Candidate Report

Prosecution:

This can create artifact bloat if every search writes a report.

Defense:

It solves durable handoff without maintaining a global index. It records exactly what one scan did, including exclusions and confidence limits.

Collision:

The defense survives if the report is an output mode, not default behavior.

Verdict: SURVIVE as optional output mode.

Conditions:

- Save `past_navigation_memory_candidates.md` only when the scan is broad, disputed, expensive to reconstruct, or needed by another session.
- Otherwise record route-memory status and `Sources Read` in Route Memory Review or Navigation telemetry.

### Candidate E - Generated Global Index

Prosecution:

Requires tooling and adds a new artifact before the project has enough route-memory files to justify it.

Defense:

It gives browseability without manual update drift because it is regenerated from search.

Collision:

The defense is strong later, not now.

Verdict: DEFER.

Constructive output:

Revive after at least ten durable route-memory artifacts exist or when search cost becomes material.

### Candidate F - Front Matter Marker Standard

Prosecution:

Existing files do not have markers, and adding markers does not remove the need to scan.

Defense:

It could make future search more semantic and reduce filename dependence.

Collision:

Useful later, but not needed for the current answer.

Verdict: DEFER.

Constructive output:

Add only if path/name search starts producing too many false positives or if future templates are being revised anyway.

## Assembly Check

Surviving assembly:

```text
PastNavigationMemoryFile Discovery Search
  -> optional past_navigation_memory_candidates.md
  -> Route Memory Review Sources Read
  -> Navigation consumes review
```

Assembly verdict: SURVIVE.

This assembly answers the user's objection directly. It keeps discovery derivable from the filesystem while preserving Homegrown's explicitness through a protocol contract and optional run-local artifact.

## Coverage Map

Evaluated:

- maintained global index;
- ad hoc search;
- explicit discovery search contract;
- discovery search plus run-local report;
- generated global index;
- front-matter marker standard.

Unexplored but not blocking:

- exact shell helper implementation;
- exact final report path;
- generated global index tooling.

Coverage judgment:

Sufficient. A clean survivor exists and directly corrects the previous index default.

## Signal

TERMINATE with ranked survivors:

1. SURVIVE: `PastNavigationMemoryFile Discovery Search` as v1 discovery mechanism.
2. SURVIVE AS OUTPUT MODE: run-local `past_navigation_memory_candidates.md` only when durable handoff or audit matters.
3. DEFER: generated global index.
4. DEFER: front-matter marker standard.
5. KILL: maintained global index as v1 default.
6. KILL: ad hoc search.

## Convergence Telemetry

Dimension coverage: complete.

Adversarial strength: STRONG. The maintained-index defense and the search-miss prosecution were both tested.

Landscape stability: STABLE. The viable region is search-contract-first, not index-first.

Clean SURVIVE exists: yes.

Failure modes observed: none.

Overall: PROCEED.
