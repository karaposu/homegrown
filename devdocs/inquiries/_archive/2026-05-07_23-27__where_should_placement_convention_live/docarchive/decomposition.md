# Decomposition: Where Should The Placement Convention Live

## Step 1 — Coupling Topology

Elements:

1. The decision (DON'T embed; keep external).
2. The reasoning (audience separation + DRY + self-consistency).
3. Discoverability mechanism choice (Mechanism C primary, Mechanism B fallback).
4. Refinement of the 22-54 finding.
5. Generalizable principle.
6. Concrete next actions (no spec edits needed; documentation update).

### Coupling

- Decision ↔ reasoning: STRONG.
- Decision ↔ discoverability: STRONG.
- Decision ↔ 22-54 refinement: STRONG.
- Reasoning ↔ generalizable principle: STRONG (principle generalizes the reasoning).
- Next actions ↔ everything: MODERATE (next actions follow from decision).

### Clusters

- **D** — Decision (1, 2, 3): the placement decision and its reasoning.
- **R** — Refinement of prior finding (4).
- **P** — Generalizable principle (5).
- **A** — Next actions (6).

## Step 2 — Boundaries

5 pieces:

- **D-1: Decision + reasoning** (don't embed; external only; with three converging arguments).
- **D-2: Discoverability mechanism** (Mechanism C primary; Mechanism B fallback).
- **R-1: Refinement of 22-54 finding** (the embedding recommendation is replaced).
- **P-1: Generalizable principle** (with scope qualifiers).
- **A-1: Next actions** (concrete steps following from the decision).

## Step 3 — Bottom-Up Validation

Atoms:

1. The decision: don't embed → D-1.
2. The three arguments (audience separation + DRY + self-consistency) → D-1.
3. Mechanism C choice + reasoning → D-2.
4. Mechanism B fallback + revival trigger → D-2.
5. 22-54 finding's embedding recommendation refined → R-1.
6. Generalizable principle wording → P-1.
7. Scope qualifiers for principle → P-1.
8. No spec edits needed → A-1.
9. Optional: add one-line pointer if discoverability fails → A-1.
10. Verdict (ACTIONABLE) → V (covered by A-1).

All atoms map cleanly. **HIGH** confidence.

## Step 4 — Question Tree

### D-1 — Decision + Reasoning

**Question:** What is the placement decision and what are the converging arguments that support it?

**Verification:**
- [ ] Decision: don't embed; convention stays at `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md`.
- [ ] Argument 1 stated: audience separation (runtime runner vs maintenance contributor).
- [ ] Argument 2 stated: DRY across all 5 specs.
- [ ] Argument 3 stated: convention obeys its own placement principle.
- [ ] All three arguments converge on the same conclusion.

### D-2 — Discoverability Mechanism

**Question:** How do contributors discover the convention without embedding?

**Verification:**
- [ ] Primary mechanism: Mechanism C (no pointer in spec; rely on external onboarding/knowledge).
- [ ] Fallback mechanism: Mechanism B (one-line pointer in each spec, added later if needed).
- [ ] Revival trigger for fallback: a future contributor creates multi-surface duplication despite the external home existing.

### R-1 — Refinement of 22-54 Finding

**Question:** How does this finding refine the 22-54 finding's recommendation?

**Verification:**
- [ ] 22-54 finding's recommendation cited (embed convention as "Conventions" sub-section in each spec).
- [ ] Refinement stated (don't embed; keep external only).
- [ ] Reason for refinement stated (existing external home was overlooked + audience-separation concern).
- [ ] Frontmatter includes `refines:` pointing to 22-54 finding.

### P-1 — Generalizable Principle

**Question:** What is the principle that generalizes this case to similar future maintenance-vs-runtime decisions?

**Verification:**
- [ ] Principle stated with scope qualifiers.
- [ ] Scope: runtime-loaded artifacts.
- [ ] Conditions: (a) audience separable, (b) discoverability handled externally.
- [ ] Application beyond this case noted.

### A-1 — Next Actions

**Question:** What concrete actions follow from the decision?

**Verification:**
- [ ] No spec edits needed (the convention was never embedded; previous edits to explore.md don't include the convention).
- [ ] No edits to `enes/discipline_rule_placement.md` needed (it already exists).
- [ ] Optional fallback action documented (add one-line pointer if discoverability fails).
- [ ] Refinement of 22-54 finding documented.

## Step 5 — Interfaces

| Source | Target | What flows |
|---|---|---|
| D-1 | D-2 | The decision determines the discoverability mechanism choice |
| D-1 | R-1 | The decision refines 22-54 |
| D-1, D-2 | P-1 | The decision and discoverability mechanism inform the generalizable principle |
| D-1, D-2, R-1 | A-1 | All decisions feed into next actions |

All one-way.

## Step 6 — Dependency Order

```
Layer 0: D-1 (decision + reasoning)
Layer 1 (parallel): D-2 (discoverability), R-1 (refinement of prior)
Layer 2: P-1 (generalizable principle)
Layer 3: A-1 (next actions)
```

## Step 7 — Self-Evaluate

| Dimension | Score |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PASS |
| Confidence | PASS |

All 7 PASS.
