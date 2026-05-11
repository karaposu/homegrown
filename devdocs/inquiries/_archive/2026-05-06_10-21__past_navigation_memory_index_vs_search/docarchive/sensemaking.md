# Sensemaking: PastNavigationMemoryFile Index Versus Search

## User Input

If Homegrown can find `PastNavigationMemoryFile` candidates by searching known filenames and regex-searchable patterns, does it still need a maintained index?

## SV1 - Baseline Understanding

The user's objection is strong. If candidate files have stable names such as `navigation.md`, `_frontier.md`, `route_memory_review.md`, and `sync_brief.md`, then a maintained global index may duplicate what the filesystem and `rg` can already provide.

The question is not "explicit artifact or no explicit artifact." The real question is whether explicitness should live in a maintained list or in a documented search contract.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- `PastNavigationMemoryFile` discovery must avoid stale route resurrection and route amnesia.
- Search must exclude `docarchive/`, `archive/`, and `_archive/` by default.
- Search must avoid protocol/spec false positives under `homegrown/`.
- Route Memory Review still owns current interpretation.
- A maintained index creates update burden.
- A search-only approach can be explicit if its pattern set is documented.
- The current active tree has very few candidate files.

### Key Insights

- Search is not inherently less robust than an index. Unspecified search is weak; protocolized search is strong.
- The prior index recommendation already required scan/backfill, which means search was always part of the safe design.
- If an index only stores paths and kinds, it is mostly a cached search result.
- If an index stores more than paths and kinds, it risks becoming secondary authority.
- A generated per-run candidate report preserves durable handoff without creating a global mutable list.

### Structural Points

- Filesystem search finds candidate artifacts.
- Route Memory Review reads and interprets candidate artifacts.
- Navigation consumes the review result.
- Maintained index is an optional cache between search and review.
- Per-run candidate report is a durable snapshot of one search, not a global source of truth.

### Foundational Principles

- Do not maintain duplicate state when it can be derived cheaply and reliably.
- If a derived artifact is needed for handoff, generate it from the source rather than manually maintain it.
- Explicitness means the mechanism is inspectable, not necessarily that every derived result has a permanent global file.
- Historical evidence and current interpretation must remain separate.

### Meaning-Nodes

- deterministic search
- maintained index
- generated candidate report
- duplicate state
- explicit search contract
- candidate discovery
- current interpretation

## SV2 - Anchor-Informed Understanding

The problem has shifted.

Before exploration, the maintained index looked like the explicit solution to a discovery problem. After testing search, the maintained index looks like a cache of a derivable result.

The cleaner current model is:

```text
PastNavigationMemoryFile Discovery Search
  -> finds candidate files

Route Memory Review
  -> interprets relevant candidates

Optional per-run candidate report
  -> records what the search found when durable handoff matters
```

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

New anchors:

- Known filenames and path roots are enough to find current candidates.
- Regex must be scoped to `devdocs/` or known output roots to avoid protocol-file false positives.
- A maintained index is not needed for mechanical discovery if search patterns remain stable.

Technical reading:

Search should be the canonical v1 discovery mechanism. A maintained index is justified only if discovery starts depending on metadata that cannot be cheaply derived from path/name/content.

### Human / User Perspective

New anchors:

- The user wants explicitness, but also notices unnecessary mechanism smell.
- A named search contract may be easier to trust than a mutable index that can silently fall behind.
- A per-run candidate report can satisfy "show me what was found" without becoming a permanent registry.

Human reading:

The best answer should not say "just search" casually. It should say exactly what to search, what to exclude, and when to save the search result.

### Strategic / Long-Term Perspective

New anchors:

- Early-stage Homegrown should bias robust, but robust does not always mean more maintained files.
- Future automation can execute search more reliably than it can remember to update a manual index.
- A generated artifact path keeps future automation open.

Strategic reading:

Search-first is the better early-stage mechanism because it avoids committing to a mutable index before enough artifacts exist to prove the need.

### Risk / Failure Perspective

New anchors:

- Search can miss files if naming conventions drift.
- Search can overmatch if path boundaries are loose.
- A maintained index can miss files if writers forget to register them.
- A maintained index can overclaim if readers treat it as complete.

Risk reading:

Both mechanisms can fail. Search failure is controlled by stable naming conventions and scoped patterns. Index failure is controlled by writer discipline. In this codebase, search failure looks easier to detect and repair than silent index drift.

### Resource / Feasibility Perspective

New anchors:

- Running `rg --files` or `find` over active docs is cheap at current size.
- Maintaining an index requires edits at every artifact-creation point.
- The current active candidate set is tiny.

Resource reading:

The cost/benefit balance currently favors search-first. A maintained index has more process overhead than present data volume justifies.

### Definitional / Consistency Perspective

New anchors:

- `PastNavigationMemoryFile` is a semantic category.
- Filename search finds candidate artifacts, not final semantic membership.
- Route Memory Review does semantic classification.

Definitional reading:

Search is allowed to produce candidates with some false positives. It does not have to prove final membership. The review step decides relevance and interpretation.

## SV3 - Multi-Perspective Understanding

The strongest model is no longer "maintained index plus scan fallback."

The stronger model is "search-first discovery plus optional generated report."

That preserves explicitness:

- the protocol lists the search patterns;
- the run can save what it found;
- Route Memory Review records what it read.

It also avoids duplicate mutable state.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Does search make the index unnecessary?

**Strongest counter-interpretation:**
No. Search finds files, but an index gives humans and future agents a stable, browseable list and avoids running searches repeatedly.

**Why the counter-interpretation fails (structural grounds):**
The current candidate set is small and file names are protocol-defined. A stable search can regenerate the list from the filesystem, while a maintained list can silently drift. Repeated search is cheap compared to the process cost of updating every writer and repairing missed registrations.

**Confidence:** HIGH for v1; LOW as a permanent claim after many artifacts exist.

**Resolution:**
Search makes a maintained global index unnecessary for v1 candidate discovery.

**What is now fixed?**
Baseline discovery should be deterministic active-tree search.

**What is no longer allowed?**
Treating a maintained global index as mandatory before robust Route Memory Review can work.

**What now depends on this choice?**
Navigation intake patch design and the prior index finding's next actions.

**What changed in the conceptual model?**
The index moves from default artifact to deferred cache/report option.

### Ambiguity: Is search less explicit than an index?

**Strongest counter-interpretation:**
Yes. Homegrown values Markdown artifacts, and a search command is invisible unless someone remembers it.

**Why the counter-interpretation fails (structural grounds):**
The failure is not search itself; the failure is undocumented search. A protocol section named `PastNavigationMemoryFile Discovery Search` with exact patterns, exclusions, and output expectations is explicit. When durable handoff matters, the search result can be saved as a run-local `past_navigation_memory_candidates.md`.

**Confidence:** HIGH.

**Resolution:**
Search is explicit if the protocol owns the search contract.

**What is now fixed?**
The explicit artifact is the protocol rule, and optionally the per-run candidate report.

**What is no longer allowed?**
Equating "no global index" with "hidden or informal discovery."

**What now depends on this choice?**
Output contract for Route Memory Review and context intake.

**What changed in the conceptual model?**
Explicitness moves from a maintained registry to a repeatable discovery procedure.

### Ambiguity: What should be saved, if anything?

**Strongest counter-interpretation:**
Save nothing. Route Memory Review can just run search, read files, and include sources read in `route_memory_review.md`.

**Why the counter-interpretation fails (structural grounds):**
For small same-session review, saving only `Sources Read` inside `route_memory_review.md` may be enough. But if the candidate scan is broad, expensive, disputed, or consumed across sessions, a durable candidate report preserves what was searched, what was included, what was excluded, and why. That is not the same as a maintained global index.

**Confidence:** HIGH.

**Resolution:**
Save a per-run `past_navigation_memory_candidates.md` only when candidate discovery itself needs durable handoff or audit. Otherwise, record search status and sources in the review or Navigation telemetry.

**What is now fixed?**
Run-local generated reports are allowed; global maintained registry is not the default.

**What is no longer allowed?**
Creating a permanent index merely because a search occurred.

**What now depends on this choice?**
Route Memory Review output-mode rules.

**What changed in the conceptual model?**
The file is evidence of one search run, not an always-current catalog.

### Ambiguity: When would an index become justified?

**Strongest counter-interpretation:**
Never, because search is always more reliable than a manual index.

**Why the counter-interpretation fails (structural grounds):**
Search can become insufficient if artifact names drift, if route-memory files appear under nonstandard names, if external consumers cannot run repository search, or if useful metadata becomes non-derivable from path/name/content. A generated or maintained index can become valuable under those conditions.

**Confidence:** HIGH.

**Resolution:**
Defer the maintained index until there is evidence of search pain or non-derivable metadata need.

**What is now fixed?**
The index has explicit revival triggers.

**What is no longer allowed?**
Adding the index now only because it sounds more explicit.

**What now depends on this choice?**
Monitoring thresholds.

**What changed in the conceptual model?**
Index becomes an optimization/escalation, not the foundation.

## SV4 - Clarified Understanding

The user is right to challenge the index.

If Homegrown knows the filenames and path shapes, then deterministic search is a better v1 discovery mechanism than a maintained global index.

The robust version is not informal search. It is a documented `PastNavigationMemoryFile Discovery Search` with:

- active-doc path scope;
- archive exclusions;
- known filename patterns;
- false-positive exclusions;
- optional durable candidate report;
- Route Memory Review reading and interpreting the results.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed Variables

- Search is the baseline v1 discovery mechanism.
- The search contract must be explicit in protocol docs.
- Route Memory Review still interprets candidates.
- The maintained global index is not required now.
- A generated per-run candidate report is allowed when durable handoff matters.

### Eliminated Options

- Mandatory maintained global `PastNavigationMemoryFile Index` as v1.
- Broad search over all codebase paths without exclusions.
- Treating search results as current route truth.
- Treating absence from a maintained index as proof that no candidates exist.

### Viable Paths

- Patch Navigation context intake with `PastNavigationMemoryFile Discovery Search`.
- Patch Route Memory Review to record search patterns and `Sources Read`.
- Add optional `past_navigation_memory_candidates.md` for durable candidate-scan handoff.
- Defer maintained index until evidence justifies it.

## SV5 - Constrained Understanding

The corrected design is:

```text
active-tree search contract
  -> candidate list
  -> optional generated candidate report
  -> Route Memory Review
  -> Navigation
```

This is more robust than a maintained index right now because it derives from the filesystem instead of depending on every writer to append a row.

## Phase 5 - Conceptual Stabilization

The stabilized answer is:

Search is enough for current PastNavigationMemoryFile discovery if Homegrown documents it as a protocol-level operation.

The maintained global index should be deferred. Its main value would be human browsing or non-derivable metadata, not mechanical discovery. Those needs are not proven yet.

## SV6 - Stabilized Model

Homegrown does not currently need a maintained `PastNavigationMemoryFile Index`.

It needs a `PastNavigationMemoryFile Discovery Search` contract.

That contract should define what to search, where to search, what to exclude, and when to save a generated candidate report. Route Memory Review then reads the found candidates and decides what they mean for the current Navigation question.

This differs from SV1 by turning the objection into a cleaner architecture. The answer is not "just search casually." The answer is "make search the explicit discovery primitive and generate artifacts only when the search result needs durable handoff."
