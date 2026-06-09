# Branch: Loop Diagnose - Discipline Verdict Source

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority`, the human correction, and the later improved inquiry at `devdocs/inquiries/2026-04-28_08-47__loop_diagnose_over_upstream_marks`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

## Goal

A good answer should identify evidence-backed failure hypotheses, confidence levels, affected discipline or runner stages, shortcoming types, maintenance candidates, and evaluation gates. It should explain why the prior inquiry did not reach the archive-first `LOOP_DIAGNOSE` conclusion found in the later inquiry, while avoiding exact root-cause claims when the evidence is weak.

## Scope Check

Question covers goal. The question asks for comparative diagnosis of a correction chain, and the goal requires failure hypotheses, evidence, confidence, and maintenance candidates.

## Correction Chain

- Prior path: `devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority`
- Corrected path: `devdocs/inquiries/2026-04-28_08-47__loop_diagnose_over_upstream_marks`
- Human correction:
  ```text
  Critique Should Produce Upstream Marks is not so logical. We already have docarchive folders which have critique outputs and other discipline outputs; they can be used to analyze without further processing or adding marks.

  We can create something like /Users/ns/Desktop/projects/native/homegrown/protocols/loop_diagnose.md and it can be used for inner loop diagnose.
  ```
- Optional context:
  ```text
  The user now asks to use `homegrown/protocols/loop_diagnose.md` to understand what went wrong in the prior finding and why it did not conclude the same archive-first diagnosis model found in the later inquiry's archived outputs.
  ```

## Required Reads

For both inquiry folders, read `_branch.md`, `_state.md`, `finding.md`, root discipline outputs if present, and `docarchive/` discipline outputs if present.

## Diagnostic Constraints

- Treat the human correction as evidence, not noise.
- Treat the corrected inquiry as comparative evidence, not ground truth.
- Prefer evidence-backed hypotheses over exact root-cause claims.
- Allow mixed or unknown attribution when evidence does not isolate one discipline.
- Produce maintenance candidates only when the diagnosis gives enough evidence to justify them.

## Relationships

- DIAGNOSES: devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority (weak prior inquiry)
- COMPARES WITH: devdocs/inquiries/2026-04-28_08-47__loop_diagnose_over_upstream_marks (later corrected inquiry)
- RELATED: homegrown/protocols/loop_diagnose.md (diagnostic framing protocol)
