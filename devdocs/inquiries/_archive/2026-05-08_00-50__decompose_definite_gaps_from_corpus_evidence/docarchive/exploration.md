# Exploration: Decompose Discipline - Definite Gaps From Corpus Evidence

## Mode and Entry Point

**Mode:** Hybrid. Artifact exploration of (a) `homegrown/decompose/references/decompose.md` (the Structural Decomposition discipline spec; loaded by the MVL+ runner during Decomposition execution) and (b) the 7 LOOP_DIAGNOSE chain findings for Decomposition-implicated primary-cause findings (vs propagation-only hypotheses).

**Entry point:** Signal-first. The corpus contains explicit Decomposition-related findings: chain 6's T2 (primary-cause; Decomposition discovery-mechanism inclusion check) and chains 1+2's propagation hypotheses (NOT independent candidates per chain findings). The exploration's job is to (a) confirm which findings pass the for-sure criterion, (b) reject propagation-only hypotheses per corpus instructions, (c) place the surviving rule per the placement convention.

## Cycle 1 — Coarse Scan: Decomposition Findings Across The 7 Chains

Surveying the corpus for Decomposition-implicated findings:

**Chain 1** (`devdocs/inquiries/2026-05-07_15-01__loop_diagnose__past_navigation_memory_index_vs_search`) — propagation hypothesis (MEDIUM): *"Decomposition Q-tree presupposed the artifact. The prior `docarchive/decomposition.md` Question Tree starts with Q1 = 'What Counts As A PastNavigationMemoryFile Index Entry?' All seven questions presuppose the index exists."* Chain 1's finding explicitly states: *"The propagation hypotheses do not require independent maintenance candidates: if M1 (the upstream Sensemaking patch) succeeds, the corridor that produced these amplifications is itself prevented."* **NOT a for-sure-missing Decomposition rule per chain 1.**

**Chain 2** (`devdocs/inquiries/2026-05-07_15-35__loop_diagnose__route_memory_review_file_necessity`) — propagation hypothesis (MEDIUM): *"Decomposition Q-tree presupposed storage axis as separable (largely inherited from B's principle). The prior `docarchive/decomposition.md` Question Tree Q2: 'What output modes should the overlay operation allow?' presupposes 'output modes' exist."* Chain 2's finding similarly states: *"The propagation hypotheses do not require independent maintenance candidates: if N2 (Sensemaking patch) succeeds, the corridor that produced these amplifications is itself prevented."* **NOT a for-sure-missing Decomposition rule per chain 2.**

**Chains 3, 4, 5, 7** — Decomposition not implicated. No primary-cause or propagation findings.

**Chain 6** (`devdocs/inquiries/2026-05-07_19-08__loop_diagnose__past_navigation_memory_file_index_feasibility`) — Hypothesis B (HIGH; primary cause): *"Decomposition's Q-tree did not include a piece addressing how the runner discovers candidate `PastNavigationMemoryFile` instances. The Reassembly self-evaluation check did not flag the missing discovery piece as a completeness gap. This is a NEW Decomposition surface (P11 family at 1 chain so far)."* Per-chain candidate **T2** with single-chain caveat. **PASSES the for-sure criterion (single-chain primary-cause + explicit before/after contrast).**

**Signals detected:**

- **[Sparse]** Decomposition is the LEAST-implicated discipline across the corpus (only 1 of 7 chains has primary-cause findings; 2 of 7 have propagation-only hypotheses explicitly rejected as separate candidates).
- **[Asymmetry]** Most failures cascade FROM upstream (Sensemaking) THROUGH Decomposition, not originating AT Decomposition. The corrective surface for inherited failures is upstream, not at Decomposition itself.
- **[Single primary cause]** Only chain 6's T2 is primary-cause Decomposition.
- **[Reassembly check gap]** T2's mechanism: Decomposition's Reassembly self-evaluation check (one of 3 minimum dimensions in Step 7 / Self-Evaluate) did not flag the missing discovery-mechanism piece. The check is in place; it just didn't fire on this specific gap.

**Resolution decision:** zoom in on T2 (the only for-sure-missing item) to verify generic phrasing and placement.

## Cycle 2 — Probe: T2 Generic Reframing

T2's chain-6 wording (project-specific elements bolded): *"When a Q-tree's load-bearing concept depends on a runtime determination (operation-policy with a runtime trigger), Decomposition's Reassembly self-evaluation check verifies the Q-tree includes a piece addressing the determination mechanism. T2 opens a NEW Decomposition surface — the first per-discipline candidate for Decomposition in the LOOP_DIAGNOSE corpus."*

The chain-6 wording is already mostly generic. The "operation-policy with a runtime trigger" qualifier is generic structurally; it just happens to fit chain 6's specific case (the `PastNavigationMemoryFile` source-present check). Generic reframing:

> *"When the question tree (Q-tree) includes a load-bearing concept whose use depends on a runtime determination — i.e., the concept is referenced in one or more pieces, but its applicability is determined at runtime by checking 'does X exist?', 'is X applicable?', or similar — the Reassembly self-evaluation check verifies that the Q-tree includes a piece addressing the determination mechanism (HOW the runtime check is performed). A Q-tree that presupposes the determination has been made — without including a piece addressing HOW it is made — fails Reassembly: reconstructing the whole requires the determination, but no piece provides it. Failing this check is an instance of Missing Pieces (failure mode #4)."*

Test: all terms (question tree / Q-tree, load-bearing concept, runtime determination, Reassembly self-evaluation, piece, Missing Pieces) are in the existing `decompose.md` vocabulary or natural extensions. **PASSES generic test.**

## Cycle 3 — Probe: Placement Per The Convention

Per the placement convention at `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md`:

T2's scope: applies to Step 7 / Self-Evaluate's Reassembly dimension. The rule fires AT Step 7 when the Q-tree includes a runtime-determined load-bearing concept. **Step-level scope.**

Canonical home: Step 7 / Self-Evaluate, specifically the Reassembly dimension. The Reassembly dimension currently asks *"Can the pieces + interfaces reconstruct the whole?"* — T2 adds a specific check within that dimension: *"verify that the Q-tree includes a determination-mechanism piece for any load-bearing concept whose use depends on a runtime check."*

Cross-reference: at Missing Pieces failure mode (failure mode #4) — the failure the rule prevents.

**Two natural sub-options for placing T2 inside Step 7:**

- **Sub-option A:** add T2 as a specific check WITHIN the Reassembly dimension's row in the minimum 3-dimension table (extend the "Pass if" cell).
- **Sub-option B:** add T2 as a follow-on paragraph after the minimum-3-dimension table and before the full-7-dimension table.

Sub-option B is cleaner — the rule has its own paragraph with examples, doesn't bloat the table, and matches the spec's existing convention of follow-on paragraphs for elaborated rules (e.g., the "Low-scoring dimensions flag where the decomposition needs refinement" line at line 189).

## Cycle 4 — Probe: Speculative Additions Filter

What other Decomposition-related observations might surface as for-sure missing?

- **Chain 1 propagation hypothesis (Q-tree presupposes the artifact)** — explicitly NOT a separate candidate per chain 1 finding. REJECTED.
- **Chain 2 propagation hypothesis (Q-tree presupposes storage axis as separable)** — explicitly NOT a separate candidate per chain 2 finding. REJECTED.
- **Hidden Coupling failure mode refinement** — currently described in `decompose.md` as "pieces look independent but share hidden state, assumptions, or timing requirements." No chain finding surfaces a Hidden Coupling primary-cause failure across the corpus. NOT for-sure-missing.
- **Coupling perception refinement** — currently described in Step 1. No chain finding surfaces a Coupling perception primary-cause failure. NOT for-sure-missing.
- **Interface mapping refinement** — Step 5. No primary-cause finding. NOT for-sure-missing.
- **Dependency ordering refinement** — Step 6. No primary-cause finding. NOT for-sure-missing.

**No additional for-sure-missing items beyond T2.** Speculative additions filtered.

## Cycle 5 — Jump Scan + Convergence

**Jump scan:** what if the right answer is to refine an existing failure mode rather than add a new rule?

Probe: T2's failure mode tie is Missing Pieces (failure mode #4). The current Missing Pieces description says: *"How to prevent: Completeness check in self-evaluation (Step 7). And the question tree validity check — if the original problem has aspects that no question addresses, there's a gap."* This is general. T2 specifies a particular failure pattern (runtime-determined load-bearing concept's determination mechanism missing) that could be added to Missing Pieces' "How to prevent" line.

But: T2's natural canonical home per the placement convention is Step 7 / Reassembly (where the check fires). The Missing Pieces failure mode is the cross-reference target, not the canonical home. The convention's step-level scope rule is unambiguous.

No new region from jump scan. Confirms placement at Step 7 / Reassembly + cross-reference at Missing Pieces.

**Convergence check:**
- Frontier stability: STABLE. ONE for-sure-missing rule (T2 generalized). Speculative additions filtered.
- Discovery rate: DECLINING.
- Bounded gaps: YES.

CONVERGED.

## Final Deliverable

### 1. Territory Overview

The territory has SEVEN chains × Decomposition-implicated findings: 5 chains have NO Decomposition implication, 2 chains (1, 2) have propagation-only hypotheses explicitly rejected as candidates, 1 chain (6) has a primary-cause finding (T2). The corpus pattern: Decomposition is the LEAST-implicated discipline; most failures cascade FROM upstream Sensemaking, not originating AT Decomposition.

### 2. Inventory

**One for-sure-missing rule:**

**Rule — Determination-Mechanism Piece Inclusion Check at Step 7 / Self-Evaluate (Reassembly dimension).**
- Scope: step-level (Step 7 / Self-Evaluate).
- Canonical home: Step 7 / Self-Evaluate, after the minimum-3-dimension table, as a follow-on paragraph elaborating Reassembly for runtime-determined load-bearing concepts.
- Cross-references: at Missing Pieces failure mode (failure mode #4).
- Evidence: chain 6 (T2) primary cause with explicit before/after contrast. Single-chain primary-cause + explicit before/after contrast → passes for-sure criterion.

**Filtered out (rejected):**
- Chain 1 propagation hypothesis (Q-tree presupposed artifact) — per chain 1 finding, covered by upstream Sensemaking M1; not a Decomposition candidate.
- Chain 2 propagation hypothesis (Q-tree presupposed storage axis) — per chain 2 finding, covered by upstream Sensemaking N2; not a Decomposition candidate.
- Other Decomposition-related observations — no primary-cause evidence.

### 3. Signal Log

- **[Sparse]** Decomposition LEAST-implicated → probed in Cycle 1.
- **[Asymmetry]** Cascades flow FROM upstream THROUGH Decomposition → probed in Cycle 1.
- **[Single primary-cause]** Only chain 6's T2 → confirmed in Cycle 1.
- **[Generic reframing]** T2's wording is mostly generic; small adjustments suffice → probed in Cycle 2.
- **[Placement]** Step 7 / Reassembly canonical home; Missing Pieces cross-reference → probed in Cycle 3.
- **[Speculative filter]** Propagation hypotheses + other observations rejected → probed in Cycle 4.
- **[Jump scan]** Missing Pieces failure mode is cross-reference target, not canonical home → confirmed in Cycle 5.

### 4. Confidence Map

| Region | Confidence |
|---|---|
| 7 chains' Decomposition findings inventoried | Confirmed |
| Only chain 6 (T2) is primary-cause | Confirmed |
| Chains 1+2 propagation hypotheses NOT separate candidates | Confirmed (per chain findings) |
| T2 passes for-sure criterion (single-chain + before/after contrast) | Confirmed |
| Generic reframing test passes | Confirmed |
| Canonical home: Step 7 / Self-Evaluate / Reassembly | Scanned |
| Cross-reference: at Missing Pieces failure mode | Scanned |
| Speculative additions filtered out | Confirmed |

### 5. Frontier State

STABLE. ONE for-sure-missing rule with single-chain primary-cause evidence + explicit before/after contrast. Generic phrasing. Speculative additions filtered.

### 6. Gaps and Recommendations

- **For Sensemaking:** stabilize the one-rule structure; finalize whether Sub-option A (in Reassembly table cell) or Sub-option B (follow-on paragraph after table) is the right placement.
- **For Decomposition:** partition into pieces (Rule core + cross-reference + verification + speculative-filter documentation).
- **For Innovation:** generate concrete wording.
- **For Critique:** verify against for-sure criterion + corpus evidence + placement convention + spec purity.
