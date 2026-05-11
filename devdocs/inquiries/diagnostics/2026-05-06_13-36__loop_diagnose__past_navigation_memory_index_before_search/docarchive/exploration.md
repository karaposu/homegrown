# Exploration: Loop Diagnose - Past Navigation Memory Index Before Search

## Mode and Entry Point

Mode: artifact exploration with diagnostic framing.

Entry point: signal-first. The signal is the user's correction: the prior inquiry recommended a maintained `PastNavigationMemoryFile Index`, and the later corrected inquiry says known filenames and path patterns make deterministic search a better v1 mechanism.

## Evidence Read

Required LOOP_DIAGNOSE fields were present:

- `prior_path`: `devdocs/inquiries/2026-05-06_07-06__past_navigation_memory_file_index_feasibility`
- `corrected_path`: `devdocs/inquiries/2026-05-06_10-21__past_navigation_memory_index_vs_search`
- `human_correction`: user challenged the maintained index because Homegrown can search known filenames and regex-searchable path patterns.
- `optional_context`: prior recommended `devdocs/navigation_context/past_navigation_memory_file_index.md`; corrected replaced it with `PastNavigationMemoryFile Discovery Search` plus optional run-local report.
- `diagnostic_goal`: identify what the prior loop likely missed, with affected stage or framing confidence.

Files read fully:

- Prior `_branch.md`, `_state.md`, `finding.md`.
- Prior `docarchive/exploration.md`, `docarchive/sensemaking.md`, `docarchive/decomposition.md`, `docarchive/innovation.md`, `docarchive/critique.md`.
- Corrected `_branch.md`, `_state.md`, `finding.md`.
- Corrected `docarchive/exploration.md`, `docarchive/sensemaking.md`, `docarchive/decomposition.md`, `docarchive/innovation.md`, `docarchive/critique.md`.
- `homegrown/protocols/loop_diagnose.md`.

Evidence volume:

- Prior inquiry artifacts: 2,128 lines by `wc -l`.
- Corrected inquiry artifacts: 1,771 lines by `wc -l`.
- Total compared inquiry evidence: 3,899 lines.

## Exploration Cycles

### Cycle 1 - Map Prior Inquiry Result

Scan:

- Prior branch question: should Homegrown keep a record of all Navigation-related file creations as a `PastNavigationMemoryFile` index, and is that easier/feasible?
- Prior finding: yes, create a narrow `PastNavigationMemoryFile Index` at `devdocs/navigation_context/past_navigation_memory_file_index.md`.
- Prior state: Exploration -> Sensemaking -> Decomposition -> Innovation -> Critique all completed; manual structural checks recorded because `tools/structural_check.sh` was missing.

Signals:

- The prior inquiry narrowed "all Navigation-related file creations" into "files that may contain past Navigation memory."
- The prior inquiry repeatedly protected the authority boundary: index = candidate discovery; Route Memory Review = current interpretation.
- The prior inquiry already required active-tree scan/backfill as fallback.
- The prior inquiry treated "one known place to find candidate memory files" as the main ease benefit.

Resolution decision:

Zoom in on the prior inquiry's use of search. The diagnostic question asks whether the prior loop under-tested deterministic search before recommending a maintained index.

Probe:

- Prior exploration Cycle 4 scanned active artifacts and found only `devdocs/navigation/next_load_bearing_after_navigation_warmup.md`, with no active `devdocs/navigation_context/`, `_frontier.md`, `route_memory_review.md`, `prior_map_overlay.md`, or inquiry-local `navigation.md`.
- Prior exploration Cycle 5 listed "generated-on-demand scan report with no durable index" and "hybrid durable index plus filesystem validation/backfill" as possibilities.
- Prior innovation Candidate A, "No Index, Scan Each Time," was killed as default because it "recreates discovery friction" and requires each runner to remember patterns.
- Prior critique killed scan-each-time as default but preserved active-tree scan as validation/backfill.

Frontier state:

Advancing. The prior loop did consider scanning, but mainly as fallback/validation, not as a first-class explicit protocol operation.

Confidence update:

Confirmed: the prior loop did not ignore search entirely.

Scanned: search was evaluated as "scan each time," not clearly as "protocol-owned deterministic discovery search with optional report."

### Cycle 2 - Map Corrected Inquiry Repair

Scan:

- Corrected branch question: if Homegrown can find candidates by searching known filenames and patterns, does it still need a maintained index?
- Corrected finding: no maintained global index as v1; use `PastNavigationMemoryFile Discovery Search`.
- Corrected state: completed full extended pipeline with manual structural-check fallback.

Signals:

- Corrected exploration re-read the prior finding and identified that the prior fallback weakened its own index conclusion.
- Corrected exploration tested active filename/path search and confirmed the current active candidate.
- Corrected exploration tested false positives and found that loose whole-codebase matching can return `homegrown/navigation/references/navigation.md`.
- Corrected sensemaking reframed explicitness as "documented search contract," not "global maintained file."
- Corrected critique killed both maintained global index as v1 and ad hoc search, preserving explicit discovery search plus optional run-local candidate report.

Resolution decision:

Zoom in on what changed: not "index vs no explicitness," but "maintained registry vs explicit derived search contract."

Probe:

Corrected artifacts introduced pieces absent or underdeveloped in the prior inquiry:

- Search scope: active `devdocs/`, excluding `docarchive/`, `archive/`, and `_archive/`.
- Candidate patterns: `devdocs/navigation/**/*.md`, `**/navigation.md`, `**/_frontier.md`, `**/route_memory_review.md`, `**/prior_map_overlay.md`, `**/sync_brief.md`.
- False-positive guard: do not search `homegrown/` route-memory candidates unless explicitly named.
- Output modes: inline status, Route Memory Review `Sources Read`, optional `past_navigation_memory_candidates.md`.
- Revival triggers for a maintained/generated global index.

Frontier state:

Advancing but bounded. The corrected inquiry repaired the v1 mechanism, not the underlying need for route-memory candidate discovery.

Confidence update:

Confirmed: the corrected inquiry directly corrects the prior maintained-index recommendation.

Scanned: the correction does not prove search will always be enough; it proves search-first is better for current v1.

### Cycle 3 - Reproduce Current Active-Tree Discovery Signal

Scan:

- `rg --files devdocs/navigation` currently returns `devdocs/navigation/next_load_bearing_after_navigation_warmup.md`.
- `find devdocs ... -name navigation.md` excluding archive/docarchive folders returned no active inquiry-local `navigation.md`.
- The same active-tree exclusion scan returned no active `_frontier.md`, `route_memory_review.md`, `prior_map_overlay.md`, or `sync_brief.md`.
- `rg --files homegrown -g 'navigation.md'` returns `homegrown/navigation/references/navigation.md`, confirming the corrected false-positive concern.

Signals:

- Current active candidate volume is tiny.
- The current active candidate is derivable by path/name search.
- Whole-repo basename matching can overmatch protocol/reference files.

Resolution decision:

Zoom out. The diagnostic needs to explain not just "search works now," but why the prior loop still selected an index while having many ingredients needed to avoid it.

Probe:

The current evidence supports a strong hypothesis that the prior loop treated search as an informal repeated human burden. It did not sufficiently test a third category:

```text
explicit search contract = protocolized search patterns + exclusions + optional saved report
```

Frontier state:

Stable for active-tree evidence.

Confidence update:

Confirmed for current tree: deterministic search finds the only active candidate family currently present.

Bounded gap: future artifacts may drift, so index revival triggers remain reasonable.

### Cycle 4 - Locate Likely Failure Surfaces

Scan:

Compared prior and corrected discipline outputs by stage.

Signals:

- Prior Exploration: recognized fallback scan, but did not probe "search as primary explicit mechanism" enough.
- Prior Sensemaking: strongly anchored on Homegrown explicit durable artifacts and "one known place," which favored a maintained Markdown index.
- Prior Decomposition: decomposed index scope, schema, ownership, review interface, validation/backfill, and rollout. It did not decompose an explicit search-contract alternative into scope, patterns, exclusions, output modes, and revival triggers.
- Prior Innovation: generated "No Index, Scan Each Time" but not "Explicit Discovery Search Contract" as its own strong candidate. It did generate "Generated-on-demand scan report with no durable index" in Exploration, but that did not survive as a primary design in Innovation.
- Prior Critique: adversarially tested stale-index and duplicate-authority risk, but accepted scan as fallback rather than asking whether fallback should be promoted to source-of-truth discovery.

Resolution decision:

Keep multiple possible attributions open. LOOP_DIAGNOSE forbids overconfident exact root cause unless artifacts isolate it.

Probe:

Candidate failure surfaces:

1. Exploration under-probed deterministic search as a primary mechanism.
2. Sensemaking over-weighted "explicit Markdown artifact" and "one known place" against "explicit repeatable mechanism."
3. Decomposition framed around index design pieces after the index survived the early frame, leaving search-contract design under-specified.
4. Innovation used a weak version of the no-index alternative: ad hoc scan each time. It did not give search the strongest protocolized form.
5. Critique let scan/backfill coexist with the index without prosecuting the contradiction that mandatory fallback can make the maintained index unnecessary.

Frontier state:

Stable. The strongest evidence clusters around Exploration, Sensemaking, Innovation, and Critique. Decomposition appears more downstream than primary.

Confidence update:

High confidence that the prior loop's candidate set was missing the corrected stronger alternative.

Medium confidence on exact discipline attribution because each stage inherited framing from prior stages.

### Cycle 5 - Maintenance-Candidate Territory

Scan:

LOOP_DIAGNOSE asks for maintenance candidates only when evidence supports them. It also warns against broad fundamentals rewrites from one chain.

Signals:

- The prior failure is not "never create indexes." The prior inquiry correctly preserved non-authority and killed broad all-Navigation indexing.
- The failure is narrower: when a proposal is a maintained registry, the loop should test whether the registry is a cached derivation of a cheap deterministic search.
- The corrected inquiry's better answer is a design pattern: derive at consumption time when names/paths are stable; save run-local artifact only when handoff/audit needs durability; revive index only behind observable triggers.

Resolution decision:

Pass to Sensemaking as a candidate maintenance heuristic, not as a confirmed source edit.

Probe:

Possible maintenance candidates:

- Add a critique check for maintained indexes/registries: if the index has scan/backfill fallback, evaluate whether the fallback should be the primary mechanism.
- Add an innovation prompt pattern: when comparing maintained registry vs search, generate "protocolized search contract + optional run-local report" before selecting.
- Add a sensemaking explicitness distinction: explicitness can be a documented repeatable operation, not only a maintained Markdown file.

Frontier state:

Open but bounded. Candidate actions are specific enough to test, but source edits should wait for final critique.

Confidence update:

Medium-high: candidates align with this correction chain.

Low for broad MVL+ rewrites from one example.

## Jump Scan

Different direction checked: whether the corrected inquiry could be overcorrecting by treating search as free and ignoring explicitness.

Signals:

- Corrected critique killed ad hoc search.
- Corrected finding explicitly says "The better v1 answer is not casual grep."
- Corrected finding preserves optional `past_navigation_memory_candidates.md` when handoff/audit matters.
- Corrected finding preserves generated/global index revival triggers.

Result:

The corrected inquiry did not simply invert to "never index." It preserved explicitness as a protocol-owned search contract and durable report mode. That makes the correction stronger comparative evidence.

## Convergence Check

Frontier stability: stable. Further reads repeat the same structure: prior had the ingredients for search but framed them as fallback; corrected promoted search into explicit protocol.

Declining discovery rate: yes. Later checks added nuance about overcorrection and maintenance scope, not new major failure surfaces.

Bounded gaps: bounded. Exact discipline attribution remains partially ambiguous, but LOOP_DIAGNOSE allows mixed attribution.

## Territory Overview

The diagnostic territory has four regions:

1. **Prior inquiry behavior:** index narrowed correctly, but search stayed fallback/support.
2. **Human correction:** direct challenge that known filenames/patterns make an index unnecessary.
3. **Corrected inquiry repair:** explicit search contract plus optional run-local report replaces maintained v1 index.
4. **Maintenance territory:** add checks that prevent a maintained registry from surviving when a cheap derived search can be protocolized.

## Inventory

Prior artifacts found:

- Strong index recommendation.
- Narrow scope correction away from all Navigation-related files.
- Clear authority boundary between index, Route Memory Review, and Navigation.
- Creation-time update ownership.
- Active-tree scan/backfill fallback.
- No first-class `PastNavigationMemoryFile Discovery Search` contract.

Corrected artifacts found:

- Direct correction of prior finding.
- Search test of current active tree.
- False-positive test against `homegrown/navigation/references/navigation.md`.
- Explicit search scope, patterns, exclusions, statuses, output modes.
- Optional run-local candidate report.
- Maintained/generated index revival triggers.

Candidate failure hypotheses found:

- Under-tested search-as-primary in Exploration.
- Over-weighted explicit maintained artifact in Sensemaking.
- Weak alternative generation in Innovation.
- Insufficient critique of duplicate mutable state when fallback scan was already required.
- Downstream decomposition around the wrong survivor.

## Signal Log

- Strong signal: prior finding itself requires active-tree scan/backfill fallback.
- Strong signal: corrected inquiry says that fallback undermines the maintained-index default.
- Strong signal: corrected inquiry physically tested active search and found current candidate.
- Strong signal: prior Innovation killed "No Index, Scan Each Time" but did not produce "Explicit Discovery Search Contract."
- Medium signal: prior Sensemaking's "known place" and explicit-artifact culture likely biased toward a maintained Markdown file.
- Medium signal: prior Critique was adversarial, but its dimensions were still index-centered.
- Weak signal: prior Decomposition may have contributed, but it appears downstream of earlier framing.

## Confidence Map

Confirmed:

- Both folders exist and all required artifacts were read.
- The prior inquiry recommended a maintained global index as v1.
- The corrected inquiry killed the maintained global index as v1 and replaced it with Discovery Search.
- The corrected inquiry is a declared correction of the prior inquiry.
- The current active route-memory candidate set is searchable and small.

Scanned:

- Discipline-by-discipline differences.
- Search false-positive and false-negative framing.
- Potential maintenance candidates.

Inferred:

- Prior Exploration likely under-tested protocolized search as primary.
- Prior Sensemaking likely over-associated explicitness with maintained Markdown registry.
- Prior Critique likely missed that mandatory scan/backfill should be prosecuted as a reason to demote the index.

Unknown:

- Whether a different human prompt in the prior inquiry would have naturally produced search-first without any protocol change.
- Whether the same failure appears across enough correction chains to justify a source edit immediately.
- Exact boundaries between Exploration failure, Sensemaking failure, Innovation failure, and Critique failure.

Confirmed absent:

- Prior artifacts do not define `PastNavigationMemoryFile Discovery Search` as the survivor.
- Prior artifacts do not provide output modes equivalent to `inline_status`, `route_memory_review_sources`, and `save_candidate_report`.

## Frontier State

Closed enough for Sensemaking:

- The correction chain is clean.
- Main failure surfaces are visible.
- Evidence supports mixed attribution rather than a single-discipline blame claim.

Open:

- Which failure hypothesis is strongest after conceptual stabilization.
- Which maintenance candidate is justified as ACTIONABLE versus PARTIAL.
- Whether to recommend a source edit now or require more loop-diagnose examples.

## Gaps and Recommendations

Pass to Sensemaking:

- Do not frame the failure as "the prior loop forgot search." It did not. It mislocated search as fallback instead of a first-class explicit mechanism.
- Do not frame the correction as "Homegrown should avoid files." The corrected inquiry preserves explicit durable artifacts when a search result needs handoff.
- Test this core diagnosis: the prior loop confused "explicitness" with "maintained registry" where "documented derivation + optional report" was the cleaner explicit mechanism.
