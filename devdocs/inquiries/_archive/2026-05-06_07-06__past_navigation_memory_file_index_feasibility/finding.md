---
status: active
refines:
  - devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/finding.md
  - devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/finding.md
impacts:
  - homegrown/navigation/SKILL.md
  - homegrown/protocols/navigation_context_intake.md
  - homegrown/navigation/warmup/navigator-prior-map-overlay.md
  - homegrown/protocols/multi_resolution_navigation.md
---
# Finding: PastNavigationMemoryFile Index Feasibility

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/finding.md`

**Prior path:** `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/finding.md`

**Revision trigger:** The user asked whether Homegrown should keep a record of Navigation-memory file creations so there is a discoverable `PastNavigationMemoryFile` index.

**What's preserved:** During early-stage discovery mode, durable Navigation should run full Route Memory Review by default when a `PastNavigationMemoryFile` exists.

**What's preserved:** `PastNavigationMemoryFile` entries are evidence, not current route truth.

**What's preserved:** Route Memory Review still owns current interpretation of past route memory for a specific Navigation question.

**What's changed:** Detection of `PastNavigationMemoryFile` entries should not rely only on ad hoc filesystem discovery. Homegrown should add a narrow discovery index.

**What's new:** The recommended artifact is a `PastNavigationMemoryFile Index`, stored at `devdocs/navigation_context/past_navigation_memory_file_index.md`.

**Migration:** Patch Navigation intake and route-memory-producing protocols so durable route-memory files are registered when created. Add active-tree scan/backfill as a fallback so the index never becomes the only way to find memory files.

## Question

Should Homegrown keep a record of all Navigation-related file creations as a `PastNavigationMemoryFile` index, and is that easier and feasible?

Goal: decide whether a `PastNavigationMemoryFile` index is worth adding, what problem it solves, what it must contain, when entries are added, who updates it, whether it is feasible without becoming stale manual bookkeeping, and whether it should replace or merely assist Route Memory Review discovery.

## Finding Summary

- Yes, Homegrown should add a `PastNavigationMemoryFile Index`, but it should not index every Navigation-related file.

- The index should register files that may contain past Navigation memory: earlier routes, route states, blockers, stale routes, superseded routes, or route decisions.

- The index is easier because it gives Navigation and Route Memory Review one known place to find candidate memory files.

- The index is feasible because the current active backfill is small, and Homegrown already has safe index patterns where the index is a discovery aid rather than the authority.

- The index must not store current route truth. It should not say that a route is current, stale, carried forward, retired, or ignored.

- Route Memory Review still reads the relevant files and decides current interpretation for the current Navigation question.

- The index should live at `devdocs/navigation_context/past_navigation_memory_file_index.md`.

- Entries should be added when durable route-memory artifacts are created, not later during review.

- The index needs scan/backfill fallback. If the index may be stale, Navigation should validate active docs rather than trust absence in the index.

- The broad idea "record all Navigation-related file creations" was rejected. It is too noisy and would turn route-memory review into cleanup of irrelevant files.

## Finding

Navigation is Homegrown's discipline for listing possible next routes from the current project or inquiry state. It needs enough current context to avoid treating old route maps as truth.

The recent Route Memory Review findings added one important rule: when a durable Navigation run may be affected by past Navigation memory, Route Memory Review should read old route-memory files and classify what the new Navigation map should do with them.

That creates a practical question before review starts:

```text
Where are the files that may contain past Navigation memory?
```

That is the problem the index should solve.

### 1. The index should exist, but it should be narrow

The right artifact is:

```text
PastNavigationMemoryFile Index
```

It should be stored at:

```text
devdocs/navigation_context/past_navigation_memory_file_index.md
```

This path fits the role. The index is not itself a Navigation map. It is Navigation context support: it helps future Navigation and Route Memory Review find candidate memory files.

The index should not be a catalog of every Navigation-related Markdown file.

That broader version sounds simpler at first, but it creates noise. Ordinary materialization traces, generic summaries, context-route files, and local notes may be Navigation-adjacent without carrying past route memory.

The scope should be:

```text
files that may contain earlier Navigation routes, route states, blockers, stale routes, superseded routes, or route decisions
```

That is the meaningful boundary.

### 2. The benefit is discovery, not interpretation

The index helps answer:

```text
Which files should Route Memory Review consider?
```

It must not answer:

```text
What should current Navigation believe about the routes inside those files?
```

That second question belongs to Route Memory Review.

The difference matters because a past Navigation map may say "create a warm-up README" while a later finding may have killed that route. The index can point to the old map. It cannot decide whether that old route is now stale. Route Memory Review must compare the old route against current context and active findings.

### 3. The v1 structure should be simple

Use this file shape:

```markdown
# PastNavigationMemoryFile Index

## Role
This file is a discovery registry for files that may contain past Navigation memory.
It helps Navigation and Route Memory Review find candidate files.
It does not classify current route truth.
Route Memory Review owns current interpretation for a specific Navigation question.
If this index may be stale, validate with an active-tree scan.

## Entry Criteria

Register files that may contain earlier Navigation routes, route states, blockers, stale routes, superseded routes, or route decisions.

## Index
| ID | Path | Kind | Created By | Created For | Memory Signal | Registered At | Review Refs | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Update Rules

## Validation / Backfill
```

Use these `Kind` values in v1:

- `navigation_map`
- `inquiry_navigation_map`
- `route_memory_review`
- `frontier_ledger`
- `sync_brief`
- `warmup_output`
- `child_navigation_map`
- `other`

The index should not include these fields in v1:

- current route status;
- carry forward;
- retire;
- ignore;
- latest truth;
- selected route.

Those fields would turn the index into a mutable route-state file. That would recreate the duplicate-authority problem the earlier Route Memory Review work was trying to avoid.

### 4. What gets registered

Register these files when they are durable and active:

- `devdocs/navigation/*.md` maps;
- `navigation.md` inside inquiry folders;
- `route_memory_review.md` files;
- multi-resolution `_frontier.md` ledgers;
- durable sync briefs or warm-up outputs that mention route-state changes;
- child Navigation maps created during multi-resolution Navigation.

Do not register these by default:

- archived files;
- no-op "no memory found" checks;
- generic summaries that do not carry route states;
- ordinary materialization traces with no route-memory content.

Archives can be searched later when explicitly needed, but normal route-memory discovery should stay on active docs.

### 5. When the index is created

Create the index once when Homegrown materializes this route-memory discovery convention.

The first version should be backfilled from the active tree. Right now, the active set appears small. The known active Navigation map is:

```text
devdocs/navigation/next_load_bearing_after_navigation_warmup.md
```

That small initial backfill is a reason to do this early. Waiting until many Route Memory Reviews, child maps, and frontier ledgers exist will make backfill harder.

The index should not be generated anew for every Navigation run.

### 6. When entries are added

Entries should be added when the route-memory file is created.

That means the creating operation owns registration:

- ordinary Navigation registers durable `navigation.md` or `devdocs/navigation/*.md` maps;
- Route Memory Review registers durable `route_memory_review.md`;
- multi-resolution Navigation registers `_frontier.md` and child `navigation.md` maps;
- navigator refresh or warm-up routines register durable outputs when they contain route-state changes.

This timing is important. If files are registered only during Route Memory Review, the index cannot help discover files before review.

If a file is created but index update fails, the file still exists and remains valid. The runner should report:

```text
artifact exists but is not indexed
```

That matches the existing Homegrown pattern for branch and outcome-review indexes: the index helps discovery, but the underlying record remains real.

### 7. How Route Memory Review uses it

Route Memory Review should use the index as a candidate list.

The review still has to read the relevant files. The index row is not enough.

Review output should say which files it read, usually in `Sources Read`. It may also cite index IDs if useful.

Navigation then consumes the Route Memory Review result, not the raw index entries, as current route-memory context.

The flow is:

```text
PastNavigationMemoryFile Index
  -> candidate discovery

Route Memory Review
  -> current interpretation

Navigation
  -> current route map
```

### 8. Why this is feasible

It is feasible because the index can start as one Markdown table.

It is feasible because the active backfill is currently small.

It is feasible because Homegrown already has a safe pattern for this. Branch `_branches.md` is a parent discovery index, but child `_state.md` is the child authority. Outcome reviews have a global index, but a review record still exists if the index update fails.

The same pattern should apply here:

```text
PastNavigationMemoryFile Index = discovery aid
actual memory files = historical evidence
Route Memory Review = current interpretation
new Navigation map = current route enumeration
```

The index is not feasible if treated as casual manual bookkeeping with no writer responsibility.

The index is not feasible if treated as complete truth without scan fallback.

The index is not feasible if it tries to carry route decisions directly.

### 9. Validation and backfill are required

The index needs a fallback because index absence can be dangerous.

If Navigation sees no index entry and blindly concludes that no `PastNavigationMemoryFile` exists, it may skip review and resurrect stale route memory later.

When confidence matters, validate by scanning active docs, excluding `docarchive/`, `archive/`, and `_archive/` by default.

The scan should check:

- `devdocs/navigation/**/*.md`;
- `**/navigation.md`;
- `**/_frontier.md`;
- `**/route_memory_review.md`;
- durable Navigation context files under `devdocs/navigation_context/` once that directory exists.

Missing rows can be added with `Notes: backfilled`.

## Next Actions

### MUST

- **What:** Create `devdocs/navigation_context/past_navigation_memory_file_index.md` with role, entry criteria, index table, update rules, and validation/backfill sections.
  **Who:** Navigation context materialization.
  **Gate:** Before relying on `past_navigation_memory_file: present` as a robust-mode trigger in normal Navigation runs.
  **Why:** Gives Navigation a stable place to discover candidate past route-memory files.

- **What:** Backfill the initial index from active docs, excluding archive folders by default.
  **Who:** First index materialization.
  **Gate:** Same patch as index creation.
  **Why:** Prevents the index from starting empty while active Navigation maps already exist.

- **What:** Patch `homegrown/protocols/navigation_context_intake.md` so route-memory discovery can consult the index and fall back to active-tree scan when the index is absent or stale.
  **Who:** Navigation context router.
  **Gate:** Same implementation phase as the route-memory robust-mode patch.
  **Why:** Makes the index operational instead of merely documentary.

- **What:** Patch route-memory-producing protocols so durable route-memory artifacts register themselves at creation time.
  **Who:** Navigation, Route Memory Review, multi-resolution Navigation, navigator refresh, and relevant warm-up routines.
  **Gate:** Before expecting the index to stay current after the initial backfill.
  **Why:** Prevents the index from becoming stale manual bookkeeping.

- **What:** Add anti-authority wording wherever the index is consumed.
  **Who:** Navigation context intake and Route Memory Review.
  **Gate:** Before the first real use of the index.
  **Why:** Prevents future runners from treating index entries as current route truth.

### COULD

- **What:** Add optional `Review Refs` updates when a Route Memory Review consumes an indexed file.
  **Who:** Route Memory Review.
  **Gate:** After at least two real review runs use the index without confusion.
  **Why:** Helps audit which memory files were already reviewed, but should stay optional to avoid mutable-state drift.

- **What:** Add local front matter to future route-memory files, such as `record_type: past_navigation_memory_file`.
  **Who:** Future Navigation and Route Memory Review templates.
  **Gate:** After the Markdown index exists and scan/backfill starts to matter.
  **Why:** Makes future validation easier without blocking v1.

### DEFERRED

- **What:** Build a script that regenerates or validates the index.
  **Gate:** Revive after three or more route-memory artifacts are missed by manual registration or after ten durable Navigation-memory artifacts exist.
  **Why (if revived):** Tooling may become useful once manual maintenance shows real drift.

- **What:** Replace the table with an append-only event log plus generated current index.
  **Gate:** Revive if the simple Markdown index accumulates repeated contradictory update notes or becomes hard to scan.
  **Why (if revived):** An event log improves auditability, but it is too heavy for v1.

- **What:** Create a broad index of all Navigation-related file creations.
  **Gate:** Revive only if a future active-artifact inventory has a separate goal beyond route-memory discovery.
  **Why (if revived):** A general Navigation artifact inventory may help onboarding, but it should not be confused with the `PastNavigationMemoryFile Index`.

## Reasoning

The user's easier-index instinct survived. A known registry is easier than repeatedly rediscovering route-memory files across `devdocs/navigation/`, inquiry folders, `_frontier.md` ledgers, review files, and future `devdocs/navigation_context/` artifacts.

The phrase "all Navigation-related file creations" was rejected. It is too broad. The route-memory trigger needs files that may contain past Navigation memory, not every Navigation-adjacent artifact.

The no-index scan-only option was killed as the default. It avoids stale-index risk, but it leaves the user and future runners with the same discovery burden that caused the question.

The scan-only option was preserved as fallback. Active-tree scanning is the right way to validate or repair the index.

The global `PastNavigationMemoryFile Index` survived after refinement. It is useful and readable if it stays non-authoritative.

The append-only creation event log was deferred. It has audit value, but it makes the simple question "what memory files exist?" harder to answer in v1.

The per-file metadata-only option was refined into support infrastructure. Local metadata helps future scans, but it does not provide one easy discovery point.

The Route Memory Review consumed-set option was killed as an index replacement. It records what a review already read, but it cannot help find candidate files before review.

The strongest survivor is the hybrid:

```text
PastNavigationMemoryFile Index
  + creation-time registration
  + active-tree scan/backfill
  + Route Memory Review as current interpretation authority
```

This resolves the main contradiction. Homegrown gets explicit durable memory discovery without turning the index into mutable route truth.

## Open Questions

### Monitoring

After the first three Route Memory Reviews that use the index, check whether the index made discovery easier or merely added update work.

After ten durable Navigation-memory artifacts exist, check whether manual registration still works or whether a validator script is justified.

### Blocked

The exact first backfill contents are blocked until the implementation patch creates `devdocs/navigation_context/` and performs a fresh active-tree scan.

### Refinement Triggers

Reopen the `Review Refs` field if future users mistake it for current review status.

Reopen the storage path only if `devdocs/navigation_context/` is rejected as the home for Navigation context artifacts.

Reopen the no-tooling decision if manual registration misses three or more route-memory files.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

so maybe we should keep record of all navigation related file creations so we will have PastNavigationMemoryFile index?

isnt this more easy?

but agian is this feasible?
```

</details>
