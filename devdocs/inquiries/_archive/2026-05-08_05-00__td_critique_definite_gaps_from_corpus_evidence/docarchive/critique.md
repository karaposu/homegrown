# Critique: TD-Critique Discipline - Definite Gaps From Corpus Evidence

## User Input

devdocs/inquiries/2026-05-08_05-00__td_critique_definite_gaps_from_corpus_evidence/_branch.md

## Phase 0 — Dimensions With Weights

Dimensions extracted from sensemaking output (constraints + foundational principles + corpus evidence — explicitly NOT generated from td-critique.md itself, per Self-Reference Collapse defense):

### 1. For-Sure Criterion Met — 25%

**Critical.** Multi-chain convergence preferred; single-chain primary-cause + before/after contrast also passes.

### 2. Generic / Meta-Discipline Framing — 15%

**Critical.** Rule uses existing `td-critique.md` vocabulary. NO project-specific terms in spec content.

### 3. Placement Convention Applied — 15%

**Critical.** Single canonical home + one-line cross-references at non-canonical surfaces.

### 4. Discipline-Spec Purity Preserved — 15%

**Critical.** No embedded placement convention; no maintenance-time meta-content; no new failure modes unless structurally required.

### 5. Coverage of Corpus Failures — 10%

The rules together must catch the corpus's primary Critique-side failure patterns (P2 family at 4 chains; P3 family at 3 chains).

### 6. Implementation Cost — 5%

Aggregate ≤ ~15 lines added to `td-critique.md`.

### 7. Speculative-Filter Application — 5%

Rejected additions explicitly documented with structural rationale.

### 8. Self-Reference Collapse Defense — 5%

External grounding via corpus evidence + cross-discipline dimensions + adversarial structure preserved.

### 9. Non-Ambiguity (Parenthetical Context) — 5%

The finding's wording gives parenthetical context on first use of internally-referential terms.

**Critical dimensions (must pass for SURVIVE):** For-Sure Criterion, Generic Framing, Placement Convention, Discipline-Spec Purity.

## Phase 1 — Fitness Landscape

### Viable Region

Rules that pass all 4 critical dimensions + provide coverage + bounded cost + filter applied + Self-Reference Collapse defended + non-ambiguous.

### Dead Region

Rules that fail for-sure criterion / use project-specific language / multi-surface duplication / embed placement convention or maintenance-time content / introduce new failure modes without structural justification / wholesale restructure td-critique.md / promote LOOP_DIAGNOSE-protocol-specific behaviors as generic discipline rules / fall to Self-Reference Collapse (circular validation).

### Boundary Region

- Sub-instances within Rule A (each individual project-specific dimension is single-chain) and Rule B (each individual depth-axis sub-type is single-chain) — passes via meta-pattern multi-chain convergence (4 and 3 chains respectively).
- Chain 7's U7 (TP3 vocabulary-naturalness 4th sub-axis) is PENDING — not currently caught by Rule B; intentional non-coverage awaiting TP3 effectiveness check.

### Unexplored Region

- Whether td-critique.md should encode behavior-aware dimensions (i.e., dimensions that depend on candidate behavior). The existing dimension extraction handles this implicitly via "extract from sensemaking output."
- Whether td-critique.md should encode prosecution-quality telemetry (how strong was the prosecution?). Convergence telemetry already covers adversarial strength check; no separate gap.

## Phase 2 — Candidate Evaluation

### Candidate: Combined Fix (A-1 + B-1 + F-1 + V-1 + SR-1)

**Prosecution (10 objections):**

1. **Rule A's "project artifacts/operations/state" trigger is judgment-dependent.** What counts as project artifacts? What operations? What state? The runner has to classify candidates; misclassification causes wrong firing.

2. **Rule B's depth-axes (user-perspective, failure-case, specification-gap) are project-specific to LOOP_DIAGNOSE corpus.** Other Critique contexts may not have user source input (where does user-perspective come from?), conditional behavior (where does failure-case come from?), or runtime-determined behavior (where does specification-gap come from?).

3. **Each individual sub-instance within Rule A and Rule B is single-chain.** The meta-pattern is 4-chain (Rule A) and 3-chain (Rule B), but the specific axes (duplicate-derivable-state, phase-fit, etc.; user-perspective, failure-case, specification-gap) are each single-chain. Is single-chain sub-instance evidence enough to encode generic depth-axis enumeration?

4. **Rule B's wording mentions specific examples (`_branch.md` Source Input).** This is project-specific (LOOP_DIAGNOSE-corpus's branch.md), not generic.

5. **The "pick depth-axes most relevant" disclaimer in Rule B is a soft constraint** — it might be ignored in practice, defaulting to applying all three axes when only one applies.

6. **Cross-references at failure modes are duplicative.** Rule A's content prevents Dimension Blindness; Rule B's content prevents Rubber-Stamping. Adding cross-references at the failure modes seems redundant — readers at the failure mode would just be redirected back to the rules.

7. **The Self-Reference Collapse defense is methodology-level, not content-level.** Including it in the finding's Reasoning section adds words but doesn't change the spec; if the defense is truly important, it should be in spec content or rejected as not needed for spec.

8. **Adding ~10–15 lines to a ~365-line spec is small but compounds across the methodology library** (~75 lines aggregate across all 5 sister analyses).

9. **Rule B's "specification-gap probe" sub-axis is structurally similar to decompose.md's just-added Determination-Mechanism Piece Check** (also from this corpus's chain 6). Is there redundancy between disciplines? Should td-critique.md's Rule B reference decompose.md's check?

10. **The 4 chains for Rule A and 3 chains for Rule B are above the cross-cutting threshold but not by much.** A future chain that doesn't fit the pattern could destabilize either rule's evidence base.

**Defense (12 rebuttals):**

1. **Both rules are evidence-backed by multi-chain corpus convergence above the cross-cutting threshold** (4 and 3 chains; corpus's own promotion gate is 3+ chains, so both pass clearly). The for-sure criterion is met.

2. **Rule A's "project artifacts/operations/state" trigger is observable from candidate descriptions.** Candidates that propose creating/modifying artifacts, that propose operations, or that touch durable state are recognizable patterns. Examples in the rule (duplicate-derivable-state, explicit-culture-fit, operation-parsimony, phase-fit) ground the abstraction.

3. **Rule B's depth-axes are themselves observable triggers.** "When the inquiry's source input includes user-stated concerns" — this triggers when source input has concerns; otherwise the user-perspective axis doesn't fire. "For candidates with conditional or trigger-based behavior" — observable from candidate description. "For candidates whose runtime behavior depends on load-bearing concepts" — observable from candidate description. The wording mitigates the project-specificity objection by tying triggers to candidate properties, not to corpus-specific artifacts.

4. **The `_branch.md` reference in Rule B is parenthetical and illustrative**, not load-bearing. The wording reads "when the inquiry's source input includes user-stated concerns (e.g., a `_branch.md` Source Input section)" — the parenthetical names a familiar example without locking the rule to that artifact. Other Critique contexts with user source input apply equally.

5. **Each individual sub-instance being single-chain is the META-PATTERN's structure**, not a defect. Rule A's 4 chains × 4 distinct dimensions and Rule B's 3 chains × 3 distinct sub-types are exactly what cross-cutting promotion looks like — different specific instances converge on the same meta-pattern. This is structurally identical to how M6 was promoted in chain 3 (across distinct anchor types) and TP3 in chain 6 (across distinct prosecution depth-axes). The corpus's own promotion gate validates this.

6. **The "pick depth-axes most relevant" disclaimer is a feature, not a bug.** It preserves runner judgment at the axis-selection layer while structuring the construction layer. Without it, the rule would over-fire on irrelevant axes; with it, the rule fires only when relevant.

7. **Cross-references at failure modes are NOT duplicative — they're navigation pointers** per the placement convention. A reader investigating Dimension Blindness gets pointed to where the prevention rule lives. A reader investigating Rubber-Stamping gets pointed to where the prosecution-depth strengthener lives. The rule itself is not duplicated; only the navigation pointer.

8. **The Self-Reference Collapse defense in finding (not in spec) is structurally correct.** Per failure mode #7, the defense is methodology-level (external grounding), and methodology-level concerns belong in finding documentation, not in runtime-loaded spec. Embedding the defense in spec would be discipline-spec purity violation.

9. **Aggregate cost across the methodology library is bounded by the sister-analysis-precedent pattern.** ~75 lines aggregate across 5 disciplines is structurally reasonable for a long-lived methodology library; the alternative (no spec encoding) leaves future runs vulnerable to recurrent failures.

10. **Rule B's specification-gap probe and decompose.md's Determination-Mechanism Piece Check are at DIFFERENT disciplines** (Critique prosecution vs. Decomposition Q-tree completeness). They share a related concept (load-bearing concepts whose use depends on runtime determination) but operate at different surfaces. Cross-discipline coordination is a separate concern from per-discipline rule encoding.

11. **The 4-chain and 3-chain convergence is robust to one or two outliers.** If a future chain doesn't fit Rule A's pattern, the rule's "when applicable" qualifier means it doesn't fire — no destabilization. If a future chain extends Rule B's depth-axes, the wording accommodates a 4th sub-axis (per chain 7's PENDING U7).

12. **All 4 critical dimensions pass HIGH.** For-Sure Criterion: HIGH (multi-chain). Generic Framing: HIGH (existing td-critique.md vocabulary; examples illustrative). Placement Convention: HIGH (single canonical home + one-line cross-reference per rule). Discipline-Spec Purity: HIGH (caveats in finding only; no new failure modes; extension-not-replacement).

**Collision:**

The strongest prosecution attacks judgment-dependence (objections 1, 2) and project-specificity of examples (objection 4). The strongest defense rests on observable triggers, illustrative examples, and the corpus's own validated promotion gate. The defense survives the strongest prosecution. Judgment-dependence is mitigated by observable triggers; project-specificity of examples is mitigated by parenthetical framing.

**Verification against the four critical dimensions:**

| Critical Dimension | Score | Rationale |
|---|---|---|
| For-Sure Criterion | HIGH | 4-chain (Rule A) + 3-chain (Rule B) convergence; both above 3+ cross-cutting threshold |
| Generic / Meta-Discipline Framing | HIGH | Uses existing td-critique.md vocabulary (Phase 0, validate dimensions, prosecution, depth, candidate, failure mode); examples are illustrative; project-specific names parenthetical |
| Placement Convention Applied | HIGH | Rule A canonical home Phase 0 / validate-dimensions sub-step + cross-reference at Dimension Blindness; Rule B canonical home Phase 2 / Prosecution sub-section + cross-reference at Rubber-Stamping; clean structural fits |
| Discipline-Spec Purity Preserved | HIGH | Caveats and revival triggers in finding only; no new failure modes; Self-Reference Collapse defense in finding's Reasoning (leveraging existing failure mode #7); extension-not-replacement |

**Verification against secondary dimensions:**

| Dimension | Score |
|---|---|
| Coverage of Corpus Failures | HIGH (4-chain P2 family caught by Rule A; 3-chain P3 family caught by Rule B; chain 7 U7 PENDING is intentional non-coverage) |
| Implementation Cost | LOW (~10–15 lines; smallest among sister analyses) |
| Speculative-Filter Application | HIGH (6 rejection categories with structural rationale) |
| Self-Reference Collapse Defense | HIGH (3-pronged defense: empirical corpus + cross-discipline dimensions + adversarial structure preserved) |
| Non-Ambiguity | HIGH (parenthetical context applied throughout finding) |

**Verdict: SURVIVE.**

Constructive output:

1. ADD to `homegrown/td-critique/references/td-critique.md` Phase 0 / Dimension Construction (validate-dimensions sub-step): Rule A wording.
2. APPEND to Dimension Blindness failure mode (#4) "How to prevent" line: one-line cross-reference for Rule A.
3. ADD to `homegrown/td-critique/references/td-critique.md` Phase 2 / Adversarial Evaluation (Prosecution sub-section, after the existing 4 prosecution prompts): Rule B wording.
4. APPEND to Rubber-Stamping failure mode (#2) "How to prevent" line: one-line cross-reference for Rule B.
5. DOCUMENT in finding (not in spec): F-1 + V-1 + SR-1.

Risk class: LOW. Evaluation gates:
- Rule A: in next 3 MVL+ runs producing Critique evaluations of candidate sets involving project artifacts/operations/state, the dimension list explicitly includes ≥1 project-specific risk dimension (or the absence is explicitly flagged).
- Rule B: in next 3 MVL+ runs producing Critique evaluations where any depth-axis is applicable, prosecution explicitly constructs at least one objection at the relevant depth-axis.

If either rule does not fire effectively in the next 3 applicable runs, downgrade to monitoring.

## Phase 3.5 — Assembly Check

The combined fix's components reinforce each other:

- A-1 + B-1 cover Critique's two paradigm-level downstream failures (dimension blindness at Phase 0; prosecution-depth shortcoming at Phase 2). Distinct phases; non-overlapping.
- F-1 documents what's NOT in spec — preserves the for-sure criterion's filtering effect.
- V-1 provides per-chain coverage proof with explicit P2-family and P3-family chain-by-chain mapping.
- SR-1 grounds the meta-recursive analysis externally, defending against td-critique.md's own failure mode #7.

**Self-applying check:** this Critique is using td-critique on td-critique itself. The dimensions were extracted from sensemaking output (constraints + foundational principles + corpus evidence), explicitly NOT from td-critique.md. The 7-chain corpus is external empirical evidence. The prosecution genuinely tried (10 objections, including objections about judgment-dependence, project-specificity, and meta-recursion). The defense was tested. **No Self-Reference Collapse** — external grounding maintained throughout.

**Assembly verdict: SURVIVE.**

## Phase 3 — Ranked Verdicts

1. **SURVIVE: Combined fix (A-1 + B-1 + F-1 + V-1 + SR-1).** Two rules + filter + verification + Self-Reference Collapse defense. Aggregate ~10–15 lines added to `td-critique.md`; remaining content in finding. All 4 critical dimensions HIGH.

2. **REJECT: Speculative additions** — cross-corpus accumulator extensions; new failure modes (Project-Risk-Blindness, Prosecution-Depth-Trap); DEFERRED at Critique verdict layer; burden-of-proof shift extensions; accumulator field additions; default dimensions list extensions with project-specific examples. Each rejected on structural grounds.

3. **DOCUMENT (in finding only):** Single-chain caveats for sub-instances within each rule's meta-pattern; revival trigger if any sub-pattern accumulates a structurally distinct 4th sub-type (chain 7's U7 PENDING).

## Coverage Map

Evaluated:
- Combined assembly as a unit (the strongest assembly).
- Per-chain verification: 7 chains × 2 rules = 14 coverage cells; all confirmed.
- Per-dimension verification: 4 critical + 5 secondary dimensions all HIGH or LOW (cost) as expected.
- Speculative-filter verification: 6 rejection categories.
- Self-Reference Collapse defense: 3-pronged (empirical, cross-discipline, adversarial).

Unexplored but not blocking:
- Whether td-critique.md should encode behavior-aware dimensions at the Phase 0 layer. Out of scope; existing dimension extraction handles this implicitly.
- Whether td-critique.md should encode prosecution-quality telemetry. Out of scope; convergence telemetry already covers adversarial strength.

Coverage judgment: sufficient.

## Signal

**TERMINATE with ranked survivor:**

1. SURVIVE: Combined fix (Rule A + Rule B + filter + verification + Self-Reference Collapse defense).
2. REJECT: speculative additions (6 categories).
3. DOCUMENT: caveats and revival triggers in finding only; chain 7's U7 PENDING noted.

The user's question is answered: TWO for-sure-missing pieces from `td-critique.md` (Rule A at Phase 0 / validate-dimensions sub-step; Rule B at Phase 2 / Prosecution sub-section), expressed in generic / meta-discipline language, placed per the placement convention with cross-references at existing failure modes, with discipline-spec purity preserved. Aggregate ~10–15 lines added.

This closes the fifth (and final) sister analysis. Series total: 7 rules across 5 disciplines (explore.md 2; sensemaking.md 2; decompose.md 1; innovate.md 2; td-critique.md 2 = total of 9 rules from 5 inquiries; corrected: 2+2+1+2+2 = 9 rules total, all evidence-backed by the same 7-chain corpus).

## Convergence Telemetry

- **Dimension coverage:** complete. 9 dimensions (4 critical + 5 secondary) all evaluated.
- **Adversarial strength:** STRONG. 10 prosecution objections (including project-specificity, judgment-dependence, meta-recursion); 12 defense rebuttals.
- **Landscape stability:** STABLE.
- **Clean SURVIVE:** YES. Combined fix passes all 4 critical dimensions HIGH with no caveats on critical dimensions.
- **Failure modes observed:**
  - Wrong Dimensions: NO — dimensions extracted from external sensemaking output + corpus evidence.
  - Rubber-Stamping: NO — 10 prosecution objections, including genuinely strong attacks.
  - Nitpicking: NO — defense constructed for every objection; severity-weighted dimensions.
  - Dimension Blindness: NO — Phase 0 covered all 9 dimensions including Self-Reference Collapse Defense as its own dimension.
  - False Convergence: NO — clean SURVIVE with no critical-dimension caveats.
  - Evaluation Drift: NO — dimensions and weights fixed in Phase 0; consistent with sister-analyses' pattern.
  - **Self-Reference Collapse: NO — external grounding via 3-pronged defense (empirical corpus + cross-discipline dimensions + adversarial structure preserved). This is the key defense for this meta-recursive analysis.**
- **Overall: PROCEED.**
