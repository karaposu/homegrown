---
status: active
refines:
  - devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary/finding.md
  - devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity/finding.md
impacts:
  - homegrown/navigation/SKILL.md
  - homegrown/protocols/navigation_context_intake.md
  - homegrown/navigation/warmup/navigator-prior-map-overlay.md
---
# Finding: Route Memory Preflight Reevaluation

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary/finding.md`

**Revision trigger:** The user noticed that the newer "cheap Route-Memory Preflight plus full Route Memory Review" wording still felt unclean. The concern was that Navigation should not grow an unnatural second mode or side ritual.

**What's preserved:** The old trigger "project-level Navigation vs bounded Navigation" remains rejected. That was a heuristic, not a structural boundary.

**What's preserved:** If full Route Memory Review runs, it should write `route_memory_review.md`. This preserves the explicit artifact rule from `devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity/finding.md`.

**What's changed:** "Every Navigation run should do cheap Route-Memory Preflight" should be understood as "every Navigation run should classify route-memory status during normal context intake." It should not mean a separate always-run review routine.

**What's new:** Full Route Memory Review is triggered by unresolved material old-route effect, not by old-map presence and not by relevance alone.

**Migration:** Patch Navigation docs to make `route_memory_status` part of Freshness Preflight or context intake. Patch the prior-map overlay routine so it acts as Route Memory Review when status is `review_needed`.

## Question

Is the earlier answer about Navigation route memory clean and correct: every Navigation run performs a cheap Route-Memory Preflight, full Route Memory Review runs only when old maps may affect the new map, and `route_memory_review.md` is produced when full review runs?

Goal: first explain why that answer feels messy, then reevaluate the model from the Navigation workflow itself. The answer should distinguish the real Navigation need from artifact habit, decide whether "preflight vs full review" is a natural boundary, decide whether `route_memory_review.md` is needed and when, and produce a cleaner rule that avoids stale route resurrection.

## Finding Summary

- The prior answer is directionally right but not clean enough.

- The messy part is that it blurred two different things: a cheap status classification and a full reconciliation operation.

- "Route-Memory Preflight" should not become a new standalone routine that runs before every Navigation command. It should be a small `route_memory_status` classification inside existing Navigation Freshness Preflight or context intake.

- Full Route Memory Review should run only when the status is `review_needed`.

- `review_needed` means relevant past Navigation memory has unresolved current disposition and stale or missing disposition could materially change the new Navigation map.

- If materiality is uncertain and stale route resurrection or route amnesia is plausible, choose `review_needed`.

- If full Route Memory Review runs, it must write `route_memory_review.md`.

- If only status classification happens, do not create `route_memory_review.md`. Record the status and reason in the new `navigation.md` or in a context-preparation record.

## Finding

### 1. Why the prior answer felt messy

The prior answer fixed the wrong boundary but did not fully clean up the new one.

It correctly rejected this split:

```text
project-level Navigation -> maybe Route Memory Review
bounded Navigation -> skip Route Memory Review
```

That split is unnatural because a bounded input can still be route memory. For example, a bounded input could be an old `navigation.md` file or an inquiry folder that already contains a prior `navigation.md`.

The prior answer replaced that split with this model:

```text
every Navigation run -> cheap Route-Memory Preflight
old maps may affect new map -> full Route Memory Review
full review -> route_memory_review.md
```

That is better, but still not clean enough.

The phrase "cheap Route-Memory Preflight" sounds like a new named operation. If it is always run, Navigation starts to feel like it has a mandatory side ritual.

The phrase "old maps may affect the new map" is too broad. Almost any prior route map "may affect" a future map if the runner is cautious enough. That wording can collapse into "old maps exist, therefore run a review."

The file rule is also easy to misunderstand. `route_memory_review.md` should exist because a meaningful review operation created current route-memory authority. It should not exist just because Navigation performed a cheap status check.

### 2. The clean boundary is classification vs reconciliation

There are two different operations:

```text
route-memory status classification
```

and:

```text
Route Memory Review
```

Route-memory status classification is cheap. It asks what route-memory state this Navigation run is in.

Route Memory Review is not cheap. It reads PastNavigationMemoryFile entries and current authority, then decides what the next Navigation run should do with earlier route records.

This gives a clean model:

```text
Navigation invocation
  -> Freshness Preflight / context intake
  -> classify route_memory_status
  -> if review_needed: run Route Memory Review and write route_memory_review.md
  -> Navigation consumes current context plus any review artifact
  -> Navigation writes navigation.md
```

Navigation remains one workflow. The context dependency changes, not the identity of Navigation.

### 3. Route-memory status belongs in Navigation intake

Every Navigation run should record route-memory status.

Use statuses like:

```text
none_detected
not_relevant
review_needed
review_consumed
thin_skipped
```

Meanings:

- `none_detected`: no `PastNavigationMemoryFile` was present in the input or needed context.
- `not_relevant`: one or more `PastNavigationMemoryFile` entries exist, but they do not matter for the target Navigation question.
- `review_needed`: relevant past Navigation memory needs current disposition before Navigation can safely map routes.
- `review_consumed`: a current Route Memory Review was already read and used.
- `thin_skipped`: review would normally be useful, but the user explicitly accepted thin context.

This status should appear in a compact `Context Preparation` section or in Navigation telemetry.

Example:

```yaml
freshness_status: fresh_local
route_memory_status: not_relevant
route_memory_reason: prior project maps concern warm-up protocol cleanup, but this run maps one completed local inquiry
route_memory_review: none
```

This gives explicitness without generating a fake review artifact.

### 4. Full Route Memory Review is triggered by unresolved material effect

Full Route Memory Review should run only when status is `review_needed`.

Use this test:

```text
review_needed =
  PastNavigationMemoryFile exists
  AND that PastNavigationMemoryFile is relevant to the target Navigation question
  AND no current review has already been consumed
  AND earlier route disposition cannot be cheaply classified
  AND stale or missing disposition could materially alter the new Navigation map
```

"Materially alter" means the past Navigation memory could change whether a route appears, whether it is open, blocked, retired, superseded, stale, or needs checking.

This is narrower than "old maps exist."

This is also narrower than "old maps are relevant."

A relevant old map may be easy to classify. If the current Navigation question clearly has no dependency on those routes, status is `not_relevant`. If a current review was already provided, status is `review_consumed`.

If the runner is unsure and the risk is real, the rule should be conservative:

```text
If stale route resurrection or route amnesia is plausible, choose review_needed.
```

That guardrail prevents the materiality threshold from becoming an excuse to skip hard memory work.

### 5. If full review runs, `route_memory_review.md` is mandatory

If Route Memory Review runs, it writes:

```text
devdocs/navigation_context/<YYYY-MM-DD_HH-MM__route_memory_review_<slug>>/route_memory_review.md
```

The file is mandatory because full review creates current interpretation of historical route evidence.

That interpretation can tell Navigation to:

- carry a route forward;
- retire a stale route;
- keep a route blocked;
- mark a route as needing a check;
- ignore a historical route for this question.

Those decisions should be citable and inspectable. They should not live only in chat context.

The anti-bloat rule is:

```text
Do not run full Route Memory Review unless review_needed.
But if full Route Memory Review runs, write the file.
```

### 6. If full review does not run, no review file is generated

Do not generate `route_memory_review.md` for these statuses:

```text
none_detected
not_relevant
review_consumed
thin_skipped
```

This is not a retreat from explicitness. The explicit record belongs in the Navigation output or context-preparation record.

Example:

```yaml
route_memory_status: none_detected
route_memory_reason: input was a self-contained inquiry folder with no navigation.md and no prior route-memory references
route_memory_review: none
```

That is enough for audit. A separate review file would be a no-op artifact.

### 7. Route Memory Review must not become Navigation

Route Memory Review reconciles past Navigation memory. It does not enumerate all possible next directions.

Navigation enumerates current possible next directions. It should consume reviewed route memory, not perform hidden reconciliation while writing the map.

The separation is:

```text
Route Memory Review:
  What should current Navigation do with past Navigation memory?

Navigation:
  Given current context and reviewed route memory, what are all possible next routes?
```

This separation also protects old Navigation maps. Old maps remain historical snapshots. Route Memory Review records the current interpretation separately.

## Next Actions

### MUST

- **What:** Patch `homegrown/navigation/SKILL.md` Freshness Preflight to record `route_memory_status`.
  **Who:** Navigation skill.
  **Gate:** Before the next Navigation protocol patch relies on Route Memory Review.
  **Why:** Makes the cheap every-run part a status classification inside existing intake, not a separate routine.

- **What:** Patch `homegrown/protocols/navigation_context_intake.md` so route-memory routing is based on `route_memory_status`, especially `review_needed`.
  **Who:** Navigation context router.
  **Gate:** Same patch set as the Navigation Freshness Preflight change.
  **Why:** Removes the bounded/project-level trigger and replaces it with route-memory dependency.

- **What:** Patch `homegrown/navigation/warmup/navigator-prior-map-overlay.md` so the operation is Route Memory Review when invoked by `review_needed`, and its saved output is mandatory `route_memory_review.md`.
  **Who:** Navigation warm-up support routine.
  **Gate:** Before the first real route-memory review is used as Navigation input.
  **Why:** Makes the review operation explicit and prevents hidden old-route reconciliation.

- **What:** Add a compact `Context Preparation` or telemetry record to Navigation output.
  **Who:** Navigation output format.
  **Gate:** Same patch set as `route_memory_status`.
  **Why:** Makes skipped or consumed route-memory review auditable without creating no-op review files.

### COULD

- **What:** Rename `homegrown/navigation/warmup/navigator-prior-map-overlay.md` to a clearer Route Memory Review filename.
  **Who:** Navigation warm-up support routine.
  **Gate:** After behavior and output contract are patched and references are stable.
  **Why:** The behavior matters first; the rename reduces future confusion after churn risk is lower.

### DEFERRED

- **What:** Create a registry of Route Memory Reviews.
  **Gate:** If multiple generated review files become hard to discover in later Navigation runs.
  **Why (if revived):** A registry may help future sessions find the latest applicable review, but it is premature before review files accumulate.

- **What:** Generate `route_memory_review.md` for `none_detected` or `not_relevant`.
  **Gate:** Only if repeated Navigation audits show that compact status records are insufficient.
  **Why (if revived):** It would maximize artifact uniformity, but current evidence says it creates no-op artifact bloat.

## Reasoning

The size-based model was killed. Project-level Navigation is more likely to need past Navigation memory, but likelihood is not a trigger. Bounded Navigation can still depend on route memory if its input is a PastNavigationMemoryFile or contains a prior `navigation.md`.

The old-map-presence model was killed. A prior map existing somewhere is evidence, not dependency. If old maps automatically trigger full review, the system will generate low-value review files and make old maps too authoritative.

The embedded-review model was killed. Putting full Route Memory Review inside `navigation.md` collapses context preparation and route enumeration. It also makes it harder to see whether stale route memory shaped the map before being reviewed.

The inline-only full review model stayed killed. Full review creates a current interpretation of historical route evidence. In this codebase, that interpretation should be a Markdown artifact when the operation runs.

The status-only intake model survived. It gives every Navigation run an explicit route-memory state without turning every run into a review.

The material-disposition trigger survived with refinement. The phrase "old maps may affect the new map" was too vague. The refined trigger requires relevant past Navigation memory, no current consumed review, unresolved disposition, and a plausible material effect on the new map.

The operation-triggered artifact rule survived. It reconciles Homegrown's explicitness with artifact hygiene:

```text
no full review without file
no file without full review
```

The conservative uncertainty guardrail survived with scope limits. If stale route resurrection or route amnesia is plausible, choose `review_needed`. This guardrail should not be used for generic uncertainty.

The routine rename was deferred. `navigator-prior-map-overlay.md` is a weaker name than Route Memory Review, but behavior and output contract are more important than filename churn.

## Open Questions

### Monitoring

After the next three Navigation runs that include route-memory status, check whether the compact status record is enough to explain skipped review without a separate file.

### Refinement Triggers

Reopen the `review_needed` trigger if Navigation later resurrects a stale route that should have been retired by past Navigation memory.

Reopen the `review_needed` trigger if Navigation routinely runs full review but produces only empty or no-op `route_memory_review.md` files.

Reopen the artifact rule if users cannot discover the relevant `route_memory_review.md` from the resulting `navigation.md`.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

Better model: every Navigation run should do a cheap Route-Memory Preflight.
  - Full Route Memory Review should run only when old Navigation maps may affect the new Navigation map.
  - If full Route Memory Review runs, it should produce route_memory_review.md, because this codebase values explicit durable handoff.
  - The file is useful because it tells new Navigation what to do with old route memory: carry forward, retire, keep blocked, needs check,
    ignore.
  - The trigger should be route-memory dependency, not "project-level vs bounded."

now revaluate this answer. this time be careful with running things properly.
Start by understanding the question, why it feels messy, what makes it feel not clean

answer that first
```

</details>
