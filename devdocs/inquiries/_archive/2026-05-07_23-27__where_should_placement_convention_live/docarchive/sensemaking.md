# Sensemaking: Where Should The Placement Convention Live

## Initial Sense Version (SV1 — Baseline Understanding)

The user's position (don't pollute the discipline spec; the convention already lives at `enes/discipline_rule_placement.md`) is structurally well-supported. The two audiences (runtime runner vs maintenance contributor) have disjoint needs. Embedding causes 5× duplication. The convention should obey its own DRY principle. The remaining choice is between Mechanism B (one-line pointer in each spec) and Mechanism C (no pointer; discoverability via onboarding/contributors' guide).

## Phase 1 — Cognitive Anchor Extraction

### Constraints

1. **Discipline-spec purity for runtime use** (user-stated). The discipline spec is loaded into the runner's context at runtime; meta-organization content dilutes signal-to-noise.
2. **The convention already has an external home** at `enes/discipline_rule_placement.md`. No need to create one.
3. **DRY across 5 specs.** The convention is identical for all five thinking-discipline specs in `homegrown/`.
4. **Discoverability for contributors.** A future contributor editing a discipline spec needs SOME way to learn about the convention without prior knowledge.
5. **Cost asymmetry.** Embedding cost = ~250-400 lines total (5 specs × ~50-80 lines each); pointer cost = 5 lines (one per spec); no-pointer cost = 0 lines.

### Key Insights

1. **The convention should obey its own placement principle.** The convention's scope is "all 5 thinking-discipline specs" — that's higher than any single discipline. By the convention's own logic, its canonical home should be at a higher-than-discipline location. This is structurally consistent: external home (`enes/discipline_rule_placement.md`) is the right canonical home for the convention itself.

2. **Audience separation is the load-bearing argument.** Runtime runner and maintenance contributor are different roles, doing different things, on different timelines. They don't need to share a single artifact. Separation of concerns supports keeping them apart.

3. **The previous 22-54 finding's "embed inside each spec" recommendation was made WITHOUT considering the existing external home.** The 22-54 finding treated the convention as new content needing a home; in fact a home already existed. This is a real oversight in the 22-54 finding — the user's pushback is correct.

4. **Discoverability is solvable without embedding.** A one-line pointer (Mechanism B) preserves spec purity at trivial cost while ensuring contributors find the convention.

5. **The choice between Mechanism B and Mechanism C depends on the project's current state.** If a contributors' guide / onboarding already exists, Mechanism C suffices. If contributors arrive without onboarding, Mechanism B is safer.

### Structural Points

1. **Two-audience artifact taxonomy:**
   - Runtime artifact: loaded into runner's context at runtime. Should contain only what the runtime needs.
   - Maintenance artifact: read by contributors during editing. Lives wherever discoverable.

2. **The discipline spec is a runtime artifact.** Its content is consumed during MVL+ execution.

3. **The placement convention is a maintenance artifact.** Its content is consumed during spec editing.

4. **The two artifact types should not be merged.** Merging them dilutes runtime content.

5. **Three placement options:**
   - Option A (embed inside each spec): rejected — pollutes runtime context, duplicates 5×.
   - Option B (external + one-line pointer in each spec): viable — minimal pollution, full discoverability.
   - Option C (external only, no pointer): viable IF onboarding/contributors' guide handles discoverability.

### Foundational Principles

1. **Single source of truth.** Each fact lives in one place; references navigate.
2. **Audience separation.** Different audiences should be served by different artifacts when their needs are disjoint.
3. **Runtime purity is valuable.** Signal-to-noise in a runtime-loaded artifact is a real cost.
4. **The convention obeys its own placement principle.** Convention's scope is all 5 specs → canonical home is external.
5. **Pollute proportionally to the audience's need.** A maintenance concern doesn't justify polluting a runtime artifact unless the maintenance value clearly exceeds the runtime cost.

### Meaning-Nodes

1. **Runtime artifact** — loaded into runner's context at runtime; pure content.
2. **Maintenance artifact** — read during editing; lives wherever discoverable.
3. **Audience separation** — disjoint roles served by separate artifacts.
4. **Convention purity** — the placement convention itself obeys its own DRY principle.
5. **Discoverability mechanism** — how a contributor finds the convention; trivial pointer or external onboarding.

## Sense Version 2 (SV2 — Anchor-Informed Understanding)

The user's position is correct. The 22-54 finding's "embed inside each spec" recommendation overlooked the existing external home and conflated maintenance and runtime concerns. The convention should NOT be embedded; it should remain at `enes/discipline_rule_placement.md`.

The remaining choice (Mechanism B vs C) depends on the project's discoverability infrastructure. Given the user values purity strongly, Mechanism C is more aligned with their preference; Mechanism B is the safer compromise.

## Phase 2 — Perspective Checking

### Technical / Logical Perspective

The convention's structure (placement-by-scope) is mechanically applicable. The convention itself has scope (all 5 discipline specs). By its own principle, its canonical home is at a higher-than-discipline location. Logical consistency requires keeping it external.

NEW ANCHOR (Foundational Principle): The convention is self-consistent — it obeys its own principle.

### Human / User Perspective

The user values discipline-spec purity ("how pure we can write our discipline prompts the better they cna be developed and improved"). They want minimal complexity in the discipline. They named the existing external home explicitly. The user's position is informed and intentional.

The user is correct. Their argument is structurally sound.

NEW ANCHOR (Key Insight): The user's position is the correct architectural choice.

### Strategic / Long-term Perspective

If the convention is embedded in 5 specs:
- 5× maintenance burden when convention evolves.
- 5× duplication risk if specs drift.
- Runtime context pollution permanent across all MVL+ runs.

If the convention is external only:
- 1× maintenance burden.
- Specs stay focused on discipline runtime.
- Discoverability handled by pointer or onboarding.

Long-term, external-only is structurally more sustainable.

NEW ANCHOR (Strategic Principle): External-only scales; embed-in-each-spec doesn't.

### Risk / Failure Perspective

Risks of external-only with NO pointer (Mechanism C):
- New contributor edits a spec without knowing about `enes/discipline_rule_placement.md`. Creates multi-surface duplication.
- Mitigation: project README / onboarding mentions the convention.

Risks of external-only with one-line pointer (Mechanism B):
- Pointer adds 5 lines total (1 per spec). Pollution is trivial.
- Discoverability is full.
- No maintenance burden (pointer doesn't change unless the file moves).

Risk-adjusted, Mechanism B has the lowest residual risk at trivial cost.

NEW ANCHOR (Risk): Mechanism B's risk profile is best.

### Resource / Feasibility Perspective

Cost comparison:
- Option A (embed): high cost; recurring maintenance.
- Option B (external + pointer): trivial cost; near-zero maintenance.
- Option C (external + no pointer): zero cost; depends on onboarding.

Mechanism B is the lowest-cost option that preserves discoverability.

NEW ANCHOR (Foundational Principle): Cost-benefit favors Mechanism B over Option A by a wide margin.

### Definitional / Consistency Perspective

CHECK: does the convention itself contradict embedding? Yes. The convention says: "Each rule has ONE canonical home, determined by the rule's scope." Convention scope is across-all-5-specs; its canonical home should be at across-all-5-specs level (external). Embedding contradicts the convention's own principle.

CHECK: does external placement contradict the discipline specs? No. The discipline specs are about the discipline's runtime; external placement leaves them pure.

CHECK: does external placement contradict the user's stated preference? No. It aligns directly.

NEW ANCHOR (Foundational Principle): External placement is internally consistent across all relevant principles.

## Sense Version 3 (SV3 — Multi-Perspective Understanding)

Six perspectives unanimously favor external-only. The choice between Mechanism B (with pointer) and Mechanism C (no pointer) depends on discoverability infrastructure. Mechanism B is the safer default at trivial cost.

## Phase 3 — Ambiguity Collapse

### Ambiguity 1: Is the user asking for embed-or-not, or also for the discoverability mechanism?

The user said: *"i am thining adding this to the discpiline itself makes sense or not?"* — primary question is embed-or-not. *"this info already exiss in /Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md and maybe it shouldnt be exist in the discipine and add extra complexity"* — they propose external-only. They did not specify whether a pointer should exist.

**Strongest counter-interpretation:** the user wants ZERO pollution; therefore Mechanism C (no pointer).

**Why the counter-interpretation might be right:** the user explicitly values purity ("how pure we can write our discipline prompts the better they cna be developed and improved"). A one-line pointer is still pollution, just less.

**Why the counter-interpretation may not fully win:** discoverability is a real concern. Without a pointer, future contributors might miss the convention.

**Confidence:** MEDIUM. The user's intent leans toward Mechanism C, but Mechanism B is the safer compromise.

**Resolution:** recommend **Mechanism C as primary** (matches the user's stated preference for purity) with **Mechanism B as fallback** if discoverability becomes a problem (e.g., if a future contributor creates multi-surface duplication despite the external home existing).

The user's preference dictates the primary choice. The fallback is documented for future re-evaluation.

**What is now fixed?** Primary recommendation: Mechanism C (external only, no pointer in discipline specs). Fallback: Mechanism B (add one-line pointer if discoverability fails).

**What is no longer allowed?** Recommending Option A (embed in each spec).

### Ambiguity 2: Should this finding revise the 22-54 finding's recommendation?

The 22-54 finding proposed embedding the convention inside each discipline spec. This finding rejects that recommendation.

**Strongest counter-interpretation:** the 22-54 finding's recommendation should stand because it's already documented; this finding is just an opinion.

**Why the counter-interpretation fails:** findings can be REFINED by subsequent inquiries when new information emerges. The new information here: the existing external home (`enes/discipline_rule_placement.md`) was not considered in the 22-54 finding. The user's purity preference adds weight.

**Confidence:** HIGH.

**Resolution:** this finding REFINES the 22-54 finding. The 22-54 finding's recommendation to embed inside each spec is REPLACED with: keep the convention at `enes/discipline_rule_placement.md`; do not embed in discipline specs.

**What is now fixed?** This finding's relationship to 22-54: refines/supersedes the embedding recommendation.

### Ambiguity 3: Generalizable principle wording

The principle: maintenance concerns should live outside runtime-loaded artifacts when audiences are separable.

**Strongest counter-interpretation:** the principle is too generic; it might apply where it shouldn't.

**Why the counter-interpretation has weight:** principles need scope qualifiers. "Audience separable" requires definition.

**Confidence:** MEDIUM-HIGH.

**Resolution:** state the principle WITH scope qualifiers: *"For runtime-loaded artifacts (specs that the runner consumes during execution), maintenance-only concerns about the artifact's organization should live outside the artifact when (a) the maintenance and runtime audiences are separable, AND (b) discoverability for the maintenance audience can be handled by external means (onboarding, contributors' guide, or a one-line pointer)."*

**What is now fixed?** Principle wording with scope qualifiers.

## Sense Version 4 (SV4 — Clarified Understanding)

After ambiguity collapse:

- **The convention stays external** at `enes/discipline_rule_placement.md`.
- **Discipline specs do NOT embed the convention.**
- **Primary recommendation: Mechanism C** (no pointer in spec). Aligns with user's purity preference.
- **Fallback: Mechanism B** (one-line pointer) if a future contributor creates multi-surface duplication despite the external home.
- **The 22-54 finding's recommendation is refined**: embedding is rejected.
- **Generalizable principle:** runtime-loaded artifacts should not carry maintenance-only meta-content when audiences are separable and discoverability is handled externally.

## Phase 4 — Degrees-of-Freedom Reduction

### Fixed

1. Convention stays external at `enes/discipline_rule_placement.md`.
2. Discipline specs do NOT embed.
3. Primary recommendation = Mechanism C.
4. Fallback recommendation = Mechanism B (if discoverability fails).
5. The 22-54 finding's recommendation is refined (embedding rejected).
6. Generalizable principle articulated.

### Eliminated

1. Embedding in each spec (Option A).
2. Treating the convention as runtime content.
3. Recommending Mechanism B as primary against the user's stated preference.

### Remaining

1. Concrete wording for the recommendation in finding.md.
2. Concrete wording for the generalizable principle.
3. Verification against the user's three constraints (purity / duplication / runtime context).

## Sense Version 5 (SV5 — Constrained Understanding)

The constrained answer:

- **DON'T embed the convention in discipline specs.**
- **Convention stays at `enes/discipline_rule_placement.md`.**
- **No pointer in discipline specs by default** (Mechanism C; aligns with user purity preference).
- **Pointer added later if a future contributor creates multi-surface duplication despite the external home** (Mechanism B as fallback).
- **The 22-54 finding's embedding recommendation is REFINED to non-embedding.**
- **Generalizable principle:** runtime-loaded artifacts stay pure when maintenance audiences are separable and discoverability is handled externally.

## Final Sense Version (SV6 — Stabilized Model)

The user's position is correct and structurally well-supported. The placement convention should NOT be embedded inside the five thinking-discipline specs at `homegrown/<discipline>/references/<discipline>.md`. It should remain at its existing external home, `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md`.

Three converging arguments support this:

1. **Audience separation.** The runtime runner (loads spec into context during MVL+ execution) and the maintenance contributor (edits spec to add new rules) have disjoint needs. The convention serves only the maintenance audience; embedding it pollutes the runtime audience's context.

2. **DRY across all 5 specs.** The convention is identical for all five thinking-discipline specs (Structural Exploration, Structural Sensemaking, Structural Decomposition, Structural Innovation, Structural Critique). Embedding creates 5× duplication. Keeping the convention at one external location follows DRY.

3. **The convention obeys its own placement principle.** The convention's scope is "all 5 specs" — higher than any single discipline. By the convention's own scope-determines-canonical-home logic, its canonical home should be at the higher-than-discipline level (external). Self-consistency requires external placement.

The previous finding at `devdocs/inquiries/2026-05-07_22-54__principled_rule_placement_in_thinking_discipline_specs/finding.md` proposed embedding the convention as a "Conventions" sub-section inside each spec. That recommendation overlooked the existing external home and conflated maintenance with runtime concerns. This inquiry refines that recommendation: do NOT embed.

Discoverability for future contributors is handled by the convention's existing external home plus (if needed) a one-line pointer added to discipline specs as a fallback. The user's purity preference suggests starting WITHOUT a pointer (Mechanism C); fallback to a one-line pointer (Mechanism B) only if a future contributor creates multi-surface duplication despite the external home.

**Generalizable principle (with scope qualifiers):** for runtime-loaded artifacts (specs that the runner consumes during execution), maintenance-only concerns about the artifact's organization should live OUTSIDE the artifact when (a) the maintenance and runtime audiences are separable, AND (b) discoverability for the maintenance audience can be handled by external means.

The shift from SV1 is: the user's position is now anchored as correct, the 22-54 finding's recommendation is explicitly refined, the primary placement (Mechanism C) and fallback (Mechanism B) are decided, and the generalizable principle is articulated with scope qualifiers.
