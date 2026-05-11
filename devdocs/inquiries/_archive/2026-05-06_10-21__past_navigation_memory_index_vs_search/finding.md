---
status: active
corrects:
  - devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/finding.md
refines:
  - devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/finding.md
impacts:
  - homegrown/navigation/SKILL.md
  - homegrown/protocols/navigation_context_intake.md
  - homegrown/navigation/warmup/navigator-prior-map-overlay.md
  - homegrown/navigation/warmup/navigator-refresh.md
  - homegrown/protocols/multi_resolution_navigation.md
---
# Finding: PastNavigationMemoryFile Index Versus Search

## Changes from Prior

**Prior path:** devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/finding.md

**Revision trigger:** User correction. The user pointed out that Homegrown already knows the relevant file names and path shapes, so the repository can search for PastNavigationMemoryFile candidates instead of maintaining a separate index.

**What's preserved:** Navigation still needs a robust way to find prior Navigation memory before a new durable Navigation map depends on old route state. Route Memory Review still needs explicit sources, and Navigation still needs to avoid stale route resurrection.

**What's changed:** A maintained global `PastNavigationMemoryFile Index` is no longer the recommended v1 mechanism. The corrected v1 mechanism is a named `PastNavigationMemoryFile Discovery Search`.

**What's new:** A run-local `past_navigation_memory_candidates.md` is allowed as an output mode when the search result itself needs durable handoff or audit. That report is not a global index and is not current route truth.

**Migration:** Do not create `devdocs/navigation_context/past_navigation_memory_file_index.md` now. Patch Navigation context intake and Route Memory Review rules to use the discovery search contract instead.

## Question

If Homegrown can find PastNavigationMemoryFile candidates by searching known filenames and patterns, does it still need a maintained PastNavigationMemoryFile index?

The goal is to reassess the previous index recommendation, decide whether search makes the index unnecessary or only changes its role, identify what search can and cannot reliably find, define the cheaper robust alternative if one exists, and state when an index would become justified.

## Finding Summary

- The user is right: Homegrown does not need a maintained global `PastNavigationMemoryFile Index` as the v1 discovery mechanism.

- The correct v1 mechanism is `PastNavigationMemoryFile Discovery Search`, a protocol-owned search contract with explicit roots, filename patterns, exclusions, and output modes.

- Search is not a replacement for Route Memory Review. Search finds candidate files; Route Memory Review reads them and decides whether their route memory is current, stale, blocked, superseded, or irrelevant.

- A saved `past_navigation_memory_candidates.md` can be useful, but only as a run-local report for one search. It should be created when the candidate scan must survive across sessions, when the scan is broad or disputed, or when exclusions need audit.

- A maintained or generated global index should be deferred until there is evidence that search is failing, search cost is material, names have drifted, or users need a browseable cross-run catalog.

## Finding

Navigation in Homegrown is the process that maps where work should go next. A Navigation map is not just a list of files. It can carry route memory: old blockers, deferred paths, routes that were killed, and unfinished directions.

That route memory is useful, but it is also dangerous when it is stale. An old Navigation map can accidentally resurrect a route that a later finding rejected. It can also point future work toward old context while newer findings changed the situation. This is why Route Memory Review exists: before Navigation depends on old route memory, the system needs to decide what should be carried forward, retired, kept blocked, checked again, or ignored.

The disputed object was the `PastNavigationMemoryFile Index`. In the prior finding, that index was proposed as a maintained Markdown registry of old Navigation-memory files. The goal was explicitness: future Navigation runs could look at the index and know which old files might matter.

The user's objection exposes the problem with that design. If the relevant files already have known names and paths, a maintained index mostly duplicates the filesystem. Homegrown can search for `devdocs/navigation/**/*.md`, `navigation.md`, `_frontier.md`, `route_memory_review.md`, `prior_map_overlay.md`, and `sync_brief.md`. At current project size, this search is cheap and direct.

A maintained global index creates a second mutable truth source. If a writer forgets to update it, future readers can wrongly treat absence from the index as proof that no old Navigation memory exists. That is worse than a search contract, because silent index drift is hard to see at the point where Navigation consumes memory.

The better v1 answer is not casual grep. The better answer is a named protocol operation:

```text
PastNavigationMemoryFile Discovery Search
```

This search should be explicit enough that two different runners can do the same thing and explain what they did.

Default scope:

```text
Search active devdocs.
Exclude docarchive/, archive/, and _archive/ by default.
Do not search homegrown/ for route-memory candidates unless the user or a source explicitly names a Homegrown artifact as route memory.
```

Default candidate patterns:

```text
devdocs/navigation/**/*.md
**/navigation.md
**/_frontier.md
**/route_memory_review.md
**/prior_map_overlay.md
**/sync_brief.md
```

Default candidate statuses:

```text
candidate
excluded
needs_read
review_consumed
```

The meanings are simple. `candidate` means the file probably contains past Navigation memory. `excluded` means it matched mechanically but is not route memory, with a reason recorded. `needs_read` means the file might matter but has not been interpreted yet. `review_consumed` means a current applicable Route Memory Review has already covered it.

The output mode depends on the run.

For a small same-session Navigation run, the runner can record an inline status and continue.

When Route Memory Review runs, it should record the search basis and `Sources Read` directly in `route_memory_review.md`.

When the discovery step itself needs durable handoff or audit, the runner may save a run-local report named `past_navigation_memory_candidates.md`. That report should describe the target Navigation question, search scope, search patterns, candidates, excluded matches, handoff to Route Memory Review, and confidence limits.

This preserves Homegrown's explicitness without creating a manually maintained global registry. The explicit artifact is the protocol rule. The durable artifact exists only when one search result needs to survive.

The maintained index is not killed forever. It is killed as the default v1 mechanism. A global index can become justified later if there is evidence that a search contract is no longer enough.

Revival triggers should be concrete:

- three or more route-memory files are missed by the documented search;
- route-memory artifacts start using nonstandard names that cannot be normalized;
- a future runner cannot execute repository search and needs a precomputed list;
- users repeatedly need a browseable cross-run catalog, not just per-run reports;
- search cost becomes material after at least ten durable route-memory artifacts exist.

Until one of those triggers happens, a maintained global index is extra bookkeeping. It looks explicit, but it can become stale in exactly the place where Navigation needs freshness.

## Next Actions

### MUST

- **What:** Replace the previous maintained-index recommendation with `PastNavigationMemoryFile Discovery Search`.
  **Who:** `homegrown/protocols/navigation_context_intake.md`.
  **Gate:** Before the next protocol patch that changes Navigation memory intake.
  **Why:** Makes route-memory discovery explicit without creating duplicate mutable state.

- **What:** Update Route Memory Review rules to consume discovery-search candidates and record search basis plus `Sources Read`.
  **Who:** `homegrown/navigation/warmup/navigator-prior-map-overlay.md` or its successor Route Memory Review routine.
  **Gate:** Before Route Memory Review is treated as a standard Navigation preflight.
  **Why:** Keeps file discovery separate from current route interpretation.

- **What:** Add Navigation telemetry for route-memory discovery status, search patterns used, sources read, and whether a candidate report was saved.
  **Who:** `homegrown/navigation/SKILL.md`.
  **Gate:** Before relying on Navigation artifacts as durable evidence for this mechanism.
  **Why:** Lets future reviews see whether old Navigation memory was searched, ignored, consumed, or deferred.

- **What:** Do not create a maintained global `devdocs/navigation_context/past_navigation_memory_file_index.md` yet.
  **Who:** Navigation protocol maintainers.
  **Gate:** Until one of the index revival triggers in this finding is observed.
  **Why:** Avoids stale duplicate state while search is cheap and mechanically sufficient.

### COULD

- **What:** Add an optional run-local `past_navigation_memory_candidates.md` template.
  **Who:** Navigation context tooling or protocol docs.
  **Gate:** When a broad, disputed, or cross-session discovery scan occurs.
  **Why:** Preserves durable handoff for one search without turning that search into a global registry.

### DEFERRED

- **What:** Add a generated global PastNavigationMemoryFile catalog.
  **Gate:** Revive after at least ten durable route-memory artifacts exist, when search cost becomes material, or when users repeatedly need a browseable cross-run catalog.
  **Why (if revived):** Provides browseability without depending on humans to update a manual index.

- **What:** Add front matter markers such as `record_type: past_navigation_memory_file`.
  **Gate:** Revive when path/name search produces too many false positives or when route-memory templates are already being revised.
  **Why (if revived):** Makes future search more semantic and less dependent on filenames.

## Reasoning

The maintained global index was considered first because it matches Homegrown's preference for explicit Markdown artifacts. It would be easy to browse, and it would give a named place to look for prior Navigation-memory files.

That design fails as the v1 default because it duplicates a result that can be derived from the active filesystem. If it stores only paths and broad kinds, it is mostly a cached search result. If it stores more than that, it risks becoming a second authority about route meaning. Either way, every Navigation-memory writer must remember to update it.

Ad hoc search was also rejected. It is cheap, but it depends on the runner remembering what to search. It can also overmatch. Exploration already found that a loose whole-codebase search can return `homegrown/navigation/references/navigation.md`, which is a Navigation reference document, not a past route-memory artifact.

The surviving mechanism is an explicit discovery search contract. It keeps the good part of search, which is deriving candidates from the real active tree. It removes the weak part of search, which is undocumented runner-specific behavior.

The optional run-local candidate report also survives. It answers the explicitness concern when a search result needs to survive beyond the current chat or be audited later. The key boundary is that this report records one search run. It is not a global always-current index.

The generated global index is deferred. It could be valuable later because it can provide browseability without manual update drift. It is premature now because the current active candidate set is tiny and the tooling would add process before there is evidence of need.

The front matter marker standard is deferred. It could make future discovery more semantic, but existing route-memory files do not use it, and markers do not remove the need to scan. Add it only when templates are already changing or false positives become a real problem.

The central contradiction was explicitness versus duplicate state. The resolution is that explicitness does not require a maintained registry. Explicitness requires an inspectable, repeatable mechanism. `PastNavigationMemoryFile Discovery Search` gives that mechanism, and `past_navigation_memory_candidates.md` gives a durable artifact only when the run actually needs one.

## Open Questions

### Monitoring

After the next five durable Navigation or Route Memory Review runs, check whether documented search missed any route-memory artifacts or produced repeated false positives. If misses happen, update the search patterns before considering a global index.

### Refinement Triggers

Re-open the maintained-index decision if three or more route-memory files are missed by documented search, if artifact names drift beyond the current pattern set, if external consumers cannot run repository search, or if users repeatedly ask for a browseable cross-run catalog.

Re-open the candidate-report default if Route Memory Review repeatedly needs to reconstruct what an earlier search found and excluded.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

but why do we need index if we can simply search the codebase and find all files... we know the file names afterall, at least regex searchable way we know.
```

</details>
