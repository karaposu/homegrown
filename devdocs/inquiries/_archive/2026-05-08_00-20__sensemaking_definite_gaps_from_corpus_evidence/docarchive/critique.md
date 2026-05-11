# Critique: Sensemaking Discipline - Definite Gaps From Corpus Evidence

## Phase 0 — Dimensions With Weights

### 1. For-Sure Criterion Met - 25%

**Critical.** Each rule must have failure-of-absence + success-of-presence evidence in the corpus. Multi-source convergence preferred.

### 2. Generic / Meta-Discipline Framing - 20%

**Critical.** Rules use existing `sensemaking.md` vocabulary; no project-specific terms.

### 3. Placement Convention Applied - 20%

**Critical.** Each rule has ONE canonical home + one-line cross-reference at corresponding failure mode. Per `enes/discipline_rule_placement.md`.

### 4. Discipline-Spec Purity Preserved - 15%

**Critical.** No embedded placement convention; no maintenance-time meta-content. Per `2026-05-07_23-27` decision.

### 5. Coverage Of Corpus Failures - 10%

Both rules together must catch all 7 chains' Sensemaking failures. Verifiable per V-1.

### 6. Implementation Cost - 5%

Aggregate ≤ ~25 lines added to `sensemaking.md`.

### 7. Speculative-Filter Application - 5%

Rejected additions explicitly documented with rationale.

**Critical dimensions:** For-Sure Criterion, Generic Framing, Placement Convention, Discipline-Spec Purity.

## Phase 1 — Fitness Landscape

### Viable Region

Rules that:
- Pass for-sure criterion (failure-of-absence + success-of-presence; multi-source convergence preferred).
- Use generic / meta-discipline language.
- Have one canonical home + one-line cross-reference at corresponding failure mode.
- Don't embed the placement convention.
- Together catch all corpus failures.
- Aggregate cost ~25 lines.

### Dead Region

Rules that:
- Are speculative ("might improve" rather than "definitely missing per evidence").
- Use project-specific vocabulary.
- Multi-surface duplication (no canonical home).
- Embed the placement convention.
- Don't catch corpus failures.
- Wholesale restructuring of `sensemaking.md`.

### Boundary Region

- Rule B's single-chain evidence (boundary; passes the criterion via explicit before/after contrast but with single-chain caveat).
- Rule A's Phase 5 sub-aspects (illustrative-not-exhaustive — boundary between rule wording and exhaustive enumeration; resolved at Sensemaking Ambiguity 1).

## Phase 2 — Candidate Evaluation

### Candidate: Combined Fix (A1 + A2 + B1 + F1 + V1 from Innovation)

**Prosecution:**

Rule A's wording is long (12-18 lines) — bloats the Phase 3 / Ambiguity Collapse sub-section. Rule A's Phase 5 sub-aspects (proxy-vs-structural + discoverability + user-language alignment) are three test predicates listed as illustrative; future sub-aspects may emerge, requiring rule updates. The "load-bearing concept" qualifier is judgment-dependent (what counts as "materially affects downstream stages"?).

Rule B has single-chain evidence (chain 4 only). Single-chain primary-cause technically passes the for-sure criterion, but cross-chain reinforcement would be stronger. The seven-perspective list at Phase 2 already exists; adding an 8th conditional perspective grows the list by ~14%.

The cross-references at Premature Stabilization and Perspective Blindness are one-line each — but they ARE additions to existing failure-mode sub-sections, slightly bloating those sections.

The placement at the Execute section means the rules are in the runner-facing procedure. A reader of the Process Model section (lines 61-95 of current `sensemaking.md`) — the conceptual description of the 5 phases — would NOT see the rules directly. The two-sets-of-phase-numbers structure of `sensemaking.md` (Process Model phases vs Execute section phases) creates this risk.

**Defense:**

Rule A's length is proportional to its evidence base — it consolidates 6 chains × 5 layers × multiple sub-aspects into one rule. Compressing further loses the rule's coverage clarity. The illustrative-examples shape is exactly what Sensemaking Ambiguity 1 resolved (future-extensibility preserved; corpus-trail honored).

The "load-bearing concept" qualifier is judgment-dependent but bounded — the criterion ("removing it would change the loop's verdict") is observable in the runner's output. Plus: Phase 3 already has the structured-entry template (Strongest counter-interpretation, Why the counter-interpretation fails, etc.) — Rule A integrates with this existing structure.

Rule B's single-chain evidence is mitigated by the explicit before/after contrast (chain 4's prior loop's six perspectives all applied at steady-state level; chain 4's corrected loop's six perspectives explicitly applied phase reasoning at every perspective). Single-chain + before/after contrast is the for-sure criterion threshold (per the `2026-05-07_20-35` finding's resolution).

The seven-perspective list growing to eight when phase-dependent rules apply is conditional — the 8th perspective only fires when its trigger is met. Permanent growth is one perspective; activation depends on inquiry content.

The cross-reference at Premature Stabilization (one line) and the cross-reference at Perspective Blindness (one line) are MINIMAL bloat (2 total lines). Far less than embedding the rules at multiple surfaces would cost.

The two-sets-of-phase-numbers concern: the corpus consistently uses Execute-section phase labels (Phase 1 Cognitive Anchor Extraction, Phase 2 Perspective Checking, Phase 3 Ambiguity Collapse, Phase 5 Conceptual Stabilization). Reader of the Process Model section sees the conceptual description; reader of the Execute section sees the runner procedure with rules. The two sections serve different audiences (conceptual vs procedural). The rules belong with the procedure.

**Verification against the four critical dimensions:**

- For-Sure Criterion: Rule A has 6-chain convergence (HIGHEST in corpus). Rule B has single-chain primary-cause with explicit before/after contrast (passes criterion). HIGH.
- Generic Framing: both rules use existing `sensemaking.md` vocabulary (load-bearing concept, ambiguity-collapse pair, Phase 1-5, Premature Stabilization, Perspective Blindness, perspectives, anchors). HIGH.
- Placement Convention: each rule has ONE canonical home (Execute section's Phase 3 for Rule A; Execute section's Phase 2 for Rule B) + one-line cross-reference at the corresponding failure mode. HIGH.
- Discipline-Spec Purity: no embedded "Conventions" sub-section; no placement-convention text in `sensemaking.md`. The convention itself stays at `enes/discipline_rule_placement.md`. HIGH.

**Verification against coverage:**

Per V-1 from Innovation: all 7 chains' Sensemaking failures are covered between Rule A (chains 1-3 + 5-7) and Rule B (chain 4). 100%.

**Dimensions:**

- For-Sure Criterion: HIGH.
- Generic Framing: HIGH.
- Placement Convention Applied: HIGH.
- Discipline-Spec Purity Preserved: HIGH.
- Coverage Of Corpus Failures: HIGH (100%).
- Implementation Cost: LOW (~17-25 lines).
- Speculative-Filter Application: HIGH (Q-RF + U9 + others rejected with rationale).

**Verdict: SURVIVE.**

Constructive output:

ADD to `homegrown/sense-making/references/sensemaking.md`:
- Rule A as a new sub-section "Phase 3 — Ambiguity Collapse: Load-Bearing Concept Test" within the Execute section's Phase 3 — Ambiguity Collapse area, after the existing structured-entry template.
- Rule B as a new sub-section "Phase 2 — Perspective Checking: Phase / Calibration-State Perspective" within the Execute section's Phase 2 — Perspective Checking area, after the existing seven-perspective list.
- One-line cross-reference at Premature Stabilization failure mode pointing to Rule A.
- One-line cross-reference at Perspective Blindness failure mode pointing to Rule B.

Risk class: low. Evaluation gates: in next 3 MVL+ runs, Rule A fires when load-bearing concepts are stabilized; Rule B fires when phase-dependent rules are involved. Verify zero recurrence of the 6+1 chain-evidenced failures.

## Phase 3.5 — Assembly Check

The combined fix's components reinforce each other:
- A1 (Rule A core) provides the load-bearing-concept-test rule.
- A2 (cross-reference at Premature Stabilization) lets a reader at the failure mode discover the rule.
- B1 (Rule B + cross-reference at Perspective Blindness) provides the phase-perspective rule.
- F1 (speculative filter) preserves the for-sure criterion's epistemic standard in this finding's documentation.
- V1 (verification) confirms 100% coverage.

Self-applying: this finding obeys the placement convention by living in `devdocs/inquiries/` (project documentation, not runtime-loaded), not inside `sensemaking.md` itself. The convention applies recursively.

Assembly verdict: SURVIVE.

## Phase 3 — Ranked Verdicts

1. **SURVIVE: Rule A** — Load-Bearing Concept Test at Phase 3 / Ambiguity Collapse. Strongest cross-chain claim across the corpus (6-chain convergence). Evidence quality: HIGHEST.

2. **SURVIVE: Rule B** — Phase / Calibration-State Perspective at Phase 2 / Perspective Checking. Single-chain primary-cause with before/after contrast. Evidence quality: HIGH.

3. **SURVIVE: Cross-references** at Premature Stabilization (for Rule A) and at Perspective Blindness (for Rule B). One-line each; navigation pointers per the placement convention.

4. **REJECT: Q-RF + U9 + other speculative additions.** Per chain findings; preserved as documentation, not as rules.

## Coverage Map

Evaluated:
- Combined fix (A1 + A2 + B1 + F1 + V1) as a unit.
- Per-chain verification: 7/7 chains covered.
- Per-dimension verification: 4 critical dimensions all HIGH.
- Speculative-filter verification: Q-RF + U9 + others explicitly rejected with rationale.
- Discipline-spec-purity verification: no embedded convention; rules at runtime-relevant placements only.

Unexplored but not blocking:
- Refining `sensemaking.md`'s two-sets-of-phase-numbers structure (Process Model phases vs Execute section phases). Out of scope; this finding adds rules within the existing structure rather than refactoring.
- Optional cross-references at Phase 1 / Phase 5 layers for Rule A discoverability. Per Sensemaking Ambiguity 2: NOT added at this run (purity preference); can be added later if discoverability fails.
- Q-RF / U9 promotion to Sensemaking-side candidates. Out of scope per chain findings.

Coverage judgment: sufficient.

## Signal

TERMINATE with ranked survivors:
1. SURVIVE: Rule A (canonical home Phase 3; cross-reference at Premature Stabilization).
2. SURVIVE: Rule B (canonical home Phase 2; cross-reference at Perspective Blindness).
3. SURVIVE: Both cross-references (one-line each).
4. REJECT: Q-RF + U9 + other speculative additions.

The user's question is answered: TWO for-sure-missing pieces from `sensemaking.md`, expressed in generic / meta-discipline language, placed per the placement convention, with discipline-spec purity preserved. Aggregate ~17-25 lines added.

## Convergence Telemetry

- Dimension coverage: complete.
- Adversarial strength: STRONG.
- Landscape stability: STABLE.
- Clean SURVIVE: yes; both rules.
- Failure modes observed: none.
- **Overall: PROCEED.**
