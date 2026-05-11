# Sensemaking: Navigation Organization Structure

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/_branch.md`

> **Question:** What does `/navigation` create per run + must NOT include + do we need `_nav.md` + organization structure that ensures no bloat?

Exploration converged on a 3-layer architecture (per-run / per-folder / per-meta-session) with `_nav.md` as the missing per-folder layer.

---

## SV1 — Baseline Understanding

The proposal: introduce a per-folder `_nav.md` metadata file that tracks navigation activity (runs, selections, spawned children) within an inquiry, alongside per-run `navigation_observer_<N>.md` artifacts. This fills a gap in the existing project conventions and addresses the user's bloat concern by consolidating per-folder navigation activity into one inspectable index.

Key items remaining for Sensemaking: resolve sequential-vs-timestamp naming; required-vs-optional rule; per-section ownership; `_branches.md` boundary; revisit/non-spawn move handling.

---

## Phase 1 — Cognitive Anchor Extraction

### Constraints (limits, requirements, boundaries)

- **C1: `enes/runtime_environment/folder_based.md` Rule 1** says *"Every folder gets `_branch.md` and `_state.md`. No exceptions."* Other underscore-prefix files (`_branches.md`, proposed `_nav.md`) are NOT universally required.
- **C2: Project rule "Subfolders = decomposition, not organization"** rejects D-4 (`nav/` subfolder) categorically.
- **C3: Project rule "Dead branches never deleted; preserved with falsifiable kill condition"** — analogous rule applies to navigation directions: rejected directions stay in `_nav.md` with kill condition.
- **C4: `homegrown/navigation/SKILL.md` charter:** Navigation enumerates; doesn't choose. So `/navigation` must NOT write selection state.
- **C5: `homegrown/protocols/branch_inquiry.md` exists** to spawn child inquiries. Any `_nav.md` Spawned-Children entry must coordinate with branch_inquiry protocol.
- **C6: `homegrown/navigation/references/navigation.md` audit (CANONICAL/user-validated 2026-05-10):** 16-type taxonomy + 12 route fields are out of scope for this inquiry; ORG layer only.

### Key Insights (non-obvious implications)

- **K1: 3 layers are NOT redundant; each has distinct scope.**
  - Per-run = a snapshot of route-cards at one moment.
  - Per-folder = the local history (which runs happened here, which directions selected, where they went).
  - Per-meta-session = cross-inquiry traversal log (out of scope).
- **K2: `_nav.md` is OPTIONAL.** Only inquiries where Navigation has run get a `_nav.md`. Most short inquiries that conclude with `finding.md` and stop don't need it. This matches the existing pattern (`_branches.md` is also optional — only created when there are children).
- **K3: `_nav.md` ownership is split across 3 writers** — Navigation discipline writes Runs entries; Selector (human at L0/L1, future system at L2+) writes Selections entries; branch_inquiry protocol writes Spawned-Children entries (with a flag indicating navigation-triggered spawn).
- **K4: Per-run filename uses sequential counter, not timestamp.** Matches the project's existing `iteration_N/` pattern. Timestamps live inside the file's metadata + in `_nav.md`'s Runs index. Cleaner cross-references.
- **K5: `_nav.md` and `_branches.md` have overlapping but distinct scopes.** `_branches.md` indexes ALL children regardless of spawn cause. `_nav.md`'s Spawned-Children section indexes ONLY navigation-triggered children. Don't merge — different cohort sets.
- **K6: Navigation's "Selections" go in `_nav.md`, not in a separate Selector-skill output (yet).** At L0/L1 of meta-loop ladder, Selector is human; the human writes selection state directly into `_nav.md`. At L2+, an automated Selector-skill could ALSO write here. Future-compatible.
- **K7: Non-spawn navigation moves (REVISIT, MERGE, CONSOLIDATE) need their own action types in `_nav.md`'s Selections section.** Not every selected direction creates a child inquiry. REVISIT may re-open an existing inquiry; MERGE may produce a unified finding; CONSOLIDATE may produce a project-level summary. The Selections section needs an action-type field (SPAWN-CHILD / REVISIT / MERGE / CONSOLIDATE / TEST / OTHER).
- **K8: User's bloat concern is addressed structurally, not just procedurally.** Past iterations bloated because no per-folder consolidation existed. With `_nav.md`, anyone landing in an inquiry folder reads ONE file to see all nav activity. This is the structural fix.

### Structural Points (core components, relationships)

- **SP1: Three-layer architecture.** per-run + per-folder + per-meta-session. The inquiry scopes only the first two; the third is acknowledged as out-of-scope.
- **SP2: `_nav.md` 5-section structure.** Runs / Selections / Spawned Children / Open Directions / History. Each section has distinct ownership and content type.
- **SP3: Sequential counter for per-run files.** `navigation_observer_<N>.md` where N starts at 1 for first nav-run in this folder.
- **SP4: Optional-per-folder rule.** `_nav.md` exists when ≥1 navigation run has occurred; absent otherwise.
- **SP5: Cross-protocol coordination.** branch_inquiry protocol is updated to take `from_nav_direction: <direction-id>` flag; if present, writes Spawned-Children entry in source inquiry's `_nav.md` AND `_branches.md` entry as before.
- **SP6: Action-type vocabulary in Selections.** SELECTED-AND-SPAWN / SELECTED-AND-REVISIT / SELECTED-AND-MERGE / SELECTED-AND-CONSOLIDATE / SELECTED-AND-TEST / DEFERRED / REJECTED. Plus rationale field.
- **SP7: NOT-include list for `/navigation`** — selection decisions, implementation steps, reflection observations, cross-inquiry summaries, "right answer" verdict, bulk discipline content.

### Foundational Principles (assumptions, rules, axioms)

- **P1: Project's folder-based isomorphism principle** — file system IS thinking structure. `_nav.md` extends this to cover navigation activity.
- **P2: "Information loss = deleting"** — rejected directions stay in `_nav.md` with kill conditions, analogous to dead branches.
- **P3: Optional-when-applicable-only** — don't force every folder to have `_nav.md` if no navigation occurs.
- **P4: Owner-clarity** — each `_nav.md` section names its writer (Navigation discipline / Selector / branch_inquiry protocol / Runner). Mixed-ownership without clarity creates ambiguity.
- **P5: User MUST conditions** (from prior interactions): proposals must respect Step 5 (no broad rewrites from N=1) — but this is an organization proposal, not a discipline-spec rewrite. The threshold here is: does the proposal address the user's stated bloat concern with structural fix, or only patch?

### Meaning-Nodes (central concepts and themes)

- **M1: Three-layer navigation organization.** Per-run snapshot / per-folder history / per-meta-session traversal. Distinct scopes.
- **M2: `_nav.md` as per-folder activity ledger.** Indexes runs, tracks selections, points to spawned children, lists open directions, logs history.
- **M3: Navigation = enumeration; everything else is non-Navigation.** Selection, implementation, reflection, summary, verdict — all OUT.
- **M4: Optional-but-standardized.** `_nav.md` is optional (only when navigation occurs) but has standardized shape (so a future reader can scan in seconds).
- **M5: Bloat-fix via structural consolidation.** One file per folder consolidates what was previously scattered across many inquiries.

### SV2 — Anchor-Informed Understanding

The proposal stabilizes as a **3-layer architecture** with `_nav.md` filling the per-folder gap. The five concrete commitments:

1. Per-run navigation_observer files use sequential counter naming (`_1`, `_2`, …).
2. `_nav.md` is optional (created when Navigation runs at least once in this folder).
3. `_nav.md` has 5 sections with split ownership: Runs (Navigation discipline writes), Selections (Selector writes — human at L0/L1, system at L2+), Spawned Children (branch_inquiry protocol writes when nav-triggered), Open Directions (derived/computed), History (chronological log appended by all writers).
4. Action-type vocabulary in Selections includes spawn / revisit / merge / consolidate / test / defer / reject — to handle non-spawn navigation moves correctly.
5. branch_inquiry protocol takes optional `from_nav_direction:` flag; when present, updates source inquiry's `_nav.md` Spawned-Children + child's `_state.md` Relationships AND parent's `_branches.md` (as before).

What `/navigation` must NOT include: selection decisions, implementation steps, reflection observations, cross-inquiry summaries, "right answer" verdict, bulk discipline content.

---

## Phase 2 — Perspective Checking

### Technical / Logical

- New anchor: **C-T1: File-naming consistency.** `navigation_observer_<N>.md` matches `iteration_N/` pattern. Both use sequential counters within a folder. Pattern-consistent.
- New anchor: **C-T2: Open Directions as derived-not-stored.** Computing "open directions" requires diffing Runs (all enumerated directions) against Selections (all decided directions). This is computable from the other two sections; storing it explicitly creates a sync risk. Resolution: store it explicitly anyway, BUT mark it as "derived; verify against Runs ∩ Selections at read time." Pragmatic.

### Human / User

- New anchor: **C-H1: User explicitly proposed `_nav.md`.** The name and the per-folder framing came from the user. User-language alignment passes by construction.
- New anchor: **C-H2: User wants "scan-in-seconds" inspectability.** The standardized shape with named sections lets the user open `_nav.md` and within 30 seconds know: how many nav runs happened, what was selected, where it went.

### Strategic / Long-term

- New anchor: **C-S1: Forward-compatibility with meta-loop levels.** At L0/L1 (current), human is Selector and writes Selections directly. At L2+ (future), automated Selector writes the same section without spec changes. The proposal is level-agnostic.
- New anchor: **C-S2: `_nav.md` data feeds `_meta_state.md` reconstruction.** Future meta-loop runner (L1+) can walk `_nav.md` files across inquiries to reconstruct cross-inquiry traversal, even without `_meta_state.md` existing yet. So `_nav.md` is also the data source for future cross-inquiry features.

### Risk / Failure

- New anchor: **C-R1: Inconsistent ownership risk.** If Navigation discipline writes Runs but a human (acting as Selector) doesn't update Selections, the file becomes incomplete. Mitigation: spec the protocol clearly; CONCLUDE-time check (or pre-CONCLUDE checklist per prior loop_diagnose's M1) verifies `_nav.md` consistency.
- New anchor: **C-R2: Branch_inquiry protocol overhead.** Adding `from_nav_direction:` flag and `_nav.md` update increases protocol complexity. Mitigation: optional flag; default behavior unchanged when flag absent.
- New anchor: **C-R3: REVISIT / non-spawn moves under-specified.** If a navigation direction is REVISIT (re-open prior inquiry), the action isn't a clean spawn. The proposal addresses this via action-type vocabulary, but operationalizing each non-spawn type requires its own protocol path. Out of scope for this inquiry; flag as research frontier.

### Resource / Feasibility

- New anchor: **C-F1: Implementation cost.** Adding `_nav.md` rule + Navigation-spec edits + branch_inquiry protocol flag = ~3 small spec edits. Low cost.
- New anchor: **C-F2: Migration cost for existing inquiries.** Past inquiries (in `_archive/` or current) don't have `_nav.md`. Don't retroactively create them; the rule applies forward only.

### Definitional / Internal Consistency

- Tested: does `_nav.md` contradict the project's "Subfolders = decomposition, not organization" rule? **No** — `_nav.md` is a metadata FILE, not a subfolder. Rule doesn't apply.
- Tested: does the proposed Spawned-Children section contradict `_branches.md`? **No** — different cohort sets (nav-spawned vs all-spawned). Both files coexist with different scopes.
- Tested: does the optional-per-folder rule contradict folder-based.md Rule 1? **No** — Rule 1 says "every folder gets `_branch.md` and `_state.md`." It doesn't say "ONLY those two metadata files allowed." `_branches.md` is already an established optional metadata file. `_nav.md` follows the same precedent.

### Definitional / Frame-exit Completeness *(applying the recently-proposed Sensemaking refactor — see `devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md`)*

The refactor's gating predicate: this inquiry has **(i) inherited multi-value terms** (`_nav.md`, `navigation_observer.md`, `_meta_state.md`, "Navigation" — all inherited from prior project artifacts) AND **(ii) used across ≥2 distinct values/levels in committed structures** (the 3-layer architecture). Predicate fires.

Frame-exit check: does the project have artifacts/usages of "Navigation" that the inquiry's frame's scope excludes?

- The Navigation **discipline** (`homegrown/navigation/`) — IN SCOPE.
- The Navigation **per-run output** (proposed `navigation_observer_<N>.md`) — IN SCOPE.
- The Navigator **session role** (metaloop ladder L1+ isolated session) — referenced but bounded out of detail.
- The /navigate **slash command** — IN SCOPE (it invokes the discipline).
- `homegrown/navigation/warmup/` — pre-discipline preparation files — boundary check: feed INTO the discipline, don't change the per-run output structure. **OUT OF SCOPE; clean boundary.**
- `homegrown/protocols/multi_resolution_navigation.md` — a protocol BUILT ON Navigation. **OUT OF SCOPE; uses the discipline as a primitive.**
- The **Navigation activity** (cognitive verb — "navigating") project-wide — broader concept; the inquiry covers only its artifact-organization aspect. Bounded scope.

Frame-exit check **passes**: the inquiry's frame correctly bounds to discipline + per-folder artifact organization. Excluded items have clean boundaries (warmup feeds in; multi-resolution-protocol uses out; Navigator-session-role addressed elsewhere).

This is meta-application of the refactor's design — confirming the inquiry's scope is intentionally bounded, not blindly narrow.

### Phase / Calibration-State

- New anchor: **C-P1: Currently at L0 of meta-loop ladder** (per `devdocs/inquiries/2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/finding.md`). Selector is human. The proposal accommodates this and is forward-compatible with L2+ system-Selector. No phase-mismatch.

### SV3 — Multi-Perspective Understanding

The 3-layer architecture is structurally sound and frame-correctly-bounded. Five concrete commitments stabilize. Risks (ownership inconsistency, REVISIT under-specification) are addressable via spec clarity + acknowledged as research frontier respectively. The proposal is L0-immediate-applicable AND L2+-forward-compatible. Frame-exit check passes; the inquiry's bounded scope is intentional.

---

## Phase 3 — Ambiguity Collapse

### Ambiguity #1: Sequential counter vs timestamp for per-run files

**Strongest counter-interpretation:** Timestamps in filenames give the reader temporal info at a glance without opening the file. Sequential counters require opening `_nav.md`'s Runs index to know when each happened.

**Why the counter-interpretation fails (structural grounds):** Project's existing pattern uses sequential counters within a folder (`iteration_N/`) and timestamps for folder-level identity (inquiry folder names like `2026-05-10_11-22__name`). Per-FILE timestamping would break the within-folder pattern. Plus: timestamps live in `_nav.md`'s Runs index AND inside each navigation_observer file's metadata — temporal info IS available, just not in the filename. Filename clutter is a real cost.

**Confidence:** HIGH.

**Resolution:** sequential counter `navigation_observer_<N>.md`, N starts at 1.

**What is now fixed?** Per-run filename pattern.

**What is no longer allowed?** Timestamps in per-run filenames; subfolder grouping under `nav/` (already rejected by D-4 in Exploration).

---

### Ambiguity #2: `_nav.md` required-per-folder vs optional

**Strongest counter-interpretation:** Required-per-folder enforces convention rigor. A future reader knows: every inquiry folder will have a `_nav.md`; if it's empty/skeletal, that means navigation didn't run.

**Why the counter-interpretation fails (structural grounds):** The project's existing pattern already accepts optional metadata files (`_branches.md` exists only when there are children). Empty/skeletal `_nav.md` files for every short inquiry add noise without information. The user's bloat concern argues against unnecessary file proliferation. Plus: file existence IS information ("this folder has navigation activity"); absence IS information ("this folder concluded without navigation").

**Confidence:** HIGH.

**Resolution:** OPTIONAL. `_nav.md` is created when Navigation has run at least once in this folder.

**What is now fixed?** Existence rule.

**What is no longer allowed?** Universally requiring `_nav.md`.

---

### Ambiguity #3: Who writes which `_nav.md` section?

**Strongest counter-interpretation:** Single-owner (the Runner writes everything) is simpler and avoids ownership ambiguity.

**Why the counter-interpretation fails (structural grounds):** Different sections capture different concerns owned by different roles. Forcing the Runner to write Selections (which is a Selector concern) blurs role boundaries — exactly the problem the meta-loop ladder's role-allocation table tries to prevent.

**Confidence:** HIGH.

**Resolution:** Split ownership:
- **Runs section** — Navigation discipline writes when it produces `navigation_observer_<N>.md`.
- **Selections section** — Selector writes (human at L0/L1; automated Selector at L2+).
- **Spawned Children section** — branch_inquiry protocol writes when navigation-triggered (via `from_nav_direction:` flag).
- **Open Directions section** — derived from Runs minus Selections; computed at read-time OR maintained by the most-recent writer.
- **History section** — appended by ALL writers chronologically (each writer adds an entry with timestamp + actor + event).

**What is now fixed?** Per-section ownership.

**What is no longer allowed?** Single-owner pattern that ignores role-boundaries.

---

### Ambiguity #4: Should `_nav.md` and `_branches.md` merge?

**Strongest counter-interpretation:** Both track spawned children. Merging reduces metadata-file count.

**Why the counter-interpretation fails (structural grounds):** Different cohort sets:
- `_branches.md` indexes ALL children of this parent regardless of cause (nav-triggered, manual user-spawn, branch_inquiry standalone, etc.).
- `_nav.md`'s Spawned-Children section indexes ONLY children spawned from navigation activity.
- A child can be spawned non-navigationally (user creates a branch directly from the question without running /navigate). That child is in `_branches.md` but NOT in `_nav.md`.
- A nav-triggered child would be in BOTH (with cross-references).

Merging loses this distinction. Don't merge.

**Confidence:** HIGH.

**Resolution:** Keep separate. `_branches.md` has its existing scope (all children). `_nav.md` Spawned-Children has nav-triggered subset. They cross-reference but don't merge.

---

### Ambiguity #5: How are non-spawn navigation moves (REVISIT, MERGE, CONSOLIDATE, TEST) handled?

**Strongest counter-interpretation:** Each non-spawn move type needs its own protocol; `_nav.md` should just record the type and link to wherever the action's artifacts went.

**Why the counter-interpretation has merit AND fails:**
- MERIT: each move type IS structurally different (REVISIT re-opens prior inquiry; MERGE produces unified finding across multiple branches; CONSOLIDATE produces project-level summary; TEST verifies against reality). They aren't "spawn-like" actions.
- FAILURE: this inquiry doesn't need to operationalize each non-spawn move type. It just needs `_nav.md` Selections to RECORD the action-type so the move is traceable. Operational detail per move type can be added when needed.

**Confidence:** HIGH on the recording requirement; the operational protocols are research-frontier.

**Resolution:** `_nav.md` Selections section uses an action-type vocabulary: `SPAWN-CHILD` / `REVISIT` / `MERGE` / `CONSOLIDATE` / `TEST` / `OTHER`, plus DEFERRED / REJECTED for non-action states. Each entry includes a free-text "result-pointer" field linking to whatever artifact resulted (child inquiry path; updated parent finding; project-level summary; test result; etc.). Operational protocols per non-spawn move type are out of scope.

**What is now fixed?** Action-type vocabulary in `_nav.md` Selections.

**What is no longer allowed?** Treating all selections as spawn-actions.

---

### Load-bearing concept tests (mandatory per Phase 3 protocol)

#### Concept: `_nav.md` (newly-coined name)

- **Test:** user-language alignment + proxy-vs-structural.
- **Counter:** "_nav" is short for "navigation," but maybe a fuller name (`_navigation.md`) would be clearer. Or "navigation_history.md" (without underscore prefix) since underscore-prefix has implied "metadata-about-the-branch-itself."
- **Why the counter has merit AND fails:** MERIT — `_navigation.md` is more explicit. FAILURE — the project already uses `_branch.md` (not `_branch_metadata.md`) and `_state.md` (not `_state_information.md`). The brief underscore-prefix style matches established convention. Plus user explicitly named `_nav.md`.
- **Resolution:** Use `_nav.md` per user proposal + project's brief-naming convention.

#### Concept: `navigation_observer_<N>.md` (file-name pattern)

- **Test:** discoverability.
- **Counter:** if N is just a counter, how does the runner know what N to use next? It needs to scan existing `navigation_observer_*.md` files in the folder.
- **Why the counter has merit:** YES, this is the discoverability question. Resolution: runner scans existing files; max(N) + 1 = next.
- **Resolution:** Discoverability mechanism = directory scan; trivial.

#### Concept: "Selection state" (action-type vocabulary)

- **Test:** proxy-vs-structural.
- **Counter:** the 6 action types (SPAWN-CHILD / REVISIT / MERGE / CONSOLIDATE / TEST / OTHER) plus DEFERRED / REJECTED — is each a real structural distinction or are some collapsible? E.g., is OTHER just "we haven't named this yet"?
- **Why the counter has merit:** YES, "OTHER" is a catch-all that risks under-specification. But it's the SAFE catch-all — better to allow it than force every action into a named type when the action types haven't all been operationalized.
- **Resolution:** Keep all 6 action types + 2 non-action states. OTHER is acceptable as a safety valve; spec text should encourage using a named type when applicable.

#### Specific-vs-pattern recognition cue

The proposal addresses the user's specific bloat concern (Memory was one example; navigation work was another via the 28-folder corpus). Per the cue: address THIS instance with high confidence; the broader pattern (other discipline activities also need per-folder ledgers — Reflect? Innovate?) is research frontier.

Resolution: high confidence on `_nav.md` for navigation specifically. Don't generalize to "every discipline gets a `_*.md`" without separate evidence.

---

### SV4 — Clarified Understanding

The proposal is fully specified:

1. **Per-run artifact:** `navigation_observer_<N>.md` in source-inquiry folder. Sequential counter, N starts at 1. Contents: navigation map (16-type taxonomy + 12 route fields); session-warming summary; timestamp.
2. **Per-folder index:** `_nav.md` in source-inquiry folder. OPTIONAL (created when navigation runs). 5 sections with split ownership (Navigation discipline writes Runs; Selector writes Selections; branch_inquiry writes Spawned Children; History appended by all). Action-type vocabulary in Selections (SPAWN-CHILD / REVISIT / MERGE / CONSOLIDATE / TEST / OTHER + DEFERRED / REJECTED) with rationale and result-pointer fields.
3. **Cross-inquiry state (`_meta_state.md`):** out of scope; future meta-loop runner concern.
4. **What `/navigation` must NOT include:** selection decisions, implementation steps, reflection observations on the just-completed cycle, cross-inquiry summaries, "right answer" verdict, bulk discipline content.
5. **Coordination:** branch_inquiry protocol takes optional `from_nav_direction:` flag; updates `_nav.md` Spawned-Children when present; default behavior unchanged otherwise.

The proposal is **L0-immediate-applicable** AND **L2+-forward-compatible**. Frame-exit check passes (intentional bounded scope). The user's bloat concern is addressed via structural consolidation (one file per folder; standardized shape; scan-in-seconds).

---

## Phase 4 — Degrees-of-Freedom Reduction

### Variables now FIXED

- **F1: 3-layer architecture** (per-run / per-folder / per-meta-session-out-of-scope).
- **F2: Per-run filename** = `navigation_observer_<N>.md`, sequential counter.
- **F3: `_nav.md` is optional** (only when navigation runs).
- **F4: `_nav.md` 5 sections** with split ownership.
- **F5: Action-type vocabulary** = 6 actions + 2 non-action states.
- **F6: branch_inquiry protocol** takes optional `from_nav_direction:` flag.
- **F7: NOT-include list for `/navigation`** = 6 explicit exclusions.
- **F8: `_branches.md` and `_nav.md` coexist** with different scopes.
- **F9: Result-pointer field** in Selections (free-text linking to action-result artifact).

### Variables ELIMINATED

- E1: Required-per-folder rule for `_nav.md`.
- E2: Timestamp-based per-run filenames.
- E3: Subfolder grouping under `nav/`.
- E4: Single-owner writing all sections.
- E5: Merging `_nav.md` and `_branches.md`.
- E6: Forcing all selections into spawn-actions.
- E7: Navigation discipline writing selections.

### Variables that remain OPEN

- **O1: Operational protocols per non-spawn action type** (REVISIT / MERGE / CONSOLIDATE / TEST). Research frontier.
- **O2: Open-Directions section maintenance**: stored or computed-at-read? Both are valid; pick during Innovation.
- **O3: History section format**: structured (timestamp / actor / event) or free-text? Pick during Innovation.
- **O4: Cross-references between `_nav.md` and `_branches.md` for nav-spawned children** — both files reference the same child but with different metadata. How explicit should the cross-link be? Pick during Innovation.

### SV5 — Constrained Understanding

The design space has narrowed to a fully specified 3-layer architecture with `_nav.md` as the per-folder index. 9 variables fixed; 7 eliminated; 4 remain for Innovation to commit (operational protocols, Open-Directions storage, History format, cross-reference style).

---

## Phase 5 — Conceptual Stabilization

### SV6 — Stabilized Model

**Navigation organization is structured as a 3-layer architecture: per-run `navigation_observer_<N>.md` (sequential counter; in source-inquiry folder; navigation map content only), per-folder `_nav.md` (optional; 5 sections — Runs / Selections / Spawned Children / Open Directions / History — with split ownership across Navigation discipline / Selector / branch_inquiry protocol / all writers via History; action-type vocabulary of 6 actions + 2 non-action states with rationale and result-pointer fields), and per-meta-session `_meta_state.md` (out of scope; future meta-loop runner concern). The `_nav.md` file is optional (only when navigation runs in a folder), follows the project's existing underscore-prefix metadata pattern (per `enes/runtime_environment/folder_based.md`), and coexists with `_branches.md` (which has different scope: all children regardless of spawn cause). The `/navigation` discipline must NOT include selection decisions, implementation steps, reflection observations, cross-inquiry summaries, "right answer" verdict, or bulk discipline content; those belong to other roles/artifacts. branch_inquiry protocol gains an optional `from_nav_direction:` flag for cross-coordination. The structural consolidation (one file per folder; standardized shape) addresses the user's stated bloat concern and is L0-immediate-applicable AND L2+-forward-compatible.**

### Difference from SV1

| Dimension | SV1 | SV6 |
|---|---|---|
| Architecture layers | "3 layers, but boundaries unclear" | per-run + per-folder + per-meta-session, with explicit scopes |
| Per-run filename | Open (sequential or timestamp?) | Sequential `_<N>.md` |
| `_nav.md` requirement | Open | Optional (only when navigation runs) |
| `_nav.md` ownership | Open | Split across 4 writer-roles |
| Action types | Implicit (only "spawn") | Explicit 6+2 vocabulary |
| branch_inquiry coordination | Open | `from_nav_direction:` flag |
| NOT-include list | Implicit | Explicit 6 exclusions |
| Frame-exit check | Implicit | Explicit pass with bounded-scope confirmation |

The SV1→SV6 delta is large: from an open architecture proposal to a fully specified 9-fixed-variable design with explicit ownership, vocabulary, and coordination protocol.

---

## Saturation indicators

- **Perspective saturation:** moderate-high. Definitional / Frame-exit Completeness perspective applied (per the user's recently proposed refactor) and confirmed bounded scope. Phase / Calibration-State confirmed L0-applicability + L2+-compatibility. Risk surfaced 3 anchors.
- **Ambiguity resolution ratio:** 5/5 explicit ambiguities resolved (all HIGH confidence); 3 load-bearing concept tests + specific-vs-pattern check.
- **SV delta:** large.
- **Anchor diversity:** 9 anchor types across 8 perspectives (added Frame-exit Completeness as 8th).

---

## Open items handed to next disciplines

- **Decomposition:** partition into per-piece commitments (per-run artifact spec, `_nav.md` 5 sections, action-type vocabulary, NOT-include list, branch_inquiry coordination).
- **Innovation:** draft actual spec text (file templates, section formats); commit O2-O4 (Open-Directions storage; History format; cross-reference style).
- **Critique:** test substantive-vs-cosmetic; test bloat-prevention claim; test ownership clarity; test self-reference; verify frame-exit check passes.
