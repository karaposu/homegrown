# Sensemaking: Navigation Correction Chain Failure Inventory

## User Input

`devdocs/inquiries/2026-05-06_13-19__navigation_correction_chain_failure_inventory/_branch.md`

## SV1 - Baseline Understanding

The user wants a failure inventory, not another Navigation policy answer.

Initial interpretation:

```text
The listed inquiries form a correction chain. The task is to identify where earlier loop outputs were weak, misleading, overcorrected, or under-tested, then prepare loop_diagnose prompts for later diagnosis.
```

The main caution is that a later correction does not automatically prove the earlier inquiry "failed." Some changes are true failures, some are healthy refinements, and some are phase changes.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- All listed inquiry folders and archived discipline outputs were read fully before this discipline.
- The user needs an evidence-backed list for later `homegrown/protocols/loop_diagnose.md`.
- Do not infer exact root cause or discipline failure without a correction-chain diagnostic run.
- Treat later corrected inquiries as comparative evidence, not absolute ground truth.
- Include naming failures, trigger-boundary failures, artifact-necessity reversals, and index reversal.
- Ready prompts must include `prior_path`, `corrected_path`, `human_correction`, optional context, and diagnostic goal.

### Key Insights

- The chain's recurring pattern is boundary confusion: operation vs artifact, trigger vs heuristic, status vs review, source discovery vs interpretation.
- The user repeatedly corrected missing context dimensions: explicitness culture, Navigation unity, early-stage robustness, understandable naming, and searchability.
- Several outputs were locally plausible because they optimized one dimension while underweighting the next one.
- The maintained-index reversal is the clearest example of an untested simpler mechanism: deterministic search was not tested before recommending a new registry.
- The `PastNavigationMemoryFile` / "route-memory source" naming issue is real but partly external to the seven findings; artifacts show the terms, while the user's strongest objection came in chat.

### Structural Points

The correction chain has six pairwise edges:

1. `17-56 -> 20-38`: adaptive save policy corrected to mandatory file on full review.
2. `20-38 -> 17-12`: project-level/bounded trigger corrected to route-memory dependency.
3. `17-12 -> 18-30`: cheap preflight wording corrected to status classification inside intake.
4. `18-30 -> 20-02`: mature material-effect trigger overridden by early-stage robust mode.
5. `20-02 -> 07-06`: source-present review default raised discovery/index question.
6. `07-06 -> 10-21`: maintained index corrected to explicit discovery search.

Cross-chain failure themes:

- naming/jargon;
- explicitness versus bloat;
- trigger boundaries;
- phase sensitivity;
- discovery mechanism;
- authority separation.

### Foundational Principles

- A failure inventory should classify the evidence, not replace `loop_diagnose.md`.
- A correction edge is stronger diagnostic input than a standalone bad-looking finding.
- Human correction is evidence, not noise.
- If exact stage attribution is uncertain, mark it mixed or unknown.
- The strongest maintenance candidates come from repeated failures across multiple edges, not one isolated correction.

### Meaning-Nodes

- correction chain
- failure candidate
- confirmed failure
- policy refinement
- near-failure repaired in-run
- diagnostic prompt
- boundary confusion
- explicitness culture
- phase override

## SV2 - Anchor-Informed Understanding

The inventory should not say "everything changed, therefore everything failed."

The clean model is:

```text
failure inventory now
  -> pairwise loop_diagnose prompts later
  -> maintenance candidates only after diagnostics
```

The current job is to produce a high-confidence map of what went wrong or almost went wrong, with evidence and confidence levels.

## Phase 2 - Perspective Checking

### Technical / Logical Perspective

New anchors:

- A policy can be correct at one layer and wrong at another layer.
- Example: "save only for durable handoff" is reasonable storage logic, but wrong once Route Memory Review is understood as a meaningful operation in an explicit-artifact codebase.
- Example: "unresolved material effect" is logically cleaner than source-present review, but may be too optimized for an early-stage uncalibrated system.

Technical reading:

The failures are mostly boundary-placement failures, not random contradictions.

### Human / User Perspective

New anchors:

- The user kept noticing smell before the artifacts fully encoded the problem.
- User corrections often pointed at understandability: "Navigation is Navigation," "what source?", "why index if searchable?"
- Jargon that is technically precise but not understandable is a real failure in this system because the user is shaping protocol language.

Human reading:

The failure list should use plain labels and explicitly note naming confusion as a first-class failure, not cosmetic cleanup.

### Strategic / Long-Term Perspective

New anchors:

- Early-stage Homegrown is intentionally slower and more explicit because it is trying to discover its own mechanisms.
- Premature efficiency can be a failure even when it produces a clean mature-state rule.
- Premature artifact creation can also be a failure if the artifact duplicates derivable state.

Strategic reading:

The system needs a better way to ask "is this mature optimized policy, early-stage robust policy, or temporary scaffold?"

### Risk / Failure Perspective

New anchors:

- Under-review risks stale route resurrection and route amnesia.
- Over-review risks old-map authority drift and artifact bloat.
- Maintained indexes risk false absence and duplicate mutable state.
- Search-only discovery risks false positives unless scoped.

Risk reading:

The failures repeatedly came from overcorrecting one risk while underchecking the opposite risk.

### Resource / Feasibility Perspective

New anchors:

- The current artifact population is small enough that search is cheap.
- A maintained global index creates multiple writer-update obligations.
- Full Route Memory Review is expensive but intentionally acceptable in early-stage robust mode when there is a route-memory object.

Resource reading:

Feasibility claims should be tested against actual current corpus size and actual writer burden before recommending a new persistent mechanism.

### Definitional / Consistency Perspective

New anchors:

- Navigation maps current possible routes.
- Route Memory Review interprets past Navigation memory for the current question.
- Search/index finds candidate files.
- Status classification records whether review is needed, consumed, skipped, or absent.

Definitional reading:

Many failures happened when one of these definitions leaked into another role.

## SV3 - Multi-Perspective Understanding

The strongest interpretation is:

```text
The correction chain is not chaos. It is a sequence of boundary repairs.
```

Each correction repaired a different misplaced boundary:

- artifact storage boundary;
- trigger boundary;
- preflight/status boundary;
- phase-policy boundary;
- discovery/index boundary;
- naming boundary.

This means later `loop_diagnose.md` runs should ask which boundary the prior loop failed to test, not merely which final answer was wrong.

## Phase 3 - Ambiguity Collapse

### Ambiguity: Does every correction in the chain count as a failure?

**Strongest counter-interpretation:**
Yes. If a later inquiry corrected an earlier one, the prior loop failed.

**Why the counter-interpretation fails (structural grounds):**
Some later inquiries explicitly reframe scope rather than reject the earlier result. `early_stage_always_full_route_memory_review` preserves the mature `review_needed` trigger as a future optimized policy but changes the current default because the phase is early-stage. That is a phase-policy refinement, not the same kind of failure as the index reversal where the later finding says the prior maintained-index recommendation should not be v1.

**Confidence:** HIGH.

**Resolution:**
Classify changes as confirmed failure, policy refinement, near-failure repaired in-run, or diagnostic hypothesis.

**What is now fixed?**
The inventory must carry type and confidence.

**What is no longer allowed?**
Flatly labeling every correction as a same-severity failure.

**What now depends on this choice?**
Prompt prioritization for later `loop_diagnose.md` runs.

**What changed in the conceptual model?**
The target becomes a typed failure inventory rather than a blame list.

### Ambiguity: Is the naming problem only cosmetic?

**Strongest counter-interpretation:**
Yes. `prior_map_overlay`, `Route-Memory Preflight`, and `PastNavigationMemoryFile` are just labels; the underlying mechanisms matter more.

**Why the counter-interpretation fails (structural grounds):**
The labels affected mechanism interpretation. `prior_map_overlay.md` made the operation sound like a storage artifact or overlay, which contributed to storage-mode confusion. "Route-Memory Preflight" sounded like a standalone always-run routine, which the next inquiry had to correct. "source" language made the route-memory object unclear enough that the user explicitly challenged it. Names here shape routing and trigger behavior, not only prose.

**Confidence:** HIGH.

**Resolution:**
Naming and vocabulary failures are first-class diagnostic targets when the name changes the perceived operation boundary.

**What is now fixed?**
The inventory includes naming failures.

**What is no longer allowed?**
Treating unclear names as harmless if the file still contains a definition.

**What now depends on this choice?**
Loop-diagnose prompts should include naming as a possible affected stage: framing, sensemaking, or conclude synthesis.

**What changed in the conceptual model?**
Language becomes part of protocol mechanics.

### Ambiguity: Was the index recommendation a reasonable refinement or a failure?

**Strongest counter-interpretation:**
It was reasonable. The index feasibility inquiry narrowed the scope, kept the index non-authoritative, and required scan/backfill. The later search finding merely chose a different tradeoff.

**Why the counter-interpretation fails (structural grounds):**
The later inquiry directly shows that the prior index's own scan/backfill requirement undermined the need for a maintained registry as v1. If deterministic search is already mandatory for safety and cheap at current size, a maintained index adds duplicate mutable state. The prior inquiry did consider scan-only, but killed it mainly for discovery friction before testing actual known filename/path search against the active tree.

**Confidence:** HIGH for "v1 maintained-index recommendation was a failure"; MEDIUM for exact discipline attribution.

**Resolution:**
Classify this as a confirmed design failure: recommending a maintained global index before validating deterministic discovery search.

**What is now fixed?**
The failure list includes index-before-search.

**What is no longer allowed?**
Presenting the index reversal as merely preference churn.

**What now depends on this choice?**
The highest-value loop-diagnose prompt is likely `07-06 -> 10-21`.

**What changed in the conceptual model?**
Discovery explicitness should prefer protocolized derivation before maintained duplicate state.

### Ambiguity: Was early-stage robust mode a contradiction of the mature trigger?

**Strongest counter-interpretation:**
Yes. `route_memory_preflight_reevaluation` said full review only for unresolved material effect; `early_stage_always_full_route_memory_review` says source-present review by default. That is a reversal.

**Why the counter-interpretation fails (structural grounds):**
The early-stage inquiry explicitly preserves the material-effect trigger as the mature optimized policy and adds a phase condition. The mechanism changes because the project is uncalibrated and values robustness over cost. The prior rule was not structurally wrong; it was too optimized for the current phase.

**Confidence:** HIGH.

**Resolution:**
Classify this as policy-phase failure or premature optimization, not a simple contradiction.

**What is now fixed?**
The failure list should say "mature policy applied too early."

**What is no longer allowed?**
Treating the robust-mode inquiry as evidence that the material-effect trigger is useless.

**What now depends on this choice?**
Loop diagnosis should investigate phase sensitivity and calibration, not only trigger logic.

**What changed in the conceptual model?**
Trigger policy becomes phase-aware.

### Ambiguity: Can this inquiry identify exact MVL+ discipline failures?

**Strongest counter-interpretation:**
Yes. Since discipline outputs were read, we can say Exploration missed X or Sensemaking missed Y.

**Why the counter-interpretation fails (structural grounds):**
The artifacts show what each loop concluded, but they do not isolate cause. A later correction can result from exploration omission, sensemaking anchor dominance, critique weakness, conclude synthesis, or new user context that did not exist earlier. `loop_diagnose.md` exists exactly to compare prior path, corrected path, and human correction before making stage attributions.

**Confidence:** HIGH.

**Resolution:**
Use stage labels only as hypotheses or prompt targets, not final root-cause claims.

**What is now fixed?**
The final answer must not overclaim discipline attribution.

**What is no longer allowed?**
Statements like "Sensemaking failed" without a diagnostic run.

**What now depends on this choice?**
Prompt wording must ask `loop_diagnose.md` to identify affected stage.

**What changed in the conceptual model?**
This MVL+ run prepares diagnoses; it does not replace them.

## SV4 - Clarified Understanding

The correction chain contains confirmed failures, local repairs, and phase refinements.

Confirmed failures:

- adaptive save-only-on-handoff rule did not fit Homegrown explicitness once full review was a meaningful operation;
- project-level/bounded trigger used a proxy instead of route-memory dependency;
- "Route-Memory Preflight" wording created a side-routine smell;
- maintained index was recommended before deterministic search was tested;
- unclear naming/jargon repeatedly affected user understanding.

Refinements or near-failures:

- material-effect trigger is mature-policy logic, not simply wrong;
- broad "all Navigation-related file creations" was narrowed within the index inquiry;
- index may return later behind revival triggers, but not as v1.

Unknown:

- exact failed discipline or runner stage for each correction edge.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed Variables

- The final deliverable must include a typed failure list.
- Each failure needs evidence and confidence.
- `loop_diagnose.md` prompts should be pairwise, not only one aggregate prompt.
- Prompt fields must follow the protocol's input contract.
- Later corrected inquiries are comparative evidence, not ground truth.

### Eliminated Options

- One undifferentiated "everything failed" list.
- Direct protocol-edit recommendations from this inventory alone.
- Exact root-cause attribution without diagnostics.
- Treating naming as cosmetic.
- Treating index reversal as mere preference churn.

### Viable Paths

- Produce a ranked failure inventory.
- Produce pairwise loop-diagnose prompts.
- Include one aggregate naming/authority prompt only as a cross-chain diagnostic.
- Mark the strongest candidate diagnostics for first use.

## SV5 - Constrained Understanding

The final answer should be organized around failure units:

```text
failure label
  -> what changed
  -> evidence from prior inquiry
  -> evidence from later inquiry or user correction
  -> classification
  -> confidence
  -> suggested loop_diagnose prompt
```

The list should be cautious but not timid. Several failures are confirmed by explicit `corrects:` or "revision trigger" sections.

## Phase 5 - Conceptual Stabilization

Stable model:

```text
The seven inquiries show a correction chain caused mainly by boundary-placement failures.

The boundaries were:
  operation vs artifact,
  trigger vs heuristic,
  status vs full review,
  mature policy vs early-stage policy,
  discovery search vs maintained index,
  name vs mechanism.

The inventory should name those failures now.
The causal diagnosis should happen later through pairwise loop_diagnose runs.
```

## SV6 - Stabilized Model

The answer should give the user a practical diagnostic backlog.

It should say:

- what failed or almost failed;
- where in the chain it happened;
- what evidence supports it;
- how confident the claim is;
- what exact `loop_diagnose.md` prompt can be run later.

Difference from SV1:

SV1 treated the chain as "several failures happened." SV6 treats it as a typed correction graph. The graph separates confirmed failures from phase refinements and avoids pretending that this inventory can identify exact MVL+ root causes by itself.

## Telemetry

Perspective saturation: reached. Technical, human, strategic, risk, resource, and definitional perspectives converged on boundary-placement failures.

Ambiguity resolution ratio: high. Main ambiguity left open is exact stage attribution, intentionally deferred to `loop_diagnose.md`.

SV delta: strong. The model moved from a flat failure list to a typed correction graph.

Anchor diversity: high. Anchors came from user goal, artifact evidence, protocol constraints, risk analysis, and terminology mechanics.
