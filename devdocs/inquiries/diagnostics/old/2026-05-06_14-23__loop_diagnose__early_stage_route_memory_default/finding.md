---
status: active
diagnoses:
  - devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation/finding.md
compares_with:
  - devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/finding.md
uses_protocol:
  - homegrown/protocols/loop_diagnose.md
impacts:
  - homegrown/navigation/SKILL.md
  - homegrown/protocols/navigation_context_intake.md
  - homegrown/navigation/warmup/navigator-prior-map-overlay.md
---
# Finding: Loop Diagnose - Early Stage Route Memory Default

## Correction Chain Summary

**Prior inquiry:** `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation`

**Corrected inquiry:** `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review`

**Human correction:** The user said Homegrown is early-stage, needs breakthroughs, and should prefer robustness even if it costs more time and tokens. The user asked whether full Route Memory Review should run by default until the system can optimize its own mechanisms.

**What changed:** The prior inquiry made the narrow `review_needed` material-effect trigger the current rule. The corrected inquiry kept that trigger, but moved it to future stable optimized mode. For the current early-stage mode, it changed the default to full Route Memory Review when a `PastNavigationMemoryFile` exists and the Navigation run is durable, unless a narrow exception is recorded.

**What stayed stable:** Both inquiries preserve the rule that full Route Memory Review writes `route_memory_review.md`. Both keep old Navigation maps as historical evidence, not current truth. Both keep Route Memory Review separate from Navigation: review classifies past route memory; Navigation maps current possible routes.

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation`, the human correction, and the later improved inquiry at `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

Goal: identify evidence-backed failure hypotheses, confidence levels, affected discipline or runner stages, shortcoming types, maintenance candidates, and evaluation gates. Avoid pretending to know exact root cause when the evidence is weak.

## Finding Summary

- The prior loop did not mainly fail on Homegrown's explicit Markdown artifact culture. It already said that if full Route Memory Review runs, `route_memory_review.md` is mandatory.

- The prior loop's best-supported miss was phase-insensitive optimization. It produced a clean mature trigger and treated it as the current default, even though the mechanism was still uncalibrated.

- The prior loop underweighted calibration. Early Route Memory Reviews are not only cost; they generate evidence about stale routes, useful blockers, no-op reviews, and when the system can safely optimize later.

- The prior loop underweighted breakthrough preservation. The corrected inquiry made robustness and breakthrough support critical dimensions, while the prior critique focused more on conceptual cleanliness, trigger correctness, artifact fit, and avoiding no-op bloat.

- The failure is mixed attribution. It was not one isolated bad discipline. Branch framing did not include early-stage robustness, Sensemaking did not make phase a first-class anchor, Innovation did not preserve a temporary robust-mode candidate, and Critique lacked dimensions that would punish premature optimization.

- The strongest maintenance direction is a narrow phase-calibrated prevention bundle. Add phase/calibration checks for Navigation route-memory trigger policy, require explicit cost/risk priority assumptions when they matter, add relevant Critique dimensions, and keep broad MVL+ changes deferred until repeated diagnoses show the same pattern.

## Finding

Route Memory Review is a context-preparation operation for Navigation. It reads earlier Navigation memory and decides what the next Navigation map should do with that memory: carry it forward, retire it, keep it blocked, mark it as needing a check, or ignore it for the current question.

A `PastNavigationMemoryFile` means an existing file that records earlier Navigation routes, route states, blockers, stale routes, superseded routes, or route decisions. The corrected inquiry later used that name for the old route-memory source that triggers review in early-stage robust mode.

The prior inquiry answered a real question: how to keep Navigation clean without inventing an unnatural split between "big Navigation" and "bounded Navigation." Its answer was coherent. It said every Navigation run should classify route-memory status during context intake, and full Route Memory Review should run only when relevant old route memory has unresolved current disposition that could materially alter the new map.

That answer is best understood as a mature optimized policy. It assumes the runner can safely decide when old route memory is relevant, when disposition can be cheaply classified, and when missing disposition could materially alter the map.

The later correction exposed the missing assumption. Homegrown is still early-stage, the route-memory rules are still moving, and the user explicitly values robustness and breakthrough preservation over speed right now. In that phase, the runner may not be calibrated enough to safely apply a narrow material-effect trigger.

The corrected inquiry did not kill the mature trigger. It placed it later:

```text
early-stage discovery mode:
  durable Navigation + PastNavigationMemoryFile exists
  -> run full Route Memory Review by default

stable optimized mode:
  use the narrower material-effect review_needed trigger
```

That is the key diagnostic result. The prior loop produced the stable optimized rule too early and did not label it as phase-dependent.

## Failure Hypotheses

### Hypothesis 1: Phase-insensitive optimization

**Affected stage:** Mixed: loop framing, Sensemaking, Critique, and CONCLUDE.

**Shortcoming type:** A mature optimized trigger was promoted as the current default without checking whether the project phase supported it.

**Evidence from prior inquiry:** The prior finding says full Route Memory Review should run only when `review_needed`, and defines `review_needed` through relevant old route memory, unresolved disposition, and material effect. The prior critique ranks the "material-disposition trigger" as the load-bearing survivor.

**Evidence from human correction:** The user explicitly reframed the problem around Homegrown being early-stage, breakthrough-seeking, and willing to pay more tokens for robustness.

**Evidence from corrected inquiry:** The corrected finding says the prior `review_needed` trigger is now the mature optimized policy, not the best current default. The corrected sensemaking says the latest finding collapsed phase into the general rule.

**Confidence:** HIGH.

**Why not stronger:** The prior branch question asked for conceptual cleanliness and did not explicitly mention early-stage robustness. That makes part of the miss a framing gap, not pure discipline failure.

**Maintenance candidate:** Add a phase-calibration gate for Route Memory Review trigger policy.

**Evaluation gate:** In the next three Navigation route-memory or trigger-policy inquiries, the finding must state whether it assumes `early_stage_discovery` or `stable_optimized`. If that statement changes the recommended trigger even once, the gate is proving useful.

### Hypothesis 2: Calibration value was underweighted

**Affected stage:** Sensemaking, Innovation, and Critique.

**Shortcoming type:** Full review was treated mainly as cost and artifact-bloat risk unless materiality was already detected.

**Evidence from prior inquiry:** The prior inquiry repeatedly controls bloat by narrowing the trigger. It includes a conservative uncertainty guardrail, but the guardrail still requires the runner to judge whether stale resurrection or route amnesia is plausible.

**Evidence from human correction:** The user asked whether the system should spend more tokens now until it can optimize its own mechanisms later.

**Evidence from corrected inquiry:** The corrected sensemaking says early reviews create calibration artifacts. The corrected critique says exit telemetry is required because it is what lets robust mode become temporary rather than permanent.

**Confidence:** HIGH.

**Why not stronger:** The prior inquiry did include monitoring hooks. It was not blind to future refinement; it just did not treat review as a source of calibration data.

**Maintenance candidate:** Add review outcome telemetry to Route Memory Review outputs in early-stage robust mode.

**Evaluation gate:** After five full Route Memory Reviews, inspect how many changed Navigation input, caught stale routes, preserved useful blockers, produced no-op outcomes, or carried high cost.

### Hypothesis 3: Breakthrough preservation was not a first-class criterion

**Affected stage:** Critique, with upstream contribution from Sensemaking.

**Shortcoming type:** The prior evaluation dimensions did not include breakthrough support or preservation of deferred/blocked route seeds.

**Evidence from prior inquiry:** The prior critique dimensions were conceptual cleanliness, trigger correctness, artifact fit, boundary integrity, automation clarity, user alignment, and implementation tractability. Those are valid dimensions, but they do not explicitly test breakthrough preservation.

**Evidence from human correction:** The user said the project is early-stage and "desperate for breakthroughs."

**Evidence from corrected inquiry:** The corrected critique makes robustness and breakthrough support critical dimensions, while cost control is medium.

**Confidence:** HIGH.

**Why not stronger:** The prior inquiry did consider route amnesia and stale resurrection. The miss is not absence of all memory-risk thinking; it is the missing critical weight for breakthrough preservation.

**Maintenance candidate:** Add scoped Critique dimensions for Navigation memory and trigger-policy inquiries: phase fit, calibration value, breakthrough preservation, under-review cost, and over-review cost.

**Evaluation gate:** In the next relevant critique, these dimensions must be used only if the candidate choice depends on robustness, cost, trigger narrowness, or old-memory handling. If they are applied to unrelated critiques, the candidate is too broad.

### Hypothesis 4: Robust-but-expensive candidates were rejected too early

**Affected stage:** Innovation and Critique.

**Shortcoming type:** Review-heavy alternatives were tested under stable-cost assumptions instead of being reframed as temporary early-stage modes with exit criteria.

**Evidence from prior inquiry:** The prior innovation explored always scanning old maps and treated it as too expensive and too authoritative. The prior critique warned that uncertainty should not become review-by-default.

**Evidence from human correction:** The user explicitly said slower and more token-expensive work is acceptable right now if it improves robustness.

**Evidence from corrected inquiry:** The corrected innovation killed literal always-full review but preserved source-gated early robust mode. It added anti-authority safeguards and exit telemetry rather than killing the robust idea for cost.

**Confidence:** MEDIUM-HIGH.

**Why not stronger:** The prior branch did not ask for an early-stage policy, so Innovation had less reason to preserve a temporary robust mode.

**Maintenance candidate:** Add an Innovation guard: before killing a robust-but-expensive candidate, test whether it survives as a temporary early-stage mode with explicit exit telemetry.

**Evaluation gate:** The guard should trigger only when the candidate is killed primarily for cost or breadth but has strong robustness or calibration value. If it starts preserving every expensive option, it is failing.

### Hypothesis 5: Context elicitation did not surface the decisive priority

**Affected stage:** Loop framing and context elicitation.

**Shortcoming type:** The runner did not state or ask the cost/risk priority assumption before concluding a trigger policy.

**Evidence from prior inquiry:** The prior branch question focused on a clean Navigation rule and did not include the later early-stage robustness priority.

**Evidence from human correction:** The later correction changed the answer by adding a priority: robustness and breakthroughs over speed and token cost.

**Evidence from corrected inquiry:** The corrected inquiry's branch goal directly asks to weigh robustness, breakthrough-seeking, token/time cost, stale route resurrection risk, artifact bloat, and future self-optimization.

**Confidence:** MEDIUM.

**Why not stronger:** The runner usually should not ask extra questions when it can make reasonable assumptions, and the prior question was answerable as written. The safer claim is that it should have stated the mature/stable assumption.

**Maintenance candidate:** Add a context elicitation or assumption-recording hook for policy decisions where the answer materially depends on cost/risk priority.

**Evaluation gate:** Use the hook only when phase or priority cannot be inferred and would change the answer. If the hook asks during obvious cases, narrow it.

## Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
| --- | --- | --- | --- | --- |
| Loop framing / context elicitation | Phase and priority assumption not stated | medium | medium | Add cost/risk priority assumption hook |
| Exploration | Did not jump-scan project phase as a hidden variable | medium | medium | For policy triggers, scan for current phase and implementation maturity |
| Sensemaking | Phase and calibration not extracted as anchors | strong | high | Add phase-calibration gate |
| Innovation | Robust expensive option not reframed as temporary mode | medium | medium-high | Add temporary-mode guard |
| Critique | Missing phase, calibration, and breakthrough dimensions | strong | high | Add scoped dimensions for relevant critiques |
| CONCLUDE | No phase-assumption backstop | medium | medium | Add compact phase assumption to trigger-policy findings |

## Maintenance Candidates

### Candidate 1: Phase-Calibration Gate

**What should change:** Before accepting a narrow optimized trigger, the runner must identify whether the rule assumes early-stage discovery mode or stable optimized mode.

**Likely file or protocol:** `homegrown/protocols/navigation_context_intake.md` and the Navigation route-memory sections of `homegrown/navigation/SKILL.md`.

**Risk class:** Low to medium. The main risk is checklist bloat if the gate is vague.

**Expected benefit:** Prevents mature optimized triggers from being promoted as current defaults while the system is uncalibrated.

**Evaluation gate:** The next three route-memory trigger findings must state their phase assumption. If no recommendation is ever affected, keep the gate local rather than promoting it wider.

**Branch experiment:** Yes, if implemented beyond Navigation route-memory policy.

### Candidate 2: Navigation Route-Memory Phase Patch

**What should change:** If the project adopts the corrected early-stage policy, Navigation intake should carry fields such as `navigation_phase`, `route_memory_policy`, `PastNavigationMemoryFile` source presence, skip reason, review path, and review outcome telemetry.

**Likely file or protocol:** `homegrown/navigation/SKILL.md`, `homegrown/protocols/navigation_context_intake.md`, and `homegrown/navigation/warmup/navigator-prior-map-overlay.md`.

**Risk class:** Medium. This changes operational behavior and could add overhead if written too broadly.

**Expected benefit:** Makes the early-stage robust default executable instead of leaving it as finding-only guidance.

**Evaluation gate:** After five full Route Memory Reviews, inspect stale-route catches, preserved blockers, no-op reviews, map impact, and cost burden.

**Branch experiment:** Yes if the exact fields are still unstable.

### Candidate 3: Scoped Critique Dimension Addendum

**What should change:** For Navigation memory and policy-trigger critiques, include phase fit, calibration value, breakthrough preservation, under-review cost, and over-review cost.

**Likely file or protocol:** A relevant peripheral rule in the route-memory policy workflow, or a scoped note near the discipline prompt used for these Navigation policy inquiries. This should not become a universal Critique rule yet.

**Risk class:** Medium. Overuse would make Critique heavy and less problem-specific.

**Expected benefit:** Catches the exact dimension blindness visible in the prior inquiry.

**Evaluation gate:** The addendum should only appear when a candidate choice depends on trigger narrowness, old-memory risk, cost, or robustness. If it appears in unrelated critiques, it is over-scoped.

**Branch experiment:** Yes.

### Candidate 4: Innovation Temporary-Mode Guard

**What should change:** When Innovation kills a robust option for cost or breadth, it must test whether that option survives as a temporary early-stage mode with exit telemetry.

**Likely file or protocol:** A scoped instruction for Navigation memory or policy-trigger innovation runs. Do not add globally from this single example.

**Risk class:** Medium.

**Expected benefit:** Prevents "too expensive as permanent policy" from killing "correct as temporary robust mode."

**Evaluation gate:** Track whether the guard produces useful temporary policies or merely keeps expensive candidates alive.

**Branch experiment:** Yes.

### Candidate 5: Context Elicitation Or Assumption Hook

**What should change:** For cost/risk-sensitive policy answers, state the assumed priority. Ask only when the phase or priority cannot be inferred and would materially change the answer.

**Likely file or protocol:** MVL+ peripheral rules or a local Navigation policy-inquiry wrapper. Do not add as a broad core invariant yet.

**Risk class:** Low to medium.

**Expected benefit:** Prevents silent mature/stable assumptions when the user would choose robustness over efficiency.

**Evaluation gate:** The hook is successful if it prevents at least one later correction where the user says the answer optimized for the wrong priority.

**Branch experiment:** Yes before any broad MVL+ edit.

### Candidate 6: Finding Template Phase Assumption Backstop

**What should change:** Trigger-policy findings can include a compact phase or optimization assumption.

**Likely file or protocol:** `homegrown/protocols/conclude.md`, but only as a scoped optional addition for trigger-policy findings.

**Risk class:** Medium. CONCLUDE is downstream, so this can become paperwork without preventing reasoning errors.

**Expected benefit:** Exposes a missed phase assumption before the finding becomes durable.

**Evaluation gate:** Use only for trigger-policy or optimization-policy findings. If it appears everywhere, remove or narrow it.

**Branch experiment:** Yes.

### Candidate 7: Broad MVL+ Phase Invariant

**What should change:** Do not change now.

**Likely file or protocol:** `homegrown/MVL+/SKILL.md`, only if repeated future diagnostics show the same failure across domains.

**Risk class:** High.

**Expected benefit if revived:** A broad invariant could catch phase-insensitive optimization across the whole loop.

**Evaluation gate:** Reopen only after 5 to 10 LOOP_DIAGNOSE findings show recurring phase-insensitive optimization outside Navigation route-memory policy.

**Branch experiment:** Deferred.

## Next Actions

### MUST

- **What:** Treat the strongest current diagnosis as phase-insensitive optimization, not artifact-explicitness failure.
  **Who:** Future route-memory maintenance work.
  **Gate:** Before editing Navigation route-memory policy docs.
  **Why:** It keeps the fix pointed at phase/calibration and avoids solving the wrong problem.

- **What:** If applying the corrected early-stage policy, patch the Navigation route-memory intake surface with phase, source presence, explicit exceptions, anti-authority safeguards, and exit telemetry.
  **Who:** Navigation skill and context-intake docs.
  **Gate:** Before relying on source-present full Route Memory Review as normal Navigation behavior.
  **Why:** The corrected policy needs executable intake fields, not only a finding.

- **What:** Keep broad MVL+ changes deferred until multiple diagnoses show the same failure.
  **Who:** MVL+ maintainers.
  **Gate:** Reopen after 5 to 10 LOOP_DIAGNOSE findings with recurring phase-insensitive optimization.
  **Why:** One correction chain justifies narrow guardrails, not a broad loop rewrite.

### COULD

- **What:** Add a scoped Critique dimension addendum for Navigation memory policy inquiries.
  **Who:** The route-memory inquiry runner or a local discipline note.
  **Gate:** Next time a Navigation memory trigger policy is evaluated.
  **Why:** It directly targets the prior critique dimension gap.

- **What:** Add a compact phase-assumption backstop to trigger-policy findings.
  **Who:** CONCLUDE protocol, if scoped cleanly.
  **Gate:** After at least one more trigger-policy finding shows the same unstated assumption risk.
  **Why:** It can catch missed phase assumptions before a finding becomes durable guidance.

### DEFERRED

- **What:** Patch `homegrown/MVL+/SKILL.md` with a global phase-sensitivity invariant.
  **Gate:** Only after 5 to 10 diagnostic findings show this failure across unrelated topics.
  **Why (if revived):** It may become a general loop weakness, but current evidence is Navigation-specific.

- **What:** Create an index of all LOOP_DIAGNOSE maintenance themes.
  **Gate:** After at least five diagnostic findings exist.
  **Why (if revived):** It could reveal recurring fundamentals issues without overfitting one correction.

## Reasoning

The artifact-explicitness diagnosis was killed. The prior finding already required `route_memory_review.md` when full Route Memory Review runs. The corrected inquiry preserved that rule. So the repair is not "write more files."

The "no failure, only new information" defense was refined, not killed. The prior branch did not ask about early-stage robustness, and the user's later correction did add new information. But the prior loop had enough context to mark the material-effect trigger as calibrated/stable-mode dependent.

The "Critique only failed" diagnosis was killed. Critique missed dimensions, but those dimensions were not made strong enough upstream. The failure propagated from branch framing and Sensemaking into Innovation and Critique.

The phase-calibration gate survived because it attacks the strongest failure: the prior loop promoted a mature trigger as the current default.

The Navigation route-memory phase patch survived with scope constraints because this is the direct domain of the failure. It should not be turned into a broad MVL+ rewrite.

The Critique dimension addendum survived with scope constraints. It should apply to Navigation memory and policy-trigger inquiries where phase, robustness, calibration, or cost tradeoffs matter.

The Innovation temporary-mode guard survived with trigger constraints. It is useful only when a candidate is killed mainly for cost or breadth but has strong robustness or calibration value.

The broad MVL+ phase invariant was killed for now. It may become valid later, but one correction chain is not enough evidence for a global rule.

The monitoring-only response was refined. Monitoring is right for broad MVL+ changes, but too passive for Navigation-specific route-memory policy.

## Open Questions

### Monitoring

After five full Route Memory Reviews under early-stage robust mode, inspect:

- how many changed Navigation input;
- how many caught stale routes;
- how many preserved useful blockers or deferred routes;
- how many were no-op or mostly irrelevant;
- how many had high cost burden.

### Refinement Triggers

Reopen the early-stage robust default if full reviews repeatedly produce no route-memory decisions and cost burden is high.

Reopen the mature material-effect trigger if a skipped review causes stale route resurrection or route amnesia.

Reopen broad MVL+ phase-sensitivity only after 5 to 10 LOOP_DIAGNOSE findings show the same phase-insensitive optimization pattern outside this Navigation route-memory topic.

Reopen the Critique dimension addendum if it starts appearing in unrelated critiques and creating checklist bloat.

## Diagnostic Verdict

**Overall:** ACTIONABLE.

- **Best-supported diagnosis:** The prior loop applied a mature optimized trigger too early. The specific miss was phase-insensitive optimization with calibration and breakthrough-preservation underweighted.

- **Strongest maintenance candidate:** Add a phase-calibration gate for Navigation route-memory trigger policy, backed by source-gated early robust mode, explicit exceptions, anti-authority safeguards, and exit telemetry if the corrected policy is adopted.

- **Main uncertainty:** How much of the miss belongs to the prior loop versus the later human correction adding new phase/priority information. This is why broad MVL+ changes are deferred.

- **Recommended next step:** Patch the Navigation route-memory policy surface narrowly if the project is adopting early-stage robust mode; monitor future LOOP_DIAGNOSE findings before editing core MVL+ behavior.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

$MVL+

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation

corrected_path:
devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review

human_correction:
The user argued that Homegrown is early-stage, needs breakthroughs, and should prefer robustness over speed and token efficiency, asking whether full Route Memory Review should run by default until the system can optimize its own mechanisms.

optional_context:
The prior inquiry produced a mature clean trigger: full Route Memory Review only when relevant old route memory has unresolved material effect. The corrected inquiry preserved that as a future optimized policy but changed the current early-stage default to full review when a PastNavigationMemoryFile exists, with explicit exceptions and exit telemetry.

diagnostic_goal:
Identify whether the prior loop applied an optimized mature-system trigger too early for the current project phase. Diagnose what it missed about calibration, phase sensitivity, breakthrough preservation, and the user's stated robustness priority. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.

BE CAREFUL
```

</details>

