# Innovation: inquiry_folder_organization

## User Input

`devdocs/inquiries/inquiry_folder_organization/_branch.md`

Read `_branch.md`, `exploration.md`, `sensemaking.md`, `decomposition.md`. Innovate concrete designs for the 6 OPEN sub-decisions per piece (P1-P6). 3 variations per piece (generic/focused/contrarian). Apply assembly check. Save as `devdocs/inquiries/inquiry_folder_organization/innovation.md`.

---

## Approach

Pragmatic build inquiry — efficient mechanism use over exhaustive coverage. Mechanism shorthand: **Comb** (combination), **AR** (absence recognition), **DT** (domain transfer), **Ex** (extrapolation), **LS** (lens shifting), **CM** (constraint manipulation), **Inv** (inversion). Each piece gets at least 1 Generator + 1 Framer.

---

## P5 — ARCHIVED criterion (do first; defines downstream value)

### P5.a — Transition policy

**Generic [Ex — extrapolate from existing project conventions]:** **Never-auto, manual only.** User edits `_state.md` Status field to ARCHIVED when they decide. Matches how COMPLETE and SUPERSEDED work today (also manual). No automation needed; no surprise transitions.

**Focused [CM — minimize cognitive load]:** **Age-threshold auto, N=30 days.** A COMPLETE inquiry whose mtime is >30 days old auto-transitions to ARCHIVED at the next regen. Rationale: 30 days matches typical project rhythm; user doesn't have to remember which to archive. **Risk:** silent transitions reduce user awareness.

**Contrarian [Inv]:** **No ARCHIVED status at all.** COMPLETE is sufficient. The visibility problem is solved by sort+filter on the existing statuses. Adding ARCHIVED is needless complexity. Rationale: 28 COMPLETE inquiries today; index can sort them by mtime and the recent ones surface naturally. **Risk:** if N grows to 200, COMPLETE becomes overwhelming.

### P5.b — Retroactive application

**Generic:** Don't retroactively ARCHIVE. The 28 existing COMPLETE inquiries stay COMPLETE. Policy applies going forward.

**Focused:** Retroactively ARCHIVE all COMPLETE inquiries older than 30 days. Snapshot the catch-up cost (~5 min: bulk Status change for ~10 folders matching the criterion).

**Contrarian:** Retroactively SUPERSEDED-or-keep audit instead of ARCHIVE — for each COMPLETE older than 30 days, ask "is this still relevant?" Some get marked SUPERSEDED instead of ARCHIVED. More work, more honest.

---

## P1 — INDEX.md schema (data model + format)

### P1.a — Data model (which fields per inquiry)

**Generic [Comb]:** 5 fields:
- `name` (folder name)
- `status` (ACTIVE / COMPLETE / SUPERSEDED / ARCHIVED)
- `mtime` (last-modified date)
- `has_finding` (Y/-)
- `flow` (classic / extended)

**Focused [AR — what's absent that matters]:** 8 fields:
- name, status, mtime, has_finding, flow
- `created` (first History entry's date)
- `next_disc` (next discipline if ACTIVE; — if not)
- `relationships` (compact summary: e.g., "REFINES X" or "—")

Rationale: surfaces *enough* metadata that the index answers "what's blocking what?" not just "what's recent?".

**Contrarian [Inv]:** Just 2 fields: `name` and a single status string like "active/extended/3 disciplines done" that compresses everything into one column. Rationale: a 8-column table is harder to scan than a 2-column compressed-status.

### P1.b — Format

**Generic [DT — borrow from typical project READMEs]:** Markdown table with a row per inquiry. One table; sorted; filterable via the helper.

**Focused [LS — readability frame]:** **Hybrid sectioned**:
```markdown
## Active (N)
| name | mtime | next | flow |

## Recently Completed (last 14 days, N)
| name | mtime | flow | finding |

## Older Completed (collapsed)
<details><summary>Show N older completed</summary>...</details>

## Superseded (collapsed)
<details>...</details>

## Archived (collapsed)
<details>...</details>
```
Rationale: the user's *primary need* is "what's active?" — pin it to the top; collapse historical noise. Markdown collapsibles work in GitHub and most editors.

**Contrarian [Inv]:** Plain bulleted list, one line per inquiry, no table. Rationale: tables are wide and break in narrow viewers; bullets render everywhere.

### P1.c — Sort default

**Generic:** mtime descending (most recent first).

**Focused:** Status group → mtime descending within group. (ACTIVE first, then COMPLETE, then SUPERSEDED, then ARCHIVED.)

**Contrarian:** Created descending (when was it born, not when was it last touched). Rationale: created-date is more stable; mtime gets noisy on minor edits.

### P1.d — Filter default

**Generic:** Exclude ARCHIVED only. Show ACTIVE + COMPLETE + SUPERSEDED.

**Focused:** Exclude ARCHIVED AND SUPERSEDED. Show only "live" inquiries.

**Contrarian:** Show everything; let the user filter via the helper. The INDEX.md is the source of truth — completeness over noise.

### P1.e — Sample applied to 5 real inquiries (using Generic schema + Focused format)

```markdown
# Inquiries Index

Generated 2026-04-27 — 55 inquiries (16 active, 28 complete, 5 superseded, 0 archived).

## Active (16)

| Name | mtime | Next discipline | Flow |
|------|-------|-----------------|------|
| `inquiry_folder_organization` | 04-27 | Innovation | extended |
| `next_step_taxonomy` | 04-17 | Sensemaking | classic |
| `inquiry_finalization` | 04-19 | (stalled) | classic |
| ... | | | |

## Recently Completed (last 14 days, 12)

| Name | mtime | Flow | Finding |
|------|-------|------|---------|
| `continuous_loop_priorities` | 04-27 | extended | Y |
| `wayfinding_navigation_unification_check` | 04-27 | extended | Y |
| `protocol_path_generalization` | 04-26 | extended | Y |
| `synthesize_vs_finding_split` | 04-26 | classic | Y |
| `telemetry_routing_protocol_classification` | 04-26 | extended | Y |
| ... | | | |

## Older Completed (collapsed)

<details><summary>Show 16 older completed inquiries</summary>

| Name | mtime | Flow |
|------|-------|------|
| `next_level_loop` | 04-15 | classic |
| ... |

</details>

## Superseded (5, collapsed)

<details><summary>Show superseded inquiries</summary>

| Name | mtime | Supersedor |
|------|-------|------------|
| `wayfinding_fundamental_fix` | 04-27 | `wayfinding_navigation_unification_check` |
| ... |

</details>
```

This is the recommended hybrid: Focused format + Generic schema. Active-first with collapsibles for noise.

---

## P3 — CLI helper interface (consume P1's data model)

### P3.a — Command name

**Generic:** `tools/inq` — script in repo's tools/ folder. Discoverable; no shell-config dependency.

**Focused:** Both — `tools/inq` script + a one-liner shell alias (`alias inq='./tools/inq'`) that the user can source if they want short invocation. Installed by `install_for_*.sh`.

**Contrarian:** Just a shell function in `tools/aliases.sh` that the user sources once; no separate script. Rationale: less file proliferation; works in the user's shell with no path qualification.

### P3.b — Output format

**Generic [DT — borrow from `ls -l`]:** Terminal-aligned columns matching INDEX.md's data model:
```
NAME                                MTIME  STATUS      FND  FLOW      NEXT
inquiry_folder_organization         04-27  ACTIVE      -    extended  Innovation
continuous_loop_priorities          04-27  COMPLETE    Y    extended  —
wayfinding_navigation_unification_check  04-27  COMPLETE    Y    extended  —
...
```

**Focused [CM — short-attention frame]:** Default: just `name + status + mtime` in 3 columns. Add `--full` flag to show all fields. Optimized for quick scan.

**Contrarian:** Output Markdown identical to INDEX.md (so terminal output IS regenerated index content piped to stdout). Rationale: one rendering function, two destinations — `tools/inq > INDEX.md` regenerates; `tools/inq` alone prints to terminal.

### P3.c — Flags

**Generic:** Status filters (`--active`, `--complete`, `--superseded`, `--archived`, `--all`); sort (`--sort=mtime|created|name|status`); regen (`--regen` writes INDEX.md instead of printing).

**Focused:** Minimum: `--all` (include ARCHIVED) and `--regen`. No status-specific flags (use grep). Rationale: KISS.

**Contrarian:** Positional argument as a free-form filter expression (e.g., `inq active`, `inq superseded`, `inq mtime>04-25`). More expressive; harder to learn.

### P3.d — Sample invocation + output

```
$ tools/inq
NAME                                MTIME  STATUS      FND  FLOW      NEXT
inquiry_folder_organization         04-27  ACTIVE      -    extended  Innovation
continuous_loop_priorities          04-27  COMPLETE    Y    extended  —
wayfinding_navigation_unification_check  04-27  COMPLETE    Y    extended  —
... (50 more rows; ARCHIVED excluded by default)

$ tools/inq --active
... (16 rows)

$ tools/inq --regen
Regenerated devdocs/inquiries/INDEX.md (55 inquiries; 16 active).

$ tools/inq --all --sort=created
... (everything; sorted by created date)
```

---

## P2 — Regeneration trigger

### Generic [Comb — combine manual + on-demand]

Manual via `tools/inq --regen` PLUS the helper auto-checks freshness on every invocation (compares INDEX.md mtime to most-recent inquiry-folder mtime; if INDEX is older, prints "INDEX.md is stale; run tools/inq --regen" warning).

### Focused [CM — automate everything]

CONCLUDE-time hook: modify `homegrown/protocols/conclude.md` Step 4 (after `_state.md` update) to also run the index regenerator. Every finding written → fresh INDEX. Plus git pre-commit hook for safety. Rationale: no user discipline needed.

**Risk:** modifies CONCLUDE; couples concerns. Sensemaking explicitly noted "single user, finite hours" — the user will resist anything that bloats CONCLUDE.

### Contrarian [Inv]

No persistent INDEX.md at all. Skip P1 entirely. The CLI helper IS the index — it generates the view on every invocation. INDEX.md doesn't exist. Rationale: never-stale by construction (always live); no regen trigger needed.

**Trade-off:** loses the "open the file in editor" affordance. The user must invoke the helper.

### Failure-mode mitigation

- If trigger doesn't fire: helper's freshness check (Generic) flags it; user runs --regen.
- If user forgets to commit a regenerated INDEX.md: pre-commit hook auto-runs --regen and stages the result.
- If CONCLUDE hook is added (Focused): integration test in regression check (Item 1.4 of `continuous_loop_priorities`) verifies the hook fires.

---

## P4 — Hygiene pass for 6 missing-Status folders

Each folder inspected for files + mtime; status assigned.

### Generic [Comb — programmatic rule + manual override]

Rule: 
- If folder has `finding.md` → status reflects current state (ACTIVE / COMPLETE).
- If no finding AND has full SIC outputs (sensemaking + innovation + critique present) AND mtime >7 days old → SUPERSEDED.
- If no finding AND only partial SIC outputs (≤2 discipline files) AND mtime >7 days → SUPERSEDED with note "abandoned scaffold."
- If only `_branch.md` exists → SUPERSEDED with note "scaffold never started."

Apply rule, then manual override per folder if rule produces wrong result.

### Per-folder assignments (using Generic rule, applied):

| Folder | mtime | Files present | Rule application | Assigned Status | Reason |
|---|---|---|---|---|---|
| `adapter_pattern_for_scalable_loop` | 04-16 | _branch, _state, critique, innovation, reflection, sensemaking | full SIC, no finding, 11 days old | SUPERSEDED | Architecture-era inquiry; superseded by later sensemakings about scalable loops |
| `breakthrough_for_consciousness` | 04-15 | _branch, _state, innovation, sensemaking | partial SIC (no critique), 12 days old | SUPERSEDED | Abandoned mid-pipeline; superseded by `autonomous_consciousness_goal` (mtime 04-22, COMPLETE) |
| `discipline_relevance_audit` | 04-19 | only _branch | scaffold never started | SUPERSEDED | Likely superseded by `protocols_relevance_check` |
| `extract_conclude_to_homegrown` | 04-26 | only sensemaking | recent but stalled | SUPERSEDED | The extraction was actually performed in this session via direct work; the formal inquiry was bypassed |
| `skill_folder_restructure_check` | 04-25 | only sensemaking | recent but stalled | SUPERSEDED | The restructure was applied directly; inquiry bypassed |
| `synthesize_protocol_check` | 04-26 | only sensemaking | recent but stalled | SUPERSEDED | Superseded by `synthesize_vs_finding_split` (mtime 04-26, COMPLETE) |

All 6 → SUPERSEDED with per-folder reason; no ACTIVE assignments warranted.

### Focused [CM — minimum-touch approach]

Mark all 6 SUPERSEDED with a generic reason ("abandoned before completion; status added during 2026-04-27 hygiene pass"). Don't investigate per-folder; just close them. Rationale: 5 min total.

### Contrarian [Inv — keep them un-marked]

Add a new Status value: `STALE` (no Status field at all is treated as `STALE` by the index generator). Don't touch the 6 folders; the absence-of-Status itself becomes meaningful. Rationale: avoids speculative SUPERSEDED assignments. **Risk:** introduces a new status enum value just for this case.

### Per-folder edits (touched files)

Generic + per-folder approach: each `_state.md` gets:
- `## Status` field (added if missing) → SUPERSEDED.
- One-line `**Reason:**` note.
- One-line `**Supersedor (where applicable):**` pointing to the supersedor inquiry, OR "No specific supersedor; abandoned scaffold."
- A History entry: `2026-04-27: SUPERSEDED via hygiene pass. [reason].`

---

## P6 — Filename

### Generic

`INDEX.md`. Familiar; conventional; opens by default in many editors when entering a folder.

### Focused

`README.md`. GitHub renders it on the folder page automatically. Even more visible than INDEX.md to anyone browsing the repo on GitHub.

### Contrarian

`_index.md` (lowercase, leading underscore). Lowercase matches the project's `_branch.md`/`_state.md` convention; underscore pins to top of `ls`.

**Decision:** trade-off is between GitHub-visibility (README.md) and project-convention (`_index.md` matches the underscore-prefix pattern). Critique should pick.

---

## Test phase — apply 5 tests to surviving outputs

| Output | Novel | Survives | Fertile | Actionable | Mech-indep |
|---|---|---|---|---|---|
| P5.a Generic (never-auto) | LOW | YES | LOW | HIGH | YES |
| P5.a Focused (age-threshold 30d) | MED | YES (with defined N) | MED | HIGH | YES |
| P5.a Contrarian (no ARCHIVED) | MED | YES (cheaper) | MED | HIGH | YES |
| P1.a Generic (5 fields) | LOW | YES | MED | HIGH | YES |
| P1.a Focused (8 fields) | MED | YES | HIGH | HIGH | YES |
| P1.b Focused (hybrid sectioned) | MED | YES | HIGH | HIGH | YES |
| P1.b Contrarian (bulleted list) | MED | YES (renders everywhere) | LOW | HIGH | YES |
| P1.c Generic (mtime desc) | LOW | YES | LOW | HIGH | YES |
| P1.d Generic (exclude ARCHIVED) | LOW | YES | MED | HIGH | YES |
| P3.a Focused (script + alias) | MED | YES | HIGH | HIGH | YES |
| P3.b Contrarian (Markdown to stdout, same renderer) | HIGH | YES | HIGH | HIGH | YES (Inv) |
| P3.c Generic (full flag set) | LOW | YES | MED | HIGH | YES |
| P2 Generic (manual + freshness check) | MED | YES | HIGH | HIGH | YES |
| P2 Focused (CONCLUDE hook) | MED | DEPENDS (CONCLUDE bloat risk) | MED | HIGH | YES |
| P2 Contrarian (no INDEX.md, helper-only) | HIGH | YES (avoids freshness problem) | HIGH | HIGH | YES (Inv) |
| P4 Generic (rule + manual override, per-folder) | MED | YES | HIGH | HIGH | YES |
| P6 Generic (INDEX.md) | LOW | YES | LOW | HIGH | YES |
| P6 Focused (README.md) | LOW | YES (GitHub render) | MED | HIGH | YES |
| P6 Contrarian (_index.md) | MED | YES (matches convention) | LOW | HIGH | YES |

---

## Assembly Check — cross-piece combinations

### Assembly 1 — "One renderer, two outputs" (the strong assembly)

**Combine:** P3.b Contrarian (Markdown to stdout) + P2 Generic (manual + freshness check) + P3.a Focused (script + alias) + P3.c Generic (full flag set).

**Emergent property:** **The CLI helper has ONE rendering function that produces Markdown.** Default invocation prints to stdout. `--regen` writes the same output to `INDEX.md`. The freshness check warns when INDEX.md is older than recent activity.

This is structurally clean: no duplicate rendering logic; INDEX.md is always reproducible by piping the helper into it; the helper itself is the source of truth for rendering.

```bash
# Default: print to terminal
tools/inq

# Regenerate INDEX.md (literally: redirect)
tools/inq --regen      # = tools/inq > devdocs/inquiries/INDEX.md
                       #   (with optional preamble like "Generated YYYY-MM-DD")

# Filter via flag
tools/inq --active
```

**Why this is emergent:** the individual outputs (helper interface + regen trigger) are simpler when unified; together they collapse two concerns (file generation, terminal display) into one rendering function with two outputs.

**Score:** HIGH NOVELTY, HIGH FERTILITY, HIGH ACTIONABILITY.

### Assembly 2 — "Helper-only, no INDEX.md" (the radical alternative)

**Combine:** P2 Contrarian (no INDEX.md) + P3.b Generic (terminal columns).

**Emergent property:** Zero persistent index. The helper is the only interface. Always live; no freshness problem; no regen trigger; no filename decision.

**Trade-off:** loses ambient editor visibility. To see the index, the user MUST invoke the helper.

**Score:** HIGH NOVELTY, MEDIUM FERTILITY, HIGH ACTIONABILITY. Sensemaking already preferred persistent-document for ambient visibility, so this assembly contradicts SV6 unless the user reverses on that point. Critique should evaluate whether the ambient-visibility assumption holds.

### Assembly 3 — "Maximalist data + sectioned format" (the heavy version)

**Combine:** P1.a Focused (8 fields) + P1.b Focused (hybrid sectioned with collapsibles) + P5.a Focused (auto-archive at 30d) + P4 Generic (per-folder hygiene).

**Emergent property:** A rich, self-organizing index. Active inquiries pinned to top; older content collapsed; auto-archives at 30 days. Maximizes information density; minimizes ongoing manual work after the initial setup.

**Trade-off:** more code in the generator; more failure surface. ~1h to implement vs ~30 min for minimal version.

**Score:** MEDIUM NOVELTY, HIGH FERTILITY, MEDIUM-HIGH ACTIONABILITY.

### Assembly 4 — "Minimal-everything" (the lazy version)

**Combine:** P1.a Generic (5 fields) + P1.b Generic (single table) + P5.a Generic (never-auto) + P3.b Focused (default-3-columns) + P2 Generic (manual + freshness) + P6 Generic (INDEX.md).

**Emergent property:** Smallest possible viable solution. ~30-45 min total implementation. Zero policy automation. User in control of everything.

**Score:** LOW NOVELTY, HIGH ACTIONABILITY, MEDIUM FERTILITY (works but doesn't scale beautifully to N=500).

---

## Convergence Telemetry

- **Generators applied:** Comb, AR, DT, Ex (all 4) ✓
- **Framers applied:** LS, CM, Inv (all 3) ✓
- **Coverage:** Full (7/7).
- **Convergence:** Multiple mechanisms point to **Assembly 1 (one renderer, two outputs)** as the structurally strong design — Inv produced the radical helper-as-source-of-truth idea; Comb produced the unification with regen as `--regen` flag; DT (borrow `ls -l` aesthetics) supports the column format. Three mechanisms converging signals high confidence.
- **Surviving outputs tested:** 19 outputs tested for 5 criteria.
- **Failure modes observed:**
  - Premature evaluation? No.
  - Single-mechanism trap? No.
  - Early frame lock? No (Assembly 2 challenges sensemaking's persistent-document assumption).
  - Innovation without grounding? No (each candidate is concrete).
  - Mechanism exhaustion? No.
  - Survival bias? Mild — Generic candidates skew toward survival because they're conservative; mitigated by including Contrarian alternatives in test phase.
- **Overall: PROCEED to critique.**

---

## Recommendations for Critique

Critique should focus on:

1. **Assembly 1 ("one renderer, two outputs")** — structurally clean; needs prosecution on whether Markdown-to-stdout is genuinely useful as terminal output (Markdown tables in terminal are ugly).
2. **Assembly 2 ("helper-only")** — challenges sensemaking's SV6 (persistent INDEX.md was assumed). Critique should re-evaluate whether persistent file is genuinely needed.
3. **P5.a Generic vs Focused (never-auto vs age-threshold)** — policy choice with downstream effects on retroactive transitions.
4. **P1.b Generic vs Focused (single table vs hybrid sectioned)** — affects readability across N=55 (today) to N=500 (future).
5. **P2 Focused (CONCLUDE hook)** — has a bloat-risk per sensemaking; critique should weigh against benefit.
6. **P6 Focused (README.md) vs Contrarian (_index.md)** — small but consequential for discoverability.

Critique should NOT re-litigate: no folder renames, status-not-location archive, hygiene-pass-yes, INDEX-or-helper architecture (sensemaking already settled these).

The 6 missing-Status folder assignments under P4 Generic are concrete commitments — critique should sanity-check the per-folder reasoning but not re-explore alternatives.
