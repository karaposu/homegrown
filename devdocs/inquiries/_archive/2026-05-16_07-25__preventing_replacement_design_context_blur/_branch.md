# Branch: Preventing Replacement-Design Context Blur

## Question
How should `cognitive_harness/` be organized or annotated so that designing a replacement for an existing experimental skill (e.g., `navigation/`) doesn't suffer context-blur from the existing version's files getting read into the design conversation — without removing the existing skills?

## Goal
A concrete organizational and/or annotational mechanism the user can adopt now, that:
- Lets replacement-design conversations stay clean of prior-version contamination (the agent shouldn't reflexively read or anchor on the old version when designing what should replace it).
- Keeps experimental skills accessible for reference, comparison, or later restoration.
- Doesn't impose constant maintenance churn on cannon skill workflows.
- Composes cleanly with the existing folder layout (`cognitive_harness/<skill>/SKILL.md` + sub-folders).

Operational test: when the user next says "let's design what should replace navigation," the agent should not pull `cognitive_harness/navigation/SKILL.md` into context unless the user explicitly asks for it as reference.

## Scope Check
Question covers goal: YES — the question targets the organization/annotation mechanism; the goal pins down what success looks like (clean replacement-design conversations + preserved accessibility).

Specific-vs-pattern: the user named `navigation/` specifically but described the issue as recurring ("such things"). Inquiry addresses the broader pattern — context-blur during replacement design for ANY non-cannon skill in `cognitive_harness/` — and uses `navigation/` as the load-bearing concrete instance.

Known cannon set (per user): `explore`, `innovate`, `MVL`, `MVL+`, `protocols/`, `sense-making`, `td-critique`. Known experimental set (residual from `ls cognitive_harness/`): `comprehend`, `contracts`, `decompose`, `meta-loop`, `navigation`, `reflect`, plus loose file `next_question_to_ask.md`. The inquiry must surface that `decompose` is listed by user as non-cannon even though `/MVL+` invokes a Decomposition discipline — this is a worth-confirming detail (the runtime decompose skill loads from `~/.claude/skills/decompose`, separate from the experimental `cognitive_harness/decompose/`).
