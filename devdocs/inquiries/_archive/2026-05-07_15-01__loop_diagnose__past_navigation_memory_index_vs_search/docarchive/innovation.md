# Innovation: Loop Diagnose - Past Navigation Memory Index Vs Search

## User Input

LOOP_DIAGNOSE on the correction chain. Sensemaking produced four primary hypotheses (A, B, C, D) plus two propagation hypotheses (Decomposition, Innovation). Decomposition produced an 8-piece question tree mapped to LOOP_DIAGNOSE Step 4 schema. Innovation now generates candidate maintenance interventions tied to the primary hypotheses, narrow enough to avoid fundamentals rewrites, with explicit evaluation gates.

## Seed

Seed type: gap + dissatisfaction + collision.

The gap: each of the four primary hypotheses identifies a specific process-level absence in the prior loop (probe not run, anchor not interrogated, dimension not articulated, Goal not balanced). Each absence corresponds to a possible intervention.

The dissatisfaction: a maintenance candidate must avoid both extremes — a broad rewrite would over-correct from one chain; ad-hoc remember-this-next-time would not prevent recurrence.

The collision: LOOP_DIAGNOSE Step 4 prescribes per-candidate fields (what changes, file/protocol affected, risk class, expected benefit, evaluation gate, branch-experiment flag). The intervention space must produce candidates fit for this schema.

Valuation: candidates targeting the most upstream cause (Sensemaking anchor) and the most independently-actionable axis (Critique dimensions) carry the highest expected benefit per byte of patch. Per-discipline patches that only fire in narrow conditions carry less benefit.

Motivation: produce 5-9 candidate interventions across the mechanism space; converge on 2-4 ACTIONABLE candidates plus 2-3 monitoring/deferred candidates.

## Mechanism Outputs

### 1. Lens Shifting

Generic variation:

- View each maintenance candidate as a per-discipline patch (one rule per spec file).

Focused variation:

- View the maintenance lever as upstream-or-downstream. Upstream patches (framing, Sensemaking anchor) can prevent the entire cascade; downstream patches (Critique dimension) catch failures regardless of whether upstream patches succeed. Both have value but they are not redundant — the upstream patch is preventive, the downstream patch is detective.

Contrarian variation:

- View any source edit from one correction chain as overreach. The right v1 intervention is monitoring only: observe the next N MVL+ runs for the same pattern; do not edit specs until 2-3 correction chains converge on the same shortcoming.

Surviving output:

The lens-shift produces three frames: preventive (upstream), detective (downstream), and monitoring (no edit). All three are legitimate at different evidence thresholds. The diagnostic finding will mix them.

### 2. Combination

Generic variation:

- Combine all primary-hypothesis candidates into one cross-cutting rule (e.g., "before any discipline stabilizes its output, identify and interrogate one load-bearing anchor").

Focused variation:

- Combine the Sensemaking anchor candidate with the Critique dimension candidate, since they target the same failure pattern (covertly held assumption that survives because it is never named as such). Output: a shared "name-and-test" pattern applied at Sensemaking (anchor interrogation) and at Critique (dimension articulation).

Contrarian variation:

- Combine the maintenance candidates with the propagation hypotheses (Decomposition Q-tree and Innovation candidate set), making the patch span all five disciplines. This is broad but matches the cascade structure.

Surviving output:

Focused combination is strong: a "name-and-test load-bearing assumptions" pattern can be expressed two ways (anchor-interrogation prompt at Sensemaking; dimension-audit prompt at Critique) without inventing a new abstraction. The contrarian broad version is rejected because it overreaches from one chain.

### 3. Inversion

Generic variation:

- Instead of "add a rule to prevent recurrence," add observability — telemetry on each discipline that flags when these specific patterns are present.

Focused variation:

- Instead of "the loop must avoid the failure," ask "what would have to be visible for the failure to be impossible to miss?" If Sensemaking output included a "load-bearing anchors and their counter-interpretations" section, the anchor-not-interrogated failure would be visible at Sensemaking-output time, before downstream stages inherit it.

Contrarian variation:

- Instead of fixing the loop, fix the user's input. A clarification protocol that asks "what comparator do you mean by 'easier'?" before scope check. This shifts responsibility upstream of MVL+.

Surviving output:

Focused inversion adds a strong candidate: a Sensemaking output requirement that surfaces the load-bearing anchors and their tested counter-interpretations explicitly. This is detection-by-output rather than detection-by-rule. The contrarian variation is partly useful but routes to runner-level context elicitation, where the evidence is weaker.

### 4. Constraint Manipulation

Generic variation:

- Add constraint: every maintenance candidate must have an observable evaluation gate.

Focused variation:

- Add constraints: (a) the candidate must be expressible as a one-paragraph protocol-text addition; (b) the evaluation gate must fire within the next 3 MVL+ runs; (c) the candidate must not propose changes to the SIC/MVL+ pipeline structure.

Contrarian variation:

- Remove the constraint that candidates must be source edits. Allow candidates that are documentation, training notes, or process-level reminders.

Surviving output:

The focused constraint set is the right shape: one-paragraph patches, near-term gates, no pipeline rewrites. This converts the candidate space into a tractable set rather than an open design problem. The contrarian relaxation is partly useful for borderline candidates (e.g., the runner-level comparator patch could land as a documented behavior in MVL+ rather than as a new code path).

### 5. Absence Recognition

Generic variation:

- Missing object: a cross-cutting "minimum mechanism set" definition the LOOP_DIAGNOSE protocol could refer to in future runs.

Focused variation:

- Missing object: a small corpus of correction chains the system can refer to. Once 3-5 LOOP_DIAGNOSE findings exist, recurring failure patterns become visible. This is a slow-burn, not a v1 candidate.

Contrarian variation:

- Missing object: a "kill the maintained-index recommendation in the prior finding" patch. The prior `finding.md` still recommends creating `devdocs/navigation_context/past_navigation_memory_file_index.md`; if a runner later resumes the prior inquiry, it might still execute that recommendation. The corrected `finding.md` already has `corrects:` frontmatter pointing at the prior, but the prior's finding is not annotated as superseded.

Surviving output:

The contrarian absence is a real candidate: ensure the prior `finding.md` is annotated as `superseded_by:` or `corrected_by:` so runners do not execute the obsolete recommendation. This is content-level cleanup, not a process-level patch, and it is small. The slow-burn corpus and the cross-cutting "minimum mechanism set" are valuable but defer until more chains accumulate.

### 6. Domain Transfer

Generic variation:

- Transfer from code review: pre-commit checklists for specific failure patterns.

Focused variation:

- Transfer from medical diagnostics: a small symptom set per discipline (e.g., for Sensemaking: "anchor stated as constraint without ambiguity-collapse pair targeting it" → flag). Symptoms are recognizable by the discipline's own output structure, not by re-running the discipline.

Contrarian variation:

- Transfer from incident postmortems: blameless-postmortem template captures what happened, what was assumed, what was missed. This is essentially what LOOP_DIAGNOSE itself produces, so the import is meta-recursive.

Surviving output:

The focused medical-diagnostics transfer produces a useful framing: each maintenance candidate can be expressed as "a recognizable symptom pattern in the discipline's output, with a corrective action." The contrarian transfer (incident postmortem) is structurally identical to LOOP_DIAGNOSE itself — useful as confirmation that LOOP_DIAGNOSE is the right protocol, not as a new candidate.

### 7. Extrapolation

Generic variation:

- As more correction chains accumulate, propose maintenance candidates only when patterns recur across 3+ chains.

Focused variation:

- The strongest path to confident maintenance is accumulation. A single chain justifies narrow patches and monitoring; 3 chains justify protocol-section-level changes; 5+ chains justify discipline-spec-level changes. The current diagnostic should propose patches in the first tier and monitoring in the higher tiers.

Contrarian variation:

- If LOOP_DIAGNOSE accumulates 10+ findings without a clear stable diagnostic method, the protocol itself should be revisited (per LOOP_DIAGNOSE Step 6).

Surviving output:

The accumulation discipline is the right framing for sizing each candidate. First-chain candidates should be the smallest patch sufficient to trigger an evaluation gate; later chains can confirm or expand.

## Candidate Designs

### Candidate M1 — Anchor-Interrogation Prompt In Sensemaking

Shape:

Add a one-paragraph rule to `homegrown/sense-making/references/sensemaking.md` Phase 1 (Cognitive Anchor Extraction) instructing the runner: for each Phase 1 / Constraints item that is treated as a fixed property of the domain (e.g., "X values explicit Y artifacts"), generate at least one ambiguity-collapse pair in Phase 3 that tests whether the property could be carried by a different mechanism. Failing to produce such a pair is a Premature Stabilization signal.

Strength:

- Targets the upstream cause directly.
- Sensemaking is the dominant cascade origin per the diagnosis.
- One-paragraph patch, no spec rewrite.

Weakness:

- Relies on the runner correctly identifying which Phase 1 / Constraints items are "treated as fixed properties." Runner judgment is required.
- May produce extra ambiguity-collapse pairs in cases where the constraint really is fixed.

Test:

- Novelty: medium. The framework already has Premature Stabilization as a failure mode; this names a specific recognition rule.
- Scrutiny survival: high. The diagnosis evidence supports it directly.
- Fertility: medium. Useful in the specific failure pattern; doesn't generalize to all Sensemaking shortcomings.
- Actionability: high. One paragraph.
- Mechanism independence: high. Multiple mechanisms (Inversion, Combination, Constraint Manipulation) all converge on this candidate.

Verdict: candidate.

### Candidate M2 — Probe-Before-Stabilization Rule In Exploration

Shape:

Add a one-paragraph rule to `homegrown/explore/references/explore.md` (Possibility Mode section) instructing the runner: when possibility-mode candidates are listed at scan resolution and one of them has a quantifiable cost or benefit, run at least one empirical probe of that candidate before stabilizing the candidate set. Listing without probing is a Surface-Only Scanning signal in possibility mode.

Strength:

- Targets the parallel Exploration shortcoming.
- One-paragraph patch.
- The corrected loop's Cycle 2 is a direct example of what this rule would produce.

Weakness:

- "Quantifiable cost or benefit" is judgment-dependent.
- May produce empirical probes in low-stakes possibility mode where they are unnecessary.

Test:

- Novelty: medium. The framework already has Surface-Only Scanning as a failure mode; this extends it to possibility mode specifically.
- Scrutiny survival: high.
- Fertility: medium-high. Generalizes to other possibility-mode candidates that have measurable cost.
- Actionability: high.
- Mechanism independence: high.

Verdict: candidate.

### Candidate M3 — Duplicate-Derivable-State Dimension In Critique

Shape:

Add a one-paragraph rule to `homegrown/td-critique/references/td-critique.md` (Dimensions With Weights section) instructing the runner: when evaluating candidates that produce or maintain durable state, include a "duplicate-derivable-state" or "minimum-state preservation" dimension that asks whether the candidate creates state that could be derived from existing data. The "scan/backfill required for safety" pattern in any candidate is a Strong signal for this dimension.

Strength:

- Targets the partly-independent Critique shortcoming.
- One-paragraph patch.
- Detective rather than preventive — catches failures even if Sensemaking/Exploration patches do not catch them upstream.

Weakness:

- Adds one dimension to the dimension list, which is one more thing for the runner to remember.
- Not all problems involve durable state, so the dimension may be inapplicable in many runs.

Test:

- Novelty: medium-high. The framework's existing dimensions are content-oriented (correctness, coherence, feasibility); this is mechanism-oriented (state redundancy).
- Scrutiny survival: high. The corrected loop's Stale-State Resistance dimension is exactly this dimension under a different name.
- Fertility: high. Applies to any state-producing candidate, not just route-memory discovery.
- Actionability: high.
- Mechanism independence: high.

Verdict: candidate.

### Candidate M4 — Goal-Clause Balance Check At MVL+ ROOT NEW

Shape:

Add a one-paragraph rule to `homegrown/MVL+/SKILL.md` (and `homegrown/MVL/SKILL.md`) at the ROOT NEW step instructing the runner: when the Goal section is drafted, count how many clauses are about the artifact-form (what to build) versus how many are about the artifact-need (whether to build). If the ratio exceeds 4:1, flag a "framing imbalance" warning and offer the user a balanced reformulation before scope check passes. This does not block; it surfaces.

Strength:

- Targets the upstream framing cause.
- One-paragraph patch at the runner level.
- Surfaces the issue at the earliest possible point.

Weakness:

- Heuristic ratio (4:1) is not principled; it is a guess based on this single chain (6:1 in the prior).
- Adds runner overhead at every ROOT NEW.
- Risks false flags on questions that legitimately require many design clauses.

Test:

- Novelty: medium. Goal-clause balance is not currently part of MVL+ scope check.
- Scrutiny survival: medium. The single-chain heuristic is fragile; recurrence across chains would strengthen it.
- Fertility: low-medium. Specific to MVL+ Goal construction.
- Actionability: medium-high.
- Mechanism independence: low. Only one mechanism (loop-framing observation) produces this candidate.

Verdict: deferred / monitoring. Promote to candidate after another correction chain shows a similar Goal-clause imbalance.

### Candidate M5 — Comparator-Surfacing Prompt At Scope Check

Shape:

Add a one-paragraph rule to `homegrown/MVL+/SKILL.md` (and `homegrown/MVL/SKILL.md`) at the Scope Check step instructing the runner: when the user's question contains a comparative term ("easier," "better," "more," "less," "cheaper," "faster") without an explicit comparator, surface "compared to what?" as a clarification before the inquiry begins. This is a runner-level context-elicitation patch.

Strength:

- Targets the runner-level observation.
- One-paragraph patch.
- Catches a specific recognizable phrasing.

Weakness:

- Pattern-matching on comparative terms produces false flags (sometimes the comparator is implicit and clear from context).
- Adds friction at the start of every comparative inquiry.
- Single-chain evidence; the user's "easier" phrasing is the only example.

Test:

- Novelty: medium.
- Scrutiny survival: medium-low. The pattern is real but the evidence is thin.
- Fertility: medium. Generalizes to other comparative questions.
- Actionability: medium.
- Mechanism independence: low.

Verdict: deferred / monitoring. Promote after another comparative-phrasing chain.

### Candidate M6 — Cross-Cutting "Name-And-Test Load-Bearing Anchors" Pattern

Shape:

A protocol-level rule applied at both Sensemaking (Phase 3 / Ambiguity Collapse) and Critique (Dimension Construction) requiring each load-bearing assumption to have an explicit counter-interpretation pair. This is the combination output from Mechanism 2.

Strength:

- One pattern, two applications.
- Targets the cross-discipline pattern (covertly held assumption survives because it is never named).

Weakness:

- Broader than M1 + M3 individually; the combined version risks fundamentals-rewrite framing.
- One correction chain does not justify a cross-cutting pattern definition.

Test:

- Novelty: medium-high.
- Scrutiny survival: medium. Strong as a concept; weak as a justified change from one chain.
- Fertility: high.
- Actionability: medium-low. Larger than the per-discipline patches.
- Mechanism independence: high.

Verdict: deferred. Promote after 2-3 chains show the same anchor-failure pattern. M1 and M3 cover the immediate need separately.

### Candidate M7 — Mark Prior Finding As Superseded

Shape:

Add `superseded_by:` or `corrected_by:` frontmatter to `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/finding.md` pointing at the corrected inquiry. Also add a top-level "## Status" note (e.g., "This finding's primary recommendation has been corrected; see [corrected path]") so any runner that reads the prior in isolation sees the correction.

Strength:

- Content-level cleanup.
- Trivial implementation.
- Prevents the prior's recommendation (create `devdocs/navigation_context/past_navigation_memory_file_index.md`) from being executed by a future runner.

Weakness:

- Not a process-level patch; does not prevent recurrence of the underlying failure pattern.

Test:

- Novelty: low.
- Scrutiny survival: high.
- Fertility: low. One-time fix.
- Actionability: high.
- Mechanism independence: low (only Absence Recognition produced it).

Verdict: candidate as a one-time content cleanup; orthogonal to process-level patches.

### Candidate M8 — Monitoring Only

Shape:

No source edits. Observe the next 3 normal MVL+ runs (any topic) and look for any of the four primary failure patterns (anchor-not-interrogated, candidate-not-probed, dimension-mismatch, Goal-clause imbalance). If none recur, archive this LOOP_DIAGNOSE finding as a one-off pattern. If one or more recurs, promote the relevant M1-M5 candidate.

Strength:

- Honors the LOOP_DIAGNOSE Step 5 guardrail (do not propose broad rewrites from one chain).
- Zero implementation cost.
- Preserves evidence for later promotion.

Weakness:

- Defers all preventive value.
- Monitoring requires the user to keep this finding visible across future runs (otherwise the patterns may not be checked).

Test:

- Novelty: low.
- Scrutiny survival: high. This is exactly what the protocol guardrail prescribes for borderline cases.
- Fertility: medium. The 3-run sample size is the gate that promotes other candidates.
- Actionability: high.
- Mechanism independence: medium.

Verdict: candidate as the always-on baseline. Combines with M1, M2, M3, M7 for the full diagnostic verdict.

### Candidate M9 — One-Time Canary Test

Shape:

Construct a synthetic question that has the same shape as the user's prior prompt (comparative-without-comparator + form-anchored phrasing) and run /MVL+ on it once. Observe whether the same cascade emerges. If yes, the failure pattern is reproducible and stronger evidence than the single chain; if no, the pattern may be content-specific.

Strength:

- Cheap empirical test.
- Distinguishes pattern from one-off.

Weakness:

- Synthesizing a "same-shape" question requires judgment.
- One canary test does not produce statistical confidence.
- The runner running it is the same runner that produced the prior (no cross-runner control).

Test:

- Novelty: medium.
- Scrutiny survival: medium.
- Fertility: medium.
- Actionability: medium.
- Mechanism independence: low.

Verdict: deferred. Useful supplement to monitoring (M8) but not primary.

## Assembly Check

The strongest assembly is:

```text
M1 (Sensemaking anchor-interrogation prompt)
  + M2 (Exploration probe-before-stabilization rule)
  + M3 (Critique duplicate-derivable-state dimension)
  + M7 (mark prior finding as superseded)
  + M8 (monitor next 3 MVL+ runs for recurrence; promote M4/M5/M6/M9 on recurrence)
```

Emergent value:

- M1 + M3 together create a "name-and-test load-bearing assumption" surface across two stages without needing to define M6's broader cross-cutting pattern.
- M2 covers the parallel Exploration shortcoming with the same pattern shape (named-but-not-probed → name-and-probe).
- M7 prevents the prior's content from being executed in isolation.
- M8 honors the protocol guardrail and keeps M4/M5/M6/M9 alive without committing to them.

Why this assembly is stronger than any single candidate: the cascade has multiple entry points (upstream and downstream). A patch only at the upstream Sensemaking layer (M1 alone) might fail if a future runner does not engage with Phase 1 / Constraints introspection; a patch only at the downstream Critique layer (M3 alone) might fail if Critique is bypassed in /MVL classic. The combination provides redundant coverage at low marginal cost.

## Proposed V1 Shape

### Candidates To Promote (ACTIONABLE)

- M1 (Sensemaking anchor-interrogation prompt). Risk class: low. Evaluation gate: in next 3 MVL+ runs, at least one Sensemaking output should produce an ambiguity-collapse pair targeting a Phase 1 / Constraints item.
- M2 (Exploration probe-before-stabilization). Risk class: low. Evaluation gate: in next 3 possibility-mode Exploration runs, at least one quantifiable candidate is empirically probed before stabilization.
- M3 (Critique duplicate-derivable-state dimension). Risk class: low. Evaluation gate: in next 3 Critique runs evaluating state-producing candidates, the duplicate-derivable-state dimension appears in the dimension list with a non-trivial weight.
- M7 (Mark prior finding as superseded). Risk class: low. Evaluation gate: prior `finding.md` frontmatter and Status note are both updated; verifiable by single read.

### Candidates To Defer / Monitor (DEFERRED)

- M4 (Goal-clause balance check). Gate: revive when another correction chain shows a similar Goal-clause imbalance. Why if revived: framing-level patches are upstream of all disciplines; if recurrence is real, this is the highest-leverage intervention.
- M5 (Comparator-surfacing prompt). Gate: revive when another correction chain shows comparative phrasing without explicit comparator. Why if revived: catches a specific recognizable input pattern.
- M6 (Cross-cutting name-and-test pattern). Gate: revive after 3+ chains show anchor-or-dimension failures. Why if revived: a single cross-discipline rule is more economical than per-discipline patches.
- M9 (One-time canary test). Gate: optional supplement to M8; run only if monitoring is ambiguous after 3 runs.

### Always-On Baseline

- M8 (monitoring next 3 MVL+ runs). Risk class: zero (no edits). Evaluation gate: after 3 runs, decide whether M4/M5/M6/M9 are warranted.

## Innovation Telemetry

Generators applied: 4 / 4 (Combination, Absence Recognition, Domain Transfer, Extrapolation).

Framers applied: 3 / 3 (Lens Shifting, Constraint Manipulation, Inversion).

Convergence: yes. Multiple mechanisms converge on the same core innovation: per-discipline narrow patches at the locations where the diagnosis identified specific absences (Sensemaking anchor surface, Exploration probe surface, Critique dimension surface) plus a content-cleanup patch and a monitoring baseline. Combination, Inversion, Domain Transfer, and Absence Recognition all point at the same "name-and-test" pattern at slightly different granularities.

Survivors tested: 9 / 9 candidate designs.

Failure modes observed: none. Premature evaluation avoided by generating before testing. Single-mechanism trap avoided (4G + 3F applied). Early frame lock avoided (M1 was not the first survivor; M3, M7, M8 were also tested independently). Innovation without grounding avoided (each candidate has an evaluation gate).

Overall: PROCEED.
