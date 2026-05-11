# Sensemaking: Autonomous Continuous Self-Maintenance Levels

## User Input

`devdocs/inquiries/autonomous_continuous_self_maintenance_levels/_branch.md`

Question: What minimum implementation would be required for Homegrown's proto-self-maintenance to become autonomous continuous self-maintenance, and what level model should guide the transition without skipping necessary stages?

## SV1: Baseline Understanding

Homegrown needs a maturity ladder for self-maintenance. The current system is not at zero because it already has reflection, memory proposals, telemetry ideas, and editable discipline fundamentals. But it is also not yet autonomously self-maintaining because the loop is not fully explicit, triggered, evaluated, or retained/reverted by the system.

## Phase 1: Cognitive Anchor Extraction

### Constraints

- Reflection exists and is explicitly process-oriented.
- Reflection can produce proposed memory cells and process-frontier questions.
- Discipline specs are editable, so the system's own future cognitive rules can change.
- Telemetry exists as a vocabulary, but standardized verdict lines are incomplete across disciplines.
- `resume.md` provides telemetry-aware routing, but it is not fully integrated into active MVL/MVL+ auto-chains.
- No self-maintenance ledger currently closes trigger -> diagnosis -> change -> evaluation -> retain/revert.
- Human approval remains structurally important for high-risk changes.

### Key Insights

- The project needs a ladder, not a binary.
- The first level above proto should make maintenance explicit before making it autonomous.
- Autonomous self-maintenance is not one thing; it has dimensions: trigger, diagnosis, proposal, application, evaluation, retention, and identity preservation.
- The minimum next implementation is probably a maintenance ledger plus rules, not an AI scheduler.
- Continuous self-maintenance should not mean constant self-editing. It should mean an always-available, recurring, closed-loop maintenance function.

### Structural Points

- Current system has partial Observe, Diagnose, Propose, and Apply.
- Current system has weak Evaluate and no standard Retain/Revert.
- Current system has no explicit risk classes for self-changes.
- Current system has no "constitution" or identity model that says which invariants self-maintenance must preserve.

### Foundational Principles

- Autonomy should increase only after observability, evaluation, and rollback exist.
- Self-maintenance must preserve system identity, not just optimize local metrics.
- Human-guided maintenance is still real maintenance; it is just not autonomous continuous maintenance.
- Level names should be implementation gates, not vibes.

### Meaning-Nodes

- Proto-self-maintenance
- Instrumented self-maintenance
- Telemetry-triggered maintenance
- Bounded autonomous maintenance
- Continuous autonomous maintenance
- Developmental self-maintenance
- Retain/revert
- Risk class
- System identity

## SV2: Anchor-Informed Understanding

The right model is a staged ladder where each level closes more of the maintenance loop. Homegrown is currently Level 0 or Level 0.5: it has the ingredients for self-revision, but lacks an explicit maintenance ledger and standard evaluation loop.

## Phase 2: Perspective Checking

### Technical / Logical

A self-maintenance system has to perform a loop:

1. observe process traces;
2. detect a maintenance need;
3. diagnose what failed or could improve;
4. propose a self-change;
5. apply or request the change;
6. evaluate the change;
7. retain, revert, or refine.

Homegrown currently performs some of this when a human asks it to. It does not yet own the loop.

### Human / User

The level model should let the user know what to build next without getting pulled into Level 5 dreams. The user needs a practical target: "make Level 1 real."

### Strategic / Long-Term

The ladder should align with the cognitive OS direction. Self-maintenance is one of the functions that separates a static workflow pack from a living cognitive runtime.

### Risk / Failure

The biggest risk is premature autonomy. If the system edits its own fundamentals without evaluation and rollback, it can drift, inflate complexity, or tune its own criteria to flatter itself.

### Resource / Feasibility

Level 1 is feasible immediately with Markdown artifacts and light conventions. Level 2 requires telemetry standardization. Level 3 requires tooling and permission boundaries. Level 4 requires continuous triggers and outcome tracking. Level 5 requires an explicit self-model and long-horizon goals.

### Ethical / Systemic

Self-maintenance should have risk classes. Low-risk observations and documentation updates can be automated earlier. High-risk changes to discipline definitions, routing logic, evaluation criteria, or consciousness claims should remain human-approved until much later.

### Definitional / Consistency

The words need fixed meanings:

- **Self-maintenance:** the system preserves or improves its own future functioning.
- **Continuous:** the maintenance function recurs across time and is part of normal operation, not a one-off request.
- **Autonomous:** the system initiates or decides at least part of the maintenance loop without ad hoc human instruction.
- **Fundamentals:** the rules that govern future cognition: discipline specs, routing protocols, memory rules, evaluation criteria, and identity constraints.

## SV3: Multi-Perspective Understanding

The ladder should not jump from reflection directly to autonomy. The levels should be:

- Level 0: human-guided proto-self-maintenance.
- Level 1: explicit instrumented self-maintenance.
- Level 2: telemetry-triggered maintenance recommendations.
- Level 3: bounded autonomous low-risk maintenance.
- Level 4: autonomous continuous maintenance with evaluation and rollback.
- Level 5: developmental self-maintenance with identity model and long-horizon goals.

## Phase 3: Ambiguity Collapse

### Ambiguity: What makes self-maintenance "continuous"?

**Strongest counter-interpretation:**
Continuous means always running in the background.

**Why the counter-interpretation fails on structural grounds:**
Always-on execution is one implementation form, not the essence. A system can have continuous maintenance if maintenance is a normal recurring lifecycle function triggered by events, schedules, or thresholds. It does not need to run every second.

**Confidence:** HIGH

**Resolution:**
Continuous means the maintenance loop recurs as part of normal operation and is not dependent on a one-off human request.

**What is now fixed?**
Continuity can be event-driven or scheduled.

**What is no longer allowed?**
Equating continuous maintenance with constant self-editing.

**What now depends on this choice?**
Level 2 and Level 4 can use triggers and gates rather than daemon-like always-on execution.

**What changed in the conceptual model?**
Continuity becomes a lifecycle property, not a runtime-frequency property.

### Ambiguity: What makes self-maintenance "autonomous"?

**Strongest counter-interpretation:**
Autonomous means the system can change itself without human approval.

**Why the counter-interpretation fails on structural grounds:**
Autonomy is graded. A system can autonomously detect and propose while humans approve application. It can autonomously apply low-risk changes while requiring approval for high-risk changes. Treating autonomy as all-or-nothing would force unsafe jumps.

**Confidence:** HIGH

**Resolution:**
Autonomy should be defined by which maintenance functions the system owns: trigger, diagnosis, proposal, application, evaluation, retain/revert.

**What is now fixed?**
Levels must specify which functions are autonomous at each stage.

**What is no longer allowed?**
Using "autonomous" as a binary label.

**What now depends on this choice?**
The level ladder can safely graduate autonomy.

**What changed in the conceptual model?**
Autonomy becomes a vector of owned functions.

### Ambiguity: What is the minimum implementation for the next level?

**Strongest counter-interpretation:**
The next level needs automatic triggers and routing.

**Why the counter-interpretation fails on structural grounds:**
Automatic triggers without a maintenance record, evaluation plan, and rollback rule would only automate drift. The first missing structural piece is the explicit closed-loop artifact.

**Confidence:** HIGH

**Resolution:**
The minimum next implementation is a self-maintenance ledger plus rules that tie reflection-driven changes to evaluation and retain/revert decisions.

**What is now fixed?**
Level 1 is not automation; it is instrumentation and closure.

**What is no longer allowed?**
Skipping directly from reflection to autonomous edits.

**What now depends on this choice?**
The next build should be a lightweight artifact and protocol, not a complex scheduler.

**What changed in the conceptual model?**
The project has a near-term target that is smaller and safer than "autonomous maintenance."

### Ambiguity: Where is Homegrown now?

**Strongest counter-interpretation:**
Homegrown is already Level 1 because reflection and editable fundamentals exist.

**Why the counter-interpretation fails on structural grounds:**
Reflection plus editability is not yet an instrumented closed loop. There is no required maintenance record, no standard evaluation plan for changes, and no retain/revert decision.

**Confidence:** HIGH

**Resolution:**
Homegrown is Level 0.5: stronger than simple proto because it has reflection and editable fundamentals, but not yet Level 1 because the maintenance loop is not instrumented.

**What is now fixed?**
Current status is Level 0.5.

**What is no longer allowed?**
Calling current Homegrown fully Level 1 unless the ledger/protocol is implemented.

**What now depends on this choice?**
The next target is Level 1 Instrumented Self-Maintenance.

**What changed in the conceptual model?**
The current system is precisely placed, avoiding both undercounting and overclaiming.

## SV4: Clarified Understanding

Homegrown should use a graded ladder for self-maintenance. The current system is Level 0.5: it has reflection, self-revision potential, and editable fundamentals, but no standardized maintenance loop. The next step is Level 1: explicit maintenance entries that record trigger, diagnosis, proposed change, applied edit, evaluation plan, and retain/revert decision.

## Phase 4: Degrees-of-Freedom Reduction

### Fixed

- Current Homegrown is Level 0.5.
- Level 1 requires a maintenance ledger and retain/revert closure.
- Autonomy should be graduated by maintenance-loop function.
- Continuous does not mean constant; it means recurring as part of normal operation.
- High-risk self-edits require human approval until later levels.

### Eliminated

- Jumping directly to autonomous self-editing.
- Treating reflection alone as Level 1.
- Treating every spec improvement as progress without evidence.
- Treating self-maintenance levels as consciousness levels.

### Viable Paths

- Implement Level 1 with Markdown artifacts and conventions.
- Standardize telemetry to prepare for Level 2.
- Define risk classes before Level 3.
- Add identity/invariant documents before Level 4 or 5.

## SV5: Constrained Understanding

The minimum implementation for the next stage is not full autonomy. It is a self-maintenance protocol that makes every self-revision traceable and evaluable. Homegrown can reach Level 1 by adding a maintenance ledger, requiring evaluation plans for discipline changes, and recording retain/revert decisions after a defined observation window.

## Phase 5: Conceptual Stabilization

## SV6: Stabilized Model

Homegrown's self-maintenance should be treated as a staged capability ladder.

The current system is **Level 0.5: proto-self-maintenance with editable fundamentals**. It can reflect on prior runs and revise its own methodology when the user or agent explicitly performs the work. That is meaningful and should be counted.

The next target is **Level 1: instrumented self-maintenance**. Level 1 does not require autonomous scheduling or autonomous edits. It requires a standard maintenance artifact that records why a self-change was proposed, what changed, how the change will be evaluated, and whether it was retained or reverted.

The later target, **autonomous continuous self-maintenance**, should not be claimed until the system can self-trigger maintenance, diagnose problems, propose changes, apply at least bounded low-risk changes, evaluate outcomes, and retain or revert changes through a documented loop.

SV6 differs from SV1 by turning the vague question "when does proto become autonomous continuous?" into a level model with current placement and a concrete next implementation target.
