# Branch: Where Should The Placement Convention Live

## Question

Given that the rule-placement convention from the previous finding (`devdocs/inquiries/2026-05-07_22-54__principled_rule_placement_in_thinking_discipline_specs/finding.md` — the inquiry that produced the *Operation-or-Step-First with Scope-Of-Application* convention) already exists at `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` (the project's notes folder for cross-cutting design ideas), and given that the convention is identical across all five thinking-discipline specs in `homegrown/` (Structural Exploration, Structural Sensemaking, Structural Decomposition, Structural Innovation, Structural Critique — the discipline specs loaded into the runner's context at runtime when an MVL+ inquiry executes), should the convention ALSO be embedded as a "Conventions: How Rules Are Organized in This Spec" sub-section inside each discipline spec, or should it live ONLY at the external `enes/discipline_rule_placement.md` location, recognizing that (a) the user prefers discipline-spec purity for runtime use, (b) embedding causes 5× duplication of the same convention text, and (c) discipline specs loaded by the runner at runtime should not carry meta-organizational content unrelated to the discipline's runtime operation?

## Goal

A good answer should: (a) take a clear position (embed inside / keep outside / hybrid) with reasoning grounded in audience separation (runtime runner vs maintenance contributor), DRY (single source of truth), and the user's stated preference for spec purity; (b) consider discoverability for future contributors who edit a discipline spec without knowing about the convention; (c) propose a concrete placement decision for the convention; (d) propose any minimal cross-references or pointers needed for discoverability without polluting the discipline spec; (e) generalize the answer to a principle for similar future maintenance-artifact-vs-runtime-artifact decisions.

## Scope Check

Question covers goal. The question asks for the placement decision (embed / external / hybrid) with the three explicit constraints (purity / duplication / runtime-context purity); the goal asks for a concrete decision plus the generalizable principle.

## Required Reads

- `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` — the existing external home for the convention.
- `/Users/ns/Desktop/projects/native/homegrown/explore/references/explore.md` — the discipline spec recently edited; example of what the spec looks like without the convention embedded.
- `devdocs/inquiries/2026-05-07_22-54__principled_rule_placement_in_thinking_discipline_specs/finding.md` — the previous finding that proposed embedding the convention inside each spec (the recommendation now being reconsidered).
- `homegrown/MVL+/SKILL.md` and `homegrown/explore/SKILL.md` — to understand how discipline specs are loaded by the runner at runtime (informs the runtime-context-purity argument).

## Diagnostic Constraints

- The user has already expressed a preference: discipline-spec purity for runtime use; less complexity in the discipline prompt is better for development and iteration.
- The convention's external home (`enes/discipline_rule_placement.md`) ALREADY exists; no need to create it.
- The 22-54 finding's proposal to embed the convention inside each spec is being RECONSIDERED — this inquiry may revise that recommendation.
- The decision must respect both audiences: the runtime runner (loads discipline spec; needs no meta-organization) and the maintenance contributor (edits discipline spec; needs to know the convention).

## Relationships

- REFINES: devdocs/inquiries/2026-05-07_22-54__principled_rule_placement_in_thinking_discipline_specs/finding.md (this inquiry reconsiders that finding's "embed inside each spec" recommendation)
- ANALYZES: /Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md (the existing external home)
- ANALYZES: homegrown/explore/references/explore.md (the recently-edited discipline spec)
