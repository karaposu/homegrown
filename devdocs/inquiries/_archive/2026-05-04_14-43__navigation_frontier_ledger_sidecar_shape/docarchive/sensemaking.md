# Sensemaking: Navigation Frontier Ledger Sidecar Shape

## User Input

```text
$MVL+

What: Require a frontier ledger before budgeted child-map expansion. Who: Future multi-resolution Navigation protocol. Gate: Before budgeted mode is allowed. Why: Preserves unrun paths as pending and resumable.

hmm, so u know how we have _state.md file and _branch.md file ? maybe ledger we need for navigation can be also sth similar ? what do you think? _navigate.md maybe? and it can be such that parent creates child directions folders and parent navigate.md is updated with this knowledge.. but maybe this is too much work? maybe there is a more efficient better way?
```

## SV1: Baseline Understanding

The user is right that the frontier ledger should feel like a control artifact, not just another prose report. The `_state.md` / `_branch.md` analogy is useful, but the exact file name and folder behavior need care so v1 does not create too much overhead.

## Phase 1: Cognitive Anchor Extraction

### Constraints

- Navigation's visible map must remain readable.
- Budgeted expansion must preserve unrun candidates.
- Parent must know which child maps exist.
- Future sessions must be able to resume without reconstructing memory.
- V1 should not create unnecessary filesystem sprawl.
- The design should scale to deeper layers later.

### Key Insights

- The ledger's role is control state, not human-facing explanation.
- `_navigate.md` is close to the right intuition but a weak name because it sounds like a command.
- `_frontier.md` names the actual controlled object: the expansion frontier.
- Parent should update a ledger, not rewrite the human map as the source of truth.
- Pending candidates should be rows, not folders.
- Child folders should be created only when child maps are actually materialized.

### Structural Points

- `navigation.md` = visible route map.
- `_frontier.md` = authoritative expansion ledger and resume state.
- `composition.md` = readable parent-child summary.
- `children/<candidate-id>/navigation.md` = actual expanded child map.
- Child maps can later have their own `_frontier.md` if they are expanded.

### Foundational Principles

- Human-readable artifacts and runner-control artifacts should not be forced into one file.
- File creation should be proportional to materialized work.
- The parent ledger should be the source of truth for expansion status.
- Visible maps can summarize status, but they should not be the only ledger.

### Meaning-Nodes

- Sidecar.
- Frontier.
- Resume.
- Parent-child lineage.
- Filesystem cost.
- Visible map versus control state.

## SV2: Anchor-Informed Understanding

The issue is not simply "what should the ledger file be called?" The stronger problem is:

```text
How do we preserve parent-child Navigation state without making every route into a folder or stuffing control metadata into the visible map?
```

The answer should use a small sidecar control file and create child folders lazily.

## Phase 2: Perspective Checking

### Technical / Logical

An underscore file signals control metadata in this repo's inquiry patterns. But `_state.md` is already semantically tied to loop progress, and `_branch.md` is tied to inquiry source authority.

New anchor: Navigation needs its own control sidecar name, not reuse of `_state.md` or `_branch.md`.

### Human / User

The user wants reduced burden, not more files to manage. Creating a folder for every possible direction would make the system feel heavier before it proves value.

New anchor: pending candidates should remain cheap.

### Strategic / Long-Term

If Navigation becomes multi-layer, each expanded child route may later become a parent for its own child routes.

New anchor: folder structure should be recursive by capability, but only materialized when used.

### Risk / Failure

If parent `navigation.md` is constantly updated as the ledger, the visible route map may become a noisy state file. If the ledger is only visible prose, future automation may parse unstable text.

New anchor: keep `navigation.md` readable and put control status in `_frontier.md`.

### Resource / Feasibility

One sidecar file is enough for v1. Splitting into `_navigation_state.md`, `_frontier.md`, `_children.md`, and `_resume.md` would be cleaner in theory but too much before use.

New anchor: use one control file until repeated use proves the need to split.

### Definitional / Consistency

Navigation enumerates; it does not select. The ledger should preserve statuses without implying that expanded routes are chosen routes.

New anchor: candidate statuses must distinguish `expanded`, `pending`, and `selected` by absence; final selection should not appear in the ledger unless a separate selector updates it.

## SV3: Multi-Perspective Understanding

The sidecar should be a source-of-truth control file for the multi-resolution run:

```text
_frontier.md
```

The visible artifacts remain:

```text
navigation.md
composition.md
```

Child folders are created only when routes are expanded:

```text
children/<candidate-id>/navigation.md
```

This gives the system the `_state.md`-like property the user noticed, without turning every possible direction into filesystem structure.

## Phase 3: Ambiguity Collapse

### Ambiguity: Should the ledger be `_navigate.md`?

**Strongest counter-interpretation:** `_navigate.md` is short and matches the user's language. It signals that this file belongs to Navigation.

**Why the counter-interpretation fails:** `_navigate` is a verb and sounds like a command invocation. It does not name what the file controls. The ledger controls the frontier, not the act of navigating.

**Confidence:** HIGH.

**Resolution:** Use `_frontier.md` for the v1 control sidecar.

**What is now fixed?** The recommended filename is `_frontier.md`, not `_navigate.md`.

**What is no longer allowed?** Treating `_navigate.md` as the preferred v1 name without a stronger reason.

**What now depends on this choice?** The multi-resolution Navigation protocol should be patched if this finding is materialized.

**What changed in the conceptual model?** The artifact is defined by the state it owns, not the command that uses it.

### Ambiguity: Should parent `navigation.md` be the ledger?

**Strongest counter-interpretation:** Updating the parent map is simpler because the user already reads it.

**Why the counter-interpretation fails:** A parent map is a human-readable route enumeration. A ledger is stateful control metadata. If the parent map becomes the ledger, it becomes harder to scan and harder for future automation to trust.

**Confidence:** HIGH.

**Resolution:** Parent `navigation.md` may show high-level status, but `_frontier.md` should be the ledger source of truth.

**What is now fixed?** `navigation.md` is visible map; `_frontier.md` is control ledger.

**What is no longer allowed?** Using prose route cards as the only state mechanism for pending child expansions.

**What now depends on this choice?** Composition output can remain readable instead of being overloaded with runner state.

**What changed in the conceptual model?** Visibility and control separate.

### Ambiguity: Should parent create child folders for every discovered direction?

**Strongest counter-interpretation:** Creating all child folders immediately gives each candidate a concrete address and makes the tree complete.

**Why the counter-interpretation fails:** Most candidates will be pending, deferred, blocked, or out-of-policy. Empty folders for those candidates create clutter without adding child-map information. A ledger row is enough until a child map exists.

**Confidence:** HIGH.

**Resolution:** Create child folders lazily, only when a candidate is expanded.

**What is now fixed?** Pending candidates live in `_frontier.md`, not as empty folders.

**What is no longer allowed?** Filesystem expansion for every route candidate by default.

**What now depends on this choice?** The output tree stays proportional to actual work.

**What changed in the conceptual model?** The ledger carries possibility; folders carry materialized child maps.

### Ambiguity: Should v1 split state across multiple sidecars?

**Strongest counter-interpretation:** `_navigation_state.md` plus `_frontier.md` would mirror `_state.md` plus `_branch.md` more cleanly.

**Why the counter-interpretation fails:** Multi-resolution Navigation has not yet been used enough to justify multiple control files. One `_frontier.md` can hold settings, candidate records, and resume information. Splitting early adds management overhead before the repeated shape is proven.

**Confidence:** HIGH for v1, LOW for permanent lock-in.

**Resolution:** Use one `_frontier.md` in v1. Consider splitting only after repeated use shows the file is too large or has two stable independent responsibilities.

**What is now fixed?** V1 should stay one control sidecar.

**What is no longer allowed?** Premature multi-file state design without use evidence.

**What now depends on this choice?** First protocol trial remains lightweight.

**What changed in the conceptual model?** The system keeps a path to sophistication without paying that cost now.

## SV4: Clarified Understanding

The user’s sidecar intuition is correct, but `_navigate.md` is not the best name.

The clean v1 design is:

```text
devdocs/navigation/<run-id>/
  navigation.md       # parent visible map
  _frontier.md        # control ledger and resume state
  composition.md      # human-readable parent-child summary
  run_trace.md
  children/
    <candidate-id>/
      navigation.md
```

Pending candidates stay in `_frontier.md`. Expanded candidates get child folders.

## Phase 4: Degrees-Of-Freedom Reduction

### Fixed

- Use an underscore control sidecar.
- Prefer `_frontier.md`.
- Keep `navigation.md` human-readable.
- Keep `composition.md` human-readable.
- Parent ledger updates after child expansion.
- Child folders are created only when expanded.
- Nested child maps may later receive their own `_frontier.md`.

### Eliminated

- `_navigate.md` as the preferred v1 name.
- `navigation.md` as the only ledger.
- Creating child folders for every pending candidate.
- Splitting v1 into several state sidecars.

### Still Viable

- `_navigation_state.md` later if `_frontier.md` becomes too broad.
- Combined `_frontier.md` and `composition.md` for very small manual trials, but not as the preferred shape.
- Parent `navigation.md` can include a short status pointer to `_frontier.md`.

## SV5: Constrained Understanding

The artifact shape should follow this rule:

```text
Rows for possibilities.
Folders for materialized child maps.
Visible maps for humans.
Underscore sidecars for control state.
```

That means the multi-resolution protocol should change from:

```text
frontier.md
```

to:

```text
_frontier.md
```

and should specify lazy child-folder creation.

## Phase 5: Conceptual Stabilization

The stable model is a **Navigation run folder with one control sidecar**.

The sidecar pattern should be similar to `_state.md`, but domain-specific:

```text
_frontier.md = source of truth for expansion candidates, statuses, child paths, and resume.
```

It should not replace the visible map:

```text
navigation.md = route map.
composition.md = readable parent-child summary.
```

It should not force child folder creation:

```text
children/<candidate-id>/navigation.md exists only after expansion.
```

## SV6: Stabilized Model

The efficient answer is:

```text
Yes, use a sidecar ledger similar in spirit to `_state.md`.
No, do not call it `_navigate.md`.
Use `_frontier.md`.

Parent Navigation runs should update `_frontier.md`.
They should create child direction folders only when a candidate is expanded.
Pending and deferred candidates stay as records in `_frontier.md`.
```

This gives the system resumability and parent-child lineage without creating more structure than v1 can carry.
