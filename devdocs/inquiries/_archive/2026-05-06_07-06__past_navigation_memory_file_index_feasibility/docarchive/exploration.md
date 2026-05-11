# Exploration: PastNavigationMemoryFile Index Feasibility

## Mode and Entry Point

Mode: mixed artifact + possibility exploration.

Entry point: signal-first. The user's signal is concrete: if Navigation needs to know whether any `PastNavigationMemoryFile` exists, maybe Homegrown should keep an index of Navigation-related file creations instead of rediscovering them each time.

The explored territory has two sides:

- existing active Navigation rules and file conventions;
- possible shapes for a `PastNavigationMemoryFile` index.

## Exploration Cycles

### Cycle 1 - Current Route-Memory Rules

Scan:

- `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/finding.md`
- `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/finding.md`
- `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary/finding.md`

Signals:

- Current early-stage policy depends on detecting whether a `PastNavigationMemoryFile` exists.
- `PastNavigationMemoryFile` is intentionally broader than old project maps.
- The list includes prior `devdocs/navigation/*.md` maps, inquiry-local `navigation.md`, prior `route_memory_review.md`, `_frontier.md` ledgers, sync briefs, warm-up outputs, and any route-continuation memory.
- This breadth makes filesystem discovery nontrivial.

Probe result:

The index idea directly addresses a real detection problem. If the trigger is "durable Navigation + PastNavigationMemoryFile exists," then the runner needs a reliable way to discover those files. Without an index, it must repeatedly scan several artifact families and remember naming conventions.

Confidence: confirmed.

### Cycle 2 - Current Navigation Intake And Warm-Up

Scan:

- `homegrown/navigation/SKILL.md`
- `homegrown/protocols/navigation_context_intake.md`
- `homegrown/navigation/warmup/navigator-prior-map-overlay.md`

Signals:

- Active Navigation docs still talk mostly in terms of freshness preflight, prior maps, warm-up, and overlay.
- The current source files do not yet encode the latest `PastNavigationMemoryFile` robust-mode policy.
- The prior-map overlay routine has discovery rules, but they are centered on prior `devdocs/navigation/*.md` maps plus `_frontier.md` and findings as needed.
- `devdocs/navigation_context/` is referenced as the future storage home for context artifacts, but the directory does not exist yet in the current tree.

Probe result:

The index would land into an already transitional area. It should not be treated as a substitute for patching Navigation intake. It would be a supporting discovery artifact that the intake can consult after the current route-memory policy is materialized.

Confidence: confirmed for current files; inferred for future patch sequence.

### Cycle 3 - Existing Ledger / Index Precedents

Scan:

- `homegrown/protocols/multi_resolution_navigation.md`
- `devdocs/inquiries/2026-05-04_14-43__navigation_frontier_ledger_sidecar_shape/finding.md`
- `devdocs/inquiries/2026-05-04_16-17__route_expansion_fields_necessity_for_auto_navigation/finding.md`
- `homegrown/protocols/branch_inquiry.md`
- `homegrown/protocols/outcome_review.md`

Signals:

- `_frontier.md` is a Navigation control ledger that records created child maps, pending candidates, statuses, child paths, and resume state.
- `_frontier.md` exists because child-map creation and pending expansion become hard to reconstruct later.
- Branch inquiry uses parent `_branches.md` as an index/discovery aid, not authoritative child state.
- Outcome review creates durable review records and a global index, but if index update fails the record still exists and remains valid.
- Prior findings repeatedly warn against duplicate authority and stale parent pointers.

Probe result:

Homegrown already has a pattern for this kind of thing:

```text
durable record is authoritative for its own content
index is a discovery aid
index may be stale
creator reports index write failure instead of deleting the created record
periodic refresh can repair index drift
```

This precedent makes a `PastNavigationMemoryFile` index feasible, but only if it follows the same non-authority rule.

Confidence: confirmed.

### Cycle 4 - Current Artifact Population

Scan:

- active `devdocs/navigation/`
- active `devdocs/navigation_context/`
- active `_frontier.md`, `route_memory_review.md`, and `prior_map_overlay.md` files outside archives

Signals:

- Current active `devdocs/navigation/` has one map: `devdocs/navigation/next_load_bearing_after_navigation_warmup.md`.
- No active `devdocs/navigation_context/` directory exists.
- No active `_frontier.md`, `route_memory_review.md`, or `prior_map_overlay.md` files were found.
- No inquiry-local `navigation.md` files were found in the active tree scan.

Probe result:

The immediate backfill cost is small right now. That increases feasibility. The risk is not existing data volume; the risk is future update discipline as Navigation starts producing more durable context artifacts.

Confidence: confirmed for current scan, bounded by archive exclusion.

### Cycle 5 - Possibility Scan For Index Shapes

Candidate shapes:

- Global markdown index under `devdocs/navigation_context/past_navigation_memory_index.md`.
- Global markdown index under `devdocs/navigation/past_navigation_memory_index.md`.
- Per-run ledger only, such as `_frontier.md`, with no global index.
- Generated-on-demand scan report with no durable index.
- Inline status only in each new `navigation.md`.
- Hybrid: durable index plus filesystem validation/backfill.

Signals:

- A global index is easiest for "does any PastNavigationMemoryFile exist?".
- A per-run ledger solves one run's expansion state but does not discover all past Navigation memory across the project.
- Inline status in each `navigation.md` records what one run consumed but does not help find candidate files before the next run.
- A generated-on-demand report avoids stale manual bookkeeping but still has discovery cost every run.
- A hybrid index with validation gives the best tradeoff: cheap lookup first, scan fallback when confidence matters.

Probe result:

The strongest candidate is a durable `PastNavigationMemoryFile` index that is maintained at file-creation time and treated as a discovery accelerator, with scan/backfill as validation. It should not store current route dispositions as authoritative truth.

Confidence: scanned, not yet critiqued.

## Jump Scan

Different direction checked: Homegrown's existing stance on indexes outside Navigation.

Signals:

- Branch parent `_branches.md` is explicitly "an index and discovery aid," not authoritative child state.
- Outcome review records are durable even if their global index update fails.
- Several diagnostic-index ideas were previously deferred until repeated evidence proved the need.
- The active Navigation map itself has a deferred route to create a broader active-artifact index, with the warning that manual indexes become stale quickly.

Result:

The jump scan did not kill the index idea. It clarified the constraint: the index must be justified by a real repeated discovery need and must not duplicate authority. Route-memory discovery is closer to branch/outcome-review indexing than to premature diagnostic indexing, because it is tied to a current trigger that already needs file detection.

## Convergence Check

Frontier stability: stable enough for sensemaking. New scans are repeating the same boundary: discovery aid good, authority bad.

Declining discovery rate: yes. Later scans found precedents and constraints, not new major artifact categories.

Bounded gaps: mostly bounded.

Remaining gaps:

- exact index storage path;
- exact minimum row schema;
- whether the index should be created immediately or only when Navigation route-memory policy is patched;
- whether update ownership belongs to Navigation, Route Memory Review, multi-resolution Navigation, refresh/warm-up, or a shared helper protocol.

## Territory Overview

The question is not just "can we keep an index?"

It breaks into three territories:

1. Detection: how Navigation discovers that `PastNavigationMemoryFile` entries exist.
2. Review: how Route Memory Review classifies those files for the current Navigation question.
3. Authority: which artifact should be trusted for what.

The index belongs only to detection.

## Inventory

Existing route-memory-producing or route-memory-carrying artifact classes:

- `devdocs/navigation/*.md` Navigation maps.
- Inquiry-local `navigation.md` maps.
- `devdocs/navigation_context/**/route_memory_review.md` review artifacts.
- Transitional `prior_map_overlay.md` artifacts if any exist.
- Multi-resolution `_frontier.md` ledgers.
- Sync briefs or warm-up outputs that mention route-state changes.
- Navigation maps nested under multi-resolution child folders.

Existing index/ledger precedents:

- `_frontier.md`: authoritative only for one multi-resolution run's expansion state.
- `_branches.md`: parent discovery index, not child-state authority.
- `devdocs/alignment_control/outcome_reviews.md`: global outcome-review index; records still stand if index update fails.

Currently found active files:

- `devdocs/navigation/next_load_bearing_after_navigation_warmup.md`

Currently absent in active tree:

- `devdocs/navigation_context/`
- active `_frontier.md`
- active `route_memory_review.md`
- active `prior_map_overlay.md`
- active inquiry-local `navigation.md`

## Signal Log

- Strong signal: the early-stage robust trigger requires detecting `PastNavigationMemoryFile` existence.
- Strong signal: `PastNavigationMemoryFile` is broad enough that repeated raw scans will be clumsy.
- Strong signal: Homegrown already accepts indexes when they are discovery aids rather than authority.
- Strong signal: stale-index risk is real and already recognized in branch/outcome-review protocols.
- Medium signal: immediate backfill is cheap because active artifact count is low.
- Medium signal: `devdocs/navigation_context/` is the natural future home for Navigation context artifacts, but it does not exist yet.
- Weak signal: a global active-artifact index route exists, but it is deferred and broader than this question.

## Confidence Map

Confirmed:

- Current policy says early-stage durable Navigation should run full review by default when a `PastNavigationMemoryFile` exists.
- Existing source files have not yet fully materialized that policy.
- Active tree currently has very few Navigation memory files.
- Homegrown has precedent for non-authoritative indexes.

Scanned:

- Possible index shapes and update points.
- Storage location tradeoffs.

Inferred:

- A `PastNavigationMemoryFile` index would reduce discovery cost and naming ambiguity.
- The index is feasible if updated at artifact-creation time and validated by scan/backfill.

Unknown:

- How often future Navigation runs will create route-memory artifacts.
- Whether manual update failures will be common enough to require tooling immediately.
- Whether `devdocs/navigation_context/` should be created by this patch or by the first Route Memory Review/context artifact.

Confirmed absent:

- No active `devdocs/navigation_context/` directory.
- No active route-memory review files found outside archives.

## Frontier State

Closed enough:

- The index is a plausible and locally precedented solution.
- It must be discovery/supporting infrastructure, not review authority.

Open:

- index name and path;
- minimum schema;
- update ownership;
- validation/backfill strategy;
- whether to implement now or include as next action after route-memory policy patch.

## Gaps and Recommendations

Gaps to pass to Sensemaking:

- Does the index solve the user's "isn't this easier?" concern without introducing a worse stale-index burden?
- What exactly is the index responsible for?
- What should never go in the index?
- Which operations must append entries?

Preliminary recommendation:

Create the concept of a `PastNavigationMemoryFile` index, but keep it narrow:

```text
PastNavigationMemoryFile index = discovery registry of files that may contain past Navigation memory.
Route Memory Review = current interpretation of those files for one Navigation question.
```

The index should be maintained by the same operation that creates each durable Navigation-memory artifact, and it should be validated or backfilled from the filesystem when confidence matters.
