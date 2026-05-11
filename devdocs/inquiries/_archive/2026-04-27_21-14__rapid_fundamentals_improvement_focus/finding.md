---
status: active
refines: devdocs/inquiries/_archive/comparative_mvl_loop_diagnosis/finding.md
impacted_by: devdocs/inquiries/_archive/autonomous_continuous_self_maintenance_levels/finding.md
---
# Finding: Rapid Fundamentals Improvement Focus

## Changes from Prior

**Prior path:** devdocs/inquiries/_archive/comparative_mvl_loop_diagnosis/finding.md

**Revision trigger:** The user asked for the single biggest current focus for rapid improvement of Homegrown's fundamentals, not only whether comparative loop diagnosis is useful.

**What's preserved:** The prior finding's central insight remains correct: a bad MVL/MVL+ finding, a user correction, and a later improved finding form a high-value correction chain.

**What's changed:** Correction-chain diagnosis should not stand alone. It should be part of a small self-maintenance loop that includes a ledger, bounded patches, and later retain/revert/refine decisions.

**What's new:** The recommended near-term focus is a fundamentals improvement sprint: self-maintenance ledger, lightweight loop-diagnose, three real correction-chain trials, one or two low-risk fundamentals patches, evaluation closure, and structural-check repair as support work.

**Migration:** Treat comparative MVL loop diagnosis as the evidence generator inside a Level 1 human-guided self-maintenance loop. Do not promote it into a large autonomous subsystem yet.

## Question

What should Homegrown's biggest current focus be if the goal is rapid improvement of the fundamentals?

The goal is to identify the single highest-leverage current focus for improving Homegrown's core protocols, disciplines, loops, and evidence base quickly. A good answer must explain why this focus beats other plausible priorities and give a practical next-step path that does not overbuild premature autonomy.

## Finding Summary

- The biggest current focus should be a **correction-chain-driven fundamentals improvement loop**. A correction chain means: an earlier weak MVL/MVL+ result, the user's correction or dissatisfaction, and a later improved MVL/MVL+ result.

- The first implementation should be small. It should combine `loop-diagnose`, a self-maintenance ledger, one or two low-risk fundamentals patches, and later retain/revert/refine closure.

- This focus is stronger than building the meta-loop now because a meta-loop can traverse thinking space faster, but it does not by itself know which fundamentals are weak.

- This focus is stronger than building `/intuit` now because `/intuit` would add a hunch layer before Homegrown has a durable way to judge whether such hunches improve later runs.

- This focus is stronger than external validation alone because validation can reveal failures, but it does not automatically convert those failures into protocol or discipline improvements.

- This focus is stronger than only fixing `tools/structural_check.sh` because structural checks can enforce artifact shape, but they cannot detect bad framing, weak critique, shallow innovation, or missing context.

- Full autonomous self-maintenance should remain deferred. Homegrown is closer to Level 0.5 human-guided proto-self-maintenance than to safe autonomous continuous self-maintenance.

## Finding

### 1. The current bottleneck is evidence conversion

Homegrown does not currently lack new concepts. Recent work has clarified Navigation, created `homegrown/meta-loop/SKILL.md`, improved inquiry folder naming, and explored self-maintenance levels.

The current bottleneck is different: Homegrown does not yet have a reliable mechanism that turns observed failures into durable improvements of the fundamentals.

"Fundamentals" here means the rules that govern future runs: discipline specs, loop runners, protocols such as CONCLUDE, Navigation usage, Reflection usage, inquiry artifact structure, and maintenance rules.

A fundamental has not really improved just because a file was edited. A fundamental improves when a rule change helps later runs avoid a specific observed failure, and the change is retained after evaluation.

### 2. The best current evidence source is already present

The user is already producing high-quality correction data.

The pattern is visible:

```text
MVL/MVL+ produces a weak finding
-> user explains what is wrong or missing
-> another MVL/MVL+ run produces a better finding
```

That pattern is more useful than ordinary reflection over a single run. A later improved run gives contrast. It shows what the earlier run failed to frame, include, weigh, or question.

This is why correction chains should become the first empirical substrate for Homegrown self-maintenance. They are not perfect evidence, because user corrections can introduce new context that the earlier run could not have known. But that uncertainty can be recorded directly in the diagnosis instead of ignored.

### 3. The focus should be a small maintenance loop, not only a protocol

The useful near-term mechanism is:

```text
bad run + correction + improved run
-> comparative diagnosis
-> self-maintenance ledger entry
-> small fundamentals patch
-> future retain/revert/refine decision
```

The comparative diagnosis step can be called `loop-diagnose`. Its job is to inspect a correction chain and produce evidence-backed maintenance candidates. It should not pretend to identify exact root cause when the evidence is weak.

The self-maintenance ledger is the durable memory. Each ledger entry should record trigger, evidence, diagnosis, proposed change, affected files, risk class, evaluation gate, and final outcome.

The bounded patch step prevents diagnosis from becoming a report-only exercise. The first trial should apply only one or two low-risk fundamentals patches.

The evaluation closure step prevents the system from treating every patch as improvement. A patch should later be marked retain, revert, or refine based on future behavior.

### 4. The first trial should be deliberately narrow

The first useful version does not require full autonomy, a new top-level skill, or a multi-agent runner.

The first useful version needs:

```text
devdocs/self_maintenance.md
homegrown/protocols/loop_diagnose.md
three real correction-chain diagnoses
one or two low-risk source patches
later retain/revert/refine updates
```

The first trial should not diagnose every inquiry. It should use three real correction chains because that is enough to expose whether the template is usable without turning maintenance into bureaucracy.

The first trial should not patch every failure it finds. It should apply at most one or two small patches because broad edits would make later evaluation ambiguous.

### 5. Structural check remains important, but it is support work

The MVL/MVL+ process currently references `tools/structural_check.sh`, but this file is missing locally. That is a real defect.

Fixing the structural check should be included in the near-term work because missing enforcement weakens the whole protocol stack.

However, structural check should not be the biggest focus. A structural checker can confirm that required sections exist. It cannot tell whether Sensemaking framed the wrong problem, Innovation explored the wrong solution space, Critique rubber-stamped a weak candidate, or CONCLUDE compressed away the key insight.

## Next Actions

### MUST

- **What:** Create `devdocs/self_maintenance.md` with a Level 1 maintenance ledger schema.
  **Who:** Homegrown maintainer or implementation agent.
  **Gate:** Before applying the next fundamentals patch to any file under `homegrown/`.
  **Why:** This creates durable memory for maintenance candidates and prevents ad hoc rule edits from being mistaken for improvement.

- **What:** Create a lightweight `homegrown/protocols/loop_diagnose.md`.
  **Who:** Homegrown maintainer or implementation agent.
  **Gate:** Before the first correction-chain diagnosis is run.
  **Why:** This gives correction-chain diagnosis a repeatable shape without making it a full discipline or autonomous subsystem.

- **What:** Run `loop-diagnose` on three real correction chains.
  **Who:** MVL+ or a human-guided maintenance pass.
  **Gate:** After `devdocs/self_maintenance.md` and `homegrown/protocols/loop_diagnose.md` exist.
  **Why:** Three real cases are enough to test whether the diagnosis format produces useful maintenance candidates.

- **What:** Apply at most one or two low-risk fundamentals patches from the first three diagnoses.
  **Who:** Implementation agent, with human review if the patch touches MVL/MVL+, CONCLUDE, or discipline source.
  **Gate:** Only after the ledger records evidence, affected files, risk class, and evaluation plan.
  **Why:** This converts evidence into action while keeping evaluation possible.

- **What:** Repair the missing `tools/structural_check.sh` support or remove the stale reference if the project no longer wants a structural checker.
  **Who:** Implementation agent.
  **Gate:** Before claiming the next MVL/MVL+ workflow enforcement improvement.
  **Why:** A referenced missing tool creates false enforcement and makes the protocol look stronger than it is.

### COULD

- **What:** Add a correction-chain index under `devdocs/loop_diagnoses/` after the first three cases.
  **Who:** Homegrown maintainer.
  **Gate:** If the first three diagnoses produce at least two useful maintenance candidates.
  **Why:** An index would make later maintenance evidence easier to search without adding it before the workflow proves useful.

- **What:** Attach external validation failures to the same ledger format.
  **Who:** Future validation pass.
  **Gate:** After the first external validation case produces a clear failure or surprising success.
  **Why:** This makes external validation an input to fundamentals improvement instead of a separate report stream.

- **What:** Let meta-loop consume maintenance evidence.
  **Who:** Future meta-loop runner.
  **Gate:** After at least three ledger entries have reached retain/revert/refine closure.
  **Why:** This lets meta-loop traversal use calibrated evidence rather than raw artifact volume.

### DEFERRED

- **What:** Full autonomous self-maintenance.
  **Gate:** Reopen only after at least ten maintenance ledger entries exist and at least five have reached retain/revert/refine closure.
  **Why (if revived):** Those records would provide the evidence needed to design safer autonomous triggers and patch gates.

- **What:** Make meta-loop the central improvement engine.
  **Gate:** Reopen only after the maintenance loop has produced retained changes that improve later runs.
  **Why (if revived):** Meta-loop becomes more valuable once it can traverse with evidence about what has worked.

- **What:** Make `/intuit` the main current focus.
  **Gate:** Reopen when there is a maintenance ledger capable of evaluating whether intuition-derived interventions improved future findings.
  **Why (if revived):** `/intuit` can then become a calibrated signal source instead of an untested hunch layer.

## Reasoning

The strongest surviving option was the fundamentals improvement sprint: ledger, lightweight loop-diagnose, three correction-chain trials, one or two bounded patches, evaluation closure, and structural-check repair.

This option survived because it directly improves the project's weakest shared dependency: the ability to learn from its own observed failures in a way that changes future governing rules.

Meta-loop-first was rejected as the biggest focus. The meta-loop is promising, especially with Navigation as its "eyes," but traversal speed is not the same as fundamentals quality. Without maintenance evidence, a meta-loop can produce more artifacts without knowing which underlying rules are weak.

`/intuit`-first was rejected as the biggest focus. `/intuit` may become strategically important for long-term autonomy, but right now it would add a new signal source before the project has a stable way to judge whether signal-driven interventions improved later runs.

External-validation-first was refined rather than killed. External validation is necessary for scientific credibility and for reducing self-reference blindness. It should feed the maintenance ledger instead of replacing the maintenance loop.

Structural-check-first was refined rather than killed. The missing `tools/structural_check.sh` file is a concrete defect and should be fixed. It is not the main answer because shape validation cannot diagnose reasoning failures.

Full autonomous self-maintenance was killed for the current stage. The project does not yet have enough maintenance evidence, stable failure taxonomy, or closure history to safely automate self-editing of fundamentals.

Maintenance-ledger-only was rejected as insufficient. A ledger without diagnosis becomes a manually curated backlog of opinions.

Loop-diagnose-only was rejected as insufficient. Diagnosis without ledger and closure creates insight but does not reliably change the fundamentals.

The main tension across Exploration, Sensemaking, Decomposition, Innovation, and Critique was whether the priority should be more architecture or better evidence. The resolved answer is better evidence that can become architecture later.

## Open Questions

### Monitoring

- After the first three correction-chain diagnoses, check whether at least two diagnoses produce concrete maintenance candidates. If not, the `loop-diagnose` format is probably too vague.

- After five later MVL/MVL+ inquiries, check whether any retained patch clearly prevented a repeated failure. If not, the patch evaluation gates are probably too weak.

### Blocked

- The exact failure-attribution taxonomy is blocked until real correction-chain diagnoses are run. It should not be overdesigned before the first three cases.

### Research Frontiers

- It remains unknown whether correction-chain learning will generalize beyond user-guided internal inquiries. External validation must later test whether improvements transfer to less familiar tasks.

### Refinement Triggers

- Reopen this finding if the first three correction-chain diagnoses produce no useful maintenance candidates.

- Reopen this finding if `devdocs/self_maintenance.md` exists but remains unused after ten new inquiries.

- Reopen this finding if external validation reveals a more severe bottleneck than correction-chain learning.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

what should be our biggest current focus for rapid fundamentals improvement?
```

</details>
