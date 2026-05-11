# Branch: reflect_loop_diagnose_after_alignment_control
## Question
With `alignment_control.md` and `outcome_review.md` now created, what should happen to `reflect` and `loop_diagnose`, given that loop diagnose has worked well and reflect has not yet been used?
## Goal
A good answer should decide whether to patch, leave alone, integrate, defer, or retire `reflect` and `loop_diagnose`, while preserving the new alignment-insurance architecture and avoiding unnecessary complexity.
## Scope Check
Question covers goal.

## Context

Recent artifacts:

- `homegrown/contracts/alignment_control.md`
- `homegrown/protocols/outcome_review.md`
- `homegrown/protocols/loop_diagnose.md`
- `homegrown/reflect/SKILL.md`
- `homegrown/reflect/references/reflect.md`

User observation:

- `loop_diagnose` was working fine.
- `reflect` has not been used so far.
