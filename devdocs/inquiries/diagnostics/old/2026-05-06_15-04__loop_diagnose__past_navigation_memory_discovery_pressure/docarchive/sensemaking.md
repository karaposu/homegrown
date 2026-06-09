# Sensemaking: Loop Diagnose - Past Navigation Memory Discovery Pressure

## User Input

`devdocs/inquiries/2026-05-06_15-04__loop_diagnose__past_navigation_memory_discovery_pressure/_branch.md`

## SV1 - Baseline Understanding

Initial interpretation:

```text
The prior robust-mode inquiry probably created discovery pressure by making "PastNavigationMemoryFile exists" the early-stage trigger without saying how Navigation discovers those files. The later index inquiry then tried to satisfy that missing discovery interface.
```

The main caution is that this does not automatically mean the prior loop should have recommended an index. It may only mean the prior loop should have made the discovery interface explicit.

## Phase 1 - Cognitive Anchor Extraction

### Constraints

- Treat the later index inquiry as comparative evidence, not ground truth.
- Do not diagnose from `finding.md` alone; archived discipline outputs have been read.
- The prior inquiry's branch question was phase policy: should early-stage Homegrown run full review more often for robustness?
- The prior inquiry's answer made `PastNavigationMemoryFile exists` decisive for early-stage durable Navigation.
- The prior inquiry did not define a complete discovery/search/index/fallback protocol.
- The later inquiry was directly prompted by the user asking whether a record/index would be easier and feasible.
- The later inquiry narrowed "all Navigation-related files" to `PastNavigationMemoryFile` candidates.
- A maintained index can solve discovery friction but can also create stale mutable state.

### Key Insights

- The prior loop's robust policy can be correct while its source-discovery interface is incomplete.
- "Source exists" is not operational unless there is a way to classify present, absent, or unknown.
- The absence of an `unknown` discovery status is important. Under-specified discovery can silently become false absence.
- The later index was a reasonable bridge from the gap because it gave a known place to find candidates.
- The later index may also have been an overcorrection if deterministic active-tree search was enough for v1.
- The safer maintenance target is not "always create an index"; it is "any source-present trigger must define candidate discovery strategy and confidence behavior."

### Structural Points

Correction-chain structure:

```text
prior question:
  early-stage robust trigger policy

prior answer:
  durable Navigation + PastNavigationMemoryFile exists -> full review by default

missing interface:
  how to determine PastNavigationMemoryFile exists

human correction:
  maybe keep a record/index of Navigation-related file creations

later answer:
  narrow PastNavigationMemoryFile Index
  + creation-time registration
  + active-tree scan/backfill fallback
  + index is discovery, not authority
```

Pipeline-stage structure:

```text
Exploration saw source risk but did not map discovery mechanisms.
Sensemaking named source layer but did not operationalize source detection.
Decomposition named route-memory source detection but did not decompose it.
Innovation generated robust-mode policy candidates but not discovery candidates.
Critique did not prosecute how source-present would be known.
CONCLUDE proposed intake patches that depended on source-present classification.
```

### Foundational Principles

- A trigger that depends on file existence must define how existence is discovered or how unknown status is handled.
- Discovery is not interpretation. Finding candidate files is separate from deciding what they mean now.
- Homegrown explicitness supports durable artifacts, but explicitness alone does not prove a maintained index is the right first mechanism.
- Indexes are safer when they are discovery aids, not current truth.
- A correction-chain diagnosis should repair the smallest load-bearing gap supported by evidence.

### Meaning-Nodes

- Discovery pressure
- Source-present trigger
- `PastNavigationMemoryFile`
- Candidate discovery
- Present / absent / unknown
- Maintained index
- Deterministic search
- Bridge versus overcorrection
- Load-bearing interface

## SV2 - Anchor-Informed Understanding

The better diagnostic question is not:

```text
Should the prior loop have invented the PastNavigationMemoryFile Index?
```

The better diagnostic question is:

```text
When the prior loop made PastNavigationMemoryFile existence the trigger, should it have defined the discovery interface enough to prevent later confusion?
```

The answer is likely yes. The prior branch did not require a full implementation, but the final policy did require a clear way to decide source presence.

## Phase 2 - Perspective Checking

### Technical / Logical

Input:

```text
PastNavigationMemoryFile exists -> review by default
```

This is incomplete if `exists` has no detection semantics. A runner needs:

- candidate patterns;
- active versus archive boundary;
- confidence when scan/index is unavailable;
- fallback when the index is absent or stale;
- an `unknown` state if discovery was not performed or could not be trusted.

New anchor: existence-dependent triggers require discovery semantics.

### Human / User

The user has repeatedly pushed for understandable names and explicit artifacts. The phrase "source exists" is not satisfying if it leaves a human wondering where that source is found.

The index question is a human clarity signal. It says: "If this file's existence matters, why do we not have a simple place to see these files?"

New anchor: the user correction is not only technical; it is also a demand for visible handoff.

### Strategic / Long-Term

Early-stage robust mode deliberately spends more tokens to avoid memory loss. But discovery itself must be robust. If discovery is ad hoc, robust mode can fail before review even begins.

At the same time, creating maintained indexes too early can add duplicate state and update burden. Future automation may prefer deterministic search or metadata.

New anchor: robust discovery should be explicit but not prematurely over-materialized.

### Risk / Failure

Under-discovery risks:

- runner misses a prior `navigation.md`;
- runner treats no index row as no source;
- route-memory review is skipped and stale route memory returns;
- bounded local memory files are missed because discovery patterns were not named.

Over-index risks:

- every Navigation-adjacent file is registered and review becomes noisy;
- index absence is treated as authoritative;
- index stores route dispositions and becomes a second Route Memory Review;
- manual registration drifts.

New anchor: both scan-only and index-only can fail; the interface must include fallback and confidence.

### Resource / Feasibility

The later index inquiry found current active backfill small. That makes a narrow index feasible now. But cheap initial backfill does not prove ongoing maintenance is cheap.

The prior loop could have required a discovery strategy without choosing the maintained index immediately.

New anchor: a phased answer could have been "define discovery status now; choose index/search after testing."

### Definitional / Consistency

`PastNavigationMemoryFile` is a semantic category: files that may contain past Navigation memory. It is not the same as "all Navigation-related files."

A `PastNavigationMemoryFile Index`, if used, should only point to candidates. It must not classify current route truth. Route Memory Review owns current interpretation.

New anchor: discovery category and review authority must stay separate.

## SV3 - Multi-Perspective Understanding

The stabilized interpretation is:

```text
The prior loop likely created a real discovery gap.

It did not need to pick an index as the solution, but it should have made
PastNavigationMemoryFile discovery a named interface once it made source
presence the robust-mode trigger.

The later index inquiry was a reasonable bridge from that gap, but it was
not proven to be the only or best v1 mechanism.
```

This makes the diagnosis sharper. The prior loop's failure was not "it failed to maintain an index." The failure was "it made existence decisive without defining how existence is known."

## Phase 3 - Ambiguity Collapse

### Ambiguity: Did the prior loop need to solve discovery?

**Strongest counter-interpretation:**
No. The prior inquiry asked whether early-stage Homegrown should lower the Route Memory Review trigger. It was not an implementation inquiry about file discovery.

**Why the counter-interpretation fails (structural grounds):**
The prior finding did more than answer the high-level policy. It proposed MUST patches to Navigation context intake where `past_navigation_memory_file: present` routes to full review by default. Once a finding proposes that operational behavior, source presence becomes an interface. The interface can be minimal, but it cannot remain implicit.

**Confidence:** HIGH.

**Resolution:**
The prior loop did not need to implement a full discovery system, but it did need to define the discovery interface enough to support its trigger.

**What is now fixed?**
The diagnosis targets missing interface definition, not failure to build an index.

**What is no longer allowed?**
Excusing the gap entirely because the branch question was phase policy.

**What now depends on this choice?**
Maintenance should focus on existence-dependent trigger rules.

**What changed in the conceptual model?**
The failure is a boundary miss between policy and operational intake.

### Ambiguity: Was the later index a reasonable bridge or an overcorrection?

**Strongest counter-interpretation:**
It was an overcorrection. The corrected inquiry created maintained state before proving that deterministic active-tree search was insufficient.

**Why the counter-interpretation fails (structural grounds):**
The later inquiry did not accept a broad route-state index. It narrowed scope to `PastNavigationMemoryFile` candidates, killed route-disposition fields, treated the index as non-authoritative, and required scan/backfill fallback. That means it was a bounded discovery proposal, not a full duplicate authority system.

**Confidence:** MEDIUM-HIGH.

**Resolution:**
The index was a reasonable bridge from the under-specified discovery problem, but not proven uniquely necessary.

**What is now fixed?**
The corrected inquiry can be used as evidence of the missing interface, but not as proof that maintained indexing is mandatory.

**What is no longer allowed?**
Treating the index finding as ground truth or treating it as pure overreach.

**What now depends on this choice?**
Innovation should compare discovery-interface candidates, including deterministic search and hybrid index/search.

**What changed in the conceptual model?**
The later index is classified as plausible response with overcorrection risk.

### Ambiguity: Did the prior gap cause the index inquiry?

**Strongest counter-interpretation:**
The index inquiry came from the user's explicit preference for artifacts, not from a prior-loop failure.

**Why the counter-interpretation fails (structural grounds):**
The user's artifact preference explains why an index felt attractive, but the prior robust policy created the specific need. The trigger required a yes/no answer about `PastNavigationMemoryFile` existence. The later inquiry's Exploration directly identifies that detection problem as the index's reason.

**Confidence:** MEDIUM.

**Resolution:**
The prior gap plausibly pushed the next loop toward the index, but it was not the sole cause. User explicitness preference and Homegrown's artifact culture also contributed.

**What is now fixed?**
Attribution should be mixed: prior interface gap plus user/system preference for explicit durable artifacts.

**What is no longer allowed?**
Claiming a deterministic causal chain where the prior loop alone caused the index recommendation.

**What now depends on this choice?**
Maintenance should avoid overcorrecting with a broad "always index" rule.

**What changed in the conceptual model?**
The index becomes an understandable response to a gap, not an inevitable result.

### Ambiguity: What should `PastNavigationMemoryFile discovery` mean?

**Strongest counter-interpretation:**
Discovery means reading and interpreting all old Navigation files.

**Why the counter-interpretation fails (structural grounds):**
Reading and interpreting old route memory is Route Memory Review. Discovery only needs to find candidate files and report confidence. If discovery starts deciding carry-forward, retire, or ignore, it becomes duplicate review authority.

**Confidence:** HIGH.

**Resolution:**
Discovery means candidate enumeration plus confidence/status, not current route interpretation.

**What is now fixed?**
The discovery interface can output present, absent, unknown, candidate paths, and discovery method.

**What is no longer allowed?**
Putting current route dispositions into discovery indexes or discovery search output.

**What now depends on this choice?**
Candidate schemas and policy patches must keep discovery and review separate.

**What changed in the conceptual model?**
The missing interface is narrower and safer than a full review operation.

### Ambiguity: What maintenance layer should be targeted?

**Strongest counter-interpretation:**
Patch the prior policy to require the `PastNavigationMemoryFile Index`.

**Why the counter-interpretation fails (structural grounds):**
The correction chain proves a discovery interface gap. It does not prove maintained index superiority over deterministic active-tree search or local metadata. Requiring the index now may repeat the same failure in reverse: choosing a mechanism before validating the dependency.

**Confidence:** MEDIUM-HIGH.

**Resolution:**
Maintenance should require existence-dependent triggers to define discovery strategy, confidence states, and fallback. The index can be one candidate implementation, not the invariant itself.

**What is now fixed?**
The maintenance invariant is discovery-interface completeness, not index creation.

**What is no longer allowed?**
Promoting the index to a mandatory solution from this correction chain alone.

**What now depends on this choice?**
Decomposition and Innovation should evaluate search, index, hybrid, and status-only candidates.

**What changed in the conceptual model?**
The repair moves one layer up: from artifact choice to trigger-interface rule.

## SV4 - Clarified Understanding

The clarified diagnosis:

```text
The prior loop was right to source-gate robust review.

The prior loop was incomplete because "PastNavigationMemoryFile exists"
became a decisive trigger without a discovery contract.

The later index inquiry was a reasonable bridge because it tried to make
candidate discovery explicit.

The later index inquiry may still have overcorrected if deterministic search
could solve v1 discovery with less maintained state.
```

The main failure is not missing index generation. The main failure is an under-specified source-discovery interface.

## Phase 4 - Degrees-of-Freedom Reduction

### Fixed Variables

- Prior robust-mode policy remains structurally valid.
- `PastNavigationMemoryFile exists` is load-bearing in that policy.
- Discovery was under-specified in the prior inquiry.
- The later index is comparative evidence of that gap.
- Discovery must stay separate from review interpretation.
- The maintained index is not proven mandatory by this correction chain.

### Eliminated Options

- Blame the prior loop for not building an index specifically.
- Treat the later index as ground truth.
- Treat broad "all Navigation-related files" indexing as the repair.
- Let `present | absent` be used when discovery was not performed.
- Put current route decisions into a discovery artifact.

### Viable Paths

1. Define `PastNavigationMemoryFile Discovery` as a normal Navigation intake sub-interface.
2. Add a status vocabulary:
   ```text
   present | absent | unknown | stale_index | search_backfilled
   ```
3. Require any source-present trigger to name its discovery method and fallback.
4. Evaluate deterministic active-tree search before maintained index becomes mandatory.
5. Allow a hybrid index/search design if real discovery friction or artifact growth justifies it.

## SV5 - Constrained Understanding

The diagnosis now has a narrow shape:

```text
Failure class:
  source-discovery interface gap.

Prior cause:
  robust policy made source presence decisive but did not define how source
  presence is discovered or what unknown means.

Later response:
  maintained index solved the visibility problem but carried state-drift risk.

Maintenance target:
  require discovery strategy + confidence/fallback for existence-dependent
  triggers; do not hard-code index as the only repair yet.
```

## Phase 5 - Conceptual Stabilization

### Stable Interpretation

The prior loop likely pushed the next loop toward a maintained index because it left the user and future runner with a load-bearing question:

```text
Does a PastNavigationMemoryFile exist?
```

That question was named but not operationally answerable from the prior finding alone.

The later inquiry answered by creating a candidate registry. That was understandable and locally reasonable under Homegrown's explicit-artifact culture, especially because early-stage robust mode values durability over speed.

But the deeper repair is not "always create a registry." The deeper repair is:

```text
When a policy trigger depends on artifact existence, the policy must define
how existence is discovered, how uncertainty is represented, and what fallback
prevents false absence.
```

## SV6 - Stabilized Model

The final sensemaking model:

```text
The prior robust-mode inquiry did not fail by choosing source-gated review.

It failed by leaving PastNavigationMemoryFile discovery under-specified after
making source presence decisive.

The later index inquiry was a reasonable bridge from that gap because it made
candidate discovery explicit and non-authoritative.

The later index was not proven uniquely necessary. It should be treated as one
candidate implementation of a broader discovery-interface requirement.
```

Difference from SV1:

SV1 suspected that the prior policy pushed the next loop toward an index. SV6 narrows that into a more defensible claim: the prior policy created discovery pressure, but the correct maintenance target is discovery-interface completeness rather than mandatory maintained indexing.

## Telemetry

Perspective saturation: reached. Technical, human, strategic, risk, feasibility, and definitional perspectives converge on the same boundary: discovery must be explicit, but index is only one possible mechanism.

Ambiguity resolution ratio: high. The main remaining uncertainty is empirical: whether deterministic search or a maintained index works better in actual Navigation runs.

SV delta: strong. The model moved from "prior caused index" to "prior under-specified discovery; index was a plausible but not mandatory bridge."

Anchor diversity: good. Anchors include branch scope, artifact evidence, user correction, operational trigger semantics, Homegrown explicitness, and duplicate-state risk.
