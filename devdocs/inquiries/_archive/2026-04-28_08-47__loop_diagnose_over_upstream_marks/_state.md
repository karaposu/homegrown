# State: Loop Diagnose Over Upstream Marks

## Flow-type
extended

## Pipeline
E -> S -> D -> I -> C (always)

## Progress
- [x] Exploration
- [x] Sensemaking
- [x] Decomposition
- [x] Innovation
- [x] Critique

## Iteration
1

## Status
COMPLETE

## Next Discipline
None

## Relationships
- CORRECTS: devdocs/inquiries/2026-04-28_08-27__discipline_verdict_source_of_authority/finding.md (reassesses whether upstream diagnosis belongs inside Critique outputs)
- RELATED: homegrown/protocols/loop_diagnose.md (candidate protocol framing for diagnostic MVL+ runs)

## History
- 2026-04-28 08:47: Created. Question: should upstream diagnosis be handled by a separate LOOP_DIAGNOSE-style protocol over archived artifacts instead of by adding upstream marks to Critique outputs?
- 2026-04-28 08:51: Exploration complete. It found that existing `docarchive/` artifacts are the evidence substrate, and `LOOP_DIAGNOSE` is a cleaner boundary than mandatory Critique upstream marks.
- 2026-04-28 08:51: Structural check not run because `tools/structural_check.sh` is not present in this repo.
- 2026-04-28 08:55: Sensemaking complete. It stabilized the archive-first, diagnose-on-demand model and rejected mandatory upstream marks in routine Critique.
- 2026-04-28 08:58: Decomposition complete. It separated routine Critique, archive storage, diagnostic protocol, maintenance candidates, and future adoption criteria.
- 2026-04-28 09:02: Innovation complete. It selected explicit `LOOP_DIAGNOSE` over archived artifacts, with optional Critique notes and deferred formal hooks.
- 2026-04-28 09:06: Critique complete. It killed mandatory upstream Critique marks and selected archive-first, on-demand `LOOP_DIAGNOSE` as the clean survivor.
- 2026-04-28 09:10: CONCLUDE complete. The finding corrects the prior upstream-marks recommendation: archive first, diagnose on demand with `LOOP_DIAGNOSE`; status COMPLETE.
