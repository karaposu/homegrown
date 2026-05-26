# Branch: navigation — factoring question (is iter-1 navigation wrongly defined?)

## Question

Is `/navigation`'s iter-1 definition wrongly factored — bundling what is structurally `/explore`-in-possibility-mode-over-the-route-space with a "perception-only, no selection" exclusion — and should `/navigation` be redefined as **`/explore` + selection-with-movement** (the user's proposed factoring)?

## Goal

A decision on `/navigation`'s right factoring, with three specific outcomes:

- **Determine whether `/navigation`'s "enumerate routes" half IS structurally `/explore` in possibility mode** over a specialized territory (the next-move-space rather than an artifact territory).
- **Determine whether selection should be part of `/navigation`** (the user's proposal: "explore + select-with-movement") or remain separate (iter-1's framing: navigation = perception, selection is human-chosen or meta-loop's job).
- **Articulate the implications** for the runner taxonomy (`/MVL`, `/MVL+`, `/meta-loop`, `/staged-explore`) and for `/meta-loop`'s architecture (which currently depends on Navigation = perception, separate from selection).

A good answer lets the user (i) confirm or revise iter-1 /navigation's framing; (ii) decide whether to ship a refactored /navigation or keep the current one; (iii) understand the cascade effects (especially on /meta-loop).

## Scope Check

**Question covers goal:** YES — the factoring question, the selection-inclusion question, and the cascade implications are all asked.

**Specific-vs-pattern check:** The user's claim — "navigation = explore + select" — is a specific factoring proposal. The underlying pattern is "which cognitive operations should navigation formalize, and where do its current boundaries cleanly cut vs. wrongly bundle?" Default applies: address the broader pattern; the user's specific proposal is one candidate among others.

## Operative constraints

1. **Inheritances from prior inquiries are preserved.**
   - `/explore` is defined per iter-2 + end-goal-aware + depth findings: purposive open-mode surfacing; 5-section skeleton; 5-entry NOT-list; resolution-level + depth-level Step 0 fields; staging via `/staged-explore` runner; per-item content depth D0–D4.
   - `/MVL`, `/MVL+`, `/meta-loop`, and `/staged-explore` runners are preserved as the current taxonomy; this inquiry tests whether /navigation needs refactoring relative to them.

2. **The user's specific framing must be honored:**
   - The claim: /navigation has been confusing its /explore part with something else; it is just /explore + select.
   - The implication: /navigation's iter-1 definition under-articulates what it is doing by stripping the selection step.

3. **/meta-loop's architectural dependency** must be considered. /meta-loop's design (per memory: "multi-head loops + merging loops as project trajectory") and current spec separate Navigation (perception) from selection (human-chosen). If /navigation absorbs selection, /meta-loop's separation needs revisiting.

4. **/explore's iter-2 + later commitments** must be considered. /explore now has artifact and possibility modes; can in principle operate over a next-move-space (possibility mode). This is the structural basis for the user's claim.

## Working hypotheses (to be tested)

- **H1:** /navigation's "enumerate routes" half IS structurally /explore in possibility mode over the next-move-space. The 16-type taxonomy is /navigation's labeling vocabulary for that specialized territory (per the depth inquiry, this is per-item labeling, not meaning-extraction).
- **H2:** /navigation's "no selection" exclusion in iter-1 is structurally motivated (separating perception from selection enables human review + meta-loop's design). The user's proposed "explore + select" framing would collapse this separation.
- **H3:** If H1 is right, /navigation reduces to: /explore (route-space, possibility mode) + a specialized labeling vocabulary (the 16-type taxonomy) + (optionally) a selection step. The discipline could be restructured.
- **H4:** Alternative framings exist beyond the user's "explore + select" and iter-1's "enumeration only" — e.g., (a) /navigation = labeled /explore + select as one discipline; (b) /navigation deprecated in favor of /explore-on-routes + a separate /select-move discipline; (c) iter-1 status quo with renaming for clarity; (d) something else.

## Relationships

- CONTINUES FROM: `devdocs/inquiries/2026-05-12_00-40__explore_discipline_from_scratch/` (original from-scratch /explore inquiry)
- CONTINUES FROM: `devdocs/inquiries/2026-05-12_10-06__explore_project_end_goal_design/` (end-goal-aware design; introduced /staged-explore runner and the 4-runner taxonomy)
- CONTINUES FROM: `devdocs/inquiries/2026-05-12_11-14__explore_surfacing_mechanism_depth/` (per-item content depth; introduced labeling vs anchor distinction)
- RELATED: `/meta-loop` (its architecture currently depends on Navigation = perception separate from selection)
