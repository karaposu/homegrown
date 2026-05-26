---
status: active
model: claude-opus-4-7[1m]
effort: max
refines: devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/finding.md
---
# Finding: Safety Substrate — Measurement-Aware Design

## Changes from Prior

**Prior path:** `devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/finding.md`

**Revision trigger:** stronger framing. The parent's safety-substrate decomposition (Section 5 + Section 3.3 of the parent's self-maintenance arc) framed the substrate as "two arms" (regression-detection + stability-preservation) plus three named-but-unbuilt components (canary, Change Log, pre-edit check). This inquiry's measurement-aware-design lens revealed that the 6 components cluster better into 3 roles (input-defining / infrastructure / operations) than 2 arms when viewed through measurement-output evidence.

**What's preserved:** the 6-component inventory (regression catalog / snapshot mechanism / canary / Change Log → annotation / pre-edit check / structural-check tool); the substrate's load-bearing role in preventing self-improvement → self-degradation; the Family II / Family III calibration-state tiers.

**What's changed:** the 2-arms framing is SUPERSEDED for measurement-aware-design purposes by a 3-roles framing. Component 4 (Change Log sections in spec files) is revised in form to a spec-edit annotation convention (structured commit-message format) — same purpose, different mechanism. The "at least 2 snapshots" empirical claim is corrected to 1 (`archived_skills/bf4ae1f-hg/` is the only snapshot present).

**What's new:** an integrated measurement-aware design committing Lazy γ as the recommended primary design path (start as point-to-point output contracts; promote to a hybrid composition rule when triggered). Per-component output contracts named for each path; per-consumer dependency map; construction ordering with evidence-gated transitions; per-State-1-branch component-6 specifications.

**Migration:** the parent's 2-arms framing remains valid in its scope (the parent's milestone-ordering deliverable). Within the measurement-aware-design scope, the 3-roles framing applies. The two framings co-exist at different levels of analysis.

---

## Question

**The question** *(from `_branch.md`)*: What is the measurement-aware design of the safety substrate — the integrated specification of (a) regression-symptom catalog, (b) stability preservation via git / snapshot mechanism, (c) canary reference runs, (d) Change Log machinery in spec files, (e) pre-edit git check, and (f) the LLM-self-check / structural-check decision tree from the structural-check inquiry — such that Q4a (slow-drift detection), Q4b (reverted vs superseded fraction), and Q4c (per-edit spec-symptom check) from the self-improvement-rate inquiry are FIRST-CLASS consumers of substrate outputs rather than ad-hoc downstream measurements?

**The goal:** a committed design with five elements: measurement-output contract per substrate component; data-shape interfaces between components and consumers; ordering and dependency resolution; surfaced redundancies; integration with the structural-check decision tree.

This inquiry synthesizes three prior findings (parent project-identity + sibling self-improvement-rate + recent structural-check decision-tree). CONCLUDE's Synthesis Trigger fires; the `## Inherited Commitments Re-test` section below enumerates each commitment carried forward with its re-test outcome.

---

## Finding Summary

- **Measurement-aware design is substrate-and-measurement-co-design where measurement-consumer needs drive the substrate's construction prioritization.** The substrate isn't built in isolation and measurements bolted on; substrate outputs and consumer inputs are co-designed.

- **The safety substrate decomposes into 3 roles, not 2 arms** (superseding the parent finding's framing for this scope). The 6 components organize as: **INPUT-DEFINING** (regression-symptom catalog); **INFRASTRUCTURE** (snapshot mechanism); **OPERATIONS** (canary reference runs, spec-edit annotation convention [revised from Change Log sections], pre-edit git check, structural-check tool [decision-tree-conditional]).

- **The recommended primary design path is Lazy γ — evidence-gated graduation from point-to-point to hybrid.** Start with Path α (each substrate component emits per-consumer outputs via sparse point-to-point contracts; no central coordination). Promote to Path γ (hybrid composition: high-cardinality flows stay point-to-point; low-cardinality cross-coordination uses an event log) when ANY of three triggers fire: (a) cross-component coordination need surfaces; (b) component count grows to 8+; (c) consumer count grows to 6+. Until then, operate under Path α with a per-consumer dependency manifest added.

- **Four structural commitments any winning design must address:** contract clarity (each component → named output); consumer mapping (each measurement → named dependency); construction ordering (measurement-value-prioritized build sequence); State-1 compatibility (works across all 3 branches of the structural-check decision tree). Plus inherited cross-cutting commitments: substrate-honest naming + reliability acknowledgment + prose-now / schema-later evolution constraint.

- **The construction order is fixed: catalog (already done) → snapshot (already done; expand on trigger) → annotation convention → canary → pre-edit check → structural-check (per the prior inquiry's State-1 decision tree).** Each transition has an evidence-gated trigger. The order is mostly path-independent (the components are the same set across α / β / γ; only the output-contract form differs).

- **The 9 inherited commitments from three prior findings were re-tested.** 1 SUPERSEDED (parent's 2-arms decomposition); 2 REVISED (Q4b's "Tier 1 today" becomes Tier 1 OPERATIONAL + Tier 2 STRUCTURED; Q4c's tier becomes CONDITIONAL on the structural-check decision-tree branch); 4 SURVIVES (Q4a tier; State-1 mappings compatible; substrate-honest principle; reliability acknowledgment); 1 CORRECTED (the "at least 2 snapshots" claim is wrong; only 1 on disk); 1 INHERITED-WITHOUT-RE-TEST (the cross-cycle 4-phase framing — out of this inquiry's scope; upstream commitment).

- **Three alternative design paths remain viable** if the user prefers different trade-offs: Path α REFINEd (single-mechanism simplicity); Path γ REFINEd (hybrid committed now); Path β REFINEd (centralized event log with schema versioning). Two killed-by-absorption: α+selective-canary-log (insight absorbed into Lazy γ); β-with-per-event-type-sub-files (insight absorbed into β's refinement).

---

## Finding

### Why we're discussing this

The parent project-identity inquiry committed the safety substrate as the load-bearing risk-mitigation layer of the self-maintenance milestone — without it, self-improvement degenerates into self-degradation. The sibling self-improvement-rate inquiry produced Q4a / Q4b / Q4c — three measurement questions about whether improvements stay (the retention phase of self-improvement rate). And the recent structural-check inquiry committed a decision tree for one substrate component (the structural-check tool / LLM-self-check) with a conditional State-1 outcome.

These three prior commitments left a coherence question open: are the substrate components designed such that the measurements can consume their outputs cleanly, or are the measurements ad-hoc downstream observers of whatever the substrate emits?

The user surfaced the question directly: *"Q4a (slow-drift detection), Q4b (reverted vs superseded), Q4c (per-edit spec-symptom check) all depend on parts of the safety substrate. A child inquiry could focus on the measurement-aware design of the safety substrate."*

This finding produces that integrated design.

### 1. What measurement-aware design IS (the conceptual model)

#### 1.1 Substrate-and-measurement-co-design

Measurement-aware design is the design principle where **substrate construction is prioritized by measurement value, and substrate outputs are designed for measurement consumption from the start.** The substrate isn't built in isolation with measurements bolted on; substrate outputs and consumer inputs are co-designed as a coupled system.

The principle's load-bearing distinction is "first-class consumer." A consumer is first-class when the substrate's output is designed with the consumer's input requirements in mind — not when the consumer happens to find usable data in the substrate's emitted artifacts.

#### 1.2 The substrate's three roles (supersedes parent's two arms)

The parent project-identity finding framed the safety substrate as having two arms — regression-detection (the symptom catalog + pre-edit check + structural-check tool) and stability-preservation (the snapshot mechanism + canary reference runs) — plus three named-but-unbuilt components.

Viewed through the measurement-aware lens, this framing partially fits but doesn't capture the substrate's structural diversity. Components don't cluster cleanly into detect-or-preserve when their measurement-output roles are surfaced. Change Log machinery, for instance, is INPUT-DEFINING for downstream regression detection — it records what changed so that subsequent checks know what to look at. It's neither detecting nor preserving; it's defining the input.

The three-roles decomposition fits the evidence better:

**INPUT-DEFINING — what to look for.** The **regression-symptom catalog** at `enes/regression/desc.md` is the substrate's input-definer. Its 23 named symptoms across 5 types (output / experience / pipeline / error / spec) plus 5 diagnostic patterns (Surface Run / Confirmation Bias / Introduced Error / Pipeline Degradation / Slow Drift) define the universe of failures that the operations-role components watch for. The catalog itself is a reference document; it doesn't run; it informs.

**INFRASTRUCTURE — primitives other components depend on.** The **snapshot mechanism** at `enes/stability_preservation_via_git.md` is the substrate's infrastructure piece. It provides the git-archive + rename + side-by-side install pattern that lets a past discipline version be invoked alongside the current one (e.g., `/bf4ae1f-sense-making` callable alongside `/sense-making` after a snapshot is taken). One snapshot is currently present on disk at `archived_skills/bf4ae1f-hg/`. The mechanism doesn't directly produce measurement outputs; it enables the canary mechanism to compare current and baseline outputs.

**OPERATIONS — checks performed at specific times.** Four operations-role components:
- The **canary reference runs** (currently named-not-built) — per-discipline reference outputs saved as snapshots, periodically re-run against current discipline versions to produce drift-detection records.
- The **spec-edit annotation convention** (revised from "Change Log sections in spec files") — a structured commit-message format that records what changed, what it supersedes, and which Type-5 spec-symptoms fired during the edit. The annotation lives in git history (commit messages) rather than as sections within the spec files.
- The **pre-edit git check** (currently named-not-built) — a git pre-commit hook (or runner-invoked check) that scans the spec-file diff for Type-5 symptom patterns before the commit lands.
- The **structural-check tool** (currently State 0 in-flight per the prior inquiry's decision tree) — the LLM-self-check or deterministic-script mechanism that verifies a discipline's output has its required structural elements after the discipline runs. State 1's branch determines the exact form (LLM-only / script + LLM / script + protocol).

The 3-roles decomposition makes the substrate's INFORMATION FLOW visible: input-defining tells operations what to look for; infrastructure enables operations to compare; operations emit the per-event records that measurements consume.

#### 1.3 The four measurement consumers + their substrate dependencies

Four measurement questions from earlier inquiries depend on the safety substrate:

- **Q1b absence-of-need check** (from the self-improvement-rate inquiry's trigger phase) — when any reviewer reports that no improvement is needed, is the report supported by symptom-absence evidence? **Substrate dependency:** the regression catalog (component 1), filtered by each of the 5 symptom-types.

- **Q4a slow-drift detection frequency** (retention phase) — across the harness's spec files, does the slow-drift pattern fire (across-sessions degradation invisible in any single run)? **Substrate dependency:** canary reference runs (component 3, depending on snapshot infrastructure component 2) + regression catalog Pattern 5.

- **Q4b reverted vs superseded fraction** (retention phase) — of spec edits in a window, what fraction were reverted (regression) vs superseded (evolution)? **Substrate dependency:** the spec-edit annotation convention (component 4, revised form) — specifically, the `supersedes` field — plus git history for the diff context.

- **Q4c per-edit spec-symptom check** (retention phase) — for each spec edit, do any of the four Type-5 spec-symptoms (Shorter-than-before / Missing sections / Weakened language / Removed safeguards) fire? **Substrate dependency:** the pre-edit check (component 5) for pre-commit warnings + the regression catalog Type 5 for the symptom definitions + the structural-check tool (component 6, conditional on State 1) for automated post-output verification + the annotation convention's `type-5-symptoms-fired` field for self-reported flags.

The mapping is SPARSE — each consumer reads from one to three components, not all components. Each component feeds one to three consumers, not all consumers. Sparse mapping is structurally cleaner than dense coupling.

#### 1.4 Four structural commitments any design must satisfy

Any winning design must address four commitments (analogous to the prior structural-check inquiry's four commitments, adapted to this scope):

- **Contract clarity** — each substrate component has a NAMED OUTPUT CONTRACT specifying what it emits, in what form (push event vs pull artifact; structured fields vs prose), with what timing.
- **Consumer mapping** — each measurement consumer has a NAMED SUBSTRATE DEPENDENCY specifying which components it reads from and via which contract.
- **Construction ordering** — the build sequence of substrate components is justified by measurement value (which Q does this component serve; how load-bearing is that Q).
- **State-1 compatibility** — the design specifies how component 6 (structural-check tool) emits to Q4c regardless of which State-1 branch the prior inquiry's adversarial test produces.

Plus inherited cross-cutting commitments from the structural-check inquiry:
- **Substrate-honest naming** — whatever mechanism a component uses, the spec text accurately names it (probabilistic LLM vs deterministic script).
- **Reliability acknowledgment** — where measurement consumers depend on probabilistic mechanisms, the design acknowledges the unvalidated reliability.
- **Prose-now / schema-later evolution** — output contracts at Level 0 use prose; structured schemas are added when warranted (autonomy-level graduation or scale demand).

### 2. The recommended design — Lazy γ

Three design paths were viable under the structural commitments: Path α (point-to-point contracts), Path β (mediated event log), Path γ (hybrid composition rule). All three PASS the four critical commitments. Differences emerge on substrate-honest, at-scale behavior, and cost profile.

The recommended primary is **Lazy γ** — start as Path α; promote to Path γ when triggered.

#### 2.1 State 0 — operate as Path α

At Level 0 (current state), the design operates as Path α:

**Each substrate component emits its output via a point-to-point contract directly to its named consumer(s).** No central event log; no shared schema. The 6 contracts are:

- **Regression-symptom catalog → Q1b / Q4a-Pattern-5 / Q4c-Type-5.** When a reviewer (human at L0; system at L2+) matches a symptom against an observation, the match is recorded with fields: `target` (the inquiry / spec / output being observed), `symptom_id` (which of 23), `severity` (LOW/MEDIUM/HIGH/CRITICAL from catalog tags), `evidence` (citation or prose). The catalog itself is a pull reference; match records are push events.

- **Snapshot mechanism → canary (internal use) + Q4b (revert-vs-supersede comparisons).** Per A/B comparison artifact: `baseline_version` (sha), `current_version` (HEAD or sha), `input` (the test problem), `baseline_output`, `current_output`, `qualitative_gap_statement` (prose), `comparable_verdict` (as_good_as_baseline / degraded / improved). Pull artifact.

- **Canary reference runs → Q4a.** Per-discipline reference-run manifest lives at `devdocs/canary_baselines/<discipline>.md`. Each re-run produces a record with fields: `discipline`, `canary_problem` (the input), `baseline_output_sha`, `re_run_date`, `comparison_verdict`, `slow_drift_detected` (boolean), `dimensions_of_drift` (list: as_rich / as_surprising / as_useful / frontier_comparable). Push event when canary re-runs.

- **Spec-edit annotation convention → Q4b + Q4c.** Each git commit that edits a spec file follows a structured message format: `type: edit-summary\n[supersedes: prior-edit-sha-or-NA]\n[type-5-symptoms-fired: none-or-list]`. The convention is adopted via documentation (in `CLAUDE.md` or a project-conventions file); no separate tool. The annotation lives in commit messages; consumers read git log.

- **Pre-edit git check → Q4c.** A git pre-commit hook (or runner-invoked check) that scans the staged spec-diff for Type-5 symptom patterns. Emits per-edit pre-fire records: `target_spec_file`, `diff_summary`, `type_5_symptoms_detected` (list), `severity_per_symptom`, `user_acknowledged` (did user proceed despite warning?). Push event on pre-commit.

- **Structural-check tool → Q4c (conditional on State-1 branch).** Per-discipline-output verdict: `output_file`, `discipline_name`, `verdict` (PASS / FAIL), `sections_present`, `sections_missing`. The exact form is determined by the prior inquiry's adversarial-test outcome (Section 3 below).

**Per-consumer dependency manifest** (the REFINE-recommended addition to Path α that Critique committed): consumers read from these specific contracts:

| Consumer | Reads from |
|---|---|
| Q1b absence-of-need | Catalog match-records, filtered by symptom-type |
| Q4a slow-drift | Canary re-run records + snapshot comparison artifacts (via canary) |
| Q4b revert-vs-supersede | Annotation convention's `supersedes` field + git history |
| Q4c per-edit spec-symptom | Pre-edit check records + Annotation's `type_5_symptoms_fired` field + Structural-check verdicts (conditional) |

The manifest makes the sparse mapping explicit; new consumers added later document their dependencies in the same form.

#### 2.2 Promotion trigger — when State 0 transitions to State 1

Path α at State 0 is sufficient for the project's current calibration state (Level 0 / single-user / modest substrate). The design promotes to Path γ when ANY of three triggers fire:

- **Cross-component coordination need surfaces.** For example: a future inquiry produces a substrate component that emits events multiple existing consumers want to read but the events don't fit any existing consumer's filter cleanly. The new event-type warrants a centralized location.
- **Component count grows to 8+.** Additional substrate components introduced by future inquiries (e.g., a Predictive RC observation log; a Retrospective RC outcome tracker) push the per-pair contract count past where sparse-mapping stays readable.
- **Consumer count grows to 6+.** Additional measurement consumers (e.g., more Q-series questions from later self-improvement-rate calibration; multi-head MVL+ observers at autonomy Level 4) push the discovery cost past where the dependency manifest stays maintainable.

Until at least one trigger fires, the design stays at State 0 (Path α).

#### 2.3 State 1 — Path γ (the hybrid composition rule)

When a trigger fires, the design promotes to Path γ. Path γ adds a single artifact — an event log at `devdocs/safety_event_log.md` (append-only) — and a composition rule that routes each substrate component's output:

**Route via event log if ALL of:** (a) the events are LOW-CARDINALITY (a few per inquiry, not per-edit or per-output); (b) the events have CROSS-CONSUMER value (read by 2+ consumers OR used for cross-component coordination); (c) the events are historically meaningful (worth preserving in an append-only log).

**Otherwise route point-to-point.**

Under Path γ:
- Regression-catalog match-records → event log (low-cardinality cross-consumer).
- Snapshot-creation events → event log (low-cardinality cross-coordination).
- Canary re-run records → point-to-point to Q4a (high-cardinality per-event).
- Annotation convention → point-to-point via git history (high-cardinality; git history IS the store).
- Pre-edit check records → point-to-point to Q4c (high-cardinality per-event).
- Structural-check verdicts → point-to-point to Q4c (high-cardinality per-event).

The event log carries the LOW-cardinality cross-coordination; point-to-point carries the HIGH-cardinality per-event flows.

#### 2.4 Why Lazy γ over the alternatives

Critique's adversarial evaluation produced four viable candidates after refinement: Path α REFINEd, Path β REFINEd, Path γ REFINEd, and Lazy γ. All four PASS the 4 critical commitments. The differences:

- **Path α REFINEd** is simplest at Level 0 but its per-pair contracts proliferate at Level 4+ multi-head (6 components × growing consumer count). At-scale concern PARTIAL.
- **Path β REFINEd** centralizes all substrate events in one log; coupling via schema is real. Substrate-honest concern PARTIAL unless schema versioning + at-Level-4+ migration path (to per-event-type or per-Worker sub-logs) is committed.
- **Path γ REFINEd** is the substantive hybrid committed now. Best-of-both: simplicity for high-cardinality + centralization for low-cardinality. PASSes all dimensions but with composition-rule maintenance complexity at PASS-WITH-COMPLEXITY.
- **Lazy γ** starts cheap (just α at Level 0) and graduates to γ only when triggered. PASSes all dimensions at every stage; honors the project's evidence-gated graduation pattern (consistent with the prior structural-check inquiry's Hybrid A+D-with-decision-tree); preserves optionality.

Lazy γ is the only candidate that PASSes all 10 dimensions at Level 0 AND scales cleanly to Level 4+ via evidence-gated promotion. It is the recommended primary.

If the user prefers single-mechanism simplicity without an automatic promotion path, **Path α REFINEd** is the alternative. If the user wants the hybrid committed immediately (rather than evidence-gated), **Path γ REFINEd** is the alternative. **Path β REFINEd** is the alternative if the user values centralized audit trails — but no strong case for centralization has been made in this inquiry; β is the lowest-priority alternative.

### 3. Construction ordering and State-1 specification

#### 3.1 The build sequence

The substrate's components are built in this order, with evidence-gated transitions:

1. **Catalog** (already done). The regression-symptom catalog at `enes/regression/desc.md` is the input-definer; the spec is in force.
2. **Snapshot mechanism** (already done; expand on trigger). `archived_skills/bf4ae1f-hg/` is the current single snapshot. Expand snapshot count when a future inquiry warrants taking a new baseline; cost is ~minutes per snapshot.
3. **Annotation convention** (LOW cost; HIGH measurement value; build next). Document the commit-message format in `CLAUDE.md` or a project-conventions file. Q4b transitions from Tier 1 OPERATIONAL to Tier 1 STRUCTURED when adopted.
4. **First canary baseline** (medium cost; HIGH measurement value; build when triggered). Pick one discipline (e.g., `/sense-making` per its high-use status); save a reference run to `devdocs/canary_baselines/sense-making.md`. Canary mechanism is human-invoked at Level 0; scriptable at Level 2+.
5. **Pre-edit check** (medium cost; medium measurement value; build when triggered). A git pre-commit hook scans the spec-diff for Type-5 symptom patterns. Trigger: first symptom-prone edit + user wants automated warning.
6. **Structural-check tool** (variable cost; conditional per the prior inquiry's State-1 outcome). Determined by the structural-check inquiry's adversarial-test result.

The order is mostly path-independent — under α, β, γ, or Lazy γ, the components themselves are the same set; only their output-contract form differs. The order is determined by measurement value × build cost × prerequisite dependencies.

#### 3.2 State-1 branch specifications

The prior structural-check inquiry's decision tree has three branches. Each leaves component 6 in a different form. The measurement-aware design specifies what Q4c reads in each branch:

- **Catch-rate ≥ 0.85 (Path A locked-in).** Component 6 emits LLM-self-check verdicts to `_state.md` history per the spec-edited procedure. Q4c reads `_state.md` records: `Structural check: [PASS] (<N>/<M> sections present)` or `[FAIL: missing-elements]`.
- **Catch-rate 0.65 – 0.85 (Path B built).** Component 6 emits both bash-script verdicts (PASS/FAIL with reasons) and LLM-self-check records. Q4c reads script stdout + `_state.md`.
- **Catch-rate < 0.65 (Hybrid B+C built).** Component 6 emits script verdicts + the protocol-driven LLM-self-check outputs (per the protocol's Step 3). Q4c reads both.

Under Lazy γ (and Path α), these emissions are point-to-point to Q4c. Under Path β (or Path γ promotion), the structural-check verdicts become `structural_check_verdict` events in the event log; Q4c filters.

Q4c's interface to component 6 is consistent across paths in terms of WHAT it reads (verdict + missing-elements list); only WHERE differs.

### 4. The user-named four milestones revisited

The parent project-identity finding mapped the user-named "self-maintenance" milestone to four sub-substrates (D-M5 Primitive RC + D-M6 Predictive RC via `/intuit` + D-M7 Retrospective RC + D-M9 regression detection + stability preservation). This inquiry's measurement-aware design refines that mapping for D-M9 specifically (the safety substrate; regression detection + stability preservation):

- **The "two arms" structure (regression-detection arm + stability-preservation arm) is superseded for this scope by the 3-roles structure** (input-defining + infrastructure + operations). The 2-arms framing remains valid in the parent's milestone-ordering deliverable; the 3-roles framing applies here.
- **D-M9 is operationally instantiated as Lazy γ:** at Level 0, the 6 components with sparse point-to-point contracts via Path α; at promotion, the same 6 components with the composition-rule routing via Path γ.
- **D-M9's calibration state graduates with the build sequence:** mostly Family II at Level 0 (annotation convention, first canary, pre-edit check are all modest-investment); Family III when the structural-check tool's State-1 outcome determines its mature form.

### 5. The load-bearing risk and its mitigation, revisited

The parent finding's Section 5 named the single load-bearing risk: **self-improvement loop becomes self-degradation loop** (per `enes/regression/desc.md`). The mitigation substrate is the safety substrate.

This inquiry's design clarifies HOW the mitigation operates:

- **Regression detection** happens via the catalog (input-defining what to look for) + the operations-role components (canary detects slow drift; pre-edit detects per-edit spec-symptoms; structural-check detects per-output structural omissions).
- **Stability preservation** happens via the snapshot mechanism (infrastructure) + canary reference runs (operations) — together they enable A/B comparison between current and historical discipline versions.
- **The measurement consumers (Q4a/b/c) make the mitigation observable.** Without measurement, the substrate components could emit events that nobody reads. With first-class consumer mapping, the substrate's outputs become the rate measurements the project uses to track self-improvement health.

---

## Inherited Commitments Re-test

This section is required because the inquiry's `_branch.md` declared a Synthesis Trigger consolidating three prior findings. Each inherited commitment is enumerated below with its re-test status and reason.

### Inherited from `devdocs/inquiries/2026-05-15_10-59__project_identity_and_milestone_ordering/finding.md` (parent project-identity)

- **Commitment:** The safety substrate has "two arms" (regression detection + stability preservation) plus three named-but-unbuilt components (canary, Change Log, pre-edit check).
  - **Source:** Section 5 + Section 3.3 of the parent finding.
  - **Re-test status:** **SUPERSEDED for this scope.**
  - **Evidence:** the 6 components don't cluster cleanly into 2 arms when viewed through measurement-output evidence. Change Log machinery is INPUT-DEFINING (it records what changed so downstream checks know what to look at) rather than detect-or-preserve. The 3-roles framing (input-defining / infrastructure / operations) fits the measurement-output evidence better. The 2-arms framing remains valid in the parent's milestone-ordering scope.

- **Commitment:** The safety substrate is partly Family II (modest investment) and partly Family III (calibration-gated) in the build-readiness families framework.
  - **Source:** parent finding Section 3.3 and Section 4.
  - **Re-test status:** **SURVIVES (RE-TESTED).**
  - **Evidence:** the construction ordering committed in this finding's Section 3.1 maps cleanly: catalog (already specified; Family I), snapshot (operational; Family I); annotation convention (~minutes adoption; Family II); canary first baseline (~hours; Family II); pre-edit check (~hours; Family II); structural-check tool (State-1 conditional; Family II–III).

- **Commitment:** `archived_skills/` contains "at least two prior commits' worth of past-discipline snapshots already present."
  - **Source:** parent finding Section 3.3 of the self-maintenance arc.
  - **Re-test status:** **CORRECTED.**
  - **Evidence:** direct filesystem inspection (`ls -la archived_skills/`) shows ONE snapshot directory (`bf4ae1f-hg/`) plus one install script (`install_bf4ae1f_for_claude.sh`). The mechanism's OPERATIONAL claim survives (the snapshot pattern is documented and demonstrated); the COUNT is corrected from 2+ to 1.

### Inherited from `devdocs/inquiries/2026-05-16_00-07__self_improvement_rate_measurable_questions/finding.md` (sibling self-improvement-rate)

- **Commitment:** Q4a (slow-drift detection) is Tier 2 (when canary ships) + partial Tier 1 (manual qualitative flags).
  - **Source:** self-improvement-rate finding Part 2 tier table.
  - **Re-test status:** **SURVIVES (RE-TESTED).**
  - **Evidence:** Q4a depends on canary reference runs (component 3), which depend on the snapshot mechanism (component 2). Both at expected states; the tier framing maps cleanly. Note: the tier is multi-component-dependent, not single-component-dependent; the design's construction ordering reflects this (snapshot already done; canary is the build target).

- **Commitment:** Q4b (reverted vs superseded fraction) is Tier 1 today (observable via git history with reviewer judgment).
  - **Source:** self-improvement-rate finding Part 2 tier table.
  - **Re-test status:** **REVISED.**
  - **Evidence:** Q4b's measurement IS operationally performable today (git history is available; reviewer judgment can classify). But the classification's CONSISTENCY across measurement events depends on a structured annotation convention. Without convention, the reviewer's classification is ad-hoc per edit. **Revised tier:** Q4b is **Tier 1 OPERATIONAL** (measurement can happen today) + **Tier 2 STRUCTURED** (consistent classification needs the annotation convention to ship). The simple "Tier 1" claim over-claimed.

- **Commitment:** Q4c (per-edit spec-symptom check) is Tier 1 manual; could be automated when `tools/structural_check.sh` ships.
  - **Source:** self-improvement-rate finding Part 2 tier table.
  - **Re-test status:** **REVISED.**
  - **Evidence:** Q4c's automation status depends on the prior inquiry's adversarial-test decision-tree outcome. The three branches each produce different component-6 forms (LLM-self-check only / script + LLM / script + protocol); Q4c's automation graduates with the branch. **Revised tier:** Q4c is **Tier 1 manual today**; transitions to Tier 1 partial-automated (Path B branch) or Tier 1 fuller-automated (Hybrid B+C branch) **conditional on the structural-check decision-tree branch**.

### Inherited from `devdocs/inquiries/2026-05-16_06-12__structural_check_tool_remove_or_keep/finding.md` (recent structural-check decision-tree)

- **Commitment:** The structural-check decision tree has three State-1 branches: ≥0.85 (Path A locked-in) / 0.65-0.85 (Path B built) / <0.65 (Hybrid B+C built).
  - **Source:** structural-check finding's recommended primary path.
  - **Re-test status:** **SURVIVES (RE-TESTED).**
  - **Evidence:** this finding's Section 3.2 specifies what Q4c reads in each of the three branches; all three are measurement-compatible. The State-1 compatibility commitment (commitment C4) is satisfied across branches.

- **Commitment:** The substrate-honest naming principle applies to mechanism descriptions.
  - **Source:** structural-check finding.
  - **Re-test status:** **INHERITED transversely (applied throughout).**
  - **Evidence:** this finding's per-component contract specifications name each mechanism accurately (e.g., snapshot mechanism is pull-artifact deterministic; LLM-self-check Branch 1 of component 6 is probabilistic-mechanism with binary outcome). No violations of substrate-honesty.

- **Commitment:** Reliability acknowledgment is required where measurement consumers depend on probabilistic mechanisms.
  - **Source:** structural-check finding.
  - **Re-test status:** **INHERITED transversely.**
  - **Evidence:** the design acknowledges probabilistic mechanisms where applicable (component 6 Branch 1; future component additions if they involve LLM-judgment).

- **Commitment:** The 4 cross-cycle measurement phases (trigger / speed / magnitude / retention) are the structural decomposition of self-improvement rate measurement.
  - **Source:** self-improvement-rate finding's SV6 model + the parent finding's reference to it.
  - **Re-test status:** **INHERITED-WITHOUT-RE-TEST.**
  - **Reason:** the 4-phase framing is upstream of this inquiry's scope. This inquiry addresses the retention-phase measurements specifically (Q4a/b/c). The 4-phase decomposition itself is not re-tested here; it was committed in the self-improvement-rate inquiry and remains in force.

---

## Next Actions

### MUST

- **What:** Adopt the spec-edit annotation convention. Document the commit-message format (`type: edit-summary\n[supersedes: prior-edit-sha-or-NA]\n[type-5-symptoms-fired: none-or-list]`) in `CLAUDE.md` or a project-conventions file. No tool build required; reviewer adherence is the work.
  - **Who:** the user, on next spec edit.
  - **Gate:** observable — at the next spec edit, apply the convention to the commit message.
  - **Why:** transitions Q4b from Tier 1 OPERATIONAL to Tier 1 STRUCTURED with low cost. Aligns with measurement-aware design: substrate components emit specifically for measurement consumers.

- **What:** Add a per-consumer dependency manifest to the safety substrate documentation. Document which consumers read from which substrate components, in the form of this finding's Section 1.3 table.
  - **Who:** small materialization run (documentation edit).
  - **Gate:** observable — at the same time as the annotation convention adoption.
  - **Why:** addresses Path α's discovery spec-gap (sparse mapping is hidden without the manifest). Required for State 0 operation.

### COULD

- **What:** Establish the first canary reference baseline. Pick one discipline (`/sense-making` recommended per high-use status); save a "genuinely good" reference output to `devdocs/canary_baselines/sense-making.md`; document the canary problem (the input that produces the reference output).
  - **Who:** a small materialization run (manual canary creation at Level 0; scripted at Level 2+).
  - **Gate:** condition-bound — when the user is ready to begin tracking Q4a's drift signal OR when ~10-20 more inquiries have run and slow-drift in `/sense-making`'s output begins to be a concern.
  - **Why:** transitions Q4a from Tier 1 partial (manual qualitative) to Tier 2 full (canary-based) for one discipline.

- **What:** Implement the pre-edit git check as a git pre-commit hook. The hook scans the staged spec-diff for Type-5 symptom patterns (Shorter-than-before / Missing sections / Weakened language / Removed safeguards) and prints warnings.
  - **Who:** a small materialization run (hook + scanner script).
  - **Gate:** condition-bound — when the first symptom-prone edit happens AND the user wants automated warning.
  - **Why:** transitions Q4c from Tier 1 manual to Tier 1 with pre-commit symptom-fire records.

- **What:** Watch for Lazy γ promotion triggers. Promote to Path γ (introduce the event log + composition rule) when ANY of the three triggers fire: (a) cross-component coordination need surfaces; (b) component count grows to 8+; (c) consumer count grows to 6+.
  - **Who:** the user (or a future meta-loop observer), monitoring component count + consumer count + cross-coordination needs.
  - **Gate:** observable — when any of the three triggers fires.
  - **Why:** preserves optionality. Don't over-engineer with γ before evidence demands it; don't underprepare for γ's eventual need.

### DEFERRED

- **What:** Specify the substrate's at-Level-4+-multi-head behavior. At multi-head autonomy, parallel Workers each emitting substrate events introduces write-contention or coupling-via-log concerns. The design's at-scale evolution path (per-Worker sub-logs; per-event-type sub-files; or aggregator-based collection) becomes load-bearing.
  - **Gate:** condition-bound — when L4 multi-head MVL+ is built per the parent finding's Family III ordering.
  - **Why if revived:** the current design is for Level 0; multi-head scale changes the trade-offs.

- **What:** Cross-reference the substrate's design pattern with other Primitive-RC-adjacent designs (the Predictive RC `/intuit` discipline; the Retrospective RC outcome-tracker). The measurement-aware-design pattern from this inquiry is potentially reusable.
  - **Gate:** condition-bound — when `/intuit` ships or when the Retrospective RC outcome-tracker is being designed.
  - **Why if revived:** generalization of the substrate-and-measurement-co-design principle to other quality-awareness layers.

---

## Reasoning

### Why the 3-roles decomposition over the 2-arms framing

The parent project-identity finding's 2-arms framing (regression-detection arm + stability-preservation arm) is structurally clean at the milestone-ordering scope where it was committed. But the parent didn't have the measurement-output evidence available. When the 6 components are viewed through what they EMIT to measurement consumers, the detect-vs-preserve distinction doesn't cleanly partition them. Change Log machinery (now revised to annotation convention) is structurally INPUT-DEFINING for downstream checks; it doesn't detect or preserve.

The 3-roles framing (input-defining + infrastructure + operations) fits the evidence at the measurement-aware-design scope. Critique's adversarial test against the strongest counter (the 2-arms is canonical from prior inquiry; respect it) failed — the 2-arms framing survives in its scope but is superseded in this scope.

### Why Lazy γ over Path α or Path γ committed directly

Path α is simpler at Level 0 but its per-pair contracts proliferate at Level 4+ multi-head. Critique's at-scale prosecution surfaced this as PARTIAL on D10. Path α REFINEd is viable at Level 0 with a dependency manifest, but the path doesn't preserve scale-evolution optionality.

Path γ committed directly is the substantive hybrid — committed now rather than deferred — but introduces composition-rule complexity at L0 when L0 doesn't need it. Path γ is viable but pays the complexity cost upfront whether the cross-coordination need ever materializes.

Lazy γ pays L0's α-cost now and γ's incremental cost only when triggered. It honors evidence-gated graduation (the project's broader pattern, consistent with the structural-check inquiry's Hybrid A+D-with-decision-tree). The single concern is the promotion-trigger spec-gap, which is addressed by the three specific triggers committed in Section 2.2.

### Why two emergents were killed

Emergent 2 (α + selective canary-log) introduced one ad-hoc cross-component log for canary lifecycle events. Without a principled scope for "what goes in the canary-log vs. what stays point-to-point," the candidate is "α with one exception" — structurally a worse Lazy γ. The insight (canary needs cross-component coordination) is absorbed into Lazy γ's composition rule. Killed by absorption, not pareto-domination.

Emergent 3 (β with per-event-type sub-files) decomposes β's single event log into per-event-type files. This is a refinement applicable to β if β wins — but it's not structurally distinct enough to be its own candidate. Killed by absorption into β's REFINE output.

### Why the empirical correction matters

The parent finding claimed "at least two prior commits' worth of past-discipline snapshots already present" in `archived_skills/`. Direct filesystem inspection showed one snapshot. The mechanism's OPERATIONAL claim survives (the snapshot pattern works; it's been demonstrated); the COUNT is corrected. The correction matters because the parent finding's empirical confidence was overstated; this inquiry's design accounts for the actual state (one snapshot) rather than the claimed state (two-plus).

---

## Open Questions

### Monitoring

- **Will Lazy γ's promotion triggers fire at expected rates?** The triggers are (a) cross-component coordination need, (b) component count to 8+, (c) consumer count to 6+. Observable over time; if no trigger fires after ~30 inquiries or ~6 months, the design remains at α stably (which is fine — Lazy γ's value is to defer the decision until evidence demands).

- **Will Q4b's revert-vs-supersede classification reliability hold across reviewers?** The annotation convention specifies the format; reviewers fill in the `supersedes` field. Inter-reviewer agreement on what "supersedes" means in edge cases (a partial-replace, for instance) is observable post-adoption. If reliability is low, the convention may need refinement.

- **Will the structural-check decision-tree's adversarial test fire and produce a State-1 outcome?** The prior inquiry's MUST is to apply the 4 spec edits + commit to the test. The test's outcome determines component 6's mature form and Q4c's automation tier. Observable once the test runs.

### Blocked

- **What happens to Q4a if canary reference runs prove qualitatively-judgment-dependent (low inter-reviewer agreement)?** Cannot be answered without first establishing canaries and observing multiple re-runs across reviewers.

- **What the substrate's at-L4+ form needs to look like.** Cannot be specified until multi-head MVL+ ships per the parent finding's Family III ordering.

### Research Frontiers

- **The substrate-and-measurement-co-design principle's generalization.** This inquiry applied it to the safety substrate + Q4a/b/c. The pattern may be reusable for Predictive RC + Q3a per-cycle quality, or Retrospective RC + outcome calibration. Pattern's generality is an open question.

- **The relationship between the structural-check decision tree's evidence-gated graduation and Lazy γ's promotion triggers.** Both apply the evidence-gated-graduation pattern. Are they two instances of a more general project-wide pattern? Future inquiry.

### Refinement Triggers

- **The 3-roles decomposition** re-opens if a future substrate component emerges that doesn't fit input-defining / infrastructure / operations cleanly.
- **The Lazy γ promotion triggers** (cross-coordination / 8+ components / 6+ consumers) are placeholders. The actual thresholds may need tuning based on observed scaling pain.
- **Q4b's revised tier (Tier 1 OPERATIONAL + Tier 2 STRUCTURED)** re-opens if the annotation convention proves insufficient for consistent classification.

---

## Source Input

<details>
<summary>Raw user input for this inquiry</summary>

```text
/MVL+

The integration with the just-completed self-improvement-rate measurement — Q4a (slow-drift detection), Q4b (reverted
  vs superseded), Q4c (per-edit spec-symptom check) all depend on parts of the safety substrate. A child inquiry could
  focus on the measurement-aware design of the safety substrate.

this makes sense, lets dive deep into that
```

</details>
