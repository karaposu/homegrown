# Critique: Discipline Verdict Source Of Authority

## Input

Innovation proposed evidence-first evaluator marks:

1. Disciplines emit telemetry, not authoritative verdicts.
2. Runner may derive simple routing marks from explicit thresholds.
3. Critique emits upstream diagnosis based on downstream kill/refine evidence.
4. MVL findings may carry separate outcome-level result marks.
5. All marks remain evidence-backed and advisory until calibrated.

## Criteria

The design is evaluated against:

- source-of-authority honesty;
- routability;
- automation safety;
- diagnostic value;
- feasibility;
- discipline purity;
- calibration value.

## Candidate Review

### Authoritative Discipline Self-Verdicts

**Verdict:** KILL.

**Reason:** this fails source-of-authority honesty. A discipline cannot reliably certify its own downstream sufficiency when its weakness may be the reason the artifact is flawed.

This is not solved by saying the verdict is "only process sufficiency." The process still produced the artifact, and a weak process can misreport its own sufficiency.

### Discipline Telemetry

**Verdict:** PROCEED.

**Reason:** telemetry is evidence, not authority. Disciplines should report local facts, gaps, and failures. This gives later evaluators structured material without letting the producing discipline control routing.

**Required refinement:** do not call this a verdict block. Call it `Telemetry`, `Local Status`, or `Handoff`.

### Runner-Derived Marks

**Verdict:** FLAG.

**Reason:** useful for explicit mechanical thresholds, such as missing required fields or unresolved local failures. But the runner should not infer conceptual quality from a shallow schema.

**Constraint:** runner marks must cite the policy and evidence used.

### Critique Upstream Diagnosis

**Verdict:** PROCEED.

**Reason:** this directly addresses the user's strongest point. Critique is where failed candidates, weak assumptions, contradictions, and repeated refinements become visible. It can mark upstream disciplines based on observed failure patterns.

**Required refinement:** because causal attribution can be wrong, Critique must include confidence and evidence. A low-confidence attribution should produce `FLAG`, not `RE-RUN`.

### MVL Result Marks

**Verdict:** PROCEED.

**Reason:** result marks are useful at the loop level and are distinct from per-discipline marks. They should say whether the loop output is usable, conditional, or needs another loop.

**Required refinement:** do not use MVL result marks as proof that any individual discipline was good or bad.

### Hard Routing

**Verdict:** KILL for now.

**Reason:** immediate hard routing from uncalibrated labels is the risk the user said cannot be afforded. The system should collect marks first, compare them to later outcomes, and only later consider automation.

## Stress Tests

### Stress Test 1: Weak Sensemaking Says `PROCEED`

If Sensemaking misses a key constraint and self-marks `PROCEED`, Innovation may generate attractive but invalid options. This is exactly the unsafe amplification path.

**Result:** supports killing authoritative self-verdicts.

### Stress Test 2: Critique Kills Three Options For The Same Constraint Miss

Critique sees repeated failure across candidates and can say Sensemaking or Innovation failed to preserve constraints.

**Result:** supports upstream diagnosis from downstream evidence.

### Stress Test 3: Resume Encounters A Branch With Partial Telemetry

Resume needs a stable signal. It can inspect evaluator marks if present, or use telemetry as lower-trust evidence if not.

**Result:** routability survives without discipline self-verdicts.

### Stress Test 4: Critique Over-Blames Innovation

Critique may blame Innovation for feasibility failures when Sensemaking failed to extract constraints.

**Result:** requires evidence, confidence, and "likely cause" wording. This weakens hard causal claims but does not kill upstream diagnosis.

## Corrected Architecture

The surviving architecture is:

```md
## Discipline Output

Artifact content...

## Telemetry

- Criteria applied:
- Inputs used:
- Local gaps:
- Local failures:
- Handoff risks:
```

```md
## Evaluator Mark

- Mark: PROCEED | FLAG | RE-RUN
- Scope: artifact or discipline run being evaluated
- Evidence:
- Risk:
- Recommendation:
- Confidence:
```

```md
## Critique Upstream Diagnosis

- Discipline: Sensemaking | Exploration | Decomposition | Innovation | Critique
- Mark: PROCEED | FLAG | RE-RUN
- Symptom:
- Evidence:
- Likely cause:
- Confidence:
- Correction:
```

```md
## MVL Result Mark

- Result: usable | usable-with-risk | continue-loop | unresolved
- Evidence:
- Residual risk:
```

## Required Correction To Prior Finding

The prior finding should not say "add `PROCEED / FLAG / RE-RUN` to each discipline" without qualification.

The corrected claim is:

> Add compact telemetry to each discipline. Reserve `PROCEED / FLAG / RE-RUN` for evaluator-issued or runner-derived routing marks, and make Critique responsible for upstream diagnosis when downstream kill/refine patterns reveal prior discipline weaknesses.

## Critique Telemetry

- **Killed:** authoritative discipline self-verdicts; uncalibrated hard routing.
- **Refined:** runner-derived marks; Critique upstream diagnosis; MVL result marks.
- **Survived:** discipline telemetry; evidence-first evaluator marks.
- **Main risk left:** over-attribution by Critique.
- **Mitigation:** evidence, confidence, and advisory routing only.
- **Overall:** sufficient to conclude.
