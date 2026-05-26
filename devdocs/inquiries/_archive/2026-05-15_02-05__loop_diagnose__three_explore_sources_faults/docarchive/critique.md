# Critique: Verdicts on the maintenance extension design

## User Input

`devdocs/inquiries/2026-05-15_02-05__loop_diagnose__three_explore_sources_faults/_branch.md` plus upstream `exploration.md` (27 candidates / 4 regions), `sensemaking.md` (5 sub-aspects + 2 new dimensions Dim 6 Synthesis-as-Validation + Dim 7 Speculative Tooling on User Permission + new attribution category CHAIN-AMPLIFIED; framework: 7 dims + 4 categories), `decomposition.md` (5-piece question tree with universal precondition + 3-phase sequencing within decomposition), `innovation.md` (21 candidates; 7 ACTIONABLE survivors + 4 SURVIVE→REFINE + 2 RESEARCH FRONTIER + 7 KILL; 3 sub-assemblies emerged; worked examples mandatory).

Critique scope: the 7 ACTIONABLE survivors per piece, the 3 sub-assemblies (combined rewrite-quality audit P6+P-cross; PR-template spec-edit checklist Pieces 1+4; formal from-scratch-vs-additive declaration with scope tiering), the 4 SURVIVE→REFINE candidates, the 2 RESEARCH FRONTIER preservations, the 7 KILL verdicts, the 3-phase sequencing decision, and composition with prior loop_diagnose's design via the universal precondition.

---

## Phase 0 — Dimension Construction

### Dimensions extracted from sensemaking

9 dimensions: 5 default (refined) + 4 project-specific (per Phase 0 refinement requirement, since the candidate set involves homegrown protocol artifacts and operations).

| # | Dimension | Weight | Extracted from sensemaking | Success criterion |
|---|---|---|---|---|
| **D1** | **Correctness** | HIGH | Sensemaking's per-cell verdicts and 2-new-dimension consolidation | Does the candidate actually address its targeted fault dimension's root? |
| **D2** | **Coherence with existing protocols** | HIGH | C3 maintenance composability; FP3 maintenance composes not duplicates | Does the candidate compose cleanly with prior loop_diagnose's pieces and existing homegrown protocols without breaking their contracts? |
| **D3** | **Completeness across decomposition criteria** | HIGH | Decomposition's 5-piece tree with verification criteria | Does the candidate satisfy its piece's verification criteria as defined in decomposition? |
| **D4** | **Parsimony / Elegance** | HIGH | C5 (loop_diagnose's burden-of-proof rule); v1-minimal stance | Is this the minimum viable maintenance? Doesn't over-engineer for a 1-evidence-instance category like CHAIN-AMPLIFIED? |
| **D5** | **Robustness against edge cases** | MODERATE | KI4 (iter-2 inherited bias); per-prior verdicts varying | Does it survive snapshot drift, spec-author non-compliance, detection-heuristic brittleness? |
| **D6** | **Self-reference risk handling** (project-specific) | HIGH | KI6 (self-reference layered, loop_diagnose #3 risk) | Does the candidate acknowledge / mitigate the diagnostic's self-reference (loop_diagnose #3 using same SIC pipeline that may have suspected faults)? |
| **D7** | **Calibration-state-fit** (project-specific) | HIGH | Phase/Calibration-State perspective from sensemaking; 1-instance CHAIN-AMPLIFIED evidence | Does the candidate's complexity match current calibration (current state: 3 loop_diagnoses; framework being built incrementally; spec rewrites are rare)? |
| **D8** | **Composition-with-prior-loop_diagnose-design fidelity** (project-specific) | HIGH | C3 + universal precondition I7 from decomposition | Does the candidate respect the universal precondition that prior loop_diagnose's design ships first? Does it compose (not duplicate) with prior pieces? |
| **D9** | **Chain-amplification-tracking feasibility** (project-specific) | MODERATE | P-cross feasibility question; current calibration of spec-rewrite frequency | Can P-cross actually run at current calibration (manual checklist, fires when triggered)? |

### Dimension validation

If a candidate passed all 9 perfectly, would it actually solve the diagnostic's maintenance-extension problem? Yes — the dimensions cover (a) the architectural correctness (D1, D2, D3), (b) implementation parsimony (D4, D5), (c) the project-specific risks (self-reference D6; calibration D7; composition D8; chain-amplification feasibility D9). No additional dimensions surface from sensemaking that aren't covered.

---

## Phase 1 — Fitness Landscape

### Viable region
High on all 9 dimensions: addresses targeted fault dimension's root (D1); composes with prior loop_diagnose's design (D2, D8); satisfies decomposition's verification criteria (D3); minimum-viable for new dimensions (D4); robust against edge cases (D5); acknowledges loop_diagnose #3 self-reference (D6); calibration-fit at current state (D7); P-cross feasible as manual checklist (D9).

### Dead region
Single-dimension fatal failures:
- Duplicates prior loop_diagnose's pieces (e.g., a candidate that recreates deferred_governance.md instead of extending it) — fails D8 fatally.
- Calibration-misfit (e.g., requiring N≥10 spec rewrites for any signal) — fails D7 fatally.
- Doesn't address the targeted fault dimension (e.g., LS-C documentation-only) — fails D1 fatally.
- Supersedes prior loop_diagnose's design (e.g., CB-C wholesale consolidation) — fails D8 fatally.

### Boundary region
Strong on most dimensions but with specific gaps:
- P-cross periodic audit: strong on D1/D8 but borderline on D9 (P-cross may never fire if spec rewrites are rare).
- Synthesis-re-test rule (P6): strong on D1/D2 but borderline on D5 (detection heuristic is brittle for synthesis without explicit mention).
- User-words-as-constraint rule (P7): strong on D1/D2 but borderline on D5 (heuristic relies on natural-language permissive markers that may be subtle).
- CHAIN-AMPLIFIED attribution category: strong on D1 but borderline on D7 (1-instance evidence at current calibration).

### Unexplored region
- The interaction between this loop_diagnose's extension and a hypothetical loop_diagnose #4 on the same chain. Inflation risk visible but not yet quantified.
- The cross-discipline generalization (whether these patterns occur in other homegrown discipline rewrites) — explicitly RESEARCH FRONTIER.

---

## Phase 2 — Adversarial Evaluation

### Primary candidate: the assembled 5-piece + 3-sub-assembly + worked-examples-mandatory design

#### Prosecution (strongest case against)

**P-1 (Self-reference risk on loop_diagnose #3):** This is the THIRD loop_diagnose in succession on the same chain. Each uses the same SIC pipeline that has the suspected faults from prior loop_diagnoses. There's a risk of LOOP_DIAGNOSE INFLATION — each new loop_diagnose may surface NEW patterns simply because the framework expands per-iteration, not because new fault patterns actually exist. Loop_diagnose #4 on this same chain might surface ANOTHER 8 cross-cutting patterns and consolidate into 5 sub-aspects + 2 new dimensions, ad infinitum.

**P-2 (Maintenance overhead aggregation — required user-perspective objection per multi-axis prosecution depth check):** The user already has the prior loop_diagnose's 5-piece + 3-sub-assembly + phase-0-audit maintenance design pending materialization. This loop_diagnose adds 2 new pieces (P6 Synthesis-re-test; P7 User-words-as-constraint) + 5 sub-aspect refinements + 1 cross-iter audit extension. Cumulative across both loop_diagnoses: 7 pieces + 3 sub-assemblies + 1 phase-0 audit + 5 refinements + 1 cross-iter extension + sub-assemblies emerging from this loop_diagnose's innovation (3 sub-assemblies). The user's directive was "diagnose what went wrong" — adding more maintenance overhead may not be what they want. Where does this end?

**P-3 (CHAIN-AMPLIFIED calibration overshoot):** CHAIN-AMPLIFIED is a new attribution category introduced based on B8 (Iteration-Chain Causal Diffusion). Evidence base: ONE chain (the /explore rewrite chain). Adding a 4th attribution category for a 1-instance pattern is calibration-overshoot — the structural argument exists but the evidence is thin.

**P-4 (P-cross feasibility at current calibration):** P-cross extends phase-0 audit to a periodic pattern fired every 3 spec rewrites. But spec rewrites of the same target are RARE in current project state (only `/explore` has been rewritten in any sequence). P-cross's trigger may never fire. The rule's value is unrealized.

**P-5 (Specification-gap probe per multi-axis check — Synthesis-re-test detection brittle):** P6's detection heuristic is "the inquiry's `_branch.md` mentions synthesizing N prior outputs OR `finding.md` lists N≥3 inherited commitments." This is brittle — a synthesizing inquiry that doesn't EXPLICITLY mention synthesis would slip through. The old-vs-new finding (the trigger case) DID explicitly mention synthesis, but future cases may not.

**P-6 (User-words-as-constraint heuristic brittle per multi-axis check):** P7's heuristic relies on permissive markers ("acceptable," "OK," "fine," "manual is enough," etc.). Natural language is subtle. A user statement like "I think we can defer this" is permissive in form but might be descriptive in intent. The heuristic may produce false positives (treating descriptive statements as constraints) or false negatives (missing subtle permissive statements).

**P-7 (Identity-by-Negation displacement risk):** The prior loop_diagnose flagged Identity-by-Negation Coupling (NOT-list framing) as the DEEPEST fault per the user's inline objection ("WHY explore should know about other disciplines at all????"). This loop_diagnose's 2 new dimensions (Synthesis-as-Validation; Speculative Tooling on User Permission) don't address that deepest fault — they address adjacent patterns. Has the user's actual deepest concern been displaced by the loop_diagnose chain chasing newer patterns?

#### Defense (strongest case for)

**D-1 (Self-reference acknowledged + chain triangulation strengthens not weakens):** Each loop_diagnose explicitly acknowledged self-reference and grounded verdicts in external evidence (iter-2 documented faults, May 14 supplementary diagnostic, user inline objection). Chain triangulation: each loop_diagnose provides external evidence for the next. Loop_diagnose inflation is mitigated by THIS loop_diagnose's own consolidation discipline (5 of 8 patterns become sub-aspects, not new dimensions; structural-distinctness criterion gates promotion). The framework's growth is calibrated.

**D-2 (Maintenance overhead is composable not aggregative; not all 18 items are equal):** The 5 sub-aspect refinements are 1-line additions to existing pieces — minimal overhead. The 2 new pieces compose with existing sub-assemblies (P6 lives in deferred_governance.md alongside prior P3+P4; P7 lives in the pre-inquiry checklist alongside prior P1's bundle). The 1 cross-iter audit extension extends phase-0 audit. Cumulative ACTUAL new artifacts from THIS loop_diagnose: 2 new pieces + 1 audit extension + 5 inline refinements. Total project-wide: 7 pieces + 1 audit + 5 inline refinements (since prior loop_diagnose's 5 + this loop_diagnose's 2 = 7 distinct pieces that ship as 1 unified file via sub-assembly 1 + 1 sub-assembly 2 + 1 anatomy-doc edit). The aggregation reads worse than reality.

**D-3 (CHAIN-AMPLIFIED structural argument independent of evidence count):** The structural argument for CHAIN-AMPLIFIED is "no single iteration is fully responsible; cumulative effect is the fault; maintenance is cross-iteration auditing not framework fixes." This argument holds independently of how many instances we've observed. 1-instance evidence is calibration-thin but the structural distinctness from FRAMEWORK-ENABLED is clear. Maintenance (P-cross periodic audit) is calibration-fit (manual checklist; fires only when triggered).

**D-4 (P-cross fires when triggered, cost-of-existence is minimal):** P-cross's trigger is "after every 3 spec rewrites of the same target." If spec rewrites are rare, P-cross doesn't fire — no cost. The cost of the rule's existence (1 markdown checklist) is minimal. The value is realized only when the chain pattern recurs; if it doesn't recur, P-cross sits dormant with no harm.

**D-5 (Detection heuristics are starting defaults, refinable with worked examples):** P6 and P7 detection heuristics are explicit STARTING defaults. They will be brittle initially. The CM-G "worked example mandatory" rule for each piece partially mitigates by anchoring the rule's intended scope. Refinement based on observed runs is documented in evaluation gates. This is calibration-appropriate for v1.

**D-6 (Identity-by-Negation NOT displaced; it's the prior loop_diagnose's piece + retained MUST):** The prior loop_diagnose's piece on Identity-by-Negation (NOT-list restructure with user-confirmation gate) remains. Its MUST item (user decision on NOT-list restructure scope) is still pending. This loop_diagnose extends with NEW dimensions that address ADJACENT patterns. The user's deepest concern is preserved as the prior loop_diagnose's MUST; this loop_diagnose adds depth, doesn't displace.

**D-7 (Loop_diagnose inflation has natural ceiling):** The structural-distinctness criterion (own change-driver + own maintenance piece requirement) gates dimension promotion. If loop_diagnose #4 surfaces 8 more patterns, most will be sub-aspects of existing 7 dimensions; only structurally distinct ones will promote. There's no infinite inflation; the framework's growth converges as the chain's pattern space saturates.

#### Collision

| Prosecution | Defense | Outcome |
|---|---|---|
| P-1 self-reference loop_diagnose #3 + inflation risk | D-1 chain triangulation + structural-distinctness gates inflation; D-7 natural ceiling | DEFENSE WINS WITH CAVEAT — note explicitly that further loop_diagnoses (#4+) on this chain require strong external evidence; document "consider whether the value of loop_diagnose #4+ exceeds its overhead" |
| P-2 maintenance overhead aggregation | D-2 composable not aggregative | DEFENSE WINS WITH REFINE — produce a UNIFIED MAINTENANCE OVERVIEW combining prior loop_diagnose + this loop_diagnose's pieces in one place so user sees total scope at glance |
| P-3 CHAIN-AMPLIFIED calibration overshoot | D-3 structural argument independent of evidence count | DEFENSE WINS WITH REFINE — CHAIN-AMPLIFIED's evidence base is 1; if no second instance surfaces in 6+ months OR 6+ spec rewrites without recurrence, consider downgrading the category to a sub-aspect of FRAMEWORK-ENABLED |
| P-4 P-cross may never fire | D-4 cost-of-existence minimal | DEFENSE WINS — P-cross documented as manual checklist with minimal cost-of-existence |
| P-5 P6 detection heuristic brittle | D-5 starting defaults + worked examples + evaluation gates | DEFENSE WINS WITH REFINE — P6 worked example must SHOW BOTH a clear-positive case AND a false-negative case (synthesis without explicit mention) so users can extrapolate the rule's intended scope |
| P-6 P7 detection heuristic brittle | D-5 + D-6 same | DEFENSE WINS WITH REFINE — P7 worked example must SHOW subtle/contested permissive markers (the "I think we can defer" case) and discuss the override path for false-positive cases |
| P-7 Identity-by-Negation displacement | D-6 prior MUST preserved | DEFENSE WINS WITH REFINE — the unified maintenance overview must explicitly preserve and reference the prior loop_diagnose's pending MUST item (NOT-list restructure scope decision) so it doesn't get visually buried |

#### Position on landscape

**Viable region with six specification refinements to close.** D1 (correctness) PASS. D2 (coherence) PASS. D3 (completeness) PASS. D4 (parsimony) PASS. D5 (robustness) PASS WITH REFINE — detection heuristics need worked examples showing edge cases. D6 (self-reference) PASS WITH CAVEAT — note inflation risk for loop_diagnose #4+. D7 (calibration-state) PASS WITH REFINE — CHAIN-AMPLIFIED downgrade trigger documented. D8 (composition) PASS — universal precondition honored. D9 (chain-amplification feasibility) PASS — manual checklist form chosen.

#### Verdict: **SURVIVE → REFINE** (6 specification refinements; no architectural revisions needed)

Six specification refinements to settle when this loop_diagnose's extension materializes:

**REFINE-A (P-2 maintenance overhead — unified overview):** Produce a UNIFIED MAINTENANCE OVERVIEW document that combines prior loop_diagnose's 5-piece + 3-sub-assembly + phase-0-audit design with this loop_diagnose's 2-new-piece + 5-refinement + 1-cross-iter-audit extension. Single document; cumulative scope at-a-glance; cross-references between pieces and sub-assemblies. Place at `homegrown/protocols/spec_rewrite_governance_overview.md` or similar.

**REFINE-B (P-1 inflation guard):** Note explicitly in the finding that further loop_diagnoses (#4+) on this same chain require strong external evidence (e.g., new user concern; new MVL+ run problems traceable to existing maintenance failure). Document a "consider whether the value of loop_diagnose #4+ exceeds its overhead" check.

**REFINE-C (P-3 CHAIN-AMPLIFIED downgrade trigger):** Document an explicit revival-trigger-style downgrade: if no second instance of CHAIN-AMPLIFIED pattern surfaces in 6+ months OR 6+ spec rewrites without recurrence, downgrade the category to a sub-aspect of FRAMEWORK-ENABLED. Preserves the structural argument while honoring evidence-thin caveat.

**REFINE-D (P-5 P6 worked example shows false-negative case):** P6's worked example must include BOTH a clear-positive case (old-vs-new finding's 11 commitments) AND a false-negative case (a hypothetical synthesizing inquiry that doesn't explicitly mention synthesis but still needs the re-test). Anchors the rule's intended scope.

**REFINE-E (P-6 P7 worked example shows subtle/contested permissive markers):** P7's worked example must SHOW subtle or contested permissive markers (e.g., "I think we can defer this" — descriptive vs permissive) and explicitly discuss the override path with reasons. Anchors the heuristic's intended scope and reduces false-positive risk.

**REFINE-F (P-7 unified overview preserves prior MUST):** The unified maintenance overview (REFINE-A) must explicitly preserve and reference the prior loop_diagnose's pending MUST item (NOT-list restructure scope decision). Position prominently — this is the user's deepest concern from the chain and should not be visually buried by this loop_diagnose's additional pieces.

These 6 refinements are SPECIFICATION DETAILS within the assembled extension. None requires another SIC iteration; all settle when the extension materializes.

---

### Secondary candidates: 7 ACTIONABLE individual survivors (compact evaluation)

Each is a component of the assembled design. Each tested individually for any standalone failure beyond the assembled-design verdict.

| Candidate | Prosecution (compact) | Defense (compact) | Verdict |
|---|---|---|---|
| **CB-G** P6+P-cross combined audit | Combining two pieces may obscure their individual triggers | Per CB-G design: synthesis-re-test fires conditionally; cumulative-state tracking fires periodically; both produce structured reports. Can be in one file with clear sub-sections | SURVIVE (no change) |
| **CB-F** refinements + P7 as checklist | Checklist may produce ritual compliance | Same defense as prior loop_diagnose's spec-edit checklist concern: light-touch starting point; can be enriched | SURVIVE (no change) |
| **CM-G** worked examples mandatory | Adds drafting overhead per piece | Worked examples mitigate detection-heuristic brittleness (P-5, P-6) and provide concrete anchor for users | SURVIVE → REFINE per REFINE-D, REFINE-E (specific worked example shape requirements) |
| **CM-F** P-cross as manual checklist | Manual may not happen | Trigger is human-action-dependent; alignment with v1-minimal stance | SURVIVE (no change) |
| **AR-F** formal from-scratch declaration | User may not know whether their inquiry is from-scratch vs additive | Detection heuristic + override path; user uses best judgment with explicit interpretive justification | SURVIVE (no change) |
| **DT-G** PR-template style | Familiar pattern but may import GitHub-PR-culture biases | Pattern is widely understood; substantive rules carry the load, not the format | SURVIVE (no change) |
| **EX-G** CHAIN-AMPLIFIED tracking | Operationalizes a 1-instance pattern | See main critique D-3 + REFINE-C | SURVIVE → REFINE per REFINE-C (downgrade trigger) |
| **EX-F** autonomy-ladder v2 trigger | Far-future revival | Trigger doesn't commit to building; just marks the condition | SURVIVE (no change) |

All 8 ACTIONABLE survivors hold up. 2 have small REFINE additions per the primary candidate's REFINE list.

---

### Tertiary: 4 SURVIVE → REFINE candidates from innovation

| Candidate | Refinement target proposed by innovation | Critique verdict |
|---|---|---|
| **LS-G** consolidated bundle | Defer to materialization choice | SURVIVE — REFINE-A actually adopts this (unified maintenance overview is a consolidated package); upgrade from REFINE to ACTIONABLE |
| **CM-C** no new files | Split decision per piece | SURVIVE — refinement of WHERE each piece lives stays a materialization choice; some pieces (P6) fit existing files, others (P-cross checklist) may need their own |
| **DT-F** semantic-versioning scope | Refine on exact tier definitions | SURVIVE → ACTIONABLE — per AR-F formal from-scratch-vs-additive-vs-bug-fix declaration, the tiers operationalize as the declaration values |
| **DT-C** stare-decisis convention-as-default | Refine B3 wording | SURVIVE → ACTIONABLE — B3 refinement (in Piece 1) wording is "convention-citation as default + distinguishing requires explicit reasoning" per stare-decisis framing |

3 of 4 upgraded to ACTIONABLE upon critique.

---

### Quaternary: 7 KILL'd candidates — confirm rejections

| Candidate | Original rejection | Critique verdict |
|---|---|---|
| **LS-F** always-on review | Overhead too high | KILL CONFIRMED. Seed: scope-tiered governance (per DT-F semantic-versioning analog) addresses this — different inquiry types apply different governance |
| **LS-C** documentation-only | Defers all maintenance | KILL CONFIRMED |
| **CB-C** wholesale supersession | Out of scope per FP3 maintenance composes not replaces | KILL CONFIRMED |
| **IN-G** documentation-only governance | Same as LS-C | KILL CONFIRMED |
| **IN-F** trust-iteration retroactive | Reactive-only doesn't scale | KILL CONFIRMED. Seed: loop_diagnose remains valuable as backstop (this very inquiry is evidence) |
| **IN-C** all spec edits same governance | Over-broad | KILL CONFIRMED |
| **EX-C** moratorium | Over-restrictive | KILL CONFIRMED |

All 7 KILL verdicts confirmed.

---

### 3-phase sequencing assessment

**Prosecution:** Phase 3 (Cluster II refinements after P-cross) creates a dependency. Could the cross-iter refinements ship FIRST as documentation-only and later get evidence backing once P-cross runs?

**Defense:** Yes — that's exactly what Phase 1's Cluster I refinements do (doc-only edits; refinement is the addition itself, not the runtime behavior). Cluster II's refinements have evidence-source REFERENCES to P-cross; they CAN ship documentation-only without P-cross's reports being available, with the understanding that the trigger conditions reference data that doesn't yet exist. This is acceptable for v1.

**Verdict:** SURVIVE — sequencing is FLEXIBLE; recommended order documented but Phase 3 can ship documentation-only earlier if user wants the visible commitment to cross-iter governance.

---

## Phase 3 — Verdict Summary + Constructive Output

### Final verdicts

| Candidate group | Verdict | Constructive output |
|---|---|---|
| **Assembled per-piece extension design** (5 pieces + 3 sub-assemblies + worked examples mandatory) | SURVIVE → REFINE | 6 specification refinements (REFINE-A through REFINE-F above) to settle at materialization |
| **8 ACTIONABLE individual survivors from innovation** | SURVIVE | 2 small REFINEs added (CM-G via REFINE-D + REFINE-E worked-example shape; EX-G via REFINE-C downgrade trigger) |
| **4 SURVIVE → REFINE candidates from innovation** | 3 upgraded to ACTIONABLE | LS-G via REFINE-A (unified overview); DT-F + DT-C upgraded to ACTIONABLE; CM-C remains REFINE (per-piece location choice at materialization) |
| **2 RESEARCH FRONTIER candidates** | PRESERVED | AR-G in-discipline real-time drift; AR-C second-order /discipline-design skill — both retain their preservation status |
| **7 KILL'd candidates** | KILL CONFIRMED | All 7 rejection reasons hold; seeds preserved where useful |
| **3-phase sequencing within decomposition** | SURVIVE — sequencing is FLEXIBLE | Phase 3 (Cluster II) can ship documentation-only earlier if the user wants the visible commitment without waiting for P-cross evidence |
| **Composition with prior loop_diagnose's design via universal precondition** | PASS | All 5 pieces + 3 sub-assemblies + worked-examples-mandatory respect the universal precondition (prior loop_diagnose's design ships first or in parallel); REFINE-A unified overview makes the composition visible to the user |

### Refinement targets (consolidated for materialization)

1. **REFINE-A:** Produce a UNIFIED MAINTENANCE OVERVIEW combining prior loop_diagnose + this loop_diagnose's pieces in one document. Single touchpoint; cumulative scope at-a-glance.
2. **REFINE-B:** Document explicit "loop_diagnose #4+ requires strong external evidence" inflation guard.
3. **REFINE-C:** Document CHAIN-AMPLIFIED downgrade trigger: if no second instance in 6+ months OR 6+ spec rewrites, downgrade to FRAMEWORK-ENABLED sub-aspect.
4. **REFINE-D:** P6 worked example shows false-negative case (synthesis without explicit mention).
5. **REFINE-E:** P7 worked example shows subtle/contested permissive markers + override path discussion.
6. **REFINE-F:** Unified overview preserves and references prior loop_diagnose's pending MUST item (NOT-list restructure scope) prominently — don't bury the user's deepest concern.

These 6 refinements are spec details for materialization.

---

## Phase 3.5 — Assembly Check

Re-running the assembly check on the SURVIVE candidates:

**Sub-assembly 1: Combined rewrite-quality audit (P6 + P-cross via CB-G)** — verified holds. Strong substrate share. Synthesis-re-test fires conditionally; cumulative-state tracking fires periodically; both produce structured reports. CONCLUDE.md cross-references rather than absorbing.

**Sub-assembly 2: PR-template-style spec-edit checklist (CB-F + DT-G)** — verified holds. Familiar pattern; consolidates Pieces 1 + 4 into a single check-the-boxes-at-spec-edit ritual. Worked examples (CM-G via REFINE-D + REFINE-E) anchor the rules.

**Sub-assembly 3: Formal from-scratch-vs-additive declaration with scope tiering (AR-F + DT-F)** — verified holds. Operationalizes scope tiering and formal inquiry-type declaration in one mechanism.

**New emergent assembly post-critique: REFINE-A unified maintenance overview** — combines prior loop_diagnose's design + this loop_diagnose's extension into one user-facing document. Emergent value: cumulative-scope-visibility + user's-deepest-concern-preserved + composition-fidelity-evidence. This is a NEW assembly produced by critique (not present in innovation's 3 sub-assemblies).

Assembly stability across SIC: SURVIVE with the addition of REFINE-A's unified overview as a 4th sub-assembly.

---

## Phase 4 — Coverage + Convergence Assessment

### Coverage

| Region | Coverage |
|---|---|
| Architecture (5 pieces from decomposition) | Fully covered |
| Composition with prior loop_diagnose's design | Fully covered (universal precondition I7 honored; REFINE-A unified overview makes composition visible) |
| Self-reference risk (loop_diagnose #3) | Covered with REFINE-B inflation guard |
| Calibration-state-fit | Covered with REFINE-C downgrade trigger |
| User's deepest concern preservation (Identity-by-Negation from prior) | Covered with REFINE-F prominent placement in unified overview |
| Detection heuristic robustness | Covered with REFINE-D + REFINE-E worked-example refinements |
| Worked examples across all 5 pieces | Covered (CM-G mandatory rule) |

No large unexplored regions.

### Convergence criteria check

| Criterion | Status |
|---|---|
| At least one candidate has SURVIVE with no critical-dimension caveats | YES — assembled design SURVIVES on all 9 dimensions; only 6 specification refinements (not architectural revisions) needed |
| Two consecutive iterations have not produced candidates in new regions | YES — innovation's 21 candidates spanned 9 axes; critique exercised them against 9 dimensions; no new architectural regions emerged (REFINE-A is a new assembly but composes existing pieces, not architectural revision) |
| No unexplored regions topologically likely to contain viable candidates | YES — KILL'd candidates' regions documented; RESEARCH FRONTIER (AR-G in-discipline drift; AR-C second-order discipline) preserved as forward direction |
| Accumulator shows decreasing rate of new information | YES — sensemaking → decomposition → innovation → critique each added narrowing constraints, not new architectural openings |

All convergence criteria met.

### Signal: **TERMINATE**

The inquiry's primary question is answered: 3 May-12 explore-thread source findings exhibit faults across the prior loop_diagnose's 5 dimensions (with multi-instance per-prior evidence upgrading Dim 3 and Dim 5 dimension-level confidence to HIGH) PLUS 2 NEW DIMENSIONS (Synthesis-as-Validation; Speculative Tooling on User Permission) PLUS 1 NEW ATTRIBUTION CATEGORY (CHAIN-AMPLIFIED). Maintenance design extends prior loop_diagnose's design with 2 new pieces + 5 refinements + 1 cross-iter audit extension + REFINE-A unified maintenance overview. 6 specification refinements for materialization.

### The Answer (concise)

The 3 May-12 explore-thread source findings (end-goal-aware; surfacing-mechanism-depth; old-vs-new) exhibit fault dimensions extending the prior loop_diagnose's 5-dimension framework. Per-prior verdicts confirm Dimensions 3 (Insufficient Deferral Binding) and 5 (Inherited Status-Quo Bias) are multi-instance at chain scope (DIRECT instances in each prior, not just iter-1 framework). 8 cross-cutting patterns surfaced; 5 are sub-aspects refining existing dimensions; 2 promote to NEW DIMENSIONS (Synthesis-as-Validation; Speculative Tooling on User Permission); 1 motivates a 4th attribution category (CHAIN-AMPLIFIED). Framework grows to 7 dimensions + 4 categories. Maintenance composes with prior loop_diagnose's design: 2 new pieces + 5 refinements + 1 cross-iter audit extension + a UNIFIED MAINTENANCE OVERVIEW that consolidates the cumulative scope and preserves the prior loop_diagnose's pending MUST (NOT-list restructure) as the user's deepest concern.

---

## Convergence Telemetry

| Check | Result |
|---|---|
| **Dimension coverage** | 9 dimensions extracted (5 default + 4 project-specific per Phase 0 refinement: D6 self-reference risk, D7 calibration-state-fit, D8 composition fidelity, D9 chain-amplification feasibility); validated against sensemaking; no dimension produced only noise |
| **Adversarial strength** | STRONG — 7 prosecution objections constructed against the primary candidate (including the required user-perspective objection P-2 + specification-gap probes P-5/P-6 per multi-axis prosecution depth check); 7 defenses; 7 collisions resolved (7 DEFENSE WINS, 6 with explicit REFINE additions, 1 with caveat) |
| **Landscape stability** | STABLE — no new architectural regions discovered during critique; the 3 sub-assemblies from innovation hold; REFINE-A produces a 4th sub-assembly (unified overview) that composes existing pieces, not architectural revision |
| **Clean SURVIVE exists** | YES — assembled design SURVIVES on all 9 dimensions; 6 REFINE notes are spec-design details, not architectural revisions |
| **Multi-axis prosecution depth check applied** | YES — user-perspective objection (P-2 maintenance overhead aggregation from `_branch.md` Source Input); specification-gap probes (P-5 P6 detection brittleness; P-6 P7 detection brittleness); specific failure-case scenario (P-7 Identity-by-Negation displacement risk) |
| **Project-specific risk dimension check applied** | YES — D6 self-reference risk handling; D7 calibration-state-fit; D8 composition-with-prior-loop_diagnose fidelity; D9 chain-amplification-tracking feasibility all explicitly added to the dimension list |

### Failure-mode self-check

| Failure mode | Observed? | Notes |
|---|---|---|
| **Wrong Dimensions** | No | Dimensions extracted from sensemaking anchors; validated by checking "if all 9 passed perfectly, would the maintenance solve the extension problem?" — yes |
| **Rubber-Stamping** | No | Real prosecution constructed; 6 of 7 collisions produced explicit REFINE additions |
| **Nitpicking** | No | KILL verdicts limited to the 7 already-KILL'd candidates from innovation; no candidate killed for minor issues |
| **Dimension Blindness** | Tested | Cross-referenced sensemaking's 7 perspectives against critique's 9 dimensions; project-specific risks (D6–D9) explicitly added; loop_diagnose-#3 self-reference risk (D6) and chain-amplification feasibility (D9) would have been invisible without explicit addition |
| **False Convergence** | No | Convergence requires both stabilization AND clean SURVIVE — both met; the assembled design SURVIVES on critical dimensions; REFINE notes are spec-design details |
| **Evaluation Drift** | No | First critique pass for this loop_diagnose; no prior dimensions to drift from |
| **Self-Reference Collapse** | ACKNOWLEDGED + MITIGATED | This is critique discipline being used to evaluate maintenance for protocols that include critique. AND this is loop_diagnose #3 with cumulative self-reference. Mitigation: external grounding via prior loop_diagnose's framework + 3 prior findings + May 14 + user inline objection. REFINE-B adds explicit inflation-guard for loop_diagnose #4+. The verdict is grounded in external evidence chain, not just internal coherence. Critique passes its own self-reference check by being explicit about the risk and adding the inflation-guard refinement. |

**Overall: PROCEED** — sufficient dimension coverage; strong adversarial structure; landscape stable; clean SURVIVE exists; multi-axis prosecution depth check + project-specific risk dimension check both applied; no failure modes triggered; ready for CONCLUDE to compile finding.
