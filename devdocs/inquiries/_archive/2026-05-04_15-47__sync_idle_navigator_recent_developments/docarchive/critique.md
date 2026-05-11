# Critique: Sync Idle Navigator Recent Developments

## Dimensions With Weights

- Correctness HIGH: solves the stale Navigator session problem.
- Boundary coherence HIGH: does not collapse Navigation, warm-up, and route expansion into one operation.
- Freshness coverage HIGH: reads the sources that can actually change Navigation output.
- Cost control HIGH: avoids full warm-up unless needed.
- Durability MEDIUM: produces an artifact that another session can consume.
- Scalability MEDIUM: can later support multi-head and runner use.
- Simplicity MEDIUM: does not add a large new system before evidence.

## Fitness Landscape

Viable region: lightweight refresh before Navigation, with source authority, read set, stale assumption handling, and handoff.

Boundary region: wrapper-only guidance without a concrete command; useful but easy for future sessions to miss.

Dead region: full warm-up on every stale check, Navigation silently refreshing itself, or `_frontier.md` absorbing global context sync.

Unexplored region: automated persistent observer/runtime.

## Candidate Verdicts

### Candidate 1: Rerun v1/v2/v3 whenever a Navigator session may be stale

Verdict: KILL.

Prosecution: It solves freshness but destroys the speed advantage. It also creates summary churn and makes Navigation warm-up feel like a heavy ritual.

Defense: It is simple and uses the canonical warm-up path.

Collision: The defense is real, but too expensive for the user's case. The user is asking about syncing recent developments, not rebuilding the entire session baseline.

Constructive seed: Use full warm-up as fallback only when no freshness anchor exists or the context boundary changed globally.

### Candidate 2: Make Navigation itself scan recent files before every map

Verdict: KILL.

Prosecution: It violates Navigation's boundary. If the result is weak, the system cannot tell whether route enumeration failed or context intake failed.

Defense: It is convenient because the user only calls Navigation once.

Collision: Convenience loses to boundary clarity. This would recreate the confusion Navigation was meant to reduce.

Constructive seed: Navigation can consume a refresh brief, but the refresh step should remain separate.

### Candidate 3: Use `_frontier.md` as the Navigator session sync artifact

Verdict: KILL.

Prosecution: `_frontier.md` records expansion candidates for one multi-resolution Navigation run. It does not track global recent findings, protocol edits, materialization traces, or source-authority changes.

Defense: It already has the shape of a durable Navigation control file.

Collision: The file is durable, but scoped to route expansion. Reusing it for session freshness would overload it.

Constructive seed: Refresh may read `_frontier.md` when a multi-resolution run is the recent source, but it needs its own sync brief.

### Candidate 4: Add a lightweight Navigator refresh/sync routine

Verdict: SURVIVE.

Prosecution: It adds another support artifact to an already growing Navigation system.

Defense: It addresses a real missing operation: delta freshness after an idle session. It can stay smaller than v1/v2/v3 and produce a portable handoff brief.

Collision: The added complexity is justified if the routine is constrained: manual first, artifact-based, source-anchored, and fallback-oriented.

Constructive output: Create or specify `homegrown/navigation/warmup/navigator-refresh.md` as a support command before relying on old warmed sessions for new Navigation.

### Candidate 5: Patch `navigation_context_intake.md` to route stale-session cases

Verdict: REFINE.

Prosecution: The current file is still too large and partly superseded by v1/v2/v3. Adding more detail could preserve duplicate authority.

Defense: It already owns the invariant that warm-up runs once per session and reruns only on stale or changed context boundaries.

Collision: The wrapper should not define all refresh logic. It should point to the refresh routine and preserve only trigger/handoff invariants.

Constructive output: After `navigator-refresh.md` exists, patch `navigation_context_intake.md` into a smaller controller that says baseline warm-up uses v1/v2/v3 and stale-session refresh uses `navigator-refresh.md`.

### Candidate 6: Create automated background synchronization now

Verdict: KILL.

Prosecution: It would require session identity, file watching, invalidation rules, and trust boundaries before one manual sync has been tested.

Defense: It would eventually reduce manual burden.

Collision: The direction is plausible later, but premature now.

Constructive seed: Let repeated sync briefs teach the future automation contract.

## Assembly Check

The surviving assembly is:

```text
baseline warm-up v1/v2/v3
  -> optional post-v3 prior-map overlay
  -> Navigation map
  -> later project changes
  -> navigator-refresh.md produces sync brief
  -> idle Navigator reads sync brief
  -> Navigation runs from refreshed context
```

## Coverage Map

Covered:

- full rerun option;
- Navigation-internal refresh;
- `_frontier.md` overload;
- lightweight sync routine;
- wrapper integration;
- automation.

Remaining:

- exact sync brief template;
- exact freshness anchor fields;
- whether README guidance is enough or a command file is needed.

## Signal

TERMINATE with ranked survivor: lightweight Navigator refresh/sync routine, integrated through the warm-up support layer and later referenced by the context-intake wrapper.

## Convergence Telemetry

Dimension coverage: complete for the question.

Adversarial strength: STRONG.

Landscape stability: STABLE.

Clean SURVIVE exists: yes.

Failure modes observed: no rubber-stamping; full rerun and automation were killed despite convenience.

Overall: PROCEED.

