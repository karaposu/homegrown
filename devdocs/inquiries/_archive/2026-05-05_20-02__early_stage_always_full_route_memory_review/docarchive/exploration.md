# Exploration: Early Stage Always Full Route Memory Review

## Mode And Entry Point

Mode: mixed artifact and possibility exploration.

Entry point: signal-first. The user supplied a concrete hypothesis: early-stage Homegrown may need robustness and breakthrough-seeking enough to justify always running full Route Memory Review, even when slower and token-expensive.

## Exploration Cycle 1

### Scan

Scanned the current inquiry branch and the latest route-memory finding:

- `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/_branch.md`
- `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/finding.md`

The latest finding says:

- every Navigation run should classify `route_memory_status`;
- full Route Memory Review runs only for `review_needed`;
- `review_needed` requires relevant old route memory with unresolved current disposition and plausible material effect;
- if full review runs, `route_memory_review.md` is mandatory;
- no full review means no review file, but status/reason should be recorded.

### Signals Detected

1. The user's new argument introduces a phase condition: Homegrown is early-stage and still seeking breakthroughs.
2. The latest finding optimizes for conceptual cleanliness and artifact hygiene.
3. Early-stage breakthrough work may value recall, cross-run memory, and stale-route prevention more than efficiency.
4. The real pressure is not "always review everything forever." It is whether the trigger threshold should be lower while the system is immature.

### Resolution Decision

Zoom in on the phase-policy question:

```text
Should early-stage Homegrown use a more conservative default than the stable-state trigger?
```

### Probe

The latest finding already has a conservative guardrail:

```text
If stale route resurrection or route amnesia is plausible, choose review_needed.
```

The user's new point suggests that, early on, plausibility may be assumed more often because the system has not yet calibrated what route memory matters.

This suggests a candidate:

```text
Early-stage policy = route-memory-present -> full review by default,
with exceptions for no source, already consumed review, explicit thin run, or clearly disposable local map.
```

### Frontier State

Frontier advancing. The likely design space is not binary "always vs never." It includes a phase-based policy.

### Confidence Map Update

- Confirmed: latest finding is conditional, not always-full.
- Confirmed: user is asking whether early-stage conditions change the default.
- Scanned: latest trigger and artifact rule.
- Unknown: how many old route-memory artifacts exist and how costly full review currently is.

## Exploration Cycle 2

### Scan

Scanned earlier related findings and current Navigation docs:

- `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary/finding.md`
- `devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity/finding.md`
- `homegrown/navigation/SKILL.md`
- `homegrown/protocols/navigation_context_intake.md`

Key artifact facts:

- `homegrown/navigation/SKILL.md` currently has Freshness Preflight but does not yet include the latest `route_memory_status` policy.
- `homegrown/protocols/navigation_context_intake.md` still routes prior-map overlay mainly through project-level warm-up language.
- The latest findings are ahead of the implementation.

### Signals Detected

1. Because the policy is not yet implemented, early Navigation runs are likely to be hand-executed and error-prone.
2. The file-necessity finding says the correct bloat control is when to run Route Memory Review, not hiding the review.
3. The trigger-boundary finding already killed "full review every run" in a general stable-policy context.
4. But the trigger-boundary finding also left a monitoring hook: if users repeatedly ask why no review file was created, consider no-op review artifacts.
5. The latest finding left another monitoring hook: reopen the trigger if Navigation later resurrects stale routes or if routine full reviews produce no-op files.

### Resolution Decision

Zoom in on evidence of real old-route risk in this repo.

### Probe

Scanned existing Navigation maps:

- `devdocs/navigation/next_load_bearing_after_navigation_warmup.md`

This map contains routes around warm-up handoff, adding a warm-up README/index, prior-map overlay, structural checker, and other post-warm-up directions.

Later findings have already changed some of that route memory. For example, the user later pushed against unnecessary README/index artifact bloat, and route-memory review itself has gone through multiple revisions.

This is evidence that old Navigation maps can become stale quickly in the current phase. It strengthens the user's concern.

### Frontier State

Frontier stabilizing around a phase distinction:

- stable-state policy: full review only when material unresolved route-memory effect is detected;
- early-stage robust policy: lower the threshold because old route memory is likely to contain important mistakes, supersessions, and breakthrough clues.

### Confidence Map Update

- Confirmed: old route-memory source exists.
- Confirmed: the old map contains routes affected by later discussions.
- Confirmed: active docs are not yet patched to the latest policy.
- Inferred: early-stage robust mode has a real safety rationale.
- Unknown: exact stop condition for leaving robust mode.

## Exploration Cycle 3

### Scan

Generated the policy possibility space:

1. Absolute always-full review for every Navigation run.
2. Full review whenever any route-memory source exists.
3. Full review by default during early-stage Navigation, with explicit exceptions.
4. Keep latest `review_needed` trigger unchanged.
5. Keep latest trigger but add "early-stage uncertainty" as a broad reason to mark `review_needed`.
6. Run periodic full route-memory audits instead of per-run full review.

### Signals Detected

1. Absolute always-full review includes cases where no route-memory source exists. That creates empty work.
2. Review whenever any source exists is robust but may overread irrelevant maps.
3. Early-stage default with exceptions preserves robustness without pretending no-op reviews are valuable.
4. Keeping the latest trigger unchanged may underfit the user's current strategic priority: breakthroughs over efficiency.
5. Periodic audits may miss a stale route exactly when Navigation is about to use it.

### Resolution Decision

Probe the strongest candidate:

```text
Early-stage robust default: if prior route-memory source exists, run full Route Memory Review before Navigation unless a narrow exception applies.
```

### Probe

This candidate changes the latest finding in one specific way:

```text
review_needed shifts from "material effect proven or plausible"
to "route-memory source present and not safely excepted"
while Homegrown is in early-stage discovery mode.
```

It does not change:

- old maps remain immutable;
- if review runs, `route_memory_review.md` is mandatory;
- Navigation consumes review before map generation;
- review is not Navigation.

### Frontier State

Frontier stable enough for Sensemaking. The core unknown is not what options exist, but whether early-stage conditions justify a phase-specific policy override.

### Confidence Map Update

- Confirmed: absolute always-full is broader than the real need.
- Confirmed: route-memory-present default is a plausible early-stage robust policy.
- Inferred: the best answer will likely be phase-based, not permanent.
- Unknown: exact exit criteria from early-stage robust mode.

## Jump Scan

Scanned the opposite direction: what if always-full review harms breakthroughs?

Potential harms:

- old maps can anchor the system to stale route frames;
- reviewing every old map can make history feel more authoritative than current inquiry output;
- time and token cost can reduce iteration speed;
- review artifacts can become another memory stream that future Navigation must reconcile;
- excessive pre-work can delay the evidence-producing builder loop the current Navigation map says is important.

This jump scan prevents a one-sided "more context is always better" conclusion.

The counter-signal does not kill early-stage robust review. It means the policy must guard against old-map authority drift and must have exit criteria.

## Convergence Check

Frontier stability: yes. The relevant artifacts, risks, and policy space are mapped.

Declining discovery rate: yes. Additional scans refine the same phase-policy choice.

Bounded gaps: mostly. The remaining gap is a sensemaking decision: whether early-stage robustness should lower the trigger, and how to define the exit gate.

Exploration converged.

## Territory Overview

The territory has five regions:

1. Latest stable trigger policy: full review only for `review_needed`.
2. Early-stage strategic condition: robustness and breakthrough-seeking are valued above speed.
3. Artifact culture: meaningful Route Memory Review writes `route_memory_review.md`.
4. Current implementation gap: Navigation docs are not yet patched to the latest status model.
5. Cost/risk side: full review can cause old-map authority drift, token cost, and artifact accumulation.

## Inventory

Policy candidates:

| Candidate | Description | Initial Confidence |
| --- | --- | --- |
| Absolute always-full | Run full review every Navigation run, even if no route memory exists. | low |
| Source-present always-full | Run full review whenever any old route-memory source exists. | medium |
| Early-stage robust default | In early-stage mode, run full review by default when route memory exists, with narrow exceptions. | high |
| Latest trigger unchanged | Keep unresolved-material-effect trigger exactly as written. | medium |
| Latest trigger plus broad uncertainty | Keep latest trigger but treat early-stage uncertainty as a common `review_needed` reason. | high |
| Periodic audit | Do occasional full route-memory reviews independent of Navigation runs. | medium-low |

## Signal Log

| Signal | Status | Meaning |
| --- | --- | --- |
| User values breakthroughs over speed right now | confirmed | Trigger policy can be phase-sensitive. |
| Old route map exists | confirmed | This is not a hypothetical memory problem. |
| Old map contains routes affected by later findings | confirmed | Stale route resurrection risk is real. |
| Latest policy is not implemented yet | confirmed | Manual execution risk is higher. |
| Absolute always-full creates no-op work | confirmed | Need exceptions. |
| Old-map authority drift risk exists | confirmed | Full review must treat old maps as evidence, not truth. |

## Confidence Map

| Region | Confidence | Reason |
| --- | --- | --- |
| Early-stage robustness pressure | confirmed | Direct user input and current project phase. |
| Need for Route Memory Review artifact when review runs | confirmed | Prior finding and user correction. |
| Absolute always-full is too broad | confirmed | No route memory means no review object. |
| Phase-based lowering of trigger | scanned | Strongly supported but needs sensemaking. |
| Exit criteria from robust mode | unknown | Needs later discipline work. |
| Exact implementation patch | unknown | Out of scope for Exploration. |

## Frontier State

The exploration frontier is stable. The next discipline should decide between:

- keeping the latest `review_needed` trigger unchanged;
- replacing it with early-stage review-by-default when route memory exists;
- framing early-stage mode as a temporary override with explicit exit criteria.

## Gaps And Recommendations

Sensemaking should focus on the real distinction:

```text
Should "early-stage discovery mode" lower the burden of proof for Route Memory Review?
```

It should avoid the false binary:

```text
always full review forever
vs
material-effect trigger forever
```

The more natural design space is phase-based:

```text
early-stage robust mode:
  route memory present -> full review by default unless safely excepted

stable mode:
  full review only when unresolved material effect is detected
```
