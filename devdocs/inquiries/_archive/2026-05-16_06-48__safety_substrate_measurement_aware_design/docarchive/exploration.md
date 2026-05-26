# Exploration — Safety Substrate Measurement-Aware Design Territory

## User Input

```
/Users/ns/Desktop/projects/native/devdocs/inquiries/2026-05-16_06-48__safety_substrate_measurement_aware_design/_branch.md

Mode: blended. Read 3 prior findings + enes/regression/desc.md + enes/stability_preservation_via_git.md + enes/evolving_quality_assetment_component.md. Surface measurement-output contracts per substrate component (obvious first, then novel). Cross-reference: structural-check decision tree; user-named self-maintenance milestone D-M5/D-M9. Surface confirmed-absent regions: cross-component interactions; output schemas.
```

---

## Territory Overview

**Mode.** Blended.
- *Artifact mode:* the substrate components, their current state, and the measurement consumers are concrete and readable from the three prior findings + the canonical source texts.
- *Possibility mode:* the measurement-output CONTRACTS each substrate component would emit are conceptual and must be surfaced from completeness-first analysis.

**Entry point.** Signal-first. Seed signal: the measurement-aware-design framing inverts the substrate-then-measurements ordering. The exploration probes whether the inversion is structurally honest given current state.

**Regions:**

| Region | What it covers | Resolution |
|---|---|---|
| **A. Substrate components inventory** | The 6 components named across prior findings, their current build state, and named outputs | high |
| **B. Measurement consumers** | Q4a / Q4b / Q4c + Q1b cross-reference; what each consumes today and what they would consume given substrate ready | high |
| **C. Output-contract candidates** | What each substrate component MIGHT emit such that measurements consume directly — completeness-first | medium-high (possibility mode) |
| **D. Inter-component interactions** | How substrate components feed each other; central vs peripheral | medium (largely unspecified in priors) |
| **E. Construction state** | Which components are operational / specified / named-but-unbuilt / never-built | high (verified directly) |
| **F. Confirmed-absent regions** | Gaps in cross-component spec; output schemas; interaction protocols | high |

---

## Inventory

### Region A — Substrate components (6 named)

The parent project-identity finding + the structural-check finding together name 6 substrate components.

**1. Regression-symptom catalog** (`enes/regression/desc.md`). Specified. 23 symptoms across 5 types (output / experience / pipeline / error / spec) + 5 diagnostic patterns (Surface Run, Confirmation Bias, Introduced Error, Pipeline Degradation, Slow Drift) + canary-test design + detection-timeline (Earliest spec → During experience → After output → Downstream pipeline → Across slow drift). Each symptom has Name / Type / Signal / Baseline / Deviation / Specificity / Severity / Context / Combination fields. **Current state:** spec exists; runtime instantiation is human-applied (the catalog is the reference; humans match symptoms; no automated detector). **Named outputs:** symptom-match records (which symptoms fired against what observation).

**2. Stability preservation / snapshot mechanism** (`enes/stability_preservation_via_git.md`). Operational. The git-archive + rename + side-by-side install pattern is documented and demonstrated. **Current state on disk:** `archived_skills/` contains ONE snapshot (`bf4ae1f-hg/`) + an install script (`install_bf4ae1f_for_claude.sh`). *(Prior finding claimed "at least two snapshots"; only one is present today.)* **Named outputs:** invokable past-version slash commands (e.g., `/bf4ae1f-sense-making`) that produce outputs comparable to current versions on the same input.

**3. Canary reference runs.** Named, not built. The regression-catalog spec describes the canary test: maintain ONE saved reference run per discipline; re-run periodically (every 5-10 sessions or after significant edits); qualitative comparison (as rich? as surprising? as useful? frontier comparable?). **Current state:** no canary references exist on disk; no per-discipline reference-run inventory. **Named outputs (per spec):** comparison verdicts (`as_good_as_reference` boolean + qualitative gap statement per dimension).

**4. Change Log sections in spec files.** Named, not built. The regression-catalog spec mentions "Change Log sections planned for critical files (not yet added)." **Current state:** no spec files in `homegrown/` currently carry a Change Log section. **Named outputs:** per-edit summary records embedded in the spec file itself (date / what changed / why).

**5. Pre-edit git check.** Named, not built. The regression-catalog spec mentions "Pre-edit git check planned for CLAUDE.md (not yet added)" — would create friction against uninformed edits. **Current state:** no pre-edit hook is configured. **Named outputs (per spec design):** pre-edit warnings flagging what's about to change before the edit commits.

**6. Structural-check mechanism (post-prior-inquiry decision tree).** State 0 being applied. The just-completed structural-check inquiry committed Hybrid A+D-with-decision-tree: 4 spec edits to MVL/MVL+ at lines 23/26/159/197 to make LLM-self-check canonical with substrate-honest Mechanism note; adversarial-test commitment as Next Action; State 1 conditional on test outcome (Path A locked-in / Path B built / Hybrid B+C built). **Current state:** State 0 spec edits queued (the parent inquiry's MUST item); test not yet run. **Named outputs (per spec):** structural-check verdict `[PASS] (N/M sections present)` or `[FAIL: missing-elements]` recorded in `_state.md`.

### Region B — Measurement consumers

The self-improvement-rate finding committed Q4a, Q4b, Q4c (retention-phase measurable questions). Plus Q1b (trigger-phase absence-of-need check) has a cross-reference to the regression-symptom catalog.

**Q4a — Slow-drift detection frequency.**
- Today's form: manual qualitative drift-detection events flagged by the user.
- Full form (Tier 2 — when canary ships): canary reference runs maintained per discipline + frequency of slow-drift detection events per N re-runs + which canary problems re-run produce thinner output than reference.
- **Substrate dependency:** canary reference runs (substrate component 3) + symptom catalog Pattern 5 (component 1).
- **What Q4a would consume:** a per-canary-re-run record with comparison verdict + slow-drift symptoms that fired.

**Q4b — Reverted vs superseded fraction.**
- Today's form: git-diff analysis of spec changes. Distinguish reverted-as-regression from superseded-by-better.
- Calibration tier: Tier 1 today (observable in git history with reviewer judgment).
- **Substrate dependency:** git history (always available) + spec-edit annotation convention (potentially derived from Change Log sections, component 4) + snapshot mechanism for comparison (component 2).
- **What Q4b would consume:** per-spec-edit classification (`reverted-as-regression` / `superseded-by-better` / `new-content`) with rationale.

**Q4c — Per-edit spec-symptom check.**
- Today's form: manual inspection per edit against the 4 Type-5 spec-symptoms (Shorter-than-before / Missing sections / Weakened language / Removed safeguards).
- Could-be-automated form: structural-check tool (component 6) detects Type-5 symptoms automatically; the structural-check decision tree's State 1 outcome determines whether automation ships.
- **Substrate dependency:** regression-symptom catalog Type-5 (component 1) + pre-edit git check (component 5) + structural-check tool (component 6) + Change Log sections (component 4 — Missing-sections symptom references Change Log).
- **What Q4c would consume:** per-edit symptom-fire records (which Type-5 symptoms fired on this edit).

**Q1b — Absence-of-need claim verification (cross-reference; not retention phase).**
- The self-improvement-rate finding's Q1b explicitly references the 5 regression-symptom types as the absence-check substrate.
- **Substrate dependency:** regression-symptom catalog (component 1).
- **What Q1b would consume:** symptom-class-by-class absence records ("no output symptoms observed / no experience symptoms / no pipeline symptoms / no error symptoms / no spec symptoms").

### Region C — Output-contract candidates (possibility mode)

Completeness-first: obvious contracts first; novel ones after.

**Obvious contracts** (one per substrate component, mapped to natural consumer):

| Substrate component | Output contract | Consumer |
|---|---|---|
| 1. Regression-symptom catalog | Per-observation, list of fired-symptoms (subset of the 23) + diagnostic-pattern matches | Q4c (Type 5 subset); Q1b (all 5 types); Q4a (Pattern 5 specifically) |
| 2. Snapshot mechanism | Per-A/B comparison, qualitative gap statement + comparable-vs-degraded verdict | Q4a (drift severity); Q4b (revert-vs-supersede when paired with git history) |
| 3. Canary reference runs | Per-canary-re-run, comparison verdict (as good / drift-detected) + per-dimension gap | Q4a (the primary consumer) |
| 4. Change Log sections | Per-edit, change-summary record (what changed; why; supersedes-prior-edit-X-or-not) | Q4b (the "supersedes" annotation IS the supersede classifier); Q4c (Missing-sections symptom watches for sections referenced by Change Log) |
| 5. Pre-edit git check | Per-edit, symptom-fire record (which Type-5 symptoms fired BEFORE the edit commits) | Q4c (the primary consumer) |
| 6. Structural-check tool (post-test-outcome) | Per-discipline-output, `[PASS]/[FAIL: missing-elements]` record + (if Path B/B+C built) the missing-element list | Q4c (automated form, conditional on State 1 outcome) |

**Novel contracts:**

7. **Unified safety-event log.** A single append-only log file (`devdocs/safety_event_log.md` or similar) where ALL substrate components write event records. Each event has: timestamp / component-source / event-type / target (inquiry, spec-file, discipline-output) / severity / details. The measurement consumers FILTER the log by their lens. *Advantage:* centralized data model; one place to query. *Disadvantage:* coupling between components via the shared log; risk of log-format drift.

8. **Pre-vs-post snapshot diff schema.** A structured format for canary comparisons with named fields: `drift_detected: bool`, `per_section_delta: list[{section, change_type, severity}]`, `overall_richness_verdict: enum`, `frontier_question_count_delta: int`. Both Q4a and Q4b consume; canary mechanism + snapshot mechanism produce.

9. **Spec-edit annotation convention.** When a spec is edited, the commit message follows a structured format: `[type]: edit-summary; supersedes: prior-edit-sha-or-NA; type-5-symptoms-fired: none-or-list`. Both Q4b and Q4c read the annotation. Replaces ad-hoc Change Log sections (component 4) with git-native annotation.

10. **Per-discipline canary baseline manifest.** A central file (`devdocs/canary_baselines/<discipline>.md`) listing the canary problem + reference output snapshot + last re-run date + drift-detection threshold. Both Q4a and the canary mechanism read this. Replaces ad-hoc per-discipline reference runs with a structured catalog.

### Region D — Inter-component interactions

The prior findings discuss each component largely in isolation. Interactions surfaced:

**i1. Canary re-runs use the snapshot mechanism.** When canary problem X is re-run against the current version of discipline D, the script must compare current-output to baseline-output. The snapshot mechanism's side-by-side install (`/<sha>-D` vs `/D`) provides the comparison primitive. **Dependency:** canary (3) → snapshot (2).

**i2. Q4c's "Missing-sections" Type-5 symptom references Change Log.** Per `enes/regression/desc.md`: *"Missing sections — a section that's referenced in the Change Log no longer exists in the spec."* For this symptom to fire, Change Log sections must EXIST in spec files. **Dependency:** Q4c via component 1 → component 4.

**i3. Pre-edit git check is the symptom catalog's runtime instantiation for Type 5.** The catalog defines what Type-5 symptoms look like; the pre-edit check is the mechanism that detects them as edits commit. **Dependency:** component 5 → component 1.

**i4. Structural-check tool (post-decision-tree State 1 if Path B builds) overlaps with pre-edit git check.** Both check structural compliance, but at different times: pre-edit check fires BEFORE the edit commits; structural-check tool fires AFTER a discipline runs. Path B's universal-sentinel script could partially cover the Type-5 "Missing sections" symptom (the script detects discipline-output missing sections, not spec-edit missing sections). **Boundary:** they observe different artifacts at different times; complementary, not redundant.

**i5. Canary reference runs depend on the snapshot mechanism's runtime invocation pattern.** The canary mechanism's "compare current output to baseline" requires both current and baseline outputs available at comparison time. The snapshot mechanism provides the baseline-output via the side-by-side install. **Dependency:** component 3 ↔ component 2 (bidirectional).

### Region E — Construction state

| Component | State |
|---|---|
| 1. Regression-symptom catalog | **SPECIFIED** (catalog in enes/regression/desc.md; runtime instantiation human-applied) |
| 2. Snapshot mechanism | **OPERATIONAL** (1 snapshot present: bf4ae1f-hg; mechanism demonstrated) |
| 3. Canary reference runs | **NAMED-NOT-BUILT** (spec describes the test; no canaries exist on disk) |
| 4. Change Log sections | **NAMED-NOT-BUILT** (mentioned as planned; no spec files carry them) |
| 5. Pre-edit git check | **NAMED-NOT-BUILT** (mentioned as planned for CLAUDE.md; no hook configured) |
| 6. Structural-check tool | **STATE-0-IN-FLIGHT** (4 spec edits queued from prior inquiry; test commitment pending) |

**Operational summary:** 1 component operational, 1 fully specified, 1 in-flight, 3 named-not-built. The safety substrate is mostly in spec-only or aspirational form.

### Region F — Confirmed-absent

- **No cross-component interaction protocol** is specified in any prior finding. Each component is described in isolation; interactions (per Region D) are inferred from the components' definitions but never integrated.
- **No output-schema specifications.** Each substrate component is named by purpose, not by data shape. The measurement consumers therefore have no guaranteed input format — they would consume ad-hoc text and apply LLM judgment to extract structure.
- **No central event-log mechanism.** Each component, if it emits anything, would emit standalone artifacts. No coordination point.
- **No per-discipline canary baseline manifest.** The canary spec describes the test but not where baselines live or how they're indexed.
- **No spec-edit annotation convention.** Commit messages in this project are free-form; Q4b's "reverted vs superseded" classification has no machine-readable annotation to rely on.
- **No pre-edit hook integration mechanism.** Git pre-commit hooks vs runner-invoked check vs manual reviewer? The component is named without specifying execution context.
- **No `tools/structural_check.sh` on disk** (correctly absent per the prior inquiry's decision; State 0 keeps it absent).
- **No measurement-aware-design principle in any prior document.** The user surfaced the framing in this conversation; no project text commits to it yet.
- **Prior finding's claim of "at least two snapshots" is incorrect** — only one (bf4ae1f-hg) exists. Minor empirical correction.

---

## Signal Log

| Signal type | Signal | Disposition | Reasoning |
|---|---|---|---|
| **Density** | 6 substrate components, 3 measurement consumers + 1 cross-ref; 6 obvious output contracts; 4 novel; 5 inter-component interactions. Tightly bounded territory. | **Probed.** | Bounded territory allows confident decomposition. |
| **Density** | The regression-symptom catalog references Change Log explicitly (Missing-sections symptom). The catalog ALSO references reference runs (canary). These cross-references mean components 1, 3, 4 are STRUCTURALLY INTERLOCKED, not independent. | **Probed.** | Confirms the measurement-aware design must address interactions, not just per-component contracts. |
| **Novelty** | The "unified safety-event log" (novel contract 7) is the most centralized data-model option. It could simplify measurement consumption but introduces format coupling. | **Probed; deferred to Decomposition.** | Tension between centralization (one place to query) and decoupling (per-component artifacts) is a real design decision. |
| **Novelty** | The "spec-edit annotation convention" (novel contract 9) replaces Change Log sections with git-commit-message annotations. This collapses two named components (4 and 5) into a single git-native mechanism. | **Probed; load-bearing for Sensemaking.** | Could materially simplify the substrate by REMOVING a named component (Change Log sections) in favor of an annotation convention. Sensemaking must test. |
| **Tension** | Q4b's calibration tier was Tier 1 in the prior finding ("observable today via git history with reviewer judgment"). But Q4b's revert-vs-supersede distinction implicitly requires an annotation convention (or reviewer judgment per edit). Without convention, "Tier 1" is "Tier 1 if a reviewer judges each edit" — borderline. | **Surfaced as inheritance-re-test issue for Sensemaking.** | The inherited Q4b tier may be over-claimed; Sensemaking's Inherited Commitments Re-test should evaluate. |
| **Tension** | Q4a was Tier 2 (when-canary-ships) AND partial Tier 1 (manual qualitative). But the canary mechanism itself depends on the snapshot mechanism (interaction i1). The "ships" condition is multi-component, not single-component. | **Surfaced for Decomposition.** | The "calibration tier" framing oversimplifies by treating each Q as having a single substrate dependency. |
| **Relevance** | The structural-check decision tree's State 1 outcomes each imply different substrate components built next. Specifically: catch-rate ≥0.85 → no script built (Path A locked-in); 0.65-0.85 → Path B script built; <0.65 → Hybrid B+C (script + protocol). The substrate's measurement-aware design must anticipate all three branches. | **Probed.** | Critique will need to evaluate the design under all three branches. |
| **Absence** | No output-schema specifications anywhere in the project. This is the deepest gap. Without schemas, measurement consumers consume ad-hoc text. | **Probed.** | Innovation should generate candidate schemas. |
| **Empirical** | Only 1 snapshot exists in archived_skills/, not "at least two" as the parent finding claimed. | **Probed; recorded.** | Minor empirical correction; doesn't change conclusions but should be noted in Inherited Commitments Re-test. |

---

## Confidence Map

| Region / sub-region | Level | Evidence basis |
|---|---|---|
| **A. Substrate components inventory** | **confirmed** | All 6 components named in prior findings; build state verified directly on disk. |
| **B. Measurement consumers** | **confirmed** | Q4a/b/c are from the self-improvement-rate finding's Phase 4 deliverable; wordings are stable. |
| **C. Obvious output contracts** | **confirmed** | Each maps to a specific substrate component + a specific consumer; mapping is straightforward. |
| **C. Novel output contracts (7-10)** | **scanned** | Each is a plausible alternative; structural merit varies; downstream disciplines decide adoption. |
| **D. Inter-component interactions (i1-i5)** | **confirmed** | Each is documented in or directly derived from the source texts. |
| **E. Construction state** | **confirmed** | Directly verified via filesystem inspection + prior finding wording. |
| **F. Confirmed-absent regions** | **confirmed-absent** | All gaps are explicit (no schema, no event log, no interaction protocol, etc.). |
| — Minor empirical correction (1 snapshot, not 2) | **confirmed** | Direct filesystem inspection. |
| — Q4b "Tier 1" tier inheritance | **flagged for re-test** | The tier claim implicitly assumes an annotation convention not yet committed. |

---

## Frontier State

**Status: stable.**

1. *Frontier stability:* the 6 substrate components and 3+1 measurement consumers form a bounded territory. Further reading would refine, not extend.
2. *Declining discovery rate:* the last passes (cross-component interactions; novel contracts) added integration detail without surfacing new components or new consumers.
3. *Bounded gaps:* the confirmed-absent regions are within the territory (cross-component interaction protocol; output schemas; event log; etc.), not beyond it.
4. *Jump-scan:* deliberately jumped to filesystem-state verification (archived_skills/ contents + protocol files). Surfaced one empirical correction (1 snapshot, not 2). No structural surprises.

---

## Gaps and Recommendations

### To Sensemaking
- **The dominant cognitive anchor for "measurement-aware design."** Four candidate framings: (a) substrate-emits-measurement-inputs (contracts as primary); (b) measurement-defines-substrate-requirements (consumer-driven design); (c) substrate-and-measurement-co-designed (peer relationship); (d) unified-data-model (event-log as the shared substrate).
- **Inherited Commitments Re-test** (Synthesis Trigger fires; per the _branch.md). Specifically test:
  - Parent project-identity's claim that the safety substrate is "two arms + 3 named-but-unbuilt." Is the 2+3 decomposition still right after measurement-aware re-cutting?
  - Self-improvement-rate's Q4a/b/c tier assignments (Tier 1 vs Tier 2). Particularly Q4b's Tier 1 claim — does it survive when the annotation-convention question is named?
  - Structural-check inquiry's State-1 decision-tree mappings. Do all three branches produce substrate states compatible with Q4c automation?
- **The novel contract 9 (spec-edit annotation convention) potentially collapses two components (4 and 5).** Is this a real simplification or a substitution? Sensemaking should test.

### To Decomposition
- **Natural seams in the substrate's measurement-aware design.** Candidate seams: (a) per-substrate-component (6 pieces, one per component); (b) per-measurement-consumer (4 pieces, Q4a/Q4b/Q4c/Q1b); (c) per-output-contract (one piece per emitted-data-type); (d) per-interaction (i1-i5 as pieces); (e) per-data-model-choice (centralized event-log vs distributed per-component artifacts).

### To Innovation
- **Variations within each substrate component's output contract.** For each, generate concrete alternatives (e.g., for the snapshot-mechanism contract: prose-summary vs structured-table vs git-style-diff). For the data-model choice: event-log vs per-component vs hybrid.
- **The pre-vs-post snapshot diff schema (novel contract 8) is the most concrete potential output schema.** Innovation should elaborate.

### To Critique
- **Adversarial-test the measurement-aware-design principle itself.** Could the substrate components emit good outputs that measurements STILL can't consume? Could the substrate components be FALSELY MARKETED as measurement-aware when they're really just normal substrate?
- **Coverage of the structural-check decision-tree's three State-1 branches.** Whichever design wins must work in all three branches.

### Deferred signals
- The execution-time questions for each substrate component (when does canary re-run; how is pre-edit hook invoked; etc.) — out of scope per the Layer Commitment.
- The cost-benefit of unified event log vs distributed artifacts — Critique should evaluate but the decision is deferred until materialization.

---

## Telemetry

- **Mode:** blended (artifact + possibility).
- **Entry point:** signal-first.
- **Cycles run:** 2 (initial scan of 6 components + measurement consumers; second cycle for output contracts + interactions + filesystem verification).
- **Candidates generated (possibility mode):** 10 (6 obvious + 4 novel output contracts).
- **Signals detected:** 9 — probed: 8; deferred: 1.
- **Frontier state:** stable.
- **Discovery rate:** decreasing.
- **Convergence criteria:** all 3 met; jump-scan performed (filesystem verification).
- **Failure modes checked:** Premature depth (avoided — completeness-first); Surface-only scanning (avoided — interactions probed); False confidence (jump-scan caught empirical correction); Premature termination (3 criteria explicitly checked); Re-exploration (single-pass per source); Completeness bias in possibility mode (obvious before novel); Open→closed drift (annotations stayed at labeling); Silent boundary-discovery (N/A); Negative-space silent drop (confirmed-absent explicit); Inadequate per-item depth (D2 default; D3 where adjacency mattered).
- **Per-item depth:** D2 default; D3 for substrate components (adjacency to consumers matters); D3 for interactions.

---

## Self-Assessment

**Overall: PROCEED.** Bounded territory mapped at confirmed level; 6 substrate components inventoried with current state; 4 measurement consumers identified with substrate dependencies; 10 output-contract candidates (6 obvious + 4 novel); 5 inter-component interactions; 1 empirical correction (1 snapshot, not 2); confirmed-absent regions explicit; frontier handed off with typed questions per discipline + explicit Inherited Commitments Re-test flags for Sensemaking.

The most load-bearing signals for downstream: (a) novel contract 9 (spec-edit annotation convention) potentially collapsing components 4+5 — Sensemaking must test; (b) Q4b's Tier 1 claim potentially over-claimed — re-test required; (c) the structural-check decision-tree's three branches each imply different substrate states — design must work in all three.
