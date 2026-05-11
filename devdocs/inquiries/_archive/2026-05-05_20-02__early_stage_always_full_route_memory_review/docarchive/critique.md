# Critique: Early Stage Always Full Route Memory Review

## User Input

`devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/_branch.md`

## Phase 0 - Dimensions With Weights

| Dimension | Weight | Success Criteria |
| --- | --- | --- |
| Robustness | Critical | Prevents stale route resurrection, route amnesia, and missed old blockers during the current early stage. |
| Breakthrough support | Critical | Preserves cross-run memory and deferred/blocked route seeds that may matter for breakthroughs. |
| Conceptual cleanliness | High | Does not reintroduce unnatural big/bounded Navigation split or collapse review into Navigation. |
| Artifact discipline | High | Meaningful reviews write files; no-source/no-review cases do not create fake artifacts. |
| Anti-authority safety | High | Old maps remain evidence, not current truth. |
| Cost control | Medium | Accepts higher cost now but includes exceptions and exit criteria. |
| Future optimization | High | Produces telemetry that lets the system later narrow the trigger safely. |

Dimension validation: these dimensions match the user goal. The user explicitly elevated robustness and breakthrough-seeking over cost, so robustness and breakthrough support carry critical weight.

## Phase 1 - Fitness Landscape

### Viable Region

Viable policies:

- lower the review threshold during early-stage discovery mode;
- still avoid no-source review files;
- make skipped review explicit;
- include old-map anti-authority safeguards;
- include exit telemetry.

### Dead Region

Dead policies:

- literal full review when no route-memory source exists;
- permanent review-by-default without exit criteria;
- keeping the latest trigger unchanged despite uncalibrated materiality judgment;
- sampling reviews in a tiny early corpus;
- carrying old routes forward by default.

### Boundary Region

Boundary policies:

- two equal Navigation modes, robust and fast;
- periodic route-memory audit;
- latest trigger plus broad uncertainty wording.

These are useful pieces but not the best core policy.

### Unexplored Region

Exact implementation patch text remains unexplored. The conceptual policy is ready; patching belongs to a later materialization task.

## Phase 2 - Candidate Evaluation

### Candidate A - Absolute Always-Full Review

**Prosecution:**
This creates review work even when no route-memory source exists. It confuses context-status recording with full review. It would generate empty artifacts and make future sessions reconcile meaningless review files.

**Defense:**
It is simple, maximally explicit, and guarantees the runner never accidentally skips review.

**Collision:**
Defense loses. Robustness requires an object to inspect. No-source review is ceremony, not safety.

**Verdict: KILL**

Seed from failure: use source-gated review-by-default.

### Candidate B - Source-Gated Early Robust Mode

**Prosecution:**
This can still over-review. A route-memory source may exist but be irrelevant. The policy may slow Navigation and distract from builder-loop evidence.

**Defense:**
The current phase changes the burden of proof. The system is uncalibrated, docs are mid-transition, and there is real stale-route risk. Reviewing source-present cases creates calibration artifacts and prevents weak skip heuristics from hiding memory errors.

**Collision:**
Defense wins if the policy is explicitly temporary and has exceptions. The cost is acceptable because robustness and breakthrough support are critical dimensions right now.

**Verdict: SURVIVE**

Constructive output: use as the core rule, but only for early-stage discovery mode and durable Navigation maps.

### Candidate C - Latest Trigger With Early-Stage Uncertainty

**Prosecution:**
This preserves the old judgment bottleneck. A runner still has to decide whether early-stage uncertainty is enough. That is exactly where under-review can happen.

**Defense:**
It minimally changes the latest finding and avoids over-review.

**Collision:**
Defense is not strong enough for the user's current priority. The cleaner expression is source-present default with exceptions.

**Verdict: REFINE**

Constructive output: absorb into Candidate B as the mature-state fallback and as an explanation of why robust mode will exit later.

### Candidate D - Periodic Full Route-Memory Audit

**Prosecution:**
Periodic audit does not protect a specific Navigation run at the moment stale memory could affect it.

**Defense:**
It can reduce per-run cost and help global cleanup.

**Collision:**
Defense survives only as a later supplement. It cannot replace pre-Navigation review in early-stage robust mode.

**Verdict: REFINE / DEFER**

Constructive output: consider after several route-memory sources exist and reviews become expensive.

### Candidate E - Review Sampling

**Prosecution:**
Sampling is inappropriate when the corpus is tiny and the system is uncalibrated. Missing one stale route may matter more than the saved tokens.

**Defense:**
Sampling could provide calibration at lower cost.

**Collision:**
Defense loses for the current phase. Sampling may become useful after enough reviews exist.

**Verdict: KILL for current phase**

Seed from failure: use sampling as a future optimization strategy only.

### Candidate F - Two-Mode Navigation

**Prosecution:**
Equal robust/fast modes reintroduce mode-choice burden. The user already disliked unnatural Navigation splits.

**Defense:**
Explicit modes respect user control. Sometimes the user may genuinely want speed.

**Collision:**
Both are valid. The refined version is not two equal modes. Use robust mode as the default phase policy and allow explicit thin/fast opt-out.

**Verdict: REFINE**

Constructive output: robust default plus explicit user opt-out.

### Candidate G - Anti-Authority Review Template

**Prosecution:**
Template safeguards add overhead and may make review longer.

**Defense:**
Review-by-default without anti-authority safeguards is dangerous. The template prevents old maps from becoming current truth and makes retire/ignore/supersede normal outcomes.

**Collision:**
Defense wins. This is required for Candidate B to be safe.

**Verdict: SURVIVE**

Constructive output: every review should require current evidence for carry-forward and should validate that old maps were not mutated.

### Candidate H - Exit Telemetry

**Prosecution:**
Telemetry adds fields and can become another bookkeeping tax.

**Defense:**
Without telemetry, robust mode has no way to optimize itself later. The user explicitly framed the policy as "until the system can optimize itself's mechanisms."

**Collision:**
Defense wins. Exit telemetry is not optional; it is what makes the policy temporary.

**Verdict: SURVIVE**

Constructive output: record whether review changed Navigation input, caught stale routes, preserved useful blockers, produced no-op, and had high cost.

## Phase 3.5 - Assembly Check

### Assembly Candidate - Early Robust Route-Memory Policy

Components:

- Candidate B: source-gated early robust mode.
- Candidate G: anti-authority review template.
- Candidate H: exit telemetry.
- Candidate F refined: explicit thin/fast opt-out.

**Prosecution:**
The assembly may still slow Navigation enough to delay real-world builder-loop evidence. It also creates more review artifacts that future Navigation must discover.

**Defense:**
The assembly only applies when route-memory sources exist and the Navigation output is durable. It also creates exit telemetry, so cost can be reduced once enough evidence exists. In the current phase, stale memory and missed deferred routes are more dangerous than token cost.

**Collision:**
Defense wins. The assembly best matches the user's stated priority while preserving boundaries and future optimization.

**Verdict: SURVIVE**

Rank: 1.

## Phase 3 - Ranked Verdicts

1. **SURVIVE: Early Robust Route-Memory Policy**
   - Best answer.
   - Use source-present full review by default during early-stage discovery mode.

2. **SURVIVE: Anti-Authority Review Template**
   - Required safeguard.
   - Prevents old maps from becoming current truth.

3. **SURVIVE: Exit Telemetry**
   - Required for future optimization.
   - Makes robust mode temporary and measurable.

4. **REFINE: Explicit Robust/Fast Modes**
   - Use robust as default.
   - Keep fast/thin only as explicit opt-out, not equal mode.

5. **REFINE: Latest Trigger With Early-Stage Uncertainty**
   - Keep as mature-state target.
   - Do not use as current default.

6. **REFINE / DEFER: Periodic Audit**
   - Useful later, not a replacement now.

7. **KILL: Absolute Always-Full Review**
   - No-source review is empty ceremony.

8. **KILL for current phase: Review Sampling**
   - Too weak while uncalibrated.

## Coverage Map

| Region | Covered? | Result |
| --- | --- | --- |
| Literal always-full | yes | killed |
| Source-gated robust default | yes | survived |
| Latest trigger unchanged | yes | refined to future stable mode |
| Periodic audit | yes | deferred supplement |
| Sampling | yes | killed for now |
| Explicit modes | yes | refined to opt-out |
| Anti-authority safeguards | yes | survived |
| Exit criteria | yes | survived |

No high-probability viable region remains unexplored.

## Signal

TERMINATE.

The answer is:

```text
Yes, the early-stage robustness instinct is correct, but not as literal always-full review.

Use an early-stage robust mode:
  if a durable Navigation run has any prior route-memory source, run full Route Memory Review by default.

Skip only for explicit exceptions:
  no source, current review already consumed, user accepts thin/fast context, or non-durable disposable local run.

If review runs, write route_memory_review.md.

Every review must treat old maps as evidence, not authority, and must record outcome telemetry so the system can later return to the narrower material-effect trigger.
```

## Convergence Telemetry

Dimension coverage: complete. Robustness, breakthrough support, artifact discipline, anti-authority safety, cost control, and future optimization were all used.

Adversarial strength: strong. The survivor was prosecuted on over-review, authority drift, and builder-loop delay.

Landscape stability: stable. No new candidate region emerged during assembly.

Clean SURVIVE exists: yes. The Early Robust Route-Memory Policy survives with safeguards.

Failure modes observed: none. Not rubber-stamped: two candidates killed and three refined. Not nitpicked: the main survivor was preserved despite real cost concerns because the user's critical dimensions favor robustness.

Overall: PROCEED.
