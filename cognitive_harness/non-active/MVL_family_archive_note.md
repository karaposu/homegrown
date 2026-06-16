# Archive note — the MVL worker-loop family (`MVL`, `MVLw`, `aMVLw`, `aMVLwr`)

**Status:** deprecated/retired. The active worker loop runner is now **`/traverse`** at `cognitive_harness/traverse/`.

**Move date:** 2026-06-14.

## What these were

The MVL family was the project's worker loop runners — each ran one inquiry to a `finding.md` by chaining the thinking disciplines in a fixed pipeline. They were not co-equal variants; they were the **incremental build-up of one canonical loop**, each adding a missing cognitive operation:

| Retired runner | Pipeline | flow-type |
|---|---|---|
| `MVL` | S → I → C (the SIC kernel; also the fast/lightweight mode) | `classic` |
| `MVLw` | Su → S → D → I → C | `extended-surfacing` |
| `aMVLw` | A → Su → S → D → I → C | `articulated-surfacing` |
| `aMVLwr` | A → Su → S → D → I → C → R | `articulated-surfacing-routed` |

(A = Articulate-Simple · Su = Surfacing · S = Sensemaking · D = Decomposition · I = Innovation · C = Critique · R = Routelister exhaust. `MVL+` — the earlier explore-variant `E → S → D → I → C` — was retired before these and already lives in this folder.)

## What supersedes them, and why they were moved

**`/traverse` is the one canonical complete worker loop** (the full A → Su → S → D → I → C → R pipeline). `aMVLwr` is its literal predecessor — `/traverse` is a renamed copy of `aMVLwr`, behaviorally identical, same `articulated-surfacing-routed` flow-type. `MVL` / `MVLw` / `aMVLw` are the earlier, less-complete stages of that same loop (canon's own ordering argues each upstream step is needed — e.g., without surfacing, sensemaking anchors on superficial features). They were retired by the decision that there is **one true loop (the complete pipeline); the earlier stages were incomplete.** The naming change `aMVLwr → traverse` is recorded in `docs/canon/naming_change.md`.

## History is preserved, not lost

The inquiry corpus (~hundreds of `finding.md` files) and several canon docs legitimately reference `MVL`, `MVLw`, `aMVLwr`, and their flow-types — those are **immutable historical records** (a finding that says "aMVLwr" is correct for its time). Moving the source here (rather than deleting it) keeps the prior runner specs readable for anyone tracing the project's evolution; `docs/canon/naming_change.md` is the old-name → new-name bridge. Existing inquiries carrying the `articulated-surfacing-routed` flow-type remain resumable by `/traverse` (same flow-type); inquiries on the older flow-types are historical and complete.

## What lives here

- `MVL/SKILL.md`, `MVLw/SKILL.md`, `aMVLw/SKILL.md`, `aMVLwr/SKILL.md` — the prior runner specs (deprecated).

These files are **not loaded by any active runner, discipline, or installer**. Reading them is informational only — useful for understanding the prior design, not for invoking a loop. The installer (`install_for_claude.sh`) installs only `/traverse` as the worker runner.

## When this folder's contents may eventually be removed

They remain as long as in-flight artifacts and canon/findings reference the old names — which, since the corpus is append-only history, is effectively permanent. Removal, if ever, is a separate cleanup; none is scheduled.
