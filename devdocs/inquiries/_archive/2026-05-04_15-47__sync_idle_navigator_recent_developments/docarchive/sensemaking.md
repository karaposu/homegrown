# Sensemaking: Sync Idle Navigator Recent Developments

## User Input

How should Homegrown sync an idle, previously warmed Navigator session with recent project developments?

## SV1 - Baseline Understanding

The user is identifying a real operational gap: a Navigator session can be warmed correctly, then become stale while another session changes the project. Navigation would then produce a route map from old context.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Warm-up is once per session, not per request.
- Navigation should enumerate routes, not prepare context.
- Full v1/v2/v3 warm-up can be expensive.
- Recent developments can include findings, protocol edits, Navigation maps, materialization traces, and user corrections.
- An idle session cannot know files changed unless it is explicitly refreshed.

### Key Insights

- The missing operation is incremental freshness, not deeper warm-up.
- A stale context can produce a plausible but obsolete Navigation map.
- The refresh must preserve source authority and confidence limits, otherwise it becomes informal context dumping.
- The refresh output should be pasteable or loadable by another AI session.

### Structural Points

- Initial warm-up creates a context baseline.
- Refresh compares current project state against that baseline or against the last Navigation map.
- Navigation consumes the refreshed brief and then enumerates routes.
- Multi-resolution `_frontier.md` is for child-map frontier state, not whole-session freshness.

### Foundational Principles

- Dates are evidence, not authority.
- Recent does not automatically mean current.
- Sync should update context without turning into hidden selection.
- The lightest sufficient routine should be used until repeated failures justify heavier machinery.

### Meaning-Nodes

- navigator refresh
- delta brief
- freshness anchor
- stale-session boundary
- context sync handoff

## SV2 - Anchor-Informed Understanding

The issue is not that Navigation lacks another reasoning step. The issue is that an already-warmed session needs a small freshness bridge before Navigation runs again.

## Phase 2 - Perspective Checking

### Technical / Logical

A session cannot infer external file changes from its internal conversation state. Sync needs a read set and a freshness anchor, such as the last warm-up output, last Navigation map, or explicit "changes since this timestamp/path" instruction.

### Human / User

The user needs relief from manually telling every session what changed. A good sync operation should produce a compact update the user can hand to the idle Navigator session.

### Strategic / Long-Term

This is a stepping stone toward durable Navigation memory and later multi-session or multi-head operation. The first implementation should create artifacts, not a persistent observer runtime.

### Risk / Failure

The biggest risk is false freshness: the refresh reads only recent filenames and misses a user correction, supersession, or materialized file. The second risk is over-refreshing, where every small question triggers full archaeology again.

### Resource / Feasibility

A delta brief is feasible now. A background sync engine or persistent session registry is premature.

### Definitional / Consistency

Navigation is a boundary discipline that maps possible next moves. Context refresh is a warm-up support operation. If Navigation performs its own sync, failure attribution blurs.

## SV3 - Multi-Perspective Understanding

The right object is a Navigation-owned support routine, not a new core discipline. It should be callable when the context boundary changed or an idle session is known to be stale.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Is sync just rerunning v1/v2/v3?

**Strongest counter-interpretation:** Yes. If context is stale, rerun the canonical warm-up routine from scratch.

**Why the counter-interpretation fails:** The stale-session case often has a narrow delta: a few findings, protocol edits, or materialization traces. Full warm-up repeats orientation and architecture work that did not change. That wastes compute and creates more summary churn.

**Confidence:** HIGH.

**Resolution:** Sync is a delta operation by default. Full warm-up is the fallback when no freshness anchor exists or the context boundary changed globally.

**What is now fixed?** Refresh is not v4 by default.

**What is no longer allowed?** Treating every stale session as requiring full archaeology.

**What now depends on this choice?** The sync routine needs a compact read-set rule and fallback rule.

**What changed in the conceptual model?** Warm-up now has two phases: baseline warm-up and later freshness refresh.

### Ambiguity: Should Navigation itself do the refresh?

**Strongest counter-interpretation:** Navigation could begin by scanning recent files before producing the route map.

**Why the counter-interpretation fails:** Navigation's job is route enumeration. If it also decides what context to refresh, then weak maps could be caused by bad context intake or bad route reasoning, and the system cannot diagnose which failed.

**Confidence:** HIGH.

**Resolution:** Refresh runs before Navigation and produces a handoff brief.

**What is now fixed?** Navigation consumes refreshed context; it does not own freshness logic.

**What is no longer allowed?** Hiding context refresh inside the Navigation discipline.

**What now depends on this choice?** The warm-up folder or context-intake wrapper must expose refresh.

**What changed in the conceptual model?** Context freshness becomes part of the warm-up support layer.

### Ambiguity: Is `_frontier.md` the sync mechanism?

**Strongest counter-interpretation:** `_frontier.md` is the durable Navigation ledger, so it should sync Navigator sessions.

**Why the counter-interpretation fails:** `_frontier.md` records expansion candidates for a multi-resolution Navigation run. It does not track all recent Homegrown project changes, source authority changes, or materialization traces outside that run.

**Confidence:** HIGH.

**Resolution:** `_frontier.md` remains route-expansion state. Sync may read it when relevant, but it is not the session-sync mechanism.

**What is now fixed?** Navigator refresh must have a separate output, likely a sync brief.

**What is no longer allowed?** Overloading `_frontier.md` with global context freshness.

**What now depends on this choice?** Multi-resolution Navigation remains cleanly scoped.

**What changed in the conceptual model?** There are two durable states: route frontier state and session freshness state.

## SV4 - Clarified Understanding

Sync should be a small pre-Navigation refresh operation. It reads changes since a known anchor, classifies their Navigation impact, and produces a brief that an idle session can consume.

## Phase 4 - Degrees-of-Freedom Reduction

Fixed:

- Refresh is not a new discipline.
- Refresh is not a default full warm-up rerun.
- Refresh output must include read set, source authority, changed artifacts, stale assumptions, Navigation impact, and confidence limits.

Eliminated:

- Asking stale Navigator sessions to continue from memory.
- Making Navigation silently scan recent files.
- Using `_frontier.md` as the global session freshness artifact.

Remaining viable paths:

- Add `navigator-refresh.md` under `homegrown/navigation/warmup/`.
- Patch `navigation_context_intake.md` to route between baseline warm-up and refresh.
- Keep refresh manual first; automate only after repeated use.

## SV5 - Constrained Understanding

The minimum useful implementation is a Navigation warm-up support command that produces a "sync brief" from recent changes since the last warm-up, last Navigation map, or user-provided anchor.

## SV6 - Stabilized Model

Homegrown needs a Navigator refresh operation: a lightweight delta sync that runs after a session has become stale but before Navigation is asked to produce a new route map. It should update the session's current-state brief, not replace Navigation and not rerun v1/v2/v3 unless the baseline is missing or globally stale.

