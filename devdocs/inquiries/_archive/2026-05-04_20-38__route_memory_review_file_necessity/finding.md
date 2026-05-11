---
status: active
corrects:
  - devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity/finding.md
impacts:
  - homegrown/navigation/warmup/navigator-prior-map-overlay.md
  - homegrown/protocols/navigation_context_intake.md
  - homegrown/navigation/SKILL.md
---
# Finding: Route Memory Review File Necessity

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity/finding.md`

**Revision trigger:** The user corrected the prior "save only when durable handoff matters" framing. In Homegrown, meaningful operations are expected to leave explicit Markdown artifacts.

**What's preserved:** Old Navigation maps remain immutable historical snapshots. Route Memory Review is still the operation that checks old route memory before a new Navigation run.

**What's changed:** Saving `route_memory_review.md` is no longer an escalation for durable handoff only. If Route Memory Review runs, it should write the file.

**What's new:** Bloat is controlled by deciding when Route Memory Review is needed, not by running the review invisibly.

**Migration:** Patch active Navigation docs so Route Memory Review has an artifact-mandatory output contract.

## Question

Should Navigation generate a `route_memory_review.md` artifact when reviewing old Navigation route memory, and if yes, why, where, with what structure, when, and why at that time?

Goal: decide whether the file is necessary in Homegrown's explicit-artifact culture, define the exact benefit, generation owner, path, structure, trigger conditions, and timing, and correct the earlier inline-default framing if it is wrong.

## Finding Summary

- Yes. If Route Memory Review runs, it should generate `route_memory_review.md`.

- The earlier rule was wrong for this codebase: "save only when durable handoff matters" treats file output as optional storage. In Homegrown, a meaningful operation that changes future interpretation should leave an explicit artifact.

- The anti-bloat rule should move up one layer:

```text
Do not run Route Memory Review unless old route memory matters.
But if Route Memory Review runs, save the artifact.
```

- Benefit: the file gives Navigation a stable, citable, reviewable current interpretation of old route maps without editing those old maps.

- Owner: the current `homegrown/navigation/warmup/navigator-prior-map-overlay.md` routine, conceptually renamed or reframed as Route Memory Review.

- Path:

```text
devdocs/navigation_context/<YYYY-MM-DD_HH-MM__route_memory_review_<slug>>/route_memory_review.md
```

- Timing: generate it after warm-up or refresh has established current context, after old route maps are judged relevant enough to inspect, and before Navigation produces the new `navigation.md`.

- Reason for that timing: before current context exists, old routes cannot be classified correctly; after Navigation runs, stale route memory may already have shaped the map.

## Finding

### 1. The File Is Necessary When The Operation Runs

Route Memory Review is not casual explanation. It decides how old Navigation route memory should affect a new Navigation map.

That decision has operational consequences:

- an old route may be carried forward;
- an old route may be retired;
- an old route may remain blocked;
- an old route may be marked uncertain;
- an old route may be ignored for the current Navigation question.

Those decisions should not live only in conversation context. They are the current interpretation of historical route evidence.

Therefore:

```text
Route Memory Review runs -> route_memory_review.md is written.
```

The correct way to avoid bloat is:

```text
Do not run Route Memory Review for bounded local Navigation, no-prior-map contexts, or old maps that are irrelevant to the target Navigation question.
```

### 2. The Exact Benefit

The file gives five concrete benefits.

First, it preserves old Navigation maps as historical snapshots. Old maps remain evidence of what was believed at the time. The review records the current interpretation separately.

Second, it gives Navigation a stable input. The next Navigation run can read one current route-memory artifact instead of reinterpreting many old maps or relying on chat context.

Third, it makes the read set auditable. A future session can see which old maps and current authorities were read before Navigation produced its map.

Fourth, it prevents stale route resurrection. If an old route was killed by a later finding, the review records that before Navigation accidentally lists it as active again.

Fifth, it creates calibration material. If Navigation later makes a bad map, outcome review or loop diagnosis can inspect whether the route-memory review carried forward, retired, or ignored the right old routes.

### 3. Where It Is Generated

The file should be generated under Navigation context, not beside old Navigation maps.

Use:

```text
devdocs/navigation_context/<YYYY-MM-DD_HH-MM__route_memory_review_<slug>>/route_memory_review.md
```

Example:

```text
devdocs/navigation_context/2026-05-04_20-45__route_memory_review_navigation_warmup/route_memory_review.md
```

This location says what the artifact is: context preparation for a new Navigation run.

Do not write it into `devdocs/navigation/` as if it were a route map.

Do not write it into an old Navigation map folder or edit old map files.

### 4. What Generates It

The current owner is:

```text
homegrown/navigation/warmup/navigator-prior-map-overlay.md
```

That file should be patched conceptually. The operation is better named **Route Memory Review**. The old "prior-map overlay" name makes it sound like a visual overlay or bookkeeping artifact. The real operation is reviewing old route memory for current Navigation use.

The routine may keep its filename temporarily to avoid churn, but its output contract should say:

```text
Output: route_memory_review.md
```

Later, if naming churn is acceptable, the routine can be renamed to something like:

```text
homegrown/navigation/warmup/navigator-route-memory-review.md
```

### 5. Structure

Use this structure:

```markdown
---
record_type: route_memory_review
status: active
source_authority: user_request | freshness_preflight | navigation_context_intake | warmup | refresh | other
target_navigation_question: <question>
---
# Route Memory Review: <name>

## Purpose
[Why old Navigation route memory is being reviewed.]

## Source Authority
[What authorized this review.]

## Review Boundary
[What old maps, current findings, protocols, or route-memory scope are in / out.]

## Sources Read
| Source | Why Read | Authority | Result |
| --- | --- | --- | --- |

## Current Authorities
[Newer findings, protocol files, sync briefs, or user corrections that override old route memory.]

## Route Memory Decisions
| Old Route | Source Map | Prior State | Current Decision | Evidence | Navigation Instruction | Confidence |
| --- | --- | --- | --- | --- | --- | --- |

## Carry Forward
[Routes that should appear or remain live in the next Navigation map.]

## Retire
[Routes that should not be resurrected unless new evidence appears.]

## Keep Blocked
[Routes that still matter but remain gated.]

## Needs Check
[Routes whose current meaning is uncertain.]

## Ignore For This Question
[Routes that may exist historically but are irrelevant to this Navigation question.]

## Handoff To Navigation
[Concrete instruction for the next Navigation run.]

## Confidence Limits
[What was not checked, weak evidence, stale assumptions, or limits.]

## Validation
[Manual or automated checks that the review did not mutate old maps, read the needed sources, and produced a usable handoff.]
```

The route table is the core. The categorized sections make the result readable.

If no prior routes matter after inspection, still write a small review saying that. That is a real result: "old route memory was checked and excluded for this Navigation question."

If no prior maps exist at all and the context router can determine that without running Route Memory Review, no file is needed.

### 6. When It Is Generated

Generate it in this sequence:

```text
1. Navigation Freshness Preflight classifies the invocation.
2. Warm-up or refresh establishes current project context.
3. Context intake determines that old Navigation maps exist and matter.
4. Route Memory Review reads old maps plus current authorities.
5. Route Memory Review writes route_memory_review.md.
6. Navigation reads route_memory_review.md and produces the new navigation.md.
```

This means the file is generated after current context exists and before the new Navigation map.

### 7. Why That Time

Generating it before warm-up is too early. The review would only know old route memory, not current authority.

Generating it during Navigation is too hidden. Navigation would be doing route-memory reconciliation and route enumeration in one step, making the read set and old-route decisions harder to audit.

Generating it after Navigation is too late. The new map may already have carried forward stale routes or dropped important old routes.

The right timing is exactly the boundary between context preparation and route enumeration.

```text
current context ready
old route memory reviewed
then Navigation maps routes
```

### 8. What Navigation Should Do With It

Navigation should consume the file as a source context artifact.

The resulting `navigation.md` may include a short pointer:

```markdown
## Route Memory Used

Route Memory Review: devdocs/navigation_context/.../route_memory_review.md

Effect:
- Retired old route X.
- Kept old route Y blocked.
- Carried forward old route Z.
```

That pointer is useful, but it is not the authoritative review. The authoritative review is `route_memory_review.md`.

## Next Actions

### MUST

- **What:** Patch `homegrown/navigation/warmup/navigator-prior-map-overlay.md` so its saved output is `route_memory_review.md`, and so saving is mandatory when the routine runs.
  **Who:** Navigation warm-up support routine.
  **Gate:** Before the first real route-memory review is used to produce a Navigation map.
  **Why:** Prevents route-memory reconciliation from becoming invisible chat state.

- **What:** Patch `homegrown/protocols/navigation_context_intake.md` so bloat control is handled by trigger policy: run Route Memory Review only when old route memory matters.
  **Who:** Navigation context router.
  **Gate:** Same patch.
  **Why:** Avoids generating empty artifacts for local or irrelevant Navigation runs.

- **What:** Patch `homegrown/navigation/SKILL.md` Freshness Preflight handoff so project-level stale or warmed contexts can route to Route Memory Review before Navigation when prior maps matter.
  **Who:** Navigation skill.
  **Gate:** Same patch or immediately after.
  **Why:** Ensures Navigation consumes reviewed route memory before mapping.

### COULD

- **What:** Add `## Route Memory Used` to future Navigation maps when a review file was consumed.
  **Who:** Navigation reference/output format.
  **Gate:** After the first review-file trial.
  **Why:** Gives readers a visible pointer from the current map back to the context artifact.

- **What:** Rename `navigator-prior-map-overlay.md` to `navigator-route-memory-review.md`.
  **Who:** Navigation warm-up folder.
  **Gate:** After output behavior is patched and references can be updated safely.
  **Why:** Aligns filename with the concept.

### DEFERRED

- **What:** Build a registry of Route Memory Reviews.
  **Gate:** Only after several review files exist and discovery becomes a real problem.
  **Why (if revived):** A registry may help future sessions find latest reviews, but it is premature before usage exists.

## Reasoning

The inline-default model was killed. It solved artifact bloat but violated Homegrown's explicitness and resumability. It also made route-memory decisions dependent on current chat context.

The "generate on every Navigation run" model was killed. Some Navigation runs are bounded and do not inspect old route memory. Generating a review file there would create ceremony without operational content.

The old-map mutation model stayed killed. Editing old `navigation.md` files destroys historical evidence and creates repeated update obligations.

The surviving model is:

```text
operation-triggered artifact
```

If Route Memory Review runs, it writes `route_memory_review.md`. If the context does not require old route-memory review, the operation does not run.

This matches the rest of Homegrown: explicit artifacts for meaningful operations, strict routing to avoid meaningless artifacts, and clean separation between historical evidence and current interpretation.

## Open Questions

### Monitoring

After the first generated `route_memory_review.md`, check whether Navigation could consume it without rereading old maps.

### Refinement Triggers

Add a `Route Memory Used` section to Navigation output if users need visible linkage from `navigation.md` to the review file.

Create a registry only if multiple generated reviews become hard to discover.

## Source Input

```text
$MVL+

Don’t create an extra route_memory_review.md just because a Route Memory Review happened. Create one only when the review needs to survive
  beyond the current chat/session.

this is not how this codebase work. We are enforcing explicitpness and putting md files all the time

but the question is , do we need to generate this file? if yes why exactly? what is benefit? where it is generated? with what structure?
when it is being generated? why that time?
```
