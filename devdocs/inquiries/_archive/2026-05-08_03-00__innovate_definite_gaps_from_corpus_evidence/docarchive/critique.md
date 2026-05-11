# Critique: Innovate Discipline - Definite Gaps From Corpus Evidence

## User Input

devdocs/inquiries/2026-05-08_03-00__innovate_definite_gaps_from_corpus_evidence/_branch.md

## Phase 0 — Dimensions With Weights

Dimensions extracted from sensemaking output (constraints + foundational principles):

### 1. For-Sure Criterion Met — 25%

**Critical.** Rule must have failure-of-absence + success-of-presence evidence. Multi-chain convergence preferred; single-chain primary-cause + before/after contrast also passes (per the prior `2026-05-07_20-35` resolution).

### 2. Generic / Meta-Discipline Framing — 15%

**Critical.** Rule uses existing `innovate.md` vocabulary (Assembly Check, candidate set, mechanisms, survivors, tests). NO project-specific terms (e.g., not LOOP_DIAGNOSE-specific).

### 3. Placement Convention Applied — 15%

**Critical.** Rule has ONE canonical home + appropriate cross-references at non-canonical surfaces. No multi-surface duplication.

### 4. Discipline-Spec Purity Preserved — 15%

**Critical.** No embedded placement convention; no maintenance-time meta-content (single-chain caveats, revival triggers live in finding only); no new failure modes unless structurally required.

### 5. Coverage of Corpus Failures — 10%

The rules together must catch the corpus's primary Innovation failures (axis-coverage gaps in chains 1, 2, 4, 5, 6, 7; DEFERRED dispositions in 7 chains; RESEARCH FRONTIER in 5 chains). Intentional non-coverage (e.g., DOCUMENTARY OBSERVATION) is acceptable when explicitly justified.

### 6. Implementation Cost — 5%

Aggregate ≤ ~25 lines added to `innovate.md`. Comparable to sister analyses (sensemaking.md ~20 lines; explore.md ~25 lines; decompose.md ~6–10 lines).

### 7. Speculative-Filter Application — 5%

Rejected additions explicitly documented with structural rationale, not handwaved.

### 8. User Hypothesis Answered With Evidence — 5%

The user's two hypotheses (paradigm/dimension gap vs. allocated compute) directly addressed with concrete evidence.

### 9. Non-Ambiguity (Parenthetical Context) — 5%

The finding's wording must give parenthetical context on first use of internally-referential terms (e.g., `/MVL+`, the 7 mechanisms, the 5-test cycle).

**Critical dimensions (must pass for SURVIVE):** For-Sure Criterion, Generic Framing, Placement Convention, Discipline-Spec Purity.

## Phase 1 — Fitness Landscape

### Viable Region

Rules that:
- Pass for-sure criterion (multi-chain or single-chain primary-cause + before/after contrast).
- Use generic / meta-discipline language.
- Have one canonical home + appropriate cross-references.
- Don't embed placement convention or maintenance-time content.
- Catch corpus's primary Innovation failures.
- Aggregate ≤ ~25 lines.
- Reject speculative additions explicitly.
- Address the user's hypotheses with evidence.

### Dead Region

Rules that:
- Are speculative (no corpus evidence).
- Use project-specific or LOOP_DIAGNOSE-specific vocabulary.
- Multi-surface duplication.
- Embed placement convention or maintenance-time meta-content.
- Introduce new failure modes without structural justification.
- Wholesale restructure `innovate.md`.
- Add an 8th mechanism (no corpus evidence).
- Promote LOOP_DIAGNOSE-protocol-specific behaviors as generic discipline rules.

### Boundary Region

- Sub-dispositions with borderline evidence (DOCUMENTARY OBSERVATION at 2 chains — Sensemaking explicitly rejected this; encoding it would land in dead region; rejecting it lands the assembly in viable region).
- Single-chain instances within Rule A's meta-pattern (each individual axis is single-chain, but the meta-pattern is 4-chain convergent — passes via the meta-pattern, not via individual axes).

### Unexplored Region

- Whether innovate.md should encode behavior-aware termination (i.e., the discipline knowing when its candidate set has reached coverage). Innovation does this implicitly via mechanism convergence; no corpus evidence of a separate gap.
- Whether innovate.md should explicitly reference cross-document awareness (e.g., "consult project architecture documents for scope assessment"). The corpus's RESEARCH FRONTIER recognition required this awareness, but the recognition cue ("multi-phase architectural work / out-of-inquiry scope") is sufficient without specific document references.

## Phase 2 — Candidate Evaluation

### Candidate: Combined Fix (A-1 + B-1 + F-1 + V-1 + U-1)

The assembly comprises:
- **A-1**: Rule A wording (Axis Coverage Check at Phase 3 / Test → Assembly Check) + cross-reference at Phase 2 / Generate.
- **B-1**: Rule B wording (Output Disposition Categories: ACTIONABLE / DEFERRED with revival trigger / RESEARCH FRONTIER) at Phase 3 / Test, after the 5-test table.
- **F-1**: Speculative filter documentation (in finding only) — rejecting DOCUMENTARY OBSERVATION, cross-corpus composition, cumulative refinement tracking, 8th mechanism, threshold change, new failure modes.
- **V-1**: Per-chain verification (in finding only).
- **U-1**: Direct address of user's two hypotheses (in finding only).

**Prosecution (10 objections):**

1. **Rule A's axis-coverage check is judgment-dependent.** The runner identifies whether the candidate space has multiple orthogonal axes; this is not deterministic. Misidentified axes cause wrong firing or missed firing.

2. **Rule B introduces 3 disposition categories where the spec had 2.** A 50% increase in disposition complexity. The runner has to classify each survivor by "evidence shape," with judgment-dependent thresholds (when is single-source thin enough to defer?).

3. **Rule B's RESEARCH FRONTIER disposition requires cross-document awareness.** Recognizing "exceeds per-inquiry scope" means knowing what scope means in this project's context (multi-phase architectural work per `enes/desc.md` etc.). innovate.md is generic; the runner doesn't have a prescribed lookup path.

4. **Rule A's 4-chain evidence has each instance at a DIFFERENT specific axis.** No single axis recurs across chains. Convergence is at the meta-level (axis-coverage as a concept), not at any concrete axis. Is meta-level convergence really sufficient for a "for-sure" rule?

5. **The user might have been looking for something simpler.** The framing question was "paradigm/dimension gap or compute" — answering with TWO rules + filter + verification + hypothesis-address might over-engineer the answer when the user wanted "no, it's a paradigm gap, here's the one missing thing."

6. **Rule A's "inherited corridor" framing is MVL+-pipeline-aware.** Mentioning "inherited from upstream Sensemaking + Decomposition" is a pipeline-specific framing that innovate.md (a generic discipline spec) shouldn't bake in.

7. **Adding 16-23 lines to a ~420-line spec is a 4–5% expansion.** Each addition raises maintenance cost. The cumulative cost across the four sister analyses (explore.md +25, sensemaking.md +20, decompose.md +6–10, innovate.md +16–23) is significant for a methodology library.

8. **Innovation is supposed to produce "novel ideas." Rule B's formal categorization of dispositions might over-formalize what should be intuitive runner judgment.**

9. **DOCUMENTARY OBSERVATION rejection on "scope mismatch" is at 2 chains — only 1 chain shy of cross-cutting threshold.** If chain 8 surfaces DOCUMENTARY again, the rejection becomes premature. Encoding only 2 dispositions now might force amendment soon.

10. **The assembly's complexity (5 sub-pieces) might be a sign of over-decomposition.** Could the answer be expressed as a single integrated rule rather than as A + B + F + V + U?

**Defense (13 rebuttals):**

1. **Both rules are evidence-backed by multi-chain corpus convergence.** Rule A: 4 chains × 4 axes (chain 2's N3, chain 4's R3, chain 5's S3, chain 6's T3) plus chain 1's primary failure. Rule B: 7-chain DEFERRED + 5-chain RESEARCH FRONTIER. The for-sure criterion is met strongly.

2. **The judgment-dependence of Rule A's axis identification is mitigated by examples.** The rule's wording includes three illustrative axis pairs (operation-trigger × storage-policy; rule-content × state-condition; policy × discovery-mechanism). These ground the abstraction without locking it. Each example maps to a concrete chain finding's axis.

3. **The judgment-dependence of Rule B's evidence shape is observable.** Multi-source vs single-source is countable (was the candidate generated by multiple mechanisms? does it have multi-chain corpus evidence?). The thresholds are not arbitrary — they map to existing innovate.md mechanism convergence threshold (3+ mechanisms = high confidence).

4. **The cross-document awareness for RESEARCH FRONTIER is captured in the recognition cue.** "Multi-phase architectural work / out-of-inquiry scope" is a self-contained cue. A runner can recognize "this would require building a new system component, not a per-paragraph patch" without specific document references.

5. **Rule A's meta-level convergence IS the right level for the for-sure criterion.** The corpus shows 4 distinct axes (each single-chain) converge on the meta-pattern (axis-coverage at Assembly). The meta-pattern is what the spec encodes; specific axes remain examples. This is exactly what a "domain-agnostic thinking discipline" requires — meta-level abstraction with concrete examples.

6. **The "inherited corridor" phrase in Rule A's wording is cited as illustrative** (where the bias often arises in practice), not as a structural premise of the rule. The rule's mechanism (verify each axis has a variant) operates on the candidate set itself, not on the upstream pipeline. The phrase can be edited if needed; the rule's core is generic.

7. **The user's framing question is "what is missing" — answering with structural completeness is the right level.** A single-rule answer would over-compress the corpus's evidence. The 5-piece assembly directly maps to: (i) the rule wordings (A-1, B-1), (ii) the rejections that preserve for-sure criterion (F-1), (iii) the proof of coverage (V-1), (iv) the user-hypothesis answer (U-1). Each piece serves a distinct role.

8. **The 16-23-line cost is bounded and comparable to sister analyses.** explore.md got ~25 lines, sensemaking.md ~20 lines, decompose.md ~6–10 lines. Innovation getting ~16–23 lines fits the established pattern. Methodology library growth at ~75 lines aggregate across 4 disciplines is structurally reasonable.

9. **Formalizing dispositions doesn't kill intuition** — it gives intuitive judgments a structured vocabulary. The corpus shows chains 1–7 successfully use DEFERRED + RESEARCH FRONTIER intuitively; the rule names what runners are already doing.

10. **DOCUMENTARY OBSERVATION rejection is structurally grounded** (corpus-/protocol-level vs per-inquiry scope), with explicit revival trigger (3+ chains AND per-inquiry-applicable). The 2-chain evidence is below threshold AND the observations are about cross-chain interdependencies (LOOP_DIAGNOSE-specific), not per-inquiry concerns. The rejection's structural reasoning is independent of chain count alone.

11. **The 5-piece assembly maps to distinct concerns**, not redundant coverage. A-1 and B-1 are spec content; F-1 documents what's NOT in spec (filter); V-1 is proof; U-1 is direct user answer. None overlap. Combining them would mix in-spec content with finding-only content.

12. **All 4 critical dimensions pass HIGH.** For-Sure Criterion: HIGH (4-chain cross-cutting for A; 7/5-chain for B). Generic Framing: HIGH (existing vocabulary; illustrative examples). Placement Convention: HIGH (canonical home + appropriate cross-references; no embedded convention). Discipline-Spec Purity: HIGH (caveats in finding only; no new failure modes; extension-not-replacement).

13. **The user's hypotheses are directly answered with evidence in U-1**, completing the inquiry's stated goal. "Allocated compute": REJECTED with concrete evidence (~450 lines per chain). "Paradigm/dimension gap": PARTIALLY SUPPORTED with localization (gap at Assembly + Termination, not at mechanism breadth).

**Collision:**

The strongest prosecution attacks judgment-dependence of axis identification (objection 1) and DOCUMENTARY OBSERVATION rejection on borderline evidence (objection 9). The strongest defense rests on multi-chain corpus convergence, structural justification of all rejections, and discipline-spec purity. The defense survives the strongest prosecution. The judgment-dependence is mitigated by examples and observable cues; the DOCUMENTARY rejection's structural rationale is independent of chain count alone.

**Verification against the four critical dimensions:**

| Critical Dimension | Score | Rationale |
|---|---|---|
| For-Sure Criterion | HIGH | 4-chain cross-cutting (Rule A); 7-chain (Rule B DEFERRED) + 5-chain (Rule B RESEARCH FRONTIER) |
| Generic / Meta-Discipline Framing | HIGH | Uses existing innovate.md vocabulary; illustrative examples ground abstractions; no project-specific terms |
| Placement Convention Applied | HIGH | Rule A canonical home Phase 3 / Test → Assembly Check + cross-reference at Phase 2 / Generate; Rule B canonical home Phase 3 / Test after 5-test table; no multi-surface duplication |
| Discipline-Spec Purity Preserved | HIGH | Caveats and revival triggers in finding only; no new failure modes; no embedded placement convention; extension-not-replacement of existing structure |

**Verification against coverage:**

| Chain | Innovation primary failure / disposition | Caught by Rule A? | Caught by Rule B? |
|---|---|---|---|
| 1 | storage-axis-only candidate set | YES | YES (DEFERRED) |
| 2 | (corrected loop surfaced N3 axis-decoupling) | YES (meta-pattern) | YES (DEFERRED) |
| 3 | first Q-RF emergence | NO (not Rule A's target) | YES (RESEARCH FRONTIER) |
| 4 | phase-conditional axis (R3) | YES | YES (DEFERRED + RESEARCH FRONTIER) |
| 5 | trigger-classifier axis (S3) | YES | YES (DEFERRED + RESEARCH FRONTIER) |
| 6 | discovery-mechanism axis (T3) + Two-Layer Framing | YES (axis); NO (Two-Layer; intentional rejection per F-1) | YES (DEFERRED + RESEARCH FRONTIER); NO (DOCUMENTARY; intentional) |
| 7 | U1 vocabulary-validation; deferred candidates | YES | YES (DEFERRED + RESEARCH FRONTIER) |

Coverage: Rule A catches 6/7 chains' axis-coverage failures; Rule B catches DEFERRED in 7/7 chains and RESEARCH FRONTIER in 5/7 chains. Intentional non-coverage (chain 3 axis-coverage; chains 6+7 DOCUMENTARY) is structurally justified per F-1.

**Verification against secondary dimensions:**

| Dimension | Score |
|---|---|
| Coverage of Corpus Failures | HIGH |
| Implementation Cost | LOW (~16–23 lines; bounded) |
| Speculative-Filter Application | HIGH (6 rejection categories with structural rationale) |
| User Hypothesis Answered | HIGH (compute REJECTED with evidence; paradigm/dimension PARTIALLY SUPPORTED with localization) |
| Non-Ambiguity (will be applied in finding) | HIGH (parenthetical context for `/MVL+`, the 7 mechanisms, etc.) |

**Verdict: SURVIVE.**

Constructive output:

1. ADD to `homegrown/innovate/references/innovate.md` Phase 3 / Test → Assembly Check sub-section: Rule A wording.
2. ADD to `homegrown/innovate/references/innovate.md` Phase 2 / Generate: one-line cross-reference.
3. ADD to `homegrown/innovate/references/innovate.md` Phase 3 / Test, after the 5-test table: Rule B wording.
4. DOCUMENT in finding (not in spec): F-1 rejections + V-1 verification + U-1 user-hypothesis address + caveats/revival triggers.

Risk class: LOW. Evaluation gates:
- Rule A: in next 3 MVL+ runs producing candidate sets with multiple orthogonal axes, the Assembly Check identifies the axes and flags missing coverage.
- Rule B: in next 3 MVL+ runs producing thin-evidence survivors, those survivors are dispositioned as DEFERRED with explicit revival trigger; in next 3 runs producing system-level observations, they are dispositioned as RESEARCH FRONTIER.

If either rule does not fire effectively in the next 3 applicable runs, downgrade to monitoring and re-examine the rule's recognition cues.

## Phase 3.5 — Assembly Check

The combined fix's components reinforce each other:

- A-1 + B-1 cover Innovation's two paradigm-level downstream failures (axis coverage at Assembly + disposition vocabulary at Termination). Distinct sub-surfaces of Phase 3 / Test; non-overlapping.
- F-1 documents what's NOT in the spec — preserves the for-sure criterion's filtering effect.
- V-1 provides per-chain coverage proof.
- U-1 directly answers the user's framing question, completing the inquiry's stated goal.

**Self-applying check (defense against Self-Reference Collapse):** this critique is using td-critique on Innovation's own output. The dimensions were extracted from sensemaking output (constraints, principles, structural points), not generated by critique. The prosecution genuinely tried (10 objections, including objections about over-engineering and judgment-dependence). The defense was tested against the prosecution. No self-reference collapse — external dimensions, adversarial structure preserved.

**Assembly verdict: SURVIVE.**

## Phase 3 — Ranked Verdicts

1. **SURVIVE: Combined fix (A-1 + B-1 + F-1 + V-1 + U-1).** Two rules + filter + verification + user-hypothesis answer. Aggregate ~16–23 lines added to `innovate.md`; remaining content in finding. All 4 critical dimensions HIGH.

2. **REJECT: Speculative additions** — DOCUMENTARY OBSERVATION as 4th disposition; cross-corpus composition; cumulative refinement tracking; 8th generation mechanism; mechanism convergence threshold change; new failure modes (Single-Axis Trap, Inherited Corridor Lock). Each rejected on structural grounds documented in F-1.

3. **DOCUMENT (in finding only):** Single-chain caveats for sub-instances within Rule A's meta-pattern; revival trigger for DOCUMENTARY OBSERVATION (revisit if pattern reaches 3+ chains AND observations become per-inquiry-applicable).

## Coverage Map

Evaluated:
- Combined assembly as a unit (the strongest assembly).
- Per-chain verification: 7 chains × 2 rules = 14 coverage cells; all confirmed (catches + intentional non-catches).
- Per-dimension verification: 4 critical dimensions all HIGH; 5 secondary dimensions all HIGH or LOW (cost) as expected.
- Speculative-filter verification: 6 rejection categories with structural rationale.
- Self-reference defense: dimensions extracted from sensemaking, not generated by critique.

Unexplored but not blocking:
- Whether innovate.md should encode behavior-aware termination (the discipline knowing when its candidate set has reached coverage). Out of scope; no corpus evidence of separate gap; mechanism convergence already addresses this implicitly.
- Whether innovate.md should reference cross-document awareness for RESEARCH FRONTIER recognition. Out of scope; recognition cue is sufficient without document references.

Coverage judgment: sufficient.

## Signal

**TERMINATE with ranked survivor:**

1. SURVIVE: Combined fix (Rule A + Rule B + filter + verification + user-hypothesis address).
2. REJECT: speculative additions (6 categories with structural rationale).
3. DOCUMENT: caveats and revival triggers in finding only.

The user's question is answered: TWO for-sure-missing pieces from `innovate.md` (Rule A at Assembly Check; Rule B at Termination), expressed in generic / meta-discipline language, placed per the placement convention, with discipline-spec purity preserved. Aggregate ~16–23 lines added. The user's two hypotheses are directly answered with evidence (compute REJECTED; paradigm/dimension PARTIALLY SUPPORTED with localization at Assembly + Termination layers, NOT at mechanism breadth).

## Convergence Telemetry

- **Dimension coverage:** complete. 9 dimensions (4 critical + 5 secondary) all evaluated; no missing axes detected.
- **Adversarial strength:** STRONG. 10 prosecution objections (including over-engineering, judgment-dependence, borderline evidence concerns); 13 defense rebuttals (each addressing the strongest prosecution). The strongest prosecution did not destroy the defense; the defense survived.
- **Landscape stability:** STABLE. The viable region is well-defined; the dead region's boundary clear; the boundary region (DOCUMENTARY OBSERVATION) is explicitly resolved by Sensemaking's Ambiguity 1.
- **Clean SURVIVE:** YES. The combined fix passes all 4 critical dimensions HIGH with no caveats on critical dimensions.
- **Failure modes observed:**
  - Wrong Dimensions: NO — dimensions extracted from sensemaking output, validated against the for-sure criterion + placement convention + purity principles.
  - Rubber-Stamping: NO — 10 prosecution objections include genuinely strong attacks (judgment-dependence, over-engineering).
  - Nitpicking: NO — defense was constructed for every objection; severity-weighted dimensions distinguish critical from secondary.
  - Dimension Blindness: NO — Phase 0 covered for-sure criterion + generic framing + placement + purity + coverage + cost + filter + user-hypothesis + non-ambiguity (9 dimensions).
  - False Convergence: NO — clean SURVIVE with no critical-dimension caveats.
  - Evaluation Drift: NO — dimensions and weights fixed in Phase 0; consistent with sister-analyses' established weighting.
  - Self-Reference Collapse: NO — dimensions extracted from external sensemaking output; adversarial structure preserved; prosecution genuinely tried.
- **Overall: PROCEED.**
