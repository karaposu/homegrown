---
status: active
related: devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md
---
# Finding: Navigation Organization Structure

## Question

> What artifact(s) should the `/navigation` discipline create per run, what should those artifacts contain (and not contain), and is there a need for a per-folder `_nav.md` (analogous to `_branch.md`) that tracks across time which navigation directions were calculated, which of those were explored, where (which downstream inquiry folder), and when — so that navigation activity in a folder is organized and inspectable rather than scattered?
>
> In short: **how do we ensure Navigation is organized as a project artifact, with what structure?**

## Goal

A concrete proposal naming what `/navigation` writes per run, what it must NOT include, whether a per-folder `_nav.md` is needed (and if so, where, what fields, who writes), how this fits with existing `_branch.md` / `_state.md` / `finding.md` / `docarchive/` / `_branches.md` conventions and the proposed `_meta_state.md`, and the answer to "Navigation Organization": what structure ensures someone landing in a folder can scan all navigation activity in seconds — without re-reading scattered finding files.

## Finding Summary

- **Three layers, distinct scopes.**
  - **Per-run:** `navigation_observer_<N>.md` (sequential N starting at 1) lives in the source-inquiry folder. Contents = the navigation map + warming summary + timestamp. Discipline output, canonical (don't post-edit).
  - **Per-folder:** `_nav.md` consolidates navigation activity for the inquiry. **OPTIONAL — only created when at least one navigation run occurs.** 5 sections (Runs / Selections / Spawned Children / Open Directions / History) with split ownership across writers.
  - **Per-meta-session:** `_meta_state.md` (out of scope here; future meta-loop runner concern). Boundary clean: `_meta_state.md` aggregates across many `_nav.md` instances.

- **`_nav.md` IS necessary.** Inversion testing rejected three alternatives (filename-encodes-state, per-run self-edit, no-tracking). Domain Transfer validates the hub-and-spoke pattern (ADRs in software architecture, git ref-logs, build cache indexes — all use the same per-record-file + per-folder-index shape).

- **Action-type vocabulary** (8 entries — `SPAWN-CHILD` / `REVISIT` / `MERGE` / `CONSOLIDATE` / `TEST` / `OTHER` + non-action `DEFERRED` / `REJECTED`) covers what a Selector can decide about a direction. Each has distinct downstream behavior. *Note: minimal-shape (3 sections, 4 action-types) is acceptable if the user prefers; the maximalist shape drafted is the forward-compat default.*

- **What `/navigation` must NOT include:** 6 explicit exclusions — selection decisions; implementation steps; reflection on the just-completed cycle; cross-inquiry summaries; "right answer" verdicts; bulk re-quoted content from other discipline outputs. Each has a proper destination (Selector / Materialization / Reflect / `_meta_state.md` / Selector / `docarchive/` reference).

- **`branch_inquiry` protocol coordination:** opt-in `from_nav_direction: <N>:<route-number>` flag; when present, `branch_inquiry` writes a Spawned-Children entry in the source inquiry's `_nav.md` AND updates child's `_state.md` Relationships AND updates parent's `_branches.md` (existing behavior). When absent: default behavior unchanged. HALT-on-duplicate-spawn for safety.

- **Commitment: ACTIONABLE.** Justified by N>1 evidence (28 prior navigation-related inquiries cover distinct concerns — warmup variants, route fields, recursive coverage, multi-resolution, output usefulness, correction chains — all sharing the organization-layer gap). Proposal is additive (no spec rewrites of cognitive content); LOW risk class; reversible. User explicitly requested structure.

- **Implementation: 4 file edits**, in order:
  1. `homegrown/navigation/SKILL.md` — add per-run filename pattern + NOT-include subsection.
  2. `homegrown/navigation/references/navigation.md` — add per-run output schema details (location, contents, timestamp).
  3. `enes/runtime_environment/folder_based.md` — add `_nav.md` to Optional Files section + 5-section structure + ownership table + action-type vocabulary + existence rule.
  4. `homegrown/protocols/branch_inquiry.md` — add `from_nav_direction:` flag + coordination behavior + duplicate-spawn HALT.

- **Frame-exit verification (scope note).** This proposal addresses Navigation organization at the artifact-and-folder layer ONLY. It does NOT touch: the 16-type taxonomy (CANONICAL per the audit at `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`), the 12 route fields (HEURISTIC challenge candidate D2 in that audit; address separately if desired), the Navigator session-isolation invariant (handled by `devdocs/inquiries/2026-05-10_01-30__metaloop_navigator_session_relationship/finding.md`), or the cognitive enumeration logic. Bounded scope is intentional.

- **Open: operational protocols per non-spawn move type** (REVISIT / MERGE / CONSOLIDATE / TEST). The action-type vocabulary RECORDS these actions but doesn't operationalize each. Research Frontier — separate inquiries needed when each move type starts being used in practice.

---

## Finding

### Surrounding context

This inquiry sits within the homegrown thinking-engine project at `/Users/ns/Desktop/projects/native/`. The project defines thinking disciplines (Sensemaking, Innovation, Critique, Exploration, Decomposition, Reflect, Navigation) under `homegrown/<discipline>/`, loop runners (`/MVL`, `/MVL+`, `/meta-loop`) under `homegrown/<runner>/`, and protocols (`branch_inquiry`, `conclude`, `loop_diagnose`, `artifact_materialization`, etc.) under `homegrown/protocols/`. The project's folder-based principle (`enes/runtime_environment/folder_based.md`) treats the file system as isomorphic to the thinking structure: underscore-prefix files = metadata; non-prefix files = discipline content.

Past navigation work scattered across ~28 inquiry folders (2026-04-27 through 2026-05-07; now in `_archive/`) without per-folder consolidation. The user explicitly requested structure to prevent recurrence: *"navigation should be organized — how we will ensure? with what structure?"* This inquiry is the answer.

### 1. Three-layer architecture

| Layer | Artifact | Scope | Owner | Required? |
|---|---|---|---|---|
| Per-run | `navigation_observer_<N>.md` | One navigation run; in source-inquiry folder | Navigation discipline | Required when `/navigation` runs |
| Per-folder | `_nav.md` | All navigation activity in this inquiry folder over time | Split (4 writers) | Optional (created when first navigation run occurs) |
| Per-meta-session | `_meta_state.md` | Cross-inquiry traversal across many inquiries | Future meta-loop runner | Out of scope (future concern) |

Each layer has distinct scope; none is redundant. `_meta_state.md` is acknowledged but out of scope per `_branch.md` (meta-loop ladder L1+ concern).

### 2. Per-run artifact spec

**Location:** in the source-inquiry folder (the inquiry whose `finding.md` the Navigator session is reading).

**Naming:** sequential counter `navigation_observer_<N>.md`, where N starts at 1 for the first nav-run in this folder. Discoverability: scan existing `navigation_observer_*.md` files; max(N) + 1 = next.

**Contents:** the navigation map only — typed route-cards per the 16-type taxonomy + 12 route fields canonical from `homegrown/navigation/references/navigation.md`. Plus a frontmatter block with run metadata.

**Frontmatter schema:**

```yaml
---
run_id: <N>
timestamp: <YYYY-MM-DD HH:MM>
source_inquiry: <inquiry-folder-name>
warming_summary: <one-line pointer to warming inputs (codebase / fundamentals / recent-inquiries / target-inquiry)>
---
```

**Body:** the typed route-cards, organized by category (Content-directed / Process-directed / Context-directed). Each route is numbered within this file (Route 1, Route 2, …) so the direction-id format `<run-N>:<route-number>` is unambiguous (e.g., `1:3` = run 1 route 3).

The `warming_summary` field enables future Cold-Navigation detection (the audit's failure-mode J7) — was this run properly warmed? — without re-reading the warming files.

### 3. Per-folder index: `_nav.md`

**Location:** in the source-inquiry folder, alongside `navigation_observer_*.md` files.

**Existence rule:** **OPTIONAL.** Created when the first navigation run occurs in a folder. Once created, never deleted (information-preservation principle from `enes/runtime_environment/folder_based.md`).

**5-section template (maximalist shape — recommended forward-compat default):**

```markdown
# Navigation Activity — [inquiry-name]

## Runs

| Run | Timestamp | Routes (counts) | Source artifact | Brief |
|---|---|---|---|---|
| 1 | 2026-05-10 11:22 | 3 / 2 / 1 (content/process/context) | navigation_observer_1.md | One-line summary of what this run enumerated |

## Selections

| Run:Route | Action | Rationale | Result-pointer | Actor | Timestamp |
|---|---|---|---|---|---|
| 1:1 | SPAWN-CHILD | High-priority + clearly scoped | devdocs/inquiries/2026-05-10_15-30__child-name/ | human | 2026-05-10 12:00 |
| 1:2 | DEFERRED | Worth pursuing but blocked on M4 audit | (none) | human | 2026-05-10 12:00 |
| 1:3 | REJECTED | Re-explores already-killed territory | killed by: <falsifiable-condition> | human | 2026-05-10 12:00 |

## Spawned Children

| Direction-id | Child inquiry path | Spawn timestamp | branch_inquiry log |
|---|---|---|---|
| 1:1 | devdocs/inquiries/2026-05-10_15-30__child-name/ | 2026-05-10 12:01 | from_nav_direction=1:1 |

## Open Directions

[Stored explicitly for fast scan + verified at read-time against Runs ∩ ¬Selections.]

| Direction-id | Source run | Why still open |
|---|---|---|
| 1:4 | navigation_observer_1.md | Awaiting more evidence before deciding |

## History

[Structured chronological event log. Format: `- YYYY-MM-DD HH:MM | <actor> | <event-type> | <brief>`.]

- 2026-05-10 11:22 | navigation-discipline | RUN | navigation_observer_1.md created (3/2/1 routes)
- 2026-05-10 12:00 | human-selector | SELECT | 1:1 SPAWN-CHILD; 1:2 DEFERRED; 1:3 REJECTED; 1:4 OPEN
- 2026-05-10 12:01 | branch_inquiry | SPAWN | from_nav_direction=1:1 → child at 2026-05-10_15-30__child-name
```

**Section ownership (committed):**

| Section | Writer | When |
|---|---|---|
| Runs | Navigation discipline | When `navigation_observer_<N>.md` is produced |
| Selections | Selector (human at L0/L1; future automated Selector at L2+) | When a selection decision is made |
| Spawned Children | `branch_inquiry` protocol | When `from_nav_direction:` flag is present (see §5) |
| Open Directions | Selector (or auto-derived at read-time from Runs ∩ ¬Selections) | At each Selections write |
| History | All writers append entries chronologically | At every event |

**Minimal-vs-maximalist note (per Critique caveat):** the user can prune to a 3-section minimal shape (Runs / Selections / Spawned Children, computing Open Directions and History on demand) if they prefer. The maximalist shape above is the forward-compat default; it preserves cross-cutting views (chronological History; explicit Open Directions for fast scan) that the minimal shape would compute lazily.

### 4. Action-type vocabulary

For the Selections section. 8 entries — 6 actions + 2 non-action states:

| Action / State | Meaning | Result-pointer convention |
|---|---|---|
| **SPAWN-CHILD** | Direction selected; child inquiry created via branch_inquiry | `devdocs/inquiries/<child-path>/` |
| **REVISIT** | Direction selected; re-opens or re-evaluates a prior finding | `devdocs/inquiries/<prior-path>/` (re-opened) |
| **MERGE** | Direction selected; merges multiple branch findings | `devdocs/inquiries/<merge-output>/` |
| **CONSOLIDATE** | Direction selected; produces project-level summary | `devdocs/<consolidated-summary-path>` |
| **TEST** | Direction selected; verifies finding against reality | `<test-result-pointer>` (could be external) |
| **OTHER** | Action that doesn't fit the named types | free-text description in result-pointer |
| **DEFERRED** | Direction worth pursuing later; not chosen now | `(none)` or `gate: <revival-condition>` |
| **REJECTED** | Direction killed; never chose | `killed by: <falsifiable-condition>` |

Each named action has distinct downstream behavior (different protocols / different artifact types). `OTHER` is a safety valve for unforeseen action types; spec text encourages named types when applicable.

### 5. What `/navigation` must NOT include

The discipline produces enumeration only. The following 6 categories of content are OUTSIDE Navigation's charter and belong elsewhere:

| # | Excluded content | Belongs to |
|---|---|---|
| 1 | Selection decisions (which direction is "the right one"; commitment to take a path) | Selector role / `_nav.md` Selections section |
| 2 | Implementation steps / how-to-execute-the-direction | `homegrown/protocols/artifact_materialization.md` / future runner spec |
| 3 | Reflection observations on the just-completed SIC cycle | Reflect discipline output (`reflect.md` per the prior cycle's iteration folder) |
| 4 | Cross-inquiry summaries (how this map relates to maps in OTHER inquiries) | Future `_meta_state.md` (meta-loop runner concern) |
| 5 | "Right answer" verdicts on which direction is best | Outside Navigation's enumerate-only charter; lives in Selector's commitment |
| 6 | Bulk re-quoted content from inquiry's discipline outputs | Already in `docarchive/`; Navigation references via short pointers, doesn't duplicate |

**Spec-text addition for `homegrown/navigation/SKILL.md`:**

```markdown
## MUST NOT include in navigation_observer output

The navigation map enumerates typed next-directions only. The following content
is OUTSIDE Navigation's charter and belongs elsewhere:

1. Selection decisions → Selector / `_nav.md` Selections section
2. Implementation steps → Materialization protocol / runner spec
3. Reflection on the prior cycle → Reflect discipline output
4. Cross-inquiry summaries → `_meta_state.md` (future meta-loop runner)
5. "Right answer" verdicts → outside enumerate-only charter; Selector commits
6. Bulk re-quoting of discipline outputs → already in `docarchive/`; reference, don't duplicate

Example: a one-line pointer like `Source: <inquiry-path>:<section>` is correct;
re-quoting paragraphs of the source's content is bulk and a charter violation.

Including any of these in `navigation_observer_<N>.md` is a charter violation.
```

### 6. branch_inquiry protocol coordination

`homegrown/protocols/branch_inquiry.md` gains an optional input field:

```text
from_nav_direction: <direction-id>
```

Where `<direction-id>` has the format `<run-N>:<route-number>` (e.g., `1:3`).

**When flag PRESENT:**

1. branch_inquiry creates the child inquiry as before (timestamped folder; writes child's `_branch.md` and `_state.md`).
2. branch_inquiry writes a Spawned Children entry in the source inquiry's `_nav.md`:
   - If `_nav.md` does not exist → create it with skeleton + this entry.
   - If `_nav.md` exists but no Spawned Children section → add the section.
   - Entry: `<direction-id> | <child-inquiry-path> | <spawn-timestamp> | from_nav_direction=<direction-id>`.
3. branch_inquiry appends a History entry: `- <timestamp> | branch_inquiry | SPAWN | from_nav_direction=<direction-id> → child at <child-path>`.
4. branch_inquiry writes the relationship in child's `_state.md` Relationships section: `SPAWNED FROM nav-direction <direction-id> in <source-inquiry-path>`.
5. branch_inquiry continues with parent's `_branches.md` update (existing behavior unchanged).

**When flag ABSENT:**

Default behavior unchanged. `_branches.md` updated as today; no `_nav.md` interaction.

**Failure handling — duplicate spawn:**

If `_nav.md` exists AND a Spawned Children entry already exists for this direction-id, branch_inquiry HALTS:

```text
HALT: Direction <direction-id> in source inquiry <source-path>
already spawned a child at <existing-child-path>. Cannot re-spawn.
```

Aligns with the project's "Information loss = deleting" principle. User must explicitly resolve the conflict (remove the stale entry, use a different direction-id, or re-spawn manually) before proceeding.

### 7. Why `_nav.md` and `_branches.md` coexist

Different cohort sets:
- `_branches.md` indexes ALL children of this parent regardless of cause (nav-triggered, manual user-spawn, `branch_inquiry` standalone, etc.).
- `_nav.md`'s Spawned Children section indexes ONLY children spawned from navigation activity.
- A child can be spawned non-navigationally (user creates a branch directly without running `/navigate`). That child appears in `_branches.md` but NOT in `_nav.md`.
- A nav-triggered child appears in BOTH (with cross-references).

Don't merge — different scopes, different access patterns.

### 8. Frame-exit verification (scope confirmation)

Applying the Frame-exit Completeness perspective (per the recently-proposed Sensemaking refactor candidate at `devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md`):

Gating predicate fires (this inquiry has inherited multi-value terms `_nav.md` / `navigation_observer_<N>.md` / `_meta_state.md` AND uses them across the 3-layer organizing structure). Frame-exit check asks: does the project have artifacts/usages that the inquiry's frame's scope excludes?

| Aspect | Status |
|---|---|
| The 16-type taxonomy | Out of scope (CANONICAL per audit; intentional bound). |
| The 12 route fields | Out of scope (Tier-1 challenge candidate D2 in audit; address separately if desired). |
| Navigator session-isolation invariant | Out of scope (handled by 2026-05-10_01-30 finding). |
| Cognitive enumeration logic | Out of scope (Navigation discipline content unchanged here). |
| `homegrown/navigation/warmup/` | Out of scope (feeds INTO discipline; per-run `warming_summary` field references it; clean boundary). |
| `homegrown/protocols/multi_resolution_navigation.md` | Out of scope (built ON the discipline; uses navigation as primitive). |

Frame-exit check **passes**: the inquiry's scope is intentionally bounded to artifact-and-folder organization. Excluded items have clean boundaries. Scope is correctly narrow, not blindly so.

---

## Next Actions

### MUST

- **What:** Apply the 4 spec edits in order — `homegrown/navigation/SKILL.md` (item 1: per-run filename + NOT-include subsection); `homegrown/navigation/references/navigation.md` (item 2: per-run output schema); `enes/runtime_environment/folder_based.md` (item 3: `_nav.md` to Optional Files + 5-section structure + ownership + action-type vocabulary + existence rule); `homegrown/protocols/branch_inquiry.md` (item 4: `from_nav_direction:` flag + behavior + HALT-on-duplicate).
  **Who:** future small inquiry or direct edit (this finding's user can apply).
  **Gate:** observable — applied before next `/navigate` invocation.
  **Why:** ships the structural answer to the user's stated organization need; closes the per-folder gap that bloat was symptom of.

### COULD

- **What:** Consider minimal-vs-maximalist `_nav.md` shape per personal preference. The maximalist shape (5 sections; 8 action-types) is the recommended forward-compat default; minimal (3 sections; 4 action-types — SPAWN-CHILD / DEFERRED / REJECTED + OTHER) works if you prefer leaner artifacts.
  **Who:** user (preference call).
  **Gate:** at first `_nav.md` creation.
  **Why:** lets the convention match user's working style without sacrificing forward-compat.

### DEFERRED

- **What:** Operational protocols per non-spawn move type (REVISIT / MERGE / CONSOLIDATE / TEST). The action-type vocabulary records these actions but each one's actual operational protocol (how does REVISIT re-open a prior inquiry? does it create a new state file? does it update the prior finding's frontmatter?) is not specified.
  **Gate:** condition-bound — when each move type starts being used in practice (e.g., when the user actually tries to REVISIT a prior finding, that's the trigger to operationalize REVISIT).
  **Why if revived:** without operational protocols, the action-types in `_nav.md` Selections are recordable but not executable. Each move type may need its own protocol.

### Research Frontier

- **What:** Cross-inquiry navigation traversal layer (`_meta_state.md`).
  **Why surface:** future meta-loop runner (L1+ of the meta-loop ladder per `devdocs/inquiries/2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/finding.md`) will need to read across many `_nav.md` files to reconstruct cross-inquiry traversal. The `_nav.md` artifacts produced by this proposal ARE the data source for that future feature. Don't build `_meta_state.md` until the meta-loop runner is being built.
  **Next step if pursued:** separate inquiry framing meta-loop runner architecture.

---

## Reasoning

### Why three layers (per-run / per-folder / per-meta-session)

Each scope is distinct. A per-run snapshot answers "what did this navigation run produce?"; a per-folder index answers "what navigation activity has happened in this inquiry over time?"; a per-meta-session log answers "how does navigation move across many inquiries?". Conflating any two loses information. Per the Inversion testing in Innovation, three alternatives to `_nav.md` (filename-encodes-state / per-run self-edit / no-tracking) all fail on different structural grounds — confirming `_nav.md` is the necessary middle layer.

### Why `_nav.md` is OPTIONAL not required

`enes/runtime_environment/folder_based.md` Rule 1 says only `_branch.md` and `_state.md` are required-per-folder. Other underscore-prefix metadata files (`_branches.md`) are already optional in the project's existing convention. Forcing `_nav.md` on every inquiry — including those that don't run navigation — would add empty/skeletal files for no information gain. The user's explicit anti-bloat concern argues for "create when applicable; absence is information."

### Why split ownership across 4 writers

Different sections capture different concerns owned by different roles (Navigation discipline / Selector / branch_inquiry protocol / all-via-History). Forcing single-ownership (e.g., the Runner writes everything) blurs role boundaries — the same role-boundary the meta-loop ladder's role-allocation table is designed to preserve. Split ownership matches the project's existing design pattern.

### Why ACTIONABLE, not DEFERRED

Three reasons:

1. **N>1 evidence.** The 28 prior navigation inquiries cover diverse concerns (warmup variants, route fields, recursive coverage, multi-resolution, output usefulness, correction chains) — each is a distinct navigation-design question that all suffered from the same organization-layer gap. This is multi-instance evidence, not one chain.

2. **Organization-layer addition, not discipline-spec rewrite.** The proposal does NOT change the cognitive content of `/navigation` (16-type taxonomy + 12 route fields are CANONICAL/audit-validated, unchanged here). It adds artifacts and a coordination flag. LOW risk class. Reversible (folder convention can be amended; flag is opt-in).

3. **User explicitly requested structure.** *"Navigation should be organized — how we will ensure? with what structure?"* — the proposal is a direct answer to a user-asked question. Step 5's spirit (precaution) accommodates user-requested additive proposals.

### Significant SURVIVE-with-caveat

- **P1 (core artifact specs):** SURVIVE with minimal-vs-maximalist note — user can prune if minimal preferred; maximalist is forward-compat default.
- **P2 (NOT-include list):** SURVIVE with "bulk" example added — *"a one-line pointer is correct; re-quoting paragraphs is bulk."*
- **P3 (branch_inquiry coord):** SURVIVE clean.
- **P4 (impl + commitment):** SURVIVE clean — ACTIONABLE justified.

### No KILL verdicts

The design is structurally compelling (validated by Inversion + Domain Transfer convergence). The Critique caveats are spec-text refinements, not structural challenges.

### Self-reference handling

This inquiry uses Sensemaking + Decomposition + Innovation + Critique to design Navigation organization — a sibling discipline. Mitigations:

1. **External anchoring at every claim.** `enes/runtime_environment/folder_based.md` cited for project conventions; ADRs / git ref-logs / build cache indexes cited from outside the project for the hub-and-spoke pattern.
2. **Frame-exit perspective applied** (per the recently-proposed Sensemaking refactor candidate; meta-applied here). Bounded scope confirmed as intentional.
3. **Refused trivial clean SURVIVE** on P1 + P2 (caveats applied).
4. **Step 5 honestly considered** — defense argued ACTIONABLE on N>1 grounds, not by waiving Step 5.

Self-reference collapse: not observed.

---

## Open Questions

### Monitoring

- **Will the `_nav.md` existence rule (OPTIONAL; created when navigation runs) fire correctly?** Observable when the user runs `/navigate` for the first time after applying the spec edits. If `_nav.md` is created on first nav and not before, working as intended.

- **Will `from_nav_direction:` flag get used end-to-end?** Observable when a user selects a navigation direction and spawns a child via branch_inquiry. If the flag is populated and `_nav.md` Spawned Children gets the entry, working as intended.

- **Will the maximalist shape feel right or feel bloated in practice?** Observable across the next ~5 navigation runs. If users (or future automated Selectors) frequently leave History or Open Directions sections empty/redundant, that's evidence to prune to minimal.

- **Will any of the 6 NOT-include exclusions get accidentally violated?** Observable when reading produced `navigation_observer_<N>.md` files. If selections start appearing in there, or if discipline outputs get re-quoted, the exclusion list needs sharpening.

### Blocked

- **Operational protocols per non-spawn move type** (REVISIT / MERGE / CONSOLIDATE / TEST). Cannot specify until each move type is actually used.

- **Cross-inquiry traversal layer (`_meta_state.md`).** Cannot specify until meta-loop runner architecture is built.

### Research Frontiers

- **Whether other discipline activities also need per-folder ledgers.** If the per-folder consolidation pattern (per-record file + index) helps Navigation, does it also help Reflect (`_reflect.md`?), Innovation (`_innovate.md`?), etc.? Cross-discipline question; out of scope here.

- **Whether `_nav.md`'s ownership split (4 writers) creates concurrent-write conflicts.** At L0/L1 (current), writers are sequential (human runs `/navigate`, then makes a selection, then invokes `branch_inquiry`); no concurrency. At L2+ where automated Selector runs in parallel with branch_inquiry, concurrent writes to `_nav.md` may need locking. Future concern.

### Refinement Triggers

- **The maximalist shape** re-opens if monitoring reveals consistent under-use of History or Open Directions sections; prune to minimal at that point.

- **The action-type vocabulary** re-opens if `OTHER` is used frequently — that signals a missing named type. Add the type to the spec.

- **The NOT-include list** re-opens if a violation is observed; sharpen the exclusion that was crossed.

- **The OPTIONAL existence rule** re-opens if always-create-`_nav.md` proves more useful in practice (e.g., as a placeholder for "navigation hasn't run yet, here's where it would be"). Currently no evidence for this; OPTIONAL is the right default.

---

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
i inspected devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md 

but it desnt talk about navigation observer md files or navigation map logic etc.  


we had such discussion which went to wrong direction and fixed later on 

now lets discuss it again.

lets answer these quesrtions

what navigation discipiline should create ? it should contian what and shouldnt contain what

do we need _branch.md like _nav.md files? so that in a folder we can see what directions were calcualted ? and maybe what directions from these are explored and where and when etc ?


because this is the main problem one, Navigation Should be organized. How we will ensure ? with what structure?


lets just focus on this Navigation Organization Structure quesrtion
```

</details>
