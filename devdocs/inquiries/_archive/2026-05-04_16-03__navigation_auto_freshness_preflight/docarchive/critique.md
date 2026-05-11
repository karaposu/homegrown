# Critique: Navigation Auto Freshness Preflight

## Dimensions With Weights

- Correctness HIGH: prevents stale Navigation maps.
- Boundary coherence HIGH: keeps Navigation from absorbing refresh.
- User burden HIGH: removes the need for the user to remember freshness manually.
- Cost control HIGH: avoids full refresh cost for local/fresh cases.
- Traceability HIGH: records why context was considered fresh or stale.
- Simplicity MEDIUM: can be implemented as a command-file preflight first.
- Scalability MEDIUM: supports future multi-head Navigation.

## Fitness Landscape

Viable region: automatic preflight check with delegated refresh and explicit outcomes.

Boundary region: warning-only freshness checks.

Dead region: hidden automatic refresh inside Navigation, full warm-up before every Navigation run, or no automatic check.

## Candidate Verdicts

### Candidate 1: Keep refresh manual; user remembers to run it

Verdict: KILL.

Prosecution: This preserves exactly the burden Navigation is meant to reduce. The user must remember an invisible precondition before each stale Navigation run.

Defense: It keeps Navigation pure and simple.

Collision: Simplicity loses because stale maps are too easy and too plausible.

Constructive seed: Keep refresh execution explicit, but make the check automatic.

### Candidate 2: Navigation silently runs refresh whenever it suspects staleness

Verdict: KILL.

Prosecution: It hides context mutation, can read too much, and makes Navigation slow and opaque.

Defense: It is convenient.

Collision: Convenience loses to traceability. Refresh must produce a visible sync brief/read set.

Constructive seed: Navigation may route to `navigator-refresh.md`, but the refresh output must be explicit.

### Candidate 3: Full warm-up before every project-level Navigation

Verdict: KILL.

Prosecution: It is safe but too expensive. It defeats the speed benefit of warm-up and refresh.

Defense: It avoids stale state.

Collision: The defense is valid only for missing or globally stale anchors. It should be fallback, not default.

Constructive seed: Full warm-up remains escalation.

### Candidate 4: Warning-only stale preflight

Verdict: REFINE.

Prosecution: A warning still allows stale output to look like a normal map.

Defense: Sometimes the user may want a quick thin map despite missing context.

Collision: Warning-only is insufficient as default, but survives as `thin_allowed` when explicitly chosen and clearly marked in telemetry.

### Candidate 5: Automatic freshness preflight with delegated refresh

Verdict: SURVIVE.

Prosecution: It adds another step to Navigation invocation.

Defense: The step can be cheap for local/fresh cases and is exactly where stale context should be caught.

Collision: The added step is justified because it prevents misleading maps while keeping refresh out of Navigation's core operation.

Constructive output: Patch `homegrown/navigation/SKILL.md` with a `Freshness Preflight` before Step 1.

## Assembly Check

The surviving assembly is:

```text
/navigation invoked
  -> mandatory reference read
  -> freshness preflight
  -> fresh_local/fresh_project: run Navigation normally
  -> refresh_needed: run navigator-refresh, then Navigation uses sync brief
  -> full_warmup_needed: stop and require v1/v2/v3
  -> thin_allowed: proceed but mark telemetry THIN
```

## Coverage Map

Covered:

- manual-only refresh;
- hidden refresh;
- full warm-up default;
- warning-only preflight;
- automatic preflight with delegation.

Remaining:

- exact wording for `homegrown/navigation/SKILL.md`;
- whether to patch Navigation telemetry in `references/navigation.md` now or after first use.

## Signal

TERMINATE with survivor: automatic freshness preflight with delegated refresh.

## Convergence Telemetry

Dimension coverage: complete for this design decision.

Adversarial strength: STRONG.

Landscape stability: STABLE.

Clean SURVIVE exists: yes.

Failure modes observed: no rubber-stamping; the convenient hidden-refresh option was killed.

Overall: PROCEED.

