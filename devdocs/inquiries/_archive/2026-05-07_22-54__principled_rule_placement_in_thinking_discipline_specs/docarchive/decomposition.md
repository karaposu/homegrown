# Decomposition: Principled Rule Placement In Thinking-Discipline Specs

## Step 1 — Coupling Topology

Elements:

1. The placement principle (Operation-or-Step-First with Scope-Of-Application).
2. The three placement categories (operation-level / step-level / failure-only-form).
3. Rule 1 (Type-Aware Probe) canonical home placement.
4. Rule 2 (Contextual Surround Pre-Scan) canonical home placement.
5. Cross-reference shape and content.
6. Meta-rule sub-section placement (where the principle itself lives).
7. Generic applicability across all five thinking-discipline specs.
8. Verification (does the strategy meet the user's four properties + bloat reduction).

### Coupling

- Principle ↔ categories: STRONG. Categories operationalize the principle.
- Principle ↔ Rule 1, Rule 2 placement: STRONG. Rules' homes follow from principle.
- Principle ↔ meta-rule home: MODERATE. Meta-rule sits in a generic spec location.
- Principle ↔ generic applicability: STRONG. Same principle applies to all five specs.
- Cross-references ↔ Rule 1, Rule 2: STRONG.
- Verification ↔ all of the above: STRONG.

### Clusters

- **P** — Principle (1, 2): the principle and its categories.
- **R** — Rule applications (3, 4, 5): the two existing rules with their canonical homes and cross-references.
- **M** — Meta-rule home (6): where the principle itself lives.
- **G** — Generic applicability (7).
- **V** — Verification (8).

## Step 2 — Top-Down Boundaries

Initial pieces:

- **P-1: Placement principle** (with categories and scope test).
- **R-1: Rule 1 canonical home + cross-reference.**
- **R-2: Rule 2 canonical home + cross-references.**
- **M-1: Meta-rule "Conventions" sub-section** (where principle lives in the spec).
- **G-1: Generic applicability statement.**
- **V-1: Verification + verdict.**

6 pieces.

## Step 3 — Bottom-Up Validation

Atoms:

1. The principle's scope test (yes/no question) → P-1.
2. The three categories with mechanical assignment → P-1.
3. Rule 1 canonical home (Probe component) → R-1.
4. Rule 1 cross-reference text → R-1.
5. Rule 2 canonical home (Resolution Progression's Coarse Scan step) → R-2.
6. Rule 2 cross-reference texts (at Premature Depth + at Scan component optional) → R-2.
7. Cross-reference template (one-line, navigation-not-summary) → P-1 (shared shape).
8. Meta-rule home placement (between Key Components and Process Model) → M-1.
9. Meta-rule sub-section title + intro → M-1.
10. Generic applicability across 5 specs → G-1.
11. Verification against 4 properties + bloat reduction → V-1.
12. Verdict (ACTIONABLE) → V-1.

All atoms map cleanly to the 6 pieces. **HIGH** confidence.

## Step 4 — Question Tree

### P-1 — Placement Principle

**Question:** What is the placement principle's exact wording, including the three categories and the scope test?

**Verification:**
- [ ] Principle named (Operation-or-Step-First with Scope-Of-Application).
- [ ] Three categories specified (operation-level / step-level / failure-only-form).
- [ ] Scope test stated as a yes/no question.
- [ ] Cross-reference template included.

### R-1 — Rule 1 Application

**Question:** Where exactly does Rule 1 (Type-Aware Probe) go in `homegrown/explore/references/explore.md`, and what are the cross-references?

**Verification:**
- [ ] Canonical home named (Probe component → new sub-section "Type-Aware Probing").
- [ ] Full rule paragraph at canonical home (preserved from previous finding).
- [ ] One-line cross-reference at Surface-Only Scanning failure-mode prevention.
- [ ] No duplication of rule paragraph.

### R-2 — Rule 2 Application

**Question:** Where exactly does Rule 2 (Contextual Surround Pre-Scan) go, and what are the cross-references?

**Verification:**
- [ ] Canonical home named (Resolution Progression's Coarse Scan step).
- [ ] Full rule paragraph at canonical home.
- [ ] One-line cross-reference at Premature Depth failure-mode prevention.
- [ ] Optional one-line cross-reference at Scan component.
- [ ] No duplication of rule paragraph.

### M-1 — Meta-Rule Home

**Question:** Where does the placement principle itself live in the spec?

**Verification:**
- [ ] Sub-section title chosen ("Conventions: How Rules Are Organized in This Spec").
- [ ] Sub-section placement specified (between Key Components and Process Model).
- [ ] Sub-section content drafted (the principle + categories + scope test + cross-reference template).
- [ ] Generic applicability noted in the sub-section.

### G-1 — Generic Applicability

**Question:** How does the principle apply to all five thinking-discipline specs?

**Verification:**
- [ ] All 5 specs named (Structural Exploration, Structural Sensemaking, Structural Decomposition, Structural Innovation, Structural Critique).
- [ ] Same principle applies to each (yes/no per spec).
- [ ] Each spec gets its own "Conventions" sub-section (recommended).

### V-1 — Verification + Verdict

**Question:** Does the strategy meet the four user-stated properties + bloat reduction?

**Verification:**
- [ ] Single canonical home per rule (yes).
- [ ] Cross-references not duplications (yes — one-line pointer shape).
- [ ] Scales linearly (verified via cycle 7 of Exploration).
- [ ] Cold-readability preserved (yes — readers on any path follow cross-references).
- [ ] Bloat reduction quantified (3× content reduction; 2-3× maintenance reduction).
- [ ] Verdict: ACTIONABLE / PARTIAL / INCONCLUSIVE.

## Step 5 — Interfaces

| Source | Target | What flows |
|---|---|---|
| P-1 | R-1, R-2 | The principle determines canonical homes for the rules |
| P-1 | M-1 | The principle's content is what the meta-rule sub-section contains |
| P-1 | G-1 | Generic applicability is a property of the principle |
| R-1, R-2 | V-1 | Concrete rule placements verify the strategy |
| M-1 | V-1 | Meta-rule home verifies discoverability |
| G-1 | V-1 | Generic applicability verifies scope |

All one-way. No circular dependencies.

## Step 6 — Dependency Order

```
Layer 0: P-1 (placement principle)
Layer 1 (parallel): R-1, R-2, M-1, G-1
Layer 2: V-1 (verification synthesizing across)
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
| Confidence | PASS (HIGH top-down + bottom-up agreement) |

All 7 PASS.
