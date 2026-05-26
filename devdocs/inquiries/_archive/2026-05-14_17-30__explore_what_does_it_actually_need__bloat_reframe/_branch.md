# Branch: /explore — What Does It Actually Need? (Bloat-Reframe Beyond the Chain's E2 Scope)

## Question

The chain's E2 REPAIR (iteration #8, confirmed by iteration #9) targets three elements in `homegrown/explore/references/explore.md` (A1 Sources subsection; A2 Neighbor-disciplines table; A3 Specialization-pattern coupling to `/navigation`) and KEEPs the other nine catalogued changes (A4–A12) as research frontier. The user is signaling that this scope under-counts the bloat — specifically asking "why is Neighbor-disciplines needed AT ALL? why would `/explore` need to know about other disciplines?" — and stating directly that the chain's assistant has been "not understanding the full bloat for some reason."

The structural reframe: rather than ask "which of A1–A12 should be reverted?" (the chain's frame, anchored on the diff catalogue), ask **"what does `/explore` actually need in its references file to do its job?"** — a from-scratch frame that examines each element of the current spec on the question of structural necessity rather than catalogue-position.

Under that frame, what should `/explore`'s references file contain? Which currently-present elements (including A2 Neighbor-disciplines specifically, but also potentially A4–A12 protocol-overhead elements the chain KEPT as research frontier) are genuinely load-bearing for `/explore`'s execution, and which exist for organizational completeness, project-context-anchoring, or protocol bookkeeping that doesn't contribute to the discipline doing its work?

## Goal

A per-element verdict — element-by-element through the current `/explore` references — that classifies each element as one of:

- **NECESSARY** — load-bearing for `/explore` doing its work; structurally required.
- **HELPFUL** — useful for execution, not strictly required; KEEP unless cost justifies removal.
- **BLOAT** — not load-bearing for `/explore`'s execution; exists for completeness, cross-reference, project-anchoring, or protocol overhead. REMOVE.

The verdict should let the user act on one of three concrete outcomes:

(a) **Wider REPAIR than E2** — a list of additional elements (beyond A1+A2+A3) classified as BLOAT, with the user able to apply a larger but still selective revert.

(b) **Confirm A2 is BLOAT in full** (drop the Neighbor-disciplines table entirely, not just the project-paths column) and possibly other elements with it.

(c) **Direction reversal** — if the from-scratch frame reveals that most of CURRENT is BLOAT, the user may decide to switch to OLD as the base (path 2 from the prior sensemaking) with override-by-preference stated explicitly. The from-scratch frame would then have given that override evidence-grounded support beyond pure preference.

The goal is NOT to commit to one outcome a priori. The pipeline should genuinely apply the from-scratch frame and let the verdict shape emerge.

## Scope Check

Question covers goal. The question asks for a from-scratch evaluation of `/explore`'s current content; the goal articulates the three concrete outcomes that evaluation could support.

**Specific-vs-pattern check.** The question is partly specific (the user named Neighbor-disciplines) and partly pattern-level (the user's broader claim that "the full bloat" has been under-counted). Both readings need to be addressed.

- The SPECIFIC question (is Neighbor-disciplines needed?) gets a concrete element-level verdict.
- The PATTERN question (has the chain been under-counting bloat?) gets a from-scratch verdict on the full content, surfacing all BLOAT-classified elements.

**This question is iteration #10 of the related-topic chain that ran through iterations #1–#9 ending at `2026-05-14_17-00__ab_test_rerun_under_old_explore_spec/finding.md`. The chain's iteration-#10+ threshold required "structurally NEW questions" — refinements of the chain's existing E2 calibration would not qualify. This question DOES qualify because the FRAME is different (from-scratch necessity evaluation vs catalogue-position revert evaluation), not just the scope. The threshold is met.**

**User feedback signal.** The user's words "i think you are not understanding the full bloat for some reason" are direct feedback that the chain's conservative three-element calibration was too narrow. The pipeline must take that signal seriously rather than defending the chain's prior verdict. The pipeline's posture: examine /explore from the user's frame; if the chain was under-counting, surface that honestly; if not, defend the chain's calibration with evidence beyond "we already adjudicated that."

## Relationships

- **CONTINUES FROM:** `devdocs/inquiries/2026-05-14_17-00__ab_test_rerun_under_old_explore_spec/finding.md` (the chain's iteration #9 — concluded with E2 as the recommended action; this inquiry reframes the question rather than refining E2).

- **RELATED:** `devdocs/inquiries/2026-05-14_16-00__current_explore_rewrite_caused_mvl_run_problems/finding.md` (the chain's iteration #8 — source of the A1–A12 catalogue and the E2 REPAIR recommendation being reframed here).

- **RELATED:** `devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/finding.md` (sibling infrastructure: the A/B-test protocol that would let this inquiry's verdict be tested reversibly if it recommends wider action than E2).

- **RELATED:** `devdocs/sensemaking/switch_to_old_explore_and_edit_base.md` (immediate-prior sensemaking that surfaced the user's stronger preference and the chain's under-counting signal).

- **DEPENDS ON PROTOCOL:** `homegrown/protocols/loop_diagnose.md` (the chain's protocol context; this inquiry stands at the same axis but with a reframed question).
