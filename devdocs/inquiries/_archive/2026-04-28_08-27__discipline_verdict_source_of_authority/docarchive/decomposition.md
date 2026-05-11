# Decomposition: Discipline Verdict Source Of Authority

## Input

Sensemaking separated three layers:

1. Discipline-local telemetry.
2. Evaluator-issued routing marks.
3. Outcome-level MVL result marks.

The design problem is to keep these layers separate while allowing Resume, Navigation, checkpoints, and meta-loop traversal to inspect stable signals.

## 1. Components

### Component A: Discipline Telemetry Contract

**Responsibility:** each discipline records what it did and what it could not do.

**Allowed outputs:**

- input coverage;
- criteria applied;
- assumptions surfaced;
- local checks run;
- named gaps;
- named local failures;
- confidence notes;
- handoff requirements.

**Disallowed output:** authoritative `PROCEED / FLAG / RE-RUN` over its own artifact.

**Reason:** this preserves evidence without self-grading.

### Component B: Evaluator Routing Mark

**Responsibility:** an evaluator interprets an artifact plus telemetry against a downstream-use policy.

**Possible owners:**

- Critique in gate mode;
- Resume when deciding whether to continue from a saved state;
- Navigation or a checkpoint policy when selecting a route;
- the runner when applying explicit mechanical thresholds.

**Output:**

- `PROCEED`: usable downstream by the evaluator's criteria.
- `FLAG`: usable with a named risk or confidence gap.
- `RE-RUN`: minimum process failed enough that reuse is likely misleading.

**Constraint:** these marks are advisory until calibrated.

### Component C: Critique Upstream Diagnosis

**Responsibility:** Critique analyzes kill/refine/flag patterns and attributes likely upstream causes.

**Inputs:**

- candidates or outputs under critique;
- reason each candidate was killed, refined, or allowed;
- discipline telemetry from earlier stages;
- known constraints from the branch.

**Output shape:**

- affected upstream discipline;
- observed downstream symptom;
- likely cause;
- evidence;
- confidence;
- recommended correction.

**Example:** "Innovation: FLAG. Multiple candidates were killed for ignoring cost and integration constraints. Evidence points to weak constraint use in generation. Correction: rerun Innovation with constraints pinned."

### Component D: Outcome-Level MVL Result Mark

**Responsibility:** describe the result of a full loop, not each discipline.

**Possible outputs:**

- result usable;
- result usable with named residual risk;
- loop should continue or rerun;
- answer unresolved.

**Important separation:** outcome marks can use discipline marks as evidence, but should not be confused with them.

### Component E: Calibration Layer

**Responsibility:** compare earlier marks with later outcomes.

**Inputs:**

- later critique results;
- user corrections;
- branch revisions;
- repeated failure patterns across inquiries;
- retrospective reflection.

**Output:** trust adjustment for mark types and possibly for specific disciplines.

**Purpose:** prevent hard routing from being based on unvalidated labels.

## 2. Interfaces

### Discipline -> Evaluator

Discipline passes artifact plus telemetry. It does not pass a trusted verdict.

### Evaluator -> Runner / Resume / Navigation

Evaluator emits routing mark plus evidence. The consumer can use it as a signal, not an automatic command.

### Critique -> Upstream Diagnosis Store

Critique emits marks against prior disciplines when downstream failures reveal likely upstream causes.

### Calibration -> Future Routing Policy

Retrospective evidence adjusts which marks can affect routing and how much weight they receive.

## 3. Failure Modes

### Self-Authorization Failure

A weak discipline says `PROCEED` because it cannot see what it missed. This is the core risk in the prior finding.

**Mitigation:** disciplines emit telemetry, not authoritative verdicts.

### Label-Only Routing Failure

The runner obeys `RE-RUN` or `PROCEED` without inspecting evidence.

**Mitigation:** marks must include named evidence and remain advisory until calibration.

### Critique Over-Attribution Failure

Critique sees a downstream kill and blames the wrong upstream discipline.

**Mitigation:** upstream diagnosis requires confidence, evidence, and symptom-to-cause explanation. Low-confidence diagnosis becomes `FLAG`, not `RE-RUN`.

### Schema Bloat Failure

Every artifact grows heavy metadata that slows the loop.

**Mitigation:** keep discipline telemetry compact and put richer diagnosis in Critique or retrospective artifacts.

## 4. Minimal Viable Architecture

The smallest useful version is:

1. Add compact telemetry blocks to discipline outputs.
2. Do not add discipline self-verdicts as authoritative labels.
3. Add `Upstream Diagnosis` to Critique outputs.
4. Let final MVL findings include an outcome-level result mark only when useful.
5. Keep all marks evidence-backed and advisory.

## 5. Open Design Decisions

- Exact telemetry schema per discipline.
- Whether Critique upstream marks should use `PROCEED / FLAG / RE-RUN` or a separate `OK / WATCH / REWORK` vocabulary.
- Where to store cross-inquiry kill clusters.
- When enough calibration exists to permit automatic routing.

## Decomposition Telemetry

- **Pieces separated:** telemetry, evaluator marks, upstream diagnosis, outcome marks, calibration.
- **Interfaces mapped:** discipline-to-evaluator, evaluator-to-router, critique-to-diagnosis, calibration-to-policy.
- **Main fracture point:** verdict source of authority.
- **Residual design work:** schema and storage.
- **Overall:** sufficient for Innovation.
