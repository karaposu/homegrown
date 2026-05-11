# Exploration: Route Memory Preflight Reevaluation

## Mode And Entry Point

Mode: artifact exploration with a small possibility scan.

Entry point: signal-first. The user already named the signal: the proposed answer feels messy because Navigation should not split unnaturally between "big" and "bounded" runs.

## User's First Question

The question is not just "should Route Memory Review exist?" It is:

```text
What is the clean operational boundary between ordinary Navigation context intake, old-route-memory reconciliation, and generation of route_memory_review.md?
```

The reason it feels messy is that the previous answer corrected one bad distinction while leaving several concepts partially overlapped:

- "Every Navigation run should do a cheap Route-Memory Preflight" sounds like a new named operation, but it may only be ordinary context intake.
- "Full Route Memory Review runs when old maps may affect the new map" is directionally right, but "may affect" is too broad unless it is made operational.
- "If full review runs, write route_memory_review.md" fits Homegrown explicitness, but only if "full review" is a real cognitive operation, not a routine no-op check.
- "Route-memory dependency" is cleaner than "project-level vs bounded," but it still needs a threshold. Otherwise every old `navigation.md` becomes a possible dependency.
- Navigation's core job is current route enumeration. Route Memory Review must support that job without becoming a second Navigation map.

## Exploration Cycle 1

### Scan

Scanned the active Navigation protocol and reference:

- `homegrown/navigation/SKILL.md`
- `homegrown/navigation/references/navigation.md`
- `homegrown/navigation/warmup/navigator-prior-map-overlay.md`
- `homegrown/protocols/navigation_context_intake.md`

Scanned the prior findings being reevaluated:

- `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary/finding.md`
- `devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity/finding.md`
- `devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity/finding.md`

### Signals Detected

1. Navigation already has a `Freshness Preflight` that runs for every invocation.
2. `navigator-prior-map-overlay.md` says the prior-map routine runs only when prior route memory matters and should not run before every Navigation invocation.
3. The older overlay routine still defaults to inline output unless durable handoff is needed, while the later file-necessity finding says that if Route Memory Review runs, the file should be mandatory.
4. The latest trigger-boundary finding says "every Navigation run should include cheap Route-Memory Preflight," but the existing Navigation skill does not yet define route-memory status as part of its preflight.
5. Navigation's reference defines Navigation as a forward-looking boundary discipline that enumerates possible next directions. Route Memory Review is backward/current reconciliation of old route records. These are adjacent but different operations.

### Resolution Decision

Zoom in on the boundary between:

- cheap route-memory detection;
- full old-route reconciliation;
- writing `route_memory_review.md`;
- Navigation's own route enumeration.

This is the highest-signal region because the user is not objecting to route memory itself. The objection is to an unnatural operational split.

### Probe

The current docs contain three partially competing models:

1. `navigator-prior-map-overlay.md`: run after project warm-up when prior maps matter; save only for durable handoff.
2. `route_memory_review_file_necessity`: if the review operation runs, write `route_memory_review.md`; control bloat by not running the operation unnecessarily.
3. `route_memory_review_trigger_boundary`: every Navigation run gets cheap Route-Memory Preflight; full review runs on route-memory dependency, not project size.

The messy part is that these three are not yet normalized into one lifecycle. The "cheap preflight" may be just a classification field inside Navigation Freshness Preflight, while "full Route Memory Review" is a separate context-preparation operation with a required artifact.

### Frontier State

Frontier advancing. The major artifact regions are known, and the central ambiguity has been isolated: what threshold turns ordinary route-memory detection into the full review operation?

### Confidence Map Update

- Confirmed: Navigation is not supposed to mutate old maps.
- Confirmed: Navigation should not treat old route maps as current truth.
- Confirmed: Homegrown favors explicit Markdown artifacts for meaningful operations.
- Scanned: existing Navigation freshness/context intake path.
- Inferred: the correct boundary likely cannot be project-level vs bounded.
- Unknown: exact wording for the clean trigger.

## Exploration Cycle 2

### Scan

Scanned how Navigation itself is defined:

- It is a boundary discipline.
- It looks forward.
- It transforms current cycle or project state into a complete possibility-space map.
- It must avoid recency bias and route-state omission.
- It has required route-card fields and telemetry.

### Signals Detected

1. Route memory is not an input category like "current C verdicts"; it is historical evidence that can bias current route enumeration.
2. The risk is asymmetric:
   - ignoring meaningful old routes causes route amnesia;
   - accepting old maps as current truth causes stale route resurrection.
3. Route Memory Review only has value when old route memory needs a current disposition before enumeration.
4. A cheap check is natural if it is a small status classification in context intake.
5. A separate preflight routine is less natural if it becomes another mandatory mini-protocol before every Navigation run.

### Resolution Decision

Zoom in on trigger semantics. The phrase "old maps may affect the new map" needs sharpening.

### Probe

Possible meanings of "may affect":

- Too broad: prior Navigation maps exist somewhere in the project.
- Still too broad: the input folder contains a historical `navigation.md`.
- Better: old route records are relevant to the target Navigation question and cannot be safely used, ignored, retired, or carried forward without current interpretation.
- Strongest: without resolving old route memory, Navigation could produce a materially different or wrong current map.

This indicates a threshold:

```text
Full Route Memory Review is triggered by unresolved route-memory effect, not by old-map presence.
```

### Frontier State

Frontier becoming stable. The important regions are identified: detection, dependency threshold, review artifact, and Navigation handoff.

### Confidence Map Update

- Confirmed: "project-level vs bounded" is not the structural trigger.
- Confirmed: "old maps exist" is not enough.
- Scanned: possible thresholds for "dependency."
- Inferred: the preflight should classify, not reconcile.
- Unknown: whether the final model should retain the term "Route-Memory Preflight" or fold it into Freshness Preflight wording.

## Jump Scan

Deliberately scanned the opposite direction: artifact policy rather than trigger policy.

The file-necessity finding is strong where it says meaningful operations should leave explicit artifacts. But it also says bloat should be controlled by not running Route Memory Review unnecessarily. That supports a two-level model:

- lightweight route-memory classification is part of every Navigation intake;
- full route-memory reconciliation is the meaningful operation that writes `route_memory_review.md`.

The jump scan did not find support for generating a no-op `route_memory_review.md` on every Navigation run.

## Convergence Check

Frontier stability: mostly stable. The relevant documents and prior findings have been scanned.

Declining discovery rate: yes. New scans are refining the same boundary, not revealing new regions.

Bounded gaps: yes. Remaining gaps are about final wording and implementation, not unexplored territory.

Exploration converged for the purpose of handing off to Sensemaking.

## Territory Overview

The territory has five major regions:

1. Navigation Freshness Preflight: currently runs for every Navigation invocation and decides whether context is fresh enough.
2. Navigation context intake: routes bounded, warmed, stale, cold, and thin contexts.
3. Prior-map overlay / Route Memory Review: reconciles old Navigation maps against current authority.
4. Artifact policy: Homegrown expects meaningful operations to create explicit Markdown files.
5. Route-map generation: Navigation itself enumerates current routes and should not do hidden old-route reconciliation at the same time.

## Inventory

### Existing Concepts

- Freshness Preflight: mandatory, cheap, every Navigation run.
- Prior-map overlay: old name for route-memory reconciliation.
- Route Memory Review: clearer concept for current interpretation of old route memory.
- `route_memory_review.md`: saved artifact produced when full Route Memory Review runs.
- Route-memory status: proposed telemetry or context-preparation field such as `none_detected`, `not_relevant`, `review_needed`, `review_consumed`, `thin_skipped`.

### Candidate Boundaries

- Size boundary: project-level vs bounded.
- Presence boundary: old Navigation maps exist.
- Dependency boundary: old route memory is relevant to the target question.
- Effect boundary: unresolved old route memory could materially change the new map.
- Operation boundary: a separate artifact is written only when reconciliation decisions are made.

## Signal Log

| Signal | Source | Status | Notes |
| --- | --- | --- | --- |
| User distrusts big vs bounded split | User prompt and prior finding | confirmed | This is the original smell. |
| Navigation already has every-run preflight | `homegrown/navigation/SKILL.md` | confirmed | Route-memory check may belong inside this, not beside it. |
| Prior-map overlay says not every invocation | `navigator-prior-map-overlay.md` | confirmed | This conflicts with over-broad "every run" wording if interpreted as full review. |
| If full review runs, artifact should be mandatory | file-necessity finding | confirmed | Matches explicitness culture. |
| "May affect" is vague | trigger-boundary finding | confirmed | Needs operational threshold. |
| Full review must not become Navigation | Navigation reference | confirmed | Review reconciles old route memory; Navigation enumerates current routes. |

## Confidence Map

| Region | Confidence | Reason |
| --- | --- | --- |
| Old maps should remain immutable | confirmed | Repeated across Navigation docs and findings. |
| Full review should write a file when it runs | confirmed | Later finding explicitly corrects inline-default model. |
| Bounded/project-level is wrong as trigger | confirmed | User smell and prior finding align. |
| Cheap every-run classification is natural | scanned | Fits Freshness Preflight, but exact spec wording still needs care. |
| Full review trigger | scanned | Dependency/effect threshold is visible but needs sensemaking. |
| Output structure details | scanned | Prior finding has a usable structure, but final rule may adjust when it appears. |

## Frontier State

The exploration frontier is stable enough to proceed. The unresolved work is not finding more documents; it is clarifying the conceptual boundary:

```text
When does route-memory classification become route-memory review?
```

## Gaps And Recommendations

Sensemaking should decide whether "Route-Memory Preflight" is a separate named step or simply a required subcheck inside Navigation Freshness Preflight.

Sensemaking should also refine "route-memory dependency" into a crisp test that avoids both:

- artifact bloat from reviewing old maps just because they exist;
- route amnesia or stale resurrection from skipping old-route decisions when they matter.

The first-pass answer to the user is:

```text
The prior answer feels messy because it has the right instinct but an unclean boundary. It rejects "project-level vs bounded," which is good, but then says every Navigation run gets Route-Memory Preflight without clearly saying whether that is just a cheap classification or a separate operation. It also says full review runs when old maps "may affect" the new map, but that can mean almost anything. The clean problem is to separate detection from reconciliation: every Navigation run can cheaply classify route-memory relevance, but only unresolved, material old-route effects should trigger full Route Memory Review and its artifact.
```
