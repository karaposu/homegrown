# Navigation — A Sample Story

A concrete walkthrough of how Navigation works under the organization structure proposed in `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md`. Follows one inquiry through two navigation runs, showing artifact creation, file evolution, and how holistic coverage is ensured.

---

## Setup — the inquiry before navigation

The user runs `/MVL+` on a question:

> *"What's the right way to handle errors in MVL+ when a discipline's structural check fails mid-pipeline?"*

The MVL+ runner creates `devdocs/inquiries/2026-05-15_09-30__mvl_error_handling_mid_pipeline/`, executes the full E → S → D → I → C pipeline, and runs CONCLUDE. The folder ends up looking like this:

```
devdocs/inquiries/2026-05-15_09-30__mvl_error_handling_mid_pipeline/
├── _branch.md            ← question + goal + scope
├── _state.md             ← pipeline progress + history (status COMPLETE)
├── finding.md            ← the verdict
└── docarchive/
    ├── exploration.md
    ├── sensemaking.md
    ├── decomposition.md
    ├── innovation.md
    └── critique.md
```

`finding.md` concluded **PARTIAL**: there are three plausible approaches (HALT-and-resume; soft-failure-with-flag; rollback-to-prior-checkpoint), and the inquiry's evidence didn't clearly select between them. The user is unsure which to pursue first.

There is no `_nav.md` in the folder yet — the OPTIONAL existence rule means it is created only when navigation actually runs.

---

## First navigation run

### Step 1 — User manually creates the isolated session and runs the navigation discipline in it

At L0/L1 of the meta-loop ladder (where the user currently is — per `devdocs/inquiries/2026-05-09_18-23__metaloop_autonomy_ladder_and_open_design_questions/finding.md`), there is no automated runner that spawns a Navigator session. The **user manually creates a fresh, isolated session** (a new Claude conversation, a fresh subagent, or any equivalent — anything that has zero shared context with the worker session that ran `/MVL+`). This manual creation is what realizes the session-isolation invariant from `devdocs/inquiries/2026-05-10_01-30__metaloop_navigator_session_relationship/finding.md`.

In that newly-created isolated session, the user then runs the navigation discipline pointing at the target inquiry:

```
/navigation devdocs/inquiries/2026-05-15_09-30__mvl_error_handling_mid_pipeline/
```

(Or, equivalently, the user pastes the inquiry path and asks the fresh session to "run navigation on this." The exact invocation form is incidental; what matters is that the session is fresh-and-isolated, and that the discipline runs against the target inquiry.)

So the responsibility split at L0/L1 looks like:

| Actor | Action |
|---|---|
| **User** (acting as meta-loop Runner) | Manually opens a new isolated session; types the navigation invocation; later returns to the original / a fresh worker session for selection-and-spawn |
| **AI inside the new isolated session** (acting as Navigator) | Loads the navigation discipline spec; executes the warming protocol; reads target inquiry artifacts; produces the navigation map; saves `navigation_observer_<N>.md` and updates `_nav.md` |

This split is what L1 of the meta-loop autonomy ladder names: *"Navigator: system (isolated, manually invoked subagent per probe). Runner: human."* The Navigator role is system-played (the AI runs the discipline); the orchestration that *invokes* the Navigator is human-played.

At L2+ (when the meta-loop runner becomes automated), the orchestration step graduates to system-played — at that point the user just types one command and a runner script handles the isolated-session creation and the navigation invocation. But that's a future level; today the user does it manually.

### Step 2 — Navigator warming

The Navigator session reads — in order — the warming inputs (per `homegrown/navigation/warmup/`):

| Read | Source | Why |
|---|---|---|
| **Codebase orientation** | `homegrown/navigation/warmup/navigator-warmup1.md` | High-level: what is this project, what disciplines exist, what's the loop pattern. |
| **Fundamentals** | `homegrown/navigation/warmup/navigator-warmup2.md` | Conceptual frame: SIC loop, MVL+, role-allocation, Boundary disciplines. |
| **Long-run trajectory** | `homegrown/navigation/warmup/navigator-warmup3.md` | Where the project is heading (multi-head meta-loop; consciousness gradient). |
| **Recent trajectory** | last ~2 days of inquiries: `2026-05-13/14_*` folder summaries | Recent context: what's been on the user's mind. |
| **Prior-map overlay** | `homegrown/navigation/warmup/navigator-prior-map-overlay.md` | If the project has prior navigation maps relevant to this inquiry, they're surfaced. |
| **Target inquiry artifacts** | this inquiry's `_branch.md`, `_state.md`, `finding.md`, and (if archived) `docarchive/*` | The actual content the navigation map will be about. |

The Navigator session NEVER reads worker-session-internal context (the worker's transient reasoning, scratch notes, in-flight discipline outputs before they were saved). It reads only persisted artifacts. This is the session-isolation invariant — preventing worker-context bloat from distorting the navigation map.

### Step 3 — Navigator produces the map

The Navigator session writes a new file in the source-inquiry folder:

```
devdocs/inquiries/2026-05-15_09-30__mvl_error_handling_mid_pipeline/
├── _branch.md
├── _state.md
├── finding.md
├── navigation_observer_1.md   ← NEW
└── docarchive/
```

**Sample contents** of `navigation_observer_1.md`:

```markdown
---
run_id: 1
timestamp: 2026-05-15 11:42
source_inquiry: 2026-05-15_09-30__mvl_error_handling_mid_pipeline
warming_summary: codebase orientation + fundamentals + recent trajectory (last 2 days) + target inquiry _branch / _state / finding / docarchive (5 files)
---

# Navigation Observer 1 — MVL Error Handling Mid Pipeline

## Map

### Content (3 routes)

#### Route 1: DEEPEN — probe HALT-and-resume's session-resumability
- **Direction:** DEEPEN
- **Goal:** Test whether HALT-and-resume preserves _state.md handoff cleanly across cold-resume in a fresh session.
- **Type:** content
- **Priority:** HIGH
- **Status:** OPEN
- **Blocked-by:** none
- **Purpose:** PARTIAL critique on this approach; deeper test would resolve the verdict.
- **Movement:** new SIC inquiry on this approach with concrete failure-case scenarios.
- **Unlocks:** decision on whether HALT-and-resume can become the default.
- **WHY:** the prior finding flagged session-resumability as the load-bearing question; testing it directly would close the gap.
- **Guidance mode:** full
- **Continuation note:** if this DEEPEN produces a clear SURVIVE, fold the result back as the recommended approach.

#### Route 2: PURSUE SEED — soft-failure-with-flag's "soft failure" idea
- **Direction:** PURSUE SEED
- **Goal:** Investigate the "soft failure" mechanism — what would it take to make a discipline output salvageable even when a structural check fails?
- **Type:** content
- **Priority:** MEDIUM
- ... (12 fields)

#### Route 3: INVESTIGATE FRONTIER — what does pipeline-resilience mean as an architectural property?
- **Direction:** INVESTIGATE FRONTIER
- **Goal:** Frame this question one level up: the inquiry was about ERROR HANDLING; the frontier question is "what is pipeline resilience as a project-architectural property?"
- **Priority:** LOW
- ... (12 fields)

### Process (1 route)

#### Route 4: REFRAME — different question
- **Direction:** REFRAME
- **Goal:** The original question may itself be wrong-shaped. Reframe as "should structural checks be soft (warning) by default rather than hard (HALT)?"
- **Priority:** MEDIUM
- ... (12 fields)

### Context (1 route)

#### Route 5: REVISIT — re-examine the older /reflect inquiry that touched failure-handling
- **Direction:** REVISIT
- **Goal:** A 2026-05-02 inquiry on /reflect's per-step observations had a relevant kill-condition that may now be overturned by this inquiry's findings.
- **Priority:** MEDIUM
- ... (12 fields)

### Excluded (considered and rejected)

✗ DEVELOP — none of the three approaches has SURVIVED yet, so DEVELOP isn't applicable.
✗ MERGE — only one finding exists; no branches to merge.
✗ TEST — verifying against reality requires a candidate to verify; none has won yet.
```

This is the **per-run artifact**. It's canonical (not edited after creation) and indexed by direction-id `1:1` through `1:5`.

### Step 4 — `_nav.md` is created

Because this is the first navigation run in this folder, `_nav.md` is created:

```
devdocs/inquiries/2026-05-15_09-30__mvl_error_handling_mid_pipeline/
├── _branch.md
├── _state.md
├── _nav.md                     ← NEW (first-time creation)
├── finding.md
├── navigation_observer_1.md
└── docarchive/
```

**Sample contents** of `_nav.md` immediately after the Navigation discipline writes Run 1:

```markdown
# Navigation Activity — MVL Error Handling Mid Pipeline

## Runs

| Run | Timestamp | Routes (counts) | Source artifact | Brief |
|---|---|---|---|---|
| 1 | 2026-05-15 11:42 | 3 / 1 / 1 (content/process/context) | navigation_observer_1.md | enumerated 5 routes; HALT-vs-soft-vs-rollback gap dominant |

## Selections

(no selections yet)

## Spawned Children

(none yet)

## Open Directions

| Direction-id | Source run | Why still open |
|---|---|---|
| 1:1 | navigation_observer_1.md | OPEN — awaiting selection |
| 1:2 | navigation_observer_1.md | OPEN — awaiting selection |
| 1:3 | navigation_observer_1.md | OPEN — awaiting selection |
| 1:4 | navigation_observer_1.md | OPEN — awaiting selection |
| 1:5 | navigation_observer_1.md | OPEN — awaiting selection |

## History

- 2026-05-15 11:42 | navigation-discipline | RUN | navigation_observer_1.md created (3/1/1 routes); 5 directions enumerated, all OPEN
```

The Runs section has one entry; the Selections, Spawned Children, and Open Directions sections start populated by the Runs result; History has one event.

### Step 5 — User reviews and selects

The user reads `navigation_observer_1.md` and `_nav.md`. They decide:

- **Route 1:1 (DEEPEN HALT-and-resume):** SPAWN-CHILD. The session-resumability gap is the strongest lead.
- **Route 1:2 (PURSUE SEED soft-failure):** DEFERRED. Worth pursuing later, but only if 1:1 reveals HALT-and-resume can't work cleanly.
- **Route 1:3 (INVESTIGATE FRONTIER pipeline-resilience):** DEFERRED. Architectural-level framing; come back after 1:1 settles the immediate question.
- **Route 1:4 (REFRAME soft-checks):** REJECTED. Already considered in the original inquiry's exploration; killed there.
- **Route 1:5 (REVISIT /reflect older inquiry):** DEFERRED. Promising but needs more time to evaluate.

The user updates `_nav.md` with these decisions (the Selector role — at L0/L1 of the meta-loop ladder, the human acts as Selector and writes directly):

```markdown
## Selections

| Run:Route | Action | Rationale | Result-pointer | Actor | Timestamp |
|---|---|---|---|---|---|
| 1:1 | SPAWN-CHILD | Strongest lead; session-resumability is the load-bearing gap | (pending — see Spawned Children below after spawn) | human | 2026-05-15 12:05 |
| 1:2 | DEFERRED | Pursue only if 1:1 reveals HALT-and-resume can't work cleanly | gate: 1:1 produces SURVIVE-not | human | 2026-05-15 12:05 |
| 1:3 | DEFERRED | Architectural framing; revisit after 1:1 settles | gate: 1:1 completes | human | 2026-05-15 12:05 |
| 1:4 | REJECTED | Already considered + killed in original inquiry's exploration | killed by: original inquiry's exploration anchor C-T2 (soft-checks rejected on coherence grounds) | human | 2026-05-15 12:05 |
| 1:5 | DEFERRED | Promising but needs more time to evaluate | gate: returning to this inquiry after 1:1 | human | 2026-05-15 12:05 |
```

The Open Directions section is updated to reflect that 1:4 has been rejected (it's still listed but with a `REJECTED` marker — information-preserving):

```markdown
## Open Directions

| Direction-id | Source run | Status | Why still open |
|---|---|---|---|
| 1:1 | navigation_observer_1.md | SELECTED-PENDING-SPAWN | (will be resolved by branch_inquiry) |
| 1:2 | navigation_observer_1.md | DEFERRED | gate: 1:1 produces SURVIVE-not |
| 1:3 | navigation_observer_1.md | DEFERRED | gate: 1:1 completes |
| 1:4 | navigation_observer_1.md | REJECTED | killed by: original inquiry's exploration C-T2 |
| 1:5 | navigation_observer_1.md | DEFERRED | gate: returning to this inquiry after 1:1 |
```

History gets an event:

```markdown
## History

- 2026-05-15 11:42 | navigation-discipline | RUN | navigation_observer_1.md created (3/1/1 routes); 5 directions enumerated, all OPEN
- 2026-05-15 12:05 | human-selector | SELECT | 1:1 SPAWN-CHILD; 1:2 DEFERRED; 1:3 DEFERRED; 1:4 REJECTED; 1:5 DEFERRED
```

### Step 6 — `branch_inquiry` spawns the child for 1:1

The user invokes:

```
/branch_inquiry parent=devdocs/inquiries/2026-05-15_09-30__mvl_error_handling_mid_pipeline/ from_nav_direction=1:1 question="Test HALT-and-resume's session-resumability across cold-resume in a fresh session"
```

The `from_nav_direction:` flag tells `branch_inquiry` this is a navigation-triggered spawn. It:

1. Creates the child inquiry folder: `devdocs/inquiries/2026-05-15_12-10__halt_resume_session_resumability_test/`.
2. Writes the child's `_branch.md` and `_state.md` (with Relationship `SPAWNED FROM nav-direction 1:1 in 2026-05-15_09-30__mvl_error_handling_mid_pipeline`).
3. Writes a Spawned-Children entry in the **source inquiry's** `_nav.md`:
   ```markdown
   ## Spawned Children

   | Direction-id | Child inquiry path | Spawn timestamp | branch_inquiry log |
   |---|---|---|---|
   | 1:1 | devdocs/inquiries/2026-05-15_12-10__halt_resume_session_resumability_test/ | 2026-05-15 12:10 | from_nav_direction=1:1 |
   ```
4. Updates Selections row 1:1's result-pointer:
   ```markdown
   | 1:1 | SPAWN-CHILD | Strongest lead; session-resumability is the load-bearing gap | devdocs/inquiries/2026-05-15_12-10__halt_resume_session_resumability_test/ | human | 2026-05-15 12:05 |
   ```
5. Updates Open Directions row 1:1's status to `SPAWNED`.
6. Appends History event:
   ```markdown
   - 2026-05-15 12:10 | branch_inquiry | SPAWN | from_nav_direction=1:1 → child at 2026-05-15_12-10__halt_resume_session_resumability_test
   ```
7. Updates the parent's `_branches.md` (existing behavior — index of all children, nav-triggered or not).

After this step, the source inquiry folder looks like:

```
devdocs/inquiries/2026-05-15_09-30__mvl_error_handling_mid_pipeline/
├── _branch.md
├── _branches.md             ← NEW (parent's index of children, after first spawn)
├── _nav.md                   ← UPDATED (Spawned Children + Selections + History + Open Directions)
├── _state.md
├── finding.md
├── navigation_observer_1.md  ← UNCHANGED (canonical, never post-edited)
└── docarchive/
```

**Critical:** `navigation_observer_1.md` is NOT modified. It's the discipline's canonical output. Selection state and spawn pointers live in `_nav.md`, not in the per-run file.

---

## Time passes — child inquiry completes

Days later, the child inquiry `2026-05-15_12-10__halt_resume_session_resumability_test/` runs to completion. Its `finding.md` produces a SURVIVE verdict: HALT-and-resume IS workable, but only with a small change to `_state.md` schema (add a `last_completed_step` field).

The user comes back to the original inquiry. New evidence is now available (the child's finding). Time to re-navigate.

---

## Second navigation run

### Step 7 — User manually creates a NEW isolated session and runs the navigation discipline in it again

Same procedure as Step 1, repeated. The user **manually opens a brand-new isolated session** — NOT the same session that ran navigation back in Step 1, NOT a continuation of run 1. A genuinely fresh session with zero state from any prior session. This is critical: the Navigator must come to the target inquiry with fresh eyes; sharing state with run 1 would defeat the purpose of running navigation a second time.

Inside that new isolated session, the user runs the navigation discipline pointing at the same inquiry:

```
/navigation devdocs/inquiries/2026-05-15_09-30__mvl_error_handling_mid_pipeline/
```

The same actor split applies: user manually orchestrates the isolated-session creation and the invocation; the AI inside the fresh session runs the navigation discipline.

### Step 8 — Navigator warming for run 2

The session reads — in order — the warming inputs again, BUT with one important difference: the warming-context now includes the child inquiry's finding (because it's a recent inquiry in the project's trajectory). The Navigator also reads the source inquiry's `_nav.md` to know what was already enumerated and selected.

Reads for run 2:

| Read | Source | Why |
|---|---|---|
| Codebase orientation | warmup1 | Same as before. |
| Fundamentals | warmup2 | Same. |
| Long-run trajectory | warmup3 | Same. |
| Recent trajectory | last ~2 days, NOW INCLUDES child inquiry's finding | NEW evidence integrated. |
| Prior-map overlay | warmup-prior-map-overlay | Same. |
| Target inquiry artifacts | this inquiry's `_branch.md`, `_state.md`, `finding.md`, `docarchive/*` | Same. |
| **Source inquiry's `_nav.md`** | (NEW for run 2) | The Navigator knows what was enumerated in run 1, what was selected, what's still open. **Avoids re-enumerating already-explored directions.** |
| **Source inquiry's `_branches.md`** | (NEW for run 2) | Knows which children were spawned, including non-nav-triggered ones. |
| **Spawned children's findings** | from `_nav.md` Spawned Children pointers — read each child's `finding.md` | Integrates the evidence those children produced. |

This is **the holism mechanism**. Holistic coverage is ensured by:
1. The standard warming protocol (codebase + fundamentals + trajectory + target).
2. PLUS reading the source inquiry's prior `_nav.md` (to know what's already been considered).
3. PLUS reading findings from spawned children (to integrate new evidence).
4. PLUS reading `_branches.md` for non-nav-triggered children that may also be relevant.

### Step 9 — Navigator produces run 2's map

The session writes a new file:

```
devdocs/inquiries/2026-05-15_09-30__mvl_error_handling_mid_pipeline/
├── _branch.md
├── _branches.md
├── _nav.md
├── _state.md
├── finding.md
├── navigation_observer_1.md   ← UNCHANGED (preserved)
├── navigation_observer_2.md   ← NEW (sequential N=2)
└── docarchive/
```

**Critical:** `navigation_observer_1.md` is NOT overwritten. The naming uses sequential N (1, 2, 3, …) and the new file is `navigation_observer_2.md`. Past maps are preserved as history.

**Sample contents** of `navigation_observer_2.md`:

```markdown
---
run_id: 2
timestamp: 2026-05-19 14:20
source_inquiry: 2026-05-15_09-30__mvl_error_handling_mid_pipeline
warming_summary: codebase + fundamentals + recent trajectory (now includes child finding 2026-05-15_12-10__halt_resume_session_resumability_test) + target inquiry artifacts + prior _nav.md (1 run, 5 directions, 1 spawned, 3 deferred, 1 rejected) + spawned children findings (1)
---

# Navigation Observer 2 — MVL Error Handling Mid Pipeline

## Map

### Content (2 routes)

#### Route 1: DEVELOP — implement HALT-and-resume with the schema change
- **Direction:** DEVELOP
- **Goal:** Implement HALT-and-resume with the `last_completed_step` field in `_state.md`, per the child inquiry's SURVIVE verdict.
- **Type:** content
- **Priority:** HIGH
- ...

#### Route 2: REFINE — original inquiry's verdict updates from PARTIAL to ACTIONABLE
- **Direction:** REFINE
- **Goal:** Update this inquiry's `finding.md` to reflect the new verdict: HALT-and-resume SURVIVED, soft-failure DEFERRED, rollback REJECTED on coherence grounds.
- **Type:** content
- **Priority:** HIGH
- ...

### Process (0 routes)

(none — process-directed moves not applicable; the original SIC pipeline ran cleanly.)

### Context (1 route)

#### Route 3: REVISIT — re-evaluate 1:5 (the /reflect older inquiry) with new evidence
- **Direction:** REVISIT
- **Goal:** With HALT-and-resume now SURVIVED, re-evaluate the older /reflect inquiry's kill condition. The new evidence may overturn it.
- **Priority:** MEDIUM
- ...

### Excluded (considered and rejected)

✗ DEEPEN on 1:1 — already deepened by spawned child; no further DEEPEN needed.
✗ PURSUE SEED on 1:2 (soft-failure) — superseded; HALT-and-resume SURVIVED so soft-failure is unnecessary.
✗ INVESTIGATE FRONTIER on 1:3 — still applicable but lower priority now that the immediate question is settled.
```

Notice that the second run's map:
- Has DIFFERENT routes (DEVELOP, REFINE, REVISIT) than run 1 (DEEPEN, PURSUE SEED, INVESTIGATE FRONTIER, REFRAME, REVISIT).
- Its excluded section explicitly notes which run 1 directions are now SUPERSEDED or OBSOLETE.
- Direction-ids in run 2 are `2:1`, `2:2`, `2:3` (not re-using run 1's namespace).

### Step 10 — `_nav.md` is updated (no overwrites; appends only)

After Run 2 produces its map, the Navigation discipline appends to `_nav.md`:

```markdown
# Navigation Activity — MVL Error Handling Mid Pipeline

## Runs

| Run | Timestamp | Routes (counts) | Source artifact | Brief |
|---|---|---|---|---|
| 1 | 2026-05-15 11:42 | 3 / 1 / 1 (content/process/context) | navigation_observer_1.md | enumerated 5 routes; HALT-vs-soft-vs-rollback gap dominant |
| 2 | 2026-05-19 14:20 | 2 / 0 / 1 | navigation_observer_2.md | child finding integrated; DEVELOP HALT-and-resume now ready; REVISIT 1:5 with new evidence |

## Selections

| Run:Route | Action | Rationale | Result-pointer | Actor | Timestamp |
|---|---|---|---|---|---|
| 1:1 | SPAWN-CHILD | Strongest lead; session-resumability is the load-bearing gap | devdocs/inquiries/2026-05-15_12-10__halt_resume_session_resumability_test/ | human | 2026-05-15 12:05 |
| 1:2 | DEFERRED | Pursue only if 1:1 reveals HALT-and-resume can't work cleanly | gate: 1:1 produces SURVIVE-not | human | 2026-05-15 12:05 |
| 1:3 | DEFERRED | Architectural framing; revisit after 1:1 settles | gate: 1:1 completes | human | 2026-05-15 12:05 |
| 1:4 | REJECTED | Already considered + killed in original inquiry's exploration | killed by: original inquiry's exploration anchor C-T2 | human | 2026-05-15 12:05 |
| 1:5 | DEFERRED | Promising but needs more time to evaluate | gate: returning to this inquiry after 1:1 | human | 2026-05-15 12:05 |
| (run 2 selections will be added when user makes them) |

## Spawned Children

| Direction-id | Child inquiry path | Spawn timestamp | branch_inquiry log |
|---|---|---|---|
| 1:1 | devdocs/inquiries/2026-05-15_12-10__halt_resume_session_resumability_test/ | 2026-05-15 12:10 | from_nav_direction=1:1 |

## Open Directions

| Direction-id | Source run | Status | Why still open |
|---|---|---|---|
| 1:1 | navigation_observer_1.md | SPAWNED → child COMPLETED | resolved by child SURVIVE verdict; superseded by 2:1, 2:2 |
| 1:2 | navigation_observer_1.md | SUPERSEDED | run 2 noted soft-failure as no longer needed |
| 1:3 | navigation_observer_1.md | DEFERRED | gate: still — 1:3 hasn't been re-evaluated in run 2 |
| 1:4 | navigation_observer_1.md | REJECTED | killed by: original inquiry's exploration C-T2 |
| 1:5 | navigation_observer_1.md | DEFERRED | gate: returning to this inquiry — but now elevated by 2:3 REVISIT |
| 2:1 | navigation_observer_2.md | OPEN | awaiting selection |
| 2:2 | navigation_observer_2.md | OPEN | awaiting selection |
| 2:3 | navigation_observer_2.md | OPEN | awaiting selection |

## History

- 2026-05-15 11:42 | navigation-discipline | RUN | navigation_observer_1.md created (3/1/1 routes); 5 directions enumerated, all OPEN
- 2026-05-15 12:05 | human-selector | SELECT | 1:1 SPAWN-CHILD; 1:2 DEFERRED; 1:3 DEFERRED; 1:4 REJECTED; 1:5 DEFERRED
- 2026-05-15 12:10 | branch_inquiry | SPAWN | from_nav_direction=1:1 → child at 2026-05-15_12-10__halt_resume_session_resumability_test
- 2026-05-19 12:00 | (external event) | CHILD-COMPLETED | child inquiry 2026-05-15_12-10 completed with SURVIVE verdict
- 2026-05-19 14:20 | navigation-discipline | RUN | navigation_observer_2.md created (2/0/1 routes); integrates child finding; supersedes 1:1, 1:2; promotes 1:5 → 2:3
```

Note carefully:
- **Run 1's row in the Runs section is preserved** — never deleted, never edited.
- **Past Selections rows are preserved** — never deleted; their semantics (DEFERRED, etc.) may be updated in the Open Directions section based on what later runs reveal, but the original Selections record stays.
- **Open Directions section now has BOTH run 1 directions (with updated status reflecting what later runs revealed) AND run 2 directions.**
- **History keeps appending chronologically.** Every event from run 1 is still there.

The information is monotonically growing — the file expands but never loses past state. This is the project's "Information loss = deleting" principle in action.

### Step 11 — User selects on run 2

The user reads `navigation_observer_2.md` and updates Selections:

- **2:1 (DEVELOP HALT-and-resume)**: SPAWN-CHILD — implementation child inquiry.
- **2:2 (REFINE original finding)**: SPAWN-CHILD — finding-update inquiry.
- **2:3 (REVISIT older /reflect inquiry)**: REVISIT — re-open prior inquiry directly (no new child).

After their decisions and the corresponding `branch_inquiry` calls (for 2:1 and 2:2), the Selections section grows:

```markdown
| 2:1 | SPAWN-CHILD | HALT-and-resume now SURVIVED; ready to implement | devdocs/inquiries/2026-05-19_15-30__implement_halt_and_resume/ | human | 2026-05-19 15:25 |
| 2:2 | SPAWN-CHILD | Update this inquiry's finding to reflect new verdict | devdocs/inquiries/2026-05-19_15-45__finding_update_mvl_error_handling/ | human | 2026-05-19 15:25 |
| 2:3 | REVISIT | Older /reflect kill condition may be overturned by new evidence | devdocs/inquiries/2026-05-02_*__reflect_older_inquiry/ (re-opened with new context) | human | 2026-05-19 15:25 |
```

Spawned Children section grows:

```markdown
| 2:1 | devdocs/inquiries/2026-05-19_15-30__implement_halt_and_resume/ | 2026-05-19 15:30 | from_nav_direction=2:1 |
| 2:2 | devdocs/inquiries/2026-05-19_15-45__finding_update_mvl_error_handling/ | 2026-05-19 15:45 | from_nav_direction=2:2 |
```

History keeps growing:

```markdown
- 2026-05-19 15:25 | human-selector | SELECT | 2:1 SPAWN-CHILD; 2:2 SPAWN-CHILD; 2:3 REVISIT (re-open prior inquiry)
- 2026-05-19 15:30 | branch_inquiry | SPAWN | from_nav_direction=2:1 → child at 2026-05-19_15-30__implement_halt_and_resume
- 2026-05-19 15:45 | branch_inquiry | SPAWN | from_nav_direction=2:2 → child at 2026-05-19_15-45__finding_update_mvl_error_handling
- 2026-05-19 15:50 | (revisit operation) | REVISIT | 2:3 → re-opened older /reflect inquiry; new context appended to its _state.md
```

---

## What changed across the two runs (and what didn't)

### Files

| File | Run 1 | Run 2 |
|---|---|---|
| `_branch.md` | Created at MVL+ time | Unchanged |
| `_state.md` | Updated at MVL+ time (status COMPLETE) | Unchanged by `/navigate` |
| `finding.md` | Created at CONCLUDE | Unchanged (a separate inquiry — 2:2 — handles updating it) |
| `docarchive/*` | Created at CONCLUDE | Unchanged |
| `navigation_observer_1.md` | Created on first `/navigate` | **Unchanged** — preserved as history |
| `navigation_observer_2.md` | (didn't exist) | **Created** — new sequential N=2 |
| `_nav.md` | Created with Run 1 entry | **Appended-to** with Run 2 entry; past entries preserved |
| `_branches.md` | Created on first nav-spawn | Updated on each spawn (existing behavior) |

### What is NOT overwritten

- `navigation_observer_<N>.md` files are canonical and never edited after creation.
- `_nav.md`'s Runs / Selections / Spawned Children / History sections are append-only.
- The Open Directions section can have its status fields updated (e.g., a row's status may change from OPEN to SPAWNED to SUPERSEDED), but the row itself isn't deleted.

### What CAN be updated in `_nav.md`

- Open Directions status fields (reflect current understanding of each direction's lifecycle).
- That's it. Everything else is append-only.

This append-only-with-status-updates pattern matches the project's `_state.md` pattern: history is preserved; current state is queryable.

---

## How Navigation ensures holistic coverage

The Navigator session's holism comes from **what it reads** and **what it doesn't**:

### What the Navigator session DOES read (warming protocol)

1. **Codebase orientation** — what the project IS at a structural level.
2. **Fundamentals** — what the project STANDS FOR (loop pattern; role allocation; Boundary disciplines; the SIC charter).
3. **Long-run trajectory** — where the project is heading.
4. **Recent trajectory** (last ~2 days of inquiries) — what's been on the user's mind.
5. **Prior-map overlay** — past navigation maps that may overlap.
6. **Target inquiry artifacts** — `_branch.md`, `_state.md`, `finding.md`, `docarchive/*` of the inquiry being navigated.
7. **(For runs 2+)** Source inquiry's prior `_nav.md` — what's already been enumerated, selected, spawned, deferred, rejected.
8. **(For runs 2+)** Source inquiry's `_branches.md` — all children, nav-triggered or not.
9. **(For runs 2+)** Findings of spawned children — new evidence to integrate.

### What the Navigator session DOES NOT read (session-isolation)

- Worker-session-internal context: transient reasoning, in-flight discipline outputs before they were saved, scratch notes, etc.
- The worker's session log.
- Anything that hasn't been persisted to a file the project recognizes.

This isolation is the failure-mode countermeasure for **Bloated Navigator** (per the audit's J8): worker context-bloat would distort the navigation map. By reading only persisted artifacts, the Navigator stays focused on the actual evidence and doesn't get pulled into the worker's local-detail concerns.

### Holism check at runtime

A Navigator session can confirm its read set is holistic by asking:

- **Coverage of project fundamentals?** ✓ (warmup files 1-3)
- **Coverage of recent context?** ✓ (last 2 days)
- **Coverage of target inquiry?** ✓ (all artifacts read)
- **Coverage of prior nav state in this folder?** ✓ (read `_nav.md` if present)
- **Coverage of spawned children's evidence?** ✓ (followed Spawned Children pointers)
- **Coverage of cross-inquiry related work?** Partial — only inquiries listed in target inquiry's `_state.md` Relationships are read. Future `_meta_state.md` (out of scope) would expand this.

If any of the first 5 read fails (e.g., warming files unreadable; target inquiry missing artifacts; prior `_nav.md` corrupt), the Navigator should HALT and flag — not produce a map from incomplete context.

### What about NEW evidence that arose between runs?

This is what re-runs are for. Run 2 reads everything run 1 read PLUS:
- The child inquiry findings spawned from run 1's selections.
- Any newly-completed inquiries that landed in the recent-trajectory window.

Run 2 doesn't supersede run 1; it ADDS to the cumulative state in `_nav.md`. The Navigator's job at run 2 is to integrate new evidence and produce ONLY directions that weren't already enumerated (or that are revived by new evidence). The "Excluded" section in run 2's map explicitly notes which run 1 directions are now superseded.

---

## Summary of the structure's properties

After two navigation runs, the inquiry folder shows:

```
devdocs/inquiries/2026-05-15_09-30__mvl_error_handling_mid_pipeline/
├── _branch.md            ← question + goal, written once at MVL+ creation
├── _branches.md           ← parent's index of children (3 children: 1 from 1:1, 2 from run 2)
├── _nav.md                ← navigation activity ledger (2 runs; 8 directions; 3 spawns; 1 revisit; full history)
├── _state.md              ← MVL+ pipeline state (COMPLETE)
├── finding.md             ← the verdict (will be updated separately by inquiry 2:2)
├── navigation_observer_1.md  ← canonical map from run 1; 5 directions
├── navigation_observer_2.md  ← canonical map from run 2; 3 directions; integrates child evidence
└── docarchive/            ← MVL+ discipline outputs (5 files)
```

The properties:

1. **Single-folder consolidation.** Anyone reading this folder can scan `_nav.md` in seconds to know all navigation activity in this inquiry's neighborhood.
2. **Information preservation.** Past navigation maps and decisions are never deleted; the file system IS the thinking history.
3. **Append-only history.** New runs add to `_nav.md` without overwriting prior entries.
4. **Sequential per-run files.** `navigation_observer_<N>.md` increments cleanly; readers know `_2` is later than `_1`.
5. **Holistic warming.** Navigator reads codebase + fundamentals + trajectory + target + prior nav state + child findings — bounded but comprehensive.
6. **Session isolation.** Navigator runs in a fresh isolated session each time; no context contamination from worker sessions.
7. **Cross-inquiry traceability.** `from_nav_direction:` flag links source inquiry's nav-direction to spawned-child inquiry; anyone can trace which spawn came from which navigation insight.
8. **Bloat prevention.** Files are organized per-folder rather than scattered; one canonical place per kind of content; `_nav.md` is OPTIONAL (only when navigation runs).

---

## Cross-references

- Per-folder organization rules: `enes/runtime_environment/folder_based.md`.
- 16-type taxonomy + 12 route fields (canonical): `homegrown/navigation/references/navigation.md`.
- Navigator session isolation invariant: `devdocs/inquiries/2026-05-10_01-30__metaloop_navigator_session_relationship/finding.md`.
- The audit of what's established about Navigation: `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`.
- The proposal that introduces this organization structure (the source of this story's design): `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md`.
