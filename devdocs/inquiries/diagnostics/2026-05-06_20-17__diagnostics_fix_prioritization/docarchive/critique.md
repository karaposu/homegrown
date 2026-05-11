# Critique: Diagnostics Fix Prioritization

## User Input

`devdocs/inquiries/diagnostics/2026-05-06_20-17__diagnostics_fix_prioritization/_branch.md`

## Phase 0 - Dimensions With Weights

| Dimension | Weight | Success Criteria |
| --- | --- | --- |
| Operational urgency | Critical | Reduces risk in the next likely Navigation or diagnostic run. |
| Reliability impact | Critical | Prevents false absence, stale memory, hidden load-bearing state, wrong trigger policy, or wrong durable decisions. |
| Evidence support | Critical | Is backed by repeated diagnostic findings or strong direct evidence. |
| Scope control | High | Avoids broad MVL+ rewrites and checklist bloat. |
| Ease / blast radius | High | Can be implemented with clear triggers and limited source churn. |
| Breadth | High | Applies across multiple failure families or future loops. |
| Actionability | High | Can become a concrete patch or rule without another discovery pass. |

Dimension validation: these dimensions match the user's categories. Urgency, reliability, ease, and breadth are intentionally separate because the same candidate cannot optimize all four at once.

## Phase 1 - Fitness Landscape

### Viable Region

Candidates that:

- fix current Navigation route-memory safety;
- define hidden load-bearing interfaces;
- improve Critique's missed-catch role without becoming generic checklist bloat;
- are supported by multiple diagnostics or by one strong active operational risk;
- have clear implementation gates.

### Dead Region

Candidates that:

- propose a broad MVL+ rewrite from this evidence set;
- create fake artifacts for no-op cases;
- make maintained indexes mandatory before search/derivability is tested;
- rely on CONCLUDE-only backstops for upstream reasoning problems;
- solve only naming while ignoring operation boundaries.

### Boundary Region

Candidates that are useful but not top winners alone:

- Durable Term Boundary Check;
- Operation Boundary Package;
- CONCLUDE Backstop Package;
- Phase-Calibrated Policy without discovery/status materialized first.

### Unexplored Region

Exact source patch text is unexplored. This critique ranks fixes; it does not edit `homegrown/navigation`, `loop_diagnose`, `td-critique`, or `conclude`.

## Phase 2 - Candidate Verdicts

### Candidate A - Navigation Route-Memory Intake Package

**Prosecution:**
This is not one tiny fix. It bundles discovery, status, search fallback, source dependency, and authority boundary. It could become a larger Navigation patch than the user asked for.

**Defense:**
The pieces are strongly coupled. `PastNavigationMemoryFile exists` is already load-bearing in recent findings. Without discovery method, `unknown` status, and source-dependency trigger, Navigation can falsely skip review or resurrect stale route memory. This is the most concrete current reliability risk.

**Collision:**
Defense wins. The bundle should be treated as one reliability package because partial implementation can be misleading.

**Verdict: SURVIVE**

Placement:

- Most urgent fix 1.
- Most meaningful reliability fix.

Constructive shape:

```text
PastNavigationMemoryFile Discovery
  + discovery status including unknown
  + deterministic active-tree search baseline/fallback
  + universal route_memory_status
  + source-dependency trigger
  + discovery/review authority boundary
```

### Candidate B - Phase-Calibrated Early-Stage Route-Memory Policy

**Prosecution:**
If implemented before Candidate A, it can amplify uncertainty. Running full review by default when a `PastNavigationMemoryFile` exists is unsafe if existence detection is vague.

**Defense:**
The early-stage/default policy was a strong diagnostic theme. Homegrown currently prefers robustness and breakthrough preservation over speed. Phase fields, exceptions, anti-authority safeguards, and telemetry let the project run robustly now and optimize later.

**Collision:**
Defense survives only after or alongside Candidate A. Candidate B depends on discovery/status being explicit.

**Verdict: SURVIVE with dependency**

Placement:

- Most urgent fix 2.

Constructive shape:

```text
navigation_phase: early_stage_discovery | stable_optimized
route_memory_policy:
explicit skip reasons
anti-authority rule
review outcome telemetry
```

### Candidate C - Scoped Critique Premise/Dimension Validation Pack

**Prosecution:**
This could become a broad, vague checklist. Critique already has many possible dimensions; adding more may slow loops and create false confidence.

**Defense:**
Many diagnostics identify Critique as the missed-catch stage: wrong dimensions protected path stability, failed to notice archive reuse, treated fallback as mitigation instead of primary, underweighted phase/calibration, and missed name-implied behavior. Critique is the broadest safety net before CONCLUDE hardens policy.

**Collision:**
Defense wins if the addendum is scoped by problem type. It should not add all dimensions to every critique.

**Verdict: SURVIVE with scope constraint**

Placement:

- Fix that touches the most and has the most broad effect.

Constructive shape:

```text
For trigger/routing/index/artifact/protocol-term/policy critiques,
select relevant dimensions from:
  real dependency vs observable proxy
  fallback-as-primary
  base-loop burden
  artifact reuse
  phase/calibration and breakthrough preservation
  name-implied behavior
  canonical/provenance layer correctness
```

### Candidate D - Registry-vs-Derivation Quick Check

**Prosecution:**
It only covers registry/index/search failures, not all diagnostics. It will not fix Route Memory Review output contracts or phase policy.

**Defense:**
It is narrow, cheap, and strongly supported by the index-before-search diagnostic. It also generalizes beyond Navigation anywhere Homegrown is tempted to maintain a registry of derivable state.

**Collision:**
Defense wins for the "easy high-effect" category, not for top reliability.

**Verdict: SURVIVE**

Placement:

- Easiest high-effect fix 2.

Constructive shape:

```text
Before creating a maintained index/registry:
  can the state be derived by deterministic search?
  if a fallback is required, should the fallback be primary?
```

### Candidate E - Archive-Use Check For LOOP_DIAGNOSE

**Prosecution:**
It is limited to diagnostics. It does not affect Navigation runtime or ordinary MVL+ loops.

**Defense:**
It is extremely cheap and directly supported by the discipline-verdict-source diagnostic. It prevents adding embedded Critique marks or new routine fields when archived discipline outputs already contain the evidence.

**Collision:**
Defense wins for easy high-effect. Its limited scope is a strength for ease.

**Verdict: SURVIVE**

Placement:

- Easiest high-effect fix 1.

Constructive shape:

```text
In correction-chain diagnosis:
  inspect _branch.md, _state.md, root outputs, and docarchive/*
  before proposing embedded marks, new routine fields, or diagnostic registries.
```

### Candidate F - Durable Term Boundary Check

**Prosecution:**
It may look broad and easy, but it can add tables and process to too many findings. It also does not catch non-naming failures like phase-insensitive optimization by itself.

**Defense:**
It directly addresses repeated name/boundary failures: `prior_map_overlay`, Route-Memory Preflight, source, `PastNavigationMemoryFile`, and index/search. It is valuable as part of loop hardening.

**Collision:**
Defense survives as a component, not as the category winner. It should be bundled with Candidate C or CONCLUDE backstops.

**Verdict: SURVIVE as component**

Constructive shape:

```text
For durable protocol terms:
  type
  plain meaning
  user inference
  not-this boundary
  legacy/provisional/canonical/retired
  explicitness form
```

### Candidate G - Operation Boundary Package

**Prosecution:**
It overlaps heavily with Candidate A and F. As a standalone, it may be too abstract.

**Defense:**
It captures real repeated failures: operation output versus optional storage, status classification versus review, and named side-routine proliferation.

**Collision:**
Defense survives as a support package. It should be folded into Navigation route-memory intake and broad Critique dimensions.

**Verdict: SURVIVE as component**

### Candidate H - CONCLUDE Backstop Package

**Prosecution:**
CONCLUDE is downstream. If upstream sensemaking/critique is wrong, a backstop may only document the wrong decision more neatly.

**Defense:**
Many diagnostics show CONCLUDE hardening side claims, weak terms, and overstrong survivors. A backstop can catch some defects before findings become durable guidance.

**Collision:**
Defense survives, but not as a top-ranked fix. It is a P2 backstop after operational and Critique fixes.

**Verdict: REFINE**

Constructive output: use for Durable Terms block, secondary interface guard, and overstatement check only when findings create durable terms or operational patch guidance.

### Candidate I - Broad MVL+ Reliability Rewrite

**Prosecution:**
The diagnostics themselves repeatedly warn against broad core rewrites from one or a few correction chains. This would turn a scoped evidence set into a heavy core change.

**Defense:**
The repeated patterns do show MVL+ could benefit from systemic hardening.

**Collision:**
Prosecution wins now. The defense becomes a deferred trigger: revive only after repeated cross-domain diagnostics show the same issue and scoped fixes fail.

**Verdict: KILL as current action; DEFER as future option**

Seed from failure: collect outcomes from scoped fixes before broadening core MVL+.

## Phase 3.5 - Assembly Check

### Assembly 1 - P0/P1 Operational Reliability

Components:

- Candidate A: Navigation Route-Memory Intake Package.
- Candidate B: Phase-Calibrated Early-Stage Route-Memory Policy.

**Prosecution:**
This assembly is larger than a "fix." It may require multiple source files and careful testing.

**Defense:**
It is the only assembly that directly makes current Navigation route-memory behavior reliable. Phase policy without discovery is unsafe; discovery without phase policy leaves early-stage robustness unmaterialized.

**Collision:**
Defense wins with sequencing.

**Verdict: SURVIVE**

Rank:

1. Candidate A first.
2. Candidate B second.

### Assembly 2 - Broad Loop Hardening

Components:

- Candidate C: Scoped Critique Premise/Dimension Validation Pack.
- Candidate F: Durable Term Boundary Check.
- Candidate G: Operation Boundary Package.
- Candidate H: CONCLUDE Backstops.

**Prosecution:**
This may become sprawling.

**Defense:**
The core is Critique dimension selection. The other components are conditional subchecks. This assembly addresses the broadest set of diagnostic failures.

**Collision:**
Defense wins if implemented as a scoped Critique pack with optional CONCLUDE backstops, not as a universal checklist.

**Verdict: SURVIVE with scope constraint**

Rank:

- Broadest touch/effect fix.

### Assembly 3 - Quick-Win Pair

Components:

- Candidate E: Archive-Use Check.
- Candidate D: Registry-vs-Derivation Quick Check.

**Prosecution:**
These are not enough to fix current Navigation route-memory behavior.

**Defense:**
They are not meant to. They are the easiest high-effect checks with clear activation triggers and low blast radius.

**Collision:**
Defense wins for the easy category only.

**Verdict: SURVIVE**

Rank:

- Easiest high-effect fixes.

## Phase 3 - Ranked Verdicts

### Most Urgent 2 Fixes

1. **SURVIVE: Navigation Route-Memory Intake Package**
   - Most urgent because current Navigation route-memory policy depends on discovering `PastNavigationMemoryFile` candidates and recording route-memory status.

2. **SURVIVE with dependency: Phase-Calibrated Early-Stage Route-Memory Policy**
   - Urgent because Homegrown is currently early-stage and robustness-biased, but it must depend on the intake package.

### Most Meaningful Reliability Fix

1. **SURVIVE: Navigation Route-Memory Intake Package**
   - Best reliability fix because it prevents false source absence, stale route resurrection, hidden review skips, and unclear discovery/review authority.

### Easiest 2 High-Effect Fixes

1. **SURVIVE: Archive-Use Check For LOOP_DIAGNOSE**
   - Smallest and clearest. It prevents new marks/fields when archives already contain evidence.

2. **SURVIVE: Registry-vs-Derivation + Fallback-Promotion Check**
   - Narrow trigger, low cost, directly prevents maintained registries over cheap deterministic search.

### Fix With Broadest Touch And Effect

1. **SURVIVE with scope constraint: Scoped Critique Premise/Dimension Validation Pack**
   - Broadest because it improves the missed-catch stage across storage, diagnostics, registry/search, route-memory triggers, phase policy, artifact boundaries, and durable naming.

## Coverage Map

| Region | Covered? | Result |
| --- | --- | --- |
| Current Navigation route-memory safety | yes | Intake package + phase policy survive. |
| Broad loop safety net | yes | Scoped Critique pack survives. |
| Easy quick wins | yes | Archive-use and registry-vs-derivation survive. |
| Durable naming | yes | Survives as component of broad pack. |
| Operation/artifact/status boundary | yes | Survives as component. |
| CONCLUDE hardening | yes | Refined as downstream backstop. |
| Broad MVL+ rewrite | yes | Killed/deferred. |
| Mandatory index or no-op review files | yes | Killed by source diagnostics and prior findings. |

No major requested category remains unranked.

## Signal

TERMINATE.

The original question is answered. The final answer should give category-specific winners, not one universal list.

## Convergence Telemetry

Dimension coverage: complete. Urgency, reliability, ease, breadth, evidence, scope, and actionability were all used.

Adversarial strength: strong. The winners were prosecuted against over-bundling, checklist bloat, and category mismatch.

Landscape stability: stable. The category winners did not shift during assembly testing.

Clean SURVIVE exists: yes, across all requested categories.

Failure modes observed: none. Rubber-stamping avoided by killing broad MVL+ rewrite and refining CONCLUDE-only backstops. Nitpicking avoided by preserving component fixes in the right packages.

Overall: PROCEED.
