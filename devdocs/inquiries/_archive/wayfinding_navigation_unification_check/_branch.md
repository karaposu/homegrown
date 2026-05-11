# Branch: wayfinding_navigation_unification_check

## Question

Should `commands/wayfinding.md` be deleted (with its move taxonomy migrated into `commands/navigation.md`) given the project's stated end-goal trajectory of merging loops and multi-head loops, where `/navigation`'s full enumeration of next-directions may be more architecturally aligned than `/wayfinding`'s single-direction selection — and given that 4 of `/wayfinding`'s 6 moves already have `/navigation` equivalents (NARROW ↔ DEEPEN+REFINE; TERMINATE ↔ TERMINATE; RECONSIDER ↔ REVISIT; partial overlap with WIDEN and DIFFERENT APPROACH for BROADEN/SHIFT)?

## Goal

A defensible architectural verdict on `/wayfinding`'s fate, with concrete next-step list:

1. **The verdict:** delete `/wayfinding` (migrate moves into `/navigation`), keep both (and refine the prior audit's "different cognitive roles" framing), or refactor (some third option — e.g., `/wayfinding` becomes a thin wrapper that calls `/navigation` and selects one).

2. **End-goal trajectory check:** does multi-head / merging-loops architecture genuinely make enumeration the primitive (and selection a derived operation), OR is selection still a load-bearing operation that doesn't reduce to "pick from enumerated list"?

3. **DIAGNOSE specifically:** if `/wayfinding` is deleted, where does DIAGNOSE go? Extending `/navigation` with a 16th type was KILLed by the prior audit's critique on structural-correctness grounds. If unification is the right end-goal direction, that prior KILL needs to be reconsidered — does the end-goal trajectory invalidate the KILL's reasoning?

4. **Migration plan if delete:** what files change, what wording is needed for the merged `/navigation` spec, what cross-references break, what state gets archived?

5. **The prior audit's verdict:** the just-completed `inquiry_md_remaining_value_audit/finding.md` concluded the wayfinding-table in `inquiry.md` is duplicative summary of `/wayfinding`'s canonical spec, and recommended trimming `inquiry.md` while keeping `/wayfinding` canonical. If THIS inquiry concludes `/wayfinding` should be deleted, the prior audit's punch list (specifically Step 4 — adding the /navigation cross-reference paragraph noting DIAGNOSE-uncovered) needs revision before being applied.

## Scope Check

Question covers goal. Answering "should /wayfinding be deleted in favor of /navigation given end-goal trajectory" requires (a) end-goal-trajectory analysis (multi-head + merging loops), (b) selection-vs-enumeration distinction validity, (c) DIAGNOSE migration, (d) concrete migration plan if delete, (e) reconciliation with the prior audit's still-fresh punch list. All five sub-goals are covered by the central question if examined carefully.

## Context

- **Just-completed prior audit:** `devdocs/inquiries/inquiry_md_remaining_value_audit/finding.md` — concluded `/wayfinding` is canonical home for the 6-move taxonomy; `/navigation` does NOT subsume `/wayfinding`; they serve different cognitive roles (selection vs enumeration). Recommended cleanup punch list explicitly preserves `/wayfinding`. **This inquiry tests whether that verdict was wrong by examining the end-goal trajectory the user just flagged.**

- **The end-goal trajectory the user just named:** "merging loops and creating multi-head loops." This is project-specific context the prior audit did NOT examine. Multi-head architecture means parallel exploration with multiple "heads" working different parts simultaneously; merging loops means combining multiple SIC/ESDIC iterations into a unified flow. Both potentially shift the operational primitive from "pick one direction" (wayfinding) to "enumerate all directions, dispatch heads to different ones" (navigation as the substrate, selection as a downstream consumer of the enumeration).

- **Prior related inquiries:** `navigation_placement`, `post_completion_navigation`, `search_equals_navigation_plus_x`, `sic_as_wayfinder`, `sic_navigation_integration`, `wayfinding_fundamental_fix` — these are likely relevant to exploration phase. Not yet read.

- **Coverage map from prior audit (the verdict this inquiry tests):**
  | Move | /wayfinding | /navigation | /MVL |
  |---|---|---|---|
  | NARROW | full spec | DEEPEN + REFINE (clean) | NARROWER focus |
  | BROADEN | full spec | partial: DIFFERENT APPROACH + WIDEN (messy) | not implemented |
  | SHIFT | full spec | weak: DIFFERENT APPROACH (overlaps with BROADEN) | not implemented |
  | DIAGNOSE | full spec | **no clean equivalent** | not implemented |
  | TERMINATE | full spec | TERMINATE (direct match) | implicit YES branch |
  | RECONSIDER | full spec | REVISIT (direct match) | not implemented |

- **The prior audit KILLed variant D.3** (extend /navigation with a 16th type for DIAGNOSE) on structural-correctness grounds — sensemaking concluded /navigation and /wayfinding serve different cognitive roles and extending /navigation with DIAGNOSE re-couples them. **This inquiry must re-examine that KILL** because its structural-correctness reasoning depended on the "different roles" framing that the user is now questioning.

- **Connection to autonomy-ladder Level 2-3+:** at higher autonomy, the system needs to autonomously orchestrate iteration moves. Multi-head architecture is a Level 3+ feature (parallel autonomous heads). If the project is genuinely heading there, the discipline that supports parallel-head dispatch (enumeration → multi-head dispatch) is the architecturally-load-bearing one; single-direction selection becomes a routine special case (one head, one direction).

- **The user's specific framing:** "navigation's full enumeration approach is better no? and wayfinding's taxonomies also exists in navigation .. so wayfinding can be deleted?" — two claims: (1) enumeration is better for end-goal; (2) wayfinding's content is already in navigation, so wayfinding is redundant. Both need testing.
