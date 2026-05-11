# Exploration: Navigation Correction Chain Failure Inventory

## Mode And Entry Point

Mode: artifact exploration.

Entry point: signal-first. The user named the signal: several Navigation-related inquiries corrected each other in ways that may reveal loop failures, including unclear naming, changing file-generation policy, and recommending an index before later rejecting it.

## Required Evidence Read

Read all root Markdown files and all `docarchive/*.md` files in these folders:

- `devdocs/inquiries/2026-05-04_17-56__prior_map_overlay_artifact_necessity`
- `devdocs/inquiries/2026-05-04_20-38__route_memory_review_file_necessity`
- `devdocs/inquiries/2026-05-05_17-12__route_memory_review_trigger_boundary`
- `devdocs/inquiries/2026-05-05_18-30__route_memory_preflight_reevaluation`
- `devdocs/inquiries/2026-05-05_20-02__early_stage_always_full_route_memory_review`
- `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`
- `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search`

Counted evidence set: 56 Markdown files, 10,596 lines by `wc -l`.

## Exploration Cycle 1 - Chronological Correction Chain

### Scan

Mapped the seven findings in order:

1. `prior_map_overlay_artifact_necessity`
   - Reframed `prior_map_overlay.md` as Route Memory Review.
   - Said saved file should be adaptive: inline for small same-session use; save only for durable handoff.

2. `route_memory_review_file_necessity`
   - Corrected the prior inline-default rule.
   - Said if Route Memory Review runs, it should write `route_memory_review.md`.
   - Moved bloat control from storage mode to trigger policy.

3. `route_memory_review_trigger_boundary`
   - Corrected project-level/bounded trigger language.
   - Said every Navigation run should include a cheap route-memory preflight.
   - Full review runs when relevant `PastNavigationMemoryFile` needs current interpretation.

4. `route_memory_preflight_reevaluation`
   - Corrected the "cheap Route-Memory Preflight" framing.
   - Said the cheap part should be route-memory status classification inside normal Navigation intake, not a standalone routine.
   - Tightened full review trigger to unresolved material old-route effect.

5. `early_stage_always_full_route_memory_review`
   - Reframed the tightened `review_needed` trigger as a mature optimized policy.
   - Said early-stage durable Navigation should run full review by default when a `PastNavigationMemoryFile` exists.
   - Added explicit exceptions, anti-authority safeguards, and exit telemetry.

6. `past_navigation_memory_file_index_feasibility`
   - Recommended a maintained `PastNavigationMemoryFile Index`.
   - Narrowed scope away from "all Navigation-related file creations."
   - Required the index to be a non-authoritative discovery registry with scan/backfill fallback.

7. `past_navigation_memory_index_vs_search`
   - Corrected the index recommendation.
   - Said known filename/path search makes a maintained index unnecessary as v1.
   - Replaced maintained index with `PastNavigationMemoryFile Discovery Search` plus optional run-local candidate report.

### Signals Detected

- The chain repeatedly corrects a boundary that was too broad, too narrow, or named in a confusing way.
- The strongest recurring distinction is operation vs artifact vs status vs discovery.
- Several earlier answers were locally coherent but did not test the next adjacent alternative hard enough.
- User corrections repeatedly supplied the missing dimension: explicitness culture, Navigation unity, early-stage robustness, understandable naming, and searchability.

### Resolution Decision

Zoom in on failure surfaces rather than only final policy.

The task is not to decide which current Navigation policy is right. The task is to inventory what went wrong between decisions so later `loop_diagnose.md` runs can isolate causes.

### Probe

The correction chain has at least four correction types:

- **Concept-name correction:** "prior-map overlay" and "Route-Memory Preflight" were later found misleading or too operation-like.
- **Policy-layer correction:** file generation moved from storage-mode choice to operation-output contract.
- **Trigger-boundary correction:** project-level/bounded became route-memory dependency, then intake status vs full review, then early-stage phase override.
- **Discovery-mechanism correction:** maintained index became search contract after deterministic filename/path search was tested.

### Frontier State

Advancing. The chronological map is stable, but failure classification still needs Sensemaking.

### Confidence Map Update

- Confirmed: each finding explicitly states a revision trigger from the user or prior finding.
- Confirmed: `route_memory_review_file_necessity` corrects `prior_map_overlay_artifact_necessity`.
- Confirmed: `route_memory_review_trigger_boundary` corrects `route_memory_review_file_necessity` on trigger language.
- Confirmed: `route_memory_preflight_reevaluation` refines the preflight model.
- Confirmed: `past_navigation_memory_index_vs_search` corrects `past_navigation_memory_file_index_feasibility`.
- Scanned: naming discomfort around `PastNavigationMemoryFile` and "source" appears partly in later user prompts, while the artifacts themselves use those terms as accepted vocabulary.
- Unknown: exact discipline attribution for each failure; that belongs to later `loop_diagnose.md` runs.

## Exploration Cycle 2 - Failure Signal Map

### Scan

Scanned all discipline outputs for places where later inquiries preserved, changed, killed, refined, or deferred earlier positions.

### Signals Detected

1. **Storage-mode failure**
   - Earlier answer: save Route Memory Review only when durable handoff matters.
   - Later correction: Homegrown treats meaningful operations as explicit artifacts; if full review runs, write `route_memory_review.md`.
   - Evidence: `route_memory_review_file_necessity/finding.md` says the prior inline-default rule was wrong for this codebase.

2. **Artifact-name failure**
   - Earlier terms: `prior_map_overlay.md`, prior-map overlay, route reconciliation.
   - Later term: Route Memory Review.
   - Evidence: `prior_map_overlay_artifact_necessity/finding.md` says the old names made the operation sound like bookkeeping and recommends Route Memory Review.

3. **Trigger-proxy failure**
   - Earlier trigger relied on project-level / big Navigation as a likely case for old-map review.
   - Later correction: trigger should follow route-memory dependency, not size.
   - Evidence: `route_memory_review_trigger_boundary/finding.md` explicitly rejects project-level vs bounded.

4. **Operation-proliferation failure**
   - Earlier correction introduced "cheap Route-Memory Preflight."
   - Later correction: that sounded like a new mandatory side ritual; it should be route-memory status classification inside intake.
   - Evidence: `route_memory_preflight_reevaluation/finding.md` says "Route-Memory Preflight" should not become a standalone routine.

5. **Vague trigger-language failure**
   - Earlier phrase: old maps "may affect" the new map.
   - Later correction: full review needs unresolved material old-route effect, then early-stage robust mode lowers the threshold by phase.
   - Evidence: `route_memory_preflight_reevaluation` calls "may affect" too broad; `early_stage_always_full_route_memory_review` says material-effect judgment is mature-policy logic.

6. **Premature optimization failure**
   - The mature `review_needed` test was clean but too judgment-heavy for early-stage Homegrown.
   - Later correction: use source-present review default during early-stage durable Navigation.
   - Evidence: `early_stage_always_full_route_memory_review/finding.md` says the system is uncalibrated and should review unless safely unnecessary.

7. **Unclear noun/source failure**
   - The artifacts use broad terms like `PastNavigationMemoryFile`, route-memory source, and source-present.
   - The user later objected to "source" as unclear and asked for a clearer name.
   - Artifact evidence: the early-stage finding and index feasibility files use "route-memory source" and `PastNavigationMemoryFile` heavily.
   - Confidence limit: the strongest evidence of user confusion is in chat context, not only inside these seven folders.

8. **Index-before-search failure**
   - The index feasibility finding recommended a maintained global index even though it also required active-tree scan/backfill.
   - Later correction: known path/name search can derive candidates, so the maintained index duplicates filesystem state as v1.
   - Evidence: `past_navigation_memory_index_vs_search/exploration.md` says the prior finding's fallback weakens its conclusion.

9. **Broad-index-scope failure avoided inside the same inquiry**
   - User asked about "all Navigation-related file creations."
   - The index feasibility inquiry correctly narrowed this to `PastNavigationMemoryFile` candidates.
   - This is a near-failure or locally repaired failure, not the same as the later index reversal.

10. **Authority-boundary recurring risk**
   - Several designs risked making old maps, index entries, or search results feel like current route truth.
   - Later findings repeatedly reasserted: old maps are evidence; review interprets; Navigation maps current routes.
   - Evidence appears in all seven findings.

11. **Process evidence limitation**
   - Earlier inquiry states, especially `2026-05-04_17-56`, `2026-05-04_20-38`, and `2026-05-05_17-12`, have compact state histories compared with later sequential MVL+ runs.
   - This matters for diagnosis because missing per-discipline history makes exact stage attribution weaker.
   - Confidence limit: this inquiry is about conceptual failures; process compactness should be diagnosed separately only if the correction chain needs it.

### Resolution Decision

Treat these as failure candidates, not final root causes.

The later `loop_diagnose.md` protocol requires prior path, corrected path, human correction, and a diagnostic goal. Most of these failure candidates correspond to pairwise correction chains.

### Probe

The best unit for later diagnosis is not "all seven at once." The better unit is one correction edge at a time:

- `17-56` -> `20-38`: file necessity and explicitness.
- `20-38` -> `17-12`: trigger boundary and project-level/bounded heuristic.
- `17-12` -> `18-30`: preflight wording and status vs review.
- `18-30` -> `20-02`: mature trigger vs early-stage phase policy.
- `20-02` -> `07-06`: discovery-index idea from robust-mode source detection.
- `07-06` -> `10-21`: maintained index vs deterministic discovery search.

There may also be cross-chain diagnostics:

- naming drift across `17-56`, `17-12`, `18-30`, `20-02`, and `07-06`;
- authority-boundary recurrence across all seven.

### Frontier State

Stable enough to pass to Sensemaking.

## Jump Scan

Different direction checked: whether the chain is only healthy iterative refinement rather than failure.

Signals:

- Some changes are normal learning: index feasibility narrowed "all Navigation-related files" inside the inquiry, and early-stage robust mode explicitly preserves mature trigger as future policy.
- Some changes are corrections of wrong or misleading prior outputs: inline-default file rule was explicitly called wrong, project-level/bounded split was explicitly called unnatural, and maintained index was explicitly corrected by search.

Result:

The final inventory should distinguish:

- **failure:** prior answer created a wrong or misleading rule later corrected by user signal;
- **near-failure repaired in-run:** prior framing was narrowed within the same inquiry;
- **policy refinement:** later phase/context changed the best rule without making the earlier one wholly wrong;
- **diagnostic uncertainty:** artifacts do not isolate exact failing discipline.

## Convergence Check

Frontier stability: stable. All required evidence folders and archived discipline outputs have been read.

Declining discovery rate: yes. Later scans repeated the same failure surfaces rather than adding new artifact families.

Bounded gaps: yes. Remaining gaps are attribution questions for later `loop_diagnose.md` runs, not missing evidence for the requested failure inventory.

## Territory Overview

The correction chain covers five major regions:

1. Route Memory Review naming and file identity.
2. Route Memory Review trigger policy.
3. Status classification versus full review.
4. Early-stage robust phase policy.
5. PastNavigationMemoryFile discovery mechanism.

The chain also has two cross-cutting regions:

- authority separation: old memory/search/index are evidence, not current truth;
- explicitness versus bloat: meaningful operations produce artifacts, no-op checks should not.

## Inventory

### Inquiry Roles

| Inquiry | Main role in chain |
| --- | --- |
| `2026-05-04_17-56__prior_map_overlay_artifact_necessity` | Reframes overlay as Route Memory Review but keeps adaptive save policy. |
| `2026-05-04_20-38__route_memory_review_file_necessity` | Corrects adaptive save policy; full review writes file. |
| `2026-05-05_17-12__route_memory_review_trigger_boundary` | Corrects project-level/bounded trigger; introduces universal preflight. |
| `2026-05-05_18-30__route_memory_preflight_reevaluation` | Corrects preflight wording; separates intake status from full review. |
| `2026-05-05_20-02__early_stage_always_full_route_memory_review` | Overrides mature trigger for early-stage robust mode. |
| `2026-05-06_07-06__past_navigation_memory_file_index_feasibility` | Recommends maintained discovery index. |
| `2026-05-06_10-21__past_navigation_memory_index_vs_search` | Corrects maintained index; replaces with discovery search contract. |

### Candidate Failures For Later Diagnosis

- Misnamed operation.
- Wrong file-generation boundary.
- Wrong trigger proxy.
- Standalone preflight smell.
- Vague materiality wording.
- Mature-policy applied too early.
- Unclear source/name vocabulary.
- Maintained index recommended before deterministic search was tested.
- Broad file-creation index almost conflated with route-memory candidate index.
- Repeated authority-boundary risk.
- Weak process trace in earlier inquiries.

## Signal Log

| Signal | Evidence | Confidence |
| --- | --- | --- |
| Inline-default storage was wrong for Homegrown explicitness | `route_memory_review_file_necessity/finding.md` corrects `prior_map_overlay_artifact_necessity` | confirmed |
| Project-level/bounded trigger was wrong | `route_memory_review_trigger_boundary/finding.md` says the user's smell is correct | confirmed |
| "Route-Memory Preflight" wording was unclean | `route_memory_preflight_reevaluation/finding.md` says it should be status classification inside intake | confirmed |
| Material-effect trigger was too optimized for current phase | `early_stage_always_full_route_memory_review/finding.md` treats it as mature policy | confirmed |
| Maintained index was premature | `past_navigation_memory_index_vs_search/finding.md` corrects index feasibility | confirmed |
| Search contract needs exclusions | index-vs-search exploration found `homegrown/navigation/references/navigation.md` false positive | confirmed |
| Naming/source wording confused the user | user prompt and chat context; artifact uses source/PastNavigationMemoryFile terms repeatedly | scanned, external to artifacts |
| Exact failed discipline is not isolated yet | artifacts show correction effects but not root-cause location | confirmed |

## Confidence Map

Confirmed:

- All required root and archived Markdown files were read.
- The seven inquiries form a real correction chain.
- Several later findings explicitly correct or refine earlier findings.
- The maintained index recommendation was corrected by the later search inquiry.

Scanned:

- Naming failures across `prior_map_overlay`, `Route-Memory Preflight`, "source," and `PastNavigationMemoryFile`.
- Earlier state-file process traces.

Inferred:

- The recurring root pattern may be insufficient separation between semantic operation, artifact, trigger, and discovery mechanism.
- Some failures likely originated in Sensemaking boundary collapse or Exploration not testing adjacent alternatives, but exact attribution needs `loop_diagnose.md`.

Unknown:

- Which discipline failed for each correction edge.
- Whether source edits after these findings already repaired some failures.
- Whether the user wants one aggregate `loop_diagnose` run or multiple pairwise runs.

## Frontier State

The evidence frontier is closed for the user's requested inventory.

The diagnostic frontier remains open and should be handled by later `homegrown/protocols/loop_diagnose.md` runs.

## Gaps And Recommendations

Pass to Sensemaking:

- Classify each failure as wrong answer, unclear name, premature optimization, overcorrection, or locally repaired near-failure.
- Separate direct evidence from inference.
- Produce pairwise `loop_diagnose.md` prompts with normalized `prior_path`, `corrected_path`, `human_correction`, optional context, and diagnostic goal.

Avoid:

- claiming exact discipline root cause without loop diagnosis;
- treating every correction as a failure;
- treating the later corrected inquiry as guaranteed truth.
