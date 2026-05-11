# Sensemaking: Diagnostics Fix Prioritization

## User Input

`devdocs/inquiries/diagnostics/2026-05-06_20-17__diagnostics_fix_prioritization/_branch.md`

## SV1 - Baseline Understanding

The initial answer seems simple:

```text
Rank the fixes that appear most often in diagnostic findings.
```

That is too shallow. Frequency matters, but it is not the only axis. The user asked for different rankings:

- urgent fixes;
- most reliability-improving fix;
- easiest fixes with good effect;
- broadest touch/effect fix.

Those are different optimization targets.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- The answer must be grounded in every diagnostic `finding.md` under `devdocs/inquiries/diagnostics/`.
- The answer must not flatten all fixes into one priority list.
- Urgency must account for current operational risk, not only how often a fix appears.
- Ease must account for low blast radius and small source edits.
- Broadest impact must account for future loops and multiple domains, not only Navigation route memory.
- Homegrown is early-stage and currently values robustness over speed.

### Key Insights

- Most recent diagnostics cluster around Navigation route memory, so Navigation fixes are urgent.
- Older non-Navigation diagnostics show that critique/evaluation failures are broader than Navigation.
- Many failures are about hidden load-bearing boundaries: source existence, artifact output, status/review, name meaning, phase assumption, and registry/search.
- A single concrete Navigation patch may improve immediate reliability more than a broad loop rule.
- A broad Critique addendum may touch most future inquiries, but it must be scoped or it becomes checklist bloat.

### Structural Points

There are four ranking axes:

1. **Urgency**
   - What is most likely to break the next meaningful run?

2. **Reliability**
   - What most directly prevents false skips, stale memory, invisible state, or wrong durable policies?

3. **Ease**
   - What can be added with little design risk and still change behavior?

4. **Breadth**
   - What affects the most future loops and failure families?

### Foundational Principles

- Current Navigation route-memory policy is an active operational path, not just theory.
- Critique is the last upstream safety net before CONCLUDE hardens policy.
- CONCLUDE backstops help, but they cannot replace upstream reasoning.
- Explicitness can be satisfied by operation artifacts, status records, repeatable procedures, run-local reports, or indexes depending on the boundary.
- A fix that combines too many gates may become the same kind of process bloat the diagnostics warned about.

### Meaning-Nodes

- load-bearing interface;
- false absence;
- stale route resurrection;
- boundary drift;
- phase calibration;
- critique dimension blindness;
- durable policy hardening;
- low-cost prevention.

## SV2 - Anchor-Informed Understanding

The fixes divide into two classes:

```text
Operational fixes make Navigation route-memory behavior safer now.
Loop fixes make future MVL+/diagnostic reasoning safer across domains.
```

The most urgent fixes are operational because the recent route-memory findings are converging on active Navigation behavior. The broadest fix is loop-level because critique and durable-term checks apply beyond Navigation.

## Phase 2 - Perspective Checking

### Technical / Logical

The technically strongest operational failure is undefined discovery:

```text
PastNavigationMemoryFile exists -> run review
```

This is not safe unless the system defines how existence is discovered and how unknown discovery is represented.

New anchor: the Discovery Interface Invariant is the most concrete reliability repair.

### Human / User

The user has repeatedly objected to unclear names and unnatural boundaries. A fix that makes the system reliable but still hard to understand will keep generating corrections.

New anchor: durable names and status/review boundaries are not secondary; they affect whether the human can trust the workflow.

### Strategic / Long-Term

If only Navigation is patched, future non-Navigation inquiries can still repeat the same failure pattern: wrong critique dimensions, untested alternatives, or durable policy hardening.

New anchor: the broadest fix must improve evaluation, not just one protocol.

### Risk / Failure

The highest immediate risks are:

- false `PastNavigationMemoryFile` absence;
- stale route resurrection;
- full reviews skipped because discovery was undefined;
- route-memory status hidden or confused with review;
- mature optimized trigger used before calibration.

The broadest systemic risks are:

- critique not attacking the real failure axis;
- names hardening into wrong mechanisms;
- maintained objects chosen before derivability/search is tested.

New anchor: urgent and broad rankings must diverge.

### Resource / Feasibility

Easy fixes are not the same as best fixes. The easiest high-effect fixes are small checks:

- archive-use check in LOOP_DIAGNOSE;
- registry-vs-derivation/fallback-promotion check;
- Durable Term Boundary Check table or mini-gate.

The more meaningful Navigation fix needs more careful source edits because it changes context intake fields and review triggers.

New anchor: easiest high-effect fixes should be small guards, not full Navigation behavior patches.

### Definitional / Consistency

Navigation route-memory reliability depends on three definitions staying separate:

```text
discovery finds candidate files
review interprets old route memory
Navigation maps current routes
```

Loop reliability depends on another separation:

```text
Sensemaking clarifies
Innovation proposes
Critique evaluates on the right axes
CONCLUDE hardens only what survived with enough support
```

New anchor: fixes should preserve layer separation.

## SV3 - Multi-Perspective Understanding

The stabilized ranking model is:

```text
For immediate system reliability:
  fix Navigation route-memory intake first.

For broad future-loop reliability:
  fix Critique's ability to attack the real failure axis.

For quick wins:
  add small explicit checks that prevent repeated known mistakes.
```

This means the final answer should not choose one universal "best" fix. It should answer each category separately and explain why the same fix does not win every category.

## Phase 3 - Ambiguity Collapse

### Ambiguity: What does "most urgent" mean here?

**Strongest counter-interpretation:**
Most urgent means the fix that appears in the most diagnostic findings.

**Why the counter-interpretation fails (structural grounds):**
Frequency alone would over-rank broad critique checks. The next likely real failure is in active Navigation route-memory behavior: the system has source-present review policies, discovery pressure, route-memory status decisions, and early-stage robust mode that are not fully materialized. A broad critique rule helps future analysis but does not make the next Navigation run safer by itself.

**Confidence:** HIGH

**Resolution:**
Most urgent means highest current operational risk plus diagnostic density.

**What is now fixed?**
Urgent ranking prioritizes Navigation route-memory intake before broad loop refinements.

**What is no longer allowed?**
Ranking only by number of mentions.

**What now depends on this choice?**
The urgent top two should be concrete route-memory patches.

**What changed in the conceptual model?**
Urgency becomes time-sensitive, not just frequency-sensitive.

### Ambiguity: What is the "most meaningful reliability fix"?

**Strongest counter-interpretation:**
The most meaningful fix is a broad Critique Dimension Addendum, because critique failures recur across many findings.

**Why the counter-interpretation fails (structural grounds):**
Critique improvements make future decisions more reliable, but the strongest immediate reliability failure is false route-memory discovery and hidden context state. If Navigation cannot know whether old route memory exists, it may skip review and resurrect stale routes. That is a direct reliability failure in the system's operational path.

**Confidence:** HIGH

**Resolution:**
The most meaningful reliability fix is the Navigation route-memory intake package: `PastNavigationMemoryFile Discovery` plus route-memory status/source-dependency trigger.

**What is now fixed?**
Reliability means runtime/protocol correctness for current Navigation before broad reasoning quality.

**What is no longer allowed?**
Treating safety-net improvements as a substitute for materializing the route-memory interface.

**What now depends on this choice?**
Innovation should assemble discovery, status, source dependency, and phase fields as one reliability candidate.

**What changed in the conceptual model?**
The reliability winner is a package, not one isolated gate.

### Ambiguity: What counts as "easy"?

**Strongest counter-interpretation:**
Easy means a small text addition anywhere, so Durable Term Boundary Check should win because it is mostly a prompt/table.

**Why the counter-interpretation fails (structural grounds):**
Durable Term Boundary Check is small in text, but it affects CONCLUDE, Critique, and future finding structure. It needs careful scope to avoid turning every term into a table. The smallest safe fixes with high effect are narrower: archive-use for diagnostics, and registry-vs-derivation/fallback-promotion for index/search decisions.

**Confidence:** MEDIUM-HIGH

**Resolution:**
Easy means low blast radius, clear trigger, and low risk of checklist bloat.

**What is now fixed?**
Easy high-effect fixes should be narrow checks with obvious activation conditions.

**What is no longer allowed?**
Calling a broad invariant easy just because the text patch is short.

**What now depends on this choice?**
The easiest two should be archive-use and registry-vs-derivation/fallback-promotion.

**What changed in the conceptual model?**
Ease includes process risk, not only editing effort.

### Ambiguity: Which fix touches most and has the most effect?

**Strongest counter-interpretation:**
Durable Term Boundary Check touches most because every future protocol term or finding name can pass through it.

**Why the counter-interpretation fails (structural grounds):**
Durable terms are common, but not every failure was caused by naming. Critique dimension blindness appears across storage policy, archive-first diagnosis, registry/search, operation proliferation, phase calibration, and proxy triggers. Critique is the contraction stage that should catch wrong premises before CONCLUDE hardens them. A scoped Critique Dimension Addendum touches more failure families.

**Confidence:** MEDIUM-HIGH

**Resolution:**
The broadest effect fix is a scoped Critique Dimension Addendum / premise-dimension validation pack.

**What is now fixed?**
Broadest impact means cross-domain missed-catch coverage, not only number of files edited.

**What is no longer allowed?**
Choosing a naming fix as broadest just because naming was recent.

**What now depends on this choice?**
Critique should evaluate how to scope dimension addenda without making Critique generic and heavy.

**What changed in the conceptual model?**
The broadest fix is evaluative, not operational.

## SV4 - Clarified Understanding

The categories should resolve this way:

- **Most urgent two fixes:** Navigation route-memory discovery/status/source-dependency patch, then phase-calibrated early-stage route-memory policy with telemetry.
- **Most meaningful reliability fix:** the combined Navigation route-memory intake package.
- **Easiest two high-effect fixes:** archive-use check for LOOP_DIAGNOSE and registry-vs-derivation/fallback-promotion check for index/registry decisions.
- **Broadest touch/effect fix:** scoped Critique Dimension Addendum / premise-dimension validation pack.

Durable Term Boundary Check is still important. It is not the easiest or broadest single fix, but it should likely be bundled into the broad Critique/CONCLUDE layer after the operational Navigation patch.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed Variables

- Navigation route-memory intake is the active operational hotspot.
- Discovery must be explicit before source-present review defaults can be trusted.
- Route-memory status should be universal and compact.
- Full Route Memory Review remains conditional and artifact-mandatory when it runs.
- Critique needs scoped dimensions that match the failure type.
- Easy fixes must have narrow triggers.

### Eliminated Options

- Broad MVL+ rewrite as first action.
- Full Naming Review discipline as first action.
- Mandatory maintained PastNavigationMemoryFile Index before search baseline.
- `route_memory_review.md` for every skipped case.
- Ranking solely by frequency.
- Treating CONCLUDE backstops as sufficient on their own.

### Viable Paths

1. Patch Navigation route-memory intake first.
2. Add scoped loop-level critique checks after or alongside the Navigation patch.
3. Add small diagnostic/index checks as quick wins.
4. Add durable-term checks as part of a bounded Critique/CONCLUDE hardening pass.

## SV5 - Constrained Understanding

The final answer should produce a prioritized plan, not just categories:

```text
P0:
  Navigation route-memory intake package.

P1:
  Phase-calibrated early-stage review policy with telemetry.
  Scoped Critique Dimension Addendum.

Quick wins:
  Archive-use check.
  Registry-vs-derivation + fallback-promotion.

Broad fix:
  Critique dimension/premise validation pack, with Durable Term Boundary Check as a component.
```

## Phase 5 - Conceptual Stabilization

### Stable Interpretation

The diagnostics are telling one larger story:

```text
Homegrown is creating durable process rules faster than its boundary interfaces are being materialized.
```

The most dangerous current instance is Navigation route-memory. It has decisions that depend on old memory existing, but discovery, status, confidence, and phase behavior are still not fully materialized.

The broad loop-level instance is Critique. Many prior loops had enough signal somewhere in the pipeline, but Critique did not attack the exact axis that later failed.

The quick-win instance is diagnostic/index work. Existing archived artifacts and deterministic derivability checks can prevent new marks or registries from being invented too early.

## SV6 - Stabilized Model

The final model:

```text
Fix current Navigation reliability first.
Then harden the loop's evaluation layer.
Use narrow quick checks to stop known repeated mistakes immediately.
```

Concrete category winners:

```text
Most urgent 2:
  1. Navigation route-memory intake package:
     PastNavigationMemoryFile Discovery + route_memory_status + source-dependency trigger.
  2. Phase-calibrated early-stage Route Memory Review policy:
     navigation_phase, explicit exceptions, anti-authority safeguards, exit telemetry.

Most meaningful reliability fix:
  Navigation route-memory intake package.

Easiest 2 high-effect fixes:
  1. Archive-use check for LOOP_DIAGNOSE / correction-chain framing.
  2. Registry-vs-derivation + fallback-promotion check for index/registry decisions.

Broadest touch/effect fix:
  Scoped Critique Dimension Addendum / premise-dimension validation pack,
  including proxy-trigger, base-loop burden, artifact reuse, fallback-as-primary,
  phase/calibration, and name-implied behavior dimensions when relevant.
```

Difference from SV1:

SV1 implied a single priority list. SV6 produces separate winners for separate ranking axes and separates operational Navigation safety from broad loop reasoning safety.

## Telemetry

Perspective saturation: reached. Technical, human, strategic, risk, feasibility, and definitional perspectives converged on different winners by category.

Ambiguity resolution ratio: high. The main ambiguous ranking terms were resolved.

SV delta: strong. The model moved from frequency ranking to axis-specific prioritization.

Anchor diversity: good. Anchors include current operational risk, cross-finding frequency, process cost, future-loop reach, and user trust.
