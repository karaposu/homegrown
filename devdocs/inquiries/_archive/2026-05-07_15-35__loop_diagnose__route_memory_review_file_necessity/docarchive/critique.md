# Critique: Loop Diagnose - Route Memory Review File Necessity

## User Input

LOOP_DIAGNOSE on the correction chain. Innovation produced 9 candidate maintenance interventions (N1-N9) using the compositional identifier scheme (N for new in this run, M for previous LOOP_DIAGNOSE retained, P for cross-chain patterns). Critique evaluates each against dimensions extracted from the diagnostic problem and from LOOP_DIAGNOSE Step 5 / Step 6 guardrails, then renders verdicts and an assembly check.

## Dimensions With Weights

### 1. Evidence Strength - 25%

Pass means the candidate's supporting evidence in the prior+corrected artifacts is strong enough to justify a source edit rather than monitoring (per LOOP_DIAGNOSE Step 4 confidence definitions). Critical dimension: a candidate with weak per-chain evidence either should be deferred or downgraded to monitoring. Cross-chain patterns at 2 of 3+ chains are accepted as strengthening evidence, not as standalone justification.

### 2. Recurrence Prevention - 20%

Pass means the candidate, if implemented, would prevent recurrence of the specific failure pattern it targets. Critical dimension: a candidate that does not prevent recurrence is not maintenance.

### 3. Evaluation Gate Specificity - 15%

Pass means the candidate has an observable gate firing within the near term (next 1-3 MVL+ runs of relevant type). Critical dimension: untestable candidates fail.

### 4. Overreach Risk - 25%

Pass means the candidate avoids the LOOP_DIAGNOSE Step 5 + Step 6 guardrails: not a broad rewrite from one chain; not a fundamentals change; not a premature skill creation; not a cross-chain promotion below threshold. Critical dimension: violation kills or defers the candidate regardless of other strengths.

### 5. Composition With Previous LOOP_DIAGNOSE - 10%

Pass means the candidate either extends a previous candidate (M1, M3, M7, M8) coherently or introduces a new surface that previous candidates did not cover. Lower-weight dimension because composition is a quality property rather than a hard pass/fail.

### 6. Implementation Cost / Reversibility - 5%

Pass means cheap to implement, easy to revert. Lower-weight because most candidates are one-paragraph patches.

Critical dimensions: Evidence Strength, Recurrence Prevention, Evaluation Gate Specificity, Overreach Risk.

## Fitness Landscape

### Viable Region

Candidates that:

- Have HIGH per-chain evidence strength (multiple-artifact convergence, corrected loop repairs the same failure).
- Prevent recurrence of a specific pattern with a clear mechanism.
- Have an observable gate firing in the next 1-3 runs.
- Avoid all LOOP_DIAGNOSE Step 5 / Step 6 guardrails.
- Compose with previous LOOP_DIAGNOSE candidates coherently (extend without replace, add without duplicate).
- Implementation is one paragraph or trivial.

### Dead Region

Candidates that:

- Propose broad rewrites or fundamentals changes from this single chain.
- Promote cross-chain patterns to ACTIONABLE below the 3+ chain threshold.
- Have evidence strength below MEDIUM-HIGH on critical dimensions.
- Have heuristic gates whose thresholds are unsupported.
- Promote LOOP_DIAGNOSE to a standalone discipline.
- Modify the LOOP_DIAGNOSE protocol from one chain's experience.

### Boundary Region

Candidates that:

- Have HIGH evidence but moderate overlap with another candidate (decision: keep both with overlap flag, or merge).
- Have zero implementation cost but only contribute to gate-management (monitoring, content cleanup).
- Are speculative future candidates (manifest file, protocol-level documentation) that depend on other candidates landing first.

### Unexplored Region

- Candidates that change the LOOP_DIAGNOSE protocol itself (out of scope per Step 5 + Step 6).
- Candidates that target the corpus accumulation step (premature without 5-10 stable findings).
- Candidates that change MVL+ pipeline structure (out of scope per Sensemaking constraint).

## Candidate Verdicts

### Candidate N1 — Cultural-Norm Corpus Scan Rule In Exploration

Prosecution:

The named corpus list (`artifact_materialization.md`, `outcome_review.md`, `alignment_control.md`) freezes a small set of files as the cultural-norm corpus. As the project evolves, new cultural-norm files may need to join the list, requiring spec updates that are easy to forget. "Codebase-context inquiry" is also judgment-dependent — not every Exploration is a codebase-context Exploration.

Defense:

Naming the corpus explicitly is the antidote to the prior loop's failure. Recognition becomes mechanical rather than judgment-dependent. The maintenance burden of updating the corpus list is small (occasional one-line additions to `explore.md`). The "codebase-context inquiry" judgment is the same judgment Exploration already makes when it chooses what to scan.

Collision:

Defense survives. The corpus-list maintenance burden is real but bounded; the alternative (no named corpus, runner identifies cultural-norm files ad hoc) is the failure pattern this candidate fixes.

Dimension positions:

- Evidence Strength: HIGH (Coarse Scan list omission + corrected loop's Cycle 1 inclusion are both observable; cultural-norm files exist).
- Recurrence Prevention: HIGH.
- Evaluation Gate Specificity: HIGH (next 3 codebase-context Exploration runs).
- Overreach Risk: LOW (one paragraph + small file list).
- Composition: HIGH (introduces a new surface; complements previous M2 probe rule).
- Implementation Cost: LOW.

Verdict: SURVIVE.

Constructive output:

Promote as ACTIONABLE. Risk class: low. Evaluation gate: in next 3 codebase-context Exploration runs, the Coarse Scan list explicitly includes at least one cultural-norm corpus file path.

### Candidate N2 — Sensemaking Phase 1 Anchor-Interrogation Extended To Foundational Principles (Strengthens Previous M1)

Prosecution:

N2 extends previous M1 to cover Foundational Principles in addition to Constraints. The extension increases Sensemaking Phase 3 cognitive load. "Domain property" or "project axiom" phrasing remains judgment-dependent. With cross-chain pattern P1 at 2 of 3+ chains, the rule is well-supported but the unified version inherits both M1's and N2's judgment-dependency simultaneously.

Defense:

Cross-chain pattern P1 strengthens the rule's foundation: the failure pattern recurs across two chains at two different layers (Constraints in the previous chain, Foundational Principles in this chain). A unified rule covering both layers handles both observed failure modes with one paragraph of recognition cues. Composition with previous M1 is mechanically clean — extend M1's targets list rather than create a parallel rule.

Collision:

Defense survives. The judgment-dependency objection is partly mitigated by providing explicit phrasing patterns ("X values Y", "X is Z" for Constraints; "do/don't X unless Y" for Foundational Principles). The cognitive-load increase is small (one additional Phase 3 ambiguity-collapse pair per applicable principle).

Dimension positions:

- Evidence Strength: HIGH (prior + corrected Phase 1 / Foundational Principles + cross-chain P1).
- Recurrence Prevention: HIGH.
- Evaluation Gate Specificity: HIGH.
- Overreach Risk: LOW (extends existing M1 surface; does not create a new cross-cutting rule).
- Composition: HIGH (clean extension of M1).
- Implementation Cost: LOW.

Verdict: SURVIVE.

Constructive output:

Promote as ACTIONABLE. Risk class: low. Evaluation gate: in next 3 MVL+ runs engaging Sensemaking with Foundational Principles items, at least one Phase 3 ambiguity-collapse pair targets a Phase 1 / Foundational Principles item.

### Candidate N3 — Innovation Candidate-Axis Decoupling Rule

Prosecution:

"Operation" and "output storage" are abstract categories; recognition cues need refinement. The rule could over-fire in problems where only one axis genuinely matters, producing candidate-set bloat. Innovation already has 7 mechanisms generating diverse candidates; adding an axis-coverage rule may overlap with existing mechanism coverage.

Defense:

The specific gap (one-axis candidate space) is observable in this chain and would have been caught by an axis-coverage rule. The Assembly Check phase already has the role of testing for emergent candidates; extending it to test for axis coverage is a natural fit. The candidate-set bloat risk is bounded by the rule's predicate (problems combining operation with output storage), not by every Innovation run.

Collision:

Defense survives. The recognition predicate ("problems that combine an operation with output storage") narrows the rule to its target scope. The Assembly Check phase is the right placement.

Dimension positions:

- Evidence Strength: HIGH.
- Recurrence Prevention: MEDIUM-HIGH (catches operation+storage problems specifically).
- Evaluation Gate Specificity: HIGH.
- Overreach Risk: LOW.
- Composition: MEDIUM-HIGH (introduces a new surface in Innovation that no previous LOOP_DIAGNOSE candidate covers).
- Implementation Cost: LOW.

Verdict: SURVIVE.

Constructive output:

Promote as ACTIONABLE. Risk class: low. Evaluation gate: in next 3 Innovation runs evaluating problems that combine an operation with output storage, at least one candidate varies the operation-trigger axis distinctly from the storage-policy axis.

### Candidate N4 — Critique Explicit-Culture-Fit Dimension

Prosecution:

Adding a new dimension to the dimension list increases dimension-count overhead. "Project's documented artifact culture" requires the cultural-norm corpus to actually be documented; in projects without explicit documentation, the dimension cannot be applied. With cross-chain pattern P2 at 2 of 3+ chains, the rule is well-supported but Critique's dimension list is now growing — M3 (duplicate-derivable-state) plus N4 (explicit-culture-fit) plus the original 6 default dimensions = 8 dimensions to consider per evaluation.

Defense:

Cross-chain pattern P2 strengthens the rule's foundation. The cultural-norm corpus exists in this codebase (`artifact_materialization.md`, `outcome_review.md`, `alignment_control.md`); for Homegrown specifically, the dimension is grounded. The dimension-count concern is partially mitigated by the existing td-critique reference's explicit text "modified per problem" — not all dimensions are applied to all problems. M3 + N4 are sister dimensions targeting different project-specific risk axes; together they make Critique's dimension list more complete for Homegrown evaluations.

Collision:

Defense survives. The dimension-count concern is real but bounded; the alternative (Critique without project-specific dimensions) is the failure pattern this candidate fixes.

Dimension positions:

- Evidence Strength: HIGH (prior + corrected dimension lists + cross-chain P2).
- Recurrence Prevention: HIGH.
- Evaluation Gate Specificity: HIGH.
- Overreach Risk: LOW.
- Composition: HIGH (sister dimension to previous M3; both target project-specific risk axes).
- Implementation Cost: LOW.

Verdict: SURVIVE.

Constructive output:

Promote as ACTIONABLE. Risk class: low. Evaluation gate: in next 3 Critique runs evaluating candidates involving project artifacts, the explicit-culture-fit (or equivalent project-norm-fit) dimension appears in the dimension list with non-trivial weight.

### Candidate N5 — Sensemaking Foundational-Principle Source Verification (Output-Level)

Prosecution:

N5 overlaps with N2: both target Sensemaking's Foundational Principles. N5 is a detection-by-output rule (each principle should cite a source); N2 is a detection-by-process rule (each principle should be tested in Phase 3). Implementing both at the same Sensemaking surface creates two parallel obligations that the runner must satisfy. The judgment-dependency of "identifiable source" remains unresolved.

Defense:

N5 catches missed-citation-at-output even when N2's Phase 3 test is somehow skipped. Defense-in-depth at the same surface.

Collision:

The defense's "defense-in-depth" argument is real but creates redundancy that may not be worth the cost. N2 already covers the failure pattern; N5 is a backup. Without evidence that N2 alone fails, N5 is premature.

Dimension positions:

- Evidence Strength: MEDIUM (the source-verification absence is observable but the failure pattern is already covered by N2).
- Recurrence Prevention: MEDIUM (redundant with N2).
- Evaluation Gate Specificity: MEDIUM (judgment-dependent).
- Overreach Risk: LOW-MEDIUM (overlap with N2 increases cognitive load without clear marginal value).
- Composition: MEDIUM (overlaps with N2 rather than complementing distinctly).
- Implementation Cost: LOW.

Verdict: REFINE → DEFER.

Constructive output:

Defer with revival trigger: revive if N2 alone fails to catch the failure pattern in the next 3 MVL+ runs. Why if revived: detection-by-output complements detection-by-process when the process rule fires false negatives.

### Candidate N6 — Cultural-Norms Manifest File

Prosecution:

N6 introduces a new file at `homegrown/contracts/cultural_norms.md`. From this single chain's evidence, the cultural-norm corpus has three named files; a manifest is overhead until the list grows beyond what fits in N1's one-paragraph rule. Creating the manifest now is premature.

Defense:

The manifest reduces maintenance burden if the cultural-norm corpus grows. Future N4 invocations and future LOOP_DIAGNOSE runs benefit from a single point of truth.

Collision:

The defense's "future maintenance burden reduction" is real but speculative. Defer until there is evidence that maintaining the corpus list inline in `explore.md` becomes painful.

Dimension positions:

- Evidence Strength: LOW (no evidence that the inline list will be hard to maintain).
- Recurrence Prevention: LOW (the manifest does not directly prevent any failure pattern; it supports N1).
- Evaluation Gate Specificity: MEDIUM.
- Overreach Risk: LOW-MEDIUM (creates a new artifact for a need that has not yet been demonstrated).
- Composition: MEDIUM (supports N1 and N4).
- Implementation Cost: MEDIUM (drafting the manifest content).

Verdict: REFINE → DEFER.

Constructive output:

Defer with revival trigger: revive after N1 and N4 land and at least one new cultural-norm reference is needed beyond the current three files.

### Candidate N7 — Mark Prior Finding As Corrected (Mirror Of Previous M7)

Prosecution:

N7 is content-level cleanup, not process-level prevention. The corrected `finding.md` already has `corrects:` frontmatter; the prior's missing reciprocal annotation is a minor inconsistency. The risk it addresses (a runner executing the prior's adaptive-overlay recommendation in isolation) is real if low-probability.

Defense:

The patch is trivial — frontmatter addition plus a one-line Status note. The risk it addresses, while low-probability, has high cost when it materializes (a future runner could create unnecessary `prior_map_overlay.md` files based on the obsolete adaptive-overlay recommendation). Mirrors the previous LOOP_DIAGNOSE's M7 pattern; consistency in handling correction chains is itself valuable.

Collision:

Defense survives. The cost is trivial; the risk is bounded but real; consistency with previous M7 is mechanical.

Dimension positions:

- Evidence Strength: HIGH (asymmetric annotation observable).
- Recurrence Prevention: LOW (one-time fix).
- Evaluation Gate Specificity: HIGH.
- Overreach Risk: ZERO.
- Composition: HIGH (mirrors M7 pattern; consistent handling).
- Implementation Cost: TRIVIAL.

Verdict: SURVIVE.

Constructive output:

Promote as ACTIONABLE (content cleanup track, parallel to M7). Risk class: zero. Evaluation gate: prior `finding.md` frontmatter contains `corrected_by:` and a top-level Status note appears at the start of the body.

### Candidate N8 — Continue Cross-Chain Monitoring (Extends Previous M8)

Prosecution:

N8 adds cross-chain observation to the previous M8 monitoring window. The 3 normal MVL+ runs M8 already monitors are about per-chain failure pattern recurrence; cross-chain LOOP_DIAGNOSE pattern observation requires further LOOP_DIAGNOSE runs, not normal MVL+ runs. The two monitoring tracks have different gates and may be harder to manage in parallel.

Defense:

LOOP_DIAGNOSE Step 5 explicitly prescribes monitoring for borderline cases. N8 extends M8 with the cross-chain dimension that emerges as more LOOP_DIAGNOSE runs complete. The two monitoring tracks (per-chain in normal MVL+ runs, cross-chain in further LOOP_DIAGNOSE runs) are complementary, not contradictory.

Collision:

Defense survives. The two-track monitoring is not redundant; it tracks two different evidence types at two different cadences.

Dimension positions:

- Evidence Strength: N/A (this is the meta-evaluation gate).
- Recurrence Prevention: MEDIUM (gate function).
- Evaluation Gate Specificity: HIGH.
- Overreach Risk: ZERO.
- Composition: HIGH (extends M8).
- Implementation Cost: ZERO.

Verdict: SURVIVE.

Constructive output:

Promote as ACTIONABLE (always-on baseline, extension of M8). Risk class: zero. Evaluation gate: when the third LOOP_DIAGNOSE run completes, document P1/P2 chain count and promote previous M6 from deferred to ACTIONABLE if threshold reached.

### Candidate N9 — Cross-Chain Promotion Gate Documentation In LOOP_DIAGNOSE Protocol

Prosecution:

N9 modifies the LOOP_DIAGNOSE protocol itself. From this single chain's experience, formalizing a 3-chain intermediate gate is overreach — the gate is theoretical until at least one cross-chain pattern actually reaches the threshold. LOOP_DIAGNOSE Step 5 + Step 6 already provide guidance ("do not promote LOOP_DIAGNOSE into a standalone skill or discipline until 5 to 10 diagnostic MVL+ findings"); the additional 3-chain gate is new framework added before its trigger event.

Defense:

Making the promotion gate explicit prevents future LOOP_DIAGNOSE runs from over-promoting cross-chain patterns. Without the explicit gate, the next runner may interpret 2 chains as sufficient evidence.

Collision:

The prosecution's "premature framework" objection wins. The 3-chain gate can be documented in the cross-chain pattern observations of individual diagnostic findings (as this finding does); it does not need protocol-level codification until at least one pattern actually reaches the threshold.

Dimension positions:

- Evidence Strength: MEDIUM-LOW (theoretical gate, no actual promotion event yet).
- Recurrence Prevention: LOW (the gate prevents a possible-but-unobserved failure mode).
- Evaluation Gate Specificity: LOW (the gate fires only when cross-chain promotion is considered, which is not yet).
- Overreach Risk: HIGH (modifies the LOOP_DIAGNOSE protocol from one diagnostic chain).
- Composition: LOW.
- Implementation Cost: LOW.

Verdict: REFINE → DEFER.

Constructive output:

Defer with revival trigger: revive when at least one cross-chain pattern reaches 3+ chains AND the promotion decision needs explicit protocol guidance. Until then, document the gate locally in each diagnostic finding's cross-chain section.

### Previous LOOP_DIAGNOSE Candidates (M1, M3, M4, M5, M6, M9) — Status Update

Cross-chain evidence from this run updates the status of previous LOOP_DIAGNOSE candidates without re-evaluating them as new candidates:

- **M1** (anchor-interrogation prompt): strengthened by N2 which extends M1 to cover Foundational Principles. The unified version (M1+N2) is the ACTIONABLE candidate.
- **M3** (duplicate-derivable-state dimension): strengthened by sister candidate N4 (explicit-culture-fit dimension). Both target Critique's missing project-specific dimensions; together they cover this chain and the previous chain's failure modes.
- **M4** (Goal-clause balance check, deferred): D-prime evidence accumulates (prior `_branch.md` Question phrasing observed in this chain). Still below 3+ chain threshold; remains deferred.
- **M5** (comparator-surfacing prompt, deferred): no new evidence in this chain; remains deferred.
- **M6** (cross-cutting "name-and-test load-bearing anchors" pattern, deferred): cross-chain P1 + P2 at 2 of 3+ chains. Closer to revival but still deferred.
- **M9** (canary test, deferred): no monitoring ambiguity yet; remains deferred.

## Assembly Check

Surviving assembly:

```text
N1 (Exploration cultural-norm corpus scan rule)
  + N2 (Sensemaking Phase 1 anchor-interrogation extended to Foundational Principles; strengthens M1)
  + N3 (Innovation candidate-axis decoupling rule)
  + N4 (Critique explicit-culture-fit dimension; sister to M3)
  + N7 (Mark prior finding as corrected; mirrors M7)
  + N8 (Extend M8 monitoring with cross-chain observation)
```

Emergent value:

- N1 + N2 are mechanically composed: corpus is the input, principle is the output, interrogation is the verification. Together they cover the upstream cascade A → B at both layers (corpus and principle).
- N3 catches Innovation's candidate-set blindness independently of upstream success.
- N4 + previous M3 together provide two project-specific dimensions for Critique. Even with one upstream patch failing, Critique's dimension list catches the failure at the downstream layer.
- N7 + previous M7 provide consistent content-cleanup across diagnostic chains.
- N8 extends M8 with the cross-chain promotion gate.

The assembly produces redundant coverage at corpus / principle / candidate-space / dimension layers, plus content cleanup, plus monitoring extension. Each component candidate is independently evaluable by its own gate. No cross-cutting protocol-level rule is required.

Assembly verdict: SURVIVE.

Refinements required before implementation:

- N1's corpus list must cite specific file paths and provide a rule for adding to the list.
- N2's recognition cues should provide explicit phrasing patterns for "domain property" and "project axiom" items.
- N3's recognition predicate ("problems that combine an operation with output storage") should be operationalized.
- N4 must reference the cultural-norm corpus (the same corpus N1 names) so the dimension is grounded.
- N7 must add reciprocal annotation only; no body content edits beyond the Status note.
- N8 must reference `devdocs/improvement_observations.md` plus a separate cross-chain track in this finding.

## Coverage Map

Evaluated:

- N1 (Exploration cultural-norm corpus scan rule).
- N2 (Sensemaking anchor-interrogation extended to Foundational Principles).
- N3 (Innovation candidate-axis decoupling rule).
- N4 (Critique explicit-culture-fit dimension).
- N5 (Sensemaking output-level source verification) — deferred.
- N6 (Cultural-norms manifest file) — deferred.
- N7 (Mark prior finding as corrected).
- N8 (Extend M8 monitoring).
- N9 (LOOP_DIAGNOSE protocol promotion-gate documentation) — deferred.
- Previous M1, M3, M4, M5, M6, M9 status updated based on cross-chain evidence.

Unexplored but not blocking:

- Candidates that change the LOOP_DIAGNOSE protocol substantively (out of scope).
- Candidates that change MVL+ pipeline structure (out of scope).
- Candidates that add new failure modes to discipline specs (premature).

Coverage judgment:

Sufficient. The viable region is stable and has six clean SURVIVORS plus three DEFERRED. The deferred candidates have concrete revival triggers. The unexplored regions are out-of-scope by guardrail.

## Signal

TERMINATE with ranked survivors:

1. SURVIVE: N1 (Exploration cultural-norm corpus scan rule) — upstream prevention.
2. SURVIVE: N2 (Sensemaking anchor-interrogation extended to Foundational Principles, strengthens M1) — upstream prevention at principle layer.
3. SURVIVE: N4 (Critique explicit-culture-fit dimension, sister to M3) — downstream detection at dimension layer.
4. SURVIVE: N3 (Innovation candidate-axis decoupling rule) — midstream prevention.
5. SURVIVE: N7 (Mark prior finding as corrected, mirrors M7) — content cleanup.
6. SURVIVE: N8 (Extend M8 monitoring with cross-chain observation) — always-on baseline.
7. DEFERRED: N5 (Output-level source verification) — revive if N2 alone is insufficient.
8. DEFERRED: N6 (Cultural-norms manifest file) — revive after N1 and N4 land.
9. DEFERRED: N9 (LOOP_DIAGNOSE protocol promotion-gate documentation) — revive when first cross-chain pattern reaches 3+ chains.
10. DEFERRED: previous M4, M5, M6, M9 retained as deferred (M6 closer to revival via P1+P2 evidence).

## Convergence Telemetry

Dimension coverage: complete. All four critical dimensions (Evidence Strength, Recurrence Prevention, Evaluation Gate Specificity, Overreach Risk) were evaluated for every candidate, plus the two non-critical dimensions (Composition With Previous LOOP_DIAGNOSE, Implementation Cost).

Adversarial strength: STRONG. Strongest objections constructed for each candidate (corpus-list maintenance for N1; judgment-dependency for N2; abstract recognition for N3; dimension-count for N4; overlap-with-N2 for N5; premature-artifact for N6; not-maintenance for N7; two-track-monitoring for N8; premature-framework for N9).

Landscape stability: STABLE. The viable region is consistent: low-overreach, near-term gates, narrow per-discipline patches survive; cross-chain protocol-level changes from sub-threshold patterns deferred.

Clean SURVIVE exists: yes, six. N1, N2, N3, N4, N7, N8.

Failure modes observed: none. Wrong dimensions avoided. Rubber-stamping avoided (3 candidates deferred, 6 survived). Nitpicking avoided. Dimension blindness avoided (Overreach Risk specifically catches LOOP_DIAGNOSE Step 5 + Step 6 guardrails). False convergence avoided (assembly check confirmed redundant coverage). Evaluation drift avoided (dimensions held constant across candidates). Self-reference collapse avoided (external reference points: LOOP_DIAGNOSE Step 4-6 verbatim, prior + corrected artifacts, previous LOOP_DIAGNOSE candidate identifiers).

Overall: PROCEED.
