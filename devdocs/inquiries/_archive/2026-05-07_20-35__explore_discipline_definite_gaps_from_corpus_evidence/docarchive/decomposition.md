# Decomposition: Explore Discipline - Definite Gaps From Corpus Evidence

## User Input

`devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/_branch.md` — sensemaking stabilized TWO for-sure-missing rules; decomposition partitions them into independently-implementable pieces with explicit interfaces and dependency order.

## Step 1 — Perceive Coupling Topology

The territory contains the following elements:

1. **Rule 1 (Type-Aware Probe Rule).** Trigger predicate, action, where-it-sits, evaluation gate, failure-mode tie.
2. **Rule 2 (Contextual Surround Pre-Scan Rule).** Trigger predicate, action, where-it-sits, evaluation gate, failure-mode tie.
3. **For-sure criterion.** The methodological filter applied across both rules.
4. **Generic / meta-discipline framing requirement.** Vocabulary constraint applied across both rules.
5. **Existing explore.md structure.** What both rules extend.
6. **Evidence per rule.** Citations to chain findings.
7. **Speculative additions.** What was filtered out (provenance, operation-shape, vocabulary).
8. **Diagnostic verdict.** The synthesis.

### Coupling pairs

- Rule 1 ↔ Rule 2: WEAK. The two rules are orthogonal — different sections of explore.md, different mechanisms, different failure-mode ties.
- Rule 1 ↔ For-sure criterion: STRONG. Rule 1 must pass the criterion; failing the criterion means rejecting the rule.
- Rule 2 ↔ For-sure criterion: STRONG. Same as Rule 1.
- Rule 1 ↔ Generic framing: STRONG. Must use scan/probe/candidate/quantifiable-claim/stabilized-set vocabulary.
- Rule 2 ↔ Generic framing: STRONG. Must use territory/surround-layer/coarse-scan/inquiry-specific vocabulary.
- Rule 1, Rule 2 ↔ Existing structure: STRONG (each rule extends specific surfaces).
- Rule 1, Rule 2 ↔ Evidence: STRONG (each rule cites specific chain findings).
- Speculative additions ↔ Diagnostic verdict: WEAK (filtered out; not part of the verdict's main content).
- Diagnostic verdict ↔ Rule 1, Rule 2, Evidence: STRONG (synthesizes across).

### Coupling map clusters

**Cluster R1 (Rule 1 surface):** {Rule 1 trigger, action, where-it-sits, evaluation gate, failure-mode tie, evidence} — STRONG within. All elements describe Rule 1's complete shape.

**Cluster R2 (Rule 2 surface):** {Rule 2 trigger, action, where-it-sits, evaluation gate, failure-mode tie, evidence} — STRONG within. All elements describe Rule 2's complete shape.

**Cluster CR (Cross-cutting requirements):** {For-sure criterion, Generic framing, Existing structure} — STRONG within. These apply equally to both rules.

**Cluster F (Filtered):** {Speculative additions} — singleton; documented as REJECTED.

**Cluster V (Verdict):** {Diagnostic verdict} — singleton; synthesizes across R1 + R2 + CR + F.

### Boundary regions (low-coupling valleys)

- Between R1 and R2 — the rules are orthogonal; partition cleanly.
- Between CR and R1/R2 — CR applies to both but doesn't change rule-specific content; partition by "what's shared vs what's rule-specific."
- Between F and everything else — F is rejection documentation; partitions cleanly from the active rules.
- Between V and R1/R2/CR/F — V is the synthesis layer.

## Step 2 — Detect Boundaries (Top-Down)

Initial boundary set:

- Piece R1 = Rule 1 complete shape (single piece; sub-elements stay together because they describe one rule).
- Piece R2 = Rule 2 complete shape (single piece).
- Piece CR-S = For-sure criterion (single piece).
- Piece CR-G = Generic framing requirement (single piece).
- Piece CR-E = Existing-structure-extension principle (single piece).
- Piece F = Filtered speculative additions (single piece).
- Piece V = Diagnostic verdict (single piece).

7 pieces at this level.

Refinement: Pieces CR-S, CR-G, CR-E are tightly coupled (all three apply to both rules and shape what counts as a valid rule). Coalesce into one piece CR (cross-cutting requirements).

After coalescing: 5 pieces (R1, R2, CR, F, V).

## Step 3 — Validate Boundaries (Bottom-Up Check)

Bottom-up irreducible elements (atoms):

1. Rule 1 trigger predicate ("carries a quantifiable claim") — should be in R1.
2. Rule 1 action ("empirical probe before stabilization") — should be in R1.
3. Rule 1 where-it-sits (Probe section + Surface-Only Scanning prevention) — should be in R1.
4. Rule 1 evaluation gate (next 3 runs producing quantifiable-claim candidates) — should be in R1.
5. Rule 1 failure-mode tie (Surface-Only Scanning extension) — should be in R1.
6. Rule 1 evidence (chain 1 M2 verbatim + chain 6 Cycle 4 reinforcement) — should be in R1.
7. Rule 1 mode coverage (BOTH artifact and possibility) — should be in R1.
8. Rule 2 trigger predicate ("territory has surround layer") — should be in R2.
9. Rule 2 action ("Coarse Scan includes surround items before inquiry-specific items") — should be in R2.
10. Rule 2 where-it-sits (Scan section + Premature Depth prevention + Coarse Scan in Resolution Progression) — should be in R2.
11. Rule 2 evaluation gate (next 3 runs producing surround-layer territory) — should be in R2.
12. Rule 2 failure-mode tie (Premature Depth extension) — should be in R2.
13. Rule 2 evidence (chain 2 N1 verbatim + before/after contrast) — should be in R2.
14. For-sure criterion definition (definitely missing + evidenced + before/after contrast) — should be in CR.
15. Generic framing requirement (structural-exploration vocabulary; no project-specific terms) — should be in CR.
16. Existing-structure-extension principle (rules extend; do not contradict; do not replace) — should be in CR.
17. Filtered speculative addition: provenance tracking — should be in F.
18. Filtered speculative addition: operation-shape stability — should be in F.
19. Filtered speculative addition: vocabulary tracking — should be in F.
20. Diagnostic verdict: TWO for-sure-missing rules → ACTIONABLE-PARTIAL — should be in V.

Bottom-up validation: atoms 1-7 → R1 ✓; atoms 8-13 → R2 ✓; atoms 14-16 → CR ✓; atoms 17-19 → F ✓; atom 20 → V ✓.

**Top-down ↔ bottom-up agreement: HIGH.** No atoms split across boundaries; no atoms grouped that should be independent. Confidence: HIGH on the 5-piece structure.

## Step 4 — Express as Question Tree

### Piece R1 — Rule 1: Type-Aware Probe Rule

**Question:** What is Rule 1's complete shape (trigger, action, where-it-sits, evaluation gate, failure-mode tie, evidence, mode coverage), expressed in generic / meta-discipline language?

**Verification criteria:**
- [ ] Trigger predicate stated ("candidate carries a quantifiable claim of any type").
- [ ] Action stated ("empirical probe of the quantifiable claim before stabilization").
- [ ] Where-it-sits specified (Probe section + Surface-Only Scanning prevention).
- [ ] Evaluation gate stated (in next 3 MVL+ runs producing candidates with quantifiable claims, the rule fires).
- [ ] Failure-mode tie explicit (extends Surface-Only Scanning's "probe at least one signal" to "probe quantifiable-claim candidates specifically").
- [ ] Evidence cited (chain 1 M2 verbatim; chain 6 Cycle 4 reinforcement).
- [ ] Mode coverage explicit (BOTH artifact and possibility modes).
- [ ] Generic phrasing (no project-specific terms).

### Piece R2 — Rule 2: Contextual Surround Pre-Scan Rule

**Question:** What is Rule 2's complete shape (trigger, action, where-it-sits, evaluation gate, failure-mode tie, evidence), expressed in generic / meta-discipline language?

**Verification criteria:**
- [ ] Trigger predicate stated ("territory has a contextual / structural surround layer").
- [ ] Action stated ("Coarse Scan includes items from the surround layer before going deep on inquiry-specific objects").
- [ ] Where-it-sits specified (Scan section + Premature Depth prevention + Coarse Scan in Resolution Progression).
- [ ] Evaluation gate stated (in next 3 MVL+ runs scanning territories with a surround layer, the rule fires).
- [ ] Failure-mode tie explicit (extends Premature Depth's "complete at least one coarse scan before probing" to "the coarse scan must include the surround layer when present").
- [ ] Evidence cited (chain 2 N1 verbatim; explicit before/after contrast in prior and corrected exploration outputs).
- [ ] Generic phrasing (no project-specific terms).

### Piece CR — Cross-Cutting Requirements

**Question:** What are the cross-cutting requirements (for-sure criterion, generic framing, existing-structure-extension principle) that both rules must satisfy?

**Verification criteria:**
- [ ] For-sure criterion defined (definitely missing + evidenced + before/after contrast at minimum; multi-source convergence preferred).
- [ ] Generic framing requirement defined (rules use structural-exploration vocabulary; no project-specific terms).
- [ ] Existing-structure-extension principle defined (rules extend existing failure-mode preventions; do not contradict; do not replace).
- [ ] Each requirement applies equally to Rule 1 and Rule 2.

### Piece F — Filtered Speculative Additions

**Question:** What speculative additions were filtered out, and why?

**Verification criteria:**
- [ ] Provenance tracking documented as REJECTED (not directly evidenced as a primary failure cause).
- [ ] Operation-shape stability check documented as REJECTED (chain 7 deferred this; insufficient evidence).
- [ ] Vocabulary tracking documented as REJECTED (Sensemaking-side, not Exploration).
- [ ] Reasoning per rejection cited.

### Piece V — Diagnostic Verdict

**Question:** What is the synthesis verdict across R1, R2, CR, F?

**Verification criteria:**
- [ ] Verdict named (ACTIONABLE-PARTIAL: TWO for-sure-missing rules; speculative additions rejected).
- [ ] Best-supported diagnosis cited (cross-cutting absence of type-awareness and surround-layer-awareness in explore.md's existing structure).
- [ ] Strongest maintenance candidate named (Rule 1 has cross-chain support; Rule 2 has primary-cause support with before/after contrast).
- [ ] Main uncertainty named (whether single-chain N1 evidence is sufficient — resolved by Sensemaking Ambiguity 1's before/after contrast standard).
- [ ] Recommended next step stated (apply both rules as one-paragraph extensions to explore.md).

## Step 5 — Map Interfaces

| Source | Target | What flows | Direction |
|---|---|---|---|
| CR | R1 | For-sure criterion + generic framing + existing-structure-extension principle apply to Rule 1 | One-way |
| CR | R2 | Same as R1, applied to Rule 2 | One-way |
| R1 | V | Rule 1's complete shape feeds into the verdict | One-way |
| R2 | V | Rule 2's complete shape feeds into the verdict | One-way |
| F | V | Filtered speculative additions documented in the verdict's "what was filtered" section | One-way |
| Existing explore.md | R1 | Existing surfaces (Probe section, Surface-Only Scanning prevention) where R1 sits | One-way (R1 reads existing) |
| Existing explore.md | R2 | Existing surfaces (Scan section, Premature Depth prevention, Coarse Scan) where R2 sits | One-way (R2 reads existing) |
| Chain findings | R1 | Evidence (chain 1 M2 verbatim; chain 6 Cycle 4 reinforcement) | One-way |
| Chain findings | R2 | Evidence (chain 2 N1 verbatim; before/after contrast) | One-way |
| Chain findings | F | Evidence that the speculative additions are NOT primary-cause (chain 7 U9 deferral, etc.) | One-way |

**Interface clarity check:** All flows are explicit. No hidden dependencies. R1 and R2 do not interact (orthogonal). CR applies symmetrically to both. F is parallel rejection documentation. V synthesizes.

## Step 6 — Order by Dependency

```
Layer 0 (no dependencies — foundation):
  CR (cross-cutting requirements: for-sure criterion + generic framing + extension principle)

Layer 1 (depends on Layer 0 + existing structure + chain findings):
  R1 (Rule 1: Type-Aware Probe Rule)
  R2 (Rule 2: Contextual Surround Pre-Scan Rule)
  F (Filtered speculative additions)
  
  R1, R2, F can be developed in parallel (no inter-dependencies).

Layer 2 (synthesis):
  V (Diagnostic verdict — depends on R1, R2, F)
```

**Parallelism opportunities:** Layer 1 has 3 independent pieces (R1, R2, F) that can be developed in parallel.

**Critical path:** CR → R1 → V (and CR → R2 → V; symmetric).

**No circular dependencies.** All flows are one-way.

## Step 7 — Self-Evaluate (7 dimensions)

| Dimension | Check | Score |
|---|---|---|
| **Independence** | Can each piece be worked on without the others existing? | PASS — R1 and R2 are orthogonal; F is rejection documentation; V is synthesis. CR applies to both R1/R2 but doesn't define their content. |
| **Completeness** | Do the pieces cover the whole? | PASS — 5 pieces cover the for-sure-missing inventory + cross-cutting requirements + filtered additions + verdict. No aspect of the original inquiry falls through. |
| **Reassembly** | Can pieces + interfaces reconstruct the whole? | PASS — combining CR + R1 + R2 + F + V yields a complete diagnostic finding with two ACTIONABLE rules + rejection record + verdict. |
| **Tractability** | Is each piece small enough for a single focused pass? | PASS — R1 and R2 are each ~one-paragraph rule definitions plus evidence and gate; CR is the criterion definitions; F is rejection list; V is synthesis. |
| **Interface clarity** | Are all cross-piece flows explicit? No hidden dependencies? | PASS — interface map enumerates all flows. |
| **Balance** | Is complexity roughly proportional across pieces? | PASS-with-note — R1 and R2 are the heaviest pieces (each contains a complete rule with evidence); CR, F, V are lighter. The imbalance is structural (the rules ARE the load-bearing content), not a decomposition flaw. |
| **Confidence** | Do top-down and bottom-up agree on boundaries? | PASS — Step 3 bottom-up validation showed all 20 atoms map cleanly to the 5-piece structure. |

All 7 dimensions PASS. Decomposition is complete.

## Final Deliverable

### 1. Coupling Map (summary)

5 pieces grouped into 4 clusters: R1 (Rule 1 complete shape) + R2 (Rule 2 complete shape) + CR (cross-cutting requirements) + F (filtered speculative additions) + V (diagnostic verdict). R1 and R2 are orthogonal. CR is upstream foundation. V synthesizes.

### 2. Question Tree (5 pieces)

R1, R2, CR, F, V with verification criteria as above.

### 3. Interface Map

10 explicit interfaces traced (see Step 5 table). All one-way. No circular dependencies.

### 4. Dependency Order

3 layers (Layer 0: CR; Layer 1: R1, R2, F in parallel; Layer 2: V). Critical path CR → R1 → V (symmetric for R2).

### 5. Self-Evaluation

All 7 dimensions PASS. HIGH confidence on the 5-piece structure. Decomposition ready for Innovation.
