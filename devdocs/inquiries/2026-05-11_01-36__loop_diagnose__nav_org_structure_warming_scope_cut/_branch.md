# Branch: Loop Diagnose — Navigation Organization Structure / Warming Scope-Cut

## Question

Given the weak prior result of inquiry `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md` (which framed navigation organization as PER-INQUIRY artifact organization — `navigation_observer_<N>.md` + `_nav.md` — and validated `homegrown/navigation/warmup/` as "out of scope, clean boundary," omitting that warming files ARE navigation's project-wide input organization layer), and the human correction signal ("if there is no mapping then how could navigation would work in the first place?"), and the in-place correction at `devdocs/sensemaking/2026-05-11__concept_mapping_as_default_prerequisite_for_navigation.md` (which identified that warming files are concept-map content in narrative form and that 11-22's frame-scope capture caused the downstream 22-46 comparison finding to call concept-mapping "a new capability" — wrong because the project already has it via warming) — **what is the EXACT wrong thing in 11-22, where in the artifact does it manifest, what causal mechanism produced it, and what maintenance candidate prevents the broader class of mistake?**

## Goal

A diagnosis per `homegrown/protocols/loop_diagnose.md` Step 4 deliverable shape: failure hypotheses with confidence levels + evidence triplet (prior / human correction / correction) + maintenance candidates with evaluation gates + diagnostic verdict. The goal is to:
1. **Pinpoint the exact line(s)** in 11-22 where the wrong thing originates and where it manifests.
2. **Identify the causal mechanism** (the specific pattern of failure within 11-22's process).
3. **Distinguish origin from downstream propagation** (11-22 was the origin; 22-46 inherited the framing).
4. **Test whether this is instance N=2 of frame-scope capture** (Memory failure was instance 1).
5. **Propose maintenance candidates** with explicit revival triggers.

The user explicitly asked "pinpoint the exact wrong thing," so the verdict must be precise — line-level when possible, not just structural.

## Scope Check

Question covers goal: YES. Question asks for exact wrong thing + manifestation + mechanism + maintenance; goal compiles these into the loop_diagnose deliverable shape.

Specific-vs-pattern check: this drill-down is about ONE specific finding's failure. The user's prior framing ("this is the second instance") suggests the wider pattern (frame-scope capture; previously diagnosed at `devdocs/inquiries/2026-05-09_21-15__loop_diagnose__memory_ambiguity_in_metaloop_ladder/finding.md` and refined at `devdocs/inquiries/2026-05-10_01-21__why_sensemaking_missed_memory_disambiguation/finding.md`). Address THIS specific instance with high confidence; reference the pattern + audit-revival implications.

## Correction Chain

- **Prior path:** `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md` (the navigation-organization finding that made the scope cut error).
- **Corrected path:** `devdocs/sensemaking/2026-05-11__concept_mapping_as_default_prerequisite_for_navigation.md` (today's sensemaking that diagnosed the error). Also: the downstream comparison finding `devdocs/inquiries/2026-05-10_22-46__nav_should_be_vs_recent_discussion_comparison/finding.md` where the prior's framing manifested as "new capability" mistake.
- **Human correction (raw):** *"but this is what needs to be done as default i think. if there is no mapping then how couuld navigation would work in the first place?"*
- **Optional context:** This is the SECOND instance of frame-scope capture in recent work (Memory failure was instance 1 — diagnosed in 2026-05-09_21-15 + 2026-05-10_01-21 + 2026-05-10_03-07 refactor candidate). The proposed Sensemaking refactor (`devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md`) has revival trigger ≥3 instances; this brings the count to 2.

## Required Reads

For 11-22 (prior):
- `_branch.md` (the scope cut at line 29).
- `finding.md` (the frame-exit verification at line ~256 that confirmed the scope cut).
- `docarchive/sensemaking.md` (was warming surfaced or excluded during the sensemaking phase?).
- `docarchive/decomposition.md` (was warming surfaced at decomposition?).
- `docarchive/innovation.md` and `docarchive/critique.md` (downstream-of-scope-cut work).

For correction:
- `devdocs/sensemaking/2026-05-11__concept_mapping_as_default_prerequisite_for_navigation.md` (today's sensemaking that did the frame-exit).

## Diagnostic Constraints

- Treat the human correction as evidence (canonically supported by audit I1: "warming is precondition for Navigation").
- Treat the correction (today's sensemaking) as comparative evidence, not ground truth.
- Prefer line-level evidence (the user asked for "exact wrong thing").
- Allow mixed attribution when evidence supports it (the failure has both ORIGIN in _branch.md scope cut AND MANIFESTATION in finding.md frame-exit confirmation).
- Step 5 caution applies to maintenance candidates from N=2 evidence (the refactor candidate is at the revival threshold; one more catch and it should escalate; this instance contributes to that count).

## Relationships

- DIAGNOSES: `devdocs/inquiries/2026-05-10_11-22__navigation_organization_structure/finding.md`
- COMPARES WITH: `devdocs/sensemaking/2026-05-11__concept_mapping_as_default_prerequisite_for_navigation.md` (the correction)
- RELATED: `devdocs/inquiries/2026-05-10_22-46__nav_should_be_vs_recent_discussion_comparison/finding.md` (downstream propagation site)
- INVOKED VIA: `homegrown/protocols/loop_diagnose.md`
- INSTANCE-OF: frame-scope capture pattern (instance 2; see `devdocs/inquiries/2026-05-10_03-07__refactor_sensemaking_perspective_for_frame_exit/finding.md` for the refactor candidate)
