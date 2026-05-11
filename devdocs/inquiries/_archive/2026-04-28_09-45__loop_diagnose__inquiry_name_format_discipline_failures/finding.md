---
status: active
---
# Finding: Loop Diagnose - Inquiry Name Format Discipline Failures

## Question

Using `homegrown/protocols/loop_diagnose.md` as framing, and using the archived outputs from `devdocs/inquiries/2026-04-27_20-03__inquiry_name_format_alternatives`, especially its Critique output, what did each discipline appear to fail at or leave underdeveloped, and what might that suggest about the discipline fundamentals?

The goal is to diagnose the available discipline outputs: Sensemaking, Innovation, Critique, and CONCLUDE. The answer must distinguish evidence-backed failures from weaker hypotheses, use Critique's verdicts as the main evaluator signal, identify possible shortcomings in discipline fundamentals, and propose narrow maintenance candidates with evaluation gates.

## Finding Summary

- The original inquiry did not visibly fail. Its Critique output marked the naming recommendation as usable and selected `YYYYMMDD-HHMM__slug` as the clean survivor.

- The strongest diagnosis is not "each discipline failed." The stronger diagnosis is that the loop did not extract discipline-feedback telemetry from a successful run.

- Sensemaking likely needs better handoff telemetry for design and protocol questions. It clarified the name-format problem, but it did not explicitly pass downstream thresholds such as when folder count, scan pressure, or future sequence IDs should change the decision.

- Innovation likely needs a stronger gate schema for deferred or future candidates. It generated useful alternatives, but future options such as sequence-based naming need adoption conditions, test gates, and reconsideration triggers.

- Critique succeeded at candidate evaluation, but it lacked an optional diagnostic mode. It did not produce upstream signals about framing quality, handoff completeness, candidate coverage, or gate quality because the original task was not a discipline-maintenance task.

- CONCLUDE succeeded at producing the user-facing recommendation, but diagnostic findings need an extra "discipline lessons" section so maintenance signals do not disappear after the loop closes.

- The recommended change is an optional archive-based Discipline Feedback Extraction protocol. It should read existing docarchive outputs, especially Critique, and produce confidence-scored maintenance hypotheses. It should not add universal self-marks to each discipline and should not create hard routing.

## Finding

This is a partial LOOP_DIAGNOSE-style result. The protocol in `homegrown/protocols/loop_diagnose.md` is strongest when it can compare a prior run against a corrected run. Here, only one completed inquiry was supplied: `devdocs/inquiries/2026-04-27_20-03__inquiry_name_format_alternatives`. Because there is no corrected inquiry, the answer can identify likely underdeveloped fundamentals, but it should not claim proven root cause.

The old inquiry answered its original question: what inquiry folder naming format should be preferred. Its Critique output evaluated alternatives and selected `YYYYMMDD-HHMM__slug`. The final finding followed that verdict. That means the archived Critique output is evidence that the old run was usable by its own criteria, not evidence that the disciplines failed.

The missing layer is process learning. The archive contains enough material for a human or later diagnostic pass to ask what the disciplines might have missed, but the original loop did not package that material into discipline-maintenance signals. That is the main gap.

### Sensemaking

Sensemaking did not fail its native task. It clarified the problem space well enough for Innovation to generate alternatives and for Critique to evaluate them.

The underdeveloped fundamental is handoff precision. In a design or protocol inquiry, Sensemaking should make unresolved thresholds explicit when those thresholds can affect later decisions. In this case, useful handoff fields would have included:

- when folder count becomes high enough that compact naming matters more,
- when human readability should outweigh byte compactness,
- when runner-owned sequence IDs become worth adopting,
- what evidence would change the preferred default.

This is a medium-confidence diagnosis. The archive supports it, but there is no corrected run proving that a better Sensemaking handoff would have changed the outcome.

### Innovation

Innovation did not fail coverage. It generated enough candidate formats and produced the option that Critique selected.

The underdeveloped fundamental is conditional-candidate handling. Innovation can propose future or deferred options, but those options should carry adoption conditions. For example, `YYYYMMDD-NN__slug` is a plausible future format if a runner owns same-day sequence numbering. The archive would be stronger if that candidate had a clear "why not now," "what would make it viable," and "how to test it" block.

This is a medium-confidence diagnosis. It is a real improvement target, but it does not show that the original recommendation was wrong.

### Critique

Critique did not fail as candidate evaluation. It did what the original inquiry needed: extracted dimensions, tested candidates, killed weak options, and selected a survivor.

The underdeveloped fundamental is diagnostic mode. When the task is explicitly about loop maintenance or discipline quality, Critique should optionally output upstream signals. Those signals could include:

- whether Sensemaking's framing was adequate,
- whether unresolved assumptions were handed downstream,
- whether Innovation's candidate set was broad enough,
- whether future candidates had adoption gates,
- whether residual ambiguity came from the problem, the candidate set, or the evaluation frame.

This is a medium-high-confidence diagnosis because the absence is directly visible: the old Critique output evaluates naming candidates, not the upstream disciplines.

The important constraint is that these upstream signals should not become authority marks. They should be evidence for later diagnosis, not commands the runner must obey.

### CONCLUDE

CONCLUDE did not fail at the original user-facing answer. It produced a recommendation consistent with Critique.

The underdeveloped fundamental is diagnostic residue. Ordinary findings should stay focused, but diagnostic findings need a place to preserve discipline lessons. Without that section, maintenance signals are buried in docarchive files and have to be rediscovered manually.

This is a medium-confidence diagnosis. It applies to diagnostic findings, not every finding.

### System-Level Diagnosis

The strongest system-level gap is the absence of an optional Discipline Feedback Extraction protocol. This protocol would not modify old archives and would not force each discipline to self-report `PROCEED`, `FLAG`, or `RE-RUN`.

Instead, it would run after a completed inquiry when the user asks a maintenance question. It would read `_branch.md`, `_state.md`, `finding.md`, and `docarchive/*`, then produce:

- the native outcome constraint,
- per-discipline observed gaps,
- evidence strength,
- confidence level,
- maintenance candidates,
- evaluation gates,
- what not to change yet.

This directly matches the user's point: existing docarchive outputs can already be analyzed. The missing piece is a disciplined way to analyze them, not extra marks attached to every upstream discipline run.

Diagnostic verdict: partial but actionable. It is partial because there is no corrected inquiry to compare against. It is actionable because the surviving changes are narrow, optional, and gated.

## Next Actions

### MUST

- **What:** Treat this as an archive-based diagnostic, not as proof that the original inquiry failed.
  **Who:** Future MVL/MVL+ loop users and maintainers.
  **Gate:** Applies immediately to this finding and any follow-up on the same old inquiry.
  **Why:** Prevents overcorrecting a successful run.

- **What:** Define or use an optional Discipline Feedback Extraction protocol for discipline-maintenance questions.
  **Who:** `homegrown/protocols/` or the loop-maintenance protocol area.
  **Gate:** Test it on 3 completed inquiries before promoting it as a recurring protocol.
  **Why:** Converts existing docarchive outputs into maintenance hypotheses without adding self-marks or hard routing.

- **What:** Add adoption gates for deferred Innovation candidates.
  **Who:** Innovation discipline maintenance.
  **Gate:** Try on the next 5 inquiries that include future, deferred, or conditional recommendations.
  **Why:** Prevents vague "future maybe" ideas from entering findings without clear triggers.

### COULD

- **What:** Add optional Sensemaking handoff telemetry for design, protocol, and diagnostic inquiries.
  **Who:** Sensemaking discipline maintenance.
  **Gate:** Try on the next 3 design/protocol inquiries; keep only if Innovation or Critique explicitly uses the handoff.
  **Why:** Preserves unresolved thresholds that downstream disciplines need.

- **What:** Add optional Critique upstream-signal mode for diagnostic or meta-maintenance tasks.
  **Who:** Critique discipline maintenance.
  **Gate:** Try on the next 3 diagnostic inquiries; keep only if later findings can cite the signals directly.
  **Why:** Gives loop diagnosis stronger evidence while avoiding universal self-labels.

- **What:** Add a diagnostic lessons section to CONCLUDE outputs only for diagnostic findings.
  **Who:** CONCLUDE protocol maintenance.
  **Gate:** Use on the next 3 diagnostic findings; keep only if it prevents maintenance decisions from being buried in docarchive files.
  **Why:** Makes discipline-learning output visible without cluttering ordinary findings.

### DEFERRED

- **What:** Build an archive pattern index of recurring discipline gaps.
  **Gate:** Reopen after 3-5 diagnostic findings exist.
  **Why (if revived):** A pattern index becomes useful only after there is enough evidence to distinguish recurring fundamentals issues from one-off artifacts.

- **What:** Rewrite discipline fundamentals broadly based on this case.
  **Gate:** Reopen only if multiple diagnostics show the same failure mode, or if a corrected inquiry proves a specific discipline change would have prevented the issue.
  **Why (if revived):** Broad rewrites need stronger evidence than one successful inquiry archive.

## Reasoning

The hard claim "Sensemaking failed" was killed because the old Critique did not reject Sensemaking's framing. The refined claim survives: Sensemaking may need explicit threshold handoff in design/protocol inquiries.

The hard claim "Innovation failed" was killed because the candidate set was broad enough for Critique to select a clean survivor. The refined claim survives: future or deferred candidates need adoption gates.

The hard claim "Critique failed" was killed because Critique succeeded at candidate evaluation. The refined claim survives: Critique lacks an optional upstream-signal mode for diagnostic tasks.

The hard claim "CONCLUDE failed" was killed because the final recommendation answered the original user question. The refined claim survives: diagnostic findings should preserve discipline lessons.

The candidate "add universal `PROCEED / FLAG / RE-RUN` marks to every discipline" was not selected. It adds the risk the user identified: labels can become hard routing or weak self-authority. Existing docarchive outputs should be analyzed first.

The candidate "create an optional archive-based Discipline Feedback Extraction protocol" survived. It uses the artifacts that already exist, respects Critique as evidence rather than authority, and produces maintenance hypotheses only when requested.

The candidate "rewrite discipline fundamentals now" was killed. One completed inquiry with a successful Critique result is not enough evidence for broad changes.

The candidate "build a pattern index now" was deferred. It is likely useful after several diagnostic findings, but premature from one case.

## Open Questions

### Monitoring

- After 3 archive-based discipline diagnostics, check whether the same discipline gaps recur. If yes, promote recurring gaps into a maintenance backlog.

- After 5 Innovation outputs with deferred candidates, check whether the adoption-gate schema reduced vague future recommendations.

### Blocked

- Proven root cause is blocked until there is a corrected inquiry or multiple comparable diagnostics.

### Refinement Triggers

- Reopen Sensemaking fundamentals if two or more diagnostics show downstream confusion caused by missing thresholds.

- Reopen Innovation fundamentals if two or more critiques flag deferred candidates as ungated.

- Reopen Critique fundamentals if future diagnostic findings cannot identify upstream issues from Critique output.

- Reopen CONCLUDE fundamentals if maintenance decisions keep being lost after diagnostic findings close.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

use homegrown/protocols/loop_diagnose.md and 
devdocs/inquiries/2026-04-27_20-03__inquiry_name_format_alternatives docarhieve to understand and analyze what each discipine failed at using critique output. the point is to understand what might be lacking or wrong with individual discipine fundamentals...
```

</details>
