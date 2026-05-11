# Exploration: TD-Critique Discipline - Definite Gaps From Corpus Evidence

## User Input

devdocs/inquiries/2026-05-08_05-00__td_critique_definite_gaps_from_corpus_evidence/_branch.md

## Mode and Entry Point

- **Mode:** Artifact exploration. Concrete files exist: the spec, the placement convention, 7 chain `finding.md` files, 7 chain `docarchive/critique.md` files.
- **Entry point:** Signal-first. Strong prior signal — the LOOP_DIAGNOSE corpus has TWO promoted cross-cutting Critique-side rules (M6's Critique sub-rule from chain 3; TP3 from chain 6) that target multi-chain Critique failure patterns (P2 at 4 chains; P3 at 3 chains) but neither is yet in `td-critique.md` spec. Probe these signals first.

## Territory Overview

Three regions to map:

- **Region A — The current spec.** `homegrown/td-critique/references/td-critique.md` (~365 lines covering: 2 operations — extraction + evaluation; 6 default dimensions modified per problem; fitness landscape; adversarial structure — prosecution + defense + collision; 3 verdict types — SURVIVE/REFINE/KILL; the accumulator; 5 phases; 2 coverage levels; 7 failure modes).

- **Region B — What the chains' OWN Critique runs produced.** Each chain inquiry has a `docarchive/critique.md` artifact — the actual Critique discipline output during that chain's MVL+ execution. Seven such artifacts.

- **Region C — Critique-side failures the chain findings identify in PRIOR loops.** Each chain's `finding.md` includes hypothesis attribution; multiple chains attribute Critique-side failures to PRIOR loops (Hypothesis C / C-dim / C-pros / B / D variations). The diagnostic findings name the missing dimensions and prosecution-depth axes.

The key distinction: the corpus chains' OWN Critique runs (Region B) are well-structured; the corpus exposes failures in PRIOR loops' Critique (Region C). The for-sure-missing rules for td-critique.md address what generic Critique runs need to avoid recurrence of those PRIOR failures.

## Inventory

### Region A — What `td-critique.md` Currently HAS

| Component | Form |
|---|---|
| Operations | Extraction (build framework from sensemaking) + Evaluation (apply to innovation output) |
| Default dimensions | 6: Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance — explicitly "modified per problem" |
| Phase 0 (Dimension Construction) | Read sensemaking → derive dimensions → validate → weight → define success criteria |
| Phase 1 (Landscape Construction) | Map viable / dead / boundary / unexplored regions |
| Phase 2 (Adversarial Evaluation) | Prosecution + Defense + Collision per candidate |
| Phase 3 (Verdict + Constructive Output) | SURVIVE / REFINE / KILL with constructive output |
| Phase 3.5 (Assembly Check) | Examine survivors collectively for emergent value |
| Phase 4 (Coverage + Convergence) | Update accumulator; assess coverage; assess convergence; signal ITERATE / TERMINATE |
| Failure modes | 7: Wrong Dimensions, Rubber-Stamping, Nitpicking, Dimension Blindness, False Convergence, Evaluation Drift, Self-Reference Collapse |

### Region B — What Chain Critique Runs Produced (7 chains)

Each chain's `docarchive/critique.md` consistently constructs 5–6 dimensions with weights, of which 4 are marked "Critical":

| Chain | Critical dimensions | Secondary dimensions |
|---|---|---|
| 1 | Evidence Strength (25%); Recurrence Prevention (20%); Evaluation Gate Specificity (15%); Overreach Risk (25%) | Implementation Cost (10%); Cross-Chain Generalizability (5%) |
| 2 | Same 4 + Recurrence Coverage adjustment | Composition With Previous (10%); Implementation Cost (5%) |
| 3 | Same 4 critical | Composition With Previous (10%); Implementation Cost (5%) |
| 4 | Same 4 critical | Composition With Previous (10%); Implementation Cost (5%) |
| 5 | Same 4 critical | Composition With Previous (10%); Implementation Cost (5%) |
| 6 | Same 4 critical (with two-promotion-event guards) | Composition With Previous (10%); Implementation Cost (5%) |
| 7 | Same 4 critical (with aggregate-diagnostic confidence layer) | Composition With Previous (10%); Implementation Cost (5%) |

Across all 7 chains: full Phase 0 → Phase 1 → Phase 2 (per-candidate prosecution + defense + collision) → Phase 3 (verdict per candidate) → Phase 3.5 (assembly check) → Phase 4 (convergence telemetry). All chains terminate with PROCEED / TERMINATE signals; no failure modes observed.

The corpus chains' OWN Critique runs are well-structured. The dimensions are extracted from problem context (LOOP_DIAGNOSE Step 4 + Step 5 + Step 6 guardrails; Sensemaking constraints; foundational principles). The four critical dimensions (Evidence Strength, Recurrence Prevention, Evaluation Gate Specificity, Overreach Risk) are project-specific to LOOP_DIAGNOSE — they're problem-derived, not from td-critique.md's default list.

### Region C — Critique-Side Failures the Chain Findings Identify (in PRIOR loops)

| Chain | Critique-side hypothesis (in PRIOR loop being diagnosed) | Specific gap | Maintenance candidate proposed |
|---|---|---|---|
| 1 | Hypothesis C (Critique dimension blindness, HIGH) | Dimension list lacks **mechanism-level redundancy** axis (duplicate-derivable-state) | M3 — duplicate-derivable-state dimension |
| 2 | Critique missing project-specific dimension | Dimension list lacks **explicit-culture-fit** axis | N4 — explicit-culture-fit dimension |
| 3 | C-dim (operation-parsimony missing) + C-pros (weak prosecution on user-perspective) | Dimension list lacks **operation-parsimony** axis; prosecution at dimension-level only, not user-perspective | O2 (operation-parsimony dimension) + O3 (prosecution-strength check) |
| 4 | C (Critique missing phase-fit dimension) | Dimension list lacks **phase-fit** axis | R2 — phase-fit dimension |
| 5 | B (Critique prosecution at abstract level) | Prosecution constructed at dimension-level; missing **failure-case scenario** prosecution | S2 — prosecution failure-case construction rule |
| 6 | D (Critique missing specification-gap prosecution) | Prosecution constructed at dimension-level; missing **specification-gap probe** | T2/D — caught via TP3 PROMOTION |
| 7 | (no primary Critique failure; U7 TP3 refinement candidate pending) | Potential vocabulary-naturalness 4th sub-type for TP3 | U7 — TP3 refinement (PENDING) |

### Cross-Chain Patterns (Promoted)

- **P2 family (Critique missing project-specific dimension):** 4 chains × 4 specific dimensions (chains 1–4: duplicate-derivable-state, explicit-culture-fit, operation-parsimony, phase-fit). **PROMOTED at chain 3 as M6's Critique sub-rule:** *"when evaluating candidates involving project artifacts, operations, or state, include at least one project-specific risk dimension that captures the project's documented risk axes."*

- **P3 family (Critique prosecution-depth shortcoming):** 3 chains × 3 sub-types (chain 3 user-perspective; chain 5 failure-case; chain 6 specification-gap). **PROMOTED at chain 6 as TP3:** *"when constructing prosecution against a candidate, in addition to dimension-level objections, explicitly construct prosecution at the appropriate depth-axes when applicable: (a) user-perspective objection; (b) specific failure-case scenario; (c) operational-specification-gap probe. The runner should pick the depth-axes most relevant to the candidate's risk surface."*

**Both promotions are corpus-level events**; neither is in `td-critique.md` spec. The for-sure-missing rules for td-critique.md correspond to generic versions of these promoted rules.

## Signal Log

### Signal 1 — DENSITY at "missing project-specific dimension" failure (4 chains × 4 distinct dimensions)

Four chains' `finding.md` files (chains 1, 2, 3, 4) name a specific Critique-side dimension that was missing from the prior loop's dimension list. Each is a different specific dimension, but all share the meta-pattern: when evaluating candidates that involve project artifacts/operations/state, the dimension list must include at least one project-specific risk dimension capturing the project's documented risk axes.

**Probe result:** td-critique.md's Phase 0 prescribes "extract dimensions from sensemaking output" but does NOT explicitly require checking that the extracted dimensions include a PROJECT-SPECIFIC RISK axis when the candidate involves project artifacts/operations/state. The default 6 dimensions (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) are content-oriented; "project-specific risk axes" is a distinct concept. The gap is real and recurrent.

### Signal 2 — DENSITY at "prosecution at dimension-level only" failure (3 chains × 3 sub-types)

Three chains' `finding.md` files (chains 3, 5, 6) name a specific prosecution-depth shortcoming in the prior loop's Critique. Each is a different sub-type of prosecution-depth failure (user-perspective; failure-case scenario; specification-gap probe), but all share the meta-pattern: prosecution constructed at dimension-level only, missing depth-axes that would catch the actual user concerns / edge cases / specification gaps.

**Probe result:** td-critique.md's Phase 2 / Prosecution sub-section gives 4 generic prompts ("What's the killer objection? Under what conditions does this fail catastrophically? What assumption, if wrong, destroys the entire approach? What's the worst realistic outcome?") but does NOT enumerate depth-axes to explicitly construct prosecution along. The corpus's TP3 enumerates 3 specific depth-axes (user-perspective from `_branch.md` Source Input; failure-case scenario; specification-gap probe). The gap is real and recurrent.

### Signal 3 — DENSITY: corpus chains' OWN Critique runs are well-structured (refutes "Critique discipline is broken")

Each chain's `docarchive/critique.md` averages ~400 lines with 5–6 weighted dimensions, full prosecution + defense + collision per candidate, assembly check, telemetry. Critique discipline is producing thorough output. The for-sure-missing pieces are NOT about Critique's overall structure — they're about specific recurring patterns that the prior loops' Critique missed.

**Probe result:** the gap is at the level of **what dimensions and prosecution-depth axes to ensure coverage of**, not at the level of how to apply the discipline.

### Signal 4 — ABSENCE: M6's Critique sub-rule and TP3 are protocol-level promoted but not in spec

Both rules emerged via cross-chain promotion events (M6 in chain 3; TP3 in chain 6). They live in the LOOP_DIAGNOSE corpus's findings and accumulate evidence across chains. They are NOT in `td-critique.md` spec.

**Probe result:** without these rules in the spec, future Critique runs (in any context — LOOP_DIAGNOSE or otherwise) face the same recurrence risk the prior loops fell into. The promoted rules need to be encoded in spec language as generic / meta-discipline rules.

### Signal 5 — TENSION: Self-Reference Collapse risk at meta level

This analysis runs Critique on Critique's spec. td-critique.md itself names "Self-Reference Collapse" as a failure mode: *"When critique is used to evaluate critique itself, the evaluation can become circular."* Mitigation: the dimensions for this analysis are extracted from sensemaking output (constraints + foundational principles), not from td-critique.md itself. External grounding via the corpus evidence (7 chain findings + 7 chain docarchive critiques) prevents circular validation.

**Probe result:** Self-Reference Collapse defended via corpus-grounded dimension construction.

## Confidence Map

| Region | Confidence | Reason |
|---|---|---|
| td-critique.md spec contents | **CONFIRMED** | Read in full (in prior inquiry's Critique phase) |
| Placement convention | **CONFIRMED** | Read in prior inquiries |
| Chain 1, 3, 6 docarchive/critique.md | **CONFIRMED** | Sampled in this inquiry |
| Chain 2, 4, 5, 7 docarchive/critique.md | **INFERRED** | Pattern consistent across sampled chains; chain findings already establish the Critique-side failures (P2 + P3 families) |
| Chain finding.md files | **CONFIRMED** | Re-read fresh in prior sister analyses; same context applies; well-known to this inquiry |
| P2 family pattern (4 chains × 4 dimensions) | **CONFIRMED** | Multi-chain convergence verified |
| P3 family pattern (3 chains × 3 sub-types) | **CONFIRMED** | Multi-chain convergence verified |
| M6 chain-3 promotion | **CONFIRMED** | Documented in chain 3 finding |
| TP3 chain-6 promotion | **CONFIRMED** | Documented in chain 6 finding |
| Whether M6's Critique sub-rule is in td-critique.md | **CONFIRMED ABSENT** | Spec read in full; no equivalent rule |
| Whether TP3 is in td-critique.md | **CONFIRMED ABSENT** | Spec read in full; no equivalent rule |

## Frontier State

**STABLE.** Two coherent observations crystallize:

1. **TWO for-sure-missing rules.** Both are corpus-level promoted cross-cutting rules (M6's Critique sub-rule, TP3) that have multi-chain evidence (4 chains and 3 chains respectively, above the 3+ cross-cutting threshold) but are not yet in `td-critique.md`. Their generic versions belong in the spec.

2. **Both rules target distinct Critique surfaces:**
   - Rule A (project-specific risk dimension) → Phase 0 / Dimension Construction.
   - Rule B (prosecution-depth axes) → Phase 2 / Adversarial Evaluation, Prosecution sub-section.

### Jump Scan (deliberate scan in different direction)

Before declaring convergence, scan for **other Critique-side failures** the corpus might surface but the two promoted rules don't cover. Looking through chains 1–7's Critique-side hypotheses:

- Hypothesis C (chain 1): dimension blindness → covered by Rule A.
- Critique missing project-specific dimension (chain 2): → covered by Rule A.
- C-dim (chain 3): operation-parsimony missing → covered by Rule A.
- C-pros (chain 3): user-perspective prosecution missing → covered by Rule B.
- C (chain 4): phase-fit missing → covered by Rule A.
- B (chain 5): prosecution at abstract level → covered by Rule B.
- D (chain 6): specification-gap prosecution missing → covered by Rule B.
- Chain 7: no primary Critique failure; TP3 refinement (U7) is pending.

All Critique-side failures across the 7 chains map to either Rule A (dimension blindness) or Rule B (prosecution-depth shortcoming). No uncovered failures. Jump scan reveals no surprises.

Frontier convergence achieved. Discovery rate declining. Gaps bounded.

## Gaps and Recommendations

### Two for-sure-missing rules

**Rule A — Project-specific risk dimension inclusion check (Phase 0 / Dimension Construction).** When the candidate set being evaluated involves project artifacts, operations, or state, the dimension list extracted in Phase 0 must include at least one project-specific risk dimension capturing the project's documented risk axes. The default dimensions (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) are content-oriented; project-specific risk dimensions capture mechanism-level risks specific to the project (e.g., duplicate-derivable-state, explicit-culture-fit, operation-parsimony, phase-fit are four such examples observed across LOOP_DIAGNOSE chains). A dimension list that omits project-specific risk axes when the candidates involve project artifacts/operations/state is incomplete; the dimension validation step must explicitly check for at least one such axis.

- Corpus evidence: 4 chains × 4 distinct project-specific dimensions converging on the meta-pattern (chain 1 duplicate-derivable-state; chain 2 explicit-culture-fit; chain 3 operation-parsimony; chain 4 phase-fit). Promoted at chain 3 as M6's Critique sub-rule.
- Failure-of-absence: 4 chains where the prior loop's Critique missed the relevant project-specific risk axis.
- Success-of-presence: corrected loops' Critique runs in each chain explicitly include the missing axis.
- Canonical home: Phase 0 / Dimension Construction, as a sub-step within "Validate dimensions" or as an additional Phase 0 step ("Verify project-specific risk axis coverage").
- Cross-reference: at the Dimension Blindness failure mode (failure mode #4) — one-line pointer.

**Rule B — Multi-axis prosecution depth check (Phase 2 / Adversarial Evaluation, Prosecution sub-section).** When constructing prosecution against a candidate, in addition to dimension-level objections, explicitly construct prosecution at the appropriate depth-axes when applicable: (a) user-perspective objection — addresses user-stated concerns at the level expressed; (b) specific failure-case scenario — concrete edge cases where the candidate's logic might fail; (c) specification-gap probe — for candidates with runtime-determined behavior, probe whether load-bearing concepts have specified determination mechanisms. The runner picks the depth-axes most relevant to the candidate's risk surface; not every axis applies to every candidate. Prosecution that constructs only dimension-level objections without considering relevant depth-axes is shallow.

- Corpus evidence: 3 chains × 3 distinct depth-axis sub-types converging on the meta-pattern (chain 3 user-perspective; chain 5 failure-case; chain 6 specification-gap). Promoted at chain 6 as TP3.
- Failure-of-absence: 3 chains where the prior loop's prosecution missed the relevant depth-axis.
- Success-of-presence: corrected loops' prosecution explicitly addresses the depth-axis.
- Canonical home: Phase 2 / Adversarial Evaluation, Prosecution sub-section. The rule extends the existing 4 prosecution prompts ("What's the killer objection? Under what conditions does this fail catastrophically? What assumption, if wrong, destroys the entire approach? What's the worst realistic outcome?") with depth-axis enumeration.
- Cross-reference: at the Rubber-Stamping failure mode (failure mode #2) — one-line pointer (rubber-stamping is when prosecution is too weak; depth-axis check is one mechanism that strengthens prosecution).

### Speculative additions REJECTED

- **Cross-corpus accumulator extensions** (the corpus uses cumulative refinement tracking, M6 evolution events). Same logic as prior sister analyses' rejection: LOOP_DIAGNOSE-protocol-specific, not generic discipline content. **REJECT.**
- **New failure modes** beyond the existing 7. The two new rules are positive-form refinements at process steps; the existing failure modes (Dimension Blindness, Rubber-Stamping) provide adequate cross-reference targets. **REJECT** (sister-analysis precedent of not introducing new failure modes from these analyses).
- **A new disposition category** (e.g., DEFERRED with revival trigger for thin-evidence Critique verdicts). td-critique.md already has SURVIVE / REFINE / KILL with constructive output; the corpus's emergent DEFERRED category is at Innovation's output disposition layer (covered by innovate.md's Rule B from the prior sister analysis), not at Critique's verdict layer. **REJECT** (no corpus evidence of gap at Critique's verdict layer).
- **Burden-of-proof shift extensions** (currently low-stakes vs. high-stakes). The corpus uses this and it works. **REJECT** (no evidence of gap).
- **Accumulator field additions.** No corpus evidence of accumulator-level failures. **REJECT.**
- **Extending default dimensions list** with project-specific examples. The placement convention argues against this — the rule's canonical home should be at Phase 0 / Dimension Construction (the operation that fires the check), not at the default-dimensions list. Listing examples like duplicate-derivable-state or phase-fit in the default list would be project-specific bloat. **REJECT.**

### Direct address of the user's framing

The user's framing question — "what is missing from td-critique.md? in a for-sure way, not 'might improve'" — is answered by the two rules above. Both have multi-chain corpus convergence (4 chains and 3 chains) above the 3+ cross-cutting threshold. Both correspond to corpus-level promoted rules (M6's Critique sub-rule and TP3) that should be encoded in the spec to make their effect portable beyond LOOP_DIAGNOSE.

The user's "we should try to understand limitations" hypothesis: the corpus shows Critique IS producing thorough output per its own discipline structure. The limitations are at TWO specific surfaces — dimension construction (Phase 0) and prosecution construction (Phase 2) — where recurring failure patterns are not currently caught by the spec's prescriptions.

## Convergence Assessment

- **Frontier stability:** stable. Two for-sure-missing rules identified; jump scan finds no further surprises.
- **Declining discovery rate:** yes. All Critique-side failures across the 7 chains map to Rule A or Rule B.
- **Bounded gaps:** yes. Unknowns ("would a 4th sub-type of prosecution-depth emerge?") are interpolatable from existing axes; the rule's "pick the depth-axes most relevant" wording accommodates future sub-types without rewrite.

All three convergence criteria met. **Exploration converges.**

Sensemaking should: (a) stabilize the answer's structure (TWO rules), (b) collapse ambiguities (cross-reference targets at failure modes; Phase 0 sub-step placement granularity for Rule A; Phase 2 / Prosecution sub-section integration for Rule B), (c) determine canonical homes per the placement convention.
