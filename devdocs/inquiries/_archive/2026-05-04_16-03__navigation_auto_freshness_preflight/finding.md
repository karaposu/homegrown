---
status: active
refines:
  - devdocs/inquiries/2026-05-04_15-47__sync_idle_navigator_recent_developments/finding.md
impacts:
  - homegrown/navigation/SKILL.md
  - homegrown/navigation/warmup/navigator-refresh.md
---
# Finding: Navigation Auto Freshness Preflight

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-04_15-47__sync_idle_navigator_recent_developments/finding.md`

**Revision trigger:** The user refined the idea. Instead of treating refresh as something the human must remember before Navigation, the user proposed that the Navigation session should check freshness and sync automatically before the Navigation command runs.

**What's preserved:** Refresh remains a context-preparation operation. Navigation still produces route maps; it does not become full warm-up or route selection.

**What's changed:** The previous finding's rejection of "Navigation-internal refresh" should be narrowed. Hidden refresh inside Navigation remains wrong, but an explicit automatic freshness preflight inside Navigation is right.

**What's new:** Navigation should automatically run a freshness preflight before producing a map.

**Migration:** Patch `homegrown/navigation/SKILL.md` with a `Freshness Preflight` section that delegates bounded stale cases to `homegrown/navigation/warmup/navigator-refresh.md`.

## Question

Should a Navigation session automatically check freshness and synchronization before running the Navigation command?

The goal is to decide whether automatic freshness checking belongs in the Navigation command, clarify the boundary between checking freshness and executing refresh, and identify what should be patched if the idea survives.

## Finding Summary

- Yes. Navigation should automatically check freshness before it produces a Navigation map.

- The automatic part should be the **preflight check**, not hidden context refresh.

- Navigation should own the question: "Is the context fresh enough to map routes from?"

- `navigator-refresh.md` should own the operation: "Update a stale warmed context and produce a sync brief."

- Full v1/v2/v3 warm-up should remain the fallback when the session has no valid freshness anchor, the project boundary changed globally, or the stale state is too broad for a delta refresh.

- The practical implementation is a `Freshness Preflight` in `homegrown/navigation/SKILL.md`, before ordinary route-map generation.

- The preflight should have explicit outcomes: `fresh_local`, `fresh_project`, `refresh_needed`, `full_warmup_needed`, and `thin_allowed`.

## Finding

### 1. The User's Correction Is Right

If refresh is only a manual thing the user must remember, Navigation remains fragile.

The user would have to know:

```text
This session was warmed.
Another session changed the project.
The old map is stale.
I must run refresh before Navigation.
```

That is too much hidden state for the human to carry. It recreates the same burden Navigation is meant to reduce.

Navigation should therefore check freshness automatically before producing a map.

### 2. Automatic Check Does Not Mean Hidden Refresh

The important distinction is:

```text
automatic freshness check = good
hidden automatic refresh = risky
```

The previous finding killed Navigation-internal refresh because hidden refresh would blur boundaries. That remains correct if Navigation silently reads recent files, mutates its context, and then emits a map without a visible read set or sync brief.

But a preflight gate is different.

Navigation can ask:

```text
What kind of input is this?
Is it local or project-level?
Does it already include a current-state brief or sync brief?
Is there a freshness anchor?
Are there signs this context is stale?
```

If the answer is "fresh enough," Navigation proceeds normally.

If the answer is "stale but bounded," Navigation routes through `navigator-refresh.md`.

If the answer is "no valid anchor or globally stale," Navigation stops and requires full warm-up.

That preserves the boundary.

### 3. The Preflight Outcomes Should Be Explicit

Use these outcomes:

```text
fresh_local
fresh_project
refresh_needed
full_warmup_needed
thin_allowed
```

`fresh_local` means the input is a local inquiry folder or file path whose needed context is self-contained. Project-wide refresh is not needed.

`fresh_project` means a current-state brief, sync brief, or explicit user-provided current context is fresh enough for this Navigation run.

`refresh_needed` means the session was previously warmed, but bounded recent changes may affect the map. Run `homegrown/navigation/warmup/navigator-refresh.md`, produce or read a sync brief, then continue.

`full_warmup_needed` means the session has no valid anchor, the context boundary changed globally, or the stale state is too broad for a delta refresh. Run `navigator-warmup1.md`, `navigator-warmup2.md`, and `navigator-warmup3.md` before Navigation.

`thin_allowed` means the user explicitly accepts a thin map despite missing freshness. The Navigation telemetry should say THIN and preserve the missing-context warning.

### 4. What Navigation Should Do With Each Outcome

The command behavior should be:

```text
fresh_local -> proceed with normal Navigation.
fresh_project -> proceed with normal Navigation.
refresh_needed -> run or request navigator-refresh; use sync brief; then proceed.
full_warmup_needed -> stop and request full warm-up.
thin_allowed -> proceed only if user explicitly asked; mark output THIN.
```

The default should not be warning-only continuation. A stale route map can look coherent while omitting the most important new direction.

### 5. This Belongs In `homegrown/navigation/SKILL.md`

The implementation target is `homegrown/navigation/SKILL.md`.

Add the preflight after the mandatory reference read and before the ordinary input-read step.

Do not duplicate the full refresh procedure inside Navigation. The Navigation command should point to:

```text
homegrown/navigation/warmup/navigator-refresh.md
```

for bounded stale cases.

This keeps responsibilities clean:

```text
Navigation = checks freshness + maps routes
navigator-refresh = updates stale context + writes sync brief
warmup v1/v2/v3 = builds baseline context
```

### 6. This Also Helps Multi-Head Navigation Later

Automatic preflight matters even more once multiple Navigation heads or sessions exist.

Without preflight, each session can produce a valid-looking map from a different context vintage. The user becomes the manual consistency layer again.

With preflight, each Navigation run begins by asking whether its context is current enough. That does not make the system fully autonomous, but it prevents a common stale-map failure.

## Next Actions

### MUST

- **What:** Patch `homegrown/navigation/SKILL.md` with a `Freshness Preflight` section before normal input reading.
  **Who:** Navigation discipline file.
  **Gate:** Before relying on Navigation after idle warmed sessions or multi-session work.
  **Why:** Prevents stale Navigation maps by default.

- **What:** The preflight must delegate bounded stale cases to `homegrown/navigation/warmup/navigator-refresh.md`.
  **Who:** Same Navigation patch.
  **Gate:** Same patch.
  **Why:** Keeps refresh execution outside Navigation while making the check automatic.

- **What:** Add freshness outcome reporting to Navigation telemetry.
  **Who:** `homegrown/navigation/SKILL.md`, and later `homegrown/navigation/references/navigation.md` if the field becomes stable.
  **Gate:** Same patch or after first trial.
  **Why:** Makes it auditable whether Navigation ran fresh, refreshed, escalated, or thin.

### COULD

- **What:** Patch `homegrown/protocols/navigation_context_intake.md` after the Navigation preflight patch.
  **Who:** Context-intake wrapper.
  **Gate:** If future sessions still load the wrapper and miss the preflight/refresh lifecycle.
  **Why:** The wrapper can become a small routing explanation instead of a detailed duplicated procedure.

- **What:** Add a warm-up README explaining the lifecycle.
  **Who:** `homegrown/navigation/warmup/README.md`.
  **Gate:** Before expecting other sessions to operate Navigation without the user's explanation.
  **Why:** Makes cold warm-up, post-v3 overlay, refresh, and Navigation preflight easy to discover.

### DEFERRED

- **What:** Automatic file-watcher or persistent observer.
  **Gate:** Revive only after at least three manual/preflight refreshes show stable invalidation rules.
  **Why (if revived):** It could reduce burden later, but preflight should prove the contract first.

## Reasoning

Manual-only refresh was killed. It keeps Navigation clean, but it leaves the human responsible for detecting stale context every time.

Hidden automatic refresh was killed. It is convenient, but it hides what was read and can make Navigation slow or opaque.

Full warm-up before every Navigation run was killed. It is safe but too expensive, and it destroys the benefit of session warm-up.

Warning-only stale checks were refined. They are not enough as the default because a stale map can still look normal. They survive only as `thin_allowed` when the user explicitly accepts thin context.

Automatic freshness preflight survived. It gives Navigation the right entry safety check while preserving the boundary between checking context and refreshing context.

The final boundary is:

```text
Navigation owns the preflight.
navigator-refresh owns the sync brief.
warm-up v1/v2/v3 owns baseline context.
```

## Open Questions

### Monitoring

After the first Navigation run with preflight, check whether it detected stale state correctly and whether the resulting map improved without extra user steering.

### Refinement Triggers

Move freshness telemetry into `homegrown/navigation/references/navigation.md` if two Navigation runs use the field successfully.

Create deeper automation only if repeated preflight runs reveal stable invalidation rules.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

hmm, i am thinking freshing and sycning should be something navigation session should check automatically before running navigation command...
```

</details>

