# Innovation: Navigation Organization Structure

## User Input

Source: `/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/_branch.md`

> What does /navigation create + what NOT-include + do we need _nav.md + organization structure?

Per Decomposition's note: minimum mechanism coverage suffices on validation; main work is committing P1–P4 with concrete spec text.

---

## Seed and Direction

- **Seed: Gap.** The project's existing folder convention (`_branch.md`, `_state.md`, `finding.md`, `docarchive/`, `_branches.md`) doesn't track navigation activity per folder. Past navigation work bloated when scattered.
- **Intuition direction:** structural consolidation — one file per folder consolidates navigation activity; standardized shape allows scan-in-seconds inspection. Forward-compatible with future Selector automation.

---

## Phase 2 — Generate (focused mechanism work for validation)

Per Decomposition: minimum coverage suffices. Apply 2 mechanisms.

### Mechanism 1 — Inversion (Framer): is `_nav.md` actually necessary?

**Inversion 1.1 — filename-encodes-everything.** What if filename pattern alone encoded selection state? E.g., `navigation_observer_1__selected__SPAWN.md`. Counter: state changes over time (initially OPEN; later SELECTED → SPAWNED → COMPLETE). Filename rename would lose history. Reject.

**Inversion 1.2 — per-run files self-edit.** What if each per-run file were edited in-place to mark its directions selected? Counter: violates the project's "discipline output is canonical; don't post-edit" pattern (per `enes/runtime_environment/folder_based.md` "iteration subfolders are self-contained snapshots"). Mixing concerns. Reject.

**Inversion 1.3 — no tracking at all.** What if user just relies on memory / re-reading findings? Counter: THIS IS the bloat scenario the user explicitly wants to fix. Reject.

**Inversion result:** `_nav.md` IS structurally necessary. The 3 alternatives all fail on different structural grounds. Confirms design.

### Mechanism 2 — Domain Transfer (Generator): how do other systems handle per-folder activity ledgers?

**Transfer 2.1 — Architecture Decision Records (ADRs).** Software-architecture practice: each decision gets a numbered file (`0001-use-postgres.md`, `0002-deprecate-redis.md`); a parent index file lists all decisions with status (proposed / accepted / superseded / deprecated). The numbered record is the per-decision artifact; the index is the per-folder consolidation. **Direct analog** to per-run `navigation_observer_<N>.md` + `_nav.md`. Validates structure.

**Transfer 2.2 — git ref-logs.** `.git/logs/HEAD` tracks branch history with timestamp + actor + event. Structured chronological log that any tool can parse. Transfer: `_nav.md`'s History section uses structured format (timestamp / actor / event / brief-description) — same shape as git's reflog. Validates O3 commitment (structured History).

**Transfer 2.3 — Build cache index.** Build systems use per-input-hash artifact files plus an index that maps inputs to artifacts. Transfer: per-run files plus `_nav.md` index — same hub-and-spoke. Validates the indexing pattern.

**Domain Transfer result:** 3 fields independently use the same hub-and-spoke pattern (per-record file + per-folder index). The proposed design matches established practice across software architecture, version control, and build systems.

---

## Phase 3 — Test (5-test cycle on the design)

| Test | Result |
|---|---|
| **Novelty** | Partial — the per-record + per-folder-index pattern is established (ADRs, git, build caches); the novelty is its application to navigation. |
| **Scrutiny survival** | Strong — survives Inversion (3 alternatives all fail) and confirmed by Domain Transfer (3 fields independently use same pattern). |
| **Fertility** | Strong — opens forward-compatibility with future automated Selector + future meta-loop runner reading `_nav.md` files cross-inquiry. |
| **Actionability** | Strong — concrete spec text drafts produced (P1–P4 below). |
| **Mechanism independence** | Strong — Inversion eliminates alternatives; Domain Transfer validates pattern from 3 different fields. |

**Disposition: ACTIONABLE.** Design validated; commit pieces.

---

## P1 — Core artifact specs (committed)

### Per-run artifact: `navigation_observer_<N>.md`

**Location:** in the source-inquiry folder (the inquiry whose finding the Navigator is reading).

**Naming:** sequential counter `navigation_observer_<N>.md`, where N starts at 1 for the first nav-run in this folder. Discoverability: scan existing `navigation_observer_*.md` files; max(N) + 1 = next.

**Contents schema:**

```markdown
---
run_id: <N>
timestamp: <YYYY-MM-DD HH:MM>
source_inquiry: <inquiry-folder-name>
warming_summary: <one-line pointer to warming inputs (codebase / fundamentals / recent-inquiries / target-inquiry)>
---

# Navigation Observer N — [source-inquiry-name]

## Map

[The navigation map — typed route-cards per the 16-type taxonomy + 12 route fields per `homegrown/navigation/references/navigation.md`. Each route is numbered within this file (`Route 1`, `Route 2`, …). Direction-id format: `<N>:<route-number>` (e.g., `1:3` = run 1 route 3).]

### Content [count]

### Route 1: [direction title]
- **Direction:** [DEEPEN / REFINE / etc.]
- **Goal:** [...]
- **Type:** [content / process / context]
- **Priority:** [HIGH / MEDIUM / LOW]
- ... [12 required fields per the spec]

### Route 2: [direction title]
... (repeat per route)

### Process [count]
... (process-directed routes)

### Context [count]
... (context-directed routes)

### Excluded (considered and rejected)
... [if any]
```

**What's NOT in the per-run file:** see P2.

### Per-folder index: `_nav.md`

**Location:** in the source-inquiry folder, alongside `navigation_observer_*.md` files.

**Existence rule:** OPTIONAL. Created when the first navigation run occurs in this folder. Subsequent runs append entries; the file is never deleted.

**File template:**

```markdown
# Navigation Activity — [inquiry-name]

## Runs

| Run | Timestamp | Routes (counts) | Source artifact | Brief |
|---|---|---|---|---|
| 1 | 2026-05-10 11:22 | 3 / 2 / 1 (content/process/context) | navigation_observer_1.md | [one-line summary of what this run enumerated] |
| 2 | 2026-05-12 09:14 | 2 / 1 / 0 | navigation_observer_2.md | ... |

## Selections

| Run:Route | Action | Rationale | Result-pointer | Actor | Timestamp |
|---|---|---|---|---|---|
| 1:1 | SPAWN-CHILD | Direction was high-priority + clearly scoped | devdocs/inquiries/2026-05-10_15-30__child-name/ | human | 2026-05-10 12:00 |
| 1:2 | DEFERRED | Worth pursuing but blocked on M4 audit | (none) | human | 2026-05-10 12:00 |
| 1:3 | REJECTED | Direction would re-explore already-killed territory | killed by: condition X (falsifiable) | human | 2026-05-10 12:00 |
| 2:1 | REVISIT | New evidence challenges prior finding's verdict | devdocs/inquiries/<prior>/ (re-opened) | human | 2026-05-12 09:30 |

## Spawned Children

| Direction-id | Child inquiry path | Spawn timestamp | branch_inquiry log |
|---|---|---|---|
| 1:1 | devdocs/inquiries/2026-05-10_15-30__child-name/ | 2026-05-10 12:01 | from_nav_direction=1:1 |

## Open Directions

[Stored explicitly + verified at read-time against Runs ∩ ¬Selections. Drift indicates a write-failure somewhere.]

| Direction-id | Source run | Why still open |
|---|---|---|
| 1:4 | navigation_observer_1.md | Awaiting more evidence before deciding |

## History

[Structured chronological event log. Format: `- YYYY-MM-DD HH:MM | <actor> | <event-type> | <brief>`.]

- 2026-05-10 11:22 | navigation-discipline | RUN | navigation_observer_1.md created (3/2/1 routes)
- 2026-05-10 12:00 | human-selector | SELECT | 1:1 SPAWN-CHILD; 1:2 DEFERRED; 1:3 REJECTED; 1:4 OPEN
- 2026-05-10 12:01 | branch_inquiry | SPAWN | from_nav_direction=1:1 → child at 2026-05-10_15-30__child-name
- 2026-05-12 09:14 | navigation-discipline | RUN | navigation_observer_2.md created (2/1/0 routes)
- 2026-05-12 09:30 | human-selector | SELECT | 2:1 REVISIT (re-open prior inquiry)
```

### Action-type vocabulary (Selections schema)

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

### Section ownership (committed)

| Section | Writer | When |
|---|---|---|
| Runs | Navigation discipline | When `navigation_observer_<N>.md` is produced |
| Selections | Selector (human at L0/L1; automated Selector at L2+) | When a selection decision is made |
| Spawned Children | branch_inquiry protocol | When `from_nav_direction:` flag is present (see P3) |
| Open Directions | Selector (or auto-derived at read-time from Runs ∩ ¬Selections) | At each Selections write |
| History | All writers (each appends an entry per their action) | At every event |

### Open-item commitments (O2, O3, O4)

- **O2 (Open Directions storage):** **Stored explicitly + verified at read-time.** Best of both worlds — store for fast scan; verify against Runs ∩ ¬Selections at read time. Drift indicates a write-failure that should be flagged.
- **O3 (History format):** **Structured** — `- YYYY-MM-DD HH:MM | <actor> | <event-type> | <brief>`. Parsable; scannable; matches git-reflog idiom.
- **O4 (Cross-reference style with `_branches.md`):** **Explicit cross-references.** Nav-spawned children appear in BOTH `_nav.md` Spawned Children AND `_branches.md` (parent's index of all children). The two files cross-link via path-form references. Children NOT spawned via navigation appear only in `_branches.md`.

---

## P2 — NOT-include list for `/navigation` (committed)

The `/navigation` discipline must NOT include the following in `navigation_observer_<N>.md` outputs. Each exclusion has a proper destination:

| # | Excluded content | Belongs to |
|---|---|---|
| 1 | Selection decisions (which direction is "the right one"; commitment to take a path) | Selector role / `_nav.md` Selections section |
| 2 | Implementation steps / how-to-execute-the-direction | Materialization protocol (`homegrown/protocols/artifact_materialization.md`) / future runner spec |
| 3 | Reflection observations on the just-completed cycle (what went well/poorly in the SIC iteration that just ran) | Reflect discipline output (`reflect.md` per the prior cycle's iteration folder) |
| 4 | Cross-inquiry summaries (how this navigation map relates to maps in OTHER inquiries) | Future `_meta_state.md` (meta-loop runner concern) |
| 5 | "Right answer" verdicts (asserting which direction is best) | Outside Navigation's enumerate-only charter; lives in Selector's commitment |
| 6 | Bulk content from inquiry's discipline outputs (re-quoting findings, sensemaking, critique outputs) | Already in `docarchive/`; Navigation references via short pointers, doesn't duplicate |

**Spec-text addition:** add the following as a `## MUST NOT include` subsection in `homegrown/navigation/SKILL.md` (and reference in `homegrown/navigation/references/navigation.md`):

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

Including any of these in `navigation_observer_<N>.md` is a charter violation.
```

---

## P3 — branch_inquiry protocol coordination (committed)

### Optional flag

`homegrown/protocols/branch_inquiry.md` gains an optional input field:

```text
from_nav_direction: <direction-id>
```

Where `<direction-id>` has the format `<N>:<route-number>` (e.g., `1:3` = run 1 route 3 of source inquiry's `navigation_observer_1.md`).

### Behavior

**When flag PRESENT:**

1. branch_inquiry creates the child inquiry as before (timestamped folder; writes child's `_branch.md` and `_state.md`).
2. branch_inquiry writes a `Spawned Children` entry in source inquiry's `_nav.md`:
   - If `_nav.md` does not exist → create it with skeleton + this entry.
   - If `_nav.md` exists but no Spawned Children section → add the section.
   - Entry: `<direction-id> | <child-inquiry-path> | <spawn-timestamp> | from_nav_direction=<direction-id>`.
3. branch_inquiry writes a History entry in source inquiry's `_nav.md`:
   - `- <timestamp> | branch_inquiry | SPAWN | from_nav_direction=<direction-id> → child at <child-path>`.
4. branch_inquiry writes the relationship in child's `_state.md` Relationships section:
   - `SPAWNED FROM nav-direction <direction-id> in <source-inquiry-path>`.
5. branch_inquiry continues with parent's `_branches.md` update (existing behavior).

**When flag ABSENT:**

Default behavior unchanged. `_branches.md` updated as today; no `_nav.md` interaction.

### Failure handling

If `_nav.md` exists AND a Spawned Children entry already exists for this direction-id, branch_inquiry HALTS with conflict message:

```text
HALT: Direction <direction-id> in source inquiry <source-path>
already spawned a child at <existing-child-path>. Cannot re-spawn.
```

This prevents accidental duplicate spawns when a direction-id is reused.

---

## P4 — Implementation guidance + commitment + recommendation (committed)

### File-edit list (in order)

1. **`homegrown/navigation/SKILL.md`** — add per-run output filename pattern (`navigation_observer_<N>.md`); add the `## MUST NOT include` subsection (P2 verbatim); reference `_nav.md` for downstream tracking.

2. **`homegrown/navigation/references/navigation.md`** — add per-run output schema details (location = source-inquiry folder; sequential N; contents = navigation map + warming-summary + timestamp). No changes to the 16-type taxonomy or 12 route fields (CANONICAL per audit).

3. **`enes/runtime_environment/folder_based.md`** — add `_nav.md` to Optional Files section (alongside `_branches.md`); add the 5-section structure + ownership table + action-type vocabulary + the existence rule (OPTIONAL; created on first navigation run; never deleted).

4. **`homegrown/protocols/branch_inquiry.md`** — add optional `from_nav_direction:` flag (P3 verbatim); specify behavior under flag-present and flag-absent; add failure-handling on duplicate spawn.

### Commitment status: **ACTIONABLE**

Justification:
- **N>1 evidence.** Navigation bloat across ~28 prior inquiries is the empirical evidence; this is not a single failure. Per `homegrown/protocols/loop_diagnose.md` Step 5: "do not propose broad fundamentals rewrites from one weak correction chain" — this proposal isn't from one chain; it's from a multi-chain corpus.
- **Organization-layer addition, not discipline-spec rewrite.** The proposal adds artifacts and a coordination flag; it does NOT change the cognitive content of the `/navigation` discipline (the 16-type taxonomy and 12 route fields are CANONICAL per the prior audit and unchanged here).
- **User explicitly requested structure.** The user said: *"Navigation Should be organized. How we will ensure ? with what structure?"* — the proposal is a direct answer. Honoring user intent.
- **Forward-compatible.** L0-immediate-applicable AND L2+-forward-compatible. No re-spec needed when meta-loop ladder advances.

### Frame-exit verification (note)

The proposal addresses Navigation organization at the artifact-and-folder layer. It does NOT touch:
- The 16-type taxonomy (CANONICAL per `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`).
- The 12 route fields (still HEURISTIC/Tier-1 challenge candidate D2 in that audit; out of scope here; address separately if desired).
- The Navigator session-isolation invariant (handled by `devdocs/inquiries/2026-05-10_01-30__metaloop_navigator_session_relationship/finding.md`).
- The cognitive enumeration logic of /navigation (unchanged).

This bounded scope is intentional. Frame-exit perspective applied per the recently-proposed Sensemaking refactor candidate (`devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md`); confirmed bounded scope correctly excludes those layers.

### Recommendation

**Ship the 4 file edits.** User triggers implementation when ready. Suggested order: items 1+2 (Navigation discipline updates) first; item 3 (folder_based.md update) second; item 4 (branch_inquiry update) last.

After shipping, monitor next 5 inquiries for:
- Does `_nav.md` get created when `/navigate` runs? (existence rule firing correctly)
- Does `from_nav_direction:` flag work end-to-end? (cross-protocol coordination)
- Does `_nav.md` consolidate as intended (does the user actually scan-in-seconds)?
- Does any of the 6 NOT-include exclusions get accidentally violated?

If any of the 4 monitoring questions fails, refine the relevant spec.

### Open Question — Research Frontier (O1)

**Operational protocols per non-spawn move type.** The action-type vocabulary lists REVISIT / MERGE / CONSOLIDATE / TEST as recordable selection actions, but the operational protocol for each (e.g., "how does REVISIT actually re-open a prior inquiry? does it create a new state file? does it update the prior finding's frontmatter?") is NOT specified. Each non-spawn move type may need its own protocol.

This is research frontier — separate inquiries per move type, gated on actual usage patterns (i.e., when the user starts using REVISIT in practice, that's the trigger to operationalize REVISIT's protocol).

---

## Mechanism Coverage Telemetry

- **Generators applied:** 1/4 (Domain Transfer with 3 sub-variations: ADRs / git ref-logs / build cache index — all confirm hub-and-spoke pattern).
- **Framers applied:** 1/3 (Inversion with 3 sub-variations: filename-encodes / per-run self-edit / no-tracking — all rejected; confirms `_nav.md` necessity).
- **Convergence:** YES — both mechanisms validate the design from independent angles.
- **Survivors tested:** 1/1 (the design as a whole).
- **Failure modes observed:** None.
  - Premature evaluation: avoided.
  - Single-mechanism trap: avoided.
  - Early frame lock: avoided (3 alternatives tested in Inversion).
  - Innovation without grounding: avoided (Domain Transfer to 3 fields).
  - Mechanism exhaustion: avoided.
  - Survival bias: checked — Inversion 1.1 (filename-encodes) was tested fairly though uncomfortable; rejected on structural grounds.

**Overall: PROCEED.** Minimum coverage met; design validated; 4 pieces (P1-P4) committed with concrete spec text. Hand off to Critique.
