# Sensemaking: PastNavigationMemoryFile Index Feasibility

## User Input

Should Homegrown keep a record of all Navigation-related file creations so there is a `PastNavigationMemoryFile` index? Is this easier, and is it feasible?

## SV1 - Baseline Understanding

The user is asking whether the current route-memory discovery problem can be simplified by keeping a durable index of Navigation-related files. The initial intuition is right: if Navigation must ask whether `PastNavigationMemoryFile` entries exist, then one index sounds easier than repeated broad filesystem scans.

Initial risk: "all Navigation-related file creations" may be too broad and may create manual bookkeeping that becomes stale.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Navigation must not treat past route memory as current truth.
- Old Navigation maps remain historical snapshots.
- Route Memory Review is the operation that classifies past route memory for a current Navigation question.
- During early-stage robust mode, durable Navigation should run full Route Memory Review by default when a `PastNavigationMemoryFile` exists.
- A `PastNavigationMemoryFile` can appear in several places, not only `devdocs/navigation/*.md`.
- Homegrown values explicit durable Markdown artifacts.
- Indexes in Homegrown can be stale and should not invalidate the underlying record.
- Avoid `docarchive/` and archive folders for normal active discovery unless explicitly needed.

### Key Insights

- The index solves a detection problem, not an interpretation problem.
- If the index stores route dispositions, it becomes a second Route Memory Review and creates authority drift.
- If the index only stores file identity and lightweight metadata, it is much safer.
- The current active artifact count is low, so initial backfill is cheap.
- The real feasibility issue is future update ownership, not current data size.

### Structural Points

- Navigation needs current context before mapping routes.
- Route-memory intake needs to know whether past Navigation memory exists.
- Route Memory Review reads relevant `PastNavigationMemoryFile` entries and current authority, then writes current classification.
- A `PastNavigationMemoryFile` index would sit before review as a candidate-discovery registry.
- Creation-time update is safer than later reconstruction, but scan validation is still needed.

### Foundational Principles

- Durable files are useful when they preserve handoff or reduce future reconstruction cost.
- Historical artifacts should not be rewritten into current-state truth.
- Indexes are pointers/discovery aids unless explicitly designed as authoritative ledgers.
- Duplicate state is dangerous when two artifacts can disagree.
- Feasibility improves when the artifact writer owns the index entry at the same moment it creates the artifact.

### Meaning-Nodes

- `PastNavigationMemoryFile`
- index / registry
- discovery vs authority
- file creation record
- Route Memory Review
- early-stage robustness
- stale-index risk
- update ownership

## SV2 - Anchor-Informed Understanding

The question is not whether Homegrown should record every Markdown file created by Navigation. The better interpretation is: should Homegrown keep a narrow registry of files that may contain past Navigation memory, so future Navigation can cheaply discover review candidates?

That makes the idea cleaner. The index should answer:

```text
Where are the files that may contain past Navigation memory?
```

It should not answer:

```text
What should current Navigation believe about those routes?
```

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

New anchors:

- Discovery via repeated scans requires knowing all relevant path and filename patterns.
- A central index makes candidate lookup deterministic.
- A central index can go stale if writers forget to append entries.
- Staleness can be bounded by making the index refreshable from filesystem scans.

Technical reading:

The index is technically feasible if it is append-oriented, stores paths plus metadata, and has a scan/backfill fallback. It is not feasible as the sole truth mechanism unless a runner enforces every write.

### Human / User Perspective

New anchors:

- The user is frustrated by vague terms like "source" and wants named, explicit artifacts.
- The user's preference is not minimal files; it is explicitness that makes the system understandable and robust.
- The index gives a human-readable place to ask "what old Navigation memory exists?"

Human reading:

The index likely improves user trust because it makes the route-memory universe visible. But it must be named plainly and must explain its role at the top.

### Strategic / Long-Term Perspective

New anchors:

- Early-stage Homegrown prioritizes robustness and breakthrough preservation over token/time efficiency.
- Later optimized mode may need telemetry to decide when review-by-default can relax.
- The index can become the substrate for future automation, but should start as Markdown.

Strategic reading:

The index is aligned with early-stage robustness. It can also help future self-optimization by showing how many route-memory artifacts exist and how often they are reviewed.

### Risk / Failure Perspective

New anchors:

- The worst failure is duplicate authority: index says a route/file is current while review says it is stale.
- The second worst failure is false absence: index lacks a file, so Navigation skips review.
- The third failure is over-inclusion: index includes every Navigation-adjacent file and review becomes noisy.
- The fourth failure is manual update burden causing resentment and drift.

Risk reading:

The index must include explicit limits:

```text
This index lists candidate files.
It does not classify current route status.
If uncertain, validate by filesystem scan.
```

### Resource / Feasibility Perspective

New anchors:

- Initial backfill is small right now.
- Ongoing cost is one row per durable route-memory artifact.
- The index is cheaper than full review, but not free.
- It becomes too expensive if it tries to track every Navigation-related file creation regardless of route-memory content.

Resource reading:

Feasible if scoped to `PastNavigationMemoryFile` creations, not "all Navigation-related file creations."

### Definitional / Consistency Perspective

New anchors:

- `PastNavigationMemoryFile` is already defined as a file that records earlier Navigation routes, route states, blockers, stale routes, superseded routes, or route decisions.
- "All Navigation-related file creations" is broader than `PastNavigationMemoryFile`.
- Existing Homegrown index patterns say indexes are discovery aids, not authority.

Definitional reading:

The name should stay close to the thing being indexed: `PastNavigationMemoryFile Index`. It should not be called a route-state index, latest-state index, or Navigation truth index.

## SV3 - Multi-Perspective Understanding

The main shift is from "index all Navigation-related creations" to "index files that can function as PastNavigationMemoryFile entries." That is the cleaner boundary.

The user's ease intuition survives, but only if the index is a candidate registry. It makes finding old Navigation memory easier. It does not make route-memory review unnecessary.

## Phase 3 - Ambiguity Collapse

### Ambiguity: What exactly is being indexed?

**Strongest counter-interpretation:**
Index every Navigation-related file creation, because a broad index is simpler than deciding at creation time whether a file contains past route memory.

**Why the counter-interpretation fails (structural grounds):**
A broad file-creation index would include ordinary maps, traces, context routes, sync briefs, child maps, and possibly adjacent materialization files. Most of those will not always contain past Navigation memory. Route Memory Review would then receive noisy candidates, making every run slower and making the trigger less meaningful. The mechanism that needs the index is specifically `PastNavigationMemoryFile` detection, not general Navigation inventory.

**Confidence:** HIGH.

**Resolution:**
Index `PastNavigationMemoryFile` candidates, not all Navigation-related files.

**What is now fixed?**
The index scope is "files that may contain past Navigation memory."

**What is no longer allowed?**
Using the index as a general inventory of every Navigation-adjacent Markdown file.

**What now depends on this choice?**
Schema, update rules, and skip/review decisions.

**What changed in the conceptual model?**
The index becomes a route-memory discovery aid, not a Navigation file catalog.

### Ambiguity: Does the index replace Route Memory Review?

**Strongest counter-interpretation:**
If the index is good enough, Navigation can consult the index and avoid full Route Memory Review unless entries look relevant.

**Why the counter-interpretation fails (structural grounds):**
The index can know file identity, type, creation context, and rough scope. It cannot know the current disposition of the routes without comparing historical content against current context. That comparison is exactly Route Memory Review. If the index stores current disposition, it becomes mutable review state and duplicates `route_memory_review.md`.

**Confidence:** HIGH.

**Resolution:**
The index assists discovery only. Route Memory Review still owns current interpretation.

**What is now fixed?**
The index feeds review; it does not replace review.

**What is no longer allowed?**
Treating an index entry as evidence that a route should be carried forward, retired, or ignored.

**What now depends on this choice?**
Anti-authority wording and schema fields.

**What changed in the conceptual model?**
The pipeline becomes index -> candidate set -> review -> Navigation, not index -> Navigation truth.

### Ambiguity: Is the index feasible or will it become stale manual bookkeeping?

**Strongest counter-interpretation:**
Manual indexes become stale; therefore adding this index only creates another maintenance burden.

**Why the counter-interpretation fails (structural grounds):**
Homegrown already uses indexes safely when the underlying records remain valid and the index is a discovery aid. Branch `_branches.md` may be stale, but child `_state.md` remains authority. Outcome-review index failure does not delete the review record. The same pattern can work here if the index is updated at artifact creation, records index-write failure, and supports scan/backfill repair.

**Confidence:** HIGH for feasibility with safeguards; LOW for feasibility as purely ad hoc manual bookkeeping.

**Resolution:**
Feasible only with creation-time ownership plus validation/backfill. Not feasible as a casual manually maintained note.

**What is now fixed?**
The index needs update rules and validation rules.

**What is no longer allowed?**
Relying on the index as complete without fallback when confidence matters.

**What now depends on this choice?**
Implementation timing and next actions.

**What changed in the conceptual model?**
Feasibility depends on process contract, not file format alone.

### Ambiguity: Where should the index live?

**Strongest counter-interpretation:**
Put it in `devdocs/navigation/` because it indexes Navigation maps.

**Why the counter-interpretation fails (structural grounds):**
The indexed files are not only Navigation maps. They may include `route_memory_review.md`, sync briefs, `_frontier.md`, warm-up outputs, and inquiry-local maps. The index is context preparation for future Navigation, not a Navigation map itself. `devdocs/navigation_context/` is already the referenced home for route-memory review and context-route artifacts.

**Confidence:** HIGH if `devdocs/navigation_context/` becomes the Navigation context artifact home; LOW until that directory is actually materialized.

**Resolution:**
Prefer `devdocs/navigation_context/past_navigation_memory_file_index.md` as the conceptual home, with directory creation controlled by the implementation patch.

**What is now fixed?**
The index belongs with Navigation context, not inside ordinary Navigation maps.

**What is no longer allowed?**
Treating `devdocs/navigation/` as the only memory-file namespace.

**What now depends on this choice?**
File path convention and protocol patches.

**What changed in the conceptual model?**
The index is a context-preparation artifact.

### Ambiguity: When should entries be added?

**Strongest counter-interpretation:**
Add entries during Route Memory Review, because that is when files are known to matter.

**Why the counter-interpretation fails (structural grounds):**
If entries are added only during review, the index cannot help discover files before review. The discovery aid must be populated when route-memory-carrying files are created, then review can classify which indexed entries matter for the current question.

**Confidence:** HIGH.

**Resolution:**
Append at durable artifact creation time. Route Memory Review can update review metadata or last-reviewed fields, but initial registration happens when the file is created.

**What is now fixed?**
Creation-time registration is required.

**What is no longer allowed?**
Making Route Memory Review solely responsible for discovering and first-registering all prior memory.

**What now depends on this choice?**
Writer ownership list.

**What changed in the conceptual model?**
The index becomes part of artifact creation contracts.

## SV4 - Clarified Understanding

The clean model is:

```text
PastNavigationMemoryFile Index
  = registry of files that may contain past Navigation memory

Route Memory Review
  = current interpretation of selected indexed files for one Navigation question

Navigation
  = new route map using current context plus any review result
```

The index is easier because it gives Navigation one place to find candidate memory files. It is feasible if narrow, creation-time maintained, and validated. It is not feasible if broad, manual, and treated as complete truth.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed Variables

- The index scope is `PastNavigationMemoryFile` candidates.
- The index is a discovery aid.
- Route Memory Review remains the interpretation authority.
- Old Navigation maps remain immutable historical snapshots.
- Index entries should be created when durable route-memory artifacts are created.
- The index must have fallback validation/backfill.

### Eliminated Options

- Index every Navigation-related file creation.
- Store current route status decisions as index authority.
- Replace Route Memory Review with index lookup.
- Rely on the index as complete without fallback.
- Put child-map expansion state into ordinary route cards instead of `_frontier.md`.

### Viable Paths

- Add a narrow Markdown `PastNavigationMemoryFile Index`.
- Start with minimal schema and manual/backfill validation.
- Patch artifact-creating protocols to append entries.
- Later materialize helper tooling only after repeated real use shows manual update failures.

## SV5 - Constrained Understanding

The solution space is now organized around one viable answer:

```text
Yes, create a PastNavigationMemoryFile Index,
but define it as a non-authoritative discovery registry.
```

Minimum design constraints:

- path-oriented;
- append-friendly;
- explicitly non-authoritative;
- creation-time updated;
- review-aware but not review-replacing;
- scan-refreshable;
- scoped to active docs, not archives by default.

The index's value is not that it reduces thinking. It reduces file discovery friction so the thinking can happen in the right place: Route Memory Review.

## Phase 5 - Conceptual Stabilization

The stable model:

```text
Artifact creators register possible past Navigation memory.
The index helps future Navigation find candidate memory files.
Route Memory Review decides what those files mean now.
Navigation writes the current route map.
```

This model differs from SV1 in two important ways:

- SV1 treated the index as a possible record of all Navigation-related creations.
- SV6 treats it as a narrow registry of PastNavigationMemoryFile candidates.

And:

- SV1 asked whether this would be easier in general.
- SV6 says it is easier only for candidate discovery; it must not simplify away review.

## SV6 - Stabilized Model

Homegrown should keep a `PastNavigationMemoryFile` index if it is introduced as a narrow discovery registry.

It is easier because it gives Navigation and Route Memory Review a known place to find files that may contain past route memory. It is feasible because the active set is small now and because Homegrown already has safe index patterns.

But feasibility depends on three safeguards:

1. The index lists candidate files, not current route truth.
2. Entries are added by the operation that creates each durable route-memory file.
3. The index can be validated or refreshed from filesystem scans, so stale or missing rows do not become invisible failure.

The index should assist Route Memory Review. It should not replace Route Memory Review.
