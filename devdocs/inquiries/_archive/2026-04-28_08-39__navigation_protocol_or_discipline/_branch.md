# Branch: Navigation Protocol Or Discipline

## Question

Should Navigation remain a separate discipline in Homegrown, or should it be reframed as an MVL+ command/use case with a Navigation protocol?

## Goal

A good answer should explain whether Navigation has a distinct cognitive operation, whether it should be implemented as a separate discipline or as a protocol wrapper around MVL+, how this relates to the atomic MVL/MVL+ model, and what practical changes should or should not be made now.

## Scope Check

Question covers goal. The question asks directly whether Navigation should be a protocolized MVL+ command or a separate discipline, and the goal requires deciding that while accounting for current architecture and future meta-loop use.

## Context

- The user is reconsidering Navigation's architectural status after creating `homegrown/protocols/loop_diagnose.md`, which is a protocol wrapper around MVL+ rather than a new discipline.
- `homegrown/navigation/references/navigation.md` currently defines Navigation as a boundary discipline whose operation is enumeration of possible next directions after a completed cognitive cycle.
- Prior finding `devdocs/inquiries/2026-04-27_20-26__navigation_mvl_integration/finding.md` concluded that Navigation should not be appended as a sixth MVL+ stage, but can be invoked conditionally after CONCLUDE.
- Prior finding `devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/finding.md` concluded that Navigation is the meta-loop's eyes, not its will.

## Relationships

- RELATED: 2026-04-27_20-26__navigation_mvl_integration (boundary hook decision)
- RELATED: 2026-04-27_20-45__meta_loop_whirl_navigation (Navigation as meta-loop eyes)
- RELATED: 2026-04-28_08-08__loop_diagnose_protocol_integration (protocol wrapper precedent)
