# Exploration: Explore Discipline - Definite Gaps From Corpus Evidence

## Mode and Entry Point

**Mode:** Artifact exploration. The territory has concrete objects to find: (a) the existing rules in `explore.md` (5 components + 6 failure modes + 2 modes + process steps), (b) the 7 chain findings' Exploration-related observations (Hypothesis A in chains 1+2; Cycle-level evidence in chains 3-7).

**Entry point:** Signal-first. The branch's `Diagnostic Constraints` pre-name two candidate gaps (chain 1 M2, chain 2 N1). The exploration's job is to (a) probe each pre-named candidate against current explore.md to confirm it is genuinely missing, (b) check whether the corpus evidence supports more than these two, (c) check whether any pre-named candidate is actually already present in explore.md (false-positive screen).

## Cycle 1 — Coarse Scan: Map the Existing explore.md Structure

Scanning the current `homegrown/explore/references/explore.md` to inventory its existing rule surface.

**Structural surface:**

- Two Modes: Artifact / Possibility.
- Six Components: Scan, Signal Detection, Probe, Resolution Management, Frontier Tracking, Confidence Mapping.
- Process: Entry Point (Frontier-first / Signal-first); Exploration Cycle (7 steps); Resolution Progression.
- Coverage Strategy: Surprise-based; 3 convergence criteria; per-cycle coverage; when to stop.
- Six Failure Modes: Premature Depth, Surface-Only Scanning, False Confidence, Premature Termination, Re-Exploration, Completeness Bias in Possibility Mode.
- Execute the Exploration Process (final): State mode/entry; Run cycles; Assess convergence (with jump-scan); Final deliverable.

**Signals detected:**

- **[Density]** Six failure modes; six components. Most rules are at the WITHIN-cycle layer. There is little at the BETWEEN-LAYERS layer (e.g., contextual surround vs inquiry-specific).
- **[Absence]** No rule about TYPE-AWARENESS in probing — the existing Probe section says "go deeper on a signal," but does not differentiate between probing a qualitative claim and probing a quantitative claim.
- **[Absence]** No rule about TERRITORY-LAYER awareness — the existing Scan section says "covers the territory's breadth," but does not say what to do when the territory has a contextual / structural surround layer that frames the inquiry-specific layer.
- **[Tension]** The "Premature Depth" failure mode talks about going deep on one region, but its prevention rule ("complete at least one coarse scan before probing") doesn't address the case where the coarse scan itself is too narrow because it omitted a layer.

**Resolution decision:** zoom in on the two pre-named candidates (chain 1 M2 + chain 2 N1) to verify each is actually missing.

## Cycle 2 — Probe: Is M2 (Probe-Before-Stabilization for Quantifiable Claims) Genuinely Missing?

**Chain 1 verbatim** (from `2026-05-07_15-01__loop_diagnose__past_navigation_memory_index_vs_search/finding.md`):

> *"Add a one-paragraph rule to `homegrown/explore/references/explore.md` (Possibility Mode section): when possibility-mode candidates are listed at scan resolution and one of them has a quantifiable cost or benefit, run at least one empirical probe of that candidate before stabilizing the candidate set. Listing without probing is a Surface-Only Scanning signal in possibility mode."*

**Confirming the failure pattern:** Chain 1's prior Exploration listed "generated-on-demand scan report" as a candidate at scan resolution and dispatched it with one sentence: *"A generated-on-demand report avoids stale manual bookkeeping but still has discovery cost every run."* No probe was run. The chain-1 corrected loop's Cycle 2 ran the probe (one filename search across roughly 184 active markdown files; trivial cost). HIGH confidence in the failure.

**Verifying the rule is missing from current explore.md:**

- Probe section says: *"A good probe: goes deeper on one specific region, not broader across many; produces detailed structural knowledge; identifies sub-features that weren't visible at scan resolution; may generate new signals."* No mention of TYPE (quantitative vs qualitative).
- Surface-Only Scanning failure mode says: *"After each scan, detect signals and probe at least one. Don't start another broad scan until the highest-priority signal from the previous scan has been probed."* This says "probe AT LEAST ONE signal," not "probe THE candidate that carries a quantifiable claim."
- Possibility Exploration section says probe "produces a more detailed description, not a solution." Doesn't differentiate quantifiable claims.

The rule is GENUINELY MISSING. Chain 1's failure pattern (qualitative dispatch of a quantifiable claim) would not be caught by any current explore.md rule.

**Reinforcement from chain 6:** Chain 6's corrected loop's Exploration ran "Cycle 4 — active artifact population scan" — a probe of an empirical claim about how many `PastNavigationMemoryFile` candidates exist. Chain 6's prior loop didn't run this probe. This is the SAME pattern as chain 1: quantifiable claim about how many objects exist, dispatched qualitatively rather than empirically. Two chains × same pattern → cross-chain support.

**Verdict on M2:** GENUINELY MISSING from explore.md; for-sure-missing per the corpus evidence. Confidence: HIGH.

## Cycle 3 — Probe: Is N1 (Cultural-Norm / Context-Surround Pre-Scan) Genuinely Missing?

**Chain 2 verbatim** (from `2026-05-07_15-35__loop_diagnose__route_memory_review_file_necessity/finding.md`):

> *"Add a one-paragraph rule to `homegrown/explore/references/explore.md` (Coarse Scan section): when scanning a codebase whose conventions or cultural norms are load-bearing for the inquiry, the Coarse Scan list must include the project's cultural-norm corpus before going deep on inquiry-specific files. For Homegrown specifically, this corpus is `homegrown/protocols/artifact_materialization.md`, `homegrown/protocols/outcome_review.md`, `homegrown/contracts/alignment_control.md`. Omitting these in a codebase-context Exploration is a Premature Depth signal."*

**Confirming the failure pattern:** Chain 2's prior Exploration's Coarse Scan list contained 5 navigation-specific files; omitted the 3 cultural-norm files. The chain-2 corrected loop's Cycle 1 explicitly cited the 3 cultural-norm files as files that *"establish the repo's preference for explicit trace artifacts when an operation changes future interpretation."* HIGH confidence in the failure.

**Verifying the rule is missing from current explore.md:**

- Scan section says: *"Covers the territory's breadth, not its depth."* This says "breadth" but doesn't specify what to do when the territory has a CONTEXTUAL SURROUND (a layer outside the inquiry-specific objects but structurally important for them).
- Premature Depth failure mode says: *"Going deep on the first interesting signal before scanning broadly."* The "complete at least one coarse scan before probing" prevention says COMPLETE the scan but doesn't say WHAT BREADTH the scan should cover.
- Coarse Scan in Resolution Progression says: *"What major regions exist? (unweighted)"* — but doesn't specify that the regions should include the contextual surround.

The rule is GENUINELY MISSING. Chain 2's failure pattern (coarse scan that scanned only inquiry-specific layer, missing contextual surround) would not be caught by any current explore.md rule.

**Generic-vs-specific check:** N1 as written is project-specific (names Homegrown's cultural-norm files). The generic version is: "When scanning a territory whose meaning depends on a contextual / structural surround, the Coarse Scan must include that surround before scanning inquiry-specific objects." This is meta-discipline language fit for explore.md.

**Verdict on N1:** GENUINELY MISSING from explore.md; for-sure-missing per the corpus evidence; needs generic reframing for meta-discipline applicability. Confidence: HIGH.

## Cycle 4 — Probe: Are There Any OTHER For-Sure Gaps Beyond M2 + N1?

Scanning chains 3-7 for additional Exploration-related shortcomings:

- **Chain 3** (route_memory_preflight_reevaluation): primary cascade was Sensemaking insufficient Human/User depth → Sensemaking terminology stabilization → Innovation Assembly Check → Critique. Exploration NOT implicated.
- **Chain 4** (early_stage_always_full_route_memory_review): primary cascade was Sensemaking Phase 2 missing perspective → Innovation missing phase-conditional candidate → Critique missing phase-fit dimension. Exploration NOT implicated.
- **Chain 5** (route_memory_review_trigger_boundary): primary cascade was Sensemaking adopted proxy as structural distinction (Phase 5) → Innovation candidate set treated bounded uniformly → Critique prosecution applied at abstract level. Exploration NOT implicated.
- **Chain 6** (past_navigation_memory_file_index_feasibility): primary cascade was Sensemaking specification gap → Decomposition missing discovery-mechanism piece → Innovation missing discovery-mechanism candidate → Critique missing specification-gap prosecution. Exploration NOT implicated as primary, but chain 6's CORRECTED loop's Exploration Cycle 4 (active artifact population scan) is the M2 pattern's reinforcement.
- **Chain 7** (aggregate_naming_boundary_drift): primary diagnosis was cross-cutting absence of user-language validation manifesting at Sensemaking Phase 5. Exploration NOT implicated.

**Result:** No additional Exploration-specific shortcomings appear in chains 3-7 at the primary-cascade level. The corpus evidence converges on M2 + N1 as the only TWO for-sure-missing items.

**Speculative additions filtered:**

- *"Provenance tracking in Exploration"* (track which inventory items came from external sources vs were loop-generated) — speculative; not directly evidenced as a primary failure cause. REJECT.
- *"Operation-shape stability check"* (chain 7 jump-scan U9, deferred) — chain 7 itself deferred this with "operational-shape evidence revival trigger"; insufficient evidence for explore.md modification. REJECT.
- *"Vocabulary commitment tracking"* (chain 7 U1) — Sensemaking-side, not Exploration. NOT APPLICABLE.

**Convergence:** The corpus has been exhaustively scanned for Exploration-relevant shortcomings. M2 + N1 are the only two for-sure-missing items.

## Cycle 5 — Probe: Generic Reframing Test

For each of M2 + N1, test whether the rule can be expressed in pure structural-exploration vocabulary without project-specific terms.

**M2 generic reframing test:**

Original (project-specific elements bolded): "When **possibility-mode candidates** are listed at **scan resolution** and one of them has a **quantifiable cost or benefit**, run at least one **empirical probe** of that candidate before stabilizing the candidate set."

Generic version: "When the coarse scan inventories a candidate that carries a quantifiable claim (cost, benefit, frequency, magnitude, count), the candidate cannot pass into the stabilized candidate set on qualitative reasoning alone — at least one empirical probe of the quantifiable property is required first. This rule applies to BOTH artifact-mode and possibility-mode exploration."

Test: All terms (coarse scan, candidate, scan resolution, empirical probe, stabilized candidate set) are in the existing explore.md vocabulary. **PASSES generic test.**

Note: The original M2 wording said "possibility-mode" specifically. My generic reframing extends to BOTH modes because chain 6's reinforcement ("active artifact population scan") was in artifact mode — the pattern occurs in both modes. This is a strengthening, not a weakening.

**N1 generic reframing test:**

Original (project-specific elements bolded): "When scanning a **codebase** whose **conventions or cultural norms** are load-bearing for the inquiry, the Coarse Scan list must include the **project's cultural-norm corpus** before going deep on **inquiry-specific files**. For Homegrown specifically, this corpus is **`homegrown/protocols/artifact_materialization.md`, `homegrown/protocols/outcome_review.md`, `homegrown/contracts/alignment_control.md`**."

Generic version: "When the territory has a contextual / structural surround layer (a layer that establishes meaning for the inquiry-specific objects within it — for codebases this is the project's foundational protocols / contracts / conventions; for solution spaces this is the surrounding constraint / value frame; for any territory it is the layer that frames how inquiry-specific objects are interpreted), the Coarse Scan must include items from that surround layer before going deep on inquiry-specific objects. Omitting the surround in a coarse scan is a Premature Depth instance applied at the layer-of-scan dimension."

Test: All terms (territory, contextual surround, coarse scan, inquiry-specific, Premature Depth) are in the existing explore.md vocabulary or are direct extensions. **PASSES generic test.**

## Cycle 6 — Convergence Check

**Frontier stability:** STABLE. Major regions mapped (existing explore.md structure; M2 + N1 evidence; generic reframings).

**Discovery rate:** DECLINING. Cycle 4 confirmed no additional gaps.

**Bounded gaps:** YES. Speculative additions filtered out.

**Jump scan (Step 3 mandate):** Deliberate scan in different direction — what if the gap is NOT in the rules section but in the Process / Execution section?

The existing "Execute the Exploration Process" section has 4 steps: state mode/entry; run cycles; assess convergence (with jump scan); final deliverable. None of these mandate type-aware probing or surround-layer scanning. The gap is consistent with the Cycles 2-3 finding: M2 + N1 are not addressed anywhere in explore.md, including the Execute section.

No new gaps surface from the jump scan.

CONVERGED.

## Final Deliverable — Structural Map

### 1. Territory Overview

The territory is the existing `homegrown/explore/references/explore.md` spec PLUS the 7 LOOP_DIAGNOSE chain findings. Major regions explored:
- explore.md structural surface (modes, components, process, coverage, failure modes).
- Chain 1 + chain 2 explicit Exploration-relevant findings.
- Chain 6 reinforcement of chain 1 pattern.
- Chains 3, 4, 5, 7 (Exploration not implicated as primary).

### 2. Inventory

**For-sure-missing pieces (2):**

1. **TYPE-AWARE PROBE RULE** (M2 generalized). Where it sits: Probe section + Surface-Only Scanning failure mode prevention. What it asks: "When the coarse scan inventories a candidate that carries a quantifiable claim (cost, benefit, frequency, magnitude, count), at least one empirical probe of the quantifiable property is required before the candidate can pass into the stabilized candidate set."

2. **CONTEXTUAL SURROUND PRE-SCAN RULE** (N1 generalized). Where it sits: Scan section + Premature Depth failure mode prevention + Resolution Progression. What it asks: "When the territory has a contextual / structural surround layer (a layer that establishes meaning for inquiry-specific objects), the Coarse Scan must include items from that surround layer before going deep on inquiry-specific objects."

**Filtered out (speculative; rejected):**

- Provenance tracking in inventory items.
- Operation-shape stability checks.
- Cross-discipline vocabulary tracking.

### 3. Signal Log

- **[Density]** Most explore.md rules are within-cycle layer; few rules at between-layers layer → probed in Cycle 1 + Cycle 4.
- **[Absence]** No type-aware probe rule → confirmed missing in Cycle 2.
- **[Absence]** No territory-layer-aware scan rule → confirmed missing in Cycle 3.
- **[Tension]** Premature Depth rule addresses within-territory but not between-layers → resolved in Cycle 3.
- **[Convergence]** Cycle 4 + jump scan (Cycle 6) confirmed no other gaps with cross-chain evidence support.

### 4. Confidence Map

| Region | Confidence |
|---|---|
| Existing explore.md structure | Confirmed |
| Chain 1 M2 evidence + reinforcement from chain 6 | Confirmed |
| Chain 2 N1 evidence | Confirmed |
| Chains 3-5, 7 absence of Exploration-primary-failure | Confirmed |
| Generic reframing of M2 | Confirmed |
| Generic reframing of N1 | Confirmed |
| Speculative additions filtered out | Confirmed absent |

### 5. Frontier State

STABLE. The for-sure-missing inventory has 2 items; no other items have multi-source corpus evidence.

### 6. Gaps and Recommendations

**For Sensemaking:** stabilize the 2-item structure (M2 generalized + N1 generalized) and resolve the ambiguity of where each rule sits in explore.md (Probe section + Failure Mode prevention vs Scan section + Failure Mode prevention).

**For Decomposition:** partition the 2 rules into independently-implementable pieces; map interfaces (do the rules interact?).

**For Innovation:** generate variations on each rule's wording (Generic / Focused / Contrarian per /innovate guidance).

**For Critique:** test each rule against the user's "for-sure-missing" criterion (definite + evidenced + multi-source convergence + generic phrasing).

**Out-of-scope:**

- Adding rules from single-chain evidence without cross-chain support.
- Adding rules speculatively based on what "might" improve robustness.
- Project-specific rule wording.
