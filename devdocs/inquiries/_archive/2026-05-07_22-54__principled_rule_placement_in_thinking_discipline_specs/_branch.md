# Branch: Principled Rule Placement In Thinking-Discipline Specs

## Question

Given that the previous finding at `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md` (the inquiry that produced two for-sure-missing rules — Rule 1 *Type-Aware Probe* and Rule 2 *Contextual Surround Pre-Scan* — for `homegrown/explore/references/explore.md`, the Structural Exploration discipline spec) recommended adding the SAME rule paragraph at TWO surfaces for Rule 1 (the Probe section + the Surface-Only Scanning failure-mode prevention) and at THREE surfaces for Rule 2 (the Scan section + the Premature Depth failure-mode prevention + Resolution Progression's Coarse Scan step), and given that this multi-surface duplication will bloat `explore.md` as more rules accumulate over time and create maintenance burden (every rule update must be applied at every surface), what is the principled placement strategy for refinement rules in a thinking-discipline spec that (a) gives each rule ONE canonical home as the single source of truth, (b) uses cross-references rather than text duplication when the rule connects to other natural reading paths, (c) scales as more rules are added without quadratic bloat, and (d) preserves cold-readability so that a reader on any natural reading path can still find the rule?

## Goal

A good answer should: (a) name the canonical home for Rule 1 (Type-Aware Probe) and Rule 2 (Contextual Surround Pre-Scan) with reasoning grounded in `explore.md`'s existing structure; (b) specify the cross-reference shape used at non-canonical surfaces (one-line pointer, not duplication); (c) state the GENERIC placement principle that applies to future rule additions (so this concern does not recur); (d) verify the strategy works when applied to the two existing rules; (e) verify the strategy avoids the bloat the user named; (f) preserve cold-readability for readers who arrive via different reading paths (the Probe section reader / the Surface-Only Scanning failure-mode reader / the runner executing the Resolution Progression).

## Scope Check

Question covers goal. The question asks for the placement strategy that satisfies four explicit properties; the goal asks for the canonical home per rule, cross-reference shape, generic principle, verification, and cold-readability preservation — all within the scope of how `explore.md` is organized.

## Required Reads

- `homegrown/explore/references/explore.md` — to understand the spec's existing structure (sections, sub-sections, components, failure modes, process steps).
- `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md` — the previous finding whose recommendation is being refined.
- `homegrown/protocols/conclude.md` — for the non-ambiguity principle that this finding must apply to itself (every reference to discipline-internal concepts must have parenthetical context on first use).

## Diagnostic Constraints

- The previous finding's recommendation is NOT being rejected — the two rules (Rule 1 Type-Aware Probe + Rule 2 Contextual Surround Pre-Scan) are still adopted. Only the PLACEMENT of those rules is being revised.
- The strategy must be GENERIC (applies to any thinking-discipline spec) so it stays useful as more rules accumulate.
- The strategy must respect `explore.md`'s existing structure (Modes / Components / Process Model / Coverage Strategy / Failure Modes / Execute Process) — no wholesale restructuring.
- The strategy must be MECHANICAL — a future contributor adding a new rule should be able to follow the strategy without judgment about where to place the rule.
- The non-ambiguity check from `homegrown/protocols/conclude.md` (the CONCLUDE protocol that compiles MVL+ inquiry artifacts into `finding.md`) applies to this finding too — every reference to a discipline-internal concept gets parenthetical context on first use.

## Relationships

- REFINES: devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md (the previous finding's placement recommendation)
- ANALYZES: homegrown/explore/references/explore.md (the spec being modified)
- RELATED: devdocs/inquiries/2026-05-07_22-10__finding_internal_reference_ambiguity_failure/finding.md (the prior inquiry that produced the non-ambiguity check; this finding applies the check to itself)
