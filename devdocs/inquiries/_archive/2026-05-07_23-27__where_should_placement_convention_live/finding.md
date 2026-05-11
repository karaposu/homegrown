---
status: active
type: spec_organization_decision
refines: devdocs/inquiries/2026-05-07_22-54__principled_rule_placement_in_thinking_discipline_specs/finding.md
analyzes:
  - /Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md
  - /Users/ns/Desktop/projects/native/homegrown/explore/references/explore.md
  - /Users/ns/Desktop/projects/native/homegrown/MVL+/SKILL.md
---
# Finding: The Placement Convention Stays External — Don't Embed In Discipline Specs

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-07_22-54__principled_rule_placement_in_thinking_discipline_specs/finding.md` (the inquiry that produced the *Operation-or-Step-First with Scope-Of-Application* placement convention and recommended adding it as a "Conventions: How Rules Are Organized in This Spec" sub-section between Key Components and Process Model in each thinking-discipline spec).

**Revision trigger:** the user observed that the placement convention already exists at an external location — `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` (the project's design-notes folder for cross-cutting architectural ideas). The user pointed out that embedding the same convention inside each discipline spec adds extra complexity to the discipline prompt and reduces purity. The user values discipline-spec purity for runtime use, where lower complexity supports better iteration on the discipline itself.

**What's preserved:** the placement convention itself. The *Operation-or-Step-First with Scope-Of-Application* principle, its three categories (operation-level / step-level / failure-only-form), the scope test, and the cross-reference shape all remain valid. The two rules from the lineage (Rule 1 *Type-Aware Probe* and Rule 2 *Contextual Surround Pre-Scan*) and their placements in `homegrown/explore/references/explore.md` (the Structural Exploration discipline spec) also remain valid.

**What's changed:** the recommendation to embed the convention as a sub-section inside each discipline spec is REJECTED. The convention stays at its existing external home; discipline specs do not get a "Conventions" sub-section.

**What's new:** an articulated **Runtime-Purity Principle for Maintenance-Time Concerns** that generalizes the decision to similar future cases involving other runtime-loaded artifacts.

**Migration:** no edits to existing files needed. The previous lineage's edits to `homegrown/explore/references/explore.md` (Rule 1 and Rule 2 placements + cross-references) stand. The 22-54 finding's "Conventions sub-section" is documented here as REJECTED. If a future contributor creates multi-surface rule duplication despite the external home existing, the fallback action (Mechanism B — adding a one-line pointer at the top of each discipline spec) is documented in DEFERRED.

## Question

You asked: *"i am thining adding this to the discpiline itself makes sense or not? this info already exiss in /Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md and maybe it shouldnt be exist in the discipine and add extra complexity. after all how pure we can write our discipline prompts the better they cna be developed and improved"*

The question is whether the placement convention from the previous inquiry's finding (the *Operation-or-Step-First with Scope-Of-Application* principle) should be embedded inside each thinking-discipline spec at `homegrown/<discipline>/references/<discipline>.md` (the runtime-loaded specs that the MVL+ runner consumes during execution), OR whether it should live ONLY at the existing external location at `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` (the project's design-notes folder). You weighted the question with three concerns: (a) discipline-spec purity for runtime use, (b) the convention's existing external home, and (c) avoiding extra complexity in the discipline prompt.

## Finding Summary

- **Decision: don't embed the convention in discipline specs.** The convention stays at its existing external home (`/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md`). The discipline specs at `homegrown/<discipline>/references/<discipline>.md` remain pure runtime content — no "Conventions" sub-section is added.

- **Three converging arguments support this decision:**
  - **Audience separation.** The discipline spec is a runtime artifact (loaded by the MVL+ runner into context during inquiry execution; the runner consumes it to perform exploration / sensemaking / etc.). The placement convention is a maintenance artifact (read by contributors when editing specs to add new refinement rules). The two audiences are disjoint — the runner doesn't need the convention to execute; the contributor doesn't read the spec at runtime. Merging them dilutes the runtime audience's signal-to-noise without serving either better.
  - **DRY across all 5 thinking-discipline specs.** The convention is identical for `homegrown/explore/`, `homegrown/sense-making/`, `homegrown/decompose/`, `homegrown/innovate/`, and `homegrown/td-critique/`. Embedding creates 5× duplication of ~50-80 lines per spec — ~250-400 lines of duplicated content across the methodology library. Single source of truth at the external home removes both the duplication and the synchronization burden.
  - **Self-consistency.** The convention itself says: each rule has ONE canonical home, determined by the rule's scope. The convention's own scope is "all 5 thinking-discipline specs" — higher than any single discipline. By the convention's own scope-determines-canonical-home logic, its canonical home is at the higher-than-discipline level: external. The convention obeys its own placement principle when kept external; it contradicts itself if embedded in each spec.

- **Discoverability is handled in two tiers:**
  - **Primary (Mechanism C):** no pointer in discipline specs. Contributors learn about the convention via the project's design-notes folder structure (`enes/`) and any onboarding or contributors' guide. Aligns with the user's stated preference for spec purity.
  - **Fallback (Mechanism B):** if a future contributor creates multi-surface rule duplication despite the external home existing, add a one-line pointer at the top of each discipline spec: *"Spec organization: see `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` for the rule-placement convention."* Cost: 5 lines total. Trades minimal pollution for fuller discoverability. Documented in DEFERRED with explicit revival trigger.

- **Refinement of the 22-54 finding.** The previous finding at `devdocs/inquiries/2026-05-07_22-54__principled_rule_placement_in_thinking_discipline_specs/finding.md` proposed embedding the convention as a "Conventions: How Rules Are Organized in This Spec" sub-section between Key Components and Process Model in each spec. That recommendation overlooked the existing external home and conflated maintenance-time concerns with runtime content. This finding refines that recommendation: do NOT embed.

- **Generalizable principle: Runtime-Purity Principle for Maintenance-Time Concerns.** For runtime-loaded artifacts (specs, prompts, or other content consumed by an executor at runtime), maintenance-only concerns about the artifact's organization should live OUTSIDE the artifact when (a) the maintenance audience and runtime audience are separable (different roles, different timelines, disjoint information needs), AND (b) discoverability for the maintenance audience can be handled by external means (project onboarding, contributors' guide, or a minimal one-line pointer added only if discoverability fails). This generalizes beyond the placement convention to similar future decisions about other runtime-loaded artifacts in the project.

- **Verdict: ACTIONABLE as a documented decision.** No file edits required (the convention was never embedded; previous lineage edits to `homegrown/explore/references/explore.md` only added the two rules + their cross-references, not the meta-convention). The 22-54 finding's embedding recommendation is documented here as REJECTED with explicit reasoning. The fallback action (Mechanism B pointer) is documented in DEFERRED with revival trigger.

## Finding

### 1. Why this matters — separating runtime artifacts from maintenance artifacts

The thinking-discipline specs at `homegrown/<discipline>/references/<discipline>.md` are runtime artifacts. The MVL+ runner spec at `homegrown/MVL+/SKILL.md` (the prompt that defines how MVL+ executes) explicitly says: *"Load only the current discipline's spec and required references. Use `_branch.md`, `_state.md`, and already-saved prior discipline outputs as the discipline's input."* When an MVL+ inquiry runs Exploration, the Structural Exploration discipline spec at `homegrown/explore/references/explore.md` gets loaded into the runner's working context. Every paragraph in the spec consumes context-window space and demands the runner's attention.

The discipline's runtime content (modes, components, process model, coverage strategy, failure modes, execute-process instructions) is directly used during execution: the runner consults these to decide what scan/probe to do, what failure modes to watch for, when to stop. This is the spec's RUNTIME RESPONSIBILITY.

The placement convention is not runtime content. The runner does not consult it during execution. It would not change any decision the runner makes about how to scan, what to probe, when to converge. Its presence in the spec adds noise without adding signal — for the runtime audience.

The placement convention is a maintenance artifact. It is consulted when a contributor edits a spec to add a new rule (e.g., a refinement rule from a future LOOP_DIAGNOSE finding). The contributor reads the convention, decides the canonical home for the new rule, makes the edit. The convention does not need to live IN the spec; it needs to be DISCOVERABLE by the contributor.

This is a separation-of-concerns issue. The two audiences have disjoint needs. Merging them by embedding the convention in the spec serves the maintenance audience minimally (a contributor still has to decide, and the convention text is visible) while polluting the runtime audience's context (every MVL+ run loads the convention even though no execution uses it).

Your instinct — that adding the convention to the discipline adds extra complexity and reduces spec purity — is structurally correct.

### 2. The three converging arguments

Three independent arguments converge on the same conclusion: don't embed.

**Argument 1 — Audience separation.** The runtime runner and the maintenance contributor are different roles. The runner executes inquiries; the contributor edits specs. Different timelines (runtime vs maintenance). Different information needs (runtime semantics vs spec-organization rules). Different artifacts (loaded discipline spec vs design-notes folder). Combining their information needs into one artifact serves neither audience well.

**Argument 2 — DRY.** The placement convention is identical for all five thinking-discipline specs (Structural Exploration at `homegrown/explore/references/explore.md`; Structural Sensemaking at `homegrown/sense-making/references/sensemaking.md`; Structural Decomposition at `homegrown/decompose/references/decompose.md`; Structural Innovation at `homegrown/innovate/references/innovate.md`; Structural Critique at `homegrown/td-critique/references/td-critique.md`). Embedding the convention creates 5× duplication of ~50-80 lines per spec — totaling ~250-400 lines of duplicated content across the methodology library at `homegrown/`. Updates to the convention (if it ever evolves) would require 5 edits. Single source of truth at the external home (`/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md`) removes both the duplication and the synchronization burden.

**Argument 3 — Self-consistency.** The placement convention itself says: *"each rule has ONE canonical home, determined by the rule's scope. ... When in doubt, the more specific scope wins."* Apply this to the convention itself. The convention's scope is "all 5 thinking-discipline specs" — broader than any single discipline. By the convention's own scope-determines-canonical-home logic, its canonical home should be at a higher-than-discipline level. External placement at `enes/discipline_rule_placement.md` is the correct location by the convention's own rules. Embedding the convention in each discipline spec would have the convention contradicting itself.

The three arguments converge: don't embed.

### 3. Discoverability — primary mechanism and fallback

A reasonable concern: if the convention is external and there's no pointer in the discipline spec, how does a future contributor (who edits a spec to add a new rule) learn about the convention?

**Primary mechanism (Mechanism C — no pointer in spec):** discoverability relies on the convention's existing canonical home at `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` being known to contributors via project onboarding or contributors' guide. The `enes/` folder is the project's design-notes folder for cross-cutting architectural ideas; contributors are expected to consult it. This matches the user's stated preference for discipline-spec purity (zero pollution).

**Fallback mechanism (Mechanism B — one-line pointer in spec):** if the primary mechanism fails — i.e., if a future contributor creates multi-surface rule duplication despite the external home existing — add a one-line pointer at the top of each discipline spec: *"Spec organization: see `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` for the rule-placement convention."* Cost: one line per spec × 5 specs = 5 lines total. Trivially small pollution; fuller discoverability.

The choice of Mechanism C as primary aligns with your stated preference. Mechanism B is documented as fallback with an explicit revival trigger so the option is preserved without acting on it now.

### 4. Refinement of the 22-54 finding

The previous finding at `devdocs/inquiries/2026-05-07_22-54__principled_rule_placement_in_thinking_discipline_specs/finding.md` (which produced the placement convention and was titled "Principled Rule Placement In Thinking-Discipline Specs") proposed embedding the convention as a "Conventions: How Rules Are Organized in This Spec" sub-section between Key Components and Process Model in each spec. That finding's MUST item said: *"Add the new sub-section 'Conventions: How Rules Are Organized in This Spec' to `homegrown/explore/references/explore.md` between Key Components and Process Model. Content: the placement principle, the three placement categories, the scope test, the cross-reference shape, and the generic-applicability note covering all five thinking-discipline specs."*

That recommendation overlooked the existing external home (`enes/discipline_rule_placement.md`). The 22-54 finding treated the convention as new content needing a home; in fact a home already existed. The 22-54 finding also did not consider the audience-separation argument or the DRY argument across the 5 specs. Your pushback corrects these oversights.

This finding refines the 22-54 finding: the "Conventions" sub-section is REJECTED. The convention stays at its existing external home. The discipline specs do not get a "Conventions" sub-section. The other content from the 22-54 finding (the placement principle itself; the canonical homes for Rule 1 and Rule 2; the cross-reference shape; the bloat reduction analysis) all remains valid — only the embedding decision is reversed.

### 5. The generalizable principle — Runtime-Purity for Maintenance-Time Concerns

The decision in this finding generalizes to a principle:

> **Runtime-Purity Principle for Maintenance-Time Concerns.** For runtime-loaded artifacts (specs, prompts, or other content consumed by an executor at runtime), maintenance-only concerns about the artifact's organization should live OUTSIDE the artifact when (a) the maintenance audience and runtime audience are separable (different roles, different timelines, disjoint information needs), AND (b) discoverability for the maintenance audience can be handled by external means (project onboarding, contributors' guide, or a minimal one-line pointer added only if discoverability fails). The artifact stays focused on its runtime purpose; maintenance concerns live where contributors find them without polluting the executor's working context.

The principle has explicit scope qualifiers — it applies when both conditions (a) and (b) hold. Future applications must verify these conditions for the specific case.

This principle could apply to other runtime-loaded artifacts in the project. For example, the CONCLUDE protocol at `homegrown/protocols/conclude.md` (which compiles MVL+ inquiry artifacts into `finding.md`) is a runtime artifact. If a similar maintenance-time concern emerged about its organization, this principle would suggest externalizing rather than embedding. Application is case-by-case.

### 6. Verdict

**ACTIONABLE as a documented decision.** No edits to existing files are required:
- `homegrown/explore/references/explore.md` already has Rule 1 and Rule 2 placed correctly (per the previous lineage's edits) without a "Conventions" sub-section. No changes needed.
- `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` already contains the convention. No changes needed.
- The 22-54 finding's "Conventions sub-section" recommendation is documented here as REJECTED. The audit trail is preserved via this finding's `refines:` frontmatter pointer.
- The fallback Mechanism B (one-line pointer in each spec) is documented in DEFERRED with revival trigger.

The decision is an architectural one: keep maintenance-time concerns out of runtime-loaded artifacts. The principle generalizes for future similar decisions.

## Next Actions

### MUST

(None — no file edits are required. The decision is the action.)

### COULD

- **What:** Add a one-line pointer to the top of each thinking-discipline spec (Mechanism B): *"Spec organization: see `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` for the rule-placement convention."*
  - **Who:** Maintainer of each thinking-discipline spec at `homegrown/<discipline>/references/<discipline>.md`.
  - **Gate:** only if a future contributor creates multi-surface rule duplication in any thinking-discipline spec despite the external home existing.
  - **Why:** preserves spec purity if discoverability via the existing external home is sufficient; adds minimal-cost discoverability mechanism only when needed.

### DEFERRED

- **What:** Mechanism B fallback (one-line pointer in each discipline spec).
  - **Gate:** revive when a future contributor creates multi-surface rule duplication in any thinking-discipline spec despite the external home (`/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md`) existing. Observable via spec audit (look for the same rule paragraph appearing at multiple surfaces in any single discipline spec).
  - **Why (if revived):** discoverability via primary mechanism (project onboarding) failed; the trivial-cost pointer fixes the gap without abandoning external placement.

- **What:** Apply the Runtime-Purity Principle to other runtime-loaded artifacts in the project (e.g., `homegrown/protocols/conclude.md`, `homegrown/protocols/loop_diagnose.md`).
  - **Gate:** revive when a similar maintenance-time concern emerges about the organization of any other runtime-loaded artifact. The principle's scope qualifiers must be verified case-by-case before application.
  - **Why (if revived):** the principle generalizes; consistent application across runtime artifacts preserves runtime purity across the methodology library.

## Reasoning

### Why the user's position is correct

You said: *"after all how pure we can write our discipline prompts the better they cna be developed and improved."* This is structurally correct. The discipline spec is a runtime artifact loaded into the runner's context every time an MVL+ inquiry runs the corresponding discipline. Lower complexity = better signal-to-noise = better runtime behavior = easier to iterate on.

The audience-separation argument (Argument 1 in the Finding) gives the structural reason. The DRY argument (Argument 2) gives the maintenance-cost reason. The self-consistency argument (Argument 3) gives the principled reason. All three converge.

### Why the 22-54 finding's embedding recommendation was wrong

The 22-54 finding produced the placement convention itself (which is correct and remains valid) but then proposed embedding it in each of the 5 discipline specs. That proposal had two oversights:

- **Oversight 1: the existing external home was not considered.** The convention was treated as new content needing a home; in fact `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` already existed with the convention's text.
- **Oversight 2: the audience-separation concern was not surfaced.** The 22-54 finding optimized for discoverability ("future contributor sees the convention while editing the spec") without weighing the runtime-context cost. The runtime audience was not analyzed.

This finding corrects both oversights.

### Why Mechanism C is primary, not Mechanism B

You stated a preference for discipline-spec purity. Mechanism C (no pointer in spec) delivers maximum purity (zero pollution). Mechanism B (one-line pointer) is a small step away from maximum purity. By default, the option that aligns most closely with your stated preference wins.

Mechanism B is preserved as fallback because the discoverability-failure mode is real — if a future contributor doesn't know about `enes/discipline_rule_placement.md`, they might create the very multi-surface duplication the convention is designed to prevent. The fallback's revival trigger is concrete: "multi-surface duplication observed despite external home existing."

This two-tier structure (primary aligned with preference; fallback as safety net) preserves both the user's stated preference and the discoverability concern.

### Why the principle has scope qualifiers

The Runtime-Purity Principle has two conditions: audience separable AND discoverability handled externally. These qualifiers prevent over-application. For example:

- A spec where the runtime executor IS the contributor (e.g., a self-modifying agent that reads its own spec for both runtime and maintenance) would fail condition (a). The principle wouldn't apply.
- A maintenance concern where no external home exists and onboarding doesn't cover the topic would fail condition (b). The principle wouldn't apply.

By stating the qualifiers explicitly, the principle stays valid where it applies and clearly inapplicable where it doesn't.

### Significant alternatives considered and rejected

- **"Embed the convention in each spec to maximize discoverability."** Rejected because the 5× duplication cost and the runtime-context pollution outweigh the discoverability gain (which can be handled at trivial cost via Mechanism B fallback or external onboarding).

- **"Make the discipline spec self-contained for both audiences."** Rejected because the audiences are separable. Self-containment for one audience comes at the cost of the other.

- **"Move the convention into a new top-level sub-section in each spec but make it shorter."** Rejected because shorter content is still content. The runtime-context pollution scales with content; shortening doesn't eliminate it. And shortening loses information.

- **"Apply Mechanism B (one-line pointer) by default."** Rejected as primary because it's a small step away from maximum purity; the user's preference is purity. Mechanism B is preserved as fallback only.

### Self-applying check

This finding's recommendation is itself a maintenance-time concern about runtime artifacts (the discipline specs). The finding obeys its own principle by living in `devdocs/inquiries/` (project documentation, not runtime-loaded) rather than in any runtime artifact. The principle is self-consistent.

## Open Questions

### Monitoring

- Observe the next 3 thinking-discipline-spec edits (any spec, any contributor). Verify no multi-surface rule duplication emerges. If duplication occurs, revive Mechanism B.
- Observe whether project onboarding / contributors' guide adequately covers the convention. If new contributors arrive without learning about it, revive Mechanism B.

### Blocked

- The Runtime-Purity Principle's application to other runtime-loaded artifacts is blocked until a similar maintenance-time concern emerges for any of them.

### Research Frontiers

- Whether the audience-separation pattern (runtime vs maintenance) generalizes to other artifact types in the project (protocols, contracts, design notes). The principle is offered as a tool; future cases will confirm or refine its scope.

### Refinement Triggers

- Re-open the embedding decision if a future contributor creates multi-surface rule duplication despite the external home existing. Revive Mechanism B.
- Re-open the Runtime-Purity Principle's wording if it produces wrong recommendations in a future application. Refine the scope qualifiers.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

The "Conventions: How Rules Are Organized in This Spec" sub-section

i am thining adding this to the discpiline itself makes sense or not?  this info already exiss in /Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md and maybe it shouldnt be exist in the discipine and add extra complexity. after all how pure we can write our discipline prompts the better they cna be developed and improved

what do you think ?
```

</details>
