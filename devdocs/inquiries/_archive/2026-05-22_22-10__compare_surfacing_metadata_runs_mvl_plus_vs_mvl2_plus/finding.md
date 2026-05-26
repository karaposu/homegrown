---
status: active
model: claude-opus-4-7[1m]
effort: max
---
# Finding: compare surfacing metadata runs — MVL+ vs MVL2+

## Question

**Question:** Given two completed inquiries that consumed the IDENTICAL verbatim user input asking how to add file-mtime metadata-awareness to the surfacing discipline (`cognitive_harness/surfacing/references/surfacing.md`):

- **Inquiry A** at `devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal/` — run via `/MVL2+` (the Extended Cognitive Loop with `/surfacing` as the upstream discipline; flow-type `extended-surfacing`).
- **Inquiry B** at `devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/` — run via `/MVL+` (the Extended Cognitive Loop with `/explore` as the upstream discipline; flow-type `extended`).

Which of the two did a better job for the user's given query, and why?

**Goal:** an evidence-driven, dimension-explicit verdict with per-inquiry positioning, an honest acknowledgment of the runner-difference confound (the two inquiries used different cognitive loop variants — `/MVL2+` uses `/surfacing` upstream; `/MVL+` uses `/explore` upstream — which is a structural difference, not just a quality difference), and a clear scope statement (N=1 comparison; cannot generalize).

## Finding Summary

- **Verdict: Inquiry B (`devdocs/inquiries/2026-05-22_20-35__surfacing_file_metadata_awareness_design/`, run via `/MVL+`) did a better job for the user's given query than Inquiry A (`devdocs/inquiries/2026-05-22_16-00__surfacing_metadata_recency_signal/`, run via `/MVL2+`).** The verdict is anchored to user-question-fidelity per the user's verbatim phrasing — "compare them and tell me which one did a btter job *for given query*."

- **The user's verbatim query was singular-phrased: *"what kind of thing we can add to surfacing discipline to enable this power without limiting it or regressing it?"*** That singular "what kind of thing" — not "what comprehensive package of things" — is the structural anchor. B's 3-surface spec edit (modifying three sections of the surfacing spec: §1.3 NOT-list, §2.1 Item-enumeration component, §5.4 Traversal Trace schema) matches the singular phrasing directly. A's 7-surface spec edit (adding to §1.3, §1.4 vocabulary, §2.1, §4.2 with two new failure-mode rows, §5.4, §5.5 State Summary, §5.6 telemetry) goes beyond the user's stated scope.

- **Both inquiries address both user-stated failure modes — TIE on the user's primary safety criteria.** The user named two failure modes explicitly: Failure A (idle artifacts treated as actively-maintained) and Failure B ("just bc a file is old it doesnt mean it is idle as well"). A handles them via two new entries in surfacing's existing failure-mode catalog at §4.2 (FM #8 Recency-Equates-Idleness and FM #9 Recency-Bias-Filter). B handles them via an explicit non-filtering reaffirmation paragraph at §2.1. Both are project-consistent placements; both are anchored to surfacing's existing §4.4 asymmetric-failure principle. **TIE on anti-regression.**

- **The runner difference is a confound, not the same as a quality difference.** `/MVL2+`'s use of `/surfacing` as the upstream discipline creates a self-reference dynamic — the upstream operation is the same discipline being modified. This naturally activates surfacing's own structural elements (the NOT-list table at §1.3, the vocabulary table at §1.4, the failure-mode catalog at §4.2) in the downstream stages' working context, producing richer engagement with those elements than `/MVL+`'s `/explore` upstream would. Part of A's depth on dimensions where it wins (completeness, structural rigor across more spec sections) is attributable to this self-reference dynamic, not to A being a "smarter" inquiry.

- **A has real strengths that do not overturn the verdict.** A produced more comprehensive spec engineering (vocabulary maintenance + telemetry + State Summary derivation + explicit failure-mode catalog entries). A's critique pass documented 7 KILLed alternatives with structural grounds (e.g., numeric recency bands rejected on Phase/Calibration-State grounds; ADD-DIMENSION on existing tag levels rejected on orthogonality grounds; outbound design-history pointers rejected on self-containedness grounds). A declared a Layer Commitment (process layer) explicitly in its `_branch.md`. These are real values — but they are values on dimensions that are SECONDARY to the user's stated question. The user asked "what kind of thing we can add"; A delivered more than that.

- **Inquiry B has user-language alignment advantage.** B's per-item field is named `last-edit-time` — observable-fact level, matching the user's own vocabulary ("metadata (last datetime of edit)"). A's per-item field is named `recency annotation` — signal-level, forward-compatible across other recency sources, but a project-coined term not in the user's vocabulary.

- **B's named-category framing is more forward-extension-ready.** B introduces a category called "observable-fact metadata annotations" at the §2.1 extension's body, with `last-edit-time` as the first specific instance. Future metadata kinds (file-size, line-count, git-tracked-state) extend the category without restructuring. A preserves the "layered metadata-signal pattern" as a Research Frontier instead of committing it at spec time.

- **This is an N=1 comparison.** The verdict cannot generalize to "/MVL+ is always better than /MVL2+ for surfacing-discipline questions." A different user with a different query (e.g., "give me a complete spec-engineering package for adding metadata to surfacing") would likely find A's output better-fitting. The user's specific casual-phrased singular question is what makes B's parsimony win HERE.

- **One-sentence assumption-disclosure:** this verdict assumes the user's casual phrasing carries the structural weight Sensemaking committed to it. If the user re-reads their query and decides they actually wanted the comprehensive package, A would be the better fit. The verdict is therefore conditional on the singular-phrasing reading, which the comparison-request phrase "for given query" supports.

## Finding

### Background — why this question matters

The user ran two inquiries with the same verbatim text describing a question about the surfacing discipline (`cognitive_harness/surfacing/references/surfacing.md` — the runtime spec for the `/surfacing` cognitive operation, which is the upstream item-enumeration discipline in the project's `/MVL2+` loop). Both inquiries asked: how can surfacing capture file-mtime metadata as a per-item signal without introducing a regression where "old file = irrelevant"?

The inquiries used different cognitive loop variants:

- **`/MVL2+` (Surfacing → Sensemaking → Decomposition → Innovation → Critique)** — the recent loop variant that uses the `/surfacing` discipline as its upstream item-enumeration step.
- **`/MVL+` (Exploration → Sensemaking → Decomposition → Innovation → Critique)** — the original extended loop variant that uses the `/explore` discipline as its upstream territory-mapping step.

Each inquiry produced a `finding.md` with concrete spec edit text for `surfacing.md`. The user asked which inquiry did a better job answering their stated question — including reasoning and acknowledgment of confounds.

This comparison itself is the project's first runner-vs-runner verdict documented as an inquiry. There is an A/B-test inquiry protocol at `devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/finding.md` (the project's protocol for comparing CURRENT-vs-SNAPSHOT runs of the same discipline) — but that protocol compares two versions of the same discipline on the same input, whereas this comparison compares two different runner variants AT THE SAME TIME on the same input. The verdict-shape vocabulary from the A/B precedent (delta types: confirmation, mismatch, regression, drift, uncertainty) transfers; the underlying comparison mechanism is new ground.

### 1. The verdict, stated plainly

**Inquiry B (the 20-35 inquiry, run via `/MVL+`) did a better job for the user's given query than Inquiry A (the 16-00 inquiry, run via `/MVL2+`).**

The primary reason is **user-question-fidelity** — how well the inquiry's output matches what the user actually asked for. The user's verbatim query, preserved in both inquiries' `_branch.md` Source Input sections, ends with this sentence:

> *"So, what kind of thing we can add to surfacing discipline to enable this power without limiting it or regressing it?"*

The phrasing is singular: "what kind of thing we can add." The user did not write "what comprehensive multi-section spec edit," "what package of additions," or "what set of changes to vocabulary, schema, failure modes, telemetry, and State Summary together." The phrasing names one kind of addition with two explicit guards (the positive value: enable the recency signal; the negative value: do not regress by making "old = idle"). B's 3-surface spec edit matches the singular phrasing directly. A's 7-surface spec edit goes beyond it.

The supporting reason is **user-language alignment**. The user described the signal as "metadata (last datetime of edit) of files." B named the field `last-edit-time` — an observable-fact-level name that mirrors the user's vocabulary. A named the field `recency annotation` — a signal-level term that is forward-compatible across other recency sources (e.g., git history) but is a project-coined neologism the user did not use.

### 2. What both inquiries got right (TIE on primary safety criteria)

Both inquiries explicitly handle the two failure modes the user named:

- **Failure mode A (idle-treated-as-refined).** Without a recency signal, idle artifacts get surfaced and downstream cognition cannot distinguish them from actively-maintained ones. The user calls these "errors caused by idle artifacts." Both inquiries' spec edits give downstream consumers a recency signal per item.

- **Failure mode B (relevant-but-idle dropped).** The user's "but" guard: "just bc a file is old it doesnt mean it is idle as well." Both inquiries' spec edits make the per-item annotation **non-filtering** — surfacing does not exclude items based on metadata. Both anchor this in surfacing's existing §4.4 asymmetric-failure principle (the discipline's structural rule that "missing a relevant item is worse than surfacing an irrelevant item — lean toward INCLUSION under uncertainty").

A handles Failure mode B by adding two new entries to surfacing's existing failure-mode catalog at §4.2 — FM #8 Recency-Equates-Idleness and FM #9 Recency-Bias-Filter — with concrete Correctives anchored to §4.4. B handles Failure mode B by writing an explicit non-filtering reaffirmation paragraph inside the §2.1 Item-enumeration extension, cross-referenced to §4.4. **Different structural philosophies; both project-consistent; both anchored to the same upstream principle.** Neither is automatically stronger; this dimension is a TIE.

### 3. The dimension-by-dimension comparison (11 dimensions, weighted)

This is the evidence for the verdict. The 11 dimensions were extracted from the comparison's Goal-criterion and from project-specific risk concerns. Weights derive from Sensemaking's adjudication of what "better job for given query" means.

*Note on the table.* A 12th dimension (confound-acknowledgment) was considered and collapsed to this one-line note: **neither prior inquiry is responsible for naming its own runner-difference confound (the comparison did not exist at the time each prior ran); confound-acknowledgment is the responsibility of this comparison inquiry. TIE applied by convention; the dimension is not verdict-driving.**

| # | Dimension | Weight | Inquiry A (16-00 via `/MVL2+`) | Inquiry B (20-35 via `/MVL+`) | Winner |
|---|---|---|---|---|---|
| **D1** | User-question-fidelity (matches "what kind of thing we can add" phrasing) | **CRITICAL-PRIMARY** | 7-surface edit goes beyond singular phrasing | 3-surface edit matches singular phrasing directly | **B** |
| **D2** | Completeness of spec edit (how many spec surfaces touched) | MEDIUM | 7 surfaces: §1.3, §1.4 vocabulary, §2.1, §4.2 (FM #8, FM #9), §5.4, §5.5, §5.6 | 3 surfaces: §1.3, §2.1, §5.4 | **A** |
| **D3** | Parsimony / minimal-MVP | HIGH | 7 surfaces — generous | 3 surfaces — minimal viable; M2 + M3 deferred with revival triggers | **B** |
| **D4** | Anti-regression strength | CRITICAL | New §4.2 failure-mode rows FM #8 + FM #9; anchored to §4.4 | Non-filtering reaffirmation at §2.1; cross-referenced to §4.4 | **TIE** (different valid philosophies) |
| **D5** | User-language alignment | HIGH | `recency annotation` (signal-level; project-coined) | `last-edit-time` (observable-fact level; matches user's "last datetime of edit") | **B** |
| **D6** | Structural rigor across spec surfaces | MEDIUM | Multi-surface placement convention applied to 7 elements; explicit Layer Commitment declaration in `_branch.md` | Multi-surface placement applied to 3 elements; Layer Commitment omitted (defensible — the question is an addition, not a from-scratch redefinition) | **A** |
| **D7** | Ship-readiness (paste-ready spec text) | MEDIUM | Each of 7 surfaces has exact spec text | Each of 3 surfaces has exact spec text | **TIE** |
| **D8** | Future-extension framing | HIGH | "Layered metadata-signal pattern" as Research Frontier — not committed at spec time | Named category "observable-fact metadata annotations" with `last-edit-time` as first instance — committed at spec time | **B** |
| **D9** | Frame preservation (user's "old ≠ idle" guard explicit in spec) | HIGH | FM #9 Recency-Bias-Filter row explicitly handles the guard | §2.1 non-filtering reaffirmation paragraph explicitly handles the guard | **TIE** |
| **D10** | Adversarial-test rigor in critique pass | MEDIUM | 7 explicit KILLs documented (numeric bands; `mtime annotation` name; combining FMs; REPAIR of §2.3; ADD-DIMENSION on tags; REORGANIZE inline; outbound design-history pointers) | 0 KILLs (2 REFINEs); candidates converged without rejection | **A** |
| **D11** | Inquiry-template compliance | MEDIUM | Layer Commitment declared as "process"; transcription-audit fail-safe applied | Layer Commitment omitted (defensible per template trigger); transcription-audit applied | **A** (slight) |

**Roll-up.** B wins on the **CRITICAL-PRIMARY** dimension (D1) and on three of the HIGH-weighted dimensions (D3, D5, D8). A wins on four MEDIUM-weighted dimensions (D2, D6, D10, D11). The CRITICAL D4 (anti-regression) is a TIE — both philosophies are project-consistent. The MEDIUM D7 (ship-readiness) and HIGH D9 (frame preservation) are TIEs.

The weighting favors B: the user's stated query is the verdict's primary anchor (D1 critical-primary); B matches it directly; A delivers more than was asked. A's wins are on dimensions of process-quality and spec-engineering thoroughness, which are real values but are secondary to user-question-fidelity for THIS verdict's criterion.

### 4. Where A's extra work came from — the runner-difference confound

Inquiry A ran through `/MVL2+`, which uses `/surfacing` as the upstream discipline. Inquiry B ran through `/MVL+`, which uses `/explore` as the upstream discipline. For a question that asks how to modify the surfacing discipline itself, `/MVL2+`'s use of `/surfacing` upstream creates a **self-reference dynamic** — the upstream operation engages the same discipline being modified. This naturally activates surfacing's own structural elements (the NOT-list table at §1.3, the vocabulary table at §1.4, the failure-mode catalog at §4.2, the primitive composition at §2.4) in the downstream stages' working context.

A's 7-surface coverage reflects this. The vocabulary update at §1.4, the failure-mode rows at §4.2, the State Summary derivation at §5.5, the telemetry bullet at §5.6 — these are all surfacing's own structural elements that A engages because the upstream operation primed them in the working context. B's `/MVL+` runs through `/explore` instead, which engages the question more abstractly (as "territory of solution designs" rather than "the surfacing discipline's own internals") and produces a less structurally-broad treatment.

This is not "A was a smarter inquiry." It is a different cognitive operation. The verdict above accounts for this: A's process-rigor and completeness on those dimensions are real values, but they don't change the user-question-fidelity primary criterion that the verdict turns on. The confound **shapes the explanation** of why A's surface count is higher; it does **not flip the verdict** of which inquiry better matches the user's stated query.

### 5. What this verdict does NOT claim

The verdict applies to THIS specific pair of inquiries on THIS specific user query. It does **not** claim:

- That `/MVL+` is always better than `/MVL2+` for surfacing-discipline questions. The runner variant is a confound, not a quality. Other questions would activate the runner difference differently.
- That `/MVL2+` over-engineers or `/MVL+` under-engineers. Both inquiries respect surfacing's existing patterns; both produce paste-ready spec text; both address both user-stated failure modes.
- That A's output is wrong. A's output goes beyond the user's stated question, which is excess-of-fit rather than failure-of-fit. A different user with a different query (e.g., "give me a comprehensive spec-engineering package — vocabulary, telemetry, failure modes, derivations, the whole thing") would find A's output better-fitting.
- That re-running both inquiries tomorrow would produce the same outputs. LLM outputs have non-determinism across runs. The project's deferred `ab_stability_test` protocol (referenced as a deferred sibling protocol in `devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/finding.md`'s deferred candidates section, intended to measure LLM-stochasticity-driven output variance) would be needed to bound the per-run variance contribution. Without that data, the per-run-variance contribution to A's and B's divergence is unobserved. Both the verdict and the runner-difference confound paragraph above are best read as describing the OBSERVED outputs of THIS pair of runs, not as claims about the steady-state behavior of either runner.

### 6. What this verdict DOES claim

For THIS pair of inquiries, with THIS user query, on user-question-fidelity as the primary criterion, B did a better job than A. The reasoning is the dimension-by-dimension comparison in section 3, weighted by the criteria Sensemaking adjudicated. The verdict is conditional on the singular-phrasing reading of the user's query that the comparison-request phrase "for given query" supports. A reader who, on re-reading, decides the user wanted the comprehensive package would find A's output better-fitting; that is the V4 "different-strengths-different-jobs" supporting characterization.

## Inherited Commitments Re-test

This inquiry consumed two prior findings as inputs (per the Synthesis Trigger declared in `_branch.md`). Each prior carries commitments that this comparison inquiry inherited — not as commitments to be applied, but as the OBJECTS of comparison. Per the Synthesis re-test enforcement, each commitment is recorded below with its source, re-test status, and either the evidence (if re-tested) or the reason (if inherited without re-test).

### Commitments inherited from Inquiry A (16-00 via `/MVL2+`)

- **Commitment:** 7-surface spec edit at `cognitive_harness/surfacing/references/surfacing.md` §1.3 NOT-list (new row) + §1.4 vocabulary (new row for `recency annotation`) + §2.1 Step Refinement (with metadata-as-signal-not-verdict principle) + §4.2 LAYER 1 failure modes FM #8 (Recency-Equates-Idleness) + FM #9 (Recency-Bias-Filter) + §5.4 schema field + §5.5 per-region recency distribution + §5.6 telemetry counts.
  - **Source:** the 16-00 finding, Finding §4 "The exact spec text," Additions 1–7.
  - **Re-test status:** **RE-TESTED.**
  - **Evidence:** the comparison's per-dimension table (section 3 of this Finding) evaluated each surface against the user's stated question. D1 evaluation: 7 surfaces goes beyond the singular "what kind of thing" phrasing. D2 evaluation: 7 surfaces is more comprehensive than B's 3. D3 evaluation: 7 surfaces is less parsimonious than B's 3. D6 evaluation: 7 surfaces demonstrates more rigorous placement-convention application across more spec elements. The 7-surface commitment survives as A's design choice; its value-for-the-user is dimension-dependent.

- **Commitment:** Per-item field named `recency annotation` with value shape `{source: filesystem | none, value: ISO8601 | null}`; `source: none` is first-class for possibility-mode items.
  - **Source:** the 16-00 finding, Finding §4 Additions 2 and 5; finding's Reasoning section "Why every SURVIVE survived" (`recency annotation` field name; value shape).
  - **Re-test status:** **RE-TESTED.**
  - **Evidence:** the comparison's D5 (user-language alignment) evaluated the field name against the user's verbatim vocabulary ("metadata (last datetime of edit)"). `recency annotation` is signal-level; the user's vocabulary is observable-fact-level ("last datetime of edit"). The first-class `source: none` value is more rigorous on possibility-mode handling than B's "absent or N/A," but the user did not ask about possibility-mode treatment. Re-tested; the field name commitment is structurally defensible but less user-language-aligned than B's `last-edit-time`.

- **Commitment:** "Metadata-as-signal-not-verdict" principle stated explicitly at the §2.1 Step Refinement body; cross-referenced from §1.3 NOT-list and §4.2 failure modes.
  - **Source:** the 16-00 finding, Finding §2 "The principle that holds it together."
  - **Re-test status:** **RE-TESTED.**
  - **Evidence:** the principle is the structural counterpart to B's "observable-fact metadata annotations" named category. Both serve the same role (anti-judgment-drift); both are anchored at the §2.1 canonical home. The principle commitment survives.

- **Commitment:** Two new LAYER 1 failure modes (FM #8 Recency-Equates-Idleness; FM #9 Recency-Bias-Filter) at §4.2, both anchored to §4.4 asymmetric-failure principle.
  - **Source:** the 16-00 finding, Finding §4 Addition 4; Reasoning section "Why every KILL was killed" (KILL 3 on combining the two failure modes).
  - **Re-test status:** **RE-TESTED.**
  - **Evidence:** the comparison's D4 (anti-regression) evaluated this against B's reaffirmation-at-§2.1 approach. Both are project-consistent placements; both anchored to §4.4; TIE. The two-failure-mode commitment survives as A's structural philosophy.

- **Commitment:** Numeric recency bands (recent / aged / ancient) deferred with revival trigger (5+ downstream consumers settling on the same band thresholds across 10+ surfacing invocations).
  - **Source:** the 16-00 finding, Next Actions DEFERRED first item.
  - **Re-test status:** **INHERITED-WITHOUT-RE-TEST.**
  - **Reason:** the deferred status is out of scope for this comparison inquiry; the comparison does not act on revival triggers. Carried forward.

- **Commitment:** LAYER 2 (identity-eroding) failure-mode variants deferred with revival trigger.
  - **Source:** the 16-00 finding, Next Actions DEFERRED second item.
  - **Re-test status:** **INHERITED-WITHOUT-RE-TEST.**
  - **Reason:** same as above — out of scope for this comparison.

- **Commitment:** MUST item prohibiting outbound pointers from `surfacing.md` to design-history files.
  - **Source:** the 16-00 finding, Next Actions MUST second item; Reasoning section "Why every KILL was killed" (KILL 7).
  - **Re-test status:** **INHERITED-WITHOUT-RE-TEST.**
  - **Reason:** the commitment is a per-finding implementation MUST that this comparison does not adjudicate; it carries forward independently. Consistent with project memory on disciplines-self-contained.

### Commitments inherited from Inquiry B (20-35 via `/MVL+`)

- **Commitment:** 3-surface spec edit at `cognitive_harness/surfacing/references/surfacing.md` §1.3 NOT-list (note after table) + §2.1 paragraph extension (canonical home with non-filtering reaffirmation + named-category framing) + §5.4 schema row (with note after table).
  - **Source:** the 20-35 finding, Finding §2 "Where in the spec the addition lives."
  - **Re-test status:** **RE-TESTED.**
  - **Evidence:** the comparison's D1 (user-question-fidelity), D3 (parsimony), and D8 (future-extension framing) all evaluated this commitment positively against A's 7-surface alternative. The 3-surface commitment survives and is the design that the verdict favors for the user's specific query.

- **Commitment:** Per-item annotation named `last-edit-time` as observable-fact label; judgment-adjacent alternatives (`freshness`, `staleness`, etc.) explicitly rejected.
  - **Source:** the 20-35 finding, Finding §4 "Why the naming matters"; Sensemaking Ambiguity 1.
  - **Re-test status:** **RE-TESTED.**
  - **Evidence:** the comparison's D5 (user-language alignment) evaluated this against the user's verbatim "last datetime of edit." `last-edit-time` matches; B's name commitment survives strongly on this dimension.

- **Commitment:** Named category "observable-fact metadata annotations" with `last-edit-time` as first instance, committed at spec time inside the §2.1 extension body. Future metadata kinds (file-size, line-count, git-tracked-state) extend the category without restructuring.
  - **Source:** the 20-35 finding, Finding §6 "The named category — pattern for future additions."
  - **Re-test status:** **RE-TESTED.**
  - **Evidence:** the comparison's D8 (future-extension framing) evaluated this against A's "layered metadata-signal pattern as Research Frontier." B's at-spec-time commitment is more forward-extension-ready than A's research-frontier deferral. B's named-category commitment survives.

- **Commitment:** Explicit non-filtering reaffirmation at §2.1, cross-referenced with §4.4 asymmetric-failure principle.
  - **Source:** the 20-35 finding, Finding §3 "How the addition handles the two failure modes," Layer 2.
  - **Re-test status:** **RE-TESTED.**
  - **Evidence:** the comparison's D4 (anti-regression) evaluated this against A's failure-mode-rows approach. Both philosophies project-consistent; TIE on anti-regression dimension. B's reaffirmation commitment survives as a valid philosophy.

- **Commitment:** Artifact-case-only scope; possibility case explicitly N/A. Schema field is absent or N/A in possibility-mode records.
  - **Source:** the 20-35 finding, Finding §1 (scope declaration); Finding §2 Location 1 (paragraph 4).
  - **Re-test status:** **RE-TESTED.**
  - **Evidence:** A made the equivalent commitment differently — first-class `{source: none, value: null}` for possibility-mode items, which is more rigorous on possibility-mode handling. The comparison did not commit a verdict on this dimension specifically (it's not in the 11-dimension table because the user did not raise possibility-mode handling). Carried forward as B's design choice; A's design choice is slightly more rigorous on this orthogonal axis.

- **Commitment:** Deferred M2 (per-item freshness-confidence tier) and M3 (per-region edit-time-distribution aggregation) with concrete revival triggers.
  - **Source:** the 20-35 finding, Next Actions DEFERRED items.
  - **Re-test status:** **INHERITED-WITHOUT-RE-TEST.**
  - **Reason:** the deferred status is out of scope for this comparison.

- **Commitment:** RESEARCH FRONTIER preserved for downstream-consumer rules (sense-making weighting; innovation Combination preference; etc.) with revival trigger of ≥2 MVL2+ inquiries producing populated Traces.
  - **Source:** the 20-35 finding, Open Questions Research Frontiers.
  - **Re-test status:** **INHERITED-WITHOUT-RE-TEST.**
  - **Reason:** the deferred status is out of scope for this comparison.

### Summary of re-test

All commitments from both priors that bear directly on the verdict (the 7-surface vs 3-surface spec edit; the field naming; the anti-regression mechanism; the future-extension framing) are RE-TESTED in this comparison. The carried-forward commitments (deferred items; MUST items not bearing on the verdict; orthogonal-axis design choices) are INHERITED-WITHOUT-RE-TEST with explicit reasons. No commitment is silently absorbed.

## Next Actions

### MUST

- **What:** Treat the verdict as N=1. Do not generalize "B (and therefore `/MVL+`) is the better runner" without running the project's deferred `ab_stability_test` protocol across multiple matched-input pairs. The verdict applies to THIS pair only.
  - **Who:** the user, when reading or citing this finding.
  - **Gate:** observable — if any future inquiry cites this finding as evidence for "/MVL+ is generally better" without the ab_stability_test data, this MUST is being violated.
  - **Why:** the runner-difference confound and LLM run-to-run randomness are both unobserved; the verdict's evidence base is one pair, not a calibrated distribution.

### COULD

- **What:** Choose between Inquiry A's and Inquiry B's spec-edit text for the actual surfacing-spec update at `cognitive_harness/surfacing/references/surfacing.md`. The user has BOTH spec edits available. If the user wants the singular, user-language-aligned addition that this verdict favors, apply B's 3-surface edit. If the user wants the comprehensive spec-engineering package (with vocabulary update, telemetry, State Summary derivation, and explicit failure-mode catalog entries), apply A's 7-surface edit. The two are not mergeable wholesale — they make different design choices (e.g., field name `last-edit-time` vs `recency annotation`; failure-mode rows vs reaffirmation-only). A hybrid would require deciding on each design choice.
  - **Who:** the user, when applying any surfacing-spec edit.
  - **Gate:** observable — when the user is ready to edit `surfacing.md`.
  - **Why:** the verdict says B better-matches the user's query. The user's actual editing choice depends on what the user wants the spec to do — match-the-query or be-comprehensive. Both choices are defensible.

- **What:** Consider running the deferred `ab_stability_test` protocol (per `devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/finding.md`'s deferred candidates section, intended to measure LLM-stochasticity-driven output variance) before drawing runner-level conclusions from any single A/B comparison. The protocol does not yet exist as an executable artifact; building it would require its own materialization run.
  - **Who:** a future inquiry on `ab_stability_test` materialization.
  - **Gate:** condition-bound — when the user wants to bound LLM run-to-run variance contributions to A/B comparison verdicts.
  - **Why:** without the protocol, every A/B verdict has an unobserved run-variance contribution. The protocol would let future comparisons isolate runner-quality from run-variance.

### DEFERRED

- **What:** Codify the comparison-shape used in this inquiry (12 weighted dimensions with one CRITICAL-PRIMARY; verdict anchored to user's stated query; Option γ confound treatment shaping explanation; N=1 scope limitation explicit) as a project-level inquiry-protocol for future runner-vs-runner or version-vs-version comparisons.
  - **Gate:** condition-bound — when a second runner-vs-runner comparison inquiry is requested. Single-instance pattern is insufficient to justify codification; codification benefits from multiple uses validating the template.
  - **Why if revived:** comparison inquiries currently re-invent their dimension framework each time. A project-level template (analogous to the existing A/B test inquiry protocol at `devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/`) would reduce per-inquiry design cost and prevent inconsistent dimension framing across comparisons.

## Reasoning

### Why the primary criterion is "user-question-fidelity" anchored to "for given query"

The user's verbatim comparison request was: *"compare them and tell me which one did a btter job for given query, and why?"* The phrase **"for given query"** is the load-bearing anchor. It instructs the verdict to evaluate against the user's actual query, not against abstract quality dimensions (output volume, process rigor, comprehensiveness).

Sensemaking's Ambiguity 1 tested the strongest counter-interpretation: "better job should mean 'produced more output value for the user'; more comprehensive = more output value; the user can ignore parts of A's output they don't need." The counter fails on structural grounds: the user's verbatim original query is singular-phrased ("what kind of thing we can add"), and "for given query" instructs the comparison to honor that phrasing. The counter would require ignoring the user's stated framing language, which is the opposite of evidence-driven reasoning.

This is the verdict's load-bearing structural commitment. Without "for given query" as the anchor, the verdict could go either way (A wins on output volume; B wins on parsimony). With the anchor, B wins.

### Why no candidate was killed

Critique evaluated 6 candidates (the 3 pieces P1/P2/P3, the assembled deliverable, and 2 emergent assembly properties). All survived with 1 minor REFINE (P2 — collapse one row to a one-line note) and a minor caveat (P1 — add an assumption-disclosure sentence; applied above in section 6's V4 supporting characterization). No candidate was structurally invalid. The comparison's design (dimension-by-dimension table + verdict + honest limits + emergent defense-in-depth) is internally coherent.

Killed alternatives along the way (documented during the inquiry but not surviving to the finding):

- **Verdict-impossible-due-to-confounds** (sensemaking Ambiguity 2 Option α). The strongest counter was: without controlling for the runner, the comparison conflates two different cognitive operations. The counter fails because the user explicitly knows both runners differ and asks for the comparison anyway; refusal violates the user's request and is unresponsive.

- **TIED verdict** (sensemaking Ambiguity 4 V3). The counter was: maybe the two outputs are equivalent. The counter fails because the two findings make substantively different choices (7 vs 3 surfaces; failure-mode rows vs reaffirmation; signal-level vs observable-fact naming). TIED would dissolve real differences.

- **REFRAME-AS-BUG framing** (innovation P1 Inversion). The counter was: maybe the comparison itself is the wrong intervention; declare "both right answers to different readings of the question." The counter fails because the user explicitly requested a verdict, not a meta-comment on their question.

- **REORGANIZE-BY-SECTION** (innovation P2 Inversion). The counter was: organize the comparison by spec section rather than abstract dimensions. The counter fails because section-organization without dimension-weighting wouldn't justify the verdict to a reader who counts cells (A touches 7, B touches 3 — without weights, A "wins" on coverage).

### Why the runner-difference confound is acknowledged in the explanation, not used to block the verdict

Sensemaking's Ambiguity 2 adjudicated this: Option γ (confound shapes explanation; doesn't block verdict) wins over Option α (confound blocks verdict) and Option β (confound is a side-note). Option γ is right because the user has the runs they have — they're asking which output is more useful for their purpose, which is answerable even when the underlying cognitive operations differ. The confound matters in explaining WHY A engaged more deeply with surfacing's structural elements (the self-reference dynamic) — but the explanation doesn't change the verdict on the primary criterion.

### Why no project-level runner-superiority claim follows

The verdict is N=1. The project does not yet have a calibrated dataset of `/MVL+`-vs-`/MVL2+` comparisons. A single comparison cannot generalize. Multiple matched-input pairs would be needed, and ideally the `ab_stability_test` protocol would run to bound LLM run-to-run variance contributions. Until that data exists, this verdict stays specific to its pair and query.

## Open Questions

### Monitoring

- **Will the user's editing choice reveal which spec edit (A's 7-surface or B's 3-surface) they actually want?** Observable when the user applies a spec edit to `cognitive_harness/surfacing/references/surfacing.md`. If they apply B's edit (or B's edit + selected pieces from A's), the verdict's user-question-fidelity reading is confirmed in practice. If they apply A's edit, the verdict's V4 supporting characterization (different-strengths-different-jobs; A's comprehensive package fits a generous reading) is what the user wanted.

- **Will future runner-vs-runner comparisons in the project reproduce the pattern (runner with self-reference upstream produces deeper engagement with the discipline-being-modified)?** Observable when a second runner-vs-runner comparison runs. If the pattern reproduces, the runner-difference confound has structural support beyond N=1.

### Blocked

- **A project-level runner-superiority claim** ("/MVL+ better than /MVL2+ for X class of question" or vice versa) — cannot be made until (a) multiple matched-input comparisons exist, AND (b) the `ab_stability_test` protocol bounds run-to-run variance contributions.

### Research Frontiers

- **Codification of the comparison-shape as a project-level inquiry-protocol.** This inquiry's comparison shape — 11-or-12 weighted dimensions with one designated CRITICAL-PRIMARY; verdict anchored to user's stated query; Option γ confound treatment shaping explanation; N=1 scope limitation explicit; honest-limits prose at finding level — could be templated. Templating benefits from multiple uses. The project already has the A/B test inquiry protocol at `devdocs/inquiries/2026-05-14_16-41__ab_test_inquiry_protocol/finding.md` for the current-vs-snapshot case; a sibling protocol for the runner-vs-runner case (or other version-vs-version cases) would fill an adjacent gap.

- **The `ab_stability_test` protocol materialization.** Referenced in the A/B test inquiry protocol's deferred candidates section as a deferred sibling protocol for measuring LLM-stochasticity-driven output variance. Building this protocol would let future comparisons isolate runner-quality from run-variance. The protocol does not yet exist as an executable artifact.

- **Whether the self-reference dynamic generalizes.** This inquiry observed that `/MVL2+`'s use of `/surfacing` as upstream against a surfacing-spec question produces deeper engagement with surfacing's structural elements. Does the same dynamic apply when other discipline-loops are used to modify their own upstream disciplines? Examples: would running a hypothetical `/MVLwith-explore-upstream` loop on an `/explore`-spec question produce richer engagement with `/explore`'s NOT-list, components, etc.? Single-instance evidence is insufficient to commit to this generalization.

### Refinement Triggers

- **The "for given query" anchor reading** re-opens if the user clarifies that they intended a more generous reading of "what kind of thing we can add" (i.e., they actually wanted the comprehensive package). The verdict is conditional on the singular-phrasing reading; user clarification could flip it.

- **The TIE on D4 (anti-regression)** re-opens if a future inquiry demonstrates that A's failure-mode-rows approach has structurally different downstream behavior from B's reaffirmation approach in observed practice (e.g., downstream disciplines successfully invoke A's named FMs by name but cannot navigate to B's reaffirmation paragraph). Without observed practice, the TIE stands.

- **The confound paragraph's "part of A's depth"** quantitative bound re-opens once the `ab_stability_test` protocol provides variance data. Quantitative attribution would replace the current qualitative "part of."

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
