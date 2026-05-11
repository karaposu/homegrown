# Decomposition: Generic Discipline-Level Non-Ambiguity Convention

## Step 1 — Coupling Topology

Elements:

1. **Edit 1 — Component A application** to `homegrown/protocols/conclude.md` (3 example pairs).
2. **Edit 2 — Generic first-use convention wording** (final text Innovation produces).
3. **Edit 2 placement** — end of SOLID INSTRUCTIONS in each of the 5 discipline reference specs.
4. **Edit 2 cross-reference** to Component A's example bank at `conclude.md`.
5. **State update** — mark prior `2026-05-08_06-30` `_state.md` as SUPERSEDED.
6. **Composition** — write-time generic convention + compile-time Component A example bank = lightweight cascade.
7. **Component B rejection (carried forward)** with structural reasoning.
8. **Per-shorthand-type verification** — does Edit 2 catch all 6 types?

### Coupling pairs

- Edit 1 ↔ Edit 2 cross-reference: STRONG (Edit 2 references Component A's bank).
- Edit 2 wording ↔ Edit 2 placement: STRONG.
- State update ↔ rest: WEAK (procedural closure of prior finding).
- Composition ↔ Edit 1 + Edit 2: STRONG (composition explains how they work together).
- Component B rejection ↔ Edit 2: MODERATE (rejection is the structural reason for the lightweight alternative).

### Clusters

- **E1** — Edit 1 (1).
- **E2** — Edit 2 (2, 3, 4).
- **S** — State update (5).
- **C-V** — Composition + Verification (6, 8).
- **B** — Component B rejection (7).

## Step 2 — Boundaries

5 pieces:

- **E1: Component A application to conclude.md** — 3 example pairs added to the existing non-ambiguity principle's example list.
- **E2: Generic convention + placement + cross-reference** — combined since wording, placement, and cross-reference are inseparable.
- **S-1: SUPERSEDES update** — mark prior `2026-05-08_06-30` _state.md as SUPERSEDED with history entry.
- **C-1: Composition + per-shorthand-type verification** — combined since the verification proves the composition's coverage.
- **B-1: Component B rejection (carried forward)** — structural reasoning preserved from prior `2026-05-08_06-30` finding.

## Step 3 — Bottom-Up Validation

Atoms:

1. Edit 1 trigger: existing non-ambiguity principle's example list at `conclude.md` (lines 70-73; currently 1 example pair) → E1.
2. Edit 1 action: append 3 example pairs from prior `2026-05-07_22-10` finding's Component A → E1.
3. Edit 1 text source: verbatim from prior `2026-05-07_22-10` finding (Probe section / Surface-Only Scanning failure mode / Coarse Scan example pairs) → E1.
4. Edit 2 trigger: writing output that contains a niche term (any of 6 shorthand types) → E2.
5. Edit 2 action: provide brief parenthetical context naming what the term refers to on first use; subsequent uses can be bare → E2.
6. Edit 2 wording structure: principle + 4-5 type examples (illustrative, not exhaustive) + cross-reference to Component A's example bank → E2.
7. Edit 2 placement: end of SOLID INSTRUCTIONS in each of 5 discipline reference specs → E2.
8. Edit 2 placement count: 5 (one per discipline) → E2.
9. State update: prior `2026-05-08_06-30` `_state.md` Status → SUPERSEDED → S-1.
10. State update: History entry pointing at this inquiry → S-1.
11. Composition: write-time prevention (Edit 2) + compile-time translation (Edit 1) → C-1.
12. Per-shorthand-type verification: 6 types covered (cross-spec, within-discipline, inquiry-coined, project-specific, abbreviations, bare file paths) → C-1.
13. Component B rejection: 4 structural reasons carried forward → B-1.
14. Verdict: ACTIONABLE → C-1.

All 14 atoms map cleanly. **HIGH** confidence.

## Step 4 — Question Tree

### E1 — Component A Application to conclude.md

**Question:** What 3 example pairs are added, and where?

**Verification:**
- [ ] Insertion point identified: `conclude.md` line 73 (after the existing "Template" example pair).
- [ ] 3 example pairs from prior `2026-05-07_22-10` finding's Component A:
  - Probe section example pair.
  - Surface-Only Scanning failure mode example pair.
  - Coarse Scan example pair.
- [ ] Total examples after edit: 4 (1 existing + 3 added).
- [ ] No removal of existing content.

### E2 — Generic Convention + Placement + Cross-Reference

**Question:** What is the convention's complete shape — wording, placement, cross-reference?

**Verification:**
- [ ] Wording: one sentence, ~40-50 words, generic principle covering all 6 shorthand types.
- [ ] Wording enumerates 4-5 type examples (illustrative).
- [ ] Wording cross-references Component A's example bank at `conclude.md`.
- [ ] Trigger: niche term appears in output (any of 6 types).
- [ ] Action: brief parenthetical context on first use; subsequent uses bare.
- [ ] Placement: end of SOLID INSTRUCTIONS in each of 5 discipline reference specs.
- [ ] Placement count: 5 (identical text).
- [ ] Generic phrasing (no project-specific terms beyond illustrative examples).

### S-1 — SUPERSEDES Update

**Question:** How is the prior `2026-05-08_06-30` finding marked as superseded?

**Verification:**
- [ ] `_state.md` Status field: ACTIVE/COMPLETE → SUPERSEDED.
- [ ] `_state.md` History entry added pointing at this inquiry's folder.
- [ ] Original finding.md remains in the prior folder (not deleted; historical record).
- [ ] This finding's frontmatter `supersedes:` field includes the prior path.

### C-1 — Composition + Per-Shorthand-Type Verification

**Question:** How does the cascade work, and does it catch all 6 shorthand types?

**Verification:**
- [ ] Composition explained: source-side (Edit 2 at disciplines) + destination-side (Edit 1 at conclude.md) = lightweight cascade.
- [ ] Per-type coverage table: cross-spec, within-discipline, inquiry-coined, project-specific, abbreviations, file paths — all caught at write-time by Edit 2.
- [ ] Edit 1's 4 examples cover example shapes for residual cases at compile-time.
- [ ] No per-output check anywhere.
- [ ] Verdict: ACTIONABLE.

### B-1 — Component B Rejection (Carried Forward)

**Question:** Why is Component B from `2026-05-07_22-10` still rejected?

**Verification:**
- [ ] Reason 1: heavy compute load (per-output scan + per-match checklist).
- [ ] Reason 2: incompletely mechanizable (Pattern 2 and Pattern 3 require semantic judgment).
- [ ] Reason 3: user explicit constraint ("we don't want to overload AI").
- [ ] Reason 4: source-side prevention obviates destination-side scan.
- [ ] Carried forward from prior `2026-05-08_06-30` finding's documentation.

## Step 5 — Interfaces

| Source | Target | What flows |
|---|---|---|
| E2 | E1 | Cross-reference dependency (E2 mentions Component A's bank) |
| E1 | C-1 | Edit 1 contributes destination-side coverage |
| E2 | C-1 | Edit 2 contributes source-side coverage |
| Failure evidence (2026-05-07_20-35) + 6-type taxonomy | C-1 | Verification input |
| Prior 2026-05-07_22-10 finding | E1 | Component A's text source |
| Prior 2026-05-08_06-30 finding | S-1, B-1 | SUPERSEDES target + Component B rejection text source |

All one-way.

## Step 6 — Dependency Order

```
Layer 0: E1, E2, S-1, B-1 (independent — edits + state update + rejection rationale)
Layer 1: C-1 (synthesizes composition + verification)
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

**Determination-Mechanism Piece Check** (per the rule added at `decompose.md` Step 7 / Self-Evaluate during the prior decompose sister inquiry; "decompose.md" here means `homegrown/decompose/references/decompose.md`, the Structural Decomposition discipline reference spec): does the Q-tree include a load-bearing concept whose use depends on a runtime determination? **No.** All triggers are observable from the term's properties (is it a niche term? does it appear in another spec? is it an abbreviation?). E1, E2, S-1, B-1, C-1 are concrete. The check passes.
