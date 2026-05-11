# Critique: Where Should The Placement Convention Live

## Phase 0 — Dimensions With Weights

### 1. Respects User's Stated Preference - 25%

**Critical.** The user explicitly preferred discipline-spec purity. The recommendation must align.

### 2. Audience Separation Argument Strength - 20%

**Critical.** The runtime-vs-maintenance audience separation is the load-bearing argument. Must hold structurally.

### 3. DRY And Self-Consistency - 20%

**Critical.** The convention obeys its own placement principle. The 5× duplication argument is mechanically observable.

### 4. Discoverability Preservation - 15%

**Critical.** Future contributors must be able to find the convention without prior knowledge. Mechanism C primary + Mechanism B fallback handles this.

### 5. Refinement Of Prior Finding - 10%

The 22-54 finding's embedding recommendation must be explicitly refined, with audit trail preserved.

### 6. Generalizable Principle - 10%

The runtime-purity principle should generalize to similar future decisions about other runtime-loaded artifacts.

**Critical dimensions:** Respects User's Stated Preference, Audience Separation, DRY And Self-Consistency, Discoverability Preservation.

## Phase 1 — Fitness Landscape

### Viable

Recommendations that:
- Don't embed convention in discipline specs.
- Cite three converging arguments (audience separation + DRY + self-consistency).
- Preserve discoverability via existing external home + optional pointer fallback.
- Refine the 22-54 finding explicitly.
- Generalize to a runtime-purity principle.

### Dead

Recommendations that:
- Embed convention in each spec.
- Treat convention as runtime content.
- Ignore the existing external home.
- Don't refine the 22-54 finding.

### Boundary

- Mechanism B vs Mechanism C choice. Mechanism C aligns with user preference but has lower discoverability ceiling. Mitigated by fallback path.

## Phase 2 — Candidate Evaluation

### Candidate: Combined Fix (A + B + C + D + E + F)

**Prosecution:**

The recommendation is a "no-op" in some sense — no edits to existing files. A future contributor might think nothing was done. The recommendation's value is in the DOCUMENTATION of the decision, not in any concrete edit.

Mechanism C (no pointer) puts the discoverability burden on project onboarding. If onboarding doesn't mention the convention, future contributors miss it.

The runtime-purity principle is generalizable but not yet validated against other runtime-loaded artifacts in the project (e.g., the conclude.md protocol). The principle's scope qualifiers ("audience separable" + "discoverability handled externally") are conditional — the runner needs to verify these conditions hold for each application.

**Defense:**

The recommendation's value IS the documented decision. The 22-54 finding's "embed" recommendation would otherwise stand and might be implemented later. By explicitly refining it, this finding prevents the wrong action.

Mechanism C aligns with the user's stated preference. The fallback to Mechanism B is documented with a concrete revival trigger ("if a future contributor creates multi-surface duplication despite the external home"). The discoverability risk is bounded.

The principle's generalizability is not over-claimed — the scope qualifiers explicitly note that future applications must verify the conditions. The principle is offered as a TOOL, not a UNIVERSAL LAW.

**Verification against the four critical dimensions:**

- Respects User's Stated Preference: HIGH. The user wanted discipline-spec purity; the recommendation delivers maximum purity (zero spec pollution under Mechanism C).
- Audience Separation: HIGH. The runtime/maintenance audience separation is structurally observable in `homegrown/MVL+/SKILL.md` (loads only the discipline's spec at runtime) and in the convention's role (consulted only at maintenance time).
- DRY And Self-Consistency: HIGH. The convention's scope (all 5 specs) maps to a higher-than-discipline canonical home; embedding contradicts the convention's own logic.
- Discoverability Preservation: MEDIUM-HIGH. Mechanism C depends on external onboarding; Mechanism B fallback covers the gap if discoverability fails.

**Dimensions:**

- Respects User's Stated Preference: HIGH.
- Audience Separation: HIGH.
- DRY And Self-Consistency: HIGH.
- Discoverability Preservation: MEDIUM-HIGH.
- Refinement Of Prior Finding: HIGH (explicit `refines:` in frontmatter).
- Generalizable Principle: HIGH (scope qualifiers preserve principle's validity).

**Verdict: SURVIVE.**

## Phase 3.5 — Assembly Check

The assembly's components reinforce each other:
- A (decision) + B (three arguments) provide the load-bearing structure.
- C (discoverability) addresses the only remaining concern (contributor finding the convention).
- D (refinement) preserves the audit trail.
- E (principle) generalizes for future cases.
- F (next actions) makes the decision actionable as a documented decision.

Self-applying: this finding's recommendation is itself a maintenance-time concern about runtime artifacts. The finding obeys its own principle by living in `devdocs/inquiries/` (project documentation) rather than in any runtime-loaded artifact.

Assembly verdict: SURVIVE.

## Phase 3 — Ranked Verdicts

1. **SURVIVE: Combined recommendation.** Don't embed; convention stays external; Mechanism C primary + Mechanism B fallback; 22-54 finding refined; runtime-purity principle articulated.

## Coverage Map

Evaluated:
- The combined recommendation as a unit.
- Verification against user preference + audience separation + DRY + discoverability.
- Mechanism C primary vs Mechanism B fallback choice.
- Refinement of 22-54 finding.
- Generalizable principle.

Unexplored but not blocking:
- Application of the runtime-purity principle to other runtime-loaded artifacts (e.g., `homegrown/protocols/conclude.md`). Out of scope; covered by the principle's scope qualifiers.
- Project onboarding / contributors' guide content (whether it mentions the convention). Out of scope; this finding documents the discoverability requirement.

Coverage judgment: sufficient.

## Signal

TERMINATE with ranked survivor: the Combined Recommendation.

The user's question is answered:

- **Should the convention be embedded inside each discipline spec?** No.
- **Where should it live?** At `enes/discipline_rule_placement.md` (already exists).
- **How do contributors discover it?** Mechanism C primary (no pointer); Mechanism B fallback (one-line pointer if discoverability fails).
- **Does this refine the 22-54 finding?** Yes — explicitly.
- **What's the principle?** Runtime-purity for maintenance-time concerns.

## Convergence Telemetry

- Dimension coverage: complete.
- Adversarial strength: STRONG.
- Landscape stability: STABLE.
- Clean SURVIVE: yes.
- Failure modes: NONE.
- **Overall: PROCEED.**
