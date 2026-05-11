---
status: active
---
# Finding: TD-Critique Discipline — Definite Gaps From Corpus Evidence

## Question

From `_branch.md`: across the seven LOOP_DIAGNOSE chain findings dated 2026-05-07 (chain 1 at `2026-05-07_15-01` through chain 7 at `2026-05-07_20-02`; LOOP_DIAGNOSE is the diagnostic protocol at `homegrown/protocols/loop_diagnose.md` that runs an MVL+ inquiry — the Extended Cognitive Loop with Exploration → Sensemaking → Decomposition → Innovation → Critique — over a correction chain to surface candidate methodology improvements) AND the corresponding chain inquiries' `docarchive/critique.md` artifacts (the actual Critique discipline outputs produced during each chain's MVL+ execution), what is **for-sure missing** from the Structural Critique discipline spec at `homegrown/td-critique/references/td-critique.md`?

"For-sure missing" means the corpus evidence demonstrably shows the discipline is missing the rule (failure-of-absence + success-of-presence; not "might improve"). The rule must be expressed in generic / meta-discipline language and placed per the placement convention at `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` (one canonical home + one-line cross-references at non-canonical surfaces; the convention itself is **not** embedded in the spec, per the prior `2026-05-07_23-27` decision on discipline-spec purity).

This is the **fifth and final** sister analysis in the series. The prior four produced two rules each for `explore.md` and `sensemaking.md`, one rule for `decompose.md`, and two rules for `innovate.md`.

## Finding Summary

- **Two rules are for-sure missing** from `td-critique.md`. Both correspond to corpus-level cross-cutting promotion events that occurred in the LOOP_DIAGNOSE corpus but were never encoded in the discipline spec.

- **Rule A — Project-specific risk dimension check at Phase 0 (Dimension Construction), validate-dimensions sub-step.** When the candidate set being evaluated involves project artifacts, operations, or state, the dimension list must include at least one project-specific risk dimension capturing the project's documented risk axes. The default dimensions (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) are content-oriented; project-specific risk dimensions are mechanism-oriented (across LOOP_DIAGNOSE chains, four such dimensions surfaced as load-bearing for specific candidate types: duplicate-derivable-state, explicit-culture-fit, operation-parsimony, phase-fit).

- **Rule B — Multi-axis prosecution depth check at Phase 2 (Adversarial Evaluation), Prosecution sub-section.** When constructing prosecution against a candidate, in addition to dimension-level objections, explicitly construct prosecution at the appropriate depth-axes when applicable — user-perspective objection (addresses user-stated concerns at the level expressed); specific failure-case scenario (concrete edge case where the candidate's logic might fail); specification-gap probe (for candidates with runtime-determined behavior, probe whether load-bearing concepts have specified determination mechanisms). The runner picks the depth-axes most relevant to the candidate's risk surface.

- **Why these are for-sure missing (corpus evidence):**
  - Rule A: 4 chains × 4 distinct project-specific dimensions converge on the meta-pattern (chain 1 duplicate-derivable-state; chain 2 explicit-culture-fit; chain 3 operation-parsimony; chain 4 phase-fit). Promoted at chain 3 as M6's Critique sub-rule.
  - Rule B: 3 chains × 3 distinct depth-axis sub-types converge (chain 3 user-perspective; chain 5 failure-case; chain 6 specification-gap). Promoted at chain 6 as TP3.
  - **Both promotions are corpus-level events that were never encoded in `td-critique.md`.** This finding closes that gap.

- **Canonical homes (per the placement convention):**
  - Rule A canonical home: `homegrown/td-critique/references/td-critique.md`, Phase 0 (Dimension Construction), validate-dimensions sub-step. Cross-reference: at Dimension Blindness failure mode (failure mode #4), one-line pointer.
  - Rule B canonical home: same file, Phase 2 (Adversarial Evaluation), Prosecution sub-section, after the existing 4 prosecution prompts. Cross-reference: at Rubber-Stamping failure mode (failure mode #2), one-line pointer.

- **Aggregate cost:** ~10–15 lines added to `td-critique.md`. **Smallest aggregate cost among the five sister analyses** (vs. explore.md ~25 lines; sensemaking.md ~20 lines; decompose.md ~6–10 lines; innovate.md ~16–23 lines).

- **Self-Reference Collapse defense.** This analysis evaluates Critique using Critique itself — a meta-recursive context. td-critique.md's own failure mode #7 names this risk. The defense, per failure mode #7's prescription, is external grounding: dimensions for this analysis come from sensemaking output + 7-chain corpus evidence (not from td-critique.md); the corpus is external empirical data; the prosecution genuinely tested 10 objections and the defense survived. Self-Reference Collapse mitigated.

- **Speculative additions explicitly rejected:** cross-corpus accumulator extensions / cumulative refinement tracking (LOOP_DIAGNOSE-protocol-specific, not generic discipline content); new failure modes (positive-form rules at process steps are sufficient; existing Dimension Blindness and Rubber-Stamping failure modes provide clean cross-reference targets); DEFERRED disposition at Critique's verdict layer (Critique already has SURVIVE/REFINE/KILL with constructive output; the corpus's emergent DEFERRED applies to Innovation's output disposition, covered by the prior innovate.md sister analysis); burden-of-proof shift extensions (current low-stakes vs. high-stakes mechanism works); accumulator field additions (no corpus evidence); default dimensions list extensions with project-specific examples (would be project-specific bloat; placement convention prefers canonical home + cross-reference).

- **Single-chain caveats** for individual sub-instances within each rule's meta-pattern (each specific dimension and depth-axis sub-type is single-chain; the meta-patterns are 4-chain and 3-chain) documented in this finding's Refinement Triggers section, NOT in `td-critique.md` — discipline-spec purity preserved per the prior `2026-05-07_23-27` decision.

## Finding

### 1. The two for-sure-missing rules

**Rule A — Project-specific risk dimension check.** Proposed addition to `homegrown/td-critique/references/td-critique.md` at Phase 0 (Dimension Construction), integrated into the validate-dimensions sub-step:

> **Project-specific risk dimension check.** When the candidate set being evaluated involves project artifacts, operations, or state, the dimension list must include at least one project-specific risk dimension that captures the project's documented risk axes. The default dimensions (Correctness, Coherence, Feasibility, Completeness, Robustness, Elegance) are content-oriented; project-specific risk dimensions are mechanism-oriented (e.g., across recent inquiries: duplicate-derivable-state, explicit-culture-fit, operation-parsimony, phase-fit have each been the load-bearing axis for specific candidate types). A dimension list that omits project-specific risk axes when the candidate set involves project artifacts/operations/state is incomplete; the validate-dimensions sub-step must explicitly check this and flag any missing axes for inclusion.

**Rule B — Multi-axis prosecution depth check.** Proposed addition to the same file at Phase 2 (Adversarial Evaluation), Prosecution sub-section, as a follow-on to the existing 4 prosecution prompts:

> **Multi-axis prosecution depth check.** In addition to dimension-level objections (what dimensions does this candidate fail?), construct prosecution at the appropriate depth-axes when applicable:
>
> - **User-perspective objection** — when the inquiry's source input includes user-stated concerns (e.g., a `_branch.md` Source Input section), construct at least one objection that addresses one of those concerns at the level the user expressed. Dimension-level objections without a corresponding user-perspective objection are shallow when user concerns are observable.
> - **Specific failure-case scenario** — for candidates with conditional or trigger-based behavior, construct at least one concrete edge case where the candidate's logic might fail to prevent the issue it's meant to prevent. Abstract "could fail" prosecution is weaker than concrete failure-case construction.
> - **Specification-gap probe** — for candidates whose runtime behavior depends on load-bearing concepts (e.g., "skip if X exists"), probe whether the candidate specifies HOW the load-bearing concept's runtime state is determined. Candidates that presuppose the determination without specifying the mechanism have an operational gap.
>
> The runner picks the depth-axes most relevant to the candidate's risk surface; not every axis applies to every candidate. Prosecution that constructs only dimension-level objections without considering relevant depth-axes is shallow.

### 2. The cross-references

Append to the existing "How to prevent" line at Dimension Blindness failure mode (failure mode #4) in `td-critique.md`:

> For project-specific risk axis coverage when the candidate set involves project artifacts/operations/state, see Phase 0 / Dimension Construction → Project-specific risk dimension check.

Append to the existing "How to prevent" line at Rubber-Stamping failure mode (failure mode #2):

> For multi-axis prosecution depth (user-perspective, failure-case scenario, specification-gap probe), see Phase 2 / Adversarial Evaluation → Prosecution → Multi-axis prosecution depth check.

Each cross-reference is one line. They point readers at the failure modes toward the canonical homes. The rules themselves are not duplicated.

### 3. Why this placement

The placement convention from `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` (Operation-or-Step-First with Scope-Of-Application) routes a rule to the surface where it fires.

- **Rule A** fires during Phase 0 (Dimension Construction), specifically within the validate-dimensions sub-step (which currently asks generically "Are these the right axes for this problem? Is anything missing?"). Rule A specializes that check for project-specific risk axis coverage when applicable. Adding a new Phase 0 step was considered but rejected — the existing sub-step already covers "anything missing" generically; specializing it within the existing sub-step is structurally cleaner than expanding Phase 0 from 5 sub-steps to 6.

- **Rule B** fires during Phase 2 (Adversarial Evaluation), specifically within the Prosecution sub-section (which currently gives 4 generic prompts: "What's the killer objection? Under what conditions does this fail catastrophically? What assumption, if wrong, destroys the entire approach? What's the worst realistic outcome?"). Rule B adds depth-axis enumeration alongside these prompts. Placing Rule B at Phase 0 was considered but rejected — Phase 0 is about extraction (build the framework), Phase 2 is about evaluation (apply prosecution + defense + collision); depth-axes are evaluation-time concerns.

The cross-references at Dimension Blindness (for Rule A) and Rubber-Stamping (for Rule B) are clean structural fits. Both failure modes describe the failure that the corresponding rule prevents — Dimension Blindness is about the dimension list missing a risk axis; Rubber-Stamping is about prosecution being too weak. The cross-references give readers at the failure modes a navigation pointer to the prevention rule.

### 4. Why the corpus evidence is strong enough

The corpus's seven LOOP_DIAGNOSE chain `docarchive/critique.md` files are the new evidence layer this analysis uses — what Critique actually produced in each chain. Each chain's Critique applies td-critique.md fully (5–6 weighted dimensions extracted from problem context; full prosecution + defense + collision per candidate; assembly check; telemetry). The corpus's OWN Critique runs are well-structured.

The for-sure-missing pieces are exposed by the chain `finding.md` files, which identify Critique-side failures in PRIOR loops being diagnosed:

**Rule A's evidence: 4 chains × 4 distinct project-specific dimensions.**

| Chain | PRIOR loop's missing dimension | Maintenance candidate proposed |
|---|---|---|
| 1 (`2026-05-07_15-01`) | duplicate-derivable-state (mechanism-level redundancy) | M3 — duplicate-derivable-state dimension |
| 2 (`2026-05-07_15-35`) | explicit-culture-fit | N4 — explicit-culture-fit dimension |
| 3 (`2026-05-07_16-28`) | operation-parsimony | O2 — operation-parsimony dimension |
| 4 (`2026-05-07_16-57`) | phase-fit | R2 — phase-fit dimension |

Each candidate names a different specific dimension. The meta-pattern they converge on: when evaluating candidates that involve project artifacts/operations/state, the dimension list should include at least one project-specific risk dimension. Chain 3's M6 PROMOTION codified this at protocol level: *"when evaluating candidates involving project artifacts, operations, or state, include at least one project-specific risk dimension that captures the project's documented risk axes."* Rule A is the generic version of this corpus-promoted rule.

**Rule B's evidence: 3 chains × 3 distinct depth-axis sub-types.**

| Chain | PRIOR loop's prosecution depth gap | Maintenance candidate proposed |
|---|---|---|
| 3 | user-perspective objection missing | O3 — Critique prosecution-strength check (user-perspective) |
| 5 (`2026-05-07_18-24`) | specific failure-case scenario missing | S2 — Critique prosecution failure-case construction rule |
| 6 (`2026-05-07_19-08`) | specification-gap probe missing | T2/D — caught via TP3 PROMOTION |

Each names a different specific depth-axis. The meta-pattern: when constructing prosecution, in addition to dimension-level objections, construct prosecution at the appropriate depth-axes when applicable. Chain 6's TP3 PROMOTION codified this at protocol level. Rule B is the generic version.

Both meta-patterns have multi-chain convergence above the corpus's own 3+ cross-cutting promotion threshold (4 chains for Rule A; 3 chains for Rule B). The for-sure criterion is met clearly.

### 5. Why specific candidates were rejected

Six categories of speculative additions were considered and rejected on structural grounds:

- **Cross-corpus accumulator extensions / cumulative refinement tracking.** The corpus uses these (M6 evolution events; consolidation review triggers across chains), but they are LOOP_DIAGNOSE-protocol-specific. Generic discipline specs encode per-inquiry rules; corpus-level tracking belongs at protocol level. Same logic that rejected cross-corpus composition in the prior innovate.md sister analysis.

- **New failure modes** (Project-Risk-Blindness; Prosecution-Depth-Trap). Rejected because positive-form rules at Phase 0 and Phase 2 are sufficient. The existing failure modes (Dimension Blindness; Rubber-Stamping) provide clean cross-reference targets — better fits than in some sister analyses where new failure modes were also rejected. Sister-analysis precedent (none of the four prior analyses introduced new failure modes from this work).

- **DEFERRED disposition at Critique's verdict layer.** Critique already has SURVIVE / REFINE / KILL with constructive output; the corpus's emergent DEFERRED category applies to **Innovation's output disposition** (encoded by the prior innovate.md sister analysis's Rule B), not to Critique's verdict layer. Critique's verdicts about candidates remain three; Innovation's dispositions about its own outputs are now also three.

- **Burden-of-proof shift extensions** (currently low-stakes vs. high-stakes). The corpus uses this mechanism and it works.

- **Accumulator field additions.** No corpus evidence of accumulator-level failures.

- **Default dimensions list extensions with project-specific examples** (e.g., adding "duplicate-derivable-state" to the default dimensions table). Rejected because this would be project-specific bloat. The placement convention prefers canonical home (validate-dimensions sub-step) + one-line cross-reference, not example-list expansion.

These rejections preserve the for-sure criterion's epistemic standard and the discipline-spec purity principle.

### 6. Per-chain coverage verification

The following table verifies that Rule A and Rule B together catch the corpus's primary Critique-side failure patterns. Intentional non-coverage (where a rule deliberately doesn't fire) is structurally justified.

| Chain | Critique-side hypothesis (in PRIOR loop) | Caught by Rule A? | Caught by Rule B? |
|---|---|---|---|
| 1 | Hypothesis C — mechanism-level redundancy missing (duplicate-derivable-state) | YES — Rule A fires | NO (no prosecution-depth gap; intentional) |
| 2 | Critique missing project-specific dimension (explicit-culture-fit) | YES — Rule A fires | NO (no prosecution-depth gap) |
| 3 | C-dim (operation-parsimony missing) + C-pros (user-perspective prosecution missing) | YES for C-dim | YES for C-pros — Rule B's user-perspective sub-axis fires |
| 4 | Missing phase-fit dimension | YES — Rule A fires | NO (no prosecution-depth gap) |
| 5 | Prosecution at abstract level (failure-case missing) | NO (no dimension gap) | YES — Rule B's failure-case scenario sub-axis fires |
| 6 | Missing specification-gap prosecution | NO (no dimension gap) | YES — Rule B's specification-gap probe sub-axis fires |
| 7 (`2026-05-07_20-02`) | No primary Critique failure; U7 PENDING (TP3 vocabulary-naturalness 4th sub-axis) | N/A | PENDING — would extend Rule B if a 4th sub-axis pattern accumulates (intentional non-coverage; awaiting TP3 effectiveness check) |

Rule A catches 4/7 chains' Critique-side dimension blindness failures (chains 1, 2, 3, 4 — exactly the P2 family). Rule B catches 3/7 chains' Critique-side prosecution-depth failures (chains 3, 5, 6 — exactly the P3 family). Chain 7's U7 is PENDING — the corpus is monitoring whether a 4th depth-axis sub-type accumulates; if so, Rule B's wording accommodates extension via the "appropriate depth-axes when applicable" disclaimer.

### 7. Self-Reference Collapse defense (meta-recursion)

This analysis evaluates Critique's spec using Critique's discipline. td-critique.md's existing failure mode #7 names this risk: *"When critique is used to evaluate critique itself (self-improvement, discipline development), the evaluation can become circular. The criteria for evaluating critique are produced by critique, leading to a system that validates itself regardless of quality."*

The defense, per failure mode #7's prescription (*"bring in external reference points: empirical evidence... cross-discipline evaluation... and human judgment"*), is **3-pronged external grounding**:

- **Empirical:** the 7-chain LOOP_DIAGNOSE corpus is external empirical data. Each chain has a finding.md (synthesized by the chain's full pipeline) and a docarchive/critique.md (the actual Critique output during that chain). The corpus shows actual Critique-side failures (P2 family at 4 chains; P3 family at 3 chains) that were independently identified by chain findings, not generated by this analysis.

- **Cross-discipline:** the dimensions used for THIS analysis (For-Sure Criterion 25%, Generic Framing 15%, Placement Convention 15%, Discipline-Spec Purity 15%, Coverage 10%, Implementation Cost 5%, Speculative-Filter 5%, Self-Reference Collapse Defense 5%, Non-Ambiguity 5%) come from the inquiry's own structural requirements (sensemaking output's constraints + foundational principles + corpus evidence) — NOT generated from td-critique.md's own framework.

- **Adversarial structure preserved:** the prosecution genuinely tested 10 objections (judgment-dependence of Rule A's trigger; project-specificity of Rule B's `_branch.md` example; single-chain sub-instance evidence base; meta-recursion risk; aggregate cost across the methodology library). The defense survived adversarially with 12 rebuttals. No rubber-stamping.

Self-Reference Collapse mitigated. The analysis's verdict is grounded externally, not circularly.

### 8. The complete series — closing the methodology library gap analysis

This is the fifth and final analysis in a series across the homegrown thinking disciplines:

- `explore.md` (sister analysis at `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md`): two rules — Type-Aware Probe + Contextual Surround Pre-Scan.
- `sensemaking.md` (sister at `devdocs/inquiries/2026-05-08_00-20__sensemaking_definite_gaps_from_corpus_evidence/finding.md`): two rules — Load-Bearing Concept Test + Phase / Calibration-State Perspective.
- `decompose.md` (sister at `devdocs/inquiries/2026-05-08_00-50__decompose_definite_gaps_from_corpus_evidence/finding.md`): one rule — Determination-Mechanism Piece Check.
- `innovate.md` (sister at `devdocs/inquiries/2026-05-08_03-00__innovate_definite_gaps_from_corpus_evidence/finding.md`): two rules — Axis Coverage Check + Output Disposition Categories.
- `td-critique.md` (this finding): two rules — Project-Specific Risk Dimension Check + Multi-Axis Prosecution Depth Check.

**Total: 9 rules across 5 disciplines, all evidence-backed by the same 7-chain LOOP_DIAGNOSE corpus.** The methodology library now has:

- All 5 Extended Cognitive Loop disciplines analyzed under a consistent for-sure criterion.
- Multi-chain corpus convergence as the primary evidence threshold.
- Cross-discipline coordination preserved (e.g., this analysis's Rule B specification-gap probe relates to decompose.md's just-added Determination-Mechanism Piece Check, but at different surfaces — Critique's prosecution vs. Decomposition's Q-tree completeness; both can fire on the same candidate type without redundancy).
- Two corpus-level promoted rules (M6 and TP3) now codified in spec, making their effect portable beyond LOOP_DIAGNOSE.

The series closes.

## Next Actions

### MUST

- **What:** Apply Rule A (Project-specific risk dimension check) to `homegrown/td-critique/references/td-critique.md` at Phase 0 (Dimension Construction), within the validate-dimensions sub-step; append the one-line cross-reference at Dimension Blindness failure mode (#4).
- **Who:** User-confirmed surgical edit (matching the pattern from the four prior sister edits).
- **Gate:** when the user confirms.
- **Why:** Without Rule A, future Critique runs evaluating candidates with project artifacts/operations/state will not have the explicit project-specific risk axis coverage check, and may repeat the P2-family failure pattern observed in chains 1–4.

- **What:** Apply Rule B (Multi-axis prosecution depth check) to the same file at Phase 2 (Adversarial Evaluation), Prosecution sub-section, after the existing 4 prosecution prompts; append the one-line cross-reference at Rubber-Stamping failure mode (#2).
- **Who:** User-confirmed surgical edit.
- **Gate:** when the user confirms.
- **Why:** Without Rule B, future Critique runs constructing prosecution against candidates with applicable depth-axes (user concerns observable; conditional behavior; runtime-determined behavior) will not systematically construct depth-axis prosecution, and may repeat the P3-family failure pattern observed in chains 3, 5, 6.

### COULD

- **What:** Re-examine the corpus after a few more LOOP_DIAGNOSE chains complete, to see whether chain 7's PENDING U7 (TP3 vocabulary-naturalness 4th sub-axis) accumulates to a 4th depth-axis sub-type that should be added to Rule B.
- **Who:** User decision (and any future analyst running this kind of methodology audit).
- **Gate:** observable — when 3+ chains surface vocabulary-validation prosecution-depth failures.
- **Why:** Rule B's wording accommodates a 4th sub-axis via the "appropriate depth-axes when applicable" disclaimer; if a 4th pattern accumulates, the rule's example list could be extended without rewriting the rule's structure.

### DEFERRED

- **What:** Consider promoting cross-discipline coordination rules (e.g., explicit cross-references between decompose.md's Determination-Mechanism Piece Check and td-critique.md's Rule B specification-gap probe).
- **Gate:** Observable — when methodology-library users report friction at the cross-discipline coordination layer (e.g., a user investigating a runtime-determined-trigger issue doesn't know whether to look at Decomposition or Critique guidance).
- **Why (if revived):** Cross-discipline references could improve discoverability without violating discipline-spec purity, but the current rules already point to the same underlying concept (load-bearing concepts whose use depends on runtime determination) at different surfaces. Premature coordination rules add maintenance overhead without clear benefit until friction is observed.

## Reasoning

This finding's "for-sure missing" verdict comes from running the Extended Cognitive Loop (Exploration → Sensemaking → Decomposition → Innovation → Critique) over the seven LOOP_DIAGNOSE chain findings AND the chain inquiries' `docarchive/critique.md` artifacts.

**Exploration** mapped three regions: (A) the current `td-critique.md` spec content, (B) what Critique produced in each chain (the 7 docarchive critique files), (C) Critique-side failures the chain findings identify in PRIOR loops. The exploration's signal-first entry point probed the cross-cutting promotion events directly: M6's Critique sub-rule (chain 3 promotion; 4-chain P2 family) and TP3 (chain 6 promotion; 3-chain P3 family). Both are corpus-level promoted but neither is in spec. Frontier converged stable; jump scan revealed all Critique-side failures across 7 chains map to either the dimension-blindness (Rule A) or the prosecution-depth (Rule B) meta-pattern.

**Sensemaking** stabilized the answer through six Sense Versions. Five ambiguities collapsed: (1) Rule A placement at validate-dimensions sub-step (not a new Phase 0 step); (2) Rule B placement at Phase 2 / Prosecution (not Phase 0); (3) cross-references at failure modes only (not multi-surface); (4) caveats in finding only (per discipline-spec purity); (5) Self-Reference Collapse defense in finding's Reasoning (not in rules' wording).

**Decomposition** partitioned the answer into five pieces (A-1: Rule A; B-1: Rule B; F-1: filter doc; V-1: per-chain verification; SR-1: Self-Reference Collapse defense), validated bottom-up (22 atoms all mapping cleanly), and self-evaluated all 7 dimensions PASS. The new Determination-Mechanism Piece Check (just added to decompose.md in the prior sister inquiry) was applied: the Q-tree has no load-bearing concept whose use depends on a runtime determination — passes.

**Innovation** generated concrete wording. Five tests passed for both rules. Mechanism independence: 5 mechanisms converge on Rule A; 6 mechanisms converge on Rule B. Convergence HIGH. Self-applying check: this Innovation phase produced both ACTIONABLE survivors (A-1, B-1) and DOCUMENTATION pieces (F-1, V-1, SR-1) — illustrating innovate.md's just-applied Rule B (output disposition categories) in its own output structure.

**Critique** evaluated against 9 dimensions with weights including a dedicated Self-Reference Collapse Defense dimension. Verdict: SURVIVE. All 4 critical dimensions HIGH. Adversarial strength STRONG (10 prosecution objections including project-specificity, judgment-dependence, meta-recursion; 12 defense rebuttals). Self-Reference Collapse defended via 3-pronged external grounding (empirical corpus + cross-discipline dimensions + adversarial structure preserved). Convergence STABLE. Clean SURVIVE.

**Significant kills** (each rejected with structural rationale, preserved here for transparency):

- **A unified "Adversarial Coverage" rule** combining Rule A and Rule B. Considered briefly. Rejected because the two rules fire at different phases (Phase 0 vs. Phase 2) with different operations (extraction vs. evaluation); combining them would create an awkward abstraction that crosses td-critique.md's two-operation model.

- **DOCUMENTARY OBSERVATION as a 4th disposition for Critique verdicts.** The corpus uses DOCUMENTARY OBSERVATION at Innovation's output disposition layer (chains 6, 7 — Two-Layer Failure Framing). It does NOT apply to Critique's verdict layer; Critique already has SURVIVE / REFINE / KILL.

- **Cross-corpus accumulator extensions** (track which chains saw which dimensions / depth-axes; refinement frequency). Same structural logic that rejected cross-corpus composition in the prior innovate.md sister analysis: protocol-specific, not generic.

- **A new Phase between Phase 1 (Landscape) and Phase 2 (Adversarial)** called "candidate-context analysis" that pre-classifies candidates' risk surfaces. Considered as a contrarian innovation. Rejected as overreach: the corpus doesn't justify a new phase, only refinements to existing phases.

- **New failure modes** (Project-Risk-Blindness; Prosecution-Depth-Trap). Rejected because the existing Dimension Blindness and Rubber-Stamping failure modes provide clean cross-reference targets — better fits than the weaker fits in some sister analyses where new failure modes were also rejected. Sister-analysis precedent is consistent across all five analyses.

- **Burden-of-proof shift extensions** (e.g., adding "meta-recursive" as a new shift category). Rejected: the current low-stakes vs. high-stakes mechanism handles the corpus's cases.

- **Listing project-specific dimension examples in the default dimensions table.** Rejected per the placement convention: project-specific examples in a default-dimensions list would be project-specific bloat; the rule's canonical home + cross-reference is the prescribed shape.

- **Adding cross-discipline coordination rules now** (e.g., td-critique.md's Rule B references decompose.md's Determination-Mechanism Piece Check). Considered. Rejected for now (deferred): the rules already point to the same underlying concept at different surfaces; explicit cross-references would add maintenance overhead without clear benefit until friction is observed.

**Survivors that held:**

- Rule A (Project-specific risk dimension check at Phase 0 / validate-dimensions sub-step): held because 4-chain × 4 distinct dimensions converging on the meta-pattern is robust evidence; the rule's wording is generic with illustrative examples that ground (without locking) the abstraction; placement is clean within the existing sub-step.

- Rule B (Multi-axis prosecution depth check at Phase 2 / Prosecution sub-section): held because 3-chain × 3 distinct sub-types convergence is above the cross-cutting threshold; the depth-axes have observable triggers; the "pick most relevant" disclaimer preserves runner judgment; the rule extends the existing 4 prosecution prompts cleanly.

- One-line cross-references at Dimension Blindness and Rubber-Stamping failure modes. Held because these are the failure modes whose recurrence the rules directly prevent; structural fit is clean.

- Caveats and revival triggers in this finding only, not in spec. Held per discipline-spec purity.

- Self-Reference Collapse defense in finding's Reasoning, leveraging existing failure mode #7. Held because failure mode #7 already prescribes the defense (external grounding); embedding it in spec would duplicate existing content.

**Why two rules and not one or three:**

A single combined rule was rejected for awkward abstraction (cross-phase, cross-operation). A third rule (e.g., promoting DOCUMENTARY OBSERVATION as a Critique disposition; adding cross-discipline coordination) was rejected because the evidence base is either missing (DOCUMENTARY at Critique verdict layer has zero corpus evidence) or premature (cross-discipline coordination has no observed friction yet). Two rules at two distinct phases is the right shape.

**Why this is the smallest aggregate cost among sister analyses (~10–15 lines):**

Critique's discipline structure already accommodates both rules cleanly — Phase 0's validate-dimensions sub-step can absorb Rule A as a specialization; Phase 2's Prosecution sub-section can absorb Rule B as a depth-axis enumeration alongside existing prompts. No new phases, no new sub-sections, no new failure modes. The rules fit as extensions of existing surfaces.

## Open Questions

### Monitoring

- **Effective firing of Rule A in next 3 MVL+ runs producing Critique evaluations of candidate sets involving project artifacts/operations/state.** If the rule does not fire when applicable — i.e., the runner does not check for project-specific risk axis coverage when the candidate set involves project artifacts — the rule's wording or trigger may need refinement. Observable after 3 such runs.

- **Effective firing of Rule B in next 3 MVL+ runs producing Critique evaluations where any depth-axis is applicable.** If user-perspective objections, failure-case scenarios, or specification-gap probes are not constructed when applicable, the rule's depth-axis enumeration may need refinement. Observable after 3 such runs.

### Refinement Triggers

- **Vocabulary-naturalness as a 4th depth-axis in Rule B.** Chain 7's U7 is PENDING (TP3 effectiveness check #1 outcome). If chain 8+ surfaces vocabulary-validation prosecution-depth failures and the pattern reaches 3+ chains, Rule B's depth-axis enumeration could be extended to add vocabulary-naturalness as a 4th sub-axis. The rule's "appropriate depth-axes when applicable" disclaimer accommodates extension without rewriting structure.

- **Cross-discipline coordination rules.** If methodology-library users report friction at the boundary between Rule B's specification-gap probe (Critique) and decompose.md's Determination-Mechanism Piece Check (Decomposition), an explicit cross-reference could be added. Until friction is observed, the cross-reference is premature maintenance overhead.

- **Single-chain caveat on individual sub-instances.** Each specific dimension (duplicate-derivable-state, etc.) and each specific depth-axis (user-perspective, etc.) is single-chain. The meta-patterns are 4-chain and 3-chain. If any individual sub-instance is later shown to be fragile or wrong-shaped, the rule's wording can be updated without restructuring; the meta-rule shape stays stable.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

okay if you read all inquiries finding.md files starting from devdocs/inquiries/2026-05-07_15-01__loop_diagnose__past_navigation_memory_index_vs_search now (do it  ) and focus only to td critique homegrown/td-critiqye/references/td-critique.md   

can you tell me 
what is missing from it? how it can be fixed ? but understand that changes should be generic and meta defined bc this is a thinking discipine . 

please look all inquiries starting with  2026-05-07_15-01 and tell me how we can improve/fix  critique
in a for sure way, 

not "might improve" but sth that is def missing with it and if we add/fix then it would be def more robust for next runs
```

</details>
