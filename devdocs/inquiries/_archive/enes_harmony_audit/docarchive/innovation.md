# Innovation: enes_harmony_audit

## User Input
devdocs/inquiries/enes_harmony_audit/_branch.md

Read _branch.md and sensemaking.md from the same folder. Apply the 7 mechanisms to generate concrete edit-plans for the 3 harmony failures (structural duplication, discipline-list drift, terminology residue). For the duplication issue, generate the 3 paths sensemaking flagged (α merge-and-archive / β split-roles / γ rename-and-merge) plus any others. Generate 3 variations per mechanism (generic, focused, controversial). Apply assembly check.

---

## Seed

**Three concrete edit-plans, each grounded in the charter ("one file per concept") and the user's stated terminology preference (Primitive RC / Predictive RC / Retrospective RC).** Sensemaking pre-loaded the structural decision (the duplicate file is the load-bearing failure; everything else is downstream). Innovation's job is to generate concrete edit-plans plus alternatives, then test which paths survive scrutiny.

---

## Phase 2 — Generate (7 mechanisms × 3 variations)

### 1. Lens Shifting (framer)

| Variation | Lens | Output |
|---|---|---|
| **Generic** | View the situation as "two parallel reference docs" (current). | Both files claim canonical reference status. The lens shows: only one can be canonical. **Output: Path α** (sensemaking's merge-and-archive). |
| **Focused** | View through the charter's strict "one file per concept" rule. | The merge is mandatory; no role-split survives the rule. **Output: Path α confirmed; β eliminated.** |
| **Controversial** | View as "audience split" — `evolving_quality_assetment_component.md` for human-narrative reading, `system_quality_assestment.md` for system/agent reference. | Could justify keeping both with sharper differentiation. But content overlap is too high; the audience split is post-hoc. **Output: Path β refined** (narrative-only evolving) — but only if content is genuinely partitioned, not duplicated. |

### 2. Combination (generator)

| Variation | Combine | Output |
|---|---|---|
| **Generic** | All content from both files → one merged file. | Standard merge. Sensemaking already named this; no novelty. |
| **Focused** | Keep `system_quality_assestment.md` as-is + lift the trajectory narrative section from `evolving_quality_assetment_component.md` (its lines about endgoal trajectory not already in the system file) into the system file's existing "Trajectory" section. | Strict-superset merge. The system file gains a small narrative paragraph; the evolving file becomes empty of unique content and can move to `enes/old/`. **Output: Path α (precise)** — verified there's no unique content in the evolving file. |
| **Controversial** | Combine the two by RENAMING `evolving_quality_assetment_component.md` to overwrite `system_quality_assestment.md`. Keep the better filename (and the better content). | Filename matters because `desc.md` and `thinking_space_dynamics.md` already reference `evolving_quality_assetment_component.md`. Renaming the WORSE file's name onto the better content makes those references resolve correctly without edits. **Output: Path γ — keep the referenced filename, swap the content underneath.** Pro: zero reference updates. Con: counterintuitive (the orphaned good content survives but loses its filename). |

### 3. Inversion (framer)

| Variation | Invert | Output |
|---|---|---|
| **Generic (component-level)** | "Both files exist" → "Neither file exists." | Drop both; let the architecture live only as section §4 of `thinking_space_dynamics.md`. **Output: Path δ — eliminate the standalone architecture file.** Pro: charter-pure. Con: `thinking_space_dynamics.md` would become the canonical home, but its primary topic is the typed primitive set, not the three-layer architecture. Buries an important architectural concept inside a different concept's file. |
| **Focused (system-level)** | "The architecture needs its own file" → "The architecture lives where it's used — embedded in disciplines." | Distributed across discipline specs. Reject — would multiply duplication, not eliminate it. |
| **Controversial (root-cause)** | Invert the charter rule itself: "one file per concept" → "concepts have natural multiplicity." | Allows two files for one concept by design. But the charter is the project's stated rule; overriding it requires evidence the rule is wrong. No evidence here. **Output: Reject — charter holds.** |

### 4. Constraint Manipulation (framer)

| Variation | Modify constraint | Output |
|---|---|---|
| **Generic (add)** | Add: "No enes/ file may exceed 200 lines." | `system_quality_assestment.md` (176) fits; `thinking_space_dynamics.md` (325) doesn't. Forces splitting other files; doesn't help this audit. Reject. |
| **Focused (add)** | Add: "Every enes/ file must be referenced by at least one other enes/ file." | Makes the orphan status of `system_quality_assestment.md` an immediate, structural problem. Forces references to update as part of the fix. **Useful as a meta-constraint to add to the charter** — would prevent future orphans. |
| **Controversial (remove)** | Remove: "one file per concept" charter rule. | Tested in Inversion-controversial; rejected (no evidence the rule is wrong). |

### 5. Absence Recognition (generator)

| Variation | Question | Output |
|---|---|---|
| **Generic (current-design gap)** | What index/ToC does `enes/` lack? | A standalone `enes/README.md` or `enes/INDEX.md` listing each file with its concept. The charter section in `discipline_taxonomy.md` plays this role but is stale and buried. **Output: Path ε — add an `enes/INDEX.md` that lists each active file with its concept and the latest update date.** Cheap; would prevent future stale charters. |
| **Focused (small gap)** | What's the smallest absence in the terminology residue? | A 4-character "RC" suffix in 4 lines of `desc.md` (91, 93, 95, 233). Mechanical fix. |
| **Controversial (designed-from-scratch)** | If we built `enes/` today, what would be there? | One architecture-reference file (the system file), one goal file (`desc.md`), one taxonomy file (`discipline_taxonomy.md`), one discipline-spec file per Cross-cutting/Boundary discipline (currently only `intuit.md`), and one primitive-set file (currently embedded in `thinking_space_dynamics.md`). No separate "evolving quality awareness" trajectory file. The current structure is a result of incremental accumulation. **Validates Path α.** |

### 6. Domain Transfer (generator)

| Variation | Source domain | Output |
|---|---|---|
| **Generic (open-source)** | Deprecation pattern. | Mark `evolving_quality_assetment_component.md` as DEPRECATED with a pointer to `system_quality_assestment.md`. Eventually archive. Standard. **Output: Path α, with explicit deprecation header.** |
| **Focused (version control)** | `git mv` semantics — move content from old to new, leave a redirect. | Content moves to `system_quality_assestment.md`; the old file gets reduced to a one-line pointer ("This file's content moved to `system_quality_assestment.md`"). Eventually delete the pointer. **Output: Path α with two-step deprecation** — pointer first, archive later. |
| **Controversial (biology — symbiosis)** | Two organisms in distinct niches. | Two files coexist if they serve genuinely different niches. Tested in Lens-controversial; content overlap defeats this. Reject. |

### 7. Extrapolation (generator)

| Variation | Extrapolate | Output |
|---|---|---|
| **Generic (project growth)** | More concept-files will be added; without enforcement, charter staleness compounds. | Fix the charter NOW (don't defer). Adding `enes/INDEX.md` (Path ε) prevents future drift. |
| **Focused (`/intuit` Phase A ships)** | When Phase A ships, the architecture file needs updating. Two architecture files = double maintenance cost. | The cost of duplication is monotonically increasing. Path α delivers compounding value. |
| **Controversial (5-year future)** | Future projects may genuinely specialize by audience (machine-parseable vs human-narrative). | Could foreshadow a real audience-split need. But not yet — current duplication is incremental accumulation, not designed audience-split. Path α now; reconsider Path β only if a concrete audience-split need materializes. |

---

## Concrete Edit-Plans (consolidated from mechanisms)

### Plan A (PRIMARY) — Merge & Archive (sensemaking's Path α + Combination/focused refinements)

**For harmony failure #1 (structural duplication):**

1. Read `evolving_quality_assetment_component.md` carefully and confirm `system_quality_assestment.md` is a strict superset, OR identify any unique content (small narrative paragraph in the trajectory section is the only candidate).
2. If unique content exists, lift it into `system_quality_assestment.md`'s existing "Trajectory" section.
3. Update `enes/desc.md` line 233: change reference target from `evolving_quality_assetment_component.md` to `system_quality_assestment.md`.
4. Update `enes/thinking_space_dynamics.md` line 133: change reference from `evolving_quality_assetment_component.md` to `system_quality_assestment.md`.
5. Move `enes/evolving_quality_assetment_component.md` → `enes/old/evolving_quality_assetment_component.md`.

**For harmony failure #2 (discipline-list drift) in `discipline_taxonomy.md`:**

6. Replace `/navigate` with `/navigation` (multiple occurrences in the Boundary section + summary table).
7. Remove `/align` from the Situational list; add `/roadmap` to the Situational list.
8. Update charter section's file list:
   - Add `system_quality_assestment.md` — three-layer quality awareness architecture
   - Remove `evolving_quality_assetment_component.md` (now in `enes/old/`)
   - Final list: 5 files (`thinking_space_dynamics.md`, `intuit.md`, `desc.md`, `discipline_taxonomy.md`, `system_quality_assestment.md`)
9. Optionally: add a one-line note in the charter that loop runners (`/MVL`, `/MVL+`, `/inquiry`) are operational/orchestration commands, not categorized in the discipline taxonomy. Or move the note to `commands/inquiry.md` where it already says this.

**For harmony failure #3 (terminology residue) in `desc.md`:**

10. Line 91: "Retrospective" → "Retrospective RC"
11. Line 93: "Retrospective" → "Retrospective RC"
12. Line 95: "Retrospective" → "Retrospective RC"
13. Line 233: "(Primitive RC, Predictive RC, Retrospective)" → "(Primitive RC, Predictive RC, Retrospective RC)" — and simultaneously update the reference target per step 3 above.

**Edit cost:** ~13 edits across 4 files. Highest leverage. Resolves all 3 harmony failures.

---

### Plan B (ALTERNATIVE) — Rename-Swap (Path γ from Combination/controversial)

Same as Plan A, except:

- Instead of moving `evolving_quality_assetment_component.md` to `enes/old/`, **rename `system_quality_assestment.md` → `evolving_quality_assetment_component.md`**, overwriting the older file. Existing references in `desc.md` line 233 and `thinking_space_dynamics.md` line 133 already point to that filename — they resolve correctly without edits.

**Pro:** Zero reference updates needed. Existing pointers automatically resolve to the better content.

**Con:** Counterintuitive — the orphaned, better file loses its filename. The filename `evolving_quality_assetment_component.md` has a typo ("assetment") that gets perpetuated. Some confusion possible.

**Edit cost:** ~9 edits across 3 files (no reference updates needed).

---

### Plan C (DEFERRED — only consider if user explicitly wants two files) — Split Roles (Path β)

- `system_quality_assestment.md` becomes the **architectural reference** (what the layers ARE, how they interact).
- `evolving_quality_assetment_component.md` is REDUCED to a short narrative-only file about the human-to-system trajectory (≤30 lines), with no architecture content.
- Charter explicitly notes both files with their distinct roles.

**Pro:** Two files survive with clear differentiation.

**Con:** Requires the user to rewrite `evolving_quality_assetment_component.md` as a true narrative-only doc. The audit can't auto-perform this. Also requires the charter to allow concept-multiplicity by role, which is an addition to the rule.

**Edit cost:** ~20 edits + manual narrative rewrite. Highest cost, lowest leverage unless the audience-split is genuinely needed.

---

### Plan D (META-PROPOSAL — consider alongside Plan A) — Add an Index File (Path ε from Absence Recognition)

In addition to Plan A:

- Create `enes/INDEX.md` (or `enes/README.md`) listing each active file with its concept and last-updated date.
- This replaces the charter section's stale file list with a single-source-of-truth index.
- Future additions to `enes/` must update the index — making future drift visible.

**Pro:** Prevents future charter staleness; adds a meta-constraint that's enforceable per-edit.
**Con:** One more file to maintain. Slight redundancy with the charter section.

**Recommendation:** OPTIONAL extension to Plan A. Worth it if the user expects the project to grow; skip if `enes/` is going to stay roughly this size.

---

## Phase 3 — Test Survivors

| Plan | Novelty | Scrutiny survival | Fertility | Actionability | Mechanism independence |
|---|---|---|---|---|---|
| **A — Merge & Archive** | LOW (standard pattern) | STRONG — survives all prosecution: charter compliance, single canonical home, terminology coherence post-archive, references updated | HIGH — sets a clean state from which future enes/ work can grow without confusion | HIGH — every edit is mechanical and citable | HIGH — converged from Lens (focused), Combination (focused), Absence (controversial), Domain (generic + focused), Extrapolation (focused). 5+ paths. |
| **B — Rename-Swap** | HIGHER — clever filename-preservation trick | MODERATE — survives functional prosecution but pays an aesthetic cost (perpetuates "assetment" typo, name-content inversion) | MODERATE | HIGH — fewer edits than A | LOW — only Combination/controversial produced this |
| **C — Split Roles** | LOW | WEAK — requires manual narrative rewrite that audit can't author; charter must be amended | LOW until rewrite is done | LOW — defers the actual work | LOW — only Lens/controversial produced this |
| **D — Index File (extension)** | MODERATE — prevents-future-drift mechanism | STRONG — adds enforceable meta-constraint | HIGH — compounding value over time | MEDIUM — one extra file to maintain | MODERATE — Absence-generic + Extrapolation-generic + Constraint-Manipulation-focused |

**Verdict:** Plan A is the strongest standalone. Plan D is a worthwhile extension. Plans B and C are weaker alternatives.

---

## Phase 3.5 — Assembly Check

**Question:** Do any combinations produce something stronger than the individual plans?

### Assembly: Plan A + Plan D

Plan A resolves the 3 current harmony failures. Plan D prevents future ones. Together they produce a stable enes/ structure plus a self-maintaining index.

**Emergent property:** Self-correcting. With the index file in place, future drift becomes visible at edit-time (the contributor must update the index when adding a file, or the inconsistency is obvious). The audit's findings stop being one-off corrections and become a system property.

**Test:**
- Novelty: HIGHER than A or D alone (the configuration is new — fix-now + prevent-future)
- Scrutiny survival: STRONGEST — handles both current state and future drift
- Fertility: HIGH — the index file becomes a lightweight contract for `enes/` going forward
- Actionability: HIGH — A's edits + D's index file is one work session

**Verdict:** ASSEMBLY WINS. Recommend Plan A + Plan D as the combined approach.

### Assembly: Plan A only (no index)

Resolves harmony failures, no future-drift prevention. Acceptable if the user judges the project too small for the index file overhead. Strong fallback.

---

## Phase 4 — Survivors for Critique

Three configurations, ranked:

### Configuration 1 (RECOMMENDED): Plan A + Plan D

- Merge `evolving_quality_assetment_component.md` content into `system_quality_assestment.md` (or confirm strict-superset and skip merge step).
- Archive `evolving_quality_assetment_component.md` to `enes/old/`.
- Update 2 references in `desc.md` and `thinking_space_dynamics.md`.
- Apply discipline-list drift fixes in `discipline_taxonomy.md`.
- Apply terminology fixes in 4 lines of `desc.md`.
- Create `enes/INDEX.md` listing 5 active files with concepts.

### Configuration 2 (FALLBACK): Plan A only

- Same as above without the index file.
- Cheaper now; risks future drift.

### Configuration 3 (NICHE): Plan B (Rename-Swap)

- Avoid all reference updates by swapping content under the older filename.
- Pays a small aesthetic cost (typo perpetuation).
- Use only if the user wants to minimize edits and is comfortable with the name-content inversion.

---

## Mechanism Coverage (Telemetry)

- **Generators applied:** 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation)
- **Framers applied:** 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion)
- **Convergence:** YES — 5+ mechanisms point to Plan A as the primary. Absence-generic + Extrapolation-generic + Constraint-Manipulation-focused converge on Plan D as a future-drift prevention extension.
- **Survivors tested:** 4 of 4 (Plans A/B/C/D + 1 assembly).
- **Failure modes observed:**
  - Premature evaluation? No.
  - Single-mechanism trap? No.
  - Early frame lock? No — explored alternatives (B, C, δ-from-Inversion-generic).
  - Innovation without grounding? No — every plan tested.
  - Mechanism exhaustion? No — survivors abundant.
  - Survival bias? Tested the most uncomfortable plan (B Rename-Swap pays an aesthetic cost; C requires a manual rewrite). Both kept on the survivor list rather than auto-rejected.
- **Overall:** PROCEED — sufficient coverage, strong convergence on Plan A + D, all survivors tested. Critique can now adversarially evaluate.
