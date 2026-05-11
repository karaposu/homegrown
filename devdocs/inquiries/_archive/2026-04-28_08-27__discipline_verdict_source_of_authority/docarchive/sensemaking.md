# Sensemaking: Discipline Verdict Source Of Authority

## Input

Exploration found that the previous finding correctly identified a need for routable signals, but assigned too much authority to discipline self-report. It also missed the user's proposed mechanism: Critique can diagnose upstream discipline failures from downstream kill/refine patterns.

## 1. Core Tension

The system needs stable marks that Resume, Navigation, checkpoints, and future meta-loop traversal can inspect. But a discipline is the least reliable actor to declare that its own output is sufficient, because the same blind spot that weakened the output can also weaken the self-assessment.

The mistake is not "verdicts are useless." The mistake is treating a discipline-local output as if it can authoritatively decide downstream sufficiency.

## 2. Stabilized Distinctions

### Telemetry Is Not Verdict

A discipline can report facts about its own process:

- which criteria were applied;
- which inputs were used;
- which perspectives were covered;
- which local checks failed;
- which uncertainties remain;
- where confidence is thin.

This is measurement. It can be valuable even when the discipline is weak. It should stay close to the discipline because only the discipline knows its internal process trace.

### Verdict Is A Routing Interpretation

`PROCEED / FLAG / RE-RUN` is not raw evidence. It is an interpretation of evidence against a policy:

- Is this output usable as input to the next step?
- Is there a named risk that must travel with it?
- Did the minimum process fail badly enough that reuse is likely misleading?

That judgment should be made by an evaluator, runner, Resume protocol, checkpoint policy, or Critique mode, not trusted as a discipline's self-verdict.

### Outcome Truth Is A Separate Layer

None of these marks should mean that the final answer is true. A routing mark only says how to handle an intermediate artifact. Final confidence requires later evaluation, user reaction, empirical validation, or retrospective calibration.

## 3. Reframed Labels

The labels can survive, but their source of authority must change.

### If Emitted By A Discipline

The label must be treated as a self-report only. Better wording:

- `local_status: complete`
- `local_status: blocked`
- `local_status: incomplete`
- `local_gap: ...`
- `local_failure: ...`

This avoids giving the discipline a trusted routing voice while preserving useful evidence.

### If Emitted By An Evaluator

The label can mean a real routing recommendation:

- `PROCEED`: evaluator sees enough evidence to use the artifact downstream.
- `FLAG`: evaluator allows use, but attaches a named risk, weakness, ambiguity, or confidence gap.
- `RE-RUN`: evaluator sees a minimum-process failure or contradiction likely to mislead downstream use.

This still must be advisory until calibration shows the marks are reliable.

### If Emitted After The Whole MVL Loop

The label is an outcome-level result mark. It should describe the loop output, not each discipline. It answers a different question: whether this MVL run has a usable result, a conditional result, or needs another loop.

## 4. User Proposal Assessment

The user's Critique proposal makes sense and should have been in the prior finding.

Critique sees what the discipline itself cannot: downstream failure evidence. When candidates are killed, refined, or repeatedly flagged for the same reason, Critique can infer likely upstream causes.

Examples:

- Feasibility kills may indicate Innovation ignored constraints or Sensemaking failed to surface them.
- Completeness kills may indicate Sensemaking or Decomposition scoped the problem too narrowly.
- Interface mismatch kills may indicate Decomposition failed to preserve boundaries.
- Generic or low-novelty survivors may indicate Innovation did not escape local obviousness.
- Repeated ambiguity flags may indicate Exploration did not map the frontier enough before convergence.

This is stronger than self-verdict because it is based on downstream stress, not introspection alone.

## 5. Main Reinterpretation

The safer architecture is:

1. Disciplines emit local telemetry and local failure signals.
2. Critique emits candidate verdicts and upstream diagnosis based on downstream evidence.
3. Runner, Resume, or Navigation consumes evaluator marks as advisory routing signals.
4. Reflection or later retrospective calibration checks whether those routing signals predicted useful outcomes.

This preserves routability without giving uncalibrated self-reports automatic control over the loop.

## 6. Corrective Claim

The previous finding should be corrected as follows:

> Do not add authoritative `PROCEED / FLAG / RE-RUN` verdicts to each discipline. Add discipline-local telemetry blocks, and add evaluator-issued marks over prior discipline artifacts where routing is needed.

## Sensemaking Telemetry

- **Central ambiguity resolved:** verdict authority should not belong to the producing discipline.
- **Stable model:** telemetry, routing verdict, and outcome verdict are separate layers.
- **User proposal status:** accepted as structurally sound; Critique-issued upstream diagnosis is a missing high-value mechanism.
- **Residual uncertainty:** exact schema and thresholds need design after the authority model is fixed.
- **Overall:** sufficient for Decomposition.
