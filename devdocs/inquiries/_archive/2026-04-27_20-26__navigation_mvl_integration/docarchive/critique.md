# Critique: Navigation MVL Integration

## User Input

`devdocs/inquiries/2026-04-27_20-26__navigation_mvl_integration/_branch.md`

## A. Dimensions With Weights

| Dimension | Weight | Success Criteria |
|---|---:|---|
| Atomicity preservation | Critical | MVL/MVL+ remain bounded answer-producing loops; Navigation does not become a hidden continuation engine. |
| Spec coherence | Critical | Design matches Navigation's definition as boundary enumeration, not decision-making or routing. |
| Practical next-step value | High | The next step can be used soon and improves real inquiry workflow. |
| Autonomy path | High | Design supports later continuous and multi-head loops without pretending they already exist. |
| Selector explicitness | High | The design names who or what chooses from the Navigation map. |
| Evidence generation | Medium | The design produces artifacts useful for learning when Navigation helps. |
| Complexity control | Medium | The design avoids building a runner, selector, and merge logic before the interface is proven. |

Dimension validation: these dimensions come directly from Sensemaking's anchors: boundary discipline, atomic MVL, selector separation, staged autonomy, and meaningful traversal.

## B. Fitness Landscape

### Viable Region

Designs that preserve MVL+ as atomic, use Navigation at the boundary, keep selection explicit, and create a path toward a later runner.

### Dead Region

Designs that make Navigation a normal core discipline, hide selection inside Navigation, or launch autonomous/multi-head behavior before traversal metrics exist.

### Boundary Region

Designs that are architecturally correct but too large to build first, or safe but too passive to improve Navigation usage.

### Unexplored Region

The exact shape of a future selector and meaningful-traversal metrics remains unexplored. That is acceptable for this question because the immediate decision is placement and staging, not selector design.

## C. Candidate Verdicts

### Candidate A: Core-Pipeline Navigation

**Prosecution:** This violates the strongest architectural signal. Navigation's own reference says it is a boundary discipline between cycles. Making it a required sixth discipline turns every loop into an open-ended continuation and blurs current-answer production with next-direction mapping.

**Defense:** It would make Navigation visible and guarantee next-step maps. It might reduce underuse.

**Collision:** Visibility is not worth damaging the atomic-loop model. The same visibility can be obtained through a boundary hook.

**Verdict: KILL.**

Constructive seed: preserve the desire for visibility, but move it to conditional post-CONCLUDE invocation.

### Candidate B: Manual Navigation Only

**Prosecution:** This preserves correctness but leaves the current underuse almost unchanged. The user must remember to invoke Navigation, so the system still depends on human memory for next-step mapping.

**Defense:** It is safe, coherent, and immediately usable. It generates human-calibrated evidence without protocol churn.

**Collision:** Strong as an immediate practice, weak as the whole integration strategy.

**Verdict: REFINE.**

Refinement: use manual Navigation now as dogfooding, but pair it with a small protocol change that suggests or triggers Navigation at the boundary.

### Candidate C: Conditional MVL+ Boundary Hook

**Prosecution:** Trigger design may be fuzzy. If triggers are too broad, Navigation becomes noisy; if too narrow, it remains underused. The hook could be mistaken for a full autonomous runner.

**Defense:** It preserves the core pipeline, matches the boundary-discipline spec, reduces underuse, and produces high-signal cases where Navigation was actually needed. It can stop at map production and leave selection manual.

**Collision:** The risks are controllable if the hook is explicitly post-CONCLUDE, trigger-based, and non-selecting.

**Verdict: SURVIVE.**

Conditions:

- Implement only in MVL+ first, not classic MVL.
- It may produce or recommend a Navigation map, but must not auto-launch another inquiry.
- It must name the trigger reason.
- Selection remains human until a separate selector exists.

### Candidate D: Navigation Suggestion Only

**Prosecution:** This is too weak if the goal is to actually utilize Navigation. A suggestion can still be ignored, and no artifact is produced.

**Defense:** It is nearly free, safe, and compatible with existing MVL+ behavior. It can be used as a low-risk first edit.

**Collision:** It is a useful fallback or first step, but insufficient as the main architecture.

**Verdict: REFINE.**

Refinement: keep suggestion language for low-confidence cases; use actual conditional invocation or stronger instruction for high-confidence trigger cases.

### Candidate E: Separate Sequential Meta-Loop Runner

**Prosecution:** Correct architecture, but premature if built before the trigger contract and Navigation usage are tested. A runner needs meta-state, selector policy, stop conditions, and traversal-quality measures.

**Defense:** This is the real larger loop: `MVL+ -> Navigation -> Select -> MVL+`. It is where recurrence belongs.

**Collision:** Architecturally strong, implementation should be deferred until boundary maps exist and selector needs are clearer.

**Verdict: REFINE.**

Refinement: define as the next stage after conditional boundary usage, not as the immediate change.

### Candidate F: Immediate Multi-Head Runner

**Prosecution:** This multiplies uncertainty. There is no proven selector, no merge protocol, and no meaningful-traversal metric strong enough to decide whether multiple heads are improving the search or just expanding noise.

**Defense:** It matches the long-term vision in `enes/desc.md` and gives Navigation its strongest role: enumeration feeding multiple branches.

**Collision:** The future fit is real, but immediate implementation is too early.

**Verdict: KILL for now / DEFER as future stage.**

Constructive seed: build multi-head only after sequential runner v1 shows useful traversal behavior.

### Candidate G: Reflection Plus Navigation Boundary Pair

**Prosecution:** This may overload the boundary. If every run needs Reflection and Navigation, the workflow becomes heavy. Reflection is also not always needed.

**Defense:** It matches the reference sequence: Reflection looks backward, Navigation looks forward and can read Reflection. It is powerful when a loop fails, gets corrected, or produces questionable results.

**Collision:** Good as a conditional compound boundary, not as a default tail.

**Verdict: REFINE.**

Refinement: pair Reflection and Navigation only when process quality is in question, not for every completed inquiry.

### Candidate H: Navigation Trigger Contract

**Prosecution:** An interface without behavior can become paperwork. If the fields are too many, the system adds maintenance load.

**Defense:** A tiny boundary-signal contract makes trigger decisions explainable and prepares for a runner. It also helps distinguish complete findings from partial/open findings.

**Collision:** Strong if kept minimal and attached to real trigger behavior.

**Verdict: SURVIVE.**

Conditions:

- Keep it small.
- Use it only where the runner or Navigation hook consumes it.
- Do not require full metadata retroactively for old inquiries.

## D. Assembly Check

The strongest surviving assembly is:

```text
Manual use now
-> conditional MVL+ boundary hook
-> tiny trigger contract
-> sequential meta-loop runner
-> multi-head runner after traversal metrics
```

This assembly is better than any single candidate. It preserves the conceptual architecture while creating a practical next move.

## E. Coverage Map

| Region | Status | Notes |
|---|---|---|
| Navigation inside core loop | Covered | Killed. Contradicts boundary spec and atomicity. |
| Manual-only usage | Covered | Safe but insufficient. |
| Conditional boundary integration | Covered | Main survivor. |
| Suggestion-only integration | Covered | Useful but weak. |
| Sequential meta-loop | Covered | Correct future architecture, defer until maps/signals exist. |
| Multi-head orchestration | Covered | Future stage, too early now. |
| Reflection + Navigation | Covered | Conditional pair for process-quality cases. |
| Trigger contract | Covered | Survivor if kept minimal. |
| Selector internals | Intentionally shallow | Needs separate inquiry after Navigation maps exist. |
| Meaningful traversal runtime | Intentionally shallow | Related but beyond immediate placement decision. |

## F. Signal

**TERMINATE with ranked survivors.**

1. **SURVIVE:** Conditional MVL+ boundary hook, post-CONCLUDE, non-selecting, trigger-based.
2. **SURVIVE:** Minimal Navigation trigger contract.
3. **REFINE:** Manual Navigation use now as calibration and fallback.
4. **REFINE:** Sequential meta-loop runner as the next architecture after boundary usage.
5. **DEFER:** Multi-head runner until selector and meaningful-traversal metrics exist.

The original question is answered: Navigation should not be part of the core MVL/MVL+ discipline sequence. It should be used as a boundary map, first manually or conditionally in MVL+, and later consumed by a larger meta-loop that runs MVL+ repeatedly and eventually in multiple heads.

## G. Convergence Telemetry

- Dimension coverage: HIGH. All critical dimensions were applied to all candidates.
- Adversarial strength: STRONG. Core-pipeline and immediate multi-head options were challenged on critical dimensions, not minor details.
- Landscape stability: STABLE. Multiple disciplines converge on the same layered model.
- Clean survivor exists: YES. Conditional boundary hook plus explicit selector boundary.
- Failure modes observed: no wrong dimensions, rubber-stamping, nitpicking, or false convergence. Residual risk: selector design is underexplored by design.
- Output: PROCEED.

