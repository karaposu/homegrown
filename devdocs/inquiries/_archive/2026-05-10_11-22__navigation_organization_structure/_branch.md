# Branch: Navigation Organization Structure

## Question

What artifact(s) should the `/navigation` discipline create per run, what should those artifacts contain (and not contain), and is there a need for a per-folder `_nav.md` (analogous to `_branch.md`) that tracks across time which navigation directions were calculated, which of those were explored, where (which downstream inquiry folder), and when — so that navigation activity in a folder is organized and inspectable rather than scattered?

In short: **how do we ensure Navigation is organized as a project artifact, with what structure?**

## Goal

A concrete proposal that names:

1. **What the `/navigation` discipline writes per run** — file name(s), location, exact contents specification.
2. **What the discipline must NOT include** in those artifacts (boundary against scope-creep).
3. **Whether a per-folder navigation-history file (`_nav.md` or equivalent) is needed**, and if yes:
   - Where it lives (folder placement).
   - What fields it tracks (directions calculated; selection state; downstream inquiry pointers; timestamps).
   - How it differs from / overlaps with the per-run navigation map artifact AND from `_meta_state.md` (the meta-loop's cross-inquiry state per `enes/loop_desing_ideas/meta_loop.md`).
4. **The specific answer to "Navigation Organization": what structure ensures someone landing in a folder can quickly see all navigation activity (calculated directions, explored ones, deferred ones, timestamps, follow-on pointers) without re-reading scattered finding files.**

The user must be able to: (a) decide whether to add `_nav.md` to the project's folder convention, (b) update the `/navigation` discipline spec at `homegrown/navigation/references/navigation.md` with concrete contents/no-contents lists, (c) understand the boundary between per-run artifact, per-folder history, and cross-inquiry meta-state.

## Scope Check

Question covers goal: YES. The question explicitly asks about per-run artifact + per-folder history + boundary against scope-creep + organization structure; the goal compiles these into a concrete proposal. Scope match is tight.

Specific-vs-pattern check: the question is structural (an organization-pattern claim), informed by the user's prior bloat experience. Address the broader pattern — how navigation activity is structured project-wide — not just one specific inquiry's needs.

**Explicit scope cut:** the inquiry does NOT redesign Navigation's cognitive content (the 16-type taxonomy, the 12 route fields, the warming protocol — these were already audited in `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md`). It focuses ONLY on the artifact / file / folder organization layer.
