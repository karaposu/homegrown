# Decomposition: Sensemaking Discipline - Definite Gaps From Corpus Evidence

## Step 1 — Coupling Topology

Elements:

1. **Rule A core** — the load-bearing concept test at Phase 3 / Ambiguity Collapse.
2. **Rule A sub-aspects** — illustrative examples per layer (Phase 1, SV2+, Phase 5).
3. **Rule B** — Phase / Calibration-State perspective at Phase 2 / Perspective Checking.
4. **Cross-reference at Premature Stabilization** — for Rule A.
5. **Cross-reference at Perspective Blindness** — for Rule B.
6. **Verification against corpus** — does the fix catch the observed failures?
7. **Speculative-filter documentation** — what was rejected.
8. **Discipline-purity check** — no embedded convention.

### Coupling pairs

- Rule A core ↔ Rule A sub-aspects: STRONG (sub-aspects are content of the rule).
- Rule A ↔ Cross-reference at Premature Stabilization: STRONG.
- Rule B ↔ Cross-reference at Perspective Blindness: STRONG.
- Rule A ↔ Rule B: WEAK. Different surfaces, different mechanisms.
- Verification ↔ Rules: STRONG.
- Speculative filter ↔ Rules: WEAK (rejection documentation).
- Purity check ↔ everything: cross-cutting (constraint applied to placement decisions).

### Clusters

- **A** — Rule A surface (1, 2, 4): Rule A core + sub-aspects + cross-reference.
- **B** — Rule B surface (3, 5): Rule B + cross-reference.
- **V** — Verification + verdict (6).
- **F** — Filtered speculative additions (7).
- **P** — Purity check (8) — cross-cutting.

## Step 2 — Boundaries

5 pieces:

- **A-1: Rule A core + sub-aspects** — the rule's content with illustrative examples.
- **A-2: Rule A cross-reference** — one-line pointer at Premature Stabilization failure mode.
- **B-1: Rule B + cross-reference** — Rule B's content + cross-reference at Perspective Blindness (combined; Rule B is simpler).
- **F-1: Speculative additions filtered** — what was rejected (Q-RF, U9, etc.).
- **V-1: Verification + verdict** — does the fix catch the corpus failures?

5 pieces.

## Step 3 — Bottom-Up Validation

Atoms:

1. Rule A trigger predicate (load-bearing concept stabilized in any earlier Sensemaking output) → A-1.
2. Rule A action (Phase 3 ambiguity-collapse pair test) → A-1.
3. Rule A test predicates per layer (Phase 1 / SV2+ / Phase 5) → A-1.
4. Rule A Phase 5 sub-aspects illustrative examples (proxy-vs-structural, discoverability, user-language alignment) → A-1.
5. Rule A failure-mode-it-prevents reference (Premature Stabilization) → A-1.
6. Rule A canonical home (Execute section's Phase 3 — Ambiguity Collapse) → A-1.
7. Rule A cross-reference text → A-2.
8. Rule B trigger predicate (inquiry involves phase-dependent rules) → B-1.
9. Rule B action (Phase / Calibration-State perspective added) → B-1.
10. Rule B canonical home (Execute section's Phase 2 — Perspective Checking) → B-1.
11. Rule B cross-reference text → B-1.
12. Speculative additions rejected per corpus (Q-RF, U9) → F-1.
13. Verification per chain (Rule A catches chains 1-3 + 5-7; Rule B catches chain 4) → V-1.
14. Verdict (ACTIONABLE) → V-1.

All atoms map cleanly. **HIGH** confidence.

## Step 4 — Question Tree

### A-1 — Rule A Core + Sub-Aspects

**Question:** What is Rule A's complete shape (trigger, action, sub-aspects, canonical home, failure-mode-it-prevents reference)?

**Verification:**
- [ ] Trigger stated (load-bearing concept stabilized in any earlier Sensemaking output).
- [ ] Action stated (Phase 3 ambiguity-collapse pair testing the concept).
- [ ] Test predicates per layer (Phase 1 / SV2+ / Phase 5) specified.
- [ ] Phase 5 sub-aspects (proxy-vs-structural, discoverability, user-language alignment) given as illustrative examples (not exhaustive enumeration).
- [ ] Failure mode reference (Premature Stabilization).
- [ ] Canonical home: Execute section's Phase 3 — Ambiguity Collapse.
- [ ] Generic phrasing (uses existing `sensemaking.md` vocabulary).

### A-2 — Rule A Cross-Reference

**Question:** What is the one-line cross-reference at Premature Stabilization failure mode?

**Verification:**
- [ ] One line, navigation-not-summary form.
- [ ] Points to Phase 3 — Ambiguity Collapse canonical home.
- [ ] Brief role description (load-bearing concept testing).

### B-1 — Rule B + Cross-Reference

**Question:** What is Rule B's complete shape and its one-line cross-reference at Perspective Blindness?

**Verification:**
- [ ] Trigger stated (inquiry involves phase-dependent rules).
- [ ] Action stated (Phase / Calibration-State perspective added at Phase 2).
- [ ] Failure mode reference (Perspective Blindness).
- [ ] Canonical home: Execute section's Phase 2 — Perspective Checking.
- [ ] Cross-reference at Perspective Blindness failure mode.
- [ ] Generic phrasing.

### F-1 — Speculative Additions Filtered

**Question:** What additions are rejected and why?

**Verification:**
- [ ] Q-RF Research Frontier instances rejected (5 chain findings consistently reject as candidate).
- [ ] U9 (Phase 4 operation-shape stability) rejected (DEFERRED per chain 7; jump-scan single-cycle).
- [ ] Other Sensemaking observations folded under Rule A (chain 3 B = Phase 2 Human-User depth, covered by Rule A's Phase 3 test).
- [ ] Each rejection cites the specific chain finding.

### V-1 — Verification + Verdict

**Question:** Does the fix catch the corpus failures, and what is the verdict?

**Verification:**
- [ ] Per-chain verification: Rule A catches chains 1, 2, 3, 5, 6, 7 failures (matches M6 + refinements coverage).
- [ ] Per-chain verification: Rule B catches chain 4 failure.
- [ ] All 7 chains covered between Rule A + Rule B (no chain unaddressed).
- [ ] Verdict: ACTIONABLE / PARTIAL / INCONCLUSIVE.

## Step 5 — Interfaces

| Source | Target | What flows |
|---|---|---|
| A-1 | A-2 | Rule A's content informs cross-reference's brief role description |
| A-1, A-2 | V-1 | Rule A is verified per-chain |
| B-1 | V-1 | Rule B is verified per-chain |
| F-1 | V-1 | Speculative-rejection rationale supports verdict |
| Existing `sensemaking.md` structure | A-1, B-1 | Canonical-home placement uses existing Execute section structure |
| Corpus chain findings | A-1, B-1, F-1 | Evidence per rule + rejection rationale |

All one-way. No circular dependencies.

## Step 6 — Dependency Order

```
Layer 0: A-1, B-1, F-1 (independent rule definitions + filter)
Layer 1: A-2 (cross-reference depends on A-1)
Layer 2: V-1 (verification synthesizes across A-1, A-2, B-1, F-1)
```

Most pieces parallel; only A-2 strictly depends on A-1.

## Step 7 — Self-Evaluate (7 dimensions)

| Dimension | Score |
|---|---|
| Independence | PASS |
| Completeness | PASS |
| Reassembly | PASS |
| Tractability | PASS |
| Interface clarity | PASS |
| Balance | PASS-with-note (A-1 is the heaviest piece by content; others lighter; structural imbalance, not decomposition flaw) |
| Confidence | PASS (HIGH agreement) |

All 7 PASS.
