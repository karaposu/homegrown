# /navigator-refresh - Navigator Session Refresh

Read recent project developments since a freshness anchor and produce a compact sync brief for a previously warmed Navigator session.

This is a Navigation warm-up support routine. It is not full warm-up, not Navigation itself, not route selection, and not materialization.

Use this when a session was already warmed up, then became stale because another session or later work changed the project.

## Additional Input/Instructions

$ARGUMENTS

---

## When To Use

Use this when:

- a Navigator session was already warmed with `navigator-warmup1.md`, `navigator-warmup2.md`, and `navigator-warmup3.md`;
- a prior `devdocs/archaeology/` output, current-state brief, or `devdocs/navigation/*.md` map exists;
- project state changed after that warm-up or Navigation map;
- the user wants the stale session to answer a new Navigation question without rerunning full warm-up.

Do not use this when:

- no baseline warm-up, current-state brief, or prior Navigation map exists;
- the project/source boundary changed globally;
- the previous warm-up was clearly wrong or too thin;
- the task is a narrow file edit that does not need Navigation;
- the task is causal diagnosis; use `homegrown/protocols/loop_diagnose.md`;
- the task is after-use judgment; use `homegrown/protocols/outcome_review.md`;
- the task is turning a decision into files; use `homegrown/protocols/artifact_materialization.md`.

If the baseline is missing or globally stale, stop and recommend full warm-up:

```text
navigator-warmup1 -> navigator-warmup2 -> navigator-warmup3 -> post-v3 prior-map overlay
```

---

## Inputs To Identify

Before reading recent files, identify:

```yaml
refresh_scope: project, artifact set, codebase, or thinking-state being refreshed
freshness_anchor: prior warm-up output, current-state brief, Navigation map, timestamp, materialization trace, finding, or user-provided source
target_navigation_question: what the refreshed Navigator is expected to answer next
source_authority: user request, finding, prior Navigation map, materialization trace, outcome review, or explicit path
output_mode: save | print_only
```

Accepted freshness anchors:

- `devdocs/archaeology/project_summary.md`
- `devdocs/archaeology/project_direction_architecture.md`
- a current-state brief under `devdocs/navigation_context/`
- a prior `devdocs/navigation/*.md` map
- a multi-resolution `_frontier.md`
- an explicit user-provided timestamp or file path
- a materialization trace or finding that changed project state

If multiple anchors are plausible, choose the latest anchor that actually represents the stale session's known state. Do not choose the latest file merely because it is latest.

---

## Read Rules

Read only enough to update the stale session's context. This is a delta refresh, not a new full archaeology pass.

### Always Read

- the freshness anchor;
- the user's current refresh request;
- recent relevant `devdocs/inquiries/*/finding.md` files since the anchor;
- recent `devdocs/navigation/*.md` files since the anchor;
- changed Navigation-owned files under `homegrown/navigation/`;
- changed Navigation-relevant protocols or contracts under `homegrown/protocols/` and `homegrown/contracts/`;
- recent materialization traces under `devdocs/materializations/` when they affect Navigation;
- recent outcome reviews when they exist and affect route quality.

### Read When Triggered

Read `docarchive/` discipline outputs only when:

- the finding explicitly depends on critique kills, refinements, or discipline failure details;
- the user asks for discipline-level evidence;
- a recent correction says the final finding hid an important failure mode.

Read archived inquiries only when:

- a current active finding points to them;
- the stale Navigation map depends on them;
- a recent route was superseded by archived-to-active movement.

### Supporting Signals

Use file tree, file dates, and `git status --short` as supporting clues when available.

Do not treat git status as source authority by itself. It says what changed on disk, not why the change matters.

---

## Authority And Freshness Rules

Classify each recent item by authority:

```text
user correction or explicit instruction
  > active contract/protocol/source file
  > active finding.md
  > materialization trace or outcome review
  > Navigation map or _frontier.md route snapshot
  > archived discipline output
```

Dates are chronology, not authority.

Recent does not automatically mean current.

Old does not automatically mean stale.

A prior Navigation map is evidence of route state at that time. It is not current authority unless refreshed against current findings and files.

---

## Procedure

### Step 1 - Establish Refresh Boundary

Record:

```yaml
refresh_scope:
freshness_anchor:
anchor_reason:
target_navigation_question:
source_authority:
```

If the boundary cannot be stated, do not continue. Recommend full warm-up.

### Step 2 - Read The Anchor

Read the anchor and extract:

- what the stale session likely knew;
- active routes, blockers, and continuation notes;
- assumptions that may now be stale;
- the last known current frontier;
- missing-context warnings already recorded.

### Step 3 - Discover Recent Candidate Changes

Scan for recent changes that may affect Navigation.

Default Homegrown read set:

- active inquiry `finding.md` files created or changed since the anchor;
- `devdocs/navigation/*.md`;
- `homegrown/navigation/SKILL.md`;
- `homegrown/navigation/references/navigation.md`;
- `homegrown/navigation/warmup/*.md`;
- `homegrown/protocols/branch_inquiry.md`;
- `homegrown/protocols/artifact_materialization.md`;
- `homegrown/protocols/multi_resolution_navigation.md`;
- `homegrown/protocols/navigation_context_intake.md`;
- `homegrown/protocols/outcome_review.md`;
- `homegrown/protocols/loop_diagnose.md`;
- `homegrown/contracts/alignment_control.md`;
- recent materialization traces and outcome reviews when present.

Adjust the read set to the refresh scope. Do not read unrelated files just because they are new.

### Step 4 - Classify Deltas

For each relevant recent item, classify it as one or more:

```text
new authority
protocol or contract change
new Navigation artifact
route-state change
stale assumption
supersession or correction
new blocker
new unlock
materialized artifact
outcome evidence
irrelevant to this refresh
```

For each included delta, write why it matters for Navigation.

If a delta is recent but not Navigation-relevant, either omit it or list it briefly under skipped sources.

### Step 5 - Decide Whether Refresh Is Sufficient

Refresh is sufficient when:

- the anchor is valid;
- the recent deltas are bounded;
- conflicts can be explained;
- the sync brief can tell the stale session what changed;
- missing context is explicitly named.

Escalate to full warm-up when:

- no valid anchor exists;
- the project/source boundary changed globally;
- recent deltas are too broad to summarize safely;
- active findings or protocols conflict and cannot be resolved from the refresh read set;
- the prior warmed context was already wrong;
- the resulting Navigation answer would likely be misleading.

If escalation is needed, still write a short note explaining why refresh was insufficient.

### Step 6 - Produce The Sync Brief

Default saved path:

```text
devdocs/navigation_context/<YYYY-MM-DD_HH-MM__navigator_refresh_<slug>/sync_brief.md
```

If `-n` or `print_only` is passed, print the brief in the conversation and state that no durable brief was created.

Use this template:

```markdown
# Navigator Sync Brief: <name>

## Freshness Anchor
[Path, timestamp, or source. Explain why this anchor represents the stale session's known state.]

## Refresh Boundary
[What is being refreshed and what is out of scope.]

## Target Navigation Question
[The question the refreshed Navigator is expected to answer next.]

## Read Set
| Source | Why Read | Authority | Result |
| --- | --- | --- | --- |

## Recent Authoritative Changes
[New findings, user corrections, active protocol/contract changes, or materialized files that should update the stale session.]

## Changed Operational Files
[Navigation, protocol, contract, runner, or warm-up files whose changes affect behavior.]

## New Navigation-Relevant Artifacts
[New Navigation maps, _frontier.md ledgers, sync briefs, materialization traces, or outcome reviews.]

## Stale Or Superseded Assumptions
[What the stale session may still believe that is now wrong, incomplete, or lower-confidence.]

## Open Gates And Blockers
[Current blockers, missing artifacts, unresolved decisions, and gates that affect next movement.]

## Navigation Impact
[How the new information should change the next Navigation map or prior route states.]

## Missing Context And Confidence Limits
[What was not read, what remains uncertain, and whether Navigation can proceed.]

## Handoff Prompt
```text
Read this Navigator Sync Brief before answering.
Use it to refresh the warmed context you already hold.
Treat prior Navigation maps as stale where this brief says so.
Then produce or update the Navigation map for: <target_navigation_question>.
Do not select a final route unless explicitly asked.
Preserve the missing-context warnings from this brief.
```

## Refresh Outcome
PASS | PARTIAL | ESCALATE_TO_FULL_WARMUP
```

### Step 7 - Handoff

If the brief is saved, tell the user the path.

If the brief is meant for another session, make the handoff prompt explicit and short enough to paste.

If Navigation should run immediately in the same session, run Navigation only after the brief exists or is printed.

---

## Validation

Before completing refresh, check:

- Is the freshness anchor named?
- Is the read set explicit?
- Are recent authoritative changes separated from mere recent files?
- Are stale or superseded assumptions named?
- Are Navigation impacts stated as route/context effects, not final selections?
- Are missing context and confidence limits preserved?
- Is the handoff prompt usable by an idle Navigator session?
- Does the result avoid rerunning full warm-up unless escalation is justified?

If an automated checker exists, run it. If no checker exists, record manual validation.

---

## Failure Modes

### False Freshness

The brief says the session is refreshed but only read filenames or dates.

Correction: read the relevant findings/files and explain authority plus Navigation impact.

### Recentness Bias

The newest file is treated as most authoritative.

Correction: apply the authority order. Dates are evidence, not authority.

### Hidden Full Warm-Up

Refresh turns into v1/v2/v3 again without saying so.

Correction: stop and either keep the refresh bounded or explicitly escalate to full warm-up.

### Navigation Collapse

The refresh brief selects the next route.

Correction: describe Navigation impact and route-state changes. Selection belongs to the user, MVL/MVL+, a selector protocol, or materialization request.

### Archive Drag

Refresh reads large `docarchive/` trees by default.

Correction: read archived discipline outputs only when triggered by a concrete evidence need.

### Stale Route Preservation

An old Navigation map's routes are carried forward unchanged.

Correction: classify old routes as open, active, blocked, done, stale, superseded, or unknown based on current evidence.

### Overloaded `_frontier.md`

Refresh writes global session state into a multi-resolution route ledger.

Correction: keep `_frontier.md` scoped to child-map expansion. Use a sync brief for session freshness.

---

## Short Version

Before asking an idle Navigator session "what next?", answer:

```text
What did that session last know?
What changed since then?
Which changes are authoritative?
Which old assumptions are now stale?
Which routes, blockers, or unlocks changed?
Can a compact sync brief refresh the session?
Or does this need full warm-up again?
```

Then produce the sync brief and hand it to Navigation.

