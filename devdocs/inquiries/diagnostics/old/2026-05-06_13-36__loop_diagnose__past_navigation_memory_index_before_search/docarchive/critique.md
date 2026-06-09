# Critique: Loop Diagnose - Past Navigation Memory Index Before Search

## User Input

Evaluate the candidate diagnoses and maintenance actions for why the prior loop recommended a maintained `PastNavigationMemoryFile Index` before validating deterministic active-tree search.

## Dimensions With Weights

### 1. Evidence Fidelity - 25%

Pass means the diagnosis is grounded in specific prior/corrected artifacts and does not invent facts.

Critical.

### 2. Attribution Caution - 20%

Pass means the diagnosis avoids exact single-stage blame unless evidence isolates it.

Critical.

### 3. Corrective Usefulness - 20%

Pass means the diagnosis yields a maintenance candidate or monitoring gate that can prevent recurrence.

Critical.

### 4. Mechanism Precision - 15%

Pass means the diagnosis distinguishes maintained registry, deterministic search, protocolized search, run-local report, and Route Memory Review interpretation.

High.

### 5. Non-Overcorrection - 10%

Pass means the answer does not conclude "never index" or "explicit artifacts are bad."

High.

### 6. LOOP_DIAGNOSE Contract Fit - 10%

Pass means the final finding can include correction chain summary, hypotheses, attribution summary, maintenance candidates, and diagnostic verdict.

High.

## Fitness Landscape

### Viable Region

Candidates that:

- use the full correction chain evidence;
- identify the missing protocolized-search alternative;
- keep attribution mixed where needed;
- propose narrow, gateable maintenance;
- preserve Homegrown explicitness and future index revival.

### Dead Region

Candidates that:

- say the prior loop never searched;
- blame only one discipline;
- treat corrected inquiry as absolute truth;
- propose broad MVL+ rewrites from one example;
- overcorrect into "never create indexes."

### Boundary Region

Candidates that are directionally useful but need narrowing:

- broad explicitness-shape menu;
- Decomposition-stage attribution;
- immediate Navigation source patch.

### Unexplored Region

- Whether other correction chains show the same registry-vs-derivation weakness.
- Exact source-file placement for a maintenance rule.
- Whether an automated search helper should be implemented.

These do not block this diagnostic finding.

## Candidate Verdicts

### Hypothesis A - Exploration Under-Probed Search As Primary

Prosecution:

The prior Exploration did search active artifacts and found the current small active set. Calling this an Exploration failure risks overstating the miss.

Defense:

The search appeared as evidence and fallback, not as a developed primary mechanism. Corrected Exploration explicitly tested search and noticed that the prior fallback weakened the index conclusion.

Collision:

The defense survives if the hypothesis is worded carefully.

Verdict: REFINE.

Constructive output:

Use this as a contributing hypothesis:

```text
Exploration did not omit search; it under-probed search-as-primary.
```

Confidence: MEDIUM-HIGH.

### Hypothesis B - Sensemaking Over-Associated Explicitness With Maintained Registry

Prosecution:

Prior Sensemaking was not simplistic. It recognized stale-index risk, authority separation, and the danger of indexing every Navigation-related file.

Defense:

It still stabilized around "known place" and "explicit durable index" before testing whether explicitness could live in a protocolized derived search. Corrected Sensemaking makes that distinction directly.

Collision:

The defense survives as a shape-selection diagnosis, not as a claim that explicitness was wrong.

Verdict: SURVIVE.

Confidence: MEDIUM-HIGH.

### Hypothesis C - Innovation Failed To Generate The Strongest Search Alternative

Prosecution:

Prior Innovation did include "No Index, Scan Each Time," per-file metadata, and generated index concepts. It did not ignore alternatives.

Defense:

The no-index alternative was weakly framed as repeated scan burden. The corrected survivor, `PastNavigationMemoryFile Discovery Search` plus output modes, was materially stronger and absent as a candidate.

Collision:

The defense survives. This is the cleanest stage-level evidence, though inherited framing still matters.

Verdict: SURVIVE.

Confidence: HIGH.

### Hypothesis D - Critique Missed Fallback-As-Primary Prosecution

Prosecution:

Prior Critique was adversarial: it killed broad indexing, killed route-disposition fields, and required scan/backfill to avoid stale-index failure.

Defense:

That is exactly the point. Critique made the maintained index safer but did not ask whether the safety fallback should become the primary mechanism. Corrected Critique does ask this and kills maintained index as v1.

Collision:

The defense survives strongly. This is a precise and useful critique failure surface.

Verdict: SURVIVE.

Confidence: HIGH.

### Hypothesis E - Decomposition Centered The Wrong Object

Prosecution:

Prior Decomposition followed the stabilized inquiry question about index feasibility. It likely did not originate the miss.

Defense:

It did reinforce index-centered analysis and did not split search scope, patterns, exclusions, output modes, and revival triggers as independent pieces.

Collision:

Useful as downstream diagnosis, not a primary failure.

Verdict: REFINE.

Constructive output:

Mention as downstream frame inheritance.

Confidence: MEDIUM.

### Candidate 1 - Registry-Vs-Derivation Challenge

Prosecution:

Adding a new check could create process overhead and may be too broad if applied to every artifact decision.

Defense:

The check is narrow: maintained indexes/registries only. It directly targets the diagnosed miss and has a clear gate: if state is cheaply derivable by deterministic search, test protocolized search plus optional report before accepting maintained registry.

Collision:

Defense survives. This is the strongest maintenance candidate.

Verdict: SURVIVE.

Risk class: low.

Evaluation gate:

On the next three maintained-index proposals, the loop explicitly records whether the indexed state is derivable, whether search was tested as a primary mechanism, and why any registry still survives.

### Candidate 2 - Explicitness Shape Menu

Prosecution:

Could become vague advice and may dilute protocol specificity.

Defense:

The distinction is central to this failure. It prevents "explicit = maintained Markdown registry" from becoming an unexamined anchor.

Collision:

Survives as supporting wording, not as a standalone broad rewrite.

Verdict: REFINE.

Risk class: medium if global; low if embedded as a note under registry decisions.

Evaluation gate:

Use only when a loop is choosing between protocol rule, telemetry, run-local report, maintained registry, generated index, or authoritative ledger.

### Candidate 3 - Strongest Alternative Rule

Prosecution:

Might slow every artifact decision.

Defense:

The prior failure specifically killed a weak "scan each time" candidate before developing its strongest protocolized form. This rule improves candidate quality without picking an outcome.

Collision:

Survives when scoped to artifact/no-artifact and registry/search decisions.

Verdict: SURVIVE.

Risk class: low-medium.

Evaluation gate:

In future artifact decisions, before killing scan/no-artifact alternatives, require one strengthened variant with explicit scope, exclusions, statuses, telemetry, or optional report.

### Candidate 4 - Fallback Promotion Check

Prosecution:

Not every fallback should become primary; many fallbacks are only emergency recovery.

Defense:

The wording can require a test, not automatic promotion. It directly catches this chain's central contradiction.

Collision:

Survives with guardrail.

Verdict: SURVIVE.

Risk class: low.

Evaluation gate:

When a candidate survives only because a fallback handles a critical risk, critique must record whether the fallback is merely recovery or the actual primitive.

### Candidate 5 - Immediate Navigation Source Patch

Prosecution:

The current task is diagnostic. Implementing Navigation policy now would mix diagnosis and materialization.

Defense:

The corrected inquiry already provides a plausible Navigation patch direction.

Collision:

Prosecution wins for this inquiry. The candidate is valid downstream but should not be part of this diagnostic conclusion as an immediate edit.

Verdict: KILL for this run; DEFER downstream.

Constructive seed:

Run a separate materialization task if the user wants to patch Navigation context intake and Route Memory Review.

## Assembly Check

Surviving assembly:

```text
Failure diagnosis:
  prior loop selected maintained registry too early
  because protocolized search was not strengthened as a candidate
  and critique treated scan/backfill as mitigation rather than possible primary mechanism.

Maintenance response:
  add registry-vs-derivation challenge
  + strongest-alternative rule
  + fallback-promotion check
  with explicit evaluation gates.
```

Assembly verdict: SURVIVE.

This assembly is stronger than any single hypothesis. It preserves mixed attribution while producing actionable prevention.

## Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
| --- | --- | ---: | ---: | --- |
| Exploration | Search treated as fallback/support, not primary mechanism | medium | medium-high | Ensure deterministic search is probed as primary when active set is searchable |
| Sensemaking | Explicitness-shape collapse toward maintained registry | medium | medium-high | Add explicitness shape distinction |
| Innovation | Strongest search-contract alternative not generated | strong | high | Add strongest alternative rule |
| Critique | Fallback-as-primary prosecution missed | strong | high | Add fallback promotion check |
| Decomposition | Index-centered frame inherited | medium | medium | Treat as downstream, not root |

## Maintenance Candidates

### Maintenance Candidate 1 - Registry-Vs-Derivation Challenge

- **What should change:** When a maintained index/registry is proposed, require a recorded derivability check.
- **Potential file/protocol:** MVL+/discipline rule area, Critique guidance, or artifact/materialization decision guidance.
- **Risk class:** low.
- **Expected benefit:** Prevents maintained registries from surviving when they only cache cheap deterministic search.
- **Evaluation gate:** Next three maintained-index proposals record derivable/not-derivable, search-as-primary test, and reason registry survives if it does.
- **Branch experiment:** yes, if implemented in skill/protocol text.

### Maintenance Candidate 2 - Strongest Search Alternative Rule

- **What should change:** Before killing scan/no-index alternatives, strengthen them into protocolized search plus optional report when applicable.
- **Potential file/protocol:** Innovation guidance or artifact decision guidance.
- **Risk class:** low-medium.
- **Expected benefit:** Prevents weak strawman alternatives.
- **Evaluation gate:** Future artifact decisions show at least one strengthened non-registry candidate before selecting a registry.
- **Branch experiment:** optional.

### Maintenance Candidate 3 - Fallback Promotion Check

- **What should change:** Critique asks whether a required fallback is actually the primary mechanism.
- **Potential file/protocol:** Critique guidance or MVL+ peripheral rule.
- **Risk class:** low.
- **Expected benefit:** Catches designs where a safer fallback reveals the real primitive.
- **Evaluation gate:** In future critiques, any critical fallback has a recorded "recovery vs primary" decision.
- **Branch experiment:** optional.

### Maintenance Candidate 4 - Explicitness Shape Note

- **What should change:** Add local wording that explicitness can be protocol rule, telemetry, run-local report, maintained registry, generated index, or authoritative ledger.
- **Potential file/protocol:** Sensemaking or artifact decision guidance.
- **Risk class:** medium if broad, low if local.
- **Expected benefit:** Reduces maintained-artifact bias without weakening explicitness culture.
- **Evaluation gate:** Use only in artifact-shape decisions; verify it does not become excuse for under-documenting.
- **Branch experiment:** no unless repeated failures show need.

## Coverage Map

Evaluated:

- five diagnostic hypotheses;
- five maintenance actions;
- corrected-overcorrection risk;
- single-stage attribution risk;
- immediate source patch temptation.

Unexplored but not blocking:

- exact source placement for maintenance wording;
- whether other chains show the same failure;
- implementation details for Navigation Discovery Search.

Coverage judgment:

Sufficient for one LOOP_DIAGNOSE finding. A clean survivor exists with concrete evaluation gates.

## Signal

TERMINATE with ranked survivors:

1. SURVIVE: Innovation failed to generate the strongest protocolized-search alternative.
2. SURVIVE: Critique missed fallback-as-primary prosecution.
3. SURVIVE: Sensemaking over-associated explicitness with maintained registry shape.
4. REFINE: Exploration under-probed search-as-primary.
5. REFINE: Decomposition inherited an index-centered frame.

Maintenance survivor:

1. SURVIVE: Registry-Vs-Derivation Challenge.
2. SURVIVE: Fallback Promotion Check.
3. SURVIVE: Strongest Search Alternative Rule.
4. REFINE: Explicitness Shape Note.
5. KILL for this run: immediate Navigation source patch.

## Diagnostic Verdict

**Overall:** ACTIONABLE, narrowly.

- **Best-supported diagnosis:** The prior loop selected a maintained registry too early because it did not test protocolized Discovery Search as the strongest alternative, and Critique treated scan/backfill as a safety mitigation instead of asking whether it should be the v1 primitive.
- **Strongest maintenance candidate:** Add a registry-vs-derivation challenge with a fallback-promotion check.
- **Main uncertainty:** Exact stage attribution is mixed; Innovation and Critique have the strongest evidence, but Sensemaking and Exploration shaped the frame.
- **Recommended next step:** Do not patch Navigation inside this diagnostic. If source maintenance is desired, run a small branch experiment that adds the registry-vs-derivation challenge and evaluates it against the next maintained-index proposals.

## Convergence Telemetry

Dimension coverage: complete.

Adversarial strength: strong. The main survivors faced the strongest objections: prior did search; prior critique was already adversarial; corrected inquiry is not ground truth.

Landscape stability: stable. All viable diagnoses converge on mechanism-selection failure rather than data-reading failure.

Clean SURVIVE exists: yes.

Failure modes observed: none. Self-reference collapse was controlled by external correction-chain evidence and reproduced search signals.

Overall: PROCEED.
