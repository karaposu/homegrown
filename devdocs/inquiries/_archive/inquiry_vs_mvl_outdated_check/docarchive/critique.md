# Critique: inquiry_vs_mvl_outdated_check

## User Input

devdocs/inquiries/inquiry_vs_mvl_outdated_check/

Read all files in the folder (_branch.md, _state.md, sensemaking.md, innovation.md). Construct evaluation dimensions from sensemaking.

Goals for this critique:
- Evaluate the file-paths (F1: archive, F2: update-in-place, F3: lift-then-archive, F4: delete) on dimensions extracted from sensemaking.
- Evaluate the discipline-paths (D1: keep-with-role-distinction, D2: migrate-features, D3: deprecate, D4: slim-CONFIGURE-table, D5: unify-with-modes) on dimensions extracted from sensemaking.
- Run prosecution + defense + collision on each path.
- Confirm or refine the innovation's recommended Assembly 1 (F3 + D1 + D4).
- Apply assembly check.
- Produce a concrete final punch list.

Save output as devdocs/inquiries/inquiry_vs_mvl_outdated_check/critique.md.

---

## Phase 0 — Dimension Construction

### Extracted from sensemaking

The sensemaking output identified:
- **Constraints:** file is "First Draft" in scratch dir; /MVL is observed daily driver, /inquiry observed unused; 5 distinct features in /inquiry are real but unexercised; project's long-term goals (year-long inquiries, parallel branches, /diagnose) justify keeping orchestration.
- **Foundational tension:** /MVL claims "S→I→C is the only primitive" while /inquiry classifies and selects pipelines. Coexistence possible only if roles are explicit.
- **Meaning-nodes:** loop runner architecture, variable vs fixed pipeline, daily-driver vs edge-case usage.
- **Recommendation candidates:** archive/update/lift+archive for the file; keep-with-role-docs/slim/migrate/deprecate/unify for the discipline.

### Evaluation dimensions

#### File-side (F1–F4)

| Dimension | What it asks | Weight | Source |
|---|---|---|---|
| **Accuracy-preservation** | Does this preserve the 8 limitations + 5 strengths design rationale for future readers? | MEDIUM | Sensemaking: rationale is non-trivial, not all self-evident. |
| **Navigability** | Will future readers find the right doc and not be confused by an outdated one? | HIGH | Sensemaking: contextual outdatedness is the immediate problem. |
| **Signal-to-noise** | Does this reduce duplicate/stale content without losing real signal? | MEDIUM | Sensemaking: file duplicates commands/inquiry.md substantively. |
| **Maintenance-cost** | Long-term effort to keep the docs consistent? | MEDIUM | Sensemaking: drift between MVL/MVL+ docs and the file is already happening. |
| **Edit-cost** | Immediate effort required? | LOW | All file options are cheap (≤30 lines + 1 mv). |
| **Reversibility** | Can this be undone if it turns out wrong? | LOW | All file options reversible via git. |

#### Discipline-side (D1–D5)

| Dimension | What it asks | Weight | Source |
|---|---|---|---|
| **Feature-preservation** | Does this keep the 5 distinct features (per-branch pipelines, 6 wayfinding moves, SYNTHESIZE, diagnosis-pipeline placeholder, edge-case problem types)? | HIGH | Sensemaking: features are real and load-bearing for stated long-term goals. |
| **Role-clarity** | Does this make explicit when to use which loop runner? | HIGH | Sensemaking: the immediate problem is reader confusion across 3 runners. |
| **Daily-driver-ergonomics** | Does /MVL stay fast and untouched as the routine workflow? | HIGH | Sensemaking: /MVL is the observed daily driver; protecting it is non-negotiable. |
| **Edit-cost** | Immediate effort + refactor risk? | HIGH | Discipline-side options span trivial (D1) to large refactor (D2, D5). |
| **Reversibility** | Can this be undone? | MEDIUM | Documentation reversible; refactors much less so. |
| **Long-term coherence** | Does this end-state make sense given the project's stated trajectory (year-long inquiries, parallel branches, /diagnose)? | HIGH | Sensemaking: long-term goals are explicit in enes/desc.md. |

### Validation

Are these the right dimensions? Cross-check against sensemaking perspectives:
- Technical/Logical → Feature-preservation, Long-term coherence ✓
- Human/User → Role-clarity, Daily-driver-ergonomics ✓
- Strategic/Long-term → Long-term coherence ✓
- Risk/Failure → Edit-cost, Reversibility ✓
- Resource/Feasibility → Edit-cost ✓
- Definitional/Consistency → Role-clarity (resolves the /MVL "primitive" vs /inquiry "classifier" tension by making roles explicit) ✓

All 6 perspectives covered. No critical dimension blindness detected.

---

## Phase 1 — Fitness Landscape

### File-side landscape

- **Viable region:** high navigability + accuracy preserved + low maintenance + clean signal-to-noise. F3 (lift-then-archive) lands here.
- **Boundary region:** accuracy preserved but at maintenance cost (F2 keeps duplicate doc) OR navigability fixed but accuracy lost (F1 alone).
- **Dead region:** F4 (delete) — strictly dominated by F1 (archive) since both are equally clean but F1 keeps recoverability without effort.

### Discipline-side landscape

- **Viable region:** feature-preserved + role-clear + ergonomic + low-cost + reversible. D1 lands here cleanly. D4 lands here with minor caveat.
- **Boundary region:** feature-preserved but expensive (D2 migrate, D5 unify) — these solve a non-problem at refactor cost.
- **Dead region:** feature-loss without justification. D3 (deprecate) is here given the project's stated long-term goals.

---

## Phase 2 — Adversarial Evaluation

### F1 — Archive only

**Landscape position preview:** Boundary region. Cheap and reversible, but loses rationale.

**Prosecution.** Archiving without first lifting the design rationale loses the 8 limitations + 5 strengths in a way that's not obvious from `commands/inquiry.md` alone. Items like "wayfinding inlined, not invoked" describe a deliberate design choice, not an obvious omission. After archive, a future reader asking "why does /inquiry have these limitations?" must dig into `thinking_disciplines/devdocs/old/`. The audit's lift-before-archive recommendation exists precisely to prevent this.

**Defense.** The file's directory location (`thinking_disciplines/devdocs/`, alongside `old.md`) signals scratch status. Archive is honest about that status. The strengths are mostly self-evident from reading the spec; the limitations are mostly known to anyone exercising /inquiry. Archive is cheap, reversible, and ends the contextual-outdatedness problem.

**Collision.** Defense is partly right that strengths are self-evident, but limitations include genuine design decisions (e.g., why iteration files are NOT separated; why wayfinding is inlined). Prosecution's "rationale loss" concern is real but bounded — archived content is recoverable from git.

**Verdict: SURVIVE-with-caveat.** F1 is acceptable IF the user is OK with the design rationale being recoverable only through git history rather than living in canonical docs. F3 (lift-then-archive) dominates F1 if rationale preservation matters at all. F1 is strictly better than F4.

---

### F2 — Update in place

**Landscape position preview:** Boundary region. Cheap and addresses the gap, but creates a duplicate canonical-ish doc.

**Prosecution.** The file already substantively duplicates `commands/inquiry.md`. Updating it to include role-distinction adds the duplication problem on top of the original duplication problem. The file's role becomes muddy: not pure rationale (it now also has role docs), not pure spec (commands/inquiry.md is canonical). Hybrid documents rot fastest because no one knows what they're supposed to be. Also: the file lives in `thinking_disciplines/devdocs/` next to `old.md` — keeping it there as a living doc fights its own location signal.

**Defense.** Cheapest fix that addresses the immediate gap (no /MVL/MVL+ acknowledgment). One paragraph addition. The file becomes a useful guide again. Future-reader-confusion problem closes.

**Collision.** Prosecution wins on structural grounds: F2 treats the symptom (contextual outdatedness) without addressing the structural problem (the file's role is unclear and it duplicates canonical content). F2 also leaves the duplicate-spec drift risk in place.

**Verdict: REFINE → F3.** The "fix the immediate gap" instinct is right; the "leave duplicate file in scratch dir" mechanism is wrong. Refinement target: lift any unique content into the canonical file, then archive. That's F3.

---

### F3 — Lift then archive (innovation's recommendation)

**Landscape position preview:** Viable region. Preserves rationale + closes contextual gap + removes duplicate.

**Prosecution.** Adds ~30 lines to `commands/inquiry.md`. Bloats what should be a clean operational spec. The lifted content is "Design Notes" — design rationale and historical limitations — which mixes uneasily with the spec's "this is how to use the command" flow. Also: the source file's "First Draft" framing is itself outdated; if lifted verbatim, it leaks scratch-doc framing into a canonical file. Future maintainers may not know which Design Notes items are still accurate vs already obsolete.

**Defense.** Preserves the 8 limitations + 5 strengths in their canonical home — anyone who reads `commands/inquiry.md` sees both how to use /inquiry and why it's structured the way it is. The Design Notes section is clearly delineated and labeled (it's at the bottom, after Rules). Future maintainers can shrink, update, or remove the section cleanly. The duplicate file is gone, ending the drift risk.

**Collision.** Prosecution's bloat concern is real but moderate — 30 lines on a 313-line file is ~10% growth, manageable. The "First Draft" framing concern is correctable: when lifting, edit out the framing language and keep the substance. Defense's "delineated and labeled" point holds: this is a clean architectural placement.

**Verdict: SURVIVE — clean.** Caveat: when lifting, edit out the source's "First Draft / primitive" framing (which is outdated even within the source) and keep the substantive content. Header should be "Design Notes" not "First Draft Limitations."

---

### F4 — Delete (no archive)

**Landscape position preview:** Dead region. Strictly dominated by F1.

**Prosecution.** Compared to F1 (archive), F4 (delete) gives up zero-cost recoverability for negligible benefit. Both end with the file no longer at its current path; F4 just makes recovery require git archaeology instead of a directory listing. There's no scenario where F4 is preferable to F1.

**Defense.** Cleaner directory structure. No `old/` accumulating cruft.

**Collision.** Defense's "cleaner" is aesthetic; prosecution's "lose recoverability for nothing" is structural. Strict domination by F1.

**Verdict: KILL.** Seed: if the user genuinely wants no `old/` directory at all, the alternative is to consolidate `old/` and `inquiry_as_a_loop.md` separately (e.g., move both to a single archive location), not to delete.

---

### D1 — Keep with role-distinction documentation (innovation's recommendation)

**Landscape position preview:** Viable region. Solves the immediate role-clarity problem at minimal cost.

**Prosecution.** Three command files (`commands/inquiry.md`, `commands/MVL.md`, `commands/MVL+.md`) all get "When to use" blurbs that overlap heavily — the same role-distinction content with different "this command" highlighting. Synchronization burden: if /MVL evolves or /inquiry's role shifts, three files need coordinated edits. Single-source-of-truth violation. Also: the prose content of the blurbs is similar enough that drift between them is likely (one updated, two not). Same documentation-drift problem F2 was prosecuted for, applied to commands/.

**Defense.** The immediate problem identified by sensemaking is "user lands on a command file and doesn't know whether to use it or one of the others." Role docs solve this directly at the point of confusion. Each blurb is ~5 lines (~15 lines total across 3 files). Future updates are localized to the right files. Three files needing coordinated edits is a minor burden compared to leaving the role-confusion problem unaddressed. Drift risk is real but the surface area is tiny.

**Collision.** Prosecution's drift concern is real but the magnitude is small (15 lines total, 3 files, 1 paragraph each). Defense's "solves the immediate problem" wins on weight: role-clarity is HIGH-weighted, drift risk on small documentation surface is LOW-weighted. Net: defense wins.

**Verdict: SURVIVE — clean.** No critical caveats. Optional refinement: write the role-distinction content once in a shared location (e.g., README.md's "Loop Runners" section) and reference it from each command file, reducing the synchronization surface. Not required.

---

### D2 — Migrate features into /MVL+

**Landscape position preview:** Boundary→Dead region. Solves nothing currently broken; high refactor risk on daily driver.

**Prosecution.** /MVL+ is the user's daily driver for complex inquiries. Refactoring it to absorb /inquiry's per-branch decomposition + 6 wayfinding moves + SYNTHESIZE means substantially restructuring a working command. Risk: breaking auto-run behavior, breaking the working pipeline, breaking the user's muscle memory. The features being migrated are currently unused — migrating unused features carries 100% of the cost with 0% of the immediate benefit. /MVL+ also has an identity ("fixed E→S→D→I→C, auto-run") that absorbing variable-pipeline + manual wayfinding directly contradicts.

**Defense.** End state is one canonical loop runner, reducing 3-runner cognitive load. Aligns with /MVL's "S→I→C is the only primitive" principle (extending the primitive with E and D, but keeping it primitive in shape).

**Collision.** Prosecution's "high risk to daily driver for unused features" wins decisively. Defense's "one canonical runner" benefit is real but doesn't outweigh breaking something that works.

**Verdict: KILL.** Seed: if specific /inquiry features become routinely needed (e.g., per-branch decomposition becomes load-bearing), migrate one feature at a time, not in a single refactor, and only when /MVL+'s current identity can survive the addition.

---

### D3 — Deprecate /inquiry

**Landscape position preview:** Dead region. Premature given long-term coherence dimension.

**Prosecution.** Project's stated long-term goals (per `enes/desc.md`: year-long autonomous tasks, parallel MVL loops, cross-inquiry consolidation) are exactly the scenarios where /inquiry-class orchestration becomes load-bearing. Deprecating now means rebuilding later — and rebuilding cost is much higher than carrying-cost of an unused command file (the unused file consumes zero runtime, requires no maintenance unless explicitly edited). The "Broken" pipeline placeholder for the not-yet-built `/diagnose` command would be orphaned.

**Defense.** Removes documented-but-unused infrastructure. Reduces install scripts. Reduces README clutter. Honest signal that current daily practice is /MVL/MVL+. Avoids the documentation-drift trap of maintaining role docs for an unused tool.

**Collision.** Prosecution wins on long-term coherence: the cost of deprecation (lose 5 features) is high; the benefit (slightly cleaner install scripts) is low. Defense's "honest signal" point is partly addressed by D1's role-distinction docs (which CAN say "for advanced multi-iteration scenarios — not used routinely") without removing the command.

**Verdict: KILL (for now).** Seed (revival trigger): if after 30 inquiries OR 6 months — whichever first — /inquiry has zero invocations AND `/diagnose` has not shipped AND no parallel-branch decomposition need has emerged in practice, revisit. Until then, the carrying cost is too low to justify the deletion cost.

---

### D4 — Slim /inquiry's CONFIGURE table

**Landscape position preview:** Viable region with caveat. Reduces overlap; loses one minor edge-case path.

**Prosecution.** /inquiry is currently unused. Editing its CONFIGURE table to remove redundant pipeline rows is busywork — it changes content the user isn't reading anyway. Also: "Ambiguous = S only" isn't strictly redundant with /MVL — /MVL adds I+C. If a user genuinely wants S only (e.g., "I just want to map the anchors of this problem, then stop and think"), they currently have a documented path through /inquiry. Slimming removes that path. The user can run `/sense-making` directly, but losing the "S only" branch in /inquiry means losing the framing that "S only is sometimes the right answer."

**Defense.** /inquiry's CONFIGURE table is what guides users to invoke /inquiry vs another runner. The current table includes 4 rows that effectively collapse into /MVL behavior (Ambiguous/Novel/Clear → S-only or I→C, both of which /MVL handles by running the full S→I→C). These rows muddle the message that /inquiry's distinct value is in Complex (per-branch decomposition) and Broken (diagnosis-pipeline placeholder). Removing them clarifies /inquiry's purpose. The "S only" path is preserved by `/sense-making` directly — that's actually a cleaner pattern than going through /inquiry's classifier just to skip everything except S.

**Collision.** Prosecution's "S only path loss" is mild but legitimate. Defense's "clarify /inquiry's purpose" is the dominant point. Resolution: slim the table BUT add a single line at the top of /inquiry's spec: "If you only want one discipline (e.g., just sensemaking), invoke that discipline directly: `/sense-making <input>`." This preserves the "single-discipline" guidance without keeping the redundant table rows.

**Verdict: SURVIVE-with-refinement.** Refinement target: when slimming, add a "If you want just one discipline, run it directly" pointer to preserve the edge-case path that the table previously covered.

---

### D5 — Unify all three into one command with modes

**Landscape position preview:** Boundary→Dead region. Architectural cleanness fights ergonomics + edit-cost.

**Prosecution.** /MVL is the daily driver. Typing `/MVL` is 4 keystrokes; `/inquiry --simple` is 18 keystrokes (or 15 for `--mvl`). Daily-driver-ergonomics dimension takes a measurable hit. The refactor affects install scripts, README, homegrown_skills.md, the chapter_0 documentation, possibly memory references — large surface area. And critically: the current 3-command pattern isn't actually broken. The role-clarity problem is solvable with documentation (D1). D5 fixes a non-problem at large refactor cost. Also: flag-based modes are common in CLI tools but unusual for slash commands; users expect "command name = command behavior," not "command name + flag = command behavior."

**Defense.** Cleanest end state. One canonical loop runner with modes. The 3-runner architecture is the result of incremental accumulation (/MVL came after /inquiry as a "let me just run S→I→C" simplification); a from-scratch design would unify. Aligns with the principle that S→I→C is the primitive — modes are just shortcuts. Long-term, fewer commands to document, install, and reason about.

**Collision.** Prosecution wins decisively on edit-cost + daily-driver-ergonomics. Defense's "from-scratch design would unify" is true but the project isn't doing a from-scratch design — it's incrementally evolving. The cost-benefit ratio for D5 is: high cost (large refactor + ergonomics hit), low present benefit (the 3-runner pattern works).

**Verdict: KILL (for now).** Seed (revival trigger): if D1 (role-distinction docs) doesn't end the user-confusion problem after 6 months OR if /inquiry's distinct features become routinely needed (forcing users to switch between /MVL and /inquiry frequently), revisit unification. The unification might also be revisited if a cleaner shared-implementation pattern emerges (e.g., all three commands delegating to a common runner with mode parameters under the hood — at which point the user-facing command names can stay distinct while the implementation unifies).

---

## Phase 3 — Verdicts (consolidated)

| Path | Verdict | Critical caveat |
|---|---|---|
| **F1** (archive) | SURVIVE-with-caveat | Loses design rationale unless lifted first |
| **F2** (update in place) | REFINE → F3 | Treats symptom; structural problem (duplicate file) remains |
| **F3** (lift then archive) | SURVIVE — clean | When lifting, edit out source's "First Draft" framing |
| **F4** (delete) | KILL | Strictly dominated by F1 |
| **D1** (role docs) | SURVIVE — clean | Optional: factor shared content into README to reduce drift surface |
| **D2** (migrate features) | KILL | High risk to daily driver for unused features |
| **D3** (deprecate) | KILL (deferred) | Revisit if /inquiry stays unused 6mo + /diagnose hasn't shipped |
| **D4** (slim CONFIGURE table) | SURVIVE-with-refinement | Add "run discipline directly" pointer to preserve S-only edge case |
| **D5** (unify with modes) | KILL (deferred) | Revisit if D1 fails to end confusion or features become routine |

---

## Phase 3.5 — Assembly Check

### Survivors entering assembly check

- **F-side:** F1 (caveat), F3 (clean)
- **D-side:** D1 (clean), D4 (refinement)

### Assembly candidates

**A1 (innovation's recommendation): F3 + D1 + D4**

- Lift design rationale into `commands/inquiry.md` as Design Notes.
- Archive `inquiry_as_a_loop.md`.
- Add role-distinction blurbs to all 3 command files.
- Slim /inquiry's CONFIGURE table; add discipline-direct pointer.

**A2 (minimal): F1 + D1**

- Archive file (without lift).
- Role docs only.

**A3 (documentation-only): F3 + D1**

- Lift + archive + role docs.
- Don't touch /inquiry's CONFIGURE table.

**A4 (slim-only): F1 + D1 + D4**

- Archive without lift.
- Role docs.
- Slim CONFIGURE.

### Assembly evaluation

| Assembly | Accuracy-pres. | Navig. | Signal/noise | Feature-pres. | Role-clarity | Daily-driver | Edit-cost | Long-term |
|---|---|---|---|---|---|---|---|---|
| **A1** | HIGH | HIGH | HIGH | HIGH | HIGH | HIGH | MEDIUM | HIGH |
| **A2** | LOW | MED | MED | HIGH | HIGH | HIGH | LOW | MED |
| **A3** | HIGH | HIGH | MED | HIGH | HIGH | HIGH | LOW-MED | HIGH |
| **A4** | LOW | HIGH | HIGH | HIGH | HIGH | HIGH | LOW-MED | MED |

### Adversarial test — A1 (the recommended)

**Prosecution.** A1 is the largest of the assemblies — it touches 4 files (3 command files + 1 archive move) AND adds ~30 lines to commands/inquiry.md AND slims a table. If the user is hesitant about /inquiry's role anyway (since it's unused), why invest in slimming + lifting? A2 (minimal) achieves the navigability win at a fraction of the cost.

**Defense.** A1 produces the strongest end state across all dimensions simultaneously. Each component (F3, D1, D4) is independently a clean SURVIVE or SURVIVE-with-tractable-refinement. Component costs are individually small (lift = ~30 lines; role docs = ~15 lines; slim = ~5 row removal + 1 line pointer). Aggregate cost is still ≤1 hour of focused editing. Benefits compound: the file is gone cleanly AND role-distinction is in place AND /inquiry's purpose is sharper. Long-term coherence dimension favors A1 most strongly because all three changes pull in the same direction (clarify role distinction, preserve substantive design, remove redundant content).

**Collision.** Prosecution's "why invest if unused" is a defensible question, but it leads to A2 not "do nothing." A1 vs A2 tradeoff: A1 spends ~1hr extra to preserve rationale (F3 over F1) and sharpen /inquiry's distinctness (D4). The user's call. Both viable.

**Verdict: A1 SURVIVES as recommended default; A3 is the strongest fallback if D4 feels premature.**

### Why A1 over alternatives

- **A1 vs A2:** A1 spends additional effort on F3-vs-F1 (lift the rationale) and D4 (slim). The cost is small; the benefit is real. A2 is acceptable if the user wants the absolute-minimum fix.
- **A1 vs A3:** A3 drops D4 (no slimming). This is reasonable if the user wants to defer touching /inquiry's CONFIGURE table until /inquiry is actively used. A3 is the "pure documentation hygiene" assembly.
- **A1 vs A4:** A4 drops F3-lift (archive without preserving rationale). Saves ~30 lines of editing but loses the design rationale to git history. Not recommended; F3 dominates F1.

### Recommended default: **A1 (F3 + D1 + D4)** with the refinement that D4 includes a "/sense-making directly" pointer.

### Acceptable fallback: **A3 (F3 + D1)** if the user wants to defer /inquiry CONFIGURE edits.

### Not recommended: **A2 (F1 + D1)** unless absolute minimum effort is required; the rationale loss is unjustified.

---

## Phase 4 — Coverage + Convergence

### Accumulator update

| Candidate | Verdict | Dimension that dominated |
|---|---|---|
| F1 | SURVIVE-with-caveat | Accuracy-preservation (loses rationale alone) |
| F2 | REFINE → F3 | Signal-to-noise (creates hybrid spec) |
| F3 | SURVIVE — clean | All dimensions positive |
| F4 | KILL | Reversibility (strictly dominated by F1) |
| D1 | SURVIVE — clean | Role-clarity (HIGH weight) |
| D2 | KILL | Edit-cost + Daily-driver-ergonomics |
| D3 | KILL (deferred) | Long-term coherence |
| D4 | SURVIVE-with-refinement | Signal-to-noise vs minor edge-case loss |
| D5 | KILL (deferred) | Edit-cost + Daily-driver-ergonomics vs no present benefit |
| A1 | SURVIVE — recommended | All dimensions positive in compound |
| A3 | SURVIVE — fallback | Documentation-only subset of A1 |

### Coverage assessment

- **File-side:** F1, F2, F3, F4 evaluated. All four file options tested. No unexplored region.
- **Discipline-side:** D1, D2, D3, D4, D5 evaluated. Five discipline options tested. No unexplored region.
- **Assembly:** A1, A2, A3, A4 considered. A1 confirmed as recommended; A3 as fallback.

### Convergence signal: **TERMINATE**

- Clean SURVIVE exists: F3, D1 individually, A1 as compound.
- Coverage is comprehensive: all 4 file options + all 5 discipline options + 4 assemblies tested.
- No unexplored region likely to contain better candidates.
- Landscape stable: critique confirmed innovation's structural recommendation; no new region surfaced that innovation missed.

---

## Final Punch List (actionable)

### Recommended: Configuration A1 (F3 + D1 + D4)

#### Step 1 — Lift design rationale into `commands/inquiry.md` (F3 part 1)

**Where:** After the existing "Rules" section (currently around line 312 of `commands/inquiry.md`).

**What to add:**

```markdown
---

## Design Notes

### Strengths

- **Separation of concerns:** disciplines do the thinking, inquiry does the plumbing, wayfinding does the steering.
- **Human in the loop:** the human sees every step, can override anything, drives the pace.
- **State persistence:** `_state.md` captures everything needed to resume across sessions.
- **Folder-as-structure:** the file system IS the thinking structure. No database, no special tools.
- **Discipline independence:** each discipline runs via its own command at full depth. Inquiry doesn't compress or simplify the disciplines.

### Known limitations (deferred to future iterations)

1. **Variable-pipeline manual stepping** — `/inquiry`'s mode requires the human to type each discipline command. `/MVL` and `/MVL+` already auto-run their fixed pipelines; this limitation is specific to `/inquiry`'s variable-pipeline mode.
2. **File-based state tracking** — progress is checked by file existence, fragile under renames or partial outputs.
3. **Wayfinding inlined, not invoked** — wayfinding currently runs inline rather than calling `/wayfinding` as a separate command.
4. **No iteration file separation** — all iterations write to the same folder; iteration N+1 overwrites N.
5. **Single pipeline per CONFIGURE** — mid-execution pipeline change requires manual restructuring.
6. **No parallel branches** — decomposition creates sub-branches but each runs sequentially.
7. **SYNTHESIZE is underspecified** — currently "read everything, write a document"; would benefit from a proper synthesis discipline.
8. **No cross-inquiry learning** — each inquiry starts from scratch; no persistent lessons across inquiries.
```

**Caveat applied (per F3 verdict):** Drop the source file's "First Draft" framing. The lifted content above uses neutral "Strengths" / "Known limitations" headers, not "first draft of /inquiry's strengths."

---

#### Step 2 — Archive the file (F3 part 2)

```bash
mkdir -p thinking_disciplines/devdocs/old/
git mv thinking_disciplines/devdocs/inquiry_as_a_loop.md thinking_disciplines/devdocs/old/
```

---

#### Step 3 — Add role-distinction documentation (D1)

##### `commands/inquiry.md` — add at top, after the description line

```markdown
**When to use `/inquiry` vs the simpler loop runners:**
- `/MVL` for routine S→I→C inquiries (auto-runs, faster). Daily driver for typical cognitive tasks.
- `/MVL+` for inquiries needing exploration of unknown territory and decomposition (auto-runs E→S→D→I→C).
- `/inquiry` (this command) when you need: variable pipeline selection by problem type, per-branch decomposition with different pipelines per sub-problem, 6 wayfinding moves between iterations (BROADEN/NARROW/SHIFT/DIAGNOSE/TERMINATE/RECONSIDER), or SYNTHESIZE deliverable production. Reserve for genuinely complex multi-iteration / multi-branch scenarios.
```

##### `commands/MVL.md` — add at top, after the description line

```markdown
**When to use `/MVL` vs the alternatives:**
- `/MVL` (this command) — fixed S→I→C, auto-run. Daily driver for routine cognitive inquiries.
- `/MVL+` — adds E (exploration) and D (decomposition) to the pipeline. Use when the problem starts from unknown territory or has visible sub-problems.
- `/inquiry` — variable-pipeline orchestrator with wayfinding moves and SYNTHESIZE. Use for complex multi-iteration / multi-branch explorations.
```

##### `commands/MVL+.md` — add at top, after the description line

```markdown
**When to use `/MVL+` vs the alternatives:**
- `/MVL` — fixed S→I→C, auto-run. Use for routine cognitive tasks.
- `/MVL+` (this command) — adds E (exploration) and D (decomposition). Use when starting from unknown territory or when sub-problems need partition before SIC.
- `/inquiry` — variable-pipeline orchestrator with wayfinding moves and SYNTHESIZE deliverables. Use for complex multi-iteration / multi-branch explorations.
```

---

#### Step 4 — Slim /inquiry's CONFIGURE pipeline table (D4)

In `commands/inquiry.md`, find the CONFIGURE pipeline-by-problem-type table. Remove these rows that collapse into /MVL behavior:

- ~~Ambiguous = S only~~ (covered by `/sense-making` directly if S-only is genuinely wanted)
- ~~Novel = I → C~~ (covered by `/MVL` running full S→I→C)
- ~~Clear = I → C~~ (covered by `/MVL`)

Keep:
- Ambiguous + novel = S → I → C (covered by /MVL but kept here as the natural pipeline for the classifier's most common case)
- **Complex = S → Decompose → [per branch: pipeline]** (genuinely distinct — /MVL+ runs D but applies same pipeline to whole)
- **Broken = S → [Diagnosis when built]** (placeholder for `/diagnose`)

**Refinement (per D4 verdict):** Add this line above the slimmed table:

```markdown
> **Single discipline?** If you want only one discipline (e.g., just sensemaking), invoke it directly: `/sense-making <input>`. The pipelines below are for multi-discipline inquiries.
```

---

### Fallback configuration (if user wants to defer Step 4)

**Configuration A3 (F3 + D1):** Run Steps 1–3 only. Skip Step 4. /inquiry's CONFIGURE table stays as-is. Acceptable if the user wants to defer /inquiry hygiene until /inquiry is actively used.

### Minimum configuration (only if absolute minimum effort)

**Configuration A2 (F1 + D1):** Skip Step 1 (no lift). Run Step 2 (archive). Run Step 3 (role docs). Skip Step 4. Caveat: design rationale lives only in git history.

### Deferred items (explicit non-actions, with revival triggers)

- **D3 (deprecate /inquiry):** revisit if after 30 inquiries OR 6 months /inquiry has zero invocations AND `/diagnose` has not shipped AND no parallel-branch decomposition need has emerged.
- **D5 (unify with modes):** revisit if D1 (role docs) fails to end user-confusion within 6 months OR if /inquiry's distinct features become routinely needed.
- **D2 (migrate features):** revisit only when a specific /inquiry feature becomes load-bearing in routine practice; migrate one feature at a time, never as a single refactor.

---

## Convergence Telemetry

- **Dimensions evaluated:** 6 file-side, 6 discipline-side. All critical-weight covered. YES.
- **Adversarial strength:** STRONG. Prosecution challenged each candidate's strongest dimension (e.g., F3's bloat, D1's drift surface, A1's effort). Defense had to genuinely answer.
- **Landscape stability:** STABLE — confirmed innovation's recommendation (A1 = F3+D1+D4) without surfacing new regions. The critique's main contribution: confirming F4/D2/D3/D5 KILLs with explicit revival triggers, and adding the D4 refinement (preserve S-only via discipline-direct pointer).
- **Clean SURVIVE:** YES — F3 and D1 individually clean; A1 as compound.
- **Failure modes observed:** none. No rubber-stamping (KILLs are present and reasoned). No nitpicking (verdicts are severity-weighted; minor concerns become caveats not kills). No wrong dimensions (validated against sensemaking perspectives). No false convergence (assembly check considered alternatives).
- **Overall: PROCEED.** Configuration A1 confirmed. Punch list is actionable.
