---
status: active
refines:
  - devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/finding.md
impacts:
  - homegrown/navigation/SKILL.md
  - homegrown/protocols/navigation_context_intake.md
  - homegrown/navigation/warmup/navigator-prior-map-overlay.md
---
# Finding: Early Stage Always Full Route Memory Review

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/finding.md`

**Revision trigger:** The user argued that Homegrown is early-stage, needs breakthroughs, and should prefer robustness over speed and token efficiency until the system can optimize its own mechanisms.

**What's preserved:** Full Route Memory Review still writes `route_memory_review.md` when it runs.

**What's preserved:** PastNavigationMemoryFile entries remain historical evidence, not current truth.

**What's preserved:** Full Route Memory Review still must not become Navigation. Review classifies past Navigation memory; Navigation maps current possible routes.

**What's changed:** The prior `review_needed` trigger is now treated as the mature optimized policy, not the best current default.

**What's new:** During early-stage discovery mode, durable Navigation runs should run full Route Memory Review by default whenever a `PastNavigationMemoryFile` exists.

**Migration:** Patch Navigation context intake to carry a phase flag such as `navigation_phase: early_stage_discovery`, and make `past_navigation_memory_file: present` default to full review in that phase.

## Question

Since Homegrown is early-stage and needs breakthroughs, should Navigation always run full Route Memory Review for robustness even if it is slower and token-expensive, until the system can optimize its own mechanisms?

Goal: decide whether the latest Route Memory Review trigger should change under early-stage conditions. The answer should weigh robustness, breakthrough-seeking, token/time cost, stale route resurrection risk, artifact bloat, and future self-optimization.

## Finding Summary

- The user's instinct is correct: the current phase should bias toward robustness, not efficiency.

- Do not run full Route Memory Review literally every Navigation run. If no `PastNavigationMemoryFile` exists, there is nothing to review.

- `PastNavigationMemoryFile` means any existing file that records earlier Navigation routes, route states, blockers, stale routes, superseded routes, or route decisions.

- Use an early-stage robust mode:

```text
durable Navigation map + PastNavigationMemoryFile exists
  -> run full Route Memory Review by default
```

- Skipping review in early-stage robust mode requires an explicit exception and a recorded reason.

- Valid exceptions are narrow: no `PastNavigationMemoryFile`, current applicable review already consumed, user explicitly accepts thin/fast context, or a non-durable disposable local run.

- When full review runs, it still writes `route_memory_review.md`.

- Review-by-default needs an anti-authority rule: PastNavigationMemoryFile entries are evidence, not current truth, and carry-forward decisions require current evidence.

- Robust mode must produce exit telemetry so the system can later return to the narrower mature trigger from `route_memory_preflight_reevaluation`.

## Finding

### 1. The answer is yes, but not literally always

Early-stage Homegrown should run full Route Memory Review more often than the latest finding required.

The reason is structural. The latest finding asks the runner to decide whether past Navigation memory has an unresolved material effect. That is a mature-system judgment. It assumes the runner can safely tell which earlier routes matter and which do not.

Homegrown is not yet calibrated enough for that to be the default. The project is still changing quickly, Navigation maps can become stale quickly, and route-memory rules themselves are still being revised.

So the current default should shift from:

```text
review only when material effect is detected
```

to:

```text
review unless it is explicitly safe to skip
```

That does not mean full review when there is no `PastNavigationMemoryFile`. Route Memory Review is an operation over past Navigation memory. If no `PastNavigationMemoryFile` exists, the right record is a status line in Navigation context preparation, not a `route_memory_review.md` file.

### 2. The current policy should be early-stage robust mode

Use this as the current rule:

```text
During early-stage discovery mode, if Navigation will produce a durable map and any `PastNavigationMemoryFile` exists, run full Route Memory Review before Navigation writes the new map.
```

A `PastNavigationMemoryFile` includes:

- prior `devdocs/navigation/*.md` maps;
- `navigation.md` inside an inquiry folder;
- prior `route_memory_review.md` files;
- multi-resolution `_frontier.md` ledgers;
- sync briefs or warm-up outputs that mention route-state changes;
- any input whose purpose is continuation memory for routes.

This rule should apply across bounded and project-level Navigation. The trigger is not size. The trigger is whether a `PastNavigationMemoryFile` exists under early-stage discovery mode.

### 3. Skips must be narrow and explicit

In early-stage robust mode, skip full review only when one of these exceptions applies:

```text
no_past_navigation_memory_file
already_consumed
thin_or_fast_accepted
disposable_local
```

Meanings:

- `no_past_navigation_memory_file`: no `PastNavigationMemoryFile` exists in the input or needed context.
- `already_consumed`: a current applicable `route_memory_review.md` has already been read.
- `thin_or_fast_accepted`: the user explicitly accepts a thinner or faster Navigation run.
- `disposable_local`: the Navigation run is non-durable and local enough that past Navigation memory cannot affect any durable map.

Every skip must record a reason in Navigation context preparation or telemetry.

Example:

```yaml
navigation_phase: early_stage_discovery
route_memory_policy: past_navigation_memory_file_present_review_default
route_memory_status: skipped
past_navigation_memory_file: none
skip_reason: no_past_navigation_memory_file
route_memory_review: none
```

This keeps explicitness without generating a fake review file.

### 4. Full review must still write `route_memory_review.md`

When full Route Memory Review runs, write:

```text
devdocs/navigation_context/<YYYY-MM-DD_HH-MM__route_memory_review_<slug>>/route_memory_review.md
```

The file remains mandatory because full review creates current interpretation of historical route evidence.

The review should classify earlier routes from PastNavigationMemoryFile entries into categories such as:

- carry forward;
- retire;
- keep blocked;
- needs check;
- ignore for this question.

That classification is current route-memory authority. It should be citable, inspectable, and available to the Navigation run that follows.

### 5. Review-by-default needs anti-authority safeguards

Running review more often increases one risk: PastNavigationMemoryFile entries may start to feel too authoritative.

The safeguard is simple:

```text
PastNavigationMemoryFile entries are evidence, not truth.
```

The review should not carry earlier routes forward merely because they appeared in a PastNavigationMemoryFile.

Carry-forward decisions need current evidence or a clear current reason.

Retire, ignore, supersede, and keep-blocked are normal review outcomes. A review that retires earlier routes is not a failed review. It is doing the job.

The review must not edit PastNavigationMemoryFile entries. They remain historical snapshots.

### 6. Robust mode must be temporary and measured

Early-stage robust mode should not become permanent by inertia.

Every full review should record exit telemetry:

```yaml
review_changed_navigation_input: yes/no
caught_stale_route: yes/no
preserved_useful_blocked_route: yes/no
review_result: decisions | no_op | mostly_irrelevant
cost_burden: low | medium | high
```

This telemetry is what lets the system later optimize itself.

The mature optimized policy from `route_memory_preflight_reevaluation` should return when evidence shows the system can safely classify past Navigation memory without reviewing every case where `past_navigation_memory_file: present`.

## Next Actions

### MUST

- **What:** Patch `homegrown/navigation/SKILL.md` to include `navigation_phase` and route-memory policy in Freshness Preflight or Navigation telemetry.
  **Who:** Navigation skill.
  **Gate:** Before applying the early-stage robust policy in normal Navigation runs.
  **Why:** The runner needs to know whether it is using early-stage robust mode or stable optimized mode.

- **What:** Patch `homegrown/protocols/navigation_context_intake.md` so `past_navigation_memory_file: present` routes to full Route Memory Review by default during early-stage discovery mode.
  **Who:** Navigation context router.
  **Gate:** Same patch set as the Navigation skill update.
  **Why:** This changes the burden of proof from "prove review is needed" to "prove review is safely unnecessary" during the current phase.

- **What:** Patch `homegrown/navigation/warmup/navigator-prior-map-overlay.md` so the review template includes anti-authority safeguards.
  **Who:** Route Memory Review routine.
  **Gate:** Before review-by-default is used.
  **Why:** More frequent review is only safe if PastNavigationMemoryFile entries are explicitly treated as evidence, not current truth.

- **What:** Add exit telemetry fields to `route_memory_review.md`.
  **Who:** Route Memory Review routine.
  **Gate:** Same patch as anti-authority safeguards.
  **Why:** The system needs evidence to decide when robust mode can be relaxed.

### COULD

- **What:** Add an explicit user opt-out phrase such as "thin/fast Navigation accepted."
  **Who:** Navigation skill.
  **Gate:** After robust mode is patched.
  **Why:** The user may sometimes knowingly prefer speed over route-memory safety.

- **What:** Add periodic global route-memory audit later.
  **Who:** Navigation support routine.
  **Gate:** After at least five route-memory review files exist.
  **Why:** Periodic audit may help global cleanup, but it does not replace pre-Navigation review right now.

### DEFERRED

- **What:** Review sampling, such as reviewing every Nth Navigation run.
  **Gate:** After at least ten Navigation runs with route-memory status and review outcome telemetry.
  **Why (if revived):** Sampling may reduce cost later, but it is too weak while the system is uncalibrated.

- **What:** Return to the mature material-effect trigger as the default.
  **Gate:** When repeated reviews show low stale-route catch rate, low map impact, reliable skip decisions, and review cost high enough to block evidence-producing work.
  **Why (if revived):** The mature trigger is more efficient once the system has calibration evidence.

## Reasoning

The absolute always-full policy was killed. It would run full review even when no `PastNavigationMemoryFile` exists. That creates empty work and fake artifacts.

The `PastNavigationMemoryFile`-gated early robust policy survived. It matches the user's current priority: robustness and breakthrough preservation matter more than speed. It also avoids no-memory-file no-op reviews.

The latest material-effect trigger was refined, not discarded. It remains the right target for stable optimized mode. It is too judgment-heavy as the current default because Homegrown has not yet calibrated which earlier routes matter.

Periodic global audit was deferred. It may help later, but it cannot protect the specific Navigation run that is about to consume past Navigation memory.

Review sampling was killed for the current phase. Sampling is an optimization strategy, and the project is not yet ready to optimize this mechanism.

Two equal modes, robust and fast, were refined. Robust should be the default during early-stage discovery mode. Fast or thin Navigation should be an explicit user opt-out, not an equal default choice.

Anti-authority safeguards survived because they are necessary. Review-by-default is dangerous if PastNavigationMemoryFile entries are treated as truth. The review must classify earlier routes against current evidence.

Exit telemetry survived because it answers the user's "until the system can optimize itself" condition. Without telemetry, the system has no way to know when to stop paying the higher review cost.

The key contradiction across the inquiry was this:

```text
more review improves robustness
but more review can increase old-map authority drift
```

The resolution is:

```text
review more often, but make review a filter against current evidence rather than an import of earlier routes
```

## Open Questions

### Monitoring

After five full Route Memory Reviews, inspect how many reviews changed the next Navigation map, caught stale routes, or preserved useful blocked routes.

After five full Route Memory Reviews, inspect how many were `no_op` or `mostly_irrelevant`.

### Refinement Triggers

Reopen early-stage robust mode if full reviews repeatedly produce no route-memory decisions and cost burden is `high`.

Reopen the mature material-effect trigger if a skipped review allows stale route resurrection or route amnesia.

Reopen the anti-authority template if reviews routinely carry earlier routes forward without current evidence.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

since we are early stage and desperate for breakthroughs, and it is important for us to go robuts even so it means we are slower and using much more tokens.. until we reach to a point where systme cna optimize itself's mechanisms maybe we should always run full review ?
```

Embedded classic MVL skill text was omitted from this source block because the active user request invoked MVL+ and the pasted classic skill body did not change the substantive route-memory question.

</details>
