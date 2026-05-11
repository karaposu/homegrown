# Innovation: inquiry_vs_mvl_outdated_check

## User Input
devdocs/inquiries/inquiry_vs_mvl_outdated_check/_branch.md

Apply 7 mechanisms × 3 variations. Develop concrete edits for each path. Apply assembly check.

---

## Seed

**Two parallel decisions, each with several plausible paths. Develop concrete executable edits for each plausible path so the user can compare them side-by-side, plus surface any new options the audit missed.**

Decision spaces:
- **File** (`inquiry_as_a_loop.md`): archive / update / lift-then-archive / delete
- **Discipline** (`/inquiry` vs `/MVL` and `/MVL+`): keep-with-role-docs / migrate-features / deprecate / slim / unify

---

## Phase 2 — Generate (7 mechanisms × 3 variations)

### 1. Lens Shifting (framer)

| Variation | Lens | Output |
|---|---|---|
| **Generic** | Read through "what's actually used today?" | Observed: `/MVL` and `/MVL+` are the daily drivers in this conversation; `/inquiry` is documented but unused. Lens supports archiving the file (which describes an unused tool as if canonical) and keeping `/inquiry` only with explicit "when to use" guidance. |
| **Focused** | Read through the project's stated long-term goals (year-long autonomous tasks, parallel MVL loops, cross-inquiry consolidation). | These scenarios are exactly where `/inquiry`'s 5 distinct features (per-branch pipelines, 6 wayfinding moves, SYNTHESIZE, diagnosis pipeline, edge-case problem types) become load-bearing. Lens supports keeping `/inquiry` despite current low utilization. |
| **Controversial** | Read through "minimum viable system" / Occam's razor. | If `/MVL` handles 95% of cases and `/inquiry`'s distinct 5% may never materialize, deprecate `/inquiry` entirely; lose features cleanly rather than carry unused infrastructure. **Surfaces Path D3 (deprecate)** as a real option to evaluate, not just dismiss. |

### 2. Combination (generator)

| Variation | Combine | Output |
|---|---|---|
| **Generic** | File update + discipline kept | F2 + D1: update the file to acknowledge MVL/MVL+, keep `/inquiry` with role-distinction docs. |
| **Focused** | Lift design rationale + role docs | **F3 + D1 + D4** combination: extract `inquiry_as_a_loop.md`'s 8 limitations + 5 strengths into `commands/inquiry.md` as a "Design Notes" section; archive the file; add role-distinction across commands; slim `/inquiry` by removing the pipelines that collapse into `/MVL` (Ambiguous=S-only, Novel=I→C, Clear=I→C). Cleanest and most conservative. |
| **Controversial** | Merge all three loop runners into one command with mode flags | **NEW path D5**: `/inquiry --simple` = MVL behavior; `/inquiry --extended` = MVL+ behavior; `/inquiry` (no flag) = current `/inquiry` behavior. Single command surface; mode determines pipeline. Large refactor; clean conceptual model. |

### 3. Inversion (framer)

| Variation | Invert | Output |
|---|---|---|
| **Generic (component-level)** | "Keep `/inquiry`" → "Don't keep, but also don't migrate features — slim it instead." | **NEW path D4 (slim)**: remove the dead/redundant pipelines from `/inquiry` (the ones that collapse into MVL); keep only the genuinely distinct features (per-branch decomposition coordination, 6 wayfinding moves, SYNTHESIZE, diagnosis-pipeline placeholder, edge-case problem types). Smaller `/inquiry`, less overlap with MVL. |
| **Focused (system-level)** | "Three loop runners as separate commands" → "One loop runner with modes" | Same as D5 from Combination/controversial. |
| **Controversial (root-cause)** | "`/MVL` is a primitive; `/inquiry` is plumbing" → "What if `/inquiry` is the primitive (the general orchestrator) and `/MVL` is a shortcut for `/inquiry`'s 'novel' problem-type pipeline?" | Reframes the architectural relationship. Documenting `/MVL` as "the auto-run shortcut for `/inquiry`'s S→I→C pipeline" makes `/inquiry` the canonical loop runner with `/MVL` and `/MVL+` as quick-start aliases. Keeps everything; reframes the documentation. |

### 4. Constraint Manipulation (framer)

| Variation | Modify constraint | Output |
|---|---|---|
| **Generic (add)** | Add: "All loop runners must auto-run (no manual command-by-command)." | Forces `/inquiry` either to auto-run (refactor) or to be deprecated. The auto-run refactor would absorb `/MVL`'s auto-run pattern into `/inquiry`. |
| **Focused (add)** | Add: "Documentation must explain when to use which loop runner; if it doesn't, the redundancy is a real bug." | Mandates Path D1 (role-distinction docs). |
| **Controversial (remove)** | Drop the constraint that "loop runners are separate commands." | Opens Path D5 (unified command with modes). |

### 5. Absence Recognition (generator)

| Variation | Question | Output |
|---|---|---|
| **Generic (current-design gap)** | What's missing in the user's current navigation experience? | A user landing on `commands/` doesn't know which loop runner to pick. There's no decision guide. **NEW small lift: add a 4-line "When to use" matrix** at the top of each loop-runner command file. |
| **Focused (small gap)** | Where else does the missing role-distinction documentation matter? | `README.md` currently lists `/MVL`, `/MVL+`, `/inquiry` as separate disciplines without saying when each is appropriate. **Add a 1-paragraph guidance section** to README.md and `homegrown_skills.md`. |
| **Controversial (designed-from-scratch)** | If the loop-runner architecture were designed today, what would it be? | Probably ONE loop runner with modes (Path D5). The current 3-runner state is the result of incremental accumulation: /MVL came after /inquiry as a "let me just run S→I→C without overhead" simplification. The principled answer is unification; the practical answer accepts the accumulation. |

### 6. Domain Transfer (generator)

| Variation | Source domain | Output |
|---|---|---|
| **Generic (open-source CLIs)** | git's pattern: simple commands (`git commit`) with advanced flags (`git commit --interactive --patch`). | Maps to: `/MVL` is the simple form; `/inquiry` is the advanced form. Both coexist; the simple one is used 95% of the time. Validates Path D1 (keep both with role docs). |
| **Focused (version control deprecation)** | Mark old features deprecated with warnings, gradually remove unused ones. | If `/inquiry`'s edge-case pipelines (Ambiguous=S-only, Clear=I→C) are unused after observation period, mark them deprecated and remove. Path D4 (slim). |
| **Controversial (biology — convergent evolution)** | Two species solve overlapping problems independently; the fitter one wins. | `/MVL` evolved as a simplification of `/inquiry`. In current "fitness" (usage), `/MVL` is fitter. Pure convergent-evolution reading would let `/inquiry` phase out naturally. Argues for Path D3 (deprecate, eventually). |

### 7. Extrapolation (generator)

| Variation | Extrapolate | Output |
|---|---|---|
| **Generic (project growth)** | More disciplines and tools added; more inquiry types possible. | `/inquiry`'s richness becomes more useful as scope grows. Keep with role docs. |
| **Focused (on `/diagnose` shipping)** | When `/diagnose` ships, `/inquiry`'s "Broken" pipeline becomes operational. Until then, the placeholder is unused. | Tracking signal: when `/diagnose` ships, `/inquiry`'s value increases. Conditional revival trigger for Path D3 (deprecate) — i.e., don't deprecate if `/diagnose` ship is imminent. |
| **Controversial (5-year future of AI assistants)** | AI assistants will likely auto-orchestrate cognitive loops without explicit commands. | `/inquiry`'s "type a command, return to /inquiry, type next command" model will feel anachronistic. `/MVL`'s auto-run is closer to the future. The DRIVE MODEL of `/inquiry` is dated; the FEATURES of `/inquiry` (per-branch coordination, etc.) may still matter, but as auto-orchestrated capabilities, not human-typed command sequences. |

---

## Concrete Edit-Plans (consolidated from mechanisms)

### File-side options

#### F1 — Archive

**Edit:**
```bash
mkdir -p thinking_disciplines/devdocs/old/
git mv thinking_disciplines/devdocs/inquiry_as_a_loop.md thinking_disciplines/devdocs/old/
```

**Pro:** Cheapest. The file is in a scratch directory; archiving it doesn't lose canonical content (commands/inquiry.md is canonical).
**Con:** Loses the design rationale (8 limitations + 5 strengths) unless reviewers notice and lift it first.

#### F2 — Update

**Edit:** Add a 1-paragraph section at the top of `inquiry_as_a_loop.md`:

```markdown
## How `/inquiry` Relates to `/MVL` and `/MVL+`

Two simpler loop runners exist alongside `/inquiry`:

- `/MVL` runs a fixed pipeline (S → I → C) with auto-run (no manual command-by-command). Use `/MVL` for routine cognitive tasks where classification overhead isn't justified.
- `/MVL+` runs an extended fixed pipeline (E → S → D → I → C) with auto-run. Use `/MVL+` for problems requiring exploration of unknown territory or decomposition before SIC.
- `/inquiry` (this document) is the rich orchestrator with problem classification, per-branch pipeline coordination after decomposition, 6 wayfinding moves, SYNTHESIZE deliverable production, and a slot for the (not-yet-built) `/diagnose` pipeline. Use `/inquiry` for genuinely complex multi-iteration / multi-branch scenarios.
```

**Pro:** Closes the contextual gap. File becomes useful again as a guide.
**Con:** File still duplicates `commands/inquiry.md` content. Maintenance burden; risk of drift.

#### F3 — Lift then archive (RECOMMENDED for file)

**Edit (two parts):**

**Part 1:** Add a "Design Notes" section to `commands/inquiry.md` after the "Rules" section (line 312). Lift content from `inquiry_as_a_loop.md`:

```markdown
---

## Design Notes

This first-draft loop runner has 5 architectural strengths and 8 known limitations. Documented here so future edits don't accidentally remove load-bearing components or paper over real gaps.

### Strengths

- **Separation of concerns:** disciplines do the thinking, inquiry does the plumbing, wayfinding does the steering. Each has a clear job.
- **Human in the loop:** the human sees every step, can override anything, drives the pace.
- **State persistence:** `_state.md` captures everything needed to resume across sessions.
- **Folder-as-structure:** the file system IS the thinking structure. No database, no special tools.
- **Discipline independence:** each discipline runs via its own command at full depth. Inquiry doesn't compress or simplify the disciplines.

### Known limitations (improvements deferred to future iterations)

1. **Fully human-driven** — every transition requires the human to type the next command. A more mature version could auto-chain disciplines within an iteration, only pausing at wayfinding checkpoints. (Note: `/MVL` and `/MVL+` already auto-run their fixed pipelines; this limitation is specific to `/inquiry`'s variable-pipeline mode.)
2. **File-based state tracking** — progress is checked by file existence, which is fragile under renames or partial outputs.
3. **Wayfinding is inlined, not invoked** — currently the wayfinding checkpoint runs inline rather than calling `/wayfinding` as a separate command with its own saved output.
4. **No iteration file separation** — all iterations write to the same folder; iteration 2's `sensemaking.md` overwrites iteration 1's.
5. **Single pipeline only per CONFIGURE** — if the problem turns out to need a different pipeline mid-execution, restructuring is manual.
6. **No parallel branches** — decomposition creates sub-branches but each runs sequentially.
7. **SYNTHESIZE is underspecified** — currently "read everything, write a document"; would benefit from a proper synthesis discipline.
8. **No cross-inquiry learning** — each inquiry starts from scratch; no persistent lessons across inquiries.
```

**Part 2:** Archive `inquiry_as_a_loop.md`:
```bash
mkdir -p thinking_disciplines/devdocs/old/
git mv thinking_disciplines/devdocs/inquiry_as_a_loop.md thinking_disciplines/devdocs/old/
```

**Pro:** Preserves design rationale in canonical home. File is removed from scratch directory. No duplication.
**Con:** ~30 lines added to `commands/inquiry.md`; small growth.

#### F4 — Delete (no archive)

```bash
rm thinking_disciplines/devdocs/inquiry_as_a_loop.md
```

**Pro:** Cleanest. Loses nothing reviewable.
**Con:** No undo without git; if the design rationale is ever wanted back, must recover from history.

### Discipline-side options

#### D1 — Keep with explicit role-distinction documentation (RECOMMENDED for discipline)

**Edits to three command files:**

**`commands/inquiry.md`** — add at top after the description line:
```markdown
**When to use `/inquiry` vs the simpler loop runners:**
- `/MVL` for routine S→I→C inquiries (auto-runs, faster). Daily driver for typical cognitive tasks.
- `/MVL+` for inquiries needing exploration of unknown territory and decomposition (auto-runs E→S→D→I→C).
- `/inquiry` (this command) when you need: variable pipeline selection by problem type, per-branch decomposition with different pipelines per sub-problem, 6 wayfinding moves between iterations (BROADEN/NARROW/SHIFT/DIAGNOSE/TERMINATE/RECONSIDER), or SYNTHESIZE deliverable production.
```

**`commands/MVL.md`** — add at top after the description line:
```markdown
**When to use `/MVL` vs the alternatives:**
- `/MVL` (this command) — fixed S→I→C, auto-run. Daily driver for routine cognitive inquiries.
- `/MVL+` — adds E (exploration) and D (decomposition) to the pipeline. Use when the problem starts from unknown territory or has visible sub-problems.
- `/inquiry` — variable-pipeline orchestrator with wayfinding moves. Use for complex multi-iteration/multi-branch explorations.
```

**`commands/MVL+.md`** — add at top after the description line:
```markdown
**When to use `/MVL+` vs the alternatives:**
- `/MVL` — fixed S→I→C, auto-run. Use for routine cognitive tasks.
- `/MVL+` (this command) — adds E (exploration) and D (decomposition). Use when starting from unknown territory or when sub-problems need partition before SIC.
- `/inquiry` — variable-pipeline orchestrator. Use for complex multi-iteration/multi-branch explorations with wayfinding moves and SYNTHESIZE deliverables.
```

**Pro:** Small effort. Clarifies for any user when to use which. No code changes; only documentation.
**Con:** None significant.

#### D2 — Migrate features into `/MVL+`

**Edits:**
- Refactor `commands/MVL+.md` to absorb `/inquiry`'s distinct features:
  - Per-branch pipelines after decomposition (the only path where /MVL+ doesn't already cover /inquiry's behavior)
  - 6 wayfinding moves replacing /MVL+'s implicit narrowing
  - SYNTHESIZE step replacing /MVL+'s `finding.md` writing
- Then deprecate `/inquiry`.

**Pro:** Single canonical loop runner. No three-way redundancy.
**Con:** Large refactor of `/MVL+`. High risk of breaking the auto-run behavior that's the user's daily driver.

#### D3 — Deprecate `/inquiry`

**Edits:**
- Add deprecation notice at top of `commands/inquiry.md`:
  > **DEPRECATED.** Use `/MVL` or `/MVL+` for cognitive loop running. `/inquiry`'s distinct features (per-branch decomposition, wayfinding moves, SYNTHESIZE, diagnosis-pipeline placeholder) are not currently used in practice.
- Remove from install scripts.
- Remove from README.md and homegrown_skills.md.
- Keep the file (or archive) for historical reference.

**Pro:** Cleanest. Removes documented-but-unused infrastructure. Reduces surface area.
**Con:** Loses the 5 distinct features. If the project's long-term scenarios materialize (year-long inquiries, parallel branches), need to rebuild. The "Broken" pipeline placeholder for `/diagnose` becomes orphaned.

#### D4 — Slim `/inquiry`

**Edit:** Remove the dead/redundant pipeline rows from `/inquiry`'s CONFIGURE table:
- Drop: `Ambiguous = S only` (collapses into `/MVL`'s S→I→C anyway; almost no real question wants only S)
- Drop: `Novel = I → C` (drops S; `/MVL` is better — adds S which is rarely harmful)
- Drop: `Clear = I → C` (same as Novel)
- Keep: `Ambiguous + novel = S → I → C` (overlaps with `/MVL`; could also be removed, but kept for the "you have classified me as ambiguous-and-novel" branch)
- Keep: `Complex = S → Decompose → [per branch: pipeline]` — distinct, no MVL flavor handles per-branch pipelines
- Keep: `Broken = S → [Diagnosis when built]` — placeholder for `/diagnose`

**Pro:** Reduces overlap between `/inquiry` and `/MVL`. Doesn't lose distinct features.
**Con:** Inquiry becomes more specialized; users with edge cases like "I genuinely only want S" lose a path (but they can manually run `/sense-making` directly).

#### D5 — Unify all three into one command with modes

**NEW path surfaced by Combination/controversial + Inversion/focused.**

**Edits:** Replace the three command files with one:
```
/inquiry [--simple|--extended|<no-flag>] <input>
```
- `--simple` (alias `--mvl`) — runs fixed S→I→C with auto-run (current /MVL behavior)
- `--extended` (alias `--mvl+`) — runs fixed E→S→D→I→C with auto-run (current /MVL+ behavior)
- No flag — runs the current /inquiry behavior (variable pipeline by classification, manual command-by-command, 6 wayfinding moves, SYNTHESIZE)

Or alternatively keep `/MVL` and `/MVL+` as aliases that just call `/inquiry --simple` and `/inquiry --extended` under the hood.

**Pro:** Single canonical orchestrator. Cleanest conceptual model. Documentation says "there's one loop runner with modes" rather than "three loop runners with overlapping concerns."
**Con:** Largest refactor. Affects install scripts, README, homegrown_skills.md. Breaks user habit (typing `/MVL` directly is faster than `/inquiry --simple`).

---

## Phase 3 — Test Survivors

| Path | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism independence |
|---|---|---|---|---|---|
| **F1 — Archive** | LOW | MODERATE — loses rationale | LOW | HIGH (1 git mv) | Lens-generic + Domain-controversial |
| **F2 — Update** | LOW | MODERATE — duplicates commands/inquiry.md | LOW | HIGH (1 paragraph add) | Lens-focused + Constraint-Manipulation focused |
| **F3 — Lift then archive** | MODERATE | STRONG — preserves rationale, removes scratch file | HIGH (rationale becomes part of canonical spec) | MEDIUM (~30 lines + archive) | Combination focused + Domain generic |
| **F4 — Delete** | LOW | WEAK — destroys content irrecoverably (without git) | LOW | HIGHEST (1 rm) | Inversion-controversial + Domain-controversial |
| **D1 — Role docs** | LOW | STRONG | HIGH — fixes navigation experience | HIGH (3 small inserts) | Lens-all + Constraint-Manipulation focused + Domain generic |
| **D2 — Migrate features** | MODERATE | WEAK — high refactor risk; could break /MVL+ | MEDIUM | LOW (large refactor) | Combination focused (rejected) |
| **D3 — Deprecate** | MODERATE | MODERATE — clean but loses 5 features | LOW | MEDIUM (multiple file edits) | Lens-controversial + Domain-controversial |
| **D4 — Slim** | MODERATE | STRONG — keeps distinct features, removes redundant | MEDIUM | MEDIUM (table edit + spec change) | Inversion-generic + Domain-focused |
| **D5 — Unify** | HIGH | MODERATE — clean concept, large refactor | HIGH | LOW (largest refactor) | Combination-controversial + Inversion-focused + Absence-controversial |

### Path eliminations

- **F4 (Delete)** — slightly riskier than F1 (Archive) without meaningful benefit; choose F1 or F3 instead.
- **D2 (Migrate features)** — high refactor risk for the daily driver. The features being migrated are unused; migrating them carries risk without proportionate benefit.
- **D3 (Deprecate)** — premature given the project's stated long-term goals (year-long inquiries, parallel branches, when /diagnose ships).
- **D5 (Unify)** — ambitious and clean conceptually; large refactor cost. Surface as DEFERRED option for the user, not as immediate recommendation.

### Survivors:
- **File:** F1 (archive — minimum), F3 (lift then archive — preserve rationale)
- **Discipline:** D1 (role docs — minimum), D4 (slim — moderate)

---

## Phase 3.5 — Assembly Check

Survivors: F1, F3, D1, D4.

### Assembly 1: F3 + D1 + D4 (RECOMMENDED)

- Lift design rationale (8 limitations + 5 strengths) from `inquiry_as_a_loop.md` into `commands/inquiry.md` as a "Design Notes" section.
- Archive `inquiry_as_a_loop.md` to `thinking_disciplines/devdocs/old/`.
- Add explicit role-distinction "When to use" sections to `commands/inquiry.md`, `commands/MVL.md`, `commands/MVL+.md`.
- Slim `/inquiry`'s CONFIGURE pipeline table by removing the rows that collapse into `/MVL`.

**Net edits:** ~30 lines added to `commands/inquiry.md` (Design Notes); ~5 lines added to each of three command files (When to use); ~5 lines removed from `/inquiry`'s CONFIGURE table; 1 file moved to `old/`.

**Emergent property:** `/inquiry` becomes leaner and more clearly distinct from `/MVL`/`/MVL+`. The design rationale is preserved in canonical home. Users have explicit guidance on when to use each loop runner.

**Verdict: STRONGEST CONFIGURATION.**

### Assembly 2: F1 + D1 (MINIMAL)

- Archive `inquiry_as_a_loop.md` (accept that the design rationale isn't preserved separately).
- Add role-distinction docs only.
- Don't slim `/inquiry`.

**Pro:** Cheapest. The user can act on this in <10 minutes.
**Con:** Loses the design rationale; doesn't reduce `/inquiry`/`/MVL` overlap.

### Assembly 3: F3 + D5 (MAXIMAL — DEFERRED)

- Lift design rationale + archive file.
- Unify all three loop runners into `/inquiry` with mode flags.

**Pro:** Architecturally cleanest end state.
**Con:** Largest refactor. Breaks user muscle memory (typing `/MVL` directly).

---

## Phase 4 — Survivors for Critique

### Configuration choice 1 — File handling
- **A.** F1 (archive only)
- **B.** F3 (lift design rationale, then archive) — recommended

### Configuration choice 2 — Discipline handling
- **a.** D1 (role docs only) — recommended minimum
- **b.** D1 + D4 (role docs + slim /inquiry's pipelines) — recommended fuller
- **c.** D5 (unify, deferred large refactor)

### Recommended default: **F3 + D1 + D4 (Assembly 1)**

---

## Mechanism Coverage (Telemetry)

- **Generators applied:** 4/4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- **Framers applied:** 3/3 (Lens Shifting, Constraint Manipulation, Inversion)
- **Convergence:** YES — multiple mechanisms converge on D1 (role docs); secondary convergence on F3 (lift then archive). D5 (unify) emerged from Combination/controversial + Inversion/focused + Absence/controversial as a recurring "principled-but-expensive" alternative.
- **New paths surfaced beyond initial framing:**
  - D4 (Slim `/inquiry` — remove dead pipelines, keep distinct features) — surfaced by Inversion/generic + Domain/focused
  - D5 (Unify into one command with modes) — surfaced by Combination/controversial + Inversion/focused
- **Survivors tested:** all paths tested for novelty, scrutiny survival, fertility, actionability, mechanism independence.
- **Failure modes observed:**
  - Premature evaluation? No.
  - Single-mechanism trap? No.
  - Early frame lock? No — evaluated F1 vs F3 and D1 vs D4 vs D5.
  - Innovation without grounding? No — every path has concrete edits.
  - Mechanism exhaustion? No.
  - Survival bias? Tested the most uncomfortable paths (D3 deprecation, D5 unification). D3 rejected on long-term-goal grounds; D5 deferred not killed.
- **Overall:** PROCEED — coverage strong, convergence on Assembly 1 (F3 + D1 + D4) recommended, all survivors tested. Critique can now adversarially evaluate.
