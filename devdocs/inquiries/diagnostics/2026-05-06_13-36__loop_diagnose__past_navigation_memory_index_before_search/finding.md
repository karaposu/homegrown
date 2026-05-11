---
status: active
diagnoses:
  - devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility/finding.md
compares_with:
  - devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search/finding.md
uses_protocol:
  - homegrown/protocols/loop_diagnose.md
---
# Finding: Loop Diagnose - Past Navigation Memory Index Before Search

## Question

Given the weak prior inquiry at `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`, the human correction, and the later improved inquiry at `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search`, what did the prior loop likely miss, why did it miss it, and what maintenance candidates follow?

Goal: identify evidence-backed failure hypotheses, confidence levels, affected discipline or runner stages, shortcoming types, maintenance candidates, and evaluation gates. Avoid pretending to know exact root cause when the evidence is weak.

## Finding Summary

- The prior loop did not simply forget to search. It did search active artifacts and required scan/backfill fallback.

- The prior loop's main miss was treating search as support for a maintained index instead of testing search as the primary explicit discovery mechanism.

- The strongest diagnosis is a mechanism-selection failure: the prior loop selected a maintained registry before giving the search alternative its strongest form.

- The strongest missing alternative was `PastNavigationMemoryFile Discovery Search`: a protocol-owned search contract with explicit roots, filename patterns, exclusions, candidate statuses, and optional run-local report.

- The clearest affected stages are Innovation and Critique. Innovation did not generate the strongest explicit-search candidate. Critique made the index safer with scan/backfill but did not ask whether the fallback should become the v1 primitive.

- Sensemaking also contributed by over-associating Homegrown explicitness with a maintained Markdown registry. That is an explicitness-shape error, not evidence that Homegrown should stop writing explicit artifacts.

- The diagnostic verdict is **ACTIONABLE, narrowly**. The maintenance candidate is not a broad MVL+ rewrite. It is a targeted registry-vs-derivation challenge with evaluation gates.

## Correction Chain Summary

**Prior inquiry:** `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`

The prior inquiry recommended creating a maintained global file:

```text
devdocs/navigation_context/past_navigation_memory_file_index.md
```

The intended role was narrow and non-authoritative. It would register files that may contain past Navigation memory, such as prior Navigation maps, route-memory reviews, `_frontier.md` ledgers, and sync or warm-up outputs that mention route-state changes. Route Memory Review would still read those files and decide current meaning.

**Human correction:** the user challenged the maintained index by asking why Homegrown needs an index if the codebase can simply search known file names and regex-searchable path patterns.

**Corrected inquiry:** `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search`

The corrected inquiry replaced the maintained global index as v1 with:

```text
PastNavigationMemoryFile Discovery Search
```

That search is not casual grep. It is a protocol-owned operation with active-doc scope, archive exclusions, known candidate filenames, false-positive controls, and output modes. It allows a run-local `past_navigation_memory_candidates.md` when one search result needs durable handoff or audit.

**What changed:** maintained global index moved from default v1 mechanism to deferred option.

**What stayed:** Navigation still needs robust old route-memory discovery, Route Memory Review still interprets current meaning, and a future generated or maintained index can be revived if observable triggers appear.

## Finding

Navigation in Homegrown is the process that maps possible next routes. Old Navigation artifacts can carry useful route memory, such as blockers, deferred routes, killed routes, and unfinished directions. They can also be dangerous when stale, because an old route can be resurrected after later findings made it invalid.

That is why Homegrown has been developing Route Memory Review. Route Memory Review reads old Navigation memory and decides what the next Navigation map should carry forward, retire, keep blocked, check again, or ignore.

The disputed question was only one step before review:

```text
How should the system discover candidate files that may contain past Navigation memory?
```

The prior loop answered with a maintained index. The corrected loop answered with deterministic discovery search.

The prior answer was not careless. It correctly rejected a broad index of all Navigation-related files. It correctly said the index must not store current route truth. It correctly required active-tree scan/backfill if the index might be stale.

The failure is subtler: the prior loop made the index safe by adding scan/backfill, but did not ask whether that scan/backfill was actually the primary mechanism Homegrown needed.

The corrected answer shows the missing shape:

```text
PastNavigationMemoryFile Discovery Search
  -> candidate files
  -> optional run-local candidate report
  -> Route Memory Review Sources Read
  -> Navigation consumes review result
```

This preserves explicitness without creating a manual global registry. The explicit artifact is the protocol rule. A durable candidate file is created only when one search result needs to survive beyond the current session or needs audit.

## Failure Hypotheses

### Hypothesis 1: Exploration under-probed search as the primary mechanism

**Affected stage:** Exploration.

**Shortcoming type:** Search was treated as evidence/fallback, not developed as a first-class design option.

**Evidence from prior inquiry:** Prior Exploration scanned active artifact families and found the active Navigation map, while finding no active `_frontier.md`, `route_memory_review.md`, `prior_map_overlay.md`, or inquiry-local `navigation.md`. The prior finding also required scan/backfill.

**Evidence from human correction:** The user explicitly challenged why an index was needed when known filenames and regex-searchable paths could be searched.

**Evidence from corrected inquiry:** Corrected Exploration directly tested active-tree search and concluded that the prior fallback weakened the need for a maintained index.

**Confidence:** MEDIUM-HIGH.

**Why not stronger:** The prior loop did search. The miss was role/framing, not total absence.

**Maintenance candidate:** When a loop evaluates a maintained index, Exploration should probe whether deterministic search can be the primary mechanism.

**Evaluation gate:** In the next three maintained-index proposals, record whether active-tree search was tested as primary, not just fallback.

### Hypothesis 2: Sensemaking over-associated explicitness with maintained registry

**Affected stage:** Sensemaking.

**Shortcoming type:** Explicitness-shape collapse.

**Evidence from prior inquiry:** Prior Sensemaking emphasized a known human-readable place and Homegrown's explicit Markdown artifact culture.

**Evidence from human correction:** The user's objection exposed that a maintained file can be unnecessary ceremony when the repository itself is searchable.

**Evidence from corrected inquiry:** Corrected Sensemaking says explicitness can live in a documented search contract and optional per-run report.

**Confidence:** MEDIUM-HIGH.

**Why not stronger:** Prior Sensemaking also recognized stale-index risk and authority separation. It was not blind artifact maximalism.

**Maintenance candidate:** Add a narrow explicitness-shape note for artifact decisions.

**Evaluation gate:** Use the note only when choosing among protocol rule, telemetry, run-local report, maintained registry, generated index, or authoritative ledger.

### Hypothesis 3: Innovation failed to generate the strongest search alternative

**Affected stage:** Innovation.

**Shortcoming type:** Weak alternative generation.

**Evidence from prior inquiry:** Prior Innovation considered "No Index, Scan Each Time" and killed it as default because it recreated discovery friction. It did not produce `PastNavigationMemoryFile Discovery Search` as a named protocol operation with output modes.

**Evidence from human correction:** The user asked why search was not enough, forcing the stronger alternative into view.

**Evidence from corrected inquiry:** Corrected Innovation's survivor is `PastNavigationMemoryFile Discovery Search` plus optional `past_navigation_memory_candidates.md`, with maintained index deferred behind revival triggers.

**Confidence:** HIGH.

**Why not stronger:** Innovation inherited an index-centered frame from earlier stages, so it is not the only failed surface.

**Maintenance candidate:** Add a strongest-alternative rule for artifact/no-artifact and registry/search choices.

**Evaluation gate:** Before killing scan/no-index alternatives, require one strengthened version with explicit scope, exclusions, statuses, telemetry, or optional report.

### Hypothesis 4: Critique missed fallback-as-primary prosecution

**Affected stage:** Critique.

**Shortcoming type:** Safety fallback treated as mitigation instead of possible primitive.

**Evidence from prior inquiry:** Prior Critique made the maintained index safer by requiring scan/backfill and by keeping route dispositions out of the index.

**Evidence from human correction:** The user challenged the need for the maintained index once search was already available.

**Evidence from corrected inquiry:** Corrected Critique killed the maintained global index as v1 because search can derive the candidate list and manual index drift can create false absence.

**Confidence:** HIGH.

**Why not stronger:** Critique can only evaluate candidates that are visible. The strongest explicit-search candidate was not fully generated before Critique.

**Maintenance candidate:** Add a fallback-promotion check.

**Evaluation gate:** When a candidate survives only because a fallback handles a critical risk, Critique must record whether that fallback is merely recovery or the actual primary mechanism.

### Hypothesis 5: Decomposition inherited an index-centered frame

**Affected stage:** Decomposition.

**Shortcoming type:** Downstream frame inheritance.

**Evidence from prior inquiry:** Prior Decomposition split the problem into index scope, schema, update ownership, review interface, validation/backfill, and rollout.

**Evidence from human correction:** The correction required a different decomposition: search scope, filename patterns, false-positive filtering, output modes, review consumption, and index revival triggers.

**Evidence from corrected inquiry:** Corrected Decomposition uses those search-centered pieces.

**Confidence:** MEDIUM.

**Why not stronger:** Decomposition likely followed the already-stabilized frame. It did not originate the miss.

**Maintenance candidate:** None by itself. Treat this as downstream evidence for the stronger Innovation and Critique candidates.

**Evaluation gate:** If another diagnostic shows Decomposition repeatedly inheriting wrong object boundaries, open a separate decomposition-boundary maintenance inquiry.

## Failure Attribution Summary

| Affected stage | Shortcoming type | Evidence strength | Confidence | Candidate action |
| --- | --- | ---: | ---: | --- |
| Exploration | Search treated as fallback/support, not primary mechanism | medium | medium-high | Probe deterministic search as primary when active state is searchable |
| Sensemaking | Explicitness-shape collapse toward maintained registry | medium | medium-high | Distinguish explicit mechanism from maintained artifact |
| Innovation | Strongest search-contract alternative not generated | strong | high | Add strongest-alternative rule |
| Critique | Fallback-as-primary prosecution missed | strong | high | Add fallback-promotion check |
| Decomposition | Index-centered frame inherited | medium | medium | Treat as downstream, not root |

## Maintenance Candidates

### Candidate 1: Registry-vs-derivation challenge

- **What should change:** When a maintained index or registry is proposed, require a recorded derivability check: can the indexed state be cheaply derived by deterministic search?
- **Potential file or protocol:** MVL+ peripheral guidance, Critique guidance, Innovation guidance, or artifact/materialization decision guidance.
- **Risk class:** low.
- **Expected benefit:** Prevents maintained registries from surviving when they only cache a cheap search result.
- **Evaluation gate:** The next three maintained-index proposals must record derivable/not-derivable, whether search was tested as primary, and why any registry still survived.
- **Branch experiment:** yes, if implemented in skill or protocol text.

### Candidate 2: Strongest search alternative rule

- **What should change:** Before killing a scan/no-index alternative, strengthen it into a protocolized search plus optional report when applicable.
- **Potential file or protocol:** Innovation guidance or artifact-shape decision guidance.
- **Risk class:** low-medium.
- **Expected benefit:** Prevents weak strawman alternatives like "scan each time" from being killed before their strongest explicit form is tested.
- **Evaluation gate:** Future artifact decisions show at least one strengthened non-registry candidate before selecting a registry.
- **Branch experiment:** optional.

### Candidate 3: Fallback-promotion check

- **What should change:** Critique asks whether a required fallback is only recovery, or whether it reveals the actual primary mechanism.
- **Potential file or protocol:** Critique guidance or MVL+ peripheral rule.
- **Risk class:** low.
- **Expected benefit:** Catches designs where a safety fallback is doing the real work.
- **Evaluation gate:** Future critiques with critical fallback mechanisms include a recorded "recovery vs primary" decision.
- **Branch experiment:** optional.

### Candidate 4: Explicitness-shape note

- **What should change:** Add local wording that explicitness can be a protocol rule, telemetry line, run-local report, maintained registry, generated index, or authoritative ledger.
- **Potential file or protocol:** Sensemaking guidance or artifact-shape decision guidance.
- **Risk class:** medium if broad, low if local to artifact-shape decisions.
- **Expected benefit:** Reduces maintained-file bias without weakening Homegrown's explicitness culture.
- **Evaluation gate:** Use only in artifact-shape decisions and verify it does not become an excuse for under-documenting.
- **Branch experiment:** no unless repeated diagnostics show the same failure.

## Next Actions

### MUST

- **What:** Treat this diagnostic as evidence for a narrow maintenance experiment, not as a reason for a broad MVL+ rewrite.
  **Who:** Future self-maintenance runner.
  **Gate:** Before editing MVL+ or discipline source.
  **Why:** The evidence supports a specific registry-vs-derivation weakness, not a general loop redesign.

- **What:** If a source edit is pursued, start with the registry-vs-derivation challenge and fallback-promotion check.
  **Who:** Future maintenance inquiry or branch experiment.
  **Gate:** When the user asks to patch the skills/protocols.
  **Why:** These are the highest-confidence, lowest-risk prevention rules from this correction chain.

### COULD

- **What:** Add the strongest search alternative rule alongside the registry-vs-derivation challenge.
  **Who:** Future maintenance inquiry.
  **Gate:** If the patch location naturally touches Innovation or artifact-shape guidance.
  **Why:** It prevents weak alternatives from being killed before they are made explicit and testable.

### DEFERRED

- **What:** Patch Navigation context intake to implement `PastNavigationMemoryFile Discovery Search`.
  **Gate:** Run this as a separate materialization task or implementation request.
  **Why (if revived):** This diagnostic explains why the prior loop failed; it is not itself the Navigation implementation patch.

- **What:** Add a broad explicitness-shape rule across all disciplines.
  **Gate:** Revive after at least two more correction-chain diagnostics show maintained-artifact bias.
  **Why (if revived):** Broader wording may be justified if this is a repeated pattern rather than a one-off registry decision.

## Reasoning

The flat diagnosis "the prior loop forgot search" was killed. Prior Exploration did search active artifacts, and the prior finding required scan/backfill. The evidence supports a role error, not a missing-read error.

The diagnosis "explicitness caused the bug" was refined. Homegrown's explicitness culture is not the problem. The corrected inquiry still values explicitness by defining a named Discovery Search contract and allowing a durable candidate report when handoff matters. The problem was equating explicitness with a maintained global registry.

The single-stage diagnosis "Innovation failed" was refined. Innovation has the strongest stage-level evidence because the strongest explicit-search candidate was absent. But Innovation inherited the frame from Exploration, Sensemaking, and Decomposition, so single-stage blame would overclaim.

The single-stage diagnosis "Critique failed" also needed refinement. Prior Critique was genuinely adversarial and caught real risks. Its miss was specific: it accepted scan/backfill as mitigation instead of asking whether that fallback should be primary.

The immediate Navigation source patch was killed for this inquiry. It may be the right downstream implementation, but this LOOP_DIAGNOSE run was asked to diagnose the loop failure and maintenance candidates. Mixing diagnosis with Navigation implementation would blur the result.

The surviving assembly is:

```text
prior loop had the right safety concerns
  + chose maintained registry too early
  + did not strengthen protocolized search as an alternative
  + did not prosecute fallback-as-primary
  -> maintained index survived as v1 when search contract should have survived
```

This assembly is actionable because it produces narrow rules that can be tested on future maintained-index proposals.

## Diagnostic Verdict

**Overall:** ACTIONABLE, narrowly.

- **Best-supported diagnosis:** The prior loop selected a maintained registry too early because it did not test protocolized Discovery Search as the strongest alternative, and Critique treated scan/backfill as a safety mitigation instead of asking whether it should be the v1 primitive.

- **Strongest maintenance candidate:** Add a registry-vs-derivation challenge with a fallback-promotion check.

- **Main uncertainty:** Exact stage attribution is mixed. Innovation and Critique have the strongest evidence, but Sensemaking and Exploration shaped the frame.

- **Recommended next step:** Run a small branch experiment before editing source broadly. The branch should add only the registry-vs-derivation challenge and fallback-promotion check, then evaluate the next three maintained-index proposals against those gates.

## Open Questions

### Monitoring

After the next three maintained-index proposals, check whether a runner recorded derivability, tested search as primary, and explained why any registry still survived.

### Refinement Triggers

Reopen this diagnosis if another loop-diagnose run finds that Decomposition, not Innovation/Critique, repeatedly creates the wrong object boundary before alternatives can be generated.

Reopen the maintenance candidate if the registry-vs-derivation challenge causes agents to under-document important durable handoff artifacts.

## Source Input

<details>
<summary>Raw user input for this finding</summary>

```text
$MVL+ 

Use homegrown/protocols/loop_diagnose.md.

prior_path:
devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility

corrected_path:
devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search

human_correction:
The user challenged the maintained index recommendation by asking why Homegrown needs an index if it can simply search the codebase for known file names and regex-searchable patterns.

optional_context:
The prior inquiry recommended `devdocs/navigation_context/past_navigation_memory_file_index.md` as a maintained non-authoritative discovery registry with scan/backfill fallback. The corrected inquiry said that fallback undermines the need for a maintained v1 index and replaced it with `PastNavigationMemoryFile Discovery Search` plus optional run-local candidate report.

diagnostic_goal:
Identify what the prior loop likely missed when it recommended a maintained PastNavigationMemoryFile Index before validating deterministic active-tree search. Diagnose affected stage or framing step with confidence levels. Pay special attention to whether Exploration under-tested the known filename/path search alternative, whether Sensemaking overvalued Homegrown explicitness as a maintained artifact, and whether Critique let a duplicate mutable state source survive. Read _branch.md, _state.md, finding.md, root discipline outputs if present, and docarchive/*.md for both folders. Do not diagnose from finding.md alone. Treat the corrected inquiry as comparative evidence, not ground truth.
```

</details>
