# Branch: Explore vs Navigation — Why the Overlap?

## Question

The user observed that the **Explore** discipline (per `homegrown/explore/SKILL.md`: "maps unknown territory through iterative scan-signal-probe cycles, tracking the frontier between known and unknown and producing a confidence-tagged structural map") and the **Navigation** discipline (per `devdocs/nav_north_star.md`: whole-codebase iterative for-loop structure that surfaces directions of work, plus directional local mapping; produces nodes with status info like worked-on / blocked / considered) feel substantially overlapping — both produce maps via iterative work on a codebase. **Why is there such close overlap, and what is the actual structural distinction between them? Is navigation = "explore + assess" (an evaluation overlay on top of explore's mapping)? Is navigation a specialization of explore (a codebase-focused mode)? Is navigation a schema-overlay (explore + the project's 16-type taxonomy + 12 route fields)? Or are they genuinely separate disciplines whose surface overlap is incidental?**

## Goal

A clear structural diagnosis:

1. **Identify what each discipline actually does** at the spec level — Explore from `homegrown/explore/references/explore.md` and SKILL.md; Navigation from `nav_north_star.md` vision plus the existing `homegrown/navigation/` artifacts (16-type taxonomy; 12 route fields; warming files; audit findings).
2. **Map the overlap** — what operations are shared? What outputs are shared? What use cases are shared?
3. **Locate the distinction (if any)** — what does each discipline do that the other doesn't? Does Navigation add "assess" (work-status overlay); add "schema" (project-specific taxonomy); add "directionality" (work-direction framing); or something else?
4. **Diagnose the overlap's nature** — is it redundancy (the project has two disciplines doing the same thing — fix needed); is it specialization (one is a specialized mode of the other — naming/relabeling needed); is it complementary (each has its own irreducible operation — no fix needed); or is it composition (Navigation = Explore + X for some X)?
5. **Propose the operational consequence** — keep both as-is, merge them, rename one as a specialization, or restructure the relationship. What's the smallest move that respects the structural truth?

The user must be able to act on the verdict: keep both disciplines distinct, merge them, reframe one as a mode of the other, or define the composition relationship explicitly.

## Scope Check

Question covers goal: YES. The question asks why the overlap exists and what the structural distinction is; the goal compiles the diagnosis + operational consequence.

**Specific-vs-pattern check:** the user named a specific overlap (the iterative for-loop staged structure shared by both). The broader pattern is the meta-question of how the project's disciplines relate to each other when their surface descriptions overlap. Default: address the broader pattern (the explore-vs-navigation specific case is the focused instance; the broader pattern is "how should disciplines with overlapping outputs be structured in the project").

**Self-reference acuity:** moderate. This inquiry will USE Explore as its Exploration phase, mapping the territory between Explore and Navigation. Meta-application: did Explore's mandate help diagnose whether Navigation is part of Explore? Useful test.

**Apply the recently-adopted Premature Evaluation failure-mode discipline** during the Exploration phase of this inquiry. The Exploration phase must not reject candidate diagnoses with weighted-dimension reasoning; only confidence-mark them. (This is the failure mode just designed in `devdocs/inquiries/2026-05-11_13-00__is_exploration_overreaching_into_critique/finding.md`; testing it on a fresh inquiry.)

## Candidate diagnoses to consider (for orientation; not premature commitment)

- **Candidate A — Genuine redundancy.** The two disciplines do the same thing; one should be merged into the other.
- **Candidate B — Specialization.** Navigation is a domain-specific mode of Explore (Explore applied to codebase work-direction territory). Rename or reframe Navigation as Explore's "navigation mode" or similar.
- **Candidate C — Composition (Explore + Assess).** Navigation = Explore + an assessment overlay (work status: considered / worked-on / blocked / categorized into the 12-16 fields). The "Assess" component is what Explore lacks.
- **Candidate D — Schema-overlay.** Navigation = Explore + the project's specific schema (16-type taxonomy; 12 route fields; warming pre-condition layer). The schema is the irreducible add-on.
- **Candidate E — Separate but mechanism-sharing.** Both are genuinely separate disciplines that happen to share iterative-mapping mechanism; the overlap is incidental.
- **Candidate F — Specialization plus composition.** Navigation = Explore-specialized-to-codebase + Assess + Schema (multiple add-ons; specialized scope).
- **Possibility for new candidates to emerge during Exploration.**

Exploration may add candidates; Sensemaking may refine; Innovation may draft (if appropriate); Critique will adversarially test the survivor(s).

## Required reads

- `homegrown/explore/SKILL.md` (the user-facing Explore description).
- `homegrown/explore/references/explore.md` (the Explore discipline spec; canonical mandate).
- `devdocs/nav_north_star.md` (the Navigation vision document; just rephrased).
- `homegrown/navigation/references/navigation.md` (the existing Navigation discipline spec, if present — the current implementation vs the north-star vision).
- `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md` (the navigation audit; 16-type taxonomy + 12 route fields + Category I warming).
- `homegrown/sense-making/references/sensemaking.md` (for cross-discipline coherence comparison).
- `homegrown/td-critique/references/td-critique.md` (for cross-discipline coherence comparison).

## Design constraints

- **Apply the just-designed Premature Evaluation guardrail** during Exploration. No KILL-shape rejections of candidate diagnoses in the Exploration phase. Confidence-marking only.
- **Honor the difference between current Navigation (existing implementation) and north-star Navigation (vision).** The overlap might exist with one and not the other.
- **Don't prematurely merge.** Even if overlap is real, the merge decision depends on operational consequence (is merging cheap? does it lose information?).
- **Test self-application.** Apply the proposed verdict to this very inquiry's structure — if the inquiry used Explore as Exploration phase to map Explore-vs-Navigation, does that fact illuminate the boundary?

## Relationships

- RELATED: `devdocs/inquiries/2026-05-11_13-00__is_exploration_overreaching_into_critique/finding.md` (the just-completed inquiry on Exploration's mandate; informs this one's Exploration discipline).
- RELATED: `devdocs/inquiries/2026-05-10_03-50__navigation_established_audit/finding.md` (Navigation's canonical structure).
- RELATED: `devdocs/inquiries/2026-05-11_12-30__is_sensemaking_one_or_multiple_disciplines/finding.md` (the same shape of inquiry — discipline boundary diagnosis — applied to Sensemaking; methodology precedent).
- AFFECTS: `homegrown/explore/references/explore.md` and/or `homegrown/navigation/references/navigation.md` and/or `devdocs/nav_north_star.md` (depending on which candidate diagnosis wins).
