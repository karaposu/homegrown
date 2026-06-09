# Exploration: Navigation Naming Boundary Drift Loop Diagnose

## Mode And Entry Point

Mode: loop-diagnose exploration.

Entry point: comparative artifact scan. The diagnostic object is not one bad conclusion. It is a correction chain where names and operation boundaries repeatedly became hard to understand:

- `prior_map_overlay`
- `Route-Memory Preflight`
- `source`
- `PastNavigationMemoryFile`
- `PastNavigationMemoryFile Index`
- `PastNavigationMemoryFile Discovery Search`

The primary comparison is:

- prior: `devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity`
- corrected: `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation`

Supporting vocabulary evidence comes from:

- `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review`
- `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`
- `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search`

Confidence discipline: primary-chain signals can receive higher confidence. Aggregate naming claims across `source`, `PastNavigationMemoryFile`, index, and search should stay medium or lower unless the artifacts isolate the mechanism.

## Exploration Cycle 1 - Prior Inquiry

### Files Read

Read fully:

- `_branch.md`
- `_state.md`
- `finding.md`
- `docarchive/exploration.md`
- `docarchive/sensemaking.md`
- `docarchive/decomposition.md`
- `docarchive/innovation.md`
- `docarchive/critique.md`

### Primary Signals

The prior inquiry question already centered the old name and storage shape:

```text
Is writing a separate `prior_map_overlay.md` file after Navigation warm-up the best solution...
```

Its goal included avoiding unnecessary artifacts, so the loop naturally treated the problem as storage policy and artifact proportionality.

The prior finding did identify a real naming problem. It said the weaker part was framing the operation as "prior-map overlay" or "route reconciliation" because those names made the operation sound like bookkeeping. It recommended `Route Memory Review` as the operation name and treated `prior_map_overlay.md` as a transitional storage name.

The prior sensemaking also separated operation from file:

```text
prior_map_overlay is operation before artifact
```

But the discipline trail kept the overlay vocabulary alive through the root titles, decomposition, innovation, and critique. The surviving assembly still said:

```text
old navigation map = historical snapshot
overlay result = current route-memory interpretation
saved prior_map_overlay.md = durable storage mode when needed
new navigation map = current route-space enumeration
```

This shows an incomplete rename. The loop detected that `prior_map_overlay` was weak, but did not fully remove it as the governing mental frame.

### Boundary Signals

The prior decomposition split the problem into:

- authority semantics;
- output storage policy;
- routing and trigger policy.

That was a useful technical split, but it also made "artifact proportionality" a major route. The prior critique gave artifact proportionality high weight and made the file optional for small same-session use. That directly set up the later user correction that in Homegrown, meaningful operations should produce explicit Markdown artifacts.

The prior loop therefore appears to have over-indexed on "avoid unnecessary artifact" before fully absorbing Homegrown's explicit-artifact culture.

### Early Diagnostic Hypothesis

The prior loop likely found the conceptually cleaner operation but did not force the name migration all the way through the reasoning. It kept a transitional metaphor active and let storage policy remain too central.

Confidence: high for `prior_map_overlay` evidence. The artifacts explicitly show both detection of the naming weakness and continued use of overlay framing.

## Exploration Cycle 2 - Corrected Inquiry

### Files Read

Read fully:

- `_branch.md`
- `_state.md`
- `finding.md`
- `docarchive/exploration.md`
- `docarchive/sensemaking.md`
- `docarchive/decomposition.md`
- `docarchive/innovation.md`
- `docarchive/critique.md`

### Primary Signals

The corrected branch explicitly asked why the previous model felt messy. That changed the entry point from artifact necessity to conceptual cleanliness.

The corrected exploration identified the main naming boundary:

```text
"Every Navigation run should do a cheap Route-Memory Preflight" sounds like a new named operation,
but it may only be ordinary context intake.
```

It also identified that "old maps may affect the new map" was too broad, and that Route Memory Review must support Navigation without becoming a second Navigation map.

The corrected sensemaking stabilized four layers:

1. Freshness/context intake.
2. Route-memory classification.
3. Route-memory reconciliation.
4. Navigation map generation.

This is important evidence: the cleaner answer came from separating status classification from operation, not from inventing a stronger name.

The corrected critique made the naming risk explicit:

```text
Calling this "Route-Memory Preflight" risks creating another named mandatory operation.
```

It preserved the behavior only with a wording constraint: prefer "route-memory status classification" over a new routine name.

### Boundary Signals

The corrected inquiry introduced a better boundary:

```text
classification -> recorded inline in navigation.md
reconciliation -> saved as route_memory_review.md
```

It also shifted the artifact rule:

```text
no full review without file; no file without full review
```

This directly corrected the prior tendency to treat the file as optional storage. It also avoided turning every cheap check into an artifact-producing operation.

### Early Diagnostic Hypothesis

The corrected inquiry succeeded because it did not merely rename "Route-Memory Preflight." It demoted that phrase into a status classification inside existing intake and reserved the artifact-producing name for the real operation.

Confidence: high for this primary chain. The corrected artifacts repeatedly name the preflight term as the risk.

## Exploration Cycle 3 - Supporting Vocabulary Evidence

### Supporting Scan Scope

Supporting folders were scanned for vocabulary and mechanism drift around:

- `source`
- `PastNavigationMemoryFile`
- index
- search
- route-memory wording

The supporting findings were read in their naming-heavy opening sections, and `rg` was used across their docarchives for vocabulary evidence. These folders are supporting context, not ground truth for the primary diagnostic.

### Early-Stage Robust Review

The early-stage finding introduced `PastNavigationMemoryFile` and defined it as:

```text
any existing file that records earlier Navigation routes, route states, blockers, stale routes, superseded routes, or route decisions
```

It also used the more generic phrase "route-memory source" throughout the discipline trail. The concept is technically useful, but the naming burden is visible:

- "source" names an input role, not the concrete object the user is asking about.
- `PastNavigationMemoryFile` names a category, but it is dense and sounds like a formal type before the user has a clear mental model for it.
- The finding had to define what the term means immediately, which is a sign that the name does not carry enough meaning by itself.

This supports the user's later complaint about "source" being unclear, but confidence should remain medium because the supporting artifacts themselves define the term; the confusion is stronger from the user correction than from the document alone.

### Index Feasibility

The index-feasibility finding recommended a `PastNavigationMemoryFile Index` at:

```text
devdocs/navigation_context/past_navigation_memory_file_index.md
```

The stated benefit was discovery: one known place to find candidate memory files. The finding explicitly warned that the index was not current route truth.

This shows the same pattern in a different form:

- Homegrown explicitness pulled the loop toward a named Markdown artifact.
- The artifact was carefully constrained as non-authoritative.
- But the name still made a second persistent mechanism feel natural before deterministic search had been exhausted.

Confidence: medium. The prior index inquiry did critique broad indexes and authority drift, so the failure was not careless. The gap appears to be under-testing an easier discovery mechanism, not simply bad naming.

### Index Versus Search

The later search finding corrected the index recommendation. It said the maintained global index was no longer the recommended v1 mechanism and replaced it with:

```text
PastNavigationMemoryFile Discovery Search
```

It preserved explicitness by making search a protocol-owned contract with scope, patterns, exclusions, and output modes. It also allowed a run-local `past_navigation_memory_candidates.md` only when a search result itself needed durable handoff or audit.

This supporting context shows a more mature distinction:

- search finds candidate files;
- Route Memory Review reads and interprets them;
- a run-local candidate report records one search when needed;
- a global index is deferred.

The name is still formal and long, but the operation boundary is cleaner than the maintained index because it names the action being performed rather than a standing mutable object.

Confidence: medium. The search correction is evidence that operation-boundary validation improved, but it does not prove the earlier naming failure by itself.

## Jump Scan

I deliberately scanned for an opposite explanation: maybe the issue was not naming at all, but pure trigger policy.

That explanation partially fits. The corrected inquiry does improve trigger policy from "old maps may affect" to `review_needed`, and the early-stage inquiry later changes the mature trigger into a robust default.

But trigger policy alone does not explain the repeated user friction:

- `prior_map_overlay` was rejected because it sounded like the wrong operation/storage shape.
- "Route-Memory Preflight" was rejected because it sounded like a new side ritual.
- "source" was challenged because it did not make the concrete object clear.
- `PastNavigationMemoryFile Index` was later challenged because a maintained artifact duplicated searchable repository state.

The common thread is boundary-naming: names were doing too much mechanism work before the mechanism had been validated from the user's perspective.

## Convergence Check

Frontier stability: stable enough for Sensemaking.

Declining discovery rate: yes. New artifacts are repeating the same pattern in different forms: operation names, status names, storage names, and discovery names get mixed.

Bounded gaps: yes. Remaining uncertainty is attribution by discipline. It is too early to say whether the main weakness belongs more to Sensemaking, Innovation, Critique, or Conclude. Exploration can only say where the signals point.

## Territory Overview

The naming-drift territory has five regions:

1. **Operation Names**
   - `Route Memory Review` is strong when it names actual reconciliation.
   - `Route-Memory Preflight` is weak when it sounds like a separate routine for cheap status classification.

2. **Artifact Names**
   - `prior_map_overlay.md` carried storage and metaphor into the operation model.
   - `route_memory_review.md` is cleaner when full review actually runs.

3. **Status / Field Names**
   - `route_memory_status` is cleaner because it says it is classification metadata.
   - `review_needed` is cleaner than "old maps may affect" because it names the decision.

4. **Discovery Object Names**
   - `source` is too generic for user-facing policy.
   - `PastNavigationMemoryFile` is precise but dense.
   - `PastNavigationMemoryFile Index` made a standing registry feel natural.
   - `PastNavigationMemoryFile Discovery Search` better names the action, though still formal.

5. **User-Language Validation**
   - The artifacts test conceptual correctness, authority boundaries, and artifact policy.
   - They do not show a dedicated step asking whether the name itself would be understandable or whether it sounds like the wrong operation.

## Signal Log

| Signal | Evidence | Strength | Diagnostic Meaning |
| --- | --- | --- | --- |
| Prior loop noticed `prior_map_overlay` was weak but retained overlay framing | prior finding plus prior discipline titles and survivor assembly | high | Rename was incomplete; transitional label kept shaping reasoning. |
| Prior loop made artifact proportionality central | prior branch goal, decomposition, critique | high | Storage minimization competed with Homegrown explicit artifact culture. |
| Corrected loop identified `Route-Memory Preflight` as operation-proliferation risk | corrected exploration, sensemaking, critique | high | The problem was naming a status check like a routine. |
| Corrected loop stabilized layers | corrected sensemaking and decomposition | high | Clean answer came from separating status, review, artifact, and Navigation. |
| `source` appears heavily as internal jargon | supporting early-stage artifacts | medium | Term was technically useful but too generic for user-facing explanation. |
| `PastNavigationMemoryFile` required immediate definition | early-stage finding | medium | Name is precise but not self-explaining enough. |
| Index recommendation followed explicit artifact instinct | index feasibility finding and critique | medium | Explicitness was applied before search alternative was fully validated. |
| Search correction replaced maintained object with operation contract | index-versus-search finding | medium | Later loop improved operation boundary by naming action and output modes. |

## Confidence Map

| Hypothesis Region | Confidence | Reason |
| --- | --- | --- |
| `prior_map_overlay` failure was incomplete name migration | high | Primary artifacts explicitly call the old name weak while continuing to use overlay framing. |
| `Route-Memory Preflight` failure was over-naming a status classification | high | Corrected artifacts directly identify this as the messy part. |
| Prior loop underweighted Homegrown explicit-artifact culture | high | Later correction reversed optional storage for full review; prior critique elevated proportionality. |
| Repeated confusion came from names bundling operation/storage/status/discovery | medium-high | Pattern appears across primary and supporting chain, but aggregate. |
| Lack of user-language validation is a contributing weakness | medium | Artifacts show no explicit validation step, but absence is not proof by itself. |
| Sensemaking vocabulary selection is the sole root cause | low | Evidence spans framing, innovation candidates, critique weighting, and conclude wording. |
| `PastNavigationMemoryFile` itself is definitely the wrong final name | low-medium | User liked it relative to "old/source" earlier, then confusion persisted around concepts; later wording is not ground truth. |

## Frontier State

Exploration should hand off these questions to Sensemaking:

1. Was the main miss vocabulary selection, or operation-boundary validation?
2. Did Conclusion make provisional terms too durable?
3. Did Critique lack an explicit "does this name make the user infer the wrong operation?" dimension?
4. Should loop maintenance add a naming/user-language validation step without overburdening every finding?

## Gaps And Recommendations For Next Discipline

Sensemaking should not diagnose from finding titles alone. It should compare how each loop's internal boundaries shifted:

- prior artifact-storage frame;
- corrected status-vs-review frame;
- later source/object discovery frame;
- later index-vs-search frame.

Sensemaking should keep confidence lower for aggregate claims about `source` and `PastNavigationMemoryFile`, because those are supported by later vocabulary evidence and user correction patterns, not by one isolated prior-loop defect.

The likely first-pass answer is:

```text
Unclear names kept producing mechanism confusion because the loops stabilized terms that were internally precise before validating what operation the terms would imply to the user. The names often encoded a storage object, protocol step, or discovery category before the operation boundary was clean. The strongest evidence is `prior_map_overlay` and `Route-Memory Preflight`: the corrected loop improved only after it separated route-memory status classification from full Route Memory Review and stopped treating a cheap check as a named routine.
```
