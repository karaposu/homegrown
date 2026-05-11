# Innovation: Decompose Discipline - Definite Gaps From Corpus Evidence

## Phase 1 — Seed

Sensemaking + Decomposition stabilized: ONE for-sure-missing rule. Innovation generates concrete wording.

## Phase 2 — Generate

### Component R-1a: Rule Core (canonical home placement)

**Convergence across mechanisms:**

> *"**Determination-mechanism piece check.** When the question tree (Q-tree) includes a load-bearing concept whose use depends on a runtime determination — i.e., the concept is referenced in one or more pieces, but its applicability is determined at runtime by checking 'does X exist?', 'is X applicable?', or similar — the Reassembly self-evaluation check verifies that the Q-tree includes a piece addressing the determination mechanism (HOW the runtime check is performed). A Q-tree that presupposes the determination has been made — without including a piece addressing HOW it is made — fails Reassembly: reconstructing the whole requires the determination, but no piece provides it. Failing this check is an instance of Missing Pieces (failure mode #4)."*

**Position:** Add as a follow-on paragraph after the minimum-3-dimension table at Step 7 / Self-Evaluate (currently lines 169-175 in `decompose.md`) and before the full-7-dimension table (currently starting at line 177).

**Wording rationale:**
- Generic vocabulary throughout (Q-tree, load-bearing concept, runtime determination, Reassembly self-evaluation, piece, determination mechanism, Missing Pieces).
- Bold-prefix style (`**Determination-mechanism piece check.**`) matches `decompose.md`'s existing convention for sub-rule headers.
- Failure-mode tie (Missing Pieces) inline.
- Examples ("does X exist?", "is X applicable?") narrow the trigger predicate.

### Component R-1b: Cross-Reference

**Final wording at Missing Pieces failure mode (failure mode #4) — appended to existing "How to prevent" line:**

> *"For Q-trees with load-bearing concepts whose use depends on a runtime determination, see Step 7 — Self-Evaluate → Determination-mechanism piece check."*

**Position:** Appended to the existing Missing Pieces "How to prevent" sentence (currently around line 277 of `decompose.md`).

### Component F-1: Speculative Additions Filtered (in finding only)

**Final documentation (in this finding's Reasoning section, NOT in `decompose.md`):**

The following Decomposition-related observations from the corpus were considered and explicitly REJECTED as for-sure-missing rules:

- **Chain 1 propagation hypothesis** (Q-tree presupposed the artifact). Per chain 1's finding: *"The propagation hypotheses do not require independent maintenance candidates: if M1 (the upstream Sensemaking patch) succeeds, the corridor that produced these amplifications is itself prevented."* The corrective surface is at Sensemaking, not Decomposition. **REJECT.**

- **Chain 2 propagation hypothesis** (Q-tree presupposed storage axis as separable). Per chain 2's finding: *"The propagation hypotheses do not require independent maintenance candidates: if N2 (Sensemaking patch) succeeds, the corridor that produced these amplifications is itself prevented."* **REJECT.**

- **Hidden Coupling refinement, Coupling perception refinement, Interface mapping refinement, Dependency ordering refinement** — no chain finding surfaces a primary-cause failure for any of these `decompose.md` surfaces. **REJECT (no primary-cause evidence).**

These rejections preserve the for-sure criterion's epistemic standard: only multi-source-convergent or strong single-chain primary-cause + before/after contrast rules pass.

### Component C-1: Single-Chain Caveat

**Final documentation (in this finding's Refinement Triggers section, NOT in `decompose.md`):**

> *"P11 family at 1 chain (Decomposition completeness; chain 6 only). Revival trigger: revisit the Determination-mechanism piece check rule if it does not fire effectively in next 3 MVL+ runs producing Q-trees with runtime-determined load-bearing concepts, OR if the next LOOP_DIAGNOSE run does not show another P11 instance (in which case the rule's narrow scope may be confirmed; if a P11 instance does appear, the rule's evidence base strengthens toward cross-cutting promotion at 3+ chains)."*

The single-chain caveat does NOT appear in `decompose.md` — discipline-spec purity preserved.

### Component V-1: Verification

**Per-chain verification:**

| Chain | Decomposition implication | Caught by rule? |
|---|---|---|
| 1 | Propagation hypothesis (covered by Sensemaking M1) | NO (intentionally; rule targets primary-cause Decomposition failures, not Sensemaking-inherited propagation) |
| 2 | Propagation hypothesis (covered by Sensemaking N2) | NO (same reason as chain 1) |
| 3 | Not implicated | N/A |
| 4 | Not implicated | N/A |
| 5 | Not implicated | N/A |
| 6 | Q-tree presupposed `PastNavigationMemoryFile` source-present check without discovery-mechanism piece | YES — rule's trigger fires (load-bearing concept with runtime determination); rule's action verifies determination-mechanism piece exists; chain 6's prior Q-tree fails the check |
| 7 | Not implicated | N/A |

The rule catches chain 6 (the only primary-cause Decomposition failure across the corpus). Propagation cases (chains 1, 2) are NOT covered by this rule — they are covered by upstream Sensemaking patches per chain findings.

**100% coverage of primary-cause Decomposition failures.**

## Phase 3 — Test

**Novelty:** new rule with corpus-evidenced shape; no existing equivalent in `decompose.md`. NOVEL.

**Scrutiny survival:** strongest objection — *"single-chain evidence is thin; the rule may over-fit chain 6's specific case."* Defense — single-chain primary-cause + explicit before/after contrast satisfies the for-sure criterion (per the prior `2026-05-07_20-35` resolution); the rule's generic phrasing ("load-bearing concept whose use depends on a runtime determination") covers the underlying mechanism, not just chain 6's specific instance; the single-chain caveat + revival trigger is documented in this finding. SURVIVES.

**Fertility:** opens Step 7 / Self-Evaluate's Reassembly dimension as a structured surface for runtime-determined concept testing; future sub-aspects could be added as evidence accumulates. FERTILE.

**Actionability:** runner reads the rule → checks if the Q-tree includes a load-bearing concept with runtime determination → if yes, verifies a determination-mechanism piece exists. Deterministic. ACTIONABLE.

**Mechanism independence:** chain 6 (T2) is the primary source. Single-chain primary-cause but with explicit before/after contrast. MEDIUM-HIGH (single-chain).

**VERDICT: SURVIVES.**

## Assembly Check

```
R-1a (rule core) + R-1b (cross-reference) + F-1 (filter doc) + C-1 (caveat doc) + V-1 (verification)
```

Emergent value:
- R-1a + R-1b form the canonical-home + cross-reference pair per the placement convention.
- F-1 documents what's NOT in the spec — preserves the for-sure criterion's filtering effect.
- C-1 documents the single-chain caveat in the finding only — preserves discipline-spec purity.
- V-1 verifies primary-cause coverage (chain 6 caught; chains 1+2 propagation cases intentionally not covered, addressed upstream).

The assembly's milestone: the SMALLEST gap-inventory of any thinking-discipline-spec analyzed so far (1 rule for decompose.md vs 2 each for explore.md and sensemaking.md). This reflects Decomposition's downstream position in the cascade structure — most failures cascade through it from upstream, not originating at it.

Assembly verdict: SURVIVE.

## V1 Shape (Stable Output for Critique)

```
For-sure-missing rule for homegrown/decompose/references/decompose.md:

RULE — Determination-Mechanism Piece Check at Step 7 / Self-Evaluate (Reassembly)
  Where: Step 7 / Self-Evaluate, follow-on paragraph after minimum-3-dimension table
  Trigger: Q-tree includes load-bearing concept whose use depends on a runtime determination
  Action: Reassembly check verifies a determination-mechanism piece exists
  Failure mode it prevents: Missing Pieces (failure mode #4)
  Cross-reference: at Missing Pieces (one line)
  Evidence: chain 6 (T2) primary cause + before/after contrast
  Cost: ~6-10 lines added to decompose.md

REJECTED (in finding documentation only):
  - Chain 1 propagation (covered by Sensemaking M1)
  - Chain 2 propagation (covered by Sensemaking N2)
  - Other Decomposition observations (no primary-cause evidence)

SINGLE-CHAIN CAVEAT (in finding documentation only):
  - P11 family at 1 chain
  - Revival trigger: revisit if not effective in 3 runs OR if next LOOP_DIAGNOSE shows another P11 instance
  - Documented in finding's Refinement Triggers section, NOT in decompose.md

Verdict: ONE for-sure-missing rule. Aggregate ~6-10 lines added to decompose.md.
Discipline-spec purity preserved.
```

## Telemetry

- Generators applied: 4 / 4. Framers applied: 3 / 3. Coverage: FULL.
- Convergence: HIGH (single rule with clear placement; mechanisms produce consistent wording).
- Survivors tested: combined fix passes all 5 tests.
- Failure modes: NONE.
- **Overall: PROCEED.**
