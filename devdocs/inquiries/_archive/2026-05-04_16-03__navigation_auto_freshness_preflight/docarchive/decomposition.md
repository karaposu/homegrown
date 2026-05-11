# Decomposition: Navigation Auto Freshness Preflight

## Coupling Map

High-coupling clusters:

1. Navigation invocation and input classification.
2. Freshness anchor detection and stale-context signals.
3. Refresh execution and sync brief output.
4. Final Navigation map generation.

Low-coupling boundaries:

- The check can live in Navigation.
- The refresh operation can remain in `navigator-refresh.md`.
- Full warm-up fallback can remain in warm-up v1/v2/v3.

## Question Tree

### 1. What should Navigation check automatically?

Verification criteria:

- [ ] It checks whether the input is local, project-level, prior Navigation map, current-state brief, sync brief, or raw prompt.
- [ ] It checks for a freshness anchor.
- [ ] It checks whether known recent changes may affect Navigation.
- [ ] It checks whether missing context warnings exist.

### 2. What are preflight outcomes?

Verification criteria:

- [ ] `fresh_local`: local inquiry/path contains the needed context.
- [ ] `fresh_project`: current-state or sync brief is fresh enough.
- [ ] `refresh_needed`: bounded stale state; use `navigator-refresh.md`.
- [ ] `full_warmup_needed`: no anchor, global boundary changed, or stale state too broad.
- [ ] `thin_allowed`: user explicitly asks to proceed despite thin context.

### 3. What should Navigation do after each outcome?

Verification criteria:

- [ ] Fresh outcomes proceed to normal Navigation.
- [ ] Refresh-needed outcome runs or requires `navigator-refresh.md` and then proceeds using the sync brief.
- [ ] Full-warmup-needed outcome stops and tells the user to run v1/v2/v3.
- [ ] Thin-allowed outcome marks telemetry as THIN and preserves confidence limits.

### 4. Where should this be implemented?

Verification criteria:

- [ ] Patch `homegrown/navigation/SKILL.md`.
- [ ] Optionally reference `homegrown/navigation/warmup/navigator-refresh.md`.
- [ ] Do not duplicate the whole refresh procedure in Navigation.
- [ ] Do not patch `.codex`.

### 5. What should remain deferred?

Verification criteria:

- [ ] No automatic file watcher.
- [ ] No persistent observer runtime.
- [ ] No automatic full warm-up every time.

## Interface Map

- Navigation input -> freshness preflight: input type and source scope.
- Freshness preflight -> navigator-refresh: freshness anchor, target Navigation question, scope.
- navigator-refresh -> Navigation: sync brief and confidence limits.
- Freshness preflight -> full warm-up: escalation instruction.
- Navigation -> telemetry: freshness outcome recorded.

## Dependency Order

1. Add preflight guidance to Navigation.
2. Use it manually once.
3. Check whether `navigator-refresh.md` produces enough signal.
4. Patch `navigation_context_intake.md` only if wrapper routing remains confusing.
5. Automate later only after repeated use.

## Self-Evaluation

Independence: PASS. Preflight can be added without changing route-card taxonomy.

Completeness: PASS. It covers check, outcomes, actions, implementation target, and deferrals.

Reassembly: PASS. If implemented, Navigation will stop running on stale project context by default.

