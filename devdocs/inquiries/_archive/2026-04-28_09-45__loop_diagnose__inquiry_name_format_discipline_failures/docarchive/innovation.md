# Innovation: Maintenance Candidates from Inquiry-Name-Format Diagnosis

## User Input

Use `homegrown/protocols/loop_diagnose.md` and `devdocs/inquiries/2026-04-27_20-03__inquiry_name_format_alternatives` docarchive to understand and analyze what each discipline failed at using critique output. The point is to understand what might be lacking or wrong with individual discipline fundamentals.

## Seed

The old inquiry appears successful by its own Critique output, but its archive does not directly answer the later question: what did each discipline fail at, and what might be lacking in the discipline fundamentals?

Valuation signal: improve the MVL/MVL+ loop without adding self-authorizing labels or hard-routing risk.

## Mechanism Generation

### 1. Lens Shifting

- Generic: Treat archived discipline outputs as telemetry, not just records.
- Focused: Treat Critique as the strongest evaluator artifact, but only for what it actually evaluated.
- Contrarian: Successful runs may be better diagnostic material than failed runs because gaps are visible without crisis noise.

Surviving idea: add an on-demand "discipline feedback extraction" lens over existing docarchives.

### 2. Combination

- Generic: Combine postmortem analysis with archived loop artifacts.
- Focused: Combine `loop_diagnose.md`, Critique verdicts, and discipline outputs into a diagnostic pass that reads but does not rewrite the original run.
- Contrarian: Combine no new marks with better archive queries: mine existing Critique output and discipline outputs before adding any metadata.

Surviving idea: use a protocol that converts existing archive traces into maintenance hypotheses with confidence levels.

### 3. Inversion

- Generic: Instead of each discipline marking itself, a later diagnostic pass marks evidence strength.
- Focused: Instead of adding `PROCEED / FLAG / RE-RUN` to every discipline, diagnose only when there is a maintenance question.
- Contrarian: The default loop should forget discipline-performance lessons unless a user explicitly asks for diagnosis.

Surviving idea: do not make verdicts universal discipline self-labels. Keep diagnosis explicit and optional.

### 4. Constraint Manipulation

- Generic: Add the constraint that diagnostic outputs must not hard-route future runs.
- Focused: Add the constraint that this inquiry has no corrected comparison run, so every root-cause claim needs lower confidence.
- Contrarian: Require every maintenance candidate to include a gate for removal if it adds noise.

Surviving idea: maintenance candidates should be reversible, gated, and scoped to diagnostic contexts.

### 5. Absence Recognition

- Generic: Missing artifact: a process-learning layer over completed loops.
- Focused: Missing handoff fields: unresolved thresholds from Sensemaking, adoption conditions from Innovation, upstream signals from Critique, discipline lessons from CONCLUDE.
- Contrarian: Missing negative output: no place says "Critique did not care about this because it was out of scope."

Surviving idea: add small optional sections at discipline boundaries only where repeated diagnostics show value.

### 6. Domain Transfer

- Generic: Import the post-incident review pattern: separate event outcome from process improvement.
- Focused: Import code-review style severity: findings first, confidence and evidence next, broad refactors last.
- Contrarian: Import forensic audit practice: preserve raw records and analyze later, rather than requiring actors to tag themselves during execution.

Surviving idea: discipline diagnosis should be archive-forensic, not self-reported routing metadata.

### 7. Extrapolation

- Generic: As docarchives grow, manual diagnosis will need a pattern index.
- Focused: After several diagnostics, common recurring gaps by discipline could become a maintenance backlog.
- Contrarian: Premature metrics could distort disciplines into optimizing for marks instead of better reasoning.

Surviving idea: defer pattern indexing until at least a few diagnostic cases exist.

## Candidate Set

### A. Discipline Feedback Extraction Protocol

An optional protocol that reads `_branch.md`, `_state.md`, `finding.md`, and `docarchive/*`, then outputs:

- native outcome constraint,
- per-discipline observed gaps,
- evidence strength,
- confidence,
- maintenance candidates,
- evaluation gates.

Novelty: moderate. It reuses archive data but gives it a new diagnostic role.
Scrutiny survival: high. It avoids self-routing and does not require new marks on every discipline.
Fertility: high. It can feed discipline maintenance, loop diagnosis, and recurring-pattern analysis.
Actionability: high. It can be added as a protocol now.
Mechanism independence: high. Produced by lens shifting, combination, inversion, absence recognition, and domain transfer.

Verdict: SURVIVE.

### B. Sensemaking Handoff Telemetry

When a Sensemaking output feeds design or protocol decisions, add a small handoff block:

- unresolved thresholds,
- assumptions that matter downstream,
- confidence edges,
- what would change the framing.

Novelty: low-medium.
Scrutiny survival: medium. Useful, but may add noise to simple runs.
Fertility: medium. Helps Innovation and Critique evaluate ambiguity.
Actionability: medium-high.
Mechanism independence: medium.

Verdict: REFINE. Use only for design, protocol, or diagnostic inquiries until value is proven.

### C. Innovation Conditional-Candidate Gate Schema

For future or conditional candidates, require:

- adoption condition,
- test/evaluation gate,
- why not now,
- trigger for reconsideration.

Novelty: low-medium.
Scrutiny survival: high. Directly addresses the `YYYYMMDD-NN__slug` type of future option.
Fertility: high. Improves branch experiments and avoids vague "future maybe" recommendations.
Actionability: high.
Mechanism independence: medium-high.

Verdict: SURVIVE.

### D. Critique Upstream-Signal Mode

When the task is diagnostic or meta-maintenance, Critique should add an optional section:

- upstream framing adequacy,
- handoff completeness,
- candidate coverage,
- gate quality,
- residual ambiguity source.

Novelty: medium.
Scrutiny survival: high if optional. Risky if made universal.
Fertility: high. Gives later diagnostics a stronger evidence base.
Actionability: high.
Mechanism independence: high.

Verdict: SURVIVE, diagnostic-only.

### E. CONCLUDE Diagnostic Lessons Section

For diagnostic findings only, add a final section:

- discipline lessons,
- maintenance candidates,
- what not to change yet.

Novelty: low.
Scrutiny survival: medium-high. Useful in diagnostics, noisy in ordinary findings.
Fertility: medium.
Actionability: high.
Mechanism independence: medium.

Verdict: REFINE. Diagnostic-only.

### F. Archive Pattern Index

After multiple loop-diagnosis findings, create an index of recurring discipline gaps by source inquiry and evidence strength.

Novelty: medium.
Scrutiny survival: medium. Valuable later, premature now.
Fertility: high after enough cases exist.
Actionability: medium.
Mechanism independence: medium.

Verdict: DEFER.

### G. Broad Rewrite of Discipline Fundamentals

Rewrite Sensemaking, Innovation, Critique, or CONCLUDE fundamentals now based on this single archive.

Novelty: low.
Scrutiny survival: low. One successful inquiry without a corrected comparison is insufficient evidence.
Fertility: low-medium.
Actionability: medium, but risky.
Mechanism independence: low.

Verdict: KILL.

## Assembly Check

The strongest assembly is:

1. Add or use an optional Discipline Feedback Extraction protocol.
2. Keep the source archive untouched.
3. Use Critique as evaluator evidence, not authority.
4. Produce per-discipline maintenance hypotheses with confidence levels.
5. Add only narrow discipline changes that have clear gates.
6. Defer pattern indexing until multiple diagnostic cases exist.

This assembly solves the user's concern without introducing label-only hard routing or forcing self-verdicts into every discipline.

## Maintenance Candidate Gates

| Candidate | Gate |
|---|---|
| Discipline Feedback Extraction | Use on 3 completed inquiries. Keep only if it identifies non-obvious, actionable maintenance candidates without relitigating good outputs. |
| Sensemaking Handoff Telemetry | Try on the next 3 design/protocol inquiries. Keep only if Innovation or Critique explicitly uses the handoff. |
| Innovation Conditional-Candidate Schema | Try on the next 5 inquiries with future/deferred options. Keep if it reduces vague future recommendations. |
| Critique Upstream-Signal Mode | Use only in diagnostic/meta-maintenance tasks. Keep if later findings can cite its signals directly. |
| CONCLUDE Diagnostic Lessons | Use only in diagnostic findings. Keep if it prevents maintenance signals from being buried. |
| Archive Pattern Index | Start only after 3-5 diagnostic findings show repeated gaps. |

## Innovation Telemetry

- Generators applied: 4 / 4.
- Framers applied: 3 / 3.
- Convergence: yes. Five mechanisms converge on optional archive-forensic diagnosis rather than universal discipline self-marks.
- Survivors tested: 7 / 7.
- Failure modes observed: none.
- Overall: PROCEED.
