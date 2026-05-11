# Decomposition: Inquiry Name Format Discipline Failures

## Input

Diagnose `devdocs/inquiries/2026-04-27_20-03__inquiry_name_format_alternatives` using the archived discipline outputs, especially `docarchive/critique.md`, and use `homegrown/protocols/loop_diagnose.md` as the diagnostic frame.

This is a partial LOOP_DIAGNOSE-style diagnostic: a prior inquiry is available, but no corrected inquiry is available for comparison.

## 1. Coupling Map

### Major Elements

- Target inquiry question: decide the best inquiry-name format.
- Sensemaking output: clarified constraints and stabilized `YYYYMMDD-HHMM__slug`.
- Innovation output: generated format alternatives and a two-tier recommendation.
- Critique output: evaluated candidates and marked `YYYYMMDD-HHMM__slug` as the clean survivor with `Overall: PROCEED`.
- Final finding: recommended `YYYYMMDD-HHMM__slug`, with fallback and deferred future option.
- User diagnostic question: identify what each discipline failed at, or what fundamentals may be lacking.
- Loop diagnose protocol: diagnose process weakness from prior and corrected traces, but only a prior trace is present here.

### Coupling Relationships

- Target question -> Sensemaking: strong. The inquiry question determines the constraints Sensemaking must clarify.
- Sensemaking -> Innovation: strong. Innovation used the constraint landscape and candidate families supplied by Sensemaking.
- Innovation -> Critique: strong. Critique's candidate evaluation depends on Innovation's candidate set and framing.
- Critique -> Final finding: strong. The final recommendation follows the Critique survivor structure.
- Critique -> discipline diagnosis: moderate. Critique provides evaluator evidence, but it was not written to diagnose upstream discipline fundamentals.
- Loop diagnose protocol -> current diagnostic output: strong. It determines how failure claims should be constrained and gated.
- User diagnostic question -> maintenance candidates: strong. The purpose is discipline improvement, not relitigation of the naming decision.

### Coupling Boundaries

- Boundary A: native output quality vs discipline self-diagnosis.
  - Low enough coupling to separate. A run can produce a good answer while still leaving weak telemetry about why the disciplines worked.
- Boundary B: candidate evaluation vs discipline evaluation.
  - Critique evaluated name-format candidates. It did not directly evaluate Sensemaking, Innovation, or CONCLUDE as disciplines.
- Boundary C: per-discipline gaps vs system-level feedback contract.
  - Some gaps may belong to individual discipline prompts; others may belong to the MVL/MVL+ loop contract.
- Boundary D: evidence-backed findings vs speculative root cause.
  - The archive supports underdevelopment hypotheses more strongly than hard failure claims.

## 2. Boundary Validation

### Bottom-Up Atoms

- Critique marked the target inquiry `PROCEED`.
- Critique found no fatal failure in the selected naming recommendation.
- Sensemaking and Innovation both produced artifacts that Critique could evaluate.
- The archive has no explicit "discipline performance" or "upstream cause" section.
- The final finding does not include a discipline-learning summary.
- No corrected inquiry exists to show what an improved run would have produced differently.

### Validation Result

Top-down and bottom-up agree on the main boundary: the old inquiry should not be diagnosed as failed merely because the new diagnostic question wants deeper process information. The strongest supported diagnosis is not "the disciplines failed"; it is "the loop did not extract discipline-feedback telemetry from a successful run."

## 3. Question Tree

### Q1. What did Sensemaking fail at or leave underdeveloped?

Verification criteria:

- Identify whether Critique rejected Sensemaking's framing.
- Identify whether unresolved thresholds or assumptions were handed downstream.
- Separate native task success from diagnostic incompleteness.

Working answer:

Sensemaking did not fail its native task. It clarified the inquiry-name problem well enough for Innovation and Critique. The underdeveloped area is threshold handoff: criteria such as folder-count pressure, scanability thresholds, and when to switch to sequence IDs were not made explicit as downstream decision gates.

Confidence: medium.

### Q2. What did Innovation fail at or leave underdeveloped?

Verification criteria:

- Identify whether candidate coverage was narrow or unusable.
- Identify whether future or conditional options carried adoption gates.
- Separate creative breadth from operational readiness.

Working answer:

Innovation did not fail coverage. It generated a broad enough candidate set and a useful two-tier assembly. The underdeveloped area is conditional-candidate discipline: future options such as `YYYYMMDD-NN__slug` were proposed, but the adoption conditions and experiment gates were not made as concrete as they could be.

Confidence: medium.

### Q3. What did Critique fail at or leave underdeveloped?

Verification criteria:

- Identify whether Critique's candidate verdict was weak.
- Identify whether Critique had dimensions for upstream discipline quality.
- Separate evaluator success from diagnostic-mode absence.

Working answer:

Critique succeeded at its native candidate-evaluation task. Its underdeveloped area is diagnostic mode: it did not produce upstream discipline signals such as "Sensemaking handoff was weak" or "Innovation lacked adoption gates." That absence matters only because the current task is process diagnosis.

Confidence: medium-high.

### Q4. What did CONCLUDE fail at or leave underdeveloped?

Verification criteria:

- Identify whether the final answer followed Critique's survivor.
- Identify whether it preserved residual process lessons.
- Separate user-facing recommendation from loop-maintenance output.

Working answer:

CONCLUDE produced the expected user-facing recommendation. The underdeveloped area is diagnostic residue: it did not preserve what the loop learned about discipline behavior, because that was not part of the original output contract.

Confidence: medium.

### Q5. What system-level loop contract may be missing?

Verification criteria:

- Identify whether the old inquiry contains enough telemetry for discipline diagnosis.
- Identify whether the gap recurs across more than one discipline boundary.
- Identify whether a narrow optional protocol would solve the gap without changing every discipline.

Working answer:

The likely missing contract is an optional discipline-feedback extraction pass. It should read existing docarchive artifacts after a run, especially Critique, and extract maintenance signals without requiring every discipline to self-label or route itself.

Confidence: high.

## 4. Interface Map

| Source | Target | What Flows | Direction | Risk |
|---|---|---|---|---|
| Sensemaking | Innovation | constraints, candidate families, unresolved uncertainties | one-way | unresolved thresholds can disappear |
| Innovation | Critique | candidates, assemblies, tradeoffs | one-way | conditional options may lack adoption gates |
| Critique | Final finding | survivors, killed options, residual risks | one-way | process lessons are not carried forward |
| Critique | Loop diagnosis | evaluator evidence, killed/refined ideas, confidence gaps | one-way | Critique evidence can be overtreated as ground truth |
| Loop diagnosis | Discipline maintenance | candidate prompt/protocol changes with gates | one-way | speculative fixes can overfit one inquiry |

## 5. Dependency Order

1. Establish diagnostic scope.
   - Must come first because this is not a full LOOP_DIAGNOSE comparison with a corrected run.
2. Verify native inquiry outcome.
   - Critique `PROCEED` constrains failure language.
3. Analyze per-discipline underdevelopment.
   - Sensemaking, Innovation, Critique, and CONCLUDE can be analyzed separately once scope is fixed.
4. Separate discipline-level gaps from system-level feedback gaps.
   - Needed before proposing maintenance.
5. Propose narrow maintenance candidates with evaluation gates.
   - Must wait until evidence strength is assigned.

## 6. Reassembly Test

If the answer includes the diagnostic scope, the native outcome constraint, per-discipline underdevelopment hypotheses, system-level feedback-contract diagnosis, and gated maintenance candidates, then it answers the user question without overstating that the old inquiry failed.

## 7. Self-Evaluation

| Dimension | Result | Notes |
|---|---|---|
| Independence | Pass | Each discipline question can be analyzed through its own artifact and Critique interface. |
| Completeness | Pass | Covers Sensemaking, Innovation, Critique, CONCLUDE, and system-level loop contract. |
| Reassembly | Pass | The pieces reconstruct the requested diagnosis and support final maintenance recommendations. |
| Tractability | Pass | Each piece is answerable in one focused pass. |
| Interface clarity | Pass | Main flows and risks are explicit. |
| Balance | Pass | The system-level feedback gap is larger than the discipline-specific gaps, but that reflects the evidence. |
| Confidence | Pass with caveat | Boundaries are stable, but root-cause confidence is limited by absence of a corrected inquiry. |

## Decomposition Verdict

Proceed to Innovation. The next step should generate maintenance candidates that are narrow, optional, and evidence-gated. Broad discipline rewrites are not justified by this archive.
