# Branch: Resume Protocol Usecase

## Question

What is the main use case of the Resume protocol in Homegrown, does MVL/MVL+ already contain equivalent resume logic inline, and would using the separate Resume protocol add unique value?

## Goal

A good answer should explain when Resume is useful, what effect it would have if used, whether MVL/MVL+ already have an alternative resume path inside their runners, whether the standalone Resume protocol contains unique logic, and what should be done with it now: keep, wire in, revise, or archive.

## Scope Check

Question covers goal. The question asks about the Resume protocol's main use case, current non-use, practical effects, relationship to MVL/MVL+ inline resume logic, and whether it has unique logic; the goal requires answering all of those and recommending a disposition.

## Context

- User pasted the current installed MVL skill body, which includes an inline RESUME branch and Cross-Session Resume section.
- Relevant source files:
  - `homegrown/protocols/resume.md`
  - `homegrown/MVL/SKILL.md`
  - `homegrown/MVL+/SKILL.md`
  - `homegrown/meta-loop/SKILL.md`
- Related prior findings:
  - `devdocs/inquiries/_archive/protocols_relevance_check/finding.md`
  - `devdocs/inquiries/_archive/continuous_loop_priorities/finding.md`

## Relationships

- RELATED: protocols_relevance_check (prior audit of protocol relevance)
- RELATED: continuous_loop_priorities (prior roadmap for continuous-loop mechanics)
