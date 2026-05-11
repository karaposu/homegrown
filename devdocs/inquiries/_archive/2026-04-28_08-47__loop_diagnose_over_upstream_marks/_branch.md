# Branch: Loop Diagnose Over Upstream Marks

## Question

Should the prior finding replace "Critique should produce upstream marks" with a separate `LOOP_DIAGNOSE`-style protocol that analyzes existing inquiry artifacts and `docarchive/` outputs when inner-loop diagnosis is needed?

## Goal

A good answer should decide whether the prior recommendation is structurally wrong or merely imprecise, clarify the relationship between existing `docarchive/` artifacts, Critique outputs, and a separate diagnosis protocol, and produce a correction that can guide future MVL/MVL+ maintenance without adding unnecessary per-run mark processing.

## Scope Check

Question covers goal. The question targets the source and timing of upstream diagnosis, whether extra marks are necessary, how existing archived discipline outputs should be used, and whether `homegrown/protocols/loop_diagnose.md` is the better mechanism.

## Context

- Prior finding: `devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority/finding.md`
- Challenged section: `Critique Should Produce Upstream Marks`
- User correction: Critique outputs and other discipline outputs already exist in `docarchive/`; they can be analyzed later without adding more marks or further processing inside every loop.
- User proposal: create/use a protocol like `homegrown/protocols/loop_diagnose.md` for inner loop diagnosis.
- Artifact read: `homegrown/protocols/loop_diagnose.md`

## Relationships

- CORRECTS: devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority/finding.md (reassesses whether upstream diagnosis belongs inside Critique outputs)
- RELATED: homegrown/protocols/loop_diagnose.md (candidate protocol framing for diagnostic MVL+ runs)
