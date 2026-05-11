---
status: active
refines: devdocs/inquiries/cognitive_os_prompt_library_evidence_consciousness/finding.md
---
# Finding: Autonomous Continuous Self-Maintenance Levels

## Changes from Prior

**What's preserved:** The prior finding's distinction is preserved: Homegrown already has proto-self-maintenance, but not autonomous continuous self-maintenance.

**What's changed:** This finding turns that distinction into a level ladder with implementation gates.

**What's new:** The next target is Level 1, called **Instrumented Self-Maintenance**. It requires a self-maintenance ledger and retain/revert closure, not full autonomy.

**Migration:** Future docs should use this ladder when discussing Homegrown's self-maintenance maturity.

## Question

What minimum implementation would be required for Homegrown's proto-self-maintenance to become autonomous continuous self-maintenance, and what level model should guide the transition without skipping necessary stages?

The goal is a practical ladder: identify where Homegrown is now, define the next reachable level, and prevent the project from jumping directly from reflection to strong autonomy claims.

## Finding Summary

- Homegrown is currently **Level 0.5: Proto-Self-Maintenance With Editable Fundamentals**. It has reflection, process observations, proposed memory cells, telemetry concepts, and editable discipline specs, but no closed maintenance loop.

- The next implementation target is **Level 1: Instrumented Self-Maintenance**. Level 1 requires a standard self-maintenance ledger that records trigger, diagnosis, evidence, proposed change, risk class, affected files, evaluation plan, and retain/revert/refine decision.

- **Autonomous continuous self-maintenance** should not be claimed until Level 4. Level 4 requires the system to self-trigger maintenance, diagnose issues, propose changes, apply at least bounded changes, evaluate outcomes, and retain or revert changes through a documented loop.

- The ladder should be implementation-based, not consciousness-based. Self-maintenance may be consciousness-adjacent under some theories, but this ladder measures maintainability and autonomy, not consciousness.

- The safest rule is **instrumentation before autonomy**. Do not automate self-modification until the project has maintenance records, risk classes, evaluation windows, and rollback behavior.

- The immediate build is small: add a Markdown-native maintenance log and a rule that every reflection-driven spec change must create an entry and later resolve to retain, revert, or refine.

## Finding

### 1. The Level Ladder

#### Level 0: Human-Guided Maintenance

The human notices a problem and asks the assistant to update docs, prompts, or protocols.

At this level, the system does not really maintain itself. It can be edited, but the maintenance intelligence is mostly in the human.

#### Level 0.5: Proto-Self-Maintenance With Editable Fundamentals

Homegrown is here now.

At Level 0.5, the system has reflection and self-revision ingredients. Reflection can inspect a completed run's process, identify where the system missed something, propose memory cells, and raise process-frontier questions. The discipline specs are editable, so those lessons can become changes to the rules that govern future cognition.

The loop is still not closed. There is no required maintenance record. There is no standard evaluation plan. There is no retain/revert decision after the change has been used.

#### Level 1: Instrumented Self-Maintenance

Level 1 is the next target.

At Level 1, every self-change is recorded as a maintenance entry. The system still depends on human approval for most changes, but the maintenance lifecycle becomes explicit and auditable.

Minimum implementation:

- a persistent self-maintenance log;
- a standard entry schema;
- a rule that reflection-driven spec changes require an entry;
- an evaluation window;
- a final retain, revert, or refine decision.

This is the first level where "self-maintenance" becomes a real system function rather than an informal ability.

#### Level 2: Telemetry-Triggered Maintenance Recommendations

At Level 2, the system can notice maintenance opportunities from signals rather than waiting for a human to ask.

Examples:

- repeated `FLAG` or `RE-RUN` verdicts from a discipline;
- repeated user corrections of the same kind;
- repeated reflection observations pointing to the same process weakness;
- unused or overused disciplines surfaced by usage telemetry.

At Level 2, the system recommends maintenance. It does not freely edit high-risk fundamentals.

#### Level 3: Bounded Autonomous Low-Risk Maintenance

At Level 3, the system can apply low-risk maintenance actions autonomously inside defined boundaries.

Examples of low-risk actions:

- append an observation to the maintenance log;
- create a proposed memory cell;
- update an index or generated devdoc;
- open a maintenance entry from a repeated telemetry pattern;
- add non-normative documentation that does not change protocol behavior.

High-risk actions still require human approval. High-risk actions include changing discipline definitions, changing routing behavior, changing evaluation thresholds, deleting protocols, or changing claims about autonomy and consciousness.

#### Level 4: Autonomous Continuous Closed-Loop Maintenance

Level 4 is the first level that deserves the phrase **autonomous continuous self-maintenance**.

At Level 4, the system owns the maintenance loop within bounded domains:

1. It self-triggers maintenance from telemetry, reflection, schedules, or repeated failure patterns.
2. It diagnoses the maintenance need.
3. It proposes a change.
4. It applies bounded changes or requests approval for high-risk changes.
5. It evaluates later outcomes.
6. It retains, reverts, or refines the change.

Continuous does not mean constant self-editing. It means the maintenance loop recurs as part of normal operation and every opened maintenance issue moves toward resolution.

#### Level 5: Developmental Self-Maintenance With Identity Model

Level 5 adds a persistent self-model or constitution.

The system can reason about what it is trying to preserve while changing itself. It does not merely optimize local telemetry. It protects higher-order invariants such as external usefulness, evidence discipline, user legibility, and separation between process-quality claims and consciousness claims.

Level 5 should remain future-facing until lower levels are measured.

### 2. Where Homegrown Is Now

Homegrown is **Level 0.5**.

The current system is stronger than a static prompt library because it can reflect on its own process and alter the methodology that governs future runs. That is real proto-self-maintenance.

The current system is not Level 1 yet because it lacks an explicit self-maintenance artifact and closure rule. A reflection can lead to a spec edit, but the project does not yet require a recorded trigger, diagnosis, evaluation window, or retain/revert decision.

### 3. Minimum Implementation For Level 1

The minimum Level 1 implementation is a Markdown-native maintenance ledger.

Recommended path:

`devdocs/self_maintenance.md`

Each entry should use this structure:

```markdown
## [date] | [short title] | Status: OPEN / EVALUATING / RETAINED / REVERTED / REFINED

**Trigger:** What caused this maintenance entry?
**Diagnosis:** What process weakness or opportunity was detected?
**Evidence:** Which run, reflection, telemetry, user correction, or file supports the diagnosis?
**Risk class:** R0 / R1 / R2 / R3 / R4 / R5.
**Proposed change:** What should change?
**Affected files:** Which files or protocols would change?
**Decision:** Approved / rejected / deferred, and by whom or what rule.
**Applied change:** What actually changed?
**Evaluation plan:** How will we know whether it helped?
**Evaluation gate:** After N uses, N days, or a named observable event.
**Outcome:** Retain / revert / refine, with evidence.
```

Minimum rule:

Every reflection-driven change to a discipline, protocol, routing rule, evaluation criterion, or project-level claim must create one maintenance entry before the change is treated as part of the system.

### 4. Risk Classes

Use lightweight risk classes so autonomy can grow safely.

| Class | Meaning | Early autonomy rule |
|---|---|---|
| R0 | Observation, log entry, or index update | Can become autonomous early |
| R1 | Documentation or memory addition that does not change behavior | Can become autonomous after Level 1 is working |
| R2 | Telemetry recommendation or maintenance proposal | Can be system-triggered at Level 2 |
| R3 | Discipline spec change | Human approval until later |
| R4 | Routing, evaluation threshold, or rollback rule change | Human approval until strong calibration exists |
| R5 | Identity, autonomy, or consciousness claim change | Human approval; do not automate in near term |

Risk classes are what let the project move forward without treating all self-edits as equally dangerous.

### 5. Trigger Rules

Start with three triggers:

1. A user corrects a system-level claim.
2. Reflection proposes a spec, memory, routing, or evaluation change.
3. The same discipline or process failure appears repeatedly through `FLAG`, `RE-RUN`, or reflection observations.

Later triggers can include periodic review and usage telemetry, but the first version should stay small.

### 6. What Not To Claim Yet

Do not claim Level 4 autonomous continuous self-maintenance until Level 1 and Level 2 produce enough records to evaluate maintenance quality.

Do not claim safe autonomous self-editing until risk classes and rollback are operational.

Do not treat this ladder as a consciousness ladder. It is an implementation maturity ladder for self-maintenance.

## Next Actions

### MUST

- **What:** Create `devdocs/self_maintenance.md` with the Level 1 entry schema.
  **Who:** Devdocs/runtime layer.
  **Gate:** Before the next reflection-driven discipline or protocol edit is treated as a system improvement.
  **Why:** Gives self-maintenance a durable trace and prevents untracked self-modification.

- **What:** Add a rule to `homegrown/reflect` or a shared protocol saying that reflection-driven fundamental changes create maintenance entries.
  **Who:** Reflection/protocol layer.
  **Gate:** Before claiming Homegrown has Level 1 self-maintenance.
  **Why:** Connects reflection to the maintenance lifecycle instead of leaving improvement as an ad hoc follow-up.

- **What:** Define the R0-R5 risk classes in the same maintenance doc.
  **Who:** Devdocs/runtime layer.
  **Gate:** Before any autonomous maintenance behavior is added.
  **Why:** Allows low-risk automation while keeping high-risk self-edits human-approved.

### COULD

- **What:** Add a small "maintenance entry required?" checklist to future findings.
  **Who:** CONCLUDE or finding template.
  **Gate:** After Level 1 exists and has been used on at least 3 changes.
  **Why:** Catches system-level corrections that should enter the maintenance ledger.

- **What:** Add simple usage telemetry for disciplines.
  **Who:** Runtime/tooling layer.
  **Gate:** After standardized telemetry is implemented for routing-relevant disciplines.
  **Why:** Prepares Level 2 telemetry-triggered maintenance recommendations.

### DEFERRED

- **What:** Autonomous application of discipline spec changes.
  **Gate:** Revive only after Level 1 has at least 10 closed entries and Level 2 recommendations show useful calibration.
  **Why if revived:** Moves toward Level 3 bounded autonomy without skipping evidence.

- **What:** Full self-maintenance constitution.
  **Gate:** Revive before Level 3 or when self-maintenance entries show repeated tension between local metric improvement and project identity.
  **Why if revived:** Prevents identity drift as the system gains self-editing authority.

## Reasoning

The **Instrumentation-Before-Autonomy Ladder** survived because it gives the project a staged path. It recognizes that reflection and editable fundamentals are real, but it refuses to call that autonomous continuous maintenance until the loop is closed.

The **Level 1 Maintenance Ledger** survived because it is the smallest missing implementation. It does not pretend to create autonomy. It creates observability, evaluation, and accountability.

The **Risk-Class Policy** survived because autonomy should not apply equally to all changes. Logging an observation is not the same as changing a discipline definition or consciousness claim.

The **Maintenance Trigger Rules** were refined. The first version should use only high-signal triggers: user correction of a system-level claim, reflection proposing a fundamental change, and repeated telemetry/reflection failures. Broader scheduled review can wait.

The **Self-Maintenance Constitution** was refined. A full constitution is probably premature for Level 1, but minimal invariants are needed: do not weaken evidence standards, do not increase autonomy without rollback, and do not blur self-maintenance with consciousness.

The **Direct Autonomous Editor** was killed. It would let the system edit its own fundamentals before calibrated telemetry, risk classes, and rollback exist.

The **Consciousness-Oriented Ladder** was killed. Self-maintenance may matter for consciousness research, but consciousness should not be the ladder's organizing metric.

The contradiction across exploration, sensemaking, decomposition, and innovation was resolved by separating current status from next target. Homegrown is not merely human-edited, but it is also not yet autonomous. Level 0.5 captures that middle position.

## Open Questions

### Monitoring

- After 10 closed maintenance entries, how often did self-maintenance changes improve later runs versus add process overhead?
- After 10 closed maintenance entries, which risk classes appear most often?
- After 30 days of using Level 1, are entries actually being closed with retain/revert/refine decisions?

### Blocked

- Level 2 is blocked until routing-relevant disciplines produce standardized telemetry or verdicts consistently enough to trigger maintenance recommendations.
- Level 3 is blocked until Level 1 records exist and risk classes have been used in practice.
- Level 4 is blocked until evaluation and rollback are routine.

### Research Frontiers

- What metrics best detect whether a self-maintenance change improved future cognition rather than merely increasing structure?
- What minimal self-model is needed before Level 5 developmental self-maintenance becomes meaningful?

### Refinement Triggers

- Reopen the Level 1 schema after 5 real maintenance entries if fields are unused or missing.
- Reopen the current-level assessment after `devdocs/self_maintenance.md` exists and at least 3 entries have reached retain/revert/refine.
- Reopen Level 2 design after standardized telemetry exists for at least 4 routing-relevant disciplines.
