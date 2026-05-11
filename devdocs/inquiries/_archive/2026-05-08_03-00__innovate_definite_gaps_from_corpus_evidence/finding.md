---
status: active
---
# Finding: Innovate Discipline — Definite Gaps From Corpus Evidence

## Question

From `_branch.md`: across the seven LOOP_DIAGNOSE chain findings dated 2026-05-07 (chain 1 at `2026-05-07_15-01` through chain 7 at `2026-05-07_20-02`; LOOP_DIAGNOSE is the diagnostic protocol at `homegrown/protocols/loop_diagnose.md` that runs an MVL+ inquiry — the Extended Cognitive Loop with Exploration → Sensemaking → Decomposition → Innovation → Critique — over a correction chain to surface candidate methodology improvements) AND the corresponding chain inquiries' `docarchive/innovation.md` artifacts (the actual Innovation discipline outputs produced during each chain's MVL+ execution), what is **for-sure missing** from the Structural Innovation discipline spec at `homegrown/innovate/references/innovate.md`?

"For-sure missing" means the corpus evidence demonstrably shows the discipline is missing the rule (failure-of-absence + success-of-presence; not "might improve"). The user added a specific lens this analysis: examine whether Innovation's chain-finding outputs reveal a paradigm or dimension gap (the discipline is "not meta enough"), or whether the issue is allocated compute (the discipline ran fine but was given too little space).

The rule must be expressed in generic / meta-discipline language and placed per the placement convention at `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` (one canonical home + one-line cross-references at non-canonical surfaces; the convention itself is **not** embedded in `innovate.md`, per the prior `2026-05-07_23-27` decision on discipline-spec purity).

This is the fourth in a series of for-sure-missing analyses across the homegrown thinking disciplines. The prior three sister analyses produced two rules each for `explore.md` (`devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md`) and `sensemaking.md` (`devdocs/inquiries/2026-05-08_00-20__sensemaking_definite_gaps_from_corpus_evidence/finding.md`), and one rule for `decompose.md` (`devdocs/inquiries/2026-05-08_00-50__decompose_definite_gaps_from_corpus_evidence/finding.md`).

## Finding Summary

- **Two rules are for-sure missing** from `innovate.md`. Both close paradigm-level gaps the corpus exposes — gaps at specific layers of the discipline (Assembly Check and Termination), not at the mechanism layer.

- **Rule A — Axis Coverage Check at Phase 3 (Test) → Assembly Check.** When the Assembly Check examines the candidate set collectively, it must identify the candidate space's orthogonal axes (e.g., for a problem combining an operation with output storage: operation-trigger × storage-policy axes; for a phase-conditional rule problem: rule-content × phase-condition axes; for a problem with runtime-determined triggers: policy × discovery-mechanism axes) and verify each axis has at least one candidate variant. A candidate set that varies along only one axis when multiple are relevant is incomplete; the Assembly Check must explicitly flag the missing axis.

- **Rule B — Output Disposition Categories at Phase 3 (Test), after the 5-test table.** Outputs that pass the 5-test cycle (the 5 tests are novelty / scrutiny survival / fertility / actionability / mechanism independence) are dispositioned by evidence shape and observation type into three categories: ACTIONABLE if multi-source / multi-mechanism convergent; DEFERRED with explicit revival trigger if single-source / single-chain (preserve the option to refine on more evidence — killing it loses the path, promoting it overreaches); RESEARCH FRONTIER if the survivor requires multi-phase architectural work or otherwise exceeds per-inquiry scope. Failed outputs (those that did not pass the 5-test cycle) still become new seeds, as before.

- **Why these are for-sure missing (corpus evidence):**
  - Rule A: 4 chains × 4 distinct axes converge on the meta-pattern (chain 2's N3 = operation-trigger × storage-policy axes; chain 4's R3 = rule-content × phase-conditional axes; chain 5's S3 = trigger-classifier × structural-vs-input axes; chain 6's T3 = operation-policy × discovery-mechanism axes). Plus chain 1's primary failure (Innovation generated 6 storage-style candidates and missed the no-storage axis the user later supplied: *"why do we need an index if we can simply search the codebase"*).
  - Rule B: 7 chains use DEFERRED with revival trigger (the strongest evidence in the corpus). 5 chains (chains 3–7) use RESEARCH FRONTIER for the Q-RF Quality-Awareness Gap marker — observations that the runner recognized as system-level (per the `enes/desc.md` Predictive RC architecture) and preserved instead of killing or promoting.

- **Canonical homes (per the placement convention):**
  - Rule A canonical home: `homegrown/innovate/references/innovate.md`, Phase 3 (Test) → Assembly Check sub-section, as a follow-on paragraph after the existing Assembly Check description. Cross-reference: at Phase 2 (Generate), one-line pointer.
  - Rule B canonical home: same file, Phase 3 (Test), after the 5-test table, as a follow-on paragraph or sub-section. No cross-reference required (no other surface clearly connects).

- **Aggregate cost:** ~16–23 lines added to `innovate.md`. Comparable to the sister analyses (explore.md got ~25 lines, sensemaking.md ~20 lines, decompose.md ~6–10 lines).

- **The user's two hypotheses are directly answered with evidence.** The "allocated compute" hypothesis is REJECTED — Innovation runs in this corpus average ~450 lines per chain with full mechanism coverage (4 Generators + 3 Framers, 3 variations each), 6–9 candidates per chain, full assembly check, telemetry self-check confirming PROCEED. Innovation has plenty of compute and uses it thoroughly. The "paradigm/dimension gap" hypothesis is PARTIALLY SUPPORTED — but the gap is NOT in mechanism breadth (the 7 mechanisms cover the generation operation completely; the corpus uses all 7 and never introduces an 8th). The gap is at two specific layers downstream of generation: (i) the Assembly Check (axis coverage, addressed by Rule A) and (ii) the Termination logic (output disposition vocabulary, addressed by Rule B).

- **Speculative additions explicitly rejected:** DOCUMENTARY OBSERVATION as a 4th disposition (2-chain evidence is corpus-/protocol-level, not per-inquiry); cross-corpus composition rules (LOOP_DIAGNOSE-protocol-specific); cumulative refinement tracking (LOOP_DIAGNOSE-specific); an 8th generation mechanism (no corpus evidence; the 7 are complete); mechanism convergence threshold change (current 3+ works); new failure modes like Single-Axis Trap (positive-form rule at Assembly Check is sufficient; sister-analysis precedent of not introducing new failure modes).

- **Borderline-evidence caveats documented in this finding only, not in `innovate.md`** — discipline-spec purity preserved per the prior `2026-05-07_23-27` decision (Runtime-Purity Principle for Maintenance-Time Concerns).

## Finding

### 1. The two for-sure-missing rules

**Rule A — Axis Coverage Check.** Proposed addition to `homegrown/innovate/references/innovate.md` at Phase 3 (Test) → Assembly Check sub-section, as a follow-on paragraph after the existing Assembly Check description:

> **Axis coverage check.** Before producing the assembly verdict, examine the candidate set for the orthogonal axes it varies along. When the underlying problem has multiple orthogonal axes — for example, a problem that combines an operation with output storage has at least two axes (operation-trigger control and storage-policy control); a problem involving rules that may behave differently in different states has axes of rule-content and state-condition; a problem with runtime-determined triggers has axes of policy and discovery-mechanism — each axis should have at least one candidate variant. A candidate set that varies along only one axis when multiple orthogonal axes are relevant is incomplete; the Assembly Check must explicitly identify the candidate-space axes and flag any axis with no variant. Single-axis candidate sets often arise from a frame inherited from upstream pipeline stages; the axis-coverage check counters that bias.

**Rule B — Output Disposition Categories.** Proposed addition to `homegrown/innovate/references/innovate.md` at Phase 3 (Test), after the 5-test table (the 5 tests are novelty / scrutiny survival / fertility / actionability / mechanism independence), as a follow-on paragraph or sub-section:

> **Output disposition categories.** Outputs that pass the 5-test cycle are dispositioned by evidence shape and observation type:
>
> - **ACTIONABLE** — multi-source / multi-mechanism convergent. The default disposition for survivors with strong evidence; ACTIONABLE outputs are the terminating outputs that downstream consumers act on.
> - **DEFERRED with revival trigger** — single-source or single-mechanism survivors. Evidence is sufficient to pass the 5-test cycle but too thin for full ACTIONABLE confidence. The disposition preserves the option to refine on more evidence; killing the survivor loses the path, promoting it overreaches. Each DEFERRED output has an explicit revival trigger — a time-bound (e.g., "after N more inquiries"), condition-bound (e.g., "when sister-pattern X reaches 3 instances"), or observable (e.g., "if this rule does not fire effectively in the next 3 MVL+ runs") trigger that promotes the output to ACTIONABLE if met.
> - **RESEARCH FRONTIER** — survivors that require multi-phase architectural work or otherwise exceed per-inquiry scope. The output is preserved as an observation in the finding's Open Questions / Research Frontiers subsection; it is not proposed as an actionable candidate.
>
> Failed outputs (those that did not pass the 5-test cycle) still become new seeds, as before. The disposition categories apply only to passing survivors.

### 2. The cross-reference

Append to Phase 2 (Generate) in `innovate.md`, near the end of the Generate description or within the "Coverage Strategy" sub-section:

> For axis coverage of generated candidates, see Phase 3 (Test) → Assembly Check / Axis coverage check.

This is one line. It points readers who arrive at Generate toward the canonical home. The rule itself is not duplicated; only the navigation pointer lives at Generate.

### 3. Why this placement

The placement convention from `/Users/ns/Desktop/projects/native/enes/discipline_rule_placement.md` (Operation-or-Step-First with Scope-Of-Application) routes a rule to the surface where it fires.

- **Rule A** fires during Phase 3 (Test) → Assembly Check — the sub-step where survivors are examined collectively for emergent value. Axis coverage is a holistic check on the candidate set; the Assembly Check is the only sub-section in the spec that examines the candidate set as a whole. Placing the rule at Phase 2 (Generate) was considered but rejected: the corpus's per-chain rules (N3, R3, S3, T3) all explicitly target Assembly Check, not Generate. Testing each candidate individually (Phase 2 / Generate output) doesn't reveal axis gaps; only the holistic view does.

- **Rule B** fires at Phase 3 (Test) after individual outputs have been tested through the 5-test cycle. The dispositions categorize survivors at the moment they're identified — between individual testing and termination. Placing the rule at Iteration / Termination paragraph was considered but rejected: the dispositions are post-test categorizations, and Termination is about cycling between Generate and Test phases.

The cross-reference at Phase 2 (Generate) for Rule A handles the navigation case: a reader at Generate gets pointed to where the axis-coverage check lives. Rule B has no required cross-reference because no other surface clearly connects.

### 4. Why the corpus evidence is strong enough

The corpus's seven LOOP_DIAGNOSE chain `docarchive/innovation.md` files (the actual Innovation discipline outputs from each chain) are the new evidence layer this analysis adds. Sister analyses for `explore.md`, `sensemaking.md`, and `decompose.md` did not read docarchive; this one did, because the user's framing question (paradigm/dimension gap vs. compute) required examining what Innovation actually produced.

**Rule A's evidence: 4 chains × 4 distinct axes plus chain 1's primary failure.**

Each chain's docarchive innovation.md is ~450 lines with full 7-mechanism coverage. In four of those chains, Innovation surfaced a candidate that explicitly addresses axis coverage at the Assembly Check sub-section:

| Chain | Innovation-targeted candidate | Axis pair the candidate names |
|---|---|---|
| 2 (`2026-05-07_15-35`) | N3 — Innovation candidate-axis decoupling rule | operation-trigger × output-storage |
| 4 (`2026-05-07_16-57`) | R3 — Innovation phase-conditional candidate generation rule | rule-content × phase-conditional |
| 5 (`2026-05-07_18-24`) | S3 — Innovation differential-classifier candidate generation rule | trigger-classifier × structural-vs-input |
| 6 (`2026-05-07_19-08`) | T3 — Innovation discovery-mechanism candidate generation rule | operation-policy × discovery-mechanism |

Each candidate names a different specific axis pair. The meta-pattern they converge on: when the candidate space has multiple orthogonal axes, the candidate set should vary along each axis. A candidate set that varies along only one axis (when multiple are relevant) is incomplete — and the Assembly Check should flag this.

Plus chain 1's primary Innovation failure: the prior loop generated six candidates that all varied along storage-style only (full registry, append-only event log, per-file metadata, hybrid registry, scan-only, consumed-set). The structurally critical seventh candidate — the no-storage axis ("documented search contract; no maintained index") — was absent. The user later supplied it: *"but why do we need index if we can simply search the codebase."* Single-axis candidate set; missed the orthogonal axis. This is the failure-of-absence + success-of-presence pattern at the candidate-set layer.

**Rule B's evidence: 7-chain DEFERRED with revival trigger; 5-chain RESEARCH FRONTIER.**

DEFERRED with revival trigger appears in all 7 chains. Examples:
- Chain 1: M4 (Goal-clause balance check) deferred with revival trigger *"revive when another correction chain shows a similar Goal-clause imbalance"*; M5, M6, M9 similarly deferred.
- Chain 2: N5, N6, N9 deferred with revival triggers.
- Chains 3–7: each chain uses DEFERRED with revival triggers for thin-evidence survivors.

RESEARCH FRONTIER appears in chains 3–7 via the Q-RF (Quality-Awareness Gap) marker. Q-RF was introduced in chain 3 to capture the observation that the system has no internal mechanism to detect when its own output fails the user's quality property (the user's *"this still feels messy"* metacognitive signal). Chain 3's Innovation explicitly framed Q-RF as: *"NOT a maintenance candidate; framed as Research Frontier in the diagnostic finding's Open Questions / Research Frontiers subsection per the CONCLUDE template."* Chains 4–7 reinforced Q-RF with successive specific instances (calibration-awareness in chain 4; proxy-vs-structural-awareness in chain 5; operational-discovery-gap awareness in chain 6; vocabulary-naturalness awareness in chain 7).

In the current `innovate.md`, the Termination logic is binary: outputs that pass the 5-test cycle are ACTIONABLE survivors; outputs that fail the cycle become new seeds. There is no concept of DEFERRED with revival trigger or RESEARCH FRONTIER. The corpus uses these dispositions emergently — formalizing them is what Rule B does.

### 5. Why specific candidates were rejected

Six categories of speculative additions were considered and rejected on structural grounds:

- **DOCUMENTARY OBSERVATION as a 4th disposition** — 2-chain evidence (chains 6 and 7 surface the "Two-Layer Failure Framing" as a corpus-level observation about chain interdependencies). Rejected because the observations are corpus-/protocol-level (about chain N's relationship to chain M), not per-inquiry. innovate.md is a generic discipline spec for per-inquiry Innovation runs; corpus-level observations belong at LOOP_DIAGNOSE protocol level, not in innovate.md. Same logic that rejects cross-corpus composition. Revival trigger documented below.

- **Cross-corpus composition rules** (the M-N-O-R-S-T-U identifier scheme; extending previous candidates across chains; cross-chain promotion events). Rejected because this is protocol-specific behavior driven by LOOP_DIAGNOSE Step 5 + Step 6 guardrails. innovate.md is a generic discipline spec; LOOP_DIAGNOSE-specific behaviors belong at protocol level.

- **Cumulative refinement tracking** (e.g., M6 had 3 evolution events through chain 6; consolidation review at chain 7+). Rejected for the same reason: protocol-/corpus-specific.

- **An 8th generation mechanism** alongside the existing 7 (Combination, Absence Recognition, Domain Transfer, Extrapolation, Lens Shifting, Constraint Manipulation, Inversion). Rejected because the corpus uses exactly the 7 mechanisms in `innovate.md` and never introduces an 8th. The mechanism set is complete for the generation operation.

- **Mechanism convergence threshold change** (the current spec says 3+ mechanisms = high confidence). Rejected because the corpus uses this threshold and it works; no evidence of gap.

- **New failure modes** (Single-Axis Trap; Inherited Corridor Lock). Rejected because the positive-form rule (Rule A at Assembly Check) is sufficient. The sister analyses for `explore.md`, `sensemaking.md`, and `decompose.md` similarly added rules without introducing new failure modes — the precedent is consistent. The closest existing failure mode (Early Frame Lock) is structurally similar but its source differs (Innovation's own first-reframe vs. inherited from upstream pipeline); fitting the new rule under Early Frame Lock would stretch its meaning.

These rejections preserve the for-sure criterion's epistemic standard and the discipline-spec purity principle.

### 6. Per-chain coverage verification

The following table verifies that Rule A and Rule B together catch the corpus's primary Innovation failures and dispositions. Intentional non-coverage (where a rule deliberately doesn't fire) is structurally justified per the rejection logic above.

| Chain | Innovation primary failure / disposition | Caught by Rule A? | Caught by Rule B? |
|---|---|---|---|
| 1 (`2026-05-07_15-01`) | Single-axis storage-style candidate set; missed no-storage axis | YES — Rule A's check fires (operation-storage axis pair; only one variant) | YES — chain 1's M4/M5/M6/M9 are DEFERRED with revival triggers |
| 2 (`2026-05-07_15-35`) | (Innovation surfaced N3 axis-decoupling rule) | YES — Rule A is the meta-rule that N3 is one instance of | YES — chain 2's deferred candidates use DEFERRED |
| 3 (`2026-05-07_16-28`) | First Q-RF (Quality-Awareness Gap) emergence | (chain 3's primary failure was at a different layer; Rule A doesn't fire — intentional) | YES — Q-RF dispositioned as RESEARCH FRONTIER |
| 4 (`2026-05-07_16-57`) | Phase-conditional axis (R3) | YES — Rule A fires (rule-content × phase axis) | YES — DEFERRED + RESEARCH FRONTIER |
| 5 (`2026-05-07_18-24`) | Trigger-classifier axis (S3) | YES — Rule A fires (classifier × structural-vs-input axis) | YES — DEFERRED + RESEARCH FRONTIER |
| 6 (`2026-05-07_19-08`) | Discovery-mechanism axis (T3) + Two-Layer Framing | YES — Rule A fires (operation-policy × discovery-mechanism axis) | YES for DEFERRED + RESEARCH FRONTIER; NO for Two-Layer (intentionally rejected as out-of-scope per Section 5) |
| 7 (`2026-05-07_20-02`) | U1 vocabulary-validation; deferred candidates | YES — Rule A fires (validation × naming-coining axis) | YES — DEFERRED + RESEARCH FRONTIER |

Rule A catches 6 of 7 chains' axis-coverage failures (chain 3's failure was at a different layer; intentional non-coverage). Rule B catches DEFERRED in 7 of 7 chains and RESEARCH FRONTIER in 5 of 7 chains (3–7). The intentional non-coverage of Two-Layer Failure Framing in chains 6 and 7 is structurally justified by Section 5's rejection of DOCUMENTARY OBSERVATION as out-of-scope.

### 7. Direct address of the user's two hypotheses

The user framed the inquiry with two specific hypotheses about why Innovation might be underperforming, and asked for evidence-based judgment.

**Hypothesis 1: "Maybe it is about allocated compute."**

**Verdict: REJECTED with evidence.**

Innovation runs in this corpus average ~450 lines per chain. Each chain applies all 7 mechanisms (4 Generators + 3 Framers) with 3 variations each — that's 21 variation entries per chain. Each chain produces 6–9 candidates with full strength/weakness/test/verdict per candidate, runs an assembly check examining survivors collectively for emergent value, and runs a telemetry self-check confirming "Overall: PROCEED" with all 6 failure modes guarded against. No chain shows thin or rushed Innovation output. Compute is sufficient and Innovation uses it thoroughly.

**Hypothesis 2: "Maybe it is not meta enough" (paradigm/dimension gap).**

**Verdict: PARTIALLY SUPPORTED — but with localization.**

The gap is NOT in mechanism breadth. The 7 mechanisms in `innovate.md` (Combination, Absence Recognition, Domain Transfer, Extrapolation, Lens Shifting, Constraint Manipulation, Inversion) cover the generation operation completely. Across all 7 chains, Innovation applied all 7 mechanisms with 3 variations each and never introduced an 8th. The corpus's mechanism convergence (3+ mechanisms point to the same innovation = high confidence) works as designed.

The gap is at TWO specific layers downstream of generation:

- **(i) Assembly Check (axis coverage at the candidate-set layer; Rule A).** Innovation's mechanisms generate candidates within the inherited frame from upstream Sensemaking + Decomposition. Without an explicit axis-coverage check at Assembly, single-axis candidate sets pass through. 4 chains (2, 4, 5, 6) surfaced this gap with chain-specific axis-coverage rules (N3, R3, S3, T3); the meta-pattern is what Rule A formalizes.

- **(ii) Termination (output disposition vocabulary beyond binary survives/fails; Rule B).** The current spec has only ACTIONABLE survivors and KILLED outputs (which become new seeds). The corpus uses three additional dispositions: DEFERRED with revival trigger (7 chains), RESEARCH FRONTIER (5 chains, chains 3–7), and DOCUMENTARY OBSERVATION (2 chains; rejected here as corpus-/protocol-level, not generic). Rule B encodes the two strongly-evidenced dispositions (DEFERRED + RESEARCH FRONTIER).

**In short:** Innovation is producing the right output. What `innovate.md` lacks is structural scaffolding for HOW to verify candidate-set completeness (axis coverage at Assembly) and HOW to disposition outputs nuancedly (3 categories instead of 2 at Termination). Both gaps are paradigm refinements at the Assembly + Termination layers, NOT at the generation layer.

The user's instinct that Innovation is "the most important" discipline is consistent with the evidence — Innovation does the heavy lifting of producing candidate sets, and the gaps are at how its output is organized (axis coverage, disposition categorization), not at what it produces (the ideas themselves).

### 8. Comparison to sister analyses

This is the fourth in a series of for-sure-missing analyses across the homegrown thinking disciplines:

- `explore.md` (sister analysis at `devdocs/inquiries/2026-05-07_20-35__explore_discipline_definite_gaps_from_corpus_evidence/finding.md`): two rules — Type-Aware Probe + Contextual Surround Pre-Scan.
- `sensemaking.md` (sister analysis at `devdocs/inquiries/2026-05-08_00-20__sensemaking_definite_gaps_from_corpus_evidence/finding.md`): two rules — Load-Bearing Concept Test + Phase / Calibration-State Perspective.
- `decompose.md` (sister analysis at `devdocs/inquiries/2026-05-08_00-50__decompose_definite_gaps_from_corpus_evidence/finding.md`): one rule — Determination-Mechanism Piece Check.
- `innovate.md` (this finding): two rules — Axis Coverage Check + Output Disposition Categories.

Across the four disciplines, the methodology produces inventory proportional to actual corpus evidence (2 + 2 + 1 + 2 = 7 rules total). Innovation's two rules sit at distinct sub-surfaces of Phase 3 (Test); decompose.md's one rule sits at Step 7 (Self-Evaluate). This pattern reflects each discipline's structural role in the cascade — Innovation has TWO downstream gaps (axis coverage + disposition); Decomposition has ONE primary-cause gap (determination-mechanism piece check); Exploration and Sensemaking each had two upstream-cascade-source gaps.

## Next Actions

### MUST

- **What:** Apply Rule A (Axis coverage check) to `homegrown/innovate/references/innovate.md` at Phase 3 (Test) → Assembly Check sub-section, as a follow-on paragraph after the existing Assembly Check description; append the one-line cross-reference at Phase 2 (Generate).
- **Who:** User-confirmed surgical edit to `innovate.md` (matching the pattern from the explore.md, sensemaking.md, and decompose.md sister edits, where the user gives a "yes, be surgical" or equivalent confirmation before the edit is applied).
- **Gate:** when the user confirms.
- **Why:** Without Rule A, the next MVL+ run that produces a candidate set within an inherited single-axis corridor will not have the explicit axis-coverage check at Assembly and may repeat chain 1's failure pattern (single-axis bias).

- **What:** Apply Rule B (Output disposition categories) to `homegrown/innovate/references/innovate.md` at Phase 3 (Test), after the 5-test table, as a follow-on paragraph or sub-section.
- **Who:** User-confirmed surgical edit.
- **Gate:** when the user confirms.
- **Why:** Without Rule B, the next MVL+ run that produces thin-evidence survivors or system-level observations will have no structured disposition vocabulary; the runner will either kill valuable observations (lose information) or promote them as ACTIONABLE despite insufficient evidence (overreach).

### COULD

- **What:** Re-run this for-sure-missing methodology against `homegrown/td-critique/references/td-critique.md` (the Structural Critique discipline spec). With this finding, four of five Extended Cognitive Loop disciplines have been analyzed under the same standard. Critique remains.
- **Who:** Same methodology, applied via `/MVL+` to td-critique.md.
- **Gate:** user decision.
- **Why:** Even a "no for-sure gaps" verdict for td-critique.md would be a useful confirmation that completes the series; an actual gap would be a candidate for the same surgical-edit pattern. Five disciplines analyzed under the same standard would establish a methodology-library-level coverage claim.

### DEFERRED

- **What:** Encode DOCUMENTARY OBSERVATION as a 4th disposition in Rule B, alongside ACTIONABLE / DEFERRED / RESEARCH FRONTIER.
- **Gate:** Observable — pattern reaches 3+ chains AND the observations become per-inquiry-applicable (not corpus-/protocol-level cross-chain interdependency observations).
- **Why (if revived):** If DOCUMENTARY pattern recurs in 3+ chains AND the observations are about per-inquiry candidate dispositions (rather than cross-chain interdependencies), the disposition is generic enough to encode in `innovate.md`. Until then, DOCUMENTARY OBSERVATION belongs at LOOP_DIAGNOSE protocol level if anywhere.

- **What:** Promote a new failure mode (Single-Axis Trap or Inherited Corridor Lock) alongside the existing 6 failure modes in `innovate.md`.
- **Gate:** Observable — Rule A's positive-form check is shown to be insufficient in the next 3 MVL+ runs producing candidate sets with multiple orthogonal axes (i.e., the rule fires correctly but candidates still pass through with single-axis sets). OR if a future LOOP_DIAGNOSE chain surfaces a structurally distinct single-axis failure that Rule A's positive form doesn't catch.
- **Why (if revived):** A failure mode would make the failure visible in the catalog (alongside Premature Evaluation, Single-Mechanism Trap, Early Frame Lock, etc.) and provide a cross-reference path from failure-mode-prevention surface to the canonical home. Until then, the positive-form rule is sufficient.

## Reasoning

This finding's "for-sure missing" verdict comes from running the Extended Cognitive Loop (Exploration → Sensemaking → Decomposition → Innovation → Critique) over the seven LOOP_DIAGNOSE chain findings AND the chain inquiries' `docarchive/innovation.md` artifacts (the new evidence layer this analysis adds compared to sister analyses).

**Exploration** mapped the territory across three regions: (A) the current `innovate.md` spec content, (B) what Innovation actually produced in each chain (the 7 docarchive files), (C) what the chain finding ultimately concluded. The exploration's signal-first entry point probed the user's two hypotheses directly. Frontier converged stable: full mechanism coverage in every chain (the compute hypothesis is empirically refuted); 4-chain convergence on axis-coverage gap; 7-chain DEFERRED + 5-chain RESEARCH FRONTIER convergence on disposition vocabulary gap.

**Sensemaking** stabilized the answer through six Sense Versions. Five ambiguities collapsed: (1) Rule B encodes 3 dispositions (DOCUMENTARY OBSERVATION rejected as out-of-scope); (2) Rule A canonical home at Phase 3 / Test → Assembly Check (not Phase 2 / Generate); (3) no new failure modes introduced (positive-form rule sufficient; sister-analysis precedent); (4) Rule B canonical home at Phase 3 / Test after the 5-test table (not Iteration / Termination paragraph); (5) caveats / revival triggers in finding only (per the discipline-spec purity principle from the prior `2026-05-07_23-27` decision).

**Decomposition** partitioned the answer into five pieces (A-1: Rule A; B-1: Rule B; F-1: filter doc; V-1: per-chain verification; U-1: user-hypothesis address), validated bottom-up (23 atoms all mapping cleanly), and self-evaluated all 7 dimensions PASS. The new Determination-Mechanism Piece Check rule (just added to decompose.md in the prior sister inquiry) was applied: the Q-tree has no load-bearing concept whose use depends on a runtime determination — passes.

**Innovation** generated the concrete wording for both rules and the cross-reference. Five tests (novelty / scrutiny survival / fertility / actionability / mechanism independence) all passed for both rules. Mechanism independence: 5 mechanisms converge on Rule A; 6 mechanisms converge on Rule B. Convergence HIGH. Self-applying check: this Innovation phase produced both ACTIONABLE survivors (A-1, B-1) and documentation pieces (F-1, V-1, U-1) — illustrating Rule B's multi-tier disposition in its own output structure.

**Critique** evaluated against 9 dimensions with weights (For-Sure Criterion 25%, Generic Framing 15%, Placement Convention 15%, Discipline-Spec Purity 15%, Coverage 10%, Implementation Cost 5%, Speculative-Filter 5%, User Hypothesis 5%, Non-Ambiguity 5%). Verdict: SURVIVE. All 4 critical dimensions HIGH. Adversarial strength STRONG (10 prosecution objections; 13 defense rebuttals). Self-Reference Collapse defended (dimensions extracted from sensemaking output, not generated by critique). Convergence STABLE. Clean SURVIVE with no critical-dimension caveats.

**Significant kills** (each rejected with structural rationale, preserved here for transparency):

- **Single integrated rule** combining Rule A and Rule B. Considered briefly as a way to reduce line count. Rejected because the two rules fire at different sub-surfaces of Phase 3 / Test (Assembly Check vs. post-5-test-table) with different triggers and different actions; combining them would create an awkward abstraction.

- **DOCUMENTARY OBSERVATION as a 4th disposition** in Rule B. 2-chain evidence (chains 6 and 7 surface "Two-Layer Failure Framing"). Rejected because the observations are corpus-level (about chain N's relationship to chain M), not per-inquiry. innovate.md is a generic per-inquiry discipline spec; corpus-level observations belong at LOOP_DIAGNOSE protocol level. Same logic as cross-corpus composition rejection. Revival trigger documented in DEFERRED above.

- **Cross-corpus composition rules** (the M-N-O-R-S-T-U identifier scheme; extending previous candidates across chains; cross-chain promotion events). Rejected because protocol-specific behavior driven by LOOP_DIAGNOSE Step 5 + Step 6 guardrails. innovate.md is generic; LOOP_DIAGNOSE-specific behaviors belong at protocol level.

- **Cumulative refinement tracking** (e.g., M6 had 3 evolution events through chain 6; consolidation review at chain 7+). Rejected: protocol-/corpus-specific.

- **An 8th generation mechanism** alongside the existing 7. Rejected because the corpus uses exactly the 7 mechanisms in `innovate.md` and never introduces an 8th. Mechanism set is complete for the generation operation.

- **Mechanism convergence threshold change** (currently 3+ mechanisms = high confidence). Rejected: corpus uses this threshold and it works.

- **New failure mode introduction** (Single-Axis Trap; Inherited Corridor Lock). Rejected because the positive-form rule at Assembly Check is sufficient; sister-analysis precedent of not introducing new failure modes from these analyses; no clean fit with existing failure modes (Early Frame Lock is structurally close but its source differs — Innovation's own first-reframe vs. inherited from upstream).

- **Adding a "candidate-space mapping" phase between Generate and Test.** Considered as a contrarian innovation in the Absence Recognition mechanism. Rejected as overreach: the corpus doesn't justify a new phase, only refinements to existing phases.

**Survivors that held:**

- Rule A (Axis Coverage Check at Phase 3 / Test → Assembly Check): held because 4-chain × 4-axis cross-cutting convergence + chain 1 primary failure gives strong multi-chain evidence of the meta-pattern; the rule's wording is generic with illustrative examples that ground (without locking) the abstraction.

- Rule B (Output Disposition Categories at Phase 3 / Test, after the 5-test table): held because 7-chain DEFERRED with revival trigger is the strongest evidence in the corpus and 5-chain RESEARCH FRONTIER is well-established (chains 3–7 all use Q-RF). The rule formalizes what the corpus already does; the runner's existing intuitive practice gets a structured vocabulary.

- One-line cross-reference at Phase 2 / Generate. Held because the placement convention prescribes one-line pointers at non-canonical surfaces.

- Caveats and revival triggers in this finding only, not in spec. Held because of discipline-spec purity (per the `2026-05-07_23-27` decision) and because the caveats are not load-bearing on the rules' runtime behavior.

**Why two rules and not one or three:**

A single rule (combining Rule A and Rule B) was rejected for awkward abstraction (different sub-surfaces, different triggers). A third rule (e.g., promoting DOCUMENTARY OBSERVATION as a 4th disposition; or a separate rule for cross-document scope assessment) was rejected because the evidence base for additional rules either doesn't reach the for-sure threshold (DOCUMENTARY at 2 chains) or is project-/protocol-specific (cross-document scope assessment is implicitly handled by Rule B's "out-of-inquiry scope" recognition cue without needing specific document references). Two rules at two distinct sub-surfaces of Phase 3 (Test) is the right shape.

## Open Questions

### Monitoring

- **Effective firing of Rule A in next 3 MVL+ runs producing candidate sets with multiple orthogonal axes.** If the rule does not fire when applicable — i.e., the runner does not recognize that the candidate space has multiple axes, or does not flag missing variants — the rule's wording or examples may need refinement. Observable after 3 such runs.

- **Effective firing of Rule B in next 3 MVL+ runs producing thin-evidence survivors or system-level observations.** If thin-evidence survivors are not dispositioned as DEFERRED with revival trigger, OR if system-level observations are not dispositioned as RESEARCH FRONTIER, the rule's recognition cues may need refinement. Observable after 3 such runs.

### Refinement Triggers

- **DOCUMENTARY OBSERVATION as a 4th disposition.** If the pattern recurs in 3+ chains AND the observations are about per-inquiry candidate dispositions (rather than cross-chain interdependencies), promote DOCUMENTARY OBSERVATION to a 4th disposition in Rule B. Until then, the 2-chain evidence (chains 6 and 7) is below the cross-cutting promotion threshold AND the observations are corpus-level rather than per-inquiry.

- **Single-axis instances within Rule A's meta-pattern.** Each of the four chain-specific axes (operation-storage; rule-content × phase; classifier × structural-vs-input; policy × discovery-mechanism) is single-chain. The meta-pattern is 4-chain convergent, which passes the for-sure criterion. If a future MVL+ run produces a candidate set with a fifth distinct axis pair that Rule A's general wording doesn't recognize, the rule's example list may need expansion.

- **New failure mode promotion** (Single-Axis Trap or Inherited Corridor Lock). Revival trigger: in next 3 MVL+ runs producing candidate sets with multiple orthogonal axes, the positive-form rule (Rule A at Assembly Check) is shown insufficient (rule fires correctly but candidates still pass through with single-axis sets) OR a future LOOP_DIAGNOSE chain surfaces a structurally distinct single-axis failure not caught by Rule A's positive form. If neither condition fires, the positive-form rule's sufficiency is confirmed.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+

okay if you read all inquiries finding.md files starting from devdocs/inquiries/2026-05-07_15-01__loop_diagnose__past_navigation_memory_index_vs_search now (do it ) and focus only to innovate  homegrown/innovate/references/innovate.md   

can you tell me 
what is missing from it? how it can be fixed ? but understand that changes should be generic and meta defined bc this is a thinking discipine . 

please look all inquiries starting with  2026-05-07_15-01 and tell me how we can improve/fix innovate
in a for sure way, 

not "might improve" but sth that is def missing with it and if we add/fix then it would be def more robust for next run s and innovation is the one discipline that should have supposedly come up with cool ideas i gave later reading the docs. i would argue it is one of most important and we shoudl try to understand innovate's limitations in these diagnoses cases by reading docarchieve and what paradigm or dimension innovate missed and why. maybe it is not meta enough? or simply it is about allocated compute
```

</details>
