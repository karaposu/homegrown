# Exploration: Sync Idle Navigator Recent Developments

## User Input

The user asked how to sync a previously warmed Navigator session after another session created new Navigation-related files and findings. The concrete concern is that the idle session's context is stale, so asking it "what is next?" would miss newly created directions.

## Mode And Entry Point

Mode: artifact exploration plus possibility exploration.

Entry point: signal-first. The signal is a stale warmed session: Navigation context was loaded once, but the project moved while the session was idle.

## Cycle 1 - Existing Navigation Context Surface

Scanned:

- `homegrown/navigation/SKILL.md`
- `homegrown/navigation/references/navigation.md`
- `homegrown/navigation/warmup/navigator-warmup1.md`
- `homegrown/navigation/warmup/navigator-warmup2.md`
- `homegrown/navigation/warmup/navigator-warmup3.md`
- `homegrown/protocols/navigation_context_intake.md`
- `devdocs/navigation/next_load_bearing_after_navigation_warmup.md`

Found:

- Navigation is defined as a boundary discipline that enumerates possible next directions.
- The warm-up routine is a once-per-session context digestion sequence.
- `navigation_context_intake.md` already says intake should not rerun for every follow-up question and should rerun only when context boundary changes, outputs become stale, or Navigation fails due to missing context.
- The first Navigation output explicitly relied on warmed context and did not rerun v1/v2/v3.

Signals:

- The stale-session case is recognized conceptually but not operationalized.
- There is no concrete sync command or delta brief contract.
- Warm-up can be too expensive to rerun after every cluster of changes.

Frontier state: advancing. The project has pieces for initial warm-up, but not for incremental refresh.

Confidence: confirmed for the absence of a dedicated refresh artifact; scanned for exact future shape.

## Cycle 2 - Recent Development Surface

Scanned:

- `devdocs/inquiries/2026-05-03_22-23__navigation_prior_map_read_after_warmup_v3/finding.md`
- `devdocs/inquiries/2026-05-04_07-12__recursive_navigation_coverage/finding.md`
- `devdocs/inquiries/2026-05-04_14-22__multi_resolution_navigation_budget_vs_coverage/finding.md`
- `devdocs/inquiries/2026-05-04_14-43__navigation_frontier_ledger_sidecar_shape/finding.md`
- `homegrown/protocols/multi_resolution_navigation.md`

Found:

- Prior Navigation maps should be read after warm-up v3 as a continuation overlay, not during v1.
- Multi-resolution Navigation now has a protocol and `_frontier.md` sidecar contract.
- The latest protocol changes after the idle session are exactly the kind of developments an old Navigator session would miss.
- `_frontier.md` solves route-expansion resumability, not session-context freshness.

Signals:

- "Read prior maps after v3" and "sync stale session after new work" are adjacent but not identical.
- A refresh operation should read recent findings, modified protocols, Navigation maps, materialization traces, and possibly git status or file timestamps.
- It should classify deltas as new authority, stale assumption, supersession, blocker, or changed route state.

Frontier state: stable enough. The missing operation has a distinct boundary.

Confidence: confirmed that new recent files would affect Navigation output.

## Jump Scan

Scanned outside the immediate path:

- `git status --short`
- `devdocs/materializations/2026-05-04_14-36__multi_resolution_navigation_protocol/`
- current untracked/modified Navigation protocol surface

Found:

- The worktree has unrelated `.codex/skills` deletions that should not be touched.
- The local Homegrown source of truth has changed: `homegrown/navigation/SKILL.md`, `homegrown/navigation/references/navigation.md`, and new `homegrown/protocols/multi_resolution_navigation.md`.
- Materialization traces can also be recent evidence and should be part of a refresh scan when relevant.

Jump-scan result: the stale-session problem is not only about dated findings. Recent file changes and materialization traces matter too.

## Structural Map

Major regions:

1. Initial warm-up: v1/v2/v3 produce orientation, project-direction architecture, and movement traces.
2. Prior-map overlay: post-v3 reading reconciles older Navigation maps against current state.
3. Navigation: produces a route map from warmed context.
4. Multi-resolution Navigation: expands route maps into child maps while preserving `_frontier.md`.
5. Missing region: refresh/sync between a prior warm-up and a later Navigation run after project state changed.

## Confidence Map

- Confirmed: Navigation should not absorb context intake.
- Confirmed: warm-up is once per session, not per request.
- Confirmed: recent work created Navigation-relevant artifacts after the earlier Navigation output.
- Scanned: exact file placement for the sync routine.
- Unknown: whether a README rule is enough or whether a runnable `navigator-refresh.md` command is needed immediately.

## Gaps And Recommendations

The missing artifact is a lightweight Navigator refresh/sync routine. It should not be a heavy fourth warm-up stage by default. It should produce a concise sync brief that an idle Navigator session can consume before running Navigation again.

