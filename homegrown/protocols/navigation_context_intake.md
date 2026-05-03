> **Loading note.** This file is loaded by a human, Navigation, MVL/MVL+, materialization work, or a future runner before project-level Navigation needs current context. Read it in full before executing NAVIGATION_CONTEXT_INTAKE. This protocol prepares a Navigation-ready current-state brief. It does not enumerate next moves, select a move, create branches, materialize files, or review outcomes.

---

# NAVIGATION_CONTEXT_INTAKE - Navigation Warm-Up Protocol

NAVIGATION_CONTEXT_INTAKE is the protocol for warming up a session before project-level Navigation work.

Plain-language alias: **Navigation warm-up**.

Its job is to load and organize the session's Navigation context once, before Navigation starts making movement maps.

```text
1. Start a Navigation-capable session.
   Example: the user wants to reason about "what should Homegrown do next?"

2. Define the warm-up scope.
   What project, artifact set, codebase, or thinking-state should this session understand?

3. Identify the authorized sources.
   What files, findings, traces, branches, or user-provided paths may be read?

4. Classify the source profile.
   Example: codebase, artifact_set, project_state, business_strategy, mixed.

5. Select the intake mode for this session.
   Example: compact, standard, deep, or full.

6. Consume the selected context through the staged warm-up ladder.
   Stage 1: orientation summary.
   Stage 2: structural map.
   Stage 3: behavior / movement / evidence traces.

7. Produce or hold a current-state brief for the session.

8. Navigation uses that warmed context during the session.
```

Navigation remains the discipline that enumerates possible next moves. This protocol prepares the session state Navigation reads. It is not meant to rerun for every Navigation question inside the same warmed session unless the context boundary changes.

---

## Purpose

Use NAVIGATION_CONTEXT_INTAKE to:

- reduce the user's burden of manually telling the AI what context matters;
- make project-level Navigation repeatable across sessions;
- preserve a record of what was read and what was missing;
- avoid finding-only false confidence;
- control context cost with staged read modes;
- reuse proven codebase warm-up commands when the source is a codebase;
- support project, artifact, and thinking-state warm-up for non-code Homegrown artifacts;
- produce a current-state brief that Navigation can consume.

---

## Non-Goals

NAVIGATION_CONTEXT_INTAKE does not:

- produce the Navigation map;
- choose or rank final next moves;
- create a branch;
- materialize files;
- decide whether a prior finding is true;
- replace `homegrown/protocols/artifact_materialization.md`;
- replace `homegrown/protocols/outcome_review.md`;
- replace Loop Diagnose or Reflect;
- create standalone project-state warm-up commands in v1;
- rerun for every small Navigation question inside an already warmed session.

---

## When To Use

Use this protocol once near the start of a session when that session will need project-level Navigation.

Use it again only when the session's context boundary changes: new source set, different project, major new evidence, stale state, or a failed Navigation map caused by missing context.

Use this protocol when:

- a session starts around Homegrown next-direction work;
- project-level Navigation needs recent state;
- a completed finding contains several possible follow-ups;
- a branch, materialization, or outcome review may affect next movement;
- current project state spans multiple inquiry folders or artifact types;
- source context is not already loaded in the session;
- a Navigation run failed or felt under-contextualized.

Do not use this protocol when:

- the current task is narrow and does not need Navigation;
- the session is already warmed and the next question uses the same context boundary;
- a single known artifact should be edited directly under `artifact_materialization.md`;
- a failure needs causal diagnosis from a correction chain; use `homegrown/protocols/loop_diagnose.md`;
- an artifact has already been used and needs after-use review; use `homegrown/protocols/outcome_review.md`.

---

## Input Contract

Normalize every session warm-up into:

```yaml
session_purpose:
navigation_goal:
source_authority:
source_paths:
  - path
source_anchor:
source_profile: codebase | artifact_set | project_state | business_strategy | mixed | other
intake_mode: compact | standard | deep | full
recency_window:
related_paths:
  - path
must_include:
  - path-or-source-kind
must_exclude:
  - path-or-source-kind
context_budget:
current_state_brief_path:
trace_path:
follow_up_review_gate:
```

Field meanings:

- `session_purpose` is why this session needs Navigation-ready context.
- `navigation_goal` is what Navigation should help the warmed session decide or see.
- `source_authority` explains why this intake is allowed: user instruction, finding, branch, outcome review, materialization trace, or protocol need.
- `source_paths` are the starting files or folders.
- `source_anchor` is the exact section, quoted phrase, finding bullet, or user statement that triggered intake.
- `source_profile` identifies what kind of source is being warmed up.
- `intake_mode` controls depth and context cost.
- `recency_window` defines how far back recent context should scan, if applicable.
- `related_paths` are known relevant prior files or folders.
- `must_include` lists sources the user or protocol requires.
- `must_exclude` lists sources to avoid.
- `context_budget` records any token/time limit.
- `current_state_brief_path` records where the brief is saved when a file is created.
- `trace_path` records where the intake trace is saved when a trace is created.
- `follow_up_review_gate` records when to check whether the intake helped.

If `source_profile` or `intake_mode` cannot be selected with confidence, use `mixed` and `standard`, then record the uncertainty in the brief.

---

## Source Profiles

### `codebase`

Use when the source is primarily source code: an app, CLI, library, service, package, harness, adapter, or runnable implementation.

For codebases, reuse the existing codebase archaeology sequence when available:

```text
arch-small-summary
  -> arch-intro
  -> arch-traces-2
```

Known source command files:

```text
/Users/ns/Desktop/projects/vibe-driven-development/commands/arch-small-summary.md
/Users/ns/Desktop/projects/vibe-driven-development/commands/arch-intro.md
/Users/ns/Desktop/projects/vibe-driven-development/commands/arch-traces-2.md
```

These commands are code-specific. Do not use their code assumptions for non-code artifacts.

### `artifact_set`

Use when the source is a bounded group of artifacts: findings, protocols, contracts, notes, traces, outcomes, branch records, or documentation folders.

The key question is:

```text
What does this artifact set say, how is it structured, and what movement or evidence does it contain?
```

### `project_state`

Use when the source is the current state of Homegrown or another project across many artifacts.

This is the normal profile for "what should we do next?" over Homegrown.

It may read:

- recent inquiry `finding.md` files;
- relevant prior finding chains;
- `homegrown/protocols/`;
- `homegrown/contracts/`;
- materialization traces;
- outcome reviews;
- branch records;
- `docarchive/` discipline outputs when triggered;
- concept notes when they are relevant to active direction.

### `business_strategy`

Use when the source is specifically business, market, product, positioning, customer, or strategy material.

Do not use `business_strategy` as the general name for all non-code context. Homegrown's non-code state is wider than business.

### `mixed`

Use when Navigation needs both codebase and non-code project state.

For example:

```text
ARC harness code + Homegrown protocol findings + materialization traces
```

Run the codebase track for code and the project/artifact/thinking-state track for non-code artifacts. Preserve which evidence came from which profile.

### `other`

Use only when no listed profile fits. Explain why the source is different and which profile it is closest to.

---

## Intake Modes

Choose the lightest sufficient mode.

| Mode | Use When | Default Stages |
| --- | --- | --- |
| `compact` | Quick, low-risk orientation or low-stakes Navigation. | Stage 1 only. |
| `standard` | Normal project-level Navigation. | Stage 1 + Stage 2. |
| `deep` | Fundamentals, repeated confusion, correction chains, high-risk moves, or weak prior Navigation. | Stage 1 + Stage 2 + targeted Stage 3. |
| `full` | Rare global reset, major strategy scan, or broad state reconstruction. | Stage 1 + Stage 2 + broad Stage 3. |

### Compact Mode

Compact mode is finding-first, not finding-only.

Use it to get cheap orientation. It must include a confidence limit.

Typical reads:

- the triggering source;
- recent relevant `finding.md` files;
- a small stable protocol/context index when needed;
- explicit user-provided paths.

Escalate out of Compact when:

- the move affects a protocol, contract, runner, skill, benchmark, or shared schema;
- the source includes correction, contradiction, or repeated confusion;
- critique kills or refinements matter;
- outcome evidence matters;
- the session needs durable next-move guidance.

### Standard Mode

Standard mode is the default for project-level Navigation.

Typical reads:

- triggering source;
- recent relevant `finding.md` files;
- directly related prior findings;
- relevant protocols and contracts;
- active branch records;
- recent materialization traces;
- recent outcome reviews.

Standard mode should produce enough structure that Navigation can enumerate plausible next moves without asking the user to restate project history.

### Deep Mode

Use Deep mode when hidden context is likely to change the Navigation result.

Triggers:

- fundamentals-level decisions;
- correction chains;
- repeated user corrections;
- repeated weak Navigation;
- branches with unclear lineage;
- critique kills/refinements likely matter;
- protocol/materialization/outcome evidence affects the next move.

Additional reads:

- `docarchive/` discipline outputs;
- critique outputs and killed/refined candidates;
- branch lineage files;
- materialization traces;
- outcome reviews;
- older findings in the source chain.

### Full Mode

Use Full mode rarely.

Triggers:

- global Homegrown state reset;
- major strategy scan;
- cross-project Navigation;
- suspected stale state across many areas;
- explicit user instruction to spend context.

Full mode may scan broadly, but must record context budget and unresolved gaps. It should not imply total knowledge.

---

## Staged Warm-Up Ladder

Every source profile uses the same staged unlock shape:

```text
Stage 1 - Orientation Summary
Stage 2 - Structural Map
Stage 3 - Behavior / Movement / Evidence Traces
```

The stages are sequential because later stages require earlier orientation. Do not run Stage 3 when the session does not yet know what the source is and how it is structured.

### Stage 1 - Orientation Summary

Purpose: answer "what is this source/state about?" in plain language.

For any profile, Stage 1 should produce:

```yaml
source_kind:
plain_summary:
current_status:
working_or_active_parts:
in_progress_or_uncertain_parts:
who_or_what_uses_this:
why_it_matters_for_navigation:
confidence:
missing_context:
```

### Stage 2 - Structural Map

Purpose: answer "how is this source/state organized?"

For any profile, Stage 2 should produce:

```yaml
main_components:
relationships:
authority_sources:
dependencies:
active_decisions:
open_gates:
known_conflicts:
stable_boundaries:
navigation_relevant_structure:
confidence:
missing_context:
```

### Stage 3 - Behavior / Movement / Evidence Traces

Purpose: answer "how does this source/state behave or move over time?"

For codebases, Stage 3 follows runtime behavior.

For project/artifact/thinking-state sources, Stage 3 follows movement and evidence behavior:

- decisions created, refined, superseded, or killed;
- branch creation and lineage;
- materialization handoffs;
- outcome review deltas;
- correction chains;
- protocol use and failure/recovery;
- repeated alignment signals;
- cross-cutting mechanisms.

Stage 3 should produce:

```yaml
trace_name:
trace_type:
entry_point:
path_or_movement:
evidence_used:
decision_or_state_change:
failure_or_risk_path:
observable_effect:
navigation_implication:
confidence:
```

---

## Profile-Specific Stage Guidance

### Codebase Track

Use when `source_profile: codebase` or the code portion of `mixed`.

Map stages to the existing codebase archaeology commands:

| Stage | Command |
| --- | --- |
| Stage 1 - Orientation Summary | `arch-small-summary` |
| Stage 2 - Structural Map | `arch-intro` |
| Stage 3 - Behavior Traces | `arch-traces-2` |

The codebase track must be grounded in actual code behavior, not documentation claims.

If outputs from these commands already exist and are fresh enough for the Navigation goal, read them instead of rerunning. Record freshness assumptions.

If the codebase is unknown and Stage 3 is requested, first run or reconstruct Stage 1 and Stage 2. Stage 3 without structure is invalid.

### Project / Artifact / Thinking-State Track

Use when `source_profile: artifact_set`, `project_state`, `business_strategy`, or the non-code portion of `mixed`.

Stage 1 should answer:

- what the artifact set or project state is about;
- what has recently changed;
- what is currently active;
- what is stable;
- what seems unresolved;
- why this matters for Navigation.

Stage 2 should map:

- authoritative findings;
- refined/superseded/corrected chains;
- protocols and contracts;
- branches and branch sources;
- materialization traces;
- outcome reviews;
- open gates and blockers;
- dependencies between next moves.

Stage 3 trace categories:

| Trace Type | What It Follows |
| --- | --- |
| `decision_lifecycle` | A decision from question to finding to later refinement/supersession. |
| `evidence_transformation` | Evidence from discipline output to finding to later use. |
| `branch_movement` | A source anchor becoming a child inquiry and later result. |
| `materialization_handoff` | A selected decision becoming concrete files under `artifact_materialization.md`. |
| `outcome_delta` | Expected effect compared with observed downstream behavior. |
| `failure_recovery_correction` | User correction, weak prior result, diagnose/revision, and improved state. |
| `cross_cutting_protocol` | A protocol or contract affecting multiple inquiries or artifacts. |

### Business Strategy Subprofile

Use `business_strategy` only when the source is genuinely business or strategy material.

Stage 1 should identify:

- offer, market, customer, positioning, constraints, and strategic question.

Stage 2 should map:

- value proposition;
- customer/user segments;
- competitive frame;
- constraints and risks;
- dependencies and open bets.

Stage 3 should trace:

- strategic decision lifecycle;
- evidence behind bets;
- invalidation or confirmation signals;
- movement options and gates.

---

## Current-State Brief

The output of this protocol is a current-state brief.

Default path when saved:

```text
devdocs/navigation_context/<YYYY-MM-DD_HH-MM__slug>/current_state_brief.md
```

For low-risk work, the brief may be printed in the conversation instead of saved. If not saved, still state that no durable brief was created.

Use this structure:

```markdown
# Current-State Brief: <name>

## Navigation Goal
## Read Set
## Intake Classification
## Orientation Summary
## Structural Map
## Movement / Evidence Traces
## Stable Authorities
## Recent Changes
## Open Gates And Blockers
## Movement Signals
## Missing Context And Confidence Limits
## Recommended Navigation Prompt
## Handoff
```

### Required Fields

`Read Set` must list what was read and why.

`Intake Classification` must include:

```yaml
source_profile:
intake_mode:
stages_completed:
context_budget:
```

`Missing Context And Confidence Limits` is mandatory. If no meaningful context is missing, say why.

`Recommended Navigation Prompt` should be phrased so Navigation can consume the brief directly.

---

## Handoff To Navigation

After the session is warmed, Navigation should use the current-state brief as shared session context:

```text
Use this current-state brief as source context.
Enumerate possible next directions.
Do not select automatically.
Preserve missing-context warnings from the brief.
If a direction requires files, route selection through artifact_materialization.
If a direction requires a child inquiry, route selection through branch_inquiry.
```

Do not rerun intake for each follow-up question inside the same warmed session. Rerun only when the context boundary changes or the brief becomes stale.

Navigation output remains separate from the current-state brief.

---

## Trace

For Standard, Deep, or Full intake, create a trace when practical.

Default path:

```text
devdocs/navigation_context/<YYYY-MM-DD_HH-MM__slug>/intake_trace.md
```

Minimum trace:

```yaml
session_purpose:
context_boundary:
source_authority:
source_anchor:
source_profile:
intake_mode:
stages_completed:
read_set:
sources_skipped:
reason_for_skips:
brief_path:
validation:
deviations:
outcome: PASS | PARTIAL | FAIL
follow_up_review_gate:
```

Compact mode may inline the trace in the current-state brief.

---

## Outcome Review Gate

Set `follow_up_review_gate: after_first_use` when the brief is used to choose a move.

After the selected move is used, run or route to:

```text
homegrown/protocols/outcome_review.md
```

Review question:

```text
Did NAVIGATION_CONTEXT_INTAKE reduce user context-steering burden or improve Navigation quality?
```

Also ask:

- did the chosen source profile fit;
- did the mode read too much or too little;
- did missing-context warnings predict downstream confusion;
- did the brief help Navigation produce better movement options;
- should profile rules or stage triggers change.

---

## Extraction Gates

Do not create standalone project-state warm-up commands in v1.

Future extraction candidates include:

```text
project-state-summary
project-state-structure
project-state-traces
context-summary
context-structure
context-traces
```

Extract only when all are true:

- at least 3 dogfood uses completed;
- the stage procedure is stable;
- repeated use shows user benefit;
- extraction will not duplicate this protocol's source-profile, mode, read-set, trace, or handoff invariants;
- `navigation_context_intake.md` remains the controller entry point.

---

## Failure Modes

- **Finding-only false completeness:** Compact mode reads findings and misses critique, outcome, or trace evidence.
- **Codebase overgeneralization:** code archaeology commands are applied to non-code artifacts as if they were source code.
- **Business overnaming:** all project/artifact/thinking-state context is called business context.
- **Navigation collapse:** Navigation absorbs context intake and failure attribution becomes blurry.
- **Context bloat:** Standard or Deep mode reads too much when Compact would suffice.
- **Trace omission:** intake influences Navigation but no read set or confidence limit is recorded.
- **Stage skipping:** Stage 3 traces are created before Stage 1 and Stage 2 establish orientation and structure.
- **Premature command family:** standalone context commands are created before dogfood proves stable stages.
- **Authority drift:** recent artifacts are treated as more authoritative than stable protocols or corrected findings.
- **Outcome amnesia:** no one checks whether the brief improved Navigation after use.

---

## Short Version

At session warm-up, answer:

```text
What is this session trying to navigate?
What context boundary is in scope?
What source profile is this?
Which intake mode is enough for this session?
What must be read?
What can be skipped?
Which stages are needed: orientation, structure, traces?
What current-state brief will Navigation use during the session?
What confidence limits remain?
When will outcome_review check whether this helped?
```

Then consume the selected context, produce or hold the current-state brief, and let Navigation use that warmed context during the session.
