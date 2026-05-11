# Exploration: PastNavigationMemoryFile Index Versus Search

## Mode and Entry Point

Mode: artifact exploration with a design possibility question.

Entry point: signal-first. The user's signal is that known filenames and regex-searchable path patterns may already solve `PastNavigationMemoryFile` discovery, making a maintained index unnecessary.

## Exploration Cycles

### Cycle 1 - Re-read The Prior Index Finding

Scan:

- `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/finding.md`

Signals:

- The prior finding proposed a Markdown `PastNavigationMemoryFile Index`.
- The prior finding already required active-tree scan/backfill as fallback.
- Its stated reason for the index was easier discovery.
- It explicitly rejected indexing every Navigation-related file.

Probe result:

The prior finding's own fallback weakens its conclusion. If active-tree search is already mandatory for safety, the maintained index may not be the primary mechanism. The real missing object may be a documented search contract rather than a hand-maintained index.

Confidence: confirmed.

### Cycle 2 - Test Filename Search In The Active Tree

Scan:

Ran an active-doc filename search excluding `docarchive/`, `archive/`, and `_archive/`.

Search pattern:

```text
devdocs/navigation/**/*.md
**/navigation.md
**/_frontier.md
**/route_memory_review.md
**/prior_map_overlay.md
**/sync_brief.md
```

Result:

```text
devdocs/navigation/next_load_bearing_after_navigation_warmup.md
```

Supporting scan:

- `find` for exact file names found no active `navigation.md`, `_frontier.md`, `route_memory_review.md`, `prior_map_overlay.md`, or `sync_brief.md`.
- `find devdocs/navigation -type f -name '*.md'` found the same active Navigation map.
- Active docs outside archives currently contain roughly 184 Markdown files.

Probe result:

The user's claim is materially correct for the current tree. Known path and filename search can find the current active PastNavigationMemoryFile candidate without a maintained index.

Confidence: confirmed for current active tree.

### Cycle 3 - Test Search Failure Modes

Scan:

A looser regex over `devdocs homegrown` matched:

```text
homegrown/navigation/references/navigation.md
```

Signal:

That file is a Navigation reference document, not a route-memory map.

Probe result:

Search works, but only if it is a disciplined search contract with path boundaries. A vague regex such as "anything named navigation.md" across the whole codebase creates false positives.

Confidence: confirmed.

### Cycle 4 - Current Protocol Searchability

Scan:

- `homegrown/protocols/navigation_context_intake.md`
- `homegrown/navigation/warmup/navigator-prior-map-overlay.md`
- `homegrown/navigation/warmup/navigator-refresh.md`
- `homegrown/protocols/multi_resolution_navigation.md`

Signals:

- `navigator-prior-map-overlay.md` already names prior `devdocs/navigation/*.md` maps and `_frontier.md` files in read rules.
- `navigator-refresh.md` names `devdocs/navigation/*.md`, `_frontier.md`, and `sync_brief.md` style outputs.
- `multi_resolution_navigation.md` gives stable names for `_frontier.md`, `navigation.md`, and child `navigation.md`.
- `navigation_context_intake.md` currently has `prior_navigation_maps: none | present | unknown`, but not the newer `PastNavigationMemoryFile` language.

Probe result:

Most file families are already deterministically searchable because their output names are protocol-defined. The weak spot is not physical discovery. The weak spot is classification: which found files count as route-memory candidates for this Navigation question?

Confidence: confirmed.

### Cycle 5 - What Search Cannot Know

Search can know:

- path;
- filename;
- broad artifact family from path/name;
- rough recency from file metadata if needed;
- whether a file contains obvious Navigation route-card fields after content grep.

Search cannot know without reading:

- whether this candidate is relevant to the current Navigation question;
- whether routes inside it are stale, superseded, blocked, or still useful;
- whether a sync brief or warm-up output actually contains route-state changes unless filename conventions or content markers are strong;
- whether a candidate was already consumed by a current Route Memory Review unless the review artifact is read.

Probe result:

Search can replace maintained index for candidate discovery. Search cannot replace Route Memory Review.

Confidence: high.

## Jump Scan

Different direction checked: cases where Homegrown previously avoided duplicate state.

Signals:

- Expansion state belongs in `_frontier.md`, not duplicated in parent route cards.
- Old Navigation maps are historical snapshots and should not be edited into current route truth.
- Prior findings repeatedly reject duplicate mutable authority.

Result:

A maintained global index duplicates the filesystem for path discovery. If it stores only paths, search can regenerate it. If it stores more than paths, it risks becoming secondary authority unless that metadata is carefully limited.

## Convergence Check

Frontier stability: stable. Searches and protocol reads point to the same boundary: search can find files; review must interpret them.

Declining discovery rate: yes. Later scans added failure modes, not new basic categories.

Bounded gaps: mostly bounded.

Remaining gaps:

- exact search command or pattern set;
- whether the search result should be saved as a per-run artifact;
- whether any metadata is valuable enough to justify a maintained global index later.

## Territory Overview

There are three possible discovery mechanisms:

1. Maintained global index.
2. Deterministic active-tree search.
3. Per-run generated candidate report.

The current evidence favors deterministic active-tree search as the baseline.

The maintained global index is only justified if it stores non-derivable metadata that is valuable enough to carry update burden.

The per-run generated candidate report is useful when the search result needs durable handoff.

## Inventory

Searchable candidate families:

- `devdocs/navigation/**/*.md`
- inquiry-local `navigation.md`
- multi-resolution `_frontier.md`
- `route_memory_review.md`
- transitional `prior_map_overlay.md`
- `sync_brief.md`
- child Navigation maps under future multi-resolution run folders

False-positive families to exclude:

- `homegrown/navigation/references/navigation.md`
- `homegrown/navigation/SKILL.md`
- Navigation protocol specs under `homegrown/`
- archived `docarchive/`, `archive/`, and `_archive/` files by default

Current active candidate found:

- `devdocs/navigation/next_load_bearing_after_navigation_warmup.md`

## Signal Log

- Strong signal: known filename/path search finds the active candidate today.
- Strong signal: a loose regex can overmatch specs, so the search must be scoped.
- Strong signal: prior index finding already needed scan/backfill, so scan is foundational.
- Strong signal: most artifact names are protocol-defined.
- Medium signal: a maintained index could help humans browse, but it adds stale-state risk.
- Medium signal: a per-run scan report can preserve explicitness without maintaining a global mutable list.

## Confidence Map

Confirmed:

- Active-tree search can find the current active Navigation map.
- Loose whole-codebase filename matching creates false positives.
- Existing protocols define stable names for the main candidate families.

Scanned:

- Searchable filename families.
- Current protocols that produce or read Navigation memory files.

Inferred:

- A maintained global index is not necessary for v1 candidate discovery if the search contract is documented.
- A generated candidate report may be better than a maintained index when durable handoff matters.

Unknown:

- Whether future route-memory artifacts will get names outside the current pattern set.
- Whether future human users will prefer a browseable index despite search being mechanically sufficient.

Confirmed absent:

- No active `route_memory_review.md`, `_frontier.md`, `prior_map_overlay.md`, `sync_brief.md`, or inquiry-local `navigation.md` was found in active docs.

## Frontier State

Closed enough:

- The previous "must create maintained index" recommendation is now under strong challenge.
- Search is sufficient for current candidate discovery if codified.

Open:

- whether to replace the maintained index with a documented `PastNavigationMemoryFile Discovery Search`;
- whether to save search results into a per-run context artifact;
- when a maintained index becomes justified.

## Gaps and Recommendations

Pass to Sensemaking:

- The question should be reframed from "index vs no explicitness" to "maintained index vs explicit search contract."
- Search can be explicit if the regex and exclusions are documented in the protocol.
- A maintained index should require a higher burden of proof because it duplicates derivable filesystem state.

Preliminary recommendation:

Do not create a maintained global `PastNavigationMemoryFile Index` yet.

Instead, define `PastNavigationMemoryFile Discovery Search` as the normal intake mechanism. Save a per-run `past_navigation_memory_candidates.md` only when durable handoff or audit is needed.
