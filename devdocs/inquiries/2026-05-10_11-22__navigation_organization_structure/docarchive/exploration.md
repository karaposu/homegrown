# Exploration: Navigation Organization Structure

## 1. Mode and Entry Point

- **Mode:** Mixed — artifact (existing project conventions for `_branch.md`, `_state.md`, `finding.md`, `docarchive/`, plus the proposed `navigation_observer.md` and `_meta_state.md`) and possibility (candidate organization-structure designs).
- **Entry point:** Signal-first. The user named candidates ("`_nav.md`?") and a specific concern (organization to prevent bloat). Probe these.

---

## 2. Territory Overview

Six regions:

- **R-A: Existing folder-based principle.** `enes/runtime_environment/folder_based.md` defines the project's stance: *"the file system is isomorphic to the thinking structure."* Underscore-prefix = metadata; non-prefix = discipline content; subfolders = decomposition, not organization.
- **R-B: Existing per-inquiry artifacts.** `_branch.md` (question + goal), `_state.md` (pipeline state + history + handoff), `finding.md` (verdict, post-CONCLUDE), `docarchive/` (archived discipline outputs), `_branches.md` (parent's index of children).
- **R-C: Proposed per-run navigation artifact.** `navigation_observer.md` mentioned in `devdocs/inquiries/2026-05-10_01-30__metaloop_navigator_session_relationship/finding.md` — Navigator session writes this with the navigation map.
- **R-D: Proposed cross-inquiry traversal state.** `_meta_state.md` mentioned in `enes/loop_desing_ideas/meta_loop.md` — the meta-loop runner's memory across many inquiries.
- **R-E: The gap question.** Is there a per-folder navigation history layer between R-C (per-run) and R-D (cross-inquiry)?
- **R-F: User's bloat concern.** Past navigation work scattered across ~28 inquiries; what structure consolidates per-folder activity?

---

## 3. Inventory (per region)

### R-A: Existing folder-based principle

Per `enes/runtime_environment/folder_based.md`:
- Underscore-prefix files (`_branch.md`, `_state.md`, `_branches.md`) = metadata about the branch.
- Non-prefix files (`sensemaking.md`, `innovation.md`, `critique.md`, `finding.md`) = discipline content.
- Subfolders = decomposition (sub-questions). NOT organizational containers.
- Dead branches preserved with falsifiable kill conditions (information-preserving).
- Convention rule #1: *"Every folder gets `_branch.md` and `_state.md`. No exceptions."*

**Implication for `_nav.md`:** if added, it would be a new underscore-prefix metadata file. Pattern-consistent.

### R-B: Existing per-inquiry artifacts (concrete contents)

| File | Owner | Contents | When written |
|---|---|---|---|
| `_branch.md` | Decomposition / runner at inquiry creation | Question, Goal, Scope check, Relationships | Once at inquiry creation; rarely modified |
| `_state.md` | Runner / each discipline | Flow-type, Pipeline progress, Iteration count, Status, History (chronological events), Relationships | Updated at every discipline checkpoint |
| `finding.md` | CONCLUDE protocol | Compiled verdict from disciplines | Once at iteration-complete-yes |
| `docarchive/` | CONCLUDE protocol | Archived discipline outputs (exploration/sensemaking/decomposition/innovation/critique.md) | Once at CONCLUDE |
| `_branches.md` | branch_inquiry protocol | Index of child branches per parent | Created on first child; updated per child |

**Coverage:** these cover (a) inquiry identity, (b) pipeline state, (c) verdict, (d) archive, (e) parent→child index. **Gap:** no place tracks navigation activity in this folder over time.

### R-C: Proposed per-run navigation artifact

Per `devdocs/inquiries/2026-05-10_01-30__metaloop_navigator_session_relationship/finding.md` (read set referenced):
- Navigator session reads completed worker artifacts (`_branch.md`, `_state.md`, `finding.md`, archived discipline outputs).
- Navigator writes `navigation_observer.md` containing the navigation map (typed route-cards with the 16-type taxonomy).
- The 2026-05-10 finding flagged "Where `navigation_observer.md` should live" as P4 OPEN DESIGN QUESTION (deferred roadmap).

**Implication:** the per-run artifact's existence is already established; the placement is open.

### R-D: Proposed cross-inquiry traversal state

`_meta_state.md` per `enes/loop_desing_ideas/meta_loop.md`:
- Owner: meta-loop runner.
- Scope: ENTIRE traversal across many inquiries.
- Contents: visited-path list (or graph) + selections + outcomes + cumulative state.
- Currently doesn't exist (meta-loop runner not yet built; user is at L0 of the meta-loop ladder).

**Boundary-vs-`_nav.md` insight:** `_meta_state.md` is per-meta-loop-SESSION (cross-inquiry). `_nav.md` (proposed) would be per-INQUIRY (within one folder). Different scopes, not redundant.

### R-E: Gap question — per-folder navigation history layer

Possible designs:

| Design | Description |
|---|---|
| **D-1: No per-folder layer.** | Per-run `navigation_observer.md` files exist; per-inquiry navigation activity is reconstructed by listing them. |
| **D-2: Section in `_state.md`.** | Add a `## Navigation` section to `_state.md` listing nav-runs + selection state. |
| **D-3: New `_nav.md` file.** | Separate metadata file dedicated to navigation activity per folder. |
| **D-4: Subfolder `nav/`.** | Group all navigation artifacts under a subfolder. |

D-1 loses selection state. D-2 overloads `_state.md`. D-3 fits the existing underscore-prefix pattern. D-4 violates the project's "subfolders = decomposition, not organization" rule.

**D-3 (`_nav.md`) is structurally aligned** with the project's existing convention.

### R-F: Bloat concern

The user's prior navigation iterations scattered across ~28 inquiries. Bloat-prevention requires:
- Per-folder consolidation: one place to scan all nav activity in this inquiry.
- Selection state visible: which directions explored / deferred / rejected, with rationale.
- Spawned-child pointers: where did exploration go?
- Timestamps: WHEN did each event happen.
- Standardized shape: future reader scans in seconds.

`_nav.md` per-folder history file with these fields directly addresses the bloat concern.

---

## 4. Signal Log

| ID | Signal | Source | Action |
|---|---|---|---|
| S1 | Underscore-prefix = metadata pattern; `_nav.md` fits | R-A | **Probed** — pattern-consistency confirmed |
| S2 | Existing per-inquiry artifacts have a gap (no nav-history file) | R-B | **Probed** — gap is real |
| S3 | `navigation_observer.md` placement is OPEN per prior finding | R-C | **Probed** — answer it: lives in source-inquiry folder |
| S4 | `_meta_state.md` is cross-inquiry; `_nav.md` is per-inquiry; different scopes | R-D | **Probed** — boundary clean |
| S5 | D-3 (separate `_nav.md`) vs D-2 (section in `_state.md`) | R-E | **Probed** — D-3 wins (overloading `_state.md` is wrong) |
| S6 | Multiple navigation runs per inquiry possible (after iter 1, after iter 2, post-finding) | R-C | **Probed** — supports multiple `navigation_observer_*.md` files indexed by `_nav.md` |
| S7 | Naming: timestamp vs counter for multiple observers | R-C | **Probed** — counter (sequential) fits project's `iteration_N/` pattern |
| S8 | Selection commitments vs Selector role boundary | R-C | **Probed** — `/navigation` enumerates only; selection lives in `_nav.md` (project-tracked) or in a future Selector-skill output |
| S9 | What `/navigation` should NOT include | User question | **Probed** — selection decisions, implementation steps, reflection observations, cross-inquiry summaries, "right answer" verdict |
| S10 | Per-`_nav.md` field design | R-F | **Probed** — runs index, selection state, spawned-children pointers, open-directions list |
| S11 | "Dead navigation directions never deleted" — analog of project's "dead branches preserved" rule | R-A principle | **Probed** — directions marked REJECTED stay in `_nav.md` with kill condition |

---

## 5. Confidence Map

| Region | Status | Notes |
|---|---|---|
| R-A folder-based principle | **Confirmed** | Direct read of `enes/runtime_environment/folder_based.md` |
| R-B existing artifacts | **Confirmed** | Direct evidence from prior inquiries |
| R-C per-run artifact | **Confirmed** | Named in 2026-05-10 finding; placement open |
| R-D cross-inquiry state | **Scanned** | Conceptual; not yet built |
| R-E per-folder gap | **Confirmed** | Existing artifacts don't cover navigation history |
| R-F bloat concern | **Confirmed** | User explicit + 28-folder corpus evidence |
| Whether `_nav.md` should be required-per-folder or only-when-nav-occurs | **Scanned** | Sensemaking will resolve |
| Whether per-run files should be sequential (`_1`, `_2`) or timestamped | **Scanned** | Sensemaking will resolve |
| Whether selection-tracking belongs in `_nav.md` or a separate Selector-skill output | **Scanned** | Sensemaking will resolve |
| Whether `_nav.md` should index downstream-spawned-inquiries or those should index back | **Scanned** | Sensemaking will resolve |

No region adjacent to "Confirmed" is "Unknown" — gaps are at design-decision level, addressable by Sensemaking.

---

## 6. Frontier State

**Stable.** Three exploration cycles converged:
- Cycle 1: surveyed regions; identified gap R-E.
- Cycle 2: probed candidates D-1 to D-4; D-3 (`_nav.md`) wins on pattern consistency.
- Cycle 3: detailed `_nav.md` field design + boundary vs `_meta_state.md`.

Discovery rate: declining. Cycle 3 produced refinements within candidates, no new candidates.

Bounded gaps: open design decisions (required-per-folder? sequential vs timestamp? selection-in-nav-md?) are next-discipline work.

Convergence: **achieved**.

---

## 7. Gaps and Recommendations

### Concrete proposal candidates (to be refined by next disciplines)

**Per-run artifact (`navigation_observer.md` placement):**
- Location: lives in the SOURCE inquiry folder (the inquiry whose finding the Navigator read).
- Naming: `navigation_observer_<N>.md` where N = sequential counter. (Multiple navs per inquiry over time → multiple files.)
- Contents: the navigation map only — typed route-cards per the 16-type taxonomy + 12 route fields, with timestamps + Navigator-session warming-context summary.

**Per-folder index (`_nav.md`):**
- Location: in every inquiry folder where Navigation has run at least once. Optional (NOT required-per-folder for inquiries with no nav activity).
- Fields: `## Navigation Runs` (index of `navigation_observer_*.md` with timestamps), `## Selections` (per-direction selection state: SELECTED / DEFERRED / REJECTED + rationale + kill-condition-if-rejected), `## Spawned Children` (per-selected-direction: child-inquiry-path + spawn-timestamp), `## Open Directions` (still-live), `## History` (chronological event log).
- Owner: Navigation discipline writes the run-index entry; Selector (or human) writes the selection entry; Runner / branch_inquiry protocol writes the spawned-children entry.

**Cross-inquiry state (`_meta_state.md`):**
- Out of scope here (meta-loop ladder L1+ concern). Boundary clear: `_meta_state.md` aggregates across many `_nav.md` instances.

### What `/navigation` discipline must NOT include

Per `homegrown/navigation/SKILL.md` charter (enumeration-only):
- Selection decisions (Selector's role).
- Implementation steps / Materialization concerns.
- Reflection observations on the cycle just completed (Reflect's role).
- Cross-inquiry summaries (out of scope; `_meta_state.md`).
- A verdict on "the right direction" (the spec is clear: enumerate, don't choose).
- Bulk content from inquiry's discipline outputs (those are in `docarchive/`).

### Recommendations to next disciplines

- **Sensemaking should:** resolve open design decisions (sequential vs timestamp; required-per-folder vs optional; who-writes-which-section in `_nav.md`); test load-bearing concepts (`_nav.md`, `navigation_observer_<N>.md`, "Selection state").
- **Decomposition should:** partition the proposal into per-piece commitments (per-run artifact spec; `_nav.md` field-by-field; what /navigation NOT-include; ownership per field).
- **Innovation should:** generate concrete spec text (the actual fields and example content) and apply mechanisms (Domain Transfer: how do other systems organize per-folder histories? Inversion: would NOT having `_nav.md` work? — testing the gap).
- **Critique should:** test substantive-vs-cosmetic (is `_nav.md` real or just renaming?); test bloat-prevention (does the proposal actually consolidate?); test boundaries (per-run / per-folder / cross-inquiry — are the three layers necessary?).

### What was NOT explored (deliberate scope cuts)

- Whether `_branches.md` (existing parent's child-index) should merge with `_nav.md` (their concerns overlap: tracking spawned children). Adjacent question; defer.
- Whether `_meta_state.md` design should be revised in light of `_nav.md` proposal. Out of scope; meta-loop ladder concern.
- The 16-type taxonomy and 12 route fields — already audited (CANONICAL; user-validated 2026-05-10).
- Whether Navigation should run on EVERY finding or be opt-in. Out of scope; runner concern.
