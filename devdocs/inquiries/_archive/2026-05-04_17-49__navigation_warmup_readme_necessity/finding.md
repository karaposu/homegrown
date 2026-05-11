---
status: active
corrects:
  - devdocs/navigation/next_load_bearing_after_navigation_warmup.md
  - devdocs/inquiries/2026-05-04_17-40__prior_navigation_map_overlay_mutability/finding.md
impacts:
  - homegrown/navigation/warmup/
  - homegrown/protocols/navigation_context_intake.md
---
# Finding: Navigation Warm-Up README Necessity

## Question

Does `homegrown/navigation/warmup/README.md` need to exist as the run-order file for Navigation warm-up, or is it duplicate structure that bloats the system?

The goal is to decide whether the README is load-bearing, whether its role should live elsewhere, and what should be edited to keep Navigation warm-up lean.

## Finding Summary

- The user's concern is correct: the warm-up README is not load-bearing right now.

- It duplicates the routing role already owned by `homegrown/protocols/navigation_context_intake.md`.

- The detailed operational logic already lives in the individual warm-up files:
  - `navigator-warmup1.md`
  - `navigator-warmup2.md`
  - `navigator-warmup3.md`
  - `navigator-prior-map-overlay.md`
  - `navigator-refresh.md`

- The clean design is:

```text
navigation_context_intake.md = router / run-order controller
individual warm-up files = operational routines
README.md = not needed yet
```

- Remove `homegrown/navigation/warmup/README.md` for now.

- Recreate a README only if the folder becomes hard to use despite the router, or if non-Codex users need a directory-level human index.

## Finding

### 1. The README Creates A Third Authority

Navigation warm-up currently has three places that can describe order:

```text
homegrown/navigation/SKILL.md
homegrown/protocols/navigation_context_intake.md
homegrown/navigation/warmup/README.md
```

That is too much for a young protocol surface.

The intended authority split is already clear:

```text
Navigation skill = freshness preflight before map production
navigation_context_intake.md = which warm-up path to use
warm-up files = how to perform each warm-up operation
```

The README adds another place that must stay synchronized without owning a distinct operation.

### 2. Folder Discoverability Is Useful But Not Load-Bearing Yet

A README can be useful as a directory index. But at this stage the folder only has five operational files, all named clearly.

The run order is already in `navigation_context_intake.md`, which is the correct controller because it handles conditional routing:

- bounded context -> Navigation directly;
- cold project session -> warmup1 -> warmup2 -> warmup3 -> optional overlay -> Navigation;
- stale warmed session -> refresh -> Navigation;
- global boundary changed -> full warm-up again.

A folder README cannot own those conditions without duplicating the controller.

### 3. The Overlay Rule Survives Without README

The important rule from the prior inquiry still survives:

```text
after warmup1/2/3, read prior maps only if they exist and matter;
do not edit old maps;
write prior_map_overlay.md as current interpretation.
```

That rule belongs in:

- `navigator-prior-map-overlay.md` as the operational contract;
- `navigation_context_intake.md` as the routing condition.

It does not require a README.

## Next Actions

### MUST

- **What:** Remove `homegrown/navigation/warmup/README.md`.
  **Who:** Navigation warm-up folder.
  **Gate:** Now.
  **Why:** It duplicates the context router and adds another synchronization point.

- **What:** Remove `README.md` from the canonical file list in `navigation_context_intake.md`.
  **Who:** Context router.
  **Gate:** Same patch.
  **Why:** Prevents the deleted README from remaining implied as active architecture.

- **What:** Keep run-order and conditional routing in `navigation_context_intake.md`.
  **Who:** Context router.
  **Gate:** Ongoing.
  **Why:** The router is the right place for conditional session-state decisions.

### COULD

- **What:** Recreate a README later as a pure index.
  **Who:** Future warm-up folder maintenance.
  **Gate:** Only if users or agents repeatedly fail to discover the warm-up files from `navigation_context_intake.md`.
  **Why:** A README may become useful for human browsing, but it should not be a second router.

## Reasoning

Keeping the README was killed for now. Its defense is discoverability. Its prosecution is stronger: it duplicates routing state and increases drift risk.

Moving run order into `navigator-prior-map-overlay.md` was killed. That file owns one operation, not the whole session lifecycle.

Keeping run order in `navigation_context_intake.md` survived. That file is already the router and can express conditions without duplicating every warm-up routine.

The lean shape is:

```text
homegrown/protocols/navigation_context_intake.md
  -> decides route

homegrown/navigation/warmup/*.md
  -> execute routines
```

No README is needed until real usage proves the folder needs a separate human index.

## Source Input

```text
$MVL+

homegrown/navigation/warmup/README.md

Keep this as the run-order file. It should say:

- after warmup1/2/3, run navigator-prior-map-overlay.md only if prior maps exist and matter;
- old maps are historical snapshots;
- overlay writes separate current interpretation.

hmm, why we need a readme file there? i feel like this is bloating things. maybe this is not neededat all ?
```
