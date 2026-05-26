# Branch: /explore reference — old vs new (which to proceed with)

## Question

Which of the two `/explore` reference files should the project proceed with — `homegrown/explore/references/explore.md` (the original, pre-conversation spec) or `homegrown/explore/references/explore_accurate.md` (the newly-synthesized spec built from the four /explore-thread findings)? Specifically: does the old version have useful content the new version lacks, and does the new version fit the project's end-goals better?

## Goal

A decision on which file becomes the canonical `/explore` reference, with three specific outcomes:

- **A gap inventory** — what's in the old file that the new file does NOT have. Are any of those gaps load-bearing?
- **A capability inventory** — what's in the new file that the old does NOT have. Are those additions load-bearing for the project's end-goals?
- **An end-goal-fit assessment** — does the new spec serve the project's documented trajectory (Baldwin cycles per `enes/desc.md`; autonomy-ladder path; `/intuit` composability; `/staged-explore` runner architecture; `/navigation` specialization clarity) better than the old?
- **A recommendation** — proceed with old, proceed with new, proceed with new-plus-refinements, or hybrid. With concrete refinement actions if needed.

A good answer lets the user (i) understand exactly what the old preserves that the new might lose; (ii) understand what end-goal capabilities the new adds; (iii) decide which file the SKILL.md should load at Step 0 going forward.

## Scope Check

**Question covers goal:** YES — the question asks gap inventory, capability inventory, end-goal fit, and recommendation.

**Specific-vs-pattern check:** the question is about the SPECIFIC pair of files. The underlying pattern is "how do we decide between an old, focused spec and a newly-synthesized, richer spec when committing to one as canonical." Default applies: address the broader pattern in service of the specific decision.

## Operative constraints

1. **Inheritances from prior inquiries are preserved.** The four findings that built the new file's content are not being re-litigated. The question is only: does the new file FAITHFULLY embody them, AND does the old file have content that should survive into the new file?

2. **Both files are already on disk** at `homegrown/explore/references/`. The new file (`explore_accurate.md`) was created in the prior conversation turn; the old file (`explore.md`) was the pre-existing canonical reference loaded by `homegrown/explore/SKILL.md` at Step 0 across all `/explore` invocations in this conversation chain.

3. **The runtime-loading commitment** matters: whichever file is canonical is what the LLM running `/explore` loads at Step 0. The choice affects every future `/explore` invocation.

4. **The user's structural concern**: they explicitly asked whether the old has "really useful things" the new lacks. The inquiry must take this seriously rather than rubber-stamping the new file.

## Working hypotheses (to be tested)

- **H1:** The new file fits the project's end-goals substantially better because it integrates four iterations of refinement (verb-meaning, end-goal-aware additions, per-item content depth, /navigation specialization clarity) that the old file doesn't have.
- **H2:** The old file has 1–2 structural elements the new lacks — specifically (a) a terminal "Execute the Exploration Process" solid-instructions block that drives runtime behavior crisply, and (b) the conceptual "Exploration is NOT" comparator list at the top (vs research, sensemaking, innovation, browsing). The new file's content covers these requirements distributively but not in dedicated discrete blocks.
- **H3:** The recommendation is "proceed with new, with 1–2 refinements" — add the missing runtime-instructions block; optionally restore the conceptual comparator list. Not "proceed with old" and not "proceed with new as-is."
- **H4:** A side-by-side gap inventory is the right artifact to produce; pure narrative comparison would obscure specific items.

## Relationships

- CONTINUES FROM: `devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/` (original from-scratch /explore)
- CONTINUES FROM: `devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/` (end-goal-aware design)
- CONTINUES FROM: `devdocs/inquiries/2026-05-12_11-14__explore_surfacing_mechanism_depth/` (per-item content depth)
- CONTINUES FROM: `devdocs/inquiries/2026-05-12_11-40__navigation_factoring_question/` (/navigation factoring)
- RELATED: the new file `homegrown/explore/references/explore_accurate.md` was authored from the above 4 findings; this inquiry decides whether it becomes canonical.
