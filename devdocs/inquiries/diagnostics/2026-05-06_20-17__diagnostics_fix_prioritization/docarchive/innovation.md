# Innovation: Diagnostics Fix Prioritization

## User Input

`devdocs/inquiries/diagnostics/2026-05-06_20-17__diagnostics_fix_prioritization/_branch.md`

## Seed

The seed is a prioritization problem:

```text
Many diagnostics propose small gates and patches. Which packages should Homegrown actually prioritize?
```

The direction signal is pragmatic: fix current Navigation reliability first, keep loop-wide guardrails scoped, and pick quick wins that reduce repeated known failures without broad rewrites.

## Mechanism 1 - Lens Shifting

### Generic

Evaluate fixes as **risk reducers**, not as documentation improvements.

Output: prioritize fixes that prevent false absence, stale route resurrection, hidden state, and wrong durable policies.

### Focused

Evaluate route-memory fixes as **runtime context safety**.

Output: `PastNavigationMemoryFile Discovery` plus route-memory status becomes a reliability package, not a naming cleanup.

### Contrarian

Evaluate broad loop fixes as more urgent because they affect every future inquiry.

Output: broad Critique guard could be first, but it does not make the next Navigation run safe by itself.

## Mechanism 2 - Combination

### Generic

Combine related small fixes into packages.

Output:

```text
Navigation route-memory intake package
  = discovery + status + source trigger + phase telemetry
```

### Focused

Combine Critique dimension fixes into one scoped addendum.

Output:

```text
Premise/Dimension Validation Pack
  = proxy-trigger + fallback-as-primary + artifact reuse + base-loop burden
    + phase/calibration + name-implied behavior
```

### Contrarian

Combine every diagnostic fix into one large MVL+ reliability pass.

Output: comprehensive but too broad; likely to create the same process bloat several findings warned against.

## Mechanism 3 - Inversion

### Generic

Instead of asking which fix is best, ask which missing fix would make the next failure most embarrassing.

Output: if the next Navigation run skips old route memory because discovery is undefined, that would be the most concrete avoidable failure.

### Focused

Instead of adding an index to find memory, make absence impossible to claim without a discovery method.

Output: `absent` requires a named discovery method; otherwise status is `unknown`.

### Contrarian

Instead of patching Navigation first, patch CONCLUDE so future findings do not harden weak terms.

Output: useful backstop but too downstream to be the main reliability fix.

## Mechanism 4 - Constraint Manipulation

### Generic

Add constraint: no broad MVL+ rewrite from these diagnostics alone.

Output: prefer scoped patches and evaluation gates.

### Focused

Add constraint: every trigger that depends on file/source existence must define discovery, confidence, fallback, and authority boundary.

Output: Discovery Interface Invariant becomes a reusable rule.

### Contrarian

Remove constraint: let Homegrown always run full reviews and avoid discovery precision.

Output: robust but wasteful and still unsafe if old memory is discovered poorly.

## Mechanism 5 - Absence Recognition

### Generic

Missing thing: a bridge from diagnostics to implementation order.

Output: P0/P1/quick-win ordering.

### Focused

Missing thing: a compact route-memory intake record.

Output:

```yaml
navigation_phase:
past_navigation_memory_discovery:
route_memory_status:
review_policy:
review_path:
skip_reason:
review_outcome_telemetry:
```

### Contrarian

Missing thing: a global diagnostic index.

Output: useful later, but current task asks for priorities. A diagnostic index is not a fix by itself.

## Mechanism 6 - Domain Transfer

### Generic

Transfer from production incident response: fix the active incident path first, then improve prevention systems.

Output: Navigation intake is P0; Critique guardrails are P1.

### Focused

Transfer from database constraints: a foreign key needs existence checks and integrity rules.

Output: `PastNavigationMemoryFile` as a trigger needs discovery integrity, not just a name.

### Contrarian

Transfer from compliance: every decision gets a checklist.

Output: high coverage, but high process drag. Not suitable for early Homegrown unless failures keep recurring.

## Mechanism 7 - Extrapolation

### Generic

If route-memory artifacts keep growing, false absence and stale route resurrection become more dangerous.

Output: materialize discovery/status now before artifact count grows.

### Focused

If MVL+ keeps producing protocol findings, Critique dimension blindness will keep turning plausible candidates into durable wrong policies.

Output: scoped Critique addendum has the broadest future effect.

### Contrarian

If every fix is scoped narrowly, patterns may repeat in adjacent domains.

Output: use evaluation gates. Promote narrow fixes only after repeated evidence across domains.

## Candidate Set

### Candidate A - Navigation Route-Memory Intake Package

Includes:

- `PastNavigationMemoryFile Discovery`;
- discovery statuses with `unknown`;
- deterministic active-tree search baseline/fallback;
- route-memory status for every Navigation run;
- source-dependency trigger taxonomy;
- discovery/review authority boundary.

### Candidate B - Phase-Calibrated Early-Stage Route-Memory Policy

Includes:

- `navigation_phase`;
- early-stage robust default when a PastNavigationMemoryFile exists;
- explicit exceptions;
- anti-authority safeguards;
- exit telemetry after full reviews.

### Candidate C - Scoped Critique Premise/Dimension Validation Pack

Includes conditional critique dimensions:

- real dependency versus observable proxy;
- fallback as primary;
- base-loop burden;
- artifact reuse;
- phase/calibration and breakthrough preservation;
- name-implied behavior;
- canonical/provenance layer correctness.

### Candidate D - Registry-vs-Derivation Quick Check

When proposing a maintained index or registry, ask whether the state can be cheaply derived by deterministic search. If a fallback is required, ask whether the fallback should be the primary mechanism.

### Candidate E - Archive-Use Check For LOOP_DIAGNOSE

When doing correction-chain diagnosis, check existing `_state.md`, discipline outputs, and `docarchive/` before proposing embedded marks or new routine fields.

### Candidate F - Durable Term Boundary Check

Before CONCLUDE hardens a durable protocol term, validate type, plain meaning, user inference, "not this," term status, and explicitness form.

### Candidate G - Operation Boundary Package

Includes:

- Status Classification vs Review Gate;
- Operation Output Contract Gate;
- Bloat Control Layer Gate;
- Operation-Proliferation Critique Guard.

### Candidate H - CONCLUDE Backstop Package

Includes:

- secondary operational claim guard;
- overstatement check;
- Durable Terms block.

### Candidate I - Broad MVL+ Reliability Rewrite

Put all recurring gates into the core MVL+ skill.

## Test Cycle

### Candidate A - Navigation Route-Memory Intake Package

Novelty: moderate. It assembles several findings into one operational patch.

Scrutiny survival: survives. Strongest objection: it is a package, not a single easy fix. Defense: the pieces are strongly coupled; discovery without status or status without source trigger is incomplete.

Fertility: high. It gives Navigation a stable context-preparation base.

Actionability: high, but requires source-edit care.

Mechanism independence: high. Lens shifting, combination, inversion, constraint manipulation, domain transfer, and extrapolation all produced it.

Verdict: survive. Rank as most meaningful reliability fix and urgent fix 1.

### Candidate B - Phase-Calibrated Early-Stage Route-Memory Policy

Novelty: moderate.

Scrutiny survival: survives with dependency on Candidate A. It should not run robust review by default until discovery/status is defined.

Fertility: high. It creates telemetry that lets Homegrown later optimize.

Actionability: medium-high.

Mechanism independence: medium-high.

Verdict: survive as urgent fix 2 after Candidate A.

### Candidate C - Scoped Critique Premise/Dimension Validation Pack

Novelty: moderate. It does not add one fixed dimension; it adds a scoped dimension-selection habit.

Scrutiny survival: survives. Strongest objection: it can become a broad checklist. Defense: it triggers by problem type and has explicit dimensions pulled from diagnostics.

Fertility: high. It addresses failures across storage, loop diagnosis, registry/search, route memory, phase policy, and naming.

Actionability: medium. Needs careful wording.

Mechanism independence: high.

Verdict: survive. Rank as broadest touch/effect fix.

### Candidate D - Registry-vs-Derivation Quick Check

Novelty: low-medium.

Scrutiny survival: survives. It is narrow and directly backed by the index-before-search diagnostic.

Fertility: medium-high. Helps index/registry decisions beyond Navigation.

Actionability: high.

Mechanism independence: high.

Verdict: survive. Rank as easy high-effect fix 2.

### Candidate E - Archive-Use Check For LOOP_DIAGNOSE

Novelty: low.

Scrutiny survival: survives. It is cheap and directly prevents adding marks when archives already contain evidence.

Fertility: medium. Mostly diagnostic workflow.

Actionability: high.

Mechanism independence: medium-high.

Verdict: survive. Rank as easy high-effect fix 1.

### Candidate F - Durable Term Boundary Check

Novelty: moderate.

Scrutiny survival: survives but not as easiest or broadest by itself. It is important, especially because recent failures include naming and operation-boundary drift.

Fertility: high.

Actionability: medium-high.

Mechanism independence: high.

Verdict: survive as part of broad loop hardening, likely bundled with Candidate C or H.

### Candidate G - Operation Boundary Package

Novelty: moderate.

Scrutiny survival: survives but overlaps with Candidate A and F. It is a strong support package for artifact and workflow decisions.

Fertility: high.

Actionability: medium.

Mechanism independence: high.

Verdict: survive as component, not standalone top category winner.

### Candidate H - CONCLUDE Backstop Package

Novelty: moderate.

Scrutiny survival: refine. It catches durable hardening but is downstream. It should not be the main reliability fix.

Fertility: medium.

Actionability: medium.

Mechanism independence: medium.

Verdict: refine. Use as backstop after upstream fixes.

### Candidate I - Broad MVL+ Reliability Rewrite

Novelty: low.

Scrutiny survival: fails for now. Multiple diagnostics explicitly warn against broad MVL+ rewrites from narrow evidence.

Fertility: high if evidence grows, but unsafe now.

Actionability: low-medium due to broad blast radius.

Mechanism independence: low.

Verdict: kill as current action; defer until repeated cross-domain diagnostics justify it.

## Assembly Check

### Assembly 1 - P0 Navigation Reliability Patch

Combine Candidate A and Candidate B:

```text
Navigation route-memory intake package
  + phase-calibrated early-stage robust policy
```

Emergent value:

- makes `PastNavigationMemoryFile exists` operational;
- gives every Navigation run route-memory status;
- supports early robust review without false absence;
- creates telemetry for later optimization.

Verdict: survive as P0/P1 operational sequence.

### Assembly 2 - Loop Evaluation Hardening

Combine Candidate C, F, G, and H:

```text
Scoped Critique Premise/Dimension Validation
  + Durable Term Boundary Check
  + Operation Boundary Package
  + CONCLUDE backstops
```

Emergent value:

- catches wrong axes before conclusion;
- prevents term and artifact boundary hardening;
- remains broad enough to affect future non-Navigation failures.

Verdict: survive as broadest-impact fix, but scope tightly.

### Assembly 3 - Quick-Win Pair

Combine Candidate E and D:

```text
Archive-use check
  + registry-vs-derivation / fallback-promotion check
```

Emergent value:

- prevents embedded marks and duplicate registries;
- low edit cost;
- clear activation conditions.

Verdict: survive as easiest two high-effect fixes.

## Recommended Innovation

Use this category answer:

```text
Most urgent 2:
  1. Navigation Route-Memory Intake Package.
  2. Phase-Calibrated Early-Stage Route-Memory Policy.

Most meaningful reliability fix:
  Navigation Route-Memory Intake Package.

Easiest 2 high-effect fixes:
  1. Archive-Use Check for LOOP_DIAGNOSE.
  2. Registry-vs-Derivation + Fallback-Promotion Check.

Broadest touch/effect fix:
  Scoped Critique Premise/Dimension Validation Pack,
  with Durable Term Boundary Check as a key component.
```

Implementation order:

```text
P0: Navigation Route-Memory Intake Package.
P1: Phase-calibrated policy and telemetry.
Quick wins can be applied immediately if touching diagnostics/index guidance.
P2: Scoped Critique/term/conclude hardening.
Defer broad MVL+ rewrite.
```

## Mechanism Coverage Telemetry

Generators applied: 4 / 4.

Framers applied: 3 / 3.

Convergence: yes. Five mechanisms converged on Navigation intake as reliability winner, and four mechanisms converged on scoped Critique validation as broadest-impact fix.

Survivors tested: 9 / 9.

Failure modes observed: none. Broad rewrite and CONCLUDE-only paths were tested rather than accepted by convenience.

Overall: PROCEED.
