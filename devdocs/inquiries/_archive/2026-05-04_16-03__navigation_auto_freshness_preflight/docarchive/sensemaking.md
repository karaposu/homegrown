# Sensemaking: Navigation Auto Freshness Preflight

## SV1 - Baseline Understanding

The user is right that asking humans to remember to refresh before Navigation recreates the burden Navigation is supposed to reduce.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Navigation should enumerate routes, not select final moves.
- Refresh prepares context; it is not the Navigation map itself.
- Stale context produces misleading route maps.
- Users should not need to remember every freshness/sync rule manually.
- The system must preserve read sets, source authority, missing context, and confidence limits.

### Key Insights

- Automatic checking is different from automatic hidden refreshing.
- A preflight check can improve safety while preserving discipline boundaries.
- The Navigation command is the right place to notice that it is about to use stale context.
- `navigator-refresh.md` is the right place to execute delta refresh.

### Structural Points

- Freshness preflight is an entry gate.
- Navigator refresh is a support routine.
- Navigation remains the route-map producer.
- Full warm-up remains a fallback.

### Foundational Principles

- Do not make stale context easy.
- Do not hide context mutation.
- Route stale cases to the smallest sufficient context repair.

### Meaning-Nodes

- freshness preflight
- stale-context gate
- automatic check
- delegated refresh
- no hidden sync

## SV2 - Anchor-Informed Understanding

The user's proposal should be accepted if "automatic" means Navigation automatically checks freshness before producing a map.

## Phase 2 - Perspective Checking

### Technical / Logical

Navigation has access to its input and can inspect whether the input is a current-state brief, sync brief, prior Navigation map, inquiry folder, or raw text. It can also check whether the task is project-level or local. This is enough to run a preflight classification.

### Human / User

The user should be able to run Navigation without remembering to manually ask for refresh first. The system should catch obvious stale-context risks.

### Strategic / Long-Term

Automatic preflight is a step toward Navigation being a usable operating layer rather than a brittle manual ritual. It also prepares for multi-head sessions because each head can gate itself before producing route maps.

### Risk / Failure

If the preflight silently refreshes too much, Navigation becomes slow and opaque. If it merely warns but continues, stale maps remain possible. The preflight must have explicit outcomes.

### Resource / Feasibility

Adding a preflight section to `homegrown/navigation/SKILL.md` is feasible. It can initially be manual/protocolic: check freshness, decide fresh/stale/unknown, then proceed, refresh, or stop.

### Definitional / Consistency

The previous finding killed "Navigation-internal refresh." That kill remains valid for hidden refresh execution. It does not kill an explicit preflight that delegates refresh to the support routine.

## SV3 - Multi-Perspective Understanding

The right framing is:

```text
Navigation owns the freshness check.
navigator-refresh owns the refresh operation.
Navigation owns the final route map after context is fresh enough.
```

## Phase 3 - Ambiguity Collapse

### Ambiguity: Does automatic preflight violate Navigation's boundary?

**Strongest counter-interpretation:** Yes. Any freshness check inside Navigation pulls context intake into Navigation.

**Why the counter-interpretation fails:** A gate is not the same as doing the gated operation. Navigation already checks output structure and input type. A freshness preflight only decides whether context is safe enough to use or must be refreshed by another routine.

**Confidence:** HIGH.

**Resolution:** Automatic preflight is allowed if it is explicit, bounded, and delegates refresh.

**What is now fixed?** Navigation may check freshness before mapping.

**What is no longer allowed?** Navigation silently refreshing context without recording a sync brief or read set.

**What now depends on this choice?** `homegrown/navigation/SKILL.md` needs a preflight section.

### Ambiguity: Should preflight run before every Navigation invocation?

**Strongest counter-interpretation:** No. It will waste time on narrow inquiry-folder Navigation where all necessary context is inside the folder.

**Why the counter-interpretation fails:** A preflight check can be cheap and mode-aware. For local inquiry-folder Navigation it can say "local source, no project freshness refresh needed" and proceed.

**Confidence:** HIGH.

**Resolution:** Preflight should run every time, but it may resolve to `fresh/local` quickly.

**What is now fixed?** Preflight is automatic; refresh execution is conditional.

**What is no longer allowed?** Treating all Navigation invocations as project-level stale-session cases.

### Ambiguity: Should stale cases proceed with a warning?

**Strongest counter-interpretation:** Yes. Navigation could warn that context may be stale and still produce a map.

**Why the counter-interpretation fails:** A stale route map can look useful while omitting the most important new direction. Warning-only preserves the bad behavior.

**Confidence:** MEDIUM-HIGH.

**Resolution:** If stale and refresh is feasible, run or require refresh before Navigation. If refresh cannot be done, mark output as THIN or halt with escalation.

**What is now fixed?** Stale project-level Navigation should not proceed as if fresh.

## SV4 - Clarified Understanding

Navigation should automatically perform a freshness preflight before producing a map. The preflight should be cheap, explicit, and mode-aware.

## Phase 4 - Degrees-of-Freedom Reduction

Fixed:

- Preflight belongs in Navigation.
- Refresh execution belongs in `navigator-refresh.md`.
- Full warm-up remains fallback.
- Project-level stale cases should not silently proceed.

Eliminated:

- User-only responsibility for remembering refresh.
- Hidden refresh inside Navigation.
- Warning-only stale Navigation as the default.

Remaining:

- exact preflight outcome names;
- whether first implementation should auto-create sync briefs or ask the user.

## SV5 - Constrained Understanding

The implementation should be a `Freshness Preflight` section in `homegrown/navigation/SKILL.md` before normal map generation.

## SV6 - Stabilized Model

Automatic freshness checking should become part of Navigation's entry contract. Navigation should check whether its context is fresh, local, stale, or unknown. If stale, it should route through `navigator-refresh.md` before producing a route map. If unknown or globally stale, it should require full warm-up.

