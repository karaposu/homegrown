# Branch: synthesize_vs_finding_split

## Question
Are SYNTHESIZE (as defined in `commands/inquiry.md` lines 252-285) and `finding.md` (as produced by `/MVL` and `/MVL+` at iteration completion) two distinct protocols currently conflated under one name, OR are they the same protocol with different implementations? Specifically: should the project recognize a separate "summary-taking" protocol (compile inquiry artifacts into a coherent verdict for inquiry-tree-traversers) and a separate "SYNTHESIZE" protocol (produce a project-level artifact in the project's audience-specific format), or is this distinction not load-bearing?

## Goal
A clear architectural verdict the user can act on:
- (a) **One protocol, currently underspecified:** SYNTHESIZE and finding.md are the same operation with different output locations and templates. Current `inquiry.md` SYNTHESIZE spec is just a less-formalized version of what `/MVL` does. Recommend: delete SYNTHESIZE section from `inquiry.md`; treat `finding.md` as the canonical mechanism; update `protocols/desc.md` to reflect.
- (b) **Two distinct protocols, currently conflated:** there's a "summary-taking" role (read inquiry artifacts → produce standardized verdict) AND a "SYNTHESIZE/artifact-construction" role (read finding/inquiry → produce project-native artifact in the project's format), and the current spec conflates them. Recommend: split into two named protocols with clear boundaries; rename one or both; update `inquiry.md`, `MVL.md`, `MVL+.md`, and `protocols/desc.md` accordingly.
- (c) **Same protocol with two valid implementations:** the operation is one (compile + present), but the output shape correctly differs by deliverable type. Current architecture is sound; just needs documentation clarification.

The user should leave with: a yes/no on whether to split into two protocols + concrete next-step list (which docs to update, what to rename if anything, what new spec content to write).

Connection to end-goal: `enes/desc.md`'s autonomy ladder includes Level 2-3+ capabilities like "system handles tactical self-improvement" and "parallel MVL loops with cross-comparison." At those levels, the system needs to autonomously produce project-level artifacts (new specs, code, plans) from completed inquiries. If "produce a project artifact" is genuinely distinct from "summarize the inquiry's verdict," the architecture needs the split now (named slot for the artifact-construction capability). If they're the same operation, finding.md's template just needs to be flexible enough to absorb both roles.

## Scope Check
Question covers goal. The trichotomy in the question (one-conflated / two-distinct / one-with-two-implementations) maps cleanly to the three verdict categories in the goal. The end-goal connection is part of the use-case investigation explicitly requested by the user.

## Context

- **Recently completed `synthesize_protocol_check` sensemaking** (in `devdocs/inquiries/synthesize_protocol_check/sensemaking.md`) examined the question and concluded SYNTHESIZE is "narrowed not superseded" — a routine vs non-routine distinction. The user pushed back: "does SYNTHESIZE do something extra than summarizing?" — and the honest answer was that SYNTHESIZE-as-currently-specified does NOT do anything extra; the "non-routine artifact construction" capability the prior sensemaking defended is intended but not actually implemented in the current spec.

- **`commands/inquiry.md` SYNTHESIZE section** (lines 252-285) describes 4 steps (read → compile → resolve inconsistencies → save to project location) and a deliverable-type table (spec / plan / report / RCA / decision document). Says "It transforms PRESENTATION — taking bottom-up exploration outputs and rewriting them top-down for a reader." Underspecified about the format-translation step.

- **`/MVL` finding.md template** is fixed: frontmatter (status / refines) + Question + Finding Summary + Finding + Next Actions (MUST/COULD/DEFERRED) + Reasoning + Open Questions (Monitoring/Blocked/Research Frontiers/Refinement Triggers). Three style rules. Saved INSIDE the inquiry folder. Self-contained for someone who hasn't seen the SIC outputs.

- **`thinking_disciplines/protocols/desc.md`** lists SYNTHESIZE as a Transfer Protocol: "Take scattered discipline outputs and produce a coherent deliverable for someone who wasn't in the thinking process. Decomposes into: sensemaking (resolve stale/inconsistent outputs) + critique (select what matters) + audience-aware restructuring. Quality test: 'Can someone who wasn't in the loop act on this?' Named but underspecified — needs full formalization."

- **`enes/desc.md`** autonomy ladder Level 2-3+ requires: system handles uncertain reviews (Level 2); system proposes its own architectural improvements (Level 3); parallel MVL loops with cross-comparison (Level 3+). Each of these implies the system autonomously produces project artifacts (new specs, code, etc.) from inquiry findings. The artifact-construction capability is on the autonomy roadmap.

- **The previous `protocols_relevance_check` finding** (this session) listed SYNTHESIZE as ALIVE in two places with different shapes — but didn't formally split it into two protocols. The current question asks whether that split should be formal.

- **The user's intuition (from the trigger turn):** "maybe there are 2 protocols, summary_taking (what finding.md does) and SYNTHESIZE, but currently SYNTHESIZE also works as summary taking. But maybe it shouldnt." — they're surfacing the conflation hypothesis explicitly.
