# Branch: nav_should_be vs recent discussion — comparison

## Question

The user's note `devdocs/nav_should_be.md` describes TWO navigation modes the user envisions: (1) codebase-wide progressive concept map produced in stages — first run gives ~10 big concepts; second run takes each big concept and enumerates ~5-10 sub-concepts around it; subsequent runs go deeper at progressive resolution; (2) local directional navigation that points at specific source files, produces local artifacts, and may later contribute to (but never directly edit) the codebase-wide big map. The recent discussion (`devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md`) describes a different design centered on per-inquiry navigation: per-run `navigation_observer_<N>.md` + per-folder `_nav.md` + (deferred) per-meta-session `_meta_state.md`. The two visions overlap partially but are NOT the same — `nav_should_be.md`'s codebase-wide tier is absent from the recent discussion entirely.

**The question:** for each navigation use case (codebase orientation; per-inquiry next-direction; concept discovery; cross-inquiry traversal; resolution progression; UI/visualization; selection memory; bloat prevention), which design does it better, and why?

## Goal

A use-case × design comparison matrix the user can read in one pass to decide:
1. Where the two designs ALIGN (same use case, similar fit).
2. Where they COMPLEMENT (each handles a use case the other doesn't).
3. Where they CONFLICT (same use case, different shapes — pick one).
4. Whether the recent discussion is a SUBSET of `nav_should_be.md`'s vision (i.e., implements only Discussion 2 partially), or whether they are genuinely distinct designs that need merging.

The user must be able to: (a) see what each design serves better, (b) decide whether to merge the two designs into a unified spec OR keep them as two-tier (big-map + local), (c) identify the gap the recent discussion currently leaves (codebase-wide concept enumeration).

## Scope Check

Question covers goal: YES. The question explicitly asks per-use-case comparison; goal is a matrix + alignment/complement/conflict analysis + the merge-or-keep-separate question.

Specific-vs-pattern check: this is a structural comparison between TWO design proposals (both are pattern-claims). Address the broader pattern comparison; specific examples (the user's stage-1 run with 10 big concepts; the recent discussion's L0/L1 navigation_observer flow) are illustrative.

**Explicit scope cut:** the inquiry does NOT redesign either approach. It compares the two as-stated and identifies fit per use case. Recommendation can be "merge" or "complement" or "supersede" but the merging-design itself is a follow-on inquiry.
