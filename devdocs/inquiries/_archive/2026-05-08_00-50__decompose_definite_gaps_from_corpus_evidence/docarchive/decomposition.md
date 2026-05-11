# Decomposition: Decompose Discipline - Definite Gaps From Corpus Evidence

## Step 1 — Coupling Topology

Elements:

1. **Rule core** — Determination-Mechanism Piece Inclusion Check.
2. **Cross-reference at Missing Pieces** — one-line pointer.
3. **Speculative-filter documentation** — propagation hypotheses (chains 1 + 2) + other rejections, documented in this finding only.
4. **Verification per chain** — does the rule catch chain 6 specifically?
5. **Single-chain caveat documentation** — P11 family at 1 chain; revival trigger documented in finding only.

### Coupling pairs

- Rule core ↔ Cross-reference: STRONG.
- Rule core ↔ Verification: STRONG.
- Speculative filter ↔ Verification: WEAK (filter documents what's NOT covered).
- Single-chain caveat ↔ Rule core: MODERATE (caveat affects how the rule is presented in the finding, not in the spec).

### Clusters

- **R** — Rule + cross-reference (1, 2).
- **F** — Filtered/rejected (3) + caveat (5).
- **V** — Verification (4).

## Step 2 — Boundaries

4 pieces:

- **R-1: Rule core + cross-reference** — combined since the cross-reference is a one-line pointer dependent on the rule's content.
- **F-1: Speculative additions filtered** — chains 1+2 propagation rejection + other rejections.
- **C-1: Single-chain caveat** — P11 at 1 chain; revival trigger.
- **V-1: Verification + verdict** — does the rule catch chain 6?

## Step 3 — Bottom-Up Validation

Atoms:

1. Rule trigger predicate (Q-tree includes load-bearing concept with runtime determination) → R-1.
2. Rule action (Reassembly check verifies determination-mechanism piece) → R-1.
3. Rule failure-mode tie (Missing Pieces) → R-1.
4. Rule canonical home (Step 7 / Self-Evaluate, after minimum-3-dimension table) → R-1.
5. Cross-reference text at Missing Pieces → R-1.
6. Chain 1 propagation hypothesis rejected per chain 1 finding → F-1.
7. Chain 2 propagation hypothesis rejected per chain 2 finding → F-1.
8. Other Decomposition observations rejected (no primary-cause evidence) → F-1.
9. P11 single-chain caveat → C-1.
10. Revival trigger (3 runs OR next LOOP_DIAGNOSE P11 instance) → C-1.
11. Per-chain verification (rule catches chain 6) → V-1.
12. Verdict (ACTIONABLE) → V-1.

All atoms map cleanly. **HIGH** confidence.

## Step 4 — Question Tree

### R-1 — Rule + Cross-Reference

**Question:** What is the rule's complete shape (trigger, action, failure-mode tie, canonical home) plus the one-line cross-reference at Missing Pieces?

**Verification:**
- [ ] Trigger stated (Q-tree includes load-bearing concept whose use depends on a runtime determination).
- [ ] Action stated (Reassembly check verifies determination-mechanism piece exists).
- [ ] Failure-mode tie stated (Missing Pieces, failure mode #4).
- [ ] Canonical home: Step 7 / Self-Evaluate, follow-on paragraph after the minimum-3-dimension table.
- [ ] Cross-reference at Missing Pieces failure mode (one line).
- [ ] Generic phrasing (uses existing `decompose.md` vocabulary).

### F-1 — Speculative Additions Filtered

**Question:** What rejections are documented and why?

**Verification:**
- [ ] Chain 1 propagation hypothesis rejected (per chain 1 finding: covered by upstream Sensemaking M1).
- [ ] Chain 2 propagation hypothesis rejected (per chain 2 finding: covered by upstream Sensemaking N2).
- [ ] Other Decomposition observations rejected (no primary-cause evidence).
- [ ] Each rejection cites the specific chain finding.

### C-1 — Single-Chain Caveat

**Question:** How is the single-chain caveat documented?

**Verification:**
- [ ] P11 family at 1 chain noted.
- [ ] Revival trigger stated (revisit if not effective in 3 runs OR if next LOOP_DIAGNOSE shows another P11 instance).
- [ ] Documented in finding only (NOT in `decompose.md` — purity).

### V-1 — Verification + Verdict

**Question:** Does the rule catch chain 6's failure, and what is the verdict?

**Verification:**
- [ ] Per-chain verification: rule catches chain 6 (Q-tree presupposed `PastNavigationMemoryFile` source-present check without including a discovery-mechanism piece).
- [ ] Per-chain verification: chains 1+2 propagation cases NOT covered (intentionally; covered by upstream Sensemaking patches).
- [ ] Verdict: ACTIONABLE / PARTIAL / INCONCLUSIVE.

## Step 5 — Interfaces

| Source | Target | What flows |
|---|---|---|
| R-1 | V-1 | Rule's content informs per-chain verification |
| F-1 | V-1 | Filter rationale supports verdict (what's NOT covered) |
| C-1 | V-1 | Single-chain caveat affects verdict's strength |
| Existing `decompose.md` structure | R-1 | Canonical home placement uses Step 7 + cross-reference at Missing Pieces |
| Corpus chain findings | R-1, F-1, C-1 | Evidence per piece |

All one-way.

## Step 6 — Dependency Order

```
Layer 0: R-1, F-1, C-1 (independent)
Layer 1: V-1 (synthesizes across)
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
