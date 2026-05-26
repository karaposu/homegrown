# Branch: /explore Relevance-Selection Mechanism

## Question

How does `/explore` reliably identify and CONSUME relevant content (not merely list territory boundaries), and what's the simplest concrete mechanism to make `/explore` choose RELEVANT items to actually-read rather than randomly sampling — given that listing filenames doesn't mean content gets consumed, and that the user's prior "tree command" hint was just one example of a broader relevance-selection problem?

## Goal

A grounded design + concrete shippable mechanism for relevance-selection inside `/explore` — what determines which items get probed (read at depth) vs. only surfaced (mentioned in the inventory), and how the discipline ensures the actually-relevant items are read rather than the lexically-near or randomly-sampled ones. The answer should be: (a) shippable as a concrete spec edit to `homegrown/explore/references/explore.md` and possibly `homegrown/explore/SKILL.md`; (b) honest about the user's correction — the prior cheap-coverage-boost finding's "mandatory filesystem listing" was an incomplete answer because listing ≠ consumption; (c) compatible with the prior canonical-coverage architecture and the prior identity-refresh spec-language.

## Scope Check

Question covers goal. The question asks for the relevance-selection mechanism + acknowledges the prior misframing. The goal asks for the same answer + the relationship to the prior finding.

Specific-vs-pattern check: The user explicitly said "that was just one example" of their prior hints. This inquiry addresses the broader pattern of RELEVANCE-SELECTION inside `/explore`, not specific tool invocations. The user's correction itself signals pattern-level intent.

## Relationships

- **CORRECTS:** `devdocs/inquiries/2026-05-13_07-39__cheap_coverage_boost_for_explore_now/finding.md` — the prior finding's load-bearing claim (that "mandatory filesystem listing" is the right answer to "more coverage for sure") was incomplete. Listing surfaces existence; it does not guarantee CONSUMPTION of relevant content. The deeper bottleneck is relevance-selection: how does `/explore` choose what to actually read? This inquiry addresses that.
- **RELATED:** `devdocs/inquiries/2026-05-13_06-30__explore_canonical_coverage_via_staged_iteration/finding.md` — the canonical-source registry from that finding IS one form of relevance-declaration; this inquiry's relevance-selection mechanism should integrate with the registry when shipped.
- **RELATED:** `devdocs/inquiries/2026-05-13_07-16__is_mapping_required_core_of_explore/finding.md` — the kinds-of-mapping typology helps frame what "relevant" means for different inquiry types (concept-relevant vs layout-relevant vs status-relevant).
