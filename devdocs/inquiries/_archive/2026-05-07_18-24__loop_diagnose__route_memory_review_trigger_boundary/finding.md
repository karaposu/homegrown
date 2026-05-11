---
status: active
analyzes:
  - devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity/finding.md
  - devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary/finding.md
related:
  - devdocs/inquiries/2026-05-06_13-19__navigation_correction_chain_failure_inventory/finding.md
  - devdocs/inquiries/2026-05-07_15-01__loop_diagnose__past_navigation_memory_index_vs_search/finding.md
  - devdocs/inquiries/2026-05-07_15-35__loop_diagnose__route_memory_review_file_necessity/finding.md
  - devdocs/inquiries/2026-05-07_16-28__loop_diagnose__route_memory_preflight_reevaluation/finding.md
  - devdocs/inquiries/2026-05-07_16-57__loop_diagnose__early_stage_always_full_route_memory_review/finding.md
impacts:
  - homegrown/sense-making/references/sensemaking.md
  - homegrown/td-critique/references/td-critique.md
  - homegrown/innovate/references/innovate.md
  - homegrown/protocols/loop_diagnose.md
  - devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity/finding.md
promotes:
  - N9 (LOOP_DIAGNOSE protocol promotion-gate documentation; deferred since chain 1): DEFERRED → ACTIONABLE per 5-finding threshold met. **First protocol-level change event in the LOOP_DIAGNOSE corpus.**
defers:
  - M6-refinement-S2 (extend M6 Sensemaking sub-rule to Phase 5 / Conceptual Stabilization output): DEFERRED with revival trigger "revive at chain 6 if P1 family extends to a 5th layer or if the trigger-classifier-rule layer pattern recurs."
---

# Finding: Loop Diagnose - Route Memory Review Trigger Boundary

## Question

If the prior `route_memory_review_file_necessity` finding (2026-05-04 evening) produced an artifact-mandatory rule with anti-bloat language *"do not run Route Memory Review for bounded local Navigation, no-prior-map contexts, or old maps that are irrelevant to the target Navigation question"*, and the user then said *"hmm, i feel like this smells, why there is a operation only when we are doing big navigation? but it is not needed when we are doing bounded one? this seperation is not natural to me. i feel like navigation is navigation. it shouldnt seperate what for"*, and the corrected `route_memory_review_trigger_boundary` finding rejected project-level vs bounded as the structural boundary and replaced it with route-memory dependency — what did the prior loop likely miss about bounded inputs that are themselves route-memory artifacts and about Navigation needing one unified context-preparation flow? *(LOOP_DIAGNOSE on this correction chain. Fifth LOOP_DIAGNOSE run; the 5-finding threshold for protocol-level changes is reached this run.)*

The goal was to identify evidence-backed failure hypotheses with confidence levels, name affected discipline or framing stages, classify shortcoming types, and produce maintenance candidates with explicit evaluation gates. Specifically: did the prior loop use project-level / broad Navigation as a proxy for the real route-memory dependency? *(Homegrown is the methodology library this repository ships. Route Memory Review is the operation that decides how prior Navigation route memory should affect a new Navigation map. The prior loop's anti-bloat rule used "bounded local Navigation" as a category that could skip review — but bounded inputs CAN be route-memory artifacts themselves, e.g., a bounded input pointing at an old `navigation.md` file.)*

## Finding Summary

- The prior loop's failure was **proxy-as-structural-distinction adoption at the trigger-classifier-rule layer**. The prior treated "bounded local Navigation" as if it were a structural distinction from "project-level Navigation"; the user's correction exposed that the real structural distinction is route-memory dependency. The prior used an incidental input property (scope) as a proxy for the actual dependency.

- Four primary failure hypotheses confirmed:

  - **Hypothesis D (Loop framing didn't require structural-vs-proxy test, MEDIUM).** Prior `_branch.md` Goal focused on artifact existence, location, and operational details; did not require the loop to test whether the proposed trigger uses incidental properties as proxies. Observation-only; no S-candidate (partly inherited from user's prompt phrasing).

  - **Hypothesis A (Sensemaking adopted "bounded local Navigation" as load-bearing trigger-classifier without Phase 3 testing, HIGH).** Phase 5 / Conceptual Stabilization output adopted a categorical distinction (bounded vs project-level) without testing whether the categories represent structural dependence. **P1 family fourth instance at the trigger-classifier-rule layer (Phase 5 / Conceptual Stabilization output) — distinct from previous P1 layers (Constraints / Foundational Principles / SV2+ Terminology).**

  - **Hypothesis C (Innovation candidate set treated bounded inputs uniformly, MEDIUM-HIGH).** Largely inherited from A.

  - **Hypothesis B (Critique prosecution applied Anti-staleness at abstract level, HIGH).** The dimension was present (weight 5) but the prosecution didn't construct the specific failure case "bounded input that IS a route-memory artifact." **P3 family second instance (failure-case construction sub-type, sister to chain 3's user-perspective construction sub-type).**

- **CONCLUDE ruled out.** Faithful synthesis; phase-blindness at the trigger-classifier layer was inherited from upstream.

- **Cross-chain pattern P1 family extends to 4 chains × 4 layers.** Constraints (chain 1) / Foundational Principles (chain 2) / SV2+ Terminology (chain 3) / Trigger-classifier rule at Phase 5 / Conceptual Stabilization output (chain 5, this run). Strongest cross-chain claim by layer count.

- **M6 effectiveness check #2.** M6 was promoted in chain 3; chain 4 added M6-refinement-S (extend to Phase 2) and M6-refinement-C (tighten Critique sub-rule wording). Chain 5's prior loop pre-dates all M6 events. Effectiveness check shows M6 with chain-4 refinements would NOT have caught chain 5's failure: the trigger-classifier-rule layer (Phase 5 / Conceptual Stabilization output) is not covered by M6's current rule shape.

- **M6-refinement-S2 DEFERRED.** Extending M6's Sensemaking sub-rule to also cover Phase 5 / Conceptual Stabilization output is mechanically supportable but cumulative. M6 has been refined twice in chain 4; a third refinement from chain 5 alone is borderline overreach. **Conservative deferral with revival trigger:** revive at chain 6 if P1 family extends to a 5th layer or if the trigger-classifier-rule layer pattern recurs. The cumulative refinement burden suggests possible rule-shape consolidation at chain 7+ (e.g., consolidate M6's Sensemaking sub-rule to "any load-bearing concept stabilized in any Sensemaking output").

- **N9 PROMOTION** — first protocol-level change event in the LOOP_DIAGNOSE corpus. N9 (LOOP_DIAGNOSE protocol promotion-gate documentation) was deferred since chain 1 with revival language *"revive when at least one cross-chain pattern reaches 3+ chains AND the promotion decision needs explicit protocol guidance."* Both conditions are now met: P1 + P2 each at 4 chains; M6 promotion + 2 refinements + ongoing refinement-pattern observations provide rich corpus material requiring explicit protocol guidance. **5-finding threshold met (this is finding 5).** Promote with small-scope codification (one-paragraph addition to `homegrown/protocols/loop_diagnose.md` Step 6 documenting cross-chain pattern promotion gate) plus explicit chain-7-10 revisit gate.

- New 1-chain pattern: **P8** (Loop framing missing structural-vs-proxy test) at 1 chain. Distinct from chain 4's P7 (framing missing variable). P5/P6 stay at 1 chain. P4 stays at 1 chain.

- **System-level Q-RF reinforced with third specific instance.** Three instances across three chains: chain 3 metacognitive ("feels messy") / chain 4 calibration-awareness ("can't judge material effect when uncalibrated") / chain 5 proxy-vs-structural-awareness ("can't distinguish proxy from structural distinction"). Per `enes/desc.md`, Predictive RC architecture is the structural answer. Q-RF stays Research Frontier — multi-phase architectural work; out of scope for per-paragraph patches.

- Five per-chain ACTIONABLE candidates: S1 (Sensemaking proxy-vs-structural test for trigger-classifier rules; P1 fourth instance), S2 (Critique prosecution failure-case construction; sister to O3; single-chain caveat), S3 (Innovation differential-classifier candidate generation), S7 (mark prior finding corrected; mirrors M7+N7+O7+R7), S8 (extend M8+N8+O8+R8 monitoring with M6 cumulative refinement frequency + P1 4-layer + P3 2-sub-type + signal-type + corpus-level tracks). Plus N9 PROMOTION (protocol-level event). Plus M6-refinement-S2 DEFERRED. Plus Q-RF Reinforcement.

- **Notable corpus-level observations:**
  - Chain 5's prior IS chain 2's corrected (`route_memory_review_file_necessity`); chain 5's corrected IS chain 3's prior (`route_memory_review_trigger_boundary`). Second corpus-level instance of the "same artifact serves as corrected in one chain and prior in another" pattern (chain 4 was first).
  - Five distinct user-signal expression styles observed across five chains: content-level (chain 1) / cultural-norm-level (chain 2) / metacognitive (chain 3) / phase-priority (chain 4) / hybrid metacognitive-plus-structural (chain 5).
  - Five-chain corpus is now sufficient for first protocol-level change (N9 promotion).

- The diagnostic verdict is **ACTIONABLE-PARTIAL**. Five per-chain ACTIONABLE candidates plus N9 PROMOTION (first protocol-level change event) plus M6-refinement-S2 DEFERRED plus Q-RF Research Frontier reinforcement.

## Finding

### Context (why this diagnosis matters)

This is the fifth LOOP_DIAGNOSE run. The 5-finding lower bound for protocol-level changes per LOOP_DIAGNOSE Step 6 is reached this run. With M6 promotion (chain 3), 2 M6 refinements (chain 4), and N9 promotion (chain 5), the LOOP_DIAGNOSE corpus has accumulated three rule-evolution events. The diagnostic system is itself maturing.

Three notable corpus developments occur in this run:

**First**, P1 family extends to 4 chains × 4 layers. Critically, chain 5's P1 instance is at the trigger-classifier-rule layer (Phase 5 / Conceptual Stabilization output) — a layer NOT covered by M6's current shape (with chain-4 refinements). M6 effectiveness check #2 documents this gap. M6-refinement-S2 (extend to Phase 5) is mechanically supportable but cumulative; conservative deferral with chain-6 revival trigger.

**Second**, N9 promotion is mechanically triggered. The previous deferral language was met by chain 5: P1 + P2 each at 4 chains; M6 promotion + refinement pattern + N9 promotion event all benefit from explicit protocol guidance. Small-scope codification with chain-7-10-revisit gate.

**Third**, the corpus-level pattern stabilizes. Chain 5's prior is chain 2's corrected; chain 5's corrected is chain 3's prior. This is the second instance of the "same artifact serves as corrected in one chain and prior in another" pattern (chain 4 was first). The LOOP_DIAGNOSE corpus's correction-chain graph has interconnected artifacts, suggesting that systematic prompt execution (running all inventory prompts) creates a richer cross-chain structure than running prompts in isolation.

### Correction Chain Summary

- **Prior path:** `devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity/`
- **Corrected path:** `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary/`
- **Human correction (verbatim):**
  ```text
  $MVL+

  Route Memory Review should run only when old Navigation maps might affect the next Navigation map.

  [prior answer omitted for brevity]

  hmm, i feel like this smells, why there is a operation only when we are doing big navigation? but it is not needed when we are doing bounded one? this seperation is not natural to me. i feel like navigation is navigation. it shouldnt seperate what for..  maybe i am wrong?
  ```
- **Signal type:** **hybrid metacognitive + structural objection.** Fifth distinct expression style across the LOOP_DIAGNOSE corpus.
- **Corpus-level observations:**
  - Chain 5's prior IS chain 2's corrected.
  - Chain 5's corrected IS chain 3's prior.
  - Second instance of "same artifact serves both roles" pattern (chain 4 was first).
- **What changed:** the prior recommended *artifact-mandatory rule with anti-bloat skip for "bounded local Navigation, no-prior-map contexts, or old maps that are irrelevant"*. The corrected replaced "project-level vs bounded" with *"route-memory dependency: every Navigation run performs a cheap Route-Memory Preflight; full Route Memory Review runs when a relevant `PastNavigationMemoryFile` exists"* — single unified flow, structural dependency as trigger.

### Failure Hypotheses

#### Hypothesis A: Sensemaking Adopted Proxy As Structural Distinction (P1 Fourth Instance, Fourth Layer)

**Affected stage:** Sensemaking. **Position:** primary upstream cause (downstream of D framing).

**Shortcoming type:** Phase 5 / Conceptual Stabilization output adopted "bounded local Navigation" / "project-level Navigation" as a categorical distinction without testing whether the categories represent structural dependence. **NEW Sensemaking layer in the P1 family** (distinct from chains 1-3 layers: Constraints, Foundational Principles, SV2+ Terminology).

**Evidence from prior inquiry:** Prior `docarchive/sensemaking.md` SV6 stabilized the operation-mandatory + trigger-policy-controlled-bloat model. The prior `finding.md` Section 1 made the trigger explicit: *"Do not run Route Memory Review for bounded local Navigation, no-prior-map contexts, or old maps that are irrelevant to the target Navigation question."* This is the load-bearing trigger-classifier rule. The prior Phase 3 / Ambiguity Collapse tested artifact existence (Ambiguity 1: every Navigation run?), output mode (Ambiguity 2: inline allowed?), and storage location (Ambiguity 3: where should the file live?). None tested whether "bounded local Navigation" is structurally meaningful.

**Evidence from human correction:** *"this seperation is not natural to me. i feel like navigation is navigation. it shouldnt seperate what for"* — directly names the proxy-vs-structural concern.

**Evidence from corrected inquiry:** Corrected `docarchive/sensemaking.md` SV4: *"The user is right that 'big vs bounded' smells. It is not the right abstraction. Navigation should always ask the same route-memory question, then route based on source dependency."* Phase 3 / Ambiguity 1 in the corrected explicitly tested the proxy and concluded: *"every Navigation run records route-memory status; full Route Memory Review is dependency-triggered."*

**Confidence:** HIGH.

**Why not stronger:** A is downstream of D (framing) in causal order; some attribution to framing is real. The independent component is observable in the prior's Phase 3 absence.

**Maintenance candidate:** S1 — Add a one-paragraph rule to `homegrown/sense-making/references/sensemaking.md` Phase 5 / Conceptual Stabilization section: when Sensemaking produces a trigger-classifier rule using categorical labels (bounded vs project-level, small vs large, etc.), test whether the classifier uses incidental input properties as proxies for the actual structural dependency. The test: replace the classifier's category labels with their underlying structural property — if the rule still makes sense, the classifier was structurally accurate; if it doesn't, the classifier was a proxy.

**Evaluation gate:** in next 3 MVL+ runs producing trigger-classifier rules, the test is applied. If zero of three runs apply the test, downgrade to monitoring.

#### Hypothesis B: Critique Prosecution Applied Anti-Staleness At Abstract Level (P3 Family Second Instance)

**Affected stage:** Critique. **Attribution:** mixed (partly independent prosecution depth; partly inherited candidate set).

**Shortcoming type:** Critique's Anti-staleness dimension (weight 5) was present, but the prosecution didn't construct the specific failure case where the candidate's anti-bloat rule could allow stale routes through. **Sister to chain 3's O3 (user-perspective prosecution check); P3 family second instance at the failure-case construction sub-type.**

**Evidence from prior inquiry:** Prior `docarchive/critique.md` dimensions list (Explicitness fit 5 / Anti-staleness 5 / Historical integrity 5 / Anti-bloat 4 / Automation readiness 4 / Actionability 4 / Coherence 4). Verdict on Candidate A (Mandatory Artifact On Operation):
- Prosecution: *"Could still create many files if old route memory is checked too often."*
- Defense: *"The candidate moves bloat control to the correct layer: trigger policy. It preserves explicitness and avoids invisible route-memory state."*
- Collision: defense wins.

The prosecution focused on artifact volume but did not construct: *"What if the trigger policy's anti-bloat rule uses incidental input properties (e.g., bounded scope) as proxies, allowing stale routes to influence Navigation invisibly when the bounded input IS an old route-memory artifact?"*

**Evidence from corrected inquiry:** Corrected `docarchive/critique.md` constructed the specific failure case: *"A bounded input can itself be route memory."* This drove the rejection of project-level vs bounded as the trigger.

**Confidence:** HIGH.

**Why not stronger:** Mixed attribution. Even with the missing prosecution, the candidate set (Innovation) bounded what Critique could test.

**Maintenance candidate:** S2 — Add a one-paragraph rule to `homegrown/td-critique/references/td-critique.md` (Phase 2 / Adversarial Evaluation section): when constructing prosecution against trigger-policy candidates, in addition to addressing user-stated concerns from `_branch.md` Source Input (per O3), explicitly construct at least one specific failure-case scenario where the candidate's classifier might allow the failure mode the candidate is supposed to prevent. **Sister rule to O3 (chain 3 user-perspective check); together cover prosecution-depth at two sub-types.**

**Evaluation gate:** in next 3 Critique runs against trigger-policy candidates, at least one failure-case scenario is constructed. **Single-chain caveat (P3 second sub-type at 1 chain); revisit if not effective in next 3 runs.**

#### Hypothesis C: Innovation Candidate Set Treated Bounded Inputs Uniformly

**Affected stage:** Innovation. **Attribution:** mixed (largely inherited from A).

**Shortcoming type:** Innovation candidate space addressed output mode (inline / saved / no-op / embedded) and trigger policy (operation-runs / always-runs) but did not generate a candidate that explicitly handled bounded-input-as-route-memory-artifact as a special case.

**Evidence from prior inquiry:** Prior `docarchive/innovation.md` Candidate Set: A (Mandatory Artifact On Operation, SURVIVE) / B (Inline Default, KILL) / C (Always Generate, KILL) / D (Store Review Inside Navigation Map, REFINE) / E (Navigation Context Folder Artifact, SURVIVE combined with A). The surviving Candidate A's anti-bloat rule treats bounded inputs as a homogeneous skip category.

**Evidence from corrected inquiry:** Corrected loop's Innovation Candidate C "Universal Route-Memory Preflight, Conditional Review" explicitly handles the bounded-as-route-memory case via universal preflight applied regardless of scope.

**Confidence:** MEDIUM-HIGH (mixed attribution).

**Why not stronger:** Largely inherited from A.

**Maintenance candidate:** S3 — Add a one-paragraph rule to `homegrown/innovate/references/innovate.md` (Candidate Set / Assembly Check section): when Innovation generates trigger-policy candidates, generate at least one variant that uses a structural-dependency classifier (e.g., "does this run depend on prior route memory?") instead of an input-property classifier (e.g., "is this run bounded vs project-level?"). The two candidate types should be tested against each other in the Test phase.

**Evaluation gate:** in next 3 Innovation runs producing trigger-policy candidates, at least one structural-dependency-classifier variant is generated.

#### Hypothesis D: Loop Framing Didn't Require Structural-vs-Proxy Test (Observation-Only)

**Affected stage:** loop framing. **Position:** upstream observation; observation-only (no S-candidate).

**Shortcoming type:** Prior `_branch.md` Question and Goal didn't require the loop to test whether the proposed trigger uses incidental properties as proxies. **NEW pattern P8 (framing missing structural-vs-proxy test) at 1 chain; distinct from chain 4's P7 (framing missing variable).**

**Evidence from prior inquiry:** Prior `_branch.md` Goal focused on artifact existence ("decide whether the file is necessary"), location, structure, trigger conditions, timing. No requirement to test trigger structure for proxy adoption.

**Evidence from corrected inquiry:** Corrected `_branch.md` Question explicitly poses the structural-vs-proxy framing: *"Is it natural for Route Memory Review to run only for 'big' or project-level Navigation, or should Navigation always include a route-memory check regardless of whether the input is bounded or broad?"*

**Confidence:** MEDIUM (one inferential step; framing partly inherited from user's prompt phrasing).

**Why not stronger:** Single-chain observation. Different sub-pattern from chain 4's P7 (missing variable). P8 family at 1 chain.

**Maintenance candidate:** None new in this run. Observation tracked at S8 monitoring; if 3+ chains show P8 specifically, a new framing-related candidate may be justified.

#### Hypothesis CONCLUDE: Ruled Out

**Affected stage:** CONCLUDE. **Position:** ruled out.

**Evidence:** Prior `finding.md` faithfully synthesizes upstream pipeline output. Same as previous four LOOP_DIAGNOSE chains.

**Confidence:** confirmed not-implicated.

### Cross-Chain Pattern Observations And M6 Effectiveness Check #2

#### Pattern P1 — Sensemaking Adopting Load-Bearing Concept Without Phase 3 Testing

| Chain | Layer |
|---|---|
| 1 | Phase 1 / Constraints |
| 2 | Phase 1 / Foundational Principles |
| 3 | SV2+ Terminology |
| 4 | (no instance — chain 4 was Phase 2 / Perspective Checking, different mechanism) |
| 5 (this run) | Phase 5 / Conceptual Stabilization output (trigger-classifier rule) |

**Now at 4 chains × 4 layers. Strongest cross-chain claim by layer count across the LOOP_DIAGNOSE corpus.**

#### Pattern P2 — Critique Dimension List Missing Project-Specific Risk Axis

Stays at 4 chains × 4 specific axes (chain 5 didn't add a new specific axis; the prior critique already had Anti-staleness as a relevant dimension — the failure was prosecution depth, not dimension list).

#### Pattern P3 — Critique Prosecution-Strength Insufficient

| Chain | Sub-type |
|---|---|
| 3 | user-perspective construction |
| 5 (this run) | failure-case construction |

**Now at 2 chains × 2 sub-types.** Below 3-chain threshold for cross-cutting consolidation; per-chain candidates O3 + S2 remain valid. Trending toward cross-cutting at chain 6 if pattern recurs.

#### Pattern P4, P5, P6, P7, P8

P4 (Innovation Assembly Check candidate-discrimination on cosmetic variants): stays at 1 chain.
P5 (Sensemaking Phase 2 missing perspective): stays at 1 chain.
P6 (Innovation missing phase-conditional candidates): stays at 1 chain.
P7 (Loop framing missing variable): stays at 1 chain.
**P8 (Loop framing missing structural-vs-proxy test): NEW at 1 chain.** Distinct from P7 (different mechanism).

#### M6 Effectiveness Check #2

M6 was promoted in chain 3. Chain 4 added M6-refinement-S (extend Sensemaking sub-rule to Phase 2 / Perspective Checking) and M6-refinement-C (tighten Critique sub-rule wording). Chain 5's prior loop pre-dates all M6 events.

**Effectiveness check assesses whether M6 with chain-4 refinements would have caught chain 5's failure:**

- M6's Sensemaking sub-rule (with refinement-S) covers Phase 1 / Constraints + Phase 1 / Foundational Principles + SV2+ Terminology + Phase 2 / Perspective Checking. Chain 5's H1 is at **Phase 5 / Conceptual Stabilization output (trigger-classifier rule)** — NOT covered.
- M6's Critique sub-rule (with refinement-C) addresses dimension-list completeness. Chain 5's H2 is about prosecution depth — NOT covered (P3 family is a separate cross-chain pattern).

**Conclusion:** M6 with chain-4 refinements would NOT have caught chain 5's failure.

#### M6-refinement-S2 — DEFERRED

Refining M6's Sensemaking sub-rule from (current state with refinement-S) to also cover Phase 5 / Conceptual Stabilization output is mechanically supportable but cumulative.

**Conservative deferral with revival trigger:** revive at chain 6 if P1 family extends to a 5th layer or if the trigger-classifier-rule layer pattern recurs.

The cumulative M6 refinement burden (chain 4 added 2; chain 5 deferred 1) suggests possible rule-shape consolidation at chain 7+. If the pattern continues, M6's Sensemaking sub-rule may be consolidated to a broader principle: *"any load-bearing concept stabilized in any Sensemaking output, anywhere in the SV1-SV6 progression, should have at least one Phase 3 ambiguity-collapse pair testing it."*

### N9 PROMOTION (First Protocol-Level Change Event In LOOP_DIAGNOSE Corpus)

N9 (LOOP_DIAGNOSE protocol promotion-gate documentation) was deferred since chain 1 with revival language: *"revive when at least one cross-chain pattern reaches 3+ chains AND the promotion decision needs explicit protocol guidance."*

Both conditions are met:
- P1 family at 4 chains × 4 layers (well above the 3-chain threshold).
- P2 family at 4 chains × 4 specific axes.
- M6 promotion (chain 3) + 2 refinements (chain 4) + cumulative refinement pattern (chain 5) + N9's own promotion event provide rich corpus material requiring explicit protocol guidance.

**LOOP_DIAGNOSE Step 6 5-finding threshold met (this is finding 5).**

**Promotion scope (small):** Add a one-paragraph note to `homegrown/protocols/loop_diagnose.md` Step 6 (or as a sibling section) documenting the cross-chain pattern promotion gate explicitly:

```text
Cross-chain pattern promotion gates:
- 1 chain instance: pattern enters Monitoring tier with explicit revival trigger.
- 3+ chain instances: cross-cutting candidate becomes ACTIONABLE per its specific revival trigger language.
- 5-10 chain corpus: protocol-level changes to LOOP_DIAGNOSE itself become plausible.
- Cumulative refinement frequency: if a recently-promoted ACTIONABLE rule (e.g., M6) requires refinement at multiple successive chains, consolidate the rule shape rather than continuing to refine.

LOOP_DIAGNOSE protocol changes (e.g., this Step 6 note, future protocol-level codifications) are themselves subject to the 5-10 finding gate. As of this finding (chain 5), the lower bound is met; protocol changes are documented with explicit "revisit at chain 7-10" gates.
```

**This is the first protocol-level change event in the LOOP_DIAGNOSE corpus.**

### Q-RF Reinforcement (System-Level Research Frontier)

Three specific instances across three chains:
- Chain 3: metacognitive ("feels messy") — system can't detect when its own output feels not-clean.
- Chain 4: calibration-awareness — system can't detect when its own rule depends on calibration the system does not have.
- Chain 5: proxy-vs-structural-awareness — system can't distinguish proxy from structural distinction.

Same underlying capability gap; three specific instances. Per `enes/desc.md`, Predictive RC implementation is the structural answer; multi-phase architectural work; out of scope for per-paragraph patches. Q-RF stays Research Frontier.

### Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence | Confidence | Candidate action |
|---|---|---:|---:|---|
| Sensemaking (A) | Phase 5 / Conceptual Stabilization output adopted proxy ("bounded local Navigation") as structural distinction; **P1 fourth instance, fourth layer** | strong | HIGH | S1 — proxy-vs-structural test |
| Innovation (C) | Candidate set treated bounded inputs uniformly (largely inherited from A) | medium | MEDIUM-HIGH | S3 — differential-classifier candidate generation |
| Critique (B) | Prosecution applied Anti-staleness at abstract level; **P3 second instance** (failure-case construction sub-type) | strong | HIGH | S2 — failure-case construction (sister to O3; single-chain caveat) |
| Loop framing (D) | Missing structural-vs-proxy test; **P8 NEW at 1 chain** | medium | MEDIUM | observation-only; tracked at S8 |
| CONCLUDE | (considered) faithful synthesis | n/a | n/a | none |
| Cross-chain (P1) | 4 chains × 4 layers | strong | HIGH × 4 chains | M6 still ACTIONABLE with chain-4 refinements; **M6-refinement-S2 DEFERRED** |
| Cross-chain (P2) | Stays at 4 chains | strong | HIGH × 4 chains | M3+N4+O2+R2 family stable |
| Cross-chain (P3) | 2 chains × 2 sub-types | strong | HIGH × 2 chains | per-chain rules O3+S2 valid; cross-cutting at 3+ chains |
| Cross-chain (P4-P8) | Each at 1 chain | strong per chain | HIGH × 1 chain | Monitoring tier |
| **Protocol-level** | **5-finding threshold met; N9 deferred-state revival language met** | **strong** | **HIGH** | **N9 PROMOTION (first protocol-level change event)** |
| System-level (Q-RF) | Quality-awareness gap third specific instance (proxy-vs-structural-awareness) | medium-high | system-level | **Research Frontier (Open Questions)** — NOT a candidate |

The dominant cascade is D → A → C → B. **N9 promotion** is the strongest cross-chain claim and the first protocol-level change event in the LOOP_DIAGNOSE corpus.

## Next Actions

### MUST

- **What:** Add a one-paragraph proxy-vs-structural test rule to `homegrown/sense-making/references/sensemaking.md` Phase 5 / Conceptual Stabilization section. When Sensemaking produces a trigger-classifier rule using categorical labels (bounded vs project-level, small vs large, etc.), test whether the classifier uses incidental input properties as proxies for the actual structural dependency.
  **Who:** Sensemaking discipline maintainer. (S1; P1 fourth instance, fourth layer)
  **Gate:** observable — in next 3 MVL+ runs producing trigger-classifier rules, the test is applied.
  **Why:** Targets H1 at the new Sensemaking surface (Phase 5 / Conceptual Stabilization). P1 fourth instance at fourth layer supports the rule shape.

- **What:** Add a one-paragraph prosecution failure-case construction rule to `homegrown/td-critique/references/td-critique.md` (Phase 2 / Adversarial Evaluation section). When constructing prosecution against trigger-policy candidates, in addition to addressing user-stated concerns from `_branch.md` (per O3), explicitly construct at least one specific failure-case scenario where the candidate's classifier might allow the failure mode the candidate is supposed to prevent. Sister rule to O3.
  **Who:** Critique discipline maintainer. (S2; sister to O3)
  **Gate:** observable — in next 3 Critique runs against trigger-policy candidates, at least one failure-case scenario is constructed. **Single-chain caveat (P3 second sub-type at 1 chain); revisit if not effective in next 3 runs.**
  **Why:** Targets H2 (P3 family second instance). Pairs with O3 to cover prosecution-depth at two sub-types.

- **What:** Add a one-paragraph differential-classifier candidate generation rule to `homegrown/innovate/references/innovate.md` (Candidate Set / Assembly Check section). When Innovation generates trigger-policy candidates, generate at least one variant that uses a structural-dependency classifier instead of an input-property classifier.
  **Who:** Innovation discipline maintainer. (S3)
  **Gate:** observable — in next 3 Innovation runs producing trigger-policy candidates, at least one structural-dependency-classifier variant is generated.
  **Why:** Targets H3. New Innovation surface; orthogonal to N3 (operation-storage axis decoupling) and R3 (phase-conditional candidates).

- **What:** Annotate the prior `devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity/finding.md` with reciprocal supersession: add `corrected_by: devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary/finding.md` to frontmatter. Add a top-level Status note.
  **Who:** Inquiry maintainer (single-edit content cleanup). (S7; mirrors M7+N7+O7+R7)
  **Gate:** verifiable by single read.
  **Why:** Mirrors M7+N7+O7+R7 pattern; consistency across diagnostic chains.

- **What:** Continue M8+N8+O8+R8 monitoring (next 3 normal MVL+ runs) and add (a) M6 cumulative refinement frequency tracking; (b) P1 4-layer tracking (chain-5 trigger-classifier layer not covered); (c) P3 2-sub-type tracking (cross-cutting promotion at 3+ chains); (d) signal-type observation (5 distinct expression styles so far); (e) corpus-level pattern (chain N's prior = chain M's corrected); (f) M6 consolidation review trigger at chain 7+.
  **Who:** User during normal MVL+ runs and future LOOP_DIAGNOSE runs. (S8)
  **Gate:** observable — at chain 6 completion, document tracks.
  **Why:** Provides cross-chain promotion gate AND M6 evolution tracking AND N9 protocol-level revisit gate.

- **PROMOTE: N9 (LOOP_DIAGNOSE protocol promotion-gate documentation; FIRST protocol-level change event in LOOP_DIAGNOSE corpus).** Add a one-paragraph note to `homegrown/protocols/loop_diagnose.md` Step 6 (or sibling section) documenting cross-chain pattern promotion gates explicitly. Small-scope codification.
  **Who:** LOOP_DIAGNOSE protocol maintainer.
  **Gate:** verifiable by single read; **revisit codification at chain 7-10 to validate gate language.**
  **Why:** Previous deferral language met (P1+P2 each at 4 chains; M6 promotion + refinements provide explicit-protocol-guidance material). 5-finding threshold met. First protocol-level change event in the LOOP_DIAGNOSE corpus.

### COULD

- **What:** When the corrected route-memory dependency model is patched into `homegrown/navigation/SKILL.md` per the corrected finding's Next Actions, cross-link this diagnostic finding from the patch's commit message. With five LOOP_DIAGNOSE findings in the corpus, the linked corrective trail has five instances.
  **Who:** Implementer of the navigation patch.
  **Why:** Builds the corpus of linked correction → diagnostic → fix triples; LOOP_DIAGNOSE Step 6 5-finding threshold reached.

### DEFERRED

- **M6-refinement-S2** (extend M6 Sensemaking sub-rule to Phase 5 / Conceptual Stabilization output). Gate: revive at chain 6 if P1 family extends to a 5th layer or if the trigger-classifier-rule layer pattern recurs. Why if revived: covers the new Sensemaking layer surfaced this chain.
- **M6 consolidation review** (consolidate Sensemaking sub-rule to "any load-bearing concept stabilized in any Sensemaking output" rather than enumerating specific layers). Gate: revisit at chain 7+ if cumulative M6 refinement frequency continues. Why if revived: cumulative refinement burden suggests rule-shape consolidation may be more sustainable than piecemeal layer-by-layer extensions.
- **Cross-cutting prosecution-depth rule (combining O3 + S2)**. Gate: revive at 3+ chains for P3 family. Why if revived: pattern recurrence across three chains justifies a unified rule.
- Previous M4, M5, M9, N5, N6, O3-overlap, O4, O5/O6, R4 — gates unchanged.
- New patterns P5, P6, P7, P8 at 1 chain — gate: 3+ chains for cross-cutting candidate.

## Reasoning

### Why this answer over the alternatives

Process-level framing. Two structurally distinct framings:

- **Content-level.** "Project-level vs bounded was wrong; route-memory dependency is right." Rejected per LOOP_DIAGNOSE Step 5.
- **Process-level.** "The prior loop's reasoning broke at four specific surfaces (Phase 5 trigger-classifier, prosecution depth, candidate-set blind spot, framing missing structural-vs-proxy test)." Adopted.

### Why A is at the trigger-classifier-rule layer (Phase 5 / Conceptual Stabilization) rather than M1+N2+O1+R1 family

A is observable in the prior's Phase 5 / Conceptual Stabilization output (the anti-bloat rule). M1+N2+O1+R1 cover Phase 1 / Constraints, Phase 1 / Foundational Principles, SV2+ Terminology, Phase 2 / Perspective Checking. The trigger-classifier-rule layer is structurally distinct (Phase 5 / final-output concept stabilization). M6 effectiveness check #2 confirms M6's current shape doesn't cover this layer.

### Why M6-refinement-S2 is deferred

M6 has been refined twice in chain 4. A third refinement from chain 5 alone is cumulative overreach despite being mechanically supportable. The pattern of "M6 needs refinement at each new chain's specific surface" suggests possible rule-shape consolidation at chain 7+ rather than continuing piecemeal refinements. Conservative deferral with chain-6 revival trigger respects the cumulative-refinement-burden concern while preserving the option to refine if the pattern recurs.

### Why N9 promotion is mechanically valid at chain 5

The previous deferral language was: *"revive when at least one cross-chain pattern reaches 3+ chains AND the promotion decision needs explicit protocol guidance."* P1 + P2 each at 4 chains exceed the 3-chain threshold. M6 promotion + 2 refinements + cumulative refinement pattern provide rich corpus material requiring explicit protocol guidance. Both conditions met. The 5-10 finding range is a window; chain 5 is the lower bound. Small-scope codification + chain-7-10-revisit gate mitigate lower-bound-promotion risk.

### Why P3 family extension to 2 chains × 2 sub-types is below the 3-chain threshold for cross-cutting promotion

P3 family conservatively counted as 2 chain-instances at 2 sub-types (chain 3 user-perspective + chain 5 failure-case). Cross-cutting consolidation requires 3+ chain instances per established LOOP_DIAGNOSE convention. Per-chain rules O3 + S2 remain valid and complementary; consolidation deferred to chain 6 if pattern recurs.

### Why D (framing missing structural-vs-proxy test) is observation-only

Single-chain observation. Distinct from chain 4's P7 (framing missing variable) — different mechanism (missing-test vs missing-variable). At 1 chain each, both stay Monitoring tier. If 3+ chains show P8 specifically, a new framing-related candidate may be justified.

### Reconciliation across the five disciplines of this diagnostic

All five outputs agree on cascade D → A → C → B + N9 promotion event + M6-refinement-S2 deferral + Q-RF reinforcement. No contradictions.

### How this finding relates to upstream context

Inventory inquiry's Failure Inventory row 3 (project-level vs bounded trigger): HIGH confidence observation. Inventory's Recommended Run Order ranked this chain fifth (project-level trigger diagnostic). This diagnostic's results consistent with the inventory's row 3.

The previous four LOOP_DIAGNOSE findings established the cross-chain pattern infrastructure (M6 promotion + refinements) and the compositional candidate scheme (M-N-O-R). This run executes the first protocol-level change event (N9 promotion) and surfaces the first M6 cumulative-refinement-burden observation (M6-refinement-S2 deferral).

## Open Questions

### Monitoring

- After S1, S2, S3, S7 land and the next 3 MVL+ runs complete, observe whether the gates fire as predicted.
- Continue cross-chain observation: when the 6th LOOP_DIAGNOSE run completes, document P1-P8 chain count and assess M6 cumulative refinement frequency. M6-refinement-S2 revival trigger fires if P1 family extends to a 5th layer or if the trigger-classifier-rule layer pattern recurs.
- N9 protocol-level codification: revisit at chain 7-10 to validate the gate language (especially around 5-10-finding threshold and cumulative-refinement-consolidation policy).
- Signal-type observation: 5 distinct expression styles observed across 5 chains. Track for future style emergence.
- Corpus-level pattern: 2 instances of "chain N's prior = chain M's corrected" so far. Track for stability or evolution.

### Blocked

- LOOP_DIAGNOSE protocol-level changes beyond N9 codification require further accumulation. Chain 5 reached 5-finding lower bound; the 5-10 window allows additional codifications as evidence accumulates.
- Predictive RC implementation requires multi-phase architectural work per `enes/desc.md`; out of scope for per-paragraph patches.

### Research Frontiers

- **Q-RF Reinforcement** (quality-awareness gap, third specific instance: proxy-vs-structural-awareness). Three instances across three chains of the same underlying capability gap. Per `enes/desc.md`, Predictive RC implementation is the structural answer.
- Whether new pattern P8 will recur in future LOOP_DIAGNOSE runs.
- Whether M6's rule shape needs consolidation at chain 7+ given cumulative refinement burden.
- Whether the LOOP_DIAGNOSE corpus's correction-chain graph (chain N's prior = chain M's corrected, etc.) reveals additional cross-chain structures useful for diagnosis.

### Refinement Triggers

- Re-open M6-refinement-S2 at chain 6 if P1 family extends to a 5th layer.
- Re-open M6 consolidation review at chain 7+ if cumulative refinement frequency continues.
- Re-open S2 if not effective in next 3 runs OR if the next LOOP_DIAGNOSE run does not show another P3 instance.
- Re-open N9 codification at chain 7-10 to validate gate language.
- Re-open the LOOP_DIAGNOSE Step 6 5-10-finding threshold if rule-evolution events accumulate faster than expected.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity

corrected_path:
devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary

human_correction:
The user said the model smelled because it seemed to make Route Memory Review run for big or project-level Navigation but not bounded Navigation, even though Navigation should be Navigation regardless of scale.

optional_context:
The prior inquiry focused on whether `route_memory_review.md` should be generated and used trigger examples such as bounded local Navigation and old maps that matter. The corrected inquiry rejected project-level versus bounded as the structural boundary and replaced it with route-memory dependency.

diagnostic_goal:
Identify whether the prior loop used project-level or broad Navigation as a proxy for the real dependency. Diagnose what it missed about bounded inputs that are themselves route-memory artifacts, and about Navigation needing one unified context-preparation flow. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
```

</details>

## Diagnostic Verdict

**Overall:** ACTIONABLE-PARTIAL.

- **Best-supported diagnosis:** Proxy-as-structural-distinction adoption at the trigger-classifier-rule layer. The cascade D (framing missing structural-vs-proxy test) → A (Sensemaking adopted "bounded local Navigation" as load-bearing trigger-classifier; **P1 fourth instance, fourth layer**) → C (Innovation candidate set treated bounded inputs uniformly) → B (Critique prosecution applied Anti-staleness at abstract level; **P3 second instance**, failure-case construction sub-type). CONCLUDE was faithful and is ruled out.

- **Strongest cross-chain claim by layer count:** P1 family at 4 chains × 4 layers (Constraints, Foundational Principles, SV2+ Terminology, Trigger-classifier rule).

- **Strongest protocol-level event:** **N9 PROMOTION** (LOOP_DIAGNOSE protocol promotion-gate documentation). **First protocol-level change event in the LOOP_DIAGNOSE corpus.** 5-finding threshold met; previous deferral conditions met.

- **Strongest per-chain candidate:** S1 (Sensemaking proxy-vs-structural test for trigger-classifier rules; P1 fourth instance at fourth layer).

- **Main uncertainties:**
  - M6-refinement-S2 deferral: cumulative refinement burden suggests possible rule-shape consolidation at chain 7+; deferral with chain-6 revival trigger respects this.
  - S2 single-chain caveat (P3 second sub-type at 1 chain).
  - N9 lower-bound promotion at 5 findings: mitigated by small-scope codification + chain-7-10-revisit gate.
  - Q-RF system-level gap: three reinforcing instances; not actionable per-chain.

- **Recommended next step:**
  1. Implement S1, S2 (with caveat), S3, S7 as one-paragraph patches plus single-edit content cleanup.
  2. Apply N9 PROMOTION codification to `homegrown/protocols/loop_diagnose.md` Step 6 with explicit chain-7-10-revisit gate.
  3. Continue S8 monitoring (extends M8+N8+O8+R8) with M6 cumulative refinement frequency + P1 4-layer + P3 2-sub-type + signal-type + corpus-level tracks.
  4. The natural next LOOP_DIAGNOSE run is one of the inventory inquiry's remaining prompts (6 or 7). Prompt 6 (Index-bridge diagnostic, `20-02 → 07-06`) is *"more of a bridge from source detection pressure to an index idea than a clean correction"* (lower priority); Prompt 7 (Cross-chain naming and boundary drift) is *"an aggregate naming diagnostic, broader and easier to overgeneralize"* (run after at least one or two pairwise diagnostics — already satisfied by chains 1-5). Either is acceptable; Prompt 7 may surface new cross-chain naming patterns.
  5. **At chain 6:** re-evaluate M6-refinement-S2 revival trigger.
  6. **At chain 7-10:** revisit N9 codification gate language; assess M6 consolidation review trigger.
  7. The system-level Q-RF gap (now reinforced with three specific instances) remains the longer-horizon direction; tracked as Research Frontier.
