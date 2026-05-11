---
status: active
impacts:
  - homegrown/navigation/SKILL.md
  - homegrown/navigation/warmup/navigator-prior-map-overlay.md
  - homegrown/navigation/warmup/navigator-refresh.md
  - homegrown/protocols/navigation_context_intake.md
  - devdocs/inquiries/2026-05-04_17-40__prior_navigation_map_overlay_mutability/finding.md
refines:
  - devdocs/inquiries/2026-05-04_17-40__prior_navigation_map_overlay_mutability/finding.md
---
# Finding: Route Memory Review Storage

## Question

Is writing a separate `prior_map_overlay.md` file after Navigation warm-up the best solution for old Navigation route memory, or should the memory review be represented in a lighter/adaptive way?

## Terms Used Here

- **Old Navigation map:** a previous `devdocs/navigation/*.md` file. It records what route space looked like when it was written. It is historical evidence, not current truth.

- **Old route memory:** the useful memory contained in old Navigation maps. Example: "We once thought adding a warm-up README was an active route." Old route memory may still matter, may be stale, may be blocked, or may be irrelevant to the next Navigation question.

- **Route Memory Review:** the operation that checks old route memory before a new Navigation run. It answers: "Which old routes should Navigation carry forward, retire, keep blocked, check again, or ignore for this question?"

- **Inline Route Memory Review:** the Route Memory Review is written directly into the next Navigation prompt or context. No separate file is created.

- **Saved Route Memory Review:** the Route Memory Review is saved as a markdown file when another session or future run needs to read it later. The clearer future filename is `route_memory_review.md` or `navigation_memory_review.md`. The older name `prior_map_overlay.md` is understandable as a transitional file name, but it is less clear.

- **Durable handoff:** a situation where the review must survive beyond the current conversation, usually because another session will consume it or the review was expensive to reconstruct.

## Route Memory Review Shape

A Route Memory Review should be grouped by what the next Navigation run should do with old route memory.

```markdown
# Route Memory Review: <name>

## Purpose
[Why old Navigation maps are being reviewed for this Navigation run.]

## Sources Read
- [old navigation map path] -> why it matters
- [newer finding/protocol/authority] -> why it matters

## Carry Forward
Old routes that should still appear in the next Navigation map.

## Retire
Old routes that should not be resurrected unless new evidence appears.

## Keep Blocked
Old routes that still matter but remain gated.

## Needs Check
Old routes whose current meaning is uncertain.

## Ignore For This Question
Old routes that may exist historically but are irrelevant to this Navigation question.

## Handoff To Navigation
What the next Navigation run should remember.

## Confidence Limits
What was not checked, or why the review may be incomplete.
```

Example:

```markdown
## Retire

Route: Add warm-up README
Source: devdocs/navigation/next_load_bearing_after_navigation_warmup.md
Reason: later inquiry concluded the README adds duplicate authority and was removed.
Navigation instruction: do not list README creation as an active route.
```

## Finding Summary

- The previous immutability conclusion is still correct: old `devdocs/navigation/*.md` maps should remain historical snapshots.

- The weaker part is framing this as a "prior-map overlay" or "route reconciliation." Those names make the operation sound like bookkeeping.

- Better model:

```text
old navigation map
  = old route memory snapshot

Route Memory Review
  = decide what old route memory should do in the next Navigation run

inline Route Memory Review
  = review passed directly into the next Navigation run

saved Route Memory Review
  = review saved only when durable handoff is needed

new navigation map
  = current route-space enumeration
```

- Therefore the operation should be named and understood as **Route Memory Review**.

- Default should be inline for small same-session use. Save a file when durable handoff, cross-session use, large route memory, expensive reconstruction, or explicit user request makes the file valuable.

## Finding

### 1. The Best Solution Is Not "Always Write A File"

A separate file is useful, but not always necessary.

It is useful when:

- another session needs to consume the review;
- many prior maps or route cards were read;
- the review is expensive to reconstruct;
- the review should survive the current conversation;
- the user explicitly asks for a durable artifact.

It is not necessary when:

- Navigation will run immediately in the same warmed session;
- only a small number of old routes matter;
- the review only says "no relevant prior maps";
- the review can be safely included inline in the next Navigation prompt or map.

The operation should be durable when durability carries value, not merely because the operation ran.

### 2. Review Is The Operation; The File Is Optional Storage

The load-bearing operation is:

```text
read old Navigation route memory
compare it against current warm-up context and active authority
sort old routes into Carry Forward / Retire / Keep Blocked / Needs Check / Ignore
hand that review to Navigation
```

That operation can produce:

- an inline Route Memory Review;
- a saved Route Memory Review file;
- a print-only result for no-file runs.

Treating the saved file as the only valid output confuses the storage mode with the Navigation memory operation.

### 3. This Reduces Bloat Without Losing Continuation Memory

Mandatory saved reviews risk creating another artifact stream that future Navigation must discover and reconcile.

The adaptive model keeps the useful part:

- old maps stay immutable;
- stale routes are not silently resurrected;
- current route-memory review remains visible;
- durable handoff exists when it is actually needed.

But it removes the artifact tax for immediate, small, same-session cases.

### 4. Navigation Should Consume The Review, Not Necessarily A File

The handoff rule should become:

```text
Use current warm-up outputs plus the Route Memory Review.
If the review was saved, read the saved review file.
If the review is inline, treat the inline review section as current route-memory context.
Do not treat prior Navigation maps as current authority.
```

This keeps the Navigation boundary intact. Navigation still produces the new current route map. Route Memory Review only prevents stale route memory from misleading the map.

## Next Actions

### Proposed Edits Requiring Approval

- **What:** Rename the concept from "prior-map overlay" / "prior route reconciliation" to **Route Memory Review** in active Navigation docs.
  **Who:** Navigation warm-up support routine.
  **Gate:** Before relying on this routine in real Navigation warm-up.
  **Why:** The current names are too abstract and make the operation harder to understand.

- **What:** Change the saved artifact name from `prior_map_overlay.md` to `route_memory_review.md` or `navigation_memory_review.md`.
  **Who:** Navigation warm-up support routine.
  **Gate:** Only after approval, because this touches naming conventions and existing references.
  **Why:** The saved file should say what it is: a review of old Navigation memory.

- **What:** Update `navigation_context_intake.md` so it routes to Route Memory Review when old route memory matters.
  **Who:** Navigation context router.
  **Gate:** Same naming patch, if approved.
  **Why:** Keeps routing correct without forcing storage policy at the router level.

- **What:** Patch the earlier mutability finding with this naming refinement.
  **Who:** Devdocs inquiry record.
  **Gate:** Same naming patch, if approved.
  **Why:** Prevents the earlier "overlay artifact" wording from remaining the dominant model.

### COULD

- **What:** Add a `Route Memory Used` section to future Navigation maps when an inline Route Memory Review was used.
  **Who:** Future Navigation reference patch after first usage.
  **Gate:** Only if inline reviews need a stable place in map output.
  **Why:** Lets the current Navigation map carry relevant old-route memory without a separate file.

### DEFERRED

- **What:** Create a global route-memory registry or latest-overlay pointer.
  **Gate:** Only after multiple overlays exist and discovery becomes a repeated problem.
  **Why:** It may help later, but it is premature before real overlay usage proves the need.

## Reasoning

Editing old maps was killed again. It destroys historical evidence.

Skipping prior maps was killed as the general rule. It creates route amnesia.

Always saving a review file was refined. Its defense is durable handoff. Its prosecution is artifact bloat and latest-file discovery burden. The correct refinement is to keep saved reviews as an escalation path, not the default identity.

Inline-only review was refined. It is excellent for immediate same-session Navigation, but weak for cross-session handoff.

The surviving model is adaptive:

```text
same-session small review -> inline Route Memory Review
durable handoff or large review -> saved Route Memory Review
explicit no-file run -> print_only
```

The stronger conceptual name is **Route Memory Review**. `prior_map_overlay.md` should be treated as a transitional storage name, not the core concept.

## Source Input

```text
$MVL+

Later, after warm-up, navigator-prior-map-overlay.md reads old maps and writes a new file, for example:

  devdocs/navigation_context/2026-05-04_18-10__prior_map_overlay_homegrown/prior_map_overlay.md

  That new prior_map_overlay.md says things like:

  Old route: "Add warm-up README"
  Source map: devdocs/navigation/next_load_bearing_after_navigation_warmup.md
  Current state: superseded
  Evidence: 2026-05-04_17-49__navigation_warmup_readme_necessity/finding.md says README is bloat and was removed.
  Navigation impact: do not list README creation as an active route anymore.

is this best solution ? think harder... run mvl skills one by one , not at once... and do not use subagents
```
