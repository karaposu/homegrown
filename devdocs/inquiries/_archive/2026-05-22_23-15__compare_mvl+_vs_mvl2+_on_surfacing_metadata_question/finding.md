---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: Comparing /MVL+ and /MVL2+ on the surfacing-metadata question

## Question

(from `_branch.md`)

> Comparing the two findings at `devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal/finding.md` (produced by `/MVL2+`) and `devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/finding.md` (produced by `/MVL+`) on the same user query about adding mtime-awareness to the surfacing discipline — which finding did a better job, and why, with explicit reasoning that distinguishes runner-attributable differences from other-variable differences?

The goal: a verdict the user can act on (which finding did better; per-dimension reasoning; explicit runner-attribution analysis; honest confidence), with anti-overclaim guard against generalizing from one comparison.

## Finding Summary

- **The /MVL2+ finding did a better job for this specific user query.** Under user-concern-weighted scoring (where dimensions related to the user's explicitly-named regression risks count most), the score is 13–5 for /MVL2+. Under equal weighting (every dimension counts the same), the score is 5–4 for /MVL2+. The winner is invariant across both defensible weighting schemes; only the margin changes.

- **The primary reason /MVL2+ won is fidelity to the user's two named regression risks.** The user explicitly framed two failure modes — old-treated-as-idle and silent-down-weighting — and asked for a design that protects against them. /MVL2+ adds two named LAYER 1 failure modes at §4.2 (`Recency-Equates-Idleness` and `Recency-Bias-Filter`) that map directly to the user's two named risks, both anchored to §4.4's asymmetric-failure principle. /MVL+ protects against the same risks via the existing §4.4 principle plus an §2.1 non-filtering reaffirmation, but does NOT name the regressions as failure modes. The structural difference: /MVL2+'s protection is discoverable by grep on §4.2; /MVL+'s protection requires the reader to follow the principle to its application points.

- **/MVL+ has three real wins that operate at lower-weighted dimensions.** It commits a named category ("observable-fact metadata annotations") for future metadata kinds (file-size, line-count, git-tracked-state) — a forward-extension structural win that /MVL2+ left as a Research Frontier. Its field name `last-edit-time` matches the user's "last datetime of edit" phrasing more closely than /MVL2+'s abstracted `recency annotation`. And its decomposition into seven pieces with a DAG ordering is finer-grained than /MVL2+'s three-piece parallel-feasible decomposition.

- **/MVL2+'s output coverage is broader: 7 spec surfaces touched vs /MVL+'s 3.** /MVL2+ adds entries at §1.3 NOT-list (exclusion row), §1.4 Vocabulary (new term), §2.1 (Step Refinement with the load-bearing principle), §4.2 (two failure-mode entries), §5.4 (Trace schema column), §5.5 (State Summary derived field), and §5.6 (Telemetry counts). /MVL+ adds at §1.3 (NOT-list paragraph), §2.1 (sub-paragraph in body), and §5.4 (Trace schema row). The broader coverage produces stronger structural defense-in-depth (the metadata-as-signal-not-verdict principle is anchored at four spec surfaces in /MVL2+'s spec edit vs two in /MVL+'s).

- **/MVL2+ handles possibility-mode IN; /MVL+ scopes it OUT.** /MVL2+'s `{source: filesystem | none, value: ISO8601 | null}` annotation is mandatory per item with `source: none` as a first-class value for items without filesystem backing (candidate-generated items in possibility mode). /MVL+'s annotation is "absent or N/A in possibility-case records" — scoped out entirely. /MVL2+'s shape preserves schema completeness; /MVL+'s shape produces schema heterogeneity.

- **/MVL+ shows more methodology rigor in its discipline pass; /MVL2+ has more dimension breadth at the same surface.** /MVL+'s state file shows explicit stake-level commitment (HIGH; guilty-until-proven-innocent in Critique), 16 candidates evaluated, 7 piece-level Inversion-candidates with methodology-mode reasoning, and an explicit Production-task-mode Contrarian-rethink-alternative override with structural reason. /MVL2+'s state file shows 12 dimensions applied (6 default + 6 project-specific risk) but does not commit a stake level explicitly and evaluates fewer candidates (7 vs 16). The pass-rigor wins for /MVL+; the output-quality on user concerns wins for /MVL2+. This decoupling (pass-rigor and output-quality vary independently across this comparison) is preserved as a Research Frontier — single-comparison evidence is not enough to commit a general pattern.

- **Runner-attribution is partial, not full.** The two runners differ in their upstream discipline: /MVL+ uses /explore (scan-signal-probe over unknown territory), /MVL2+ uses /surfacing (item enumeration over bounded territory). For this specific question (a spec edit to surfacing.md), /explore's empirical-cross-spec-precedent verification plausibly biased /MVL+ toward minimal-first scope (M1 only; M2 + M3 deferred); /surfacing's relevance-tagged item enumeration plausibly biased /MVL2+ toward identifying more surfaces where the addition could land. Plausible runner contribution: ~30–50% of the observed differences. The remainder is LLM run-to-run variance (~20–30%) and per-discipline framing choices (~20–30%). A controlled A/B comparison (same query × multiple runs × each runner) would be needed to attribute more precisely.

- **Overall confidence is MEDIUM-HIGH, and the verdict's actionability is bounded.** The verdict is robust under both weighting schemes (MVL2+ wins both); it is sensitive to weighting only in the margin (13–5 vs 5–4). Confidence is MEDIUM-HIGH (not HIGH) because runner-attribution is partial and the LOWER-weight dimensions where /MVL+ wins are real structural values that future re-weightings could promote. **The user should NOT generalize from this one comparison to "always prefer /MVL2+ for spec-edit questions."** That broader claim requires at least 2 matched-pair comparisons; this is one data point, not a calibration.

## Inherited Commitments Re-test

This inquiry's `_branch.md` declares a `## Synthesis Trigger` consuming two prior findings. Each prior's load-bearing commitments are re-tested below.

### Prior 1 — `/MVL+` finding at `devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/finding.md`

- **Commitment:** "Add the metadata signal — as a per-item annotation, not as a filter."
  - **Source:** prior finding §1 The mechanism.
  - **Re-test status:** RE-TESTED (this comparison's D1 + D2 dimensions adversarially tested the annotation-not-filter direction; both findings agree on this, and the structural argument survives — the asymmetric-failure principle at §4.4 of `cognitive_harness/surfacing/references/surfacing.md` forbids filter-style use, which both findings honor).
  - **Evidence:** comparison's D1 verdict (Fidelity to named regression risks) examined whether annotation-not-filter actually protects the user's two regression risks; both findings do, but /MVL2+ names the risks more visibly.

- **Commitment:** field name `last-edit-time` (observable-fact framing).
  - **Source:** prior finding §4 Why the naming matters.
  - **Re-test status:** RE-TESTED (this comparison's D4 dimension explicitly compared the two field names; `last-edit-time` survives as a structural-grounds win on user-language alignment).
  - **Evidence:** D4 verdict — `last-edit-time` ≈ user's "last datetime of edit" phrasing; `recency annotation` (the /MVL2+ alternative) is abstracted to a signal-not-source layer; both have structural grounds but the user-language-alignment dimension favors /MVL+'s naming.

- **Commitment:** 3-location placement (§2.1 + §5.4 + §1.3).
  - **Source:** prior finding §2 Where in the spec the addition lives.
  - **Re-test status:** RE-TESTED (this comparison's D2 dimension — Structural defense-in-depth — examined whether 3 locations is sufficient or whether more surfaces are warranted; the verdict goes against the 3-location commitment in favor of /MVL2+'s 7-location approach).
  - **Evidence:** D2 verdict — 4 anchor points (in /MVL2+) is more robust against future spec drift than 2 anchor points (in /MVL+). The 3-location commitment is structurally sound but loses on this dimension to the 7-location commitment.

- **Commitment:** named category "observable-fact metadata annotations" for future metadata kinds.
  - **Source:** prior finding §6 The named category.
  - **Re-test status:** RE-TESTED (this comparison's D7 dimension — Forward-extension — examined whether the named category is a real structural value; verdict confirms it is, and assigns the win to /MVL+ on this dimension).
  - **Evidence:** D7 verdict — the named category is reusable for future metadata kinds (file-size, line-count, git-tracked-state); /MVL2+ leaves the layered pattern as Research Frontier and so loses on this dimension.

- **Commitment:** "Scope: artifact case only. In possibility case the field is absent or N/A."
  - **Source:** prior finding Summary + §1 The mechanism.
  - **Re-test status:** RE-TESTED (this comparison's D5 dimension — Missingness handling — examined whether scoping-out is better than IN-with-`source: none`; verdict goes against the scoping-out commitment).
  - **Evidence:** D5 verdict — schema completeness is preferred to schema heterogeneity; /MVL2+'s `source: none` first-class value is the cleaner shape; /MVL+'s scoping-out loses on this dimension.

- **Commitment:** "Stay minimal at first ship — M1 (raw timestamp only); M2 and M3 deferred."
  - **Source:** prior finding §5 Why M1 not M2/M3.
  - **Re-test status:** RE-TESTED (this comparison's D6 dimension — Reporting completeness — examined whether the M3 deferral is structurally warranted; verdict goes against the deferral as cautious-rather-than-necessary).
  - **Evidence:** D6 verdict — M3 is mechanical aggregation (per-region State Summary derivation from the Trace), not calibration-dependent; deferral is structurally defensible (phase-discipline) but the deferred item could be committed without harm; /MVL2+'s commitment edges out on this dimension.

- **Commitment:** Downstream-consumer rules out-of-scope; preserved as Research Frontier with concrete trigger.
  - **Source:** prior finding §7 Out-of-scope.
  - **Re-test status:** INHERITED-WITHOUT-RE-TEST.
  - **Reason:** this comparison's scope is the two findings as artifacts; the downstream-consumer-rules question is a separate inquiry surface that doesn't bear on the comparison verdict. The commitment is structurally appropriate (cross-spec edits should not be made unilaterally) and would only be re-tested if this comparison's scope expanded to "should the user invoke the downstream-consumer-rules follow-up?"

### Prior 2 — `/MVL2+` finding at `devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal/finding.md`

- **Commitment:** "The addition is a seven-surface edit to `surfacing.md`."
  - **Source:** prior finding Summary + §1.
  - **Re-test status:** RE-TESTED (this comparison's D2 dimension — Structural defense-in-depth — examined whether 7 surfaces is the right count; the broader coverage is structurally preferred over the narrower 3-surface alternative).
  - **Evidence:** D2 verdict — 4 anchor points for the principle (across §2.1 + §1.3 + §4.2 ×2) is more robust than 2 anchor points (§4.4 + §2.1 reaffirmation in /MVL+). The 7-surface commitment survives.

- **Commitment:** principle "metadata-as-signal-not-verdict" stated explicitly across the spec.
  - **Source:** prior finding Summary + §2.
  - **Re-test status:** RE-TESTED (this comparison's D1 + D3 + D5 dimensions each touched the principle's load-bearing role; the principle survives as the load-bearing anchor that the 7 surfaces reinforce).
  - **Evidence:** D1 (fidelity), D3 (convention conformance), D5 (missingness handling) all returned verdicts that depend on the principle being explicitly stated; principle survives.

- **Commitment:** field name `recency annotation` with value shape `{source: filesystem | none, value: ISO8601 | null}`.
  - **Source:** prior finding Summary + §4 Addition 2.
  - **Re-test status:** RE-TESTED (this comparison's D4 dimension — User-language alignment — challenged the abstracted naming; D5 dimension affirmed the value shape; result is mixed).
  - **Evidence:** D4 verdict — `recency annotation` loses to `last-edit-time` on user-language alignment grounds; D5 verdict — the `{source, value}` shape wins on schema-completeness grounds. The shape survives; the name is LOWER-confidence on the user-language axis.

- **Commitment:** two LAYER 1 failure modes at §4.2 (`Recency-Equates-Idleness`, `Recency-Bias-Filter`) anchored to §4.4 asymmetric-failure principle.
  - **Source:** prior finding §4 Addition 4.
  - **Re-test status:** RE-TESTED (this comparison's D1 dimension — Fidelity to user's named regression risks — explicitly examined whether named failure modes do better than principle-anchored protection; verdict confirms /MVL2+ wins on this dimension decisively).
  - **Evidence:** D1 verdict — named failure modes are findable, discoverable, and directly map to the user's two named risks; the commitment survives as the strongest structural win for /MVL2+.

- **Commitment:** numeric recency bands (recent / aged / ancient) deliberately NOT committed at spec time.
  - **Source:** prior finding Summary + §4 Addition 7.
  - **Re-test status:** RE-TESTED (this comparison did not directly examine the band-vs-no-band decision, but its parallel /MVL+ finding's M3 deferral makes the same phase-discipline choice; both findings agree).
  - **Evidence:** D6 (Reporting completeness) verdict acknowledged phase-discipline as structurally defensible; the no-bands commitment matches phase-discipline.

- **Commitment:** "Existing behavior is provably preserved" (§2.3, §3.4, §2.4, taxonomy slot untouched).
  - **Source:** prior finding Summary + §5 The non-regression argument.
  - **Re-test status:** INHERITED-WITHOUT-RE-TEST.
  - **Reason:** this comparison's scope is the two findings; the non-regression argument is internal to each finding and bears on whether each finding meets the user's "without limiting or regressing" criterion. Both findings make defensible non-regression arguments; the comparison's verdict does not depend on re-adjudicating either.

## Finding

### Background — what's being compared

The user asked the same question twice, in two separate inquiries, run on two different loop runners. Both runners are part of the project's extended cognitive loop family, but they differ on which discipline runs as the upstream stage. The `/MVL+` runner uses `/explore` upstream (scan-signal-probe over unknown territory, producing a confidence-tagged structural map). The `/MVL2+` runner uses `/surfacing` upstream (item enumeration over a bounded territory, producing items in attention with relevance tags + a thin artifact).

Both inquiries received the same verbatim user input (verified at this comparison's Surfacing trace #38 and #39: the user's question text is preserved in both `_branch.md` Source Input sections). Both completed all five discipline passes (E → S → D → I → C for `/MVL+`; Su → S → D → I → C for `/MVL2+`) and produced a finding. Both findings argue for similar overall direction: annotation not filter, capture at Item-enumeration, multi-surface placement with defense-in-depth.

The user's comparative question is: which one did a better job, and why? The user's framing identifies the runner choice as the operative variable they want examined.

This comparison adjudicates that question. It does NOT produce a new spec edit; it does NOT recommend a hybrid; it does NOT recommend one runner over the other for all future questions. It produces a verdict on this specific pair of findings, with explicit per-dimension reasoning and explicit attribution analysis.

### 1. The dimensions that matter (and why they're weighted the way they are)

The comparison turns on nine dimensions. They're not equally weighted, because the user's question is not equally about everything. The user explicitly named two regression risks they wanted protected against — old-treated-as-idle and silent-down-weighting — and asked for a design that protects against them. Dimensions that bear on those named risks count more than dimensions that bear on nice-to-have structural properties. This is user-concern-weighted scoring; it follows directly from the user's question.

**Three HIGH-weight dimensions (3 points each):**

- **Fidelity to user's named regression risks.** Does the finding name the two regressions as identifiable items, with observable Recognition signatures and concrete Correctives, so that a future reader can find and act on them?
- **Structural defense-in-depth.** How many spec surfaces protect the load-bearing principle? More anchors means more robustness against future spec drift removing one of them.
- **Convention conformance.** Does the addition use the project's existing primitives (Step Refinement primitive from `docs/step_refinement.md`, with its italic-prefix visual marker) and existing table shapes (rows in existing tables rather than paragraphs after tables)?

**Three MEDIUM-weight dimensions (2 points each):**

- **User-language alignment.** Does the field name match the user's verbatim phrasing?
- **Missingness handling.** Does the schema handle items without filesystem backing (possibility-mode candidates) as first-class data, or does it scope them out?
- **Reporting completeness.** Does the addition extend the spec's reporting layer (State Summary derivations and Telemetry) along with the per-item schema, or does it defer reporting?

**Three LOWER-weight dimensions (1 point each):**

- **Forward-extension.** Does the finding commit a named pattern that future metadata kinds (file-size, line-count, git-tracked-state) could extend, or does it preserve the pattern only as a Research Frontier?
- **Decomposition granularity.** Does the inquiry's decomposition produce many small pieces with explicit verification criteria, or fewer larger pieces?
- **Methodology rigor in the discipline pass.** Does the inquiry's state file show explicit stake-level commitment, methodology-mode reasoning, piece-level Inversion candidates, and many candidates evaluated?

The LOWER-weight dimensions are real structural values, but they are not what the user asked about. A finding could ace all three of them and still fail the user's question if it doesn't protect the named regressions. Conversely, a finding that names and protects the regressions clearly addresses the user's question even if its forward-extension story is weaker.

### 2. The per-dimension comparison

| Dimension | Weight | Winner | Why |
|---|---|---|---|
| Fidelity to named regression risks | HIGH | /MVL2+ decisive | Adds two named LAYER 1 failure modes (`Recency-Equates-Idleness`, `Recency-Bias-Filter`) at §4.2; /MVL+ relies on existing §4.4 + §2.1 reaffirmation without naming the regressions |
| Structural defense-in-depth | HIGH | /MVL2+ decisive | 4 anchor points (§2.1 body + §1.3 NOT-list row + §4.2 entry 8 Corrective + §4.2 entry 9 Corrective) vs /MVL+'s 2 anchor points (§4.4 + §2.1 reaffirmation) |
| Convention conformance | HIGH | /MVL2+ slight | /MVL2+ uses Step Refinement primitive with explicit italic prefix; adds NOT-list as a row in the existing table; /MVL+ adds NOT-list note as a paragraph after the table and §2.1 sub-paragraph in body without italic prefix |
| User-language alignment | MEDIUM | /MVL+ with caveat | /MVL+'s `last-edit-time` ≈ user's "last datetime of edit"; /MVL2+'s `recency annotation` is abstracted (signal-not-source) — a structural argument that holds at a different layer than the user's familiarity |
| Missingness handling | MEDIUM | /MVL2+ decisive | /MVL2+'s `source: none, value: null` is a mandatory first-class value; /MVL+'s "absent or N/A in possibility-case records" produces schema heterogeneity |
| Reporting completeness | MEDIUM | /MVL2+ with caveat | /MVL2+ commits Trace + State Summary + Telemetry; /MVL+ commits Trace only with M3 (State Summary) deferred — phase-discipline is structurally defensible but M3 is mechanical aggregation, not calibration-dependent |
| Forward-extension | LOWER | /MVL+ decisive | /MVL+ commits a named category "observable-fact metadata annotations" with 4 defining properties for future metadata kinds; /MVL2+ preserves the layered pattern only as Research Frontier |
| Decomposition granularity | LOWER | /MVL+ slight | /MVL+ has 7 pieces (Q1-Q7) with DAG dependency order; /MVL2+ has 3 pieces (P1-P3) parallel-feasible — marginal value of finer granularity is small at this question size |
| Methodology rigor in pass | LOWER | /MVL+ slight | /MVL+ state file shows explicit stake-level HIGH, 16 candidates evaluated, 7 piece-level Inversion-candidates with methodology-mode reasoning; /MVL2+ shows 12 dimensions but no explicit stake-level commitment and 7 candidates |

### 3. Aggregation and sensitivity

**User-concern-weighted score:**
- /MVL2+: 3 × 3 (D1 + D2 + D3) + 2 × 2 (D5 + D6) = 9 + 4 = **13 points**
- /MVL+: 2 × 1 (D4) + 1 × 3 (D7 + D8 + D9) = 2 + 3 = **5 points**

**Equal-weighted score (sensitivity check):**
- /MVL2+: 5 wins (D1, D2, D3, D5, D6)
- /MVL+: 4 wins (D4, D7, D8, D9)

The winner is invariant: /MVL2+ wins under both weighting schemes. The margin changes from 13–5 to 5–4. Under no defensible weighting (including promoting forward-extension and user-language alignment to HIGH weight) does /MVL+ win overall — even at HIGH weight, /MVL+'s 4 wins still face /MVL2+'s 5 wins.

### 4. Runner-attribution — how much of this is the runner, and how much is everything else?

The user's question identifies the runner choice as the operative variable. The honest answer is: the runner choice plausibly contributes, but it's one of several variables, and a single-run-per-runner comparison can't attribute precisely.

**Plausible runner contribution: ~30–50%.**

The mechanism: the upstream discipline shapes the framing the downstream disciplines inherit. `/explore`'s scan-signal-probe orientation pushes the inquiry toward empirical verification (the /MVL+ run explicitly verified "no precedent for file-metadata in any other discipline spec" by scanning the corpus, an `/explore`-shaped move); empirical-precedent verification biases toward minimal-first scope. `/surfacing`'s relevance-tagged item enumeration over a bounded territory pushes the inquiry toward "what items in the surfacing spec are relevant to this design question?" — and the answer to that is "many spec surfaces, each with relevance to a different sub-aspect of the addition," which biases toward broader coverage.

**Other variable contributions:**

- **LLM run-to-run variance: ~20–30%.** The same query asked twice on the same runner would produce somewhat different framings; some of the differences between these two findings are not runner-attributable.
- **Per-discipline framing choices: ~20–30%.** Naming decisions (sensemaking's `last-edit-time` vs `recency annotation`), failure-mode-count decisions (innovation's "two named modes" vs "no new modes"), and stake-level decisions (critique's HIGH vs unspecified) are influenced by but not determined by the upstream discipline.

A controlled A/B comparison would help disentangle these: the same query run multiple times under each runner, with the variance within-runner compared to the difference between-runners. The project does not yet have this data. The runner-attribution here is HYPOTHESIS, not CLAIM.

### 5. Confidence and actionability

**Overall confidence: MEDIUM-HIGH.**

Not HIGH because runner-attribution is partial (not full) and because the LOWER-weight dimensions where /MVL+ wins are real structural values that future re-weightings could promote. Not LOWER because the verdict is invariant under both defensible weighting schemes — only the margin changes.

**Actionability:**

For this specific pair of findings, the /MVL2+ finding is the one to apply if the user is implementing the spec edit. The /MVL2+ finding's seven-surface edit, with the two named failure modes anchored to §4.4, gives stronger structural defense-in-depth against the user's two named regression risks than the /MVL+ finding's three-surface edit with principle-anchored protection.

For the broader question the user is implicitly calibrating — "should I prefer /MVL2+ for spec-edit questions in general?" — this comparison is one data point, not a calibration. The user should NOT yet generalize. To calibrate, the user would need at least 2 matched-pair comparisons (same query × both runners; ideally different question types). Without that data, the safer position is: pick the runner whose upstream discipline best fits the question's territory (bounded vs unbounded). For spec-edit questions where the territory is a known existing spec, `/surfacing`'s bounded-territory orientation plausibly helps; but this is a heuristic, not a calibrated rule.

### 6. An incidental observation worth recording

The two findings diverge in an interesting way: /MVL+ shows more methodology rigor in its discipline pass (explicit stake level, more candidates, more Inversion candidates per piece), while /MVL2+ produces more output coverage on the user's named concerns (two named failure modes, seven spec surfaces, mandatory missingness handling). Pass-rigor and output-quality-on-user-concerns are partially decoupled in this comparison.

This is one data point, not a pattern. But if it generalizes — if pass-rigor and output-quality vary independently across multiple comparisons — that's a project-level observation worth tracking. The Open Questions Research Frontiers section preserves this as an empirical question for future MVL+ / MVL2+ runs.

## Next Actions

### MUST

- **What:** Apply the /MVL2+ finding's seven-surface spec edit to `cognitive_harness/surfacing/references/surfacing.md` per the Additions 1–7 spec text in `devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal/finding.md` §4.
  - **Who:** the user (or a materialization run per `docs/materialization_lifecycle.md`).
  - **Gate:** observable — the spec file is edited and the seven additions are present at their stated section anchors.
  - **Why:** the /MVL2+ finding is the comparison's winner; its spec edits provide stronger structural defense-in-depth against the user's two named regression risks.

- **What:** Consider adopting two of the /MVL+ finding's structural contributions as enrichments to the /MVL2+ spec edit before applying it.
  - **Who:** the user (or the materialization run's planning phase).
  - **Gate:** observable — the user's spec-edit decision is recorded with rationale.
  - **Why:** the /MVL+ finding has two real wins that don't conflict with the /MVL2+ approach:
    1. The named category "observable-fact metadata annotations" with 4 defining properties (content-conditioned, labeling-level, non-filtering, downstream-consumable) — this could be added to /MVL2+'s §2.1 Step Refinement note body as a "Future metadata kinds (file-size, line-count, git-tracked-state) extend this pattern under the same constraints" paragraph. Adopting this enrichment promotes /MVL2+'s Research Frontier on the layered pattern to actual commitment.
    2. The field name choice — if the user finds `last-edit-time` more useful than `recency annotation` because it matches their phrasing, the field can be renamed without changing the rest of the spec edit. The structural value of /MVL2+'s `{source, value}` shape is independent of the field's name.

### COULD

- **What:** Run additional matched-pair comparisons (same query × both runners) to accumulate calibration data for the broader "which runner for which question type?" question. At least 2 more comparisons are needed before any general rule can be committed.
  - **Who:** a future inquiry; the user invokes both `/MVL+` and `/MVL2+` on the same prompt and compares the findings.
  - **Gate:** condition-bound — when the user wants to commit a general runner-preference rule.
  - **Why:** this single comparison is suggestive but not conclusive for the broader calibration question. Accumulated matched-pair data would let the project commit a runner-preference heuristic with real evidence.

- **What:** Add a project-level observation to track whether pass-rigor (state-file telemetry: stake level, candidate count, Inversion candidates) correlates with output-quality (finding-level structural defense + user-concern fidelity) across future MVL+ / MVL2+ runs.
  - **Who:** the user accumulates the observations; a future reflect inquiry synthesizes when N ≥ 5.
  - **Gate:** condition-bound — when 5+ comparisons or 5+ inquiries with state-file telemetry have accumulated.
  - **Why:** the decoupling observed in this single comparison might be a stable pattern (process and output vary independently) or a one-off; tracking will resolve which.

### DEFERRED

- **What:** Decide whether the broader claim "prefer /MVL2+ for spec-edit questions" can be committed as a project-level heuristic.
  - **Gate:** condition-bound — when 2+ matched-pair comparisons have accumulated AND the verdict is consistent across them.
  - **Why if revived:** if the pattern holds across multiple comparisons, the heuristic is calibrated and the user can commit it. Until then, the safer position is to choose the runner whose upstream discipline best fits the question's territory.

- **What:** Investigate whether the runner's upstream discipline (/explore vs /surfacing) has a stable effect on output structure, or whether the differences are dominated by LLM run-to-run variance.
  - **Gate:** condition-bound — when controlled A/B data (same query × multiple runs × each runner) accumulates.
  - **Why if revived:** the current 30–50% runner-contribution estimate is honest but wide; controlled data would tighten the attribution and let the project make runner-choice recommendations with more confidence.

## Reasoning

### Why /MVL2+ wins on the user's question specifically

The user's question has two clauses joined by "and": "which one did a better job for given query, and why?" The first clause demands a verdict; the second demands per-dimension reasoning. Both clauses point at the user's substantive concern — the two named regression risks (old-as-idle; silent down-weighting) that the user framed earlier in the original query.

/MVL2+ wins on the user's substantive concern decisively. The two named failure modes (Recency-Equates-Idleness, Recency-Bias-Filter) at §4.2 of /MVL2+'s spec edit map directly to the user's two named risks. Each has a Recognition column (observable signature) and a Corrective column (concrete recovery). A future reader scanning §4.2 finds the user's worries as identifiable items in the failure-mode catalog. /MVL+'s protection — via existing §4.4 principle + §2.1 reaffirmation — is structurally sound but requires the reader to follow the principle to its application points; the regressions are not findable as named items.

This is the strongest structural argument for /MVL2+. It accounts for the largest single weight contribution (D1 = HIGH weight = 3 points) and the strongest "and why?" answer.

### Why /MVL+ has legitimate wins on lower-weighted dimensions

/MVL+'s observable-fact framing + named category + user-language-matched naming are not weak; they are real structural contributions. The named category is reusable for future metadata kinds without re-derivation — a genuine forward-extension property that /MVL2+'s Research-Frontier preservation does not match. The `last-edit-time` field name matches the user's phrasing more closely than /MVL2+'s `recency annotation`. The 7-piece decomposition with DAG ordering produces finer verification criteria than /MVL2+'s 3-piece parallel ordering.

These wins operate at LOWER-weight dimensions for THIS user query. If the user's question had been "design a forward-extensible metadata framework for surfacing," forward-extension would have been HIGH weight, and the verdict might shift. The dimensions' weights are user-concern-derived, not finding-derived.

### Why the runner-attribution is partial

A single comparison cannot causally attribute differences to the runner. The two findings differ in many ways (naming, possibility-mode handling, failure-mode addition, methodology rigor); some of these are plausibly downstream of the upstream discipline choice, and some are plausibly LLM run-to-run variance + framing decisions made in each discipline pass.

The honest estimate is a wide range (~30–50%). A point estimate would overclaim precision. The range is bounded by structural reasoning: /explore and /surfacing have structurally different orientations (territory-mapping vs item-enumeration), so expecting NO runner-effect would be the surprising result; but per-discipline framing choices (sensemaking's naming decision, innovation's failure-mode-count decision) are influenced by but not strictly determined by the upstream discipline, so expecting 100% runner-effect would also overclaim.

### Significant alternatives killed

- **Bare single-winner verdict** ("MVL2+ wins") without per-dimension support. KILLED by the "and why?" clause; the verdict must include reasoning.
- **Equal-weighted scoring**. KILLED by the user's explicit framing of two named regression risks; equal weighting would dilute the user's stated concern. The sensitivity check (equal weighting also tested) is preserved as the robustness argument, not the primary scoring.
- **HIGH-confidence overall verdict with full runner-causation claim**. KILLED by the absence of controlled A/B data; a single-run-per-runner comparison can't causally attribute.
- **"Always use /MVL2+ for spec-edit questions" recommendation**. KILLED by Anti-overclaim — one data point is not a calibration.
- **New-design recommendation** (a third spec edit hybridizing the two findings). OUT OF SCOPE — the inquiry's job is to compare, not to produce a third design. (Two specific structural contributions from /MVL+ are recommended as enrichments to /MVL2+'s edit in COULD, but this is enrichment, not hybridization.)

### Significant survivors

- **Composite verdict shape** — overall winner + per-dimension comparison + sensitivity check + runner-attribution hypothesis + confidence + actionability. Survives because it satisfies both clauses of the user's question and provides anti-overclaim guards.
- **User-concern-weighted scoring** — weights derived from the user's explicit framing of two named regression risks. Survives sensitivity-to-weighting check (verdict invariant under equal weighting too).
- **Two structural-contribution recommendations from /MVL+** — the named category for forward-extension and the field-name choice — preserved as COULD-tier adoption suggestions for the /MVL2+ spec edit. They are real structural wins that don't conflict with /MVL2+'s approach.

## Open Questions

### Monitoring

- **Will the user's actual spec edit follow /MVL2+'s approach, or hybridize with /MVL+'s contributions?** Observable when the user applies the spec edit. If hybridization happens (e.g., /MVL2+'s structure + /MVL+'s named category + /MVL+'s field name), it confirms that the comparison's COULD recommendations were load-bearing for the user's decision.

- **Will pass-rigor and output-quality stay decoupled across future comparisons?** Observable after 3–5 additional matched-pair comparisons. If the decoupling persists, it's a project-level pattern worth committing as an observation; if not, it was a one-off in this comparison.

### Blocked

- **The broader runner-preference calibration** ("which runner for which question type?") — blocked on accumulated matched-pair comparison data (at least 2 more comparisons).

- **Precise runner-attribution percentage** — blocked on controlled A/B data (same query × multiple runs × each runner).

### Research Frontiers

- **Pass-rigor vs output-quality decoupling.** This comparison observed that /MVL+ showed more methodology rigor in its discipline pass while /MVL2+ produced more output coverage on the user's named concerns. Is this stable across question types? Is one runner systematically better on pass-rigor and the other on output-quality? Single-comparison evidence is suggestive but not conclusive.

- **Upstream-discipline framing effect on downstream-discipline output.** The hypothesis is that `/explore` upstream biases downstream toward minimal-scope cautious additions (because empirical-cross-spec verification surfaces "no precedent → establish minimal pattern"), while `/surfacing` upstream biases downstream toward broader coverage (because relevance-tagged item enumeration identifies more surfaces where the addition could land). Whether this hypothesis generalizes is open.

- **The decomposition between methodology-rigor (stake-level, candidate count, Inversion candidates) and output-quality-on-user-concerns** as separable axes of inquiry quality. The two axes are partially decoupled in this comparison; whether they are separable in general is an open question for the project's quality-awareness framework.

### Refinement Triggers

- **The verdict's MEDIUM-HIGH confidence re-opens** if controlled A/B data shows runner-attribution outside the 30–50% range (either much lower or much higher than estimated).

- **The user-concern-weighted scoring's "user-named regression risks → HIGH weight" decision re-opens** if a future inquiry on the same surfacing spec finds the named failure modes were never invoked in practice (LAYER 1 modes are detectable in observable artifacts — if no observation of either failure mode accumulates over 5+ surfacing invocations using the spec edit, the modes' weight in this comparison may have been over-tuned to the user's stated concern vs the operational reality).

- **The recommendation to apply /MVL2+'s edit (rather than /MVL+'s) re-opens** if the user explicitly indicates that forward-extension or user-language alignment is more important to them than the named-failure-mode protection. The weighting was committed from the user's question text; the user can re-weight by clarifying their priorities.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal                                                    
  and                                                                                                                      
  devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design                                             
  one with MVL+ and another is ran with MVL2+                                                                              
                                                                                                                           
  i want you to compare them and tell me which one did a btter job for given query, and why?
```

</details>
