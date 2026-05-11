# Exploration: Loop Diagnose - Past Navigation Memory Discovery Pressure

## Mode And Entry Point

Mode: artifact exploration.

Entry point: signal-first. The signal is the user's diagnostic question:

```text
Did the prior source-present robust policy create an under-specified discovery problem that pushed the next loop toward a maintained PastNavigationMemoryFile index?
```

The territory is the correction chain between:

- prior inquiry: `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review`;
- corrected inquiry: `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`;
- human correction: the user asked whether keeping a record/index of Navigation-related file creations would be easier and feasible.

## Exploration Cycle 1 - Broad Artifact Scan

### Scan

Read the required root files and archived discipline outputs for both inquiry folders:

Prior inquiry:

- `_branch.md`
- `_state.md`
- `finding.md`
- `docarchive/exploration.md`
- `docarchive/sensemaking.md`
- `docarchive/decomposition.md`
- `docarchive/innovation.md`
- `docarchive/critique.md`

Corrected inquiry:

- `_branch.md`
- `_state.md`
- `finding.md`
- `docarchive/exploration.md`
- `docarchive/sensemaking.md`
- `docarchive/decomposition.md`
- `docarchive/innovation.md`
- `docarchive/critique.md`

### What Was Found

The prior inquiry asked whether early-stage Homegrown should run full Route Memory Review by default for robustness. Its answer was:

```text
early-stage durable Navigation
  + PastNavigationMemoryFile exists
  -> full Route Memory Review by default
```

It defined `PastNavigationMemoryFile` broadly as a file that records earlier Navigation routes, route states, blockers, stale routes, superseded routes, or route decisions.

The corrected inquiry asked whether Homegrown should keep a record of Navigation-related file creations as a `PastNavigationMemoryFile` index. Its answer was:

```text
create a narrow PastNavigationMemoryFile Index
  as non-authoritative candidate discovery registry
  with creation-time registration
  and active-tree scan/backfill fallback
```

### Signals Detected

1. The prior robust policy depends on knowing whether a `PastNavigationMemoryFile` exists.
2. The prior robust policy enumerates possible kinds of memory files, but it does not define a concrete discovery routine or discovery artifact.
3. The corrected inquiry's very first exploration signal says the early-stage trigger creates a detection problem.
4. The corrected inquiry narrows the user's "all Navigation-related file creations" idea into a `PastNavigationMemoryFile` candidate registry.
5. The corrected inquiry also recognizes stale-index and duplicate-authority risks.

### Resolution Decision

Zoom in on the prior inquiry's treatment of discovery. The key diagnostic question is not whether the prior robust policy was wrong. It is whether it made "source exists" load-bearing without specifying how existence is found.

### Probe

The prior finding's MUST actions include patching Navigation context intake so `past_navigation_memory_file: present` routes to full review by default during early-stage discovery mode.

That is a strong implementation-facing claim. It assumes the runner can classify `past_navigation_memory_file: present`, but the finding does not define:

- where to look;
- whether to scan the active tree;
- whether to exclude archives;
- how to handle unknown confidence;
- whether a maintained discovery artifact should exist;
- whether discovery failure should block or fall back.

### Frontier State

Frontier advancing. The correction chain appears to have a real discovery-pressure shape:

```text
source-present policy
  -> needs source discovery
  -> user asks for index
```

### Confidence Map Update

- Confirmed: prior policy made `PastNavigationMemoryFile` existence decisive.
- Confirmed: prior policy did not give an explicit discovery/index/search procedure.
- Scanned: corrected inquiry proposes an index as a response to that gap.
- Unknown: whether a maintained index was the best response, because the corrected inquiry itself may have overvalued durable indexing.

## Exploration Cycle 2 - Prior Loop Internal Evidence

### Scan

Probed prior inquiry discipline outputs for discovery treatment.

### What Was Found

Prior Exploration:

- mapped policy candidates such as absolute always-full, source-present review, early-stage robust default, latest trigger unchanged, periodic audit;
- found old route-memory source risk and implementation gaps;
- did not explore `PastNavigationMemoryFile` discovery mechanisms as a territory.

Prior Sensemaking:

- named policy layers: source layer, phase layer, review layer;
- said the source layer asks whether old route-memory source exists;
- resolved "always" into "always when route-memory source exists during early-stage robust mode";
- did not ask how to detect source presence reliably.

Prior Decomposition:

- listed "route-memory source detection" as an element;
- treated exceptions and route-memory source detection as moderately coupled;
- defined interfaces such as `route_memory_sources: none | present`;
- did not decompose discovery into paths, search rules, index, fallback, unknown state, or ownership.

Prior Innovation:

- generated `navigation_phase`, `route_memory_policy`, no-source exception, skip reasons, anti-authority template, and telemetry;
- did not generate a maintained index, active-tree discovery search, or discovery confidence status.

Prior Critique:

- evaluated robust-mode policy, no-source no-ops, anti-authority, exit telemetry, and cost;
- did not prosecute the source-present trigger on "how does the runner know source-present?"

### Signals Detected

1. Discovery was visible enough to be named, but not explored enough to be operational.
2. The prior loop focused on trigger policy and review safeguards.
3. The prior loop's state model used `present | none`, but did not include `unknown`.
4. The absence of `unknown` matters: if discovery is under-specified, the runner may falsely classify absence.
5. The prior loop's final patch guidance depended on Navigation context intake, which makes the missing discovery contract operationally important.

### Resolution Decision

Zoom in on the corrected inquiry's index recommendation to see whether it filled exactly these missing pieces or broadened beyond the gap.

### Probe

The prior loop did not need to fully implement discovery to answer the user's immediate "should robust mode run more often?" question. But once it proposed `past_navigation_memory_file: present` as a robust-mode trigger and as a MUST patch, discovery became a necessary interface.

This suggests mixed attribution:

```text
not a wrong robust policy
but an incomplete policy boundary
```

### Frontier State

Frontier stabilizing around an under-specified interface: `PastNavigationMemoryFile` discovery.

### Confidence Map Update

- Confirmed: prior loop did not solve discovery.
- Confirmed: prior loop made discovery load-bearing.
- Inferred: this likely created user pressure for an explicit index.
- Unknown: whether the right maintenance is an index, deterministic search, or a status/fallback contract.

## Exploration Cycle 3 - Corrected Loop Internal Evidence

### Scan

Probed corrected inquiry outputs for how it handled index feasibility and overcorrection risk.

### What Was Found

Corrected Exploration:

- explicitly starts from the detection problem created by the early-stage robust trigger;
- scans Navigation rules, warm-up docs, index precedents, current artifact population, and index shapes;
- finds the active tree small and index backfill cheap;
- notes that `PastNavigationMemoryFile` is broad enough that repeated raw scans are clumsy;
- also identifies stale-index risk and duplicate-authority risk.

Corrected Sensemaking:

- reframes the user's "all Navigation-related file creations" into "files that can function as PastNavigationMemoryFile entries";
- separates discovery from authority;
- requires creation-time ownership plus scan/backfill;
- rejects index-as-current-route-truth.

Corrected Decomposition:

- decomposes scope, schema, update ownership, review consumption, validation/backfill, and rollout timing;
- makes discovery/update/fallback first-class pieces.

Corrected Innovation:

- generates no-index scan each time, global index, event log, per-file metadata, hybrid registry plus scan refresh, and review consumed-set;
- kills scan-only as default but preserves it as fallback;
- selects hybrid registry plus scan/backfill.

Corrected Critique:

- evaluates scope correctness, authority separation, discovery usefulness, update ownership, stale-index robustness, and rollout coherence;
- kills broad all-Navigation file index;
- survives a hybrid `PastNavigationMemoryFile Index` as non-authoritative discovery registry.

### Signals Detected

1. The corrected loop directly fills the prior missing discovery interface.
2. The index idea was not accepted in the user's broad form; it was narrowed.
3. The corrected loop did consider scan-only, but killed it as default.
4. The corrected loop kept scan/backfill as fallback, which is a safeguard.
5. The corrected loop's weakest point is whether it fully validated deterministic active-tree search as a sufficient v1 replacement for a maintained index.

### Resolution Decision

Zoom out from "index good/bad" to "bridge or overcorrection."

### Probe

Based only on this correction chain, the index was a reasonable bridge because it solved the exact missing interface:

```text
How does Navigation find candidate PastNavigationMemoryFile files?
```

But it also had overcorrection risk because it moved from "discovery is under-specified" to "maintain a durable discovery registry" before proving that deterministic search patterns were insufficient for v1.

The corrected loop partially mitigated this by preserving active-tree scan/backfill. That means the index recommendation was not pure overreach. The open issue is whether the fallback undermines the need for the maintained registry.

### Frontier State

Frontier stable around two simultaneous findings:

- discovery gap was real;
- maintained index was plausible but not proven uniquely necessary.

### Confidence Map Update

- Confirmed: corrected loop repaired discovery interface more fully than prior.
- Confirmed: corrected loop killed broad all-Navigation file indexing.
- Confirmed: corrected loop preserved scan fallback.
- Inferred: index recommendation was a reasonable bridge under early-stage explicitness pressure.
- Inferred: index may still be an overcorrection if deterministic search is enough.

## Jump Scan

Different direction checked: what if the corrected inquiry itself is the weak link rather than the improved link?

Signals:

- The corrected finding says no-index scan-only was killed as default because it recreates discovery friction.
- The corrected finding also says active-tree scan/backfill is required because index absence can be dangerous.
- If search/backfill is deterministic and cheap, a maintained index may duplicate a source of truth and create update burden.
- The corrected inquiry was responding to a user question that explicitly proposed an index, so it may have been pulled toward artifact materialization.

Result:

The jump scan prevents treating the corrected index recommendation as ground truth. It suggests this diagnostic should not conclude "the prior loop should have recommended an index." The safer conclusion is:

```text
the prior loop should have specified PastNavigationMemoryFile discovery status and candidate discovery strategy
```

The strategy might have been:

- deterministic active-tree search;
- maintained index;
- hybrid index plus search;
- explicit `unknown` status until discovery is performed.

The correction chain does not prove which one is optimal by itself.

## Convergence Check

Frontier stability: yes. Additional reads are repeating the same interface gap: source-present trigger depends on discovery.

Declining discovery rate: yes. Later probes refine whether the index is bridge or overcorrection, but no new artifact region emerged.

Bounded gaps: mostly. The remaining gap is a Sensemaking judgment: how much blame to assign to the prior loop versus the later index loop, and what maintenance candidate is scoped enough.

Exploration converged.

## Territory Overview

The territory has four major regions:

1. **Prior robust policy:** early-stage durable Navigation should run full review by default when a `PastNavigationMemoryFile` exists.
2. **Missing discovery interface:** prior artifacts name source presence but do not define how to find sources, how to represent unknown discovery confidence, or what fallback to use.
3. **Later index proposal:** a narrow `PastNavigationMemoryFile Index` was recommended as non-authoritative candidate discovery with creation-time registration and scan/backfill.
4. **Overcorrection risk:** the later proposal may have moved to a maintained index before proving deterministic search was insufficient.

## Inventory

### Prior Inquiry Evidence

| Artifact | Discovery-Relevant Evidence | Confidence |
| --- | --- | --- |
| `_branch.md` | Asked phase-policy question, not discovery mechanism. | confirmed |
| `finding.md` | Makes `PastNavigationMemoryFile exists` the robust-mode trigger; lists file categories; does not specify discovery procedure. | confirmed |
| `exploration.md` | Maps policy options, not file-discovery options. | confirmed |
| `sensemaking.md` | Names source layer but does not operationalize source detection. | confirmed |
| `decomposition.md` | Names route-memory source detection as an element; does not split it into discovery/search/index/fallback. | confirmed |
| `innovation.md` | Generates phase/status/review/telemetry candidates; no discovery-index/search candidates. | confirmed |
| `critique.md` | Does not critique "how is source-present known?" | confirmed |

### Corrected Inquiry Evidence

| Artifact | Discovery-Relevant Evidence | Confidence |
| --- | --- | --- |
| `_branch.md` | Directly asks whether an index would make discovery easier and feasible. | confirmed |
| `finding.md` | Recommends a narrow index; rejects all Navigation-related file index; requires scan/backfill fallback. | confirmed |
| `exploration.md` | States current policy requires detecting `PastNavigationMemoryFile` existence and that breadth makes discovery nontrivial. | confirmed |
| `sensemaking.md` | Separates discovery from authority and feasibility from casual manual bookkeeping. | confirmed |
| `decomposition.md` | Makes scope, schema, update ownership, review consumption, validation/backfill, and rollout first-class. | confirmed |
| `innovation.md` | Tests scan-only, index, event log, per-file metadata, hybrid registry, consumed-set. | confirmed |
| `critique.md` | Survives hybrid index; kills broad index and route-disposition fields. | confirmed |

## Signal Log

| Signal | Status | Meaning |
| --- | --- | --- |
| Prior policy depends on `PastNavigationMemoryFile exists` | confirmed | Discovery became load-bearing. |
| Prior loop did not define discovery/search/index/fallback | confirmed | Source-present trigger was under-specified operationally. |
| Prior loop did name source layer/detection | confirmed | The miss was not total absence; it was shallow operationalization. |
| Corrected loop framed the index as discovery, not authority | confirmed | It repaired a real boundary. |
| Corrected loop narrowed "all Navigation-related files" | confirmed | It avoided the broadest overcorrection. |
| Corrected loop preserved scan/backfill fallback | confirmed | It recognized stale-index risk. |
| Search-only alternative may have been under-tested | inferred | Index may be a bridge but not proven necessary. |

## Confidence Map

Confirmed:

- Both folders exist and include complete archived E/S/D/I/C outputs.
- The prior robust-mode policy made `PastNavigationMemoryFile` presence decisive.
- The prior loop did not specify a complete discovery protocol.
- The corrected loop was motivated by discovery pressure.
- The corrected loop rejected broad all-Navigation-file indexing.

Scanned:

- Whether the index was the right solution.
- Whether scan-only was fairly considered in the corrected loop.

Inferred:

- The prior under-specification plausibly pushed the next loop toward a maintained index.
- The index was a reasonable bridge under early-stage explicitness pressure.
- The index also carried overcorrection risk because deterministic search may have been enough.

Unknown:

- Whether active-tree search would outperform a maintained v1 index in actual Navigation runs.
- Whether future route-memory artifact growth justifies a maintained registry.
- Which exact source files should be patched first.

Confirmed absent:

- No prior-loop section defines a full `PastNavigationMemoryFile Discovery Search`.
- No prior-loop candidate tests index vs search vs hybrid discovery.

## Frontier State

Closed enough for Sensemaking:

- The correction-chain shape is clear.
- The main ambiguity is not what happened, but how to classify the later index recommendation: necessary bridge, reasonable bridge, or overcorrection.

Open:

- Exact maintenance target.
- Whether the current diagnosis should recommend index edits, discovery-status edits, deterministic search, or another follow-up diagnosis.

## Gaps And Recommendations

Sensemaking should focus on this distinction:

```text
The prior loop did not need to solve every discovery implementation detail,
but once it made PastNavigationMemoryFile existence the robust-mode trigger,
it needed to define the discovery interface enough that future runners knew
how to decide present / absent / unknown.
```

Recommended diagnostic posture:

- Do not say the prior robust-mode policy was wrong.
- Do say it was incomplete at the source-discovery interface.
- Do not say the later index was proven optimal.
- Do say the later index was a reasonable bridge from the gap, with overcorrection risk if maintained state is unnecessary.
