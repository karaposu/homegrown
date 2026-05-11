# Branch: Meta-loop autonomy ladder and open design questions

## Question

How should the meta-loop be designed across an autonomy ladder (Level 0 = human runs everything, ascending to a Level N where the system runs the cycle), and what are the answers (or design options) for its three currently-unresolved parameters: (a) how many loops per meta-loop session, (b) how the loops are chained, and (c) which movement directions the meta-loop can take (only depth, or also width/sideways/upward/branch/merge/revisit)?

## Goal

A coherent design proposal that the user can use as the operational reference for meta-loop work, containing:

1. A **meta-loop autonomy ladder** (L0 → L_N) where each level specifies who plays each role (Worker / Navigator / Selector / Runner / Evaluator) — distinct from the Navigator-only ladder already in `enes/towards_cross_run_cognitive_steering_with_isolated_navigator_session.md`. The user has anchored L0 ("human as meta-loop, navigates AND runs each normal loop") and L1 ("human as meta-loop, navigation enhanced, human only runs loops"); the inquiry must propose L2, L3, and the terminal level with explicit role-allocation deltas.

2. Answers (or principled design options with verdicts) for the three unresolved parameters:
   - **Loop count**: how many MVL+ probes constitute one meta-loop session — fixed budget, convergence-gated, or unbounded?
   - **Chaining**: how does the output of probe N feed probe N+1 — linear chain, tree (one-to-many branch), graph (with revisit/merge), or something else?
   - **Movement directions**: depth-only, or the full Navigation taxonomy (DEEPEN, REFINE, REVISIT, MERGE, CONSOLIDATE, WIDEN, REFRAME, etc.)?

3. Explicit alignment with prior findings:
   - `devdocs/inquiries/2026-05-10_01-30__metaloop_navigator_session_relationship/finding.md` (session architecture: Navigator always isolated; sequential = ~3 session roles; multi-head = N+2)
   - `devdocs/inquiries/2026-04-27_20-45__meta_loop_whirl_navigation/finding.md` (meta-loop = stateful traversal engine; bounded meaningful traversal; v1 = sequential human-selected runner)

The user must be able to: (a) place themselves on the ladder today (currently L0), (b) see what changes at L1, (c) understand the design choices that determine when L2+ becomes buildable, and (d) reference clear positions on the three open parameters when writing the next runner spec.

## Scope Check

Question covers goal: YES, with one note. The question explicitly asks for ladder design AND the three open parameters AND a discussion of "how meta-loop should be or shouldn't be" — the goal compiles these into one coherent design proposal. The three sub-questions are tightly coupled (autonomy level constrains which loop counts / chaining patterns / movement directions are buildable) so they belong in one inquiry rather than three.

Specific-vs-pattern check: The question is about the meta-loop **as a pattern** (not about specific past traversals). Address the broader design pattern. The two prior findings provide the empirical anchor (specific architectural facts about session counts, role separation, what survives) that the design pattern must remain consistent with.
