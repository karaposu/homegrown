# Exploration: inquiry_folder_organization

## User Input

`devdocs/inquiries/inquiry_folder_organization/_branch.md`

How to organize `devdocs/inquiries/` so recency + staleness are visible at a glance; is a datetime-prefix + archive-folder convention best, or is there a better alternative? Today: 2026-04-27. 55 folders; mtimes Apr 14–27; statuses ACTIVE/COMPLETE/SUPERSEDED.

---

## Mode + Entry Point

- **Mode:** hybrid (artifact + possibility). Artifact: the existing 55 folders + their state files + their actual mtime/status distribution. Possibility: the candidate organizational schemes.
- **Entry point:** signal-first. The user proposed two specific candidates (datetime-prefix + archive-folder); probe those plus alternatives.

---

## Cycle 1 — Survey the current state (artifact scan)

### Quantitative

- **55 folders total** in `devdocs/inquiries/`.
- **Mtime span:** Apr 14 – Apr 27 (13 days).
- **Status distribution** (across folders that have a Status field; 49 of 55):
  - ACTIVE: ~16 (all without `finding.md` — these are stalled at SIC outputs)
  - COMPLETE: ~28 (all with `finding.md`)
  - SUPERSEDED: 5 (just marked today; without `finding.md`)
- **Folders without Status field:** 6 (e.g., `adapter_pattern_for_scalable_loop`, `breakthrough_for_consciousness`, `discipline_relevance_audit`, `extract_conclude_to_homegrown`, `skill_folder_restructure_check`, `synthesize_protocol_check`). Mostly old or scaffolds.

### Existing organizational signals (already in the data)

| Signal | Where | Quality |
|---|---|---|
| Folder mtime | filesystem | High-fidelity — automatically tracks recent activity |
| `_state.md` `## Status` field | per inquiry | 49/55 (89%) coverage; 6 missing |
| `_state.md` `## History` dates | per inquiry | per-event timestamps; rich but not at-a-glance |
| `finding.md` existence | per inquiry | binary signal of completion |
| `finding.md` frontmatter (`status: active`, `refines:`, etc.) | per finding | fine-grained but only for completed inquiries |
| Git log | repo-wide | authoritative history; not visible from `ls` |
| Cross-references (`refines:`, `SUPERSEDED BY`, `RELATED:`) | inside files | folder-name-based; renaming breaks them |

**Key observation:** *the data already encodes everything the user wants to see*. The problem is purely **surfacing it from `ls`**, not generating new metadata.

---

## Cycle 2 — Enumerate candidate organizational schemes

I'll group candidates by their core mechanism:

### Group A — Naming-based (rename folders)

- **A1. Datetime prefix YYYYMMDD** — `20260427_inquiry_folder_organization/`. 8-char prefix.
- **A2. Datetime prefix YYMMDD** — `260427_inquiry_folder_organization/`. 6-char prefix.
- **A3. Datetime prefix MMDD** — `0427_inquiry_folder_organization/`. 4-char prefix; ambiguous across years but sufficient for short-range projects.
- **A4. Datetime prefix YYYY-MM-DD** — `2026-04-27_inquiry_folder_organization/`. ISO 8601 dashed; 11 chars; visually scannable but longer.
- **A5. Datetime suffix** — `inquiry_folder_organization_0427/`. Topic-first scan order, date as tail.
- **A6. Sequential numeric prefix** — `042_inquiry_folder_organization/` (the 42nd inquiry). Order-preserving but not date-bearing.
- **A7. Date + status prefix** — `0427_C_inquiry_folder_organization/` (`C` = COMPLETE, `A` = ACTIVE, `S` = SUPERSEDED). Encodes both signals in the name.
- **A8. Status-only prefix (no date)** — `C_inquiry_folder_organization/`. Status visible; recency invisible.
- **A9. Compact base32/base36 epoch encoding** — too cryptic; not human-scannable.
- **A10. Year-week prefix** — `26W17_inquiry_folder_organization/`. Compact (5 chars) and groups by week.

### Group B — Subfolder-based (move folders into containers)

- **B1. Status subfolders** — `active/`, `complete/`, `superseded/`, `archived/`. Folders move when status changes.
- **B2. Year-month subfolders** — `2026-04/`, `2026-05/`. Folders organized by creation month.
- **B3. Active/archive split** — `active/` (current work) + `archive/` (everything COMPLETE or SUPERSEDED). User's proposal, in subfolder form.
- **B4. Hybrid: status subfolder + date prefix inside** — `complete/0427_inquiry_folder_organization/`. Both signals.

### Group C — Index-based (no folder rename; metadata file)

- **C1. Manually-maintained `INDEX.md`** at top of `devdocs/inquiries/` listing folders sorted by date with status.
- **C2. Auto-generated `INDEX.md`** from a script that reads each `_state.md`'s Status + History.
- **C3. Auto-generated `RECENT.md`** showing only last-N-modified inquiries.
- **C4. Multiple auto-generated views**: `INDEX_BY_DATE.md`, `INDEX_BY_STATUS.md`, `INDEX_BY_TOPIC.md`.

### Group D — Tooling-based (no on-disk reorganization)

- **D1. Pure `ls -t`** — already works; mtime gives recency; Status field gives staleness via `cat */_state.md | grep Status`. No convention change.
- **D2. A small CLI helper** (`./inquiries-status`) that prints the compact table I generated in Cycle 1 (mtime / status / has-finding / name). On-demand visibility without renaming.
- **D3. Git log as source of truth** — `git log --oneline --name-only` shows history. Already authoritative.

### Group E — Hybrid

- **E1. CLI helper + status frontmatter** (D2 + ensure all `_state.md` have Status) — minimal disk reorganization.
- **E2. Datetime prefix + archive subfolder + INDEX.md** (A2 + B3 + C2) — maximalist.
- **E3. Status subfolder + index** (B1 + C2).

**Total: ~22 distinct candidates across 5 groups.**

---

## Cycle 3 — Probe each candidate against user needs

### User's needs (from `_branch.md`)

1. Recency visible at a glance.
2. Staleness/relevance visible.
3. Smallest possible naming overhead.
4. Concrete archival criterion.
5. Migration plan for 55 existing inquiries.
6. Best alternative if datetime-prefix isn't.

### Cross-cutting trade-offs (per group)

#### Group A (rename) — common trade-offs

- ✓ Recency visible: any date prefix works.
- ✓ `ls` natural sort orders by date.
- ✗ Renames break cross-references — many findings already reference folders by name (e.g., `devdocs/inquiries/wayfinding_navigation_unification_check/finding.md` is referenced from at least 5 places). Renaming requires global find-replace.
- ✗ 55 folders to rename = significant migration cost.
- ✗ Tab completion gets noisier (date prefix pads every name).
- ✗ Folder name changes mid-inquiry if status changes (A7) — multiple renames per inquiry.

#### Group B (subfolder) — common trade-offs

- ✓ Status visibility (B1, B3, B4): immediate from folder location.
- ✓ Recency (B2, B4): visible from year-month grouping.
- ✗ Cross-references break on every status change (B1, B3) — `devdocs/inquiries/foo/finding.md` becomes `devdocs/inquiries/complete/foo/finding.md`. Worse than A: status changes are routine.
- ✗ `ls devdocs/inquiries/` shows containers, not inquiries — extra step to drill in.
- ✗ Migration cost: similar to Group A but adds nesting.

#### Group C (index) — common trade-offs

- ✓ No folder renames; cross-references stable.
- ✓ Single file shows everything; sortable.
- ✗ Manual (C1) gets stale fast; will be neglected.
- ✓ Auto-generated (C2-C4) stays fresh IF the generator is run; needs a hook.
- ✓ Migration cost: zero (just generate the index).
- ✗ Recency invisible from `ls` directly; user must `cat INDEX.md`.

#### Group D (tooling) — common trade-offs

- ✓ Zero disk reorganization.
- ✓ Cross-references stable.
- ✓ Recency already visible: `ls -lt` or the helper.
- ✓ Status already in the data; helper just surfaces it.
- ✗ Requires the user to remember to run the helper.
- ✗ Doesn't survive being looked at from a non-CLI environment (e.g., a file-tree GUI).

### Per-candidate probe (high-leverage candidates only)

#### A2 (YYMMDD prefix) — user's preferred direction

- ✓ Compact (6 chars).
- ✓ `ls` natural sort.
- ✗ 55 renames + global cross-reference rewrite. Estimated ~1.5h of mechanical work + risk of missing a reference.
- ✗ Tab completion: `2604` matches everything from April 2026 — not very narrowing.
- ✗ Encoded date is created-date OR last-modified-date OR completed-date — must pick. None is universally right.
  - Created → quickly outdated (a 13-day-old still-active inquiry looks ancient).
  - Last-modified → matches `ls -t`; redundant with mtime.
  - Completed → only meaningful for COMPLETE inquiries.

#### B3 (active/archive split) — user's other proposal

- ✓ Two-tier hierarchy maps onto active-vs-done dichotomy that user already maintains.
- ✓ "Archive" semantics: COMPLETE or SUPERSEDED inquiries move there.
- ✗ Cross-reference breakage: every reference to `devdocs/inquiries/X/finding.md` becomes `devdocs/inquiries/archive/X/finding.md` once X completes. Worse: references in OTHER findings to X don't auto-update.
- ✗ `ls archive/` is huge over time; staleness within archive is invisible.
- ✓ Easier to ignore archived material when scanning current work.

#### D2 (CLI helper) — minimal alternative

- ✓ Zero disk reorganization. Cross-references untouched.
- ✓ Produces exactly the table I already generated in Cycle 1: mtime / status / has-finding / name. That table is the user's mental model.
- ✓ Migration cost: write one ~30-line bash script. ~15 min.
- ✓ Reuses ALL existing signals (mtime, Status field, finding.md presence).
- ✓ Can be run from anywhere; outputs a sortable view.
- ✗ Requires invocation; not visible by raw `ls`.
- ✓ Can be wired to `cd` (auto-print on entering the folder via shell hook) if the user wants ambient visibility.

#### C2 (auto-generated INDEX.md) — middle-ground

- ✓ No folder renames; cross-references stable.
- ✓ Single file shows the whole landscape at a glance (open in any editor).
- ✓ Can include richer info: status + last-modified + finding-status + topic + relationships.
- ✓ Migration cost: write the generator script + run once. ~30 min.
- ✗ Stays current only if regenerated regularly; needs a trigger (manual, git pre-commit, or after-each-inquiry-completion).
- ✓ Survives non-CLI viewing (Markdown editor, GitHub).

#### E1 (CLI helper + complete the Status field) — pragmatic hybrid

- D2 + a small one-time pass to add Status to the 6 folders missing it.
- Net cost: ~30 min total.
- Both surfaces (ad-hoc CLI + structured Status field) are clean.

---

## Cycle 4 — Probe datetime-prefix specifics deeply

The user explicitly asked about compactness; let me probe the datetime-prefix family:

### Compactness comparison

| Format | Length | Example | Sort-correct in 26-30 range? | Year disambiguation? |
|---|---|---|---|---|
| YYYYMMDD | 8 | 20260427 | ✓ | ✓ |
| YYMMDD | 6 | 260427 | ✓ | works for 2000-2099 |
| MMDD | 4 | 0427 | ✗ across years | ✗ |
| YYWW (year-week) | 4 | 2617 | ✓ at week granularity | ✓ |
| YY-MM-DD | 8 | 26-04-27 | ✓ | ✓ |
| MMDD-letter | 5 | 0427a | ✓ within year | ✗ |

**Compactness winners:** MMDD (4 chars, but year-ambiguous) and YYWW (4 chars, week granularity). For a 13-day-old project, MMDD is unambiguous in practice but breaks Jan 1 next year.

### Date-encoded-what?

- **Created** date: stable; doesn't reflect activity. An inquiry created Apr 14 still active today reads "old" by name.
- **Last-modified** date: matches `ls -t`. But then the prefix is redundant with mtime.
- **Completed** date: only valid for COMPLETE; what about ACTIVE/SUPERSEDED?

**Conclusion:** datetime prefix is *most useful as a creation-date stamp* — it tells you when the inquiry was *born*, which is information mtime alone doesn't provide (mtime only tells you last touch). Creation-date prefix gives "born Apr 14, last touched Apr 27" — combined with mtime you see lifecycle. As a single signal, it's weaker.

### Cross-reference stability

The project has accumulated cross-references. Examples found in this session alone:

- `wayfinding_navigation_unification_check`'s finding references 5 inquiries by folder name.
- `continuous_loop_priorities`'s finding references 3+ prior findings by path.
- Multiple `_state.md`'s have Relationships sections naming other folders.

Renaming 55 folders would require updating cross-references across ~30+ findings + state files. **Estimate: ~1-2h with grep+sed; significant risk of missing a reference and breaking traceability.**

This is the strongest argument against Group A (rename-based) approaches.

---

## Cycle 5 — Probe archive-folder specifics

### Archival criteria

- **By status:** COMPLETE + SUPERSEDED → archive; ACTIVE stays. Clean rule. But: `enes_harmony_audit` is COMPLETE since Apr 25; should it be archived now or after some grace period?
- **By age:** older than N days → archive. Independent of status. But: doesn't distinguish "still-relevant complete" from "stale complete."
- **Both:** COMPLETE + older than N days → archive. Conjunctive.
- **Manual:** user decides. Flexible but accumulates manual debt.

### Archive == physically moved vs symlinked

- **Physical move:** breaks all cross-references unless every reference is updated.
- **Symlink in archive/, file remains in place:** doesn't break references but adds clutter (each archived inquiry exists in two locations).
- **Tag in `_state.md` (Status: ARCHIVED) without moving:** references stable; `ls` order unchanged; archival is a status, not a location.

**Strongest version of archive: a STATUS, not a LOCATION.** Add `ARCHIVED` to the Status enum (alongside ACTIVE/COMPLETE/SUPERSEDED). The CLI helper / index then filters archived from default view but keeps them readable.

### Recency visibility within archive

If physical move: `ls archive/` is alphabetical chaos; no way to tell which archive entry is recent without entering each folder. **Defeats the purpose** unless combined with Group A (date prefix inside archive) or Group C (index per archive).

---

## Cycle 6 — Survey existing infrastructure for reuse

The strongest argument for Group D/C over Group A/B: **all the data is already there**. The mtime gives recency. The Status field gives staleness. The finding.md presence gives completion. The History gives detailed timeline. Renaming or moving folders to surface this data is **duplicating signals**.

The user's proposal (datetime prefix + archive folder) implicitly wants to make the filesystem itself the visible interface. The alternative is to make a tool the visible interface — leaving the filesystem semantically clean (folder name = topic identity, stable across status changes).

The trade-off pivots on: **does the user view the inquiries via `ls` directly, or via a tool/editor?**

- Via `ls`: Group A (date prefix) helps the most — you see dates without invoking anything.
- Via tool: Group D (CLI helper) is sufficient — `ls` stays clean and the tool surfaces the metadata.
- Via editor (e.g., VS Code file tree): both Group A and the helper are usable; Group A's date prefix shows in the tree.

---

## Cycle 7 — Jump scan: alternative angles

### Alternative A: maybe the issue isn't recency at all

The user said "recency" but probed concretely it's actually about **what to look at next** — which is closer to "what's recent AND active" than just "what's recent." If the goal is "show me what to work on," the signal is `Status==ACTIVE` (or `Status==COMPLETE && unreferenced` for cleanup), not raw mtime.

### Alternative B: maybe the issue isn't visibility at all

What if the actual underlying problem is **too many inquiries**? 55 inquiries in 13 days is dense. If many of those should be marked SUPERSEDED or merged, the visibility problem partly solves itself (fewer items). The today's session marked 5 SUPERSEDED already — doing the same audit across the rest might reduce 55 → 30, at which point `ls` is just legible.

### Alternative C: maybe a hybrid wins by being a small tool + minor cleanup

D2 (CLI helper) + run the Status-completion pass on the 6 missing folders + run one audit to mark stale SUPERSEDED → produces a clean dataset where `ls -t` + tool gives perfect visibility.

### Alternative D: what if mtime is enough already?

`ls -lt devdocs/inquiries/` orders by mtime. The user already sees recency. The thing they CAN'T see is Status. So the minimal addition is: **show Status next to each name, on demand**. That's a one-liner shell function.

### Convergence assessment

- Frontier stable: candidates enumerated; trade-offs probed; the dominant trade-off identified (rename-cost vs. visibility).
- Discovery rate declining: cycles 5-7 produced refinements rather than new candidates.
- Bounded gaps: jump-scan alternatives probed; none surfaced a new fundamental candidate.

**Convergence reached.**

---

## Final Deliverable — Structural Map

### 1. Territory overview

Three regions:

- **The data is already encoded** (mtime, Status, finding.md, History). The problem is surface, not substance.
- **Group A (renames)** maximizes filesystem visibility but pays heavy migration + cross-reference cost.
- **Group D (tooling)** zero disk cost but requires invocation discipline.
- **Group C (auto-INDEX)** middle ground: stable filesystem + ambient document.

### 2. Inventory

- 55 inquiries; ~16 ACTIVE / ~28 COMPLETE / 5 SUPERSEDED / 6 missing Status.
- Cross-references existing in ~30+ files; folder names load-bearing.
- Mtime span: 13 days; project density is high.

### 3. Candidate inventory (~22 candidates across 5 groups)

| Group | Best candidate | Cost | Visibility quality |
|---|---|---|---|
| A — rename | A2 (YYMMDD) or A4 (YYYY-MM-DD) | High (1-2h migration + cross-ref rewrite) | High at `ls` |
| B — subfolder | B3 (active/archive) | High (renames) | High at `ls` but multi-step drill-in |
| C — index | C2 (auto-generated INDEX.md) | Low (~30 min) | High in editor; needs trigger |
| D — tooling | D2 (CLI helper) | Very low (~15 min) | High on demand; nothing in `ls` |
| E — hybrid | E1 (D2 + complete Status) | Low (~30 min) | High on demand + clean data |

### 4. Confidence map

| Region | Confidence |
|---|---|
| The data is already there | **Confirmed** (Cycle 1, 6) |
| Cross-references make rename costly | **Confirmed** (this session alone shows the dependency density) |
| Status field nearly complete (49/55) | **Confirmed** |
| Mtime is sufficient for raw recency | **Confirmed** |
| The user wants visibility from `ls` specifically vs. on-demand | **Inferred** (the user mentioned "datetime prefix" suggesting `ls`-visible; but didn't rule out tooling) — **frontier question for sensemaking** |

### 5. Frontier questions for sensemaking

1. **Does the user want `ls`-visible recency, or on-demand visibility (tool/index)?** This is the dominant fork.
2. **What's the archival semantics — a status or a location?** Strongest argument is "status, not location" to preserve cross-references.
3. **What date does a date-prefix encode — created, modified, or completed?** Each has a different meaning and a different cost.
4. **Should the 6 missing-Status folders be cleaned up regardless of which scheme wins?** Probably yes (it's data hygiene, independent of organization scheme).
5. **Is the underlying problem visibility or volume?** If 55 → 30 by SUPERSEDED audit, does the visibility problem solve itself?
6. **Migration tolerance:** is the user willing to spend ~1-2h on a global rename + cross-reference rewrite, or is the cost prohibitive?

### 6. Constraints any answer must honor

- Cross-references must remain valid (or be migrated atomically).
- The 6 folders missing Status should get Status added.
- The convention should be applicable retroactively in some way (otherwise old vs new inquiries diverge in convention — worse than no convention).
- Any tooling solution must work without permanent setup (e.g., a shell function that lives in the repo, not user-specific config).

### 7. Recommendations for sensemaking

The strongest signal from exploration: **the user phrased the question in terms of file-system conventions but the underlying need is `at-a-glance visibility`, which can be served by tooling without renames.** Sensemaking should:

1. Resolve the frontier question (filesystem-visible vs. tool-visible).
2. Compare the cost of Group A (rename + cross-ref rewrite) honestly against Group D/E (tooling + status hygiene).
3. Settle the archive semantics question (status, not location).
4. Address the data-hygiene sub-question (the 6 missing Status, the 5 just-marked SUPERSEDED).
5. Produce a concrete convention with migration plan.

---

## Cross-Run Tracking (Telemetry)

* **Mode:** hybrid (artifact + possibility)
* **Cycles run:** 7
* **Convergence criteria:** all three met (frontier stable, declining discovery rate, bounded gaps).
* **Failure modes observed:** None.
  - Premature depth? No — broad enumeration in Cycles 2-3 before deep probes in Cycles 4-5.
  - Surface-only scanning? No — concrete data sampled (Cycle 1 + Status-field survey).
  - False confidence? Mitigated — alternative angles probed in Cycle 7.
  - Premature termination? No — convergence criteria explicitly checked.
  - Re-exploration? No.
  - Completeness bias (possibility mode)? Tested — Group D and Group C both probed against Group A; Alternatives B (volume problem), C (hybrid), D (mtime-already-enough) deliberately considered as reframes.
* **Coverage:** Existing data audit + ~22 candidates + 5 jump-scan reframes.
* **Discovery rate trend:** high in Cycles 1-3 (data + candidates), declining in Cycles 4-7 (probes + reframes).
* **Overall: PROCEED to sensemaking.**
