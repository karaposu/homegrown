---
status: active
diagnoses: devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review
compares_with: devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility
uses_protocol: homegrown/protocols/loop_diagnose.md
---
# Finding: Loop Diagnose - Past Navigation Memory Discovery Pressure

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review`, the human correction, and the later improved inquiry at `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

The diagnostic goal was to decide whether the prior source-present robust policy created an under-specified discovery problem that pushed the next loop toward a maintained `PastNavigationMemoryFile` index.

## Finding Summary

- The prior robust-mode inquiry did not fail by making full Route Memory Review source-gated. That policy can still be structurally valid.

- The prior inquiry likely failed at the discovery interface. It made `PastNavigationMemoryFile exists` decisive, but did not define how Navigation discovers those files or what to do when discovery confidence is unknown.

- The later index inquiry was a reasonable bridge from that gap. It made candidate discovery explicit, narrowed the user's broad "all Navigation-related files" idea, and kept Route Memory Review as the current interpretation authority.

- The later index inquiry was not proof that a maintained index is mandatory. A deterministic active-tree search might solve v1 discovery with less maintained state.

- The best repair is not "always create an index." The best repair is a rule: any trigger that depends on an artifact or source existing must define discovery method, discovery status, confidence behavior, and fallback.

- A discovery output should say which candidate files were found and how confident the system is. It should not say whether old routes are current, retired, ignored, or carried forward. That interpretation belongs to Route Memory Review.

- The strongest maintenance candidates are a `PastNavigationMemoryFile Discovery` sub-interface, a compact discovery status vocabulary, deterministic active-tree search as baseline/fallback, and a hybrid index/search policy if later evidence justifies the index.

## Correction Chain Summary

**Prior inquiry:** `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review`

The prior inquiry asked whether early-stage Homegrown should run full Route Memory Review more often for robustness and breakthrough preservation.

Its preserved answer was:

```text
early-stage durable Navigation
  + PastNavigationMemoryFile exists
  -> run full Route Memory Review by default
```

That answer made `PastNavigationMemoryFile exists` load-bearing.

**Human correction:**

```text
The user asked whether Homegrown should keep a record of all Navigation-related file creations so there would be a PastNavigationMemoryFile index, asking whether that would be easier and feasible.
```

The correction matters because it asks how the system finds the files whose existence now controls Route Memory Review.

**Later inquiry:** `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`

The later inquiry answered by recommending a narrow `PastNavigationMemoryFile Index` as a non-authoritative discovery registry, with creation-time registration and active-tree scan/backfill fallback.

That later inquiry is comparative evidence, not ground truth. It shows that the prior robust policy created discovery pressure. It does not prove that a maintained index is the only correct mechanism.

## Finding

Navigation needs to know whether old Navigation memory may affect a new route map. A `PastNavigationMemoryFile` is a file that may contain old Navigation routes, route states, blockers, stale routes, superseded routes, or route decisions.

The prior robust-mode finding made this condition decisive:

```text
PastNavigationMemoryFile exists
```

That condition is not operational by itself. A runner needs to know where to look, which file patterns count, whether archives are included, what happens when no index exists, and what status to record when discovery was not performed.

The prior loop did name the source layer. It did not ignore source detection completely. Prior Sensemaking named the source layer, prior Decomposition listed route-memory source detection, and the final finding listed categories of files that can be `PastNavigationMemoryFile`.

The miss is narrower: the prior loop did not turn source detection into an interface.

That matters because the prior final finding proposed Navigation context-intake patches. Once a finding says context intake should route `past_navigation_memory_file: present` to full review, it must say how `present` is known or explicitly mark that interface deferred.

The later index inquiry solved that visibility problem in one plausible way. It proposed a known Markdown file that lists candidate memory files. It also kept the index non-authoritative, which is correct.

The later index inquiry also carried a risk. It moved from "discovery is under-specified" to "maintain an index" before proving that deterministic active-tree search was insufficient for v1. It partially mitigated that risk by requiring scan/backfill fallback.

So the clean model is:

```text
PastNavigationMemoryFile Discovery
  -> finds candidate files
  -> records discovery status and confidence

Route Memory Review
  -> reads relevant candidate files
  -> decides current interpretation

Navigation
  -> consumes the review result
  -> writes the current route map
```

The key repair is the first box: `PastNavigationMemoryFile Discovery`.

## Failure Hypotheses

### Hypothesis 1: The prior loop left a load-bearing discovery interface undefined

**Affected stage:** mixed: Sensemaking, Decomposition, Innovation, Critique, and CONCLUDE.

**Shortcoming type:** source-discovery interface gap.

**Evidence from prior inquiry:** The prior `finding.md` says durable Navigation plus `PastNavigationMemoryFile exists` triggers full Route Memory Review by default. It also proposes Navigation context-intake patches. But the prior outputs do not define search paths, index behavior, archive boundaries, unknown status, or fallback.

**Evidence from human correction:** The user asked whether keeping a record/index would make discovering `PastNavigationMemoryFile` easier and feasible.

**Evidence from later inquiry:** The later inquiry's Exploration explicitly identifies the detection problem created by the early-stage robust trigger, then explores index shapes, scan fallback, and update ownership.

**Confidence:** HIGH.

**Why not stronger:** The prior branch question was phase policy, not implementation. That explains why discovery was not fully implemented, but it does not excuse leaving the interface implicit after proposing intake-routing patches.

**Maintenance candidate:** Add a discovery-interface invariant for existence-dependent triggers.

**Evaluation gate:** The next route-memory trigger policy must state discovery method, status vocabulary, confidence behavior, and fallback.

### Hypothesis 2: The prior model used present/absent without an unknown state

**Affected stage:** Sensemaking and Decomposition.

**Shortcoming type:** false absence risk.

**Evidence from prior inquiry:** Prior Decomposition includes interface fields such as `route_memory_sources: none | present`. It does not include `unknown`, `not_checked`, `stale_index`, or search/backfill statuses.

**Evidence from human correction:** The user's index question implies that determining existence is not obvious enough to leave implicit.

**Evidence from later inquiry:** The later inquiry requires active-tree scan/backfill because index absence can be dangerous. That is the same risk as false absence.

**Confidence:** MEDIUM-HIGH.

**Why not stronger:** The prior policy did include `no_past_navigation_memory_file` as an exception. It did not explicitly say a runner may declare no source without checking. The risk is inferred from the missing interface.

**Maintenance candidate:** Add `PastNavigationMemoryFile Discovery` statuses such as `present`, `absent`, `unknown`, `stale_index`, `search_backfilled`, and `already_consumed`.

**Evaluation gate:** In the next three durable Navigation context-intake runs, no `absent` status may be recorded unless a discovery method is named.

### Hypothesis 3: Decomposition named source detection but did not decompose it

**Affected stage:** Decomposition.

**Shortcoming type:** shallow boundary around a load-bearing dependency.

**Evidence from prior inquiry:** Prior Decomposition lists route-memory source detection as an element and notes coupling between exceptions and source detection. It does not split source detection into scope, search paths, index, validation, unknown status, and ownership.

**Evidence from human correction:** The user's next question lands exactly on the missing subproblem: whether to keep a record/index so the source can be found.

**Evidence from later inquiry:** The later Decomposition does split the problem into scope, schema, update ownership, review consumption, validation/backfill, and rollout timing.

**Confidence:** HIGH.

**Why not stronger:** The prior decomposition was answering a broader phase-policy question. Still, the source-detection atom was visible and should have triggered at least a deferred interface note.

**Maintenance candidate:** Add a decomposition check for existence-dependent triggers: if a piece says "source exists," decompose discovery enough to name method and confidence.

**Evaluation gate:** The next two route/intake policy decompositions must include a discovery sub-question whenever a trigger depends on file/source existence.

### Hypothesis 4: Innovation and Critique under-tested discovery alternatives

**Affected stage:** Innovation and Critique.

**Shortcoming type:** missing candidate family and missing adversarial dimension.

**Evidence from prior inquiry:** Prior Innovation generated robust-mode, anti-authority, exit telemetry, opt-out, audit, and sampling candidates. It did not generate deterministic search, maintained index, hybrid index/search, or discovery-status candidates. Prior Critique did not prosecute how `source_present` would be known.

**Evidence from human correction:** The user supplied one missing candidate family: an index or record of file creations.

**Evidence from later inquiry:** The later Innovation tested scan-only, global index, event log, per-file metadata, hybrid registry plus scan, and review consumed-set. The later Critique evaluated stale-index risk and discovery usefulness.

**Confidence:** MEDIUM-HIGH.

**Why not stronger:** The prior branch was not an index-design question. The evidence supports under-testing discovery alternatives, not that one particular alternative should have won.

**Maintenance candidate:** Add a scoped Critique guard for trigger/routing policy: "If this trigger depends on X existing, how is X discovered?"

**Evaluation gate:** Apply this guard on the next two trigger/routing inquiries and keep it only if it finds or clarifies a real issue.

### Hypothesis 5: CONCLUDE turned an incomplete interface into durable patch guidance

**Affected stage:** CONCLUDE.

**Shortcoming type:** secondary operational claim leakage.

**Evidence from prior inquiry:** The prior finding's MUST actions include patching `homegrown/protocols/navigation_context_intake.md` so `past_navigation_memory_file: present` routes to full review by default during early-stage discovery mode. The discovery interface is not defined in the finding.

**Evidence from human correction:** The user's next move was to ask whether an index should exist, which is exactly the missing support mechanism for that patch guidance.

**Evidence from later inquiry:** The later finding explicitly includes update ownership, index path, scan/backfill fallback, and anti-authority wording.

**Confidence:** MEDIUM-HIGH.

**Why not stronger:** The missing interface originated earlier than CONCLUDE. CONCLUDE amplified the gap by making it durable.

**Maintenance candidate:** Add a CONCLUDE backstop: if a finding proposes operational intake/routing behavior, define any load-bearing interface or mark it deferred.

**Evaluation gate:** For the next five findings that propose operational patches, each introduced interface must be defined or explicitly deferred.

### Hypothesis 6: Explicit-artifact culture pulled the later loop toward a maintained index

**Affected stage:** human correction, Sensemaking, and Innovation in the later inquiry.

**Shortcoming type:** possible mechanism over-selection.

**Evidence from prior inquiry:** The prior robust policy created a real need to discover `PastNavigationMemoryFile` candidates, but did not require a maintained index specifically.

**Evidence from human correction:** The user asked whether Homegrown should keep a record/index because that seemed easier.

**Evidence from later inquiry:** The later inquiry did test scan-only and preserved it as fallback. It still recommended a maintained index before empirical comparison with deterministic search.

**Confidence:** MEDIUM.

**Why not stronger:** The later index was narrowed and safeguarded. It was not a broad duplicate-authority system. The active backfill was small, and Homegrown's explicitness gives a real reason to prefer a visible registry.

**Maintenance candidate:** Treat maintained index as an implementation candidate with gates, not as the invariant.

**Evaluation gate:** Before making the index mandatory, run deterministic active-tree discovery once and compare cost, misses, and clarity against the proposed registry.

## Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
| --- | --- | --- | --- | --- |
| Mixed pipeline | Source-discovery interface gap | strong | high | Discovery-interface invariant |
| Sensemaking / Decomposition | Missing unknown/confidence state | medium-strong | medium-high | Discovery status vocabulary |
| Decomposition | Detection named but not decomposed | strong | high | Existence-trigger decomposition check |
| Innovation / Critique | Discovery alternatives under-tested | medium-strong | medium-high | Trigger-discovery critique guard |
| CONCLUDE | Operational patch depended on undefined interface | medium-strong | medium-high | Secondary interface guard |
| Later inquiry framing | Maintained index may have been selected before search baseline | medium | medium | Index as candidate, not invariant |

## Maintenance Candidates

### Candidate A: Discovery Interface Invariant

**What should change:** Any trigger that depends on an artifact/source existing must define how existence is discovered, how uncertainty is represented, and what fallback prevents false absence.

**Affected file or protocol:** Navigation context intake first; potentially CONCLUDE or trigger-policy guidance later.

**Risk class:** low-medium. The risk is adding abstract process language without concrete fields.

**Expected benefit:** Prevents source-present policies from depending on hidden discovery work.

**Evaluation gate:** The next route-memory trigger patch includes method, status, confidence, and fallback.

**Branch experiment:** yes, if source files are patched.

### Candidate B: `PastNavigationMemoryFile Discovery` Status Vocabulary

**What should change:** Navigation context intake should distinguish at least:

```text
present
absent
unknown
stale_index
search_backfilled
already_consumed
```

**Affected file or protocol:** `homegrown/protocols/navigation_context_intake.md` or the Navigation route-memory intake section.

**Risk class:** low.

**Expected benefit:** Prevents unknown discovery from being mistaken for absence.

**Evaluation gate:** No durable Navigation run may use `absent` unless it records the discovery method.

**Branch experiment:** yes.

### Candidate C: Deterministic Active-Tree Discovery Search

**What should change:** Define active-tree search patterns for candidate `PastNavigationMemoryFile` files before deciding whether a maintained index is mandatory.

**Affected file or protocol:** Navigation context intake or a route-memory discovery helper protocol.

**Risk class:** medium. Search patterns can be too broad or too narrow.

**Expected benefit:** Gives a validation substrate for both search-only and index-backed discovery.

**Evaluation gate:** Run the search once against the active tree and compare results with any proposed index/backfill.

**Branch experiment:** yes.

### Candidate D: Hybrid Index/Search Escalation Policy

**What should change:** Treat a maintained `PastNavigationMemoryFile Index` as a discovery accelerator or explicit handoff artifact, not as the invariant. Search remains fallback/validation.

**Affected file or protocol:** Navigation context intake and any future `past_navigation_memory_file_index.md` design.

**Risk class:** medium.

**Expected benefit:** Preserves the useful part of the later index inquiry while avoiding index-as-truth or mandatory maintained state.

**Evaluation gate:** Make the index mandatory only if search friction is high, artifact count grows enough to make search costly, or real discovery misses occur.

**Branch experiment:** yes, after search baseline is defined.

### Candidate E: Discovery / Review Authority Boundary

**What should change:** Discovery may output candidate paths, file kind, discovery method, and confidence. It must not output route dispositions such as carry forward, retire, ignore, or latest truth.

**Affected file or protocol:** Route Memory Review and Navigation context-intake docs.

**Risk class:** low.

**Expected benefit:** Prevents discovery artifacts from becoming duplicate Route Memory Review.

**Evaluation gate:** Any future index/search report schema must have no current route-disposition fields.

**Branch experiment:** include with Candidate A or B.

### Candidate F: Scoped Trigger-Discovery Critique Guard

**What should change:** For trigger/routing policy critiques, add: "If this trigger depends on X existing, how is X discovered?"

**Affected file or protocol:** Critique guidance for trigger/routing inquiries, or a local checklist.

**Risk class:** medium if made global; low-medium if scoped.

**Expected benefit:** Catches the prior Critique miss before CONCLUDE.

**Evaluation gate:** Test on two trigger/routing inquiries before making it durable.

**Branch experiment:** maybe.

### Candidate G: CONCLUDE Secondary Interface Guard

**What should change:** If a finding proposes operational routing or intake behavior, it must define any introduced load-bearing interface or mark it deferred.

**Affected file or protocol:** `homegrown/protocols/conclude.md`.

**Risk class:** medium.

**Expected benefit:** Prevents durable patch guidance from implying undefined interfaces are solved.

**Evaluation gate:** Apply to the next five findings with operational patch guidance and check whether it prevents ambiguity without bloating findings.

**Branch experiment:** yes.

### Rejected Candidate: Broad Navigation Artifact Index

**Verdict:** rejected.

**Why rejected:** Route Memory Review needs files that may contain past route memory, not every Navigation-adjacent artifact. A broad index creates noise and update burden.

**Revival gate:** Reopen only under a separate active-artifact inventory goal.

### Rejected Candidate: Leave Discovery To Later Implementation

**Verdict:** rejected.

**Why rejected:** The prior finding already proposed context-intake routing. That makes the discovery interface part of the durable policy, even if exact implementation is deferred.

**Revival gate:** Only acceptable if the finding explicitly marks discovery semantics deferred and does not present the route as ready to patch.

## Next Actions

### MUST

- **What:** Define `PastNavigationMemoryFile Discovery` as a Navigation intake sub-interface.
  **Who:** Navigation route-memory policy or context-intake design.
  **Gate:** Before source-present robust review is used as a normal durable Navigation trigger.
  **Why:** Makes the trigger operational instead of relying on hidden file discovery.

- **What:** Add a compact discovery status vocabulary with an `unknown` state.
  **Who:** Navigation context intake.
  **Gate:** Same patch as the discovery interface.
  **Why:** Prevents false absence when discovery has not been validated.

- **What:** Define deterministic active-tree search patterns as baseline/fallback.
  **Who:** Navigation context intake or a route-memory discovery helper.
  **Gate:** Before any maintained index is treated as complete or mandatory.
  **Why:** Provides a way to validate index absence and backfill missing candidates.

### COULD

- **What:** Keep or create a maintained `PastNavigationMemoryFile Index` as a visible discovery accelerator.
  **Who:** Navigation context materialization.
  **Gate:** After search baseline is defined, or if the user explicitly accepts the update burden for visible handoff.
  **Why:** May improve human clarity and reduce repeated rediscovery once route-memory artifacts grow.

- **What:** Add a scoped trigger-discovery question to Critique for routing and trigger-policy inquiries.
  **Who:** Critique guidance or route-policy inquiry checklist.
  **Gate:** After two trial uses.
  **Why:** Catches source-existence assumptions earlier.

- **What:** Add CONCLUDE's secondary interface guard.
  **Who:** CONCLUDE guidance.
  **Gate:** After one or two more diagnoses confirm undefined side interfaces recur.
  **Why:** Stops incomplete operational patch guidance from becoming durable.

### DEFERRED

- **What:** Make a maintained index mandatory.
  **Gate:** Reopen after deterministic search is tested, or after real discovery misses, high search friction, or enough artifact growth makes search-only impractical.
  **Why if revived:** A maintained index may become the right tradeoff once the discovery workload is empirically large.

- **What:** Create a broad index of all Navigation-related file creations.
  **Gate:** Reopen only under a separate global artifact inventory inquiry.
  **Why if revived:** That would serve onboarding or project inventory, not Route Memory Review discovery.

## Reasoning

The Discovery Interface Invariant survived because it fixes the correct layer. The prior failure was not absence of an index. The failure was a trigger whose required source-discovery work was implicit.

The discovery status vocabulary survived because it prevents a dangerous collapse from unknown to absent. Under early-stage robust mode, a false `absent` can skip Route Memory Review and allow stale route memory to return.

Deterministic active-tree search survived because it is the validation substrate. Even if Homegrown creates an index, search is needed to detect stale or missing index entries.

The maintained index as mandatory repair was refined, not killed. The later inquiry showed the index can be useful, especially for explicit handoff. But the correction chain does not prove that maintained indexing is the invariant. It proves that discovery must be defined.

The hybrid index/search policy survived because it keeps both truths: the index is useful for visibility and handoff, while search prevents false absence and tests whether the index is worth maintaining.

The discovery/review authority boundary survived because discovery artifacts should never decide current route truth. Candidate discovery can say "this file may contain old Navigation memory." Route Memory Review must decide whether the old routes are carried forward, retired, kept blocked, checked, or ignored.

The trigger-discovery Critique guard survived only with scope. It belongs in trigger/routing policy, not every critique.

The CONCLUDE secondary interface guard survived as a backstop. It cannot replace upstream thinking, but it can stop findings from publishing operational patch guidance that depends on an undefined interface.

The broad Navigation artifact index was killed. It solves a different problem and would make Route Memory Review noisier.

Leaving discovery to later implementation was killed. Exact implementation can be deferred, but the interface cannot stay invisible when the finding already proposes intake routing.

The main contradiction resolved across the loop was:

```text
Homegrown values explicit durable artifacts.
But explicitness does not automatically mean a maintained index is the right invariant.
```

The resolution is:

```text
Make the discovery interface explicit.
Then choose search, index, or hybrid based on evidence and phase needs.
```

## Open Questions

### Monitoring

- After the first three durable Navigation runs that use `PastNavigationMemoryFile Discovery`, check whether `unknown` or `stale_index` statuses occurred and whether they prevented false skips.

- After deterministic active-tree search is run once, compare its results with any proposed index rows and record whether the index adds real clarity.

### Blocked

- The exact first search pattern list is blocked until the next Navigation context-intake patch chooses active-tree boundaries and archive exclusions.

### Refinement Triggers

- Reopen mandatory maintained index if deterministic search misses three route-memory files, becomes too costly to repeat, or the active route-memory artifact count reaches ten durable files.

- Reopen broad Navigation artifact indexing only if a separate inquiry asks for global active-artifact inventory rather than Route Memory Review discovery.

## Diagnostic Verdict

**Overall:** ACTIONABLE.

- **Best-supported diagnosis:** The prior robust-mode loop left `PastNavigationMemoryFile` discovery under-specified after making source presence the early-stage review trigger.

- **Strongest maintenance candidate:** Discovery Interface Invariant plus compact `PastNavigationMemoryFile Discovery` status vocabulary.

- **Main uncertainty:** Whether deterministic active-tree search is enough for v1 or whether Homegrown should still maintain a visible index for handoff and trust.

- **Recommended next step:** Patch or draft Navigation context intake around `PastNavigationMemoryFile Discovery`, with status, search baseline, fallback, and a clear discovery/review authority boundary. Treat the maintained index as a candidate implementation, not the invariant.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review

corrected_path:
devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility

human_correction:
The user asked whether Homegrown should keep a record of all Navigation-related file creations so there would be a PastNavigationMemoryFile index, asking whether that would be easier and feasible.

optional_context:
The prior inquiry made early-stage robust review depend on whether a PastNavigationMemoryFile exists. The later inquiry tried to solve that discovery pressure by recommending a maintained index, while narrowing it away from all Navigation-related files.

diagnostic_goal:
Diagnose whether the source-present robust policy created an under-specified discovery problem that pushed the next loop toward a maintained index. Identify what the prior loop did or did not specify about discovering PastNavigationMemoryFile candidates, and whether the later index idea was a reasonable bridge or an overcorrection. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.


BE CAREFUL
```

</details>
