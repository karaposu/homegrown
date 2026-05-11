---
status: active
refines: devdocs/inquiries/inquiry_md_remaining_value_audit/finding.md
corrects: devdocs/inquiries/inquiry_md_remaining_value_audit/finding.md
---
# Finding: wayfinding_navigation_unification_check

## Changes from Prior

This finding **REFINES + CORRECTS** the just-completed `devdocs/inquiries/inquiry_md_remaining_value_audit/finding.md`. Both relationships apply: REFINES describes the targeted refinement of most of the prior audit's punch list (B.1 wording target updated, D.1 reversed, others preserved); CORRECTS describes the specific structural error the prior audit made on the wayfinding-vs-navigation question.

**What's preserved:** The prior audit's verdict that `commands/inquiry.md` should be trimmed (not deprecated) is preserved — `/inquiry`'s remaining unique value (CONFIGURE: variable-pipeline classification) stands. The prior audit's five preserved Steps stand: (A.1) clean cuts in inquiry.md removing duplicative content; (C.1) SYNTHESIZE rewrite with CONCLUDE rename; (E.1) Rules trim 8→6; (F.1) cross-reference from `commands/MVL.md` and `commands/MVL+.md` to `/inquiry` for variable-pipeline scenarios; (F.2) cross-reference in `thinking_disciplines/protocols/desc.md` naming `/inquiry` as CONFIGURE's canonical implementation.

**What's changed:** The prior audit concluded "/navigation does not subsume /wayfinding; different cognitive roles, both stay; trim inquiry.md while keeping /wayfinding canonical." This finding **REVERSES** that conclusion on the wayfinding-vs-navigation question specifically. The shipped text in `commands/navigation.md` (line 439-441) explicitly says "Navigation REPLACES wayfinding," and three prior inquiries (`navigation_placement`, `sic_navigation_integration`, `search_equals_navigation_plus_x`) converge on enumeration-as-canonical and selection-as-downstream — together with the multi-head end-goal trajectory in `enes/desc.md`, this is the project's actual position. The prior audit missed the navigation.md REPLACES line because its classic /MVL pipeline (S→I→C, no exploration phase) didn't surface the territory needed to ground the verdict.

**What's new:**
1. **DELETE `commands/wayfinding.md`** with substance migration into `commands/navigation.md`. Path A.2 (essential migration) recommended; A.1 (comprehensive) features deferred with observable gates.
2. **`commands/navigation.md` extends from 491 to ~550 lines** by absorbing /wayfinding's load-bearing substance: DIAGNOSE as 16th type (Process category, auto-derivable from sensemaking-stall signals); reachability/gates check added to Step 1; REVISIT extended with three sub-actions (RESURRECT/INVALIDATE/REVERT) as a sub-table with threshold-aware confidence.
3. **`thinking_disciplines/old_meta-search.md` deleted** (doubly orphaned post /wayfinding deletion; git history preserves both files).
4. **`commands/inquiry.md`'s wayfinding-table replacement (the prior audit's B.1)** has its cross-reference target changed from /wayfinding to /navigation; inline list reframed as iteration-boundary /navigation types organized by category.
5. **The prior audit's D.1** (the cross-reference paragraph that was going to be added to /navigation noting "DIAGNOSE-uncovered") is **REVERSED**: DIAGNOSE will be IN /navigation as a 16th type, not noted as a coverage gap. The post-deletion historical context is captured in /navigation.md's updated "Navigation as the iteration-boundary cognitive discipline" section instead.
6. **Two stalled inquiries marked SUPERSEDED:** `wayfinding_fundamental_fix` (the diagnosed fundamental fix becomes moot post-/wayfinding-deletion) and `sic_as_wayfinder` (the premise that wayfinding is structurally distinct from S/I/C is null post-deletion).

**Migration:** Apply the 7-step punch list in this finding's Next Actions. The prior audit's preserved Steps (A.1, C.1, E.1, F.1, F.2) compose with this finding's migration in one ~1.5-2 hour editing session.

## Question

From `_branch.md`:

> Should `commands/wayfinding.md` be deleted (with its move taxonomy migrated into `commands/navigation.md`) given the project's stated end-goal trajectory of merging loops + multi-head loops, where `/navigation`'s full enumeration of next-directions may be more architecturally aligned than `/wayfinding`'s single-direction selection — and given that 4 of `/wayfinding`'s 6 moves already have `/navigation` equivalents (NARROW ↔ DEEPEN+REFINE; TERMINATE ↔ TERMINATE; RECONSIDER ↔ REVISIT; partial overlap with WIDEN and DIFFERENT APPROACH for BROADEN/SHIFT)?

**Goal:** A defensible architectural verdict on `/wayfinding`'s fate (delete / keep / refactor) with concrete next-step list, including: end-goal-trajectory analysis (does multi-head genuinely make enumeration the primitive?), DIAGNOSE migration plan (the wayfinding-move with no clean /navigation equivalent), reconciliation with the prior `inquiry_md_remaining_value_audit/finding.md` (whose recommended Configuration includes Step 4 D.1 — adding a /navigation cross-reference paragraph noting DIAGNOSE-uncovered — which directly assumes /wayfinding stays canonical and needs revision if THIS inquiry concludes deletion).

## Finding Summary

- **Verdict: DELETE `commands/wayfinding.md` with substance migration into `commands/navigation.md`.** The shipped text in `commands/navigation.md` lines 439-441 explicitly declares "Navigation REPLACES wayfinding" — the project's canonical position. Four independent anchors converge: (1) the navigation.md REPLACES line; (2) three prior inquiries (`navigation_placement`, `sic_navigation_integration`, `search_equals_navigation_plus_x`) positioning enumeration as canonical and selection as downstream; (3) the multi-head end-goal trajectory in `enes/desc.md` ("runs parallel MVL loops with cross-comparison") makes enumeration the operational primitive; (4) the empirical signal that `homegrown/navigation/SKILL.md` exists with autonomy-ladder integration but `homegrown/wayfinding/` does NOT, indicating /navigation is the canonically-positioned discipline at the agent-skills layer. The just-completed prior audit's "different cognitive roles, both stay" verdict missed the navigation.md REPLACES line because its classic /MVL pipeline lacked an exploration phase.

- **Selection-as-pick-one is a single-head architectural artifact.** Under multi-head architecture (parallel MVL loops with cross-comparison, per `enes/desc.md`), each head consumes the enumeration and picks its own direction — no single global "pick ONE" operation. /wayfinding's "pick ONE move at iteration boundary" framing is single-head-only and superseded. The substance underneath that framing (Three-Layer Awareness Model, RECONSIDER sub-actions, threshold logic, layer-priority resolution, reachability/gates topology) is NOT superseded; it's load-bearing for higher-autonomy and multi-head scenarios and migrates into /navigation.

- **`commands/navigation.md` extends from 491 to ~550 lines via essential migration (Path A.2):** (a) **DIAGNOSE added as 16th type in Process-Directed category** with auto-derivable trigger (sensemaking-stall signals: oscillation across iterations, velocity negative for 2+ iterations, OR layer-conflict between memory of past kill conditions and current convergence signals); (b) **reachability/gates check added as a sub-bullet in Step 1 (Read and assess)** — before type assignment, identify which directions are accessible vs gated behind prerequisites; (c) **REVISIT type extended with three sub-actions (RESURRECT/INVALIDATE/REVERT) as a sub-table** with threshold-aware confidence (threshold self-adjusts based on loop state — low in early iterations, high near convergence, minimum when no SURVIVE candidates exist); (d) **internal consistency follow-through** (15-type → 16-type throughout; auto-derivable count 11→12; the "Navigation REPLACES wayfinding" paragraph rewritten as "Navigation as the iteration-boundary cognitive discipline" reflecting the post-deletion state). A.1 comprehensive features (threshold self-adjustment beyond REVISIT, layer-priority tiebreaker rule, /wayfinding failure modes absorption) are DEFERRED with observable gates.

- **The prior audit's `inquiry_md_remaining_value_audit/finding.md` is REFINED + CORRECTED.** Most of its punch list stands: (A.1) clean cuts in inquiry.md, (C.1) SYNTHESIZE rewrite with CONCLUDE rename, (E.1) Rules trim 8→6, (F.1) cross-references from `/MVL` and `/MVL+`, (F.2) cross-reference in `thinking_disciplines/protocols/desc.md`. Two changes: (i) the **B.1 wording** (replacement for /inquiry.md's wayfinding-table at lines 173-216) has its cross-reference target changed from /wayfinding to /navigation; the inline list is reframed as iteration-boundary /navigation types organized by category (Content / Process / Context); (ii) the **D.1 paragraph** (which was going to be added to /navigation noting DIAGNOSE-uncovered) is REVERSED — DIAGNOSE is now IN /navigation, not uncovered. The post-deletion historical context is captured in /navigation.md's updated relationship-to-other-disciplines section.

- **Two stalled inquiries marked SUPERSEDED:** `wayfinding_fundamental_fix` (its diagnosed fundamental fix to /wayfinding — expanding layers with goal awareness, impact assessment, path enumeration — becomes moot post-deletion; the substance is in /navigation already by this finding's migration) and `sic_as_wayfinder` (its premise that "wayfinding is structurally distinct from S/I/C" is null post-deletion). Three other related inquiries (`navigation_placement`, `sic_navigation_integration`, `search_equals_navigation_plus_x`, `post_completion_navigation`) are NOT marked superseded — their conclusions stand and align with this finding's verdict.

- **Migration is bounded and reversible.** Total ~1.5-2 hour editing session across 7 files. Net project change: ~-750 lines (mostly from deleting `commands/wayfinding.md` (~381 lines) and `thinking_disciplines/old_meta-search.md` (~431 lines)). All edits are git-reversible. The deferred A.1 comprehensive features have observable revival gates (after 5-10 inquiries invoke /navigation post-migration; when autonomy-ladder Level 2 operations begin per `enes/desc.md`; when ≥3 false-resurrections OR ≥3 missed-resurrections occur across 10 REVISIT invocations).

## Finding

### 1. The contradiction the prior audit missed

The prior `inquiry_md_remaining_value_audit/finding.md` (the just-completed audit on `commands/inquiry.md`) concluded: "/navigation does not subsume /wayfinding (different cognitive roles: selection vs enumeration); /wayfinding stays canonical." That verdict was confident and structurally framed, but it failed on a specific anchor: it did not ground in `commands/navigation.md`'s shipped text at lines 439-441, which explicitly says:

> *"Navigation REPLACES wayfinding. Wayfinding produced one direction (the 'highest-impact' move). Navigation produces the FULL space of directions. Wayfinding was navigation + implicit selection in one step. Navigation separates them: enumerate first, select separately. The separation is an improvement — you see everything before committing."*

This is canonical project text in the canonical /navigation spec. It states the project's position on wayfinding-vs-navigation directly. The prior audit's verdict directly contradicts it.

The most likely explanation: the prior audit ran the classic `/MVL` pipeline (S → I → C), which has no Exploration phase. Without exploration, sensemaking based its analysis on the territory it happened to inspect, not on a deliberately-mapped territory. The /navigation.md REPLACES line was outside the inspected territory. The user's challenge ("navigation's full enumeration approach is better no? wayfinding can be deleted?") correctly intuited that the territory needed re-examination — which is why this inquiry uses `/MVL+` (the extended pipeline with Exploration before Sensemaking).

The exploration phase of THIS inquiry surfaced four independent anchors converging on "navigation replaces wayfinding":

1. **The shipped REPLACES line** in `commands/navigation.md` (above).
2. **Three prior inquiries** that converge on enumeration-as-canonical and selection-as-downstream:
   - `navigation_placement/critique.md`: "Two-tier system: Core (S → I → C) + Boundary (R + N optional)." Navigation IS the Boundary discipline.
   - `sic_navigation_integration/critique.md`: "enumeration only — selection is separate. Navigation in MVL's iteration-complete; produces typed questions; map in `_state.md`; branches as sub-folders."
   - `search_equals_navigation_plus_x/_branch.md`: "Navigation enumerates WITHOUT selecting. It maps the space but doesn't choose."
3. **The end-goal trajectory** in `enes/desc.md` (the project's autonomy-ladder canonical home): the goal includes *"runs parallel MVL loops with cross-comparison"* — multi-head architecture is explicit. Under multi-head, enumeration is the operational primitive (each head consumes the enumeration and picks its own direction); selection-as-pick-one is a single-head artifact.
4. **The homegrown/ skill folder asymmetry**: `homegrown/navigation/SKILL.md` exists with autonomy-ladder integration (auto-derivable vs human-judgment split, multi-head explicit support); there is NO `homegrown/wayfinding/` skill folder. The recent agent-skills reorganization gave canonical disciplines their own SKILL.md + references/ pattern. /wayfinding wasn't given one. Empirical signal of canonical positioning.

These four anchors are independent and converge. The prior audit's verdict is the outlier; the correct verdict is honoring the REPLACES claim by deleting /wayfinding (with substance migration first).

### 2. What gets lost vs preserved on /wayfinding deletion

`commands/wayfinding.md` (381 lines) contains substance not in `commands/navigation.md`. A faithful migration must preserve the load-bearing parts and may discard parts that have not fired in observable practice.

**/wayfinding's substance breaks down by load-bearing-status under the multi-head end-goal:**

| /wayfinding feature | What it is | Load-bearing under multi-head? | Migration plan |
|---|---|---|---|
| Six-move taxonomy (NARROW / BROADEN / SHIFT / DIAGNOSE / TERMINATE / RECONSIDER) | Single-direction selection vocabulary | NO — multi-head dispatches to multiple directions; 4 of 6 moves already overlap with /navigation types | Drop the "pick ONE" framing. DIAGNOSE migrates as 16th /navigation type (no clean equivalent currently). |
| Three-Layer Awareness Model (Present / Trend / Memory) | Temporal integration framework | YES — temporal awareness is more important under multi-head (multiple heads producing verdicts; cross-head integration needs Memory layer) | Migrate the substance, drop the explicit "Three-Layer" framing. Present's reachability → /navigation Step 1 sub-bullet; Present/Trend's other components map to existing /navigation telemetry/scope/confidence; Memory's RECONSIDER → /navigation REVISIT extension. |
| RECONSIDER sub-actions (RESURRECT / INVALIDATE / REVERT) | Three directions of past-verdict re-evaluation | YES — cross-head verdict integration produces these signals | Migrate as a sub-table within /navigation's REVISIT row. |
| Threshold self-adjustment for RECONSIDER | Threshold for triggering reconsideration self-adjusts based on loop state | PARTIALLY — useful for autonomous threshold tuning at Level 2-3+; deferrable for now | Migrate the threshold-aware framing for REVISIT confidence (essential migration); defer the explicit self-adjustment formula (DEFERRED with observable gate). |
| Layer-priority resolution (Memory > Trend > Present) | Tiebreaker rule when layers conflict | PARTIALLY — useful when type-derivation produces conflicting types across categories; deferrable for now | DEFER as A.1 COULD: add a tiebreaker rule to /navigation when conflicts emerge in practice. |
| Reachability/Gates topology analysis | Pre-enumeration awareness of what's accessible vs gated | YES — multi-head dispatch needs to know which gates are open before assigning heads to directions | Migrate as a sub-bullet in /navigation Step 1 (Read and assess). |
| 7 failure modes specific to steering | Steering-only failure patterns (steering too early, gate blindness, etc.) | PARTIALLY — some are absorbable into /navigation's existing failure modes; deferrable | DEFER as A.1 COULD: absorb gate blindness, layer conflict paralysis, missed RECONSIDER into /navigation's failure modes section when patterns emerge. |
| The core question ("what action would change the landscape MOST?") | Information-maximizing question | NO — this is selection's framing; multi-head dispatch makes it per-head | Drop. Each /navigation invocation under multi-head asks per-head version implicitly. |

**Path A.2 (recommended) covers the YES rows:** DIAGNOSE-as-16th-type + reachability/gates + REVISIT sub-actions + REVISIT threshold-aware confidence framing. Plus internal consistency throughout /navigation.md.

**Path A.1 (DEFERRED with gates) covers the PARTIALLY rows:** explicit threshold self-adjustment formula, layer-priority tiebreaker rule, /wayfinding failure modes absorption. These are migrated when observable gates fire (autonomy-ladder Level 2 operations begin; ≥3 false/missed-resurrections in 10 REVISIT invocations).

### 3. The selection-vs-enumeration distinction at multi-head

The prior audit framed selection and enumeration as "different cognitive roles." This finding sharpens the framing: selection IS a cognitive operation, but its substance is multi-faceted, and most of its substance is multi-head-aligned (and thus lives naturally in the enumeration discipline).

Under single-head architecture (the current state for many inquiries):
- /navigation enumerates 16 typed directions.
- The user (or autonomous agent) picks ONE direction.
- /MVL runs the next iteration on that direction.

Under multi-head architecture (the end-goal):
- /navigation enumerates 16 typed directions.
- The dispatcher (or each head autonomously) picks one direction PER HEAD, possibly different.
- N heads run in parallel on different directions.
- Cross-head integration: heads' findings may invalidate each other's kill conditions (RESURRECT signals across heads); merge findings (MERGE type, already in /navigation); revisit prior verdicts under combined evidence.

Selection at multi-head is **per-head**, not global. The substance of selection (knowing what's accessible — reachability; knowing what to revisit when new info arrives — RECONSIDER sub-actions; knowing what's contradictory — layer-conflict signals) operates at the enumeration level, not at a separate "select ONE for the loop" level.

This is why the migration goes INTO /navigation: the substance was always pre-enumeration awareness (reachability) and post-enumeration verdict integration (RECONSIDER), with the "pick ONE" middle being a single-head simplification. The migration doesn't lose substance; it relocates the substance to where it operates.

### 4. The migration plan summary

The migration completes in one ~1.5-2 hour editing session across 7 files (Steps 1-6 are MUST; Step 7 is COULD).

| Step | File | Action | Lines | Time |
|---|---|---|---|---|
| 1 | `commands/navigation.md` | Add DIAGNOSE row + reachability sub-bullet + REVISIT sub-table + consistency updates + Navigation-as-iteration-boundary-discipline section | +50-80 | ~30 min |
| 2 | `commands/wayfinding.md` + `thinking_disciplines/old_meta-search.md` | Delete both | -812 | ~5 min |
| 3 | `commands/inquiry.md` | Apply prior audit's punch list with B.1 modified target + D.1 omitted | -80 to -100 | ~30-45 min |
| 4 | `commands/MVL.md` + `commands/MVL+.md` | Apply prior audit's F.1 cross-references | +6 | ~5 min |
| 5 | `thinking_disciplines/protocols/desc.md` | Apply prior audit's F.2 cross-reference | +1-2 | ~3 min |
| 6 | `devdocs/inquiries/wayfinding_fundamental_fix/_state.md` + `devdocs/inquiries/sic_as_wayfinder/_state.md` | Mark SUPERSEDED with both frontmatter + History | +10-20 | ~5-10 min |
| 7 (COULD) | `devdocs/inquiries/inquiry_md_remaining_value_audit/finding.md` | Add `refined_by:` frontmatter for bidirectional linkage | +2 | ~2 min |

**Total:** ~1.5-2 hours editing. Net project change: ~-750 lines. /navigation.md goes from 491 → ~550 lines (one canonical iteration-boundary discipline post-migration).

Concrete proposed wording for each editing step is in this finding's Next Actions section below.

### 5. Why TRIM-via-migration, not REFACTOR-to-thin-wrapper or DELETE-without-migration

Three alternative paths were considered and rejected:

**REFACTOR /wayfinding to thin selection-from-enumeration wrapper (~80-150 lines) over /navigation:** rejected on transitional-debt grounds. A thin wrapper preserves the "pick ONE move at iteration boundary" framing — which is single-head architecture. At multi-head, the wrapper has no clear role (selection happens per-head from /navigation's enumeration directly). The wrapper is therefore a transitional artifact with no clear endpoint; either its substance migrates eventually (then the wrapper is redundant) or it doesn't (then the substance is split awkwardly across two specs). Migration-then-delete reaches the architectural endpoint directly.

**DELETE /wayfinding without migration:** rejected on substance-preservation grounds. /wayfinding's RECONSIDER sub-actions, reachability/gates, threshold logic — these are load-bearing for higher-autonomy and multi-head scenarios. Empirical underutilization of /wayfinding now (per the user's observation "/wayfinding is not used so much now") is a present-state signal; the multi-head end-goal in `enes/desc.md` makes the substance operationally important at higher levels. Deleting now without migration loses the architectural-prep slot.

**KEEP /wayfinding with cosmetic edits to /navigation.md (e.g., remove the REPLACES line):** rejected on convergent-anchors grounds. Four independent anchors (the navigation.md REPLACES line, three prior inquiries, the multi-head trajectory in enes/desc.md, the homegrown skill-folder asymmetry) converge on /navigation as canonical and /wayfinding as superseded. Reversing the REPLACES line would mean rejecting the converged project trajectory.

The middle path — TRIM-via-migration — preserves the load-bearing substance while honoring the project's stated direction. /navigation grows by ~50-80 lines absorbing what's load-bearing-now (Path A.2); A.1 features are deferred with observable gates for empirical-data-dependent decision later.

### 6. Resulting architecture post-migration

**One iteration-boundary cognitive discipline:** `commands/navigation.md` (~550 lines).
- 16-type taxonomy across Content / Process / Context categories (DIAGNOSE added in Process).
- Step 1 (Read and assess) includes reachability/gates check.
- REVISIT type has three sub-actions (RESURRECT/INVALIDATE/REVERT) as sub-table with threshold-aware confidence.
- Auto-derivable types: 12 (DIAGNOSE added).
- Human-judgment types: 4 (REFRAME, REVISIT, DIFFERENT APPROACH, CONSOLIDATE).
- Multi-head explicit support preserved.

**The /MVL and /MVL+ runners** invoke /navigation at iteration-boundary (the existing `/navigate` references are correct; no rewiring needed).

**`commands/inquiry.md`** (~232 lines post the prior audit's cleanup): CONFIGURE for variable-pipeline classification + RESUME with telemetry-routing + delegation triggers (to /navigation for iteration-boundary, to SYNTHESIZE for post-TERMINATE artifact construction).

**`thinking_disciplines/protocols/desc.md`** (architectural map): names CONCLUDE (alive-embedded in /MVL/MVL+), SYNTHESIZE (alive-named-slot for project-artifact construction), CONFIGURE (alive in /inquiry).

**Stalled inquiries cleaned up:** `wayfinding_fundamental_fix` and `sic_as_wayfinder` marked SUPERSEDED.

The architecture has fewer pieces (one canonical iteration-boundary discipline instead of two divergent specs), one canonical home per piece of substance, and explicit alignment with the multi-head end-goal trajectory.

## Next Actions

### MUST

- **What:** Apply Step 1 — edit `commands/navigation.md` with five sub-edits per the critique's Final Punch List Step 1 (1a DIAGNOSE row in Process category + 1b reachability sub-bullet in Step 1 + 1c REVISIT sub-table with three sub-actions + 1d internal consistency updates throughout + 1e Navigation-as-iteration-boundary-discipline section replacing lines 439-441). Specific proposed wording is in `critique.md` Step 1.
  - **Who:** User (manual editing).
  - **Gate:** Whenever the user is ready to apply the migration.
  - **Why:** Adds DIAGNOSE-as-16th-type + reachability/gates + REVISIT extension + post-deletion historical context. Prerequisite for /wayfinding deletion (substance must migrate first). /navigation goes from 491 → ~550 lines.

- **What:** Apply Step 2 — delete `commands/wayfinding.md` and `thinking_disciplines/old_meta-search.md`.
  - **Who:** User. Commands: `rm /Users/ns/Desktop/projects/native/commands/wayfinding.md` and `rm /Users/ns/Desktop/projects/native/thinking_disciplines/old_meta-search.md`.
  - **Gate:** After Step 1 lands (substance migrated).
  - **Why:** Honors `commands/navigation.md`'s shipped "Navigation REPLACES wayfinding" claim. Removes orphaned files (old_meta-search is doubly orphaned — already labeled "this is now edited and called wayfinding"; if /wayfinding goes, double historical). Git history preserves both for any future reference.

- **What:** Apply Step 3 — edit `commands/inquiry.md`. Apply the prior audit's full punch list (A.1, C.1, E.1) with this finding's variant adjustments: B.1's wording uses /navigation as cross-reference target with iteration-boundary types organized by category (specific wording in `critique.md` Step 3); D.1 paragraph is OMITTED (Step 1's Section update covers the post-deletion note).
  - **Who:** User.
  - **Gate:** After Step 1 lands (so cross-reference targets exist).
  - **Why:** Removes duplicative content from inquiry.md (~80-100 lines net). Trims to coherent role (variable-pipeline configurator + state manager + delegation triggers). The B.1 wording reflects the post-migration canonical home (/navigation).

- **What:** Apply Step 4 — add cross-reference paragraphs to `commands/MVL.md` and `commands/MVL+.md` per the prior audit's F.1 (specific wording in the prior `inquiry_md_remaining_value_audit/finding.md` Next Actions).
  - **Who:** User.
  - **Gate:** Apply alongside Step 3.
  - **Why:** Makes /inquiry findable from /MVL/MVL+ for variable-pipeline scenarios.

- **What:** Apply Step 5 — append CONFIGURE entry to `thinking_disciplines/protocols/desc.md` per the prior audit's F.2 (specific wording in prior audit's Next Actions).
  - **Who:** User.
  - **Gate:** Apply alongside Steps 3-4, OR alongside the pending `protocols_relevance_check` Configuration β work.
  - **Why:** Names the canonical implementation site for CONFIGURE protocol in the architectural map.

- **What:** Apply Step 6 — mark `wayfinding_fundamental_fix` and `sic_as_wayfinder` as SUPERSEDED with both frontmatter status update + History note. Specific wording in `critique.md` Step 6.
  - **Who:** User.
  - **Gate:** Apply alongside Steps 1-5.
  - **Why:** Stalled inquiries with stale ACTIVE status pose a risk that future agents try to resume them. SUPERSEDED status with explicit `superseded_by:` pointer prevents this.

### COULD

- **What:** Apply Step 7 — edit `devdocs/inquiries/inquiry_md_remaining_value_audit/finding.md` frontmatter to add `refined_by: devdocs/inquiries/wayfinding_navigation_unification_check/finding.md`.
  - **Who:** User judgment call.
  - **Gate:** If user wants bidirectional linkage between the two findings (for future agents browsing the prior audit and discovering it has been refined).
  - **Why (if applied):** Makes the refinement relationship findable from BOTH findings. Without this, only this finding's frontmatter expresses the linkage; readers of the prior audit's finding alone don't see that it has been refined unless they navigate to the inquiry tree. ~2 lines edit.

- **What:** Apply A.1 comprehensive features in /navigation.md — threshold self-adjustment formula extracted from /wayfinding's Memory layer; layer-priority tiebreaker rule for cases where types from multiple categories apply; /wayfinding failure modes (gate blindness, layer conflict paralysis, missed RECONSIDER) absorbed into /navigation's failure modes section.
  - **Who:** User judgment call.
  - **Gate:** If user prefers comprehensive consolidation in one pass over data-driven incremental migration. Would add ~100-150 lines beyond Step 1's essentials.
  - **Why (if applied):** Single comprehensive editing pass eliminates incremental drift; user doesn't have to revisit /navigation in 6-12 months when gates fire. Trade-off: some features (threshold self-adjustment, layer-priority) have no current operational data; migrating them is preserving documentation rather than active substance.

### DEFERRED

- **What:** Empirical observation of which absorbed features fire in /navigation post-migration.
  - **Gate:** After 5-10 inquiries that invoke /navigation post-migration. Observable: count invocations of DIAGNOSE, RESURRECT/INVALIDATE/REVERT, reachability/gates checks across the inquiry tree.
  - **Why (if revived):** If 0 invocations across 10 inquiries, those features are deletion candidates — they were preserved on architectural-prep grounds but never fired, supporting eventual minimization. If 1+ invocations, they're load-bearing and the migration was correct.

- **What:** Apply A.1 comprehensive features (threshold self-adjustment formula, layer-priority tiebreaker rule, /wayfinding failure modes absorption).
  - **Gate:** When ANY of: (a) autonomy-ladder Level 2 operations begin (system selecting types autonomously, per `enes/desc.md`'s Level 2 milestone), OR (b) ≥3 false-resurrections OR ≥3 missed-resurrections occur across 10 REVISIT invocations (specific count threshold to satisfy gate-specificity rule), OR (c) /navigation fails on a multi-head dispatch scenario where layer-priority tiebreaker would have produced a different (and better) verdict.
  - **Why (if revived):** Migrates the comprehensive substance when observable signals indicate it's needed. Until then, preservation-via-deferral keeps /navigation simpler.

- **What:** /navigation complexity reassessment.
  - **Gate:** When `commands/navigation.md` grows beyond ~700 lines OR when readers report navigability issues (new agents say "this spec is hard to find what I need in").
  - **Why (if revived):** /navigation may grow as more substance migrates; at some point the spec may need refactoring into sub-files (e.g., `navigation/SKILL.md` + references/navigation.md + references/types.md). Currently /navigation is one file at 491 lines (550 post-migration); refactor decision deferred.

## Reasoning

### Why this finding refines + corrects, not rejects, the prior audit

The prior `inquiry_md_remaining_value_audit/finding.md` got most things right: per-section verdict on inquiry.md (correct — wayfinding-table is duplicative summary; loop pattern is superseded; cross-session resume is superseded; SYNTHESIZE pending rewrite); the recommended Configuration's Steps A.1 / C.1 / E.1 / F.1 / F.2 (correct — none touch wayfinding/navigation, all stand). The audit's "keep with refined role" verdict on /inquiry is preserved.

What the prior audit got wrong was specifically the wayfinding-vs-navigation question. Its sensemaking concluded "different cognitive roles, both stay" without inspecting `commands/navigation.md`'s shipped REPLACES line. The error was localized to one specific verdict, not a systemic flaw in the audit's reasoning.

The dual-relationship frontmatter (REFINES + CORRECTS) is the precise expression: REFINES describes the targeted refinement of B.1 (wording target updated) and D.1 (reversed) and the preservation of the rest; CORRECTS describes the specific verdict reversal on wayfinding-vs-navigation. Single-label alternatives lose precision: REFINES alone misses the "this verdict was wrong" signal; SUPERSEDES alone overstates (most of the prior is still operative).

### Why selection IS a cognitive operation but lives in /navigation post-migration

The prior audit's "selection vs enumeration as different cognitive roles" framing was partially right (the substance is real and load-bearing) and partially wrong (the substance lives in the enumeration discipline, not in a separate selection discipline). Three structural arguments for the migration locus:

1. **Multi-head dispatch consumes enumeration directly.** Each head picks a direction from the enumerated map. There is no separate "select ONE for the loop" operation; each head's selection is per-head, derived from the enumeration. The substance of selection (knowing reachability, knowing what to RECONSIDER, etc.) is consumed at the dispatch step, which operates on /navigation's output.

2. **Cross-iteration integration belongs at the enumeration level.** RECONSIDER signals (RESURRECT/INVALIDATE/REVERT) come from new information across iterations. /navigation reads the accumulator and detects these signals; they become REVISIT items in the enumerated map. A separate selection discipline would either duplicate this detection or be redundant.

3. **Reachability is pre-enumeration awareness, not selection.** The reachability/gates check answers "which directions are accessible BEFORE we enumerate them?" — that's part of /navigation's read-and-assess phase. Asking it in a separate selection discipline would be too late (you'd have already enumerated unreachable directions).

Selection AS A FRAMING is a single-head architectural artifact ("pick ONE move at iteration boundary"). The framing's substance migrates into /navigation; the framing itself is dropped at multi-head.

### KILLs from innovation/critique

- **Piece 2a "fold DIAGNOSE into REFRAME"** (KILL on structural-correctness) — REFRAME's directive is "change the question entirely"; DIAGNOSE's directive is "drop back to sensemaking on the gap." REFRAME assumes you have a new question to substitute; DIAGNOSE doesn't necessarily produce a new question (it produces a refined understanding of what the gap is). Operationally distinct.
- **Piece 2a "human-judgment classification"** (KILL on structural-correctness) — the classification reflects derivability principle (auto-derivable from observable signals), not implementation maturity. Sensemaking-stall signals (oscillation, velocity, layer-conflict) are mechanically detectable from accumulator data; calling DIAGNOSE "human-judgment" miscategorizes alongside REFRAME (which requires actual subjective judgment about whether the question is wrong).
- **Piece 2b "Context-Directed UNBLOCK extension"** (KILL on structural-correctness) — UNBLOCK acts on a known blocker (resolve a dependency). Reachability is the cognitive operation of seeing the gates BEFORE they're recognized as blockers. Pre-enumeration awareness vs post-enumeration action — different operations.
- **Piece 2c "three separate types (RESURRECT/INVALIDATE/REVERT)"** (KILL on spec-coherence) — breaks the "16-type taxonomy" framing; each new type requires its own row, trigger, auto-derivable status. The three modes are STRUCTURALLY one operation (re-evaluate past verdict) with three directions; promoting to types miscategorizes the structure. Sub-table preserves the directional clarity without inflating type count.
- **Piece 3 "tombstone /wayfinding.md"** (KILL on spec-coherence + edit-cost) — tombstone files are an established anti-pattern; create maintenance burden; git history covers reversibility.
- **Piece 7 "SUPERSEDES single-label"** (KILL on naming-clarity) — overstates the relationship. Most of the prior audit's punch list is preserved (A.1, C.1, E.1, F.1, F.2 unchanged). SUPERSEDES implies "this replaces the prior" — wrong because most of the prior is still operative.
- **Piece 8 "don't mark stalled inquiries"** (KILL on coordination-cost) — leaves stalled inquiries in ACTIVE state with no pointer; future agents may attempt resume.

### REFINEs and SURVIVEs

The recommended Configuration emerged from convergent mechanisms (Constraint Manipulation, Combination, Inversion, Absence Recognition, Domain Transfer, Lens Shifting) all pointing the same direction. Alternative variants either survived-with-caveats (acceptable user judgment — A.1 comprehensive scope, delete-only-wayfinding-keep-old_meta-search) or were REFINEd to the recommended (sub-bullet → sub-table; minimal target change → full rewrite; REFINES-only → REFINES+CORRECTS; frontmatter-only marking → both frontmatter+History).

### Reconciliation across iterations

This inquiry ran the extended pipeline (E → S → D → I → C) precisely because the user surfaced a challenge to the prior audit's verdict and wanted full territory-mapping. The exploration phase was load-bearing: it surfaced the navigation.md REPLACES line and the homegrown/ skill-folder asymmetry that the prior audit's classic /MVL pipeline didn't catch. The extended pipeline's value here was in catching what the classic pipeline missed.

This is itself a methodological observation worth recording: when a question challenges a prior finding, the extended pipeline (with exploration) is preferred over the classic pipeline (without). Adding it to user observations may be appropriate.

## Open Questions

### Monitoring

- **Do the absorbed /wayfinding features fire in /navigation post-migration?** Track invocation counts for DIAGNOSE, RESURRECT/INVALIDATE/REVERT, reachability/gates checks. If 0 across 10 inquiries: features are deletion candidates. If 1+: load-bearing, migration was correct.
- **Does /navigation grow unwieldy?** Track line count. If grows beyond ~700, revisit whether substance should split into sub-files (`navigation/SKILL.md` + references/).
- **Do users (or future agents) discover /navigation as the iteration-boundary discipline post-migration?** If users continue to invoke /MVL alone without /navigation, the empirical signal of /navigation's underutilization could indicate the cleanup didn't actually change usage patterns.

### Refinement Triggers

- **Autonomy-ladder Level 2 operations begin** (per `enes/desc.md`'s Level 2 milestone where the system selects types autonomously). At that point, A.1 comprehensive features (threshold self-adjustment formula, layer-priority tiebreaker rule) become operationally important and the DEFERRED migration is revived.
- **≥3 false-resurrections OR ≥3 missed-resurrections in 10 REVISIT invocations.** Empirical signal that REVISIT's threshold needs explicit self-adjustment beyond the threshold-aware framing; trigger A.1's threshold formula migration.
- **A multi-head dispatch scenario fails because layer-priority tiebreaker would have produced a different (and better) verdict.** Empirical signal that the layer-priority tiebreaker rule is needed.

### Research Frontiers

- **Should /navigation and /MVL ever be fused?** /MVL runs the SIC loop; /navigation is invoked at iteration-boundary. The two-tier architecture (Core + Boundary, per `navigation_placement`) is currently stable. But under multi-head, the orchestration role of /MVL grows (parallel head dispatch, cross-head integration); at some point the orchestration may absorb the boundary discipline. Out of scope for this inquiry; flagged for future exploration.
- **Could the 16-type taxonomy converge with the /MVL+'s ESDIC pipeline structure?** Both have categorizations (Content/Process/Context vs E/S/D/I/C). They serve different roles (per-iteration enumeration vs sequential pipeline) but share underlying cognitive structure. A future inquiry could explore whether they emerge from a shared substrate.

## Superseded Inquiries

This finding (the merger of `/wayfinding` into `/navigate`) renders the following five prior inquiries moot. Each has SIC outputs but no `finding.md`; each was formally marked `## Status: SUPERSEDED` in its `_state.md` on 2026-04-27 with a back-pointer to this finding. Listed for archaeological clarity:

- **`devdocs/inquiries/wayfinding_fundamental_fix/`** — asked how to fix `/wayfinding`'s mechanism. The discipline this fix targeted no longer exists post-merger.
- **`devdocs/inquiries/sic_as_wayfinder/`** — asked how `/MVL` could perform wayfinding. `/wayfinding`'s function is now in `/navigate`; the conditional-trigger spec in `devdocs/inquiries/continuous_loop_priorities/finding.md` Item 2 replaces this framing.
- **`devdocs/inquiries/navigation_placement/`** — asked whether navigation is a 4th in-loop discipline (SICN), inter-loop routing, or independent. Resolved: independent discipline invoked conditionally in `/MVL+` (per `continuous_loop_priorities` Item 2).
- **`devdocs/inquiries/sic_navigation_integration/`** — asked how `/navigate` integrates with SIC practically. Resolved: conditional invocation on three triggers (per `continuous_loop_priorities` Item 2).
- **`devdocs/inquiries/search_equals_navigation_plus_x/`** — asked what "search" is structurally as Navigation + X. The 16-type taxonomy in this finding's merged `/navigate` subsumes the search/wayfinding/navigation distinction; the +X decomposition is moot.
