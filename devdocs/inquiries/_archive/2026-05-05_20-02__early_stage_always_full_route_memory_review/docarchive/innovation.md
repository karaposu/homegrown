# Innovation: Early Stage Always Full Route Memory Review

## User Input

`devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review/_branch.md`

## Seed

Homegrown is early-stage, uncalibrated, and seeking breakthroughs. The latest route-memory policy may be too optimized: it asks the runner to decide whether old route memory has unresolved material effect. The seed is to find a policy that is robust now without becoming permanent no-op review work.

## Mechanism 1 - Lens Shifting

### Generic

Lens: treat Route Memory Review as calibration work, not only safety work.

Output: early reviews generate evidence about which old routes matter, which are stale, and which reviews are no-op.

### Focused

Lens: evaluate policy under early-stage discovery mode rather than mature optimized mode.

Output: in early-stage mode, route-memory source presence is enough to trigger review by default.

### Contrarian

Lens: treat old route memory as anchoring risk.

Output: review-by-default must include an anti-authority rule: old routes are not carried forward unless current evidence supports them.

## Mechanism 2 - Combination

### Generic

Combine route-memory status with phase status.

Output:

```yaml
navigation_phase: early_stage_discovery
route_memory_policy: robust_default
```

### Focused

Combine source-present trigger with existing artifact rule.

Output:

```text
route-memory source present in early-stage mode -> full Route Memory Review -> route_memory_review.md
```

### Contrarian

Combine no-op records with review artifacts.

Output: generate a review file even when no sources exist. This maximizes uniformity but creates empty authority artifacts.

## Mechanism 3 - Inversion

### Generic

Invert the latest trigger.

Instead of:

```text
review only when needed
```

Use:

```text
review unless safely unnecessary
```

### Focused

Invert materiality burden.

Instead of requiring proof that old route memory may materially affect the map, require proof that it cannot affect the durable map.

### Contrarian

Invert the user's premise.

Maybe speed creates more breakthroughs than review depth. Output: keep the latest trigger unchanged and spend saved tokens on more Navigation/MVL loops.

## Mechanism 4 - Constraint Manipulation

### Generic

Add constraint: no review operation without a route-memory object.

Output: source-gated robust mode, not literal always-full.

### Focused

Add constraint: every skipped review in early-stage mode must record a reason.

Output: exceptions become auditable and cannot silently expand.

### Contrarian

Remove constraint: allow review-by-default to continue indefinitely.

Output: simpler policy now, but no mechanism prevents permanent over-cost.

## Mechanism 5 - Absence Recognition

### Generic

Missing thing: a named phase flag.

Output: introduce `navigation_phase: early_stage_discovery | stable_optimized`.

### Focused

Missing thing: exit telemetry.

Output: every review artifact should record whether it changed Navigation input, caught stale route risk, or was no-op.

### Contrarian

Missing thing: periodic global route-memory audit.

Output: instead of per-Navigation review-by-default, run periodic full audit of all route maps. This helps global memory but may miss per-run relevance.

## Mechanism 6 - Domain Transfer

### Generic

Domain transfer from debugging: early systems run verbose logging; mature systems reduce logs.

Output: early-stage full reviews are like verbose logging, useful until failure modes are understood.

### Focused

Domain transfer from database migrations: early schema work uses strict migration checks; later checks can be optimized after invariants stabilize.

Output: route-memory review-by-default is a temporary consistency check before route maps are "compiled."

### Contrarian

Domain transfer from research notebooks: too much literature review can prevent experiments.

Output: review-by-default must not block evidence-producing builder-loop work; it needs a cost guard.

## Mechanism 7 - Extrapolation

### Generic

If route-memory sources grow, permanent review-by-default becomes expensive.

Output: the policy needs exit criteria and no-op monitoring.

### Focused

If early skips create one stale resurrection, trust in Navigation can drop sharply.

Output: err toward review now while the map corpus is small and confidence is fragile.

### Contrarian

If every Navigation starts with review, Navigation may become slow enough that users stop invoking it.

Output: allow explicit thin/fast mode when the user knowingly wants speed over route-memory safety.

## Candidate Set

### Candidate A - Absolute Always-Full Review

Run full Route Memory Review for every Navigation run, regardless of whether route-memory sources exist.

### Candidate B - Source-Gated Early Robust Mode

During early-stage discovery mode, if any route-memory source exists, run full Route Memory Review by default before durable Navigation map generation.

### Candidate C - Latest Trigger With Early-Stage Uncertainty

Keep the latest unresolved-material-effect trigger, but define early-stage uncertainty as enough to classify `review_needed` in most source-present cases.

### Candidate D - Periodic Full Route-Memory Audit

Run full route-memory audits periodically, not before every Navigation run.

### Candidate E - Review Sampling

Review every Nth Navigation run or a random subset, using sampled review outcomes to calibrate skip heuristics.

### Candidate F - Two-Mode Navigation

Expose explicit modes:

```text
robust Navigation -> source-present full review
fast Navigation -> latest material-effect trigger
```

### Candidate G - Anti-Authority Review Template

Patch the review structure so every old route must be classified as carry forward, retire, keep blocked, needs check, or ignore, and carry-forward requires current evidence.

### Candidate H - Exit Telemetry

Add review outcome metrics: changed map, caught stale route, revived useful blocked route, no-op, cost high, user burden high.

## Test Cycle

### Candidate A - Absolute Always-Full Review

Novelty: low.

Scrutiny survival: fails. It includes no-source cases where there is no review object.

Fertility: low. It simplifies policy but creates empty artifacts.

Actionability: high but wasteful.

Mechanism independence: low.

Verdict: kill.

Seed from failure: source-gate the robust policy.

### Candidate B - Source-Gated Early Robust Mode

Novelty: moderate.

Scrutiny survival: survives. It respects early-stage robustness while avoiding no-source no-ops.

Fertility: high. It supports calibration, stale-route prevention, and later optimization.

Actionability: high.

Mechanism independence: high. Lens shifting, combination, inversion, and domain transfer all produced it.

Verdict: survive.

### Candidate C - Latest Trigger With Early-Stage Uncertainty

Novelty: low to moderate.

Scrutiny survival: survives but is less explicit than Candidate B. It can still collapse back into judgment-heavy materiality if "uncertainty" is interpreted narrowly.

Fertility: medium.

Actionability: medium.

Mechanism independence: medium.

Verdict: refine into Candidate B's clearer phase policy.

### Candidate D - Periodic Full Route-Memory Audit

Novelty: moderate.

Scrutiny survival: partial. It is useful for global cleanup but weak as a pre-Navigation safety step.

Fertility: medium.

Actionability: medium.

Mechanism independence: medium.

Verdict: refine as a later supplement, not replacement.

### Candidate E - Review Sampling

Novelty: moderate.

Scrutiny survival: fails for the current stage. Sampling is useful after enough runs exist, but early-stage corpus is too small and stale-route misses are too costly.

Fertility: medium later.

Actionability: low now.

Mechanism independence: low.

Verdict: kill for current phase; possible future optimization seed.

### Candidate F - Two-Mode Navigation

Novelty: moderate.

Scrutiny survival: partially survives. Explicit robust/fast modes respect user choice, but too many modes can reintroduce the user's concern that Navigation is splitting unnaturally.

Fertility: medium.

Actionability: high.

Mechanism independence: medium.

Verdict: refine. Use robust mode as the default phase policy; allow explicit thin/fast opt-out rather than equal modes.

### Candidate G - Anti-Authority Review Template

Novelty: moderate.

Scrutiny survival: survives. It directly addresses the main risk of reviewing more often.

Fertility: high. It improves review quality regardless of trigger policy.

Actionability: high.

Mechanism independence: high. Lens shift, inversion, and constraint manipulation all point to it.

Verdict: survive.

### Candidate H - Exit Telemetry

Novelty: moderate.

Scrutiny survival: survives. It prevents temporary robust mode from becoming permanent.

Fertility: high. It creates data for future self-optimization.

Actionability: high.

Mechanism independence: high. Absence recognition, extrapolation, and domain transfer produced it.

Verdict: survive.

## Assembly Check

Best assembly:

```text
Source-Gated Early Robust Mode
  + Anti-Authority Review Template
  + Exit Telemetry
  + Explicit Thin/Fast Opt-Out
```

Assembly rule:

```text
While Homegrown is in early-stage discovery mode, any durable Navigation run with prior route-memory sources runs full Route Memory Review by default.

The review writes route_memory_review.md and treats old maps as evidence, not authority.

Skipping review requires an explicit recorded exception.

Each review records outcome telemetry so the system can later return to the narrower material-effect trigger.
```

Emergent value:

- robust enough for breakthrough-seeking;
- avoids literal no-source no-op review;
- generates calibration data;
- protects against old-map authority drift;
- remains temporary.

## Recommended Innovation

Adopt a temporary robust-mode override:

```yaml
navigation_phase: early_stage_discovery
route_memory_policy: source_present_review_default
```

Operational rule:

```text
If Navigation will produce a durable map and any prior route-memory source exists, run full Route Memory Review before Navigation map generation.

Skip only for:
  - no route-memory source;
  - current applicable review already consumed;
  - explicit thin/fast context accepted by the user;
  - non-durable disposable local run, with reason recorded.

When review runs, write route_memory_review.md.
When review is skipped, record the exception and reason.
```

Add exit telemetry:

```yaml
review_changed_navigation_input: yes/no
caught_stale_route: yes/no
preserved_useful_blocked_route: yes/no
review_result: decisions | no_op | mostly_irrelevant
cost_burden: low | medium | high
```

## Mechanism Coverage Telemetry

Generators applied: 4 / 4.

Framers applied: 3 / 3.

Convergence: yes. Four mechanisms converged on source-gated early robust mode, and three mechanisms converged on exit telemetry.

Survivors tested: 8 / 8.

Failure modes observed: none. Absolute always-full and review sampling were tested rather than prematurely discarded; survival bias checked by preserving explicit thin/fast opt-out.

Overall: PROCEED.
