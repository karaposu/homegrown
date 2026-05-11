# Sensemaking: prior_navigation_map_overlay_mutability

## User Input

Should prior Navigation map overlay update old route status files, or record current status somewhere else?

## SV1 - Baseline Understanding

The initial concern is that a prior-map overlay might imply editing old Navigation maps every time Navigation runs. That feels wrong because old maps are historical artifacts.

## SV2 - Anchor-Informed Understanding

### Constraints

- Old Navigation maps are route snapshots.
- Navigation needs continuation memory.
- User does not want unnecessary editing of old files.
- Warm-up should not become a repeated maintenance tax.
- Current state still needs somewhere to live.

### Key Insights

- "Classify old routes" is ambiguous: it can mean classify in a new overlay or mutate the old map.
- Mutable status fields create drift unless one artifact clearly owns changing state.
- The `_frontier.md` design already established the pattern: changing operational state belongs in a sidecar, not every descriptive artifact.

### Structural Points

- Old map: historical evidence.
- Overlay: current interpretation of old evidence.
- New Navigation map: current route enumeration.
- Refresh brief: current deltas for stale sessions.
- `_frontier.md`: current child-map expansion state for one multi-resolution run.

## SV3 - Multi-Perspective Understanding

### Technical / Logical

Editing old files makes provenance unclear. A route card could contain original route meaning and later status in the same record.

### Human / User

The user wants less maintenance burden, not more. Requiring old-map updates would make Navigation feel like bookkeeping.

### Strategic

Homegrown needs durable learning artifacts. Durable learning depends on preserving what was believed at each time, then comparing it with current evidence.

### Risk

The main risk is dual authority: old map says one thing, overlay says another. The fix is not to update both; the fix is one authority split.

## SV4 - Ambiguity Collapse

### Ambiguity: "classify old routes"

**Strongest counter-interpretation:** Classification should update the `Status` fields in old maps so each map remains easy to read.

**Why the counter fails:** The old map then stops being a clean historical snapshot. It also creates repeated edit obligations whenever status changes.

**Confidence:** HIGH.

**Resolution:** Classification happens in the overlay artifact, not by mutating old maps.

**What is fixed:** Old maps are read-only by default.

**What is no longer allowed:** Silent status rewrites in prior `devdocs/navigation/*.md` maps.

### Ambiguity: "every Navigation run"

**Strongest counter-interpretation:** Every Navigation run should reconcile route memory to stay fresh.

**Why the counter fails:** Many Navigation runs are bounded/local and do not need project-wide route-memory reconciliation. Per-run overlay makes warm-up too expensive.

**Confidence:** HIGH.

**Resolution:** Overlay runs after cold project warm-up or explicit route-memory need, not every Navigation invocation.

## SV5 - Constrained Understanding

Fixed:

- prior maps are immutable snapshots by default;
- overlay writes a new artifact;
- latest/current status lives in overlay, refresh, newest Navigation map, or `_frontier.md` depending on context;
- overlay is triggered, not universal.

Eliminated:

- automatic old-map mutation;
- overlay before every Navigation call;
- using `_frontier.md` as global route-memory state.

## SV6 - Stabilized Model

The correct model is not "update old route statuses." It is "read old maps as memory, reconcile them against current context, and write a new overlay that states current interpretation."

This differs from SV1 by separating the user's discomfort into two independent rules: immutability of old maps and triggered, not universal, overlay execution.
