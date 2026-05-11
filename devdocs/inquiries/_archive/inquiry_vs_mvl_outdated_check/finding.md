---
status: active
---
# Finding: inquiry_vs_mvl_outdated_check

## Question

Two linked questions:
1. Is `thinking_disciplines/devdocs/inquiry_as_a_loop.md` outdated relative to current state?
2. Is the `/inquiry` discipline (loop runner with problem-classification + variable-pipeline selection) outdated compared to `/MVL` (always S→I→C) and `/MVL+` (always E→S→D→I→C)?

**Goal.** Two clear, actionable answers: (a) for the file — outdated/current, what's stale, recommendation (delete / archive / update / keep); (b) for the discipline — superseded/distinct-role, what's still load-bearing, recommendation (deprecate / keep / merge).

---

## Finding Summary

- **File `inquiry_as_a_loop.md`: contextually outdated, internally accurate.** Its description of `/inquiry`'s 3-part job (CONFIGURE / Track Progress / Run Wayfinding) and 8 limitations / 5 strengths still match the current `commands/inquiry.md`. What's stale is what it doesn't say: it makes zero mention of `/MVL` or `/MVL+`, which now exist alongside `/inquiry`. **Recommendation: lift the design rationale (8 limitations + 5 strengths) into `commands/inquiry.md` as a "Design Notes" section, then archive the file to `thinking_disciplines/devdocs/old/`.**

- **Discipline `/inquiry`: NOT strictly superseded by `/MVL` or `/MVL+`.** It has 5 features that neither MVL flavor covers: per-branch pipelines after decomposition (different sub-problems can run different pipelines), 6 wayfinding moves between iterations (BROADEN / NARROW / SHIFT / DIAGNOSE / TERMINATE / RECONSIDER), SYNTHESIZE producing a project-level deliverable, a placeholder slot for the not-yet-built `/diagnose` pipeline, and edge-case problem-type pipelines. **Recommendation: keep `/inquiry`, but add explicit "When to use" role-distinction documentation to all three command files.**

- **Empirically, `/inquiry` is documented-but-unused for routine work.** In observed practice (this conversation: 5+ runs of `/MVL` and `/MVL+`, zero of `/inquiry`), the fixed-pipeline auto-run runners handle the user's daily inquiries adequately. `/inquiry`'s richer features become load-bearing only for the project's stated long-term scenarios (year-long inquiries, parallel branches, when `/diagnose` ships) — which haven't materialized yet.

- **The clean role distinction:** `/MVL` is the daily driver for routine S→I→C cognitive tasks. `/MVL+` adds E (exploration) and D (decomposition) for problems starting from unknown territory or with visible sub-problems. `/inquiry` is the rich orchestrator reserved for genuinely complex multi-iteration / multi-branch scenarios, with wayfinding moves and SYNTHESIZE deliverable production.

- **Optional follow-on:** Slim `/inquiry`'s CONFIGURE pipeline-by-problem-type table by removing rows that collapse into `/MVL` behavior (Ambiguous=S-only, Novel=I→C, Clear=I→C), keeping the genuinely distinct rows (Complex=S→Decompose→[per branch: pipeline] and Broken=S→[Diagnosis when built]). Add a one-line pointer that single-discipline runs (e.g., S only) should invoke the discipline directly rather than going through `/inquiry`.

- **Deprecation of `/inquiry` is rejected for now.** Carrying cost of an unused command file is low (it consumes no runtime, requires no maintenance unless explicitly edited). Rebuilding cost would be high if the project's stated long-term scenarios materialize. Revisit deprecation only if after 6 months / 30 inquiries `/inquiry` remains unused AND `/diagnose` has not shipped AND no parallel-branch decomposition need has emerged.

---

## Finding

### 1. The file: contextually outdated, internally accurate

`thinking_disciplines/devdocs/inquiry_as_a_loop.md` is a 124-line "First Draft" document describing `/inquiry`'s structure as a loop runner. Reading it line-by-line against the current `commands/inquiry.md` (the canonical `/inquiry` spec, 313 lines), every internal claim still holds:

- The file's description of `/inquiry`'s 3-part job — CONFIGURE (classify problem, select pipeline), Track Progress (file-existence-driven `_state.md`), Run Wayfinding (between-iteration steering moves) — matches the current spec exactly.
- The file's 8 enumerated limitations (fully human-driven, file-based state, wayfinding inlined, no iteration separation, single-pipeline-only per CONFIGURE, no parallel branches, SYNTHESIZE underspecified, no cross-inquiry learning) all still apply to current `/inquiry`.
- The file's 5 enumerated strengths (separation of concerns, human-in-the-loop, state persistence, folder-as-structure, discipline independence) also still apply.

What the file does not say: it makes no mention of `/MVL` or `/MVL+`. These commands exist as install-shipped commands alongside `/inquiry` and have become the user's daily driver. A reader landing on `inquiry_as_a_loop.md` and using it as a guide to "how to run loops in this project" walks away thinking `/inquiry` is the canonical loop runner — an incomplete picture.

The file is therefore **internally accurate, contextually outdated**. The fix has two structural components: (a) preserve the unique design content (the rationale behind the 8 limitations and 5 strengths) so it doesn't disappear, and (b) remove the file from a position where future readers will treat it as canonical guidance.

The recommended approach (`F3 — lift then archive` in the innovation/critique work) does both. The 8 limitations + 5 strengths get lifted into `commands/inquiry.md` as a "Design Notes" section appended after the existing "Rules" section. The file itself is moved to `thinking_disciplines/devdocs/old/` (alongside `old.md`, which is already there). The lift edits out the source's "First Draft / primitive functional loop" framing — that framing is itself outdated content not worth preserving — and keeps the substantive design rationale.

Why not just update the file in place? Because updating to acknowledge `/MVL`/`/MVL+` would still leave a file in a scratch directory (`thinking_disciplines/devdocs/`, alongside `old.md`) that substantively duplicates `commands/inquiry.md`. Hybrid documents that are partly rationale and partly spec rot fastest because no one knows what they're supposed to be. The cleaner move is to consolidate into the canonical spec and archive the source.

Why not just delete? Archive is essentially equivalent in cost (one git mv vs one rm) but preserves recoverability without git archaeology. There's no scenario where deletion is preferable.

### 2. The discipline: not superseded; role distinction needed

The right framing for `/inquiry` is not "outdated yes/no" but **role distinction**.

**Comparing what each loop runner actually does** (extracted from the spec files):

| Feature | `/inquiry` | `/MVL` | `/MVL+` |
|---|---|---|---|
| Pipeline selection | Variable, classified by problem type (5 types → 6 pipelines) | Fixed: S → I → C | Fixed: E → S → D → I → C |
| Drive mode | Manual: human types each discipline command, returns to `/inquiry` between | Auto-runs all 3 disciplines without pausing | Auto-runs all 5 disciplines without pausing |
| State tracking | `_state.md` + file existence | Same | Same |
| Iteration steering | 6 wayfinding moves (BROADEN, NARROW, SHIFT, DIAGNOSE, TERMINATE, RECONSIDER) | Implicit narrowing only ("if not answered, loop with refined focus") | Same as /MVL |
| Decomposition | Native: Complex → S→Decompose→[per branch: pipeline]; different sub-problems can run different pipelines | None | Always runs D in fixed position; same pipeline applied to whole |
| Diagnosis support | Listed as "S → [Diagnosis when built]" — placeholder for an unbuilt discipline | Not supported | Not supported |
| Final output | SYNTHESIZE step compiles inquiry tree into a deliverable saved to project location | `finding.md` written inside inquiry folder; outputs archived to `docarchive/` | Same as /MVL |

**Five features `/inquiry` has that neither /MVL flavor covers:**

1. **Per-branch pipelines after decomposition.** `/MVL+` runs decomposition and applies the same pipeline to the whole; `/inquiry` is the only loop runner that contemplates different pipelines per sub-problem (e.g., one branch is novel → I→C, another is ambiguous → S only).
2. **The 6 wayfinding moves between iterations.** Explicit BROADEN / NARROW / SHIFT / DIAGNOSE / TERMINATE / RECONSIDER moves rather than `/MVL`'s implicit narrowing.
3. **SYNTHESIZE producing project-level deliverable.** `/MVL` writes `finding.md` to the inquiry folder; `/inquiry`'s SYNTHESIZE step compiles the inquiry tree into a deliverable saved to a project location (e.g., a feature spec, an architecture decision record).
4. **Diagnosis-pipeline placeholder.** When `/diagnose` ships, `/inquiry`'s "Broken" pipeline becomes operational.
5. **Edge-case problem-type pipelines.** `Ambiguous = S only`, `Novel = I → C`, `Clear = I → C` — these aren't covered by either /MVL flavor (though they're seldom needed in practice; see the slim recommendation in Next Actions).

**Empirical observation.** In this conversation, `/MVL` and `/MVL+` have run 5+ times across audit-style questions including this one. Every run converged in 1 iteration. Wayfinding moves haven't been needed. SYNTHESIZE hasn't been needed. Per-branch decomposition hasn't been needed. The fixed-pipeline auto-run runners are functionally adequate for the user's current daily work.

**But this evidence is biased toward routine inquiries.** The project's stated long-term goals (per `enes/desc.md`) include year-long autonomous tasks, parallel MVL loops with cross-comparison, and cross-inquiry consolidation. Those scenarios are exactly where the 5 distinct features become load-bearing.

**Architectural relationship.** `/MVL`'s spec claims "S→I→C is the only primitive — every cognitive task is a SIC loop applied to a different question." This is a strong claim that conceptually challenges `/inquiry`'s variable-pipeline approach. The two can coexist if the roles are explicit: `/MVL` is a primitive (the SIC loop itself); `/inquiry` is an orchestrator that adds plumbing on top of the primitive (per-branch coordination, multi-iteration steering, project-deliverable production). They are not redundant — they operate at different levels.

**Recommendation:** keep `/inquiry`, with explicit role-distinction documentation in all three command files plus a slim of the redundant CONFIGURE pipeline rows.

### 3. Why deprecation is rejected (for now)

Deprecating `/inquiry` would:
- Remove documented-but-unused infrastructure (real benefit).
- Reduce install scripts, README clutter (real benefit).
- Lose the 5 distinct features (real cost).
- Orphan the `/diagnose` placeholder (real cost).
- Force rebuild if the project's long-term scenarios materialize (large potential cost).

The carrying cost of an unused command file is low: zero runtime cost, near-zero maintenance cost (a file that's never edited won't drift). The rebuild cost is high: re-deriving per-branch decomposition coordination, the wayfinding move taxonomy, and the SYNTHESIZE deliverable spec would be substantial work.

**Revival trigger for deprecation:** if after 30 inquiries OR 6 months `/inquiry` has zero invocations AND `/diagnose` has not shipped AND no parallel-branch decomposition need has emerged in practice, revisit deprecation.

### 4. Why unification (one command with modes) is rejected (for now)

A unified `/inquiry --simple` / `/inquiry --extended` / `/inquiry` (no flag) command would:
- Produce the cleanest end-state architecture (one canonical loop runner).
- Match the from-scratch design that `/MVL`'s "S→I→C is the only primitive" claim implies.
- Cost: large refactor (install scripts, README, homegrown_skills.md, chapter_0 docs).
- Cost: ergonomics hit (typing `/inquiry --simple` is 18 keystrokes vs `/MVL`'s 4).
- Benefit at present: marginal. The 3-runner architecture isn't actually broken — it just lacks role-distinction docs (which is what role-docs solves).

The cost-benefit is unfavorable today. Revisit if role-distinction docs (the recommendation below) fail to end user-confusion within 6 months, OR if `/inquiry`'s features become routinely needed (forcing frequent switching between command names).

---

## Next Actions

### MUST

- **What:** Lift the design rationale (8 limitations + 5 strengths) from `inquiry_as_a_loop.md` into `commands/inquiry.md` as a new "Design Notes" section appended after the existing "Rules" section.
  - **Who:** User (the punch list is in `critique.md` Step 1; ~30 lines).
  - **Gate:** Before Step 2 (archiving the source file). Lifting must precede archiving so the rationale is preserved.
  - **Why:** Preserves substantive design rationale (e.g., "wayfinding inlined, not invoked" — a deliberate design decision worth recording) in the canonical home where future readers will find it. Without lifting, the rationale survives only in git history.

- **What:** Archive `thinking_disciplines/devdocs/inquiry_as_a_loop.md` to `thinking_disciplines/devdocs/old/`.
  - **Who:** User (`mkdir -p thinking_disciplines/devdocs/old/` then `git mv ...`).
  - **Gate:** After lift step.
  - **Why:** Removes the contextually-outdated draft from a location where future readers will treat it as canonical. The `old/` location matches the existing `old.md` neighbor, signaling archival status.

- **What:** Add "When to use" role-distinction blurbs (~5 lines each) to `commands/inquiry.md`, `commands/MVL.md`, and `commands/MVL+.md` immediately after each file's description line.
  - **Who:** User (exact text in `critique.md` Step 3).
  - **Gate:** Apply alongside or after archive step (no ordering dependency).
  - **Why:** Solves the immediate role-clarity problem at the point where users actually land (each command file). Without this, a user reading `commands/MVL.md` doesn't know whether to use it or one of the other two; with it, the choice is explicit at the point of decision.

### COULD

- **What:** Slim `/inquiry`'s CONFIGURE pipeline-by-problem-type table by removing the rows that collapse into `/MVL` behavior (Ambiguous = S only; Novel = I → C; Clear = I → C). Keep the rows that are genuinely distinct (Complex = S → Decompose → [per branch: pipeline]; Broken = S → [Diagnosis when built]; Ambiguous + novel = S → I → C as the natural pipeline for the classifier's most common case). Add a one-line pointer above the table: "Single discipline? If you want only one discipline, invoke it directly: `/sense-making <input>` etc."
  - **Who:** User (exact edit pattern in `critique.md` Step 4).
  - **Gate:** Optional. Apply now to clarify `/inquiry`'s purpose; defer if no current use of `/inquiry` is expected (Configuration A3 fallback).
  - **Why:** Reduces conceptual overlap between `/inquiry` and `/MVL`. Sharpens `/inquiry`'s identity as the orchestrator for Complex + Broken + multi-iteration scenarios — the cases that genuinely need its distinct features.

### DEFERRED

- **What:** Deprecate `/inquiry`.
  - **Gate:** Revisit if (after 30 inquiries OR 6 months from 2026-04-25, whichever first) `/inquiry` has zero invocations AND `/diagnose` has not shipped AND no parallel-branch decomposition need has emerged in practice.
  - **Why (if revived):** Removes documented-but-unused infrastructure; reduces install scripts and README clutter. Cost: lose 5 distinct features and the `/diagnose` placeholder.

- **What:** Unify all three loop runners into one command with mode flags (`/inquiry --simple` / `/inquiry --extended` / `/inquiry`).
  - **Gate:** Revisit if role-distinction docs (MUST item above) fail to end user-confusion within 6 months from 2026-04-25, OR if `/inquiry`'s distinct features become routinely needed (forcing frequent switching between command names in practice).
  - **Why (if revived):** Produces architecturally cleanest end state. Aligns with `/MVL`'s "S→I→C is the only primitive" claim. Cost: large refactor + ergonomics hit on the daily driver.

- **What:** Migrate `/inquiry`'s 5 distinct features into `/MVL+`.
  - **Gate:** Revisit only when a specific feature becomes load-bearing in routine practice. Migrate one feature at a time, never as a single refactor.
  - **Why (if revived):** Single canonical loop runner. End state more cohesive. Cost: high refactor risk to /MVL+ as daily driver; identity violation (/MVL+ is "fixed pipeline," variable behavior contradicts that).

---

## Reasoning

### Why the file is "lift then archive" (not update, not delete)

**KILL — F2 (update in place).** Updating the file to acknowledge `/MVL`/`/MVL+` would close the immediate contextual gap, but leaves a duplicate-spec file in a scratch directory (`thinking_disciplines/devdocs/`, next to `old.md`). The file would become hybrid (partly rationale, partly spec) and would substantively duplicate `commands/inquiry.md`. Hybrid documents rot fastest because no one knows what they're supposed to be. Drift between this file and the canonical spec is a structural risk, not a hypothetical one — the original drift (no /MVL acknowledgment) is exactly this kind of documentation rot.

**KILL — F4 (delete).** F4 (delete) is strictly dominated by F1 (archive): both end with the file no longer at its current path; F1 keeps recoverability via a directory listing while F4 forces git archaeology. There's no scenario where deletion is preferable to archive.

**SURVIVE — F3 (lift then archive).** Preserves the unique design rationale (8 limitations + 5 strengths) in canonical home. Removes the duplicate from the scratch directory. The Design Notes section is at the end of `commands/inquiry.md`, clearly delineated, labeled. Future maintainers can shrink, update, or remove the section cleanly. Caveat: when lifting, the source's "First Draft / primitive functional loop" framing is itself outdated and should NOT be lifted — only the substantive content carries over.

**SURVIVE-with-caveat — F1 (archive only).** Acceptable as a minimal alternative if the user is OK with the design rationale being recoverable only through git history. Not recommended over F3 because the cost differential is small (~30 lines of editing) and the rationale-preservation benefit is real.

### Why the discipline gets "keep + role docs" (not deprecate, not unify, not migrate)

**KILL — D2 (migrate features into /MVL+).** Refactoring /MVL+ to absorb /inquiry's per-branch decomposition + 6 wayfinding moves + SYNTHESIZE is a large change to a daily-driver command. Risk: breaking auto-run behavior, breaking the working pipeline, breaking user muscle memory. The features being migrated are currently unused — migrating unused features carries 100% of the cost with 0% of the immediate benefit. /MVL+ also has an identity ("fixed E→S→D→I→C, auto-run") that absorbing variable-pipeline + manual wayfinding directly contradicts. Edit-cost + Daily-driver-ergonomics dimensions both fail.

**KILL (deferred) — D3 (deprecate /inquiry).** Premature given the project's stated long-term goals (year-long autonomous tasks, parallel MVL loops, /diagnose). Deprecating now means rebuilding later when the need materializes — and rebuild cost is much higher than the carrying cost of an unused command file (zero runtime, near-zero maintenance). Long-term coherence dimension fails.

**KILL (deferred) — D5 (unify with modes).** Cleanest end state but solves a non-problem at high cost. The role-clarity issue (the actual immediate problem identified by sensemaking) is solvable with documentation (D1). D5 reorganizes the structure to fix what documentation can fix at a fraction of the cost. Daily-driver-ergonomics dimension also takes a measurable hit (typing `/MVL` is 4 keystrokes; `/inquiry --simple` is 18). Cost > present benefit.

**SURVIVE — D1 (role docs).** Solves the immediate role-clarity problem directly at the point of confusion (each command file). ~15 lines total across 3 files. Localized, reversible, low-risk. Future drift is possible but the surface is small. Role-clarity dimension (HIGH weight) fully addressed.

**SURVIVE-with-refinement — D4 (slim CONFIGURE table).** Reduces conceptual overlap between `/inquiry` and `/MVL`. Sharpens `/inquiry`'s purpose. Refinement: include a "/sense-making directly" pointer to preserve the S-only edge case that the table previously documented. Optional add-on to D1 for fuller hygiene; can be deferred without harming the role-clarity outcome.

### Assembly check: A1 (F3 + D1 + D4) emerges as recommended default

Compound test on A1:
- Accuracy-preservation: HIGH (F3 lifts rationale)
- Navigability: HIGH (file removed from scratch dir; role docs guide users)
- Signal-to-noise: HIGH (duplicate file removed; explicit role docs)
- Feature-preservation: HIGH (/inquiry kept; D4 slim doesn't lose distinct features)
- Role-clarity: HIGH (role docs everywhere)
- Daily-driver-ergonomics: HIGH (/MVL untouched)
- Edit-cost: MEDIUM (~30 lines lift + 15 lines role docs + small CONFIGURE edit + 1 file move; ≤1 hour focused editing)
- Long-term coherence: HIGH (all changes pull in the same direction)

A3 (F3 + D1 without D4) is the documentation-only fallback if the user wants to defer touching `/inquiry`'s CONFIGURE table. A2 (F1 + D1) is the absolute minimum but loses the design rationale to git history; not recommended unless effort is the binding constraint.

---

## Open Questions

### Refinement Triggers

- **D3 deprecation revival:** revisit if (after 30 inquiries OR 6 months from 2026-04-25, whichever first) `/inquiry` has zero invocations AND `/diagnose` has not shipped AND no parallel-branch decomposition need has emerged in practice.
- **D5 unification revival:** revisit if D1's role-distinction docs do not end user-confusion within 6 months from 2026-04-25, OR if `/inquiry`'s distinct features become routinely needed (forcing frequent switching between command names).
- **D2 migration revival:** revisit only when a specific `/inquiry` feature becomes load-bearing in routine practice; migrate one feature at a time, never as a single refactor.

### Monitoring

- Observe whether D1's role-distinction docs actually resolve the role-clarity problem in practice. The drift risk (3 command files with overlapping prose) is a watch-item; if drift becomes painful, factor shared content into README's "Loop Runners" section and reference it from each command file.
- Observe whether `/inquiry` continues to be unused after the role docs land. If it remains zero-utilization, the deferred deprecation trigger becomes more relevant.

### Blocked

- A definitive call on whether `/inquiry` should ultimately survive depends on whether the project's stated long-term scenarios (year-long inquiries, parallel branches, `/diagnose` shipping) materialize. Cannot be answered until those scenarios are tested in practice.
