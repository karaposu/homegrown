# Exploration: Missing Unifying Theory for Alignment and Feedback

## Restated Question

What kind of missing core understanding could explain why Homegrown's alignment and feedback logic still feels scattered, even after recent alignment-control and feedback-insurance work?

## Exploration Mode

Mixed artifact and possibility exploration.

Artifact mode is needed because relevant files already exist: recent findings, `alignment_control.md`, outcome review, loop diagnose, navigation, meta-loop, and the AlignStack/HomeGrown Agent notes.

Possibility mode is needed because the missing thing may not exist yet. The goal is to map likely categories of absence, not to fully define the final theory.

Entry point: signal-first. The signal is the user's discomfort that the system has several feedback-like operations but still lacks theoretical unity.

## Scanned Territory

### Confirmed Artifacts

| Artifact | Confidence | What It Shows |
| --- | --- | --- |
| `devdocs/inquiries/2026-05-02_04-58__feedback_family_reflect_outcome_loop_diagnose/finding.md` | Confirmed | Grouped checkpoint, reflect, outcome review, and loop diagnose under feedback. |
| `devdocs/inquiries/2026-05-02_05-17__alignment_layer_over_feedback_operations/finding.md` | Confirmed | Refined feedback into alignment: alignment is parent, feedback/control is mechanism. |
| `homegrown/contracts/alignment_control.md` | Confirmed | Defines shared record vocabulary, layers, modes, routes, and failure modes. It is explicitly not a runner. |
| `homegrown/protocols/outcome_review.md` | Confirmed | Implements after-use outcome-alignment review. |
| `homegrown/protocols/loop_diagnose.md` | Confirmed | Frames correction-chain diagnosis as a special MVL+ inquiry. |
| `devdocs/inquiries/2026-05-02_11-34__reflect_discipline_vs_mvl_protocol/finding.md` | Confirmed | Keeps reflect as a trial-gated process-alignment boundary discipline. |
| `homegrown/navigation/references/navigation.md` | Confirmed | Navigation maps possible next moves but explicitly does not choose. |
| `homegrown/meta-loop/SKILL.md` | Confirmed | Meta-loop sequences MVL+ -> Navigation -> human selection -> MVL+ with cross-run state. |
| `enes/alignment_perspective/alignment.md` | Confirmed | Defines layer x mode x autonomy architecture and mode-transition signals. |
| `enes/thinking_space_dynamics.md` | Confirmed | Defines Primitive RC, Predictive RC, Retrospective RC, and calibration/Baldwin-cycle logic. |
| `enes/what_is_meaningful_traversal.md` | Confirmed | Identifies traversal quality as necessary for termination, multi-head comparison, and self-improvement. |

### Existing Concepts Already Covering Part of the Space

- **Alignment layers** answer where misalignment can happen.
- **Modes** answer the posture the system is operating in.
- **Feedback/control records** answer how a delta is represented.
- **Insurance operations** answer which boundary is being inspected.
- **Navigation** answers what possible next moves exist.
- **Meta-loop** answers how multiple inquiries can be traversed sequentially.
- **Predictive/Retrospective RC** answers how real-time hunches can later be calibrated.
- **Meaningful traversal** answers whether multi-loop movement is productive or spinning.

## Signals Detected

### Signal 1: The system has record shape but not control dynamics

`alignment_control.md` defines a record:

```text
expected -> observed -> delta -> evidence -> confidence -> route
```

That is a shared language. It does not define how signals accumulate over time, how multiple records interact, when a route should escalate, or how feedback changes future behavior.

Missing kind: a dynamics theory, not a field schema.

### Signal 2: The operations are sorted by boundary but not unified by lifecycle

Current operations are boundary-specific:

- checkpoint: between discipline and next discipline;
- reflect: after loop/work unit;
- outcome review: after use;
- loop diagnose: after correction chain;
- navigation: after a completed cycle to enumerate next moves;
- materialization: when a decision becomes files.

This is useful, but it does not explain the full lifecycle from signal birth to signal maturation to control action to calibration.

Missing kind: a temporal lifecycle model for alignment signals.

### Signal 3: Navigation sees but does not choose

Navigation is explicit: it enumerates possibilities and does not select. Meta-loop v1 also keeps human selection in the loop.

That leaves an intentional gap: what theory eventually explains selection without hiding it inside navigation?

Missing kind: a selection/control policy theory.

### Signal 4: Alignment is a state condition, but state is not yet modeled

`alignment_control.md` says alignment is the whole-system condition preserved as work moves from intent to outcome. But the actual state representation is still local records and artifacts.

There is no stable model of:

- current alignment state;
- pending uncertainty;
- open debts;
- active mode;
- confidence maturity;
- route commitments;
- what has been learned from prior control actions.

Missing kind: an alignment-state model or cognitive control state.

### Signal 5: Predictive/Retrospective RC points to calibration, but alignment-control records do not yet close that loop

`enes/thinking_space_dynamics.md` already contains a strong architecture:

```text
Primitive RC at T0
Predictive RC at T0
Retrospective RC at T2+
delta -> calibration data
calibrated pattern -> Baldwin seed
```

The current alignment-control records do not yet explicitly place themselves in this temporal calibration loop.

Missing kind: a bridge between alignment-control records and calibration/Baldwin-cycle learning.

### Signal 6: The user is sensing theory fragmentation, not file fragmentation

The discomfort is not merely that there are many files. The deeper problem is that each file answers a local question, while the system lacks a unifying theory of self-maintenance over time.

Missing kind: a theory of cognitive self-maintenance or alignment dynamics.

## Probes

### Probe A: Is the missing thing simply "feedback"?

No. The feedback-family finding was useful but insufficient. It grouped mechanisms by expected-vs-observed comparison, but the later alignment finding correctly showed feedback is the mechanism inside alignment, not the top-level theory.

Result: feedback alone is too flat.

### Probe B: Is the missing thing simply "alignment"?

No. Alignment is the parent condition, but the current `alignment_control.md` contract is intentionally thin and static. It names layers, modes, records, and routes. It does not yet explain motion through time.

Result: alignment as condition is necessary but not sufficient.

### Probe C: Is the missing thing a generic alignment runner?

Probably not now. `alignment_control.md` explicitly defers a generic runner until real records exist. A runner would implement a control policy, but the theory of the control policy is the missing piece.

Result: building a runner before theory would freeze the wrong abstraction.

### Probe D: Is the missing thing a process-review protocol?

No. The `reflect` inquiry showed process review is only one boundary. It cannot unify outcome, correction-chain diagnosis, navigation, materialization, and calibration.

Result: process review is local, not the missing parent.

### Probe E: Is the missing thing meaningful traversal?

Partly. `enes/what_is_meaningful_traversal.md` identifies a crucial future capability: distinguishing productive traversal from spinning. But meaningful traversal concerns multi-loop movement quality. It does not alone explain all alignment-control signals.

Result: meaningful traversal is one downstream consumer of the missing theory.

### Probe F: Is the missing thing Predictive/Retrospective RC?

Partly. The RC architecture gives the strongest temporal frame: immediate deterministic signals, immediate probabilistic hunches, delayed empirical outcomes, and calibration. But it is framed around quality awareness and intuition, not yet around every alignment-insurance operation.

Result: RC architecture is likely a major ingredient of the missing theory.

## Possibility Map: What Kind of Thing Might Be Missing?

### Candidate Missing Thing 1: A Unified Feedback Theory

Explains all mechanisms as expected-vs-observed feedback modes.

Status: scanned but likely too shallow. Already tried and refined upward into alignment.

### Candidate Missing Thing 2: A Unified Alignment Theory

Explains all mechanisms as alignment-insurance operations across layers and modes.

Status: partly exists in `alignment_control.md`, but current form is too static.

### Candidate Missing Thing 3: Alignment Dynamics

Explains alignment as a state that changes over time through signals, confidence maturation, route decisions, intervention, and calibration.

Status: high-signal candidate.

### Candidate Missing Thing 4: Cognitive Control Theory

Explains when the system should observe, continue, stop, route, branch, diagnose, recover, materialize, or reflect.

Status: high-signal candidate, especially because navigation explicitly does not choose.

### Candidate Missing Thing 5: Evidence Maturation Theory

Explains how a weak signal becomes monitor, how monitor becomes review, how review becomes diagnosis, how diagnosis becomes protocol edit, and how outcome evidence calibrates predictive judgment.

Status: high-signal candidate; likely part of Alignment Dynamics rather than standalone.

### Candidate Missing Thing 6: Self-Maintenance Theory

Explains the system as maintaining its own cognitive architecture: detecting drift, preserving coherence, updating specs, preventing regression, and learning from outcomes.

Status: high-signal candidate, but broader than current need.

### Candidate Missing Thing 7: Autonomy Policy

Explains what the system may do without human approval at each confidence/risk level.

Status: real, but too implementation-policy-specific for the current unease.

## Frontier and Gaps

### Confirmed

- The current theory has alignment layers and modes.
- The current contract has record shape and route names.
- Several operations handle local feedback boundaries.
- Navigation and meta-loop intentionally avoid autonomous selection.
- Predictive/Retrospective RC already contains a temporal calibration pattern.

### Scanned

- The missing abstraction is probably not another sibling protocol.
- The missing abstraction is probably not merely `reflect`, `outcome_review`, or `loop_diagnose`.
- The missing abstraction likely sits above contracts and below future autonomous runners.

### Unknown

- Whether to call the missing abstraction `alignment_dynamics`, `cognitive_control`, `self_maintenance`, or something else.
- Whether the first materialization should be a theory note under `enes/`, a contract under `homegrown/contracts/`, or an inquiry sequence only.
- How much of Predictive/Retrospective RC should be imported into the alignment-control layer.

## Convergence Check

- Frontier stability: sufficient. Repeated scans point to a missing dynamics/control layer.
- Declining discovery rate: later probes strengthened the same candidate rather than revealing a separate missing protocol.
- Bounded gaps: the exact final theory is unknown, but the type of missing thing is bounded.

## Exploration Output

The likely missing thing is not "feedback" and not merely "alignment." It is a theory of **alignment dynamics** or **cognitive control**: how alignment state changes over time, how feedback signals mature into control actions, how routes are selected, and how outcomes calibrate future judgment. This theory would sit between `alignment_control.md` and future automation. It should explain why reflect, outcome review, loop diagnose, navigation, materialization, and meaningful traversal are different local expressions of one self-maintenance cycle.
