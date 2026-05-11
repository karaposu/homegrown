# State: MVL Compact Prevention Without Core Changes

## Flow-type

extended

## Pipeline

E -> S -> D -> I -> C

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

—

## Relationships

- RELATED: devdocs/inquiries/2026-05-05_17-27__compact_mvl_execution_trigger_diagnosis/ (diagnosed the compact execution failure this inquiry aims to prevent)

## History

- 2026-05-05: Created. Question: how to prevent compact MVL/MVL+ execution without changing core MVL or sub-skill prompts?
- 2026-05-05: Scope corrected by user. Narrow edits to relevant peripheral/rules sections of MVL/MVL+ skill files are allowed; core loop rewrites and sub-skill discipline rewrites are out of scope.
- 2026-05-05: Source correction by user. Analyze `homegrown/MVL+/SKILL.md` and `homegrown/MVL/SKILL.md` as source-of-truth files, not installed copies under `/Users/ns/.codex/skills/`.
- 2026-05-05: Exploration complete. Structural checker unavailable; manual section check passed. Source map: MVL+ already has anti-batch wording, MVL classic is weaker, and prevention likely belongs in runner invariants plus state/check lifecycle.
- 2026-05-05: Sensemaking complete. Structural checker unavailable; manual SV1-SV6 section check passed. Stabilized model: existing prompts are not core-wrong; they need narrow invariant/rules hardening.
- 2026-05-05: Decomposition complete. Structural checker unavailable; manual seven-step section check passed. Fix decomposed into runner invariant, state ledger, checker fallback, CONCLUDE boundary, parity, and deferred tooling.
- 2026-05-05: Innovation complete. Structural checker unavailable; manual mechanism/assembly section check passed. Survivor: add a narrow Discipline Transaction Invariant block to both Homegrown MVL runners; kill generic louder warning.
- 2026-05-05: Critique complete. Structural checker unavailable; manual critique section check passed. Verdict: terminate; narrow runner invariant patch survives, generic warning and sub-skill edits killed.
- 2026-05-05: COMPLETE. Conclusion: prevent compact MVL/MVL+ execution by adding a narrow Discipline Transaction Invariant to `homegrown/MVL/SKILL.md` and `homegrown/MVL+/SKILL.md`; do not rewrite core loops or sub-skills.
