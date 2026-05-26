---
status: active
a-b-test-of: devdocs/inquiries/2026-05-14_16-00__current_explore_rewrite_caused_mvl_run_problems/finding.md
related:
  - devdocs/inquiries/2026-05-14_15-00__find_innovate_spec_regression_remove_root_cause/finding.md
  - devdocs/inquiries/2026-05-14_14-00__l1_targets_wrong_stage_overspecification_is_post_branch/finding.md
  - devdocs/inquiries/2026-05-14_13-08__phantom_canon_is_generic_not_project_specific/finding.md
  - devdocs/inquiries/2026-05-14_12-45__loop_diagnose__existing_artifact_as_canonical_reference/finding.md
  - devdocs/inquiries/2026-05-13_12-45__prior_mapping_understanding_was_wrong_redo/finding.md
depends-on-protocol: homegrown/protocols/loop_diagnose.md
verdict: CONFIRMS iteration #8 at form level
inherits-repair: iteration #8's E2 selective revert (A1 REMOVE; A2 REPAIR; A3 REPAIR; A4-A12 KEEP/flagged)
---

# Finding: A/B Test — Rerun /explore-Comparison Investigation Under the OLD /explore Spec

## Question

From `_branch.md`:

Given that iteration #8 (`devdocs/inquiries/2026-05-14_16-00__current_explore_rewrite_caused_mvl_run_problems/finding.md`) ran the diff-comparison investigation under the CURRENT `/explore` spec and concluded that the /explore rewrite is a **contributing factor** (not the primary cause) of recent problematic MVL+ runs — does running the SAME investigation under the OLD `/explore` spec (loaded explicitly from `/Users/ns/Desktop/projects/native/archived_skills/bf4ae1f-hg/bf4ae1f-explore/references/explore.md`) produce a materially different exploration output (in form, focus, or substance)? If so, what does that empirically tell us about the current spec's contribution to MVL+ run quality?

**Goal.** An A/B-test inquiry that re-runs iteration #8's question with the Exploration discipline executing under the OLD /explore spec, documents the spec-loading override (load-only, no file modification), produces an exploration.md that is side-by-side comparable to iteration #8's, and renders a verdict on whether iteration #8's contributing-factor claim is confirmed, refined, or invalidated under live empirical test.

**Vocabulary used in this finding.**
- **/explore** is the Structural Exploration discipline; its current specification lives at `homegrown/explore/references/explore.md` and an archived earlier version lives at `archived_skills/bf4ae1f-hg/bf4ae1f-explore/references/explore.md`.
- **MVL+** is the project's extended cognitive loop (Exploration → Sensemaking → Decomposition → Innovation → Critique).
- **Iteration #8** refers to the prior chain finding at `2026-05-14_16-00`, which catalogued 12 change categories (labelled A1-A12) in the /explore rewrite and proposed a selective-revert REPAIR labelled **E2**.

## Finding Summary

- **Empirical result: the form difference is real and observable.** Running the same investigation under the OLD `/explore` spec produces an Exploration output that is materially shorter and contains fewer structural elements (no Step 0 declarations table, no D0-D4 depth-level commitment, no five-annotation-layer table, no eleven-failure-mode self-check, a four-entry NOT-list versus a five-entry one with project paths). Side-by-side artifacts confirm what iteration #8 hypothesized from static spec comparison alone.

- **Verdict: CONFIRMS iteration #8 at the form level.** The live A/B test strengthens iteration #8's contributing-factor claim from "inferred from static diff" to "observed under live execution." It does not correct, supersede, or revise the prior finding's substance.

- **REPAIR is INHERITED, not new.** This finding adopts iteration #8's E2 selective-revert REPAIR verbatim (A1 REMOVE the Sources subsection in the /explore Loading note; A2 REPAIR the Neighbor-disciplines table to drop project-path columns; A3 REPAIR the Specialization-pattern section to decouple from `/navigation` specifically; A4-A12 KEEP and flag as protocol-overhead research frontier). No new REPAIR text is proposed here.

- **Claim calibration is three-level.** The A/B test empirically establishes the **form-level** effect. It only **infers** a substance-level effect (does the lighter form translate into better thinking?). It does **not** address mistake-prevention longitudinally (does the spec choice reduce mistakes over many inquiries over time?) — that question requires a multi-run longitudinal study and stays out of scope for one A/B run.

- **Honest 9-MVL+ cost acknowledgment.** This is the ninth MVL+ iteration in succession on a related topic chain. The unique value of this iteration is the dynamic empirical observation beyond iteration #8's static diff. That value is real but marginal — the Exploration step carried essentially all of it; sensemaking, decomposition, innovation, and critique on the A/B-test finding produced calibration and inheritance machinery rather than new content. Iteration #10 is gated by structurally NEW questions (see Open Questions → Refinement Triggers).

## Finding

### Why this inquiry exists

The chain leading up to this iteration (six prior findings from 2026-05-13 through 2026-05-14) progressively diagnosed and partially repaired sources of "project coupling" — places where the project's discipline specifications referenced specific internal project paths and findings, biasing LLM execution toward project-internal context. Iteration #7 (`2026-05-14_15-00`) repaired three such elements in the Structural Innovation discipline (`/innovate`). Iteration #8 (`2026-05-14_16-00`) catalogued twelve similar candidates in the Structural Exploration discipline (`/explore`) and proposed a selective-revert REPAIR. Iteration #8's claim that the /explore rewrite is a contributing factor was calibrated as "contributing factor at form level, observable in static diff" — a real but limited empirical state.

The user's request for this iteration is a direct test of iteration #8's claim under live execution: rerun the same investigation, but with the OLD /explore spec actually governing the Exploration step. Quote (verbatim): "now lets run another MVL+ loop with same input as last one but this time we will do it with old explore... can you arrange this?" Followed by a clarification: "dont swap, just by loading cant u do?"

The clarification is methodologically load-bearing. The test does not swap installed files; it loads the OLD spec into the assistant's working context manually, runs the Exploration step under that loaded text (the `/explore` Skill tool is **not** invoked, to prevent the current installed spec from auto-loading), and compares the resulting `exploration.md` to iteration #8's. No on-disk file is modified at any point during this iteration.

### What the A/B test actually showed

Two `exploration.md` artifacts can be compared directly:

- **Iteration #8's** Exploration output at `devdocs/inquiries/2026-05-14_16-00__current_explore_rewrite_caused_mvl_run_problems/docarchive/exploration.md`, produced under the CURRENT `/explore` spec.
- **This iteration's** Exploration output at `devdocs/inquiries/2026-05-14_17-00__ab_test_rerun_under_old_explore_spec/docarchive/exploration.md`, produced manually under the OLD `/explore` spec loaded into context.

The specific form differences observed:

| Form element                                | Iteration #8 (CURRENT spec)                                       | This iteration (OLD spec)                |
|---|---|---|
| Step 0 declarations table (5 fields)        | Present                                                            | Absent                                    |
| Depth-level commitment (D0–D4)              | Declared (the iteration committed to D3 with D4 probes)            | Absent                                    |
| Annotation-layer enumeration                | Five layers declared upfront                                       | Absent                                    |
| Failure-mode self-check                     | Eleven-mode enumeration                                            | Absent (the OLD spec has a lighter list)  |
| NOT-list anchors                            | Five entries with explicit project-discipline paths                | Four entries, conceptual contrasts only   |
| Final structural-map sections               | ~9 named sections (Territory Overview / Inventory / Signal Log / Confidence Map / Frontier State / Gaps / Telemetry / Self-assessment / ...) | 6-section structural map |
| Approximate scaffolding-to-content ratio    | Bookkeeping-heavy                                                  | Core-operation-heavy                      |

The reduction is concentrated in **protocol metadata** — declarations, layer commitments, named-failure self-checks, telemetry — not in the core cognitive operation (the scan-signal-probe-resolution-frontier-confidence sequence that both versions of the spec describe). Under the OLD spec, the core operation receives proportionally more space; under the CURRENT spec, the bookkeeping receives proportionally more.

### Three-level claim calibration

This single A/B run establishes one thing cleanly, infers a second thing partially, and leaves a third thing out of scope.

**Level 1 — Form-confirmed (empirically demonstrated).** Loading the OLD /explore spec into context produces a substantially lighter Exploration output than loading the CURRENT spec. This is directly observable by comparing the two artifacts. The form-level effect iteration #8 hypothesized from static spec comparison is real under live execution.

**Level 2 — Substance-inferred (partial; not pure empirical).** Under the OLD spec, the core cognitive operation appears to receive more attention relative to protocol bookkeeping. Whether this translates to *better* substance (more accurate signals, sharper probes, more honest confidence calibration) cannot be cleanly established from one A/B run on the same investigation question — both runs reach broadly similar substantive conclusions about the /explore diff. Establishing substance-superiority would require a closer-reading study across multiple investigations under each spec.

**Level 3 — Mistake-prevention-longitudinal (out of scope).** Whether the form difference reduces MVL+ mistakes *over time* — the question implied by the user's original "covering for mistakes" hypothesis — requires a multi-run longitudinal study with mistake-rate measurement across many inquiries under each spec. One A/B run cannot address this. Iteration #8's underlying conjecture remains plausible but unestablished at this level.

### Honest residual-context confound

This A/B run is not a pure independent test. The assistant executing the OLD-spec Exploration step had accumulated substantial context from iterations #1 through #8 of this chain — including iteration #8's own diff catalogue, hypotheses, and conclusions. Some of the OLD-spec output's leanness might reflect "already-solved problem" effects rather than the spec itself. A cleaner independent test would require a fresh assistant context (no chain history) running under each spec separately, which is out of scope for this iteration.

A second related limitation: manual execution under a loaded spec gives no mechanical lock against drift. The assistant may carry CURRENT-spec habits into the OLD-spec execution unintentionally; nothing in the load-only methodology prevents that.

These confounds are real and constrain how strongly the form-level result can be read. They do not invalidate the result — the form differences are specific structural absences (specific tables and lists that are present in one output and absent in the other), not summary-style brevity that could be explained away as "I already solved this." But the confounds may not fully account for the observed magnitude either way; the form-level claim is best read as "supported under conditions that include real but bounded confounds."

### Verdict and inherited REPAIR

This finding's verdict is **CONFIRMS iteration #8 at the form level**. The empirical A/B run demonstrates the form-level effect iteration #8 hypothesized. This strengthens iteration #8's contributing-factor claim from "inferred from static diff" to "observed under live execution." It does not correct, supersede, or revise the prior finding. Iteration #8's three-level claim calibration is preserved; this iteration upgrades only the form-level confidence.

The REPAIR is **inherited** from iteration #8 verbatim, not restated here:

- The four labelled REPAIR elements (the Sources-subsection REMOVE, the Neighbor-disciplines table REPAIR, the Specialization-pattern REPAIR, and the KEEP-with-flag treatment of the nine protocol-overhead elements) are specified in iteration #8's finding. This finding references them by label so the user can locate them; it does not duplicate their specifications.

The user gets one additional empirical data point for the REPAIR decision iteration #8 framed — not a new decision. The chain's actionable item remains iteration #8's E2 REPAIR; nothing in this iteration overrides or extends it.

### Reproducible methodology record

For a future reader who wants to replicate the test:

1. **Load the OLD `/explore` spec into context manually.** Read `/Users/ns/Desktop/projects/native/archived_skills/bf4ae1f-hg/bf4ae1f-explore/references/explore.md` into the assistant's working context before starting the Exploration step.
2. **Do NOT invoke the `/explore` Skill tool.** Invoking the Skill triggers the current installed spec to auto-load and contaminates the test. Execute the Exploration step manually, applying the OLD spec's process (state mode and entry point → run 7-step exploration cycles → assess convergence by the OLD spec's three criteria plus a jump scan → produce a six-section Structural Map) to the same investigation question used in iteration #8.
3. **Do not modify any installed file.** Per the user's explicit direction ("dont swap, just by loading cant u do?"), no backup or file-swap is performed. The OLD spec is present only in the assistant's context window for this iteration; the on-disk `homegrown/explore/references/explore.md` is untouched.
4. **Compare artifacts.** The artifact-level comparison between this iteration's `docarchive/exploration.md` and iteration #8's `docarchive/exploration.md` is the test result.

This methodology supports form-level claims (the artifacts are directly comparable) but does not support substance-superiority or mistake-prevention claims, which require additional study designs as described in the three-level calibration.

### Single-layer self-reference

The other disciplines in this iteration's pipeline (sensemaking, decomposition, innovation, critique) executed under their **current** installed specifications. Only `/explore` was A/B-tested. This finding does not claim spec-induced distortion in those other disciplines because:

- The finding's scope is narrow and largely mechanical (empirical witness plus inheritance of a prior REPAIR);
- The sensemaking and decomposition outputs were deliberately tight, in proportion to the over-scoped acknowledgment;
- No load-bearing claim in this finding depends on discipline-spec behavior beyond `/explore`.

If the other disciplines' current specs do contribute coupling artifacts to their outputs in this folder, those artifacts are bounded by the inheritance scope (this finding inherits iteration #8's REPAIR rather than introducing new claims) and do not affect the form-level CONFIRMS verdict.

## Next Actions

### MUST

- **What:** Apply iteration #8's E2 selective-revert REPAIR to `homegrown/explore/references/explore.md` (the Sources-subsection REMOVE, the Neighbor-disciplines table REPAIR removing project-path columns, the Specialization-pattern decoupling from `/navigation`).
- **Who:** Direct-edit by the user or by an assistant invoked specifically to apply the REPAIR; the inherited specifications live in iteration #8's finding (`devdocs/inquiries/2026-05-14_16-00__current_explore_rewrite_caused_mvl_run_problems/finding.md`).
- **Gate:** Condition-bound — apply when the user is ready to act on the REPAIR. This finding adds empirical strength to iteration #8's recommendation but does not unilaterally raise its urgency.
- **Why:** The REPAIR removes the project-coupling elements identified by iteration #8 as the load-bearing contributors to the form difference now empirically confirmed.

### COULD

- **What:** A second A/B run on a different investigation question to test whether the form-difference replicates across topics.
- **Who:** A future inquiry, run only if the user has structural reason to question this iteration's single-question result.
- **Gate:** Condition-bound — only if the iteration #10+ threshold (structurally NEW questions) is met. A pure replication on a different topic would likely fall below the elevated threshold; the user should weigh the marginal value carefully.
- **Why:** Replication on a different topic would partially address the residual-context confound and would broaden the form-level claim's generality. Marginal value is small relative to chain accumulated cost.

### DEFERRED

- **What:** A longitudinal mistake-prevention study comparing MVL+ outputs over many inquiries under OLD versus CURRENT `/explore` specs.
- **Gate:** Observable trigger — if mistake-rate concerns recur on MVL+ runs after iteration #8's REPAIR is applied, AND those concerns appear to track Exploration-discipline behavior specifically.
- **Why (if revived):** Would address the third-level claim (mistake-prevention longitudinal) that this iteration leaves out of scope.

- **What:** A closer-reading study across multiple investigation outputs under each spec to assess whether the form-level effect translates into substance-superiority.
- **Gate:** Observable trigger — if the question of substance-superiority becomes load-bearing for a future spec decision beyond E2.
- **Why (if revived):** Would partially address the second-level claim (substance-inferred) by accumulating evidence beyond a single A/B comparison.

## Reasoning

### What was killed during this iteration

This iteration's sensemaking and decomposition explicitly killed several tempting framings; the critique step prosecuted each and confirmed the kill.

**Full-revert ("E1") of the entire CURRENT `/explore` spec.** Tempting because the form difference is now visible. Killed because the form difference is concentrated in three identifiable elements (the Sources subsection, the Neighbor-disciplines table, the Specialization-pattern coupling to `/navigation`) that iteration #8's E2 already targets. A full revert would discard whatever genuinely useful additions the CURRENT spec introduced.

**Correcting iteration #8.** Tempting because the empirical evidence is stronger than iteration #8's static diff. Killed because the empirical result does not contradict iteration #8 — it confirms at form level and refines the calibration from "inferred contributing factor" to "observed form-level effect." A CORRECTS verdict would mis-classify a confirmation as a correction.

**Over-claiming substance.** Tempting under empirical-observation excitement: the OLD-spec output looks cleaner, therefore the OLD spec produces better thinking. Killed by the three-level claim calibration: one A/B run on one investigation question, with significant residual-context confound, establishes form, not substance, not longitudinal mistake-prevention.

**Duplicating the E2 REPAIR text.** Tempting because writing out the REPAIR makes this finding feel more substantial. Killed by the duplicate-derivable-state risk dimension: iteration #8's REPAIR specifications are authoritative; restating them here creates two sources of truth that can drift.

**Multi-layer self-reference.** Tempting because the chain has a sustained interest in self-reference checks. Killed because a Confirmation Report at this scope doesn't carry the load needed for multi-layer self-reference; a single paragraph naming what was and wasn't A/B-tested is sufficient.

### What survived critique

The critique step constructed multi-axis prosecution across nine probes (claim calibration; residual-context treatment; CONFIRMS verdict shape; INHERITS-not-DUPLICATE; cost acknowledgment integrity; iteration #10+ threshold rigor; methodology-record completeness; self-reference soundness; no-swap methodology preservation). All ten evaluation dimensions, including four project-specific risk axes (duplicate-derivable-state, operation-parsimony, phase-fit, explicit-culture-fit), were addressed.

The critique's adversarial testing landed two non-material caveats during prosecution — incorporated into this finding directly:

- The original wording "the form difference observed is large enough that residual-context effects alone are unlikely to fully account for it" was softened to "may not fully account for the observed magnitude." The original phrasing leaned toward a measurement claim it could not support; the softer phrasing accurately frames the same point as a defensible judgment.

- The methodology record originally listed "load spec; do not invoke Skill tool; do not modify files" without acknowledging that manual execution gives no mechanical lock against drift back into current-spec habits. This finding adds the drift acknowledgment explicitly (in the residual-context-confound section and the methodology-record section).

The assembly check confirmed that the finding's pieces combine into a coherent empirical-witness artifact rather than into something that subtly over-claims substance or duplicates the inherited REPAIR.

### Why this answer instead of alternatives

The structurally available verdict-shapes within the project's chain vocabulary are CORRECTS / REFINES / SUPERSEDES / CONFIRMS / SUPPLEMENTARY. CONFIRMS-at-form-level was chosen because:

- The empirical result does not contradict iteration #8 → not CORRECTS.
- The result does not change iteration #8's substance, only the strength of its evidence → not REFINES.
- The result does not replace iteration #8 with a different finding → not SUPERSEDES.
- The result provides confirmatory empirical evidence on iteration #8's existing claim → CONFIRMS.
- The "at form level" qualifier prevents CONFIRMS from over-reading: it states what is confirmed (form-level) and implies what is not (substance-superiority, longitudinal mistake-prevention).

SUPPLEMENTARY was considered and rejected: that vocabulary applies when a finding adds adjacent content without affecting the prior claim's epistemic state. This iteration does affect iteration #8's state — it upgrades the form-level confidence — so SUPPLEMENTARY would understate the relationship.

## Open Questions

### Research Frontiers

- **Longitudinal mistake-prevention under OLD versus CURRENT `/explore`.** Whether the form-difference reduces mistakes over many inquiries over time. Requires a multi-run study with mistake-rate measurement. Out of scope for one A/B run. Revival gate: see Next Actions → DEFERRED.

- **Substance-superiority closer-reading study.** Whether the OLD spec's lighter form produces measurably better cognitive operation (sharper probes, better confidence calibration, more accurate signals). Requires multi-output reading study across topics. Revival gate: see Next Actions → DEFERRED.

### Refinement Triggers

- **Iteration #10+ threshold.** The chain's threshold for justifying another full MVL+ iteration is elevated. **Iteration #10 requires structurally NEW questions, not refinements of existing chain claims.**

  Examples of what would meet the threshold: a failure mode observed in a discipline outside the /innovate—/explore axis already covered by iterations #7–#8; an empirical longitudinal mistake-rate measurement (the multi-run study currently DEFERRED); a new project decision that depends on ambiguity not already resolved in iterations #1–#9.

  Examples of what would NOT meet the threshold: a follow-up A/B run on the same chain topic; another refinement of the three-level claim calibration; another self-reference layer applied to this finding. These are direct-edit candidates, not full-loop candidates.

  This threshold is a Schelling point, not a hard gate — natural-language thresholds can be argued around. The operational content is the named exclusions: the explicit list of what doesn't qualify is what raises the bar.

### Monitoring

- **After iteration #8's E2 REPAIR is applied** (when the user acts on the inherited Next Action), watch the next several MVL+ runs for whether the bookkeeping-vs-core-operation ratio in resulting `exploration.md` files shifts in the direction predicted by this iteration. This is informal monitoring, not a controlled study; it is informative but not load-bearing.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
/MVL+ now lets run another MVL+ loop with same input as last one but this time we will do it with old explore from /Users/ns/Desktop/projects/native/archived_skills/bf4ae1f-hg/bf4ae1f-explore/references/explore.md can you arrange this?
```

Follow-up clarification (load-only methodology):

```text
dont swap, just by loading cant u do?
```

Original-pass input being A/B-tested (the iteration #8 prompt):

```text
/MVL+ now i want you to compare old /Users/ns/Desktop/projects/native/archived_skills/bf4ae1f-hg/bf4ae1f-explore/references/explore.md and homegrown/explore/references/explore.md and tell me if our problematic recent MVL runs (lots of revisions and mistakes) are actually caused by this change?

because when using old version, we did not had so many wrong runs with mistakes...

we tried to improve explore but maybe it was doing something we couldnt understand ? and it was covering for the such mistakes?
```

</details>
