> **Loading note.** This is a small controller for Navigation context intake. It chooses the correct warm-up path; detailed routines live under `homegrown/navigation/warmup/`.

---

# NAVIGATION_CONTEXT_INTAKE - Navigation Context Router

NAVIGATION_CONTEXT_INTAKE decides how a session should prepare context before project-level Navigation.

It does not enumerate routes, choose a route, materialize files, diagnose failures, review outcomes, or define detailed warm-up read rules.

---

## Ownership

Warm-up procedure ownership:

```text
homegrown/navigation/warmup/
```

Canonical files:

```text
navigator-warmup1.md
navigator-warmup2.md
navigator-warmup3.md
navigator-prior-map-overlay.md
navigator-refresh.md
```

This protocol owns only routing:

```text
context state -> correct warm-up / refresh / Navigation handoff
```

If source-profile rules, stage details, trace categories, prior-map reconciliation, or refresh templates need changes, patch the relevant warm-up file instead of expanding this controller.

---

## Input Classification

Before routing, classify:

```yaml
navigation_goal:
source_authority: user_request | finding | branch | materialization_trace | outcome_review | prior_navigation_map | warmup_output | other
source_paths:
  - path
context_boundary: bounded | project_level | global_changed | unclear
prior_warmup_state: none | complete | partial | stale | unknown
freshness_anchor: none | path | timestamp | finding | navigation_map | warmup_output | user_statement
recent_changes: none | bounded | broad | unknown
prior_navigation_maps: none | present | unknown
user_accepts_thin_context: true | false
```

If the boundary cannot be stated, classify it as `unclear`.

---

## Routing Table

### Bounded Local Context

Use when the source is a local inquiry, finding, branch, file, or bounded artifact with enough context.

```yaml
context_boundary: bounded
recent_changes: none | irrelevant
```

Route:

```text
Navigation directly
```

Handoff:

```text
Run Navigation using the bounded source. Preserve missing-context warnings.
```

### Cold Project-Level Session

Use when project-level Navigation is needed and there is no valid warm-up baseline.

```yaml
context_boundary: project_level
prior_warmup_state: none | unknown
```

Route:

```text
navigator-warmup1.md
  -> navigator-warmup2.md
  -> navigator-warmup3.md
  -> navigator-prior-map-overlay.md when prior route memory matters
  -> Navigation
```

If no prior Navigation maps exist, or prior maps are irrelevant to the current Navigation goal, `navigator-prior-map-overlay.md` should say so or be skipped, then hand off to Navigation.

The overlay produces a reconciliation result. It may be inline or saved, according to `navigator-prior-map-overlay.md`'s output-mode rules. It does not update old Navigation maps.

### Previously Warmed But Stale Session

Use when the session was warmed, a freshness anchor exists, and recent changes are bounded.

```yaml
prior_warmup_state: complete
freshness_anchor: path | timestamp | finding | navigation_map | warmup_output | user_statement
recent_changes: bounded
```

Route:

```text
navigator-refresh.md -> Navigation
```

The refresh brief must name read set, anchor, authoritative changes, stale assumptions, Navigation impact, and confidence limits.

### Fresh Warmed Session

Use when current project context is already loaded and no meaningful recent change affects the map.

```yaml
prior_warmup_state: complete
recent_changes: none | irrelevant
```

Route:

```text
Navigation directly
```

Handoff:

```text
Run Navigation from warmed context. Do not rerun warm-up.
```

### Global Boundary Changed Or Baseline Is Unreliable

Use when the old context cannot be trusted.

```yaml
context_boundary: global_changed | unclear
prior_warmup_state: partial | stale | unknown
recent_changes: broad | unknown
```

Route:

```text
Stop normal Navigation.
Run navigator-warmup1.md -> navigator-warmup2.md -> navigator-warmup3.md -> navigator-prior-map-overlay.md when prior route memory matters.
Then rerun Navigation.
```

### Thin Context Accepted

Use only when the user explicitly accepts a thin map.

```yaml
user_accepts_thin_context: true
```

Route:

```text
Navigation directly with THIN telemetry
```

Handoff:

```text
Run Navigation. Mark telemetry THIN. Name missing context and confidence limits.
```

---

## Output

Usually print the routing decision in conversation.

If a durable record is needed, save:

```text
devdocs/navigation_context/<YYYY-MM-DD_HH-MM__context_route_<slug>/context_route.md
```

Minimum record:

```markdown
# Navigation Context Route: <name>

## Navigation Goal
## Source Authority
## Context State
## Routing Decision
## Reason
## Handoff Prompt
## Missing Context And Confidence Limits
```

---

## Validation

Before handoff, check:

- Context boundary is named.
- Refresh has a freshness anchor.
- Cold project-level sessions route through warmup1 -> warmup2 -> warmup3 -> prior-map overlay when prior route memory matters.
- Stale warmed sessions use `navigator-refresh.md` when changes are bounded.
- Prior Navigation maps are reconciled by `navigator-prior-map-overlay.md` when they matter, not treated as current authority and not edited as part of routing.
- Prior-map overlay output mode is owned by `navigator-prior-map-overlay.md`, not by this router.
- `_frontier.md` is not used as global session freshness state.
- Missing-context warnings are preserved.
- No route was selected by this controller.

If a check fails, stop and repair the routing decision before Navigation runs.

---

## Failure Modes

- **Duplicate authority:** this controller restates warm-up details. Correction: move detail to `homegrown/navigation/warmup/`.
- **False freshness:** a session is current because it was warmed once. Correction: require anchor and recent-change classification.
- **Full warm-up overuse:** every stale session reruns v1/v2/v3. Correction: use `navigator-refresh.md` when baseline is valid and changes are bounded.
- **Old map authority drift:** prior Navigation maps become current truth. Correction: use `navigator-prior-map-overlay.md`.
- **Navigation collapse:** the router enumerates or selects routes. Correction: stop at handoff.
- **`_frontier.md` misuse:** expansion ledger becomes session freshness state. Correction: keep `_frontier.md` scoped to multi-resolution Navigation only.

---

## Short Version

```text
bounded source and fresh enough
  -> Navigation

cold project-level session
  -> navigator-warmup1 -> navigator-warmup2 -> navigator-warmup3 -> navigator-prior-map-overlay when prior route memory matters -> Navigation

previously warmed but stale with bounded changes
  -> navigator-refresh -> Navigation

global boundary changed or baseline unreliable
  -> full warm-up again

thin context explicitly accepted
  -> Navigation with THIN telemetry
```
