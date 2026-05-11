# Innovation: Tidy Loop Failure Attribution

## User Input

`devdocs/inquiries/2026-04-27_tidy_loop_failure_attribution/_branch.md`

## Seed

The seed is a failure chain: a wrong premise entered a prior MVL+ loop and survived all disciplines. The innovation task is to produce useful attribution structures and improvement candidates, not to redesign inquiry storage again.

## Mechanism 1: Lens Shifting

### Generic

Shift from "which discipline is guilty?" to "what role did each discipline play?"

**Candidate:** Role-based attribution: Introduced / Stabilized / Encoded / Suppressed / Validated / Finalized.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Focused

Shift from content mistake to process mistake.

**Candidate:** The content mistake was "no date/archive"; the process mistake was "untested canonicality premise became a hard constraint."

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Contrarian

Shift from blaming Sensemaking to blaming Critique.

**Candidate:** Critique should be held primary because it had the last chance to challenge dimensions.

**Test:** Novelty medium, scrutiny survival medium. It captures missed catch but under-explains premise formation.

## Mechanism 2: Combination

### Generic

Combine discipline role + confidence.

**Candidate:** A table with each discipline, mistake, evidence, confidence, and responsibility role.

**Test:** Novelty low, scrutiny survival high, fertility high, actionability high.

### Focused

Combine failure attribution with improvement target.

**Candidate:** For each discipline, pair the mistake with the check that would have prevented it.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Contrarian

Combine all failures into "system-level failure" only.

**Candidate:** Avoid discipline attribution and call it an orchestration failure.

**Test:** Novelty low, scrutiny survival low. It hides useful local correction opportunities.

## Mechanism 3: Inversion

### Generic

Invert "downstream disciplines failed because they were bad" into "downstream disciplines were locally coherent because upstream model was bad."

**Candidate:** Do not over-punish Decomposition/Innovation; they propagated a bad premise.

**Test:** Novelty medium, scrutiny survival high, fertility medium, actionability high.

### Focused

Invert "CONCLUDE made the mistake" into "CONCLUDE exposed the mistake."

**Candidate:** Treat final finding wording as evidence of upstream model, not root cause.

**Test:** Novelty low, scrutiny survival high, fertility medium, actionability high.

### Contrarian

Invert "Explore missed files" into "question framing failed to require canonicality check."

**Candidate:** Maybe the branch should have asked "what is canonical?" explicitly.

**Test:** Novelty medium, scrutiny survival medium. Useful but weaker; the disciplines should still catch it.

## Mechanism 4: Constraint Manipulation

### Generic

Add constraint: attribution must be evidence-backed.

**Candidate:** Every discipline attribution cites artifact text or specific output behavior.

**Test:** Novelty low, scrutiny survival high, fertility high, actionability high.

### Focused

Add constraint: do not require exact psychological certainty.

**Candidate:** Use confidence labels: VERY HIGH, HIGH, MEDIUM-HIGH, MEDIUM.

**Test:** Novelty low, scrutiny survival high, fertility high, actionability high.

### Contrarian

Remove constraint: preserve politeness toward disciplines.

**Candidate:** Use blunt fault labels: Exploration failure, Sensemaking failure, Critique failure.

**Test:** Novelty low, scrutiny survival medium. Useful for clarity but too coarse without role/context.

## Mechanism 5: Absence Recognition

### Generic

What was missing in the old loop?

**Candidate:** A "canonical layer vs persistence layer" check in Sensemaking.

**Test:** Novelty medium, scrutiny survival very high, fertility high, actionability high.

### Focused

What was missing in Critique?

**Candidate:** A "premise/dimension audit" before candidate verdicts.

**Test:** Novelty medium, scrutiny survival very high, fertility high, actionability high.

### Contrarian

What was missing in Exploration?

**Candidate:** A required scan of local project-maintenance docs for questions about devdocs organization.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

## Mechanism 6: Domain Transfer

### Generic

Transfer from incident review.

**Candidate:** Use root cause, contributing factor, detection failure, and remediation categories.

**Test:** Novelty low, scrutiny survival high, fertility high, actionability high.

### Focused

Transfer from safety engineering.

**Candidate:** Critique is the safety barrier. If it lets a wrong premise terminate, record a barrier failure even if the root cause is upstream.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Contrarian

Transfer from compiler pipelines.

**Candidate:** Sensemaking is semantic analysis; Critique is type checking. Bad semantics caused wrong codegen; type checker missed it.

**Test:** Novelty medium, scrutiny survival medium. Useful metaphor but less direct.

## Mechanism 7: Extrapolation

### Generic

If this failure repeats, future MVL+ loops will keep overprotecting non-canonical artifacts.

**Candidate:** Add a reusable check for artifact role: canonical / operational / provenance / disposable.

**Test:** Novelty medium, scrutiny survival high, fertility very high, actionability high.

### Focused

If correction chains accumulate, this format can become a first Level 1 self-maintenance signal.

**Candidate:** Record this as a concrete example of loop-level diagnosis from linked findings.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

### Contrarian

If every correction becomes a heavy diagnosis, maintenance will bog down.

**Candidate:** Keep this as an on-demand diagnosis, not mandatory after every corrected finding.

**Test:** Novelty medium, scrutiny survival high, fertility high, actionability high.

## Assembly Check

The best assembly:

1. Use role-based attribution.
2. Assign primary root cause to Sensemaking.
3. Assign upstream contributing source to Exploration.
4. Assign missed-catch responsibility to Critique.
5. Treat Decomposition and Innovation as propagation/suppression stages.
6. Treat CONCLUDE as finalization amplifier.
7. Pair each attribution with a prevention check.

## Candidate Summary

| Candidate | Verdict Before Critique | Reason |
|---|---|---|
| Single-discipline blame | Weak | Too coarse; hides propagation chain. |
| Role-based attribution | Strong | Fits evidence and avoids over-blame. |
| Sensemaking root cause | Strong | It stabilized the wrong premise with high confidence. |
| Critique primary missed catch | Strong | It had wrong dimensions and terminated. |
| Exploration upstream contributor | Strong | It introduced false confidence. |
| Decomposition/Innovation as propagation | Strong | Their outputs show inherited constraint, not independent root cause. |
| CONCLUDE root cause | Weak | Finalized mistake but did not create it. |
| Prevention-check mapping | Strong | Converts diagnosis into system improvement. |

## Mechanism Coverage

- **Generators applied:** 4 / 4.
- **Framers applied:** 3 / 3.
- **Convergence:** YES. More than three mechanisms converge on role-based attribution with Sensemaking root and Critique missed catch.
- **Survivors tested:** 8 / 8.
- **Failure modes observed:** None in this innovation pass. The old loop's Innovation showed early frame lock.
- **Overall:** PROCEED.
