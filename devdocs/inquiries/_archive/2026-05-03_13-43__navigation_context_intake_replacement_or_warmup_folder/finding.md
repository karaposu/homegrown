---
status: active
refines: devdocs/inquiries/2026-05-03_13-07__navigation_warmup_v1_v2_v3_sufficiency/finding.md
---

# Finding: Navigation Context Intake Replacement Or Warm-Up Folder

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-03_13-07__navigation_warmup_v1_v2_v3_sufficiency/finding.md`

**Revision trigger:** The prior finding decided that `navigation-project-warmup_v1.md`, `navigation-project-warmup_v2.md`, and `navigation-project-warmup_v3.md` should become the Navigator warm-up spine. The new question asks what to do with `homegrown/protocols/navigation_context_intake.md` and where the warm-up files should live.

**What's preserved:** v1/v2/v3 remain the detailed warm-up routine.

**What's changed:** `navigation_context_intake.md` should no longer be treated as the detailed warm-up procedure.

**What's new:** The preferred long-term location for v1/v2/v3 is `homegrown/navigation/warmup/`, not `homegrown/protocols/navigation/`.

**Migration:** Keep the root warm-up files temporarily while they are still being edited. After `navigation-project-warmup_v3.md` is cleaned, move the routine under `homegrown/navigation/warmup/` and shrink `navigation_context_intake.md` into a tiny wrapper.

## Question

Should `homegrown/protocols/navigation_context_intake.md` be removed, rewritten to use `navigation-project-warmup_v1.md`, `navigation-project-warmup_v2.md`, and `navigation-project-warmup_v3.md`, or should the warm-up files be moved under a new `homegrown/protocols/navigation/` folder?

The goal is to decide file organization and protocol responsibility so Navigator warm-up is easier to use now and scalable later.

## Finding Summary

- Do not remove `homegrown/protocols/navigation_context_intake.md` immediately. It still contains useful invariants: warm-up runs once per session, rerun happens only on boundary/staleness/missing-context failure, Navigation consumes the result, and missing-context warnings must be preserved.

- Do not keep `navigation_context_intake.md` as-is. Its detailed profile/mode/stage machinery is now the wrong main interface because v1/v2/v3 are simpler and closer to the user's intended routine.

- Rewrite `navigation_context_intake.md` into a tiny transitional wrapper. It should point to v1/v2/v3 as the execution routine and keep only run/rerun, handoff, routing, and after-use review invariants.

- Do not create `homegrown/protocols/navigation/` now. That path creates a second Navigation namespace beside the existing `homegrown/navigation/` discipline folder and blurs the difference between Navigation-owned support routines and shared protocols.

- After `navigation-project-warmup_v3.md` is cleaned, move v1/v2/v3 under `homegrown/navigation/warmup/`. That path says the right thing: these files are warm-up support material for the Navigation discipline.

## Finding

The active detailed Navigator warm-up procedure should be v1/v2/v3.

`navigation_context_intake.md` should stop being the detailed procedure. It should become a short wrapper that protects a few cross-cutting rules while delegating actual execution to the warm-up routine.

The clean ownership model is:

```text
homegrown/navigation/
  SKILL.md
  references/navigation.md
  warmup/
    navigator-warmup1.md
    navigator-warmup2.md
    navigator-warmup3.md
    README.md or index.md

homegrown/protocols/
  navigation_context_intake.md   # tiny transitional wrapper
```

The `homegrown/navigation/warmup/` path is better than `homegrown/protocols/navigation/` because Navigation already exists as a discipline at `homegrown/navigation/`. Creating `homegrown/protocols/navigation/` would create two Navigation namespaces with different meanings.

The warm-up files are also not generic shared protocols. They are runnable support routines that prepare context for Navigation. That makes them closer to Navigation than to the protocol layer.

The protocol layer should keep only cross-cutting invariants:

```text
Navigator warm-up runs once per session.
The detailed execution routine is v1 -> v2 -> v3.
Navigation consumes the warm-up outputs as session context.
Rerun only when the context boundary changes, outputs become stale, or Navigation failed due missing context.
Preserve missing-context warnings.
If Navigation selects file-changing work, route through artifact_materialization.
If Navigation selects a child inquiry, route through branch_inquiry.
After first real use, review whether warm-up reduced user context steering.
```

The migration should not happen all at once. `navigation-project-warmup_v3.md` still needs cleanup. Moving an unfinished command into a canonical Homegrown folder would make the canonical folder carry a known rough edge.

The order should be:

1. Clean `navigation-project-warmup_v3.md`.
2. Create `homegrown/navigation/warmup/`.
3. Move v1/v2/v3 there with stable names.
4. Add a short `README.md` or `index.md` in the warm-up folder that states run order and session boundary.
5. Rewrite `homegrown/protocols/navigation_context_intake.md` as a tiny wrapper.
6. Use the routine once in a real Navigator session.
7. Then decide whether the wrapper should be renamed, removed, or kept for compatibility.

## Next Actions

### MUST

- **What:** Clean `navigation-project-warmup_v3.md`.
  **Who:** Warm-up command file.
  **Gate:** Before moving v1/v2/v3 into a canonical Homegrown folder.
  **Why:** Prevents the canonical warm-up folder from containing a known unfinished command.

- **What:** Create `homegrown/navigation/warmup/` and move v1/v2/v3 there.
  **Who:** Navigation discipline folder.
  **Gate:** After v3 cleanup.
  **Why:** Places the warm-up routine near the discipline that consumes it.

- **What:** Add a small `README.md` or `index.md` to `homegrown/navigation/warmup/`.
  **Who:** Warm-up folder.
  **Gate:** Same patch as the move.
  **Why:** Makes run order and session boundary obvious without loading the wrapper.

- **What:** Rewrite `homegrown/protocols/navigation_context_intake.md` into a tiny wrapper.
  **Who:** Protocol layer.
  **Gate:** After v1/v2/v3 have stable target paths.
  **Why:** Preserves cross-cutting invariants without duplicating the detailed warm-up routine.

### COULD

- **What:** Keep temporary root-path compatibility notes or root aliases for v1/v2/v3.
  **Who:** Migration patch.
  **Gate:** If recent findings or user habits still point to root files after the move.
  **Why:** Reduces path churn while the routine is stabilizing.

### DEFERRED

- **What:** Delete `navigation_context_intake.md`.
  **Gate:** Only after one real Navigator session uses the new warm-up routine and references are migrated.
  **Why if revived:** Removes the transitional wrapper if it no longer carries useful compatibility or invariants.

- **What:** Rename the wrapper to `homegrown/protocols/navigation_warmup.md`.
  **Gate:** Only if the old filename continues to pull future agents toward the obsolete "context intake" mental model.
  **Why if revived:** Gives the wrapper a clearer name without creating a `protocols/navigation/` namespace.

## Reasoning

Immediate deletion was killed. It would remove duplicate authority, but it would also discard useful session and handoff rules before the v1/v2/v3 routine has one real use.

Keeping `navigation_context_intake.md` unchanged was killed. It preserves useful logic, but it also preserves the wrong main interface. The old file is too parameter-heavy for the warm-up routine the user is trying to build.

Creating `homegrown/protocols/navigation/` was killed for now. The path looks neat, but it creates a second Navigation namespace beside `homegrown/navigation/`. It also mislabels command routines as shared protocols.

Moving v1/v2/v3 into `homegrown/navigation/warmup/` survived. It matches ownership: Navigation consumes the warm-up outputs, so Navigation should own the support routine.

Shrinking `navigation_context_intake.md` into a tiny wrapper survived with a constraint. The wrapper must stay short and delegating. If it starts restating v1/v2/v3 details, it recreates the duplicate-authority problem.

Keeping v1/v2/v3 at repo root survived only temporarily. Root files are useful while drafting, but they are not a stable Homegrown location.

## Open Questions

### Monitoring

- After the first real Navigator warm-up use, check whether the tiny wrapper helped or whether Navigation could work directly from `homegrown/navigation/warmup/README.md`.

### Blocked

- Moving v1/v2/v3 is blocked until `navigation-project-warmup_v3.md` is cleaned.

### Refinement Triggers

- Rename or remove `navigation_context_intake.md` if future work keeps loading it as the old detailed protocol rather than as a wrapper.

- Consider a protocol subfolder convention only if multiple Homegrown protocols need grouped subfolders, not just because Navigation has several support files.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 
homegrown/protocols/navigation_context_intake.md


we should remove this, or make it use /Users/ns/Desktop/projects/native/navigation-project-warmup_v1.md 2 and 3 

maybe we should create /Users/ns/Desktop/projects/native/homegrown/protocols/navigation/ and put v1 v2 v3 there? or this is bad idea?
```

</details>
