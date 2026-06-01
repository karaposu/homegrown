# Branch: Inquiry Elaboration — Structure with Recent Context (redo of 09-54, adding recent-context as a third anchor)

## Question

- **Subject** — IE's **structure** (spec shape + output schema), refined to add **recent context** as a load-bearing input/anchor alongside the project goal and the original query.
- **Action** — REFINE the prior reconciled structural design (`2026-06-01_09-54`) by adding *recent-context rephrasing* as an additional output element, and integrating *recent context* as an input alongside *project goal* and *original query*.
- **Level** — discipline (spec + output artifact).
- **Observation targets** (each preserved separately):
  1. **Recent-context rephrasing as an output** — IE should produce a rephrasing of the inquiry **as it sits in recent context** (the immediately preceding conversation/work surrounding it), alongside the existing project-goal-grounded rephrasing and the simple rephrasing.
  2. **Recent context as an input** — for IE to do (1), it needs *recent context* as a first-class input, alongside project_goal and original_query.
  3. **What "recent context" means here** — define it intrinsically: the immediate surround of the inquiry (recent conversation turns, recent findings/inquiries, current work focus) — distinct from the *long-term* project goal and from the *static* original query text.
  4. **Where it lives in the 09-54 spec shape** — which §1 vocabulary entries / §2 components / §5 fields / §4 failure modes change; preserve the rest (self-containment; output-organized; intrinsic NOT-list; the editor-brief image).
  5. **The temporal layering** — make explicit that IE now grounds rephrasings against three anchors at different temporal layers: long-term (project goal), short-term (recent context), and the inquiry itself (the original query).
- **Deliverable shape** — a refined structural design = the 09-54 design + recent-context as a third input + a recent-context rephrasing output + the §1/§2/§4/§5 deltas + a section explaining the temporal layering of anchors.

**Question (one sentence):** Refining the reconciled IE structure from `2026-06-01_09-54` by adding **recent context** as a third input alongside *project goal* and *original query*, and **recent-context rephrasing** as an output alongside the project-goal-grounded rephrasing and the simple rephrasing — what does the updated, still-self-contained structural design look like, what does *recent context* mean intrinsically, where do the new pieces live in the §1/§2/§4/§5 shape, and how do the three anchors layer temporally?

## Goal

- **Criterion** — preserve every accepted commitment from 09-54 (self-containment / output-organized / intrinsic NOT-list / editor-brief image) and add *just* what the user asked for, intrinsically defined; do not silently re-introduce neighbor-naming or ecosystem awareness.
- **Use case** — the user will use this refined design to author IE's spec correctly with all three anchors and the corresponding rephrasings.
- **Desired outcome** — a structural design that explicitly carries recent-context as a peer anchor of project-goal, with a corresponding rephrasing output, and that makes the temporal layering of the three anchors visible.
- **What would fail** — (i) re-opening already-settled commitments (it IS a discipline; the output-organized self-contained 09-54 spine); (ii) defining "recent context" by naming external systems / disciplines (must be intrinsic); (iii) treating recent-context as identical to project-goal (collapsing the temporal layering); (iv) drifting into process (how the recent-context is collected/supplied — that's the runner's job).

## Source Input

```text
lets redo it the last inquiry. but this time lets also consider recent context rephrasing as an addition to project goal rephrasing and simple rephrasing
```

## Scope Check

Question covers goal: **YES** — the five observation targets cover the recent-context rephrasing addition (target 1), its required input (target 2), its intrinsic definition (target 3), its placement in the existing spec shape (target 4), and the temporal-layering frame (target 5). The Goal's "what would fail" fences the four anti-patterns.

Specific-vs-pattern: the user's instruction is specific (add recent-context to project-goal+simple); the structural answer is general (a third anchor + a corresponding rephrasing, temporally layered). Address the design pattern (three anchors at three temporal scales), grounded in the user's specific addition.

## Layer Commitment

**Primary layer: STRUCTURAL** — refining the spec's inputs + outputs (a new input; a new output element) within the already-settled output-organized shape. Not re-opening meaning; not designing the runner.

Out of scope:
- **Meaning** — discipline-hood (settled 22-30) and scope (settled 01-17). The verb is unchanged: still *elaborate the inquiry*.
- **Process** — *how* the recent-context is collected, who supplies it, when it is refreshed (next layer, runner-side).

This finding `refines:` `2026-06-01_09-54` (adds — does not correct — the recent-context dimension).

## Synthesis Trigger

Re-tested, not absorbed (CONCLUDE will enforce):

- `devdocs/inquiries/2026-06-01_09-54__inquiry_elaboration_structure_user_design_compare/finding.md` — **controlling prior.** Commits: the reconciled, self-contained, output-organized design; inputs `{project_goal, original_query}`; outputs `{why_makes_sense, scope_small/big, 3 rephrasings, requests[]+how_connected}`; intrinsic NOT-list; intrinsic failure modes; reference-authority dropped/re-homed; editor-brief image. Re-test: does adding *recent context* as a third anchor preserve every commitment, or does it require any to bend?
- `devdocs/inquiries/2026-06-01_01-17__inquiry_elaboration_scope_and_coverage/finding.md` — the settled scope (operate on the request, perceive not act, object/mode rule). Re-test: does recent-context still operate on the request (not the problem) and still emit (not act)?
- Project-memory constraint `feedback_disciplines_self_contained` (no outbound pointers to other disciplines / design-history). Re-test (artifact-grounded): does "recent context" remain intrinsically defined, naming no other discipline / no external system?
