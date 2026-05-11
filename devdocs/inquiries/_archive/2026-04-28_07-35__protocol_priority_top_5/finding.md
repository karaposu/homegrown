---
status: active
refines: devdocs/inquiries/2026-04-27_21-14__rapid_fundamentals_improvement_focus/finding.md
impacted_by:
  - devdocs/inquiries/2026-04-27_21-38__loop_diagnose_git_self_maintenance/finding.md
  - devdocs/inquiries/2026-04-27_20-26__navigation_mvl_integration/finding.md
  - devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/finding.md
  - devdocs/inquiries/2026-04-28_00-25__resume_protocol_usecase/finding.md
---
# Finding: Protocol Priority Top 5

## Changes from Prior

**Prior path:** devdocs/inquiries/2026-04-27_21-14__rapid_fundamentals_improvement_focus/finding.md

**Revision trigger:** The user asked which other protocols feel most useful based on Homegrown's current goals and state.

**What's preserved:** The prior finding's main direction remains right: the current bottleneck is not more concepts, but turning observed failures into durable fundamentals improvement.

**What's changed:** The protocol priority is now more explicit. The next protocols should form a lifecycle: diagnose failures, run controlled branch experiments, enforce artifact contracts, review outcomes, and record Navigation selections.

**What's new:** This finding ranks the top five protocol priorities and explains why more exciting future protocols, such as meaningful traversal, Resume check, and autonomous selection, should wait.

**Migration:** Treat this as the protocol build-order guide for the next Homegrown fundamentals pass. It refines the earlier "self-maintenance loop" idea into concrete protocol candidates.

## Question

Based on Homegrown's current goals and implementation state, which five protocols would be most useful to build or clarify next, ranked by priority?

A good answer should give a ranked top five protocol list, explain why each protocol matters now, identify what problem each one solves, and distinguish immediate build priorities from future autonomy-facing protocols.

## Finding Summary

- **Rank 1: `loop_diagnose`.** A lightweight protocol/template for running MVL+ on correction chains: weak prior inquiry, user correction, improved later inquiry. This is the highest priority because it captures the best evidence Homegrown currently has.

- **Rank 2: `maintenance_branch_experiment`.** A protocol for turning evidence-backed maintenance candidates into git-backed fundamentals variants with baseline/candidate evaluation. This prevents source edits from becoming arbitrary.

- **Rank 3: `structural_integrity_and_telemetry_contract`.** A paired enforcement priority: structural checks for required artifact shape, plus standardized telemetry verdicts such as `PROCEED`, `FLAG`, and `RE-RUN`. This is the Primitive Regression Checker substrate and the prerequisite for Resume-style routing.

- **Rank 4: `retrospective_outcome_review`.** A protocol for revisiting patches, branches, findings, and protocol changes after later evidence appears, then deciding retain, revert, refine, supersede, or archive.

- **Rank 5: `navigation_selection_record`.** A protocol for recording Navigation maps, human-selected moves, selection rationale, resulting MVL+ inquiry, and later outcome. This collects the data needed for future meta-loop selection.

- **Not top five now:** `meaningful_traversal_assessment`, `resume_check`, protocol inventory hygiene, and autonomous selector. These matter, but they depend on telemetry, traces, or outcomes that do not exist yet.

## Finding

### 1. The Ranking Criterion

The ranking is based on current usefulness, not conceptual ambition.

Homegrown's current problem is not that it lacks ideas. It has MVL, MVL+, CONCLUDE, Navigation, Reflection, and a first meta-loop spec. It also has a clear long-term direction: quality awareness, self-maintenance, git-backed branch evolution, and eventually more autonomous traversal.

The current weakness is that Homegrown does not yet reliably convert observed failures into tested improvements. That is why the top protocols should create evidence, protect changes, enforce artifacts, and close feedback loops before they expand autonomy.

### 2. Rank 1 - `loop_diagnose`

`loop_diagnose` should be the first new protocol.

It should not be a new cognitive discipline. MVL+ remains the reasoning engine.

The protocol's job is to define the diagnostic input and output contract. Its input is a correction chain:

```text
weak prior inquiry
-> user correction or dissatisfaction
-> improved later inquiry
```

Its output should identify what the earlier run likely missed, what evidence supports that diagnosis, what confidence level is justified, which fundamentals may need change, and what evaluation gate would prove the change useful.

This ranks first because the user is already creating these correction chains. Without a protocol, that evidence stays informal.

### 3. Rank 2 - `maintenance_branch_experiment`

`maintenance_branch_experiment` should be second.

Git is the right substrate for executable variants of Homegrown's fundamentals, but git is not enough by itself. A branch records file state and diffs. It does not automatically record why the branch exists, what failure motivated it, what evidence would show improvement, or why the branch should survive.

This protocol should define:

- diagnostic finding that motivates the branch;
- branch name and baseline branch;
- files changed;
- risk class;
- evaluation inquiries or test cases;
- baseline-vs-candidate comparison;
- final outcome: merge, continue, stop, revert, or refine.

This ranks second because it turns diagnosis into controlled change without pretending the change is automatically good.

### 4. Rank 3 - `structural_integrity_and_telemetry_contract`

This should be one priority slot with two implementation parts.

The first part is a **Structural Integrity Contract**. It defines the required shape of outputs and specs: required sections, required files, path validity, no missing safeguards, and no stale references. This is where the missing `tools/structural_check.sh` problem belongs.

The second part is a **Telemetry Verdict Contract**. It standardizes routable verdicts across disciplines, such as `PROCEED`, `FLAG`, and `RE-RUN`.

These are different mechanisms, so implementation should keep them distinct. They share one priority slot because both are enforcement substrate.

This ranks third because it unlocks several future capabilities: Primitive Regression Checker, telemetry-aware Resume, stronger CONCLUDE checks, branch evaluation gates, and eventually quality-awareness calibration.

### 5. Rank 4 - `retrospective_outcome_review`

`retrospective_outcome_review` is the closure protocol.

Its job is to revisit a diagnostic finding, branch experiment, protocol change, or fundamentals patch after later evidence exists. It should decide whether the change should be retained, reverted, refined, superseded, or archived.

This matters because a source edit is not an improvement just because it was made. A branch is not superior just because it exists. A protocol is not useful just because it sounds coherent.

This ranks fourth because it depends on there being something to review, but it must exist before maintenance work can honestly call itself self-improvement.

### 6. Rank 5 - `navigation_selection_record`

`navigation_selection_record` should be fifth.

Navigation already exists as a discipline that maps possible next moves. The missing piece is the selection trace: which Navigation item was selected, why it was selected, what MVL+ inquiry it produced, and whether that move later proved useful.

This should not be an autonomous selector. It should record human or meta-loop v1 selections.

This ranks fifth because it prepares the meta-loop without overbuilding it. Future meaningful traversal and autonomous selection need real traces. This protocol starts collecting them.

### 7. Why The Deferred Protocols Are Not Top Five

`meaningful_traversal_assessment` is strategically important. It is the future signal that helps a meta-loop decide whether it is thinking productively or spinning. It should not outrank selection records now because it needs traces and outcomes before it can be calibrated.

`resume_check` is useful later. The Resume inquiry clarified that standalone Resume's unique value is telemetry-aware trust-gated continuation. It should wait until the telemetry verdict contract exists.

Protocol inventory hygiene is useful but lower leverage. The protocol folder does have ambiguity around active, dormant, and legacy files. That cleanup can be handled inside structural integrity work or as a small separate cleanup pass.

An autonomous selector is too early. It needs Navigation maps, recorded human selections, and later outcomes before it has evidence to learn from.

## Next Actions

### MUST

- **What:** Draft `homegrown/protocols/loop_diagnose.md`.
  **Who:** Homegrown protocol maintainer.
  **Gate:** Before the next correction-chain diagnostic run.
  **Why:** Captures the strongest current improvement evidence in a repeatable way.

- **What:** Draft `homegrown/protocols/maintenance_branch_experiment.md`.
  **Who:** Homegrown protocol maintainer or implementation agent.
  **Gate:** Before creating any git branch that changes Homegrown fundamentals based on a diagnostic finding.
  **Why:** Prevents branch evolution from becoming untracked source drift.

- **What:** Define the Structural Integrity Contract and Telemetry Verdict Contract.
  **Who:** Homegrown protocol maintainer.
  **Gate:** Before wiring Resume, claiming Primitive RC exists, or running branch comparisons as evidence.
  **Why:** Provides the checkable substrate for routing and regression detection.

### COULD

- **What:** Draft `homegrown/protocols/retrospective_outcome_review.md`.
  **Who:** Homegrown protocol maintainer.
  **Gate:** Before the first branch experiment or protocol patch is considered complete.
  **Why:** Gives maintenance work a retain/revert/refine closure path.

- **What:** Draft a `navigation_selection_record` section in the meta-loop spec or as a separate protocol.
  **Who:** Meta-loop maintainer.
  **Gate:** Before running five manual or meta-loop Navigation selections.
  **Why:** Collects the trace data needed for future meaningful traversal and selector calibration.

### DEFERRED

- **What:** Build `meaningful_traversal_assessment`.
  **Gate:** Revive after at least five Navigation selection records and at least three completed meta-loop traces.
  **Why (if revived):** Gives meta-loop stop/continue decisions a stronger evidence base.

- **What:** Build `resume_check`.
  **Gate:** Revive after standardized verdict telemetry exists across all MVL+ disciplines.
  **Why (if revived):** Lets Resume become a trust-gated continuation audit rather than a file-existence resume duplicate.

- **What:** Build an autonomous selector.
  **Gate:** Revive after at least ten Navigation maps have recorded human selections and later outcomes.
  **Why (if revived):** Gives the selector calibration data instead of invented priorities.

## Reasoning

Exploration found that current protocol inventory is thin. CONCLUDE is active and useful, Resume is dormant/future, and `unknown.md` looks legacy or unclear. Since CONCLUDE already works, it is not counted as a next-protocol priority.

Sensemaking resolved the central ambiguity around "useful." The ranking should not reward ambition alone. It should reward leverage at the current stage: evidence creation, controlled change, artifact enforcement, feedback closure, and preparation for future traversal.

Decomposition showed that the five surviving protocols form a lifecycle. `loop_diagnose` ingests evidence. `maintenance_branch_experiment` turns evidence into controlled source variants. `structural_integrity_and_telemetry_contract` checks artifacts and verdicts. `retrospective_outcome_review` decides whether changes worked. `navigation_selection_record` collects selection data for future meta-loop behavior.

Innovation tested alternative frames. A meta-loop-first ranking was tempting because the user's long-term concept is the controlled whirl through thinking space. It was rejected for current priority because it builds motion before quality. An enforcement-first ranking was also tempting because structural checks are missing. It was refined into rank 3 because enforcement matters, but correction-chain evidence is the stronger immediate learning source.

Critique confirmed the ranking. It killed the idea of creating a new full cognitive discipline now, because recent findings preserve MVL/MVL+ as the atomic cognitive method. It deferred Resume check because the telemetry prerequisite does not exist. It deferred meaningful traversal because trace data does not exist yet. It deferred autonomous selection because human-selection outcome data does not exist yet.

The final answer is therefore evidence-first. Homegrown should build protocols that let it learn from its own use before it builds protocols that let it move more autonomously.

## Open Questions

### Monitoring

- After three `loop_diagnose` runs, check whether they produce concrete, evidence-backed maintenance candidates. If not, the protocol is too vague.

- After the first branch experiment, check whether baseline-vs-candidate comparison is actually possible without excessive manual interpretation.

- After five Navigation selection records, check whether selected moves produced useful follow-up MVL+ inquiries.

### Blocked

- `resume_check` is blocked until standardized verdict telemetry exists across MVL+ disciplines.

- Autonomous selector design is blocked until Navigation selection records and outcomes exist.

### Research Frontiers

- It remains open whether structural integrity and telemetry should be one protocol file or two linked files.

- It remains open what exact evidence should count as branch superiority for cognitive fundamentals.

### Refinement Triggers

- Reopen this ranking if a real branch experiment shows that structural checks must come before branch protocol work.

- Reopen this ranking if meta-loop usage accelerates before self-maintenance protocols exist.

- Reopen this ranking if correction-chain diagnosis fails to produce useful maintenance candidates after three attempts.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ based on our goals and current state, what other protocol feels like most useful? give me top 5 based on priority of usefulness
```

</details>
