# Exploration: Autonomous Continuous Self-Maintenance Levels

## Mode and Entry Point

- **Mode:** Artifact exploration plus possibility exploration.
- **Entry point:** Signal-first.
- **Signal:** Homegrown already has proto-self-maintenance through reflection and editable discipline fundamentals, but it lacks a level ladder that says what comes next.

## Cycle 1: Scan Existing Maintenance Components

### Scanned

The current Homegrown materials already contain these self-maintenance-relevant pieces:

1. **Reflection discipline**
   - Reads completed inquiry outputs.
   - Examines process, not content.
   - Detects human interventions, cross-step leaks, step quality, surprises, and answer-goal alignment.
   - Produces per-step observations, proposed memory cells, and process-frontier questions.

2. **Telemetry vocabulary**
   - Some disciplines report `PROCEED`, `FLAG`, or `RE-RUN`.
   - `homegrown/protocols/resume.md` can read standardized verdict lines and route based on them.

3. **Editable fundamentals**
   - Discipline specs live as Markdown files.
   - Devdocs already discuss revising disciplines from reflection findings.
   - Prior architecture notes describe Baldwin-style evolution: encode a change, run, check telemetry, accept if improved, revert if degraded.

4. **File-backed memory**
   - Inquiry folders, findings, docarchives, and devdocs preserve traces.
   - Reflection can propose memory cells, although persistence and use are not yet fully automated.

5. **Orchestration learning seeds**
   - Prior discipline architecture work names selection reasoning, usage telemetry, and mistake-based shape classification as the training data for future orchestration.

### Signals Detected

- **Density signal:** Reflection and telemetry are the strongest existing foundations.
- **Absence signal:** No explicit self-maintenance ledger exists yet.
- **Absence signal:** No automated trigger decides when to run reflection or maintenance.
- **Absence signal:** No standard artifact records a proposed self-change, applied edit, evaluation result, and retain/revert decision.
- **Tension signal:** `resume.md` is future-facing but not fully integrated into the active MVL/MVL+ auto-chain.

### Resolution Decision

Zoom in on the missing closed loop. A self-maintenance ladder should be defined by which pieces of the loop are closed.

### Probe

The self-maintenance loop has six core functions:

1. **Observe:** collect traces and telemetry.
2. **Diagnose:** decide that a process failure or improvement opportunity exists.
3. **Propose:** generate a change to memory, protocol, routing, or discipline fundamentals.
4. **Apply:** make or request the change.
5. **Evaluate:** compare later outcomes against a baseline or expectation.
6. **Retain/Revert:** keep the change if it helps, revert or refine it if it hurts.

Homegrown currently has partial Observe, partial Diagnose, partial Propose, manual Apply, weak Evaluate, and no standard Retain/Revert.

### Frontier State

The current-state map is stable enough: Homegrown is not at zero, but it is not yet closed-loop.

### Confidence Map Update

- Reflection as process learning: **confirmed**.
- Telemetry-aware routing concept: **confirmed**, but partly unused.
- Automated self-maintenance: **confirmed absent** at current implementation.
- Level ladder: **unknown**, to be designed.

## Cycle 2: Scan Possible Level Dimensions

### Scanned

Continuous self-maintenance can be leveled by several dimensions:

1. **Trigger autonomy:** human-invoked vs scheduled vs event-driven vs self-initiated.
2. **Diagnostic autonomy:** human diagnosis vs protocol-guided diagnosis vs automated pattern detection.
3. **Change autonomy:** proposed-only vs applied-with-approval vs applied-with-rollback.
4. **Evaluation rigor:** anecdotal vs telemetry-based vs controlled comparison vs longitudinal calibration.
5. **Memory integration:** local notes vs persistent ledger vs retrieval into future decisions.
6. **Identity preservation:** ad hoc edits vs versioned self-model of what the system is trying to preserve.
7. **Governance boundary:** human-approved changes vs bounded autonomous changes vs unbounded self-modification.

### Signals Detected

- **Strong signal:** The levels should not be defined by consciousness claims. They should be defined by implementation abilities.
- **Strong signal:** The next level should be small: make maintenance explicit and repeatable before automating it.
- **Risk signal:** Allowing autonomous edits before evaluation and rollback exists would create drift.

### Resolution Decision

Define levels by closed-loop maturity, not by grand labels.

### Probe

A useful ladder should start at Level 0 and probably stop around Level 4 or Level 5:

- Level 0: proto, human-guided.
- Level 1: explicit maintenance record, still human-triggered.
- Level 2: telemetry-triggered recommendations, human approval.
- Level 3: bounded autonomous maintenance for low-risk changes.
- Level 4: autonomous continuous maintenance with evaluation and rollback.
- Level 5: developmental self-maintenance with identity model and long-horizon goals.

### Frontier State

The level shape is emerging. The key remaining question is the minimum implementation for Level 1.

### Confidence Map Update

- Current project around Level 0 / 0.5: **high confidence**.
- Level 1 as explicit loop artifact: **high confidence**.
- Level 4+ details: **medium confidence**, should stay future-facing.

## Cycle 3: Probe Level 1 Minimum Implementation

### Scanned

The minimum step from proto-maintenance to a real first level should not require full autonomy. It should require a documented, repeatable maintenance loop.

### Signals Detected

- **Actionability signal:** A ledger is the smallest useful artifact.
- **Coupling signal:** The ledger must connect reflection observations to actual changes and later evaluation.
- **Risk signal:** Without retain/revert, self-editing becomes unbounded accumulation.

### Resolution Decision

Level 1 should be called **Instrumented Self-Maintenance**, not autonomous continuous maintenance.

### Probe

Minimum implementation for Level 1:

1. A `maintenance.md` or `self_maintenance_log.md` artifact.
2. A standard entry format:
   - trigger,
   - diagnosis,
   - evidence,
   - proposed change,
   - affected files/protocols,
   - approval decision,
   - applied change,
   - evaluation plan,
   - follow-up date or count gate,
   - retain/revert decision.
3. A rule that every reflection-driven spec change creates one entry.
4. A rule that no discipline fundamental is changed without an evaluation plan.
5. A simple periodic review gate, such as "review after 5 uses or 30 days."

### Frontier State

The first implementation target is clear.

### Confidence Map Update

- Level 1 minimum: **confirmed**.
- Level 2 minimum: **scanned**.
- Level 3+ minimums: **inferred**, need later design.

## Jump Scan: Failure Modes and Safety

### Scanned

Potential failure modes:

- **Self-confirming maintenance:** the system modifies its own evaluation criteria to make itself look better.
- **Taxonomy inflation:** each reflection creates more concepts but not better outcomes.
- **Premature autonomy:** the system edits fundamentals before evidence and rollback exist.
- **Maintenance overuse:** every small issue becomes a spec change.
- **Identity drift:** the system optimizes local metrics while losing the original project purpose.

### Signals Detected

- Evaluation and rollback are not optional.
- A stable self-model or project constitution becomes necessary at higher levels.
- Human approval is still appropriate until the system has empirical calibration.

### Resolution Decision

The ladder should explicitly gate autonomy on evidence, risk class, and reversibility.

### Probe

Low-risk changes can become autonomous earlier:

- documentation updates,
- memory cell proposals,
- telemetry aggregation,
- non-semantic formatting,
- adding observations to logs.

High-risk changes should remain human-approved until later:

- changing discipline definitions,
- changing evaluation thresholds,
- changing loop routing behavior,
- deleting or replacing protocols,
- making consciousness or autonomy claims.

## Convergence Assessment

- **Frontier stability:** The level ladder has stabilized around closed-loop maturity.
- **Declining discovery rate:** Later scans repeat the same core gap: explicit maintenance artifact, evaluation, retain/revert, trigger autonomy.
- **Bounded gaps:** Level 4+ remains future-facing, but the near-term implementation target is bounded.

Exploration is sufficient for sensemaking.

## Structural Map

### Territory Overview

Homegrown is currently a proto-self-maintaining system. It has reflection and editable fundamentals, but it lacks a standardized maintenance loop that closes diagnosis, change, evaluation, and retain/revert.

### Inventory

- **Present:** reflection, process observations, proposed memory cells, editable discipline specs, devdocs, inquiry history, telemetry vocabulary.
- **Partial:** standardized telemetry, resume/routing integration, evaluation of spec changes, persistent memory use.
- **Absent:** self-maintenance ledger, automatic triggers, autonomous retain/revert, explicit risk classes, identity-preservation model.

### Signal Log

- Level ladder should be implementation-based.
- Level 1 should make maintenance explicit before making it autonomous.
- Level 2 can add telemetry-triggered recommendations.
- Level 3+ can add bounded autonomous changes only after evaluation and rollback exist.

### Confidence Map

- **Confirmed:** current Level 0/0.5 status.
- **Confirmed:** Level 1 minimum implementation.
- **Scanned:** Level 2 telemetry-triggered maintenance.
- **Inferred:** Level 3+ bounded autonomy and identity-preserving self-maintenance.

### Frontier State

The answer should produce a level ladder and a concrete Level 1 build spec.

### Gaps and Recommendations

Sensemaking should define the terms "continuous," "autonomous," and "self-maintenance" precisely enough that the levels do not blur together.
