---
status: active
refines: devdocs/inquiries/inquiry_vs_mvl_outdated_check/finding.md
---
# Finding: inquiry_md_remaining_value_audit

## Changes from Prior

REFINES `devdocs/inquiries/inquiry_vs_mvl_outdated_check/finding.md` (the prior audit that concluded `/inquiry` is "not strictly superseded" by `/MVL` because of 5 distinct features).

**What's preserved:** The prior verdict that `/inquiry` should be **kept, not deprecated** — its variable-pipeline classification logic is unique-with-no-current-home and remains load-bearing for higher-autonomy levels. The architectural distinction "`/MVL` is the always-S→I→C runner; `/inquiry` is the configurable-pipeline orchestrator" still holds.

**What's changed:** The "5 distinct features" claim collapses to **3 distinct features**, all within the CONFIGURE section. Two of the prior 5 features are no longer uniquely `/inquiry`'s: (1) **the wayfinding move taxonomy** (NARROW/BROADEN/SHIFT/DIAGNOSE/TERMINATE/RECONSIDER) is canonically homed in `commands/wayfinding.md`, not in `commands/inquiry.md` — `inquiry.md`'s table is duplicative summary; (2) **the SYNTHESIZE deliverable** has been refined by `synthesize_vs_finding_split` (`devdocs/inquiries/synthesize_vs_finding_split/finding.md`) into two distinct protocols: CONCLUDE (alive-embedded in `/MVL` and `/MVL+`, implemented as `homegrown/protocols/conclude.md`) and SYNTHESIZE (alive-but-procedurally-underspecified, named slot for autonomy-ladder Level 2-3+).

**What's new:** A specific per-section cleanup punch list for `commands/inquiry.md` (~96 lines of edits across 5 files), removing duplicative content while preserving architectural-prep slots. Also: the discovery that `commands/navigation.md`'s 15-type taxonomy does NOT include a clean equivalent for the **DIAGNOSE** wayfinding-move (which is the meta-recognition that the inquiry process itself is broken — oscillating, stalling, layer-conflict-paralyzed); DIAGNOSE lives only in `/wayfinding`. Also: a coverage map showing which of the 6 wayfinding-moves are covered by which spec.

**Migration:** Apply the punch list in this finding's Next Actions. The prior finding's "keep with refined role" verdict stays in force; this finding sharpens what that refined role is (CONFIGURE + state management + wayfinding/SYNTHESIZE delegation triggers).

## Question

From `_branch.md`:

> What unique value remains in `commands/inquiry.md` that hasn't been superseded by `/MVL`, `/MVL+`, the recently-extracted `homegrown/protocols/conclude.md`, the `/navigation` discipline, or the `/wayfinding` discipline — and specifically: is the wayfinding move taxonomy embedded in `inquiry.md` (NARROW / BROADEN / SHIFT / DIAGNOSE / TERMINATE / RECONSIDER) covered elsewhere, or has it slipped through the cracks of the recent refactoring?

**Goal:** three concrete outputs the user can act on — (1) a per-section verdict on `commands/inquiry.md` classifying each major section as superseded / unique-with-future-home / unique-with-no-current-home; (2) a wayfinding-taxonomy coverage map showing whether each of the 6 moves is covered by `/navigation`'s 15-type taxonomy, by `/wayfinding`'s spec, by `/MVL`'s iteration logic, or genuinely uncovered; (3) a punch list (specific edits with proposed wording) for what to do with `inquiry.md` post-audit.

## Finding Summary

- **The wayfinding move taxonomy is NOT slipping through the cracks.** All six moves (NARROW, BROADEN, SHIFT, DIAGNOSE, TERMINATE, RECONSIDER) are canonically homed in `commands/wayfinding.md` — full specs at lines 153-198 of that file. `commands/inquiry.md`'s table at lines 183-190 is a duplicative summary of those canonical specs; removing the table from `inquiry.md` does not lose the moves (they live in `/wayfinding`). The user's empirical observation that `/wayfinding` is "not used so much now" reflects current usage pattern (the routine path is `/MVL`, which absorbs single-iteration NARROW cases via its iteration-NO branch's "Restate with NARROWER focus" instruction), not structural supersession.

- **`/navigation` does NOT subsume `/wayfinding`.** They serve different cognitive roles: `/wayfinding` is **single-direction selection** (pick ONE move from the 6 at iteration boundary, using the Three-Layer Awareness Model — Present/Trend/Memory layers); `/navigation` is **full enumeration of next-directions** (list ALL applicable types from a 15-type taxonomy of Content / Process / Context categories). `/navigation`'s 15 types overlap with 4 of `/wayfinding`'s 6 moves (NARROW ↔ DEEPEN+REFINE; TERMINATE ↔ TERMINATE; RECONSIDER ↔ REVISIT; partial overlap with WIDEN and DIFFERENT APPROACH for BROADEN/SHIFT) but **DIAGNOSE has no clean `/navigation` equivalent** — the meta-recognition that the inquiry process itself is broken lives only in `/wayfinding`.

- **`/MVL`'s iteration-NO branch implements only NARROW.** The branch's "Restate the question with a NARROWER focus" instruction assumes NARROW is always the right next-iteration move. The other 5 wayfinding-moves (BROADEN, SHIFT, DIAGNOSE, TERMINATE-as-explicit-decision, RECONSIDER) are NOT in `/MVL`'s iteration logic; they require explicit `/wayfinding` invocation. This is an architectural simplification that holds for routine inquiries (and has worked for many inquiries in this conversation) but doesn't accommodate non-NARROW iteration moves automatically.

- **`/inquiry`'s remaining unique value collapses to CONFIGURE.** Of the prior `inquiry_vs_mvl_outdated_check` finding's 5 distinct features, only 3 remain post-extractions, all sub-parts of the CONFIGURE section: (1) **per-branch pipelines** — for Complex problem-types that decompose into sub-pipelines; (2) **the `/diagnose` pipeline placeholder** — for Broken problem-types awaiting the not-yet-built diagnosis discipline; (3) **edge-case problem types** — Ambiguous=S only, Novel=I→C, Clear=I→C. The other 2 prior-claimed features are no longer uniquely `/inquiry`'s: wayfinding-moves now correctly attributed to `/wayfinding`; SYNTHESIZE-deliverable is now identified as a Missing protocol (named slot, not implemented anywhere) per `synthesize_vs_finding_split`.

- **The right action is to TRIM `commands/inquiry.md`, not deprecate it.** Trim removes duplicative content (wayfinding-table, META-SEARCH CHECKPOINT logic, manual SIC-cycle example, loop pattern diagram, Cross-Session Resume) and applies the synthesize_vs_finding_split's pending Configuration β Step 1 (SYNTHESIZE rewrite) using the current canonical name CONCLUDE (the synthesize_vs_finding_split's critique used the now-deprecated name FINDING-COMPILE; this finding adapts the wording to use CONCLUDE). Trim preserves CONFIGURE's variable-pipeline classification logic, RESUME-with-telemetry-routing's architectural-prep slot, and the load-bearing /inquiry-specific Rules (CONFIGURE-first, /inquiry-doesn't-run-disciplines, dead-branch-persistence, circuit-breaker, wayfinding-runs-at-iteration-boundary, SYNTHESIZE-after-TERMINATE-when-needed). Result: `inquiry.md` shrinks from 312 to ~232 lines.

- **The cleanup is bounded and reversible.** ~96 lines of edits across 5 files (`commands/inquiry.md`, `commands/MVL.md`, `commands/MVL+.md`, `commands/navigation.md`, `thinking_disciplines/protocols/desc.md`). 30-45 minutes of focused editing. Each edit is reversible via git if a future signal (e.g., `/inquiry` actually getting invoked, autonomy-ladder progression) suggests reversal.

- **Two follow-on observation points are flagged.** (1) RESUME-with-telemetry-routing in `inquiry.md` is unique-no-home but currently unused — if `/inquiry` is not invoked across the next observation window of inquiries, revisit RESUME's keep/remove decision in a follow-up audit. (2) CONFIGURE's variable-pipeline classification logic is similarly unused — if 0 invocations across the next 5-10 inquiries, the deletion case for `/inquiry` strengthens; if 1+ invocations, the architectural-prep was load-bearing.

## Finding

### 1. The four files in scope, what each one is, and what changed recently

This finding evaluates `commands/inquiry.md` (the original orchestration spec, currently 312 lines) against three other current docs to determine what unique value remains in `inquiry.md`. The three comparison docs are:

- `commands/wayfinding.md` (381 lines) — implements the `/wayfinding` slash command, which is the discipline for selecting ONE iteration-move at the boundary between iterations of an SIC loop. It defines the Three-Layer Awareness Model (Present / Trend / Memory layers) and the six-move taxonomy (NARROW / BROADEN / SHIFT / DIAGNOSE / TERMINATE / RECONSIDER). Each move has a full spec at `wayfinding.md` lines 153-198.

- `commands/navigation.md` (491 lines) — implements the `/navigation` slash command, which is the discipline for **enumerating ALL applicable next-directions** from a 15-type taxonomy. The 15 types are split across three categories: Content-Directed (DEEPEN, REFINE, PURSUE SEED, INVESTIGATE FRONTIER, DEVELOP, TERMINATE), Process-Directed (RE-RUN DEEPER, WIDEN, REFRAME, DIFFERENT APPROACH), Context-Directed (REVISIT, UNBLOCK, MERGE, TEST, CONSOLIDATE).

- `commands/MVL.md` (218 lines, post the recent CONCLUDE extraction) — the auto-runner for the SIC loop (Sensemaking → Innovation → Critique). At iteration completion, it asks: "Is the question answered? YES → load and execute CONCLUDE; NO → restate the question with a NARROWER focus and loop." (`commands/MVL+.md` is the analogous extended-loop auto-runner for E → S → D → I → C.)

Two recent project changes that this audit's verdict turns on:
- **The CONCLUDE extraction (`extract_conclude_to_homegrown` inquiry).** The finding-compilation procedure that used to live inline in `/MVL`'s iteration-complete-yes branch (~107 lines of finding template + style rules + archive + state-update logic) was extracted into `homegrown/protocols/conclude.md` as a standalone flat-file protocol. `/MVL` and `/MVL+` now load and execute CONCLUDE rather than inlining the procedure. The original protocol name proposed in `synthesize_vs_finding_split`'s critique was FINDING-COMPILE; the user renamed it to CONCLUDE before extraction.
- **The synthesize_vs_finding_split finding (`devdocs/inquiries/synthesize_vs_finding_split/finding.md`).** Concluded that SYNTHESIZE (as currently described in `inquiry.md`) and `finding.md` (as produced by `/MVL` and `/MVL+`) are **two structurally distinct protocols**, currently conflated under one name. The split: CONCLUDE produces the verdict-as-output (the inquiry's answer in standardized form, inside the inquiry folder); SYNTHESIZE produces the artifact-the-verdict-was-about (a project artifact in the project's format, outside the inquiry folder). Three structural asymmetries justify the split: input asymmetry, output relationship asymmetry, construction work asymmetry. The finding produced a Configuration β punch list (rewrite `inquiry.md`'s SYNTHESIZE section, split the SYNTHESIZE entry in `protocols/desc.md`, add cross-references in `/MVL` and `/MVL+`) that has not yet been applied. This audit's punch list applies Step 1 of that Configuration β (the inquiry.md rewrite) with the FINDING-COMPILE → CONCLUDE rename.

### 2. Per-section verdict on `commands/inquiry.md`

Each major section of the current `inquiry.md` is classified below. The classification has three categories: **superseded** (canonical home elsewhere; can be removed), **unique-with-future-home** (extract before removing), **unique-with-no-current-home** (either keep in `inquiry.md` or build the home).

| Section (lines in current `inquiry.md`) | Verdict | Reasoning |
|---|---|---|
| **CONFIGURE** (18-96) | Unique-with-no-current-home | Variable-pipeline classification (5 problem types — Ambiguous / Complex / Broken / Novel / Clear → 6 pipelines including the `/diagnose` placeholder and per-branch pipelines for Complex). Currently low-utilization (`/MVL`'s always-S→I→C absorbs the routine cases) but no other file in the project implements problem-type-driven variable pipeline selection. **Keep in `inquiry.md`.** |
| **RESUME with telemetry-routing** (100-149) | Unique-with-no-current-home, currently unused | Per-discipline telemetry threshold check (PROCEED / FLAG / RE-RUN routing based on each discipline's saturation indicators). `/MVL` and `/MVL+` don't have telemetry-routing — they auto-run the next discipline without checking thresholds. The manual `/inquiry → discipline → /inquiry` flow that this section was designed for is rare today. Architecturally a named slot for autonomy-ladder Level 2-3+ where the system needs to autonomously verify telemetry before proceeding. **Keep with observation flag** (revisit if /inquiry remains uninvoked over the next observation window). |
| **Wayfinding move taxonomy table** (183-190, embedded inside META-SEARCH CHECKPOINT block) | Superseded — canonical home is `commands/wayfinding.md` | The table summarizes the 6 wayfinding-moves (NARROW / BROADEN / SHIFT / DIAGNOSE / TERMINATE / RECONSIDER) with one-line descriptions. The full specifications of those 6 moves live at `wayfinding.md` lines 153-198. The table is duplicative summary, not authoritative. **Remove from `inquiry.md`; replace with cross-reference.** |
| **META-SEARCH CHECKPOINT logic** (173-216, surrounding the wayfinding-table) | Superseded — canonical home is `commands/wayfinding.md` | The Three-Layer Awareness Model (Present / Trend / Memory) + move-production logic is `/wayfinding`'s content. `inquiry.md`'s version is summary. The /inquiry-specific responsibility here is just the trigger ("when all pipeline steps complete, run /wayfinding"). **Remove the analysis logic; keep the trigger.** |
| **"How the User Runs a Full SIC Cycle" example** (220-244) | Superseded — `/MVL` and `/MVL+` replaced this | The example shows the manual-typed flow `/inquiry → /sense-making → /inquiry → /innovate → /inquiry → /critic → /inquiry`. This pattern is no longer the project's default — `/MVL` auto-chains S → I → C without manual `/inquiry` invocations between disciplines. Keeping this example creates a false impression that the manual flow is still preferred. **Remove entirely.** |
| **Loop pattern diagram** (246-248, `discipline → inquiry → discipline → ... → wayfinding → discipline → ...`) | Superseded | Same reason as above — the manual chained pattern is replaced by `/MVL`'s auto-run. **Remove entirely.** |
| **SYNTHESIZE — After TERMINATE** (252-285) | Pending rewrite per `synthesize_vs_finding_split` Configuration β Step 1 | Currently conflates the procedure of finding-compilation (which is now CONCLUDE's job, implemented inline by `/MVL` and `/MVL+`) with the procedure of artifact-construction (which is SYNTHESIZE's actual scope, currently performed manually as a named-but-procedurally-underspecified slot). The synthesize_vs_finding_split finding produced proposed wording for the rewrite using FINDING-COMPILE; this audit adapts that wording to use CONCLUDE. **Replace with the C.1 wording in this finding's Next Actions.** |
| **Cross-Session Resume** (289-298) | Superseded by `/MVL`'s Cross-Session Resume | `/MVL` has its own Cross-Session Resume section that auto-loads next-discipline specs. `/inquiry`'s manual-flow Cross-Session Resume is unused. **Remove entirely.** |
| **Rules section** (302-311) | Mixed — surgical trim | 6 of the 8 rules are uniquely `/inquiry`'s (CONFIGURE-first; /inquiry-doesn't-run-disciplines; dead-branches-persist; wayfinding-runs-at-iteration-boundary; circuit-breaker; SYNTHESIZE-after-TERMINATE). 2 are duplicates with `/MVL`'s Rules (`_state.md` is source of truth; discipline commands save to inquiry folder). **Remove the 2 duplicates; refine rule 8 to clarify SYNTHESIZE applies only when project artifact is needed.** |

### 3. Wayfinding move taxonomy coverage map

For each of the six wayfinding-moves in `commands/wayfinding.md`, the table below shows where it is implemented (or not).

| Move | `/wayfinding` (canonical) | `/navigation` (15-type taxonomy) | `/MVL` iteration logic | Net coverage |
|---|---|---|---|---|
| **NARROW** — refine the survivor in a specific aspect when iteration produced a strong survivor | ✓ Full spec at `wayfinding.md` lines 153-198 | ✓ DEEPEN + REFINE (clean equivalent) | ✓ "Restate the question with a NARROWER focus" in iteration-NO branch | **Strong: 3 places** |
| **BROADEN** — try a different angle when all candidates were killed or are clustering | ✓ Full spec | ⚠ Partial: DIFFERENT APPROACH and WIDEN both partially overlap (messy 1-to-2 mapping) | ✗ Not implemented | **Strong in /wayfinding only** |
| **SHIFT** — change focus when the current dimension is exhausted | ✓ Full spec | ⚠ Weak: DIFFERENT APPROACH overlaps (and overlaps with BROADEN's mapping — not clean) | ✗ Not implemented | **Strong in /wayfinding only** |
| **DIAGNOSE** — meta-recognition that the inquiry process itself is broken (oscillating, stalling, layer-conflict-paralyzed); the problem understanding is incomplete, not just the candidates | ✓ Full spec | ✗ **No clean equivalent.** REFRAME ("change the question entirely") and RE-RUN DEEPER ("re-run a discipline with more depth") are partial but neither captures DIAGNOSE's specific meta-recognition signal | ✗ Not implemented | **Only in /wayfinding** |
| **TERMINATE** — converged with a clean survivor; ready for SYNTHESIZE | ✓ Full spec | ✓ TERMINATE (direct match in Content-Directed category) | ✓ Implicit (the YES branch decision in `/MVL`'s iteration-complete check) | **Strong: 3 places** |
| **RECONSIDER** — kill condition invalidated by new information; revisit a previously-killed idea | ✓ Full spec | ✓ REVISIT (direct match in Context-Directed category) | ✗ Not implemented | **Strong in /wayfinding and /navigation** |

**Two important observations from this map:**

1. **DIAGNOSE is the most-asymmetric move.** It has no clean `/navigation` equivalent and no `/MVL` implementation. If a future agent reads only `/navigation`, it may conclude that `/navigation`'s 15 types are exhaustive — missing the DIAGNOSE class of signals entirely. This is a real coverage hazard, addressable by a small `/navigation` cross-reference (see Next Actions D.1).

2. **`/MVL`'s iteration logic is NARROW-only.** The iteration-NO branch unconditionally instructs the runner to "Restate the question with a NARROWER focus." This works for routine inquiries (the inquiries in this conversation have all converged within one iteration), but at higher autonomy levels (`/MVL` running autonomously across many iterations) the system needs the full 6-move vocabulary to handle non-NARROW signals (BROADEN when candidates cluster, DIAGNOSE when the inquiry stalls, RECONSIDER when a kill condition is invalidated). `/wayfinding` is the canonical home for that vocabulary; `/MVL`'s NARROW-only simplification is acceptable for current autonomy level but architecturally incomplete for Level 2-3+.

### 4. /inquiry's distinct features post-extractions: 5 → 3

The prior `inquiry_vs_mvl_outdated_check` finding (`devdocs/inquiries/inquiry_vs_mvl_outdated_check/finding.md`) claimed `/inquiry` has 5 distinct features that prevent it from being strictly superseded by `/MVL`. After the CONCLUDE extraction and the `synthesize_vs_finding_split` finding, that count collapses:

| Prior claim (5 features) | Status now | Where the feature lives now |
|---|---|---|
| Per-branch pipelines (Complex problem-type decomposes into sub-pipelines) | ✓ Still distinct to `/inquiry` | CONFIGURE section |
| Six wayfinding moves | ✗ Not distinct anymore | Canonical home is `/wayfinding` (`commands/wayfinding.md`); `inquiry.md`'s table is duplicative summary |
| SYNTHESIZE deliverable | ✗ Not distinct anymore | Identified by `synthesize_vs_finding_split` as Missing protocol (alive-but-procedurally-underspecified); structurally distinct from CONCLUDE which lives in `homegrown/protocols/conclude.md` |
| `/diagnose` pipeline placeholder | ✓ Still distinct to `/inquiry` | CONFIGURE section (Broken problem-type) |
| Edge-case problem types (Ambiguous=S only; Novel=I→C; Clear=I→C) | ✓ Still distinct to `/inquiry` | CONFIGURE section |

The 3 remaining distinct features are all sub-parts of CONFIGURE. The prior finding's "keep with refined role" verdict is preserved; the role is sharpened: **`/inquiry` is the variable-pipeline configurator + telemetry-gated state manager + delegation-trigger to /wayfinding and SYNTHESIZE.**

### 5. Why TRIM, not deprecate

A defensible alternative — delete `commands/inquiry.md` entirely and migrate CONFIGURE to a new home — was considered and rejected. The rejection reasoning:

1. **Empirical low-utilization ≠ structural supersession** (sensemaking's foundational principle). `/inquiry` being currently underutilized is a present-state observation; the architectural-prep slots (CONFIGURE, RESUME-with-telemetry-routing, dead-branches-persist rule, circuit-breaker rule) are load-bearing for higher autonomy levels.
2. **The project's stated long-term goals make CONFIGURE load-bearing.** Year-long inquiries, parallel branches, `/diagnose` shipping, and Level 2-3+ autonomy all involve scenarios where variable-pipeline classification (problem-type → pipeline selection) becomes operationally important. Deleting now means rebuilding when those scenarios arrive.
3. **Carrying-cost vs rebuild-cost asymmetry.** Carrying an underutilized but architecturally correct spec is small ongoing cost; rebuilding a spec when needed is high one-time cost. Reversibility is not symmetric.
4. **Reversibility favors trim.** If the next observation window shows /inquiry is genuinely never invoked (0 CONFIGURE calls across many inquiries), the deletion decision can be made then — informed by data rather than speculation. Conversely, if /inquiry IS invoked, the cleanup-not-deprecation decision is vindicated.

### 6. The cleanup punch list (bounded, reversible, applies in one editing session)

Six edits across 5 files; ~96 lines net change; ~30-45 min of focused editing.

The full punch list with proposed wording is in this finding's **Next Actions** section below. The recommended Configuration is **A.1 + B.1 + C.1 + D.1 + E.1 + F.1 + F.2**, which is a clean SURVIVE on every weighted dimension (structural-correctness, naming-clarity, doc-coherence, future-readiness, discoverability, coordination-cost; MEDIUM edit-cost; HIGH reversibility) per the critique discipline's evaluation.

### 7. Resulting `inquiry.md` after applying the punch list

Six sections, ~232 lines (down from 312), one coherent role:

| Section | Purpose |
|---|---|
| Description (top-of-file) | What `/inquiry` is and isn't |
| CONFIGURE (NEW path) | Variable-pipeline classification (problem-type → pipeline) |
| RESUME with telemetry-routing (RESUME path) | State check + per-discipline threshold-routing (PROCEED / FLAG / RE-RUN) |
| Wayfinding-trigger (iteration-complete path) | Delegation to `/wayfinding` for iteration-move selection |
| SYNTHESIZE (post-TERMINATE artifact path) | Delegation to the SYNTHESIZE protocol when a project artifact is needed; cross-references CONCLUDE for the inline finding-compilation |
| Rules | 6 cross-cutting constraints (CONFIGURE-first; /inquiry-doesn't-run-disciplines; dead-branches-persist; wayfinding-at-iteration-boundary; circuit-breaker; SYNTHESIZE-when-artifact-needed) |

The post-cleanup file tells one story: `/inquiry` is the variable-pipeline configurator and telemetry-gated state manager that delegates to `/wayfinding` at iteration boundaries and to SYNTHESIZE post-TERMINATE when a project artifact is needed. CONFIGURE is the unique-no-home slot that justifies the file's continued existence.

## Next Actions

### MUST

- **What:** Apply Step 1 of the punch list — edit `commands/inquiry.md` with the four sub-edits: (1a) replace lines 173-216 with the wayfinding-trigger wording; (1b) delete lines 220-244 (SIC-cycle example); (1c) delete lines 246-248 (loop pattern diagram); (1d) replace lines 252-285 with the SYNTHESIZE-with-CONCLUDE-rename wording; (1e) delete lines 289-298 (Cross-Session Resume); (1f) edit Rules section (lines 302-311) — remove rules 3, 4 and refine rule 8.
  - **Who:** User (manual editing). Proposed wording for each sub-edit is in `critique.md`'s Final Punch List section.
  - **Gate:** Whenever the user is ready to apply the cleanup.
  - **Why:** Removes ~80 lines of duplicative/superseded content from `inquiry.md` while preserving CONFIGURE, RESUME-with-telemetry-routing, and load-bearing Rules. Applies the synthesize_vs_finding_split's pending Configuration β Step 1 (with CONCLUDE rename instead of FINDING-COMPILE). Result: `inquiry.md` 312 → ~232 lines, telling one coherent role-story.

- **What:** Apply Step 2 — add a paragraph near the top of `commands/MVL.md` cross-referencing `/inquiry` for variable-pipeline scenarios.
  - Proposed wording: *"For variable-pipeline inquiries (problem-classification first, then pipeline selection: e.g., Complex problems requiring decomposition into per-branch sub-pipelines, or Broken problems requiring `/diagnose`), use `/inquiry`. /MVL is the always-S→I→C runner; /inquiry is the configurable-pipeline orchestrator."*
  - **Who:** User.
  - **Gate:** Apply alongside Step 1.
  - **Why:** Makes `/inquiry` findable from `/MVL` (the runner most users start at). Without this, `/inquiry` is invisible to anyone who doesn't already know to look for it. Cost is small (3 lines); benefit is conditional but real.

- **What:** Apply Step 3 — add the same cross-reference paragraph to `commands/MVL+.md`.
  - **Who:** User.
  - **Gate:** Apply alongside Step 1.
  - **Why:** Same reason as Step 2, applied to the extended-loop runner.

- **What:** Apply Step 4 — add a "Relationship with `/wayfinding`" section to `commands/navigation.md` that explicitly notes the **DIAGNOSE** move has no clean `/navigation` equivalent and lives canonically in `/wayfinding`.
  - Proposed wording: see this finding's Reasoning section / `critique.md`'s Final Punch List Step 4.
  - **Who:** User.
  - **Gate:** Apply alongside Steps 1-3.
  - **Why:** A future agent reading `/navigation` alone may conclude its 15 types are exhaustive and miss DIAGNOSE-class signals entirely. The +8 lines of cross-reference at the read-site fixes the discoverability gap without requiring the reader to consult inquiry-tree documentation.

- **What:** Apply Step 5 — append a one-liner to the CONFIGURE entry in `thinking_disciplines/protocols/desc.md` naming `commands/inquiry.md` as the canonical implementation site.
  - Proposed wording: *"Canonical implementation: `commands/inquiry.md` (the variable-pipeline classification logic; problem-type → pipeline selection, including per-branch pipelines, `/diagnose` placeholder, and edge-case problem types)."*
  - **Who:** User.
  - **Gate:** Apply alongside Step 1, OR alongside the pending `protocols_relevance_check` Configuration β work (whichever is applied first).
  - **Why:** The protocols dimension's purpose (per `protocols/what_is_protocol.md`) is to be the architectural map. Without this cross-reference, CONFIGURE appears in the map without a link to the file that implements it.

### COULD

- **What:** Use the C.2 variant instead of C.1 in Step 1d — adds a paragraph to `inquiry.md`'s SYNTHESIZE section explaining WHY SYNTHESIZE is named-but-procedurally-underspecified (the autonomy-ladder Level 2-3+ rationale).
  - **Who:** User judgment call.
  - **Gate:** If user wants stronger autonomy-ladder framing surfaced at the SYNTHESIZE activation site in `inquiry.md`, and accepts mild duplication (~6 lines) with `enes/desc.md` (which is the canonical home for autonomy-ladder context).
  - **Why (if applied):** A reader of `inquiry.md` learns the strategic context for SYNTHESIZE without having to navigate to `enes/desc.md`. This was flagged by `synthesize_vs_finding_split`'s "Configuration β'" framing as a defensible user judgment call — and this audit confirms that framing.

- **What:** Apply the remaining steps of `synthesize_vs_finding_split`'s Configuration β alongside this audit's Steps 1-5: split the SYNTHESIZE entry in `protocols/desc.md` into CONCLUDE (alive-embedded) + SYNTHESIZE (alive-named-slot); add CONCLUDE cross-references at `/MVL` and `/MVL+` iteration-complete-yes branches; coordinate with the prior `protocols_relevance_check` Configuration β.
  - **Who:** User.
  - **Gate:** When applying this audit's Steps 1-5 anyway, the marginal cost of bundling synthesize_vs_finding_split's remaining steps is small (~10-20 additional lines across 2 files). Compose cleanly with no conflicts.
  - **Why (if applied):** Architectural consolidation across all three recent inquiries (`extract_conclude_to_homegrown` + `synthesize_vs_finding_split` + this one) in one editing session.

### DEFERRED

- **What:** Decide whether to deprecate `commands/inquiry.md` entirely (i.e., apply variant A.3 — radical delete + migrate CONFIGURE to a new home).
  - **Gate:** After observing whether CONFIGURE is invoked across the next 5-10 inquiries. If 0 invocations, the deletion case strengthens; if 1+ invocations, the architectural-prep was load-bearing and `/inquiry` stays.
  - **Why (if revived):** If `/inquiry` is genuinely never invoked, carrying an unused spec is small but nonzero cost. Deletion forces a clean architecture (one file = one purpose) and CONFIGURE-as-its-own-command would be more discoverable.

- **What:** Decide whether to remove the RESUME-with-telemetry-routing section from `inquiry.md`.
  - **Gate:** Same observation window as the previous deferred item. RESUME-with-telemetry-routing is unique-no-home but currently unused; if `/inquiry` is invoked but RESUME's telemetry-routing logic is never the operational path, RESUME can go separately from CONFIGURE.
  - **Why (if revived):** Further trims `inquiry.md` (~50 more lines) and sharpens `/inquiry`'s role to "configurator + delegation triggers" without the autonomous-verification slot.

- **What:** Decide whether to extend `commands/navigation.md`'s 15-type taxonomy to include a 16th type for the DIAGNOSE class of signals (variant D.3).
  - **Gate:** When the project explicitly wants to unify `/navigation` and `/wayfinding`'s taxonomies — which would require its own SIC pass on the unification decision (whether the two cognitive roles, selection vs enumeration, should be unified or remain distinct).
  - **Why (if revived):** Eliminates the asymmetry. `/navigation` becomes a true superset; `/wayfinding` becomes the "selection variant" of `/navigation`. Currently rejected because sensemaking's stabilized verdict is that the two specs serve different roles.

## Reasoning

### Why this finding refines, rather than overturns, the prior finding

The prior `inquiry_vs_mvl_outdated_check` finding (`devdocs/inquiries/inquiry_vs_mvl_outdated_check/finding.md`) concluded `/inquiry` should be kept-not-deprecated because it has 5 distinct features. That conclusion is preserved. What's refined is the count: post-CONCLUDE-extraction and post-`synthesize_vs_finding_split`, only 3 of those features are still uniquely `/inquiry`'s. The "keep" verdict stands; the "5 distinct features" claim is updated to 3, all within CONFIGURE.

This is a refinement, not a contradiction. The prior finding identified the architectural-prep slot correctly; this audit sharpens which sub-parts of `/inquiry` actually fill that slot.

### Why the wayfinding moves are NOT slipping through the cracks (the user's flagged concern)

The user's question presupposed that the wayfinding-table at `inquiry.md` lines 183-190 might be the canonical home for the 6-move taxonomy, and that if `/wayfinding` is "not used so much now," the moves themselves might be dying. Both presuppositions fail on file-content inspection:

- The full specs of all 6 moves are in `commands/wayfinding.md` lines 153-198 (~45 lines of specifications across the 6 moves).
- `commands/inquiry.md`'s table at lines 183-190 has one line per move — clearly summary, not authoritative.
- "Not used so much now" describes invocation frequency, not spec status. `/wayfinding` has not been deprecated, removed, or rewritten. Its content is alive at the canonical-home level. The empirical underutilization reflects `/MVL`'s auto-run absorbing the routine NARROW cases.

The structural verdict is therefore: the moves are alive (in `/wayfinding`); `inquiry.md`'s table is removable without loss; non-NARROW iteration moves remain available via explicit `/wayfinding` invocation when the user (or future autonomous agent) needs them.

### Why DIAGNOSE specifically is the most-asymmetric move

DIAGNOSE captures a different kind of signal than the other 5 moves. NARROW/BROADEN/SHIFT/RECONSIDER all assume the inquiry's frame is correct and only the candidates need adjusting. TERMINATE assumes convergence has been reached. DIAGNOSE alone says: the inquiry frame ITSELF is wrong — we're oscillating, stalling, layer-conflict-paralyzed. It's the meta-recognition move.

`/navigation`'s 15-type taxonomy was designed for enumeration of next-directions, with each type assuming the question-frame is intact. REFRAME ("change the question entirely") and RE-RUN DEEPER ("re-run a discipline with more depth") are the closest /navigation matches to DIAGNOSE, but neither captures the specific "the inquiry process itself is broken" signal. REFRAME assumes you have a new question to substitute; RE-RUN DEEPER assumes the original question is right and just needs deeper investigation. DIAGNOSE assumes neither — it's the "stop and figure out what's wrong with the search" signal.

This asymmetry is structural, not cosmetic. Naming a single ` /navigation`-type for DIAGNOSE would force a decision that breaks one of the existing 15 types' coherence (DIAGNOSE doesn't fit Content / Process / Context cleanly because it spans all three). Better to acknowledge the asymmetry explicitly via a cross-reference (D.1) and let `/wayfinding` remain the canonical home.

### KILLs: variants rejected, with structural reasons

- **A.2 (preservative archive markers)** — KILLed on doc-coherence. HTML-comment archives or end-of-file archive sections are an anti-pattern: they bloat the file for git diffing, drift silently from canonical homes (no one notices when the canonical updates), get ignored as wallpaper. Git history is already preserving the removed content with full reasoning when committed. Defense's "users shouldn't need git" is weak — git is the universal version-history tool for anyone working on the project.

- **A.3 (radical delete the entire `inquiry.md` file)** — KILLed on future-readiness. Empirical low-utilization-now is not the right signal for permanent deletion. CONFIGURE's variable-pipeline classification logic is unique-with-no-current-home; sending it to a new home (configure.md, MVL+.md section, or homegrown/protocols/configure.md) is non-trivial migration that risks losing the architectural framing. The prior `inquiry_vs_mvl_outdated_check` finding's "keep with refined role" verdict would be overturned without a SIC pass on the deletion decision itself. Reversibility favors trim now, deletion later (after observing whether CONFIGURE actually gets invoked).

- **D.3 (extend `/navigation` with a 16th type for DIAGNOSE)** — KILLed on structural-correctness. Sensemaking's stabilized verdict is that `/navigation` and `/wayfinding` serve **different cognitive roles** (selection vs enumeration) and neither subsumes the other. Extending `/navigation` with DIAGNOSE re-couples them in a way the sensemaking explicitly rejected. DIAGNOSE in `/wayfinding` is tightly coupled to the Three-Layer Awareness Model (Present/Trend/Memory layers); transplanting it to `/navigation` strips that coupling. If the project later wants taxonomy unification, that's a separate SIC pass on the unification decision, not a punch-list item here.

### REFINEs: variants too sparse or too aggressive

- **B.3 (sparse cross-ref, no inline 6-move list)** — REFINEd to B.1. A reader of `inquiry.md` learns nothing about what `/wayfinding` produces if the move names aren't listed inline; this violates a callsite-pedagogy principle. B.1 keeps the 6 move names inline (skim-friendly) while explicitly delegating canonical authority to `/wayfinding`.

- **C.3 (delete SYNTHESIZE section + reference protocols/desc.md)** — REFINEd to C.1. The "When you need / when you don't" examples in C.1 are load-bearing for choosing whether to invoke SYNTHESIZE at all. Without them, a reader reading `inquiry.md` gets a reference but no concrete intuition. C.1 is the right balance.

- **D.4 (do nothing about DIAGNOSE-uncovered)** — REFINEd to D.1. Inquiry-tree-as-documentation is queryable but not surface-visible at point-of-use. The +8-line cost of D.1 is trivial; the discoverability gain (DIAGNOSE-uncovered visible at `/navigation` read-time) is non-trivial.

- **E.3 (delete Rules section entirely)** — REFINEd to E.1. Inlining rules trades scannability for context-fit. The Rules-section pattern is established (e.g., `/MVL` also has one); deleting `/inquiry`'s Rules section creates inconsistency. E.1's surgical trim removes only duplicates while preserving scannability.

- **F.3 (do nothing about cross-references to `/inquiry`)** — REFINEd to F.1 + F.2. Empirical underutilization is a present-state observation; future-readiness is the relevant axis when deciding whether to invest in discoverability. Cost is small (8 lines across 3 files); cleanup is the right moment to fix discoverability for the trajectory.

### SURVIVEs: why the recommended Configuration won

The recommended Configuration **A.1 + B.1 + C.1 + D.1 + E.1 + F.1 + F.2** is the unique clean SURVIVE on all 8 weighted dimensions:

- **Structural correctness:** honors sensemaking's verdicts (canonical-home discipline; /navigation doesn't subsume /wayfinding; /inquiry's collapse-to-CONFIGURE).
- **Naming clarity:** uses CONCLUDE consistently (the current canonical name; the FINDING-COMPILE wording from synthesize_vs_finding_split's pre-rename critique is adapted).
- **Doc coherence:** post-cleanup `inquiry.md` tells one role-story (configurator + state-manager + delegation-triggers).
- **Edit cost:** ~96 lines across 5 files, ~30-45 min of editing.
- **Future readiness:** preserves CONFIGURE, RESUME-with-telemetry-routing, dead-branches rule, circuit-breaker rule — all architectural-prep slots for higher autonomy levels.
- **Discoverability:** /inquiry findable from /MVL (F.1); CONFIGURE findable in protocols/desc.md (F.2); SYNTHESIZE/CONCLUDE relationship explicit in inquiry.md (C.1); DIAGNOSE-asymmetry visible at /navigation read-site (D.1).
- **Coordination cost:** composes cleanly with synthesize_vs_finding_split's pending Configuration β work (no conflicts).
- **Reversibility:** every edit is git-reversible; observable signals will inform whether further deprecation (A.3) becomes warranted.

### Defensible variants: when to choose them instead

- **C.2 instead of C.1** if the user wants stronger autonomy-ladder framing surfaced at the SYNTHESIZE activation site, and accepts mild duplication with `enes/desc.md`. Synthesize_vs_finding_split's "Configuration β'" framing applies — this is a defensible user judgment call.
- **B.2 instead of B.1** if the user wants more wayfinding-move pedagogy at the inquiry.md callsite (paragraph form with trigger contexts vs B.1's bulleted move names).
- **E.2 instead of E.1** if the user prefers a 3-rule distillation over the surgical 8→6 trim. Mild architectural-prep loss (rule 5 dead-branches) is the trade-off.
- **D.2 instead of D.1** (or omitting D.1 in favor of D.2) — D.2 puts the asymmetry note in both `/navigation` and `/wayfinding/SKILL.md`; more compact but spread across two files. D.1 is recommended as the simpler primary fix.

## Open Questions

### Monitoring

- **Is CONFIGURE actually invoked over the next observation window?** If 0 invocations across the next 5-10 inquiries, the deletion case for `/inquiry` strengthens. If 1+ invocations, the architectural-prep was load-bearing and the cleanup-not-deprecation decision is vindicated.
- **Is RESUME-with-telemetry-routing ever the operational path?** Currently `/MVL`'s auto-run absorbs the routine cases. If the manual `/inquiry → discipline → /inquiry` flow is never invoked, RESUME-with-telemetry-routing's keep/remove decision should be revisited (independently of CONFIGURE).
- **Does `/wayfinding` get explicitly invoked for non-NARROW iteration moves?** `/MVL`'s NARROW-only iteration logic accommodates routine cases. If non-routine cases (BROADEN, SHIFT, DIAGNOSE, RECONSIDER) emerge in practice, the user (or future agent) will need explicit `/wayfinding` invocation. Track which moves get used.

### Refinement Triggers

- **The `synthesize_vs_finding_split` finding's remaining Configuration β steps (Steps 2-5)** are queued. Specifically: split the SYNTHESIZE entry in `protocols/desc.md` into CONCLUDE + SYNTHESIZE; add CONCLUDE cross-references at `/MVL` and `/MVL+` iteration-complete-yes branches; coordinate with prior `protocols_relevance_check` Configuration β. This audit's Step 5 (CONFIGURE entry update) composes with those; the user can apply them in one editing session for unified architectural consolidation.
- **If autonomy-ladder Level 2-3+ progression makes `/inquiry`'s named-slot logic operational** — i.e., if the system needs to autonomously verify telemetry between disciplines, autonomously select non-NARROW iteration moves, autonomously construct project artifacts via SYNTHESIZE — the named slots in `/inquiry` (RESUME-with-telemetry-routing) and `/wayfinding` (the 6-move taxonomy) and the protocols/desc.md SYNTHESIZE entry become operational rather than preparatory. The cleanup performed in this audit preserves all of those slots.
- **If `/diagnose` ships as a standalone discipline**, the Broken problem-type's pipeline (CONFIGURE's "S → [Diagnosis when built]") becomes a real path. The placeholder remains in CONFIGURE; the trigger to revisit is `/diagnose`'s shipping.

### Research Frontiers

- **Should `/navigation` and `/wayfinding` taxonomies be unified?** Sensemaking's verdict is "different roles, both stay" — but the 4-of-6 partial overlap between `/wayfinding`'s moves and `/navigation`'s 15 types suggests there may be a deeper underlying structure. A future inquiry could investigate whether the two taxonomies emerge from a shared substrate (e.g., a 6-axis theory of next-directions where /wayfinding picks one and /navigation enumerates all). Out of scope for this audit; flagged for potential future inquiry.
