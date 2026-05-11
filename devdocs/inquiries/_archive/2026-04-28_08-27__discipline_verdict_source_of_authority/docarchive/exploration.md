# Exploration: Discipline Verdict Source Of Authority

## User Input

The user objected to `devdocs/inquiries/2026-04-28_07-52__discipline_verdict_telemetry_value_risk/finding.md`, especially the claim that each discipline can emit `PROCEED / FLAG / RE-RUN` verdicts about its own output. The user argued that this creates a dangerous self-grading risk, is not directly related to MVL result marks, and missed the possibility that Critique should diagnose upstream discipline failures from kill/refine patterns.

## 1. Mode And Entry Point

**Mode:** artifact exploration.

**Entry point:** signal-first. The signal is the user's objection: verdict authority may have been assigned to the wrong component.

## 2. Exploration Cycles

### Cycle 1 - Scan Current Finding And Source Artifacts

**Scanned:**

- `devdocs/inquiries/2026-04-28_07-52__discipline_verdict_telemetry_value_risk/finding.md`
- `docarchive/innovation.md`
- `docarchive/critique.md`
- `_branch.md`

**What was found:**

- The finding recommends standardized `PROCEED / FLAG / RE-RUN` blocks in each discipline.
- It scopes them as "process sufficiency, not final truth."
- It explicitly kills label-only verdicts and immediate hard routing.
- It still assumes the discipline itself emits the verdict.
- The archived critique contains Candidate E, "Split Process Verdict From Outcome Verdict," but does not ask whether the process verdict should be produced by the discipline itself or by a later evaluator.

**Signals detected:**

- **Authority ambiguity:** "process sufficiency" is named, but the actor authorized to declare it is under-examined.
- **Omitted candidate:** evaluator-issued verdicts are not represented as a first-class alternative.
- **Risk signal:** the finding recognizes self-verdicts are low-to-medium trust but still makes them the shared contract.

**Resolution decision:** zoom out to related doctrine and prior findings.

**Frontier state:** advancing.

**Confidence map update:** current finding scanned; source weakness confirmed as a real candidate gap, not just wording discomfort.

### Cycle 2 - Scan Related Doctrine

**Scanned:**

- `thinking_disciplines/protocols/desc.md`
- `devdocs/archive/critique/discipline_purity_self_assessment.md`
- `devdocs/archive/critique/gate_is_critique_mode.md`
- `devdocs/inquiries/2026-04-28_00-25__resume_protocol_usecase/finding.md`

**What was found:**

- Protocol doctrine is internally inconsistent across time. Some passages say "disciplines judge, protocols route." The archived purity critique says the cleaner separation is: disciplines measure, inquiry routes, disciplines do not judge themselves.
- The GATE critique says quality gating has the same structure as Critique: extract criteria, evaluate, produce verdict.
- The Resume use-case finding says telemetry-aware Resume's unique value is reading verdicts, but it assumes the verdicts already exist in discipline outputs.

**Signals detected:**

- **Older stronger doctrine:** "Disciplines measure; Inquiry routes" directly supports the user's objection.
- **Critique-as-gate possibility:** Quality verdicts can be evaluator-issued without creating a separate GATE protocol.
- **Resume dependency ambiguity:** Resume needs routable signals, but not necessarily self-issued discipline verdicts.

**Resolution decision:** probe the possible signal types separately.

**Frontier state:** advancing.

**Confidence map update:** doctrine conflict confirmed; there is prior project support for not letting disciplines self-grade.

### Cycle 3 - Probe Possible Signal Sources

**Regions probed:**

1. Discipline-local telemetry.
2. Runner-derived routing marks.
3. Critique-derived upstream diagnosis.
4. Reflection-derived retrospective calibration.

**Findings:**

**Discipline-local telemetry** is legitimate. A discipline can report what it did: perspectives checked, mechanisms applied, interfaces mapped, adversarial cases attempted. This is measurement, not judgment.

**Runner-derived routing marks** are possible when thresholds are explicit. The runner can compare telemetry against a policy and say "continue," "continue with caution," or "rerun recommended." This is operational routing, not cognitive evaluation.

**Critique-derived upstream diagnosis** is high-value and was missing from the finding. Critique sees downstream failure evidence: candidates killed on feasibility, coherence, completeness, robustness, or elegance. Repeated kills can identify upstream weakness:

- Feasibility kills cluster -> Innovation may have ignored resource constraints, or Sensemaking failed to extract them.
- Coherence kills cluster -> Sensemaking may have missed existing-system constraints.
- Completeness kills cluster -> Decomposition or Sensemaking may have scoped the problem too narrowly.
- Interface-related kills cluster -> Decomposition may have weak interfaces.
- Novelty-free survivors -> Innovation may be too conservative.

**Reflection-derived retrospective calibration** checks whether earlier marks predicted later dissatisfaction, corrections, or useful findings. This is where trust can grow.

**Signals detected:**

- There are at least four distinct signal classes. The prior finding collapsed two of them: telemetry and verdict.
- Critique can produce evidence-backed upstream marks from actual downstream evaluation, which is stronger than self-report.

**Resolution decision:** run a jump scan for counterexamples.

**Frontier state:** stable locally, broader territory still open.

**Confidence map update:** high confidence that "discipline verdict" is not the only or best design.

### Cycle 4 - Jump Scan

**Jump direction:** search for cases where discipline self-verdict is still useful.

**What was found:**

- Some local stop conditions are genuinely discipline-owned. Comprehend can say prediction testing failed. Decomposition can say reassembly failed. Exploration can say the frontier is still advancing. These are not final truth claims, but they are local failure signals.
- However, even here the safer format is not "I verdict myself as RE-RUN." It is "local criterion failed: reassembly did not hold" or "prediction test failed." The verdict can be derived by an evaluator or runner.

**Signal detected:**

- The user objection should not eliminate discipline-local quality signals. It should demote them from verdict authority to evidence authority.

**Convergence criteria:**

- **Frontier stability:** yes. Relevant alternatives have been mapped.
- **Declining discovery rate:** yes. Later scan refined the distinction rather than adding new major sources.
- **Bounded gaps:** yes. Remaining details are threshold implementation and storage format.

## 3. Structural Map

### Territory Overview

The explored territory contains four signal layers:

1. **Telemetry layer:** discipline emits measurements about its own process.
2. **Routing layer:** runner or Resume compares telemetry to policy and suggests flow.
3. **Evaluation layer:** Critique evaluates candidates and can diagnose upstream causes.
4. **Calibration layer:** Reflection or retrospective review compares marks to later outcomes.

### Inventory

| Region | Current state | Confidence |
|---|---|---|
| Discipline self-verdicts | Recommended by prior finding, but structurally risky | Confirmed |
| Discipline telemetry | Legitimate and useful | Confirmed |
| Runner-derived marks | Plausible for explicit thresholds; operational, not cognitive | Scanned |
| Critique upstream marks | Strong missing mechanism; uses downstream evidence | Confirmed |
| Reflection calibration | Needed before hard routing | Confirmed |
| `_state.md` storage | Useful later; not first decision | Scanned |

### Signal Log

- **Strong signal:** the prior finding omitted "Critique issues upstream discipline marks" as a candidate design.
- **Strong signal:** archived purity critique already supports "disciplines measure, inquiry routes."
- **Strong signal:** label-only hard routing remains the biggest risk and should stay killed.
- **Moderate signal:** runner-derived marks can handle simple threshold comparisons but cannot replace Critique's causal diagnosis.

### Confidence Map

- **Confirmed:** discipline self-verdicts are over-authorized.
- **Confirmed:** telemetry should remain discipline-local.
- **Confirmed:** Critique can infer upstream weaknesses from kill/refine patterns.
- **Scanned:** exact threshold and storage design.
- **Unknown:** how often upstream Critique marks will correctly identify the failing discipline without retrospective calibration.

### Frontier State

Exploration is sufficient. The remaining problem is not "what regions exist?" but "which architecture should survive?"

### Gaps And Recommendations

Run Sensemaking on this map with the central ambiguity: **who has authority to emit `PROCEED / FLAG / RE-RUN`, and what should those labels mean at each layer?**

## Exploration Telemetry

- **Cycles run:** 4.
- **Mode coverage:** artifact exploration; source finding, archived critique/innovation, related doctrine, and counterexample jump scan covered.
- **Frontier stability:** stable.
- **Discovery rate:** declining by Cycle 4.
- **Bounded gaps:** yes.
- **Jump scan:** completed; confirmed discipline-local evidence remains useful but should not become verdict authority.
- **Overall:** sufficient for downstream Sensemaking.
