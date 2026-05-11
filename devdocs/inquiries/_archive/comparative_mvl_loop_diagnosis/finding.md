---
status: active
refines: devdocs/inquiries/autonomous_continuous_self_maintenance_levels/finding.md
---
# Finding: Comparative MVL Loop Diagnosis

## Changes from Prior

**What's preserved:** The prior finding's level ladder remains correct: Homegrown is Level 0.5 and should move toward Level 1 before attempting autonomous continuous self-maintenance.

**What's changed:** This finding identifies the most useful first Level 1 mechanism: a comparative diagnostic protocol that learns from bad MVL findings corrected by later MVL runs.

**What's new:** The proposed operation is `loop-diagnose`: a lightweight protocol that reads multiple inquiry folders plus user correction and produces failure attributions and maintenance candidates.

**Migration:** Treat `loop-diagnose` as the first evidence generator for Level 1 self-maintenance. Do not promote it to a full discipline until it has worked on several real correction chains.

## Question

Should Homegrown's next self-maintenance step be a comparative diagnostic protocol that analyzes failed and improved MVL inquiry runs, rather than trying to build advanced autonomous self-maintenance directly?

The goal is to decide whether this comparative diagnosis layer is the right next build, define what it reads and produces, explain how it differs from existing Reflection, and show how it improves Sensemaking, Innovation, Critique, MVL, and CONCLUDE over time.

## Finding Summary

- Yes. The next practical self-maintenance step should be **comparative MVL loop diagnosis**, not advanced autonomous self-maintenance.

- The strongest learning signal is the correction chain: **bad MVL finding -> user correction -> improved MVL finding**. This chain shows what the first loop missed more clearly than a single run reflecting on itself.

- Existing **Reflection** should not be deleted. Reflection reviews one completed run. Comparative diagnosis compares multiple runs and user feedback to explain why the earlier run failed.

- The proposed protocol should be called **`loop-diagnose`** for now. Start it as a lightweight protocol/template, not a full new discipline.

- `loop-diagnose` should output failure attributions with evidence and confidence: Sensemaking failure, Innovation failure, Critique failure, CONCLUDE failure, loop-framing failure, orchestration failure, or context-elicitation failure.

- `loop-diagnose` should produce maintenance candidates, not directly edit fundamentals. Those candidates can later become entries in `devdocs/self_maintenance.md`.

- This is the right Level 1 move because it creates data. The project should rapidly accumulate real examples of what went wrong before trying to design advanced self-maintenance logic.

## Finding

### 1. Why The User's Insight Is Correct

The current workflow already contains a natural learning loop.

The user runs MVL or MVL+, gets a `finding.md`, reads it, and decides whether it is good enough. If it is bad, the user gives comments: what was missing, what was wrong, what felt shallow, or what should have been framed differently. Then the user runs another loop with that extra guidance. The later run often produces a better finding.

That sequence is not just ordinary iteration. It is a labeled failure example.

The first finding shows what the loop produced without the correction. The user feedback labels the failure. The later finding shows what a better result needed to include. Together, those artifacts can reveal which part of the original loop failed.

### 2. Why Existing Reflection Is Not Enough

Existing Reflection is still useful, but it has a different target.

Reflection asks: "How did this completed run perform?"

Comparative loop diagnosis asks: "Why did the earlier run fail relative to the user's correction and the later improved run?"

That difference matters. A single run may not know what it missed. The correction chain gives external evidence. It gives the system something to compare against.

For example:

- If the better run adds a missing perspective, the original Sensemaking may have been too narrow.
- If the better run generates a candidate the first run never considered, Innovation may have under-explored the solution space.
- If the better run rejects an idea the first run accepted, Critique may have used weak dimensions or weak prosecution.
- If the intermediate reasoning was good but the first final answer was bad, CONCLUDE may have compressed or misframed the finding.
- If the user had to provide context the system should have asked for, the failure may be context elicitation or loop framing.

Reflection can still run on one inquiry. `loop-diagnose` should run on inquiry chains.

### 3. The Proposed Protocol: `loop-diagnose`

Start with a lightweight protocol named `loop-diagnose`.

It should not be a full discipline yet. A full discipline needs a larger reference spec, failure modes, telemetry, and maintenance overhead. The operation is promising, but it should first prove itself on real examples.

Minimum inputs:

- **Bad inquiry:** the original inquiry folder whose finding was unsatisfactory.
- **User correction:** the user's comments explaining what was wrong or missing.
- **Improved inquiry:** one or more later inquiry folders that produced a better answer.

Optional inputs:

- related chat excerpt;
- modified finding;
- spec or file changes made after the correction;
- archived discipline outputs from each inquiry;
- maintenance log entries, if they already exist.

### 4. Output Shape

`loop-diagnose` should write a diagnosis artifact, probably under:

`devdocs/loop_diagnoses/<slug>/diagnosis.md`

The first version can use this structure:

```markdown
# Loop Diagnosis: [topic]

## Inputs
- Bad inquiry:
- User correction:
- Improved inquiry:
- Additional context:

## Finding Delta
[What changed between the bad and improved findings.]

## User Correction Signals
[What the user said was missing, wrong, shallow, or badly framed.]

## Failure Attributions
### [Failure name]
**Likely source:** Sensemaking / Innovation / Critique / CONCLUDE / Framing / Orchestration / Context elicitation
**Evidence from bad run:**
**Evidence from correction:**
**Evidence from improved run:**
**Why this source, not another:**
**Confidence:** HIGH / MEDIUM / LOW
**Maintenance candidate:**

## Maintenance Candidates
[Candidate entries for the self-maintenance ledger.]

## Data Value
[What this example teaches the system.]
```

The key rule is evidence. A diagnosis should not say "Sensemaking failed" unless it can point to evidence from the bad run, the user correction, and the improved run.

### 5. Failure Attribution Categories

Use these starting categories:

| Category | Meaning |
|---|---|
| Sensemaking failure | Wrong frame, missing anchor, missing perspective, weak ambiguity collapse |
| Exploration failure | Territory not mapped, signal missed, absence not noticed |
| Decomposition failure | Wrong boundaries, missing sub-question, hidden coupling |
| Innovation failure | Candidate space too narrow, missing contrarian path, weak alternative generation |
| Critique failure | Wrong dimensions, weak prosecution, rubber-stamping, unfair kill |
| CONCLUDE failure | Intermediate reasoning was better than the final finding |
| Loop-framing failure | Original question, goal, or scope was wrong or too narrow |
| Orchestration failure | Wrong loop or missing discipline was chosen |
| Context-elicitation failure | The system should have asked for or inferred needed context earlier |

Each attribution should include confidence. Many failures will be mixed.

### 6. How This Feeds Self-Maintenance

`loop-diagnose` should not directly edit Sensemaking, Innovation, Critique, MVL, or CONCLUDE.

It should produce maintenance candidates.

Those candidates can then become entries in the Level 1 self-maintenance ledger proposed by `devdocs/inquiries/autonomous_continuous_self_maintenance_levels/finding.md`.

This keeps the process disciplined:

1. `loop-diagnose` extracts evidence.
2. The maintenance ledger records the proposed change and evaluation plan.
3. A human or later bounded-autonomy rule approves the change.
4. The change is evaluated after future use.
5. The change is retained, reverted, or refined.

That is much safer than letting one bad/good pair rewrite fundamentals immediately.

### 7. Why This Should Come Before Advanced Self-Maintenance

Advanced self-maintenance requires knowing what goes wrong repeatedly.

Right now the project does not have enough structured data. It has conversations, findings, reflections, and corrections, but not a standard way to extract patterns from them.

`loop-diagnose` creates that data. It turns natural human correction into structured examples.

This is the practical bridge between Level 0.5 and Level 1:

- Level 0.5: the system can reflect and edit fundamentals when guided.
- `loop-diagnose`: the system can extract evidence from correction chains.
- Level 1: the system can record maintenance candidates and evaluate later retain/revert decisions.
- Level 2 later: the system can recommend maintenance from repeated patterns.

### 8. Promotion Path

Do not make `loop-diagnose` a full discipline immediately.

Start as a protocol or template. Use it on 5 to 10 real correction chains. Then review:

- Did it identify real failures?
- Did its maintenance candidates help improve specs?
- Were attributions accurate, or did they over-blame one discipline?
- Did the output feel useful enough to repeat?
- Did it produce entries worth adding to a self-maintenance ledger?

If the answer is yes, promote it to a full Homegrown discipline with a `SKILL.md`, reference file, failure modes, and telemetry.

## Next Actions

### MUST

- **What:** Create a lightweight `loop-diagnose` protocol spec.
  **Who:** Homegrown protocols.
  **Gate:** Before attempting advanced self-maintenance or automated spec evolution.
  **Why:** Captures the strongest current learning signal: bad finding, user correction, improved finding.

- **What:** Define the diagnosis output folder and template.
  **Who:** Devdocs/runtime layer.
  **Gate:** Before the first real comparative diagnosis is run.
  **Why:** Makes outputs consistent enough to become future self-maintenance data.

- **What:** Pair `loop-diagnose` with the Level 1 self-maintenance ledger.
  **Who:** Self-maintenance docs.
  **Gate:** Before applying any fundamental spec change based on a diagnosis.
  **Why:** Ensures diagnoses create traceable maintenance candidates rather than untracked edits.

### COULD

- **What:** Add a "run `loop-diagnose`?" prompt to future MVL conclusions when a new inquiry refines or corrects a prior inquiry.
  **Who:** CONCLUDE or MVL runner.
  **Gate:** After `loop-diagnose` has worked manually on at least 3 cases.
  **Why:** Helps capture correction chains at the moment they happen.

- **What:** Add a lightweight index of loop diagnoses.
  **Who:** Devdocs.
  **Gate:** After 5 diagnoses exist.
  **Why:** Lets the project see recurring failure categories.

### DEFERRED

- **What:** Promote `loop-diagnose` to a full discipline.
  **Gate:** After 5 to 10 real diagnosis outputs show repeated usefulness and stable attribution categories.
  **Why if revived:** A full discipline is justified only after the protocol proves the operation is common and valuable.

- **What:** Let `loop-diagnose` automatically edit discipline fundamentals.
  **Gate:** Only after Level 1 maintenance logging and retain/revert evaluation are working.
  **Why if revived:** Direct edits may eventually be useful, but not before evidence and rollback discipline exist.

## Reasoning

The **Correction-Chain Diagnosis Protocol** survived because it fits the real workflow. The user already creates bad-to-better chains by rerunning MVL with corrective guidance. The missing step is to mine those chains.

Extending Reflection was refined, not accepted directly. Reflection has a single-run input shape. Comparative diagnosis has a multi-run input shape. Reusing the name would hide a real distinction.

Creating a full new discipline was refined. The operation is distinct enough that it may deserve discipline status later, but the first version should be a protocol. The project needs examples before hardening the spec.

The self-maintenance ledger survived as a paired component. A ledger stores maintenance candidates and retain/revert decisions, but `loop-diagnose` produces better candidate entries than ad hoc notes.

The manual-template-only approach was refined. A template is useful inside the protocol, but too weak as the whole system.

Direct fundamental patching was killed. It skips confidence, evidence, maintenance logging, and retain/revert. A correction chain can suggest a change, but it should not automatically rewrite fundamentals.

Building advanced self-maintenance first was killed. Advanced self-maintenance would be architecture without data. `loop-diagnose` creates the data.

The main contradiction across exploration, sensemaking, decomposition, and innovation was resolved by splitting learning into three operations: single-run Reflection, cross-run comparative diagnosis, and self-maintenance. They should not be collapsed into one overloaded "Reflection" concept.

## Open Questions

### Monitoring

- After 5 real loop diagnoses, did the protocol produce maintenance candidates that were specific enough to act on?
- After 5 real loop diagnoses, were failure attributions mostly high-confidence or mostly speculative?
- After 10 loop diagnoses, do repeated failure categories emerge across Sensemaking, Innovation, Critique, CONCLUDE, framing, or orchestration?

### Blocked

- Promotion to full discipline is blocked until several real diagnosis outputs exist.
- Automated maintenance recommendations are blocked until diagnosis outputs feed a self-maintenance ledger.

### Research Frontiers

- What is the best way to distinguish "the system failed" from "the user supplied genuinely new information later"?
- How should mixed failures be scored when Sensemaking, Innovation, and Critique all contributed to the bad outcome?

### Refinement Triggers

- Reopen the protocol-vs-discipline decision after 5 to 10 real diagnosis cases.
- Reopen the attribution categories if two or more diagnosis outputs require a category not listed here.
- Reopen Reflection's role if comparative diagnosis makes single-run Reflection redundant in practice.
