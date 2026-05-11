# Critique: Decompose Discipline - Definite Gaps From Corpus Evidence

## Phase 0 — Dimensions With Weights

### 1. For-Sure Criterion Met - 25%

**Critical.** Rule must have failure-of-absence + success-of-presence evidence. Single-chain primary-cause + before/after contrast passes (per prior precedent).

### 2. Generic / Meta-Discipline Framing - 20%

**Critical.** Rule uses existing `decompose.md` vocabulary; no project-specific terms.

### 3. Placement Convention Applied - 20%

**Critical.** Rule has ONE canonical home + one-line cross-reference at corresponding failure mode.

### 4. Discipline-Spec Purity Preserved - 15%

**Critical.** No embedded placement convention; no maintenance-time meta-content (single-chain caveat lives in finding only).

### 5. Coverage Of Primary-Cause Decomposition Failures - 10%

The rule must catch chain 6 (the only primary-cause Decomposition failure). Propagation cases (chains 1, 2) are NOT this rule's responsibility — they are covered by upstream Sensemaking patches.

### 6. Implementation Cost - 5%

Aggregate ≤ ~10 lines added to `decompose.md`.

### 7. Speculative-Filter Application - 5%

Rejected additions explicitly documented with rationale.

**Critical dimensions:** For-Sure Criterion, Generic Framing, Placement Convention, Discipline-Spec Purity.

## Phase 1 — Fitness Landscape

### Viable Region

Rules that:
- Pass for-sure criterion (single-chain primary-cause + before/after contrast minimum).
- Use generic / meta-discipline language.
- Have one canonical home + one-line cross-reference.
- Don't embed the placement convention.
- Catch primary-cause Decomposition failures.
- Aggregate ≤ ~10 lines.
- Reject propagation-only hypotheses.

### Dead Region

Rules that:
- Are speculative.
- Use project-specific vocabulary.
- Multi-surface duplication.
- Embed the placement convention.
- Try to cover propagation hypotheses (chains 1, 2) — those are upstream-Sensemaking responsibility.
- Wholesale restructure `decompose.md`.

### Boundary Region

- Single-chain evidence (passes the criterion via before/after contrast but with explicit caveat).
- Sub-option A vs Sub-option B placement (resolved Sub-option B per Sensemaking Ambiguity 1).

## Phase 2 — Candidate Evaluation

### Candidate: Combined Fix (R-1a + R-1b + F-1 + C-1 + V-1)

**Prosecution:**

The rule has single-chain evidence (chain 6 only). Single-chain primary-cause technically passes the for-sure criterion via before/after contrast, but cross-chain reinforcement would be stronger. The "load-bearing concept" qualifier is judgment-dependent — what counts as "use depends on a runtime determination"?

The Reassembly dimension currently has a one-sentence "Pass if" cell in the table. Adding a follow-on paragraph after the table elaborates the dimension with multi-paragraph content that's structurally heavier than the existing table cells.

The rule's example phrasings ("does X exist?", "is X applicable?") are project-domain-typical (chain 6 was about a `PastNavigationMemoryFile` source-present check). The phrasing is generic enough to apply broadly but the runner may pattern-match too narrowly.

**Defense:**

Single-chain + before/after contrast is the for-sure criterion threshold (per the `2026-05-07_20-35` resolution). The chain-6 evidence is HIGH (primary cause; before/after contrast in prior + corrected `docarchive/decomposition.md`). The rule's wording is generic and covers any concept whose use depends on a runtime check, not just chain 6's specific case.

The "load-bearing concept" qualifier matches the same qualifier used in the sensemaking.md sister analysis's Rule A. It's observable: a concept is load-bearing if removing it would change the Q-tree's verdict (does the Q-tree still hold together without addressing this concept? If no, it's load-bearing).

The follow-on paragraph after the Reassembly table is the right placement: tables are for compact summaries; multi-paragraph rules belong in follow-on prose. This is consistent with the spec's existing convention (e.g., the "Low-scoring dimensions flag where the decomposition needs refinement before proceeding" line at line 189 is also follow-on prose after a table).

The example phrasings ("does X exist?", "is X applicable?") are standard runtime-check phrasings, not project-specific. They apply to any Q-tree with runtime-determined concepts.

**Verification against the four critical dimensions:**

- For-Sure Criterion: HIGH (chain 6 primary-cause + explicit before/after contrast in prior + corrected docarchive).
- Generic Framing: HIGH (uses Q-tree, load-bearing concept, runtime determination, Reassembly self-evaluation, piece, determination mechanism, Missing Pieces — all generic).
- Placement Convention: HIGH (canonical home Step 7 / Self-Evaluate; cross-reference at Missing Pieces; one-line pointer).
- Discipline-Spec Purity: HIGH (no embedded convention; single-chain caveat in finding only).

**Verification against coverage:**

Per V-1: chain 6 caught (the only primary-cause Decomposition failure). Chains 1+2 propagation NOT covered (intentionally; addressed upstream by Sensemaking M1, N2 per chain findings). 100% of primary-cause Decomposition failures covered.

**Dimensions:**

- For-Sure Criterion: HIGH.
- Generic Framing: HIGH.
- Placement Convention Applied: HIGH.
- Discipline-Spec Purity Preserved: HIGH.
- Coverage: HIGH (100% of primary-cause).
- Implementation Cost: LOW (~6-10 lines).
- Speculative-Filter Application: HIGH (chains 1, 2 propagation explicitly rejected; other observations rejected).

**Verdict: SURVIVE.**

Constructive output:

ADD to `homegrown/decompose/references/decompose.md`:
- Rule as a follow-on paragraph after the minimum-3-dimension table at Step 7 / Self-Evaluate.
- One-line cross-reference at Missing Pieces failure mode.

Risk class: low. Evaluation gate: in next 3 MVL+ runs producing Q-trees with load-bearing concepts whose use depends on a runtime determination, the rule fires (Reassembly check verifies a determination-mechanism piece exists). Verify zero recurrence of chain 6's primary-cause failure.

## Phase 3.5 — Assembly Check

The combined fix's components reinforce each other:
- R-1a provides the rule's content.
- R-1b provides navigation from the failure mode side.
- F-1 documents what's NOT in the spec — preserves the for-sure criterion.
- C-1 documents the single-chain caveat in the finding only — preserves spec purity.
- V-1 verifies coverage.

Self-applying: this finding obeys the placement convention by living in `devdocs/inquiries/`, not embedded in `decompose.md`.

Assembly verdict: SURVIVE.

## Phase 3 — Ranked Verdicts

1. **SURVIVE: Rule** — Determination-Mechanism Piece Check at Step 7 / Self-Evaluate (Reassembly). Single-chain primary-cause + before/after contrast.

2. **SURVIVE: Cross-reference** at Missing Pieces failure mode (one line).

3. **REJECT: Chain 1 + Chain 2 propagation hypotheses + other Decomposition observations.** Per chain findings; preserved as documentation, not as rules.

4. **DOCUMENT (in finding only): single-chain caveat + revival trigger.** P11 family at 1 chain; revival trigger preserves the option to refine.

## Coverage Map

Evaluated:
- Combined fix as a unit.
- Per-chain verification: chain 6 (primary cause) caught; chains 1, 2 (propagation) intentionally not covered.
- Per-dimension verification: 4 critical dimensions all HIGH.
- Speculative-filter verification: explicit rejections.
- Discipline-spec-purity verification.

Unexplored but not blocking:
- Refinement of Decomposition's Coupling Perception, Boundary Detection, Interface Mapping, Dependency Ordering steps. Out of scope; no primary-cause evidence in the corpus.
- Hidden Coupling failure mode refinement. Out of scope; not implicated.
- Cross-chain promotion if P11 family extends to 3+ chains. Deferred until evidence accumulates.

Coverage judgment: sufficient.

## Signal

TERMINATE with ranked survivor:
1. SURVIVE: Rule (canonical home Step 7 / Self-Evaluate; cross-reference at Missing Pieces).
2. REJECT: speculative additions + propagation-only hypotheses.
3. DOCUMENT: single-chain caveat in finding only.

The user's question is answered: ONE for-sure-missing piece from `decompose.md`, expressed in generic / meta-discipline language, placed per the placement convention, with discipline-spec purity preserved. Aggregate ~6-10 lines added.

## Convergence Telemetry

- Dimension coverage: complete.
- Adversarial strength: STRONG.
- Landscape stability: STABLE.
- Clean SURVIVE: yes.
- Failure modes observed: none.
- **Overall: PROCEED.**
