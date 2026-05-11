# Exploration: Navigation Auto Freshness Preflight

## User Input

The user proposed that refreshing and syncing should be something a Navigation session checks automatically before running the Navigation command.

## Mode And Entry Point

Mode: artifact exploration plus possibility exploration.

Entry point: signal-first. The signal is a tension between two valid needs:

- Navigation should not silently operate on stale context.
- Navigation should not absorb context intake and become a hidden warm-up system.

## Cycle 1 - Current Navigation Command Surface

Scanned:

- `homegrown/navigation/SKILL.md`
- `homegrown/navigation/references/navigation.md`

Found:

- Navigation currently starts with a mandatory reference read, then consumes the given input and produces a map.
- It does not have a preflight freshness gate.
- It accepts raw project-level context, file paths, and inquiry folders.
- It can produce thinner maps when raw/project context is incomplete.

Signal:

- There is no mechanism preventing stale warmed context from being treated as fresh.

Frontier state: advancing.

Confidence: confirmed.

## Cycle 2 - Refresh Support Surface

Scanned:

- `homegrown/navigation/warmup/navigator-refresh.md`
- `homegrown/protocols/navigation_context_intake.md`
- `devdocs/inquiries/2026-05-04_15-47__sync_idle_navigator_recent_developments/finding.md`

Found:

- `navigator-refresh.md` now defines how to produce a sync brief from a freshness anchor.
- `navigation_context_intake.md` already says context should be rerun only when boundary changes, state becomes stale, or Navigation failed from missing context.
- The prior finding killed Navigation-internal refresh because hidden refresh would blur boundaries.

Signal:

- The missing piece is not refresh mechanics anymore. The missing piece is automatic detection at the entry point where stale context causes harm: Navigation invocation.

Frontier state: stable enough.

Confidence: confirmed.

## Jump Scan

Scanned outside the obvious path:

- `homegrown/protocols/multi_resolution_navigation.md`
- `devdocs/inquiries/2026-05-04_14-43__navigation_frontier_ledger_sidecar_shape/finding.md`

Found:

- `_frontier.md` solves route-expansion resume state, not session freshness.
- Multi-resolution Navigation reinforces the need for explicit state sidecars and handoff artifacts.

Jump-scan result: automatic freshness preflight should not reuse `_frontier.md` as a global freshness gate.

## Structural Map

Current pipeline:

```text
Navigation command -> read input -> produce map
```

Proposed safer pipeline:

```text
Navigation command
  -> freshness preflight
  -> if fresh: produce map
  -> if stale and bounded: run/require navigator-refresh
  -> if globally stale or missing anchor: full warm-up
```

## Confidence Map

- Confirmed: Navigation currently has no automatic freshness check.
- Confirmed: `navigator-refresh.md` exists and can be delegated to.
- Confirmed: hidden refresh inside Navigation is risky.
- Scanned: exact implementation details.
- Unknown: whether preflight should save a brief automatically on every stale case or ask/stop first.

## Gaps And Recommendations

Navigation should gain a freshness preflight. The preflight checks freshness automatically, but does not silently rewrite context or choose routes. If refresh is needed, it routes to `navigator-refresh.md` and records/uses a sync brief before producing a map.

