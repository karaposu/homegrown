# Branch: Navigation MVL Integration

## Question

Should the Navigation discipline be included inside the MVL/MVL+ loop, invoked conditionally at the loop boundary, or handled by a larger meta-loop that runs multiple MVL+ inquiries and uses Navigation to choose or branch next steps?

## Goal

A good answer should inspect `homegrown/navigation`, especially the Navigation reference model; inspect `enes/desc.md` and related prior findings about navigation, wayfinding, and continuous loops; then decide what Navigation is for, when it should run, how it relates to MVL/MVL+, and what the next practical integration step should be without prematurely overbuilding autonomous orchestration.

## Scope Check

Question covers goal. The question asks whether Navigation belongs inside MVL, at the boundary, or in a larger loop; the goal requires clarifying Navigation's role, its triggers, its relation to multi-head MVL logic, and the next practical integration point.

## Context

- Current Navigation spec: `homegrown/navigation/SKILL.md` and `homegrown/navigation/references/navigation.md`.
- User-referenced multi-head/autonomy context: `enes/desc.md`.
- Related context: `enes/what_is_meaningful_traversal.md`.
- Prior findings checked:
  - `devdocs/inquiries/_archive/post_completion_navigation/finding.md`
  - `devdocs/inquiries/_archive/wayfinding_navigation_unification_check/finding.md`
  - `devdocs/inquiries/_archive/next_step_taxonomy/`
  - `devdocs/inquiries/_archive/continuous_loop_priorities/finding.md`

## Relationships

- RELATED: continuous_loop_priorities (Navigation integration and continuous-loop roadmap)
- RELATED: wayfinding_navigation_unification_check (Navigation replaced Wayfinding and absorbed iteration-boundary steering)
- RELATED: next_step_taxonomy (Navigation taxonomy as action vocabulary)
- RELATED: post_completion_navigation (lightweight parent-return pointer as a Navigation-adjacent shortcut)
