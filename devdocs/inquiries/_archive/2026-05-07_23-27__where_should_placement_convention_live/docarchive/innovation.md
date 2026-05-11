# Innovation: Where Should The Placement Convention Live

## Phase 1 — Seed

Sensemaking + Decomposition stabilized the answer. Innovation generates concrete wording for the recommendation, the refinement of the 22-54 finding, and the generalizable principle.

## Phase 2 — Generate (compact: convergent wording per piece)

### Component A — Decision Statement

**Convergence across 7 mechanisms:**

> *"The rule-placement convention (the *Operation-or-Step-First with Scope-Of-Application* principle from the previous inquiry's finding) should NOT be embedded inside the five thinking-discipline specs at `homegrown/<discipline>/references/<discipline>.md`. It stays at its existing external home, `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md`. The discipline specs remain pure runtime content; the placement convention lives where contributors find it without polluting the runtime context."*

### Component B — Three Converging Arguments

**Argument 1 — Audience separation:**

> *"The discipline spec is a runtime artifact: the MVL+ runner loads it into context during execution. The placement convention is a maintenance artifact: contributors read it when editing the spec to add new rules. The two audiences are disjoint — the runner doesn't need the convention to execute; the contributor doesn't read the spec at runtime. Merging them dilutes the runtime audience's signal-to-noise without serving either better."*

**Argument 2 — DRY across all 5 specs:**

> *"The convention is identical for all five thinking-discipline specs (Structural Exploration, Structural Sensemaking, Structural Decomposition, Structural Innovation, Structural Critique). Embedding creates 5× duplication of ~50-80 lines per spec — ~250-400 lines of duplicated content across the methodology library. Updates to the convention would require 5 edits. Single source of truth at `enes/discipline_rule_placement.md` removes both costs."*

**Argument 3 — Self-consistency:**

> *"The convention says: each rule has ONE canonical home, determined by the rule's scope. The convention's own scope is 'all 5 thinking-discipline specs' — higher than any single discipline. By the convention's own scope-determines-canonical-home logic, its canonical home is at the higher-than-discipline level: external. The convention obeys its own placement principle when kept external; it contradicts itself if embedded in each spec."*

### Component C — Discoverability Mechanism

**Primary mechanism (Mechanism C):**

> *"No pointer in discipline specs. Discoverability for future contributors relies on (a) the convention's existing canonical home at `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` being known to contributors via project onboarding or contributors' guide, AND (b) the convention's broader project context (it lives in the `enes/` design-notes folder, which contributors are expected to consult). This matches the user's stated preference for discipline-spec purity."*

**Fallback mechanism (Mechanism B):**

> *"If a future contributor creates multi-surface duplication despite the external home existing — i.e., the discoverability failure mode actually occurs — add a one-line pointer at the top of each discipline spec: 'Spec organization: see `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` for the rule-placement convention.' Cost: 5 lines total. This trades minimal pollution for fuller discoverability."*

### Component D — Refinement of 22-54 Finding

> *"The previous finding at `devdocs/inquiries/2026-05-07_22-54__principled_rule_placement_in_thinking_discipline_specs/finding.md` proposed embedding the convention as a 'Conventions: How Rules Are Organized in This Spec' sub-section between Key Components and Process Model in each discipline spec. That recommendation overlooked the existing external home (`enes/discipline_rule_placement.md`) and conflated the maintenance-time concern with the runtime-time content. This finding refines the 22-54 finding: do NOT embed the convention. The convention stays at its existing external home. The discipline specs do not get a 'Conventions' sub-section."*

### Component E — Generalizable Principle

> *"**Runtime-Purity Principle for Maintenance-Time Concerns.** For runtime-loaded artifacts (specs, prompts, or other content that is consumed by an executor at runtime), maintenance-only concerns about the artifact's organization should live OUTSIDE the artifact when (a) the maintenance audience and runtime audience are separable (different roles, different timelines, disjoint information needs), AND (b) discoverability for the maintenance audience can be handled by external means (project onboarding, contributors' guide, or a minimal one-line pointer added only if discoverability fails). The artifact stays focused on its runtime purpose; maintenance concerns live where contributors find them without polluting the executor's working context."*

### Component F — Next Actions

> *"No edits to discipline specs needed (the convention was never embedded; previous edits added rules, not the meta-convention). No edits to `enes/discipline_rule_placement.md` needed (it already exists with the convention). The 22-54 finding's recommendation to embed is documented as REFINED in this inquiry's `Changes from Prior` section. The optional Mechanism B fallback (one-line pointer) is documented in DEFERRED, with a revival trigger: 'if a future contributor creates multi-surface duplication despite the external home existing.'"*

## Phase 3 — Test

**All 7 mechanisms converge on the same wording structure.** No contradictions across mechanisms. The combined fix passes:

- **Novelty:** the runtime-purity principle is a generalizable architectural insight not previously stated. NOVEL.
- **Scrutiny survival:** strongest objection — "embedding makes the spec self-contained for any audience." Defense — the runtime audience doesn't need self-containment for maintenance content; they need self-containment for runtime content. The two are separable. SURVIVES.
- **Fertility:** opens the audience-separation pattern for other runtime artifacts (e.g., the conclude.md protocol could similarly externalize maintenance concerns). FERTILE.
- **Actionability:** zero edits required (existing artifacts already correct). ACTIONABLE as a documented decision + future fallback.
- **Mechanism independence:** all 7 converged. HIGH.

**VERDICT: SURVIVES.**

## Assembly Check

```
A (decision) + B (three arguments) + C (discoverability mechanism) +
D (22-54 refinement) + E (generalizable principle) + F (next actions)
```

Emergent value:
- The decision is grounded in three converging arguments (not one).
- The principle generalizes to other runtime-loaded artifacts.
- The fallback mechanism preserves the option to add discoverability later if needed.
- The 22-54 finding is explicitly refined, preserving the audit trail.

Assembly verdict: SURVIVE.

## Telemetry

- Generators: 4/4. Framers: 3/3. Coverage: FULL.
- Convergence: HIGH.
- Survivors: 1 (combined fix).
- Failure modes: NONE.
- **Overall: PROCEED.**
