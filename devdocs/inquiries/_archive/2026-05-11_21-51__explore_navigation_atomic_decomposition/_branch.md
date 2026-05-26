# Branch: Explore-Navigation Atomic Decomposition (Second Pass)

## Question

The 13-45 finding concluded that Explore and Navigation share an underlying operation — **TEM (Typed Enumeration Mapping)** — "concept mapping with content consumption" — and that the three instances (Explore; existing /navigation R2; north-star vision R3) differ only at the implementation-add-on level. The user requests a **deeper, second-pass examination**: not whether they share an operation (the 13-45 verdict stands as starting evidence), but **what is the structural decomposition of Explore and Navigation into atomic sub-operations, and what is the precise SHAPE of the overlap?** Is "TEM" actually a single atomic operation, or does the shared region decompose into multiple sub-operations (some truly shared; some implementation-specific) — and what does that decomposition reveal about the connection between the two disciplines?

## Goal

A structural decomposition of Explore and Navigation into atomic sub-operations (the smallest operationally distinguishable steps each performs). An explicit overlap map showing which sub-operations are SHARED vs which are EXPLORE-ONLY vs which are NAVIGATION-ONLY. A characterization of whether "TEM" is (a) one atomic operation; (b) a NAME for a cluster of sub-operations that overlap; (c) a HIGHER-LEVEL abstraction that consists of multiple shared sub-operations + bridging sub-operations. A more refined understanding of WHAT IS COMMON at the shared-core level — not at the operation-name level, but at the structural decomposition level.

The user's exact framing: *"lets try a second pass with that and try to understand more deeply the connection between explore and navigation. what is common, what kind of decomposition of them give us overlap concept etc. be careful"*

## Scope Check

Question covers goal: YES. The question asks for atomic decomposition + overlap shape; the goal compiles those plus a TEM-characterization verdict.

**Specific-vs-pattern check:** the user named two specific operations (Explore and Navigation). The broader pattern is "any pair of disciplines suspected of sharing an underlying operation could benefit from atomic decomposition + overlap mapping." Default reading: address the specific pair; note the pattern as Research Frontier observation only.

**The "be careful" instruction:**
- Don't rush the structural decomposition; atomic sub-operations require precise identification.
- Don't accept the 13-45 finding's TEM verdict uncritically as the deeper truth — test it via the decomposition. The decomposition might reveal TEM is precise; it might reveal TEM is a wrapper for sub-operations; it might reveal TEM mischaracterizes the actual overlap.
- Apply rigor at each phase. Resist labeling without structural backing.
- Honor the universal-discipline test where it applies (Sensemaking H4 — concept names: do "TEM" / "concept mapping" / "content consumption" represent real structural distinctions or are they proxies for something more refined?).

**Self-reference acuity:** HIGH. This inquiry uses the project's disciplines to investigate two of those disciplines' relationships. External anchoring required: the existing spec files at `homegrown/explore/references/explore.md` and `homegrown/navigation/references/navigation.md`; the 13-45 finding's verdict (as starting evidence, not as conclusion); the user's framing.

## Relationships

- CONTINUES FROM: `devdocs/inquiries/2026-05-11_13-45__is_explore_and_navigation_one_underlying_operation/finding.md` — that finding's TEM verdict is the starting evidence; this inquiry goes deeper.
- RELATED: `devdocs/inquiries/2026-05-11_13-30__explore_vs_navigation_overlap/finding.md` — superseded by 13-45 but relevant as the prior framing this inquiry refines.
- RELATED: `devdocs/patterns/typed-enumeration-mapping.md` — the pattern document the 13-45 finding created; its TEM characterization is what this inquiry tests at finer resolution.
- POTENTIALLY AFFECTS: `homegrown/explore/references/explore.md`; `homegrown/navigation/references/navigation.md`; `devdocs/patterns/typed-enumeration-mapping.md` — IF the deeper decomposition reveals a more refined characterization than TEM.
