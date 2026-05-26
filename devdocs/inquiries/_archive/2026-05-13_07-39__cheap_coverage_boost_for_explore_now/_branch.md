# Branch: Cheap Coverage Boost for /explore (Ship-Now)

## Question

What is the simplest near-term enhancement (or small set of enhancements) to the existing `/explore` skill that will give a guaranteed observable improvement in territory coverage — even at the cost of some additional context-budget consumption — by allowing or requiring `/explore` to use cheap deterministic tools (filesystem listing like `tree` or `ls -R`, broader file reads, etc.) to travel the territory more thoroughly than it currently does on inference alone?

## Goal

A concrete, immediately-shippable enhancement to `homegrown/explore/references/explore.md` (and possibly `homegrown/explore/SKILL.md`) — at most a small section addition or two refinement notes — that the user can apply today. The enhancement should be observable in the next `/explore` run (the user can SEE the coverage improvement) and structurally guaranteed (not dependent on the LLM's discretion). Acceptable to be context-extravagant; **NOT** acceptable to be complicated. Excludes: shipping `/staged-explore` (that's a separate runner), shipping the canonical-source registry (that's an inquiry-framing change), waiting for autonomy graduation. Includes: filesystem-listing requirements, default-read-set expansions, depth-level lift, mandatory cycles, etc.

## Scope Check

Question covers goal. The question asks for the smallest-but-effective enhancement to today's `/explore`; the goal asks for the same. The scope is bounded to enhancements that ship in the current spec + skill files (not new artifacts).

Specific-vs-pattern check: The user mentions "tree command" and "making it more allowed to travel the codebase" as examples of the kind of thing they want. Per default, the inquiry addresses the broader pattern — cheap-but-thorough coverage enhancements — using the user's examples as anchors but not limiting to them.

## Relationships

- RELATED: `devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md` (the prior canonical-coverage finding committed to a three-piece architecture including a `/staged-explore` runner; this finding's enhancement is explicitly NOT that runner — it's a smaller, in-`/explore`-only change shippable independently. Compatible.)
- RELATED: `devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md` (the prior identity-refresh finding committed to spec-language refinements; this finding's enhancement adds operational mechanism, not language. Compatible.)
