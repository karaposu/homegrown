# Branch: continuous_loop_priorities

## Question

What are the **top 5 things** to achieve, in priority order, before this project attempts real-application external validation — given the user's framing that the project's actual claim (the orchestrated continuous loop combining multiple MVL/MVL+ runs with /navigate to traverse thinking-space meaningfully) cannot be validated piecemeal by testing isolated disciplines, and therefore the continuous loop itself must be assembled and self-tested first?

## Goal

A defensible top-5 prioritized roadmap that the user can act on as the buildout sequence before doing real application tests:

1. Each of the 5 items has a clear scope (what's done = ?), an estimated effort, and a structural reason it precedes external testing.
2. The roadmap is sequenced — items earlier in the list block items later in the list, so the order matters.
3. The roadmap is bounded — 5 items, not "10 things plus a sub-list per item." Sequence beats comprehensiveness here.
4. The roadmap defers external application testing explicitly — it answers "what comes BEFORE that," not "should we ever test externally?" (Yes, eventually; just not until the loop exists.)
5. Reconciles the prior `devdocs/sensemaking/what_this_project_needs_most.md` finding's recommendation, which placed external validation second (after consolidation) and capability building third. The user's frame inverts: capability building (the continuous loop) is second; external validation is third.

## Scope Check

Question covers goal. Answering "top 5 to achieve before real-application tests" requires (a) accepting the user's frame (build the continuous loop before testing it), (b) enumerating candidate priorities, (c) sequencing them, (d) committing to exactly 5 (forcing prioritization), (e) reconciling with the prior sensemaking. All five sub-goals are covered.

## Context

- **The user's framing** (verbatim from their message): "after cleaning fundamental check that if all is still working good as before; figure out how to use navigate, maybe running after each MVL loop?; how to combine MVL loops; making sure that this combination of MVL loops are traversing thinking space in a meaningful way; and only after these we will have sort of continuous loop that we can try."
- **The structural argument behind the framing:** the project's stated end-goal (per `enes/desc.md`) is a self-improving cognitive system that runs parallel MVL loops with cross-comparison. Testing the disciplines in isolation tests the disciplines. Testing the orchestrated continuous loop tests the project's actual claim. The two are not interchangeable.
- **Prior sensemaking** (`devdocs/sensemaking/what_this_project_needs_most.md`) recommended consolidate → externally validate → build. The user's reframing: consolidate → build the continuous loop → validate (the loop, not the pieces).
- **Pending unfinished work that may or may not be in the top 5:**
  - Apply `inquiry_md_post_navigation_update_value_check`'s /inquiry deletion (formal, with stalled-inquiry SUPERSEDED markers).
  - Apply `telemetry_routing_protocol_classification`'s Phase 1 (5 disciplines get PROCEED/FLAG/RE-RUN) OR explicitly drop it.
  - Decide RESUME's fate (wire up or delete).
  - Build the continuous loop runner (does not yet exist).
  - Define /navigate's invocation point in the MVL flow.
  - Define how multiple MVL loops compose / cross-compare.
  - Define meaningful-traversal criteria so the system knows whether the loop is productive.
- **Existing capabilities the buildout depends on:**
  - 10 disciplines installed and functional (sense-making, innovate, td-critique, explore, decompose, comprehend, reflect, navigation; plus runners MVL, MVL+).
  - 2 protocols extracted (CONCLUDE — actively used; RESUME — extracted but not invoked).
  - install_for_claude.sh and install_for_codex.sh work end-to-end (just verified).
  - /navigate produces 16-type taxonomy enumeration (post-wayfinding-merger).
- **End-goal trajectory** (per `enes/desc.md`): autonomy-ladder Levels 0-4+, parallel MVL with cross-comparison, Baldwin cycles for self-improvement. Currently at Level 0. Continuous-loop assembly is the path from Level 0 to Level 1.
- **The "top 5" constraint forces prioritization.** The user is asking for sequencing, not a comprehensive list. Items 6+ exist but aren't on the critical path.

## Relationships

- REFINES: `devdocs/sensemaking/what_this_project_needs_most.md` — the prior sensemaking placed external validation second; this inquiry inverts (build continuous loop second; externally validate third).
- RELATED: `protocol_path_generalization` — most-recently-completed inquiry; its punch list contributes to consolidation.
- RELATED: `inquiry_md_post_navigation_update_value_check` — pending /inquiry deletion is part of consolidation.
- RELATED: `telemetry_routing_protocol_classification` — pending Phase 1 (discipline standardization) is part of consolidation.
- RELATED: `wayfinding_navigation_unification_check` — established /navigate as the canonical iteration-boundary discipline; the continuous loop will use it.
