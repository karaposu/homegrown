# Exploration: Loop Diagnose - Route Memory Review Trigger Boundary

## User Input

LOOP_DIAGNOSE on the correction chain. Diagnostic concerns: prior loop used project-level / broad Navigation as proxy for real route-memory dependency; missed bounded inputs that are themselves route-memory artifacts; missed Navigation needing one unified context-preparation flow.

## Mode and Entry Point

Mode: mixed artifact + possibility exploration.

- Artifact territory: prior + corrected inquiry artifacts (already in context from chain 2 and chain 3 LOOP_DIAGNOSE runs).
- Possibility territory: hypothesis space for failure-stage attribution + cross-chain pattern + M6 effectiveness check (with refinements applied).

Entry point: signal-first. The user's correction is hybrid (metacognitive smell + structural objection) — fifth distinct expression style across the corpus.

## Exploration Cycles

### Cycle 1 - Recognize Corpus-Level Position

Chain 5's prior IS chain 2's corrected (`route_memory_review_file_necessity`). Chain 5's corrected IS chain 3's prior (`route_memory_review_trigger_boundary`). This is the second corpus-level instance of the "same artifact serves as corrected in one chain and prior in another" pattern (chain 4 had this with chain 3's corrected).

Signal: a corrected loop's output is not immune from later diagnostic attention. Each correction chain may surface a different failure axis.

Probe result: chain 5 examines what chain 2's corrected output (which chain 2 praised) missed when the user later raised the proxy-vs-structural concern. Same corpus-level observation pattern as chain 4.

Confidence: HIGH for the corpus-level observation. This is now a stable corpus-level pattern (2 instances).

### Cycle 2 - Probe Hypothesis A: Sensemaking Adopted Proxy As Structural Distinction

Scan prior `docarchive/sensemaking.md`:

- SV6: *"Route Memory Review should generate `route_memory_review.md` whenever it runs."* Plus the anti-bloat rule: *"do not run Route Memory Review unless old route memory matters"* (in finding section 1).
- The phrase "old route memory matters" is operationalized in the prior finding's anti-bloat language: *"Do not run Route Memory Review for bounded local Navigation, no-prior-map contexts, or old maps that are irrelevant to the target Navigation question."*

The prior conflated "bounded local Navigation" with "no route-memory dependency." Bounded inputs CAN be route-memory artifacts (e.g., `/navigation devdocs/navigation/old_project_map.md` is a bounded input that IS old route memory).

Phase 1 / Constraints in the prior includes *"Route Memory Review should not become Navigation itself"* and *"Old Navigation maps remain historical snapshots."* Neither anchor probes whether bounded-vs-project-level is structurally meaningful.

Phase 3 / Ambiguity Collapse in the prior tested:
- Ambiguity 1: "Does 'generate this file' mean every Navigation run?" — resolution: file is mandatory when operation runs, not every Navigation invocation.
- Ambiguity 2: "Is inline review still allowed?" — resolution: inline summary acceptable; file is authoritative.
- Ambiguity 3: "Where should the file live?" — resolution: under `devdocs/navigation_context/`.

None of the three ambiguity-collapse pairs tested whether "bounded local Navigation" is structurally distinct from "project-level Navigation" for route-memory purposes. The proxy was adopted without testing.

Compare corrected `docarchive/sensemaking.md`:

- SV4: *"The user is right that 'big vs bounded' smells. It is not the right abstraction. Navigation should always ask the same route-memory question, then route based on source dependency."*
- Phase 3 / Ambiguity 1: "Does project-level Navigation always need the review?" — resolution: project-level still runs the preflight; full review only if route-memory dependency is found.
- Phase 3 / Ambiguity 2: "What counts as route-memory dependency?" — resolution: route-memory sources include prior Navigation maps, Route Memory Reviews, `_frontier.md`, sync briefs, and any input whose purpose is route continuation memory.

The corrected loop explicitly tested the proxy and replaced it with the structural dependency.

Signals:

- The prior Sensemaking adopted "bounded local Navigation" / "project-level Navigation" as load-bearing distinctions in the trigger logic without Phase 3 testing.
- The proxy was load-bearing for the anti-bloat rule.
- This is a P1 family instance at a NEW layer: trigger-classifier rule (Phase 5 / Conceptual Stabilization output). Different from previous P1 layers (Constraints, Foundational Principles, SV2+ Terminology, Phase 2 Perspective Coverage).

Probe result:

The prior Sensemaking adopted a proxy ("bounded local Navigation") as if it were a structural distinction. Phase 3 didn't test this. **P1 family fourth instance at the trigger-classifier-rule layer.** (Note: chain 4's H1 was at Phase 2 / Perspective Checking, a different mechanism — perspective coverage rather than concept stabilization. So P1 family at concept-stabilization layer is now at 4 instances: Constraints / Foundational Principles / SV2+ Terminology / Trigger-classifier.)

Confidence: HIGH.

### Cycle 3 - Probe Hypothesis B: Critique Prosecution Failed To Construct Failure Case

Scan prior `docarchive/critique.md`:

- Dimensions: Explicitness fit (5), Anti-staleness (5), Historical integrity (5), Anti-bloat (4), Automation readiness (4), Actionability (4), Coherence (4).
- Anti-staleness operationalized as *"Prevents stale old routes from influencing Navigation invisibly."*
- Surviving Candidate A (Mandatory Artifact On Operation):
  - Prosecution: *"Could still create many files if old route memory is checked too often."*
  - Defense: *"The candidate moves bloat control to the correct layer: trigger policy. It preserves explicitness and avoids invisible route-memory state."*

The prosecution against Candidate A focused on artifact volume but did not construct the specific failure case: *"What if the trigger policy uses incidental input properties (e.g., bounded scope) as proxies for the actual structural dependency, allowing stale routes to influence Navigation invisibly when the bounded input IS an old route-memory artifact?"*

The Anti-staleness dimension (weight 5) was applied at the abstract level (does the candidate prevent staleness?) rather than at the failure-case level (what specific scenarios does the candidate's anti-bloat rule allow staleness in?).

Compare corrected `docarchive/critique.md`:

- The corrected loop's Critique constructed the specific failure case: *"A bounded input can itself be route memory."* This drove the rejection of project-level vs bounded as the trigger.

Signals:

- The prior Critique had Anti-staleness as a critical dimension but applied it at insufficient depth.
- The prosecution didn't construct the specific failure case where the anti-bloat rule could allow stale routes through.
- This is similar in shape to chain 3's C-pros (prosecution strength insufficient) but at a different specific axis: failure-case construction rather than user-perspective construction. Both are sub-types of "prosecution-strength insufficient at a specific dimension-application-depth."
- P3 family extends to 2 chains (chain 3 user-perspective + chain 5 failure-case construction).

Probe result:

The prior Critique's prosecution against Candidate A applied the Anti-staleness dimension at the abstract level rather than constructing specific failure cases. **P3 family second instance** (failure-case construction sub-type).

Confidence: HIGH.

### Cycle 4 - Probe Hypothesis C: Innovation Candidate-Set Treated Bounded Inputs Uniformly

Scan prior `docarchive/innovation.md` Candidate Set:

- A: Mandatory Artifact On Operation (SURVIVE)
- B: Inline Default, Saved On Durable Handoff (KILL)
- C: Always Generate For Every Navigation Run (KILL)
- D: Store Review Only Inside New Navigation Map (REFINE)
- E: Navigation Context Folder Artifact (SURVIVE, combined with A)

The Innovation candidate space addressed output mode (inline / saved / no-op / embedded) and trigger policy (operation-runs / always-runs). It did not generate a candidate that explicitly handled bounded-input-as-route-memory-artifact as a special case.

Specifically, the surviving Candidate A's anti-bloat rule treats bounded inputs as a homogeneous skip category. No candidate proposed: "treat bounded inputs differently if they are themselves route-memory artifacts (e.g., bounded input pointing at an old `navigation.md`)."

Compare corrected `docarchive/innovation.md` and SV6:

The corrected loop's Innovation Candidate C ("Universal Route-Memory Preflight, Conditional Review") explicitly handled the bounded-as-route-memory case via universal preflight applied regardless of scope.

Signals:

- The prior Innovation candidate set treated bounded inputs uniformly — did not distinguish bounded-as-route-memory from bounded-as-no-route-memory.
- This is largely inherited from the upstream Sensemaking proxy adoption (H1).
- Innovation's mechanisms could in principle have surfaced the distinction; the corrected loop demonstrates capability.

Probe result:

The prior Innovation candidate set lacked a "bounded-input-classification" axis. Largely inherited from H1; independent component is candidate-space blind spot.

Confidence: MEDIUM-HIGH (mixed attribution).

### Cycle 5 - Probe Hypothesis D: Loop Framing Did Not Require Structural-vs-Proxy Test

Scan prior `_branch.md`:

- Question: *"Should Navigation generate a `route_memory_review.md` artifact when reviewing old Navigation route memory, and if yes, why, where, with what structure, when, and why at that time?"*
- Goal: *"decide whether the file is necessary in Homegrown's explicit-artifact culture, define the exact benefit, generation owner, path, structure, trigger conditions, and timing..."*

The framing focused on artifact existence, location, and operational details. It did not require the loop to test whether the proposed trigger uses incidental input properties (scope, size, source) as proxies for the actual structural dependency.

Compare corrected `_branch.md`:

- Question: *"Is it natural for Route Memory Review to run only for 'big' or project-level Navigation, or should Navigation always include a route-memory check regardless of whether the input is bounded or broad?"*
- Goal: *"determine the correct trigger boundary for Route Memory Review, explain whether bounded/project-level is the wrong distinction..."*

The corrected framing explicitly poses the structural-vs-proxy question. The user's prompt phrasing carries this signal directly.

Signals:

- Prior framing didn't require structural-vs-proxy testing. Corrected framing did.
- This is similar to chain 4's D (framing missing variable) but at a different specific shape: structural-vs-proxy testing rather than missing-variable.
- The framing shortcoming is partly the runner's `_branch.md` Question construction and partly the user's original prompt (which framed the question around artifact existence, not trigger structure).

Probe result:

The prior framing didn't require the loop to test whether the trigger uses incidental properties as proxies. Single-chain observation.

Confidence: MEDIUM (one inferential step; framing partly inherited from user's original prompt phrasing).

### Cycle 6 - M6 Effectiveness Check (With Chain-4 Refinements Applied)

M6 was promoted to ACTIONABLE in chain 3; M6-refinement-S and M6-refinement-C were proposed in chain 4 with caveats. Chain 5's prior loop pre-dates all of M6 events. So M6 cannot be empirically tested at runtime yet, but its rule shape (with refinements applied) can be evaluated.

Would M6 with refinements have caught chain 5's failure?

- M6-refinement-S extends Sensemaking sub-rule to Phase 2 / Perspective Checking. Chain 5's H1 is at Phase 5 / Conceptual Stabilization or SV6 / final rule output (where the trigger-classifier "bounded local Navigation" was stabilized). M6-refinement-S does NOT cover this layer.
- The original M6 Sensemaking sub-rule covers Phase 1 / Constraints + Phase 1 / Foundational Principles + SV2+ Terminology. The trigger-classifier rule layer is technically "SV2+ output" if we read SV2+ broadly to include Phase 5 / Conceptual Stabilization output. Read narrowly, M6 covers SV2/SV3 terminology specifically.
- M6-refinement-C tightens Critique sub-rule to "include all that apply." Chain 5's H2 is about prosecution depth, not dimension-list completeness. M6-refinement-C doesn't catch H2.

**Conclusion:** M6 with refinements would NOT have caught chain 5's failure. Specifically:
- M6's Sensemaking sub-rule does not cover Phase 5 / Conceptual Stabilization output (where trigger-classifier rules live).
- M6's Critique sub-rule (even refined) is about dimension articulation, not prosecution depth — H2 / P3 family is a separate pattern.

This is M6 effectiveness data: M6's coverage is still incomplete. Two new potential refinements suggest themselves:

- **M6-refinement-S2 (potential):** extend Sensemaking sub-rule to also cover Phase 5 / Conceptual Stabilization output (trigger-classifier rules and final-output concepts). This would be a SECOND extension to M6's Sensemaking sub-rule from chain-5 evidence — borderline overreach. Defer with note.
- **M6-extension-pros (potential):** add a Critique prosecution-depth sub-rule to M6 alongside the dimension sub-rule. Would cover P3 family (chain 3 user-perspective + chain 5 failure-case construction). P3 at 2 chains is below 3-chain threshold. Defer.

Probe result:

M6 effectiveness check shows M6 (with refinements) still doesn't catch chain 5's failure. Two potential refinements identified but DEFERRED to maintain conservative scope.

Confidence: HIGH for the effectiveness assessment; MEDIUM for proposing further M6 refinements (defer).

### Cycle 7 - Cross-Chain Pattern Verification

Update cross-chain pattern table:

| Pattern | Chain 1 | Chain 2 | Chain 3 | Chain 4 | Chain 5 (this) | Total |
|---|---|---|---|---|---|---|
| P1 (Sensemaking concept-stabilization without Phase 3 testing) | Constraints | Foundational Principles | SV2+ Terminology | (no instance — chain 4 was Phase 2 perspective coverage, different mechanism) | Trigger-classifier rule (Phase 5 / SV6 output) | **4** |
| P2 (Critique missing project-specific risk axis) | duplicate-derivable-state | explicit-culture-fit | operation-parsimony | phase-fit | (no new specific axis) | 4 |
| P3 (Critique prosecution-strength insufficient) | — | — | user-perspective construction | — | failure-case construction | **2** |
| P4 (Innovation Assembly Check candidate-discrimination on cosmetic variants) | — | — | 1 | — | — | 1 |
| P5 (Sensemaking Phase 2 missing perspective) | — | — | — | 1 | — | 1 |
| P6 (Innovation missing phase-conditional candidates) | — | — | — | 1 | — | 1 |
| P7 (Loop framing missing variable / proxy-test) | — | — | — | 1 (missing variable) | 1 (missing structural-vs-proxy test, related but distinct) | possibly 2 |

P1 family extension: this chain's H1 is at the trigger-classifier-rule layer. P1 family now spans 4 layers (Constraints, Foundational Principles, SV2+ Terminology, Trigger-classifier). This is actually 4 chain-instances at 4 layers (chains 1, 2, 3, 5). M6's current scope covers 3 layers; chain 5's instance is at a layer M6 does not cover. **P1 family at 4 chains across 4 layers; M6 needs another extension to reach the trigger-classifier layer.**

P3 family extension: now at 2 chains across 2 sub-types (user-perspective + failure-case construction). Below 3-chain threshold for cross-cutting promotion but trending toward it.

P7 family possible extension: chain 4's D was missing-variable (phase variable not in framing). Chain 5's D is missing-structural-vs-proxy-test (proxy adopted as if structural). Both are framing-level shortcomings but at different specific shapes. Could be read as two sub-types of a broader "framing missing structural-test" family. Conservative reading: P7 at 1 chain (chain 4 only); chain 5's framing observation is a NEW pattern P8 (framing-missing-structural-vs-proxy-test) at 1 chain.

Probe result:

P1 family extends to 4 chains across 4 layers. P3 extends to 2 chains. P7/P8 distinction (conservative reading): P7 at 1 chain; new P8 at 1 chain. P2/P4/P5/P6 do not extend.

Confidence: HIGH for P1 + P3 extensions; MEDIUM for P7-vs-P8 distinction (conservative reading adopted).

### Cycle 8 - CONCLUDE Ruled Out + Q-RF Reinforcement Check

CONCLUDE: prior `finding.md` faithfully synthesizes upstream. Same as previous chains.

Q-RF (quality-awareness gap) reinforcement check: chain 5's failure is a proxy-vs-structural cognitive gap. The prior loop couldn't distinguish a useful proxy from the actual structural dependency. Is this a quality-awareness gap?

Arguably yes — the prior's anti-bloat rule "skip for bounded local" is a quality-property heuristic that the system couldn't recognize as a proxy. Without internal Predictive RC capability, the system has no way to detect that its quality-property heuristic is actually a proxy rather than a structural distinction.

So Q-RF reinforces with a third specific instance: proxy-vs-structural distinction awareness. Chain 3 metacognitive + chain 4 calibration-awareness + chain 5 proxy-vs-structural-awareness = three specific instances of the same underlying capability gap.

Probe result:

CONCLUDE not implicated. Q-RF reinforced with third specific instance.

Confidence: HIGH for CONCLUDE; MEDIUM-HIGH for Q-RF third instance.

## Convergence Check

Frontier stability: stable. Four primary hypotheses (A, B, C, D) plus M6 effectiveness check plus cross-chain pattern verification plus Q-RF reinforcement.

Declining discovery rate: yes. Cycles 6-8 confirmed and contextualized rather than introducing new failure types.

Bounded gaps: mostly bounded. Open question: whether to propose another M6 refinement (M6-refinement-S2 to cover Phase 5 / Conceptual Stabilization output) or defer to monitoring.

## Territory Overview

Three regions:

1. **Pre-discipline framing.** Prior `_branch.md` didn't require structural-vs-proxy testing.
2. **Stage-level shortcomings.** Sensemaking proxy-as-structural-distinction (A, HIGH); Critique prosecution at insufficient depth (B, HIGH); Innovation candidate-set treated bounded inputs uniformly (C, MEDIUM-HIGH); Loop framing didn't require structural-vs-proxy test (D, MEDIUM); CONCLUDE faithful (ruled out).
3. **Cross-chain + system-level.** P1 family extends to 4 chains × 4 layers; P3 family extends to 2 chains × 2 sub-types. M6 effectiveness with refinements still doesn't cover trigger-classifier-rule layer (chain 5) or prosecution-depth (chain 5 + chain 3). Q-RF reinforced with third specific instance.

## Inventory

Confirmed shortcomings:

- A: Sensemaking adopted "bounded local Navigation" as load-bearing trigger-classifier without Phase 3 testing (P1 fourth instance, fourth layer).
- B: Critique prosecution applied Anti-staleness dimension at abstract level rather than constructing specific failure case (P3 second instance, failure-case construction sub-type).
- C: Innovation candidate set treated bounded inputs uniformly (largely inherited from A).
- D: Loop framing didn't require structural-vs-proxy testing (single-chain observation; framing partly inherited from user's prompt).

Cross-chain observations:

- **P1 family at 4 chains across 4 layers.** Trigger-classifier-rule layer not covered by M6's current shape (with refinements). Potential M6-refinement-S2 to extend coverage.
- **P3 family at 2 chains across 2 sub-types.** Below 3-chain threshold; potential cross-cutting prosecution-depth rule deferred.
- P2 stays at 4 chains. P4/P5/P6 stay at 1 chain. P7 conservative reading: 1 chain; new P8 (framing missing structural-vs-proxy test) at 1 chain.
- M6 effectiveness check #2: M6 with refinements still misses trigger-classifier-rule layer (chain 5 H1) and prosecution depth (chain 5 H2).
- Q-RF reinforced with third specific instance (proxy-vs-structural-awareness).

Considered and not supported:

- CONCLUDE compression error: not supported.

## Signal Log

- Strong: prior Sensemaking SV6 adopted bounded-vs-project-level distinction in trigger logic without Phase 3 testing.
- Strong: prior Critique prosecution against Candidate A applied Anti-staleness at abstract level only.
- Strong: prior Innovation candidate set treated bounded inputs uniformly.
- Strong: corrected loop's Phase 3 explicitly tested project-level-vs-bounded as proxy.
- Strong: P1 family extends to 4 chains × 4 layers.
- Strong: P3 family extends to 2 chains × 2 sub-types.
- Strong: M6 with refinements still doesn't cover trigger-classifier-rule layer.
- Medium: prior framing partly inherited from user's prompt (mixed attribution).
- Medium: Q-RF reinforced with third specific instance (proxy-vs-structural-awareness).
- Weak: P7-vs-P8 distinction (conservative reading: separate patterns; liberal: one P7 family at 2 chains).

## Confidence Map

Confirmed:

- A (Sensemaking proxy adoption).
- B (Critique prosecution depth).
- P1 family at 4 chains × 4 layers.
- P3 family at 2 chains × 2 sub-types.
- M6 effectiveness check #2: refinements don't cover trigger-classifier-rule layer or prosecution depth.

Scanned:

- C (Innovation candidate-set; mixed attribution).
- D (Loop framing; partly inherited from user's prompt).
- Q-RF third specific instance (proxy-vs-structural-awareness).

Inferred:

- Cascade: D → A → C → B (with B partly independent on prosecution depth).
- M6-refinement-S2 (extend to Phase 5 / Conceptual Stabilization output) is potentially justified by chain-5 P1 instance; borderline overreach from one additional chain. **Defer with monitoring note.**
- Cross-cutting prosecution-depth rule potentially justified by P3 at 2 chains; below 3-chain threshold. Defer.

Unknown:

- Whether P7 (chain 4 missing-variable) and P8 (chain 5 missing-structural-vs-proxy-test) are sub-types of the same family or distinct families.
- Whether M6 needs further refinement now or whether the pattern of M6 not catching every chain's specific surface is acceptable.

Confirmed absent:

- CONCLUDE compression error.

## Frontier State

Closed enough:

- 4 primary hypotheses (A, B, C, D) at HIGH or MEDIUM-HIGH confidence.
- 1 stage ruled out (CONCLUDE).
- P1 family at 4 chains × 4 layers; P3 family at 2 chains × 2 sub-types.
- M6 effectiveness check #2 documented.
- Q-RF reinforced with third specific instance.

Open:

- Whether to propose M6-refinement-S2 this chain or defer.
- P7-vs-P8 distinction.

## Gaps and Recommendations

Pass to Sensemaking:

- 4 primary hypotheses with HIGH or MEDIUM-HIGH confidence.
- P1 family extends to 4 chains × 4 layers; P3 extends to 2 chains × 2 sub-types.
- M6 effectiveness check #2: M6 with refinements still misses trigger-classifier-rule layer.
- New maintenance candidates this chain: S1 (Sensemaking proxy-vs-structural test for trigger-classifier rules), S2 (Critique prosecution failure-case construction rule), S3 (Innovation differential-classifier candidate generation), S7 (mark prior finding corrected; mirrors M7+N7+O7+R7), S8 (extend monitoring with M6 effectiveness check #2 + new pattern tracking).
- M6-refinement-S2 deferred (borderline overreach; revisit at chain 6 if P1 trigger-classifier instance recurs).
- Cross-cutting prosecution-depth rule deferred (P3 at 2 chains; below threshold).

Preliminary diagnostic shape:

```text
upstream-D (Loop framing didn't require structural-vs-proxy test)
  |
upstream-A (Sensemaking adopted "bounded local Navigation" as load-bearing trigger-classifier; P1 fourth instance, fourth layer)
  |
midstream-C (Innovation candidate set treated bounded inputs uniformly; largely inherited from A)
  |
downstream-B (Critique prosecution applied Anti-staleness at abstract level; P3 second instance, failure-case sub-type)
  |
verdict locked into Mandatory-Artifact-On-Operation with anti-bloat rule using bounded-as-skip
  |
trigger: human hybrid correction (metacognitive smell + structural objection)
  |
correction: corrected loop tests proxy-vs-structural; Universal Route-Memory Preflight; route-memory dependency as the actual trigger
  |
cross-chain: P1 at 4 chains × 4 layers; P3 at 2 chains × 2 sub-types; M6 effectiveness check #2 shows trigger-classifier layer not covered
  |
system-level: Q-RF reinforced with third specific instance (proxy-vs-structural-awareness)
```
