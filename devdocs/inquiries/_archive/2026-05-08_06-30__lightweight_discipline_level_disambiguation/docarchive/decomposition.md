# Decomposition: Lightweight Discipline-Level Disambiguation

## Step 1 — Coupling Topology

Elements:

1. **Convention wording** — single sentence applied at each discipline.
2. **Per-discipline placement** — SOLID INSTRUCTIONS section in each of the 5 discipline reference specs.
3. **Component A preservation** — confirms 4 expanded examples at CONCLUDE stay.
4. **Component B rejection rationale** — structural reasoning for rejecting heavy mechanical check.
5. **Per-failure verification** — does the convention catch the 10+ observed failures from `2026-05-07_20-35`?
6. **Composition with Component A** — source-side prevention + destination-side translation = lightweight cascade.

### Coupling pairs

- Convention wording ↔ Per-discipline placement: STRONG (both define the spec edit).
- Component A preservation ↔ Convention wording: MODERATE (composition).
- Component B rejection ↔ Convention: MODERATE (rejection is the reason for the alternative).
- Verification ↔ Convention + Component A: STRONG (verifies coverage of observed failures).

### Clusters

- **C-1** — Convention (1, 2).
- **A-1** — Component A preservation (3).
- **B-1** — Component B rejection (4).
- **V-1** — Verification + composition (5, 6).

## Step 2 — Boundaries

4 pieces:

- **C-1: Convention wording + per-discipline placement** — combined; placement is the convention's home.
- **A-1: Component A preservation** — confirmation that the prior finding's 4 examples stay.
- **B-1: Component B rejection rationale** — structural reasoning.
- **V-1: Verification + composition** — coverage proof + cascade explanation.

## Step 3 — Bottom-Up Validation

Atoms:

1. Convention trigger (writing references a section/component/step/failure-mode defined in ANOTHER Homegrown discipline reference spec) → C-1.
2. Convention action (name source on first use; subsequent uses bare) → C-1.
3. Convention scope: cross-spec only (not within-discipline) → C-1.
4. Convention canonical home: SOLID INSTRUCTIONS section in each discipline reference spec → C-1.
5. Convention placement count: 5 (one per discipline) → C-1.
6. No post-write check / verification step → C-1.
7. No cross-references at non-canonical surfaces → C-1.
8. Component A (4 examples at conclude.md non-ambiguity principle): stays → A-1.
9. Component B (regex sub-section + checklist + remediation at conclude.md): REJECTED → B-1.
10. Rejection reasoning: heavy compute load (per-output scan); incompletely mechanizable (Pattern 2 / Pattern 3 require semantic judgment); user explicit constraint → B-1.
11. Per-failure verification: 10+ observed failures all involve cross-spec references → V-1.
12. Convention catches each observed failure at write-time → V-1.
13. Component A catches what slips through at compile-time → V-1.
14. Composition: source-side prevention + destination-side translation → V-1.
15. Total cost: ~5 lines aggregate (smallest in series) → V-1.

All 15 atoms map cleanly. **HIGH** confidence.

## Step 4 — Question Tree

### C-1 — Convention + Per-Discipline Placement

**Question:** What is the convention's complete shape — wording, trigger, action, scope, canonical home, placement count?

**Verification:**
- [ ] Wording is one sentence, ~30 words.
- [ ] Trigger: cross-spec references only (terms defined in another Homegrown discipline reference spec).
- [ ] Action: first-use parenthetical naming source; subsequent uses bare.
- [ ] Canonical home: SOLID INSTRUCTIONS section of each of the 5 discipline reference specs.
- [ ] Placement count: 5 (identical text in each discipline spec).
- [ ] No post-write check.
- [ ] No cross-references at other surfaces.
- [ ] Generic phrasing (no project-specific terms beyond "Homegrown discipline reference spec").

### A-1 — Component A Preservation

**Question:** Component A from the prior finding stays — what does that mean concretely?

**Verification:**
- [ ] Confirms 4 expanded examples in the non-ambiguity principle's example list at `homegrown/protocols/conclude.md`.
- [ ] Does NOT propose changes to Component A (it's already lightweight and complementary).
- [ ] Notes Component A is the destination-side translation; convention is source-side prevention.

### B-1 — Component B Rejection

**Question:** Why is Component B rejected, and what's the structural reasoning?

**Verification:**
- [ ] Rejection reasoning: heavy compute load (per-output scan + per-match checklist + remediation steps).
- [ ] Rejection reasoning: incompletely mechanizable (Pattern 2 and Pattern 3 require semantic judgment that pure regex can't express).
- [ ] Rejection reasoning: user explicit constraint ("we don't want to overload AI with such work").
- [ ] Rejection is structural (not just preference) — the convention prevents the failure at source, eliminating the need for a destination-side scan.

### V-1 — Verification + Composition

**Question:** Does the convention catch the observed failures? How does it compose with Component A?

**Verification:**
- [ ] Per-failure verification: each of the 10+ observed failures from `2026-05-07_20-35`'s finding involved cross-spec references; convention catches each at write-time.
- [ ] Composition: convention reduces source-side ambiguity; Component A translates destination-side. Both lightweight.
- [ ] Total methodology-library cost: ~5 lines (convention) + 4 examples (Component A) ≈ ~10-15 lines aggregate, vs. Component B's ~25-30 lines + per-output scan.
- [ ] Verdict: ACTIONABLE / PARTIAL / INCONCLUSIVE.

## Step 5 — Interfaces

| Source | Target | What flows |
|---|---|---|
| C-1 | V-1 | Convention's content informs per-failure verification |
| A-1 | V-1 | Component A's role in the cascade |
| B-1 | V-1 | Rejection rationale supports the convention's existence |
| 2026-05-07_20-35 docarchive + finding | V-1 | Failure evidence (10+ observed cross-spec references) |
| Each discipline reference spec | C-1 | Existing SOLID INSTRUCTIONS section as placement target |

All one-way.

## Step 6 — Dependency Order

```
Layer 0: C-1, A-1, B-1 (independent — convention wording + Component A preservation + Component B rejection rationale)
Layer 1: V-1 (synthesizes verification + composition across Layer 0)
```

## Step 7 — Self-Evaluate (7 dimensions)

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

**Determination-Mechanism Piece Check** (per the rule added at decompose.md Step 7 / Self-Evaluate during the prior decompose sister inquiry): does the Q-tree include a load-bearing concept whose use depends on a runtime determination (e.g., "does X exist?", "is X applicable?")? **No.** The convention's trigger ("cross-spec reference") is observable from the term's source — when the runner writes a term, the discipline can recognize whether the term is defined in another spec or not. C-1, A-1, B-1, V-1 are all concrete. The check passes.
