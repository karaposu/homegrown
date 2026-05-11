---
status: active
corrects:
  - devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity/finding.md
impacts:
  - homegrown/navigation/SKILL.md
  - homegrown/protocols/navigation_context_intake.md
  - homegrown/navigation/warmup/navigator-prior-map-overlay.md
---
# Finding: Route Memory Review Trigger Boundary

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity/finding.md`

**Revision trigger:** The user noticed that tying Route Memory Review to "big" or project-level Navigation feels unnatural. Navigation should not behave as two different disciplines depending on whether the input is broad or bounded.

**What's preserved:** If full Route Memory Review runs, it should write `route_memory_review.md`. Old Navigation maps should not be edited.

**What's changed:** The trigger is no longer "project-level Navigation" or "big Navigation." That was a heuristic, not a structural boundary.

**What's new:** Every Navigation run should include a cheap route-memory preflight. Full Route Memory Review runs only when that preflight finds a relevant `PastNavigationMemoryFile` that needs current interpretation.

**Migration:** Patch Navigation docs to replace bounded/project-level language with route-memory dependency language.

## Question

Is it natural for Route Memory Review to run only for "big" or project-level Navigation, or should Navigation always include a route-memory check regardless of whether the input is bounded or broad?

Goal: determine the correct trigger boundary for Route Memory Review, explain whether bounded/project-level is the wrong distinction, define when a full `route_memory_review.md` is generated, and clarify what every Navigation run should record about route memory.

## Finding Summary

- The user's smell is correct. "Project-level vs bounded" is not the natural boundary.

- Navigation should be one discipline with one context-preparation flow.

- Every Navigation run should include a cheap **Route-Memory Preflight**.

- Full Route Memory Review is not triggered by size. It is triggered by dependency:

```text
Does this Navigation run have a relevant PastNavigationMemoryFile that needs current interpretation?
```

- A bounded Navigation run may need Route Memory Review if its input is, contains, or depends on prior route memory. Examples: a local inquiry with an old `navigation.md`, a prior `navigation.md` file, a `_frontier.md` ledger, or a prior Route Memory Review.

- A project-level Navigation run may not need full Route Memory Review if no `PastNavigationMemoryFile` exists or none are relevant to the target question.

- Every Navigation output should record route-memory status, even when no full review runs.

## Finding

### 1. The Prior Split Was A Heuristic, Not A Principle

The earlier wording implied:

```text
project-level Navigation -> maybe Route Memory Review
bounded Navigation -> skip Route Memory Review
```

That is not structurally correct.

Project-level Navigation is more likely to need past Navigation memory because it often looks across prior project maps. But likelihood is not a trigger.

Bounded Navigation is more likely to be self-contained. But a bounded source can still be a route-memory artifact.

The real question is not:

```text
How large is this Navigation run?
```

The real question is:

```text
Will prior route memory influence this Navigation map?
```

### 2. Navigation Should Always Run The Same Cheap Check

Navigation should always perform a route-memory preflight as part of context preparation.

The preflight asks:

```text
Are there PastNavigationMemoryFile entries in the input or required context?
Are they relevant to the target Navigation question?
Do they need current interpretation before route enumeration?
Has a current Route Memory Review already been provided?
Is the user explicitly accepting thin context?
```

This keeps Navigation unified. There is no special "big Navigation" behavior. There is one Navigation flow with a route-memory status.

### 3. `PastNavigationMemoryFile` Is Broader Than Old Project Maps

A `PastNavigationMemoryFile` includes:

- prior `devdocs/navigation/*.md` maps;
- `navigation.md` inside a local inquiry folder;
- prior `route_memory_review.md` files;
- multi-resolution `_frontier.md` ledgers;
- navigator refresh sync briefs that mention route-state changes;
- any input whose purpose is continuation memory for routes.

That means a bounded local Navigation can still trigger full Route Memory Review.

Example:

```text
/navigation devdocs/inquiries/some_inquiry/
```

If that inquiry contains a prior `navigation.md` and the user asks "what next from here now?", then old local route memory may matter.

Another example:

```text
/navigation devdocs/navigation/old_project_map.md
```

This is a bounded file input, but it is entirely route memory. It needs review against current context before being trusted.

### 4. The Correct Status Model

Navigation should record one of these route-memory statuses:

```text
none_detected
not_relevant
review_needed
review_consumed
thin_skipped
```

Meanings:

- `none_detected`: no `PastNavigationMemoryFile` entries were present or discoverable in the input/context.
- `not_relevant`: `PastNavigationMemoryFile` entries exist, but they do not matter for this target Navigation question.
- `review_needed`: relevant `PastNavigationMemoryFile` entries exist and need current interpretation before Navigation proceeds.
- `review_consumed`: a current `route_memory_review.md` was read and used.
- `thin_skipped`: route-memory review would normally be useful, but the user explicitly accepted thin context.

This status should appear in Navigation telemetry or a small context-preparation section of the resulting `navigation.md`.

### 5. When Full Route Memory Review Runs

Full Route Memory Review runs only when preflight returns:

```text
review_needed
```

Then it writes:

```text
devdocs/navigation_context/<YYYY-MM-DD_HH-MM__route_memory_review_<slug>>/route_memory_review.md
```

Navigation then consumes that file and records:

```text
route_memory_status: review_consumed
route_memory_review: devdocs/navigation_context/.../route_memory_review.md
```

### 6. When Full Route Memory Review Does Not Run

It does not run when:

- `none_detected`: there are no `PastNavigationMemoryFile` entries.
- `not_relevant`: `PastNavigationMemoryFile` entries exist but do not affect this Navigation question.
- `review_consumed`: a current review is already provided.
- `thin_skipped`: the user explicitly accepts missing route-memory review.

This avoids empty artifact generation while preserving explicitness.

The explicitness lives in the Navigation output:

```text
route_memory_status: none_detected
route_memory_reason: input was a self-contained inquiry folder with no navigation.md or route-memory references
```

or:

```text
route_memory_status: not_relevant
route_memory_reason: prior project maps concern Navigation warm-up, but this run maps one completed branch inquiry
```

### 7. Why This Is Better

This model fixes both problems.

It fixes the user's concern because bounded/project-level is no longer the trigger. Navigation always asks the same route-memory question.

It fixes artifact bloat because a full `route_memory_review.md` is generated only when there is something real to reconcile.

It also improves automation. A future runner does not need fuzzy judgment about whether a run is "big." It only needs to classify source dependency:

```text
route memory present?
route memory relevant?
current interpretation needed?
```

### 8. Updated Short Rule

Use this instead of the prior rule:

```text
Every Navigation run performs Route-Memory Preflight.

If no relevant route memory exists, Navigation records that and proceeds.

If relevant route memory exists and is current, Navigation records the review it consumed.

If relevant route memory exists but has not been reviewed against current context, run Route Memory Review and write route_memory_review.md before producing the Navigation map.
```

## Next Actions

### MUST

- **What:** Patch `homegrown/navigation/SKILL.md` Freshness Preflight to include Route-Memory Preflight for every Navigation invocation.
  **Who:** Navigation skill.
  **Gate:** Before relying on Route Memory Review in normal Navigation use.
  **Why:** Removes the unnatural "big vs bounded" split.

- **What:** Patch `homegrown/protocols/navigation_context_intake.md` so route-memory routing is dependency-based, not project-level-only.
  **Who:** Navigation context router.
  **Gate:** Same patch.
  **Why:** A bounded source can still require route-memory review.

- **What:** Patch `navigator-prior-map-overlay.md` or its successor so it is invoked by `review_needed`, not by "after v1/v2/v3 project warm-up" only.
  **Who:** Navigation warm-up support routine.
  **Gate:** Same patch.
  **Why:** Full review should follow route-memory dependency wherever it appears.

### COULD

- **What:** Rename `navigator-prior-map-overlay.md` to `navigator-route-memory-review.md`.
  **Who:** Navigation warm-up folder.
  **Gate:** After behavior patch.
  **Why:** The old name still suggests project-level old-map overlay rather than general route-memory review.

- **What:** Add a `## Context Preparation` section to Navigation maps.
  **Who:** Navigation reference/output format.
  **Gate:** First implementation patch.
  **Why:** A stable place for `freshness_preflight` and `route_memory_status`.

### DEFERRED

- **What:** Generate a separate no-op `route_memory_review.md` for `none_detected` or `not_relevant`.
  **Gate:** Only if Navigation telemetry proves insufficient for audit.
  **Why (if revived):** It would maximize artifact explicitness, but it currently looks like empty ceremony.

## Reasoning

The project-level-only trigger was killed. It was a useful first approximation, but it encodes a probability as a rule.

The full-review-every-run option was killed. It satisfies explicitness but produces meaningless artifacts when there is no route-memory object.

The bounded-local automatic bypass was killed. A bounded input can be a `PastNavigationMemoryFile`.

The surviving model is universal preflight plus conditional full review.

That model preserves the user's core intuition: Navigation is Navigation. Every run gets the same preflight. The difference is only the result of that preflight.

## Open Questions

### Monitoring

After the first Navigation run with route-memory status, check whether the status was enough to explain why full Route Memory Review did or did not run.

### Refinement Triggers

If users repeatedly ask "why was no Route Memory Review file created?", consider generating no-op review artifacts.

If route-memory preflight becomes too complex for `navigation/SKILL.md`, split it into a small support routine.

## Source Input

```text
$MVL+

Route Memory Review should run only when old Navigation maps might affect the next Navigation map.

[prior answer omitted for brevity]

hmm, i feel like this smells , why there is a operation only when we are doing big navigation ? but it is not needed when we are doing bounded one?  this seperation is not natural to me. i feel like navigation is navigation. it shouldnt seperate what for..  maybe i am wrong ?
```
