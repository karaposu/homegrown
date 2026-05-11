# State: nav_should_be vs recent discussion — comparison

## Flow-type
extended

## Pipeline
E → S → D → I → C (always)

## Progress
- [x] Exploration
- [x] Sensemaking
- [x] Decomposition
- [x] Innovation
- [x] Critique

## Iteration
1

## Status
COMPLETE

## Next Discipline
—

## Relationships
- COMPARES: devdocs/nav_should_be.md (the user's two-mode navigation vision)
- COMPARES: devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md (the recent discussion's per-inquiry-centered design)
- RELATED: devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md (audit of canonical navigation; both designs build on it)

## History
- 2026-05-10: Created. Question: per-use-case comparison of `nav_should_be.md`'s two-tier vision (codebase-wide big map + local directional artifacts) vs the recent discussion's per-inquiry-centered design (navigation_observer files + _nav.md). Goal: a matrix the user can use to decide whether to merge the designs or keep two-tier.
- 2026-05-10: Exploration complete. Artifact mode, signal-first. 8 regions; 12 signals; load-bearing unit-of-enumeration distinction surfaced. Manual structural check: PASS.
- 2026-05-10: Sensemaking complete. SV1→SV6; 5 ambiguities (4 HIGH, 1 MEDIUM-HIGH); load-bearing distinction stabilized; verification need surfaced. Manual structural check: PASS.
- 2026-05-10: Decomposition complete. Hub-spoke topology: P1 → parallel(P2/P3) → P4. 4 pieces; 5 interfaces. 8/8 PASS. Manual structural check: PASS.
- 2026-05-10: Innovation complete. Min coverage; P3 verification EXECUTED with PARTIAL result; 4 pieces committed. No failure modes. Manual structural check: PASS.
- 2026-05-10: Critique complete. 10 dimensions; 4 candidates: 2 SURVIVE clean, 2 SURVIVE w/ caveat. 0 KILL. Self-reference mitigated. Convergence: TERMINATE. Manual structural check: PASS.
- 2026-05-10: CONCLUDE complete. finding.md compiled with 2 caveats applied (P2 abstraction-asymmetry note integrated; P4 historical-document vocabulary note integrated). Discipline outputs archived (5 files). Status: COMPLETE. One-sentence answer: "The two designs COMPLEMENT, not CONFLICT — they target two different cognitive operations (canonical /navigation = post-cycle typed-route enumeration; concept-mapping = territory discovery at progressive resolution). nav_should_be wins concept-mapping use cases (orientation / discovery / resolution / UI / onboarding); Recent wins post-cycle-navigation use cases (per-inquiry next-direction / selection memory / bloat prevention); ties on cross-inquiry traversal + map merging. multi_resolution_navigation's patterns are reusable but the protocol can't bootstrap concept-mapping. Recommendation: keep Recent as-is; introduce concept-mapping as new lightweight protocol when user is ready (DEFERRED per Step 5; needs one manual concept-mapping run as evidence first)."
