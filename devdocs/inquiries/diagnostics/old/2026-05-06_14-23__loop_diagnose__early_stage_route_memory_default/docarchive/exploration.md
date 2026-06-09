# Exploration: Loop Diagnose - Early Stage Route Memory Default

## Mode And Entry Point

Mode: artifact exploration, with a diagnostic possibility scan.

Entry point: signal-first. The user supplied the suspected failure surface: the prior loop may have applied a mature optimized Route Memory Review trigger too early for Homegrown's early-stage, breakthrough-seeking phase.

## Required Artifact Reads

I read the required files from both inquiry folders, not just `finding.md`.

Prior inquiry:

- `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/_branch.md`
- `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/_state.md`
- `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/finding.md`
- `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/docarchive/exploration.md`
- `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/docarchive/sensemaking.md`
- `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/docarchive/decomposition.md`
- `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/docarchive/innovation.md`
- `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/docarchive/critique.md`

Corrected inquiry:

- `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/_branch.md`
- `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/_state.md`
- `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/finding.md`
- `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/docarchive/exploration.md`
- `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/docarchive/sensemaking.md`
- `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/docarchive/decomposition.md`
- `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/docarchive/innovation.md`
- `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/docarchive/critique.md`

Targeted active-doc check:

- Searched `homegrown/navigation` and `homegrown/protocols` for `navigation_phase`, `route_memory_policy`, `PastNavigationMemoryFile`, `early_stage`, `route_memory_status`, and `route_memory_review`.
- No matches were found in those active docs during this run. This suggests the policy concepts in the findings are still not materially present in the active Navigation docs under those names.

## Exploration Cycle 1 - Prior Inquiry Map

### Scan

The prior inquiry asked whether the "cheap Route-Memory Preflight plus full Route Memory Review" model was clean. Its branch goal explicitly focused on conceptual cleanliness: distinguish real Navigation need from artifact habit, decide whether "preflight vs full review" is a natural boundary, decide whether `route_memory_review.md` is needed, and avoid stale route resurrection.

The prior final finding made these key moves:

- "Route-Memory Preflight" should become `route_memory_status` classification inside Freshness Preflight or context intake.
- Full Route Memory Review should run only when status is `review_needed`.
- `review_needed` means relevant past Navigation memory has unresolved current disposition and stale or missing disposition could materially alter the new Navigation map.
- If materiality is uncertain and stale resurrection or route amnesia is plausible, choose `review_needed`.
- If full review runs, `route_memory_review.md` is mandatory.
- If full review does not run, no review file is created; status and reason are recorded in Navigation output or context-preparation telemetry.

### Signals Detected

1. The prior inquiry's dominant problem frame was cleanliness of operation boundaries.
2. The prior inquiry strongly resisted operation proliferation and no-op artifacts.
3. The prior inquiry treated the material-effect trigger as the clean current answer, not as a future mature optimization.
4. The prior inquiry did include a conservative uncertainty guardrail, but the guardrail stayed inside a judgment-heavy test: the runner still had to assess plausible materiality.
5. The prior Critique dimensions did not include project phase, calibration, breakthrough preservation, or early-stage robustness as first-class dimensions.

### Probe

The prior sensemaking explicitly listed the trigger as "material unresolved effect" and argued that relevance alone does not create a disposition problem. The prior innovation generated an always-scan contrarian option but rejected it as too expensive and too authoritative. The prior critique then ranked the scoped uncertainty rule below the core material-disposition trigger and warned that it should not become review-by-default.

This is not an incoherent answer. It is a coherent mature-policy answer optimized for clean boundaries, no-op artifact avoidance, and automation clarity.

### Frontier State

Frontier advancing. The likely weak point is not that the prior loop forgot explicit artifacts or route-memory risk. It saw both. The signal is that it did not ask whether the current project phase changes the trigger's burden of proof.

### Confidence Map Update

- Confirmed: prior loop read the Navigation cleanliness problem and answered it directly.
- Confirmed: prior loop preserved the artifact rule: full review writes `route_memory_review.md`.
- Confirmed: prior loop treated no-op review artifacts as bloat.
- Confirmed: prior loop contained a scoped uncertainty guardrail.
- Scanned: the prior loop's cost model emphasized avoiding over-review.
- Unknown: whether the user's phase priority was available to the prior loop at the time. The prior branch did not include early-stage breakthrough pressure.

## Exploration Cycle 2 - Corrected Inquiry Map

### Scan

The corrected inquiry's branch changed the question. It asked whether early-stage Homegrown should always run full Route Memory Review for robustness, even if slower and token-expensive, until the system can optimize its own mechanisms.

The corrected finding made these key moves:

- The prior `review_needed` trigger became the mature optimized policy, not the current best default.
- During early-stage discovery mode, durable Navigation runs should run full Route Memory Review by default whenever a `PastNavigationMemoryFile` exists.
- Literal always-full review was killed: no `PastNavigationMemoryFile` means no review object.
- Skips became narrow and explicit: no source, already-consumed current review, user-accepted thin/fast context, or non-durable disposable local run.
- Review-by-default gained anti-authority safeguards: old maps are evidence, not current truth.
- Review-by-default gained exit telemetry so the system can later return to a narrower material-effect trigger.

### Signals Detected

1. The corrected inquiry introduced `navigation_phase` as a load-bearing variable.
2. Robustness and breakthrough preservation became critical dimensions.
3. Cost control stayed present but became medium priority rather than dominant.
4. Full review was reframed as calibration data, not only safety overhead.
5. The material-effect trigger was not killed; it was relocated to stable optimized mode.
6. The corrected critique explicitly rejected the "latest trigger plus early-stage uncertainty" option because it preserved the old judgment bottleneck.

### Probe

The corrected sensemaking says the prior trigger asks the runner to judge materiality, and early-stage Homegrown may not be calibrated enough to make that judgment safely. It also says the latest finding collapsed phase into the general rule. The corrected innovation and critique then favor a source-gated early robust mode because it shifts the burden from "prove review is needed" to "prove review is safely unnecessary."

This corrected inquiry is comparative evidence, not ground truth. Its strongest diagnostic value is that it names what the prior loop did not: phase, calibration, breakthrough preservation, and a temporary robustness default with exit telemetry.

### Frontier State

Frontier stabilizing. The correction did not merely add "more caution." It changed the policy's default under a phase condition.

### Confidence Map Update

- Confirmed: corrected inquiry treats early-stage phase as structurally relevant.
- Confirmed: corrected inquiry preserves the prior artifact and anti-stale-memory concerns.
- Confirmed: corrected inquiry adds a calibration argument absent from the prior finding.
- Confirmed: corrected inquiry creates a temporary policy bridge to future optimization.
- Scanned: corrected inquiry may itself over-index on current user priority; it still needs evaluation gates.
- Unknown: exact threshold for leaving early-stage robust mode remains provisional.

## Exploration Cycle 3 - Active-Doc Surface And Failure Possibility Scan

### Scan

The active-doc search did not find the expected current policy terms in `homegrown/navigation` or `homegrown/protocols`: no `navigation_phase`, `route_memory_policy`, `PastNavigationMemoryFile`, `early_stage`, `route_memory_status`, or `route_memory_review` matches.

The current diagnostic branch asks whether the prior loop applied an optimized mature-system trigger too early. That suggests several possible failure surfaces:

1. Exploration failure: prior exploration did not scan for phase/context variables.
2. Sensemaking failure: prior sensemaking over-stabilized around cleanliness and artifact hygiene.
3. Decomposition failure: prior decomposition omitted a "phase definition / operating posture" piece.
4. Innovation failure: prior innovation generated always-review alternatives but did not develop a temporary early-stage robust mode as a serious candidate.
5. Critique failure: prior critique lacked dimensions for robustness, breakthrough support, calibration, and phase fit.
6. Loop framing failure: the branch question itself did not ask about early-stage robustness, so the loop may have optimized within the question it was given.
7. Context elicitation failure: the runner did not ask whether the project phase or user priority should override efficiency.

### Signals Detected

1. The strongest evidence points to mixed attribution, not a single discipline failure.
2. The prior branch question was narrower than the later correction. It asked for a cleaner rule; it did not mention early-stage phase or breakthrough priority.
3. The prior loop still had opportunities to detect phase as a hidden variable because it was reasoning about a system under active churn and future automation.
4. The corrected inquiry's strongest repairs appear in Sensemaking and Critique: phase anchors, robustness dimensions, and future-optimization telemetry.
5. Active docs lacking the new terms means maintenance candidates should likely affect Navigation/MVL framing or critique dimensions, not only final prose.

### Resolution Decision

Proceed to Sensemaking with mixed attribution as the initial map:

```text
The prior loop likely did not fail by misunderstanding Route Memory Review.
It likely failed by applying a clean stable-policy frame before asking whether the current early-stage phase should change the default cost/risk calibration.
```

### Frontier State

Frontier stable. The remaining work is not finding more artifacts. It is interpreting which failure hypotheses are strongest and what maintenance candidates are justified without overclaiming.

## Jump Scan

Opposite direction: what if the prior inquiry did not fail at all, because the later user correction introduced new information?

Evidence for that interpretation:

- The prior branch goal asked for conceptual cleanliness and a cleaner rule, not early-stage robustness.
- The prior output had a conservative uncertainty guardrail, so it did not entirely ignore stale-route risk.
- The corrected inquiry's human correction explicitly added a new project-phase claim: Homegrown is early-stage, needs breakthroughs, and should prefer robustness over speed/tokens.

Evidence against a full excuse:

- Navigation and Homegrown were already visibly changing through multiple route-memory discussions.
- The prior inquiry knew route-memory rules were unsettled and that stale resurrection/route amnesia were risks.
- A strong loop could have surfaced "this is a mature optimized trigger; if the current phase prioritizes robustness, use a stricter default."

Jump-scan result: attribution should not be "the prior discipline was wrong from first principles." The better diagnosis is "the prior loop produced a clean mature policy but failed to mark it as phase-sensitive and failed to preserve an early-stage robust default option."

## Convergence Check

Frontier stability: yes. The prior and corrected artifact sets have been read, and their key differences are stable.

Declining discovery rate: yes. Additional probes keep returning to the same difference: optimized material-effect trigger versus phase-sensitive source-gated robust default.

Bounded gaps: yes. Remaining gaps are attribution confidence and maintenance design, not missing artifact regions.

Exploration converged for Sensemaking.

## Territory Overview

The correction chain has six regions:

1. Prior mature-policy answer: clean status classification, material-effect trigger, no-op artifact avoidance.
2. Prior preserved safeguards: mandatory file when review runs, stale-resurrection guardrail, old maps not current truth.
3. Missing phase dimension: no first-class treatment of early-stage discovery mode.
4. Corrected robust policy: source-gated full review by default for durable early-stage Navigation.
5. Corrected safety additions: anti-authority safeguards and exit telemetry.
6. Implementation surface: active Navigation docs do not appear to contain the searched policy terms yet.

## Inventory

### Evidence Types

| Evidence | Prior Inquiry | Corrected Inquiry | Diagnostic Meaning |
| --- | --- | --- | --- |
| Branch question | Cleanliness and natural boundary | Early-stage robustness vs cost | The correction changed the problem frame. |
| Main trigger | Unresolved material effect | PastNavigationMemoryFile present in early-stage durable runs | Default burden shifted. |
| Artifact rule | File mandatory only if full review runs | Same | Artifact culture was not the missed point. |
| Cost model | Avoid no-op review bloat | Accept higher cost now, monitor exit | Cost weighting changed. |
| Risk model | Stale route resurrection plus bloat | Stale route, route amnesia, breakthrough loss, calibration | Risk set expanded. |
| Future policy | Monitor if no-op reviews or stale resurrection happen | Use telemetry to exit robust mode | Corrected loop made optimization evidence-producing. |

### Candidate Failure Hypotheses

| Candidate | Initial Confidence | Reason |
| --- | --- | --- |
| Phase blindness | high | Corrected inquiry directly repairs missing phase variable. |
| Premature optimization | high | Prior trigger is explicitly reclassified as mature optimized policy. |
| Calibration underweighting | high | Corrected inquiry treats review artifacts as calibration data; prior treated review mainly as cost/safety. |
| Breakthrough preservation underweighting | medium-high | Corrected critique made breakthrough support critical; prior critique omitted it. |
| Context elicitation gap | medium | The prior question did not include phase priority; runner could have surfaced it as assumption. |
| Exploration miss | medium | Prior exploration scanned docs/findings, but did not jump-scan project phase or early-stage failure modes. |
| Critique weighting miss | high | Prior critique dimensions lacked robustness/breakthrough/calibration/phase fit. |
| Innovation miss | medium-high | Prior generated contrarian always-review paths but did not develop temporary source-gated robust mode. |

## Signal Log

| Signal | Source | Status | Meaning |
| --- | --- | --- | --- |
| Prior goal centered conceptual cleanliness | Prior `_branch.md` | confirmed | Explains why output optimized cleanliness. |
| Prior trigger was material-effect `review_needed` | Prior `finding.md`, `critique.md` | confirmed | Mature trigger was current default. |
| Prior critique warned against review-by-default | Prior `critique.md` | confirmed | Cost/bloat and old-map authority were strong weights. |
| Corrected finding calls prior trigger mature optimized policy | Corrected `finding.md` | confirmed | Direct comparative evidence for premature optimization. |
| Corrected sensemaking says latest finding collapsed phase | Corrected `sensemaking.md` | confirmed | Strong evidence for phase blindness. |
| Corrected critique made robustness and breakthrough support critical | Corrected `critique.md` | confirmed | Strong evidence of dimension weighting shift. |
| Active docs lack searched policy terms | `rg` over `homegrown/navigation` and `homegrown/protocols` | confirmed absent for searched names | Maintenance surface likely still open. |

## Confidence Map

| Region | Confidence | Reason |
| --- | --- | --- |
| Prior artifacts fully available and read | confirmed | All required root and docarchive files were present and read. |
| Corrected artifacts fully available and read | confirmed | All required root and docarchive files were present and read. |
| Prior loop misunderstood artifact explicitness | low | It preserved mandatory review artifact output. |
| Prior loop produced mature optimized trigger | confirmed | Corrected finding explicitly reframes it that way, and prior artifacts support it. |
| Prior loop missed phase sensitivity | high | The phase variable appears in corrected branch, sensemaking, decomposition, innovation, and critique, but not prior. |
| Exact discipline root cause | medium/unknown | Evidence spans branch framing, Exploration, Sensemaking, Innovation, and Critique. |
| Need for source edits | medium | Active docs lack searched terms, but one correction chain alone should justify narrow hooks, not broad rewrites. |

## Frontier State

The exploration frontier is closed enough for the diagnostic purpose. Sensemaking should convert the artifact map into failure hypotheses while preserving uncertainty:

```text
Do not claim the prior loop failed because it ignored route memory.
Claim, if supported, that it treated the clean material-effect trigger as current policy instead of marking it as phase-sensitive and mature-optimized.
```

## Gaps And Recommendations

Sensemaking should test these questions:

1. Was the prior miss primarily a bad answer, or a good answer to an under-specified question?
2. Did the prior loop have enough evidence to surface phase sensitivity without the user's later correction?
3. Which failure surfaces are actionable: context elicitation, phase-sensitive critique dimensions, Navigation policy docs, or MVL+ framing?
4. What maintenance candidates can be proposed without broad fundamentals overreach from one correction chain?

