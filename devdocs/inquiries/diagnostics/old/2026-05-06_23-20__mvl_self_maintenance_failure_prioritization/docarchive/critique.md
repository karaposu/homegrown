# Critique: MVL Self-Maintenance Failure Prioritization

## User Input

`devdocs/inquiries/diagnostics/2026-05-06_23-20__mvl_self_maintenance_failure_prioritization/_branch.md`

## Phase 0 - Dimensions With Weights

| Dimension | Weight | Success Criteria |
| --- | --- | --- |
| Target correctness | Critical | Candidate repairs MVL self-maintenance, not just the topical Navigation evidence. |
| Diagnostic evidence support | Critical | Candidate is grounded in repeated diagnostic findings or a strong direct current failure. |
| Reliability impact | Critical | Candidate prevents wrong survivors, wrong frames, missing alternatives, or bad durable findings. |
| Urgency | High | Candidate reduces risk in the next self-maintenance or diagnostic loop. |
| Scope control | High | Candidate avoids broad rewrites and checklist bloat unless evidence justifies them. |
| Ease / blast radius | High | Candidate can be applied with clear triggers and limited source churn. |
| Stage attribution fidelity | High | Candidate preserves which discipline or runner stage failed, instead of flattening blame. |
| Breadth | High | Candidate improves multiple future failure families across domains. |

Dimension validation: these dimensions match the corrected question. The most important dimension is target correctness because the previous answer failed by drifting from MVL self-maintenance into Navigation implementation.

## Phase 1 - Fitness Landscape

### Viable Region

Candidates that:

- repair MVL self-maintenance behavior;
- directly address stage or discipline failure modes;
- prevent target substitution or decisive-dimension blindness;
- have clear activation conditions;
- can use Navigation discussions as test evidence without making Navigation the target.

### Dead Region

Candidates that:

- rank Navigation implementation patches as the main answer;
- blame only one discipline for multi-stage failures;
- rewrite all MVL core mechanics immediately;
- add always-on broad checklists;
- use CONCLUDE backstops as a substitute for upstream reasoning.

### Boundary Region

Candidates that are useful but not top winners alone:

- Sensemaking Boundary and Assumption Pack;
- Innovation Strongest Alternative Pack;
- Decomposition Load-Bearing Interface Check;
- CONCLUDE Handoff Integrity Backstops.

### Unexplored Region

Exact source-file placement is unexplored. This critique ranks self-maintenance fixes; it does not patch `homegrown/MVL+`, `homegrown/protocols/loop_diagnose.md`, `homegrown/protocols/conclude.md`, or discipline skill text.

## Phase 2 - Candidate Verdicts

### Candidate A - Target-Layer Alignment Gate

**Prosecution:**
This candidate is strongly motivated by the latest failure, but the diagnostic corpus only contains one explicit target-substitution prioritization failure. It could be over-ranked compared with repeated Critique and Sensemaking failures.

**Defense:**
The latest failure is exactly the user's correction for this run. It also generalizes from older branch-frame failures: wrong design axis, correction-chain framing errors, and evidence storage versus diagnosis boundary errors. If target alignment fails, every downstream ranking can be coherent but wrong.

**Collision:**
Defense wins for urgency. It is not the broadest reliability fix, but it is the first thing that must not fail in the next self-maintenance loop.

**Verdict: SURVIVE**

Rank:

- Most urgent fix 1.

Constructive shape:

```yaml
evidence_domain:
diagnosis_target:
maintenance_target:
implementation_target:
out_of_scope_target:
```

For meta/self-maintenance inquiries, final recommendations must target `maintenance_target` unless the branch explicitly asks for implementation in the evidence domain.

### Candidate B - Scoped Critique Decisive-Dimension Pack

**Prosecution:**
This candidate risks becoming a broad checklist. It may also overstate Critique's role: many failures originate in Sensemaking, Innovation, or branch framing before Critique sees anything.

**Defense:**
The corpus repeatedly identifies Critique as the missed-catch stage. Critique does not need to originate the failure to be the best reliability gate. A properly scoped dimension pack can catch wrong anchors, missing alternatives, proxy triggers, phase blindness, fallback-as-primary errors, name-implied behavior, operation proliferation, and target mismatch before CONCLUDE hardens the answer.

**Collision:**
Defense wins with a strict scope condition. The pack must be problem-triggered and dimension-selective, not always-on.

**Verdict: SURVIVE with scope constraint**

Rank:

- Most urgent fix 2.
- Most meaningful reliability fix.
- Broadest touch/effect fix.

Constructive shape:

```text
For self-maintenance, protocol, trigger, routing, artifact, naming,
index/registry, phase-policy, or operational-patch critiques,
select relevant dimensions from:

  target fit and branch-goal coverage
  real dependency versus observable proxy
  premise/layer validity
  canonical versus provenance layer
  base-loop burden and artifact reuse
  fallback as possible primary mechanism
  operation boundary and operation proliferation
  phase/calibration and breakthrough preservation
  name-implied behavior
  load-bearing interface defined or deferred
  strongest alternative visible before candidate death
```

### Candidate C - `LOOP_DIAGNOSE` Archive-Use And Correction-Chain Framing Check

**Prosecution:**
This is narrow. It will not fix ordinary non-diagnostic MVL runs or broad Critique dimension blindness.

**Defense:**
The user is using diagnostic findings to improve MVL. The archive-use failure is directly supported and easy to fix. Existing artifacts already contain discipline evidence, so reading them before adding new marks or fields is low-cost and high-signal.

**Collision:**
Defense wins for easy high-effect, not for broad reliability.

**Verdict: SURVIVE**

Rank:

- Easiest high-effect fix 1.

Constructive shape:

```text
For correction-chain diagnosis:
  use LOOP_DIAGNOSE framing
  inspect _branch.md, _state.md, root outputs, and docarchive/*
  before proposing marks, registries, or new routine fields
```

### Candidate D - Answer-Target Finalization Check

**Prosecution:**
This overlaps Candidate A. If the target-layer record exists up front, a final check may be redundant.

**Defense:**
The latest failure reached final output. A cheap final check is useful even if the up-front gate exists. It is low blast radius and can be added to Critique/CONCLUDE without waiting for larger source placement decisions.

**Collision:**
Defense wins for easy high-effect. It should be treated as the lightweight enforcement point of Candidate A.

**Verdict: SURVIVE**

Rank:

- Easiest high-effect fix 2.

Constructive shape:

```text
Before TERMINATE / CONCLUDE:
  Does the survivor answer _branch.md's question?
  Does it advance _branch.md's goal?
  Is it targeting the requested system, not only the salient evidence domain?
```

### Candidate E - Sensemaking Boundary And Assumption Pack

**Prosecution:**
This could be the true top fix because root causes often begin in Sensemaking. Ranking it lower may leave wrong anchors forming upstream.

**Defense:**
It is important, but broader and harder to scope. The user's category asks for top fixes by urgency/reliability/ease/breadth. Critique pack has more direct broad reliability because it catches errors from multiple origins. Sensemaking pack should be a companion and likely second-wave materialization.

**Collision:**
Defense wins against top category placement, but prosecution wins against ignoring it.

**Verdict: SURVIVE as companion**

Constructive output: include Sensemaking boundary checks in P2 or as dimensions feeding Candidate B:

- canonical/provenance layer;
- explicitness form;
- operation output versus storage convenience;
- status classification versus review;
- phase and priority assumptions;
- user-felt messiness;
- durable term plain meaning.

### Candidate F - Innovation Strongest Alternative Pack

**Prosecution:**
Candidate generation gaps recur, but adding a strongest-alternative rule can become expensive and preserve too many candidates.

**Defense:**
The corpus repeatedly shows the better answer existed as a stronger form of a weakly represented alternative: archive-first diagnosis, deterministic search as primary, temporary robust mode, status field instead of routine.

**Collision:**
Survives as a scoped companion. It should trigger when an alternative is being killed for cost, breadth, or convenience before its strongest explicit form is tested.

**Verdict: SURVIVE as companion**

### Candidate G - Decomposition Load-Bearing Interface Check

**Prosecution:**
This is less universal than Critique and Sensemaking. It applies mainly to operational or interface-heavy findings.

**Defense:**
When applicable, it prevents serious hidden-interface failures: source existence without discovery, status without unknown state, operation without output contract, trigger without authority boundary.

**Collision:**
Survives as a scoped companion for operational patch guidance and trigger/routing findings.

**Verdict: SURVIVE as companion**

### Candidate H - CONCLUDE Handoff Integrity Backstops

**Prosecution:**
CONCLUDE is downstream. It can polish wrong reasoning or add paperwork without preventing the core failure.

**Defense:**
CONCLUDE repeatedly appears as an amplifier. It can prevent side claims, examples, weak terms, or overstrong recommendations from becoming durable guidance.

**Collision:**
Survives as a backstop, not as reliability winner.

**Verdict: REFINE**

Constructive output:

- secondary operational claim defined-or-deferred;
- load-bearing interface defined-or-deferred;
- examples-as-hints guard for trigger/routing findings;
- overstatement check;
- Durable Terms block when terms become workflow contracts;
- answer-target check before writing final finding.

### Candidate I - Broad MVL Core Rewrite

**Prosecution:**
The diagnostics themselves repeatedly defer broad MVL rewrites. This candidate would turn scoped evidence into a heavy global mechanism and risk checklist bloat.

**Defense:**
Recurring failures across many findings show systemic weakness.

**Collision:**
Prosecution wins now. The defense becomes a revival condition after scoped fixes fail.

**Verdict: KILL as current action; DEFER as future option**

Revival gate:

```text
Revive only after scoped target-layer, Critique, archive-use, and finalization checks
fail across multiple unrelated domains.
```

### Candidate J - Navigation Implementation Patch As Top Fix

**Prosecution:**
This is the exact mistake the user corrected. It answers the evidence domain, not the self-maintenance target.

**Defense:**
Navigation route-memory policies do need patches, and many diagnostics support them.

**Collision:**
Prosecution wins for this inquiry. Defense is valid only for a separate Navigation materialization task.

**Verdict: KILL as this inquiry's answer; DEFER to separate Navigation work**

## Phase 3.5 - Assembly Check

### Assembly 1 - Immediate Target Safety

Components:

- Candidate A: Target-Layer Alignment Gate.
- Candidate D: Answer-Target Finalization Check.

**Prosecution:**
It may be too narrow and latest-failure-specific.

**Defense:**
It directly repairs the failure that caused this rerun and is cheap enough to apply immediately.

**Collision:**
Defense wins.

**Verdict: SURVIVE**

Rank:

- Most urgent fix 1, with Candidate D as the easy enforcement point.

### Assembly 2 - Broad MVL Reliability

Components:

- Candidate B: Scoped Critique Decisive-Dimension Pack.
- Candidate E: Sensemaking Boundary Pack.
- Candidate F: Innovation Strongest Alternative Pack.
- Candidate G: Decomposition Interface Check.
- Candidate H: CONCLUDE Backstops.

**Prosecution:**
This assembly can become sprawling and may blur discipline ownership.

**Defense:**
The assembly is centered on Critique as the reliability choke point. The companion fixes are not all required in every run; they feed problem-specific dimensions and checks.

**Collision:**
Defense wins if the assembly is implemented as a scoped Critique pack first, with companions added selectively.

**Verdict: SURVIVE with scope constraint**

Rank:

- Most meaningful reliability fix.
- Broadest touch/effect fix.

### Assembly 3 - Quick-Win Pair

Components:

- Candidate C: `LOOP_DIAGNOSE` archive-use and correction-chain framing.
- Candidate D: answer-target finalization check.

**Prosecution:**
These are not enough to repair the full loop.

**Defense:**
They are not meant to. They are the easiest high-effect checks with clear triggers.

**Collision:**
Defense wins for the easy category only.

**Verdict: SURVIVE**

## Phase 3 - Ranked Verdicts

### Most Urgent 2 Fixes

1. **SURVIVE: Target-Layer Alignment Gate**
   - Most urgent because the latest failure was answering the Navigation-shaped evidence instead of the MVL self-maintenance target. Without this gate, the next maintenance loop can again be coherent and still wrong.

2. **SURVIVE with scope constraint: Scoped Critique Decisive-Dimension Pack**
   - Urgent because many diagnostics identify Critique as the missed-catch stage where wrong frames, weak alternatives, and proxy triggers survived.

### Most Meaningful Reliability Fix

1. **SURVIVE with scope constraint: Scoped Critique Decisive-Dimension Pack**
   - Best reliability fix because it prevents bad candidates from becoming durable findings across many failure origins.

### Easiest 2 High-Effect Fixes

1. **SURVIVE: `LOOP_DIAGNOSE` Archive-Use And Correction-Chain Framing Check**
   - Low blast radius and directly supported by the diagnostic corpus.

2. **SURVIVE: Answer-Target Finalization Check**
   - Small, immediate, and directly prevents the target-substitution failure.

### Fix With Broadest Touch And Effect

1. **SURVIVE with scope constraint: Scoped Critique Decisive-Dimension Pack**
   - Broadest because it touches the shared missed-catch stage across storage, diagnostics, artifact policy, registry/search, trigger policy, phase policy, naming, operational interfaces, and meta-target drift.

## Stage Attribution Summary

| Stage | Common Role In Diagnostics | Maintenance Meaning |
| --- | --- | --- |
| Branch framing / runner | wrong design axis or missing target-layer distinction | add correction-chain framing and target-layer alignment |
| Exploration | false confidence or treating fallback/search as secondary | improve confidence and primary-alternative probes as companion work |
| Sensemaking | wrong anchor or boundary stabilization | add boundary/assumption checks as companion work |
| Decomposition | wrong topology or shallow load-bearing interfaces | add interface materialization checks for trigger/routing/operational findings |
| Innovation | strongest alternative omitted or underweighted | add strongest-alternative checks as companion work |
| Critique | decisive dimension missed | prioritize scoped decisive-dimension pack |
| CONCLUDE | wrong or incomplete survivor hardened | add handoff and answer-target backstops |

## Coverage Map

| Region | Covered? | Result |
| --- | --- | --- |
| Corrected target: MVL self-maintenance | yes | Target-Layer Alignment Gate survives. |
| Repeated missed-catch failures | yes | Critique pack survives as reliability/breadth winner. |
| Easy high-effect fixes | yes | Archive-use and answer-target checks survive. |
| Stage attribution | yes | Multi-stage role table included. |
| Navigation implementation temptation | yes | Killed for this inquiry, deferred separately. |
| Broad MVL rewrite | yes | Killed/deferred. |
| Sensemaking/Innovation/Decomposition/CONCLUDE companion fixes | yes | Survive as companion, not top category winners. |

No requested category remains unranked.

## Signal

TERMINATE.

The original corrected question is answered. A clear survivor exists for every requested ranking category, and the answer advances the goal by giving the user MVL self-maintenance priorities instead of Navigation implementation priorities.

## Convergence Telemetry

Dimension coverage: complete. Target correctness, diagnostic evidence, reliability, urgency, scope, ease, stage attribution, and breadth were all used.

Adversarial strength: strong. The critique directly tested the tempting wrong answers: Navigation patching, single-discipline blame, and broad MVL rewrite.

Landscape stability: stable. Candidate rankings did not shift during assembly testing.

Clean SURVIVE exists: yes.

Failure modes observed: none. Self-reference collapse was checked by grounding verdicts in the diagnostic corpus and the user's correction, not in Critique's own preference for Critique.

Overall: PROCEED.
