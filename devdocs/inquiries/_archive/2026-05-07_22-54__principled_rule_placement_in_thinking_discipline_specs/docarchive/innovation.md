# Innovation: Principled Rule Placement In Thinking-Discipline Specs

## Phase 1 — Seed

Sensemaking + Decomposition stabilized: the placement principle (Operation-or-Step-First with Scope-Of-Application), three categories, two rule applications, meta-rule home, generic applicability, verification. Innovation generates concrete wording.

## Phase 2 — Generate (compact: highest-convergence variations per piece)

### Component A: Placement Principle Wording

**All 7 mechanisms converge on:**

> *"### Conventions: How Rules Are Organized in This Spec*
> 
> *Refinement rules added to this spec follow the **Operation-or-Step-First with Scope-Of-Application** convention. Each rule has ONE canonical home, determined by the rule's scope:*
> 
> - *If the rule applies to ALL instances of an operation (regardless of which step invokes it), the canonical home is the operation's Component sub-section under Key Components.*
> - *If the rule applies only to a SPECIFIC step's invocation of an operation (or to a specific phase / cycle / process step), the canonical home is the Process Model step at which the rule fires.*
> - *If the rule has no positive form (it can only be expressed as failure prevention), the canonical home is the Failure Mode prevention sub-section.*
> 
> *To pick a canonical home, ask: "Does this rule apply to ALL instances of operation X, or only to specific step Y?" The answer determines placement.*
> 
> *At non-canonical surfaces (failure modes, process steps, or other components that the rule connects to), use a one-line cross-reference: 'For [brief role description], see [canonical home path].' Cross-references navigate readers to the canonical home; they do not summarize or duplicate the rule's content.*
> 
> *This convention preserves the spec's single-source-of-truth property as more rules accumulate over time.*"

### Component B: Rule 1 Canonical Home Placement

**Final wording for Probe component sub-section:**

> *"#### Type-Aware Probing*
> 
> *When the coarse scan inventories a candidate that carries a **load-bearing quantifiable claim** — a claim whose answer is a number or measurable property (cost, benefit, frequency, magnitude, count, etc.) AND whose answer determines whether the candidate stabilizes or is dismissed — at least one empirical probe of the quantifiable claim is required before the candidate can pass into the stabilized candidate set. This rule applies in BOTH artifact and possibility modes — in artifact mode the quantifiable claim is about how many objects exist or what their cost is; in possibility mode the quantifiable claim is about how often a candidate would fire or how cheap it would be. Dispatching a load-bearing quantifiable claim with qualitative reasoning ('this is probably expensive', 'this likely happens often') without an empirical probe is an instance of Surface-Only Scanning."*

Position: new sub-section under Key Components → Probe.

### Component C: Rule 1 Cross-Reference

**Final wording at Surface-Only Scanning failure-mode prevention:**

> *"For type-aware probing of candidates carrying load-bearing quantifiable claims, see Probe → Type-Aware Probing."*

Position: appended to existing "How to prevent" sentence in Surface-Only Scanning failure mode.

### Component D: Rule 2 Canonical Home Placement

**Final wording at Resolution Progression's Coarse Scan step:**

> *"1. **Coarse scan** — what major regions exist? (unweighted)*
> 
> *   When the territory has an **identifiable contextual / structural surround layer** — a layer that establishes meaning for the inquiry-specific objects within it (for codebases this is the project's foundational protocols / contracts / conventions; for solution spaces this is the surrounding constraint / value frame; for any territory it is the layer that frames how inquiry-specific objects are interpreted) — the coarse scan must include items from that surround layer before going deep on inquiry-specific objects. Omitting an identifiable surround layer at this step is a Premature Depth instance applied at the layer-of-scan dimension."*

Position: extends the existing "Coarse Scan" step in Resolution Progression.

### Component E: Rule 2 Cross-References

**At Premature Depth failure-mode prevention:**

> *"For coarse scans of territories with an identifiable contextual / structural surround layer, see Resolution Progression → Coarse scan."*

Position: appended to existing "How to prevent" sentence.

**Optional at Scan component (recommended for discoverability):**

> *"For coarse scans of layered territories, additional breadth requirements apply — see Resolution Progression → Coarse scan."*

Position: appended to existing "A good scan:" bullets.

### Component F: Generic Applicability Note

Added to the Conventions sub-section (Component A):

> *"This convention applies to all five thinking-discipline specs in `homegrown/`: Structural Exploration, Structural Sensemaking, Structural Decomposition, Structural Innovation, Structural Critique. Each spec has the same Components / Process Model / Failure Modes structure; each gets its own 'Conventions' sub-section with the principle adapted to its specific component and step names."*

(Optional — included in Component A's wording above.)

## Phase 3 — Test (5 criteria per component)

### Combined Fix (A + B + C + D + E + F)

**Novelty:** new convention (Operation-or-Step-First with Scope-Of-Application) is not present in current `explore.md`. NOVEL.

**Scrutiny survival:** strongest objection — "The 'optional' cross-reference at Scan component is hedged; either it should always be there or never. Hedging weakens the convention." Defense — the optional cross-reference is a discoverability aid; the rule's correctness doesn't depend on it. The convention's STRICT requirement is the canonical home + one-line cross-reference at structurally-related surfaces; the additional cross-reference at the Scan component is a soft recommendation for reader navigation, not a strict requirement. The hedge is principled, not weakness. SURVIVES.

**Fertility:** opens the convention for future rules; applies to all five thinking-discipline specs. FERTILE.

**Actionability:** runner can pick canonical home by scope test; runner can write cross-references by template. ACTIONABLE.

**Mechanism independence:** all 7 mechanisms converged on the same wording structure. HIGH.

**VERDICT: SURVIVES.**

## Assembly Check

```
A (placement principle) + B (Rule 1 canonical) + C (Rule 1 cross-ref)
  + D (Rule 2 canonical) + E (Rule 2 cross-refs) + F (generic note)
```

Emergent value:
- A defines the convention generically.
- B + D apply the convention to two existing rules.
- C + E demonstrate the cross-reference shape.
- F establishes generic applicability across all five specs.
- The convention is self-applying: A's convention determines where A itself lives (B is in operation; D is at process step; A is in a Conventions sub-section as a meta-rule).

Assembly verdict: SURVIVE.

## Telemetry

- Generators: 4 / 4. Framers: 3 / 3. Coverage: FULL.
- Convergence: HIGH (all 7 mechanisms converge on same wording).
- Survivors tested: 1 (combined fix) — SURVIVES.
- Failure modes observed: NONE.
- **Overall: PROCEED.**
